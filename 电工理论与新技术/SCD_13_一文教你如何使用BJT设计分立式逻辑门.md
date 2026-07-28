# SCD-13：一文教你如何使用BJT设计分立式逻辑门


> 原文地址: [https://mp.weixin.qq.com/s/PvO5Wj83D-f8QZUUmTIzqw](https://mp.weixin.qq.com/s/PvO5Wj83D-f8QZUUmTIzqw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7GmNIJPk8Rs2TN7ibZUGribxeodIwib8uRRoQMriaWck2YPhWyiaZod8e0bA/640?wx_fmt=png)

____**★★★**________SCD-13---BJT逻辑门________**★★★**____

引言：二极管逻辑门只能做基本的与门和或门，并且驱动能力受原生GPIO的输入输出电流限制，所以本节简述如何使用BJT设计分立式逻辑门，规避驱动能力不足带来的风险。

___€1.非门电路___

如**_图13-1_**所示，是一个简单的NPN型非门电路，当in端为高电平1时，Q1导通，out端等效接地，输出低电平0；当in端为低电平0时，Q1不导通，out端等效接VCC，输出高电平1，驱动能力可以通过R1和R2来进行调整。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgKWAoSArAnU4NMWeiauoxSDYjibIYDe4m2vQGONYIn184TGAEcqutia0rQWYcNrTeHtia57CvqoobhA/640?wx_fmt=png)

**_图13-1：NPN型非门电路_**

以上述NPN型非门电路为例，需要注意in端的控制电平，能够让Q1足够导通，VCC的电平直接决定out的高电平值，所以out的接收端电平必须和VCC匹配，比如VCC=1.8V，但是out接入的MCU为3.3V，那么电平就不够，需要将VCC调至3.3V。相反VCC=3.3V，但是out端接入的MCU为1.8V，此时有两种解决方案：一是将VCC调至1.8V，二是在通路上再串入一个电阻，如**_图13-2_**所示两枚电阻成比例分压，将3.3中间分出1.8V，注意一定要考虑NPN的导通Vce压降。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSsXOXK4LS8Rw45eRsxuXMJdzayp0v96JiaV2YXE7zniawXmIshJrMPSuWxEib2VeuDR9FlNpbYtjYBQ/640?wx_fmt=png)

**_图13-2：NPN型改善非门电路_**

NPN的非门可以用作简单的非门逻辑，也可以与和其它器件组成更为复杂的混合逻辑。受益于三极管的低成本，可以在降低成本时考虑该设计。  

_____€2.____与门电路_

如**_图13-3_**所示，当A口和B口同时输入高电平时，out端才输出高电平，R3为限流和置位电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgKWAoSArAnU4NMWeiauoxSbRZazmkysf7TVO6zTTmO0TPlkuK3vVoQfibvWvtYX0Gd4L9d9gpFeWA/640?wx_fmt=png)

**_图13-3：NPN型与门电路_**

同样的上述与门需要考虑电平匹配，并且由于Q1和Q2的叠加，存在不小的导通压降，所以实际的out高电平小于VCC，这一点需要格外注意，避免高电平临界判断电平阈值。

NPN与门除了逻辑运用，还能比如只有当两个事件同时发生时才能触发（复位），既可以监控事件复位也可以监控主模块和备用模块的工作状态。如**_图13-4_**和**_图13-5_**所示也可以配合LED做一个监控模块，例如同时监控3.3V和5.0V电压是否都到位和在位。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTyUibItyyWTFBnpewKzWo2vCqBRsEGCkF0LuJrrmlG9txRDA6PkehHyibWZCQzauf2JEnJpaYNe2ibQ/640?wx_fmt=png)

**_图13-4：NPN与门使用场景之一_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRiapibGycOsOBBbIJcZe37JJaSoa115hcGhF7553FHxibdHR6YJQxqaj6IWrUEPz7RDyn3dhhGKxBrQ/640?wx_fmt=png)

**_图13-5：使用与门监控板级电路系统_**

_______€3._____或门电路__

如**_图13-6_**所示，当A口输入高电平和B口有一个输入高电平时，out端输出高电平，R3为限流和置位电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgKWAoSArAnU4NMWeiauoxS6gibpVcibGTR5TJe5rB4BMA8KzWQPTbQDj5jtR4pEiaR8Yk7DoGZav1tA/640?wx_fmt=png)

**_图13-6：NPN型或门电路_**

NPN或门除了逻辑运用，还能比如当有一个事件发生时就可以触发（复位），既可以监控事件复位也可以监控主模块和备用模块的工作状态。只要有一个模块工作就可以知道系统还在运行。

如**_图13-7_**所示，配合LED做一个监控模块，监控系统复位状态，监控电源状态等等。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTyUibItyyWTFBnpewKzWo2vkrLzGwCGzlc4KBQzWr7XprCaeu2RYqtHOqwYaQYaRiaEV4Zic6uvBN6g/640?wx_fmt=png)

**_图13-7：NPN或门使用场景_**

小结：BJT分立逻辑门，成本低，使用广泛，有效规避了驱动能力不足的风险，并且驱动能力可调。也可以使用如上基本门电路组合出更加复杂的逻辑，但通常不建议这么做。

一些对逻辑控制信号质量要求比较高的场景，比如上升时间，延迟，则需要对基本电路进行优化，关于这一点后面会有章节另外讲到。其次，更高频率和对功耗敏感的场景，BJT型逻辑门其实不太适合，推荐使用集成的逻辑门，信号质量和响应时间更好（传送门：[Logic series-1：基本逻辑门以及其控制用途](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491117&idx=1&sn=64751736b4fbd2ed81b82a40f5f1f148&chksm=c33554b2f442dda4cfda95bf28dc945dc17547127bee029a1bf468d754510bad160e48a12ce8&scene=21#wechat_redirect)）。最后上述电路的基本计算这里不再举例，推荐大家回看往期：

（传送门：[BJT-1：三极管的三区含义](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489199&idx=1&sn=cf4a3db0db0d8a4a26aa48c91e452c89&chksm=c3355c30f442d5266676ff8df5c3f6273c197f1c54f14f6e560932e910e43cd4df27e233d0e4&scene=21#wechat_redirect)）  

（传送门：[BJT-2：如何计算晶体管开关电路-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489619&idx=1&sn=cc35702cf79f1053faa43d186641788a&chksm=c33552ccf442dbda26f24febcbc952eaf04dcc768614e52391377f2951aaad8939fe6d429eb6&scene=21#wechat_redirect)）

（传送门：[BJT-3：如何计算晶体管开关电路-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489641&idx=1&sn=7733fa3121824ee7c1bf42be1627ce01&chksm=c33552f6f442dbe09d52656ef2eaa1fa3ce83e9ad449eeaced443e04632e86f2fa0282c671ba&scene=21#wechat_redirect)）

（传送门：[SCD-5：如何用分立式BJT设计高低边开关](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490437&idx=1&sn=fc8de04dd8dcd958ee583761ab587583&chksm=c335511af442d80cadd0612851836c33fe7db5ff14bc02036867fcd1f6f68f1d1a835723c9bd&scene=21#wechat_redirect)）