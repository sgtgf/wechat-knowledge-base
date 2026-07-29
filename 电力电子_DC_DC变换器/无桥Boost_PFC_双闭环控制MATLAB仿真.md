# 无桥Boost-PFC 双闭环控制MATLAB仿真

原创 电路一点通 2025-05-12 11:35 广东

> 原文地址: [https://mp.weixin.qq.com/s/o6VaBkXJZ2SpRlK6QA-3Eg](https://mp.weixin.qq.com/s/o6VaBkXJZ2SpRlK6QA-3Eg)

## 一、无桥Boost-PFC原理概述

无桥 Boost-PFC（Power Factor Correction，功率因数校正）的工作原理是通过特定的电路结构和控制策略，对输入电流进行校正，使其与输入电压同相位，从而提高电路的功率因数，并将输入电压升压到所需的输出电压。以下是其详细的工作原理：

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

### **1.电路结构基础**：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_001_cba9b1057d67.png)

-   无桥 Boost-PFC 电路可以看成由两组对称的传统 Boost 电路组成。以基本的无桥 Boost-PFC 电路为例，它主要由两个电感（L1 和 L2）、两个功率开关管（Q1 和 Q2）以及两个二极管（D1 和 D2）组成。这两组电路分别对应交流输入电压的正半周和负半周的工作状态。
    

### 2.电路工作模态分析

1.  **正半周工作过程**
    
    ：
    

-   当交流输入电压处于正半周时，电感 L1 和功率开关管 S1 所在的支路处于工作状态。此时，功率开关管S1 按照一定的占空比进行高频的导通和关断操作。
    
-   在 S1 导通期间，交流输入电源通过电感 L1 和导通的 S1 、S2的体二极管形成回路，电感 L1 储存能量，电流逐渐增加。此时二极管处于反向截止状态。
    
-   在 S1 关断期间，电感 L1 中储存的能量通过二极管 D1 向负载释放，同时与输入电源一起向负载供电，输出电压升高，实现了升压功能。并且由于在正半周内对电流的控制，使得输入电流能够跟随输入电压的变化，从而实现功率因数校正。
    

3.  **负半周工作过程**
    
    1：
    

-   当交流输入电压处于负半周时，情况与正半周相反。此时电感 L2 和功率开关管 S2 所在的支路开始工作，S2 进行高频的导通和关断操作，而 S1 处于续流状态。
    
-   在 S2 导通期间，交流输入电源通过电感 L2 和导通的 S2、S1的体二极管形成回路，电感 L2 储存能量。二极管处于反向截止状态。
    
-   在 S2 关断期间，电感 L2 中储存的能量通过二极管 D2 向负载释放，与输入电源一起为负载供电，输出电压继续维持在较高水平，同时也实现了负半周的功率因数校正。
    

5.  **实现功率因数校正的原理**
    
    ：
    

-   通过对功率开关管的高频控制，使得电感在不同的时间段内进行储能和释能，从而控制输入电流的波形和相位。在理想情况下，经过校正后的输入电流波形应与输入电压波形同相位，并且接近正弦波，这样就可以大大提高电路的功率因数，减少无功功率，提高电能的利用效率。
    

总之，无桥 Boost-PFC 利用两组 Boost 电路在交流输入的正负半周分别工作，省掉了传统 Boost-PFC 电路中的整流桥，降低了二极管的导通损耗，提高了电路的效率，但同时也增加了电路的控制复杂性。

## 二、无桥Boost-PFC 双闭环控制MATLAB仿真

### 1.仿真模型

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_002_3df2abda9e4c.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_003_c12575b3a598.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_004_8f7ee4e601e2.png)

### 2.模块参数

**模块**

**参数**

**输入电压**

**380\*sqrt(2)V 50Hz**

**限流电阻**

**1E-3Ω**

**电感**

**0.2E-3H**

**二极管体电容**

**10e-12F**

**输出电容**

**1E-3F**

**开关频率**

**100KHz**

**输出电压**

**666V**

平均电流采样方法：三角载波峰值采样。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_005_995fad3dcf99.png)

  

在这次试验中，我将会在不同功率下查看输出电压和输入电流的情况，看输出电压达到稳态的情况，看输入电流的谐波以及相位。负载电阻以及输入输出电流的计算结果如下：

功率

输出电压

负载电阻

输出电流

输入电流

7000W

666V

63.4Ω

10.5A

26.1A

6000W

666V

74Ω

9A

22.3A

5000W

666V

88.7Ω

7.5A

18.6A

4000W

666V

110.8Ω

6A

14.8A

3000W

666V

147.8Ω

4.5A

11.2A

2000W

666V

221.8Ω

3A

7.4A

1000W

666V

443.6Ω

1.5A

3.7A

### 3.7000W

#### 3.1.输出电压

输出电压较快达到稳态。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_006_e8d6968b760e.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_007_183371c68196.png)

#### 3.2.输入电流

输入电流谐波为5.51%。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_008_ab3a0f2dbfbb.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_009_969be3cb318a.png)

### 4.6000W

#### 4.1.输出电压

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_010_240e733623de.png)

#### 4.1.输入电流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_011_8906c96dba68.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_012_bfe0be81d9ff.png)

### 5.5000W

#### 5.1.输出电压

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_013_7514ac76ce59.png)

#### 5.1.输入电流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_014_bdbac6cd7b76.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_015_921691e5ee5a.png)

### 6.4000W

#### 6.1.输出电压

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_016_bc126c7b394a.png)

#### 6.1.输入电流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_017_879f1f146c23.png)

### ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_018_cde30e2122d4.png)

### 7.3000W

#### 7.1.输出电压

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_019_556a67a86472.png)

#### 7.1.输入电流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_020_d6f5e6e7a731.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_021_fd2b2b79dc39.png)

### 8.2000W

#### 8.1.输出电压

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_022_81ce3a5a3310.png)

#### 8.1.输入电流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_023_29da8ee32517.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_024_a10c9d2074b5.png)

### 9.1000W

#### 9.1.输出电压

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_025_b0b739505508.png)

#### 9.1.输入电流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_026_5931076fbad9.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_027_b8736f62d794.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_028_8fe37d63ac03.png)

### 10.总结

功率

THD

7000W

5.51%

6000W

6.31%

5000W

7.42%

4000W

8.93%

3000W

12.27%

2000W

18.20%

1000W

34.22%

-   2000W的情况下，在一个周期内，DCM出现的情况占比为10%，但是电流下降过程中都在零点几乎无停留；
    

1.  0-5.4°、167.4°-185.4°、357.4°-360°的时候出现DCM。
    

-   1000W的情况下，在一个周期内，DCM出现的情况占比为38%，电流下降过程中电流值降为0并有较长时间处于0的情况占比29%；
    

1.  0-32.4°、144°-212.4°、324°-360°的时候出现DCM情况。
    
2.  0-27°、154.8°-207.4°、334.8°-360°的时候出现DCM较严重的情况。
    

根据上述的实验可以得出，当我在电感不改变 ，MOSFET开关频率不改变的情况下，逐渐增加负载电阻的大小，导致输出电流降低、输出功率降低、负载变轻，进而导致了输出电压达到稳态所需的时间变长，输入电流的谐波增大，输入电流更发散，在2000W和1000W的时候输入电流甚至出现了严重的DCM模式，在我的模型中我电流平均值的取值方法是取的电流上升过程中或者下降过程中中点的位置作为平均电流，这样的取值方法在CCM下是有效的，在DCM模式下是不准确的，因此这个模型在低功率工作情况下仍有问题。第二个问题就是内环电流环和外环电压换的PI参数不是最优的，电流波形放大看较明显的波动。

### 11.查看THD的方法

1.我们要看哪一个电路电流的THD，那么就在此处接一个电流表，然后再把电流接到示波器上。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_029_127eddcb7bb7.png)

2.点开示波器左上角的设置按钮，在Loggong界面设置如下，名字随便取。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_030_a1096f661ae1.png)

3.点开powergui的Tools界面，再点击FFT分析。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_031_7ab26bca6939.png)

4.选中我们要查看电流的示波器，然后设置开始时间、周期、基波频率、最大频率等，即可查看电流THD。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_032_9bb36e08b5b4.png)

  

  

声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，原文链接 https://blog.csdn.net/Fourglsl/article/details/143685350

  

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[一种电源突然掉电的检测方式](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546291&idx=1&sn=0405d03e95f8218202606d290e85aef8&scene=21#wechat_redirect)**
    
-   **[降压电路24V转12V，2个NPN三极管实现](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546287&idx=4&sn=aed1f8c4094552bcbdd5209801633b9e&scene=21#wechat_redirect)**
    
-   [新能源汽车高压上下电流程](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247519868&idx=1&sn=cfdd920a22064aec479f15ceebd161ae&scene=21#wechat_redirect)
    
-   [【太全了】选车修车攻略（汽车品牌架构、参数、品牌](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247519756&idx=1&sn=8e3e29b8a0e035e17261fc0a43f6d5b2&scene=21#wechat_redirect)
    

-   [电子元器件检测只需训练9天功夫-314页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257575&idx=1&sn=212855c1a6b0ea2e18f8d17f901415f6&scene=21#wechat_redirect)
    
-   [电工从基础入门到精通篇（全彩图解)](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257578&idx=1&sn=47aadd10269aebab72bfb56f53204733&scene=21#wechat_redirect)
    
-   [电气控制电路识图自学通](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257587&idx=2&sn=76fb249639501b5cefd2d2813f453577&scene=21#wechat_redirect)
    
-   [西门子S7-200PLC从入门到精通双色版](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257733&idx=1&sn=0a1e7ac0697ca551d81e2df15459c24f&scene=21#wechat_redirect)
    
-   [电气识图入门笔记-143页pptx【直接领取、下载】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257708&idx=1&sn=f8fa4426a9cb241488683a3cf2ce16f0&scene=21#wechat_redirect)
    
-   [零基础看图学电气控制线路](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257754&idx=2&sn=2079167c41e1a90559fab4125a2b8140&scene=21#wechat_redirect)
    

**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\无桥Boost_PFC_双闭环控制MATLAB仿真_images\img_033_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**