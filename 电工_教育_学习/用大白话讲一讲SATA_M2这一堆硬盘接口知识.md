# 用大白话讲一讲SATA、M2这一堆硬盘接口知识

原创 硬件笔记本 2024-01-29 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/fEepSPOoNKLIZA5hANG8IQ](https://mp.weixin.qq.com/s/fEepSPOoNKLIZA5hANG8IQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

为国家信息安全计

相信你们对各类硬盘接口的类型、总线、协议等的区分非常头疼，各种专业人士写的文字蛮多的，但看完依旧觉得脑细胞不够死的，还是迷迷糊糊。

整理了一下台式机和笔记本相关的硬盘知识，这里不罗列服务器相关的内容，只讨论常见的台式机和笔记本电脑。

  

  

**一、协议、总线和接口的关系图**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjDV3IIiawjMxb2TLGDicozepMzb2XL04RvibVId97odY04TuT5hQKaj72cBn7hvK0B6y97ILB8Ph9icw/640?wx_fmt=png)

  

  

  

**二、这些接口的硬盘长什么样？**

①SATA和mSATA的硬盘

SATA盘有机械盘和固态盘，均为2.5寸，现有SATA3.0为主流，SATA2.0和1.0已经淘汰。mSATA就是mini SATA，只是体积变小了很多。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjDV3IIiawjMxb2TLGDicozeptIn9sF1Jau9RMBDkO3YDicsTsbFrjlC29Ybyw6y1NMiahDmFPOlIrhJQ/640?wx_fmt=png)

  

  

②M.2的B Key（NGFF）与M.2的M Key（NVMe）的硬盘

M.2固态盘的接口类型，市面能见的为3种：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjDV3IIiawjMxb2TLGDicozepb00xjAzcOumcBAWR1fdfmia3GvNwGNwHXgO8iaKgPRajbn6QMjwDzlxQ/640?wx_fmt=png)

  

  

若是走SATA总线的NGFF，接口以B Key形式呈现，当然由于单纯B Key市面不多，因此M&B Key为现有主流；

若是走PCIe总线的NVMe，接口以M Key形式，当然M&B Key也行。

M.2固态盘宽度均为22mm，但有3种长度，分别为：42mm、60mm、80mm

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjDV3IIiawjMxb2TLGDicozepjLQInOWJchFHAYoR16bkrrxiaGMYXxo56Rql2gz37aia8gc1h4JRHaow/640?wx_fmt=png)

  

  

③PCIe的硬盘

PCIe属于台式机的接口，根据总线位宽的不同，分 x1、x4、x8、x16几种。而PCIe有1.0、2.0、3.0、4.0、5.0几个版本，不同版本传输速度不同。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjDV3IIiawjMxb2TLGDicozepExVYArGvcz9fjovgJuJRa1gwlcGAiaKdZtOb4y7rreHOWUYVxjEhaog/640?wx_fmt=png)

  

  

**三、这些接口的速度如何？**

SATA 2.0机械盘：传输速度3G/S；

SATA 3.0以及mSATA固态盘：传输速度6G/S；

M.2的B Key（NGFF）固态盘：传输速度6G/S；

M.2的M Key（NVMe）固态盘：传输速度 32G/S；

PCIe的最繁琐，见下表：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/WTOYZWInVoE4PdH2aCicgI4xDzur5OHicYWLPuZ7bX9L9RyWib9xdvIjJX00sZa6PAJTn8xtI2Th1jcNzibkwSk3Fg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

以上都是理论速度，你只需要看谁比较快比较牛叉即可。

**四、这些接口的相互转接情况**

上述各个接口，有小部分可以通过“转接卡”“转接板”来转接，但大多是高性能的转接低性能的，新的可以转接老的。

M.2的B Key（NGFF）接口可以转接为SATA 3.0;

M.2的B Key（NGFF）接口可以转接为PCIe，且可以相互转接；

M.2的M Key（NVMe）接口可以转接为PCIe，且可以相互转接；

![](https://mmbiz.qpic.cn/mmbiz_jpg/WTOYZWInVoE4PdH2aCicgI4xDzur5OHicYlMIGqraHbqlX2cRiaXwh772VM3RkmvstiaXuepRsXKxDyobetDNZxvGg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**四、这些接口只能安装硬盘吗？**

也不一定。

SATA3.0和mSATA是只接硬盘；

M.2的B Key（NGFF）可以接硬盘，也可以接无线网卡（骨灰级笔记本网卡用mini PCIe，不在讨论范围）；

  

  

**五、这些接口的硬盘可以用作移动硬盘吗？**

可以，有一种产品叫“硬盘盒”，可以实现笔记本/台式机硬盘变为移动硬盘的需求，其本质是不同接口转为USB3.0或者3.1。

例如老式SATA3.0的机械盘、M.2的B Key（NGFF）固态盘、M.2的M Key（NVMe）固态盘都可以做成移动硬盘，尤其是有两种，体积比优盘大不了多少，速度却是巨快无比的。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjDV3IIiawjMxb2TLGDicozepVMywolicGYkR82ZQ2XLddMeGQybaichIB1EttqgALyLMgL4ZVAP5qPsg/640?wx_fmt=png)

  

  

需要注意，这类硬盘盒带的那根线，一头是typeC，一头是USB，和手机数据线很像，但短不少。亲测手机数据线可以用在硬盘盒上，但是，稳定性和速度堪忧，还是不要这样用，数据无价。

另外，M.2的M Key（NVMe）固态盘的硬盘盒价格巨贵，是M.2的B Key（NGFF）的3倍不止。

  

最重要的一点：硬盘盒散热不佳，插10分钟就烫手。而不带盒子的单个转接板情况会好很多，但是不能装兜里携带。各有优劣吧！

硬件工程师都在关注我们

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