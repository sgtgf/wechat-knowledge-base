# 【教研室成果】SJ：基于时间反演定位、识别亚波长非合作目标


> 原文地址: [https://mp.weixin.qq.com/s/YAKB-OCmiau9KKiAJ2n6Ig](https://mp.weixin.qq.com/s/YAKB-OCmiau9KKiAJ2n6Ig)

  

论文信息

* * *

  

题目：

Simultaneous Localization and Recognition of Subwavelength Noncooperative Entities Based on SISO Time Reversal and Neural Networks

作者：

Yinchen Wang, Yu Duan, Yuqi Ye, Ren Wang, Biao Li, Bin Jiang, Xin Liu, and Bing-Zhong Wang

单位：

1 Institute of Applied Physics, University of Electronic Science and Technology of China (UESTC), Chengdu 611731, China.

2 Communication Information Security Control Laboratory, No. 36 Research Institute of CETC, Jiaxing 314033, China.

出版信息：IEEE Sensors Journal, 55(13): 23372 - 23381, 2025; DOI: 10.1109/JSEN.2024.3517607 

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnU0YbK4l1dRlN5PFPwq3g2UCFEHviafJRHdQHGIPezx0pAQDtKWlg79cA/640?wx_fmt=png)

论文摘要

* * *

  

在复杂多散射环境中，使用简化系统对亚波长非合作实体进行同时定位与识别仍然是一个巨大的挑战。本文通过协同整合时间反演时频相位纹（TRTFPPs）与神经网络来解决这一挑战。首先，采用时间反演（TR）单输入单输出（SISO）框架来生成TRTFPPs。随后，利用神经网络来理解这些TRTFPPs。具体而言，我们采用了一种级联神经网络结构，包含一个识别网络和用于定位不同实体的独立网络。通过所设计的方法，我们通过金属实体的数值模拟以及金属和非金属实体的实验测试，实现了同时的亚波长识别与定位。所提出的方法适用于各种电磁系统，包括但不限于探测、成像、人机交互和物联网（IoT）。

图文导读

* * *

  

在6G和物联网时代，室内高精度定位与识别是传感器网络的关键任务。然而，现有方法在以下三个关键指标中往往只能满足部分：同时实现定位与识别、达到亚波长精度、适用于非合作目标。现有技术（如SISO雷达、MIMO雷达、UWB雷达等）受限于衍射极限，无法同时满足上述三个条件。本文旨在同时解决这三个挑战。

本论文提出了一种结合时间反演时频相位纹（TRTFPP）和级联神经网络（RLCNN）的方法：

1\. TRTFPP 生成：在金属腔或多散射环境中，使用单发单收（SISO） 天线系统。通过时间反演技术获取信号的时频相位信息，形成具有位置和形状敏感性的TRTFPP。不同目标（如圆柱体、立方体）或同一目标在不同位置会生成不同的TRTFPP。

2\. 数据增强：对接收信号添加不同强度的高斯噪声，增强神经网络的鲁棒性。

3\. 神经网络结构（RLCNN）：使用级联网络：识别网络：判断目标是圆柱体还是立方体。定位网络：分别对圆柱体和立方体进行位置预测（x, y 坐标）。每个子网络仅包含一个全连接层，结构简单，计算资源需求低。

该论文的重要图片如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUialQ2cT2jTsbUYSzJCcQUkiadkKJg3apaE2pjia8QcpaJOCQSLNZ1undg/640?wx_fmt=png)

整体方法示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUHGa4COicSBEu7iaSQCFYnXeqjXibS4N30ys1aibxl9IslHNeu9uuvVYGPQ/640?wx_fmt=png)

处于相同位置的 (a) 立方体和 (b) 圆柱体的TRTFPPs。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUdld09MROenPjDV01d0frHZnVtjrkgnRsVanQ2e5rTBlqKHp1GxZNOw/640?wx_fmt=png)

实验室环境与实验照片：(a) 网格与目标物，被识别和定位的物体包括一颗葡萄、一片瓜、一个金属圆柱体和一个金属球体；(b) 实验示意图，两天线通过电缆与矢量网络分析仪连接，网格与目标物位于两天线之间；(c) 整体实验室环境。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaXic1VpJS257NuPMjQD7dsnUo0553uvnnXlSyK4sgKPuKvzTSULcLTLPsSXneuUY99vpGIjNA1L00w/640?wx_fmt=png)

定位和识别的实验结果。

论文总结

* * *

  

该论文通过 TR-SISO + TRTFPP + 级联神经网络的组合，实现了在复杂多散射环境中对亚波长非合作目标的同时高精度定位与识别，系统结构简单、适用性广。未来的研究方向包括更精细的定位方式、动态目标处理、以及更复杂环境下的泛化能力提升。论文结论总结如下：

（1）仿真验证：单目标识别准确率：100%；定位精度最高可达 λ/32（约3.75 mm）；多目标在复杂散射环境中仍保持高精度。

（2）实验验证：在金属腔和实验室环境中均有效；适用于金属和非金属目标（如金属球、葡萄、瓜片）；所有实验中的识别与定位准确率均达到 100%。

（3）系统优势：仅需SISO系统，结构简单；适用于非合作目标，无需目标配合；具备亚波长精度，突破衍射极限。

* * *

  

【本文特别声明】

本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：10.1109/JSEN.2024.3517607\]