# Power Path-7：阻断反向电流


> 原文地址: [https://mp.weixin.qq.com/s/2AGKPVQ2QFmDaH7Z8Xl4Ag](https://mp.weixin.qq.com/s/2AGKPVQ2QFmDaH7Z8Xl4Ag)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSFpyGibPSDYFQ4muNWhQHbeZsqiaCBRibd8cWHXPY8dGZaFgxU0gMHjDCibw/640?wx_fmt=png)

____**★★★**______Power Path-7---阻断反向电流______**★★★**____

______撰稿：Timothy  校稿：Timothy______

引言：当电流从输出端流向输入端而不是从输入端流向输出端时，会出现反向电流。本节简述反向电流的来源，为什么它会对系统有害，以及如何修改设计以防止反向电流。

__€1.什么是反向电流__

反向电流是指系统输出端的电压高于输入端的电压，导致电流在系统中反向流动。反向电压有两种常见来源：第一种是当电源与系统断开时，输入电压突然下降，在此期间，可以在输出端留下更高的电压，从而暂时产生反向电流，见**_图7-1_**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSFgqVpeCyqiaIicPOdkUCeBLdytw7EKMZlzP6B6qdJPXuRH4n3Jqaiad7ibQ/640?wx_fmt=png)

**_图7-1：由突然断电引起的反向电流_**

反向电流的另一个原因是当MOSFET用于负载切换应用并且体二极管变得正向偏置时，电压高于输入的开关的输出，会产生反向电压，这就是产生反向电流的原因。不要将其与负电压混淆，负电压也称为反极性，在电源的正极和负极端子切换的情况下，会出现负电压。在这种情况下，应该接GND的负网络实际上有一个从正输入到系统的电压，如**_图7-2_**所示。这导致通过器件的电流现象与反向极性不同。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSF5KYqgZOzhfslIvVjYVrAKdPj2CEOIrvsZY91uM6xRK3lO2EeNrmGGA/640?wx_fmt=png)

**_图7-2：反向极性(a)；反向电压(b)_**

____€2.__为什么需要阻断反向电流__

反向电流会损坏内部电路和电源，根据从输出到输入的路径，反向电流尖峰也可能损坏电缆和连接器。如果将MOSFET用于负载切换应用，正向偏置时，反向电流可以通过其体二极管反向流动，因为FET输出电压大于输入电压，这导致体二极管两端的功率耗散线性上升，功耗由下式表示：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TTiah5rXLdlYGdViavjB4pXQic0mcwCQYW0zxNxjgUORo0jPAgus45TGqjBiasnPEweXA0YdSpzHZHNAA/640?wx_fmt=jpeg)

其中PD是体二极管两端耗散的功率，Irev是通过器件的反向电流，Vdrop是体二极管上的电压降。如果通过设备散热产生的热量超过设备的热额定值，则可能烧毁，因此必须限制反向电流或反向电压。

______€3.__什么时候需要阻断反向电流____

在有几个应用场景中，阻断反向电流非常重要且必要。

_电源多路复用_

电源多路复用是指使用开关电路为系统选择多个电源中的一个，并能够在它们之间进行切换。如果其中一个电源电压高于另一个，那么即使另一个电源轨有“断开”开关，也可能出现反向电流\--->一个例子是使用FET切换电源，开路FET的输出处的较高电压导致反向电流从较高电压电源流过FET体二极管并进入较低电压电源。**_图7-3_**显示了当3.3V电源开关打开时，向系统施加5V电压的情况，对于开关，使用简单的FET解决方案，即使开关断开，反向电流也能够流过FET体二极管。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSFf7meAfrkCx4lt9zyIbNJ9S06uxec7fjPkyzU5xHSlkP93zclxt9Viag/640?wx_fmt=png)

**_图7-3：电源复用产生的反向电流_**

_或门_  

ORing类似于电源多路复用，只是最高电压总是为系统供电，而不是选择一个电源为系统供电。反向电流阻断在这里也是必需的，因为当另一个开关闭合时，每个ORing开关都会看到反向电流。

_输入功率的突然损失_

当闭合的开关突然失去输入电源时，就有可能产生反向电流。如果开关输出端的电容大于输入端，那么输出端的电压将衰减得更慢。这意味着，当电压衰减时，开关输出端的电压下降速度将比输入端慢。在此期间，开关输出上的电压将大于输入，因此反向电流将流过开关。为了避免这种情况，应该有一个阻断反向电流的开关，或者一个比输出电容更大的输入电容。

_大电容_

在一些系统中，当输入电源下降时，超级电容器保持输出。这有时被称为Bulk电路，允许系统安全断电，为了保护上游电源或组件，在这里需要设置反向电流保护。

________€4.__如何阻断反向电流______

有几种方法可以阻止反向电流。

_二极管_

二极管非常适合高电压、低电流应用，但是二极管会导致正向电压下降，这会增加系统中的总功耗，并使电源下降0.6V至0.8V，可能会导致系统效率降低和电池寿命缩短。一种普遍的替代方案是使用肖特基二极管，它们具有较低的正向电压降，但更昂贵，反向电流泄漏更高，这可能会给系统带来问题，如电源或电池损坏。

_背靠背MOSFET_

使用背靠背MOSFET是一个更好的的选择，因为当MOSFET关闭时，它可以在两个方向上阻断电流。与二极管解决方案相比，从电源到负载的电压降更低，但是这种方式占用了PCB上更大的空间，需要构建几个组件，如下**_图7-4_**所示。（传送门：[SCD-4：如何用双MOS设计分立式负载开关？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490402&idx=1&sn=65f5039866a53eea5f7a7e302d1df78c&chksm=c33551fdf442d8ebd88891c0a23b0dc16cab833aa06872d8c79ff8469203378d6b4eb1fbc46b&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSF4jH56UeNsn4rtjYRjIzXGC3rZcSM43TZHU3QbEW5ib9eXDjlxn5Xkgw/640?wx_fmt=png)

**_图7-4：背靠背MOSFETS的反向电流阻断_**

_单MOSFET_

如**_图7-5_**所示，如果MOSFET的位置使体二极管方向从输入端到输出端，那么当MOSFET关闭（打开）时，将不会有反向电流流动。（传送门：[SCD-3：如何用单PMOS设计分立式负载开关?](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490360&idx=1&sn=c39b6d4ce6e908dbe119c061216832c8&chksm=c33551a7f442d8b1f3c155cdeec80e9a6623a0000706ecb7532dcfd1568e5d9bd9a84a1ab866&scene=21#wechat_redirect)）（传送门：[MOS-5：MOS的电流方向是唯一的吗？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490121&idx=1&sn=ccc489fe8ec9739bb2dfffb51c1c44ee&chksm=c33550d6f442d9c090bb23440d7e3e823036642a4dab9096be72247d90f77bcf7b93e8d64563&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS2vWjTz2KkQuwuayTqxMSFHZCKqfNBJia5t8oeZMHLibfO4aEupIHkqia2QWEzujlsCsZLHN83zcAIA/640?wx_fmt=png)

**_图7-5：使用单个MOSFET被禁用的反向电流阻塞_**

这种解决方案的缺点是不可能关闭电源，因为在电源和负载之间二极管总是导通的。这是二极管ORing的首选状态，但对于功率多路复用来说则不太好，因为可能需要优先考虑较低电压的电源，例如当系统的主电源是较低电压但备用电池是较高电压时，使用ORing电路，蓄电池将为系统供电，直到电压降至主电源电压以下。电源多路复用电路将避免电池被使用，直到系统决定切换到备用电池。

__________€5.__阻断反向电流的电源开关________

有几种类型的电源开关能够阻断反向电流。

_负载开关_

负载开关通过切换内部MOSFET的主体端子来集成反向电流阻断功能，器件具有低导通电阻，同时仍然为电源提供保护，如果负载开关断开，则反向电流总是被阻断。

一些设备提供始终导通状态的的反向电流阻断，如果输出电压比输入电压大某个电压阈值，则会关闭设备。常开反向电流阻断方案的缺点是，在器件关断之前，输出电压需要大于输入电压，因此在发生这种情况之前，一定量的反向电流将流过器件。**_图7-6_**显示了在启用反向电流阻断之前通过负载开关的预期反向电流的示例。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSsqnagJ6dzOOBzic1pLKMwXmd9ZAoibLS6NmibiaBkicyTOdTefK73zKYftJCOxpYJ80fwHZHZjicQdlsg/640?wx_fmt=png)

**_图7-6：全时反向电流保护（VIN=3.0V，VOUT从3.0V上升到3.3V）_**

_eFuse_

对于eFuse，背靠背的MOSFET形式是最常见的，因为MOSFET具有更高的耐压。在一些器件中，两个MOSFET都集成到器件中，但在另一些器件中有一个引脚用于驱动外部第二FET以创建背靠背配置。与负载开关类似，有些eFuse通过监测VOUT和VIN之间的差异来提供始终接通的反向电流阻断，而其他eFuse仅在关闭时提供反向电流阻断。

_电源多路复用器_

集成电源多路复用器安全地处理电源多路复用应用，从而使反向电流不会从一个电源流到另一个电源，当前的电源复用器采用背靠背和体端配置，并且所有电源复用器都具有反向电流阻塞。

_理想二极管_

理想的二极管是驱动外部MOSFET的控制器，体二极管从电源到负载，理想二极管将自动检测输入和输出电压差，以始终启用反向电流阻断功能，同时保持低导通电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRyYlLATP0MNGuYafJRMsyKeeOd2Qo5VnYIicRWmzt0NcDMn4XewlvAcaXOqJzq5voRialf8Sfgpeiaw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**_图7-7：理想二极管控制器简图_**

__________€6.小__结________  

诸如电源多路复用或功率损失之类的应用可能导致反向电压事件，该反向电压事件将产生反向电流，这可能会对电源和系统造成损坏。各种不同规格的电源开关体积小、成本效益高，用于反向电流保护，有助于防止反向电流造成的损坏，非常适合各种应用。

（传送门：[Power Path-2：电源开关-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492927&idx=1&sn=6ca4f8c0e7b3a999497dac711b13481a&chksm=c336afa0f44126b6eed42c9a8bfd8f36ea869de5270935bc46743d3362386e46b4942e5ecf7a&scene=21#wechat_redirect)）  

（传送门：[Power Path-3：电源开关-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493025&idx=1&sn=6367fb99e0b02b6fdfc87f9b535e06fc&chksm=c336af3ef4412628951af58d475453a1da3166b5f948e116feb7212f7051ce313fb650965393&scene=21#wechat_redirect)）