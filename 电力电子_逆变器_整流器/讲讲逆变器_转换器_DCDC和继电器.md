# 讲讲逆变器、转换器、DCDC和继电器

原创 硬件笔记本 2024-09-12 07:37 四川

> 原文地址: [https://mp.weixin.qq.com/s/mTuPTaIBDVta1wJfhOVSCQ](https://mp.weixin.qq.com/s/mTuPTaIBDVta1wJfhOVSCQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

  

**一、逆变器**

### **1）作用**

逆变器是一种将**直流电转换为交流电**的器件。

### **2）逆变器的原理**

a）首先当蓝色开关闭合，红色开关断开时与蓝色开关断开，红色开关闭合时电流流过负载的方向刚好是相反的

 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwh0SzLNMcOb7JicRwVddsq4a0ebBubsZQzliaibUUFEe6W9pghlvY7KrOQ/640?wx_fmt=png&from=appmsg&wxfrom=13)![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwWgODffnlGpgWNI4Fe7SN5Mm5yKKESrX7f2WlcEbqP8LNQ0eDibKTfhQ/640?wx_fmt=png&from=appmsg&wxfrom=13)

b）当控制一定的频率控制蓝色开关和红色开关的打开和关闭就可以形成下面的方波交流电

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwAcNicQJmdnFOGPccpDYJgQJkvaObxrmMxJMpV3ibdG9TzgiaqSQGjYebg/640?wx_fmt=png&from=appmsg&wxfrom=13)

  

c）因为我国的交流电是220V，频率是**50Hz**,所以也就是**一秒内需要断开闭合开关100次。**但是手动或者机械的方法很难实现，所以就使用场效应管mosfet或者是IGBT晶体管（每秒可以实现成千上万次的开关），给他输入一定的信号让它实现一定频率的打开和关闭。

d）交流电的频率已经解决，其次就是波形问题。当幅值越小，开关闭合的时间越短，其输出的脉冲宽度越短，开关闭合的时间就是脉冲宽度的时间；幅值越大，开关闭合的时间越长，其输出的脉冲宽度越宽。

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwwox1ILmMZsCXoqNHcZofo6dwA3yRPwHiautocfrRm4fBP7gXguTnV4Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

e）将相同宽度的方波进行平均，就会发现其曲线近似于正弦波，然后为了让曲线变得平滑，然后在电路中加入电容电感进行滤波，这样就完成了直流电逆变成交流电。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwOwA36kRbBdupPWhF1rh0c80E3vRKC14iaTBIRiboQMyvkkXyKib1UqUXA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwUUuWRibiaordBJL0ZwHtKSK54cZOAYdnxKddt3owHq01xaFTnRfvTaWQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## **二、转换器**

### **1）作用**

转换器是一种将**交流电转换成直流电**的器件。

### **2）半波整流和全波整流**

a）半波整流（半桥整流电路）

将二极管加入之后，由于二极管的单向导通特性，交流电只有正半周期才能通过，然后负半周期就会截止，这样形成的波形就只有之前波形的一般，那么就是半波整流。但是存在半个周期电路不工作，没有电流，所以浪费，因此有一种更好的方式全波整流

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwUpIwHv5zsfE2ZAf3NVpCXgQffc23vJwSVvictLUIjKfWouTsj0cmW2A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5Ae8j95PMepYDqEVc7del1O32mkpBh6qKgBlOw7TPoicpr9OhnjL7KywvjEia18B7268kTCoaZJPMA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

b）全波整流（全桥整流电路）

当加入一下电路之后，交流电的正半周期走一条回路通过，然后负半周期走另一条回路通过，但是**这两条回路都是以相同的方向进入负载**。此时正弦波正向会输出，然后负向的正弦波也会以正向输出，这就叫做全波整流。

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwpibAiaxFtu5t8MAic4nT42IoV3iafx4ARBgJxf0ibUTtAPXJRGxfEHq0Sog/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHw5srmgyHxrPZkiaWd3yzoWCIGVXhSLyQjicG0mkyIehKhYl6Sdjm0AV6Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5Ae8j95PMepYDqEVc7del1OgWtaOH1PI0UliczmmCK7VLkj14uJ5yydo0rHI0C4IdFFy8RNwKUWog/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### **3）电容滤波**

电容的作用：一个水桶，它会把断断续续的水接下来然后以平缓的方式倒出去。加入电容之后，此时的交流电是带有交流纹波成分的直流电

                ![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5Ae8j95PMepYDqEVc7del1yuD2ibUXunprI6LNJMMG5HRTYvfj5wAv5YeutVHKjxAc3XSojKyAdrw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### **4）稳压电路**

那么怎么让  带有交流纹波成分的直流电  进一步优化让它变得完全笔直呢，就需要一个稳压电路对整流后的直流电压采用负反馈技术进一步稳定直流电压。然后通过稳压之后交流电就完全变成直流电了。

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHw3wst41o47n5z9eF2xzLVMPBh1js5woBwwy5ha8oiblmxQFOR1zAt1ZA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHw8tf3czKdLluqkcVMSQIEsZFUCrbzacRicrZedbALE2cU0VER5mjYNyQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### **5）总结**

交流电变成直流电的过程：整流==》滤波==》稳压

## **三、DCDC Converter（DCDC变换器）**

### **1）作用**

表示在直流电路中将一个电压值的电能变换为另一个电压值的电能的装置

### **2）开关电源（buck电路12V-5V)**

a）例如，如果我想让12V的电压变成5V，那么我就要让开关42%的时间闭合，58%的时间断开，但这不是我们要的直流5V电压，我们需要把**矩形波变成5V电压**。

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwfUM7gbDVwpnQnhxF1lfexgoFTyThqnxm6OJuqASKqldUglBnyES2Vw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) 

b）当**开关闭合**的一段时间，电源的输出波形，图一所示

此时二极管截止，电源给电感和电容开始充电，并给负载开始供电，图二所示

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwEPrNdbCgicxjIt1TjgPW0PiaEu5TAY3IQAZdSneJPicEJzZUiaSjyNH35Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1) ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwqGhhLWGYJNrFmq8TuFUGZerB6wkibZSiajfcYnyacVPn42bmibibKd8p3w/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

c）但是电感的电流不能突变，此时电感为了阻止电流增加，会感应一个与电流相反的电压，所以电感会抵消一部分电源电压，使得负载端的电压达不到12V，使其电压在5V左右，图三  ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwpeFTlzqgXBibAvllQN6WfGJ21KaN3ms2KZxib58icgXkNBqkuaZGDZ0gQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

d）随着时间的增加，电感上的电压会逐渐减少，而负载电压会逐渐增加，而如果时间过长，那么电感产生的电压会降为0V，而负载两端的电压会升为12V,所以我们需要严格控制开关闭合的时间。当**开关断开**之后，电感为了减少电流的流失，因此会产生一个反方向的电源，作为电路的电源，然后通过二极管形成回路，然后负载两端的电压逐渐降低，电感电压降低，然后有开关闭合，往复循环。就可以实现将12V的电压降为5V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwjxNWFDzmfRa7dtzzj3m4626kngSqY5BtSgd0CQrNibNEr6nVzcOLUicg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwD1bzNiaebsrduO2faiaYZU6evn7aJN5xmmnBfqbMDPoHabCRK6sEjMCg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### **3） boost电路5V-12V**

当开关断开时，由于负载的阻抗比电感的阻抗大很多，导致电感的电流会减少，然后产生一个和电源方向相同的电源

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwT8crqxYTVhibGiapibQicGamEZZY14SYnia1W2YGNj07OlZtflVVYwBbANw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

当开关关闭之后，电容给负载负载供电，但是此时负载的电压稍微低于12V

       ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwSS4icDHQD4ialTh24doYkGzGMTCYT4WTyxFBvMP1tf5VD0BuwmMbbuHQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后通过一定频率的开关闭合，就可以大致输出12V 的平均电压。

        ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwk36ucv0BzpL54icvD94mEEQfxYGZkOUjI7z3uFXluVclGKIFQjUna4Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## **四、继电器**

1）作用：具有隔离功能的自动开关元件。实际上是用小电流去控制大电流运作的一种“自动开关”。给一端加入一个小电流，然后就会使线圈产生磁场，然后另外一端导通。实质就是小电压控制大电压，一个开关的作用。

2）实物图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHwGY0nt5a3smcIhJ6Nhibt9QAgVqtuicRN99tooqX2tnbzuDmsPwialfR7g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lf2H8alYc95yHNBqmKSZVHw99xhod84zEohPSL9vY1nf8xgAv8K7XIR9fhck84Sr2DYu298DXVW8Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

1，2引脚是小电流控制；3，4引脚大电流，可以实现小电流去控制大电流的开关，还有电路隔离的作用，也就是3，4端元器件的短路不会影响到1，2端。

## **五、AFE**

1）作用：AFE是模拟前端，用来采集电芯电压和温度等。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

  

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。