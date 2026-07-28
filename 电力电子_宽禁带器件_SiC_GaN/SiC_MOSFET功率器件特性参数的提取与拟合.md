# SiC MOSFET功率器件特性参数的提取与拟合

原创 曾伊浓 ，易映萍 SiC碳化硅MOS管及功率模块的应用 2024-12-17 13:43 广东

> 原文地址: [https://mp.weixin.qq.com/s/nTERJPCWxeZAHcmwKAs1yw](https://mp.weixin.qq.com/s/nTERJPCWxeZAHcmwKAs1yw)

文章来源：高电压技术

作者：曾伊浓1，易映萍1，董晓帅2（1.上海理工大学机械工程学院，上海200093；2.国家电网许继集团有限公司，许昌461000）

摘 要：为了对碳化硅(SiC) MOSFET功率器件的特性参数进行全面的研究，提出了一种碳化硅(SiC) MOSFET变温度参数模型，该模型考虑了功率器件中封装引脚寄生电感、内部寄生电容、体二极管等特性参数，并根据器件的开关过程中的不同阶段，将功率器件中的导电沟道等效为不同电路模型。为获取该模型中的涉及的特性参数，搭建了基于Agilent B1505A功率半导体分析仪和矢量网络分析仪(VNA)的测试平台对SiC MOSFET功率器件的静态特性参数进行了全面测量，然后使用基于贝叶斯正则化LM算法的改进BP人工神经网络对所测的数据进行非线性拟合。结果表明，相较于传统拟合方法，该方法具有更高的精确度与泛化能力，为SiC MOSFET功率器件建模与参数分析提供了重要依据。

关键词：碳化硅；MOSFET；寄生参数提取；温度特性；贝叶斯正则化；人工神经网络

0.引言

新型宽禁带半导体器件碳化硅(silicon carbide,SiC) MOFSFET因其材料具有高击穿场强、高饱和电子漂移速率、高热导率等优点，可应用在高压、高温、高频等工作场合，近年来获得了国内外研究人员的广泛关注。由于SiC MOSFET具有良好的开关特性，因此可以通过提高开关频率，减小变换器中无源元件的体积，从而提高电力电子变换器的功率密度。但是随着开关频率的增加，开关损耗也相应增加，内部寄生电容、引脚寄生电感等特性参数对功率器件开关特性的影响也在加剧。另外在进行电路级SiC MOSFET功率器件建模需要考虑器件的特性参数，模型的精准与否与建模时所用到的器件特性参数的准确度直接相关。因此有必要对SiC MOSFET功率器件特性参数的提取与参数拟合方法进行研究。目前国内外的已有的SiC MOSFET功率器件分析模型中，涉及功率器件特性参数的处理方式主要可分为3类。

1）以半导体物理知识为基础，推导出功率器件的特性参数表达式，此类参数模型一般具有较高的精确度，能够准确地描述器件的物理特性，但是表达式涉及的半导体工艺参数(如参杂密度等)一般较难获取，且模型往往较为复杂，计算量大，不适于电路级应用。

2）将器件特性参数看作常数或进行线形分段近似处理。此方式的优点在于特性参数的获取方式简单，能一定程度上简化SiC MOSFET功率器件模型。但由于SiC MOSFET器件的寄生电容(漏源极电容、栅漏极电容、漏源极电容)、跨导系数等参数具有明显的非线性特征，故此方法下得出的SiC MOSFET功率器件分析模型的精准度一般不高。

3）使用器件生产厂商提供的某一具体型号SiC MOSFET功率器件数据手册中的特性参数曲线。此种方法的大致操作为将数据手册中需要用到的特性参数曲线的数据提取出来，再利用相应的数学方法拟合为特性参数的函数表达式。相较于前一种方法，该方法在模型准确度上有了很大的提升，能满足一定精度下的仿真要求。但其不足之处在于器件厂商所提供的器件数据手册中的数据仅为特定环境或工况下所测得的结果，与实际值有一定的差异。另外阈值电压、转移电导和通态电阻等特性参数受温度影响较大，然而数据手册仅给出了少数几组温度下的参数值，无法建立SiC MOSFET功率器件的变温度模型。

针对上述方法所存在的问题，本文提出一种基于Agilent B1505A功率半导体分析仪和矢量网络分析 仪(vector network analyzer, VNA)提 取SiC MOSFET功率器件的特性参数，并利用人工神经网络对所提取的特性参数进行非线性拟合的方法。该方法通过搭建功率半导体测试平台，参照参数定义和功率器件数据手册的测试方法，测量多组温度下功率器件的非线性内部寄生电容、跨导系数、阈值电压、体二极管伏安特性、通态电阻、封装引脚寄生电感等特性参数曲线，并与功率器件数据手册所提供的曲线进行对比，验证测量结果的可靠性。最后使用基于贝叶斯正则化的BP神经网络进行特性参数拟合，结果表明本文采用的拟合方法相较于传统方法具有更高的精度和泛化能力。

1 .SiC MOSFET器件开关等效电路模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla2TnS6OZicHxITt0ItBOrhzp9TcYMQyIsgcTmz4SpPxHTtQguwia1ZicXA/640?wx_fmt=png&from=appmsg)

图1所示为考虑封装的SiC MOSFET分立功率器件模型，其中3个外部封装引脚处分布着寄生电感，用Lpad表示；封装与内部碳化硅晶片之间的焊接线也存在寄生电感，用Lbonding表示。这些寄生电感值的大小跟封装型号有关，目前的封装技术试图通过将晶片与几乎无电感的衬底直接相连来最小化此类寄生电感，从而实现将功率器件寄生电感值降低至0.1 nH。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaE3GzzlCY8XibLssvKFgQmob74u75uoibkxk2ibdgO3NHib2v7yib2QOIymA/640?wx_fmt=png&from=appmsg)

作为单极型晶体管，SiC MOSFET功率器件的动态特性主要是由器件内部寄生电容的充放电过程决定的。以图2所示的，具有垂直导电双扩散MOS结构的VDMOSFET(vertical double-diffusedMOSFET)为例，在每对极之间都存在内部寄生电容：栅漏极电容Cgd、栅源极电容Cgs、漏源极电容Cds。这些寄生电容由氧化物电容和耗尽层电容组成，而耗尽层的宽度与偏置电压有关，所以内部寄生电容对外呈现非线性，其电容值随外加电压变化而变化。另外由于功率MOSFET本身的结构所致，在其漏极和源极之间，由P区、N−漂移区和N+区形成了一个反向并联的寄生二极管，它与器件构成了一个不可分割的整体，在漏源极两端加反向偏置电压时该寄生二极管导通。当栅源极两端的正向偏置电压大于某一电压值时，栅极下表面的P区电子浓度将超过空穴浓度，从而使得该部分P型半导体反型为N型半导体，即形成导电沟道。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaGPyiby1khlicObTemaez1yw9tQLREoHycg4aMf57wLLh1sraWrXxFOqQ/640?wx_fmt=png&from=appmsg)

考虑上述内容可以得到SiC MOSFET的开关等效电路，如图3所示，其中Ld\_int、Lg\_int和Ls\_int表示3个内部连接电感Lbonding，Ld\_ext、Lg\_ext和Ls\_ext表示3个引脚电感Lpad。合并记作封装寄生电感Ld(Ld\_int+Ld\_ext)、Ls(Ls\_int+Ls\_ext)和Lg(Lg\_int+Lg\_ext)。d、s和g表示各内部结点，D、S和G表示各引脚焊接点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaXgYFLCfsBJFy4Bb0b7VHUcLd7QqfLeQiaGRfIMoUu1ELvpc3qia8LichA/640?wx_fmt=png&from=appmsg)

进一步分析SiC MOSFET功率器件的典型开通波形，如图4所示，假设t0时刻引脚电压uGS达到驱动电压UGG，可知在栅源极电压ugs上升至阈值电压Uth之前，器件仍处于关断状态，漏源极电压uds仍维持在母线电压UDD，故此阶段的沟道可以用开路表示；当t1时刻，栅源极电压ugs大于阈值电压Uth，导电沟道开始形成，漏极电流id开始上升(在此期间由于漏极电流id急剧变化，在器件的寄生电感上产生感应电压uLd+uLs，迫使器件的漏源极电压ugs下降)，导电沟道的宽度与栅源极电压ugs呈正相关，即栅源极电压ugs决定器件的通流能力，此时漏极电流id与漏源极电压ugs的关系可用式（1）表示，故此阶段的沟道部分可以用电压控制型电流源来表示。当t2时刻，漏极电流id上升至通态电流Io(由外电路决定)，栅源极电压ugs上升至米勒电压Umiller，此后漏极电流id会持续上升一段时间。当t3时刻，漏源极电压uds下降至通态电压Uds(on)，栅源极电压ugs恢复上升，器件进入线性区，此时沟道部分可看作电阻，t4时刻器件完全导通。综上所述导电沟道在不同阶段的等效情况如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla1fZ5sDsOnOLwLoZnMicY9XICzIoKiauBTcktVzaXficNeowrINoHrbuMw/640?wx_fmt=png&from=appmsg)

式中：gf表示跨导系数；Uth表示阈值电压。

2. 特性参数测试平台

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaZdibzI2YWGyMdTQibCRU9ddKPjeDAdhXdWvKJLS5Q7P4T0jaPu2oGZdg/640?wx_fmt=png&from=appmsg)

根据上述内容，需要获得的器件特性参数有：封装引脚寄生电感、内部寄生电容、阈值电压、体二极管伏安特性、跨导系数和导通电阻。其中封装引脚寄生电感可通过矢量网络分析仪(VNA)获取，其余器件特性参数根据IEC60747-8的相关标准搭建基于Agilent B1505A功率半导体分析仪和温控箱的参数测试平台进行测量，将热电阻PT100紧于贴器件表面，用于控制和检测温度。在主机中的EasyEXPERT软件进行设置，对科锐(GREE)公司生产的第2代碳化硅产品，型号为C2M0025120D的SiC功率器件的特性参数进行测试。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlavTRDLco0a5QL7IxGT0TKYo1fcuLPu5uyaJicp7ibnL6XfouSOUpLan3g/640?wx_fmt=png&from=appmsg)

测量静态特性参数时，漏级和源极间接大电流源监视单元(HCSMU)，栅极接高功率源监视单元(HPSMU)，根据需要在漏源极接20 A的脉冲单元(WGFMU)，如图5所示；测量寄生电容时，在各极间接高功率源监视单元(HPSMU)，并在直流偏置电压上添加小正弦信号进行扫频测试，各测量单元参数设置如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaKIBQUDkAyibNfjCsAOIvwBW258WfCH3tD6ZR5Z64gkpUAmXojJzKzZA/640?wx_fmt=png&from=appmsg)

碳化硅材料的理论最高工作温度可达600℃，但由于封装工艺及其它技术原因，目前工程应用的最高持续安全工作温度为150℃，故本文从25℃开始每隔25℃进行一次测量，直到150℃，共计6组结温下(特别说明除外)的特性参数测量数据，但由于功率器件的芯片结点温度通常难以直接测量，所以本文采用红外热成像仪获取功率器件的壳温Tc，然后以此来近似替代结温Tj。

2.1输出特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaahGaQUrmCPWOqtGgIkgYn9V32TVMQ6RyS4UbkrbVlRkubwT0ARDDyQ/640?wx_fmt=png&from=appmsg)

输出特性指的是功率MOSFET器件的漏源极伏安特性，即栅源极电压ugs恒定时，漏源极电压uds与漏极电流id之间的关系(由于仪器功率有限，未包含输出曲线的饱和区部分)。结温Tj为25℃时，输出特性曲线测试结果与数据手册对比如图6所示，两组曲线几乎重合，可以看出本套特性参数测试平台的测试结果具有较高的可靠性。

2.2 转移特性

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaUyWvWuGKbcMFZ3PM2HKjDzse1yr56Ov0SAlW2yYI4w6K8Onq4cKW8g/640?wx_fmt=png&from=appmsg)

转移特性是指在漏源极电压uds一定的情况下，输入栅源极电压ugs与输出漏极电流id之间的关系，它表征了功率MOSFET器件的放大能力。转移特性曲线的斜率被定义为功率MOSFET器件的跨导系数gf。同样，通过测试获得不同结温Tj下器件的转移特性曲线，并在Tj=25℃与Tj=150℃下与数据手册对比(数据手册在正温度范围内仅给出此两组数据，后同)，如图7所示。

2.3 阈值电压

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaLicMRTSLhiciaHPer6NniaOg86Ga8J2yicYKbr0DHCNCPpsXNo5icGCTLVnQ/640?wx_fmt=png&from=appmsg)

阈值电压是指器件沟道区源端出现强反型时的栅源极电压ugs的值，此时功率器件的沟道开始导通，本文参照数据手册将漏极电流id为15 mA时的栅源极电压ugs定义为阈值电压Uth。测试结果与数据手册所提供的曲线对比如图8所示，不同结温Tj下，阈值电压的测试结果与数据手册值平均差值约为0.1 V。

2.4 体二极管

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaanria3HAKmsSdrFibTws5p23geIK8hTfM40C81CNubWEurXDvGD8Gd4w/640?wx_fmt=png&from=appmsg)

从MOSFET的结构可看出，未形成导电沟道时，漏极和体区之间的PN结部分可以等效为一个由体区到漏极的二极管，被称为体二极管(又称寄生二极管)，此现象被称为体效应。通过功率器件的漏源极电流id可以看作此等效二极管的反向饱和电流。在SiC MOSFET的栅源极承受负压，沟道关闭时，体二极管可以导通，许多场合下可将体二极管作为续流二极管使用。在模型中需要获得此体二极管的伏安特性曲线，故测量不同结温Tj下的功率器件体二极管的伏安特性，测试结果与数据手册所提供的曲线对比如图9所示。

2.5内部寄生电容

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla6TzQYEu0x3Cf6bO1Gicw1nL3COKxbotfgicVtjJLGHy4DUAICqxs5yfw/640?wx_fmt=png&from=appmsg)

SiC MOSFET功率器件中的漏源极寄生电容Cgd、栅源极寄生电容Cgs和漏源极寄生电容Cds具有明显的非线性特征，其电容值随漏源极电压uds变化而变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlae6chxJ56Ryq7jibFhl9bKSkLoD1gFJRZiaXehlr21TjDwPuDXqXAgXhQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET功率器件开关过程可以看作对其内部寄生电容的充放电过程，故对内部寄生电容参数的获取尤为重要。仪器所获取的测试结果为器件的输入电容Ciss、输出电容Coss以及转移电容Crss，两组电容值之间的转换关系如式(2)所示，从图10可以看出，25℃和150℃相比，输出电容Coss的差异不超过1%，说明内部寄生电容值对结温Tj不敏感，此处给出Tj=25℃时内部寄生电容测试曲线与数据手册曲线的对比结果，如图11所示。后文参数拟合时也取该温度下的电容值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaicsHc8EuW4El4yQsFXj4Kt6oAn3wz14Ah0y7at82eLRTcicIj60ssJzw/640?wx_fmt=png&from=appmsg)

2.6 封装寄生电感

功率半导体分析仪Agilent B1505A无法对封装寄生电感值进行提取，所以需要寻找其他方法进行测量。目前已有的文献中功率器件封装寄生电感的提取方法可以分为两大类：解析法和测量法。解析法通过有限元分析方法(FEA)或者部分元等效电路(PEEC)方法求解麦克斯韦方程组，并根据封装的几何尺寸和材料来分析和求解计算封装寄生电感和内部寄生电容，可以使用数值求解软件，如ANSYSQ3D Extractor，设置材料信息和相关边界条件进行求解。但此方法计算时间长且收敛性差，而且SiC MOSFET功率器件内部封装模型一般难以获取。故此方法不适用于提取封装寄生电感。测量法借助阻抗分析仪，连接待测对象的任意两个端子，其他端子悬空，通过自动平衡电桥原理获取端口的阻抗特性，再采用RLC串联谐振模型来拟合测量结果从而获取SiC功率器件的封装寄生电感值。此方式为单端口测量，对于3端子SiC MOSFET分立功率器件则存在3个端口，每次反接两个端子测量时会得到不同的测量值(如d-g端口与g-d端口的测量值存在差异)，因此每个寄生电感将得到8个2³不同的值，这种不确定性是由于悬空的端子与地面之间高频下的非接触耦合路径造成的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaClt780MqWLGeKPicd0CR22Ch8aegrO8bY0LFicp5BNTgwUvzuWCQjTOQ/640?wx_fmt=png&from=appmsg)

为改善上述问题，本文采用双端口网络提取方法，分立MOSFET器件可以看作二端口网络，如图12所示，本文设置s-g端口连接port1、d-g端口连接port2端口，此时偏置电压为0 V，器件中所有的封装寄生电感(Ld、Ls和Lg)、内部寄生电容（Cds、Cgd和Cgs）及寄生电阻（Rd、Rs和Rg）包含于此二端口网络中，接着通过矢量网络分析仪测得此待测器件(device under test, DUT)的S参数（散射参数），然后将其转换为Z参数(阻抗参数)，通过Z参数能较为准确的获取器件封装引脚的寄生电感值。由于此方法不存在悬空的端子，不仅适用于分立功率器件而且易于推广至具有多端子的SiC MOSFET功率模块的封装引脚的寄生电感值提取。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdladBEV7lVQibfYic29TdoC3icg1OWQvrBHYZhZUx3rW23yL76ZrvmvhwymA/640?wx_fmt=png&from=appmsg)

二端口网络的Z参数：Z11、Z12、Z21、Z22均可以看作二阶RLC串联形式，如式(3)所示，电容通过式(4)从三角形连接转换为星型连接，如图13所示。两个端口电压分别为usg、udg，端口电流分别为is、id。在低频(本文设定为1 MHz)条件下，RLC串联电路的阻抗近似等于其容抗(等效电阻值相对较小)，可以求出电容值，再找到阻抗模值最小时，或阻抗角为0°时所对应的串联谐振频率f0，通过串联谐振公式  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaRWDgVU6hsqeP6rjQ5ul22WbVPnnABKR9foycuybXAR9LCzlRL893Dw/640?wx_fmt=png&from=appmsg)

求解出电感值，即引脚寄生电感值。需要指出的是，此方式提取的电容值是SiC MOSFET功率器件内部寄生电容在零偏置电压(即uds=0V)下的值，可与器件的数据手册提供的电容值比较，作为验证结果准确性的依据。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaRlhByG3czEoLichhJJ2jT3iaic78RaqdcBeWibZ2o1fXOSh0WvARXxYQUw/640?wx_fmt=png&from=appmsg)

式中：Ls-g=Ls+Lg；Cs-g=Cs·Cg/(Cs+Cg)；Ld-g=Ld+Lg；Cd-g=Cd·Cg/(Cd+Cg)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlapYkuuKicmHiadTaosZW0vPABeygkhNnic3esyDSXtOyTCNC8cIgrxudyA/640?wx_fmt=png&from=appmsg)

测量前需要使用开路，短路和50 Ω负载3个校准件对矢量网络分析仪(VNA)进行校准。因为仪器所测量出的结果为二端口网络的S参数(散射参数)，所以为了提取其电感值，首先需要将S参数转换为Z参数。可以看出此二端口网络为互易二端口网络，有S12=S21，Z12=Z21。互易二端口网络参数转换式如式(5)所示\[22\]，其中特征阻抗Z0为50 Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla6JD0wc3ed8ZeibjhvRVqFM6Vhx4vibHu5Y3Iq476dlEHOP929GxQDjLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaTsafqYooMCZS0uUJ2vWU3VKKTYxINlE32BSIIpDOL5khcn1R5Sa1XA/640?wx_fmt=png&from=appmsg)

本文设置VNA从100 kHz到200 MHz扫频，间隔频率为1 MHz。提取到的S参数曲线，通过式(5)将二端口网络的S参数转换为Z参数，如图14所示，从而计算出寄生电感值与寄生电容值，分别列于表3和表4，并将所得到的寄生电容值与前文中半导体分析仪Agilent B1505A提取值和数据手册参考值相比较，其最大差值均小于5%，说明此方法具有较高的精确度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlagk8sVA4y4YLgrk21YkicXNbOgujyYFZd8bcxicTeyf8S3ic5OpCaDbkCw/640?wx_fmt=png&from=appmsg)

3. 基于人工神经网络的参数拟合

SiC MOSFET器件的特性参数可以看作关于栅源极电压ugs、漏源极电压uds、漏极电流id、结温Tj等的函数，以往的文献大多采用多项式进行拟合，但部分特性参数使用多项式进行拟合的精度较差；添加测试数据时会改变拟合所得公式的系数，例如添加负温条件下的器件特性参数；泛化能力也较差，例如对偏置电压uds为0~800 V范围内的内部寄生电容值使用多项式进行拟合，所得到的拟合函数所求得的偏置电压uds为800 V以上的内部寄生电容值具有较大误差。基于以上原因本文采用更适用于处理复杂非线性函数的反向传播(back propagation,BP)神经网络进行特性参数拟合。

作为当前应用最为广泛的一种人工神经网络，BP神经网络在函数逼近、模式识别等领域有着非常广泛的应用，是一种对非线性函数进行权值训练的多层映射网络，优点在于无需事先确定输入输出之间映射关系的数学方程(对于本文来说则无需知晓各参数之间的复杂物理方程，也无需设定为多项式形式)通过适量的样本进行训练，让网络学习样本数据背后的潜在规律，理论上BP神经网络能够以任意精度逼近任意非线性函数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdladB8nZ2bkfbToJzHJbw64Db6yBRusCD2org9A9NRawrrIktcXl1GWrw/640?wx_fmt=png&from=appmsg)

BP神经网络结构如图15所示，包括输入层(i)，本文中输入层为结温Tj、栅源极电压ugs、漏源极电压uds、漏极电流id等；隐层(h)；输出层(o)，本文中输出层为跨导系数gf、阈值电压Uth、体二极管特性、导通电阻Ron、输入电容Ciss、输出电容Coss、转移电容Crss等。图中Wikhk，Whkok,k\=1, 2,…,n分别表示输入层到隐层和隐层到输出层的权重。

BP神经网络对样本进行学习的本质是通过最小化损失函数，如式(6)所示，对各连接权重和偏置进行动态调整。为此人们提出过很多训练算法，如动量法(momentum back propagation, MBP)、共轭梯度法(conjugate gradient back propagation, CGBP)等，其中应用最广泛的算法是列文伯格−马夸尔特法(Levenberg-Marquardt, LM)，该算法将最速下降算法与高斯−牛顿算法进行结合，被看作是中小型系统中最有效的算法之一。

3.1贝叶斯正则化

LM算法更新权重和偏置的规则如式(7)所示，具有较快的收敛速度，但容易出现过拟合现象而影响拟合结果的精确度和泛化能力，对部分特性参数的拟合效果较差，故本文在LM算法基础上引入贝叶斯正则化，在式(6)中添加网络权重平方和均值项，如式(8)所示，将网络的权重看作随机变量，一般假定其先验概率服从高斯分布，然后根据贝叶斯规则，如式(9)所示，可得到最小化式(8)时，损失函数中比例系数α和β的最优取值，如式(10)所示。即将网络权重引入损失函数，通过贝叶斯规则自适应地更新网络权重的密度函数，在保证输出误差最小的同时降低网络的复杂度，从而提高网络的泛化能力。将网络在测试集中的均方误差(mean squareerror, MSE)作为泛化能力评估指标，以拟合输入寄生电容Ciss曲线为例，如图16所示，可以看出基于贝叶斯正则化的LM算法相较于传统LM算法，在网络训练过程中测试集的均方误差MSE下降得更快，且基于贝叶斯正则化的LM算法的最小均方误差远小于传统LM算法，说明网络泛化能力得到了提升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla0BTfE1V5eE8Z7ksFw5xqFkLEHtoNnibvThtpAhmYeBoV8MDh6TBOVJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlazjrSicQNhOVLicRpe0FyEKTcTPC3q43F210MZMiaCQTBeSJ8PorUcMSLA/640?wx_fmt=png&from=appmsg)

式中：e表示误差函数；dij表示第i个样本输出层第j个神经元的期望输出；yij表示相应的实际输出。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaeBvIFRM8qmdtYwz2K9qOVoibiajtsxtLPc7RicqmIIicopLHomkdS8oIJQ/640?wx_fmt=png&from=appmsg)

式中：k为迭代次数；xk表示权重和偏置构成的一维向量；I为单位矩阵；μk表示组合系数；e(xk)表示误差函数；J(xk)为雅可比(Jacobian)矩阵，表示e(xk)对xk求一阶偏导数所构成的矩阵。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaiaf2ib6jrDWWehgZF9fATOl0oZw7BTCGSkia39OzBqge8448ph2GXmvYA/640?wx_fmt=png&from=appmsg)

式中：F为损失函数；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaQBibvUBEarfZmW0PfJWV64enibLH42yRGGqW3W14oweTIHlUMYjoNHmQ/640?wx_fmt=png&from=appmsg)

，表示网络权重平方和均值，α、β为比例系数，N为总权重个数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla18ex1rdLAbU8qShlickuYIuyvnrThhgP4A0KibGSmPqJVLYTwAVTkPeA/640?wx_fmt=png&from=appmsg)

式中：D表示训练集；M表示神经网络结构；P(x|D,α,β,M)表示权重x的后验概率；P(D|x,β,M)表示训练集D的概率密度；P(x|α,M)表示权重x的先验密度；P(D|α,β,M)表示训练集D的边缘概率，为归一化因子。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlahAMzQcvxVpp7rCBw715mtFkFdHafWbUrOPJ5ibC9vnsQNQyAgpMDYsQ/640?wx_fmt=png&from=appmsg)

式中：α\*和β\*表示α和β的最优取值；γ表示有效参数的数目；H为海森(Hessian)矩阵，通过高斯–牛顿法做近似计算；I表示单位矩阵。

本文将70%的样本设置为训练集，另外15%的样本设置为验证集，剩余15%的样本设置为验证集。

根据式（11），设定隐层的神经元个数为8。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla9fg78FulZ46kCaWBA7vgqlfmiccnbDvy8Xuk0dqsu3LE4NsQ1zKibmcg/640?wx_fmt=png&from=appmsg)

式中：Nh表示隐层神经元的个数；Ni表示输入层神经元的个数；No表示输出层神经元的个数；a为经验常数，取值范围为1~10。

3.2参数拟合

3.2.1跨导系数

将前文参数测量中所得到的转移特性曲线对栅源极电压ugs进行求导即可得到跨导系数gf。 跨导系数gf可以看作关于结温Tj和栅源极电压ugs的函数，即gf=f(Tj,ugs)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdla3CVkwORDp1zA5NmkicIAzUquHcctPicetLmSuMhvzv7zGIRgOdBMeBicg/640?wx_fmt=png&from=appmsg)

跨导系数gf多项式拟合曲线与BP人工神经网络拟合曲线对比如图17所示，可见BP人工神经网络在样本点边界处的拟合精度更高，以统计学中误差平方和SSE(值越接近0，拟合精度越高)、确定系数R-square(值越接近1，拟合精度越高)和测试集中均方误差MSE(值越接近0，泛化能力越好)作为拟合性能指标，如表5所示，其中第1栏中的数字代表多项式中最高次项的次数，后同。跨导系数gf的BP人工神经网络拟合结果如图18所示，可知跨导系数gf随温度升高而增大，呈正温度特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaAB8xVJUnq3gkh1roy10UTWd4BQcAg4JDD4lskt3vibvueWFInwznJOQ/640?wx_fmt=png&from=appmsg)

3.2.2阈值电压

阈值电压Uth可以看作关于结温Tj，即Uth=f(Tj)。对于阈值电压Uth。从拟合结果来看(见图19和表6)，SiC MOSFET器件阈值电压Uth呈现负温度特性，这是由于高温加剧了半导体的本征激发，导致本征载流子浓度增加，从而更快地形成导电沟道。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaTKOuK48YdJnKrBia1xUWksIrYV3Ohg13Xfv61u8rG6cAObzXPrahb7Q/640?wx_fmt=png&from=appmsg)

3.2.3导通电阻

Agilent B1505A功率半导体分析仪不能直接求得SiC MOSFET功率器件的导通电阻，本文通过输出特性曲线中获得SiC MOSFET功率器件的导通电阻Ron，并将器件导通电阻Ron看作关于漏极电流id、结温Tj以及栅源极电压ugs的函数，即Ron=f(id,Tj,ugs)。为了方便作图，本文展示的为ugs=20 V时的拟合结果，如图20和表7所示。可看出导通电阻Ron呈正温度特性，随着温度上升，漂移层和JEFT区的电阻率上升，为正温度系数。另外，导电沟道的反型层中电子迁移率降低，而沟道电阻与电子迁移率成反比，即为正温度系数，故导通电阻整体呈正温度特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaBlEuzOialGSziatGib0ONg4quZQbmT7us8QBaqkkHJraHq26WqbkCCAnQ/640?wx_fmt=png&from=appmsg)

3.2.4体二极管

将SiC MOSFET功率器件内部的体二极管的伏安特性曲线看作关于结温Tj的函数，即uds=f(Tj,id)，使用BP人工神经网络进行拟合，其拟合结果如图21和表8所示，呈负温度特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaqIGCgYKcFtGUuIbl9k8W6ZPicd40AzQdEIJlKxqiaSEbVicAoqOjsWmXA/640?wx_fmt=png&from=appmsg)

3.2.5寄生电容

将SiC MOSFET功率器件的输入电容Ciss、输出电容Coss、转移电容Crss均看作关于漏源极电压uds的函数，即寄生电容C\=f(uds)。文献\[26\]提出将输入电容Ciss看作常数，对输出电容Coss、转移电容Crss使用式(12)进行拟合，其与BP神经网络拟合曲线的比较如图22和表9所示。可知BP神经网络有更优的拟合性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaraibt4rxoE7Dt467N1pRIiciaLg3e78tQdAvbWBiceic425eMNEL5JNsBUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskSIgbLRngqNAsaA5vARdlaicdOaxPqoOYkk1ZDfGyLnmjpOWznlFHBSXnCchz6G0sRObM46nomEzg/640?wx_fmt=png&from=appmsg)

式中：K和η为待拟合参数；C0表示漏源极电压uds=0V时的电容值。

4. 结论

1）本文首先提出了一种SiC MOSFET功率器件模型，其考虑了封装引脚寄生电感、器件内部寄生电容、体二极管，并将导电沟道部分根据开关过程的不同阶段等效为不同电路元件，该模型可用于进行SiC MOSFET功率器件开关过程分析。

2）利用功率器件分析仪Aligent B1505 A和矢量网络分析仪(VNA)对SiC MOSFET功率器件的特性参数进行较为全面的测量，结果表明除封装引脚寄生电感和内部寄生电容以外，其余特性参数均受结温影响较大。

3）此外，针对目前文献中对特性参数处理方法的不足，提出使用基于贝叶斯正则化的BP人工神经网络对特性参数进行拟合，其拟合结果具有更高的精确度和泛化能力。本文为SiC MOSFET功率器件的建模与参数分析提供了新的思路，并且对器件选型以及高频电路设计具有一定的指导意义。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)