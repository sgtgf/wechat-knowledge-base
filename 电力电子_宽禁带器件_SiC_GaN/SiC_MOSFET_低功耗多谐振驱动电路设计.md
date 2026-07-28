# SiC MOSFET 低功耗多谐振驱动电路设计

原创 金爱娟, 朱 婷 SiC碳化硅MOS管及功率模块的应用 2025-03-19 11:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/MyZ1C8utSYX6nQvnHDC9jg](https://mp.weixin.qq.com/s/MyZ1C8utSYX6nQvnHDC9jg)

文章来源：电子元件与材料 

作者：金爱娟, 朱 婷, 李少龙(上海理工大学 光电信息与计算机工程学院, 上海 200093)

摘 要: 为了解决 SiC MOSFET 在高频电力电子应用中的高功率损耗问题, 并优化其开关性能, 提出一种多谐振栅极驱动电路。 该驱动电路利用能量回馈的思想, 设计一个多谐振滤波网络进行高阶谐波滤波和回收输入电容中的能量, 通过控制三极管的通断将栅源电压钳位在+15 V 和-5 V 的期望电压, 旨在减少驱动电路从电源中获取能量, 避免误触发问题, 以及提高 SiC MOSFET 开关过程的效率。 LTspice 仿真结果显示, 与传统栅极驱动电路和其他普通谐振栅极驱动电路相比, 所提多谐振栅极驱动电路的功率损耗分别降低了 50%和 30%, 同时加快了 SiC MOSFET 的开关速度。 所提驱动电路具有一定的实用价值, 有利于电力电子行业的发展。

关键词: 碳化硅(SiC); MOSFET; 高频; 多谐振; 驱动; 钳位

0\. 引言

近年来, 基于碳化硅( SiC) 和氮化镓( GaN) 的宽带隙( Wide Band Gap, WBG) 材料, 相较于硅( Si) 基器件, 具有低阻抗、 高频率、 耐高温等优势, 在高开关频率的电力电子应用中发挥着重要的作用。 目前, 碳化硅基金属氧化物半导体场效应晶体管( MetalOxide Semiconductor Field Effect Transistor, MOSFET)广泛应用于电动汽车主逆变器( Inverter) 、 车载充电单元( OBC) 及 DC/DC 转换器 。 随着 MOSFET 技术的不断更新, 对电力 MOSFET 的性能要求愈发严苛,主要体现在工作频率和工作电压的显著增加。 为了提高 MOSFET 的工作频率并降低开关损耗, 驱动电路的设计受到了研究者们的广泛关注。

为了降低栅极驱动电路的功耗, Tabisz 等最早提出了一种采用谐振技术的栅极 驱动电路, 可实现MOSFET 的快速充放电, 提高整体驱动速度。 但是,在谐振期间, 电压在输入电容上的波动难以控制。 为了解决该问题, Chen 等提出在谐振周期结束时使用额外的钳位装置, 利用钳位二极管将栅源电压钳位至Vcc。 Ye 等利用类似的钳位功能, 把 MOSFET 的本征二极管作为钳位器件以降低总功耗。 然而, 在高开关频率下, 阻塞状态下的 SiC 基器件的阈值电压水平降低, 可能会导致显著的功率损耗。 因此, 在开关过程的关断阶段, 栅源端需要一个负电压。 为了实现该功能, Fujita 等利用四个 MOSFET 开关管在 Vee和-Vee的电压之间提供栅极电压转换。 但在实际操作中, MOSFET 的输入电容在一个比通过栅极电阻放电时更高的栅极电压下充电, 导致充电阶段比放电阶段需要更多的能量 。 针对此问题, Swamy, Phukan等提出利用 Vcc和-Vee( Vcc 不等于 Vee ) 的双极电压来 降 低 总 功 耗。 Chennu 等提 出 由 准 方 波 驱 动MOSFET 的谐振栅极驱动技术, 该准方波由方波的谐波产生。 然而, 这项技术存在一个局限, 即在回收阶段, 由于寄生电阻或电感的存在会导致能量损失, 并且设备上的压降无法恢复。 因此, Vgs 可能会下降到所需的电压水平以下, 并造成更多的能量损失。

尽管现在已经有许多针对 MOSFET 的驱动研究,但其在高频应用中的功率损耗仍然不容忽视。 为了使SiC MOSFET 在高频电力电子应用中充分发挥优势,低功耗的栅极驱动电路是重要的研究方向。 分析上述文献可知, 可以通过回收或循环利用能量的方法来减少驱动电路从电源中获取的能量, 从而减少功率损耗。

本文提出一种新型的由小信号双极结型晶体管( BipolarJunction Transistor, BJT) 、 小信号二极管、 低功率电阻和小功率电容组成的用于 SiC MOSFET 的多谐振栅极驱动电路。 利用能量回馈的思想, 设计了一个多谐振网络进行滤波和回收 Ciss 中的能量。 通过控制三极管的通断, 将栅源电压钳位在 + 15 V 和 - 5 V 的期望电压。 旨在降低栅极驱动电路的功率损耗, 避免误触发问题, 并提高 SiC MOSFET 的开关速度。

1\. 多谐振栅极驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318Vj0m7XydNht3T5lutHXsqY4Eib2MGMK1AWwSu7AUY8pAMcrKROpyLKw/640?wx_fmt=png)

图1( a) 是一个传统的栅极驱动电路( ConventionalGate Driver, CGD) 。 两个 MOSFET 的 S1、 S2 和直 流电源 Vcc通过栅极电阻 Rg 驱动 MOSFET 的 Q, 输入电容 Ciss = Cgd +Cgs。 图 1( a) 所示的 CGD 电路的功率损耗可以表示为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318gsjeE4SzfyHJP6dG5AlBeqDsBP86iaorKNxdrfjgibM3aMicVWKYia1ibMg/640?wx_fmt=png)

式中: fs 为开关频率; Vcc 为电源电压; Qg 为 MOSFET的总栅极电荷。 根据式(1), 在高开关频率应用中, 栅极驱动电路的功耗极大。 降低栅极驱动功耗的一种常用策略是使用谐振栅极驱动技术。 图 1( b) 给出了一般的谐振栅极驱动电路( Resonant Gate Driver, RGD) 。电路中一个额外的谐振电感 L 与 MOSFET Q 串联, 与输入电容 Ciss共振, 以降低栅极电阻 Rg的能量损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318pEhP2Rnv6ehyyq3PdeibTu6MnFldYrDct6R9K9jF0DGqXyibww5aOsqQ/640?wx_fmt=png)

本文提出的多谐振栅极驱动电路如图 2 所示, 谐振元件 Lr、 Lt、 Ct、 Lf 和 Cf 形成一个多谐振网络, 作为方 波 的 基 频、 三 次 和 五 次 谐 波 的 滤 波 器, 并 在MOSFET 的 S1 栅 极 产 生 一 个 准 方 波 驱 动 信 号。 Rg 是SiC MOSFET 的 S1栅极电阻, 输入电容等于栅漏端电容与栅源端电容之和, 即 Ciss = Cgd +Cgs。 R1、 D2 和 Q2用于在导通阶段时对栅极电压进行钳位, R2、 D4 和 Q4则用于关断阶段的栅极电压钳位。 R4、 C2 和 R5 的组合产生 BJT 的 Q1和 Q3 的导通信号, 而 R3 和 C1 的组合为BJT 的 Q2和 Q4提供延时导通信号。 为了实现输入和输出电路之间的电气隔离, 维持电路的稳定性和可靠性,驱动电路的方波信号可以利用光耦合器来产生。

1\. 1 工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If3181xlhQ6mV6QUkCuQqcz8zIkzziabUbsDT0lWDjQNgFzpqycceCK0l5SA/640?wx_fmt=png)

所提多谐振栅极驱动电路中栅源电压 Vgs 波形和双极结型三极管( BJT) Q1 ~ Q4 的开关转换波形如图 3 所示, Q1 ~ Q4按顺序依次导通和关断。 电路在每个开关周期内的工作状态可分为四个阶段, 分别对应了四种电路模态, 图 4 给出了这四个阶段的等效电路图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If3184PqqrM521PUB1eEq3W2YPD21fgu8M8Z5DKNvciaemGTTy5mqyzn6gfw/640?wx_fmt=png)

使用的 SiC MOSFET 需要-5 V 和+15 V 作为其可靠开关的栅极电压。 因此, Vee = -5 V, Vcc = 15 V。 假设最初主开关管 “ S1” 处于断开状态, Q4 处于导通状态, 因此 Vgs = -5 V, Ciss具有初始能量。

阶段 1( t1 -t2 ) : 在 t1 时刻, 开通 Q1, 启动导通过程, 使谐振网络和输入电容 Ciss之间进行能量传递, 电路的电流路径如图 4( a) 中实线所示, Ciss 的电压开始从-5 V 过渡到 15 V。 在这个阶段, 所有其他开关都保持关断状态。 实际上, 由于寄生元件、 BJT 和二极管正向压降造成的能量损失, 谐振后的栅源电压 Vgs 小于15 V。

阶段 2( t2 -t3 ) : SiC MOSFET 的理想通态栅极电压为 15 V。 为了补偿电压损失 ΔVgs1, 应在开关转换后钳位栅源端电压, 这可以通过关闭 Q1并在 t2时打开 Q2来实现, 当前路径在图 4( b) 中用实线表示。 这个阶段类似于 CGD 电路, 但只有补偿 ΔVgs1 所需的能量是由Vcc提供。 充电完成后, 通过 R1、 D2 和 Q2 将 Vgs 钳位到15 V。 此时 BJT Q2处于关闭状态的边缘, 因为基极和发射极两端的电压接近。 当 Vgs 低于 15 V 时, Q2 进入导通状态, 随后进入钳位阶段。 因此, 所提出的 RGD电路通过立即充电并将栅极端子钳位到 15 V 以避免误触发。

阶段 3( t3 -t4) : 关断过程与导通过程相似。 如图 4( c) 所示, 在 t3时刻, 开关 Q3导通, 进入 SiC MOSFET的关断阶段, 能量开始从 Ciss 向谐振网络转移, Ciss 中的电荷开始减少, Ciss的电压开始从 15 V 过渡到-5 V。由于存在与寄生元件、 BJT 和二极管正向压降相关的损耗, Vgs大于-5 V。

阶段 4( >t4) : 为达到避免误触发和快速关断的目的, 这里提 供 给 SiC MOSFET 的 关 断 栅 极 电 压 为 - 5V。 为了补偿电压损失 ΔVgs2, 应在开关转换后再次钳位栅源端电压, 这通过关闭 Q3 并在 t4 时打开 Q4 来实现, 当前路径在图 4( d) 中用实线表示。 这里只有补偿ΔVgs2所需的能量是由 Vee提供。 充电完成后, 通过 R2、D4和 Q4将 Vgs 钳位到-5 V。 Q4 处于导通状态, 直到下一个启动主开关 S1的导通信号来临。

1\. 2 特征分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318QfnnA2t9Y0BEInzDOniaE8zO81Ys3VIOqLzYbUmquH3ticrodf7UXwNw/640?wx_fmt=png)

提出的谐振栅极驱动器的工作特性主要取决于电路中存在的谐振元件。 图 5( a) 显示了用于分析增益和相位的简化电路模型。 一个理想的方波电压 Vin 驱动一个多谐振电路, 通过 Ciss的电压为 Vgs。 图 5( b) 显示了输出短路时电路的等效输入阻抗电路图。 通过适当选择增益及其在不同谐波频率下的相位含量, 可以调节准方波的形状 。 由光耦合器产生的输入方波信号只包含基频 fs和它的奇次谐波。

基频 fs处的增益表达式为 :

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318OVEDFC2TIk4ic6sHEJLwF34k9zFEq0ibicy3k2rY26W2L4rcLJKtx2RPQ/640?wx_fmt=png)

式中: Q0为品质因数; ω0为基频处的谐振频率。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318T0qcfkOcQ6KpaoC52xiau8voY368ppLBpSib3HQBXyMibBKXxo6fDhSGQ/640?wx_fmt=png)

G1(jws) 的相位为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318DXZ9BMA5vE8ACWbTlsOMBvzFFbiaYJwQHmLXRZz6fxS9K51Kfs2a0Hw/640?wx_fmt=png)

同理, 三次谐波频率 3fs处的增益表达式为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318N5PTS6naOVfL9TDTWtnqWeyuEHGP20EYAXnqJW6ghDSaU4N5GnMibjg/640?wx_fmt=png)

G3(jws) 的相位为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318KTd5es9GzC7eUibJMwmdNjzMlBLF3GeKSyCiaqoVS9icf5p0tZI2Wq1vw/640?wx_fmt=png)

五次谐波频率 5fs处的增益表达式为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If3182dOgcfHvviaHN2Vmh3TzkicUul6vBMjefoeq9eRrFyEtWCZfoSZPic3ow/640?wx_fmt=png)

G5(jws) 的相位为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If3187PmfPELOkswjiacj7icWEhUPgYEqQllIEAHGyMgYeib0w3dZDIZ0ib1BwA/640?wx_fmt=png)

基于式( 2) ~ ( 10) , 可以优化多谐振滤波器网络的功能。 总输入阻抗对电路的高频工作性能起着重要作用, 如果电路在较高的频率是容性的, 那么它将降低电路总阻抗的大小。 因此, 循环电流将增加, 最终导致更高的损耗。 输出短路时输入阻抗 Zs(jws) 的表达式为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318boNHjBrFRjdbaNibmWlx7sOPf9ibvFpTa2bibu5ftia9fGpjNRXYgUuia0g/640?wx_fmt=png)

1\. 3 元件选择

合适的元器件对于降低栅极驱动电路的功耗起着重要作用。 电路中所选用的二极管和晶体管均具有较低的压降, 以减少能量损耗。

1\. 3. 1 谐振电感和电容的选择

电感 Lr和输入电容 Ciss在基频 fs处谐振, 基频选择为 1 MHz。 所选用的 SiC MOSFET 是来自 Infineon 的IMW120R040M1H, 其 Ciss为 1620 pF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318n1DwnSD1LVrmtJbJBwdI1TdjXaEYRjKKRo5RqdW2vMM6EPtmMURjFA/640?wx_fmt=png)

计算得 Lr = 15 μH。 Lt和 Lf可别由下式计算:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318e6aJIXQaEPWI2icIhjiaxYplMqdds4E1lQ5NxPL5rqE7HuiaapyP8P2zw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318PgM3Cj8iaRUItEnXcMnElWQK6UlIkvZXazg7UbUI2AvqaO40mdMlJyg/640?wx_fmt=png)

Ct和 Cf为设计参数, 通常 Ct 取 Ciss/5\[17\] , 这里初始值分别选为 324 pF 和 200 pF。 使用式(12) ~ (14) 得到的值并不满足所有的调谐准则, 需要进一步调谐以实现理想的准方波, 具体值取决于电路中存在的寄生参数。 利用式(13) ~ (14) 计算出 Lt 和 Lf 的值分别为 9μH 和 6 μH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If3189K6aGu7815KaKjuvYDvL7NR3aiazFjlWvTJt5HZorev15SpBKbiclzlQ/640?wx_fmt=png)

本文使用的仿真软件是 LTspice, 它是一款强大高效的 SPICE 仿真器软件、 原理图采集和波形观测器,为改善模拟电路的仿真提供增强功能和模型。 光耦合器产生的方波为 10 V。 为了产生-5 V 到 15 V 的驱动电压, 需 要 使 fs、 3fs 和 5fs 处 的 增 益 加 倍 或 达 到 6dB 。 用 LTspice 计算谐振网络的增益值, 并使用 Lr、Lt、 Ct、 Lf 和 Cf 的 计 算 值。 仿 真 得 到 图 6 ( a) 和 图 6( b) , 分别为谐振网络的增益和阻抗示意图。 如图 6(a) 所示, 基频增益为 6. 5 dB, 三次谐波和五次谐波增益分别为 1. 6 dB 和 12 dB。 然而, 这些频率的目标增益为 6 dB。 此外, 基频、 三次谐波和五次谐波的阻抗本质上是感性负载, 因此需要更新组件的值。 重新选择各谐振元件的取值后仿真得图 7( a) 和图 7 ( b) ,分别显示了谐振网络的新增益和阻抗图, 各元件的最终值如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318LeuQiatnoVicA3ndXGVu04yhL7FoZlCNb7zBs6FVL9nUkJoNInrPicRbg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318BAVKJYnC0WbTMRNbxLDicHWABT61rnOLKvsDusWia8D1BUz8ePG9dLOA/640?wx_fmt=png)

1\. 3. 2 钳位电阻

电阻 R1和 R2用于限制钳位阶段的电流, 这些电阻的值取为 20 Ω。

1\. 3. 3 BJT 的开关控制电路

R4、 C2和 R5的组合产生 BJT Q1和 Q3的导通信号,为了避免振荡, ( R4 +R5 ) C2 的时间常数需要小于 1 μs的完全跃迁时间。 其中 R4 和 R5 的取值分别为 25 Ω 和27 Ω。 C2的值选择为 0. 22 μF。 此外, R3 和 C1 的组合为 BJT Q2和 Q4的钳位操作提供了延时导通信号。 R3和C1的取值分别为 1. 6 kΩ 和 15 nF。

1\. 4 损耗分析

在本节中, 对所提出的电路功耗进行分析。 该电路通过 Ciss 的感应充放电和部分能量的回收, 可以降低所需的驱动功率。 在 SiC MOSFET 导通阶段, 一半的能量存储在 Ciss 中。 在关断阶段, 另一半通过输入电阻耗散, 其中 SiC MOSFET 内部的栅极电阻 Rg 是主要因素。 在损耗分析中, 由于导通和关断时间间隔t1 ~ t2和 t3 ~ t4相对于整个电路工作的导通和关断状态要短得多, 因此只考虑导通损耗, 而忽略开关损耗。 ws处电流引起的栅极电阻 Rg的导通损耗可计算为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318Ix7YApRaJIqkcywwS5I5ibrHD4micFjib37P5sARRRSj56d735yvMsTCg/640?wx_fmt=png)

式中:V1是基波的振幅。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318ymc6Gkfbj8Ys6Xc6wtKLYxtHIFp24BfqmKY5prrTtdwAr9KeaCrOsg/640?wx_fmt=png)

由 3ws处电流引起的栅极驱动功率损耗可计算为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318NHxyDcEoq0B7Nd28FickicTu1BnP7hhLq5YxqicYiccOIeNWyZoXOjFL5Q/640?wx_fmt=png)

式中: V3是三次谐波的振幅。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318Jwa9SuDiahVTA11cSmiaq3YgRUaNE5YIA38kOAviclQzRSvFCAJVAia7Kg/640?wx_fmt=png)

由 5ws处电流造成的栅极驱动功率损耗可计算为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If3186OvSQOZQA8mevOQp94KGBClrV9MvNjzF7TRwfsEibuwiccoKicVOicwSRg/640?wx_fmt=png)

式中: V5是五次谐波的振幅。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318CiattwicUQ6eGeFg38o5a5A2n6e5rz2fibwhDjBQIPEibyz2NMoxm7CicNg/640?wx_fmt=png)

由式(15) ~ (20) 可得栅极电阻 Rg 上耗散的总功率损耗为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318LPQtnPFX3AkGQLdOEJ8z31dAIQodFITU5ANtDtZrZjOSjibvXLauycg/640?wx_fmt=png)

2\. 仿真结果与分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318kOxGtH6Qx2cKrXZRT8o7peANjXUIoXsMAWkztMqfZdnTRASBIxUKpw/640?wx_fmt=png)

为了验证所提出的谐振栅极驱动器在高频变换器中的节能效果, 用 LTspice 设计和构建了 DC-DC 升压变换器, 并在三种不同的情况下运行。 首先, 分别采用传统栅极驱动器( CGD) 、 文献\[ 1\] 中的栅极驱动器和所提谐振栅极驱动器来驱动 15 ~ 30 V 的升压斩波电路( Boost Converter) 。 采用国际整流器公司的栅极驱动 IC IR4427 作 为 CGD 电 路, 它 是 一 种 高 速 功 率MOSFET 驱动器。 其次, 再分别用三种驱动器驱动一个 30 ~ 60 V 升压斩波电路的 SiC MOSFET。 最后, 对每种情况下的栅极驱动功耗进行测量和比较。 测试电路示意图如图 8 所示, 实验的开关频率为 1 MHz, 占空比为 50%, 负载电阻值为 50 Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318XX0WqPibkDwtZmXdYddOdb2cOvibHuSQ9WEpaquiafbWvPYoq1s3ibrdvA/640?wx_fmt=png)

图 9 给出了三种电路驱动 15 ~ 30 V Boost 变换器情况 下 的 SiC MOSFET 栅 源 电 压 ( Vgs ) 和 漏 源 电 压( Vds) 的波形。 CGD 电路在导通和关断时分别以 15 V和 0 V 驱动电路的 SiC MOSFET。 而所提 RGD 电路将SiC MOSFET 的驱动信号钳位在所需的正、 负电压水平上, 导通时为 15 V, 关断时为 - 5 V。 图 10 显示了三种电路驱动 30 ~ 60 V Boost 变换器情况下的 Vgs和 Vds的波形。 由图 9 和图 10 可知, CGD 电路的驱动信号是一个 0 ~ 15 V 的方波信号, 而由所提 RGD 电路提供的驱动信号是一个 - 5 - + 15 V 的准方波信号, 这实现了用不等 双 极 电 压 快 速 导 通 和 关 断 SiC MOSFET 的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318VNO78876icxP5f5ibHT4VMNql2BahGFlrsqI3yGgVzUibAFLgOCmbCkKw/640?wx_fmt=png)

为说明 SiC MOSFET 的开关瞬态过程, 可从仿真结果中测量 SiC MOSFET 的导通时间和关断时间, 如图 11 所示。 在由 CGD 电路驱动 SiC MOSFET 的 Boost变换器电路中, 放大 SiC MOSFET 的一个开关过程,如图 11( a) 所示, 测量到 SiC MOSFET 的导通时间和关断时间分别为 28 ns 和 29 ns。 由文献\[ 1\] 中的 RGD电路驱动 SiC MOSFET 的 Boost 变换器电路中, 如图11(b)所示, 可测得 SiC MOSFET 的导通时间和关断时间分别为 27 ns 和 23 ns。 而在由本文所提 RGD 电路驱动 SiC MOSFET 的 Boost 变换器电路中, 如图 11( c) 所示, SiC MOSFET 的导通时间和关断时间分别为 19 ns和 15 ns。 因 此, 本 文 所 提 RGD 电 路 缩 短 了 SiC MOSFET 的导通和关断时间, 从而起到减少开关过程带来功率损耗的作用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318hF3ib69uSt4rF3EWcuyXaibCw6fBic71b5m0ZtnZIA7uCjtV9VGiavQRhw/640?wx_fmt=png)

图 12 表示由三种电路驱动的 SiC MOSFET 的栅源电压 Vgs 和栅极电流 ig 的波形。 由图可知, CGD 电路和文献\[1\] 中的 RGD 电路驱动的 SiC MOSFET 的栅极电流均高于本文所提 RGD 电路驱动的 SiC MOSFET 的栅极电流, 而驱动电压均能达到要求的 15 V, 因此达到降低 功 率 损 耗 的 目 的。 图 12 ( c) 展 示 了 本 文 所 提RGD 电路的可控性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If318d7kTd3ibt9h0sKaZsE45Dao426nk3qO8HRcIQTxsmW3HoPY85icu0mXg/640?wx_fmt=png)

为了计算功率损耗, 在仿真电路中测得施加到栅极驱动电路的电压和通过电路的电流有效值, 将这两个值的乘积作为栅极驱动电路消耗的功率。 Boost 变换器栅极驱动电路的功耗比较如表 2 所示。 结果表明,对于 15 ~ 30 V Boost 变换器, CGD 电路的功耗为 2. 45W, 文献\[1\] 中 RGD 电路的功耗为 1. 71 W, 而本文所提 RGD 电路的功耗仅为 1. 2 W。 此外, 对于 30 ~ 60 VBoost 变换器, CGD 消耗的功率为 2. 5 W, 文献\[1\] 中RGD 电路消耗的功耗为 1. 76 W, 而对于本文所提的RGD 电路, 功耗为 1. 25 W。 因此可知栅极驱动功耗几乎与系统的功率水平无关, 驱动电路的功耗主要取决于特定系统的工作开关频率, 如式(1) 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaw9QB003iad1Voz55If31866eJIovsDRy4mt9qhbMsqLqXZAuNgDzEWNic14OibfbiaZAicWQshUy1nA/640?wx_fmt=png)

经过上述分析, 本文所提出的多谐振栅极驱动器与传统栅极驱动器和同类研究中的谐振栅极驱动器相比, 能使 SiC MOSFET 拥有更快的开关速度, 在变换器应用中能更快地趋于稳定, 从而使得 SiC MOSFET具有更优越的开关性能。 此外, 与传统栅极驱动器和文献\[1\] 中的栅极驱动器相比, 本文提出的多谐振栅极驱动器的功耗分别降低了约 50% 和 30%, 这是由于存储在电容中的能量得以回收和电路具有钳位功能。

3\. 结论

本文通过设计、 分析和仿真成功实现了一种新型多谐振栅极驱动电路, 并构建了开关频率为 1 MHz 的DC-DC 升压变换器。 采用传统驱动电路、 文献\[1\] 中的谐振栅极驱动电路以及本文所提出的多谐振栅极驱动电路来驱动 SiC MOSFET, 并将所提电路的性能与前两者进行比较。 所提出的多谐振栅极驱动电路可以将栅源电压钳位到两个不相等的电压电平, 同时还可以回收输入电容 Ciss 中储存的电荷, 从而显著降低了栅极驱动电路的整体功耗。 基于 SiC 的器件在关断状态下表现出阈值电压水平的降低, 这将导致驱动电路的功耗损失, 而在关断状态下的负钳位提高了开关过程的效率。 在本研究中, 提供了谐振栅极驱动器的工作原理和详细的功耗分析。 从仿真结果来看, 与传统的驱动电路和文献\[ 1\] 中的栅极驱动电路相比, 所提出的多谐振栅极驱动电路分别降低了高达 50% 和 30%的功耗, 使 SiC MOSFET 有更快的开关速度。 综上所述, 对驱动电路的研究使得 SiC MOSFET 能以更优越的性能应用于电机驱动、 电动汽车主逆变器、 车载充电单元及 DC/DC 转换器, 有利于高开关频率的应用及电力电子行业的发展。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)