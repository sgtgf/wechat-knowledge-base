# Antenna-2：电场和磁场边界条件


> 原文地址: [https://mp.weixin.qq.com/s/BQrZfyj5XlwrqbtIol3G\_g](https://mp.weixin.qq.com/s/BQrZfyj5XlwrqbtIol3G_g)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSgrzygWTIy9jbFCwEGufyLicwrSB87rvHOdJDA8Vu8kpviaLe4bsAEX4atf13mrz5J5WafNiaPkg9gQ/640?wx_fmt=png&from=appmsg)

____**★★★**______Antenna-2---电场和磁场边界条件______**★★★**____

引言：通过理解电场遵循的规则，可以直观地理解复杂天线或结构周围的电场分布，首先我们将讨论完美电导体（称为PEC）表面的电场，大多数金属（铜、铝、钢等）都可以被视为PEC。

__€1.__金属或导电表面上的电场

任何表面上的电场都可以分解为两部分：

1#：Et1--->切向电场（位于表面上的电场部分）

2#：En--->法向电场（电场中垂直或垂直于表面的部分）

电场的各个部分如图2-1所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkgYAmibnFP1ITia81Qdwpkic4c2ZUCQaU4iaRBWmRF70OwiapdpAYqQg9cXw/640?wx_fmt=png&from=appmsg)

图2-1：PEC表面上的任何电场都可以分解为切向电场Et和普通电场En

为了讨论金属表面附近电场的边界条件，首先讨论金属特性，金属的特点是具有非常高的电导率，这意味着金属两端的小电压会产生巨大的电流。

金属上的切向电场

假设金属表面附近存在两个带电粒子以产生切向电场，如图2-2所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEky832L0wOlspLloADOclVdR4GXMS9OcJpBVqIyb2ZJWCz5fwdaOlcmg/640?wx_fmt=png&from=appmsg)

图2-2：PEC上的切向电场

图2-2中由于金属对电荷流没有阻力，负电荷会被正电荷吸引，反之亦然，这将产生与Et完全相反的电场，如图2-3所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkG3d5BWPuRo2mJLP2rRvfDQRHRI1COoftn5A5bnyucdkib4y6ibAID21A/640?wx_fmt=png&from=appmsg)

图2-3：PEC中的成对电荷会对消任何切向电场

图2-3显示了第一个结果：Et=0（始终），也就是说，金属表面上的切向电场将始终为零。

金属上的法向电场

关于电场En的法向分量，电荷会产生电场，如果电流产生磁场，那么磁场就会产生电流，因此，只有当PEC存在产生该电场的等效电荷时，PEC的表面才会存在一个正常的电场，如图2-4所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkLFupFvz3ibZJ9QYanFqmXZhY8ViblVh5jiaCgibpLJrfRDaGGBjbtmuyPQ/640?wx_fmt=png&from=appmsg)

图2-4：法线电场En必须与金属表面表面电荷一起存在

图2-4显示，法向电场En必须伴随表面电荷，如果电场指向远离表面，则表面电荷为正，如果电场指向表面，则表面电荷为负，表面电荷以库仑/米^2 \[C/m^2\]为单位测量。电场可以通过以下方式与该表面电荷以及金属周围介质的介电常数直接相关：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJvO9TFXu8ibTsYiaffnR5VRHr1VRNFeSVAu5luHxsQvfbGbUWq3u4r2atQ/640?wx_fmt=png&from=appmsg)

金属内的电场

金属或PEC内部的电场始终为零（E=0），原因还是金属上的切向电场为零的自由电荷流思想。电路的欧姆定律指出电压和电流由设备的电阻相关，这实际上源自电磁学，其中电导率σ（电阻率的倒数）将电场（如电压）与电流密度联系起来：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJvBySVgFHSWsZicEickqicclbyEm1oFYSoiaqaPDRFDXKQOVtvalnlQQuFug/640?wx_fmt=png&from=appmsg)

由于电导率是无限的，如果材料内存在电场，则电流将是无限的，这不可能发生。基于对电场在金属附近、内部和周围行为的了解，现在可以讨论电场（非完美金属）的一般边界条件。假设有两个空间区域，这些区域具有不同的介电常数和电导率，如图2-5所示，如何将材料边界处的电场联系起来？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkky7JgOUWUbwWFtvA1BpMSmjZbTkicExga3miaPhicCWp8B8oNFuPjg4qA/640?wx_fmt=png&from=appmsg)

图2-5：在材料不连续性处，电场如何相关？

换句话说，如果知道边界一侧的场，那么这些场与边界另一侧的场有什么关系？这被称为电场边界条件规则。

第一条规则：相切电场在边界上相等，即：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJvcqTDkBCXx3ApK7MO0Zh8iaZO1B6q5NOGT3U7fOk7BAHMhw7DyJKcAsA/640?wx_fmt=png&from=appmsg)

上式指出，穿过边界的切向电场具有连续性。（证明与基尔霍夫电路电压定律相同：在绕电路中的任意两条路径传播后，电压必须最终相同，同样，如果围绕边界制作一个假想环，电场（与电压相关）也需要相同）

电场（En）的法向（垂直）分量在边界上没有任何电荷的情况下，如果电通密度（D）是连续的（请注意，D和E由介电常数相关）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJvA2icZPt33aAyVwdl1Lib7l4W1orLgib42UYMcZIgDVTLcZ4mbAMhZ23aw/640?wx_fmt=png&from=appmsg)

如果材料不连续性处存在电荷，则边界条件将受到表面电荷密度（ρs）\[以 C/m^2 为单位\]影响：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJv9GMmMUb5AbfKqGrccFic984rmIy1ZWDZwZ90A53C0fklO559bicvTvuA/640?wx_fmt=png&from=appmsg)

磁场边界条件

正如电场遵循某些规则一样，磁场（H场）也遵循沿两种不同材料边界的某些规则，规则同样取决于讨论的是切向分量（Ht） 还是表面的法向/垂直分量（Hn）。

正如存在与电场相关的参数“介电常数”一样，磁场也存在一个类似的参数--磁导率，这是材料的一种特性，基本上描述了材料如何集中磁场，以亨利/米\[H/m\]为单位，这是长度上电感的量度。

回到材料边界，在图2-6中进行了说明：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkrTS48YcFmfcjnmDFaBpgMyn77osKxic5bfq5YAjNtibicWUtAgY4UboaQ/640?wx_fmt=png&from=appmsg)

图2-6：材料边界的图示，以及切向和垂直磁场

这些规则与电场边界条件情况非常相似，首先由于没有磁电荷之类的东西，使磁通密度（B）的法向分量跨边界连续：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJvEm7m7B5fp3UpDibGekK2bWyuCF1L5FJyRfXDxHeUKZUdocYExdiaB78Q/640?wx_fmt=png&from=appmsg)

上式指出，垂直于材料变化的磁通密度分量在边界上是连续的，也就是说，矢量Bn1（紧邻区域1内的B的法向分量）等于矢量Bn2（紧邻区域2内的B的法向分量）。由于B和H通过磁导率相关，因此知道磁场Hn的法向分量如何跨边界变化。

请注意，电导率（σ）或介电常数（ε）在这两个区域并不重要，它们不会影响磁场的边界条件。对于材料不连续处的切向磁场（Ht），回想一下，磁场是由于电流流动而产生的，因此如果表面上没有电流流动（I=0），则磁场将在材料边界变化上连续：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJvcrTnNu7K7JdU698IvhcauY7WIicy9WekHM1Mk5aicqDiblpDScExX2RmA/640?wx_fmt=png&from=appmsg)

假设电流在表面上流动，那么这一定会在表面产生自己的磁场，从而使磁场（Ht1和Ht2）不连续，在这种情况下，我们将表面电流写为K，单位安培/米，如图2-7所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScu9CkMJxCJCxZ6tIXicvEkGHkS3Cqmrs6fHIKribYPvbNIw7HlwZG521nLLZunVNJOFWmJ1miamBlw/640?wx_fmt=png&from=appmsg)

图2-7：两种材料之间的边界，边界上流动着表面电流K

在这种情况下，定义使磁场不连续于表面电流的确切量K：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQwywVg96df9EicNZC51rJviaiavibPaONcH33MqhCTkQyQJ7jGMZwZRPPLYelsiakQyK46AqlTMG22WA/640?wx_fmt=png&from=appmsg)

上式指出，磁场的切向分量将因边界处的表面电流量（K）而不连续，也就是说，Ht1是区域1内材料边界的磁场切向分量，只有当电流在表面流动时，这才会与Ht2（区域 2内的切向磁场）不同。