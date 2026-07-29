# 大功率SiC MOSFET 逆变器驱动技术


> 原文地址: [https://mp.weixin.qq.com/s/ZXTOHOpNJgC6DBFtAAZqnA](https://mp.weixin.qq.com/s/ZXTOHOpNJgC6DBFtAAZqnA)

**摘要：分享一篇“大功率SiC MOSFET 逆变器驱动技术”的文章，来自株式会社田村制作所-青木弘利。主要介绍了碳化硅MOS的应用，驱动电路介绍和应用实例，帮助从业电子电器的开发者，对SiC MOSFET的应用更深的认知。**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_000_d9a5db153c71.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_001_16f13b52add8.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_002_6ba6bf6310dd.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_003_be1c13b67b68.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_004_3e1de9548361.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_005_c808f59d3121.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_006_1be09a28322e.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_007_c4b7841ca89a.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_008_a421d6ffa08e.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_009_0877293aeaed.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_010_93a54a9d77c4.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_011_9333c1ccf73f.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_012_30c3f6eb926b.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_013_e7de64e8c6f6.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_014_d7644ed48972.png)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_015_c4fd870dfad5.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_016_0e32c8baf525.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_017_20638eb766ea.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_018_6f9b9fda8df6.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_019_3f4b9fcd6414.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_020_c4bad29cf72e.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_021_2f6fb4f19a2a.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_022_6151944b9de4.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_023_d100ef9537d4.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_024_cf131f490af0.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_025_89a6afa69e73.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_026_58c745d53346.png)

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_027_ecce5de33065.jpg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_028_3ade3c3d8599.jpg)![](D:\电脑文件\公众号知识库\电力电子_宽禁带器件_SiC_GaN\大功率SiC_MOSFET_逆变器驱动技术_images\img_029_84aa944feb13.jpg)