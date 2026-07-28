# SiC器件应用篇：基于共模抑制 LLC 变换器的高功率密度弧焊电源研究

原创 赵千淇 , 程旭峰 SiC碳化硅MOS管及功率模块的应用 2026-06-13 08:18 广东

> 原文地址: [https://mp.weixin.qq.com/s/yIf1yNzNyl0PUhHgn-UJVw](https://mp.weixin.qq.com/s/yIf1yNzNyl0PUhHgn-UJVw)

文章来源：科学技术与工程

作者：赵千淇1,2,程旭峰1∗,李亚卓1,刘晨阳3,汪殿龙4(1.河北科技大学机械工程学院,石家庄 050018;2.吉林大学仪器科学与电气工程学院,长春 130061;3.大连海事大学船舶电气工程学院,大连 116026;4.燕山大学机械工程学院,秦皇岛 066004)

摘要：弧焊电源作为弧焊技术的核心部件,其性能直接影响焊接质量和效率。针对传统工业弧焊电源存在的损耗大、体积大、噪声污染严重等问题,旨在开发一种高性能弧焊电源解决方案。通过采用对称谐振网络电感\-电感\-电容(inductor\-inductor-capacitor,LLC)谐振变换器拓扑结构,结合高频碳化硅(silicon carbide,SiC)功率器件设计新型弧焊电源,通过理论分析、仿真验证和实验测试,系统研究了电源的工作特性与降噪性能。实验结果表明,所研制弧焊电源样机输出功率达11kW,功率密度相比工业级产品提升约300%,峰值效率达到 96.3%,有效降低了工作噪声;电源外特性满足弧焊工艺要求,系统体积显著减小。可见,基于LLC谐振变换器和SiC器件的新型弧焊电源设计方案,能够同时实现高效率、高功率密度和低噪声运行,为工业弧焊设备升级提供了有效技术路径。  

关键词：弧焊电源;LLC谐振变换器;SiC器件;对称谐振网络

在电弧焊接过程中,熔池能够实现基材与焊条材料的充分冶金结合,形成具有优异力学性能的焊接接头。该工艺形成的焊缝具有强度高、瑕疵小、气密性良好等优点。得益于其卓越的材料适应性和工艺灵活性,电弧焊技术已广泛应用于航空航天、汽车制造、石油化工、冶金装备等现代工业的关键制造环节。  

弧焊电源作为电弧焊系统的核心能量转换装置,其性能直接决定着焊接工艺的质量和效率。然而,当前主流的工业级弧焊电源通常采用硅绝缘栅双极型晶体管(insulated gate bipolar transistor,IGBT)作为开关器件,并工作于硬开关模式,这不仅导致显著的开关损耗,更受限于IGBT的开关特性,其工作频率通常被限制在10kHz以下。较低的开关频率直接导致变换器中的电感、变压器等磁性元件体积庞大,进而引发电源功率密度不足、效率偏低及严重的噪声污染等问题。  

为攻克上述技术瓶颈,学术界与工业界持续致力于弧焊电源结构的优化研究。其中,LLC谐振变换器技术的引入被视为一种有效的解决方案。文献\[15\-16\]率先将 LLC谐振变换器技术应用于弧焊电源设计,利用其固有的软开关特性显著降低了开关损耗,并将工作频率提升至数十 kHz量级,从而有效提升了电源的效率和功率密度。文献\[17\]在此基础上进一步创新,通过磁集成技术将谐振电感嵌入高频变压器,从而进一步减小了系统体积。然而,这些基于传统 LLC拓扑的方案存在一个共性缺陷,即其谐振网络的非对称性,导致高频变压器原、副边电压变化率不匹配,从而产生显著的共模电磁干扰噪声。这种共模噪声不仅会劣化电网质量、影响焊接电弧的稳定性,甚至还可能干扰周边敏感电子设备的正常运行。为抑制共模噪声,常见做法是加装电磁干扰 (electromagnetic interference,EMI)滤波器。但文献\[20\-25\]指出,滤波器的体积与待抑制的噪声水平呈正相关,这意味着为了应对严重的共模噪声,往往需要配备体积庞大的滤波器,这与弧焊电源高功率密度的设计目标相悖。  

为解决上述问题并满足弧焊工艺对电源特性的要求,现提出一种基于对称谐振网络的新型 LLC变换器拓扑,并结合高频SiC器件研制一台11kW的电源样机。旨在消除共模噪声,为实现兼具高效率、高功率密度与低电磁干扰的弧焊电源提供新的解决方案。  

1.电源主电路拓扑与工作模态分析  

1.1电源主电路拓扑

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN7xfTibSsVgJCrhp8313kMiac5DRK0pT9cxMAN7fAeFniarVVmjKhKgAqicRA7Ophiaib8OUN9tYdjZpl6a6R8RDryZJBvgenar7qrk/640?wx_fmt=png&from=appmsg)

基于对称谐振网络 LLC变换器的弧焊电源主电路拓扑如图 1所示,其中阴影部分为电源的 DC/DC变换器部分。该变换器由 4个开关管(S1、S2、S3、S4),2个谐振网络(Lr1、Cr1、Lm1、Lm2、Cr2、Lr2),2个变比为 n∶2∶2的中心抽头变压器(T1、T2),4个整流二极管(D1、D2、D3、D4)以及滤波电容组成。VAC为三相交流电压源;VAB为谐振网络的输入电压;Vdc为直流母线电压,变换器输出端连接焊枪。  

1.2工作模态分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOrcIQLm6R9AwuEfldqcic3MataAosWhe4fbiciaLbClPoQtUAD1wLficl6MEN3o3Md4vdasicbpnxgTqENPn0mll3wmEAmEFZ3QUSU/640?wx_fmt=png&from=appmsg)

首先,假设变换器所有元器件均为理想器件,两个谐振腔中的谐振元件参数完全一致。图2给出了 S1~S4的驱动信号(Vgs1~Vgs4)和变换器的关键稳态波形,其中,t为时间,ILr和 ILm分别为谐振电感(Lr1、Lr2)和励磁电感(Lm1、Lm2)的电流,VCr1和 VCr2分 别为谐振电容 Cr1和 Cr2的电压,ID1~ID4分别为二极管 D1~D4的电流。可以看到 S1和 S2以一定的死区 时间互补导通,而 S4、S3分别与 S1、S2具有相同的占空比和开关频率。根据这种导通方式,该变换器在同一个开关周期内可以分为 6种不同的工作模式,图 3中展示了正半周期的 3种工作模式的等效电路图,由于负半周期的工作模式与正半周期完全对称,因此不再赘述。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNSiadaDcaBYGwLlZNicqTWLiaAG33I8S2EJFAaQpKPcYdL7fImScHW7RFsa3jEhl3qHPibgbsfumpxA1IicnJuDUwEV1dFyV1c6n9Q/640?wx_fmt=png&from=appmsg)

模式 1(t0~t1):在 t0时刻之前,谐振电流 ILr为负,其分别为 4个开关管的结电容进行充放电,在该过程中 S2和 S3的结电容被充电至 Vdc,而 S1和 S4的结电容被放电至 0。在 t0时刻,ILr通过 S1和 S4的 体二极管续流,将 S1和 S4上的电压钳位至 0,为 S1和 S4实现 ZVS导通创造条件。此外,在该模式中励磁电感被钳位至 Vo\-,励磁电流 ILm线性下降,励磁电感不参与谐振,由 T1、T2、D2和 D4构成功率传输路径。  

模式 2(t1~t2):t1时刻,S1和 S4实现 ZVS导通,然而此时谐振电流 ILr依然为负,故此时的工作模式与模式1相同。直到谐振电流与励磁电流相等时,D2和 D4关断,S1和 S4正式导通,励磁电感被钳位至Vo+,励磁电流线性上升,此时 D1和 D3开通构成功率传输路径。  

模式 3(t2~t3):t2时刻,S1和 S4关断,变换器进入死区时间,此时谐振电流 ILr为正,其分别为 S1、S4和 S2、S3的结电容进行充、放电,为 S2和 S3实现 ZVS开通创造条件。在该模式中,励磁电感始终被钳位至 Vo+,不参与谐振,励磁电流线性上升,由 T1、T2、D1和 D3构成功率传输路径,将能量传递到负载。  

2.共模噪声抑制机理分析  

弧焊电源的高频化在提升功率密度的同时,也带来了严峻的电磁干扰问题。其中,流经高频变压器原、副边绕组间寄生电容的共模电流是主要的共模噪声源。通过建立变压器寄生电容模型,深入对比分析了传统 LLC变换器与本文中所提对称谐振网络 LLC变换器的共模噪声特性,从机理上阐明了新拓扑在噪声抑制方面的优势。  

2.1变压器寄生电容模型与共模电流通路

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOLlFPdFtXiaNMddKM8kpoqLhqUb5dIICP2wp2mLJdphjy362c3jmvXo34s4IBGPyHwynmW6phenlibibXWF43LAXlicDuXWVlibl20/640?wx_fmt=png&from=appmsg)

在 LLC谐振变换器中,高频变压器绕组间的寄生电容为共模电流提供了通路。共模电流的强度直接取决于变压器各端口对地电压的变化率。变化率差异越大,耦合产生的共模噪声就越严重。  

为定量分析,图 4给出了考虑寄生电容的中心抽头变压器等效电路模型。  

在假设变压器绕组结构对称,即CP1S1\=CP2S1,CP1S2\=CP2S2,CP1S3\=CP2S3的条件下,流经寄生电容的共模电流 ICM计算公式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN6nbvDqPiaic9EhiamKXQ45OnCYNaE96kNqjXnPf0RibbMxlZS47hAaYdu2LVgvNicOrNaFtb3F9Ra0VuzobRY7mib9aZxYxuCpT380/640?wx_fmt=png&from=appmsg)

该模型表明,共模电流的大小直接取决于原、副边端口对地电压变化率的差值。因此,若能实现所有端口对地电压的变化率保持一致,则共模电流在理论上便可被完全抵消。  

2.2传统 LLC变换器共模噪声分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPNob2lfAWorLmBsxqibDHGZnwsZmv3ia2rq2765FmnWzMHdQfmBfXJ3myTaJnhB2qr166ZKWKYicovIc4iacNU9tNVeYnmY5yUuTI/640?wx_fmt=png&from=appmsg)

传统 LLC变换器与本文所提变换器具有相同的工作模式。根据图 2所示的划分方法,一个开关周期同样可划分为 6个阶段。鉴于正、负半周期工作模式完全对称,仅对正半周期的共模噪声进行详细分析。  

t0~t1区间:变压器等效电路模型如图 5所示。该区间内,励磁电感两端电压 VLm等于输出电压 Vo的 n倍(n为变压器变比),同时副边二极管 D2导通。因此,该区间变压器对地电压可表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO7M1LVKdD9UVXQibE4cDcJvNhvktfzvD9Ay9RVseRiaJKQtMdFnFDGkgNtZPjok2SSicgtGdhWzA4Lia6WKOL6h0ibdUZZiacTibX2LA/640?wx_fmt=png&from=appmsg)

由于输出电压 Vo为常量,因此,在该区间内变压器各端口的电压变化率可表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO2HHhG3TUSGibibAVTFxEQQpdyz2rOUngxKkJGYjnk2KVqCDsic9MvHEPc90ILJwR3NYergiaGgkQIBoQz0051j5fJQq7TpkpgsgM/640?wx_fmt=png&from=appmsg)

结合式(1)和式(3)计算可得,该区间内变压器产生的共模电流 ICM\=0。  

t1~t2区间:由于 Vdc向负载供电,变压器的等效电路模型未发生变化,因此该过程中变压器产生的共模电流与前一区间相同,即 ICM\=0。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNiaBS2AaIkmHCcoTx4kJgeeQOK7zynnmUKnyJLIDSXQN8TUAyMqtc8eHa2GZRrfVl63Ik7JgbJYib4iaFwQbbZhzIEVk26Qwbh8k/640?wx_fmt=png&from=appmsg)

t2~t3区间:该区间内的变压器的等效电路模型如图 6所示,此阶段原边开关管全部关断,谐振电流对开关管的寄生电容进行充放电。此时,变压器原边端口电压 VP1和 VP2不再是固定值,而是随谐振电感和电容上的电压变化。其关系可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUtHmlsRSEVmA6ojKLib5HibeHgKlVCicP6SZ5rOk1F11vWzYmOrXNpeR9IkbjhKJ6GwoWDPbUYK6PjBqibBkbZlLRbN2sJBm18SU/640?wx_fmt=png&from=appmsg)

而副边电压仍被钳位,变化率为零。因此,原边电压变化率不为零。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP1X0Wia5vyA89qCjueO7SwickGDE0ibTIChWhQgeFjVBF7tLtehWm7xmasX5DaFDP67zCrgU27sQDOXXjyrdIE6nvLibfagctyleQ/640?wx_fmt=png&from=appmsg)

将式(5)代入式(1)计算,此阶段将产生显著的共模电流,即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMlhCHHGLvjBHmibbnl4fFiahByZibdyobZ4zoaCpM0g8ZE9yvrr56hoLW5MO2Mk7Hiaa7Gv1iammUc9TnSro9zss4uuohUgLYQvWiao/640?wx_fmt=png&from=appmsg)

这表明,传统 LLC变换器在该阶段内会产生严重的共模噪声。  

2.3所提变换器的共模噪声抵消机制

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMH8Eme7uWrdFnDMrXY8NuiczibgFEyL6W3pQaib9PCysODhfmP5RBibzV6V1Sia6m1ricc5gnrQaL0e860x0lnfMeNB2BGRj0OB4VjM/640?wx_fmt=png&from=appmsg)

所提出的变换器中两个变压器采用串联连接,其电路结构可等效为图 7。  
  
t0~t2区间:其工作状态与传统 LLC变换器相同,变压器端口电压被钳位,电压变化率为零,因此ICM\=0。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPGJW4iax5icnb1unFHgZ7FOiandCgicDGDiaCo9lRL4pvQvzmRPI4iab2JibZSgeaxsJarD0XKprjxFpEx2akMv06w7Ryz05PVTSvR6U/640?wx_fmt=png&from=appmsg)

t2~t3区间:该区间内的变压器的等效电路模型如图 8所示。由于两个谐振腔参数完全对称,其两端电压满足

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOIedUTkPOx3RakA7UntgwG7QNNu6j97UZMWib0O52P6gh7dwFn9HJabSLClTA4cvNAYFfkb3x3qORwF6TKGfY9MiaeDvKkRkx78/640?wx_fmt=png&from=appmsg)

这种对称性导致变压器原边两个端口对地电压被精确地钳位在固定的电位上,而与谐振过程无关。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOotMdCGoibSckmjFJL3nhBiaUd6ibmhy4C27qZsiaJ0MVIvqfsynuZhxNibJV0xunDXsjxNWXVMmvSMmPuY29KO3JW4ibVOaaL9XuBU/640?wx_fmt=png&from=appmsg)

由于 Vo与 Vdc为常量,因此在整个开关周期内,变压器所有原、副边端口对地电压的变化率恒为零。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN7BgNrYNTod4DSUocEJ6TB0s0RUibcFPkSUUVRs02KYz72iabq2ADM6VIHeBNhlLhj0IBuLWsK4Bk1FsqmAjNqEO5Kt2DfcCtyc/640?wx_fmt=png&from=appmsg)

根据式(1),这意味着在整个工作周期内,所提出的变换器理论上不产生共模电流。  

表 1清晰地对比了两种拓扑在各工作区间的共模噪声情况。可以看出,所提出的变换器通过构建对称的谐振网络,可以使变压器端口对地电压的变化率在全周期内保持一致,从而消除了共模电流的产生路径。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMhnvibQQ8abicLKibibKxT59OadYRQOXPlNmrTIng7HAYlGSKrLPUBUHrNicLkyvy2nlMhzcDSYOwS6icQYfm58qZ0IHootetvdsfcw/640?wx_fmt=png&from=appmsg)

2.4仿真对比验证  

为验证上述理论分析,基于表 2的设计参数,对传统 LLC变换器与所提变换器进行了仿真对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMzYnBnicFJBax46ws8d8KK6bZicyWA22SNW5kReJvcUrJxVaENiaJ24kjicakYwT0TT1RtEoo1WYgTyQEfgSzSjaEwltciaaame7iaY/640?wx_fmt=png&from=appmsg)

图 9(a)展示了传统 LLC变换器中变压器原边电压VP1与副边电压 VS1的仿真波形,可见二者电压变化率存在明显差异,这正是共模噪声产生的原因。作为对比。图 9(b)显示,所提变换器的 VP1与 VS1具有完全一致的dv/dt特性,从而消除了共模噪声的产生条件,验证了对称结构的有效性。  

需要注意的是,上述仿真基于谐振参数理想对称的条件。尽管实际元件存在公差,但所提方法的共模噪声抑制能力源于其结构对称性,对参数偏差具有一定的内在鲁棒性。工程上通过选用同批次元件并优化布局的对称性,即可有效控制参数偏差,确保抑制性能。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPAuwI4G0JW6R7AVLWWmtz3N8re3UddhtnmbHjM8TkG8l9ibtczMgmkMc9MeV8K9LtGYfibTUmykjSjliaI0NgjYn02hSfb0n3Lec/640?wx_fmt=png&from=appmsg)

3.电源研制  

3.1对称谐振网络 LLC谐振变换器设计  

表 3为所提变换器的关键技术要求。该变换器额定输入电压为540V,额定输出为 31.5V/350A。其硬件架构的核心器件包括功率开关、谐振元件、变压器及整流二极管。具体而言,功率开关采用Tokmas公司的型号为CI90N120SM的SiC MOSFET;整流部分使用Wolfspeed公司的C5D50065D快恢复二极管,并采用三管并联结构以提升载流能力;变压器磁芯为 PM74;谐振电感采用铁硅铝磁环电感,谐振电容则采用CBB电容。表3给出了相关设计参数。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMnhhMmPaMToDhibRoqib3uWWsQSV6ZxtaWV9C7d3lzT3Vb9Q5BUiaViabny4OVfuUibtNFIfmHUg03CL57XOJfHDE8Yc4KZCYg0Ov4/640?wx_fmt=png&from=appmsg)

3.2电源样机搭建

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOqIKKChESo6m6IU5xLj0hhiaYF2ws4oic9fb5ib77wcIOqQq6I04HL4mmt6HGPMVQ5arqqntkIh9jwq8ZiaGDYmzhbbZkLb3AjO4E/640?wx_fmt=png&from=appmsg)

图 10展示了基于前述硬件设计的弧焊电源实验样机。该样机主要由主电路板、变压器和控制板三部分构成,整体采用层叠式布局以提升功率密度。同时,为降低主电路中强电信号对控制电路的干扰,主电路板与控制板采取了分离布置。在整流二极管部分的 PCB走线设计中,通过开窗处理并加装铜条以增强导电能力,确保系统能够稳定承受长时间的大电流工作。针对弧焊电源工作电流大、散热要求高的情况,样机在三相整流器、SiC MOSFET和整流二极管等功率器件处均配置散热片并配合功率风扇进行散热。此外,为提升触摸屏信号的抗干扰能力,其连接线采用双绞线绕制方式,以抑制差分信号中的共模噪声。

4.实验验证  

4.1实验平台

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPUycRAcWXib6Gm67ufOcv6m2gHV9GdCfeLWwY5X34VPcibad3DQ3naOtgdyQcBeicFcz5BhPibsuYjLP8Lbt6axSlSYXhicnEHD9Wo/640?wx_fmt=png&from=appmsg)

为验证所研制弧焊电源的性能,搭建了如图 11所示的实验平台。该平台主要由三相调压器、拓利亚X08P3010数字电源、麦科信STO1004示波器、电流探头、功率分析仪、万用表、电流表以及功率电阻箱(阻值范围 0.095~2Ω)组成。基于该平台,对样机的软开关特性、动态响应、外特性、功率密度以及效率等关键指标进行了系统测试。

4.2实验结果

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPPAibpUMYJJuQgMxultmXDiacdTUdBMXRILdz7418YB0RdPflZB9bZqibIsgK97VzcSeDgctAmIP9vTbYsU1uG9WSW4swDKS0tWo/640?wx_fmt=png&from=appmsg)

由于电源在正常工作状态下直接连接测试设备会引入较大谐波,因此选择在低压条件下测试 4个开关管的软开关性能。图12给出了在母线电压为300V条件下,4个开关管的栅源电压(Vgs)与漏源电压(Vds)波形。其中,可以看到,各开关管的 Vgs均在 Vds下降至零之前开始上升,即驱动信号与漏源电压无重叠区域,表明所有开关管均实现了零点压开通(zero\-voltage switching,ZVS),有效降低了开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPRsnlzvoxaiaNV7Iqibliczwicjruibm9ibxdw0GPVUzwdS81CW5OMOTibQGraPaj1dySYFUpKuzDKD1p1zRJA8f5h8qyElV9DFRx3BE/640?wx_fmt=png&from=appmsg)

在负载固定为 0.095Ω、直流输入电压 540V时,通过触摸屏分别设定参考输出电压为 29、31.5、35.5、29V,测得输出电压波形如图 13(a)所示。结果显示,输出电压的响应时间约为 50ms,表明电源具备快速、精准的电压跟踪能力。进一步的,在负载不变、参考输出电压31.5V条件下,调节输入电压从450V升至 550V再降至 450V,输出电压基本保持稳定,波动极小,如图 13(b)所示,说明电源具有良好的输入电压适应性与闭环稳压性能。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOz8Vib9qUvIY5NicbNp6nulqmdAyicN31Zco1CWQiakewEzibBzm6DrSqMUFKuzpFjMVXC5qqiaXXEVgATrokw61jNL0wCCHzane2C4/640?wx_fmt=png&from=appmsg)

针对气体保护焊对电源恒压特性的要求,测试了电源在不同负载条件下的外特性曲线。如图 14所 示,当设定输出电压为 29、31.5、35.5V时,随着输出电流增大,输出电压均保持稳定,未出现明显跌落,符合恒压源的外特性要求,满足实际焊接工艺需求。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMK2yOUx3Tl1M8JytIoWbrcibXvlwJLjxM4tscOZWqgX2M1nmE7SwiaWkCI9aIKbBZianDmB7bvV4823mltuOxfHE16STOUqC9Qb8/640?wx_fmt=png&from=appmsg)

图 15展示了电源在不同输出功率下的效率曲线。结果表明,当输出功率接近 2kW时,电源峰值效率达 96.3%,而随着输出功率增加,效率曲线呈现缓慢下 降趋势,直到满负载运行时效率为88.6%。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP9tTqNN0GXVAZG9kjuUIF9uPRZdld1ZlXglricUzTP35eGEicsu4z4KP5FkZwQSwAmgmxTUZicVlyZjXtMTSecPTxkfoll76WkPk/640?wx_fmt=png&from=appmsg)

如表 4所示,所研制的弧焊电源样机与唐山松下 YD\-350GS6的商业型号相比,在多项性能上展现出显著优势。这得益于基于SiC开关器件的软开关DC/DC变换器设计,该设计通过提升工作频率,有效减小了变压器与散热器的体积,并降低了开关损耗,从而实现了更高的功率密度与效率。  

5.结论  

针对传统工业弧焊电源存在的体积大、效率低以及共模电磁干扰噪声严重等问题,提出了一 种基于对称谐振网络的 LLC谐振变换器新拓扑,并结合高频 SiC功率器件,研制了一台11kW弧焊电源样机。通过理论、仿真和实验验证,得出以下结论。

(1)所提对称谐振结构通过平衡高频变压器各端口对地的电压变化率,从机理上消除了共模噪声传播路径,降低了对 EMI滤波器的依赖。  

(2)利用 SiC器件的高频特性,将开关频率提升至百 kHz级,显著降低了磁性元件和散热器的体积。实现了功率密度相较于市售工业级产品提升约300%。  

(3)软开关技术的实现保障了电源的高效运行。测试结果显示,样机峰值效率可达 96.3%,额 定满载效率为 88.6%,且外特性满足弧焊工艺的恒压要求。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNLib13MQibOzrbjwyGK0q1spGlKibPeyLZxE0sqo4ku1bOISbFrysgBMyoNwCL1Yic0FxCpk6maiakJflJxeQdsbtqymHKaiax7SvZg/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSQDpCdBm0PI4icrR77QJTG0WZSdaziajTpjYiaia7icOtK138seuyPkbc4icT4ibEfTo43QGjOGgBeMTpiba64C8lCPoQ4kCcUicpIO5U/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPnO5Yd0flwhBRLjZKLc9oY6mqohltvEYo4DDveibEx1AYNjkLiciazPicYkicAlcZlrWzoYCLhIp31lOOKKkHibYHjKCDlx1DFrxTzk/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP1Kl5KbJkibiangUN1W1niaGtylmkxvw0CVibeFh8JDjdNMnxxknFIJQJT7cRUI6kWfsYGXZeFCOEKrevjNXgxS1k8Dlef1WHVOmM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)