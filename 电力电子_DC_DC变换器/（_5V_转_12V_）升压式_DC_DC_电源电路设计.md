# （ 5V 转 12V ）升压式 DC/DC 电源电路设计

原创 电子料哥 电路一点通 2026-05-27 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/l2dkPa5wJTfQE\_QkHuGtWw](https://mp.weixin.qq.com/s/l2dkPa5wJTfQE_QkHuGtWw)

## 设计任务与总体思路

本设计以 MC34063 直流升压模块为核心，构建一套 5V 输入、12V 输出的升压式 DC/DC 电源电路。利用 MC34063 内置的 PWM 控制电路和大电流输出开关，配合少量外围元器件（电感、二极管、电容、电阻），即可实现完整的升压变换功能，并通过调节反馈电阻比值精确设定输出电压。

⬇️⬇️推荐⬇️⬇️



[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&subscene=142&subscene=&scenenote=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2Fmpj0VDgrXWfBK2hMSiPO_w%3Fpayreadticket%3DHOGzNv1ZoEqq33txsEOffONbJSLFMXRt89HWg76WfUAbCSj60xfP_i4lR9DZgHVgYs5cibE&nolastread=1#wechat_redirect)

[企业管理](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzNDg1MDk4OQ==&action=getalbum&album_id=4460634611412516868&scene=142#wechat_redirect)

## MC34063 芯片概述

MC34063 是一款应用广泛的单片双极型线性集成电路，专用于 DC-DC 变换器控制部分，片内包含温度补偿带隙基准源、占空比周期控制振荡器、驱动器和大电流输出开关，能输出 1.5A 的开关电流。其核心特性如下：

-   **输入电压范围**：2.5 ~ 40 V
    
-   **输出电压可调范围**：1.25 ~ 40 V
    
-   **最大输出开关电流**：1.5 A
    
-   **工作频率范围**：100 Hz ~ 100 kHz（由外接定时电容设定）
    
-   **保护功能**：内置过流保护（7 脚电压超过 300 mV 触发）和热关断保护（典型 150°C）
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（_5V_转_12V_）升压式_DC_DC_电源电路设计_images\img_000_ad88c4301f01.png)

  

MC34063 的引脚定义如下：

引脚

名称

功能说明

1

SC

内部开关管 Q1 集电极引出端

2

SE

内部开关管 Q1 发射极引出端

3

TC

定时电容 CT 接线端，调节电容可改变振荡频率

4

GND

电源接地端

5

COMP

比较器反相输入端，输出电压取样端（接反馈电阻分压）

6

VCC

电源输入端

7

IS

峰值电流取样端（6、7 脚间接电流采样电阻，压降超 300 mV 时触发限流保护）

8

DC

驱动管 Q2 集电极引出端（在基本升压应用中通常悬空或短接至 VCC）

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（_5V_转_12V_）升压式_DC_DC_电源电路设计_images\img_001_95cd1f7e50e4.png)

MC34063 外围电路仿真

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（_5V_转_12V_）升压式_DC_DC_电源电路设计_images\img_002_3f06cce77a44.png)

电路输出模块

 电路使用 5V 供电, 利用 MC34063 进行升压, 最终可输出直流 + 12V 电压, 达到了设计要求。 此外, 在电源两端加入不同负载, 电路输出不随负载的变化而改变。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（_5V_转_12V_）升压式_DC_DC_电源电路设计_images\img_003_98db865e2e9c.png)

升压式 DC / DC 电源电路的整体电路原理图

测 试,输 入 + 5V 直 流 稳 压 电 源, 经 过 升 压 式 DC / DC 电 路, 输 出 电 压 为+ 12V。 设计要求输出电压 + 12V, 实测基本符合设计要求。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\（_5V_转_12V_）升压式_DC_DC_电源电路设计_images\img_004_7d7f9705298d.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️