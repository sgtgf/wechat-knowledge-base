# 1700V25mΩ的SiC MOSFET 短路测试报告


> 原文地址: [https://mp.weixin.qq.com/s/2NwCJ4zYI2ys8LTT7CgH1g](https://mp.weixin.qq.com/s/2NwCJ4zYI2ys8LTT7CgH1g)

SiC MOSFET 凭借着耐高压、耐高频、耐高温等独特优势，应用在很多电力电子产品中。在电子应用中经常会出现短路问题。因为SiC MOSFET面积小、短路电流高、漂移层薄等特性，导致其短路时发热量集中，对比IGBT器件，短路时间就相对短一些。

  

    目前市面上大部分IGBT都会在数据手册中标出短路能力，大部分在5~10us之间。而大部分的SiC MOSFET都没有标出短路能力，即使有，也比较短，例如英飞凌的CoolSiCTM MOSFET单管封装器件标称短路时间是3us，EASY封装器件标称短路时间是2us。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmkreib2pRiaulic6PFpPUaNgIv4QaPpicEb0Fdbt05tZfkbVMUicywmEqjMab8ribaKGV1NCAIVB8zDy1g/640?wx_fmt=png&from=appmsg)

                 图片来源;英飞凌半导体

  

  

**一.常见的SIC MOSFET的短路类型有两种：软开关短路和负载短路故障。**  

**1. 软开关短路：**在开关操作过程中，由于某种原因导致开关器件无法及时断开电流，从而导致电流在开关器件上持续流动，出现短路现象。

**2.负载短路故障：**负载端突然出现短路。由于负载器件损坏、接线错误或外部环境影响等原因引起的。当负载短路发生时，电流会迅速增加，导致SiC MOSFET过载并可能损坏。

**二. 一般SIC MOSFET会出现短路的原因:**

 **1.电压过高：**长时间受到超过其额定电压的电压，导致绝缘层击穿或氧化层破裂。

 **2.电流过大：**SiC MOSFET 被额定电流以上的过大电流击穿，导致输电通道内部结构受损，导致短路。

 **3.温度过高：**SiC MOSFET 运行在超过其允许的温度范围内时，温度过高会引起材料的热膨胀、电子迁移导致短路。

 **4.设计问题：**材料选择不当、电压和电流过大、电极之间的间隙不合适等都可能引起短路。

**三.1700V25mΩ的SiC MOSFET测试数据**  

**试验设备：**半导体器件测试自动分选机（ PH-314UG ）

**试验目的：**短路测试是为了测试功率器件能够承受的最大电流 。电流过载发生时，漏极电流迅速上升，功率器件需要在电流峰值维持安全水平。

**1、试验条件:**门极开通电阻 R(on)=10Ω，门极关断电阻R(off)=10Ω ，高压母线Vdc=1000V 短路时间从2us逐渐往上加直至产品损坏。

**2、测试原理：**短路测试时，无需接负载电感，非动作管以正压保持导通状态，动作管（待测管）以一个单脉冲， 驱动形成桥臂直通。短路回路电感量很低，短路能量全部来自于母排电容组。

**3、短路测试拓扑如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmkreib2pRiaulic6PFpPUaNgIzeHlP4FCnvibP67ic9ylnszebSFnA8C3xEdUW0hXmJmhGk7Mvgo6JTrw/640?wx_fmt=png&from=appmsg)

4**、**短路测试数据:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmkreib2pRiaulic6PFpPUaNgIvfzPrJOuCdsPWCSevryticZQa1Bnl0xbObm4WAiaQGybtxDV38eqaj9g/640?wx_fmt=png&from=appmsg)

**5、短路测试波形：**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmkreib2pRiaulic6PFpPUaNgId7y89O7EfgwibnD8fIGCTPcwaacb3MdPtCU0UO6umHAKDekBjk9WSKA/640?wx_fmt=png&from=appmsg)

**6、试验结论：**

**短路时间从2us逐渐往上加，短路极限为3.3us。**

**四.总结**

SiC MOSFET短路能力设计还要考虑耐压、损耗、寿命等多种因素。可以设计一个损耗极低但没有短路能力的器件，也可以稍微牺牲一点性能，使器件具备短路能力，从而提升整体系统的可靠性。选择哪一个方向，使器件最终呈现什么样的性能，都是针对目标应用权衡的结果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)