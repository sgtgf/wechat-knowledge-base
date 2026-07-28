# 【高转密】FSAE电动方程式赛车驱动电机——意大利帕多瓦大学

原创 Mr 晋 玩转电机设计 2021-02-18 13:18 undefined

> 原文地址: [https://mp.weixin.qq.com/s/ReSnMECGjv4B3AQBccfuDw](https://mp.weixin.qq.com/s/ReSnMECGjv4B3AQBccfuDw)

**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

高转矩密度是很多电机应用场合的追求，本文带来一个小功率、小体积高转矩密度电机的设计路线，主要包括以下特点：halbach磁钢阵列、全开口槽定子、外转子+行星减速机构、0.2mm硅钢片、油冷定子。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBKypfs92YFHYyxquTACKia6LqyLicKqeJHhePkToTK4dbdhkR6XrW0LFA/640?wx_fmt=png)

本文讨论的电机用于上述FSAE赛车

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBteKiafHBtY52xfDccETQwfMFFzHWIxuhBCB5VTYib6raFtqwnRP2hRVQ/640?wx_fmt=png)

**小重量、高转矩、低惯量、高效**是该应用场合电机的最主要追求。车辆参数缺少迎风面积、风阻系数等，7:1速比选择文中未做详细说明，减速比有增大的潜力，电机转速进一步提高也有利于减小体积和重量。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBYohdmeMFZ6SKia8bUHxXzaVIy76fThAISCRqnVqDhv19kHiaVK68TKKw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBN6UN4BfRO3zJILFFibTeZ7ky7FWtiaicq3pM7uq9ju2hDgzCqlcQDJR5A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeB6JQ0s080jzGr8NXCjTicEt4U4V6onHaSkKzYaH0nxIefUns0dHLbQUQ/640?wx_fmt=png)

对比了转子有无磁轭的性能差异，但是为了追求低惯量，在牺牲少量转矩和磁钢工作点安全性的情况下，还是选择了无磁轭的转子方案，**转矩密度15.2Nm/kg**  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBYYLnZQicm9FibbJIcrdiccemZVbNaib3l0EPMmm2K6p4wq1qVGOSbPP0MQ/640?wx_fmt=png)

第一代方案利用成熟的定子铁心达到这样的转矩密度，已经算是优秀。在第一代成功的基础上，开发了第二代方案。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBEcJwCOqRSDUgJhwVvyholG5OHOyKPnmQO5KWaetA1ichiayXxjpZYsqA/640?wx_fmt=png)

第二代方案，对定子做了大量优化，槽极配合、材料、冷却方式、定子槽型。全开口槽的转矩波动不易优化，在高速电机中很少应用，但是作者研究发现由于转矩波动的幅值低、频率高在该应用场合会被转子和轮子的惯量滤掉。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBpHARmx8wZGvmWanPkkXZakbPiasqhOPdfs2JLX3gA38ibnRhTHdOHicXA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBwAEibwTymxLf3BYkxwTAxibfcIJPblqLlnwPeo35mZ8UmrGRIaom0v1Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxFbTGfGaH1MLt4R3ST8LeBNtz2HrODWYGVibBTajiaicpA1xtbmupWRhsiclYcQGTe9NvNicicOkHCCJjA/640?wx_fmt=png)

**第二代样机转矩密度18Nm/kg，相比第一代样机15.2Nm/kg，提升20%。**

* * *

参考文献：《The Formula SAE Electric Vehicle Competition — A High-Torque Density Permanent Magnet Motor 》——

Marco Munaro , Nicola Bianchi, and Giovanni Meneghetti are with the University of Padova, Italy

* * *

原文下载，QQ群：364941038

**欢迎留言讨论！**  

欢迎推荐优秀文献、国外电机最新咨询！

  

长按图片，识别二维码，关注我哟

> ![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=jpeg)