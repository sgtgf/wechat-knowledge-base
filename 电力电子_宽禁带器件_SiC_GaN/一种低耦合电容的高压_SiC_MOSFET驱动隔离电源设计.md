# 一种低耦合电容的高压 SiC MOSFET驱动隔离电源设计


> 原文地址: [https://mp.weixin.qq.com/s/9MkTieK4y5OqM5AWUUzGJA](https://mp.weixin.qq.com/s/9MkTieK4y5OqM5AWUUzGJA)

**文章来源：**太阳能学报

**作者：**黄樟坚，汪　涛，李　响，张茂强，骆仁松，虞晓阳（南京南瑞继保电气有限公司，南京 211102）

**摘　要：**高压 SiC MOSFET更快的电压变化率dv/dt，导致其驱动遭受更严重的共模干扰，而现有高隔离电压驱动电源大多又存在耦合电容高、共模瞬态抗扰度（CMTI）能力弱、转换效率低等问题，因此该文设计一种兼具高隔离电压、高转换效率的低耦合电容驱动隔离电源。首先，基于有源钳位反激变换器，提出一种驱动隔离电源耦合电容等效简化解析模型，并通过仿真、实验验证解析模型可行性；其次，基于该模型分析耦合电容影响因素及其优化方法，为低耦合电容的驱动电源设计提供参考；最后，通过实验评估所提低耦合电容高压 SiC MOSFET驱动隔离电源性能。结果表明，该文驱动隔离电源额定转换效率约 80%，工频耐压高达 18 kV，且耦合电容不足 2 pF，CMTI能力强。

**关键词：**碳化硅；MOSFET；解析模型；驱动电源；耦合电容

**0.　引　言**

近年来，各大半导体器件厂家陆续推出 3.3 kV 的高压大电 流 碳 化 硅（silicon carbide，SiC）MOSFET 模 块 ，随 着 SiC MOSFET 电压、电流等级的提升，其在简化拓扑结构、提高功率密度等方面优势明显，已成为分布式光伏发电及储能、交直 流 微 网 等 领 域 的 关 注 热 点。然 而 相 比 Si IGBT，SiC MOSFET 更快的电压变化率 dv/d_t_，将通过驱动隔离变压器一二次侧耦合电容 Cio 产生更大的共模电流，从而对一次侧的弱电信号产生干扰。因此，研究低耦合电容的高压 SiC MOSFET 驱 动 隔 离 电 源 ，对 提 高 驱 动 共 模 瞬 态 抗 扰 度（common mode transient immunity，CMTI）性能具有重要意义。

目前，已有一些文献对低耦合电容的驱动隔离电源开展研 究，归 结 起 来 主 要 分 为 4 类。

第 1 类 是 光 纤 功 率 传 输（power over fiber，PoF）方案，光纤能轻易实现高隔离电压，且耦合电容可忽略不计，但 PoF 方案转换效率不足 24%，输出功率仅 0.5 W，难以满足高压大电流 SiC MOSFET 驱动功率要求。

第 2 类是基于感应电能传输（inductive power transfer，IPT）的非接触式空心变压器方案，然而空心变压器对电磁干扰更加敏感，且空心变压器要想获得较高的转换效率，需较大的体积来提高变压器互感系数，导致隔离电源功率密度减小，耦合电容增加。文献［9］提出一种基于印制电路板的IPT 变压器，降低了变压器体积，耦合电容也从 18 pF 减小至2.2 pF，但变压器即使工作在兆赫兹频率，互感系数仍很低，转换效率不足 49%。

第 3 类是电流型变压器方案，电流型变压器一次侧绕组为流过高频交变电流的单匝高压绝缘线，二次侧通过多匝绕组取能，该方案易实现低耦合电容、高隔离电压及多路输出，但对高频交变电流源的可靠性要求较高，一旦其发生故障，所有二次侧输出都将受到影响，此外，高 频 交 变 电 流 形 同 一 个 电 磁 干 扰 源，恶 化 板 卡 电 磁 环境，该方案仍主要应用于对隔离电压要求很高的断路器、限流 器 等 场 合。

第 4 类是已广泛使用的电压型变压器方案，目前商用的电压型驱动隔离电源耦合电容大都在 8~20 pF之间，CMTI 能 力 较 弱，耦 合 电 容 仍 有 较 大 提 升 空 间，文献［16］研究几种低耦合电容的电压型驱动隔离变压器，但偏向于仿真、测试结果的简单比较，并未深入分析耦合电容影响因素及驱动隔离电源的工作性能。

综上，现有驱动隔离电源要么输出功率小、转换效率低，要么存在耦合电容大、CMTI 能力弱等问题。因此，有必要研究 兼 具 高 转 换 效 率、高 隔 离 电 压、低 耦 合 电 容 的 高 压 SiC MOSFET 驱动电源。本文基于有源钳位反激变换器，提出一种隔离变压器耦合电容 Cio 等效简化解析模型，分析了 Cio 影响因素及其优化方法，设计了一款 Cio 不足 2 pF 的高压 SiC MOSFET 驱动隔离电源，同时该隔离电源具有高转换效率、高隔离电压、强 CMTI 能力的优点。

**1.　有源钳位反激变换器**  

反激变换器因其元器件少、结构简单等优点，常应用于驱动隔离电源场合。但反激变压器漏感能量释放使开关管承受较大的关断电压尖峰，传统无源吸收电路损耗又较大，而有源钳位反激变换器不仅可有效降低开关管电压应力，还能实现零电压开通（zero voltage switching，ZVS），提高变换器效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBR8Hhczl1sHNvHL8NlNd4yYycibLw3OHRqz3hAxUEGdNvjIlL6C6oPYhg/640?wx_fmt=png&from=appmsg)

低边有源钳位反激变换器结构框图如图 1 所示［17］，图 1中 Vin 为输入电压，Vout 为输出电压，Lm 为励磁电感，Lr 为漏感，Np 和 Ns 分别为一二次侧绕组匝数，Qm为主开关管，Qr为钳位开关管，Coss1 为 Qm输出电容，Coss2 为 Qr输出电容，Cr 为钳位电容，D1为二次侧整流二极管。为提高一二次侧隔离电压，变压器二次侧不做反馈，直接开环输出，并在二次侧输出增加宽输入范围的开关电源模块获得稳定的驱动电压。

本文以驱动 3.3 kV/750 A 的高压大电流 SiC MOSFET 为目标，设计一款输出功率 Pout = 6 W 的低耦合电容驱动隔离电源，其目标参数如表 1 所示，表 1 中驱动变压器的一二次侧隔离电压 Viso 可查阅 IEC 61800\-5\-1 标准。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRhMSGr3IPTHcoyXTzBQlpQByNlJaHFgI4yjjMcrqFWVU2IT0nLLEXqw/640?wx_fmt=png&from=appmsg)

虽然 E 型磁芯开气隙有利于减小变压器体积，但 E 型磁芯一二次侧重叠绕制方式大大增加了耦合电容。因此，本文选择一二次侧分开绕制的环形磁芯，磁芯材料选择高频损耗特性更优的铁氧体。基于文献［19］所述设计方法，有 源 钳 位反激变 换 器 关 键 参 数 设 计 如 表 2 所 示。一 二 次侧 绕 组 选 择 三 重 绝 缘 利 兹 线 ，绝 缘 层 材 料 为 聚 氟 乙 烯（ethylene tetra fluoro ethylene，ETFE），单 重 绝 缘 层 厚 度0.0508 mm，三重绝缘层耐压达 9 kV（rms/50 Hz/min），单股线芯直径 0.1 mm，共 40 股。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRNxRetVTygjx7RaptYdt1MgibEmJkcUTWb3oYUSTiaIUDVgia4yv2NgicJA/640?wx_fmt=png&from=appmsg)

**2.　隔离电源耦合电容等效简化解析****模型**

本文借鉴平板电容器思想，将驱动隔离变压器耦合电容等效为如图 2a 所示的三电容体系。图 2a 中 rc,o 为磁环外径，rc,i 为磁环内径，h 为磁环高度，Cp,c 为一二次侧绕组与磁芯间电容，Cs,c为二次侧绕组与磁芯间电容，Cp,s 为一二次侧绕组间电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRGs3GtcPhcL3Oic1yegpXpYedv6D2C9HNrVTvAHAzJURO9RLhbdaZW6Q/640?wx_fmt=png&from=appmsg)

一次侧绕组纵截面如图 2b 所示，rw,i 为三重绝缘线内导体直径，rw,o 为三重绝缘线外径，借鉴平板电容器思想，将一次侧绕组沿磁芯横截面展开构成平板电容器的一个极板，磁芯构成另一极板，则一次侧绕组与磁芯间电容 Cp,c 可近似简化为如图 2b 所示的平板电容器。图 2b 中 dcu 为圆形绕线导体等效为正方形导体时的边长：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRbsEf2GuIdE1ZzwexXuNCuNdUPJjWF8MOyWrR3yPV67R0dF6ic3QkYjg/640?wx_fmt=png&from=appmsg)

图 2b 中 dtr 为三重绝缘层厚度，dair 为一次侧绕组与磁芯间的空气间隙，dtr 和 dair 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRdBEqR6UuFjzqZnbr08NQicMcEaat2omA1Gj59eHzcS1Fj0Fkrhzwcqg/640?wx_fmt=png&from=appmsg)

式中：k——修正系数，用来修正实际绕制过程中，绕组与磁芯间的空气间隙误差。

图 2b 中 lp,c 为一次侧绕组等效极板长度：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRyOz87FIulZm03f3L0oyxicicFRXCgxep0JLXx1fb47mqxwibBobVc2E9w/640?wx_fmt=png&from=appmsg)

图 2b 中 wp,c 为一次侧绕组等效极板宽度，可等效为磁芯横截面周长：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRG3GT5lGnj0WwFurc3CVvBOylZLcvaYL912hUXhKRQdU4ng3nTia9WwA/640?wx_fmt=png&from=appmsg)

基于理想无穷大平板电容器表达式，可得不考虑边缘效应时 Cp,c 的理想值 Cp,c(ideal) 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRHib9ZVynRnm1GiatXMLRBDkfSSUf497bI4DdMkKPJtxDLMWNkhFjU5nw/640?wx_fmt=png&from=appmsg)

式中：ε0——真空介电常数，F/m；εr,air——空气相对介电常数；εr,tr——三重绝缘层材料相对介电常数。

实际 Cp,c 并非无穷大平行板，需对其边缘效应进行补偿，考虑边缘效应时 Cp,c 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBR8vqX3XBFryXqyoFVW8c9dT6tEicEg4fdY9aZSg3kVKR0J95bZD7VeicA/640?wx_fmt=png&from=appmsg)

式中：Ccmp1——考虑边缘效应时 Cp,c 的补偿值，pF。

一 二 次 侧 绕 组 间 电 容 Cp,s 主 要 考 虑 磁 芯 内 侧 绕 组 影响，可 简 化 为 如 图 2c 的 等 效 平 板 电 容 器。鉴 于 三 重 绝 缘层 厚 度 dtr 远 小 于 磁 芯 内 径 rc,i，因 此 近 似 认 为 一 二 次 侧 介质 只 有 空 气 。当 不 考 虑 边 缘 效 应 时 Cp,s 的 理 想值 Cp,s(ideal) 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRupT8fJiboiaTohPaZMr2Q2LwByyIPh7oOrsCskWzBqPsrAetBhHKWVCg/640?wx_fmt=png&from=appmsg)

实 际 Cp,s 也 需 对 其 边 缘 效 应 进 行 补 偿，考 虑 边 缘 效 应时 Cp,s 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRh1lIyyBpXJic5Hb0PQiaU0BNfQ2hicy62ncxNBvMSiarwIia9aHOicjiaVicpg/640?wx_fmt=png&from=appmsg)

式中：Ccmp2——考虑边缘效应时 Cp,s 的补偿值，pF。

图 3 给出了耦合电容 Cio 三电容体系的等效电路，Cio 可等效为 Cp,c 串联 Cs,c 后，再与 Cp,s 并联的结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRPhcTbzedwSUZvcVXw6ibxj0YJX6EruiaVJZZcb0NicOWm9F84Atc6Bx4g/640?wx_fmt=png&from=appmsg)

由于 Np∶Ns=1，则 Cp,c = Cs,c，Cio 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBR5RPMasMwociaCoVfYFbIvS7qlLibmWvRsmgZ90LBY7qhzcaAkMPnUskg/640?wx_fmt=png&from=appmsg)

将 参 数 rc,o = 25.30 mm，rc,i = 14.80 mm，h \= 10 mm，rw,o\= 0.95 mm，rw,i = 0.65 mm，dtr = 0.15 mm，ε0≈8.85×10\-12F/m，εr,air = 1，εr,tr = 2.60，k \= 1.10，代入式（1）~式（8）中，可得 Cp，c=4.86 pF、Cp，s=0.10 pF，再将 Cp，c和 Cp，s代入式（9）可得 Cio=2.53 pF。从等效简化解析模型计算结果可知，一二次侧绕组与磁芯间电容占变压器耦合电容的绝大部分，而一二次侧绕组间电容占比要小很多。

为验证所提耦合电容等效简化解析模型可行性，建立如图4a所示的驱动隔离变压器三维模型，Cio 静电场仿真结果如图4b 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRtvHgNdOgjZTDPzbVia45aIdw2Wt7iaySKd3AFdvMWghAAKpuGyFK4Rcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRmERv5nibPX9zbDHcQ3BxW56BdMC9mk5XgDYiaKicvXYYiaDz5rWx0odgHQ/640?wx_fmt=png&from=appmsg)

由图 4 可知 Cio 仿真结果为 2.60 pF，与等效解析模型计算结果接近，且静电场强度也主要集中在一二次侧绕组与磁芯之间，而一二次侧绕组间电场强度则弱得多，说明 Cp，c 和Cs，c占 Cio主要部分，与解析模型分析一致。

为进一步验证该文所提等效简化解析模型的可行性，使用 E4990A 阻抗分析仪对实际绕制的变压器耦合电容进行测试，驱动变压器实物图及耦合电容测试结果如图 5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBREQEmKC4VKJ9InKD7v25vvNXzKXQkhY4ibS47d16kX7jJjLCGK6dTqmw/640?wx_fmt=png&from=appmsg)

从测试结果可知，变压器耦合电容在 450 kHz 频率下测试值约 2.60 pF，与模型解析值及仿真结果基本吻合，验证了所提耦合电容等效简化解析模型的可行性。

**3.　隔离电源耦合电容优化设计**

由耦合电容 Cio 等效简化解析模型分析可知，一二次侧绕组与磁芯间电容 Cp,c 和 Cs,c 占 Cio 的绝大部分，因此，减小Cio 可从以下两个方面考虑：1）减小一二次侧绕组与磁芯的交叠面积；2）增大一二次侧绕组与磁芯的间距。基于上述优化方法，对比分析不同变压器结构下的 Cio，为设计低 Cio 的驱动隔离变压器提供参考。

**3.1　减小一二次侧绕组与磁芯交叠面积**

为验证一二次侧绕组与磁芯交叠面积对 Cio 的影响，对比分析不同磁芯尺寸、不同绕组匝数和不同绕组疏密程度下的 Cio。

以不同磁芯尺寸为例，在保持励磁电感 Lm 不变情况下，增大磁芯尺寸至 rc,o = 29.50 mm，rc，i=19.00 mm，h\=14.90 mm，一二次侧绕组从 5 匝减小到 4 匝，将参数带入等效简化解析模型，可得 Cio = 2.72 pF。其静电场仿真及实测结果如图 6 所示，Cio 静电场仿真结果为 2.92 pF，实测结果在 450 kHz 频率下 Cio 约 2.95 pF，都与模型解析值接近。增大磁芯尺寸后，虽然一二次侧绕组间距离增加，但 Cio 反而增大，这是由于磁芯尺寸增大，磁芯横截面积也随之增加，导致一二次侧绕组与磁芯的交叠面积增加，Cp,c 和 Cs,c 都增大，Cio 增加。因此，简单的增大磁芯尺寸未必能减小 Cio，甚至可能增大 Cio。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRXoy8ElR4zG5m5XTBAPPO3kyzZj4SoMqUibpiagteYUETficmewZbJAgqw/640?wx_fmt=png&from=appmsg)

为进一步分析一二次侧绕组与磁芯交叠面积影响，表 3给出相同磁芯尺寸，不同绕组线径、绕组匝数和绕组绕制疏密程度下 Cio 的解析值、仿真值及实测值。由表 3 对比结果可知，相同绕组匝数与疏密程度下，绕组线径越粗，绕组与磁芯交叠面积越大，Cio 越大；相同绕组线径与疏密程度下，匝数越多，绕组与磁芯交叠面积越大，Cio 越大；相同绕组线径和匝数下，疏绕方式使绕组与磁芯交叠的有效长度增加，对应简化模型的 wpc 增大，导致绕组与磁芯交叠面积增加，Cio 增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRC0fS04FbQvXtfULib0sd6kzZNvD4WjqQXsLsedjjkZXRhScdnvAswXA/640?wx_fmt=png&from=appmsg)

**3.2　增大一二次侧绕组与磁芯间距**  

在相同绕组线径、匝数、疏密程度及磁芯尺寸情况下，在绕组与磁芯之间增加厚度为 db 的骨架，从而增大一二次侧绕组与磁芯的间距。

加入骨架后，一二次侧绕组与磁芯间电容 Cpc,b 和 Csc,b，仍然 满 足 Cpc,b = Csc,b，不 考 虑 边 缘 效 应 时 Cpc,b 的 理 想值 Cpc,b(ideal) 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRAib8icGazcJGdibWqciaaJ5libqSzqCzTDy2PEgg3M4DjR3DqH967y0JFyQ/640?wx_fmt=png&from=appmsg)

式中：Cb,cmp1——考虑边缘效应时 Cpc,b 的补偿值，pF。

加入骨架后，一二次侧绕组间电容为 Cps,b，不考虑边缘效应时 Cps,b 的理想值 Cps,b(ideal) 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRrCRO4MA9zoZ63hGOeSunPUT1eVsqZcHoBlgC1TEl4cPRrg6T0VUictQ/640?wx_fmt=png&from=appmsg)

考虑边缘效应时 Cps,b 为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBROzibtHRQFTZDMMHsnlzgWZ3Iceq2ibLDXyUwicxrAbUXZ0ArpB5ATIhTQ/640?wx_fmt=png&from=appmsg)

式中：Cb,cmp2——考虑边缘效应时 Cps,b 的补偿值，pF。加入骨架后的耦合电容 Cio,b = Cpc,b /2 + Cps,b。

变压器骨架通过 Stratasys 公司三维打印机制作，增加骨架后的隔离变压器实物如图 7a 所示。骨架采用 Stratasys 公司 Vero 系列的刚性不透明材料，材料特性与丙烯酸脂类似，相对介电常数 εr,b ≈ 3.5；骨架外侧弧长 rb,o ≈ 28.5 mm，内侧弧长 rb,i ≈ 8.4 mm，骨 架 厚 度 db = 1.0 mm。将 各 参 数 分 别 代入式（10）~式（13）可得 Cio,b 减小至 1.14 pF。

带骨架隔离变压器的耦合电容静电场仿真及实测结果分别如图 7b 和图 7c 所示。Cio,b 静电场仿真结果为 1.29 pF，实 测 结 果 在 450 kHz 频 率 下 为 1.32 pF，与 模 型 解 析 结 果相近。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRNUZxnCvdv24FOUvHsfibaVHwCAvLdYH6e5gmUDp5PgCaicicHtZfTFiaDg/640?wx_fmt=png&from=appmsg)

骨架的加入，增大了一二次侧绕组与磁芯的间距，有效减小了变压器耦合电容；但同时变压器漏感也会有所增加，需评估反激变换器有源钳位电路设计是否仍然满足要求。此外，本文变压器骨架现阶段仅是围绕减小耦合电容进行初步设计，在骨架材料选型、结构强度、骨架固定、绕组限位等方面仍可进一步改善，在实际工程应用中，通常根据需与变压器厂家开模定制骨架，提升隔离变压器性能。

**4.　低耦合电容驱动隔离电源实验验证**

结合表 1 和表 2，经优化后的驱动隔离变压器如图 7a 所示，其耦合电容小于 2 pF 的目标值，基于该隔离变压器，设计了 3.3 kV/750 A 高压 SiC MOSFET 的驱动样机如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRjaMRoSTZLP8K6GB4OJsSgMG7kHPyFG70EticmEGt3nic3sfqtLhTI3QA/640?wx_fmt=png&from=appmsg)

图 9 给出了 Vin = 15 V，Pout = 6 W 时，驱动隔离电源相关实验波形。图 9 中 vgs,Qm 和 vgs,Qr 分别为主开关管 Qm和钳位管 Qr的栅源极电压，vds,Qm 为 Qm漏源极电压。从实验结果可知，驱动隔离电源二次侧输出电压 Vout=35.7 V；由于变压器漏感能量被钳位电容 Cr 吸收，Qm关断电压未发生过冲振荡，尖峰被有效抑制；在 vgs,Qm 开通 Qm前，vds,Qm 已下降至导通压降，Qm实现了 ZVS 开通，从而提高了驱动隔离电源的转换效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBR7e4jo8GBhMydExHOF8yxicUVHSJAibDvuURmXIxBWAhB2UicCJknVcRow/640?wx_fmt=png&from=appmsg)

图 10a 给出了 Vin = 15 V，不同输出功率 Pout 下，驱动隔离电源的转换效率。100% 额定输出功率时，转换效率约 80%；当输出功率减小时，转换效率也随之降低，但即使在 25% 输出功率下，转换效率仍有 63.5%。

图 10b 给出了 Vin = 15 V，Pout = 6 W 时，隔离变压器热成像图。环境温度 26.8 ℃下，磁芯最高温度 64.5 ℃，小于磁芯材料 100 ℃的允许工作温度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRhy0N3Qgr87YDibaEib5XVGJFHMN8hibOjpibVbVhaCuk7kn0Rutd7hu7wg/640?wx_fmt=png&from=appmsg)

为评估所设计低耦合驱动隔离变压器一二次侧绝缘性能，基于 YDTW\-400 kVA/100 kV 工频试验变压器成套设备，搭建如图 11 所示的耐压测试系统。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRNfMCq5Do4hCwwK9oMldYDC3EdTRdJF3C0eWyjWd1D4Rh5EWuK2B5hg/640?wx_fmt=png&from=appmsg)

图 11 所示测试系统主要包括调压器、试验变压器、保护电阻和电容分压器。调压器调节试验变压器一次侧输入电压，试验变压器二次侧输出电压通过电容分压器测量，保护电阻用于限制电流防止试验变压器损坏。被测隔离变压器的一次侧绕组短接、二次侧绕组也短接后，在一二次侧两端 进 行 耐 压 测 试。当 隔 离 变 压 器 一 二 次 侧 两 端 电 压 加 到18 kVrms 时，保持 1 min，隔离变压器一二次侧漏电流小于1 mA，未发生绝缘击穿现象。

CMTI 是驱动隔离电源关键参数，通常以工作允许电压变 化 率 dv/dt 大 小 来 表 征 其 CMTI 性 能。本 文 基 于 3.3 kV/750 A 高压 SiC MOSFET，搭建如图 12 所示双脉冲测试平台，来评估所设计驱动隔离电源 CMTI 性能。

图 12 中由高压直流电源提供直流母线电压 Vdc，Cdc 为直流母线电容，负载电感 Lload=50 µH，上管 QH为被测器件，下管QL为辅助器件，Rgon，H、Rgoff，H 为 QH驱动开通、关断电阻，Rgon，L、Rgoff，L为 QL驱动开通、关断电阻，SH 为控制板给 QH的双脉冲驱动信号，SL 为控制板给 QL的常关驱动信号。测试过程中同时测量 QH的栅源极电压 vgs、漏源极电压 vds、漏极电流 id。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRFnGugf3hGD27I3KJjmRI0G2tauvUficQewrhUuBJQaRa3E6HibqQg4DA/640?wx_fmt=png&from=appmsg)

图 13 给出驱动正电压 17 V，驱动负电压-5 V，Vdc=2 kV，id=750 A 下的开关过程波形。为加快 SiC MOSFET 开关速度，取 Rgon，H=0.9 Ω、Rgoff，H=2 Ω。由图 13 可知，开通过程 dv/dt最 大 约 11.6 kV/µs，关 断 过 程 dv/dt 最 大 约 38.2 kV/µs，SiC MOSFET 开关过程正常，本文所提驱动隔离电源 CMTI 能力至少满足 38.2 kV/µs。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRPEACDZEmmSSIxYGCNuCpTpib4GVVd0R62xhlics4ibC9ibJkibxtvqweBibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRgvD6RfUK54QL6OlFico9N1E4fBSficwuOYChYxLcu2sCia6AQkDz26ia2g/640?wx_fmt=png&from=appmsg)

双有源桥（dual active bridge，DAB）变换器因其具有能量双向流动、易于模块化等特点，在光伏直流汇聚与消纳领域有着广泛的应用前景。高压 SiC MOSFET 运用于 DAB变换器，能有效减少模块级联数量，提高变换器效率和功率密度。本文基于如图 14a 所示 DAB 功率模块单元，进一步评估所设计低耦合电容驱动隔离电源在高压 SiC MOSFET 连续开关下的工作可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRIX45g16yJIOWkSwyK1WPzxzcjAjoCEmgtCic1hsnGJvD3lxNP5su5FA/640?wx_fmt=png&from=appmsg)

图 14 中，Q1和 Q2为 3.3 kV/750 A 高压 SiC MOSFET，Q3、Q4、Q5和 Q6为 1.2 kV/400 A 低压 SiC MOSFET，Ls 为变压器漏感，V1 为一次侧直流母线电压，C1，H 和 C1，L 为一次侧直流母线电容，V2 为二次侧直流母线电压，C2 为二次侧直流母线电容。在测试过程中同时测量 Q2的栅源极电压 vgs，Q2、变压器一次侧电流 ip、一次侧桥臂电压 vAB、二次侧桥臂电压 vCD。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskzvamlCpzaYQP4ZtDAdlBRLiaLURol3vJtKiacESyDm6xRDPZ8NPITWiaYpZzXxhuiaoWYww588QXAEw/640?wx_fmt=png&from=appmsg)

当 V1=2 kV，V2=750 V，一、二次侧 SiC MOSFET 开关频率为 10 kHz 时，DAB 功率单元连续运行的测试波形如图 14b所示。从测试结果可知，本文设计的低耦合电容驱动隔离电源能持续可靠驱动 3.3 kV/750 A 高压 SiC MOSFET。

表 4 对比本文所设计的驱动隔离电源与 Power Integrations公司商用驱动隔离电源性能。从对比结果可知，本文设计的驱动隔离电源在功率密度、一二次侧耐压等级和 CMTI 性能更优；且本文驱动隔离电源无需灌胶、塑封等工艺，成本上也更具优势。

**5.　结　论**

为提高高压 SiC MOSFET 驱动 CMTI 性能，抑制快速变化 dv/dt 经隔离变压器耦合电容 Cio产生的共模干扰。本文基于有源钳位反激变换器，提出一种隔离变压器耦合电容等效简化解析模型，分析耦合电容影响因素及其优化方法，设计一款低耦合电容的高压 SiC MOSFET 驱动隔离电源，并通过实验评估了所提驱动隔离电源的性能。所得主要结论如下：

1）所提隔离变压器耦合电容 Cio 等效简化模型解析值与静电场仿真、实测结果都接近，验证了该简化解析模型的可行性。

2）一二次侧绕组与磁芯间电容占耦合电容 Cio 的绝大部分；减小绕组与磁芯的交叠面积，增大绕组与磁芯间距都能有效降低耦合电容；经优化后的隔离变压器耦合电容不足 2 pF。

3）所提驱动电源具有高转换效率、高隔离电压、强 CMTI能力的优点。

本文研究成果对高压 SiC MOSFET 在分布式光伏发电及储能、交直流微网等领域的应用具有一定指导作用。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)