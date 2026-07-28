# 1700V/1600A SiC混合IGBT应用研究


> 原文地址: [https://mp.weixin.qq.com/s/W6vAbhUeM0jf144gufqRBg](https://mp.weixin.qq.com/s/W6vAbhUeM0jf144gufqRBg)

**文章来源：**机车电传动

**作者：**杨涛1, 2，唐威1（1.中车株洲所电气技术与材料工程研究院；2.变流技术国家工程研究中心） 

**摘 要 ：**SiC功率器件具有高频、高效率、耐高温、抗辐射等优势，介绍了目前SiC功率器件应用情况，阐述了SiC - JBS以及SiC混合IGBT的特性，分析了应用于1700V混合IGBT的驱动技术，完成了SiC混合IGBT模块功率试验研究。 

**关键词：**碳化硅器件；结势垒肖特基二极管；SiC混合IGBT；驱动技术；功率试验

**0 引言**

SiC是一种具有优异性能的第三代半导体材料,具有禁带宽度大、本征温度高、热导率高、饱和电子漂移速度高、击穿场强高、损耗低等特点。SiC器件比目前主流的硅半导体具有更高效率、工作结温和能量密度，可广泛应用于轨道交通、船舶、光伏、风电、电动汽车、混动汽车等领域。美、日及欧洲国家将SiC列入未来能源战略规划，已有三十多家企业成立了专门制造SiC器件的工厂，并进行相关的商业和推广活动。Cree和Rohm已推出SiC二极管和SiC-MOSFET，三菱推出了使用SiC混合IGBT功率模块的铁路车辆用逆变器，2013年6月已向东京地铁批量供货，用于银座线列车。国内株洲中车时代电气股份有限公司（以下简称中车时代电气）对SiC器件开展了深入研究，已研制出1700V/1600A SiC混合IGBT器件，本文将阐述其应用研究。

**1 SiC 混合 IGBT 器件特性**

中车时代电气1700V/1600A单管SiC混合IGBT器件实物及电路如图1所示，SiC混合IGBT内部的IGBT是Si材料，而其反并的二极管是SiC材料。SiC二极管的主流是pn结肖特基势垒(JBS)，这是目前最成熟的SiC两端器件，SiC JBS导通压降大幅下降，具有高关断电压和低反向电流。其反向恢复时间只有几个纳秒，基本上没有反向恢复电荷，能够大大减小开关损耗。经测试，1700V/1600A混合IGBT的反向恢复损耗为19mJ，而常规IGBT的反向恢复损耗为400mJ，混合IGBT的总开关损耗低于常规IGBT。SiC 混合模块与 Si-IGBT 模块总的开关能量损耗分别为2.5557J和3.4209J，可见 SiC 混合模块具有更加优异的性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o88ubs0xxcZARggTj6aJXV0SA2LdVib6IVPWMgFMFIR1w7blWGYSaIMqA/640?wx_fmt=png&from=appmsg)

**2 SiC 混合 IGBT 驱动技术研究**

**2.1 驱动原理**

SiC混合IGBT的驱动原理如图2所示，控制单元通过光纤向驱动板发送PWM控制脉冲，经驱动板处理后发送给检测板以实现对SiC混合IGBT的驱动保护。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8ibUVhQGiaWrvDeNk6CtOyG1CBUPfLXl08acEnWol6kF4KtGBTFBa0spA/640?wx_fmt=png&from=appmsg)

由于SiC混合IGBT器件应用于高压场合，驱动器与控制单元在电气上必须严格隔离。驱动器将电源模块提供的15.7 V电源经过开环隔离型高频DC/DC转换为两路15 V电源。控制单元与驱动器之间采用光纤进行脉冲传输和故障信息反馈，实现了主电路与控制电路、各个功率器件之间的电气隔离。

PWM脉冲信号经过驱动器功率放大后传送到SiC混合IGBT门极，具有足够的驱动功率。当发生过流、短路或欠压故障时，驱动器将保护SiC混合IGBT，并将故障反馈至控制单元。

**2.2 隔离电源驱动器** 

隔离电源采用单端正激电路拓扑，如图3所示，为开环控制，隔离变压器的隔离电压等级达到6000V，满足应用要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8ZVGmeiaDjxiao3umnVGpicsvZSPe4JZdb4ibWDvOlX8j6ickeOGgCaXSXnw/640?wx_fmt=png&from=appmsg)

针对驱动器开展了高低温试验，带负载工作频率500Hz。环境温度降到-40°C时，驱动器能够正常启动并连续正常运行5h；在高温(85 °C)情况下，驱动器连续正常运行5h，且顺利通过了高低温循环试验。

**2.3 过流与短路保护**

中车时代电气1700V/1600A混合IGBT双脉冲试验波形如图4所示。当负载电流达到额定值的2倍时，驱动器能够及时保护使其工作在RBSOA安全区内。在完全相同的试验条件下，达到2倍额定电流输出能力，混合IGBT比常规IGBT的保护时间更短。原因是混合IGBT反并了SiC-JBS二极管，反向恢复速度极快，使混合IGBT开通速度更快。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8DIwQ1btia6DBb0ib6G5EUwHUsXtibuicicjHmCyuia6HsY4uxehX5JMJp1tA/640?wx_fmt=png&from=appmsg)

当发生短路时，混合IGBT电流迅速上升到额定值的4倍以上，出现退饱和现象，通态压降Vcesat上升至母线电压，需在10μs以内关闭混合IGBT，否则将导致混合IGBT器件损坏。桥臂直通为I类短路，桥臂相间短路和桥臂对地短路为II类短路。I类短路比II类短路电流变化率di/dt大一些，所以I类短路采用高电压阈值，II类短路采用低电压阈值，保护时间分别设为8μs和10μs。由于短路情况下电流很大，需要采用软关断减小关断电压尖峰。如图5所示，当母线电压为DC780V，短路电流为7750A时，采用软关断使关断电压被控制在了1420 V以下，确保了SiC混合IGBT器件的安全。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8J5adLm0zItEn7IshonKIsKFqOybFwFgLqzHpxz6boBY0uBFx2bPv6w/640?wx_fmt=png&from=appmsg)

**3 SiC混合IGBT模块功率试验**

目前已研制出600kW的SiC混合IGBT模块IBCM60G-SiC，如图6所示，功率器件为中车时代电气1700 V/1600A单管SiC混合IGBT，冷却方式为重力热管走行风冷散热。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8mat1ZL5auVp8FPHavBIWmRSPibaicP98rlMeiaFvnicNvCAowhzvEkibDicQ/640?wx_fmt=png&from=appmsg)

在地铁牵引变流器装载混合IGBT模块IBCM60G-SiC，按照图7所示电路开展功率考核试验，牵引逆变器主电路如图8所示，试验内容如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8U81v9SnWCK9tq92XUVdniavJJErRib7Dc3OHibkYvlT5iaHJ6ia20QVicD0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o808BW048hXCvibLricBAibFduSias0QlibxvlicLEqEumO2z4TKFYlAhEENeg/640?wx_fmt=png&from=appmsg)

SiC混合IGBT模块顺利通过了额定工况、牵引大电流工况以及制动工况试验考核。在直流输入电压750V，输出电流有效值为465A的额定工况下变流器持续运行1h，逆变器输出波形正常，如图9所示。SiC混合IGBT模块温升15K，与常规IGBT模块比较功耗降低约20%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnXxv5xP2DXQyG6ItNft7o8TB7XFZbwt5CFvXNHLUfHGWWxVo8adPrURCjaiceSGUywP9F26Hhh5icg/640?wx_fmt=png&from=appmsg)

**4 结语**

由于SiC器件具有高效节能及高功率密度等优势，在轨道交通领域具有巨大优势和应用前景。目前适合采用SiC混合IGBT实现牵引系统节能降耗，其专用驱动器能够实现灵活可靠的驱动保护， SiC混合IGBT已在城轨地铁领域率先应用，将逐步推广到机车、动车组等领域。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)