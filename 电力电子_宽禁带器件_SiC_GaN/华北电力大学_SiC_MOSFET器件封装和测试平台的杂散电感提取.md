# 华北电力大学：SiC MOSFET器件封装和测试平台的杂散电感提取


> 原文地址: [https://mp.weixin.qq.com/s/I8iTXHYxl8\_M0wtZH22GAw](https://mp.weixin.qq.com/s/I8iTXHYxl8_M0wtZH22GAw)

文章来源：高电压技术

作者：谢宗奎，赵志斌，柯俊吉，孙鹏，崔翔（新能源电力系统国家重点实验室（华北电力大学），北京102206）

摘 要：SiC MOSFET器件优异的性能使其逐渐被应用于高压高频高效变换器中，然而其器件封装和回路杂散电感在高压高频环境下严重影响并限制了其自身性能和潜力。为了准确提取器件封装和测试平台杂散电感，首先建立了考虑所有杂散参数影响的开关瞬态宽频电路等效模型，分析了器件封装电感和测试平台回路杂散电感对SiC MOSFET所受电气应力的影响。然后基于端口的概念，在宽频范围内利用Aligent 4294A阻抗分析仪等测量工具对功率回路的阻抗特性进行测量，并采用RLC串联模型，在MATLAB中对测量数据进行拟合，从而获取回路杂散电感参数。采用相同的方法对SiC MOSFET TO封装器件3个端子两两进行测量和拟合，并获取封装的杂散电感。最后将该方法提取的封装电感值和数据手册中提供的电感值进行对比，其最大误差仅为3 nH，而回路电感值和实验结果对比误差仅为8.9 nH。结果表明所提出的杂散电感提取方法可以用于器件封装及测试平台的杂散电感的提取。

关键词：SiC MOSFET；杂散电感；阻抗特性；RLC等效模型；数据拟合

0.引言

随着电力系统的电力电子化，越来越多的电能需要电力电子变换器来控制。目前，硅基绝缘栅双极型晶体管（IGBT）和快恢复二极管（FRD）已经在各种电力变换器中得到了广泛应用。然而，硅基器件的性能已经达到了其理论极限，未来很难实现更大的突破。基于这个原因，SiC功率器件由于其高击穿场强（硅器件的10倍以上）、高温（硅器件的4倍以上）、高压、高频等优势，已逐步应用在光伏逆变器、风力发电、电动汽车等领域。

目前商业化的SiC MOSFET的电压等级在600~1700 V之间，但是随着高压SiC功率器件的发展，目前已经研发出了10 kV的SiC MOSFET样品。高压SiC MOSFET的研发成功以及未来可能的产业化，将在电力系统中的高压领域开辟全新的应用，对电力系统的变革产生深远的影响。

然而，当考虑到其封装的杂散电感时，高di/dt和dv/dt会引起严重的负面影响，如开关振荡、电磁干扰（EMI）、额外的功率损耗和应力。由于杂散参数的原因，这些器件在实际应用中，对电力变换器的实际工作频率施加了上限。杂散电感对器件工作和电路性能有很大的影响，为了减轻这些负面影响，同时为了定量分析杂散电感对器件开关特性的影响，需要对杂散电感进行精确提取。

现有文献中用于提取功率半导体封装的杂散电感的方法通常有两种。一种是依赖于有限元分析（FEA）或部分元等效电路（PEEC）方法来解麦克斯韦方程（如ANSYS Q3D），并根据封装的几何尺寸和材料信息来分析计算电感和电容。然而，当封装和电路的结构变得复杂时，若用高电压电流等级的SiC MOSFET功率模块搭建的电力电子变换器电路，则计算时间长、收敛性差，且电路设计者通常不会使用特殊的仿真工具和参考封装设计的相关信息。另一种方法是借助于测量设备进行测量，这种方法可以进一步分为两个子类别：时域反射测量（TDR）和频域阻抗测量。TDR方法基于传输线理论，并从延迟时间的反射信号中提取杂散电感，但复杂的实验设置、特殊硬件（TDR/采样头）、多步迭代过程限制了其应用。阻抗测量方法依赖于使用阻抗分析仪或矢量网络分析仪（VNA）对功率器件的两个端子之间的频域阻抗进行测量。对于测试平台的杂散电感还可以通过分析器件开关瞬态过程得出测试平台的杂散电感。

针对以上问题，本文在前人研究的基础上提出了一种杂散电感的提取方法，由于高压SiC MOSFET尚处实验室研究阶段，因此，本文以低压1200 V/36 A的TO封装器件为例进行方法验证。

基于Aligent 4294A阻抗分析仪的自动平衡电桥法对SiC MOSFET TO封装器件及其测试平台功率回路的阻抗特性进行测试，然后采用RLC等效模型，在MATLAB中对测量数据进行拟合，得到可以在宽频范围内表征待测器件和测试平台功率回路阻抗特性的杂散参数。本文提出的杂散电感提取方法不仅可以用于提取SiC MOSFET器件封装和测试平台功率回路的杂散电感，还可以推广到结构更复杂的端口网络，如高电压电流等级的功率模块封装电感及其所处测试平台功率回路电感的提取。

1.杂散电感的影响

由于SiC MOSFET的快速开关瞬态过程，导致其对杂散参数更加敏感，为了对SiC MOSFET开关特性进行准确分析，需考虑测试平台中的杂散参数。因此本文首先建立了考虑所有杂散参数的开关瞬态宽频电路等效模型，如图1所示，分析了器件封装电感和测试平台功率回路杂散电感对SiC MOSFET所受电气应力的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMlJA0bgIDvxichoMXvVDN5dGnecvAuc2YibNp5xY8ueyPiacygU73WKg1w/640?wx_fmt=png&from=appmsg)

SiC MOSFET器件模型中包括栅极内阻RG1、栅源极杂散电容CGS、栅漏极杂散电容CGD、漏源极杂散电容CDS、栅极封装杂散电感LG1、漏极封装杂散电感LD1、源极封装杂散电感LS1。

采用阻抗分析仪对负载电感和直流母排进行测试，测试完成后，结合测试出的幅频曲线和相频曲线，从谐振点出发，采用RLC谐振模型进行拟合。根据拟合结果，对负载电感以及直流母排采用图1所示的模型进行建模，其中，RP和Rbus分别为负载电感和直流母排的杂散电阻；CP为负载电感杂散电容；Lbus为直流母排杂散电感；LG2为栅极驱动引线的杂散电感；LD2、LS2、Lb1、Lb2分别为功率回路与器件之间引线的杂散电感；CD、Rd和Ld分别为二极管结电容、杂散电阻和引脚电感。根据集总参数的概念，可以将上述杂散电感用3个等效电感来描述：栅极电感LG=LG1+LG2，漏极电感LD=LD1+LD2，共源极电感LS=LS1+LS2，功 率 回 路 总 电 感Lloop=LD+LS+Lb1+Lb2。功率回路总电阻Rloop包括SiC MOSFET的导通电阻以及整个功率回路的引线电阻Rb1和Rb2。

由于杂散参数的存在，导致开关瞬态过程中器件承受较大的电压和电流过冲。若采用PiN二极管来续流，则在SiC MOSFET开通阶段，当漏源极电流从0上升至负载电流时，由于PiN二极管内部少数载流子的积聚，会在从正向切换到反向的瞬间产生较大的恢复电流，导致SiC MOSFET开通后出现较大的电流过冲。即使采用SiC肖特基势垒二极管，其反向恢复过程极短，甚至可以忽略，但此阶段SiC MOSFET可看成一个电流上升斜率恒定的电流源，会对二极管结电容CD和负载电感的匝间杂散电容CP进行充电。该充电电流流过SiC MOSFET，同样会导致开通过程出现一个较大的过冲。此时，SiC MOSFET的开通电流峰值可近似表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMTMgLE5ql9tAiaHXdrt8icETvOYVpHHhR41sLiaAGvqSj6fHdfABzRvrfA/640?wx_fmt=png&from=appmsg)

式中，CF=CD+CP。

在SiC关断阶段，电流由稳态值下降至0，由于功率回路杂散电感的作用，导致出现较大的电压过冲。忽略二极管导通压降和回路杂散电阻压降，关断电压过冲可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMWibDODRyuBTbLjFgrPhN7ibokibIIj6jF4z8YOEgvVCFdqom5e7fTEvsg/640?wx_fmt=png&from=appmsg)

式中：dif/dt为关断电流变化率；∆t为漏源极关断电压UDS从稳态值上升至峰值的时间；∆I为对应时间对漏极电流ID的衰减值。

为了验证杂散电感对SiC MOSFET器件开关瞬态过程的影响，本文采用Cree公司提供的SPICE模型，在LT-SPICE电路仿真软件中搭建了相关仿真电路，改变功率回路总杂散电感值，分析功率回路总杂散电感对SiC MOSFET开关瞬态过程的影响。此外对芯片和器件的漏源极电压进行测量，通过改变器件封装电感在整个功率回路电感中所占比重，来分析器件封装杂散电感对SiC MOSFET漏源极电压的影响。

1.1测试平台功率回路杂散电感的影响

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMaeC1FcJ1ztRuuN5rkyxywUoawFBX2RB23c7OCaRjqpTUviamXLCrSDw/640?wx_fmt=png&from=appmsg)

图2和图3给出了在500 V/20 A工况下的SiC MOSFET器件漏源极关断电压UDS和开通电流ID波形，从图中可以看出随着功率回路杂散电感的增加，开通电流上升斜率略有减缓，增大功率回路杂散电感的同时也增大了电流给回路杂散电容充电的时间，因此电流过冲整体仍然呈现递增的趋势，但是电流过冲相差很小，当功率回路杂散电感从100 nH逐渐增加到160 nH时，电流过冲只增大0.5 A。从仿真波形可以看出关断电压过冲与功率回路杂散电感几乎呈线性关系，当功率回路杂散电感从100 nH逐渐增加到160 nH时，关断电压过冲从87 V增大到138 V，可以看出随着功率回路杂散电感值的增大，电压过冲也随之增大。对于更高电压等级更大功率的高压SiC MOSFET功率模块，其电流等级更高，电流变化率更大，对开关瞬态特性功率回路的杂散电感要求更高，所以为了避免在实际测试和应用中出现较大的电压过冲，进而导致模块损坏或甚至失效，必须减小功率回路的杂散电感。

1.2器件封装杂散电感的影响

在开关瞬态电压测量中，对于SiC MOSFET分立器件来说，器件内部芯片漏源极电压无法直接测量，因此很难通过实验分析封装电感对芯片开关瞬态的影响，因此本文通过仿真来分析封装电感对SiC MOSFET漏源极电压的影响。本文固定功率回路总杂散电感为100 nH，改变封装杂散电感值，从而改变其在总杂散电感中所占比重。CREE公司给出SPICE模型，漏极电感为6 nH、源极电感为9 nH。此时比重为15%，从图4(a)可以看出当漏极和源极封装电感在总杂散电感中所占比重为15%时，芯片的漏源极电压过冲略微高于分立器件的漏源极电压过冲，电压过冲相差为7 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMwuPfSppK82fC9LAng0kyO7N3Dx4VEY8ibal0rhNPTWKjkUMJGibfIicrA/640?wx_fmt=png&from=appmsg)

然而相比于简单的TO封装器件，高压大功率的SiC MOSFET功率模块内部结构的互联结构更加复杂，引入杂散电感更大，使得漏源极功率端子封装的杂散电感在功率回路总杂散电感中占有较大比重，进而导致芯片和模块的电压过冲具有较大差异。从图4(b)看出，当其比重提升到60%时，芯片和器件的漏源极电压过冲相差已经高达67 V。可见当SiC MOSFET封装电感在整个功率回路中占有较大比重时，芯片与器件（或功率模块）的漏源极电压差就会较大。在实际应用中，尽管功率模块端子的瞬态电压未超过额定值，但内部芯片电压可能已经超过安全阈值，并带来了功率模块损坏或失效的风险。因此在对器件和模块进行封装时要尽可能减小其杂散电感。

2.杂散电感的提取

SiC MOSFET器件由于开关速度较快，导致其对电路的杂散参数特别敏感，为了在实验中定量分析杂散电感对器件的开关特性的影响，需要准确提取器件封装和测试平台功率回路的杂散电感。

SiC MOSFET分立器件和测试平台功率回路杂散电感提取主要利用Aligent 4294A阻抗分析仪对待测器件和测试电路进行阻抗测量，然后通过MATLAB对测量结果进行拟合，从而得出杂散电感值。

2.1 测试平台功率回路杂散电感提取

基于Aligent 4294A阻抗分析仪对SiC MOSFET测试平台功率回路的阻抗特性进行测量。根据图5给出的测试平台功率回路的阻抗测量电路，将SiC MOSFET分立器件与负载电感从测试电路中拆除并将续流二极管用短接线短接，将测试电路中的漏极和源极用很短的导线（忽略导线电感）引出，将导线接在阻抗分析仪的测试端口进行测量。在测量前需要对测试夹具进行开路校准和短路校准，频率测量范围为1~104kHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoM4hNmz59HQwH5MrKRre2ibc99z2NKMSqSuvib3gLLqYqRHS7fO99lcJ9Q/640?wx_fmt=png&from=appmsg)

根据图1给出的模型可以将SiC MOSFET的功率回路采用RLC串联谐振模型等效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoM0k739zFPPYpyfnVoA6cOvU4ibvibFVS288CqGsn47Io5u85HXYJiccdRw/640?wx_fmt=png&from=appmsg)

图6所示的RLC串联谐振等效模型可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMHSIXlNL4uJ55En788xPpRhRAw2WoibHZcNQ8zmZSMVG0srlu1gaibdoQ/640?wx_fmt=png&from=appmsg)

式中：Z为串联谐振等效模型的阻抗；R、L、C分别为模型中的杂散电阻、杂散电感和杂散电容；ω\=2πf，f为频率。

将SiC MOSFET功率回路的阻抗测量结果导入MATLAB，然后用式(3)拟合阻抗测量结果，测量结果和拟合结果如图7所示，其中θ为相角。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMz1ibj7pgfibmH5Yib1N6pKRLOtursktuxCnONOSP5MpCjFFNGopKiaHtlw/640?wx_fmt=png&from=appmsg)

根据图7可以看出，调整相应的参数可以得出比较理想的拟合效果，此时拟合模型对应的电感值即为功率回路的杂散电感值。根据图7给出的结果。

本文中SiC MOSFET功率回路总杂散电感为100 nH。

为了验证上文对SiC MOSFET器件测试平台功率回路杂散电感提取方法的准确性，在待测试的SiC MOSFET动态特性测试平台上进行双脉冲实验，通过对关断过程中的电压电流波形进行分析，提取测试平台功率回路杂散电感。

根据上文所述，在关断阶段，电流由稳态值下降至0，由于功率回路杂散电感的作用，在SiC MOSFET漏源极两端会产生较大的电压过冲，关断电压过冲可以根据式(2)计算，本文根据式(2)所述的方法计算功率回路的杂散电感。基于对测试平台的双脉冲实验结果，对SiC MOSFET关断电压电流波形进行分析，图8给出了500 V/20 A工况下的关断电压电流波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMia4L3Uu1Y4ugq5icLtpIqslLCkzVKTOiba0ibtkJibJaDwoicEeBdiaCa8WDw/640?wx_fmt=png&from=appmsg)

由图8可以看出，SiC MOSFET关断电压过冲∆Uoff=118 V，∆I/∆t\=6.5 A/6 ns，根据式(2)可以计算出SiC MOSFET器件动态功率回路杂散电感为108.9 nH。上文用阻抗分析仪提取的功率回路杂散电感为100 nH。2种方法提取的功率回路杂散电感值绝对误差为8.9 nH，结果较为接近，互相验证了其方法的准确性。

2.2 器件封装杂散电感提取

SiC MOSFET分立器件的封装电感主要由引脚电感和焊接线电感组成。为此本文采用Aligent4294A阻抗分析仪对SiC MOSFET器件3个引脚中的任意2个引脚（如栅极和源极）的阻抗特性进行测量，另外一个引脚（漏极）悬空。当SiC MOSFET处于关断状态时，高频下其可等效为电容。因此，可以采用RLC串联谐振模型来拟合测量结果。

对于SiC MOSFET分立器件的每2个引脚而言：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMVz0YmU6rVNMVsORWibqm9gvXezcohvlXPd3YeJSialKvJyw1C5G33hxw/640?wx_fmt=png&from=appmsg)

式中：RPGS、RPGD、RPDS分别为栅源极、栅漏极、漏源极等效电阻；LPGS、LPGD、LPDS分别为栅源极、栅漏极、漏源极等效电感；CPGS、CPGD、CPDS分别为栅源极、栅漏极、漏源极等效电容；RG、RD、RS分别为栅极、漏极、源极电阻。

在测量阻抗之前，首先要对夹具进行校准，频率测量范围为10~105kHz，测量完毕后将阻抗测量结果导入MATLAB中用式(3)表示的RLC串联谐振模型拟合阻抗测量结果，拟合结果如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMd0PydicDQIuWTHMr0hM3trUyhp8ibpnNuI4GXAB11HU5lo1XJ4672Z6g/640?wx_fmt=png&from=appmsg)

调整相应参数使拟合结果与测量结果尽可能重合，此时拟合模型对应的电感值即为SiC MOSFET分立器件GS、GD、DS引脚的封装电感值。根据图8给出的拟合结果联立式(4)—式(6)可以计算得出器件封装的电感值，根据CREE公司提供的数据手册可得其封装电感的标准值，如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnGC22wbN19Wn1Dw93ibnXoMXRzdPwESiczkfa09icI7z6NFbqlJYCmTxJGFvfVxO4kCowxvxfY7j1ow/640?wx_fmt=png&from=appmsg)

从表1可以看出测量值和标准值的最大误差仅为3nH，所以本文提出的封装电感提取方法可以用于器件封装电感的提取。

3.结论

1）当器件的漏源极封装电感在功率回路所占比重由15%提高到60%时，芯片与器件的漏源极电压过冲差值由7 V增加到67 V，可以看出随着器件漏源极封装电感的增大，芯片和器件的漏源极电压过冲差值也会增大。此外，当功率回路杂散电感由100 nH逐渐增加到160 nH时，关断电压过冲也随之从87 V增大到138 V，可以看出随着回路杂散电感值的增大，电压过冲也随之增大。

2）利用Aligent 4294A阻抗分析仪测量器件封装和功率回路的阻抗特性，在宽频范围内可以用简单的RLC串联等效模型完全表征封装和功率回路的阻抗特性。

3）采用本文所述杂散电感提取方法提取的功率回路杂散电感与实验结果仅相差8.9 nH，封装电感与数据手册的最大误差仅为3 nH，可以看出提取结果的误差较小。因此本文提出的杂散电感提取方法可以用于器件封装及其测试平台功率回路的杂散电感的提取。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)