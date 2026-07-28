# SiC MOSFET 栅源电压评估及驱动回路参数优化设计方法


> 原文地址: [https://mp.weixin.qq.com/s/F0NXem9YeMvjsNOBhb77aw](https://mp.weixin.qq.com/s/F0NXem9YeMvjsNOBhb77aw)

文章来源：中国电机工程学报

作者：秦海鸿，谢斯璇\*，卜飞飞，陈文明，黄文新(南京航空航天大学，江苏省 南京市211106)

摘要：为减少碳化硅(silicon carbide，SiC)金属氧化物半导体场效应管(metal-oxide-semiconductor field-effect transistor，MOSFET)的开关时间和导通电阻以提高效率，通常建议驱动电路采用更低的驱动电阻及更高的驱动电压。但是，由于实际驱动电路中存在寄生参数，过快的开关速度容易产生振荡影响栅极的可靠性，限制SiC MOSFET长期高效安全运行。文中以SiC MOSFET驱动电路为研究对象，分析SiC MOSFET开通瞬态过程，建立考虑电路主要寄生参数的数学模型；定量分析驱动电路参数、主电路寄生参数及工况等影响因素对栅源电压的影响规律；揭示栅源电压、实验测试点电压与驱动电压的区别及影响因素；综合考虑器件应力与损耗，提出一种驱动电路参数优化设计方法。实验结果验证了数学模型与分析的正确性。

关键词：碳化硅金属氧化物半导体场效应管；寄生参数；栅源电压；驱动参数设计

0. 引言

在“碳达峰、碳中和”的战略背景下，提升变换器效率以推动低碳转型至关重要。作为典型的宽禁带半导体器件，碳化硅(silicon carbide，SiC)金属氧化物半导体场效应管(metal-oxide-semiconductor field-effect transistor，MOSFET)与硅(silicon，Si)MOSFET相比，具有更低的导通电阻、更高的开关速度及耐高温等优点，推动变换器向高效率、高功率密度方向发展，在电动汽车、光伏发电、无线电能传输等领域具有广阔的应用前景。同时，SiC MOSFET过高的开关速度使其对电路中的寄生参数非常敏感，电压电流容易产生过冲和振荡，增加器件应力，导致器件加速老化甚至失效。为保证SiC MOSFET器件应用安全，首先要形成高效可靠的驱动电路。

目前对于SiC MOSFET驱动电路参数的设计，研究人员注意到了SiC MOSFET的特点，从驱动电压设置、驱动芯片电流能力、上升/下降时间、PCB布局等方面进行了特别考虑。SiC器件公司在技术手册中给出推荐的驱动电压，但这些推荐值只是基于近似分析，并没有协同实际驱动电路的其他驱动参数统筹考虑。文献\[11\]研究了SiC MOSFET的驱动电阻、寄生电容对最大开通速度的影响；但并未给出其他开关特性分析以及驱动电阻选择指导方法。文献\[12\]分析了不同驱动电压、驱动电阻与栅源电容对SiC MOSFET开关行为的调控规律，抑制振荡与过冲，但是同时会增大器件响应速度。文献\[13\]通过综合考虑开关损耗与温升来选取合适的驱动电阻。文献\[14\]对驱动电路进行RLC响应分析，考虑电容非线性特征，给出电感设计指导。文献\[15\]从损耗增量和阻尼效应两方面研究驱动电压与驱动电阻对抑制栅极振荡的效果。这些方法主要是把驱动电路等效为RLC二阶电路，通过合理选择阻尼，来获得栅极可靠性和损耗之间的平衡。

但是，这些方法实际上是不加主电情况下的考虑，这在Si MOSFET或Si IGBT驱动电路设计时尚可接受；但对于SiC MOSFET，由于其dv/dt、di/dt较大，与电路寄生参数作用会产生明显的电压和电流振荡，对栅源电压产生较大影响，增大栅极电压应力，使得主电路工作时的栅压与不加主电时的栅压相差很大。因此不能仅用不加主电时通过RLC回路阻尼预测方法来判断栅极电压。由于SiC器件的动态特性与电路杂散参数密切相关，文献\[17\]提出了一种提取任意功率回路杂散电感、电容的方法。文献\[18\]分析了dv/dt、di/dt反馈引起的栅极振荡，提出增大驱动电阻与额外并联栅源电容来抑制振荡，但没有给出驱动电阻的选择标准。文献\[19\]依据数据手册参数与外部电路寄生效应提出开关动态特性分析模型，但是没有针对栅源电压动态特性进行分析。同时，由于振荡尖峰的存在，使得器件开关损耗也会增加，因此损耗计算也需考虑到振荡损耗影响使其更加准确。

为此，本文首先考虑主电路影响，即主电路快速变化的电压和电流通过MOSFET结电容和共源极电感耦合到驱动回路中产生的影响，进行解析分析。因为栅源电压在器件内部无法直接探测，本文基于原理分析，通过对比探测点电压的仿真分析和实验结果，验证理论分析和仿真模型的正确性，从而在进一步分析研究栅源电压的影响因素时采用仿真研究方法，以仿真为主要研究手段，研究驱动电路参数、主电路参数及电路工况对栅源电压影响，探讨栅源电压影响因素及其规律；结合可靠性和综合损耗最优作为指导原则，提出驱动电路参数优化设计方法，并进行相关实验验证。

1 . SiC MOSFET开通瞬态栅源电压建模

为了对SiC MOSFET开通瞬态栅源电压建立数学模型，本文以双脉冲测试电路为例，考虑电路中主要寄生参数，针对SiC MOSFET开通瞬态进行分段建模。

1.1开通瞬态过程分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUH8z7SfibcezibP0HNl4uSuja7ib5pbqwJXg0j0cGkoL3hUSAbE7oVzBJg/640?wx_fmt=png&from=appmsg)

考虑电路中主要寄生参数的SiC MOSFET双脉冲测试电路如图1所示。图中：VDC为直流母线等效的理想电压源；IL为负载电感等效的理想电流源，CL为负载电感寄生电容；DH为理想SiC SBD，CJ为SiC SBD等效结电容；CGS、CGD、CDS分别为SiC MOSFET的栅源电容、栅漏电容、以及漏源电容；LD(int)、LS(int)分别为SiC MOSFET封装引入的漏极、源极寄生电感；RG(int)为SiC MOSFET的栅极内阻，RG(ext)为外接驱动电阻；LG为栅极回路的寄生电感；LD(ext)和Rloop分别为直流母线正接线端与SiC MOSFET漏极间线路的等效寄生电感与杂散电阻；LS(ext)为SiC MOSFET源极与地之间线路的寄生电感。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUfzNnicHlBSib8jGqe6NlqVRUXlLH1kiahhiadTO5icUt98lE9icBSwo2GUCQ/640?wx_fmt=png&from=appmsg)

考虑寄生参数时SiC MOSFET的开通波形如图2所示，图中从上到下依次为：栅源电压vGS、漏极电流iD、漏源电压vDS。其开通过程根据电流电压变化可分为5个阶段。

1）阶段1：\[t0—t1\]。

t0时刻，SiC MOSFET的输入电容CISS开始充电，栅源电压vGS开始上升，MOSFET处于截止区，漏极电流iD与漏源电压vDS均不发生变化。该阶段栅源电压可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUAHRDyYoHthAcMeibD5iaOweThMEUZmYI4FUHuNCVmj2QkxBMlznqpuwg/640?wx_fmt=png&from=appmsg)

式中：输入电容为CISS=CGS+CGD；栅源电感为LGS=LG+LS(int)；驱动电阻为RG=RG(int)+RG(ext)；驱动正压为VDRV，在驱动电路的零状态响应中等效为阶跃激励。

该阶段栅极电流可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUvdok24kkqE6vHwqsQyAq0pHRib4fJaS8CvPvAnYic6V0iakkPZD0vyVmw/640?wx_fmt=png&from=appmsg)

该阶段二阶电路的衰减常数δ(1)和固有振荡角频率ω0(1)分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUmzJibuz2FoB9uI1H9V5c0LhiazcSHSYcOPk0ymHic00viak2z0LtDfhJHQ/640?wx_fmt=png&from=appmsg)

由式(1)—(4)可知，该阶段影响栅源电压vGS的因素主要是驱动电路参数。

2）阶段2：\[t1—t2\]。

t1时刻，栅源电压达到阈值电压，沟道开始导通，MOSFET进入饱和区，漏极电流iD由0开始逐渐上升。由于dvDS/dt较小，SiC MOSFET的寄生电容上流过的电流较小，可近似认为沟道电流iCH近似为漏极电流。该阶段内满足的方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUBu8ibZqkbmNT6qdE34FSLpZrcjaDf2I9ppia5Yg0N0ZcsMoqnfkb8N7Q/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUEQgqEUnkwYc4awL3ibVExwiagagT3XZDjicicu94Xb8xkTLFLicbAhiaCPrQ/640?wx_fmt=png&from=appmsg)

将式(6)—(9)代入式(5)中，整理得到该阶段的漏极电流iD满足的方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUbg4WVQNXvyySEHGiac80H2QCOKicskm6icXjGc2OPwzHn3Ab5QtxUia4kw/640?wx_fmt=png&from=appmsg)

该阶段电路的衰减常数δ(2)和固有振荡角频率ω0(2)分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU6X0U5KtxfmRgcAOnrQ3EUgRqUibgLt6B5NWSjX3cNyoib2bxicM2LGjoQ/640?wx_fmt=png&from=appmsg)

该阶段栅源电压随漏极电流增大，从阈值电压上升至密勒电压。由式(10)—(12)可知，影响栅源电压的因素包括SiC MOSFET寄生电容与转移特性、驱动电阻、主电路杂散参数和工况。

3）阶段3：\[t2—t3\]。

t2时刻，SiC MOSFET的漏极电流iD上升至负载电流IL，SiC SBD的电流下降为0。此时主电路的寄生电容CJ、CL承受反向电压充电，漏极电流iD出现尖峰并引发高频振荡。该阶段处于密勒平台时期，根据漏极电流与漏源电压变化可以细化为\[t2—tP\]和\[tP—t3\]这两个阶段。

①\[t2—tP\]。

t2时刻漏极电流iD开始出现超调，至tP时刻到达电流尖峰Ipeak，同时漏极电流变化率diD/dt减小至0。栅源电压vGS在iD作用下由密勒电压VP开始上升，在tP时刻产生密勒平台电压尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUIFicpfiagwS77iamU53Pw0LibMLEfE81yibKcwP1Ma8URWw5cGT3ZjOicMicw/640?wx_fmt=png&from=appmsg)

漏极电流iD满足的方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUcq4ictufpNETiaLLf26ZtDcnGicHTJrib2f5ZOvUZzmhdL9bvg7STbUuCg/640?wx_fmt=png&from=appmsg)

该阶段主电路的衰减常数_ω0_(31)和固有振荡角频率_ω_0(31)分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUicabadJ6kcmmqYemmfNicNufC4QCbVUVM3Gjf4LrPgZW7msbUs6YyC0g/640?wx_fmt=png&from=appmsg)

由于杂散电阻Rloop非常小，_δ_2 (31)<ω0(31)，则主电路工作在欠阻尼状态下，可以得到漏极电流iD的通解形式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUHdtTfb7DBzwQqC9pRfgp6HoUrFr7VIE7HSWicRB4BxXO4zQbtSJ2UEA/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU26Cwbxqvr5jz2PS2fduk96XU6WGcg3AIM0JL9cnicjZb9AnTibIuuJIw/640?wx_fmt=png&from=appmsg)

由式(17)—(19)可知，开通电流尖峰Ipeak与主电路的杂散参数及寄生电容有关，这些因素同时也会影响栅源电压vGS在该阶段的电压尖峰。

②\[tP—t3\]。

tP时刻，漏极电流iD开始下降，同时漏源电压vDS也下降。此时漏源电压变化率dvDS/dt较大，SiC MOSFET寄生电容上的位移电流不可忽略，即沟道电流iCH不再近似为漏极电流。该阶段内满足的方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUqDwHS5wpg2uL0RBm33zibBRibfAzYN7Bn9jqgTe5BZp0Jag9zJul4ItQ/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUDkTLl7h9th4xRsksFgXDEicbrFODc63KnNwU7jDGjH6ZtXD12GdQ4Ww/640?wx_fmt=png&from=appmsg)

ΔvGS与ΔiG表达式同式(6)、(7)，将式(21)—(24)代入式(20)中，整理得到该阶段的漏极电流iD满足的方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUUoCN3ddhuCibW0icE7PFWQbdYicRTNnG38QNuQv1WrtQJ6rLTia5ic4KEqw/640?wx_fmt=png&from=appmsg)

式中：输出电容为COSS\=CGD+CDS；等效寄生电容为CH\=CJ+CL。

该阶段电路的衰减常数_δ_(32)和固有振荡角频率ω0(32)分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUI88COeBXISAsgkDXibLOlHWODIgejScOwjdbJJI8LZI1TtDYBhNOZyg/640?wx_fmt=png&from=appmsg)

由于杂散电阻Rloop非常小，可得此时漏极电流iD的通解形式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUticM6vKYmM85VfOkPPI6H4J9oHMbOgiaJ7N0WdWQZXlu4Ds3ne0JAxvA/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUrKqSJwYiaex9Q48RsnDdJHuCJ8vaVqJZLbRh2ZibOMagibXicKx75HpwYQ/640?wx_fmt=png&from=appmsg)

根据式(22)，此时栅源电压与漏极电流有关；由式(28)可知，漏极电流存在振荡分量，且与SiC MOSFET寄生电容与转移特性、驱动电路参数、主电路杂散参数与寄生电容、工况等因素有关。

4）阶段4：\[t3—t4\]。

t3时刻，漏源电压vDS下降至导通电压，SiC MOSFET进入线性放大区。此时漏极电流iD满足的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUcCYKGLdcyW9bdM18coX32qelQ5mgQzyf7et9l9m361VJvykibqguPyA/640?wx_fmt=png&from=appmsg)

该阶段电路的衰减常数_ω_(4)和固有振荡角频率ω0(4)与式(15)、(16)相同。可以得到漏极电流iD的通解形式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUp9lwgtsVdksS2pjIs7ic6V6csibAIz92gZHGHgUGFfHhyIuuukvMFIoA/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUTurZibibvN6Jg0UDVaNSJibtq9buR2wz6OTQ9MQojfdiam16dthXPBN0Xw/640?wx_fmt=png&from=appmsg)

t3时刻栅源电压vGS从密勒电压VP开始继续上升；同时电流振铃在共源寄生电感LS(int)上感应出电压振铃，耦合至栅极回路，成为一个激励源，使得栅源电压vGS叠加高频振荡。该过程满足的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU7Z64RXFjKibcvNcMmqoYCv4NafpTGiaF9OeUuibT9G2ODX1AeEW4guJZw/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUBpKahGZU4b2RhSdg4FyNnTDF4iaQhDlV8aib8k77fAnG3pLdQicPokToQ/640?wx_fmt=png&from=appmsg)

求拉普拉斯反变换可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUtgG84DIefIw3VmjDY87wLoHsicIGLibuJHR0ZW7pMcYpzXt0vJSJ3xhw/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUaIOgxPjkdF2dwgo27gP92gelujOTOoMRPR3L9XnFXQfDA8gu7hRg8A/640?wx_fmt=png&from=appmsg)

则此时的栅源电压vGS表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUyChjAwNUcpHcnlXNWt4fqOG6PNsJwmlkmzfKfKpr1FnnOTiaUEz8qkA/640?wx_fmt=png&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUXI1zhnob0hDrMLmSveUmViaVjiae7oSticBlnehPTkLjvAbXRVZllnoAw/640?wx_fmt=png&from=appmsg)

由式(41)、(42)可知，栅源电压除驱动回路引起的二阶振荡外，还会叠加来自主电路的高频振荡。影响栅源电压的因素包括驱动电路参数、主电路参数与工况条件。

5）阶段5：\[t4—t5\]。

t4时刻，栅源电压上升至VDRV，之后出现栅源电压尖峰与衰减振荡。该阶段栅源电压为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUbT32GWLz87mrT2jUoYdt0JSgDtFpdD2g0kiaeHLgRppZvlo0zQ4wFlg/640?wx_fmt=png&from=appmsg)

式中K(5)=K6(4)，其余参数定义与第4阶段相同。

1.2仿真模型正确性验证

本节通过LTspice仿真与实验测试，对比分析加主电前后栅源电压的变化趋势，证明考虑主电路参数影响的必要性与仿真模型的正确性。仿真和实验中的功率器件为SCT3060AL(SiC MOSFET，ROHM)和SCS240AE2(SiC SBD，ROHM)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUCj50xSy29TMT5W2WX2wj546OjGVA59uBDZIYR2IXL773qNULflplew/640?wx_fmt=png&from=appmsg)

图3为加主电前后栅源电压波形对比图，其中：红色波形为仿真波形，蓝色波形为实验波形。加主电前后栅源电压最大值的仿真结果分别为18.78与20.7V，实验结果分别为18.7与20.8V。加主电后栅源振荡加剧，栅源电压最大值明显增加，说明主电路参数会明显地影响栅源电压，这与前述理论分析一致。为减小主电路参数对栅源电压的影响、保证栅极可靠性，首先要探究各参数对栅源电压的影响规律。

同时，图3所示的仿真结果与实验结果基本一致，证明所建仿真模型的正确性。由于实验中的布局寄生参数受实际物理尺寸限制无法减小，而仿真参数设置不受限，便于探究寄生参数对栅源电压的影响规律，因此下文将采用仿真手段对栅源电压的影响因素进行分析。

2. 栅源电压影响因素仿真分析

根据数学模型可知，栅源电压大小的影响因素包括驱动电路参数、主电路参数与工况条件。本文采用LTspice仿真，将栅源电压的影响因素定为可调参数，并根据实际情况设置其他参数大小(见表1)，探究各影响因素对栅源电压的影响规律与影响程度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUtia3ap6t4ESdHUII7ObWSpqdjFT3IgojyZicJeLzroNiaHjR6Wsa21uIQ/640?wx_fmt=png&from=appmsg)

2.1驱动电路参数

2.1.1驱动电阻

驱动电阻分别取为12、14、16Ω时的栅源电压波形如图4所示。由图可知，随着驱动电阻RG增加，栅源电压振荡峰值从25.18V降低至18.91V。驱动电阻RG增大，驱动电路阻尼比增大，栅源电压振荡幅度减小；同时漏极电流变化率diD/dt减小，主电路振荡幅度减小，使耦合至栅源电压高频振荡幅度减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUdqkuenXXCGbeE8dvqfDdiaUJUPElmwzBKpVRiaow2qfJkYibp0BBTOW3Q/640?wx_fmt=png&from=appmsg)

2.1.2栅源电感

栅源电感分别取为20、30、40nH时的栅源电压波形如图5所示。由图可知，随着栅源电感LGS增加，栅源电压振荡峰值从22.66V增加至25.18V。栅源电感LGS增大，驱动电路阻尼比减小，栅源振荡幅度增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUBoiapmZjq1cb8qCQt4YqSBnLDVx5X8IOUrEkhfBAswq6OIpw7lttSPQ/640?wx_fmt=png&from=appmsg)

2.1.3共源电感

共源电感分别取为20、30、40nH时的栅源电压波形如图6所示。由图可知，随着共源电感LS(int)增加，栅源电压振荡峰值从25.72V降低至24.32V。共源电感LS(int)增大，作为将高频振荡引入驱动回路的参数，栅源电压振荡增大；同时漏极电流变化率diD/dt减小，主电路振荡减小，使得栅源电压振荡减小。由于LS(int)增大对开关速度限制作用更强，故栅源电压振荡减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUvSYDof17gytPX2wxQ3uu5e7YgxIibsCgVnpg7n2ricUFQDyOIczgluVQ/640?wx_fmt=png&from=appmsg)

2.2主电路参数

2.2.1杂散电阻

杂散电阻分别取为0.01、0.1、1Ω时的栅源电压波形如图7所示。由图可知，随着杂散电阻Rloop增加，栅源电压振荡峰值基本不变，但拖尾振荡的幅度减小。杂散电阻Rloop增大，主电路阻尼比增大，同时漏极电流变化率diD/dt减小，主电路振荡减小，使得栅源电压减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUTyMBH0OXgNlE0icQfzcwnrSVXb5IsLGfKw31iawnfhUtlIlOX4UiaSIcw/640?wx_fmt=png&from=appmsg)

2.2.2杂散电感

杂散电感分别取为80、140、200nH时的栅源电压波形如图8所示。由图可知，随着杂散电感Lstray增加，栅源电压振荡峰值先增加后减小。杂散电感Lstray增大，主电路阻尼比减小，振荡幅度增大；同时漏极电流变化率diD/dt减小，主电路振荡幅度减小。一般情况下Lstray不会超过140nH，可认为栅源振荡幅度随杂散电感增大而增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUsaqjVMPwCdI044ricWIBtgB1zEvg2zp6HybZ8HO5ibgQ9IfyicuXPZUjw/640?wx_fmt=png&from=appmsg)

2.2.3寄生电容

寄生电容分别取为80、140、200pF时的栅源电压波形如图9所示。由图可知，随着寄生电容CJ增加，栅源电压振荡峰值从25.18V增加至28.02V。寄生电容CJ增大，主电路阻尼比增大，振荡幅度减小；同时开通峰值电流Ipeak增大，振荡幅度增大。由于寄生电容CJ增大对Ipeak作用更强，故栅源电压振荡幅度增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUMibhoc3g0OQBC06dWXltbthAKzSwgI66fv1DDIAqVo7ibiaWVKcujJgicQ/640?wx_fmt=png&from=appmsg)

2.3工况条件

2.3.1母线电压

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUeoCEeX8zfBibqhXjibz777dvMUFI7eHtgXEVwM83DYEDrfD6m8yL5nrw/640?wx_fmt=png&from=appmsg)

母线电压分别设置为200、300、400V时的栅源电压波形如图10所示。由图可知，随着母线电压VDC的增大，栅源电压振荡峰值从23.14V增加至25.18V。根据式(44)，母线电压VDC增大，漏源电压变化率dvDS/dt增大，最终使得栅源电压振荡幅度增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUG042s8TmRVFamckz4NicTto7zCSenYQjDOlY6sXibTnlgyrv6Eic8ic4pg/640?wx_fmt=png&from=appmsg)

2.3.2负载电流

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUYNIxXd1HjG3ljoiaNCW3nvEkHKWMG9lUP2ib4O6LCTGI2HiaKAS192Itw/640?wx_fmt=png&from=appmsg)

负载电流分别设置为5、10、20A时的栅源电压波形如图11所示。由图可知，随着负载电流IL增加，栅源电压振荡峰值从25.98A降低至25.18V。由于电路参数不变，由寄生电容充电引起的电流超调部分IRMM基本不变，根据式(45)，负载电流IL增加时，漏极电流变化率diD/dt减小，使得栅极电压振荡幅度减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUt832tyYIsQhtm0I8fKfgVwdMmOGiaRR8Cw7icjibSFskXy0kyFNwdibwfw/640?wx_fmt=png&from=appmsg)

通过对栅源电压振荡的影响因素进行仿真分析可见：驱动电阻、共源电感、杂散电阻与负载电流越小，栅源电感、杂散电感、寄生电容与母线电压越大，栅源电压振荡越严重。若在不考虑主电的情况下设计驱动电路参数，SiC MOSFET的栅源电压很可能超过安全电压，造成器件失效等问题，为此需要寻求驱动电路参数的优化设计方法。

3. 驱动参数优化方法

3.1主电路寄生参数设计

根据第2节的分析，寄生电容即SiC SBD的等效结电容CJ与负载电感的寄生电容CL应尽可能小，故选用ROHM公司型号为SCS240AE2的SiC SBD与空心电感。同时，为减小杂散损耗，杂散电阻Rloop也应该尽可能小。

对于杂散电感Lstray，首先需要在固定驱动电压VDRV下，通过限制栅源最大电压不变，动态变化栅源电感LGS、驱动电阻RG、杂散电感Lstray组合，关注开关能量损耗与器件应力，得到杂散电感Lstray可接受的设计范围。具体参数与实验测试数据如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUicmRRXicW6y4qUm2LytbxiceO58HUTZJ1JpGDkbZXTE8YmzHcjpicNqpyw/640?wx_fmt=png&from=appmsg)

当栅源电感LGS分别为10、20、40nH，VDC与IL分别设置为400V与20A时，限制栅源最大电压vGS(max)21V，不同杂散电感下SiC MOSFET开关波形如图12所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUpzFntXqiaL4HJRwFn0ia4sTpbCB3XJVkhqib7cekiaxNhv1yG1ymvBcSgw/640?wx_fmt=png&from=appmsg)

在VDRV\=18V、RG\=17Ω的条件下，当栅源电感LGS\=40nH时可接受的杂散电感Lstray为60nH，而LGS\=20nH时可接受的Lstray为125nH。栅源电感LGS越小，在相同VDRV、RG下栅源电压振荡越小，可接受的杂散电感Lstray越大。

当栅源电感LGS分别取为40、20与10nH时，由关断电压应力限制的杂散电感Lstray最大值从260nH减小至110nH。栅源电感LGS越小，在相同VDRV、RG下开关速度越快，关断电压尖峰增大，可接受的杂散电感Lstray范围减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUeoMEdico57WWfBE8X1ictrrTiafWFYLyd421NS7Vzgibh1vo7NmOnOnV5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUjbTeT4y84cVsrKWocPmc5ibU5araxamibFQtJEgtLCVy2heBtfnHamaA/640?wx_fmt=png&from=appmsg)

图13统计了不同栅源电感LGS与杂散电感Lstray对器件开关损耗的影响。由于Lstray越大，需要更大的驱动电阻RG来抑制栅源电压振荡，故而开关速度变慢。对于开通过程，根据式(9)可知Lstray越大，阶段2的电压平台越小，使得开通损耗减小。综合两者因素，开通损耗能量先减小后增大；关断能量损耗由于RG增大而增大。

根据上述分析，并综合考虑器件开关应力、能量损耗以及实际电路的物理空间限制，杂散电感Lstray以不超过60nH为佳。

3.2 综合损耗最优原则优化驱动参数

在优化的主电路寄生参数下，栅源电压振荡与关断电压应力都得到优化。在此基础上通过限制栅源最大电压vGS(max)不变，调整驱动电路参数可以有效降低器件的开关损耗与导通损耗，并依据“综合损耗最优原则”选取优化驱动参数。

当Lstray\=60nH、vGS(max)\=21V时，具体驱动电路参数与测试数据如表3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUsKh7O1jQalpvI6BEzlXy1e9iczAwrKMd5DGWshDgdb3HkRUUcOIg0TQ/640?wx_fmt=png&from=appmsg)

图14为400V/20A情况不同栅源电感LGS、栅极电阻RG、驱动电压VDRV下的开关波形。在同一栅源电感LGS下，RG增大，VDRV同时增大，开通电流尖峰略有增大；由于驱动正压不影响关断过程，关断电压尖峰减小。在同一驱动电阻RG下，LGS越小，但同时VDRV增大，开通电流尖峰只略有减小；由于驱动正压不影响关断，关断电压尖峰减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUyyu56FqqG2DNxGUn7cWTNOtgArwiaeRibmH5dQemHoKeXUib17qK81DKw/640?wx_fmt=png&from=appmsg)

图15统计了不同驱动参数LGS、RG、VDRV对器件综合损耗的影响。在同一栅源电感LGS下，RG增大同时VDRV增大，开通损耗先减小后增大，导通损耗减小；由于驱动正压不影响关断过程，关断损耗持续增大，故而综合损耗先减后增。在同一驱动电阻RG下，LGS越小同时VDRV增大，开通损耗、导通损耗减小；由于驱动正压不影响关断过程，关断损耗基本不变，故而综合损耗减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUpGpicBzT5icaEDy8vH19ZzzhibtvEnovdVNBdnaqC1hUVavDY3HpFLbIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUfXOOhiaUDFmLHbjW7qFywVb6TXonicgGu6yHEUfib9VsZ38hoLTkFBzrA/640?wx_fmt=png&from=appmsg)

依据综合损耗最优原则，当LGS\=40nH时，选取RG\=15Ω为佳，此时阻尼比为1.09；当LGS\=20nH时，选取RG\=13Ω为佳，此时阻尼比为1.34；当LGS\=10nH时，选取RG\=14Ω为佳，此时阻尼比为2.04。可见，栅源电感LGS越小，最优驱动参数的阻尼比越大，这是因为LGS减小开关速度增大，导致栅源电压叠加的高频振荡增大，需要更高的阻尼来抑制高频振荡。

3.3实验验证与讨论

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUXwyc3jicIZ4WCk9RlzJjXkorGUiaia8PClJI3GHKA7Kh8l0eXhSxyE15w/640?wx_fmt=png&from=appmsg)

为了评价不同驱动参数组合(VDRV,RG)对SiC MOSFET(SCT3060AL，ROHM)栅极可靠性和综合损耗的影响，本文搭建了如图16所示的双脉冲实验平台，通过双脉冲实验测试了SiC MOSFET的开关特性。测试条件如表4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUN0khLiapj4yNpYsYWzqib54T2VHDSQaiciauwwMuiaPVFWZsTpm0CnSNxLw/640?wx_fmt=png&from=appmsg)

不同驱动参数组合下SiC MOSFET的开关波形如图17所示。本文选择不同的驱动参数组合将最大栅源电压vGS(max)限制在21~22V。显然，RG越小，栅源电压振荡幅度越大。随着RG从22Ω减小到12Ω，栅源电压超调部分从1.2V增大到7.2V；RG减小同时VDRV减小，开通电流应力从24.5A减小到23.0A。驱动正压对关断过程影响不大，关断电压应力随RG的减小而增大，关断电压尖峰从485V增大到595V，增加了22.68%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUH9iapBWL80icpCvfaKsqyeG2pdycCyV4jmUeicmyABNFFA3F3oLp5J4ZA/640?wx_fmt=png&from=appmsg)

不同驱动参数组合下SiC MOSFET的开关能量损耗如图18所示。RG越小，栅源振荡越大，导致VDRV受限，开通能量损耗增大，当RG从22Ω减小至12Ω时，开通能量损耗从153.8uJ增大至217.2uJ，增加了41.22%。驱动正压对关断过程影响不大，RG越小，关断能量损耗越小，当RG从22Ω降低到12Ω时，关断能量降低了35.59%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yU0GH0rV0AxKe8maI5wp3BXxtbmjfLrxfk5r8z5ibFTmyfY3JcGjh5GrQ/640?wx_fmt=png&from=appmsg)

不同开关频率下不同驱动参数组合(VDRV,RG)的综合损耗如图19所示。由图可知，(22V, 22Ω)的综合损耗相较于(15.2V, 12Ω)在200kHz时小30.175W，在600kHz时小49.89W。随着频率的提高，开关能量损耗小的驱动参数组合更有优势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskDUrJ64vFSnBweTgr7x4yUBN4n0M8sIyQwUhLQQaZKgxAibEnxOdtHMnaMOhyXoVXXd7y5ImuJnEw/640?wx_fmt=png&from=appmsg)

以综合损耗最优为依据，当LGS\=42.52nH时，选择(18.8V, 18Ω)为最佳驱动参数组合。根据前文分析，若LGS能继续优化，RG取更小值的同时可以进一步增大VDRV，综合损耗也将进一步减小。此外，若Lstray能优化至60nH，在同一LGS下，最优参数的阻尼比也将减小。

4. 结论

针对SiC MOSFET瞬态时的非理想特性，本文建立了器件开通栅源电压振荡的数学模型，阐释了栅源电压振荡的机理，并提出一种驱动电路参数优化设计方法。理论分析、仿真以及试验结果表明：

1）由于主电路存在寄生电容与杂散电感，同时杂散电阻又非常小，在SiC MOSFET开关过程中容易引起高频振荡。该振荡通过MOSFET结电容、共源寄生电感等参数耦合至驱动电路，使得栅源电压叠加高频振荡。

2）驱动电路参数、主电路参数以及工况条件均会影响栅源电压，其中：RG、LS、Rloop、IL越小，LGS、Lstray、CJ与VDC越大，栅源电压振荡越严重。

3）综合考虑器件应力、能量损耗以及实际电路的物理空间限制，杂散电感Lstray不宜大于60nH，并尽可能选用寄生电容CJ较小的SiC SBD作为续流二极管。

4）优化栅源电感LGS可以在保证栅极安全的前提下，减小驱动电阻RG、增大驱动电压VDRV。对于直插式SiC MOSFET，布局设计宜尽可能把LGS控制在20nH以下；对于贴片式SiC MOSFET，布局设计宜尽可能把LGS控制在10nH以下。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)