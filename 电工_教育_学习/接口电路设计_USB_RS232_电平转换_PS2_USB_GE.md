# 接口电路设计：USB、RS232、电平转换&PS2、USB&GE

原创 电路一点通 2025-05-29 12:52 广东

> 原文地址: [https://mp.weixin.qq.com/s/cDAAy-eLUixdn0oOf-mAcA](https://mp.weixin.qq.com/s/cDAAy-eLUixdn0oOf-mAcA)

## USB接口设计部分

### 一、USB接口简介

USB总线是目前应用最为广泛的的外设接口规范。随着时代的发展，外设的进步，USB接口规范从USB1.0~USB 3.2。

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_000_7a86b9839cac.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

USB 3.0 是高速的全双工模式 ，增加了 两对 差分对。  
USB 2.0 写数据时不能读数据，是半双工模式。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_001_1c862aad2e6c.png)

### 二、USB3.0介绍 

1.  提供了更高的每秒 5Gbps 传输速度，USB2.0  480Mbps。
    
2.  对需要更大电力支持的设备提供了更好的支持，最大化了总线的电力供应 USB3.0 900mA， USB2.0 500mA。
    
3.  增加了新的电源管理功能:  
    在 USB2.0 接口中，支持激活 (ACTIVE) 和挂起 (SUSPEND) 两种电源管理模式。  
    在超高速 USB3.0 接口中，除了激活 (ACTIVE) 和挂起 (SUSPEND) 之外，还支持空闲 (FASTEXITIDLE) 和睡眠 (SLOW EXIT IDLE) 两种电源管理模式。
    
4.  全双工数据通信，提供了更快的传输速度。
    
5.  向下兼容 USB 2.0 及 USB 1.1 设备。
    
6.  USB3.0 采用了**对偶单纯形四线制差分信号线**，故而支持双向并发数据流 传输，这也是新规范速度猛增的关键原因。  
    在原有 4 线结构（电源， 地线，2 条数据线）的基础上，USB 3.0 再增加了  4 条线路 ，用于接收和传输信号。因此不管是线缆内还是接口上，总共有 8 条线路。
    
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_002_09946c3ffbcb.png)
    
7.  正是额外增加的4条（2对）线路提供了“SuperSpeed USB”所需带宽的支持，得以实现“超速”。显然在USB 2.0 上的2条（1对）线路，是不够用的。
    
8.  此外，在信号传输的方法上仍然采用主机控制的方式， 不过改为了异步传输。USB 3.0利用了双向数据传输模式， 而不再是USB 2.0时代的半双工模式。简单说，数据只需要着一个方向流动就可以了，简化了等待引起的时间消耗。
    

### 三、USB 接口设计

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_003_bdf4e9984af6.png)

* * *

## RS232接口设计部分

### 一、原理图

#### 1.1串口上拉

书面解释：UART232 的 RX 工作中处于输入状态, 为了避免 RX 不定电平的噪声导致输入乱码等问题, 加上拉可以确定电平。

详细解释：（让你醒姐来给你说道说道）  
1、为什么要拉？  
在一般情况下，9、12管脚是处于浮空状态，外面的噪声可能存在误触发成低或者高，会误以为接收到数据了其实没有接受到数据。  
2、为什么是上？  
是因为 232 协议输入信号以低电平作为数据接收的开始。加上拉就是为了在没有数据传输的时候保持高电平，如果有噪声就都是无效的传输。  
3、为什么是 RX 不是 TX？  
TX 上加也是可以的，是为了保证 232 的发送的时候没有差错。  
硬件工程师们都在各自的 RX 上加，当 RX 连接了其他的工程师的 TX 时，就相当于对方的 TX 也上拉了，所以工程师们都默认在 RX 上接上拉电阻。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_004_98cdb23ccda1.png)

#### 1.2信号

UART 的协议规定 RX 输入信号中，以低电平作为数据接收的开始，所以上拉可以保持 RX 无数据接收的状态。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_005_255057f068d3.png)

### 二、基本参数

1.  载波检测(DCD - Data Carrier Detect)
    
2.  接受数据(RXD - Receive Data)
3.  发出数据(TXD - Transmit Data)
4.  数据终端准备好(DTR - Data Terminal Ready)
    
5.  信号地线(SG - System Ground)
6.  数据准备好(DSR - Data Set Ready)
    
7.  请求发送(RTS - Request to Send)
    
8.  清除发送(CTS - Clear to Send)
    
9.  振铃指示(RI - Ring Indicator)
    

* * *

## 电平转换&PS2

### 一、电平转换

#### 1.1 案例1

将内部 1V8 转换成 3V3 。 

B 端对外，并且 B 端的电压一定比 A 端高。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_006_69543e08dc39.png)

####  1.2案例2

其中有一个管脚是 DIR 为方向控制的电路，只需要对 DIR 进行访问。  
如 B→A，只需要将 DIR 拉低。  
如果需要切换方向，可以将 DIR 接到 GPIO 控制电平，下图中是将 DIR 固定，只能 B→A 。

有很多单片机是支持容忍 5V 的，所有只 B→A 的话，实际上没有大问题，为了电路的安全可靠加上一个电平转化。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_007_dfbdbc04dbfe.png)

### 二、PS2接口

数据、时钟、电源、地，是一个非常老式的接口。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_008_28bae35ab70f.png)

对外的接口都会放一些 ESD，加上 附近的小电容防静电；大电容滤波。

磁珠是最好的隔离外壳地和信号地的元器件

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_009_f091852c3c0b.png)

* * *

## USB&GE接口

### 一、GigE接口电路设计

（1）下图是一个网口的设计。

注意 GMAC 是差分走线，并在变压器在 PCB 布线时挖空。因为变压器里面是线圈，干扰到地，地就不是干净的信号地了。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_010_ed30ded81006.png)

（2）USB转千兆网PCB图

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_011_ea38f4d79ce8.png)

### 二、USB接口电路设计

#### 2.1 USB2.0原理图

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_012_fc94d41e8434.png)

（1）变压器

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_013_de35721591c4.png)

（2）主从

在下图中只有 4 个接口，区分主从是因为在信号线里面有 ID，来区别主从。

当又做主又做从：可以将 ID 接到 MCU 的 GPIO ，置高为主，置低为从。

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_014_ca01e63dcbb0.png)

#### 2.2 DVI/HDMI接口设计

显示接口设计 VGA

![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_015_f63dc322a774.png)

EEPRAM 中存储的是显示器 ID ，告诉 MCU 后，显卡就去读取适配显示器。

其他注意事项：

1.  做 ESD 和阻抗匹配
    
2.  电平转换
    
3.  RGB 最后转换成模拟信号，是高速的敏感的模拟信号。  
    按模拟信号的要求去走线：和数字信号隔离；模拟地和数字地要单点接地；走线最好走弧形线；包地（防止电磁干扰）。  
    如下图：电阻阻抗匹配、电容滤波、磁珠吸收高频信号。  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_016_f3fb5127f6c0.png)
    
         注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。
    
    ## **一点通推荐**
    
    ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\接口电路设计_USB_RS232_电平转换_PS2_USB_GE_images\img_017_890b826d602a.jpg)
    
    ******进大家庭⭕圈探讨回复:************交流******
    
      
    
    分享💬点赞👍在看❤️
    

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**