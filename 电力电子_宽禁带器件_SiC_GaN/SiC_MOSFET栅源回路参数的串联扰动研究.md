# SiC MOSFET栅源回路参数的串联扰动研究

原创 张宇 ， 李先允 SiC碳化硅MOS管及功率模块的应用 2025-01-29 00:20 河南

> 原文地址: [https://mp.weixin.qq.com/s/faTCDnhvgg8cyCmbJH3\_7g](https://mp.weixin.qq.com/s/faTCDnhvgg8cyCmbJH3_7g)

文章来源：电气传动

作者：张宇，李先允，王书征，唐昕杰，袁宇，卢乙（南京工程学院 电力工程学院，江苏 南京 211167）

摘要：为了使SiC MOSFET工程运用时避免串联扰动的威胁，研究栅源回路参数对串联扰动的影响是很有必要的。研究通过对栅源回路参数的调控，将串联扰动现象分为正压尖峰与负压尖峰两部分进行分析，确定影响串扰电压尖峰的参数，为驱动回路参数设计提供方向性意见。首先建立拓扑简化模型，理论分析影响电压尖峰的栅源回路参数，随后搭建实验平台进行电压尖峰观测以及对理论分析进行实验验证，最后对实验波形进行分析。实验表明，当驱动电阻为 0~20 Ω、驱动杂散电感为 0~300 nH、栅极电容为 0~10 nF时，串联扰动随着桥臂自身驱动电阻、驱动杂散电感的增大而增大、随着栅极电容的增大而减小。此外，负载阻抗会影响负压尖峰，尖峰震荡同样会影响器件正常工作。

关键词：碳化硅 MOSFET；栅源回路；串联扰动；电压尖峰

0\. 引言

现如今，新能源发电、电动汽车以及开关电源等领域的发展趋向于高效率、高转化率以及高可靠性。这使得以碳化硅（silicon carbide，SiC）器件为首的宽禁带半导体器件以其高开关频率、低开关损耗、低散热需求等优点得到越来越多的关注。SiC材料的热导系数是Si材料的2.5倍，饱和电子漂移率是 Si 的 2 倍，所以 SiC 器件能在更高的频率、更高的开断速度下工作。现如今对SiC 器件的研究主要集中在 SiC MOSFET，与传统Si MOSFET相比，SiC MOSFET具有更快的开断速度，更高的功率密度，更高的正向耐压，更低的散热需求，并且栅源两端具有良好的反向耐压能力（第一代 SiC MOSFET 可承受\-5V，第二代 SiC MOSFET 可承受\-10V），由于其卓越的性能，SiC MOSFET在中、高压领域出现了代替Si IGBT的趋势。但是随着电压水平和开关速度的提升，电路中寄生参数所带来的扰动现象将更加严重，这将威胁系统的安全运行。虽然依靠新的 PCB制作工艺以及封装技术可以有效地减少寄生参数的大小，但是SiC MOSFET也依然面临着串联扰动以及电磁干扰和电磁应力的风险，这些负面效应会在一定程度上加速器件老化，严重时甚至造成器件损坏。串联扰动现象主要存在于换流器上、下桥臂结构中，当上桥臂开通时，过高的du/dt作用在下桥臂器件寄生电容上会产生正压尖峰，正压尖峰超过阈值电压时会造成器件的误导通，这将影响系统整体的安全性。当上桥臂关断时，积累在寄生电容中的能量得到释放会产生负压尖峰，负压尖峰小于器件栅极耐受值时，会造成器件的损坏。

综上所述，基于栅源回路参数的调控，对器件串联扰动现象进行分析研究，得到串联扰动的影响因素，这对 SiC MOSFET 的工程应用具有极大的意义。本文首先基于串联回路中的单个桥臂进行驱动回路简化分析，建立数学模型，得到影响串联扰动的各个因素，然后搭建平台进行实验验证，最后对实验波形进行进一步分析。

1\.  简化建模分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicr7JFPIm2vdxjCnkjWkmhwKJwcQd4YHBpGicMCaIG9pxq1ibcnKE6eOyA/640?wx_fmt=png&from=appmsg)

图1为典型同步Buck电路。图1中，上、下桥臂功率开关器件QH，QL均为SiC MOSFET；Cgs，Cgd，Cds为SiC MOSFET封装寄生电容；Cdc为滤波电容；Ld，Lg，Ls，Lloop为杂散电感；ZL为负载；Rg为栅极电阻，由驱动电阻和栅源回路寄生电阻组成；Cg为外加栅极电容，用于栅源电容Cgs的调控，理论分析时不参与讨论；Vq为驱动电压；Vdc为母线电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicJkI76chyntR3nQQZA2GAyVFUia6uEF7ZSZ5j1upIuqrAkN7kO4vQbSA/640?wx_fmt=png&from=appmsg)

本文通过研究上桥臂SiC器件快速开断时，下桥臂器件栅源两端产生的电压尖峰来研究串联扰动现象，文中将串联扰动分为两个阶段分析，其中，第一阶段产生正压尖峰，第二阶段产生负压尖峰。图2为串联扰动等效电路，图3为对应的简化等效电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic8QFSfSZwUugLHIm5JDGusjrwQzbvIkuIyKiagibqT64gWKlTiaTmwriboQ/640?wx_fmt=png&from=appmsg)

1.1 栅源回路参数对正压尖峰的影响

当QH快速导通时，QL漏源两端电压vds瞬间由0 升高至母线电压 Vdc，过高的 du/dt 作用在 Cgd上将产生漏电流 Igd，并对 Cgs进行充电，使 Cgs上形成一个正的电压尖峰，正压尖峰等效电路具体如图2a 所示。其中，Igd，Igs，Ids分别为电容 Cgd，Cgs和 Cds上的电流；Ig，Id，Is分别为器件栅、漏、源极流过的电流；vCL等效为上桥臂开通瞬间作用在下桥臂器件漏源两端的电压（不考虑器件导通电阻的变化），由上桥臂开断速度和母线电压Vdc共同决定，可近似等效为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicddyoGKxlsbutegmibIgKEtfpn2tAmxhPUKjhS9nibXrr1u99mGFAH11A/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicJnYngVa8mZdYuYHku2wjhLibIWrRMCHfFrUzPUEibGYatNWwVce5d9kA/640?wx_fmt=png&from=appmsg)

式中：ton为下桥臂漏源电压上升时间。

因漏电流 Id较小，所以在 Ld上形成的压降相对于母线电压可以忽略。Lg包括器件栅极引脚杂散电感和驱动回路寄生电感。Ls为器件源极引脚杂散电感，其值较小，近似计算时可以忽略。二极管 VD 在串扰形成时反向截止，不参与工作。电容Cds的大小不会影响作用在电容Cgd和Cgs串联支路上的电压，又因电容电流i \= C du /dt，所以电容Cds对电流Igs的值没有影响，分析栅源电压vgs时可以忽略。对正压尖峰等效电路进行简化以及Laplace变换，假设储能原件初始能量为0，具体如图3a所示。

根据基尔霍夫定律对图 3a 进行节点电压方程的列写：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicdQFuf1ibN8ibtD8e8bEmaLPXdgKe73q2t3ZGz0K4L4eSjs73BbVAiat7Q/640?wx_fmt=png&from=appmsg)

点G，S分别为器件栅、源极，解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic9yxOb7Nj5Pf2ib6vtKNficF3eicyvhXSS8eLbbMIntXBZJ5iadeaFjgLRQ/640?wx_fmt=png&from=appmsg)

进行Laplace逆变换，并假设：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicN766S4CaTkIVic9axc6sLcYPcCJP3FOLHJt18USicTFgNhQeQrCryY4Q/640?wx_fmt=png&from=appmsg)

解得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicl7cKLjVR4ibAuF9iaeQ71KicnnicLU2nniaxB60Acic64C4iaHADicbNIZTF9Q/640?wx_fmt=png&from=appmsg)

以 SiC MOSFET 器件 C2M0080120D 为例，输入电容 Ciss\=950pF 且随 vds变化较小，栅漏电容电容 Cgd随着 vds的增大迅速降低，取 Cgd\=15pF。当器件工作电压Vdc\=500V时，假设栅源电压上升时间为49ns，串扰等效电源的系数![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicvsaXbpum0m8IHc2QGenOL4kfkZfN1ZiaV0IdK5XGoNGqVqlxiaXBzFcA/640?wx_fmt=png&from=appmsg)，驱动电压为+20/-5 V，改变栅源回路参数得到正压尖峰幅值如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicYTNe2JzWRBz8icZx5DVjaZKwSE7TuWwC4TibJH9LddAiccJWvFk3ziazlQ/640?wx_fmt=png&from=appmsg)

由表 1 分析可得，当上桥臂开断速度和母线电压不变，即a为定值时，正压尖峰幅值随着驱动电阻 Rg、杂散电感 Lg的增大而增大，随着寄生电容Cgs增大而减小，其中 Cgs可以通过栅极电容 Cg进行调控。

1.2 栅源回路参数对负压尖峰的影响

当QH快速关断时，QL漏源两端电压vds由母线电压Vdc迅速降为0，积累在电容Cgd上的能量开始释放并形成漏电流Igd，当漏电流流经Cgs时将在栅源电容上形成一个负的电压尖峰，具体如图2b所示。图 2b 为负压尖峰等效电路，其中 ZL为负载，IL为流过负载的电流。由于 Cds放电过程中电流Ids不经过电容Cgs，讨论vgs的时候可以忽略。杂散电感 Ls仅为引脚杂散电感，其值过小，近似计算时可以省略。Cgd放电时二极管 VD 反向截止，仅在放电结束时为 Ld提供续流通道，当忽略负载 ZL以及线路杂散电感的影响，仅针对栅源回路对正压尖峰等效电路进行简化以及Laplace变换，具体如图 3b所示。其中，系数 b\=Vdc/toff，下桥臂漏源电压下降时间 toff由上桥臂关断速度决定，现假设系数 b 为定值。根据基尔霍夫定律对图 3b 进行节点电压方程的列写：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic7IqNnnLX4RibjFicqKrHGBE6qvwHVrYErLeF0vWNcW7GLber9Rd3ibduw/640?wx_fmt=png&from=appmsg)

对式（6）进行求解，得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicTiaLQa8ia2x7wamlegtU0EoCKHIHAfa2O2ZtxzsN1xrJS6AicticemQsVw/640?wx_fmt=png&from=appmsg)

联立式（4）对式（7）进行Laplace逆变换，得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicobqLoa3BneyP0wF2hQa4MrJoRK8EMicSeV7A3tIFiaxkNzUIlh02RC4w/640?wx_fmt=png&from=appmsg)

当器件工作电压Vdc\=500 V时，假设器件关断速度为 40 ns，理想状态下栅漏电容放电系数 b=                                                                            ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicrxFDvBBdPebibfYW6VObf193fnbqR9jePXZ8gMCa9Yy4UuDIzVqZ5jw/640?wx_fmt=png&from=appmsg)，改变栅源回路参数得到负压尖峰幅值如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicAiatMnI0ic6PazRkYdibvmnfOPQWxg4D5ciaXKKia5hgoZtFdp5lQyVId4w/640?wx_fmt=png&from=appmsg)

由表 2可知，当系数 b为定值时，vgs负压尖峰幅值随栅极电阻 Rg、栅极电感 Lg的增大而增大，栅极电容 Cg增大，即栅源电容 Cgs增大时，负压尖峰幅值变化减小。

1.3 负载电阻对负压尖峰的影响

当不考虑负载电阻时，vds的下降时间 toff主要由上桥臂器件的关断速度决定，具体如 1.2 节所述。但由图2b可知，在同步Buck电路中，负压尖峰阶段Cgd释放能量时将会经过负载电阻ZL，假设电容Cgd放电初始为恒压源，有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicf12xgbLeWIJ9Ahnz7yh1KdXxKD2hxlpibYf0JruiaQnkMqLNEOJ9lN0w/640?wx_fmt=png&from=appmsg)

式中：Zg为栅源回路阻抗。

当_Z_L增大时，Igd随之下降，由 Qgd\=CgdVdc\=Igdtof可知，当电容两端电压和储存电荷不变时，Cgd的放电时间toff将会随之增大（toff ≥ tf，tf为上桥臂器件关断时间），电容Cgd放电转为自由放电，电压下降速度不再由 tf决定，此时负压尖峰简化电路如图3c 所示。由于图中标记部分端口结构未发生变化，输入电流 Igd减小会使负压尖峰幅值降低，toff增大使负压尖峰持续时间增大，同时两者共同作用使得调控寄生电感 Lg对负压尖峰幅值的影响降低。本文主要讨论栅源回路对串联扰动的影响，故对负载的影响不做深入研究。

2. 实验验证

搭建如图 4 所示的同步 Buck 电路实验平台进行电压尖峰观察及上述推导的实验验证。实验采用Tektronix公司生产的DPO4054B示波器及其配套电压探头TPP0500 和 P5205A，SiC MOSFET 采用CREE 公司的C2M0080120D，续流二极管为 SiC 肖特基二极管 C4D20120D，触发脉冲由Firstack 公司生产的脉冲触发仪提供。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicSUQx1E91meicic8cTY66x7AKib6qZMjyUm2gQyHlRjmecfxwWGsyibOfWw/640?wx_fmt=png&from=appmsg)

图 5 为电压尖峰实验波形，由于负载电阻的存在，负压尖峰幅值较小，实验波形同时也证实本次实验平台的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic4lYMTSpCibKdwSm6W3cRoeSzaLMzk4wagvh8ia3oaPwpWpHIex04ibQNw/640?wx_fmt=png&from=appmsg)

对上述理论分析进行实验验证，为了保护器件安全运行，基础测试电压Vdc选为500V，驱动电阻Rg为5Ω，栅极电容Cg为1 nF，栅极电感Lg为0，负载电阻 ZL为 50 Ω。图 6 为改变栅源回路参数时的电压尖峰波形，为了清晰地表达波形变化，仅展示部分参数，其中左图均为正压尖峰波形，右侧均为负压尖峰波形。图 6a 为驱动电阻分别为 0 Ω，7.5 Ω，12.5 Ω，20 Ω 时的电压尖峰波形。由图6a可得，当驱动电阻增大时，正、负压尖峰均增大，负压尖峰震荡变小，这是由于驱动电阻与栅极电容形成 RC 滤波，降低震荡。图 6b 为栅极电容分别为0 nF，0.5 nF，1 nF，10 nF时的电压尖峰波形，由图6b可得，当栅极电容增大时，正、负压尖峰均变小，负压尖峰震荡也变小。图6c为栅极电感分别为 23 nH，81 nH，257 nH 时的电压尖峰波形，由图6c可得，当栅极杂散电感增大时，正压尖峰变大，负压尖峰基本不变，负压尖峰震荡变大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicGt6WicvPG6iaDWGLjPc6Mpp4tib782KjML7yaicziblyabxYuB9BA4tfuDA/640?wx_fmt=png&from=appmsg)

图 7 为不同栅源回路参数的电压尖峰值，统计了改变栅源回路参数时的所有实验结果。由图 7 可得，当驱动电阻为 0~20 Ω，仅驱动电阻增大其他条件不变时，正、负压尖峰均增大。栅极电容为 0~10 nF 时，随着栅极电容的增大，正、负压尖峰均减小。栅极电感为0~300 nH时，栅极杂散电感增大，正压尖峰增大，负压尖峰基本不变。其中，正压尖峰幅值变化较大，负压尖峰幅值变化较小，这与负载电阻的接入有关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzickUMlPhy6bTpYzOviahthiaic3sEoibOQWn9BLS4SicEheyGDdQOLTOHtrhQ/640?wx_fmt=png&from=appmsg)

由 1.3节推导可知，当其它条件不变时，负载电阻的大小会影响负压尖峰幅值的大小和持续时间，现通过实验进行验证。不同负载电阻时，器件漏源电压vds及负压尖峰之间的关系如图8所示，由图 8 可见，当负载电阻增大时，vds下降时间也增大，同时负压尖峰持续时间正比于vds下降时间，幅值大小正比于dvds/dtoff。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicIQSlhoZNZZjZ6pAeHEPgJGzibrlluj1Ec65u87Zic9wicgtOS4AiaHfh2Q/640?wx_fmt=png&from=appmsg)

对上述实验分析可得，通过对栅源回路参数的调控可以达到调节电压尖峰的目的，与前文理论分析结果一致。为了同时满足 SiC MOSFET驱动的快速性与安全性，驱动回路设计时PCB布局注意降低寄生参数，驱动参数选择时，建议降低驱动电阻的大小，利用增大栅极电容来降低器件高速开断过程中的过冲与震荡现象。以 Buck 电路为例，负载的大小会影响负压尖峰幅值以及持续时间，换流器正常运行时建议工作在满载状态。

3. 总结

本文基于栅源回路参数调控对SiC器件串联扰动现象进行分析研究并进行实验验证，结果表明：

1）器件所受的串联扰动现象是器件高速开断形成的 du/dt作用在相邻器件封装寄生电容上引起的，可以通过栅源回路参数和负载阻抗进行调控。

2）电压尖峰随着驱动电阻、杂散电感的增大而增大，随着栅极电容的增大而减小，较大的负载电阻有利于降低负压尖峰。驱动电路设计中应该降低驱动电阻的大小，通过提高栅极电容来抑制开关震荡。

3）伴随电压尖峰出现的尖峰震荡也对器件安全产生威胁，还需进一步研究。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)