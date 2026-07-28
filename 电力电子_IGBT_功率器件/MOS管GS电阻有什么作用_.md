# MOS管GS电阻有什么作用？

原创 硬件笔记本 2023-12-12 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/bbdOc-8\_2Gt\_\_WL3GPOfpA](https://mp.weixin.qq.com/s/bbdOc-8_2Gt__WL3GPOfpA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

MOS管具有三个内在的寄生电容：Cgs、Cgd、Cds。这一点在MOS管的规格书中可以体现（规格书常用Ciss、Coss、Crss这三个参数代替）。MOS管之所以存在米勒效应，以及ＧＳ之间要并电阻，其源头都在于这三个寄生电容。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgn91aggwLnKibSqpx8a92iaERSpW9HFqIpL9ibK39OBCK0icnyBUyM2ibsXdH5op4pCFMBaaXn71pK6Lw/640?wx_fmt=jpeg&from=appmsg)

MOS管内部寄生电容示意

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgn91aggwLnKibSqpx8a92iaE6HmhACm9znL0iaHUTliay7VY2u0WIt8esYGokcRGVodicMzezTx5a4KEA/640?wx_fmt=png&from=appmsg)

IRF3205寄生电容参数

  

# 1.MOS管的米勒效应

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgn91aggwLnKibSqpx8a92iaESRibKbqV1lpmiaQmlUibZWVxNHC7ib0dslfERe7Cz9c6fSiaqQeoypI6sicA/640?wx_fmt=png&from=appmsg)

MOS管驱动之理想与现实

理想的MOS管驱动波形应是方波，当Cgs达到门槛电压之后， MOS管就会进入饱和导通状态。而实际上在MOS管的栅极驱动过程中，会存在一个米勒平台。米勒平台实际上就是MOS管处于“放大区”的典型标志，所以导致开通损耗很大。由此可见，米勒效应是一个对电路不利的却又客观存在的现象，在设计电路时需要加以考虑。

  

米勒平台形成的详细过程：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgn91aggwLnKibSqpx8a92iaEnP10wMVUr4qibUNu7uCzwUEn0q8qZYxbe3n2Jq7cickEun4Mtk9ybISw/640?wx_fmt=png&from=appmsg)

MOS管开启过程

  

将MOS管开启时间分解：

t0→t1：当GS两端电压达到门限电压Vgs(th)的时候（可以理解为对Cgs进行充电），MOS管开始导通，这之前MOS管处于截止区；

t1→t2：随着Vgs继续增大，Id开始增大，Vds开始下降，此时MOS管工作在饱和区（如何判断是在饱和区？直接通过公式可知：Vds>Vgs-Vth，Vds-Id输出特性曲线反着分析一遍），Id主要由Vgs决定，这个过程中Vds会稍微有点降低，主要是△I导致G极端一些寄生感抗等形成压降；

t2→t3：Vgs增大到一定程度后，出现米勒效应，Id已经达到饱和，此时Vgs会持续一段时间不再增加，而Vds继续下降，给Cgd充电，也正是因为需要给Cgd充电，所以Cgs两端电压变化就比较小（MOS管开通时，Vd>Vg，Cdg先通过MOS管放电，而后再反向充电，夺取了给Cgs的充电电流，造成了Vgs的平台）；

t3→t4：Vgs继续上升，此时进入可变电阻区，DS导通，Vds降来下来（米勒平台由于限制了Vgs的增加，也就限制了导通电阻的降低，进而限制了Vds的降低，使得MOS管不能很快进入开关状态）。

  

# 2.MOS管G极与S极之间的电阻作用

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgn91aggwLnKibSqpx8a92iaEELFguBTnfVtOHBqeibP8S3PQbBuLjJ0MJOhFbdSaW11KR3EyrR77UZA/640?wx_fmt=png&from=appmsg)

反激电源图：R3为GS电阻

用一个简单的实验证明GS间电阻的重要性：取一只mos管,让它的G极悬空,然后在DS上加电压,结果发现输入电压才三四十伏的时候,MOS管的DS就会直接导通，如果不限流则可能损坏。按说此时没有驱动，MOS管不应导通。但其实由于MOS管寄生电容的存在,当在DS之间加电压时，加在DS之间电压会通过Cdg给Cgs充电,这样G极的电压就会抬高直到mos管导通。（假如采用变压器驱动,变压器绕组可以起到放电作用,所以即使不加GS电阻,在驱动没有的情况下,管子也不会自己导通）

在GS之间并联一个电阻（阻值约为几K到几十K），可以有效保障MOS管正常工作。首先，门极悬空时DS之间电压不会导致MOS管导通损坏，同时在没有驱动时能将MOS管的门极钳在低位，不会误动作，能可靠通断。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条桃李电子。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。