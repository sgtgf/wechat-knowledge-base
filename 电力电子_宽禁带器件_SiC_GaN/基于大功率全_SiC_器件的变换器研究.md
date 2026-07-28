# 基于大功率全 SiC 器件的变换器研究


> 原文地址: [https://mp.weixin.qq.com/s/k\_QRNca\_DF1f-H8g4UZPKA](https://mp.weixin.qq.com/s/k_QRNca_DF1f-H8g4UZPKA)

**文章来源：**机车电传动

**作者：**张庆，张小勇，饶沛南，施洪亮，赵明锐，周帅（株洲中车时代电气股份有限公司技术中心） 

**摘 要** ：为了适应变流器产品高频化、高功率密度的发展趋势，研究了大功率全SiC MOSFET器件在变换器中的应用，讨论了全SiC MOSFET器件在应用中的杂散参数问题和桥臂串扰问题。通过双脉冲试验，重点研究了驱动电阻和吸收装置对大功率全SiC MOSFET器件关断尖峰电压的影响。结合实际产品研究了基于大功率SiC MOSFET器件在轨道交通Boost变换器中的应用。试验表明，相对于硅基 IGBT器件，采用SiC MOSFET器件能给变换器带来轻量化、工作频率、效率的全方位提升。

**关键词**：SiC器件；SiC MOSFET；杂散电感；桥臂串扰；振荡抑制；高频化 

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxbVzsPj8p3oNu8gng4POWjJCWyqnBn0emyMKf5VAUobuSicwq8ibS6ia9A/640?wx_fmt=jpeg&from=appmsg)

**0 引言**

半导体功率器件的发展是推动电力电子技术进步的一个主要动力，近年来机车和动车组的迅速发展与半导体功率器件的发展密不可分。随着Si器件的性能逐渐接近其理论极限，以SiC为基本材料的新型功率器件越来越多地受到业界重视\[1\]。SiC材料拥有高击穿电压、高热导率和高电子饱和速率等属性。高击穿电压决定了器件的高压、大功率特性；宽禁带确保器件可以工作在高温环境下；高电子饱和速率决定器件可以在更高的频率下完成开关动作。SiC器件的功率处理能力高于Si器件，SiC成为功率器件中的重要半导体材料\[2\]。

**1 SiC 器件应用问题分析**

**1.1 寄生参数影响**

SiC器件的快速开关特性，一方面，为变换器高频化提供有力支持；另一方面，也使得在低频下不太明显的寄生参数效应趋于恶化，使得功率器件在开关动作时产生过高的电压和电流应力，降低了变换器可靠性。在变换器中，寄生电感对功率器件的影响是一个普遍问题。但在SiC应用中，由于SiC MOSFET的动作电压普遍较低，抗电压振荡能力更弱\[3\]。典型的MOSFET寄生电感示意图如图1所示。图1中Lg是栅极电感，其与驱动线长度有关；Ld和Ls分别是源、漏极引线杂散电感；Lz1和Lz2是连接到MOSFET的外部杂散电感，一般是变换器母排电感；Rg是驱动电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxF95ZZZyHVweDV4eTiaDDTpkm5AHiarkjk1KP6sK2twShJEJz1hWt46XQ/640?wx_fmt=png&from=appmsg)

开关管动作时，由于Lg的存在会阻止栅极电流变化，使得栅极电容充、放电时间延长，影响开关速度，同时，会在G极和S极之间产生电压振荡，不利于开关管安全工作；Ld，Ls，Lz1，Lz2则会造成功率回路产生过电压尖峰，增加开关损耗，降低产品可靠性。

解决此问题一般有以下几个方案：①减小系统杂散电感。此方法是从根源上解决问题，但一般系统结构确定后优化空间很窄。②增加吸收电路。具体通过增加吸收电容、RC吸收电路，抑制过电压尖峰。③调整驱动性能。通过调整驱动电阻，调节开关速度，优化过电压尖峰。

**1.2 桥臂串扰问题**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxs2jLeSAoWWgo8HwO05zo4VEdR4osW7VGe9bdAeEg7JWgyPxFHgsuZQ/640?wx_fmt=png&from=appmsg)

在图2所示的桥式拓扑结构中，同一桥臂上的一个开关动作会对另外一个器件产生不利影响，尤其是在开关过程存在较大dv/dt时，SiC器件的快速性和较低的开启电压放大了这一问题。在上管开通瞬间，下管的Vds突然升高，较大的dv/dt使得电流流过下管的Cgd，此电流会使Cgs充电，抬升了栅源电压。如果此电压超过了开启电压，下管会产生误导通，造成系统短路。同样地，下管开通时也存在上管误导通的可能\[4\]。

为了解决此问题，业内提出了多种方案加以改善。主要方案有：增加栅源电容，提供分流回路；提高器件开启电压门槛\[1\]。

**2 SiC 器件动态性能测试**

**2.1 测试电路**

为了研究SiC器件在大功率DC/DC变换器上的应用，搭建了交错串联Boost变换器。该变换器是高频隔离系统的一部分，这里仅给出主要部分，如图3所示。两路Boost电路串联，控制脉冲交错180°，共同分担输入电压DC 1 500 V，两 路Boost分别输入DC 1 200 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx20Bp0x1IQ5eHTWMXzTxEGp8WJjowOwmrAYgVUraTBe0xzuWF7q8D3Q/640?wx_fmt=png&from=appmsg)

其中，VQ1和VQ2为两个全SiC斩波管，型号为ZGS300M17BM2，主要参数如表1。

典型的测试开关管动态特性的电路是双脉冲电路，其原理如图4所示。下管VQ2开通时，电感LLd的电流上升；当下管关断时，此电感通过VD1续流，电感电流保持不变。在第二个脉冲的上升沿和下降沿，分别可以测量出被测器件在一定电压和负载下的开通或关断波形。双脉冲测试的理论波形如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxzCh8BKJVcaoDiaRIGeERA9ibu29iaQRU5SHibkC6aHbibBdAiaCFXbraiaaPg/640?wx_fmt=png&from=appmsg)

**2.2 测试结果**

由于本测试不存在桥式拓扑，所以主要考核杂散电感及驱动参数对开关器件的影响。为了测试的有效性，采用实际产品的母排，根据以上的测试方法进行双脉冲试验并根据测试结果对产品进行了优化。试验波形如图6。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxfRwN8AMnibNFDficoGL2jQibR3Pxd3WjglOTE3AtSURTpcey8tbHVic4uQ/640?wx_fmt=png&from=appmsg)

如图6可见，开关管的Vds和Vgs均存在较大的尖峰和振荡，在实际应用中会降低产品的可靠性。其原因正如1.1节中所分析的那样，原因来自于系统存在杂散电感和SiC器件的高开关速度。由于系统的结构和母排设计已经决定了杂散电感，因此优化方向主要是增加尖峰电压吸收能力和调整开关速度。同时，为了提高器件工作的安全性，应尽量降低驱动电压的峰值。具体优化方案如表2所示。优化后波形测试结果如图7。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxlySDYU8DHsBhHG05FsaldIvwZ9yiaE7LiaxJGpR1JqquJXl1s9edVia6g/640?wx_fmt=png&from=appmsg)

由图7（a）和图7（b）可知，在驱动电阻一定时，吸收电容越大，Vds尖峰电压越小，但对Vgs无作用；由图7（b）到图7（d）可见，驱动电阻越大，开关管的Vds和Vgs尖峰电压改善越明显，特别是当驱动电阻达到5.6 Ω时，Vgs振荡消失。对于驱动电压范围较窄的SiC器件而言，增大门极电阻能够有效地提高可靠性。但是，增大驱动电阻后，必然降低开关速度，导致开关损耗增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxbHEnCEhFtbBMYcjlCNVZNreDyEGTDiazibSu9ovqbQiaF7GUhQibdMdMuA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx74o15dZAutU3CCLbicovTTM8INlV3nxHnd7CgAbK4VW2gzvQ04hESxw/640?wx_fmt=png&from=appmsg)

**3 样机测试**

结合以上分析，研制了一台2×60 kW高频DC/DC变换器，其前级电路即为图3所示的交错串联大功率Boost变换器。基本参数如表3。电路原理图3。其工作时的波形如图8~图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxkCY6982qCFJzywK5ibQiaErdmdRjxxJxTn0vEy1gaAmAM8L5YzNk07XA/640?wx_fmt=png&from=appmsg)

从图8~图10可以看出：

①满载时驱动开通和关断均存在振荡，其振荡在合理范围内。

②Vds在关断时因振荡产生的电压尖峰为127 V，器件可以安全工作。

③驱动最大电压尖峰产生于另一管动作时，Vgs\_max=20.94V,Vgs\_min=-7.24 V,在安全范围内（-10~25 V）。

④SiC MOSFET开通关断时间短，均在200 ns以内，类似的IGBT器件开关时间大于1 μs。

SiC MOSFET和硅基IGBT主要参数对比如表4。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDxIGiaCgJ1QjqVKmos6qcGgwuauQdjMORBMGgzMYYqicyx1KZA45k1FIAg/640?wx_fmt=jpeg)

SiC MOSFET和硅基IGBT两种器件工作情况对比如表5。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1aO5rxqxVKjrfbS96bJDx8ia27ic4c0bknbQhibFH4rP5PSfNgbPmSPqUTrZH0jJ0EFoBibs5Igrzhw/640?wx_fmt=png&from=appmsg)

对比可知，采用SiC器件替代Si器件能带来轻量化、工作频率、效率的全方位提升。与Si器件相比SiC MOSFET具有明显的优势。

**4 结语**

本文主要讨论了SiC器件应用中所面临的杂散电感问题和桥臂串扰问题，结合实际产品进行了SiC器件的双脉冲试验，并在原理样机上验证了全SiC交错串联Boost变换器的有效性。试验证明，采用SiC器件能带来轻量化、工作频率、效率的全方位提升。由于SiC功率器件开关频率大幅提升恶化了产品的电磁兼容环境，因此加强电磁防护将是全SiC器件工程化应用的又一挑战。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)