# 基于碳化硅MOSFET半桥驱动及保护电路设计

原创 郑高铭 ，孙峰 SiC碳化硅MOS管及功率模块的应用 2025-05-02 15:33 广东

> 原文地址: [https://mp.weixin.qq.com/s/tCjSMxRskBOyfrNKG3qNzA](https://mp.weixin.qq.com/s/tCjSMxRskBOyfrNKG3qNzA)

文章来源：电路与系统

作者：郑高铭 ，孙峰，李欢 ，胡雅婷 ，刘京 ，刘羽捷（中国振华集团永光电子有限公司，贵州 贵阳 550018）

摘 要 ： 针对碳化硅 MOSFET 驱动电路设计难度较大 、门极易受串扰 、保护功能不齐全以及全国产化的问题 ，基于国产芯片设计了一款碳化硅MOSFET半桥驱动及保护电路 。 重点分析总结了碳化硅 MOSFET有源米勒钳位保护 、退饱和保护以及桥臂互锁保护原理与模型。在隔离原边信号与副边信号的同时 ，采用18 V/-3.3 V 的高低电平 ，实现对上 、下桥臂碳化硅 MOSFET 的控制 ，同时集成了欠压锁定 、退饱和保护 、桥臂互锁 、有源米勒钳位保护的功能 。 与国际先进水平Wolf Speed 的碳化硅MOSFET驱动板 CGD1200HB2P-BM2 进行了参数对比和功能测试 。 实验结果表明 ，该电路开关参数与 CGD1200HB2P-BM2驱动板相近 ，满足碳化硅 MOSFET驱动需求 ，并能可靠触发保护功能 。电路已实际应用于碳化硅MOSFET的驱动中。

关键词：碳化硅 MOSFET；驱动电路；有源米勒钳位；退饱和保护

0 引言

碳化硅 MOSFET 作为第三代半导体代表产品之 一 ，以其优异的耐高压 、耐高 温 、低损耗 、通流能力强 、导通电阻小等性能被广泛应用于新能源汽车 、光伏发电 、轨道交通 、智能电网等领域。 碳化硅 MOSFET 对驱动电路要求较 高 ，一方面体现在驱动电压与驱动速度上 ，另一方面要求驱动电路能监测到碳化硅 MOSFET 工作异常情况 ，并及时进行保护。 碳化硅 MOSFET 由于其开 通阈值较低 ，并且其较快的开关速度 ，导致 dv/dt 较大 ，容易引起串扰导致 误开启 ，进一步造成上 、下桥臂直通 ，因此需要有源米勒钳位保护，抑制串扰对电路的影响 。 此外 ，驱动电路还需要桥臂互锁保护 、退饱和保护、欠压锁定等保护功能。

而碳化硅 MOSFET 驱动电路核心为碳化硅MOSFET 驱动芯片 。 表 1 为国内 外碳化硅 MOSFET 驱动芯片对比情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaAConWG06NrBwgOOvICDEnPj1IWg59QbOGhXnl8mT5iadNt4Dj64eNDc0Dg/640?wx_fmt=png)

基于表 1 调研的驱动厂家与芯片来看，国外驱动芯片的 Sink/Source 电流 能 力集中在 10 A 左右 ，最大为 20 A，而国内驱动芯片也基本可达到10A；对于 碳化硅MOSFET驱动芯片，一般要求共模抗干扰度 CMTI≥100 V/ns，国外驱动芯片满足此要求 ，英飞凌的 1ED3321MC12N 可达 300 V/ns，而国内驱动芯片也可满足要求 ；在传播延时方面，国外芯片在 75~150 ns，国内驱动芯片在 50~70 ns，优于国外驱动 ；此外 ，国外 驱 动 芯 片 集 成 了 退 饱 和 保 护 、有源米勒钳位 、欠压锁 定 、上拉/下拉 独立可控等保护功能 ；而国内青 铜剑 、瞻芯 、华大半导体厂商的保护功能均不完善 ，纳芯微的 NSI6611 保护功能可满足要求。此外，对于芯 片的电压隔离 ，国外集中在2500V~5700 V，而国内集中在3700V~5700 V。

不论是 碳 化 硅 MOSFET 还是 驱 动 芯 片 ，国内 目 前 绝大部 分 公 司 都 是 选 用 国 外 产 品 ，一部 分 原 因 是 不 了 解 国内的 公 司 有 碳 化 硅 MOSFET 驱动 芯 片 ，另一 部 分 原 因 是不认 可 国 内 产 品 的 性 能 。 设计 一 款 全 国 产 化 的 碳 化 硅MOSFET 驱动 电 路 ，将碳 化 硅 MOSFET 更好 地 运 用 到 工业中是亟需解决的事情。

为满 足 碳 化 硅 MOSFET 驱动 电 路 全 国 产 化 需 求 ，本文针 对 碳 化 硅 MOSFET 驱动 及 保 护 问 题 ，建立 了 保 护 电路的 模 型 并 做 了 详 细 分 析 ，基于纳芯微电子 NSI6611 驱动集成芯片提出了全国产化方案 ，为需要运 用碳化硅MOSFET 的工程师提供电路参考。

为验证本驱动电路的性能 ，选取了国际领先水平的Wolf Speed 公司所研制的碳化硅MOSFET动板CGD1200HB2P-BM2（ 所用驱动芯片为 ADI 公司的ADUM4146）进行波形分析 、参数比对 、验证保护功能是否可靠触发测试 。 实验结果表明 ，该电路开关参数与CGD1200HB2P-BM2 驱动板相近 ，满足 碳化硅 MOSFET驱动需求，并能可靠触发保护功能。

1 保护电路原理分析

1.1 有源米勒钳位保护原理分析

大功 率 电 路 中 使 用 的 典 型 桥 式 电 路 拓 扑 中 ，半桥 结构是 基 本 的 拓 扑 单 元 。 当上 管 导 通 ，下管 关 闭 时 ，下管会有一 个 由 低 到 高 的 快速 dv/dt，节点电压通过米勒电容CGD，根据 I = C\* dV/dt ，将产生 流经 CGD 的米勒充电电流，该电流依次流过驱动器的输出电阻 Rg，在门极电平产生正瞬态电压，门极串扰电路模型如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoQ3t5dNiaNB7AiclnICiccUib9bf1NoAsricico2uozqTmH3jiaxnEGl4qCIdA/640?wx_fmt=png)

为解 决 门 极 串 扰 问 题 ，在采 用 负 压 VEE 关断 的 同 时 ，提供 了 一 种 碳化硅MSOFET 有源米勒钳位电路 ，当检测到门 级 电 压 低 于 Vclamp\_th（比 VEE 高 2 V）时 ，比较 器 翻 转 ，门极 引 脚 被 MOSFET 下拉 ，从而 提 供 低 阻 抗 路 径 以 避 免碳化硅 MOSFET 误导通。

电路 原 理 图 如 图 2 所示 ，该电 路 主 要 由 电 源 模 块、主控器 、驱动集 成芯片 、驱动电阻（Rg）、碳化硅MOSFET（Q1）、比较 器（U1）、MOSFET（Q2）、串扰抑制逻辑模块组成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACojic4CmkO9SW1U7wlRob5GXFsz8YAGPPJxO4Que8ng6NDjoPfpJibdlSQ/640?wx_fmt=png)

串扰 抑 制 逻 辑 模 块 框 图 如 图 3 所示 ，电路 主 要 有 光耦 、与门 U2、或非 门 U3 组成 。 光耦 用 于 隔 离 控 制 输 入信号 ，增加 系 统 鲁 棒 性 ；或非 门 、与门 组 成 逻 辑 模 块 ，用于控制 MOSFET(Q2)的开通与关闭。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACob3rHdOVLicomTyPwkqvvlOUicRD5k3JqThQzJCbHOicQumux6x726ib3Zw/640?wx_fmt=png)

其中 IN1 为控制输入信号 ，IN2 为比较器输出信号 ，G2 为控制 MOSFET 开关信号,真值表如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACostkrVqDsmRgibzmoXibibdz5HWSqIryylW830ejic1XuXsnoiaFF3icwibgrQ/640?wx_fmt=png)

当控 制 信 号 IN1 由高 电 平 转 换 到 低 电 平 时 ，碳化 硅MOSFET 由开 通 状 态 转 换 为 关 闭 状 态 ，G1 信号 由 高 电平 VCC（18 V）下降 到 VEE（ -3 V），G1 信号 在 下 降 到Vclamp\_th 之前 ，比较 器 输 出 信 号 IN2 为高 电 平 ，G2 信号 为低电 平 ，MOSFET（Q2）关闭 ；当 G1 信号 下 降 并 低 于Vclamp\_th 时 ，比较 器 输 出 信 号 IN2 为低 电 平 ，G2 信号 为 高电平 ，MOSFET（Q2）导通 ，如图 4 所示 ，iMiller 将直 接 通 过Q2 流出 ，为碳 化 硅 MOSFET 门极 信 号 提 供 低 阻 抗 路 径 ，从而有效避免串扰问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoKlVRvmVOFiazkPV1OnFJHy0vvzs1tpZaCvXJ9vxb77OWOHSCJM1c0og/640?wx_fmt=png)

1.2 退饱和保护原理分析

对于碳 化 硅 MOSFET 来说 ，在正 常 导 通 情 况 下 ，其VDS 两端的电压可 能 为 2 V，芯片 内 部 的 上 拉 电 源 ICHG 电流从 DESAT 端口流 出 ，通过 RLIM 和 DHV 流入 MOSFET。此时 ，CBLK 即DESAT 端口两端压降为VDS压降加高 压 二极管正向导通压降加 RLIM 两端压降，如图 5（a）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoc79C36Iw0vBrZbibmelOyktf7SRiaTLJMp0llyoUkhKy6cAFQsE3lm1w/640?wx_fmt=png)

当短路 情 况 发 生 时 ，VDS 两端 的 压 降 会 迅 速 上 升 ，这时高 压 二 极 管 会 发 生 反 偏 ，内部 电 流 源 电 流 只 有 一 条 流向 ，即给 CBLK 电容 充 电 ，当 CBLK 电容 两 端 压 降 即 DESAT电压超过阈值电压，便会触发短路保护，如图 5（b）所示。

退饱和保护电路原理如图 5 所示。

1.3 桥臂互锁原理分析

桥臂 互 锁 逻 辑 模 块 如 图 6 所示 ，主要由或门、异或门组成 ，避免因误操作 或 算 法 错 误 使 得 PWM1、PWM2 同时给 高 电 平 ，造成 碳 化 硅 MOSFET 上下 桥 臂 同 时 导 通 ，导致半桥直通短路损坏的情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoYWfxgbNQXhOX03ae0uEPDerWcI9qzI1YIPEUAkqCWbKHWWUq3pBANQ/640?wx_fmt=png)

其中 PWM1、PWM2 为脉 冲 信 号 ，IN1、IN2 为驱 动 芯片的 输 入 信 号 ，Q1、Q2 分别 为 上 、下桥 臂 的 碳 化 硅MOSFET 开关状态，其真值表如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACorohbiaWJxeKqibHajtthjFc6zfog3roNRQtpQsS1iaRufmkyZvbYJR5zg/640?wx_fmt=png)

从真 值 表 可 以 看 出 ，当 PWM1 信号 为 高 电 平 、PWM2 信号 为 高 电 平 时 ，IN1 与 IN2 为低 电 平 ，上 、下桥臂均处于关断状态 ，有效避免了 因 误 操 作 或 算 法 错 误 导致的桥臂直通情况。

2 驱动电路及保护设计

碳化 硅 MOSFET 半桥驱动及保护电路如图 7 所示 ，该电路主要由隔离电源模块 、隔离驱动芯片 、LDO、桥臂互锁逻辑模块、驱动电阻组成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoKlspDZVLvCiaCQwwawdwTz3gVxoqWKIDzmpwdLUbeufOpAR6bcEjOjQ/640?wx_fmt=png)

2.1 电源部分

隔离 电 源 模 块 选 用 国 产 电 源 模 块 QA01C-18，其输出功率 为 2 W，输入 电 压 为 15 V，通过 内 部 隔 离 ，将电 压转化为 VCC（+18 V）、VEE（-3.3 V），为隔 离 驱 动 芯 片 的 副边供电，以达到驱动碳化硅 MOSFET 的能力。

LDO 选用 国 产 芯 片 CJ7805，其最 大 输 出 电 流 为1.5 A，可以 将 15 V 电压 转 换 为 5 V 电压 ，为驱动芯片的原边供电。

其电路原理图如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoyT4PN9cVEddjt6FOXEZjNvllcTCFdajBPwrbL6TYJTJX6Tuia3SJrtw/640?wx_fmt=png)

C1、C8 为电 解 电 容 ，作储 能 用 ；其余 作 为 旁 路 电 容 ，将电 路 中 的 高 频 成 分 滤 掉 ，提高 电 源 纯 净 度 。 电容 应 尽可能 靠 近 芯 片 引 脚 ，以提 高 电 源 稳 定 性 、减少 噪 声 、优化电路性能、降低 EMI。

2.2 桥臂互锁逻辑模块

桥臂互锁逻辑模块主要由与门 SN74HC08N（U4）、异或门 SN74HC86DTR（U5）、电阻 、电容组成 ，其电路原理图如图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoMKzqkmelMrwNJeTFfefibvXQd7jVVrmaoVLzjS7epmRK7Eqsg6SibwQA/640?wx_fmt=png)

在电 路 原 理 图 中 ，PWM 输入 信 号 经 过 与 门 、异或门后输 出 IN1、IN2，避免 因 误 操 作 或 算 法 错 误 使 得PWM1、PWM2 同时 给 高 电 平 ，造成 碳 化 硅 MOSFET 上 、下桥 臂 同 时 导 通 ，导致 碳 化 硅 MOSFET 短路 烧 毁 的 情况。逻辑信号真值表如表 2 所示。

电阻 R1、R4 为上 拉 电 阻 ；电阻 R3、R4 与电 容 C17、C18 组成低通滤波器，滤除电路中的高频信号。

2.3 驱动及保护电路

驱动电路首先考虑采用国产驱动芯片 NIS6611，其输出峰值电流 为 ±10 A，满足 碳 化 硅 MOS 驱动 能 力 ，输出信 号 上 升 时 间 、下降 时 间 在 10 nF 负载 下 也 仅 为50 ns，并且 其 集 成 了 欠 压 锁 定 、退饱 和 保 护 以 及 有 源 米勒钳 位 保 护 功 能 。 此外 ，其共模抗干扰度 ≥150 kV/μs，实现原边、副边信号隔离。

其电路原理图如图 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoTcVz4hhd7MTlpjBvXYjsDZO6Rq7U6kdXhQe9BPn5Cgtz9icTBggrjrw/640?wx_fmt=png)

在电路原理图中 ，PWM1、PWM2 信号经过桥臂互锁逻辑模块后输入到驱动 芯片 ，驱动 芯 片 NSI6611 在隔 离原边 、副边 的 同 时 ，将信 号 电 压 进 行 电 平 转 换 并 提 高 信号的驱动能力。

信号 POWER+ 、信号 POWER- 为直 流 母 线 电 压 ，AC信号为半桥交流输出。

由于 NSI6611 芯片内部已集成有源米勒钳位电路，因此只 需 要 通 过 电 阻 R5、R13 连接 到 此 芯 片 的 CLAMP 引脚，构成有源米勒钳位检测电路，一般电阻取值为 0 Ω。

3 实验验证

为验证碳化硅MOSFET 半桥 驱 动 及 保 护 电 路 的 有效性 ，通过 电 源 SPD3303C、信号 发 生 器 DG1032 以及 示波器 HD06104B 搭建 了 实 验 平 台 ，并与 Wolf Speed 的碳化硅 MOSFET 半桥 驱 动 板 CGD1200HB2P-BM2 进行 了参数、功能测试对比。实验平台如图 11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACo8fE2ySc4bjAFKS90RytCPzc0WgwWXJURibxAEEDHC1VRq7XgLgZA2Bg/640?wx_fmt=png)

3.1 开关特性

在驱 动 电 阻 Rgon 为 3 Ω，G、S 之间 的 电 容 Cgs 为 1 nF的条 件 下 测 试 本 驱 动 电 路 以 及 CGD1200HB2P-BM2 驱动电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoibn7XUPAXadov80vs5B2tDTAHZyWiaOfKMEObRfaICuvRE5hyTTaD5Fw/640?wx_fmt=png)

开关 特 性 测 试 波 形 如 图 12 所示 ，图中 黄 色 为 输 入PWM 信号（2 V/格），红色 为 门 极 驱 动 信 号 Vgs（5 V/格），横轴时间轴为 50 ns 每格。

经对 比 测 试 ，本电 路 上 、下桥 臂 参 数 测 试 结 果 如 下 ：Tdon 为 89 ns、94.68 ns；Tdoff 为 88.1 ns、90.96 ns；Tr 为16.87 ns、14 ns；Tf为 29.1 ns、28.74 ns。

CGD1200HB2P-BM2 的 Tdon 为 106 ns、105.2 ns；Tdoff为 150 ns、148 ns；Tr 为 6.5 ns、6.6 ns；Tf为 5.9 ns、6.1 ns。

从参 数 可 以 看 出 本 电 路 Tdon、Tdoff 优于 CGD1200HB2P-BM2，而 Tr、Tf 略长 与 CGD1200HB2P-BM2。 由于 碳 化硅 MOSFET 所使 用 开 关 频 率 一 般 小 于 100 kHz，因此 本电路的上升时间 Tr、下降时间 Tf满足使用需求。

3.2 退饱和保护

驱动 电 路 在 不 连 接 碳 化 硅 MOSFET 的情 况 下 ，DHV截止 ，电流 源 向 CBLK 充电 ，CBLK 的电 位 线 性 上 升 ，直到 达到门槛时比较器翻转，从而将门极信号拉低至 VEE。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACo2OtNEG9uGNAicOKNpdnPDX5wO09xEW5TK24cOhRTnsEPAZgDCmIia0zg/640?wx_fmt=png)

测试 波 形 如 图 13 所示 ，图中 黄 色 波 形 为 输 入 PWM信号（2 V/格），红色 波 形 为 门 级 驱 动 信 号（5 V/格），蓝色为 电 容 CBLK 正端电压（5 V/格）Vblk，横坐标时间轴为500 ns/格。

可以看出 ，在 CBLK 电位 达到阈值电压后 ，门极信号被迅速拉低，退饱和保护有效触发。

本电路退饱和保护时间为 1.46 μs，CGD1200HB2P-BM2 为308.8 ns。 由于 碳化硅MOSFET 其短路耐受时间一般小于 4μs，通常要求短路保护短路在 2 μs 内起作用，因此本电路满足退饱和保护要求。

3.3 桥臂互锁保护

桥臂 互 锁 测 试 波 形 如 图 14 所示 。 图中 ，黄色 为PWM1 信号（2 V/格），红色 为 PWM2 信号（5 V/格），蓝色为 上 桥 臂 门 极 驱 动 信 号 Vgs（2V/格），横坐 标 时 间 轴 为50 ns/格。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACov3RT7icfQfaeNnHcDicfsYY6J8cM7pZA600prsLADyClK5401cmXoQWQ/640?wx_fmt=png)

从图 14 中可 以 看 出 ，在PWM1 为高 电 平 ，PWM2 为低电 平 时 ，上桥 臂门极信号为高电平 ，属于 上 桥 臂 开 通 ，下桥 臂 关 断 情 况 ；当 PWM2 从低 电 平 变 为 高 电 平 后 ，上桥臂经过短暂延时后被拉低，实现桥臂互锁功能。

本电 路 桥 臂 互 锁 保 护 时 间 为 90.96 ns，CGD1200HB2P-BM2 为 96.5 ns，参数相近，满足桥臂互锁功能。

3.4 有源米勒钳位保护

当门 极 驱 动 信 号 下 降 ，至 Vclamp\_th 时 ，CLAMP 引脚将内部的 MOSFET 拉低至 VEE，Vclamp\_th 典型值为 2 V(以 VEE)为参考地。当 PWM 信号变高时，内部 MOSFET 关闭。

测试原理图如图 15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoKicStU0C78icCIYicDtHMZA3svHHsuN0dljtl6aamphNQLHhZgl8nF0jw/640?wx_fmt=png)

测试步骤如下：

(1) 断开 Rgon 与 Rgoff。

(2) 本电 路 IN+ 给 4 V、0 V 方波 信 号 ，频率 为 1 kHz；CGD1200HB2P-BM2 IN+ 给 +2 V、-2 V 方波 信 号 ，频率为 1 kHz；给不 同 信 号 的 原 因 在 于 两 块 驱 动 板 对 PWM 信号要求不同。

(3) 15 V 供电，使电路板正常工作。

(4) 在 Gate 端给 0 V、VEE2（ 本电 路 为 -3.3 V，CGD1200HB2P-BM2 为 -5 V）方波 信 号 ，频率 为 150 Hz；给不 同 信 号 原 因 在 于 本 电 路 为 -3.3 V 负压 关 断 ，而CGD1200HB2P-BM2 为-5 V 负压关断；

(5) 示波器测试 PWM、GATE 端、CLAMP 端信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQ6datkmicRYDdNL05kiaACoia3nU5tvWFib0CrDYETMIJlsvDwBYibeWJHRT8kLVeSo59arqgzLjHmBQ/640?wx_fmt=png)

测试 波 形 见 图 16。 图（a）中 ，黄色 为 PWM 信号（2V/格），蓝色 为 GATE 端的 方 波 信 号（2 V/格），红色 为CLAMP 引脚 信 号（2 V/格）,横坐 标 时 间 轴 为 1 ms/格 ；图（b）中 ，黄色 为 PWM 信号（2 V/格），蓝色 为 gate 端的 方波信 号 Vgate（10 V/格），红色 为 CLAMP 引脚 信 号 Vclamp（2 V/格）, 横坐标时间轴为 1 ms/格。

从图 16 中可 以 看 出 ，在 GATE 下降 到 低 电 平 时 ，CLAPM 信号 被 拉 低 至 VEE2（MOSFET 打开），而当 PWM信号 变 高 时 ，CLAMP 信号 不 再 是 VEE2（（MOSFET 关闭）；当 GATE 信号 从 低 电 平 升 高 至 高 电 平 时 ，内部MOSFET 不会受到 clamp 的电压的控制，因此不动作。

对比 图 16(a)与图 16(b)，可看 到 clamp 端信 号 有 较 大差别 ，其原 因 是 CGD1200HB2P-BM2 的负 压 为 -5 V，为本电 路 负 压 为 -3.3 V，当下 拉 至 VEE2（-5 V/-3.3 V）时 ，图 16(b)表现得更加明显。

4 结论

针对碳化硅 MOSFET 驱动问题 ，基于国产 芯 片NSI6611 设计 了 一 款 驱 动 及 保 护 电 路 。 该电 路 在 隔 离 原边信 号 与 副 边 信 号 的 同 时 ，采用 18 V/-3.3 V 的高 低 电平 ，实现对上、下桥臂碳化硅 MOSFET 的控制 ，同时集成了欠 压 锁 定 、退饱 和 保 护 、桥臂 互 锁 、有源 米 勒 钳 位 保 护的功 能 。 通过 搭 建 实 验 平 台 ，与国 外 Wolf Speed 的碳 化硅 MOSFET 驱动 板 CGD1200HB2P-BM2 进行 了 开 关 参数测 试 比 对 ，同时 针 对 米 勒 有 源 钳 位 保 护 、桥臂 互 锁 、退饱和 保 护 功 能 进 行 了 测 试 。 实验 结 果 表 明 ，该电 路 开 关参数 与 CGD1200HB2P-BM2 驱动 板 相 近 ，满足 碳 化 硅MOSFET 驱动 需 求 ，并能 可 靠 触 发 保 护 功 能 。 本电路已实际应用于碳化硅 MOSFET 的驱动中。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)