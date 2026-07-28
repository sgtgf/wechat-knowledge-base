# eVTOL 电机驱动器的散热优化设计

原创 胡文婧 , 郝振洋 SiC碳化硅MOS管及功率模块的应用 2026-02-05 00:44 广东

> 原文地址: [https://mp.weixin.qq.com/s/Oe\_UutDqMcJxT9t-EsGWpw](https://mp.weixin.qq.com/s/Oe_UutDqMcJxT9t-EsGWpw)

文章来源：微特电机 

作者：胡文婧,郝振洋,景新元(南京航空航天大学自动化学院,南京211106)  

摘要:针对高功率密度电动垂直起降飞行器(eVTOL)驱动系统在复杂运行工况下的散热问题,本文提出了一种基于粒子群算法的散热器优化设计方法,构建了热阻和质量的多目标优化模型,从而确定了散热器的最佳结构参数。通过ANSYS Fluent有限元热仿真和功率为120kW的试验平台模拟电动垂直起降飞行器实际工况,仿真与试验结果表明,在不同工况下,驱动器内SiC模块的实测温度均在150℃以下,且功率密度达到20kW/kg,验证了所提出的散热优化方法的可行性和有效性。  

关键词:eVTOL;高功率密度;粒子群算法;散热优化

0. 引言  

电动垂直起降飞行器(eVTOL)作为新型低空交通工具,在未来城市空中交通(UAM)中具有重要应用前景。为提升其续航能力与有效载荷,eVTOL的电驱动系统必须在有限质量内实现高功率输出,即高功率密度。然而,高功率密度的实现会导致驱动器散热空间受限,内部功率模块的热应力加剧。研究表明,在功率模块的故障原因中,温度占 比高达55%。此外,由于 eVTOL包括巡航、垂直起飞、应急等多个飞行工况,各工况的动力需求不同,热负荷差异显著,传统散热方法难以兼顾高功率密度及多工况散热需求。因此,针对散热结构开展优化设计,是eVTOL电驱动系统当前亟待解决的问题。  

目前,国内外学者提出了多种散热结构优化方法。文献\[5\]采用多目标遗传算法和多目标粒子群优化算法获得了散热器的非劣解,结合逼近理想解排序法确定了最优解,并通过三维数值模拟验证了优化设计的有效性。文献\[6\]在强制空气对流条件下,对板翅式散热器进行了单参数和多参数优化研究,优化后的散热器在压降和热阻方面均表现出显著提升。文献\[7\]针对电动汽车电机控制器的多交叉肋片散热器开展多目标优化设计研究,以芯片温升最小化和散热器质量最轻化为目标,构建了多目标优化模型。实验结果表明,优化后的散热器在有效控制温升的同时显著降低了质量,实现了散热性能与轻量化的平衡。文献\[8\]提出了一种基于模拟 退火算法的三维集成电路水冷散热网络优化方法,旨在解决其在高功率密度下的散热问题。文献\[9\]采用正交实验设计的方法,系统性地研究了平直翅片热管散热器的结构参数对其传热性能和阻力特性的影响,并确定了在不同评价指标下的最优结构方案。文献\[10\]针对高功率密度电机驱动器的散热需求,采用遗传算法对散热器结构进行优化设计,并通过仿真与实验验证了该方案在提升散热性能方面 的效果。

本文以某型 eVTOL电机驱动器为研究对象,结合损耗计算与热阻网络模型推导出满足散热性能的热阻约束条件。以热阻和散热器质量为优化目标,本文基于粒子群算法提出了满足高功率密度及多工况散热需求的散热器优化方法,并通过仿真与试验进行验证,为eVTOL电机驱动器的热管理提供了可靠的技术支持。  

1.损耗计算及热阻网络模型  

1.1功率模块的损耗计算  

eVTOL电机驱动器的主要热源为功率电路的SiC功率模块。为准确评估驱动器的热性能,计算SiC功率模块的损耗,主要包括导通损耗、开关损耗和二极管损耗。  

(1)导通损耗 

在SVPWM调制策略下,桥臂上下桥臂互补导通。假设三相电流幅值相同、仅相位不同且正负半周完全对称,则三相全桥逆变器的6个开关管导通损耗相等。据此可通过分析单个开关管在半个电流周期内的损耗特性,推导出总导通损耗 Pon表达式如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMVMYSj7VMGI1g50XkKwwPmoYibA63gjlpNWKUSVuCzA2ME9RTXBg3wcO8KJLlrT2icWS8Erbg9MZL4GydpOg2nFp1lqEdTIZf3k/640?wx_fmt=png&from=appmsg)

式中:uds为漏源极电压;T为相电流周期;id为漏极电流。  

(2)开关损耗 

为准确量化开关损耗,采用双脉冲测试法对器件动态特性进行测定。将测试数据导入MATLAB软件进行后处理,所得开关瞬态波形如图 1所示。根据积分区间计算得到器件开通损耗Eon为2.4mJ,关断损耗Eoff为 0.87mJ。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMPiaMXfMF2mibNppSaPCNU70ojsQv2uaenElgZp4OtzFOA8DadFPgARZd0V9X9c41WbojaCwtGiciaYIv0licpe267r1fsjqUBEtH8/640?wx_fmt=png&from=appmsg)

根据所得的开关损耗,计算出SVPWM调制策略下的开关损耗 Psw,表示如下:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOAQlXBu9QBtibibib8fTkABepkhrgqQFZjYTIfTYic7mw7BWLjXmm9alISWy8ibbglyrenE3ND3TLq5lDegy0KoyeknYwRAA8iaLI1E/640?wx_fmt=png&from=appmsg)

式中:开关频率fsw为10kHz;Im为相电流幅值;母线电压UDC为 700V;Inom为测试开关损耗时的电流,即100A;Unom为测试开关损耗时的电压,即 700V。  

(3)二极管损耗  

MOSFET源漏极之间体二极管的损耗主要为2部分:导通损耗Pd\_on和反向恢复损耗 Pr。计算式分别表示如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM59w0axpodibnVkvbson3AH8Iyj9GcpeccIIer5YRibhDkiaAHv6urlWGITOBZICp9DcIhgWm7zgx56vMrUvACkia9oxXVFKXGg6Y/640?wx_fmt=png&from=appmsg)

式中:Usd为体二极管正向导通压降,从产品数据手册中查得为 4.8V;tdead为死区时间,根据实际情况进行设置,此处设置为3μs;Urev为二极管关断时承受的反向电压,等于母线电压 UDC;反向恢复电荷Qrr可由测试曲线得到。  

将 SiC模块参数代入,可计算得到 3种运行工况下驱动器的损耗,具体结果详见表 1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOYHd4m0fpY7krdHALnkLP8UIfrOIpju4ibiciagInxvVrDxwic9gUuXd4eqLbqVYfygf08zMchSsue3vgWmtq49218oYeekkiaVic7s/640?wx_fmt=png&from=appmsg)

1.2热阻网络模型 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMNMFib99ufoTB4rWUhdFoEQOAK1JJ3dVpegvgqxNEns5ChgOAGibWMdU7Pa0QKC8yIf6vgj50cZIZ0B8sA2lYngVLFR0wh8r95k/640?wx_fmt=png&from=appmsg)

图2所示分别为散热器整体及局部结构示意图,散热器热阻Rsa由基板热阻Rsb、基板和空气间的对流热阻Rba、翅片热阻Rbc、翅片与空气间的对流热阻Rca组成。后3部分热阻之和通常用对流热阻Rth,conv表示。

散热器热阻Rsa可通过式(5)计算得到,其中 n表示风道数量表达式如下:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPv1VjlumkQQaM18xdv0F3RO25YVs2VRSYerGrZ59CU2dhxSofBVzbKMUjFjRBPAQjibCicERpibU5cXjlnSLCRum3X4fR8tX0S74/640?wx_fmt=png&from=appmsg)

板热阻Rsb通过式(6)计算得到,其中散热基板材料为铝合金6063,导热系数λ1为236W/(m·℃),A1为导热方向的横截面积,b为基板厚度,其表达式如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMG1UYmJmrufj4cDMMUf0HlHe5JLOD64ibvJpdgHyWibfUzrJQHvL2ILryKZU4PjuSs4vyibAibt65yoybHBFX4EgpI0JMnG4HBBiaY/640?wx_fmt=png&from=appmsg)

对流热阻 Rth,conv的计算公式如式(7)所示,其中空气密度ρair为1.29kg/m³,空气热容Cair为1.005kJ/(kg·℃),进气量为 V。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO3jzqas39UaO2e0sXc9Prr9DY3ndSBMibeBqk49VgyKHbyAhOiaOl9iciank3kia39Sic18fynZWibNuZ51c0YEjiapL9meMUGK9s7icNo/640?wx_fmt=png&from=appmsg)

翅片的有效传热面积 Aeff及翅片散热效率 ηc计算公式分别为式(8)及式(9)。其中 c表示散热翅片高度;s表示相邻散热翅片之间的距离;L表示风道的长度;t表示翅片厚度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMCgjHE5jxGDTkJq9VC9war5icyGAHGyG2ZooiacYAJc4sib7UbQG9AEp3ERPrSmnheWibrpmoYibX8zbq8OjxBA9TEOGDgp8xbpLN0/640?wx_fmt=png&from=appmsg)

平均传热系数h及散热器当量直径dh计算公式分别表示如下:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNOl9aXLc0URmUDXSbfjHdrSib6UWxOGAF4PcaCVdcOia9m4NOYFv4x30556L6APseTWc3fYh9MrC7zSyMAheB8LRYd7pSiagfGu0/640?wx_fmt=png&from=appmsg)

式中:空气热导率λair为 0.03W/(m·℃);努塞尔数Nu为无量纲常数,其表达式与流体状态有关。  

通常通过雷诺数Re来判别流体状态,雷诺数表示如下:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMgoMZLlZxPfAEGkhd8QbLWWHTzd4OkD1XfAWUP7WWYKcvYBZLyv028z2Hqor8jS0VgFNFmmtECqsl185K0cot2BIZgdJOKrHA/640?wx_fmt=png&from=appmsg)

在 23℃的条件下,空气的动力粘性系数μ为1.83×10\-⁵kg/(m·s),流体特征速度 v为10m/s。计算得到雷诺数 Re\=24700\>2300,可判定流体处于湍流状态,湍流下的努塞尔数计算式表示如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMuo7Qlj7ErLzdxjIRxf8ZsXA9Z06MCNtqf1NRWkX2n6s0wvYQgOdbDm5t24yLfpt3Z7pvyHNtA0UzjLuyml8YC5ZGic0zzr7Aw/640?wx_fmt=png&from=appmsg)

式中:普朗特数Pr用于描述流体动量扩散与热扩散的相对关系。在强制风冷条件下,Pr值通常取为0.7,摩擦系数 f\=0.316×Re\-¹/⁴。  

2.散热器优化设计  

2.1粒子群算法原理 

粒子群优化算法 (PSO)借鉴了自然界中鸟群或鱼群等群体行为的规律。在该算法中,每个粒子代表一个潜在解,并依据式(14)和式(15)动态调整其速度和位置,逐步逼近全局最优解。在散热器优化设计过程中,散热性能与质量要求经常是相互冲突的设计目标。采用PSO算法能够优化散热器结构,在满足芯片结温安全阈值的前提下实现散热器质量最小化,从而提升驱动系统的功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOKEiaPmS0fDruADPKo4lOLZNov9jicQvse5xHNr89EvqAafGXA2dUX456C7Q2XyCrGjEDoxysicp1Y1luRheHvZ4KiaoQzB7IaeOg/640?wx_fmt=png&from=appmsg)

式中:w为惯性因子;c1和 c2分别为个体和群体的学习因子;r1和 r2是区间\[0,1\]内的随机数;t表示当前迭代次数;ptbesti为第 i个粒子在t时刻的个体历史最优位置;gtbest为整个群体在t时刻的全局历史最优位置。  

2.2粒子群优化模型 

本文粒子群优化模型以热阻和最小化质量为目标,由式(7)可知,散热器的对流热阻Rth,conv与翅片厚度t,风道数量n及相邻散热翅片之间的距离s相关。故将上述变量作为待优化变量。联立式(7)~式(13)可得散热器对流热阻目标优化函数 F1,表示如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNSU9NrS7KZmzK8scxZMmml24zpsqrHd9vDBhfVOOI4JWYHvenicMRulALH8qmr9hEzlfs6PEd5YuCS0EZq5qmWmjEbu0o2Z15w/640?wx_fmt=png&from=appmsg)

随着驱动器输出功率的升高,模块结温也随之上升。为确保散热性能,SiC功率模块的结温在任何工况下均须严格控制在最大结温以下,故本文将应急工况视为最恶劣工况进行分析。在强迫风冷散热系统中,热传递遵循热路欧姆定律,温升与热阻成正比,表达式如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPpCUy8x3OMqqlUyeXZXNsdKAEuJ9XEmYibrGz3nIqM0ibQ2fpBJJJ8Z3ibelbN57g7tTlibqn97XxAaDKIibZMa6unB204rjZOvDNo/640?wx_fmt=png&from=appmsg)

根据数据手册,芯片到散热器表面的热阻Rjs为 0.1163℃/W,通过式(6)计算得到基板热阻Rsb为1.8×10\-⁴℃/W。在环境温度Ta为23℃,最大结温Tjmax为150℃的条件下,推导出对流热阻Rth,conv需小于0.04℃/W,使得F1<0.04可满足散热性能要求。  

散热翅片尺寸为195mm×40mm,铝合金6063的密度为 2.7g/cm³。因此,散热器质量目标优化函数 F2如式(18)所示。为满足 eVTOL电机驱动器功率密度需求,需最小化散热器质量,即寻找 F2的最小值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQTM1bZ2KQEicPPuSqx2rMyibdh21rVN113rS0PJqysz5sveI3ibdXpHCrAWC3Q4d1EONNIKmMG3FrwiazyMFtMJGLuP766PCjGYc/640?wx_fmt=png&from=appmsg)

在优化过程中,散热器的长度作为待优化变量的上限。同时翅片厚度t不得小于 1mm,以避免因热应力或机械载荷导致的翅片变形。相邻散热翅片之间的间距应大于 1mm,以保证冷却气流的充分流通。综上所述,散热器待优化变量的约束条件表示如下:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOPvboiaibWQWMN24ZRXHOjSlhk8gcK0lSTZ3j8SYYF7O7wGvVx5YEpafdOibs11NExqSUfCDoOTic5AIYeGd3EpI41H7SMIAXNJB8/640?wx_fmt=png&from=appmsg)

在 MATLAB中对目标优化函数 F1及 F2进行寻优,目标函数及待优化变量迭代后的仿真结果如图 3所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMoS39SMv26icTe4WENE1mq4VyGEibDtS2pjibjSjic4fbKMS81icdiaC4Ad4W0VXuictnDS830Z8PW9XvjaKj0Su2hWKQXqtjYw5x15E/640?wx_fmt=png&from=appmsg)

仿真结果表明,粒子群算法在 8次迭代后达到收敛状态,热阻目标函数适应值为0.0396,质量目标函数优化适应值为1389。对应的参数为:翅片厚度 t\=0.001m;风道数量n\=65.535;相邻散热翅片间距 s\=0.003m。为满足实际工程需求,将风道数量n取整为66,最终确定的散热器优化参数为:翅片厚度t\=0.001m;风道数量n\=66;相邻散热翅片间距 s\=0.003m。  

3.驱动器热仿真结果与分析  

本文基于ANSYSFluent对PSO优化散热器进行有限元热仿真,分别模拟了巡航、垂起和应急3种工况下的驱动器热分布特性,从而验证了优化设计方法的可行性,如图4所示。所选用 SiC功率模块的内部结构,上下桥臂分别由8个SiC芯片并联组成,并集成一个热敏电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPaTHicZdNPq2A3uQ6ickWPntLyvds4a3L5eA3mIgeIL7iaejeYOuOzvbpC4sjP4OAGuvd99hToub13RsRSJcfaA0Nl4OeEQyOrjk/640?wx_fmt=png&from=appmsg)

在环境温度 23℃,底部风冷风速10m/s条件下,基于表1设定驱动器总损耗,并得到不同工况下的温度分布云图,如图5~图 7所示。驱动器中的主要热源为3个 SiC功率模块,其内部芯片产生的热量传导至与之紧密接触的散热基板,并通过散热翅片与周围环境进行热交换以实现散热。因此,散热器的高温区域主要分布在SiC模块与基板直接接触的部分,3种工况的散热器最高温度分别为:巡航57.33℃,垂起101.80℃,应急128.39℃。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPjMFB2MwV8JiaIJ5L3rOLLfcnK90julr23DRiaDZgya55MTyQWm8hNDJRf21N6yu3jb2lmgN3aVkV0VyolnqibsibvZb8h7Vibgw1g/640?wx_fmt=png&from=appmsg)

图5~图 7直观地显示了驱动器的温度分布情况,但是无法反映实时温度变化趋势。为定量分析驱动器的热特性,在热仿真模型中选取了3个 温度监测点,如图 8所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNMcklLu7zepgAAtXG8hZicGub94RGeZ6cD7R1bp8Ut0GyVFfEK0noHxFEibvPpRDZNcnJE92kTWQE87vEOIwa3QWDg2ic2PTv8Hg/640?wx_fmt=png&from=appmsg)

  
在仿真过程中,ANSYSFluent实时绘制出监测点温度随时间的变化曲线,得到不同工况下的温升曲线,如图 9~图 11所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPibWJZu51QttHI03dLUZAGFUCF4ibicleSC3BSp8LNlmy8QXfO9HkdxpVdbSgddHF8xLW4bCZVIMvyJJibyRzCYIMZ2ahRVUsXvPA/640?wx_fmt=png&from=appmsg)

各观测点处的温升曲线表明,系统在时间为80s左右达到热平衡状态。表 2汇总了各工况下稳态温度数据。分析结果表明,所有工况下 SiC芯片最高温度均控制在 150℃的安全阈值以下。仿真结果验证了基于粒子群算法优化设计的散热器,在不同工况下均能满足散热性能要求。后续将通过试验进一步验证散热器的实际散热效果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMoTmQzWJiaahcUPFWTKoLgCF760DFtRlmRdq0njv4qz2z50yhdYUAZia2xCuese2UYOQmwPmvvpLQBmgmZp4bsoJibEXwVkrSTp4/640?wx_fmt=png&from=appmsg)

4.驱动器热性能验证试验  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOMQYlHERklfETToXr4gTxITzUe1lU32xs6oR5NGIibIpdyJpAQSHv3z1AyRZEuY8E0M2s3ic71l7QnCRekGepZfDicH4WpKNf1ZM/640?wx_fmt=png&from=appmsg)

为验证散热器的实际散热效果,按照优化参数完成样机制作后,本文开展了驱动器热性能验证试验,如图12所示。本文搭建了模拟实际工况的功率为120kW试验平台,主要由直流电源、电机驱动器、电机、热成像仪、上位机及测试台构成。测试台实时监测转速和转矩参数,验证是否满足各工况要求;热成像仪记录驱动器关键部位的温度场分布;上位机实时采集热敏电阻与散热基板表面的温度数据,同时通过CAN总线向驱动器发送控制指令。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNU5XlPmibQ5WmjUo7DhXQACnUBaoS2ydDuD68icddGY2afXUlLvOByrWontB32RrsR6RcJfIEWNIVMuKu2BuIDSYneOK0zDojSY/640?wx_fmt=png&from=appmsg)

由于SiC模块内部芯片温度无法通过物理接触直接测量,本文通过芯片附近的热敏电阻间接监测其温度变化,并对驱动器的热性能进行验证和评估。环境温度为 23℃,驱动器底部配备散热风扇,通过风速为10m/s的强制风冷实现散热。如表 3所示为 eVTOL电机驱动器典型工况性能参数表。

4.1巡航工况验证试验 

为模拟3种工况的运行特性,本文按照表3对驱 动器进行加载测试,转速转矩如图13所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMWUaxCEBaq7XjKSyJUial9s9ukwr9abdhGbHjseKg9KXvtv2E7fTD4NvWAibVianxWB5ZGic3dntlCIlsjpFx8lYepaowZiaGBUZrw/640?wx_fmt=png&from=appmsg)

电机在时间为70s后达到目标转速900r/min和目标转矩371N·m。随着驱动器负载增加,热敏电阻与散热基板表面温度持续上升,待达到该工况下的额定输出功率40kW后,温度逐渐达到稳定,总耗时200s,如图14所示。此时SiC模块内部热敏电阻的温度稳定在46.8℃,散热基板表面的温度稳定在44.4℃。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMwkdXnwo9ZpIhBxMKvJGbPzeAtVk88II0aic3MVhibOkXEMKEI5vhiaYbVkmia4qiaXoP7CicicY3vVf8ZZZjL4FFCSR3LeleIWdV4oI/640?wx_fmt=png&from=appmsg)

4.2垂起工况验证试验 

设置目标转速为1300r/min,目标转矩为660N·m,转速转矩如图15所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOmyyA6xBT5ILHhJX0fIlN6GwkvtJbpbS1OHxS5Qq4UAYpCdKu2qEND0jftViampPEEibqDVzg1BtFibEwQIZzmB0Ns4oRajpcTD0/640?wx_fmt=png&from=appmsg)

时间为95s后,达到该工况下的额定输出功率100kW,并持续稳定运行时间至140s。此时驱动器尚未达到热平衡状态,如图16所示。温升速率为0.13℃/s,SiC模块内部热敏电阻的最高温度为87.1℃,散热基板表面的最高温度为 65.3℃。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP7M8l9EunjIaa83nWtRwWrXpvaEFkC5HQyNcmFlPicKibqSXTN64lhWz7ic8k0YeVHc0Na8GbWcqAlNwWpibibQVd1aIhL5NDKBpOs/640?wx_fmt=png&from=appmsg)

4.3应急工况验证试验 

设置目标转速为1200r/min,目标转矩为795N·m,转速转矩如图 17所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOTaug0jgaCCKPsLfnSsPUuuGhhTrCbC1smsJmlFibz12Nz4fy0sxRZXVRQ15UbuiaYhVn0wB4awJuZGcljM6qLNS74vCViaFKalc/640?wx_fmt=png&from=appmsg)

时间为90s后,达到该工况下的额定输出功率120kW,并持续稳定运行时间为30s。此时驱动器尚未达到热平衡状态,如图18所示。温升速率为0.42℃/s,SiC模块内部热敏电阻的最高温度为103.9℃,散热基板表面的最高温度为 69.2℃。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMERLFcdPwjB7elOjmKDXFdjica0mDlppURqiaOrGYOHiabo47a4M4N4xfZGpd3SeOeGYT8aKGYzVibOmc1Hicy9rEG2NmV0oPCSQg4/640?wx_fmt=png&from=appmsg)

表4汇总了各工况下的仿真与实测温度数据。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNfZbKDvacg9xrkk4QxicWZPAib0Ys7rP0LXnjJRQfM22qWeqOfaq7NdHeNhhhqiazLI3Sy2sd6KhlcFEHCN3cyMANvolaUG6RJjg/640?wx_fmt=png&from=appmsg)

对比结果表明,除应急工况因运行时间仅为30s,导致传热未达到平衡,实测温度低于仿真值外,其余工况下温度误差均控制在 7℃以内。其中,巡航工况因运行稳定且达到热平衡,消除了瞬态干扰,温度误差缩小至 2℃以内,充分验证了热仿真模型及损耗计算的准确性。试验表明,通过PSO算法优化的散热器不仅将多工况下的SiC芯片温度稳定控制在150℃以 下,同时散热器质量与理论值吻合为1.4kg,使驱动器达到20kW/kg的功率密度。综上 所述,本文所提出的优化方法成功实现了散热与功率密度的协同优化,为 eVTOL电机驱动器的散热设计提供了可靠解决方案。

5.结语  

本文基于粒子群算法提出了一种面向eVTOL电机驱动器的散热优化设计方法。首先,计算了SVPWM调制策略下SiC功率模块的总损耗并建立热阻网络模型,为后续的热阻优化和仿真分析奠定了理论依据。随后,采用PSO算法进行多目标优化设计,获得了满足多工况散热需求的最优散热器参数。最后,通过ANSYSFluent热仿真和加载试验进行验证,优化后的散热器能够有效控制SiC芯片在巡航、垂起及应急工况下的温度均低于150℃,且驱动器的功率密度达到20kW/kg,充分说明了本文所提出的散热优化方法有效解决了eVTOL高功率密 度驱动器在多工况下的散热难题,具有重要的工程实用价值。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViciakK6zIjF5qlcSnF1iavjkjHMxt7kkQL56t2I0VkMMGPHAlYCdcic10UQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViciaeWPoukpPSoodzkAIEebeRqm1uPL6FbiaWJpjkn1uQXDBpck2ibQk5pA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbViczk316DvZLAIY5ODl8oOr06x638bzC5wceE3licVx8yia9wdFO7GB1bnQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmTSJ1ibyXa5h37ucguErbVicbz7NgK7j4g1MCoaClV4h1ic8eof2OicIvGKvhVLkyjc7LGo5V6Q8sWaQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)