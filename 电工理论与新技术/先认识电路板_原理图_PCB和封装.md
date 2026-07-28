# 先认识电路板：原理图、PCB和封装


> 原文地址: [https://mp.weixin.qq.com/s/mAO-yeQYx4H4OY3KwbBVmA](https://mp.weixin.qq.com/s/mAO-yeQYx4H4OY3KwbBVmA)

#   

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6Luyy2KP70XfVvR47DTzI8IJzwia4bjWqFRH8gwtxkKibG00jqS0obKJzoKCcNBOCHdN1oxU3J0WYXraW7A7EJQvICTfknkd1JSySZM/640?wx_fmt=jpeg)

* * *

# 本篇要解决什么问题

很多初学者第一次看电路板，会觉得它只是一块布满元件和铜线的“小绿板”。但在自动化设备里，电路板并不是配角。

它承担三件关键工作：

-   把电源送到需要工作的地方。
    
-   把传感器、芯片、驱动器和接口连接起来。
    
-   让控制信号以稳定、可制造、可维护的方式流动。
    

这一篇的目的，是先把三个基础概念讲清楚：**原理图、PCB、芯片封装**。它们分别回答“电路怎么连接”“实物怎么落地”“元件如何安装”这三个问题。

* * *

# 1\. 原理图：说明电路关系的图

原理图不是实物摆放图，而是电路关系图。它关心的是：

-   谁接电源？
    
-   谁接地？
    
-   哪个引脚连接到 MCU？
    
-   哪个电阻用于上拉或限流？
    
-   哪个电容用于滤波？
    
-   哪些接口连接传感器、电机或显示模块？
    

也就是说，原理图回答的是：

> 这些电子器件在逻辑上应该如何连接？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyyORnqFicmjuJOc428Z0T9RVIvdMbmlZM3n9iabZ3sSZ60Jib87Nfic6gZ0sZZZb04sHy21ggISybQVp8m3c30Wt3B3Ba3VSKBr0Vs/640?wx_fmt=jpeg&from=appmsg)

  

看原理图时，初学者可以先抓住几类信息：

-   **电源**
    
    ：VCC、5V、3.3V、GND。
    
-   **控制信号**
    
    ：IO、PWM、TX/RX、SDA/SCL。
    
-   **保护器件**
    
    ：二极管、保险丝、TVS、限流电阻。
    
-   **接口**
    
    ：排针、端子、传感器插座、电机接口。
    

把设备看作一个小系统，原理图就像系统内部的连接说明书。它不一定告诉你元件长什么样、放在哪里，但会告诉你它们之间必须怎样协作。

* * *

# 2\. PCB：把电路关系变成真实板子

PCB 是印制电路板。原理图解决“谁和谁应该相连”，PCB 进一步解决：

> 这些连接在真实板子上怎么走线、怎么摆放、怎么制造？

PCB 图会包含走线、焊盘、元件位置、板子尺寸、孔位、安装方向等信息。它更接近最终产品。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyzLUvia4jIuJib9QCITGjmCz1OYictrBbbFjp1jBGVl6mpfUmTJm6zX3vR3sIgb4Szj1OThR5Up5jyfw2uUucqzPVLRJD0lQedMMg/640?wx_fmt=jpeg&from=appmsg)

  

一个好的 PCB，不只是把线连通，还要考虑：

-   电源线是否足够粗。
    
-   大电流和小信号是否合理分开。
    
-   高频信号走线是否太长或太绕。
    
-   接插件位置是否方便装配和维护。
    
-   板子是否能放进外壳。
    
-   螺丝孔和机械结构是否冲突。
    
-   关键测试点是否方便调试。
    

这也是为什么“原理图对了”并不等于“板子一定好用”。原理图关注逻辑连接，PCB 还要面对空间、电流、干扰、生产和装配。

![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuyxH4T9a9dTmsGXyEMzia9hGpa3JJy6Nh4mynicmib8icH33TTtP7NmPYnkBSdKh5N72tWB2uLf9CQK3xaglX767PNlXnymBNyyNDGw/640?wx_fmt=jpeg)

  

* * *

# 3\. PCB生产：从覆铜板到成品板

早期学习 PCB 制作时，很多人会接触热转印和腐蚀工艺，大致过程是：

1.把 PCB 线路打印到热转印纸。

![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6Luyx469ibicvNIgKjn4tRMIwX5nHaIJicibTTkcPPztDJmJUCyeH7G3cOibZleKciciafzdc1YFDj0OqWZDf8hxBsbTD4Bp41WlIpDSSK0A/640?wx_fmt=jpeg&from=appmsg)

  

2.转印到覆铜板。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyzCjHlJ6OMia5FnKhib7ibVGdgI01PLahrM5rEH3YWsPgw8oh7yichGgbuicASgMSkia3AjVUKwIWLoq260Fs4mSMpMnsnRXn40kPQzc/640?wx_fmt=jpeg&from=appmsg)

  

3.腐蚀掉多余铜箔。

![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuyygVhcCw6doAadgn28weVibIGMxb0R53ibdf5gVrwiclGlyg4H2fgRjJgibdNibXUWrYMQhIpjYdxAia6yAsbjYc4sMA8Am1icahgDQicw/640?wx_fmt=jpeg&from=appmsg)

4.清洗、钻孔、焊接。

这个过程能帮助读者建立一个直观认识：电路板上的“线”，本质上是留下来的铜箔。工业生产当然复杂得多，还会涉及阻焊层、丝印层、沉铜、喷锡、镀金、多层板压合等工艺。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyzEGbPGdoGlQibibXFUEYJMSbiaJUWS9OtmMRQ1mIat3wDmnNcsr3mibDicJuVHpMNnnoUdoiaz4RWfmia7GJYJwKXiacicZ0FLazLewDAg/640?wx_fmt=jpeg)

对入门者来说，不必一开始背完整工艺流程，但要理解一点：

> PCB 不是“能连上就行”，它还关系到稳定性、可制造性和后期维护。

现在如果要自己制作电路板，已经变得非常的简单，可以在 嘉立创 等平台直接上传设计图，网上下单，几天就可以把电路板给你做好，甚至元器件都可以焊接好给你邮寄过来，如果有兴趣可以自行搜索资料，了解如何操作。

* * *

# 4\. 芯片封装：芯片如何接入外部世界

芯片内部很小，外部设备却需要焊接、插拔、散热和保护。封装就是芯片的外壳和引脚形式，它既保护芯片，也把内部信号引出来，方便连接到 PCB。

常见封装可以先理解为三类：

# DIP：适合入门和手工焊接

DIP 是双列直插封装，两排引脚，可以插面包板，也方便焊在洞洞板上。它适合实验、教学和早期验证。

# QFP：更紧凑的贴片封装

QFP 引脚分布在芯片四周，间距更小，适合更高集成度的芯片。它通常需要更细致的焊接和 PCB 设计。

# BGA：高密度封装

BGA 的焊点在芯片底部，适合高性能、高引脚数量的芯片。它对 PCB 工艺、焊接设备和检测方式都有更高要求。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6Luyza6AmdE5yBT609NC2Ra5C0NJZNAEibWNUJE0fMiaOAy0F6icbS2qOibmlfCA3a2QQXH6X69iclT5zwpV3ib6dfiauhxxNJs6dVY6Y8Tg/640?wx_fmt=jpeg)

选封装时，不能只看芯片性能，还要看能不能买到、能不能焊接、能不能调试、生产是否可控。

* * *

# 5\. 初学者建议

刚入门时，可以按下面顺序学习：

0.  先看懂 Arduino、51、STM32 等开发板的简单原理图。
    
1.  用面包板或洞洞板搭几个小电路，理解电源、信号和接地。
    
2.  尝试画一个简单转接板或传感器板。
    
3.  再逐步学习 PCB 走线、电源、保护和抗干扰。
    

电路板是自动化设备里承载信号和电源的基础。理解它，不是为了马上成为硬件工程师，而是为了知道控制器、传感器、执行器之间到底怎样连接起来。