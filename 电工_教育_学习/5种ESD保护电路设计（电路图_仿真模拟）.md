# 5种ESD保护电路设计（电路图+仿真模拟）

原创 硬件笔记本 2024-04-10 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/JB1eQtXjMb-yQvayB1DQFg](https://mp.weixin.qq.com/s/JB1eQtXjMb-yQvayB1DQFg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

工程师都在知道在设计的时候会考虑到ESD，通常也会使用到TVS二极管。但是重点在于需要多保护，什么时候不需要保护了？这篇文章会对电路进行模拟。

# **一、ESD 保护电路的作用**

主要就是****减少电压和电流****，一旦减少，IC的内部ESD保护就可以解决剩下的问题。

**下图显示了普通PIC16控制器的框图，**虽然说并不是所有的微控制器/IC都会使用这种完全相同的ESD保护电路，但是会非常相似。通常来说，二极管的尺寸非常小，没有办法在烧毁的情况下处理通过的大量电流。

注意****引脚左侧的两个二极管，是内部ESD保护电路。****

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pvMX2yoWhByUEnIpqeboYWvJ6iaHaKtkovPicTTeDv25Jiajrko0J0IkdA/640?wx_fmt=png&wxfrom=13)

任意 IO 引脚的 PIC16F616 内部框图

下图这个例子，在ESD事件期间，****如果没有外部TVS二极管，IC会在引脚上看到超过300V的电压，很有可能会使内部保护过载并损坏设备。****通过添加单个外部TVS二极管，可以减少这种情况发生。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pQWj4XN6dLAQcjdickytqQXt7r3OwDVWmXHIrjz88ru9T4MiaTWbrzm0w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

# **二、5种ESD保护电路+模拟**

为了更好地展示ESD事件期间不同保护方案的工作原理，下面对****5种不同ESD保护电路****的方案进行模拟。

下面为ESD：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2piaRiaPTxibwjPke9rqZmm39NrXmDvXCjFkl3PRGFibYcmmcJkJxC2OWvMA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**对该电路进行测试，使用2R校准电阻（R14），会生成一下电流/时间图**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pqcQxKHD0eUgeu0uBgN9l7pHafO7fKHOXvS74IBWXM3zh2G4M5vTXDQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

使用 2R 校准电阻

了解后，使用此电路测试各种不同的ESD保护电路。

**1、无ESD保护电路**

下面这个电路模拟了IC内部的ESD保护电路，ESD应用于暴露的GPIO引脚，具有少量寄生电阻：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pNQ35g0EhJy9EzrhflRa0PGWqt43SS0I4VvhQHMZ7aDYfkKcNdDgpZw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

无ESD保护电路

**模拟**

GPIO引脚电压超过1KV，11A通过D1。根据下图曲线，****没有ESD保护会使内部保护二极管暴露在极端的电压和电流下，可能会导致二极管失效****。由于通过 D1 的电流与电压 GPIO 直接相关。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pSHs4It5dWmy4st3cul53qskSFscDib6b91QvxzJVfjEyZpeTRSib8EXg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

无ESD保护电路，GPIO 引脚电压超过 1kV，11A 通过 D1。

**2、串联ESD保护电路**

这里的ESD保护电路只是简单地****使用一个串联电阻****。对于这个模拟，使用****220R****，**串联电阻用于减缓信号的上升时间，并且可以大大改善电路的EMC和SI。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pDwUOK9p7WyR5Umn0jYdQEdWItLf6679ia6qkhkBts8wK8OZDsQGNU6g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

ESD保护电路使用一个串联电阻

**模拟**

如下图所示，****最大GPIO电压降低了近50%，通过D10的电流降低了40%。****虽然说依旧会损坏IC，但确实也显示了单个电阻可以增加ESD保护产生的影响，如果IO引脚上的信号允许，可以使用更大的电阻提供额外保护。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pGrdlPek5V1u8J4pV5YybWuHdoDeG50xHv7jSv4bTuAz23q5rmWtAXw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

与无 ESD 保护相比，串联电阻的曲线图显示出显着改善。

**3、电容**

另一种简单的ESD保护电路****在引脚到地之间简单地加一个1nF电容。****与串联电阻类似，电容的大小取决于线路的用途。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pKBylGwxxM2GEcviaauCttxd3knibpVUWoAibVetoH3Jl6mhIDTgyWmSKg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在 GPIO 线与地之间添加了一个 1nF 电容

**模拟**

如下图所示，单个1nF小电容使曲线图发生巨大变化。****峰值电压小于330V，电流限制在3A左右。****

这个ESD保护电路潜在的问题是事件比现在要长的多，可能使内部保护二极管过热，并且可能破坏线路上的任何数据。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pYR6gGkWfpH5cCibqpNPbbWe5h9jc4WQbvLiacfZt2z9ovVkUPX2WzCOw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这个图与前面2个完全不一样，电容显著减慢了事件的上升时间

**将电容换成10nF，进一步降低了峰值电压，但是事件发生的事件也被延长了。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pfX7AlmwJXfnQSxuZ8EBDUW1RG0PyictUNblV7xyGib3kIicukfoQ2yV6Q/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

一个 10nF 的电容进一步降低了峰值电压

串联电阻也是这样，电容越大，提供的保护越多，但是有个例外，具有低ESR的大陶瓷电容会导致振铃。因此，通常****需要将串联电阻与电容结合使用，至少用其串联的电阻来阻尼电容****。另外，不可以将这种方法用于任何通信或者高速信号，因为电容会使总线负载过大。

**4、TVS二极管**

接下来是****TVS二极管****，是ESD保护电路最常用的方法之一，作用与齐纳二极管基本相同，传导速度更快，浪涌额定值更高（有时候也没有指定的连续电路/额定功率）。

有一些重要的定义/规范：

-   反向工作最大电压 (VRWM)：正常工作条件下应施加的最大反向电压。
    
-   击穿电压 (VBR)：二极管刚开始导通时的电压。
    
-   钳位电压 (VCLAMP)：系统在浪涌期间将经历的最大电压。
    
-   动态电阻 (RDYN)：二极管完全导通时的估计电阻。
    

这里要注意单向二极管和双向二极管是不一样的。****在GPIO上使用 8.2V 齐纳 (TVS) 二极管接地。****

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pibzicwz2oNGqthYAibBa528snkEHmxcOibJvyJJicHe5FYHSic9pooCeOBYQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在GPIO上使用 8.2V 齐纳 (TVS) 二极管接地。

**模拟**

可以看到 ****GPIO 引脚上的电压大幅下降****。最大现在约为16V，通过D10的电流仅为100mA。内部保护二极管可以这样使用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pCmN6YwHXxFZM9rBpcXPJf19LicmeIhQU1SBmsLiaf0zAicl3SBfyJnm5g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

GPIO 引脚上的电压大幅下降

这里必须要知道的是****外部TVS二极管D12承受的压力****，如下图所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pEzBepV8pmNlE4iaIUYZ9PlnMs40vbcXw6TicmER82cV9Vmdgc7ItImuQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

显示了 TVS 二极管 D12 在 ESD 事件期间承受的电流

**TVS的电流等级**

当使用 TVS 二极管时，Datasheet上会有“电流 – 峰值脉冲 (10/1000µs)”的规格。这是 TVS 二极管在指定时间和波形下可以处理的****最大额定电流****。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2poatnTPZTYJ21rv7zL20lMatcHub0s4qI4vh6hTZacibsicVnGOShS6KA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

TVS的电流等级

**10/1000µs 是衡量 TVS 二极管功率处理性能的常用规格。**

****降低电流并保护TVS二级管的一种简单方法是在TVS的连接器侧使用串联电阻****。在在 TVS 二极管的 ESD 侧放置了一个 220R 电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pCGYP58sjthbCicmibbBHw2piaTebRSuqTOHCJXssOyWZ06IKVM74SMroA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在 TVS 二极管的 ESD 侧放置了一个 220R 电阻

在 TVS 二极管的 ESD 侧放置了一个 220R 电阻。

**模拟**

下图显示****通过 TVS 二极管的电流减少了近 50%****。当峰值电流/电压降低时，事件的长度增加。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2p7IsYRs8UCkxkTGE7eAj0WtFQu5jcEjVrLggK84K09EXwBBjxuSt9MQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

通过 TVS 二极管的电流减少了近 50%

****电阻还会影响 GPIO 引脚上的峰值电压****。如下图所示：TVS 二极管 + 串联电阻的曲线图显示 GPIO 引脚上的峰值电压略有下降。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pZjcyhabxLibxyIx8LDVuvtVhVicewxV4ldSnYLbdRLz02jERLN255SCg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

TVS 二极管 + 串联电阻的曲线图显示 GPIO 引脚上的峰值电压略有下降

TVS 二极管 + 串联电阻的曲线图显示 GPIO 引脚上的峰值电压略有下降。

**5、双肖特基二极管**

我偶尔会使用到的一个ESD保护电路是****双肖特基二极管**，**将****一个偏置到地，另一个偏置到输入电压轨****。与TVS方法不同的地方在于，在正电压尖峰期间，功率会转储到正轨，而不是接地。这意味着必须有一个低阻抗的配电网络。如下图：

两个肖特基二极管 D18 和 D19，分别偏置到地和正电压轨。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pLbvY5lriaIkcYTRyMcobqiabPxgzcKfKJyJ7JFNosL53LraBRxicBaRXQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

两个肖特基二极管 D18 和 D19，分别偏置到地和正电压轨

两个肖特基二极管 D18 和 D19，分别偏置到地和正电压轨。

**模拟**

****V15（电源）仍然具有相当大的 100R 串联电阻****。这意味着在正 ESD 事件中，浪涌基本上通过 D19，然后是 100R 电阻，然后通过接地完成电路。如下图所示，这并不是一个很好的保护方案。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2pjXiadibVRw2ialZ5NuciaXfL2TYicIaQW7unojDm2DvTHMQ8u93znZTibOuw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

用 100R 电源时，双 TVS 二极管基本上不提供保护

这里需要注意的另一个问题是****肖特基的反向额定电压，如果超过就会损坏二极管****。电压电源的阻抗更改为 1R，即可使双肖特基方法比 TVS 更有效。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics4UIbaUqqc4NQQ2icIVHibg2p1Yibly7M5tRuMBJHf5fvLE4NA8Ujg04FiayJicUXtShY86TnGqP6q6w4g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

电压电源的阻抗更改为 1R，可使双肖特基方法比 TVS 更有效。

考虑到大多数电源的阻抗远低于 1R，这种方案可能非常有效。如果使用这种方法，就必须要考虑到你的配电网络。

# **三、使用什么ESD保护电路**

这里主要是3个：**1、高速（USB/以太网/HDMI/等）**

此类的信号比较容易设计保护，因为对于每个信号在降级发生之前可以具有的最大总线电容有非常详细的规范。

通常我会****使用专为信号类型设计的TVS二极管，然后看串联是不是能接受，一般取值会大一点。******2、慢速接口，一般保护**

这些是离开PCB的通用引脚，一般用于LED或者开关或者触摸板。这里的关键是不会受到恶劣环境的影响。

对于这些，通常会****使用TVS+大串联电阻****，根据应用，可能会使用双肖特基方法，因为用这个还可以提供过流和短路保护。**3、慢接口，高防护**

与上面的非常相似，除了针对工业应用，或者故障是不可接受的情况，这样的话，****会在信号中添加一个额外电容，从而显著降低转换率。****

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源百芯EMA说DFM本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。