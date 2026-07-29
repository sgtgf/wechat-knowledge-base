# 以太网的EMC、EMI测试，以及原理图和PCB设计建议

原创 TI 硬件笔记本 2025-07-09 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/qzJVCcOyXVESgaBwTTIW7Q](https://mp.weixin.qq.com/s/qzJVCcOyXVESgaBwTTIW7Q)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

分享一份TI的PDF文档，共41页。主要介绍以太网的EMC/EMI 测试、以及测试失败时，优化原理图和布局设计以提高 EMI/EMC 测试性能的指导。

下载方式见文末。  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_002_221884c778d1.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_003_c1f7644b4723.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_004_49e44d5b4515.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_005_105c8d308704.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_006_17427b498ffb.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_007_f17c03a8feb3.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_008_6ad13a4a8b4d.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_009_fee50e2e7712.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_010_14ed6a6e7dbb.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_011_664195fea17d.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_012_ebc71956f094.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_013_fc88b5604588.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_014_d9a860151549.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_015_c6937b89ca4a.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_016_b2c3c56e11ce.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_017_b636be64a4f5.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_018_cf278c9acfc4.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_019_d67cd9487094.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_020_da48825b09ba.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_021_c57a7b319013.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_022_28ab30632452.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_023_1bd884bfa135.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_024_1486a26c2df1.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_025_3548551433d9.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_026_5004597e0166.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_027_d09cf4b93b87.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_028_2548b818091a.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_029_d14cc1a139ee.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_030_fe138cbac0fb.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_031_b82fedbe00cd.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_032_107489f7dfad.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_033_2c22cccbe6be.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_034_6fb6f9ff68ff.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_035_8350bccefd71.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_036_bca88229ef58.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_037_6ae8332f093c.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_038_e8ea8617580b.png)

  

大家可以在TI官网下载，也可以在公众号《硬件笔记本》后台回复“以太网”，会自动弹出下来链接。  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_039_d80c0ceada74.png)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_040_2ad8f20422d7.jpg)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\以太网的EMC_EMI测试_以及原理图和PCB设计建议_images\img_041_9340808e2a6d.jpg)

## 

**声明：**

  

声明：PDF来源TI。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。