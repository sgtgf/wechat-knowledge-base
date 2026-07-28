# 你必须知道的电源技巧：小小的疏忽就能毁掉EMI性能

原创 硬件笔记本 2024-03-14 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/I03-xk3CWP-MSTrFNuFeTQ](https://mp.weixin.qq.com/s/I03-xk3CWP-MSTrFNuFeTQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

在你的电源中很容易找到作为寄生元件的100fF电容器。你必须明白，只有处理好它们才能获得符合EMI标准的电源。  
  
从开关节点到输入引线的少量寄生电容（100毫微微法拉)会让您无法满足电磁干扰(EMI)需求。那100fF电容器是什么样子的呢？在Digi-Key中，这种电容器不多。即使有，它们也会因寄生问题而提供宽泛的容差。  
  
不过，在您的电源中很容易找到作为寄生元件的100fF电容器。只有处理好它们才能获得符合EMI标准的电源。  
  
图1是这些非计划中电容的一个实例。图中的右侧是一个垂直安装的FET，所带的开关节点与钳位电路延伸至了图片的顶部。输入连接从左侧进入，到达距漏极连接1cm以内的位置。这就是故障点，在这里FET的开关电压波形可以绕过EMI滤波器耦合至输入。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaX2myaxrY25vEMNDicDyDVYojy7r9O3WtyS30R9NJanj7ezA8N3XfRMX7d970ITdBkWmWpGqZjsEw/640?wx_fmt=png&from=appmsg)

图1. 开关节点与输入连接临近，会降低EMI性能

  
注意，漏极连接与输入引线之间有一些由输入电容器提供的屏蔽。该电容器的外壳连接至主接地，可为共模电流提供返回主接地的路径。如图2所示，这个微小的电容会导致电源EMI签名超出规范要求。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaX2myaxrY25vEMNDicDyDVYo2p1HeWqTebwLxyyMZXtH8GGyQxdhiaDJSGO5MFQbrHIaS7pKy1hfjg/640?wx_fmt=png&from=appmsg)

图2. 寄生漏极电容导致超出规范要求的EMI性能

  

这是一条令人关注的曲线，因为它反映出了几个问题：明显超出了规范要求的较低频率辐射、共模问题通常很明显的1MHz至2MHz组件，以及较高频率组件的衰减正弦(x)/x分布。  
  
需要采取措施让辐射不超出规范。我们利用通用电容公式将其降低了：

C = ε ˙ A/d  
我们无法改变电容率(ε)，而且面积(A)也已经是最小的了。不过，我们可以改变间距(d)。如图3所示，我们将组件与输入的距离延长了3倍。最后，我们采用较大接地层增加了屏蔽。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaX2myaxrY25vEMNDicDyDVYntok6oeSX6Mh3IP99yIocWSuiaOiag7wTOribMDIo91kkO7v9sJXlnmdw/640?wx_fmt=png&from=appmsg)

图3. 这个修改后的布局不仅可增加间距，而且还可带来屏蔽性能

  
图4是修改后的效果图。我们在故障点位置为EMI规范获得了大约6dB的裕量。此外，我们还显著减少了总体EMI签名。所有这些改善都仅仅是因为布局的调整，并未改变电路。如果您的电路具有高电压开关并使用了屏蔽距离，您需要非常小心地对其进行控制。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaX2myaxrY25vEMNDicDyDVY1GX7RtvicbTyUMLVicaFt6ELqOEzH98hV51ywGicwmJGzV3RNJQawHQBQ/640?wx_fmt=png&from=appmsg)

图4. EMI性能通过屏蔽及增加的间距得到了改善  

  

  
总之，来自离线开关电源开关节点的100fF电容会导致超出规范要求的EMI签名。这种电容量只需寄生元件便可轻松实现，例如对漏极连接进行路由，使其靠近输入引线。通常可通过改善间距或屏蔽来解决该问题。要想获得更大衰减，需要增加滤波或减缓电路波形。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。