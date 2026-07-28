# SiC器件在大功率LD驱动源模块中的应用


> 原文地址: [https://mp.weixin.qq.com/s/rh2orboxW7pXCwSyMaIPsg](https://mp.weixin.qq.com/s/rh2orboxW7pXCwSyMaIPsg)

文章来源：激光与红外

作者：贺涛，杨爱武，郑毅，朱虹（华北光电技术研究所，北京100015）

摘 要：介绍了SiC功率器件的应用优势并将其应用到了大功率LD驱动源模块中；对SiC MOSFET的开关参数及特性进行了分析，并设计了一种简单实用的 SiC隔离驱动。本文应用SiC器件设计了一款120V/120A全SiC LD驱动源模块，功率模块主电路拓扑采用四路交错并联Buck电路，电路中的开关管和二极管全部使用SiC功率器件，功率模块最高效率达到98％。

关键词：碳化硅器件 ；LD驱动源模块；交错并联Buck；碳化硅驱动电路

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEoHtI4mcmia8WhibdJwlWLwE2xCVufF9tB2Padp28Fu9fFYfjSdEUS1x6Q/640?wx_fmt=png&from=appmsg)

１ 引 言

近年来，功率MOSFET和绝缘栅双极晶体管（IGBT）等电力电子器件在各个领域的应用越来越广，这些器件的结构和制造工艺基本接近其材料特性决定的理论极限。随着LD功率电源对开关器件性能要求越来越高，通过新材料来提高其性能成为了一种趋势。

碳化硅（SiC）材料作为一种宽禁带（禁带宽度EG＝３×Ｓｉ）半导体材料，同常用的硅材料相比，不但击穿电场强度高（临界击穿电场 EC=１０×Ｓｉ）、热稳定性好，还具有载流子饱和漂移速度高（电子饱和速度Vsat＝２×Ｓｉ）、热导率高（λ＝３×Ｓｉ）等优势。目前采用SiC材料的肖特基二极管（SBD）、SiC JFET和SiC MOSFET都已取得广泛应用，大幅度降低了生产成本。

SiC功率器件可以提高系统的功率密度，在实现大功率输出的同时降低电源损耗、提升系统效率；SiC器件可以工作在更高的频率，提升功率电源变换系统的反应速度；SiC器件还具有高温环境下正常工作的能力。因此SiC器件可用于太阳能逆变器、电网功率控制、铁路牵引、机器人、汽车电子（混合动力汽车，燃料电池汽车和纯电动汽车）和航空电子等领域中。

本文首先对SiC器件的特性进行了分析，在此基础上设计了一种简单实用的SiC隔离驱动电路；应用SiC器件设计了一款120V/120A全SiC LD驱动源模块，功率模块主电路拓扑采用四路交错并联Buck电路，并进行了仿真和实验。

２ 功率电源中的SiC器件

MOSFET和二极管是功率电源中使用较多的器件，下面对SiC MOSFET和SiC肖特基二极管的性能优势进行分析。

２.１ SiC MOSFET

SiC MOSFET作为一种新型宽禁带半导体器件，与Si MOSFET相比具有高温、高频、高功率密度等优点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEo70SFJse0Rem65Ij19t3TPTGZEYHJgSBm3j9VQFGibL0Zl57Gc44eZbQ/640?wx_fmt=png&from=appmsg)

表 １给出了功率等级1200V/20A的Si和SiC器件对比，ＩＸＦＫ２０Ｎ１２０Ｐ为 ＩＸＹＳ公司的Si MOSFET，Ｃ２Ｍ０１６０１２０Ｄ为 Ｃｒｅｅ公司（现改名为 Ｗｏｌｆｓｐｅｅｄ）的SiC器件。表1为两种MOSFET的输入电容 Ｃｉｓｓ、输出电容 Ｃｏｓｓ、转移电容（密勒电容）Ｃｒｓｓ，由表 １可看出，相同功率等级下的SiC MOSFET寄生电容远小于Si MOSFET；寄生电容越小，电平转换时间可以越短、开关速度更快。

２.２ SiC肖特基二极管（ＳＢＤ）

与普通 Si二极管相比，SiC 二极管的反向阻断电压更高，反向恢复时间更短；将其应用到功率电源中可以提高开关频率、减小二极管开关损耗。功率二极管的反向恢复时间是二极管的一个重要参数，也是制约大功率电源变换器性能的一个重要因素。普通Ｓi快恢复二极管有电导调制效应，当电流变化率很大时反向恢复时间很长，反向恢复电流尖峰大，会在开关过程中产生很大的电流电压尖峰，增加了功率器件的损耗，降低了电源变换器的效率。SiC SBD由于没有电导调制效应，与普通器件相比基本没有反向恢复，因而其开关损耗较小、开关速度较快，而且其开关特性不随温度变化而变化。

３ SiC MOSFET的开关特性与驱动电路设计

SiC MOSFET开关速度快，其漏源极电压变化率和漏极电流变化率较大，导致SiC MOSFET开关特性对电路的寄生参数比较敏感，漏源极电压和漏极 电 流 的 开 关 波 形 容 易 因 线 路 寄 生 参 数 出 现震荡。

SiC MOSFET对驱动的要求不同于普通Si MOSFET，为发挥其优良的性能，需要对SiC MOSFET驱动电路单独进行设计。开关管开通时，较高的正向开通电压有利于减小导通损耗，但是SiC MOSFET的开关速度快、漏源极电压变化率大；受到驱动回路中寄生电感和开关管结电容的影响后，容易在SiC MOSFET栅极上出现电压尖峰，导致其栅极被击穿，因此正向驱动电压不宜过高。另外SiC MOSFET栅源极间开通门限电压较低，为了防止误导通，关断时驱动要设置负电压，以保证电路的可靠性。

为充分发挥SiC MOSFET的优势，其栅极驱动电平极限要求一般为-5V/+25Ｖ，通常为了保证驱动可靠，需要适当降低。驱动电路的电容放置在驱动芯片附近，以提供更好的充放电回路。驱动电阻需要合理选择，避免过／欠阻尼影响驱动波形质量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEoeJ6sicz9iaHQb4arCR3h68H0dGJbB9XL0ibln3hoiaclg3Uhwa2IJZQgnw/640?wx_fmt=png&from=appmsg)

图 １为本文设计的高效可靠SiC MOSFET隔离驱动电路示意图，使用超快 MOSFET驱动芯片，其驱动峰值电流达到9A且有较强的驱动电容负载的能力。驱动电路用隔离电源模块和隔离通信芯片实现了驱动部分的全隔离，加强了驱动的抗干扰能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEogyobv0bw3g1mamovoJZssPt209EgaicWF4jFibN1OYOk6z16YANNqE5g/640?wx_fmt=png&from=appmsg)

图２为驱动波形，驱动电压选择-3.3Ｖ/＋15Ｖ，驱动电阻RG为 6.2Ω；图 ２（ｂ）、２（ｃ）分别为驱动波形的上升沿和下降沿，驱动波形上升时间和下降时间均在80ns以下。

4 四路交错并联LD驱动模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEoPWFeUVzq6NveAeVaZPYybJSYTNm50SrWLd9pQTibXXiaibibm9YeaWhXcg/640?wx_fmt=png&from=appmsg)

本文LD驱动电源输出电流较大且LD对电流比较敏感，需要较高的输出电流波形质量；单个Buck变换器在输出电流较大时会出现效率和电感过热等多方面的问题，Buck变换器的交错并联技术可以有效降低输出的电流纹波，减小电路中电感元件的体积，减小输出滤波电容值。本文采用四路交错并联 Buck变换器电路示意图如图 ３所示，开关管 Ｑ１、Ｑ２、Ｑ３、Ｑ４的控制信号依次相差 １／４周期，二极管 Ｄ１、Ｄ２、Ｄ３、Ｄ４为续流二极管。开关管 Ｑ１、Ｑ２、Ｑ３、Ｑ４均 选 用 Ｃｒｅｅ公 司 SiC MOSFET Ｃ２Ｍ００４０１２０Ｄ，二极管 Ｄ１、Ｄ２、Ｄ３、Ｄ４均为泰科天润半导体公司的SiC肖特基二极管 Ｇ２Ｓ１２０４０Ｂ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEoyyxRicUE64YrOCleibHmHYWnYDibVUXNU6WdIefkWspbrVLwrTuqHUiatA/640?wx_fmt=png&from=appmsg)

图 ４为四路交错并联Buck变换器中四路的总电感电流 ｉＬ以及四路分别的电感电流 ｉＬ１、ｉＬ２、ｉＬ３、ｉＬ４；由图中可以看出总电感电流纹波由于四路相位的差异明显减小，变换器的输出电流纹波也随之降低；采用这种变换器拓扑结构，可以有效提高大功率LD驱动源的输出电流质量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsntcftV77fZgWTu6KhyJdEoMMqzHt2Na1xA7cEBibLGvphBwMiauSHVAaIcicM592YUxDqkQchjcxfvw/640?wx_fmt=png&from=appmsg)

本文中的全SiC MOSFET功率模块主功率电路采用四路交错并联Buck变换器，通过霍尔元件采样输出电流进 行 闭 环 控 制。LD驱 动 源 功 率 模 块输出电压 ／电流为120V/120A；输出电流纹波ΔIOPP≤0.5％Io；图 ５LD驱动源模块效率曲线为驱动源模块效率曲线，变换器最高效率达到９８％以上。

５ 结 论

SiC 器件与常用硅材料器件相比具有很大优势。本文基于SiC MOSFET开关速度快、寄生电容较小等特点，设计了一种结构简单、性能稳定的SiC MOSFET隔离驱动电路，实际使用中有着很好的效果。本文应用SiC 器件设计完成了120V/120A四路交错并联LD驱动源模块，LD驱动源模块效率较高、输出电流纹波小，工作可靠，结果证明了SiC 器件在应用方面的可行性和优势。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)