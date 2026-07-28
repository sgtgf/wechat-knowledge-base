# 奇异值分解SVD系列01---矩阵的本质：线性变换


> 原文地址: [https://mp.weixin.qq.com/s/2G3g8F21TKuD6PTbEcVbxg](https://mp.weixin.qq.com/s/2G3g8F21TKuD6PTbEcVbxg)

**一、变换与空间**  

所谓的“变换”就是函数映射的代名词，给个输入就有一输出，在《线性代数》领域，输入是指向量。即输入一个向量，经过变换后，输出一个向量。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2MGcTndQBuwpyZdteYNWKlngVcJ03dIUnRqVXIbfCKzCcTSjDvpSbWg/640?wx_fmt=png&from=appmsg)

变换前，坐标系内所有向量的集合为变换前空间；变换后，向量的集合为变换后空间

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2f82qa8vhSzW8ffLz5ViaiaVjR9qAlkfvKZWlIbT2iblzd6MIJfGere0hA/640?wx_fmt=png&from=appmsg)

**二、线性变换**

函数的“线性”是指 f(ax+by) = af(x) + bf(y)，当处理的变量为向量时，线性是指，在变换前、后空间对应的坐标系中，平行于坐标轴的直线组成的网格线仍然**平行且等距**分布。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2Mic0oc089PA6QhxBqxDrHpQVg8Pmp0JYEpnmZYuuWnIVJappvgrDckw/640?wx_fmt=png&from=appmsg)

另外一个视角是，**变换前后空间坐标系的原点不变，且变换前为直线，变换后仍然是直线**。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2icvT16tQ21oaZjbtZHKPIicCx3j6wQyVUNFZmJFFqLqicC9sRyzQKnibmQ/640?wx_fmt=png&from=appmsg)

**三**、矩阵****

对于线性函数f(x)，表明变换(映射)关系的是f; 当变量x为向量时，矩阵A就对应于f， 为什么这样说呢？

对于平面向量而言，任意一个向量![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2OTwsWl0mf62PlN5r2O5Pntyd7ibwjfnOXmn41cDiaEXYeyuN7K7icEwKA/640?wx_fmt=png&from=appmsg)都是其X、Y坐标轴基向量![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2PwcZia7zhtFfzUoro058c6dQoPvZC4xnfGusicFB1f2HiaLXc6S7EJguQ/640?wx_fmt=png&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2OIHD2gWjrNobFibRiblEIBicZZZ46pgF6tIiahgrsxicoBibib3F1jwsFPdhQ/640?wx_fmt=png&from=appmsg)的线性组合。即

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2SO0K2sQ79G8hld3dib67EKHrMF8cV3ojA2uUkVKhDDmaWGwBeVicrfPA/640?wx_fmt=png&from=appmsg)  

线性变换是指基的变换，**变换矩阵A的列向量，就是各基变换后的位置在该基坐标系下坐标表达的向量**，如

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2KYstlchOhkMP5cjC6kFrzMfIbNuyQ9SUknx8e9X2RTXA5A4pQr4RXQ/640?wx_fmt=png&from=appmsg)

而变换后的向量就是**变换后基向量的线性组合****，系数为待变换向量在原基坐标系下的坐标，**如图所示  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2icHbWbzJAkqP5YtlMPBf6PNiaKicAMaPzujtSlp1GYoxlXomT5maficVXw/640?wx_fmt=png&from=appmsg)

**四、常见平面变换**

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2LGIklHS4rtxwTZmeIGLGiaGE0qUVaSbCU61R7vjibBj1CJuzYWmfnOmw/640?wx_fmt=png&from=appmsg)**

  

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2cSIf3XlmvaePV5YUmPIz6wnt035nyJwNnDAj92j1Px2tZKISBdRczA/640?wx_fmt=png&from=appmsg)**

**3、投影变换  
**

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb262CqHicr7WI5dDnm4Vg6ZE3yjo6UdIce2xJWdAGQjnVxf3KRUESlVZw/640?wx_fmt=png&from=appmsg)**

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb29IXApWz9opKXlJKlwsicJibEas32m36YET3I6emghT64TtzYZVDTV4wQ/640?wx_fmt=png&from=appmsg)**

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2DqF0TDOQ3mKGgGXAiaZmiccgvaLdCdsYAxsk0TVsef8U7HIeJVGicOaMg/640?wx_fmt=png&from=appmsg)**

****3、镜像变换****

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2JBpp7Ytz656fqQxo0No0wE6w4m3O4N7sUBRccMJTDSHo1dEKC0wjuw/640?wx_fmt=png&from=appmsg)****

****4、旋转变换****

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2eetBNtHZiaAYicIPo4RIIU1RrbxAM0x1cWLwom5KoLUjL10m0NwlFHGA/640?wx_fmt=png&from=appmsg)**

****五、思考****

上述变换都是在同一坐标系下进行的。不管是待变换的向量描述，变换后基向量的坐标描述，还是变换后的向量描述都是在基于同一坐标系下的。但如同谈运动必先定参考系一样，同一位置是可以用不同的坐标系来描述的，那不同坐标系下描述的变换矩阵之间有什么关系呢？