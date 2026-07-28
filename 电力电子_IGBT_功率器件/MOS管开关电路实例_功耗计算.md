# MOS管开关电路实例、功耗计算

原创 硬件笔记本 2024-02-13 12:36 四川

> 原文地址: [https://mp.weixin.qq.com/s/48A5EkcYB662TskXzrM5hg](https://mp.weixin.qq.com/s/48A5EkcYB662TskXzrM5hg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

   今天给大家分享的是：mos开关电路

  

## **一、mos管的工作区域**

mos管有三个工作区域：

-   截止区域
    
-   线性（欧姆）区域
    
-   饱和区域
    

当 VGS < VTH时，mos管工作在截止区域。在该区域中，mos管处于关断状态，因为在漏极和源极之间没有感应沟道。

  

对于要感应的沟道和mos管在线性或饱和区工作，VGS > VTH。

  

栅极 - 漏极偏置电压 VGD将决定mos管是处于线性区还是饱和区。在这两个区域中，mos管处于导通状态，但差异在线性区域，沟道是连续的，漏极电流与沟道电阻成正比。进入饱和区，当 VDS > VGS – VTH时，通道夹断，即它变宽导致恒定的漏极电流。

  

## **二、电子开关**

半导体开关是电子电路中的重要方面之一。像 BJT 或mos管 之类的半导体器件通常作为开关操作，即它们要么处于 ON 状态，要么处于 OFF 状态。

  

### 1、理想的开关特性

对于像mos管这样的半导体器件，要充当理想的开关，它必须具有以下特性：

-   在 ON 状态下，它可以承载的电流量不应有任何限制。
    
-   在关闭状态下，阻断电压不应有任何限制。
    
-   当器件处于 ON 状态时，应有零压降。
    
-   关态电阻应该是无限大的。
    
-   设备的运行速度没有限制。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqubMxibawVPyT4fFlUgoj8ia5nVG8cOjs38oKibQV3j90ZrDpIEXM8ch9g/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

理想的开关特性图

  

### 2、实用开关特性

但半导体开关并不是我们想的那么理想。在实际情况中，像mos管这样的半导体器件具有以下特性。

  

-   在开启状态期间，功率处理能力是有限的，即有限的传导电流。关断状态期间的阻断电压也受到限制。
    
-   有限的开启和关闭时间，这限制了开关速度。最大工作频率也受到限制。
    
-   当器件开启时，将存在一个有限的导通状态电阻，从而导致正向压降。还会有一个有限的关闭状态电阻，这会导致反向漏电流。
    
-   实际的开关在开启状态、关闭状态以及过渡状态（从开启到关闭或从关闭到开启）期间都会经历断电。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqwatYPMANialML7Yk2Ef5Z9T8IF7uovBrwyoubIJtm9HtHI265axy2aA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

实用开关特性图

  

## **四、mos开关电路实例1**

在下图所示的电路中，增强型 N 沟道mos管用于切换简单的灯“ON”和“OFF”（也可以是 LED）。

VGSV GS = +veV GS = 0V

  

如果灯的电阻负载要由电感负载（如线圈、螺线管或继电器）代替，则需要与负载并联一个“续流二极管”，以保护mos管免受任何自生反电动势的影响。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqrN2ib3KicosUf68mHuxy9452gicEljdWxnC8RynqIDUqaxbdiaToqMBLnw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos开关电路

  

上面显示了一个非常简单的电路，用于切换电阻负载，例如灯或 LED。但是，当使用功率mos管切换感性或容性负载时，需要某种形式的保护来防止mos管器件受损。驱动感性负载与驱动容性负载的效果相反。

  

例如，没有电荷的电容是短路的，导致高“涌入”电流，当我们从感性负载上移除电压时，随着磁场崩溃，我们会产生很大的反向电压，从而导致感应绕组中的感应反电动势。

  

## **五、mos开关电路功耗计算**

我们假设灯的额定电压为 6v、24W 并且完全“开启”，标准mos管的通道导通电阻 ( R DS(on) ) 值为 0.1ohms。计算mos管开关器件的功耗。

流过灯的电流计算如下：

   ![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqsgAnjNP1jnom52wiaic2xnZGLHO4EVnMYicsib3wsZmkRfNBFWl7Lk85DA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos开关电路电流计算公式

那么mos管中消耗的功率将为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqoYbGrATwlM0PicSvrc6lUMzlL0UicMIwBIhu5InQCRIdRG3TGOF12bCw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos管开关电路功耗计算公式

  

## **六、P沟道mos管开关电路实例**

在上图我们将 N 沟道 mos管视为开关，mos管放置在负载和地之间。这也允许 mos管的栅极驱动或开关信号以地为参考（低侧开关）。但在某些应用中，如果负载直接接地，我们需要使用 P 沟道增强型 mos管。如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqMflHf7NAorMWYl0A4s654hDlCFoXKHsNLBo6TmHbQPQoI6h77czIJw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

P沟道mos管开关电路

在这种情况下，mos管开关连接在负载和正电源轨（高端开关）之间，就像我们使用 PNP 晶体管一样。

  

在 P 沟道器件中，漏极电流的常规流动方向为负方向，因此施加负栅源电压以将晶体管“导通”。

  

这是因为 P 沟道mos管是“倒置”的，其源极端子连接到正电源+V DD。然后，当开关变为低电平时，mos管变为“ON”，当开关变为高电平时，mos管变为“OFF”。

  

P 沟道增强型mos管开关的这种倒置连接允许我们将其与 N 沟道增强型 mos管串联连接，以产生互补或 CMOS 开关器件，如上图所示为跨双电源。

  

## **七、mos开关电路实例2**

了解了mos管的工作原理及其工作区域，就很容易知道mos管是如何作为开关工作的。通过考虑一个简单的示例电路，将了解 mos管作为开关的操作。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19Fq2XngzryeryXuicTE8JoyFtIWibbWfCCcU3bb7awLYvXrWiceztstibC0Tg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos开关电路图

 这是一个简单的电路，其中 N 沟道增强模式mos管将打开或关闭灯。为了将mos管用作开关，它必须工作在截止和线性（或三极管）区域。

假设设备最初是关闭的。栅极和源极之间的电压，即 V GS适当地设为正值（从技术上讲，V GS > V TH），MOSFET 进入线性区域并且开关导通。这使灯打开。

如果输入栅极电压为 0V（或技术上 < V TH），则mos管进入截止状态并关闭。这反过来会使灯关闭。

  

## **八、mos开关电路实例3**

考虑一种情况，如果你想使用微控制器对 12W LED (12V @ 1A) 进行数字控制。当你按下连接到微控制器的按钮时，LED 应打开。当你再次按下相同的按钮时，LED 应熄灭。

很明显，你不能在微控制器的帮助下直接控制 LED。这个时候你就需要一种设备来弥合微控制器和 LED 之间的差距。

该设备应从微控制器接收控制信号（通常该信号的电压在微控制器的工作电压范围内，例如 5V）并为 LED 供电，在这种情况下来自 12V 电源。而这个设备是mos管，上述场景的设置如下电路所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19Fq9g7B9KlxEnXdzKNyDVh7GThglu2HMEtHaD3H0diavmkJhyofmTW4ung/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos开关电路图

当逻辑 1（假设为 5V 微控制器，逻辑 1 为 5V，逻辑 0 为 0V）提供给mos管的栅极时，它打开并允许漏极电流流动。结果，LED 亮起。

类似地，当 mos管的栅极为逻辑 0 时，它会关闭，进而关闭 LED。因此，你可以通过微控制器和mos管的组合对大功率设备进行数字控制。

  

## **九、mos管的功耗**

需要考虑的一个重要因素是mos管的功耗。考虑一个漏源电阻为 0.1Ω 的mos管。在上述情况下，即由 12V 电源驱动的 12W LED 将导致 1A 的漏极电流。

  

因此，mos管消耗的功率为 P = I 2 \* R = 1 \* 0.1 = 0.1W。

  

这看起来是一个比较低的值，但如果你使用相同的 mos管驱动电机，情况会略有不同。电机的启动电流（也称为浪涌电流）会非常高。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19Fq7u3NXsKfA8eBMOQIVBW97iaMrvqIHDdSHV2BkYfpKGRia37zEq67wu3Q/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos管驱动电路图

  

因此，即使 RDS 为 0.1Ω，电机启动期间消耗的功率仍会非常高，这可能会导致热过载。因此，RDS将是你的应用选择 mos管的关键参数。

  

此外，在驱动电机时，反电动势是设计电路时必须考虑的重要因素。使用mos管驱动电机的主要优点之一是输入 PWM 信号可用于平滑控制电机的速度。

  

## **十、mos开关电路实例4**

下图显示了一个使用 n 沟道增强型mos管作为开关的简单电路。此处，mos管的漏极端子 (D)通过漏极电阻RD连接到电源电压 V S ，而其源极端子 (S) 接地。此外，它在其栅极端子 (G) 处施加输入电压Vi ，而输出 Vo从其漏极汲取。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqSJ4rN4IW4ibtFzQYKJHtXTXFMQcibge0fibtplIsibw5ianwAUOSDic7xPJQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

mos开关电路图

现在考虑施加的 Vi为 0V 的情况，这意味着mos管的栅极端子未偏置。因此，mos管将关闭并在其截止区域中工作，在该区域中，它为电流提供了一个高阻抗路径，这使得 IDS几乎等于零。

  

结果，即使R D上的电压降也将变为零，因此输出电压V o将变得几乎等于V S。接下来，考虑施加的输入电压V i大于器件的阈值电压V T的情况。在这种情况下，mos管将开始导通.

  

如果 V提供的S大于器件的夹断电压 VP（通常会如此），则mos管开始在其饱和区工作。这进一步意味着该器件将为恒定 IDS的流动提供低电阻路径，几乎就像短路一样。结果，输出电压将被拉向低电压电平，理想情况下为零。

  

从上面的分析可以看出，输出电压在 VS和零之间变化，这取决于所提供的输入分别是小于还是大于 V T。因此，可以得出结论，当使mos管s在截止和饱和工作区域之间工作时，可以使mos管起电子开关的作用。

  

### 1、n 沟道耗尽型 mos管开关电路

与 n 沟道增强型mos管的情况类似，n 沟道耗尽型 mos管也可用于执行开关动作，如下图所示。这种电路的行为与上面的解释几乎相同，除了事实上，对于截止，栅极电压 VG需要设为负值，并且应小于 -V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqRUdom6ZJj2C9Gk8LDk9RibhvjPq5cwCdN3icicq4htU5EQj51TvVW6k4Q/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

n 沟道耗尽型 mos管开关电路图

  

### 2、p 沟道增强型mos管开关电路

下图显示了将 p 沟道增强型mos管用作开关的情况。这里可以看出，电源电压 VS施加在其源极端子 (S) 上，栅极端子提供输入电压 V i，而漏极端子通过电阻RD接地。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqFURyibV2FIcOGfgb6dQmVTV1H4DJ3zRuVIC8SYJlWBMB4nhDtfOzSPw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

p 沟道增强型mos管开关电路图

此外，从mos管的漏极端子通过RD获得电路V o的输出。在 p 型器件的情况下，传导电流将来自空穴，因此会从源极流向漏极 ISD，而不是从漏极流向源极（IDS) 与 n 型器件一样。

  

现在，让我们假设只有mos管的栅极电压 VG的输入电压变低。这会导致mos管开启并为电流提供低（几乎可以忽略不计）电阻路径。

  

结果，大电流流过器件，导致电阻 RD上的电压降很大。这反过来导致输出几乎等于电源电压V S。接下来，考虑V i变高的情况，即当Vi 将大于器件的阈值电压（这些器件的 V T将为负值）。在这种情况下mos管将关闭并为电流提供高阻抗路径。这导致几乎为零的电流导致输出端子处的电压几乎为零。

  

### 3、p 沟道耗尽型mos管开关电路

与此类似， p 沟道耗尽型mos管也可用于执行开关动作，如下图所示。该电路的工作原理与上述电路几乎相似，只是此处的截止区域为仅当 Vi = VG为正且超过器件的阈值电压时才会出现。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lfpPicicmdl1XuCNqZPGc19FqSnUUvLugRpd8DqwvFX5ZXcpeQXyQqzfW2sJU6ehDKWHusCs9ZaN2SA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

p 沟道耗尽型mos管开关电路图

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源百芯EMA。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。