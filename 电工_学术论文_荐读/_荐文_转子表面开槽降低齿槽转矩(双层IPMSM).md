# 【荐文】转子表面开槽降低齿槽转矩(双层IPMSM)

原创 Mr 晋 玩转电机设计 2022-05-03 17:17 浙江

> 原文地址: [https://mp.weixin.qq.com/s/nIRl7hKu6uFaMUQ1sJYaZA](https://mp.weixin.qq.com/s/nIRl7hKu6uFaMUQ1sJYaZA)

**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

传统的PMSM齿槽转矩削弱方法包括定子斜槽、转子错极，但是斜槽和错极会降低负载工况下的平均转矩，且增加电机的制造难度。所以设计简单的结构来降低齿槽转矩，同时保持平均转矩不降低，是电机工程师和学者们的孜孜追求。  

IPMSM气隙磁通密度的许多空间谐波导致其感应电压波形畸变，并导致较大的齿槽力矩。因此，IPMSM的机械振动和噪声在低速时变得很大。

* * *

本文提出的方法是基于齿槽转矩的谐波分量依赖于电机气隙磁通密度平方![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01ibyYDP6phQAqX1E9oaOnmZUyJkzfrzJwNvUz5w4qMmjvK5FEfxaM0Qg/640?wx_fmt=png)的谐波分量的理论。

**首先**，利用有限元分析分析了无槽电机的![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01ibyYDP6phQAqX1E9oaOnmZUyJkzfrzJwNvUz5w4qMmjvK5FEfxaM0Qg/640?wx_fmt=png)，而![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01ibyYDP6phQAqX1E9oaOnmZUyJkzfrzJwNvUz5w4qMmjvK5FEfxaM0Qg/640?wx_fmt=png)的波形近似为一个阶跃波形。

**然后**，从理论上得到了![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01ibyYDP6phQAqX1E9oaOnmZUyJkzfrzJwNvUz5w4qMmjvK5FEfxaM0Qg/640?wx_fmt=png)的理想波形，使锯齿力矩的主要谐波分量可以为零。根据![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01ibyYDP6phQAqX1E9oaOnmZUyJkzfrzJwNvUz5w4qMmjvK5FEfxaM0Qg/640?wx_fmt=png)的理想波形确定最佳槽位置和槽宽度。

**最后**，通过有限元分析得到了最优的开槽深度。

本研究能够将降低有限元计算的耗时，在分析无槽参考模型和开槽深度寻优时使用有限元(只有开槽槽深度一个变量)。

* * *

设计案例：8极48槽双层转子电机  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01GfD4MAH0f5BDeliaA4uWkMW3FILuZn7vSiaHN8kvvsqnZWzpmB8TQfrg/640?wx_fmt=png)

每电周期的齿槽转矩谐波阶数：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01JgGUTzJzWlqzVjbiaF2UOusNNaQsVtNWWastobt3Icu9ugiavEhicL5Ug/640?wx_fmt=png)

S为槽数，P为极数。对于8极48槽的参考模型，齿槽转矩谐波阶数为12n(n=1、2、3、)

无槽定子的气隙磁密平方曲线：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01xEPRK1PicYLD4SQjSbicx9piasP8pAibt7mastz8D2ic0XqR5icj3ZSXI6DQ/640?wx_fmt=png)

气隙磁密平方的傅里叶展开公式：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM013FdAqpzNHCp0p71lqFzMAibiaqdIDAmicZGHhibgz7ccibdhzUCeNeGcZcg/640?wx_fmt=png)

理想单极气隙磁密平方的波形：是一个2阶梯波  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01iciasjVgSADXOiafZ8Yv8fUoZXtwFibic6lia6uucIkUQGDf8yaiaVAmtRt3Q/640?wx_fmt=png)

理想2阶梯波的12n阶谐波幅值：_原文无详细推导过程_  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01adMcJTH1BaVdDgKvgmnLdPKbWcCAk0tl2qr42h4Dr8J3zyRVq3XMtg/640?wx_fmt=png)

通过下述方法简化上面的公式(3)，使12n阶谐波幅值只和α相关：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01TZSnQiaXMXz53k0XHQkicIK8gBF4RRm1nlM9v83KzudWrXMsdlIlN7Vw/640?wx_fmt=png)

以有限元12n阶气隙磁密平方幅值 减 理想12n阶磁密平方幅值的差值的绝对值最小为目标，求得α，_主要考虑12阶和24阶_  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM015sXVRa2emOOshvicVKLVRCMpCaaG6F14APzU1Q8y4icC1MPZEpbFwzXg/640?wx_fmt=png)

最佳的α为21.8度，再代入公式(4)求得β为51.8°  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01sCE0avveEKlphtnloibAn07iayfibe5uFSQomsXfNZ6G4o52aYeiaIoS1g/640?wx_fmt=png)

理想波形和实际波形的对比：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01DHiaVrp3KFp118LxNHrkAialAcq5tbLuXDLa1SrN3syQt4VWa8BslVHQ/640?wx_fmt=png)

转子表面开槽后，气隙磁密平方的理想波形：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01UaQMCCAbib6MTRkAia2asK8oiakYWEXxicYMaHw9XoQ5HGMiaUxn39icSibOA/640?wx_fmt=png)

开槽后的12n阶幅值表达式：_原文无详细推导过程_  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01h7Aibr6fibjOU157sk0jAZFojFLuIAouZ2dtWo3Bibicr4JwrZ2icv8QiaZw/640?wx_fmt=png)

求得12n阶幅值为0的开槽宽度W：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM010EnqXFicdwW1l1D8ZBqTogc7ecJxeVYLxhYBdA55rb3TqN60c7Wz4yQ/640?wx_fmt=png)

转子开槽的结构：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM015VAMlkpwLUWCwkedTl5AwAosxur5TgM1yroSaMTIRXcDqvicu9z1Cdw/640?wx_fmt=png)

寻找最优的开槽深度：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01Ee4PZUw5vm8iaCLjO6r9xZia2hjcGbcjxEWnbG38mjlFn5NLorszuiadw/640?wx_fmt=png)

理想三阶梯波形和实际波形的对比：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM017rm8gWX0oiaGHrphu3tNpO7mQYYk2oSKicxzEHkgbQ25yjNlysjbgRuQ/640?wx_fmt=png)

转子开槽前后齿槽转矩对比：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chw1wUia8btJCJlwEQQCLSM01hNrQG5okYq9bO9AcfblZOV7sMaxxckVVykdohJpBuyfbv0SIBvgzMQ/640?wx_fmt=png)

由于主要成分12、24阶分量显著下降，使得齿槽转矩的峰-峰值降低了81%。

作者为了检验开槽对负载转矩特性的影响，分析了最大电流180A下MTPA控制下的转矩特性。由于开槽，平均扭矩下降了0.4%，从205.3下降到204.4Nm。降低率极低，结果表明，该方法可以在不影响平均转矩的情况下降低齿槽转矩。

* * *

_原文：《A Novel Design for Notch on Rotor Surface of Double-Layered Interior Permanent Magnet Synchronous Motor for Reducing Cogging Torque》——Marika Kobayashi, Shigeo Morimoto, Masayuki Sanada, Yukinori Inoue Osaka Prefecture University, 1-1 Gakuen-cho, Naka-ku, Sakai, Osaka, 599-8531, Japan_

* * *

原文下载，QQ群：364941038

**欢迎留言讨论！**  

欢迎推荐优秀文献、国内外电机最新资讯！

  

长按图片，识别二维码，关注我哟

> ![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=jpeg)