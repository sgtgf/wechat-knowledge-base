# 电子元器件如何实现CPU的运算？

原创 硬件笔记本 2024-02-21 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/KyQYfh8kB8CicKFzKkf5cg](https://mp.weixin.qq.com/s/KyQYfh8kB8CicKFzKkf5cg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

我们都知道，人类进行运算的本质是查表，并且我们存储的表是有限的。计算机也是查表吗？答案是否定的。

本文来说说CPU是如何计算1+1的，另外关于CPU加法的视频请移步此处，[CPU如何进行数字加法](http://mp.weixin.qq.com/s?__biz=MzI1MDg4OTMwMw==&mid=2247498046&idx=1&sn=916f0b06aed3be05795450db8b6f0ac6&chksm=e9f9ec06de8e65105c332cddef731ea0aba32fd2f74791df9c6467b4cad6fa4090fd002d5703&scene=21#wechat_redirect)。CPU是一块超大规模的集成电路，而集成电路是由大量晶体管等电子元件封装而成的。

所以，探究计算机的计算能力，先要从晶体管的功能入手。

  

**晶体管如何表示0和1**

第一代计算机使用的是电子管和二极管等元件，利用这些元件的开关特性实现二进制的计算。

然而电子管元件有许多明显的缺点。例如，在运行时产生的热量太多，可靠性较差，运算速度不快，价格昂贵，体积庞大，这些都使计算机发展受到限制。于是，晶体管开始被用来作计算机的元件。

晶体管利用电讯号来控制自身的开合，而且开关速度可以非常快，实验室中的切换速度可达100GHz以上。

第二代电子计算机时代，使用了晶体管以后，电子线路的结构大大改观。  

1947年贝尔实验室的肖克利等人发明了晶体管，又叫做三极管。下图是晶体管的电路符号。需要说明的是，晶体管有很多种类型，每种类型又分为N型和P型，下图中的电路符号就是一个PNP三极管，要判断三极管类型请移步，[PNP与NPN两种三极管使用方法](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247493609&idx=5&sn=56bd29b205566c43b0a44232c5387369&chksm=fadb9917cdac1001079db6a3094ce69e1d1cea36c91f6f52ab379f86b06388dc27fe1ecf4313&scene=21#wechat_redirect)。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEcYqABJozYm3UnDvCupOnEfBYtJBoHfJCTBR2cjDGib6b0wnNlibU3FfOxiarH7GzhPLh1UPaNV9lDFA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

三极管电路有导通和截止两种状态，这两种状态就可以作为“二进制”的基础。从模电角度来说晶体管还有放大状态，有关内容请移步:[告别三极管放大状态的泥潭](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247492790&idx=3&sn=61a2d5a34a8b8a0379cdbc7138f7b0c3&chksm=fadb9a48cdac135ea84a604e44e25aed0ebb41d69e014e8210537d899251f84e3618356f2ea0&scene=21#wechat_redirect)。但是我们此处考虑的是晶体管应用于数字电路，只要求它作为开关电路，即能够导通和截止就可以了。

如上图所示，当b处电压>e处电压时，晶体管中c极和e极截止；当b处电压<e处电压时，晶体管中c极和e极导通。

这只是一个简化说明，实际上从模电角度分析，导通和截止的要求是两个PN节正向偏置和反向偏置，还要考虑c极电压。但在实际的数字电路中，e极电压和c极电压一般恒定，要么由电源提供、要么接地，所以我们可以简单记为“晶体管电路的通断就是由b极电压与恒定的e极电压比较高低决定”。

就上面这个三极管管而言，高电平截止，低电平导通。假如此时，我们把高电平作为“1”，低电平作为“0”。那么b极输入1，就会导致电路截止，如果这个电路是控制计算机开关机的，那么就会把计算机关闭。这就是机器语言的原理。  

实际用于计算机和移动设备上的晶体管大多是MOSFET（金属-氧化物半导体场效应晶体管），它也分为N型和P型，NMOS就是指N型MOSFET，PMOS指的是P型MOSFET。MOS管基础内容请移步这里，[MOS管基本认识](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247492606&idx=2&sn=7238f5f913904b08ccb8670fbcda2c76&chksm=fadb9d00cdac14164f4350b44dae7b0c36caa605c76f526bfd81b271ef032dd996ef56e593ef&scene=21#wechat_redirect)。注意MOS中的栅极Gate可以类比为晶体管中的b极，由它的电压来控制整个MOS管的导通和截止状态。

NMOS管与PMOS管电路符号如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgWEzbQicK4emsic0qHGjKKyIgxDWiaQ6CLYVFj6BJdoZdmzPCWC4Oh18M5YmDm94y3ibxJmelloy64pQ/640?wx_fmt=png&from=appmsg)

NMOS在栅极高电平的情况下导通，低电平的情况下截止。所以NMOS的高电平表示“1”，低电平表示“0”；PMOS相反，即低电平为“1”，高电平为“0”。到了这个时候，你应该明白“1”和“0”只是两个电信号，具体来说是两个电压值，这两个电压可以控制电路的通断。

  

**门电路**

一个MOS只有一个栅极，即只有一个输入；而输出只是简单的电路导通、截止功能，不能输出高低电压信号，即无法表示“1”或“0”，自然无法完成计算任务。此时就要引入门电路了（提示：电压、电平、电信号在本文中是一回事）。

门电路是数字电路中最基本的逻辑单元。它可以使输出信号与输入信号之间产生一定的逻辑关系。门电路是由若干二极管、晶体管和其它电子元件组成的，用以实现基本逻辑运算和复合逻辑运算的单元电路。这里只介绍最基础的门电路：与门、或门、非门、异或门。

**1 与门**

与门电路是指只有在一件事情的所有条件都具备时，事情才会发生。

下面是由MOS管组成的电路图。A和B作为输入，Q作为输出。  

例如A输入低电平、B输出高电平，那么Q就会输出低电平；转换为二进制就是A输入0、B输出1，那么Q就会输出0，对应的C语言运算表达式为0&&1=0。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEcYqABJozYm3UnDvCupOnEfIfCrLTmLwLsU84qFsOTqbIzfejsFUsicbEygu9943cJoRZlWemic61Hw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**2 或门**

或门电路是指只要有一个或一个以上条件满足时，事情就会发生。  

下面是由MOS管组成的电路图。A和B作为输入，Q作为输出。  

例如A输入低电平、B输入高电平，那么Q就会输出高电平；转化为二进制就是A输入0、B输出1，那么Q就会输出1，对应的C语言运算表达式为0||1=1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEcYqABJozYm3UnDvCupOnEfyc9VHNJVsCAS9Jq7mpS1iaYfds9aHUWGF79oTxOOPlKc3nGO2iaXLOkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**3 非门**

非门电路又叫“否”运算，也称求“反”运算，因此非门电路又称为反相器。下  

面是由MOS管组成的电路图。非门只有一个输入A，Q作为输出。  

例如A输入低电平，那么Q就会输出高电平；转换为二进制就是A输入0，那么Q就会输出1；反之A输入1，Q就会得到0，对应的C语言运算表达式为!0=1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEcYqABJozYm3UnDvCupOnEfibxektG1cicy3iaia5s9QojJ7fR4UiaNXvPSnNkj4ptbQrduNZnDxF532Wg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**4 异或门**

异或门电路是判断两个输入是否相同，“异或”代表不同则结果为真。即两个输入电平不同时得到高电平，如果输入电平相同，则得到低电平。  

下面是由MOS管组成的电路图。A和B作为输入，Q作为输出。  

例如A输入低电平、B输入高电平，那么Q输出高电平；转换为二进制就是A输入0，B输出1，那么Q就会输出1，对应的C语言运算表达式为0^1=1。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nsLG1HndEcYqABJozYm3UnDvCupOnEf9Tib4ic4cjxYZIfo8HX7Qof6z7KUhOLRUq3S1yrUJ8UXMuKuMtCoXEvA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

通过这些门电路，我们可以进行布尔运算了。

  

**半加器和全加器**

通过门电路，我们可以进行逻辑运算，但还不能进行加法运算。要进行加法运算，还需要更复杂的电路单元：加法器（加法器有半加器和全加器）。加法器就是由各种门电路组成的复杂电路。

  假如我们要实现一个最简单的加法运算，计算二进制数1+1等于几。我们这时候可以使用半加器实现。半加器和全加器是算术运算电路中的基本单元，它们是完成1位二进制相加的一种组合逻辑电路；这里的1位就是我们经常说的“1byte=8bit”里的1bit，即如果我们想完成8位二进制的运算就需要8个全加器 。半加器这种加法没有考虑低位来的进位，所以称为半加。下图就是一个半加器电路图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/MLfSTncC3tMuJw9n10qLwyYjP8T40eDYNzwoQAR3ibv9TRaZ4UoNATCG0l7bWSOvG5CAzVaEvlwHOq5ibzFz4X5g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

半加器由与门和异或门电路组成，“=1”所在方框是异或门电路符号，“&”所在方框是与门电路符号。这里面A和B作为输入端，因为没有考虑低位来的进位，所以输入端A和B分别代表两个加数。输出端是S和C0，S是结果，C0是进位。

比如，当A=1，B=0的时候，进位C0=0，S=1，即1+0=1。当A=1，B=1的时候，进位C0=1，S=0，即1+1=10。这个10就是二进制，换成十进制就是用2来表示了，即1+1=2。到了这里，你应该明白了晶体管怎么计算1+1=2了吧。  

然后我们利用这些，再组成全加器。下面是一个全加器电路图，同样只支持1bit计算。Ai和Bi是两个加数，Ci-1是低位进位数，Si是结果，Ci是高位进位数。

![](https://mmbiz.qpic.cn/mmbiz_jpg/MLfSTncC3tMuJw9n10qLwyYjP8T40eDYTFdFibtIvrYDO5LDFSsd8RPjPly7V5fJHfHavwt1V9XPiaG4qxEPoNibw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

如果我们将4个加法器连接到一起就可以计算4位二进制，比如计算2+3，那么4位二进制就是0010+0011，下表就是利用加法器计算的值。和普通加法一样，从低位开始计算。加数A代表0010，B代表0011。

![](https://mmbiz.qpic.cn/mmbiz_jpg/MLfSTncC3tMuJw9n10qLwyYjP8T40eDYJftVE8L1CN1IhzdB2BKwZIFKoJtYIo3NxYtTtkHKQX0ichxm8Tx39wQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

    结果Si：0101，就是十进制5，加法器实现了十进制运算2+3=5。

**结语**

现在我们可以想到，CPU的运算单元是由晶体管等各种基础电子元件构成门电路，在由多个门电路组合成各种复杂运算的电路，在控制电路的控制信号的配合下完成运算，集成的电路单元越多，运算能力就越强。

最后，本文想表达的观点：[用一堆开关做成一个CPU？也是一篇推荐文章的题目](http://mp.weixin.qq.com/s?__biz=MzI1MDg4OTMwMw==&mid=2247498271&idx=3&sn=732aa1ca94310083c24c5debfbd65625&chksm=e9f9ef27de8e6631deb7474d2bdfee2333b3a818020b5460beedf8f72b0b67ea50127ab4c5b8&scene=21#wechat_redirect)。

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