# Step by Step：在PSIM中搭建NMOS驱动IC及测试电路过程，以峰岹芯片FD2203S为例

原创 傅存敬 电磁散人 2025-09-24 22:13 广东

> 原文地址: [https://mp.weixin.qq.com/s/Otr\_etiDvv7lkp4KfqdLMw](https://mp.weixin.qq.com/s/Otr_etiDvv7lkp4KfqdLMw)

本文是一篇承上启下的文章，在前几篇文章中分析了BLDC电机控制器中自举电容电压泵升的原因、特别是[暂态过程](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484033&idx=1&sn=daef79f20987913c3121245dc42038f9&scene=21#wechat_redirect)以及[应对措施](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484026&idx=1&sn=e596b36d98e6b58a5b22e6ce4ecc32b5&scene=21#wechat_redirect)的基础上，通过阐述在PSIM中逐步搭建NMOS驱动IC的过程，为后续BLDC电机控制器的硬件设计基础做铺垫。

按照如下过程逐步操作，我们一起重新构建FD2203S这颗国产NMOS驱动芯片及其外围测试电路（芯片的datasheet可在官网下载到），并尝试通过更改外围测试电路的器件或控制参数，观察自举电容电压泵升的暂态过程及其影响因素。

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_000_edf828b1bf89.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_001_0890bb5617f1.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_002_7d6bfcb9be96.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_003_37d75f7bd118.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_004_2df29aaaa037.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_005_9bdb838b5977.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_006_0586dfc453b5.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_007_fe2abf3470a5.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_008_e96e8a2ff281.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_009_68d25d3fe53f.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_010_050af6605d02.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_011_99a1fdb4cee4.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_012_c3e665d143c5.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_013_421fad0f7911.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_014_ffbbb04c2926.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_015_35259c69652b.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_016_ebaef770e099.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_017_0d7244dccb87.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_018_17e7870294ed.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_019_b32179b35a61.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_020_aa5069dc6da3.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_021_e350793c9f3b.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_022_d4193dfdd4bc.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_023_dbb15747d666.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_024_643214df24ae.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_025_3ad4117c6aba.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_026_fcf00cbe4f83.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_027_9b0739927fff.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_028_cb988299dedf.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_029_ac85baf461c1.png)

  

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_030_4235a0a912ac.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_031_e360b0ba53d9.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_032_260ada150887.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_033_db6dbd839059.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_034_d4bd7a23724a.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_035_a78095308e8a.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_036_5652bdd0ca54.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_037_9d3f18760375.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_038_06c6b761f9eb.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_039_6e49506ebaea.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_040_83fd5484cc8f.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_041_63214f70d2cc.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_042_1909f8e26e80.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_043_8381139b3d18.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_044_4b6f2c517ae1.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_045_25dea1354c54.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_046_3b5298d9f2cb.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_047_a5a776c0e6ef.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_048_1328ccccf0af.png)

  

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_049_ecf432578dba.png)

![](Step_by_Step_在PSIM中搭建NMOS驱动IC及测试电路过程_以峰岹芯片FD2203S为例_images/img_050_9fd7f4bacc2f.png)

  

附记：

测试电路中选择level 2等级的NMOS模型，主要原因是该种模型既能考虑NMOS内部体二极管钳位电压、寄生电感、开关延迟的影响，又能提供较快的仿真速度。

且需注意PSIM中的MOSFET（3-state）的level 2模型，不是学术论文中常提到的SPICE level 2模型，而是“开关+寄生”的混合模型：

-   强导通时，主通道用ON Resistance决定电流；
    
-   近阈值区/反向导通时，由“Transconductance（跨导）+阈值”影响过渡过程；
    
-   自带体二极管与结/栅电容