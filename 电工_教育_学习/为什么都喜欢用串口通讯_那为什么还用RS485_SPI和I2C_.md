# 为什么都喜欢用串口通讯？那为什么还用RS485,SPI和I2C？

原创 蜗牛 硬件笔记本 2024-02-27 07:57 四川

> 原文地址: [https://mp.weixin.qq.com/s/8w7L5dNR-1W8xICIHtObTQ](https://mp.weixin.qq.com/s/8w7L5dNR-1W8xICIHtObTQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

## 1、为什么都喜欢用串口通讯？

之前在做单片机产品的时候，用的最多的就是串口通讯，凡是单片机的外设，优先选用带串口功能的，比如蓝牙模块，WIFI模块，4G模块，电表和显示屏等等。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXcFIogg9t5KkxGk8gRG2L1gnG2NZ9kzaEaGWRX578H6ZnzI1gkLpIWg/640?wx_fmt=png&from=appmsg)

  

为什么都喜欢用串口通讯？  

因为简单啊，通常仅需2条通讯线，1条电源线和1条地线相连。  

  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXMkpL9F6icW8iaoPxBp4nG9iaibmpxMH9pr9ZtTFH0hPHicKUICP6NXib9DIA/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247534234&idx=2&sn=db9d94c0e606d38711920c20c845ff8f&chksm=c30a9848f47d115e45d740fcb4393928e3a47e08ded0054643993a989d402e4fd7a943ba3a91&scene=21#wechat_redirect)点击图片可详看串口介绍

  

双方约定好相同的速度，比如115200bps，以这种数据包的形式给对方发送数据，一次发送8位，也就是一个字节的数据。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbznGZ6DmykTJzp7jNCyjXBVYeBTGOFTbvnAPNcPacTqYzmlq9EtBK643oNnwGeuwqoOSUSoEULA/640?wx_fmt=png&from=appmsg)

  

## 2、串口通讯的缺点

虽然串口简单，但是它也有缺点：

1、远距离信号不能传输；  

2、通讯速度较慢；  

3、只支持一对一通讯，不能一对多通讯。

所以，针对这几个缺点，我们需要采用其它的方式来弥补串口的不足。

  

## 3、RS232，RS485，SPI通讯

**3.1、RS232，RS485**

像我开始举的例子，单片机跟外设之间距离短可以正常通信，要是我们长距离传输数据就容易受到干扰，导致通信异常，这时候聪明的人类就发明了RS232和RS485通信。

  

-   RS232通信距离可达30m左右；
    
-   RS485的通信距离理想情况下能超过1000m，且485的总线上可挂多个负载。
    

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgryuTMib8iclIy6wBonxXdHS5vDmBshg7v03TSmmVZnH79HWIP0UZwGh65pBl9y3zu8dicCibibZicoiaiaw/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247518805&idx=2&sn=78a8432359246b442f01acf2862277dd&chksm=c30a5487f47ddd914cfe3f6cd097b194d6ce5a7ffd4e26004682242870ddd29da7d4d7cb16b3&scene=21#wechat_redirect)

点击图片可详看485介绍

通常，串口通信最大的波特率为115200

**如果没有校验位**，就应该除以10，得到的是每秒字节数：115200÷10＝ 11520 (字节/秒)。再除以 1024，就是每秒 KB 数：11520÷1024＝11.25 (KB/秒)。

**如果有一位奇偶校验位**，就应该除以 11，得到的是每秒 KB 数：115200÷11÷1024＝ 10.27 (KB/秒)。

所以串口的速度是非常的慢，之所以这么慢是因为早期的单片机频率比较低，时钟精度也不高，所以通信双方的波特率不能做到完全一致，速率太快就会通信异常。  

  

**3.2、SPI**

那如果在通信双方之间加一个clock时钟信号，不给通信双方约定相同的速度，我们只需根据时钟信号的上升沿进行发送接收数据，大大提高了通信速率，于是产生了SPI通信，它可以轻松突破10M。  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgWEzbQicK4emsic0qHGjKKyIf1clHKOrIG3hBiaEXcAmUmF0ZSfYpEDYicRDUmviciayxa8TusMDb5QIMQ/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487384&idx=1&sn=a11383b316fd0d14f67a2ba66d4cc095&chksm=c309d14af47e585cf70e5603bcdff726be46b899aa8ecff29c7f7ac0631ac6d207fed7aa142e&scene=21#wechat_redirect)

点击图片可详看SPI介绍

**3.3、I2C**

如果我们的单片机要同时控制多个外设，用很多串口分别连接是很浪费的，要是一条通信线上可同时挂多个外设，那是相当的节约资源,所以就产生了I2C。

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgWEzbQicK4emsic0qHGjKKyIj2GwOIVX4vwXOZGIaJgTgKZBmuicMxcrDRF3JdYgrdIAeDcQ2TibTCzg/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247496347&idx=1&sn=cba4032abe8e015783bf7e6913201a48&chksm=c30a2c49f47da55fd6cb459514c91fd409a2032f23e2dfe693f4fe5abbad122169d9115c78ec&scene=21#wechat_redirect)

点击图片可详看I2C介绍

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：原创文章转载请注明出处，部分图片整理于网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。