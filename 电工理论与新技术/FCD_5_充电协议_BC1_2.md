# FCD-5：充电协议-BC1.2


> 原文地址: [https://mp.weixin.qq.com/s/UYsjjN33t10\_\_ZfAP8YzAA](https://mp.weixin.qq.com/s/UYsjjN33t10__ZfAP8YzAA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQcFTDmXySWjgRxAzPLWUNtm6mf3e4bYTaECqJjhWAKLeP2SN8dfT4KwOpZ9ObOjUXAicz00aYB6BQ/640?wx_fmt=png)

________**★★★**______________Charge-2---充电协议BC 1.2______________**★★★**________

引言：支持有线充电和有线供电的设备随处可见，不同设备之间的兼容性都遵循同一套协议，即充电/供电协议，本节简述充电/供电协议的鼻祖--->BC1.2

____________€1.BC1.2（Battery Charging V1.2）____________

快充协议握手使用CC1 CC2信号，而BC1.2走的是D+ D-脚位，互不影响功能，BC1.2作为充电协议的鼻祖，协议非常古老，作为一套最基础的充电协议，BC1.2使用USB2.0的数据传输线DP、DM（或者D+ D-）作为协议识别握手线。在开始讲述本协议之前，我们先来了解一些必要的专业术语：

_DCP：专用充电器_，即专门的220V转充电器，这种端口不支持任何数据传输，但能够提供1.5A以上的电流。如**_图5-1_**，端口的D+和D-线之间短路（200Ωmax），这种类型的端口支持较高充电能力的墙上充电器和车载充电器，无需枚举。如图5-1为DCP类型设备的端口内部结构，注意Portable Device和Dedicated Charging Port是一个DCP设备的内部结构，只不过分为了两部分。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR6ocDwfiaGGfxI8VOsYd0yfcyBNC41XFR6fDO4yicMDsPSUTia0sO07QHcTY1Yu1ibKiayuaBxytyTZFA/640?wx_fmt=png)

**_图5-1：DCP类型设备握手结构_**

_SDP：主机_，这种端口的D+和D-线上具有15kΩ下拉电阻（要关注IC是否内部集成此电阻）。限流值挂起时为2.5mA，连接时为100mA，连接并配置为较高功率时为500mA。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR6ocDwfiaGGfxI8VOsYd0yfhibZEEv1qf0iadFgFPGPBWEm2BUib2bic7pXsratbemibaDJsUYviady0RTQ/640?wx_fmt=png)

**_图5-2：SDP类型设备握手结构_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBSiaDTpng4icBCV3ENvbgFWFtoPib40Up5LqvOB2qwu1wQt6dJUUbytic6Q/640?wx_fmt=png)

**_图5-3：DCP和SDP类型设备简图_**

_CDP：大电流充电端口_，就是在PC或者HUB上的一个USB口，但是这个USB口比较特殊，可以提供1.5A~5A的大电流输出，给外部设备充电，一般都会有一个小闪电的标志在USB口旁边。这种端口既支持大电流向外充电，也支持完全兼容USB 2.0的数据传输。如**_图5-4_**所示端口具有D+和D-通信所必需的15kΩ下拉电阻（要关注IC是否内部集成此电阻），也具有充电器检测阶段切换的内部电路。内部电路允许便携设备将CDP与其它类型端口区分开来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR6ocDwfiaGGfxI8VOsYd0yfLKTia5w0sUffSJ3AHpJ2y4B34via6y8rdqXDK6eh1YPFtu2u7RlLMicgQ/640?wx_fmt=png)

**_图5-4：CDP类型器件握手结构_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBW0J4xj01klFjf6iba6Y5vRsMVnctvKRr38PpLuZxWdQRmdFYiaa66VcQ/640?wx_fmt=png)

**_图5-5：CDP类型器件简图_**

CDP是遵循USB BC1.2的USB端口，每个端口提供至少1.5A的电流。CDP提供电源并满足设备枚举的USB-2.0要求。支持USB-2.0通信，并且主机控制器必须处于活动状态才能允许充电。CDP和SDP之间的区别在于将这个端口识别为CDP的主机充电握手逻辑。CDP可由兼容的BC1.2客户端设备识别，并允许客户端设备消耗额外的电流。

_________________€2._____________CDP握手过程分两个步骤进行____

BC1.2协议定义了DCP，CDP，SDP设备之间的识别握手逻辑，这里以CDP设备握手过程为例简述其识别过程，若想了解全部详细的BC1.2协议，可以访问官网网站下载协议文档：https://www.usb.org/document-library/battery-charging-v12-spec-and-adopters-agreement

CDP握手过程分两个步骤进行，在第一步中，便携式设备在D+线上输出标称0.6V输出，并读取D–线上的电压输入。

#1：便携式设备读取电压低于0.3V的标称数据检测电压，则便携式设备检测到SDP的连接。

#2：D–电压大于标称数据检测电压0.3V并且可选地小于0.8V，则检测到CDP的连接。

第二步对于便携式设备来说是必要的，以确定设备是连接到CDP还是DCP。便携式设备在D–线上输出标称0.6V输出，并读取D+线上的电压输入。

#3：正在读取的数据线仍然低于0.3V的标称数据检测电压，则便携式设备会断定设备已连接到CDP。

#4：正在读取的数据线大于0.3V标称值数据检测电压。，则便携式设备会断定设备已连接到DCP。

还有一种通过使用USB数据线（D+和D-）执行握手来执行枚举（连接识别）的方法。它分两步识别它是否是CDP。

#1：输出0.6V到D+线，测量D-线电压，D-线电压小于0.3V时，判断接SDP；D-线电压在0.3V以上小于0.8V时，判断接CDP或DCP。

#2：输出0.6V到D-线，测量D+线电压，D+线电压小于0.3V时，判断接CDP；当D+线电压为0.3V以上且小于0.8V时，判断为接DCP。