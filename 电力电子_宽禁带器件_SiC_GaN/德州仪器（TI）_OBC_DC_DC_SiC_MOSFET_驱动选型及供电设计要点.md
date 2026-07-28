# 德州仪器（TI）:OBC DC/DC SiC MOSFET 驱动选型及供电设计要点


> 原文地址: [https://mp.weixin.qq.com/s/FmgdcY50t8nCKAfrgelFag](https://mp.weixin.qq.com/s/FmgdcY50t8nCKAfrgelFag)

**文章来源：**德州仪器（TI）

**摘要：**新能源汽车动力域高压化、小型化、轻型化是大势所趋。更高的电池电压如 800V 系统要求功率器件具有更高的耐压小型化要求功率拓扑具有更高的开关频率。碳化硅（SiC）作为第三代半导体代表，具有高频率、高效率、小体积等优点，更适合车载充电机 OBC、直流变换器 DC/DC、电机控制器等应用场景高频驱动和高压化的技术发展趋势。本文主要针对 SiC MOSFET 的应用特点，介绍了车载充电机 OBC 和直流变换器 DC/DC 应用中的 SiC MOSFET 的典型使用场景，并针对 SiC MOSFET 的特性推荐了驱动芯片方案。最后，本文根据 SiC MOSFET 驱动对供电的特殊要求，对不同供电设计方案的优劣势进行了分析。

**目录：**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMXiaZBgZwiaQNTSnffic9ib7ib7hS0QPg6kaUibke4puB3SEPVG7JU3APuiasksaGxib5SibNm7JceJibI7vp6cy9T8O7IYznNdJ7QYHZsQ/640?wx_fmt=png&from=appmsg)

**应用资料：**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM6TTmIyqEibNN3xzXNp09aXRUvzD88qmXH0Um2KgYaYyZRXgojicb8PwrTrnbYqdndqCpk87SwibicDVwGrPHPOdrNLu4LicZpp8mo/640?wx_fmt=png&from=appmsg)

**1\. OBC DC/DC 中 SiC MOSFET 应用场景**

**1.1 OBC DC/DC 常见功率级架构**

车载充电机 OBC 和高压直流变换器 DC/DC 组合为常见的动力总成组合形式，两者可以共享机械外壳和冷却系统，提高功率密度，优化成本。

OBC 通常分为 PFC 和 DC/DC 两级。PFC 级为并网的 AC/DC 变换器，将输入的单相或三相交流电变换为直流母线电压。受电网基础设置分布的影响，在中国单相交流电桩更为普遍，而在国外其它区域如欧洲，三相交流充电在逐渐成为主流。对于单相交流输入的 PFC，其输出直流母线电压通常为 400-600V，而对于三相输入的 PFC，其输出直流母线电压通常为 700-1000V。由于单级 PFC 输出的直流电流有比较大的低频波动，所以典型的OBC系统在PFC级后还有会DC/DC变换器级，其输出给车载高压动力电池供电。对于常见的 400V或 800V 电池系统，OBC 输出电压通常为 230-450V 与 450-900V。

由于车载用电设备大部分为低压供电，所以动力域还需直流 DC/DC 变换器将高压动力电池的能量变化为低压，为 12V 负载系统及 12V 电池供电。

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMBjhiaFic0UL6kPkkv2jiaCpR6ZxHnAuK32DQEe6bzdeGK3jy1pJ2TNg1GtFmup4DNLvR8OhOYIMvTWDLognNpjRPThY0OSqtdEI/640?wx_fmt=png&from=appmsg)

**1.2  400V 电压平台 OBC DC/DC 系统中 SiC MOSFET 应用场景**

目前新能源汽车动力域高压化是大势所趋，但受电池成本高昂等因素影响，目前 400V 依然是业界主流选择的动力电池电压等级。 下面将分别介绍在 400V 电压平台下，单相和三相 OBC 系统中 SiC MOSFET 的使用场景。  

**1.2.1  400V 单相OBC 系统中 SiC MOSFET 应用场景**

在 400V 单相交流输入的 OBC DC/DC 系统中，不论是 PFC 输出的直流母线电压还是 OBC 整体输出的电池电压，其波动范围都在 Si 硅基 MOSEFT 可以承受的电压范围之内。然而，随着对系统功率密度要求的逐步提升，传统二极管整流桥 Boost PFC 电路不能再满足效率和散热的要求，无桥 PFC 如图腾柱 PFC 在逐步成为业界主流。在图腾柱 PFC 拓扑中，可以利用碳化硅 SiC MOSFET 高频开关、反向恢复低和导通电阻小的优势，大大提升系统效率和功率密度，如图 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMW9OyXOQasGqAHwiabpLjM488FxJ0I1QSODC4MCyT1JD4E3qlIjHhFzfh58warTj7oe2DdyyzE8JK9qdfmQSOguibiczCIJV7DMI/640?wx_fmt=png&from=appmsg)

图腾柱 PFC 通常由快桥臂和慢桥臂组成，快桥臂由 SiC MOSFET 构成，通常开关频率可高达 100kHz。慢桥臂开关频率为工频，即 45-65Hz。对于单向 OBC 而言，慢桥臂可使用二极管。对于双向 OBC，即需要高压电池反向向电网或负载馈电的场景下，慢桥臂需要使用 Si MOSFET 或 Si IGBT 以支持能量的反向传输。为了进一步减小纹波和前级滤波器的体积，也可采用两相快桥臂交错并联的方式。图 3 和图 4 以双向 OBC 为例，示意了 SiC MOSFET 在图腾柱和交错并联图腾柱电路中的用法。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMRgXxoKjGYWfyPfScLVaaUPvicVxrxibW47MtQ7NcKbuegjZfaOkicOBjU5Dmykjibdl3CxRteWZrMHLTpMib7tX7j1ze2EpBUR4FE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMr95FptiaIYqdYiaSmGx3U5FasR9iavvv2btJlB5RLAGlpFzaLS2Sj7P2uKSZTvAxSxiacEUmuPqMG7tWvE2jVwicaxiaacb0zdJkmU/640?wx_fmt=png&from=appmsg)

**1.2.2  400V 三相 OBC 系统中 SiC MOSFET 应用场景**

对于三相交流输入的 OBC 系统，其 PFC 输出的母线电压通常可能高达900V。在这种情况下，考虑到高耐压与高效率的要求，通常选用 SiC MOSFET 而非 Si IGBT 作为开关管。OBC 的 PFC 及与 DCDC 级的原边侧都需使用SiC MOSFET，如图 5 所示。图 6 展示了以 400V 电压平台，11kW 双向 OBC 为例的系统中 SiCMOSFET 的使用位置。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOgvnMbZOTibLjTiaXf2voEletGsI1g0kxWJhoRLb3W45IkVvOJxTwibictQFyjOIvgQgGjEr0RiabeLBbGyEDn4kRu3zZJsgZWlvQk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNEQQ1zrsbzZcHEtnS9ibBohGaftce25e9EfQbTiaoHxjEViaNGg8iaEeVF5tl8WdWeYshxLj7XSnG7zFmz7oFMyfTVxmkNhEaU5sM/640?wx_fmt=png&from=appmsg)

**1.3  800V 电压平台 OBC DC/DC 系统中 SiC MOSFET 应用场景**

在相同充电电流情况下，电池电压从 400V 升级到 800V 后充电速率可以加倍。为了满足大功率快充，动力域也需要持续向高压化演进。当动力电池电压平台升级到 800V，OBC 及 DC/DC 电源产品都需要从 400V 等级提升到 800V 电压等级平台。此时不论是单相或三相系统，OBC 的两级和高压转低压 DC/DC 高压侧的开关管都需要使用更高耐压的 SiC MOSFET 器件以满足系统电压等级的要求下，如图 7 所示。图 8 以 800V 电压平台下三相 OBC 及移相全桥 DC/DC 拓扑为例，说明了系统中 SiC MOSFET 的使用位置**。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM5ZxhhuUlFx5w5dmAOG0SBdGyDAVP9xRh3icn5d2NiaLYBAJRhiawSMweyWI2Y9HnS0OPy9ibggiaYb55YDXq4yeRxRSEiavwAlOueI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPOUlgM7gQOmCCxYofA9anvKYH2T3icBmgBdarQcXwibXnoZLuMw0sFWehibubvia7MCbFJqJ9m01egEj29qHxRjkr4B0tENx3IqDE/640?wx_fmt=png&from=appmsg)

**2\. SiC MOSFET 应用特点**

**2.1 SiC MOSFET 应用特点**

如前文所述，SiC MOSFET 在 OBC DC/DC 系统中的应用场景多为高电压和高开关速率的场合，因而在开关时的 dVds/dt 比普通 Si MOSFET 显著增加。以桥式电路为例，在上管快速开通、下管关断时，下管的 Vds 会升高，此时电荷通过米勒电容 Cgd 转移至下管门极，会造成门级电压出现一个小的尖峰。根据厂家和沟道技术的不同，SiC MOSFET的阈值电压一般为2V至5V。如果在这一过程中串扰造成的电压抬升幅度超过了SiCMOSFET 开通的阈值电压，可能会造成下桥臂的误开通，从而导致上下桥臂直通，造成系统短路损坏等严重后果。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPmzBQHtbERYuy8Dyw1SuRsniaPnxhveicnPl9hXT6LHuyjdqwT8u1IRsWdXqTAKwshfRwhibWhAKicR9icjwDok2LUXibU1t1nLExX4/640?wx_fmt=png&from=appmsg)

**2.2 SiC MOSFET 驱动选型及设计要点**

**2.2.1 驱动电流**

驱动 IC 一般是通过拉电流 (source current)和灌电流(sink current)来给栅极电容充放电，从而实现 MOSFET或 IGBT 的开关的。为了实现 SiC MOSFET 快速开关的特性，以达到更低的开关损耗和更高开关频率，通常会需要更大的驱动电流。

驱动芯片手册通常会标注其能承受的拉电流和灌电流的最大能力， 下图 10 展示了 TI 双通道隔离驱动芯片UCC21530-Q1中对拉灌电流峰值的描述。一般来说这也对应着驱动芯片输出级 MOSFET 的饱和电流。但是实际系统中最大的电流往往与供电电压、驱动电阻与驱动回路寄生参数等参数相关。图 11 展示了开关过程中驱动回路栅极电容充放电的路径。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMzQBIFlqvXQeO2dIT3QqVxmlgL1ibbSLqibUBibMouUWhnsGrpMtpiaTheNHs0ZIbZeUJFdzMRQ6mXoulMjkngfp7pPbRQphFKPSw/640?wx_fmt=png&from=appmsg)

图 11 展示了开关过程中驱动回路栅极电容充放电的路径。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOnib9DhTx2P1BjnBtlDibibicQpKesS65cGNX4ickm9e9gAyoefPeQ8BzuBOyNYcyKQgv1vVMC1ZZiaxicnkm1fg8PlogUxaw1twH2ZI/640?wx_fmt=png&from=appmsg)

实际驱动过程中拉灌电流的峰值往往受限于驱动回路的阻抗，这既包括了驱动芯片内部的上下拉推挽级内阻ROL,ROH, 也包括了外接的驱动电阻 Rgate\_ext和 MOSFET 的栅极内阻 Rgate\_in。

以 UCC21530-Q1 为例，实际芯片开通和关断驱动电流的最大值为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPcB0B6POAZPEGm0mgUfBv5jSiaoIQxFUEyojRzXSaHWhnibjdEvtkL3ro54oSuoHUqKvmlquqDCvVMRTd9YAxNJzdzLxG5ZNIEw/640?wx_fmt=png&from=appmsg)

其中 ROL,ROH和 RNMOS的数据一般芯片数据手册中都会给出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNcLYkkX35SWmTNwULicEOudicvfNHIUichfdfb7zvwm2HKXxLxCB6twYY64JY8tkuYH5ZJDKlPSZOSL6lAC9U5jpIgKOIicP7Qibgo/640?wx_fmt=png&from=appmsg)

MOSFET 的开通过程与对管 MOSFET 体二极管关断同时发生，所以开通速度有时受限于体二极管的反向恢复特性。另外过快开通容易造成串扰，引起对管的误导通，因而需要加以限制。而 MOSFET 的关断速度只取决于驱动电流本身。更小的关断电阻可以增大关断电流越大，提升关断速率, 降低开关损耗。

如果希望通过外围电路实现更快的关断可以使用如下图 13 的电路接法。在开通过程中二极管阻断了流过 Rgl的路径，外部栅极驱动电阻为 Rgh。在关断时，外部栅极驱动电阻为 Rgl 与 Rgh 并联，驱动电阻更小。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPd87L83ia3HvQEic11SBgfQHYv4GvXibbCe3YodMxKolWZx21jRUvwctuPtkUibVWgUXqnxGlyxak6VcMu1C3vumfjb4RfhFtWlCE/640?wx_fmt=png&from=appmsg)

**2.2.2 负压驱动**

为了规避开关过程中产生的桥臂直通风险，通常 SiC MOSFET 需要使用正负压驱动，即通过负压关断确保关断过程中即使出现小的电压尖峰，也不会超过阈值电压致使 MOSFET 开通，如下图 14 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOyYVvDic1yanzZW6te6zoQOn5XDNYnYaIq2HYl39syyxzTEupibyFQw5AuibJ0J6Z29fqbNNuAPR0DzpiaJreZRFLd9TZrbWr32ibs/640?wx_fmt=png&from=appmsg)

**2.2.3 米勒钳位**

另一种常见的防止 SiC MOSFET 误开通的方式是搭建米勒钳位电路或使用具有米勒钳位功能的芯片，如 TI的单通道隔离驱动芯片 UCC5350-Q1等。

如图 15 所示，米勒钳位功能主要通过采样栅极的电压并与阈值电压相比较，当栅极电压低于阈值电压后比较器反转，使得内置的米勒钳位 MOSFET 导通，形成一条低导通阻抗的路径。这条低阻抗路径可以将 SiCMOSFET 栅极有力关断，从而避免误导通。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMrGdnbcATFFicvuN1bQnBD9ick8RPTtTpj9E8zNMNe0jqzJ3GpvHHvZaFfXF2YUh0sbJM2bpg68FADepdnzvchcEUtgVtQsSZQc/640?wx_fmt=png&from=appmsg)

设计米勒钳位电路也需要注意驱动芯片需要尽量靠近开关管。如果布板不够优化，米勒钳位回路过大，可能会由于走线上寄生参数的影响，使得低阻抗路径不够有效，反而会增大栅极震荡。

**2.2.4 欠压保护点UVLO**

SiC MOSFET 具有高功率密度的特性， 一般会使用较高的驱动电压以使得 MOSFET 完全开通，从而得到最小的导通电阻，最低的导通损耗和最大的电流输送能力。驱动芯片的欠压保护点 UVLO 决定了开关管可以正常工作时最小的驱动电压 。如上述 2.2.1 小节所属，为了防止 SiC MOSFET 的误开通，SiC MOSFET 驱动一般会使用负电压供电。此时需要注意，对于大部分无单独 COM 脚的驱动芯片来说，芯片的 UVLO 通常参考的是芯片 VEE/VSS 脚。

以SiC MOSFET C3M0016120K为例，其导通阈值典型值为 Vth=2.5V，以系统设置负压驱动为-5V 为例。如果使用 8V UVLO 的驱动芯片，实际 SiC MOSFET 可以工作的 Vgsmin 为 8V-5V=3V，仅略高于芯片的导通阈值，此时 SiC MOSFET 的导通阻抗由完全开通是的 16mΩ 上升至 Ω 级。可以看出 SiC MOSFET 驱动电压不足时，导通阻抗会迅速提高，可能造成系统短时间内迅速过热，对 MOSFET 长期可靠性和系统安全都有极为不利的影响。因而一般建议选择欠压保护点 UVLO 为 12V 的芯片，如业界广泛使用的 TI 双通道隔离驱动 UCC21530-Q1 ，新一代双通道隔离驱动 UCC21551-Q1或单通道隔离驱动 UCC5350-Q1, 从而对 SiCMOSFET 驱动供电进行及时保护，减小此类风险。

**3\. SiC MOSFET 驱动供电方案**

**3.1 自举供电电路** 

如前文所述，SiC MOSFET 驱动芯片一般需要足够的正向驱动电压，以保证 MOSFET 完全开通，同时也需要负压进行有效关断，防止串扰。如果使用传统的自举通电的方式，由于自举供电电压建立需要时间，可能会存在前几个周期开通关断电压不足的限制 。

**3.2 基于双路低边驱动芯片的隔离供电方案**

为了避免此类问题，可采用隔离供电的方式给 SiC MOSFET 驱动供电， 常见的方式有全桥谐振电路等。业界主流方式为用双路低边驱动如 TI 的 UCC27524-Q1 的两路输出直接驱动变压器实现隔离供电，如下图 16所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMIttY2aIe6S0z220a597YTzBEGomjsJnso0iaQwicb8obbdRTpduKfAxpKYyUjPGokhoos9NE1viaLxPibRMSGtY8KVbbYPvzfHag/640?wx_fmt=png&from=appmsg)

然而，使用双路低边驱动芯片如 UCC27524-Q1 驱动脉冲变压器，搭建隔离供电电路有以下几点局限性：

• 首先，这种方式需要 MCU 或 DSP 提供驱动的输入信号，而辅源供电部分与主控芯片信号电路部分通常距离较远，走线较长。输入走线上寄生的电感和电阻容易在芯片输入管脚耦合噪声，超过芯片输入规格要求，需要增加额外的输入侧防护。

另外，不同于驱动 MOSFET结电容的容性负载，驱动芯片驱动变压器等感性负载时，输出承受负压和反向电流的能力有限，因而常常需要在驱动输出测进行有效保护。

需要注意的是，UCC27524-Q1 等芯片的输出负向耐压一般为二极管压降 0.3V。这时如果选择普通 PN 二极管，其较大的正向导通压降(~0.7V) 常常使其不能在超出负向耐压限值时及时起到保护作用。通常建议选择正向导通压降更小的肖特基二极管进行负电压的有效钳位, 如 BAT54S.

针对这一应用场景和典型电路，TI 推出了新一代产品 UCC27624-Q1，提升了输入侧负压耐受能力至-10V，输出负压耐受能力提升为-2V，与输出反向脉冲电流承受能力。使用 UCC27624-Q1 后，可以不需上图中红框标出的钳位保护电路，大大减小系统成本和板面积。

**3.3 基于开环 LLC 拓扑 UCC25800-Q1 的隔离供电方案**

尽管 UCC27624-Q1 芯片的鲁棒性和管脚电应力承受能力更强，但是此方案仍然有其应用的局限性。因为变压器漏感上产生的压降会影响驱动电压，占空比和系统 EMI 表现，对系统应用不利。工程师一般为了减小漏感，对变压器会采用三明治绕法。这种绕制方式会增加变压器的层间电容，对 SiC MOSFET 高电压和高dVdT 应用工况下更加严苛的 CMTI 要求不利。针对上述应用的局限性，TI 推出了开环 LLC 控制芯片UCC25800-Q1作为驱动变压器隔离供电方案。

LLC 拓扑中，变压器漏感可以作为电路的一部分参与谐振，因而不需要刻意优化。这时变压器可以使用分立式绕法 。这种绕制方法的分布电容可以做到低于 2pF，漏感参与 LLC 电路谐振，便于系统 EMI 整体性能的优化，且 CMTI 可以做到高于 150V/ns。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOwW8NHbp4tl3gbpZLKcJTdT8Oq8fIzW00P7PeZTQ3UAYrPCP6HlIqaOVAVNRzicxa2aYdxjg8NPJFS0YkY1cJgR61YOGfygM64/640?wx_fmt=png&from=appmsg)

另外，UCC25800-Q1 设计时不需要额外来自 MCU/DSP 的输入信号，因此不受主控芯片布板位置的影响。直接通过调节外部电阻即可调整开关频率，外围设计简单。同时，其输出级专为驱动变压器类感性负载设计，天然承受负压与反向电流的能力更强。在 LLC 电路变压器副边侧，仅需使用两颗二极管，相比于基于双路驱动的方案节省了两颗二极管的成本 。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNsYAZmQuVaSceIIMuuhCrwaI78tXhnCF8pic8QDuYHh7Bzwo2EL2BfIGOkbTmicP6svdcLHPsL4Hr9J5zJicOsx9tKOgZT1hTbbU/640?wx_fmt=png&from=appmsg)

开环的 LLC 控制器需要工作在固定的输入输出电压条件下，因此前级需要增加 Boost 或 Sepic 电路使UCC25800-Q1 的输入电压稳定，具体可以参考文献\[16\] 中 UCC25800-Q1 评估板的设计方案。

**3.4 基于推挽拓扑 SN6507-Q1 的隔离供电方案**

另一种优化系统 EMC 表现的方式是使用推挽架构的辅源供电方案。推挽变压器一般为中央抽头架构。对称的两个开关管除死区时间外互补导通。这使得推挽电路有稳定的输入电流，同时在输入产生的开关噪声也更少。双端对称性好的推挽架构通常比单端驱动架构如反激的 EMC 表现更好。另外，更低的峰值电流也可以使得总导通损耗更小，效率更高。

TI 最新一代的开环推挽变压器驱动方案为 SN6507-Q1。除了推挽拓扑本身的优势外，SN6507-Q1 更独特的优势还包括：

• 3-36V 宽输入电压范围。可以适配不同的一级电源输出电压，适合平台化设计选型。

• 内置开关管最大电流 0.5A，可以支持多组驱动供电。

• 占空比调节功能。当输入电压波动范围小于±35%时， SN6507-Q1 可以通过占空比调节来补偿输入电压的波动，节省前级稳压电源。需注意使用此功能需要在推挽输出端额外增加一电感。

• 开关管斜率控制和展频功能可以进一步减小系统共模噪声，优化 EMC 表现。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMY6NQQYXUf97atibPOticyflmeIBCuica22mMtWnLicpVydbO8ictn42wqKKccv7NQXosLtOb7xw1f97sseXKYziaDUUNkCR4eq4f9g/640?wx_fmt=png&from=appmsg)

需要注意的是 3.3 小节和 3.4 小节的介绍的 UCC25800-Q1 和 SN6507-Q1 都为开环的变压器驱动方案，因此其输出电压范围会随着负载变化产生波动。如果需要达到小于 1%的精度，可以通过基准电压源如 TL431-Q1或 LDO 芯片 LP2951-Q1, TPS7B84-Q1等再进行稳压。

**3.5 集成变压器供电方案****UCC14240-Q1**

针对 OBC DC/DC 系统对系统尺寸和功率密度越来越高的要求，TI 也推出了内部集成平面变压器的 IC 方案UCC14240-Q1。芯片同时也内置了 MOSFET 并集成了控制环路，因而外围只需很少的阻容元件即可完成电路设计，大大减小了总方案的面积和高度，也有利于产线的自动化生产。同时，UCC14240-Q1 还可以配置成为两路输出，适用于 SiC MOSFET 驱动这类需要正负压供电的应用场景, 满足了 SiC MOSFET 负压关断的需求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO3l4cltia1VHHP3ibibVxibqPhsGEUnoyYWwQeSt0PvIJOJkjMHXkOKdU53uMEoGiaDo2XWmh8HSoMRLpvjXibFbIYVyl5XL0IDJjEo/640?wx_fmt=png&from=appmsg)

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOSYHJNsnHOnnVECLQRPeBEktlnIyBAVy4BxZ0eYvicLplBsdLtFTNhnCar1YCPe4w4vqqWPZ3NgAZbFKDJFEic4JlGRwiaEauM2E/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPHsydwrBOTDqh3M4onBLoS5lOiaxpFggoMZ7mXkBUhpsQrJfWQDSoQzBSYmCDeok4JwFcsrXaqqKsqq8u2JoZQoDTC193DQ8Ts/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZd7Zia8ibj1uNTNIsfj5jAAdV9iaY9PTgiaqI7FPia8R6ql7hiafqZndDiaOkFS0uW0SaNByadWGNpHz2xUC3EGQMibB5qEeDyPib9ic8w/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMw38OT8UAkiatk9ngBHUvN9gVSrtqxBwT5YsvugXvBfDicJqdIqF1hIDQXbG0ugtOQibfWfb3eWRB3ByTPnmgQRgRFbb4iaXGLhwo/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)