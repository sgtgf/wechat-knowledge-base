# 单级高频隔离型三相双向 AC/DC 变换器研究综述


> 原文地址: [https://mp.weixin.qq.com/s/akxVK49s2zWpS0yj6E6Puw](https://mp.weixin.qq.com/s/akxVK49s2zWpS0yj6E6Puw)

文章来源：中国电机工程学报

作者：顾玲(南京理工大学自动化学院电气工程系，江苏省南京市 210094) 

摘要：单级高频隔离型三相双向AC/DC 变换器以单级式的结构可实现高频电气隔离、单位功率因数控制、双向电能传输和升降压变换，在微电网母线电压变换、储能装置功率变换等场合均具有重要的应用。文章基于电路拓扑、调制策略2个方面详述变换器的研究现状，分析各类拓扑和调制方法的工作原理和应用特点，总结拓扑结构机理和衍生方法，归纳考虑变压器伏秒平衡的空间矢量调制策略步骤。最后，从新型半导体器件的应用、软开关的实现和可靠性的提高3个方面对变换器的未来发展趋势进行展望。  

关键词：高频隔离；三相AC/DC变换器；双向变换器；脉宽调制策略  

0. 引言  

随着国际社会对保障能源安全、保护生态环境、 应对气候变化等问题的日益重视，发展低碳、清洁、可再生的能源已逐步成为全球普遍共识和一致行动。作为实现可再生能源规模化接入电网的有效组织形式，微电网借助功率变换理论对分布式电源、储能装置和本地负荷实施调控，以协调分布式电源与电网、负荷间的矛盾，从而提高供电可靠性和经济性。作为直流微电网的直流母线与电网间、交流微电网的交流母线与储能装置间、交直流混合微电网的交直流母线间的接口变换器，三相双向AC/DC变换器是保证系统稳定运行的核心功率变换装置，承担着能量管理的关键角色。综上，变换器需具备如下基本功能：网侧功率因数控制；电能双向高效传输；电气隔离；升降压变换。  

隔离型三相双向AC/DC变换器的典型方案如图1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEDU7o4icA3uPyHhRia0F5Hgs1wgfTAyyV3lC18o8wm6sMQPfUFZZdPicBg/640?wx_fmt=png&from=appmsg)

图1(a)采用非隔离三相AC/DC 变换器与非隔离DC/DC 降压变换器的两级式拓扑方案，两级间需要解耦电容，且工频变压器体积重量大、成本高。为去除工频变压器，图1(b)给出非隔离三相AC/DC变换器与隔离DC/DC降压变换器的两级式拓扑，可实现高频电气隔离，但仍需解耦电容。 如图1(c)所示，单级隔离型三相双向AC/DC变换器消除了两级间的解耦电容和DC/DC降压变换器的电感，功率密度更高，且通过变压器匝比调节可实现升降压变换，成为近年来国内外的研究热点。

与传统非隔离型拓扑相比，单级隔离型三相双向AC/DC变换器最显著的特征为需考虑变压器在开关周期内的伏秒平衡，其基本结构包括交流侧滤波器、交流侧开关桥臂、高频隔离变压器、直流侧桥臂和直流侧滤波器等。需要说明的是，为实现电能的双向流动和变压器的伏秒平衡，交流侧开关桥臂需具备四象限工作特性，将三相交流电压变换为单相交流电压。  

根据交流侧为L滤波器或LC二阶滤波器，可将变换器分为电流型及电压型拓扑，分别为Boost型及Buck 型。电流型拓扑具备内在的升压特性，而电压型拓扑具备降压能力。根据交流侧开关桥臂的结构，可将其分为矩阵型、VIENNA 型、Z 源型等。  

本文针对单级高频隔离型三相双向AC/DC变换器的国内外研究现状进行详细阐述和归纳总结。 首先，对相关电路拓扑的分类和工作原理进行详细讨论，并阐明各拓扑的优缺点；其次，分析不同调制策略的工作原理，包括载波脉宽调制策略和空间矢量脉宽调制策略；然后，揭示拓扑结构机理，提出拓扑衍生方法；最后，对本文主要内容进行总结，并对变换器的发展趋势进行展望。  

1. 单级隔离三相AC/DC变换器拓扑

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnESJpzZMJMaXV8n8aoT0EkbamEpS57OopErdaMFQfS7pDu8CkluUxEmA/640?wx_fmt=png&from=appmsg)

三相准单级式变换器如图2 所示，其开拓消除两级变换器间解耦电容以构成单级变换器的思路，为单级高频隔离三相双向AC/DC变换器拓扑的发展奠定理论基础。虽然该变换器提高了功率密度，但开关损耗较高，且在大功率场合应用时，开关管电流应力较高。为解决上述问题，国内外学者对单级高频隔离AC/DC变换器进行深入研究。 本文对其进行分类总结，如图3 所示，并对各类变换器的特点进行详细介绍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEvCcmEtDBUBrv1tDQasjPYFyZ1WvAzmdEIevU8ftPmIk3WW6Qo4aL7Q/640?wx_fmt=png&from=appmsg)

1.1 三相矩阵型AC/DC变换器拓扑

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEfia0MsACcWvYsiaWm0u3A87ajJKBbt7c4J6sPxgMQh5ROBk0iatTaNibWA/640?wx_fmt=png&from=appmsg)

三相矩阵型双向AC/DC变换器是目前研究最为普遍的单级隔离型拓扑，其特点是交流侧桥臂为双向开关矩阵，如图4 所示。图4(a)所示为Boost 型拓扑，交流侧电感电流连续，功率因数较高。但交流侧电流与变压器漏感电流在开关状态切 换时会发生瞬时不匹配的情况，导致开关管两端产生电压尖峰。因此，在桥臂两端往往需外加吸收电路，这会降低变换效率。图4(b)所示为Buck 型拓 扑，适合降压AC/DC 变换，但交流侧电流断续， 需增加LC 滤波器，以降低电流谐波含量。  

与图2 所示准单级型拓扑相比，图4 所示矩阵型拓扑的有源器件数目更多，但其存在其他方面的优势。首先，在控制复杂程度方面，准单级型拓扑的交流侧为2 组开关管Qi1—Qi2(i\=a,b,c)和Qp1—Qp4，其控制需相互配合且较复杂；而矩阵型拓扑的交流侧只包含1组开关管，控制较简单。其次，在电流应力和损耗方面，在准单级型拓扑中，流经开关管Qp1—Qp4 的电流为相电流包络线，其电流应力和导通损耗较高。矩阵型拓扑交流侧同一桥臂的2个双向开关管分担对应相电流，其电流应力和导通损耗较低。因此，两者各有优缺点，可根据不同应用场合的需要进行选取。  

基于双有源全桥(dual active bridge，DAB)直流变换器的思想，三相双向AC/DC变换器将变压器的漏感作为能量传输电感，可解决上述电压尖峰的问题，同时实现开关管的软开关。通过控制交直流侧桥臂电压的移相角可实现电能的双向传输。 DAB 型拓扑与图4(b)所示Buck 型拓扑结构的区别仅在于电感的位置，但其工作原理存在较大差别，如图5 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEDfcheqicJJ4Ia0fUccydWnvsTGRoPQ3Fr9ogmbjbQlngVRBJKNBnhHg/640?wx_fmt=png&from=appmsg)

Buck型拓扑直流侧电感起滤波作用，其两侧电压为直流侧桥臂输出的高频方波电压和直流侧电压的差值。当电感电流连续时，其感值只影响滤波效果，变换器工作原理类似Buck 直流变换器，具备降压能力，但不利于软开关的实现。DAB 型拓扑中与变压器串联的电感起能量传输作用，其两侧电压为交流侧桥臂输出高频电压与直流侧桥臂输出折算到原边高频电压的差值，且两侧电压之间存在移相角，控制自由度增多。电感值影响传输能量值，变换器工作原理类似双有源全桥变换器，有利于开关管实现软开关。  

对于矩阵型AC/DC变换器，交流侧桥臂在开关状态切换时可能发生电压源短路和电流源开路的现象，成为研究中不可忽视的问题，因此，研究双向开关换流方法至关重要。对双向开关中的开关管单独控制和混合控制等方法可预防短路和开路问题，同时降低交流侧电流谐波含量。  

1.2 三相VIENNA型AC/DC变换器拓扑  

VIENNA 整流器由KOLAR J W 等人于1994年提出，其优势在于输出为三电平结构，开关管电压应力只有输出电压的1/2。为实现高频电气隔离，KOLAR J W 等人对拓扑进行改进，提出VIENNA II型整流器，但仍不能实现电能的双向传输。  

三相VIENNA 型双向AC/DC 变换器不仅可解决上述问题，还能降低导通损耗，提高变换效率，如图6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEkHN9bibGn1X6qeSZrJ0NuGfeqPRXm2uj6KP1e1B2etWbshIGeZFYVYw/640?wx_fmt=png&from=appmsg)

引入多变压器的变换器拓扑可进一步扩展功率等级，降低开关管电流应力，且Y-△连接的变压器可额外提供2：1的降压比，使其适用于蓄电池充放电等直流侧为低压大电流的场合，如图7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnE9ABgjhnpyaNaAHl25ibia8Gv0dTwCVnVEiaI58ibtx96CCicZWTGn3x8omQ/640?wx_fmt=png&from=appmsg)

1.3 三相SWISS型AC/DC变换器拓扑  

VIENNA 型拓扑的交流侧电流连续，其本质上为升压变换器，只能通过变压器匝比进行降压。 根据空间电压矢量对变换器进行控制，不需要外加磁复位电路。为适应高降压比场合的需要，SOEIRO  T B 等人提出SWISS 型拓扑，与VIENNA 型拓扑为对偶关系，其交流侧电流断续，需额外增加LC滤波器。变换器具备内在的降压能力，直流侧为滤波电感，可降低电流纹波。一种由SWISS 衍生得到的隔离型AC/DC变换器如图8 所示，采用空间电流矢量调制，变压器工作方式与正激变换器类似，需通过外加元器件实现变压器磁芯的磁复位。 例如，在变压器两端并联电容，与励磁电感谐振而实现其磁复位，也可通过有源箝位电路等其他方式进行变压器磁复位。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEUCHRwibgiamarLGvAno98ne5iacyvY27jOJkTWib8ibt0ZicLW3gCh1bfssQ/640?wx_fmt=png&from=appmsg)

上述变换器在线电压过零处存在三相电流畸变问题，增大交流测滤波电容可缓解畸变问题， 但会引起电流相位的滞后。此外，为抑制LC 滤波器引起的振荡，增大电容的同时需减小电感，但会造成交流测电流纹波增大。  

1.4 三相Z源型AC/DC变换器拓扑  

Z 源逆变器由彭方正等人于2002 年提出，作为介于电压源逆变器与电流源逆变器之间的拓扑，为逆变提供全新的拓扑形式。Z 源网络是由2 个相同的电感和2 个相同的电容组成的对称结构。变换器可实现升降压变换，开关管数量较少且不存在桥臂直通而引发的短路问题，因而可靠性较高。  

根据直流侧为电压源还是电流源，可将Z 源变换器划分为电压馈电型(voltage-fed，VF)和电流馈电型(current-fed，CF)。为实现电气隔离，提出高频隔离型Z 源/准Z 源AC/DC 变换器，图9、10 分别 给出VF 型Z 源和准Z 源拓扑。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnE0canmPANYgI8tibCYyiaZmkfASQV9zJeXjRwhygOrEe0pIt4zZfLHfiag/640?wx_fmt=png&from=appmsg)

其中，图9 所示Z 源型拓扑的直流侧电流断续，不适用于对电流纹波要求较严格的场合；图10 所示准Z 源型拓扑的直流侧电流连续，电容电压应力更低，无源器件数量更少。然而，无论是Z 源还是准Z 源变换器，均需增加电感与电容这些无源器件的数量，其体积重量会增大，进而影响功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEGTfqxmsKEYnFAoicWGb18AkUapfgicGK2gCicmVrRYJwF54FEuZrJ6LOw/640?wx_fmt=png&from=appmsg)

1.5 直流变换器衍生型三相AC/DC变换器拓扑

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEkjYnENhcxOg6M95yp4hyhx7TlGfDR0K9fZOQoH8VqGTcPUmgdMqia9A/640?wx_fmt=png&from=appmsg)

  
基于Flyback 变换器、隔离型 SEPIC 变换器等传统直流变换器可衍生一系列三相AC/DC 变换器，如图11、12 所示。该类变换器的特点在于均为多变压器结构，每相交流侧为独立的隔离型AC/DC 变换单元，将直流侧整流结构进行 整合，最终形成单路输出。  

基于Flyback的三相AC/DC变换器工作在交流侧电流断续模式(discontinuous current mode ，DCM)，交流侧电流在每个开关周期内的平均值与交流侧电压成正比，且电流与电压同相位，从而实现单位功率因数控制。基于SEPIC 的三相AC/DC变换器的直流侧二极管工作在电流断续模式，由此可推导交流侧电压与电流之间的比值为纯电阻，从而实现两者同相位。但是，上述基于DCM 模式的变换器开关管电流纹波和电流峰值均较高，只适合于中小功率场合。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEMic6GCd8DeYxaQld0EpS8sq0daERh3dUWCb4A7CzfdvPYicxLa4FKukw/640?wx_fmt=png&from=appmsg)

相较而言，前述桥式结构的变换器更适合于大功率场合。  

与上述单管变换器相比，基于全桥变换器、LLC 谐振变换器的三相AC/DC 变换器可提高变 换器处理大功率的能力，但是开关管数量较多，且结构较为复杂。  

1.6 适应特殊工况的三相AC/DC变换器拓扑  

针对可靠性要求较高、需具备容错性能的场合，可采用如图13 所示拓扑。每相电流通过3个桥臂均分，适用于大功率场合。当变换器工作在正常模式时，3 个变压器和所有开关管同时参与工作；当变换器某相开关管或者变压器发生故障时， 另外2 个变压器及相关电路参与工作，使其具备故障容错能力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnENJ0QKz58AF2AyTyuUcgGcTQrDmjI7HEJA3ibLJH5eGeUtJxY3icODicmQ/640?wx_fmt=png&from=appmsg)

此外，为适应三相不对称负载，如图14 所示，三相四桥臂隔离型AC/DC变换器通过增加零序电流支路，即开关管Qn1—Qn4以及电感Ln 组成的支路，使变换器在不对称负载条件下能实现三相对称电压输出，同时保证高频变压器的伏秒 平衡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnE8TTqcKMqic96wbOscickkQhQaL7flIPoA0cwViaHJC02OWR2icdfibWZO2g/640?wx_fmt=png&from=appmsg)

1.7 拓扑对比与分析  

为归纳和总结上述拓扑的特点，对能够表征效率和功率密度的电路特征进行详细对比，如表1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEN8Xx15hd8sx5Xh8CW8lplaHrBIPhrw12dOiarz6ibFZ2nc2lrsp69ITg/640?wx_fmt=png&from=appmsg)

关于交流侧电流，三相Buck 矩阵型、DAB 矩阵型、SWISS型和DCM Flyback AC/DC 变换器的交流侧电流断续，电流纹波较大，需引入LC 滤波器提高功率因数，会影响变换器的功率密度。  

关于软开关，三相DAB 矩阵型AC/DC 变换器可实现零电压开关，DCM Flyback和DCM SEPIC型AC/DC 变换器可实现零电流开关。其他变换器 只能部分实现或者不能实现软开关。  

关于开关器件，三相矩阵型、VIENNA 型、SWISS 型AC/DC 变换器的开关器件数目较多，但二极管均与开关管反向并联，可采用带反并二极管的器件。而三相Z 源型拓扑的开关器件及功率流流经开关器件数量均最少，但其电流应力相对较高，且电感和电容等无源器件数目较多。  

对于无源器件，三相Boost 矩阵型、VIENNA型AC/DC 变换器的电感、电容、变压器总数较少。 而在SWISS 型、Z 源型拓扑中，其数目较多。虽然与单变压器拓扑相比，包含3 个变压器的电路拓扑变压器数目较多，但可减少单个变压器处理的功率，在大功率场合可简化其设计难度。  

综上所述，上述变换器均可实现三相双向升降压AC/DC 变换和高频电气隔离，每类拓扑各有优劣势，可根据不同的应用场合进行选取。在大功率场合，可选用VIENNA 型、SWISS 型拓扑，其大部分开关管的电流应力较低；在小功率场合，可选用DCM Flyback、DCM SPEIC 型拓扑，其控制较简单；在中功率场合，可选用矩阵型拓扑，其平衡了器件数目和电流应力；在对体积重量要求不高而对可靠性要求较高的场合，可选用Z 源型拓扑，其开关器件数量较少，且不存在直通短路问题。此外，三相DAB 矩阵型拓扑由于在软开关实现、变换效率、控制灵活等方面的优势，而成为近期研究热点。 然而，以上只是对各拓扑的定性分析，最佳拓扑方案还需根据具体参数和指标要求进行量化比较后 选取。  

2. 单级隔离三相AC/DC变换器调制策略  

单级高频隔离型三相双向AC/DC变换器的调制策略主要有载波脉宽调制(carrier based pulse  width modulation，CBPWM)和空间矢量脉宽调制策略(space vector pulse width modulation，SVPWM)， 如图15 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEodjEBkXqbP67WC1DEjJL5lGU2HjXrvuK8p0kONmsJMO7eD3c9ve4Fw/640?wx_fmt=png&from=appmsg)

与非隔离拓扑调制策略的区别为应用于隔离拓扑的调制策略需考虑隔离变压器的伏秒平衡，且涉及的开关管数量更多。  

2.1 载波脉宽调制策略  

1）正弦脉宽调制策略。  

正弦脉宽调制(sinusoidal pulse width  modulation，SPWM)是最常见的CBPWM调制策略。 将正弦调制波与三角载波进行交截，得到脉冲宽度按正弦规律变化的开关管驱动信号，保证交流侧电流呈正弦规律变化。SPWM 原理较为简单，但其直流电压利用率较低。为提高直流电压利用率，可在正弦调制波中注入三次谐波等零序分量，降低调制波幅值。  

由于SPWM 调制策略仅从交流侧电流正弦化的角度考虑，并未考虑变压器的伏秒平衡，因此不能直接应用于矩阵型、VIENNA 型、SWISS 型等AC/DC 变换器中，需对其加以改进。然而，SPWM调制策略适用于三相Z 源型、准Z 源型、DCM  Flyback型及DCM SEPIC型等无需通过驱动信号的额外调整以实现变压器伏秒平衡的拓扑。

以图9 所示三相Z 源型双向AC/DC 变换器为例进行SPWM 调制策略分析。相应的驱动波形生成图如图16 所示，三相桥臂开关管的驱动信号由调制波ua、ub、uc与三角载波交截得到，同一桥臂上的开关管驱动互补。三相正弦调制波被注入三 次谐波，以提高直流电压利用率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEZicfbckvIDtkxQfIyCZGUVSZS3tXwhMNiaSjswyPWBYXK7sMxerz4ibug/640?wx_fmt=png&from=appmsg)

对于Z 源变换器而言，还需考虑直通开关管Spn 的通断控制，这是变换器能进行升降压变换的本质原因。开关管Spn 的开通时间即直通占空比为固定值，可减少低频纹波，从而降低电感和电容等无源器件的体积和重量。 

2）双线电压脉宽调制策略。  

与上述SPWM 调制策略关注交流侧电流正弦化不同，双线电压脉宽调制策略聚焦于变压器两端电压波形，并满足交流侧电流的要求，适用于交流侧桥臂输出为电压源、需通过开关状态调整以实现变压器伏秒平衡的三相Buck 型AC/DC 变换器。根据线电压划分扇区，从电压角度看，变压器两端电压通过当前时刻最大的2 个线电压及零电压直接拟合；从电流角度看，假设直流侧滤波电感足够大， 经变压器折合到交流侧可等效为电流源，再通过不同的开关状态分配至三相交流电源。  

以如图4(b)所示三相Buck 矩阵型AC/DC 变换器为例进行双线电压脉宽调制策略分析。相应的驱动波形如图17 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEqpqEtDbQM76Q2LfTQVN8IuDWJMicKUtIx9yib3qmj7bgmic12icTzMlk0A/640?wx_fmt=png&from=appmsg)

三相电流在开关周期内的平均值为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEiaZzUnkZmfic6veicr5FZRAiccZkWEq6e0sXiafKDmFc1Hz6HicbiczfgxTNA/640?wx_fmt=png&from=appmsg)

为保证相电流呈正弦波且与相电压同相位，交流侧开关管占空比需满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEiaExdiaHgrrT0EFvAvlVnricmb6hTVYibtVJR9iawWoU5iawayyFZcHHczNQ/640?wx_fmt=png&from=appmsg)

式中：a为调制度，a∈\[0,1\]；Um 为相电压幅值。 

根据电感的伏秒平衡原理，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnE6icjFQxSuuAEibYNP4WUZPFzwFibDwz40xCBQJZXcZeKtLySY8modZz7Q/640?wx_fmt=png&from=appmsg)

式中n为变压器原副边匝数比。可以看出，当变压器匝比为1：1 时，变换器在 该调制策略下仍具备内在的降压能力。 

3）移相脉宽调制策略。  

移相脉宽调制是在对交流侧桥臂采用上述双线电压调制的基础上，对直流侧开关管加以控制， 使交流侧桥臂电压与直流侧桥臂电压之间产生相位的超前或滞后，其电压差值即为能量传输电感两端电压，以实现能量的双向传输。变压器的伏秒平衡由直流侧开关管控制实现，该调制策略适用于交直流侧均为电压源且包含能量传输电感的三相双向AC/DC 变换器中。  

以图5 所示三相DAB 矩阵型双向AC/DC 变换器为例进行移相脉宽调制分析。假设变压器匝比为1：1，ua>ub>0>uc 时，移相脉宽调制策略示意图如图18 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEs5xxSPTdxdC7PvCJXTibNYYMDMeMiczOWqn1nDXqZgWjIny9EEqZy70g/640?wx_fmt=png&from=appmsg)

交流侧桥臂的调制与双线电压脉宽调制类似，变压器两端电压up 通过当前时刻最大的2 个线电压和零电压进行拟合，以保证单位功率因数控制；直流侧开关管的占空比固定为0.5，以保证变压器的伏秒平衡；而交直流侧驱动信号间的移相角θd由电流控制环路决定，可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEsrxPlveXpqDhwekbBPY9PHqAdAZC9qMJ18PMxF5rIFnUalXrfg2KZQ/640?wx_fmt=png&from=appmsg)

作为能量传输电感的设计依据，由上述调制策略可得与DAB 类似的最大传输能量：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEsSUib8V4aSMtH2cpYNwLQqDF3ILIL8mnEmljbmibQm4Ro1smDJLKm07A/640?wx_fmt=png&from=appmsg)

式中Ts 为开关周期。  

2.2 空间矢量脉宽调制策略  

空间矢量脉宽调制策略通过对交流侧电压或电流矢量进行直接控制，使其在矢量空间内形成圆形匀速旋转轨迹，具有谐波含量低和直流电压利用率高等优点。通过合理分配开关状态，对空间矢量调制加以改进，可解决变压器的磁复位问题。该调制方法较为通用，可应用于各类三相高频隔离型AC/DC 变换器中。 

1）空间电压矢量调制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnERicm55Ga4edPTsUVJ5HT3X5Xs3DxvKvghZhVFT0MGcMIEXNq4pmXTfw/640?wx_fmt=png&from=appmsg)

  
对于Boost矩阵型、VIENNA 型等交流侧桥臂输出等效为电压源的三相Boost 型AC/DC 变换器， 可采用空间电压矢量调制。在不同的开关状态下， 变换器等效电路如图19 所示，up 表示变压器交流侧绕组电压。基本电压矢量图如图20 所示，将基本电压矢量和三相电流方向同时作为扇区划分依据，整个平面被划分为12 个扇区。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEqElibJczwKQdB297s49s1fSv7m0rIibbd9nkwo3ooNvAKfgm75PbWz2A/640?wx_fmt=png&from=appmsg)

以图6 所示VIENNA 型AC/DC 变换器为例，对考虑变压器伏秒平衡的空间电压矢量调制原理进行分析。扇区2 内开关状态与矢量之间的对应关系如图21 所示。其中，

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO5vQvm7bdrcVWWcBgMqnbVOvCMicwgV60PyeZZYaibGiaVyPZy7ACeugNgV4bWWfKO2RnS8ichCnBk2icALuCUwMNuubPIUOHGDseE/640?wx_fmt=png&from=appmsg)

表示变换器的开关状态。以A 相为例，当Qa3 导通时，Sa==1＋；Qa2 导通时，Sa=1－；Qa1 导通时，Sa=0+；Qa4 导通时，Sa=0-。Qs2导通时，Sd=1，否则为0；Qs4 导通时，Se=1，否则为0。Qs2、Qs3 同时开通，Qs1、Qs4 同时开通。Sign{up}表示变压器电压方向， 其参考方向在图6 中标注。为保证变压器的伏秒平衡，变压器电压为正的时间与电压为负的时间必须 相等。结合目标电压矢量长度的要求，可得到每个开关状态的作用时间，进而得到各开关管驱动波形，如图21(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEV31yficM7j3ex11og3iaTntiaNvibrmIW4P0qCm8fSj1JpYx0ZcJWWeuNQ/640?wx_fmt=png&from=appmsg)

2）空间电流矢量调制。  

对于Buck 矩阵型、SWISS型等交流侧桥臂输出等效为电流源的三相Buck 型AC/DC 变换器，可采用空间电流矢量调制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEcVuwhUGS2fjVSDCeR3l5CwjryE6FKUxgakEG8uwXFFbhQNXEzY8xhg/640?wx_fmt=png&from=appmsg)

变换器在不同开关状态下的等效电路如图22 所示，其中，Ip 为变压器交流侧 绕组电流。由此可得基本电流矢量图，如图23 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEOmDqRVQMHIg5tBSM1HS5WMhPZWRicK5LN3ic1ZooS9HF7feiaxsRQLiazA/640?wx_fmt=png&from=appmsg)

  
以图8 所示的三相SWISS 型双向AC/DC 变换器为例，对空间电流矢量调制原理进行介绍。以  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMdaicVw0kHjAI8tUEZvBBf2SBk488pdXUjWAA8b7D41w2OsxEfcjN3ru0fa1PCIwuhRlm8utftWdSDRUiavnibjoe4kQqr6ylDHc/640?wx_fmt=png&from=appmsg)

定义开关状态，Sign{uT1}  和Sign{uT2}分别表示2 个变压器的状态，“+”表示变压器在磁化，“-”表示变压器正在或已完成磁复位，其余参数定义与上述VIENNA 型拓扑一致。Qs1、Qs2 驱动信号互补，Qs3、Qs4 驱动互补。扇区1矢量合成的相关波形如图24 所示。可以看出，变换器开关状态只能使变压器磁化，因此，在励磁电感两端并联电容与之谐振，使变压器磁复位。而对于Buck 矩阵型变换器，不需要外加磁复位电路，通过开关状态的调整即可实现变压器的伏秒平衡，

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEmbQqItQIdyg4WB25Q8j0ewVL4pgNjI37Wbfkm5RiameTumPGOzs0umg/640?wx_fmt=png&from=appmsg)

3）空间矢量调制策略实现步骤。  

本文归纳应用于单级高频隔离型三相双向AC/DC 变换器空间矢量调制策略的具体步骤，如图25 所示，具体关键步骤如下。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEyZ2QF7iaoUgXyic0BycqmUweOvMBibvicu2FTDxYCaETPzYabWEetf53bQ/640?wx_fmt=png&from=appmsg)

①列举变换器所有可能的开关状态，进行模态分析，计算电压或电流矢量，得到空间矢量图；  

②根据空间矢量和三相电流方向划分扇区，每个扇区内部所选取的矢量及其开关状态相同；  

③遵循开关切换次数最少和变压器伏秒平衡的原则，兼顾谐波含量，确定开关状态切换顺序；  

④根据目标矢量长度和变压器伏秒平衡原理， 计算矢量作用时间，得到开关管驱动信号。  

2.3 调制策略对比与分析  

上述调制策略因各自工作原理的区别而适用于不同类型的三相AC/DC变换器拓扑，如图5 所示。对比不考虑变压器匝比时，载波调制策略与空间矢量调制策略的最大直流电压利用率Rmax(交流侧线电压幅值/直流侧电压)如表2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEKzcAM97GlPib9ickliagfQJqDhbrECR2EptbIs5hIRczj7H6Qa0QibPvKQ/640?wx_fmt=png&from=appmsg)

其中，正弦脉宽调制直流电压利用率最低，但其控制最为简单；注入三次谐波的正弦脉宽调制可有效提高直流电压利用率，其电压利用率最高值与空间电压矢量调制相同，二者可互相等效。而双线电压调制由于应用在三相Buck型AC/DC 变换器中，拓扑具备内在的直流侧降压能力，因此，其直流电压利用率较高。与载波调制相比，空间矢量调制具有易于数字化实现的优势。

3. 单级隔离三相AC/DC变换器衍生拓扑及其调制策略  

3.1 基本结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEXYvK0IFMscKKK72NJwRibRoS7jMt0gJhmybUZ5icnhA5RSs3ibkJdOflA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEjvLroyVE7RAR7bat0qhEonzZ7mabqKej49P9p4uAPE4mKUeSSMm6oA/640?wx_fmt=png&from=appmsg)

根据第2节单级隔离型三相双向AC/DC 变换器拓扑研究，总结其基本结构有3 种，如图26 所示，分别为电压源–变压器–电流源、电流源–变压器–电压源、电压源–变压器(串联能量传输电感)–电压源。交流侧分别为电压源和电流源时的变压器两端电压波形如图27 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEGvjtbs5YA7HoEVcp7y4h8QRTibdJW28rLP1U6hZS3t2VBAnYaomQXlg/640?wx_fmt=png&from=appmsg)

根据变换器需实现变压器伏秒平衡和能量双向流动的要求，再结合电压源和电流源的特性，确定交流侧和直流侧开关网络的选取原则，可以实现变压器交直流侧电压与电流的四象限工作。交直流侧开关网络的主要形式如图28、29 所 示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEpKrpBMlYcMzuODZIAW7zcEeta5yE04x0c70stC4vqHz0bavXS03tyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEuka5yXVXWtAiaSzmuDlGM7A8DUaic2SODwq5PqY4eVAzd3JwX2ymZolg/640?wx_fmt=png&from=appmsg)

矩阵型开关网络最为通用，交流侧可接电压源或电流源，无需外加磁复位电路即能保证变压器的伏秒平衡；准单级型开关网络的开关管数量最少， 但其部分开关管电流应力较高；VIENNA 型开关网络的开关管数量最多，但其大部分开关管电流应力较低。  

3.2 衍生拓扑  

为适应直流微网中电网接口变换器等大功率场合的需要，本文总结单级隔离三相双向AC/DC变换器的拓扑衍生思路，拓展单台变换器的传输功率，减少并联模块数量，降低均流控制的复杂程度。 此外，变换器具备容错性能，其可靠性得以提高。  

首先，拓展交直流侧开关网络。通过增加电流支路的方式，降低开关管电流应力。经过拓展后的交直流侧开关网络分别如图30、31 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEM31dgemcOYNKia7ib6U7RiaULg8JSQlTRI2rEdNfib0mLLIPdKzv44bZTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEwYVJ3pAneNBV50POw6GDLeEkfxmaJTicPia4AWpZTy0yEgHHl5ppUdPA/640?wx_fmt=png&from=appmsg)

  
其次，确定变压器的连接方式。如图32 所示， 变压器共有4 种连接方式。其中△\-Y 和Y-△连接形式相当于两变压器一侧绕组串联，另一侧绕组并联，由此额外提供1：2 或2：1 的升降压比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEJciarmd8J7Fj0k3I3ZEQYNksenZTo4bbvUgiaWoicweUD2nPMUXsFiaicow/640?wx_fmt=png&from=appmsg)

最后，根据电路结构合成拓扑。在图26 所示变换器基本结构的基础上，选取合适的开关网络和变压器连接方式，可推导一系列新型拓扑，其中，2 种典型的衍生拓扑如图33 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnETvNiaicAEP8N7Mb6jRuzGuVtQTS7BVxqMz9myo9Wmjmrbr4cYGweklMQ/640?wx_fmt=png&from=appmsg)

3.3 调制策略  

3.2节所提衍生拓扑可沿用2.2节所提调制策略的思路。与单变压器拓扑的区别在于，变压器在开关周期内两两依次参与工作，而每2 个变压器参与工作期间的调制原理与第2.2节一致。如图33所示，以三相三倍流整流矩阵型双向AC/DC 变换器为例， 其基本电流矢量图形状与如图23 所示相同，矢量长度为√3Idcns / (9np )。在扇区1 内的开关管驱动波形和变压器电压波形如图34 所示，3 个变压器两两交替工作且都能在开关周期内完成磁复位。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslMrkOkj4iar9TKSrzSCRTnEzhtRjDpeUdKXmecdjCGSM7X14ibhrsv4em9oVHNkh9S9K0BoicZuY8eA/640?wx_fmt=png&from=appmsg)

4. 展望  

为了实现更高的功率密度、效率和可靠性，本文从以下3 个方面阐述对于单级高频隔离型三相双向AC/DC 变换器发展趋势的展望： 

1）新型半导体器件在变换器中的应用。与传统Si IGBT 相比，SiC MOSFET器件因不存在电流拖尾现象，而具有开关速度更快、开关损耗更低等优势，有助于提高变换器的整体性能。为此，很多学者开始探索SiC 器件在单级高频隔离型三相双向AC/DC变换器中的应用，不仅可降低开关损耗，而且其体二极管反向恢复特性较好，可减少开关噪声。因此，进一步研究SiC 器件在变换器中的应用对其功率密度和效率的提升均具有重要的意义。 

2）软开关技术在变换器中的发展。单级高频隔离型三相双向AC/DC 变换器融合了三相升降压AC/DC 变换、单位功率因数控制、 高频电气隔离、双向电能传输等功能，因而开关管数量较多，在硬开关状态下的开关损耗占总损耗比重较高。研究软开关实现方法不仅可以提升效率，而且可以促使变换器高频化而提升其功率密度，因此成为变换器未来的重要发展方向之一。 

3）变换器可靠性的提高。在微网等系统中，三相双向AC/DC 变换器往往是保证系统可靠运行的关键电能变换环节，其可靠性尤为重要。然而，由于变换器开关管数目较多，任何一个开关管的损坏都可能使其无法正常工作。 因此，研究变换器的容错性能，使其在少数器件发生损坏时仍能维持关键负载的供电，从而提升变换器的可靠性也是重要发展趋势。  

5. 结论  

单级高频隔离型三相双向AC/DC 变换器消除了两级变换器之间的解耦电容，具有功率密度更高的优势，在交直流微电网、储能装置等场合均具有重要的应用意义。首先，本文对已有单级隔离三相双向AC/DC 变换器拓扑进行分类，详细阐述各拓扑的工作原理，分析其相互间的联系和区别，总结 各自的应用场合；其次，对应用于上述拓扑的调制策略进行分类，分析各自的工作原理，归纳考虑变压器伏秒平衡的空间矢量调制策略的实现步骤，阐明各调制策略之间的区别与联系；然后，分析变换器的基本结构，从已有拓扑中分离出交直流侧开关 网络，并进行拓展，再结合变压器不同的连接方式， 衍生出能适应更大功率应用场合的新型单级高频隔离型三相双向AC/DC 拓扑。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViciakK6zIjF5qlcSnF1iavjkjHMxt7kkQL56t2I0VkMMGPHAlYCdcic10UQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViciaeWPoukpPSoodzkAIEebeRqm1uPL6FbiaWJpjkn1uQXDBpck2ibQk5pA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViczk316DvZLAIY5ODl8oOr06x638bzC5wceE3licVx8yia9wdFO7GB1bnQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbVicbz7NgK7j4g1MCoaClV4h1ic8eof2OicIvGKvhVLkyjc7LGo5V6Q8sWaQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)