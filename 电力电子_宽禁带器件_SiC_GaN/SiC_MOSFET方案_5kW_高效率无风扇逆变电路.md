# SiC MOSFET方案：5kW 高效率无风扇逆变电路


> 原文地址: [https://mp.weixin.qq.com/s/G6uTd--ZCATWQ1EVpKuHEQ](https://mp.weixin.qq.com/s/G6uTd--ZCATWQ1EVpKuHEQ)

**文章来源：**罗姆（ROHM）半导体

**摘要：**采用了发挥碳化硅(SiC)MOSFET 高频特性的 Trans-link 交错型逆变电路(1)、实现了 5kW 时的功率转换效率达到 99%以上。在该电路拓扑中，平滑电抗器的电感量可以减小。由于电抗器的匝数减少、使铜损大幅度减少实现了高效率。在这份资料中，介绍这个全新的逆变器设计的例子。此外，这个全新的逆变电路是和 power-assist-tech 株式会社（https://www.power-assist-tech.co.jp/）共同开发。

与常规电路对比

图1是常规全桥型和本文档介绍的Trans-link交错型电路的比较，两个电路输出功率都是5kW。

尽管常规桥式并联2PCS IGBT(STGW60H65DGB)作为开关器件，5KW时的效率是97.4%(总损耗为133W),冷却风扇是必要的。交错式效率达到99%(一共损失51W)，因为抑制了发热、不使用冷却风扇的小型化散热器可以冷却。而且因为是交错型，显然开关频率可以倍增，平滑滤波器被小型化、尺寸和重量被减半。

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_000_59aa59a0af91.png)

电路组成

图2表示交错型电路的组成

逆变电路中有三个半桥，每个半桥包含两个晶体管(QHk和QLk、k= 1、2、3)。肖特基二极管作为续流二极管和晶体管并联。B2和B3以180°反转相位PWM模式动作。B1 的QH1と和QL1以 50 Hz 交替开关、作为低频率开关桥动作。B2和B3的输出通过耦合电抗器(LC)相互作用，电流流过LC后被相加。B2和B3的输出和B1的中心点连接输出电容(CO)。

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_001_5b218c4a80cc.png)

耦合电抗器等效电路如图3所示。

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_002_3578b78e8fdf.png)

能够分为两个漏感(L1和L2)、励磁电感(Lm)、以及理想的反向变压器。如图3所示VL1、VL2、V1、以及V2是各个电感的自感应电动势、图3中iL1、iL2、i1、i2、以及im是被定义的电流。因为这是PWM电路，QH2开通时以占空比d动作。由于是逆变动作，d根据时间变化。 L1和L2的电感量相同，为了简单用L表示。在逆变过程中，除死区时间外、逆变电路中所有的半桥都按照同步整流的原理运行。

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_003_fc1da18e5fd5.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_004_89cb21c6168f.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_005_23b2dd76b01d.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_006_e2869748c63c.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_007_f61054430ceb.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_008_f19363421bd9.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_009_aa4fe33cf4de.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_010_931e3665eda0.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_011_43b69e788b94.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_012_6270e5935d13.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_013_628eb9a644a1.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_014_609084ecd343.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_015_66ac92c6d7f2.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_016_6cd1d295fe32.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_017_2f54445f4757.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_018_a5044e77f7be.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_019_e6d9d3b24854.png)

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_020_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_021_3ade3c3d8599.jpg)![](SiC_MOSFET方案_5kW_高效率无风扇逆变电路_images/img_022_84aa944feb13.jpg)