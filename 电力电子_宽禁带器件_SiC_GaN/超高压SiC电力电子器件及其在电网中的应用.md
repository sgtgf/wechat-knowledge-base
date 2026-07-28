# 超高压SiC电力电子器件及其在电网中的应用


> 原文地址: [https://mp.weixin.qq.com/s/SXE3mnooyKpvsfNPT6tExw](https://mp.weixin.qq.com/s/SXE3mnooyKpvsfNPT6tExw)

**文章来源：**智能电网

**作者：**邓小川1，谭犇 1，万殊燕 1，吴昊 2，杨霏 2，张波 1 (1. 电子科技大学 微电子与固体电子学院，四川省 成都市 610054； 2. 全球能源互联网研究院，北京市 昌平区 102209) 

**摘要：**碳化硅(SiC)作为近年来备受关注的一种宽禁带半导体材料，具有宽禁带、高临界击穿电场、高热导率以及高电子饱和漂移速度等良好的物理和电学特性。宽禁带半导体SiC电力电子器件，突破了传统硅基器件在耐压、工作频率以及转换效率等方面的性能极限，从而使电力系统功耗降低30%以上，在“大容量柔性直流输电”、“高效高体积功率密度电力电子 变压器”等未来新一代智能电网领域具有非常广泛的应用前景。首先介绍超高压碳化硅电力电子器件在智能电网中应用的重 要性，对近年来国内外超高压碳化硅电力电子器件(>10 kV)的结构设计、研制水平、最新进展以及其面临的挑战进行分析总 结，并对超高压碳化硅电力电子器件在智能电网中的应用及未来的发展前景做出概述与展望。

  **关键词：**碳化硅；超高压；电力电子器件；智能电网 

**0 . 引言**

以碳化硅(SiC)和氮化镓(GaN)为代表的第三代 半导体材料具有非常显著的性能优势和巨大的产 业带动作用，欧美日等发达国家和地区都将发展碳 化硅半导体技术列入国家战略，积极投入巨资支持 发展。随着SiC衬底、外延材料、工艺制造技术的 改进，器件性能和生产成本不断降低。SiC电力电 子器件打破了传统Si器件由于材料特性极限所造成的性能瓶颈，推动着电力电子技术领域的革新与发展。 

当前，传统电网正向以电力电子技术广泛应用 为代表的智能电网方向发展。以未来电力电子变压 器的核心应用为代表，对超高压大功率器件提出了更高的性能要求。碳化硅(SiC)器件具有高耐压、大电流、高频率、低损耗等优势，大大推动了设备小 型化、轻量化、高效化、低能耗的发展，因此，高 压大功率SiC材料及器件的实用化将决定电力电子设备的发展未来。 

但是，由于工艺不成熟、国外技术垄断、采购困难以及SiC材料本身带来的一些缺陷，大大限制 了我国智能电网所需的超高压SiC电力电子器件的 发展。因此，必须充分认识和了解国内外目前超高 压SiC电力电子器件的发展现状、设计思路、制造技术以及其在智能电网中的应用，投入人力物力加快发展，全力赶超。 

**1.  超高压SiC电力电子器件发展现状** 

对于10KV超高压SiC电力电子器件，一些工艺难度较低的器件，如PiN二极管、肖特基势垒二极管(SBD)等，发展较早，正趋向成熟；对于栅控器件，如MOSFET、IGBT，由SiC材料所带来的一些问题，如栅氧界面态密度高、沟道迁移率低、器件 可靠性差等，随着近年来材料及工艺技术的提高， 逐渐获得解决和完善，尽管起步较晚，但是发展迅速。本文将重点针对近年来国内外智能电网用10kV以上SiC二极管(PiN、SBD、JBS与MPS)和晶体管 (SiC MOSFET与IGBT)的器件结构、技术手段、发展现状来阐述超高压Si C电力电子器件的设计思路及其性能特点。 

做为首个超过10kV的SiC功率整流器，该研究对未来超高压SiC功率器件的发展具有重要的意义及借鉴作用。但是，MESA结构的缺点在于斜面 角度与掺杂浓度需要进行优化，而且实际工艺中往 往受到氧化层间电荷的影响。另一方面，器件击穿电压对于单区JTE区的掺杂浓度范围很敏感，因此在实际工艺中，要获得最大击穿电压对应的最优JTE掺杂浓度非常困难。因此，近年来国内外学者不断优化改进JTE终端结构，进一步提高了SiC PiN 二极管性能。

**1.1  超高压SiCPiN二极管** 

国外对于Si CPi N二极管的研究始于20世纪90 年代，凭借其简单且成熟的工艺优势，SiCPiN二极 管成为SiC电力电子器件的主力之一，尤其在超高 压领域的研究已较为成熟。通过不断优化与改进结 终端技术，SiCPiN二极管成为目前超高压领域发展 最完善的电力电子器件。 

2001年日本关西电力研究中心和CREE共同报道了耐压达到12~19kV的MESA-JTE结构的SiC PiN二极管，成为世界上首个超过10kV的SiC功率整流器。器件通过结合MESA与单区JTE两种结终端技术，从而降低边缘电场集中效应，提高了器件击穿电压。   

对于不同外延层浓度与厚度的SiCPiN二极管 (A：N-漂移区掺杂浓度![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkqQ6bSicZ411hssUDKdiceHyiagIgS4DKWNSjobKn7QxL6ZJzxYPbp6OHA/640?wx_fmt=png&from=appmsg)，厚度120μm； B：N-漂移区掺杂浓度![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQk9zXiaPic83LMjSw3vAfL1FuZgRBAXicTMCrLibprXbGoZjqUn2ldibrDLOg/640?wx_fmt=png&from=appmsg)，厚度200μm)， 击穿电压分别达到了14.9kV与19kV，100A/cm2 时导通压降UF分别为4.4 V与6.5 V，关断延迟仅为商业化400V耐压的Si基PiN二极管的1/4，动 态损耗大大降低，如图1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkOcYrnWMCYlHRfSrVZIDTpcjr2yjZAoZd9hz9VDoxWhwqSsmtkRQI6w/640?wx_fmt=png&from=appmsg)

2015年，Naoki Kaji等人通过结合间距调变 JTE(space-modulated JTE，SM-JTE)与双区JTE(double zone JTE)结构，研制出了一种击穿电压超过26.9kV的SiCPiN二极管，是目前报道的击穿电压最高的SiC电力电子器件，如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkev5eXR85FvOw5of7yicYOhlGKuFic9HR9icSJgcRkNQztqFdwqASDW2vQ/640?wx_fmt=png&from=appmsg)

新结构通过优化SM-JTE的宽度与间距，降低了单区JTE 边缘处的电场集中现象，从而克服了传统单区JTE 存在的优化掺杂浓度范围窄的缺点。同时，与传统 双区JTE结构相比，JTE区同样只需要2次离子注入，没有增加工艺步骤与难度。该结构器件特性如图3所示。一方面，相比传统单区JTE与双区JTE 结构，新结构JTE优化掺杂浓度范围显著扩宽；另 一方面，当N-区厚度分别为98 μm和268 μm时二 极管的击穿电压超过13kV和26.9kV，达到了理论平行平面结击穿电压的70%，同时差分导通电阻 分别为1.87mΩ·cm2及9.7mΩ·cm2，正向压降分别 为3.1V和4.72V，在保证优良正向导通特性的条 件下，大大提高了器件的击穿电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkE7p1cGmNuzXjOq8mGVjytuO3leQ1icniaNTBCtcFWlWaPjCNXb5v1fGA/640?wx_fmt=png&from=appmsg)

**1.2  超高压SiC SBD二极管** 

肖特基势垒二极管(schottky barrier diode，  SBD)是一种金半接触的整流器件，SiC SBD相较于SiCPiN二极管，其主要优势在于导通压降只有1V左右，仅为PiN二极管的1/3，大大降低了器件的导通损耗。但是，金半接触也导致其反向耐压较低， 泄漏电流较大，如今商业化的SiC SBD大多在千伏量级，对于10kV以上的超高压领域，目前国内外的研究均较少。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkVmpUxIicax5X5uKP3eAnSoY5CBre9FSze3LVab7lSUDUlcOM8MPv8AA/640?wx_fmt=png&from=appmsg)

2003年，赵建华等人报道了首个10kV SiC  SBD二极管。该器件的终端利用刻蚀与外延生长形成多级JTE结构，如图4所示。二极管击穿电压为10.8 kV，电流密度48 A/cm2时正向导通压降为6V，比导通电阻187mΩ·cm2。器件的缺点显而易见，反 向泄漏电流较大。

**1.3  超高压SiC JBS与MPS二极管** 

JBS与MPS二极管结构上类似，均是结合PiN 高耐压大电流与SBD低导通压降、高开关速度的优点，其区别在于：JBS二极管选用肖特基势垒较低的金属接触，漂移区较薄，导通时仅SBD部分参与导电，关断时PN结反偏形成耗尽层承受耐压， 多用于低压领域；而MPS选用肖特基势垒相对较高的金属接触，漂移区较厚，导通时SBD与PiN均参与导电，多用于高压领域。JBS与MPS的综合性能均高于单一PiN和SBD器件，且工艺难度不大，因此，在超高压应用领域，SiC JBS与MPS二极管扮演着重要角色。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkrqZxP8ibeWyvicBN4ibRYcuNtolH11f9rXruG9yicYxPP0SvzP1rJLvlkg/640?wx_fmt=png&from=appmsg)

2008年Brett A. Hull等人报道了芯片面积0.88 cm2的10kV SiC JBS整流器，如图5所示。在室温下，SiC JBS二极管正向电流10A时导通压降低于3.5V，并且耐压10 kV时的反向泄漏电流小于10 μA。

2017年Hiroki Niwa等人报道了一种超高压混合结构的SiC MPS二极管。如图6所示，该结构源区部分结合了PiN二极管与JBS二极管，在正向偏压较低时，JBS中的SBD部分导通，当正向偏压达到SiC PN结内建电势时，PiN区导通，终端部分结合了MESA、单区JTE以及SM-JTE结构。其中单区JTE负责优化PiN区边缘处PN结的电场集中， SM-JTE则优化JBS区边缘处电场集中，同时扩宽 JTE优化掺杂浓度的范围。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkLXK41yxGzJibNpEEbiaewPmEoaD2k4c0l49zWtZzJom16l5UnXLn8VuA/640?wx_fmt=png&from=appmsg)

 器件特性如图7所示，其中PiN与JBS区宽度 均为100μm，终端区为500μm，源区总面积为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkA8Im2fB1o5uXklxEundMSPPWAnpzGg2ureTDJiczUZx25Rd2Z9WhT3Q/640?wx_fmt=png&from=appmsg)。在正向导通电流密度50A/cm2时二极管导通压降为4V，反向阻断电压11.3kV。该研究表明MPS同样具有优良的正向导通以及反向阻断特性，在超高压领域具有巨大潜力。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkSWy9WLpTu1quSfJR8KjuhxOpKQ8ouhW9BYaeYo1leJcEf5x8bU3vpQ/640?wx_fmt=png&from=appmsg)

 **1.4  超高压SiC MOSFET与IGBT晶体管** 

金属氧化物场效应半导体(MOSFET)与绝缘栅 双极型晶体管(IGBT)均是栅控型电力电子器件，其输入阻抗高、温度稳定性好、安全工作区大，是目前中高压领域发展的主流器件，尤其IGBT更是结合了MOSFET与BJT的优点，在高压大电流应用领域远超其他器件，是目前发展最为迅速的功率器件。同样，在10kV领域，SiC MOSFET与SiC IGBT相比传统器件具有巨大优势。一方面，SiC MOSFET 与SiC IGBT大大降低了功率损耗，减少了系统元器件数目，简化了电路拓扑结构，提高了效率。另一方面，超高压SiC MOSFET与SiC IGBT为一些受到Si材料极限限制的应用领域，如固态电力电子变压器，提供了扩展发展空间的途径。由CREE公司设计研制的10~15 kV SiC MOSFET和15kV SiC  IGBT代表了目前超高压功率器件发展的最高技术水平，并引起了国际上对于超高压SiC MOSFET和 SiC IGBT晶体管的广泛研究。 

2015年Jeffrey B等人报道了新一代的10kV  SiC MOSFET，如图8所示，对于8.1 mm×8.1 mm的器件，通过优化改进，其室温下导通电阻从第一 代的160mΩ降低至100mΩ。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkqgq1lG5D5uwiayroroaqoBGJ9MIU4ZGgOMlw9SlRTyv3lj9xkqCaWww/640?wx_fmt=png&from=appmsg)

在7kV、15A开关条件及21.5 Ω栅电阻的半桥电路中，其开关损耗20mJ，如图9所示，仅为商业化的6.5 kV Si IGBT的1/10。在3.6kV，25A应用条件下Boost电路中的6.5kV Si IGBT开关损耗达到 265m J，而应用于6kV，15A条件下Boost电路的 10kV SiC MOSFET，开关损耗仅仅6.5mJ，约为前者的1/40。测试结果表明新一代10kV SiC MOSFET凭借其低开关损耗的优势，相比商业化6.5kV Si  IGBT，可以应用在高于其10倍频率的10 kHz领域。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkQvtAWBbDibtJVTQNicKRQQUicOXuUdaTSzbMPI6tg0GUO8KHSQnVt8gVg/640?wx_fmt=png&from=appmsg)

2010年Xiaokun Wang等人首次详细报道了 耐压达到20kV的SiC IGBT晶体管，如图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQk5K2RzhESOJy1bPO1WulFEEGIDUjIEZLV9VzWdhfufjKgyMuYnCcoYA/640?wx_fmt=png&from=appmsg)

在20V栅压、300W/cm2的功率密度下，器件正向导通电流密度高达27.3 A/cm2，体现了良好的正向导通大电流特性，如图11所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkBC41L9KErd6icqwcASNjGz9zj7CTuictNfib1WLYvXKULopg1BnibSDmzw/640?wx_fmt=png&from=appmsg)

2016年，Sachin Madhusoodhanan等人对使用 15kV/40A SiC N-IGBT的三相变换器进行了研究， 如图12所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQk3HVmHVBqw45Ak8LHYC7iaquSZRn9JNtJVTsDDRIF5lWn2kr9OsduG9w/640?wx_fmt=png&from=appmsg)

 相比15kV/20A SiC MOSFET，SiC IGBT在大功率下其效率进一步提高，并且损耗大大降低，如 表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkc6CzWduqhFfBJK1jXdF5JpfLYQbdjAITm5tLWxLhmdn47iaiaFfiaoj7A/640?wx_fmt=png&from=appmsg)

图13所示为5kV、5A、175 ℃条件下15kV/40A SiC N-IGBT开关特性，其开通、关断时间分别为800ns和1.6μs，开通与关断损耗分别为9.414mJ和19.03mJ。测试结果表明，15kV SiC  IGBT在安全工作结温、开关时间及损耗上均优于商业化6.5kV Si IGBT，对于高频高压领域具有巨大的应用前景。与15kV/20A SiC MOSFET相比， 在大功率应用下，损耗更低，性能优势更显著。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkpoNSMNBuIAhzpLsEc9pekTyxPiaTGKoJQkyyCKMPUNic0qKmp8BHkLicQ/640?wx_fmt=png&from=appmsg)

**2 . 超高压SiC电力电子器件在智能电网中的应用** 

未来智能电网要求电力电子装置具有更高的电压、更大的功率容量以及更高的可靠性。SiC电力电子器件打破了传统Si基器件的局限性，无需复杂的串并联及拓扑结构，降低了装置成本，提高了可靠性。同时SiC器件还具有高频和高效的优势， 为未来智能电网的发展提供了驱动力，并在近二十年来取得迅速发展。

**2.1  SiC器件在电力电子变压器中的应用** 

电力电子变压器与传统变压器相比具有重量轻、体积小、单位功率因数高等优点。随着分布式发电系统、智能电网技术以及可再生能源的发展， 面向智能电网的电力电子变压器逐渐发展为具有电气隔离、可再生能源并网接入等多种功能的智能化电力电子设备。然而，早期电力电子变压器的理 论和实验研究受到当时大功率器件和高压大功率变换技术发展水平以及Si基器件材料性能极限带来的开关频率的限制，未能实用化。随着10kV以上SiC电力电子器件的出现，电力电子变压器的研究取得了新的突破。 

2009年WSung等人报道了15kV SiC  IGBT，打破了传统Si基功率开关器件的频率限 制，使固态变压器取代传统配电变压成为可能。如图14所示的FREEDM系统中，15 kV SiC  IGBT将被用于固态变压器技术中，取代系统中变压器和配电控制，实现可再生能源的发展，提高电能质量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkFia1GD35RkXl806j9pwZJtxQdcRsCNiaibibZyMTW6ehutia1Vx71yiaKfhA/640?wx_fmt=png&from=appmsg)

 2014年J. W. Palmour等人报道了15kV SiC  MOSFET，与商业化6.5 kV的Si IGBT比较，如表2所示，击穿电压高2倍多，且开关损耗仅为其1/30。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkkUnCSmbBNOcKDeBXRfhLYLBgAr1WOKkgBEibY4Ahv3Q5eIzh6Ffe5zQ/640?wx_fmt=png&from=appmsg)

15kV的SiC MOSFET和JBS被应用在第二代电力电子变压器中，与第一代采用6.5 kV的硅基 IGBT电力电子变压器(如图15所示)相比较，不再使用复杂的器件或拓扑串联结构，开关频率由原来的1kHz提升至20kHz，开关损耗大大降低，并且可靠性大大提高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkZXc1vaW61suCe5MysrpKUAzqj2zjBvzuk2cZAJXnMlRmW9WNQhICEQ/640?wx_fmt=png&from=appmsg)

**2.2  超高压SiC器件在直流及交流断路器中的应用** 

直流断路器凭借其高速的开关特性和方便的控制能力，以及瞬时、高频、低损耗和高安全性的特性得到了广泛的关注。15kV SiC ETO器件被应用于直流断路器，如图16所示，实现了9kV/50A下的可靠性工作。在大容量柔性直流输电技术发展的推动下，超高压大容量SiC器件在未来直流断路器的应用中必定具有光明的应用前景。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkvtyGID5NdG5edHTVkeKjHnibEOpZhaRo9uFqC0WBSRibPqW8D9mWniccA/640?wx_fmt=png&from=appmsg)

交流固态断路器的主要特点就是快速性和可靠性，对电网故障的快速检测系统起着十分重要的作用。目前已有研究者提出基于15kV SiC ETO 及15kV PiN二极管的混合交流断路器，如图17 所示，实现了中压领域超过100A的故障电流条件下，4ms内快速断路。相比传统机械断路器40~100ms，速度提升了一个数量级，大大提高了交流固态断路器的快速性和可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskD7vibZ4gJ0K5jc9Xu8ZYQkg0c3YetvSqxq6d64bJZdZAIU8DIWBBFcLLNfTz9eUAJQfRcGwYFxMQ/640?wx_fmt=png&from=appmsg)

 **3.  结论** 

本文介绍了目前10kV以上超高压SiC几种主要电力电子器件的发展现状、设计思路以及在智能电网方面的应用和未来的前景展望。大量研究表明，超高压SiC电力电子器件具有良好的性能与巨大的潜力，尤其栅控型SiC MOSFET和SiC IGBT器件，在未来电力电子系统中必然拥有巨大的应用市场，近年来更是发展迅速。目前国内研究单位已经开展了超高压SiC电力电子器件研究，虽然与国外先进水平有一定差距但是正在缩小，因此更需要吸取国外先进技术及经验，积极进行超高压SiC器件在电网系统中的应用验证开发，进一步拓展我国超高压/特高压输变电领域在国际上的优势地位。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)