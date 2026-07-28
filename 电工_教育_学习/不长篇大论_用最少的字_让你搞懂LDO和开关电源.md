# 不长篇大论，用最少的字，让你搞懂LDO和开关电源

原创 王工 硬件笔记本 2025-07-25 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/QkoVFS-OZL5kVf3ThI7nCA](https://mp.weixin.qq.com/s/QkoVFS-OZL5kVf3ThI7nCA)

### **点击上方名片关注了解更多**

### 

在电源设计里，**线性稳压器（LDO）**和**开关电源（SMPS）**是最常用的两种方案。但到底该用哪个？它们有什么区别？今天就用最直白的大白话给你讲清楚！

  

011

线性稳压器（LDO）：简单但低效

### **工作原理**

LDO 的核心思想就是“**牺牲电压换稳定**”。比如你有一个12V输入，想要3.3V输出，LDO 会通过内部的晶体管（相当于可变电阻）把多余的8.7V“吃掉”，变成热量散发掉。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0xXrohMM8lxT2c1g4rubic7f7AREj8AlMibJDW8ADtmAosG7BBrvpK3tg/640?wx_fmt=png&from=appmsg)

  

**优点：**  
**1、超简单**：通常只需要输入、输出电容和反馈电阻就能工作。  
**2、超低噪声**：没有开关动作，输出几乎没纹波，适合音频、射频等敏感电路。  
**3、瞬态响应快**：内部反馈环路快，负载突变时电压恢复迅速。  
**4、低压差**：有些LDO的输入输出压差可以低至20mV，适合电池供电设备。

  

**缺点：**  
❌ **效率低**：比如12V转3.3V，效率只有 **27.5%**，剩下72.5%全变热量！  
❌ **发热大**：电流大了必须加散热片，否则直接过热保护或烧毁。  
❌ **只能降压**：没法升压或反相（比如+12V转-5V）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx074rT4D7gdbARCAVtmNVe4O7Vgic38jZrxZibophZhMxVOX8N5VyjOiaqQ/640?wx_fmt=png&from=appmsg)

**适用场景：**

-   小电流、低噪声应用（比如传感器、运放供电）；
    
-   输入输出电压接近（比如5V转3.3V）；
    
-   对成本敏感、不想折腾复杂设计的场合。
    

  

  

021

开关电源（SMPS）：高效但复杂

### **工作原理**

开关电源的核心是“**高频开关+电感储能**”，通过快速开关MOS管，配合电感和电容滤波，把输入电压“切碎”再重组，得到想要的输出电压。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0CzMLyMj5dhlUFNIKW9BDiaGs6QleiccZ6ovoOKJMgQzPG74SgWOViacfA/640?wx_fmt=png&from=appmsg)

  

**优点：**  
**1、****效率高**：比如12V转3.3V，效率轻松 **90%+**，发热小很多！  
**2、****支持升降压**：Buck（降压）、Boost（升压）、Buck-Boost（升降压）都能做。  
**3、****适合大电流**：几十安培的CPU供电基本都是开关电源。

**缺点：**  
❌ **设计复杂**：要选电感、MOS管、补偿环路，新手容易翻车。  
❌ **有开关噪声**：高频开关会产生EMI，对敏感电路可能有干扰。  
❌ **瞬态响应慢**：相比LDO，负载突变时电压恢复稍慢（但可以通过优化改善）。

**适用场景：**

-   大电流应用（比如CPU、GPU供电）；
    
-   输入输出电压差大的情况（比如24V转5V）；
    
-   对效率要求高的场合（比如电池供电设备）。
    

  

  

031

参数对比及实际设计要点

1、参数对比

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjetdbuuNsFhaqLVUsObIx0QLOz2zn8JIIXoKShfLbMnun4ibGDVZksa3wUWHBTMJKEGUlhKvwUTGw/640?wx_fmt=png&from=appmsg)

  

2、实际设计要点

### **LDO要点**

-   **散热问题**：比如12V转5V@1A，损耗 **(12-5)×1=7W**，不加散热片直接冒烟！
    
-   **不能随便并联**：普通LDO并联会电流不均，但像 ADI的**LT3080** 这种带均流功能的可以。
    

  

### **开关电源要点**

-   **注意电感选型**：电感太小会导致储能不足，带载能力差，发热严重甚至电路异常；电感过大则会使响应变慢，影响动态性能。
    
-   **注意PCB布局**：高频开关路径没处理好，轻则效率暴跌，重则EMI超标。
    
-   **注意环路参数调试的稳定性**：补偿没调好，电源可能会振荡，或者响应巨慢。
    

## 

041

总结

**1、要简单、低噪声？** → 选LDO（但注意散热！）；

**2、要高效、大电流？** → 选开关电源（但得花时间调）；

**3、****输入输出压差小？** → LDO可能更划算；

**4、输入输出压差大？** → 果断开关电源。

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjAibVIhHVt3yXrTqSa9wZm2o7mRIXS1x2kJxib2Bo4pdzrliaNsgV2FIFkaLGt3czYuPRUGePz9AqTQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjAibVIhHVt3yXrTqSa9wZm23QZw7KqPdZ2z45x3C67iaphsb4aicwtqxubaHth4KtQXuS1DZgtUibRVg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。