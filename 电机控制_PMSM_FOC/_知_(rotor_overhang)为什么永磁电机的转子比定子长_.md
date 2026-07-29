# 【知】(rotor overhang)为什么永磁电机的转子比定子长？

原创 Mr 晋 玩转电机设计 2023-01-03 08:17 四川

> 原文地址: [https://mp.weixin.qq.com/s/dUyMoxzLMH12yjjrGYnXLQ](https://mp.weixin.qq.com/s/dUyMoxzLMH12yjjrGYnXLQ)

**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_000_cf8012decbd7.png)

**overhang**，英文单词，动词、名词，作动词时意为“悬垂，悬于……之上；（危险、邪恶等）逼近，威胁”，作名词时意为“突出部分，伸出物；外伸量，突出量；过剩（物），积压（物）”。  rotor overhang 转子长于定子。

* * *

**哪些电机常见转子比定子长？**

小功率永磁电机

表贴式磁钢转子  

铁氧体、橡胶磁、注塑磁、粘结磁等低成本、低剩磁磁钢

* * *

**转子比定子长有什么用？**  

在最小的空间和成本下获得最大的磁链（一般两端伸出定子长度相同）

作为霍尔的磁极（霍尔端磁铁伸出更长）  

* * *

**为什么转子比定子长？**  

定子加长，整机长度会变长  

转子加长，整机长度不会加长；

转子长的成本低于定子长；

转子长，利用端部绕组；  

转子长，弥补磁钢端部漏磁；

外转子的铁芯(磁轭)还会长于磁钢，降低铁芯饱和度；

* * *

**转子比定子长多少合适？**

一般转子磁钢overhang长度超过8倍气隙宽度后，基本就没有增加磁链的效果了。  

* * *

**怎么快速仿真？**

overhang结构的磁路不仅有径向磁路，还有轴向磁路，需要3D电磁场才能精确仿真，然而3D仿真非常耗时。如果要进行参数化设计或者优化设计，3D仿真基本不能接受，还是借助2D模型更效率。怎样精确的建立overhang结构的2D模型？  

* * *

**外转子overhang结构的等效建模**  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_001_3d997dcbbe5a.png)

轴向长度:转子铁芯(磁轭)＞磁钢＞定子铁芯

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_002_baacff685cb3.png)

三维磁通矢量图

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_003_3648861ecc6b.png)

**体积等效  
**

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_004_10705880a396.png)

方程(1)表示磁能。Wm和wm分别为磁能和磁能密度。**B**和**H**分别是磁通量密度和磁场强度的矢量。Bm和Hm分别为永磁体工作点的磁通密度和磁场强度。基于等式(1)进行等效。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_005_03e6e16f84fa.png)

2D模型长度ls为定子铁芯长度，体积相同，长度按定子铁芯长度，修正永磁体的截面积，可以得到永磁体的内径和外径。  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_006_a93229fe8484.png)

V是转子铁芯的体积，同样基于体积等效，计算长度为定子铁芯长度时的转子铁芯的内径(等于修正后的磁钢外径)、外径。修正后的尺寸如下：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_007_c67809a2abec.png)

修正前后的2D磁场对比：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_008_1443dce3007b.png)

修正后的二维分析模型中转子铁芯不发生磁饱和，未修正模型的转子磁轭饱和严重。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_009_a4e9091c852b.png)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_010_5abf49b6d597.png)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_011_4640a6db8138.png)

修正2D模型的仿真结果和3D仿真结果、台架测试结果的偏差都不大。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_012_655bf5b68412.png)

在精度可接受的情况下，2D模型的仿真计算时间是3D模型的1.5%。

* * *

**你是怎样等效overhang结构的？哪一种方式更准？**  

* * *

_参考文献：_

_“Experimental Verifification and 2D Equivalent Analysis Techniques of BLDC Motor With Permanent Magnet Overhang and Housing-Integrated Rotor Core__”_ _Hyo-Seob Shin, Kyung-Hun Shin, Gang-Hyeon Jang, Seong-Kook Cho, Kyung-Hun Jung,and Jang-Young Choi，_  

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿！

  

长按图片，识别二维码，关注我哟

  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\_知_(rotor_overhang)为什么永磁电机的转子比定子长__images\img_013_15ce4c0e67b3.png)