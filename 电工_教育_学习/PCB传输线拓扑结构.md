# PCB传输线拓扑结构

原创 电路一点通 2026-05-04 19:02 广西

> 原文地址: [https://mp.weixin.qq.com/s/awuohSVQEPYxpBY0b9Gwfw](https://mp.weixin.qq.com/s/awuohSVQEPYxpBY0b9Gwfw)

## 1\. 概述

PCB内的传输线有微带线和带状线两种基本的拓扑类型。

## 2\. 概念与分类

### 2.1. 什么是微带线？

当印制板子在外层布线时，它的结构呈非对称性，称此类布线为微带线拓扑结构，其中微带线包括单微带线和埋入式结构形式。

#### 2.1.1. 单微带线

对于平面结构，微带线是暴露于空气和介质间。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_000_9211fb112da8.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_001_9e30d833df98.png)

式中，Z0是特性阻抗（欧姆）；W 是线条宽度；T 是印制线厚度；H 是信号线与参考平面的间距； C0 是线条自身的电容（pF/单位长度）；εr是平板材料的介电常数。当W与H的比值小于等于0.6时，式（4-15）的典型精度为±5%；当W与H的比值在0.6～2.0之间时，精度下降到±20%。制造 公差值 通常取在10%以内。在信号频率为1GHz以下的设计中，可以忽略印制线厚度的影响。

当W与H的比值小于等于0.6时，式（4-15）的典型精度为±5%；当W与H的比值在0.6～2.0之间时，精度下降到±20%。制造公差值通常取在10%以内。在信号频率为1GHz以下的 设计 中，可以忽略印制线厚度的影响。信号沿微带线传输的延时\[7\]为：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_002_c0cad8ff1878.png)

公式 （4-17）表明，在这个传输线中，信号的传播速度仅仅与介质材料的有效介电常数εr相关，现实工作中我用下面的软件进行阻抗的计算。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_003_f165931fc56f.png)

#### 2.1.2. 埋入式微带线

埋入式微带线在铜线上方的平面也有介质材料，这个介质材料可以是芯线、阻焊层、防形变涂料、陶瓷或所需的为达到其他功能或机械性能而使用的材料。注意，介质材料的厚度或许是不对称的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_004_468e2a96701f.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_005_eac1f762243e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_006_d122c58df082.png)

H：走线层到参考层的距离，这里我们计算的是顶层，则参考层就是GND，详细叠层看上面层叠的图。

H1:绿油的厚度，一般默认写0.5

W1：设计线宽，即我们板子上走的线宽

W：蚀刻线宽，即我们板子上走的线宽，W1=W+0.5.

T：走线所在层的铜厚

ER：介电常数，FR4的ER值一般是4.2，它的值越小，导电性能越好，越大，导电性能越差。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_007_343f35aabd85.png)

### 2.2. 什么是带状线

当印制板在内层布线时，常被称为带状线，带状线包括单、双，对称或非对称等结构形式。

#### 2.2.1. 单带状线

带状线是电路板内部的印制导线，位于两个平面导体之间。带状线完全为介质材料包围，并不暴露于外部环境。

在带状线任何布线产生的辐射都会被两个参考平面约束住。带状线能够约束磁场并减小层间的串扰，参考平面会显著地减少RF能量向外部环境的辐射。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_008_d247986a83c8.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_009_296b38834a65.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_010_c4c79cb6d2ef.png)

#### 2.2.2. 双带状线或非对称带状线

这种结构增强了布线层和参考平面之间的耦合。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_011_fd7c734646e2.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_012_ef4c35b78156.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_013_6e3fd5f9c467.png)

#### 2.2.3. 差分微带线和带状线

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_014_5f8ea7394a58.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_015_42ba74532383.png)

### 2.3. 传输延时与介电常数εr的关系

电磁波的传播速度取决于周围介质的电特性。在空气或真空中，电磁波的传播速度为 光 速。在介质材料中传播速度会降低。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_016_06e2837cb5ee.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB传输线拓扑结构_images\img_017_b08576e1c6ab.png)

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&payreadticket=HLPyeGig6k080UzIjCq7Oxx9MOg8G1znyA5Q6H9Zjs_7B-_1pGJfj-Ov2xcuZ5kVVF0sWjc&scene=21#wechat_redirect)

[硬件产品经理市场调研分析手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568392&idx=1&sn=53fba20d380e3c0eef53eac93860175b&payreadticket=HPCvB9hUVAL8gNxXJjbYTzh4qYjD3JqWxGbdoRhM8YqQRgLYG7JJCDNnI-oMewT08RhYa-U&scene=21#wechat_redirect)  

[硬件工程师校/社招笔试面试300题（PDF文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568363&idx=2&sn=d600724318d4eefb89eec226a058666a&scene=21#wechat_redirect)

[硬件研发经理工业电源新品开发指导手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568350&idx=2&sn=a0ce8ee1bcf6922c052325905ddbff9c&scene=21#wechat_redirect)

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&scene=21#wechat_redirect)

[电子元器件选型和可靠性评估手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568287&idx=2&sn=9b149b750f4f0ce0f65e5584b7c68775&payreadticket=HIk1BZHCxQOrXWS6JDJkzngSNleGYWoU6JqjjSxPoCgLqEkT7r5rhNY6LvYA1FhkI_jSzYQ&scene=21#wechat_redirect)

[主任电子工程师EMC设计与项目整改手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568271&idx=2&sn=d13f0f2ac329e2fd05f3bc9d24c23a05&scene=21#wechat_redirect)

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&payreadticket=HFjXAwUuFf6gXwOmmf611nUXFNA2IQ6ttH6ZBU90OAOvBC1f68ZuAOt7-eRh1Vw1wYXvrqE&scene=21#wechat_redirect)

[硬件经理项目瓶颈识别与解决方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567730&idx=2&sn=2fd06f74f985191e80ed327ba9e6780a&payreadticket=HASnpri0QQzAvJ5xNF_8gwSFzCBv6dpVv-qzd4NrZQdUUFI_EL7kCy_-tlRO62MVhQBEZpA&scene=21#wechat_redirect)

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️