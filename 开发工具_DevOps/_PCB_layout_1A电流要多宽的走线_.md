# ​PCB layout 1A电流要多宽的走线？

原创 硬件笔记本 2023-12-09 09:35 四川

> 原文地址: [https://mp.weixin.qq.com/s/\_iqe-C2ilVvv-ZSE8Xcp9w](https://mp.weixin.qq.com/s/_iqe-C2ilVvv-ZSE8Xcp9w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

回前两天画了一个功率板子，但是由于走线的线径太细，因此在上电的一瞬间一根电线被立即烧断。为了解决这个问题，我们最后只能通过外部飞线的方式来替换烧断的电线。

以前公司使用的PCB板通常都是6层、8层和10层，组件排列而且紧密，空间非常紧张。因此为了能够布下较粗的线，我们通常通过不断地压缩空间来布线。但是，有时候空间实在不够，在布局的限制下，我们只能根据需要适当减小走线的宽度，来满足布完线。

根据以往经验，我们得出在一般情况下1安培的电流基本需要使用1毫米宽的导线就可以满足。那么，根据这个经验我们是否可以推断出，10安培的电流它就需要使用10毫米宽的导线来满足呢？

在PCB板空间充足的情况下，确实可以按照这个比例来设计导线宽度。然而，在多层PCB中，当空间有限时，10毫米的导线宽度可能无法实现。这是因为多层PCB的内部走线空间通常非常有限，而导线宽度会增加占用面积，可能导致无法容纳较粗的导线。

因此，在大电流情况下，需要综合考虑电流负载、导线截面积、散热需求和空间限制等多个因素来选择合适的导线宽度。这需要具备一定的电子和电气知识以及实践经验才能做出最佳的设计决策。

**基础知识**

基础知识，PCB电路板的铜箔厚度它是以盎司（OZ）为单位来进行测量的。1OZ厚的铜箔它指的是每平方英尺（FT2）的面积上均匀地铺设重量为1盎司的铜箔，这个铜箔厚度是35微米（um）或者0.035毫米（mm）。

通常，PCB电路板的铜箔厚度有三个规格选择，分别是0.5盎司、1盎司和2盎司。这些规格的铜箔主要是应用在消费类产品和通讯类的电子产品中。3OZ的铜箔就非常的少见，主要是用于需要承受非常大的电流、非常高的高压的电源产品中。

因此常用的多层PCB电路板中，它的表层铜箔的厚度基本都是1盎司，而内层铜箔的厚度通常为0.5盎司。具体的细节情况我们可以去向PCB制作厂家详细咨询。

**PCB走线宽度计算**

PCB板的电流承载能力主要有三个方面原因，分别是走线宽度、线厚（铜箔的厚度）以及温升高度。线宽越大，电流的承载能力就越强。

  

![](https://mmbiz.qpic.cn/mmbiz_png/nwECQvbNjGYURM22U6ALJ34D3lfWREm7O0C0bgdUf4Veb5VyUYBCic6tXvpSn672Hy1W0PmVL0zpoXCuPUypJDw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

PCB制作的标准IPC-2221规定了一种计算线宽的方式，即通过将一些参数代入公式进行计算，得出所需线宽。

![](https://mmbiz.qpic.cn/mmbiz_png/nwECQvbNjGYURM22U6ALJ34D3lfWREm74icN1T3p4CegswkwHArzFwXMPMaiae6qnMhZfFN5WC13RZSTCzSibTqWw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

在IPC-2221标准里面，PCB线宽的计算公式中的参数包括：以下几个

第一点I是走线允许通过的最大的电流，它的单位为安培（A）。

第二点0.024和0.048是修正系数，通常是用K表示。对于内层走线，K=0.024；对于表层走线，K=0.048。

第三点dT是最大温升数据，单位是摄氏度（℃）。常见的最大温升数值有10还有20。

第四点A是PCB走线的截面积，等于铜的厚度乘以线宽的值，它的单位为平方密耳（mil^2）。

通过将这些参数带入，我们可以计算出对应的电流所需的走线宽度。但是计算过程非常的复杂，所以我们推荐使用网上的计算工具去计算或执行IPC-2221标准规范的软件算法去计算。

**设计助手计算**

我们在网上找到几个不同的工具去计算走线的宽度，最后发现它们得出的结果基本是一样的，其中的两个工具计算出的结果是完全相同的。

给定的条件下（载流为10A，最大温升为10℃，环境温度为25℃，铜厚为1盎司，走线长度为10mm），通过这三个工具计算来得出的内层PCB走线的宽度约为18.71mm，表层PCB走线的宽度约为7.19mm。我们自己最后也使用IPC-2221的公式进行计算了一次，得出结果与工具得出的结果是一致的。

![](https://mmbiz.qpic.cn/mmbiz_png/nwECQvbNjGYURM22U6ALJ34D3lfWREm7ViapHpI6EdvzhZeG0UcRiakOx8VBT4PicCg5dUSzPPoM7Y7YAFib1PQsQg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/nwECQvbNjGYURM22U6ALJ34D3lfWREm7dHGUwwHCDvZeuyxZzE2Cia0hBsI3qEonduFF3K7bKrBycpkzk2zSP0w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/nwECQvbNjGYURM22U6ALJ34D3lfWREm7XOvaDsH3tHu29RvTfiaefZKjYhWeGs5gLKXjibmaJcZcdft0qHrnBu1A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这里我们需要注意的是，即使这些工具的计算结果非常相近，但是在实际应用中我们还需要考虑到其他很多因素的影响，比如PCB板子材质、绝缘层的厚度、PCB走线间距等一些因素。所以，在实际制作中我们需要综合考虑这些因素的影响，并且咨询专业的PCB生产厂家来确保最后制作出的PCB板符合我们的需求。

今天的分析先到这里，得出的基本结论就是1A电流需要1mm的线宽来满足。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源旺哥学电子。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。