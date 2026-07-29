# 基于SiC-MOSFET并联的大功率FSBB变换器模块设计


> 原文地址: [https://mp.weixin.qq.com/s/v30k2uNPVbevtmNMgqqjNg](https://mp.weixin.qq.com/s/v30k2uNPVbevtmNMgqqjNg)

**作者：**郭轩（专业硕士学位论文）

**摘  要 ：**

随着国家“十四五”规划和《2035年远景目标纲要》的出台，大力发展电力电子技术是 加快现代能源体系构建，保障国家能源安全，如期实现碳达峰、碳中和目标的重要途径， 也是推动实现经济社会高质量发展的重要支撑。而DC-DC变换器是电力电子技术的重要 分支也在其中有着重要作用。四开关Buck-Boost（Four-switch Buck-Boost，FSBB）变换 器具有升压降压功能适用于新能源发电、分布式电源、电动汽车等领域。然而在越来越复 杂的工况下对变换器的功率级别、电流、电压等级提出了更高的要求，如何实现软开关减 少变换器的开关损耗，提升变换器的效率具有非常重要的意义。 

本文以SiC-MOSFET为基础，针对FSBB变换器开关损耗大和变换器并联时存在的 电流不均衡现象采用了一种新的解决方法，以提高变换器的效率与可靠性。论文的主要研 究内容如下： 

首先，对FSBB变换器的电路拓扑进行了介绍，并分析变换器原理，构建变换器电压 增益数学模型，研究了变换器的基本控制策略，通过仿真验证得出结论：传统控制方法无 法实现FSBB变换器开关管的软开关，变换器的损耗较大。 

其次，在传统调制方法的基础上，针对变换器开关损耗较大的问题，通过研究FSBB 变换器软开关原理以及实现软开关的条件，提出了变相移的PWM控制方法，通过死区时 间内在开关管内部加反向电流来实现软开关，并通过仿真验证了该方法的有效性。最后比 较了硬开关和软开关情况下变换器的效率变化情况。 

然后，采用并联开关管的方式，提升了变换器的电流容量，分析了具有开尔文管脚的 SiC-MOSFET在驱动回路中的优势和开关管的功率损耗，采用模块化设计，用开关支路和 去耦电容器组成模块来解决并联器件的不均流问题。最终使用PI加前馈的电压控制方法， 完成对并联模块电流不均衡现象的动态补偿，并通过仿真验证了该方法的可行性。 

最后，设计并搭建了FSBB变换器的实验平台，进行了相关实验，验证了均流和控制 方法的有效性。  

**关键词：**FSBB变换器；软开关；均流；交错并联 

  **1 绪  论** 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_000_84357ef54b5c.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_001_94869821e776.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_002_d66a02020a51.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_003_412119876495.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_004_a0c740ec343e.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_005_10fe4e116240.png)

**2 FSBB变换器基本工作原理及控制策略** 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_006_c82271a3d2c3.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_007_ad0f6be16d74.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_008_df9921cd54dd.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_009_b3b9dccba72a.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_010_fd3d0b57925e.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_011_033b0c0bc97b.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_012_5b45260a4fa6.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_013_234ba0e37667.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_014_f43c2da8bd0c.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_015_915fd97bba33.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_016_4d59a993e83d.png)**3 FSBB变换器的软开关研究及控制**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_017_68c49f2bcfc5.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_018_ca2dcb9ef134.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_019_b9b7060e5650.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_020_88667ded0ba0.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_021_bbf54ca07f2d.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_022_840fdee939b4.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_023_f79ec76f0f12.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_024_b593a8f9c5eb.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_025_541e00a47d06.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_026_569a22f8524b.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_027_05a633d9135a.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_028_a63109553eae.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_029_22fba4bee244.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_030_c7c4cfc5cfaa.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_031_a5ae27b7e4f9.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_032_970acc19b50e.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_033_aa9d9bc63d19.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_034_be59023833fe.png)

**4 SiC-MOSFET开关管及其模块间的均流** 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_035_ff8c01374e03.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_036_d15ab5b70cee.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_037_414c7fc4896c.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_038_817872bd2d9a.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_039_8d8612954986.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_040_6dc28eb6c5a8.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_041_7e8a5fbeab08.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_042_fb94f4270c94.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_043_f34681f4fb44.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_044_e86d95781d60.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_045_97744e130907.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_046_779a61a29208.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_047_249898f1054a.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_048_b4ae82e475e7.png)

**5  变换器模块设计及实验验证** 

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_049_bb2c2b0e028c.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_050_5e65d4814d0c.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_051_11d83ff6f363.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_052_d1adb79f2476.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_053_6499b66cece5.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_054_e8d63f8b93d8.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_055_bca377ea9289.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_056_6435e29baaf5.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_057_cf7884854481.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_058_81f5275220fa.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_059_4f8e6e2389e0.png)

**6  结论与展望** 

**6.1研究工作总结** 

FSBB变换器有着升压降压的功能、开关器件电压应力低、损耗低、输入和输出同极 性、无源元件少等优势，比较适用于宽输入电压范围场景，已成为学术界和工业研究界的 热点，而开关器件的特性直接影响变换器的性能和效率。目前传统Si器件使用性能现已 趋近于理论上限，但仍难满足人们的需要SiC、GaN宽禁带半导体器件的出现，为器件性 能的提升带来新的机遇。本文用SiC-MOSFET作为FSBB变换器的开关管，针对变换器 开关器件开通方式一般是硬开关损耗较高和变换器并联时存在的电流不均衡现象，提出 了一种解决方法，以提高FSBB变换器的效率与可靠性。本论文的主要工作内容如下： 

（1）介绍了FSBB变换器拓扑结构的基本构成，对变换器的基本工作原理、单模式 控制、多模式工作原理进行了详细分析，研究了变换器的基本控制方法，在PSIM仿真平 台上对传统控制方法进行了仿真分析。得出结论传统控制方法无法实现FSBB变换器开 关管的软开关，变换器的损耗较大。 

（2）分析了FSBB变换器软开关的原理以及实现软开关的条件，研究了软开关的实 现过程，采用了变相移的PWM控制方法，通过死区时间内在开关管内部加反向电流来实 现开关管的软开关。并在PSIM仿真平台上做了相关的仿真验证，分别进行了变换器升压 和降压状态下软开关仿真验证，结果表明四个开关管都以实现软开关。最后分析了硬开关 和软开关情况下变换器的效率，结果表明软开关情况下变换器效率明显高于硬开关。 

（3）研究了具有开尔文管脚的SiC-MOSFET相对于传统SiC-MOSFET的优势和开 关管在开通和关断情况下的功率损耗，比较了FSBB变换器在硬开关和软开关两种模式 下的功率损耗。采用模块化设计使用开关支路和去耦电容器组组成的模块，来解决并联器 件的不均流问题，采用PI加前馈的控制方法，控制开关器件驱动信号的延迟时间，实现 对并联模块的均流。并在PSIM仿真平台上做了相关的仿真验证，进行了FSBB变换器两 模块和八模块的并联均流仿真验证，仿真结果表明变换器模块间基本上以实现均流。 

（4）设计并搭建了FSBB变换器的实验平台，对SiC-MOSFET开关管选型、主功率 电路、驱动电路、采样电路等硬件设计进行了详细介绍，并在搭建的平台上进行了相关实 验。对变相移的PWM电压控制方法进行实验验证，实验表明本文提出的方法实现了变换 器四个开关管的软开关；对并联器件的模块化设计进行实验验证，结果表明并联的SiC MOSFET以实现均流；对PI加前馈的控制方法进行实验验证，结果表明变换器模块间基 本上已经实现均流。 

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_060_318ead5d55de.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_061_3ade3c3d8599.jpg)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\基于SiC_MOSFET并联的大功率FSBB变换器模块设计_images\img_062_84aa944feb13.jpg)