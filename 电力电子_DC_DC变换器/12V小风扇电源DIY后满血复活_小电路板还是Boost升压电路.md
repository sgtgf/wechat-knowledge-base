# 12V小风扇电源DIY后满血复活，小电路板还是Boost升压电路


> 原文地址: [https://mp.weixin.qq.com/s/lf4W0DSlNwJSBQyDSEtBlA](https://mp.weixin.qq.com/s/lf4W0DSlNwJSBQyDSEtBlA)

一个12v电压的小风扇的电源坏了，这种电源很难搞到，无意中在某多多上看到有一种升压电路板，5毛多3片，合计下来只有一角8分一块。这是一块很迷你的电路板，我用二节5号电池供电，输出电压正好是12v，于是我DIY一下小风扇电源，风扇用二节电池供电，满血复活。高兴之余，仔细研究了一下这个升压模块。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyxMhKyS2ico5Jlv5G4utTtt9iamUIzoCiaJBHh7ulSkxicATiazXeibteUKIFpoZGMzXe188icyLRa37QZ5ibQj5fNOQyxqRZkTGfqvxBU/640?wx_fmt=jpeg&from=appmsg)

电路板各元件

电路板共11个电子元件，一个6脚芯片，一个3.3μΗ的电感，一个是肖特基二极管，型号是SS24，这是一种大电流快恢复的二极管，一个输入贴片电容，一个输出电容4个反馈分压电阻，一个限流电阻，一个LED指示灯。仔细研究一下它的组成结构，原来它是一个boost升压电路，电路结构大致如下图:

![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6Luyz8CR7jxlmjQKWLNhQySMqqoNahtEWVcOBdSiaqG6gjP7L3w67KzSgq9C3IR0iaRP9tA0GHr8Y8eLY53IAbw6GiaCCsKctxIf3VHM/640?wx_fmt=jpeg&from=appmsg)

这个DC～DC升压电路，输入电压宽度是2.4～5伏，经电容滤波后，进入电源脚5，同时进入使能脚4，使芯片工作，同时电流经电感，进入芯片1脚，1脚接内部开关管漏极，2脚接源极，电流从开关管漏极到地，使电感储能，3脚是反馈脚，在这里通过它，和分压电阻来控制芯片内部pwm驱动的脉宽，以控制芯片从1脚输出的功率，6脚是空脚。然后外界输入电压，加上电感上储存的电压，经肖特基二极管整流，给电路输出5V,9V,12V的电压，至于哪一档电压，决定于四个反馈电阻的组合。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuywzwIHzDoJKuo28FZsjOwu97EeuEVHyPCp4R8unEtWrwNwFUhYdrSsuaTYzNv2mf75nZmVzk3d2x7dQzaujqKSiaibUnpcfYGEF4/640?wx_fmt=jpeg&from=appmsg)

芯片内部大致线路示意图

该芯片的具体资料很难找到，上图是芯片内部大致的线路示意图，可以了解一下它的工作流程，至于内部的防过压，过流，防过热等线路没有全面表示。

最后，如果升压芯片是在机器内部，那么指示灯和限流电阻可以拆掉，还有，如果输出电容可以换个电解电容，能否使电源工作更强劲，大家说说。