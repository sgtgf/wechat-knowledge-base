# Boost升压电路图解看得明白不复杂


> 原文地址: [https://mp.weixin.qq.com/s/yXMuGWhGeJyXQXDVETOC\_Q](https://mp.weixin.qq.com/s/yXMuGWhGeJyXQXDVETOC_Q)

Boost升压电路看起来不复杂，但真正做项目时，最容易踩坑的往往不是公式，而是工作过程、元器件能力和PCB布局。  
  
这篇主要讲清楚几个问题：  
  
MOS导通时，输入先给电感储能；  
MOS关断后，电感释放能量，与输入一起推向输出，电压才被抬高。  
  
理想情况下：  
  
VOUT ≈ VIN ÷（1-D）  
  
但实际输出还会受到芯片最大占空比、开关限流、电感饱和电流、二极管压降、器件损耗和散热影响。  
  
所以芯片资料写“4A”，不代表输出端就能稳定提供4A。升压倍数越高，通常能带的输出电流越需要保守评估。  
  
另外，#Boost电路 对PCB布局也比较敏感：  
  
功率回路尽量短而粗；  
输入电容靠近VIN和GND；  
电感、二极管、输出电容靠近芯片；  
SW节点面积不要太大；  
反馈走线远离SW和电感。  
  
会画原理图只是第一步，能不能稳定带载，还得看选型、布局和实际测试。  
  
你们做Boost电路时，最容易遇到的是输出掉压、纹波大，还是芯片发热？  
  
来源:Ian的硬件调试笔记

![图1](Boost升压电路图解看得明白不复杂_images/img_000_7c537cf5ef89.jpg)

图1

![图2](Boost升压电路图解看得明白不复杂_images/img_001_d3603480cb6d.jpg)

图2

![图3](Boost升压电路图解看得明白不复杂_images/img_002_6bf4e650c343.jpg)

图3

![图4](Boost升压电路图解看得明白不复杂_images/img_003_f78c7349f76d.jpg)

图4

![图5](Boost升压电路图解看得明白不复杂_images/img_004_43c927d2d112.jpg)

图5

![图6](Boost升压电路图解看得明白不复杂_images/img_005_1fe7ca1bd54b.jpg)

图6

![图7](Boost升压电路图解看得明白不复杂_images/img_006_543c8cf894a5.jpg)

图7

![图8](Boost升压电路图解看得明白不复杂_images/img_007_fe21b9f441b8.jpg)

图8