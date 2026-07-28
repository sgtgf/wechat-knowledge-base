# 碳化硅器件(SiC SBD/MOSFET)在大功率开关电源与适配器电源中的应用分析及选型介绍


> 原文地址: [https://mp.weixin.qq.com/s/x-NZO9PHW9qNPnN\_qAtTsw](https://mp.weixin.qq.com/s/x-NZO9PHW9qNPnN_qAtTsw)

🔌1. 开关电源与适配器电源概述

开关电源（SMPS）和适配器电源（Power Adapter）都是利用现代电力电子技术，控制开关管开通和关断的时间比率，维持稳定输出电压的电源装置。

1.1 基本定义与区别

开关电源：大功率开关电源是一种通过高频开关转换实现高效电能转换的电力设备，主要应用于工业自动化控制、军工设备、医疗仪器及通讯系统等领域。其核心是通过电路控制开关管进行高速导通与截止，将输入电源转换为高频脉冲信号，经滤波和稳压后输出稳定电压或电流。  

该设备由主功率电路、PWM控制电路、单片机控制电路和辅助电源构成。主功率电路通过整流滤波、高频逆变及输出整流实现电能转换；PWM控制电路调节脉冲占空比以维持电压稳定；单片机和辅助电源分别负责参数监控及系统供电。分层式电控箱设计通过可调节层板分隔组件布局，独立散热风道与插拔式结构优化了空间利用率和维护便捷性，解决了紧凑场景下的散热难题 。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36kzYzKLG66fIniajGGFKHeibfdoXFAU1mktmwpDJ5oHB0VhJl8YnCeiamA/640?wx_fmt=jpeg&from=appmsg)  

适配器电源：又称交流电源适配器（AC-DC Power adapter）是将输入的交流电源转换成输出的直流电源的装置 。该装置一般由外壳、电源变压器和整流电路组成 。其工作原理为将输入的交流电通过变压器变压，经过整流器变为直流电 。

电源适配器作为电子电气设备的主要能量来源，尤其是小型便携式电子设备及电子电器产品的电源设备，其广泛配套于手机、路由器、笔记本电脑、液晶显示器、音视频播放器、游戏机、医疗器械、灯具、安防摄像头、机顶盒等 。随着消费者对电子产品性能要求的不断提高，以及电子产品呈现便携化、长续航等特征，故对其电源适配器在能源转换效率、功率密度和稳定性提出了更高的要求，同时也推动电源适配器向智能化发展。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36TsQvxezx3dEawJLXlH7BBUPjv2icB4szZPMP4iakfPm2M1SONOpbXqzA/640?wx_fmt=jpeg)

核心区别在于，适配器电源通常是完整封装、即插即用的独立模块，为特定设备供电（如笔记本、监控摄像头）；而开关电源的概念更广，常作为内部组件集成到更大规模的系统中（如服务器机柜、工业设备）。

1.2 主要特性对比

表概括了开关电源和适配器电源的主要特性：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36ibLU6JLo6Jx8nsGPORKa5ibFmjflmwHrqscJlXXYIkTaFJ79JtRyrPpQ/640?wx_fmt=png&from=appmsg)

1.3 应用领域

大功率开关电源：广泛应用于数据中心服务器电源、工业自动化控制设备、通信基站电源、医疗仪器、电动汽车充电桩、光伏逆变器和不间断电源（UPS） 等领域。

适配器电源：主要为各类消费电子产品和小型设备供电，如笔记本电脑、平板电脑、智能手机（快充头本质也是适配器）、路由器、机顶盒、监控摄像头、LED照明设备以及各种智能家居产品。

1.4 关键性能参数要求

无论是开关电源还是适配器电源，都有一些共同的关键参数要求，只是侧重点和指标高低有所不同：

输入特性：

交流输入电压范围：通常要求适应全球主要的电网标准，即90V-264V AC（50/60Hz），以适应不同国家的市电电压。

抗浪涌能力：必须具备抗浪涌（Surge）保护能力，通常使用金属氧化物压敏电阻（MOV） 等元件来抑制电网引入的瞬间高压尖峰。

输出特性：

电压精度和稳定性：输出电压与标称值的偏差通常要求控制在±1% ~ ±5% 以内，尤其在负载和输入电压变化时仍需保持稳定。

纹波和噪声：输出直流电压中交流成分的大小，是衡量输出质量的关键指标，要求尽可能低，通常为几十mV级别。

负载调整率：指负载电流从空载到满载变化时，输出电压的变化率，越小越好，体现电源的带载能力和稳定性。

效率：指输出功率与输入功率的比值，高效率意味着能量损失少、发热小、更节能。各类能效标准（如DoE, CoC, 80 PLUS）都对效率有明确要求。

安全性与可靠性：

必须符合相关的安全标准（如IEC/EN/UL 60950-1, 62368-1），包括电气间隙和爬电距离、绝缘强度（耐压测试）、漏电流、过热保护（OTP）、过流保护（OCP）、过压保护（OVP）和短路保护（SCP）等。

需要良好的热设计，保证元器件工作在允许的结温以下，确保长期可靠运行。

其他：

功率因数（PF）：特别是大于一定功率（如75W）的电源，通常要求加入功率因数校正（PFC） 电路，以减少对电网的谐波污染，PF值通常需大于0.9甚至0.95。

电磁兼容性（EMC）：需满足相关标准（如CISPR 32/EN 55032），限制电磁干扰（EMI） 的发射，同时自身也需具有一定的抗干扰（Immunity） 能力。

2\. 碳化硅（SiC）器件的特性优势与产品选型

碳化硅（SiC）作为第三代半导体的代表材料，因其卓越的物理特性，正在电力电子领域引发一场革命。

2.1 SiC器件的核心特性

与传统的硅（Si）材料相比，SiC具有以下突出优势：

宽禁带宽度：SiC的禁带宽度约是Si的3倍（3.26eV vs 1.12eV）。这使得SiC器件具有极低的漏电流、更高的工作结温（可达200°C甚至以上）和更强的抗辐射能力。

高临界击穿场强：SiC的击穿场强约是Si的10倍。这意味着对于相同的耐压等级，SiC器件的外延层可以做得更薄、掺杂浓度更高，从而大大降低比导通电阻（Rds(on)·A），更容易实现高压器件。

高热导率：SiC的热导率约是Si的3倍。这使得SiC器件产生的热量能更容易地传导到外壳和散热器，散热性能更好，有利于提高功率密度和可靠性。

高饱和电子漂移速率：SiC中电子的饱和漂移速率是Si的2倍。这使得SiC器件具有更高的开关速度，能在更高频率下工作。

2.2 SiC MOSFET 与 SiC Diode 的优势

在电源应用中，SiC器件主要体现在SiC MOSFET和SiC肖特基二极管（SBD） 上：

SiC MOSFET：

低导通损耗：高压下导通电阻低。

低开关损耗：开关速度快，开启（Eon）和关断（Eoff）损耗显著低于同等级的Si IGBT或MOSFET。这使得开关频率可以大幅提高。

无体二极管反向恢复问题：SiC MOSFET本身的反并联二极管反向恢复电荷（Qrr）极小甚至可忽略。这消除了传统Si MOSFET体二极管反向恢复带来的损耗和EMI问题。

SiC肖特基二极管（SBD）：

零反向恢复（Qrr ≈ 0）：这是相比Si快恢复二极管（FRD）最巨大的优势。反向恢复损耗几乎为零，极大地降低了开关损耗和EMI噪声。

正温度系数：方便多管并联均流。

开关速度极快：几乎无开关延迟。

2.3 SiC MOSFET 与 SiC Diode 的产品介绍

SiC MOSFE产品介绍

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36a92dAzOqa9HzrQ1mAHOqrIeqGJTd5HlbIjSpkeyeLiagMeEtP4NT00w/640?wx_fmt=jpeg&from=appmsg)

封装多样，电压650V及1200V的产品选型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36CPF30hD1EOtJmSm0Fiag77sFSWtMyDQ0ZnTEL6icliaibHI6jFtsJqAdicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB366GCBDZjrFFzpAjqPR62JtmgykadeibibRbAmbbIktqHQ6mHAicEmsDqpg/640?wx_fmt=png&from=appmsg).![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36fffNQFPN7tQnHeBbQHxpX4uuf1EhcrYQw0P0jcYvLyTqiacIej7OMRQ/640?wx_fmt=png&from=appmsg)

SiC SBD产品介绍

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB363nZ4e5HcuNKPTMpr3XMISTGnDKpP9x6Maejurick5Ab0LkQ4TrR78Ew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36tT0U46Uz2xjsA8ZOgeLb5Ob2ALQrIcOOnx7TicXwkdy98mD2jicwYFicA/640?wx_fmt=png&from=appmsg)

注：所有规格的SiCMOSFET和SiC SBD器件，均有对应规格的芯片销售。

3\. SiC器件在开关电源和适配器电源中的应用

3.1 应用优势

将SiC器件应用于开关电源和适配器电源，能带来多方面的性能提升：

高效率与低损耗：

SiC MOSFET的低导通电阻和低开关损耗，以及SiC SBD的零反向恢复特性，能显著降低电源在PFC级和DC-DC级（尤其是LLC谐振变换器）的总损耗。

效率提升尤为明显在高开关频率和高电压应用中。整体效率可比Si基方案提升2-5个百分点，轻松满足80 PLUS钛金等苛刻能效标准。

高开关频率与高功率密度：

SiC器件允许电源工作在高得多的开关频率（数百kHz至MHz级别），而效率不会显著下降。

开关频率的提高，意味着磁性元件（电感、变压器）和滤波电容的体积可以大幅减小。这是提升电源功率密度（W/in³）最关键的手段之一。采用SiC器件，功率密度可达37.95W/in³甚至更高。

优异的高温工作能力：

SiC器件的高结温耐受能力（>200°C），降低了散热系统的设计要求。在某些场景下，可以简化散热器、使用更小的风扇甚至采用无风扇的自然散热设计，进一步减小体积、降低成本并提高可靠性。

降低系统总成本：

 虽然SiC器件本身的单颗成本目前仍高于Si器件，但它通过提升效率、减小无源元件体积、简化热管理，可以有效降低系统整体的综合成本。

3.2 产品选型及设计要求

3.2.1 产品选型要点

为您的电源设计选择SiC器件时，需考虑以下参数：

电压等级：根据输入电压和拓扑确定。

适配器/PFC级：通常选择650V器件（应对400V母线电压并有足够裕量）。

三相输入或更高压输出：考虑1200V或更高电压等级的器件。

额定电流：根据输出功率和拓扑结构计算峰值电流，并留出30-50%的裕量。

导通电阻（Rds(on)）：在满足电流能力的前提下选择。较低的Rds(on)意味着较低的导通损耗，但通常成本更高、栅极电荷可能略大。

开关特性：

栅极电荷（Qg）：Qg会影响驱动损耗和驱动电路的设计。较低的Qg有助于降低驱动损耗和提高开关速度。

内部栅极电阻（Rg）：影响开关速度和EMI。

关注品质因数（FOM），如 Rds(on) \* Qg 或 Rds(on) \* Eoss，综合衡量器件性能。

封装：选择适合功率和工艺的封装。

 TO-247-3/4L：经典封装，散热好，适合通孔插件，常用在中小功率电源和适配器中。

 TOLL、DFN8\*8等表面贴装（SMD） 封装：更适合自动化贴片生产，具有更低寄生参数（如源极电感），有利于高频性能发挥和提升功率密度。

体二极管特性：即使SiC MOSFET的体二极管性能优于Si，但在桥式结构中（如PFC），通常仍会外置性能更好的SiC SBD。

3.2.2 设计注意事项

栅极驱动设计：这是发挥SiC性能的关键，也是主要挑战。

驱动电压：SiC MOSFET通常需要+15V/-3V ~ +20V/-5V的驱动电压来确保充分导通和可靠关断。负压关断对防止误导通至关重要。

驱动回路寄生电感：极快的开关速度（高dV/dt, dI/dt） 使得驱动回路的寄生电感变得非常敏感，易引起栅极振荡和误导通。必须最小化驱动回路面积（使用开尔文连接、贴片封装、靠近管脚布局）。

驱动芯片选择：选择专为SiC或氮化镓（GaN）设计的驱动IC，它们通常提供合适的驱动电压、足够的驱动电流和快速的传播延迟。

PCB布局：

功率回路最小化：主功率回路（尤其是含有高di/dt的环路）必须尽可能小，以降低寄生电感和开关过冲，减少EMI。

地平面分割与敏感信号保护：合理安排地平面，避免噪声耦合。对dv/dt高的节点（如开关节点）进行屏蔽，防止对驱动和反馈等敏感电路造成干扰。

电磁兼容性（EMI）：

 SiC器件的高速开关会带来更高的EMI挑战（高频噪声更多）。

需要在电路拓扑（如采用谐振软开关技术）、PCB布局、滤波器和控制策略上采取措施。软开关技术（如LLC）能有效降低SiC的开关损耗和EMI。

热管理：

尽管SiC耐高温，但保持较低的工作温度仍对提高可靠性和寿命至关重要。

需确保结温（Tj）在最大允许值以下，并留有余量。高效的散热设计必不可少。

3.3 知名厂家应用案例

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36eUBvTCxdDX5gtAZwCYllrKtyuicsMAu5uSM3QKqib1NI4viakj53W8wqA/640?wx_fmt=jpeg)

**梵塔产品**图片-来源：充电头网

**梵塔：推出的一款2000W大功率图腾柱PFC方案，使用碳化硅MOS管作为功率器件，满载的转换效率高达98.7%，非常适合大功率开关电源，服务器电源等场合应用。**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36l5I0C18uKx1aHAwabZicURU5WkPRTq7LCrlh9q2VsHIOPv0s5dPypEQ/640?wx_fmt=jpeg)

机械**革命产品**图片-来源：充电头网

**机械革命：电压采用了时下主流PFC+LLC电源架构，280W游戏本适配器采用国基南方SiC开关管，支持28V/5A输出，动态响应≤30μs。**

**其他行业趋势：**

在数据中心服务器电源中，采用SiC器件的高效能UPS和多相VRM正在普及，以满足AI、5G、云计算带来的高算力、高能耗需求，助力数据中心降低PUE（电源使用效率）。

在高端适配器（如笔记本快充、显卡电源）中，也开始采用“SiC MOSFET + PFC控制器 + LLC控制器”的方案，以实现小体积、高效率和高可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsknpeK0Dibxvq9k33aiaoTB36DjibeWRuzE4aZsu3zicO2QvK1gKV3CxbwehOiadaWc2VaEx8PE6ZHczpQ/640?wx_fmt=png&from=appmsg)

图片来源：充电头网

🎪4 . SiC器件在开关电源与适配器电源中的发展趋势

效率与功率密度的持续提升：

随着SiC材料工艺、芯片设计和封装技术的不断进步，SiC器件的性能将进一步提高（如更低Rds(on)、更低Qg），成本也将持续下降。这将推动开关电源和适配器的效率和功率密度再创新高。

与智能数字控制的深度融合：

未来电源将是“SiC（高效功率器件） + DSP/MCU（数字控制）”的紧密结合。数字控制能实现复杂控制算法（如自适应开关控制、预测控制）、智能故障诊断、状态监控和通信功能（如IoT远程管理），最大化挖掘SiC的性能潜力，并实现智能化。

更广泛的应用场景渗透：

随着成本下降，SiC技术将从目前的高端服务器电源、通信电源、工业电源等领域，逐步渗透到中大功率适配器、电动汽车车载充电机（OBC）、直流充电桩、光伏储能系统等更广泛的场景。

系统级优化与模块化集成：

单纯的器件替换带来的收益是有限的。未来的发展更倾向于针对SiC特性进行系统级的协同优化，包括：

优化拓扑：充分发挥SiC高频优势的拓扑（如LLC、CLLC、有源钳位反激等）将成为主流。

驱动、控制、保护集成：出现更多高度集成的智能功率模块（IPM） 或半桥/全桥模块，将SiC MOSFET、驱动器、温度/电流检测甚至控制器封装在一起，简化设计，提高可靠性。

例如，多相并联供电方案在服务器CPU/GPU供电中已成为趋势，通过智能均流控制应对大电流、低电压挑战，并优化散热。

应对更严格的能效与环保标准：

全球“双碳”目标背景下，各国能效法规（如ErP、DoE、CoC）和环保要求将愈发苛刻。SiC器件因其天然的高效率优势，将成为电源设计者满足这些法规要求的关键技术路径。

💰五. 总结

碳化硅（SiC）器件凭借其宽禁带材料带来的卓越特性，正在开关电源和适配器电源领域引发一场深刻的变革。它们通过显著提升效率、允许更高开关频率以实现小型化、改善高温运行性能，有力地应对了当前和未来电力电子系统对高效率、高功率密度、高可靠性的迫切需求。

虽然目前SiC器件在成本、驱动设计、EMI处理等方面仍存在一些挑战，但随着技术的不断成熟、产业链的日益完善以及设计经验的积累，这些挑战正在被逐步攻克。SiC与数字控制技术的结合，将是未来高效智能电源发展的核心方向。

对于电力电子工程师而言，深入理解SiC器件的特性，掌握其应用选型要点和设计技巧（特别是栅极驱动和PCB布局），积极拥抱这一技术变革，将有助于设计出更具竞争力的电源产品，在未来的市场竞争中占据先机。SiC技术的普及和应用，无疑将为构建更加节能、高效的绿色数字世界提供强大的底层支撑。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk95PQibOL2vIfm7D2dwfRBbg7mbSTRq6xxdalQFicZl9juNGuSbwttzgj2bcTVWEcMMGArafeOy2Sw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk95PQibOL2vIfm7D2dwfRBbMr2gmicAdQbfntmnNrC0DIkQWRRoRHwXp0x3DrkgrvrfvqSxbiby4YGg/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk95PQibOL2vIfm7D2dwfRBbRLfWib8MjibZPVbIpQcgibL1jsyV1JC3sJNzzQbsfuSWXh7BR4Egbs0Cw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)