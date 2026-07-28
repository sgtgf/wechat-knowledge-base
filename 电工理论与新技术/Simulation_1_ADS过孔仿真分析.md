# Simulation-1：ADS过孔仿真分析


> 原文地址: [https://mp.weixin.qq.com/s/AC-odKZsQydJMkvflDOi2Q](https://mp.weixin.qq.com/s/AC-odKZsQydJMkvflDOi2Q)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRiafYS5riaeexGicDY1NuqlDcBsQCBPmCgF6gSjH0Izf3cXpLb94gJ7C5uy5gbNN19COPxfNvjrNZsA/640?wx_fmt=png&from=appmsg)

★★★__Sim-1---ADS过孔仿真分析____**★★★**__

引言： 对PCB过孔进行参数仿真，可以使用的工具有很多，例如Sigrity、Anasys、CTS等，但是仿真的逻辑和本质都是一样的，同样的过孔，不同的工具仿真出来的参数差异很小，本节简述ADS过孔仿真。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEolZq544OE9Hkrdk90fVuxj22GJDD3lh3sePiaOsaZzfAiaic5FAZ3CY3Q/640?wx_fmt=png&from=appmsg)

图1-1：ADS过孔仿真流程

€1.建立Cadence原理图

利用Cadence工具建立原理图和PCB的主要原因是ADS软件中Layout操作并不便捷，因此先在Cadence中建立原理图，然后把网表导入Allgro中进行Layout。如图1-2，因为这里只需要几条走线和过孔，因此通过元器件连接产生网络。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPECqK30zBH8YPFR5okUPl1EbOtEdAnVUdJ5N8ociaKMQq1miaufEOZpa3A/640?wx_fmt=png&from=appmsg)

图1-2：Cadence建立基本网络

€2.建立Allgro Layout

将原理图网表导入Allgro中，设置PCB叠层结构和过孔参数，即可布局走线。这里建立了3条网络的微带线，从上往下依次是：

第一条：TOP层和BOT层之间的穿层微带线，通过过孔（0.5mm通孔）连接，网络总长度22mm；

第二条：分别是TOP层微带线和BOT层微带线，没有过孔连接，长度分别是10.5mm；

第三条：BOT层的微带线，长度为22mm；

TOP层微带线参考Layer3层的地，BOT层参考Layer7层的地，微带线宽度0.2235mm。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEqmk40eF1k6VBziab4Wptzic21wSL6fJx1Z33QLWPuZkQcxboszQB51RQ/640?wx_fmt=png&from=appmsg)

图1-3：Cadence绘制Layout

€3.Allgro导入ADS Layout

Allgro与ADS通过专用的ADFI接口可以很方便进行导入，在Allgro中设置仿真网络、叠层、仿真区域、元件及仿真端口后导出。在ADS Layout中，通过ADFI接口导入对应的.adfi文件，导入完成后开始设置EM仿真参数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPERFt3jzMM3E9b00Vo9OpaibfJH6LzkeXtteOqpfdHbdR13BUOOb1DLtg/640?wx_fmt=png&from=appmsg)  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPE5sn07lNreiaUVMe5ceKicx2bAGfJicicapu3UF6LmU7EXkoPTGqBAFAIQg/640?wx_fmt=png&from=appmsg)

图1-4：Cadence Layout导入到ADS

€4.设置ADS EM仿真参数

ADS中的EM仿真设置主要如图1-5，包括仿真器、PCB叠层结构（参考1816阻抗控制）、仿真频率（0.5-6GHz）、端口、Mesh等。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEbmG93sPkyia0UJ62TXGDbHgEKXxfRPtXpv8ibc40IdnMz2tELq79icowQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEictXHib14fNyfR7tMQ2nVJ2h4euiaDnzd42JtkiaIUJYS7019B9zUEBj7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPE6Ldiby77UTza1MW4eNXeTjQuW6ZjsBtbxQUYjJY9F34Yvhg2eiczDdZA/640?wx_fmt=png&from=appmsg)  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEIibqLsLWAPQRGIKkhlicTSszW5gBd3hxuqlaFnEumcoZCvWg1xz0daJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEqmFFXibKS8m6LABlAdmjLEjctLerKWO5ADR7YnQZFNQHRyicb7RfUXSQ/640?wx_fmt=png&from=appmsg)

图1-5：ADS EM参数设置

€5.ADS EM仿真  

ADS EM仿真完成后会显示仿真的S参数，如果不需要对版图进一步行仿真，这里可以直接观察仿真结果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEdarxuiaXn2BlYZUp0Fhhpua1ZaGX6BWKdSAibib2vex2tG6asqBs9CV2A/640?wx_fmt=png&from=appmsg)

图1-6：ADS EM仿真完成之后的S参数

€6.EM Model导入ADS原理图分析

将EM Model导入原理图中主要是方便端口的仿真结果观察，如果需要版图仿真也要导入原理图，因为没有添加新的元件，因此这里原理图仿真的结果和EM放在的结果是相同的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEPGk1894Zw3y8HDdHicA0jEL3rJqplPcHFwNiayUfmuOicWdwNPsFt6DFg/640?wx_fmt=png&from=appmsg)

图1-7：ADS EM Model导入

€7.仿真结果

下图是仿真的插损结果，其中：

1#：S12是无过孔BOT层长微带线损耗，S34是有过孔TOP-BOT穿层长微带线损耗；

2#：S56是TOP层短微带线损耗，S78是BOT层短微带线损耗；

从0.5-6GHz频率范围仿真的插损看，微带线在2.715/3.311/4.832GHz都出现震荡，导致插损变大，具体原因需要从仿真参数设置、微带线长度、板材等因素进一步分析。

从仿真数据S12和S34可以看到，在5GHz以内，微带线有无过孔穿层插损差异不大，但在5-6GHz范围内有过孔的微带线插损增大。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEDz5Hiar8FFV4szoHo2RvicSP3BCCljlm3gicKEQmibE1SfO7mNhAJtKwYg/640?wx_fmt=png&from=appmsg)

图1-8：仿真的插损结果

下图是各端口仿真的反射系数结果，其中：

1#：S11/S22是BOT层不穿孔长微带线两端的反射系数，在2.6-3.4GHz频率范围，阻抗偏离50Ω较大；

2#：S33/S44是TOP-BOT穿层长微带线两端的反射系数，在2.6-3.4GHz和5.7-6GHz频率范围，阻抗偏离50Ω较大，但整体比无过孔更靠近50Ω；

3#：S55/S66的阻抗靠近50Ω；S77/S88的阻抗靠近50Ω右上方。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEgFufEqka6yY1EJbT4ITd6ILkOJk0c4jEialmnLeVOfIRpibuPe5x1LJw/640?wx_fmt=png&from=appmsg)

图1-9：各端口仿真的反射系数

€8.调整走线长度（二次验证）

上面的仿真结果发现在不同频率点出现震荡现象，怀疑是微带线长度以及端口参考地放在过孔上导致，重新调整微带线长度，TOP层的短微带线长度为1.8mm，BOT层的短微带线长度为1.8mm，长微带线为3.6mm，同时把微带线端口的参考地放在参考平面。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEWEPko8UBSZ15XqQ0L1tkMgAT7TvwJhxYosccCOWvpXgrayxmQLrOpw/640?wx_fmt=png&from=appmsg)

图1-10：调整后的Layout和端口

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEQewzyChj7wibJ2xlgMyn7Zucjiao2N8JwWibKYP04lnfBHquJ9FiazoHQw/640?wx_fmt=png&from=appmsg)

图1-11：调整后Layout 3D图

S34是有过孔的穿层微带线，插损比BOT层无过孔等长微带线插损S12偏大一点，但是整体损耗都较小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEAicHfn0RnKFDqrtmrqVZyHKEibaicvgvOutdM5cWibicTicvCFnJcfRjWzSQ/640?wx_fmt=png&from=appmsg)

图1-12：调整后Layout 3D图

        下面是各端口的发射系数对比：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPE6CrJTAQwo5pMOdTwqpdhkNpC4bYfL9h3QFK6CG01eBXUcudmbExG2Q/640?wx_fmt=png&from=appmsg)

图1-13：各端口的发射系数对比