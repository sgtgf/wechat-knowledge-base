# 解读新能源车载OBC的设计与应用


> 原文地址: [https://mp.weixin.qq.com/s/q-f5K6DPlnkzVwyPW5jG4w](https://mp.weixin.qq.com/s/q-f5K6DPlnkzVwyPW5jG4w)

新能源电动汽车的动力系统与传统的燃油汽车不同，“三电”取代了传统的油箱、发动机和变速箱等。“三电”主要包括驱动系统“大三电”（动力电池、电机控制器和电机），以及电源系统“小三电”（车载充电机 OBC、DC/DC 变换器和高压配电盒 PDU）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLDJbr9BfVtkjIoDLBZI9OEmSMJtYorxQGicYHUcxgUDZiaJnDzDIgicFOA/640?wx_fmt=png)

  

新能源汽车车载充电机（OBC）将交流充电桩的交流电转换为动力电池所需的直流电，实现对动力电池的充电，使用交流充桩充电的新能源汽车需要搭载车载充电机。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLzGtyrsVyqFSmNQafuXefLKlQe9ic4Gtb1zUicRHSNcSFOf0ibeAYdvEPw/640?wx_fmt=jpeg)

**车载OBC的定义**  

车载充电机（On-board charger）简称 OBC，也称为车载充电器，顾名思义就是固定在电动汽车上的充电器，具有对电动汽车动力电池安全、自动充电的能力。车载充电器 (OBC) 用于为纯电动汽车 (BEV) 和插电式混合动力汽车 (PHEV) 的高压电池组充电。它直接集成在车辆的设计中，可将电网中的交流电转换为适合车辆电池组的直流电。这项技术让电动汽车车主可在家中或公共充电站方便地为车辆充电。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLgMrcYMypTQxBgYj8YanSG04HtvBOMNVQgWy9oqYQ1HpaiaiaQcV2FE1A/640?wx_fmt=jpeg)

**车载OBC结构和电路**

车载充电机可分为单向车载充电机、双向车载充电机和集成式车载充电机。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLdmtJnTVScwUXBYcsI8JxicrYeszBfvvIhSJYDMImWFWfvKH8C1l7NmQ/640?wx_fmt=jpeg)

单向车载充电机（Uni-Direction On-Board Charger）：功率单向流动，一般采用高频开关电源技术，拓扑结构分为单级式结构和两级式结构；只有充电功能。  

双向车载充电机（Bi-Direction On-Board Charger）：功率双向流动，多采用两级变换结构，由双向 AC-DC 变换器和双向 DC-DC 变换器构成；既有充电功能，同时还有逆变功能。

①充电功能：从电网取电，经由地面交流充电桩、交流充电口，连接至车载充电机，给车载动力电池进行充电。

②逆变功能：

V2L（Vehicle to Load）逆变功能：从车载动力电池取电，经由双向车载充电机、交流充电口、专用的V2L交流电插座板，给地面电气设备提供220VAC交流电；

V2G（Vehicle-to-grid）逆变功能：从车载动力电池取电，经由双向车载充电机、交流充电口、地面交流充电桩，连接至电网。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLVnbibkicC5ntjEgmcgerpuIiaVvgIaDiarQaD7JUfVogrTkzWibAUia1GYxA/640?wx_fmt=jpeg)

集成式车载充电机：

①OBC、DC-DC、PDU等车载电源的集成：OBC+DC-DC二合一集成、OBC+DC-DC+PDU三合一集成；

②电机、电控、减速器、OBC、DC-DC、BMS等电驱+车载电源的集成：多合一集成。![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2XFMFGlUZEZPFGYB5hCDchy9KMwicKPocAvw83IqEpzc4TjZQibRCtdGaZWcWjKPU3JnycdiaNpO1A/640?wx_fmt=png&from=appmsg)

**车载OBC指标**  

车载OBC的技术指标主要包括输入电压、工作效率、功率因素、谐波、输出纹波、输出电压和输出电流等。QC/T 895-2011标准中对输入电压、电流及输出电压推荐值等有提出明确的要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLfFuYiaMFOBibryWlJQElRpU019t3kw8Wn36ibJQXx1sDbBuhmnyv7slDg/640?wx_fmt=jpeg)

功率等级：国内和海外的新能源汽车充电功率不同、常见的OBC充电功率为3.3 kW、6.6 kW、11 kW和22kW。11kW的OBC，意味着充满66kWh的动力电池需要6h。

  

转换效率：效率是很重要的目标，与整个单元的散热方式息息相关。容积&重量&功率密度：汽车对于部件的体积和重量都有着严格的要求，设计要求比较高。

  

目前趋势是OBC+DC/DC二合一集成，或者OBC+DC/DC+PDU做三合一集成，功率密度大幅提升，体积变小。散热方式：有主动风冷和液冷两种方式。功率升高到11KW之后，液冷成主流。

  

成本**：**部件的成本要求比较高，目前小三电比较卷，小三电供应商普遍毛利率在15%～20%。

车载OBC发展趋势  

目前市场主流车型搭载的车载OBC输出功率由3.3kW向6.6kW升级，车载OBC未来向着功率等级提升尺寸小型化、双向转换和集成化的方向发展。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLzdPhFV2rNib3l9jBREjQ2A8ZNv61t9GicmMxhSUX1rYU6qgeRBlsEASw/640?wx_fmt=jpeg)

输出功率6.6kW的车载充电机已成国内主流趋势，正逐步升至11kW和22kW。同时各企业研发出二合一、三合一甚至八合一集成方案，目前较优的二合一方案为6.6kW OBC +1.5kW DC/DC，三合一为6.6kW OBC+2kW DC/DC+PDU。

  

**插电式混合动力汽车 (PHEV)**

1.  OBC 的成本较低是因为功率等级和电池容量较低。

2.  单相交流电：额定功率为 3.3kW、6.6kW 或 7.2kW。

3.  许多国家/地区对每相的最大功率限制为 3.7kW 至 4.2kW。

4.  在功率等级较低 (1.4kW – 1.8kW) 的情况下，几乎可以在任何地方进行插电式充电。

5.  提高功率等级可加快充电速度。根据具体应用场景相应减少排放。

  

**纯电动汽车 (BEV)**

1.  OBC 成本较高是因为功率等级较高且更为复杂。

2.  单相交流电：额定功率为 6.6kW 或 7.2kW。

3.  3 相交流电：11kW 至 22kW，适用于更高端的 BEV。拥有更高的功率等级，可缩短充电时间。

4.  在某些国家/地区，可能需要升级公用设施以实现更高的功率等级。

5.  许多国家/地区对每相的最大功率限制为 3.7kW 至 4.2kW。

6.  在功率等级较低 (1.4kW – 1.8kW) 的情况下，几乎可以在任何地方进行插电式充电，但不常用。

7.  直流快速充电旁路选项。

8.  无排放。

9.  目前OBC的设计趋势是向更高的功率等级和电压方向演进。如今的 OBC 设计支持各种电压和功率等级，但随着新能源动力总成的发展，这些设计也在不断演变。  在支持 11kW 至 22kW 功率的同时，还需支持高达 800V 的更高电池电压。

  

**车载OBC的功率器件选择**

车载充电机 OBC 是决定电动汽车充电功率和效率的关键部件之一，硅基高压MOSFET和 IGBT、SiC SBD和SiC MOSFET 等功率半导体就是实现 OBC 直流电与交流电变换的关键器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLxpeCYbJH5lFcbictPzxcMhAcGOAkKqZ3CqdKXg6JSd7yb48qH1dSciaw/640?wx_fmt=jpeg)

**碳化硅 MOSFET、硅超级结 MOSFET 与 IGBT 的比较**

![](https://mmbiz.qpic.cn/mmbiz_gif/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLByic2o5eOqkDX3uLmYuSUxfysmCWlnGms2mC37vP75DQT62OZNqOtgg/640?wx_fmt=png)

碳化硅 MOSFET 可用于 PFC、原边 DCDC 和副边整流（双向），是800VDC 电池系统中所推荐的产品。该技术可实现相较于 IGBT 或硅超级结 MOSFET 的最高效率和功率密度。  在众多采用碳化硅 MOSFET 的设计中，可能会有混合解决方案，即 OBC 的某些功率级也可能使用 IGBT 或硅超级结 MOSFET。 

1.  在 400VDC 电池系统中，如果采用传统的升压型或交错升压型拓扑结构，碳化硅 MOSFET 的效率可提高 0.2% - 0.5%；如果用于原边 DCDC 或副边整流（双向），则可提高功率密度和效率。  当碳化硅 MOSFET 用于效率对降低热负荷至关重要的更高功率等级时，可能会带来更大的效益。  

2.  建议对 800VDC 电池系统使用 1200V 碳化硅 MOSFET ，对 400VDC 电池系统使用 650V 碳化硅 MOSFET。  当使用图腾柱 PFC 时，碳化硅 MOSFET 技术是一种适用于任何电池电压的推荐解决方案。

硅超级结 MOSFET可用于 PFC、原边 DCDC 和副边整流（双向）。 在传统的升压、无桥升压和 Vienna 整流器设计中，硅超级结 MOSFET 可很好地实现 PFC，但在图腾柱 PFC 中使用时则效果不佳。硬开关图腾柱 PFC 的劣势体现在体二极管的反向恢复损耗以及无法在连续导通模式下工作。  与 IGBT 相比，硅超级结 MOSFET 具有更高的开关速度和效率。  对于标称电压为 400VDC 的 OBC 电池，650V 硅超级结 MOSFET 非常适合双向设计中的原边整流和副边整流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLadz2iaLQdqbtNR92d9Eqt1LqBHWfm4OWsdrxgvjl2icAN0KVBdNXvCqQ/640?wx_fmt=png)

**IGBT 可用于 PFC 和原边 DCDC。**

IGBT 没有内置体二极管，需要在内部封装一个二极管或并联一个外部二极管。混合型 IGBT 的封装中包含一个碳化硅二极管。  

1.  对于 PFC，IGBT 可用于大多数拓扑结构，且即使“高速”管采用了其他技术，也可用于图腾柱 PFC 的“低速”管。当考虑到原边 DCDC 转换的成本时，IGBT 可用于功率等级较低的设计方案。

2.  与硅超级结 MOSFET 或碳化硅 MOSFET 相较之下，较慢的开关速度和较低的效率将必须在设计的可接受范围之内。IGBT 也可用于低功率等级双向设计中的副边整流，但由于开关损耗较高（与硅超级结或碳化硅 MOSFET 相比），因此并不常用。

**硅二极管与碳化硅二极管的比较**  

硅二极管可用于 400V 电池系统中的 OBC PFC 级和副边整流（单向设计）。碳化硅二极管具有功率密度大、额定电压高、无反向恢复损耗等优点，因此可作为 800V 电池系统的理想选择。碳化硅二极管还可在更低的电压下运行，以提高效率。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm2XFMFGlUZEZPFGYB5hCDcVOy32cI7XU7a7RQsq2Vydg6GCTJp2rTic59xovYticXFqpgnvoBnUpvw/640?wx_fmt=jpeg&from=appmsg)

**车载OBC的拓扑电路**

车载OBC拓扑结构一般采用两级架构，前级PFC主要负责功率因数校正，一般输出400V直流电。后级DC/DC电路从PFC母线取电，实现隔离和调压功能。由于DC/DC所接负载为电池，一般输出200-500V的高压直流电，故后级必须采用高效率宽范围的隔离DC/DC拓扑结构。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLsSYReapo1sL5da8FvKlNBR7UfWMkJfpQF0uM8rapZVTzEic3Kic2GVYg/640?wx_fmt=jpeg)

OBC硬件部分由功率部分和控制部分组成。功率部分主要是前级AC-DC电路、后级DC-DC电路。控制部分由控制器检测电路与参数反馈电路构成，将期望值通过PWM进行调节，从而控制高压回路中开关管的开关时间，实现目标输出电流和电压，以及故障监测等功能。每级电路不管如何设计，最终都以追求高频化、高功率因数与高效化为设计目标。前级AC-DC电路多数采用基本型Boost APFC变换器或改进型Boost APFC变换器，包括基本型Boost APFC变换器、无桥Boost APFC变换器、交错并联Boost APFC变换器、无桥交错Boost APFC变换器。

**功率因数校正 (PFC) 拓扑**  

1.  典型的 OBC 功率因数校正 (PFC) 解决方案因电网输入交流相数和 OBC 设备的输出功率等级 \[kW\] 而异。

2.  对于单相交流输入 OBC 模块，可采用传统升压、无桥升压或图腾柱（均可选配多通道交错式解决方案）。最可行的交错式解决方案是双通道。3 通道交错也较为可行，但成本效益可能较低。  如果设计是双向的，则 PFC 级将采用图腾柱拓扑结构。

3.  对于 3 相 OBC 模块，可采用 Vienna 整流器和 3 或 4 桥臂桥式 PFC（图腾柱）拓扑结构。3 相全桥 PFC 适用于有 3 相输入但无中性点的模块，而 4 桥臂 PFC 则有 3 相输入（3 组快管）和一个中性点（第 4 组“慢”管）。快管和慢管可在不同的频率下相互切换。如果设计是双向的，则最具成本效益的 PFC 级将是图腾柱拓扑结构。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBdZMFRmKosnKpdNRnNfiaqmFsEb8VfNJLMwMprneasJ0e1vAs4ibFPtNA/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBv4PKu7lOstRVXFjfc1WNvXiaibXibaw25OIYOUNEcL3h9HYUIicUOcPRIQ/640?wx_fmt=png)

传统升压 PFC

  

功率因数校正 (PFC) 拓扑（续）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBcFcehBD1d7t5SoQrVFLs75UuVkxYFxibfShEWLKnO1yRzmOUHMT7IiaA/640?wx_fmt=png)

传统升压 2 通道交错式 PFC

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBlgYGqnn2QIHq0k0NPZavcY0LGQQNNoL5cBK94BxdA0ZMX5jXRKadYA/640?wx_fmt=png)

无桥升压 PFC

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybB4QGticG1VkUUFgMOIHjoYEbicMsh1WhRoDJ3iadbu09FSiaWk4LF1lu5Lw/640?wx_fmt=png)

图腾柱 PFC

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBlj1Pj5hKy3ZDy9jGTVIaT2dqKWrlRVr1XqYHb6pq9sfQv10x21uwzw/640?wx_fmt=png)

图腾柱 2 通道交错式 PFC

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBnFYRl9uHhlibThH2ibW8BuvrmdMibqwhEiaDrHDOaRBvbsHeJKZZOSymJQ/640?wx_fmt=png)

3 或 4 桥臂/图腾柱 PFC

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybB4icVia0oDwM8eU85QhHQqQKNbHDW8iarg6QCQPYpLbFbelsly3iaIuVJKg/640?wx_fmt=png)

Vienna 整流器 PFC（或其他拓扑）

  

**原边 DCDC 拓扑**

1.  原边 DCDC 转换通常采用 LLC、CLLC 或移相全桥 (PSFB) 拓扑实现。  另一个可能会出现的拓扑是双有源电桥 (DAB)，但它实际上包括原边和副边整流，用于双向设计。  对单向系统来说最常见的解决方案是 LLC，而双向系统则是 CLLC。  某些双向设计可能使用 PSFB 或其他拓扑。碳化硅 MOSFET 和硅超级结 MOSFET 可用于原边整流的所有不同场景，但 IGBT 仅推荐用于 PSFB 拓扑。制定每种解决方案时都需要在成本与效益之间进行权衡，下表总结了其中一些考量因素。

2.  对于 400VDC 系统，设计方案中可采用任何 650V 技术（硅超级结 MOSFET、碳化硅 MOSFET、IGBT）。OBC 的成本和效率目标是影响决策的主要因素。

3.  对于 800VDC 系统，1200V 碳化硅 MOSFET 最为常见，但如果 VBUS 是多电平结构（400VDC + 400VDC），也可使用硅超级结 MOSFET。 

4.  无论采用哪种方法（LLC、CLLC、PSFB、DAB），原边整流几乎都采用某种形式的全桥开关。因此，虽然元件和变压器可能有所不同，但 4 开关是原边 DCDC 转换中最常见的方法。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBPT61UvBoPJ8yM8lZDwf6s1Ml1ibia8w4PibiaVdCciaaaSD7NCEfz4daFhw/640?wx_fmt=jpeg)

  

原边整流拓扑

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBpFH0eTPN3CGlXyp84xUmtABBRduQxe7Fq7yOnNickYpZF7zqoOstctw/640?wx_fmt=png)

原边整流 - 全桥 LLC

注意：还有其他控制拓扑结构，但原边上普遍要求全桥。

  

**副边整流拓扑**

在变压器的副边，最简单的解决方案是使用二极管桥进行整流。  只要设计是单向的（仅从电网到车辆）就可行。根据所需的系统效率、输出电压和系统成本，这些二极管可以是硅二极管或碳化硅二极管。  碳化硅二极管是 800V 电池或需要实现更高效率的系统的最佳选择（碳化硅二极管具有无反向恢复的特性）。 在单向设计中，使用硅或碳化硅 MOSFET 的全桥解决方案可提高系统效率，但运行成本较高。

  

对于双向 OBC 设计：双向功能需要采用硅或碳化硅 MOSFET 全桥。IGBT 开关损耗通常会阻碍这种技术在副边（更高功率等级）的应用。  硅 MOSFET 可用于 400V 电池系统，但在低负载时会出现效率下降的问题。  碳化硅 MOSFET 在 400VDC（650V 碳化硅 MOSFET）和 800VDC（1200V 碳化硅 MOSFET）电池系统中均能提供优越的效率，因此 1200V 碳化硅 MOSFET 毫无疑问是 800VDC 电池系统的首选。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBJVdlxPDBwibXuIbicmgNVE3xKrktSMubibRH7m746rNNzvhXZHGWbuSHg/640?wx_fmt=jpeg)

  

副边整流拓扑结构（续）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBNhsOnXvHaEicH1icOWzCH8uKz592SDEAo4O53MVFDAjInF6tCbEBibF8A/640?wx_fmt=png)

副边整流二极管桥 - 仅单向（电网至车辆）

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HAdNd8ibDwCEIiafFx5GCIfu7oPy6PIybBwfBOiatibiaeF3lAjeWS5t0rgcA57PwnCdibGnjKYWwjhT3EOEialDDoGuA/640?wx_fmt=png)

副边整流 4 开关全桥 - 双向（电网至车辆和车辆至电网）

  

**SiC MOS器件的OBC及配套产品中应用**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLXf0SxXqaoVv1aYib1Nnzup4SqxccNtBPtibzM5umYRQNKLQoEo97lWKg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLN8OexHWLIQrCLTuhF1ibDybuiaaKuUO9TSJicfQsp5iafHtKqQ0LPvwk5A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLkJuNu0kAb63DtFFGAlIWkIJ2tOkPPJ0c7iajzLOzYdSpLAPvRfmB88w/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLJe5T7YcNojFiabb5O1h1dJWg1WRbYnwROtw5oFo0X1qJ9A6H2bUL09w/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLFmdD4zBOIOmKo5CrUKamJGgO6129JWF9PzAcyD8kmUVS2C2Js8SlEA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnwrkYyzOTGIgXIa19MyDuLnzUibrh8pia8gqAuzZyCXnmegyMqBR9ndpADbduOy1jNwAhIRqNsnZKQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=jpeg)  

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)