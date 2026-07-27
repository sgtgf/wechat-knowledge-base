# Step by Step：在PSIM中复现H\_PWM\_L\_ON模式下的BLDC电机控制器自举电容电压泵升

原创 傅存敬 电磁散人 2025-09-25 22:21 广东

> 原文地址: [https://mp.weixin.qq.com/s/tP3LDRNr0c9joDlTeNz5og](https://mp.weixin.qq.com/s/tP3LDRNr0c9joDlTeNz5og)

前文已介绍了BLDC电机控制器中，MOSFET驱动芯片上的自举电容会发生电压泵升的[原因及应对措施](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484026&idx=1&sn=e596b36d98e6b58a5b22e6ce4ecc32b5&scene=21#wechat_redirect)，特别分析了电压泵升的[暂态过程](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484033&idx=1&sn=daef79f20987913c3121245dc42038f9&scene=21#wechat_redirect)，并通过PSIM仿真软件给出了仿真结果与实测结果的对比，仿真结果与实测结果匹配良好，因此可以通过数字模型来提前预测物理实体的性能，对工程师的实战具备一定的指导意义。前文详述了[如何在PSIM中从0到1搭建MOSFET的驱动IC芯片的模型](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484091&idx=1&sn=e93cc98dc0faedb963ec175a712b2a0c&scene=21#wechat_redirect)，本文在此基础上，继续详述如何在PSIM中从0到1搭建具有H\_PWM\_L\_ON调制模式的BLDC电机控制器模型，并通过解读仿真结果，提升读者对自举电容电压泵升的根因的认知。

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_000_10b810f5a33f.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_001_62551abd9c42.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_002_33924d163a6d.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_003_c3935e4e4760.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_004_b874d4016ddf.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_005_37e4e1038946.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_006_416ccf48d59f.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_007_87474468b67f.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_008_3dcc4ae11a3f.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_009_15f8f6ececca.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_010_c1c07efd6ca8.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_011_e8638a791ceb.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_012_43dc7bfb2838.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_013_4386129a9185.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_014_c9713090f956.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_015_78269ffe8771.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_016_fab57a451e98.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_017_a2f50dcbda0b.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_018_a1e946f9d2a1.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_019_0f41648e943f.png)

![](Step_by_Step_在PSIM中复现H_PWM_L_ON模式下的BLDC电机控制器自举电容电压泵升_images/img_020_3729f43a0b83.png)

  

模型获取链接：

https://pan.baidu.com/s/1\_T0vzKrcjfHzMbuC0QJpGw?pwd=um6d 提取码: um6d