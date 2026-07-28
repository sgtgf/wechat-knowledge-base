# 基于SiC MOSFET的储能功率单元设计与实证


> 原文地址: [https://mp.weixin.qq.com/s/otmKFwtBVDpz5GUVFlZNaw](https://mp.weixin.qq.com/s/otmKFwtBVDpz5GUVFlZNaw)

**文章来源：**电力电子技术

**作者：**马 成 龙 ， 贺 鸿 鹏 ，纪 巍 ， 徐 美 娇（ 国 网 内 蒙 古 东 部 电 力 有 限 公 司 ， 内 蒙 古 呼 和 浩 特 010010）

**摘 要 ：** 随 着 可 再 生 能 源 的 快 速 发 展 ， 储 能 变 流 器 在 新 能 源 电 网 中 发 挥 着 至 关 重 要 的 作 用 。针 对 基 于 SiC MOSFET 的 储 能 变 流 器 功 率 单 元 ， 其 中 包 含 10KV 高 压 交 流 模 块 和  750V 低 压 直 流 模 块 ， 重 点 研 宂 了 功 率 单 元 的 低 感 设计 和 散 热 设 计 方 法 ． 并 提 出 了 功 率 单 元 的 整 体 设 计 方 案 ；通 过 优 化 叠 层 母 排 的 结 构 ， 将 高 压 交 流 模 块 与 低 压 直流 模 块 的 杂 散 电 感 分 别 降 低 至 794uＨ 和 235uＨ ， 有 效 减 小 功 率 单 元 的 关 断 过 电 压 。通 过 热 数 值 计 算 ， 确 立 了强 迫 风 冷 的 散 热 方 案 ， 并 设 计 了 符 合 要 求 的 散 热 器 ， 使 器 件 在 运 行 过 程 中 的 最 高 温 度 不 超 过 50 度。最 后 ， 搭 建了 功 率 单 元 样 机 并 进 行 对 拖 实 验 ，验 证 了 叠 层 母 排 结 构 优 化 设 计 和 功 率 单 元 散 热 设 计 方 案 的 有 效 性 。

**关 键 词 ：** 储 能 变 流 器 ；功 率 单 元 ；叠 层 母 排 ；杂 散 电 感

**ｌ. 引 言**

储 能 变 流 器 作 为 储 能 系 统 和 微 电 网 之 间 的 接口 ， 可 以 实 现 电 能 的 传 递 和 变 换 ， 具 有 削 峰 填 谷 、负 荷 控 制 、 应 急 电 源 等 功 能 ， 在 新 能 源 发 电 的 趋 势下 ， 是 未 来 电 力 系 统 的 重 点 。随 着 储 能 变 流 器 向 大容 量 、 模 块 化 发 展 ， 其一般 采 用 基 于 DC/AC 变 换 器 与 DC/DC 降 压 变 换 器 的 双 极 式 结 构 。在 功 率 器件 的 选 择 上 ， 与 Si  IGBT 相 比 ， Si  MOSFET 具 有 开关 频 率 更 高 、 开 关 损 耗 更 低 和 运 行 结 温 更 高 等 特点 。但 受 到Si材 料 自 身 特 性 的 限 制 ，SiC 器 件 将 成 为 器 件 发 展 的 新 方 向。SiC器 件 在 能 量 损 耗 、 发热 量 、 使 用 频 率 以 及 电 流 密 度 等 方 面 均 具 有 明 显优 势 ， 在 相 同 功 率 等 级 下 拥 有 更 小 的 体 积 ，且 更 适合 在 高 频 下 使 用 。国 外 公 司 己 推 出 SiC 功 率 单 元 ，并 在 光 伏 、 电 动 汽 车 等 领 域 开 始 应 用 随 着 储 能变 流 器 功 率 单 元 向 着 高 度 集 成 化 、 高 工 作 频 率 和大 容 量 方 向 发 展 ， 对 SiC 器 件 构 成 的 储 能 变 流 器功 率 单 元 的 研 究 及 设 计 具 有 重 要 意 义 。

由 于 SiC 功 率 器 件 开 关 速 度 极 快 ， 会 产 生 比 IGBT 更 高 的 电 流 变 化 率 和 电 压 变 化 率 ， 从 而 更 容易 出 现 更 高 的 关 断 过 电 压 、 更 大 的 开 关 振 荡 以 及更 高 的 工 作 温 度 等 问 题 ， 因 此 功 率 单 元 的 低 感 设计 和 散 热 设 计 尤 为 重 要 。针 对 低 感 设 计 ，一般 采 用叠 层 母 排 减 小 杂 散 电 感 。文 献 ［3-5］ 提 出 了一些 方 法 ， 但 均 存 在 不 足。

此 处 系 统 地 研 宄 了 基 于 新 一代 功 率 器 件 SiC MOSFET 的 储 能 变 流 器 功 率 单 元 设 计 方 法 ， 具 有较 强 的 理 论 性 和 实 践 性 ， 尤 其 适 合 应 用 于 新 能 源 发 电 。首 先 介 绍 了 功 率 单 元 的 电 路 原 理 ， 其 次 利 用叠 层 母 排 实 现 了 低 感 设 计 ， 然 后 对 功 率 单 元 进 行强 迫 风 冷 散 热 设 计 ， 并 基 于 COMSOL Multiphysics 软 件 进 行 数 值 计 算 ， 给 出 了 适 用 的 方 案 。最 后 搭 建了 实 验 样 机 进 行 验 证 ，证 明 了 功 率 单 元 设 计 方 案 的 有 效 性 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfokHKAvx8IrIuGGDwteTZmYf7AldrJt4giaPywDS035w9c2udO6LlKuuA/640?wx_fmt=png&from=appmsg)

**２.  功 率 单 元 的 电 路 原 理**

高 频 隔 离 型 大 容 量 储 能 变 流 器 的 拓 扑 见 图 ｌａ ，该 变 流 器 采 用 模 块 化 级 联 设 计 ， 可 以 通 过 串 联 相同 的 功 率 单 元 实 现 更 高 电 压 等 级 ， 结 构 更 加 灵 活 ，便 于 扩 大 容 量 。受 SiC MOSFET 耐 压 水 平 限 制 ， 采用 若 干 功 率 单 元 高 压 侧 串 联 ， 低 压 侧 并 联 的 拓 扑结 构 以 进一步 扩 大 容 量 ， 形 成 低 压 、 大 电 流 的 直 流端 口 。高 压 交 流 侧 功 率 单 元 由一台 高 频 变 压 器 和两 组 Ｈ 桥 及 其 之 间 的 直 流 电 容 组 成 ， 低 压 直 流 侧功 率 单 元 由一组 Ｈ 桥 和 直 流 电 容 组 成 。图 ｌｂ 为所 提 SiC 功 率 单 元 ， 其 中 包 含 10KV 高 压 交 流 模 块和 750V 低 压 直 流 模 块 ，且 模 块 均 基 于 隔 离 型 Ｈ 桥拓 扑 ， 相 关 参 数 为 ：750V 低 压 直 流 模 块 ：额 定 功率 为 66KW ， 额 定 电 压 为 700V， 额 定 通 流 为 95A ；10KV 高 压 交 流 模 块 ：额 定 功 率 为 24KW， 额 定 电压 为 700V， 额 定 通 流 为 34A， 额 定 频 率 为50Ｈｚ ；冷 却 方 式 为 强 迫 风 冷 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfokHKAvx8IrIuGGDwteTZmYf7AldrJt4giaPywDS035w9c2udO6LlKuuA/640?wx_fmt=png&from=appmsg)

**３.  储 能 变 流 器 功 率 单 元 关 键 结 构 设 计**

**3.1  总 体 设 计 方 案**

基 于 SiC MOSFET 的 储 能 变 流 器 功 率 单 元 的设 计 方 案 如 下 所 述 ， 相 应 的 元 件 布 局 如 图 ２ 所 示 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfoibNGv7LId7LRhHFLxxG6yVIPBazgBFARFnt4ZLB2RcgUwvB6gHLLQXA/640?wx_fmt=png&from=appmsg)

功 率 单 元 由 模 块 化SiC功 率 器 件 、 高 频 变 压器 、 吸 收 电 容 、 叠 层 母 排 、 隔 直 电 容 、 风 冷 散 热 器 和金 属 机 壳 组 成 ， 并 采 用 分 隔 室 设 计 。该 方 案 突 出 优点 是 ：①使 用 叠 层 母 排 结 构 ，可 充 分 降 低 回 路 杂感 ， 减 小 器 件 开 关 过 程 中 的 过 电 压 水 平 ；②模 块 风扇 在 吸 收 电 容 电 压 高 于 一定 值 时 自 动 投 入 ，风 冷散 热 的 同 时 ，还 可 保 证 在 不 控 整 流 充 电 阶 段 功 率柜 内 所 有 模 块 间 的 均 压 ；③模 块 整 体 采 用 导 轨 定位 、 插 接 式 配 合 ， 可 做 到 即 插 即 用 ， 拆 装 维 护 方 便 ；④核 心 功 率 器 件 采 用 SiC MOSFET， 开 关 频 率 高 达 20KHZ ， 具 有 高 效 率 、 小 型 化 、 轻 量 化 等 特 点 ；⑤ 分隔 室 设 计 有 利 于 平 均 单 元 的 重 量 ，且 易 于 维 护 ， 换装 方 便 ， 有 利 于 更 大 容 量 的 功 率 单 元 设 计 。

**3.2  低 感 设 计 方 法**

以 低 压 侧V22，V23关 断 时 换 流 过 程 为 例 ， 说 明功 率 器 件 关 断 电 压 尖 峰 现 象 。图 ３ 所 示 的 回 路 Ａ和 回 路 Ｂ 中 ，V22, V23  正 在 关 断 。在 换 流 过 程 中 ，通过 功 率 开 关 管 的 电 流iv 逐渐 减 小 ，而 通 过 反 向 二 极管 的 电 流 ivd正 在 增 大 。快 速 的 电 流 变 化 作 用 到 流经 路 径 和 器 件 的 寄 生 电 感 上 ， 使 其 感 应 出 高 频 电压 ， 并 形 成 换 流 回 路 。换 流 回 路 上 感 应 的 电 压 ， 以及 直 流 母 线 电 压 叠 加 ， 共 同 作 用 到 功 率 器 件 V22, V23 上 ， 导 致 过 大 的 电 压 变 化 率 du/dt， 即 形 成 电 压关 断 尖 峰 ， 对 功 率 开 关 管 的 绝 缘 构 成 威 胁 ，这 种 现象 尤 其 发 生 在 分 布 电 感 量 大 、 负 载 电 流 大 、 功 率 开关 管 电 流 下 降 时 间 短 的 情 况 下 。降 低 寄 生 电 感 量是 消 除 电 压 关 断 尖 峰 的 有 效 方 法 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfoicQD8gynpQyGgpIPS9lv4bdgOvn2SMngecpnVeIwvbpr9Fgym3lQoLQ/640?wx_fmt=png&from=appmsg)

叠 层 母 排 运 用 邻 近 效 应 和 集 肤 效 应 ， 使 得 信号 电 流 和 镜 像 电 流 产 生 的 辐 射 磁 场 相 互 抵 消 ， 电流 回 路 面 积 最 小 ， 以 此 有 效 减 小 杂 散 电 感 。以 图 ４所 示 的 叠 层 母 排 为 例 ， 叠 层 母 排 结 构 尺 寸 ：长 ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfo2vibCPSvrIDeAqjK0l29l4bkgn5maZYv0uS7dvwmjyEAVXuwvJ8f6ug/640?wx_fmt=png&from=appmsg),宽w， 铜 板 厚 度 t, 间 距 d, 其 等 效 电 感 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfo7oRuQiboxGpE23K4L3h9Qpib6yqj9X95sichmF960hsOKwwmu5OjOdcaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfo1ddHvEac8WTVD5seTsxtzhICicQ6bpl0iaGqbguCLGGEkjPm2T2HNODw/640?wx_fmt=png&from=appmsg)

当 只 有一块 长![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfo2vibCPSvrIDeAqjK0l29l4bkgn5maZYv0uS7dvwmjyEAVXuwvJ8f6ug/640?wx_fmt=png&from=appmsg)， 宽w， 铜 板 厚 度 ｔ 的 铜 排 时 ，其 电 感 为L 。比 较 一块 铜 排 和 两 块 铜 排 的 电 感 值 可 以 发 现 ， 由 于 另一个 电 流 方 向 相 反 且 平 行 的 铜 排 的 存 在 ，互 感 作 用 使 得 寄 生 电 感 减 小 。

除 了 减 小 电 流 环 路 闭 合 截 面 面 积 以 降 低 寄 生电 量 ， 叠 层 母 排 与 电 容 的 电 气 连 接 还 可 以 提 高 功率 单 元 的 集 成 度 ， 具 有一定 的 结 构 强 度 ，可 以 作 为结 构 组 件 ， 散 热 和 绝 缘 性 能 良 好 ， 安 装 方 便 且 结 构紧 凑 ，具 有 更 高 的 可 靠 性 。

根 据 功 率 模 块 结 构 布 局 的 不 同 ，叠 层 母 排 有多 种 拓 扑 。考 虑 换 流 回 路 杂 散 电 感 平 衡 问 题 ，这 里 采 用 的 叠 层 母 排 为 对 称 结 构 ， 由 两 电 平 的 正 、 负 铜 排 导 体 通 过 叠 层 结 构 ， 在 导 体 间 叠 加 绝 缘 材 料 进行 热 压 处 理 构 成 。叠 层 母 排 的 设 计 还 应 考 虑 以 下几 种 因 素 。

**结 构 尺 寸** 

式 （１） 表 明 ， 减 小 铜 排 的 长 度![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfo2vibCPSvrIDeAqjK0l29l4bkgn5maZYv0uS7dvwmjyEAVXuwvJ8f6ug/640?wx_fmt=png&from=appmsg)和两 铜 排 间 距d,增 大 宽 度w可 以 在一定 程 度 上 减小 回 路 分 布 电 感 值 。

**元 器 件 和 连 接 端 子 位 置** 

通 过 调 节 元 器 件 摆放 位 置 和 连 接 端 子 位 置 ， 改 变 电 流 路 径 ， 以 减 少 回 路 面 积 ， 从 而 降 低 寄 生 电 感 值 ， 如 图 ５ 所 示 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfooaXXbKpBJd2icb2icU2R6383ibuQ5vlmQUEXMR1v5UkoIAwPjB2IrWHibA/640?wx_fmt=png&from=appmsg)

**多 个 电 容 并 联 ：**

多 电 容 并 联 使 得 杂 散 电 感 支路 增 加 且 一致 性 变 好 ，可 满 足 上 下 回 路 路 径 尽 可能 重 叠 ， 磁 场 抵 消 以 降 低 回 路 电 感 。但 随 着 吸 收电 容 数 量 的 增 加 ， 电 感 见 效 的 幅 值 减 小 ， 因 此 综 合考 虑 ， 选 择 ４ 个 吸 收 电 容 结 构 。

提 取 叠 层 母 排 的 杂 散 电 感 ，通 过 数 值 计 算 可以 得 到 高 压 交 流 模 块 的 叠 层 母 排 杂 散 电 感![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfotRsxaLhWgoCpRrHibBJFD5icicz2wdYbEiasAn7QLTWuXpsWTZxFPjKXOA/640?wx_fmt=png&from=appmsg)734nH ， 低 压 直 流 模 块 的 叠 层 母 排 杂 散 电 感![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfoPSWVNMWw1jOuCOzUL6R9ESiaBSetNicK5vj7bdMoXwgTVZOWNCmAiaTfQ/640?wx_fmt=png&from=appmsg)＝175nH。同 时 ， 查 阅 数 据 手 册 可 知CAS300M12BM2型 号 的SiC MOSFET高 频 寄 生 电 感![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfox2xQ8VtFgkFU2Wd2n2M3pNIib4WZh9lW9OJNeVaXw2EfxAiafGXUiaklw/640?wx_fmt=png&from=appmsg)15nH，一个 二 极 管 高 频 寄 生 电 感![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfozt0hK5B36DmlXsgbBVohQywzWOwr0BiaTUGxFXCVvPMMeq7vHN83aLA/640?wx_fmt=png&from=appmsg)， 则 在 高 压交 流 模 块 和 低 压 直 流 模 块 中 ， 如 图 ３ 所 示 换 流 回路 的 杂 散 电 感 分 别 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnjzAibejpFicKsWNH6kysGfo6cicydlBHZSr7mRV3hwrgJ61W27S2L3nrOMdw0uWBliaoDpAgJ0m2ibMw/640?wx_fmt=png&from=appmsg)

**3.3 散 热 设 计 方 法**

功 率 器 件 的 散 热 问 题 关 乎 电 力 设 备 寿 命 的 长短 及 能 否 安 全 可 靠 运 行 ， 尤 其 对 于 大 容 量 高 频 器件SiC MOSFET，必 须 通 过 合 理 的 散 热 设 计 保 证其 工 作 在 允 许 的 温 度 范 围 内 。热 源 的 基 本 参 数 为 ：热 源 类 型 为SiC MOSFET， 额 定 电 流 为120Ａ ， 通态 损 耗 为240Ｗ ， 数 量 为４， 接 触 间 隙 为 导 热 硅 脂 ，由 于 功 率 模 块 壳 体 直 接 放 置 在 散 热 器 上 会 有 缝 隙面 ，可 以 在 装 配 过 程 中 涂一层 很 薄 的 导 热 硅 脂 ， 导热 硅 脂 的 导 热 系 数 为1Ｗ/（ｍ．Ｋ ） 。功 率 器 件 模 块安 置 在 散 热 器 上 的 等 效 热 阻 分 析 如 图 ６ 所 示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDeJmQcteEvUtaMWpCoZCca273mrYMOQuQxt0KleiaovJDhUN8svpUHEg/640?wx_fmt=png&from=appmsg)

图 ６ 中 ，Ta为 环 境 温 度 ，Tｊ（ Ｍ０Ｓ ） 为 SiC MOSFET结 点 温 度 ， Tc 为 功 率 器 件 模 块 外 壳 温 度 ，Ts为 散 热器 表 面 温 度 。![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDx7W4M4D1icQPjDlESlDNutsaaMv3DbBljuGJdyeica12iaOBsCUP5XbQg/640?wx_fmt=png&from=appmsg)为 SiC MOSFET的 管 芯 到 外壳 的 热 阻 ， ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDOELn4TsKn4iaiaJnAAhRI0bfKYOwrAfqtvtQcy4V08Yfeiawf2PxktF9g/640?wx_fmt=png&from=appmsg)为 外 壳 到 散 热 器 的 热 阻 ， 以 上 参 数可 以 通 过 厂 家 数 据 手 册 获 取，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDVzvzbDJaDibPwXKXziagic3L0kqeustTXXNWRg1BUJGOqnSCGvk2dMtXg/640?wx_fmt=png&from=appmsg)为 散 热 器 到 空气 的 热 阻 ，可 以 由 散 热 器 自 身 传 热 热 阻 以 及 散 热器 与 空 气 之 间 的 传 热 热 阻 相 加 计 算 。由 图 ６ 可 知 ，![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDhYtD8vX56Tia0TKgnKuic5icNWn6HyW0LOWPxreicvZnNxSwldiahVeEfVA/640?wx_fmt=png&from=appmsg)与 串 联 ， 然 后 不 同 桥 臂 热 阻 并 联 后 ， 再与 ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDVzvzbDJaDibPwXKXziagic3L0kqeustTXXNWRg1BUJGOqnSCGvk2dMtXg/640?wx_fmt=png&from=appmsg)串 联 ， 形 成 完 整 的 功 率 单 元 热 阻 。综 合 考虑 功 率 密 度 、 成 本 等 因 素 后 ，这 里 选 用 强 迫 风 冷 的散 热 方 式 。

散 热 器 的 尺 寸 布 局 要 与 叠 层 母 排 、 器 件 摆 放相 配 合 。如 果 每 个 Ｈ 桥 模 块 的 功 率 器 件 分 别 安 装散 热 器 ， 不 仅 结 构 不 紧 凑 ， 叠 层 母 排 较 大 ， 会 产 生更 大 的 寄 生 电 感 ， 并 且 对 于 模 块 中 间 的 耦 合 部 分散 热 效 果一般 ， 因 此 Ｈ 桥 模 块 中 的 功 率 器 件 共 用一个 散 热 器 。散 热 器 的 材 质 、工 艺 、 翅 片 参 数 也 是影 响 散 热 的 重 要 因 素 。这 里 散 热 器 选 用 铝 合 金 材质 ， 具 有 重 量 轻 、 散 热 好 等 特 性 。材 料 表 面 不 同 的处 理 方 式 会 影 响 表 面 辐 射 率 ， 材 料 表 面 越 粗 糙 ， 表面 辐 射 率 越 大 ， 导 热 性 能 越 差 ， 不 利 于 散 热 ， 因 此首 选 光 面 的 铝 合 金 。增 大 散 热 面 积 有 利 于 减 小 热阻 ， 因 此 增 加 翅 片 的 数 量 可 以 提 高 散 热 效 率 ， 另一方 面 ， 翅 片 数 过 多 会 导 致 散 热 器 尺 寸 变 大 ， 不 利 于功 率 单 元 的 小 型 化 、 轻 型 化 设 计 。结 合 器 件 布 局 尺寸 ， 最 终 确 定 散 热 器 基 本 参 数 如 下 ：外 形 尺 寸 为120ｍ ｍ ｘ90ｍ ｍ ｘ400 ｍ ｍ ，基 板 厚 度 为 28ｍ ｍ ， 翅 片数 量 为15， 翅 片 厚 度 为1， 表 面 处 理 为 光 面 ， 材 质为 铝 合 金 ， 散 热 方 式 为 强 制 风 冷 。

高 压 交 流 模 块 中 强 迫 风 冷 散 热 器 的 总 热 阻![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDH5ARCFicJHsWbhgdFiapwqKEWpEMIUdEb8B6kRPEAJ2opvxzoKjxBv8g/640?wx_fmt=png&from=appmsg)， 低 压 直 流 模 块 的 散 热 器 总 热 阻![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDBWfc1nzGEGpicSqVtxgNSicN4u3Why3ZI1mmwP8K9sbkFZU1U7NAqDew/640?wx_fmt=png&from=appmsg)。满 载 时 ，SiC MOSFET的 损 耗 约为150Ｗ ， 根 据 文 献 ［ ６ ］ 提 供 的 公 式 计 算 出 功 率 器件 最 大 容 许 热 阻 为 0.83![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDKiaDQ4sXF9UHBf0g4MIjDksQGiboTBIt4gbxE3XOhVdGgDmfpDPDIlpw/640?wx_fmt=png&from=appmsg)， 说 明 散 热 器 选 型 满足 散 热 需 求 。

在 仿 真 软 件 中 对一个 散 热 器 及 ４ 个SiC 模 块进 行 散 热 计 算 ， 要 求 功 率 器 件 最 大 温 升![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDgls5AbDTMf4cibfj1yb5ftIA8ib1DZlndsZiaSqGCPTjicFucAbDric7Z0A/640?wx_fmt=png&from=appmsg)。为 了 简 化 分 析 ， 忽 略 热 辐 射 散 热 ， 得 到 不 同 入 口 风速 下 功 率 器 件 的 温 升 结 果 ， 如 表 １ 所 示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDubicYlQfMrhybVGFxlfd4pOaZkl819LlWn6NV76oQqOIkDRbibcFJybA/640?wx_fmt=png&from=appmsg)

可 知 ， 在 风 速 小 于![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDLy9JAGmxMnhxiaibHu4gGTYzxVNQDKiaQPWJOc47ZO62ibH5uB99PMGDMg/640?wx_fmt=png&from=appmsg)时 ， 功 率 器 件 的 最大 温 升 随 风 速 增 大 而 迅 速 下 降 ；风 速 大 于![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDrRsqZRrNDG5Laf7nQrKG4C1hnDjjEk92siacNrDIw7gaFJBicCrvht6Q/640?wx_fmt=png&from=appmsg)时 ， 增 加 风 速 对 温 升 减 小 的 效 果 不 再 明 显 。风 速 为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDrRsqZRrNDG5Laf7nQrKG4C1hnDjjEk92siacNrDIw7gaFJBicCrvht6Q/640?wx_fmt=png&from=appmsg)时 ， 功 率 器 件 的 最 大 温 升 满 足 散 热 需 求 ，因 此 确 定 流 入 散 热 器 的 风 速 不 小 于![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDrRsqZRrNDG5Laf7nQrKG4C1hnDjjEk92siacNrDIw7gaFJBicCrvht6Q/640?wx_fmt=png&from=appmsg)。图 ７为 散 热 器 和 功 率 器 件 的 温 度 分 布 图 。由 图 ７ 可 以看 出 ， 越 靠 近 风 扇 ， 功 率 器 件 温 度 越 低 ， 最 高 温 度出 现 在 风 冷 出 口 处 的 功 率 器 件 处 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDHB2sRUcqQo0nJYVMskOXLMq9A2YQkd4qPq7DkmzTI4PmKxE6GMXKLg/640?wx_fmt=png&from=appmsg)

**４. 实 验 验 证**

搭 建10KV高 压 交 流 模 块 和750Ｖ 低 压 直 流模 块 样 机 ， 并 对 功 率 模 块 进 行 对 拖 实 验 。高 压 交 流功 率 单 元 由 高 频 变 压 器 ， 隔 直 电 容 ，吸 收 电 容 ，SiC MOSFET， 驱 动 组 成 。低 压 直 流 功 率 单 元 由SiC MOSFET，驱 动 ， 吸 收 电 容 ， 隔 直 电 容 ， 高 频 电 抗 组成 。电 容 充 电 电 压 为720Ｖ 。

对 于 高 压 交 流 功 率 单 元 ， 高 压 交 流 单 个 模 块两 个 Ｈ 桥 间 进 行 对 拖 。通 过 控 制 两 个 模 块 的 Ｈ 桥输 出 电 压 相 位 差 ， 调 节 电 流 的 大 小 和 方 向 ，直 至 满载 。低 压 直 流 功 率 单 元 为 两 个 模 块 的 两 个 Ｈ 桥 间进 行 对 拖 ， 对 拖 原 理 同 高 压 功 率 单 元 。

图8a为 高 压 交 流 模 块 对 拖 波 形 。高 压 交 流 模块 中 Ｈ1桥 电 压 有 效 值 UＨ1 ＝709.55Ｖ ， 关 断 电 压 尖峰 小 于 733Ｖ ；H2 桥 电 压 有 效 值UH2＝692.73 Ｖ ， 关断 电 压 尖 峰 小 于813Ｖ ；电 流 有 效 值 为40Ａ 。上 述分 析 表 明 所 提 叠 层 设 计 方 案 有 效 地 减 小 了 杂 散 电感 ， 提 高 了 模 块 抑 制 过 电 压 的 能 力 。在 环 境 温 度 为10度， 电 流 有 效 值 为40Ａ ， 充 电 机 工 作 在720Ｖ／0.7Ａ 的 实 验 环 境 下 ， 采 用 热 成 像 仪 每 运 行 半 小 时测 量 一次 各 功 率 器 件 的 温 度 ， 如 图 ８ ｂ 所 示 。3.5ｈ后 温 升 逐 渐 趋 于 平 稳 ， 各 功 率 器 件 温 度 最 高 不 超过90度 ， 其 中SiC功 率 器 件 的 温 度 不 超 过40度 ，可 见 散 热 效 果 明 显 ， 满 足 设 计 需 求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibDH4w0rspiaGcsKiasUTUiaO84wa9aJNNor7HJkuPAEWU42sQ7jZphLGlGw/640?wx_fmt=png&from=appmsg)

同 理 ， 图9为 低 压 直 流 模 块 实 验 波 形 。低 压 直流 模 块 中 模 块 １ 的 电 压 有 效 值 UＨＦ＝700V ， 关 断 电压 尖 峰 小 于753V ；模 块 ２ 的 电 压 有 效 值723.43Ｖ ， 关 断 电 压 尖 峰 小 于776 Ｖ ；电 流 有 效 值为130Ａ 。可 见 叠 层 母 排 具 有 较 好 的 应 用 效 果 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS85Yyd0sbGyQ2sp8vUoibD3ceF6f4iaSjfSCeDkibia0iabtaQhhib9J3Prh21Yk78Ew1JPrriaUCLMqFg/640?wx_fmt=png&from=appmsg)

**５. 结 论**

此 处 设 计 了一种 基 于SiC MOSFET的 储 能 变流 器 功 率 单 元 ， 包 括10kV高 压 交 流 模 块 和750V低 压 直 流 模 块 ， 适 用 于 储 能 变 流 器 的 集 成 化 、 模 块化 发 展 。并 重 点 针 对 功 率 单 元 的 低 感 和 散 热 进 行设 计 ， 得 到 以 下 结 论 ：功 率 单 元 由 模 块 式SiC功 率器 件 、 高 频 变 压 器 、 吸 收 电 容 、 隔 直 电 容 、 叠 层 母排 、 风 冷 散 热 器 和 金 属 机 壳 等 组 成 。结 构 对 称 ， 拆装 维 护 方 便 ，且 便 于 进 一步 扩 大 容 量 ；叠 层 母 排 的应 用 可 改 善 器 件 的 开 关 特 性 ， 有 效 减 小 换 流 回 路的 杂 散 电 感 ， 并使 功 率 单 元 整 体 结 构 紧 凑 ， 提 高 其集 成 度 ， 具 备 良 好 的 电 磁 兼 容 特 性 ；采 用 强 迫 风 冷散 热 设 计 ， 选 用 合 适 的 风 机 和 散 热 器 ， 保 证 散 热 需求 ，延 长 器 件 使 用 寿 命 。风 机 控 制 策 略 还 可 保 证 不控 整 流 充 电 阶 段 功 率 柜 内 所 有 模 块 之 间 的 均 压 。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)