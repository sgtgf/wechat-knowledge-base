# SCD-14：如何使用MOS设计分立式逻辑门


> 原文地址: [https://mp.weixin.qq.com/s/POfCswPz7PL2O8gUU9b3AQ](https://mp.weixin.qq.com/s/POfCswPz7PL2O8gUU9b3AQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7MLIg0hia32rabvyDlzBaqjaSJ4nVOHkBibOS28EEyVYTwWhicFWjibuDfA/640?wx_fmt=png)

____**____**★★★**____**__________SCD-14---MOS逻辑门__________**____**★★★**____**____

引言：对于那些需要绝对最低漏电流的使用场景，实际上使用分立的MOSFET来实现基本的逻辑门可能会更好。虽然使用的不是很多（大多会选用集成门电路），但有时在使用低功耗电源的应用中非常适用。

___€1.__非门电路_

**_图14-1左_**是一个典型的非门电路，当输入为高电平时，流过导通NMOS管的电流很大，就需要串入电阻Rd限流，但此时消耗在其上的功率很大。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQtslSSMxmrxUHXU5ibQXzGHb3ka9Q9ia9LmJ9eccyhZbSUibgQNicGGkV5SpIqukVbnzu3YSKxrFVoBA/640?wx_fmt=png)

**_图14-1：MOS型非门电路_**

为了克服这个缺点，如**_图14-1右_**所示用一个PMOS管代替电阻Rd，这就构成一个互补MOS非门，也称CMOS反相器（集成非门里面的结构就是如此）。当输入为高电平时，下管NMOS导通，导通电阻为mΩ级别，上管PMOS截止，等效电阻MΩ级别，因此非门输出为低电平。同时输出电压Vout≈0，而通过两管的电流接近于0，所以电路的功耗极低。

当输入为低电平时，下管NMOS截止，上管PMOS导通，非门输出为高电平，输出电压Vout≈VDD，消耗电流取决于out的接收端。CMOS反相器近似于一个理想的逻辑单元，其输出电压接近0或者VDD。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxXCac9AXEQBcEQJL2Fuv2n78g0oEEpKdCSYR6MvckjCOTbLiamP8Upng/640?wx_fmt=png)

**_图14-2：MOS型改善非门电路_**

如**_图14-2_**是一个改善型非门，主要为匹配电平做一个简单的分压，也可以使用在互补式MOS非门。

___€2.__与门电路_  

如_**图14-3**_，因为NMOS的导通电平缘故，NMOS做与门只能是一个“假”与门，即A和B都为高电平1时，out才输出低电平0。另外与门这种设计其实和背靠背MOS开关如出一辙，只是使用场景上的差异。（传送门：[SCD-4：如何用双MOS设计分立式负载开关？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490402&idx=1&sn=65f5039866a53eea5f7a7e302d1df78c&chksm=c33551fdf442d8ebd88891c0a23b0dc16cab833aa06872d8c79ff8469203378d6b4eb1fbc46b&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxFhI5070rmOJkM6iaAYgRAXBZkib5x8tkEWpibXicJmMrnE5CYSpfcdy49Q/640?wx_fmt=png)

**_图14-3：NMOS“假”与门_**

如**_图14-4_**，PMOS可以做一个真与门，即A和B都为高电平1时，out才输出高电平1。背靠背的驱动回顾（传送门：[SCD-4：如何用双MOS设计分立式负载开关？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490402&idx=1&sn=65f5039866a53eea5f7a7e302d1df78c&chksm=c33551fdf442d8ebd88891c0a23b0dc16cab833aa06872d8c79ff8469203378d6b4eb1fbc46b&scene=21#wechat_redirect)）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxcNZtjVicZXeJFJ4vlaDUyoskZibPRYyBRGNyp31CvNmGtgz1uaibKLnYg/640?wx_fmt=png)

**_图14-4：PMOS与门电路_**

如**_图14-5_**，是使用与门做的几个驱动LED指示的示例，因为PMOS的价格普遍较高，推荐使用**_图14-5左_**的方式，当然最为推荐的还是BJT的方式：（传送门：[SCD-13：一文教你如何使用BJT设计分立式逻辑门](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491125&idx=1&sn=5e681b6f25ba0f8b02b85cbb99eeb85c&chksm=c33554aaf442ddbccb10a5008af923a0fdf0710721c7c5f5e340d38b9d8f02a2bf77b1a1aed1&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxB7HEUG0uF38yfYzYha8ibLTKbibUibflhtfPicvnWRJ4HNgZxrfw8grjQg/640?wx_fmt=png)

**_图14-5：MOS与门LED监控电路_**

___€3.__或门电路_

_**图14-6**_是PMOS或门和NMOS或门，注意寄生体二极管的朝向，这里没有示出（传送门：[MOS-1：MOS的寄生模型](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485989&idx=1&sn=d411ff715d230f638b41e002adfdc1cf&chksm=c33540baf442c9ac894b1740e0c54265de5a22c419ddc0b3668e801566b906a8dc415734b0dc&scene=21#wechat_redirect)）。因为不同于功率场景，逻辑门电路都是小信号，因此**_图14-6_**或门都可以使用GPIO的电平驱动，尤其注意PMOS的导通阈值是否大于VDD。（传送门：[MOS-2：一文告诉你如何驱动MOS管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489368&idx=1&sn=3959f9a450a812a293c0b0d26b278a1a&chksm=c3355dc7f442d4d1333275ee72e093add654198644704f71ae896a9a51b1cd54bd2fc8f7df8e&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxkqkKSySBPCicib2YL22PpPuVLuFTHrXZ5JMmVr7icEHUoic86SaqvEM9eQ/640?wx_fmt=png)

**_图14-6：PMOS和NMOS或门电路_**

___€4.__与非门电路_

**_图14-7_**是一个二输入与非门，当输入A、B有一个为低电平时，就会使与它相连的NMOS关断，PMOS导通，输出为高电平；仅当A、B全为高电平时，才会使两个串联的NMOS都导通，使两个并联的PMOS都关断，输出为低电平。n个输入端的与非门必须有n个NMOS串联和n个PMOS并联。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxibFwuXO5hP8MQ3yIQAEibAsWwUpmDNKSOUuLibicibicTyWSjYsfHrbqibARA/640?wx_fmt=png)

**_图14-7：与非门_**

___€5.__或非门电路_

**_图14-8_**是一个二输入或非门，当输入端A、B只要有一个为高电平时，就会使与它相连的NMOS管导通，而PMOS关断，输出为低电平；仅当A、B全为低电平时，两个并联NMOS都关断，两个串联的PMOS都导通，输出为高电平。n个输入端的或非门必须有n个NMOS并联和n个PMOS串联。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBfGtic5Zo6NPYw0hPXjlAxtmsP7mljicyxxX3YwDkPzSnDibYfibZylJqibYicZ0qtjTfn5pwuHRHeA0A/640?wx_fmt=png)

**_图14-8：或非门_**

小结：实际使用MOS搭建分立逻辑门，都是使用与或非三种，后面的与非门和或非门基本都是使用集成逻辑门（传送门：[Logic series-1：基本逻辑门以及其控制用途](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491117&idx=1&sn=64751736b4fbd2ed81b82a40f5f1f148&chksm=c33554b2f442dda4cfda95bf28dc945dc17547127bee029a1bf468d754510bad160e48a12ce8&scene=21#wechat_redirect)），可以借此本节了解集成逻辑门的内部结构。甚至如果对功耗要求不高，都会使用BJT形式的分立逻辑门。分立式逻辑门，无论是BJT还是MOS，选型均为小信号类型。