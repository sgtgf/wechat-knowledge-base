# 八层板PCB设计，电脑主板设计分析

原创 硬件笔记本 2023-08-14 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/3R2OvBl9oADqi9SwqGzBbg](https://mp.weixin.qq.com/s/3R2OvBl9oADqi9SwqGzBbg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qZmpDNgVHJaCEnNiaWI8tZbOiatr09jpAP6JK7IxXLjtD2SO53icZEUJicg/640?wx_fmt=png&wxfrom=13&tp=wxpic)来源于网络的前辈PCB作品

  

学好PCB设计的方法之一就是通过前辈的作品学习前辈的设计方法和技巧。

我们能在前辈的作品中学到元件布局、板层设置、线路布线。

  

# 板层置

**1\. 信号层（TOP）**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qibkJTPdYxhY2twpibgWgHnS1HQZYbwOQX4ZWD83b4wX5n8k1c3ia0rjEQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

第一层信号层，又叫顶层，实物打板回来是能够看得见的一层，可以摆放电子元件的一层。由上图可见这层布线比较多。原因之一就是电子元件的摆放在同一层，走线的过程中不需要设置过孔转换层。这样可以避免过孔阻碍其它层的走线。在多层板布线反而要注意过孔的设置。

  

**2\. 电源层（VCC）**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qlXxYRISvGiaia7mmB8zMWpo7A65tFgKZTBbibpBrYCyyUgibj2UuGQiawjw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在这层没有看到走线。是因为这一层都是电源网络。在设计时使用特定的线进行电源分割，前提需要在电子元件布局的时候把同一电压的电子元件摆放在一个区域内，通过过孔连接到这一层的相同区域，所以不需要走线。

  

**3\. 信号层（Inner Layer3）**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qSicmTLRKyxqoGwUKuCf5xUQSMjVa8TaKtZS9GXKTPtp7VlS0tBGsfnA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这层主要走信号线，其次还有一些电源走线。下图图中比较大一点的走线就是电源线，小的为信号线。

  

**4\. 信号层（Inner Layer4）**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qgL0ronuhLicA72TRS4zhkUozyT7CUULVtkQnnqFehQuxBUd2FHPe1Nw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这层与上一层走线布置基本上一样。走线为信号线和电源线。

  

**5\. GND层**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qw3MQrx6toZQlKyJiaQG439vfddT7fNAOhpu3HoM2qdxQGrLGlhCUsZw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这层为GND网络层，通过过孔连接。  

  

**6\. 信号层（Inner Layer5）**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qibI0hDSFXIWt23MCibetvQ3TwUHPNEWY49d8aa9Xn8mNDibvoEOj9MAEg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**7\. GND层**

图片略。

这层与第5层一样。

  

**8\. Bottom层**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8q2YSGs2RZvBau4tQh7FahQRuyOBjcK9N8c58HHoPQec1Ldv1aKSOiavw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这层跟顶层一样。很多的小芯片走线基本上都在顶层或者这一层。  

  

# 走线或者布线

**1\. 蛇形走线**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qpCx3XicVtQWKg2NsFKLvbu6KNMA3CGJO03oT6DXFBmIpspjdIzXU5xA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qEtTsgY9XUobX5FehIjdyAicFWNIE9zaCntSKcANfsMicbzfOQZe0YpxA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这种走线看起来感觉挺漂亮的。这样走线的目的是为了延长走线的总长度。应用在并行数据线中，使同一组并行数据线的走线长度一致，这样在高速传输数据的时候数据到达的时间保持一致。

蛇形走线的布线步骤是先使用普通的走线布线完同一组并行数据线。然后找出这一组数据线长度最长的线，再以这跟最长的线的长度为参考把比这个参考值小的线通过蛇形走线延长到与参考值相等或者到达这个参考值的一定范围之内。相关走线布线功能一般的电路板设计软件都有只需要设置相关参数就可以。

  

**2\. 差分线**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8q9Bb9ic5mm4ib1Q9icWXUYCbc7rGFpUsL7DeUlNP3kN1THZl3zzdeA530w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

差分线其实跟上面的蛇形非常相似，上面的蛇形走线是一组数据线。而差分线只有两根线。但是比蛇形走线的要求更高，更严格。不但要线的长度一致，还需要线与线的距离保持一定的距离。还好相关的软件都有这种走线的功能，也只需要设置相关的参数即可。

  

**3\. 大走线或者宽走线**

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8q7NhDsfWut30To1Lg4KvQyxKFr0VnIXaFm6Qiahb70W0qU3bhYeTOR1Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在布线中比较大的线一般为电源走线，这跟元件负载有关，相关理论就不在这细说了。

  

元件布局

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qypM0alyjSn96ZoN9f8CuuFibiculib5COITDS2s6jIScbuiaDfb9ricnGKA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qQn8ezjdeoq1LYv3kfx6zSgXHPibswe5CKTKowofjibM9Ru0FOfyiaRcvw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2ibmcljDoyWQlbicW0gcYfOomhSpyCWW8qU6nqWRtFteYjcOCoEyfwa0RMb7ia5s5wnVG5xPlkZXzSibLVmRK9Klug/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

以上就是前辈作品中的元件布局，是不是很好看。元件布局基本上都是按照模块化的设计方式进行布局，这样布局的好处就是把实现同一功能的相关电子元件布局在一起使得小模块内的走线长度可以更短，小模块放置在大模块的时候方便框选完整的模块。在布线的时候不要走太多的弯路。

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群