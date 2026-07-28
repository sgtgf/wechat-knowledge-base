# 基于并联 SiC MOSFET 架构的无刷直流电机高效驱动技术研究


> 原文地址: [https://mp.weixin.qq.com/s/A6moXmY8EYBzgx-\_FheDQA](https://mp.weixin.qq.com/s/A6moXmY8EYBzgx-_FheDQA)

**文章来源：**现代电子技术

**作者：**赵君 1，谭博 2，丁力 3，屈盼让 1（1.中航工业西安航空计算技术研究所，陕西 西安 710065；2.西北工业大学 自动化学院，陕西 西安 710072；3.中国兵器工业第 203研究所，陕西 西安 710065）

**摘 要：**为满足机、弹载伺服驱动系统高功率密度与高效率的需求，提出基于并联 SiC MOSFET架构的无刷直流电机高效驱动技术。针对四管分立 SiC MOSFET并联不均流现象，在分析不均流机理的基础上，采用基于独立驱动的方法提高并联均流效果；并针对 SiC MOSFET 高速开关过程产生的较高 dv dt 问题，提出一种基于 PWM 信号的同步采集方法，有效地提升了驱动系统鲁棒性。最后，以航空 25 kW 无刷直流电机驱动系统作为应用对象，通过实验验证了以上方法的有效性。

**关键词：**SiC MOSFET；并联均流；同步采集；无刷直流电机；独立驱动；鲁棒性

**0 .引 言**

针对机载和弹载设备安装空间小、能源有限的问题，驱动系统的功率密度和效率已成为制约机、弹载设备性能的关键因素。随着多全电飞机与基于电动舵机弹类产品的迅猛发展，对驱动系统的功率密度和效率提出了更高的要求。SiC MOSFET具有导通电阻小，开关速度快的特点，特别适用于高功率密度和高效率的驱动场合。无刷直流电机（BLDCM）本体与有刷直流电机、永磁同步电机以及交流异步电机相比，具有结构简单、功率密度及转矩密度高、逆变器容量需求较小的优势。因此，SiC MOSFET 与 BLDCM 的结合能够发挥出系统高功率密度的特点，特别适用于弹载与机载环境使用。

针对大功率应用需求，通过 SiC MOSFET 的并联可以进一步减小导通电阻，提高驱动系统的效率及功率密度。但是，并联不仅会带来流经功率管电流的不均衡问题，还会成倍增加功率器件数量以及电路的杂散参数，加剧电磁环境的恶化，导致较大的电磁干扰现象。文献针对由并联 SiC MOSFET 组成的功率模块驱动问题进行研究，提出一种双功能的驱动电路，在满足高速驱动的同时避免电流震荡。文献以 312 kVA 三相逆变器为应用对象，采用 CREE 公司的双 CAS100H12AM1模块并联驱动方式，研究其驱动保护电路，实验结果表明，在额定功率点逆变器效率达到了 99.3%。文献研究了电路差异以及元器件差异对并联 SiC MOSFET 的影响，指出开关电路的杂散电感会导致并联回路电流的差异。文献指出 SiC MOSFET 的并联会增大耦合寄生参数，并研究了桥臂上下管之间的串扰现象。以上文献主要研究了并联 SiC MOSFET 的高速驱动方法，而未考虑其高速开关速度引起较大的 dv dt，以及并联方式带来的电路杂散参数对整个驱动系统的影响。

以航空 25 kW 无刷直流电机驱动系统为应用对象，从系统效率以及功率密度的角度出发，在对比分析半桥IGBT 模块以及多管 SiC MOSFET 并联方案的基础上，采用四管 SiC MOSFET 并联的方案。针对不均流的风险，探究其不均流机理，研究一种独立驱动方法。针对功率器件增多以及 SiC MOSFET 高速开关产生的 dv dt 引起的电磁环境恶化现象，研究一种信号的同步采集方法以提高系统抗干扰能力。最后，通过实验对以上方法进行验证，并对基于四管分立 SiC MOSFET并联和 IGBT模块驱动的温升进行对比。

**1 .  驱动系统主回路设计**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJ3JVicDwJrEHKlj5ngGvn5Z1OAKO3VIsc0QKey1icF0mtcZtqeibuo09Jg/640?wx_fmt=png&from=appmsg)

图 1是 BLDCM驱动系统的主回路示意图，主回路的设计主要是对功率器件T1~T6和D1~D6的选型。航空25 kW无刷直流电机参数如表 1所示，其额定电流为 103 A。考虑到当功率器件壳体温度为 100 ℃时满足 2倍余量的要求，至少选择耐压600 V、额定电流为200 A的功率器件。根据该指标要求分别选择了Infinenon公司型号为FS200R06KE3 的三相全桥 IGBT 模块，其额定电流为200 A、耐压600 V；以及CREE公司型号为C2M0025120D的分立 SiC MOSFET，其额定电流为 60 A、耐压 1200 V，并采用四管并联方式。

以下分别对 IGBT 模块以及四管并联的分立 SiC MOSFET 的损耗以及温升进行计算。功率器件的损耗主要包括导通损耗和开关损耗两部分，假设占空比为 1，IGBT 模块以及 SiC MOSFET 的损耗计算经验公式分别如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJfjvjlMpcnhZLpFEibyv416ekjaQor2KApeMpgvTn5D6YMWekl9Mjndg/640?wx_fmt=png&from=appmsg)

式中：Ptoal 为功率器件的总损耗；Pconduct 为单管导通损耗；Pswitch 为单管开关损耗；UDC 为直流供电电压 270 V；Irms为电流有效值 103 A；Vconduct 为 IGBT 模块的导通电压；Rconduct 为 SiC MOSFET的导通电阻；Ton 为功率器件的开通时间；Toff 为功率器件的关断时间；Fswitch 为功率器件的开关频率10 kHz。基于BLDCM两相导通的特点，在任意时刻共有2个IGBT管子导通，8个SiC MOSFET导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJtcYfac69KvtwvtsZBf6Rla5MdwfWRlR2zyvZQCDma0wwwzvQHibnQJQ/640?wx_fmt=png&from=appmsg)

通过式（1）和式（2）可以看出，导通损耗与导通压降（电阻）有关，开关损耗与开关速度有关，这些参数与功率器件结温以及流过的电流有关。通过厂家给出的曲线可以计算出功率器件的总损耗，如表 2 所示。与 IGBT模块相比，采用四管并联的分立 SiC MOSFET 能够使损耗减小 88.41 W，在管壳温度一致的前提下，结温降低33.34 ℃，不仅有利于提高驱动系统的功率密度和效率，还有利于减小散热器的重量和体积。考虑到SiC MOSFET反 并 联 体 二 极 管 的 导 通 压 降 较 高 ，采 用 型 号 为C4D20120A的 SiC二极管作为续流二极管 D1~D6。同时，该 SiC 二极管具有较小的反向恢复电流和恢复电荷，其作为续流二极管有利于降低SiC MOSFET的开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJm38ykd0jyP9O8PLjiaVGYpr1iatSbsfibfQiaduAuF4dvZZNAic7zLYGrQg/640?wx_fmt=png&from=appmsg)

图 2 是 A 相上桥臂功率电路示意图，T11~T14是并联的 4 个 SiC MOSFET。在均流设计方面，主要考虑采用C2M0025120D 和 C4D20120A 的正温度效应保证其导通均流，以及合理的驱动电路设计保证其动态均流。图 3是 C2M0025120D 和 C4D20120A 的导通电阻以及导通压降温度曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJlZQC6S3WicMpLRU6F1N8PuDEVASZqhdvjm5E4jdQlhjtBnBvyjoauaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJu2RQgNjrz4zeWCjibZNLyZY7iamlXeP8jyYE3TAb4lDmcmmgibKmt3cGQ/640?wx_fmt=png&from=appmsg)

**2.   SiC MOSFET并联驱动设计**

**2.1 并联驱动机理分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJKic77VBIpkZQuFII7xUpDDe1J5iaTbqpd93hnIj0ag7TRTT8Wx1CsViag/640?wx_fmt=png&from=appmsg)

图 4是 A 相驱动等效电路图。 LD 为漏极寄生电感，LS 为源极寄生电感，LG1 为栅极寄生电感，LG2 为栅极驱动回路寄生电感，RG 为栅极驱动电阻，CGD 为米勒电容，CGS 为栅源电容。其中，LD 和 LS 主要包含了线路和功率器件封装的寄生电感，根据厂家提供的封装资料、线缆电感计算公式以及电流基波频率，该寄生电感数量级为 nH，远小于电机绕组 mH 级别的电感量，因此，LD和 LS 对 SiC MOSFET 动态均流的影响较小。 CGD 和 CGS主要和 SiC MOSFET 的自身参数有关，选择同一批次的元器件可以尽可能降低该参数的差异性。SiC MOSFET的驱动速度和一致性主要与 RG，LG1 和 LG2 有关，驱动电路的设计主要围绕着保证以上三个参数的一致性而展开。

为了尽可能降低主回路损耗以提高系统效率，利用SiC MOSFET第三象限反向导通的工作特点，采用同一桥臂上下管互补导通的驱动策略，当死区时间结束后，使续流电流反向流经压降较小的 SiC MOSFET。但是，该方法会增大由于串扰现象而导致的上下管直通风险。如图 4 所示，当 VSW 电压迅速降低时，由于下管 CGD 的存在，会耦合出 IGD 电流，该电流经过 RG 以及电路的寄生参数会产生栅极电压，当该电压超过功率器件的门槛电压时会引起该器件的误导通。降低放电回路的阻抗也是驱动电路设计的关键。

**2.2 驱动电路设计**

针对并联 MOSFET 的驱动电路设计，主要采用单驱动或者独立驱动两种设计思路。由于 SiC MOSFET 的开关速度较快，其开关过程对驱动电路的杂散参数更为敏感。在单驱动方式下，存在驱动距离远近的差异、驱动信号走线的限制以及功率器件之间的串扰现象，较难精确控制驱动电路的寄生参数，不仅容易导致动态开关过程中的不均流现象，还会引起驱动信号的震荡，使开关损耗增大，不利于驱动系统的可靠性以及高效率。本设计采用独立驱动设计思路，使 4 个并联 SiC MOSFET的驱动参数一致，同时为了减小串扰现象，采用充放电独立的设计方法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJMrHM817SNR3XGQXHSibsMOxOcfXnTicVddXLhrynu28eZn4HKqJicdr5g/640?wx_fmt=png&from=appmsg)

图 5 是 T11管驱动电路图，驱动芯片采用 IXYS 公司的 IXDN409，其 最 大 输 出 电 流 为 9 A。 为 了 降 低 SiC MOSFET 的导通电阻并保证其可靠关断，IXDN409 供电采用 20 V 和\-5 V 双电源供电方式。采用高频陶瓷介质电容 C1~C4 对电源进行去耦，以吸收驱动芯片快速开关引起的高频噪声。放电电阻 R1 和充电电阻 R2 的阻值不宜过小，否则会引起驱动电压的震荡，本设计中 R1 选择为 6 Ω，R2 选择为 12 Ω。D2和 D3选择 VISHAY 公司型号为 U1B⁃M3 的超快恢复二极管。D4和 D5为防止驱动 信 号 过 压 的 瞬 态 吸 收 二 极 管 ，其 型 号 分 别 为P4SMA6.8A 和 P4SMA24A。

**3.  信号同步采集方法**

以航空 25 kW 无刷直流电机驱动系统作为应用对象，采用数字控制方式。图 6 是其控制原理框图。数字处理单元通过旋变解码芯片和A/D转换芯片采集电机转子位置、转子速度以及电枢电流，以实现速度、电流的闭环计算、转子扇区判断以及保护等功能，并经三相功率驱动单元将直流电转换为交流电，实现BLDCM的驱动。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJyO58kbib2mkxpZmkfiaeontswCUo0b86TMSrAiaKmpGtdx2MbcyHa3m5g/640?wx_fmt=png&from=appmsg)

由于 SiC MOSFET 的开关速度较快，其开关过程产生较大的 dv dt，使数字处理单元的信号采集过程易受到干扰，从而造成系统误保护甚至驱动信号的紊乱，导致驱动系统功能失效。针对该问题，提出一种基于PWM 信号的同步采集方法。该方法的原理是：数字处理单元根据 PWM 的开关状态和电机的换相时刻，结合驱动电路的延迟时间以及功率器件的开关时间，对功率器件的工作状态进行预计，只有在功率器件工作稳定时进行数据采集，降低由于干扰引起的采集误差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJ65qbgza66iaQYtd5nJIdt0DQBiblMkwAM7uW2qiackMqpgViat3ShfN8Kw/640?wx_fmt=png&from=appmsg)

图 7 是信号采集的时序图，由上往下依次为数字处理单元输出的 PWM 信号、驱动芯片输出的驱动信号和数据采集使能信号。图中，逻辑“1”代表管子导通和数据采集使能有效，逻辑“0”代表管子关断和数据采集使能无效。 Td1 是 PWM 信号到驱动电路的延迟时间，Td2是驱动信号到功率器件完成开关的延迟时间。根据电路参数，Td1 和 Td2 的总延迟时间设置为 2 μs，该时间远远小于 PWM 的开关周期 100 μs，不会对数据采集的实时性造成影响。

**4.  实验验证**

在搭建的航空 25 kW 无刷直流电机实验平台上，对所研究的高功率密度驱动方法进行实验验证。图 8 是测试验证环境架构，主要使用到的仪器设备有：供电与能量回馈设备、转矩加载台、PA6000 功率分析仪、红外热传感仪、数字万用表、多通道示波器等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJ3cNzJCKm2AbxYXLTxJtvzdG4iciaVWick1UZUVvXJpJPL6icql3ibonklww/640?wx_fmt=png&from=appmsg)

**4.1 驱动实验**

在驱动实验的过程中，为了验证驱动波形的一致性，采用两路隔离探头对同一并联支路的两个驱动信号进行测量，图 9 是实验波形。从图 9a）中可以看出，在开通前期存在差异，黄线滞后蓝线约 20 ns，但到达门槛电压后，两个 SiC MOSFET的开通过程接近同步，在整个开通过程，驱动电压没有出现反复震荡的现象。在图 9b）关断过程中，黄线与蓝线同步，驱动电压也同样没有出现震荡现象。并且在实验过程中采用了基于 PWM 信号的同步采集方法，没有出现数字处理单元的信号采集受到干扰的现象，驱动系统稳定工作，图 10 为 25 kW 负载下的电机 A 相电流波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJwIndpRt1bG7IFicLvFQ52oLdHAjZGQte3C4BQ3O8vwTEn3Zx4AywFaA/640?wx_fmt=png&from=appmsg)

**4.2 温升实验**

分别选择基于四管分立SiC MOSFET并联和IGBT模块的驱动系统，在相同的实验环境及实验条件下进行满载实验，采用红外热传感仪对开关管壳体进行温度采集，实验条件如下：

环境 温 度 ：23 ℃ ；给 定 转 速 ：8 500 r/min；负 载 ：25 kW；温度采集方式：红外热传感仪；电机运行时间：30 min；散热条件：3个 5 W 散热风扇；采集温度：开关管壳体。

利用红外热传感仪采集的开关管壳体温度随时间变化曲线如图 11所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl1L0kNcXXH4rFKGyfzOMMJgnGkvwGHlXzWJDuUL7oPRUicbzTODMjHYQXQowVCqtvSuu2yYYmUQBQ/640?wx_fmt=png&from=appmsg)

由数据波形可以看出，在工作 30 min 时，基于 IGBT模块的壳体温度达到65.3 ℃，基于四管分立SiC MOSFET并联的壳体温度为 46.5 ℃。其壳体温度都基本达到热平衡。基于四管分立 SiC MOSFET 并联的壳体比基于IGBT 模块的壳体温升要低。由此可以得出：在工作条件和散热条件相同的情况下，基于四管分立 SiC MOSFET并联的效率较高。

**5.  结 论**

本文以航空 25 kW 无刷直流电机驱动系统作为应用对象，在计算 IGBT模块和多管 SiC MOSFET并联损耗以及温升的基础上，得到了四管 SiC MOSFET 并联的方案有利于提高驱动系统功率密度和效率的结论。探究了 SiC MOSFET并联的不均流机理，指出了 SiC MOSFET的正温度效应有利于其稳态导通均流，而其动态均流主要与 RG，LG1 和 LG2 有关，并分析了串扰机理，设计了一种独立驱动方法。针对 SiC MOSFET 高速开关过程产生的较高 dv dt 问题，提出一种信号同步采集方法，分析了其原理，给出了采集时序。最后，在搭建的实验平台上对所研究的驱动方法以及信号采集方法进行了验证，温升实验表明，基于四管分立 SiC MOSFET 并联的驱动方法具有较高的效率。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)