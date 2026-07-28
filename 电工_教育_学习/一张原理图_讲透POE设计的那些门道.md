# 一张原理图，讲透POE设计的那些门道

原创 王工 硬件笔记本 2025-11-07 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/1iUTWFhP1HFN89ArQWTqvQ](https://mp.weixin.qq.com/s/1iUTWFhP1HFN89ArQWTqvQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1 "音符")

  

大家好，今天咱们来聊聊POE的基础知识。另外，我这儿有份干货——一份来自来TI官网的<POE原理图设计检查\>指南，里面全是实用的原理图设计知识点。这份资料也是圈里一位朋友分享给我的，今天我借花献佛，转给大家，希望能帮到更多同行。

### 

文末附<POE原理图设计检查指南>完整版PDF文档获取方式。

###   

01

POE基础：让网络线同时传输电力和数据

如果你曾经安装过网络摄像头或者无线AP，应该遇到过这样的困扰：设备需要接电源，但附近没有插座，拉电线又麻烦又影响美观。POE技术就是为了解决这个问题而生的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqUp6T2icyA5wiaDtzPciaO2xMWibHPhnZkiaxkTsvEtQyawgOlDuGpXPNysg/640?wx_fmt=png&from=appmsg)

PoE的全称是Power over Ethernet，中文叫“以太网供电”。简单来说，它就是通过我们平常使用的网线，同时传输数据和电力。最远传输距离能达到100米，完全能满足大多数场景的需求。

  

**PoE系统的基本组成：**

-   **PSE（供电设备）**：比如支持POE的交换机、路由器，负责给终端设备供电；
    
-   **PD（受电设备）**：比如网络摄像头、无线AP，接收电力并正常工作。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqt9CtxZEmybtZCD5MTCI393FmH1JQogLouz5AVhLUOr5naUWAQ16tyQ/640?wx_fmt=png&from=appmsg)

**POE的两种供电方式：**

**1、模式A**：通过网线中的1、2、3、6这四根线传输电力，同时传输数据；

**2、模式B**：通过4、5、7、8这四根空闲线传输电力。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqKtJgaxkYg9fp4YsJGgrYMoOS59HsHMIrE7ASJD3hrNshq2Ru4TwuDg/640?wx_fmt=png&from=appmsg)

现在的PoE技术已经相当成熟，有国际标准确保不同厂家的设备能够互相兼容。

从最早的802.3af标准（POE，最大功率15.4W），

到后来的802.3at（POE+，最大功率25.5W），

再到最新的802.3bt（POE++，最大功率71.3W），功率越来越大，能支持的设备也越来越多。

  

**PoE的供电过程可以分为四个阶段：**

**检测阶段，分级阶段，供电阶段和断开检测。**

**1、检测阶段**：供电设备先“试探”一下对面是不是支持PoE的设备，避免把48V电压加到不支持的设备上造成损坏。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqFHbUoOnswQzqzU1Ym2IhobDB9WeQcRNM2WQQibSJqTApSYBqFjPMysw/640?wx_fmt=png&from=appmsg)

  

**2、分级阶段**：确认是PoE设备后，询问需要多大的功率，便于系统对咱们的电源进行管理。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqEwibPEBUg9VfnDk2ArOKouQNice9iaksiaTd6VhwHhDtFpTAiaWAsKeIokQ/640?wx_fmt=png&from=appmsg)

  

**3、供电阶段**：PSE和PD成功“握手”并确认功率需求后，稳定的电力供应就开始了。在整个供电过程中，PSE会持续监控每个端口的状态，提供欠压和过流保护，确保连接设备的安全稳定运行。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRq5DfyWjlVYZSMgYVkvELKH9iar8SicJgRRA4QicHX0Oia26crLcDv97orhw/640?wx_fmt=png&from=appmsg)

**4、断开检测**：设备断开后自动停止供电。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqzH6k6FiaflyR7qDRarHMCqslwpNuHTJTrBRwHq0F1ySnR58LonkTRkA/640?wx_fmt=png&from=appmsg)

以上内容就是一些最基础的概念，如果你是初次接触，能建立起一个基本概念就非常好。接下来，我们就来看看更实用的部分——POE PD的原理图设计要点。

  

02

POE PD原理图设计要点

接下来我们重点聊聊POE受电设备（PD）的原理图设计。德州仪器的《POE PD原理图审查指南》给出了非常实用的设计指导，我把其中的关键点给大家梳理一下。

**1、输入电路设计**

输入电路是POE设计的重中之重，它直接关系到设备能否被正确识别和稳定供电。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqKbTvW1sjjXOQSjVW9jEBUia78y4E1bHNOsGpavyW1DBKMJYE8fGykRQ/640?wx_fmt=png&from=appmsg)

**网络变压器设计：**

-   变压器要把数据和电力分开处理；
    
-   线对连接必须正确：1和2是一对，3和6是一对，4和5是一对，7和8是一对；
    
-   有的变压器数据侧没有电感，这点要特别注意。
    

  

**Bob-Smith端接：**  

这个设计很关键，如果没有正确端接，POE可能无法正常检测到设备。具体做法是在每对线上接一个75欧姆电阻和1000pF电容到地。如果设备有金属外壳，就接到外壳地；如果没有，就接到次级地，但这时候输入端要加共模扼流圈。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqFA3OIkRcBufXuMSae8XUx45TddubN9f4Vrwn6sItI77OPwua4FgibNQ/640?wx_fmt=png&from=appmsg)

  

**整流桥选择：**

-   13W以下的小功率设备，用分立二极管桥就可以，成本低；
    
-   25W以上的设备，建议用MOS管或者集成方案，因为电流大了，二极管的损耗会很明显；
    
-   51W以上的设备，基本上必须用MOS管方案了。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRq3bqLr2yWOPzIvh3I40T3s5OibxtE7V6WibzdMLfJE6CBuzMNDenHZmvw/640?wx_fmt=png&from=appmsg)

举个例子，TPS23730EVM-093这个51W的设计就用了混合桥方案。选择整流器件时，一定要确保它能承受最大电流，简单算法就是把计算出来的最大电流乘以2来选择器件规格。

  

**输入保护设计：**

-   TVS二极管是必须的，推荐用SMAJ58，它的钳位电压在92V左右。为什么是58V？因为PoE IC的VDD\_VSS绝对最大电压是100V，98V的钳位电压太接近极限了。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqiasm8fVrgeF5zFh5bPI1HgrH88ehHSG4a0e2lKpMLSiaTUMedaGDQRGQ/640?wx_fmt=png&from=appmsg)

**VDD和VSS之间还要加0.1μF的旁路电容。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqq7twww4gXsyFs7Aj1MaTj4ysFBGyAR21ggCeV1tB08WCNIjm3nsGEQ/640?wx_fmt=png&from=appmsg)

**输入电容选择：**  

IEEE标准要求输入电容不能超过120nF，否则检测会失败。这点要特别注意，很多人在这里栽跟头。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqUl1fzuuOHMHjRy8Il17q05wp86SbqKIAUKUeQfmI241snvk8FWSu9g/640?wx_fmt=png&from=appmsg)

  

**2、DC-DC转换器设计**

DC-DC转换器把POE输入的44-57V电压转换成设备需要的各种电压，比如12V、5V、3.3V等。

**输入大容量电容：**  

这个电容负责为DC-DC转换提供足够的能量储备，最好用电解电容，因为需要一定的ESR。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqYj44hFp4dicF2pQ5tZF131WWJ1qRtEZTXT3DO5K2gGvic1rzicLgia6LZw/640?wx_fmt=png&from=appmsg)

容值选择有个参考范围：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqw6sAicnBPeYtav79icibcYDvBiaFhvKVibkQicOk00RI3y1k8WgPmQ6frIvw/640?wx_fmt=png&from=appmsg)

如果要用陶瓷电容，建议在电容组和RTN之间串一个1欧姆电阻，便于启动。

  

**输入滤波器：**  

虽然从标准角度说是可选的，但强烈建议加上。包括VDD-RTN之间的小电容和电感，这能有效减少输入纹波，进而降低输出纹波。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqLtOY7qUTkp6rxlC12Jpayv6ApeTKqRwteB6tL3FeiaPY7xw3kuRoSZg/640?wx_fmt=png&from=appmsg)

**VCC电源设计：**  

这是给DC-DC控制器IC供电的电源，不同的IC方案要求不同：

-   TPS2373x系列只需要1μF电容
    

-   TPS2375x系列（除了23755和23758）需要22μF电容，最好用电解电容
    

对于有源钳位正向拓扑，还需要2.2mH的电感和两个二极管来减少纹波。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRq8wX3BF9AWickF5feOicGhnlAE1LpWzYuDqibwKkegh3Q42aBibVic6MAxwA/640?wx_fmt=png&from=appmsg)

**电流检测：**  

在初级FET的源极要加电流检测电阻，通常小于1欧姆，封装至少1206。还要为斜坡补偿留出位置，通常是一个电阻串联一个电容接到CS引脚。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqHBpmbqJdv41rfc0oUZtTTBot4CG91zSu3JRv7EEtmiaB5podTXYwPCw/640?wx_fmt=png&from=appmsg)

  

**3、次级侧设计**

次级侧设计很大程度上取决于你用的拓扑结构。

**二极管反激设计：**  

要确保二极管有足够的电压和电流余量。可以通过变压器匝数比、输出电压和占空比来计算需要的规格。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqF2okxU2P7gOmRTfsh1ZovjLuttr7kO3kFrQVLfWniczyq2P3B7WVI5w/640?wx_fmt=png&from=appmsg)

**同步反激设计：**

-   5V及以下输出常用同步整流；
    
-   MOSFET的VDS要根据输出电压选择：5V输出用30-40V，12V输出用60-100V；
    
-   栅极电荷要尽量低。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqI3byfMu9hJxCXhuuL13GH0hLrG9fWiaqRIpE9DAl9Vfmmhft7LDXBEQ/640?wx_fmt=png&from=appmsg)

**有源钳位正向拓扑：**  

这是最复杂的设计，两个MOS管要精确同步工作。栅极驱动电路特别重要，在12V输出设计中两个MOS管都需要栅极钳位。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqIdt47JErCic5ymVJu7yh1OribJhJksSBKINy5NQKzeJT0ZdgKuYXUGIQ/640?wx_fmt=png&from=appmsg)

  

**4、 反馈环路设计**

反馈环路采用电流控制模式，这样能得到比较好的频率响应特性。

**基准选择：**

-   高于5V的输出用TL431
    
-   5V及以下用TLV431
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRq9Lia447hEHoTAtX2YncbqFZ8vCuGJibicVylU1ibVEboL5US5G3qwVpVJw/640?wx_fmt=png&from=appmsg)

**保护措施：**

-   要加真正的保护二极管，不是普通的齐纳二极管；
    
-   次级侧要加软启动电路（10k电阻+1μF电容）；
    
-   光耦的电流传输比（CTR）要选80%-160%范围的，比如-A档的器件。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqc0yNJSDUP2zuEgmIRNqCXZ0yFyiaEcibaHVl0NzoV8pM79k8Dibfj0N0g/640?wx_fmt=png&from=appmsg)

#### 小结

PoE PD设计需要综合考虑很多因素。从输入检测到DC-DC转换，从初级侧到次级侧，每个环节都要精心设计。

记住几个关键点：

-   输入电路要严格遵循IEEE标准；
    
-   变压器尽量用验证过的设计；
    
-   元器件选择要留足够余量；
    
-   反馈环路要稳定可靠；
    
-   布局布线要合理。
    

虽然POE设计有一定难度，但只要按照规范一步步来，参考成熟的设计方案，就能做出稳定可靠的产品。希望这篇文章能帮助大家在POE设计中少走弯路，做出更好的产品！

  

03

文档获取

如何下载《POE原理图设计检查》，更好的学习POE电路相关设计

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|POE原理图设计检查

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg3QVSiaE9tr5mh7xFj51DRqsH5JL8YoOflYiaOeHySPL5gROZyj47yuMSugVeKkRSHC92tU0fLMmtw/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhHmN1LfrCKpWp9woHBJ8SG8Kvadc8zUhibW0EzdZaLwS58VfOtFHaXmLnFCW9hMAkNib8vnOpsfPicw/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。