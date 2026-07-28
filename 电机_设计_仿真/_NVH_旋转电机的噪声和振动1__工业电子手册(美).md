# 【NVH】旋转电机的噪声和振动1——工业电子手册(美)

原创 Mr 晋 玩转电机设计 2024-10-07 17:17 浙江

> 原文地址: [https://mp.weixin.qq.com/s/ERr85XXRE2fQbO85uu4ncQ](https://mp.weixin.qq.com/s/ERr85XXRE2fQbO85uu4ncQ)

**vision**：**知识无涯，而工程问题有涯****。****死磕问题，紧跟前沿，总结分享。****助力中国电机引领全球！**

  

给大家带来一个系列译文，预计4篇。原文摘自美国《工业电子手册 功率电子和电机驱动___》第二版__，第9章。_《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》  
__

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyESGZcdD2NePs5zE3Mh9ib7R7RMuaunQN5USNvNicYquGQD5Y8SX8LTyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyjnicUyYV1ZSGqbLvWgNLM6qUXxCEgRgbpWg4M8kffX9xy7feltQoGjA/640?wx_fmt=png&from=appmsg)

**1介绍**  

对于电动机来说，噪声和振动问题非常重要。关于噪声的标准越来越严格。为了给特定尺寸的电机增加功率的趋势(提升功率密度)导致了噪声和振动的增加。这就是为什么了解产生声学噪音的现象不仅是设计现代电机所必需的，而且也是分析具有声学和振动问题系统的必要条件的原因。本章重点研究与电网连接或使用可调速驱动器的交流电动机产生的噪声，特别强调磁场引起的噪声。

目标是多方面的，它们旨在回答以下问题：振动和声音之间有什么联系？如何利用交流电机的声音频谱？如何预测噪声和振动并避免其发生？  

第9.2章介绍了电机的噪声来源。典型电机噪声的频谱图被描绘出来。然后，

在第9.3节中，描述了电磁噪声现象。建议的分析方法使得可以理解磁通密度谐波对噪声力的贡献是什么。

在第9.4节中，提出了一种旋转电机的机械和声学分析模型。这些发展很重要，因为产生噪声的力不仅取决于其幅度和频率，还取决于机械结构响应。该方法允许强调的是：为高效声学设计提供重要参数。

最后，第9.5节介绍了一种确定交流电机磁通密度谐波的分析方法。

**2****旋转电机噪声和振动来源**

### 2.1 机械、气动和磁性噪音

旋转电机的噪声基本上有三种来源：机械、电磁、气动

### 2.1.1机械噪声

机械源噪声主要来自轴承。它存在于大多数旋转电机中，除了磁轴承。这种噪音的水平，和摩擦相关，取决于轴承的类型和质量、润滑油、和转子的速度。

一般认为滑动轴承产生的噪声远低于其他轴承噪声。对于滚子轴承，噪声主要取决于外圈共振频率;这些轴承有时会产生高音，当注入少量油脂时，这些声音会暂时消失。用油润滑的滚子轴承噪音较小。

还需要考虑电刷的摩擦，特别是直流电机，因为集电极不光滑。由机械摩擦引起的声级通常随速度的平方而增加。机械噪音只对高转速的机器很重要。

### 2.1.2 气动噪声

气动噪音通常比机械噪音更高。空气振动产生的噪音，旋转部件产生空气湍流和噪音。它们来自风扇或转子的活动部分，这些部分像风扇一样工作（例如感应电机转子的末端）。空气流动中的障碍物也会增加噪音。通风允许对冷却进行对流；它显著地减少了机器的大小，但它会产生噪音。因此，要么绘制一个小尺寸的机器，要么绘制一个嘈杂的机器，需要设计师权衡。气动噪音与速度的五次方成正比增加。每分钟一千转时，80分贝的通风噪音达到三千转时104分贝。

### 2.1.3磁噪声

磁源噪声的水平是可变的，因为它取决于设计、负载、速度和电源。对于低速机器来说，磁性噪声几乎总是占主导地位。它是由电磁力产生的，这些力发生在定子和转子之间。它们产生机器的振动，主要是定子的振动。当电磁力的频率接近定子的共振频率时，振动和噪声会放大。旋转电机的磁性噪声可以通过切断电力供应而与其他噪音区分开来：磁性噪声立即停止，而空气动力学和机械噪声随着速度的降低逐渐减少。声谱显示了很少的细线，这是磁性噪声的特点。

### 2.2旋转电机频谱的示例

以下谱图是几种类型的无负载运转的旋转电机。它们使用频谱分析仪获得；它显示了测量信号的FFT，这些信号来自  
•.一个麦克风，位于测试机器表面一米处，在半消声室中放置。  
• 一个测量定子振动幅度的加速度计。让我们指出，加速度幅度是振动幅度和其角频率平方的乘积的结果。这解释了有时，在加速谱中，高频红线具有最大的幅度。

### 2.2.1 650W相感应电机的实例

这个笼式转子机器通常用于洗衣机。两种声谱显示，一种是通过电网正常供应的机器获得的，另一种是在切断电源后立即获得的

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyddDctVODsBZQYcwHxZcfyhOCu2picH0YDpMHMJ7JlHbqE8kOqZA6VkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyCP9vGweZvKcpJWl2abunjlQucOXutZPuqEdpNBHljIibEpdffciaRCoA/640?wx_fmt=png&from=appmsg)2.2.1.1 通电的频谱

图9.1和图9.2分别显示了单相50赫兹电源的声学和振动谱。在声学谱中，可以观察到噪声成分在336、2016、2160、3264、3920、7550、7650、和11490Hz处看到。总噪声为57 dB。在7550、7650、7750Hz的三条线，间隔在100Hz，是典型的磁噪声。  
在振动谱上，仍然可以观察到2016、3264、33920、77550、7650、77750和11,90赫兹的线条。由于该谱仅包含磁性和机械噪声，因此可以得出结论：2160赫兹的成分是通风引起的。  

### 2.2.1.2 断电后的频谱

图9.3显示了转子仍然旋转时的声谱。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavy13vg13EhMOc7JaicP1KSy6BCHSibQCKdLI9ekyr7n3YATc2HaQJG2sMA/640?wx_fmt=png&from=appmsg)

它只包括机械噪声和空气动力学噪声。在2016、3920、7550、7650、7750和11490Hz处的线路消失了。可以得出结论，它们具有磁源，而336、2160和3264Hz的部件具有机械或空气动力学源。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyFGYbm6nh58TxBFOb2icNMZxv7LrCopMKBG5AW5PB9K4qZ3FFFOoMQKw/640?wx_fmt=png&from=appmsg)

图9.4为对应的振动谱，仅为我们所关注的是机械影响。可以推断，3264Hz线有一个机械起源；而336和2160Hz可能是空气动力学的起源。因此，这台机器的机械噪音很低。  

### 2.2.2 开关磁阻电机示例

开关磁阻电机（SRM）和，尤其是双凸极SRM（BDSRM），可以在许多工业、航空航天、汽车和家用应用中使用。确实，这种机器易于制造且成本低，因为转子没有绕组，功率电子控制器具有很少的组件。除了其简单的坚固结构外，它还具有高效率。由于径向磁力引起的定子轭部变形，SRM可能会特别引起振动和噪声问题。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyKc02PDLFw56fvZOquuMaibZurpeQqWo098NFfFyVFor52KjA1wtX3SA/640?wx_fmt=png&from=appmsg)

图9.5显示了带有8个齿的定子和6个齿的转子的BDSRM的声谱；它由矩形波供电，并以1466.6rpm的速度旋转。图9.6显示了定子框架的径向振动。这两个谱是由许多细线组成，这些线均匀分布。大量成分的原因是相电流和电压不是正弦波形。它们导致产生噪音和振动的谐波。在振动谱上清晰地出现一条主要的频率为2200Hz的线；模态分析解释了该频率的存在，即定子框架的自然共振约为2100Hz。

### 2.2.3 PWM逆变器供电的同步电机示例

让我们考虑一个由脉冲宽度调制（PWM）逆变器供电的同步交流电机，该逆变器以100Hz的基本频率运行。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavy5ictebgicRiaIC2btFlBzRibQBjKZN4oOWzSW3e8Xhatx112dBicicEkxeQQ/640?wx_fmt=png&from=appmsg)

使用加速度计测量的振动谱（图9.7）显示了频率为开关频率fw(3kHz)的整数倍的线。因此，PWM开关频率具有对噪声和振动的明显影响。获得静音机器的最佳方法是选择高PWM频率，使人耳听不到噪音（超过15 kHz）；问题是逆变器的损耗随着频率的增加而增加。  

### 2.2.4 饱和电机的示例

磁饱和会产生噪声。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyJYROBTnVtzWCszaTkRkrodJ4Pkd2qU4sXfnNvhEB8vO2EjiaJrWxXiag/640?wx_fmt=png&from=appmsg)

图9.8中显示的声谱涉及一个带有鼠笼转子的工业三速三相感应电机。低速（同步速度为375rpm，电网频率为50Hz）偶尔使用，例如用于提升，但产生很高的声级。由于该机器优先设计用于在两个高速（两极和四极）；定子磁路已经饱和，对噪声的影响显示在声谱上，声谱由频率倍数为300Hz的线组成，并具有特别高的电平。

* * *

  

_原文：_

__《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》_，__第二版__，第9章  
_

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿分享！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)