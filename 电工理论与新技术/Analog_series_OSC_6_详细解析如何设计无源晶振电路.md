# Analog series-OSC-6：详细解析如何设计无源晶振电路


> 原文地址: [https://mp.weixin.qq.com/s/HMQZ5ocrUJlgBVr86dwfNg](https://mp.weixin.qq.com/s/HMQZ5ocrUJlgBVr86dwfNg)

____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjF4ay5p8vA9rEv8CnoLMBibVIia8hxia8LTWiaXCF1QzC64yYSHISCD1eHx5j0MYumDsQmnbYmWmc1Q/640?wx_fmt=png)★★★**______OSC-6---无源晶振电路______**★★★**____

引言：无源晶振的电路虽然简单，但是因为它是整板最核心的基本元件，需要在超长的年限里保持工作稳定，并且它是一个高频辐射源，产品初期的设计缺陷容易导致EMC测试失败，所以无源晶振的电路设计虽简单但考虑点颇多，本节主要简述如何设计和评估无源晶振电路。

______€1.无源晶振的选型理念______

晶振选型时，选用公差和谐振阻抗较小的晶体，除了频率范围、负载电容，调整频差和温度频差是必须选择的参数，一般常用晶振精度不大于±50PPM，长期抖动应小于500pS。有些晶振抖动大，相位噪声大，频率误差大，信号不能正常解调，误码率高，会影响整个链路的SNR或者灵敏度等。如果产品对晶振的稳定性要求特别高，建议切换有源晶振。

计算激励功率（驱动功率，下面统称为激励功率）DL根据MCU规格书选择晶振，计算增益裕量Gmargin，最后成品除了常规晶振测试，再进行一次裕量测试。

____________€2.无源晶振的电路____________

____________![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSKUXL3onibvW8eHuHeEZ7nfx4gZ9lSdWVeakAEZun9qKF4qlG452jSq3XmtVHeD97bzBv12810ADQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)____________

**_图6-1：无源晶振典型电路_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRHg2HtjwOB3vgjWiajPBF0Tjk2HwqfovKC5tjvJru6ZsXv6zjRQVJdicATxBfZJjFsmA0l0wK5Np7A/640?wx_fmt=png)

**_图6-2：无源晶振的几种常见外围电路_**

如**_图6-2_**所示，无源晶振电路的几种常见方式，有内置RF，外置RF，单端Rd，两端Rd，选择哪种参考主芯片手册，如果手册没有，推荐选择外置RF，两端Rd的方式，可以覆盖到所有的调试点。如果晶振并联1MΩ电阻时，程序运行正常，而在没有1MΩ电阻的情况下，程序运行有滞后甚至无法启动，建议给晶振并联1MΩ的电阻以帮助晶振起振。

_RF&Rd_

 KHz晶振电路Rf为10MΩ左右，MHz晶振电路Rf为1MΩ左右，如果没有加Rf，晶振电路也可能会起振，但存在不起振或者停振的隐患。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRHg2HtjwOB3vgjWiajPBF0T5LS9dszggPPsUJMJl0KwekSBuicKhzMibUPLKQ7I2sQ67MSYVqDGvNSw/640?wx_fmt=png)

**_图6-3：无源晶振标准正弦波_**

1MΩ电阻是为了使反相器工作在线性区，以获得增益，在饱和区不存在增益，而在没有增益的条件下晶振不起振。并联1M电阻增加了电路中的负性阻抗（-R），即提升了增益，缩短了晶振起振时间，使晶振起振更容易。另外如果电路中无任何的扰动信号，晶振不可能起振，许多反相门电路中不加这个电阻也能起振是因为一般的电路都有扰动信号，但当扰动信号强度不够时，就需要人为外置RF。另外在低温环境下振荡电路阻抗也会发生变化，当阻抗增加到一定程度时，晶振就会发生起振困难或不起振现象，这时也需要给晶振并联1MΩ电阻。

注：并联电阻不能太小，串联电阻不能太大，否则在温度较低的情况下不易起振。

_CL_

在无源晶振应用方案中，两个外接电容能够微调晶振产生的时钟频率。晶体的等效电路**_图6-4_**由静态电容C0，动态电容C1，谐振电阻R1，以及动态电感L1组成。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QSx0lKbE6YCYrpYuqwnIES27ibHttK1UmxicRQG2PwmtvqCM0bchfLX1A/640?wx_fmt=png)

**_图6-4：晶振等效电路_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QAB0dbS4AvdXKCv2Hz46s15HMWP6zicCrymLKn4C60WpVkCZeDnJnhbA/640?wx_fmt=png)

谐振器的频率飘移是其负载电容的函数，公式如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5Q0VPOVQzkTrOo6UHhGLZuMfRvFXFTv2IMawsjznEs282vxibXOkYU74w/640?wx_fmt=png)

由上式可见，如果负载电容CL很大，静态电容C0的改变对频率变化的影响很小，频率更加稳定。所以负载高，远端相位噪声好；若负载电容CL过大，则很难调整到标称频率，晶振不容易起振。相反，如果负载电容CL很小，静电容C0的微小变化会造成频率的明显变化，近端相位噪声好，容易调整频率，晶振容易起振。

在选择晶体的负载电容时，我们要尽量权衡能量损耗和频率的稳定性，建议选用谐振电阻较小的晶片，才能给CL保留调整空间，改善近端和远端低相位噪声需求。

小结：无源晶振的匹配电容可以选择两个不等值的电容，一大一小可以加快起振。一般常用的电容有6pF、10pF、12pF、18pF等。在允许范围内尽量选小一些的电容，大些的电容虽有利于振荡的稳定，但会增加起振时间。起振较慢--->电路相对稳定--->远端相噪好--->不利于近端相噪；起振较快--->近端相噪好--->但是牵引量较大--->线路不稳定--->频率漂移较大--->不利远端相噪。

__________________€3.______激励功率Drive Level____________  

晶振的功率必须小于规格书中限定的DL值，否则晶体会过度机械振动而处于非正常工作状态。ESR为等效串联电阻，Iqrms为流过晶振的电流均方根有效值。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QCfkm2agUfkSlrBFrjqD4tOrMUyic66Dfmb0KBtJ3LtEu6OyLSPYjYCw/640?wx_fmt=png)

计算激励功率DL：如果小于DLcrystal，不需要使用外部电阻Rd，如果大于DLcrystal，需要加上Rd在计算gmargin确保数值大于5。晶振过分驱动会使频率上升，导致晶振早期失效。Rd用来调整激励功率（Drive Level），Rd具体大小需要根据驱动程度进行调整。

____________![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1OEMlp41BOoeViaVpDZJxDq90X8icqftz4ATRDzkUdW7NGj6FklAAvFx2w/640?wx_fmt=png)____________

**_表6-1：芯片对晶振的波形幅值要求_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QvtTBXfk8kRU2UYJ18GMibKtBu5oibYb3CED40iblq7oYA8pJ0PAqgdHXA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QNedkX6C00X8zzDkrtiaUPZW6uRk8IibBfQKZx11bYXBV1TKdb2Nibye0g/640?wx_fmt=png)

__________________€4.______增益裕量Gain Margin____________  

振荡电路的放大能力，决定晶振是否能正常起振。计算gmcrit需要的ESR、f、C0、CL都可以从晶振的规格书中获得，反相器跨导g可以从芯片规格书中获得。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QOFex0RWJjzCRe8piamPIEibjRWQDYJoV5cvic62qQNGffBOHxTTnPlxow/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QNedkX6C00X8zzDkrtiaUPZW6uRk8IibBfQKZx11bYXBV1TKdb2Nibye0g/640?wx_fmt=png)

计算增益裕量gmargin：如果<5，晶振可以正常起振，如果>5，需要重新挑选更低的ESR或者CL的晶振，根据晶振规格书中的负载电容CL，计算外部电容C1、C2。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1OicpxVhJrbHwBibia4iaq9hgqk7NjNWibm8ygcYbHJpH35D6IrQrayFDP9fw/640?wx_fmt=png)

**_表6-2：芯片对不同频率晶振的GM要求_**

__________________€5.______起振时间和频率漂移____________

起振时间主要由晶体的谐振电阻与负性阻抗共同决定，晶体的谐振电阻越小，起振越快，负性阻抗大小由振荡IC和负载电容CL决定，负载电容与负性阻抗大小成反比。

晶振起振时间的公式如下：其中 L1是动态电感，R1是谐振电阻，Rn 是负电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSficr0RTy0J1ztnXNk8Sc55RG6SE3Zdiblicz8rtKvKRsr5qeMicA15hTG0GZKnM7YnaibkaJLCL3Gia0Q/640?wx_fmt=png)

谐振器的负电阻Rn公式如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0BM1aumxGfMBlMpWOZF5QZVwjUOyiaXlGUp7icJMHrMNHcKtBhL3iaHgo7laibD6wVEhhE8Jr8V9ibiag/640?wx_fmt=png)

其中g是谐振器的跨导；f 晶体的共振频率；CL 是负载电容。

由公式可见：负载电容CL越小，负性阻抗Rn越大，Rn越大，t越小，起振时间变快；所以可以推出：负载电容小，负电阻高，起振时间越快，负载电容大，负电阻低，起振时间慢

假如32.000MHz-10pF和32.000MHz-18pF这两个晶振的参数都可以满足要求作替代，就需要注意负载电容不同带来的起振时间差异，一般来讲这个时间比较小，多数可以忽略不计。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1O7aWPGHRoUsHPic2GG9yqLvuicq1NuTHzseTMEQJhPwCKp1tQNIIy5Xsw/640?wx_fmt=png)

**_图6-4：晶振的起振时间示意图_**

如**_图6-4_**所示是晶振起振和整个MCU运行起来的前后关系，上电完成之后晶振开始起振，直至晶振输出波形正常，MCU才开始工作。如果晶振起振这一步失败，MCU也不会工作。

__________________€6.______裕量测试/振荡宽限____________

石英晶体振荡器的振幅条件是振荡起动及能正常持续振荡，评估振荡宽限是回路上的负性电阻绝对值│-R│。最常用的测试裕量的方法是负阻测试，如**_图6-5_**所示，在晶振支路上串联一个电阻，这个阻值的大小一般为3到5倍的晶振内阻。当加入这个负载电阻后，如果整个晶振电路还是可以正常起振，就基本上可以判定这个晶振拓扑是稳定的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1O29R0fwgfM1iaS92nibS1CaTGnCXHZxftPdzD61nStcH3dcf7qsMOcm0g/640?wx_fmt=png)

**_图6-5：负阻测试示意图_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1OBsV73SAM5vghdAiaEEhsqy5M3ciagfWnAXxGT8jsecvicLHrh7vjfgRTQ/640?wx_fmt=png)

其中RT是与晶振串联连接的纯电阻，Re是振荡时的有效电阻：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1Ox2t6QibjAgiaIG9JkshN2Rca2N01BaZzcPTa0ObcLV1eQqJD8WRVJjSg/640?wx_fmt=png)

建议振荡宽限为晶振等效串联电阻Re的5倍之上，即│-R│=5Re+Re，此时需要整个晶振电路正常起振并保持稳定。

______€7.__________________晶振复用____________

通常一个系统共用一个晶振（支持XTIN和GND输入方式），以便于各部分保持同步，如果使用一个晶体时钟，一个时钟缓冲器（或反转门）可以用来驱动其他芯片，该缓冲器应靠近晶体放置以最小化寄生电容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRq30eFhfGV2Jo12YrVkM1Os4TWV0ibhicMSO4NGrFIl9PU6TFXF0SGImspjh8ezuZDrn95TVsNUEGw/640?wx_fmt=png)

**_图6-6：单晶振供应多芯片_**

______€8.无源晶振的EMC电路______

虽然一般针对无源晶振电路进行EMC整改比较少见，但在例如基频很大，周围存在敏感器件等特殊使用场景，预留EMC整改空间还是很有必要的，如下**_图6-7_**是无源EMC电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRHg2HtjwOB3vgjWiajPBF0TGjIw5EcicmichgALGKoHx5TnShlR6huy6ibEPaaVrUz2ia543OYGtaqlLg/640?wx_fmt=png)

**_图6-7：无源晶振的典型EMC电路_**

其中L1、L2是磁珠FBMA-10-160808-121T：0603磁珠，120Ω@100MHz ±25% 100mΩ 2A，其中10表示是适用高频类型，消除高频次谐波。

1#：C1、C2为谐振电容，根据实际需要取值

2#：R1、R2可以根据实际情况更换为跳线电阻

3#：C3为预设计，可根据测试情况增加或者调整

4#：L1/L2可根据测试情况增加或调整

文内涉及参数回顾：  

（传送门：[Analog series-OSC-1：无源晶振的基础](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491450&idx=1&sn=37f9f37ad7e1594179b285c63b5231bf&chksm=c33555e5f442dcf36ea23b4e4309917362e8c0b5cb58f586e267598894dd6493ff19c9f4c66a&scene=21#wechat_redirect)）  

（传送门：[Analog series-OSC-2：无源晶振的特性参数](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491500&idx=1&sn=7ff5bbcd2613d801ff23b7bf43926990&chksm=c3355533f442dc2512a37aa5852c3b32e692182f02ad0d90a53ded43bf25615838cc861849b5&scene=21#wechat_redirect)）