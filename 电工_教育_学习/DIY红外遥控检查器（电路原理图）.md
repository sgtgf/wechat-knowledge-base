# DIY红外遥控检查器（电路原理图）

原创 电子爱好者 电路一点通 2024-07-30 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/tzAZM4TGPLvCMsrLAym4JA](https://mp.weixin.qq.com/s/tzAZM4TGPLvCMsrLAym4JA)

## 适用于任何红外线发射设备

## 3V电池供电

* * *

### 电路原理图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\DIY红外遥控检查器（电路原理图）_images\img_000_6ef1d6d210a4.png)

### 组成元件：

R1\_\_\_\_\_\_\_\_\_\_\_\_\_470K 1/4W 电阻器  
R2\_\_\_\_\_\_\_\_\_\_\_\_\_\_47R 1/4W电阻  
  
D1\_\_\_\_\_\_\_\_\_\_\_\_\_\_LED（任意尺寸、形状和颜色）  
  
Q1\_\_\_\_\_\_\_\_\_\_\_\_红外光电晶体管（任何便宜类型）  
Q2\_\_\_\_\_\_\_\_\_\_\_\_BC327 45V 800mA PNP 晶体管  
  
SW1\_\_\_\_\_\_\_\_\_\_\_\_SPST 拨动开关或滑动开关（可选，参见注释）  
  
B1\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_3V 电池（2 x 1.5V AA、AAA 或更小型号的电池串联）

#### 注释：

当 LED 发光时，电路的电流消耗小于 1mA，而当光电晶体管未拾取任何信号时，电路的电流消耗为 0mA：因此，可以省略 SW1。

  

#### 点评：

一个非常简单的设备可以快速检查常见的红外遥控器，这对经常被要求维修或测试这些无处不在的设备电子爱好者很有用。  

  
设计了一个可靠的电路，包含少量元件：按下任何遥控器按钮时，LED 都会闪烁。遥控器带有红外发光二极管的一侧必须朝向检查器电路的光电晶体管 (Q1)：最大距离不应超过约 20 - 25 厘米。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DIY红外遥控检查器（电路原理图）_images\img_001_f76d26393f9a.png)

## **一点通推荐**

[](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)[【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
[9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)  

[【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&chksm=fcef85adcb980cbb95db2e91177eeb03e4dc2dfcddf7021dc2d0d3a2321a91164236e9575840&token=970346432&lang=zh_CN&scene=21#wechat_redirect)  
[【华为】初级电子工程师必备手册（上117页 、下82页）PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525856&idx=2&sn=9d302f4f4d508e08bba6a10567a638cf&chksm=fcef8682cb980f94cac6c9b7f51d1041c17e5896d4c0cb3049417a2a76b9e375324bb5715b56&scene=21#wechat_redirect)  
[【热议】硬件工程师中年危机之路是如何走？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525398&idx=1&sn=5c2d31960b18e681103755a8562e7801&chksm=fcef8774cb980e62b7b19f663c639cd8f5ad360a088284faef53e224825ee2b8bc4a41695b1d&scene=21#wechat_redirect)