# 全银烧结双面散热 SiC 模块的工艺设计

原创 柯 攀 ，黄 蕾 SiC碳化硅MOS管及功率模块的应用 2024-09-11 12:22 广东

> 原文地址: [https://mp.weixin.qq.com/s/72ZM1YxSRITchdfI5YRgBA](https://mp.weixin.qq.com/s/72ZM1YxSRITchdfI5YRgBA)

**文章来源：**机车电传动

**作者：**柯 攀 1,2，黄 蕾 1,2，杜隆纯 1,2，刘 洋 1,2，曾 亮 1,2，刘 亮 1,2，刘朝瑜 3（1. 湖南国芯半导体科技有限公司；2. 湖南省功率半导体创新中心；3. 武汉恩硕科技有限公司） 

**摘  要：**针对SiC芯片高工作结温、高功率密度和低杂散电感的封装技术要求，设计了一款双面散热SiC模块，仿真其杂散电感和均流性能，模块具有较低电感和较好的均流性。开发了全银烧结工艺和工艺流程，并试制了科研样品。通过动静态测试，在漏源极电流 I d 为 350 A 和比导通电阻 RDS-on 为 3.95 mΩ 下，计算出包含测试电路的总电感 Ls 为 11.2 nH，模块具有较好的静动态性能。试验表明 , 全银烧结双面散热 SiC 模块具有优良的动静态性能，具有较大的应用前景。    

**关键词：**全银烧结；双面散热；SiC 模块；仿真

**0  引言**

SiC MOSFET 因具有损耗低、结温高和功率密度大等特点，将可能会成为下一代新能源汽车主驱首选的功率器件。双面散热在 IGBT 模块中已开始批量应用，可显著提升散热效率和减少系统体积。将 SiCMOSFET 封装成双面散热的形式，能够进一步发挥SiC 芯片的性能。

在传统的功率模块封装中，芯片的互连技术一般采用软钎焊工艺，但随着无铅化要求的提升，焊料需要用无铅焊料，其熔点一般在 250℃以下。根据文献，当焊接材料的同系温度（简称 Thom）大于 0.6 时，容易出现蠕变失效。SiC 芯片的工作结温可以达到 175℃以上，采用无铅焊料时，Thom 达到 0.8 以上，软钎焊的工艺显然不能满足可靠性要求。银烧结技术具有低温连接和高温服役的特点，一般工艺温度在 290 ℃以下，连接后的界面银层熔点为 961 ℃，这样材料的 Thom小于 0.4，具有较高的可靠性。银烧结技术还会带来额外的好处，如烧结银层具有连接强度高、导热性好和导电性好等特点 。

本文将从模块的设计及仿真优化、关键工艺技术的研究、模块的特性测试等几个方面介绍全银烧结 SiC模块的性能。

**1  模块设计与仿真优化**

由于半桥结构的模块具有较高的灵活性，在电驱系统设计中越来越受到青睐。考虑双面散热模块具有功率可扩展性，因此在设计模块电流规格时，需考虑常规功率等级需求，比如 80 kW 左右的电机，一般电压选择 1 200 V，比导通电阻 RDS-on 选择 4 mΩ。本文模块中选用的芯片是罗姆第 4 代芯片，单个芯片比导通电阻 RDS-on 为 12 mΩ，芯片尺寸是 5 mm×5 mm，单桥臂采用 3 个 SiC 芯片并联，这样能够做到单个模块参数规格为 1 200 V 和 4 mΩ。若系统需要更大的功率等级时，可以考虑采用模块并联的方式进行功率拓展，这样这款产品将能覆盖 80~250 kW 功率等级的电驱系统需求。

为了便于系统进行温度监控，模块里封装了可银烧结的温度传感器。该温度传感器是一种 Pt 型的温度传感器，背面金属为 AgPd，可银烧结，正面金属为 AgPt，可键合，能承受的压力高达 30 MPa。SiC MOSFET 自带体二极管续流，无需额外的二极管，进一步减小了芯片面积。模块设计拓扑图如图 1 所示，模块外形如图 2 所示。模块塑封体整体尺寸为 30mm×30 mm×4 mm，采用全银烧结工艺。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYSd2RzZPGubg6Vqo9sbOBbJoko346zQUytNlmc6DVbMfHhCAuicfsJUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJY9r47ENgq3KczOL2S9js48AU6RxA5CpHbWIGlanPXDdbacMdWoCJPwA/640?wx_fmt=png&from=appmsg)

衬板材料有 Si3N4, Al2O3, AlN 等，从可靠性的角度来看，活性金属钎焊（AMB）工艺的衬板可靠性明显高于双面键合铜（DBC）。AMB 衬板的产品一般有Si3N4 AMB 和 AlN AMB，其中 Si3N4 AMB 的可靠性更高，AlN AMB 的传热性更好。随着技术的进步，Si3N4AMB 的传热性与 AlN AMB 相差不多，同时 Si3N4 由于强度高，可以将衬板的厚度做得很薄，可以薄至 0.25mm，但 AlN 材料较脆，衬板一般需要达到 0.63 mm 以上的厚度才能满足使用要求。这样 Si3N4 AMB 衬板整体性能优于 AlN AMB。同时，国内部分企业在 Si3N4衬板的技术方面也取得非常大的进步，成本得到进一步降低，因此 Si3N4 材料用于 SiC 模块的封装，越来越成为一种趋势。表 1 为这几种材料的关键参数对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYAoHYiav98fgjCTwb6uAxgiaaiarq9ExxAqIrKA0H895spVjVLaWMwBBCg/640?wx_fmt=png&from=appmsg)

在芯片正面互联方面，采用金属垫块进行连接，可选用的材料主要有 Cu,AlSiC, MoCu30 合金等材料，表 2 为这 3 种材料的参数。选择垫块材料时，需考虑通流能力、CTE 与芯片衬板的匹配原则等这几方面的要求。材料间应力大小可以按照式 (1) 来进行设计，由于 Cu 材料的 CTE 与芯片的差异较大，Cu 材料不合适用于垫块材料。AlSiC 相对于 MoCu30，电阻率太大，通过仿真显示 AlSiC 的垫块相比于 MoCu30 带来寄生电阻高出 8%，如图 3 所示，可见 MoCu30 合金是较为理想的材料。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJY6NzMIqcF54FvpRqxRlTe0gkeZzzrYbgxLicPjBVenbS8icgFrdRRMBibw/640?wx_fmt=png&from=appmsg)

式中：σ 为材料的应力；E 为材料的弹性模量；αCTE 为热膨胀系数；ΔT 为温度变化值。

模块的杂散电感是模块重要的参数，由于杂散电感的存在，功率器件在关断过程中，会产生电压尖峰，给器件带来较大的电应力。电压尖峰的计算公式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYUUyiapicWIX5XGQAiaF8z75PHEfUezK5cSk4icnElTRIeVuGU97prskktg/640?wx_fmt=png&from=appmsg)

式中：ΔU 为由杂散电感产生的过电压；Lσ 为杂散电感值；di/dt 为电流变化率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYzqRgzm6mUTBUpv43qVGxjYweIfYQQgfjASGC0NDIaw9Sj7ZDhQicINA/640?wx_fmt=png&from=appmsg)

SiC 芯片由于开通关断速度更快，杂散电感的影响就更为明显了，因此，要尽量降低换流回路的杂散电感。

使用 Ansys Q3D Extractor 软件能够非常方便提取电路的杂散参数。具体使用过程是将三维模型以中间文件格式的形式导入 Q3D，芯片采用导体的形式处理，其他材料根据实际材料设置材料参数，设置电流输入和输出端口，设置仿真频率，可仿真出模块的 Lsce 电感。考虑到可制造性，最后设计的模块电感 Lsce 的仿真结果是 7.1 nH，结果见图 4。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYj9FYqgEbN2mqMdHdAsj36hLSFmXoBaIWcGlMb5srt82dgWFWLVNBLw/640?wx_fmt=png&from=appmsg)

芯片并联均流问题也是 SiC 模块中的重要的问题，特别是动态均流。均流特性仿真可以通过 ANSYSSimplorer 联合 Q3D，并结合 Spice 模型来完成。具体实现方法如下：使用 Q3D 软件提取模块参数，建立包含寄生参数的模型；然后在 Simplorer 平台上，搭建双脉冲测试电路；导入 SiC MOSFET 的 Spice 模型，进行双脉冲测试的电路仿真，查看开通过程中的均流性情况。图 5 是双脉冲仿真波形，图 6 是图 5 中的局部放大波形。电流不均衡率定义为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJY8Ur9MR6AGO5p7wLiaX8zOsf9GP8cl5a9OTBKSR9JVB1Uoqk0BvS0CzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYdfRNl8XVfcJzaibzoqgsCrpKlzC9S9FefkJUBgBWTrYgjocQ2FxX53w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYMXhnv6haZEGVctaVXLkUGxdFzcrP0jicqVBR996unFYJC6SxYJbBh5Q/640?wx_fmt=png&from=appmsg)

根据此定义，模块中的动态电流不均衡率为 7.1%，稳态电流不均衡率为 3.5%，模块具有良好的均流性。

**2  关键工艺技术研究**

采用银烧结工艺可提高 SiC 芯片功率密度。功率端子、驱动端子和温度传感器均采用银烧结，在提升通流能力和可靠性的同时，也简化了工艺流程。

银烧结工艺使用的焊料一般有银膏和银膜 2 种。这2 种银烧结材料不同，对应的工艺也不同 。对于银膏来说，工艺流程是“银膏印刷—预热烘烤—芯片贴片—加压烧结”。

印刷工艺除控制印刷参数外，钢网厚度要根据最终需要的烧结银层的厚度（BLT）来设计，另外受BLT 厚度烧结压力和银膏成分影响。印刷工艺基本的工艺参数要求 ：钢网厚度为 50~100 μm，印刷速度为25~100 mm/s，刮刀压力为 (0.1~0.4)×9.8 N/cm。

预热烘烤主要是为了去除有机溶剂，一般在120~140 ℃下烘烤30 min，烘烤后的银膏性能相对稳定，可在常温下存放 2 周。

芯片贴片是将芯片通过贴片机放置在银膏上，要保证芯片与银膏有一定结合力，一般需要施加一定压力和温度，压力为 1~3 MPa，温度为 120~140 ℃。

若采用银膜工艺，一般工艺流程是“芯片转印—芯片贴片—加压烧结”。

芯片转印是指将芯片在银膜上压一下，利用芯片锐利的边缘，在银膜上切出一个相同面积的银膜并粘连到芯片背面。其基本参数要求 \[7\]：贴覆压力为 0.5~1.5MPa，转移时间为 250~750 ms，转移温度为 120~140 ℃。

加压烧结是通过对银膏银膜施加一定的压力和温度，并保持一定时间，让银颗粒发生团聚，形成稳定的连接层。其基本工艺参数 \[7\]：压力为 5~20 MPa，烧结温度为 230~300 ℃，时间为 1~10min，总时间取决于具体设计的热容量。

从以上的银膏和银膜的工艺流程来看，两者是有所差别的，银膏工艺适用性强，但是流程较长；银膜工艺流程简单，但要求贴片的材料要形状方正，边缘锐利等。

本文试制的功率模块，不同平面的连接层有 3 层，分别是下衬板与芯片、芯片与垫块、垫块与上衬板，需要3次烧结。如果采用银膏工艺，则要求3D印刷银膏，这就要求银膏材料具有较好的成型性能。通过对国外的 A 公司和 H 公司的材料进行试验，发现 H 公司的材料的成型特性优于 A 公司，图 7 是银膏在芯片上表面印刷效果，存在较大的银膏溢出风险，边缘坍塌严重，会影响最终的烧结效果，这个工艺不具有足够的生产工艺窗口。当采用银膜工艺时，芯片上垫块的银膜的面积与垫块一样，不存在溢料等问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYiaTAl7flIVjjQmCOwD8iacViaOpsvEU1DGzKqlSWNoIicSg06frIpMEAjA/640?wx_fmt=png&from=appmsg)

通过试验确定了银膏银膜配合运用的工艺方案，流程如图 8 所示。

银烧结工艺中烧结温度、烧结压力和烧结时间形成彼此牵连的三角形关系。为了保证烧结工艺效果，进行了工艺拉偏。表 3 为 9 组试验组合数据。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYRLTR8zias2VtnKBibPRWOtISg6tNMsd8jsPT2QJVYuvuCu7QB98WpI9A/640?wx_fmt=png&from=appmsg)

烧结工艺完成后进行推力测试，结果如图 9 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJY0HWhQstepRvVdw8vyJh8aNCd7cRtFSnXB2H6wbW6Rc7N0nWyIP8eIg/640?wx_fmt=png&from=appmsg)

从图 9 可知，5# 芯片的试验情况最好，其剪切强度远大于 40 MPa；1# 和 8# 芯片的剪切强度小于 40MPa；6# 芯片的剪切强度略大于 40 MPa。结合这 3 组试验的烧结条件可以发现，要达到 40 MPa 的剪切强度，在烧结时间为 60 s 时，烧结压力需达到 10 MPa，烧结温度达到 250 ℃以上；在烧结压力为 6 MPa 时，烧结时间需要 180 s，温度达到 250 ℃以上；烧结温度为 230 ℃时，烧结时间需达到 120 s，烧结压力达到 10MPa 以上。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYOyqNb706jrIz3ariaia9icwcTh1UQlC01yL2ugiaw0kzmNb9VM4DibJ5fGg/640?wx_fmt=png&from=appmsg)

烧结工艺完成后做超声扫描（CSAM）测试，测试显示烧结层的边缘清晰，连接性良好，如图 10 和图 11所示。模块经历 3 次烧结后，最终翘曲度在 80 μm 左右，翘曲水平是比较小的，如图 12 和图 13 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYUWYUAbY2qhQhtYMmT8bFXTpSKDVArnNL0a1z0iau0vfC7KIeX8xATdA/640?wx_fmt=png&from=appmsg)

如图 14 所示，模块的整体厚度与理论差异最大在70 μm 左右。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJY0UvholjfpPfkrg4LIuZLF4MZCMAZh5BeNPny8rbmnVa5h9pIhubEgQ/640?wx_fmt=png&from=appmsg)

通过切片，在扫描电镜（SEM）下查看烧结层的状态，见图 15 和图 16，可以看出烧结层效果不错。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYicHZmwm8bUHHUkxYibYzO0lMV5NeY91Nq6wIlMBhxnGTAK60tsPzxWJg/640?wx_fmt=png&from=appmsg)

**3  模块特性分析**

功率模块试制后，为了确认工艺的有效性，进行了电性能测试。静态测试采用 Keysight B1506A，通过关键静态参数显示，在漏源极 Id 为 350 A 时和 RDS-on 为3.95 mΩ 时，封装能够实现芯片的电流能力，如表 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJY7nIwQjeHUq1sj0KiacFuUVvTEdxFJKotWSTrZrbHrwxQJAhzxvGnJMw/640?wx_fmt=png&from=appmsg)

动态测试采用搭建的双面测试平台进行评估。图17 和图 18 是在外接门极电阻 2 Ω、母线电压 600 V、开通电流 400 A 时的开通和关断波形，从波形上来看，电流曲线有一定振荡，跟芯片本身也有一定关系。另外，根据式 (2) 计算，电流回路的杂散电感为 11.2 nH，这是包含了模块和测试回路的总电感。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslpdpzJuW3flaY7o6nwtFJYLXqdnosPtgKjUzbkv6icMsia3HhwbrI2egOPaMaw0rFibf3CmLLVLxjag/640?wx_fmt=png&from=appmsg)

**4  结语**

本文设计一款全银烧结双面散热 SiC 模块，采用了 Si3N4 衬板和 MoCu30 材料的垫块，模块材料热膨胀系数（CTE）匹配较好。进行了关键工艺的研究，试制了科研样品，最大翘曲度在 80 μm 左右，为双面散热模块制作工艺提供一定指导意义。

下一步将继续评估模块的功率循环和温度冲击等可靠性，针对模块与散热器间热阻较大的问题，后续将进行模块与散热器的集成技术研究，对模块与散热器进行银烧结技术研究。

  

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)