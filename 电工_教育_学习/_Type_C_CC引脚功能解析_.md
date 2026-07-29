# 【Type C-CC引脚功能解析】

原创 电路一点通 2025-07-06 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/rtM\_3WQZmrbCJ-wDWuHnIg](https://mp.weixin.qq.com/s/rtM_3WQZmrbCJ-wDWuHnIg)

关于USB CC引脚的功能，想必很多人都很好奇。USB经常接触，其内部的VBUS D+与D-大家肯定都知道了解，但对于CC引脚的存在却很少有人知道其作用。所以呢，今日，小白就来简单的介绍一下其功能。

> ☞

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_000_6d7373ccf89d.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

  

**首先还是要先介绍几个关键名词：**

-   DFP（Downstream Facing Port）下行端口，可以理解为Host，DFP提供VBUS，可以提供数据。在协议规范中DFP特指数据的下行传输，笼统意义上指的是数据下行和对外提供电源的设备。典型的DFP设备是电源适配器。只能做Source。
    
-   UFP（Upstream Facing Port）上行端口，可以理解为Device，UFP从VBUS中取电，并可提供数据。典型设备是U盘，移动硬盘。只能做sink端。
    
-   DRP (DualRolePort)：双角色端口，DRP既可以做DFP(Host)，也可以做UFP(Device)，也可以在DFP与UFP间动态切换。典型的DRP设备是笔记本电脑，手机。
    

## **1\. 插入检测**

在DFP与UFP未连接之前，VBUS是没有输出的。当DFP与UFP连接后，CC pin连接。DFP上的CC pin会检测到来自UFP的下拉。此时代表了DFP与UFP连接成功。随后，DFP会打开VBUS上的FET，输出VBUS给UFP。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_003_cf2320b92a7a.png)

## **2\. 识别正反插**

以大家接触最多的手机为例。手机属于DRP，既可以做DFP，又可以做UFP。手机因CC logic的存在，当未连接Type C时， CC引脚是不断的循环被上拉与下拉的。此时如果用示波器测量机器的CC Pin的信号其实是方波。

当手机充电时  
 针对手机而言， 作为UFP时，内部的CC引脚直接通过Rd为下拉至地。  
 充电器，作为DFP，内部的两个CC引脚是被上拉到VBUS。  
 当充电器与手机连接，因手机内部CC引脚的下拉进而导致充电器的CC1 Pin被拉低时，此时代表UFP是向上插入。反之，如果充电器检测到CC2 pin被下拉时，则UFP就是向下插入。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_002_f2a0cef5c9da.png)**左侧为DFP 右侧为UFP**

![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_001_cf2320b92a7a.png)  
**图示CC1被拉低 代表正向插入**

## 3.了解VBUS配置方式：电流模式与USB PD

下表展示了每个USB标准所能提供的供电能力。纯type C端口可提供5V/3A的供电能力。如果配合PD协议，供电能力可以达到更高(USB pd协议通过CC引脚通信)。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_004_cebb3fe5bdff.png)  
 Type c 存在1.5A与3A两种电流模式。其主要取决于DFP的输出能力。DFP通过CC引脚上的电压告知UFP供电能力。UFP的下拉电阻始终为5.1K保持不变，而DFP可通过其CC上的上拉电阻Rp或者电流源Ip来产生电压。![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_005_a731f1aac7da.png)  
 Type-C spec定义了DFP在不同模式下，在CC pin要供多大的电流或是要用多大的上拉电阻Rp阻值。![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_006_0623c22c853e.png)  
 对于UFP而言，其主要是通过CC pin上的电压来得知DFP的输出能力。例如当5V/3A时，DFP会在CC上传递330uA的电流。在UFP上可得到电压330uA_5.1K=1.683V。  
 亦或通过DFP上的上拉电阻10K计算出UFP上CC pin的电压5V_5.1K/(5.1K+10K)=1.688V。一样可以判断DFP为Vrd/3.0A。![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_007_e420097dfd86.png)

## **4\. 侦测连接到设备的端口类型**

文章最开始说过DFP为HOST端，UFP为DEVICE端。DFP端的CC pin上存在上拉电阻Rp，UFP端的CC  pin上存在下拉电阻Rd。在DFP与UFP未连接时，DFP上的VBUS是断开的，只有当DFP与UFP连接时，DFP便会打开FET,供电给UFP。

DFP可根据CC1与CC2的负载状态(如下图)，来判断它是否接到了debug or Audio accessory装置。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_008_bf557fefffc1.png)

## **5\. 配置VCONN**

从下图可以看到插座的A5与B5分别存在的是CC1与CC2。与之相对应的插头在A5与B5存在的是CC与Vconn。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_009_4537d389eea2.png)  
  CC Pin有CC1与CC2。当其中一个Pin被用来做DFP与UFP之间的连接。另一个Pin则用来供Vconn。当Cable内将另一个CC  pin接一个下拉电阻Ra，这表示这是一条主动式Cable，需要被供电的。DFP侦测到Ra，便会输出VCONN在CC  pin，供电给Cable(内部含有emark芯片)。Ra的阻抗是定义为800ohm 1200ohm。这个CC引脚将切换至VCONN对外输出4.755.5V，功率最大1W。![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_010_a6193b106873.png)

## **6\. 在两个端口间协商建立DFP和UFP身份**

Type-C除了DFP与UFP，还有一种是DRP（双模式端口，前面提过手机就是DRP），可以以一定的间隔在DFP与UFP间来回切换。当DRP端口与DFP设备相连，DRP则切换为UFP设备；同样地也可以切换为DFP设备。当两个DRP设备连接时，DFP与UFP身份是随机的。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_011_8edd9be51e93.png)  
 此为某手机内部CC Logic芯片的内部框架图，可以看到CC Pin内部有个开关在RP与RD切换。![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_012_9e24bfb8ddd5.png)  
 DRP未接入任何设备时，开关来回切换，CC1与CC2波形如上图所示。当有设备接入后，根据设备的不同，开关会固定在一端，此时DRP只能是一种模式，为UFP或者DFP。

## **7\. 配置使用其他外设模式**

Type-C规范定义了替代（Alt）模式与外设（Accessory）模式。主机、设备与线缆可以发送格式化的厂商自定义信息（VDM）来交换信息和发现USB  ID。当主机通过VDM与设备交换信息后进入 Alt  模式，Type-C接口中的引脚定义将会改变以支持PCIe或者DisplayPort。下面的例子是一个Type-C扩展坞，它使用MUX切换PCIe或USB  3.1信号通至Type-C端口。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_013_16726ec9024b.png)  
 当CC1和CC2引脚同时使用Ra下拉时，主机将把设备识别成音频设备，然后从USB信号切换至音频信号。![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_014_a36148468d07.png)  
 从图中也可以同时看出来，接入音频设备时，Dp接入耳机的右声道，Dn接入耳机的左声道。SBU则连接至MIC。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_015_88827d80d5ef.jpg)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\_Type_C_CC引脚功能解析__images\img_016_07ae91b37e51.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。

******进大家庭⭕圈探讨回复:****** ******交流******  

分享💬点赞👍在看❤️

###