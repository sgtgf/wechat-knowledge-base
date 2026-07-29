# 屏幕接口类型集锦（MCU,RGB,MIPI,LVDS,HDMI）

原创 电路一点通 2025-04-02 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/js25MOplQl5xh90uD4r6iA](https://mp.weixin.qq.com/s/js25MOplQl5xh90uD4r6iA)

#### 

#### **![cover](D:\电脑文件\公众号知识库\电工_教育_学习\屏幕接口类型集锦（MCU_RGB_MIPI_LVDS_HDMI）_images\img_000_b59b97786a7d.png)**  

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\屏幕接口类型集锦（MCU_RGB_MIPI_LVDS_HDMI）_images\img_001_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

#### **一、内部接口（板载接口，用于嵌入式系统）**

##### **1\. 并行接口**

**（1）MCU接口**

-   MCU 接口（微控制器接口）的标准术语是**Intel 提出的 8080 总线标准**，因此在多数文档中直接称为**I8080 接口**或**8080 接口**。其命名源于早期主要应用于单片机（MCU）领域，如嵌入式系统、中低端手机等。
    
-   **MCU 接口的两种模式**  
    MCU 接口**包含两种时序模式**：
    

-   **8080 模式**
    
    （Intel 标准）：控制信号为 `CS`、`RS`、`RD`、`WR`，通过并行数据线传输数据，应用最广泛。
    
-   **6800 模式**
    
    （Motorola 标准）：控制信号为 `CS`、`RS`、`E`（锁存信号），时序与 8080 不同，现已较少使用。
    

-   **其他别称**
    
    8080 接口还有多种别称，如：
    

-   **DBI（Data Bus Interface）**
    
    ：数据总线接口；
    
-   **MPU 接口**
    
    ：微处理器接口；
    
-   **CPU 接口**
    
    ：强调与处理器直接连接。
    

-   **与 RGB 接口的区别**
    

-   **MCU 接口**
    
    ：依赖屏幕内置的**GRAM（显存）**，需通过命令写入数据，适合小屏（如 2.8~4.3 寸）、低刷新率场景（如静态图片）接口常见`CS`、`RS`、`RD`、`WR信号`。（如正点原子、野火的开发板屏幕）
    
-   **RGB 接口**
    
    ：直接由系统内存提供显存（比如有些SOC/MCU芯片内部集成的DDR2/DDR3/PSRAM/nor FLASH这些）。通过同步信号（如`HSYNC`、`VSYNC`）传输像素数据，适合大屏、高刷新率场景（如视频播放）。
    

**（2）RGB 接口（DPI 接口）**

  

-   **定义**
    
    ：直接传输像素的 RGB 数据，**无需 GRAM**，显存由系统内存提供
    
-   **特点**
    
    ：
    

-   控制信号：`HSYNC`（行同步）、`VSYNC`（场同步）、`DOTCLK`（像素时钟）。
    
-   数据位宽：16/18/24 位，支持高速刷新（适合视频）。
    

-   **应用**
    
    ：中尺寸屏（2~10 寸），如智能仪表、车载中控、平板。
    

  

对比项目

RGB565

RGB666

RGB888

位深度

16 位（5 位红、6 位绿、5 位蓝）

18 位（红、绿、蓝各 6 位）

24 位（红、绿、蓝各 8 位）

色彩数量

65536 种

262144 种

16777216 种

色彩精度和表现

色彩数量少，复杂色彩过渡和细微颜色差异易失真

比 RGB565 色彩精度高，过渡更自然，但仍有色彩损失

色彩表现丰富，过渡平滑，可完美还原真实色彩

数据存储和传输

每个像素 2 字节，数据量小，占用资源少

每个像素 2.25 字节，数据量适中

每个像素 3 字节，数据量大，对存储和传输要求高

应用场景

嵌入式设备、低分辨率显示屏

对色彩有一定要求，需平衡存储和处理成本的场景

计算机显示器、高清电视、数码相机、专业图像和视频处理软件等

##### **2\. 串行接口**

  

**（1）SPI 接口**

  

-   **特点**
    
    ：3/4 线串行传输，**速度低**，仅支持小屏（≤2 寸）。
    
-   **应用**
    
    ：段式 LCD、小尺寸 OLED（如手环屏幕）。
    

       三线SPI（SCK,SDIO,SS）,四线（SCK.MISO.MOSI,SS）。

  

**（2）MIPI-DSI 接口**

  

-   **定义**
    
    ：移动行业标准高速串行接口，**差分信号**传输。
    
-   **特点**
    
    ：
    

-   引脚少（如 D0P/D0N 差分对），抗干扰强，支持高分辨率（720P~2K）。
    
-   **双向通信**
    
    ，支持省电模式。
    

-   **应用**
    
    ：手机、平板、小尺寸笔记本。
    

1.注意区分：

  

上层协议（应用层）

物理层

显示屏

MIPI DSI

(Display Serial Interface)

MIPI D-PHY

摄像头

MIPI CSI

(Camera Serial Interface)

MIPI C-PHY

2\. 什么是MIPI的Lane，1Lane的mipi和4Lane的mipi又有什么区别？

Lane可以理解成数据传输通道，MIPI的1lane，2lane，4lane，分别代表1个数据通道，2个数据通道和4个数据通,道通道越多，数据传输能力越强，此外，各自还得搭配一对差分时钟。

Lane 数量

带宽

引脚数量

成本

功耗

适用场景

差分对数量

1 Lane

低

少

低

低

小型、低分辨率屏幕

2对

2 Lane

中

适中

适中

适中

中等尺寸、中等分辨率屏幕

3对

4 Lane

高

多

高

高

高分辨率、高帧率屏幕

5对

  

**（3）LVDS 接口**

  

-   **定义**
    
    ：低电压差分信号接口，**将 RGB 数据编码为差分信号**传输。
    
-   **特点**
    
    ：
    

-   传输距离长（10 米以上），抗干扰强，适合大屏。
    
-   需专用芯片转换 TTL/RGB 信号。
    

-   **应用**
    
    ：车载屏幕、工业显示器、大尺寸平板。
    

#### **二、外部接口（通用标准接口，用于设备互联）**

##### **1\. VGA（D-Sub）**

  

-   **定义**
    
    ：模拟信号接口，传输 RGB 三原色及行场同步信号。
    
-   **特点**
    
    ：兼容性强，但易受干扰，**逐渐被数字接口取代**。
    
-   **应用**
    
    ：老旧电脑、投影仪。
    

##### **2\. DVI**

  

-   **定义**
    
    ：数字接口，分**DVI-D（纯数字）**和**DVI-I（兼容模拟）**。
    
-   **特点**
    
    ：支持高清（1080P），无信号转换损耗。
    
-   **应用**
    
    ：电脑显示器、显卡。
    

##### **3\. HDMI**

  

-   **定义**
    
    ：高清多媒体接口，**同时传输音视频**。
    
-   **特点**
    
    ：
    

-   带宽高（HDMI 2.1 达 48Gbps），支持 4K/8K、HDR。
    
-   支持 HDCP 版权保护。
    

-   **应用**
    
    ：电视、机顶盒、游戏主机。
    

##### **4\. EDP**

  

-   **定义**
    
    ：嵌入式 DisplayPort，**高速串行接口**。
    
-   **特点**
    
    ：引脚少、带宽高，支持 2K/4K 大屏。
    
-   **应用**
    
    ：笔记本、显示器、一体机。
    

 补充：**EDP 接口**与**EPD**（常指**电子纸显示器**，Electronic Paper Display）是两个完全不同的概念

#### **三、接口对比与选择建议**

  

**接口类型**

**传输方式**

**显存位置**

**典型尺寸**

**场景**

MCU/8080

并行

内置 GRAM

2~4.3 寸

单片机、低端设备

RGB

并行

系统内存

2~10 寸

智能硬件、车载中控

MIPI-DSI

串行差分

系统内存

3~10 寸

手机、平板

LVDS

串行差分

系统内存

7 寸以上

车载、工业显示器

HDMI/DVI

外部标准

主机内存

10 寸以上

电视、电脑外接显示器

#### **总结**

  

-   **小屏（≤4.3 寸）**
    
    ：优先选**MCU/8080 接口**（如 STM32 驱动的屏幕）。
    
-   **中屏（2~10 寸）**
    
    ：**RGB 接口**性价比高，需高速选**MIPI-DSI**。（如ITE,Sigmastar等）
    
-   **大屏（>7 寸）**
    
    ：**LVDS**或**EDP**，长距离传输首选 LVDS。
    
-   **外部连接**
    
    ：**HDMI**是主流，老旧设备用 VGA。
    

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\屏幕接口类型集锦（MCU_RGB_MIPI_LVDS_HDMI）_images\img_002_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**