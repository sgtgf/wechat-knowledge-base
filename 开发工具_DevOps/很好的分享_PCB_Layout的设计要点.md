# 很好的分享：PCB Layout的设计要点

原创 硬件笔记本 2021-12-27 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/Ozr0oLmlmbZvzbZF-GjvLQ](https://mp.weixin.qq.com/s/Ozr0oLmlmbZvzbZF-GjvLQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

在集成电路应用设计中，项目原理图设计完成之后，就需要进行PCB布板的设计。PCB设计是一个至关重要的环节。设计结果的优劣直接影响整个设计功能。因此，合理高效的PCB Layout是芯片电路设计调试成功中至关重要的一步。本次我们就来简单讲一讲PCB Layout的设计要点。  

  

  

**PCB Layout设计要点**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

＋

**元器件封装选择**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

电阻选择: 所选电阻耐压、最大功耗及温度不能超出使用范围。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tYXfxQs74iblk27slAuJxGXOgPRH4NEcHAia7riaLLnuJhHicvYT3f7MNxcmUPv7CpX5fRKj4UESMuKdw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIDmKUicAo9mWBHXTsNpwtABSicto2bicLTPRGTTaj2QFjcO8CFoP0xExzA/640?wx_fmt=png)

电容选择: 选择时也需要考虑所选电容的耐压与最大有效电流。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tYXfxQs74iblk27slAuJxGXOPq2yf5kHMxiaQbMRcqbeEdcMHxyyZdhAkeNDxDtTico98ltZIc0H2MGg/640?wx_fmt=png)

电感选择: 所选电感有效值电流、峰值电流必须大于实际电路中流过的电流。

＋

**电路设计常见干扰**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

**串扰**: 设计线路平行走线距离过长时, 导线间的互容、互感将能量耦合至相邻的传输线。可以通过以下方法减少串扰影响：

1.加入安全走线

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIkKib8jk2OpdodHFZK9QBNfRibo3cfSmwLxD69pedmbIDbpI3S06lVJ0Q/640?wx_fmt=png)

2.实际时尽量让相邻走线互相垂直

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tYXfxQs74iblk27slAuJxGXOj8UelRK6ltGtHEb6wTYcpEBhKpb5YCJHfP8N8Ysia1cIu7iaRBH8h2Dw/640?wx_fmt=png)

3.每走一段距离的平行线，增大两者间的间距

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIg8IApD5P7RB0MyvAwOPMy020WPetNwGNHs3mP3wsGwE8XshgxGa6Cg/640?wx_fmt=png)

**反射****:** 由于布线的弯角、分支太多造成传输线上阻抗不匹配，可以通过减少线路上的弯角及分支线或者避免直角走线及分支线补强来进行改善。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIPwtrTibAz4dA4XxCTaYr3zP8A5YUSa3Gkica7ZLse7mh5FsR0Nic4tlLA/640?wx_fmt=png)

＋

**确定接地方式**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

单点接地(适用于低频电路)：所有的电路接地线接到公共地线同一点， 接线简单且减少地线回路相互干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gI8BrpcmSBw53IyfnULBnBfIDFKdVk9ic6J7iazjbRImpLLM9SwayWVCKA/640?wx_fmt=png)

多点接地(适用于多层板电路/高频电路)：系统内部各部分就近接地，提供较低的接地阻抗。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gI0W3LKYsYzKnlFj7tTKfB81eeGTelDxSBshKwjNfHa7kVAhCWz7icricg/640?wx_fmt=png)

＋

**增加滤波、旁路电容**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

为保证输入/输出电压稳定，增加输入/输出电容。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIynea4VYqnJXlib8KqJJ5wPNRzdxsgl6H0ibWyk14vDQWTkqJ0bRicWkbg/640?wx_fmt=png)

在电源和IC间增加旁路电容，以保证输入电压稳定并滤除高频噪声。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIg7vWjStUNje80u2XlyeQcTTES7IXwPlFsUulLLQrwiboWics18W8OIEA/640?wx_fmt=png)

＋

**阻抗位置设计**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

相对来说阻抗越高的位置, 越容易被干扰。如下为一同步降压芯片的PCB阻抗位置设计。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIraWMM3QGiaeicZyicL1Km6g1jbbrymPCjosib546K7LxoJwcNtoUadTZug/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tYXfxQs74iblk27slAuJxGXORbic1P5IXGMLa8WKibYPxYKVh9HerDpBHTEDJiaezasBkBkDDsXUrIBAQ/640?wx_fmt=png)

  

  

  

  

  

**PCB Layout设计技巧**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

＋

**电源/地线处理**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

既使在整个PCB板中的布线完成得都很好，但由于电源、 地线的考虑不周到而引起的干扰，会使产品的性能下降. 布线时尽量加宽电源、地线宽度，最好是地线比电源线宽，它们的关系是：**地线＞电源线＞信号线**。对数字电路的PCB可用宽的地导线组成一个回路， 即构成一个地网来使用（模拟电路不能使用该方法)。用大面积敷铜层作地线用，在印制板上把没被用上的地方都与地相连接作为地线用。或是做成多层板，电源、地线各占用一层。  

＋

**数字与模拟电路的共地处理**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

数字电路与模拟电路的共地处理: 数字电路与模拟电路共同存在时,布线需要考虑之间互相干扰问题，特别是地线上的噪音干扰。数字电路的频率高，模拟电路的敏感度强，对信号线来说，高频的信号线尽可能远离敏感的模拟电路器件，对地线来说，整个PCB对外连接界只有一个端口，所以必须在PCB内部进行处理数、模共地的问题，而在板内部数字地和模拟地实际上是分开的它们之间互不相连，只是在PCB与外界连接的端口处(如插头等), 数字地与模拟地有一点短接，请注意，只有一个连接点。

＋

**信号线分布层**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

信号线布在电源(地)层上: 在多层印制板布线时，由于在信号线层没有布完的线剩下已经不多，再多加层数就会造成浪费也会给生产增加一定的工作量，成本也相应增加了，为解决这个矛盾，可以考虑在电(地)层上进行布线。首先应考虑用电源层，其次才是地层。因为最好是保留地层的完整性。

＋

**信号流向设计**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

PCB布局设计时，应充分遵守沿信号流向直线放置的设计原则，尽量避免来回环绕。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gILGrjvia9lTW8AtNqHtKXoca6YiasbjDRDsZXldaBGI2o1A91ibUcsiaP0Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIojqeIvp1UwfYpow1zBs8ajFdPO1wIckbvya3LhGkYFT9mA9ZHwALHQ/640?wx_fmt=png)

**PCB Layout设计实例**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gIaSibHuUlK2M9ZWsnqMRmwgzjkKRicmiariceIib2we0UicZmB8WdlZ3rftEg/640?wx_fmt=png)

＋

**Layout设计建议**

![](https://mmbiz.qpic.cn/mmbiz_gif/ZPtdzESiawhdMHyNfDvj0a36SiaN499NjK0BKean9ibV1T8rYe2gLG8OTSjeCB1NesY09JLKujB7DqpO8DGu4HFxw/640?wx_fmt=gif)

1\. 驱动芯片与功率MOSFET摆放尽可能靠近;  

2\. VCC-GND(CVCC) / VB-VS(CBS)电容尽可能靠近芯片;

3\. 芯片散热焊盘加一定数量过孔并且与GND相连接(增加散热、减小寄生电感);

4\. GND布线直接与MOSFET 源极(source)相连接, 且避免与源极(source)-漏极(drain)间大电流路径相重合, VS 同理GND布线原则(避免功率回路与驱动回路重合);

5\. HO/LO布线尽量宽(60mil-100mil,驱动电流比较高,降低寄生电感的影响);

6\. LIN/HIN 逻辑输入端口尽量远离HS布线(避免过高的电压摆动干扰到输入信号)。

![](https://mmbiz.qpic.cn/mmbiz_png/NzaDcHCg7tb855zyy5KHhvtanFaGl2gI0jKzfQBICj4ibrM6CA767hSZ2HoCDJFa5QVKoWEoVKseHIAZo8CTdOw/640?wx_fmt=png)

\*SQ55664 Layout设计

  

~END~

* * *

版权声明：本文转自嵌入式云IOT技术圈。版权归原作者所有，如有侵权，请联系我们删除！