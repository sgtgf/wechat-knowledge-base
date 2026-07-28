# 来自德国功率巨头的内部手册：MOS管、IGBT、功率二极管、晶闸管，448页讲全在这了

原创 王工 硬件笔记本 2025-11-26 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/R\_S9ivSRdz6adC2SDnpR7Q](https://mp.weixin.qq.com/s/R_S9ivSRdz6adC2SDnpR7Q)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic#imgIndex=1 "音符")

  

大家好，咱们做电源、工控或者新能源这行的朋友都知道，功率半导体这东西，说起来是基础，但真想把它用好并不简单。无论是选型还是设计，一旦出了偏差，轻则影响整体效率，重则可能导致现场炸机，那种压力，相信不少人都深有体会。  

今天想跟大家分享一份由赛米控（SEMIKRON）推出的《功率半导体应用手册》，全书共448页，内容非常扎实。这份手册可能对大多数人来说稍显枯燥，但如果你正从事大功率相关领域的工作，建议下载一份，静下心来仔细看看。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg87jtnzIYPIys2ALNuicXh5GBrKy4IP2G4xGZrovyOF9dfibCIPCwkOafiaJuhRFfpa2pickCddiaJrIA/640?wx_fmt=png&from=appmsg)

### 

文末附448页PDF下载方式。

01

引言

顾名思义，这本手册讲的就是怎么用好MOS管、IGBT、功率二极管、晶闸管（可控硅）这些主要功率元器件。  

咱们设计产品，尤其是大功率电源、充电桩、电焊机或者光伏逆变器，怎么让设备效率更高、更皮实耐用，关键就在于这些器件的选型、驱动、保护和散热。这本手册，就是围绕这些实际问题，进行一个系统性地整理。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANm4VZtkicQhSM0icQXvGaPiaBiaMAM5RL4Z06uCMj8e2lgQhzcEdjA9kof7A/640?wx_fmt=png&from=appmsg)

说到赛米控，老工程师们应该都不陌生。这家1951年成立的德国家族企业，在功率模块领域那是绝对的顶尖玩家。据我了解，全球接近一半的风力发电机都用过他家的技术。可以说，咱们身边很多节能和能源转换的设备背后，都有赛米控的影子。他们家和丹佛斯硅动力合并后，技术底蕴和全球支持能力更强了。所以，他们出的应用手册，凝结了多年工程实践经验的干货，含金量很足。

那么，这本手册具体能帮我们解决哪些问题呢？王工我结合自己的体会，带大家划划重点。

### 

  

02

内容介绍

本手册一共分为7个章节

**第一章 & 第二章：从“为什么”到“是什么”**

手册开头，先把功率半导体家族几位主角的工作原理给你讲清楚了。比如：

-   **功率二极管**，它就像个单向的阀门，电流只能朝一个方向走，主要干整流和续流的活儿。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgKTSVAS0vrUicYbUib6pPYEGGWJsshFLBkyQ54tzIriaUkETb49MdMEaibxTLL4SpiaHRTV546ibE0HOTQ/640?wx_fmt=png&from=appmsg)

-   **晶闸管（可控硅）**，则是个带触发功能的闸门，一旦给了信号触发就导通，直到电流低于某个值或者或施加反向电压才关断，属于过小电流控制大电流通断。
    
-   **功率MOSFET**，是高速开关，适合高频应用，但电压太高了它也损耗大。
    
-   **IGBT**，则可以看作是MOS管和晶体管的合体，既好驱动又能通过大电流，是咱们在中大功率场合（比如变频器、电动汽车驱动）的主力。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgKTSVAS0vrUicYbUib6pPYEGwnBfyDkBEAgqernxPoWVgSwdhjgPbdqOicebyFzZ1SP6p1Cdty3lEow/640?wx_fmt=png&from=appmsg)

王工我觉得，这部分基础绝对不能跳过。尤其是**静态特性**和**动态特性**，这是选型的根本。静态特性好比器件的体力，比如导通电阻，越小越好，发热就少；动态特性则是敏捷度，开关速度越快，损耗一般越小，但也容易引来电压电流尖峰这些新麻烦。如何权衡，需要结合实际来进行取舍。

另外，第二章里关于**封装技术**的讲解也很好。赛米控在这方面是专家，手册里详细介绍了像**压力连接**这类能大幅提升模块可靠性的新技术，这对于追求高可靠性的工业设备和电动汽车至关重要。它还解释了如何通过**低电感内部结构**设计来减小开关过程中的电压尖峰，这可是减少炸机风险的实招。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgKTSVAS0vrUicYbUib6pPYEGNtfc65T0l1pFGkUVdAqcXJeNtr0WXRWThpJOE1K5xyMubRF2CndwXw/640?wx_fmt=png&from=appmsg)

  

**第三章：读懂数据手册**

咱们看厂家几十页的数据手册，经常眼花缭乱。这一章就是教我们抓重点。  

首先，国际上有些通用标准，比如 IEC 60747、IEC 60191，它们统一了半导体参数的符号、术语和测试方法。这些标准对每个参数的含义、最低要求和检验流程都有详细说明，遇到不理解的，可以随时查证，做到每一步都有据可依。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANmBS8vqK7ZFHticbFF0Wialzk8vklbevAav8FhUCgrPic6ic27Iu6UicibWyaA/640?wx_fmt=png&from=appmsg)

除了大家平时比较关注的几个参数——比如阈值电压、工作电流、导通内阻和极限值之外，根据我的经验，还需要关注器件的封装和功率损耗，了解器件的“温度”和“热阻”这两个参数。热阻直接决定了芯片产生的热量能不能顺利导出去，它关系到你后面散热器该怎么设计，选多大。千万别只看器件标称的额定电流——那是在理想散热条件下的数值。实际能用多大电流，很大程度上要看你的散热水平。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANme1MBKjQWdXyDDMuR1Vagg23bGvb13WzY1Gpy16T8zLQiaDiaRMzDCtFg/640?wx_fmt=png&from=appmsg)

另外，开关安全工作区这个概念也一定要理解清楚。它规定了器件在开关瞬间能够安全承受的电压和电流组合。一旦超出这个安全区，器件就很容易损坏。所以设计时务必留足余量，不能只看静态参数。

  

**第四章 & 第五章：功率器件的应用实战**

这两章是手册的精华，直接解答咱们设计中的具体困惑。

**1、散热设计**  
王工我见过太多因为散热没做好导致返工的案例，特别是一些户外高亮屏。手册把这部分讲得很透，从自然风冷、强制风冷到水冷，各种方案的适用场景和设计要点都涵盖了。

这里提醒一句，器件和散热器之间**务必涂抹导热硅脂**！别小看这个细节，它能填平金属表面的微小凹凸，显著降低热阻。忘了涂，或者涂得不好，散热效果可能打对折。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANmBOmLjjvicndLsNHDAicBl05sAQ4vLWSToggYl8kdGSeca1o2prd69WEA/640?wx_fmt=png&from=appmsg)

  

**2、布线与驱动**

-   **寄生参数：** 你的PCB走线、连接线都不是理想的，本身就有电感和电容。当IGBT高速关断时，电流变化极快，寄生电感上会产生很高的电压尖峰，这个尖峰很可能叠加在直流母线上，直接打坏器件。手册教我们如何通过**使用低感母排、优化布线、加吸收电路**等手段来压住这个尖峰。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANmtJpKScwCWicWhaJgfia98vlX1rthicE0XRoZW0iaFF96gVQ1exWjXb20Mg/640?wx_fmt=png&from=appmsg)

-   **栅极驱动：** 给IGBT或MOS管的（栅极）发送控制信号，这个信号必须干净。驱动电压不足，管子会处于线性区，发热剧增；驱动回路设计不好，会引起波形震荡，甚至导致误导通。手册对驱动电阻的选择、布局要点都有细致说明。
    
-   **保护电路：** 包括过压、过流和短路保护。特别是短路保护，IGBT通常能承受1微秒的短路电流，这就要求驱动电路能在这极短时间内检测到故障并安全关断。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANmTKhOj4SXAGqNXlomo8PSNcic5RoThYsDI5L62RrIw53mnw3B7W2I8NA/640?wx_fmt=png&from=appmsg)

**第六章 & 第七章：用好工具，规范操作**

这部分内容体现了德国公司的严谨。它告诉你功率模块在安装时，螺丝该打多大力矩，表面该如何处理，如何避免静电损伤，甚至在高原、高湿环境下要注意什么。这些生产、调试现场的规范，往往直接影响了产品的长期可靠性。

最后，手册还介绍了其配套的**SemiSel软件**。内容有点多了，大家可以下载下来仔细查看。

  

03

文档获取

这本《功率半导体应用手册》从最基本的原理，到最棘手的工程难题（比如散热、可靠性），都进行了讲解，能帮助咱们更好的理解并运用在实际产品设计中。

如何下载《功率半导体应用手册》，更好的学习硬件基础相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|功率半导体应用手册

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhMA0HAIjAICXnQpro56ANmcwic9ZKllrLfdVY3aqwpaM7LBaokDzrHNcEsrusSBEMV0OaxGs89HQw/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg87jtnzIYPIys2ALNuicXh5XticlPQmh2tYah5FVXw3Oxn3bQTuoN6hjxRxCZQXvn9X9NxozYchM1A/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅用于，学习交流，请勿用于商业用途。大家可以在赛米控的官方网站：**`www.semikron.com`**，找到并下载这份文档。或者，在一些知名的电子工程师社区和技术资料网站上也通常能找到分享资源。