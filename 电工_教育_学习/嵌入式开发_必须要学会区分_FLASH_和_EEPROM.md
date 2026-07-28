# 嵌入式开发，必须要学会区分 FLASH 和 EEPROM

原创 硬件笔记本 2024-01-11 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/qn\_2MUgB9PpMunKu11ImlA](https://mp.weixin.qq.com/s/qn_2MUgB9PpMunKu11ImlA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  
存储器分为两大类：RAM和ROM，本文主要讨论ROM。ROM最初不能编程，出厂什么内容就永远什么内容，不灵活。

  

后来出现了PROM，可以自己写入一次，要是写错了，只能换一片，自认倒霉。

  

人类文明不断进步，终于出现了可多次擦除写入的EPROM，每次擦除要把芯片拿到紫外线上照一下，想一下你往单片机上下了一个程序之后发现有个地方需要加一句话，

  

为此你要把单片机放紫外灯下照半小时，然后才能再下一次，这么折腾一天也改不了几次。

  

历史的车轮不断前进，伟大的EEPROM出现了，拯救了一大批程序员，终于可以随意的修改ROM中的内容了。

  

EEPROM的全称是“电可擦除可编程只读存储器”，即Electrically Erasable Programmable Read-Only Memory。

  

是相对于紫外擦除的ROM来讲的。但是今天已经存在多种EEPROM的变种，变成了一类存储器的统称。

  

  

**狭义的EEPROM**

#####   

##### 这种ROM的特点是可以随机访问和修改任何一个字节，可以往每个bit中写入0或者1。这是最传统的一种EEPROM，掉电后数据不丢失，可以保存100年，可以擦写100w次。

#####   

##### 具有较高的可靠性，但是电路复杂/成本也高。因此目前的EEPROM都是几十千字节到几百千字节的，绝少有超过512K的。

#####   

##### 例如我们常见的24C02：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/Sutn8u5k4PR0J5mrgib8NKWicoZsMm342weLWsicjSKCSYYXV9jMbM40meTWVlxRibiacdzPFPpnI4THJMjcicL1u32Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**广义的EEPROM**

#####   

##### FLASH属于广义的EEPROM，因为它也是电擦除的ROM。但是为了区别于一般的按字节为单位的擦写的EEPROM，我们都叫它FLASH。

#####   

##### FLASH做的改进就是擦除时不再以字节为单位，而是以块为单位，一次简化了电路，数据密度更高，降低了成本。上 MB容量的ROM一般都是FLASH。

#####   

##### 如 W25Q128JVSIQ：

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/Sutn8u5k4PR0J5mrgib8NKWicoZsMm342weR3lWMSJCzdibcOd6rLI8WBrMO2iaFA3SFdicwbbInJPTO3ZcdzjUNCsg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

FLASH 分为 NOR-FLASH 和 NAND-FLASH

  

**NOR-FLASH：**

  

NOR-FLASH数据线和地址线分开，可以实现RAM一样的随机寻址功能，可以读取任何一个字节。但是擦除仍要按块来擦。依然W25Q128JVSIQ

  

**NAND-FLASH：**

  

NAND-FLASH同样是按块擦除，但是数据线和地址线复用，不能利用地址线随机寻址。读取只能按页来读取。（NAND-FLASH按块来擦除，按页来读，NOR-FLASH没有页）

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/Sutn8u5k4PR0J5mrgib8NKWicoZsMm342wIKdkictKDkXvNtMSGNIRQf9SyVtrBXfib5yxpib5qy0jKlATicxB0UrS5w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

由于NAND-FLASH引脚上复用，因此读取速度比NOR-FLASH慢一点，但是擦除和写入速度比NOR-FLASH快很多。

  

NAND-FLASH内部电路更简单，因此数据密度大，体积小，成本也低。因此大容量的FLASH都是NAND型的。小容量的2～12M的FLASH多是NOR型的。

  

使用寿命上，NOR-FLASH的擦除次数是nand的数倍。而且NAND-FLASH可以标记坏块，从而使软件跳过坏块。NOR-FLASH 一旦损坏便无法再用。

  

因为NOR-FLASH可以进行字节寻址，所以程序可以在NOR-FLASH中运行。嵌入式系统多用一个小容量的NOR-FLASH存储引导代码，用一个大容量的NAND-FLASH存放文件系统和内核。  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。