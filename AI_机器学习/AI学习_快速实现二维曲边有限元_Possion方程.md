# AI学习-快速实现二维曲边有限元-Possion方程


> 原文地址: [https://mp.weixin.qq.com/s/AXqVVEuYg98F7JPzgVK26w](https://mp.weixin.qq.com/s/AXqVVEuYg98F7JPzgVK26w)

简述

本文通过AI的帮助，快速实现了二维曲边有限元案例的实践与学习。

相比于直边有限元，曲边有限元能够更好地贴合复杂几何形状的边界，尤其是在处理曲线或曲面边界时，能够显著提高几何描述的精度，减少几何离散化误差。

下面通过AI的帮助，总结曲边有限元的实现流程。

1.边值问题

边值问题依然采用最常见的二维泊松方程。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVg2ibcWsJIXgTgYXZnOZqjuoXE8GmrxfTJA1bIRLZT6XNqf8V63KYKPkQ/640?wx_fmt=png)

边界条件可以根据需求，添加第一类边界条件进行约束。其有限元方法与直边有限元推导结果一致：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgMgHp1fkTY6v6GZ9SKAHDCHLsYgmZFF7DPcvibLVE20R7loIU6dQQwicA/640?wx_fmt=png)

当处理为第一类边界条件时，第三项可以不考虑。将连续空间离散到每个三角形网格中，可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVg4S0XYBAqwb6JA9N4X5IUkW7Juc3js3dDxwIg0kjBTmjrHv1ibMVSVcw/640?wx_fmt=png&from=appmsg)

2.gmesh生成曲边三角形网格

对于曲边有限元，为了能表示其曲边性质，一般采取二阶三角形网格来描述，其本质是原本直边三角形中三个高阶点不再落在棱边上，而是根据原有几何模型，落在该棱边的实际几何模型上。    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVglPqnQKCzicxOclHXm7urkXyxicWm6GRFKdVkg0UXoruhaXl8icWV5pqTg/640?wx_fmt=png)

如图生成的曲边有限元，三角形的高阶点在几何模型是曲边的地方并不落在三角形的直边上，而是契合几何模型的位置。

因此，生成的网格每个单元需要有六个节点来描述，即：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVguQNmk1CHSzoddM93GINudW97Gxib31NpdabcJyv1TLFSAljX6HeIsuw/640?wx_fmt=png)

3.曲边单元基函数

相对于直边三角形，可以直接通过面积坐标在原坐标系中直接求解线性基函数而言，曲边三角形直接在原始坐标系中处理相对麻烦。

因此，首先将曲边三角形映射到参考直角三角形中，通过雅可比坐标转化矩阵连接实际曲边三角形与参考直角三角形。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgvBuvibOyWr93pe0TsHb0YuM03WmrX0VHOhvNVQC5Cpw9yvicLLd4QstA/640?wx_fmt=png)    此时，对于右边的参考标准三角形，其二阶形函数很容易获得，与直边三角形一致：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgIJXOibWbpib7LMYqE2sLKQUV5oxziazIsFcajoDUibWVkLmOiar91hibVYew/640?wx_fmt=png)

其基函数，满足任意点落在节点位置时，对应形函数为1，其他形函数为零。对应的梯度也很容易获得:

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVg0Em6lAEtBYMiacduaJrQibfrt1BZqtXFEoRvbbia9cbjuGNLgT8awvkgg/640?wx_fmt=png)

接下来是雅可比矩阵的推导，对于任意实际坐标系中的（x,y）,其均可通过形函数Ni和节点坐标（xi,yi）表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgWKPeHzmzoESzosxwWmoiaBfF3ozUicecb2ibiaj2UzrbZAeaoGkoszqNicg/640?wx_fmt=png)

其中形函数是关于参考坐标系的函数，因此（x,y）是参考坐标系  
的函数，对x,y坐标系求导，

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgfuSIG3CsI2qm8vOXm2PmuCA4WV2YIeyz7qJPr8qdATMBmvHZ1icBqoA/640?wx_fmt=png)    

将x表示为插值形函数形式，带入：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVg7bwuCbZX4X0EodmEaE30G0wqnCoAK6l7EeoAVictEGNucnFL4AKHMcg/640?wx_fmt=png)

因此，雅可比矩阵可以写成：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgepptTqxQfaAo4E5OEU0mzdgMYkgq8cct1pwVBuKiaZXvPkbmnY4oO8Q/640?wx_fmt=png)

4.单元系数矩阵 

已知的系数矩阵实在xy坐标系中，因此需要对参考形函数和实际形函数进行转化：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgbBeU7K9HtMQrXYRy8R80wCJjv9d9Vl2ZmprHavuHwMc9z3z8AKUlVg/640?wx_fmt=png&from=appmsg)

对于微分子的映射，将雅可比矩阵的行列式看成三角形面积，如此就很容易得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgVVYG4sZtF5hxQ2aiaODAdibkzaRFONK1LCJGy2WeHpb6cQGRMiaHXtNsQ/640?wx_fmt=png&from=appmsg)

将上述推导带入到单元系数矩阵与右端项中，最终得到：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgSPiakLTcGA5ibJiasaRZ78DcQUXSGpYlNAFcpeEFvnRnAl3J9zuaADbgg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVghBke4OvA3BReDNT6HyJXsJuwUadGyJzE2N13NJU34y5MJibhAumDiaWg/640?wx_fmt=png)

观察可以发现，曲边三角形的信息完全存在了雅可比矩阵中，参考形函数仅仅需要使用直边坐标系的方式就可以获得获得形函数。并且参考直边三角形是一个标准三角形，可以通过高斯积分求解获得，从而也避免了对单元矩阵系数的直接推导。    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVg2ic3HGZmdTrNck8VHO6hJSYsfJwy6msgtEGCAjhFko8V5wxznkd0hzw/640?wx_fmt=png&from=appmsg)

对于二阶三角形高斯积分的积分权重与积分点为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgOiblNn5f3LywKOTwD9P5KnZWk6M0ufdxEbdIib5tarIiawUYuqZVzCqZw/640?wx_fmt=png)

至于组装与边界条件加载均和直边三角形有限元一致，将单元系数矩阵根据节点到全局节点的映射关系一一组装起来。

对于边界条件加载采用赋值1或者乘以大数的方法均可以实现。

5.结果

测试模型内半径=1，外半径=2，剖分得到环状网格：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgcCiaFpdFFTac4OZWn1Jibz3Hic1vnybn6nDicfAgYtA21R2AORjBRK38zg/640?wx_fmt=png)

Eg1.当具体边值问题为泊松方程：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgeEvuOcRqSwmOiceOInwuT9VYONjZf3ibX3cMG1QjeUdSNtpCkm3bKafw/640?wx_fmt=png)

Eg2.当具体边值问题为拉普拉斯方程

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgLQTpK1XtBfiazn1vyp4r3d7mhjFJvtOKZeLDj7ibibABDJs36sibbuCjTA/640?wx_fmt=png)

对于拉普拉斯方程的通解，在r=1,u=1，r=2,u=0的边界条件下，其具有理论公式：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVgZv6be3uajekHl2jS2tlSVbw3iaKD6jRJRZ71iaKWyTbm8ic1tNm0ouh1w/640?wx_fmt=png)

对比数值解，二者是完全一致的。  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp812kSdQnTNR6RQ2ePyZVg9N3qCJEbohyQGJrV3aw6z6z0Th4epKeHJaffRn8BmpXvgko1BfZZ9A/640?wx_fmt=png)

从二者的图形结果来看，求解结果是正确的。

总结

1.整个实现流程代码，全部基于AI帮助写，更多的是一步步告诉它我要做什么，例如首先让它帮我生成gmsh网格，然后让他读网格信息，最后写曲边有限元的泊松方程。过程中不明白的地方直接截图为AI，理论公式什么的全部让AI推导，直到推导到能看懂为止。

2.代码中，除了修改了几个小bug之外，基本上没有动手写。但是自己要明白每个子函数地方大致是怎么回事，结果错误的时候除了问AI，如果自己能分析出来最好。

3.做该例子的缘由是想要熟悉曲边有限元的实现过程，尤其是想要深入了解下雅可比矩阵在两个坐标系中的转化过程，通过AI也确实快速深入学习了的这部分内容。

* * *

博主长期深入实践电磁学领域的有限元技术，感兴趣的朋友可以添加博主公众号，欢迎共同探讨与有限元相关的技术知识。