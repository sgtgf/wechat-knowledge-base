# 西安理工大学：SiC MOSFET短路保护技术综述


> 原文地址: [https://mp.weixin.qq.com/s/CtGg-8bkVKls8UDa3XMV8g](https://mp.weixin.qq.com/s/CtGg-8bkVKls8UDa3XMV8g)

作者：文阳

**摘要：**为了全面介绍SiC MOSFET短路保护技术，加深对短路故障的理解，为科研与技术人员在高频、高效率电力电子场合更好地使用SiC MOSFET器件提供借鉴，西安理工大学自动化与信息工程学院、西安思源学院工学院的研究人员文阳介绍了SiC MOSFET不同短路类型以及短路测试方法，分析SiC MOSFET短路失效模式及失效机理，详细梳理现有SiC MOSFET短路检测与短路关断技术的原理与优缺点，对现有SiC MOSFET短路保护技术在应用中存在的问题与挑战进行讨论，并展望SiC MOSFET短路保护技术的发展趋势。

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_000_13ed165eb94b.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_001_ca7b4b5f4c5d.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_002_962dc19546e0.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_003_3ede85a592b7.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_004_b5aea1ae83eb.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_005_195608b939de.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_006_1679c919230e.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_007_ef3bdb5156c3.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_008_eb00908f9b1d.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_009_5a4ec45e02b4.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_010_28ff01243901.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_011_ee4d7ead0321.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_012_dfc673e8de2a.jpg)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_013_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_014_3ade3c3d8599.jpg)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\西安理工大学_SiC_MOSFET短路保护技术综述_images\img_015_84aa944feb13.jpg)