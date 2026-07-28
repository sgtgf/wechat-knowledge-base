# 并联SiC功率模块性能最大化的灵敏度分析


> 原文地址: [https://mp.weixin.qq.com/s/EVz0WZbwxB0ISPxOAExrhw](https://mp.weixin.qq.com/s/EVz0WZbwxB0ISPxOAExrhw)

文章来源：APEC2024(ST)

作者：Antonia Lanzafame Vittorio Giuffrida

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicbPfsia3QNpFuYbDJFnXExk77nkgicNB0zTyck4IFGZW9o9A5GeibjHLkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopic37tNj8bCwxm5y4Rr65jOIgZx0D3mWdicoqkQDUqhAzAaUOnED0FPeGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicx1RAqtdrkXibZcpzl6fgmMF7xkVPWVKQeusNhic8Jfs23WLibbef4RAnw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicrGBnngs8wO8CXL3sKQHDBUwcTOPsUOeuw4WE7lqLC9FSANdwGFAdkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopic8YrXm6PYdM43mbuKlyGReXiaOXMTKODia5FibKQ68pMAzSEo4T0el5XCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopic5zjF99cL70qiadkmCbrhtaVpgrnh2F3rd8mv1OjWVxGDjoowmbZVBWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopic1pb6rl47yKL9jbBzseibUhC3DZjOjhcnrwYtMjpeatLfD7M9p5QQZdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopiccOwdutFaGO915ytOoSp73fKPdicM2NT24msmAoAl89XiceyqKsMVreeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicNGtdXoJicuiaGoKWIN0Pe7RyMPqicZF8Ae8qWrx1icXcAgCLtQINjqbGJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicvq55D9nE3fQibEynNxEgSP9iaxT9eMwqZhAfVxUkwqmO6T7Ic271VTMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicfA87bxrNWPlCp8nMOibFUHMlY4tH5ia67tY3NE8wpgdoR1WUdOQE2B6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopic0NFKWfq5A3U5271Cu2OEnRzLHKhrqaLEiaRRMgnT1jUfrcqIia95XqFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicJ07pjKYwibBGc3aeCSKkhy5X9fouX4hEeibsIksPFVANCPRwJexdwXow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicYWZl9VkDTHWzzT3dA9ibHrAulic1hOZUXibHhbytdbKr0KGm0ic4E3jfwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicQNtZPPTWZUGAxYCysXhsA1fVtib0KeOh5hqabD2gf6TWWL2jRBL7klg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopic2rjyA0VnqYft9iaYbyPC0GxAzYlVYHRIP5VrbW9mDeSzcWIP65eFpoA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicwqynZZpZgLZib6ySGIsOMlUgBzXNibn1s0mHCJdKgNKIaia84hooQn2tw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnia7vMibwOicK2Oo5RVveAopicmr2PQZ1RP36INukjvnPnZicWL7BYNBuOr2zomgKibictuYmXuNxL1xqFw/640?wx_fmt=png&from=appmsg)

注：图片报告与文字无关

碳化硅（SiC）功率模块的并联应用是提升系统功率等级的关键技术。由于其开关速度快、工作频率高的特性，并联设计比传统的硅基IGBT更为苛刻。以下是详细的技术要求及注意事项。

### **一、 并联的核心目标：均流**

并联成功与否的关键在于实现动态（开关过程中）和静态（导通时）的电流在各模块间均匀分配。任何不均流都会导致部分模块过载，结温升高，可靠性下降，甚至烧毁。

### **二、 关键技术要求**

#### **1\. 器件选型与匹配**

**导通电阻匹配**：选择来自同一生产批次、`Rds(on)` 值尽可能接近的模块。通常要求 `ΔRds(on) / Rds(on)_avg` 控制在 **±10%** 以内，越接近越好。

  

**阈值电压匹配**：`Vth` 的差异会直接影响开通延迟，从而影响动态均流。应选择 `Vth` 匹配度高的器件。

  

**跨导匹配**：`gfs` 的匹配性会影响大电流下的静态均流，也应予以考虑。

  

**热阻匹配**：确保各模块的散热条件一致，否则温度差异会通过 `Rds(on)` 的正温度系数反馈加剧不均流。

#### **2\. 布局对称性（至关重要）**

这是实现均流最物理、最有效的手段。

**主功率回路对称**：

**路径长度相等**：从直流母线电容到各模块，以及从各模块到输出端的所有**功率环路**（包括正负母线和交流输出）的**寄生电感**必须严格相等。

  

**回路面积最小化**：不仅是为了减小总体寄生电感以抑制电压过冲和振荡，也是为了减小不对称的可能性。

  

**采用“星形”或“板状”连接**：

直流母线：使用独立的、等长的铜排分别连接到每个模块的直流端子，而不是简单地让模块并排在一根铜排上。

交流输出：同样使用等长的铜排或电缆连接到汇流点。

  

栅极驱动回路对称：

每个模块的栅极驱动回路必须是独立且对称的。驱动板的布局应使驱动信号到达各栅极的路径长度和寄生电感一致。

#### **3\. 栅极驱动设计**

**独立驱动**：为每个并联的模块提供**独立的、隔离的**栅极驱动电路。这可以防止模块间的相互干扰。

**驱动参数严格一致**：

**开通/关断电阻**：使用精度为 **±1%** 或更高的电阻，确保各模块的开关速度一致。动态不均流主要由开关速度差异引起。

  

**栅极驱动电压**：确保所有驱动器的 `Vgs(on)` 和 `Vgs(off)` 完全一致，任何微小差异都会显著影响开关行为。

**驱动回路布局**：

**源极电感最小化**：驱动回路的路径（从驱动芯片输出→栅极电阻→模块栅极→模块源极→回到驱动地）必须**极短且环路面积最小**。任何共用的源极路径都会引入寄生电感，导致严重的栅极振荡和误触发。

  

**使用开尔文连接源极**：如果模块支持，务必使用开尔文源极（辅助源极）引脚作为驱动信号的返回路径。这能将功率回路中大电流变化产生的感应电压与敏感的栅极驱动回路隔离开，是保证稳定驱动的关键。

#### **4\. 热设计与系统平衡**

**均温设计**：使用同一个散热器，并确保所有模块与散热器之间的接触热阻和安装压力一致。

**冷却液流道对称**：对于水冷散热器，冷却液的流道设计应使流经每个模块下方的流速和温度均匀。

**温度监测**：在每个模块上安装温度传感器（如NTC），实时监控各模块的结温，以便在出现不均流时进行保护。

### **三、 主要注意事项**

**正温度系数的利用与挑战**：

SiC MOSFET的 `Rds(on)` 具有正温度系数，这是一个有利特性。当某个模块因不均流而温度升高时，其 `Rds(on)` 会增加，从而使其分配的电流减小，形成负反馈，有利于**静态均流**。

  

**但要注意**：这并不能解决**动态不均流**问题。动态过程发生在微秒级，热量还来不及积累。因此，不能依赖温度系数来弥补驱动和布局的不对称。

**寄生参数引发的振荡**：

不对称的布局和回路寄生电感会与模块的寄生电容（如 `Coss`）形成谐振电路，在开关瞬间引起严重的电压和电流振荡。

  

这些振荡不仅带来EMI问题，还可能超过器件的安全工作区，或导致栅极误触发。

  

**电流传感与保护**：

建议为**每个并联支路**设置独立的电流传感器（如罗氏线圈或分流器），以便精确监测每个模块的电流，实现更精准的保护和控制。

  

如果只监测总电流，当某个模块因失效而短路时，总电流可能仍在安全范围内，无法及时保护，导致故障扩大。

  

**驱动信号的同步性**：

确保所有驱动信号的**上升/下降沿**精确对齐。驱动芯片本身的传播延迟差异应尽可能小。

  

**EMI/EMC考虑**：

并联本身会增大 `di/dt` 和 `dv/dt`，同时不对称布局会形成环路天线，导致更严重的电磁干扰。必须从布局伊始就考虑EMC设计，如使用叠层母排、增加吸收电路等。

### **四、 总结与检查清单**

为了成功并联SiC功率模块，请遵循以下检查清单：

类别

检查项

目标

**器件**

`Rds(on)`

 和 `Vth` 是否匹配？

从源头减小固有差异

**布局**

主功率回路（DC+， DC-， AC）是否完全对称且等长？

实现静态和动态均流

**布局**

是否使用了开尔文连接源极？

隔离功率回路对驱动的干扰

**驱动**

是否为每个模块提供了独立的、隔离的驱动电路？

防止相互干扰

**驱动**

各路的栅极电阻值是否精确一致？

控制开关速度一致

**驱动**

各路的驱动电压 `Vgs` 是否精确一致？

控制开关阈值一致

**驱动**

栅极驱动回路是否极短且对称？

最小化源极寄生电感

**热管理**

所有模块是否安装在同一个散热器上，接触热阻是否一致？

实现均温，利用正温度系数

**系统**

是否有独立的支路电流监测？

实现精准保护和均流评估

**系统**

是否有独立的模块温度监测？

实时监控热平衡

**核心思想**：对于高速的SiC器件，**“对称性”是并联设计的灵魂**。必须通过精心的物理布局和一致的驱动参数，将寄生参数的影响降到最低，才能充分发挥SiC并联的优势，构建高效、高功率密度且可靠的功率系统。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7aJ1MUTicI0GuiauhfoebWumUgU1Qu9ic5Xniaicbkyl3gyFlO0cbmDfmBLiaQ/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7a8crJ2L7M4OX17Szb34FK5JlibMciajPSibAJ2KVAIic8moa4vRiacc5rbCw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluzK6LANKo7Y05Y2MLOW7a48flZW0nqjIpO5FVkvY9NUDp0sHzB0BgvVskic0uVzn30TaNKvXUsVw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)