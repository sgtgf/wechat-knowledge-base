# SiC功率器件在电动汽车变频器中的应用

原创 汪宇轩 汪学森 SiC碳化硅MOS管及功率模块的应用 2025-06-22 22:01 广东

> 原文地址: [https://mp.weixin.qq.com/s/NYwErZfwnrE2npwB6gq7Bg](https://mp.weixin.qq.com/s/NYwErZfwnrE2npwB6gq7Bg)

文章来源：汽车维修与保养

作者：汪宇轩 汪学森（深圳市汪学慧新能源汽车维修技能大师工作室 ）

在2020年款的比亚迪“汉”“唐”纯电动汽车，以及蔚来ET7和特斯拉Model Y、Model 3等多款高端车上，SiC-MOSFET(碳化硅-场效应管)功率模块已在变频系统中使用。驱动系统变频器是电动汽车最重要的功率转换部件，过去使用最多的是由IGBT半导体器件构成的变频器，IGBT是由BJT双极型三极管和MOS绝缘栅型场效应管，共同组成的复合全控型电压驱动的功率器件，兼有高输入阻抗和低导通压降的优点。而SiC-MOSFET是比硅基IGBT半导体更优秀的功率器件，MOSFET是金属氧化物半导体场效应晶体管，也称绝缘栅场效应管。耐压更高、逆变电流更大，目前已有1200V/840A甚至超1000A的三相全桥SiC功率模块。在不增大原有模块封装尺寸的基础上，将功率大幅提升近30%，已在实际的电动汽车电机驱动变频器中，得到越来越规模化的应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWkouR9gUhepiaAwkCZlibgP5lYNI7frEfZSiaWJBJqkdcVhAiaia6NmwXoibqicQ6pJUwjkop0ZNmwfydw/640?wx_fmt=png&from=appmsg)

图1是SiC半导体器件构成的变频器原理图，图2为其三相桥功率模块的外形。与IGBT器件相同，其下方有大量散热柱，浸在流动的冷却液中，可带走变频器运转时在SiC器件上产生的热量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWkouR9gUhepiaAwkCZlibgP4yopVhQ4fIdloq4SrSUiaVSzooibibKywJpxkXaHhhO4EtlSUKM9XGySg/640?wx_fmt=png&from=appmsg)

图2中由3个单桥臂构成的三相变频器，通过逆变可将动力电池高压直流电转换成三相交流电，并可变化交流电的频率调节驱动电机的转速，直接改变车辆行驶的快慢，还可通过SiC-MOSFET改变电机的转矩。在制动时整流回收车辆动能，转化为电能对电池的充电，即有逆变、变频、变矩、整流等多个功能。

Si半导体IGBT器件，与SiC-MOSFET半导体器件实物，两者外形相近均有3只脚，IGBT器件分为发射极E、栅极G和集电极C，SiC-MOSFET器件则分为源极S、栅极G和漏极D，两者的图形符号也不相同(图3)，维修时应注意此差别。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWkouR9gUhepiaAwkCZlibgP3RbfibcRv70Zmkv21StLyvGv2icU6OCdsJ5G7ruMTIiahAPe0w759prpg/640?wx_fmt=png&from=appmsg)

SiC器件为何有如此优越的性能呢？这需了解SiC的本质特点，它属于一种“宽禁带”的半导体。物体要导电就需有自由电子或者空穴存在，被束缚的电子要成为自由电子，就必须吸收足够的能量，如热能或光能，才能从“价带”跃升到“导带”，这个能量的最小值就称“禁带”或“带隙”的宽度。所谓“导带”是自由电子能导电的能带，空穴能导电的能带则称“价带”。禁带宽度的大小实际上是电子被束缚强弱的一个物理量，禁带宽度为0的是能导电的金属；绝缘体的禁带宽度很大，一般大于4.5eV(电子伏特)；而半导体的禁带宽度则居中。禁带宽度的本质是能量，也用“焦耳(J)”来量度，通用单位则是“eV”，1eV= 1.602×10-19 J。

研究表明，禁带宽度是衡量半导体材料的一个重要特征参数，半导体的反向耐压、正向压降都和禁带宽度密切相关。当前使用最多的Si半导体禁带宽度为1.12 eV，而宽度大于2.2 eV的称为“宽禁带”半导体，如当前应用最多的SiC和GaN(氮化镓)半导体器件。图4较具体清楚地说明了SiC半导体器件和Si基半导体器件两者性能的区别。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWkouR9gUhepiaAwkCZlibgP1gPsYRI7o8TqKW1LMfOd30U9ugOCAfG8mu5CSE9lRSXjxkibCsibzib0g/640?wx_fmt=png&from=appmsg)

从图5可见，SiC半导体材料制成的功率器件，与Si基的IGBT相比，耐高压可达1200～1600V，能耐受200℃温度，散热性能更优越，具有更快的高频转换特性，即开关速度更快，可明显提高电机的转速。而且导通电阻较低，其开关损耗明显降低，电能转换效率高，功率密度更大，特别是体积可减小70%，工作寿命却可提升近5倍。目前SiC功率器件由平面型，开发向双沟槽栅极的结构转化，具有降低40%导通电阻的优点，能节省40%的开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWkouR9gUhepiaAwkCZlibgPt7YnTOJSNrmaoibTqHQr1Ria3jciclX2TTYG25YaicZamYAqkZM0RLdOdQ/640?wx_fmt=png&from=appmsg)

SiC器件在电动汽车和轨道交通的变频器，以及电源系统的运用中，能显著提升超过10%的续航里程，并可以增强车辆的加速性能。表1中具体列出了SiC器件和Si器件，关于耐压、高频转换率及温度等重要性能指标的比较。当前，SiC器件的命名方法和性能指标，仍由各制造厂家自行颁布，尚未统一。在维修中使用检测仪时，应注意SiC功率器件与Si基的IGBT器件在参数上的差别。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWkouR9gUhepiaAwkCZlibgPXg4U2zicZxykFzjSv2Gr0BcbCxGCsjuyl73jDAJkwKEr2z0Ls7YXzxA/640?wx_fmt=png&from=appmsg)

当前从制造成本考虑，Si-IGBT与SiC器件将会互补共存。随着电动汽车需增大续航里程、提升功率密度和速度，变频器对耐压、功率损耗、开关频率及可靠性均有更高的要求，必将大量优先采用SiC器件。业内专家估计，未来3~5年，电动汽车变频器将会加速使用SiC和 GaN等宽禁带的半导体功率器件。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbhtiaRmYHTp4bDWkMosreWEkStrP0Cg41Vm84LnHXyNzX5oT80mzweicA/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGboharT27juBiadHBOIA4TcgxwHsqNQeRHbBSFaTsnT8DZEsFVB7Mh71A/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGby1ADIqA7dRFfffghDzG9l5QkG9EE78A5k4JxgWOoSER53hFAhCOpNw/640?wx_fmt=png&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)