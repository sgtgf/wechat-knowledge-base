# 这份MPS官方的37页开关电源设计文档，没有套路，只有干货

原创 王工 硬件笔记本 2025-09-18 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/La6AABI-BrRmdMlrsR3kQQ](https://mp.weixin.qq.com/s/La6AABI-BrRmdMlrsR3kQQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

今天给大家分享一份来自MPS官方推出的开关电源技术文档《中小功率隔离型开关电源设计概要》。文末附有37页PDF的获取方式，欢迎下载学习。

本文内容基于MPS的技官网资料整理而成，主要介绍中小功率隔离型开关电源的设计要点，不管你是做家电、适配器，还是嵌入式电源，这篇文章或许能为你提供一些思路。

011

隔离变换器的基本拓扑

常见的隔离型拓扑有五种：

-   **正激（Forward）**
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV503kmo5DnnSw2cicGPwMkcjnVHbary3wLQfkNRPoYVMibonLzNCvvyVAQ/640?wx_fmt=png&from=appmsg)

-   **反激（Flyback）**
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5cw9t0ou2NAdszKC85yjoyKW7X6tup9ibiaDLuNpeUGYeG6NFVal8GIcA/640?wx_fmt=png&from=appmsg)

-   **半桥（Half-Bridge）**
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5dNWEPGbo8ciaXTXIHZw7urztRvJicIgicjPybHHXuibNFaGnArmfmDvPYg/640?wx_fmt=png&from=appmsg)

-   **全桥（Full-Bridge）**
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5wOg96vxz3fwfZolXAKAkrIkdhyTnYXBu7S4vqGAHT5F0eyIZ9pKmjw/640?wx_fmt=png&from=appmsg)

-   **推挽（Push-Pull）**
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5ep6A0krysCaPicuFK6KrN13RF6ibFJNcaSXtznd6bmQGOTxLicO4hNsMw/640?wx_fmt=png&from=appmsg)

它们各具特点，适用于不同的功率等级和性能要求。例如，反激结构简单、成本低，适合中小功率场合；全桥和半桥效率高，常用于中高功率应用。更详细的优缺点对比，请参阅PDF原文。

021

反激变换器的工作原理

下面主要介绍一下**反激变换器（Flyback），反激是最常见的一种，尤其适合功率小于150W的应用。因为它结构简单、成本低，只有一个变压器，省去了输出电感和续流二极管。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5bM7zKyIScic2j93SBTybX6W6ibMxd31OicSXG4ePJW9Vv51cW5jAqdTwg/640?wx_fmt=png&from=appmsg)

反激常用架构模型

  

你可以把反激电路想象成一个“能量搬运工”：

-   **开关管导通时**：能量从输入侧存入变压器；
    
-   **开关管关断时**：能量从变压器释放到输出侧。
    

整个过程靠的是**磁场不能突变**这个物理特性，所以变压器既储能又传递能量，一举两得。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5xMJJhZrJWTqnYT8wHwT18D83eFVaKfEM8U4grpVYjTFOqOpUs95MzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5BSYFia8GfACujdjsleXo0rjbWnurcfeCFkA8JGIcZA2eh3l09Ow7kUQ/640?wx_fmt=png&from=appmsg)

  

031

CCM vs DCM：两种工作模式

反激电路有两种基本工作模式：

-   **CCM（连续导通模式）**：电流始终不断，适合大电流输出，纹波小，但控制复杂；
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5UFlLS0U68tajK86icedV7Adb7icdxG7bWnfdT4icFmYKic0pWBJb6bu7SQ/640?wx_fmt=png&from=appmsg)

CCM模式反激电路的典型波形

  

-   **DCM（断续导通模式）**：电流会降到零，适合小功率，控制简单，但纹波大。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5dP0wgx0zx0WX87QGC44wDgViaV7QxvStMS3DM5nZ5sgEf8ZezSQgTEQ/640?wx_fmt=png&from=appmsg)

DCM模式反激电路的典型波形

设计时要根据输出功率、纹波要求和效率目标选择合适的操作模式。

  

041

关键参数的影响与优化措施

实际电路中存在许多非理想因素，会影响电源的性能与可靠性：

-   **漏感**：会引起开关管电压尖峰，通常需搭配RCD吸收电路进行抑制；
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5f2ktyuwMPUjmOs5MWr57P8NoYpozlPR2NqQDhBnLolIpic4tibSuQHEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5ab0uhJzYlM2HXpZnxPDlAiaWGOwvR9uALav2cqdkkicibetoagsqaMztA/640?wx_fmt=png&from=appmsg)

  

-   **Coss（MOS输出电容）**：与漏感形成谐振电路，影响EMI表现；
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5ibS6foApicz8MJX0M4Ziatn9yWkmzjw8Qrlq5F25VJtibh865EOLmibdEWg/640?wx_fmt=png&from=appmsg)

-   **二极管寄生电容**：可能引起高频振荡，需通过RC吸收进行抑制。
    

  

  

-   谐振的原因以及参数优化
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5aomVSewSJWBs0lyU5UzBJr5BHWkuicrnT2D1BatbIhIiboicWTVKBic1IA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5H7sDCwqK5LRUiaBttKp6ENSmMkptf0ib7W1DY8d0CXR1FJxSADI024Hg/640?wx_fmt=png&from=appmsg)

文档后续还系统介绍了以下内容：

-   变压器匝比N对性能的影响
    
-   初级侧开关损耗的分析与优化
    
-   MPS多种开关电源控制方案的选型指南
    
-   次级侧二极管和输出电容的选型建议：
    
    1、二极管应选肖特基或超快恢复类型，耐压与电流需留足余量；
    
    2、输出电容需满足纹波电流、低ESR和长寿命要求，尤其注意温度影响。
    

  

051

变压器设计及反激设计实例

变压器是反激电源的核心，其设计的好坏直接关系到整机性能：

-   **磁芯选型**：需综合考虑开关频率与输出功率，常用系列包括EE、EER、PQ等；
    
-   **匝数计算**：依据峰值电流与最大磁通密度确定；
    
-   **绕制工艺**：采用“三明治绕法”可有效降低漏感，但需注意层间电容的影响。记得将初级绕组的噪声端（漏极）置于最内层，有助于抑制EMI。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5A0LFb6mE1sWlenwL4rEjG53jAkOWMH4BbLVuSgM3FjeQ5F0jbVPoibA/640?wx_fmt=png&from=appmsg)

  

文档中还提供了一个典型反激设计实例（85~265Vac输入，12V/1A输出），涵盖输入电容计算、反射电压设定、峰值电流估算、电感量计算等关键步骤。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5vNeERedERP5zrYBPO5AE78441A3icH83KeqXa1YyBoIITNnxcTiaI4cg/640?wx_fmt=png&from=appmsg)

  

并特别强调了反激电路设计布局要点：

-   输入/输出环路应尽量小；
    
-   功率线（如MOS管Drain极）要短而宽；
    
-   控制信号需远离功率部分，防止干扰；
    
-   Vcc电容应尽可能靠近芯片放置。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5axnn6d6RoaKWDAtW9qyyCibFUKppbolzctqqiasMeWYJGTZjA5r3eGKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5m66a1scw4BYf258AH70QRsMskoxIia9SiauGWQc0U76Jehz6PWMSUoog/640?wx_fmt=png&from=appmsg)

  

061

PDF电子版获取方式

如何下载《开关电源设计概要》，更好的学习中小隔离型开关电源设计相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|开关电源设计概要

## 建议复制粘贴过去，就不容易码错字哟！

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhWGbM0O6pSywUJJazTbcV5folp5wmiab6icnXkXlU5ibjn4rb25CoHibOhvU7IAhcmfDib5e9yjDrrE0A/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。