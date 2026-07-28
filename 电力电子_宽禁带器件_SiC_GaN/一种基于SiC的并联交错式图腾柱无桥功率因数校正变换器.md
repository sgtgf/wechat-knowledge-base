# 一种基于SiC的并联交错式图腾柱无桥功率因数校正变换器

原创 雷二涛, 张浚坤 SiC碳化硅MOS管及功率模块的应用 2025-08-23 12:23 广东

> 原文地址: [https://mp.weixin.qq.com/s/2Iv\_6mfD\_qkXY8TI2SaLoA](https://mp.weixin.qq.com/s/2Iv_6mfD_qkXY8TI2SaLoA)

文章来源：广东电力

作者：雷二涛,张浚坤,金莉,马凯,李盈(广东电网有限责任公司电力科学研究院,广东 广州 510080)

摘要:传统有桥功率因数校正(power factor correction,PFC)变换器具有成本低、控制简单等优点,但其效率会受到不可控整流和非双向结构的影响。为了有效提升PFC变换器的效率并减少电路中半导体数量,提出一种基于SiC器件的并联交错式图腾柱无桥PFC变换器结构。首先,研究并联交错图腾柱无桥PFC变换器的电路模型与工作模态;然后,分析该PFC变换器的工作原理及控制策略,给出电路器件与电路参数的选择设计方法,采用工频电流过零点畸变的抑制策略有效抑制电流纹波;最后,设计并制作额定功率6.6kW的样机。样机体积为1311cm³,功率密度达到5.015W/cm³,计算效率达到95%,证明了该 PFC 变换器具有低开关器件容量、高功率传输密度和功率双向流动的优势。

关键词:车载充电器;图腾柱无桥功率因数校正;并联交错;连续导通模式;SiC器件

在“双碳”形势下,电动汽车大量涌入市场,同时汽车充电系统大量接入电网,然而这种无序接入电网的行为增加了电网的峰谷差,增大了电网负荷的随机性,导致电网稳定性降低和电能质量下降,严重威胁电网的安全。功率因数校正 (power factor correction,PFC)环节是车载充电器/电动汽车供电设备 (electric vehicle supply equipment,EVSE)功率级的第1级,其目标是将输入电流转换 为与电网电压同相的近似正弦波形,减少对电网的谐波注入,改善功率因数,以符合电网接入的相关标准。同时,PFC还能为后级 DC/DC转换器提供稳定的输入电压,保证整个系统的正常运行。

目前,工程上通常采用的单相交流输入的充电器架构中,前级为单相PFC,采用单级升压 PFC或交错双级 PFC。单级 PFC 结构简单,可采用低成本控制器轻松实现。而交错拓扑有利于消除输入和输出电流纹波,可以更方便地进行电磁干扰(electromagnetic interference,EMI)滤波设计,使储能元件更小,还能更好地散热。后级为隔离型DC/DC变换器,用于提供电气隔离并生成稳定的输出电压。因此,AC/DC 变换器作为电网与用电设备之间的接口,不仅承担着电能变换的作用,还要尽可能减小后级负载对电网造成的影响。而PFC变换器作为充电系统的前级,其性能好坏不仅关系到电网的电能质量和稳定性,更关系到后级DC/DC变换器能否稳定输出。

传统的有桥 PFC 变换器具有成本低、控制简单等优点,但是其效率受到前级二极管不可控整流和非双向结构的影响。为了提高效率并减少电路的半导体数量,无 整流桥 PFC 变换器逐渐普及。为了降低 PFC 变换器的损耗,并且实现能量的双向传输,文献\[13\]提出将传统图腾柱无桥PFC变换器的二极管改为低频开关管,降低了导通压降,减少了损耗。文献\[14\]提出一种并联交错式的图腾柱无桥 PFC 变换器,该变换器可以实现单路、双路交错运行。文献\[15\]设计了一款基于氮化镓高电子迁移率晶体管 (gallium nitride high electron mobility transistors,GaN HEMT)、 工作在连续导通模式(continuous conduction mode,CCM)模式下的图腾柱无桥PFC变换器,可以用于2.2kW的空调压缩机驱动系统,峰值效率达到 了98.6%。文献\[16\]设计了一款基于GaN HEMT的工作在CCM模式下的图腾柱无桥PFC变换器,功率等级达到3.2kW,效率可以高达99%,功率密度为7.9W/cm³,但是随着变换器功率等级和 开关频率的提升,开关损耗也不容忽视。文献\[17\]提出了一种用于PFC电路软开关的无桥双升压整 流器,其在传统无桥升压整流器的基础上增加了额外辅助电路,可实现主开关的零电压开通和辅助开关的零电流关断,并且系统输出功率为800W。文 献\[18\]针对常规PFC变换器由于硬开关而损耗较大的问题,采用附加电感器来减小开关损耗,利用其储存的能量实现了开关的零电压开通功能,并且输出功率可达1.6kW。文献\[19\]提出了一种在连续导通模式下可用于图腾柱 PFC 整流器零电压开通的控制方法,且该技术在400kHz开关频率下峰值效率达98.35%。

由于传统无桥 PFC 存在损耗较大的问题,本文提出一种基于SiC的并联交错式图腾柱无桥PFC变换器。首先,通过分析所提并联交错式图腾柱无桥PFC变换器中1个升压单元的4种工作模态,介绍电流纹波减小的工作机理;然后,根据变换器具体参数指标设计主电路参数,并采用基于数字锁相环(phase locked loop,PLL)的变换器控制策略;接着,对高频和低频的开关管均设置死 区,并且结合一定的软启动措施,达到抑制工频电流过零点畸变的目的,同时设计增强型脉冲宽度调制(enhanced pulse width modulation,EPWM)的8个工作模式;最后,通过仿真及实验对所提并联交错图腾柱无桥PFC变换器进行验证。

1.并联交错式无桥图腾柱PFC变换器

并联交错式图腾柱无桥 PFC 变换器电路如图1所示,其中,SD1、SD2 为工频开 关管,S1—S6为高频开关管,L1、L2、L3 为三路升压电感(电感值分别为 L1、L2、L3),Cout 为输出电容(电容值Cout),Rload 为负载,Uac为交流输入电压。L1\-S1\- S2、L2\-S3\-S4、L3\-S5\-S6 分别构成3个升压单元,3个单元交错 120°工作,3 个电感电流交错 120°升降,减小了电流纹波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrxocXblKs1kdUibVrppuMibYnvCCNxKMrBTtBy0OqKj6629stgpKMPqRQ/640?wx_fmt=png&from=appmsg)

并联交错式图腾柱无桥 PFC变换器共有16种模态。当交流输入电压位于正半周时,SD2 导通,当交流输入位于负半周时,SD1 导通。这里对其中1个升压单元(L1\-S1\-S2)进行分析,其余2个升压单元分别滞后于此单元120°、240°工作。1个升压单元有4种模态,具体的模态分析如下:

模态1,交流输入电压位于正半周,此时SD2和S2 导通,电感 L1 储能,电感电流上升,输出电容向负载供电,电感电流以式(1)线性增长:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCr18dLxMjHiaqiacGBpGvEsvYF5fL4hadWFQbCDha0mkRQ2oA9MzZGYctg/640?wx_fmt=png&from=appmsg)

式中:iL1 为流过电感 L1 的电流;uac 为交流输入电压瞬时值;t为时间。

模态2,交流输入电压位于正半周,此时SD2和S1 导通,电感 L1 向负载供能,电感电流下降,输出电容充电,电感电流以式(2)线性下降:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrWhruBF1xm7Mh4Ao3miaTNZZZeu8XMO8NYqw3FANE7FJEVJC7rJiaoVvA/640?wx_fmt=png&from=appmsg)

式中 Uout 为输出的直流电压。

模态3,交流输入电压位于负半周,此时SD1和S1导通,电感 L1 储能,电感电流上升,输出电容向负载供电。

模态4,交流输入电压位于负半周,此时SD1和S2 导通,电感 L1 向负载供能,电感电流下降,输出电容充电。

根据式(1)、(2),结合电感伏秒平衡原则,并 假设三相交错并联参数完全相等,可以得到电感电流纹波和输入电流纹波符合以下关系:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrGz8hK6rKBdwYhy3ib92MZZTWW8lHDgtNGpCsdtXBcAVtz5GycYaKiaGg/640?wx_fmt=png&from=appmsg)

式中:ΔIac 为输入电流纹波;ΔIL 为电感电流纹波;D为占空比,且 D\=(Uout\-uac)/Uout。当交流电压信号位于正半周时,D 指的是开关管S2、S4、S6 的占空比;当位于负半周时,D指的是开关管S1、S3、S5 的占空比;当D\=1/3和 D\=2/3时,三相电感纹波相互抵消,总电流纹波为0。

2.PFC变换器主电路设计及其控制策略

2.1主电路参数设计

并联交错式PFC变换器的参数指标见表2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCraFJK4pnMuMibNUicy8hr2s2EQC58oSTaTLNCfuJRJeC75Heqv0QlIJoA/640?wx_fmt=png&from=appmsg)

2.1.1熔断器选择 

为了选取合适的熔断器,需要计算输入电流Iac,RMS。依据最大功率和输入电压可得

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrLjsWCnpO4f8ytMrILC5mnGz06icxxfCVX5L8vkt92CDUrZutI620bibg/640?wx_fmt=png&from=appmsg)

式中功率因数和效率按照最低标准计算。

2.1.2升压电感选择 

根据前文推导,可以得出电感电流纹波的最大值

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCr0gT0ibhgUibx7UOnMxGOnpwqInZxslibWvWu7qT9pEmvQtuNbchEwCwjQ/640?wx_fmt=png&from=appmsg)

式中:Ts 为开关周期;L 为三路升压电感 L1、L2、L3 其中之一(三路采用相同的电感)。

根据设计要求中的电流纹波系数 γL ≤10%,综合考虑额定功率和效率因素,有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCryLbPI8MdusnNKKSOJIj3MibqY4k3NUNZjZ6fOzRHDKWSz2VeiaXKCxiaA/640?wx_fmt=png&from=appmsg)

式中 Uin,max 为输入电压最大值,则

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrfRyeLv7NBtPFd8EnUyicqjRdNGUw9fU9QwWzL2WYmWdkJkt3upRvZpw/640?wx_fmt=png&from=appmsg)

考虑安全裕量,最终选择电感的规格为 260μH/20A。

2.1.3直流侧电容选择 

由于输出电压存在二倍工频纹波,所以输出电容需要满足纹波因素。由设计指标可知输出电压纹波系数γU≤5%,则有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrlLdqFnhzbt4INpO5qxbxzflm5W6VKKWTSvlQ5u9pNTyQfeIEI2kiaibA/640?wx_fmt=png&from=appmsg)

式中 ΔUout 为输出电压纹波。

此外,当电容两端的实际电压不是纯直流电压而存在纹波波动时,就会产生纹波电流,电容选型中对纹波电流同样有设计要求,电容输出最大电流纹波

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCriaUrsTdodTx3v3ad1DibBQREsaWKTnYpxibia9Fm3icxK6U97cYbFpJTYmg/640?wx_fmt=png&from=appmsg)

考虑安全裕量和市面上常用的电解电容值,由12组2个150μF/350V 串联的电解电容组成直流支撑电容 Cout,单个电容的额定纹波电流为 970mA,等效电容值为900μF/700V,电容组的额定纹波电流为11.64A,满足设计要求。

2.1.4开关管选择 

由于输出电压为600V,考虑20V 的电压纹波,则开关管的理论耐压 UQ 需要满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrJuFvoc6nz1pgKdPTDkAAsJu746g4gr75MMnx6Rt04r8LJUybicFicsaw/640?wx_fmt=png&from=appmsg)

式中 Uripple 为电压纹波。

考虑1.5倍的安全裕量,开关管的实际耐压UQN 应满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrTAibBb4ahW5C2QjQcAa4iaiaNDsOJicWHLBOGKTOEHB7dZe3ibiamibvUZPmw/640?wx_fmt=png&from=appmsg)

考虑电感电流1.5~2倍的安全裕量,开关管 的额定电流IDSN 应满足

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrX7ujj2Eoe4Feic6ogNUdTfoPI0iaA7ftUxzhowM45dfu8P1OwBOyG9tA/640?wx_fmt=png&from=appmsg)

式中IL,max 为流过单路电感电流的最大值。

最终确定高频开关管为额定电压1kV、额定电流35A 的SiC金属氧化物半导体场效应晶体管(metal-oxide-semiconductor field-effect transistor,MOSFET),低频开关为额定电压1.2kV、额定电流90A 的SiC MOSFET。

2.2控制策略设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrTHnibC9PmMrfclpDcsJhV2gvptz87ZGJec4G7Hzaz5jRE2qeUgL8wdg/640?wx_fmt=png&from=appmsg)

图2为CCM模式下并联交错式图腾柱无桥PFC变换器的控制功能框图,其中:Uref 为参考输入电压,iL1、iL2、iL3为流经三路电感的电流。输出电压经过电阻分压和调理电路滤波后进入数字信号处理器(digital signal processor,DSP)的A/D模块,交流输入电压经过电压互感器和调理电路进入DSP的A/D模块,经过二阶广义积分PLL(second order generalized integratorPLL,SOGI-PLL)得到单位正弦信号,取绝对值后和电压环输出的乘积即为电流参考信号。采样得到的3个电感电流信号分别经过分PI调节器调节产生PWM信号,从而产生 对应开关管的开关信号,最后经过驱动电路得到SiC MOSFET的驱动信号,由此完成一次调制。

为了使输入电流可以很好地跟随交流输入电压,本文采用数字 PLL产生单位正弦信号,作为电流环的给定信号。传统PLL根据鉴相器实现方法的不同可被分为2 类,分别是基于功率的PLL(power-based PLLs,pPLLs)和基于正交信号发生器 的 PLL(quadrature signal generation-based PLLs,QSG-PLLs)。pPLLs使用乘法器作为鉴相器,但其对电网电压较为敏感,这种鉴相器会引入倍频扰动,导致倍频振荡和偏移误差。所以本文设计采用 结合二阶广义积分基于正交信号发生器的PLL,正交信号发生器的结构如图3所示,其中:us 为输入的交流电压信号,uα、uβ 为正交信号发生器输出的正交信号,k为增益,ω 为需要生成的正交信 号的角频率,s为拉普拉斯算子。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrYJtkRRHP3Hlvia3rTYXuEA2ogShXJqZKYJ62hOeuucaBWMpI7JOHuMw/640?wx_fmt=png&from=appmsg)

在Simulink中搭建 PLL 模型,仿真结果如图4所示,其中:uosg 为输出的正交信号,uspll 为输入的交流信号。图4(a)所示为正交信号发生器的输出结果,可以看出正交信号发生器可在α 和β轴 输出正交信号,图4(b)所示为 PLL 的输出结果,可以看到经过约0.06s输入的交流信号 uspll 可以跟随uosg 的相位信号,满足快速性的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCr2hgFE8Fw6s4ibY7W5D6GOcRuwzLnExtze7ZMMoiazkUWZeWliaHLTKwDQ/640?wx_fmt=png&from=appmsg)

2.3控制程序设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrmVGH1tD8dQ6WTspiccEYOuV7GkQeTf8wgicIF5LGperSZUqMYlGiclNEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrAkZ4CEhT3aL4aUPGumv3dGz3zSmqyvHwOddsxKp3C4MFoGqFNpEDbg/640?wx_fmt=png&from=appmsg)

选用 TMS320F280049作为控制器,控制程序流程如图5所示。为了方便调试和功能测试,系统采用模块化编程。主函数控制主要包括系统初始化、变量初始化、保护阈值设定、中断配置和主函 数无限循环等待中断请求5个部分。

中断服务函数包含电流环中断和电压环中断2个部分。当收到中断请求时,这2个中断服务函数都需要先清除中断标志。电流环将读取模/数转换器(analog-to-digital converter,ADC)结果,执行前馈补偿函数和 PLL 程序,再运行电流调节器,将得到的结果作为调制波进行 PWM,控制开关管的开通和关断。电压环将首先判断输入电压的极性,再对直流电压环进行前馈补偿,接下来运行电压调节器,再计算输入输出功率,最后进行欠压或过压的判断,确保系统安全运行。

2.4工频电流过零点畸变的抑制策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrBwpxFXgtjOViarTJAkAaXwmG8bD92LpluHTLNicibsBTKLLiaWv0hypVMQ/640?wx_fmt=png&from=appmsg)

工频电流过零点畸变一直是图腾柱无桥PFC变换器的关键问题。为了防止上下管直通,高频和低频的开关管均设置了死区,并且结合一定的软启动措施。以1个升压单元为例,关键信号波形如图6所示,其 中 SSD1、SSD2、SS1、SS2 为 开 关 管 SD1、SD2、S1、S2 的驱动信号,S 为各驱动信号。

t∈\[t0,t1):负半周正常运行阶段。

t∈\[t1,t2):负半周到正半周的死区时间,由于电感电流无法突变,电流保持原来的流向,此时所有开关管均处于关断状态,只有S2 和SD2 的体二极管续流,同时高频开关管SD2 漏源间的寄生电容充电。

t∈\[t2,t3):仍然处于死区时间内,但是S2已经开始开关动作,为了消耗寄生电容上储存的电能,占空比由小到大进行软启动。

t≥t3:正半周开始正常运行。

2.5EPWM 模式设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrnunZ4fiaXHGibGYnKVZ9cdQoQHAyvAGUricF94Wj6GGO5cTj5ov1f0bNA/640?wx_fmt=png&from=appmsg)

根据前文的叙述可知,过零点电流畸变对于图腾柱无桥PFC变换器相当重要,有必要对EPWM的模式进行细致设计。 模式过渡如图7所示,EPWM被分为8个模式,判断标准为PLL 的输出值uspll,以正半周开始,为了抑制过零点时产生的电流尖峰,判断阈值设定为CPZ1、CPZ2、CNZ1、CNZ2。

模式1:\[CNZ1,0),定义电网电压为负穿越状态1,此时封锁低频管输出,高频管以最低占空比持续开关动作,以消耗寄生电容储存的能量,等待电网电压真正穿越至负半周。

模式2:\[0,CNZ2),定义电网电压为负穿越状态2,此时电网电压已经真正穿越至负半周,但仍封锁低频管和高频输出,同时切换主从PWM,清零电流调节器,为软启动做准备。

模式3:\[CNZ2,计数结束),定义电网电压为负穿越状态3,此时封锁低频管PWM输出,高频管开始动作进行软启动,逐渐增大占空比,等待增大计数完成。

模式4:\[计数结束,CPZ1),定义电网电压为负半周状态,此时低频管开始动作,进入正常调制模式。

模式5:\[CPZ1,0),定义电网电压为正穿越状态1,此时封锁低频管输出,高频管以最低占空比持续开关动作,以消耗寄生电容储存的能量,等待电网电压真正穿越至正半周。

模式6:\[0,CPZ2),定义电网电压为正穿越状态2,此时电网电压已经真正穿越至正半周,但仍封锁低频管和高频输出,同时切换主从 PWM,清零电流调节器,为软启动做准备。

模式7:\[CPZ2,计数结束),定义电网电压为正穿越状态3,此时封锁低频管PWM输出,高频管开始动作进行软启动,逐渐增大占空比,等待增大计数完成。

模式8:\[计数结束,CNZ1),定义电网电压为正半周状态,此时低频管开始动作,进入正常调制模式。

3.仿真与实验验证

3.1并联交错式无桥图腾柱PFC变换器的仿真验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCr4xJHSqmGwVPCOaJic4dvNv8C5WIV4lLCB7UGhC3F1GyReg56a3PfiadQ/640?wx_fmt=png&from=appmsg)

仿真参数见表3。

并联交错式 PFC 变换器的仿真结果如图8所示,其中iac 为输入交流电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCr51tDw9rGUQxpjbAHsr0gSoAQB4kfm13icWqvn7auI7iaRRq6pzgB4d3A/640?wx_fmt=png&from=appmsg)

可以看出,输入电流可以很好地跟随输入电压的相位,达到了PFC 的目的,输出电压存在2倍工频纹波,且纹波系数在5%以内,满足前文的计算和理论分析,达到设计要求。对比图8(a)和图8(b)可知,即使加入了抑制措施,轻载工况下的电流纹波仍然相对较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrLvJ3W1bn0ico8wLH9rQtbKykIxvY2Dsm4ibQg8icnaILHCNOBPd0Y0kjA/640?wx_fmt=png&from=appmsg)

输入电流与电感电流波形如图9所示,其中iL为单路的电感电流。图9(a)所示为满载工况输入电流和电感电流,可以看出电感电流存在较大纹波,通过并联交错,总输入电流的纹波得到大幅减小。图9(b)所示为满载工况输入电流和电感电流纹波,在占空比为0.5时,三相电感电流交错120°升降,此时电感电流纹波为1A而总输入电流纹波为0.4A。由此可知,通过并联交错,电流纹波有明显减小。

3.2并联交错式无桥图腾柱 PFC 变换器的实验分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrMBMJJYWMGIvrnLdjBgVVX9GP2icIemWyRLeOdMkfT7SKt79FjPaVDiaA/640?wx_fmt=png&from=appmsg)

实验样机如图10所示,样机体积为1311cm³,功率密度5.015W/cm³。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrtZnTDMMZ5D0EtD4YicFMtPWu02t521icwgibbrrjpVYoicMic1d4vH6AMbw/640?wx_fmt=png&from=appmsg)

首先进行驱动电路实验,给定占空比为50%的方波,驱动输出波形如图11所示,驱动输出正常,幅值为+15V/\-4V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjS2ibZZFByWMubvBUO5NCrBXoRq7LoCgjfZKtoN2tzeial23IIpibJcP5IdwhDibVabH2Q1WV2FOyBQ/640?wx_fmt=png&from=appmsg)

其次进行交流输入的电流闭环实验,实验波形如图12,输入交流信号50V,带1100Ω纯阻性负载进行电流闭环实验,输出达到225V,实现了升压,电流波形可较好跟随输入电压,计算效率达到95%;由于受限于安全因素和负载原因,实验仅使用小电流作为输入电流来获取波形,以验证该变换器的控制效果。因此,输入电流iac过零点存在相对较大的纹波,在输入电流较大时采取的措施效果将相对明显,同时说明轻载工况下的软启动措施仍然需要完善。

4.结束语

近年来电动汽车逐步普及,为了提高电网稳定性以及电网质量,PFC技术被广泛应用于车载充电器。本文设计了一款基于SiC器件的并联交错图腾柱无桥 PFC 变换器,作为车载充电器的前级。

该变换器可以工作在CCM 模式下,有效抑制电流纹波,同时由于使用了并联交错技术,变换器具有开关器件容量小、功率密度高的特点。本文首先分析了1个升压单元的4种模态,并对变换器进行软硬件设计,硬件方面包括电感计算、直流侧电容选择和开关管选择,软件方面包括控制策略和程序设计、PLL设计、过零点畸变的抑制策略和EPWM模式设计。最后,搭建了Simulink仿真模型,并设计制作了额定功率6.6kW的样机。通过测量驱动波形、直流波形和交流波形,验证了该变换器的有效性与可行性。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)