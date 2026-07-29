# 10kW 双向三相三级（T 型）逆变器和 PFC 参考设计


> 原文地址: [https://mp.weixin.qq.com/s/cX2wC3zq3G4Pwz2wN-NTqA](https://mp.weixin.qq.com/s/cX2wC3zq3G4Pwz2wN-NTqA)

**文章来源：**德州仪器（TI）

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_000_387427696772.png)

**说明：**此参考设计概述了如何实现基于 SiC 的双向三级三相有源前端 (AFE) 逆变器和 PFC 级。此设计使用 50kHz开关频率和 LCL 输出滤波器来减小磁性元件的尺寸。峰值效率达到了 99%。此设计展示了如何在 DQ 域中实现完整的三相 AFE 控制。控制和软件在实际硬件上和“硬件在环”(HIL) 设置中经过了验证。

**资源：**

TIDA-01606 设计文件夹，TMS320F28379D 产品文件夹，TMS320F280039C 产品文件夹，C2000WARE-DIGITALPOWER-SDK 工具文件夹，UCC21710、UCC5320 产品文件夹，TMDSCNCD28379D 工具文件夹，TMDSCNCD280039C 工具文件夹，AMC1306M05、OPA4340 产品文件夹，LM76003、PTH08080W 产品文件夹，TLV1117LV、OPA350 产品文件夹，UCC14240 产品文件夹

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_001_8b7fe70cc5aa.png)

**特性：**

• 额定标称和最大输入电压为800V 和 1000V 直流电压，在 400V 交流 L-L 50Hz或 60Hz 下的最大功率为 10kW (10kVA)

• 紧凑型输出 LCL 滤波器，开关频率为 50kHz

• 满载时输出电流总谐波失真 (THD) 小于 2%

• 用于驱动高压 SiC MOSFET 并具有增强型隔离功能的隔离式驱动器 UCC21710，以及用于驱动中间SiC MOSFET 的 UCC5320S

• 使用 AMC1301 进行隔离式电流检测，从而实现负载电流控制和监测

• TMS320F28379D 和 TMS320F280039C 控制卡可执行数字控制，搭载了可使锁相环 (PLL) 计算加速的三角函数加速器 (TMU)、用于实现保护的比较器子系统以及可将控制环路卸载到协处理器的控制律加速器 (CLA)。

**应用：**

• 串式逆变器

• 中央逆变器

• 车载充电器 (OBC) 和无线充电器

• 直流充电（桩）站

• 便携式直流充电器

• 能量存储电源转换系统 (PCS)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_002_742287235d1f.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_003_d4ba9110a3d3.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_004_34d63870f05b.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_005_8451bd01cdce.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_006_050e94d25139.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_007_4aadeb2a9d70.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_008_06e5ffa86477.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_009_0e6cb7819d81.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_010_499ce655ceb4.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_011_89806cffb011.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_012_b1026d11e2bf.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_013_ed34723354c2.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_014_b062479200e7.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_015_a44f81c9cdf6.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_016_c2347571bfa1.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_017_bba3f369a6b3.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_018_8f25f578cf2c.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_019_ac85a7036bf2.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_020_39ece06bc4d1.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_021_0f28629ba648.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_022_21f08e298ba2.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_023_a5716a26ec06.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_024_caa7ce65b717.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_025_5c3eba06ef09.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_026_38d4ec3721ba.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_027_4e478aa4865b.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_028_361ceb368b97.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_029_88e03864c030.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_030_59f7e2fe9c77.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_031_3de47b43c6ca.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_032_a5a2206b47b2.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_033_cbe8482abb87.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images\img_000_6671e34ca567.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_035_f8c8a290816b.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_036_9e5d8ee8e0f4.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_037_ab988ddf7416.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_038_5dfb002cfc85.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_039_fd1c6fbcb5fb.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_040_7df5e5ed2967.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_041_b499cb85efe8.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_042_a33250727496.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_043_205a248e687f.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_044_1738f5c933ac.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_045_908215db6735.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_046_5c075d280e70.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_047_a61706eaec94.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_048_bb43b09b2de3.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_049_68afa12840f0.png)对于基于 SDFM 的电流检测，还为所有逆变器实验 添加了过流保护 (OCP)。

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_050_c0e98fe71f86.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_051_5131f184f61a.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_052_03f4b05ccb70.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_053_eca1e18e0a5c.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_054_223680ffe356.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_055_252e34dc5b77.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_056_20944d12fa40.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_057_7a55f45b2460.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_058_4f6e57d5028c.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_059_3888d6dac553.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_060_245d3dd7ff28.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_061_561253844641.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_062_1eb5e955110b.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_063_5607245b7ba3.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_064_8c06bbf89103.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_065_25dba2690163.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_066_d40ad306664d.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_067_7f94d5d504e2.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_068_adcbc52015d6.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_069_729660a13d27.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_070_6a50b4c0f000.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_071_faed6f03703d.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_072_156b44d8c549.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_073_538322a6300e.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_074_1352c8899586.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_075_b687064e5ef6.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_076_3609b806702a.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_077_d395c39dc8b3.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_078_cc8542e6e58c.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_079_c70f1c5fd4b6.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_080_a24b9ff2fd17.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_081_e83e3fb7f944.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_082_cd9abd839193.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_083_a144d268383f.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_084_51f1a6aa9ff1.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_085_696c9e24d8f8.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_086_1def0890d012.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_087_adc1c8d6cd52.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_088_d9c6bc58da30.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_089_09dd4dafcc52.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_090_ea0967435d32.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_091_58c52e977021.png)

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_092_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_093_3ade3c3d8599.jpg)![](10kW_双向三相三级（T_型）逆变器和_PFC_参考设计_images/img_094_84aa944feb13.jpg)