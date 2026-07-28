# 电化学储能系统中 PCS 的拓扑结构对比分析


> 原文地址: [https://mp.weixin.qq.com/s/\_srw\_o2yWXzm9eKX68L3fQ](https://mp.weixin.qq.com/s/_srw_o2yWXzm9eKX68L3fQ)

文章来源：太阳能

作者：李建林 1\*，马凌怡 1，肖　珩 2，曾　伟 3(1. 储能技术工程研究中心，北方工业大学，北京 100144；2. 上海电力大学电气工程学院，上海 200090； 3. 国网江西省电力有限公司电力科学研究院，南昌 330096)

摘要：电化学储能系统中变流器 (power conversion system，PCS) 是实现储能电池与电网之间功率交换的重要单元，其性能关系到能量传输质量，合理的PCS 设计对促进能源消纳具有重要意义。针对电化学储能系统中PCS 拓扑结构的特点，将其分为两电平、三电平及多电平拓扑结构这三大类进行分析，对各种拓扑结构的优势及存在的问题进行了总结，并结合实际情况对PCS 未来前景进行了展望，为储能装置在电力系统的工程应用提供方案参考。

关键词：变流器；拓扑结构；电化学储能系统；多电平

0. 引言

储能技术具有提升电网灵活性和稳定性的优点，成为现今研究热点。根据《储能产业研究白皮书》所述，2021 年中国的电化学储能市场保持快速发展，累计装机容量约为5800MW，复合增长率可达57.4%。中国电化学储能累计装机 容量预测如图1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjEVSvGKn5HwL8eAU9OTIs1zmEgKFg4aIG0t9t8qDJuHv8xibfwJmqZJw/640?wx_fmt=png&from=appmsg)

电化学储能产业链中，变流器(power  conversion system，PCS) 是储能电池与电网之间功率交换的重要单元，实施有效和安全的储电和放电管理，对促进能源消纳具有重要意义，对加强先进储能技术研发和智能制造升级具有推进作用。近年来，国内外对电化学储能系统中的PCS不断进行技术革新，促进了储能用PCS 在电网的广泛应用，全球对PCS 的需求加大，国外储能市场快速崛起，促使国内的部分生产商也在不断扩大海外市场，对PCS的研究也成为关注热点。2020 年PCS 海外出货量前5位的国内生产商对比情况如图2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjias2rKWt2NW03ciakMAAl8TcPOLJDOb81Gicn5pNCIhM9In3RpBbW6nmg/640?wx_fmt=png&from=appmsg)

目前针对电化学储能系统中PCS 拓扑结构的相关研究中，大多是基于其具体结构特点进行的分类。由于PCS 与光伏逆变器在产品结构上相似，因此，光伏逆变器的拓扑结构可以为电化学储能系统中PCS 的拓扑结构提供参考。文献\[4\]针对大规模光伏发电系统中使用的逆变器串并联拓扑结构进行了分类讨论及研究；文献 \[5\] 按照集中式并网和模块化并网两大类对PCS 拓扑结构进行了分析；文献\[6\] 将储能电站的能量转换系统分为PCS 和滤波器两部分对其拓扑结构进行了分析。

以上文献均是基于PCS 拓扑结构的部分具体结构特点进行的分析，随着电化学储能系统的PCS拓扑结构不断发展，一些新型拓扑结构也成为当前的研究热点。电化学储能系统中PCS拓扑结构分类树状图如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjSUedRkWjRvWVF9xXnQkFKibZnnjynt15pmM3qc5zoWy81ALmWsajsJw/640?wx_fmt=png&from=appmsg)

基于此，本文首先从基础的两电平、三电平 拓扑结构出发，介绍了传统的PCS 实现方式及其优、缺点；再对多电平拓扑结构展开了分类研究。通过查阅相关文献，对基础的两电平、三电平拓扑结构的优、缺点进行整理并提出改进型拓扑结构方案。结合实际情况，对PCS 未来发展前景进行了展望，为电化学储能系统在电力系统中的工程应用提供参考方案。

1. 两电平拓扑结构

基础的两电平PCS 拓扑结构通常被用于单级PCS 的储能系统中，将电池组通过PCS 连接升压变压器后并入电网，PCS 输出端连接升压变压器，使输出电压与电网相匹配，以达到并网目的。此类两电平拓扑结构的优点是：能耗低、结构简单、运行效率高、控制较为简单。缺点是： 此类PCS 的体积大；达不到交流侧电压等级， 需要增加升压变压器，提高了成本。

1.1 单路全桥两电平拓扑结构

中国现有的500 kW 等级电化学储能工程中， 现阶段较为常见的单路全桥两电平PCS 的拓扑 结构如图4 所示。PCS 多采用这种单路全桥两电平拓扑方案，其运行效率超过98%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjBAoYSUCaqp9xwzUW3tiaDX0aw4ZZ1GIwibG2yLOx4ufDxTw9Kkq01RHA/640?wx_fmt=png&from=appmsg)

该单路全桥两电平拓扑结构在实际工程运用时，由于目前工程现场存在电池组最高直流电压限制及其中开关器件因通态损耗造成的高成本， 因此从成本和安全两方面考虑，必须使用大容量工频变压器接入电网，但由此带来了高成本及设计、制造困难等一系列问题。

1.2 多重化全桥两电平拓扑结构

对于两电平拓扑结构来说，由于串联电池数量的限制，输入一般为低压，单机容量较小，大多数不会超过500 kW。在此背景下，可以利用多重化的拓扑结构来实现储能系统中大容量电池的需求。以双重三相电压型的电路为例，该电路由2个单路全桥两电平逆变电路组成，然后通过变压器将二者串联起来，具体拓扑结构如图 5 所示。 该拓扑结构不仅可以增大输入容量，也可以减少输出电压的谐波分量，使其更接近正弦波。但同时对控制要求也会更加复杂，多个单路全桥两电平拓扑结构并联使整体电路的不稳定性隐患增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjtia0ZyTfxeMTT6h9VBjfc2JTCicRk6I7MpF3s2icFfoian5054j6krmgdA/640?wx_fmt=png&from=appmsg)

2. 三电平拓扑结构

随着市场对储能设备单机容量和电能质量的要求提升，研究学者们将研究方向转向三电平拓扑结构的PCS。常见的三电平拓扑结构主要有I型三电平拓扑结构和T型三电平拓扑结构这2种。 相较于两电平拓扑结构来说，三电平拓扑结构可以达到更大的容量和更高的输出电压。但由于新器件的应用使成本增加，导致其产品化应用受到限制。

2.1  I 型三电平拓扑结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjwJYl6LREUI4msL6He6bR4Qb0DAfqVQgjhFO2DHAbicW8dUrQWpQEAAQ/640?wx_fmt=png&from=appmsg)

I 型三电平拓扑结构如图6 所示，其是最早的三电平PCS 拓扑结构。图中：Ua、Ub、Uc 分 别为交流测a、b、c 三相的相电压；L1 为滤波器中的电感；C 为滤波器中的电容；ICa、ICb、ICc 分别为交流测a、b、c 三相的相电流。该拓扑结构 采用多只开关管组合开关的方式将直流母线斩波 为“+”“0”“\-”3 个电平，从而降低了开关管的损耗，并减小了滤波器的尺寸，最终达到了提升PCS 运行效率、降低PCS 体积及质量的目的。 但由于I 型三电平拓扑结构的器件多、时序复杂，控制难度大，所以，其运用不够广泛。

2.2  T 型三电平拓扑结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjNVHticBCJNZfNCcx1iazJyAdvBWhWZl3d3BXiaUdcicmPcodhYlps1JVrg/640?wx_fmt=png&from=appmsg)

T 型三电平拓扑结构如图7 所示。其工作原理与I 型三电平拓扑结构相似，但由于T 型三电平拓扑结构的器件组合结构不同，器件耐压较高， 因此不需要像I 型三电平拓扑结构一样有严格的时序要求，控制难度大幅降低，可靠性也更高。

2.3 两种三电平拓扑结构的性能对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjjf2GAD7g95lBp9H38xM1AuZcSsTWp8NZL5qg9BxzZGcnDLia5OEzcNg/640?wx_fmt=png&from=appmsg)

根据应用场合不同，I 型三电平拓扑结构和T型三电平拓扑结构都会凸显出各自的优势，对二者性能进行对比分析，结果如表1 所示。表中：Ui 为输入电压。

从表 1 可以看出：

1) 在开关管应力方面，I 型三电平拓扑结构要低于T 型三电平拓扑结构，I 型三电平拓扑结构12个开关管承受电压均为输入电压的1/2，而T型三电平拓扑结构的开关管承受电压为输入电压。

2) 在结构方面，I 型三电平拓扑结构使用的二极管及驱动电路数量多，成本高且所占空间大，控制复杂。虽然T 型三电平拓扑结构减少了二极管的使用，但同时也存在静态、动态均压等一系列问题。

3) 在控制时序方面，I 型三电平拓扑结构需保证先关断外开关管，再关断靠近中心的2 个开 关管，以防止母线电压直接加在外管上导致其损坏。而T 型三电平拓扑结构则无此要求。

3. 多电平拓扑结构

对于大功率的PCS 拓扑结构应用主要集中在两电平拓扑结构，近几年开始出现上述I 型三电平拓扑结构。然而要满足高电压大功率场合， 普通的两电平、三电平PCS 已经难以满足储能系统对电力电子器件的耐压等级和功率的需求。 

在此背景下，多电平PCS 更适合这种高电压大功率场合。多电平PCS 起源于1981 年，最早由日本长冈科技大学的Nablae 等提出，思路是将几个电平方波台阶合成阶梯型，以逐渐接近正弦波输出。作为一种新型的高电压大功率多电 平PCS，研究时可以从电路拓扑结构出发，不仅可得到高质量输出波形，而且也解决了两电平PCS的诸多问题。 

在现今市场中，多电平拓扑结构主要有以下3种：二极管钳位型多电平拓扑结构、飞跨电容型多电平拓扑结构和模块化PCS 串并联型多电平拓扑结构。 

以上3 种传统的多电平PCS 也存在一定缺点，限制了其在特定场合的应用，具体存在以下几种问题：

1) 随着电平数的增加，所使用的器件数量也在增长，从而出现成本高、PCS 体积大、控制复杂等问题。

2) 对于二极管钳位型多电平拓扑结构，会出现二极管承受反压不同、越靠近内侧开关管导通时间越长的问题。

3) 对于飞跨电容型多电平拓扑结构，会有大量的开关管直接串联在电源两端造成直通的问题；同时，该拓扑结构也存在因悬浮电容过多而出现电压不均衡的问题。

4) 传统的多电平PCS 都只能实现升压或者降压的逆变，不能实现同时的升降压逆变。

3.1 二极管钳位型多电平拓扑结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHj8VW34bvTOroXCu2Uoxjad17ib2l9LX3jbH1W6RiapfKnsbIU98Xwvb1g/640?wx_fmt=png&from=appmsg)

文献\[8\] 介绍了一种二极管钳位型五电平拓扑结构，如图8 所示。此拓扑结构在直流侧串联4 个电容，每个电容均分电池的1/4 电压； 可通过开关管的变化来使输出电压产生不同的大小。

二极管钳位型多电平拓扑结构的优点有：器件耐压较低、开关频率低；交流侧减少了隔离变压器，成本低。该拓扑结构的缺点有：器件数量庞大，不容易控制。

3.2 飞跨电容型多电平拓扑结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjiadOQZvf54yU9RnwlRS5SFEzPQqsByn4zzyeZOo1jWKAYicpmtgW8ic3g/640?wx_fmt=png&from=appmsg)

常见的飞跨电容型多电平拓扑结构如图9 所 示。该拓扑结构中，每相桥臂的结构相同；在每桥上分布相同数量且相互独立的内环电容，使其输出多电平；其工作原理与二极管钳位型多电平拓扑结构相似。

飞跨电容型多电平拓扑结构输出电平的灵活度高于二极管钳位型多电平拓扑结构。该拓扑结构的优点是：开关方式灵活，对功率器件的保护能力强；缺点是：需要大量的存储电容，难以控制电容的充放电平衡。 

以上2 种多电平拓扑结构都具有高电压大功率场合适用的特点，但在实际使用中需要考虑PCS 体积大小、拓扑结构复杂度、成本高低， 以及控制的难易性等多方面因素。目前，很多学者基于传统的3 种多电平电路进行了研究， 并提出了几种具有针对性的改进拓扑方案。通过查阅这些文献，总结出4 种改进型多电平拓扑结构进行分析研究，分别为：以二极管钳位型多电平拓扑结构为基础的改进型多电平拓扑结构；以飞跨电容型多电平拓扑结构为基础的改进型多电平拓扑结构；减少使用器件的改进型多电平拓扑结构；实现同时升降压的改进型多电平拓扑结构。

3.3 4 种改进型多电平拓扑结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjiaxicbTJUNATcGTOiaJEoDycB8QZfY5MrT9dlx1ibiaXZ9fLnic6cGVtlnew/640?wx_fmt=png&from=appmsg)

3.3.1 以二极管钳位型多电平拓扑结构为基础的改进型多电平拓扑结构

对于二极管钳位型多电平拓扑结构中出现的二极管承受反压不同的问题，文献\[9\] 提出了一种新型的二极管钳位型五电平拓扑结构，如图10所示。图中：Uo 为交流测输出电压。

该电路共使用8个开关管和12 个二极管钳位，使用的数量和传统的二极管钳位型多电平拓扑结构相同。器件的位置分布构成了金字塔结构， 且该金字塔结构可扩展到更高级别，N 级变流器需要N–1个电容、2(N–1) 个开关及(N–1)(N–2)个二极管钳位。该结构可以解决二极管钳位承受 反压不均的问题。

3.3.2 以飞跨电容型多电平拓扑结构为基础的改进型多电平拓扑结构 

针对飞跨电容型多电平拓扑结构存在大量开关管直接串联在电源两端造成直通的问题，文献\[10\] 综合利用飞跨电容型PCS和双Buck电路的优点，以双Buck 电路为基本单元构建多电平PCS，提出一种新颖的飞跨电容型双降压五电平PCS，其拓扑结构如图11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjMkdGLSNKQISVJ4vfvI3N5TibJiaxibcA7ibbF5B0TAk7d2wmP4s94oY5sg/640?wx_fmt=png&from=appmsg)

该拓扑结构由两桥臂组成，中间开通降压斩波电路分支。工作原理分为2 种降压斩波电路，每种电路分为7 个模态，实现周期平分对称。

此拓扑结构在实现飞跨电容两端均压及五电平输出的基础上，具备了无桥臂直通、无二极管反向恢复电流，以及电流半周期工作模式的优点。 

除此以外，文献\[11\] 在基于现有PCS 多电平拓扑结构的基础上，结合Zeta PCS 的特点，提出了一种基于Zeta 的新型飞跨电容型多电平PCS，其拓扑结构如图12 所示。该拓扑结构的基本单元实现输入侧并联电池组、输出侧串联滤 波器组合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjrfoRvxNZgssqiaKkGWyGB0DCKObC3Aicxr8icoMLqticKZ7EnOuFxsyj6Q/640?wx_fmt=png&from=appmsg)

新型飞跨电容型Zeta 多电平拓扑结构采用复用原则的中间电容器与输出滤波器，以此减少无源器件的个数，从而实现单级升降压逆变；同时，也使该电路具有扩展能力强、电容两端均压的优点。 

对于飞跨电容型多电平拓扑结构存在的电容两端电压不均衡的问题，文献\[12\] 提出了一种新型的高压拓扑结构，如图13 所示。 

将二极管钳位型多电平拓扑结构与飞跨电容型多电平拓扑结构相结合，在电容两端添加二极管钳位结构，使其中性点电压波动变小，实现了电压自均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjCmhB8sPgxIy0HlBHu1IPokAbgxVU6587ianU3RP9b4Aicb5eQeRS6FwQ/640?wx_fmt=png&from=appmsg)

3.3.3 减少使用器件的改进型多电平拓扑结构 

针对使用器件繁多的问题，文献\[13\] 提出了一种混合钳位四电平拓扑结构及其扩展五电平拓扑结构，图14 为混合钳位型四电平拓扑结构。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjquV7AHPibVTrX94RILIic6C67HMBOzoicNn0iavAJ6uhxmXQGxQgsFicQMw/640?wx_fmt=png&from=appmsg)

该拓扑结构提高了传统二极管钳位和飞跨电容多电平PCS 的电平数，减少了二极管钳位的数量，避免二极管钳位五电平拓扑结构中开关器件的直接串联，与二极管钳位型四电平拓扑结构相比，此拓扑结构省去了6 个二极管钳位，使用 的钳位器件数量大幅减少。

对于减少飞跨电容型多电平拓扑结构的开关管，文献\[14\] 介绍了一种双重飞跨电容型九电平PCS，其拓扑结构如图15 所示。图中：E 为输入电压。 

该拓扑结构添加的最左端2 个开关管的通断决定了输出电平的正负。与传统的飞跨电容型多电平拓扑结构进行对比，双重飞跨电容型九电平拓扑结构的开关管和悬浮电容的数量均减少一 半，同时电平数的增多也减少了输出电压的谐振分量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjz4CI91ndefOHFdbaE7icTATcgy6m6Au1nTeS4exgHTlqABfANlbJ91w/640?wx_fmt=png&from=appmsg)

3.3.4 实现同时升降压的改进型多电平拓扑结构 

文献\[15\]提出了一种Z 源型单相全桥中点钳位PCS，为可实现同时升降压的改进型多电平拓扑结构，如图16 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjJ52K4WxAhAEJr1DGDwDSDEb7J5RRDtwjk2s9Z4OhUfmFibEMUpzqiaSw/640?wx_fmt=png&from=appmsg)

该拓扑结构在直流电池侧引入分裂电容，然后连接Z 源网络与全桥连接，以此实现升降压变换。相较于传统Z 源网络电路，该Z 源型单 相全桥中点钳位拓扑结构不改变无源器件种类，但二极管数目变为2 个，位于电池侧的2 个二极管在直通状态下起到反向阻断的作用。该拓扑结构共有3 种工作状态，分别为非直通状态、上直通状态和下直通状态。通过分析发现，可将这3种状态的工作原理类比升降压斩波电路的工作原理，可实现同时升降压逆变的需求。 

该拓扑结构在单相全桥中点钳位电路中加入2 种直通的工作状态，并且在合理控制直通时间的基础上可实现升降压逆变。但此拓扑结构不仅使用了参数较大的电感、电容等无源器件，而且因所需要的钳位器件数量较多，使拓扑结构变得更为复杂。 

文献\[16\] 提出了一种单级非隔离型双Cuk多电平 PCS，其拓扑结构如图17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjHFHLxa52GMiabgPgWZ9cWUfyibjicN0UHn3sjcHa13Qu2cCoxBWZsiaJfA/640?wx_fmt=png&from=appmsg)

该双Cuk 电路由2 个直流Cuk 电路通过输入串联、输出并联的方式构成，该PCS 结构具有Cuk电路的所有优点，可同时实现升降压逆变，电流连续，适用于直流输入电压宽范围变化的可再生能源发电系统。但是该拓扑结构中无源器件较多，可靠性不高。

3.4 模块化 PCS 串并联型多电平拓扑结构

储能电池在储能单元应用中，在低压场合通常利用PCS 模块化技术；在高压场合，通常利用级联型多电平拓扑结构，通过仅增加PCS 拓扑结构单元数，可改变多个储能电池的串联结构。而对于级联的多电平拓扑结构PCS，现有较多的 研究集中于以H 桥作为单元的级联型，称为H桥级联型变流器 (cascaded H-bridge converter，CHC)。除此以外，模块化多电平变流器(modular  multilevel converter，MMC) 拓扑结构也经常作为研究对象。 

储能系统在实际应用中往往包含储能单元的串联与并联，以此来实现高电压和大电流转换，同时也有利于提高其电流等级和整体运行的稳定性，方便其合理扩容与故障维修。

3.4.1 低压小功率分布式升压并网拓扑结构 

针对低压小功率分布式升压并网储能系统的PCS 拓扑结构如图18 所示。每个模块化的储能单元接入PCS 将直流电转换为交流电，每个模块再通过并联到变压器后接入电网。此类拓扑结构应用于储能系统的功率从几千瓦至几兆瓦不等。图中：D 为接地点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHj5mTIpdyENicGcJpkBkfonxFm7ticvMbKxtl0iajIehfxz7pqNcyzPyWbw/640?wx_fmt=png&from=appmsg)

此类PCS 拓扑结构主要应用于低压小功率的分布式储能系统，其优点有：模块化储能单元分散接入，可便于添加电池管理系统；同时对储能系统的整体容量来说，也便于拓展，容易实现故障冗余功能；与此同时，对于单个储能单元中的开关器件的耐压要求降低。该拓扑结构也存在一些问题：各个储能单元添加的控制系统需要协同，较难保证精度。在大规模并网时，多并联结构也存在稳定性问题。

3.4.2 低压大功率集中式升压并网拓扑结构 

针对低压大功率集中式储能系统，其PCS的拓扑结构如图 19 所示。在此类储能系统中，由于要满足功率和能量的需求，电池侧通常要求多个电池组串或并联连接来达到要求。在整个储能系统中，电池组经过PCS 进行交直流转换后，经变压器完成并网，实现整体功能，其功率从数兆瓦到数百兆瓦不等，可在大规模新能源电站应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjpMWL7BMyukv3N8KocRkUUOHxRyER7icmJdgrtdmHODMZ2tgBZOuQ1zw/640?wx_fmt=png&from=appmsg)

这种PCS 拓扑结构的优点是：结构简单、 容易调节控制，存在的开关器件较少，已成为现今常规的集中式升压并网储能系统采用的拓扑结构，技术成熟。缺点是：受限于开关器件的耐受电压限制，输出的电压等级较低，增加升压变压器的同时会增加整体系统成本，也降低了效率；对于电池管理系统来说，不易进行均衡控制，从而造成整体储能系统输出能力下降，更容易出现安全性问题。

3.4.3 智能组串式并网拓扑结构 

基于集中式升压并网储能系统中PCS 的拓扑结构，有研究人员提出了智能组串式并网储能系统的PCS 拓扑结构。在逆变器直流侧和电池组端添加电池储能系统，可增加整体储能单元模块的稳定性，成为可靠的优化手段。

3.4.4 高压大功率级联式拓扑结构 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjy46whhMujMpZwp4VYqGWDykGqj1OSK5zANhWI4mcENf3SfPjaL7Axw/640?wx_fmt=png&from=appmsg)

高压大功率级联式储能系统的PCS 的拓扑结构，如图20 所示。图中：SM 为模块。将储能单元模块接入三相形成交流侧的串联型PCS 拓扑结构，对每个PCS 模块进行级联，从而实现逆变后接入电网。此拓扑结构的提出为百兆瓦级 电池储能站的设计、建设和运行提供了强有力的技术支撑。 

该拓扑结构的优点是：储能电池单元可灵活地调节控制，很大程度上提高了电池组的能量管理效率，也减小了电池管理系统的工作负担。但该拓扑结构中使用了较多的开关器件和电容器， 增加了制作成本。

3.4.5 采用不同模块化PCS串并联多电平拓扑结构的储能系统的性能分析

在高压大容量的储能背景下，储能系统采用模块化的PCS 拓扑结构的优点包括：灵活接入、成本低，可用来接入更高的电压等级，具有更大的容量，可提升转换效率，有更安全的电池管理系统，适合于当前大规模并网应用。采用不同PCS拓扑结构的储能系统的性能对比如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjSAcqVveXEHe3kEic2Zc5mictRIrAQKe8ueG79VmATCCIOPp2TyBIjUqg/640?wx_fmt=png&from=appmsg)

1) 低压小功率分布式升压并网拓扑结构具有稳定的直流母线电压，但模块与模块之间存在环流；解决办法是利用隔离型DC/DC变换器，但与此同时会增大消耗，运行效率得不到保证。

2) 对于低压大功率集中式升压并网拓扑结构来说，结构更加简单，成本更低，但对于电池管理系统控制更加繁琐。

3) 高压大功率级联式拓扑结构以其调节灵活、运行效率高的特点成为目前研究和应用的主流方向。但是其成本相较于以上2 种结构来说很高，更适用于大规模并网且用地有限的项目。

4. 结论

本文基于电化学储能系统中的PCS 拓扑结构特点，将其分为两电平、三电平及多电平拓扑结构三大类，对不同拓扑结构的结构特点、优势及存在的问题进行了分析与总结；介绍了基础的几种两电平、三电平拓扑结构，然后从二极管钳 位型和飞跨电容型多电平拓扑结构出发，总结了常见的几种多电平拓扑结构，重点分析了优缺点， 并介绍了几种改进型多电平拓扑结构；最后指出了储能系统实际应用中的几种模块化PCS 多电平拓扑结构。了解不同功率等级的电化学储能系统PCS 拓扑结构的应用过程，为电站规模进一步提升至吉瓦级进程提供了理论指导，加快吉瓦 级电化学储能电站的建设，推动新型电化学储能的发展，期望通过本文的分析为今后的研究提供方向。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslU6Rj6QlE2FCxv0NAu0DHjSqz9UxDF0Zo39tibPp9bvLf5NHqsuEyEHjrQ9zkVJtCVvDHXBylysQQ/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7y6takB9fSysibKQHosicr8oxe78kybBtoHNEIe9m37GrhWmgzRKTXB5g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7IdKzsVAfsonk8XrEsLYcotJErMx7GsGpRTzbWqgcNA1hyxohsEXI4Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G79QVc4mUv0mUB6iaCbnIkLunouMLTPpicMiaLYV3hbye0xa68FuUM0IJow/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7ffbgpzt2NMsDcGiarMO5cibQGbgFyjCmOfBoeIn7JRUdsgXFHY7Fyialw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)