# 如何设计EMC浪涌保护电路？从原理到选型

原创 硬件笔记本 2023-12-25 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/DgI9qwndhuR4epq5kblxJg](https://mp.weixin.qq.com/s/DgI9qwndhuR4epq5kblxJg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

电涌保护电路是一种被称为交流电网线电压峰值保护器的电路。但是，在交流电网线中没有特别限制。电涌保护器或电涌保护设备是一种提供电涌抑制或电压尖峰抑制的设备，因此敏感设备不会受到损坏。

电涌保护器可以处理高达几千伏特范围的电压尖峰(取决于电涌保护器的类型)。还有一些浪涌抑制器只能承受几百伏的电压，依此类推。尽管电涌保护器设计为可在短时间内承受高电压尖峰，但仍不能承受更长的持续时间。  

**什么是电涌?**  

通常，电涌是电平或幅度从正常值或标准值突然增加。在电力中，浪涌通常用于描述电压瞬变，电压浪涌或电压尖峰。电压浪涌，尖峰或瞬变不是永久性事件。它仅在短时间内发生，但如果没有对策，则足以破坏设备。

电压浪涌不仅存在于电力线中，而且还存在于具有电感特性的电路中。但是，电力线中的电压浪涌最具破坏性，因为它可能高达几千伏特范围。  

下图显示了交流电源线上的电涌。   

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgx6Tia7uyFqTVib2btCtGWLuF6Kc5VSydwWpBNHj1GxrSZM68dtYGP2T9A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

交流线路瞬变电涌保护器通常安装在房屋，办公室和建筑物中，以防止损坏设备或装置。应该将其安装在所有设备或装置都可获取其源代码的部分。这样，所有设备将受到线路浪涌和尖峰的保护。这种方法称为通用电涌保护。如果所有设备或设备都具有本地电涌保护电路，则可能不需要通用电涌保护器。

**电力线中使用的电涌保护电路的两个主要类别**

1.主电涌保护器  

初级电涌保护装置安装在房屋，办公室或建筑物的电线入口处。它将保护进入点之后连接线路的所有设备或电器。通常，初级电涌保护器功能非常强大。但是，它既庞大又庞大又昂贵。  

2.二次电涌保护器  

二级电涌保护器不如初级电涌保护器有效和强大。

但是，它便携且使用方便。通常，这种电涌保护器很容易插入电源插座。它仅对从安装了第二电涌保护器的电源插座获取电源的设备提供保护。  

下图显示了建筑物中主要和次要电涌保护器的安装方式。    

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxvy2WRw77YZJLbD570Bbg7icq1e7UjHbpB8C8mqFrZZHHzgbMqgYicM1w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic) 

**二次电涌保护电路的常见类型**

已知的次级电涌保护电路很少。一种是所谓的配电盘。配电盘很容易插入电源插座。除此之外，它还带有多个电源插座，多个设备和电器可以插入其中，并受电涌保护。配电盘的最重要功能是在出现电涌时能够终止电源。

另一种已知类型的次级电涌保护器是众所周知的UPS或不间断电源。一些复杂的UPS具有内置的电涌保护器，可提供与配电盘相同的安全保护功能。  

**电涌保护器如何工作?  
**

有一种电涌保护器  

一旦出现电涌，可以切断电源。这种类型的电涌保护器复杂，复杂，当然也很昂贵。这种类型的基本组件是电压传感器，控制器和锁存/解锁电路。电压传感器将监视线路电压，控制器将读取感测电压并决定何时向锁存/解锁电路发信号通知终止电压。锁存/解锁电路是可控制的电源接触器或电源开关，可以连接或断开线路电压。

还有一种电涌保护器，它不提供电压关断功能，而只是钳制电压瞬变并吸收能量。这种电涌保护器通常用作内置电涌保护器，例如在开关模式电源中。此类保护在数千伏以下的电压下均有效。如下图所示，最好在电路中描述这种电涌保护。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxATBgVOMOero4UK6haFYln51icYerzFkVaWian7IUtIA4h98uSLlOS4Kw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

ACLINE 1和AC2上的电涌保护器1称为差模电涌抑制。而电涌保护器2和3均称为共模电涌抑制。差模浪涌抑制器可钳制ACLINE1和AC线2上的任何电压尖峰。之所以称为差模，是因为它安装在两条热线上。另一方面，共模是用于电涌保护器2和3的术语，因为两者都将相对于大地的单个热线上的电压瞬变钳位。在不太严格的电涌要求中，电涌保护器1已经足以通过标准。然而，对于更高的浪涌电压等非常严格的要求，增加了浪涌保护器2和3。

  

**电压浪涌的原因  
**

电压浪涌发生的原因有很多。这可能是由于雷电，电源系统切换(如电容器组)，带有开关设备的谐振电路，布线错误以及突然打开和关闭开关，电动机和其他高电感性电器和设备造成的。AC线电压浪涌在世界任何地方都存在。因此，建议保护设备和设备免受此破坏性事件的影响。

  

**一些常见的浪涌介质  
**

这些是电涌或电压尖峰可以进入使用它的设备或设备的常见路径。  

电源线–这是电涌的第一介质，因为所有电气和电子设备都使用交流电源。AC线电涌在世界范围内很普遍。  

射频线–包括天线。天线容易受到雷击。雷电能够在短时间内产生非常高的电压尖峰。当雷击天线时，它将穿透射频接收器。  

汽车交流发电机–在汽车电子产品中，还定义了电压浪涌。这是因为交流发电机能够在负载突降期间产生高电压尖峰。  

电感电路/负载–任何电感电路或负载总是会引入浪涌电压。通常，这种激增称为感应反冲。  

  

**IEC定义的浪涌标准  
**

IEC61000-4-5定义了交流电源线浪涌的标准。下表提供了有关类别和电压电平的具体说明。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxKpzxVpDiaoXqzvJwOWHqfnPEvGtkohHYichwQzjg3jmWOXgIJusx96cQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

根据该标准，设备在等级4下应承受和通过的最大瞬态电压为4kV(尽管有等级5，但仍称为等级4)。  

IEC61000-4-5定义的瞬态电压如下图所示。它具有1.2us的上升时间，而脉冲宽度为50us。 

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxsTb3x7hAKaKYkTib3c5D4PDwMkukUWeqXjticn9uUIO2kichKcGX4TJ0Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

IEC61000-4-5还定义了短路电流形状，如下图所示。它具有8us的上升沿和20us的脉冲宽度。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxMAMq0jCiaPPoBp0wzC9lWCuN4eOy1XXQU9XJL9sLS5WfGezj14P5xFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

下表是每类对应的浪涌电流或短路电流水平。最差值是2000A。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxFQlN8SjGuMicnhIM5V0qfxR8SDB0qibT3x1OthePIAnbnibCJrM2hNMOw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

**IEC61000-4-5规定的短路电流是多少?  
**

为了回答这个问题，我首先要说，所有连接到电源线的设备都必须具有电涌保护功能。电涌保护通过将瞬态电压钳制到一个更安全的水平而起作用。一旦电涌保护电路钳位，从电源到保护装置再到电源地的短路路径将出现。 

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxbF0lVVqXqcEiarQm0XibiaISRcD8pulxz0iboMvoyYgFJ79vKjRTerxo4g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

**如何设计电涌保护电路**

设计电涌保护装置并不难。实际上，某些电子设备的内置电涌保护只能是一个设备。这可以是MOV或金属氧化物压敏电阻或瞬态电压抑制器TVS。在下图中，电涌保护器1至3可以是MOV或TVS。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxATBgVOMOero4UK6haFYln51icYerzFkVaWian7IUtIA4h98uSLlOS4Kw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxQjvJZ2VibN44qzeWpxvMtwQPQiaNyV8m0FXqEvbmibQTzRqWP9vT51xrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

有时，交流线路之间的电涌保护设备足以通过IEC标准。在少数情况下，需要在线路和地之间跨接电涌保护电路。特别是在更高的浪涌电压要求(4kV及以上)时。  

**使用MOV作为电涌保护装置  
**

基本性质  

MOV代表金属氧化物压敏电阻;是电力线中常用的电涌保护器。  

MOV是电压依赖性电阻器  

MOV操作就像一个二极管，具有非线性和非欧姆电流和电压特性，但双向。  

它的操作也可以与双向瞬态电压抑制器TVS进行比较。  

当钳位电压没有达到时，它就开路

下面是MOV的电压-电流曲线。如您所见，它在象限1和3上具有几乎恒定的电压，这使其成为双向设备。ZnO和SiC分别代表氧化锌和碳化硅。这是MOV制成的两种常见材料。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgx8X1rWvtbI2WMauk2rdjV0fWuzmtQWwHwk1y5qaElMSOdSnPBNZEnLQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic) 

**型号选择  
**

对于通用的90-264Vac线路，通常的MOV额定电压为300Vrms。300Vrms是MOV可以承受的RMS或连续施加的电压。这还不是钳位电压。例如，根据数据表，我们将使用leiditech的14D471KJ，其交流额定电压为300Vac，但在50A峰值电流下的钳位电压为775V。  

接下来要验证的是，MOV的浪涌电流额定值能够处理上面表2中指定的水平(考虑最大水平)。根据下面所选的MOV数据表，在2000A和20us脉冲持续时间下，MOV能够处理超过15次的撞击但少于100次的撞击。设备图上用虚线估计了2000A。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxN0cTKuiaO8VibdiaG920esjtfSMKbX1ABmudk9vuKZKicDictibNRShfziavQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic) 

尽管数据表中规定了钳位电压，但在2000A时可能不再有效。下图显示了使用所选MOV时在2000A处的相应钳位电压。黄线的交点是钳位电压。请注意，它已经超过1000V。确保设备中使用的所有设备都能承受此电压水平。否则，请考虑另一个钳位电压较低的MOV。 

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgx1icIUfmYsbevCloSETjrD4U2twSDXg1fpQVVqKBun0TvyBDWPxEp8Lw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

**MOV电力线电涌保护的理想位置  
**

如下图所示，必须将MOV用作电涌保护装置，并紧靠保险丝安装。通过这种布线，一旦浪涌电流太大，MOV无法处理，则保险丝将断开并断开电路，并避免可能的灾难性故障。  
![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxcW8icnTHepiaR6ZVnb4TcvjJCYCUOQ8GLolXsdicNKfEic83hicvVJ4j8SQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

**汽车中的浪涌抑制  
**

如上所述，浪涌不仅发生在交流电源线上。电压浪涌在汽车系统中也很常见。汽车系统仅使用铅酸电池，对于6个串联的电池，典型的完全充电电压约为12.9V，每个电池为2.15V。在计算中，通常使用最大14V的电池电压。此电平不是破坏性的，额定电压为30V的设备足以长期生存。但是，这种感觉仅在稳态下才是正确的，而在所谓的“甩负荷”期间则不正确。负载突降是一个术语，用于描述在发电机充电时突然断开电池连接的时间。对于12V系统，如果不考虑负载突降，可能会导致高达120V的尖峰电压，并且足以破坏设备。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgx7qYDZx1FIgAp57yWZGRXMpiauIo21r6NvTtDNeRtVZpnJPCSCvpTX0w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

为了抵消这种负载突降的情况，经常使用电涌保护电路，如TVS和压敏电阻。

在汽车中，甩负荷波形由ISO7637定义，如下图。峰值电压最大为125V。与IEC61000-4-5定义的标准相比，上升和脉冲宽度持续时间(T1和T)更长。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgx6d4nricuDSP7EMj5Cib9jJMtiaToSkiaYnFia66yPLFuXStBRnX4JubXeDA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

**汽车电涌抑制器的理想位置**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfnp1R01jeibgiccwKW7SMbFgxwyNch1QJMlibfLZib6Rg07Abic3LdaupXm65q4pNMzxfibqQEFmjHSywGQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

硬件工程师及从业者都在关注我们

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