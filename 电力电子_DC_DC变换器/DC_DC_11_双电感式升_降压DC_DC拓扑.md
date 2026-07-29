# DC-DC-11：双电感式升-降压DC-DC拓扑


> 原文地址: [https://mp.weixin.qq.com/s/xlbLndmUUZTgaqSuIX1y5A](https://mp.weixin.qq.com/s/xlbLndmUUZTgaqSuIX1y5A)

![](DC_DC_11_双电感式升_降压DC_DC拓扑_images/img_000_6b46edcc92a7.png)

____**★★★**______DC-DC-11---升降压拓扑______**★★★**____

引言：升-降压DC-DC广泛应用于工业电脑，汽车启停系统，电池供电的LED驱动电源等等，在这些应用中，输入电压可以高于或低于期望的输出电压。基本反相反升压转换器的接地输出负电压（传送门：[DC-DC-4：反相型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485742&idx=1&sn=94ea64a8f55f4f6be224618f6aa21fd1&chksm=c33543b1f442caa71eafb088db723d80d463759cfb0ce5e9ec61a9704bd0eab4bce49c1d39f4&scene=21#wechat_redirect)），但SEPIC，ZETA转换器和双开关降压升压转换器（传送门：[DC-DC-5：升-降压型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485778&idx=1&sn=c5995ba8a241732924f59f0469dc9ed6&chksm=c33543cdf442cadbaac54dffddbdbeab6fe3af6f49e690d4ea224619866501fe345c41028195&scene=21#wechat_redirect)）具有正极或非反相输出。然而与基本的反相双升压转换器相比，所有三种非反相拓扑都有额外的功率组件，并且效率有所下降，反向降压\-升压转换器不能满足需要正向输出电压的应用的要求。SEPIC，ZETA，和双开关降压\-升压转换器是三种常见的非反向降压\-升压拓扑结构。

双开关型升压是降压和升压的结合体，由于只使用了一个电感，就放在之前的单电感系列中，感兴趣的可以回顾一下。本节主讲双电感式升降压，也叫双电感式非反向（正向）升降压拓扑（CUK除外）。  

____€1.__SEPIC__

SEPIC Converter，即Single ended primary inductor converter：单端一次侧电感式变换器。允许输出电压大于、小于或者等于输入电压的DC-DC变换器。输出电压由主控开关（三极管或MOS管）的占空比控制。这种电路最大的好处是输入输出同极性。尤其适合于电池供电的应用场合，允许电池电压高于或者小于所需要的输入电压。

![](DC_DC_11_双电感式升_降压DC_DC拓扑_images/img_001_2a1c538bb9ed.png)

**_图11-1：SEPIC_**  

______€2.__ZETA____

ZETA转换器，也称为反向SEPIC，它与SEPIC相类似但是不如SEPIC那么受欢迎，其原因在于这类转换器需要一个会增加电路复杂度的高侧驱动器。ZETA变换器可看做是Buck-Boost电路和Buck电路级联而成（传送门[DC-DC-1：DC-DC的原理以及构成](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485524&idx=1&sn=236d06b9479150e0aef493fb8833744e&chksm=c33542cbf442cbdde104ff64eb329816b302d5251071afd1880f26cf5dcfdc90acf9de8c3fa8&scene=21#wechat_redirect)）。。基本拓扑如下**_图11-2_**所示：

![](DC_DC_11_双电感式升_降压DC_DC拓扑_images/img_002_5325c26cfa64.png)

**_图11-2：ZETA_**

______€3.__CUK____  

Cuk变换器在输入和输出段均有电感，可以显著减小输入和输出电流的纹波，输出电压的极性和输入电压相反，输出电压既可以低于也可以高于输入电压。Cuk变换器可看做是Boost变换器和Buck变换器串联而成，合并了开关管。基本拓扑如**_图11-3_**所示：

![](DC_DC_11_双电感式升_降压DC_DC拓扑_images/img_003_434f7ddc4f7d.png)

**_图11-3：CUK_**

后面会分别讲解这三种拓扑的工作原理以及实际使用。