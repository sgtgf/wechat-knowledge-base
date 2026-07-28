# Buck/Boost、反激/正激、半桥/全桥…这本经典把各种拓扑的裤衩都给扒明白了

原创 王工 硬件笔记本 2025-09-30 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/rD98kvzTYES9lPNeOCs2jQ](https://mp.weixin.qq.com/s/rD98kvzTYES9lPNeOCs2jQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

咱们做硬件的，尤其是跟电源打交道的同行，大概都有过这种经历：面对一个棘手的电源问题，折腾好几天都找不到症结所在。今天要给大伙儿推荐一本经典书籍——《开关电源设计》（第三版），或许能够给你一些帮助。

文末附540页完整版PDF文档获取方式。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25S8y7231t3Ry8Xer5yiaa9qVJIneUaGGzWnBm2icJ9KWAsnWH60dAwPvnw/640?wx_fmt=jpeg)

  

011

书籍特色

现在做电源设计，光是会算算电感电容已经不够了。随着功率密度要求越来越高，效率要求越来越严，还要考虑EMI、热设计等各种问题，没有一个系统的知识体系真的很难搞定。这本书最大的优点就是直接从工程实践出发，涵盖了各种拓扑原理的讲解。

它覆盖了电源工程师日常工作中需要用到的几乎所有拓扑结构。从最基本的Buck、Boost、反激，到正激、半桥、全桥，甚至更复杂的谐振变换器，每种拓扑都有详细的工作原理分析、关键波形解读和设计实例。

特别是磁性元件设计这部分，很多工程师都觉得头疼，这本书用整整一章的篇幅，从磁芯选型到绕组设计，都给出了特别实用的计算方法。

  

021

作者简介

这本书的作者Abraham Pressman是美国知名的电源顾问和专家，曾经做过军事雷达军官和四十多年的模数设计工程师，书中充满了实战经验。

另一位作者Keith Billings更是电源行业的资深专家，他在磁元件设计方面的经验尤其宝贵。书中有大量设计实例，都是来自实际的工程案例。

  

031

目录解读

下面，咱们就一起扒一扒它的目录内容

#### **1、 基础篇（第1-4章）：**

这前四章是全书的重中之重，是所有技术的基础。**不管你设计什么电源，90%的情况都跑不出这几种电路。**

-   **第1章：基本拓扑（Buck, Boost, 反相）**
    

这章教你最为什么Buck电路是降压的，Boost是升压的。关键不在于记住公式，而在于理解 **“伏秒平衡”** 和 **“安秒平衡”** 这两个核心物理定律。理解了它们，你就能看懂电感电流的波形，才知道电流断续模式（DCM）和连续模式（CCM）对器件应力有多大影响。

-   **第2-3章：推挽、正激、半桥、全桥（隔离式拓扑）**
    

当你需要隔离（比如从AC市电得到DC低压）或者要搞大功率时，就得用这些了。这章最大的干货是讲透了 **“磁通不平衡”（偏磁饱和）** 这个致命问题。你会发现，为什么推挽电路容易炸管，以及怎么用“隔直电容”来救它，以及正激电路里的“磁复位”问题。

**第4章：反激变换器**

这是最常见的拓扑，从小功率充电器到辅助电源都在用。这章会详细教你如何在DCM和CCM模式下设计变压器，以及两种模式各自的优缺点（比如DCM模式反馈环好设计，但器件应力大）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25Sj3j4u5WHPA5ibJYoZciaWXgbGbdH9eergR4ibC03qhvLmyB2lG5w4eCQQ/640?wx_fmt=png)

#### 

#### **2 、进阶与控制篇（第5-6、12章）：**

-   **第5章：电流模式控制**
    

这章解释了为什么现在主流电源芯片都用电流模式。它最大的好处是能自动防止磁通不平衡，而且反馈环路设计比电压模式简单。但它也有个“天敌”：**次谐波振荡**。书里会教你用 **“斜率补偿”** 这个绝招来搞定它。

-   **第12章：反馈环路的稳定（重中之重！）**
    

**这是全书最硬核、也最值得看的一章！** 很多电源纹波大、动态响应慢，甚至自激振荡，问题都出在环路上。这章会教你如何用 **“2型”、“3型”误差放大器** 去补偿系统。它会用波德图告诉你，怎么在“稳态精度”和“动态响应速度”之间做权衡。能独立设计和调试反馈环路，是区分普通工程师和高手的分水岭。这一章就是成为高手的必修课。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25SgFykjDic1hDcDNQDqCuNRyLZGeLhOgYA5PMXIt2sJRAoLliaiaiaJubTZg/640?wx_fmt=png)

  

#### **3、 实战细节篇（第7、9章）：**

-   **第7章：变压器及磁性元件设计**
    

**磁性元件是电源里的“玄学”重灾区！** 变压器/电感设计不好，你的效率、温升、EMI全都会出问题，这一章把玄学变成科学。它会教你：

**如何选择磁芯**（是PQ型还是EE型？为什么？）

如何计算气隙（这是防止磁饱和的关键）

**如何应对“集肤效应”和“邻近效应”**（为什么高频下不能用粗线？该怎么用多股绞线？）

-   **第9章：MOSFET和IGBT及其驱动**
    

开关管不是理想器件，开关损耗和电压尖峰是导致电源效率低和炸管的两大元凶。这一章详细讲解：

**米勒效应**：为什么开关管开通过程中会有个“平台电压”，以及如何设计驱动电路来克服它。

驱动电流计算：你的驱动芯片需要提供多大的峰值电流，才能让开关管快速开通关断，减小损耗。

寄生参数的影响：线路漏感是怎么产生尖峰电压的，如何设计缓冲电路（Snubber）来吸收它。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25SGtNWWumyOh2eoicibr2p6ZQDYxfeN1POEsib0lL26pOZJGkLMcIPE4uYQ/640?wx_fmt=png)

  

#### **4、 综合应用篇（第14章）**

-   **第14章：开关电源的典型波形**
    

**这章给出了各种正常拓扑（正激、推挽、反激）在关键测试点（开关管Vds、Id，变压器初级、次级波形）的正常波形是什么样的。还展示了一些****异常波形**（比如磁通不平衡时的波形、轻载时的振荡等）。

当你调试电源时，拿着这章的内容和你的示波器波形对比，或许能快速定位问题所在。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25SbXWgupqlMrPW58f59DquY6DUTc4FpNlndJkvbZV3YS0C5KdK6Y4fTw/640?wx_fmt=png)

### **阅读建议：**

-   **新手**：按顺序精读第1-4章，把基础拓扑吃透，配合仿真软件（如LTspice）加深理解。
    
-   **有经验的工程师**：把它当作案头词典。当你遇到具体问题，比如“这个反激电源的环路怎么老是震荡？”直接翻到第12章；“这个MOS管温升为什么这么高？”翻到第9章和第11章（开关损耗分析）。
    

**记得一定要动手算！** 书里的设计实例，最好自己拿计算器跟着算一遍，才能内化成自己的东西。

  

04

PDF电子版获取方式

如何下载《开关电源设计第3版》，更好的学习开关电源相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|开关电源设计第3版

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25S6zjLwQIVBFmL48Z6Dgdt2NoHTOTRw0VMJ5Zlxn7mEIUAD71SrHZEIg/640?wx_fmt=jpeg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjj4QLCOibnZcPQUDvQPxw25SDZsl5M467TibwQb8DiazxMuDibd5oUuqWApTcISiaibqcVZppsibNic1l5dFQ/640?wx_fmt=jpeg)

注：本资源仅供学习交流，请勿用于商业用途。