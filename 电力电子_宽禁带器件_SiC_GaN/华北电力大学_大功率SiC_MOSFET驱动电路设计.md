# 华北电力大学：大功率SiC MOSFET驱动电路设计


> 原文地址: [https://mp.weixin.qq.com/s/4LS2bzmr0PHc5n\_qd8GgAw](https://mp.weixin.qq.com/s/4LS2bzmr0PHc5n_qd8GgAw)

**作者：**彭咏龙，李荣荣，李亚斌（华北电力大学  电气与电子工程学院）  

**摘要：**在实际工程应用的基础上，针对50kW/1MHz的高频感应加热大功率SiC MOSFET电路要求及SiC MOSFET开关特性进行开发研究。通过对SiC MOSFET的开通过程特性进行详细研究，得出使其可靠、安全驱动的要求，在现有已经成熟应用的Si MOSFET驱动电路基础上对其进行改进，研究适合工作在兆赫范围内的SiC MOSFET驱动电路。并采用双脉冲实验验证所设计驱动电路的基本特性及确定最佳门极电阻参数。

**关键词：**SiC MOSFET；开关特性；驱动电路；双脉冲实验

**0 引  言** 

碳化硅（Silicon Carbride, SiC）是一种具有宽禁带、高击穿电场、高饱和漂移速度和高热导率等优越电学特性的材料，与其他材料相比其更适合在高温、高功率和高频的特殊条件下工作，故该材料一经诞生就引起了人们的广泛关注。电力电子行业的发展一直与半导体器件的发展密切相关。在行业对高频化、大功率化提出更高要求的情况下，大功率高频感应加热技术对SiC MOSFET的应用也进入了积极探索阶段。

由于SiC材料的禁带宽度和击穿场强远高于Si等材料，故在相同的耐压水平下， SiC MOSFET的寄生电容远小于Si MOSFET，对驱动电路的寄生参数更加敏感。SiC MOSFET更适合在-2V～+20V的驱动电压下工作，与Si MOSFET的0V～+15V区别较大，而电压UGS变为负值时，GS两端的氧化层电容回增大，这会增加MOSFET开通及关断时所需的电荷量，从而影响开关速度。故完全套用Si MOSFET的驱动方式，来驱动SiC MOSFET是不合理的，而是应对SiC MOSFET驱动电路进行精心设计。

本文在对SiC MOSFET的开通过程特性进行详细分析后，得出使其可靠、安全驱动的要求，在现有已经成熟应用的Si MOSFET驱动电路基础上对其进行改进，研究适合工作在兆赫范围内的SiC MOSFET驱动电路。从实际工程应用的角度出发，对大功率高频感应加热电路的SiC MOSFET进行驱动电路开发设计，并采用双脉冲实验验证所设计驱动电路的基本特性及确定最佳门极电阻参数。

**1 SiC MOSFET导通过程分析**

SiC MOSFET的开关过程主要受其动态特性参数的影响，而极间电容是动态特性参数中最主要的参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeGOpU6kecyu2MFRklMADFt6OH76cpNBMEHuzS83aR2j93Zc2DLKlBEQ/640?wx_fmt=png&from=appmsg)

如图1所示为SiC MOSFET的内部等效模型。采用输入电容Ciss、输出电容Coss和转移电容Crss来描述各极间电容的关系，以此来表征各极间电容对SiC MOSFET开关过程的影响。其中，输入电容Ciss决定电路的RC时间常数；转移电容Crss在SiC MOSFET工作过程中会影响开关时间。

Ciss=CGS+CGD, Coss=CGD+CDS, Crss=CGD  (1)

对于驱动电路设计，管子高速导通与关断两个过程是设计关注的重点。图2所示为动作过程的漏极电压与漏极电流、栅源极电压与电荷之间的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPezWyK8DJPaqaQkO2gF5clpbX8Diaxd65hVJiag82SuKhGyHlHCEUjNrPQ/640?wx_fmt=png&from=appmsg)

以图2中的(a)、(b)MOSFET从截止向导通转换过程为例进行分析，该过程可分为四个阶段。  

（1）t0～t1区间：栅极电压从0上升到门限电压_U_GS(th)，但漏\-源电压_U_DS与漏极电流_i_D的值均不发生变化，故将该区间称为延迟时间。

（2）_t_1～_t_2区间：在该区间漏极电流_i_D、栅\-源极电压_U_GS线性增大， _t_2时刻iD达到最大值。_U_DS保持截止时的高电平不变，电压与电流产生重叠区域，MOSFET功耗最大。

（3）t2～t3区间：从t2时刻开始， _U_DS开始下降，产生米勒电容效应， _U_GS停止上升而出现平台，从t2到t3区间电荷量等于_Q_GD,在t3时刻_U_DS下降到最小值。

（4）_t_3～_t_4区间：_U_GS从平台上升至给定驱动电压值。_t_4时刻以后，MOSFET管进入导通状态。

由图2可知，管子的开通与关断的变化过程基本相同，只是时间顺序相反。

由以上分析可知，与普通的Si MOSFET驱动电路相比，工作在兆赫频率范围内的SiC MOSFET，其驱动电路设计要做以下改进：

（1）驱动电路延迟时间要更小，以减小开关死区时间，提高变换器的控制精度和效率，通常工作在兆赫兹的管子其延迟时间在10ns左右。

（2）为减小平台的持续时间，驱动电路峰值电流_I_max要更大，以缩短密勒电容的充放电时间，提高开关速度。

（3）增大栅源极电压变化率d_u_GS/d_t_，缩短栅源极电压上升时间和下降时间。

# **2 驱动电路设计**

由于MOSFET的工作频率及输入阻抗高，容易被干扰，故驱动电路应具有良好的电气隔离性能，以实现主电路与控制电路之间的隔离，使之具有较强的抗干扰能力，避免功率级电路对控制信号的干扰。所以在选取驱动电路时，本文只考虑隔离驱动电路。

隔离驱动可分为电磁隔离与光电隔离。采用脉冲变压器实现电路的电磁隔离，是一种电路简单可靠，又具有电气隔离作用的电路，但其对脉冲的宽度有较大限制，若脉冲过宽，磁饱和效应可能使一次绕组的电流突然增大，甚至使其烧毁，而若脉冲过窄，为驱动栅极关断所存储的能量可能不够。光电隔离，是利用光耦合器将控制信号回路和驱动回路隔离开。该驱动电路输出阻抗较小，解决了栅极驱动源低阻抗的问题，但由于光耦合器响应速度较慢，因而其开关延迟时间较长，限制了适应频率。故本文采用如图3所示的改进光耦合器驱动电路，速度更快，性能更好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeiah1YrrU6dDkDU4lvICiaQyMu3hRHmgwA4Lia1w3NRWRuJzLwdhA3rGYg/640?wx_fmt=png&from=appmsg)

**3 驱动电路详细设计**

# 本文针对大功率50kW/1MHz的高频感应加热SiC MOSFET驱动进行开发，用来实现逆变桥臂的门极触发，以及对工作过程中的故障做出快速判断及动作。  

驱动电路的主要功能为接收逆变板的脉冲进行功率放大，检测SiC MOSFET的短路故障及驱动器的原副边欠压故障、副边正负供电电源故障、并联SiC MOSFET管丢脉冲故障、桥板水冷系统的超温故障。除短路故障为6104芯片内部短时锁定外，其他故障均设计为带自锁的故障，所有故障汇总在一起，由光耦进行总的报警输出。

根据电路功能要求，本文将驱动电路主要分为脉冲整形放大与故障检测两部分。电路功能框图如图4～图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeicaJhTcTibKXVupENRab6aaAsiaTRk10A5LjmxJw95mgqPZqNYmibPJv4g/640?wx_fmt=png&from=appmsg)

整形放大部分：其主要功能为实现驱动脉冲的功率放大。本文采用专门用于MOSFET和IGBT的高速驱动芯片IXDD614双管并联实现，该芯片不仅可满足驱动电路高速、低传输延迟时间、低输出阻抗、低能耗等要求。并且该芯片具有使能控制端，当使能端为低电平时，输出为高阻状态。  

故障检测部分：其主要功能是实现过流故障检测。过流保护是开关器件应用的关键技术，过流保护的好坏直接关系到SiC MOSFET器件本身及整个电路系统的工作性能和运行安全。

BM6104FV为开关频率高达1MHz的驱动芯片，内含短路检测、门极米勒钳位、软关断保护功能。芯片供电电压为+5V。脉冲输入采用施密特特性的CD4093进行整形；门极米勒嵌位三极管外置，保证主回路中的另外SiC MOSFET导通时的电压尖峰，不会通过米勒电容对该驱动器门极造成虚高电位导致SiC MOSFET管直通，因此电路设计从门极电阻后端嵌位。

由于外扩软关断电路及芯片内部短路检测电压较低的原因，本文对芯片外部配置的过流检测电路进行改进，使该检测电路输出控制外扩功率管输出高阻态，同时控制软关断电路进行软关断。软关断进行到一定电压, proout引脚进行相应电平的检测，下降到某一电压（芯片内部设定），6104芯片输出低电压，关断SiC MOSFET管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPe2mdnVsPn7WO1ULsYPrXXVicKK3wb4rQBo9ZWh0fsQlt9IFcnsuggh7A/640?wx_fmt=png&from=appmsg)

过流保护及软关断电路如图6所示，过流保护电路采用比较器LM339进行过流值比较，输出为SC，一路给定9013三极管对IXDD614进行控制，一路给定软关断电路进行软关断。考虑到10只并联管子软关断的一致性，采用门极电阻前端软关断。  

综合故障锁存及复位电路如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeuSJsnGtz6XLUVmhxbkPI7R2L85ws47erBSicjyYJ1H1uJyGSYeChhZg/640?wx_fmt=png&from=appmsg)

本电路对故障进行相应锁存、指示，汇总为1路光耦故障供外电路使用。其中板内故障共分五路，两种电位。丢脉冲故障、正电平故障、负电平故障、超温故障为高电位故障，驱动芯片提供的原副边欠压故障、短路故障为低电位故障。电路采用光耦进行隔离后进入锁存电路，并提供相应的led显示；其余四路故障通过比较器LM339和设置门槛进行比较然后进入锁存电路进行锁存，提供相应的led显示。复位电路外接+24VDC逻辑电平，对上述锁存电平进行复位。

# **4 驱动实验与分析**

由于本文所采用的SiC MOSFET工作频率在兆赫范围内，保证其以最小的开关损耗安全快速的完成开通、关断转换成为该驱动电路设计的关键。

SiC MOSFET的开关快慢并不完全取决于器件本身，还与外电路参数有关。而驱动电路门极电阻_R_g的大小即可强烈地影响其在开关过程中是否振荡、关断时的电压尖峰是否太大以及二极管的反向恢复电流是否合适等问题，故本文采用双脉冲测试法，动态调节该参数的大小，以评估确定最佳的驱动电路_R_g数值大小及确定是否需要设置RC缓冲保护电路来吸收SiC MOSFET快速关断导致的浪涌电压，防止器件击穿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPe4sKKgUW34CrQGZ9QWhdEibg4iceor6qBDsLibEy0ZIejA60HL39zm0ibhQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPez1lPnHfgEpziaTzgouGXwxg61gvmz5wRdMzic11icYUVibIsWaaC5VJ5uQ/640?wx_fmt=png&from=appmsg)

                                              表1 实验参数

需要说明的是，图8中_V_g仅发出两个脉冲；M2的门极被短接，处于关断状态， M2仅在M1关断时起续流二极管的作用， M1才是我们要观测的对象；流经管子的电流_I_D\=_V_DD\*_t_/_L_，故实验时，流经管子电流的大小可通过调节其他参数大小来控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeUAKP2ZIGibhV2NLW1NoaJj48Pf7dMtsMXIDGiadym3q8CDvCM1J7ib6Gw/640?wx_fmt=png&from=appmsg)

通过对图9（a）～图9（c）实验波形对比分析可知，过小数值的_R_g会使主电路中SiC MOSFET电压、电流产生严重振荡，给器件带来非常不利的影响，增大_R_g的数值可以有效抑制SiC MOSFET开通关断过程的振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeD1MkjmbA1fDFzqZ0plF6c2dcrwL7DVk3emWV44eibiccBHO5ZLSvhjkA/640?wx_fmt=png&from=appmsg)

对比图10实验波形可知，增大_R_g的数值虽然会减小振荡，但SiC MOSFET的开关时间及开关损耗会增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeGUftvrSdWuS1euTATzxXWFeqaBO8lOKn20xiaQmvy1gGbicdqmeWljYA/640?wx_fmt=png&from=appmsg)

感应加热电源设计中为保证开关器件安全快速的动作，常采用增加阻容吸收电路的方式来保证电路的可靠运行。阻容吸收电路不仅可以实现过电压保护，还可以抑制谐振和消除谐波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPe0RjyiaBcof8oibibEGyUaWMmjTzLGbuwc7tJrMVeuz2ahJtMmhsuQ2icxw/640?wx_fmt=png&from=appmsg)

本文采用如图11所示的过电压吸收效果好且电路结构简单的RCD缓冲电路，通过电容的充放电和电阻的能量消耗来吸收和消耗电路接通断开时感性负载产生的自感电动势，避免开关器件的过电压击穿；采用快速二极管VD来防止浪涌电压的振荡。

为了尽可能的减小开关损耗又保证SiC MOSFET不因其快速关断，漏极电流d_i_/d_t_突变产生的尖峰电压，导致器件击穿损坏，故在折中考虑后，最终确定在加RC缓冲电路的基础上，将驱动电路的门极电阻设置为5Ω。

# **5 结束语**

本文根据高频感应加热电路设计要求，针对新型开关器件SiC MOSFET的开关特性，对其驱动电路进行开发设计，在对SiC MOSFET的开通过程特性进行详细分析后，得出使其可靠、安全驱动的要求，在现有已经成熟应用的Si MOSFET驱动电路基础上对其进行改进，重点分析研究了驱动电路中的整形放大故障检测部分，并通过双脉冲实验对门极电阻Rg进行动态调节，在较小开关损耗下，确定了最佳大小的Rg得到良好的SiC MOSFET开关波形，该实验也验证了所设计驱动电路基本工作特性的有效性。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)