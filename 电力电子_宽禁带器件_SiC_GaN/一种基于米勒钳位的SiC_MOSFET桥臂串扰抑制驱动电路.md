# 一种基于米勒钳位的SiC MOSFET桥臂串扰抑制驱动电路


> 原文地址: [https://mp.weixin.qq.com/s/eJOg5EbV\_c41e\_kCIClegQ](https://mp.weixin.qq.com/s/eJOg5EbV_c41e_kCIClegQ)

文章来源:电工技术学报

作者：刘飞、杨旭、阮新波（南京航空航天大学多电飞机电气系统工信部重点实验室南京 211106）  

摘要：SiC MOSFET 因具有开关速度快、耐压高、热导率高等优点而得到广泛应用。然而，其高速切换特性也给驱动带来了串扰问题，严重影响了系统的可靠性。因此，该文提出一种基于米勒钳位的 SiC MOSFET 驱动电路，可有效抑制桥臂串扰电压。首先，分析桥臂串扰的形成原因，从寄生参数和工作模式两个方面，揭示了桥臂串扰的影响因素；其次，提出一种基于米勒钳位的新型桥臂串扰抑制驱动电路，并分析其工作原理；在此基础上，提出驱动电路的参数设计准则； 最后，对所提驱动电路进行实验验证，实验结果证明了所提驱动电路对串扰抑制的有效性。  

关键词：SiC MOSFET 、米勒钳位、驱动电路、桥臂串扰

0.引言  

SiC MOSFET 具有的导通电阻小、热导率高、开关速度快、耐压高等优点，为进一步提高电力电子变换器的开关频率、变换效率和功率密度创造了条件，从而被广泛应用于可再生能源发电系统、 电动汽车、轨道交通等高压中大功率领域。桥式变换器为电力电子变换器的主要形式，当SiC  MOSFET 应用于桥式变换器时，在上桥臂开通瞬态过程中，下桥臂的米勒电容会产生一个米勒电流， 并在下桥臂栅源级之间产生串扰电压。如果该电压的峰值超过了下管的开通阈值电压，那么上、下桥臂就会同时导通，造成功率回路短路，由此损坏开关管，降低了电力电子变换器的可靠性。随着开关速度的提高，开关管的电流变化率di/dt和电压变 化率dv/dt逐渐增大，桥臂串扰问题愈发突出，严重阻碍了电力电子变换器的高频化发展趋势。  

为了抑制桥臂串扰，国内外学者针对SiC  MOSFET 的驱动电路进行了大量研究，且主要分为以下三类。  

第一类：通过增大驱动电阻或并联栅源极电容，以增大栅源极阻抗。这种无源方式实现简单，但会增加开关损耗或降低开关速度。为此，有学者提出采用有源的方式调节栅源极阻抗。文献\[8\]提出一种基于可变栅极电阻的驱动电路，该电路可兼顾串扰抑制和开关损耗，但需要额外的控制信号。文献\[9-10\]提出利用辅助开关来调节栅源极间的等效电容值，从而有效抑制串扰。然而，辅助开关及控制器的引入增加了电路的复杂性，并且串扰抑制的效果依赖控制器的精度，如果辅助开关存在较大延迟（尤其是在高频工作场合），将会影响串扰的抑制效果。  

第二类：采用负压关断方式来抑制串扰。文献\[11\]提出了一种RCD（Resistor-Capacitor-Diode,  RCD）电平移位器，可以自主产生SiC MOSFET 关断所需的负电压。文献\[12\]在RCD 电平移位器的基础上，加入了串扰吸收电路，在不同母线电压和电流工况时，都能够在保证开关速度的前提下有效抑制串扰电压。这种负压关断的方式可以有效抑制正向串扰，但在负向串扰来临时，该负压会使负向串扰变大，导致开关管损坏。文献\[13\]提出了一种可变门级电压的方法，在负向串扰到来前，将负压提高至0 V，从而抵消负压尖峰带来的影响，由此改善了负向串扰。然而，在负压变化的过程中，栅源极电压会产生振荡，增大了电路的关断损耗。  

第三类：利用米勒钳位原理来抑制串扰。该方法的本质是在开关管开通和关断瞬间，额外地为米勒电流提供一个低阻抗路径，从而实现米勒电流的分流，减小串扰电压。文献\[14\]提出一种被动米勒钳位方法，利用驱动电阻两端的电压来被动控制辅助三极管导通，为米勒电流提供低阻抗释放路径，从而抑制桥臂串扰。该电路无需额外的控制信号，但辅助电阻与栅极驱动回路的稳定性密切相关， 其选取较为敏感。为了获得更好的串扰抑制效果，有文献提出将米勒钳位与负压驱动相结合的方法。文献\[15\]采用三极管分别构造出两条低阻抗回路，并通过负压关断实现了对正向和负向串扰的分别抑制。文献\[16\]同样采用两条低阻抗回路实现米勒钳位，并通过有源方式实现负压关断。但是，该方法采用了较多的有源器件，增加了电路的复杂度和成本。  

综上所述，通过增大驱动电阻和并联栅源极电容值可有效抑制串扰，但会增大驱动损耗或降低开关速度，采用有源的方式可以等效调节栅极阻抗，但其串扰抑制效果很大程度上依赖控制器的精度。负压关断方法可以有效抑制正向串扰，但要求精准控制负压的提供时间，否则将会增大负向串扰。基于米勒钳位原理，利用有源器件构造出串扰电流释放的低阻抗路径，这种方法虽然增加了器件数量，但可以达到较好的串扰抑制效果。  

本文基于米勒钳位原理，并结合负压关断方法，提出了一种新型SiC MOSFET 桥臂串扰抑制驱动电路。该电路通过在MOSFET 的栅源极并联一条低阻抗支路来分担串扰电流，同时利用栅极电容的充放电提供负压驱动，有效地抑制了SiC MOSFET 的桥臂串扰。在此基础上，给出了所提驱动电路的参数设计准则。最后，对所提驱动电路进行仿真和实验，验证了其对桥臂串扰抑制的有效性。  

1.桥臂串扰的形成机理及影响因素  

1.1桥臂串扰的形成机理  

电力电子变换器以桥式电路最为典型，本文以基本的同步整流Buck 变换器为例来分析桥臂串扰的形成原因。图1 给出了上桥臂开关过程电路及关键波形，图1 中，Rg（Rg-H 和Rg-L）为栅极驱动电阻，Cgs（Cgs-H 和Cgs-L）、Cgd（Cgd-H 和Cgd-L）、Cds（Cds-H 和Cds-L）分别为栅源极电容、栅漏极电容和漏源极电容，Cgd 也称为米勒电容，Lg（Lg-H 和Lg-L）、Ld（Ld-H 和Ld-L）、Ls（Ls-H 和Ls-L）分别为栅极电感、漏极电感和源极电感，下标“H”表示上桥臂，下 标“L”表示下桥臂，RLd 为负载电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOpSlFMSp68L69CAOjl0KImRhflpphYPvziaDjiazKTJaou4GPxHJlLsZMuhAOsxUlsjibb50euk64lX1hNXBlc3gIAOgEh3g3pKY/640?wx_fmt=png&from=appmsg)

上桥臂开通过程可以分为四段，分别为t0～t1、t1～t2、t2～t3 和t3～t4，其关键波形如图1b 所示。在t0～t1期间，上管Q1门极电压上升至阈值电压Vth， 到t1 时刻，上管开始导通。t2～t3 期间，上管驱动进入米勒平台，上管漏源级电压Vds-H 从Vin 下降为零，下管漏源级电压Vds-L 从零上升至Vin，该时段内， 米勒电容Cgd-L 进行充电，在图1a 驱动回路产生虚线箭头所示的位移电流Igd。该电流流经下桥臂栅极驱动电阻Rg-L 使其产生栅源级电压，如果此电压峰值超过下管的开通阈值电压，上下桥臂就会同时导通，造成功率回路短路。t3 时刻米勒平台结束，随后Vgs-H 上升至VgH\_max，上管Q1 进入稳定导通阶段。  

上桥臂关断过程与开通过程类似。在t6～t7 期间，上管驱动进入米勒平台，下管漏源级电压下降至零，随后米勒电容Cgd-L 开始放电，在图1a 产生实线箭头所示的位移电流，在下桥臂的栅源级两侧产生一个负向的尖峰电压。该串扰电压虽然不会使下桥臂器件误导通，但是由于器件本身有最大栅极负偏压的限制，当该负向串扰电压过大时，就会使开关管反向击穿，降低其可靠性。  

以上为上桥臂开关过程，同样地，下桥臂开关过程也存在串扰问题，由于原理类似，此处不再赘述。  

1.2桥臂串扰的影响因素  

影响桥臂串扰的因素主要包括封装形式、技术指标、寄生参数以及工作模式等。其中，封装形式一般由厂家确定，当器件型号确定时，封装形式对串扰的影响也基本确定。技术指标和实际工作条件（如功率、电压、电流、频率等）根据运行需求给定，一般不可改变。而寄生参数和工作模式则可在设计时进行优化，因此，本节从寄生参数和工作模式两个方面研究串扰的影响因素。  

1.2.1寄生参数对桥臂串扰的影响  

当SiC MOSFET 应用于高频场合时，寄生参数的影响不可忽略。对于寄生电容Cgs、Cgd 和Cds来说，它们属于SiC MOSFET 中固有的寄生参数， 通常不会因布局而改变。因此，本文主要分析寄生电感Lg、Ld 和Ls 和栅极驱动电阻Rg 的影响。  

对于栅极电感Lg 来说，其感抗一般远小于栅极驱动电阻，且栅极回路中的电流幅值较小，因此其对串扰的影响可以忽略。对于漏极电感Ld 来说，其感值和Lg 接近，且不在驱动回路中，因此其对串扰的影响也可以忽略。而对于源极电感Ls 来说，其属于栅极和功率环路交叉的共源寄生电感，对SiC器件高频特性影响最大，需着重考虑。具体来讲，当上桥臂开通时，下桥臂的正向串扰电压主要由其体二极管续流电流在Ls 上产生的感应电压引起，在该段时间内，下桥臂开关管的漏源极电压快速上升，会在其Cgs 上形成较大的正向串扰电压，且串扰电压随着Ls 的增大而增大。当上桥臂关断时，下桥臂开关管的漏源极电压快速下降，同样也会在其Cgs上形成负向串扰电压，但是，由于漏级电流与负向串扰电流方向相反，会抵消负向串扰电压，因此负向串扰随着Ls 的增大而减小。图2 给出了寄生电感对串扰电压影响的仿真结果，可以看出，Lg 和Ld几乎不影响串扰电压，而Ls 对正向串扰和负向串扰的影响作用相反。需要说明的是，随着Ls 的增加， 其与米勒电容的谐振周期增加，因此串扰电压产生的时间略微增加。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNp9bibewvke2xY3gGzicDsNWHbaaRWjhticu8ibUhv3dMXFOARrJLhibHEfA8eMk973NHVNxQ0l7OBe7DyrEUh7z1vdQ1PnVK3oCFo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO4DOofdFfvAlques6gbFdv3ELqicSPc1WIRsfqAlBrG1IeYBKMGuYKavkw3REibHrZr3XfY22wKWibjYExC6TLdmvwBP02xicap0c/640?wx_fmt=png&from=appmsg)

对于栅极驱动电阻Rg 来说，其包括内部电阻Rg(in)和外加驱动电阻Rg(ex)两部分，Rg(in)由SiC MOSFET 内部结构决定，一般远小于Rg(ex)，因此有Rg≈Rg(ex)。Rg 越大，对驱动回路振荡的阻尼效果越好，但会增大串扰电压；反之，减小Rg 可以减小串扰电压，却削弱了对驱动回路振荡的阻尼效果。因 此，在选择驱动电阻时，需要折中考虑对串扰的影响和驱动回路的阻尼效果。由图2 可知，随着Rg的增大，驱动电流减小，进而使开关速度降低，因此串扰电压产生的时间也略微增加。

1.2.2工作模式对桥臂串扰的影响  

不同工作模式下，桥臂串扰也不相同，本节分析其影响，进而为工作模式的优化选择提供依据。 图3 给出了同步整流Buck 变换器的关键波形。 在t1～t2 时段，上桥臂开关管Q1 导通，电感两端电压为Vin−Vo，电感电流线性上升。t2 时刻，Q1 关断， 随后电感电流给Q1 的结电容充电，同时给下桥臂开关管Q2 的结电容放电，到t3 时刻，Q2 的结电容完成放电，Q2 可以实现零电压开通。在t3～t4 时段，Q2 导通，电感两端电压为−Vo，电感电流线性下降。 在t4 时刻，当电感较小时，电感电流脉动较大，该时刻电感电流为负，可以完全实现Q1 结电容的放电，从而实现Q1 的零电压开通，即Q1 工作在软开关模式，如图3a 所示；而当电感较大时，电感电流脉动较小，该时刻电感电流为正，Q1 工作在硬开关模式，如图3b 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOYHAvmDZib8iagvsiadNCnoKGxicKtuIFtWcIDYNrX6ljm0bibib9TWqDNe7jYhibG897clM9AibqGe95p3TfZ1BXmEl9icYkHCcN5tZjU/640?wx_fmt=png&from=appmsg)

图4 给出了软开关和硬开关模式下串扰电压的仿真对比。可以看出，当Q1 工作在软开关模式时，下桥臂的正向串扰明显降低，这是因为软开关模式降低了开关时刻漏源极电压变化率，由此减少了串扰电压。需要说明的是，软开关模式时下桥臂的负向串扰略微增加，这是因为在同样的负载情况下，软开关模式下的电感电流脉动较大，导致同一时刻的电感电流大于硬开关模式下的电感电流。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNkBXQKhOo6iczBX1j16VX5oBQWQlLUib2ia0fE3dC23Tv14IgEMcVSSfeCMCZy7HOW4o1tByiaEVpZB6jiaicwtWTWeLLicxoHJLjE2Y/640?wx_fmt=png&from=appmsg)

2.新型 SiCMOSFET串扰抑制电路  

2.1新型驱动电路抑制串扰原理

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMhfEmmSFJfpkOMcobTnpbGQYQibO6W4WXVib0EOu02lFuEUC9MuJVKsG1WOTia9icrOc4NuvgNYgfmtsbuouk7gxgDdYGUyvZSRSs/640?wx_fmt=png&from=appmsg)

本文基于米勒钳位原理，结合负压关断方法，提出了一种SiC MOSFET 桥臂串扰抑制驱动电路如图5 所示，包括开通电阻R1（R1H 和R1L）、关断电阻R2（R2H 和R2L）、n 型辅助开关管S（SH 和SL）、稳压二极管VZ（VZH 和VZL）、栅极电容CN（CNH和CNL）以及防静电电阻R3（R3H 和R3L）。其中， 辅助开关管S 所在支路为构造的低阻抗回路，栅极电容CN 并联稳压二极管VZ 产生负压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPibZoM3Tvmx2ibsCQCKFoibJLGeabGziao7qySg4icq5Zr6578rbnQOYXZSl6ib4ToGgJFricqWZuWzDV75ng3ERQYLMAF5GC3U9Wl1s/640?wx_fmt=png&from=appmsg)

图6 给出了所提驱动电路的关键波形。由于上、下桥臂类似，这里以上桥臂开关瞬态为例，阐述所提驱动电路的工作原理。所提串扰抑制驱动电路的工作模态如图7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOYkRLs9A0dTaxo9rn51ibzsS45aOI0gfN1ibmRwial0iaF1icXRv9WehImNDKSw8mvw4GZDHrN3XkiapPmUWUfDWHICNfIZNQmYrs60/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMdo7kiaeHN0yLErQo1VKo9m4AWb0agRtmVly1qobdgawoHlYMnyDT21D10ZyydjMVVA8nnSOGTic02ibKaicWYnVbRl2Llre65iaEM/640?wx_fmt=png&from=appmsg)

上桥臂Q1 开通瞬态，即t1～1t′时段，对应图7a： 当VgH 达到Q1 的阈值电压时，Q1 导通，驱动电流igH 流过R1H、R2H，上桥臂驱动回路中的稳压管VZH击穿导通，二极管VDH 正向导通。Vds-H 快速减小引发的dv/dt作用于下桥臂Q2 的寄生电容Cgd-L，并产生位移电流igL，此时VgL 为负电压，使得开关管SL导通，串扰位移电流igL 经SL 构成的低阻抗回路释放。同时，CNL 左侧电压高于右侧电压，为下桥臂Q2 驱动电路提供关断负电压，从而减小正向串扰。 因此，通过结合有源米勒钳位和负压关断，可以有效抑制正向串扰电压尖峰。  

上桥臂Q1 关断瞬态，即t2～2t′时段，对应图7b：在2t′时刻，Q1 关断，CNH 的左侧电压高于右侧电压，为Q1 的驱动提供关断负压，从而加速Q1 的 关断过程。与此同时，在下桥臂的驱动电路中，由于SL 的反并联二极管支路阻抗较小，串扰位移电流igL 经SL 的反并联二极管构成的低阻抗回路释放，使得Q2 栅源极间的负向电流大大减小，从而有效地抑制了负向串扰。  

以上为上桥臂Q1 的开关过程，同样地，下桥臂Q2 开关过程也存在串扰问题，图7c、图7d 给出了Q2 开通和关断瞬间驱动电路的工作模态（这里以软开关模式为例），由于工作原理类似，此处不再赘述。  

2.2所提驱动电路的参数设计方法  

2.2.1参数设计方法  

根据所提串扰驱动电路的工作模态，图8 给出了所提桥臂串扰抑制驱动的等效模型（以上桥臂为例）。在t1～t2 时段内，Q1 导通，ig 流过R1 和R2，Cgs 被充电后其电压保持不变，此时驱动电路的等效模型如图8a 所示。在t2～t3 时段内，Q1 的触发脉冲消失，电容CN 和栅源极电容Cgs 开始放电，此时驱动电路的等效模型如图8b 所示。t3～t5 时段内，栅源极电容Cgs 放电完成，Q1 完全关断，只有CN 放电， 此时驱动电路的等效模型如图8c 所示。根据该模型，本节对驱动电路的参数进行设计。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNw0pSiah5eMY3ExSoRypWpfVEK3zZibMqjLhAyyeEU6qEutCB9BO5gKjTJMH045zWOPGBgqGicNyo1FtJZ0CgwTcZF07ayIRGvp0/640?wx_fmt=png&from=appmsg)

首先，设计防静电电阻R3H。由于静电电荷需要在短时间内泄放（通常在1 ms 之内），因此其最大值R3(max)表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMGltDdjcseGgRyH1GG77opULQUEiayIMKIcKMtulorNhGjc3rFDL18H0kHLZ69qVysxCu8qrwibfDfwhdyqSEOgfC2q1eMRSUC0/640?wx_fmt=png&from=appmsg)

式中，tdischar 为静电电荷泄放时间；Ciss 为开关管的输入电容。同时，为了避免防静电电阻过大导致栅极电压下降过慢，R3(max)也应满足

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOsT77j3S3s15bm17c7ll2eadYqy26iaSygLT2Qum0FYc1kRpvTiadzY9ehOibMncPObwj51j8CbXqnAVibI26EQ5AdcargGG9YXRw/640?wx_fmt=png&from=appmsg)

式中，toff 为开关管的关断时间。综合式（1）和式 （2），可以得到R3 的选取依据。  

其次，设计栅极电容CN。在t2～t3时段内，如图8b 所示，电容CN 和Cgs 上的电压经电阻R2 和R3释放。由于R3 的阻值较大，而R2 为关断电阻，其阻抗一般较小，因此CN 和Cgs 上的电压主要通过R2 释放，那么有

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNt3sKW0JUUwfQCxZ910GUwUUzdQ1eyTzXZEWu8SwbSibmAMbcVoNjgTBsxwbIfO9jc9tZuBuAEreQtQ5tySwrsWyS76ySYu83A/640?wx_fmt=png&from=appmsg)

由于R3 所在支路电流近似为零，根据基尔霍夫电流定律可得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMo1k3g85ANcSlhSeH5QeaFniaJfJHR9aMibYoGOTAQo9ibvTXmf2NSO1F0v9Sx08iaw4DnvOarxrUibExMsEsqP2QEkwWhfuTFTrxc/640?wx_fmt=png&from=appmsg)

根据式（5）解得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPqibMtQPibtGvmc4NpCrm9AKtM96Vrv6DbMPlJQ93NDvzDia39ZSzAHIgiaZlXgribw1YE27gsN89M3XGfD0ACzImZbrFOibccs07kQ/640?wx_fmt=png&from=appmsg)

最后，设计驱动电阻R1 和R2。根据第1 节的分析，驱动电阻越大，对驱动回路振荡的阻尼效果越好，但会增大串扰电压；反之，虽然可以减小串扰电压，却削弱了对驱动回路振荡的阻尼效果。因此，在折中选取驱动电阻时，需要在抑制串扰的同时限制驱动电阻的下限值，即满足

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNoXRzIRNoKKRrk4EkBp9tzGSobc7pficDseicaFAFiceiaPRDqic6DZjMO4K5ibVGeL1Lktq2aXmKJ6rNZj4JYia9ncarx3JiaUR5eCGw/640?wx_fmt=png&from=appmsg)

式中，Lg 为驱动回路的栅极电感，数量级一般在几十nH。  

当Q1 开通瞬间，产生的串扰位移电流会流经Q2 驱动电路的驱动电阻R2 上，为了使Q2 不发生误导通，R2 应满足

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMB6ZlWRiabK17OFmqL5icXDVswUH9NOdgPNt7a5yicUhIHF9O4qx2oNoWpibph2jYbQZZxoWB45ZH6KoA4dh5kGp5sFCQ0ibdSK9Zk/640?wx_fmt=png&from=appmsg)

式中，dvds/dt为Q1 开通时，Q2 两端漏源极间电压的变化率。

根据式（7）和式（8），可以得到R1 和R2 的选取依据。  

2.2.2设计实例  

 1）防静电电阻R3

根据数据手册查得开关管的Ciss\=1.9 nF，关断时间toff\=100 ns。为避免电荷积累，一般取静电泄放时间tdischar\=1ms，联立式（1）和式（2）解得R3(max)≤24 kΩ，这里，取防静电电阻R3\=10 kΩ。  

2）栅极电容CN  

为了提供−5 V 的负压，设置Vset\=5 V，即在t2～t5 时段内，CN 两端电压从稳压二极管电压（5.1 V） 降低为Vset；另一方面，Cgs 两端电压从驱动电压高 电平（一般为15～20 V）降低为低电平（−5 V）。 根据数据手册可知，开关管的Cgs\=1.9 nF，代入式 （6）解得CN\=0.48 μF，为了确保C1 能够提供稳定 负压且方便取值，这里取1 μF。 

3）开通电阻R1 和关断电阻R2  

根据数据手册查得，Vth\=4.5 V，Lg\=40 nH，代 入式（6）和式（7）得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNepTqxFr3MQFlHK4Wdqp5wQ9YlRrom5iap9CzpTGNxiaUdw3U77Zhp9wVYX0DjR4zjv11qVXoTltRmPk4ibrpaegcIABIHfMxZX0/640?wx_fmt=png&from=appmsg)

由第1 节的分析可知，为了提高开关速度，减小驱动损耗，R1+R2 的值应越小越好，这里取R1\=  1 Ω，R2\=1 Ω。 

4）有源器件选型  

为提供−5 V 的驱动负压，本文选择型号为BZT52B5V1S 的5.1 V 稳压二极管。为保证二极管能承受负驱动电平，选择直流反向耐压为40 V，型号为SD0805S040S0R5 的肖特基二极管。为保证辅助开关管能承受栅源极电压，选择Infineon 公司型号为IRFL4315TRPBF 的Si MOSFET，其漏源极电压阈值为150 V。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPoBGLQm8lepHibHHQewyPrgx966xDxJajQ4lNSDIjp4qmnxwpf8Nst5sLh5jGnuKOz6IqM1jdQ6IALHKFlhibngbAiamGvfzLg2o/640?wx_fmt=png&from=appmsg)

根据以上参数设计和元器件选型，表1 给出所提串扰抑制驱动电路实例中无源元件参数以及有源元器件型号汇总，供读者参考。  

3.仿真与实验验证  

3.1新型串扰抑制驱动电路的仿真结果  

为了验证所提出驱动电路的串扰抑制效果，在LTspice 软件中搭建了一台2 kW 的同步整流Buck变换器仿真模型，其技术指标和电路参数见表2。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOfRGj21Dss5W50E0YRX90g4TAAIoWK5FJMkVkibmw7UWtvBbVdnVRIKNaxZQuZoicz0B0EKibBVUUnvYrHFyh6KWvBs8SHlB1bpw/640?wx_fmt=png&from=appmsg)

图9 给出了加入所提串扰抑制驱动电路前后的仿真结果对比。图9a 为工作在硬开关模式时的仿真波形，可以看出：在同样的驱动负压（−5 V）下，未加入串扰抑制电路时，下桥臂正向串扰电压的尖峰值为−1.47 V，负向串扰电压的尖峰值为−8.85 V；加入所提串扰抑制驱动电路后，正向串扰电压的尖峰值为−4.43 V，负向串扰峰值为−5.41 V。因此，所提串扰抑制驱动电路可以有效降低正向串扰电压和负向串扰电压。图9b 为工作在软开关模式时的仿真波形，可以看出：当Q1 实现ZVS 时，几乎消除了下桥臂的正向串扰电压；此外，加入所提串扰抑制 驱动电路后，负向串扰电压的尖峰值从−11.06 V 变为−6.37 V，有效地抑制了负向串扰，验证了第1 节理论分析的正确性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpND73IYFMF188IWd1iawrNWFvLoXT7O7wx9lsXkDuuibicpOjD9rWjJSqnoRPBhPWOW47ox0X1niaYry9LVf7ict2S36uY9yTUaaLOk/640?wx_fmt=png&from=appmsg)

3.2实验验证

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPoa5wpBqlIrqWfjK1z5ukcZxJJg5pTb46iaicLLbnBuPkbdojOodSswuvjW1kPOe0QZmsh4abLrq9fGlhEGSn5P0hMlBtBzJaGM/640?wx_fmt=png&from=appmsg)

为进一步验证所提串扰抑制驱动电路的有效性，根据表1 中的参数搭建了原理样机进行实验验证，如图10 所示。其中，开关管选用Infineon 公司型号为IMZ120R045M1 的SiC MOSFET，其开通阈值电压Vth\=4.5 V，输入电容Ciss\=1900 pF，输出电容Coss\=115 pF，米勒电容Crss\=13 pF。驱动芯片选 择TI 公司的UCC20520，PWM 芯片采用TI 公司的UCC35702。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM09xr6yicA3ska6JptLVAibwvqQQqMvBkMibjuPCBZ29zk7AKeWAyichYlveUxKHlF5VTjtkYIUmibK6yyFiaPniahaaibn3Mce3FkfdY/640?wx_fmt=png&from=appmsg)

图11 给出了硬开关模式下，加入所提串扰抑制电路前的实验波形。可以看出：未加入桥臂串扰抑制电路时，上桥臂开通时在下桥臂产生的正向串扰电压尖峰值为−1.24 V，负向串扰电压为−5.39 V。需要说明的是，随着输出功率的增大，电感电流的平均值会变大，使得负向串扰进一步增加，为了防止开关管损坏，图11 中的实验仅在10%负载下进行。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPibwlNNkjtFqsibEoZGU3oE6WQcNMGUFGNyD0ZiaEPpAC11g52UMK1P5Bs7JAwNuy4LNCQwDe1KIPVLbh4PH0MLbONKCgWicvXmRk/640?wx_fmt=png&from=appmsg)

为了进一步说明该模式下桥臂串扰的恶劣性，图12给出了满载时的仿真波形，可以看出，满载时负向串扰电压已达到SiC MOSFET 反向击穿电压。图13 给出了硬开关模式下，加入所提串扰抑制驱动电路后的实验波形。由于串扰电压得到了有效抑制，该实验在满载情况下进行。可以看出，加入所提串扰抑制驱动电路后，正向串扰峰值为−3.43 V，负向串扰峰值为−6.01 V。因此，加入所提串扰抑制驱动电路可以显著降低串扰电压，这与理论分析和仿真结果是一致的。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNQ5xiaiaexlqlD9jDBoMFn7to6kGM1XC4FN6VXbb2x1qCb47AIGTol92nYS3IYQ4HKMicsE3waIOFJnOnFdib5gCxXicCQfbTlnGOA/640?wx_fmt=png&from=appmsg)

图14、图15 分别给出了SiC MOSFET 工作在软开关模式下，加入所提串扰抑制电路前后的实验波形。由于软开关模式可以降低正向串扰，因此该实验在满载情况下进行。可以看出：未加入桥臂串扰抑制电路时，正向和负向串扰电压尖峰值分别为−3.61 V 和−8.79 V；加入桥臂串扰抑制电路后，正向和负向串扰电压尖峰值分别为−4.18 V 和−8.16 V。 因此，加入所提串扰抑制驱动电路可以显著降低串扰电压；另一方面，相较于硬开关模式（见图11、 图13），工作在软开关模式可以降低正向串扰电压， 虽然负向串扰略微增大，但仍低于安全阈值，是可以接受的。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPhicazObVlWrfCwMVfSTUwJInluzevOWUSaT3PK7ribJqOWAsnPo8cE8icsWVleJnYmIZtdia7CKb9fHLhllHicsicsa2MwM6icib6qEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMQJKZMEuMN0lJ2oQrvL0xcxR1KJF39HC6ic3ibLtEpWUDBd3fz4gibTl4eXDapTOX8d6X8YsnbC6qpjq60UAbH80JW8fliaAuT6hM/640?wx_fmt=png&from=appmsg)

3.3对比与讨论  

表3 列出了所提驱动电路与其他串扰抑制驱动电路的串扰抑制效果对比。相较于改变栅极阻抗和负压关断，米勒钳位可以实现较好的串扰抑制效果， 是目前常见的串扰抑制驱动方法。在基于米勒钳位的串扰抑制方法中，文献\[14\]具有较好的串扰抑制效果，但其所用驱动低电平为0 V，正向串扰电压峰值较高，有桥臂直通的风险。文献\[15-16\]将米勒钳位电路与负压驱动方法相结合，改善了正向串扰 抑制效果。然而，其分别构造了两条低阻抗回路， 电路较为复杂。本文所提驱动电路在保证串扰抑制效果的前提下，仅采用一条低阻抗回路同时实现了 对正向和负向串扰的抑制，减少了有源器件数量和驱动电路的复杂度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMgVsRQakO4yVPQgfniaUjPMJk63WfqM8M7mBvWw7GXtQibvhfIcicZWSNF4ofOAwHGtewO6nDc7icbHw9vT4aO9pMZrCPsPeicv3Os/640?wx_fmt=png&from=appmsg)

4.结论  

本文基于米勒钳位原理，并结合负压关断方法，提出了一种新型SiC MOSFET 桥臂串扰抑制驱动电路，仅采用一条低阻抗回路同时实现了对正向和负向串扰的同时抑制。本文分析了SiC MOSFET 高频工作时串扰形成原因，从寄生参数和器件工作模式两个方面，揭示了串扰的影响因素。为了抑制高频工作时的桥臂串扰，提出一种基于米勒钳位的新型串扰抑制驱动电路及其参数设计方法。该电路在抑 制正向串扰时，一方面在开关管的栅源极并联一条 低阻抗回路为串扰电流提供释放回路；另一方面通过并联在稳压二极管上的电容对开关管栅极提供负压，在抑制负向串扰时，通过辅助开关管的体二极管分流串扰电流，实现了对正向和负向串扰的有效抑制。通过仿真与实验，验证了所提驱动电路的串扰抑制效果。本串扰抑制驱动电路为高频工作的SiC MOSFET 提供了新的设计思路，可以有效提高宽禁带半导体器件的可靠性。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMq5wqTBJZPS96PNkvI6qjLDoUCW5xQib7iafx8Naiaet6iaLiaJB1ZwZ5LWh7dryurTm8rvDhk0Q0ad4ICrdwrM2PJcrvWBibmsEWQ8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOBXgM9BK7wCSicPkyTqAavFP8JmQopaKo339YnR6trhcicjakWe8J7xmUxI7nStVOOQMGFydP8phdShpMAo9Jgb5gJEu4204Pgw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN2sibSQ0DfoQxqDhKRM7t4vuJzbRibs6EibB0iay9BQVWUfCE9xrbNhnaja9aX9goSSI8Wfw2zyyCOOO1Hgd7oicictc2PBJkBRrhMg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOVqZ4GALAq9FcJVEibavnmRKEnn45Alta1NSA9GoLHC8Eafm5ibEUUz8tB0Nm7bALuk1r4pW30a7s90vicqX2v5qbvDdibkYB4vk/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)