# 基于 Si IGBT与 SiC MOSFET并联的新型混合器件特性解析及对比研究


> 原文地址: [https://mp.weixin.qq.com/s/3rTfU1p83FHQlFxekB3GxA](https://mp.weixin.qq.com/s/3rTfU1p83FHQlFxekB3GxA)

文章来源：太阳能学报

作者：朱梓贤，涂春鸣，肖标，郭祺，肖　凡，龙柳（国家电能变换与控制工程技术研究中心（湖南大学），长沙 410082）

摘　要：对由SiC FET与Si IGBT并联组成的新型混合器件（HY\_F）开展研究。首先，分析HY\_F的基本结构与工作原理，并搭建HY\_F的导通损耗模型、开通损耗模型以及关断损耗模型。其次，基于混合器件的仿真模型，分析HY\_F与传统Si IGBT/SiC MOSFET混合器件（HY\_M）在不同额定电流等级下损耗与成本的优劣势。仿真结果表明，当额定电流为较小（15 A）时，HY\_M能以较低的成本实现更低的损耗；混合器件在额定电流较大（25 A、40 A）时，HY\_F能以更低的成本实现更低的损耗。最后，通过实验验证结论的正确性。

关键词： Si/SiC混合器件；SiC MOSFET；Si IGBT；SiC FET；损耗模型

0.　引　言

目前大部分电力电子变换器件是基于传统硅（silicon，Si）半导体材料构造的，但由于 Si 材料固有性能限制，导致变换器存在损耗大、开关频率低以及功率因数低等问题。而第三代半导体材料碳化硅（silicon carbide，SiC）具有十分优异的性能，在击穿场强、禁带宽度、载流子饱和漂移速度和热导率等多方面具备优势，能有效提高电力电子变换器的效率和功率密度。但由于目前 SiC 器件的工艺技术尚未成熟以及封装技术的发展滞后，导致其芯片载流能力不足、价格昂贵。基于此，相关研究学者提出将大功率的 Si 器件和小功率的SiC 器件并联组成 Si/SiC 混合器件以实现两种功率器件性能和成本的折中。Si/SiC 混合器件为提升器件性能提供了新的思路，在风电、光伏逆变器与新能源汽车等重要领域具有广泛的应用前景。

Si/SiC 混合器件的主流器件类型包括 Si IGBT 与常闭型SiC 器件混合以及 Si IGBT 与常开型SiC器件混合两种。Si IGBT 与 SiC 常闭器件混合的主流研究对象为 Si IGBT/SiC MOSFET 混合器件（HY\_M）。文献［14］提出 HY\_M 的多种开关模式，并通过实验对比了不同开关模式下 HY\_M 的优劣势；文献［15］研究了当SiC MOSFET与Si IGBT的额定电流比为 1∶2 时，HY\_M 凭借较低的成本实现较优的性能；文献［16］将 HY\_M 器件应用于 T 字型三电平变换器，实验结果表明相较于相同电流等级Si IGBT组成的变换器，由HY\_M 组成的变换器效率提高近2%。而SiC MOSFET存在栅氧层工艺质量 低 和 阈 值 电 压 不 稳 定 等 问 题，影 响 传 统 混 合 器 件HY\_M的长期运行可靠性。

Si IGBT与SiC常开型器件混合的主流研究对象为Si IGBT/SiC JFET 混合器件。文献［19］通过实验证明了6.5 kV Si IGBT/SiC JFET 混合器件与单一Si IGBT相比，能降低 70%以上的开关损耗，成本增加约 70%。但 SiC JFET 属于常开型器件，在开关过程中容易误导通，进而提高了 Si IGBT/SiC JFET 混合器件在工程应用中失效的风险。因此，SiC型常开、常闭器件的固有局限严重制约了 Si/SiC 混合器件性能的进一步优化。为进一步提升 Si/SiC 混合器件的性能和可靠性，文献［20］通过高压 SiC JFET 与低压 Si MOSFET 相结合成共源共栅结构，将常开型 SiC JFET 转换为常关型 SiC FET 器件，并证明了 SiC FET 兼容低压 Si MOSFET 的传统驱动电路，控制复杂度降低；文献［21］提出Si IGBT 与 SiC FET 并联组成的混合器件（HY\_F），研究结果表明 HY\_F 与 Si IGBT/SiC JFET 混合器件相比，开关损耗得到有效降低。

上述研究证明了SiC MOSFET与Si IGBT 并联组成的新型混合器件的可行性，为 Si/SiC 混合器件的应用提供了多元化的选择需求，更好地满足了混合器件低成本与高效率兼顾的需求，但并未对新型混合器件 HY\_F 的损耗模型开展详细研究。同时，现有研究尚未将不同功率等级下传统混合器件 HY\_M与新型混合器件 HY\_F 的损耗与成本进行对比，缺乏对面向实际工程应用的 Si/SiC 混合器件类型选择的研究。基于此，本文首先分析新型混合器件 HY\_F 的基本结构与工作原理，并结合混合器件典型门极驱动模式，搭建 HY\_F 的导通损耗模型、开通损耗模型与关断损耗模型。其次，基于 LTspice 仿真软件分析不同额定电流等级下新型混合器件 HY\_F 与传统混合器件 HY\_M 在导通损耗、开通损耗、关断损耗以及成本等性能指标上的差异，得到适配于不同额定电流等级的 Si/SiC 混合器件最优方案。最后，本文基于所搭建的实验平台对仿真结论进行验证。

1\. HY\_F基本结构与开关特性

1.1 HY\_F基本结构与工作原理

HY\_F 基本结构如图 1a 所示，HY\_F由Si IGBT与SiC MOSFET并联组成，其中SiC FET由 高 压SiC JFET与 低 压Si MOSFET以共源共栅结构组成。图 1b 所示为混合器件常用的开关模式，混合器件通过 SiC FET 先开后关以实现Si IGBT的软开关，进而降低混合器件的损耗。由于SiC MOSFET的开通速度大于Si IGBT，开通延迟时间Ton\_delay常设为0，此时Si IGBT近似为零电压开通。本文后续研究采用此开关模式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuV0HIyxfYQMQibMxJGWttjsIYMqeWRBHJD6ekrElddW9G0QTY7RvuWCQ/640?wx_fmt=png)

在混合器件HY\_F的开通过程中，SiC FET 与Si IGBT的驱动电压由低电平转换为高电平。HY\_F内SiC MOSFET的门极电 压 先 上 升 至Si MOSFET的 门 极 开 启 电 压 时 ，低 压Si MOSFET开通。当低压Si MOSFET 的漏源极电压值降低至SiC JFET 的门极开启电压时，SiC JFET沟道打开，其两端压降开始迅速下降，SiC FET 开始导通。随后Si IGBT 的门极电压大于其门极开启电压，Si IGBT 开始导通。HY\_F 在开通过程的电路模态如图 2 所示。在混合器件 HY\_F 的关断过程中，Si IGBT 门极驱动电压相较于 SiC FET 提前一个关断延迟时间Toff\_delay变为低电平，SiC MOSFET 在Toff\_delay内单独额外导通，以实现Si IGBT软关断。当 HY\_F内低压Si MOSFET 门极驱动电压由高电平转为低电平，Si MOSFET开始关断。低压Si MOSFET的漏源极电压值升高至SiC JFET 的门极开启电压时，SiC JFET承受母线电压迅速关断，随后 HY\_F完全关断。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuRAWcXAaJAHbbv3DusZxIjEELfCdeJLxXBhbCV3vt2QCO8GnOgeQ4HQ/640?wx_fmt=png)

1.2 HY\_F损耗模型搭建

1.2.1　导通损耗模型

新型混合器件HY\_F结合了Si IGBT与SiC MOSFET两者的导通特性，其导通过程可分为两个阶段。当负载电流较小时，HY\_F 的导通压降小于Si IGBT的拐点电压 Uknee，此时负载电流全部流经SiC FET，Si IGBT不承担负载电流。当负载电流较大时，导致HY\_F 的导通压降大于Si IGBT的拐点电压Uknee，此时 SiC MOSFET 与 Si IGBT 共同承担负载电流。因此当HY\_F的导通压降小于Si IGBT的拐点电压Uknee 时，由于Si IGBT 处于关断状态，负载电流全部流经SiC MOSFET。混合器件的导通损耗全部由SiC MOSFET产生，可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcufcuCbMBoJw4ukNPJrFySrHLyy3q54MVZuibiaXLF2Oyb737lbicgXVGrQ/640?wx_fmt=png)

式中：Ec\_total、Ec\_FET和 Ec\_IGBT——混合器件总导通损耗、SiC MOSFET 导通损耗和Si IGBT 导通损耗；IFET——SiC FET 导通电流；RFET——SiC FET 导通电阻；RIGBT——Si IGBT 导通电阻；IF——流经混合器件的负载电流；Iknee——混合器件导通压降为Si IGBT的拐点电压Uknee 时对应的负载电流。

随着负载电流 IF 的逐渐增大，当 HY\_F 的导通压降大于Si IGBT 的拐点电压时，此时 Si IGBT 与 SiC MOSFET 共同承担负载电流，SiC MOSFET 与 Si IGBT 的分流特性由各自导通电阻大小决定，可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu5s7YXDfcz3UzNfp6rDialul0tyvUPYB6UmbicXeUCv7Y6yYJeichnD15w/640?wx_fmt=png)

因此，当负载电流 IF 大于 Iknee 时，SiC FET与Si IGBT产生的导通损耗分别表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcucDbD6vpT015mu8lbOyqexY7FlSOXEG1muibUOUr8dEDJtmYMz54k9ww/640?wx_fmt=png)

综合上述分析，HY\_F的总导通损耗 Ec\_total 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuUEdZxSyQPGsjdaDlf5tQHsgdnVKQBoAB1ibr27Iv05SsDpmics3kYFCw/640?wx_fmt=png)

1.2.2  开关损耗模型

新型混合器件 HY\_F 的简化开关过程如图 3 所示。首先HY\_F 在开通阶段（t0—t1）内产生的开通损耗 Eon\_total 如式（8）所示。其次对混合器件 HY\_F 在关断阶段（t2—t3）内产生的关断损耗进行分析。由于 Si IGBT 先关断，SiC FET 在关断延迟时间 Toff\_delay 内单独导通，将产生额外的导通损耗 ΔEcond\_FET。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuAPNRrJXqGDh7L9ydDXpxtzGbenjopGp1P6NkkylalM3xXJDajLL5jw/640?wx_fmt=png)

Si IGBT 在 SiC FET的导通压降下实现软关断，可显著减小由Si IGBT拖 尾 电 流 引 起 的 关 断 损 耗 。 在 关 断 延 迟 时 间Toff\_delay 结 束 时 ，SiC FET承 担 母 线 电 压 产 生 的 关 断 损 耗Eoff\_FET 如式（9）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuxqWQouUyMByuI1DdCaQqN8ngict8NSwQWsASSQzKExHvudlTIJMUbyQ/640?wx_fmt=png)

式中：IFET和IIGBT——流经SiC MOSFET和 Si IGBT 的负载电流；IF——流经混合器件的负载电流；UF——混合器件的两端压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuEXIianJ8hibLmABcME3xZ0LGhOSlsFz8kMqWfg8j46EJe9JYXp1M23TA/640?wx_fmt=png)

2\.  HY\_F与HY\_M综合特性对比

为探究不同电流水平下新型混合器件 HY\_F 与传统混合器件 HY\_M 在导通损耗、开关损耗以及成本上的优劣势，本文基于LTspice 软件对额定电压 1200V 下 3 个额定电流等级（15、25 和40 A）的Si/SiC混合器件进行仿真分析。Si/SiC 混合器件的额定 电 流 为 大 功 率 IGBT 的 额 定 电 流，且 Si IGBT、SiC MOSFET 与 SiC FET 均采用 TO\-247\-3L 封装，与目前混合器件主流封装形式一致。新型混合器件 HY\_F 与传统混合器件HY\_M 的型号信息如表 1 所示。因此，本节在相同测试条件下分别对新型混合器件 HY\_F 与传统混合器件 HY\_M 的导通损耗、开通损耗与关断损耗展开仿真分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuZbJkRzbCCry3VTSOrMqpZ8OHFzYyDR2w3CaQS2HqvARKhm7MzJBtUg/640?wx_fmt=png)

2.1  导通损耗对比

新型混合器件HY\_F与传统混合器件 HY\_M 在导通仿真过程中保持驱动电压（+15V/-5V）、Si IGBT驱动电阻（10Ω）、SiC器件驱动电阻（40 Ω以及器件结温（25 ℃）等仿真参数一致，不同额定电流等级的 HY\_F 与 HY\_M 的导通仿真结果如图 4 所示。由图 4 可知，当 Si/SiC 混合器件的额定电流为 15A 时，在同一负载电流水平下，HY\_M的导通压降低于HY\_F 的导通压降。因此，相较于HY\_F，HY\_M 的导通电阻更小，导通损耗更低，HY\_M 的导通特性要优于 HY\_F。同理可得，当 Si/SiC 混合器件的额定电流为25A 与40A 时，在同一负载电流水平下，HY\_F 的导通电阻更小，HY\_F 的导通损耗低于 HY\_M 的导通损耗，HY\_F 的导通特性更优。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuEqtul9o3TfwKquKHpaZj0Mq9jRGFsiawpo8gHgOJP8bHhrMjz4m7gJw/640?wx_fmt=png)

鉴于上述不同额定电流等级下新型混合器件HY\_F与传统混合器件HY\_M的导通损耗差异，在 Si/SiC混合器件应用中需根据负载电流的大小来选择适合的混合器件类型，以降低 Si/SiC 混合器件的导通损耗，进而提高电力电子装置的运行效率。

2.2　开通损耗对比

新型混合器件HY\_F与传统混合器件 HY\_M在开通仿真过程中保持驱动电压（+15V/-5V）、母线电压（400V）、Si IGBT驱动电阻（10 Ω）、SiC器件驱动电阻（40 Ω）以及开通延迟时间（0µs）等仿真参数一致，不同额定电流等级的HY\_F与HY\_M的开通损耗如图5所示，其中开通损耗差值ΔEon为HY\_M 的开通损耗减去 HY\_F 的开通损耗。由图 5可知，当 Si/SiC 混合器件的额定电流为15A时，在全负载电流区间内，HY\_M的开通损耗都小于HY\_F的开通损耗，且两种类型的混合器件损耗差值随负载电流的增加而增大。而当 Si/SiC混合器件的额定电流为25A 与40A 时，在全负载电流区间内，HY\_F 的开通损耗都小于HY\_M的开通损耗，且两种类型的混合器件损耗差值随负载电流的增加而增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu8zxNQ9Da1S8dV9SiauGm45UI6icsvJuVL2WCH71CBcPcWjgNpJBTYVnw/640?wx_fmt=png)

2.3　关断损耗对比

新型混合器件HY\_F与传统混合器件 HY\_M 在关断仿真过程中保持驱动电压（+15V/-5V）、母线电压（400V）、Si IGBT 驱动电阻（10 Ω）、SiC 器件驱动电阻（40Ω）以及关断延迟时间（1.2µs）等仿真参数一致，不同额定电流等级的HY\_F 与HY\_M的关断损耗如图6所示，其中关断损耗差值ΔEoff 为HY\_M的关断损耗减去HY\_F的关断损耗。由图6可知，Si/SiC 混合器件的额定电流为15A 时，当负载电流小于10A，HY\_F 与 HY\_M 的关断损耗近似相等；当负载电流大于10A且小于15A，HY\_Y 的关断损耗小于 HY\_M 的关断损耗，且两种类型的混合器件损耗差值随负载电流的增加而增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuyWjqZVqvHvwnnvaUk3zOSFT5BRWO6f5ibxsWojUuicJeZN6f6DyPaSUg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu13ZeVIsy7Io53MMjB3wJvej07dlNvAfAtFLRXWp8gw4NY9JSMTT5gQ/640?wx_fmt=png)

在Si/SiC混合器件的额定电流为25A与40A时，在全负载电流区间内，HY\_F的关断损耗都小于HY\_M的关断损耗，且两种类型的混合器件损耗差值均随负载电流的增大而增大。因此，结合图5和图6可知，当Si/SiC 混合器件的额定电流为15A时，HY\_M总开关损耗小于新型混合器件 HY\_F，HY\_M在开关频率高的应用场景更具优势；而当 Si/SiC混合器件的额 定 电 流 为 较 大（25、40A）时 ，HY\_M总 开 关 损 耗 大 于HY\_F，HY\_F在开关频率高的应用场景更具优势。Si/SiC 混合器件在应用中需要根据负载电流大小来选择合适的混合器件类型，以降低混合器件的开关损耗，进一步提升电力电子装置的效率。

2.4　混合器件综合对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcum9kPFUUSEA6BqjBss98n67icEclmW5ZhF59GxOU7bARyVaJLuaVTUpQ/640?wx_fmt=png)

由上述分析可知，不同电流等级的 HY\_F 与 HY\_M 在导通、开通损耗与关断损耗均存在明显差异。因此，为了综合比较 HY\_F 与 HY\_M 在不同额定电流水平下损耗与成本的优劣势，本文分别对上述 3 种额定电流等级的混合器件综合特性进行研究。混合器件在开关频率为 20 kHz、占空比为0.5 情况下，不同额定电流等级的 Si/SiC 混合器件总损耗 Etotal与成本对比分析结果如图 7 所示。由图 7 可知，Si/SiC 混合器件在额定电流为 15 A 时，HY\_M 的总损耗相较于 HY\_F 减少 4.2%，成本相对减少 13.7%；而在额定电流 25 A 与 40 A时 ，HY\_F 的 总 损 耗 相 较 于 HY\_M 分 别 减 少 17.01% 与23.4%，同时 HY\_F 成本分别相对减少 13.8% 与 23.9%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuJ5m06xrtib44Eju9AFjf5HGB3smKozFj2M3rb5TR0bLucpORr6ciaxyg/640?wx_fmt=png)

此外，本文进一步在 LTspice 软件中搭建基于混合器件的 DC\-DC BUCK 变换器仿真模型，如图 8 所示，对基于传统混合器件 HY\_M 和新型混合器件 HY\_F 的变换器进行工作效率上的对比。图 8 中，UDC 表示直流母线电压，L 表示输出滤波电感，C 表示输出滤波电容。混合器件由 SiC 器件（S1）和Si 器件（S2）并联组成，二极管 D 采用 C4D10120D。软件仿真参数设置如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu56ic0gNRiaia8c6QVKxkgtZ1Q5LfPu8TQdJ1xvia35bKRt1tbzd0OYO7zg/640?wx_fmt=png)

基于所搭建的 DC\-DC BUCK 变换器仿真模型，分别测试3 种额定电流等级（15、25 与 40 A）下的 Si/SiC 混合器件 DCDC BUCK 变换器的效率，如图 9 所示。其中，基于 HY\_M（15A）和 HY\_F（15 A）的 DC\-DC BUCK 变换器的输出功率为 3kW，基于 HY\_M（25 A）和 HY\_F（25 A）的 DC\-DC BUCK 变换器的输出功率为 5 kW，基于 HY\_M（40 A）和 HY\_F（40 A）的DC\-DC BUCK 变换器的输出功率为 8 kW。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuJpnvqNxbT7XXdBzxrZwWMX8mUoibS6AibNPpzN3x3kEp8Lqq4aibOzPXw/640?wx_fmt=png)

由图 9 可知，当 DC\-DC BUCK 变换器输出功率为 3 kW时，与 HY\_M（15 A）相比，基于 HY\_F（15 A）的 DC\-DC BUCK变换器工作效率降低了 0.03%。当 DC\-DC BUCK 变换器输出功率为 5 kW 时，与 HY\_M（25 A）相比，基于 HY\_F（25 A）的 DC\-DC BUCK 变换器工作效率提高了 0.15%。当 DC\-DCBUCK 变换器输出功率为 8 kW 时，与 HY\_M（40 A）相比，基于 HY\_F（40 A）的 DC\-DC BUCK 变 换 器 工 作 效 率 提 高 了0.23%。因此，当 Si/SiC 混合器件额定电流较低（15 A）时，HY\_M 在成本和总损耗方面更具优势；而在额定电流较高（25、40 A）时，HY\_F 在成本和总损耗方面更具优势。本文研究结论可为不同负载电流水平下混合器件类型选择提供理论依据与指导。

3.　实验验证

3.1　实验平台搭建

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcudKHqJDORcHIT0U0LQRicUvjC5rKfKOnhzxhibXGiaq5tFy78FlANVE62g/640?wx_fmt=png)

为验证 2 节中不同混合器件导通损耗的仿真结论，本文搭建如图 10 所示的混合器件导通损耗测试平台。实验平台通过直流电源和电子负载的串联，以实现恒定的导通电流。首先通过开关 S1 先导通，让待测的混合器件一直处于关断状态，以实现电路测试电流的恒定。然后待测的混合器件导通并关断开关 S1，测量恒定电流下混合器件的导通压降。同时利用恒温箱保持混合器件的结温恒定，避免环境温度对实验结果产生干扰。为验证 2 节中不同混合器件开关损耗的仿真结论，本文搭建如图 11 所示的混合器件双脉冲测试平台。图 11 中，Udc 为双脉冲测试平台的母线电压，C 为母线电容，L为负载电感；待测的混合器件为 HY\_M 和 HY\_F，续流二极管D 为 Gree 公司的 C4D10120D。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcux3q9FjZzyUB43xQ0jkolFG5P52PMDAL6nKicWKgBIvrDYBjN3FEicKTg/640?wx_fmt=png)

本文选取表1中额定电流为40A的两种Si/SiC混合器件进行验证。器件具体型号为UnitedSiC公司1200V/25A SiC FET（UF4C120053K3S）、Gree 公 司1200 V/24A SiC MOSFET（C2M0080120D）和Infineon公 司1200V/40A Si IGBT（IGW40T120），其中SiC FET与SiC MOSFET 具有相同的额定电压和近似的额定电流。HY\_F 与 HY\_M 在实验过程中保证驱动电压、驱动电阻以及母线电压等参数一致，Si/SiC混合器件的双脉冲测试平台的主要参数如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuicG2E08aNSZSSa9rHZUKCZiblUPZo1sNXm0D7xbz6Z9bWZh7q1QKVwcA/640?wx_fmt=png)

3.2 HY\_F与HY\_M损耗实验验证

3.2.1　导通损耗验证

HY\_M 和 HY\_F 分别在驱动电压为 15 V、结温 25 ℃下的V\-I 曲线如图 12 所示。由图 12 可知，Si/SiC 混合器件在全负载工作域下，传统混合器件 HY\_M 的导通压降一直大于新型混合器件 HY\_F。因此，在同一负载电流水平下，HY\_M 的导通损耗高于 HY\_F。混合器件导通损耗实验结论与 3 节中仿真结论一致，验证了仿真结果的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuPAepGGxRG1rGQ66rRGibeHFBXuib9PcJGEWb1MaQv4wXOgTFiaE0GGm5Q/640?wx_fmt=png)

3.2.2　开通损耗验证

在负载电流 40 A 时，HY\_F 开通过程中器件两端的压降（UF）与流经的电流（IFET、IIGBT）波形如图 13 所示。SiC FET与 Si IGBT 门极驱动信号同时为高电平，但由于 SiC 器件与Si 器件开关速度差异，SiC FET 先开通承担负载电流，混合器件两端电压开始下降，随后 Si IGBT 才开始导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuTNcu5x5e5mVMdt74NSQPuvTo3FJNiaACJCsw9OSYHljwdJ7RjmDnVibA/640?wx_fmt=png)

基于Si/SiC双脉冲实验平台，HY\_F与HY\_M 在负载电流为5~40A 的开通损耗如图 14 所示。由图 14 可知，在额定电流范围内，HY\_F的开通损耗相较于 HY\_M 最大降低52.9%，最小降低 39.5%。两种混合器件的开通损耗均随着负载电流的增大，且 HY\_F 开通损耗一直小于HY\_M，实验结果与仿真一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcurbmYWGtkeYgIj6icwVQ8XuoxkKgFDp99BXRrbK6YRmnsNsnWLzSG3Pw/640?wx_fmt=png)

3.2.3　关断损耗验证

在负载电流 40 A 时，HY\_F 关断过程中器件两端的压降（UF）与流经的电流（IFET、IIGBT）波形如图 15 所示。由于混合器件关断延迟Toff\_delay 的存在，Si IGBT 在混合器件导通压降下首先关断，流经 Si IGBT 的电流全部换流到SiC FET，SiC FET 在关断延迟时间内额外导通，产生额外导通损耗。当Toff\_delay 结束时，SiC FET 承受400V 高压开始关断，混合器件两端电压上升至母线电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuJqsow0CibG59VLJ9cj9iazWCk56TsN48k0WALmzQicul2Bge5YjgpqH1g/640?wx_fmt=png)

基于Si/SiC双脉冲实验平台，HY\_F与HY\_M在负载电流为5~40A的关断损耗如图 16 所示。由图 16 可知，在额定电流范围内，HY\_F 的关断损耗相较于 HY\_M 最大降低31.7%，最小降低 11.6%。两种混合器件的关断损耗均随负载电流的增大，且 HY\_F 关断损耗一直小于 HY\_M，实验结果与仿真一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuEqwyJOibibk0OibdFEbHNR1VIOTrNScMvLiaefvFFkiasILknaEDEL0ZFpg/640?wx_fmt=png)

两种混合器件HY\_F 与 HY\_M 在开关频率 20 kHz、占空比 0.5 以及额定电流40A条件下的总损耗对比分析如表 4所示。可知，HY\_F 的总损耗低于HY\_M，与 3节仿真结论一致，验证了仿真结论的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuNA3BciaqfJgWObaJiaRFhM8ltHem2EzgNpGBhRFRGlzVHEy1WvLlrBZg/640?wx_fmt=png)

4.　结 论

本文对SiC FET与Si IGBT并联组成的新型混合器件HY\_F 进行了详细研究，搭建了新型混合器件 HY\_F 损耗模型，并通过仿真与实验研究了不同额定电流等级下新型混合器件 HY\_F 与传统混合器件 HY\_M 在损耗与成本方面的优劣势。具体结论如下：

1）基于Si/SiC混合器件典型门极驱动模式，本文对新型混合器件HY\_F的基本结构与工作原理进行了分析，并搭建了新型混合的导通损耗模型、开通损耗模型以及关断损耗模型。

2）仿真结果表明HY\_F与HY\_M在不同额定电流等级下总损耗存在明显差异。当额定电流为15A时，传统混合器件HY\_M能以更低的成本实现更高的效率；当额定电流为25A与40A时，新型混合器件 HY\_F 能以更低的成本实现更高的效率。此外，基于Si/SiC混合器件的实验平台充分验证了额定电流40A时两种混合器件仿真结论的正确性。

3）受限于SiC FET工艺技术的发展，SiC FET相对于现有传统器件主要缺点为商业化额定电流等级覆盖窄。但针对低压中等功率的应用场景，HY\_F可作为混合器件的新选项。

**说明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)