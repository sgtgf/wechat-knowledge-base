# 大功率双向 DC-DC 变换器设计

原创 廖晓斌 ；雷盛长 SiC碳化硅MOS管及功率模块的应用 2026-04-28 12:10 广东

> 原文地址: [https://mp.weixin.qq.com/s/LuXe5hMTqwvZuLGKac9sJA](https://mp.weixin.qq.com/s/LuXe5hMTqwvZuLGKac9sJA)

文章来源：价值工程

作者：廖晓斌①；雷盛长②；曾荣周②；陈昊达③；李松睿①（①株洲福德轨道交通研究院有限公司，株洲412005；②湖南工业大学，株洲412007；③天津长天科融科技有限公司湖南分公司，长沙410006）  

摘要：具有大功率和宽电压范围的双向DC\-DC变换器是新能源汽车、储能系统、可再生能源以及智能电网等领域电能转换的关键设备。采用便于升级和维护的单元功率模块并联设计方案，设计了一种大功率和宽电压范围的双向DC\-DC变换器。单元功率模块选用低压母线端两电平桥臂和可以降低高压电池端IGBT开关应力与成本的三电平桥臂混合的拓扑结构。通过实验对变换器的性能进行严格验证，结果表明，所设计的变换器，低压母线端为DC700V，高压电池端电压范围在DC300V\-DC1500V之间，额定电压为DC1000V，额定功率高达500kW，纹波电压为0.2%，纹波电流为1%。这一成果为相关领域的工程应用提供了极具价值的参考依据。

关键词： 双向DC\-DC变换器；两电平桥臂；三电平桥臂；模块化设计；下垂控制算法

0.引言  

随着新能源技术的快速发展，诸如新能源汽车、储能系统、风能、水能等可再生能源的利用以及智能电网等领域对电能转换设备的要求愈发严苛。双向DC\-DC变换器实现能量的双向流动，可在不同直流电压等级间灵活转换电能，而得到广泛应用。研究人员设计了不同结构的双向DC\-DC变换器。然而，在实际应用场景中，电能转换系统对双向DC\-DC变换器的电压适应范围和功率等级提出了更高的要求。具有大功率和宽电压范围特点的双向DC\-DC变换器，极大地拓展了应用场合，但是文献报道很少。本文通过两个功率单元模块并联，设计一款能够满足低压母线端DC700V，高压电池端DC300\-1200V，额定电压DC1000V，额定功率高达500kW的双向DC\-DC变换器。  

1.变换器拓扑结构与工作模态  

1.1拓扑结构  

为便于安装和维护，该变换器采用模块化设计，单个模块功率250kW，由两个功率单元模块DM1和DM2并联完成，主回路如图1所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOTYQ6uhXYtvzvQ0uPpaODPFGia7ibOeUt86eBrJWZiaQ75xvPRqbroKLxgg9pCVJ3tCCQp8D7eFLniaxpNjt5rr9VuaqAIZ2UWesc/640?wx_fmt=png&from=appmsg)

  
高压电池端并联后，通过U1共模电抗、C4滤波电容和R1，R2假负载回路后连接至电池或是其他负载。两个功率单元并联采用改进的下垂控制方法，实现并联均流输出。以实际输出电压作为反馈，构建一个能调节动态更新电压值的PID控制器，从而达到预先设定的输出电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNzk65gYesZ9sX7AxqNu781ib1sekicQL5dpJOzcdEmialgOVCxeu0NnYia7CflN6rkEI0YwBsiaNRzpJlX6UNs27QdjhJP4n6FgdKQ/640?wx_fmt=png&from=appmsg)

传统两电平的方案，会不可避免的增加IGBT选型的困难以及成本。本文设计方案的功率单元拓扑结构如图2所示，因为低压母线端电压为DC700V，电压等级在常规器件耐压范围内，所以，低压母线端采用两电平桥臂；高压电池端电压高达DC1500V，因此选用三电平的方式。三电平桥臂中四个IGBT开关的电压均衡，可有效地减小开关应力。在IGBT选型时可以有效降低成本，不仅如此，三电平上下两个IGBT模块的驱动信号错相180°，使得在电感、电容上体现的等效频率翻倍，还可以进一步降低输出电压的纹波。在三电平桥臂设计中，电容C2和C3的电压平衡状态至关重要。一旦两者电压差值超出允许范围，将对系统性能产生不利影响。为有效解决这一潜在问题，在控制策略中专门引入了电容电压不平衡调节机制，以此确保系统运行的稳定性与高效性。

由于高压电池端三电平的上下结构与低压母线端两电平的结构一致，因此在设计实物的时候选择将低压母线端与高压电池端设计为三个大小相等，参数一致的模块。其中Q1与C1为一个模块，Q2与C2为一个模块，Q3与C3为一个模块。中间通过外接电感连接，通过这种拓扑既可以实现能量的双向流动，又可以使得各部分模块化。模块化的设计还可以提高电压范围，高压电池端的输入/输出电压等级可达到1500V。本方案为了实现两电平与三电平模块的统一，故选用了电压等级为1200V的IGBT。如果需要更宽范围的电压等级，可以选择电压等级更高的IGBT进行模块集成。另一方面，若需要增加功率等级，由于采用了模块化的设计，可通过模块的堆叠实现更高功率等级的DC\-DC变换。  

双向DC\-DC功率单元主要部件有：低压母线端滤波电容、驱动控制系统、IGBT模块斩波、高压电池端滤波系统、通讯控制接口等器件。滤波电容对直流电压进行滤波，减小纹波电压。驱动控制系统的功能包括低压母线电压检测、电池上（电容C2）电压检测、电池下（电容C3）电压检测、电感电流检测、输出电流检测、散热器温度检测，IO接口通讯，人机界面HMI等。通过这些信号检测，对DC\-DC输出进行闭环控制，得到双向可升可降可调的稳定直流输出电压。IGBT模块控制器控制功率模块器件，通过PWM调节及输出滤波电路得到可调直流电压输出。IO通讯控制接口可实现远程通讯控制。  

1.2工作模态分析  

双向DC\-DC功率单元可以输出可升可降的直流电压：Q21和Q32恒通，Q11调节，Q12的二极管续流，此时工况为BUCK模式，可实现降压输出；Q11恒通，Q22和Q31调节，Q21和Q32二极管导通，此时工况为BOOST模式，可实现升压输出。  

当变换器正向工作时，即能量从低压母线端（左侧）流到高压电池端（右侧），实现对电池充电。开关管的工作情况分两种，第一种情况是高压电池端电压低于低压母线端电压时，此时只调节左边桥臂上管Q11，变换器工作在BUCK状态，实现降压充电；第二种情况是高压电池端电压高于低压母线端电压时，左边桥臂上管Q11常开，右边三电平桥臂两个内管Q22和Q31交错PWM开关，变换器此时工作在BOOST状态，实现升压充电。  

当变换器反向工作时，即能量从高压电池端（右侧）流到低压母线端（左侧），实现对电池放电。开关管的工作情况也分两种，第一种情况是高压电池端电压低于低压母线端电压时，只调节左边桥臂下管Q12，右边桥臂两个外管Q21和Q32导通，此时变换器工作在BOOST状态，实现升压放电；第二种情况是高压电池端电压高于低压母线端电压时，左边桥臂Q12关闭，Q11二极管导通，右边三电平桥臂两个外管Q21和Q32交错PWM调节，此时变换器工作在BUCK状态，实现降压放电。  

2.元件参数  

根据变换器的工作电压和额定功率，预留一定裕量，通过分析和计算得到的元件参数如表1。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOmyxZMgFLYHnjGiau350sTMY7iaEjJibOTX213aA2fmibibHo54wF1WrFiccCYKD5Dic40p7srf1hFJ4XBUp39eTIzOUhlvZETO9Yz4M/640?wx_fmt=png&from=appmsg)

3.控制策略设计  

3.1功率单元控制  

为促使变换器在宽电压范围中实现高效且稳定的运行，本设计采用了电压外环+电流内环的双闭环控制策略，如图3所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM4vW48k32AGyUw5TfNbknZphyU0j0JtWU05JTxfejq70BTA8Q2jaI1JmsAWfYicc3O0PkYxHKrV2RKFSve97azzLE4vaNe7Vrk/640?wx_fmt=png&from=appmsg)

  
电压外环负责检测输出电压，将其与给定电压进行对比，经PI调节器处理后输出电流给定值；电流内环则把检测到的实际电流与上述电流给定值作比较，通过PI调节器生成DuR，即PWM信号的占空比，以此精准控制开关管的导通与关断。双闭环控制策略能够迅速对负载和电压的变化做出响应，有力地抑制干扰，显著提升系统的稳定性与动态性能。此外，为进一步优化变换器性能，还引入了前馈补偿控制，用以补偿输入电压变化对输出电压造成的影响，进而增强系统的抗干扰能力。

3.2功率单元并联下垂控制

功率单元下垂特性用公式（1）表示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNiax9FhNtA0QEdeVUrGP9NGgrL0Op2JfLOxuumT5hzAX6pfqdr3m2pl09ibsOta6CEl5jAygayy5wHhpItJ8ryh8v4U2lBEQE48/640?wx_fmt=png&from=appmsg)

式（1）中Vout是功率单元模块的实际输出电压，Vnom是模块的标称输出电压（即空载时的输出电压），k是下垂系数，Iout是模块的输出电流。下垂系数k决定了输出电压随输出电流变化的斜率，其值通常根据具体的应用需求和功率单元模块的特性来确定。  

从公式（1）可知，当输出电流Iout增大时，电源输出电压Vout会随之减小，难以达到预先设定的输出电压。针对这一问题，本设计以实际输出电压作为反馈，构建了一个用于调节标称电压Vnom的PID控制器，确保负载变化时输出电压稳定，避免传统下垂控制的电压跌落问题。在此控制机制下，Vnom不再是固定值，而是由PID控制器调节得出的一个动态更新的电压值，具体控制架构如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPibicXfEBIMNFjjoSKSvTicDSvjd0snjdjDBMFRnP0jbRcDt3NSbgzibwicnxugjOpBfwpSbxLQRXEc9DhdRDOPkGjD4iagoQq7rmy4/640?wx_fmt=png&from=appmsg)

4.实验平台与验证  

为了验证变换器的性能，搭建了实验平台。实验平台主要包括双向DC\-DC变换器样机、直流电源、负载电阻、示波器、功率分析仪等设备。在实验过程中，逐步调节输入输出电压和负载，测量变换器的各项性能指标。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNAkXTVtmUBLkK1ic3QcjqQKjMjMgb30AYAaqu0C2TKhfw6CU7peXJt29qlSuI8ia4AJIDiaiaAfjPtSiaS7ibw0xnT4rKacAWx89Sk8/640?wx_fmt=png&from=appmsg)

  
图5为500kW双向DC\-DC变换器实物图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpORbM4orZjiaEjuTWBCibyeyJd9RfNanefmhDib8nWTZUdqCtbVxGQ8kXvIGzWtBz6vP4k1fg0XBoQyOup5kzS90Y7Q41knI7ol0U/640?wx_fmt=png&from=appmsg)

  
图6是三电平桥臂中Q22和Q31管源漏端电压波形，验证了两管承受了相同的电压。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNEzNw5QiaM1zQ5ib3nTWRQFDRLmF9MAd5twibd86PSeq9QqXSljAntibTYNFTT2jqleia1MSDich7ZeFTzDWhaARdfYjsrVvrLHUgOA/640?wx_fmt=png&from=appmsg)

  
图7是500kW工作时变换器的工况图，验证了变换器500kW的功率输出，检验设计方案达到了预期目标。实验结果表明，所设计的双向DC\-DC变换器在宽电压范围内能够实现稳定的双向能量传输，纹波电压为0.2%，纹波电流为1%，效率达到了预期目标，验证了理论分析和仿真结果的正确性。

5.结论

本文首次报道了一种额定功率高达500kW的双向DC\-DC变换器。变换器选用两电平桥臂与三电平桥臂的混合结构做为单元功率模块拓扑结构，采用便于提升和维护的单元功率模块并联设计方案。为了实现模块并联均流，采用了优化的下垂控制算法。设计的变换器的低压母线端DC700V，高压电池端DC300V\-DC1200V，额定电压DC1000V，纹波电压为0.2%，纹波电流为1%。实验结果表明，该变换器能够在宽电压范围内实现高效、稳定的双向能量传输，为新能源汽车、储能系统等领域的工程应用提供了有效的技术支持。未来，随着电力电子技术的不断发展，可进一步探索新型拓扑结构和控制策略，满足不断增长的能源需求。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPeMSn3gXlDt08RSl53sia42KL2vc1VwD2fialnhibFQmxgLJqAFib4PniaIkicyJ49j365MYEnbYicQ0kSgkO01z55uAChMFLIdoiaj2g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM4ZawxmntsGGILYSTosxrj3WMQYHvJypYUuiaWwAEYBXOVaNbNstJ1RZVb3nZn0hTlNnXicGib9MibVhK9qEkYzP92L81nBGiaMQhM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtgCibSEiaB0WEAHuBm2MCKCBibK5fT4ZsCEegyzTxpcDpk0ic2mbH4z3yVdEdES64VvkWWlNZoib8H4wibECHd2IKbl8IVskpa0eG0/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlVIsHHkHFicBicQeWEgLurD2ECwrzN2RILWbibqE0UzlNl5hYBUEfgqJYU1wrJZAODeyib0Gdkm1Efz8gqda4tHDIG1jRicExEtVo/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)