# ESD静电实验与人工电源网络使用要点

原创 电路一点通 2026-01-07 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/xq1qj-uRGo6RlX0NTOAEtw](https://mp.weixin.qq.com/s/xq1qj-uRGo6RlX0NTOAEtw)

ESD静电枪的供电接地线，一定要接地：

## **一点通推荐**

[硬件-DCDC（BUCK）电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247563969&idx=1&sn=1284ffff3ca162eac43f4c113fb85fbf&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[3.3V与5V电压双向变换，PWM转电压到电流变换](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247564031&idx=1&sn=e3dcc5f84b342319cf3c95f562213b71&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[电感的饱和现象](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247563530&idx=2&sn=4a01ff9ee352b3c2e5e4a360ddf78497&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[STM32电机驱动板参数采集与处理](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247562259&idx=2&sn=e1d587318a3a55ff8ad2cac7b41e26d8&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[硬件工程师5年踩过的坑,可让新人少走弯路?](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247561932&idx=1&sn=726e23d4e8e2af638b11d3aaa7b961c6&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[200例电路，专治实操卡壳困境--“常用直流稳压电源电路应用”](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247561117&idx=1&sn=52cb24eca5cd8807dc2b6ce7ceb02fab&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_000_df3360c8b44c.png)

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_001_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

静电枪的线缆不要打卷，成圈的话会形成电感：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_002_8a7eb92f232f.png)

接触放电用尖头，空气放电用平头：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_003_dc576368f387.png)

塑料外壳的非接地设备接触放电之后，需要用放点毛刷刷一下用来泄放电荷：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_004_6819b255f76b.png)

## 屏蔽布的功效：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_005_8dd7bfbd7f71.png)

加完屏蔽布之后：（接触放电不会重启）

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_006_c26e050b4619.png)

### 排线部分最好加一些TVS管，不然很难过接触放电：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_007_26857edbfb45.png)

### 板子的空余部分打上地过孔：

对于高速信号或射频电路，通过地过孔连接上下层的地平面，形成**回流路径**，减少信号环路面积，从而降低EMI（电磁干扰）。对于高速信号或射频电路，通过地过孔连接上下层的地平面，形成**回流路径**，减少信号环路面积，从而降低EMI（电磁干扰）。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_008_76bc4e6cf84a.png)

ESD测试的时候，需要水平耦合板和竖直耦合板，上面再加一些绝缘胶垫：

在ESD测试中，我们需要评估静电放电可能对设备造成的影响，而放电不仅会直接作用于设备（接触放电、空气放电），还可能通过**耦合效应**间接影响设备。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_009_988ad41a6921.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_010_a4906b8d23dd.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_011_076b14c24b79.png)

电子产品能被用户接触到的地方，需要做接触放电实验；不能接触到的地方，需要做空气放电实验

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_012_dec55b180f62.png)

【ESD入门2-打静电的类别和位置】https://www.bilibili.com/video/BV1f897Y9E5y?vd\_source=3cc3c07b09206097d0d8b0aefdf07958

从右向左：隔离变压器，EMI接收机，EMC试验箱

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_013_bb910be7e82d.png)

人工电源网络的漏电流比较大，所以需要使用隔离变压器接入电源：

-   **AMN内部有大电容对地**

-   AMN的主要作用是提供稳定的阻抗（例如50Ω），同时将电网噪声与EUT（被测设备）隔离。
    
-   但AMN内部通常包含**高容量对地电容**（如0.25μF~4.7μF），这会导致较大的**泄漏电流**，特别是在高频下。
    

-   **存在Y电容路径**

-   AMN输入端的共模滤波电容（Y电容）与地之间形成泄漏通路，导致交流漏电流增加。
    

-   **测试环境需要浮地**

-   由于AMN本身接地，如果EUT的地电位不同，可能会导致漏电流流过EUT外壳，影响测试准确性。
    

首先，需要使用一根导线连接隔离变压器和人工电源网络：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_014_05b25192094f.png)

把隔离变压器的电源线插入插座：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_015_a9ed28fe2251.png)

把人工电源网络的电源线连接到隔离变压器的输出插座上去：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_016_fcee8dd7a7bd.png)

被测设备的电源连接到人工电源网络的电源输出端：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_017_30ba6f66ae1c.png)

电容容值越小，对高频杂波的抑制效果越明显：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_018_9be04e9f95ae.png)

【1.电磁干扰滤波器件验证实验】https://www.bilibili.com/video/BV1Be411V7P3?vd\_source=3cc3c07b09206097d0d8b0aefdf07958

**能在一定程度上实现缓启动**，但效果取决于 **R4 和 C6 的 RC 时间常数**。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_019_f4e5bec0597b.png)

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ESD静电实验与人工电源网络使用要点_images\img_020_583ecf83b7f1.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️