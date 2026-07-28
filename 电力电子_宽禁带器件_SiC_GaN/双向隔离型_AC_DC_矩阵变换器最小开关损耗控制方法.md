# 双向隔离型 AC-DC 矩阵变换器最小开关损耗控制方法


> 原文地址: [https://mp.weixin.qq.com/s/nviKii9facHB4I2JWvYXVw](https://mp.weixin.qq.com/s/nviKii9facHB4I2JWvYXVw)

文章来源：电工技术学报

作者：梅杨、石仪、张家奇（北方工业大学北京市变频技术工程技术研究中心北京 100144）  

摘要：为了实现双向隔离型 AC-DC 矩阵变换器（BIMC）的高效运行，该文提出一种最小开关损耗控制方法。基于双线电压调制策略，建立电力电子器件损耗模型，引入基于序列二次规划算法（SQP）的优化方法，以输入功率和移相角范围为限定条件，对开关损耗进行最小化寻优， 实时计算最优的移相角组合，并应用于变换器的调制过程，以保证变换器的开关损耗最小。仿真和实验结果表明，采用所提出的控制方法可实现网侧电流为正弦电流，功率因数接近于 1，直流侧电压与电流稳定，电流纹波率小于 1%，且在较宽功率范围内，变换器效率均维持在 94%以上， 最高可达到 96.89%。相较于传统的控制方法而言，所提方法在宽运行范围中均可以使电力电子器件的损耗最小。  

关键词：AC-DC 矩阵变换器、双线电压调制策略、开关损耗、序列二次规划  

0.引言  

双向隔离AC-DC矩阵变换器（Bidirectional  Isolated Matrix Converter, BIMC）具有能量双向流动、功率密度高等一系列优点，在储能系统、新能源汽车等领域具有良好的应用前景，已获得了国内外学术界和工业界的广泛关注和青睐。 

BIMC 的性能主要受所采用调制策略的影响。目前已提出的调制策略包括双线电压调制和双极性空间矢量调制策略等。文献\[9-11\]借鉴传统矩阵变换器中的双线电压调制方法对前级变换电路进行调制，并通过对后级电路以及前后级电路之间进行移相控制，实现了输入侧电流为正弦和单位功率因数。文献\[12-14\]提出了双极性空间矢量调制，对前级变换电路采用电流空间矢量调制，也可实现良好的输入输出性能。但采用上述方法时，变换器的电流应力和效率均受到开关状态分布和移相角的显著影响。文献\[15-16\]基于双线电压调制策略，通过调制开关状态分布，使变换器在输出电压较低时具有 更小的电流应力，从而提升变换器的效率。但这种间接调整的方式无法实现对变换器效率的最优控制。因此，直接对变换器损耗进行优化控制以实现变换器的高效率运行，具有重要的理论意义和应用价值。 

BIMC 损耗主要由变压器损耗和电力电子器件损耗两部分组成，其中电力电子器件损耗主要包括器件的开关损耗和通态损耗。在同一工况下，变压器损耗与电力电子器件通态损耗在采用不同调制策略时差异较小，而开关动作次数及开关损耗大小则严重依赖调制策略。因此本文拟通过优化调制策略中的移相角参数，实现开关损耗的最小化，进而提高变换器效率。  

1.电路拓扑及调制策略  

1.1电路拓扑

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMa2bpNdjXfjPia0lC8icMxk4UcB2Ul2FEkAwl8utBRmaSHfzZjcicc0SSbEn6u3BJJ4xibUMDdwiamkibDkjec1XmlaB8vkjZ6jic4cE/640?wx_fmt=png&from=appmsg)

 BIMC 的拓扑结构如图1 所示，由输入滤波器、 矩阵变换电路、高频变压器、H 桥电路、输出滤波器五部分组成。其中，矩阵变换电路采用三相桥式结构，实现三相工频交流电和单相高频交流电之间的变换，每个桥臂由两组双向开关Sijk（i\=a, b, c; j\=P, N; k\=1, 2）组成，每组双向开关由两个SiC MOSFET按照共源极型排列而成。H 桥变换电路由4 个 SiC  MOSFET 按照单相桥式结构排布，实现高频交流与直流的变换。图 1 中，usi、isi、ui、ii分别为网侧电压、网侧电流、输入电压、输入电流，uf 为前级电路端口电压，ug 为后级电路端口电压，uo、io 为直流侧电压、电流，n为高频变压器匝比；Lf 和 Cf 为输入滤波电感和电容；Lo 和 Co 为输出滤波器电感和电容，L为外部串联电感和变压器漏感之和。

考虑到该拓扑结构与双有源桥（Double Active  Bridge, DAB）具有相似性，因此可以借鉴其调制思想，建立如图2 所示的等效电路。其中，矩阵变换电路和 H 桥电路产生的高频交流电压 uf 和 nug 作为电压源，共同作用于高频电感 L上。图中，iL为电感电流。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPHaCRWmgicx9icM9l7JibU6Viaic21AwDSiaRRmWG6cquoxWnCl0TaYnFydepzo3LGMycntBsRmLjxdpxgEb4V1LicdNk7bYqlovvZmo/640?wx_fmt=png&from=appmsg)

根据图 2，各变量的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPSjh3joFeUgznJ3AqXKxcRxShaJVicAoLrnvwcStUAEHj2PhtSSq9NAww8FJXbAUnzkD1qNlqrs94A818dIyD7oVNSwMD4u5OE/640?wx_fmt=png&from=appmsg)

1.2双线电压调制策略  

双线电压调制策略是 BIMC 的一类代表性调制策略，具有高性能、高灵活性、易于实现等优点， 应用最为普遍。其基本原理是指在每个控制周期内，确定最大线电压 Umax 和次大线电压 Umed，并考虑到高频电压的对称性，从而将±Umax、±Umed 拟合输出电压。由于前级、后级及前后级移相的不同可能，可以将双线电压调制策略进行统一数学描述，如图 3 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOpHfptzdHHldVlK2mbLAaib3DoYDqDP18rWIjCibECOnzc1TibP4EbK3YZV1vXMobRKOPdcFNcrAVETxuUicHjjjvJiaib6n1swSRvE/640?wx_fmt=png&from=appmsg)

图中，ϕ1 和ϕ4 分别为前级电路第一段和第二段移相角，ϕ2 和ϕ5 分别为后级第一段和 第二段移相角，ϕ3 为前后级间移相角。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP6xgJjrBIg9BjcBH3icgroAh7mFehO4aD8A0JGndMYgk3sr6eFbW4Wz2nnxq1YaSwVDbvBwUSflzjTbfnCJ1fZSPZ4ApJDiarEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNh8SiaAkUxXfX6Ken8sRvTYiakTjO90ns5frfkQ3V2l100iagtictVPcqbYfsemfrlNRXBv6MK8DtCia0LFO6Z6Fqh4ceNytGUvh1s/640?wx_fmt=png&from=appmsg)

基于这一思想，目前已提出三种可行的方法。 

方法1为前后级间移相调制方法，如图 4a 所示，ϕ1\=ϕ2\=ϕ4\=ϕ5\=0，ϕ3 为唯一调制参数，该方法对前后级电路之间进行移相，但得到的电流应力和开关损耗都较大；

方法2为图 4b 所示的前级嵌入零矢量调制方法，ϕ2\=ϕ3\=ϕ5\=0，ϕ1∶ϕ4\=C（C为常数）， 此时ϕ1 为唯一调制参数；

方法3为后级移相调制方法，如图 4c 所示，ϕ1\=ϕ3\=ϕ4\=0，ϕ2∶ϕ5\=C，此时ϕ2 为唯一调制参数。

方法2和方法3网侧电流谐波低，输入输出特性良好，但是两种调制方法对应的功率适用范围较窄，而且偏离最佳工作点会导致电感电流峰峰值变化较大，进而导致损耗增加严重。基于这一策略提出的调制方法均可实现良好的输入输出性能，然而，不同的移相方式以及零矢量排布方式会导致变换器的开关损耗产生很大差异， 将直接影响变换器的效率。由此可进一步通过调节移相角的数量和大小来提升变换器的效率。  

2.最小开关损耗控制方法

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMWbajxtT05S2Rf4zCiaLJqUTG4yJBAdo81Qah4dCuibtUFIWcQyQpljZpOs9dJz8YHhxOyIRxTcC1kK5Ft89X4wrfn3ptwiauHZE/640?wx_fmt=png&from=appmsg)

基于上述分析，本文提出一种最小开关损耗控制方法，如图 5 所示，主要包括三个部分：三重移相调制方法、开关损耗模型以及调制参数寻优。为 了提升变换器效率，将现有的调制方法进一步扩展采用三重移相调制方法，基于该方法建立开关损耗模型，并引入序列二次规划（Sequential Quadratic  Planning, SQP）算法对所建立的开关损耗模型进行调制参数寻优，得到最优移相角组合ϕ1、ϕ2、ϕ3， 并利用三重移相调制方法生成电力电子器件PWM控制信号。d1、d2 分别为 Umax 和 Umed 的占空比；Ts为一个控制周期时间；fsw 为器件开关频率；Psw\_loss为器件开关损耗。

2.1三重移相调制方法  

根据 1.2 节对调制方法的比较和分析，本文将图 4 所示调制方法统一考虑，通过扩大可调移相角数量，最大限度地发挥双线电压调制策略的优势， 以此来改善变换器的性能。  

三重移相调制方法如图 6 所示。该方法在前后级嵌入零矢量，并与前后级间移相调制方法结合， 实现前后级电路之间的协调控制。其中，ϕ1∶ϕ4\=  ϕ2∶ϕ5\=C，此时ϕ1、ϕ2、ϕ3 为调制参数。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMPw5fQEo0eNYE2rh2qlrUpLDwICvpt7lcdxZJyIpzyDBnFrknKK4yRRQk8cLgfqbE3uZ9QEW0kyF8L5diblJtOX6KZBXdfkczc/640?wx_fmt=png&from=appmsg)

2.2开关损耗模型  

电力电子器件的工作电压、电流是准确建立电力电子器件损耗模型的基础。本文所采用的拓扑结构中，如图 7a 所示，电压具有分段对称的特性，但其不规则性增加了直接求解的难度。交流电源的变化导致每个控制周期内的电流变化，使得初始值的直接求解变得非常困难。因此，本文中将电压电流进行分解，利用叠加定理简化求解过程。等效分解电压示意图如图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO2r0xPPAcqbmRzpu5T9hiaFBLUv0H8YfLt1ibNPJUNoDrDjJKAp1uicSdZ5JO5U7v2xmaIYjfz0Z1cibgeT3mCZkia3f4vX1Laz4iao/640?wx_fmt=png&from=appmsg)

为了方便计算，引入辅助函数 x(t)和 y(t)，表达式如式（2）、式（3）所示，利用等效分解的方式表示 uf、ug 和电感电流大小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMXiblfx7gRQyB18wj3ko0Nu2au4MeiccObKCDul8ic0NouD1a79Dl71qEFxyID36jeyibemXGOFcsfLVcWGMcMYldqIwnJiceh0ibYM/640?wx_fmt=png&from=appmsg)

首先，将电压uf、ug 进行分解，如图 7b 和图7c 所示，其关系为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMfu7qpCJat2L9QFbNFMrTCLwd15TcWF3TIB6kH3sP5rhrvZ14Xe0jdjORqsibBO90xZe2DicDrLjxMcyicXGIaQoqjHWxvMzsfc0/640?wx_fmt=png&from=appmsg)

结合式（1），利用叠加原理将各部分电压分别作用在 L上所产生的电流进行加合，即可得到电感电流表达式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPF8ddIiauLAibB1XmCmm4ibkzD4jb20Fohrww9Uo2fgDcbKOGrAapyWiaJHTUZ8eicf4e8lpTSibOg6VVWbOqWicdVUXzdKibNiacIv0wQ/640?wx_fmt=png&from=appmsg)

当设定时间 t\=0 s 时，即可得到电感电流的初始值 iL0。  

根据图4d，将各时段的电感电流进行积分，可以得到一个控制周期内各相电流平均值表达式，即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNB7WpbeAO5cJ6n6sQ90EK308boCdN6AqlibHLyGlicVbqrkvV3Eial5WLM2k206CAXBAcbNqoLMbO42ODS7qCxBuovicB3Fjkvlzs/640?wx_fmt=png&from=appmsg)

式中，ωs 为控制角频率。  

网侧电流参考值为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNRQkbNeSN9QFsgicc2k49wGIkdejunZEkcicdjl8trv88RAYw2icSv7fl9DvBGsk9sGpBv8IumSjWQt6yJ3amkduHock3mWhID1w/640?wx_fmt=png&from=appmsg)

保证功率因数为 1，将网侧电流平均值代入网侧电流参考值公式（8）中，即可得到网侧电流幅值为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNO1zk0Aa6dWsEdoM7IJGZntlyiaumHg1s7qdRSPxIGIHv0WW6kuyqAGXREEsyW4q6eibwkwut0wEXXvFKI6NftsRV1hg3kyZLwg/640?wx_fmt=png&from=appmsg)

根据三相交流功率定义P\=3UIcosϕ，可计算在网侧单位功率因数运行时交流侧功率为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOkUPcj9YiayAHIUphRb0uianAkjrp2jXLpB5QJSm7ibH3llu9jv3IOrfleOWPLyFhoFdfl07AiaIExRFUqUkS6JiciaLNicnQKGMZwxM/640?wx_fmt=png&from=appmsg)

由电力电子器件损耗定义可知

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN4NqMZOy1yibsx9KW3KPBJypUtWjLyTfj38TdFQkrC8uE5VayHqTj85PajzQGSKovBAEkkdk6YqGVGCrdzAoSLoHhMEJ5cIT3U/640?wx_fmt=png&from=appmsg)

式中，Psw\_loss\_on 为器件开通损耗；Psw\_loss\_off 为器件关断损耗；Uds 为漏源极电压；Id 为流过器件的电流；ton 为器件的开通时间；toff 为器件关断时间。可以根 据式（5）和式（6）得到电力电子器件任一时刻的电压和电流 Uds、Id。  

如图 7 所示，在一个控制周期内，电力电子器件总共动作10次，根据式（4）可知控制周期内各时刻点的电流大小，并结合调制策略明确各阶段的电压值，从而根据式（11）计算出电力电子器件的总开关损耗。以 t6 时刻为例，该时刻电力电子器件损耗为器件 SaP2 的关断损耗与器件 SbP1 的开通损耗之和，即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOwbrsuGWuPgg5njDnbricRAh05AkhSicYFAyCSibM05FNXTStuybRmA9f7jJP0FXxf45sAZGYrj525aWJsDZVrueRtuszLSEhg0M/640?wx_fmt=png&from=appmsg)

考虑到基于双线电压调制策略中各段线电压变化的周期性，每个扇区内，线电压的变化模式不同， 但在整个周期内（两个扇区），线电压呈现出周期性变化的趋势。可以使用两扇区内电力电子器件的平均开关损耗代替整个工频周期的开关损耗。开关损耗数学模型为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOlJNvXyAdzBUePx1ysD37ymZV5gxM2MGSrW3hOpyTf1f1ORQl7h4Q1UUgY5Wx2aNM4DlficHsGU6Y9gIvibLWEN7JAKsjLKVucs/640?wx_fmt=png&from=appmsg)

式中，Ni 为两个扇区包含的控制周期个数；N为控制周期个数。  

2.3调制参数

寻优从式（13）中可以看出，开关损耗的大小取决于输入输出电压、变压器电压比 n、占空比 d1 和 d2、 开关频率 fsw、控制周期 Ts、电感电流初值 iL0 以及移相角ϕ1、ϕ2、ϕ3。当工况一定时，除了移相角， 其他参数都是确定的。因此开关损耗在功率一定时， 会受到前级零矢量脉宽ϕ1、后级移相角ϕ2 和前后级间移相角ϕ3 的影响，故上述寻优问题转化为功率一定时开关损耗最小化的求解，即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPFBibrQh9QmpmGN6e5xNCpibjY9GkPJm8s8VTicKCVAAauibC7VNCfoib7xwicC5kO5IyaKAfhcSibPX7Vm8n958hLPbj0vRacknl5Oc/640?wx_fmt=png&from=appmsg)

该问题可以被视作一个非线性约束优化问题。 序列二次规划算法（SQP）因其在优化过程中迭代次数较少、收敛速度较快、整体优化时间较短，以及计算精度高等特点而被广泛采用。因此，本文采用 SQP算法来求解开关损耗最小化的问题。 

SQP 算法的核心思想是在每次迭代中，通过求解一个二次规划子问题，进而确定函数的下降方向， 然后根据此方向调整步长以减少目标函数值，直至 收敛到原问题的最优解。本文中，SQP 算法用于优化前级电路的零矢量宽度ϕ1、后级间移相角ϕ2 以及前后级间移相角ϕ3，从而最小化变换器的开关损耗。SQP 算法控制流程如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOiblz4XTJiaONrRgaeUtWVLSDmSiagkP2oCQ14ecJnWdiaSPAppWvB6BPCcgXrwePofVVxibibAlGf7ZycTK1Bef6NsBSDibW1ULxzz0/640?wx_fmt=png&from=appmsg)

首先选取合适的初始点、设置迭代次数以及迭代规则。约束函数表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPE6P5SYvbQmForHzCsjxaibxHTibibl221a7L0A5nbcURw3OZbgwnnyzJCPoGiaOToER3ZiaxozRPicg7SmwdiccTYRlVY7XSJ4EGLTo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNRibfphgMGDAYxu1s6ibesFibSQE6DstV6zKkt4loGBFY4eJIAzkLRccVbA1OMzGYwuqcEIYZs3IOTibLogJ0A3WENAL3lUOzDYz8/640?wx_fmt=png&from=appmsg)

为了确保每次迭代朝着目标函数减小的方向移 动，同时避免过大的步长导致目标函数值增大在计算过程中需满足

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMPic5qUSlFzwfIntZwmQKGlm1ky4cUicXzdSticcufX0UKFdeZQiazRT1Jt4xIsvaFUBYAyXfiaBuFycbaHYak5ChXeSJa2Ba7Cwu8/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnZS5dKJaX80iaey0NrfSscAtmU0VMkOHXt56XC7HHw3FNSibVZg58icU1dR9iafBQZcic8GFuOh0SZfiaQXImNG4BCFAmggElbx1r8/640?wx_fmt=png&from=appmsg)

式中，ρ∈(0, 1)；σ∈(0, 2)；m为非负整数；mk为m第 k次迭代且满足不等式（10）成立时的最小值；α为中间变量，α为第 k次迭代时的值。  

更新后 Qk的雅可比矩阵，以及最小二乘乘子μk、λk、 ∇f为目标函数的梯度为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNRlRjTwE8g2kHGetKGhLxfYocjrqic4XHOl0d8UukAe0ibyTmarCRnb6pbImdRqGSGsyNITExuhbNc5QW8Dw7XQYaxRr9egrzkY/640?wx_fmt=png&from=appmsg)

若 ‖nk‖ ≤ε1且‖hk‖1+‖gk‖1≤ε2，则终止程序并输出二次规划问题的最优移相比点 Mk。  

基于 SQP 算法，可以得到开关损耗最小时对应的最优移相角ϕ1、ϕ2、ϕ3。表 1 为 Ui\=110 V 时上述 算法求解出的最优移相角组合。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPicYo5gvbTYa8vdgTicBBkog6WTSeXsEkunHDetR57rt3J0iaHNbr7Ngo78tAepAW10NBL6mYfBkuTfY326l0RbLrJdCUVNP7FVM/640?wx_fmt=png&from=appmsg)

3.仿真验证  

利用Matlab/Simulink 搭建BIMC系统模型，对所提出的最小开关损耗控制方法进行仿真测试。在网侧电压 Ui\=110 V，直流侧电压 Uo\=180 V 的电压等级下。系统模型的关键电气参数见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMdGSQkiaicD6G9QMPVKAUzCLrx5W7f8ryeuQAsibWN9dzL14Gvd5bKcOic2gEPKd6cXQD1I6lgfibv6gPd1M67dFqZDnHyZEN6RzWg/640?wx_fmt=png&from=appmsg)

设定功率为 800 W，图 9 显示网侧 a 相电压和电流相位基本相同，直流侧电压平稳；对a 相电流进行FFT分析，THD为1.33%。  

由此证明，所提出的控制方法能够实现网侧电流为正弦，功率因数接近 1，具有较好的稳态性能。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNLJvO4SEbOQN3z8W35BFfXol5tKfCnoTDOXYmr4kDnexX3mLPBwALOGPbiaoVBaPcOMhhJFmC1iaXjcZ8khnRgRQ5TKoqhPLiby4/640?wx_fmt=png&from=appmsg)

表 3 为所提方法与对照方法（方法 1、方法 2、 方法 3，定义如图 4 所示）的移相角取值，以及通态损耗、开关损耗理论计算值与仿真值。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZZh1yiaPusJvDHEpicsw5H5xEkhWicibkshrFGrhxv8Z61PqJnDRiaiaEuiaibNLnDeAVT9agbVSRhia426pA90Xl9Rlr2b3WCN6CIkXY/640?wx_fmt=png&from=appmsg)

由表 3 可以看出通态损耗和开关损耗的理论值 与仿真值数值接近，在不同的移相角组合下，通态损耗最大值与最小值的差值仅为 0.27 W，偏差比例仅为 3.16%，因此同一工况下采用不同调制策略其通态损耗差异较小。在不同工况下对开关损耗进行大量仿真，仿真结果如图 10 所示。图中，交流侧功率等级从200W 升至 1600W 时，最优移相角组合对应的开关损耗均为最小，验证了所提出方法的正确性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPHVZqcHiaDF3BLFVnLyxzJZBGCLnibkpIy0JIo4O7ia5qSFkaKZQYXthAibCGbf1L5GbMw3OVF1EvTOVTadv5L5n35gyHRwcSL89k/640?wx_fmt=png&from=appmsg)

4.实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOcXInZBR90tltZwBrDQKDsMGTprWya89iavSYrphqs72tyVNYKMEnKOFvx503okoniaO7aibDLgO0fPP4bnxKJd2S6UvNSt0a7Iw/640?wx_fmt=png&from=appmsg)

  
在一台额定功率1.5 kW的 BIMC 实验平台上进行实验测试如图 11 所示。通过功率分析仪测量BIMC 的交流侧功率、直流侧功率以及变换器的整机效率。根据“量热法”测量高频变压器损耗， 变换器的总损耗减去高频变压器的损耗即可得到变换器的电力电子器件损耗。通态损耗难以测量，但是由于在同一工况下采用不同的调制策略对通态损耗影响较小，因此将比较电力电子器件实际损耗的趋势是否与仿真一致，图12为实验平台。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPvia2zhV8FRCPxlbtvM6mZ4ksFyHwpgQaD6E0r64HbZjmemmdWZBH5TBHnpOFdoSDe3ibCS84youL8AiaajlQJ3IRV5kc8CsIJk4/640?wx_fmt=png&from=appmsg)

实验测试中，网侧电压 Ui\=110 V，直流侧电压Uo\=180 V，网侧功率设定为800 W。实验中关键电气参数与仿真中一致。  

图13 为前级端口电压uf、后级端口电压nug、 高频电感电流iL的实验波形，图 14 是网侧 a 相电压、 电流和直流侧电压、电流波形的实验波形。  

图 13 中的实验波形和本文提出的调制方法示意图（见图 7）基本一致。图 14 中，网侧 a 相电压和电流相位基本相同，直流侧电压平稳。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnOI00XAFzLopnQg4uO1gqGdMyMpLE384x1fVI9gqINsUtf5wDMzjdUdVLM2rUe4ibJxcU3YR7wCACadlluMnjjlpdBz3AxISw/640?wx_fmt=png&from=appmsg)

对a相电流进行快速傅里叶变换（Fast Fourier Transform, FFT）分析，THD为3.38%。由此证明，采用所提出方法可实现网侧电流正弦，功率因数接近 1，具有较好 的稳态性能。  

在不同工况下对开关损耗进行大量实验测试， 可发现所提出方法对应的开关损耗值最小，实验结果如图 15 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPdwjvE9iaxNFezw0w1tecBAbrxZndiaEt5Zrr3mRQ5VPQGX3BOd5CHbia7gj8rtgGDPhDNF2EH2C8sGM8Utw2Em9UcmmZnZBYJEE/640?wx_fmt=png&from=appmsg)

当交流侧功率从 600W 升至1400W 时，最优移相角组合对应的电力电子器件损耗均为最小，验证了所提出方法的正确性。  

图 16 为采用所提出方法在不同工况下的效率曲线，可以看出在最优移相角组合下，该变换器的效率最高可达到 96.89%，同时变换器在宽功率范围内均可实现 94%以上的效率。  

5.结论  

本文提出了一种BIMC最小开关损耗控制方法，该方法基于双线电压调制策略，建立了电力电子器件损耗模型，并对开关损耗进行最小化寻优，通过实时计算最优移相角组合，使变换器效率达到最优。开展了仿真和实验验证，结果表明： 

1）采用所提出的控制方法，变换器网侧电流为平衡的三相正弦电流波形，功率因数接近于 1，直流侧电压保持稳定，电流纹波率小，具有良好的输入输出性能。 

2）通过采用所提出的控制方法，该变换器实现了电力电子器件的开关损耗最小，保证其在宽功率范围内条件下实现高效率运行。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNS7emqsaicOvzlGHC81zMrj8D0mZbXwwXb0icshPibqx1sAx8zmaeF49E6ewWXDxa1dSEeibcB2vVSyRBicEqO4rJMQxV9TDYXFjLw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPSEkTNSDMeaLIRQ0w5FotSLu5Upsgwa8PU9Sk7ia8xhNt5GLDupq0BE3GQU1CicL1XhFXR8KHY4FRz99VsEf2s2nu9Se26eJWkA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtGaaCfwIKOhqWZiaWVYYDVLkibSaIgoJbWRk8571lCyh4JbN2O3HP8Cpqode2TBTXqibybosTM8kDIIdj1VicKPUdAskOyDoHcJI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOygImDkAiaYx2Ieygu2GgSxE8KnBUluqQlJehcG0cEFIlPiaFykpMx5ZwqY02JWGWH3AIiaW6TDxr0Y8I6VCEhYSQ5FLP83XGg6g/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)