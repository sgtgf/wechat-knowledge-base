# 有感BLDC电机三相导通相的确定

原创 电路一点通 2025-09-15 19:01 广东

> 原文地址: [https://mp.weixin.qq.com/s/9HkmxOMmtvSGzlhcjM232Q](https://mp.weixin.qq.com/s/9HkmxOMmtvSGzlhcjM232Q)

**一、反电动势的测量**  

1、连接虚拟中心点：连接三个相同阻值电阻（300K-600K均可）到电机的三相接线上，电阻另外一端连接到一起即为虚拟中心点。

[![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_000_05741110ac8c.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

  

2、红色线为示波器的通道4，将示波器的一个通道的地夹在构建的虚拟中心点上面，另一端接在U相上面（无法确定UVW三相时，任意接其中一相即可）

**二、霍尔传感器状态的测量**

1、霍尔电源一般为5V，将霍尔电源线VCC和GND接在对应的电压源上面；（这两根线必须确定，一般为红色和黑色）

2、将霍尔信号线分别定义为Hu（黄色1通道）、Hv（绿色2通道）、Hw（蓝色3通道）。将示波器的三个通道分别夹到对应的信号线上面，地均接到电源GND即可；（不确定哪一个线对应哪个相不影响后续测量和计算）

注：霍尔传感器的输出通常采用的是集电极开路类型，其电压范围一般为4-24V，所需电流范围一般为5-15mA，因此有些时候三根霍尔信号线上面可能需要接上拉电阻到VCC上。示自己所采用的电机而定。

**三、U相反电动势与霍尔信号线同步测量**

用手旋转电机轴，使其顺时针旋转，或者在电机上面绕线，通过扯线使电机旋转，可以测得反电动势和霍尔信号如下图所示：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_001_91f4d08612fa.png)

放大波形后如下图所示：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_002_3b35b5d6aa69.png)

如上所述：

黄色1通道→Hu霍尔信号→霍尔a信号→霍尔定时器CH1捕获

绿色2通道→Hv霍尔信号→霍尔b信号→霍尔定时器CH2捕获

蓝色3通道→Hw霍尔信号→霍尔c信号→霍尔定时器CH3捕获

红色4通道→U相反电动势

**四、导通相的确定和分析**

1、从反电动势和霍尔信号的波形可以按上述原图绘出如下直观图形

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_003_1e1232c26199.png)

2、由于三相电压相差120°，所以从U相电压可以推导出V相和W相电压的波形（无法确定V相和U相的相线也不要紧，确定导通相后，无法正常旋转时，调换两相顺序即可）

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_004_8c4fb30053b3.png)

3、有感BLDC通常采用上桥PWM下桥直通的方式进行驱动，可依据上述UVW三相波形得出下列大致的三相反电动波形（以下仅为更直观的观测导通相，实际由上述波形图即可得出对应的导通相）

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_005_465795c6ce65.png)

4、根据上图反电动势过零点的位置，可以得出三相分别对应的导通状态如下：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_006_ef1bec2def92.png)

即可得到对应的顺时针选择时驱动相与霍尔信号的对应关系

5、导通相与霍尔信号三相a/b/c的一一对应程序关系如下：

step = **get\_hall\_state**();

**switch**(step)

{

**case** 3: //V+ U-

**Motor\_Lacation\_CFG\_VU**();

**break**;

**case** 2: //W+ U-

**Motor\_Lacation\_CFG\_WU**();

**break**;

**case** 6: //W+ V-

**Motor\_Lacation\_CFG\_WV**();

**break**;

**case** 4: //U+ V-

**Motor\_Lacation\_CFG\_UV**();

**break**;

**case** 5: //U+ W-

**Motor\_Lacation\_CFG\_UW**();

**break**;

**case** 1: //V+ W-

**Motor\_Lacation\_CFG\_VW**();

**break**;

**default**: //关闭输出

**Motor\_Lacation\_Stop**();

**break**;

}

uint8\_t **get\_hall\_state**(**void**)

{

uint8\_t state = 0;

**if**((HALL\_TIM\_CH1\_GPIO->INDR & HALL\_TIM\_CH1\_PIN) != (uint32\_t)_Bit\_RESET_) //CH1状态获取----A

{

state |= 0x01U << 2;

}

**if**((HALL\_TIM\_CH2\_GPIO->INDR & HALL\_TIM\_CH2\_PIN) != (uint32\_t)_Bit\_RESET_) //CH2状态获取----B

{

state |= 0x01U << 1;

}

**if**((HALL\_TIM\_CH3\_GPIO->INDR & HALL\_TIM\_CH3\_PIN) != (uint32\_t)_Bit\_RESET_) //CH3状态获取----C

{

state |= 0x01U << 0;

}

**return** state; // 返回传感器状态

}

  

![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\有感BLDC电机三相导通相的确定_images\img_007_5a4c6df107bc.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️