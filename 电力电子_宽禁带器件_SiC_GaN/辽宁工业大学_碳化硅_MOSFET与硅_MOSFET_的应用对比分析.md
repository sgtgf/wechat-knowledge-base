# 辽宁工业大学：碳化硅 MOSFET与硅 MOSFET 的应用对比分析


> 原文地址: [https://mp.weixin.qq.com/s/t8r--v7BhltEn9uxC3XvJg](https://mp.weixin.qq.com/s/t8r--v7BhltEn9uxC3XvJg)

**文章来源：**电源学会

**作者：**陈之勃，陈永真（辽宁工业大学电子与信息工程学院，锦州 121001）

**摘要：**碳化硅 MOSFET 具有导通电压低、 开关速度极快、 驱动能力要求相对低等特点， 是替代高压硅MOSFET 的理想器件之一。将额定电压、电流相同的碳化硅 MOSFET 和高性能硅 MOSFET 应用于反激式变换器中进行对比测试， 实验结果表明， 在相同的驱动条件和负载条件下， 碳化硅 MOSFET 的开关速度明显快于硅MOSFET；在 12 V 驱动电平条件下，直接采用碳化硅 MOSFET 替代硅 MOSFET 使得变换器的效率明显提升；采用 20 V 栅极驱动电平，效果更加明显。

**关键词：**碳化硅 MOSFET; 导通电压; 开关速度; 器件损耗

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUlIVffTs3XHMoRia8Cib3wA9wAZ1YqOLVZV9SwWoxdH1ECbWaeGXXibbiaMg/640?wx_fmt=jpeg&from=appmsg)

功率半导体器件的开关速度与导通电压的矛盾随着耐压的提高越来越明显。以第 3 代 MOSFET为例， 在结温 150℃和额定电流条件下， 额定电压100 V 时其导通电压一般不高于 2 V；而额定电压1 000～1 200 V 时，MOSFET 导通电压将超过 30 V。虽然 MOSFET 在不断地改善，但目前性能优秀的硅MOSFET 的导通电压仍不低于 21 V。尽管 IGBT 可以有效地降低其导通电压，但是拖尾电流带来的开关损耗在频率 50 kHz 以上的硬开关应用中将不可容忍。因此，需要一种既有高额定电压又具有极快开关速度、同时导通电压明显低于硅 MOSFET 的理想的电力半导体器件。碳化硅 MOSFET 具有高耐压、极快的开关速度、低的导通电压。

1200 V/24 A 的碳化硅 MOSFET（CREE 公司的CMF10120D）的主要参数为：导通电阻 249 mΩ（结温 135 ℃）、 栅极电荷 0.047 1 μC、 米勒电荷 21.5nC；最先进的硅 MOSFET（IXYS 公司的 IXFL32N120P）的主要参数为：导通电阻 820 mΩ（结温 135 ℃）、栅极电荷 0.36 μC、米勒电荷 160 nC。应用常规技术的相同 电压和电流 的高压 MOSFET（Ｍicrosemi公司的 APT24M120B2） 导通电阻为 1.5 Ω （结温135 ℃）、栅极电荷 0.26 μC、米勒电荷 120 nC。很显然，碳化硅 MOSFET 的关键性能上性能远远优于硅MOSFET。

目前， 以CERR公司制造的碳化硅MOSFET水平最高， 商品器件水平为单管：1200 V/90 A/25mΩ；模块：1200 V/300 A/5 mΩ；2012 年高压碳化硅 MOSFET 半桥模块水平为 10kV/120 A，每个单元由 12 个 MOSFET 管芯并联和 6 个 SiC 二极管并联而成；10 kV 的碳化硅 MOSFET 正由电科院测试，预计将应用于智能电网领域。1 200 V 耐压的碳化硅MOSFET 主要应用于替代同领域的硅 MOSFET 和硅IGBT，可以获得更便捷的驱动方式和更低的导通损耗与开关损耗，有利于减小无源元件体积，进而减小整机的体积。

**1.碳化硅 MOSFET 与硅 MOSFET开关特性对比测试**

为了对比碳化硅 MOSFET 与硅 MOSFET 应用性能的差异，本文将碳化硅 MOSFET 与硅 MOSFET分别应用于同一交流 380 V 电源供电的反激式开关电源上。测试仪器为：隔离通道示波器， 型号TPS2024；电流探头，型号 TCP305A。

**1.1 栅漏电压，漏源电压波形的对比测试**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUlafVcKef7UWxbhNkYxycBociauP2wDMQOL7tbbrcNwdkOj6ECacjsA0w/640?wx_fmt=png&from=appmsg)

图 1 为碳化硅 MOSFET 栅极电压波形，图 2 为硅 MOSFET 栅极电压波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUlsThGk11gdcKkOvy85icYgxC4iat5gPTvJn6IF8oOePrb2mduoV2yZUuQ/640?wx_fmt=png&from=appmsg)

图 １ 和图 ２ 中， 碳化硅 MOSFET 栅极电压上升时间为 340 ns， 硅 MOFET 栅极电压上升时间为3 880 ns，很显然碳化硅 MOSFET 比硅 MOSFET 快一个数量级。不仅如此，由于米勒电荷造成的栅极电压波形的“平台”时间，碳化硅 MOSFET 不到 100ns，而硅 MOSFET 至少要 1 μs。

反激式变换器中开关管损耗主要是关断损耗，可以通过漏极—源极电压上升时间衡量。在相同的栅极驱动条件下， 碳化硅 MOSFET 和硅 MOSFET的漏极—源极电压波形分别如图 3 和图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUlBwcJ1euAfib4xGYrF8AlEIXTpQOibh0locIYVzqqq1F0ic1h9bIHp40wQ/640?wx_fmt=png&from=appmsg)

图 3、图 4 中，碳化硅 MOSFET 的电压上升时间为 92 ns， 而硅 MOFET 的电压上升时间为 500ns，很显然碳化硅 MOSFET 明显快于硅 MOSFET。

**1.2 MOSFET 工作损耗的对比**

两种 MOSFET 的工作损耗测试结果如图 5 和图 6 所示。由图 5、图 6 看到，在栅极驱动电压约12 V 的状态下， 碳化硅 MOSFET 的导通电阻约为栅极电压 20 V 状态下的 3 倍以上， 因此碳化硅MOSFET 并没有显现优势。由于碳化硅 MOFET 的开关速度明显快于硅 MOSFET，因此在关断损耗产生明显的 差别。碳化硅 MOSFET 的关断损耗 为6.26 W，而硅MOSFET 的关断损耗则为 61.0 W。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUlicdNOCiaJrbJgxUCXBEnDaTcbVgH5MFoOE2mnpUxKu7EFIen4gLZ64QQ/640?wx_fmt=png&from=appmsg)

当碳化硅 MOSFET 的栅极驱动电压为 20 V，则结温在室温状态下导通损耗会降低到图 5 的１/４；在135 ℃高结温状态下碳化硅 MOSFET 的导通电阻也仅仅上升 20%，而硅 MOSFET 则上升240%。

**2.整机效率的对比**

相对于硅 MOSFET，碳化硅 MOSFET 的高开关速度在本实验实例中损耗明显的降低，图 7 为采用碳化硅 MOSFET 时整机的输入功率， 图 8 为采用先进的硅 MOSFET 时整机的输入功率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUlTCAPcGzrAps3eCfZ6pPFAnBgrldvCNMwo3HqRXohkrY9Gvzz5wpMag/640?wx_fmt=png&from=appmsg)

由图 7 可见， 碳化硅 ＭＯＳＦＥＴ 的输入功率为1.28 kW， 由图 8 可见， 硅 ＭＯＳＦＥＴ 的输入功率为1.33 kW；两者相差 0.05 kW，为硅 MOSFET 的高于碳化硅 MOSFET 损耗部分，占总输入功率3.8%。由此表明即使直接用碳化硅 MOSFET 替代硅 MOSFET，也会提高近 3%的效率。

实验结果如表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmGIYcXnTQp48fial5OtRZUl7kZqsibJwLhMo1vb675DBuicTnecuRgYPwwCSRDSZs6Us8ez1vAFSc3A/640?wx_fmt=png&from=appmsg)

**3.结论**

碳化硅 MOSFET 是一个性能优异的高压开关器件，不仅具有良好的阻断能力、低导通电压，同时具备了极快的开关速度，是众多的高压可关断型电力半导体器件中的佼佼者。其极快的开关速度可以用于高压、高频的开关功率变换领域。

由于碳化硅 MOSFET 栅极电荷远低于硅 MOSFET，即使是大功率碳化硅 MOSFET 也可以用一般的开关电源芯片直接驱动， 而即使是相应电压、电流参数的高性能硅 MOSFET 则需要至少 5 倍于驱动碳化硅 MOSFET 的驱动能力才能使硅 MOSFET具 有 比 较 快 的 开 关 速 度 。这 时 的 应 用 碳 化 硅MOSFET 可以应用驱动能力一般的驱动技术。或者在相同的驱动条件下， 碳化硅 MOSFET 具有比硅MOSFET 快一个数量级的开关速度。

相同的漏极电流条件下，碳化硅 MOSFET 的导通电压是高性能硅 MOSFET 导通电压的一半，在高结温条件下碳化硅 MOSFET 导通电压则可能为高性能硅 MOSFET 的 1/4。如果将栅极驱动电压提升至 20 V，则效率的提高会更明显。

本文实验结果表明， 直接将碳化硅 MOSFET替代硅 MOSFET， 可以在 20%~100%负载范围内提高整机效率 3%左右。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)