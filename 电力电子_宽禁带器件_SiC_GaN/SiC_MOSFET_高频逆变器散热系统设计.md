# SiC MOSFET 高频逆变器散热系统设计

原创 张宇　张志锋 SiC碳化硅MOS管及功率模块的应用 2025-08-25 11:08 广东

> 原文地址: [https://mp.weixin.qq.com/s/tsB313vFMzUdFWX8ZQXhnA](https://mp.weixin.qq.com/s/tsB313vFMzUdFWX8ZQXhnA)

文章来源：现代驱动与控制

作者：张宇　张志锋（沈阳工业大学（110870））

摘要：针对基于SiC MOSFET的高频逆变器，提出了一种散热系统的实用设计方法，首先对SiC MOSFET进行损耗计算，考虑了驱动电阻、直流母线电压以及电流等对SiC MOSFET损耗的影响，使计算结果较为准确。其次，建立散热系统的热阻模型，计算工作时各点的温度，在此基础上设计了一套强迫风冷系统，并运用FloTHERM热仿真软件进行热仿真。将计算结果与仿真结果进行比较，证明了此设计的合理性。

关键词：SiC MOSFET　损耗计算　热阻　散热系统

近年来，随着SiC材料的发展，第三代宽禁带半导体器件以其优异的性能，正在逐步取代Si基器件，成为功率器件的优先选择。SiC材料与传统Si材料相比，具有击穿场强高、热导率高、饱和电子漂移速率高等特点。因而SiC MOSFET具 有更强的耐压能力和更高的开关频率，适合高频的工作条件。开关频率的提高，可以减少逆变器输出谐波，提高负载的电源质量，降低由谐波给负载带来的损耗，提升系统效率；同时，还可以减小逆变器体积，提高功率密度。但由于开关频率的提高，也会增加损耗，导致温升过高，这就对散热系统提出了更高的要求，需要散热系统有足够的散热能力才能保证器件稳定的工作。

目前，对于功率器件的损耗计算已有部分研究。文献\[4-5\]给出了在SPWM调制下的损耗计算方法，但并未考虑功率器件本身参数特性给损耗带来的影响。文献\[6\]使用PSPICE仿真软件对IGBT的损耗进行计算，主要考虑开关频率和栅极电阻对损耗的影响。

本文采用CREE公司型号C3M0025065D的SiC MOSFET作为高频逆变器功率器件，并设计一套强迫风冷的散热系统，重点考虑驱动电阻、 直流母线电压、通态电流对开关损耗的影响。对功率器件和散热器建立相应的热阻模型，计算工 作时的各点温度，并利用FloTHERM热仿真软件进行仿真验证。

1. 逆变器损耗计算

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx3miaic3Pg6tQOuW54P3nN3BnEZ6xSo9eHsVP6yqiaHDicEibRBgHJZQJyfA/640?wx_fmt=png&from=appmsg)

在三相两电平逆变器中，导线等损耗可以忽略，损耗的主要来源是SiC MOSFET和反并联二极管，其拓扑结构如图1所示。功率器件的损耗可分为开关损耗和通态损耗。  

1.1 MOSFET开关损耗  

功率器件的开关损耗分为开通时的损耗和关断时的损耗，影响开关损耗的因素有开关频率、直流母线电压、漏源极电流以及栅极外部驱动电阻。计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxrShuRbZc9q3tWlA4WGBYQESiauMLb99rcgjj0Qlh8lzYDrv9jWMZa7Q/640?wx_fmt=png&from=appmsg)

其中：  

Psw\_MOS—MOSFET开关损耗；

fs—开关频率；

Eon—MOSFET单次开通时，需要的能量

Eoff—MOSFET单次关断时，需要的能量

Kgon\_M—MOSFET的栅极开通电阻对开关损耗的影响系数；

Kgoff\_M—MOSFET的栅极关断电阻对开关损耗的影响系数；

Kdc\_M—直流母线电压对开关损耗的影响系数；

K I \_M—漏源极电流对开关损耗的影响系数。

1.2 MOSFET通态损耗

 MOSFET的通态损耗与通态电阻、电流、占空比以及结温有关。计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxdHNl8BDbVaQ8uRr09XlKGSWAr4HVbqjWNS0XNO8AXVIzic9UgPCFq6g/640?wx_fmt=png&from=appmsg)

其中：  

Pon\_MOS—MOSFET通态损耗；

UDS(t)—导通时MOSFET的漏源极电压

IDS(t)—导通时MOSFET的漏源极电流；

D(t)—MOSFET的占空比函数；

T—调制波的周期。

当采用SPWM双极性调制方式时，逆变器输出交流电压可以近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxuqicn2aU4EdrPjP68cCWGrhrVHE66Ic9KGlDQUxv0Um81q0Ws6IiaDrA/640?wx_fmt=png&from=appmsg)

其中：  

UM—输出交流电压峰值；

θ—自变量相角。

输出电流可以近似为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxLZCYAibDiaHHxe44uZdFPttQUGibaEbPvD9LJne5glicvuxoyn3F8wGILw/640?wx_fmt=png&from=appmsg)

其中：  

IM—输出电流峰值；

φ—输出电流和输出电压之间的夹角。

占空比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx5CbuDgBW1Q7XicTkaIHIdneiauny5xXVpVgy6q7DdmOibTzic7z1R3ahkw/640?wx_fmt=png&from=appmsg)

把式（3）、式（4）和式（5）代入式（2），得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxgI8kQe6obeV72FPk5voDaJ9TZPR6723KhuHOGgYicoBWMarG3F4ib5MQ/640?wx_fmt=png&from=appmsg)

1.3 二极管开关损耗

二极管的开关损耗计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx1dnwaib6fZ7lmDtrVU9xY1Niakd0ibwCRia1quGv7sicvoPq4fskFFBpCBg/640?wx_fmt=png&from=appmsg)

其中：Qrr—二极管反向恢复电荷；

UDrr—反向恢复期间二极管两端的电压

1.4 二极管通态损耗

二极管通态损耗与二极管导通电压、电流和占空比有关。计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxy74LYibOhboUoXNMS3n663nQeSIWZiaMsBykAYxjcCK68zI4KCAXSt5g/640?wx_fmt=png&from=appmsg)

其中：  

UF(t)—二极管导通时的压降；

IF(t)—续流时流过二极管的电流；

D(t)—占空比。

在实际工程应用中，当二极管进行续流时， 可以将二极管近似等效成一个电压源和二极管导通时的通态电阻串联，公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxfuC4wUNCanRicUicFunyxXiavnGAtc9lCOUJErgnVu1lrMWRU5tZt1ZSg/640?wx_fmt=png&from=appmsg)

其中：  

uD0—二极管导通状态零电流电压；

RD—二极管通态电阻。

当采用SPWM双极性调制方式时，占空比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx6T7aOIB9fXDteCic7npg91SD0S92pvsZtYDBsvFRe5IUIewsdVpREJQ/640?wx_fmt=png&from=appmsg)

把式（10）代入式（9），得：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx5PMbmSwvS3KDNcr9rzmY8yfRgIUu4FKHGFI2u7ibrFGjQdruzy5FgYA/640?wx_fmt=png&from=appmsg)

1.5 总损耗

单个MOSFET总损耗计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxjFkgiaia0jmy49XqyE9UVQHTKk2u3ia7L0VsichI3vsiawfHA3gsrkqmy7g/640?wx_fmt=png&from=appmsg)

逆变器总损耗计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx6iajRiaCMnNuvU9mBVhkKia3mj9eic7zUqfibw5b6a6QfNIDiaFlts2DxoyQ/640?wx_fmt=png&from=appmsg)

1.6 损耗计算结果

本文选用CREE公司的6个SiC MOSFET单管（型号C3M0025065D）作为高频逆变器功率器件。利用上述公式计算SiC MOSFET和反并联二极管的导通损耗和开关损耗时，需要查找数据手册确定相关参数，参数为：Eon=574.6μJ，Eoff\=22.97μJ，Kd c\_M\=0.775，KI\_M=0.836，Rdson\=25mΩ，uD0\=3.5 V，RD\=99mΩ，Qrr\=309nC，UDrr\=310V，直流母线电压Ubus=310V，输出电压有效值Udrsm\=175V，输出电流有效值Idrsm\=28A，SiC MOSFET栅极驱动电阻Ron和Roff为4.7Ω，开关频率fs\=70kHz。将参数代入公式中可得：单个SiC MOSFET开关损耗为12.034W，通态损耗为10.856W，单个并联二极管的开关损耗为1.676W，通态损耗为13.216W， 总损耗为226.692W。

2. 逆变器散热系统设计

温度对半导体器件的可靠性和寿命有重要的影响，温度每升高10 ℃，半导体器件的寿命就会缩短，可靠性大幅下降。故在计算损耗的同时， 也需要建立准确的器件热模型和散热器热模型， 然后根据热模型进行计算，得到各点的温度，结合温度值和实际的工作环境，设计散热方案。

2.1 散热系统热阻模型

综合分析器件以及散热器的热阻模型，将热阻等效为电阻，器件工作产生的损耗等效为电流源，热阻上的温差为电压，等效电路如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxvvT5klNKDV1Y39OiapRpZF5AhfVqibB8iam5MZuiaEVE0zLbYFnWejgcaw/640?wx_fmt=png&from=appmsg)

由于本文采用的SiC MOSFET为TO-247的封装，因此，T j\_M与T j\_D相同，Rt h j c\_M与Rt h j c\_D相同。

2.2 导热界面材料热阻计算

 SiC MOSFET单管与散热器之间涂有一层介质，即导热界面材料（TIM），填充功率器件与散热器之间的空间和气隙，使功率器件与散热器紧密粘合。导热界面材料的热导率应大于空气的热导率，空气的热导率为0.0261W/（m·K）。本文选用的TIM为AOS370，热导率为0.7 W/（m·K）。 使用TIM材料可以减小功率器件与散热器之间的热阻，提高散热能力，减小系统温升。其热阻计算公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxM5gIO6ukYA2soCZlgc9SnF32vrFuezMJwVrWicv5SA8PlH6YJhPgCkw/640?wx_fmt=png&from=appmsg)

其中：  

d—导热界面材料的厚度；

λ—热导率；

A—介质的横截面积。

2.3 散热方案选择

本文选用分立元件作为功率原件，使各原件等间距分布在散热器上。采用铝作为散热器材料，使用铲齿工艺制成，相比于板翅风冷散热器、波纹风冷散热器以及直齿风冷散热器具有较好的散热效果。具体方案如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxftWTdc4wDGrLPPSTZQSaAtG99EdoGeiawxFlDLTkwqlkAmDVsWggnoQ/640?wx_fmt=png&from=appmsg)

当散热系统工作时，空气被散热风扇吸入，直流冲击散热器，在散热器表面，空气流场将以紊流为主，减小热阻，增强系统整体对流换热效果。在安装时，垂直放置散热器，利用相对较轻的气流形成烟囱效应，使散热器热阻相对于水平放置时减小15%~20%。

2.4 散热器热阻计算

本文采用强迫风冷的散热方式，故散热器热阻的计算需要考虑强迫风冷带来的影响，散热器到环境的热阻Rthha的经验计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxpWj8pzn6njbicWFfGWEzIjviaa1HdmBJEITGLITCU4vHESZ2xR4RNorg/640?wx_fmt=png&from=appmsg)

其中：  

k—散热器热导率；

d—散热器基板厚度；

A—散热器表面积；

C1—散热器表面状况和安装状态系数；

C2—强迫风冷条件下散热器的相对热阻 系数；

C3—空气换热系数。

本文选用铲齿式铝合金散热器，热导率为2.01W/（cm·K）；散热器采用垂直安装的方式，则取C1\=0.5；采用风速约为4m/s的轴流散热风扇冷却，则取C2\=0.4；散热器处的空气流场以紊流为主，则取C3\=0.1。

散热器外形尺寸及其它参数如表1和表2所 示。散热系统热阻参数如表3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxFa8tupwfib1LIOS3j3E4PEyqb36L1SbMfcJWBrRrKnWHPALv5XRcicTw/640?wx_fmt=png&from=appmsg)

2.5 散热系统温升计算

建立散热系统的热阻等效电路并计算对应热阻值，可根据如下公式计算散热系统各点对应的温度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxaLGNQJSrNxG8ELyIrf7eS6ibUhzcOIQIMlA7HDmHCOqTK0zIN2GBq1g/640?wx_fmt=png&from=appmsg)

其中：  

PMOS—MOS管总损耗，包括开关损耗和通态损耗；

PDiode—反并联二极管总损耗；

Ptot\_M—单个MOSFET的总损耗。

由以上数据可以计算出散热系统各点温度， 如表4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxtVbNwVaX1kuxeUHLKziaobRy5gInoUzmPJCDho2pfvG1VRibicTWLibEQw/640?wx_fmt=png&from=appmsg)

3\. FloTHERM热仿真

使用FloTHERM软件对逆变器功率器件进行仿真分析，在电子散热领域占有率较高。相比于Icepak和6SigmaET，FloTHERM模型建立比较方便，效率较高，网格划分以自动化为主，鲁棒性较好，仿真结果与网格相关性较小，便于实际应用。

3.1 散热器建模

使用Smartpart进行建模，选用铲齿式铝板散热器，如图3所示。散热器应用铲齿工艺制成，相邻齿之间间隔相等，适合在风冷散热条件下解决功率器件的散热问题，较插片散热器可提升8%~15%的散热效能。采用模块体模拟SiC  MOSFET作为热源，并将其紧贴在散热器上，将块体与散热器的接触面设置为所使用的导热界面材料，并设置导热系数。其散热器系统仿真模型，如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx8PXfMdVTHOveZ5eTibxvVjOicIheGw36R6d5UT7ic49xicXhwjibZNz6RPQ/640?wx_fmt=png&from=appmsg)

3.2 仿真分析

由图5所示的残差曲线可知，残差曲线收敛， 则散热系统稳定，由功率器件产生的热量可以迅速地传递到系统外部，散热系统能够正常、稳定地工作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxibdm59nNXAy0HB57ylic7ibNIKpfVoicv2wCOKklicbKEUffEDHD95X4RFQ/640?wx_fmt=png&from=appmsg)

散热系统各监控点温度，如图6和图7所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx7BcWZbRRelBPEj8f5VM6oW3WYUnlgkwYYLmn5TPicEFwkdxTjQxCpVA/640?wx_fmt=png&from=appmsg)

当系统稳态时，散热器温度为58.9 ℃；SiC MOSFET结温约为86℃；SiC MOSFET的壳温约为70 ℃。由以上结果可知，散热系统各点计算值与仿真值相比，误差较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxJ46COLjyURo6oEZWcibibWQT8TJNb7cdmH8bqbdrvdQZ0DRcAibcPaBuw/640?wx_fmt=png&from=appmsg)

图8为散热器基板的温度云图，由图8可知， 越靠近中心的SiC MOSFET温度越高，两侧则低于中心。越靠近两侧，离开孔处越近，散热效果越好。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zx5g9RFmb8xCnxicBYwMS1ekEiaq8iabzZbs9YwzdLf2n6ykxib1Dp27InQA/640?wx_fmt=png&from=appmsg)

图9为散热系统气流云图。由图9可知，越靠近风扇，风速越快，风速最高可达4.12 m/s，散热器两侧风速较低。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxLbiaFr1px7rovOETnKYwKn9gVTibibaTWNGI1bmWKpGzglCXJhbxk3T0w/640?wx_fmt=png&from=appmsg)

图10为散热器压力云图。由图10可知，风扇直吹的地方，产生最大压力。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskS3FBqsXgh8BGcWpWXN2zxbfER785RFKYEhTc41ouXtkcB4ibc9GtTflSQOQZRzrgwAqy3ZXBjxAw/640?wx_fmt=png&from=appmsg)

4. 结语

本文对以SiC MOSFET为功率器件的逆变器散热系统进行研究。计算了在逆变器输出电压为175 V，输出电流为28 A，且采用SPWM调制方式时，SiC MOSFET的损耗，并考虑栅极驱动电压、驱动电阻、直流母线电压和输出电流等对SiC  MOSFET损耗的影响，提高了计算结果的精度。 在此基础上，设计了一套风冷散热系统，并考虑了 散热器的安装方式、风冷形式以及空气流动性等对散热器热阻造成的影响。建立系统热阻网络模型，计算各点温度，最后使用热力学仿真软件进行仿真分析，仿真结果表明该设计方法能够满足工程设计要求，具有一定的合理性和可行性。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSkYzuicY0VXBSlOpFQgAEgVbbBRwEQvuFftFpq9dc5c407t1vgGYSqLQ/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSQZ8rItVF549RExeyaASEBHibMAhABuxeLC4Z3zx4qR3u9KoVDzNcnAg/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSrUMibDLoibdQRFTmIlZgtnh7nVfvz2WPF2pHmsgJvb7fm870t8gGqSAg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)