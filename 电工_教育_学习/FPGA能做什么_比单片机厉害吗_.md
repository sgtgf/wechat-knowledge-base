# FPGA能做什么？比单片机厉害吗？

原创 硬件笔记本 2023-08-20 18:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/Dck1-Jy878oZjV-oOT8ZBw](https://mp.weixin.qq.com/s/Dck1-Jy878oZjV-oOT8ZBw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

学习单片机的同学，一般都会接触FPGA。

有读者大概问了这样的问题：**FPGA能做什么？比单片机厉害吗？**

  

这么说吧，FPGA在某方面也能实现单片机做的事，在某些领域，FPGA远比单片机强的多。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ju1DzqX8iaOmGkWFWBDPFrxJMI6fxEGdibuaqbrDypf1XdRc2OrTkpZN9ibichYcicy2SeOaKROQibJJ4S37P4DrJkCw/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1)

  

当然，FPGA和单片机各有各的特点，在应用上也有一些区别。

  

下面说说FPGA 常见的几大应用的领域：

  

### **1.通信系统**

FPGA 在通信领域的应用可以说是无所不能，得益于 FPGA 内部结构的特点，它可以很容易地实现分布式的算法结构，这一点对于实现无线通信中的高速数字信号处理十分有利。

  

**因为在无线通信系统中，许多功能模块通常都需要大量的滤波运算，而这些滤波函数往往需要大量的乘和累加操作。而通过FPGA 来实现分布式的算术结构，就可以有效地实现这些乘和累加操作。**

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ju1DzqX8iaOmGkWFWBDPFrxJMI6fxEGdibh8f1ZoUlH5PbyN8RhzSM6ib8W7sMOj6iaD2c0fXmqcibRsRgxkowicdJhg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

尤其是 Xilinx 公司的 FPGA 内部集成了大量的适合通信领域的一些资源比如：基带处理(通道卡)、接口和连接功能以及 RF(射频卡)三大类：

-   基带处理资源基带处理主要包括信道编解码(LDPC、Turbo、卷积码以及 RS 码的编解码算法)和同步算法的实现(WCDMA 系统小区搜索等)。
    
-   接口和连接资源接口和连接功能主要包括无线基站对外的高速通信接口(PCI Express、以太网 MAC、高速 AD/DA 接口)以及内部相应的背板协议(OBSAI、CPRI、EMIF、LinkPort)的实现。
    
-   RF 应用资源RF 应用主要包括调制/解调、上/下变频(WiMAX、WCDMA、TD-SCDMA 以及 CDMA2000 系统的单通道、多通道 DDC/DUC)、削峰(PC-CFR)以及预失真(Predistortion)等关键技术的实现。总而言之只要你 FPGA 学的好，在通信领域你绝对可以大展身手。
    

###   

### **2.数字信号处理**

在数字信号处理领域 FPGA 同样所向披靡，主要是因为它的高速并行处理能力。**FPGA最大优势是其并行处理机制，即利用并行架构实现数字信号处理的功能。**

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ju1DzqX8iaOmGkWFWBDPFrxJMI6fxEGdibANiaMAYmWgGicLotolc83rkNqV0ibVWp0icUvCiaZ1Kmial86o4YM8z1dPWA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

这一并行机制使得 FPGA 特别适合于完成 FIR 等数字滤波这样重复性的数字信号处理任务，对于高速并行的数字信号处理任务来说，FPGA性能远远超过通用 DSP 处理器的串行执行架构，还有就是它接口的电压和驱动能力都是可编程配置的不像传统的 DSP 要受指令集控制，因为指令集的时钟周期的限制，不能处理太高速的信号，对于速率级为 Gbps的 LVDS 之类信号就难以涉及。所以在数字信号处理领域 FPGA 的应用也是十分广泛的。

  

### **3.视频图像处理**

随着时代的变换，人们对图像的稳定性、清晰度、亮度和颜色的追求越来越高，像以前的标清（SD）慢慢演变成高清（HD），到现在人们更是追求蓝光品质的图像。这使得处理芯片需要实时处理的数据量越来越大，并且图像的压缩算法也是越来越复杂，使得单纯的使用 ASSP 或者 DSP 已经满足不了如此大的数据处理量了。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ju1DzqX8iaOmGkWFWBDPFrxJMI6fxEGdibTm7JD8HVuUYlcZsw333F6VCdukNJoRXo5aHfEQ1t4QtwmialEjmxdjA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

这时 FPGA 的优势就凸显出来了，它可以更加高效的处理数据，所以在图像处理领域在综合考虑成本后，FPGA 也越来越受到市场的欢迎。

###   

### **4.高速接口设计**

其实看了 FPGA 在通信领域和数字信号处理领域的表现，我想大家也已应该猜到了在高速接口设计领域，FPGA 必然也是有一席之地的。它的高速处理能力和多达成百上千个的 IO 决定了它在高速接口设计领域的独特优势。

  

比如说我需要和 PC 端做数据交互，将采集到的数据送给 PC 机处理，或者将处理后的结果传给 PC 机进行显示。PC 机与外部系统通信的接口比较丰富，如 ISA、PCI、PCI Express、PS/2、USB 等。

  

传统的做法是对应的接口使用对应的接口芯片，例如 PCI 接口芯片，当我需要很多接口时我就需要多个这样的接口芯片，这无疑会使我们的硬件外设变得复杂，体积变得庞大，会很不方便，但是如果使用 FPGA 优势立马就出来了，因为不同的接口逻辑都可以在 FPGA 内部去实现，完全没必要那么多的接口芯片，在配合 DDR 存储器的使用，将使我们接口数据的处理变得更加得心应手。

  

### **5.人工智能**

如果大家比较喜欢关注科技板块的新闻的话最近一定会被 5G 通信和人工智能充斥眼球，确实 21 世纪已经不知不觉走到了 2020 年，在这 20 年间，人工智能迅速发展，5G 的顺利研发也使人工智能如虎添翼，可以预见，未来必将是人工智能的天下。FPGA 在人工智能系统的前端部分也是得到了广泛的应用，例如自动驾驶，需要对行驶路线、红绿灯、路障和行驶速度等各种交通信号进行采集，需要用到多种传感器，对这些传感器进行综合驱动和融合处理就可以使用 FPGA。

  

还有一些智能机器人，需要对图像进行采集和处理，或者对声音信号进行处理都可以使用 FPGA 去完成，所以 FPGA 在人工智能系统的前端信息处理上使用起来得心应手。

  

### **6.IC 设计**

IC 这个词大家可能一听到就觉得特别高深，不是凡人所能触及到的，而 IC 设计更是一些神人才能胜任的工作。不可否认的是 IC 设计门槛确实比较高，但是我们也没必要把它过于神话，其实简单点来讲我们可以拿 PCB 设计来与之比较，PCB 是拿一个个元器件在印制线路板上去搭建一个特定功能的电路组合，而 IC 设计呢是拿一个个 MOS 管，PN 节在硅基衬底上去搭建一个特定功能的电路组合，一个宏观一个微观。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ju1DzqX8iaOmGkWFWBDPFrxJMI6fxEGdibepAf054qHbcv9CTzQtjHFWMMrQBdRl7xxicICfTfLTdCNIKFh9nb6dw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

PCB 如果设计废了大不了重新设计再打样也不会造成太大损失，但是如果 IC 设计废了再重新设计那损失就很惨重了，俗话说大炮一开，黄金万两，那么在 IC 领域光刻机一开黄金万两也不是吹的，光刻胶贵的要命，光刻板开模也不便宜，加上其他多达几百上千道工序，其中人力、物力、机器损耗、机器保养，绝对是让人肉疼的损失，所以 IC 设计都要强调一版成功。

  

保证 IC 一版成功就要进行充分的仿真测试和 FPGA 验证，仿真验证是在服务器上面跑仿真软件进行测试，类似 ModelSim/VCS 软件；FPGA 验证主要是把 IC 的代码移植到 FPGA 上面，使用 FPGA 综合工具进行综合、布局布线到最终生成 bit 文件，然后下载到 FPGA 验证板上面进行验证，对于复杂的 IC 我们还可以给他拆成几个部分功能去分别验证，每个功能模块放在一个 FPGA 上面，FPGA 生成的电路非常接近真实的 IC 芯片。这样极大的方便我们 IC 设计人员去验证自己的 IC 设计。

  

**其它**

比如电力行业的高速数据采集，医疗行业的高速、大数据量的模拟量采集传输，军工行业的雷达、卫星、制导系统等等都是FPGA的应用领域。

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