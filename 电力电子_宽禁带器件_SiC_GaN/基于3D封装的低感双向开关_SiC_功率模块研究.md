# 基于3D封装的低感双向开关 SiC 功率模块研究


> 原文地址: [https://mp.weixin.qq.com/s/ILL9BimB1h8-sC3k5POvJQ](https://mp.weixin.qq.com/s/ILL9BimB1h8-sC3k5POvJQ)

**文章来源：**电源学报

**作者：**王思媛 1，梁钰茜 2（中国电源学会学生会员），孙 鹏 2（中国电源学会学生会员），邹铭锐 2（中国电源学会学生会员），龚佳坤 2（中国电源学会学生会员），曾正 2（中国电源学会会员）1\. 重庆大学辛辛那提大学联合学院，2\. 重庆大学电气工程学院

**摘要：**双向开关在固态断路器.光伏逆变器等领域具有不可替代的作用，而低损耗.高开关频率的双向开关SiC 功率模块得到了越来越多的关注。 然而，现有双向开关 SiC 功率模块仍然沿用传统 Si 功率模块的封装方法，难以适应 SiC 器件的高速开关优势。 针对双向开关 SiC 功率模块的低感封装需求，提出一种芯片堆叠的 3D 封装集成方法。 给出了 3D 封装的电路拓扑和几何结构，分析 3D 封装的换流回路和寄生电感规律，设计 3D 封装的技术工艺，并研制了双向开关 SiC 功率模块样机。 采用双脉冲测试的实验结果验证了所提 3D 封装双向开关 SiC 功率模块的可行性和有效性。

**关键词：**双向开关；SiC 功率模块；低寄生电感；3D 封装

随着电动汽车.新能源发电和储能等领域的持续快速发展，为了保障安全.可靠和高效的双向电能流动，双向开关具有重要的应用价值。相对于传统的 Si 功率模块，得益于更高的工作结温.击穿电压.开关频率和能量转换效率等优势，双向开关SiC 功率模块具有更高的技术经济效益，在电源管理.电池保护.电机控制和光伏发电等领域得到了广泛的关注。目前，双向开关主要通过 1 颗双向导通的芯片或 2 颗传统芯片封装集成来实现。双向导通的 SiC 芯片需要复杂的背面工艺， 工艺难度大，芯片成本高。 因此，通常采用 SiC MOSFET 芯片反并联集成封装到 1 个模块内，得到双向开关 SiC 功率模块。

针对双向开关 SiC 功率模块已有部分研究，主要集中在封装工艺和封装结构等方面。在封装工艺方面，双向开关功率模块主要用作断路器，通流能力强，功率损耗大，开关速度快，对封装的电流密度.结\-壳热阻和寄生电感要求比较高。 现有封装的双向开关 SiC 功率模块主要以电热性能.机械性能和可靠性为主要优化目标，但是大多仍然沿用传统 Si 功率模块的封装结构。 现有双向开关功率模块多为平面型传统封装，内部采用引线键合结构，且受限于二维换流回路结构， 存在寄生电感大.封装体积大.功率密度低.制造成本高和工艺难度大等问题，难以适应具有高速开关特性的 SiC 功率器件， 限制了双向开关 SiC 功率模块的应用优势，无法满足双向开关 SiC 功率器件朝轻量化.高功率密度化的后期发展。 为了降低 SiC 功率模块的封装寄生电感，可以利用层叠柔性母排，基于磁路相消的原理，降低封装的互联寄生电感。 此外，也可以采用印刷电路板 PCB（printed circuit board）和陶瓷直接覆铜板 DBC（direct bonded copper）的混合封装技术，使用 PCB 板灵活走线，降低回路厂区，减小寄生电感。 为了进一步缩短封装寄生回路，可以采用功率芯片堆叠结构 PCOC（power chip-on-chip）的概念，将 2 颗功率芯片垂直布局，以减小功率回路长度，从而降低寄生电感。

针对双向开关 SiC 功率模块的低感封装需求，本文提出了一种基于芯片堆叠的双向开关 SiC 功率模块 3D 封装方法，以实现在寄生电感.功率密度.实现难度和经济成本上较好的平衡。首先，给出了双向开关 SiC 功率模块的封装结构，对比分析了传统平面型封装和所提 3D 封装的换流回路；然后，基于 ANSYS Q3D 分析工具，分析了 3D 封装的寄生电感分布特性；最后，研制了 3D 封装双向开关 SiC 功率模块样机， 基于双脉冲测试实验结果，验证了所提 3D 封装的可行性和有效性，为双向开关 SiC 功率模块的低感封装设计提供了新的思路。

**1  双向开关 SiC 功率模块的 3D 封装设计**

**1.1 功率模块的封装结构**

商业化双向开关功率模块的现状如图 1 所示。额定电压在 600 V 以下双向开关功率模块的典型封装主要有 QFN.T3A 和 SOT 等，额定电压在700~1200 V 的双向开关功率模块的典型封装主要为T-Type.EasyPack 和 SP3F 等。 可见，现有双向开关功率模块采用传统封装技术时的寄生电感大，难以适应第三代半导体功率器件应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99xDrMd2lcOrrNmz2GdicJ2kPEL40Qg0aj3ibQ9EwPfsHyvOZU2cssjd9A/640?wx_fmt=png&from=appmsg)

双向开关 SiC 功率模块的电路原理和封装结构如图 2 所示。 针对如图 2（a）所示的双向开关电路， 本文提出了一种基于 3D 堆叠封装的 SiC 功率模块袁如图 2（b）所示。 该 SiC 功率模块采用上.下层 2 颗 SiC 芯片组成共源极双向开关结构，具有双面散热. 无键合线的紧凑结构， 模块的尺寸为 29mm\*15.88 mm\*3.12 mm，远小于传统单面散热功率模块或分立器件。 该双向开关为 3 层结构，其中转接层与芯片的开尔文源极和栅极连接， 上. 下层DBC 与芯片的漏极连接。 转接板设置了 246 个直径为 15.7 mil 的通孔，以保证上.下层芯片的功率源极连接。 DBC 为铜\-陶瓷\-铜结构，用于绝缘和导热，双层 DBC 结构可形成双面散热，从而降低功率模块的结-壳热阻。 芯片在转接板的上.下层对称分布， 采用垂直互连的结构以减小功率回路长度，降低功率模块的寄生电感。 功率端子对称分布于转接板，通过焊料层与上.下层 DBC 连接。 模块内部共有 2 条电流路径，当上层芯片开通时电流流经路径 1，当下层芯片开通时电流流经路径 2，具体的电流路径如图 2(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99ZF5Sibuh5L7yAreoUNSzImavhHiayKicCeIBnUk0YRd51NhrwtbAmpSOg/640?wx_fmt=png&from=appmsg)

**1.2 功率模块的寄生电感**

采用传统平面键合线封装互连技术,双向开关SiC 功率模块的封装寄生电感较大,甚至会超过12 nH,其寄生参数的分布如图 3 所示. 此外,直流母线电容的等效串联电感 ESL(equivalent series inductance)和直流母排的寄生电感也会进一步导致 SiC 器件开关过程中的电压过冲, 增加器件损耗,引起电磁干扰,降低器件安全工作区,进而影响功率模块的可靠性和稳定性。 功率模块的电压过冲 ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99v95P5PR2VUfvlMv5ib0ic9aCdvpUQ9wPhTmJ6MiajD8Kjnv4Z0NbhewQA/640?wx_fmt=png&from=appmsg)可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH9913xxTicHvSWj2V9nNIhOsS1gGOEa9MK1N3seFGzbicWOluDib21fwjhNw/640?wx_fmt=png&from=appmsg)

式中院LESL 和 Lbus 分别为母线电容和母线的寄生电感；Ldi 和 Lsi 分别为芯片漏极和源极的寄生电感，i\=1，2，3，4；Lcom 为转接板及其通孔的寄生电感。

基于图 2 所提出的双向开关 SiC 功率模块 3D封装，可以基本消除传统封装的寄生电感，具体换流回路如图 3 所示。 所提 3D 封装功率模块的寄生电感主要由 Lcom 决定，并受转接板通孔的数量和大小影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99wuUic5Ric5LZm3xnyRQ90dGFAyVv6G63j8MpVvDDXCEcgUtqctG2bCPg/640?wx_fmt=png&from=appmsg)

基于图 2 所提的 3D 封装结构， 使用 ANSYS Q3D 软件提取双向开关 SiC 功率模块的寄生电感。根据图 3（a）所示的等效换流电路可以看出，功率模块的寄生电感主要包括 3 个部分：第 1 部分是从功率端子 1 到上层芯片的漏极；第 2 部分是从上层芯片的漏极到下层芯片的漏极；第 3 部分是从下层芯片的漏极到功率端子 2。 因此，功率模块的寄生电感网络 L 可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99Un80icmxpw8KenO3pHJicZOJIfib2q7PBAJ8WCaXSA6UiaRBicGoIdZZKiaA/640?wx_fmt=png&from=appmsg)

式中，Lij 和 Mij 分别为模块每一部分寄生电感的自感和互感，i. j\=1，2，3。因此，模块的回路寄生电感![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99o5YoLQOs1WwIyTJW3KYvB7EDkOPyict6qOR2AOkKIQticfyn5L3vQMRQ/640?wx_fmt=png&from=appmsg) 可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH996R8feaZ6ibPwojPJlrfkQBtOLEqpumd4E8tWz7bwRNbbdpXMTfzdMuw/640?wx_fmt=png&from=appmsg)

基于 ANSYS Q3D 的仿真结果，可以得到功率模块的磁场强度分布，如图 4 所示。可见，功率模块的磁场主要分布在芯片附近，也即芯片之间的互联转接板是寄生电感的主要来源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99OF1jH1Z1BKwsXE3xnYNLtOASS39iaA3Peicl5MgoaNzq77LXqlQVyZZQ/640?wx_fmt=png&from=appmsg)

计算 10 MHz 交流激励下功率模块的寄生电感，结果如表 1 所示。根据式（3）和表 1，可以计算得到功率模块的寄生电感为 3.9 nH。 可见，芯片的堆叠封装结构显著缩短了垂直换流路径的长度，此外， 折叠和重叠的换流回路能实现较好地磁场相消，共同保证较低的封装寄生电感，以适应 SiC 功率器件的高 di/dt 应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99picTu4V4KnRExib3T5QONhnttYhTXhS4k9hw7ldgPO6A9Z3ryjb5yr7g/640?wx_fmt=png&from=appmsg)

**2 实验及结果分析**

为了验证所提 3D 封装双向开关 SiC 功率模块的有效性和可行性， 本文研制了功率模块样机，并开展了双脉冲测试实验研究。

**2.1 功率模块制备**

采用 17 毫欧的 SiC MOSFET芯片作为双向开关功率模块的主功率芯片，3D封装的制备过程如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH990oUqF0LkCU6aavm2zfN99lcaBHaB949bPnfkJSuh439F8vl2mcnvqg/640?wx_fmt=png&from=appmsg)

首先通过夹具对下层 DBC.下层芯片和转接板进行定位，然后使用夹具对上层 DBC 和上层芯片进行定位， 再使用真空回流工艺对功率模块进行整体焊接。功率模块整体使用同一熔点的焊料，以保证功率模块结构的稳定性以及焊接的质量。最后，将功率模块的各端子与测试母版连接，进行双脉冲测试。

**2.2 开关性能测试**

为了表征所研制3D双向开关的开关特性，基于图 3（b）所示的双脉冲测试原理，搭建如图 6 所示的测试平台，关键参数如表 2 所示 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99ypDGzDIsvRFC0T1XfYscLnOCV5om7BWx87emF2tHC50tlVaYaarlnQ/640?wx_fmt=png&from=appmsg)

双脉冲实验平台包括驱动电源.直流电压源.2个待测功率模块.负荷电感.罗氏线圈.电压探头.示波器和信号发生器，2 个待测功率模块串联构成半桥结构，以下桥臂功率模块为测量对象。其中，上桥臂功率模块上层芯片的开尔文源极和栅极短接，下层芯片的开尔文源极和栅极接入 20 V 电压信号，下桥臂功率模块上层芯片的开尔文源极和栅极接入双脉冲控制信号，下桥臂功率模块下层芯片的开尔文源极和栅极接入 20 V 电压信号， 负荷电感为 200 uH。本实验采用信号发生器产生双脉冲控制信号， 使用高带宽的差分探头测量交流端子和直流负极之间的电压，使用罗氏线圈捕获下桥臂电流。

在直流母线电压 300~600 V. 负载电流 20 A条件下开展实验研究，实验波形如图 7 所示。 在测试过程中，驱动双脉冲的时间分别为 5 us 和 2 us。在 600 V/20 A 的测试条件下， 测得双向开关功率模块的开通及关断波形，在关断时刻，漏源级电压上升至 600 V，并伴有 85 V 电压的超调，其振荡频率为 32.26 MHz。 为了评估器件的开关损耗，计算器件开关过程的能量为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99Ot3HGGAibNannZGEXoTNNw2LUP51hR6ImXuojJzuoA2r5ubBs5EqncA/640?wx_fmt=png&from=appmsg)

式中：对于开通过程，t1 为漏极电流 id 上升到 10%负载电流的时刻，t2 为漏\-源极电压 vds 下降到 10%直流侧电压时刻；对于关断过程，t1 为漏极电压 vds 上升到10%直流侧电压时刻，t2 为漏极电流 id 下降到 10%负载电流的时刻。 由式（4）可计算得到功率模块的开通损耗为 310.32 uJ，关断损耗为 1105.7 uJ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmJ37KdqFco9n0Rv2nalH99Gu6VNqBJnG29IcstqdehFkIRgicGzwSAgPKpUhxOeOkJnq0kGtF9Pug/640?wx_fmt=png&from=appmsg)

可以发现，模块在不同直流母线电压条件下的开关特性基本一致，由于模块的寄生电感小，测试结果没有出现明显的电压.电流过冲，从而确保了模块的可行性。

**3 结语**

针对双向开关 SiC 功率模块的低寄生电感技术需求，本文提出了一种芯片堆叠的3D封装集成方法。相对于传统平面布局封装，所提3D封装功率回路具有折叠相消的优势，同时采用无键合线封装工艺显著降低封装寄生电感，实现了具有较高可靠性的高功率密度模块。 本文建立了 3D 封装寄生电感的数学模型， 并分析了寄生电感的主要分布，基于 ANSYS Q3D 提取 3D 封装功率模块的寄生电感约为 3.9 nH。 基于 3D 封装功率模块的制造工艺研制了双向开关功率模块样机，并采用双脉冲测试方法，验证了所提 3D 封装双向开关 SiC 功率模块的可行性和有效性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)