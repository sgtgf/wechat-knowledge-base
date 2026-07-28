# NFINDR算法与一桩历史公案


> 原文地址: [https://mp.weixin.qq.com/s/nCjKX4Ju4UM34K7GiFbVlQ](https://mp.weixin.qq.com/s/nCjKX4Ju4UM34K7GiFbVlQ)

前文提到，根据提取顺序的不同，端元提取算法可以分为逐个提取型和整体提取型两种类型。而NFINDR就是整体提取型算法中的开山之作。该方法由澳大利亚昆士兰大学的学者M.E. Winter提出，其核心贡献在于首次将下述体积公式（1）引入遥感社区。

假设![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64jyeHsC0M3WBNaLzOCOcEiaVEWxGyHdGBQxzrK2gqyg29ZxuVyYDPBNg/640?wx_fmt=jpeg)是图像中M个线性无关的光谱向量，则在光谱空间中以这M个向量为顶点的单形体的体积大小可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw641Qicc86SBd3OS62VOQddLKqn20IHGhAfLErwc1ICgK23R5khUibZLtDw/640?wx_fmt=png&from=appmsg)

其中，

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64XQibCOWbnzfoOo4QUGjAZviauYicPWTGGlWrBL1EAeKwmRdebAcJibEqLw/640?wx_fmt=png&from=appmsg)

基于公式（1），我们可以给出NFINDR算法提取端元的主要流程：

1.  初始化：首先确定端元个数M，并给出M个像元作为初始端元；
    
2.  迭代优化：遍历图像中的所有像元，尝试将每个像元逐次置换端元集合中的每一个端元，并计算相应的单形体体积。如果上述置换过程中的部分操作使得单形体体积增加，则选择与最大单形体体积相对应的置换作为最终端元选择的依据，将端元集合中相应的端元替换为该像元；
    
3.  多次遍历：重复步骤ii，对图像进行多次遍历，直至端元集合不再发生变化，即为最终的端元解。
    

从上述步骤可以看出，NFINDR通过单形体体积的逐步膨胀来提取图像中的所有端元。这一方法简洁直观，并且在高光谱图像处理中得到了广泛应用。然而，使用NFINDR时，以下几点需要特别注意：

（1）局部极值问题：NFINDR算法选择不同的初始点，可能会导致不同的端元集合。

（2）纯像元问题：NFINDR直接从图像中选择使得单形体体积最大的像元作为端元，因此要求各个地物在图像中都存在纯像元。

（3）噪声问题：由于单形体体积对于图像中异常噪声非常敏感，因此NFINDR有可能会将部分噪声像元判断为端元。

（4）维数问题：从公式（1）可以看出，由于（1）中用到了E的行列式的操作，因此NFINDR算法要求E必须为方阵。也就是说，参与计算的光谱向量![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64ekC9Ll2JEYP0dlS69TENahEnVxnA6Fchy73wBrwFvNxaaCD289MzKg/640?wx_fmt=png&from=appmsg)的维度必须为（M\-1）维。此外，由于E必须为方阵，这也意味着，必须M个像元同时参与运算并且最终必须同时输出M个端元。

关于NFINDR算法，高光谱遥感领域曾有一起轰动一时的历史公案。几位重量级学者共同撰写了一篇具有广泛影响的文章，其中就使用了NFINDR算法。遗憾的是，文章的内容严重违反了NFINDR算法在维数选择上的基本原则。结合文章中出现的其他问题，可以判断该文章存在严重的学术不端行为。然而，更为令人遗憾的是，文章中的所有作者不仅没有受到应有的处理，反而在学术界步步高升，继续获得更高的声誉与职位。这一现象，无疑给学术界的诚信和公正带来了深远的负面影响。

本人无意于政治纷争，也深知自身能力有限，因此，我们仍然将焦点集中在NFINDR算法的学术部分。为了满足NFINDR对维数的要求，应用中通常需要先对数据进行降维，而主成分分析（PCA）便是最常用的方法之一。从某种程度上来说，降维是一把双刃剑：一方面，它有助于抑制图像中的噪声信号；另一方面，它也可能导致图像中某些感兴趣的小目标的丢失。一定程度而言，我们在[“端元提取的国内首例探索”](https://mp.weixin.qq.com/s?__biz=Mzk4ODA1MDUyOQ==&mid=2247483701&idx=1&sn=bce6dfd57043d03c4edd983dd2c8ca32&scene=21#wechat_redirect)中所提出的如下体积公式正是为了应对NFINDR算法的维度问题。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw645WTib27yMht4ZJ4zbNsGKdv1VyfhrDicibM0FQn8Qib9Z1n3EXxmPzupMA/640?wx_fmt=png&from=appmsg)

其中，![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64O5XaEoibE6WfbuLBuVsThvl4iaB3ScpuZku7xjZbbqZdfpl3VYCCnpicA/640?wx_fmt=png&from=appmsg)，

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64hA3GEXZ9pLjibHxGlnUVX29hxhjSdMAjRDjKjaooSycFa5X7huQT0Dg/640?wx_fmt=png&from=appmsg)

从公式（2）可以看出，无论像元![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64ekC9Ll2JEYP0dlS69TENahEnVxnA6Fchy73wBrwFvNxaaCD289MzKg/640?wx_fmt=png&from=appmsg)的维度如何，![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64beY6eXk8Ga9290MDF2ONq259hbicpicCMibJm4Bm3Z3YAPNC5XaDzmUuw/640?wx_fmt=png&from=appmsg)始终为方阵。因此，公式（2）的体积公式与数据的维数无关。下面，仅用一个简单的特例，来展示公式（1）与（2）在特殊情况下的等价性。

图1给出了一个平面上的直角三角形，接下来我们分别用上述两个公式计算其面积。基于公式（1），我们有

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64ib3bXoInicUaibhH281ia4weUFyZtPqOpMBvYwicHhbvgMpaHQicZWfMIFgw/640?wx_fmt=png&from=appmsg)

基于公式（2），我们有

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw64kXwiaTMwwOL7IPxjGS0jCReunB4IKVf1flb3aSclRw3y8RxmAUudwPQ/640?wx_fmt=png&from=appmsg)

显然，二者完全等价。事实上，可以严格证明，公式（1）正是公式（2）在数据的端元数等于其波段数加1情况下的特例，有兴趣的读者不妨动手验证一下，这里就不再赘述。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mBiaxQeaWOtYkt3gA1JDCw642ukSjZhhjTeWia2Nw3R7xXia9EibdTkOXAvrJXcBCh3f0sePwib0pS4XKw/640?wx_fmt=png&from=appmsg)

图1.直角三角形

参考文献

**Winter, M. E. (1999). "N-FINDR: An algorithm for fast autonomous spectral end-member determination in hyperspectral data."** _Proceedings of SPIE - Imaging Spectrometry V_, **3753**, 266–275. DOI: 10.1117/12.366289