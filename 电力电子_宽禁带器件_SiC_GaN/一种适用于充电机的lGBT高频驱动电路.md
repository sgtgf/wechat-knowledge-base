# 一种适用于充电机的lGBT高频驱动电路


> 原文地址: [https://mp.weixin.qq.com/s/ybAJVzrneH2Gp0Zp274Jzg](https://mp.weixin.qq.com/s/ybAJVzrneH2Gp0Zp274Jzg)

文章来源：半导体技术(集成电路设计与应用)

作者：艾胜胜，李康乐，王雷，田地，许克磊，常超(西安中车永电捷通电气有限公司，西安 710016)

摘要：随着国内地铁行业的快速发展，辅助系统充电机所用绝缘栅双极晶体管(IGBT)的开关频率已经可以达到上百千赫兹，一般的驱动器已经无法满足高频条件下对驱动信号的要求，IGBT高频驱动成为当前的研究焦点。基于MOS管开关速度快的特性以及比较器高精度、良好的稳定性、灵敏性、开关等特性，设计了一款IGBT高频驱动器。比较器把接收到的驱动信号转换为两路不同的驱动信号传输至PMOS管与NMOS管，从而实现IGBT高频驱动功能。搭建实验平台，经测试IGBT高频驱动开关频率可以实现100kHz。和传统驱动电路对比，IGBT开关频率提高了50kHz，实现了IGBT开关频率高频化。研究成果对大功率IGBT及SiC MOSFET驱动技术的应用具有一定的参考价值。  

关键词：充电机；绝缘栅双极晶体管(IGBT)；高频；驱动器；欠压监测

0.引言

在现代电力电子电路中，绝缘栅双极晶体管(IGBT)以其驱动方便、高耐压、低导通电阻、高工作频率的特性而得到广泛应用，尤其是在地铁牵引、辅助电源系统中。随着国内地铁行业的发展，辅助电源系统充电机所用IGBT的开关频率已经可以达到上百干赫兹，一般的驱动器已经无法满足高频条件下对驱动信号的要求，IGBT高频驱动电路成为当前研究的焦点。  

国内外对于IGBT驱动电路的研究成果较为丰富。L．H．Chen等人。以预设的控制基准控制开关速度，从而有效地控制了电压超调和电流超调， 实现闭环栅极控制。徐鉴等人采用非典型的晶体管一晶体管逻辑电路(TTL)与门结构缩短驱动传输延迟时问，使IGBT快速开通；采用非典型的TTL与复位置位触发器(RS)结构，集成了置位功能，实现IGBT故障反馈功能。王亮亮等人设计了一款基于复杂可编程逻辑器件(CPLD)多等级控制的大功率IGBT软开关驱动电路。李心宇等人通过控制高频方波占空比代替恒定电压来控制驱动电源电压，实现了驱动电压可调的驱动电路。杨乐乐等人设计了一款除具有传统的驱动与短路保护功能外，还具有运行状态数据采集功能的驱动器。吴士涛等人基于ACPL-332J芯片设计了一款变频器全控型功率元件IGBT驱动及其故障保护电路。朱晓光等人设计了一种应用于脉冲功率系统的开关驱动电路，实现了IGBT的快速开通。S．C．Tang等人设计了一种采用无芯印制电路板(PCB)变压器的隔离软开关栅极驱动器。 该驱动器变压器驱动电路采用零电压开关(ZVS)技术，降低了变压器驱动电路中的开关损耗。贲洪奇等人利用调制解调的原理设计了一种适用于桥式变换器的IGBT高频驱动电路。综上所述，虽然驱动电路方案较多，但是驱动器驱动频率较低。A．M．Kumar等人设计了一款基于推挽转换器拓扑的高频隔离快速开关IGBT驱动电路，开关频率为10～50kHz，但是其不适用于低频驱动。  

目前常见的比较成熟的IGBT驱动器主要由ROHM、CONCEPT、CERR公司等几家大型国外厂家生产，而且现有的驱动器电路结构比较复杂，采购成本高。所以本文基于PMOS管与NMOS管高频特性以及比较器非线性等特性设计了一款IGBT高频驱动电路，比较器把接收到的驱动信号转换为两路不同的驱动信号传输至PMOS管与NMOS管，从而实现IGBT高频驱动功能。并通过实验验证了该驱动电路的高频特性。  

1.充电机工作原理  

辅助电源系统作为地铁车辆电气系统的重要组成部分，担负着除动车牵引传动系统主电路以外各种装置的供电任务。IGBT驱动板是IGBT功率器件和控制单元之问非常重要的桥梁，其功能是进行信号转换和保护IGBT。而IGBT驱动板能否可靠工作取决于IGBT驱动电路的设计是否合理，高可靠性驱动电路设计可以大幅提高整个辅助系统的可靠性。  

充电机功率模块高频化可以减小体积和质量，但会增大IGBT开关损耗。因此，需使用ZVS移相全桥开关技术(或称软开关技术)来降低IGBT的开关损耗。本功率模块主电路由移相全桥、全波整流、直流滤波及防逆电路组成，其主要功能是将DC660V变换为DC110V，充电机主电路原理如图1所示。经过对散热器热仿真及IGBT开关损耗计算，IGBT开关频率选择25kHz。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNvwfqlibDXZmtBQ4dQoaquccnZkXztpTYPgvBw8oARMO5pPSS451cicDguskBhicWRBCJgU59arUZDYE4YrpPibsXVePk4lqBaSoQ/640?wx_fmt=png&from=appmsg)

2.驱动电路结构  

传统驱动电路H桥电路易于实现IGBT栅极上电位的逆转，只需要单极性电源，即不需要负压电源。但是H桥电路的缺点是晶体管控制方法较为复杂，并需要升压电路来提高驱动峰值电流的能力。  

栅极路径中射极跟随器由双极结型晶体管组成，施加的输入电压必须比驱动电压高0.7V。驱动电路的输出电流不受晶体管限制，但受栅极电阻和引线电感的制约。  

发射极路径中的射极跟随器采用与栅极射极跟随器相同的电路拓扑和设计规则，不同的是该射极跟随器不是接在栅极，而是接在发射极。IGBT的栅极与驱动器的地相连，会阻止密勒电容和发射极电感产生的高电压变化率(du／dt)或电流变化率(di／dt)而引起IGBT误导通。  

n沟道推挽驱动器采用成本和性能的折中方案。一方面，它利用了双极型晶体管(BJT)射极跟随器的特点；另一方面，它也具有金属氧化物半导体场效应管(MOSFET)推挽驱动器的优点。它包括两个n沟道的MOSFET，比MOSFET推挽栅极驱动器更加复杂，且需要电平转换器和电荷泵来开通和关断MOSFET。  

MOSFET源极跟随器并不适用于IGBT栅极驱动系统。因为n沟道和P沟道控制需要一个比参考电压源高接近10V的栅-源电压(VGS)，因此电压转换器和电荷泵的成本相对较高。  

3.IGBT高频驱动电路关键参数  

IGBT驱动电路的参数需与待驱动的IGBT的要求相匹配，才能保证IGBT安全、可靠、高效运行。因此，设计IGBT驱动电路时，必须考虑以下因素。  

3.1 信号隔离  

为保证驱动器安全可靠地工作，工业标准要求在驱动器信号处理部分与高压功率部分实现安全可靠隔离，以减小高压部分的功率模块高速开关过程中产生的干扰而影响驱动器的正常工作，本文采用光纤隔离。  

3．2 驱动功率  

IGBT的开关过程中，驱动电路需将栅极电容充电至驱动器正向开通电压VCE,on或放电至负向关断电压VCE,off。在电压转换过程中，驱动电路、外部电阻、IGBT内部电阻回路中会消耗一定的功率，即平均栅极驱动功率PG

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMyw7dJPINLzrb6oSNuDMtJoWknRpnB27CIq2SsvzfY36T769aMpo9KMBGDWHhTMaStB5W9Clbicia4jqtrEvV3d1g6yLrsKMfeY/640?wx_fmt=png&from=appmsg)

式中：QG为IGBT栅极电荷量；f为IGBT开关频率；△VCE为IGBT驱动器正向开通电压与IGBT驱动器负向关断电压的差值，即△VCE=VCE,on-VCE,off。因此驱动器的驱动功率必须大于IGBT在最高频率下正常工作所需的功率。  

3．3 驱动电流  

IGBT驱动器设计中，输出电流非常重要。驱动电流主要包括峰值电流IGP和平均电流IG。由于IGBT的开关过程等效为电容充放电过程，因此在相同参数条件下，IGP越大，IGBT的开关速度越快，IGBT驱动器的驱动能力就越强。IGBT的IGP理论波形曲线如图2所示，IGP为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQnfv7bOkJWiab3xVvXvgibxW8K7fXKncLkGAcao0t7Xl0ONiaRkV2DaOia5uENotLjcxmmvGNVnmrOfGDiaGf0fIZVQNpVyXGgN1g/640?wx_fmt=png&from=appmsg)

式中：RGd为IGBT驱动器驱动内阻；RG为IGBT驱动器驱动电阻；RGi为IGBT内部驱动电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNvU3tdTp9uEuJabfPouaia8wdX1xQTiaussjcq2z5EGwUiaopgtaMfW5PdGrfTibJer81eRgGv7D7ibe316ic8Hp9YSgmXXMRXJBU0I/640?wx_fmt=png&from=appmsg)

IGBT驱动器的IG为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMTrqGqnib9xwfO5WLMia1LurkvQlPIQ7iaHsicjxKp5rqZiaia297ialZgWF2jfcyxVt88K8ezxY6c8Fic12ECwicUfO5j9byXV2ic0bn30/640?wx_fmt=png&from=appmsg)

式中：td为IGBT开通延时时问；tri为开通过程集电极电流IG的上升时间。  

4.lGBT高频驱动电路  

栅极驱动电路直接决定了IGBT的工作性能。图3为IGBT高频驱动原理框图，包括光电转换电路、驱动电源及欠压电路、驱动输出反馈电路、驱动信号处理电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPwD0w3BkvbTauX4z35CXjjq5WeZyk8iaYEsS8ictTDopRNUSNI3Ca5P4YwZtHA85Md0r6Xic67ESDiaibnldmtqyn6ysI39MLpXib2c/640?wx_fmt=png&from=appmsg)

4.1 光电转换电路

充电机功率模块控制单元发送的脉冲宽度调制(PWM)脉冲光信号首先经过光模块OPIC2转换为电信号，然后经过施密特反相器滤波处理。最后将滤波后的驱动电信号2输出到比较器l电路。同时，把驱动输出反馈电路反馈的电信号转换为光信号，然后通过光纤传输给控制单元。光电转换电路原理如图4所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNy327ichKl3wgl8ZSrcNKcAibhiaG3LSibbC8UqjDntL7sxGZccsYQOB1DsfmzK63g4UBRU82x5XV2TadQGeuTYibY3No5ZvTwpvVc/640?wx_fmt=png&from=appmsg)

4.2 驱动电源及欠压电路  

此驱动电源选择变压器供电，驱动电源电路原理如图5所示，图中变压器初级P1、P2电压为AC30V，开关频率80kHz，占空比为50％的方波；次级s1、s2电压为AC18V，开关频率80kHz，全桥整流电压为DC18V；T1、T2电压为AC12V，开关频率80kHz，全桥整流电压为DC12V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOMPPmhMADVp55NQNdB5Ncc7bd4mCWSt0YtaR7eFrlbVFQCs1WJmtAFicDQYRoQ3cecpgj3VtoQ3DibFCBMWl7mhsBCIFwzHe9fw/640?wx_fmt=png&from=appmsg)

IGBT栅极欠压时，功率半导体的通态损耗增加，因此要避免欠压操作。IGBT导通后的IG给定时，栅极电压越低，IGBT集电极-发射极的电压压降VCE就越大，IGBT通态损耗Pcon为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNEVicR0q3c2CzK3tx1Ako50hS9oWr5ZCytTZ2uicA2LYMZuXH7yztZVzbBEiaMECK9HpZGjPRYaoIag47yve5tXa8rZl7ibwr6weQ/640?wx_fmt=png&from=appmsg)

为了防止驱动器在电源电压低于11V时工作，驱动器必须要有低电压检测功能。此驱动电源欠压检测电路如图6所示。比较器对变压器输出整流后电压进行检测。发生欠压时，比较器输出高脉冲信号到三极管，驱动电信号2被拉低至低电平，使驱动输出为关断信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMBakasY5PTcVicU0KLHXiaE38gyDtqTywic8loZLO6pAUvW5S0lIicpjtd2tK6FfuYot1z8vYb1NKKtuZhMIBOaDp4Co6LBViazrn8/640?wx_fmt=png&from=appmsg)

4.3  驱动输出反馈电路  

IGBT高频驱动电路是开环系统，可靠性低，因此，需要给电路增加驱动输出反馈电路，以提高电路的可靠性。驱动输出反馈电路原理如图7所示。驱动输出信号与驱动电信号1比较后，比较器输出高电平为-7V，低电平为-12V的脉冲信号。光电转换模块OPIC2把此脉冲信号转换为光信号后传输给控制单元。控制单元接收到此信号后与驱动输出信号进行比较来判断驱动输出信号是否发生故障。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOAlmMhX7geqHUciasfibzJH5icmMPCCybRXQqSxLho73uXLSD7SfbD2CpAO2hosSYOwJiahKs2w6sXv7CQvt8HVIJRcFXuCDlH0NU/640?wx_fmt=png&from=appmsg)

4.4 驱动信号处理电路  

驱动信号处理电路框图如图8所示，利用三个比较器、一个PMOS开关管及一个NMOS开关管组合实现IGBT高频率开关。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUVzx6XMOP35ib6P2VwvLpic0rhN58TiaAIkiagA0m0mGMqXibia2JiczSeJrFQAfBONB0LdichMAj1IlbRSPguwumq5Vmc0jlUPY8qgY/640?wx_fmt=png&from=appmsg)

在本文中选择高电平为18V、低电平为-12V电源电压给比较器1供电；选择高电平为18V、低电平为0V给比较器2供电；选择高电平为0V、低电平为-12V给比较器3供电；PMOS管源极接18V，NMOS管源极接-12V。  

比较器1电路把光电转换电路发送的高电平为-7V、低电平为-12V的驱动电信号与阈值电压Vth1进行比较，当驱动电信号电压大于Vth1时，比较器1输出驱动电压U10(t)=18V，当驱动电信号电压小于Vth1时，比较器l输出驱动电压U10(t)=-12V。  

比较器2电路把比较器1输出的高电平为18V、低电平为-12V的驱动电压与阈值电压Vth2进行比较，当U10(t)>Vth2此时，比较器2输出驱动电压U20(t)=18V，关断PMOS管；当U10(t)<Vth2时，U20(t)=0V，开通PMOS管。  

比较器3电路把比较器1输出的高电平为18V、低电平为-12V的驱动电压与阈值电压Vth3进行比较。当U10(t)>Vth3时，比较器3输出驱动电压U30(t)=0V，开通NMOS管；当U10(t)<Vth3时，U30(t)=-12V，关断NMOS管。  

当PMOS管开通、NMOS管关断时，IGBT接收到高电平为18V的开通信号；当PMOS管关断、NMOS管开通时，IGBT接收到低电平为-12V的关断信号。  

5.实验验证  

为了验证设计的IGBT高频驱动电路的开关频率相比于传统驱动器的开关频率具有优势，搭建实验平台，如图9所示。实验平台由波形发生器、测试板、IGBT高频驱动板、AC30V电源、DC5V电源及IGBT模拟负载组成。模拟负载由电阻、电容串联组成；电容为200V、0.1μF的薄膜或陶瓷电容，电阻为0.5Ω、1W的金属膜电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnWuYx1bF0dDteGESp2K0EYX7rDXich5HcBJTAk3j9ynfRV938RKyzdUkKkyBPF2YuyBPia7szF95g2xwk74tzIbUlBKfKawusU/640?wx_fmt=png&from=appmsg)

对IGBT高频驱动电路进行测试。波形发生器向测试板输入高电平5V、低电平0V、占空比50％、频率100kHz的方波信号，测试板通过光纤收发器向驱动板发送光信号。测得的IGBT高频驱动输出测试波形如图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNWSRvG9IgrDL9c7Vm9HYp5tuWaDEJCeDn2ricJxM0ibJfEc3CjOefMa321EUQayBuhp8FDCnE4Xg7Ad20rFFEE9lfhkwEmicrb3k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOUgFUGNrn1NP71iab79WHHK2BZWLSXVaPA5lTb32teD9okZwkM1FIVLwperydCBLKSpmd2WZaxKIL2lRAdCkxtAPmj6sHb0dR8/640?wx_fmt=png&from=appmsg)

图10(a)显示驱动输出开关周期为9.96μs，开关频率为100.4kHz；图10(b)显示驱动输出开通电压为+17.6V，关断电压为-10.6V；图10(C)显示驱动输出电压从-10.6V上升到+10V，上升时间为208ns；图10(d)显示驱动输出电压从17.6V下降到-5V，下降时间为204ns。通过实验可知，IGBT高频驱动开关频率可以实现100kHz的开关要求。本文选取A．M．Kumar等人设计的开关频率最高为50kHz的驱动器进行对比实验。从图10中可以看出，本文设计的IGBT高频驱动电路相比于传统驱动电路，IGBT开关频率提升了50kHz，有效地提高了IGBT的工作频率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN6663liaAwDZQQMhCHcERtpyfokE8VN4D1OicH04PjSWEHLiaoP6caeuJxGmXLsN29ZIfvEhsmeLA0A6z77SQicwYJ9VOPndJd6Q0/640?wx_fmt=png&from=appmsg)

驱动输出延迟时问如图11所示，图中CHl波形为输入信号，CH2波形为驱动输出信号。图11 (a)显示开通传输延迟时问为980ns；图11(b)显示关断传输延迟时问为508ns。驱动输入与反馈信号是逻辑电平相反的信号。驱动反馈延迟时问如图12所示，图中CHl波形为输入信号，CH2波形为反馈信号。图12(a)显示驱动输入、反馈信号开通传输延迟时问为1240ns；图12(b)显示驱动输入、反馈信号关断传输延迟时问为840ns。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTibWROWECsiaUb85ibF2FyYgpzIbyLDaQQziaAyf1CGPunia6HJ2ibAAzm3kBQxu636XBNCf7bFicEKQ2gE7A8OicRwhp7vAq0Ic2bY4/640?wx_fmt=png&from=appmsg)

6.结论  

本文设计了一款适用于充电机的IGBT高频驱动电路，利用PMOS管与NMOS管的快速开关特性和比较器的逻辑变换特性，设计了一款IGBT高频驱动器，实现IGBT驱动高频功能。比较器把接收到的驱动信号转换为两路不同的驱动信号传输至PMOS管与NMOS管，从而实现IGBT高频驱动功能。并搭建实验平台进行验证，和传统驱动电路对比结果表明，IGBT开关频率提升了50kHz，实现了IGBT开关频率高频化。该方法简单、成本低、响应速度快。本文研究结果对大功率IGBT及SiC MOSFET的驱动技术应用具有一定的参考价值。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPOYzBrrQAqaEqMPjL8W1ia9lJOrYOBA4Q3NjKibM11NrbEfPJR2BFKfzhY9XOxjewYRtkAHPkzvhMAFngmX83flSqBcNHrBOf0I/640?wx_fmt=jpeg&from=appmsg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPvr8ZqR5US9ViaVWlWX78Of3DNjBMXTsLjzOYQLqj8Ee6iaRtxaDdhjsuGs4LafYJich22TPYbnK7WCeZJcvmkaPHkg53fiaLEek8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMb6q4H7J29q8EEovx1ibOtU1vvLTFYqxlqP6vQjRSxnhP4VFdice16LRjOiadkMgRjrumu2ERiaqVYDOibdDAyHsSTp10icz3OFv84E/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM7a1E47HWDsNpbW1NHxWlvHTbMgSAYjicL4BnNJmyO82GjOeJhjK1cUDuSZCNuZwcPjcVGPglkkLiaY07oicibG9ckBLwCkIbMpCQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOu6GBtA1iaq0SVlfe00undwLYn0GFID0TYasHVt4TXPe6qvg03m5DCUqbNwVqEYb5DWERNtqribE13weV1ZrpBHUydyVqTHuMSU/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)