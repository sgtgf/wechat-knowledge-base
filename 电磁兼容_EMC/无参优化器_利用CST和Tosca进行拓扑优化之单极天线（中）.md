# 无参优化器：利用CST和Tosca进行拓扑优化之单极天线（中）


> 原文地址: [https://mp.weixin.qq.com/s/LA6qDMlZIcJiR8V3Hs64aw](https://mp.weixin.qq.com/s/LA6qDMlZIcJiR8V3Hs64aw)

作者 | Ma Bin

文接上篇[无参优化器：利用CST和Tosca进行拓扑优化之单极天线（上）](https://mp.weixin.qq.com/s?__biz=MzU2MDMxMzExMg==&mid=2247497765&idx=1&sn=64fbf4f6bdaa0b4a8a1226ed33be16f5&scene=21#wechat_redirect)。

在无参优化器的对话框中点击“Start”启动无参优化后，我们可以在CST的Message窗口中查看整个无参优化的计算过程，如下图。可以看到每个cycle中都包含一次CST计算和一次Tosca计算。其中Tosca计算耗费的时间很短，整个无参优化的时间消耗几乎都在CST端，这也是为什么在保证精度的前提下我们需要尽可能的减少CST计算时间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1NksxS1yCNh3Gvlhbt116flIVtroibJk2cQicGCgSBfDvMEFNDicjDbKkzcA/640?wx_fmt=png&from=appmsg)

当无参优化任务求解完成后，我们可以先在Tosca软件中查看一些优化结果，了解无参优化的过程。在CST工程中打开无参优化器对话框，然后点击“Open Tosca”按钮可以直接打开Tosca软件。

在Tosca软件中有多个模块和工具，用于可视化不同类型的信息。我们先将Module切换到“Tosca Structure.report”，该模块用于查看优化结果，包括材料分布、优化目标和约束条件等等。如果用户从CST中打开Tosca，对应工程的“.par”文件会被自动选择。

仿真完成后，整个拓扑优化的最终报告“_<ProjectName>\_tosca\_ALL\_ELEMENTS\_report.vtfx_”存放在TOSCA\_POST文件夹中，点击View Report按钮后，选择上述报告文件，可以查看Tosca中的优化过程及结果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1NkAIyr0Hc36mmWg1fpZ8yUHVNJYSribPNic2TvXOWG754sqdF7GdGIALLg/640?wx_fmt=png&from=appmsg)

我们可以先查看拓扑优化的收敛曲线。分别点击OBJ FUNC和CONSTRAINT，可以查看优化目标（Radiated Power）和约束条件（S11）随迭代次数的变化曲线，如下图所示。从曲线结果中可以看到，Radiated Power逐步增加并趋于稳定（约为0.45W），S11结果最优值出现在第9个cycle（约为\-35dB），最后也趋于稳定（约为\-12dB）。整体拓扑优化主要以Radiated Power结果为目标，并限制S11小于\-10dB，符合预期。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1Nk49Qia5DXTiazVjhUo0e1rHpuHXCA34LvIwVqSmxOUibTyuOerUiaao6sicg/640?wx_fmt=png&from=appmsg)

如果想查看每个cycle中，优化目标和约束条件的具体值，可以在<ProjectName>\_tosca文件夹下打开optimization\_report.csv文件，如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1NkDt7eZic2TUHeBJxBH29lavqolfz3pMo4Oa5ZSpcZ3hmMMibnibsqtXxHA/640?wx_fmt=png&from=appmsg)

然后，我们可以查看Design Space中的材料分布结果。在Case panel中选择Relative Material Distribution并且按照下图进行设置，可以查看每次迭代中寄生贴片的相对材料分布结果。从结果中可以看出，拓扑优化共进行了29次迭代，第10次迭代时已形成大致轮廓，后续的迭代都是主要在优化边缘单元的相对材料分布。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1NkBZDAK4D9wWzODkvon8LMGShytL7qrle5HClprbnT5Pd6RX0Z89BV5g/640?wx_fmt=png&from=appmsg)

除了在Tosca中了解整个拓扑优化过程，我们还可以在CST中查看每个cycle中的电磁结果，因为寄生贴片中不同的材料分布会影响整个单极天线的性能。

在<ProjectName>\_tosca/SAVE.cst文件夹中会存放每个cycle对应的.cst工程文件，我们可以打开该工程文件查看当前的网格和材料分布。从Tosca的收敛曲线结果，我们得知最后一次迭代的Radiated Power最大。所以打开028文件夹中的.cst工程文件，通过Mesh View可以看到大致的轮廓。在CST2025版本中，用户还可以在2D/3D Results结果文件夹中查看当前电磁结果对应的材料分布。在本例中，红色代表金属部分，蓝色代表非金属部分。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1NklyUPVL6vL7pYem6ic2g1FyfqU2L5MTWgCl0vxOFzyz88oHb2MQa7RWQ/640?wx_fmt=png&from=appmsg)

我们还可以查看该工程对应的1D结果，如下图所示。可以注意到该单极天线在寄生贴片的作用下谐振在了2.44GHz，与目标设置的2.4GHz有些偏差。2.4GHz处对应的S11为\-7.66dB，与optimization\_report.csv文件中记录的\-12.2dB相差很大，这是为什么呢？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHtLOJHliaGmk9qOxy2IS1NkwPEpDeYkC6CBILe9kjYmQcIiaszlRHkVgjaABgHTfIVh9rsEB4Lqtxw/640?wx_fmt=png&from=appmsg)

下一篇文章我们将继续分析无参优化的结果并解释造成这种偏差的原因。

  

**感谢阅读，如果觉得本篇文章有用，请点赞、收藏、在看或赞赏，分享给更多朋友了解和关注我们。**