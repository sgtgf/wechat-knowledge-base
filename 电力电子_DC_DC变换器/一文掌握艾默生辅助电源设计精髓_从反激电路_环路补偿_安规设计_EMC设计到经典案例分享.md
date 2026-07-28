# 一文掌握艾默生辅助电源设计精髓：从反激电路、环路补偿、安规设计、EMC设计到经典案例分享

原创 王工 硬件笔记本 2025-10-10 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/oKTB1C42KZQb2JbDFirddw](https://mp.weixin.qq.com/s/oKTB1C42KZQb2JbDFirddw)

# ![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=1 "音符")

#   

大家好，今天给大家分享一份实用的技术文档——《辅助电源设计规范》。这份文档来自艾默生网络能源有限公司，其中很多设计原则、电路方案和调试方法至今仍然非常有用。如果你是做电源设计的，或者你对开关电源有点兴趣，那这篇文章应该能帮到你。

文末附26页完整版PDF文档获取方式。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENU55CpuPEH0Lia2kL9c3tfxMubA4NCYbreD6VFTiatZia989o8Lb38YNyw/640?wx_fmt=png&from=appmsg)

  

下面咱们介绍一下这份文档大概讲了哪些内容，包括：辅助电源是啥、它要满足哪些指标、常用的电路方案、关键器件怎么选、电路怎么设计，以及一些实际项目中踩过的“坑”。

  

011

辅助电源简介

## 1、辅助电源是干啥的？

简单来说，**辅助电源就是给设备内部其它电路供电的小电源**。比如在一个电源模块里，主电路负责输出大功率，而辅助电源则负责给控制芯片、驱动电路、监控电路等供电。它的输出功率一般不大，通常在30W以下，但要求输入电压范围宽，还要满足安规和EMC等要求。

  

## 2、辅助电源要满足哪些技术指标？

**必须要有的指标包括：**

**输入电压范围，输出电压和波动范围，工作温度和存储温度，纹波与噪声，负载调整率，开机过冲，输出功率和电流，安规和EMC要求。**

**可选指标（不强制）：温度系数、动态响应、效率、绝缘电阻等。**

**特别提醒**：辅助电源的**可靠性要高于主电路**，因为它一旦挂了，整个系统就可能“瘫痪”。

##   

## 3、辅助电源常用哪种电路方案？

## **反激变换器（Flyback Converter）是目前最主流的方案**。为啥？因为它结构简单、成本低、适合多路输出，而且技术成熟。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CEN5qgthcO0nby1piay4apcrYChkbdqDlswXhf4Xw44rcyQY8ZNCFVoyZg/640?wx_fmt=png&from=appmsg)

你可能听过正激变换器或者从主变压器取电的方案，但在一次电源中，反激变换器是首选。它的基本工作原理是：

> 开关管导通时，电能变成磁能储存在变压器里；开关管关断时，磁能再变成电能传给负载。

这种方式特别适合小功率、多路输出的场景。控制方式上，常用的是**峰值电流型PWM控制**，也就是用电流信号和电压误差信号比较，来控制开关管的通断。

##   

## 4、控制芯片怎么选？

反激电源的核心是控制芯片。文档里重点介绍了**UC384X系列**，比如UC3842/3/4/5。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENnibUuXicqQYiap8oWqqcJHVRR4LevutdYmjMAc3oskicSicQB8owtadMX3w/640?wx_fmt=png&from=appmsg)

它们的主要区别在于启动电压和最大占空比：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2t6KDIicxxJT8IAuFADLCPjxZum0b5jkKjTJHox0qmhgpQYLxOERDiaYuRTXjmvBRwTWJCSsV2vGA/640?wx_fmt=png&from=appmsg)

**注意**：不同厂家、不同后缀的芯片参数可能有差异，选型时要仔细看手册。

  

021

电路设计要点

### 1、启动电路

启动电路是辅助电源的“点火系统”。文档里强调：**必须能在最恶劣条件下正常启动**，包括低温、低压、满载等。

如下是文档中的一个推荐电路，具体原理可查看文档。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENicVseibJjE25ZSE1cNtG7OVfiaf6YRPw1hwjGHPRAjWNYEQqDRCAPBOOQ/640?wx_fmt=png&from=appmsg)

  

### 2、电流采样电路

采样方式有两种：**电阻采样**和**电流互感器采样**。如果采样电阻功耗超过0.5W，建议用电流互感器。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENdRAFQl4SoTtw9X5ChRsQJg0My4IzvhTZBJ9kLescQ3UEPvdORaWaRQ/640?wx_fmt=png&from=appmsg)

采样电阻的取值要保证**正常工作时不会触发限流**，而且要留至少20%的余量。

###   

### 3、变压器设计

变压器是反激电源非常重要的知识点，也是难点。设计时要注意：

-   线径尽量细，推荐0.1mm多股线或0.21mm单线；
    
-   磁通密度Bmax一般要小于0.2T；
    
-   气隙会导致电感量有10%的误差，设计时要考虑进去；
    
-   尽量用公司已有的磁芯和骨架，降低成本。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENY3ibQic97OM2OfM5kYDvjwx2B7fzoIzKOK5jDteuuibcuMSBeAxBiaZoYw/640?wx_fmt=png&from=appmsg)

###   

### 4、开关管驱动和吸收电路

MOS管是开关核心，选型要满足电流、电压、结温的降额要求。驱动电阻一般用10Ω左右，太大了效率低，太小了容易振荡。

开关管和整流二极管上常常要加吸收电路，用来抑制电压尖峰。常用的有RCD吸收、RC吸收等。文档里提醒：**吸收电路要以最小功耗达到最好效果**。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2t6KDIicxxJT8IAuFADLCPrjpFEXcf4t5Q0GZBLCB2KkhdSNu5sp2vDRCMicG5ndKpibWRSRw2LjKw/640?wx_fmt=png&from=appmsg)

###   

## 5、环路设计与稳定性

环路稳定性是电源设计的重点内容。如果是**非隔离控制**，一般在芯片的COMP和VFB之间加RC补偿就行；

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENia0RQOZdwydSsiclDnkandQWSgpLO69TOmOZD0rnD7cvLsD3Gue1B59Q/640?wx_fmt=png&from=appmsg)

如果是**隔离控制**，常用光耦+431基准来反馈，光耦前后都可能要加补偿电路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2t6KDIicxxJT8IAuFADLCPj9BMEXiaty4NOsurLoUnekPwPtIm4O8HS8Q3kI7jbl0vuIRpeAKibibgw/640?wx_fmt=png&from=appmsg)

### 6、短路保护

辅助电源一般靠**原边限流**实现短路保护，不需要额外电路。短路时，芯片供电电压降低，进入“打嗝模式”——不断重启，直到短路解除。

### 7、输入保护

-   监控电源常用**保险丝**；
    
-   整流模块常用**串联电阻**，电阻要能在MOS短路时自己先烧断，保护PCB。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2t6KDIicxxJT8IAuFADLCP7HF0ZNPia7BskALqXPzNLTuAC5TbJnYqbSVUNZulfvTY8zfLribQIhmQ/640?wx_fmt=png&from=appmsg)

  

### 8、安规设计

安规是硬性要求，包括：

-   PCB上的安全间距；
    
-   光耦、保险丝、电解电容等要选安规认证的；
    
-   变压器、光耦、开关管短路时，不能起火或爆炸。
    

文档里还提到了两种安规保护方法：**输出钳位（TVS）** 和 **提高电容耐压+限制占空比**。

  

## 9、EMC设计

辅助电源也需要满足整机的EMC要求。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2t6KDIicxxJT8IAuFADLCPKZ1rFU43HDzIUxtRbx4CqJRX8qM1F14TbaYUcRdqP5BYvN5DcTWd0g/640?wx_fmt=png&from=appmsg)

-   输入EMI滤波要加在监控电源前端；
    
-   输出端如果接外部设备，要加TVS防浪涌；
    
-   开关管附近要加Y电容（1000pF~4700pF）接地，抑制辐射。
    

##   

## 10、经验案例

文档里总结了7个经典问题，我挑几个说说：

-   **H1412M1串联电阻损坏**：原因是并联的电容太大，导致电阻在谐波或雷击时容易坏；
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2t6KDIicxxJT8IAuFADLCPuoWP2WSqvibdy2l5PjUN0u8ALg8OUL8iaklic71LuicqhCmxsTJoT2pkfg/640?wx_fmt=png&from=appmsg)
    
-   **PSM-A9启动失败**：芯片关断电压临界，供电电压设计得太接近极限；
    
-   **H6412Z芯片损坏**：用了CMOS型的UCC38C43，抗干扰差，换成3843B解决；
    
-   **HD4850风扇电源电容坏**：电感太小，纹波电流大，电容扛不住。
    

这些案例告诉我们：**器件选型、启动设计、滤波电路、散热设计，一个都不能马虎**。

  

031

PDF文档获取方式

如何下载《辅助电源设计规范》，更好的学习辅助电源相关设计

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|辅助电源设计规范

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjZ3okPoSl9ZEJzx0ju2CENibKz837A9TqF4jJLic2Gb2ibkziaMSNNuN6SJltDlzj3dU03mxgaOJibD4Q/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjFVD8oFOceaD5xEw5dkxDU4XYBfh3NJjjezLWnhqnRricz0Y4Coia1jT0v7zQmq4nibEM0hRl0kgiaiaA/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。