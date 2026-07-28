# SCD-8：实例计算如何设计电源切换电路


> 原文地址: [https://mp.weixin.qq.com/s/QnWavBJ-OdNfFUJ4RU2TkA](https://mp.weixin.qq.com/s/QnWavBJ-OdNfFUJ4RU2TkA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT5ByjQrmUX1BXRdQPB0KluHOicZkTaef0STvQyiby6miaetewXBzicVc9ib4vSpnyib7eYA6bncr8XVnqQ/640?wx_fmt=png)

____**★★★**______SCD-8---如何进行电源切换______**★★★**____

引言：在越来越多的电子系统中，都在拓展电源供给的多样化和稳定性，备用电源的引入和多接口支持供电都增加了电源切换的复杂度。本节主要探讨如何进行主动多电源切换和自动多电源切换。涉及到需要增加栅极驱动电路的可以回看往期（传送门：[SCD-6：教你如何使用三极管BJT驱动MOS管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490606&idx=1&sn=2c4b44680ce0a39b7d05ea6a46a4caba&chksm=c33556b1f442dfa746c59d9527e1c42e887e43d94699e91e864e1830f8eefae0f1646eb15000&scene=21#wechat_redirect)和[SCD-7：教你如何使用MOS管驱动MOS管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490820&idx=1&sn=85a2e6e21ced3828343fead98cefe60f&chksm=c335579bf442de8d301d6831ec692197826ddb07dc2c7f178fd2853af044c97aad2e03ddbfce&scene=21#wechat_redirect)）。

____€1.___主动多电源切换_

反向驱动负载开关的另一个重要应用是电源或门，见**_图6-1_**。如果电路能够由多个电源中的一个供电，则必须避免电流倒灌到未使用的电源，即利用体二极管消除环流。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRXS7lZouMick3KJaqncf3ubVstE8UtnM4cd4NVianK5MYU0Lk9zvtqDrf6S5icpoLqPvQuLSoLXHgAg/640?wx_fmt=png)

**_图6-1：电源或与P沟道MOSFET_**

供电选定逻辑可以使用GPIO控制栅极驱动电路，这种主动控制多电源切换的关键在于控制部分的供电需要常供，不能处在Vin1或者Vin n的后级，要么处在开关MOS之前，要么就独立供电，否则会出现供电自杀或者死循环。

之前我们说到体二极管会导通电流，所以PMOS开关使用中都是让电流从S极流向D极，这样才能做到完全关断，**_图6-1_**中明显不是这样，那么当让Vin1供电，让Vin2关断时，根据刚才说的，Vin2做不到完全关断，也会导通电流，那么是怎么做到一个供电的呢？

其实此时Vin2还是完全关掉的，不会进行供电，怎么理解，这就涉及到电源的并联。当Vin1=Vin2=5V时，Vin1完全导通，Vin1和Vin2的S点的电压均为5V，Vin2的D点电压也是5V，不满二极管的导通条件（给与正向电压，并且大于二极管的导通电压，MOS的体二极管电压都有0.6V-0.9V的一个导通电压）。当Vin1高于5V时，Vin2的MOS管更不会导通，处于截止状态。当Vin1=3.3V时，Vin2的电流则会通过体二极管倒灌进入Vin1，所以这种情况就需要在高压路径上使用背靠背双MOS。

小结：当Vin1=Vin2时，两个路径单MOS即可满足随意切换；当只有低电压往高电压切换时，两个路径单MOS可以，当存在高电压往低电压切换时，高电压路径MOS管体二极管会有电流流向Vin2，存在倒灌环流，这时需要在高电压路径上使用背靠背双MOS（如**_图6-2_**）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSf7HyVBA36JOmMMe7PXFic05w9EhWibK7iaMWj9gL2AaWpYMUzciadEQoKozmibCD62S80yjkJCWuYLqg/640?wx_fmt=png)

**_图6-2：不同电压供电切换电路_**

_____€2.____自动多电源切换_

主动多电源切换往往多使用在板级系统里面对子级或者旁级模块进行电源切换，那么在多接口电源供电中往往不能进行主动选择，这时就需要自动进行多电源切换。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSf7HyVBA36JOmMMe7PXFic0ibTDcHsY3djQqicFtponWTibaPNDN39je1HMBHL9eU2Yu8T0AOv1rCKkA/640?wx_fmt=png)

**_图6-3：多电源自动切换电路_**  

如**_图6-3_**所示，Vin2为主电源，Vin1为副电源，当Vin2供电接入时，，Q2的栅极接地，体二极管开始流过电流，S极电位为5V，此时VGS满足开启Q2开启阈值，Q2完全导通，电流转移到Q2主体流过；当副电源Vin1接入时，Q3的VGS=5V，大于开启阈值，Q3导通，Q1的G极接地，Q1的VGS满足开启阈值，Q1导通，此时Q2的G极电位被接入的Vin1在R3的钳固作用下为5V，此时Q2的VGS=5-5=0V，主电源Vin2自动关断，当副电源Vin1断开时，主电源Vin2又被重新激活打开供电。同样，如果存在Vin1和Vin供电电压不同，需要在高压侧用背靠背设计。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSf7HyVBA36JOmMMe7PXFic0jo4CBm5GeYMrfaQ3xnTHwAJXkib8x3f03hbiaTwMelrpTGibSKrPna2ibQ/640?wx_fmt=png)

**_图6-4：简化版电源供电切换_**

如**_图6-4_**为简化版电源切换，将图Q1使用一个肖特基二极管替换。当外部接口Vin1没有接入供电时，Q1正常开启，锂离子电池Vin2常供电；当外部接口Vin1接入时，Q1被关断，锂离子电池断开供电，当Vin1＜Vin2时，因为D1不再是MOS管，所以不会发生Vin2-->Vin1的倒灌环流，但是会有些许电流流向负载，锂电池不完全没有供电，此时锂电池路径需要增加背靠背设计。当Vin1≥Vin2时，即T1点电位≥T2点，Q1体二极管不会导通，因此不会发生Vin1-->Vin2的倒灌环流。简易化的电源切换缺点也很明细，D1压降比MOS大，损耗也比较大，供电电流比较大时不推荐**_图6-4_**这种方式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT5ByjQrmUX1BXRdQPB0KluvjfxqV6fMnXh4XicaXS9z4bGSJs6HVv3uQHsUFILyC4PLyicjdvGeN5w/640?wx_fmt=png)

**_图6-5：带充电管理的供电切换_**  

**_图6-5_**为一个简单的延伸使用，在外部接口Vin1接入时，锂电池Vin2停止供电，并且可以实现Vin1在给系统供电的同时继续给锂电池充电。

_____€3.____主动多负载切换_

得益于背靠背MOS的电流双向性，还可以将MOS开关用于多负载切换，如**_图6-6_**到**_图6-7_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiae2JpdzY2e8VOpJyf5YZYtP9lxNoZrIDCnibcgc27RyUVXZvzIc3CtdMib9krX9sj9Micv6cEZODJA/640?wx_fmt=png)

**_图6-6：简单的双负载切换电路_**  

注意看MOS的体二极管朝向，与多电源切换不同，多电源切换是为了避免环流，而多负载切换是为了避免漏电流。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiae2JpdzY2e8VOpJyf5YZY8T03meQ21YkABCmRSo3dMm1N4ia4aJEXiaSzkA6gvav1FYAjpHl6FHfg/640?wx_fmt=png)

**_图6-7：带反向电流保护的双负载切换电路_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiae2JpdzY2e8VOpJyf5YZY2gKJvpicuF8Q4K45oD6fxMO53Yiatp9zCkD7T2fA5PQaibkqoELzBibmNw/640?wx_fmt=png)

**_图6-8：电池充电切换_**

**_图6-9_**显示了备用电源系统中BPS的另一个用例。监控电路监控系统状态，并在睡眠状态下断开电池与主电路的连接。这有助于避免从电池中泄漏电流，从而节省宝贵的电池能量。在此用例中，BPS应产生很低的关闭电流。当电池连接回主电路时，BPS应能够提供涌涌电流保护。

当从电池等有限的电源为应用程序供电时，设计者通常会实现所谓的低功率操作模式。大多数现代的微控制器都有几个级别的低功率操作模式。然而，要获得尽可能低的应用程序备用电源，最好的方法仍然是简单地关闭所有电源，同时留下一小部分电路通电，以处理唤醒检测。整个应用程序在PWM模式下运行，它大部分时间都是关机的，而只是定期醒来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSiae2JpdzY2e8VOpJyf5YZYL0eibVPTVhMQibIwPJ9kQIctS8e8ZbuAkqm6seFugzkTk9znk7MAMuAQ/640?wx_fmt=png)

_**图6-9：低功耗监控电路**_