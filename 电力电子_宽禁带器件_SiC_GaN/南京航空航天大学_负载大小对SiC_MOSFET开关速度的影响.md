# 南京航空航天大学:负载大小对SiC MOSFET开关速度的影响


> 原文地址: [https://mp.weixin.qq.com/s/9-i0M3EWch4xQGzjN-Geew](https://mp.weixin.qq.com/s/9-i0M3EWch4xQGzjN-Geew)

**文章来源：**电力电子技术

**作者：**刘 勇 ， 肖 岚 ，伍 群 芳 ， 刘 琦（ 南 京 航 空 航 天 大 学 ， 自 动 化 学 院 ， 江 苏 南 京 ２ １ １ １ ０６ ）

**摘 要 ：** 现 有 研 究 多 关 注 驱 动 电 阻 、 驱 动 电 压 、 寄 生 参 数 等 对 碳 化 硅 （ SiC） 金 属 氧 化 物 半 导 体 场 效 应 晶 体 管 （MOSFET ）开 关 特 性 的 影 响 ， 鲜 有 文 献 研 究 负 载 大 小 的 影 响 。针 对 负 载 大 小 影 响 SiC MOSFET开 关 速 度 这 一现 象 ， 建 立 开 关 过 程 模 型 ， 结 合 其 转 移 特 性 分 析 此 现 象 产 生 的 原 因 ， 仿 真 和 理 论 分 析 表 明 ，SiC MOSFET的 开 通 速 度 随 负 载 增 大 而 降 低 ， 关 断 速 度 随 负 载 增 大 而 増 加 。使 用SiC功 率 模 块 进 行 双 脉 冲 测 试 ， 结 果 验 证 了 理 论 分 析 的 正 确 性 。

**关 键 词 ：** 金 属 氧 化 物 半 导 体 场 效 应 晶 体 管 ；开 关 速 度 ；双 脉 冲 测 试

**ｌ.   引 言**

SiC MOSFET 在 开 关 速 度 、 导 通 电 阻 、 高 温 耐 受 能 力 等 方 面 相 较 于 传 统 硅 器 件 有 着 不 可 比 拟 的优 势 ， 在 这 种 优 势 驱 动 下 ， 其 在 电 动 汽 车 、 光 伏发 电 、 不 间 断 电 源 等 场 合 得 到 愈 发 广 泛 的 应 用 。但是 SiC MOSFET 的 有 效 通 流 面 积 小 ， 电 流 密 度 高 ，且 栅 极 氧 化 层 较 薄 ， 短 路 耐 受 能 力 差 ，这 对 其 短 路 保 护 提 出 了 更 高 要 求 ，且 应 用 于 桥 式 电 路 时 应 当格 外 注 意 其 死 区 时 间 的 设 定 ， 防 止 出 现 因 死 区 时间 过 短 引 起 的 桥 臂 直 通 问 题 。通 常 利 用 双 脉 冲 测 试 得 到 一 定 条 件 下 的 开 关 时 间 ， 留 有 足 够 裕 量 后 即 作 为 死 区 时 间 。

目 前 研 宂 较 多 的 是 驱 动 电 阻 、 驱 动 电 压 、 寄生 电 感、 寄 生 电 容  等 对 SiC MOSFET 开 关 速 度 的 影 响 ，虽 然 有 关 于 负 载 大 小 对 开 关 速 度 影 响 的 研 究 ， 但 是 并 未 解 释 该 种 现 象 产 生 的 原 因 ， 也 未 重 视 其 对 提 高 功 率 管 可 靠 性 和 降 低 开 关 损 耗 的 积极 意 义。

此 处 通 过SiC MOSFET 开 关 过 程 模 型 及 转 移 特 性 ， 说 明 其 开 关 速 度 随 负 载 大 小 变 化 的 原 因 ，即 ：SiC MOSFET 在 大 负 载 下 需 要 更 大 的 栅 源 电压 ，这 种 电 压 差 异 导 致 栅 极 放 电 时 间 的 差 异 ， 从 而 使 得 其 开 关 速 度 出 现 明 显 变 化 。借 助PSpice仿 真 说 明 受 负 载 影 响 的 主 要 开 关 阶 段 ， 并 用 功 率 模 块实 验 验 证 了 理 论 分 析 的 正 确 性 。

**２. SiC MOSFET开 关 过 程 建 模**

典 型 桥 式 电 路 拓 扑 如 图 １ 所示 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WB8z0gicq9oVJjbm5FrlJ3N7sJUzcJbvl3TDEiaoSWFhcP63fdKicETFYlg/640?wx_fmt=png&from=appmsg)

VD1为 上 管 的 续 流 二 极 管 ， V2为 下 管 ，Io为 负 载 电 流 ，Udc为 直 流 母 线 电 压 ，Uds为V2的 漏 源 电 压 ，Udriver为V2 的 驱 动 电 压 ， Rg为V2的 驱 动 电 阻 ，Cgd为V2 的 栅 漏 电 容 ， Cgs为V2的 栅 源 电 容 ，Cds 为V2的 漏 源 电 容 ， Id为V2 的 漏 极 电 流.

**2.1   开 通 过 程**

SiC MOSFET开 通 过 程 可 分 为 ４ 个 阶 段 ， 分 别 给 出 每 个 阶 段 持 续 时 间 的 表 达 式 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBz0FoRcFhggkE1sLjmx9DkcnZ3dVpicqlxdz7XQQNRTZfNa6zkdib8ouA/640?wx_fmt=png&from=appmsg)

 至 此 ， SiC MOSFET 整 个 开 通 过 程 完 成 。

**2.2   关 断 过 程**

SiC MOSFET关 断 过程 同 样 可 分 为 ４ 个 阶 段 ，分 别 给 出 每 个 阶 段 持 续 时 间 的 表 达 式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBqCicI6fQVBcpwELWYotsT0elY0s1WzjDTIWC48hwUv1fdUf1AdHzmzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBSd9ibqPbQZ9QS8VQxdu1Hw9XBxbibiaOLDVm88guyD0hHb3ichxyV8kU7A/640?wx_fmt=png&from=appmsg)

**３.  开 关 速 度 随 负 载 变 化 原 因**  

**3.1  开 关 速 度 与 负 载 大 小 的 关 系**

图 ２ 为BSM300D12P2E001 型 功 率 管 手 册 给出 的 开 关 时 间 与 负 载 大 小 的 关 系 曲 线 ， 测 试 条 件为 ：直 流 母 线 电 压 600Ｖ ， 驱 动 电 阻 0.2 欧， 驱 动 正 压 18V ，驱 动 负 压 0V， 结 温 25 度。开 通 时 间 定 义 为 Ugs 开 始 上 升 到 Id 到 达 稳 态 值 的 90％ 所 经 历 的 时 间 ， 关 断 时 间 定 义 为Ugs开 始 下 降 到 Id 到 达 稳 态 值 的 10％ 所 经 历 的 时 间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBgRS3icuCXXWYB7ibQYQpL2BRIenalsIPcZJgXwdQfcdawSb3XdL8jMicA/640?wx_fmt=png&from=appmsg)

由 图 ２ 可 知 ， 随 着 负 载 从 70A 增 大 到 545Ａ ，开 通 时 间 从 52ns 增 加 到 了 75ns ， 而 关 断 时 间 则 从 295ns 减 小 到 了 256ns，可 见 SiC MOSFET的 开 通 时 间 随 负 载 增 大 而 增 加 ， 关 断 时 间 随 负 载 增 大 而减 小 。在 实 际 使 用 过 程 中 ，这 种 现 象 会 影 响 桥 式 电 路 死 区 时 间 的 选 择 ， 若 死 区 时 间 选 择 过 短 ， 则 会 在 小 电 流 时 造 成 直 通 ， 损 坏 功 率 管 ， 若 死 区 时 间 选 择 过 长 ， 则 会 使 得 输 出 波 形 质 量 降 低 。

**3.2 开 关 速 度 随 负 载 变 化 的 原 因**

图 ３ 为 SiC MOSFET 导 电 沟 道 形 成 过 程 示 意 图 ， 当 Ugs＜ Uth 时 ， 如 图 ３ａ ， 由 于 漏 源 极 之 间 是 两 个反 向 串 联 的 Ｐ Ｎ 结 ，故 无 法 建 立 漏 极 电 流 。当 Ugs＞Uth 时 ， Ｐ衬 底 表 面 层 中 的 空 穴 全 部 被 耗 尽 ， 大 量 自 由 电 子 被 吸 引 到 表 面 层 ， 形 成 导 电 沟 道 ， 即“反 型层 ”， 如 图 3b。Ugs 越 大 ，反 型 层 越 宽 ， SiC MOSFET 的 导 电 能 力 越 强 ， 故 会 形 成 如 图 ４ 所 示 的 转 移 特性 曲 线 ， 该 曲 线 满 足 式 （ ２ ） 。图 ４ 中 浅 灰 色 和 深 灰色 曲 线 分 别 表 示 功 率 管 开 通 和 关 断 过 程 ， 实 线 表示 大 电 流 负 载 ，虚 线 表 示 小 电 流 负 载 ，ａ~ｅ 点 分 别 对 应 开 通 过 程 的 t 0~t 4和 关 断 过 程 的 ｔ5~ｔ9 。SiC MOSFET 开 关 速 度 之 所 以 会 受 到 负 载 大 小 的 影响 ，主 要 是 因 为 功 率 管 的 转 移 特 性 ， 不 同 大 小 的 负 载 意 味 着 不 同 的 Id， 而 需 要 达 到 更 大 的 Id ， 需 要 提供 更 大 的 Ugs，而 栅 极 充 放 电 速 度 基 本 恒 定 ， 故 不 同 的 负 载 大 小 会 对 功 率 管 的 开 关 速 度 产 生 较 大 影 响 。结 合 开 关 过 程 和 转 移 特 性 曲 线 解 释 不 同 大 小 负 载 下 SiC MOSFET 开 关 速 度 变 化 的 原 因 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBtBxFg39UyJBcyQrzAvkob1GmpxklUrwrnhe5vyQgciaqPulrxGjha3g/640?wx_fmt=png&from=appmsg)

开 通 过 程 

开 通 过 程 共有 ４ 个 阶 段 ， 其 中 开通 延 时 阶 段［t 0-t 1 ］ (a-b） 和 过 驱 动 阶 段 ［t 3-t 4 ］(d-e）基 本 不 受 负 载 大 小 影 响 ，这 是 因 为 功 率 管 开 通 瞬 间 电 流 为 零 ， 对 应 的 Ugs=Uth ; 而 过 驱 动 阶 段 为 Ciss 的 充 电 过 程 ， 与 负 载 大 小 无 关 。

电 流 上 升 阶 段  持 ［t 1-t 2 ］续 时 间 满 足 式 （ ３ ） ， 式 中 的 Uth+Io/gm 即 为 建 立 大 小 为 Io 的 漏 极 电 流 所 需 要 的 栅 源 电 压 ， 该 电 压 满 足 图 ４ 所 示 的 转 移 特 性 。图 ４ 中 ， 电 流 上 升 阶 段 对 应 b-c，在 栅 极 充 电 速 度 一 定 的 情 况 下 b-c 段 比b＇-c＇ 段 时 间 更 长 。由 式 （ ３ ）及 图 ４ 可 知 ， 随 着 负 载 增 大 ，所 需 的 栅 源 电 压 增 大 ， 电 流 上 升 时 间 变 长 。

电 压 下 降 阶 段 ［ｔ2\-ｔ３ ］ （ｃ-d )  满 足 式 （ ４ ） ， 随 着 负 载 电 流 增 大 ，栅 极 充 电 电 压 越 小 ， 电 压 下 降 时 间 变 长 ， 因 此 功 率 管 开 通 时 间 变 长 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WB7ibDkSyLjluoYvPbExeYJYVJ5nuTWZGCEpTKvvLjY2wJ4409k842gog/640?wx_fmt=png&from=appmsg)

图 ５ 为 功 率 管 开 通 过 程 的 PSpice 仿 真 波 形 ，其 中 虚 线 为 漏 极 电 流 波 形 ， 实 线 为 漏 源 电 压 波 形 ，考 虑 到 实 际 应 用 要 求 ， 仿 真 工 况 与 手 册 中 提 供 的 测试 工 况 并 不一致 ， 仿 真 直 流 母 线 电 压 采 用 540Ｖ ，开 通 驱 动 电 阻 为 4.5 欧， 关 断 驱 动 电 阻 为 ５.5 欧，驱动 正 压 为 19Ｖ ， 驱 动 负 压 为 －４Ｖ 。 由 仿 真 波 形 可见 ， 负 载 电 流 从 38Ａ 增 加 到 196 Ａ ， 开 通 时 间 从 140ｎｓ 增 加 到 了 200ｎｓ ， 其 中 电 流 上 升 从40ｎｓ 增加 到 了100ｎｓ ， 为 开 通 时 间 增 加 的 主 要 原 因 ， 与 理论 分 析一致。

关 断 过 程 

关 断 延 时 阶 段  ［ｔ5\-ｔ6 ］ （e-d)  的 持 续 时 间 见 式 （ ５ ） ， 根 据 公 式 ， 当 负 载 电 流 从 20Ａ 增 大 到 180Ａ 时 ， 关 断 延 时 从 426ｎｓ 减 小 到 了 240ｎｓ ，降 低 了 43.7％ 。

电 压 上 升 阶 段 的 持 续 时 间 如 式 （ ６ ） 所 示 ， 当 负载 电 流 从 20Ａ 增 大 到 180Ａ 时 ， 电 压 上 升 时 间 从141ｎｓ 减 小 到 了 103ｎｓ ， 降 低 了 27％ 。

关 断 延 时 阶 段 和 电 压 上 升 阶 段 对 应 图 ４ 中 的ｅ\-ｃ ， 认 为 栅 极 放 电 速 度一定 ， 则 大 负 载 时 ｅ\-Ｃ 的时 间 比 小 负 载 时 ｅ＇\-Ｃ＇ 的 时 间 更 长 ，这 同 样 论 证 了 功 率 管 关 断 时 间 随 着 负 载 增 大 而 减 小 。

关 断 过 程 的 PSpice 仿 真 波 形 如 图 ６ 所 示 ，通 过 仿 真 波 形 可 知 ， 受 负 载 大 小 影 响 较 大 的 是 关 断 延 时 阶 段 和 电 压 上 升 阶 段 ， 与 上 述 分 析一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBLF9TRdh6ddCFUcmOHltTlcrzfsMx1bgSeXM4Asp9N48CJrrZMONIug/640?wx_fmt=png&from=appmsg)

**４.  实 验 验 证**

使 用 BSM300D12P2E001 型 功 率 管 搭 建 双 脉冲 测 试 平 台 ， 实 验 参 数 ： Udc＝540Ｖ ，Io为 11-175Ａ ，Udriver 为-4V／19Ｖ ， 开 通 驱 动 电 阻Rg(on）＝4.5 欧， 关 断 驱 动 电 阻Rg(off)＝5.5 欧， 续 流 电 感 Lloed＝250uH 。通 过 改 变 脉 冲 宽 度 来 控 制 漏 极 电 流 大 小 ， 得 到 不 同 负 载 大 小 下 的 开 关 波 形 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsG0ficD3ZJakDIk6Lna8WBAmIsFdFbZyz33VAsk6hCCVfx7omLkgqmSSkAWuv5ib3FAe4INowEV4A/640?wx_fmt=png&from=appmsg)

图 ７ａ 为 不 同 大 小 负 载 下 的 开 通 过 程 实 验 波形 ， 当 负 载 电 流 从 20Ａ 增 大 到 155Ａ 时 ，开 通 时间 从 130ｎｓ 增 大 到 190ｎｓ ， 其 中 电 流 上 升 过 程 从４0 n s 增 大 到 了 100ｎｓ ， 为 开 通 时 间 变 长 的 主 要 原 因 ， 与 第 ３ 节 分 析 一 致 。 图 ７ｂ 为 不 同 大 小 负 载 下的 关 断 过 程 实 验 波 形 ， 当 负 载 电 流 从 11Ａ 增 大 到175Ａ 时 ， 关 断 时 间 从 800ｎｓ 减 小 到430ｎｓ ， 其 中关 断 延 时 过 程 从 510ｎｓ 减 小 到 了 330ｎｓ ， 电 压 上 升过 程 从 300ｎｓ 减 小 到 了 100ｎｓ ， 为 关 断 时 间 变 短 的 主 要 原 因 ， 同 样 与 第 ３ 节 分 析一致 。

**５ .  结 论**

针 对 SiC MOSFET 开 关 速 度 随 负 载 大 小 变 化的 特 性 ，通 过 其 开 关 过 程 模 型 及 转 移 特 性 说 明 了 原 因 。 理 论 分 析 、 仿 真 以 及 实 验 结 果 表 明 ： ① SiC MOSFET 开 通 速 度 随 负 载 增 大 而 减 慢 ，主 要 是 因为 电 流 上 升 时 间 变 长 ， 电 流 上 升 率 几 乎 不 变 ，上 升时 间 与 电 流 大 小 正 相 关 ； ②SiC MOSFET 关 断 速 度 随 负 载 增 大 而 加 快 ，主 要 是 因 为 关 断 延 时 和 电 压上 升 时 间 变 短 ，这 是 因 为 达 到 更 大 的 电 流 需 要 更 高 的 栅 源 电 压 ， 关 断 延 时 阶 段 栅 极 放 电 速 度 一 定 ，放 电 时 间 更 短 ， 因 此 关 断 时 间 更 短 ； 并 且 在 电 压 上 升 阶 段 ， 栅 源 电 压 几 乎 保 持 不 变 ，更 高 的 栅 源 电 压 使 得 驱 动 电 阻 上 的 压 差 更 大 ， 栅 极 放 电 速 度 更 快 ，关 断 时 间 进 一 步 缩 短 。 开 关 速 度 随 负 载 大 小 变 化 的 特 性 对 SiC MOSFET 的 应 用 有 着 重 要 意 义 ， 在 确 定 桥 式 电 路 的 死 区 时 间 时 应 当 充 分 考 虑 小 电 流 情 况 下 关 断 速 度 减 慢 这 一 现 象 ， 否 则 可 能 出 现 因 死 区 时 间 不 够 导 致 的 桥 臂 直 通 问 题 ， 导 致 设 备 损 坏。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)