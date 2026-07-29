# PFC电感计算


> 原文地址: [https://mp.weixin.qq.com/s/59aTicR0Xm46V7QVOKqWKQ](https://mp.weixin.qq.com/s/59aTicR0Xm46V7QVOKqWKQ)

作者：周洁敏（南京航空航天大学）

PFC电感是功率因数校正（Power Factor Correction）电路中的核心储能元件，用于强制输入电流波形跟踪电压波形，提升功率因数并减少电网谐波污染。‌‌

核心定义与作用

‌本质‌：PFC 电路中的关键电感器，分为‌无源 PFC 电感‌（工频大电感）和‌有源 PFC 升压电感‌（高频储能电感）两类 。

‌主要功能‌：利用电感“电流不能突变”的特性，平滑并整形输入电流，使其接近正弦波且与电压同相位，将功率因数从 0.7 左右提升至 0.99 以上 。

‌应用场景‌：广泛存在于开关电源（如电脑电源、充电器、LED 驱动、服务器电源）的整流桥之后、DC-DC 变换之前 。‌‌

两种主要类型对比

‌无源 PFC 电感‌

‌结构‌：由硅钢片叠压绕制的大型工频电感，体积大、重量重 。

‌原理‌：利用感抗补偿相位差，被动改善功率因数。

‌性能‌：功率因数仅约 0.7~0.8，无法消除高次谐波，不支持宽电压输入 。

‌适用‌：低功率（通常<300W）或对成本极度敏感的低端设备 。‌‌

‌有源 PFC 升压电感‌

结构‌：采用磁粉芯或铁氧体绕制的高频电感，体积小巧，配合MOSFET和控制IC工作 。

‌原理‌：在 Boost 等拓扑中作为储能元件，通过高频开关控制强制电流跟踪电压 。

‌性能‌：功率因数可达 0.98~0.999，支持 90V-264V 宽电压输入，显著减少电网干扰 。

‌适用‌：中高端电源、大功率设备及符合严格电磁兼容标准（如IEC61000-3-2）的产品 。‌‌

关键特性要求

有源 PFC 电感需同时满足‌大直流偏置下不饱和‌（承受基波电流）和‌高频低损耗‌（承受开关纹波）的双重严苛要求，常选用铁硅铝等磁粉芯材料 。其电感量设计需根据工作模式（连续 CCM、临界 CrM 或断续 DCM）、输入电压范围及输出功率精确计算，以防止磁饱和导致电路失效 。‌‌

![图片](PFC电感计算_images/img_000_00e824751721.jpg)

![图片](PFC电感计算_images/img_001_132f12b215b3.jpg)

![图片](PFC电感计算_images/img_002_922cf698dee4.jpg)

![图片](PFC电感计算_images/img_003_dcb263469e06.jpg)

![图片](PFC电感计算_images/img_004_8e311c1773fd.jpg)

![图片](PFC电感计算_images/img_005_dfee4ca3391a.jpg)

![图片](PFC电感计算_images/img_006_d4af3bddddc5.jpg)

![图片](PFC电感计算_images/img_007_d2c2551a4829.jpg)

![图片](PFC电感计算_images/img_008_486ceef1496a.jpg)

![图片](PFC电感计算_images/img_009_2af9f94874a2.jpg)

![图片](PFC电感计算_images/img_010_d00802b57f32.jpg)

![图片](PFC电感计算_images/img_011_af196940d804.jpg)

![图片](PFC电感计算_images/img_012_a6da8eaf3473.jpg)

![图片](PFC电感计算_images/img_013_d6341f5ce44a.jpg)

![图片](PFC电感计算_images/img_014_66e66988ab77.jpg)

![图片](PFC电感计算_images/img_015_fd530722c542.jpg)

![图片](PFC电感计算_images/img_016_e779af37c2d2.jpg)

![图片](PFC电感计算_images/img_017_206be6198a77.jpg)

![图片](PFC电感计算_images/img_018_c7ee21f4c449.jpg)

![图片](PFC电感计算_images/img_019_f44b62b8a271.jpg)

![图片](PFC电感计算_images/img_020_1d6c97730bcd.jpg)

![图片](PFC电感计算_images/img_021_1ba381dee9bb.jpg)

![图片](PFC电感计算_images/img_022_15fef007a894.jpg)

![图片](PFC电感计算_images/img_023_3797959428b1.jpg)

![图片](PFC电感计算_images/img_024_f63bfcb220a8.jpg)

![图片](PFC电感计算_images/img_025_c036468dad6c.jpg)

![图片](PFC电感计算_images/img_026_bfb946027c99.jpg)

![图片](PFC电感计算_images/img_027_5f4920d1d26d.jpg)

![](PFC电感计算_images/img_028_b021db46090a.png)

![图片](PFC电感计算_images/img_029_378300f31b63.jpg)

![图片](PFC电感计算_images/img_030_e801711957a9.jpg)

![图片](PFC电感计算_images/img_031_41117e6db920.jpg)

![](PFC电感计算_images/img_032_3b8ec60f9274.jpg)

![图片](PFC电感计算_images/img_033_a3c7648c8bc7.jpg)

![图片](PFC电感计算_images/img_034_128828216be6.jpg)

![图片](PFC电感计算_images/img_035_cc139bcf5c4d.jpg)

![图片](PFC电感计算_images/img_036_0492a4282bad.jpg)

![图片](PFC电感计算_images/img_037_3a1291d318b1.jpg)

![图片](PFC电感计算_images/img_038_1421256f7bd9.jpg)

![图片](PFC电感计算_images/img_039_4e9eee3b7fba.jpg)

![图片](PFC电感计算_images/img_040_00ca261eeac0.jpg)

![图片](PFC电感计算_images/img_041_679bc4650005.jpg)

![图片](PFC电感计算_images/img_042_a77433a8c4c5.jpg)

![图片](PFC电感计算_images/img_043_6530ff11903a.jpg)

![图片](PFC电感计算_images/img_044_6a816193c4c3.jpg)

![图片](PFC电感计算_images/img_045_7907eef71a51.jpg)

![图片](PFC电感计算_images/img_046_9a0368d4a506.jpg)

![图片](PFC电感计算_images/img_047_748ae9545b95.jpg)

![图片](PFC电感计算_images/img_048_40fd1da2bf87.jpg)

![图片](PFC电感计算_images/img_049_ac9c5364529b.jpg)

![图片](PFC电感计算_images/img_050_bc00dd0cb28e.jpg)

![图片](PFC电感计算_images/img_051_b0c19e5c4634.jpg)

![图片](PFC电感计算_images/img_052_3bc33aad61d7.jpg)

![图片](PFC电感计算_images/img_053_35691fe073b4.jpg)

![图片](PFC电感计算_images/img_054_39bd31968425.jpg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](PFC电感计算_images/img_055_da194447cd09.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](PFC电感计算_images/img_056_945c2e88dd74.jpg)

![图片](PFC电感计算_images/img_057_482da0378a66.jpg)

![图片](PFC电感计算_images/img_058_a141923eff3d.jpg)