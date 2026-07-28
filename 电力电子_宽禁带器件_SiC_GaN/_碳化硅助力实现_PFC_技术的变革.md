# ​碳化硅助力实现 PFC 技术的变革


> 原文地址: [https://mp.weixin.qq.com/s/U2Wb8j1iMhRTxMC0sDmZCA](https://mp.weixin.qq.com/s/U2Wb8j1iMhRTxMC0sDmZCA)

**文章来源：**Wolfspeed 

  

**作者：**Wolfspeed 产品市场经理 Eric Schulte

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIrmyWWogWU9YqEqWe2pMSoWYicMdIkWBJvKHANIZZBTRGDXC7ia3aZqoA/640?wx_fmt=jpeg&from=appmsg)

  

PFC（Power Factor Correction）是一种技术，即为功率因数校正，旨在通过提高电力系统的功率因数来减少电力系统中的无功功率和能源浪费。在电力系统中，功率因数表示实际功率与视在功率的比值。如果功率因数低于1，说明有大量的电能被浪费，电能的消耗效率低下。  

在实际应用中，许多设备（例如计算机电源、LED驱动器、照明设备等）具有非线性负载，这些设备的功率因数通常很低。这些非线性负载会导致电流波形不规则，因此需要一些额外的措施来改善功率因数。  

功率因数校正技术的原理是在电路中添加电感或电容等元件，使电路中的电流和电压波形同步，从而提高功率因数。PFC技术可以有效地减少无功功率和电网负荷，提高电能的利用效率。另外，校正功率因数也可以减少电力系统的噪音和振荡，提高设备的寿命和可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslfibTJ5Z75cRquBFrd2BMkIeumtfYcf7OG5ciafw9IdCCbjJKTZfVsAibROqogstkEeqtDiaSibfzVMdQ/640?wx_fmt=png&from=appmsg)

碳化硅（SiC）功率器件已经被广泛应用于服务器电源、储能系统和光伏逆变器等领域。近些年来，汽车行业向电力驱动的转变推动了碳化硅（SiC）应用的增长， 也使设计工程师更加关注该技术的优势，并拓宽其应用领域。

  

**选择器件技术**

  

无论应用领域如何，每个电源设计都是以回答一些相同的基本问题着手进行的：输入电压、输出电压和输出电流分别是多少？接下来，设计人员要考虑他们力图在最终产品中实现的性能标准。目前，电源设计人员可以利用多种器件来满足这些标准，包括氮化镓（GaN）、碳化硅（SiC）和各种基于硅（Si）的技术，如 MOSFET、绝缘栅双极晶体管（IGBT）和超级结（SJ）器件（图 1）。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc84r7zQuUiblB0jOPI3BicytFYjo70a2WEr2TVHhZhWbO2licxfialMfOlQWg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1：这些技术都有各自的优势和最适用的应用领域

  

当额定击穿电压低于 400 V，且设计要求以低于 1 kW 的功率进行相对低频率的操作时，硅（Si）通常是一个不错的选择。在制造 USB 充电器等需要高开关频率以减小磁性元件尺寸的紧凑型应用时，氮化镓（GaN）是一个极佳的选择。在功率超过 1 kW、低频率条件下的额定电压介于 600 V 至 1,700 V 的情况下，IGBT 可与碳化硅（SiC）考虑一同使用。不过，对于更高的开关频率或更高的功率密度而言，碳化硅（SiC）是最佳选择。

  

**选择的中心**

  

在图 1 中，多个选择间形成的中心位置位于中等偏高的电压和开关频率。然而，碳化硅（SiC）的高效率使其成为一个令人信服的选择，因为对于物料清单成本和运营成本的权衡可能是一个决定性的因素。

Wolfspeed 碳化硅（SiC）器件具有极低的导通电阻，这意味着导通损耗低且效率高。在这方面，与硅（Si）和氮化镓（GaN）相比（图 2），碳化硅（SiC）在所有应用中均优于其他技术。该材料自身特性使得导通电阻随温度的波动小，而氮化镓（GaN）和硅（Si）的 RDS(ON) 则比室温下的额定值增加 2.5 倍或更多。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc84EIAaU6DXApqex0ZOoicEyHCNbzPzia4icqkFOOprHiaPK8qfdDiaNT35mtQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 2：Wolfspeed 碳化硅（SiC）器件

可在很宽的温度范围内保持稳定的低 RDS(ON) 

  

**实现 PFC 技术的变革**

  

现代电源整流器是从简单的桥式整流器发展而来的，这种整流器只需要一个“大法拉电容器”来平滑直流输出。增加的无源功率因数校正（PFC）阶段通常带有一个工频频率的 LC 滤波器。这种方法适用于对效率和尺寸没有严格要求的相对低功率的应用（图 3）。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc84edeKfic5r20X4YkhMfguPykIDqVWPuD7tWBcPsdearfW1VFbA9OTWXQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 3：全桥整流器从简单的无 PFC

发展到基本的无桥 PFC

  

如今，大多数开关电源中，升压转换器在二极管整流桥之后作为主动 PFC 使用，其开关频率比工频频率高几个数量级，因此可以使用更小的电感器和电容器。根据具体应用，在有源 PFC 电路中用碳化硅（SiC）二极管取代硅（Si）基二极管可将能效提高两至三个百分点。

另一方面，将开关频率从 80 kHz 提高到 200 kHz 可以缩小外形尺寸或提高功率密度达 60%。一般来说，提高开关频率有助于缩小电感器的尺寸，并且减少电感器的铜损耗。

然而，当频率从 200 kHz 提高到 400 kHz 时，铜损耗趋于平稳，而电感器磁芯损耗则持续增加。其结果是收益递减，尺寸缩小 10% 至 15%，功率损耗则增加 10% 至 15%。对于那些必须缩小尺寸的应用，这或许是一个可以接受的折衷方案。

要将效率水平提高到 90% 以上，就必须重新绘制电路，去掉二极管桥。为了去掉二极管，一种方法是将电感器移至交流输入端，并用两个 MOSFET 替换桥式电路中的两个底部二极管。左边的开关在正半周提升电压，右边的开关在负半周提升电压。

基本无桥电路所面临的挑战是，高频率开关节点直接连至交流输入，而直流接地相对于交流输入是浮动的。这会导致任何寄生电容直接变成共模 EMI。解决这一问题的常见方法是通过使用无桥双 Boost 或叫做半无桥来实现（图 4，左）。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc84k7ibsNf9iabic767sf5tGgTaQz8dW4tHNDSeKicDWNCvmQXt92oFlicWOYQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 4：比较无桥双 Boost 解决方案（左）和采用碳化硅

（SiC）实现的全桥演进形式即图腾柱拓扑（右）

  

在这种拓扑结构中，左下方的两个二极管消除了浮动接地问题，而拆分电感器则消除了开关节点与交流电源的直接连接，从而解决了共模 EMI 问题。虽然可以使用硅（Si）MOSFET，但它们的最高效率为 95% 至 96%，且占地面积更大，需两个电感器，进而总物料清单成本可能更高。

  

**图腾柱拓扑**

  

图腾柱拓扑是无桥双 Boost 拓扑的备选方案，其名称来源于晶体管相互堆叠的方式（图 4，右）。如图所示，图腾柱可以做成全桥 MOSFET 版本，也可以做成无桥版本，即把右侧低频率桥臂的 MOSFET 替换为二极管。

如果在连续导通模式 (CCM) 条件下工作，图腾柱拓扑面临的最大挑战是来自 MOSFET 体二极管的反向恢复电荷。在从低压侧开关转换到高压侧开关的过程中，两个 MOSFET 不能同时导通，体二极管必须在死区时间内导通。硅（Si）的反向恢复特性降低其效率（图 5）。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc844Twu7yTX4zOicIOzJUcgEyBV2mLVtv6ClWBBSsOgr1tgnn5Sacg3XHA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 5：碳化硅（SiC）与硅（Si）体二极管反向恢复比较

  

在所有硬开关电源设计中，当体二极管必须导通时，都会产生反向恢复损耗。碳化硅（SiC）没有少数载流子，因此反向恢复电流几乎为零。

而硅（Si）MOSFET 的损耗则要高出几个数量级。这就是硅（Si）器件在图腾柱中无法使用的原因。

  

**全桥图腾柱还是混合图腾柱?**

  

带同步整流的图腾柱是效率最高的实现方式。虽然它可以在低频率桥臂使用硅（Si）MOSFET，但只有全部四个碳化硅（SiC）MOSFET 实现了双向运行 — 例如，在连接智能电网的应用中，需要在复杂性和物料清单成本方面做出一些权衡。

包括服务器电源在内的大多数成本敏感型应用都采用无桥或“混合”图腾柱拓扑，在低频率桥臂上使用价格低廉的 PIN 二极管（图 6）。它的优点是所使用的部件数量最少，而且随着 Wolfspeed 的 650V 耐压等级 C3M 碳化硅（SiC）MOSFET的推出，它是一种具有成本效益的实现方式，与全桥相比，轻负载效率降低不到 0.5%。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc844fgiavPEWcZFMtGPgKHyic1ib5RJo9X4Yv1qodib3hamOcP3Zv7MyFBCbg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 6：使用碳化硅（SiC）MOSFET

和二极管的“混合”图腾柱拓扑

然而，如图 7 所示，要充分发挥图腾柱 PFC 拓扑的潜力，实现高于 99% 的峰值效率，利用全部四个碳化硅（SiC）MOSFET 的全桥图腾柱 PFC 可以消除二极管压降，从而实现最高的效率和功率密度。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/pRaJ1XG0AZlhniaHEdriaXr3IiaNZEiaicc84R0WMnrSibUpKlzEzvM4K297q5wBqnXGADQicuibdNxkicy47x5VEzKzutQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 7：借助全碳化硅（SiC）MOSFET 的全桥图腾柱 PFC

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)