# 聊聊电源产生的EMI

原创 硬件笔记本 2023-03-16 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/pxW5ULi38AV4YYuwCRuHYA](https://mp.weixin.qq.com/s/pxW5ULi38AV4YYuwCRuHYA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

本文概述了在复杂的电子系统中电源带来的严重问题：即EMI，通常简称为噪声。本文介绍减少EMI的策略，提出了一种解决方案，能够减少EMI、保持效率，并将电源放入有限的解决方案空间中。

  

1

什么是EMI？

电磁干扰是会干扰系统性能的电磁信号。这种干扰通过电磁感应、静电耦合或传导来影响电路。它对汽车、医疗以及测试与测量设备制造商来说，是一项关键设计挑战。许多限制和不断提高的电源性能要求（功率密度增加、开关频率更高以及电流更大）只会扩大EMI的影响，因此亟需解决方案来减少EMI。许多行业都要求必须满足EMI标准，如果在设计初期不加以考虑，则会严重影响产品的上市时间。

  

2

EMI耦合类型

EMI是电子系统中的干扰源与接收器（即电子系统中的一些元件）耦合时所产生的问题。EMI按其耦合介质可归类为：传导或辐射。

**传导EMI（低频，450 kHz至30 MHz）**

传导EMI通过寄生阻抗以及电源和接地连接以传导方式耦合到元件。噪声通过传导传输到另一个器件或电路。传导EMI可以进一步分为共模噪声和差模噪声。

共模噪声通过寄生电容和高dV/dt （C × dV/dt）进行传导。它通过寄生电容沿着任意信号（正或负）到GND的路径传输，如图1所示。

DifferenTIal-mode noise is conducted via parasiTIc inductance （magneTIc coupling） and a high di/dt （L × di/dt）。

差模噪声通过寄生电感（磁耦合）和高di/dt （L × di/dt）进行传导。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfrB1QXOpLfOvXbIN4ibeCxDFek6GOJVb2c0jlabUz8FR7pEF37A6yYSg/640?wx_fmt=jpeg)

图1.差模和共模噪声。

  

**辐射EMI（高频，30 MHz 至1 GHz）**

辐射EMI是通过磁场能量以无线方式传输到待测器件的噪声。在开关电源中，该噪声是高di/dt与寄生电感耦合的结果。辐射噪声会影响邻近的器件。

  

3

EMI控制技术

解决电源中EMI相关问题的典型方法是什么？首先，确定EMI就是一个问题。这看似很显而易见，但是确定其具体情况可能非常耗时，因为它需要使用EMI测试室（并非随处都有），以便对电源产生的电磁能量进行量化，并确定该电磁能量是否符合系统的EMI标准要求。

假设经过测试，电源会带来EMI问题，那么设计人员将面临通过多种传统的校正策略来减少EMI的过程，其中包括：

-   在尽可能小的电路板空间中实现高效率。
    

-   良好的热性能。
    

-   布局优化：精心的电源布局与选择合适的电源组件同样重要。成功的布局很大程度上取决于电源设计人员的经验水平。布局优化本质上是个迭代过程，经验丰富的电源设计人员有助于最大限度地减少迭代次数，从而避免耽误时间和产生额外的设计成本。问题是：内部人员往往不具备这些经验。
    

-   缓冲器：一些设计人员会提前规划并为简单的缓冲器电路（从开关节点到GND的简单RC滤波器）提供占位面积。这样可以抑制开关节点的振铃现象（一项产生EMI的因素），但是这种技术会导致损耗增加，从而对效率产生负面影响。
    

-   降低边沿速率：减少开关节点的振铃也可以通过降低栅极导通的压摆率来实现。不幸的是，与缓冲器类似，这会对整个系统的效率产生负面影响。
    

-   展频（SSFM）：许多ADI公司的Power by Linear™开关稳压器都提供该特性，它有助于产品设计通过严格的EMI测试标准。采用SSFM技术，在已知范围内（例如，编程频率fSW上下±10%的变化范围）对驱动开关频率的时钟进行调制。这有助于将峰值噪声能量分配到更宽的频率范围内。
    

-   滤波器和屏蔽：滤波器和屏蔽总是会占用大量的成本和空间。它们也使生产复杂化。
    

以上所有制约措施都可以减少噪声，但是它们也都存在缺陷。最大限度地减少电源设计中的噪声通常能够彻底解决问题，但却很难实现。ADI公司的Silent Switcher®和Silent Switcher 2稳压器在稳压器端实现了低噪声，从而无需额外的滤波、屏蔽或大量布局迭代。由于不必采用昂贵的反制措施，加快了产品上市时间并节省大量的成本。

  

**最大限度地减小电流回路**

为了减少EMI，必须确定电源电路中的热回路（高di/dt回路）并减少其影响。热回路如图2所示。在标准降压转换器的一个周期内，当M1关闭而M2打开时，交流电流沿着蓝色回路流动。在M1打开而M2关闭的关闭周期中，电流沿着绿色回路流动。产生最高EMI的回路并非完全直观可见，它既不是蓝色回路也不是绿色回路，而是传导全开关交流电流（从零切换到IPEAK，然后再切换回零）的紫色回路。该回路称为热回路，因为它的交流和EMI能量最大。

导致电磁噪声和开关振铃的是开关稳压器热回路中的高di/dt和寄生电感。要减少EMI并改进功能，需要尽量减少紫色回路的辐射效应。热回路的电磁辐射骚扰随其面积的增加而增加，因此，如果可能的话，将热回路的PC面积减小到零，并使用零阻抗理想电容可以解决该问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfIRKMc27rofr2M4OwpUKw9m70f5yxVHsyY7cyHUuRqW5vS4E4pOEXlw/640?wx_fmt=jpeg)

图2.降压转换器的热回路。

  

**使用Silent Switcher稳压器实现低噪声磁场抵消**

虽然不可能完全消除热回路区域，但是我们可以将热回路分成极性相反的两个回路。这可以有效地形成局部磁场，这些磁场在距IC任意位置都可以有效地相互抵消。这就是Silent Switcher稳压器背后的概念。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfuicaYWq9xA0NlzoRfcoOBpic5NW6ubHUmFbkGaCCX7U5g9tLgLKXNwoQ/640?wx_fmt=jpeg)

图3.Silent Switcher稳压器中的磁场抵消。

  

**倒装芯片取代键合线**

改善EMI的另一种方法是缩短热回路中的导线。这可以通过放弃将芯片连接至封装引脚的传统键合线方法来实现。在封装中倒装硅芯片，并添加铜柱。通过缩短内部FET到封装引脚和输入电容的距离，可以进一步缩小热回路的范围。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfv2GWdM804Vc45KuV1v1ZcUBDhjI2kmny5VK5Zeq0xb1xDHnN2sNeog/640?wx_fmt=jpeg)

图4.LT8610键合线的拆解示意图。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvf6K6gibeTsZ5JvfxCHyfPBZJIBuSND7bSjpSVKogjX70iconibGpy7ic8Mw/640?wx_fmt=jpeg)

图5.带有铜柱的倒装芯片。

  

Silent Switcher与Silent Switcher 2

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfrzXia0LiaibXZFAOaLCo9v7TATnNaFiciaxBZVbhzTEoeFt1juYyTwVaMdg/640?wx_fmt=jpeg)

图6.典型的Silent Switcher应用原理图及其在PCB上的外观。

  

图6显示了使用Silent Switcher稳压器的一个典型应用，可通过两个输入电压引脚上的对称输入电容来识别。布局在该方案中非常重要，因为Silent Switcher技术要求尽可能将这些输入电容对称布置，以便发挥场相互抵消的优势。否则，将丧失Silent Switcher技术的优势。当然，问题是如何确保在设计及整个生产过程中的正确布局。答案就是Silent Switcher 2稳压器。

  

**Silent Switcher 2**

Silent Switcher 2稳压器能够进一步减少EMI。通过将电容（VIN电容、INTVCC和升压电容）集成到LQFN封装中，消除了EMI性能对PCB布局的敏感性，从而可以放置到尽可能靠近引脚的位置。所有热回路和接地层都在内部，从而将EMI降至最低，并使解决方案的总占板面积更小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfiacSUMiab2CGdnS8Q8JYzUqvOBbqbPHeWEICjPF0p4LyQX176K5c5t6w/640?wx_fmt=jpeg)

图7.Silent Switcher应用与Silent Switcher 2应用框图。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfHiaq5PsKpa6DkkYUHQiczlyTeGicibhicZ4tYy4PVIbRRVjezdGIBNNhSgA/640?wx_fmt=jpeg)

图8.去封的LT8640S Silent Switcher 2稳压器。

  

Silent Switcher 2技术还可以改善热性能。LQFN倒装芯片封装上的多个大尺寸接地裸露焊盘有助于封装通过PCB散热。消除高电阻键合线还可以提高转换效率。在进行EMI性能测试时，LT8640S 能满足CISPR 25 Class 5峰值限制要求，并且具有较大的裕量。

  

**µModule Silent Switcher稳压器**

借助开发Silent Switcher产品组合所获得的知识和经验，并配合使用现有的广泛µModule®产品组合，使我们提供的电源产品易于设计，同时满足电源的某些重要指标要求，包括热性能、可靠性、精度、效率和良好的EMI性能。

图9所示的LTM8053集成了可实现磁场抵消的两个输入电容以及电源所需的其他一些无源组件。所有这些都通过一个 6.25 mm × 9 mm × 3.32 mm BGA封装实现，让客户可以专心完成电路板的其他部分设计。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfsvu0L5DFKenkibMdIlqEpASAotPxom5HLLj0PlNzIPWDicFlGmCH8ibFg/640?wx_fmt=jpeg)

图9.LTM8053 Silent Switcher裸露芯片及EMI结果。

  

**无需LDO稳压器——电源案例研究**

典型的高速ADC需要许多电压轨，其中一些电压轨噪声必须非常低才能实现ADC数据表中的最高性能。为了在高效率、小尺寸板空间和低噪声之间达成平衡，普遍接受的解决方案是将开关电源与LDO后置稳压器结合使用，如图10所示。开关稳压器能够以更高效率实现更高的降压比，但噪声相对也较大。低噪声LDO后置稳压器效率相对较低，但它可以抑制开关稳压器产生的大部分传导噪声。尽可能减小LDO后置稳压器的降压比有助于提高效率。这种组合能产生干净的电源，从而使ADC以最高性能运行。但问题在于多个稳压器会使布局更复杂，并且LDO后置稳压器在较高负载下可能会产生散热问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfm5tJhmVnYVGNASP6W3HzbN3k6u74q7VuW1FXmRGKe1veNQMenR1x3Q/640?wx_fmt=jpeg)

图10.为 AD9625 ADC供电的典型电源设计。

  

图10所示的设计显然需要进行一些权衡取舍。在这种情况下，低噪声是优先考虑事项，因此效率和电路板空间必须做些让步。但也许不必如此。最新一代的Silent Switcher µModule器件将低噪声开关稳压器设计与µModule封装相结合，能够同时实现易设计、高效率、小尺寸和低噪声的目标。这些稳压器不仅尽可能减少了电路板占用空间，而且实现了可扩展性，可使用一个µModule稳压器为多个电压轨供电，进一步节省了空间和时间。图11显示了使用LTM8065 Silent Switcher µModule稳压器为ADC供电的电源树替代方案。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhbo9kGZeOBUBtsu1AJWvvfalX3M7VIfgUrpGWWLvIws6v53o3TybibG00PwXKub9e3qQLUNuqpvPA/640?wx_fmt=jpeg)

图11.使用Silent Switcher µModule稳压器为AD9625供电，可节省空间的解决方案。

  

这些设计都已经过相互测试比较。ADI公司最近发表的一篇文章对使用图10和图11所示电源设计的ADC性能进行了测试和比较1。测试包括以下三种配置：

-   使用开关稳压器和LDO稳压器为ADC供电的标准配置。
    

-   使用LTM8065直接为ADC供电，不进行进一步的滤波。
    

-   使用LTM8065和额外的输出LC滤波器，进一步净化输出。
    

测得的SFDR和SNRFS结果表明，LTM8065可用于直接为ADC供电，并不会影响ADC的性能。

这个实施方案的核心优势是大大减少了元件数量，从而提高了效率，简化了生产并减少了电路板占位空间。

  

**小结**

总之，随着更多系统级设计需要满足更加严格的规范，尽可能充分利用模块化电源设计变得至关重要，尤其在电源设计专业经验有限的情况下。由于许多细分市场要求系统设计必须符合最新的EMI规范要求，因此将Silent Switcher技术运用于小尺寸设计，同时借助µModule稳压器简单易用的特性，可以大大缩短产品上市时间，同时还可以节省电路板空间。

  

Silent Switcher µModule稳压器的优势

-   节省PCB布局设计时间（无需重新设计电路板即可解决噪声问题）。
    

-   无需额外的EMI滤波器（节省元件和电路板空间成本）。
    

-   降低了内部电源专家进行电源噪声调试的需求。
    

-   在宽工作频率范围内提供高效率。
    

-   为噪声敏感型器件供电时，无需使用LDO后置稳压器。
    

-   缩短设计周期。
    

-   在尽可能小的电路板空间中实现高效率。
    

-   良好的热性能。
    

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。