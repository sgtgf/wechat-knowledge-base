# 自从接触了物联网，才发现串口屏只是冰山一角，I2C、SPI、UART、RGB、LVDS，MIPI，EDP...谁才是未来的主流？

原创 王工 硬件笔记本 2025-03-17 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/9xZaIXyY4L07Jo3PdIIwOA](https://mp.weixin.qq.com/s/9xZaIXyY4L07Jo3PdIIwOA)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。

物联网行业中，LCD显示屏的应用非常广泛，尤其是在智能家居、工业物联网、智能穿戴等领域。因为广泛应用，所以今天咱们来简要看看显示屏的接口，比如I2C、SPI、UART、RGB、LVDS、MIPI、EDP等，下面简要总结一下。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg0jSsRVticobpfRMhyRWibES8UQ7HvT8Kl6iaWPTmJPvgdicu6U8TLfHKSqSqyeJgia7koz4UthNPdK0w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

011

****中小屏接口I2C、SPI、UART****

一般3.5寸以下的小尺寸LCD屏，显示数据量比较少，普遍采用低速串口，如I2C、SPI、UART。

  

**I2C：**

I2C总线是半双工，两线。

I2C总线的工作速度分为3种：

S(标准模式)：100Kbps，即 100/8 = 12.5KB/s

F(快速模式)：400Kbps，即400/8 = 50KB/s

HS(高速模式)：3.4Mbps，即3.4M/8 = 435KB/s

超高速模式：5Mbit/s，即5M/8 = 525KB/s

  

**SPI：**

SPI总线是全双工，三线或四线制。

SPI没有官方化，速率不统一，根据器件不同传输速率不一，有几M，十几M的，也有几十M的，比I2C速度快。  

  

**UART：**

无限制，速度取决于波特率，常用9600bps（1.2KB/s）和115200bps（14.4KB/s）。

  

021

****大屏接口RGB、LVDS、MIPI、EDP****

高分辨率屏，几乎都是高速串口的接口。主要是LVDS、MIPI-DSI和EDP接口。手机上都是MIPI接口的屏，车载和数码产品上有大量的LVDS接口的屏。

## 2.1、RGB接口

RGB一般是指RGB色彩模型(RGB color model)，是工业界的一种颜色标准。通过对三个颜色通道的变化以及它们相互之间的叠加来得到各式各样的颜色。

  

a. Parallel RGB

分辨率：1920 \* 1080

时钟频率：1920\*1080\*60\*1.2 = 149MHz

  

b. Serial RGB

分辨率：800 \* 480

时钟频率：800\*3\*480\*60\*1.2 = 83MHz

  

**特点：**  

1、RGB接口占用的资源较多，所以这个接口的LCD刷新率非常快，软件控制也比较简单；

2、RGB接口的显示数据不需要写入内存进行处理，可以直接写入LCD进行显示，所以响应速度和刷新速度都比MCU接口快很多；

3、缺点是控制需要增加电路，软件初始化需要增加程序，占用资源较多；

4、时钟频率要设置合适。太快，LCD反应不过来，显示不了，太慢也不合适，这个范围可以根据你的刷新率需求和LCD的规格书（一般会有一个最少响应周期）来确定。

  

## 2.2、LVDS接口

LVDS（Low Voltage Differential Signal）即低电压差分信号。1994年由美国国家半导体（NS）公司为克服以TTL电平方式传输宽带高码率数据时功耗大、电磁干扰大等缺点而研制的一种数字视频信号传输方式。它是一种电平标准，广泛应用于液晶屏接口。

  

其中发送端是一个**3.5mA的电流源**，产生的3.5mA的电流通过差分线中的一路到接收端。由于接收端对于直流表现为高阻，电流通过接收端的100Ω的匹配电阻产生350mV的电压，同时电流经过差分线的另一路流回发送端。当发送端进行状态变化时，通过改变流经100Ω电阻的电流方向产生有效的'0'和'1' 态。

  

# 它是电流驱动的，通过在接收端放置一个负载而得到电压，当电流正向流动，接收端输出为1，反之为0。

![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj9c9z8wSmn1uUsB58FHkNj3bVdykvYo9rRxnxcicRXEVj4L3X0sk7XW3Rxicm0O8dEH8siapFYicV5SA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**特点：**

# **1、LVDS是电流驱动模式  电压摆幅350mV，加载在100Ω电阻上；**

# 2、传输速度快，推荐最大速率为655Mbps ，理论极限速率为1.923Gbps；

# 3、LVDS不太适合较长距离的信号传送；

4、LVDS接口只用于传输视频数据；

5、LVDS接口主要将RGB TTL非平衡传输信号转换成LVDS平衡传输信号进行传输。

**6、LVDS不支持热插拔。**

## 2.3、MIPI接口

MIPI (Mobile Industry Processor Interface) 是2003年由ARM, Nokia, ST ,TI等公司成立的一个联盟，目的是把手机内部的接口如摄像头、显示屏接口、射频/基带接口等标准化，从而减少手机设计的复杂程度和增加设计灵活性。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh7GFnYo6icU4htEI8HPOOeTic3WbrSthPD8iaibZ8mY4MwVpdcrbRyIQx65piajGDdaCK9piaWrCC5cumQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

MIPI联盟下面有不同的WorkGroup，分别定义了一系列的手机内部接口标准，比如

摄像头接口CSI（Camera Serial Interface）

显示接口DSI（Display Serial Interface）

射频接口DigRF

麦克风 /喇叭接口SLIMbus

  

接口示意图  

![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj9c9z8wSmn1uUsB58FHkNjCwzF1oNOuC9csuMndWe49p3SJbzibdZHuqgDEj3dguehsWXVyG9ETGQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**特点：**

1、MIPI不仅能够传输**视频数据**，还能传输**控制指令**；

2、MIPI DSI接口是按照特定的握手顺序和指令规则传输屏幕控制所需的视频数据和控制数据；

3、MIPI接口的模组，相较于并口具有速度快，传输数据量大，功耗低，抗干扰好。并且专门为移动设备进行的优化，因而更适合手机和智能平板的连接。

  

## 2.4、EDP接口

全称为Embedded DisplayPort，用于笔记本、平板电脑的一种数字接口。是视讯电子标准协会(VESA)针对行动装置应用。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh7GFnYo6icU4htEI8HPOOeTS7jtYaZORXzvA1ubzwBBujib1Fr85bAfnUcOQiaujQ5NE8R7tQ95kWcw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**特点：**  

1、eDP协议是针对DP应用在嵌入式方向架构和协议的拓展，所以eDP协议完全兼容DP协议；

2、eDP接口属内部接口，可以用做芯片与芯片之间的传输，也可用显示屏与驱动板之间的传输；

3、由于该类接口能够实现多数据高速同时传输，且电磁干扰小，目前正在逐渐取代传统的低电压差动讯号（LVDS）接口。

  

除了上面介绍的，还有一种大家很少听过的**VB1接口**，具有高带宽、抗干扰能力和简化布线的特点，使其成为大尺寸LCD的理想选择（主要在27~65寸）。

  

以上接口介绍了一些基本的概念，实际上每个接口相关的知识非常多，比如**通信标准，协议规范，信号组成，初始化配置流程**，只有更深入的了解，我们在遇到问题的时候才更进一步判断是什么原因引起，从而解决遇到的**无显示、花屏、闪屏**以及其它问题，大家先有所了解，后面遇到了相关的接口再深入去学习吧。

如果这篇文章对你有帮助，别忘了点赞、收藏，并分享给更多需要的人！

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgzfuoN0611riacBaXWMz1bf4VhibuwTs50lL1Ciblge3EhmVfonwqsN2GezDxt6zkrUfQ910APuKiaxA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)