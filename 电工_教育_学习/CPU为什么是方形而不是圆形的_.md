# CPU为什么是方形而不是圆形的？

原创 硬件笔记本 2023-10-17 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/raMK9Zx4OqFGsgnGMj0P-Q](https://mp.weixin.qq.com/s/raMK9Zx4OqFGsgnGMj0P-Q)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

做硬件的朋友几乎都知道，CPU的外形是一块正方形的金属厚片，当然也有长方形的版本。上表面平整光滑，下表面则有着金属触点或针脚。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh50IwoC4t0xX6mbR0DXIHzo4mFffy0n41qggBF0GicfpxjiaFTSAqiatKoCaDt0NgEd2xTDOKxhz1Hg/640?wx_fmt=png)

虽然我们默认CPU的形状为矩形，但是不知道有没有小伙伴想过**CPU为什么不做成圆形呢？**

  

  

**1、我们看到的CPU不是真的CPU**

  

在解答这一问题之前，要先向大家科普一下，我们能用眼睛看到的，用手摸到的这一小坨金属片，并不是CPU这一硬件的本体，而是它的封装。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh50IwoC4t0xX6mbR0DXIHzc0p2faLnNX8vWZ3RzeY1O70krES8t90A3hCaq4ruhqoFibicPYeOUr7w/640?wx_fmt=png)

CPU的本体芯片被牢固安装在封装的中心。称不上巧合的是CPU芯片的形状同样为矩形，所以我们就先来讲一讲真正的CPU芯片为什么是这个形状吧。

  

  

**2、从制造说起**

  

可能很多同学都知道，CPU芯片是由沙子制成的，不知道这份知识有没有雷总想要将手机芯片卖成沙子价格的科普功劳在里面。

沙子的成分是二氧化硅，我们从中提取硅元素制成一个又粗又长的单晶硅棒，然后切割成一片一片的薄薄的圆形硅片，也就是我们更加熟知的“晶圆”。

![](https://mmbiz.qpic.cn/mmbiz_png/Ric7NYAOlvUnhBF3iaeicgbqHFtXUiatBtrBFhxNrm2ARHxbyX88Yr8LVBK3ynqib6nx9fPKag0fHicdVVQslIqBrhDQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

_图1_

直到这里晶圆还是圆形的，这也是它名字的由来。接下来经过一系列复杂的处理，包括离子注入、电镀、光刻等等，这片晶圆上就出现了许多块小小的CPU雏形。

然后对晶圆进行分割，把一块块的CPU芯片分离开来，并从中剔除掉不合格的部分，剩下的就是合格的CPU芯片了。

再把CPU芯片放在一片PCB板上，上面盖上一片铝盖，中间用钎焊或硅脂连接起来，我们能见到的CPU就做好了。（当然没这么简单，此处太长不讲）

  

  

  

**3、那为何是方的？**

  

有些同学可能听了一头雾水，CPU的生产过程和它为什么是方的之间有什么必然联系吗？实际上我们知道，CPU小方块是从一张巨大的圆形大饼上切下来的，那么为了降低成本，肯定是把这张大饼切的份数越多越好。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh50IwoC4t0xX6mbR0DXIHzmDy8SVqoGgrnUqvtWJKsKmQHJG9cPt2INoscuwCoiaqP4ic4v3iaNIarQ/640?wx_fmt=png)

  

如果从一个平面上切下许多圆形区域，那么圆和圆之间剩下的缝隙则完全被浪费掉了，而切成许多小的正方形就可以完全没有缝隙，只在晶圆的边缘处留下少许浪费的区域。

![](https://mmbiz.qpic.cn/mmbiz_jpg/HA7740xWIichwJDs2YOCiaFCL1STJ0QUKrYwbFv8aBGfaVcdLTicBCIibPSmaIEibYV08hmc4PmRhz4ZfjDJEezH4sg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

_图2：最密集的圆形还是会浪费大量面积_

  

同时还要考虑到切割难度的问题，直线切割当然比曲线切割要简单很多倍。这种情况下工艺更加简单，也能一定程度上提高CPU的良品率。所以其实这个问题的答案并不复杂，CPU是方形的，只是单纯因为方形更易切割且利用率更高，最不浪费。

![](https://mmbiz.qpic.cn/mmbiz_jpg/HA7740xWIichwJDs2YOCiaFCL1STJ0QUKrJxDntpicOEfkXKzeD2csysA9AXO0BaU1BXos0pZKq40xhUqu6Ctxa5w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

_图4：切割成方形可以节约晶圆，工艺也更加简单_

虽然成本控制是企业逐利性的必然结果，但也因此，让我们能只花几千元或几百元就能买到人类科技的最高结晶之一，快看看面前主机里面的CPU，你能感受到那份智慧凝结的美丽吗？

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群