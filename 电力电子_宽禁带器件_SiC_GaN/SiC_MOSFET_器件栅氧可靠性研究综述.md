# SiC MOSFET 器件栅氧可靠性研究综述


> 原文地址: [https://mp.weixin.qq.com/s/tAi-bcEPAwRsSIdkouiy9g](https://mp.weixin.qq.com/s/tAi-bcEPAwRsSIdkouiy9g)

文章来源：电源学报

作者：胡嘉豪，王英伦，代豪豪，邓小川，张波(电子科技大学集成电路科学与工程学院，成都610054)

摘要：碳化硅金属氧化物半导体场效应晶体管SiC MOSFET( silicon carbide metal-oxide-semiconductor fieldeffect transistor )因具有高压、高频、低导通损耗等优异特性而获得产业界广泛关注，但相比于硅基IGBT，SiC/SiO2栅氧界面高缺陷密度引起的栅氧可靠性问题成为制约SiC MOSFET器件规模化应用的关键瓶颈。通过对近年来国内外SiC MOSFET栅氧可靠性研究成果的梳理和分析，阐述了当前栅氧可靠性问题的形成原因，归纳总结了各类常用的栅氧可靠性评估方法，并进行了比较分析，最后重点探讨了极端工况下SiC MOSFET栅氧可靠性及其提升技术的发展现状。

关键词：碳化硅金属氧化物半导体场效应晶体管；栅氧可靠性；评估方法；极端工况

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3KleSRuoH1K9WhDicEzTVMvOcopRWDP07rUeLygVvHeS5b5pRatjkFcw/640?wx_fmt=png&from=appmsg)

0\. 引言

碳化硅金属氧化物半导体场效应晶体管SiC MOSFET(因silicon carbide metal-oxide-semiconductor field effect transistor )因具有低导通电阻、高频、高压等特点而广泛应用于电动汽车、轨道交通、智能电网等领域，并成为了当前功率器件研究的热点之一。然而相比Si IGBT，SiC/SiO2界面缺陷密度比Si/SiO2高出1~2个数量级，较高的缺陷密度会引起栅氧质量的显著降低，造成器件在实际应用中出现严重的可靠性问题，这已成为SiC MOSFET器件规模化实际应用的“最后一公里”问题。为了有效评估SiC MOSFET器件的栅氧质量，经时击穿TDDB( time-dependent dielectric breakdown )、高温栅偏HTGB( high-temperature gate bias )等加速老化测试被用作栅氧可靠性评估手段，通过预测器件工作寿命及监测器件静态参数变化，为SiC MOSFET器件长期可靠工作提供参考。此外，在实际应用中，SiC MOSFET器件会受到例如短路SC( short circuit )、非钳位感性负载开关UIS( unclamped inductive switching )等瞬态极端应力冲击，从而出现器件阈值电压漂移或栅极损坏失效等可靠性问题。因此，为了提高SiC MOSFET器件的栅氧可靠性，国内外大量研究聚焦碳化硅栅氧生长工艺的优化与改善，例如氮、磷退火和高k材料等。氮退火可显著降低SiC/SiO2界面缺陷密度，提高阈值电压稳定性，但在高温退火过程中引起的界面缺陷再生成限制了其对栅氧质量的进一步提升。高k材料的引入虽然可以降低栅氧电场强度，减小栅泄漏电流，然而在400~700℃制造过程中生成的亚氧化物会造成SiC MOSFET栅氧可靠性退化。因此，针对以上介绍的栅氧质量提升方法还需要更深入的研究。

综上所述，SiC MOSFET器件栅氧问题是制约其未来发展的关键因素，全面总结与分析SiC MOSFET栅氧可靠性问题对于进一步了解其栅氧失效机理具有重要意义。因此，本文全面综述SiC MOSFET栅氧可靠性问题形成的原因、栅氧质量评估、极端工况下栅氧可靠性和栅氧质量的提升方法等，最后对栅氧可靠性研究进行总结。

1. 栅氧可靠性问题形成的原因

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3eYSOHcjnhibYJ118he67Gk0B0usiaUc5dswCpPuflOcgzVSFq0OdiaMXg/640?wx_fmt=png&from=appmsg)

由于SiC MOSFET热氧化过程中碳簇等缺陷的形成，导致SiC/SiO2界面存在大量缺陷电荷，图1显示了SiC/SiO2界面处的主要缺陷类型，界面缺陷电荷分为可移动电荷、固定氧化层电荷、氧化层陷阱电荷、近界面氧化层陷阱电荷和界面电荷。其中SiC MOSFET栅氧化层中的可移动电荷通常是由氧化工艺阶段的碱金属污染所造成，在栅氧中的主要存在形式为K+和Na+离子，它们会在高温、高电场下发生迁移，影响阈值电压(Vth)的漂移。固定氧化层电荷的产生是由热氧化过程中未形成完整晶格的深能级悬挂键、碳团簇和低价氧化物等缺陷引起的，并且它无法与衬底进行电荷交换，只有进行低温退火可有效降低固定电荷密度。氧化层陷阱电荷的形成是由于SiO2生长过程中自身氧化缺陷及CO残留所引起的缺陷陷阱，可通过粒子辐射、热载流子注入和F-N隧穿捕获电荷。氧化层陷阱电荷位于栅氧化层体内，具有较大的捕获和释放时间常数，主要影响SiC MOSFET阈值电压的长期稳定性及栅氧可靠性。近界面陷阱电荷相比氧化层陷阱电荷更靠近SiC/SiO2界面，分布在SiC和SiO2之间几纳米厚度的过渡层区域。这类陷阱主要来源界面附近的氧空位缺陷，这些氧空位的形成是过渡层中Si和O元素的比例失衡所导致的。近界面陷阱相比氧化层陷阱电荷具有更短的捕获和释放时间常数，表现为更容易捕获和释放电荷。界面态陷阱电荷的形成源于界面处悬挂键、晶格失配等结构缺陷，主要分为施主型缺陷和受主型缺陷：施主型缺陷的分布靠近价带，在未捕获电子的状态下显正电，在捕获电子后不带电；受主型缺陷的分布靠近导带，在未捕获电子时显中性，在捕获电子后带负电。器件正常工作时，界面电荷和近界面陷阱电荷会捕获电子和空穴，造成阈值电压漂移，氧化层陷阱电荷在高温、高电场下捕获电子和空穴，造成器件栅氧泄漏电流的增大和阈值电压永久性漂移。另一方面，由高斯定理可知，SiO2介电常数比SiC低2.5倍，由于功率SiC MOSFET工作时栅压较大，导致栅氧层容易承受超过3 MV/cm以上的电场强度，这会造成严重的可靠性问题。最后，作为宽带隙材料，SiC和SiO2之间的能带偏移量远低于Si和SiO2之间的能带偏移量，SiC/SiO2界面的隧穿势垒降低至2.7 eV，使得电子更容易发生隧穿。因此，在相同电场下，SiC MOSFET器件的栅极隧穿电流要远远高于硅基器件。

2. 栅氧可靠性评估方法

针对SiC MOSFET的栅氧可靠性问题，准确的栅氧质量评估方法对器件工作寿命的预测和栅氧可靠性机理研究具有重要意义。目前常用的栅氧可靠性评估方法有：经时击穿TDDB、高温栅偏HTGB和高温交流栅应力AC-HTGS( AC-high temperature gate stress )等。

2.1 经时击穿TDDB

自20世纪90年代起，TDDB测试已被广泛用于功率MOSFET栅极氧化物的质量评估，根据器件外加电场的方式，TDDB寿命预测可分为恒定电压(电流)TDDB和斜坡电压(电流)TDDB。其中，恒定电压法常通过施加1个低于氧化物击穿电压的恒定电压来预测器件的栅氧寿命，而斜坡电压法常用于获得栅极泄漏电流的变化趋势和提取栅氧化物击穿电场。恒定电压法可以获得不同栅压和温度条件下SiC MOSFET的失效时间，并通过威布尔分布统计来评估器件的栅氧质量，并进一步推测出栅氧化层的使用寿命。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3hl1MnXbm5bYHNSHbgvw1NMJBjl9IKMVFAd6X9V4fQBiaShQ5hPJYsRg/640?wx_fmt=png&from=appmsg)

图2为平面型SiC MOSFET在150℃下恒定电压法TDDB测试的栅氧寿命威布尔分布，可以看出：随着施加栅压的增大，器件的失效时间逐渐缩短，其中β为威布尔分布斜率参数，失效时间的变化越小，β越大，表明栅极氧化物均一性越好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3IicQmLNvSpwAUzMJmN2ib14bXicYTzjyPXeXFH5GNJzlb5hA7063WHvLw/640?wx_fmt=png&from=appmsg)

图3为室温下SiC MOSFET的斜坡电压法TDDB测试的Igss\-Vgs特性曲线，可以看到：栅极泄漏电流在氧化物击穿前呈指数增长，其中F-N隧穿是主要导电机制。在高温、高电场应力下，由于栅氧电场增大和界面有效势垒高度降低，栅漏电流急剧增大，导致SiC MOSFET过早击穿。

近年来，SiC MOSFET的栅极氧化物寿命已经取得了令人鼓舞的结果，科锐、罗姆和意法半导体等制造商在150℃下对商用平面型和沟槽型1200 V SiC MOSFET进行寿命预测，20 V栅压下商用平面型和沟槽型器件的工作寿命分别为800万小时和3亿年，15 V栅压下器件的寿命分别为6亿小时和1亿年。这源于沟槽型SiC MOSFET侧壁栅氧晶面缺陷密度低于平面型器件的晶面( 0001 )，使得沟槽器件在较大的栅应力下表现出更长的使用寿命。然而，在实际工况中，沟槽型器件引起的栅氧可靠性问题远远大于平面型器件，工作中较大的漏极电压(Vds)引起的栅氧拐角处的电场集中会导致栅氧被击穿。因此，沟槽型器件的栅氧可靠性研究更多地集中于栅氧底部拐角处。尽管上述测试结果表明目前商用SiC MOSFET的栅氧质量已得到极大提升，然而相比Si器件，SiC器件的潜在早期失效仍高出3~4个数量级，因此提高栅氧化层质量，以减少SiC MOSFET的早期失效是目前亟待突破的关键技术瓶颈。

2.2 高温栅偏HTGB

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3BPBIlSVZzQOSSxMf88NMTgYMjzHAnpaiaUrByEwVB0QicfqTmGNkJXaw/640?wx_fmt=png&from=appmsg)

HTGB常被用于评估SiC MOSFET栅氧化层的静态特性退化特性，主要包括阈值电压(Vth)、导通电阻(Ron)和栅泄漏电流(Igss)。由于SiC/SiO2界面较高的缺陷密度，HTGB测试会导致器件发生Vth漂移，这被称为阈值电压不稳定性BTI( bias temperature instability )。图4为不同栅偏置条件下SiC/SiO2结构的能带：负栅压下，能带向上弯曲，栅氧化层中空穴被捕获，Vth负漂，称为负偏置温度不稳定性NBTI( negative BTI )；正栅压下，能带向下弯曲，栅氧化层中电子被捕获，Vth正漂，称为正偏置温度不稳定性PBTI( positive BTI )。Vth漂移与施加栅应力时间成幂律关系，随着应力时间延长，栅氧缺陷捕获电荷越多，Vth漂移更显著。除栅压外，温度的变化也影响Vth的退化量，ChenZheng等研究了BTI与温度变化的关系，当温度为175℃和200℃时，Vth漂移量分别增加0.17 V和0.30 V。除此之外，由于Vth的变化会影响器件的导通电阻，Vth正漂会引起Ron增大，从而增强导通损耗；Vth负漂会使Ron降低，导致关断状态下漏极电流增大，并造成器件的误导通。在长期HTGB测试中，Igss会随着应力时间的延长和栅压的增大而增大，最终达到mA量级导致栅氧击穿；而在较低栅压下Igss的增大在可接受范围内，并不会造成器件失效，只会发生Vth和Ron的退化。

2.3 高温交流栅应力AC-HTGS

在实际应用中，由于器件处于频繁开关状态，因此高温下的栅开关应力也会引起器件显著的栅氧可靠性问题，AC-HTGS主要评估SiC MOSFET动态栅应力下的静态参数退化。重庆大学JiangHuaping等研究了动态栅开关应力对Vth的影响，结果表明，仅当开关频率较高、栅压为双极状态时，才会发生显著的Vth退化，Vth的漂移量与开关次数成幂律关系，其与施加栅应力的时间无明显的关联。进一步的研究表明，AC-HTGS中Vth漂移由开关时栅氧化层的局部电场决定，而总电场可分为栅氧化层电场和SiC/SiO2界面局部电场，在器件开关瞬间由于局部电场的增强从而加速了电子和空穴的捕获，并随着开关次数的增多，更多的电子和空穴被捕获进氧化层中，一部分发生复合，一部分被陷阱捕获留在SiO2中，最终导致Vth正漂，并且AC-HTGS下的Vth漂移最终会饱和，不会造成器件栅氧化层的击穿。此外，Zhong Xiaohan等研究发现dVgs/dt越高，AC-HTGS下Vth漂移越显著，并且负栅压对Vth的影响大于正栅压，同时温度、频率、占空比等影响因素也被用于研究AC-HTGS下Vth的变化，但它们对Vth退化的影响并不显著。

通过上述栅氧评估方法的总结可知，TDDB虽然可以通过栅氧质量评估来预测SiC MOSFET的使用寿命，但是其评估方式单一，忽略了器件在正常工作中会受到漏压、导通电流和极端工况等应力对栅氧的影响，导致其寿命预测的结果并不准确。而相比于TDDB，HTGB可以使用额定栅极电压来评估器件长期静态工况下的栅氧退化趋势，更贴近器件实际应用中的状况，同时HTGB主要使用静态参数的退化来预测器件的失效。因此，在实际SiC MOSFET栅氧质量评估中，可通过TDDB和HTGB相结合的方式来更加准确地预测器件的使用寿命。而AC-HTGS主要针对SiC MOSFET在动态栅应力下的栅氧退化进行评估，英飞凌的研究表明，当器件达到一定开关次数时，纯栅极开关应力和沟道导通下开关应力造成的Vth退化趋势是相近的。因此，AC-HTGS对SiC MOSFET的栅氧质量评估较符合实际工况，但其造成器件栅氧退化的机理目前并未形成共识，尚待开展进一步的研究。

3. 极端工况下的栅氧可靠性

SiC MOSFET在工作中常受到极端应力的冲击，包括短路、非钳位感性负载开关和浪涌电流，在这些极端工况下器件会发生栅介质破裂、热失效和栅氧化层退化等现象。单次极端应力引起的大电流和高温环境主要造成器件栅介质破裂和热失效，而重复极端应力下的器件主要发生栅氧化层退化。因此，在这里主要介绍重复极端应力下的SiC MOSFET栅氧可靠性研究。

3.1重复短路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia31ia3CPWYygbGJaDB6Zf8faLianIibqWbPPtncQ1c7INZ6aibe02Xz2efIg/640?wx_fmt=png&from=appmsg)

重复短路应力下SiC MOSFET会受到高压大电流的冲击，造成器件栅氧可靠性降低，且栅氧界面陷阱电荷增多导致的Vth漂移是重复短路应力下栅氧退化的主要机制。Li Yuan等通过仿真验证了平面型和沟槽型器件在受到不同栅压短路应力时栅氧电场的变化，如图5所示：当开态栅压为10 V时，栅氧化层倾向于对空穴的捕获，高漏压会使JFET和部分沟道区发生碰撞电离并产生电子\-空穴对，栅氧在漏压施加的电场下捕获空穴，使得Vth负漂；当开态栅压为20 V时，沟道区的电子捕获成为Vth正漂的主要原因，这表明在不同开态栅压下栅氧承受的电场方向不同。除栅压大小对Vth漂移的影响外，重复短路的持续时间也会造成Vth漂移趋势的不同，图6显示：当短路时间仅为0.8 μs时，Vth发生负漂，源于大电场引起的碰撞电离产生空穴注入；当短路时间变长，增强了沟道区电子注入栅氧化层，Vth正漂。Yu Renze等研究了平面、双沟槽和非对称沟槽器件在重复短路下的退化分析，实验结果表明平面型器件在25℃和175℃下静态特性退化较小，双沟槽和非对称沟槽器件在经受一定短路应力次数后发生栅氧化层破裂，Igss急剧上升。除此之外，重复短路过程产生的巨大热应力会引起顶部源极金属局部过热发生重构，使得Ron增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3ceVlZgHBZIDVT6aNr7WMpR0AtPQqDm8ggWobUNpcHQK0oXM6Nj0Icw/640?wx_fmt=png&from=appmsg)

3.2 重复非钳位感性负载开关

在SiC MOSFET受到重复UIS应力下，电流主要从SiC MOSFET体二极管流出，TCAD数值模拟表明UIS过程中JFET区域碰撞电离率和垂直电场达到峰值，在较大漏极电压下JFET区由于高电场发生碰撞电离而产生空穴被注入上方栅氧化层中，这是导致重复UIS下栅极氧化层退化的主要机制。Wei Jiaxing等研究了平面型SiC MOSFET经受重复UIS应力后栅氧在不同区域的退化趋势，如图7所示，Cg\-Vg曲线结果显示在Ⅱ区域曲线无显著变化，而在Ⅲ和Ⅳ区域Cg\-Vg曲线负漂，进一步验证了JFET区上方栅氧化层对空穴的捕获。而有的报道指出，经过一定次数的UIS后，部分沟道区域上方的栅氧化层也会捕获空穴，使得Vth负漂。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3Oe4jpvEa0z5c3pxfCfbHcNcS4qowVf0uBHJPnPPmY5aiaWOO8p0fs0Q/640?wx_fmt=png&from=appmsg)

Deng Xiaochuan

等

对比了双沟槽及非对称沟槽

SiC MOSFET

的仿真结果，如图

8

所示：重复UIS

应力下双沟槽器件由于更大的槽栅底部氧化层电场，造成了更严重的热空穴注入，使得双沟槽器件底部栅氧化层发生缺陷累积并最终产生电流通路；非对称沟槽器件在经历重复

UIS

应力下由于栅氧承受的电场较低，最终发生热失效。

R

on

正漂是因为重复

UIS

后器件材料的热疲劳和内部热膨胀系数不同所导致的封装退化

。除此之外，由于

JFET区上方栅氧化层捕获空穴，使得

C

gd

增大，而

C

gd增大导致器件的米勒平台持续时间增长，从而延长了器件的关断时间

。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3DVy7nkxpqoWd8gospzcKu15lhZF2VyukkIappnrgoecZWMFicaqHp5w/640?wx_fmt=png&from=appmsg)

3.3 重复浪涌

SiC MOSFET体二极管成为电路中反并联二极管的研究被逐步报道，目前工艺技术的发展使得商用SiC MOSFET体二极管导通状态下的双极退化问题逐步得到改善，因此重复浪涌电流应力下栅氧化层退化成为其主要的失效机制。研究表明，当体二极管导通且Vgs\=0 V时，大部分电流流经SiC MOSFET体二极管，小部分电流流经沟道，静态测试显示Vth正漂，说明有电子被注入栅氧化层中。这源于当Vsd\>0且Vgs\=0时，栅极和SiCMOSFET表面沟道处存在电位差导致沟道被开启，流经沟道的电子因电场作用被注入栅氧化层中。图9 TCAD的仿真结果表明沟道区有大量电子流过，当关态栅压从0降至\-10 V时，沟道区和JFET区电场方向发生变化，栅氧化层在电场作用下从捕获电子变为捕获空穴，使得Vth在栅压为0 V时正漂，栅压为\-5 V和\-10 V时负漂；当关态栅压为\-3 V时，沟道处电场较弱，栅氧化层的电荷隧穿效应被减弱，因此Vth无显著漂移。Ron随着重复浪涌电流应力而持续增大，这是由重复热应力的封装退化引起的。除此之外，有研究表明非对称沟槽型器件受到重复浪涌应力后，即使Vgs为0 V，Vth也发生了负漂，但当栅压为负数时，Ron和Vth等其他电性能的退化趋势与平面型器件相似。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3y06lRWa5RNiboutqq5DEicdAAlCRaSDGZs44B4znIbavaGB8wLXdm8wA/640?wx_fmt=png&from=appmsg)

4. 栅氧可靠性的提升方法

目前SiC MOSFET的重要研究方向之一聚焦于如何通过SiC MOSFET制造工艺的改善和器件结构的优化来降低SiC/SiO2界面缺陷和栅氧电场，从而提升栅氧可靠性。常用的SiC MOSFET栅氧可靠性提升方法有：氮退火、高k材料和结构优化等。

4.1氮退火

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3OiacjYzshOCxotW2anv0sibyEBSEGlJsZzg0giay3iaWibOib9yh7VBxXM5w/640?wx_fmt=png&from=appmsg)

氮( N )元素退火可显著降低SiC MOSFET的界面态密度，提升栅氧化层质量。图10显示N与SiC/SiO2界面处的悬挂键、C缺陷形成Si-N键和C-N键，减少了界面缺陷电荷，使得界面态密度显著降低。近年来，氮等离子体钝化技术因其较大的钝化覆盖范围而被用于降低SiC/SiO2界面态密度，Yang Chao等使用电子回旋共振ECR( electroncyclotron resonance )微波混合N和O等离子体后氧化退火SiC MOSFET，降低界面态密度至

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3OoaEHsVOCqiaxNEvtSThUjVgNEHIpiciczhNAqPicWbPKRS6ib7jUUdGj4Q/640?wx_fmt=png&from=appmsg)

，但PBTS和NBTS显示迟滞效应仍大于N、O退火，并且近界面氧化层电荷仍然存在。此外，N退火在1 000~1 500℃高温中会引起界面缺陷的再生成，使得N元素对界面态密度的降低有一定的限制。Wang Menghua等使用超临界N2O流体( SCN2O )改善SiC/SiO2界面缺陷，经过SCN2O后氧化退火，界面态密度显著降低，栅氧化层临界电场相比N2O退火增加了18.19%，并且此工艺在120℃低温下进行，减少了因高温氧化退火中SiC/SiO2界面不稳定而产生的新缺陷。综上所述，N退火技术有效地提升了栅氧界面质量，提高了沟道迁移率和沟道电阻，然而近界面陷阱电荷的存在导致退火后SiC MOSFET的BTI效应依旧未得到显著改善，这对于提升SiC MOSFET栅氧长期可靠性仍具有一定的限制。除N元素退火提升SiC MOSFET的栅氧界面缺陷技术外，磷和硼元素掺杂也可显著降低器件界面态密度。Okamoto D等和Yano H等将器件置于POCI3环境中高温退火，使得导带边缘附近的界面态密度降至  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3jibMh6ODicpmyy7CgIWCbmiaUPMVPILJb6pX2SjN5hiblGVW67UfT5S6Cw/640?wx_fmt=png&from=appmsg)

  
，并且近界面陷阱密度对比N、O退火技术更低，但在高温、高栅压下的Vth漂移量更大，这源于更多的氧化层陷阱电荷的生成。而具有更小原子质量的硼元素，在通过钝化工艺降低SiC MOSFET栅氧界面陷阱密度的同时，能够降低与氧原子结合的强度，促进氧化物中的应力松弛，以增强栅氧质量。

4.2 高k材料

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnEuB3ctPKI0VXg39bDZwia3rsTRMboemPGAWK075UMhVUHoH56V22F1tz4kpfzKE4svF0ubiaRaB2g/640?wx_fmt=png&from=appmsg)

高k材料的使用可显著提升SiC MOSFET的栅氧可靠性。目前，改善SiC MOSFET栅氧化层常见的高k材料有Al2O3、HfO2和ZrO2等，图11表明这些常见的高k材料具有较大的禁带宽度，能与SiC带隙形成合适的能带排列，避免栅极泄漏电流的产生；较高的介电常数可显著降低栅氧化层电场，使得栅氧被击穿的风险大大降低，同时栅氧电场的降低可减小栅氧化层的厚度，减少成本，提升栅开关的速度。目前，使用高k材料的方法是将较薄的SiO2夹在高k材料和SiC之间形成复合栅氧化层，可将SiO2厚度减小至约10 nm；SiO2层也可作为界面屏障，可以减少高k材料与SiC因物理性质差异而形成的界面缺陷，同时能够减轻高k材料与SiC之间产生的泄漏电流，避免在高k/SiC界面发生化学反应。HfO2具有20~25的介电常数，尽管可以降低栅氧电场，但其能带带隙与SiC之间的势垒高度偏差较低，容易发生栅漏电流，造成栅氧化层退化，因此常用来与其他高k材料复合以减少栅漏电流效应。大多数高k材料的局限性在于400~700℃的制造过程中亚氧化物的形成，这种中间副产物被证明对SiC MOSFET栅氧可靠性是有害的，表现为栅泄漏电流增大。

4.3器件的结构优化

结构优化主要通过改变SiC MOSFET的器件结构以提升其栅氧可靠性。目前，平面栅结构优化最新研究表明，使用额定电压1200 V嵌入源场板的分裂栅SiC MOSFET结构，可以将传统结构的栅氧电场从3.86 MV/cm降至2.64 MV/cm，从而提升了阻断电压，并且开关损耗相比于传统平面型器件降低了25%。针对双沟槽器件拐角处的电场集中，有研究者使用足够深度的双p型基区掺杂结构改善1200 V沟槽型器件的栅氧可靠性，较深的p型基区掺杂可保护沟槽拐角处的栅氧电场，增强SiC MOSFET的击穿电压。此外，一种反向沟道的SiC MOSFET沟槽型器件新结构被提出，当器件关断时，栅氧被接地的p屏蔽层所保护，未受到显著的影响，并且开关损耗降低了64.5%。上述器件结构优化虽然可降低SiC MOSFET工作时的栅氧电场强度，但是实际生产工艺的成熟度和商业化仍需要较长的一段时间。

5. 结论

本文通过对近年来国内外SiC MOSFET栅氧可靠性研究成果的梳理和分析，较全面地综述了SiC MOSFET栅氧可靠性的研究现状。首先，介绍了目前SiC MOSFET栅氧存在的主要问题，并对TDDB、HTGB和AC-HTGS在内的栅氧质量评估方法进行了总结与对比。然后，对SiC MOSFET在极端工况下的栅氧可靠性进行分析，研究结果表明，包括重复短路、重复UIS、重复浪涌在内的极端应力会造成器件栅氧静态参数退化和封装退化，主要表现为Vth和Ron的退化。最后，为提高SiC MOSFET栅氧质量，氮退火、高k材料和器件结构优化等栅氧质量提升方法被整理和分析，结果表明这些方法虽然在一定程度上提高了SiC MOSFET的栅氧质量，但由于其自身的局限性，使得改善器件长期的可靠性具有一定的限制。

综上所述，本文针对SiC MOSFET器件目前存在的栅氧可靠性问题进行了归纳与总结，可以为此方面的研究提供一个全面的认识和理解，但同时认为SiC MOSFET器件栅氧高缺陷密度形成机制及其极端应力下栅氧损伤失效机理在物理本质上的认识仍不明确，如何降低和抑制SiC/SiO2界面缺陷的产生是突破SiC MOSFET器件栅氧可靠性问题的根本所在，只有揭示栅氧界面缺陷形成机理并拥有更加有效的生产工艺，才能彻底地解决SiC MOSFET器件的栅氧问题。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)