# SiC MOSFET建模及其寄生参数行为特征研究


> 原文地址: [https://mp.weixin.qq.com/s/g4Bks6kNssgYKA338qfAcA](https://mp.weixin.qq.com/s/g4Bks6kNssgYKA338qfAcA)

文章来源：电子器件

作者：李湘峰１，杨泽涛１，邓松彬１，郭芳１∗，黎敏２，詹胜强１（１．佛山大学机电工程与自动化学院，广东 佛山 528000；２．仲恺农业工程学院自动化学院，广东 广州 510225）  

摘要：SiC MOSFET因其材料、工艺以及器件结构的特殊性使得其器件特性与传统硅基IGBT、MOSFET有较大差异。就工业应用而言，SiC MOSFET与IGBT、Si MOSFET的主要区别在于器件寄生参数差异所导致的开关特性差异。基于此，以CREE公司SiC MOSFET为研究对象，对其寄生参数等效电路进行建模与分析，对驱动电路阻值以及器件寄生参数在SiC MOSFET开关过程中的行为特征及作用机理进行研究，在此基础上给出不同寄生参数值下器件开关特性波形，期望以此为SiC MOSFET器件的设计、测试以及基于SiC器件电力电子系统的电路设计与系统调试提供相关数据支持。  

关键词：碳化硅金属氧化物场效应管；开关特性；寄生参数；双脉冲测试

经过几十年的发展，硅基功率半导体工艺已趋近理论极限，传统Si基IGBT及MOSFET在性能方面很难有较大幅度提升，其性能与目前电力电子系统高频化、轻型化以及高可靠性要求之间矛盾日益突出。在此背景下，宽禁带功率半导体代表性器件SiC MOSFET因其极低的导通电阻、开关损耗以及良好的耐高温、耐高压、抗辐射等特性迅速成为功率器件行业技术研究前沿和产业竞争焦 点。然而，目前关于SiC MOSFET的研究集中于材料性能、器件结构、器件失效分析以及器件封装设计等方面，在器件及电路寄生参数行为特征方面研究较少。  

在工程应用中，SiC MOSFET通常以较高的开 关频率对电压、电流进行开关控制，器件开关时间、开关损耗以及电压与电流应力等特性极易受到寄生参数的影响。目前，智能电网、大规模储能以及电动车行业对SiC MOSFET的需求激增，SiC 器件迭 代与创新速度加快，导致不同厂家、不同工艺SiC器件参数差异较大，产品多元化趋势明显，因此，研究 不同寄生参数对SiC 器件开关特性的影响机理对于 器件选型与应用具有重要的理论意义与实践价值。基于此，本文以CREE公司SiC MOSFET器件为研 究对象，分析其寄生参数等效电路并建立数学模型，以此研究SiC MOSFET器件寄生参数与其开关特性作用机理，从而为SiC MOSFET的大规模应用提供 相关数据支持。  

１.SiC器件寄生参数模型及其开关特性  

1.1 SiC MOSFET等效电路  

考虑SiC器件寄生参数时，其等效电路可由图1（ａ）所示电路进行描述，电路包括栅极电感Ｌｇ、源极电感Ｌｓ、漏极电感Ｌｄ、栅源电容Ｃｇｓ、栅漏电 容Ｃｇｄ、漏源电容Ｃｄｓ以及栅极电阻Ｒｇ（ｉｎ）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNML54eBRLeFGShR58BGe8EgcajyTGJiaVwDqzQInbKuPprxQBcFYLdIibQk9KD8gDicfQK5atsMjdbDnxjuMyacu2xF6A75iavicyc/640?wx_fmt=png&from=appmsg)

对于特定SiC MOSFET器件，栅极驱动电路对器件开、关特性影响较大，一般而言，栅极等效驱动电路可由图1（ｂ）进行描述。其中Ｒｇ＿ｉｎ为器件内 部栅极电阻；Ｒｇ＿ｏｕｔ为外加驱动阻抗，器件总的驱动电阻 Ｒｇ＝Ｒｇ＿ｏｕｔ＋Ｒｇ＿ｉｎ；Ｉｇ、Ｉｇｓ、Ｉｇｄ分别为栅极电流、Ｃｇｓ电流以及Ｃｇｄ电流，Ｖｇｓ＿ｏｎ、Ｖｇｓ＿ｏｆｆ分别为栅源极驱动的开通电压和关断电压  

1.2 SiC MOSFET开通过程

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMCajibiar9nJksicPGoXaSfUVj53goUvIAPtxGen1CJCXK7chicicdTaI7o0Dcgtohot6k05HIm0EicGJQZqv3HibMw3dbiahicxQ4XrFI/640?wx_fmt=png&from=appmsg)

  
SiC MOSFET的开通过程如图2（ａ）所示，其中Ｖｇｓ为栅源电压，Ｖｄｓ为漏源电压，Ｉｄ为漏极电流，ＶＤＣ为母线电压（漏极电压），Ｖｇｓ（ｔｈ）为器件导通阈值电压，Ｖｇｓ＿ｍｉｌｌｅｒ为米勒平台电压。由图可见 SiC MOSFET开通过程可分为 ４个阶段，即开通延迟阶段（ｔ０～ｔ１）、电流上升阶段（ｔ1～ｔ2）、米勒平台阶段（ｔ２～ｔ３）以 及饱和导通阶段（ｔ３～ｔ４）。  

开通延迟阶段（ｔ０～ｔ１），驱动电源对MOSFET输入电容Ｃｉｓｓ＝Ｃｇｓ＋Ｃｇｄ充电，由于ｔ０时刻Ｖｇｓ电压为Ｖｇｓ＿ｏｆｆ，因此该阶段栅极电压可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP9jqU3VPia7UBbqcz8picW2at3uzxwM0VHBH731zsFLL9YTP8xOiaJXyJhCdko7sXlxYOSFRJV3kVpymxljzwxdmZgPe0FibAGGBc/640?wx_fmt=png&from=appmsg)

开通延迟阶段维持时间可表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNxr3KfbPWGephhd4wek8pb8eAdWlxqX15XuyV2TSPJGibicgT6T5bK7ZkyYaLxPtly6rkHKAbUKooOPgibcz8Pg54qrkfO0YfN6c/640?wx_fmt=png&from=appmsg)

栅极电压Ｖｇｓ达到阈值电压Ｖｇｓ（ｔｈ）后进入电流上升阶段（ｔ１～ｔ２），电流上升阶段驱动电源继续为Ｃｉｓｓ充电，栅极电压上升趋势仍由式（１）进行描述，而该阶段维持时间可由式（３）表示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMNQSbrBEea7GbNZ8k1tCt2EBicQEp91welYiaQKVp4ArxWJA4HbLXsQr7hULecAAphicx9GVibnFLbuKJ1vtIa6MyTpOP1j6426Q4/640?wx_fmt=png&from=appmsg)

在米勒平台阶段（ｔ２～ｔ３），驱动电源对米勒电容Ｃｇｄ充电，同时，漏源电压 Ｖｄｓ逐渐降低，最终趋近于饱和压降 Ｖｏｎ，该阶段栅极电压被钳位为米勒平台电压，同时米勒平台持续时间可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNRY2z9rRlJIDrClwOp8bY4jXtYh3EsnhRdyiaWJzfsxCgI4s1v0nMEPLicrJmXX2zEFHVLNAt2VoKGcuJ8qMqw2S5b9mDMzvDAU/640?wx_fmt=png&from=appmsg)

在饱和导通阶段（ｔ３～ｔ４），驱动电源为Ｃｉｓｓ充电，Ｖｇｓ缓慢上升至Ｖｇｓ＿ｏｎ。  

1.3 SiC MOSFET关断过程  

SiC MOSFET的关断过程可分为关断延迟（ｔ５～ｔ６）、米勒平台（ｔ６～ｔ７）、电流下降（ｔ７～ｔ８）以及截止（ｔ８～ｔ９）四个阶段，其波形如图 ２（ｂ）所示。在关断延迟阶段（ｔ５～ｔ６），栅极电压Ｖｇｓ可由式（５）进行描述：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMxJ03CDjGJ2NxzrUUPhibQZbecDCpLmwnZ9zlgATNB4AvJk8iallGQgHXMVjibibwFCtfX62x65qstlVNxicEt4iavUS2wPIba8lHyg/640?wx_fmt=png&from=appmsg)

该阶段持续时间为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNBhLmTbOanPxet5EmcyibnOCrib1ibDFo6rfPP0DdichHOEAHw8lq9ibrPFMjXCF9iaTPDYTJia5Q1alQ0769stibfiaSKhZ4zbLcmiae0w/640?wx_fmt=png&from=appmsg)

在米勒平台阶段（ｔ６～ｔ７），栅极电压被钳位为米勒平台电压，米勒平台持续时间可表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMGzMrMaz4j802IreFiawFjhlY0ejFHHFpuZBDpqLOd42p4Mm3YCWsrFlfbMJ9SBWKNhweZsKVqJeibocubwYbDp8exQP1mO0b78/640?wx_fmt=png&from=appmsg)

在电流下降阶段（ｔ７～ｔ８），栅极电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNuGwMrjQjp9Xea7yFXSf2XNiaP1Tnr1wWfc1YL4MlFSiaDaSpSbJpwiaxd3sodmE3bDaUvdhUic79Ix363cG6RUSZy047TpSJibicbQ/640?wx_fmt=png&from=appmsg)

持续时间如式（９）所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNZPiciasdtU3EMPBhDCqk0hasPrw7ibzttN2YknCxO0lpCa4AV6IJCNcrSseljssylhdXRnfy9WCwliav8NNaJKVia0ibLKBEUib5wUc/640?wx_fmt=png&from=appmsg)

在截止阶段（t8～t9），栅源电压近似以恒定斜率下降至Ｖｇｓ＿ｏｆｆ。

２.SiC MOSFET寄生参数模型仿真研究

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOmG79cxHL8Pk4NkQT3QiaSO9drQVLUWVGCAkuDp5K5QxNOVDSHlsu6EMxylH8Tuujo3w9rAH357ATKXAbnaqs7Uvd8P76LnCcM/640?wx_fmt=png&from=appmsg)

  
基于厂家所提供的器件仿真模型，在LTspice软件中搭建了图３所示 SiC MOSFET的双脉冲测试电路，以此研究门极驱动电路及各寄生参数与器件开关动态特性的作用机理。  

2.1 栅极电感 Ｌｇ对器件开关过程的影响

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNVvfVy0ib3rf1xPxiaTNlhu9ic5qHdKqK7N07JlTW7RwRjuGQvarHxXiarAWwlSj1x4Sxn0q4JWhhfGmNnn3HwsOVRSz6Ss5ImXXQ/640?wx_fmt=png&from=appmsg)

  
在栅极电感Ｌｇ＝０ｎＨ、10ｎＨ、20ｎＨ、50ｎＨ条件下器件的开通、关断波形如图４所示。由图4（ａ）、图4（ｂ）可见，Ｌｇ增加将导致栅极电压 Ｖｇｓ振荡 加剧、超调增大，因此工程应用中应对驱动回路进行合理的布局以尽量减小栅极回路电感，同时可考虑增加栅极电阻，以此增大ＬＣ振荡阻尼，抑制Ｖｇｓ振 荡。此外，由图4（ｃ）～图4（ｆ）可见，Ｌｇ的增加对漏极电流及漏源电压影响不大，仅对开通过程中漏源电压的下降波形略有影响。

2.2 漏极电感 Ｌｄ对器件开关过程的影响

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPPNXNaDtSLL9paPT6I0wWknVQgmshoRhcWEWIwKIjtnTSTsa1GbibwbBOTaluS9AF5WcQa4CffleMpNEOKFqg3POicm0IWSBWlc/640?wx_fmt=png&from=appmsg)

  
在漏极电感Ｌｄ＝０ｎＨ、10ｎＨ、20ｎＨ、50ｎＨ条件下器件开通和关断波形如图５所示。由图５可见 漏极电感Ｌｄ的增加使得器件开通及关断过程中的 栅极电压、漏极电流以及漏源电压的振荡有所加剧，因此，工程应用中，应尽量降低Ｌｄ值。  

2.3 源极电感 Ｌｓ对器件开关过程的影响  

源极电感Ｌｓ＝０ｎＨ、10ｎＨ、20ｎＨ、50ｎＨ条件下器件的开通和关断波形如图 ６所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPLQXL6WEkrt18Ficmt2DwlEdxAQERLmVVQ2gnTtWXYKzkkGdVAR9Cxlah446n02iatlNbr6mbQDwiamSsS6IGWSXmVA8tTjEP9QI/640?wx_fmt=png&from=appmsg)

  
由图6（ａ）、图6（ｂ）可见，随着Ｌｓ值的增大，栅极电压的振荡和超调现象加剧，同时在器件关断过程中，有明显的延时关断现象。如图6（ｃ）～图6（ｆ）所示，对漏源电压及漏极电流而言，Ｌｓ增大时漏源电压及漏极电流的上升、下降时间均有所延长，但是漏极电流振荡有所缓解。  

2.4 栅源电容 Ｃｇｓ对器件开关过程的影响  

在栅源电容Ｃｇｓ＝０ｐＦ、600ｐＦ、1200ｐＦ、1800ｐＦ条件下器件的开通和关断波形如图7所 示。如图7（ａ）、图7（ｂ）所示，随着栅源电容 Ｃｇｓ的增加，SiC MOSFET栅极电压的振荡减弱、超调减小，但开通、关断延时时间有所增加，该延时可能导致开通、关断过程中器件损耗增加。如图7（ｃ）～图7（ｆ）所示，漏源电压及漏极电流的上升和下降速率均有所降低，使得器件损耗有所增加，但是器件开通时所承受的电流应力明显减小而更有利于器件的安全可靠运行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNmiaesz42yz7lzSkggn2ib349JAibWTQFIgYkpvlCPchUPSIBibDPUkCgLsujNibXKEPduorgWECF0buKM3MYbYQyROsyibwgav7rdk/640?wx_fmt=png&from=appmsg)

2.5 栅漏电容 Ｃｇｄ对器件开关过程的影响

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN7ZRu3wyMZ9ZG9LiabIMymIWOibiaL1pSkYJjNH4c1YIoUlKyhjFrtCSmVaIGj7UibquZAKs32u4yZP9z5AXiahXcic0icW1SOMkJc5c/640?wx_fmt=png&from=appmsg)

  
在栅漏电容Ｃｇｄ＝０ｐＦ、10ｐＦ、20ｐＦ、50ｐＦ条件下器件的开通和关断波形如图８所示。如图8（ａ）、图8（ｂ）所示，栅漏电容增加使得栅极电压上升、下降速率有所变缓。如图8（ｃ）～图8（ｆ）所示，随着栅漏极电容Ｃｇｄ的增加，漏源电压Ｖｄｓ及漏极电流Ｉｄ变化速率均有所降低，同时米勒平台持续时间增加，导致器件损耗增加。  

2.6 漏源电容Ｃｄｓ对器件开关过程的影响  

漏源电容Ｃｄｓ＝０ｐＦ、100ｐＦ、200ｐＦ、500ｐＦ条件下器件开通和关断波形如图９所示。如图９（ａ）、图９（ｂ）所示，在开通过程中，随着漏源电容Ｃｄｓ的增加，栅极电压振荡与过冲加剧，但关断过程中Ｃｄｓ的增加将减弱栅极电压Ｖｇｓ的振荡。如图９（ｃ）、图９（ｄ）所示，开通阶段，Ｃｄｓ的增加将减小漏源电压的下降速率，同时使得漏极电流过冲加剧。如图9（ｅ）、图9（ｆ）所示，器件关断阶段，Ｃｄｓ的增加使得漏源电压上升速率变缓，同时使得漏源电压Ｖｄｓ和漏极电流Ｉｄ的振荡幅度变大。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMDicIEukaOicibfE0eR8eCLYcKn6FGgEJicjlfwLwPBZpdqN5XicSa34FjzTejyYyHWWT2x3ZxljapphuvZm8uA9FYxrn5iac3uWsRI/640?wx_fmt=png&from=appmsg)

３.栅极电阻对器件开关特性影响实验研究  

在器件设计与生产过程中，厂商基于目前工艺技术水平，已针对不同应用场景对不同系列器件产品的本征参数进行了优化设计，就器件应用而言，一般无需对寄生电感及寄生电容参数进行修正设计。实际工程应用中，驱动电路方案已经确定的情况下，改变外部栅极电阻阻值是对器件开、关特性进行调整的最为行之有效且最为直接的方法。因此，本文实验部分仅考虑栅极外部电阻对SiC MOSFET开关特性的影响。基于图３所示双脉冲测试电路，搭建SiC MOSFET开、关特性实验测试平台，如图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMq9dB3fkRZtmgYibR39cgkaianoQW1CL9Y8pg0PYJ8vuFq7iaAaMsR3WR42WE1GGlPLSXZWcSMr1EhraaFibynAGGlE086GM7ySOs/640?wx_fmt=png&from=appmsg)

  
实验中所测试的对象为CREE公司型号为C2M008012D的SiC MOSFET器件，实验平台直流输入电压VDC为400Ｖ，负载电感L1为400μＨ，负载电流Ｉｄ为10Ａ，栅极开通电压为＋20Ｖ，关断电压为－4Ｖ。图11所示即为外部栅极电阻分别为5Ω、10Ω、15Ω以及 20Ω条件下器件的开、关特性波形。

实验结果表明，外部栅极驱动电阻的增加对SiC MOSFET的开、关特性产生了 显著影响。如图11（ａ）、图11（ｂ）所示，外部栅极电阻的增大使得栅极电压的上升、下降速率明显放缓，从而导致器件开通、关断暂态时间延长。如图11（ｃ)～图11（ｆ）所示，外部栅极电阻的增大使得漏源电压及漏极电流的 上升、下降速率变缓，从而导致器件开关损耗增大。但是，增加栅极电阻可有效抑制器件开关过程中漏源电压及漏极电流的振荡与过冲。因此，在高压、大电流应用场合，需合理选择外部栅极电阻阻值并进行实验测试，以此降低器件所需承受的峰值电压与电流，确保SiC MOSFET运行于器件安全工作区。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNiaG5rmdicU13ndjsOPicSIic9mKuLIsfwuMcK9f5mz0DBX4HLPOrXl6QlicF3hKzPz46HJkb02LbBG4CMFNpd9lhDtc4NSdFBBNwg/640?wx_fmt=png&from=appmsg)

４.结论  

本文搭建了基于SiC MOSFET的双脉冲仿真与实验测试平台，研究了不同寄生电感、寄生电容以及栅极电阻作用下SiC MOSFET的开关动态特性。当寄生参数数值逐步增加时，寄生参数对器件开、关特性影响如表１所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRQ2EmmCZaBhejBuAibNPQkVeTdWXvyIr6UQd4qqSangSiaq1dA9fTqj5lTLrwXSic8xz8JlSvRdfS4eP9EDH8DxmrbnKI0eALMo/640?wx_fmt=png&from=appmsg)

  
①栅极电感主要影响栅极回路，电感值增加导致栅极电压振荡加剧，但栅极电感值的增加对漏源电压Ｖｄｓ以及漏极电流Ｉｄ的变化速率（ｄＶ／ｄｔ和 ｄｉ／ｄｔ）无明显影响；漏极电感主要影响主回路漏源电压Ｖｄｓ以及漏极电流Ｉｄ波形，其电感值的增加导致漏源电压与漏极电流的振荡加剧；源极电感对栅极回路与主回路波形均有影响，其主要影响在于使得开通、关断波形有所延时。  

②栅源电容主要影响SiC MOSFET器件的开通时间、关断时间以及峰值漏极电流，适当增加栅源电容可降低器件开通时的峰值电流，但同时将导致器件损耗增加；栅漏电容的大小对栅极电压、漏源电压及漏极电流均有影响，其主要影响在于使得器件开、关暂态过程时间延长；漏源电容导致器件开通、关断波形振荡加剧，但适当的漏源电容可降低器件关断时漏源电压振荡频率，从而改善ＥＭＩ。  

③栅极驱动电阻的增加会导致SiC MOSFET的开通和关断速度变慢。电阻越大，栅源电压和漏极电流变化越缓慢，同时，栅极电压、漏极电流的尖峰值也会相应减小。  

从仿真及实验分析结果可知，SiC MOSFET内寄生电感、寄生电容以及栅极电阻参数对器件栅极电压、漏源电压及漏极电流的影响不尽相同。因此，在实际工程应用中，有必要根据不同应用场景选择不同参数的器件，以此获得较好的应用效果。此外，论文所提供的不同寄生参数对器件开、关特性影响的相关仿真及实验波形，可为实际应用系统中器件性能评估、趋势分析、故障诊断、驱动电路设计、保护和控制策略设计以及系统调试提供相应数据支持。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOacSVgUNia1ia8kNMoyS6M77UTdX9L750qtl17aK1Xycic07D0ibj1HFytY8YGrTxcTPjEQ0y9S0JMaB6hKic5GUCLIMTnW9dyfz64/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMCUzkwVSKCaUFDmkPlH88IWBn6Cvd3RiaHKZudHyKM9NaAXHpBrV0AKicJd67QF98picyo2IEIQpNWQ9Rrare1rmkVw08cm7TCcI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMPgSEQmIsQHmrwzCynUuBHIUAfEOBFNkB6pia1bMpG45eAyoDa6ICW6EGH9RJfj61uLMWM4kNYvcSGJYicMQy5tXg8bKH3M1r4g/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNBGrx2MfeicCmib2tFXYPQBxObtPXHu2LToOdT3SmAfNLzL4n9UwTZQhY53b1lYkn9OibJuqavO16tZ84YliaVpx6Y8JsQl2S8ss4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)