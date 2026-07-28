# 【荐文】高功率密度内置永磁牵引电机——出自GE全球研究中心

原创 Mr 晋 玩转电机设计 2019-08-11 18:18 undefined

> 原文地址: [https://mp.weixin.qq.com/s/X\_iERSXLahAEp8dT7v2CVg](https://mp.weixin.qq.com/s/X_iERSXLahAEp8dT7v2CVg)

**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

**需求**

* * *

目标是设计高功率密度、高效率、低成本的永磁同步电机满足美国能源部提出的FreedomCAR 2020计划的指标(见表1)。主要挑战指标包括：最大转速14000rpm，恒功率30kW@20%~100%速度范围，20%速度@55kW峰值功率运行18s，10%~100%转速20%额定转矩以上效率大于95%，105℃冷却水入口，额定电压325Vdc，功率密度(以最高速度)约为目前技术水平的两倍，激进的成本目标@10万件大规模生产。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr5765UTgBT3twbibGssxLDnbGeiboicaTOKaVP0lrCSu3jGbYmhqkFV16w/640?wx_fmt=png)

**设计方案**

* * *

12槽/10极、分瓣集中绕组定子结构、SPOKE转子，无磁桥。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrnoPTM2vribnZRlssTXlZaCgg1g8eLGVN0icz6eFQ9qhCwsibibbDgvHGHw/640?wx_fmt=png)

**结构分析**

* * *

为确保转子结构完整性(安全性)，特别是最高速度14000rpm。需要进行应力、转子动力学、寿命分析。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr8TFKNGlyodlm6NKXVSQ21e0AeIC967WBpm3QicAfviafBoLBLq3vEA1g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrE0Xwb2UpkMUKWDp8NAHZlIIrMzlankHEXLlaIcFyJFOUe5nfYa6GKg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr30GaAmSnZHNt9CWJGtlZuaaAaoJaya8HiaMtZic5q8zOCwNQCgBMicsLQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrpn9LJZzVU20U1ULfhxf7DleBPHVJsFCwRQkWTM4FzwQhAcBOdrmxag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr5snjgIg7IUUMY6uXgvw9kHDaxJpLImia0TKMiaCDDtic77pY8dnNmpwrg/640?wx_fmt=png)

所有转子零件的应力都不超过表四所述所用材料的应力极限，设计合格。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr7QZoCViahJSzs4nia0hMYkjRPVWRaFGwkGepRCHLaicY6AHtc3mic9f1zw/640?wx_fmt=png)

【图8】第一阶临界速度24000 r/min，远远高于14000 r/min的上限电机转速。【图9】零件设计处于无限的寿命区域内。

**电磁分析**

* * *

开路磁场分析  
磁场云图：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrhelqic3IBVggXAm0sx2NnTAuIMmtq8BmXCJZlu5yPLSFle3sWTQ0QVw/640?wx_fmt=png)

14000rpm反电势曲线：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrNhWd8IhzksP1ZicerTsk8xoxMXfMp4EThPSYT7Hp6fQNFDsria4xg4dg/640?wx_fmt=png)

退磁和短路分析

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrxGzUHWAcx53hq7Yvlt1NOyRk5T1nUribAdHPnwRibzHfmjfMOe6iaVHkQ/640?wx_fmt=png)  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr2MGwFVytc0cx19xCNUibu800bXP3ycQgkH4Y7ciawdMgdRICpgpsx4jA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrJgkwfcZDyht3MNJ5alrTGKW1ib1FbJScRObLAtm6scnCrcAlE9R9DxQ/640?wx_fmt=png)

退磁分析评估是在负d轴注入2倍、3倍、4倍额定和短路电流，同时考虑磁钢最高工作温度180℃，观察磁钢工作点。以磁密0值作为退磁判据。

损耗分析

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrkJLSIzHe82f4HJg5j5rZ1hRSicfnE1NbpE4JFqjh7YlGGLDYKPJjMibQ/640?wx_fmt=png)  

磁钢涡流损耗，用了三维场进行仿真，每片厚度2mm，每一片之间间隔0.1mm。从仿真结果看，轴端一片磁钢的涡流损耗最大。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrK3WTdaXibicicHJf8A9NfyXXibz21oL0Wy9xB0Ea7qaN2mcTW3jgS1ibOIg/640?wx_fmt=png)

定转子铁心损耗，对不同区域和速度做了铁损分析，从结果看，定子轭铁损对速度最不敏感。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrIw1bHlbulxYuCTQIpib1f83QgtwP1lUm66iaRoQhDBCs7YicmUx0HMiczw/640?wx_fmt=png)

绕组铜耗分析，考虑了趋肤效应；所选择的绕组铜线尺寸在14000rpm造成的交流损耗小于10%。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHr2fvOks7bsE71jwia5okbF93Qoz29I3EsklFPL4IxMltocWH1CicXXZ7A/640?wx_fmt=png)

考虑其他导体的涡流损耗，包括：轴、转子冷却管、定子冷却套。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrXComC4PH75hSrZTibZdH5t11hg72suod351SUe38PndltbsTWPr3nBg/640?wx_fmt=png)

对电机定子铁芯与机架连接螺栓的电损耗进行了定量计算，上图中的U型槽设计是有讲究的，磁路不能把螺栓完全包裹住，以降低损耗。

电机性能  

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrXVUabLEjicrFxWHDL6v91QokZibOCObwQDRE8SbNznUsgW9dqR7DrbZQ/640?wx_fmt=png)  

**热分析**  

* * *

转子冷却  

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrKFrqgtIUYsicdDBQ4USFr96WEniaibvqalic5rbJgtnccRtAUFPticurePg/640?wx_fmt=png)  

转子冷却系统方案  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrD0I9xDMM6KFx7dSd0OS9Z9zJWibEXeRpL2BOicz7iaXjsZYpLhADZtwgA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrcueicJrK4v3hcpicqn0stibeTEciaT0TicXJaXcxYtzkR2TibPQNR14rdVQg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrcPalrCZ1nMcVv1TjOmMU9uy9jL6jQ3ySuicWBwuYHQOzL9ELTVUiaJMg/640?wx_fmt=png)

精确计算转子不同区域不同转速的损耗，然后计算不同转速下转子最高温度。

定子冷却

* * *

定子设计了3种冷却结构并进行分析，冷却水套机壳，定子中加冷却水管，端部喷淋。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrNLHicyQ1UKQzSvDKIdib2L4qYNn9lyPD3Akpm8hymOA3lvibyoICX4M6w/640?wx_fmt=png)  

**原型机测试**  

* * *

原型机  

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrSwjf1o7gZy99SaXia18aiaLOcDysiaS37rfxjtWex3C8GyicogbgbOzSlA/640?wx_fmt=png)  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrXQCk0p2iau2iaZmajp1GHOfPf4gOY4O46cAD1ViamC4wUxtBB9rd6HP6Q/640?wx_fmt=png)

测试  

* * *

测试系统

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrCZNZehrZVgIF9ibtBibaJ2WJoZGoCyJFYcvP00lURaU2JJKEB93UQG9g/640?wx_fmt=png)  

效率map

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrDAqsj5QwpqhhV0yEsPq07Zz3HvDxPic264CcFHgT7iaLZoS4btrBOxwQ/640?wx_fmt=png)

另外，原文中还测试了绝缘电阻、机械损耗、风摩损耗、反电势、短路、转矩波动、满载等，还做了3种冷却系统的原理样机测试，详见原文。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyGGI5XricKkwyL9uoNZEaHrLSLWVCtQKdyeicqYhRna1Z6A1SW8OpcUAXZZOSDxwN9ytJr1cCoYUicQ/640?wx_fmt=png)

上表对测试数据和需求进行了对比，可以看出这个设计在功率密度和效率方面能满足美国能源部提出的FreedomCAR 2020计划指标。

* * *

原文：《Advanced High-Power-Density Interior PermanentMagnet Motor for Traction Applications 》——Ayman M. EL-Refaie, Fellow, IEEE, James P. Alexander, Steven Galioto, Patel B. Reddy, Member, IEEE,Kum-Kang Huh, Member, IEEE, Peter de Bock, and Xiochun Shen

* * *

原文下载，QQ群：364941038

**欢迎留言讨论！**  

欢迎推荐优秀文献、国外电机最新咨询！

  

长按图片，识别二维码，关注我哟

> ![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=png)