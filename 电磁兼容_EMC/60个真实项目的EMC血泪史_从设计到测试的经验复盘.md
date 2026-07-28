# 60个真实项目的EMC血泪史：从设计到测试的经验复盘

原创 王工 硬件笔记本 2025-09-01 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/o5cvvtX7mKYJnkYQtDn6oQ](https://mp.weixin.qq.com/s/o5cvvtX7mKYJnkYQtDn6oQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

大家好！今天想跟各位硬件工程师朋友推荐一本特别实用的EMC经典书——郑军琦老师的《EMC设计与测试案例分析》，包括60个案例详解。这本书虽然出版有些年头了，但里面的内容真的非常扎实，可以说是我们做硬件、搞电磁兼容设计的一本"避坑指南"，值得放在手边常翻常新。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjfgZXcvHIfDJq6iaEib4kPZ0EQp6mZvEVOjcopT2lHc08m4EliazmWZa0zicLCwc36icgibC6ibbibtNszyA/640?wx_fmt=png&from=appmsg)

文末附299页完整PDF电子版获取方式。

011

EMC为啥让人头疼？咱们工程师的烦心事儿

说到EMC，可能有些刚入行的朋友会觉得它有点玄学，出了问题也不知道从哪下手。其实说白了，EMC就是处理电子产品内部电路不干扰外界设备、同时也不被外界设备干扰的一门技术。你想想，现在设备越来越复杂，数字电路和模拟电路混在一起，频率越跑越高，干扰问题自然就越来越多。再加上国内外对电子产品的电磁兼容标准要求越来越严，尤其是出口产品，如果EMC过不了，产品根本就出不了海。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjxJunOiaHOGfmAYywgw1Br1yibk4IkwvmfAiacjEoKVR2vpicjqIrGr7MX4P5XibGrQ8EV9UnYohD2iamw/640?wx_fmt=png&from=appmsg)

所以我们做开发的，不光要懂技术、调电路，还得把EMC设计提前考虑进去。不然等产品做出来了再去整改，那真的是费钱又费时间，甚至项目都可能黄掉。更现实的是，现在产品迭代速度越来越快，根本没有留给我们太多后期整改的时间。如果能在设计初期就融入EMC思维，会省掉非常多麻烦。

021

**这本“避坑宝典”，到底讲了啥干货？**

说到这里，不得不提一个很多工程师都会遇到的典型问题：为什么模拟地和数字地不建议用磁珠连接？这个问题困扰了很多硬件工程师，但在郑老师的书里找到了清晰的答案。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjfgZXcvHIfDJq6iaEib4kPZ0yZ5NiaHXxZGiblBS6OVPicmrLGTN7GcpqJ3THE16BGiaqZjEGPE5PWHY7A/640?wx_fmt=png&from=appmsg)

在书中的案例中详细解释了这个问题：磁珠在低频时阻抗很小，但随着频率升高，其阻抗会增大并产生谐振。如果用它来连接模拟地和数字地，反而会在特定频点引入更大的噪声。正确的做法是在ADC或DAC地的引脚用最短的连线接到同一个低阻抗的接地平面上。高频下，对于ADC的两个地引脚来讲，并不能实现低阻抗接地。如果再在ADC附近增加两个接地点，一个在模拟电路侧，另一个在数字电路侧，将大大增强接地效果。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjfgZXcvHIfDJq6iaEib4kPZ0dRCicNLpTFPKy0fxhs5qicgaYn6ZVMI9Z13vv9aXdib4mrCnoCBFaUFaQ/640?wx_fmt=png&from=appmsg)

这个案例不仅给出了解决方案，还通过示意图对比展示了不同处理方式的效果，让人一目了然。

那怎么才能系统性地掌握EMC设计呢？一方面要懂标准，知道测试的要求和底线在哪；另一方面更要掌握实际的设计和调试方法。而郑老师这本书最大的特点就是——实战性强。全书不讲空洞的理论，而是用60个真实案例来说话，覆盖了我们日常设计中最容易出问题的六大方面：

1、结构与屏蔽接地——13个案例

2、电缆、连接器与接口电路——10个案例

3、滤波与抑制——12个案例

4、旁路与去耦——10个案例

5、PCB设计——11个案例

6、器件、软件与频率抖动——4个案例

每一个案例都按照【现象描述】→【原因分析】→【处理措施】→【思考与启示】这样的结构展开，读起来特别有代入感，就像老师傅在旁边带你debug一样。比如你可能遇到过设备辐射发射超标，最后发现是电缆屏蔽没做好；或者产品在静电测试时老是重启，原来是接口电路没加TVS管。这本书里这些情况都有对应的真实案例，教你一步步分析、解决，并且总结成可以复用的设计规则。

我特别欣赏书中强调的一个观点：EMC设计就像交通规则，你不遵守不一定百分百出事，但风险肯定大大增加。做产品设计，最后都是要控制风险、提高成功率。这本书就是在帮我们降低EMC方面的风险，让我们设计出来的产品不仅能用，而且稳定可靠，容易过测。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjfgZXcvHIfDJq6iaEib4kPZ0nAf5YKxwAwjDbqLDBPBnKp5cuXZwqWOich0aMicILvyKliayGt1PYicsZQ/640?wx_fmt=png&from=appmsg)

  

比如说PCB布线不合理造成网口雷击损坏。以太网接口中，RJ45为金属屏蔽外壳，接收信号布于TOP层，发送信号在BOTTOM层。雷击时网线屏蔽层产生高共模电压，由于RJ45外壳与TOP层信号线间隙小，易发生绝缘击穿。大电流流入信号线导致烧毁，共模电压转为差模电压，传入PHY芯片造成损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjxJunOiaHOGfmAYywgw1Br1lKnOBDLDC77amWT7DvxphgwqgTYUYiaorQwcwrAZUxPu1PWYzjbcic7g/640?wx_fmt=png&from=appmsg)

因此，若使用金属屏蔽型RJ45，信号线应避免布在TOP层，或需增加电压钳位保护及特殊绝缘处理。通过简单调整PCB布线，问题就解决了。这类实战经验，如果没有老师指点，靠自己摸索可能要花上好几天时间。

  

再比如由电缆布线造成的辐射超标问题。书中有一个典型案例，某设备电缆辐射发射严重，最后发现是直流电源线布置存在较大环路，电流流过导体或环路时也会产生磁场，从而引起电磁辐射。这些经验都是实打实从工程实践中总结出来的，不是纸上谈兵。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjxJunOiaHOGfmAYywgw1Br1ctbhRQt5fJCibYyhvKkccw6IFkz2EKy1F9sjYL7lBtpgHpJSSAUaGHg/640?wx_fmt=png&from=appmsg)

  

还有一点很关键，这本书也讲到了器件选型、软件和频率抖动技术这些经常被忽略但又极其重要的细节。比如同一个电路，换不同封装的芯片，EMC表现可能天差地别，有些CPU本身抗干扰能力较强，就可以省去一些外围额外的保护电路和滤波器件；用好软件容错，有时比硬改电路更省成本。

值得一提的是，这本书不仅讲"怎么做"，还讲"为什么这么做"。从事情的本质进行分析说明，让你真正理解背后的原理，从而能够举一反三，而不是死记硬背规则。

031

******想领取学习？看这里！******

总之，如果你正在做硬件开发，尤其是涉及高速电路、射频、电源、接口等方面的设计，这本书绝对值得细读。它可以帮助你少走很多弯路，节省大量调试时间，更重要的是——让你设计的产品更靠谱。

为方便大家学习，我把这本书的PDF分享给大家，包括完整目录和60个案例详解。  

如何下载《EMC设计与测试案例分析》，更好的学习EMC基础知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|EMC设计与测试案例分析

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjxJunOiaHOGfmAYywgw1Br1ibuibOftUNIvVRkwUmosibpRcBbBibJl8fPSXSKm2msGNNKysXVG5NlwWQ/640?wx_fmt=png&from=appmsg)

EMC设计不是一个可以临时抱佛脚的环节，它应该贯穿在我们从方案选型、布局布线到调试测试的全流程。希望这本书也能成为你的枕边书，常看常新，一起做更稳健的设计。祝大家设计顺利，一次测过！

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjxJunOiaHOGfmAYywgw1Br1V5jmM8YtfL1vxib1xX1t6wiaxUugQ8eGYjNErWXNEYn1upnfJt8MxqPA/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。