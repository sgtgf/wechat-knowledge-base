# 8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍


> 原文地址: [https://mp.weixin.qq.com/s/HAT\_GOtsz0LUeRoNKO\_8Cw](https://mp.weixin.qq.com/s/HAT_GOtsz0LUeRoNKO_8Cw)

在电力电子行业的发展过程中，半导体技术起到了决定性作用。其中，功率半导体器件一直被认为是电力电子设备的关键组成部分。随着电力电子技术在能源、工业、医疗、交通、消费等行业的广泛应用，功率半导体器件直接影响着这些电力电子设备的成本和效率。以硅(Si)材料为主的功率半导体器件就一直扮演着重要的角色。功率硅器件的应用已经相当成熟，但随着日益增长的行业需求，硅器件由于其本身物理特性的限制，已经开始不适用于一些高压、高温、高效率及高功率密度的应用场合。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMVvdnfbROia2ic7TJjFuGFX49rECF0uRl4icyh9v2jfyiaL3ISjJLdoIp8A/640?wx_fmt=jpeg&from=appmsg)

20 世纪90 年代以来，碳化硅(silicon carbide，SiC)MOSFET 技术的迅速发展，引起人们对这种新一代功率器件的广泛关注。与Si 材料相比，碳化硅材料较高的热导率决定了其高电流密度的特性，较高的禁带宽度又决定了SiC 器件的高击穿场强和高工作温度。尤其在SiC MOSFET 的开发与应用方面，与相同功率等级的Si MOSFET 相比，SiC MOSFET 导通电阻、开关损耗大幅降低，适用于更高的工作频率，另由于其高温工作特性，大大提高了高温稳定性。

![](https://mmbiz.qpic.cn/mmbiz_gif/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM9xJZf4yE1erZdfoD77aU2Kyp49B9efsDqDTftuPGa0eaBa6opuql2A/640?wx_fmt=gif&from=appmsg)

SiC作为第三代半导体产业发展的重要基础材料，SiC MOSFET器件具有更高的开关频率和使用温度，能够减小电感、电容、滤波器和变压器等组件的尺寸，提高系统电力转换效率，并且降低对热循环的散热要求。在电力电子系统中，应用碳化硅MOSFET器件替代传统硅IGBT器件，可以实现更低的开关和导通损耗，同时具有更高的阻断电压和雪崩能力，显著提升系统效率及功率密度，从而降低系统综合成本。

  SiC MOSFET产品简介

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMcKTHHNpRx0V7cDsF6yPzYxD22Xfl1kLJeQPmmdPtn50Q0kdicS3Y0oQ/640?wx_fmt=png&from=appmsg)

****1\. SiC MOSFET特性及优点：****

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMRenrUfgsOGfjOcRc2sxAp9IRuDTdtIvkCDjwLeeNRkKHnKKoYwdJJQ/640?wx_fmt=png&from=appmsg)

@‌高温工作能力‌：SiC材料具有高度稳定的晶体结构，其能带宽度可达2.2eV至3.3eV，几乎是Si材料的两倍以上。因此，SiC器件能够承受更高的温度，一般而言，SiC器件的最大工作温度可达到600°C‌。

‌@高阻断电压‌：与Si材料相比，SiC的击穿场强是Si的十倍多。这意味着SiC器件的阻断电压比Si器件高很多，适用于高压应用‌。

@‌低损耗‌：SiC器件的导通损耗比Si器件小很多，且其导通损耗对温度的依存度很小。这使得在相似的功率等级下，SiC器件的效率更高‌。

‌@快速开关‌：由于SiC的热导系数几乎是Si材料的2.5倍，饱和电子漂移率是Si的2倍，因此SiC器件能在更高的频率下工作，适用于高频开关应用‌。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMLibyAXJc1NW4iaKJdXdeyqhacQrb8ZalpvTWP3ZVQ1xvQ0PP92G7eVxg/640?wx_fmt=png&from=appmsg)

****2\. SiC MOSFET耐压等级 ：****   

SiC MOSFET的耐压范围目前已经达到了650V到6500V。‌ 碳化硅半导体材料因其优异的物理性能，在新能源汽车等领域受到了广泛关注‌。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahe7TSETB8hWkMicvAskag9FfcEYoedYLtX0TXFnY5E28osot1KEE5GHdw/640?wx_fmt=png&from=appmsg)

具体来说，SiC MOS管的耐压范围涵盖了多个等级，包括650V、1200V、1700V、2000V和3300V等，最高耐压超过6500V‌。这种高耐压能力使得碳化硅MOS管适用于各种高电压应用场景‌。  

碳化硅MOS管的高耐压能力主要得益于其材料特性。碳化硅具有较高的击穿电场和较大的电子迁移率，这使得碳化硅MOS管不仅能够承受更高的电压，还具有较大的电流密度‌。

3.SiC MOSFET封装分类：

按照安装在PCB板上的方式来划分，SiC MOSFET管封装主要有两大类：插入式(Through Hole)和表面贴装式(Surface Mount)，还有一种类似模块封装的SOT-227封装。  

  

插入式就是MOSFET的管脚穿过PCB板的安装孔并焊接在PCB板上。插入式封装有晶体管外形封装(TO)。

  

插件封装主要有 ：TO-247-3、TO247-4、TO220F 。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0aheHRlTeCuteFCcdia9z13blNO1bHlUrlcBuoO32eDIiaugNMjFxd8W7W2A/640?wx_fmt=png&from=appmsg)

TO247-4L和TO247-4封装图

 ![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahebv0yrYuTan9mTia7yHAXHF6qZ54o6cWRmOGmSxFfGybKLKbpoe90Hog/640?wx_fmt=png&from=appmsg)

TO220F和TO247-3封装图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM8eH7UcllhRsAQh1vRo4W1STfeWgrGs2vMrv3ZjNib7xRpgy6cB1sHbw/640?wx_fmt=png&from=appmsg)

插件SiC MOSFET产品是市场通用器件，可用于各种PFC和桥式整流电路，应用市场主要包括：汽车OBC、DC-DC、充电桩、空调变频器、光伏逆变器、UPS、大功率LED电源、通信电源、各种工业设备电源等，功率从几百瓦到几百千瓦不等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMTJoOvE2tWFflia8RLbvtohmkCgUjdsbMcHAJE9YLlxHCPv9HnmGovGQ/640?wx_fmt=png&from=appmsg)

表面贴裝则是SiC MOSFET的管脚及散热法兰焊接在PCB板表面的焊盘上。  

  

贴片封装主要有：DFN5×6、DFN8×8、TO-263-7、TOLL。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0aheqTUOraDGtergibxIYicCoXXEcAhwF10oJadZxia0DTdpCOx4ZrNmZq5JA/640?wx_fmt=png&from=appmsg)

PDFN5\*6和PDFN8\*8封装图

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0aheUslu0Y03K3wgHs1lW404TS7DNA3A51yUtE0kvlicm5eVNfUibbmtlhnQ/640?wx_fmt=png&from=appmsg)

TOLL和TO263-7封装图

贴片封装碳化硅MOSFET产品，主要用于各种小功率电源PFC电流或其他整流电路，功率范围主要在0~3000W，电视电源、家电电源、手机适配器、电脑适配器、新能源汽车DC-DC转换器、小功率OBC、微型逆变器等。

  

SOT-227封装介于单管和模块之间，产品具有模块体积小、热阻低、通流能力强的特点。M4螺丝法蓝底板安装4个引出端口，常用来封装IGBT、各类二极管、MOSFET等。同时，SOT-227为内绝缘封装，安装简便，也更安全。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0aheAySWeLWxWCNmdnRs2rxeexsyd4aYhxBYkRfoCxiaAAbXk4AS6Olica2Q/640?wx_fmt=png&from=appmsg)

SOT-227封装图

**4.SiC MOSFET产品参数：**

**650V电压等级，内阻低至12毫欧**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM27ajTZib2TiaTAN9yWxqLzVKzXte6eypGqTQbz32dOTBpBaNjC82OObQ/640?wx_fmt=png&from=appmsg)

**1200V电压等级，内阻低至13毫欧**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMxPZ5mEpq4wiazIzeGXyqNibva6bfbIOzO7RIkkWLibFib5dHoBUJlhwrLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMshMbydyCuJJwM9EGY5SjtAgMKuWgeLgclnf0fUCOMnskP8fxZK87ww/640?wx_fmt=png&from=appmsg)

**1700V电压等级，内阻低至20毫欧**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMNiarEA7c7uqDiau9QbYrq2h1RLEuiaAIckSzibdNkRtVLw0odaYvr1Eib1Q/640?wx_fmt=png&from=appmsg)

**2000V和3300V电压等级，内阻低至40毫欧**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM2zWSLia78MkddILnnda6xkIw6r7E6dARDyzgOll6MRZiaDSYwPc6q38A/640?wx_fmt=png&from=appmsg)

**1200V60A和1700V100A内绝缘封装**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM0bwAED8yIib2DbibdjoqZbX49UsC0J5h0a7LrrZElGHsiaVlEapanUpOQ/640?wx_fmt=png&from=appmsg)

**5.SiC MOSFET驱动电压（技术迭代）：**

  

爱仕特研发并量产第四代SiC MOSFET工艺：低阈值工艺，兼容性强，大幅提升沟道迁移率，简化应用方案。

  

第四代产品与第三代产品相比，芯片尺寸变小，电容变小了，开关速度更快了。驱动电压更接近硅基器件的驱动电压。

  

第三代产品驱动电压建议+18V/-5V左右，第四代产品驱动电压18V兼容+15V/-5左右，部分小电流的产品，驱动电压+12V,和硅基器件的一样，方便替代。

现市场应用较多的还是第三代产品。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahericHMEZ9S4s3hb4PxiaFicp4viaEewXE2dd8pn7AFINDkB0eEtNTYzSzbw/640?wx_fmt=png&from=appmsg)

**6.SiC MOSFET产品选型要点：**

如何根据应用选择适合的SiC MOSFET？

确定电压等级：首先，您需要确定您的应用需要的电压等级。有650V、1200V、1700V、2000V和3300V的选型表，您应该选择与您系统最大工作电压相匹配的MOSFET。  

选择合适的电流等级：电流等级决定了MOSFET可以安全处理的最大电流。例如，如果您的应用需要承载30A的电流，则应选择列出的具有30A电流等级的型号。

考虑导通电阻R(on)：这是衡量MOSFET效率的关键参数。导通电阻越低，通过MOSFET时的电力损耗就越小。在设计电源转换应用时，选择导通电阻较低的MOSFET是很重要的。

门极驱动电压Vgs：Vgs是打开MOSFET所需的电压。根据应用的门极驱动能力选择合适的Vgs等级。

封装类型：封装对于设备的热管理和空间布局至关重要。多种封装类型，例如TO-247、DFN8和SOT-227等。根据PCB布局和热管理需求选择适当的封装。

产品状态：选择在生产中的型号以确保供应稳定。  

数据手册：数据手册能提供关于产品详细规格的全部信息，包括最大安全工作区域、热特性和应用指南。在选择型号前，一定要翻阅对应的数据手册进行深入了解。

通过上述步骤，您可以根据特定的应用需求和性能要求，选择合适的Sic MOSFET。选型时应综合考虑上述所有参数，以确保选出的MOSFET在性能、效率和成本之间达到最佳平衡。

**选型关键参数：**

1.漏源击穿电压（VDS）：也称为漏源阻断电压，是SiC MOSFET在关断状态下能够承受的最大漏极与源极之间的电压。选型时应留有足够的余量，以应对系统电压波动或瞬态过电压的情况。

2.最大漏源电流（ID）：反映了器件的带负载能力，是SiC MOSFET在导通状态下能够承受的最大漏极电流。需根据应用中的最大工作电流来选择合适的ID值，以确保器件在长时间运行下不会过热或损坏。

3.最大栅源电压（VGSS）：定义了栅极与源极之间允许的最大电压差。决定了驱动电路的设计，必须确保驱动电压不超过VGSS，以防止栅极氧化层击穿或损坏。

4.阈值电压（VGS(th)）：是使SiC MOSFET从截止状态转变为导通状态所需的栅极电压。决定了器件的开关灵敏度，需根据电路需求合理选择。较低的VGS(th)值通常意味着更容易的开关控制，但也可能导致更高的静态功耗；而较高的VGS(th)值则可能增加开关难度，但有助于降低静态功耗。

5.导通电阻（RDS(on)）：SiC MOSFET在导通状态下的电阻。直接影响器件的能耗和发热量。较低的RDS(on)值意味着更小的能量损失和更低的发热量，因此，在选择SiC MOSFET时，应优先考虑RDS(on)较小的器件以提高系统效率。但更小的RDS（on）意味着成本更高，设计时也要综合考虑。

总结，在实际应用中，应根据具体的应用场景和需求，全面综合地考虑 MOSFET、IGBT 和 SiC MOSFET器件的特性与选型参数。例如，在高频开关应用中，可优先考虑 MOSFET，以充分发挥其低功耗和快速开关的优势；在电动汽车电机驱动等高压大电流应用中，IGBT 则是更为理想的选择，因其能够承受高电压和大电流；而 SiC 器件则更适合于追求高频高效、高可靠性和极端环境适应性的应用场景。

此外，工程师还需高度关注器件的可靠性、供应商的可靠性以及器件的实际测试与验证情况。由于芯片供应商规格书里的测试是在比较理想条件下进行，因此在实际设计产品时，所有器件的性能要打个8折，乃至6折，即留有裕量。比如ID=10A，使用到0.8xID=8A即可，只有这样，才能确保所选器件能够满足设计要求并稳定运行。

7.SiC MOSFET驱动与设计：

SiC MOSFET的门极驱动设计并不复杂。和硅基IGBT、硅基超结MOSFET基本类似。设计上可简单分解为硅基IGBT的负压驱动设计能力+硅基超结MOSFET的高速开关设计能力。 

与硅基器件相比，SiC MOSFET的跨导（增益）更低，内部栅极电阻更高，其栅极导通阈值在高温下可能低于2 V。因此，在关断状态下，必须向SiC MOSFET 施加负栅源电压（建议为-3~-5V）。SiC器件的栅源电压通常要求在18V~20V，以降低导通状态下的导通电阻（RDS）。SiC MOSFET工作在低VGS下可能会导致热应力或由于高RDS 而可能导致故障。与低增益相关的其他影响会直接影响几个重要的动态开关特性，在设计适当的栅极驱动电路时必须考虑这些影响，包括驱动电压，外接栅级， 驱动能力（输出峰值电流、开关频率等），栅极电荷（米勒平台），传输延迟时间（一次侧-二次侧之间等），保护功能（Miller Clamp、DESAT、OCP、UVLO 等），共模瞬态抑制（CMTI：Common Mode Transient Immunity）等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM9zicxCPjWQElp35OkjBEtdRu4Ou7yCrAX4f0DMJ1Sx3z3ibEpOc2CbXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRM8icyW1fAID8937buMrjOWETY3wKxdUha9vyaltrEuHm3iaAG6VzEVcsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMSuwg5GL4H1C17VbUqEQ1CYXnqjU3kamicKIPEdiaQQ75HaibbQ1hicZia0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMXEzgQue56mUvZc7r19yFGEoUjWq1icI7mMhMtOWxJGfvlibVqG4mw5fQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMZkDJ3ffto0OhO7wjpSbcHia0aaUVssHLWnyDMl8XySgTNo3kGOgIInw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMMIlGVOJhb3T7jUoB8O2872r83UDCPS8vO6qmErXn8AOVuiaCrHCLCPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsljjQIJ1C1t2SUicgPRgvuRMMCcsbfzW88lrRLmI8RvB7RcunMLicI5WdewiciaRW3tcFp31SkibfnXjCw/640?wx_fmt=png&from=appmsg)

 8.SiC MOSFET产品应用：

碳化硅MOSFET具有高频高效，高耐压，高可靠性。可以实现节能降耗，小体积，低重量，高功率密度等特性，在新能源汽车、轨道交通、智能电网、充电桩电源模块、光伏逆变器、光储一体机、工业电源及军工电源、电机驱动、白色家电等领域具有明显优势。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahexAvg88uATmaGqT7q69Z3oTgMmLHOSYmM1g2vPbvmxcARskBP9XYmHg/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0aheXnldlGsjphMxVZ28qyCrQQPTptpoO7KlHxNP43dmr1J80BPLN8eDBg/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahehqncNJRYMJcBQP3jFpZmD1LcnKrmWDbKwf8QUd4MicvqGJib5uXvIrDA/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahe3vAZRQzM0phBMIKMJSn6tTZZa67CPwwAckofaXGDc6glUJeibjP8UDg/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0ahe0n4VlyPggA19AWZje9sdMx7yJYEkHibLj70mQZrwlPicy0C48XB9ibZYQ/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmDYYXiasPJpfmXicvzYy0aheSDX5hhVmqlP8DDTxkjpDZzk4jJiafRVre2NiaerAs91cico9ibhWV9x4jQ/640?wx_fmt=png&from=appmsg)

**总结**

**在电力电子、电动汽车、通信设备等诸多领域中，SiC MOSFET彰显出独特的优势，已然成为工程师在设计系统时至关重要的选择。本文通过对SiC MOSFET简介，以及在选型时需重点关注的参数，为刚入行的工程师朋友呈上一份学习与使用指南，方便参考。**

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)