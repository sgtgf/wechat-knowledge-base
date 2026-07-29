# BUCK电路（12-5V）

原创 电路一点通 2026-01-17 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/fx96jhVOdxR\_YgoVEdvPUg](https://mp.weixin.qq.com/s/fx96jhVOdxR_YgoVEdvPUg)

## **BUCK电路**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK电路（12_5V）_images\img_000_5e5e321dde01.png)

（1）组成：开关管Q1、续流二极管D1、电感L1、电容C1和负载R1。

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK电路（12_5V）_images\img_001_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

（2）工作原理：

1）开关管导通阶段：当开关管Q1导通时，输入电源V1通过开关管Q1向电感L1和负载R1供电，电感L1存储能量，电流逐渐增大，同时电容C1充电。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK电路（12_5V）_images\img_002_d16556e7c6ff.png)

2）开关管关断阶段：开关管Q1关断后，电感L1中存储的能量通过续流二极管D1继续向负载供电，维持负载电流的连续性，电感电流逐渐减小。电容C1也会释放能量，稳定输出电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK电路（12_5V）_images\img_003_beaa64eac5bf.png)

3）通过控制开关管Q1的导通时间（占空比D），可以调节输出电压V2(V2=V1\*D)。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK电路（12_5V）_images\img_004_126a68fa385f.png)

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK电路（12_5V）_images\img_005_683ddd70c3d9.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️