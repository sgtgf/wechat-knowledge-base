# PCB板布局的几个细节

原创 硬件笔记本 2023-12-23 10:15 四川

> 原文地址: [https://mp.weixin.qq.com/s/4IV5Cy-oztHrbedFAnnD8w](https://mp.weixin.qq.com/s/4IV5Cy-oztHrbedFAnnD8w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

PCB板中元器件的布局是至关重要的，正确合理的布局不仅使版面更加整齐美观，同时也影响着印制导线的长短与数量，良好的PCB器件布局对提升整机的性能有着极其重要的意义。  

## 那么如何布局才更加合理呢？今天我们就给大家分享一下**“PCB板布局的几个细节”。**

  

01

**含无线模组的PC布局要点**

-   模拟电路与数字电路物理分离，例如MCU与无线模组的天线端口尽量远离；
    
-   无线模组的下方尽量避免布置高频数字走线、高频模拟走线、电源走线以及其它敏感器件，模组下方可以铺铜；
    
-   无线模组需尽量远离变压器、大功率电感、电源等电磁干扰较大的部分；
    
-   在放置含有板载PCB天线或陶瓷天线时，模组的天线部分下方PCB需挖空处理，不得铺铜且天线部分尽量处于板边；
    
-   无论射频信号还是其它信号走线应尽量短，其它信号还需远离无线模组发射部分，避免受到干扰；
    
-   布局需考虑无线模组需要具有较完整的电源地，射频走线需留出地孔伴随空间；
    
-   无线模组所需的电压纹波要求较高，因此最好在靠近模组电压引脚处增加较为合适滤波电容，例如10uF；
    
-   无线模块发送频率快，对电源的瞬态响应有一定要求，除了设计时需要选取性能优异的电源方案外，布局时也要注意合理的布置电源电路，充分发挥电源性能；如DC-DC布局是就需要注意续流二极管地与IC地的距离需要尽量靠近保证回流、功率电感与电容之间的距离需要尽量靠近等。
    

  

  

02

**线宽、线距的设置**

线宽、线距的设置对整板的性能提升有巨大的影响，**合理的设置走线宽度、线距能够有效的提升整板的电磁兼容性以及各方面的性能**。

例如电源线的线宽设置就要从整机负载的电流大小、供电电压大小、PCB的铜厚、走线长度等方面去考虑，通常宽1.0mm，铜厚1oz（0.035mm）的走线可通过约2A的电流。线距的合理设置可以有效减少串扰等现象，如常用的3W原则（即导线间的中心间距不小于3倍线宽时，则可保持70%的电场不互相干扰）。

![](https://mmbiz.qpic.cn/mmbiz_png/EvvXlctHqfcCQYlgq1o5Se3ickEZVtOd81a6vUzI4fErLnkvmNPWEOOXFJeTYdREmXxoiac80I1TUBsBClCQUkyQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**电源走线：**按照负载的电流、电压大小以及PCB铜厚综合考虑，通常电流都需预留2倍于正常工作电流，线距尽量满足3W原则。

**信号走线：**根据信号的传输速率、传输类型（模拟还是数字）、走线长度等综合考虑，普通信号线间距推荐满足3W原则，差分线则另行考虑。

 **射频走线：**射频走线的线宽需要考虑特性阻抗，常用的射频模组天线接口均为50Ω特特性阻抗，按经验功率≤30dBm(1W)的射频线宽0.55mm，铺铜的间距0.5mm，更准确的也可通过板厂协助调整得到约50Ω的特性阻抗。

  

  

03

**器件之间的间距设置**

在PCB Layout时器件之间的间距是我们必须要考虑的事情，如果**间距太小则容易导致焊接连锡影响生产；**  

![](https://mmbiz.qpic.cn/mmbiz_png/EvvXlctHqfcCQYlgq1o5Se3ickEZVtOd8XrOiasmsfibibx8cHwjhokxBd0XKHYPZlDGOX8TDyvQnzfpJLJ2hFolqQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**距离建议如下：**  

同类器件：≥0.3mm

不同器件：≥0.13\*h+0.3mm（h为周围邻近器件最大高度差）

只能使用手工焊接的器件之间距离建议：≥1.5mm

直插器件与贴片器件也应保持生产足够距离，建议在1-3mm之间；

  

  

04

**板边与器件、走线的间距控制**

在PCB布局布线时器件和走线离板边的距离设计是否合理也非常的重要，例如在实际的生产过程中大多采用拼板的方式，因此**如果器件离板边过近会造成在PCB分板的时候导致焊盘脱落，甚至器件损害，线路过近则容易在生产的时候导致线路断裂影响电路功能。**  

![](https://mmbiz.qpic.cn/mmbiz_png/EvvXlctHqfcCQYlgq1o5Se3ickEZVtOd86Q4q6stDVmUhRcn92KW4YaweicWfBPuzytpR2VasRsUTAWSry5vrV3w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**推荐距离与摆放方式：**  

  

**器件摆放：**建议器件焊盘与拼板“V cut”方向平行，目的是使得分板时器件焊盘所承受的机械应力均匀且受力方向相同，减小焊盘脱落的可能性。

**器件距离：**器件离板边的摆放距离≥0.5mm

**走线距离：**走线离板边的距离≥0.5mm

  

  

05

**相邻焊盘连接与泪滴**

如果IC的相邻引脚需要相连，需要注意的是最好不要在焊盘上直接进行连接，而是引出在焊盘外连接，这样可以防止生产时IC的引脚连锡短接。另外相邻焊盘间引出的线宽也需要注意，最好不超过IC引脚的大小，一些特殊引脚除外如电源引脚等。

![](https://mmbiz.qpic.cn/mmbiz_jpg/EvvXlctHqfcCQYlgq1o5Se3ickEZVtOd8II3aAnCwVbeERT4LpIolibwU3fmLN0b0ibyX2eBFvMGBvibFEEjxlTFmg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

-   泪滴可以有效的减小因为线宽突变而造成的反射，可以让走线与焊盘平稳连接；  
    
-   添加泪滴解决了走线与焊盘之间的连接受冲击力容易断裂的问题；
    
-   从外观上看添加泪滴也可以让PCB看起来更加合理美观；
    

![](https://mmbiz.qpic.cn/mmbiz_png/EvvXlctHqfcCQYlgq1o5Se3ickEZVtOd8rRECdHJyiaVY3dG0zl0dIEuqT5sjOQLxJqnJmGyqBX21mDhlYlJicdWg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

  

06

**过孔的参数和放置**

过孔的大小设置合理程度对电路的性能有着极大的影响，**合理的过孔大小设置需要考虑过孔所承受的电流、信号的频率、制作工艺难度等**，因此PCB Layout需要特别的注意。  

此外过孔的放置位置也同样重要，过孔如放置在焊盘上，生产时便容易导致器件焊接不良，因此**一般过孔都放置在焊盘外**，当然在空间极其紧张的情况下过孔放置在焊盘上再加上制板商的盘中孔工艺也是可以的，不过这样做生产成本便会增加。  

**过孔设置的要点：**

-   一个PCB中因为不同走线的需要可以放置不同尺寸的过孔，不过通常不建议超过3种以免对生产造成极大的不便拉高成本；
    
-   过孔的深度与直径比一般≤6，因为超过6倍时生产难以保证孔壁能够均匀镀铜；
    
-   过孔的寄身电感与寄身电容也需要注意，尤其在高速电路中需要特别注意其分布性能参数；
    
-   过孔越小越分布参数越小越适合高速电路，但其成本也高；
    

![](https://mmbiz.qpic.cn/mmbiz_png/EvvXlctHqfcCQYlgq1o5Se3ickEZVtOd8VLGDURFyibft9VjzQ3ceKABstzuNzHAkHKs79acd3H0Px9veCrcb8Sw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

以上6点便是此次整理的一些关于PCB Layout的注意事项，希望对大家能够有所帮助。

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