# 基于 SiC 器件同步整流的高效 Boost 电路


> 原文地址: [https://mp.weixin.qq.com/s/FrUjE6fPodJW78hu3PbfQQ](https://mp.weixin.qq.com/s/FrUjE6fPodJW78hu3PbfQQ)

**文章来源：**电源技术

**作者：**张 波， 汪义旺， 宋 佳(苏州市职业大学 智慧能源装备与电能变换协同创新中心，江苏 苏州 215104)

**摘要：**Boost 电路的效率高低直接决定着其应用效果和其所在系统的性能，提高 Boost 电路的效率至关重要。深入研究SiC 器件的特点，在 Boost 电路中采用新颖的 SiC 功率半导体器件替代传统的 Si 器件。设计了适用于 SiC MOSFET 的驱动电路，引入同步整流技术，并部分地实现了功率器件的软开关，最终设计出了高效的应用在高压场合的 Boost 电路。实验结果表明全采用 SiC 器件的 Boost 电路效率得到了较大提高，可在更高频率下工作，应用同步整流和软开关技术后进一步提高了效率。

**关键词：**SiC 器件；同步整流；软开关；驱动电路；高效率

Boost 电路在光伏发电、功率因数校正、不间断电源以及一些低输入电压等场合下有着广泛的应用。效率是 Boost 电路性能是否优良的一个核心指标。通过优化控制方式，优化电感电容设计等提高 Boost 电路效率的传统方法已有很多研究，几乎没有提升空间。新型的碳化硅(SiC)功率器件相较于传统 Si材料器件有很多优点，应用于 Boost 电路中，同时采用同步整流和软开关技术，可得到效率很高的 Boost 电路。

**1\. SiC 功率器件**

目前电力电子中常用的硅基功率半导体器件发展应用了几十年，潜力不大，其不足在高性能电力电子电能变换中越来越明显。SiC 作为一种新型的宽禁带半导体材料，有着优异的物理性能，是当下电力电子领域的研究热点之一。

SiC 的禁带宽度为 3.26 eV，Si 材料的禁带宽度只有 1.12eV。SiC 材料有较大的禁带宽度，漏电流小，因此 SiC 器件可以承受 Si 材料 1.5～2 倍的工作温度，同时 SiC 热传导率也比硅材料好很多。理论上 SiC 最高工作温度可达 600 ℃。SiC 临界场强为 3 MV/cm，Si 临界场强为 0.3 MV/cm。SiC 临界场强高，采用相同结构时 SiC 器件可以承受更高的电压。目前 1 700 V 的SiC MOS 管已推向市场，而 Si MOS 管最高耐压仅 1 000 V。临界场强高意味着在耐压相同时，芯片尺寸可以做得更小，所以其导通电阻更小。SiC 材料导通电阻是 Si 材料的 1/3～1/5，同时还能降低结电容大小。SiC 饱和电子漂移速度为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kibMTT3DEhh6gABvvE7v7tJY6EldjWMZtdL67QgJhVf4vjz5u3SHzboQ/640?wx_fmt=png&from=appmsg)，是Si 材料的 2 倍。高饱和电子漂移速度意味着电流密度更大，开关速度更快，工作频率更高。

目前推向市场的 SiC 功率半导体器件主要是二极管和MOS管。SiC 材料 SBD 比 Si 材料 SBD 耐压提高很多。用 SiC SBD 替代 Si FRD，不仅开关频率更高，且反向恢复电流小很多，可大幅降低开关损耗。SiC MOS 管有更低的门极电荷和器件寄生电容，高的饱和电子漂移速度，开关速度是 Si 材料MOS 管的 3～5 倍，工作频率可达 200 kHz 以上，甚至可达到数 MHz。与 Si 材料 MOS 管相比，SiC MOS 管在耐压、导通损耗、开关损耗、工作频率、工作温度及散热等方面优势明显，极大地提升了 MOS 管性能，并且能在很多场合下取代 IGBT并获得更好的性能。相对于 Si IGBT，SiC MOS 管其在开关频率、开关损耗、工作温度和散热上有明显优势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kJxrZNHlVhffiahvnqX7SuN2VJn5dUdwVOsxGngicicYVoTf8btVESHVmQ/640?wx_fmt=png&from=appmsg)

以英飞凌型号为 IMW120R030M1H 的 SiC 材料 MOSFET为例。该器件主要参数：电压定额UDS\=1200 V，电流定额ID\=56 A，漏极脉冲电流 150 A，通态等效电阻RDS(on)\=30 mW，最高结温 175 ℃ ，开启电压UGS(th)\=4.5 V，UGS(th)会随温度升高而下降，栅源极电压最大范围为 \-7~23 V，体二极管导通管压降为 4.0 V，体二极管性能较差。图 1 为 IMW120R030M1H 的输出特性曲线。从图 1 可以看出，在可调电阻区，同样的漏极电流时，驱动电压越高，对应的管压降就越小，即 MOS 导通电阻越小。可调电阻区，随驱动电压降低，管子通态等效电阻增加明显。因此驱动电压小，SiC MOS 管导通电阻小的优点就体现不出来。

**2\. 同步整流与软开关**

二极管的导通管压降通常都在 0.4 V 以上，在低压或对效率要求高的场合下很不适用。解决的办法就是用导通电阻低的 MOS 管替代二极管。用 MOS 管替代二极整流或续流称为同步整流。低耐压的 MOS 管目前漏源导通等效电阻可在 1mW 以下(比如 IRF40SC240 型 MOS 管)。因此用低导通电阻的MOS 管替代二极管整流导通损耗可大幅减少。MOS 管内部有体二极管，漏源极加反压内部体二极管导通，没有反向阻断能力。MOS 管体二极管的导通压降比肖特二极管高，且反向恢复时间更长。同步整流状态下，MOS 管工作在特性曲线的第三象限，电流从源极流向漏极。同步整流时，MOS 管漏极源极之间承受正压时，栅源之间电压小于其开启电压T，处于阻断状态下；源极漏极之间承受正压时，栅源之间加足够大的正向驱动电压，电流从源极流向漏极。

功率半导体器件从阻断到导通，其上电压不断下降，电流不断上升，有一很小的时间段内器件既有一定大小电压也有一定大小的电流，产生功耗。器件关断过程中其电流不断下降，电压不断上升也会产生功耗。功率器件开关过程中产生的损耗称为开关损耗。频率越高开关损耗越大，低频时开关损耗不明显，高频时开关损耗不容忽视。同步整流可大幅降低整流管导通时的损耗，但对功率半导体器件开关过程中的开关损耗却无能为力。降低开关损耗目前采用软开关技术。软开关有零电压开关(ZVS)和零电流开关(ZCS)两种。零电压开关(ZVS)指器件开通前使其电压降为零，关断时使其电压保持为零或限制其电压上升率；零电流开关(ZCS)指器件开通时电流保持在零或限制其电流上升率，器件关断前其电流减少到零。

**3\. 基于 SiC 器件的 Boost 电路设计**

**3.1 Boost 电路主要元件选择和参数设计**

Boost 电路主功率开关管闭合时，输入直流电源让电感储能，开关管断开时输入电源和电感通过二极管一起对负载供电，负载上电压高于输入的直流电压。Boost 电路结构简单，只有一个功率开关管，且功率开关管接地易于驱动。Boost 电路输入电流连续，电感足够大时可使输入端的直流电源电流波动很小。设计的 Boost 电路输入电压为 240 V，额定功率 4 kW。功率半导体器件全采用 SiC 器件。如图 2 所示，图中未画出器件过压过流保护部分。图 2 中 S1 是主功率开关管，S2 替代传统的二极管实现同步整流。S1 和 S2 都选用 IMW120R030M1H 型MOS 管。VD1 和 VD2 分别是 MOS 管 S1 和 S2 的体二极管。引入容值较小的电容 C2 实现 S2 的软开关。S1 导通、S2 截止时，电容 C2 上电压左低右高，大小等于 Boost 电路输出电压Uo。S1栅极刚加负压关断时，仍让 S2 截止，此时Ui、L、C2、C1 与负载并联构成回路，C2 上电压不断下降，当降为 0 时驱动 S2 开通，S2 零电压开通。C2 电压降为 0 时要及时驱动 S2 开通，否则VD2 导通，VD2 导通时管压降较大。S2 关断时由于 C2 的存在，S2 零电压关断。S2 关断同时开通 S1。S1 导通让电感 L 储能，同时让 C1 通过 S1 给 C2 充电，直到 C2 上电压等于输出电压Uo。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kXPc0fSHWribgnKiaAlhXOUviccXg613Skbnib1zjVbL2IgB7SnJXfVGMdw/640?wx_fmt=png&from=appmsg)

Boost 电路不连续导电模式(DCM)一般适用于小功率场合，通常情况下连续导电模式(CCM)要比不连续导电模式(DCM)效率高。电路工作频率越高，所需的电感电容就越小，DC/DC 变换器的质量体积也就越小，但频率越高开关损耗就越大。根据实际需求选取频率。本设计工作频率取 f\=100 kHz。设 Boost 电路输出电压为Uo，输出电流为Io，输入电压为Uin，输入电流为Iin，输出允许的最大纹波电压为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kSr2vLFCG4MtDNFMyOKuoGX2L3Q98tVOnRl5mb3WrZ5tD9VJBswAjiaQ/640?wx_fmt=png&from=appmsg)，开关周期为T，频率为 f，占空比为D ，CCM 模式下电感大小为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4krD8b5FolyNoYLokCqB8zuglIYKTjh2TPhCW9YvyQn0MTrkt8eUmAzw/640?wx_fmt=png&from=appmsg)

**3.2 驱动电路设计**

驱动电路对 SiC MOS 管来说至关重要。驱动电路不合要求，SiC 器件的优点就体现不出来。SiC MOS 管导通时驱动电压要足够高。SiC MOS 管结电容较小，开启电压偏低，为了防止误导通和加快关断速度，驱动其关断时通常采用负电压。考虑安全裕量，本设计中驱动电压分别取 +18 和 \-5 V。MOS 管栅极输入阻抗很高，在导通和关断的稳态下只要电压信号就可以，几乎不需要驱动功率，但其开关过程是对其栅源间输入电容Ciss充放电的过程，需要相应的功率。驱动功率偏小，开通和关断时间就会变长，会增加开关损耗，严重时甚至损坏器件。驱动电路不仅电压要符合要求，还要能提供足够的电流。

MOS 管所需的峰值驱动电流可按式(3)计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kBR61pzgdnVMZd2kwj7Z26icdc7uzlQgPO3wQwqg1OKqKwLJgZ9xldJw/640?wx_fmt=png&from=appmsg)

式中：QG为总栅极电荷；td(on)为开通延迟时间；tr为上升时间。查 IMW120R030M1H 的相关参数可知，其所需驱动电流约为2.42 A。

驱动电路以英飞凌公司 1EDC40I12AH 专用芯片为核心进行设计，如图 3 所示。输入与输出在该芯片内部进行隔离。该芯片输入侧供电电压范围为 3~15 V，信号输入引脚可与 3.3V微处理器的输出直接相连。输出侧本设计芯片采用 +18 V 和\-5 V 双电源供电。单端反激式电路多路输出为控制和驱动部分供电。输出的 PWM 信号高低电平分别等于供电的正负电源电压。该芯片输出电流配置为 4 A。门极驱动电阻越小，MOS管开通与关断时间越短。但过小的门极电阻会使器件电压和电流应力增加，振荡增加。本设计中驱动电阻大小选择如图 3所示。图 3 中 G 端子和 S 端子是驱动电路的最终输出，直接加在 SiC MOS 管的栅极和源极。图 3 电路还有一优点在于不用考虑 MOS 管是否接地。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kBqibymsESYViaUibx3Tn8mPeeDqa7JtlH2NhZDlr0MaJuyajOGlSJRWlQ/640?wx_fmt=png&from=appmsg)

**4 .实验结果**

实验以 Boost 电路在光伏发电中的应用为例。为保证实验环境的一致性，实验中采用 CHROMA 62150H-600S 电源设备来模拟太阳电池作为 Boost 电路的输入。Boost 电路的输出接蓄电池。设计的 Boost 电路称为 Boost 电路 1，实验中和另两种Boost 电路对比。第一种也是全 SiC 材料功率器件，功率开关管也选型号为 IMW120R030M1H 的 MOS 管，但未采用同步整流，二极管选用型号为 IDWD30G120C5 的 SiC SBD(1 200 V，30 A)，称其为 Boost 电路 2；第二种是全 Si 材料功率半导体器件，功率开关管选型号为 IGW40N120H3 的 IGBT 管(1 200 V，40 A)，二极管选型号为 IDP30E120 的快恢复二极管(1 200 V，30 A)，称其为 Boost 电路 3。三种 Boost 电路主电路中除了功率半导体器件外其它都相同，且都带有光伏电池的MPPT 功能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmu4icX1a2RGneUccnyZdc4kF9xN2hgsP65jBzHCRM9DvFI6eWyPXpLqzbMGpTicEaYehgQQ3avWzpw/640?wx_fmt=png&from=appmsg)

表 1 为测试的电路在不同功率时的输出效率。Si 材料IGBT 受其最高工作频率限制，高频时电路效率较低，所以实验时 Boost 电路 3 工作在 20 kHz。实验结果表明，未同步整流的全 SiC 器件 Boost 电路即使工作在 100 kHz 时也比 20 kHz工作的全 Si 器件 Boost 电路 3 效率高 1.6%以上，输出功率小时效率高得多一些。原因在于 MOS 管导通时呈电阻特性，电流越小时管压降越小。全 SiC 器件的 Boost 电路采用同步整流后效率提高 0.25%以上。频率越高，开关损耗越大，所以全 SiC器件同步整流的 Boost 电路在 50 kHz 时比 100 kHz 效率要高。Boost 电路效率提高了，光伏电池的 MPPT 效果就更好，光伏系统的效率也更高。

**5\. 结论**

Boost 电路全采用 SiC 器件后效率可提高 1.6%以上，并且可工作在 100 kHz 或更高的频率。更高的工作频率可使电路质量体积进一步减少。全采用 SiC 器件在引入同步整流后电路效率有了进一步的提高。SiC 器件作为新一代的功率半导体器件，可大幅提升电力电子电路性能。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)