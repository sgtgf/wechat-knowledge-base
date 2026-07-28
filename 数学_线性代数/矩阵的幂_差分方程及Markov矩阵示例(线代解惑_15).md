# 矩阵的幂、差分方程及Markov矩阵示例(线代解惑\_15)


> 原文地址: [https://mp.weixin.qq.com/s/5RjsSgqQmWYYU5WCPoGvlA](https://mp.weixin.qq.com/s/5RjsSgqQmWYYU5WCPoGvlA)

一、A的幂以及差分方程

一般来说，求A的多次幂非常繁琐，但如果能找到n阶矩阵n个线性无关的特征向量，则可以将A进行相似对角化，这时求取A的多次幂就非常简单了。其本质是标准正交基下的A的多次幂求解比较困难，可以转成在其特征向量坐标系下计算，会简便很多。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG426nn7YnbjkUatM2eW5eA1NLPOgzvxwtrlKv2jSoctBGdPcKs0ibTTKg9ibptbExaABwL0FaJzEicicAQ/640?wx_fmt=png&from=appmsg)

对于差分方程，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42Df8ABxLackNWbsSlxCIo7ky52ibDRHf9j02yl2O2BbwGLBO8WEoUkYjzzuiaU69uaL6LPl7JMpKEw/640?wx_fmt=png&from=appmsg)

二、Markov矩阵

Markov矩阵A一般会涉及概率的问题，所以它有2个性质：一是A的各元素值非负；二是列中元素值相加为1。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42Df8ABxLackNWbsSlxCIo7EmyYASBvdCvCXGXmXTXW2nUaniaYjic8lbVOOwLwnducC1vowxxibQDaw/640?wx_fmt=png&from=appmsg)

事实上，A的其他特征值都是小于1的正数。

下面举1个实例，假设

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG426nn7YnbjkUatM2eW5eA1NDLnHGU2SZy4DTF2obibIRzSCwDh3X9AiaQhg2LdC3LPpR1Vic1Xe7l8Hg/640?wx_fmt=png&from=appmsg)

  

代表自2024年后第k年上海、杭州、苏州3座城市的人口数量(单位为万)

考虑3个城市的综合影响力，会有如下比例的人口在3城之间相互迁徙，且其比例每年都保持不变：

对于上海：

因其高房价的压力，且杭州互联网、AI等产业的优势，每年会有6%的人选择去杭州定居；

因沪苏同城一体化的加剧，以及苏州产业升级的初见雏形，会有5%的人选择去苏州定居；

则剩下的89%的人会继续留在上海；

  

对于杭州：

因上海就业机会的优势，每年会有13%的人选择去上海定居；

因苏州相对较低的房价，会有3%的人选择去苏州定居；

则剩下的84%的人会继续留在上海；

  

对于苏州：

因上海就业机会的优势，每年会有15%的人选择去上海定居；

因杭州互联网、AI、养老等的优势，会有5%的人选择去杭州定居；

则剩下的80%的人会继续留在苏州；

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42Df8ABxLackNWbsSlxCIo7Yvibz1ykw2Qu36G5h3W3wKLDugfnmTKfXBEiatT6zmeBiaOHqNoocc3SQ/640?wx_fmt=png&from=appmsg)

很容易知道，A中各元素值非负，且各列中的元素相加为1, 

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42Df8ABxLackNWbsSlxCIo7xHLicvxiaEYRSAibvicjw9I39sfyPGBermIrJ41ZiaaWUDzx74HnzCNV8eA/640?wx_fmt=png&from=appmsg)

故可基于3城2024年的人口数量，可准确预测2124年3城市的人口数量。当然此模型是一个非常简化的模型，实际情况会复杂的多，但可作为一个实例来了解Markov矩阵