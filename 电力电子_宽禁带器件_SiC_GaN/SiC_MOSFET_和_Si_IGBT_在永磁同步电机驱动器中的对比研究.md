# SiC MOSFET 和 Si IGBT 在永磁同步电机驱动器中的对比研究

原创 聂新 秦海鸿 SiC碳化硅MOS管及功率模块的应用 2025-03-18 12:10 广东

> 原文地址: [https://mp.weixin.qq.com/s/XquLAvKwx0-a2Gq8D6cCGw](https://mp.weixin.qq.com/s/XquLAvKwx0-a2Gq8D6cCGw)

文章来源：万方数据

作者：聂新 1 秦海鸿 1 谢昊天 1 马策宇 1 赵朝会 2（1. 江苏省新能源发电与电能变换重点实验室，南京航空航天大学 江苏 南京 210016）（2. 电气学院，上海电机学院 上海 200240）

摘要：与传统 Si-IGBT 相比，SiC-MOSFET 具有更高开关速度和更高结温，有利于减小 PMSM 电机驱动器的开关损耗、缩短死区时间和提高开关频率。先针对 1kW 永磁同步电机，分别对 SiC-MOSFET基和 Si-IGBT 基电机驱动器进行了损耗计算分析，并设计制作了基于两种功率器件的 PMSM 电机驱动器，对损耗、效率、散热器温升以及低速下死区效应的影响进行了实验对比，研究表明 SiC-MOSFET 可使永PMSM 电机驱动系统获得更高的效率、功率密度和更好的动态性能。

关键词：SiC ，永磁同步电机 ，高开关速度， 开关损耗

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvu42dashz1v5dNFDbKDN8sgIEZdGNbjayjhtF90bOZDxM9KsxwJsjHhw/640?wx_fmt=png&from=appmsg)

1\. 引言

航空航天、电动汽车、工业应用及家用电器等领域对永磁同步电机 （ Permanent MagnetSynchronous Machine，PMSM）驱动系统提出了更高的要求，希望其具有更高的效率和更高的功率密度。功率器件作为PMSM 电机驱动系统的基础，在很大程度上影响着系统的效率和功率密度。目前由于硅（Silicon，Si）材料本身的物理特性限制已接近其性能极限，基于传统 Si 功率器件的电机驱动器在很多方面，尤其是在高频和高功率领域的性能提升空间受限。与 Si 器件相比，以碳化硅（SiliconCarbide，SiC）为代表的宽禁带半导体功率器件具有更高的电压等级、更高的开关速度、更高的结温和更低的开关损耗等优势。由此可预见利用 SiC功率器件设计的逆变器可望明显提高 PMSM 电机驱动系统的效率、功率密度以及相关动态性能。

本文首先对分别采用 SiC-MOSFET 和 Si-IGBT制作的 PMSM 电机驱动器进行了损耗分析和计算，并利用两种类型器件设计了 1kW PMSM 电机驱动器，对其效率、散热器温升和低速下死区效应进行。

2\. 损耗分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvugn0Am9HCsfj6SDMKprGFibQFJKXx9cbdAc64q7Qd8SPoc3efibMgYTNw/640?wx_fmt=png&from=appmsg)

为了对比基于 Si-IGBT 和 SiC-MOSFET 的电机驱动器的效率，表 1 给出 PMSM 电机主要技术指标。PMSM 电机驱动器的功率损耗主要分为两个部分：导通损耗和开关损耗。为便于分析计算，考虑到二极管的开关损耗比 Si-IGBT 和 SiC-MOSFET 的开管损耗要小很多，故忽略不计。基于两种类型器件的PMSM 电机驱动器尽管所使用的功率器件不同，但均采用 SVPWM 控制策略，所以功率损耗的计算过程是一样的。

用于对比的功率管分别选为 Si-IGBT（型号为IKW25T120）和 SiC-MOSFET（型号为 CMF10120），其主要电气参数如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuvhLO7tVPNw2Df8Mibxmias0ShniclDuwUDSN9rGG69OnsMS1d9v6pvQvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvufnpzJufNSUFoqTZKeLhdB3vOqdbvODtBQahSIneDggGxITHGG9XiahQ/640?wx_fmt=png&from=appmsg)

1）导通损耗

IGBT 和二极管的导通损耗可以通过器件的电特性的分段线性估计获得，图 1 给出 IGBT 的等效电路模型，图 2 给出二极管的等效电路模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuDS73049edpJB6kyCvOc6L0dzgqFzg9VITNicLed4HrwQ6p4Owuhkk8Q/640?wx_fmt=png&from=appmsg)

根据以上分析，开关管和二极管的导通损耗可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvu3UicITG7VbpCoCyBuAtzhibtZwvGcjuvbvHG0b7TweanTIicj26wianUmQ/640?wx_fmt=png&from=appmsg)

其中，PQ(cond)为开关管的导通损耗，IQ 为流过功率管的平均电流，VQ 为功率管上的压降，IQRMS 为流过功率管上的电流有效值，rQ 为功率管导通电阻，PD(cond)为二极管的导通损耗，ID 为流过二极管的平均电流，VD 为二极管上的压降，IDRMS 为流过二极管的电流有效值，rD 为二极管导通电阻。

根据数据手册可知 Si-IGBT 和其体二极管的输出特性曲线以及 SiC-MOSFET 和其体二极管的输出特性曲线 ， 从输出特性曲线中得到Si-IGBT 的VQ=0.7V 、 rQ=28mΩ 、 VD=0.6V 、 rD=28.5mΩ ，SiC-MOSFET 的 VQ=0V、rQ=16.4mΩ、VD=0.71V、rD=26mΩ。

2）开关损耗

功率管的开关损耗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuyiaDSQdvChK556QAmLD2kCRSTibxekwlkcpia4x7cuf2rW6PsvId3u09w/640?wx_fmt=png&from=appmsg)

其中，Psw 为功率管开关损耗，fsw 为开关频率，Emax为每个开关周期的开关损耗最大值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvu0DZsbOB4neuTThadlSjMdXvRIGibCQD1ndrMIl0TibnFKwGwV0qWpbibg/640?wx_fmt=png&from=appmsg)

根据以上的计算公式可以分别计算出 Si-IGBT电机驱动器和 SiC-MOSFET 电机驱动器的开关损耗。在 SVPWM 控制策略的 PMSM 电机中，每个功率管的占空比的调制波如图 3 所示，这与 SPWM 的占空比调制波形很接近，SVPWM 在 SPWM 的基础上增加了零向量，即在正弦波基础上叠加了 3 次谐波。在损耗分析时，为了便于计算，我们近似认为SVPWM 占空比调制波形为正弦波，这样 SPWM 的调制方式的损耗计算也适用于 SVPWM 调制的损耗计算。

在开关频率一定的情况下，占空比可以用相角θ 表示

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuUOahia0183eZSTChTAibxqibia4dDHebwTvNGUWSu0XQca1vsSymTCv2gw/640?wx_fmt=png&from=appmsg)

一般情况下，由于电机绕组阻抗呈阻感性，电机的相电流滞后于相电压，假设滞后角度为φ。以A 相为例，相电流和占空比可表示成以下关系式

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuKsvUibZSgmyu6dicB2rxdSMBpNrhu0XRjGk0DAr0icA911icicKyicLXiaSibg/640?wx_fmt=png&from=appmsg)

  
式中，Ipeak 为相电流峰值；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuHlsw0kZYcOuHCJpSI3aoibt0qUFzEChncic9ibGDQNkIXiceL2qrHGH7Zw/640?wx_fmt=png&from=appmsg)

流过功率管的电流平均值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuH8Ribp7ZO3wibwmRed3yc7O0g8xrycXAiayr6u73EsXtW0vCpudILCVicQ/640?wx_fmt=png&from=appmsg)

  
同样地，二极管的占空比为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuIlou0kAnQcyt53lQjds4SoBPpFnymawYrMicUiaNgibILaGXzLHeo9n0Q/640?wx_fmt=png&from=appmsg)

流过二极管的电流平均值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvufweYv8CenRJ6wSPm65TUEcfg92biczZWezFhCBWzRRCgNF097wGdTSw/640?wx_fmt=png&from=appmsg)

流过功率管的电流有效值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuqia40QhVwBQQcic06BU33XjmhdzQkviaVWTC7TcCzI4AxstLMvfibXu38w/640?wx_fmt=png&from=appmsg)

  
流过二极管的电流有效值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvumpjlgnz99S4yicGnicbeDwVstYibvnWDNFclxza5SYGQ5ebO70gjIeTpQ/640?wx_fmt=png&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuffkXdhpibMnev2mxLMnSwWwPkibCxXpKQkcvRNd0d67JoNXiasdBy92Cg/640?wx_fmt=png&from=appmsg)

根据参数计算，可得到表 3 中的功率损耗计算对比结果，可见 SiC-MOSFET 基 PMSM 电机驱动器的总损耗比 Si-IGBT 基 PMSM 电机驱动器的总损耗减少了一半，其效率增加了将近一个百分点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvufcy6Rz8lRVh3wR7sttd0ibKrftC4t1jh4ME0b0I7XVyeZA9iaOGiaTNaw/640?wx_fmt=png&from=appmsg)

3.死区效应分析

SiC-MOSFET 具有比传统 Si-IGBT 更快的开关速度，所以 SiC-MOSFET 基 PMSM 电机驱动器能够设置更小的死区时间。减小死区能够减轻死区效应对电机驱动器带来的影响，提高电机性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuhsHh8hvMpXwGzXicBn3BHdSeEQSrLOLqkLicpW34t1TzQStg8kwmBQ3A/640?wx_fmt=png&from=appmsg)

针对 PMSM 电机中的死区效应，目前国内外学者提出了很多种死区补偿的方法，图 4 给出了死区补偿的 PMSM 电机矢量控制系统原理图，其基本原理是 检 测 相 电 流 极 性 计 算 补 偿 电 压 最 后 通 过 查 表的方法调整补偿电压的大小。这些补偿方法控制算法复杂并且补偿精度难以准确控制，而且电机低速下调制系数很低时零电流钳位现象不可避免，检测电流过零问题尚没有很好的解决。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuKwFmrTdQIaFk7Kva9WY5gRETOT1mSRibGR3g7zzdCGro23GKbehR3OQ/640?wx_fmt=png&from=appmsg)

电压空间矢量调制技术是从电机的角度出发，使电机获得幅值不变的圆形磁场（即正弦磁通），电机 驱 动 器 通 过 三 相 桥 臂 的 不 同 开 关 模 式 产 生 磁通来逼近基准磁通圆，而死区时间会产生空间矢量误差，使得形成的磁场偏离圆形磁场，降低电机性能。三相永磁同步电机驱动器中通常采用三相全桥电路拓扑，定义相电流流向电机侧为正方向，如图5 示。为了定量分析死区时间给驱动器带来的影响，以 A 相桥臂为例对死区时间引起的电压空间矢量误差进行定量分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvurnICsPTsh9WC6hyQ2U1RSoWClIJcQ9TgicNibiccUgFK5ibykWZWYIwddg/640?wx_fmt=png&from=appmsg)

图 6 A 相桥臂驱动和输出电压波形

图 6 是 A 相桥臂驱动信号和输出电压波形，其中（a）、（b）为 A 相桥臂理想的上、下管驱动信号，（c）、（d）是 A 相桥臂加死区时间后的驱动信号，图（e）是实际输出 A 相电压波形，阴影部分为死区时间内产生的误差电压，该阴影部分的误差电压极性取决于电机相电流的方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuxNWEEmGibjde2lia5B6PaZ3A7NibXjp3HKTGnyYOzSmIBadrp1uWPGr7A/640?wx_fmt=png&from=appmsg)

在死区时间内存在两种续流情况，这两种情况分别是相电流从上管续流和从下管续流。图 7 给出了相电压的判断依据，如图 7（a）所示，当 A 相相电流为正方向时，其在死区时间内通过下管体二极管进行续流，那么 A 相电压为–E/2；如图 7（b）所示，当 A 相电流为负方向时，其在死区时间内通过上管体二极管进行续流，那么 A 相电压为 E/2。所以根据相电流的极性可知，当相电流为正方向时，死区时间会给永磁同步电机驱动器带来 E/2 的误差电压；当电流方向为负方向时，死区时间会给永磁同步电机驱动器带来–E/2 的误差电压，正是由于误差电压的存在，产生的磁通圆偏离了基准磁通圆。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuFXJTqNT2OpPL9Sy2GwjGN3MEYvXlAS1dsnG5L8sb93BguiaF4VcKwbA/640?wx_fmt=png&from=appmsg)

以第三扇区为例，图 8 给出了第三扇区的驱动器输出电压波形，阴影部分误差电压极性根据电流方向判断，以 ia、ib、ic 极性“负正负”为例分析电压矢量的 变化情况 ， 其中红线为矢量实际作用时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuAmlQYoTlnZaDKLPGkviaQH6KbFStzdK6FogkJ1c9CadOUQJY8W1OQ1A/640?wx_fmt=png&from=appmsg)

从图 8 可以看出，V4 矢量作用时间增加了 2Td，V6 矢量作用时间减少了 2Td，零向量 V0、V7 一个增加了 2Td，一个减少了 2Td，相互抵消。用向量图表示成如图 9 所示，误差向量 ΔV4 和 ΔV6 两者合成的电压矢量就是 ΔV2，其作用时间也是 2Td，幅值为4ETd/(3T)，滞后 V4 矢量 60°。同样的可以推导出其他情况下误差电压矢量，如图 10 所示，可根据相电流方向确定误差电压在 α、β 轴上的分量，如表 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvu7WSP4uMjmXGTwpnAE5fXdM5YS0r7Nl1QAzBhUzyz0SoibPLU4Mkc1qw/640?wx_fmt=png&from=appmsg)

从表 4 可见，死区产生的误差电压只与母线电压和死区时间有关。所以当死区时间越大，误差电压在 α、β 轴上的分量越大，矢量控制产生的磁通圆磁场偏离基准磁通圆形磁场越严重，从而导致电机相电流畸变越大，所以电机的转矩脉动越大。

为明确死区时间对电机性能的影响，对不同死区时间下的永磁同步电机进行了仿真。假设永磁同步电机驱动器的开关频率 f=10kHz，死区时间 Td 分别为 10μs、5μs、1μs 时的电机相电流、转速、转矩的波形图如图 11 所示，图中上面波形为电机相电流波形，下面波形为电机转矩波形，相电流 THD 分别为 20%、12%、2%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuv9H6MJgMhlv9u1IkTagbHNB1JicIib7w7OmPlTz86eqSTSSzq7PSILmg/640?wx_fmt=png&from=appmsg)

由图 11 可见，死区时间越小，电机相电流波形畸变越小，转矩脉动越小。所以可以通过减小开关器件的死区时间减小电机的转矩脉动和电流畸变。SiC-MOSFET 由于开关速度快，桥臂上下管之间的死区可取得很小，从而使得 SiC-MOSFET 基 PMSM电机驱动系统可简化补偿方法，提高电机性能。

4\. 实验结果

为验证以上分析，设计制作了 1kW PMSM 电机驱 动 器 ， 功 率 器 件 分 别 采 用 Si-IGBT （型 号IKW25T120）和 SiC-MOSFET（型号 CMF10120）。通过实验对比效率、散热器温升以及死区效应的影响。

4.1 死区效应对比

SiC-MOSFET 具有比传统 Si-IGBT 功率器件更快的开关速度，这样的高开关速度不仅能够减小电压电 流 交 叠 产 生 的 损 耗 而 且 能 够 压 缩 桥 臂 死 区 时间的大小。图 12 给出了驱动电阻为 6.8Ω，电流为8A 情况下的 Si-IGBT 和 SiC-MSOFET 的关断波形，可见，Si-IGBT 存在明显的电流拖尾，关断时间较长，达到 μs 级别，而 SiC-MOSFET 的关断时间不超过 100ns 。所 以 在 开 关 频 率 选 取 10kHz 时，Si-IGBT 基 PMSM 电机驱动器死区时间一般预留开关周期的 5%左右，而 SiC-MOSFET 基 PMSM 电机驱动器死区时间可以预留在开关周期的 1%以内。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvupM31vuTiciawgzAthhUnCKIfibEcxXFibRZ4xP5lZxAUmWBKKBxLxlgH1w/640?wx_fmt=png&from=appmsg)

为了对比验证不同类型器件在 PMSM 电机驱动器 在 电 机 低 速 时 对 死 区 效 应 的 抑 制 效 果 ， 基 于Si-IGBT 基 PMSM 驱动器开关频率取为 10kHz，死区时间设置为 5μs， SiC-MOSFET 基 PMSM 电机驱动器开关频率取为 10kHz，死区时间设置为 1μs。图 13 给出 两 种 情 况 下 的 电 机 相 电 流 ， 由 于SiC-MOSFET 的快速开关能力其死区时间可以设置得更小，其相电流正弦度更高，电机性能更好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuZM1CggY6DExHyJ93qoBHuwd6Mic4GjLO8QKuhicgkWA7ch531pWk0Bvw/640?wx_fmt=png&from=appmsg)

4.2 效率对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvuZQmlZxZ8vmnRPuqgiaRSdfnG8wo26AqmaaLdxo3LnS2NdlrcXNzyqDA/640?wx_fmt=png&from=appmsg)

为了对比 Si 基 PMSM 电机驱动器和 SiC 基PMSM 电机驱动器的效率，对两驱动器在相同的负载转矩（5N.m）、不同转速下的效率进行了测量，结果如图 14 所示，SiC 基 PMSM 电机驱动器的效率比传统 Si-IGBT 基 PMSM 驱动器的效率高将近一个百分点，这是由于 SiC-MOSFET 具有更快的开关速度且无电流拖尾，所以其开关损耗更小，效率更高。

4.3 散热器温升对比

通常，电机驱动器中无源器件较少，散热器体积占到 PMSM 电机驱动器体积的很大一部分，如何减小散热器体积和重量成为提升 PMSM 电机驱动器功率密度的重要手段之一。由于 SiC 器件具有比Si 器件更高的结温，并且 SiC 器件损耗更小，应用SiC 功率器件对驱动器效率的提高也可以转化为功率密度的提高，所以 SiC 基 PMSM 驱动器可以使用更小的散热器体积。众所周知，散热器体积大小与功率器件温升有着直接关系，散热器体积越大，功率器件温升越小。为了比较 Si-IGBT 基 PMSM 电机驱动器和 SiC-MOSFET 基 PMSM 电机驱动器的功率密度，对相同的负载转矩、转速和散热器下的两种驱动器的温升进行了对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmst8RekFE9HvKn8KRVpFvug27TNdZ2ryV5JMafVcIErZupNu1c9MEbItLZYPXFdfRbxZbMWtm3Jw/640?wx_fmt=png&from=appmsg)

采用 Victor 公司的型号为 303B 的红外线测温仪分 别 对 Si-IGBT 基 PMSM 电机 驱 动 器 和SiC-MOSFET 基 PMSM 电机驱动器进行了测量，散热器 与 开 关 管 接 触 点 附 近 温 度 随 工 作 时 间 变 化 的关系曲线如图 15 所示。达到热平衡后，SiC-MOSFET基 PMSM 驱动器的温升比 Si-IGBT 基的温升降低了2~3°C。

由此可见，SiC-MOSFET 基 PMSM 电机驱动器比传统 Si-IGBT 基 PMSM 电机驱动器的温升更低，由此可以推论在相同的温升下，SiC 基 PMSM 驱动器的散热器体积可以更小些，并且 CREE 公司的第二代 SiC 功率器件的结温已达到 175℃，比传统 Si功率 器 件 结 温 更 高 ， 这 对 减 小 散 热 器 的 尺 寸 更 有利。因此，SiC 基 PMSM 驱动器可具有更高的功率密度。

5\. 结论

本文分别利用 SiC-MOSFET 和 Si-IGBT 设计制作了 1kW PMSM 电机驱动器，并对两种驱动系统的损耗、效率、温升、死区效应等方面进行了对比研究。SiC 基 PMSM 电机驱动器损耗是 Si 基 PMSM电机驱动损耗的 1/2，效率提高了 1%左右。在相同工况下 SiC 基 PMSM 电机驱动的散热器温度比 Si基 PMSM 电机驱动散热器温度低 2~3°C，并且在低速情况下 SiC 基 PMSM 电机驱动器的的死区效应更小， 动 态 性 能 更 好 。 理 论 分 析 和 实 验 表 明SiC-MOSFET 在永磁同步电机中能够提升其效率、功率密度和动态性能，SiC-MOSFET 在电机驱动器中具有很好的应用前景。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)