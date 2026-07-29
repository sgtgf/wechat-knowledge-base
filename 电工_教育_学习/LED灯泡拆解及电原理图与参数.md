# LED灯泡拆解及电原理图与参数

原创 电路一点通 2024-09-07 15:33 广东

> 原文地址: [https://mp.weixin.qq.com/s/cI\_93hpbo3rFMdVW-N5vww](https://mp.weixin.qq.com/s/cI_93hpbo3rFMdVW-N5vww)

宅在家里闲来无事，拆解了一个LED灯泡，并根据实际电路板手绘出电原理图。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_000_3d92f9b998df.other)

******进大家庭⭕圈探讨回复:****** ******交流******

随后对各部位的电压电流进行了测试，结果如下：

当交流电源电压为241伏时，流过灯泡的交流电流为33.98mA,经阻容降压后输入到整流桥的交流电压为142.5V,此时整流桥输出的直流电压为149.5V，经过限流电阻加到2835灯珠两端的电压为147.9V,流过灯珠的电流为29.9mA，该灯泡标称功率为5W,电流42mA，实际测量输入功率8.155W,二极管功率4.422W。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_001_16f56972586b.jpg)

  

家里用的5W，LED灯泡。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_002_558d1cc34a5f.jpg)

根据实物绘画的电路原理图

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_003_9ed0131a16d9.jpg)

  

当输入交流电压为241伏时

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_004_e38c7cf5cc99.jpg)

  

流过灯泡的交流电流为33.98毫安

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_005_be4b13826ccc.jpg)

  

加到整流桥输入端AC之间的交流电压为142.5伏

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_006_77a03e59ba05.jpg)

  

整流桥输出端的直流电压为149.5伏

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_007_5ac2fa8bb422.jpg)

  

加到LED灯珠两端的电压为147.9伏

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_008_aff37ba34e21.jpg)

  

流过灯珠的电流为29.9毫安

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_009_6cadf22a36fa.jpg)

  

实际印刷电路板

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_010_78a19fbf0aee.jpg)

  

降压电容为CBB21，0.9微法，耐压250伏

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_011_f7648a28aa8a.jpg)

灯泡参数

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_012_55a17369e289.jpg)

此款2835灯珠工作电压为18-19伏，工作电流30毫安。

**👇👇👇更多技术资料👇👇👇**

![](D:\电脑文件\公众号知识库\电工_教育_学习\LED灯泡拆解及电原理图与参数_images\img_013_42331bb209ab.other)

## **一点通推荐**

[**_MOS管_双电源自动切换电路设计，能0压降实现？**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247517240&idx=1&sn=821e45c518db801287717b570980e969&chksm=fcef675acb98ee4c0a616b3fd3bb352ec6fcb510188c306d511e3fb9a5fd57716af1f19ec858&scene=21#wechat_redirect)

[**9V电池供电自动关机电路设计**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527863&idx=1&sn=7a4fb7ebdd36fd20775cea581203ffe0&chksm=fcef8ed5cb9807c39c49ca97bcefe651224e1e7375f902a8f87236821f201c570ccf72fe90f1&scene=21#wechat_redirect)

[**单板硬件设计指南-《硬件工程师开发手册》**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527154&idx=2&sn=b649794bb4f2f6844df7f5e1f0b0a26c&chksm=fcef8990cb9800866363a63897033536d5645f20a20cb9e3dd92c3e17c9c04cdadb09ccb7340&scene=21#wechat_redirect)    

[**_MOS管_的判别与导通条件**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520228&idx=1&sn=5996780179fbf01f66b5db0c71622ac3&chksm=fcef6c86cb98e590e3d3734ee27797bdded17b6b648b3b0d3b1599e8a4496a1fa4e457be6516&scene=21#wechat_redirect)    

[**在_MOS管_栅极前加100Ω电阻，究竟有啥妙用？**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520502&idx=1&sn=600b7167e4a7a1cae254017e5b330ecc&chksm=fcef7394cb98fa827330e1eebc5dd1a1c6e09c401ca9fe0257f29898b1750586f5761ae8be97&scene=21#wechat_redirect)  

[**电子工程师自学速成-提高篇（512页 高清pdf文档）**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523884&idx=2&sn=715054663619a1041c54f27fe0a20b4c&chksm=fcef7d4ecb98f4588a1cbdd416903beb946a126cf1d2d278c36da3b2ef364105e85958a68553&token=1494156528&lang=zh_CN&scene=21#wechat_redirect)    

[**电子工程师必备-九大系统电路识图宝典.pdf(702页）**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)    

[**开关电源环路设计与计算（45页）PDF-文档**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&chksm=fcef7882cb98f194be86616da328ea323e7516492ca890df66205a7bf73fbbfa532eb2664085&scene=21#wechat_redirect)    

[**电源反馈设计速成篇.pdf（40页）**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523709&idx=2&sn=932246205d9b7972e390a64ae8fe7736&chksm=fcef7e1fcb98f709b9afc7ab90d8513e35b0f0f4f30ead525ec8c177c63c3e22400b6b920451&scene=21#wechat_redirect)     

[**MOS管防倒灌电路设计及其过程分析,一目了然**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=1&sn=d0026d8dcd21c03249401dc82249b741&chksm=fcef9201cb981b1772a86152006757b0c8e0386836151918acd8de682aedc76b97d4f5cf4281&scene=21#wechat_redirect)  

[**DC-DC开关电源稳压芯片选用（7-40V转换5V和3.3V）**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528820&idx=1&sn=a1d1c7451788762d1b0bcae050b308ea&chksm=fcef9216cb981b00d8df8b2babe8a9bcbe990a3399bece691afb09f27fc8c862b4e9602d1571&scene=21#wechat_redirect)    

[**实用的防倒灌电路,倒灌问题如何解决?**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529385&idx=1&sn=8f10f596f10ec39e76e01c185e0e568b&chksm=fcef90cbcb9819dd5e3967fe9815969e11c54d0354414ca76c667fc9c13ea30e8a3a83cee87b&scene=21#wechat_redirect)    

[**高端MOS为什么要自举电路？自举电容、分立元件电路分析**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528852&idx=1&sn=557433281289c22922c9b1ce3d3d07ad&chksm=fcef92f6cb981be0d6afd880ea297fa338f3c7cabce8753745cb9956e217e644fbcce1bbf298&scene=21#wechat_redirect)