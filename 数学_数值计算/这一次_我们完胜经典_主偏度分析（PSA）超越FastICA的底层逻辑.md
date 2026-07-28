# 这一次，我们完胜经典！主偏度分析（PSA）超越FastICA的底层逻辑


> 原文地址: [https://mp.weixin.qq.com/s/MKFKqAIABUrEUEcYDu93Rw](https://mp.weixin.qq.com/s/MKFKqAIABUrEUEcYDu93Rw)

FastICA是盲信号分离领域的经典标杆算法，凭借优异的性能在行业内获得了广泛应用与高度认可。作为经典的独立成分分析方法，FastICA在求解过程中通常选用负熵、峰度、偏度等统计量构建目标函数，通过对上述指标的最大化或最小化操作完成独立分量提取。当以偏度作为优化指标时，FastICA与本团队提出的主偏度分析（PSA）在理论框架上完全等价。但在实际工程与数据分析实践中，PSA的综合处理性能往往显著优于以偏度为代价函数的FastICA，而二者迭代策略的本质差异，是PSA具备核心性能优势的根源所在。

1\. 迭代策略的核心差异

尽管 PSA 与 FastICA 的目标函数完全一致，但迭代过程中对数据的依赖截然不同。

在FastICA中，每一个独立成分方向的迭代公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0TNZSuibgKiaV18fmne0ziadvFLvb5xPmEQpfuhXviazpaYM71D4LsnibGDnA/640?wx_fmt=png&from=appmsg)

其中X为原始数据，1为所有元素均为1的列向量，![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0TfGXcMeDg8KbAX929iackcPEX2bnfH9t5icb393626ia2dqGD0sbLoH4Hg/640?wx_fmt=png&from=appmsg)（此时，FastICA的目标函数正好为偏度），![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0TqQUJHyLETh3C5LcKNZ3zW2ViaoAic9ypXlqmDM6nRBQwKHXicxPwHCx1Q/640?wx_fmt=png&from=appmsg)和![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0T05xr8VKkAph4DULCLo4Ar6G7RulS79v0ONgcib8Wzic8TY8ewpYMlFgg/640?wx_fmt=png&from=appmsg)分别为![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0T0Aibib8ThDLG9zw8rWiaV0JsptrCwC9syxFxSBqLsrI6l7F3z0KW6CYkA/640?wx_fmt=png&from=appmsg)的一阶导数和二阶导数。

而在PSA中，每一个极值偏度方向的迭代公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0TZJMlS08gxhKnHh5UAovkibicY8fIFdiaTicHshuhKhiceqptyzQM3nU8qWQ/640?wx_fmt=png&from=appmsg)

其中![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0Tibu0iadwib7SibVRSBTzQDIrc0fl0KnjbyytD9saI7eFianicMXj84c3eFcQ/640?wx_fmt=png&from=appmsg)为数据的协偏度张量。

可以看出，FastICA在迭代求解每个独立成分方向时，每次计算都需要调用全部原始数据参与运算。这意味着数据规模越大，单次迭代的计算成本越高，整体效率会受原始数据体量的显著制约。

而PSA的迭代基于数据的协偏度张量，这一蕴含了数据所有三阶统计信息的核心统计量，因此，极值偏度方向的求解无需依赖原始数据，仅通过协偏度张量即可完成，从根源上简化了计算流程。

值得注意的是，为避免迭代收敛到已获取的成分方向，两者均采用正交投影策略，将后续迭代限制在已得成分的正交补空间中。

2\. 实验验证：效率差异一目了然

此前，我们已在《矩阵之美\-算法篇》中完成了严谨的理论证明：在初始值保持一致的前提下，主偏度分析（PSA）与FastICA的迭代结果完全等效。基于这一理论基础，接下来我们将通过实验对比，直观呈现二者在时间消耗上的显著差异。

以ENVI自带的Cuprite高光谱数据为测试对象，在保持最大迭代次数、最小容忍误差等参数完全一致的公平条件下，对比两者提取1至10个成分的时间消耗，结果十分显著：

FastICA的时间消耗随提取成分数量增加呈明显上升趋势，原始数据的大规模特性让每一次迭代都伴随高额计算成本；而PSA的时间消耗几乎与提取成分数量无关，其主要耗时集中在前期协偏度张量的计算，后续基于张量的特征分析耗时占比极低。无论提取多少个成分，PSA的整体耗时都远低于FastICA，展现出压倒性的效率优势。

![](https://mmbiz.qpic.cn/mmbiz_png/tbsNyKAwjm4N9S6CLYsUMr0Ez9siccT0TFlyj3DUlqiakVILiaLnkez2pRJ1BZMSADdD5ibfKekNmZ9bKWvErrmfmA/640?wx_fmt=png&from=appmsg)

图1\. PSA与FastICA的时间对比（针对Cuprite高光谱数据）

3\. 优势背后的底层逻辑

PSA之所以能实现对FastICA的效率碾压，可从两层逻辑深入解读：

从表面来看，核心差异在于数据依赖的不同。原始数据的像元数往往远大于特征数，FastICA对原始数据的反复调用，导致其时间复杂度随数据规模同步攀升；而PSA摆脱了对原始数据的依赖，仅通过预先生成的协偏度张量迭代，计算量大幅降低，效率自然更高。

从根本来看，这是统计量凝练带来的关键突破。FastICA未对数据的三阶统计信息进行整合提炼，只能依赖原始数据重复开展计算；而PSA将数据的非对称特征浓缩为协偏度张量，既保留了全部三阶统计信息，又将极值偏度问题转化为协偏度张量的特征值与特征向量求解这一优美的代数问题，实现了从 “海量原始数据计算” 到 “核心统计量分析” 的效率跃迁。

**总结**

PSA不仅成功凝练出描述数据非对称性的核心三阶统计量，更将三阶统计分析从复杂的原始数据运算，转化为简洁的张量特征分析问题。它堪称主成分分析从二阶统计到三阶统计的自然拓展，既保证了理论的严谨性与结果的准确性，又在效率上实现了对FastICA的全面超越，最终成为数据三阶统计分析的标准工具。

**参考资料**

耿修瑞，朱亮亮.《矩阵之美\-算法篇》，科学出版社，2025