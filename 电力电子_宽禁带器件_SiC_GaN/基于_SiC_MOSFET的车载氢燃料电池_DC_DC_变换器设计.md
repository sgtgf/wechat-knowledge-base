# 基于 SiC MOSFET的车载氢燃料电池 DC/DC 变换器设计

原创 刘铭 张文超 SiC碳化硅MOS管及功率模块的应用 2024-11-13 17:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/LgRfxM7I8UBDxv9LlUw8pg](https://mp.weixin.qq.com/s/LgRfxM7I8UBDxv9LlUw8pg)

**文章来源：**电子技术与软件工程

**作者：**刘铭 张文超（中车青岛四方机车车辆股份有限公司 山东省青岛市 266000）

**摘　要：**本文提出了一种以 SiC MOSFET 做为开关器件的氢燃料电池 DC/DC 变换器设计方案。该 DC/DC 变换器方案，采用模块化设计，以应对多组氢燃料电池的电力转化需求。模块采用三相交错并联升压电路拓扑。SiC 器件的应用和电路拓扑的选择设计使得该方案具有大功率、小体积、低损耗和动态响应快等优势，能更好的适应氢燃料电池和轨道交通车辆各种工况。氢能作为一种新能源，发展势头渐盛。轨道交通车辆因其载量大，线路相对固定等特点，更是走在了氢能技术应用的前沿 。而 DC/DC 变换器是氢燃料电池化学能转电能后，实现电压稳定和调节的关键电力转换部件。

**关键词：**SiC 氢燃料电池；DC/DC；交错并联

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdukicNhvsRMgeYseI4dorpZFaPg8iaCnibP52IKhHIW2IEa9epnNfbJaRA/640?wx_fmt=png&from=appmsg)

与传统轨道交通车辆一样，燃料电池车辆也必须具有很强的机动性，以便对不同的路况及时做出相应的反应。为满足机动性的要求，车辆驱动所需功率会有较大的波动，这与燃料电池的输出特性偏软是相矛盾的。

若以燃料电池作为电源直接驱动，会表现为输出特性偏软、输出电压较低，需要在燃料电池与牵引逆变器之间加入 DC/DC 变换器，两者共同组成电源对牵引逆变器供电，从而转换成稳定、可控的直流电源，所以一个高性能的 DC/DC 变换器对燃料电池车辆显得尤为重要。

燃料电池 DC/DC 变换器功率电路有隔离型和非隔离型两种。隔离型可以做到电气绝缘、安全性高，但体积大、成本高。而非隔离型在转换效率、动态响应特性及大功率拓展较隔离型优，因此在做好整车绝缘的基础上，非隔离型是车载 DC/DC 的优选方案。

SiC 功率器件具有导通电阻小、高频特性好、 耐高温等优良特性 ，能显著减少变换器开关损耗，提高系统整体转化效率。鉴于氢燃料电池的输出特性，以及轨道交通的高功率密度要求，本文提出了一种基于 SIC MOSFET 的非隔离型 DC/DC 变换器电路设计方案。

**1\. 系统拓扑**

DC/DC 变换器应用于氢燃料轨道交通车辆，包含 DC/DC 变换器模块、控制器和若干接触器、熔断器等其他电气部件。 DC/DC变换器主要功能是将氢动力系统中氢燃料电池提供的不稳定的直流电压变换成相对稳定的直流电压给氢动力系统中动力电池充电，输出电压跟随动力电池电压变化而相应变化。系统拓扑如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdEqEgnd3ZMQqftrTF6pUVlqjqeltibmJBsYEfVUsibsIFrjFUU1xTmT1Q/640?wx_fmt=png&from=appmsg)

**2\. 设计输入**

本方案功率级别设计为 300kW。燃料电池驱动系统对应三个氢燃料电池模块设计了三个 DC/DC 模块。DC/DC 变换器具体电气设计参数如表 1。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdeNicWpZtaPRV4iaz4q29pcWZoicJT2NasKGD76aMQRAHZ5IQGr0dzZg5g/640?wx_fmt=png&from=appmsg)

**3\. DC/DC变换器原理**

系统电路原理图见图 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdW5iawmXjCBzdnUr4oGt1wjpYYbdAG2qMOx3icsK4sDnBZMiakFg1icQiaibg/640?wx_fmt=png&from=appmsg)

DC/DC 变换器内部设计三个独立的 DC/DC 模块，有三个主电路输入端口，一个主电路输出端口，模块输入端分别对接三个燃料电池的输出，模块输出端并接。DC/DC 模块采用三相交错并联电路，其中 L1 为主电感，L2-L4 为换流电感，此设计通过降低开关器件（VT1-VT3）的开关频率，提升电感的开关频率，大幅度降低了开关器件的开关损耗，减小了电感的设计难度，使得产品体积小、重量轻、噪声低。

DC/DC 变换器在接收到氢储能系统控制器给定电流值和启动命令信号后，将氢燃料电池输出的 DC440V ～ DC680V 的电压升压到 DC970V-DC1320V 的电压来给动力电池充电及给 1500V 母线供电。

DC/DC 变换器通过 CAN 通讯接收车辆控制器给出的命令信号并反馈 DC/DC 变换器的状态信息；DC/DC 变换器在输入端进行限流控制，电流大小响应车辆控制器给出的给定电流；输出端电压跟随母线电压变化。

DC/DC 变换器输入端通过熔断器（FU1、FU2、FU3）与燃料电池相连，在变流器出现极端情况时，熔断器迅速断开，切断 DC/DC 输入端的连接。输出端安装了熔断器（FU4），在负载端出现极端的情况下也可断开与外部电路的连接。

**4\. 控制策略**

DC/DC 变换器整体控制为被动控制，受氢动力系统能量管理控制器 ECUS 的控制。ECUS 通过采集氢动力系统中的数字量和接收车辆控制指令，进行软件运算，通过硬线输出和通信线控制储氢系统、FCU、DC/DC 和动力电池部件提供车辆运行过程中（加速、匀速、制动、停站）所需功率。

DC/DC 变换器在接收到电压信号后，判断电压在正常范围内开始模块预充电工作，完成预充电后进入待机状态，当接收到电流给定信号并有启动信号后启动开始工作，其内部对输入侧进行限电流控制，电流大小响应 ECUS 给出的给定电流，实现对 DC/DC 输入功率的控制；输出电压大小跟随母线电压变化。

每个 DC/DC 模组分别接入一个单独的氢燃料电池，可允许最大 110kW 的输入功率，三个模组输出合并给整车高压直流母线供电或给动力电池充电；模组输入功率由 ECUS 结合实际工况通过控制电流给定来实现，即 DC/DC 接收到 ECUS 的给定电流后控制DC/DC 输入电流与给定电流一致，以满足实际工况功率的需求。

**5\. 关键部件的设计**

三相交错电路的每相电路对称，因此在电路设计参数计算中选择一相即可。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdvOq7NjrMGXpgtkT9PUic7duwDlqbnsISIH0DqicJ8qYtGms52rY9Ruuw/640?wx_fmt=png&from=appmsg)

式中 Uout max ──最大输出电压；

**5.1 主电感的设计**

三相电路共用一个主电感，每相电路中有一个电感值很小的换流电感，相对于主电感，此电感值可以忽略不计，因此主电感 L1的计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdKxxCRpq3MMSKcV1fjltsWefXBSBSzIudwToeLg48jbT3rfrI0xWtmw/640?wx_fmt=png&from=appmsg)

考虑通过电感的电流很大，应适当选择环形铁硅铝磁环。电感的最大峰值电流为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdLRcFgb98o7a1evtFcHE4c0AuSQqicu4RT1MrhWBIjCorBPpEPia0kR7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHd1My4Saz6UsLB3DLjPA2ZXibHZfB87Se3JLGg96mNFudkWjGGrohgvWA/640?wx_fmt=png&from=appmsg)

**5.2 功率开关管的设计计算**

流过功率 MOSFET 的电流有效值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdj7YZDDh1Boc9elgVFSYiczeZceWl0Jicu0KqqACYUeHrLXibs9BT5CEjQ/640?wx_fmt=png&from=appmsg)

**5.3 功率二极管的设计计算**

功率二极管采用 SiC MOSFET 模块的体二极管，流过二极管的电流有效值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdJCStwLsIjammzO81gLOpJNYicO6TQaXH6kEwYicxWsIF7gSOjRSLy7iaA/640?wx_fmt=png&from=appmsg)

**5.4 驱动电路的设计**

驱动电路采用专业集成驱动器。其适用于3300V耐压的开关管。

主要特性如下：

（1）具有短路保护和过电流保护；

（2）门极驱动电流高达 ±15A；

（3）具有供电电源监视和器件自检功能；

（4）开关频率范围从 DC 到大于 100KHz；

（5）占空比从 0 到 100%；

（6）内置 DC/DC 电源变换器。

**6\. 实验结果及其分析**

设计了一台试验样机（三维图见图 3）其基本电气设计参数如表 1。电感电流纹波系数 KL 取 1.3，开关频率 fsw 取值 3kHz，按上述公式计算，主电感取值 900μH\\250A，换流电感取 45μH\\250A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdIIKo4XCysic9lza522IK1vptxFfDrP53SJZZXM7pxU65Jiae0GePe1nA/640?wx_fmt=png&from=appmsg)

SiC MOSFET 选用耐压值为 3300V 器 件，Rds=4mΩ，Coss\=230nF，tr=0.5uS，tf=0.2uS，td(on)=0.9uS，td(off)=1.5uS。

计算各部件的损耗为功率管模块单个 690W，3 个共 2070W；主电感 860W，换流电感单个 220W，三个 660W；二极管 400W。

试验样机通过功率器件的合理布局以及强迫风冷散热使其整体热量分布基本均匀。其中一路主电感由于周边遍布主电感和换流电感等发热量大的功率器件且安装与散热器边缘，因此温升最大达110，但此温度远小于磁芯饱和温度，散热安全合理。其散热仿真分析如图 4。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdQNyibpzZNtyQOlYHQm4oTY11Gk81rbYQ5Tp8KddfYy04dW1j5tEqic3A/640?wx_fmt=png&from=appmsg)

通过测试整机效率峰值可达 97.8%（效率测试对比如图 5），与设计预期相符。相比于普通硅器件开关管 DC/DC 提升 3%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmEZvZDoXW2ywfXuP6rkxHdUjBLcFN4F9QiaPySWbZXcUuia2KOsl4YicVrcZfNuKhJYf6n0VxjdWAoA/640?wx_fmt=png&from=appmsg)

**7\. 结语**

对于轨道交通大功率的需求，非隔离，碳化硅高频化，高集成度的控制方案已经成为未来燃料电池 DC/DC 变换器的发展趋势。而本文设计实例在这几个方面都做了设计考虑和实现。是一种适应未来轨道交通的一种智能化和高功率密度的优选方案。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp&retryload=2)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)