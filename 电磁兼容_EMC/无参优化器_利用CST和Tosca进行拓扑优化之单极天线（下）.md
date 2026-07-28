# 无参优化器：利用CST和Tosca进行拓扑优化之单极天线（下）


> 原文地址: [https://mp.weixin.qq.com/s/V1EQUZu9TNTMh5syCVIzzg](https://mp.weixin.qq.com/s/V1EQUZu9TNTMh5syCVIzzg)

作者 | Ma Bin

文接上篇[无参优化器：利用CST和Tosca进行拓扑优化之单极天线（中）](https://mp.weixin.qq.com/s?__biz=MzU2MDMxMzExMg==&mid=2247497787&idx=1&sn=a135453c7980542c4139fff7e3678102&scene=21#wechat_redirect)。

上文中我们分别在Tosca和CST中查看了无参优化的结果，发现Tosca中记录的每个cycle的优化目标结果与CST计算得到的结果存在一定偏差。这是为什么呢？

造成这种偏差的原因，正是前文中提到的“相对材料分布”。Tosca会将Design Space中的每个网格单元的材料密度初始化为0.5，随着迭代，有的网格单元的材料密度趋近于1，有的趋近于0。这里的1代表原始材料，0代表填充材料。

以下图为例，展示的是最后一次cycle的材料分布结果。其中空白的部分，其材料密度小于0.001，所以不再显示了，剩下的网格单元都有不同的材料密度值，尤其是结构的边缘会有很多介于0.001和1之间的网格单元。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARBB3kQufeQqumVvr6jaRJuR7UhaBPFQhJ3rPEcJlnpic4V4ARGYm5EmA/640?wx_fmt=png&from=appmsg)

在Tosca和CST的迭代过程中，CST是按照这些中间值对应的电导率去计算电磁响应的。

但是当用户打开某次cycle中的.cst工程文件，并点击Verify后，CST会使用默认的Isocut门限值进行切割：低于门限值的网格单元全部认为是填充材料，高于门限值的网格单元全部认为是原始材料。这就造成了Verify计算的结果与Tosca看到的迭代结果不一致。

在CST中，默认Isocut Threshold=0.8，但该值可能会随着版本或者补丁包进行调整，因此还是通过查看2D/3D Results/Topology Optimization的结果来确认当前使用的门限值比较准确。

那我们是否可以用不同的Isocut门限值去切割呢？当然可以。我们可以运行VBA Macros >> Solver >> Optimization >> Non-Parametric Optimization Settings宏，快速修改Isocut Threshold。修改后点击OK，再点击无参优化器中的Verify，此时CST会使用新的Isocut门限值进行切割，从而得到新的电磁响应。在1D Results /Design Response Curves中会记录不同Isocut门限值对应的优化目标和约束条件的结果，不需要用户手动保存对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARQqdS5THalLzLO8kUQkc6sWSLWLmpbbicicMECXMnLMl47TFNd8icxMszQ/640?wx_fmt=png&from=appmsg)

选择不同的Isocut门限值带入计算，会得到不同的S11和Power Radiated结果，如下图所示。可以看到，提高Isocut Threshold值，单极天线的谐振点往低频移动。这符合预期，因为Isocut Threshold值越大，电流路径越短。但也可以注意到，当Isocut Threshold=0.85时，单极天线不再谐振，这是因为寄生贴片的电流路径断开了。这也说明，对于该无参优化的结果，仅通过调整 Isocut Threshold值并不足以使天线在2.4GHz处实现谐振。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARBEeVTNo4Mq6tRNetCzhO6ibwvtIU3PVTwPxzhJYxRaqla3bFEZE79hg/640?wx_fmt=png&from=appmsg)

我们可以对原始模型不做任何修改，再次运行无参优化，得到新的寄生贴片结构和对应的电磁结果。这里我又运行了2轮优化，可以看到部分结果的谐振频率已非常接近 2.4GHz。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARQ47NCmf6k1AiahOocdw8ibtpzQHzwywOE5VDlsCicVALjm3lia6JpEGia4g/640?wx_fmt=png&from=appmsg)

如果非要让单极天线在2.4GHz处谐振，还可以继续再多做几轮无参优化。不过，我们也可以换个思路：调整无参优化的目标。我们将目标频点设置为2.38GHz，但是我们评估结果时仍然关注2.4GHz。这样，仅运行一轮无参优化，就可以拿到下面的结果。从结果我们得知，当Isocut Threshold=0.7的时候，单极天线谐振在2.4GHz，其S11=-17.9dB，满足小于\-10dB的约束条件。同时，2.4GHz处的辐射功率最大，其Power Radiated=0.49W，也满足最大化辐射功率的优化目标。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoAR8rftRwiazd1lLrSGicT8AsravUqA6oSmkWv1L4dcPHiaoofqvTnQianzIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARFFfJVIeyCbugd1mPmia84S8W5vQlvh9tYhal08a32xRSZJC4Mofibelg/640?wx_fmt=png&from=appmsg)

到目前为止，我们已经完成了无参优化的大部分工作，但是上述寄生贴片的结构还仅仅是停留在网格层面，并不是可以直接加工的CAD模型。

我们可以再次打开Tosca软件，切换到“Tosca Structure.smooth”模块。按下图进行设置可以导出对应的.stl格式文件。.stl格式是一种常见的3D打印和CAD文件格式，它通过一系列三角面元来近似表示物体表面。

对于导出设置，这里有几点需要说明：

• Design Cycle设为26，表示对最后一个迭代结果进行平滑处理；

• Iso-Value设为0.7，因为0.7的时候verify结果最优；

• Input Scale设为1e3，因为本工程的长度单位为mm；如果单位是m，则无需缩放；

• 导出的.stl文件将存储在<ProjectName>\_tosca\\TOSCA\_POST\\路径下。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARr3u0fZIvWoajtJoPhRwNuawXVpEtD5sfSxCQAfXPw9k7T4aYCia02eg/640?wx_fmt=png&from=appmsg)

将寄生贴片的.stl文件导入到CST中，并设置为PEC。由于导入的结构仅为一半，需要再做一个镜像对称得到完整的寄生贴片结构。其他设置保持不变，再次运行仿真可以得到新的电磁响应结果。

我们将原始结果（矩形贴片）、verify结果（网格文件）、stl结果（CAD结构）三者放在一起对比，可以看到smooth出来的结构加到单极天线后，其S11在 2.4GHz处最小，为\-26.3dB，并没有明显的频偏。原始单极天线的实际增益只能达到\-1.078dBi，而优化后最终得到的单极天线的实际增益可以提升至4.153dBi，说明该天线在2.4GHz工作良好。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARibPXqkv37GWvibxDdB4vDInbLhZwktnc7OO1n8gas8DG6vE37PXuEWTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/rAmUsuqnroHyYibqxTghxn4TqeoRpCoARgpyCscbcbScCUjjiakyv0ASNV3mvReskSRe4rLefm5bn3uwJr2OPryw/640?wx_fmt=png&from=appmsg)

至此，整个无参优化的流程已全部完成。

本次无参优化以一个窄带天线为示例，其电磁性能对结构边缘的变化较为敏感，因此进行了多轮优化。如果是优化一个宽带天线，拓扑优化通常能更快地获得较为理想的优化结果。

  

**感谢阅读，如果觉得本篇文章有用，请点赞、收藏、在看或赞赏，分享给更多朋友了解和关注我们。**