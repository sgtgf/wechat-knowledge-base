# Buck电源芯片的开关频率为什么经常是400kHz或者2.2MHz？

原创 二火 硬件笔记本 2023-09-16 11:10 四川

> 原文地址: [https://mp.weixin.qq.com/s/7NgkQ2HnGRcgPXYV9hAsTw](https://mp.weixin.qq.com/s/7NgkQ2HnGRcgPXYV9hAsTw)

▼关注公众号：硬件笔记本▼

  

  

> 最近组里来了一个实习生，时不时地会问我几个问题。有的问题，不见得有多难，但还是挺有意思的，今天拎出来讨论一下。  

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

一道问题

  

  

  

照例，先抛出来一道问题：**Buck电源芯片的开关频率为什么经常是400kHz或者2.2MHz？**

  

这个问题，不晓得同学们有没有考虑过，我觉得有必要研究研究。当然分析这个问题的维度可能有多种，今天我们挑一个不一样的维度。  

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

开关频率-五花八门

  

  

  

随手捞起手头的一份规格书，还真是实习生说的那回事，Buck电源芯片的开关频率确实既有400kHz，也有2.2MHz，当然这里说的是一个大概范围，而不单纯是400kHz或2.2MHz频点。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPb3elethBuqibczicCWZw56rdTnQLoWfvwgxIbAaaIjU87BIom7pdoJicA/640?wx_fmt=png)

  

再多找几份规格书看看，发现不止是这两个，还有其他范围。  

  

TI的LMR16006的开关频率，在700kHz和2.1MHz左右。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPic3u1AzwkgaJcUGM2thQwQk9tkQSiaMGLRHBHQBVx3nfak7GPmpDxT4Q/640?wx_fmt=png)

  

Richtek的RT6363的开关频率，在105kHz、500kHz和2.45MHz左右。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPUFrUayZ1ekRickv9VwNedeRIbzKPwVyIKKOPmU894NHnb2uUuChYPUw/640?wx_fmt=png)

  

Silegry的SY8893的开关频率，在1.2MHz左右。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPW4b1AClpm8lwkRtnob8wVFHbmrJG4yYcHiaIqNzDGbNP4F4pMd4j2uQ/640?wx_fmt=png)

  

通过上述截图发现，开关频率好像没什么规律，从一两百kHz到几MHz，都有，范围跨度比较大。  

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

无线电频段和广播波段

  

  

  

有的同学可能会从**开关频率大小****、****效率高低、器件尺寸空间**的维度来看这个问题，今天我们换个视角，我们从**无线电频段的分布**角度来分析这个问题。  

  

根据无线电频谱的划分和命名，我们可以看到包括长波、中波、短波等在内的14个频段，每个频段对应一种波段名称及波长范围。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPj6jwkyVgHRaVD1yQxSI3QC3REqG9J6XwJdcL7R8HwYFZ7KRM1VSugw/640?wx_fmt=jpeg)

  

我们再看下广播和电视所占用的频段（下图为部分，未完全列出），AM调幅广播，FM调频广播还有TV等。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPxKnsniahvUzYNelAibeRibGIfrym9pQdphSkJj7ut6TOKa9RhJbjUzvibw/640?wx_fmt=png)

  

上图中的“LW”表示Long Wave，长波，处于无线电频谱中的低频（LF）带内。同理，“MW”表示Medium Wave，中波，处于中频（MF）带内。“SW”表示Short Wave，短波，处于高频（HF）带内。咱们所收听的AM调幅广播（Amplitude Modulation）就是处于这些个频段内。

  

上图中的“FM”表示Frequency Modulation，调频，米波，处于甚高频（VHF）带内。我们常说的调频FM广播就指的的这个频段。

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

CISPR25标准

  

  

  

CISPR25，无线电干扰特别委员会针对汽车及零部件制定的辐射骚扰测试标准。我们再看下CISPR25中对不同频段的限值要求（部分标准要求）。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPicsOWHyicwyLEBfgRhJmbQRTKOAaGTfjVibD83BjVqSS8oO3zjrtdC5hQ/640?wx_fmt=png)

  

**有没有发现CISPR25中前面这几段限制幅值正好对应的是广播（调幅或调频）频段，为什么？**  

  

因为对于这些个广播频段，收音机等接收设备在接收广播信号时是照单全收。如果电子设备对外界有发射这个频段内的干扰信号，收音机等接收设备会收到并播放出来。如果干扰信号过大，会使得有效信号被覆盖或干扰，影响正常接收效果。  

  

上面表格的展示可能还不够直观，我们不妨把CISPR25的Class5中限制要求用图表来表示，如下图所示。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eKGaTkPpfo7trYlKmKXsZlgKWpLshicqPNhiaFiaE88VqURKhL16RsKFPsUctUwJ2F8HOP4z6LkoL8oN9xWqS7nYQ/640?wx_fmt=png)

（图片来自TI E2E论坛）  

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

见缝插针

  

  

  

前面说了这么多，不知道你有没有发现一个现象：文章开头说的Buck电源芯片常用的开关频率400kHz、2.2MHz正好绕开了LW、AM和FM等频段，如下图所示，真可谓是“见缝插针”！  

  

![](https://mmbiz.qpic.cn/mmbiz_png/eKGaTkPpfo5viaMMvPIzBI4q9XYMplwfJqGMcqPBdGLXg26PVgwg2cQedRoYVQnAh3x4wWD9jOrfNpnrVwxqpUQ/640?wx_fmt=png)

（图片来自TDK官网）

  

比如400kHz，如上图**黄色**区域，**正好位于LW和AM中间的缝隙频段**。而2.2MHz，如上图**红色**区域**，又巧妙地避开了AM频段，位于AM和SW之**间。

  

![](https://mmbiz.qpic.cn/mmbiz_svg/ofvnGicEPbfSAREPVibEia2cobtJkaRmwn2vC7WxqVa7iaUpgRUJ7cQuw9q1ahbIRsDaMz7VtB8icC1ec3funvK9mokEBibNOdrvLL/640?wx_fmt=svg)

总  结

  

  

  

今天先聊到这里，讨论的内容比较基础，但是很有启发性。梳理下今天讨论的内容：

  

①了解无线电频段的分布；

②了解CISPR25标准在广播频段限制幅度的意义；

③从无电线频段分布的维度真正理解开关频率的选择。

  

硬件工程师都在关注我们

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