# 采用 SiC MOSFET 与 Si MOSFET 的双有源桥效率仿真分析对比


> 原文地址: [https://mp.weixin.qq.com/s/BAJJdzq\_wWlMbFnmuUFyKw](https://mp.weixin.qq.com/s/BAJJdzq_wWlMbFnmuUFyKw)

**文章来源：**电源学报  

**作者：**刘昌赫，王学远（同济大学新能源汽车工程中心）

**摘要：**通过搭建单管效率仿真模型，从功率损耗角度分析 SiC MOSFET 相较 Si MOSFET 的优势。 此后结合Ansoft Maxwell 有限元分析，建立了适用于给定工况下效率仿真的变压器等效模型。 基于双有源桥双向 DC\-DC拓扑进行效率仿真，对比不同开关频率相同输入输出工况下全负载范围内二者效率差别，总结 SiC MOSFET 优势所在与适用工况范围。

**关键词：**双有源桥；仿真分析；SiC MOSFET

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcQ3Y6ubWqKhHRRM38u1IThkicZwqEceWRWVnmtxy8HAglu36JWfkKibvQ/640?wx_fmt=jpeg&from=appmsg)

Si 器件由于其本身物理特性的限制，已经达到其性能极限，不能满足一些有高温、高压和高效率需求的应用场合。 与 Si 材料相比，SiC 材料在禁带宽度、击穿场强和导热系数方面有很大提升。 基于这些特性，SiC MOSFET 相较于 Si MOSFET 拥有高耐压、高导热率和低开关损耗等优势。

双有源桥拓扑是当前常用的双向 DC/DC 拓扑。双有源桥变换器作为高频功率模块，具有小体积、高效率和高功率密度等优势。 此外由于拓扑使用的惯性元件较少，双有源桥 DAB（dual active bridge）拓扑具有控制灵活和反应迅速等特点。 该拓扑共使用8 个开关管，开关管上的功率损耗在总损耗中占比很大，因此 DAB 拓扑中SiC MOSFET 的低开关损耗特性能够进一步提升效率。 由于 DAB 拓扑输出功率范围与储能电感有关， 通过实验研究不同频率、不同功率等级下拓扑效率时需要针对不同工况绕制多个特定感值的储能电感。 因此本文采用仿真分析的方法对 SiC MOSFET 与 Si MOSFET 的双有源桥效率进行研究。

本文在 Simetrix 中搭建了仿真模型， 在单管层面上对比了 2 种 MOSFET 的损耗差别， 在效率层面上对 SiC MOSFET 的优势进行分析。 此后建立了效率仿真用变压器损耗模型，结合 Ansoft Maxwell 有限元模型搭建了双有源桥拓扑 DC/DC 等效效率仿真电路， 通过系统层面的 DC/DC 效率仿真对比了使用2 种 MOSFET 时拓扑在 3.3 kW 额定输出功率下效率， 与同功率等级的 Si MOSFET 相比研究 SiC MOSFET 在何种工况下能体现出其优势。

**1 Si 与 SiC MOSFET 单管效率对比**

随着电动汽车的不断发展，车载充电机的大功率化和双向化已成为趋势。 为了满足大功率高压高频工作需求，现阶段大功率双向车载充电机多采用Cool MOS 或同性能等级的 MOSFET 作为功率管解决方案。 Si 基器件由于其自身物理极限性能无法进一步提升， 随着续航里程的提高及快充技术的发展，可以预见 SiC MOSFET 将逐渐应用于车载充电机设计中。 本文选择现阶段应用在成熟产品中的英飞凌 C6 系列 Cool MOS，与主要 SiC 器件供应商之一的 Rohm 生产的第二代 SiC MOSFET 进行对比。 在实际工程设计及现阶段充电机解决方案的背景下，作为主流解决方案的 C6 Cool MOS 与现阶段市场占有率较大的 Rohm 第二代 SiC MOSFET 具有可比性。

本文选取处于同一功率等级的 Rohm 第二代SiC MOSFET SCH2080KE 与 Infenion 生 产 的 IPW60R075CP，选取 Level 3 MOSFET 模型进行仿真分析。 二者参数见表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmc0CTicg9yqkASlj7YfScu6bKwAl5PKQw2S1gTY0cKQCX48wWKXxhIdxg/640?wx_fmt=png&from=appmsg)

根据文献，低温下，相对 IPW60R075CP，SCH2080KE 导通电阻并无优势,即导通损耗上 SiC MOSFET 并不占优势。但 SiC MOSFET 导通电阻 Rd（on）温度稳定性较 Si MOSFET 更优秀， 在全工作温度范围内随温度变化程度低于 Si MOSFET。 另外，SiC 材料具有更高的导热系数，因此在相同功率损耗和散热条件下温度会低于 Si MOSFET。

SiC MOSFET 和 Infenion Cool MOS 都 拥 有 相对较低的导通电阻 Rd（on），意味着 MOSFET 功率损耗中开关损耗占主导。 为了对比二者相同条件下开关损耗，搭建如图 1（a）所示仿真模型。 本模型考虑实际工作中同一桥臂上管续流情形，Q2 一直关断，Q1 的 D 极连接 1 个 20 A 理想电流源。 V1 为带延迟的单脉冲。Q1 未导通时 Q2 工作在续流状态，电流经由 Q2 体二极管流向电压源 V2。V1 上升沿期间 Q1 导通， 此时流过 Q1 的电流为理想电流源电流 I2 和 Q2体二极管反向恢复电流之和，反向恢复电流会造成电流尖峰。 单次开关损耗如图 1（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmceMVzbmj00WP5EtTOrqKtp455ibLocfBxDZCtc5ialkibIq8WgjnjuTdAg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcv2qhLFPaXn0g7SFv3O16I9GtnDsIhPyOicxj7qpnKZYMFlib5Ol2YicwA/640?wx_fmt=png&from=appmsg)

**2 双有源桥拓扑效率仿真模型的建立**

**2.1 效率仿真模型的建立**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcoEKibT90UKKib7aaTb9VibyHgYTkRg88iaCuOLkmL3VaHR7LjPYbNleDSQ/640?wx_fmt=png&from=appmsg)

搭建 DAB 拓扑仿真模型，如图 2 所示。 考虑到IPW 60R075CP 体二极管续流特性， 仿真时需在MOSFET 的 DS 极间额外并联肖特基二极管作为续流二极管。 规定拓扑工况见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmciacTxEF7KY4rmAzk0C5tibzUPo93NibHwbTq7Cr8Bic6fn7rV8QmWuoVvg/640?wx_fmt=png&from=appmsg)

该工况模拟双向车载充电机中 DC/DC 输入为前级 AC/DC 输出的400 V DC 电压， 输出侧为端电压 360 V 的动力电池组。 额定输出功率为 3.3 kW。

拓扑功率损耗由 MOSFET 功率损耗、变压器功率损耗和寄生参数功率损耗组成。 本文中 MOSFET功率损耗由 Level3 MOSFET 模型进行等效。输入输出侧直流源及电感等寄生参数引发的功率损耗经LCR 仪测量实物后在电路中添加等效电阻的方式进行等效。

**2.2 效率仿真中变压器损耗的处理**

综合考虑拓扑工作特性和工况，设计变压器参数如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcby6IkaRriciazxAwxyTib0eAic7J6vjGNWZsc5DGyFBLicashOlbssoLjaA/640?wx_fmt=png&from=appmsg)

变压器损耗主要由铁损和铜损组成。 低频下变压器铜损可以用一定值电阻来等效，但在高频下变压器的集肤效应和临近效应在铜损仿真中无法忽略。 国内外已从理论、仿真及实验方面对铜损开展大量研究。 在理论方面应用最广泛的是 Dowell 模型，该模型基于 1 维情形，忽略了磁芯漏磁对损耗的影响和变压器初次级间的相互影响。 根据 Dowell模型，高开关频率下变压器等效铜损电阻可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcGiaNfnjDsyQXNclOT1ruVsWcBomwaTiabYWicO0KUm3nBhx77QJBEKHQA/640?wx_fmt=png&from=appmsg)

变压器铁损密度（单位为 W/kg）表示单位质量铁芯损耗，由磁滞损耗、涡流损耗和剩余损耗组成。

其中， 磁滞损耗与磁通密度 B 和开关频率 f 成正比，涡流损耗与 B2、f 2 成正比，剩余损耗正比于 B 和f。 因此铁损可由改进的 Steinmetz 公式描述为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcRxJEobG2vTa2hohslUmOERNU4Yp3rEUPDgaiaPf4KK9wWX9bp9I1zyw/640?wx_fmt=png&from=appmsg)

式（3）右边第 1 项表示磁滞损耗成分，第 2 项表示涡流损耗成分， 最后 1 项表示附加损耗成分。传统模型中，一般认为 kh、ke、ka 为常数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmc8r0Mq0KsRl3kTIxkfJ8S6ZDG63xWTJ30cYk0HCP669Wu0vxRvc149g/640?wx_fmt=png&from=appmsg)

本文中 DAB 拓扑工作在稳态下，f 与 B 在 1 个周期内平均值不随时间改变，因此可近似认为当工作电压不变时，在某一确定开关频率下变压器铁损为定值。 利用 Ansoft Maxwell 建立变压器三维模型，设置磁芯材料为铁氧体，导入磁芯 B鄄P 曲线对模型进行仿真分析， 计算所 需工况下铁损。 在Maxwell Circuit Editor 中建立电路模型， 对拓扑进行等效， 如图 3 所示， 在开关频率 fs=50~500 kHz下，以 10 kHz 为步长进行仿真分析，求取不同频率下铁损 Pc 平均值作为后文仿真实验中铁损等效值。 求取的不同开关频率下变压器铁损见图 4。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcq1tT3iaUBkVzKW1y69ic5CVrHyQW9I35dGFibSkB37NcMfomFCmXTIaTg/640?wx_fmt=png&from=appmsg)

可见随开关频率升高，变压器铁损减小。 法拉第电磁感应定律为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcgGicbcFZTAVQ2malaLbWk5aNC7iclPhM60KTiaRA5Tt6lLKokfCe6S1NA/640?wx_fmt=png&from=appmsg)

式中：U 为感应电压；N 为线圈匝数；f 为工作频率；S 为有效磁通面积。

在相同变压器的同一工况下，f 与 B 成反比。结合式（3），当系数 α 大于 1 时，工作频率的升高能够降低变压器铁芯损耗。

**2.3 拓扑效率定义**

本文 DAB 拓扑采用桥间移相控制， 其输出功率可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcr2XEERJb7dibSYr5e4jRoibiaVFp7EAicBSleDns5fbtzDXkG3O5nvbPKA/640?wx_fmt=png&from=appmsg)

式中：θ 为移相角；Vo 为输出电压；Vi 为输入电压；L为储能电感；ω 为角频率。 可知移相角 θ 决定功率传输的大小和方向，当 θ\=0 时传输功率最小，当 θ \=π/2 时正向传输功率最大。 当 θ \=π/2、 fs=100 kHz时储能电感电流 iL、 输入电流 iin 和输出电流 iout 波形如图 5（a）所示，稳态电流波形如图 5（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcG1f3SYiaQHzp7F8wbNnibMiaoQjL2GhNfDBa20Wh2oBiaqTaJLEww1JvoA/640?wx_fmt=png&from=appmsg)

由于输入输出电容的存在，流经输入输出电压源的电流均为直流量，且由于电压源特性和输入输出电容的稳压作用，输入输出两端电压稳定，则定义拓扑效率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcz1SLhIyqDcLyjVJeUh8SGibRINz2zcoXBTkphcaCXQibTnYw1QseVBEA/640?wx_fmt=png&from=appmsg)

为输出电流在 1 个周期内有效值；Pin 为输入平均功率；Vin 为输入电压；Iin（AVG,cycle）为输入电流在 1 个周期内平均值。

**2.4 拓扑层面仿真模型验证**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcKOIMfmwsm6C2vyNwc4uUM3icqiaxxkUI6FsD90R4gEeoJ6Z07DyXDk2g/640?wx_fmt=png&from=appmsg)

基于仿真模型参数，在 fs=100 kHz 工况下搭建原理样机，其样机实物如图 6 所示。 在表 2 的工况下进行实验，调节移相角 θ，采集输入输出电压电流，由式（6）计算全负载范围内拓扑效率。 实验结果与仿真结果对比见图 7。 可以看出仿真结果与实验结果基本吻合。 低功率范围内吻合程度较好，高功率 范 围 下 误 差 稍 有 增 加 。 这 是 由 于 仿 真 系 统MOSFET 散热环境由电阻电容网络进行等效，模拟稳定的散热环境，与实际样机散热环境有差别。 低功率下散热环境影响不明显，高功率下影响逐渐显现。 但效率误差最大不超过 5%，仍满足本文拓扑效率研究的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcN3z0BnZ4dMAAOh9Sq2xQntsLxFbuA9ibJ0BhviaTSyREKqX8asAFY2HA/640?wx_fmt=png&from=appmsg)

**3 基于 DAB 拓扑 SiC 与 Si MOSFET效率对比**

**3.1 不同开关频率下全负载范围内效率对比**

由式（5）可知，移相角 θ 决定传输功率的大小和方向。分别用 SCH2080KE 和 IPW60R075CP 搭建DAB 拓扑仿真模型， 分别在开关频率 fs=50、100、150、200 kHz 条件下对移相角 θ 进行参数扫描，得出全负载范围下的效率曲线，如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcQzYA70jKjdQXiaTiaicf9EewZGYLwjvGibr7X1yafwpOuBGKIcysrdNvwg/640?wx_fmt=png&from=appmsg)

由图 8 可见，同一开关频率下，随输出功率上升二者效率差逐渐减小；同一输出功率下，随开关频率上升二者效率差逐渐增大。 下面通过推导应用 2 种不同MOSFET 时拓扑效率表达式来解释该结果。

Si MOSFET 的拓扑效率为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmcNPEBFOB65InBBNk67yFqmvVSLGlbvmibr9XwtyLoAo1133zeAlbCGEw/640?wx_fmt=png&from=appmsg)

在 fs=100 kHz 下，额定功率处 SiC 与 Si 的效率并无太大区别。由式（1）知，二者 MOSFET 功率损耗差值为 8 倍于单管损耗。 100 kHz 频率下 ΔPmos 较小，二者效率差别不大。 考虑到 SiC MOSFET 与 Si MOSFET 的成本差， 从效率角度来讲 SiC MOSFET在开关频率较低的情况下并无太大优势。

同理，在 fs=200 kHz 下，额定功率处 SiC 与 Si的效率相差约 7%，说明开关频率越高，越能体现出SiC MOSFET 低开关损耗的优势。 此外由于 DAB 拓扑使用 MOSFET 数量较多， 使得 MOSFET 功率损耗成为系统损耗主要组成部分。 MOSFET 功率损耗等级对拓扑效率有较大的影响，因此 SiC 的使用能有效提高 DAB 拓扑效率。 从开关频率极限的角度来看，SiC MOSFET 最高开关频率远高于 Si MOSFET，能够达到兆赫兹级别。 因此 SiC MOSFT 的应用使得高频双向 DC/DC 转换器的实现成为可能。

**3.2 不同开关频率下额定功率点处 Si 与 SiC MOSFET 性能对比**

搭建 DAB 效率仿真模型，在上述给定工况下，在 fs=50~200 kHz 频率范围内进行额定工况点处稳态输出效率分析，对比曲线如图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsneBkk3j3pTicHbGD5vtVkmchGp2XOHnCEBAWC5fP2HlZmYFn1KRgiaWWtS9via264v7ok71ibD5picXiag/640?wx_fmt=png&from=appmsg)

SiC 材料在禁带宽度、 击穿场强和导热系数方面有很大提升，相较于Si 材料，能实现更高的开关频率。且开关频率提高到200kHz后额定功率处的效率仍处于一个可以接受的范围内，在相同功率等级下额定功率处效率下降不大，意味着在开关频率提高后 SiC 能够发挥其固有优势。

开关频率的提高对双有源桥拓扑双向 DC/DC变换器有着重要意义。 通常 DC/DC 变换器拓扑损耗主要来源于功率 MOSFET 损耗及变压器损耗。开关频率的提高意味着电感和变压器等磁性元件体积减小， 能够大幅缩减 DC/DC 体积， 提高功率密度。 此外提高开关频率还能降低变压器铁损。

**4 结语**

本文通过 Si MOSFET 与 SiC MOSFET 的效率仿真对比，分析了 SiC MSOFET 提高拓扑效率的机理，从功率损耗角度讨论了 SiC MOSFET 相较于 Si MOSFET 的优势。 相对于 Si 材料，SiC 材料的高耐压、 宽禁带和高导热率特性使得SiC 更适合应用在高功率密度和高开关频率的场合。 在低压、低开关频 率 下 情 况 下 ，SiC MOSFET 相 较 于 高 性 能 Si MOSFET，如英飞凌 Cool MOS 系列，对效率的提升并不明显，但随着电压等级、功率等级和开关频率的提高，SiC 优势逐渐显现。 在高频场合 SiC MOSFET 具有显著优势，这使得高频开关电源设计成为可能。 与此同时，高开关频率带来的磁性元件小型化和功率密度的提升将使采用 SiC MOSFET 的充电机在实际产品应用中更具优势。 同时考虑到快充技术的发展和高压充电的应用，SiC MOSFET 将在今后的设计中发挥重要作用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskXJicOSziau2VPdSibn5Povt1f8KuRrjdP1t0jP0OiaHibI2iakYxmMHiczyvlgnpRYewLlbF9KRQQFVL6Q/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)