# BMS-1：基本系统组成


> 原文地址: [https://mp.weixin.qq.com/s/2ejRZEjvyVMYOwJTjQxVTQ](https://mp.weixin.qq.com/s/2ejRZEjvyVMYOwJTjQxVTQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScRicFDBt1vuxbMzrk0Msuo3Kx5aicZdibBc2k2CTcN2zjEU6ygqXwDsJDM7JVWNmmL9alncCQIN0Vw/640?wx_fmt=png&from=appmsg)

____**____**____**____**★★★**____**____**____**__________________BMS-1---系统组成__________________**____**____**____**★★★**____**____**____**____

______撰稿：Timothy  校稿：Timothy______

引言：BMS（Battery Management System）：即电池管理系统，基于锂离子电芯的理化特性，电池需要借助精密的电子控制系统BMS来应对各种突发状况，BMS需要尽可能提高续航里程、降低成本和增强安全性。

____________€1.BMS导论____________

一般来说24V以上的储能产品才具有BMS的概念，而车载BMS主要负责对新能源汽车的整个电池组的工作状态进行监测、管理和均衡，保护电池免受损坏，通过智能充电和放电算法延长电池寿命，预测电池剩余寿命并使电池保持正常运行状态，这对电池组的使用安全、寿命、性能至关重要。新能源汽车的动力电池系统由于充电速度与续航的需求而不断向高容量、高总压、大体积的方面发展，因此在插电式混动、纯电动车型上主要还是采用分布式架构的BMS，通过模块化、分级式管理电池单元，随着HEV（混合动力）和EV（纯电动）的发展，车载BMS也在不断进化。

____________€2.BMS的组成____________

BMS需要实现3个不同的功能：电池SOC/SOH监测，电芯状态监测和均衡，电池功率路径管理，所以无论是分布式BMS还是集中式BMS，如**_图1-1_**所示。都包含三个子模块：多个电芯监控单元（Cell Supervis7ion unit---CSU，从控），一个电池管理控制单元（BCU主控），也叫电池监控控制器，一个电池开关单元（BDU），也叫电池接线盒，这三个模块用来实现上述三个功能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaibGoyunNfHOBo9ZKicXHtrIRHlVXltSpZJnEO0DGO4HXicWVUgaq8JGLw/640?wx_fmt=png&from=appmsg)

**_图1-1：典型的BMS架构_**

**_图1-2_**给出了一种环形菊花链拓扑结构的高压电池包BMS示例，其中BJB部分区别于**_图1-1_**，采用了智能接线盒设计。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaeZwZwR1yUGEaMs8d9YTzzsTdLAksBxURHptKazLVDmLEMMb5EicBiaUA/640?wx_fmt=png&from=appmsg)

**_图1-2：环形菊花链拓扑的高压电池包BMS_**

这些子系统具有不同的行业名称，如**_表1-1_**中所列：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScRicFDBt1vuxbMzrk0Msuo0GsG5fardA72RFLp0xZ4n4zKDgYiad5J9ntPTTy8icKjhN4KHzQicrfjw/640?wx_fmt=png&from=appmsg)

**_表1-1：BMS 子系统在业内的常见首字母缩写词_**

在分布式BMS系统中，CSC负责电池组单体的电压检测、温度检测、均衡管理以及相应的诊断，每个CSC模块包含一个模拟前端芯片(Analog Front End，AFE）芯片。而BMC（BMU）是BMS的大脑，包含一个MCU芯片负责计算电池健康状态（State of Heath，SOH）与荷电状态（State of Charge，SOC），利用CSC和BJB测量的电池精确数据做出判断与决定，以确保电池的安全性和提高性能，还可以协调BMS的电池均衡功能。传统的BJB主要作为一个机电箱，其中设有分流器、接触器和高温熔断器，是高压电池和动力传动系统之间的连接。

____________€3.BMS的结构____________

根据管理架构分类，BMS产品主要有三种类型：集中式BMS、分布式BMS和半集中式BMS。由于分布式管理架构可复制性高，可应用于多种不同的车型电池包。被动均衡管理由于成本低、复杂度和故障率低，被广泛运用，但主动均衡管理效率较高，均衡电流大，能量耗散少，随着热风险和电路复杂逐渐克服，BMS逐渐向主动均衡管理过渡。此外，集成化、通用化、智能化也是BMS未来技术发展趋势。根据管理架构分类，BMS产品主要有三种类型：集中式BMS、分布式BMS和半集中式BMS。

_集中式_

集中式就是将整个BMS设计在一个PCBA内，引出导线连接接到各个电芯上，如**_图1-3_**所示，如果是36串电池，就需要两枚支持18串的电池管理芯片，串数越多，所需芯片也越多，由于功能集成在一起，接线会更加复杂和冗长。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiare1JA91OVSsibrlxN8BSrpYRjuibzJXdxFjoKlBRzZgTOcbDn3J8vQOw/640?wx_fmt=png&from=appmsg)

**_图1-3：集中式BMS_**

集中式的优点非常明显，首先是结构紧凑，往往就是一个盒子，成本也有优势，维护比较简单，往往整体更换就可以。缺点就是扩展性差，一个产品定型了想要扩展就得重新设计，其次就是安全隐患，因为线束过多过长，整体损耗也会比较大，监控采集精度也会下降，带来一系列安全隐患问题。

_半集中式（_模块式_）_

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaNYJOoQlcMBkLQHJcZ5KljJ8YlsVP61m7xLXRUn7UcfYFkxz1micxMDg/640?wx_fmt=png&from=appmsg)

**_图1-4：半集中--->模块式BMS_**

模块式的BMS被分成很多相同的子模块，每个BMS板的导线连接整个电池内部不同的部位，监测某一块区域，虽然是功能相同的模块，但是其实也会有一个模块被分配作为主模块，用来管理调度整个电池包并且负责跟外界通讯，其他的从BMS就通过通讯总线来跟主BMS进行通讯，但是他们之间的功能是一样的，它的优势在于：

1#：因为它相当于将集中的BMS小型化，多个级联，所以拥有集中式的大多数优点，维护方便，成本较低。

2#：由于单个BMS模块的规模较小，所以子模块到单体电池的导线就会相对较短，可以离电池更近，这样就避免了过长的导线带来的隐患和误差。

3#：易于扩展，增加更多的子模块来实现扩展。

缺点在于需要增加额外的导线，相比于集中式，每个模块需要跟电池组连接，每个模块之间也需要导线连接。其次就是成本较高，主要的原因是每个模块的功能是一样的，但是并不是所有的功能都会用到，这就造成了浪费，尤其是从属模块，其实用到的功能并不多，这种结构不是特别合理，于是就有了后面的主从式。

_半集中式（主从式）_

如**_图1-5_**所示，主从式BMS把模块按照主从功能不同分开，将从模块用不到的功能去掉，减少成本。主BMS负责的功能相对较多，有计算，预测，决策，通信等，从单元基本上就是只负责测量。这样可以说是继承了大部分模块式结构的优点，同时还减少了扩展的成本。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaMbib2v7qPmIGYkxib6pq7XswWH2JzLjlqbcf3KaicUstg0GdLMLOqwjbQ/640?wx_fmt=png&from=appmsg)

**_图1-5：半集中--->主从式BMS_**

_分布式_

在集中式和半集中式拓扑结构中，各种电子器件都不会安装在单体电芯上，基本上都是通过引线过去测量。但在分布式系统中，如**_图1-6_**所示，CSU测量单元和其他的电子设备直接安装到和单体电芯一体的电路板中，这样的好处是，与前边几个相比，BMS与单体电芯之间基本没有引线，然后和主从式相似的是它也会有一个控制器来负责运算，预测，决策等工作。模块之间基于总线进行通讯，在汽车上一般用CAN总线。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiaAzP5GL9lT5iaiaXcgn2dDabASFcibtkas4nLU2aYOTLZdIWBFRr9RVEHg/640?wx_fmt=png&from=appmsg)

**_图1-6：分布式BMS_**

分布式的优势有很多：首先就是拥有极高的扩展性，可以精细到单体电芯的扩展。其次是连接可靠性高，基本没有什么过长的线缆，电芯和测量电路结合紧密，也减小了干扰和误差，安全性也很高，同时也易于维护，局部损坏只需要更换一个很小的单元。**_表1-2_**总结了三种结构的优缺点。![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQia6KKbpPA4ZVb7pd7fuYwu5IR1kUv6wJb4O41I8zAibcBUN6jQXicVSXGQ/640?wx_fmt=png&from=appmsg)

**_表1-2：三种BMS样式对比_**

_____________€4._____________BMS和电池的理化性质

锂离子指一系列和Li+的化学物质，但它最终构成基于金属氧化物阴极和石墨阳极充电和放电反应的电池，两种较为常见的锂离子化学物质是镍锰钴 (NMC---三元) 和磷酸铁锂 (LFP)。

NMC是主要的化学物质，它具有出色的能量密度，对续航里程有直接影响，但是镍和钴很稀有，难以从地球上提取。虽然LFP相比NMC能量密度较低，但不含昂贵且稀有的镍和钴元素，因此具有显著的成本优势。

LFP还具有较长的生命周期，因此可延长电池的使用寿命。与镍和钴电池相比，LFP电池也更稳定，更不容易起火，需要的保护更少。因此LFP和NMC基于各自的优点，已成为长续航汽车领域的两驾马车。

因为LFP具有非常平缓的放电曲线，所以需要十分精确的电池监测技术。与此同时，成本更低的钠离子电芯未来会与LFP竞争。与使用液态电解液的传统锂离子电池不同，固态电池使用由玻璃、陶瓷、固态聚合物或硫化物组成的固体电解液，鉴于固态电池固有的性能优势：更高的能量密度、更高的可靠性和抗老化特性、更快的充电速度以及更高的安全性，多家汽车制造商正在开展固态电池研究。液态电解液在高温下会变得易燃，但固态电解液具有更高的热稳定性，进而降低火灾或爆炸的风险。