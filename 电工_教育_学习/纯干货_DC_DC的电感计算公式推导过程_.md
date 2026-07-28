# 纯干货！DC-DC的电感计算公式推导过程！

原创 二火 硬件笔记本 2022-06-20 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/JtoxsauFbhQLQQy-zak1FA](https://mp.weixin.qq.com/s/JtoxsauFbhQLQQy-zak1FA)

# ▼关注下方公众号了解更多▼

  

![](https://mmbiz.qpic.cn/mmbiz_png/eKGaTkPpfo57NwQjkLlSpicngB2Odvgrbe989YVE0IGiaMiah3cuCicy51h8eWFgXMtKibFVPsF0u36QpGLhw1BLzrg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

一道笔试题

  

  

  

       照例，先抛出一道题“**DC-DC的电感感值如何计算？**”。这道题，在面试中不好具体去问，光靠口述确实有些抽象。但在笔试题中，与此相关的或者衍生的问题，则颇受考官喜爱，因为它可以真实体现答题者的硬件基本功。为什么这么讲，因为它涉及多个重要知识点和公式。

       预警：本文涉及诸多公式的推导，可能会比较乏味，但绝对纯干货！

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

一个重要公式

  

  

  

       在计算DC-DC所需电感之前，首先介绍一个电感相关的公式。毫不夸张地讲，这是电感最最重要的公式，没有之一。

 **V=L\*dI/dt**  

       这个公式之所以重要，因为它体现了电感的诸多特性，比如：  

（1）电感上的电流不能突变；

（2）电感上储存的能量不能突变；  

（3）电感上的电流变化率可以突变；  

（2）电感上电压与电流变化率的关系；  

     如果把一个电感电流变化曲线的时间轴抽象划分为n多个Δt，对应的电流变化量为ΔI，那么该公式可以变为：

V=L\*ΔI/Δt

那么：V\*Δt\=L\*ΔI

       请记住上面的变换，尤其是公式里的**V\*Δt**！再继续介绍下一个重要定律。

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

一个重要定律

  

  

  

      **伏秒定律**：（在开关电源中）导通阶段的电感电压与其导通时间的乘积必然等于关断阶段的电感电压与其关断时间的乘积。  

即：**Von\*ton=Voff\*toff**  

    这里的Von\*ton、Voff\*toff就是伏秒积。  

    由此可得，

Von\*ton=L\*Ion  

Voff\*toff=L\*Ioff  

PS：

（1）Ion为导通时间ton期间电感电流的变化量ΔI，Ioff为关断时间toff器件电感电流的变化量ΔI。  

（2）ton=D\*T=D/fsw（前提：DC-DC处于连续导通模式）。D为占空比，T为DC-DC的开关变换周期，fsw为变换频率。

（3）toff=(1-D)\*T=(1-D)/fsw（前提：DC-DC处于连续导通模式）。  

     因此，公式变为：  

**Von\*ton=Von\*D/fsw=L\*Ion**

**Voff\*toff=Voff\*(1-D)/fsw=L\*Ioff**

     是不是有点感觉了？继续往下看。

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

一个关键参数

  

  

  

     **电流纹波率**，通常用**r**表示，指的是电感的交流纹波与电感的直流分量Idc的比值。  

即：**r=ΔI/Idc**

     电流纹波率是DC-DC设计的关键参数，它将电流的直流分量Idc、交流分量Iac、电流纹波ΔI、峰值电流Ip这些值**联系**起来。

     以Buck电路为例，  

（1）负载电流(平均电流)Io=Idc；

（2）电流纹波ΔI与交流分量的关系：ΔI\=2\*Iac=r\*Idc；

（3）峰值电流Ip与Iac、Idc的关系：Ip=Iac+Idc=Idc(1+r/2);

     在实际工程设计中，**r值通常取值0.3~0.5之间。**请记住这个经验值！  

![](https://mmbiz.qpic.cn/mmbiz_jpg/eKGaTkPpfo57NwQjkLlSpicngB2Odvgrbn13wHt3uupQnMXa3ic2BTyGUTYzWOwMsesa04iaen2uxhGJhG6XKzFjA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

Buck电路两种回路

  

  

  

     Buck电路，在ton期间Mos管导通，电流回路如下图所示，Von=Vin-Vout。

![](https://mmbiz.qpic.cn/mmbiz_png/eKGaTkPpfo57NwQjkLlSpicngB2Odvgrb4trdNtnj73NjnXENVB5SkcQkgsnIJO5RlI2EVhWYP6R5WJyLJElRkg/640?wx_fmt=png)

Von\*ton=Von\*D/fsw\=L\*Ion

\=L\*ΔI=L\*r\*Idc=L\*r\*Io

那么，L=Von\*D/fsw\*r\*Io

所以，****L=(Vin-Vout)\*D/fsw\*r\*Io****  

      Buck电路，在toff期间Mos管关断，电流回路如下图所示，Voff=Vout。

![](https://mmbiz.qpic.cn/mmbiz_png/eKGaTkPpfo57NwQjkLlSpicngB2OdvgrbwtbUt1ibVyibZJbqiaicciaLmfcTGCQZ0icOlRokb7ibbPO57ctzKVFYMWsIw/640?wx_fmt=png)

Voff\*toff\=Voff\*(1-D)/fsw=L\*Ioff

\=L\*ΔI=L\*r\*Idc=L\*r\*Io

那么，L=Voff\*(1-D)/fsw\*r\*Io  

所以，**L=Vout\*(1-D)/fsw\*r\*Io**

     是不是还有些凌乱，怎么还两种公式，不统一？别急，继续往下看。    

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

一个传递函数

  

  

  

      表面上看，ton和toff期间两个L计算公式不一样，实际是一样的。因为对于Buck电路而言，直流传递函数为：

**D=Vout/Vin**

注意：Boost和Buck-Boost电路的传递函数不是这样的哈！

      基于这个传递函数，可得：

(Vin-Vout)\*D=Vout\*(1-D)  

所以，不论ton，还是toff期间，都有：

![](https://mmbiz.qpic.cn/mmbiz_jpg/eKGaTkPpfo57NwQjkLlSpicngB2Odvgrb0CibGGL9hE8wGFh58l8TVSIY1kXiaN1sPiaaUS58d5z8JBcGJOE4udM0A/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

总结

  

  

  

       总结下，为了推导DC-DC的电感计算公式，我们先后介绍了：  

（1）重要公式：**V=L\*dI/dt**，及衍生公式：V\*Δt\=L\*ΔI；

（2）重要定律：**Von\*ton=Voff\*toff**

（3）关键参数：**r=ΔI/Idc**

（4）两种回路：ton时，Von=Vin-Vout；toff时，Voff=Vout；(Buck电路)

（5）传递函数：**D=Vout/Vin**(Buck电路)；

       Buck电路的电感计算公式为：(r通常取0.3~0.5之间)

![](https://mmbiz.qpic.cn/mmbiz_jpg/eKGaTkPpfo57NwQjkLlSpicngB2Odvgrb0CibGGL9hE8wGFh58l8TVSIY1kXiaN1sPiaaUS58d5z8JBcGJOE4udM0A/640?wx_fmt=jpeg)

       以上都是电源设计中的纯干货。这里还要重点说明下，本文中的举证推导内容都是以DC-DC的Buck电路为例，特别是(4)和(5)，都是有明确前提的。对比Boost或Buck-Boost电路，仅适用于(1)(2)(3)。

  

       放个手写推导版，这样看着比较直观。

![](https://mmbiz.qpic.cn/mmbiz_png/eKGaTkPpfo5AUU2dhwWwXSW9FqXbY2jl44S5KzufLR7ENROU7sqAGGHibgOmbWunt0FXiaq1VWaiaicYgxBTTXsTEA/640?wx_fmt=png)

  

**后台回复“**加群**”，管理员拉你入技术交流群。**