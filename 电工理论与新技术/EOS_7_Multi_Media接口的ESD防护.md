# EOS-7：Multi-Media接口的ESD防护


> 原文地址: [https://mp.weixin.qq.com/s/6lRP69I0kieQoyrHIzMM5w](https://mp.weixin.qq.com/s/6lRP69I0kieQoyrHIzMM5w)

____![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_000_3c042a798c97.png)____

____**★★★**______EOS-7---Multi-Media______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：Multi-Media信号（多媒体信号）接口包括HDMI、DP、LVDS，SerDes等，HDMI、LVDS和DP主要用于消费电子，诸如PC、TV投影仪等，SerDes则用于车载多媒体板级远端连接。

________€1.____HDMI____

HDMI发射器具有10mA的切换电流源，单端匹配电阻为50Ω，因此单端标称电压摆幅VSE=10mA×50Ω=500mV，差分标称电压摆幅为1000mV，是单端数据线路的两倍。HDMI连接器需要对所有12条数据线进行ESD保护：八条低压高速TMDS线和四条5V控制线。对于HDMI 2.0，TMDS线路的速度可以达到每通道6Gbps（整个连接器为18Gbps），因此最小化电容至关重要。

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_001_4ddd5552bd82.png)

**_表7-1：HDMI的版本速率信息_**

_分立型保护_

为特定的HDMI保护提供解决方案，例如在其他地方已经实现电平转换的应用场景，可以使用两个PHDMI2F4和一个PUSB2X4Y来实现专用保护。一些系统需要增强的滤波或噪声去除，有的器件提供内置ESD保护的共模滤波器，使用两个单独的PCMF2DFN2设备，可以保护HDMI TMDS通道免受共模噪声和ESD的影响。

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_002_43bc583fd4bb.png)

**_图7-1：HDMI接口的分立ESD保护结构_**

如**_图7-1_**所示，对于8条TMDS线路，建议使用两个具有超低电容的4通道ESD设备，以尽量减少电路板布局并保持信号完整性。使用一个5V耐受的4通道设备来保护低速控制线路，此处可替换一个5V耐受的6通道设备，以保护5V电源线，（TPD4E02B04×2+TPD4E05U06）CEC和SCL、SDA、5V也可以使用独立保护器件。对于HDMI，推荐**_表7-2_**：

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_003_c001d76f8a91.png)

**_表7-2：HDMI的ESD/TVS diode选型参数参考_**

_集成型保护_

高集成度HDMI配套IC提供保护、电平偏移、LDO、缓冲等功能，单个设备基本上提供了HDMI的所有接口需求，包括HDMI发射机（IP4787CZ32）和HDMI接收机（IP4786CZ32）的专用解决方案。**_图7-2_**和**_图7-3_**显示了这些设备及其基本连接，除了一个小电容器外，不需要其他外部设备。

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_004_ba6d46d7a8a4.png)

**_图7-2：带电平偏移的HDMI单设备ESD保护，用于接收器的IP4787CZ32_**

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_005_c32a85570bcd.png)

**_图7-3：带电平偏移的HDMI单设备ESD保护，用于发射器的IP4786CZ32_**

________€2.____DP____（DisplayPort）________

使用DisplayPort，主链路可以有一个、两个或四个差分数据对或通道，每条链路的原始比特率为每条通道1.62、2.7或5.4Gbit/s，自时钟运行在162、270或540MHz。使用8b/10b编码，每个通道的有效数据速率最高可达4.32Gbit/s。DisplayPort保护可以在高速差分通道和速度慢得多的AUX通道之间划分，**_图7-4_**显示了使用PUSB3F96保护的高速线路和带PUSB2X4Y保护的低速线路，PUSB3F96具有超低电容、出色的Cd匹配和贯穿布线封装布局，是在DisplayPort的高速差分线路上实现ESD保护的良好选择（AUX、HOT热插拔和Power也可以使用独立的保护器件）。

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_006_26d90103d80c.png)

**_图7-4：DP接口的**分立ESD保护结构**_**

对于DP，推荐**_表7-3_**：

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_007_96ef7e3baaba.png)

**_表7-3：DP的ESD/TVS diode选型参数参考_**

____€3.LVDS（低压差分信号）____

LVDS：即低电压差分信号，ANSI/TIA/EIA-644-A，差分、串行通信协议的技术标准，电压摆率最高±800mV，速率最高10+Gbps。

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_008_0f6f76a75826.jpg)

**_图7-5：LVDS的发射和接收结构_**

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_009_f34dbe1c1361.png)

**_表7-4：LVDS的分类和速率_**

对于LVDS，推荐**_表7-5_**：

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_010_91bbcf8b71b0.png)

**_表7-5：LVDS的ESD/TVS diode选型参数参考_**

____€4.SerDes（高速串行信号）____  

SerDes主要运用在车载摄像头和车载显示屏上，如**_图7-6_**所示，在并行数据流和串行数据流之间相互转换，支持Coax Cable（同轴）和STP/STQ（高速差分）线缆接口样式，串行通道速率可达3Gbps到4.16Gbps。

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_011_0763a988c3b6.png)

**_图7-6：SerDes传输链路_**

对于SerDes，推荐**_表7-6_**：

![](D:\电脑文件\公众号知识库\电工理论与新技术\EOS_7_Multi_Media接口的ESD防护_images\img_012_fd0cac21ea61.png)

**_表7-6：SerDeS的ESD/TVS diode选型参数参考_**

____€5.HDMI/DP/LVDS通用型号____

从上述的参数来看，HDMI、DP、LVDS、SerDes的防护器件选择都比较接近，因此许多防护器件在这几个接口保护上可以共用，例如PESD1LVDS专门设计用于为用于车载网络的超高速接口提供ESD保护，如LVDS、HDMI和DisplayPort，该器件能够实现TMDS线路的直通布线，从而支持设计的简易性和寄生影响的最小化。因此选型时需要灵活选择，根据参数信息可以合并使用，不需要完全根据接口类型的不同而划分。

（传送门：[EOS-2：TVS管的保护原理和选型要点](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493418&idx=1&sn=9ffa42af30d59afa9b30e1f3a524b66b&chksm=c336adb5f44124a356bb45c58753382c46d625fbe21efce75f6d407797ed0f565979e4f2f0af&scene=21#wechat_redirect)）