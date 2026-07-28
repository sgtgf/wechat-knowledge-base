# 别光收藏网页了！这份可以打印、可以做笔记的CAN入门指南，才是真干货

原创 王工 硬件笔记本 2025-12-04 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/9zhIpW1cMEavggwdcfqsqA](https://mp.weixin.qq.com/s/9zhIpW1cMEavggwdcfqsqA)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

大家好，咱们做产品设计的，经常需要和各种通信协议打交道，像RS485、RS232、UART、I2C这些，每个协议都有自己的特点和应用场景。今天我们来聊聊CAN总线，并分享一份由瑞萨电子出版的《CAN入门书》PDF文档，非常适合初学者。

51页文档获取方式在文末，需要的朋友可以下载学习。

  

01

CAN总线简介

咱们汽车越来越智能，像发动机控制、ABS防抱死、自动空调、中控系统等电子模块越来越多。如果每个模块都单独走线，那汽车里的线束就会多得像一团乱麻，不仅接线麻烦、成本上升，还容易出故障。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0WdbafeWia7xM6ZzEg9Vb5EJMFjA5HX04Ygg50Heib0f4uKIDOTUsAcFvQ/640?wx_fmt=png&from=appmsg)

CAN总线就是为了解决这个问题而生的。它的全称是**控制器局域网（Controller Area Network）**，是一种在汽车、工业控制等领域广泛使用的串行通信协议。简单来说，它就像一条数据高速公路，让多个电子控制单元（ECU）可以通过一对双绞线进行高效、可靠的通信，大大减少了线缆数量，也提升了系统的灵活性和可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0Wf1vfQeY4NaQIzEsuvCxM2ibpBo0NasMZspndHop75SmeAiado66PLghg/640?wx_fmt=png&from=appmsg)

CAN最早是由德国博世（BOSCH）公司在1986年为汽车电子系统开发的，后来被国际标准化组织（ISO）采纳，成为汽车网络的国际标准。如今，CAN不仅用于汽车，还广泛出现在工业自动化、船舶控制、医疗设备、机器人等多个领域。

  

02

《CAN入门书》内容介绍

瑞萨电子出版的这份《CAN入门书》是一本面向初学者的实用指南，这份文档内容适用于软件开发工程师，硬件开发工程师，对协议基础能有一个基本的认识，内容从CAN的基本概念讲起，逐步深入到协议细节、错误处理、帧结构、时序同步等核心内容。下面我挑几个知识点带大家过一遍：

先说这**CAN的基本特点**。CAN总线采用多主控制，所有节点在总线空闲时均可发起通信。当多个节点同时传输时，系统通过标识符(ID)进行智能仲裁，ID值小的优先级高，自动胜出继续发送，其余节点则安静转为接收。协议内置三重容错机制：实时错误检测、全网广播告警、自动重发恢复，并能智能隔离故障节点。扩展时无需地址分配或修改现有配置，真正实现即插即用。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0WH8CtCbosyOPR3xRjqxXShcv8dYy83bNNUKE5RqKibibUVayDewrIsAKA/640?wx_fmt=png&from=appmsg)

关于**CAN的帧类型**，王工可能这么理解：“这就好比几个人之间传纸条，有正经传内容的数据帧，有向别人要东西的遥控帧，还有发现纸条写错了赶紧发个刚才那条作废的错误帧。要是手头忙不过来，也能发个过载帧说：“等等，我还没准备好”。帧与帧之间还得留点空隙，就是帧间隔，别把不同事儿的纸条粘一块儿了。”

说到**错误处理机制**，CAN总线的强大之处在于它的容错能力。每个设备都随时在检测错误，一旦发现错误，会立即发送错误帧通知全网，然后自动重发。设备还会根据错误次数进入不同的错误状态，严重时甚至自动离线，避免影响整个网络。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0Ww0pZeYzx5AiaCs6JzXGficNsiaONefw4TWY7c5S7QwnjYhdIuWQxkbGwA/640?wx_fmt=png&from=appmsg)

谈到**物理层与标准**，这里要提醒大家注意区分：先弄清楚要做什么事。因为分为两种标准：高速CAN（ISO11898）和低速CAN（ISO11519-2）。要是发动机控制这种，就得用高速CAN，跑得快，线不能拉太长。要是控制车窗、车灯这些，用低速CAN就行，经济实惠还能拉得远点。这俩标准电压、电阻啥的都不一样，选用时需注意匹配相应的驱动芯片。”

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0W5SO5QnXB0qvy1e5tebdhcwoEOmz18gdgqibMKKtlZydgEYsudlKPJ7w/640?wx_fmt=png&from=appmsg)

讲到**位时序与同步**，CAN通信中没有单独的时钟线，设备靠数据信号自身的边沿来同步。每个位时间被分成4段：同步段、传播段、相位缓冲段1和2。通过调整这些段的长短，设备可以在一定误差范围内保持同步，保证数据采样准确。

  

03

获取方式

如果你是刚开始接触CAN的工程师或学生，这份《CAN入门书》是一个很好的起点。它从基础概念入手，逐步展开到协议细节，配合图表说明，易懂且实用。当然，实际应用中还需结合具体芯片手册和系统设计规范，但理解这些基础知识，无疑是迈向实际开发的重要一步。

如何下载《CAN入门书》，更好的学习CAN基础相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|CAN入门书

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0WUJdLAmdMy0nDlnVcTBmREdHdrf4bgO3ibiaQjBWDyG5yzExuKSNgvp6A/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjCibUnpY0X8YRhbIgnz7c0WDJMbBriaCXYuiaAXhSPuuEBrEPM98ianKJm87qz2iaj6JPXBA8FkcKhlyQ/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。