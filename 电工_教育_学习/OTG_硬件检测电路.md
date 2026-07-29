# OTG 硬件检测电路

原创 硬件笔记本 2023-07-05 00:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/tnywAsOQhXQWpM-2dbyQfA](https://mp.weixin.qq.com/s/tnywAsOQhXQWpM-2dbyQfA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

## 1\. OTG 接口与转换器

OTG 是"On The Go"的英文缩写，可以理解为“安上即可用”。USB 传输是主从结构，一切 USB 传输都由 Host 发起。

在开发板上可以插入 U 盘，这时开发板作为 USB Host。

开发板要跟 PC 通信，开发板就要作为 USB Device。

开发板要作为 USB Host、USB Device 两种角色，可以使用 OTG 插口：它可以根据硬件电路自动识别自己的角色，切换为 USB Host 或 USB Deivce。

OTG 插口有多种形态，常用的有 Micro USB、Type C，如下：![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_002_17a23a792d76.png)

### 1.1 Micro USB

对于 Micro USB 插座，它有 5 条引脚：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_003_62dccd057750.png)

引脚作用如下表所示：

引脚名

作用

VBUS

作为 Host 时，对外供电  
作为 Device 时，接收外部输入的电源

DM

数据信号

DP

数据信号

ID

分辨自己角色的引脚：  
1：作为 Device  
0：作为 Host

GND

地线

开发板作为 USB Device 时，跟 PC 上的 USB 相连，PC 的 USB 接口只有 VBUS、DM、DP、GND，所以开发板的 ID 引脚跟 PC 的 USB 口并无连接，它被板子上的上拉电阻拉高。

开发板作为 USB Host 时，需要接入一个"OTG 转换器"，再连接 U 盘。如下图黑色的转换器：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_004_374ae07edeae.png)

OTG 转换器的内部电路很简单，就是把 ID 引脚拉低：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_005_7505ae7306ff.png)

这个转换器插入开发板的 OTG 口之后，OTG 口上的 ID 引脚就被拉低，软件把开发板转换为 USB Host。

### 1.2 Type C

Type C 插座里面有两组完全一样的信号，Type C 数据线无论正插、反插，都可以使用：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_006_9a5f6fc86a17.png)

Type C 插座有如下信号，在 USB2.0 协议里我们只关心红框里的信号：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_007_e0a5abfd82b9.png)

开发板作为 USB Device 时，跟 PC 上的 USB 相连，PC 的 USB 接口只有 VBUS、DM、DP、GND，所以开发板的 CC1、CC2 引脚跟 PC 的 USB 口并无连接，它被板子上的上拉电阻拉高。

开发板作为 USB Host 时，需要接入一个"OTG 转换器"，如下图黑色的转换器：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_008_5f754a45c757.png)

如果不考虑兼容 USB 3.0 协议，上述转换器的电路图很简单，把 Type C 插头里面的 CC 引脚连接 5.1K 欧姆电阻到 GND 即可。如下图所示：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_009_477454e7d045.png)

## 2\. OTG 接口电路

开发板上的 OTG 接口需要实现两个功能：

-   检测 ID 引脚(使用 Type C 接口的话是 CC1、CC2 引脚)，引入主控芯片：软件根据它设置 USB 控制器的角色(Host 或 Device)
    
-   根据 ID 引脚(或者 CC1、CC2)决定 VBUS 是否输出电源：硬件电路自动实现，或者加入专用芯片
    

### 2.1 Micro USB

当 USB\_OTG1\_ID 高电平时，说明 ID 引脚被板子的上拉电阻拉高，没有被拉低。这时候 AO3416 导通，EN 引脚不使能。这样 SY6280AAAC 就不会对外供电，USB\_OTG1\_VBUS 就没有电压。  

  

当 USB\_OTG1\_ID 低电平时，说明 ID 引脚被拉低，这时候 AO3416 截至，EN 引脚使能，SY6280AAAC 对外供电，USB\_OTG1\_VBUS 有电压，开发板作为 USB Host 对外供电。

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_010_8e5fad1d9127.png)

### 2.2 Type C

如果不考虑兼容 USB 3.0 协议，可以使用如下精简电路：CC1、CC2 作为 ID 引脚。原理和上图类似。

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_011_0c1521feafc5.png)

如果要兼容 USB 3.0 协议，则需要加入专用的芯片，专用芯片检测到 CC1、CC2 状态后，发中断给主控，并通过 I2C 将信息报给主控，主控再控制供电引脚：

![](D:\电脑文件\公众号知识库\电工_教育_学习\OTG_硬件检测电路_images\img_012_658b51e297ec.png)

**参考：**

```
韦东山老师驱动大全
```

## 

**声明：**

  

声明：来源嵌入式Linux系统开发。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群