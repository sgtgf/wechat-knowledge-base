# 应用于弹载电源SiC MOSFET的RC吸收电路的设计与优化

原创 张晓娟，景 博等 SiC碳化硅MOS管及功率模块的应用 2024-09-30 10:13 广东

> 原文地址: [https://mp.weixin.qq.com/s/ENWWE2n-8KmcZu\_FlD9wvA](https://mp.weixin.qq.com/s/ENWWE2n-8KmcZu_FlD9wvA)

**文章来源：**电子器件

**作者:** 张晓娟１，２，景 博２，张 劼１，王 洋１，李红波１(１.西京学院机械工程学院；２.空军工程大学航空工程学院)

**摘 要:**SiC MOSFET作为新兴的宽禁带半导体，目前在电源设计中被广泛用于取代Si IGBT。 然而在弹载电源这类严苛的应用场合，SiC MOSFET关断暂态带来的超调振荡影响了电源输出的稳定性和品质，并且降低了装置的可靠性。在分析SiC MOSFET开关特性及四种无源吸收电路优缺点的基础上，提出了一种针对SiC MOSFET关断暂态的RC吸收电路优化设计方案。给出了系统效率最优情况下的电路参数范围，提升了吸收电路研发的效率。最后，通过400V20A双脉冲测试电路进行了实验验证。

**关键词:**SiC MOSFET；过应力；吸收电路；双脉冲测试

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLhLdp07nYww8GeC6Ww0EQxAibeDaNRG36zlFJqiaiaJoY6PZA0sFKyqzOg/640?wx_fmt=jpeg&from=appmsg)

碳化硅(SiC)和氮化镓(GaN)作为宽禁带半导体材料的代表，引发了电力电子的新一次革命。其中SiC MOSFET由于更低的导通电阻以及更快的开关速度，正逐步取代Si IGBT。将电力电子装置的功率密度和效率提升到新的高度\[１\]。 弹载电源中SiC MOSFET使用广泛，但其高速开关带来的电气过应力与高频振荡不仅恶化了系统的电磁兼容特性，更危及了器件的安全工作区\[２\]，降低了整机工作的可靠性，进而制约了SiC MOSFET的进一步推广。

SiC MOSFET高速开关暂态的负面效应主要源于以下两方面:一方面，SiC MOSFET的结电容更小，开关速度更快，瞬变所带来的高 ｄｉ / ｄｔ、ｄｕ / ｄｔ 会成为电路中电磁干扰的源头，产生诸如串扰\[３\]、电磁干扰(Ｅｌｅｃｔｒｏｍａｇｎｅｔｉｃ Ｉｎｔｅｒｆｅｒｅｎｃｅ，ＥＭＩ)\[４－５\] 等问题；另一方面，SiC MOSFET对于回路中的寄生参数更加敏感，ｄｉ / ｄｔ 会与寄生电感相作用产生超调电压，ｄｕ / ｄｔ 会与寄生电容相作用产生漏电流，寄生电感和寄生电容在SiC MOSFET近似阶跃输入的激励下又会产生衰减振荡，进一步加剧电磁干扰。

降低回路寄生电感，优化布线结构\[６\] 被证明是一种有效的方法，但是依赖于设计者的经验，并且进一步降低寄生电感需要复杂的封装技术\[７\]ꎬ成本较高。增设缓冲吸收电路是目前应用最广、成本最低的方法。该方法通过在MOSFET两端并联无源器件，对于谐振网络进行阻尼以及能量吸收。文献\[８\]讨论了目前常用的三种吸收电路拓扑，并进行了横向对比。文献\[９\]给出了RCD吸收电路的具体设计方案，实验证明该电路可以有效抑制MOSFET关断电压尖峰。目前， 针对弹载设备中高速SiC MOSFET的吸收电路设计方案鲜有报道，传统应用于Si基器件的设计方法存在一定的局限性。

本文首先分析了SiC MOSFET的开关特性，并分析了SiC MOSFET的四种无源吸收电路优缺点。其次，针对其中应用较为广泛的RC 吸收电路进行建模分析，给出相关参数的具体设计及优化方案。 最后，通过400V/20A双脉冲测试电路进行了实验验证。

**１** **SiC MOSFET的开关特性**

图 １ 为应用于SiC MOSFET开关特性分析的双脉冲测试电路。其中，Lioad为负载电感，VBUS为恒定母线电压，Df和Cf表示续流二极管及其结电容，Ｃｇｓ、Ｃｇｄ 、Ｃｄｓ表示SiC MOSFET结电容，Ｌｌｏｏｐ为桥臂走线寄生电感，Rg为栅源驱动电阻，Vdr为驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLYIApoydicPB0E6icb12cK5X4XdLczPDTNug4YNM1GIXrsI6dIGkSTd1A/640?wx_fmt=png&from=appmsg)

图 ２ 为SiC MOSFET开关暂态的典型波形。其中包括指令信号 ｕｓｉｇｎａｌ、栅源两端电压Ugs，漏源电压Uds，漏极电流Id。双脉冲测试电路的具体实验方法参照 文 献 \[10 \]。双 脉 冲 测 试 电 路 模 拟 了SiC MOSFET在感性负载下开关的的工作状态，其中续流二极管Df可以是BOOST或无桥PFC电路中常用的SiC SBD肖特基二极管，也可以是SiC MOSFET工作在同步整流模式下的体二极管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLJtGXUU8v9S7mk6h5uD7FsvjcZ5IRG2VWPGNRFpr1GDfwOtgXErFHUQ/640?wx_fmt=png&from=appmsg)

在开通过程中，由于反向恢复效应，漏极电流 ｉｄ存在超调，同时Cf与 Ｌｌｏｏｐ形成LC谐振，导致了漏极电流的衰减振荡。在关断过程中较大的 ｄｉ / ｄｔ 与 Ｌｌｏｏｐ相作用导致电压超调。此时SiC MOSFET的输出电容 Ｃｏｓｓ＝Ｃｇｄ＋Ｃｄｓ与 Ｌｌｏｏｐ作用，形成漏源电压的衰减振荡。其中，电压Uds的超调与振荡是实际工程中导致MOSFET失效的主要原因，也是本文研究的重点。

关断电压的超调振荡随着SiC MOSFET开关速度的提升会愈加显著。如图３(ａ)所示， 增大栅极电阻可以对关断电压尖峰进行抑制，但是是以延时和损耗增加为代价的。图３( ｂ)展示了关断电压随回路电感的变化趋势，显然降低寄生电感有利于降低Uds的超调与振荡，但是目前对于寄生电感的主动控制还处于研究阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLibjyvhqIo8pq6Fo2SC44yh1HjiaeR3oHwWg59FPA1NribtLDJ9VkZW9icA/640?wx_fmt=png&from=appmsg)

**２ 现有无源吸收电路**

无源吸收电路主要有四种拓扑形式，如图 ４ 所示。每一种吸收电路都并联在SiC MOSFET的漏源极两端，以达到吸收关断电压尖峰的目的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvL3J83k1JicVPWx2dup1cPROVmbtOhnCy9HJz9TLYWGpuGVGXfxr20icfg/640?wx_fmt=png&from=appmsg)

单电容C吸收电路如图４( ａ)所示。该电路增大了谐振回路的电容数值，进而削弱了关断电压尖峰，降低了振荡频率。但该吸收电路不存在耗能元件，在开通阶段SiC MOSFET的电流应力较大。

RC吸收电路如图４(ｂ)所示。电阻的加入增大了谐振回路的阻尼，抑制电压尖峰，但同时也承担了一部 分 的 功 率 损 耗。这 种 方 法 可 以 缓 解SiC MOSFET开通时的电流应力，但同样削弱了关断电压尖峰的抑制能力，RC的数值需要进行优化选取。

RCD吸收电路如图４( ｃ) 所示。该电路在RC的基础上增加了一个二极管，在关断阶段等效于单电容Ｃ电路，而在开通阶段等效于RC电路。RCD电路虽兼顾了关断电压吸收和开通电流应力两个问题，但额外增加一个快恢复二极管或者肖特基二极管以保证电路的有序工作，这无疑大大增加了成本。

RCD钳位吸收电路是RCD的改进，只在SiC MOSFET关断电压超调振荡阶段才会工作，将吸收电路对于功率管开关特性的影响降到最低，比传统RCD电路的效率更高\[11\]。然而该电路同样需要额外的二极管，成本方面不具备优势。

本文选取常用的RC吸收电路，对其进行建模分析，并给出缓冲电阻和电容的参数设计与优化方案。

**３  RＣ吸收电路的设计与优化**

应用于SiC MOSFET的RC吸收电路如图５(ａ)所示，其等效电路如图５(ｂ)所示。显然，RC吸收电路的加入构成了一个二阶有阻尼振荡电路。在 Ｐｓｐｉｃｅ 中取母线电压VBUS＝400V，负载电流TL＝20A，驱动电阻Rg＝10Ω，回路寄生电感 Ｌｌｏｏｐ＝ 100ｎＨ，采用CREE公司的1200V/90A的C2M0015120D模型，进行仿真分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLCN6En1aW27DoCGrwiaxjw01icCuxQqNJyOWlNaGRnW6kb6WrmeTQMXKQ/640?wx_fmt=png&from=appmsg)

**３.１  RC电路对于关断性能的优化**

图６(ａ)为SiC MOSFET关断电压尖峰的抑制效果。取Rs＝10Ω，Cs＝2.2ｎＦ，关断电压的峰值有了58V的 下 降， 同 时 振 荡 频 率 由27.2ＭＨｚ 降 到13.4Ｈｚ，并且衰减速度加快。图 ６(ｂ)为SiC MOSFET关断电压的频谱，显然在27.2ＭＨｚ 处有了10ｄＢ/ μＶ的衰减，这大大优化了系统共模 EMI特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLUTSic1Tqib9JzApQnZsZ4bZGjZ0vtw8mITwW0LZqGSOJuweoBCIUAd9w/640?wx_fmt=png&from=appmsg)

**３.２  RC参数对于抑制效果的影响**

如图6(ａ)所示，SiC MOSFET的关断电压Uds为有阻尼衰减的阶跃响应。根据图５(ｂ)给出的LC谐振回路等效图，可以得出加入RC吸收电路后，系统的振荡频率 Fosc为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLwOTWvpIxGAJB1tPlfdpCMwfsTgoqCpCAHPR3YkMaUsjGhoWDFqpqlA/640?wx_fmt=png&from=appmsg)

缓冲电阻Rs的取值范围即以Rd作为基准进行标定。缓冲电容Cs的取值范围则以SiC MOSFET的输出电容Coss作为基准进行标定。本例中Rd≈10Ω，Coss＝220ｐＦ。

图 ７ 给出了固定Cs＝2.2ｎＦ，选取Rs从5Ω 到40Ω 条件下，关断电压的波形图。值得一提的是随着Rs的进一步增大，系统阻尼不降反升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLuVMDzcNhJicBP8KB5c0g0bmT3y1mCuO5UTgAI9U3RT6fYFicFtp6sWiaA/640?wx_fmt=png&from=appmsg)

同样的情况出现在Cs取值过大时，随着缓冲电容的增大，关断尖峰上升，如图８(ｂ)所示。这是由于图 ５(ｂ)的二阶等效电路图忽略了双脉冲系统中其他寄生参数， 实际上应用RC吸收电路的SiC MOSFET驱动系统为一个高阶系统，存在多个极点，缓冲电阻和缓冲电容取值过大都会导致超调变化趋势的改变。 在实际应用中，我们为保证RC吸收电路设计的有效性，有如下约束：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLoSibUknHwKibIaD3rY28iaRADyHvEfnyOkZJvP4G9fd9ykPwdOOtB3zng/640?wx_fmt=png&from=appmsg)

选取缓冲电阻 Ｒｓ＝5Ω~40Ω，缓冲电容 510ｐＦ-3.9ｎＦ，可得到关断电压峰值的变化趋势，如图９所示。显然，随着缓冲电容取值的增大，电压峰值降低，但衰减趋势随电容值上升而放缓。同时，随着缓冲电阻取值的增大，电压峰值呈现先减后增的趋势，并在20Ω~30Ω 区域内取到电压尖峰的最小值。所以，一味增大缓冲电阻取值对于降低电压峰值无效，一味增大缓冲电容取值对于降低电压峰值效果不显著，甚至会出现反向趋势， 增大电容对于电压峰值的抑制效果要优于增大电阻， 仅从削弱电压尖峰的角度来看，应固定Rs数值，并在10nf以内增大Cs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLhicfzfbBFYLIwjB246WWoyKcMdMFuMvoc5ibhviciatO4rOeCqzn9dFSeA/640?wx_fmt=png&from=appmsg)

**３.３  RC参数对于损耗的影响**

除了对关断电压尖峰的抑制效果，系统的损耗也是衡量RC吸收电路参数设计优劣的标准之一。对于电力电子装置，损耗的增加意味着效率的下降以及散热负担的加重，进而会降低系统的功率密度。对于应用于SiC MOSFET的RC吸收电路系统而言，主要关注SiC MOSFET本身以及耗能缓冲电阻Rs上的功率损耗。

SiC MOSFET的开关损耗可表示为其漏源电压Uds与漏极电流id的积分：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLn7mVFg4gczKJxt2J2sY4NyOOartU9MYFChaARAcSXiaHxqrXMnC9pYw/640?wx_fmt=png&from=appmsg)

图10(ａ)和(ｂ)分别给出了不同R,C取值条件下SiC MOSFET开关损耗与Rs热损耗的变化趋势。不难看出，和缓冲电阻的损耗相比，SiC MOSFET的损耗变化的幅度相对较小。对于SiC MOSFET的开关损耗，其随着缓冲电阻的增大而减小，这是得益于超调损耗的降低，其又随着缓冲电容的增大而增大，这是因为RC吸收电路的插入一定程度上降低了SiC MOSFET的开关速度。对于Rs的热损耗，其随着自身电阻值的增大而增大，增大速度逐步放缓，体现了公式(６)中二次项的变化趋势，另外，热损耗同样随着缓冲电容的增大而增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLuC4G4nHjOu7K2x3bPxFhQTMhWl9kJPWNjyJIqs4pAaIuibtaYunx4dA/640?wx_fmt=png&from=appmsg)

总损耗是系统效率的集中体现，其变化趋势和缓冲电阻热损耗类似，如图11所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvL3pjqJhHRU8jibgJYE6zwu8hGcRqu5tJF5e9KC0FCf3Dq734ywecJXbQ/640?wx_fmt=png&from=appmsg)

在确定Rs取值后，可根据对于电压超调量和总开关损耗的要求，对Cs进行折中取值。显然，一味增大R,C 取值对于提升系统效率是不利的。 于是，在公式(４)的基础上对于RC取值有进一步约束：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLCg7gX4TqCHKicNb0Nib3F85lcZKkPYiblcGZYOLiabE5fiaXGTcoWPYEtMg/640?wx_fmt=png&from=appmsg)

实际设计过程中，未插入RC吸收电路下可测得Uds的响应波形，得出临界阻尼电阻Rd的数值，其次，在公式(７)约束条件下选择合适的缓冲电阻和缓冲电容，最后根据应用场合对于R,C数值进行微调， 对于EMC要求严格或者寄生参数较为恶劣的场合，建议适当选取较大的 Ｃｓ 值以达到尖峰与振荡足够的衰减，对于效率要求严格的场合，在保证尖峰不超过额定电压的情况下，尽量选择较小的Cs 值。不建议将增大Rs值作为优化设计的方式。

**４ 实验验证**

为验证本文提出的R,C参数优化设计方法的有效性，搭建了如图12所示的双脉冲测试平台， 实验的相关测试参数如表１所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLDc8h1OuQDkeSI1c7h6mVSLcDHETU3ALZfW8K7WHeOOeVHoibZjaNgGQ/640?wx_fmt=png&from=appmsg)

图13所 示 为 加 入RC吸 收 电 路 前 后 SiC MOSFET的关断暂态电压波形图. 显然，RC吸收电路的加入将超调量由330V降低到了180V，有效提升了SiC MOSFET开关暂态瞬间的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldjS4Bp4lxUrIUCfk8DXvLB38K59ibrV9mJlT2lRQlbzgxZ8hxPSwXd55ymBNyptkbYzjPBSdEqhQ/640?wx_fmt=png&from=appmsg)

**５ 结论**

针对弹载电源中SiC MOSFET关断暂态的电压超调振荡现象，首先，分析了应用于 SiC MOSFET的三种无源吸收电路的优缺点。其次，对于其中应用较为广泛的RC吸收电路进行建模分析，给出相关参数的具体设计及优化方案，限定了缓冲电阻和电容取值的约束条件。最后，通过400V/20A双脉冲测试电路验证了设计的有效性。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)