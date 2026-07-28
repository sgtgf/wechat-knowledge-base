# 一种双向隔离三电平DC-DC变换器电流有效值最小控制方法

原创 罗 登，舒泽亮 SiC碳化硅MOS管及功率模块的应用 2025-05-24 07:52 广东

> 原文地址: [https://mp.weixin.qq.com/s/xvzTVDoFCd8wImtAUnpQ5Q](https://mp.weixin.qq.com/s/xvzTVDoFCd8wImtAUnpQ5Q)

文章来源：电力自动化设备

作者：罗 登，舒泽亮，林宏健，况祖杭（西南交通大学 电气工程学院，四川 成都 ６１００３１）

摘要：针对双向隔离 ＤＣ⁃ＤＣ 变换器在传统“两电平 Ｈ 桥结构＋移相控制”模式下进行功率传输所导致的开关器件承受电压应力大、变换器传输效率低等问题，提出一种“双边三电平半桥结构＋电流有效值最小控制策略”方案。 该方案将 Ｈ 桥结构替换为三电平半桥结构并在传统移相控制的基础上增加对变压器漏感电流有效值的控制，降低了变换器损耗和开关器件承受的电压应力并提高了变换器的传输效率。 根据隔离变压器漏感电流有效值表达式与零电压开关条件，对电感电流有效值最小控制方法的控制曲线进行了详细推导，并根据该控制曲线设计了基于可编程逻辑器件的控制核心。 采用新型SiC MOSFET开关器件搭建了物理实验平台。 实验结果表明在所提方案的作用下开关器件所承受的电压应力、变换器损耗和变换器传输效率都得到了较大的改善，验证了理论分析的正确性和所提方案的可行性。

关键词：ＤＣ⁃ＤＣ 变换器；漏感电流有效值最小控制；三电平半桥结构；移相控制；变压器漏感电流；传输效率

０. 引言

双向隔离 ＤＣ⁃ＤＣ 变换器具有能量双向流动、功率密度高和电气隔离的优点，随着高速铁路、智能电网和电动汽车等行业的快速发展，其在中大功率场合的应用越来越广泛。

双向隔离 ＤＣ⁃ＤＣ 变换器的主要控制方法有 ２种：直流电压逆变控制和移相控制。 直流电压逆变控制方式下，变换器的升压或降压主要通过变压器实现，这限制了变换器的调压范围；移相控制方式下，变换器容易实现软开关，且动态响应速度快。但是传统移相控制方法存在空载（或轻载） 时变压器漏感中电流有效值较大、功率器件和变压器损耗较大、变换器的传输效率低等问题。 为了降低变换器损耗，文献［１５］ 提出了谐振技术方案，这种方案能取得一定效果，但同时也带来新的问题，如变换器成本增加、体积增大、新增器件损耗等；文献［１６］通过设计隔离变压器的漏感参数来扩大软开关范围，从而提升传输效率，这种方案增加了隔离变压器的设计难度，且没有解决降低变换器传输效率的根本问题；文献［１７］从功率回流的角度分析了双向全桥ＤＣ⁃ＤＣ 变换器中的功率回流问题，通过减小回流功率来降低变换器损耗；文献［１８］根据变换器输入电压与输出电压幅值匹配提出了一种 ＰＷＭ 加移相控制方式，但是该控制方式仅对该文所提的特定电路结构有效。 上述 ２ 种普遍采用的控制策略都是基于两电平 Ｈ 桥结构来间接控制变压器漏感电流有效值进而降低开关器件与变压器损耗，虽达到相应效果，但没有直接精确控制变压器漏感电流有效值，而且该结构不适用于电压较高的应用场合。

本文提出直接控制 ＤＣ⁃ＤＣ 变换器中变压器漏感电流有效值最小的策略来解决传统移相控制方式下变换器传输效率低的问题。 以双向隔离双边三电平半桥 ＤＣ⁃ＤＣ 变换器为对象，建立变压器漏感电流有效值表达式，推导出变换器高压侧占空比与移相角及相关控制量的数学关系，根据该数学关系控制变换器高压侧占空比以实现变压器漏感电流有效值最小，提高变换器传输效率。 实验结果证明了所提控制策略的可行性与正确性。

１.电路拓扑及移相控制

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa9Ubicoc6d1fmMBIxbdxR9EXKROMkldze2DnDK3510meFBNicmstLEMFw/640?wx_fmt=png&from=appmsg)

双向隔离三电平 ＤＣ⁃ＤＣ 变换器的一种拓扑是如图 １（ａ）所示的双边半桥三电平结构，变压器原、副边均采用三电平半桥结构，这种结构能够使开关器件的耐压等级提高一倍。 在移相控制方式下，ＤＣ⁃ＤＣ 变换器的驱动信号波形和电压、电流波形如图 １（ｂ）所示。 图中，Ｖ１ 、Ｖ２ 分别为变换器的输入与输出电压；Ｃ１ 、Ｃ２ 与 Ｃ３ 、Ｃ４ 分别为变换器输入与输出端的上、下支撑电容；ＭＦＴ 表示中频隔离变压器；ｖａｂ为变压器高压侧桥臂端口电压；ｖｃｄ为变压器低压侧桥臂端口电压；Ｌ 为变压器漏感；ｉＬ为流过变压器高压侧的电流；Ｓｉｊ为开关管 Ｓｉｊ的驱动信号；Ｔｓ 为开关周期。 如图 １（ ｂ）所示，ｖａｂ与 ｖｃｄ均为 ５０％占空比的方波电压，并且 ｖａｂ与 ｖｃｄ存在相位差 φ，该相位差称为移相角，通过控制移相角 φ 的正负和大小实现对变换器功率流动的方向和大小的控制。  

２. 电流有效值最小控制

移相控制方式下，变换器在轻载时不能满足ＺＶＳ 条件。 在移相控制的基础上，控制高压侧与低压侧移相角的同时控制高压侧占空比，建立高压侧占空比和移相角与变压器漏感电流有效值的数学关系，推导出电流有效值最小时高压侧占空比与移相角的数学关系，因此可以根据移相角计算出高压侧占空比，从而实现对变压器漏感电流有效值的控制。

２．１ 工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaN0NxcZiahyuFjibMUuBZvbLiaNksIv3e0KKRTiaf4KCSpC79I33DkphYaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaMibKbXA2iapBN9zmnIKbrRBeU3sygNlt6ZTgcAicPHQkeHS8SEb7vPSeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaaMJLMdccJa7Ch0q2OibhR1cfTaB0vZo23385bvN5xhuib951lK0JJ6Tg/640?wx_fmt=png&from=appmsg)

图 ２ 给出了电流有效值最小控制方法的工作原理。 为便于分析，将移相角归一化表示，记为移相比Ｄφ（Ｄφ＝ φ／ π），ｖａｂ是占空比为 Ｄ１ 的三电平电压，ｖｃｄ是占空比为 ５０％的方波电压；通过控制 ｖａｂ与 ｖｃｄ之间移相比 Ｄφ 的大小来控制传输功率的大小，根据移相比 Ｄφ 计算出高压侧占空比 Ｄ１ ，从而控制变压器漏感电流有效值的大小。

为便于完整分析变换器出现的各种工况，以 ｖａｂ超前于 ｖｃｄ 的相位 Ｄα π 的大小来分析，其中 Ｄα 定义为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSamvUr8decAa2w75Pqz7kqXSdJs1Z1icBOZEW0fcTR5raJ0DibhZpM9Jtg/640?wx_fmt=png&from=appmsg)

在图 ２ 中，随着 Ｄα在［０，１］范围内逐渐增大，变换器将出现 ３ 种工作情况：① ｖｃｄ的上升沿超前于 ｖａｂ的上升沿，此时 Ｄα满足 －（１－Ｄ１ ） ／ ２≤Ｄα ＜０，对应图２（ａ）；② ｖｃｄ的上升沿滞后于 ｖａｂ的上升沿，同时超前于 ｖａｂ 的下降沿，此时 Ｄα 满足 ０≤Ｄα ＜Ｄ１ ，对应图２（ｂ）；③ ｖｃｄ的上升沿滞后于 ｖａｂ的下降沿，此时 Ｄα满足 Ｄ１≤Ｄα≤（１＋Ｄ１ ） ／ ２，对应图 ２（ｃ）。

在这 ３ 种工况中，变换器的开关状态和工作原理都不同，以工况①（见图 ２（ａ））为例分析变换器的工作原理。 在图 ２（ａ）中，ｔ０—ｔ６ 的半个开关周期内，电路共出现 ６ 种开关状态，每种开关状态描述如下。

开关状态 １（ ｔ０— ｔ１ ）：高压侧桥臂中电流经 Ｓ１２和箝位二极管 Ｄ１ 流通，ｖａｂ输出零电平；低压侧桥臂中电流经 Ｓ２１和 Ｓ２２流通，在这个阶段电感向电容 Ｃ３充电，电感电流的斜率如式（２）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSag49KtVXfIpbGf4ktTEGdewpmTArUUoFg1yw3ricQUTuNpIhj904KSgw/640?wx_fmt=png&from=appmsg)

其中，Ｎ 为变压器高压侧对低压侧的变比。

开关状态 ２（ ｔ１— ｔ２ ）：电流过零点并反向流动，高压侧桥臂中 Ｓ１２零电流关断，Ｓ１３和 Ｄ２ 零电压、零电流导通，ｖａｂ仍输出零电平；低压侧桥臂中电流经 Ｓ２１和 Ｓ２２流通；在这个阶段电容 Ｃ３ 向电感充电，电感电流反向增大，其斜率仍为式（２）。

开关状态 ３（ ｔ２—ｔ３ ） ：高压侧桥臂中开关管 Ｓ１３关断，Ｓ１１导通，电感电流经 Ｄ１１和 Ｄ１２向输入侧电容 Ｃ１ 充电；低压侧桥臂中电流仍然经 Ｓ２１和 Ｓ２２流通，电容 Ｃ３ 放电。 由于低压侧直流电压低于高压侧直流电压，电感电流会越来越小，其变化的斜率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaVvFfXwaibclwUAqA6X3H0cpkEfiaPbqYKnRvBKhohic2ZWgpX1dzz8tog/640?wx_fmt=png&from=appmsg)

开关状态 ４（ｔ３—ｔ４ ）：在 ｔ３ 时刻电感电流过零点并由反向变为正向流动，高压侧桥臂中开关管 Ｓ１１和Ｓ１２实现零电压、零电流导通；低压侧桥臂中电流经Ｄ２１和 Ｄ２４流通，该阶段电容 Ｃ１ 和电感向 Ｃ３ 充电；电感电流的斜率仍然是式（３）。 ｔ４— ｔ５ 、ｔ５— ｔ６ 分别与ｔ０—ｔ１ 、ｔ１—ｔ２ 的开关状态相同。

２．２ 功率特性

当 －（１－Ｄ１ ） ／ ２≤Ｄα ＜０ 时，根据图 ２（ ａ）中 ｖａｂ 、ｖｃｄ和 ｉＬ 的波形，可以推导出半个周期内 ｉＬ 的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa8AtLbK9klG8P9BBSZOCJom7kDT666YO1oeYdrMQAAX8MUVmalxJ3RQ/640?wx_fmt=png&from=appmsg)

当 ０≤Ｄα ＜Ｄ１ 时，根据图 ２（ ｂ）中 ｖａｂ 、ｖｃｄ和 ｉＬ的波形，可以写出半个周期内 ｉＬ的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSatgljujxY4RicR2HgJ0QsDEAeSood8yjtG0AejsoXRygPku0G0F4CibVg/640?wx_fmt=png&from=appmsg)

由式（８）可得变换器在工况③下的传输功率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaAlMAKibsBVUAcHq1MSrZhL6MTybx2eVdoj74sW4tXEKzIrWzqx2sP1Q/640?wx_fmt=png&from=appmsg)

２．３ 软开关特性

开关器件若要实现零电压开关（ ＺＶＳ），则需要满足：开关器件导通前电流由自身反并联的二极管流通，直到电流降为 ０ 并反向增大时才由开关管自身流通；开关器件关断前电流应当经开关器件自身流通。 因此可以得出工况 ① 和工况 ② 下所有开关管实现 ＺＶＳ 的条件分别如表 １ 和表 ２ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaqNkQOkPTh4ZM51ygIzMXbazHe0qck9mGFh7yfWeFXmVmkYrCvLqOeg/640?wx_fmt=png&from=appmsg)

  
根据表 １ 可得工况①下实现 ＺＶＳ 的条件为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSawlPpKw2cNBiaus8eHU24dBYianFCAhaaElrwkXcxIckP6RicibScLsYZJg/640?wx_fmt=png&from=appmsg)

根据式（５）和式（１０）可得工况①下满足 ＺＶＳ 的功率传输范围为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa6ZnXas97eaI4zia8xzoCurq6ibtUwmRyOAF3AjtXjQhaUAZUkntgfSuQ/640?wx_fmt=png&from=appmsg)

根据表 ２ 可得工况②下实现 ＺＶＳ 的条件为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSa2od82sc9amm76b9syw4iaOcnBIMhUr4gVOqrUfc1oF4urQVgjUVMd9Q/640?wx_fmt=png&from=appmsg)

根据式（７）和式（１２）可得工况②下满足 ＺＶＳ 的功率传输范围为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaN9M1jwN6NoDoml0I0MElPTeFjCWt1HA6mb9lxeK9jsfDaEA7H63t6Q/640?wx_fmt=png&from=appmsg)

根据式（１０）和式（１２）可绘出上述 ２ 种工况下变换器中所有开关管满足 ＺＶＳ 条件的 Ｄ１ 与 Ｄφ 的区域，如附录中图 Ａ１（ ａ） 所示。 根据式（ １１） 和式（１３）可绘出上述 ２ 种工况下，变换器在满足 ＺＶＳ 条件下的传输功率范围，如附录中图 Ａ１（ ｂ）所示。 图Ａ１（ｂ）中蓝色曲线为移相控制的功率曲线，其中实线部分为能够实现 ＺＶＳ 的功率范围，虚线部分为不能够实现 ＺＶＳ 的功率范围，在轻载时采用移相控制方式下的开关器件不能实现 ＺＶＳ。 由图 Ａ１（ ｂ） 可知，采用电流有效值最小控制时，变换器在整个传输功率范围内都能够实现 ＺＶＳ。 因此，电流有效值控制扩大了开关管实现 ＺＶＳ 的范围。

２．４ 控制曲线

由图 Ａ１（ａ）可知，传输相同大小的功率，在 ＺＶＳ范围内可以由多种不同的 Ｄ１ 与 Ｄφ 的参数来实现，在所有的 Ｄ１ 与 Ｄφ 的参数中，总可以找到一组控制参数使变压器漏感电流有效值最小。 为此，建立电感电流有效值 ＩＬ与 Ｄ１ 、Ｄφ 的数学关系。

在工况①下，根据漏感电流的表达式（４） 可以计算出电流有效值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaBApiaV9uz7FF2A1tRcAk2LyQuVUsoW3AyfF78SicAcLGL9gHuu3yk67Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaQjN4eOnr94DiaB0zqic6mA526ghU7uL74kM4bu5aMPRnSg5lXoGmhw5w/640?wx_fmt=png&from=appmsg)

由图 Ａ２（ａ）可知，采用电流有效值最小控制，变换器传输一定功率时，总存在一组使漏感电流有效值最小的 Ｄ１ 与 Ｄφ 的参数。 对式（１６）与式（１８）中的Ｄ１ 与 Ｄφ 求偏导，并令偏导为 ０，可得如下关系式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaMDsPibgDicoHUBsydISMxszNBul5NyR000cA5e3ENdurozpX6XuJr87w/640?wx_fmt=png&from=appmsg)

图 Ａ２（ａ）中蓝色与紫色曲线为 ｋ ＝ ０．７ 时，电流有效值最小控制下的控制曲线 Ｄ１＝ ｆ１ （Ｄφ ）。 由式（５）、（７）、（２０）—（２２）得在电流有效值最小控制下的功率曲线 Ｐ∗ ＝ ｆ２（Ｄφ ），见附录图 Ａ２（ｂ）中蓝色与紫色曲线。 由图 Ａ２（ｂ）知，在整个传输功率范围内，使电感电流有效值最小的 Ｄ１ 与 Ｄφ 控制参数能使所有开关管实现 ＺＶＳ；变换器传输功率随 Ｄφ 单调增大。

图 Ａ２（ｂ）中蓝色与紫色曲线为 ｋ ＝ ０．７ 时 ２ 种控制方式下电感电流有效值 Ｉ∗Ｌ 与传输功率 Ｐ∗ 的关系曲线。 由图 Ａ２（ｂ）可知轻载时电流有效值最小控制方式下的电感电流有效值比移相控制方式下的小。

３. 实验结果与分析

为验证控制方法的有效性，根据图 １ 所示的双向隔离三电平 ＤＣ⁃ＤＣ 变换器拓扑建立实验平台。选用 Ａｌｔｅｒａ 公司第三代 ＦＰＧＡ 芯片，用 Ｖｅｒｉｌｏｇ 硬件电路设计语言设计本文提出的电流有效值最小控制核心，实验控制核心框图如图 ３ 所示，图中 Ｕｏ与 Ｕ∗ｏ分别为变换器输出电压与输出电压参考值。 实验系统参数如下：输入电压为 ３００ Ｖ，输出电压为 ２００ Ｖ，隔离变压器工作频率为 ３ ｋＨｚ，开关频率为 ３ ｋＨｚ，ＦＰＧＡ芯片型号为 ＥＰ３Ｃ５５Ｆ４８４Ｉ７，开关器件型号为 ＲＯＨＭＳＣＨ２０８０ＫＥ，箝位二极管型号为 ＡＰＴ１０ＳＣＤ１２０Ｂ，支撑电容容值／ 耐压为 ４７０ μＦ ／ ６００ Ｖ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaX5ny6iaU6GFBYia69OicMIyU4CrSQmGnZDgv4h2s5PmWoWvtibHVl78RXw/640?wx_fmt=png&from=appmsg)

图 ４— ６ 分别位变换器在空载、２００ Ｗ 负载和５００ Ｗ 负载时，移相控制与电流有效值最小控制方式下变压器电感电流有效值的实验结果。 由图 ４ 可知：空载时，移相控制方式下变压器漏感电流有效值为 ３．６６ Ａ；电流有效值最小控制方式下漏感电流有效值为 １．８９ Ａ，仅为移相控制方式下的一半左右。由图 ５ 可知：２００ Ｗ 负载时，移相控制方式下漏感电流有效值为 ３．６９ Ａ，电流有效值最小控制方式下漏感电流有效值为 ２．６０ Ａ。 由图 ６ 可知：５００ Ｗ 负载时，移相控制方式下漏感电流有效值为 ４．６２ Ａ，电流有效值最小控制方式下漏感电流有效值为 ４．３３ Ａ。实验结果均验证了电流有效值最小控制方式下漏感电流有效值小于传统移相控制下的值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaxEFPrfQIe7E1cRXBzEeNsDX5icjmibhytGnXtTpdjqyZ2UW6LUOt4gbA/640?wx_fmt=png&from=appmsg)

图 ７（ ａ）为根据实验数据绘制的 ２ 种控制方式下，漏感电流有效值与传输功率 Ｐ 的关系曲线。 由图 ７（ａ）可知：在全功率范围内，电流有效值最小控制方式下，变压器漏感电流有效值均小于传统移相控制方式下的值；尤其在轻载时，电流有效值最小控制方法下漏感电流有效值较传统移相控制方式显著降低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaUSNbgibA6xopwElyHnmyUNliakjFkIkqp3KhxnqjTPNWL2gQfNSCHuVw/640?wx_fmt=png&from=appmsg)

图 ７（ｂ）为根据实验数据绘制的 ２ 种控制方式下，变换器传输效率 η 与传输功率 Ｐ 的关系曲线。由图 ７（ｂ）可知：在全功率范围内，电流有效值最小控制方式下，变换器的传输效率均高于传统移相控制方式下的传输效率；尤其是在轻载时，电流有效值最小控制方式显著提高了变换器的能量传输效率，这与图 ７（ａ）中轻载时该控制方法显著降低漏感电流有效值相对应。 这说明，本文提出的通过降低漏感电流有效值来提高变换器的传输效率的思路是可行的。  

４. 结论

本文提出了一种“双边三电平半桥结构＋电流有效值最小控制策略”的方案。 该方案将传统隔离ＤＣ⁃ＤＣ 变换器中的两电平 Ｈ 桥结构替换为三电平半桥结构，通过分析变换器的工作原理、功率特性和ＺＶＳ 条件并以变压器漏感电流有效值最小为控制目标进行控制，使得变压器和开关器件的损耗得到显著降低，解决了传统双向隔离两电平 ＤＣ⁃ＤＣ 变换器开关器件电压应力大、变换器传输效率低等问题。此外，该方案具有更大的 ＺＶＳ 范围，变换器传输效率较传统方案得到了显著提高，验证了该方案良好的应用价值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaQlbxCU3V1YicYuaSIQbJN6Cz7Bx6O1FiaiasY1FVYGQvcKhicwcibCyNYiaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgPezOmXrhQQtXACNj9fSaYofcSUjib3dgAnPOfSeR74m9G97CTicxniaj3syaJMJCOAbq73uib9whAw/640?wx_fmt=png&from=appmsg)

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)