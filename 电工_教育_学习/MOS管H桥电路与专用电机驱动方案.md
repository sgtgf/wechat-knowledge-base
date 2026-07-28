# MOS管H桥电路与专用电机驱动方案

原创 硬件笔记本 2024-04-03 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/vVP4shq2TWzZxMQCDc5Svw](https://mp.weixin.qq.com/s/vVP4shq2TWzZxMQCDc5Svw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

工程师，在设计电路项目时，第一要务，也是最终要务，是根据设计要求完成项目功能的开发；这些电路项目的功能虽因人而异，各不相同，但有一个似乎却是相同的，那就是项目的执行机构会涉及到电机。

-   空气净化器项目，它需要实现的功能是去除PM2.5颗粒，净化室内的空气。实现净化室内的空气功能，工程师依靠的是电机驱动的小风扇，使空气能够自由流动地循环；
    
-   碎纸机项目，它需要实现的功能是撕碎办公室弃用的纸张，以防公司机密外泄。实现撕碎弃用的纸张功能，工程师依靠的是电机驱动的旋转刀片，使进入碎纸机的纸张被撕碎；
    
-   智能电动玩具车，它需要实现的功能是通过控制遥控，轻易地可以操作玩具车的倒车、前进、转弯、刹车。实现玩具车的倒车、前进、转弯与刹车功能，工程师依靠的是电机驱动的车轮，使智能电动玩具车能听从遥控器的指挥；
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ld5f2uxmMnMQcHolscad67BKAo1XPVEicKw3bCEGL4Ip2wz2Rzv1NKQNrxfFlOIuicoIkHqDaOYhl2A/640?wx_fmt=jpeg&from=appmsg&wxfrom=13)

电路项目

这些电路项目的功能尽管千差万别，但有一个共同点，都包含电机的驱动。这是为什么呢？

电机，作为可以将电能转换成机械能的动力装置，它是一种媒介，是一种桥梁；犹如相亲认识的两个恋人一样，媒婆就是他们的月老，就是他们的丘比特；

**工程师在研发设计电路，本质上是借助基础的电子元器件与芯片，运用基尔霍夫电路定律，控制与分配电路中电压和电流的走向。**然而这仅仅是电路的设计，也仅仅是项目设计的一部分，并不能代表项目的全部。

完整的项目，既包含电子电路部分，也同时包含机械结构部分。这就是存在电子工程师与结构工程师的原因，二者互辅互成，缺一不可。

工程师现在是不是知道了原因，为什么电路项目的功能尽管千差万别，但都会有一个共同的执行机构---电机。因为电机是可以将电能转换成机械能的动力装置，是项目电路部分与机械部分之间联系的纽带，电路就是通过电机去实现控制机械。

同样，机械也可以通过电机去实现控制电路，比如发电机。

之所以讲述这些内容，是想带领工程师从**项目的研发本质**上去重新认识电机的重要性。

电机在项目研发中如此重要，那在电路的设计上如何有效地控制电机就变得举足轻重，自然呈现不言而喻。工程师在具体的电路方案开发过程中，该怎么去做呢？该怎么去执行呢？

> 芯片哥一向喜欢从问题的本质出发，去分析解决，找到原因，摸索出答案。在回答“如何在电路方案中控制电机”的问题之前，工程师需要对电机做个清楚的认识与了解。  

电机，按照电流的属性，可分为交流电机与直流电机两大类。以直流电机为例，阐述说明如何在电路方案中控制电机。

直流有刷电机、直流无刷电机与步进电机等这些都属于直流电机范畴

直流电机，包含两个电源接线端子，称之为电机的正极与负极。在电机的两个接线端子处，分别接通电源的正极与负极，电机则因为形成电流回路而开始工作转动。电机的转速n =(U - Ia\*Ra)/Ceφ，通过改变电压U的幅值，实现调速的目的，这就是直流电机简要的电路工作原理，言简意赅。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ld5f2uxmMnMQcHolscad67BQNJn8IwPMzz9Ne2bW4z21Bj7G8pRXUr7Gobhs7vxL5BBvibVCT1ysaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

直流电机

了解完直流电机的电路工作原理后，**工程师在项目方案设计中经常会选用，4个MOS管构建的H桥电路和专用的电机驱动芯片这两种方案。**

  

**方案一：MOS管H桥电路方案**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ld5f2uxmMnMQcHolscad67BkKgC3CBGJG70ceErd4PRGAucYS5LxaYdoshCREZabVl5J5ibnhXyzMw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

MOS管H桥电路图

所谓MOS管H桥电路，是指使用4个N型MOS管（也可以使用2个N型MOS管与2个P型MOS管），设计一个字母H形状的电路，4个MOS管的中间连接电机；

4个MOS管中，Q1与Q2两个MOS管的漏极连接电源的VCC，Q3与Q4两个MOS管的源极连接电源的GND，Q1、Q2和Q3、Q4这四个MOS管的栅极连接外部的PWM1信号、PWM2信号和PWM3信号、PWM4信号；

PWM1控制Q1 MOS管导通和PWM4控制Q4 MOS管导通，与此同时PWM2控制Q2 MOS管关闭和PWM3控制Q3 MOS管关闭，电机的两个接线端子电源极性为左正右负，电机正转；

PWM2控制Q2 MOS管接通和PWM3控制Q3 MOS管接通，与此同时PWM1控制Q1 MOS管关闭和PWM4控制Q4 MOS管关闭，电机的两个接线端子电源极性为右正左负，电机反转；

需要说明的是，MOS管的栅极控制信号PWM可能并不是直接来自单片机的输出，有可能是来自外围的Gate Driver栅极驱动芯片。

  

**方案2：专用电机驱动芯片方案**

芯片按照功能一般可以细分为专用集成芯片与通用集成芯片。

专用集成芯片，是指具有某一特定专用功能的芯片，如74系列逻辑芯片，只能专用于处理信号的逻辑运算；

通用集成芯片，是指芯片的功能不单一，没有被固定，具有多样化，最典型的案例如单片机，工程师可以利用单片机开发出千奇百怪的各种功能；

电机驱动芯片，就属于专用集成芯片。芯片与半导体设计公司依据工程师用户的设计需求反馈，专门针对电机驱动的电路应用领域而开发设计的芯片，功能具有专一性，只面向电机驱动的方案设计。以L9110S电机驱动芯片为例说明

L9110S电机驱动芯片引脚定义

-   Pin 1引脚OA：电机驱动输出功能引脚A；
    
-   Pin 2 & Pin 3引脚VCC：芯片的工作电源功能引脚；
    
-   Pin 4引脚OB：电机驱动输出功能引脚B；
    
-   Pin 5 & Pin 8引脚GND：芯片的参考地线功能引脚；
    
-   Pin 6引脚IA：电机控制信号输入功能引脚A；
    
-   Pin 7引脚IB：电机控制信号输入功能引脚B；
    

具体的应用电路图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ld5f2uxmMnMQcHolscad67B1QKg8jyB7szeXSkcXzkFHVAAAwU99FUcQQ6enBI23UHJQZpHicCDTqg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

专用电机驱动芯片电路图

L9110S电机驱动芯片的应用电路图，较为简洁；芯片的Pin 1引脚OA与Pin 4引脚OB直接连接电机的两个接线端子，芯片的Pin 6引脚IA与Pin 7引脚IB直接连接到外部输入的PWM波信号，芯片的VCC与GND只需要连接到电源即可（滤波电容省略了）。

输入电机驱动芯片的PWM信号是直接来自于单片机，无需其他功能芯片；

至此，工程师可能会追问，同样为电机驱动的电路设计方案，MOS管的H桥电路方案与专用电机驱动芯片的方案，两者都能实现电机驱动的功能，那它们的区别在哪呢？在实际项目开发中它们的差异性在哪呢？它们的不同点是什么呢？

**它们的区别在于三点**

1.  电路功率
    
2.  设计难度
    
3.  稳定可靠
    
      
    

# **01区别：电路功率**

电路功率是等于电压乘以电流，即P = U \* I。

MOS管的H桥电路方案，电机驱动的最大工作电压与最大工作电流取决于工程师采用MOS管的最大工作电压值与最大工作电流值.

MOS管的工作电压范围覆盖面广，可以从低至20~30V，中至80~120V，一直高至1000V等等；同样地，MOS管的工作电流范围也覆盖面广，可以从最小的1A一直到200A等等；

专用电机驱动芯片方案，电机驱动的最大工作电压取决于芯片的供电电源。芯片的工作电源，工程师都很清楚，常用的电源电压等级包含3.3V、5.0V、12V、24V与36V；芯片的工作电流同样也较小，如0.6A、1A、2A与5A；

为什么MOS管的H桥电路方案承受的电路功率，要明显大于专用电机驱动芯片的方案呢？主要是因为专用电机驱动芯片属于集成式的半导体器件，散热能力较弱，驱动大电压大电流容易产生高温高热，造成芯片损坏。

显然，MOS管H桥电路方案的工作功率要优于专用电机驱动芯片方案，适用的项目类型更多更全。

  

# **02区别：设计难度**

设计难度，是指工程师完成电机驱动电路方案设计的难易度，存在电路研发难度和电路调试难度。

从MOS管H桥电路图和专用电机驱动电路图对比中发现：

专用电机驱动电路图相比较MOS管H桥电路图要简洁简单，表现在研发4个PWM信号的控制与处理要难于2个PWM信号的控制与处理；并且在电路调试方面，4个MOS管的参数选型测试要复杂于1个专用电机驱动芯片的参数测试。

显然，专用电机驱动芯片的电路设计难度要优于MOS管H桥电路方案，对工程师的研发能力水平要求相对较低。

# 03区别：稳定可靠

稳定可靠，是指电路的方案抗外界的干扰能力，抗干扰能力越强，电路的方案稳定可靠性就越好。

于工程师而言，作为常识，电路方案使用的电子元器件与芯片数量越少，集成度越高，方案出现的故障问题就会越少，稳定可靠性就会越高；反之，电路方案使用的电子元器件与芯片数量越多，种类越繁琐，方案出现的故障问题就会越多，稳定可靠性就会越低。

MOS管H桥电路方案使用了至少4个电子元器件，专用电机驱动芯片方案只使用了1个芯片。

显然，专用电机驱动方案稳定可靠性要高于MOS管H桥电路方案，更适合恶劣的项目环境。

  

# **文末总结**

对于MOS管H桥电路方案与专用电机驱动芯片方案，它们的区别不仅包含电路功率、设计难度与可靠稳定这三点，还包含BOM元器件费用。由于每个项目的电路要求参差不齐，使用的具体MOS管型号或者专用电机驱动芯片型号均不确定，尤其是外围电路的元器件不能确定，故而没有加入BOM元器件费用这个因素的讨论。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ld5f2uxmMnMQcHolscad67BsibZ50cQHCDLJUA0cI9KGw5ns8BCib8B8wzrnRTicktofGS3xFmMpZ8Rg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

电机驱动的外围电路

**最后综合**电路功率、设计难度与稳定可靠三个因素比较，在大功率的电机驱动项目，工程师优先考虑采用MOS管H桥电路方案；在工程师电路研发设计能力与电路调试经验不足时，优先考虑采用设计难度较低的专用电机驱动芯片方案；在恶劣的使用环境中的电机驱动项目，工程师优先考虑采用稳定可靠性更高的专用电机驱动芯片方案。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本文来源头条芯片哥。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。