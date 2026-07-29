# ADC高速采样电路设计详解：STM32 踩坑?

原创 电路一点通 2024-10-05 12:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/XGfFjcYJg3zoONz9T3xn5g](https://mp.weixin.qq.com/s/XGfFjcYJg3zoONz9T3xn5g)

## 一、踩坑过程  

        最近用STM32F334做数字电源，用到了高速ADC采集电压电流。设计的参考电压VREF为3.3V，输入信号经运放跟随后直接接入单片机的采样通道。一开始测试一切正常，但随着输入信号增加到2.5V左右，采集到的电压值突然严重偏大（比如实际2.5V，ADC采集到的电压为2.6V）。  
        首先排除软件问题，因为电压较低时采集到的数据一切正常。然后检查硬件问题，确认输入信号正常，确认参考电压正常，甚至排除了通道间相互干扰的可能性，最终问题依旧。也怀疑过单片机自身的缺陷，但根据多年的踩坑经验，大概率还是自己的硬件设计或者软件有不完善的地方。

**👇👇👇更多技术资料👇👇👇  
**

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_000_de8f365fdafb.jpg)

        对比以往的经验，所用到的ADC的采样率都很低（基本上小于1kHz），而这次采样率很高（达到300kHz）。因此初步怀疑，这次和以往的不同应该有什么没注意到的问题。由于需要快速采样，本次的ADC时钟到达72MHz，采样时间设为了最小1.5个周期，单次采样时间0.149us左右。配置代码如下  

`ADC_StructInit(&ADC_InitStructure);   ADC_InitStructure.ADC_ContinuousConvMode = ADC_ContinuousConvMode_Disable;  //单次触发模式   ADC_InitStructure.ADC_Resolution = ADC_Resolution_12b;    ADC_InitStructure.ADC_ExternalTrigConvEvent = ADC_ExternalTrigConvEvent_7;  //HRTIM_ADCTRG1 event            ADC_InitStructure.ADC_ExternalTrigEventEdge = ADC_ExternalTrigEventEdge_RisingEdge;   ADC_InitStructure.ADC_DataAlign = ADC_DataAlign_Right;   ADC_InitStructure.ADC_OverrunMode = ADC_OverrunMode_Disable;      ADC_InitStructure.ADC_AutoInjMode = ADC_AutoInjec_Disable;     ADC_InitStructure.ADC_NbrOfRegChannel = 4;   ADC_Init(ADC1, &ADC_InitStructure);      /* ADC1 regular channel configuration */    ADC_RegularChannelConfig(ADC1, ADC_Channel_1, 1, ADC_SampleTime_1Cycles5);  //VISENS   ADC_RegularChannelConfig(ADC1, ADC_Channel_2, 2, ADC_SampleTime_1Cycles5);  //IOSENS   ADC_RegularChannelConfig(ADC1, ADC_Channel_3, 3, ADC_SampleTime_1Cycles5);  //VOSENS1   ADC_RegularChannelConfig(ADC1, ADC_Channel_4, 4, ADC_Sample``Time_1Cycles5);  //VOSENS2`

        怀疑采样时间太快，导致采集出错，因此将采样时间设大。设大后有明显效果，采集到的值误差变小，基本判定此处有玄机。于是仔细看了下手册关于采样时间的的描述

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_001_7ff8bb90689f.png)

描述中明确提到，需要有足够的采样时间，确保输入信号对内嵌的保持电容充电并达到稳定状态。之后把采样时间设置到最大，采样的结果好了很多，但却没有完全解决问题。明显这已经不能真正解决问题了，因为采样时间已经超出我能接受的范围。同时还有一个疑惑，如果充电时间太短导致电压未达到实际值，采样结果应该偏小才对，为啥会偏大呢？  
        看来是有必要把ADC的相关问题系统彻底的研究一下了。首先应该深入了解下单片机内ADC的基本原理，在网上找到了一篇文章https://blog.csdn.net/Zhuo3364/article/details/142112282，看完后才真正解开了我的疑惑。问题就出在输入信号的处理上。由于我直接运放跟随后接入ADC，在低速采样时有足够时间来稳定电压，所以不会有问题。但在高速时，采样开关开启的瞬间，放大器会产生尖峰。又由于采集时间很短，尖峰还未消除，采集开关已经关闭，因此实际采样到的值会偏大。至此问题算是真的找到了，下面将ADC采样电路的设计要点总结一下。

## 二、ADC设计要点总结

### 1、基准源的设计

        首先基准电压肯定要稳，而且应该要有一定的驱动能力。有一篇关于基准的文章https://www.bilibili.com/read/cv35121342/值得仔细研读。

### 2、输入信号的设计

-   #### 输入信号为什么要处理       
    

         关于输入信号，很多新手都会犯一个错误，就是直接把电阻分压的信号接入ADC采样，如下图示意。为什么说这是个错误呢，经历过的人就知道这样采样得到的值也会有偏差，严重时跟设计完全不符。

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_002_7ef41a93e407.png)

        这个问题在于，ADC本身有一定的输入阻抗，但阻抗并不高，有些甚至只有几kΩ。这样直接接入信号，ADC的输入阻抗就会起到分压的作用。如下图，ADC的输入阻抗Rz和R2并联后再和R1分压，因此实际分压比就和设计的完全不同了，采样到的值自然会和设计值差别很大。所以输入信号应该要做适当的处理。

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_003_51881841b894.png)

-   #### 输入信号跟随
    

        常规的处理，就是输入信号加个跟随器，因为放大器的输入阻抗可以认为是无穷大的，所以不存在上述分压的问题。这基本上可以满足绝大部分低速采样的需求，但对于高速采样，只跟随不滤波也会有问题，这也是本次踩坑的点所在。

-   #### 输入信号抗混叠
    

        找了一个专用的ADC手测仔细研究了下，里面重点就强调了输入信号抗混叠的处理。其实就是对输入信号进行低通滤波。

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_004_2432a4ff0de5.png)

        下面这张图片也很好的显示了输入信号加RC滤波和不加的区别，这也是为什么我这次踩坑的原因。从不加RC的曲线可以看到，采样瞬间放大器输出信号产生了一个尖峰，如果采样周期很短，尖峰还未消除，就完成了采样，那么采样到的值肯定偏大。而加了RC的曲线则是平稳上升到实际的值。

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_005_55ba1c0eeaac.png)

## 三、反思

        很多时候我们以为自己懂了，其实没懂，只是凑巧没出问题而已。知其然后还是应该要知其所以然，面对问题方能处变不惊，游刃有余。

作者：world9999

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\ADC高速采样电路设计详解_STM32_踩坑__images\img_006_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******