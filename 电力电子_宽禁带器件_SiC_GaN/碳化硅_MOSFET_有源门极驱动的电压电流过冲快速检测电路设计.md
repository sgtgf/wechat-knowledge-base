# 碳化硅 MOSFET 有源门极驱动的电压电流过冲快速检测电路设计

原创 王俊波 张殷 SiC碳化硅MOS管及功率模块的应用 2025-05-06 11:11 广东

> 原文地址: [https://mp.weixin.qq.com/s/6BNW\_53iOt4M-XkSmNCFZQ](https://mp.weixin.qq.com/s/6BNW_53iOt4M-XkSmNCFZQ)

文章来源：固态电子学研究与进展

作者：王俊波1 张殷1 唐琪1 王正磊2 陈钰凯2 刘平3（1 广东电网有限责任公司佛山供电局，广东，佛山，528010）（2 南方电网数字电网研究院股份有限公司，广州，510555）（3 湖南大学 电气与信息工程学院，长沙，410082）

摘要 ：碳化硅金属氧化物半导体场效晶体管（Silicon carbide metal-oxide-semiconductor field-effect transistor，SiC MOSFET）因其高工作频率和耐高温等优势得到广泛应用。然而，SiC MOSFET 驱动电路存在的开关高电气应力、电压电流超调和开关振荡等问题降低了变流器的可靠性。为了提高系统的可靠性，本文提出了一种碳化硅MOSFET 有源门极驱动的电压电流过冲快速检测电路。首先，分析 SiC MOSFET 的开通和关断过程，对漏极电流上升阶段和下降阶段的电压和电流状态设计过冲快速检测电路；然后，为了抑制电压和电流尖峰，设计控制电路动态调节栅极电流；最后，根据原理图确定器件选型方案并搭建测试平台，分析所选器件的工作性能以及自身硬件延时情况。实验结果表明，本文所提设计方案能够快速检测电压和电流过冲状态，并有效抑制电压和电流尖峰。

关键词：碳化硅 MOSFET；快速检测；有源驱动；硬件延时

引 言

相比于传统 Si 基器件 ，碳化硅金属氧化物半体场效晶体管（Silicon carbide metal‑oxide‑ semicon‑ductor field‑effect transistor， SiC MOSFET）在高频 、高功率密度和 高 温 等 应 用 环 境 下 更 具 有 优 势 ，已基 本 实 现 商 业 化。 在驱 动 电 路 设 计 方 面 ，由于SiC MOSFET 具有 更 小 的 栅 极 电 荷 ，开关速度更快，使得栅源极电压振荡问题更加突出。同时，开关过 程 中 的 漏 源 极 电 压 和 漏 极 电 流 超 调 问 题 也 带来了 不 可 忽 视 的 电 气 应 力 威 胁 。 因此 ，设计 一 个 能充分 发 挥 SiC MOSFET 性能 的 驱 动 电 路 成 为 了 当前研究的热点。

已有 研 究 中 ，常规 无 源 门 极 驱 动 电 路（Conven‑tional gate driver， CGD）通过 预 先 设 置 驱 动 参 数 或添加 无 源 器 件 可 应 对 上 述 问 题 。 该方 法 通 常 以 增加栅 极 电 阻 或 栅 源 极 间 并 联 电 容 等 方 式 实 现 SiC MOSFET 工作时电路参数保持不变。文献［3‑4］中为了 解 决 电 流 和 电 压 过 冲 问 题 在 驱 动 电 路 中 增 加了栅 极 电 阻 。 然而 ，该方 法 会 导 致 开 关 损 耗 增 加 ，用于 SiC MOSFET 时无 法 充 分 发 挥 其 自 身 高 开 关速度 的 优 势 ，一定 程 度 上 削 弱 了 SiC MOSFET 的优势。

在无 源 门 极 驱 动 电 路 基 础 上 ，通过 增 加 反 馈 控制或 有 源 器 件 可 以 进 一 步 优 化 器 件 的 开 关 性 能 ，形成有 源 门 极 驱 动 电 路（Active gate driver， AGD）。文献［5‑6］以功 率 器 件 开 关 时 的 电 流 变 化 率 为 检 测对象 ，实现 栅 极 电 流 动 态 调 节 。 然而 ，设计 辅 助 电路调 节 栅 极 电 流 较 为 复 杂 ，因需 要 高 响 应 速 度 使 得驱动电路不易实现。文献［7‑8］通过检测 SiC MOSFET 漏源 极 电 压 和 漏 极 电 流 的 状 态 动 态 切 换 驱 动电压 。 由于 切 换 电 压 提 供 的 电 平 有 限 ，且调 节 范 围较窄 ，对电 压 电 流 的 过 冲 抑 制 效 果 仍 有 局 限 性 。 抑制导 通 电 流 尖 峰 及 关 断 电 压 尖 峰 的 另 一 有 效 方 法是增 加 变 栅 极 电 阻 ，文献［9］检测 SiC MOSFET 漏源极 电 压 和 漏 极 电 流 状 态 判 断 其 所 处 的 阶 段 ，以特定时 间 段 接 入 特 定 的 栅 极 电 阻 方 式 达 到 改 善 开 关波形 的 作 用 。 但该 方 法 存 在 的 主 要 问 题 是 面 对 复杂工 况 难 以 发 挥 作 用 ，为了 覆 盖 多 工 况 在 电 路 中 接入多开关管则增加了驱动电路设计的复杂性。

综上 所 述 ，无源 门 极 驱 动 电 路 易 于 实 现 但 无 法充分发挥 SiC MOSFET 的开关性能优势，甚至会造成开 关 损 耗 增 加 。 有源 门 极 驱 动 电 路 增 强 了 开 关过程 的 可 控 性 ，但额 外 增 加 的 运 放 或 集 成 芯 片 会 使驱动 电 路 的 设 计 和 控 制 变 得 复 杂 。 同时 ，设计 高 性能的 驱 动 电 路 时 需 要 考 虑 信 号 传 输 过 程 中 的 响 应速度 和 响 应 时 间 ，即有 源 驱 动 硬 件 电 路 从 检 测 到 发出控 制 信 号 的 延 迟 情 况 。 已有 研 究 中 需 要 检 测 漏源极 电 压 和 漏 极 电 流 等 状 态 从 而 做 出 控 制 指 令 ，但未对 检 测 过 程 硬 件 的 延 时 情 况 进 行 详 细 说 明 ，使得电路 的 工 作 过 程 不 够 透 明 ，难以 进 一 步 分 析 驱 动 电路设计的优越性。

为了充分发挥 SiC MOSFET 的应用优势，本文设计 了 一 个 电 压 电 流 过 冲 状 态 快 速 检 测 的 有 源 门极驱 动 电 路 。 首先 通 过 分 析 SiC MOSFET 的导 通和关 断 过 程 ，确定 以 漏 极 电 流 变 化 率 、漏源 极 电 压变换 率 和 栅 极 电 压 作 为 快 速 检 测 目 标 设 计 状 态 检测电 路 ；然后 设 计 控 制 电 路 对 栅 极 电 流 进 行 主 动 调节 ；最后 ，给出 详 细 的 电 路 设 计 方 案 和 器 件 选 型 结果，搭建测试平台进行实验验证。

1\. SiC MOSFET 开关特性

SiC MOSFET 的开通过程可以区分为四个阶段 ，分别是导通延迟阶段（t0~t1）、漏极 电 流 上 升 阶段（t1~t2A）、漏源 极 电 压 下 降 阶 段（t2A~t3）和完 全 导通阶 段（t3~t4）。 同理 ，关断 过 程 也 可 分 为 四 个 阶段 ，分别 是 关 断 延 迟 阶 段（t5~t6）、漏源极电压上升阶段（t6~t7A）、漏极电流下降阶段（t7~t8）和完全关断阶段（t8~t9）。 SiC MOSFET 的开 通 和 关 断 特 性 曲线如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQNQDa0ibpMYUlnBEG4zDE4AKk7jKwckY0OGGKwic5aa7ia091q9pER0QXQ/640?wx_fmt=png)

图 1 展示 了 脉 冲 宽 度 调 制（Pulse width modulation， PWM）VEE 曲线、漏极电流 Id 曲线、漏源极电压Vds 曲线 、驱动 电 压 Vgs 曲线 、栅极 电 流 ig 曲线 。 其中，VCC 为正向驱动电压、VEE 为负向驱动电压、Vdc 为直流 母 线 电 压 。 同时 ，由于 漏 极 电 流 上 升 速 率 受 栅极电 流 的 影 响 ，因此 开 通 过 程 中 ，在漏 极 电 流 上 升阶段 ，通过 减 小 栅 极 电 流 可 有 效 抑 制 电 流 过 冲 ，减小的 电 流 为 ig-ig1。 关断 过 程 中 ，在漏 极 电 流 下 降阶段 减 小 栅 极 电 流 能 够 降 低 电 流 下 降 速 率 ，进而有效抑制电压过冲，减小的电流为-ig+ig2。

2\. 有源门极驱动电路硬件设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQ3uSK3rsnzMZSGRe9Pfs0dPlNhm9YRwz3ichjBuEeDd1BgmpTMxxAdGg/640?wx_fmt=png)

有源 门 极 驱 动 电 路 原 理 图 如 图 2 所示 ，所设 计的有 源 门 极 驱 动 电 路 包 括 状 态 检 测 电 路 和 执 行 电路 。 状态 检 测 电 路 可 分 为 开 通 状 态 检 测 电 路 和 关断状 态 检 测 电 路 ，执行 电 路 包 括 栅 极 电 流 分 流 电 路和栅 极 电 流 注 入 电 路 ，主要 负 责 接 收 检 测 信 号 并 控制开 关 管 接 入 功 率 器 件 栅 极 端 ，实现 栅 极 电 流 的 动态调节。

2.1 开通状态检测电路

SiC MOSFET 开通 过 程 存 在 的 振 荡 会 干 扰 信号检 测 导 致 错 误 判 断 。 为了 降 低 误 判 率 ，本文 设 计的开通状态检测电路由电流上升速率 dId/dt 检测电路和 驱 动 电 压 Vgs‑on 检测 电 路 组 成 。 其中 ，利用 SiC MOSFET 的开 尔 文 源 极 与 功 率 源 极 之 间 存 在 的 寄生电 感 LsS 可以 检 测 电 流 上 升 速 率 。 其原 理 是 快 速变化 的 漏 极 电 流 Id 会在 寄 生 电 感 LsS 上产 生 恒 定 数值的感应电压 VsS，转换关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQZnn6AHOVib8pqHVrrb3xLxOGXQXsmTHiaACjNKIpWC164Dj1ANicfHiaTg/640?wx_fmt=png)

在此 基 础 上 ，通过 设 定 阈 值 电 压 Vr3 并与 VsS 进行比 较 ，则可 判 断 器 件 当 前 是 否 处 于 电 流 上 升 阶段 。 而 Vgs‑on 检测 电 路 则 需 要 设 定 比 较 器 阈 值 电 压区间［Vr1，Vr2］，当驱 动 电 压 处 于 区 间 范 围 内 时 则 认为器件处于开通状态。

由图 2 可知 ，电流 上 升 速 率 检 测 电 路 由 肖 特 基二极 管 D1，分压 电 阻 R8、R9 和比 较 器 OP3 组成 ，二极管 D1 用于排除关断过程中的干扰信号，比较器的阈值电压 Vr3 可计算为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQhYFibcf3gEygThJ9ukpuWcJuC3jiczg1JLgeyPfiaPmzXMRt62bzRfGSA/640?wx_fmt=png)

其中，Vth\_in 为器件开通时内部测得的阈值电压；gfs 为SiC MOSFET 的跨 导 ；LS 为功 率 源 极 的 寄 生 电 感 ；Rg 为栅极电阻；Ciss 为输入电容。此外，分压电阻 R6、R7，比较 器 OP1、OP2 以及 逻 辑 与 门 AND3 构成 了Vgs‑on 检测 电 路 ，阈值 电 压 Vr1 和 Vr2 的取 值 可 分 别 计算为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQuftyeOt7G8S3Yia8v4rKk6sJ4yXEvXjFVVEaR8yic5jPVCwbHTB8yMaA/640?wx_fmt=png)

其中 ，Vmiller 为米 勒 平 台 电 压 ，Vth 为器 件 导 通 阈 值 电压 。 由于 漏 极 电 流 上 升 阶 段 持 续 的 时 间 非 常 短 ，为了获 取 最 佳 的 控 制 性 能 ，开通 状 态 检 测 电 路 检 测 时间总和需远小于电流上升的时间。表 1 给出了开通状态检测电路所选器件的硬件响应延时情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQUsdWy6r0d5mhTBxc6a2xCziaecjdwrPuAwUa3iachUuC2tBlGN2zicyicA/640?wx_fmt=png)

2.2 栅极电流分流控制电路

栅极 电 流 分 流 电 路 是 一 个 信 号 执 行 电 路 ，利用开通状态检测电路 AND1 的输出信号判断是否需要在驱 动 回 路 上 接 入 旁 路 电 路 ，实现 部 分 栅 极 电 流 分流。如图 2 的区域（2）所示，控制电路由双极性结型晶体 管（Bipolar junction transistor， BJT）射极 跟 随电路、NMOS 开关管（MOS1）、单向二极管和电流分流调节电阻 R10 组成。同时，分流电路选用器件的响应延时不能过长。表 2 给出了开通状态控制电路所选器 件 的 硬 件 响 应 延 时 情 况 ，根据 数 据 手 册 计 算 得到总延时为 27.0~38.4 ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQSRXWX8ufgUKBLyibibquO2vwxXEjiaFkzcrHTuvjwphMqnpIia5XbaaLGQ/640?wx_fmt=png)

为了进一步测试选用器件的响应延时 ，需要对开关过程中检测电路的硬件延迟进行实验 测试 ，测试电路如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQ3ZViciab9DufEmxZBOwxZcxbFljGM8AjzTRcw8OFFEqsoySx2Xmtg68w/640?wx_fmt=png)

输入 信 号 A1 是一 个 大 于 Vr3 的信 号 ，可以 使 得OP3 持续 输 出 高 电 平 ；A2 为模 拟 PWM 的输 入 信 号 ；A3 为中间端的逻辑与门输出信号 ；Aout 为输出信号 ，测试结果如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQ34yk6ZDV2b1j9KITnIBok4hVpiamFOnbIxVibR4Pe4XJs7hSJupziabCQ/640?wx_fmt=png)

2.3 关断状态检测电路

类似 于 开 通 状 态 检 测 电 路 ，关断 状 态 检 测 电 路由漏 源 极 电 压 上 升 速 率 dVds/dt 检测 电 路 和 驱 动 电压 Vgs‑off检测电路组成。前者利用 RC 微分电路将漏源极 电 压 上 升 速 率 转 化 为 恒 定 的 电 压 信 号 Vref，转换关系式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQO73zYmhmAemSt6doicdibHl6qYJqHMa76ylLysgfd3aCGgbHjLvjG2aA/640?wx_fmt=png)

在此基础上，通过设定比较器阈值电压 Vr6 并与Vref 进行 比 较 则 可 判 断 器 件 当 前 是 否 处 于 电 压 上 升阶段。比较器的阈值电压 Vr6 可计算为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQicKQRZwZoDJHmhJEvaLZzaAcanMbxG8ic6TZvziafiaMRkoX0Gp5HGdbVA/640?wx_fmt=png)

其中 ，Cgd 为栅 漏 极 电 容 ，R3 和 R4 为分 压 电 阻 。 而驱动电 压 Vgs‑on 检测 电 路 则 需 要 设 定 比 较 器 阈 值 电 压区间［Vr4，Vr5］，当驱动电压处于区间范围内时则认为器件处于关断状态。比较电压 Vr4 和 Vr5 的计算公式分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQaFbibjUMpEDNdricicjB6GudpDXhxPP0doVJSEFCB563MKiafP6ia3ffk4A/640?wx_fmt=png)

其中：R1、R2 为分压电阻；Vgs（t7A）为 t7A 时刻的驱动电压 Vgs 的值 ，即输 入 电 容 Ciss 的初 始 电 压 为 米 勒 电 压Vmiller并经过 tif放电时间后的电压值，其计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQ14qEW8phuUauibv0PW1TAFJXZU8lNNOGOXVsJlSJGIpeA8jkuOY2Mhw/640?wx_fmt=png)

其中，tif为 t7A 和 t7 的时间差，其计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQNJVxaNRPSK9HOZ2E7nOMGGshWr6LZFKce57IPUrJJksiby5eWmju98w/640?wx_fmt=png)

其中，Cgs 为栅源极电容。结合硬件电路对响应时间的要求，选用的单路电压比较器（OP6）、双路电压比较器（OP4、OP5）和逻 辑 与 门（AND2、AND4）器件同表 1。

2.4 栅极电流注入控制电路

栅极 电 流 注 入 电 路 通 过 接 收 关 断 状 态 检 测 电路 AND4 的输出信号判断是否需要向栅极端注入正向电流。由图 2 的区域（4）所示，控制电路由 BJT 射极跟 随 电 路 、PMOS 开关 管（MOS2）、单向 二 极 管 和电流分流调节电阻 R5 组成。此外，分流电路选用器件的 响 应 延 时 不 能 过 长 。 关断 状 态 控 制 电 路 中 的BJT 射极 跟 随 电 路 器 件 与 表 2 相同 ，MOS2 选择 了BSS308PE（PMOS），响应延时为 20.8~31.4 ns。

3.双脉冲实验

为了 验 证 本 文 设 计 的 有 源 驱 动 电 路 的 有 效 性 ，搭建了如图 5 所示的双脉冲实验平台。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQpcCiaxEu20HKYX6e8Bdez8GOr4udDp7zPzLJUR0t19ovKTiaImVIdPwg/640?wx_fmt=png)

采用的SiC MOSFET模块的型号为CAS300M12BM2，模块参数如表 3 示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQaCsBKKYMic5e8IfqMJCI1Tualc9d4YnUeDMFDB6lMkNrAhiadA6yx2fw/640?wx_fmt=png)

各仪器设备的具体参数如表 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQicJbicBZhWZibcFXQp26ZsUANMOAcP5fuy3CpFd6L3QKGn3YCcgOMbUJw/640?wx_fmt=png)

实验条件设置中，直流端母线电压为 300 V，负载电 流 为 110 A，驱动 电 路 的 栅 极电 阻 Rg 为 6.8 Ω。为了 验 证 设 计 的 有 源 驱 动 电 路 的 优 越 性 ，设置 对 比实验与传统驱动电路进行对比。

3.1 开通过程实验验证

开通 过 程 特 性 波 形 对 比 如 图 6 所示 ，与使 用CGD 方案 的 电 路 相 比 ，使用 AGD 方案 的 电 路 开 通电流 过 冲 量 降 低 了 27 A，减小 了 44.3%。 同时 ，使用 AGD 方案的漏极电流 Id 波形振荡幅度更小，振荡周期 更 少 、时间 更 短 ，可以 使 器 件 快 速 进 入 稳 定状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQC1ndTClM9UodfMNjB9Ab4tPiayzT6rso0yZH9asZdWicQyDQkxrQdicZA/640?wx_fmt=png)

开通 过 程 中 ，理论 设 计 的 栅 极 电 流 减 小 时 间 为漏极 电 流 ig 上升 的 后 半 段 。 在图 6 中可 观 察 到 电 流上升 持 续 时 间 为 110 ns，触发 信 号 经 过 检 测 电 路 延时后 在 电 流 上 升 的 后 半 段 开 启 分 流 电 路 的 MOS1管 ，达到 预 期 设 计 的 控 制 效 果 。 开通 状 态 检 测 电 路的其他逻辑脉冲延时情况如图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQkC1ibibJwp3SJfWhgqU6V1icz7K7l5Qk2ux2dXuYombyCVrfh1vMHwTiaw/640?wx_fmt=png)

在 t1~t2A 阶段 ，Vgs‑on 检测 电 路 AND3 输出 高 电平，感应电压 VsS 分压后仍大于设定比较电压 Vr3，使得 OP3 输出 高 电 平 。 此时 ，逻辑 与 门 AND1 接收 两路高电平信号后输出高电平控制 MOS1 管导通。经过约 60 ns 的延时后，分流电路在 Id 上升的后半段被导通 ，栅极 电 流 ig 经过 电 阻 R10 流向 地 端 ，栅极 电 减小 为 ig-ig1，漏极 电 流 的 变 化 率 也 随 之 减 小 ，相应的开 通 电 流 过 冲 量 减 小 。 在 t2A~t3 阶段 逻 辑 与 门AND1 输出低电平控制 MOS1 管关断，电流分流电路被阻断，栅极电流恢复至 ig。

3.2 关断过程实验验证

关断 过 程 特 性 波 形 对 比 如 图 8 所示 ，与使 用CGD 方案 的 电 路 相 比 ，使用 AGD 方案 的 电 路 关 断电压 过 冲 量 降 低 了 28 V，减小 了 53.8%。 同时 ，使用 AGD 方案的电路漏源极电压 Vds 波形振荡幅度更小 ，振荡周期更少时间更短 ，可以使器件快速进入稳定状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQVxCb5Veupej2pLYxSjTlB0RFTUPNB7Vu6BcBFWYkIFGkxiajzdiaDU1Q/640?wx_fmt=png)

关断 过 程 中 ，综合 考 虑 触 发 延 时 情 况 ，电路 设计的 栅 极 电 流 减 小 时 间 为 漏 源 极 电 压 Vds 上升 的 后半段 以 及 漏 极 电 流 Id 下降 的 前 半 段 。 由图 8 观察 的 Vds 持续时间 105 ns，当触发信号经过检测电路延时后 基 本 在 电 压 上 升 的 后 半 段 开 启 分 流 电路 的MOS2 管 ，达到 预 期 设 计 的 控 制 效 果 。 关断 状 态 检测电路的其他逻辑脉冲延时情况如图 9 所示。为了降低检测电路硬件延时（实验测试延迟平均为 40 ns左右）对最 佳 调 控 时 间 的 影 响 ，在漏 源 极 电 压 Vds 上升的 后 半 段 开 通 电 流 注 入 电 路 ，漏极 电 流 下 降 的 前半段 关 断 注 入 电 路 。 在 t6~t7A 阶段 ，Vgs‑off 检测 电 路AND2 与比较器 OP6 输出高电平后，逻辑与门 AND4输出 高 电 平 控 制 MOS2 导通 。 此时 ，电流 注 入 电 路被导 通 ，向栅 极 端 注 入 正 向 电 流 ，栅极 电 流 为 -ig+ig2，使得关断电压过冲量得到减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQUpzlGlUXHxBxmdeQD8ibqaibFgTibt72eAYo2fxa5EGictA7lQxxic7qUTg/640?wx_fmt=png)

在 t7A~t8 阶段 逻 辑 与 门 AND4 输出 为 低 电 平 后MOS2 管及时关断，电流分流电路被阻断，栅极电流恢复至 ig。

实验 中 ，传统 驱 动 电 路 与 有 源 门 极 驱 动 电 路 的栅极电流实验波形如图 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQIvib4qtkANCs9zyg1kmnFxBlI97BvrrAgkjLbPC7NYnzfbfkKxpjMibQ/640?wx_fmt=png)

可以 看 出 ，在电 流 上 升 阶 段 与 电 压 下 降 阶 段 ，所提 出 的 有 源 门 极 驱 动 电 路 方 案 能 够 有 效 实 现 在特定 阶 段 降 低 栅 极 电 流 ，而器 件 处 于 其 他 过 程 时 的栅极 电 流 曲 线 保 持 一 致 。 这说 明 所 提 出 的 基 于 开关瞬 态 反 馈 的 SiC MOSFET 栅极 电 流 动 态 调 节 电路的 控 制 信 号 发 生 时 间 精 确 ，且具 有 良 好 的 实 时 性和有效性。

通过 对 器 件 开 关 时 的 电 流 电 压 进 行 积 分 可 获得相应的开关损耗。AGD 和 CGD 的损耗变化波形如图 11 所示 。 AGD 和 CGD 在双 脉 冲 电 路 中 的 表现数据如表 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskaibfIPQ1hjnovWM7RLibIUQhq0zDWqCYuFtyxzJ6WKMW08Ufzj1sckX77vWmaO9iaEc7gFzsRzh5qA/640?wx_fmt=png)

结合 图 11 和表 5 可知 ，AGD 开关 总 损 耗 为16.9 mJ，CGD 开关 总 损 耗 为 12.2 mJ。 相比 于CGD，应用所设计的 AGD 平均损耗增加，开关过程产生的损耗多了 38.5%。然而，AGD 开关过程中电流过 冲 量 减 小 了 44.3%，关断 电 压 过 冲 量 减 少 了53.8%，极大 地 降 低 了 开 通 漏 极 电 流 和 关 断 漏 源 极电压 的 平 均 过 冲 量 ，避免 器 件 误 开 关 ，甚至 损 坏 器件。因此，增加的开关损耗是可以接受的。

4 结 论

本文 针 对 SiC MOSFET 应用 过 程 中 存 在 的 电压电 流 过 冲 和 驱 动 电 路 的 可 靠 性 问 题 ，提出 了 一 种电压 电 流 过 冲 状 态 快 速 检 测 的 有 源 门 极 驱 动 电 路设计。对 SiC MOSFET 的开关过程进行分析，确定以漏 极 电 流 变 化 率 、漏源 极 电 压 变 化 率 和 栅 极 电 压作为 快 速 检 测 目 标 设 计 状 态 检 测 电 路 ，所设 计 的 检测电路硬件平均耗时为 40 ns。在此基础上，设计控制电 路 对 栅 极 电 流 进 行 分 流 与 注 入 调 节 。 最后 ，搭建测 试 平 台 进 行 了 实 验 测 试 ，实现 了 电 压 电 流 过 冲抑制 ，使得 SiC MOSFET 更快 进 入 稳 定 状 态 ，整个SiC 开通 、关断 过 程 的 电 流 上 升 和 电 压 上 升 时 间 为105~110 ns。 此外 ，本文 给 出 详 细 的 电 路 设 计 和 器件选 型 方 案 ，在考 虑 硬 件 延 时 的 基 础 上 使 得 驱 动 电路的 工 作 流 程 更 为 透 明 ，有利 于 设 计 更 合 理 更 有 效的控制策略，具有重要参考意义。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)