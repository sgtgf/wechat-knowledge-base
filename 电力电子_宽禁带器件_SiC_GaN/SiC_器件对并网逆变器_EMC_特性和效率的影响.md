# SiC 器件对并网逆变器 EMC 特性和效率的影响

原创 吴俊雄，何 宁 SiC碳化硅MOS管及功率模块的应用 2025-06-23 19:35 广东

> 原文地址: [https://mp.weixin.qq.com/s/TL9XX85AzlW6eJAaBv-\_7A](https://mp.weixin.qq.com/s/TL9XX85AzlW6eJAaBv-_7A)

文章来源：电源学报

作者：吴俊雄，何 宁，徐德鸿（浙江大学电力电子技术研究所，杭州 310027）

摘要：近年来，宽禁带器件 SiC MOSFET 在并网逆变器邻域已经取得了越来越多的关注。 首先，讨论了 SiC MOSFET 三 相 并 网 逆 变 器 EMC 模 型 的 建 立 ，并 通 过 分 析 噪 声 源 的 模 型 进 行 等 效 替 代 ，结 合 逆 变 器 损 耗 对 于 噪声传导路径的阻尼作用，得到了 SiC 逆 变 器 的 EMC 仿 真 模 型 和 理 论 模 型 ；然 后 ，通 过 逆 变 器 平 台 实 验 的 结 果 与仿真模型和理论模型的结果进行了对比，验证了模型的可 行 性 ；最 后 ，通 过 实 验 比 较 了 沟 道 栅 SiC 逆 变 器 、平 面栅 SiC 逆变器和 Si IGBT 逆变器 3 者在相同开关频率下的传导干扰和不同开关频率下的满载效率。

关键词：SiC MOSFET；EMC 模型；传导干扰；效率

0.引言

相比于同等功率等级的 Si IGBT 器件，SiC MOSFET 器件具有更高的开关速度和更小的开关损耗。将 SiC MOSFET 器件替代 Si IGBT 器件， 可以显著提升光伏逆变器的效率。 然而 SiC 器件工作时较高的 dv/dt 和 di/dt， 对于电力电子装置造成了更严重的 EMI 噪声问题。 EMC 模型用于预测逆变器系统的传导噪声水平，包括通过提取寄生参数以及精确器件 模型建 立 的时域 仿 真 模型、等 效 传 递函数替代的频域模型等。

本 文 首 先 讨 论 了 SiC MOSFET 三 相 并 网 逆 变器 EMC 模型的建立。 通过分析噪声源的模型，进行等效替代，并结合逆变器损耗对于噪声传导路径的阻尼作用， 得到了 SiC 逆变器的 EMC 仿真模型和理论模型。 然后，通过逆变器平台实验的结果与仿真模型和理论模型的结果进行了对比，验证了模型的可 行 性 。 最后 通 过 实 验 比 较 了 沟 道 栅 SiC 逆 变器、 平面栅 SiC 逆变器和 Si IGBT 逆变器三者在相同开关频率下的 EMI 噪声水平。

1\. SiC 三相并网逆变器 EMC 模型

1.1 寄生参数的提取

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMZv3oByFWghxjTyMYq1YgqtFaXNTRtxN0K9OZnWyXKehbibo8dbVYlnw/640?wx_fmt=png&from=appmsg)

如图 1 所示为逆变器主电路部分的结构。 图中SiC 逆变器使用富士公司的半桥模块， 关键寄生参数 如：PCB 母线对散热器电容 （Cp，Cn）， SiC 器件漏极对 散热器 电 容 以 及 源 极 对 散 热 器 电 容 （Cdi，Csi），散热器接 地阻抗（Lg，Rg）以及 滤波电感的 层间电容等，都将考虑其对于传导共模噪声的影响。 以上寄生参数均可以通过网络分析仪测量得到。 为了避免各部分寄生参数的重复测量， 提取寄生参数时，逆变器被分开为不同的部分，各寄生参数分别单独测量，使其不互相影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMZNanMsv9qOpyFdvvunfWEibqAzEib5pZgeYZRJDHJ73oVPpIKDWz6icTQ/640?wx_fmt=png&from=appmsg)

图 2 所 示 为 考 虑 的 寄 生 参 数 以 及 测 量 对 应 的阻抗曲线。 在主电路的 PCB 板上，由于正负母线铺铜面积较大，其铺铜导体层对散热器存在一定的寄生电容（Cp，Cn）。 为了测量该参数，将 SiC 半桥模块和直流电容等无关的元件从主电路上移除，直接测量 PCB 的 正 负 母 线 端 子 与 散 热 器 之 间 的 阻 抗 ，从而 得 到 寄 生 电 容 （Cp，Cn），图 2（a）为 正 母 线 对 散 热器的阻抗特性,计算得到 Cn 为 24.1 pF。 类似地，图2（b）为 分别测量 功 率模 块的 电 极对散热器 的 阻抗得到的典型 LC 串联阻抗曲线，其中，电感是测量回路的外部接线引入的寄生电感。 通过计算得到这个半 桥模 块的 功 率 电 极 对 于 散 热 器 的 寄 生 电 容 Cd1、Cd4 和 Cs4。 在图 2（c）中，逆变器滤波电感元件可以简化为理想 电感和理 想 电容并 联 后 集 中 参 数 的 等效，曲线呈现出典型的 LC 并联特性，图中曲线的尖峰由电感的层间电容引起，根据在曲线的感性区域等效得到的电感 La 为 2.82 mH，在容性区域等效得到的电容为 181 pF。

1.2 并网逆变器 EMC 模型的建立

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMj2sWSdoiaUkmOZBicN3ER4BUkXiaDBVwSpOtBRrrk4wRROicWb79tc1wvA/640?wx_fmt=png&from=appmsg)

SiC 并 网 逆 变 器 EMC 模 型 如 图 3 所 示 。 图 3（a）为 SiC 并网逆变器的 EMC 仿真模型，图中 节点H 代表 逆变器中 的 散热器，据 安 规 ，光 伏 逆变 器散热 器 一 般 要 求 接 地 ，HG 节 点 间 为 散 热 器 接 地 线 。SiC 器件内部的寄生电感 Lsi（i=1，2，…，6）可由其数据手册得到。 对于三相并网逆变器，根据 CISPR 16-1-2 A 类标准，传导共模噪声的 频段为 150 kHz~30MHz，因此分析共模噪声时可以忽略直流电压和电网三相交流电源的影响。

在图 3（a）中 上 桥 臂 电压 uPU、uPV 和 uPW 为 并 网逆变器的噪声源，由 SiC MOSFET 器件的开关 特性以及器件内部寄生电感决定。 因此，可以用等效电压源替代噪声源。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMdHtCFDScGW9fjLVFahxY4B2U0ibHUm61ChHDHhuhwssiclDtYrqbHiaMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMqJR2SibHhdnJvicybYdlk8fgb5B92rXNjm7ViaC9YbmUCWEnLTgutnAMQ/640?wx_fmt=png&from=appmsg)

如图 4（a）所示为沟道栅 SiC 并网逆变器上桥臂的电压实验波形，上升 时间为 13 ns,下降时间为 18 ns。 在仿真中控制 MOS 器件模型的上升、下降时间与实验一致，如图 4（b）所示。 在理论 模 型 中 ，上 桥 臂 电 压 可 以 简 化 为 图 4（c）所 示 的梯形波等效电压源， 并保持与实验一致的上升、下降时间。 根据梯形波电压源等效以及仿真模型的简化，可以得到图 3（b）的理论计算EMC 模型。

为了 验证 等 效电压源替 代共模噪声 源的 可 行性，对实验中噪声源与梯形波等效电压源在一个工频周期内的频谱进行了比较，如图 5（a）所示。 为了方便比较，每一个频谱都用上包络线和下包络线进行表示。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMDIdKemmTCk6GzsngAyDO2G0qA1s3K0h8aiafEOhQQBUptx1a5PIbhmw/640?wx_fmt=png&from=appmsg)

可以看到，在图 5（a）中，实验噪声源频谱与 梯 形 等 效 电 压 源 频 谱 均 以-20 dBμV/10 倍 频 程的斜率下降， 而且 2 条频谱的上包络线在 4 dBμV的误差范围之内；在图 5（b）中，实验噪声源频谱与仿 真 噪 声 源 频 谱 进 行 了 比 较 ， 误 差 在 5 dBμV 以内。 因此，所采用的噪声电压源模型可以较好地表征噪声源。

1.3 逆变器损耗对共模噪声传导的影响

除了寄生参数与噪声源，并网逆变器的损耗同样会影响 EMI 噪声在电路中 的传导。 为了模拟逆变 器 损 耗 对 于 EMC 模 型 的 影 响 ， 图 3 （b） 所 示 的EMC 理论模型中引入了电阻 Ra、Rb 和 Rc 来等效损耗对于共模噪声传递的阻尼作用。 对于本文中额定功率 Po 为 10 kW 的并网逆变器， 若其满载效率为η，额定并网电流有效值为 Io，则等效阻尼电阻可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMhmy6npW17In7KQHgDlNSFqeVf7UTqQLbxIkrWol860eAGj0FzapZibg/640?wx_fmt=png&from=appmsg)

根据图 3（b）中的 EMC 理论模 型 ，以 接地 点 G为参考点，根据结点电压法可得矩阵方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMNwQkq7Mv6RFh1cOlesCgnJfbqHO8yic4SpKcclHSTxspU4J6GbyKdPw/640?wx_fmt=png&from=appmsg)

式中：uU、uV 和 uW 分别为三相逆变器桥臂中点 对地的电压；Zf 为桥臂中点与接地点之间的阻抗，表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMvD7ky817c2Kwv3feds4gibk4tn1AvqaaxrsoOEfMSfcsrJRYZRRWic3A/640?wx_fmt=png&from=appmsg)

根据共模电压的定义和测量的寄生元件参数，为 简化模型，假设寄生参 数三相对称 分布 ，取 值 为参 数总 和 的 平 均 ，解 方 程 （2），可 以 得 到 EMC 解 析模型中共模电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMf3ibAAibvRsqYMTdVOJq35AKPKNhkfLOl55SWCZJDbatiagvKl8yHI4OA/640?wx_fmt=png&from=appmsg)

式中：KCM（s）为寄生参数包括等效阻尼电阻对于共模电压的影响；uPU+uPV+uPW 为 共模噪声源对于逆变器共模电压的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMecX72sVWvb66huIDjS0XfCINibObwFxKQQUULxRP0piazialCSYmdiaibgQ/640?wx_fmt=png&from=appmsg)

理 论 与 仿 真 EMC 模 型 共 模 电 压 频 谱 的 比 较如图 6 所示。 仿真和计算模型中 SiC 并网逆变器均工作于满载 10 kW、600 V 直流电压以及 10 kHz 开关频率。 图 6（a）为引入等效逆变器损 耗的电阻之前 理论 EMC 模 型 的 共模 电 压 频 谱 与 仿 真 EMC 模型共模电压 频谱 的 对比 。 为 了说 明 等 效阻尼的 影响，两者的频谱都在 30 kHz~30 MHz 频 段 ，可 以 看到 ，由于寄生参 数的影响 ，两 者 的 共模 电 压 频谱 均在 110 kHz 的频率点产生了谐振峰，然而在此频率点处，理论模型的共模电压频谱峰值明显高于仿真模型。 由图 6（b）可以看出，引入了等效逆变器损耗的阻尼之后， 理论模型的共模电压频谱在 110 kHz的峰值频率点幅值显著下降， 理论 EMC 模型的共模电压频谱趋势能够与仿真模型保持一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMyucRUScUUwwnnVQcIibMHicEUaqjX2jFWvwLke2WR5GOlEPW1Z7AJWoQ/640?wx_fmt=png&from=appmsg)

1.4 EMI 实验结果

应 用 Fuji 公 司 沟 道 栅 SiC 器 件 的 并 网 逆 变 器在 10 kW、600 V 直流电压以及 10 kHz 开关频率下对共模电压进行了测试。 实验与理论 EMC 模型共模电压频谱的比较 结果如图 7 所 示。 图 7（a）所示为 150 kHz～30 MHz 频段内， 实验测得的共模电压频谱与理论模型共模电压频谱的比较，可以看到理论模型的结 果在此 频段 内 能够很 好 地 与实验结 果保持一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjM45NT1rzBJR5zzwj2vdmMSmFw3uD2DZACkNDPD9rwqrLWtvicuYAsoPA/640?wx_fmt=png&from=appmsg)

然而当频带扩张到 30 kHz～30 MHz 后如图 7（b）所 示 ，实 验 共 模 电 压 频 谱 曲 线 的 峰 值 点 明显与理论模型共模电压频谱存在差异。 实验中共模电压频谱在 65 kHz 时达到峰值点， 然而理论模型则是在 110 kHz 处达到峰值。 因此，在理论 EMC 模型中可能存在一定的寄生参数尚未考虑周全，因而造成了理论与实验上的差异。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMcOxSPooDCkfkJYYJ2ibeBrg6JWmMtukoDtUibMFukUjrMdElfFKGQu9A/640?wx_fmt=png&from=appmsg)

为 了 探 究 SiC 器 件 对 于 逆 变 器 共 模 噪 声 的 影响 ，搭 建 了 沟 道 栅 SiC 逆 变 器 、平 面 栅 SiC 逆 变 器以及 Si IGBT 逆变器实验平台，并均在 10 kW 额定功率、600 V 直流电压以及 10 kHz 开关频率下进行了共模电压的测试。 如图 8（a）所示，在 4 ～10 MHz频段 内 ， 沟 道 栅 SiC 逆 变 器 的 共 模 电 压 频 谱 比 SiIGBT 逆变器高 1~5 dBμV，这个频段内的增量可能直接来自于 SiC 器件更加迅速地开通和关断。 在图8（b）中可以看到，两种 SiC 逆变器共模电压频谱基本一致，但是在 26～30 MHz 频段 内 ，沟 道 栅 SiC 逆变 器 共 模 电 压 频 谱 比 平 面 栅 SiC 逆 变 器 高 约 3dBμV。 整体来说，SiC 器件的引入的确引起了更高水平的 EMI 共模噪声。

2\. SiC 逆变器与 Si IGBT 逆变器效率的对比

2.1 SiC 逆变器驱动电阻的选择

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMaCQtqnic7gEPiaRMEhBibLFScPibfg4aNF2iajxLe0DUOl1ibicg9BudjafKQ/640?wx_fmt=png&from=appmsg)

沟 道 栅 SiC MOSFET 和 平 面 栅 SiC MOSFET器件开 关损耗随 着 驱 动 电 阻变 化 的 曲 线 如 图 9 所示 ，实 线 为 平 面 栅 SiC 器 件 的 开 关 损 耗 曲 线 ，虚 线为沟道栅 SiC 器件的开关损耗曲线。 在相同的驱动电阻下，沟道栅 SiC 器件相对于平面栅器件明显有着更低的开通损耗和关断损耗，却有着更高的反向恢复损耗。 随着驱动电阻的减小，器件开通关断损耗减小，而沟道栅 SiC 器件的反向恢复损耗迅速增大 ，甚 至 超 过 了 开 通 损 耗 ，因 此 沟 道 栅 SiC 器 件 驱动电阻需要谨慎的选择。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMAlnov0XWIUwo3F6KKSZTXROfwZQQfpWXejPyOcjzs3mHvyo4nonucA/640?wx_fmt=png&from=appmsg)

图 10 为 SiC 器件双脉冲测试， 分别测试了沟道 栅 SiC 器 件 和 平 面 栅 SiC 器 件 在 不 同 驱 动 电 阻下开通过程。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMzUvxkqBG8qiaAGlaTxVAh3UickKayRJzptM0GMhKvkLgpYplkBTqEhAw/640?wx_fmt=png&from=appmsg)

如图 11 所示为驱动电阻为 10、24 和51 Ω 时，两种 SiC 器件在工作电流 20 A 时的开通过 程，vds1 为 T1 管的管压，ids1 为 T1 管的电 流。 由于T2 体二极管的反向恢复造成了明显的电流尖峰。 当驱动电阻从 10 Ω 增加到 51 Ω 时，沟道栅 SiC 器件由反向恢复引起的电流尖峰从22 A 下降至 5 A，平面栅 SiC 器件则由 5 A 下降至 2 A。 为了保证电流尖峰应力不超过正常工作电流的 25%，并考虑驱动电阻对于开损耗的影响，依据数据表，选择 51 Ω/30Ω 为沟道栅 SiC 器件的驱动电阻，选择 10 Ω/3.3 Ω为平面栅 SiC 器件的驱动电阻。

2.2 逆变器效率比较

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMsAfhR9H7uMdWsDah667hn1bnl51guSftvticQXpF7IbCetFaRACypLA/640?wx_fmt=png&from=appmsg)

并网逆变器效率测试实验参数如表 2 所示，效率测试由 Voltech 的功率分析仪 PM6000 （20 MS/S采样率，电压电流采样精度 0.02%）测试完成。

在不同开关频率下，沟道 栅 SiC MOSFET 两电平逆变器、平面栅 SiC MOSFET 两电平逆变器和 SiIGBT 两电平逆变器满载效率的比较如图 12 所示。由图可以看到，当开关频率低于 40 kHz 时，沟道栅SiC 逆变器相对于平面栅 SiC 逆变器能够展现一定的满载效率优势。 然而，当开关频率提升到 40 kHz以上时，平面栅 SiC 逆变器相对于沟道栅 SiC 逆变器更有满载效率优势。 沟道栅 SiC 器件相对平面栅SiC 器 件 有 着 更 大 的开 关 损 耗 。 当 开 关 频 率 从 10kHz 提升至 100 kHz 时， 平面栅 SiC 逆变器的满载效率从 98.8%到98.3%， 仅下降了 0.5%， 而沟道栅SiC 逆 变 器 满 载 效 率 从 98.9% 到 98.0% ， 下 降 了0.9%。 在 10～100 kHz 的开关频率范围内， 沟道栅SiC 逆 变 器 的 效 率 坚 韧 度Δη/Δfs 为 -0.100%/10kHz, 而 平 面 栅 SiC 逆 变 器 Δη/Δfs 为 -0.056% /10kHz。 整体来说，随着开关频率的提升，相对于沟道栅 SiC 逆变器，平面栅 SiC 逆变器体现了更 加平缓的效率变化特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMA9QOm2XMKhzVfjRPaeP0wJJ7h8AibuxPib0liblsu69p8ia7kBV0TBTXsw/640?wx_fmt=png&from=appmsg)

此外，从图 12 还可以看到，在相同的开关频率下 相 对 于 Si IGBT 逆 变 器 另 两 种 逆 变 器 的 效 率 均有明显优势。 Si IGBT 逆变器的 Δη/Δfs 为-0.300%/10 kHz，意味着随着开关频率的提高，Si IGBT 逆变器 满 载 效 率 的 下 降 速 度 为 沟 道 栅 SiC 逆 变 器 的 3倍，是平面栅 SiC 逆变器的 5 倍。 于是在开关频率60 kHz 下 的 沟 道 栅 SiC 逆 变 器 能 够 与 Si IGBT 逆变器保持相同的满载效率 98.4%， 且开关频率 100kHz 满 载 下 的 平 面 栅 SiC 逆 变 器 也 仅 仅 比 此 效 率水平低了 0.1%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskbOfEwKxHBHich6Q31SvJjMOia4SToQnkO6HuQVhWYCzhozciaTmsIibiaBG7ibh43jia46Lv5DictfLU8WQ/640?wx_fmt=png&from=appmsg)

图 13 所示为在不同开关频率下实验中使用的滤波 电 感 。 当 开 关 频 率从 10 kHz 提升 到 100 kHz时， 三 相滤波 电 感 的总体 积从 1.941 L 减 到 0.516L，下降了 73%。 通过将沟道栅 SiC 逆变器的开关频率提 升 到 60 kHz， 在 保 持 与 Si iGBT 逆 变 器 在 10kHz 开关频率下相同满载效率的同时，滤波电感体积，从 1.941 L 减到 0.694 L，可以减小 64%。 同样，将平面栅 SiC 逆变器提升到 100 kHz， 能够获得滤波电感的体积减小 73%。

3\. 结论

本 文 主 要 探 究 了 采 用 SiC MOSFET 器 件 对 于光伏逆变器的影响。 首先，通过对于 EMI 噪声源的建模， 考虑逆变器损耗对于噪声传输的阻尼作用，建立了 SiC 并网逆变器的 EMC 模型， 并通过实验平台的测试结果验证了 EMC 模型的可行性。 然后，SiC 逆变器与 Si IGBT 逆变器的共模噪声进行了实验比较， 实验表明 SiC 逆变器相对于 Si IGBT 逆变器引入了更高的传导共模噪声。

基于逆变器效率的对比，沟道栅 SiC 逆变器相对于平 面栅 SiC 逆变器，在低开关 频率段（小于 40kHz）有一定的效率优势，但是不适宜于更高开关频率场合的应用。 SiC MOSFET 两电平逆变器相对于Si IGBT 两电平逆变器有着更高的效率坚韧度。 将SiC MOSFET 两 电 平 逆 变 器 的 开 关 频 率 提 升 至 60kHz， 不仅能够维持与 10 kHz 开关频率下 Si IGBT两电平逆变器维持相同的满载效率水平，还能大大减小滤波器体积。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&tp=webp)