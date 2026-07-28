# 车用 SiC-MOSFET 的应用与技术发展综述

原创 李尊　张政 SiC碳化硅MOS管及功率模块的应用 2025-04-22 19:03 广东

> 原文地址: [https://mp.weixin.qq.com/s/EfpNavA\_LCHYE5SkdNVaiQ](https://mp.weixin.qq.com/s/EfpNavA_LCHYE5SkdNVaiQ)

文章来源：汽车工程师

作者：李尊　张政　吴毅卓　王学耀（陕西法士特齿轮有限责任公司，西安 710119）

【摘要】：针对硅基绝缘栅双极型晶体管（IGBT）难以进一步满足电动汽车高功率密度、低导通损耗、高散热能力等需求的不足，综述了车用碳化硅金属氧化物半导体场效应晶体管（SiC-MOSFET）的最新研究进展。通过总结 SiC-MOSFET 在电动汽车牵引逆变器、DC/DC 电源变换器和车载充电机（OBC）应用场景下的特点，分析了目前车用 SiC-MOSFET 在成本、可靠性及散热方面的技术挑战，并探讨了其在微型化、先进封装、多芯片集成和成本方面的发展趋势。

关键词：电动汽车　碳化硅金属氧化物半导体场效应晶体管　功率半导体芯片　导通损耗　转换效率

1.　前言

为提升电能利用效率，电动汽车行业对更高功率密度、更小尺寸的功率半导体器件的需求日趋强烈。目前，功率半导体主要包括绝缘栅双极型晶体管（Insulated Gate Bipolar Transistor，IGBT）和金属氧化物半导体场效应晶体管 （Metal-Oxide-Semiconductor Field-Effect Transistor，MOSFET）。

传统的功率半导体器件大多采用硅基材料，硅基 IGBT 可承受更大的电压、更高的功率，广泛应用于新能源汽车的高压系统中，如主驱动电机的逆变器。硅基 MOSFET 因其高频特性好、开关速度快、成本较低，主要在汽车低压电器中使用，如电动座椅调节、电池电路保护、刷水器的直流电机、发光二极管（Light Emitting Diode，LED）照明系统等。同时，硅基半导体固有的局限性（如开关损耗高、开关速度有限）导致硅基 IGBT 的开关频率限制在 20 kHz左右。

随着半导体材料的快速发展，以碳化硅-SiC和氮化镓-GaN为代表的第三代功率半导体材料具有更高的热导率、较大的相对介电常数、更快的电子饱和漂移速度、更高的熔点和更高的莫氏硬度，受到越来越多的关注。基于SiC材料制造的碳化硅金属氧化物半导体场效应晶体管（SiC-Metal OxideSemiconductor Field Effect Transistor，SiC-MOSFET）相较于硅基功率半导体器件，具有更小的开关损耗、更高的开关速度、更小的尺寸、更高的击穿电压和更高的承受温度，可用于提高转换器和逆变器的效率、功率密度，节省车辆的空间。碳化硅半导体用于逆变器、DC/DC电源变换器和车载充电机（On-Board Charger，OBC）时，较低的阻抗可以带来更小的损耗和部件尺寸。

本文总结 SiC-MOSFET 在电动汽车不同应用场景中的特点，分析车用 SiC-MOSFET 技术面临的挑战，并结合车用 SiC-MOSFET 技术的最新进展分析其未来发展趋势。

2\. SiC-MOSFET 在电动汽车上的应用优势

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEU6uWpJ8ZHg7DGrXSkfUGR6FYAfeWALPiaT8SUZovUicNy49sqKrP0qeg/640?wx_fmt=png&from=appmsg)

SiC-MOSFET 作为功率半导体在电动汽车领域的主要应用场景如图 1 所示，包括用于驱动电机的牵引逆变器、DC/DC 电源变换器，以及用于交流充电的 OBC 及非车载充电设备，如直流快速充电站或无线充电，并已在部分电动汽车上实现了应用。

2.1 SiC-MOSFET 在牵引逆变器上的应用优势

相较于硅基半导体，SiC-MOSFET 因碳化硅材料具有更高的饱和电子漂移速度和更大的带隙，为更快的开关速度和更高的开关频率提供了可能。同时，较高的开关速度能够减小开关损耗，较小的接通电阻减少了 SiC-MOSFET 的传导损耗，从而使SiC-MOSFET 获得更高的效率和功率密度。目前，SiC-MOSFET 的峰值效率达到 98% 以上，功率密度达到 70 kW/L 以上。Allca-Pekarovic 等分别采用硅基 IGBT 和 SiC-MOSFET 作为电动汽车牵引逆变器的功率半导体，发现与硅基 IGBT 逆变器相比，SiC-MOSFET 在一个驱动周期中可以减少 39.8% 的能量损失。

此外，由于具备更高的承受温度、更好的散热能力、更高的机械强度，采用 SiC-MOSFET 的牵引逆变器的使用寿命可延长 80% 以上。Su 等发现 ，在车 辆频繁起停的城市工况下 ，SiC-MOSFET逆变器较硅基逆变器具有能量损耗减少和可靠性提升的明显优势。较高的温度耐受性和更好的散热性能使 SiC-MOSFET 逆变器可以在较高的环境温度下实现高功率密度工作，这为简化逆变器及车辆冷却系统 ，甚至使用风冷逆变器提供了可能。

2.2 SiC-MOSFET 在车载 DC/DC 电源变换器中的应用优势

为确保车载 DC/DC 电源变换器的最佳性能，须提供稳定的直流电压并响应负载的迅速变化。

SiC-MOSFET 应用于车载 DC/DC 电源变换器时具有以下优势：更低的开关和传导损耗可以获得更高的效率和功率密度，更高的介电强度可以使其在更高的电压下工作，更大的工作温度范围可以提高其在不同工作温度下的稳定性。Kreutzer等开发了 一 种基于 SiC-MOSFET 的高效车载DC/DC电源变换器，其以15 kW的低功率工作时，功率转换效率达到 98%，以 100 kW 的高功率工作时效率达到99.7%，并能在 800 V 高电压下正常工作。基于 SiC-MOSFET 的车载 DC/DC 电源变换器的功率密度能够达到 43 kW/L，远大于硅基功率半导体 DC/DC 电源变换器的功率密度。基于 SiC-MOSFET 的 DC/DC电源变换器的尺寸可以进一步缩小，从而增大车内可用空间。

2.3 SiC-MOSFET 在 OBC 中的应用优势

OBC 是将动力电池与外部电源建立联系、进行电力传输的重要部件，目前，大多数纯电动汽车和插电式混合动力汽车都配备了 OBC。

随着电动汽车对快速充电需求的不断增长，大功率、高效率和小体积成为 OBC 的发展方向。使用SiC-MOSFET 作为 OBC 的功率半导体器件，可以提高功率密度、充电效率和散热能力，并减小空间占用。Li 等提出一种采用 SiC-MOSFET 的 6.6 kW 电感-电感-电容器（LLC）的 OBC，峰值效率超过 96%，功率密度为 3.42 kW/L。Gong 等设计了一种基于SiC-MOSFET 的 OBC，在输 入 240 V 交流 电 、输出400 V 直流电的工作条件下，峰值效率高达 98.9%，总谐波失真小于 2%。基于 SiC-MOSFET 的 OBC 的输出 功 率 可 达 22 kW、峰值 效 率 达 到 97%。 同时 ，相较 于 硅 基 OBC，采用 SiC-MOSFET 可使 OBC的体积减小 24%、质量减轻 28%，功率密度提高 72%以上。

3\. 车用 SiC-MOSFET 技术面临的挑战

尽管 SiC-MOSFET 性能优异，在电动汽车领域具有较高的应用价值，但与硅基 IGBT 相比，仍存在一些技术挑战。

3.1　成本问题

目前 ，SiC-MOSFET 的成本十分高昂，SiC-MOSFET 模块的价格是硅基IGBT模块的3~5 倍。SiC-MOSFET在电动汽车上使用数量的增加，将导致整车成本上升、价格竞争力下降。值得注意的是，SiC-MOSFET 应用于电动汽车功率转换部件时，可以减少除功率半导体之外的零部件成本，如散热系统成本。

为了更好地评估引入SiC-MOSFET导致的成本提高情况，建立相应的SiC-MOSFET逆变器和转换器的成本模型。以电子元件分销商DigiKey 的价格作为参考，对比硅基 IGBT和SiC-MOSFET在汽车上应用的成本，逆变器的总成本如表 1 所示，逆变器与转换器的总成本如表2所示，OBC 成本如表3所示。综合来看，以 SiC-MOSFET作为电动汽车功率半导体的成本较使用硅基IGBT的成本高。未来，随着技术的进步及 SiC 量产带来的 成本下降 ，SiC-MOSFET 很有希望取代硅基 IGBT。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEPjicxBbEJzXfqmmTZdbJibLibIWgziabn1lHsRNxzHN9t22D0wVx5ibfPRQ/640?wx_fmt=png&from=appmsg)

3.2　可靠性问题

功率半导体的可靠性通常是指在动态运行条件下出现的极端运行温度、器件老化和性能损坏等问题，与车辆安全密切相关。SiC-MOSFET 受其材料特性和制造工艺影响，需进一步研究和验证可靠性。

3.2.1　栅氧问题

SiC-MOSFET 和硅基 IGBT 都使用二氧化硅栅极氧化物，但 SiC-MOSFET 较硅基半导体具有更高的栅氧缺陷。这主要是由于 SiC-MOSFET 器件栅氧界面处的势垒高度较低，这使得沟道中的载流子更容易穿过势垒进入氧化层，影响栅氧化层的质量。另一方面，SiC 氧化过程中残留在界面处的碳元素会在 SiC/SiO2的界面处形成较高的界面态密度，进而影响 SiC-MOSFET 器件的性能和可靠性。界面处的电荷陷阱通过俘获电荷降低载流子密度，通过库伦散射降低载流子迁移率，影响SiC-MOSFET 的电流能力和跨导等特性；界面态电荷陷阱在器件开启和关断的过程中俘获和释放载流子 ，使SiC-MOSFET 的阈值电压发生漂移。栅氧化层和界面态电荷陷阱增大 SiC-MOSFET 在高电场下的隧穿电流，增大漏电流、击穿栅氧介质导致器件失效。汽车上应用的 SiC-MOSFET 由于栅极氧化问题，功率转换装置可能以振荡方式运行，导致逆变器失控，影响电机运行。

3.2.2　体二极管可靠性问题

SiC-MOSFET 体二极管的反向恢复时间短、恢复损耗小，具有很好的正向工作特性，在电路中可以用于吸收感性负载产生的电流，起到续流二极管的作用。但当电流持续通过时，SiC-MOSFET 体二极管的通态电压可能会随时间延长而变大，即出现“体二极管双极型退化”现象，这主要是由碳化硅衬底上存在的基晶面位错缺陷触发的。该退化导致开启状态下载流子传导差、关闭状态下漏电流大，使逆变器和 DC/DC 电源变换器在低负载条件下运行不稳定。

在体二极管工作时，电子与空穴的复合所释放出的能量导致堆垛层错在基晶面位错处蔓延，直至蔓延到芯片的表面，如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEpEkZbbubEy80ZKPV2lLCBNUTOzKguVQibsonfgfYTCkcN81ttiaCdbrQ/640?wx_fmt=png&from=appmsg)

图 3 所示为无层错缺陷器件和有少量层错缺陷的 SiC-MOSFET 芯片在导通模式下利用红外热像仪拍摄的对比图像，图中温度代表了电流的密度。从图 3 中可以看出，有堆垛层错的区域温度远低于正常区域温度，这是因为层错缺陷导致该区域导电能力下降，流过的电流很小，几乎没有产生热量。

3.2.3　短路问题

SiC-MOSFET管芯面积小、电流密度大且抗短路能力较弱，因此对电路保护要求更高，特别是在大功率领域，这一问题更加突出。这是由于碳化硅/氧化物界面陷阱密度比硅/氧化物高2个数量级，为了取得较高的阈值电压，碳化硅场效应晶体管的氧化层厚度往往较硅场效应晶体管的薄，这使得在高电应力的条件下，碳化硅场效应晶体管的氧化层更容易失效。同时，由于同样功率等级条件下，碳化硅场效应晶体管的芯片面积较硅场效应晶体管的小，使碳化硅场效应晶体管承受了更高密度的电流应力，因而碳化硅场效应晶体管的短路抵御能力较硅场效应晶体管弱。

与硅基 IGBT 的短路耐受时间10 μs相比，SiC模块的短路耐受时间明显缩短，约为2 μs，这表明SiC-MOSFET短路耐受性较弱 。 由于 SiC-MOSFET具有沟槽结构 ，短路临界能量小于平面栅MOSFET，使SiC-MOSFET 比硅基 MOSFET 对短路现象更敏感。 此外 ，与模具面积 96 mm²左右的硅基 MOSFET 相比，SiC-MOSFET 的模具面积只有 5.52 mm²左右，导致具有更高的短路功率密度和更快的结温升高速度 ，可能导致击穿故障。 当SiC-MOSFET 是逆变器和 DC/DC 电源变换器的主要部件时，它们较弱的短路承受能力使得传动系统在车辆上坡和高速行驶等重载条件下更容易突然丧失动力。

3.3　散热问题

相较于硅基IGBT，SiC-MOSFET的散热面积更小，相同的电流通过时电流密度更高，这会导致单位面积产生更多的热量，造成结温升高速度更快 。 因此 ，热管理成为制约 SiC-MOSFET 应用的重要因素。

SiC-MOSFET 和硅基 IGBT 的换热器的热阻由底板的导电热阻、传热面的对流热阻和扩散热阻组成。换热器的理论最小热阻（即热极限）可以通过换热面的性能极限和最佳底板厚度实现。随着散热面积的减小，换热器中的扩散热阻增大，如图 4 所示 。 SiC-MOSFET 模块的换热器由于散热面积较小，可能不满足所需的散热要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEhnme6A3iaQlgMibB7xxaO4DIWWMX5xC3wmj4QwjMJDEb3htcjDJic8wYQ/640?wx_fmt=png&from=appmsg)

4.　车用 SiC-MOSFET 发展趋势

4.1　微型化

当前 ，每片SiC晶圆的生产成本为 1500~1800美元，单个 SiC 使用晶圆的成本与其使用面积成正比 ，于是 ，制造商通过在单片晶圆上获得更多的 MOSFET 来降低 SiC-MOSFET 的生产成本。

此外 ，还可以通过微型化来提高SiC-MOSFET 的良品 率 ，进而降低成本 。 SiC-MOSFET的良品率与芯片面积的关系如 图 5 所示 ，良品率随芯片面积的增大呈显 著下降趋势 。 而为了提高器件的通流能力，大电流规格下的器件常具有较大的芯片 面 积 ，对器件良品率造成影响。 因此 ，在保持大电流器件性能不变的前提下 ，应尽可能地设计小面积芯片（即微型化），以兼顾高性能和高良品率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEe55N54zavibn6y1cevzItSHWUz6x0j8MNTmxS9icEL5ImyTn7ib3DYyiag/640?wx_fmt=png&from=appmsg)

4.2　先进封装技术

先进封装技术能够改善 SiC-MOSFET 的散 热条件，减小寄生参数，提高功率模块的鲁棒性和可靠性。 SiC-MOSFET 的先进封装技术主要 包括 ：芯片顶部连接采用铜 - 铜（Cu-Cu）键合方式 ，通过对芯片顶部进行铜质金属化（基板表面也为铜），获得最佳的表面同质结合，改善连接寿命和芯片表面的散热状况 ；芯片底部连接依据底部金属化的不同，分别采用铜锡或镍锡混合焊料进行扩散焊 ，在结合面产生 5 μm 以上的金属 化合物层；系统连接采用焊接方式，通过调节焊料中锡、银、铜的比例和工艺过程，获得最佳的结合面弹性模量。

近年来，基板的叠层构型出现了新趋势，嵌入式基板将芯片和基板都埋入某种载体中，芯片和嵌入基板均使用双面银烧结进行连接，由此实现双面散热。嵌入式基板、双面空冷散热的剖面构造如图 6 所示。其中，顶部和底部嵌入基板与散热器的结合面均使用热界面材料，可改善导热并减缓机械应力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaEqNib8lVQoVmibuOqnFvn16vjdQg0dLrS0rlxoZaC0ib0ySUZDtmicXcRyA/640?wx_fmt=png&from=appmsg)

4.3　多芯片集成

2018 年 ，三菱将肖特基势垒二极管（Schottky Barrier Diode，SBD）与SiC-MOSFET 集成到同一芯片，形成较低的碳化硅SBD 正向压降和较高的电流输出能力，可在一定电流范围内避免 SiC-MOSFET寄生双极体二极管导通和双极退化问题，其结构如图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk3fgtWA51ohrLeCXcPVRaErtBpXnibk21F43FLTBnTKK3Pib95fYhibh7pOgd2MnVqmpMwlVovMxOEg/640?wx_fmt=png&from=appmsg)

集成芯片较传统 SiC-MOSFET 芯片面积有 所增加 ，但相 比 SiC-MOSFET 外置 SBD 的方案节约了 SBD 芯片终端区和划片道区面积，可以布置更多芯片，从而具有更大的电流能力。三菱据此研制出 6.5 kV SiC-MOSFET 芯片和对应的全碳化硅模块样品 ，相较于传统的 6.5 kV 硅基 IGBT 模块 ，大幅降低了导通损耗 、关断损耗和开关损 耗 ，总损耗降低至原来的 1/10；与外置 SBD 的 SiC-MOSFET 相比 ，导通损耗和 开关损耗分别下降了18% 和 80%。

4.4　未来成本趋势

尽管 SiC-MOSFET 模块的价格是硅基 IGBT 模块价格的3~5 倍 ，但对于新能源汽车 ，采用 SiC-MOSFET 模块可以降低 6%~10% 的功率损耗，长时间尺度下节省的电池成本 将超过采用 SiC-MOSFET 器件增加的成本。同时，考虑到 800 V 高压平台在新能源汽车上的推广，SiC-MOSFET 模块的优势 被进一步放大 ，使用 SiC 可以助力电驱动系统升级，以适应电压等级从 400 V 升级到 800 V的变化。

未来，影响车载 SiC-MOSFET 模块成本的因素包括材料成本、制造工艺、产业规模等。随着生产技术的不断进步和规模化生产的推进，SiC 材料的成本有望逐渐降低。制造技术的提升和工艺流程的优化将进一步提 高生产效率 ，从而降低 SiC-MOSFET 模块的生产成本。纯电动汽车和混合动力汽车市场的不断扩大及智能汽车技术的快速发展，对 SiC 功率半导体器件的需求将不断增加，产业规模有望扩大，进而促使成本降低。

5.　结束语

车用 SiC-MOSFET 具有高效率 、高功率密 度 、可简化冷却系统等独特优势，为车内紧凑的内部空间布局和电能的转换、利用提供了更多可能。相较于硅基 IGBT，SiC-MOSFET 具有更高的工作频率和击穿电压，在高压（800 V）快速充电方面具有很高的应 用价值 。 SiC-MOSFET 的应用为这些场景 带来了更高的效率、功率密度和更小的尺寸、更轻的质量 。 与此同时 ，SiC-MOSFET 也面临成本高昂、可靠性有待提 升和散热等问题 。 未来 ，SiC-MOSFET 将进一步微型化以降低成本和提高可靠性，采用先进封装技术以改善散热和提高机械强度，通过多芯片集成进一步减小单个芯片的占用空间。同时，材料成本的下降、制造工艺的提升及产业规模的扩大，将为车用 SiC-MOSFET 的发展提供更广阔的空间。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)