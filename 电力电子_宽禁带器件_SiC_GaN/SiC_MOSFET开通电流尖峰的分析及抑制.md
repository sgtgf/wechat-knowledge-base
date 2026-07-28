# SiC MOSFET开通电流尖峰的分析及抑制


> 原文地址: [https://mp.weixin.qq.com/s/d-mG7sR9bxTS2GM\_ld3rzw](https://mp.weixin.qq.com/s/d-mG7sR9bxTS2GM_ld3rzw)

**文章来源：**电力电子技术

**作者：**孙 丽 敬 1、 张 雷２， 宋 振 浩1 、 郑 遵 宇２（１ ． 中 国 电 力 科 学 研 宄 院 有 限 公 司 ;２ ． 中 国 矿业大 学 ， 电 气 与 动 力 工 程 学 院  ）

**摘 要 ：** 在 桥 式 结 构 的 电 压 源 型 变 换 器 中 ，IGBT 器 件 需 要 反 并 联 二 极 管 以 保 证 续 流 。 而 碳 化 硅 （ SiC ） 金 属 氧 化 物 半 导 体 场 效 应 晶 体 管 （ MOSFET ） 由 于 具 有 双 向 导 通 的 能 力 ，且 内 部 寄 生 体 二 极 管 ，所 以 无 需 外 部 增 加 反 并 联 二 极 管 。 但 是 体 二 极 管 的 反 向 恢 复 问 题 、 导通 压 降 过 大 问 题 将 降 低 变 换 器 效 率 。 所 以 目 前 很 多 应 用 中 仍 然 在 SiC MOSFET外 部 反 并 联 SiC 肖 特基 势 垒 二极 管 （ SBD ） 进行 续 流。 虽 然 SiS SBD 无 反 向 恢 复 电 流 ， 但 是 SBD 的 结 电 容 会 导 致 较 大 的 主 开 关 管 开 通 电 流 尖 峰 。 为 了 得 到 最 优 的 续 流 方 式 ，此 处 分 析 了 SiC SBD 续流 、 SiC MOSFET 体 二 极 管 续 流 以 及 两 者 并 联 续 流 ３ 种 模 式 下 开 通 电 流 尖 峰 的 组 成 成 分 及 各 成 分 的 产 生 原 因 。 实 验 结 果 表 明 利 用 体 二 极 管 和 SBD 并 联的 方 式 效 果 最 差 。 为 了 研 宄 电 流 尖 峰 的 变 化 规 律 ， 实 验 中 改 变 直 流 侧 电 压 和 开 关 速 度 等 外 部 条 件 ，观 察 电 流 尖 峰 的 变化 。 实 验 结 果 表 明 开 关 速 度 对 电 流 尖 峰 的 影 响 最 大 。 最 终 ， 提 出 了 ３ 种 抑 制 开 通 电 流 尖 峰 的 方 法 。

**关 键 词 ：** 金 属 氧 化 物 半 导 体 场 效 应 晶 体 管 ； 开 通 电 流 尖 峰 ； 反 向 恢 复 电 流

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7ENuHHdV89F6YHJclRtnreytMKv8jq6JtANyO2fViaPc3zFNouRUXQIg/640?wx_fmt=png&from=appmsg)

**ｌ. 引 言**

与 传 统 硅 （ Si ）器 件 相 比 ， SiC 器 件 具 有 耐 高 压 、 耐 高 温 、 高 开 关速 度 等 优 势 ， 己 成 为 国 内 外 学 者 的 研 究 热 点  。 其 中 SiC MOSFET 开 关 速 度 快 ，且 无 拖 尾 电 流 ， 所 以 开 关 损 耗 相 较 Si IGBT 大 幅 减 小 ， 具 备 取 代 Si IGBT 的 潜 力 。 而 且 MOSFET具 有 双 向 导 通 能 力 ， 可 工 作在 同 步 整 流 模 式 ， 减 小 器 件 通 态 损 耗 ， 从而 提 高 功 率 变 换 器 的 工 作 效 率。

SiC MOSFET 应 用 于 桥 式 结 构 的 电 压 源 型 变 换 器 时 ， 在 开 通 过 程 中 会 产 生 较 大 的 尖 峰 电 流 ， 导 致 器 件 损 耗 增 大 ， 甚 至 会 造 成 器 件 失 效。 但 是 在SiS MOSFET 两 端 并 联 SBD 是 否 必 要 值 得 商 榷 。文 献对 其进 行 了 论 述。

在 设 计 SiC MOSFET 驱 动 或 主 电 路 时 ， 寄 生参 数 是 必 须 考 虑 的 因 素 ， 但 是 大 部 分 只 关 心 寄 生 电 感 。 较 少 文 献 讨 论 实 验 平 台 寄 生 电 容 对 开 关 管 的 影 响 。此 处 针 对 实 验 中 的 相 关 现 象 得 到 了 印 制 电 路 板 （ PCB ） 寄 生 电 容 的 存 在 和 影 响 。

**２.  电 流 尖 峰 产 生 机理**

功 率 变 换 器 大 多 采 用 桥 式 结 构 ， 以 图 １所 示 的 半 桥 为 例 ， 图 中 V1为 主 开 关 管 ， Ｖ２ 为 互 补 管 ，Coss1 和 Coss2 为 MOSFET 输 出 电 容 ， ＶＤ1， 和 ＶＤ２ 为 MOSFET 体 二 极 管 。 负 载 为 空 心 电 感 ， CL 为 电 感 的 寄 生 电 容 ，R 为 寄 生 电 阻 。Ldc 为 母 线 寄 生 电 感 。Ｃ12 ， Ｃ13 ， Ｃ32 为 PCB 寄 生 电 容 （ 由 PCB 敷 铜 箔 引 起 ） ，其 中 ， C12 为 正 负 直 流 母 线 间 的 寄 生 电 容 ， C13 为正 直 流 母 线 与 变 换 器 输 出 端 的 寄 生 电 容 ， C32 为 负 直 流 母 线 与 输 出 端 的 寄 生 电 容 。 SiC MOSFET 开 通 时 产 生 的 电 流 尖 峰 主 要 成 分 有 ： VD2 的 反 向 恢 复 电 流 、 SiC MOSFET 输 出 电 容 上 的 充 放 电 电 流 、 CL 的充 电 电 流和 C12 ， C13 的 充放 电 电 流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7wkQzaOicdEl5YUeXyiaoxbAicfcgoK6sWeURlvv1qHib5yKO8JdpwqqO2A/640?wx_fmt=png&from=appmsg)

**2.1  二 极 管 反 向 恢 复 电 流**

PIN 二 极 管 具 有 反 向 恢 复 特 性 ， 反 向 恢 复 过 程 发 生 于 二 极 管 由 导 通 至 阻 断 的 切 换 过 程 中 。SiC MOSFET 寄 生 的 体 二 极 管 属 于PIN 二 极 管 ， 故 存 在 反 向 恢 复 电 流 。 图 ２ 为 PIN 二 极 管 反 向 恢 复 具 体 过程 ,iD 和 UDS 别 为 二 极 管 的 电 流 和 电 压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7JkoiatPC9FhOSw0kdqrQ6EL8UdQvc8jpicUzwfnRYxOXAdL1aSfL3yLA/640?wx_fmt=png&from=appmsg)

**2.2   SiC MOSFET 输 出 电 容 和 负 载 寄 生 电 容**

图 １ 中 ， Ｖ1 开 通 前 ， Ｖ2 处 于 关 断 状 态 ， 此 时 负 载 电 流 通 过 V2 中 的 体 二 极 管 续 流 。 文 献 详 细 阐 述 了 负 载 寄 生 电 容 对SiC MOSFET 性 能 带 来 的 负 面 影 响 ， 并 通 过 实 验 进 行 验 证 。 同 样 ， 与 下 管 并 联 的 其 他 电 容 也 会 对 器 件 性 能 带 来 负 面 影 响 。

**2.3  PCB 寄 生 电 容**

为 了 减 小 SiC MOSFET 变 换 器 PCB 的 寄 生 电 感 ，此 处 采 用 铺 铜 的 方 式 。 ３ 块 铜 箔 之 间 不 可 避 免 的 存 在 寄 生 电 容 ， 即 C12 ， Ｃ13 ， Ｃ32 ， 如 图 １所 示 。

Ｖ1开 通 时 ， C13 两端 电 压 下 降 ，产 生 放 电 电 流 ，同 时 在 C32 上 产 生 充 电 电 流 ， 增 加 了 V1 开 通 电 流 ，增 大 了 开 通 损 耗 。 而 C12 相 当 于 吸 收 电 容 ， 对 V1 开 通 电 流 尖 峰 几 乎 没 有 影 响 ， 此 处 不 予 考 虑 。

在 IGBT 应 用 中 ， 因 为 寄 生 电 容 往 往 很 小 且 IGBT 的 开关 速 度 低 ， 所 以 极 少 考 虑 寄 生 电 容 的 影 响 。 此外 ， Si 材料 PIN 二 极 管 反 向 恢 复 电 荷 很 大 ，寄 生 电 容 充 放 电 的 电 荷 可 忽 略 不 计 。 但 是 ， SiC MOSFET 开关 速 度 快 ， 体 二 极 管 反 向 恢 复 电 荷 小 ，PCB 寄 生 电 容 的 充 放 电 电 荷 所 占 比 例 较 大 ， 所 以在 应 用 中 ， 需 要 重 视 寄 生 电 容 的 存 在 。

**３.  实 验 平 台 介 绍**

为 了 研 究 SiC MOSFET 在 桥 式 电 路 中 的 开 通 电 流 尖 峰 机 理 ， 设 计 了 实 验 测 试 平 台 ， 原 理 图 如 图 １ 所示 。 用 双 脉 冲 控 制 Ｖ1 的 开 通 和关 断 ， V2 栅 极 施 加 反 压 保 持 关 断 。 在 图 １ 中 测 试 点 test1， test2和 test3 分 别 测 试 V1 漏 极 电 流 、 V2 漏 极 电 流 和 负 载 电 流 ，但 PCB 寄 生 电 容 的 充 放 电 电 流 无 法 测 量 。 双 脉冲 信 号 如 图 ３ 所 示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7mfCB5PHCvE4u1z2SA0vKWqtMH9Gxgexxkyp4EmgRES1L9ibLPpQmGhQ/640?wx_fmt=png&from=appmsg)

驱 动 信 号 由 信 号 发 生 器 提 供 ，经 过 同 轴 电 缆 接 入 PCB 。 负 载 使 用 空 心 电 感 ， 从 而 尽 量 减 小 其 寄 生 电 容 。 利 用 RLC 分 析 仪 得 到 图 １ 中 所 示 的 负 载 电 感 等 效 模 型 中 的 电 感 值为 856uH， 寄 生 电 容 为 7.6pF ， 电 阻 为 1.13 欧。 电 压 测 量 使 用 100ＭＨｚ 带 宽 的 差 分 电 压 探 头 ， 电 流 测 量 使 用 120ＭＨｚ 带 宽的 电 流 探头 ， 示波 器 带 宽 为 100ＭＨｚ ， 实 验 设 备 为 ： AFG 2021-SC 型 信 号 发 生 器 ，3302 型 RLC 分 析 仪 ， TA042 型 电 压 探 头 ， TCP0030A 型 电 流 探头 ，DP03014 型 示 波 器 。

**４.  实 验 分 析**

在 体 二 极 管 续 流 、 SiC SBD 续 流 以 及 SiC SBD 与 体 二 极 管 并 联 续 流 这 ３ 种 续 流 方 式 下 进 行 双 脉 冲 测 试 。 并 针 对 每 种 续 流 方 式 ， 测 量 不 同 直 流 母 线 电 压 、 负 载 电 流 及 开 关 速 度 下 的 开 通 电 流 尖 峰 。

**4.1  续 流 方 式 对 电 流 尖 峰 的 影 响**

此 处 采 用 ３ 种 续 流 方 式 进 行 实 验 ， 如 图 4a 所 示 ， 更 改 续 流 方式 ， 即 在 下 管 处 放 置不 同 的 器 件。图 4b-d 分 别 对 应 SiC MOSFET  体 二 极 管 续 流 、SiC SBD 续 流 和 两 者 并 联 续 流 。 实 验 中 使 用 的 功 率 器 件 其 参数 见 表 １， 其 中 SiC MOSFET 选取 ２ 种 不 同 的 型 号 ， 而 SiC SBD 选取 ３ 种 型 号 。 不 同 型 号 的 SiC MOSFET 与 SiC SBD 组 合 进 行 实 验。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7kRAY4MF0J2lJbgVav9S2NcmYQQCjU98ymL7lkIzibWtFLX7jhXbibzicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7VDKJn1oRB375Q13augfJTGUpx25HemgORbkyLc15mNXSVHB3pvCq9g/640?wx_fmt=png&from=appmsg)

当 Ｖ1 使 用 C2M0160120D 型 的 SiC MOSFET ，保 持 漏 源 电 压 为 600Ｖ ， 负 载 电 流 为 10Ａ ，驱 动 电 阻 为 1 欧 ， 在 不 同 续 流 方 式 下 测 得 的 电 流 波 形 如图 ５ 所 示 。 其 中，i1，i2 和 i3 分 别 为 在 ３ 个 测 试 点test1 ，test２ 和 test３ 测 得 的 电 流 。 i1 规 定 正 方 向 为 由 直 流 源 流 入 半 桥 ， 规 定 正 方 向 为 由 半桥 中 点 流出 ，i2 规 定 正 方 向 也 为 由 半 桥 中 点 流 出 。 为 了 便 于 分 析 开 通 电 流 尖 峰 ， 图 中 i1，i3 为 其 实 际 值 减 去 负 载 电 流 稳态 值 ，且 起 始 时 间 定 在 i1 达 到 稳 态 值 时 刻 。 此 处 涉 及 到 test1 和 test３ 处 测 试 电 流 时 亦 如 此 表 示 。 图 5a 为 体 二 极 管 续 流 时 的 电 流 波 形 ， 测 量的 电 流分 别 用 i1a ,i2a和 i3a 表 示 。 图 5b 为 SiC SBD 续 流 时 的 电 流 波 形 ， 测 量 的 电 流 分 别 用i1b，i2b 心 和 i3b 表 示 。 图 5c 为 SiC SBD 与 体 二 极 管 并 联 续 流 时 的 电 流 波 形 ， 测 量 的 电 流 分 别 用 i1c ，i2c 和 i3c表 不 。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7o2QGdmfY7yyNibRu1mCsIgOhnwg5rA2iapQYbXbtTQQ1GicZahlPEKDAg/640?wx_fmt=png&from=appmsg)

由 图 ｌ 可 知 ， 测 量 的 电 流 大 小 关系 为 ：

i1＝i2 ＋ i3 ＋icap   （ １ ）

式 中 ：icap 为对 PCB 寄 生 电 容 的 充 放 电 电 流 ， 规 定 正 方 向 为 从 半 桥 中 点 流 入 ， 如 图 １ 所 示。

通 过 体 二 极 管 续 流 时 ， 由 于 PIN 二 极 管 的 反 向 恢 复 特 性 ， V1 开 通 电 流尖 峰 I1a 主 要 由 体 二 极 管 的 反 向 恢 复 电 流 Irecovery 、 互 补 管 输 出 电 容 充 电 电流 icoss 、 负 载 等 效 电 容 的 充 电 电 流 iL和 PCB 寄 生 电 容 充 放 电 电 流 icap 构 成 ， 即:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7CMD4tVMSqicx6vu1JMoCTmdS4LEfHdCQvHbPIkEajgXAMtkHtg6s3ng/640?wx_fmt=png&from=appmsg)

SiC SBD 和 体 二 极 管 并 联 续 流 时 ， SiC SBD 门 槛 电 压 较 小 ， 而 体 二 极 管 门 槛 电 压 约 为 SiC SBD 的 ３ 倍 。 所 以 续 流 过 程 中 ， 电 流 只 经 过 SiC SBD ，不 经 过 体 二 极 管 ， 则 体 二 极 管 就 不产 生 反 向 恢 复电 流。 经 分 析 ， Ｖ1 开 通 电 流 尖 峰 主要 由icoss，isbd，iL和icap 构 成 ， 即 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib789ibSxhESmo4QShptscHrGYbGFyUmn3qxunly7cmfc1iaibgAmBNjicjBA/640?wx_fmt=png&from=appmsg)

由 图 ５ 可 见 体 二 极 管 和 SiC SBD 并 联 续流 时电 流 尖 峰 最 大 ， 且 持 续时 间 最 长 。 为 了 分 析 电 流 尖 峰 中 的 成 分 ，此 处 通 过 测 量 的 电 流 值 分 离 出 电 流 尖 峰 中 各 部 分 电 流。 为 了 衡 量 电 流 尖 峰 对 损 耗 的 影 响 ， 对 图 ５ 中 电 流 和 分 离 出 的 各 部 分 电 流 进 行 积 分 ， 积 分 后 的 电 荷 大 小 见 表 ２ ， 其 中 ， Q1，Q2，Q3，Qrecovery，Qsbd ，Qcoss，QL 分 别为 电 流 i1，i2，i3，irecovery，isbd，icoss，iL 对 应 的 电 荷 。Qother 为 Q1 超 出 Q2 和 Q3 的 差 值 ， 即 为 PCB 上 寄 生 电 容 充 放 电 电 流 icap 的 积 分 值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7yXKsTeoBwT8SXmGepHABZWWIjKzxzuelWVxibb9LPc7lZ1hwvRxYTTQ/640?wx_fmt=png&from=appmsg)

根 据 实 验 波 形 及 电 荷 分 离 结 果 ，SiC SBD 带 来 的 电 流 尖 峰 所 占 比 例 较 高 。 相 对 于 在 减 少 反 向 恢 复 电 流 方 面 带 来 的 优 势 ， 结 电 容 导 致 的 电 流 尖 峰 问 题 更 加 严重 。

PCB 寄 生 电 容 带 来 的 电 流 尖 峰 也 占 很 大 比 例 ， 对 MOSFET 开 通 损 耗 有 很 大 影 响 ， 所 以 在 设 计 应 用 于SiC MOSFET 的 PCB 时 ， 应 尽 量 减 小 寄 生 电 容 ， 防 止 开 通 损 耗 过 大 。

**4.2  工 作 条 件 对 电 流 尖 峰 的 影 响**

**4.2.1  开 关 速 度 的 影 响**

改 变 SiC MOSFET 外 部 驱 动 电 阻 便 可 以 改 变 开 关 速 度 。 驱 动 电 阻 越 大 ， 开 关 速 度 越 慢 。 图 ６ 显 示 了 开 关 速 度对 电 流 尖 峰 的 影响 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7g4DJSBdDYRaqBAue3r8PV5VMaagdKcyZWXw0icM4Q8RC5BtvicquRYuw/640?wx_fmt=png&from=appmsg)

其 中 ， 开 关 管 为 C2M0160120D ， 续 流 管 分 别 为 采 用 SiC SBD、 体 二 极 管 以 及 体 二 极 管 与 SiC SBD 并 联 。 开 关 速 度 对 电 流 尖 峰 影 响 较 大 ： 开 关速 度 越大 ， 电 流 尖 峰 越 大 。 在 ３ 种 续 流 方 式 下 均 具有 相 同 的 规 律 。

图 ７ 给 出 了 开 通 瞬 态 的 波 形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7ZzxaX5qT5spYxEc0URCfTKWf6duj5FmEuxOiaKEicfJzl6EM8r2w2GZA/640?wx_fmt=png&from=appmsg)

其 中 ， Uds,iD 分 别 为 主 开 关 管 开 通 瞬 间 的 漏 源 极 电 压 和 漏 极 电 流 ， 续流 方式 为 C2M0160120D  体二极 管 续 流。

当 主 开 关 管 开 始 导 通 时 ， 电 流 突 然 上 升 导 致 换 流 回 路 杂 散 电 感 感 应 出 反 电 动 势 ， 使 得 漏 源 极 电 压 产 生 一 定 的 压 降 ， 即 Udrop1 。 电 流 变 化 率 越 大 ，压 降 越 大 。 第 一 个 电 流 尖 峰 irr1 结 束 后 ， 体 二 极 管具 有 了 反 向 阻 断 能 力 。 这 时 主 开 关 管 两 端 的 电 压 发 生 变 化 ， 即 Udrop2 ， 导 致 互补 管 输 出 电 容 充 电 ， 从 而 带 来 较 大 电 流 ， 产 生 第 二 个 电 流 尖 峰 irr2 。Udrop2 越 大 ， 对 互 补 管 电 容 的 充 电 电 荷 越 多 ， 第 二 个 尖 峰 带 来 的 电 荷 也 越 多 ， 开 通 损 耗 也 越 大 。 相 同 开 关 速 度下 ，互 补 管 的 输 出 电 容 越 大 ， 电 流 尖 峰 也 越 大 。 所 以 相 同 驱 动 电 阻 情 况 下 ， 体 二 极 管 和 SiC SBD 并 联 的 情 况 下 电 流 尖 峰 irr2最 大 。

值 得 注 意 的 是 ， 不 同 的 SBD 续 流 对 irr2  的 影 响 也 不  同 。 可 见 ，C2D05120A 续 流 方 式 下 irr2 最 小 ， 因为 ３ 种 SBD 中 ， C2D05120A 结 电 容 最 小 。 另 外 ２ 种 虽 然 额 定 电 流 或 额 定 电 压 更 大 ， 但 引 入 的 结 电 容 也 更 大 。 所 以 在 使 用 SBD 续 流 的 情 况 下 ， 在 满 足 电 流 要 求 的 同 时 ， 应 尽 量 选 取 结 电 容 较 小 的 SBD 。

开 关 速 度 对 电 流 尖 峰 影 响 较 大 ， 但 对 电 流 尖 峰 带 来 的 电 荷 （ 尖 峰 电 流 的 积 分 ）影 响 却 很 小 。 这 是 由 于 开 通 电 流 尖 峰 变 大 的 同 时 ， 持 续 时 间 却 在 减 小 ， 这 可 以 从 图 ６ 看 出 。

图 ８ 给 出 了 不 同 开 关 速 度 下 的 电 流 尖 峰 电 荷 。 Rc 为 外 部 驱 动 电 阻值 ， Qrr 为 电 流 尖 峰 部 分 的 电 荷 值 。 驱 动 电 阻 越 大 ， 开关 速 度 越 慢 ， 电 荷 略 微 有 减 小 的 趋 势 ，但 总 体 变 化 不 大 。 在 体 二 极 管 续 流 及并 联 续 流 两 种 方 式 下 ， 趋 势 略 微 明 显 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7z5e6YaFL12OrUR3QCMw5hGXDFv2icZFFM1DOvc638XyWk7PtOpJOBOg/640?wx_fmt=png&from=appmsg)

**4.2.2  直 流 电 压 的 影 响**

直 流 电 压 对 开 通 电 流 两 个尖 峰 的 影 响 有 所 区别 ： 对 第 一 个 电 流 尖 峰 irr1 影 响 较 小 ； 对 第 二个 尖 峰 irr2 影 响 较 大。如 图 ９ 所 示 ， i1 为主 开 关 管 的 漏 极 电 流 。 直 流 电 压 越 大 ，irr1 呈 增 大 趋 势 ， 但 不 明 显 ， 而 irr２ 增 大 幅 度 十 分 明 显 。 第 二 个 尖 峰 增 大 的 原 理 与 第 4.2.1 节 中 相 同 ， 当 直 流 电 压 增 大 时 ， 开 关 管 两 端 压 降 Udrop2 也 增 大 ， 所 以 对 互 补 管 的 电 容 充 电 电 流 增 大 ， 第 二 个 电 流 尖 峰 及 其 持 续 时 间 也 因 此 增 大 。 当 主 开 关 管 为 C2M1000170D 时 ， 实 验 结 果 同 样 符 合上 述 规 律 。 任 何 续 流 方 式 下 ，开 通 电 流 尖 峰 的 电 荷 随 直 流 电 压 的 升 高 而 升 高 。

 ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib7tqLJA0kSwFD9makia7fuG7D8SCEy1SLwjmLdYHCBnsRBwwL51UoBWfg/640?wx_fmt=png&from=appmsg)

如 图 10 所示 ， 给 出 了 不 同 直 流 电 压 下 开 通 电 流 尖 峰 电 荷 ，按 主 开 关 管 不 同 ， 实 验 分 为 两 组 ： 主 开 关 为 C2M0160120D ， 主 开 关 为C2M1000170D 。 两 组 实 验 中 ， 并 联 续 流 均 为 效 果 最 差 的 方 式 ， 因 为 并 联 给 互 补 管 带 来 更 大 的 电 容 ， 从 而 导 致 更 多 的 充 电 电 荷 。所 以 在 实 际 应 用 中 ， 开 关 管 输 出 电 容 和 SBD 的 结 电 容 应 尽 量 小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmKZ8I3TcEDJy8S6UDtQTib72kJicJAQegAAIe4khZROuFPx8TFkicOkCgtu9Dn6BiaBoP35dRSvAnd3w/640?wx_fmt=png&from=appmsg)

**５.   结 论**

此 处 针 对 桥 式 电 路 中  SiC MOSFET 并 联  SiC SBD 的 有 效 性 ， 在 不 同 续 流 方 式 下 进 行 实 验 ， 并 在 实 验 基 础 上 分 析 PCB 寄 生 电 容 对 开 通 电 流 的 影响 。 实 验 结 果 表 明 ，开 关 管 输 出 电 容 和 SBD 结 电 容 会 带 来 较 大 电 流 尖 峰 ， 在不 同 直 流 电 压 下 对 第二 个 尖 峰 影 响 尤 其 严 重 。 所 以 在 桥 式 电 路 中 ，MOSFET 并 联 SBD 的 方 式 并 不 具 有 优 势 ，反 而 会 带 来 更 大 开 通 损 耗 和 更 高 硬 件 成 本 。 仅 使 用 SBD 续 流 虽 然 在 减 小  SiC MOSFET开 通 电 流 尖 峰 方 面 有 优  势 ， 但 是 连 续 工 作 过 程 中 ， SBD 续 流 产生 的 导 通 损 耗 较 大 。 而  SiC MOSFET 可 工 作 在 同 步 工 作 模 式 下 ， 利 用 沟 道 续 流 ， 产 生 的 通 态 损 耗 较 小 。 相 较 而 言 ， 仅 用 SBD 续 流 不 利 于 变 换 器 整 体 效 率 的提 高 ，且 很 多 应 用 场 合 需 要 上 下 管 全 控 ， 即 需 采 用  MOSFET ， 不 能 仅 采 用 SBD 。 利 用 体 二 极 管 续 流 ， 虽 然 反 向 恢 复 电 流 会 带 来 少 量 的 互 补 管 的 附 加 损 耗 ， 但  SiC MOSFET 在 同 步 工 作 模 式 下 产 生 的 通 态 损 耗 较 小 。 且 体 二 极 管 仅 在死 区 时 间 内 续 流 ， 续 流 损 耗 可 忽 略 不 计 。 所 以 利 用  MOSFET 体 二 极 管 续 流 有 利 于 提 高 变 换 器 工 作 效 率 。

实 验 表 明 开 关 速 度 对 开 通 电 流 尖 峰 影 响 最 大 。 为 了 保 证 电 流 尖 峰 在 器 件 承 受 范 围 以 内 ， 防 止过 电 流 带 来 的 器 件 失 效 ， 在 开 关 速 度 的 选 择 ， 即 对 栅 极 驱 动 电 阻 的 选 择 上 应 进 行 考 量 。

直 流 电 压 主 要 影 响 开 通 电 流的 电 荷 ： 电 压 越 高 ， 电 荷 越 大 。 所 以 工 作 在 高 压 的 器 件 会 由 此 带 来 更 大 损 耗 。

根 据 实 验 结 果 ，此 处 提 出 抑 制 桥 式 电 路 中 电 流 尖 峰 的 相 应 措 施 ： ① 避 免 并 联 SBD 或 尽 量 选 取 结 电 容 较 小 的 SBD ，减 小 开 通 时 主 电 路振 荡 引 起 的 电 流 尖 峰 以 及 电 容 充 电 带 来 的 损 耗 ；② 在 PCB 设 计 布 局过 程 中 ， 尽 量 减 小 寄 生 电 容 的 容 值 ， 以 此 减 小 寄 生 电 容 通 过 SiC MOSFET 的 充 放 电 电 荷 ； ③选 择 合 适 的 栅 极 驱 动 电 阻 阻 值 ， 防 止开 关 速 度 过 快 导 致 电 流 尖 峰 过 大 。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)