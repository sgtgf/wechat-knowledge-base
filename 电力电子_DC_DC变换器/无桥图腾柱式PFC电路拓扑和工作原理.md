# 无桥图腾柱式PFC电路拓扑和工作原理

原创 电路一点通 2025-07-12 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/EvLN9PA5Iuu4BHb7mVVEmg](https://mp.weixin.qq.com/s/EvLN9PA5Iuu4BHb7mVVEmg)

#### 文章目录

####   

-   工作原理
    
-   控制策略
    
-   拓展1：双向AC-DC电路拓扑
    
      
    

### 工作原理

> 以单极性SPWM调制方式为例，说明图腾柱PFC的工作原理。此处仅以正向AC-DC说明。后续会专门介绍DC-AC的功能介绍。

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_000_6d7373ccf89d.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

无桥图腾柱式PFC电路拓扑有如下两种：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_001_0352b161f7ed.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_002_9dfaaffbd446.png)

两者拓扑的区别：

1.  在采用单极性SPWM调制时，两种拓扑的工作原理一致。仅是右边拓扑MOS管（慢管）导通损耗会较小。下面会详细说明其工作原理。
    
2.  左边的拓扑仅能采用单极性SPWM调制，而右边的拓扑还可采用单极性倍频调制、双极性调制。
    

> 单极性和双极性SPWM比较。（这里的波形是逆变电流的中点电位UAB波形）
> 
> ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_003_7d893cad7f21.png)
> 
> ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_004_96b61aa394d9.other)
> 
> 其主要原理为：调制信号ur为正弦波，载波uc在ur的正半周为正极性的三角波，在ur的负半周 为负极性的三角波。
> 
> -   单极性SPWM：
>     
> 
> -   在ur的正半周，V1保持通态，V2保持断态。当ur>uc时,使V4导通，V3关断，uo=Ud。当ur<uc时,使V4关断,V3导通,uo=0。
>     
> -   在ur的负半周，V1保持断态，V2保持通态。当ur<uc时,使V3 导通，V4 关断，uo=-Ud。当ur>uc时使 V3关断，V4 导通，uo=0。
>     
> 
> -   双极性SPWM
>     
> 
> -   当ur>uc时， V1和V4导通，V2和V3关断，这时如io >0，则V1和V4通，如 io<0，则VD1 和VD4 通，不管哪种情况都是uo=Ud 。
>     
> -   当ur<uc时，V2和V3导通，V1和V4关断，这时如io<0，则V2 和V3通，如 io>0，则VD2 和VD3 通，不管哪种情况都是uo=-Ud 。
>     
> 
> -   单极倍频SPWM
>     
> 
> -   从Uo的波形可以看出，两路双极性调制经过全桥功率管的叠加之后最终的Uo波形变成了单极性，而且频率加倍，这就是这种调制方式称为单极性倍频调制的原因。这种调制方式波形完美，对各种负载的适应性好，因为倍频输出，LC的体积和成本可以比较小，缺点是4个功率管都工作在高频状态,因而开关损耗比较大。
>     

**问：不同的调制方式下，系统的工作模态会有所区别，那么什么是调制方式？**

答：调制方式指的是对开关管的导通时间进行调制的方法。常见的调制方式包括单极性调制（Single-Polarity Modulation）和双极性调制（Dual-Polarity Modulation）。调制方式决定了开关管导通时间的规律，从而影响输出电压的波形和功率因数校正的效果。

下面，将分析单极性SPWM调制方式的工作模态，由于正负半周相对称，下面以正周期为例Vac>0，可以分为三个模态：（S3为常开状态，S4为常闭状态。）

**工作模态一**：此时Vg2和Vg4导通，电感电流上升，电感进行储能。S1体二极管仅在死区时间导通，可实现软开关，S1可在Toff时间导通，减少体二极管的压降。

![img](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_005_c8a22a935f97.png)

**工作模态二**：此时Vg1和Vg4导通，电感释放能量，电感电流下降。

![img](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_006_cdd24af74d64.png)

**工作模态三**：当电压正半周过零点时，S4关闭，S1导通时，此时也会导致单极性SPWM存在**电流过零畸变**的缺陷。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_007_3fa44016bee5.png)

整个系统可以分为6个工作模态，如下所示：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_008_9f22e64f5a49.png)

### 控制策略

> 控制策略指的是根据输入电压和输出电流等信息，确定开关管导通时间的策略。控制策略的目标是调整开关管的导通时间，使得输出电流能够与输入电压同相或近似同相，从而实现功率因数校正。常见的控制策略包括平均电流模式（Average Current Mode）和边界电流模式（Boundary Current Mode）等。（其中，平均电流控制是CCM控制中的一种，还有峰值电流控制和滞环电流控制等）
> 
> -   CCM模式：适用于中等、大功率应用
>     
> -   DCM：最大峰值电流和电流纹波都比较大，开关管等器件的电流应力也比较大，一般适用于中小功率场合
>     

CCM模式下的控制策略又可分为：平均电流控制、 峰值电流控制和滞环电流控制等，控制策略如下图所示：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_009_7dd27a112b24.png)

**峰值电流控制**：通过采样电感电流与参考基准进行比较，据此生成 PWM 控制信号，通过占空比来对电流进行调节控制。 但是峰值电流控制对噪声比较敏感，而且在占空比超过 0.5 时会出现控制不稳定，需要额外加斜坡偿。

**滞环电流控制**：电流参考有 上下两个阈值。 滞环电流控制具有动态响应快、控制式自带限流功能等优点，但是滞环电流控制在一个周期内频率持续变化，容易降低电路 EMI 性能。

**平均电流控制**:同样也是采 样电感电流， 并与电流参 考比较生 成 PWM 控制信号。 **平均电流控制一般采用双环路控制，电压外环带宽较窄，环路响应速度慢，可以有效地减弱干扰对控制环路的影响**；电流内环响应较快，使得控制的电流可以准确地跟踪参考。而且在一个周期内频率恒定，EMI 性能比滞环电流控制好， 控制环路设计也较为简单。

### 拓展1：双向AC-DC电路拓扑

**开关拓扑**

对于无桥图腾柱而言，也常用于V2G的技术当中，即双向AC-DC变换电路中。对于AC-DC双向变换电路中，采用的拓扑还有如下所示：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_010_d15f23e485f9.png)

-   **电压型全桥结构**
    
    ：电路整体较为简单；对比半桥，功率等级更高。
    
-   **电压型半桥拓扑结构**
    
    ：结构简单；电压应力高；若电容分压不均，导致中点电压失衡。
    
-   **带中性点二极管箝位电压型三电平结构**
    
    ：交流电流的谐波量更低，正弦度更好，更高的PF值；电路复杂，控制复杂，损耗较大；适用于大功率场合。
    
-   **电压型交错图腾柱式结构**
    
    ：该拓扑结构的两个电感能够起到分流的作用，大大降低了每个桥臂开关管的电流应力，并且结合无桥和交错并联的技术可减少变换器的纹波，改善变换器的EMI特性，一定程度的提升变换器的功率密度，适用于较大功率的场合。
    

  

### 参考博客

1.  单相全桥逆变原理及仿真实验
    
## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[快速泄放电路的设计原理与应用](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548542&idx=2&sn=0638a3dc323e37314f623e8507becfe3&scene=21#wechat_redirect)**
    
-   **[嵌入式电路基础--读懂原理图就是这么简单](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548445&idx=1&sn=6bbb64ae72024d97b6a2424ada5587eb&scene=21#wechat_redirect)**
    
-   **[谁说东风奕派是杂牌车？今天必须给它正名](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523283&idx=1&sn=e7d56765b84fac2850073dd7bec50979&scene=21#wechat_redirect)**
    
-   **[五星级大酒店全系统弱电智能化设计方案（含18个系统）-157页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259890&idx=2&sn=2b3f11317045ff56c954fce8c16c66e3&scene=21#wechat_redirect)**
    
-   **[建筑电气施工图怎么看？工程量计算全攻略，一文搞定识图避坑 + 算量技巧！](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484698&idx=1&sn=ee96a6658d44789ff71417e1cee12838&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥图腾柱式PFC电路拓扑和工作原理_images\img_011_6030e5e2dccc.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

******进大家庭⭕圈探讨回复:****** ******交流******  

分享💬点赞👍在看❤️