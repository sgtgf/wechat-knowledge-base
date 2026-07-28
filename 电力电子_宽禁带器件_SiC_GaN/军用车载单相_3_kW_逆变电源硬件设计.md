# 军用车载单相 3 kW 逆变电源硬件设计

原创 吕旭旭 ，邵天章 SiC碳化硅MOS管及功率模块的应用 2024-11-25 10:40 广东

> 原文地址: [https://mp.weixin.qq.com/s/TKd\_nUWSC6F6Rvk-ZPtvBA](https://mp.weixin.qq.com/s/TKd_nUWSC6F6Rvk-ZPtvBA)

**文章来源：**现代电子技术

**作者：**吕旭旭 1，邵天章 1，赵锦成 1，刘畅 2（1.陆军工程大学石家庄校区，河北 石家庄 050003；2.陆军 32214部队，江苏 南京 210000）

**摘 要：**针对军用车载单相柴油发电机组体积重量大且发电电能质量低的问题，文中通过采用 SiC MOSFET 高频功率器件和 H 桥单管驱动的硬件设计方案，根据 SiC 器件具有较宽的禁带宽度和较小的导通等效电阻，可减小功率管开关损耗，支持系统在较高频率下工作，从而降低输出滤波电感电容取值，减小设备的重量和体积，使得设备上车后具有更小的挤占空间。搭建 1 台 3 kW 实验样机并测试其电气性能，测试结果表明，其电压波动率在各种负载下均能小于 0.3%，且效率保持在93% 以上，验证了该设计方案可以有效提高逆变装置功率密度，减小设备的体积和重量，具有较高的应用价值。

**关键词：**车载电源；3 kW 逆变电源；单相逆变器；电路设计；单管驱动；反激式开关电源；性能测试

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRzgdvibHfPfrxoJlLlnkib1mAZpYIV0RnYfkTaiaeRhPz7YZLKuBxHc4JQ/640?wx_fmt=jpeg&from=appmsg)图片与文章无关

**0.引 言**

当前，军用车载柴油发电机组的重量和体积过于庞大，对军用车辆空间占用严重且由于小功率柴油机组惯性小和行车过程速度不恒定，使其发出的电能质量不高，需要进行二次处理。军用柴油机组的前级借助调速器（AVR）对输出电能进行调节，其调节能力有限且不精密，欲使其在大部分工况下均能输出高质量的电能，需要在后级加单相逆变装置，对一次电能进行调节。传统的单相全桥逆变拓扑结构一般均采用大功率的IGBT 模块，其优点是将驱动和保护集成起来，但是其开关频率不高，使得输出滤波电感和电容体积过大（其一般常用频率在 10~20 kHz之间）。

采用 SiC 功率器件，可以使开关频率达到 25 kHz以上，输出滤波单元可以很方便地滤除开关频率附近的高频谐波，使得设备小型化，轻型化，设备上车不会大幅挤占车上空间。本文以军用单相 3 kW 车载柴油机组为例，对其后级逆变装置的硬件电路进行设计，通过军用整机测试柜对其性能进行检测，实验结果表明，该设计具有良好的工程实践意义。

**1. 系统设计**

车载逆变电源的硬件设计如图1所示。军用3 kW柴油机组输出为5线制，单相工频为220 V交流电和36 V直流电，220 V 工频交流输出送给逆变装置主电路进行二次电能变换，36 V 直流送给辅助电源，为整个系统所用IC 提供电源。主电路采用全桥拓扑，经后级 LC 滤波和EMC电感输出，辅助电源采用反激电路拓扑。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRAErkNabcgibHsf8xBom1sZ74VupeQ7HXdwDj0Jg3zvZ9OHGBPQgPbEw/640?wx_fmt=png&from=appmsg)

**2. 模块供电电路**

系统的供电来源于军用柴油发电机的直流输出，即图 1 中的 DC 输出，由于系统需要多种电压规格，并且为了减少干扰，模块与模块之间的供电需要隔离，故采用反激式开关电源方案。

**2.1 辅助电源电路**

反 激 式 辅 助 电 源 电 路 如 图 2 所 示 。采 用UCC28C42P、TL431 和 PS2701 构成反激式 DC⁃DC 电源，UCC28C42P 的最大占空比为 100%，RT/CT 引脚接电阻电容且工作频率可调，本文设置为 120 kHz，24 V 和 8 V两路次级隔离输出，使用一路辅助绕组对 UCC28C42P进行供电。将 UCC28C42P 内部电压反馈同相端和反相端短接，24 V 隔离输出电压作为反馈电压，经电阻分压后送给 TL431 内部运放反相输入端，比较结果通过光耦送给 UCC28C42P 的 COMP 引脚，提高电压反馈精度。电流反馈通过电流采样电阻送给 UCC28C42P 的 Isence引脚。采样电阻一般取 1 Ω 以下功率电阻。当 Isence引脚电压大于阈值 1 V 时，UCC28C42P 关闭输出。反激24 V 输出给驱动模块供电同时经 DPA423⁃242XX 后隔离输出±5 V 给控制器和运放供电，8 V 输出经 7805输出另一路隔离 5 V 为通信模块供电。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRibzsdMRbGsLeqibeib2opaFibqkiauxRqxnjaOhu6TeHI5q4pGLibSbEeNibQ/640?wx_fmt=png&from=appmsg)

**2.2 核心控制器供电电路**

核心控制器选用 TI 公司的 TMS320F28335 芯片。该芯片主频为 150 MHz，内部集成硬件乘法器，可大大提高运算速度，其采用哈佛总线架构，具有 265 K×64 bit的 FLASH 空间，支持浮点运算，是嵌入式行业的理想控制芯片，其供电电路如图 3 所示。TMS320F28335 的 I/O口供电电压为 3.3 V，内核为 1.9 V 供电。设计使用 TI公司的 TPS767D301 芯片，输入电压为 5 V，通过选择输出引脚分压电阻可以输出 3.3 V 和 1.9 V 电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRWLQpAZsibKswqtyYtMPf0bxs5BqGiau2MMsUTrx0LlyygwNkx5yMw7zw/640?wx_fmt=png&from=appmsg)

**2.3 SiC MOSFET驱动电路**

大功率 SiC MOSFET 的禁带宽度约为 Si 材料开关器件的 3 倍，故其具有更高的耐压水平且寄生电容相当小，可支持更高的工作频率，使得产品具有更高效率和较小体积，其结构如图 4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRK0ibmPf9HoHu4OWXCRVoI3cc0LX8tqossJ9aSNVX9ibWQ8I2KBfnLzKg/640?wx_fmt=png&from=appmsg)

如图 4所示，定义其输入电容：

Ciss = CGS + CGD                             （1）

输出电容：

Coss = CGS + CDS                            （2）

转移电容：

Crss = CGD                                       （3）

其 中 ，转 移 电 容 又 称 为 米 勒 电 容（Miller Capacitance），在 MOSFET 开通的过程中，由于米勒电容的存在，UGS会存在一小段电压平台（米勒平台），在米勒平台时期，MOS 管类似处于三极管的放大区，这段时间其消耗功率最大，功率管损坏概率最大，故在设计时要尽可能缩短其开通和关断时间。一般集成的单管MOSFET 还会加有体二极管，导通后等效为一个电阻，称为导通电阻 Ron。驱动电路设计中采用 BM6104FV⁃C芯片，该芯片内部集成了输入欠压保护和功率管过流保护模块，且在关断期间触发米勒钳位功能（Miller Clamp Function），OUT2 引脚输出高电平，导通外部开关管，将MOSFET 栅极电压 UGS 强制拉至源极电位，实现软关断，其电路设计如图 5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRe0TeqiaibggPVbSnNv6IaBY1rpMWF206eglO1VE4tHBOur4UIhmw05Mg/640?wx_fmt=png&from=appmsg)

设计采用反激输出的 24 V 经 QA2401C⁃20 模块输出+20 V 和\-4 V 电压供 BM6104FV ⁃C 组成的驱动电路使用，负压是保证 MOSFET 能够可靠关闭。在关断期间，芯片默认禁止过流保护；开通期间，当 SCPIN 引脚电压大于阈值时，FLT 引脚会输出低电平故障信号。其计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBR9SshmJa5dm5N6VShafAWXOkibuMxP1M0OpfPmia3liboDkopwzxfOflRA/640?wx_fmt=png&from=appmsg)

式中 VSCDET 为芯片 SPCIN 引脚内部运放反相电压基准，典型值为 0.7 V。

**3 .采样电路**

**3.1 电流采样电路**

由于开关频率高，故电流采样需要高频，因此，采用ALLEGRO 公司的 ACS733KLATR⁃40AB 芯片，其采样带宽高至 1 MHz，专用于高频电流采样，并且提供阈值电流保护故障输出功能，其原理图如图 6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRSLB45jcvD1O9ae5D3OohtZpRubbrZy45NQvibsyDibJnibAU4KWxSeJUQ/640?wx_fmt=png&from=appmsg)

通过分压电阻改变 VOC 引脚电压，可以配制其故障输出的阈值电流，公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBR0SjluzxV0y3HfFelr4dkE1ibw6856FibK2gbic509MJTmAN0aHibuyCF5w/640?wx_fmt=png&from=appmsg)

**3.2 电压采样电路**

控制器需要采集的电压信号既有交流电压又有直流电压，由于控制器 A/D 口输入电压不能高于 3.3 V，故交流电压经过比例运放和滤波后电压需要抬高 1.65 V之后送入 DSP 的 A/D 口，直流输入电压经过比例运放和滤波后直接送入 A/D 口检测，电路如图 7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRvVPegsr6A0pK29GrJvoibY9kkoryT9JA8SicDpY4Ufvh905gFDjaL39Q/640?wx_fmt=png&from=appmsg)

**4 .实验验证**

为了验证该硬件设计的合理性和性能的优良性，搭建一台 3 kW 逆变电源，逆变电源实物如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRUbot3BZbIpgoSbZzNkcI7KJlVN0CYSpibeGyeYdicUS9JSeR3fAQ9icbQ/640?wx_fmt=png&from=appmsg)

图 8中 L，N 和 E 为图 1 中 3 kW 柴油发电机的工频 220 V 交流输出 L，N 和 EARTH；DC 对应图 1中 3 kW 柴油发电机的直流 36 V 输出。

采用军用电气性能检测负载柜对其进行检测，得到测试结果如表 1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRRhlDFwGO5DxI1ibvrPIvRnibUeiaicEOPg1NhdwCrzJBNKibVlqAruwBiaQQ/640?wx_fmt=png&from=appmsg)

**5. 结语**

由逆变电源电气性能测试表可知，其电压波动率在各种负载下均小于 0.3%，且效率保持在 93% 以上。由于采用较高的开关频率，使得逆变输出 LC 滤波体积和重量大幅缩小且很容易滤除开关频率附近谐波。以上表明文中所提硬件方案能够使逆变装置小型化和轻量化，减少设备上车后对装备空间挤占的同时，保障高电能质量的可靠供电。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)