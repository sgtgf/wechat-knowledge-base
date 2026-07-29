# Trench shielded Gate MOS优点

原创 电路一点通 2024-12-12 11:35 中国香港

> 原文地址: [https://mp.weixin.qq.com/s/YOQWEL9\_tD4Vyhc8LWMSsQ](https://mp.weixin.qq.com/s/YOQWEL9_tD4Vyhc8LWMSsQ)

随着时间的推移，MOS技术和晶圆结构发生了巨大的变化。从技术角度来看，平面栅(Planar Gate)、沟槽栅(Trench Gate)结构已成为高性能离散功率MOS的主流。沟槽栅(Trench Gate)结构可以显著降低沟道电阻(Rchannel)和JFET电阻(RJFET)，沟槽栅结构能提供最短的Drain到Source电流路径, 减少Rdson的能力。

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\Trench_shielded_Gate_MOS优点_images\img_000_a8b37a87b291.other)

而沟槽屏蔽栅(Trench shielded Gate)结构是在沟槽栅(Trench Gate)结构基础上发展起来的，图1为两种结构的对比，沟槽屏蔽栅结构将栅极进一步向下埋。

![](D:\电脑文件\公众号知识库\电工_教育_学习\Trench_shielded_Gate_MOS优点_images\img_001_cfa0257af6c3.jpg)

图1-Trench Gate and Trench shielded Gate

沟槽屏蔽栅(Trench shielded Gate)结构的优点，有如下几点：

1)能获得更低的Rdson，从而能够减小导通损耗，如图2所示；

![](D:\电脑文件\公众号知识库\电工_教育_学习\Trench_shielded_Gate_MOS优点_images\img_002_01c562321c60.jpg)

图2-Rdson comparison

2)减小Gate和Drain接触面积，即减小Cgd，对应的Qg减小，从而减小开关损耗，如图3所示；

![](D:\电脑文件\公众号知识库\电工_教育_学习\Trench_shielded_Gate_MOS优点_images\img_003_4f35c730c516.jpg)

图3-Cgd comparison

3)屏蔽栅结构相当于内置了RC吸收电路，即Rshield，CDrain-Shield和CGate-Shield，有助于降低Vds的尖峰电压，也有利于降低EMI，如图4所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\Trench_shielded_Gate_MOS优点_images\img_004_6c01273f86e9.jpg)

图4-内置RC of Trench shielded Gate

另一方面，从晶圆的结构来看，随着时间的发展，每一代的晶圆尺寸都在变小，也会进一步降低Rdson和Cgd，从而能够进一步降低损耗，提高效率和功率密度。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Trench_shielded_Gate_MOS优点_images\img_005_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [4-20mA 电压控制电流输出电路研究分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535391&idx=1&sn=9233704bb41c2dcb30d78bd024a9c0e9&token=1223188967&lang=zh_CN&scene=21#wechat_redirect)    
    
-   [比亚迪组织架构和产业布局图，25届应届生还要不要去？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535323&idx=1&sn=7dc18ed6d014e51af4f78ec3a1c2f8d2&scene=21#wechat_redirect)    
    
-   [电子电路设计--负电源电路原理、负电压](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535254&idx=1&sn=dfc8309f803b74c18aea2104cbd9724c&scene=21#wechat_redirect)    
    
-   [硬件工程师入门基础元器件与电路原理](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534998&idx=1&sn=af9f184e13e9054d3b107fed3b46ccd4&scene=21#wechat_redirect)    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分