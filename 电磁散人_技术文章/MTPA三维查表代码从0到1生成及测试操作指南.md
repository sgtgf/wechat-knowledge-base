# MTPA三维查表代码从0到1生成及测试操作指南

原创 傅存敬 电磁散人 2025-10-31 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/jtsKqrLdBOLnNCnYhTh3mA](https://mp.weixin.qq.com/s/jtsKqrLdBOLnNCnYhTh3mA)

本周用了四天四篇文章的节奏，基于Matlab的官网Help文档，介绍了PMSM的MTPA控制从理论到实践的过程。

但有同仁讲，不是所有人都用得起matlab2025b的，能不能介绍个低配版本的？哈哈哈，这个懂得都懂。我尝试着使用一篇文章的长度，用一个低版本（2020b）的matlab，通过simulink从0到1逐步地实现一下MTPA的3DLUT代码的实现过程，测试数据就使用一个36V电动工具的标定数据，想要模型和数据处理脚本的可以直接拉到文末，对基于模型生成代码的过程感兴趣的同仁，可以跟着本文的介绍一步步操作，也可以得到属于自己的模型和代码。

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_000_b1242972e48b.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_001_0af77088819b.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_002_c56102d560a5.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_003_e46e51027efd.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_004_ef7fb6f57b30.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_005_f6d0c5e9e963.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_006_38b333e80618.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_007_dd361a4d7f3e.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_008_505e34038da9.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_009_a9c15daf969d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_010_dc043cedb592.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_011_1a7ac5aa3fdb.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_012_a4bea85ddb9f.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_013_9804126a560b.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_014_2bec74129d03.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_015_1a96b874c646.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_016_897da9de7fbb.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_017_63b0ec704990.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_018_b262944ec87d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_019_f7de3c8e3cb6.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_020_fc241be96b72.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_021_f46ca57c8faa.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_022_774fd075be26.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_023_dacdc56bcf24.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_024_ab6160fe9846.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_025_40129ffd1857.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_026_4fd39e8c7d7d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_027_5237a9f8449b.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_028_b852d1f9080d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_029_3ae4cd0e58c4.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_030_d4b34c2c54af.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_031_ba00e0490260.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_032_be856dc4ee7c.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_033_5a6c8e51a6d1.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_034_77bbfe109783.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_035_db80c1275848.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_036_b086e249c411.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_037_2b52eeff84f8.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_038_84d3fb3dc116.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_039_970b6a148e31.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_040_336b8d67812f.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_041_ff54568f13ad.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_042_4db032a4fbee.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_043_4c9ac5d51b9a.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_044_104468c32bef.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_045_5c57cee0207a.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_046_00d3a4ddb50b.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_047_bb3e6d182bb1.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_048_ad7fee9873e3.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_049_584bc895daeb.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_050_8d0fc7ff6664.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_051_64ed6a937f3a.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_052_971c7ecfe11d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_053_3b01b1d20677.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_054_3211f4036c6d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_055_860992803c9d.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_056_4f3b8e1a89de.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_057_7df56be2142c.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_058_deaf580473ed.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_059_aa7972017676.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_060_73ad3392dfdd.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_061_bc370f3a2684.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_062_1d456de97154.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_063_21328ec34ab6.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_064_9fee8abc3d83.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_065_43fa95bf053e.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_066_3ac8b41a53d5.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_067_f9fe541685b0.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_068_3b811e9ca788.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_069_7dce276c3592.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_070_ec5820dce233.png)

![](MTPA三维查表代码从0到1生成及测试操作指南_images/img_071_8c3ce401b47a.png)

  

模型链接：https://pan.baidu.com/s/1v6n4Wuu\_WZmbz40i\_Iod2w?pwd=y8ek 提取码: y8ek