# 怎样的 PCB 才能承受住100A电流？

原创 硬件笔记本 2024-04-26 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/noQ5JGRjHwtiVPN3NpCbkw](https://mp.weixin.qq.com/s/noQ5JGRjHwtiVPN3NpCbkw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

通常的PCB设计电流都不会超过10 A，甚至5 A。尤其是在家用、消费级电子中，通常PCB上持续的工作电流不会超过2 A。但是最近要给公司的产品设计动力走线，持续电流能达到80 A左右，考虑瞬时电流以及为整个系统留下余量，动力走线的持续电流应该能够承受100 A以上。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaSlIlmyHdBmugdQicOPXIuZKHW4BJdYuXWlORDmPfncCCv8HlAj3FBy099cmM8mmhJXcQUWq7bY8w/640?wx_fmt=png&from=appmsg)

    **那么问题就来了，怎么样的PCB才能承受住100 A的电流？**

  

  

**方法一：PCB上走线**

要弄清楚PCB的过流能力，我们首先从PCB结构下手。以双层PCB为例，这种电路板通常是三层式结构：铜皮、板材、铜皮。铜皮也就是PCB中电流、信号要通过的路径。根据中学物理知识可以知道一个物体的电阻与材料、横截面积、长度有关。由于我们的电流是在铜皮上走，所以电阻率是固定的。横截面积可以看作铜皮的厚度，也就是PCB加工选项中的铜厚。通常铜厚以OZ来表示，1 OZ的铜厚换算过来就是35 um，2 OZ是70 um，依此类推。那么可以很轻易地得出结论：在PCB上要通过大电流时，布线就要又短又粗，同时PCB的铜厚越厚越好。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaSlIlmyHdBmugdQicOPXIuZlQ6KYAXwvXQRlFhh16ltXK0OXd8OHuO9snog5EK0ibqFZ8lVhUppeVQ/640?wx_fmt=png&from=appmsg)

   实际在工程上，对于布线的长度没有一个严格的标准。工程上通常会用：**铜厚/温升/线径**，这三个指标来衡量PCB板的载流能力。

  

以下两个表可以参考：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaSlIlmyHdBmugdQicOPXIuZlMzSxSvqXibpQiaInMOgicjnXEzdb6eK4jicupAYxKmxqGQ4qJSsg6oBGA/640?wx_fmt=png&from=appmsg)

从表中可以大约知道1 OZ铜厚的电路板，在10°温升时，100 mil (2.5 mm) 宽度的导线能够通过4.5 A的电流。并且随着宽度的增加，PCB载流能力并不是严格按照线性增加，而是增加幅度慢慢减小，这也是和实际工程里的情况一致。如果提高温升，导线的载流能力也能够得到提高。

  通过这两个表，能得到的PCB布线经验是：增加铜厚、加宽线径、提高PCB散热能够增强PCB的载流能力。

那么如果我要走100 A的电流，我可以选择4 OZ的铜厚，走线宽度设置为15 mm，双面走线，并且增加散热装置，降低PCB的温升，提高稳定性。

  

  

**方法二：接线柱**

  

除了在PCB上走线之外，还可以采用接线柱的方式走线。

在PCB上或产品外壳上固定几个能够耐受100 A的接线柱如：表贴螺母、PCB接线端子、铜柱等。然后采用铜鼻子等接线端子将能承受100 A的导线接到接线柱上。这样大电流就可以通过导线来走。

  

**方法三：定做铜排**

  

甚至，还可以定做铜排。使用铜排来走大电流是工业上常见的做法，例如变压器，服务器机柜等应用都是用铜排来走大电流。

附铜排载流能力表：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaSlIlmyHdBmugdQicOPXIuZeU5R1t8ECf6QyWPhBXMVwLqRhc3MXW1H6RsDHcfKaaFI9iaMkpiaRwEg/640?wx_fmt=png&from=appmsg)

  

**方法四：特殊工艺**

  

另外还有一些比较特殊的PCB工艺，国内不一定能找得到加工的厂家。英飞凌就有一种PCB，采用3 层铜层设计，顶层和底层是信号布线层，中间层是厚度为1.5 mm的铜层，专门用于布置电源，这种PCB可以轻易做到小体积过流100 A以上。

硬件工程师及从业者都在关注我们

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
    

后台回复“加群”，管理员拉你加入同行技术交流群。