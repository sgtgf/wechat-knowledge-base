# 常见的8种PCB标记整理汇总

原创 硬件笔记本 2024-01-17 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/W2-FNxhG\_J0kJ9apPnl6Fg](https://mp.weixin.qq.com/s/W2-FNxhG_J0kJ9apPnl6Fg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天给大家分享的是：PCB板上常见的8种PCB标记。

从左到右：邮票孔 - 过孔类型 - 防焊焊盘- 基准标记

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRS9ZZibLHFTardFQ9Y8XCiabErWHDscge7j4ibdSMHVicHbgj9sfC6xk4gpw/640?wx_fmt=jpeg&from=appmsg)

从左到右：邮票孔 - 安装孔 - 防焊焊盘- 基准标记

从左到右：PCB 开槽、PCB 按钮、火花间隙和保险丝走线

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSO7DIrXAOREcMWiccuWcQgRnMy1ryTFj4cTibYp8A3icxccwtOzPzPNXuw/640?wx_fmt=jpeg&from=appmsg)

从左到右：PCB 开槽、PCB 按钮、火花隙和保险丝走线

  

# 1、PCB 邮票孔

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRS3C3nBEoHnI6PLNhMpI4CRvfm3aoIp8hUdyXoYXnOGPaD0zTOM0RpSQ/640?wx_fmt=jpeg&from=appmsg)

邮票孔

在进行拼板的时候，为了便于PCB板分开，在中间保留一个小的接触区域，该区域中有孔称为邮票孔。我个人觉得取名邮票孔的原因，是不是因为当PCB分开的时候像邮票一样留下那种边缘。

  

# 2、PCB过孔类型

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRS3QRtL8Vnr1HWU1zMvqUIwGxsuRawezFgzQlJ5NsrtyvhCsVPibFMjZg/640?wx_fmt=jpeg&from=appmsg)

PCB过孔类型

在很多情况下，你会看到安装孔被微小的过孔包围。这里主要有2种类型的安装孔：镀层和未镀层。可能会有2个原因使用周围的过孔：

-   1、当我们想要将孔与内层连接时（如多层PCB中的GND）
    
-   2、未镀孔的情况，当想连接上下焊盘的时
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRStOGYXiclGaVRNJGLLm0Yp7R4H7bDV0iaIBR7fAibO4hNdYM5coqLQEIvg/640?wx_fmt=jpeg&from=appmsg)

  

# 3、防焊焊盘（焊料窃取）

波峰焊的缺陷之一在焊接SMD的过程中容易出现焊桥，作为解决方案，人们发现在原始引脚的末端使用额外的焊盘可以解决该问题。额外焊盘的宽度是普通焊盘的2-3倍。

也被称为焊料窃取，因为吸收了多余的焊料并防止了焊桥。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRShNXIthK9JOdOE1163jGHKhibIIHuicVUKMyCoCz2d1yotmJDWSRaRm9Q/640?wx_fmt=png&from=appmsg)

防焊焊盘

#   

# 4、基准标记（Mark点标记）

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSUFLdJu6DsZN1rtLvJ7P2oe97QMsFt8iaQI4sSOzlxKbduR6Ngsgmt2g/640?wx_fmt=jpeg&from=appmsg)

基准标记

一个更大的裸圆圈内有一个裸铜圆圈。该基准标记用作拾放 (PnP) 机器的参考点。基准标记位于三个位置：

-   1、在面板中。
    
-   2、除了QFN,TQFP等小间距零件。
    
-   3、PCB边角处。
    

关于基准标记的更详细内容，欢迎阅读以下文章：

mark点怎么制作？9个mark点定位原则，图文+案例，带你搞定mark点

#   

# 5、火花间隙

火花间隙用于 ESD、电流浪涌和过压保护。高压会使两个端子之间的空气电离，并且在损坏电路的其余部分之前会在它们之间形成火花。不建议使用这种保护方式，但总比没有好，主要缺点是性能会随时间变化。

击穿电压可通过以下公式计算：V=((3000×p×d)+1350)

其中“p”是大气压，“d”是以毫米为单位的距离。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSZiaI0fmLbia3lIqib7wA3TUjbsP3XEQibLea8f5ygSTzBONVEqrrtZJZXg/640?wx_fmt=jpeg&from=appmsg)

火花间隙

#   

# 6、PCB导电按键

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSicmx4B1WCWws4B9s1YHK21O32HsibxuzqYmFbGyP2rsoBx74pyNAHQQQ/640?wx_fmt=jpeg&from=appmsg)

PCB导电按键

如果你拆过遥控器或计算器，你就应该看到过这个标记。导电按键由2个交错的端子（但未连接）组成。当按下键盘上的橡胶按钮时，两个端子会连接，因为橡胶按钮的底部时导电的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSpE0sk3QicYrFs0GDQQxum3Htssqf9d7YZRsMe4pXZadwrZBw3GM2sJw/640?wx_fmt=jpeg&from=appmsg)

PCB导电按键

#   

# 7、保险丝走线

类似于火花间隙，这是另一种使用 PCB 的廉价技术。保险丝走线是电源线上的缩颈走线，是一次性保险丝。相同的配置可以用作 PCB 跳线，通过简单地蚀刻颈缩迹线来移除特定连接（PCB 跳线可以在某些 Arduino UNO 板上的复位线上找到）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSgbCjoV6EqJO5Pq0PLW01bwMzMB1WBVBNW1pwFLIyB4qicYPhr07DGnA/640?wx_fmt=jpeg&from=appmsg)

保险丝走线

#   

# 8、PCB 开槽

如果你查看电源等高压设备 PCB，可能会注意到某些走线之间存在气槽。

PCB 中反复出现的临时电弧会导致 PCB 碳化，从而导致短路。为此，可以在疑似区域添加布线槽，该区域仍会出现电弧，但不会碳化。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg6Eekad2zPBhfQIu25stRSP7mibfy46Bic9Fib3EJSl2ZVxWoyE6TiaDg2BlrDRnmvfwyYhzea6Mw6hA/640?wx_fmt=jpeg&from=appmsg)

PCB 插槽

以上就是关于 PCB上常见8种标记的介绍，希望大家多多支持。如果有什么错误或者建议，欢迎在评论区留言。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源头条百芯说DFM。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。