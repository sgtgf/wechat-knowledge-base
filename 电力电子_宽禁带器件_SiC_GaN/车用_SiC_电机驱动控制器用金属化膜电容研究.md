# 车用 SiC 电机驱动控制器用金属化膜电容研究


> 原文地址: [https://mp.weixin.qq.com/s/xp0nckipyzvo5lsDRSM7yg](https://mp.weixin.qq.com/s/xp0nckipyzvo5lsDRSM7yg)

**文章来源：**中国电机工程学报

**作者：**李晔 1，范涛 1,2\*，李琦 1,2，邰翔 1，温旭辉 1,2，蓝福武 3，陈渊伟3(1．中国科学院电工研究所；2．中国科学院大学；3．厦门法拉电子股份有限公司)

**摘要：**当功率模块使用碳化硅(silicon carbide，SiC)电子器件，其体积已大幅缩小，为实现控制器的高功率密度，需降低电容器体积。该文首先建立电容器设计参数和电机驱动控制器需求之间的函数关系，从理论层面指出电容器的设计要求。通过集成水冷散热器的封装结构，降低电容器热阻，从而进一步提升电容器吸收波纹电流的能力。通过仿真验证表明，在相同损耗下，优化电容器平均温度较普通封装电容器平均温度下降 30.7%。制造样件并测试，优化后电容器在相同损耗下较普通电容器热阻下降了 72.4%；吸收纹波能力从180Arms 提升到 398Arms，纹波电流提升了 2.2 倍。改进使电容器具有较高的纹波电流提供能力，有效减少了电容器的体积，实现了SiC 控制器功率密度提升及高频特性的要求。

**关键词：**碳化硅；金属化薄膜电容器；纹波电流；高功率密度；热仿真

**0 引言**

碳化硅(silicon carbide，SiC)电力电子器件由于具有高温、高频、高压的工作能力，在电动汽车方面获得了广泛的应用。电容器和功率模块是车用电机驱动控制器体积占比前两位的系统组件，直接影响控制器体积和寿命。当功率模块从 Si 基 IGBT升级到 SiC 基 MOSFET 时，其体积已大幅度缩小，更加凸显了电容器对电机驱动控制器功率密度提升的阻碍。同时 SiC 器件的开关速度快，电压电流的上升/下降时间仅为几十ns 量级，使电容纹波电流的高频成分增加，对电容器的高频特性也提出了较高要求。电容器高频工作时，由于绝缘介质介电系数减小，使电容量减小，损耗增大，同时影响电容器的分布参数。由于金属化膜电容良好的性能、较好的纹波电流吸收能力、不存在污染等好处，与电解电容相比更适合用在车用电机驱动系统上。

金属化膜电容器的体积由容值决定，并受薄膜厚度、电容率等原材料属性及电容器工艺的影响。同时，在高温条件下，金属化薄膜击穿场强会明显的降低，电容的寿命也将明显减少。

金属化薄膜电容器最早于 1940 年左右出现在德国，采用的是纸质电容器，应用于中低压产品，后经过金属化 PP 膜到金属化薄膜电容。对金属化薄膜电容的研究主要围绕材料、电气模型和热模型进行研究，尤其是高温、高频条件下的应用使得金属化膜电容的电热耦合研究更为迫切。文献对金属化膜电容热计算的基本概念、理论依据及检验参数进行了介绍。文献对薄膜电容的损耗建立了模型进行简化估算。文献对不同类型薄膜电容金属膜的等效串联电阻 (equivalent seriesresistance，ESR)进行计算，为损耗分析提供了理论基础，同时指出薄膜电容中的热传导路径和电流传导路径是不同的。文献对薄膜电容的电极进行了优化，来寻求高的可靠性。文献研究了电容温度在交流频率条件下的影响因素，模拟计算了单次放电能量、单次放电最大温升、稳态表明最大温升、内部温升和元件高度对内、外温升的作用。王子建等基于 ANSYS 软件建立了高压自愈式电容器三维温度场仿真模型，并通过实验验证了仿真模型的可靠性，同时指出从减小整体损耗的角度考虑，可以对聚丙烯膜宽选较低值，膜厚可选较高值。目前关于金属化薄膜电容主要集中于对电容整体及电容芯子单体进行计算，并未将电容器与控制器进行联系分析。本文首先建立电容器设计参数和电机驱动控制器需求之间的函数关系，从理论层面指明电容器优化设计的目标。根据优化结论目标获得匹配 SiC 控制器用高功率密度电容，对电容器结构进行优化设计、制造样件，通过数值仿真及实物测试验证优化方案的可行性。

**1 电容器设计计算**

**1.1 电容器参数设计需求**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsBRsOMz3dVkp9ibGFsYrENBiav2yGgJZZqw75E8uKwEGeupjcvuuaBjyw/640?wx_fmt=png&from=appmsg)

电容器容值需要根据电机驱动控制器的性能要求在设计阶段进行选择。电容器的设计与所需要匹配的电机驱动控制器有直接联系，确定电容器参数和电机驱动控制器系统级参数之间的函数关系，对于最高限度实现电容器的功能有重要意义。电机驱动控制器的电力电子拓扑和等效电路如图 1 所示，由图可知电容器和功率模块的连接关系。根据线性电路理论和电力电子学理论，可将该系统的动静态响应看作由动力电池构成的电压源和由电机三相绕组构成的电流源共同作用的结果，其中系统的动态特性主要由电流源决定，因此应用叠加原理对该拓扑进行简化，得到如图 2 所示的等效电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvshI1ysMk81ootRZ1dKicmqzfe2W8OdOaNHOK8jia2JJ29mWlnhEPTJklQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvstxBHzy612nC45oQ6atGOGvaSQU5UGyl47iaftOd3meLsIZdiaFWZu3mA/640?wx_fmt=png&from=appmsg)  

流入电容的电流在其两端产生了电压波动。电容器作用为：吸收逆变器输入电流中的纹波电流组份；平抑电容器两端的电压跳变。电容器关键设计参数为容值、额定纹波电流和杂散电感。通过对电容器作用的机理分析，对图 1 拓扑进行分析得到式(2)—(5)，可以获得电容器参数的设计需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvs3PrVPhTWL1o6Xicnz7icNfO2CY9uqZTvuFqdjaIXWwIlEZpb6LA08Hag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsmNFdX4Sz2EBjYhNfpkzzdibo3T8zcpNGtj2wUSXCImpFUEnj1fExICQ/640?wx_fmt=png&from=appmsg)

通过式(2)可知，iinv 中开关频次的高频谐波尽量多进入电容支路而非进入电池支路，需要容值使电容支路阻抗足够小；如式(3)可知，容值要足够大，使电容支路电流中的周期和非周期分量引起的电压波动满足电能质量要求。

对于额定纹波电流要足够大使得进入电容器的纹波电流产生的温升满足电容器的许用温升要求，从而保证电容器寿命和性能，如式(4)所示。

杂散电感要够小，使功率器件开关动作引起的电压过冲不超过器件耐压要求，如式(5)所示。

电容器设计的主要参数：容值、许用纹波电流和杂散电感。通过以上对电容器作用机理的分析可以获得电容器 3 个参数的需求：存在一个最小电容值，使得电容端电压(即母线电压)波动满足电能质量要求；存在一个许用纹波电流最小值，使得进入电容器的纹波电流产生的温升满足电容器的许用温升要求，从而保证电容器寿命和性能；存在一个杂散电感最大值，使得功率器件开关动作引起的电压过冲不超过器件耐压要求。这些系统级和元器件级参数的关联关系为电容器的优化设计指明了方向，同时也减轻了面向电容容量密度优化设计的压力。

**1.2 电容器参数设计计算**

目前国内电动汽车控制器采用的电容器容值往往大于根据式(2)和(3)计算出的结果，主要是因为电容器需要满足吸收控制器输入纹波电流的要求，如式(6)所示。行业中通常用 C/I 值(用 kC表示)表征电容器提供纹波电流的能力。对于常规的薄膜电容器 kC在 3~7F/Arms 范围内。对于电容器吸收纹波电流的参数设计也转化为电容器的容值要求，即当前电容器的主要问题是纹波电流吸收能力不足，限制了系统工程师选用更小容值(从而更小体积)的电容器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvswuVSsZdf0icf2rs3eiaXhicBrxWyOxJfdB3QrKPoibOt9hDJtJYs0rxciaw/640?wx_fmt=png&from=appmsg)

Rth 为电容器热阻。根据对该式的分析，得到了提升电容器吸收纹波能力的 3 种技术手段：通过新材料研发，提升电容芯子最高耐温；通过电容器优化设计降低电容器 ESR；通过新型电容器结构和封装设计降低电容器热阻。本文选择第 3 种技术途径，采用一种改进电容器封装结构，通过铝制壳体的采用和集成模块水冷散热器降低了电容器内部热点到环境的等效热阻，如图 3 所示。图 4 为典型的模块冷却用 pinfin 散热器，改进结构电容与模块共用此冷却结构。![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsyXRcMYicldPiaXVgibOMMHn1Iv6FIciaAO5Oe3C7xZfvZ0E1yj6TOwEiaicw/640?wx_fmt=png&from=appmsg)  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsOvfxR7Jv2QCLXslncvjAD4MgVYaQdOyQHhfKWRSiaYTwrpkPAQ40oUQ/640?wx_fmt=png&from=appmsg)

**3 仿真验证**

本文通过仿真软件建立了普通封装电容器与改进封装电容器的物理模型，通过电容器的热仿真考核在相同电容芯子发热量、相同环境温度下 2 种电容的温度分布，以用来评估改进方案的优化效果。建立了包含电容及母排、散热器的模型。为减少网格数量和计算时间，将母排正负极板之间的绝缘膜忽略，同时忽略母排与电容连接处的结构。采用 CFDesign 软件进行仿真，选用两方程湍流模型进行计算，忽略辐射换热。电容器损耗为 2.98W，环境温度为25℃，改进电容器冷却介质为水，入水温度为 25℃，体积流量为 0.33m3/h，出口压力设为0KPa。实验结果如图 5、6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsrkDtFtX705pqGRmiaOCuh79z34myOnUthbTSxVmn8koY6KqNc4WMVrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsFJB9EVAMYBiaggNCUib80ia5q4YOpu8313YBzUich6EQM5Jtcb87kQLiaibQ/640?wx_fmt=png&from=appmsg)

通过仿真发现，在相同损耗下，改进电容器平均温度较普通封装电容器平均温度下降 30.7%，电容器热阻(以仿真结果中芯子最高温度为计算基准)下降了 54.5%，可以看出，改进电容结构较普通封装结构，电容器的功率密度有很大提升。

**4 实验**

**4.1 实验系统及测试工况**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsTKmdwHHfzzTdLxx1QywEibbO2Lf093zwoyiaCFZ8AWqjdZibe9PEiappnQ/640?wx_fmt=png&from=appmsg)

本文通过数值仿真的验证证明了方案的可实施性，因此试制了电容器，容值 700F@100Hz，耐压 450Vdc，允许最大纹波电流有效值 180A(持续电流@20kHz，环境温度  85℃，无水冷)，如图 7所示。为了测试改进电容结构对于电容性能提升的效果，建立了图 8 所示的实验系统。实验系统包括测试电容器、高频电流装置、恒温水循环系统、温度采集系统、流量计。高频电流为电容器提供电流，电容器发热产生损耗，恒温循环系统为电容器提供稳定的冷却循环水，流量计用于测量冷却水流量，温度采集系统用于记录埋布于电容芯子间的温度传感器温度，其中温度传感器使用 Pt1000 热敏电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsOk2hAeTyQnukNSVbvGzicfFnS1LdkQ74WkxbHIdDib7nBrmzicCRGzx2g/640?wx_fmt=png&from=appmsg)

实验工况如表 1 所示，表中：I 为实验中输入电容器的纹波电流有效值；Tair 为实验环境温度；Twater 为冷却水温度；Qwater 为冷却水流量。工况 1为传统电容器封装后在自然冷却条件下运行，工况2、3 为在原有基础上改进电容结构，集成模块水冷系统，与模块共用散热器。实验通过监测电容芯子的温度值，在电容芯子允许最高耐温的条件下，测试改进电容性能提升的效果。测试电容器内部包含 8 个电容芯子单体分别编号为 1—8 号电容芯子，电容芯子分两列布置每列 4个电容芯子，在每个电容芯子上布置 6 个温度传感器，实验结果采用测试的 6 个温度点的温度平均值。如图 9 所示 1 号芯子 6 个热传感器埋布位置：1-1、1-2、1-3、1-4 号位于电容芯子高度的中心位置，在圆周方向布置，每 90布置一个热电阻，1-5、1-6号传感器位于芯子的正负极出线处，其他电容芯子布置与 1 号芯子相同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvs7Mn0xJldIM2qTYGwM2ZXcIrzGn6RUn3ISDP8WqWzA3iavgsI7Jicia0XA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsRqmiaOwWgqSMIGMj3JRHRMicI36C9Ouw8kbz23qibfT9uEHnYPNaJwWnw/640?wx_fmt=png&from=appmsg)

**4.2 实验结果分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvssgiaenlhteoe8gcicQZDxBibKzRarhgCcbyCBsvEZGNyKyuiaAs0TEJibDA/640?wx_fmt=png&from=appmsg)

工况 1 和工况 2 输入电容器的纹波电流有效值相同，电容器产生的损耗相同分别采用自然冷却方式和水冷方式对电容进行散热，在稳态情况下得到每个芯子的平均温度如图 10 所示。实验结果表明：电容芯子内部每个芯子平均温度不同，芯子温度最热点存在于靠近在正负极接线柱处的芯子(即芯子6、7)处；工况 2(水冷方式)较工况 1(自然冷却方式)电容温度有明显降低。由于测试温度采集点较多，为方便进行数据对比，采用受干扰较少的 1 号芯子编号 1-1 的热敏电阻测试值进行对比及实验过程中芯子最高温度值进行分析，结果见表 2。通过对比可知，以最高温度计算热阻对比，采用水冷方式较自然冷却方式，热阻降低了 72.4%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvscFQkQWCo0E4H1rzePBLHqAhpCgM5omDcxUe2u3fHorpDXvQUN27sDA/640?wx_fmt=png&from=appmsg)

以 1 号芯子编号 1-1 的热敏电阻测试温度为基准，采用自然冷却方式和水冷方式调整电流值，使两种工况 1-1 号热敏电阻阻值(稳态温度)基本相同，结果见表 3。根据测试结果，电容器吸收纹波能力从 180Arms 提升到 398Arms，水冷较自然冷却纹波电流提升了 2.2 倍，kC从 3.89F/Arms 降低到1.76F/Arms。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsHNmgyuLCNxz9q1Lw4JCTb1kVQoEAtWGv63CN6Pyfce3LqsSZKbldtQ/640?wx_fmt=png&from=appmsg)

将本文试制电容器与国内外多家电容器供应商的典型产品性能参数进行对比，如表 4 所示。可以看出，本文试制电容具有最高的 C/I 值，即最高的纹波电流提供能力，比容量普遍低于对比产品，这是由于该电容器采用了具有抗振动冲击能力的带有加强筋结构的金属材质壳体，同时带有安装孔位。体积因此大于常规产品的塑料壳体。但这种设计不再需要在电容器外再增加一重控制器壳体的保护，兼具了控制器壳体的功能，体现了结构复用的设计理念。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvsBOoB7CZZZWGb3MZDGNFtjLTzsQF2oURkNpViaTcdqBMNKPE4pLLqr4A/640?wx_fmt=png&from=appmsg)

**5 结论**

为实现 SiC 控制器整体的高功率密度，功率模块从 Si 基 IGBT 升级到 SiC 基 MOSFET 时，其体积已大幅度缩小，因此降低电容器体积成为一个迫切的问题。同时 SiC 器件的开关速度快，对电容器的高频特性也提出了较高要求。本文通过建立电容器基本设计参数(容值、许用纹波电流和杂散电感)和电机驱动 SiC 控制器需求之间的函数关系，从理论层面指明了电容器设计要求。电容器设计需满足：许用纹波电流最小值需使进入电容器的纹波电流产生的温升满足电容器的许用温升要求；杂散电感最大值，使功率器件开关动作引起的电压过冲不超过器件耐压要求。

当前 SiC 控制器中电容器的主要问题是纹波电流吸收能力不足，限制了电容器的体积。通过集成水冷散热器的封装结构，降低电容器内部热点到环境的等效热阻，进而提高电容器的吸收波纹电流的能力。对改进方案进行了数值仿真，在相同损耗下，改进电容器平均温度较普通封装电容器平均温度下降 30.7%，证明了方案的可行性。

制造与 SiC 模块共用冷却系统的电容样件并进行测试。结果表明，改进封装电容器在相同损耗下较普通电容器热阻下降了 72.4%；吸收纹波能力从180Arms 提升到 398Arms，纹波电流提升了 2.2 倍。与国内外多家电容器供应商的典型产品性能参数进行对比，改进电容器具有较高的纹波电流提供能力。通过测试同时还发现，电容芯子不同的位置温度分布存在差异，为以后优化电容器芯子内部排布提供思路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskKncSVKlmnLq3gLTicUsxvshgicPiaEfkdGicSQQ6jy8fQ0bB7cntXmOQibxv6svZXy5PDwYHmE8INWyQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqb8Po3qdBDOEjHEmo3DibcFdSeQxPepq4CgmLpeSttlMicicb3ru8mu738A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)