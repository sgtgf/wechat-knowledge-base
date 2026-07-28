# 英博电气：IGBT/SiC功率器件在新型储能变流器中的应用


> 原文地址: [https://mp.weixin.qq.com/s/KsFxSNBzhL\_lbLWrmBsmPA](https://mp.weixin.qq.com/s/KsFxSNBzhL_lbLWrmBsmPA)

**摘要：**SiC器件在储能逆变器上的应用主要体现在提升系统效率、‌降低能量损耗、‌减小体积和重量，‌以及降低成本。‌

SiC器件，‌即碳化硅（‌SiC）‌功率器件，‌因其高频、‌高温、‌高压等优势，‌与光伏逆变器的发展方向高度契合。‌采用SiC方案的光伏逆变器，‌整机系统效率可提升1%-2%左右，‌能量损耗降低50%以上，‌体积和重量减少40%-60%左右。‌这不仅可以大幅降低系统度电成本及安装维护成本，‌还能提高电源效率，‌降低恢复损耗。‌

在储能逆变器中，‌SiC MOSFET的采用已经证明了其显著优势。‌例如，‌英飞凌为额定功率高达300kW的1500VDC系统开发了一个模块化参考设计，‌该设计采用了双向3电平ANPC拓扑结构，‌实现了接近99%的效率，‌开关频率高达96kHz。‌通过使用SiC，‌可以从整体效率的提高中计算出能源使用和成本节约。‌与传统的IGBT相比，‌SiC MOSFET的单位成本通常较高，‌但在系统层面上，‌硬件成本会大大降低，‌因为更高的开关频率允许使用更小、‌更便宜的磁性元件和散热器。‌这导致在1500V的光伏组串逆变器中，‌每千瓦的成本可望至少节省5-10%。‌

光伏逆变器作为光伏电站的转换设备，‌主要作用是将太阳电池组件产生的直流电转化为交流电。‌SiC器件在光伏逆变器中的应用，‌除了新能源汽车领域外，‌还包括储能逆变器应用领域。‌

综上所述，‌SiC器件在储能逆变器上的应用通过提升系统效率、‌降低能量损耗、‌减小体积和重量以及降低成本等多方面的优势，‌为储能逆变器的发展提供了新的动力和可能性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXSjQA24YXCH1aNkcjpEn1eiac2mY0MhKPYDa60OaTzFy4LYeL3YZ1vSA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

日前，在宽禁带半导体技术创新联盟主办的2024宽禁带半导体先进技术创新与应用发展高峰论坛上，北京英博电气股份有限公司储能事业部总经理李东坪带来了以“功率器件在新型储能变流器中的应用思考”为题的主题演讲，演讲主要为四个部分：

1、储能市场规模

2、储能变流器发展趋势

3、功率器件应用思考

4、公司简介

 **1、储能市场规模**

自2018年进行大规模的储能应用示范以来，经过5年的快速增长发展，储能系统成本大幅降低，技术日渐成熟。从去年到今年相比，整个系统成本降幅接近60%，使其在多应用场景中具备了商业价值和规模化应用条件，行业已经开始出现拐点，即将进入高速发展期。预计未来五年，中国储能市场年增长率将超过50%，市场规模有望达到万亿级别。2023年，工商业储能与大型储能项目新增装机规模累计达到约23.3GW。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwX1S7Sp8eicYfK9HVibjkByibY5gXDCFU4l8wl2kUlicwowEibfcicklrpIdgg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在“3060”碳达峰、碳中和目标的背景下，截至2023年12月底，中国已投运电力储能项目累计装机86.5GW，同比增长45%。其中，新型储能新增投运规模达到21.5GW/46.6GWh，为2022年新增投运规模的三倍。这一趋势表明，在碳达峰、碳中和的推动下，中国正加速构建以新能源为主体的新型电力系统。明显看出新能源比例不断提升，其中锂电在储能板块应用占比约97.3%。结合西北地区如新疆、内蒙古的天然资源优势，液流储能规模化增长也明显看到了良好的拐点。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXTshtoqaaEArHVTDBSbZ10O5iaOMics6WNpicALGUQFrzIbqOZxh5ypL1A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

目前，工商储领域的储能市场正处于蓬勃发展阶段，得益于政策的明确要求和补贴政策的激励，新能源配储与独立储能项目正迅速推进。“表前”（电源侧和电网侧）应用规模继续大幅增长，占比合计97%；工商业应用电价差进一步拉大，尤其在浙江、江苏、广东等经济发达地区，以及河南和山东等地，用户侧工商业储能市场火爆。因此，行业内普遍认为工商业储能市场蕴含着巨大的发展潜力。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXOQaXUFldgc1CPNGhwDMzAJUJ2QN8I3dJl6qicbibyBm6kqGzRjavP54Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**2、储能变流器发展趋势** 

在构建以新能源为主的新型电力系统过程中，我们面临着诸多挑战。第一，大规模高比例的**可再生能源**接入，如风电光伏，它们**存在随机性、波动性和间歇性的短板**。第二，由于大量风电变流器、储能变流器和光伏逆变器的广泛应用，导致了**高比例的电力电子装备，具有低惯性、弱阻尼的痛点**。第三，**电力电子化的设备大幅增加导致的暂态过载能力比较弱**，明显形成一个从以火电机组为主的强电网逐渐向以新能源为主的弱电网转变的趋势。为了解决这三方面的问题，平抑波动，实现源侧和荷侧的动态平衡，给储能发展带来了一个大力发展的机会，需要配置多时间尺度下的储能。储能主要是为了解决弱电网网架结构的低惯性、弱阻尼，所以**构网功能成为刚需**。未来无论是储能变流器、风电变流器还是光伏逆变器，都要具备构网功能，**这对功率半导体的器件提出了更严苛的要求**。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXovZic2g9LOXPeiacNH04dJY1yEeJxw504Ur7RICZCNpX7n4HoE2yS3YA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这便要求变流器具有更高的过载倍率，尤其对于构网的要求，而不是简单的容量超配。在2023年底发布的《GB/T 34120-2023 电化学储能变流器技术要求》中便提到“过载能力在额定电压下，储能变流器交流端口电流在110%额定电流下，持续运行时间不小于10min；在120%额定电流下持续运行时间应不小于1min。在新疆、宁夏和西藏等弱电构网功能急需的地区，对变流器提出了更高要求：110%额定电流下应能长期持续运行；在120%额定电流下，持续运行时间不小于2min；且具备300%额定电流10秒短时过载能力。这对功率半导体器件提高了更高的硬性要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXvTcn37Fsdx8AGgSu1UOuDcWoGlo7Awc98VoEePpc0GskH6tR1gFBFQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

储能行业发展迅速，与光伏发展趋势相似，变流器的发展结合直流侧电芯的快速升级迭代。过去，主流电芯容量为280Ah，但现已逐步被宁德时代等企业推出的314Ah、320Ah+等大容量电芯所取代，这导致我们的PCS（储能变流器）从100kW快速向125kW迈进，单机的集中式PCS从1.725MW快速向单机2.5MW的功率段迈进。**因此，随着功率的升级，今年下半年开始将对800A、900A的IGBT以及碳化硅器件会有大量的需求。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXeTh15Drr9Cm8RW1Wug0CSOiaqFbe2S30TKdCmMPc2bV9iayC6NFUMIbA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在电化学储能领域，近两年并网标准的要求不断提升。早期，主要关注电能质量等简单性能，但近年来，对并网性能的一次调频、惯量响应、故障穿越能力、过载能力等方面都提出了更高的要求。在2023年新发布的《GB/T 34120-2023 电化学储能变流器技术要求》、《GB/T 34133-2023 储能变流器检测技术规程》两项标准中，对储能变流器的技术要求内容调整升级占比超过90%，对变流器产品提出了更细化的要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwX9OibVkjLjZDNEOktkicvhFbQUfZQXJIMYpVxJv1CXfVsyQvSKgXmhENw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwX7xiacwTTNw6Psia8Cia6icIoHAlCTTDjASuhvIxnR3K1knmH3abpGnCIiag/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

面对新型电力系统的转型挑战，我们从五个纬度提出产品要求：高性能指标、更低的能耗、高能量密度、较低的成本和更便捷的调试。**其中，国产器件的可靠性问题是我们最为关注的焦点**，近年来，国产替代趋势日益显著，但是我们也清醒地认识到，在替代过程中仍面临一些稳定性方面的挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwX9aa0f5icz8VKMChY2IicEicWRF7AQYevMAIQOMB8JOCLpaaBYAxxfVNLg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**3、功率器件应用思考** 

过载现象对储能变流器具有显著影响，当前普遍采用的三倍过载配置要求成倍增加设备投入，这对终端用户带来了初始的投入成本过高，回本周期偏长的影响。针对这一问题，我们期望行业内功率器件也能进一步提升短时过载能力等能力，高效地应对行业变化趋势，为行业带来更好的商业模式和商业价值。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXjzEC1tlPqm7LWP7N1IRFoc0k2NBcx5Me8qCLht8AibgGAq8fmial9onQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**过载提升**对IGBT的要求，也是对碳化硅未来潜在的要求。在构网型应用中，要求IGBT器件具备3倍过载能力并持续10秒，这是由暂态过度到稳态的过度需求。同时，连续故障穿越的电流要求也从原先的1.5倍提升至1.8倍，**这要求IGBT器件具有更高的工作结温和更高的性价比**。面临这样严苛的情况，器件的老化和热传导的疲劳累积成为需要解决的挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXnbPoLv7gbrEpZaIE8cX16EQIweu2QuTG7Yu8m3ib2FaSyNxSfqA02KA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在电磁兼容性（EMC）方面，我们十分关注变流器EMC防护及器件内部的寄生效应。尤其是碳化硅器件的高频特性在通断产生较大的 du/dt 和 di/dt，会通过耦合通道传输至敏感体，如驱动电路、微控制器（MCU）、数字电路以及通信电路，所以有时候有必要对这两个参数的精准控制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwX4fcLOtT0mXfyeNiaXcnv8xrIaiaWEDCTQwwMuic4oibTpMgB9JcuMerFzA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

电磁兼容对功率半导体的要求主要集中在动态均流、静态均流、一致性参数优化的上。随着变流器技术的不断发展，我们基本采用多管并联的方式来提升容量，四管并联在行业内已相当普遍。随着变流器功率进一步爬升，采取5个600A的晶体管并联或5个800A晶体管并联的高并联方案在行业内尚未有特别成熟的应用案例，目前仍存在一致性问题。所以我们也期望在复杂工况下，能够有一些安全运行可靠性的数据支撑，也欢迎功率半导体的厂家有更优化的解决方案跟我们来探讨。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXYILSeCQriaoDRxvCgScccOfrqv1rkUMWibrLnp2jDnGtl58RrQibr2lvg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

目前，碳化硅已经在储能变流器中应用了三年多的时间，预计在今年下半年，碳化硅产品会有批量大交付的拐点。其显著优势在于，高开关频率器件导致功率密度高、通断电压更高、导通电阻更低、效率也提升的比较明显。但同时也伴随一些缺点，高频开关导致对器件和配套电路的要求更为严格。比如对驱动电源的要求较高，需要有更小的分布电容；以及驱动芯片需要有更高的CMTI（共模瞬态抗扰度）的能力；增加上下管直通的风险；EMI（电磁干扰）问题严重；尤其在碳化硅多个单管并联时，因为数量较多，生产工艺上还存在一些一致性的筛选问题；碳化硅器件目前与IGBT相比价格仍偏高。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXvY2mww1JU56ic8xDLMOdFhlEnt8EtoD0J1dW2GkJvubza90ul9EBYMQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXza2UOvueiaCwMoicaagiaE45PBRsH34a7DeGs6icrwMEuiaFY1F3eR53NQw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

为什么需要并联？我们与碳化硅功率半导体的供应商交流中发现，基本没有生产额定电流大的零件。大尺寸芯片生产良率比较低，导致模块价格贵。大电流封装产品市场需求不足，难以支撑起一条产品线。使其再并联使用会发生导通时不均流、开关时不均流的问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXzLiaQfcSgq99kIFKPlvVDqlecC1QQ3xOEvPBbk2oTtBnccmum4h4mbQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

关于开关时的不均流的问题如何解决？首先，这是基于我们的经验，我们建议厂商在筛选过程中对标称工作电流下Vgs(th) 进行筛选，这样一致性会好一些。其次，结构布局时考虑杂散电感对开通关断延时的影响。最后，从应用的角度看，每个MOS必须有独立的门极电阻，否则门极震荡会比较大。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXaQKiaEHrib3Xia837FfWJjkpoYmFyQXldTTyOIY6QBLPhJa4icwCe1QqHQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXX4rv9fdx396EW0QHcK2QTs9GicTDLPsaguhUXwAxV5PgLqiaZ8u9p8bg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXZIvxPiaibDE0BXpm4rMAUFzcxtR8jW27Cf1SGzTykBdhLcUkJTicn7RAQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**4、公司简介** 

北京英博电气股份有限公司成立于2004年，旗下拥有三大业务板块：电能质量、储能产品、轨道交通，这些业务都是围绕电力电子技术平台打造变流器类产品。目前英博在国内出货排名中位列前十的变流器企业。英博主要聚焦于工商业储能与大型储能领域，为客户提供从30kW到单机2.5MW的PCS技术路线。产品系列包括集中式、组串式及模块化三大系列，满足不同场景下的多样化需求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwX1TtUp1zV2FGNXibEYVSk8333z9RNswk39ibrPNBJjYic4HfulctaCIYbw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2IIyqVZK2FueDlso20SJExWAgAqQ9uwXKsAZLjOwXGt9ibfXVeQoibYI7XfCtkpPTejOygN1g4gyRtjgOZWQtbew/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)