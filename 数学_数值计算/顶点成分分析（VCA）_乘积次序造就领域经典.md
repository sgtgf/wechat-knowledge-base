# 顶点成分分析（VCA）：乘积次序造就领域经典


> 原文地址: [https://mp.weixin.qq.com/s/nSdpO7SQql390k0LVnt0hg](https://mp.weixin.qq.com/s/nSdpO7SQql390k0LVnt0hg)

在高光谱遥感领域，端元提取一直是基础且关键的任务。几十年来，国内外涌现了许多端元提取算法，顶点成分分析（Vertex Component Analysis，VCA）便是其中最为被广泛使用和久经验证的经典算法之一。2012年，在上海举办的WHISPERS会议上，VCA的作者Dias也亲临现场。茶歇期间，众多与会者纷纷围拢在Dias身旁，宛如群星拱月，恭敬地与他交谈问候。Dias微微一笑，举手投足间尽显宗师风范。在远处的角落，我不禁也投去了艳羡的目光。

要了解VCA，我们必须从高光谱领域的第一个端元提取算法——纯像元指数（Pure Pixel Index，PPI）谈起。PPI最早由高光谱遥感先驱之一Boardman提出，算法思想简洁明了。尽管如今PPI在端元提取中已不常使用，但毫无疑问，它开创了从单形体结构进行端元提取的先河。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXibH02n2knVexPuAvsb11tmqiatph027JPPLfuZmibWnKuicxk29KDwPI1g/640?wx_fmt=png&from=appmsg)

图1\. PPI示意图。当把所有的散点投影到橘色虚线时，A和B分别位于两个端点，其它散点都分布于二者之间；当把所有的散点都投影到紫色虚线时，A和C分别位于两个端点，其它散点都分布于二者之间；因此，仅仅通过以上两次投影的话，可以得出A的PPI为2，B和C的PPI均为1

基于线性混合模型，高（多）光谱图像中的所有像元在光谱空间中都分布在以端元为顶点的单形体内。不难看出，当将光谱空间中的数据散点投影到一个单位向量上时，端元就会投影到该方向的两端，而混合像元则会投影到该方向的内部。基于这一观察，我们可以将图像中的像元投影到多个随机的单位向量上，并记录每个像元被投影到端点的次数，这个次数即为该像元的纯像元指数(PPI)。最终，所有像元会根据纯像元指数进行排序，排名靠前的像元则被认为是图像中的端元。

PPI思想简单、操作便捷，但也存在明显的缺点。由于其投影方向的选取具有随机性，导致端元提取结果存在一定的不稳定性。尽管可以通过增加投影次数来缓解这一问题，但这也不可避免地带来了更高的计算开销。尤其是在投影次数有限的情况下，某些端元可能始终未被投影到端点位置，从而无法被成功识别。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXP9ib6UPra9G66FOy2NI6U4tM0AyzGyCAia4JCwJ3RQAIe7icqyeicrubYg/640?wx_fmt=png&from=appmsg)

图2. 正交子空间投影示意图。在得到第一个端元A之后，把数据投影到该端元的正交补空间，从而消除端元A对后续端元提取的影响

为了克服PPI需要多次随机投影以及某些端元可能无法被识别的问题，研究人员在PPI中融入了正交子空间投影（Orthogonal Subspace Projection，OSP）的策略。对于给定的高光谱数据![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXjkSquaZXRIv2yAh9rhafWQHu5Ria9kR7eyEsGlAe9pDTkVtIEbsCzGg/640?wx_fmt=png&from=appmsg)，假设已经得到了图像中的k个端元，该策略通过如下步骤得到图像的第（k+1）个端元：

（1） 正交投影

首先将数据投影到已知端元矩阵的正交补空间，从而消除已知端元对后续端元提取进程的影响

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXVB3ge5WuoJUtYV5tlU6doRqVcnW0lyZpg6l2okmq7NYFmY4tJwibLag/640?wx_fmt=png&from=appmsg)

其中，![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXKMicfmCQRic0fBjl88mXWzCWiaOqDOb0LkvQndOqDm7Qia6oibxn8upk9uQ/640?wx_fmt=jpeg)为E的列空间的正交补投影算子。

（2） 随机投影

随机选取一个光谱空间中的单位向量u，并将正交补投影后的数据Y投影至该方向，得到一个包含N个元素的一维行向量Y

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXpzpokHOZcFGm3jBcuAaibzZKWTA8EA4U88rztjiaBeUHXxpLNYYM4pPQ/640?wx_fmt=png&from=appmsg)

（3） 确定端元

根据Y中元素的最大（小）值位置，确定图像的第k个端元。

可以看出，通过引入正交子空间投影技术，我们能够逐一提取图像中的所有端元，从而有效克服了PPI方法中需要大量随机投影以及结果不稳定的问题。

  

实际上，VCA可以被视为PPI与OSP的有机结合，其主要操作与公式（2）并无二致。但VCA的核心贡献在于，其作者发现了（2）中乘积次序的玄机。在揭晓答案之前，我们首先给出矩阵乘法的计算复杂度定理

**定理1（矩阵乘法的计算复杂度）**对于两个实矩阵![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMX5TsyfZJl9lrDKPABT84icicWn5lJGG95kaUFzYGv0MyhYxvBBgrFMxYA/640?wx_fmt=png&from=appmsg)和![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXrfDWm1t2TaOYibmU2fWiczwkZ9xc9RYTkYq8xx3MmlZvA2AO0XibFxhLw/640?wx_fmt=png&from=appmsg)，其乘积![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXxXBfdRUQnA8p8tQwjYRM07gibUW9BZzCJJJcUQoiaQ2MNN1cyQe5ibUlA/640?wx_fmt=png&from=appmsg)的计算复杂度为：O(mnp)  

假设待处理的遥感图像数据包括L个波段，那么前面融合OSP的PPI算法中，计算复杂度主要由前两个步骤构成，其中公式（1）的计算复杂度为  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMX5oWlXZ7IbDomGgkZE8deNNic8WjibIIgmcPE9aHjdtZPictk07yooYWwg/640?wx_fmt=png&from=appmsg)，而公式（2）的计算复杂度为![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMX8L98Rx4UmDn2WkWurxPK7zKm5Ft9qnaGMU2iaM3x6MSFl4GH16ibIEQA/640?wx_fmt=png&from=appmsg)。因此，总的计算复杂度为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXhnFXekvqom9VKbicnJpzd2K9z6s4e4QEyIsL4ZsgAHmUdaWYru0xaxA/640?wx_fmt=png&from=appmsg)

然而，VCA的作者精妙地发现，公式（2）也可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXrW4ic6icYM3DnP1TA5EhjMtmCqBGzIt72g4WoJSORVDHK56hG2w2NdWw/640?wx_fmt=png&from=appmsg)

即，可以先计算![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMX6HMYQWic7sorLFjuWE446yBpu5o2VwBrbDFW14BYKV3utXndc9PBUmQ/640?wx_fmt=png&from=appmsg)，其计算复杂度为![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXeHWj4WQaYuvvoK7xgydp4k4kkr7iadn2rzjGD6zId2FKGf56n98JDRQ/640?wx_fmt=png&from=appmsg)。然后再乘以矩阵X，计算复杂度为![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXc8AgZJicwnH4nKTbCenNzGica4rrzelGMcDK71C6JnePgBOWncmzszuQ/640?wx_fmt=png&from=appmsg)。这样一来，算法的整体复杂度就降为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC8jMC4YUwJTbehAHSxtPMXzh6xEG9FcPVLlHWCttl77RMB4YfDOYjLGB4YvhibY238rsWcGPgiaEGA/640?wx_fmt=png&from=appmsg)

比较（3）和（5）可知，在忽略低阶项的前提下，仅通过调整矩阵的乘积次序，算法的计算复杂度就降低了整整一个数量级！

总结而言，VCA可以看作PPI和OSP这两个已有技术的组合，在算法层面上并无本质创新。然而，其作者敏锐地洞察到矩阵乘积次序的玄机，通过巧妙的次序调整，大幅降低了算法的计算复杂度，从而确立了VCA在端元提取领域经久不衰的地位。正可谓——乘积次序，造就了领域经典！