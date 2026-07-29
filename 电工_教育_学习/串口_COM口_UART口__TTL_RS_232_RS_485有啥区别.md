# 串口、COM口、UART口, TTL、RS-232、RS-485有啥区别

原创 硬件笔记本 2023-09-08 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/v20QPbQs\_7R\_QwzH8aZnRQ](https://mp.weixin.qq.com/s/v20QPbQs_7R_QwzH8aZnRQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

调试时总是会遇到各种各样的接口，各种各样的转换板，似懂非懂的感觉很不爽!

  

**首先，串口、UART口、COM口、USB口是指的物理接口形式(硬件)。而TTL、RS-232、RS-485是指的电平标准(电信号)。**

**串口：**串口是一个泛称，UART，TTL，RS232，RS485都遵循类似的通信时序协议，因此都被通称为串口。

  

**UART接口：**通用异步收发器(Universal Asynchronous Receiver/Transmitter)，UART是串口收发的逻辑电路，这部分可以独立成芯片，也可以作为模块嵌入到其他芯片里，单片机、SOC、PC里都会有UART模块。

  

**COM口：**特指台式计算机或一些电子设备上的D-SUB外形(一种连接器结构，VGA接口的连接器也是D-SUB)的串行通信口，应用了串口通信时序和RS232的逻辑电平。

  

**USB口：**通用串行总线，和串口完全是两个概念。虽然也是串行方式通信，但由于USB的通信时序和信号电平都和串口完全不同，因此和串口没有任何关系。USB是高速的通信接口，用于PC连接各种外设，U盘、键鼠、移动硬盘、当然也包括“USB转串口”的模块。(USB转串口模块，就是USB接口的UART模块)

  

 **TTL，RS232，RS485都是一种逻辑电平的表示方式**

  

**TTL：**TTL指双极型三极管逻辑电路，市面上很多“USB转TTL”模块，实际上是“USB转TTL电平的串口”模块。这种信号0对应0V，1对应3.3V或者5V。与单片机、SOC的IO电平兼容。不过实际也不一定是TTL电平，因为现在大部分数字逻辑都是CMOS工艺做的，只是沿用了TTL的说法。我们进行串口通信的时候从单片机直接出来的基本是都是 TTL 电平。 

  

**TTL电平：**全双工(逻辑1: 2.4V--5V 逻辑0: 0V--0.5V)

  

1、硬件框图如下，TTL用于两个MCU间通信

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_002_c071ab682b0c.jpg)

  

2、‘0’和‘1’表示

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_003_51d9322f6365.png)

**RS232：**是电子工业协会(Electronic Industries Association，EIA) 制定的异步传输标准接口，同时对应着电平标准和通信协议(时序)，其电平标准：+3V～+15V对应0，-3V～-15V对应1。rs232 的逻辑电平和TTL 不一样但是协议一样。

  

**RS-232电平：**全双工(逻辑1：-15V--5V 逻辑0：+3V--+15V)

  

1、硬件框图如下，TTL用于MCU与PC机之间通信

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_004_2b04bcbdff4b.png)

  

2、‘0’和‘1’表示

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_005_b6b2ec239ebf.png)

**RS485：**RS485是一种串口接口标准，为了长距离传输采用差分方式传输，传输的是差分信号，抗干扰能力比RS232强很多。两线压差为-(2~6)V表示0，两线压差为+(2~6)V表示1

  

**RS-485：**半双工、(逻辑1：+2V--+6V 逻辑0：-6V---2V)这里的电平指AB 两线间的电压差。

  

1、硬件框图如下

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_006_3d0d64ed7fa0.jpg)

2、‘0’和‘1’表示

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_007_3c5470f38f9a.png)

COM口即串行通讯端口，简称串口。这里区别于USB的“通用串行总线”和硬盘的“SATA”。

  

一般我们见到的是两种物理标准。D型9针插头，和 4针杜邦头两种。

  

这是常见的4针串口，在电路板上常见，经常上边还带有杜邦插针。还有时候有第五根针，3.3V电源端。

  

由于是预留在电路板上的，协议可以有很多种，要看具体设备。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_008_cf9db0dbf7c9.png)

嵌入式里面说的串口，一般是指UART口，但是我们经常搞不清楚它和COM口的区别, 以及RS232, TTL等关系, 实际上UART,COM指的物理接口形式(硬件), 而TTL、RS-232是指的电平标准(电信号). 

  

UART有4个pin(VCC, GND, RX, TX), 用的TTL电平, 低电平为0(0V)，高电平为1(3.3V或以上)。

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_009_cddda537060c.png)

下面这个就是D型9针串口(通俗说法)。在台式电脑后边都可以看到。记住，这种接口的协议只有两种：RS-232和RS-485。不会是TTL电平的(除非特殊应用)。9针串口的定义可以参考这里：

http://wenku.baidu.com/view/5c170c6925c52cc58bd6be6e.html

  

我们一般只接出RXD TXD两针，外加GND。

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_010_92b9483abee4.jpg)

  

下图是个USB转TTL串口的小板，可以用USB扩展出一个串口。芯片为PL2303HX。网上经常混淆各种串口，但是这个确实是可以给STC单片机下载程序的。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_011_422ce8a4234f.jpg)

  

这是另一种，CP2102芯片的，也是USB转TTL串口。据说比PL2303的好，实际使用中没感觉出来。这个小板就多了+3.3V电源端，以适应不同的目标电路。下图为USB转RS-232串口：

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_012_0986f35aa85b.jpg)

硬件工程师都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_013_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_014_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_015_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_016_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_017_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_018_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_019_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_020_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_021_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_022_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_023_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_024_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_025_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_026_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_027_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\串口_COM口_UART口__TTL_RS_232_RS_485有啥区别_images\img_028_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群