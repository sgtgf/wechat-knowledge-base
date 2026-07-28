# SiC MOSFET器件在光伏逆变器的优势及应用


> 原文地址: [https://mp.weixin.qq.com/s/5L76F-Q99bi\_za7gSnRpWQ](https://mp.weixin.qq.com/s/5L76F-Q99bi_za7gSnRpWQ)

光储充领域是SiC器件除新能源汽车领域外的第二大应用领域。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEwI9ZpfjtCFMsOmDVPWPeDWJicxumzf9WJqTOB6wBlxg7h6YIkibSPEmibziaJA1WuAHc0ofQ6mb0HQ/640?wx_fmt=png&from=appmsg)

  

光伏逆变器作为光伏电站的转换设备，主要作用是将太阳电池组件产生的直流电转化为交流电。随着光伏产业迈入“大组件、大逆变器、大跨度支架、大组串”的时代，光伏电站电压等级将从1000V提升至1500V及以上，对功率器件的物理性能提出了更高的要求，此时碳化硅进入了大众视野。

  

在光伏发电应用中，虽然以硅基器件为主的传统逆变器成本约占系统10%左右，但它却是系统能量损耗的主要来源之一。相比于硅基IGBT，SiC MOS具有更低的导通损耗、更低的开关损耗、无电流拖尾现象、高开关速度等优点，并且可以在高温等恶劣的环境中工作，有利于提高光伏逆变器使用寿命。基于SiC优异的性能，SiC在光伏领域的应用逐渐成熟，伴随渗透率的进一步提升，其有望逐渐替代硅基IGBT在光伏逆变器上的应用。

  

碳化硅功率器件的不断发展，为光伏逆变器的性能提升和成本优化带来了新的可能。‍

  

**逆变电路中的应用**

  

  

 **逆变拓扑一般采用H桥结构** 

  

通过调节桥臂上四个开关管的开启——关断状态来改变负载上电流流向，从而将直流电转化为交流电。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2LjbMrBJliaVQKY5Ito9goTSibIxzvajOGaX6bcI2ibBkxsBxuQdFADFbqcLQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)▲H桥逆变拓扑 | 图源网络

当Q1、Q4导通时，电流沿黄色箭头方向；当Q2、Q3导通时，电流沿蓝色箭头方向。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2LjbctcwFYcVRGYhJLbyndQu4GEwYNjP4R1qOPEHU1ytDYZSWQa8DiciblTA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)▲逆变桥 | 图源网络

逆变电路实现与整流电路相反的功能，在结构上也与全波整流拓扑非常类似。

  

由于逆变器的输出所接负载一般为电网或常用电器设备，而这些负载所需交流电频率一般为50Hz或60Hz。

 **MPPT最大功率点跟踪** 

  

在光伏的使用中，定期清洁、随太阳调整电池板支架角度等，都是为了进一步提高太阳能电池发电效率。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2LjbGicBdjQnzT7ko1ibpcA1opkXLGZpZH4JuV63cutCJCCaDzHdkHp9vqBw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)▲MPPT系统原理框图 | 图源网络

  

由于太阳能电池收到光强以及环境等外界因素的影响，其输出功率是动态变化的，光照强，发电就多。带MPPT (Maximum Power Point Tracking) 的逆变器可以充分利用太阳能电池，使之运行在最大功率点。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2LjbvdIsroFNrWNbGvxSeLvwa2wukCgz5n8SoUIoMHE1PpmleUfq1PJAkQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)  ▲太阳能电池板发电特性曲线 | 图源网络

  

从特性曲线看出，可以通过改变电池板输出电流或调节电池板电压，使电池工作在最大功率点。

对于线性电路来说，当负载电阻等于电源的内阻时，电源即有最大功率输出。虽然光伏电池和DC/DC转换电路都是强非线性的，但是在极短时间内仍可认为是线性电路。  

调整负载等效电阻即是改变电路占空比，其通过控制DC/DC电路中开关管状态来实现，开关管需要工作在较高频率。

  

  

**储能逆变器中的应用**

  

  

储能逆变器是微网重要组成部分，又称为双向逆变器或双向储能逆变器。它允许双向的能量流向，即直流侧到交流侧和交流侧到直流侧。

 ![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2Ljb8Y6htX8AdibcZtGZTCLvLCR0ibMPPACBKx89PQYlvRqG7HhBSjch0ShQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲储能逆变器在使用中的能量流向 | 图源网络

  

技术方面：减少对电网的扰动，促进分布式发电的发展。光伏储能系统在负荷低谷时将光伏发电系统输出的电能用蓄电池储存，在负荷高峰时释放储存的电能，以减少对电网的压力。在电网故障时，太阳能可继续发电，并切换到离网模式继续给负载供电。

  

经济性方面：并网补贴较低，且逐年递减，还会限制并网功率，但电价较高且逐年增加，因而在事实上形成了电能的低卖高买。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2Ljbu7UP4gCuDZib7uiaMj0bh8icZgOq0HctYqxH3fuL78ibBh93Ric6At95LnQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲储能逆变器结构 | 图源网络

  

储能逆变器所适用的微网，在使用过程中需要在离网和并网间切换。上图左边为常见的储能逆变器结构，单元U2在并网状态下呈电流源特性，在离网状态下呈电压源特性，工作模式不能实现无缝切换。

为解决因为单元U2工作模式切换问题， 可将单元U2拆为U2和U4两个单元（如右图），分别对应电网和负载，分别工作在固定工作模式下，以提高逆变器的工作质量。

  

  

**微型逆变器中的应用**

  

  

微型逆变器的技术趋势是从多级式向单级式发展，减少器件数量，从而减小元件尺寸和各类损耗，提高可靠性，以实现降低成本并增加功率密度的目的。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2LjbZkb3TBD78ERVzwvRlSPlzdkp6YMUrib07C9LlbLhkPD2K0JPY9PbnuQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲采用SiC MOS的100KHz，200W开关的拓扑 | 图源网络

  

碳化硅器件应用于大功率集成度要求高的场合，可显著改善微型逆变器效率和功率密度。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4bVOa5MDrUCiaYLvshjNz44ibwfY4E2LjbwMu3HbBicfaSQsPG5FostYN0mN4tRSrk9icsbiaIdCQ2jQwBzBatfiaibxQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲图源网络 

文章来源：SMC

**SiC MOSFET器件在光伏逆变器的优势及应用**

‌SiC MOSFET器件在光伏逆变器的应用‌主要体现在提升光伏逆变器的性能、效率和可靠性，同时满足光伏行业对设备小型化、高效能的需求。SiC MOSFET相较于传统的硅基功率器件，具有更低的导通损耗、更低的开关损耗、无电流拖尾现象以及高开关速度等优点，这些特性使得SiC MOSFET在光伏逆变器中的应用具有显著的优势。  

 ‌提升性能和效率‌：SiC MOSFET的高开关速度和低开关损耗特性，可以有效提高光伏逆变器的转换效率，减少能量损耗，从而提高系统的整体效率。此外，SiC MOSFET的耐压范围广泛，可以覆盖从1100V到1700V的光伏逆变器系统，适应不同电压等级的需求。  

 ‌提高功率密度和降低成本‌：通过提升功率密度，SiC MOSFET有助于缩小光伏逆变器的体积，降低制造成本。例如，新一代SiC MOSFET通过改进芯片尺寸、降低米勒电容、提高抗干扰能力等措施，进一步满足了光伏储能对性价比、器件动态特性及降低开关损耗的需求。

 ‌增强可靠性和耐用性‌：SiC MOSFET能够在高温等恶劣环境中工作，有利于提高光伏逆变器的使用寿命。这一特性对于户外使用或高温环境中的光伏设备尤为重要。

 ‌满足市场趋势‌：随着光伏技术的不断发展，光伏逆变器正朝着更高效率、更小体积、更低成本的方向发展。SiC MOSFET的应用正好迎合了这一趋势，成为光伏逆变器升级换代的首选器件。

综上所述，SiC MOSFET在光伏逆变器中的应用不仅提升了设备的性能和效率，还满足了市场对设备小型化、高效能的需求，是光伏逆变器技术升级和成本优化的重要推动力‌。

此外，SiC MOSFET器件的应用不仅限于光伏逆变器，还包括充电桩电源模块、光储一体机、新能源汽车空调、新能源汽车OBC、工业电源、电机驱动等领域。随着新能源汽车800V平台的出现，主流充电模块也从之前的主流15、20kW向30、40kW发展，输出电压范围300Vdc-1000Vdc，并且具备双向充电功能，以达到V2G/V2H等技术要求，因此越来越多充电模块企业开始采用SiC MOS方案‌。  

文字来源：Ai

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)