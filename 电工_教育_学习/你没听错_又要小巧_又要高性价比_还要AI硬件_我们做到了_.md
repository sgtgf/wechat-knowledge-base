# 你没听错！又要小巧，又要高性价比，还要AI硬件，我们做到了。

原创 王工 硬件笔记本 2026-02-05 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/jtqGFF2pgkvmEixA3DNBmQ](https://mp.weixin.qq.com/s/jtqGFF2pgkvmEixA3DNBmQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")  

  

  

不得不说，这两年AI真是火得不行，几乎啥地方都能用上。客户那边要求也是越来越高，功能要多，东西要做得小，价格还得压下来，这话我好像说了很多次，但现实确实就这么卷。关键还得自带AI硬件能力，对我们研发来说，挑战真不小。

所以今天，专门给大家介绍触觉智能推出的这款搭载RV1126B芯片的核心板，连带配套的评估开发板。它到底有多小巧？直接上图给你们感受——整个板子放我手心里，还没一个巴掌大，可以说是小身材，大能量！![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqNmu5SDeaddI4tMLbfFicczgJRpl1MLJ5cmEk2hm7ZaiaByyictKNYibgBMqcbPsiaeicQTqcJAHq8qbA/640?wx_fmt=png&from=appmsg)

关注【硬件笔记本】与【深圳触觉智能】公众号，凭截图联系触觉智能客服，购买此开发板可享粉丝专属立减100元福利！

> 购买链接：https://item.taobao.com/item.htm?ft=t&id=793786019190

有了这块板，不管是做智能门锁、AI摄像头，还是各种需要轻量化的便携设备，都能轻松跑起AI算法和图像处理，性能、成本、尺寸全都兼顾到位，实实在在是咱们产品开发的好帮手！

下面咱们仔细给大家介绍一下这块评估板。

  

011

硬件介绍

### 1、硬件整体介绍

### 这套EVB1126B-V1开发板采用了一种**核心板+底板的设计**。核心板把RV1126B芯片、内存、存储这些核心部件都做扎实了，稳定可靠，直接拿来开发或者做产品都行。底板上该有的接口也配得挺全，摄像头、网口、WiFi&BT都有，还带一个扩展口，接4G模块什么的很方便。整体就是为AI视觉项目准备的，该有的都有，上手就能用。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatEWXA0ZKHERoLBhtKEwfRXQM2mRuOrBBLCTiaYucDs5Y11Qn9gSmLeia214QkSSaty1iaCYhr9SDYw/640?wx_fmt=png&from=appmsg)

### EVB1126B-V1整体图片（图源触觉智能官网）

### 2、核心板介绍

核心板型号：SOM1126B-S1，你可以把核心板想象成整个系统的大脑和心脏，所有最核心、最关键的部件都高度集成在这张小小的板子上。

-   **最强内核RV1126B芯片**：这就是咱们刚才说的性价比王牌。自带3TOPS的NPU算力，跑YOLOv5s这类常用AI模型**实测效果和RK3576非常接近**，但价格友好得多。它还集成了专业的ISP图像处理器，能搞定500万像素和复杂光线，专为视觉项目而生。
    

-   **满血配置**：边框尺寸为40mm x 40mm，别看它小，内存DDR、存储eMMC、电源管理芯片PMIC，这些核心部件一个不少，全部精心布局在核心板上，是一个完整的最小系统板。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatEWXA0ZKHERoLBhtKEwfRH8VU8OAR56ZKtPdPtAriaTvj3fo1jan8l6W9XiaN4wxpumjVKfibVJwBQ/640?wx_fmt=png&from=appmsg)

EVB1126B-V1正面

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatEWXA0ZKHERoLBhtKEwfRLuoTXgQOPNwRjQ7gR0bXhomBhnR8xNJKiaoRXyhgUERx3UXsxj92VXQ/640?wx_fmt=png&from=appmsg)

 EVB1126B-V1背面

-   工业级设计：这款核心板采用邮票孔封装，抗震效果更好，结构设计独特且紧凑。PCB背面是完全平整的，没有走线，方便安装。它采用100%国产化方案。
    
    它使用了HDI高密度沉金工艺，10层高规格板材，比普通排针连接更牢固可靠，抗震动和抗干扰能力都很强。这样的设计，是为了让你做的产品能适应各种复杂环境，不仅适合学习研究，更适合直接用到实际产品中。
    

**3、**底板介绍****

底板就是核心板的扩展基地。核心板负责核心计算，底板则负责把它的能力外接出来，让你能轻松连接各种外部设备。

开发板尺寸为120×80mm，布局整洁，光看这外观就**很有科技感**。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatEWXA0ZKHERoLBhtKEwfRU4IzLrnouq58dwGooeyVYVT0p9pBJTVC7PLib1pkibp5pd0hrgiaOoxibw/640?wx_fmt=png&from=appmsg)

产品正面图片（图源触觉智能官网）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatEWXA0ZKHERoLBhtKEwfRnSdjGawUiassHunZQetddNib3XgRyd7p2klic1cJGFG86RJtRpuBFKucg/640?wx_fmt=png&from=appmsg)

产品背面图片（图源触觉智能官网）

-   **工业级标准**：核心板采用**间距1mm邮票孔连接**，共有232个引脚，比用排针插接更稳定，抗震动、抗干扰能力更强。**1.35mm 10层高密板，高Tg材质，沉金工艺。**这种设计就是为了让你以后的产品能应对各种复杂环境，不仅适合学习，更适合直接拿来做产品。 
    

**简单说，你项目里最贵、最不能出错的部分，核心板都给你打包做好了，你不用自己操心怎么给RV1126B芯片画电路图，直接拿来就用，省心又省力。**

下面咱们来介绍一下开发板的细节

我们从左往右看，这一侧密集排布了多个实用接口：首先是一个USB Type-C接口，用于Debug调试，接着是TF卡槽，可插入TF卡进行数据存储，支持SDIO3.0协议，信号电压支持1.8V和3.3V动态切换。它还支持从TF卡启动系统，非常方便。

再往右是一个双层USB接口（上层是USB2.0，下层是USB3.0，通过接口颜色就可以分辨出来），再旁边是一个侧立式HDMI接口，两个千兆以太网口，支持10/100/1000Mbps自适应速率，再旁边是四个LED指示灯，最右边是DC12V电源输入接口。

尽管这一区域总长度只有120mm，但接口丰富、布局紧凑。这种双层USB接口和侧立式HDMI针座的设计，有效节约了空间，让板子在有限尺寸内实现了更强的扩展能力，选型考虑得很周到。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjMK9tZhBTGchltvRH4oIotsTB3icEIwKfymlQGb4DGFyFicpsmF5o1Skg/640?wx_fmt=png&from=appmsg)

## 对外海岸线接口

在电源入口的设计中，我们可以预留两个0Ω/1206封装的电阻位置。当遇到RE测试不通过的情况时，可以将其替换为共模电感。这种设计细节非常实用，也为后期的调试优化留出了灵活调整的空间。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjnGBKNv2DUyTUUBJ3oiczK36YnbqzYwCjXpXV1BaUX3l89ORvzrtVJHw/640?wx_fmt=png&from=appmsg)

##   

主板上集成了一组2x10x2.54mm规格的扩展排针，提供了电源、I2C、UART、SPI、PDM、CAN等多种常用接口资源，方便咱们用户快速进行功能扩展和调试。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjtNPMojO0xpicIoknJsqUHdgsuOAVbq2FKibnVw4OR7hxzFr4uEjKehWA/640?wx_fmt=png&from=appmsg)

2.54mm间距排针

基于信号质量的考虑，在信号线上串联22Ω电阻可有效抑制信号过冲与振铃现象，从而改善信号完整性。此外，采用贴片式排阻有利于节省电路板空间，也能提高生产效率，并降低整体成本。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjDuWGqECE0vP8TD70XoSibibkuDyM7rDSdbFfShIFwKJX1K5CBLruAqQg/640?wx_fmt=png&from=appmsg)

贴片22R排阻

板子背面有清晰的引脚定义丝印，这个设计细节解决了咱们调试中的一个常见痛点，彻底告别了以往因忘记引脚定义而在软件、工位间来回奔波的低效情况。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjYIPnrQfBFDicaxP7XTUom4RGWEpd7GmHdCuSQRcLHZEdicy8D75ia3tbg/640?wx_fmt=png&from=appmsg)

板载四个FPC插座，其中左侧两个为4-Lane MIPI CSI图像输入接口，紧接着为CTP接口与一个4-Lane MIPI DSI显示输出接口。配套摄像头模组支持即插即用，可快速实现图像采集。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjtKWEJwmCibBo0poQn0WtCll3am5IcWKkMTDVTEnQ42Gjq1v2FGQ2HMQ/640?wx_fmt=png&from=appmsg)

MIPI CSI和DSI接口

放大看，可以看到一个1x4x1.25mm的米白色立式针座，这是两路MIC接口，其清晰的引脚定义极大方便了接线。旁边是一个2x4x2.0mm的米白色立式针座，定义为FSPIO接口。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjcz9mXp9PliadL9kD7J3Kxic3uJnPYltvicavs5Sg9B9aO5UGmwqIKMtDA/640?wx_fmt=png&from=appmsg)

  

板子背面也能清晰的看到引脚定义。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjWlfcJIdrSkkdTqWLGapwrYfTF1VwbwPygVpGPFJ5cxwib4bG0vZbZicw/640?wx_fmt=png&from=appmsg)

左侧为IPEX接口的WIFI+BT天线连接器。右侧依次为：一个1x4x2.0mm的米白色USB接口；一个1x2x2.0mm的米白色SPEAKER（喇叭）接口；以及一个1x2x2.0mm的红色FAN（风扇）接口。红、白配色设计有效防止了线缆误插，这一点很细节。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjJzdptntrTxF4fbf8o5s9TvIDeRBDQ4ZKOSHhBSScUVZkwbJu65yyRg/640?wx_fmt=png&from=appmsg)

关于天线的设计，这里大家可以抄作业。这是一个实用的天线输出匹配电路设计方案：通常在信号路径串联一个电阻，并在其左右各并联一个电容。这两个电容可以根据具体的设计要求灵活取舍，为兼顾不同需求，建议在PCB上预留它们的焊盘位置。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjwicZYA349s1icibY6YpCLhMiaqmtft6LxzENFGhTMIJTMmeZtSTzLy0a6w/640?wx_fmt=png&from=appmsg)

主板通过标准Mini PCIe接口扩展蜂窝网络能力，支持4G LTE与5G通信。兼容的4G模组包括移远EC20、EC200T、EC25及广和通L718等通用型号；5G模组则适配移远RG200U-CN。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjIgCFSspk1WRsKibXDabS23AzpNzqIl0jvnhjnqz6SZcAUgAPhOKXEjA/640?wx_fmt=png&from=appmsg)

板子背面集成了两个按键与一个SIM卡槽：左侧为Recovery KEY，右侧为Power KEY，中间是SIM卡槽。插入SIM卡后，开发板即可接入移动网络，实现上网、数据传输及远程通信。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjJ8Oh5URs1ro9k1yr7ueUCGH7fRHU3z3WR0EvTBcrK4vkjlWIQSjv1Q/640?wx_fmt=png&from=appmsg)

在设计上，SIM卡槽接口同样配备了ESD静电保护管，延续了整板对接口防护的重视，确保了该接口在插拔和使用中的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbj67pMnS4S32niaDIAiaKr1Hf7SzN4ibgiaCLec3CHn1SxXV9fAoErFrK6wA/640?wx_fmt=png&from=appmsg)

**所以，这块板子接口非常丰富，通过底板可以轻松连接核心板这个大脑，让你快速验证各种功能，大大缩短开发周期。**

021

软件介绍

#### ****光有好硬件不够，软件生态和支持才是能不能做下去的关键。**软件资料咱们一句话总结：保姆级的支持，新手也能跑通。**

#### **咱们直接来看图片，平台具备强大的系统兼容性，支持包括Debian、Ubuntu和Buildroot在内的多种操作系统，为不同应用场景提供了坚实软件基础。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgB46iafJPkmINPbibWtpNDbjBQrib4WPHCEqTRKvQqu87dV5BAfup2sNAVh402Xtc1PtX1NB0ibnoBlQ/640?wx_fmt=png&from=appmsg)

**1、开箱即用**：板子预装了Linux系统，拿到手通上电，跟着教程十分钟就能跑通第一个摄像头demo，成就感满满。

**2、资料是真的全**：官方资料站就是“保姆式教程”。从烧系统、编译代码到跑通AI样例，每一步都写得很详细。常见坑和解决方法都列好了，对新手极其友好。

**3、社区与成熟度**：RV1126B方案成熟，社区里分享的资料多，遇到问题更容易找到答案和帮手。

所有资料持续更新，还有提供大几十G的网盘资料。网盘资料可关注触觉智能，发送联系客服获取。

> 官网资料
> 
> SOM1126B-S1核心板 
> 
> 官网链接：http://www.industio.cn/product-item-141.html
> 
> EVB1126B-V1开发板
> 
> 官网链接：http://www.industio.cn/product-item-143.html

网盘资料联系触觉智能客服134 2385 6106获取

  

  

031

配件&外设

配齐了12V电源、7寸MIPI屏、摄像头和多路AHD转接板这些常用件，现在搭这个芯片平台测试起来更方便了！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8Ccav9LgIycQ3BfB4Q6w60ibaDV1mTrHIy3KYrqWr2lnFpFYOBia1EPkrXA/640?wx_fmt=png&from=appmsg)

这个搭配了IMX415摄像头和转接板的方案，除了能在触觉智能的RV1126B（EVB1126B）开发板上用，也兼容RK3576（EVB7608）和Purple Pi OH2这几款板子。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8CcHaHiaX8utMfha4OicZ99J9uSS1Kic3DfqOzickVwNcjvIKG5NR4PfLXXVw/640?wx_fmt=jpeg&from=appmsg)

转接板来个特写

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8Cc7A2rmcqXGbIVSkE7Rz7iaDS8KdS0BhGic1QkbNwzmc5hDRYWZCGRn8Vw/640?wx_fmt=jpeg&from=appmsg)

  

这是搭配装好后的样子，板子J17和J18这两个接口都是可以用的。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8Cc46Yskg38Cgy4P33HUgBJabSUNB2F1fAIJIiauVTjMBsgVKeGFV5iaBBg/640?wx_fmt=png&from=appmsg)

  

4路AHD转接板，可支持多路摄像头输入。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8CcsyqnjbNjUuAkHnQMMrpJDQc1uMLnlHskLlB6bXsqib1iazcz8ZsicwD4g/640?wx_fmt=png&from=appmsg)

这是搭配咱们主板，整体效果图

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8CcO83nQupSCl4C07OZMjQMnehvVEia3Iu22sj9eqqM08KuodCn6zt8fEg/640?wx_fmt=png&from=appmsg)

配上这块7寸MIPI屏（分辨率1024x600），调试起来方便多了

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8CczibU4n2aRF2pm9LZyfFsRP04eOB9GoDFfqR6lyjSVZvvFgicTIB1TBvA/640?wx_fmt=png&from=appmsg)

有一个地方要注意：板子默认输出是HDMI。如果你想用MIPI屏幕，记得把图上红圈位置的那个电阻改一下。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8CcJ2Q725Jibj8ic6lOc4jzmDqfibCDU2rJwp0PHZQaibJBXXejDpLYYlcsgg/640?wx_fmt=png&from=appmsg)

  

另外，夜视方面还适配摄像头SC450/SC850。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaqVdRtXHCsTXPjF5m7l8Cc6J21AgVh3eaqJL23d4BXZYFB57ibeAXJ6n6Hzf0tNeJBBRQYEkNKRUA/640?wx_fmt=jpeg&from=appmsg)

这款AI迷你整机是基于开发板做的。照片是预览样子先看看，量产时可能会有点小变化。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhBBgIEYicBPHYsCXmpdJicW6OCcW0uibOpBcRX6SxiaXDYPGNe22hctFjAF48zk5k6LwGYNIhmsEiabFA/640?wx_fmt=png&from=appmsg)

  

041

总结

#### **

总而言之，如果你在找一款专门做AI视觉项目、成本不高、性能扎实的开发板，同时希望资料齐全、好上手，那触觉智能这套基于RV1126B的EVB1126B-V1（核心板+底板）组合，是一个非常实在的选择。

它接口够用、算力足够，配套完善，无论你是初学者做算法学习，还是工程师做产品开发，都能快速用起来，高效又省心。

**