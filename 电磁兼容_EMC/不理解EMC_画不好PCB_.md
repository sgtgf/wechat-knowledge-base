# 不理解EMC，画不好PCB！

原创 硬件笔记本 2024-01-29 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/nRruaKP1XGRT6yL9BP97xw](https://mp.weixin.qq.com/s/nRruaKP1XGRT6yL9BP97xw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

  

除了元器件的选择和电路设计之外，良好的印制电路板（PCB）设计在电磁兼容性中也是一个非常重要的因素。PCB EMC设计的关键，是尽可能减小回流面积，让回流路径按照设计的方向流动。最常见返回电流问题来自于参考平面的裂缝、变换参考平面层、以及流经连接器的信号。跨接电容器或是去耦合电容器可能可以解决一些问题，但是必须要考虑到电容器、过孔、焊盘以及布线的总体阻抗。

  

本文将从PCB的分层策略、布局技巧和布线规则三个方面，介绍EMC的PCB设计技术。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iapXlcghssnWFBZyyr4WGB08YN7gkJ8JlDuWKdehpGSHDuCZJXDEqhkcHZzWbTYHlmR3KnCQHgWcniadH9lhichyQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

**PCB分层策略**

  

电路板设计中厚度、过孔制程和电路板的层数不是解决问题的关键，优良的分层堆叠是保证电源汇流排的旁路和去耦、使电源层或接地层上的瞬态电压最小并将信号和电源的电磁场屏蔽起来的关键。从信号走线来看，好的分层策略应该是把所有的信号走线放在一层或若干层，这些层紧挨着电源层或接地层。对于电源，好的分层策略应该是电源层与接地层相邻，且电源层与接地层的距离尽可能小，这就是我们所讲的“分层”策略。下面我们将具体谈谈优良的PCB分层策略。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iapXlcghssnWFBZyyr4WGB08YN7gkJ8JlUFyeOLhPICDzL0USav5FiaHWBlKzrzO9OZoV2ZiaDGl9R3X9UWy6OP9Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

1．布线层的投影平面应该在其回流平面层区域内。布线层如果不在其回流平面层地投影区域内，在布线时将会有信号线在投影区域外，导致“边缘辐射”问题，并且还会导致信号回路面积地增大，导致差模辐射增大。

2．尽量避免布线层相邻的设置。因为相邻布线层上的平行信号走线会导致信号串扰，所以如果无法避免布线层相邻，应该适当拉大两布线层之间的层间距，缩小布线层与其信号回路之间的层间距。

3．相邻平面层应避免其投影平面重叠。因为投影重叠时，层与层之间的耦合电容会导致各层之间的噪声互相耦合。

  

**多层板设计**

  

时钟频率超过5MHz，或信号上升时间小于5ns时，为了使信号回路面积能够得到很好的控制，一般需要使用多层板设计。在设计多层板时应注意如下几点原则：

1．关键布线层（时钟线、总线、接口信号线、射频线、复位信号线、片选信号线以及各种控制信号线等所在层）应与完整地平面相邻，优选两地平面之间，如图1所示。关键信号线一般都是强辐射或极其敏感的信号线，靠近地平面布线能够使其信号回路面积减小，减小其辐射强度或提高抗干扰能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utsLiaG9bK2awQw0YVaOOQKnWjL0phTEkYu7of6TWEDyHPfbSvGJk40Bw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

图1 关键布线层在两地平面之间

2．电源平面应相对于其相邻地平面内缩（建议值5H～20H）。电源平面相对于其回流地平面内缩可以有效抑制“边缘辐射”问题，如图2所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6ute8lcAcFll7aU0wfguTevLmwwKWZtNStcOSceH2hyQrQ0RPAA5mE4pg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

图2电源平面应相对于其相邻地平面内缩

此外，单板主工作电源平面（使用最广泛的电源平面）应与其地平面紧邻，以有效地减小电源电流的回路面积，如图3所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6ut8U5PbJTNPUsvgUdTGkZR0GqdRPzeuZDp11uvv1pz5U8NMCer0X5nOw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

图3 电源平面应与其地平面紧邻

3．单板TOP、BOTTOM层是否无≥50MHz的信号线。如有，最好将高频信号走在两个平面层之间，以抑制其对空间的辐射。

  

**单层板和双层板设计**

  

对于单层板和双层板的设计，主要应注意关键信号线和电源线的设计。电源走线附近必须有地线与其紧邻、平行走线，以减小电源电流回路面积。

单层板的关键信号线两侧应该布“Guide Ground Line”，如图4所示。双层板的关键信号线地投影平面上应有大面积铺地，或者同单层板地处理办法，设计“Guide Ground Line”，如图5所示。关键信号线两侧地“保卫地线”一方面可以减小信号回路面积，另外，还可以防止信号线与其他信号线之间地串扰。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6uticB37j0PMJ93EMxv6Woiap6vibVUVicNKugicia1UBQgkpDfxSTNr3Bd1fxQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

图4单层板的关键信号线两侧布“Guide Ground Line”

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utTTmiaQ7azbbicWhbl6Q9l4wr3QpVQ7KKlUXTowDiczzZBtbBBLMCukEyg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图5 双层板的关键信号线地投影平面上大面积铺地

总的来说，PCB板的分层可以依据下表来设计。

  

**PCB布局技巧**

  

PCB布局设计时，应充分遵守沿信号流向直线放置的设计原则，尽量避免来回环绕，如图6所示。这样可以避免信号直接耦合，影响信号质量。此外，为了防止电路之间、电子元器件之间的互相干扰和耦合，电路的放置和元器件的布局应遵从如下原则：  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utYKjfVWricrHEDZibk14iaeyFprcibXsfUVEv1zbq4eklSqdhSHgAtltw7A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图6 电路模块沿信号流向直线放置

1．单板上如果设计了接口“干净地”，则滤波、隔离器件应放置在“干净地”和工作地之间的隔离带上。这样可以避免滤波或隔离器件通过平面层互相耦合，削弱效果。此外，“干净地”上，除了滤波和防护器件之外，不能放置任何其他器件。

2．多种模块电路在同一PCB上放置时，数字电路与模拟电路、高速与低速电路应分开布局，以避免数字电路、模拟电路、高速电路以及低速电路之间的互相干扰。另外，当线路板上同时存在高、中、低速电路时，为了避免高频电路噪声通过接口向外辐射，应该遵从图7中的布局原则。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6ut8OpUUI4MuVxWfibXaNdcOEEdssbM17rC2TuZrBTq1TGEsQkwKFEOvicg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图7 高、中、低速电路布局原则

3．线路板电源输入口的滤波电路应应靠近接口放置，避免已经经过了滤波的线路被再次耦合。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utqPI7pNX4V4sLZ2No2Ws28a82QNZUyqHIZPXrqPJdXEr9xS8yH9kNdQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图8 电源输入口的滤波电路应应靠近接口放置

4．接口电路的滤波、防护以及隔离器件靠近接口放置，如图9所示，可以有效的实现防护、滤波和隔离的效果。如果接口处既有滤波又有防护电路，应该遵从先防护后滤波的原则。因为防护电路是用来进行外来过压和过流抑制的，如果将防护电路放置在滤波电路之后，滤波电路会被过压和过流损坏。此外，由于电路的输入输出走线相互耦合时会削弱滤波、隔离或防护效果，布局时要保证滤波电路（滤波器）、隔离以及防护电路的输入输出线不要相互耦合。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utJ95CyloaP3mTA0FZcRTmz5xTtMCPoFQfjLlbnrwyLf1icfkJNYCKTng/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图9接口电路的滤波、防护以及隔离器件靠近接口放置

5．敏感电路或器件（如复位电路等）远离单板各边缘特别是单板接口侧边缘至少1000mil。

6．存在较大电流变化的单元电路或器件（如电源模块的输入输出端、风扇及继电器）附近应放置储能和高频滤波电容，以减小大电流回路的回路面积。

7．滤波器件需并排放置，以防止滤波后的电路被再次干扰。

8．晶体、晶振、继电器、开关电源等强辐射器件远离单板接口连接器至少1000mil。这样可将干扰直接向外辐射或在外出电缆上耦合出电流来向外辐射。

  

**PCB布线规则**

  

除了元器件的选择和电路设计之外，良好的印制电路板（PCB）布线在电磁兼容性中也是一个非常重要的因素。既然PCB是系统的固有成分，在PCB布线中增强电磁兼容性不会给产品的最终完成带来附加费用。任何人都应记住一个拙劣的PCB布线能导致更多的电磁兼容问题，而不是消除这些问题，在很多例子中，就算加上滤波器和元器件也不能解决这些问题。到最后，不得不对整个板子重新布线。因此，在开始时养成良好的PCB布线习惯是最省钱的办法。下面将对PCB布线的一些普遍规则和电源线、地线及信号线的设计策略进行介绍，最后，根据这些规则，对空气调节器的典型印制电路板电路提出改进措施。

**1\. 布线分离**

布线分离的作用是将PCB同一层内相邻线路之间的串扰和噪声耦合最小化。3W规范表明所有的信号（时钟，视频，音频，复位等等）都必须像图10所示那样，在线与线，边沿到边沿间予以隔离。为了进一步的减小磁耦合，将基准地布放在关键信号附近以隔离其他信号线上产生的耦合噪声。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utDjE4eN1VgELAfElyNlWpR3GEWNuXxMujv2ic5Ip2BF7m9OcFKmsBoNA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图10 线迹隔离

**2．保护与分流线路**

设置分流和保护线路是对关键信号，比如对在一个充满噪声的环境中的系统时钟信号进行隔离和保护的非常有效的方法。在图21中，PCB内的并联或者保护线路是沿着关键信号的线路布放。保护线路不仅隔离了由其他信号线上产生的耦合磁通，而且也将关键信号从与其他信号线的耦合中隔离开来。分流线路和保护线路之间的不同之处在于分流线路不必被端接（与地连接），但是保护线路的两端都必须连接到地。为了进一步的减少耦合，多层PCB中的保护线路可以每隔一段就加上到地的通路。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utMb3HqkaA9jvhmYYwOdaKfeliavXxxIBaU26icGQHwZtPJe4h1YicAZqibQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图11 分流和保护线路

**3．电源线设计**

根据印制线路板电流的大小，尽量加粗电源线宽度，减少环路电阻。同时、使电源线、地线的走向和数据传递的方向一致，这样有助于增强抗噪声能力。在单面板或双面板中，如果电源线走线很长，应每隔3000mil对地加去耦合电容，电容取值为10uF＋1000pF。

**4．地线设计**

地线设计的原则是：

**(1)数字地与模拟地分开。**若线路板上既有逻辑电路又有线性电路，应使它们尽量分开。低频电路的地应尽量采用单点并联接地，实际布线有困难时可部分串联后再并联接地。高频电路宜采用多点串联接地，地线应短而粗，高频元件周围尽量用栅格状大面积地箔。

**(2)接地线应尽量加粗。**若接地线用很纫的线条，则接地电位随电流的变化而变化，使抗噪性能降低。因此应将接地线加粗，使它能通过三倍于印制板上的允许电流。如有可能，接地线应在2~3mm以上。

**(3)接地线构成闭环路。**只由数字电路组成的印制板，其接地电路布成团环路大多能提高抗噪声能力。

**5．信号线设计**

对于关键信号线，如果单板有内部信号走线层，则时钟等关键信号线布在内层，优先考虑优选布线层。另外，关键信号线一定不能跨分割区走线，包括过孔、焊盘导致的参考平面间隙，否则会导致信号回路面积的增大。而且关键信号线应距参考平面边沿≥3H（H为线距离参考平面的高度），以抑制边缘辐射效应。

对于时钟线、总线、射频线等强辐射信号线和复位信号线、片选信号线、系统控制信号等敏感信号线，应远离接口外出信号线。从而避免强辐射信号线上的干扰耦合到外出信号线上，向外辐射；也避免接口外出信号线带进来的外来干扰耦合到敏感信号线上，导致系统误操作。

对于差分信号线应同层、等长、并行走线，保持阻抗一致，差分线间无其它走线。因为保证差分线对的共模阻抗相等，可以提高其抗干扰能力。

根据以上布线规则，对空气调节器的典型印制电路板电路进行改进优化，如图12所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6ut9OHQeFpWDJY8JicdWmtF7ibLh7ibIjcjg4gzTvCHua6vlUR5Xjh6TyEiaw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  
图12 改进空气调节器的典型印制电路板电路

总体来说，PCB设计对EMC的改善是：在布线之前，先研究好回流路径的设计方案，就有最好的成功机会，可以达成降低EMI辐射的目标。而且在还没有动手实际布线之前，变更布线层等都不必花费任何钱，是改善EMC最便宜的做法。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2aJeN2dC5t6lDcxVMNj6wrJJHhGlW6utXaTbAEc44tCUccpxP9lwczuQQdHEzFsY4PjYnmlt1cBlobiadkrLmCQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

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