# 基于 SiC 的电动汽车直流快速充电机设计指导


> 原文地址: [https://mp.weixin.qq.com/s/4YP\_-KswtZQ365V6Rk60Fg](https://mp.weixin.qq.com/s/4YP_-KswtZQ365V6Rk60Fg)

**设计基于 SiC 的电动汽车直流快速充电机**

  

电动汽车（EV）直流快速充电机绕过安装在电动汽车上的车载充电机，直接为电池提供快速直流充电。如下图所示，直流快速充电机由一级 AC-DC 和一级 DC-DC 组成：

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfmhbfg1dHbBZzXqzrRxbZWxsja5SMUOvS3uPb0NbBbeAFb1DS5bQHpg/640?wx_fmt=png)

**图 1. 直流快速充电机由一级 AC-DC 和一级 DC-DC 组成**  

  

在优化系统效率的同时最大限度缩短充电时间是直流快速充电机的主要关注点。在设计此类系统时，必须考虑器件选型、电压范围和负载要求、运行成本、温度、坚固性和环境保护，以及可靠性。

  

相比传统硅（Si）和 IGBT 器件，基于碳化硅（SiC）的器件由于具有工作温度更高、导通损耗更小、漏电流更低、浪涌耐受能力更强、最大额定电压，以及整体功率密度更高的特点，可实现更好的性能。但是，要充分利用这些优势，则必须对功率变换器拓扑进行优化。

  

本文旨在探讨数种考虑用于快速充电机系统的功率变换器拓扑和一些可利用的工具/资源，以及包含多项关键比较的汇总表格。

  

无论是在家庭或公共区域、高速公路通道还是为车队充电，对交流电网的功率需求可从 2.2 kW 一路升到 1 MW。此类电网系统通常设计为 20 - 50 kW 的 AC-DC 和 DC-DC 电源块，可根据充电位置和车辆类型进行扩展，以满足更高或更低的不同需求。功率级别和系统的一般叠层方式如下图所示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfFtdsw537EzQABkiafux4sTldzepyM76ZtRCGUXyb2rial7pw41JiasQ5w/640?wx_fmt=png)

**图 2. 功率级别和系统的一般叠层方式**

  

接下来，在设计时需要分析直流快速充电应用的实用性。首先，此类充电机安装在需要宽电池电压范围和宽负载曲线的公共区域。例如，目前道路上的大多数电动汽车的电池电压均在 350 V - 450 V 范围内，而新车型则采用 800 V 电池。此外，每一款电动汽车电池都有不同的充电曲线，这意味着电动汽车充电机在设计时要满足宽负载曲线和高满载能力的需求。分析客户行为也很重要，因为与家用充电机不同，车辆几乎始终会行驶到充电位置，因此此时的需求转变为预热电池和快速上升到峰值充电功率。您可以在左上图中看到这一点，以及一些电池制造商所建议的电池容量达到 80% 时充电速率下降。

  

对于商业运营商而言，运营成本对投资至关重要。举例来说，对于一个 360 kW 充电站，假设充电站每天运营 12 小时，充电单价为 25 美分/千瓦小时，如果充电效率提高 2%，每个充电站每天可节省约 22 美元。电动车市场的动态特性也推动充电系统对新车型的高度灵活性和更小的安装占地面积的需求。

  

下面我们总结了快速充电机系统的系统目标：

-   宽电池电压范围（350 V - 800 V）
    
-   宽负载曲线（单辆车/多辆车）和电池缓冲器（用于高性能车辆）
    
-   针对满负载充电进行优化
    
-   实现双向性，满足回馈电网应用的需求
    
-   灵活，可适应新行业趋势/标准
    
-   安装占地面积小
    
-   降低运营成本，实现盈利
    
-   坚固耐用，工作温度范围广
    

  

记住上述要求和设计目标，一起来了解一些功率拓扑。

  

        **#1**        

**AC-DC 转换**

**拓扑 1 **\-**（AC-DC）：三相两电平双向有源前端 AC/DC 变换器**

第一个 AC/DC 方案采用简单的六开关、两电平有源前端（AFE）配置，包含六个功率可达 25 kW 的 Wolfspeed 1200V SiC MOSFET（如图 3 所示）。总体而言，与 IGBT 器件对比，可观察到 SiC 组件实现了多项改进（另请参阅图 3）。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfVdCnjW5m9Yake5QtdBNoqwMiaamJMFW16JIEogGeNMpELfpPucpSwPQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfgjibzzStExhkHD3sACyYSu3ZgpEAyNkDibDpGPx0K4FQk0XrenC0QR3A/640?wx_fmt=jpeg)

**图 3. 三相两电平双向 AFE（上）和 IGBT 对比 SiC（下）**

  

表 1 描述与此配置相关的优势与挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfhVHYO1jkkV8RAG2cRaCibncET8m81ujSMicqcrQZ3zdeRaPSY2FxGLRw/640?wx_fmt=jpeg)

**表 1. 三相两电平 AFE 的优势与挑战**

  

采用六个 SiC MOSFET，例如 Wolfspeed 的 32 mΩ C3M0032120K，可达到高效率（并在提高功率密度的同时降低成本）。另一项非独立方案是使用可提供 25 kW 的单个 CCB021M12FM3 WolfPACK 模块。并联使用附加模块将使额定功率翻倍至 50 kW。

  

**设计资源**

参考设计 CRD22AD12N 展示使用单相或三相（电网供电）输入的系统，在 22 kW 时具有 650 - 800 VDC 的非隔离输出，运行峰值效率超过 98.5%。

  

带 AC/DC 配置的参考设计 CRD25AD12N-FMC 包含以三相输入和 800 VDC 输出运行的有源整流器。该排列结构利用 CCB021M12FM3 WolfPACK™ 模块，可提供高达 25 kW 的功率，峰值效率超过 97%，同时还通过交错多个功率达 25 kW 的 AFE，提供可提升功率水平的可扩展能力。

  

**拓扑 2 -（AC-DC）：T-Type双向 AC/DC 变换器**

与六开关方法相比，利用 1,200 V SiC MOSFET 的 T 型三电平 AC/DC 转换器可实现更低的开关损耗，虽然在快速充电应用中满负载运行时导通损耗占主导地位。

  

图 4 显示一个双向配置，在外部部分使用六个 1,200 V 32 mΩ SiC MOSFET，在中间部分使用另外六个 650 V 45 mΩ SiC MOSFET（导通电阻 RDS(on) 随温度升高变化小以及良好的满载性能）。在中间位置使用 SiC 也有利于快速充电应用，因为碳化硅的 RDS(on) 与 Tj 曲线平稳，可在各工作温度下满载运行时实现更高的系统效率。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPf2476OHXquehrp66OVhOjGzLhGHic3bsibY696clcLbYibdNQSRScFsvEQ/640?wx_fmt=png)

**图 4. T -Type  AC/DC 转换器**

  

表 2 列出与此实施相关的其他优势和挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfR6rGlicjKBnU4pj2ibBUaf4Tkc449lr9NFvd8n0mdN3Ue5SXvURPVESQ/640?wx_fmt=jpeg)

**表 2. T -Type AC/DC 转换器的优势与挑战**

  

**拓扑 3 **\-**（AC-DC）：NPC/ANPC 双向 AC/DC 变换器**

最后，中性点–钳位（NPC）或有源钳位 NPC 拓扑非常轻松地完成了从传统 Si 到 SiC 的过渡。在此设计中，低压 MOSFET 可以与肖特基二极管结合使用，从而降低 MOSFET 上的应力和开关损耗（与上述拓扑中描述的两电平方法相比）。

  

图 5 展示 NPC 配置示例，其中包含 12 个 650 V、25 mΩ SiC MOSFET 和6个 650 V、16 A SiC 肖特基势垒二极管。在使用这种拓扑结构时，需要权衡器件数量、成本和复杂性较高的因素。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfCl31CxLZGHoNB98UJtzMPqVlnQbBuLosZNSQIXbynCP2AHZ2zAPufw/640?wx_fmt=png)

**图 5. NPC AC/DC 转换器拓扑**

  

表 3 列出与此实施相关的其他优势和挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfBkMZCvVfKnib8L6ia2w4vfUtlpbSMyEZVcCicyMoj83v6IzibHxw10p1jw/640?wx_fmt=jpeg)

**表 3. NPC/ANPC AC/DC 转换器的优势与挑战**

**AC-DC 拓扑的器件选择**

对于 AC/DC 变换器应用，在确定设计中使用的关键器件时必须做出一些抉择。为减少串扰并最大限度提高效率，设计人员应选择最高的 Cgs/Cgd 比率，同时使用负栅极驱动电压进行关断。满载和高功率或连续功率运行的设计应该配置有利于降低导通损耗的器件。在针对硬开关、高电流和高频操作进行设计时，应选择具有低电感和开尔文引脚连接的器件封装，例如 Wolfspeed K 和 J 封装。此外，选择最低的 Qrr 可缩短反向恢复时间，降低损耗。

  

表 4 显示上述 AC/DC 拓扑的器件数量对比。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPf75OVlxD76dlibrucvHdIQZlsicwy11343X6GTsXV6m70svE8Rib3Y1FdQ/640?wx_fmt=jpeg)

**表 4. AC/DC 快速充电机拓扑总结**

  

        **#2**        

**DC-DC 转换**

**拓扑 1 **\-**（DC-DC）：20 - 30 kW 两电平 LLC 双向 DC/DC 变换器**

图 6 显示具有双向流动设计和总共 12 个 SiC MOSFET 的两电平 LLC 电路示例，该电路可实现简单、灵活的控制，具有高效率和磁性元件小的特点。在这种用于直流快速充电的配置中，继电器可以针对 400 V 和 800 V 操作进行切换，满足低或高充电电流的需求。一个不足之处在于：LLC 设计通常具有一个狭窄的最佳应用点，需要谨慎设计谐振回路。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfwdiaE8BxSqTgfZImutASfSLbPdwWUGOXztAJXFZBVC5N3LE8LPHbo5A/640?wx_fmt=png)

**图 6. 20 - 30 kW 两电平 LLC 双向 DC/DC 转换器**

  

表 5 列出与此实施相关的其他优势和挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPflnF3zI7KUcibdOvOHoYr7ApgIOtTMrrSQ1Im4smIoG9icLTQxpEhSASw/640?wx_fmt=jpeg)

**表 5. 两电平 LLC DC/DC 转换器的优势与挑战**

  

**拓扑 2 **\-**（DC-DC）：20 - 30 kW 两电平 LLC 级联双向 DC/DC 变换器**

图 7 显示具有双向流动设计和总共 12 个 MOSFET 的两电平 LLC 级联电路示例，该电路支持从传统 Si 组件轻松过渡到 SiC（电压为 650 V）。尽管使用 SiC 器件可提升效率，但该结构也存在一些挑战（请参阅表 6）。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfYnFThEMZrOhWo1jfdaIJhyrGe2fcf9KzUicTR6B0xw0Vr38UktvMsRA/640?wx_fmt=png)

**图 7. 20 - 30 kW 两电平 LLC 级联双向 DC/DC 转换器**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfsCLpbOYuO2N6TJBibvfQF9Qib3cIEgtnXqJjWrAoic8axE89Jhpsqy3MQ/640?wx_fmt=jpeg)

**表 6. 两电平 LLC 级联 DC/DC 转换器的优势与挑战**

  

CRD-22DD12N 是 Wolfspeed 的 22 kW 参考设计，这为利用 1200 V SiC MOSFET 的两电平 LLC DC/DC 变换器设计确立了良好开端。该设计在电池电压高达 800 V 时可实现 22 kW 的功率，并支持灵活的双向功率传输，同时还能通过灵活的全桥和半桥方案来调整增益和效率。

  

通常，在设计 LLC 变换器时，要考虑的一点是选择合适的 SiC MOSFET。以下指南说明了如何为 LLC 拓扑结构选择恰当 MOSFET。

-   MOSFET 输出电容（以及充电所需时间）对使用零电压开关的变换器性能有着极大的影响力，具体如 LLC 电路所示。最理想的情况是，在 VDS 较低时，选择 Coss 值最低的 SiC MOSFET。
    
-   LLC 变换器的关断开关损耗与磁化电流成正比，而选择较小 Coss 的 MOSFET 可以使得 LLC 设计的磁化电流通常较小，因此关断时的开关损耗控制得很好。
    
-   由于 LLC 中的关断是硬开关，因此最好选择带有开尔文引脚的封装，如 TO-247-4 或 TO-263-7 封装，与 3 引线封装相比，可降低高达 4 倍的开关损耗。此外，对于高频应用来说，反向恢复的损耗可能很大，因此最好选择反向恢复时间最短的元件。
    

  

**拓扑 3 **\-**（DC-DC）：20 - 30 kW 双有源桥（DAB）双向 DC/DC变换器**

图 8 显示 20 - 30 kW 双有源桥（移相）DC/DC 变换器示例，该示例提供了具有梯形电流曲线的快速充电解决方案（与 LLC 电路中的正弦曲线相比）。该拓扑的优势与挑战请参阅表 7。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfxLb9BTciak0QV6bqZ4t70FV6VdZkDvMFHJlq7x8zX75YVEy70xskJ2A/640?wx_fmt=png)

**图 8. 20 - 30 kW DAB 双向 DC/DC 转换器**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfeXiccgTejUOTnmmSic5uavMd2RezSJku6mpnBZJ452IoAyLyyw6IP61Q/640?wx_fmt=jpeg)

**表 7. DAB DC/DC 转换器的优势与挑战**

  

**拓扑 4 **\-**（DC-DC）：30 - 60 kW 三相 LLC 单向 DC/DC 转换器**

在设计 30 - 60 kW 范围内的 DC/DC 变换器时，还需要考量存在的一些额外挑战，例如 DC-link和输出电容器上的高纹波电流、高输出滤波器体积（对于 LLC 电路），以及初级侧 MOSFET 上的高电流水平。为了演示在 30 kW 时这些问题的解决方案，Wolfspeed 创建了一个使用三相交错 LLC 拓扑的参考设计 CRD-30DD12N-K。60 kW 系统也可以使用分立式器件进行设计，但需要考虑额外的考虑因素，例如有关器件均流和寄生参数的对称设计。

  

使用功率模块进行设计有助于简化其中一些挑战，方法是实现电感匹配、散热设计已简化且在各种功率级别下可扩展的解决方案，并支持将现有的全桥拓扑扩展到更高的功率级别。

  

图 9 显示 CRD-30DD12N-K 中使用的三相交错 LLC DC/DC 变换器拓扑，而表 8 描述了相关优势和挑战。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPf17FAG731Z5ChBuUM4Jaf5gN9RweUWDhP2ic9srxHbp4vZzROm4Vb4yg/640?wx_fmt=png)

**图 9. 30 - 60 kW 三相 LLC 单向 DC/DC 变换器**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfoqiajyObtfm2ZA9vzHr2kLwNwlzFCdWwPwwcUEB68p4O9wB9vjZ22UQ/640?wx_fmt=jpeg)

**表 8. 三相 LLC DC/DC 转换器的优势与挑战**

  

图 10 和表 9 展示了备选的 50 - 60 kW 两电平 LLC 谐振变换器配置，该配置在初级上使用半桥 Wolfspeed WolfPACK 功率模块，在次级上使用 30 A 肖特基二极管。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfyHNMtNicWIWdyJibszd7RVpNpibf2nkFHyv7r0tX6qNtZqVAyn20WvezA/640?wx_fmt=png)

**图 10. 50 - 60kW 两电平 LLC 谐振转换器**  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfzQcPXmnMeAcwFjAGDG56oCdZtTyvsiaf5KfjiayCoVQ7f7zTE9MDn0sQ/640?wx_fmt=jpeg)

**表 9. 两电平LLC 谐振转换器的优势与挑战**

  

表 10 和表 11 显示了上述 DC/DC 拓扑的组件数量对比。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfMBUjy5ArhBO5KCkD5s0nssY2ib63thib0tBNkOlh2TIicibhzwZicV1ibssw/640?wx_fmt=jpeg)

**表 10. DC/DC 20 - 30 kW 快速充电机拓扑总结**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZld8yztzXIWZicD9icY57EGPfJUptcAnZKibbH7mmLWic2JwbgnMQQeVOrhJHvMiaGlcMFAia8KUkwO32LQ/640?wx_fmt=jpeg)

**表 11. DC/DC 50 kW+ 快速充电机拓扑总结**

  

        **#3**        

**总结**

总而言之，存在多种用于快速充电设计的变换器拓扑，可实现模块化、双向性、满载运行效率和高功率密度。SiC 技术是此类快速充电器设计和变换器拓扑的核心，可实现最佳性能，同时确保系统持久耐用，稳定可靠。本文中描述的大多数拓扑都可使用 Wolfspeed SpeedFit 2.0 设计模拟器™ 轻松模拟。

  

Wolfspeed SpeedFit 2.0 设计模拟器，敬请访问：

**https://www.wolfspeed.com/tools-and-support/power/speedfit**

  

英文原稿，敬请访问：

**https://www.wolfspeed.com/knowledge-center/article/designing-with-silicon-carbide-sic-in-electric-vehicle-dc-fast-chargers/**

更多技术文章阅读，敬请点击浏览：

-   [新型 SBD 和 MOSFET 封装大幅缩减尺寸，提高功率密度](http://mp.weixin.qq.com/s?__biz=MzA4MDMwOTkyOA==&mid=2659602293&idx=1&sn=a1ce79510debf6827ef77657c4b8669f&chksm=84d4d4b2b3a35da49a0c96e26b3002242368f5b9402d1b39bed5a5d6c62dab130c4505483767&scene=21#wechat_redirect)
    
-   [SiC 模块开启电机驱动器更高功率密度](http://mp.weixin.qq.com/s?__biz=MzA4MDMwOTkyOA==&mid=2659602268&idx=1&sn=cae44ea66ce180b533c3fd85fa4b8736&chksm=84d4d49bb3a35d8daeebe6d0a22ae6ee4c336ec6f751fdda809f9a7e1233d507326aaefff1c3&scene=21#wechat_redirect)
    
-   [SiC 赋能更为智能的半导体制造/工艺电源](http://mp.weixin.qq.com/s?__biz=MzA4MDMwOTkyOA==&mid=2659602267&idx=1&sn=e26cf976c5df50aceddce8ac16b5e36e&chksm=84d4d49cb3a35d8a91ba7ec5accd0dda7a78bde5b234772d7da16aaed19cff2a8f8e9e44fccf&scene=21#wechat_redirect)
    
-   [SiC MOSFET在6.6kW高频率高功率密度功率转换器中的应用](http://mp.weixin.qq.com/s?__biz=MzA4MDMwOTkyOA==&mid=2659602217&idx=1&sn=6a353e7bf6062a6fed9b54efe2e1be0a&chksm=84d4d4eeb3a35df83aaf588313a5c9039f0db452291b73b392c3ea2b222b14088c777e1f66a3&scene=21#wechat_redirect)
    
-   [SiC 赋能 Telcodium 轻量化 5kW 便携式发电机](http://mp.weixin.qq.com/s?__biz=MzA4MDMwOTkyOA==&mid=2659602200&idx=1&sn=54ef8dad063799ec92cb9f45d6e044bf&chksm=84d4d4dfb3a35dc99ced198d5d00005d029aa11e6eb91e4786dd648629713d2e43aa963aa3a8&scene=21#wechat_redirect)
    
-   [中等功率是 Wolfspeed WolfPACK 功率模块的理想应用场合](http://mp.weixin.qq.com/s?__biz=MzA4MDMwOTkyOA==&mid=2659602135&idx=1&sn=8df41d8cf208e43d7aa23a9a05051704&chksm=84d4d510b3a35c069ecab19c369be9c8d017101b1edfa54e2137740828cbc28cb10fe4289791&scene=21#wechat_redirect)
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlZCC8iaAr9Ajmgm492AQDJmKmZM8ntSibt9jYiakLLZ45dTDuztnp1qic2M5YiaZoufOMibqu0CHjLlRlQ/640?wx_fmt=jpeg)

  

**关于 Wolfspeed, Inc.**

Wolfspeed（美国纽约证券交易所上市代码: WOLF）引领碳化硅（SiC）和氮化镓（GaN）技术在全球市场的采用。我们为高效能源节约和可持续未来提供业界领先的解决方案。Wolfspeed 产品家族包括了 SiC 材料、功率开关器件、射频器件，针对电动汽车、快速充电、5G、可再生能源和储能、以及航空航天和国防等多种应用。我们通过勤勉工作、合作以及对于创新的热情，开启更多可能。了解更多详情，敬请访问 www.wolfspeed.com。 

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZmgKibo4PI9POl0kGQicicZphB0psBenWOct9aYIbcSQTYvsDK17zYeyfwABZe8wMOpWmiaHqw3he0PNA/640?wx_fmt=jpeg)

**▲ 扫描上方二维码，关注 Wolfspeed**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZmuXVUuSH7N6uCibAmMyTzM3WiaHTR796TTb90hhfgGBIwUVBldzk8uXrgvqDqoo5jpE3kPlsUyx2qQ/640?wx_fmt=jpeg)