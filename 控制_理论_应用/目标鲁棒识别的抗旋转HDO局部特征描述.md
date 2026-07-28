# 目标鲁棒识别的抗旋转HDO局部特征描述

原创 自动化学报 2017-06-14 18:22 北京

> 原文地址: [https://mp.weixin.qq.com/s/0Q9tLBZ\_S-1xcHIGYoMIWg](https://mp.weixin.qq.com/s/0Q9tLBZ_S-1xcHIGYoMIWg)

  

**欢迎关注自动化学报～**

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dzHl1gfaodHzFlibOSDz8TBMibdEzLcyArx43YfotVyfeYqPmd2MetOrg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9da6pmjfFR80HhVfvjV0RUxaRNY8nb6QXwr4DTwOACHHX0YS3qmbufjg/0?wx_fmt=png)

局部特征描述在图像目标检测和识别中应用广泛，在过去二十年里，研究人员提出了大量的局部特征描述算子。为了处理图像中存在的尺度、光照、对比度、旋转等变化，通常要求特征描述需具备光照、尺度和旋转不变性等。具有光照、尺度和旋转不变性的著名的有SIFT和SURF算子，但是其构造过程相对比较复杂，计算量大。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d9b0nNr89RT29UBqm1PMDT8njqlaUUbbjHTwXqaaR4TSneeotOFPMhQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dzU9BTBkTYskK4P7EPU5lGyXuLh6ExeO79GC1Zn9ng3bJx4ISibn5xJw/0?wx_fmt=png)

**影响因素**

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9deqiaKFibtUkRajeElXOUnt7UnKT75ppiagicwVx4Phb0icyib7tzO7O6ZcWA/0?wx_fmt=png)

从已有文献分析，我们认为影响特征描述的旋转不变性的因素主要来自特征提取和池化操作两个方面，

一是像素微观邻域提取局部特征以及在局部子空间内进行特征池化操作时，要具备旋转不变性；

二是在图像整体空间池化操作时也应具有旋转不变性。

只有同时满足这两个方面的旋转不变性，才能建立具有旋转不变性的图像局部特征描述方法。当然，特征描述具有旋转不变性，并不能保证该特征一定具有良好的鲁棒识别性能，因此需要考虑在保证鉴别能力的前提下，使特征描述方法能够对抗图像中可能出现的旋转变换。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dzU9BTBkTYskK4P7EPU5lGyXuLh6ExeO79GC1Zn9ng3bJx4ISibn5xJw/0?wx_fmt=png)

**方法原理**

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9deqiaKFibtUkRajeElXOUnt7UnKT75ppiagicwVx4Phb0icyib7tzO7O6ZcWA/0?wx_fmt=png)

针对传统的HDO局部特征不具备旋转不变性的缺点，提出一种改进的目标鲁棒识别的抗旋转HDO局部特征描述方法。

通过引入RGT变换技术，并在构造像素点圆形邻域中构造结构张量，保证在图片旋转的情况下每个像素点的主方向和一致性保持不变，然后求取每个Block子区域的主方向直方图，再采用环状扇形分区的空间池化操作，使得到的局部特征有良好的鉴别能力和抗旋转变换能力。

算法设计步骤：

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dPwlz0khiaXTJsq6WkwtPm2PFwI7JlGHVAquybIe6ExocbAHTwMwcCYw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dzU9BTBkTYskK4P7EPU5lGyXuLh6ExeO79GC1Zn9ng3bJx4ISibn5xJw/0?wx_fmt=png)

**测试结果**

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9deqiaKFibtUkRajeElXOUnt7UnKT75ppiagicwVx4Phb0icyib7tzO7O6ZcWA/0?wx_fmt=png)

在公开的MIT人脸数据集中的测试结果显示，如果图片不旋转，本文方法准确率与传统的HDO算法基本持平，达到92.10%，但当样本图片旋转后，本文算法准确率比传统HDO算法高10.36%。此外，在行人数据集、合成的旋转手掌和旋转人脸识别实验中，本文方法的检测结果也明显优于传统的HDO算法。实验结果表明，本文提出的HDO特征描述具有较强的抗旋转变换性能。另外本文方法在53Objects，ZuBuD和Kentuky三个数据集上的识别性能也优于大部分现有抗旋转算子。

本文所设计的算法，可以用于旋转人脸、手掌等目标物的检测与识别。如下面的图片所示：

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d3NkfS1ypmhCoeuq79shandFmf284wA69gE7xkP5B5hPSFGT3VtoXnA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dWss5yia40icZaBjicnc4sfs8KLIHSSicquEQqUtRd21bvAW1icqlD6k71aw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dhzA01IdZfGmVQnll5Ub2yLvDHsmhwSe8QeQtTibyMmY7UaicPmNhAVibA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dgNw4s3c32AddHZbSgGzO6A3nXJFfLtiaC4kZBOn2AlkPMyq97yvw6qw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dgPIDC5vHAYDX77HLYrC19UUbRR0Mic795wqyqxv9pWGnDRCdIuFkWrA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dGZdPrhHKno04aibhhv0oslPWS28p9HYxnn5tpldH2ANNSEIslWgXuIA/0?wx_fmt=png)

引用格式

胡扬, 张东波, 段琪. 目标鲁棒识别的抗旋转HDO局部特征描述. 自动化学报, 2017, 43(4): 665-673

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dRdywnnTXkKCDVAPCzWpYkhcwxt6RU0hBibnUIGlmjnh583jdmXtlYlw/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d8SpChxmBxebCZQLyyAMZDpibFUzfvqc5fMV1urKEmib0KWN6HfE1ADJA/0?wx_fmt=png)

胡扬 湘潭大学信息工程学院2013级硕士研究生.主要研究方向为图像处理与模式识别.

E-mail: 15574466364@163.com.

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9diaOFv4HD72QGA9QoZ9wcoRrQHujibkOBSEgfOXksjRgoj296ibeqYEcqg/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d8SpChxmBxebCZQLyyAMZDpibFUzfvqc5fMV1urKEmib0KWN6HfE1ADJA/0?wx_fmt=png)

张东波 湘潭大学信息工程学院教授.2007年获湖南大学控制科学与工程博士学位，主要研究方向为数字图像处理，模式识别和机器学习.

E-mail:zhadonbo@163.com.

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dtFZCeHQibKdeohzVxSFNROicIv9xHUzQjhiaYIv4IxALkHNOibuVaHz4Tw/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d8SpChxmBxebCZQLyyAMZDpibFUzfvqc5fMV1urKEmib0KWN6HfE1ADJA/0?wx_fmt=png)

段琪 湘潭大学信息工程学院2013级硕士研究生.主要研究方向为图像处理与模式识别.

E-mail: 461301712@qq.com.

热点文章推荐

[刘德荣教授最新力作：基于迭代神经动态规划的数据驱动非线性近似最优调节](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063208&idx=1&sn=618cd7625c1adeacfca25703ba35719e&chksm=8131c9e5b64640f3b24a3429862e7fbca69e09f0f7196f8f41784fc253dede1725aa43d9569a&scene=21#wechat_redirect)  

[人脸微表情识别：一颦一笑皆线索](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063205&idx=1&sn=aa6d7e2ace55f17222c99ae66cf342fb&chksm=8131c9e8b64640fe4e3115e56a9e04dc51a6067decafbc6246b676af4cffcee6646890e2a6a0&scene=21#wechat_redirect)  

[生成式对抗网络GAN的研究进展与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063183&idx=1&sn=64a05ba464c29d32ec5e09c960aa0b2e&chksm=8131c9c2b64640d4362611c24d5dc8cf0d614ad4cce783ba6c7ee0abfb1053e12abde1a8fa7a&scene=21#wechat_redirect)  

[平行机器人与平行无人系统——智能无人载具的研究新进展](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063159&idx=1&sn=85511333c6ef151772c12f1ce1865ea8&chksm=8131c93ab646402c2a88349b771786364392abd4b017986beb891cef5389fab360ca149551a9&scene=21#wechat_redirect)  

[自动化学报|高被引学者张化光带您走近能源互联网](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063148&idx=1&sn=64a14f3d1c92fd29267cc1bf3bf1cd99&chksm=8131c921b646403797f9a68c5a8a96bd1a5aa14eaa0b138bc66f1f56836dcbd2614ef0e11eb0&scene=21#wechat_redirect)  

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dChxib0O3XDQX1scLLlDH8hbJle5nlgSzSBryhZibx8rszrJLDxj30ITQ/0?wx_fmt=gif)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d5IVkwCwvzgXVGbEkFDcicPdpP7CibvZEsxNdiaiaSAHrtoK9O9UcoJroRw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dO9Zw8XLpKKF542vJQhnZtIYlyNY3JmfxAWkH3s0SfBiaO3zyJY41L5Q/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d5IVkwCwvzgXVGbEkFDcicPdpP7CibvZEsxNdiaiaSAHrtoK9O9UcoJroRw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d2HQlZlX9VgDgP1qK826zUIf42RIsbzkXnFqibsomqzC5dyq5xeibriceg/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d5IVkwCwvzgXVGbEkFDcicPdpP7CibvZEsxNdiaiaSAHrtoK9O9UcoJroRw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9d8fYPU8fDMmWydhf4ojdzgG362E2aibpfKFVtxsO11F3hj9p7pc2VZIQ/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47BwT9mg1o2Axue7LXMLe9dS7v7brWHCk4iavhqyaNMCNRyicrPOIlibibic0h6WYCp4TGnhnOua6ibjnqA/0?wx_fmt=jpeg)

  
点击下方“阅读原文”查看更多