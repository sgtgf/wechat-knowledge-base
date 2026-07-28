# 拆解按摩器：有意思的按键与LED控制电路，学习借鉴一下！

原创 硬件笔记本 2023-11-28 07:42 四川

> 原文地址: [https://mp.weixin.qq.com/s/S32XnBEoUo5N3XSEeLZk0g](https://mp.weixin.qq.com/s/S32XnBEoUo5N3XSEeLZk0g)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

作者：qinyunti  

本文由面包板社区原创

  

之前公司节日发了个腰部按摩器，几乎没怎么用，搜了下价格好像还要一百多，个人感觉有点浪费了，直接发钱更好。倒是好奇他的结构和控制是怎么做的，于是拆解来分析下吧，也算是物尽其用发挥点余热。

  

  

**拆解**

外观和配色个人感觉还行,比较青春

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgeTib58xb2JVubibLD7PCSLLcmtHsFib3FJbKJ3YHJgyHQmluSiajWdQuicQ/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

  

拉开拉链，拆开外面的布面，里面还有一层纱面

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgEljqTBbHm9A9ia58dicz3fDm23LE8HXmE6M1kL8W8WianBrQDDXOkOZeA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

按键部分使用魔术贴固定

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgU9piaSRUEaM5JPRe6cIYLHcRN6ujmNCZs3E8MXcCx463hib8Ashrmzmw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

拆开纱面后，看到里面的结构，整体是一个海绵

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lga8BbibVNTLqCUupfpwlm8YXic006ribNFjTvQzzKmnBww515Uy5iaXYqpg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

可以看到如下，电池，按键板，充电线的三条引出线

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgRI6LgnzVibs04RODtLPJgs051AgKeRkWFneibds4AlcJj5NCGFCm1MHA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

电池是用一个元器件盒子装的，使用双面胶固定，外面使用透明胶布固定，还用剪刀开了线槽，直接用便宜的元器件盒子，都省的开模专门设计盒子了，也算是怎么便宜怎么来。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgYDz9hHiaSjja2Q79fSn1jsRbhemicSob2M8K2kmRho397NyeNlLtibTRA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

拆开按摩头上的螺钉，加热片位于按摩头里面，两个弹簧触点接触下面的两个环形铜环，铜环再引线到PCB板。这里因为加热片是再按摩头上需要旋转，所以用的弹簧触点+铜环的接触方式来实现旋转也能导电。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgjVXBUgrzPRGdBcskiaMCMMiby5Y8pfrqnlp74KrpicDd7EsXKevHiaARbw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lg9VxB7wzAbS0ibK2kXyoQZ4sTsgh01J8Yq4twEEPccPiaNRKPVsxSUibvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

主板部分，可以看到加热，电机，电池几个插座

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgnwDpara4AeoPyhyQvqSn3nyDm8zDJyNcEzOxJKxdhSpic96GjN3kNGA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

测了下电池电压只有6.3V了，两个3.7V串联正常应该是7.4V以上，所以要充电了。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lg7kXO3Hbcr7iaIt5IXJOiaVHSrIHCqMUfnzf2iaT3AibGQz81Yc7ldMSehw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

继续拆开电机上的8个螺钉，可以看到两边的减速齿轮，电机是7.4V的直流电机。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgGAQxHGAv2udDYOGkeYRYK5nfqrQsjnYicneJNfyCAib7NzkEtMaY7u2g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**主控电路分析**

主板上的MCU和电池充电芯片都打磨了，不确定型号。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgUpTHvFRGL78qWbNpqYNVq7k8u0DOKJEqSgPjymP5cNXdYWx4a2l6xg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

电机控制用的两片STC4614 :N+P的MOS管, 两片构成H桥驱动，可以正反转。

  

使用丝印J3Y的S8050三极管控制MOS的开关

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgtRE8arnqUjxGU14X2O8EiaZJC6NfCpSAib77Nv29k7nB2x9HzCY5dVibQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

丝印BE的是 12V单向 SMA瞬态抑制二极管，做MOS的续流用。

M7的二极管防止电压反灌

3.3V稳压芯片也打磨了不确定型号

丝印A0H的MOS管用于控制加热

  

**按键LED电路分析  
**

按键板设计比较有意思，三个按键，5个LED实际只用了4根线+一个GND。

  

这个设计减少了信号和线的数量值得借鉴

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgFndr5t9qnl4eiaXBt0n2zQTAJo7n6k7Llnac2WBIA4H7SFvibQaQKiciaA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

按键的话实际是使用ADC去采集

仅KEY3按下则KEY处电压为0V

仅KEY2按下则KEY处电压为3.3V\*10K/20k=1.65V

仅KEY1按下则KEY处电压为3.3V\*20K/30K=2.2V

所以按键不按则KEY电压为3.3V

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgrMxAlWAPlQoJcvwiaiaRfPczr9wOH39XfFPqkmILF5icq7l7TxGmxiaQUQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

3个LED信号控制5个LED灯

  

一个IO控制两个LED，IO输出低和高两个LED分别点亮，输出高阻态则两个都不亮(串联两个LED加起来开启电压大于VCC，但是可能微弱的亮，实际板子上也可以观察到)，输出高频方波两个LED都亮，所以可以看到一个IO可以控制双色灯显示不同颜色。

  

上面两个双色LED这种方式控制，还有一个充电指示LED单独控制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgia3eh2ypScQ9ibJhXAZo5Js3E8H7ry7ziaAia22gLGT9s1l5P25TgTGOAw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

其实还有查理复用的电路，网上有专门文章分析就不再赘述了，也可以参考。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfmZBWwgkMUTsbmwlK0cK5lgQGreMNdhcxzuIDTHs9JeqG5X0UEMicWlwbQdIzYiaZEicf3HRtnuX4pEQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**总结**

结构上有个有特点的地方就是弹簧触点实现旋转接触，按键和LED控制的设计值得借鉴，使用较少的信号实现多个按键采集和LED控制。

  

主控主要就是H桥控制直流电机没有什么特别的。

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
    

后台回复“加群”，管理员拉你加入同行技术交流群。