# DDR 的 PCB布局及走线要求

原创 硬件笔记本 2024-01-31 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/pmXuEKRul0k7RrtnDa8lpQ](https://mp.weixin.qq.com/s/pmXuEKRul0k7RrtnDa8lpQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

**1\. 定义**

DDR：Double Date Rate 双倍速率同步动态随机存储器。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyZQEk7wBvYDE53qJVkvyKVibabg1F4eUTK11jnDichgywd1LoIbMHbLfw/640?wx_fmt=png)

  

  

  

DDR、DDR2、DDR3常用规格：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyEXSf0FLUVAUWCwt7baWODhXFPEVPZjwiajfibQkjNyAVcpyY7lsVbG4g/640?wx_fmt=png)

  

  

**2\. 阻抗控制要求**

单端走线控制 50 欧姆，差分走线控制 100 欧姆

  

  

**3\. DDR 布局要求**

通常，根据器件的摆放方式不同而选择相应的拓扑结构。

  

A、DDR\*1 片，一般采用点对点的布局方式，靠近主控，相对飞线 Bank 对称。间距可以按照是实际要求进行调整，推荐间距为 500-800mil。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyyL1a8JUR3jNcnwjiaXpbDVoetOFc7nZ8AibFOD4HJUbl1TqcxSTQZ71w/640?wx_fmt=png)

  

  

B、DDR\*2 片，布局相对主控飞线 Bank 对称，常采用 T 型拓扑结构， 推荐间距如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyRELZfkibUGzenOaKI1Cuyt48nH1CPuQdWd7gHaxEdKfSf9yRxXE3FSg/640?wx_fmt=png)

  

等长要求 L1+L2=L1+L3

  

  

C、DDR\*4 片，以下列出了常用的 4 片 DDR 布局拓扑结构。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyaH2pXXvFeibwQKRicopiaLnYDOTCXEAFdhHgyVzzgjP1FSrppMWHiayB0g/640?wx_fmt=png)

  

针对于 DDR2，这些拓扑结构都是能适用的，只是有少许的差别。

  

  

若PCB布线空间允许，Address/Command、Control、CLK，应优先采用单纯的“T”型拓扑结构，并尽可能缩短分支线长度，如上面拓扑结构的B图所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86Iy63CNbBPtR8b7LcrPv9jQGkRNTXWSkpaRvsDg60z9uswKLJu35oKWWA/640?wx_fmt=png)

  

等长要求 L1+L2+L6=L1+L2+L7=L1+L3+L4=L1+L3+L5

  

  

然而，菊花链式拓扑结构被证明在 SI 方面是具有优势的。对于 DDR3 的设计， 特别是在 1600 Mbps 时，则一般采用 D 所示菊花链拓扑结构进行设计。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyIMicjJSK8v6QgzeSgMFJKhGESx41ias6ektgC1nnvgvM2IcZLWRDhTRg/640?wx_fmt=png)

  

  

  

PCB 布线空间有限的，可以采用“T”型拓扑和菊莲拓扑混合的结构，如下图所示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyPKZCjpics4iaasvx3pXToYZc0en8ZlnwYuscxD4IUic2Lu57oHZpRIlsA/640?wx_fmt=png)

  

混合拓扑结构中“T”型拓扑的要求与两片DDR2/3 相同。

  

等长要求 L1+L3+L2=L1+L4+L5

  

  

**4\. 信号分组以及走线要求****（以下以4片DDR3设计进行说明）**

  

A、32条数据线（DATA0-DATA31）、4条DATAMASKS（DQM0-DQM3）, 4对DATASTROBES差分线（DQS0P/ DQS0M—DQS3P/DQS3M）

  

这36条线和4对差分线分为四组：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyAfNDkiauN17OqPbQp3JzImW1K8HicMuLWyuyBog0BZuL9ovEqcpMQovg/640?wx_fmt=png)

  

  

再将剩下的信号线分为三类：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86Iyb1bFQrxXOo8BKNFyh58mXtna4LRcvWFmErezl5FUdYPp0vm9TPpIuQ/640?wx_fmt=png)

  

Address/Command 、Control与CLK归为一组，因为它们都是以CLK的下降沿由DDR控制器输出，DDR颗粒由CLK 的上升沿锁存Address/Command、Control 总线上的状态，所以需要严格控制CLK 与Address/Command、Control 之间的时序关系，确保DDR颗粒能够获得足够的、最佳的建立/保持时间。

  

  

B、误差控制，差分对对内误差尽量控制在5mil以内；数据线组内误差尽量控制在+-25mil以内，组间误差尽量控制在+-50mil以内。

  

Address/Command 、Control全部参照时钟进行等长，误差尽量控制在+-100mil 以内。

  

  

C、数据线之间间距要满足3W原则，控制线、地址线必要时可稍微放宽到2W~3W， 其他走线离时钟线20mil或至少3W以上的间距，以减小信号传输的串扰问题。

  

  

D、VERF电容需靠近管脚放置，VREF走线尽量短，且与任何数据线分开，保证其不受干扰（特别注意相邻上下层的串扰），推荐走线宽度>=15mil。

  

  

E、DDR设计区域，这个区域请保障完整的参考平面，如下方图片所示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86Iy8QKhl08icZpdXjjNGbwsic0NJPesagdRMAJp7Bo3RPzbRZ4jOhWjeRzQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyCN7Bd4u946roI7B79oDF8ElQk0TIHaGNGZ5ibtMWU0ejRhxdL3ah0Mg/640?wx_fmt=png)

硬件工程师都在关注我们

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