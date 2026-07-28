# 基于二阶拟合模型的 SiC 双向 LLC 数字同步整流控制


> 原文地址: [https://mp.weixin.qq.com/s/mEIqY3D1j12UfDdiTaw5bg](https://mp.weixin.qq.com/s/mEIqY3D1j12UfDdiTaw5bg)

**文章来源：**电工技术学报

**作者：**李浩然 1 崔超辉 1 王生东 2 张之梁 3 胡存刚 1（1\. 安徽大学电气工程与自动化学院；2\. 中国电子科技集团公司第五十五研究所；3\. 南京航空航天大学自动化学院）

**摘要：**传统 LLC 同步整流控制采用高频信号检测的方法，易受高 dv/dt 影响导致占空比丢失，导通损耗增大；而直接给定占空比的方法，无法跟随负载变化，宽负载范围下导通损耗急剧上升。该文提出基于二阶拟合模型的 SiC 双向 LLC 数字同步整流控制，跟踪负载和开关频率的变化，实时计算同步整流导通时间。LLC 一次侧和二次侧开关管开通时刻一致，同步整流管关断时刻由所计算的同步整流导通时间决定。在宽负载范围内实现了低导通损耗，无需检测高频信号，抗干扰性强。该文分析当谐振电感和输出等效电阻存在 10% 误差时，同步整流导通时间误差最大仅为2.73%。搭建 6.6kW SiC 双向 LLC 充电机实验样机，实验验证了所提同步整流控制的有效性。相比于传统 LLC 同步整流控制，所提控制正向满载 6.6kW 下效率提高了 0.36%，反向满载 3.3kW 下效率提高了 0.29%。

**关键词：**LLC 变换器.同步整流.双向 .SiC MOSFET .拟合模型

**0.引言**

LLC 谐振变换器具有宽零电压软开关（ZeroVoltage Switching, ZVS）和零电流软开关（ZeroCurrent Switching, ZCS）的优势，且励磁电感可集成在变压器中实现高功率密度，是近年来备受关注的隔离型拓扑结构之一。结合具备高频、高压优良特性的宽禁带器件，LLC 变换器可进一步实现极高的效率和功率密度，广泛应用在电动汽车、储能系统及光伏系统中。

同步整流（Synchronous Rectifier, SR）技术是采用 MOSFET 代替整流二极管，可显著降低整流导通损耗，是实现 LLC 变换器高效率的最有效方法之一。理想情况下，当电流流过 SR 管体二极管时，控制器立刻驱动 SR MOSFET 导通，使电流从体二极管转移到 MOSFET 沟道中。当 SR 管导通电流为零时，驱动信号立刻关断 SR MOSFET，防止功率回流。

现有 LLC 变换器同步整流方法常分为两类：第一类是通过测量高频电压/电流信号的方法，控制同步整流管的开通或关断；第二类是非直接测量方法，直接给定同步整流占空比或通过建模计算导通占空比。第一类方法中，通过测量一次侧谐振腔电流或SR 管的漏源极电压或电流，控制 SR 管开通或关断。文献中，利用电流互感器检测一次侧谐振电流，实现对 SR 管的控制。文献中，采用电流互感器检测变压器二次电流，控制同步整流管开通或关断。然而，利用传感器测量电流的方案，需额外的电流传感元件，损耗较大，且电流互感器增加了变换器的体积。文献中，基于 LLC 变换器一次侧谐振电流和输出电压控制同步整流管的导通时间，实现同步整流策略。但在过谐振或完全谐振的情况下，同步整流和一次侧驱动完全同步，导致不同负载下占空比存在丢失，使得同步整流管导通损耗增加，效率降低。

文献中，通过测量 SR 管的漏源极电压来控制功率管开通和关断，检测漏源极电压同步整流策略如图 1 所示。当漏源极电压低于导通阈值时，说明此时体二极管有电流流过，检测芯片输出驱动信号使其导通。关断时，通过判断漏源极电压的大小，控制同步整流管关断。文献也是通过测量漏源极电压来实现同步整流功能。它有精确的关断阈值和低导通时间，最高工作频率达 1MHz。然而，该芯片测量的最大电压仅为 200V，更高电压下便难以有效工作。文献的原理是类似的，均通过测量漏源极电压来控制 SR 管。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1okibV1zs3NKScDUd5D5XXMU2W7NXLjeOPtGZSbjtjQEHF06aFotk6ib6w/640?wx_fmt=png&from=appmsg)

上述方法在低电压下是有效的（几十 V），但在高电压下并不适用（高达 700V）。高 dv/dt 下，寄生电感极易影响检测电路的准确性。检测电路也增加了变换器的复杂性和成本，特别是在双向 LLC 应用中。

文献中采用模拟同步整流芯片实现同步整流功能。同步整流芯片最大耐压为 200V，但在漏源极上采用电阻分压的方案，漏源极电压经过分压后送入同步整流芯片检测口。通过调整分压电阻的比值，可实现同步整流芯片在高于 200V 电压的情况下工作。但是，该方案对分压电阻的精度要求较高，多个分压电阻值之间的误差，可能导致 SR 芯片输出驱动不同，影响电路正常工作。

第二类方法是非直接测量方法。文献中，将同步整流管占空比与输出电压的乘积视为常数，计算输出电压变化时的同步整流占空比。但它不适合电动汽车动力电池充电的应用场景，因为当电池电压增加时，同步整流占空比会不断下降，这是不准确的。文献利用 LLC 变换器的仿真模型，对同步整流管的开通和关断延迟时间进行仿真，并在两个查找表中预置开通和关断延迟时间，优化系统效率。但是，当 LLC 变换器谐振参数发生变化时，需要重新建立查找表，通用性较差。且该方法只考虑输出电流，忽略电池电压变化，不能反映实际输出功率，因此所输出的同步整流驱动信号精度有待进一步提高。

在文献中，提出了两种相似的同步整流驱动方案，直接给定了同步整流管的导通时间。但该方法忽略了负载的变化，同步整流占空比存在丢失，使得同步整流 MOSFETs 的体二极管导通时间较长，导致导通损耗较大、效率不高。文献中，同步整流导通时间只考虑了开关频率，忽略了负载变化，导致宽范围负载下，效率有待提高。

针对现有同步整流方案存在的检测电路复杂、抗干扰性弱以及同步整流导通占空比精度不高的问题，本文提出了基于二阶拟合模型的 SiC 双向 LLC数字同步整流控制策略。通过在频域建立同步整流导通时间的解析模型，利用二阶多项式拟合原始复杂模型，简化计算同步整流导通时间，具备控制简单、抗干扰性强和 SR 导通时间精度高的优点。最后，基于所搭建的 6.6kW SiC 双向 LLC 充电机平台，验证所提同步整流控制的有效性。

**1. 基于二阶拟合模型的 SiC 双向 LLC 数字同步整流控制**

为提高双向 LLC 变换器效率，提出了基于二阶拟合模型的 SiC 双向 LLC 数字同步整流控制。该控制通过准确计算同步整流管导通时间，从而显著降低同步整流管导通损耗，进一步提高效率。  

**1.1 基于二阶拟合模型的 LLC 同步整流正向控制**

正向模式下，所提基于二阶拟合模型 SR 控制策略如图 2 所示。图 2 中，ΔTfor 为 SR 导通时间；fr 为谐振频率；fs 和 ro 分别为开关频率和等效输出电阻；p00～p02 和 q00～q02 均为拟合常数；ton\_Q 和 ton\_s分别为一次侧和二次侧驱动的开通时刻；toff\_s 为二次侧驱动的关断时刻；iLr 和 iLm 分别为谐振电流和励磁电流；iS1 和 iS2 分别为 S1 和 S2 的导通电流；Iref和 Vref 分别为电流参考和电压参考值；PI 为比例积分控制器。Q1～Q4 和 S1～S4 均为 MOSFETs，采用了数模转换器（Analog-to-Digital Converter, ADC）进行采样，LLC 变换器正向运行波形如图 3 所示。由图 3 可知，所提 SR 控制通过建立二阶拟合模型，考虑开关频率 fs 和输出等效负载 ro 的变化，实时计算同步整流管导通时间。一次侧开关管驱动信号和二次侧开关管驱动信号的开通时刻是相同的，但同步整流管关断时刻由计算出的 SR 导通时间决定。因此，同步整流导通时间可根据开关频率或输出负载的变化而变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oGpBAia2k26R1KoxibxBr0mdfgChhbN9kBRDH92XxKIQzSKYyThBkLAhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oUMSFeclr9eYicw8aIh2yLPzkPgic2dVCkKavcB1V87zibKWLwvwUibibUdg/640?wx_fmt=png&from=appmsg)

LLC 变换器的输入电压为 380～700V，输出电压调节为 200～500V。在双向 LLC 变换器中，采用SiC MOSFET，充分利用其高电压和高开关频率的特性。LLC 谐振频率在满载 6.6kW 时高达 300kHz。

从图 3 可得，随着负载和开关频率的变化，所提同步整流控制可实时计算同步整流导通时间，降低同步整流管的导通损耗，优化效率。更高开关频率下，通过增加控制周期的时间，降低同步整流计算时间的占比，保证闭环运算和同步整流导通时间计算的完成。

英飞凌公司采用的传统单向同步整流方法，只考虑开关频率变化\[20\]，宽负载范围下的效率有待进一步提高。本文所提同步整流控制同时考虑开关频率和负载变化实时调整同步整流导通时间，效率更高。并且所提控制是基于数学模型，无需测量任何高频信号，不会受到高开关频率噪声的影响。

**1.2 基于二阶拟合模型的 LLC 同步整流反向控制**

反向模式下，所提基于二阶拟合模型的同步整流控制如图 4 所示，图 5 所示为 LLC 变换器反向运行波形。此时 Q1～Q4 为同步整流管。LLC 反向运行时，励磁电感始终并联在输入电压两端，不参与谐振，反向 LLC 变换器电压增益特性与 LC 变换器一致。因此，反向 LLC 变换器始终固定工作在谐振频率点 fr，实现高效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1owyLcZL63G2Jh7TIs90j54QkI9bApxnaRg4ic38icibDv6gsGXfgm6QXPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oibCtnJTey0Tic0A7IEC5lTheibZ4zichTUjHGtyHhPjNsW7RwPyWrabvTA/640?wx_fmt=png&from=appmsg)

通过建立二阶拟合数学模型，考虑输出等效负载的变化，实现同步整流导通时间的在线计算。原二次侧开关管的开通时刻相同，但同步整流管关断时刻由所建数学模型计算出的同步整流导通时间决定。

所提双向同步整流控制的优点如下。

（1）通过建立数学模型，可以准确计算出同步整流导通时间，显著降低同步整流管体二极管的导通时间，减少导通损耗，进一步提高 LLC 效率。

（2）无需测量高频信号，对开关噪声的抗干扰能力强，并具有高效率和控制器计算资源少的优势。

**2 .数字同步整流控制正向 LLC 二阶拟合模型分析**

**2.1正向同步整流导通时间频域模型**

图 6 所示为 LLC 变换器正向运行的等效电路和工作波形。图中，Vab 为桥臂中点电压，Vin 为 LLC输入电压，Cj 为同步整流管输出等效结电容，ϕ 为同步整流管导通时间。为便于对模型进行分析，假设谐振电感、谐振电容和变压器是理想的，只考虑了基波，并将同步整流管输出等效结电容视为常数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oNSJiaOb7FicBFicSTCSIicEpTOFt9NLUS2wUg7yAgv57Qt7nicffDUDmXxg/640?wx_fmt=png&from=appmsg)

图 6a 中，ZRC 为输出等效负载和同步整流管结电容的并联阻抗，其表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oaWP3DkBlFkaVwUbB7H8U5XoHX3lU8OutVDjJIeL568Sv6iabIYEgDdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o8PPXpXiaBJnt5BzKtyeHaSaFPJalJtcyLKverWzyZgd7NFgVpsHVnZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oj7SefseI95Do5EiaLE4FLoCTtmgt7ahAu5Rjcl0U7icT3mtHz7AicNhBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o7qttnp3nXFicKRk0Qhe2otibhCAZckxialzXk20wibWwoaqibU8DdGcqUkg/640?wx_fmt=png&from=appmsg)

**2.2 所提基于二阶拟合模型的 SR 算法**

由于同步整流导通时间只与开关频率和输出负载有关，因此可简化算法。在保证 LLC 变换器高效率的同时，大幅减少数字信号处理器（Digital Signal Processor, DSP）的同步整流计算时间。

利用 Matlab，选取二阶多项式作为拟合函数。开关频率小于谐振点时，SR 导通时间拟合函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oSFhJVPOP90pZnhSw2F7A2FklUEKukqrJdxdNWYncMqwgcicCyWc55rw/640?wx_fmt=png&from=appmsg)

式中，fclk 为控制器工作频率；Dctrl 则来自闭环控制器的输出。本文采用的 DSP 型号为 TI 的TMS320F280049C，主频为 100MHz。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oECCSgibOyVuqTASE6NIUdRbyNHDXC82cibzWgt2eBtnj83VIMHN9XnCQ/640?wx_fmt=png&from=appmsg)

SR 运行周期的对比分析见表 1。该表包含了等效输出负载的计算周期。它假设代码和堆栈在零等待状态内存中。从表 1 可看出，使用所提二阶拟合算法，DSP 的 SR 计算周期大幅减少。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o5pS7F8xtCSSKHUCiagkpCQGVXaddgC4vmNHWAnLIntPF5pUzKwickA1w/640?wx_fmt=png&from=appmsg)

图 7 所示为正向 LLC 导通时间对比。不同开关频率下，所提 SR 算法具有很高的拟合精度，满载下误差仅为 2.28%和 0.94%。因此，所提 SR 简化算法可实现高效率，同时所需 DSP 的计算资源更少。

**2.3 电路参数漂移分析**

**2.3.1输出等效电阻参数漂移分析**

输出等效电阻由测量的输出直流电压和输出电流计算得到。分析温度对输出等效电阻影响，即分析温度变化对输出直流电压和电流影响的分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1olQISic1Enlg5xLk4eMrIKsP8asMLN99UKs4OkhKMspmq3wOGUribHxtQ/640?wx_fmt=png&from=appmsg)

输出直流电压测量采用电阻分压的方式，如图8 所示。图中，R1、R2 和 R3 为分压电阻，其值分别为 5.1MΩ、3.9MΩ 和 47kΩ，R1 和 R2 的温漂系数均为![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1ofEykhu3afOj8Uy2H13MMGx08e1bB4f5nv0shtsO35SbhqCwgSv52YA/640?wx_fmt=png&from=appmsg)。输出电压 Vo 变化范围为 200～500V，Vs 为 R3 的电压，经采样处理电路处理后送入 DSP。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o2kObpRp0iaiaS5ibgaECIWvD5OOWShzwxcDom1xSNazQTXG0vfFFP7qjg/640?wx_fmt=png&from=appmsg)

当温度为 125℃、温升为 100℃时，根据电阻温漂系数可得，R1、R2和 R3的电阻变化率分别为 0.01%、0.01%和 0.001%。此时采样电压 Vs 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1op3frM1CMMU8QiaT9N5zkLYgSFcYCAZ3dUsk4wUbucm32GTE0WTB3QbQ/640?wx_fmt=png&from=appmsg)

y1 为 DSP 采样拟合电压 Vo\_dsp 与实际电压 Vo 的比值。当 Vo 分别为 200V 和 500V 时，y1 为 0.99093和 0.98826。当温升为 100℃时，输出电压的测量最大误差为 1.174%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1opU0aWb5w8hTJy4HA2wvicnZHBDRB5m0FyqGKKNkgNMON8cHnwd5WdQA/640?wx_fmt=png&from=appmsg)

输出电流测量采用霍尔电流芯片 ACS725LLCTR-30AB-T，来自 Allegro 公司。图 9 所示为该芯片测量总误差随温度变化的曲线，Sigma 表示标准差。由图 9 可知，当温度为 125℃时，电流测量误差最大和最小分别为 0.5%和−0.7%，即实际电流为 Io 时，输出至 DSP 中的电流为 1.005Io 或 0.993Io。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oZdAQejJzm9DR7L4c1QztgJa9Sx4WDFJmicROQkic726smR3bCc0tn6hA/640?wx_fmt=png&from=appmsg)

式中，Re\_nor 为 25℃下的输出等效电阻；Re\_max 为125℃下的输出等效电阻；Vo 和 Io 分别为 25℃下的输出直流电压和电流。因此，输出等效电阻在温升100℃下的最大测量误差为 1.67%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1ozNpjhooYo2en0GVhrWiabrFLSTB1Q8q1NAiaWic0U4mfwF4uGnM8ibibiaaw/640?wx_fmt=png&from=appmsg)

图 10 所示为输出负载存在误差时的分析。开关频率分别为 300kHz 和 270kHz 时，当等效输出负载存在 10%的误差时，满载情况下，SR 导通时间误差仅为 0.58%和 1.13%。因此，输出负载存在误差时，不会影响导通时间的计算准确度。

**2.3.2 谐振电感参数漂移分析**

图 11 所示为谐振电感存在误差时的分析。谐振电感存在气隙，气隙磁阻远大于磁心磁阻。因此，当温度变化较大时，谐振电感值变化很小。根据图 11，当谐振电感存在 10%的误差，导通时间误差仅为 2.73%和 2.12%，不会影响所提算法的实现。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oJaE1Hrub2EKFcj99qJ1ibtwf6kBTYauYrU9TcvgEXwZmoubt52cxFMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1onfjIguwjPHlKJcNvbuwwrjTXPhgqz9H58qEQqQZcyO36zgGXjnkCOQ/640?wx_fmt=png&from=appmsg)

**2.4 LLC 变换器损耗分析**

图 12 所示为正向 LLC 损耗分析。300kHz 时，相比于传统算法，所提 SR 算法 SR 管损耗减少了 27.7W。270kHz 时，所提算法依旧可减少损耗，提高效率。因此，所提 SR 算法通过减小 SR 体二极管的导通时间，降低整流管导通损耗，提高效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1obLUaUdwsvWx37FhFCqCMmBEicqkibZIBAedgv1CD9Nsx5zX7zdb5atyA/640?wx_fmt=png&from=appmsg)

**3 .数字同步整流控制反向 LLC 二阶拟合模型分析**

**3.1 反向同步整流导通时间二阶拟合模型分析**

图 13 所示为反向模式下 LLC 的等效电路和波形。Cjeq 为同步整流管的等效输出结电容。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oJHTTpMuJ7L6QgsLkmTsv5JCds76icXvXwccRkRS71A3ydLzHSBIvoIg/640?wx_fmt=png&from=appmsg)

由图 13 可知，等效输出阻抗 Zo 为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1otMpQo2rZQH27Ql6Nhj2E6vb5xx67aNM8pvF0y7YHiaPZV4c9KxenFAQ/640?wx_fmt=png&from=appmsg)

反向模式下，LLC 变换器始终在谐振点工作。由于 SR 导通时间只与负载有关，可以简化所提算法，减少 DSP 的计算耗时。利用 Matlab，选取多项式作为拟合函数，SR 导通时间拟合函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1orGPOQhvicSJprZQ4Pz6yddmficN43hiaegvRsBkSXAbjcRy3aI0QVbHTA/640?wx_fmt=png&from=appmsg)

表 2 所示为 SR 运行周期的比较。采用所提的二阶拟合模型算法，所需的运行周期大幅减少。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oI2tgMic8icO95yLp7hywUkJtktvIxRx1krPPdAQ1FkTP7llQxWLEtalQ/640?wx_fmt=png&from=appmsg)

图 14 所示为所提基于二阶拟合模型的 SR 算法和原始 SR 算法的导通时间对比。满载工况下，所提二阶拟合模型和原始模型的误差只有 0.39%。因此，所提基于二阶拟合模型的算法具有很高的拟合精度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oia1viawib3rRUicoMPZKq2vc1kgYhVbzgwoVhhaKjsBVCgmtpuaQeGZVhw/640?wx_fmt=png&from=appmsg)

**3.2 参数漂移影响和损耗分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o5IfEF0mrZkr0qzicf6wFRko7GJaZyzeWp0y3RRSPPN2gPUyBk8Cr7RA/640?wx_fmt=png&from=appmsg)

图 15 所示为输出等效电阻存在误差时，实际SR 导通时间对比分析。满载时，当输出电阻负载存在 10%误差时，SR 导通时间误差仅为 0.72%。因此，输出负载存在误差时，不影响所提 SR 算法的实现。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oRFUNWa2DqrIDdGMguZSiax2ia06HCjlz8vqhfC3icTyGLZ77GfKp1yiaEA/640?wx_fmt=png&from=appmsg)

图16 所示为 LLC 变换器反向运行的损耗分析。相比传统 SR 控制，基于所提 SR 控制，反向 LLC变换器同步整流的导通损耗减少了 11.2W，明显提升了反向 LLC 的效率。

**4. 实验验证**  

**4.1实验样机**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1offRThggQJurKXGmCQ1aZqkowVMD29f28L0CM4sxhtibLBQckzicC3OOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1opXPjBfGRjmubTHLq5GWcAAsVq2SpeTDPMYm5HkPIKqyVyMt1xnWMqg/640?wx_fmt=png&from=appmsg)

为了验证所提 SR 控制的有效性，搭建了一台6.6kW 双向充电机，拓扑结构如图 17 所示，实验样机如图 18 所示。前级为交错并联图腾柱功率因数校正（Power Factor Correction, PFC）电路，后级为LLC 变换器。采用 Wolfspeed 公司的 SiC MOSFETs（C3M0065090D），电路详细参数见表3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o8wjgUPpm0AFYp4icbXicXNtkPusmaEicaZwfyPxdZdNqftfRlgWZNia7JA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oxHAQKrBnbSC5ZJJMx8VNMAFm5VIDQbd4O2icMLDNiag6NsiaUR1aWeGeg/640?wx_fmt=png&from=appmsg)

**4.2 所提 LLC 同步整流控制正向运行实验**

图 19 所示为 LLC 变换器正向运行下采用所提SR 控制的运行波形。由图中可看出，开关频率为270kHz，负载分别为 2.6kW 和 6.6kW 时，所提控制可精确地控制 SR 驱动导通时间，降低体二极管导通时间，减少体二极管的导通损耗。当开关频率为305kHz 时，依旧可实现很好的控制效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oS8aEUXmQyvxbZLLXj5kIG3W9PVAdjNicm3KNTo7oSOQXhUs86d4UGcg/640?wx_fmt=png&from=appmsg)

图 20 所示为 LLC 变换器在负载突变下的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oQWhZwBdiazZT4UGvx7ib1vyPx7VKhXp7ebvBic70CYTCfPST5vdy8ELqg/640?wx_fmt=png&from=appmsg)

图 20b 是图 20a 中区域 1 的放大图。可以看出，当负载从 4.4kW 突变到 1kW 时，可实现所提 SR 控制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1osDJWSpXM0mLUynIobv47WhnXIBT8ibD6bDetZ08Fb8lTn82UUQfqYMg/640?wx_fmt=png&from=appmsg)

图 21 为同步整流算法运行时间对比。相比原始复杂模型，采用所提基于二阶拟合模型的同步整流算法，DSP 运行时间降低了超过 60%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oU5P2elw9mGjF56mOG6rVfZl0BhhYhkSgrmV004I7aIYJiaufvAKhHlA/640?wx_fmt=png&from=appmsg)

图 22 给出所提控制和传统 SR 控制的效率对比。传统控制是基于文献，只考虑了开关频率的变化，忽视了负载的变化。SR 管开通时刻由一次侧开关管开通时刻延迟一定时间得到。开关频率小于或等于谐振频率时，SR 管导通时间等于半个谐振周期减去驱动延迟时间和死区时间。开关频率大于谐振点时，SR 管关断时刻超前于一次侧开关管关断时刻，超前时间等于驱动回路延迟时间。

由图 22 可知，所提 SR 控制可根据负载变化实时调节 SR 导通时间，降低 SR 管导通损耗，提高效率。满载 6.6kW 下，所提控制效率提升高达 0.36%。

**4.3 所提 LLC 同步整流控制反向运行实验**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oHRpZJCRc01UoTiae8ytjX4DjKDrDAyPwic9Komatz2L0jXqGcmFMITSQ/640?wx_fmt=png&from=appmsg)

图 23 给出了反向 LLC 变换器实验波形。为实现高效率，LLC 变换器反向运行时，始终工作在300kHz。当负载功率分别为 1.6kW 和 3.3kW 时，所提 SR 控制很好地调节了 SR 导通时间，跟随负载变化。因此，可极大地降低 SR 管导通损耗，提高效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oj0SO25Ey1d88wwTuc1A2ykkawIRmtv5gBaB49qzZuCejywAzc39bbA/640?wx_fmt=png&from=appmsg)

反向 LLC 变换器负载突变如图 24 所示。图 24b为图 24a 中区域 2 的放大图。当负载从 0.2kW 突变到 3.3kW 时，所提控制可实现良好的负载跟踪。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1oB6y0icjhqibAjoILibDxPdjyHu7dtFQdLVUs9Sc8ia0H37hj1aYpZpQh5Q/640?wx_fmt=png&from=appmsg)

图 25 所示为 LLC 变换器反向运行时两种算法实际运行时间。相比原始复杂模型算法，所提算法在 DSP 中的运行时间减少了约 75%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkPUBqRibADic55I36vibtO1o1sUvPicQwrZdP526AhV24IrPgcpakW2lfUwyKpDoPXLibL9C20Y2X4xA/640?wx_fmt=png&from=appmsg)

图26 所示为 LLC 反向运行时，所提 SR 控制和传统 SR 控制的效率对比。相比传统控制，满载 3.3kW 条件下，所提 SR 控制效率提升达到 0.29%，具备良好的控制效果，且不增加任何元器件和成本。

**5.结论**

本文提出了基于二阶拟合模型的 SiC 双向 LLC数字同步整流控制策略。通过在频域建立 LLC 同步整流导通时间的解析模型，利用二阶多项式拟合原始的复杂模型，简化同步整流导通时间在控制器中的计算。一次侧开关管和二次侧同步整流管驱动开通时刻一致，而同步整流管关断时刻则由所计算的导通时间决定。所提控制具有实现简单、抗干扰性强和 SR 导通时间计算精度高的优点。分析了当谐振电感和输出等效电阻存在 10%误差时，同步整流导通时间的误差最大仅为 2.73%，因此所提控制具备较强的鲁棒性。

最后，本文搭建了一台 6.6kW 300kHz SiC 双向 LLC 充电机实验样机，验证了所提控制的有效性。正向模式下，相比传统控制，所提 SR 控制在满载 6.6kW 下效率提高了 0.36%；反向模式下，相比传统控制，所提 SR 控制 3.3kW 下效率提高了0.29%。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)