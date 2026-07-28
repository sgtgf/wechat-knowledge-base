# 矿用SiC MOSFET充电器驱动电路的设计

原创 张全柱 ，敬昌国 SiC碳化硅MOS管及功率模块的应用 2025-04-01 09:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/mZMJpfcPJ8\_-5YiDB-dQOw](https://mp.weixin.qq.com/s/mZMJpfcPJ8_-5YiDB-dQOw)

文章来源：华北科技学院学报

作者：张全柱，敬昌国，邓永红（华北科技学院　 信息与控制技术研究所，北京 东燕郊 065201）

摘 要： 针对矿用井下充电器存在规格多、体积大、质量大、效率低等问题，本文选择在主电路拓扑结构中采用碳化硅器件。 依据碳化硅器特性，本文采用集成驱动核设计了一款驱动电路，分析了碳化硅驱动电路的技术特点，计算了驱动功率，给出了驱动电路的设计原理图。 实验结果表明：设计 的SiC MOSFET驱动电路有较好的可靠驱动能力，具有较好的保护能力。

关键词： SiC MOSFET；APD202；驱动电阻；驱动电路

０　 引言

煤矿井下的单轨吊车、智能机器人、应急救援设备、智能监测设备、各类传感器、智能矿灯、4G手机所需要的电能量都来源于锂离子电池组，随着机电运输车和胶轮车等大型煤矿运输设备所需要的动力来源都逐步改成动力锂离子电 池组，而充电器装置是与锂离子动力电池相配 套使用的煤矿重要电气装备，充电器装置性能好 坏直接影响到锂离子动力电池组的运行效率、使用寿命和可靠性。 随着煤矿井下安全生产自动化与智能化水平的逐步提升，对充电器的要求 越来越高，倾向于体积小、重量轻、便携，尤其是向 效率高等特点发展。 目前充电器的功率器件主要是Si MOSFET、 Si IGBT 等，开关频率被限制在20KHZ左右，增加了电力电子元器件的体积。

随着第三代半导体器件的迅速发展， SiC MOSFET成为炙手可热的功率器件，其具有禁带宽度高／ 饱和电子漂移速度快临界电场击穿强度高、介电常数低和热导率高等特点，让其更适合在高功率和高频等特殊条件下工作，也符合煤矿的使用条件。 但在高功率和高频环境下工作时，SiC MOSFET 极易出现过压或过流等短时过载情况，对器件造成损坏，所以 SiC MOSFET驱动尤为重要。 因此，本文结合实际工程设计一款SiC MOSFET驱动电路，应用于矿用充电器，设计了驱动电路进行验证，分析了栅极输入波形对开关特性的影响，同时验证了该驱动电路的驱动能力。

１. 电路系统组成及SiC MOSFET驱动电路设计要求

1.1 电路系统组成

基于SiC MOSFET充电器的主电路框图如图1所示，由三相交流输入电源、输入电抗器、可控整流、SiC MOSFET 的Ｈ桥逆变、高频变压器、快恢复整流以及输出滤波电路等；控制电路由DSP控制系统、SiC MOSFET 驱动电路、各种检测电路等组成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFP3qhnjxLxaRqhjicbkBYsgNq0cia4le3viaJG70r52AC90nUNuTMZOUL0A/640?wx_fmt=png)

1.2 SiC MOSFET驱动电路的设计要求

根据SiC MOSFET的动态特性和静态参数，SiC MOSFET 驱动电路设计时必须满足以下要求： 

（１） 需要提供可靠的驱动信号使 SiC MOSFET能够准确的通断，在开通时保证所需的栅极电压和提供足够的栅极驱动电流以减少器件的开通损耗，在关断时提供一个栅极反偏电压以确保SiC MOSFET可靠有效的关断； 

（２） 所提供的驱动信号不能骤升骤降，也不能太平缓； 

（３） 驱动电路需要较的峰值电流，提高开关速度； 

（４） 要有足够快速高效的故障保护功能，用 来与SiC MOSFET高速开关特性相对应，同时能将这些故障信号反馈给控制系统。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPrUicClyKXlwibfyKicwotgIP9cLxvicc9eDxia4dichqcq3gWMDJyC7OAULg/640?wx_fmt=png)

针对上述要求，设计出驱动电路的方案框图如图 ２ 所示，其工作原理为：DSP控制板生成的PWM信号发送到 驱动核，经过外围驱动放大电路信号将PWM信号放大后， 将稳定的PWM信号送给SiC MOSFET，使SiC MOSFET可靠有效的开通和关断。 当SiC MOSFET发生故障时，故障信号返回到DSP控制器，DSP控制器根据相对应的故障信号做出动作处理。

２. 驱动电路设计及原理分析

2.1 驱动供电电源设计

本文中针对矿用充电器所选用的SiC MOSFET为C3M0016120K，其栅极驱动电压为-4V/+15V ，漏源电压为1200V；所选用的驱动核为APD202，其供电电压为12V，此驱动核会自激 产生+15V/-3V 的电压，可满足SiC MOSFET的 栅极电压要求。 因此，驱动供电电路，选用金升阳 的PV40-27B12电源模 块， 宽电压范围输入DC300-1200V，适应AC380V/AC660 的供电电源，电源模块输出稳定的12V供给驱动核，电路 原理图如图 ３ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPZKhNLWEqbJSnnWQ4BKvHhG8oMj1xuWl39r9nSYoeTEObzn24tnA6aQ/640?wx_fmt=png)

2.2 驱动电路设计

基于APD202的碳化硅驱动核，单电源供电，驱动能力强，外围电路简单， 可以应用电压为1700V以内不同电流等级的碳化硅器件，主要由输入电压电路，复位电路，信号输入电路，故障保 护电路以及栅极驱动信号电路组成，具体如下。

2.2.1 输入电压电路设计

由图4可知，电源模块输出稳定的12V供给驱动核供电，但是为了进一步保证输入电压的可靠性，需在电源输入与地之间接一个大于68μＦ的低等效电感、低等效电阻的电容，设计时同时并联了一个支撑电容100μＦ，如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFP1VekR0jL5Qa8NsoeUfGBWmFqnTFALicSDJcSF2fSsd2lVDvgeticAQIg/640?wx_fmt=png)

2.2.2  复位电路设计

驱动核的3脚是复位引脚，低电平复位，４脚是故障引脚，低电平故障信号输出。 当驱动核检测到故障信号后，锁存驱动核的栅极脉冲输出并产生一个稳定的-4V的电平信号关断碳化硅器件；同时， 4脚输出的低电平故障信号经过非门74HC14电平转换后，通过配置电阻 Ｒ１ 和电容 Ｃ１的值，让复位脚接收到一个大于 1ｍｓ 的脉冲信号后，实现自复位，如图 ５ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPboSiaRtvhgcaXFVznwdTicaEBVPvO8YPAD6vKkZYLic1Sv16ECIP4N26A/640?wx_fmt=png)

利用ＲＣ 时间常数计算出1ｍｓ 时间所需要的电阻 Ｒ１ 和电容 Ｃ１ ，得出电阻 Ｒ１ 为 1ｋΩ，电容 Ｃ１为１μＦ。

2.2.3 ＰＷＭ 信号输入设计

此驱动核逻辑高输入电压范围是4～5.5V，且为电流型驱动，输入信号电流为10～100μＡ，故 以最大电流100μＡ、最大电压5V设计串联输入电阻，根据欧姆定律可确定为输入电阻 Ｒ２ 为50ＫΩ，考虑到驱动核内部电阻等，设计时取10ＫΩ，如图 ６。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPNzEibpPvIk3V1Gst3icg6Ote8NXdej0DnUpmMsPaia52reYw5LubNy2GA/640?wx_fmt=png)

2.2.4 保护电路设计

为了防止SiC MOSFET开通关断期间集电 极和发射极之间承受过高的电压而损坏，需在SiC MOSFET集电极一端串联快恢复二极管，其 耐压等级需根据SiC MOSFET的耐压等级确定，本文选择的SiC MOSFET器件为1200V，ESIM的 反向电压为1000V，故串联两个ESIM形成保护。 

2.2.5 栅极驱动信号电路设计

栅极驱动电阻 ＲＧ的大小影响SiC MOSFET的开关时间、开关损耗、反向偏压安全工作区、短 路安全工作区等，栅极驱动电阻ＲＧ的选择是驱动 电路设计的重要部分。 栅极驱动电阻 ＲＧ计算式 如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFP46n8wicvlp4ibOiaraO2NgicLkjuo4yXYj2wMGcF9h7sganKpdoJlIiayTQ/640?wx_fmt=png)

式中，IGM是栅极峰值电流；VG（ｏｎ）是正偏电源电压；VG（ｏｆｆ） 是负偏电源电压； ＲＧ（ｉｎｔ） 是模块内部驱动电阻。

依据器件参数，ＩＧＭ为6A；ＶＧ（ｏｎ）为15V；ＶＧ（ｏｆｆ）为 3.3V；ＲＧ（ｉｎｔ） 开通为500ｍΩ，关断为350ｍΩ。根据参数计算出 ＲＧｏｎ为1.45Ω；ＲＧｏｆｆ为1.6Ω；而 栅极驱动电阻越大，开关损耗和驱动脉冲上升下降时间就越少，设计中开通驱动电阻为2.5Ω，关 断驱动电阻为5Ω，其次为了保证SiC MOSFET栅极可靠有效的开通关断，在驱动电路中将SiC MOSFET的栅极与发射极用平衡电阻和钳位二极 管进行并联，平衡电阻的值为10K，钳位二极管采用18V的齐纳二极管，这样连接可以防止SiC MOSFET 栅极电压超过所允许的最大值，保证SiC MOSFET高效安全的工作，如图 ７ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPFxicuF2dZyxY6AlJicLDrpuLYGrFaTkPdWyGsTOCwwXLvV1VWrnYCrGw/640?wx_fmt=png)

根据以上对驱动电路各个部分的介绍与分 析，设计出碳化硅的驱动电路外围整体电路如 图 ８ 所示。 本文给出一组碳化硅上桥和下桥两 部分的驱动电路，驱动核均为APD202，由CPU给出PWM1+和PWM1- 输入脉冲，上下桥导通之间有一个死区时间，防止因上下桥同时导通 而短路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPZJEzEKhtt7LUiapOicvne1szeIL0yLPmofic12IMLfATnO7LIPx32UOUg/640?wx_fmt=png)

３.　实验结果与分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPnyPPDnibOzquhrIqqnlBYgWcnA7sxF8Zw4D0wljsZn5dcictOK2GO5Tg/640?wx_fmt=png)

对设计的碳化硅驱动电路进行了实验研究，图9所示搭建的实验平台，主要由控制板、碳化硅驱动电路及主回路、示波器、供电调压器等仪器设备组成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPXI8pP1KFd6dIPbbTHcBlnyyBDcmy8NFcxbdgsmngVxzW70G9uf75Vg/640?wx_fmt=png)

图10是主控制板输出的控制充电器的一路 移相脉冲波形，从波形图中可以看出，周期为10μｓ，峰值为5V，满足驱动核输入信号电压；图11是设计的驱动板栅极驱动波形，从波形图中可以看出，两路信号互补，且存在一定的死区时间，周期为10μｓ，频率为100ｋＨｚ，峰值为16V，低电平为-3V，高电平为+15V，上升和下降都有一定的平缓度，降低了SiC MOSFET得开关损耗，使得转换效率更高，能可靠驱动SiC MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskxF4COI4ENiaaozzdEmpJFPRplZURibH6skxIXhIcVqRmibW1GXIUoic6Kzicsk69ibkmAMPVKgog2ibReg/640?wx_fmt=png)

４.　结论

（１） 本文设计的SiC MOSFET驱动电路，可以应用于矿用的各种规格的充电器中。 本设计减 小了充电器的体积和重量，提高了充电器的工作效率，增加了充电器的使用寿命。 

（２） 该驱动电路外围电路简单，容易实现，适用各种规格的SiC MOSFET。 驱动电路具有良好的驱动和保护能力，具有应用推广价值。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)