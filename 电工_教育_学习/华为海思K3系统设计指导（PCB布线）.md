# 华为海思K3系统设计指导（PCB布线）

原创 电路一点通 2025-01-03 11:49 广东

> 原文地址: [https://mp.weixin.qq.com/s/-qiuZXraGoHQjHxgeUs-cQ](https://mp.weixin.qq.com/s/-qiuZXraGoHQjHxgeUs-cQ)

**目录**

2.1 单板工艺   介绍单板的 PCB 工艺。

2.2 层叠和布局   介绍单板的参考层叠以及布局。

2.3 电源和时钟   介绍单板的参考电源分配以及时钟结构。

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_000_ac6d85e0e2d9.other)

**2.1 单板工艺**

单板布线工艺主要取决于手机单板的硬件规格、高密度芯片的封装工艺，以及 PCB 成本和性能的考虑。K3 解决方案 PCB 设计推荐的单板工艺设计如下：

z 建议采用 HDI（High Density Interconnection）埋盲孔工艺，1 阶 8 层或 1 阶 10 层设计。

z 推荐的 PCB 布线规则如下：

− 最小盲孔规则：孔径 5mil/盘径 12mil。

− 最小埋孔规则：孔径 8mil/盘径 20mil。

− 最小线宽/线间距：BGA 局部采用 3mil 线宽/3mil 线间距，其他 4mil 线宽/4mil线间距。

− 最小线与孔，孔与孔间距：4mil。

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_001_20e0efb5da60.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_002_6d73cef598db.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_003_ed4a94aa231a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_004_e0499c85dac2.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_005_28b5b8b17700.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_006_4a7f6838c0ba.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_007_a45c9963620b.png)

2.3.1.3 BUCK 电源设计

Hi3611 提供的 BUCK 电源为前馈式，反馈电阻和前馈电容均集成在芯片之内，单板上需要提供储能电感和输出电容等元器件。

在 BUCK 电路的设计上，需要注意：

z BUCK 的参考地上会有较多的开关噪声，因此参考地不适宜和敏感信号的参考地（如音频地）直接相连。设计中 BUCK 的参考地 PGND 和输出电容应该就近接到主地平面。

z 两路 BUCK 的储能电感之间要注意磁性线圈的互感。如果两个储能电感位置较近，需要使两个线圈的绕线方向处于正交的关系，绝对不可以使线圈绕线方向平行。

z BUCK1、BUCK2 从电容端返回芯片管脚 VO 的反馈信号，其电流较小，如布线空间紧张可以采用 4mil 的细线互连。但 BUCK3 的反馈信号还作为 Hi3611 内部局部模块供电使用，需采用 8mil～10mil 的线宽。反馈信号走线应尽量短，而且不能从电感下方穿过。

z BUCK 输出到电感储能端以及供电干路的线宽必须保证在 20mil 以上。

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_008_2a5deb715f5c.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_009_47841508d272.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_010_38da910e7d43.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_011_9d508d860628.png)

华为海思K3参考设计PCB布线参考-56页.pdf

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_012_2d6684a1096e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_013_dadfeea3976d.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为海思K3系统设计指导（PCB布线）_images\img_014_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [硬件、嵌入式硬件知识-目录篇](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535490&idx=2&sn=083e9afe1418cf98d9f131c0d91b1102&scene=21#wechat_redirect)
    
-   [声光控制电路图解（50例）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535323&idx=2&sn=6d4174feee88665e24eebe1e44fe8c70&scene=21#wechat_redirect)
    
-   [常用反馈控制电路：锁相环PLL、自动增益AGC、自动频率AFC](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534828&idx=3&sn=951260d7b082f114c5b52b62bbd0d115&scene=21#wechat_redirect)
    
-   [华为电源岗位笔试，高频题目总结](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247530314&idx=1&sn=43ff3d49e3e84cc053a88328890027da&scene=21#wechat_redirect)  
    

分享💬点赞👍在看❤️