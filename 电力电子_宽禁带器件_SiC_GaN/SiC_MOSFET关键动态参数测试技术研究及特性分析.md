# SiC MOSFET关键动态参数测试技术研究及特性分析

原创 杨振宝， 席善斌 SiC碳化硅MOS管及功率模块的应用 2025-01-05 00:13 广东

> 原文地址: [https://mp.weixin.qq.com/s/8Xcw4-jB4011eJW4FoRBKQ](https://mp.weixin.qq.com/s/8Xcw4-jB4011eJW4FoRBKQ)

文章来源：半导体技术

作者：杨振宝1，席善斌１，褚昆１，张欢１，张魁２，赵海龙２（1.中国电子科技集团公司第十三研究所，石家庄 050051；2.河北北芯半导体科技有限公司， 石家庄 050051）

摘要： SiC MOSFET开关速度快导致其对测试平台的寄生参数较为敏感， 而高电压和大电流的特性也为测试平台设计带来挑战。 自主设计和搭建了一套集成化和规范化的大功率双脉冲测试平台， 利用叠层母排结构的低杂感集成化设计， 减小器件过快的开关速度对主回路寄生电感的影响； 通过驱动过欠压保护电路设计， 减小大电流密度的影响， 保证器件可靠开通和关断。 为验证该测试平台的实用性， 选取几种国内外不同厂家的SiC MOSFET进行主要动态参数在不同结温下的测试及分析， 全面评估了器件动态特性与温度的关系， 研究结果对器件的生产和应用具有一定意义。

关键词： SiC MOSFET； 动态参数； 叠层母排； 驱动保护电路； 双脉冲测试平台

０. 引言

随着新能源电动汽车、5G通信技术等应用快速发展， 在功率半导体领域对高频高压高功率器件的需求日益增多。SiC MOSFET作为一种具有绝缘栅结构的单极性开关型器件， 其开关速度快的优势有利于减小电路装置中电容和电感体积， 从而可实现电力电子装置的小型化设计。 相较于需要电流持续驱动的栅极结型场效应晶体管 （JFET）和双极性结型晶体管 （BJT）， SiC MOSFET更易于控制； 而相较于绝缘栅双极型晶体管 （ IGBT） 无关断时的拖尾电流， 其开关频率更高， 且在高频应用中开关损耗低于同等级的 IGBT 器件。 随着栅氧工艺逐渐完善， 650-1700V 电压等级的器件也逐步推向市场， 在电动汽车、 风力发电和光伏逆变产业中实现应用。 通过精确测量其动静态参数， 如阈值电压、 开启电阻、 开关速度、 导通损耗等， 能够全面评估器件性能， 为设计优化与可靠性分析提供关键数据支撑， 从而推动SiC MOSFET技术的发展及其在各领域的广泛应用。

由于SiC MOSFET材料特性复杂， 故在高电压、 高速切换条件下进行准确测试对测试设备的精度、 稳定性和响应速度等要求较高。 目前， 针对SiC MOSFET 静态参数的测试设备已较为成熟； 而在动态参数测试方面， 国内外虽已有不少研制功率器件动态测试系统的厂商， 如国外瑞士LEMSYS公司、 意大利CREA公司、 德国Schuster公司和日本IWATSU公司等， 国内山东阅芯、 深圳青铜剑、 陕西开尔文、 上海忱芯科技、 杭州飞仕得等企业。但其中部分是以传统Si器件作为测试对象， 或寄生参数较大， 不适合高速宽禁带功率器件的测试；部分需要配合厂家自行开发的夹具板， 如keysight公司研发的双脉冲动态参数测试平台， 根据其独有的电流传感器射频补偿技术， 配合定制专用夹具可实现小于5nH 的杂散电感。

为研究 SiC MOSFET 的动态参数特性， 首先需全面掌握其动态参数测试技术。 本文一方面通过分析SiC MOSFET动态参数测试技术难点， 运用低杂感主功率回路设计、 驱动保护设计、 上位机控制等技术， 自 主 设 计 和 开 发 出 高 压、 低 杂 感 的 SiC MOSFET 动态特性测试平台， 对高电压大电流等级SiC MOSFET 实现精准的动态特性测试。 另一方面选取国内外不同厂商生产的 SiC MOSFET， 通过对其在多温度点下的关键动态参数测试和对比， 全面分析和评估器件动态参数特性变化， 为器件的研究与应用提供有效参考。

１. SiC MOSFET动态参数测试技术难点

SiC MOSFET相较于Si基功率器件具有开关速度快、 能量损耗小、 击穿场强高等优势， 但是过快的开关速度 （几十ns量级） 导致器件在开通和关断过程中产生更大的电流变化率di/dt和电压变化率dv/dt， 使得SiC MOSFET对测试平台的寄生参数更加敏感。 在关断时刻， 主回路中寄生电感因过高di/dt产生较大的感应电动势， 从而在漏源电压叠加一个大电压过冲 ΔUoff， 使得SiC MOSFET承受的电气应力增加， 导致器件关断损耗急剧增大。 在开通时刻， 过高的dv/dt可能导致寄生振荡、 过压应力、 误导通等问题， 尤其是在软开关或谐振拓扑中， 这些非理想效应可能会被放大， 影响系统的稳定性和可靠性。 同时，SiC MOSFET 会因续流二极管中存在反向恢复电流， 使得器件承受更大的电气应力， 引起开通损耗变大， 可能会导致器件发生热损坏或电击穿的严重后果。 故为保证测试的精确性和可靠性， 须采取有效措施来减小测试电路主回路中的寄生电感。

SiC MOSFET在开通和关断过程中， 驱动电路需提供足够的功率对输入电容进行快速充放电， 以保证器件的快速可靠关断， 进而降低开关能量损耗。 驱动电路的保护功能也是SiC MOSFET可靠运行必不可少的部分， 比如在过欠压保护、 短路保护和串 扰 抑 制 等 方 面， 过 流 短 路 问 题 是 引 起SiC MOSFET热 失 效 的 主 要 原 因。 目 前，SiC MOSFET在驱动电路设计上采用与Si基功率器件相同的思路， 其短路保护采用传统的退饱和短路保护方式， 但因为SiC MOSFET比Si基功率器件的芯片面积更小， 在相同电流等级下，SiC MOSFET的电流密度更大， 其对短路保护的要求更为苛刻， 所以为保证SiC MOSFET的广泛应用， 优良的驱动保护电路设计是必不可少的。

２.  SiC MOSFET动态参数测试平台设计

２. １ 主要动态参数

在实际工程应用的设计环节中， 对于器件选型这一关键步骤，SiC MOSFET的动态特性参数在全面评价其电气性能的优劣与系统长期运行的可靠性方面至关重要。SiC MOSFET在应用过程中主要工作在开关模式下， 结合对各大厂商SiC MOSFET动态测试记录的动态参数， 本文关注的关键动态参数包括开通延迟时间td,on 、 关断延迟时间td,off、 开通上升时间tr、 关断下降时间tf、 开通能量损耗Eon 、关断能量损耗Eoff， 各参数示意图如图1和图2所示。 在开通阶段， 栅源电压VGS上升到10%至漏源电压VDS下降到90％的这段时间被定义为开通延迟时间。 在关断阶段，VGS下降到90％至 VDS上升到10％的这段时间被定义为关断延迟时间。 在开通阶段，VDS从90％下降到10％所需时间被定义为开通上升时间。 在关断阶段， VDS从 10％上升到90％所需时间被定义为关断下降时间。Eon为单次脉冲开启过程中内部耗散的能量， 即对时间的积分， 积分时间自VGS上升至10％时刻 （t3） 起， 至 VDS下降至2％时刻 （t4 ） 止。Eoff为单次单脉冲关断过程中内部耗散的能量， 即对时间的积分， 积分时间自VGS下降至90％时刻 （ t1） 起， 至漏源电流 IDS下降至2％时刻 （t2） 止。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicuO5JWpwPX2uibNetO947F7vJTpm2TiaAqpg7PoCahY80CLQCkaBpiaH5w/640?wx_fmt=png&from=appmsg)

2.2 关键技术开发

2.2.1 低杂感集成化设计

传统功率器件双脉冲测试平台的换流回路中存在较大杂散电感， 使得器件在开通和关断瞬间承受着非理想的电气应力， 导致测试结果的准确性与可靠性存疑。 因此换流回路的低杂散电感是获取器件真实开关特性的重要前提和保障， 有助于测试容量的拓展。 该双脉冲测试平台采用叠层母排的设计方案， 如图3所示， 其磁场分布如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicWLPDHhj4tpE9LFic9bc7Yg6CPWIohZ7ib6p3XXfvbuIBPrN4W0aTTfsQ/640?wx_fmt=png&from=appmsg)

 叠层母排结构由导电材料和绝缘材料叠加而成， 绝缘材料将导电材料隔离。 然后将导体层和绝缘层通过压合、 粘结形成一个整体。 当两层导体中流过反向电流时， 叠层结构母排中磁场重叠更多， 从而可以抵消更多的磁场。 综上所述， 叠层母排结构可以使功率回路的杂散电感更小， 由此SiC MOSFET的开关特 性 在 测 试 结 果 中 能 够 更 加 准 确 地 反 映出来。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic04x8gjlX8hmE9r7NojYTGOJv0fibhJPvBGQ3EKnB0xm8mjHqAlqjRnw/640?wx_fmt=png&from=appmsg)

在设计过程中通过软件仿真， 提取搭建的双脉冲测试电路中的寄生参数， 根据分析结果完善测试电路板的布局布线， 优化寄生参数， 最终完成测试电路的硬件设计。 功率回路中寄生电感参数最终仿真结果如图5所示。

功率器件的双脉冲测试平台中寄生电感、 电容等参数导致在功率器件关断时会出现振荡， 从而在器件两端产生过电压， 使开关损耗增大， 过高的尖峰电压会导致功率器件损坏。 针对这一问题， 在双脉冲测试平台上设计了一个电阻串联电容的吸收电路， 其并联在高压母线两端并且尽可能靠近功率器件。 实验过程中母线电容到被测器件之间的部分寄生电感带来过电压， 续流器件和负载电感中寄生电容带来过电流， 这部份能量在RC吸收回路中通过热能的方式被消耗掉， 从而减小了寄生参数对测试的影响。

2.2.2 驱动过欠压保护电路设计

SiC MOSFET正常工作时， 栅极正压过小会导致器件在饱和区工作， 大幅增大器件的导通损耗，同时降低器件的开通速度， 增大开通过程能量损耗， 器件寿命会严重受发热情况影响。 因此，功率器件应避免工作在较低的栅极电压下。 然而过大的栅极正压会对栅极氧化层造成永久性损伤， 缩短器件使用寿命， 故也应避免工作在过高的栅极电压下。 总之， 在驱动保护电路中设计过欠压保护电路是必要的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicDbruCURmcriaia1fLnL8ibD0pvG6XcfTyx4ElCSnYvkbC3H7ciaS2jtLPQ/640?wx_fmt=png&from=appmsg)

本次设计的过欠压保护电路拓扑图如图6所示， 其由3个电压比较器、3个功率器件以及电阻组成。SiC MOSFET 开通时， 通过检测驱动正压Vcc进行栅极过欠压保护。 数字化模块中3个电压比较器均采用单电源+20V供电， 受限于电压比较器输入电压， 需对栅极驱动正压进行分压处理， 将处理后的电压信号输入至电压比较器， 则有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicVDibTBgdywxQO5LHOAM8nBoktyicss4qjAicrSK0icB2dicQOMvVD9bQL3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic7dtSXS7H6HS2fBk2DVOEw6hmC0gLAJKq54j5riaZalWibibGgp1qBgHLQ/640?wx_fmt=png&from=appmsg)

式中： VDD为器件内部工作电压； Vref1 、 Ｖref2 、 Ｖref3为参考电压。

当电路在正常工作状态下， 分压电压V1＜Vref1，电压比较器1输出低电平； 分压电压V2＞Ｖref3 ， 电压比较器3 输出高电平。 这种情况下NMOS1关闭，PMOS1开通，NMOS2关闭， 电压比较器3的输入电压V3＞Ｖref2， 电压比较器2输出高电平。

当栅极电压处于过压状态下，V1＞Ｖref1， 电压比较器1输出高电平， 将NMOS1打开，V2＞Ｖref3 ，NMOS2与PMOS1保持原来的工作状态。 此时A节点的电压变为零， V3随之降低到小于Ｖref2 ， 电压比较器2输出低电平。

当栅极电压处于欠压状态下，V1＜Ｖref1 ， 电压比较器1输出低电平， 将NMOS1关断，V2＜Ｖref3 ，电压比较器3输出高电平， 控制NMOS1导通，PMOS1关断。 此时B点电压降为0V， 导致V3降低到Ｖref2以下， 电压比较器2输出低电平。

由以上分析可知， 不论是栅极电压发生过压故障还是欠压故障， 本文设计的保护电路均可将采集到的反馈信号发送给栅极控制器， 若反馈信号为负， 被测SiC MOSFET会及时关断。

2.3 测试平台实现

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic3fDNIlpzAQxHzDAptKtXFvIaFsEU8rDEJ3rospXLmP85BwWgGbiaH7w/640?wx_fmt=png&from=appmsg)

双脉冲测试平台由双脉冲测试印刷电路板（PCB， 图7）、 示波器（ 带宽 200ＭＨｚ， 采样率6.25GS／s）、 任意波函数发生器 （带宽250ＭＨｚ，采样率2GS/ｓ）、 光隔离探头（带宽1ＧＨｚ）、 高压差分探头（带宽200ＭＨｚ ）、 无源探头（ 带宽１ ＧＨｚ）、 罗氏线圈（量程120Ａ） 和电流探头（带宽50ＭＨｚ） 等仪器仪表组成。 搭建的双脉冲测试平台如图8所示， 可针对 ＴＯ⁃２４７⁃３ 和 ＴＯ⁃２４７⁃４封装结构SiC MOSFET完成上、 下开关管动态性能测试以及续流二极管性能测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicVdnibFLWXkAyfsMfoAh2lWOwWJiaNrGlngbj2c1kDuLId1zYdxrA3zkg/640?wx_fmt=png&from=appmsg)

SiC MOSFET具有开关速度快的显著优势， 因此测试设备带宽要足够高以满足测试要求， 同时较快的开关速度要求测试设备具有较强的抗干扰能力。 其中电流探头选择应主要考虑带宽及绝缘能力， 而电压探头选择则应主要考虑带宽及测量电压等级， 示波器作为信号采集的主要设备， 其带宽决定着采集数据与实际数据的匹配程度。 传统功率器件双脉冲测试平台采用高频电流探头和罗氏线圈来测量漏源极之间的电流。 传统的高频电流探头的量程较大， 导致带宽较低， 而带宽较高则会导致量程较小， 量程和带宽无法同时兼顾； 罗氏线圈通过磁场的变化来测量电流， 由于功率器件的开关速度快， 电路中的寄生电感、 电容所产生的磁场对罗氏线圈产生影响， 使得测量存在一定误差。 针对上述问题， 本文搭建的双脉冲测试平台加入了同轴分流器来测量漏源极之间的电流。 同轴分流器是一种纯电阻的结构， 该同轴分流器带宽可达400ＭＨｚ， 量程可达 100Ａ， 通过同轴分流器测量电流可减小测量误差， 获得更精准的器件电流信息。

同时该双脉冲测试平台的探头接口采用SMA、BNC和MMCX同轴接口， 同轴接口相比于传统接口通过接地回路测量缩短了测量路径， 减小了测量电路的寄生参数， 而且同轴接口与同轴线缆配合使用可以保证阻抗恒定， 确保信号传输正确， 进而减小测试过程中对测量信号产生的干扰。 本文设计的双脉冲测试平台参数如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicm60jGRZeHuKbNClSzJK6BlR67TDGR9tWOlib3psNVNfuwRddBIqohSg/640?wx_fmt=png&from=appmsg)

３.  SiC MOSFET 动态参数测试及特性分析

由于 SiC MOSFET 的动态特性参数与其结温 θｊ密切相关， 器件动态参数的测量均在指定结温 θｊ下完成。 因此本次测试在不同结温下完成， 根据测试结果对器件动态特性与结温的关系进行全面的评估。 选用器件信息如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicqicvXyf8TnmRjGL7z5EXSbxR1Wvss3GgY9eg2qMVWicTn2akpLCqXA6A/640?wx_fmt=png&from=appmsg)

3.1   IDS随结温的变化

分别在25、100和150℃结温下对各厂家不同电压等级器件进行测试， 得到器件IDS开通和关断波形如图9～14所示。 可以发现， 不同结温下器件IDS开 通 和关断波形存在较为明显的差异。SiC MOSFET的 di/dt绝对值在开通阶段具有正温度系数， 而在关断阶段具有负温度系数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicXTYsJibticS1Kr1KxI2ZdR4rhWicOedGacqoOA2HvwIl4JA3aWaicpqwgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicK6qpe4QZC4OH6K339CjQKc3TDTdonZ03CXeWP9uOwhET8etvCX1mCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicgVLzVCWxJdZibVicE8dPXMCETKAZ9kwgwhPxLicgJ35N3YPJlb6rhiaRMA/640?wx_fmt=png&from=appmsg)

分析其原因为： 阈值电压随器件结温升高呈现负温度特性， 开通过程越快， 开通电流峰值越大；关断过程随结温升高而变慢， 关断电流峰值减小。在桥式电路应用中， 由于上、 下开关管通常呈现互补导通状态，SiC MOSFET开通电流峰值由与其进行换流对管的体二极管反向恢复电流形成。 随着结温升高， 器件体二极管反向恢复电流峰值增大， 导致开通阶段IDS峰值随结温升高而增大。

3.2  VDS随结温的变化

分别在25、100和150℃结温下对各厂家不同电压等级器件进行测试， 得到器件 VDS开通和关断波形如图15 ～20所示。 可以发现， 不同结温下器件VDS电流开通和关断波形没有较为明显的差异。开通过程统一表现为随结温的升高dv/dt绝对值增大， 关断过程统一表现为随结温的升高dv/dt 绝对值减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic3ib9MSYLaSLvSznD5HAMzkAA0OF74fNZVZIf0CFNcd3ia9xlCmwJglqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic8q6jPztW8d3O0oEicRJCt0YichWfIl5wZqZR9mhk1nQwxNJCICXhMkuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic3OAfJvOicEPcgRbjkBAGHMMghsMDOEdA43RXCHGrcBm2WBIbMU8NyeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicrF13xicX9JlYmpsCuBW9NQMS1q3ia3bnmbJ737qYgfRoBp9qfOZfGehA/640?wx_fmt=png&from=appmsg)

开通过程中VDS为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzics4jEVibYdmJOSia8hdAOhBiaWKS8p5nuNXAztQ0TA6EULaQE8XCiclzY2w/640?wx_fmt=png&from=appmsg)

关断过程中VDS为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicSq300YdUBdice34vxpX0nia74GgC4PCgkv7Hzic8U4PSichXzDJE5Unyiaw/640?wx_fmt=png&from=appmsg)

式中：IL为负载电流；VP为正驱动电压；VPL为驱动负压；Vth为阈值电压； RG为驱动电阻；CGD为栅漏电容； gm为跨导， gm＝μWCox/2L， 其中 μ 为载流子迁移率， Ｗ 为器件沟道宽度， Ｌ 为器件沟道长度，Cox为单位面积栅氧化层电容。

将式 （4） 、 （5） 对 θｊ 进行求导， 得到开通、 关断过程中电压变化率与温度的关系分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicjftzYFAm6JciaJsCYrnTkFbzdtxwarwMxz9SjJkgR0gWI3NWxpl6BDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicEfibXYLCic5wicv1yDct7iaRITw1ObQv13LQ7ZbPOUbicvWQ34gAqRcZY1Q/640?wx_fmt=png&from=appmsg)

式中Id为漏电流。 寄生电容主要受其两端电压的影响， 结温对驱动电阻的影 响较小， 因此，结温对上述参数的影响可忽略。 而跨导具有正温度效应， 阈值电压具有负温度效应， 所以在开通过程中VDS变化率具有正温度效应， 随 结温的升高VDS变化率增大； 在关断过程中VDS变化率具有负温度效应， 随结温的升高VDS变化率减小。

3.3  VGS随结温的变化

分别在25、100和150℃ 结温下对各厂家不同电压等级器件进行测试， 得到器件VGS开通和关断波形如图21～ 26所示。 可以发现， 不同结温下器件VGS开通和关断波形没有较为明显的差异。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic5H8sTDfraSvK7ibSXpg4eicZAgaaia8XxH59w1iczib2FXorNKuElcQAzjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic4GxEibibewdGFRt7b3MN7Kdsj1CZAw9wSHs4XrVuncLEFKMBqQ2y9kLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicU8y2eeicerkibP9vF7ibmdOzJGUJYra0UmfdGW3kHEegGswubulMPTXjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic9zI6SAtqb7Wq4yibV1RZMXs0SSzGlk0PPyvgNLjoPbEp8KM2bjDxpXw/640?wx_fmt=png&from=appmsg)

分析其原因， 在开通和关断过程中VGS为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicnToAbufF6jUnPoNcx9IQfTUajJXjdibNYXaza0SBUDBOKKs9SYD0lNQ/640?wx_fmt=png&from=appmsg)

寄生电容主要受其两端电压的影响， 结温对驱动电阻的影响较小， 故结温对栅极电压的影响同样较小， 在实际测量过程中VGS在开通和关断过程中只有百皮秒级差异， 在SiC MOSFET使用过程中可以忽略不计。

3.4  关断能量损耗随结温的变化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicPF8pAqvREM7aznBVuHDpf0ibibQz51jdKhCn5Y0K0odCdBxl2X60ibgZw/640?wx_fmt=png&from=appmsg)

如图27所示， SiC MOSFET关断能量损耗随结温上升而增大，Eoff为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic9q5Rb3mbpOBgNecXx26ibclQkZyLwC0vzcCHPdHMT0R7OIDnkQ0X8qA/640?wx_fmt=png&from=appmsg)

Eon为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicOycTSvdZUHPr3WcoKr7gaCbQTtJPc8UGndic1SelmsicLrzcCiauiaRk3A/640?wx_fmt=png&from=appmsg)

如图28和图29所示， 随着结温的升高，td，off、tf不断增加， 故在关断过程中， 漏极电流与漏源电压之间重叠时间更长， 因此关断能量损耗计算公式中 t2－t1更长， 关断能量损耗随结温的升高而增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzich6nYBhcrbXGNoXCicUR1n1nPIoIuPmIH2lzkhRm6fDrZqocYmvtQHUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicDs69eeKHQfI8SYeicbic6LmkwdGJkw43uj5ibzNE3oXoicPib7gtPZncVrg/640?wx_fmt=png&from=appmsg)

3.5  开通能量损耗随结温的变化

如图30所示， A厂家和B厂家SiC MOSFET开通能量损耗随结温上升而减小， 而C厂家的SiC MOSFET开通能量损耗随结温上升而增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzic7wKMV3rWxYIehib57qkVof2GOicarhkl4V0ZhbVUic3vqpIdn0iaL4X1sg/640?wx_fmt=png&from=appmsg)

如图31和图32所示， 三个厂家不同电压等级SiC MOSFET的td，on和tr对结温的敏感性不同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicP9bNMgQK1D0cXPOvpoPltKRdiaqoYcOJlHibZZWf55Zw9WjaXKBzHxQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskYib0QG5Z63E4UATCpzWVzicLtCmZdPYj8r9OVk9vYdQZblvkibcibsGZraELoxq8IZv55XnVkwvU7Kg/640?wx_fmt=png&from=appmsg)

对于1200V器件， 三个厂家SiC MOSFET的td，on对结温的敏感性均较低， A厂家和B厂家SiC MOSFET的tr随结温上升快速缩短，C厂家SiC MOSFET的tr随结温上升缓慢增加，A厂家和B厂家1200V的SiC MOSFET上升时间随结温上升而缩短， 故开通过程中漏极电流和漏源电压的重叠时间更短， 因此开通能量损耗计算公式中的t4－t3更短， 开通能量损耗随结温的升高而减小；C厂家SiC MOSFET的开通时间随结温上升变化较小， 所以在开通过程中开通能量损耗变化较小。

对于1700V器件， B厂家和C厂家 SiC MOSFET的td，on对结温的敏感性较低， 温度增大该参数变化较小； A厂家SiC MOSFET的td，on随结温增大逐渐缩短。 A厂家和B厂家SiC MOSFET的tr随结温增大逐渐缩短， C厂家SiC MOSFET的tr随结温增大逐渐增加。A 厂家1700Ｖ SiC MOSFET的tr变化大于td，on变化， 因此 Ａ 厂家1700Ｖ SiC MOSFET开通时间随结温上升缓慢缩短， 漏极电流和漏源电压的重叠时间更短， 因此开通损耗计算公式中的t4－t3更短， 开通能量损耗随结温的升高而缓慢减小；B厂家1700Ｖ SiC MOSFET开通时间随结温上升缓慢缩短， 其开通能量损耗随结温的上升而缓慢减小；C厂家的1700Ｖ SiC MOSFET的tr随结温增大逐渐增加， 因此开通能量损耗计算公式中的t4－t3更长， 开通能量损耗随结温的升高而缓慢增大。

４ 结论

本文搭建的SiC MOSFET动态参数测试平台采用叠层母排结构设计， 主回路寄生电感达到6nＨ左右， 显著减小了测试时器件过快开关速度带来的影响； 另外通过驱动过欠压保护电路设计， 减小了器件较高电流密度的影响， 保证了测试平台的可靠性和快速 响 应。 为验证该测试平台的实用性，通过选取国内外不同厂家SiC MOSFET进行 测试， 全面评估器件关键动态参数与结温的关系。

本文设计搭建的双脉冲测试平台能够实现SiC MOSFET动态特性的精确测量， 具有一定的工程应用价值。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)