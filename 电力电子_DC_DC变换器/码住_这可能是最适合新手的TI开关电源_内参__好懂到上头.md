# 码住！这可能是最适合新手的TI开关电源‘内参’，好懂到上头

原创 王工 硬件笔记本 2025-09-23 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/DOhCvpWwI27GpB5JRgWfsg](https://mp.weixin.qq.com/s/DOhCvpWwI27GpB5JRgWfsg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

大家好！之前我们分享过TI的《LDO基础知识》，今天带来的是它的“好兄弟”——**《****开关电源基础知识》**！同样是TI官方出品，**图文并茂、通俗易懂**，特别适合咱们电子新手入门，老手温故而知新！

这份《开关电源基础知识》电子版共**39页**，内容非常系统，**为防止大家"收藏＝学会"**，下面我就带大家快速过一遍重点内容，文末还附有**完整PDF获取方式**哦！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksTs0lRa0IliaXplqy0dYNIbjBsV4RTav78OnH1h2qDxNjzqWCVEicXVIw/640?wx_fmt=png&from=appmsg)

  

011

第一章：开关电源基础知识

### 什么是开关电源？

简单说，它就是通过**快速开关MOS管**来控制能量传递，实现高效稳压的电源。相比LDO（线性稳压器），开关电源**效率高、发热小**，适合**输入输出电压差大**的场合。

实现稳压需要一个控制系统（负反馈）。从自动控制理论我们知道，当电压上升时通过负反馈把它降低，当电压下降时把它升上去，这样就形成了一个控制环路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksENY0a6vSdfFdosQUlVuRKH21huY04xI5UM7CaiaJfQtVjsr2zaKXRUQ/640?wx_fmt=png&from=appmsg)

  

### 开关电源 vs LDO

-   **LDO**：简单、安静（噪声小），但体积大，效率低，发热大。
    
-   **开关电源**：体积小，效率高（可达90%以上），支持升压/降压/反压，但噪声大，设计复杂。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksQqaiamlMCCewSNk1aT1ibCcE8KuVtDK4FOIqh6ZTOGepybzEnHujL5eQ/640?wx_fmt=png&from=appmsg)
    
      
    

### 常见拓扑结构：

-   **Buck（降压）**：输出比输入低
    
      
    输出电压关系式为：Vo = Vin × D（D为占空比）  
    工作原理：开关导通时，能量从输入向输出传递，电感储存能量；开关关断时，电感通过续流二极管维持电流。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksbynPM5OECKdRMoibqNhzeRvWgDJibR2WK9gG4VkHpuTdCAzt27osDUag/640?wx_fmt=png&from=appmsg)

  

-   **Boost（升压）**：输出比输入高
    

输出电压关系式为：Vo = Vin / (1-D)  
工作原理：开关导通时，电感储存能量；开关关断时，电感能量与输入能量叠加向输出供电。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksibo0rsMtLDcQAfxcv8uD1HXmqdm14myzIStADTSEgUnTgEOyIBMR9tQ/640?wx_fmt=png&from=appmsg)

  

-   **Buck-Boost**：可升可降，还能反相
    

输出电压关系式为：|Vo| = Vin × D/(1-D)  
当D=0.5时，Vo=Vin；当D<0.5时，Vo<Vin；当D>0.5时，Vo>Vin

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksqICE6UM8PW1HyLK1xtP8W3TyiabFMGB3GVM9wD7q7f9e12N1BE14dGQ/640?wx_fmt=png&from=appmsg)

小贴士：有时候我们会在开关电源后面再加一个LDO，既能高效降压，又能获得干净稳定的电压！

  

021

第二章：效率与Vout的关系

效率不是固定值！它与**输出电压Vout**密切相关。

一般来说：

-   **占空比越大，效率越高**
    
-   **输出电压越大，效率越高**
    

电源的效率公式：η = Pout / (Pout + Pd)，其中Pout为输出功率，Pd为耗散功率。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCkskkuPFYFns4hcGwsUm7yibGvahQ3FhH4H3F7jtlQmzaREfl0cFX3j1gw/640?wx_fmt=png&from=appmsg)

通过实际计算可以发现：  
假设输入5V，输出1A

-   当Vout=3.3V时，效率可达95%
    
-   当Vout=1V时，效率可能只有88%
    

由此可见，输出越大（即占空比越大），效率就越高。所以设计时要根据实际输出选择合适的拓扑和工作点。

  

031

第三章：同步 vs 非同步

在应用中，只有一个上管开关的就是非同步的，上下管都有场效应管的就是同步的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCkstj7q8UVhOlPhvMyicyZNcZXpibCLPheicTEMC1eI0tkfO9XDM5VstQ2ow/640?wx_fmt=png&from=appmsg)

#### 非同步特点：

-   使用**二极管**续流
    
-   输出电流变化时，二极管的电压降恒定
    
-   效率较低（二极管有压降）
    
-   成本较低
    
-   适合高输出电压应用
    

  

#### 同步特点：

-   使用**MOS管**代替二极管
    
-   导通电阻Rds\_on非常小（毫欧级别）
    
-   效率较高
    
-   需要额外的控制电路
    
-   成本较高
    
-   适合低输出电压、大电流应用
    

  
**选择建议**：  
对于低输出电压，采用同步的效果非常明显，影响效率的主要就是续流二极管的损耗；对于较高的VOUT，采用同步还是非同步差别不大。

  

041

第四章：隔离式 vs 非隔离式

### 隔离大家应该都知道，就是输入输出电气连接，主要起到一个保护作用。

### 非隔离式：

-   如Buck、Boost、Buck-Boost
    
-   结构简单、体积小、成本低
    
-   **输入输出不隔离**，有触电风险，抗干扰差
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksarCRZopUoJwu0meOOqNq4kbkzZEwZ4V6qPYsaiaTsqkHcJzaX23chsg/640?wx_fmt=png&from=appmsg)

  

### 隔离式：

-   如反激、正激、半桥、全桥
    
-   通过**变压器**隔离，安全、抗干扰强
    
-   体积大、成本高、设计复杂
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCkstwHkSmjhZ60PFN2nzH0uk3ZdpbMsZjh25riatw2nJgDzkLzUFscf4Ng/640?wx_fmt=png&from=appmsg)

**应用场景**：  
隔离电源常用在家电、工业设备、医疗设备等对安全要求高的场合。

  

051

第五章：脉宽调制（PWM） vs 脉冲频率调制（PFM）

PWM和PFM是两大类DC-DC转换器架构，每种类型的性能特征不同。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksicR7DBSgapa5xg28KwBETAk3aHHN0zz9R0pfm3w9ZcfbcXXu0BjsPKQ/640?wx_fmt=png&from=appmsg)

### PWM：

-   固定频率，调节脉冲宽度
    
-   重负载效率高，噪声小
    
-   轻负载效率低
    

### PFM：

-   固定脉宽，调节频率
    
-   轻负载效率高
    
-   噪声大，EMI难处理
    

现代芯片大多支持**双模式**：重载用PWM，轻载自动切换PFM，兼顾效率和噪声。

  

061

如何获取完整PDF？

以上内容只是精选了部分重点进行介绍，**详细内容还需参看完整PDF文档**。

这份《开关电源基础知识》共39页，内容非常详细，包含大量电路图、波形图和工作原理讲解，适合**自学、培训或作为工具书**收藏。

如何下载《**开关电源基础知识**》，更好的学习开关电源设计

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|**开关电源基础知识**

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCksUqO3xYFcq8j010zlYtaPXOyn2C09oJIibY1ibDvIYa5WyrjGIriaiayNzw/640?wx_fmt=png&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgiaiaBC3Ffr0dVbNC6a9FCks77Q9BT3WJvI9xkhiaiaVl2xVpBCcvehNBbQUP1Kb9jserQN3xooDwOuw/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。