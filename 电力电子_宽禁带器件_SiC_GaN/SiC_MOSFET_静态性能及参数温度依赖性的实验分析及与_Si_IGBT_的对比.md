# SiC MOSFET 静态性能及参数温度依赖性的实验分析及与 Si IGBT 的对比


> 原文地址: [https://mp.weixin.qq.com/s/-Owmy4DYtejcgGSYwphIrQ](https://mp.weixin.qq.com/s/-Owmy4DYtejcgGSYwphIrQ)

文章来源：电学学报

作者：马青，冉立，胡博容，曾正，刘清阳（重庆大学输配电装备及系统安全与新技术国家重点实验室，重庆 400044）

摘要 ：碳 化 硅 SiC（siliconcarbide）MOSFET 作为 新 型 的 电 力 电 子 器 件 ，具有 不 同 于 Si IGBT 的电 热 特 性 ，且其静态特性在宽温度范围内变化 特 性 并 不 明 确 。 以 SiC MOSFET 为研 究 对 象 ，从器 件 的 工 作 原 理 入 手 ，结合 Si IGBT 对比，分析了其静态特性及寄生参数受温度的影响 ，并在-55℃至 165℃准确 测 量 了 包 括 阈 值 电 压 、导通 电阻、泄漏电流、输出特性及寄生参数在内的多个参数 ，实验结果符合理论分析 。 根据实验结果分析了各项性能参数的 温 度 敏 感 性 ，结果 表 明 ：SiC MOSFET 静态 性 能 及 参 数 与 温 度 具 有 极 强 的 相 关 性 ；与 Si IGBT 相比 ，温度 依赖性更为明显，并且能够为器件结温测量及 SiC MOSFET 电力电子系统状态监测提供理论依据与实验基础 。

关键词：SiC MOSFET;IGBT; 静态性能; 寄生参数; 结温; 状态监测

引言

功率半导体器件的状态监测，对于其运行评估和寿命预测都有显著的影响。 碳化硅 SiC（siliconcarbide）器件将广泛 应用于电 动 汽车 、多电飞机等高功率密度、高结温、高可靠的场合，所以保证其工作信息（如结温等）的及时、准确和可靠反馈显得十分必 要，便于评估功率器件的运行和老化情况 。器件的结温无法简单地直接测量，所以需要通过对温度敏感的电参量TSEPs（temperature sensitive elec-trical parameters）来间接确定结温。 实际应用中，无论是仿真还是建模分析，TSEPs 相关的理论模型和实验结果，都是不可或缺的基础。

SiC 的禁带宽度约是传统 Si 的 3 倍。 宽禁带使基于新型材料制造的 SiC MOSFET 器件 的 泄 漏电流减小， 使器件能适应更高温度的工作环境。此外，热导率是 Si 的 3 倍以上，更有助于器 件散热，从而提高功率密度及器件集成度。SiC 材料的上述特性决定了 SiC MOSET 器件的应用场合将会趋于高功率、高频率以及高环境温 度，要求对于 器件运行工况的实时监测，准确测量 器件结温 ，从而保证极端工况下器件的可靠性和稳定性。

随着 SiC 器件的广泛应用，针对器件特性的研究也逐渐深入。 由于 SiC MOSFET 具有理想 的栅极绝缘特性、高速的开关性能、低导通电阻和 高稳定性， 其简单的驱 动电路及与 现有的功率 器件（硅功率 MOSFET 和 IGBT） 驱动电路的兼容性，使其成为最受瞩目的 SiC 功率开关器件。 文献［11］阐述了耐高温变换器的研究进展，但对于 SiC 器件本身 的 温 度 特 性 分 析 不 够 透 彻 ；文献 ［12］ 对高 压SiC 器件在固态变压器中的应用进行了深入分析，仍未考虑器件特性与温度的依赖性。

本文通过对多种 SiC MOSFET 的测试，得到了其在-55℃到 165℃范围内的 静态特性和 寄生 参 数的定量分析，进而讨论了在实际测量数据基础上的拟合函数，分析了其准确性和灵敏度。 分析结论为SiC MOSFET 的实时结温测量、 运行状态评估及寿命预测提供了初步理论和实验基础。

1\. 器件静态特性物理机理分析

1.1 器件工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdrHtov0DgwnNT9Bgqs7qIxqRwA28GJMFLuNEEEXDicXchSrR24XVvmHw/640?wx_fmt=png)

图 1 给出了 SiC MOSFET 元胞结构，它是以低掺杂的 P 型 SiC 半导体材料为衬底，用扩散工艺制作出两个高掺杂的 N+区， 在 P 型半导体表面上生成一层氧化层薄膜绝缘层， 从两个 N+区引出两个金属电极，分别是源极和 漏极，在氧化绝缘层上制作金属电极，作为栅极。 由于 MOSFET 的源极和漏极之 间 存 在 一 个 PN 结 ，等效为寄生二 极管 ，其正极和负极分别是功率 SiC MOSFET 的源极和漏极。由于 寄 生 二 极 管 与 功 率 SiC MOSFET 组成 了 一 个整体，因此它对功率器件整体的静态特性与参数的影响不可忽略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdxic3qSQpcZxibVTxkMLvOT9Reib4OlQAb2dcdVJevicKhiaeZhFTehXZP4Q/640?wx_fmt=png)

IGBT 的元胞结构如图 2 所示。 与 MOSFET 相比，IGBT 多了一层 P+注入区， 形成了一个基极电流由 MOS 栅压控制的双极性晶体管。 与 MOSFET的关 断 过 程 不 同 的 是 ， 由于 PNP 晶体 管 的 存 在 ，IGBT 在沟道消失后载流子的消失还需要一定的复合时间，会形成相应的拖尾电流，使关断损耗提高。

1.2 器件静态特性主导因素

功率器件相关的基本性质，与能带宽 度、本征载流子浓度、载流子迁移率、碰撞电离系数、介电常数、导热率、电子亲和力等多个物理本质因素有关。针对温度依赖特性的功 率器件静态 特性和寄 生参数，重点分析以下主导因素。

1.2.1 本征载流子浓度

由热在半导体禁带间产生的电子-空穴对决定着本征载流子的浓度，该参数直接影响功率器件泄漏电流的数量级， 而 Si IGBT 和 SiC MOSFET 的本征载流子浓度特性具有非常大的差异，并且该参数具有明显的温度变化特性， 可使用禁带宽度 EG 和导带 NC 和价带 NV 的态密度计算，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId0HG2ApX7QrqDTK4EcialhLuyWBP66F7RibDernIHVvJqLtpWm04c8Qmw/640?wx_fmt=png)

4H-SiC 的能带宽度是 Si 的 3 倍， 这导致在任一给定温度下 4H-SiC 本征载流子浓度低得多。 Si和 4H-SiC 的本征载流子浓度分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdVyia6nOENBPQNoVCCEwAY4m2aXatNzL8YiaibxfeDiaXNUMAoFk8wmFZdA/640?wx_fmt=png)

利用式（2）和式 （3）可绘制本征载流子浓 度与温度的关系曲线，如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdE3TdzS5Pp5icC7ytEKPGkqvorx4AuW63vKFHyZ5b0EAecKP2ibztLGjA/640?wx_fmt=png)

由图可见， 由于巨大的禁带宽度差异，4H-SiC的本征载流子浓度远小于Si，这表明 SiC-MOSFET和 Si-IGBT 在 PN 结截止时， 流过电极的泄漏电流存在几个数量级的差异。

1.2.2 载流子迁移率

载流子迁移率描述了载 流子在半导体中发 生漂移的难易程度，表征单位场强作用下载流子的平均漂移速度， 与半导体内的多个 物理参数密切相关。 载流子迁移率可表示为载流子类型（电子或空穴）、掺杂浓度和结温的函数。 在低掺杂浓度（小于1015 cm-3） 情况下，SiC MOSFET 和 Si IGBT 漂移区内载流子迁移率与温度的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdO5FxwK8iaqljckVusZgUpEDtiaYI5zeHbyRFZdl6rCzneELMDpDDVxzw/640?wx_fmt=png)

式中，k1、k2、k3 均为与 材料相关 的 常 系数 。 由此可得，两种器件在漂移区的载流子迁移速率随温度升高迅速减小。 由于半导体内电阻率与载流子迁移率成反比，功率器件漂移区 、积累层及沟 道内载流子迁移率随温度升高而减小，导致对应区域电阻率上升。 当上述区域电阻为主导电阻时，器件导通电阻随温度上升而增加。

1.2.3 耗尽层宽度

在 P 型衬底的器件金属极上加正偏压时，由于能带弯曲，在半导体内形成一个耗尽区。 耗尽区宽度计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdkbMvibibYJkRzK6Nvb2ic52wL2FZqs0ictGlPVHRnyc1LKIaHjibG7LDAvQ/640?wx_fmt=png)

式中：εS 为相对介电常数；q 为单位电荷量；NA 为受主掺杂浓度。 可见耗尽层宽度与温度密切相关，而半导体的特征电容为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId5aY9hHE8W8iaKfqokYeCEfmuXkr9rt1EUGNkZeiamehuicC0PlyMXwqCg/640?wx_fmt=png)

可见，器件特征电容具有温度依赖性 ，随温度上升，耗尽层宽度增大，器件特征电容则 呈现下降趋势。 但由于特征电容是器件本体寄生参数，存在多方面的交叉影响，因此通过实验的方法直接获取寄生电容随温度的变化特性参数具有实际意义。

1.2.4 半导体总电荷

半导体中的总电荷可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId5GojqKztbYGJsUzSa5A3TRwiaaiao006Ymohwd9bbC2AIWl3R1eVeHKQ/640?wx_fmt=png)

式中，p0为半导体内空穴浓度。 一旦MOS 结构进入强反型工作区后， 反型层中的载流子密度足够大，从而允许有导电电流流过 MOSFET 沟道。当半导体表面进入强反型模式时， 表面电势ΨS等于体电势ΨB的2 倍。 对于阈值电压，则有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeADKL9LT0VT0o3o96GldEyb7uu9Ov5TrcV66SMBcoeTiareCgkezNju2w/640?wx_fmt=png)

式中：COX 为氧化层的特征电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAZkia7Jt546SXxH0Hr3CdJv1hdnWO1RlUtgNuaqd18jsickEgXSxbLsjg/640?wx_fmt=png)

式中：ni 为本征载流子浓度。 将式（9）、式（11）代入式（10），则有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeA3jW9lrIfxLWqRJpJCGZhFrcB7m5B8VhuPWIRTLQhnnZxa3icLSAzN4w/640?wx_fmt=png)

当温度上升时，相对介电常数 εs 增大，本征载流子浓度 ni 随温度增加迅速，且与阈值电压呈负相关，由式（12）可知，功率 MOSFET 阈值电压具有非常灵敏的温度依赖性。

2\. 温度依赖特性测试方法

半导体功率器件的性能参数分为寄生参数、静态参数和动态特性。 由于 SiC 器件的开关速度为纳秒级，所以其动态特性很 难被实时测量 ，导致器件的状态监测不很现实。 因此选择寄生参数和静态特性来进行结温监测和运行状态评估。 这些特性和结温的关系可以分为 3 类：线性相关、二次相关和指数相关，分别表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAwoajvWnV72l7gtJVTKpMwCR78qeoedqewZtABk7ZYUMtsZs0suvdFA/640?wx_fmt=png)

式中：Tj 为结温；a、b、p 1、p 2、p 3，m、n 均为拟合系数。

实验选用Cree公司的SiC MOSFET （C2M0080120D/1200V/45A）、Rohm公司的SiC MOSFET（SCT2080KE/1200V/40 A） 和Semikron公司Si IGBT（SKM50GB12T4/1200V/50 A）作为实验 被测器件 DUT（device under test）。 虽然器件封装类型不同，但温度特性主要是受芯片影响产生的 ，芯片电热特性与封装关系不大。 实验测试原理及实验平台如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAoa3MiacDGwvdxowypxt9tnhKYzibZJ7ea0yw4sX6SNIB6FlpHwezCcaw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAAH8Sxg8TIZYtcmyegW6MrI7vdkTVfn4wGkaFHl0MTQJaRB8ExsWyibg/640?wx_fmt=png)

图 4（a）为DUT 在多种结温和实际应用工作状态下的测量原理。 图 4（b）为当栅-源极的功率脉冲和脉冲幅度变化时，测量稳态导通状态测试点的电压。 保持恒定的栅极电压，通过反复改变源-漏极的工作条件来估算导通状态下不同工作情况的器件特性。 测试模式分为脉冲测试模式及导通测试模式（图 4（c））。 DUT 置于高低温试验箱中，测试温度范围为-55℃ 到 165℃ ，DUT 其栅极接入 B1505 中电流驱动电源模块， 提供正偏和反偏驱动电压；DUT栅源极接 B1505 中 3kV/1.5 kA 功率电源模块。

实验平台如图 4（d）所示 ，将被测器件放 入恒温箱中，通过导线连出，接入Agilent 公司 B1505 功率器件测试仪。 设置恒温箱温度，在不同温度下测试器件静态性能和寄生参数。

3\. 实验分析

3.1 阈值电压

本文用线性外推法，通过截取栅极电压 Vg 传输特性曲线的正切最大值再减去漏源极电压Vds的α倍，实验取Vds=10V，α=0.6，获得SiC MOSFET的阈值电压。 SiC MOSFET 与 Si IGBT 阈值电压温度特性如图 5 所示。图 5（a）可见，SiC MOSFET 的阈值电压随温度增加而降低；跨导则存在一个峰值，且峰值随温度上升而下降； 考虑阈值电压和最 大跨导的参数，可以有效地评估碳化硅器件受结温影响的传输特性。 由于二阶拟合曲线的系数为10\-5 数量级，在保证精度的情况 下 ，Vth（Gm）和 Tj 之间的关系可以近似为一阶线性。 跨导不能直接反映功率器件的温度特征，而是根据 I-V 特性计算所得；Vth 则可以直接反映功率器件运行特性，特别是导电状态，从而直接监测设备结温。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAatLrQ3YnX1mfjXmwt5TsSBPdTybpJFI2MfrasYbmEVzhxPDQ8BfvSg/640?wx_fmt=png)

由图 5（b）可见，SiC MOSFET 的阈值电压随结温变化相对于Si IGBT 具有更高的敏感 度 。 结温从-55℃到+165℃变化范围内，SiC MOSFET 的阈值电压下降了 50%，因此 在高温工作状态下，应充分考虑阈值电压的下降带来误导通的影响。

当栅极电压增加达到 Vth 时， 器件开始进入强反型工作区， 此时氧 化层承受电压为器件阈值电压。 因此氧化层中及其与半导体界面中的陷阱电荷会改变,使 MOSFET 阈值电压出现漂移。当氧化层电荷量增加时， 栅极需要更大的电压使器件导通，表现为阈值电压升高。

文献 ［19］通过测量SiC样品在不同温度下 阈值电压发现，器件运行结温与阈值电压负相关。 当器件结温下降，空穴能量降低难以越过界面态进入衬底中，且被陷于氧化层中空穴陷阱的载流子从晶格振动中获得的能量减小，难以挣脱陷阱，使得氧化层电荷增加，阈值电压大幅升高。 通过长时间栅极可靠性实验发现： 当栅极施加脉冲正向电压，阈值电压会随实验时间呈对数增长；当栅极施加脉冲负向电压时，阈值电压会随时间呈对数下降。

3.2 导通电阻

SiC MOSFET 的总特征导通电阻由源极接触电阻RCS、源电阻RN+、沟道电阻RCH、积累层电阻RA、JFET电阻RJFET、漂移区电阻RD、衬底电阻RSUB 以及漏极接触电阻 RDS相加计算得到。 其结构分布如图6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAdlaebXYMA5pGwRx2YC4gUo5FOawJX7rwuf25RMtHQJLtzsibuEmCgyg/640?wx_fmt=png)

由于 SiC MOSFET 结构中漏源极之间的电 流通路上的各个部分电阻是串联的，所以总的导通电阻是各部分电阻之和。 其中沟道电阻 RCH 以及积累层电阻 RA 之和约占整个导通电阻的 70%， 计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAbSLlDIN9yn9P5ESXFSIAWcbogOCia3QSJRbqia2IgvPghCx4TN1EF3sQ/640?wx_fmt=png)

式中：LCH 为沟道 长度；Wcell 为器件元胞宽度 ；μni 为栅氧层厚度。 参数 LCH、Wcell、μni 和 COX 均为器件本体的固有参数。

由式（16）、式（17）可见 ，RCH 和 RA 均与 阈 值 电压 Vth 相关。由第 3.1 节分析可知，Vth 具有温度依赖性，随温度上 升呈下降趋 势，因而可以认为RCH 和RA 也具有变温度特性，且阻值随温度上升而增大。

SiC MOSFET 与 Si IGBT 导通电阻的温度特性如图 7 所示。 由图 7（a）可见，由于测试系统的误差引起不稳定，当漏源极电流 Id 较小时，导通电阻 Ron的波动很严重；当 Id 较大值时，这个波动可以忽略。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAVaOWOMlQPCmiaU8lribxciax6v1IzdsTDMMCP9XhErtrwFaPWLkhFXMfA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAukyI4ia3NaCJP1lT92MnWlcMXoLndM3iaOJzhVkZ7WibYF10oibYKoLkicA/640?wx_fmt=png)

实验表明，在正常的工作状态下，无论漏极电流是何种状态，漏源极间电阻 Rds,（on）保持不变，并且随着Tj 的增加而呈现先小幅度减小而后大幅度增加的趋势，这是由于在不同的温度范围内 ，起主导作用的电阻分别不同，低温（Tth＜-40℃）时导通电阻随温度上升而略有下降，如图 7（b）所示。 因此，Rds,（on）和Tj 之间的关系在高温时可以认为是线性的，并且可以作为监测 SiC MOSFET 结温的一个参数。

Si IGBT 的导通电阻则随集射极的电流的变化而变化，如图 7（c）。 尤其在集射极电流小于 10 A 时，Si IGBT 导通电阻明显抬升，导通损耗随之增大。

3.3 泄漏电流

由于电子隧穿效应，电子有机会在氧化层形成一个潜在的能量势垒产生泄漏电流。 泄漏电流与本征载流子浓度密切相关，SiC 器件的本征载流子浓度相对于 Si 器件更低，但随着温度上升，本征载流子浓度随之上升，使泄漏电流增大。 且离子活化能与温度有正相关系数，因此在高结温下，SiC MOSFET 需要较低的栅极电压 Vgs 给栅极氧化层充电。

Si IGBT 泄漏电流的温度特性如图 8 所示。 漏电流测量应选择栅极电压为-5 V 或+22 V 时的特定值。图 8（a）为 Vg=-5 V 在不同结温下的栅极泄漏电流， 当结温超过允许的工作温度 Tj=125 ℃时，电流栅极泄漏电流随结温增加成指数级增长。

当栅极和发射极接地而集电极偏置，集射极可测得泄漏电流。 如图 8（b）所示，低温下，当集射极电压从 0.8 kV 上升到 1kV，可以保持低于 1 μA 的泄漏电流。 但集射极电压超过 1kV 时，泄漏电流增加 20%。 不同的结温下泄漏电流的指数趋势如图 8（c）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAZmiaGTelghH2rGagIGRBhUicAiaIiaIMou4b3Q5EDiaFeDSVkXTuqkSGIOQ/640?wx_fmt=png)

SiC MOSFET 泄漏电流的温度特性如图9所示。 SiC MOSFET 栅极泄漏电流，如图 9（a），在栅极电压较小 （0～1.5 V）范围内 存在非线性振荡 ，存在小幅值波峰，但当栅极电压较大时，栅极泄漏电流与栅极电压保持稳定的一次线性关系，并具有明显的温度依赖性。 图 9（b）为 Vg=22 V 时栅极-源极正向和负向漏电流 Ig,（off）、栅极充电能量、栅极充电位置Vgcp 与结温之间的关系， 分别可以拟合为指数、线性及二次函数关系。 无论栅极驱动电压处于正向或反向偏置状态，漏电流的幅值均随结温上升而增大，与理论分析一致。SiC MOSFET 漏源极泄漏电流Id,（off）主要由边缘直接隧穿电流和 PN 结反向漏电流构成。 当结温度低于 50℃时，由于本征载流子浓度与温度正相关， 泄漏电流主要是由势垒电流构成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAsazd6y1zn7COEDn52qicWj1kbBtT4NhlsTKVAouNelX7RCdwTa0eERw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAUKDk7fPnFR29R2TVxaMLdxl5GdufEh5ugsLNTvzuJUicFdEUGT8BHZA/640?wx_fmt=png)

当结温度大于 50℃时，泄漏电流主要由反向扩散电流 ，并与本征载体浓度呈平方关系 ， 如图 9 （d） 所示。 小型器件漏极电压和结温都较高，开断泄漏电流将随边缘直接隧穿电流增加而增加。 Id,（off）和 Tj 成指数关系变化。

3.4 输出特性

正常工作状态下， 器件工作在输出特性饱 和区， 在低栅极驱动电压前提下，MOSFET 漏极饱和电流的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeApxklsVXk0xQkqjUKt6SaLnBBISR9WaAvXUiamtTe1cv4I43nJ8biaTwQ/640?wx_fmt=png)

式中，Z 为沟道宽度；由式（18）可以看出，饱和漏电流随栅极电压呈平方关系增大， 即平方率特性；同时，饱和漏电流与阈值电压也呈平方关系 ，表现出变温度特性。

在脉冲模式下测试 SiC MOSFET 和 Si IGBT 输出特性，如图 10 所示。 在低驱动电压 Vg=8V 下，输出电流随温度上升而增加， 但当驱动电压增加，即SiC MOSFET 驱动电压 Vg=24 V、Si IGBT 驱动电压Vg=15 V 时，正常工作状态，将产生一个高温衰减效应，输出电流随温度上升而大幅下降 ，如图 10（a）、（c）所示；考虑 Vg 和 Tj 的影响，为直观分析这一现象， 在 SiC MOSFET 和 Si IGBT 输出特性三维图中截取剖面，在该交界面上，器件输出特性不随温度变化，如图 10（b）、（d）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAU13pZV1xrCaJUVkPM84QVAxX7YG1RawRxhMdJZ63FOkhYR19VJ7QMw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeA0ibOs02NtbFkup9266hl3aJONib44g3Z7R2QzFSJMw8XI942ibFia6YI3A/640?wx_fmt=png)

由图 10（b）可见 ，SiC MOSFET 在低导通 电流下，正向导通电压与结温成二次关系；在较低导通电压下，导通电流在小范围内与结温成一次线性相关。

3.5 体二极管

SiC MOSFET 内部的体二极管其本质是由于漏源极之间存在一个 PN 结，其外特性等价于反并联二极管。 SiC MOSFET 体二极管参数特性与温度关系如图 11 所示。 图 11（a）中，测得 SiC MOSFET 体二极管导通 压 降 远 大 于 同 等 电 压 电 流 等 级 的 Si MOSFET（IXFK20N120P，Vds\_max=1.5 V），这是由于两种材料的MOSEFT 漏源极 之间的 PN 结导通电阻差异较大，其导通电阻主要为 Rdiode=RCH+RA，见图 6。根据式（16）、式（17），二极管导通电阻的表 达式除结构参数外，与载流子迁移率 μ 直接相关，而材料的载流子迁移率（μSi=420 cm²/Vs，μ4H-SiC=115 cm²/Vs，25℃）有较大差异，使得 SiC MOSFET 体二极管导通压降较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAxlnjQpccP3y7tbbUZY3YyjETnIjv4ADib4hQcVjviarqHicwNMnmVWPAg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAEvk9rtcsribvGwOmO81PF6127Fw669w0LgeOnmpVkXf0PlP7k9qia8Gw/640?wx_fmt=png)

在脉冲测试模式下，根据实际工作条件，设置栅极-源极电压 Vgs 从-6 V 至 22 V 可调 ， 可测 得SiC-MOSFET 体二极管导通特性 随温度变化的趋势。实验结果表明，当 MOSFET 处于关断状态（Vgs=-6V），反向偏置体二极管导通压降随结温的上升而下降；但当 MOSFET 处于导通状态（Vgs=22 V），反向偏置体二极管导通压降随温度增加反而上升。

进一步试验发现， 当 Vgs 处于-6 V 至 22 V 的中间电压状态，存在一个过渡区，在该区域中，结温对反向偏置体二极管电流特性几乎没有影响。 二极管的反向偏置电流特性随栅极电压、 漏源极电压、结温变化的三维剖析如图 11（b）所示。 其中粗实线代表临界时的剖面。

由图 11（c）可见，漏源极电压在反向偏置体 二极管电流较小（Id,dio＜2A）时，温度特性不明显，而在体二极管反向偏置电流增大到 5A 以上时，漏源极电压随结温下降明显。

体二极管正向导通电阻 ， 在低温 （-55℃＜Tj＜25℃）条件下，基本不受结温影响，而只与漏极电流Id 相关 ；在高温 （25℃＜Tj＜165℃）条件 下 ，漏极电流影响减弱，而与结温成二次增长。 因此高温下体二极管正向导通电阻可作为估算结温的指标。

根据体二极管属性， 其反向电阻不随工况 改变，而导通电压与结温成二次关系。 基于不同结温下对体二极管特性的分析，并结合充分的结温变化范围，可以为功率器件性能评估及高温寿命预测的建模提供实验数据分析基础。

SiC MOSFET 体二极管的可靠性评估主要是对其反向恢复过程中 dV/dt 过高触发寄生 BJT 闩锁效应进而引起 PN 结雪崩击穿的特性进行分析。 SiC MOSFET 较短的载流子寿命和较薄的外延漂移层都将导致体二极管恢复过程的 dV/dt 较高。 文献［20］证明了过高的开关频率将抬高 dV/dt 及寄生 BJT 的基极位移电流并诱发雪崩击穿， 该现象在高温时更明显。

SiC MOSFET 体二极管的反向恢复特性与温度存在相关性，当温度上升，其反向恢复的电流振荡峰值越大，关断时间更长 ，但进入振荡前的恢复电流波形不随温度变化。 另外，SiC MOSFET 体二极管的反向恢复特性与驱动电阻相关性较大，驱动电阻越小，恢复速度越快但关断电流振荡越明显。 一般采用双脉冲实验进行测试。

SiC MOSFET 体二极管长期工作在正向导通状态下，会使其发生明显的退化现象。 这是由于体二极管长时间承受正向导通电流应力，电子空穴对复合引起的堆叠层错会在 SiC 中急剧增多，这些堆叠层错一方面会增加对载流子的散射作用，降低载流子的迁移率，另一方面也会减少少子寿 命，在禁带中引入能级，从而减小SiC 的有效禁带宽 度 ，增大器件在截止状态下的漏电流。 因此 SiC MOSFET 实际应用中尽量不要使用体二极管续流，而应在其漏源两端并联一个 SiC 结势垒肖特基二极管。

3.6 寄生电容

SiC-MOSFET 的输入电容为栅源极输入电 容Cgs 与栅漏极电容 Cgd 之和，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAApJ9VhQfTmWj4aFGXQ1aicdUL2btdX550tHJHhd2iasrmoRE6jyIRiasQ/640?wx_fmt=png)

栅极和漏极之间的电容由栅电极与 N 漂移区交叠的 JFET 区宽度 XPL 决定， 当正电压施加在漏极上时， 功率 MOSFET 中该 MOS 结构部分处于深耗尽情况，如图 12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAczEPNFc8gAUWbLIwwS2QGLDN66WhyfReiamQ1QCxQRGicEUovmTHMfpg/640?wx_fmt=png)

栅漏电容 Cgd，即反向传输电容 Crss 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeA5vW6KpeqPTyVnA5pRibbxffhWEOx8Dicic4ZgtxTxve3Qtbicc50sQoHAA/640?wx_fmt=png)

式中：WG 为栅极宽度。 结合式（7）、式（8），显然反向传输电容具有变温度特性，随温度上升容值下降。

Crss 和输出电容 Coss 随频率及 Tj 的关系及线性拟合结果，如图 13 所示。 由图 13（a）、（b）的实验结果可见，SiC MOSFET 的反向传输电容 Crss 随着漏-源极偏置电压的增加而减小，与理论分析一致。 当交流频率从 10 kHz 增加到 1MHz 时， 反向传输电容 Crss 随温度而减小明显。 当没有施加漏源极电压时 ，SiC MOSFET 的反向传输电 容 Crss 与温 度 具 有最强 的 线 性 关 系 ，并随 着 温 度 减 小 。 此外 ，在 100kHz 时反向传输电容和温度的线性拟合程度比在 1MHz 和 10 kHz 交流时更高。 除了与结温的关系之外， 输出电容 Coss 的特性与米勒电容相似。 根据实验结果， 当施加 25 V 的漏源极电压时，SiC MOSFET 的输出电容 Coss 与温度具有较强的线性关系 ，并随着温度增加而增强，如图 13（c）所示。 因此，在工况为 25 V 的漏源极偏置电压和 100 kHz 的交流频率 时 ，SiC MOSFET 的输出电容 Coss 可以被用作结温监测的参数，见图 13（d）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeA3kRe5Acmp7zjhhRvJEswND8Pg1GIXdCUw3488aDpwvrlXA56BpotXQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeA8wjSZuUgdK2tpCuXuXTbSJtgklwMOWT2pP1cdo1aSJqSSu8zt0KAKw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAU5kliaBuDVATGAeKSakWhlduvAUsTY5WoLI7JHKCrvaAalpFcqxxjdA/640?wx_fmt=png)

4\. 温度依赖性分析

对上述实验数据结果分别进行关于结温的线性、平方及指数函数拟合，结果如表1所示。 由表可见，拟合函数值与实际实验数据结果具有高度一致性。，对于各项参数的拟合优度，采用可决系数R2 作为度量拟合优度的统计量，R2 的取值范围是［0,1］，R2 的值越接近 1，说明拟合曲线对数据值的拟合程度越好。 在表 1 中，可决系数 R2 最低为0.9749，最高为 0.9991， 可以认定所选择实验参数与温度具有高度相关性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslib0WJqR2aKiaHxCyD2kgoeAiaS3ibRn2Xp18HzfJ0W15KfJT5p4hv8M48Fqvl3KsqM0BGXfLgWtSaUw/640?wx_fmt=png)

根据拟合结果，可以进一步估算变温度参数对于结温的平均灵敏度，即单位温度下变温度参数的平均变化值。 表 1 中，所选取的参数均具有可测范围内的灵敏度，电流、电压、电容、电阻基本为 mA、mV、mΩ 数量级， 其中导通电阻 Ron 温度灵敏度达到 0.4 mΩ/℃， 反向偏置体二极管导通 Rdio 温度灵敏度达到 0.42 mΩ/℃；仅 Ig,（off）为 nA 数量级，但可以通过高精度的测量电路、 放大电路或精密仪器测量。 因此，根据实验数据所得的拟合函数灵敏度，具有实际工程指导意义。

5\. 结论

本文以明确SiC MOSFET 静态性能和寄生参数在宽温度范围内的变化特性为目标， 参照 Si IG-BT，以器件工作机理分析为基础， 准确采集变温度参数实验数据，验证了理论分析及实验结果的一致性。 结论以下：

（1）在宽结温范围内，SiC MOSFET 静态性能的温度依赖性与 Si IGBT 相比更为明显，极强的温度敏感性为 SiC MOSFET 器件结 温的准确测量提供依据。

（2）高温时，SiC MOSFET 具有极小的导通电阻、泄漏电流及高频反向导通电容， 确保低导通损耗和高开关频率， 体现了 SiC MOSFET 在高温高频下的优越性能。

（3）基于实验数据辨识，特征参数的温度灵 敏度均在实际可测量范围内，证实了变温度参数对于器件运行状态监测的可行性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)