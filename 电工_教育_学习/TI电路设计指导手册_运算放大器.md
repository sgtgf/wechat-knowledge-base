# TI电路设计指导手册：运算放大器

原创 王工 硬件笔记本 2025-07-24 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/CYydD-i-EIJh9vXc0aA\_iA](https://mp.weixin.qq.com/s/CYydD-i-EIJh9vXc0aA_iA)

# ![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

#   

# 今天咱们来聊聊运算放大器电路设计的那些事儿。

# 德州仪器(TI)发布的这本《模拟工程师电路设计指导手册：运算放大器》可以说是运放设计的"武功秘籍"，里面很多干货。作为硬件工程师，运放在咱们电路设计中用的很多，但要用好它，还真得掌握些门道。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5tmia7wDRtOXg7BrI6Fic1XUFGs3icx1EOwgyiaBedYjlcRUefxicA0XFBxQ/640?wx_fmt=jpeg&from=appmsg)

本文档共113页，下面对文档内容做一个简单介绍

## 一、运放基础：先打好基本功

手册开篇就是各种基础电路，相当于运放设计的"扎马步"。

**1、缓冲器（跟随器）电路**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v56K1icLVUZNHTa8SN9rHiciblqY27B8A15y0icfQnem6SvCooO2MznGOXrA/640?wx_fmt=png&from=appmsg)

-   作用：高输入阻抗+低输出阻抗，完美隔离前后级
    
-   关键点：选型要看单位增益带宽（比如LM7332的7.5MHz）和压摆率（15.2V/μs）
    
-   实用技巧：别直接接大电容负载，驱动低阻抗负载时要选高输出电流型号
    

  

**2、两种常用放大电路**

_反相放大器_：信号反相放大，输入阻抗由输入电阻R1决定。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5lebehMzlhWQ9D2tkfsW29mSiadG4gh4KrEPDhOR4YLrzc1sltv6OpGw/640?wx_fmt=png&from=appmsg)

反相放大倍数 = -R2/R1

  

_同相放大器_：信号同相放大，输入阻抗超高（GΩ级）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5WhgXUibvpoPkvRo4jvJAQyib80crmMDlVB70NiaP9AuOR8ZUbUfHuJgag/640?wx_fmt=png&from=appmsg)

同相放大倍数 = 1 + R1/R2

  

  

**3、加减法电路**

_反相求和电路_：能对多个输入信号加权求和

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5EGcyIs5Aql86kvYL44ye8o3N4WK4W0Cg8SLsvcUIEtezOnMMROx90Q/640?wx_fmt=png&from=appmsg)

  

  

_差分放大__器_：输入信号通常来自低阻抗源，因为该电路的输入阻抗由电阻网络决定。通常使用差分放大器来放大差分输入信号并抑制共模电压。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5bKkzqIFdOMfxINwZ7CFbj4lYQwTWuuV1YlE4RFjsQzXggD9tANJdcg/640?wx_fmt=png&from=appmsg)

**4、微积分电路**

_积__分器_：积分器电路根据电路时间常数和放大器的带宽输出某个频率范围上输入信号的积分。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5IXeur6ymLQ5WZdftricUXBygZq2LnMxthRoESc4aM9zaA0oO3rTntiag/640?wx_fmt=png&from=appmsg)

  

_微分器_：微分器电路会根据电路时间常数和放大器的带宽来输出某个频率范围上输入信号的微商。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5Qq8lj1d7WypeXiabKLicAdlpKPdqqrYYX4Rd0NpupJQGIKKxFuMpn65Q/640?wx_fmt=png&from=appmsg)

## 每介绍一个电路，都会进行举例，内容包括

## 设计目标

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v51iaNGeicLD963FS2r5ETA4NBicgBRWPwcYicXiciaF379GBRpOQh9p2Cpf5Q/640?wx_fmt=png&from=appmsg)

## 设计说明

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5Kb7ic1TsNgS5TejXWAqN5DOH3MeUH9njkg0921xfjj0UfZ3fmINYm4A/640?wx_fmt=png&from=appmsg)

##   

## 设计步骤

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5SYCuHvFbqhJVqaNG4tibLiamRYX3dhibMxXDVAO6hblaN6yMhKJ8jhFkQ/640?wx_fmt=png&from=appmsg)

##   

## 设计仿真

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5JlhWeB4aKgVUxg1Cvpht0PaIqN6TwXTmj0nM3TzHVj97pTnFibLhplw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5zrp5YOtAn6bdiasqiacBOHEVbylbwZS8ByzbHm7y1RiaCBI0SkSbmJFww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5jibHDeqf1WrLuWkrkicv5ouf7Np1NDQzO41dodu4eeEuWiaibBxuFhZ8nA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5aCLlLXrPQfMeO79pq152L8aVHVxTmwoDNn9ibXlZovCVicP6Tb1jppFQ/640?wx_fmt=png&from=appmsg)

## 二、进阶应用：玩转特殊场景

**1、电流检测电路**

-   _低侧单向检测_：适合检测0-1A电流，用100mΩ采样电阻
    
-   _低侧双向检测_：能测正负电流，注意用轨到轨运放
    
-   _跨阻放大器_：把光电二极管的微弱电流转成电压，选CMOS运放降低偏置电流
    

**2、信号调理妙招**

-   _单端转差分_：用两个运放就能实现，ADC前级必备
    
-   _交流耦合_：HPF+放大二合一，处理带直流偏置的信号
    
-   _精密整流_：半波/全波整流不用二极管，用运放实现零压降
    

**3、特殊功能电路**

-   _PWM发生器_：三角波+比较器，500kHz轻松搞定
    
-   _窗口比较器_：双比较器并联，检测信号是否在设定范围内
    
-   _压摆率限制器_：控制信号变化速度，防止过冲
    

  

## 三、设计避坑要点

-   电源范围（单电源还是双电源）
    
-   带宽（增益带宽积要留余量）
    
-   输入输出范围（注意不是所有"轨到轨"都能真到轨）
    
-   反馈电阻别太大（建议<100kΩ）
    
-   高频时可并联小电容补偿
    
-   驱动容性负载要加隔离电阻
    

  

内容就介绍这么多了，建议大家先从基础电路练起，再逐步挑战高级应用。

  

如何下载《电路设计指导手册：运算放大器》，更好的学习设计运放电路

  

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 下载|电路设计指导手册：运算放大器

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiawIIliaZfnDCg6ulDyz94v5mQQrum7WEWWjJR70eTxsBmlqFWTVfPuRBA54wGCw3x39Jw9xsicia7Aw/640?wx_fmt=png&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjAibVIhHVt3yXrTqSa9wZm2o7mRIXS1x2kJxib2Bo4pdzrliaNsgV2FIFkaLGt3czYuPRUGePz9AqTQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjAibVIhHVt3yXrTqSa9wZm23QZw7KqPdZ2z45x3C67iaphsb4aicwtqxubaHth4KtQXuS1DZgtUibRVg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)

## 

**声明：**

  

声明：参考内容：TI官网。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。