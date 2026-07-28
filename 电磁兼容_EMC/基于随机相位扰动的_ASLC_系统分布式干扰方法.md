# 基于随机相位扰动的 ASLC 系统分布式干扰方法


> 原文地址: [https://mp.weixin.qq.com/s/XiGJdvz8\_Rl5JvqZpORyag](https://mp.weixin.qq.com/s/XiGJdvz8_Rl5JvqZpORyag)

_论文信息_

标题： Distributed Jamming Method for ASLC Systems Based on Random Phase Perturbation

作者： Liang Qi, Jianjiang Zhou

期刊： Sensors, 2026, 26, 3857

关键词： adaptive sidelobe cancellation; distributed jamming; random phase perturbation; non-stationary jamming; synchronization accuracy

doi： https://doi.org/10.3390/s26123857

一.论文摘要

自适应旁瓣相消（Adaptive Sidelobe Cancellation, ASLC）是现代雷达用于抑制旁瓣有源干扰的重要技术。它通过主通道和辅助通道之间的高相关干扰信号，自适应求解辅助通道权值，并在干扰方向形成零陷，从而降低主通道中的干扰分量。传统对 ASLC 的反制方法包括多源饱和干扰、异步闪烁干扰和极化捷变干扰，但这些方法往往面临干扰源数量多、开关时序匹配严格或依赖雷达极化特性的限制。

该文献提出一种基于随机相位扰动的分布式协同干扰方法。方法仅使用两个空间分布的相干干扰源，使二者同时发射相同信号，并主动控制两源之间的相对相位随机跳变。由于两个干扰源在雷达阵列上相干叠加，随机相位变化会改变合成场的空间相位梯度，使雷达接收端看到的等效波前方向快速变化。这样，ASLC 在训练窗内估计得到的权值难以稳定匹配后续相消窗中的干扰状态，从而造成权值失配和零陷变浅。

文献通过理论建模和 Monte Carlo 仿真表明：在默认参数下，主动随机相位跳变可使 ASLC 平均相消比由 26.80 dB 降至 20.29 dB，下降 6.51 dB；同时，时间同步误差和相位同步误差在所设仿真范围内对干扰效果影响较小。该结果说明，随机相位扰动可以在较低干扰源数量条件下制造空间非平稳干扰，是一种兼顾资源效率和工程鲁棒性的 ASLC 反制思路。

二、核心理论

1\. ASLC 的基本思想：用辅助通道估计主通道干扰

ASLC 的本质可以理解为一个自适应减法器。设主通道输出为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDaob8fq5ibvRzwvWunH5JPibzfBf0t9svJkYRUbrTbwCzAmTnBhM9LhSQ2EpdXgYpfE3jlAe7c4OVV0pY5R2f2w8ocIIq4DaRjE/640?wx_fmt=png&from=appmsg)

辅助通道接收向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDEyzF5iaiaAxj8UHcguAJDNaxd2hw1EGU5GLArOs53dQ8owbTmcZz4w0NImWlzIpXFsHnaCFSOReKCibodalzr5clsermibho1DPY/640?wx_fmt=png&from=appmsg)

辅助通道权值为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsDlSPBuO7fVZuvwU1NsM0I3p3o1qoyRvtLujx1G45P1yylML8BTaVibLmwoZ43nkQialzGJn25qgwibm6j5rmjwicraRJPBlTeBVsE/640?wx_fmt=png&from=appmsg)

则 ASLC 输出为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsC6lQ7hlKRmCvZciapPbxAReIunx9DpS74nqM1tRSU2vIfU9QVd2UIstoIzVMxgEKeXOy6YDIjWM4De4OUTpTLUYicQLibUnO5eHI/640?wx_fmt=png&from=appmsg)

其中，W^H X(t)是由辅助通道加权合成出的干扰估计量。如果该估计量能够准确逼近主通道中的干扰分量，那么相减后输出中的干扰就会被压低。

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsB8d6LRFic7TwbehRaricYmSALj6vz4zjq8CrXk1rBLcDHHd6nJ0kqj4aPibjy0OyW6H50CEGc844lzl7kxyx5ibgvScB2abGQ6QN4/640?wx_fmt=png&from=appmsg)

图1 ASLC 系统框图与自适应权值更新流程。图中给出了主通道、辅助通道、训练窗、协方差估计、权值计算和相消输出之间的关系

从最小均方误差角度，ASLC 需要选择最优权值，使输出平均功率最小：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCt9kWtSDNiamyvIMvxERvrY328JUJ6ibHNSIaSj4o6KqUq19eYSxwH9LoDnTFUSCv7v6gtNh84jRnDuZjAibWPj3eN4lS1icl9jvo/640?wx_fmt=png&from=appmsg)

由 Wiener-Hopf 方程可得：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsD6N798TkciaGKnC2W7d0c4hsAHO4yPCMMN7cf80Yzib2ZP9Fv0YR9JtiaibyKZytAA6oYO5BGiajxk1foJWoMiaQzWp4EDw1Pfohhos/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsBO9hRiazVwpOMnXoDvByb7tGA4TNdXkba3mVVunc8pHd90xTtWAsYILpzr1icPzWjYjrmsfT9IPS18I14mEp0ibXjGtvV6PSIuXE/640?wx_fmt=png&from=appmsg)

Rxx表示辅助通道协方差矩阵，rxy表示主辅通道互相关向量。这个求解过程说明：ASLC 的权值并不是预先固定的，而是根据接收数据统计特性自适应估计得到的。

2\. 固定方向干扰下的 ASLC 权值模型

若干扰从固定方向 θj入射，干扰信号为 j(t)，干扰功率为 Pj\=E\[|j(t)|^2 \]。辅助通道和主通道接收模型可写为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDvmHl6StNT4hkia0cPXaPnsjr86Byx0J0GwoppCEatPx9GEXKVch5DxRQUUdQCSmkBibIH4ersfstOgBS1F0JF317cVDGa4A8ek/640?wx_fmt=png&from=appmsg)

其中，gaux(θj) 是辅助通道对干扰方向的空间响应向量，Gmain(θj) 是主通道对该方向的响应。若干扰与噪声互不相关，则有：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAREZiaU0TKQ9PG6qjGhZ2Xsg4FmR2emZCVvPABI6OQPT1AjtaWFVrp0q1iakQnrLvchm7iapJcYPf77pNyhZyq3IFFY4DFzLE6pA/640?wx_fmt=png&from=appmsg)

代入 Wiener-Hopf 方程，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCr8QBkYgyWdsImb5e3vziaJAhDPtOWqNqhJIV2AgVwrpRvFMrKA4BoattibPgO8jRryiajSKXey6J7qrPmVQrMgu2OyecWx8NRps/640?wx_fmt=png&from=appmsg)

在强干扰条件下，如果

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCqf4ASlWLmXQjibdOF7SZF3cBBDE3111PPoAb7rxsojjkmp5g2sWTLKFhmGFeY9CZSFDcKBnXib5NpqkDcgM5XXGuXFhZXed8qs/640?wx_fmt=png&from=appmsg)

则可以近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsBNU8oG90LWl4bZAOSDRatjVmXxXicttVuw1MrGCUqwjICPolj8RB144zicxEBtAWFUtSC8KC2OVmYkicaic8uLCPiaE5RsAY2uDzIg/640?wx_fmt=png&from=appmsg)

这个近似式揭示了 ASLC 的核心能力：当干扰方向稳定时，最优权值主要由干扰方向对应的空间响应决定，而不取决于干扰波形本身。因此，只要干扰的空间统计特性稳定，ASLC 就可以形成稳定零陷。

3\. ASLC 的脆弱性：它依赖训练窗内的平稳性

实际 ASLC 通常采用有限训练窗估计统计量：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsDEyTzZaSBwwBKFgkXfFgEZicD1DicLric3yx3aEUmWszWX0ial5EqrLPcJnW1A69nXYCvqWqE3O2DfDYudqqhjt9TRqsHVBibkQ0aU/640?wx_fmt=png&from=appmsg)

因此

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsDr09fQQ2jsyMCp2oDavfNh00kbyl3Ql5gFOzDnqNSVCana5quTfCibNOWicXU8jLcbAfbOprwprGqknxT2P3stdGDzliaEA8yRgA/640?wx_fmt=png&from=appmsg)

若训练窗内干扰方向、功率或主辅通道相关性保持稳定，估计权值就能够有效用于后续相消。但如果干扰在训练窗或训练窗与相消窗之间快速变化，则 W ̂ 可能不再匹配实际干扰状态，导致输出残余增大。

这正是随机相位扰动方法的切入点：不一定要增加干扰源数量，而是通过改变两个相干干扰源之间的相对相位，使合成空间响应快速变化，从而破坏 ASLC 的平稳性假设。

4\. 随机相位扰动的双干扰源模型

设两个相干干扰源分别位于 θ1 和 θ2 方向，发射相同基带信号 s(t)。第一个干扰源发射：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsDkKvn3uwicEX3Q9BAAda7xtUQtbfMyRR9lWGobBbF6VZ2QHkCn8CTIjRqbA51TibeIhDDyUAEqxXISZ0J34zUO1zC5GNnKYX0LI/640?wx_fmt=png&from=appmsg)

第二个干扰源叠加主动随机相位扰动：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsD3J5XvxMvmHEmFDVQs2feUjJ5uvXkic06AA2ZiaoLU7AoibloZUjbkJfQAYxxe1iawZibSeOfx2DzQLafGffdvCBMVCFDaE5bXcfLQ/640?wx_fmt=png&from=appmsg)

对于阵元间距为 d 的均匀线阵，第 n 个阵元的接收信号为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDqbD757icsFr9ekTDSzM5ic4xgekJCyzfm5RBOwntfhGt9JIsDpx3yJayYygQAbs6nzSdfiadkrtw8S2lNibxbUkbCxnHeyC1HybQ/640?wx_fmt=png&from=appmsg)

其中，k=2π/λ为波数。该式表明：两个干扰源的物理方向虽然不变，但相对相位变化会改变二者在阵列上的相干叠加关系，进而改变合成空间相位分布。

为了与 ASLC 向量模型统一，定义：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsB9C8YHKe2iazMgbACNtzymq2zf0pBGbzYIUjmdeYXqjvkrnZS3zQyguaPuuTwV5lfDj00Kia1ZFaIac5Q1jC8KV13MDQGbtakss/640?wx_fmt=png&from=appmsg)

令 ϕ(t)=ΔΦactive(t)，则辅助通道和主通道分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCFhZu4HOjxckURLL6hcckdWFJZx5kOkZn6jN6B4BJtZnSVvQwFfKQrS4KbZ7OjTeTWgibhsib5G4QLGH0XNn45Nkic9yEg5Ne14A/640?wx_fmt=png&from=appmsg)

定义瞬时合成空间响应：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsAQDIia37nKqdJNAGT3fEYuPhu5VGxRudaGicr5HYapMMene2pktCV7KwMZwyGnrtS6niaSvGibxH4wEC27cyiaLMEITY0wfxMhwHLg/640?wx_fmt=png&from=appmsg)

则模型变为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsAibbo4o0gWSg4lwibQndTstbA4HpaxcXuS9NrNMuuia8SB628dK2bicQDNmnqz4q9hBYBUE3B6FhXtibvHibyyCarXSS058ibj8NBpiao/640?wx_fmt=png&from=appmsg)

当 ϕ(t) 为常数时，u(t) 和 v(t) 固定，ASLC 可以学习这个稳定合成响应；当 ϕ(t) 随机跳变时，u(t) 和 v(t) 快速变化，训练窗估计的权值难以始终匹配相消窗中的瞬时状态。

5\. 等效波前方向与同步误差模型

对于单个平面波，相邻阵元相位差满足：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsC4mPSSVX0jyrUdOR5Z68zWXtIrXrffic0U49p3QuWVuay5rXThqSjwNCM0v3Nm7dahXV48NlXbORyLEgyiclmHnR5nZzBnG3vKU/640?wx_fmt=png&from=appmsg)

因此可以由相邻阵元相位差反推等效方向：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsB8D1ymcWofbLPCBLFBgFticCdG2WhUlVfiakCSZsLR4iaLibqGbQlYU4TmMnAJ0CKPBgb8nUtfHQGSe0EKjicBKpzQ1Qicszvo1FANA/640?wx_fmt=png&from=appmsg)

对两个干扰源的合成信号，文献定义：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsADsdZ80yITfeHwnicoUSayA8qleZibPWx3bV7Z3PTb74wz3GP71o7Kgaib1oBNTiayVMwErWvOETq73nBfqcrf7xAVrBxWUpPPAJg/640?wx_fmt=png&from=appmsg)

于是等效波前方向为：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsApFxozywuhtLtEnrGOk3lKpsEoiaQGXemII0J2WIr3Z5S39FjHB7BQKB5g0JIL1SG3AHMZiaSpuy05QV8XoBP8G53jWMGq1Y1ib0/640?wx_fmt=png&from=appmsg)

随机相位扰动会使 Δψ(t) 快速变化，因此 θeq (t) 也随时间变化。需要注意的是，两个不同方向平面波的叠加并不严格等价为单一平面波，θeq (t) 更适合理解为合成场空间相位梯度的工程等效描述。

工程实现中还要考虑同步误差。文献将总相位写为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsB4kGveBict6fZkSJIibW8rm5bamic9qLLBYxpKr0WLNvwQriaw71delq3A22r2UQH8rZhkQ6gDzDqobYmhPq8zI5QiaGc0niaHYibGJk/640?wx_fmt=png&from=appmsg)

其中，时间同步误差引起的载波相位偏移为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAicxcr0jSIjsCicHu8rcYxa9ndJIXxr06sOqaMldazFaN5tIqbicfdNFDTeh6hq7FQa3rK05nibfaceXKFia0BVZ0eF6vKOh0kXFmU/640?wx_fmt=png&from=appmsg)

固定偏置和慢漂移在一个 ASLC 处理窗口内近似为常数，往往可被权值吸收；真正造成非平稳性的，是主动施加的快速随机相位跳变。

6\. 相消比 CR：判断干扰有效性的指标

文献使用相消比（Cancellation Ratio, CR）衡量 ASLC 抑制能力：

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsALXlCtq3rBM692tPAnlsskaxEiczSD3pOUqGFnNOWbYQoXicXDVic4I9x0wr4sdrdzfw1YsMk6GJoqFpsibHSRP6shKHibDYorPva0/640?wx_fmt=png&from=appmsg)

其中，Pbefore 为相消前干扰功率，Pafter 为相消后残余干扰功率。CR 越大，说明 ASLC 抑制越强；CR 越小，说明干扰方法越有效。

在自适应滤波理论中，CR 与主辅通道相关系数 ρ 之间有关系：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsAGtCOkGHIr88Z1qocGIyV2Fw0bgZiaBAIlXicsEHDspMz324uuEFe5LEVQgOCsl5ibD0aptglDlLLtjzbZZiaSKew53icACPvKpaE8/640?wx_fmt=png&from=appmsg)

因此，随机相位扰动即使只让 |ρ| 小幅下降，也会通过 1-|ρ|^2 显著放大残余干扰功率，最终表现为 CR 下降。

三、核心研究成果：从机理建模到仿真验证

1\. 主动随机相位跳变：让 ASLC 零陷变浅

文献首先比较了无相位跳变与主动随机相位跳变两种情况。默认仿真参数包括：雷达工作频率 10 GHz，阵元间距半波长，LFM 信号脉宽 10 μs、带宽 10 MHz，采样频率 40 MHz，主阵元数 32，辅助通道数 4，两个干扰方向为 16° 与 25°，JNR 为 40 dB，训练窗长度为 64 个采样点，主动随机相位每 50 个采样点跳变一次，跳变值在 \[0,2π) 内均匀分布。

表1 主动随机相位跳变对 ASLC 性能的影响

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsASfgUnhGacGicsBCwticyNqLT5pKxFnvHZshWicbbticsvXaoAb1DUuicS97lKdjKZReJIocwfqUW9eibdciajrsKaMrPYhk7QawQRzA/640?wx_fmt=png&from=appmsg)无相位跳变时，平均 CR 为 26.80 dB；加入主动随机相位跳变后，平均 CR 降至 20.29 dB，下降 6.51 dB。同时，平均相关系数由 0.9987 降至 0.9933。相关系数只小幅下降，却带来明显 CR 降低，说明 ASLC 对主辅通道相关性的变化非常敏感。

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsDWMuO4hYwlg1hQKOhz3ebgAxYKpPlJD3HstESgDpibdfc2T4VT3v4IFTeIcfSldpibHPaMwbn5iaT3VJGL23icygMRzp2NOS6oluI/640?wx_fmt=png&from=appmsg)

图2 无相位跳变时的 ASLC 方向图。ASLC 能够在两个干扰方向形成较深零陷

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsDJ2EQY6myoYgJTdAUj2JN1znuCSPOIBw5JVziaXkiasa6pPsqcJicPib0ZfhKDYFb7WBHhHb9mpKMpmQkCmb8HWNXvgTE3zNoWibXY/640?wx_fmt=png&from=appmsg)

图3 加入随机相位跳变后的 ASLC 方向图。两个干扰方向处零陷明显变浅，相消能力下降

随机相位跳变并没有让干扰源真实方向发生物理移动，但它改变了合成场的等效空间相位结构，使 ASLC 形成的零陷深度降低。换句话说，ASLC 仍然试图相消干扰，但训练出的权值无法完全匹配变化中的合成响应。

2\. 同步误差鲁棒性：时间和相位误差影响较小

文献进一步分析了时间同步误差。主动跳变参数固定，设置相位同步误差 σphase\=5°，扫描时间同步误差 σtime\=0.1∼10 ns。

表2 不同时间同步误差下的 CR

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsCT9ofKHrRFvea0oL2q8LsJdLttGjgcEEP0icKCHaxaMtiavPvSjz5R2IVkvL4j1icHHKHhyqgicPKOzTwXdXDkUlyOVgvYghlIIJA/640?wx_fmt=png&from=appmsg)

当时间同步误差从 0.1 ns 变化到 10 ns，平均 CR 仅在 20.13 dB 至 20.41 dB 之间波动，变化小于 0.3 dB。文献解释为：时间同步误差在一个 ASLC 处理窗口内近似表现为固定相位偏置，而固定或慢变偏置可以被 ASLC 权值吸收。

随后，文献固定时间同步误差 σ\_time=0.5 ns，扫描相位同步误差 σ\_phase=1°∼60°。

表3 不同相位同步误差下的 CR

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsBfkzdr7HficckjC83uqicgxqEz6oFpz9ua4l2d9GIcNpsklyTGwmrTDbUibWcdsvypfv7yHtaJjdNnoYGAqQF04IBjhy38nWJicP8/640?wx_fmt=png&from=appmsg)

相位同步误差变化时，平均 CR 仍基本保持在 20.14 dB 至 20.41 dB 之间。也就是说，在文献设定的残余随机误差模型下，该方法对时间同步和相位同步精度要求相对宽松。

3\. 与既有方法对比：资源效率与时序敏感性的折中

文献将随机相位扰动方法与异步闪烁干扰、多源饱和干扰进行对比。

表4 不同干扰方法的 CR 对比

![](https://mmbiz.qpic.cn/mmbiz_png/p5SKe5bvAsBkMZCtxKQYk9jseqxqf2Rub2rlSibTicentHRRUv4F8eFvJ90O2yxZplOMNvVk4HW0l5libibOhfZibzhq08jlRazpwPyDWmKr3vBQ/640?wx_fmt=png&from=appmsg)

随机相位扰动方法的平均 CR 为 20.29 dB，略高于异步闪烁干扰和多源饱和干扰对应的约 19 dB 与约 18 dB。但该方法仅需要两个干扰源，且对时序匹配不敏感。因此，它并不是单纯追求最低 CR，而是在干扰效果、干扰源数量和同步要求之间提供一种更均衡的方案。

4\. 参数敏感性：跳变间隔、JNR 和辅助通道数

相位跳变间隔是影响效果的关键参数。原文 Table 5 给出了跳变间隔从 10 到 100 个采样点时的 CR 变化。

表5 CR 随相位跳变间隔的变化

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsDMLMQHHFmVrEFbJzkjVpxEj5oyl0CuicmlcH8cI9xOkdQRiba7Y0RHic7ZdFPfAXk5AC2wkhMZEmngNM2YgvfgEuMwFGKeQ4ZZNE/640?wx_fmt=png&from=appmsg)

结果显示，相位跳变并不是越快越好。当跳变间隔为 10 到 30 个采样点时，CR 仍然较高；当跳变间隔接近或略超过训练窗长度时，CR 明显降低。其原因在于，只有当训练窗与相消窗之间的统计状态产生明显失配时，随机相位扰动才能充分破坏 ASLC 的权值匹配。

表7 CR 随 JNR 的变化

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsCGx6AcIJsaMSCNIjrxHuYc8tZb3zMxpx2iabTEF4qvWaU8blQUJvBHcr9ahCpVMX5pdHEicibPhuticBr6AkhIukp6SQSY7CaWOWc/640?wx_fmt=png&from=appmsg)

JNR 越高，ASLC 在无相位跳变条件下本来能够获得更高 CR；但随机相位扰动造成的 CR 降低量也随之增大。例如 JNR 为 40 dB 时，降幅达到 6.51 dB。这说明该方法在强干扰条件下对 ASLC 的破坏更明显。

表8 CR 随辅助通道数量的变化

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p5SKe5bvAsCrd37JCNZ1H8DmibTupfibT1skyqINGhJmk1av3DtKOBG1jWVKB9icj2Oprr9CBAYflCibvJLJGEamos3bgaicrQVCOUNQKU6n5188/640?wx_fmt=png&from=appmsg)

结果显示，辅助通道数从 2 增至 10 时，随机相位扰动带来的 CR 降低大致保持在 5.87 dB 到 6.51 dB 之间，说明该方法对辅助通道数量并不十分敏感。

四、研究结论与展望

研究结论： 文献提出的随机相位扰动分布式干扰方法，能够通过两个相干干扰源之间的相对相位随机跳变，改变雷达接收端合成干扰的空间相位梯度，使其表现为等效波前方向快速变化的非平稳干扰。在默认仿真条件下，该方法使 ASLC 平均 CR 从 26.80 dB 降至 20.29 dB，说明其可以有效削弱 ASLC 的稳定零陷跟踪能力。

研究展望： 后续研究可以进一步考虑多源随机相位扰动的优化设计、随机相位跳变参数的自适应调整、与空间域和极化域干扰技术的联合使用，以及硬件在环实验和外场验证。特别是在真实传播环境中，多径、杂波和平台运动对相干叠加关系的影响仍需系统分析。

研究意义： 该文献为分布式协同干扰提供了一个较为清晰的数学模型和仿真验证框架。它提示我们：对抗自适应系统时，未必只需要提高功率或增加干扰源数量，也可以通过主动改变训练数据与实际相消数据之间的统计一致性，削弱自适应算法的权值匹配能力。

参考文献

\[1\] Qi L, Zhou J. Distributed Jamming Method for ASLC Systems Based on Random Phase Perturbation\[J\].Sensors, 2026, 26(12): 3857.

* * *

【本文特别声明】本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：https://doi.org/10.3390/s26123857\]