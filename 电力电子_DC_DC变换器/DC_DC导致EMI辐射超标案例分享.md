# DC-DC导致EMI辐射超标案例分享

原创 硬件笔记本 2023-09-12 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/JwZgNPVBThsUTcU4JcZwrg](https://mp.weixin.qq.com/s/JwZgNPVBThsUTcU4JcZwrg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

分享一个EMI整改文档，对于EMC来说，接触的案例越多，整改的成功率就越高，整改的方法也越多，从案例中吸取教训，总结经验，避免设计中出现同样的问题。

  

  

注意：按照文档描述，从下面两张图片可以看出470MHz和940MHz(二次谐波)左右，这两个频点的功率非常高，可能该产品是一款无线产品，对于主频--有意辐射频率来说是有豁免权的，所以只需要注意200MHz之前的频段，由于频谱超标带宽较宽，可以肯定非时钟、晶振辐射超标引起，几乎肯定辐射源在电源了，不过最后的结果，电源部分虽然PASS了，但是后面又引起了其他的频点超标，不知道为什么也能够PASS，可能不关心200MHz之后的频点，这里不太清楚，大家主要看电源部分辐射超标的整改方法即可。个人观点，仅供参考！

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbcDKlqpjgjseHd8ibjPqUTILicGTyMGgWle5N5ZOUkEQEQ3IPTX8RH83g/640?wx_fmt=png&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrboK0EGE5DDFL7F1chcxATuJtwSDhl81l8Z3CQyahN7k7Z1sFFsRicCHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

  

以下是文档部分截图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrb1ubGkgHQAGe81DAVjHTQJpjulVO1QuDBEmGCKBeWbiarvSASzwgHbyg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbIwQoSQYBBibHQp1JbmqJcrOdRerS9Zm2vWTfblvrKzqsUc5y09Neic0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrb9FwUrHxwXFeN4fekNn0j7IYD9ujqzeXV64iavMY7TdMGmFA4AJvygHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbJeZE1Gkb0kUxwzZkPicneZyKhibIAXicnTFpJoph7pJ95IeKJRQBjiaibBA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbfvkZMiaIfws9UugtNXlyia8vyqAonV8Sklb0mQbC4J9CQiczku0C4J6iaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbWggJ6dgbEz2EEArREcZSqwcgPsyJdoIfsWOBHsY1BV3R6g2qUMOgfA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbNL0dMSR35NopWk9unBBQoe0oCCmfOHdBW6tOCsXjvx167cabMHjWUg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbZVcppL363kbhXRAKLtIBW9UzMeSOW3IVBOiagic3kicvFwibyIoHPxJOTA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbjpic36ACCDamHVgVLf56JfLyTicARQSNib5jy6Ypq9cI7ia29QJaacEL7w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbhBoE5u5LRne134UiaR5cBibB7CibNibDo8M2Jbl6D2VEOolUBibWaPgHgRQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbUibMXlPTVXL8G1GnrzITvBB76cyZxUMBLdkcLh2ia5SlJOOBKiavJSxyg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbjT4pPI9y2IFDfkKhMT2TEFz2x3ibwxbFniaZTmEIaN639YtlKv0xxOEQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbrEUeIOSpsFSUghO4ZGGh3QicJk1ibeLWGbT5lgTLzH7jeWHFdbQNnrZA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbtxzVWNj3ErH2UZkswYYLW1sWa6vUV7QsVeL5AlzhVabDGgqJ93OoMg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbzm1iaECkVu6o2fBmS9nrdia9AfjNFWtOG3rR4ia9EZxNEDt3oECxX3ibbg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbnXugPSO826t5rdB9Y7dGpUO9bApvWAmgDNNMc6eadoLJicl9lK70KqA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbAGS0Dph0jPVaBu6ZNoibdtzxLC0grtMNW4lP8uXxJhtxWs1sQ5E9Phg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrb6PbcyfRrDh38RMyVT8uy1ZcHfyAtwD00yiajVO8wxD1kQOdiaFJdiccibA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbCEGkRjk8GfuzVkhKwWZTIGwib2FawGOLRltVnA14icKP663icSPfibC0og/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

文章来源链接：https://mp.weixin.qq.com/s/1Qx6NEt3gZU7c96OoLnBiw

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源面包板社区。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。