# 电流采样电路设计：差分放大与ADC采集

原创 电路一点通 2025-06-29 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/gL8S9\_CHOn0y1RArwvEoZg](https://mp.weixin.qq.com/s/gL8S9_CHOn0y1RArwvEoZg)

### **1\. 引言**  

在电机控制、电源管理、电池监测等应用中，电流采样是一个关键环节。通常，我们使用小阻值的采样电阻将电流信号转换为电压信号，再通过运放放大后送入ADC进行采集。本文将详细分析一种基于差分放大器的电流采样电路，包括信号放大、参考电压偏置、滤波保护以及ADC转换计算等内容。

[![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\电流采样电路设计_差分放大与ADC采集_images\img_000_6e8cd2bd4fd3.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

### **2\. 电路分析**

![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\电流采样电路设计_差分放大与ADC采集_images\img_001_9f09f4fb996b.png)

#### **2.1 采样电阻与信号获取**

-   **采样电阻**：0.02Ω（20mΩ），流经电流 II 时产生压降：
    
    VU=I×0.02VU=I×0.02
    
-   **差分信号**：由于采样电阻两端电压可能浮动，需采用差分测量方式（而非单端对地测量）。
    

#### **2.2 差分放大电路**

-   **运放配置**：U4A 构成差分放大器，输入为 VUVU 和参考电压 VCC1.25=1.25VVCC1.25=1.25V。
    
-   **放大倍数计算**：
    
    Diff=RfRin=12kΩ1kΩ+1kΩ=6Diff=RinRf=1kΩ+1kΩ12kΩ=6
    
-   **运放输出**：
    
    Vout=6×VU+Vref=6×0.02×I+1.25V=0.12I+1.25VVout=6×VU+Vref=6×0.02×I+1.25V=0.12I+1.25V
    

-   **1.25V 偏置作用**：提供零电流基准，使ADC可检测正负电流（如电机正反转）。
    

#### **2.3 ADC采集与电流计算**

-   **ADC输入**：VoutVout 经过RC低通滤波（去噪）和ESD保护（防静电）后送入ADC。
    
-   **电流计算公式**：
    
    I=VADC−1.25V0.12I=0.12VADC−1.25V
    
-   **动态范围**（假设ADC参考电压2.5V）：
    

-   最大正向电流：(2.5V−1.25V)/0.12=10.42A(2.5V−1.25V)/0.12=10.42A
    
-   最大负向电流：(0V−1.25V)/0.12=−10.42A(0V−1.25V)/0.12=−10.42A
    

* * *

### **3\. 关键设计考虑**

#### **3.1 电阻匹配与精度**

-   差分放大器的精度取决于 RfRf 和 RinRin 的匹配程度，建议使用0.1%精度的电阻。
    
-   采样电阻（0.02Ω）应选择低温度系数（如锰铜合金）以减少温漂影响。
    

#### **3.2 共模抑制比（CMRR）**

-   运放的CMRR需足够高（如>80dB），以抑制共模噪声（如电源干扰）。
    

#### **3.3 低通滤波设计**

-   RC滤波截止频率 fc=12πRCfc=2πRC1，通常设置为高于信号带宽（如10kHz）但低于开关噪声频率（如PWM频率100kHz）。
    

#### **3.4 参考电压稳定性**

-   1.25V参考电压（如TL431或专用基准源）需低噪声、低温漂，否则会导致零电流漂移。
    

* * *

### **4\. 实际应用与优化**

#### **4.1 校准方法**

1.  **零点校准**：在零电流时，测量ADC输出并存储偏移量。
    
2.  **增益校准**：施加已知电流（如1A），调整软件计算系数。
    

#### **4.2 扩展动态范围**

-   若需更大电流范围，可：
    

-   降低差分增益（如改为Diff=3，Vout=0.06I+1.25VVout=0.06I+1.25V）。
    
-   提高ADC参考电压（如3.3V）。
    

#### **4.3 PCB布局建议**

-   采样电阻走线应尽量短，采用开尔文连接（Kelvin Sensing）减少寄生电阻影响。
    
-   模拟部分（运放、ADC）与数字部分（MCU）隔离，避免噪声耦合。
    

* * *

### **5\. 总结**

本文分析了基于差分放大器的电流采样电路，涵盖信号放大、ADC采集、滤波保护及计算校准方法。该方案适用于电机控制、电池管理等高精度电流检测场景，关键点在于电阻匹配、参考电压稳定性和噪声抑制。

#### **关键公式回顾**

-   运放输出：Vout=0.12I+1.25VVout=0.12I+1.25V
    
-   电流计算：I=VADC−1.25V0.12I=0.12VADC−1.25V
    

#### **适用场景**

-   电机相电流检测
    
-   电源电流监控
    
-   电池充放电管理
    

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [电路中产生负电压的多种方法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548546&idx=1&sn=e2f5c3248c000c3184f0ca2f9983917d&scene=21#wechat_redirect)
-   [3种短路保护电路（UC3842开关电源）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548071&idx=1&sn=d70f75a7685e5ce615f629daa5e22d32&scene=21#wechat_redirect)
-   [汽车机械原理动图大全:传动轴、万向器、差速器......](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522680&idx=1&sn=b1aad53046f2ba9bfdd6d236983d96d0&scene=21#wechat_redirect)
-   [吉利汽车生产基地分布、集团架构、车型图谱](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522594&idx=1&sn=cd5860b229e8ccf15fa989e3be98417c&scene=21#wechat_redirect)
-   [电气基础知识及识图方法培训-88页【ppt系列教材】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456258450&idx=2&sn=f175a337d42305a3e048271e70f57c47&scene=21#wechat_redirect)  
    

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\电流采样电路设计_差分放大与ADC采集_images\img_002_bb0f9a21658f.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️