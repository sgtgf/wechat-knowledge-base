# Si/SiC 混合并联功率器件开关模式优化及特性分析

原创 贝斌斌 乐程毅 SiC碳化硅MOS管及功率模块的应用 2025-03-30 14:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/9VRMFDPCH6GdrWpwMC96HQ](https://mp.weixin.qq.com/s/9VRMFDPCH6GdrWpwMC96HQ)

文章来源：固体电子学研究与进展

作者：贝斌斌 乐程毅（国网浙江省电力有限公司 宁波供电公司，浙江，宁波，315000）

摘要：在对比 SiC MOSFET和Si IGBT器件开关特性的基础上，提出了一种SiC MOSFET和Si IGBT 混合并联器件的优化开关模式，并结合系统稳态模型，分析了其非理想开关过程特性。利用双脉冲测试，对不同开通/延迟时间下的混合并联器件开关特性展开了实验。实验结果表明，所提开关模式能够同步实现 SiC MOSFET 扩容并降低 Si IGBT 的开关损耗。该研究成果可对拓展两种开关器件的混合应用提供技术参考。

关键词：SiC/Si；混合器件并联；开关过程分析

引 言

相 比 于 传 统 硅 功 率 器 件 ，以碳 化 硅（Silicon carbide，SiC）为代 表 的 新 型 宽 禁 带 材 料 制 成 的 功 率 器件具 有 低 开 关 损 耗 、高开 关 频 率 及 高 阻 断 电 压 等 优点 ，可有 效 提 升 电 力 电 子 变 换 器 诸 多 工 作 性 能 ，然而昂 贵 的 价 格 限 制 了 其 广 泛 应 用。 传统 Si IGBT 器件 存 在 拖 尾 电 流 ，关断 损 耗 比 SiC MOSFET大得 多 ，但其 导 通 损 耗 较 低 并 且 在 电 流 定 额 上 具 有更大 的 优 势 。 若能 借 鉴 混 合 开 关 的 概 念 ，研制 Si/SiC 混合 并 联 器 件 ，则可 能 同 时 具 有 两 种 器 件 的优势。

文献［6⁃8］在低压场景下，针对上述两种类型器件的 混 合 并 联 技 术（SiC MOSFET/Si IGBT hybridparallel technique，SiC/Si-HP）开展了研究 ，结果 显示两 种 混 合 并 联 器 件 很 好 地 兼 容 了 SiC 高开 关 频率/低开 通 关 断 损 耗 以 及 Si IGBT 宽电 流 范 围 的 特点。文献［9⁃12］针对上述混合并联器件进行了驱动优化 ，实现了 SiC/Si⁃HP 在接 近 SiC 器件 性 能 的 同时 ，节约 了 系 统 整 体 成 本 。 此外 ，国内 外 研 究 机 构针对 SiC/Si⁃HP 的应 用 也 开 展 了 大 量 研 究 。 其中 ，文献［13⁃16］将 SiC/Si⁃HP 应用 于 电 动 汽 车 驱 动 系统以 及 电 池 组 均 压 控 制 ，实现 了 优 良 的 损 耗 控 制 和高效 运 行 。 然而 ，如果 混 合 并 联 器 件 采 用 统 一 的 驱动信号，则不能避免 Si IGBT 较大的开通关断损耗，因此 需 要 采 用 合 理 的 开 关 模 式 充 分 发 挥 两 种 器 件的优势。

本文 在 分 析 两 种 器 件 的 特 性 基 础 上 ，提出 了 一种 SiC/Si⁃HP 优化 开 关 模 式 ，通过 稳 态 建 模 对 其 非理想 开 关 过 程 进 行 了 分 析 ，最后 利 用 双 脉 冲 实 验 对SiC/Si⁃HP 开关特性进行了实验验证。实验结果表明，采用优化的 SiC/Si⁃HP 可同步实现对 SiC MOSFET 的扩 容 并 同 时 降 低 了 Si IGBT 的开 关 损 耗 。本文 所 取 得 的 研 究 成 果 可 对 拓 展 两 种 开 关 器 件 的混合应用提供技术参考。

1\. SiC MOSFET和 Si IGBT的特性对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdGibzEBHia2Xq01JdVmSykQACEh3jkU83GrZ3vvrTicETIrE8RQiabe8jgA/640?wx_fmt=png&from=appmsg)

图 1 给出 了 SiC MOSFET 和 Si IGBT 混合 并联的 结 构 示 意 图 。 为了 解 两 种 不 同 器 件 的 特 性 ，采用相 同 定 额 的 SiC MOSFET 和 Si IGBT 器件 进 行了静 态 特 性 和 动 态 特 性 的 对 比 ，用于 对 比 的 器 件 的主要参数如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdmJ8zdlibpiacL5fPDaPrLS2jGA8vYnVyyAePuB13HibKCVpgzD99pFe1w/640?wx_fmt=png&from=appmsg)

SiC MOSFET 和 Si IGBT 的输 出 特 性 测 试 曲线如图 2 所示（测试驱动电压均为 15 V），SiC MOSFET 和 Si IGBT 的导 通 压 降（Von）大小 与 负 载 电 流（iload）有关。在负载电流相对较小时，SiC MOSFET的导 通 压 降 低 于 Si IGBT，在负 载 电 流 增 大 到 某 一临界 值 时 ，SiC MOSFET 的导 通 压 降 高 于 Si IGBT。 且随 着 结 温 升 高 ，上述 临 界 值 下 降 。 在 125℃情况 下 ，两种 器 件 输 出 特 性 曲 线 交 叉 点 的 负 载 电 流值由 10 A（25℃时）下降到 7 A 左右。通过以上分析可知，在负载电流相对较大的情况下，Si IGBT 的导通压 降 较 小 ，采用 混 合 并 联 扩 容 相 比 于 采 用 SiC MOSFET 器件并联能够降低导通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdWgcPHtPiaylm52984Eic0zuLg6r2dJD43OVA2pTd600sPuL9FwKu7JTQ/640?wx_fmt=png&from=appmsg)

开关 特 性 的 测 试 采 用 双 脉 冲 电 路 ，在多 种 工 况下对 开 关 特 性 进 行 了 测 试 。 其中 ，直流 母 线 电 压UDC 为 600 V，负载 电 流 分 别 为 5、10、15、20 A。 图 3给出 了 两 种 类 型 器 件 的 开 关 时 间（ton、toff）随着 负 载电流（Iload）的变 化 曲 线 ，波形 显 示 ：SiC MOSFET 通时 间 随 着 负 载 电 流 的 增 大 而 同 比 延 长 ，关断 时 间随着 负 载 电 流 的 增 大 也 有 所 上 升 ；Si IGBT 关断 过程中的电流拖尾造成其关断时间较长。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId5WC1LGcnw5vn7zvuo3dEnRHXCwveTUAteKhfOYXXJ7keLDYF65adog/640?wx_fmt=png&from=appmsg)

图 4 给出 了 25℃时 ，在 600 V 输入 电 压 下 ，两种开关器件的开关损耗（Pon、Poff）的对比。随着负载电流的增加，SiC MOSFET 的开关损耗增大速度明显小于 Si IGBT，且随 着 负 载 电 流 的 增 加 优 势 越 来 越明显 ，主要 原 因 是 其 开 关 速 度 较 快 且 无 拖 尾 电 流 ，故在 负 载 电 流 较 大 场 景 下 ，SiC MOSFET 相比 SiIGBT 更具有低开关损耗的优势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdvTHNp0psoZ0tFjZhbMsPKIJgMmeDIbvczc0B7BB2AsOyTDg9LqWFCg/640?wx_fmt=png&from=appmsg)

2\. 开关模式优化及稳态建模

2.1 开关模式

SiC/Si⁃HP 开关时序对发挥不同器件的优势至关重 要 。 本文 提 出 一 种 开 关 模 式 自 适 应 动 态 调 整方案 ，其三 种 开 关 模 式（Switching mode， SM）示意图如 图 5 所示 ，其中 G1、G2 分别 为 SiC 与 Si 器件 的驱动信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIde3TLAHlLwLxNDAiaI3dS8JZsE4jouB9Dfgk2e7SAms7nhlFXNVibBu7g/640?wx_fmt=png&from=appmsg)

（1） SM1 模式：

在该 开 关 模 式 下 ，Si IGBT 保持 关 断 ，SiC MOSFET 保持 导 通 ，其状 态 取 决 于 混 合 并 联 器 件中 Si IGBT 开始导通时的负载电流大小。

（2） SM2 模式：

在该开关模式下，SiC MOSFET 优先开通且滞后于 Si IGBT 关断 ，此工 作 模 式 适 合 于 负 载 电 流 小于 SiC MOSFET 安全电流，从而为 Si IGBT 创造零电压 开 通 与 零 电 流 关 断 条 件 ，以尽 可 能 降 低 Si IGBT 开关损耗。

（3） SM3 模式：

在该开关模式下，SiC MOSFET 滞后开通且优先于 Si IGBT 关断 ，此工 作 模 式 适 合 于 负 载 电 流 较大的 场 景 。 在这 种 开 关 模 式 下 ，Si IGBT 优先 承 受大负载电流，以避免应力能力较差的 SiC MOSFET器件受到损害。

2.2 混合并联器件的建模

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdjriaf6XaR6iceC6icrTYkbyGdLlY09kViarwibu2q21buYg3qtpTPrhRMXQ/640?wx_fmt=png&from=appmsg)

图 6 给出 了 理 想 情 况 下 ，SiC/Si⁃HP 稳态 导 通模型。其中 ，根据两种器件不同的输出特性 ，Si IGBT 可以等效为恒压源 UT0 串联导通电阻 RCE（on），SiC MOSFET 等效为导通电阻 RDS（on）。

令 Si IGBT 导通 电 流 iC 和 SiC MOSFET 导通电流 iD 比值为 a，则：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdQQ7fvxobjCGGGnkxohZn7wEvFNq6sRzZQl3ftZ2iaQxPnnz4UpXlBbw/640?wx_fmt=png&from=appmsg)

  
其中，iD 和 iC 表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdPBU8LJiacclWpBqgLQaBU7OOibKibOP47gY0CV2DwMgqhpeIccvYDSWRA/640?wx_fmt=png&from=appmsg)

  
当 iD=iC=50%iload 时，负载电流 iload 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId2TRMGxSoRWeo3xo2T1ia5w8QUm6xPlPpicZUbNNNlX06AU2xbOtQDW7Q/640?wx_fmt=png&from=appmsg)

由 SiC MOSFET（C2M0160120D）和 Si IGBT（IXA12IF1200HB）组成混合并联器件，并根据器件数据 手 册 相 关 参 数 文 件［RCE（on）与 RDS（on）］，采用Mathcad 工具 计 算 ，获得 电 流 分 布 示 意 图 如 图 7（a）所示 ，其中 iMOS 和 iIGBT 分别 表 示 SiC MOSFET 和 Si IGBT 器件的电流。结合两种器件的导通电阻参数可知 ，器件 的 分 流 情 况 与 负 载 电 流 有 关 。 在温 度 升高的 情 况下 ，大部 分 电 流 流 经 Si IGBT。 图 7（b）给出了 SiC/Si⁃HP 器件 与 两 个 SiC MOSFET 并联 器件的导通损耗比值 Phybrid/PMOS，结果表明：在常温下，负载 电 流 大 于 20 A 左右 时 ，SiC/Si⁃HP 的导 通 损 耗更小 ，且随 着 温 度 的 升 高 ， SiC/Si⁃HP 导通 损 耗 在轻载时的优势更加明显。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdKBM2C7ibNzRfh3gU9NfQQ1lgLhiaza8HOkeFajcyiaJFnOO8lO27WnIVg/640?wx_fmt=png&from=appmsg)

3\. 混合并联器件的非理想开关特性分析

图 8 给出 了 考虑 线 路 寄生 参 数 影 响 的 SiC/Si⁃HP 双脉 冲 测 试 等 效 电 路 示 意 图 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdmIU31Xl2ZyTe8xKkVDicJnwwJlkg7b6u554YicK8ZGGoSOFcQp8Sic4sA/640?wx_fmt=png&from=appmsg)

 图中 Q1 为 SiC MOSFET 开 关管 ，CGS、CGD、CDS 分别 为 各 极 间 寄 生电容 ，RG1、LD、LS 分 别为 其 驱 动 电 阻 以 及 漏 极 、源极寄生 电 感 ；Q2 为 Si IGBT 开关 管 ，CGC、CGE、CCE 分别为各极间寄生电容，RG2、LC、LE 分别为其驱动电阻以及集 电 极 、发射 极 寄 生 电 感 ；DH、CJ、LL 分别 为 续 流二极 管 及 其 等 效 并 联 电 容 电 感 。 LH1、LH2 为线 路 寄生电 感 ，UDC 为测 试 直 流 电 压 ，UGS 与 UGE 分别 为 SiC MOSFET 与 Si IGBT 的驱动电压源。

以开 关 模 式 SM2 为例 分 析 SiC/Si⁃HP 开关 动作特 性 。 在开 关 模 式 SM2 中 ，Si IGBT 提前 关 断 将产生一个关断电流尖峰，同时由于 SiC MOSFET 的关断，使得 CGC 和 CCE 两端电压均升至 UDC。令 CGC 两端的电压变化率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdtKY2RVMrZNLiaEKazUqTaYmMplp6TA3myZLPE4Z0gPqaGMHl5I0z2tg/640?wx_fmt=png&from=appmsg)

其中 tfr 是 SiC MOSFET 开关 过 程 中 的 电 压 上 升 或下降时间，从而有流过 CGC 的电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId1oTWhM96skTYNzCXPmzNRIXelTSpTqr74yH8iauWJ6Siaica7T2hKQ2zQ/640?wx_fmt=png&from=appmsg)

  
电容 CGE 的电压变化量 ΔuGE 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdnD8512kbnX0HNVcTgbcA5dj6ZLOQZpibbcJZcTawicUkt4qUIgibsv0mg/640?wx_fmt=png&from=appmsg)

其中，s 为拉普拉斯算子。

由式（6）求其 拉 普 拉 斯 反 变 换 ，可得 其 在 时 域上的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIda04qT6dqSxDD2TAvZWLyTTVXOFJSiaLLD5SCpqPKHibfJow2Lib7MOcmQ/640?wx_fmt=png&from=appmsg)

  
其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdc9VeSuTmtticjdZylmLhefhs2KfuxzWCTWXnMqfKFtFGzRksWT4EOOQ/640?wx_fmt=png&from=appmsg)

  
从而有电压变化最大值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdlUcMbzYjCdTbpibPicQfgJC6GfGdFJ2JJAM1vHiaavTuQMb0iaXC544u8Q/640?wx_fmt=png&from=appmsg)

从式（9）可以 看 出 ，电容 CGE 的电 压 变 化 量 与CGE、CGC、LE、RG2、UDC 以及 tfr 有关。在混合并联器件的使 用 过 程 中 ，应注 意 避 免 Si IGBT 驱动 电 压 的 振荡变化量超过负向驱动电压极限以造成 Si IGBT 的误开通。

4\. 混合并联器件的开关特性实验

在室 温 情 况 下 ，采用 如 图 8 所示 的 双 脉 冲 测 试电路 对 混 合 并 联 器 件 的 开 关 特 性 进 行 了 测 试 ，其中SiC MOSFET 和 Si IGBT 的驱 动 电 压 及 驱 动 电 阻设置 与 表 1 相同 ，实验 负 载 电 感 为 25 nH，直流 电 压UDC 为 600 V，驱动电阻 RG1、RG2 均为 10 Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIduWicrdj1I7Itf3SyhM72ZU6pjDIarP6uI8CEgwGQPb4HniaUjdKQdmLA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId221JRRRjDHaicZf8sic4fa8oGIqO1n4smpUg8Ve0YljR6sjicMic3Y2ibCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmId7k7icmoVHKEtvLLRa1wpBERtuEHFIIots8TpdN56ovnWezYKzudic24w/640?wx_fmt=png&from=appmsg)

图 9 分别 给 出 了 SiC/Si⁃HP（SiC MOSFET 和Si IGBT 分别 为 1 只）在三 种 不 同 开 关 模 式 下 的 开通与关断实验波形。图 9（a）、（b）实验波形显示 ：在开关 模 式 SM1 中 ，虽然 Si IGBT 没有 导 通 ，但其 开通和 关 断 过 程 中 的 栅 射 极 电 压 尖 峰 仍 然 存 在（约为10 V），且在 SiC MOSFET 的关 断 过 程 中 Si IGBT也有 关 断 电 流 尖 峰（约为 3 A），这是 由 于 Si IGBT的寄 生 电 容 在 SiC MOSFET 开关 过 程 中 的 充 放 电造成 的 。 图 9（c）、（d）实验 波 形 显 示 ：在开 关 模 式SM2 中 ，Si IGBT 的开 通 延 时 时 间 约 为 0.4 μs，SiC MOSFET 关断 延 迟 时 间 约 为 2 μs。 从实 验 波 形 中可以 观 察 到 混 合 并 联 器 件 的 开 通 过 程 中 ，通过 SiIGBT 的延迟开通，实现了 SiC MOSFET 零电压开通；同理，关断过程中，通过 SiC MOSFET 的延迟关断 ，实现 了 Si IGBT 的零 电 压 关 断 。 图 9（e）、（f）实验波形显示：在开关模式 SM3 中，SiC MOSFET 的开通延时时间约为 0.4 μs，Si IGBT 关断延迟时间约为 0.55 μs。 Si IGBT 提前 开 通 且 延 迟 关 断 ，由于Si IGBT 的开关过程较慢，故而在 SiC MOSFET 的栅源极电压上引起的电压尖峰较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdA2Gf4KTyn1mkHVvHHG23LgLbZGPUc7nvvOSYgrs7BI0ic3XTtbdP1cA/640?wx_fmt=png&from=appmsg)

图 10 给出 了 在 600 V/20 A 负载 情 况 下 将 SiC MOSFET 相对 Si IGBT 的 关断 延 时 时 间 分 别 设 为30 ns 和 2 μs 时 ，SiC/Si⁃HP 的实 验 波 形 。 可以 看到，当 SiC MOSFET 延时 30 ns 关断时，由于 Si IGBT较慢的关断速度，SiC MOSFET 迅速关断之后，Si IGBT 承担了关断过程中的大部分负载电流，存在明显的关断 电 流 拖 尾 ，故而 有 着 较 大 的 关 断 损 耗 ；当 SiC MOSFET 延时 2 μs 关断时，Si IGBT 先关断，但 SiC MOSFET关断时 Si  IGBT出现了较明显的电流尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdqNH0rVfwOJzicpibDU0hibqmemY8IkUdrsJRslOCr75872ImfMlDRtd5w/640?wx_fmt=png&from=appmsg)

图 11 分别 给 出 了 2 只 SiC MOSFET 并联 、2 只Si IGBT 并联 以 及 1 只 SiC MOSFET 与 1 只 Si IGBT 并联 组 成 的 混 合 器 件（SiC/Si⁃HP）在室 温 下 输出特性测试结果的曲线。曲线显示 SiC/Si⁃HP 的输出特 性 结 合 了 Si IGBT 和 SiC MOSFET 器件 的 各自特点 ，在负 载 电 流 小 于 17 A 时 ，导通 压 降 低 于 2只 Si IGBT 器件 的 并 联 ；在负 载 电 流 大 于 25 A 时 ，导通压降低于 2 只 SiC MOSFET 器件的并联。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdzsG6TL4l69GhMJbYkmXicKMLWV0DGuoSpjW7OKib80N6bfjujaY8YLibA/640?wx_fmt=png&from=appmsg)

在上 述 分 析 基 础 上 ，图 12 进一 步 给 出 了 在600 V/20 A 下 SiC/Si⁃HP 的关 断 特 性 测 试 结 果 。曲线 显 示 SiC MOSFET 关断 延 时 时 间 的 增 长 有 助于减小 Si IGBT 的关断电流尖峰，降低其关断损耗，虽然 此 举 会 导 致 SiC MOSFET 的关 断 损 耗 有 所 增加，但 SiC/Si⁃HP 总体关断损耗仍处于下降趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdcI1oicMzCPwRC54GdJblKPyDLO726j5MTnQuB3ia41IeF81ywqNDGo7A/640?wx_fmt=png&from=appmsg)

图 13 给出 了 不 同 开 关 器 件 组 合 方 式 在 不 同 负载电 流 场 景 下 的 开 通 与 关 断 损 耗 曲 线 对 比 ，其中 开关器 件 组 合 包 括 表 1 所示 的 2 只 SiC MOSFET 并联、2 只 Si IGBT 并联，以及由 1 只 SiC MOSFET 与Si IGBT 混合 并 联 的 SiC/Si⁃HP。 曲线 显 示 随 着负载 电 流 的 增 加 ，SiC/Si⁃HP 损耗 略 高 于 2 只SiC MOSFET 并联 组 合 ，但相 比 2 只 Si IGBT 并联器件的开关损耗有明显减小。

5\. 结论

对比了 SiC MOSFET 和 Si IGBT 两种硅半 导体器 件 的 静/动态 特 性 ，提出 了 一 种 优 化 的 开 关 模式 ，通过 对 混 合 并 联 器 件 的 稳 态 建 模 分 析 了 其 非 理想情况下的开关特性。

实 验 结 果 表 明 ，采用 优 化 的 混 合 并 联 器 件开关 模 式 能 够 实 现 SiC MOSFET 的 扩 容 、降 低Si IGBT 的开 关 损 耗 ，混 合 并 联 开 关 模 式 中 延 时 时间 的 设 置 对 器 件 整 体 的 开 关 损 耗 具 有 明 显 影 响 。所 取 得 的 研 究 成 果 对 于 拓 展 两 种 开 关 器 件 的 混 合应用提供了技术参考。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)