# 碳化硅（SiC）MOSFET性能的优势与技术的难点，在新能源汽车和大功率电源应用的优势


> 原文地址: [https://mp.weixin.qq.com/s/bsIIv4zMV5LyaFvAgkPrEw](https://mp.weixin.qq.com/s/bsIIv4zMV5LyaFvAgkPrEw)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnlnOoicp9OfiasnGSdUiaianpiccwwaGSCyqyibGm0LPuWiccwpqCkmFDS7PNNa37jyvdhGDicI6ibrjmBPvw/640?wx_fmt=png)

**一、 碳化硅mos对比硅mos的11大优势**  

  

**1\. SiC器件的结构和特征**

  

Si材料中，越是高耐压器件其单位面积的导通电阻就越大（通常以耐压值的大概2-2.5次方的比例增加），因此600V以上的电压中主要采用IGBT（绝缘栅极双极型晶体管）。IGBT通过电导率调制，向漂移层内注入作为少数载流子的空穴，因此导通电阻比MOSFET还要小，但是同时由于少数载流子的积聚，在关断时会产生尾电流，从而造成极大的开关损耗。

  

SiC器件漂移层的阻抗比Si器件低，不需要进行电导率调制就能够以高频器件结构的MOSFET实现高耐压和低阻抗。而且MOSFET原理上不产生尾电流，所以用SiC MOSFET替代IGBT时，能够明显地减少开关损耗，并且实现散热部件的小型化。另外，SiC MOSFET能够在IGBT不能工作的高频条件下驱动，从而也可以实现被动器件的小型化。与600V～1200V的Si MOSFET相比，SiC MOSFET的优势在于芯片面积小（可以实现小型封装），而且体二极管的恢复损耗非常小。

  

  

**2\. SiC Mosfet的导通电阻**

SiC 的绝缘击穿场强是Si 的10倍，所以能够以低阻抗、薄厚度的漂移层实现高耐压。因此，在相同的耐压值的情况下，SiC 可以得到标准化导通电阻（单位面积导通电阻）更低的器件。例如900V时，SiC‐MOSFET 的芯片尺寸只需要Si‐MOSFET 的35分之1、SJ‐MOSFET 的10分之1，就可以实现相同的导通电阻。不仅能够以小封装实现低导通电阻，而且能够使门极电荷量Qg、结电容也变小。目前SiC 器件能够以很低的导通电阻轻松实现1700V以上的耐压。因此，没有必要再采用IGBT这种双极型器件结构（导通电阻变低，则开关速度变慢) ，就可以实现低导通电阻、高耐压、快速开关等各优点兼备的器件。  

  

  

**3\. Vd-Id特性**

  

SiC‐MOSFET 与IGBT 不同，不存在开启电压，所以从小电流到大电流的宽电流范围内都能够实现低导通损耗。而Si MOSFET 在150℃时导通电阻上升为室温条件下的2 倍以上，与Si MOSFET 不同，SiC MOSFET的上升率比较低，因此易于热设计，且高温下的导通电阻也很低。

  

  

**4\. 驱动门极电压和导通电阻**

  

SiC‐MOSFET 的漂移层阻抗比Si MOSFET 低，但是另一方面，按照现在的技术水平，SiC MOSFET的MOS 沟道部分的迁移率比较低，所以沟道部的阻抗比Si 器件要高。因此，越高的门极电压，可以得到越低的导通电阻（Vgs=20V 以上则逐渐饱和）。如果使用一般IGBT 和Si MOSFET 使用的驱动电压Vgs=10～15V 的话，不能发挥出SiC 本来的低导通电阻的性能，所以为了得到充分的低导通电阻，推荐使用Vgs=18V左右进行驱动。Vgs=13V 以下的话，有可能发生热失控，请注意不要使用。

  

**5\. Vg-Id特性**

  

SiC MOSFET 的阈值电压在数mA 的情况下定义的话，与Si‐MOSFET 相当，室温下大约3V（常闭）。但是，如果流通几个安培电流的话，需要的门极电压在室温下约为8V 以上，所以可以认为针对误触发的耐性与IGBT 相当。温度越高，阈值电压越低。

  

  

**6\. Turn-On特性**

  

SiC‐MOSFET 的Turn‐on 速度与Si IGBT 和Si MOSFET 相当，大约几十ns。但是在感性负载开关的情况下，由通往上臂二极管的回流产生的恢复电流也流过下臂，由于各二极管性能的偏差，从而产生很大的损耗。Si FRD 和Si MOSFET 中的体二极管的通常恢复电流非常大，会产生很大的损耗，而且在高温下该损耗有进一步增大的趋势。与此相反，SiC二极管不受温度影响，可以快速恢复，SiC MOSFET 的体二极管虽然Vf 较高但是与碳化硅二极管相同，具有相当的快速恢复性能。通过这些快速恢复性能，可以减少Turn‐on 损耗（Eon）好几成。开关速度极大程度上决定于外部的门极电阻Rg。为了实现快速动作，推荐使用几Ω左右的低阻值门极电阻。另外还需要考虑到浪涌电压，选择合适的门极电阻。

  

  

**7\. Turn-Off特性**

  

SiC MOSFET 的最大特点是原理上不会产生如IGBT中经常见到的尾电流。SiC 即使在1200V 以上的耐压值时也可以采用快速的MOSFET 结构，所以，与IGBT 相比，Turn‐off 损耗（Eoff）可以减少约90%，有利于电路的节能和散热设备的简化、小型化。而且，IGBT 的尾电流会随着温度的升高而增大，而SiC‐MOSFET 几乎不受温度的影响。另外，由于较大的开关损耗引起的发热会致使结点温度（Tj）超过额定值，所以IGBT 通常不能在20KHz 以上的高频区域内使用，但SiC MOSFET 由于Eoff 很小，所以可以进行50KHz 以上的高频开关动作。通过高频化，可以使滤波器等被动器件小型化。

  

**8\. 内部门极电阻**

  

芯片内部门极电阻与门极电极材料的薄层阻抗和芯片尺寸相关。如果是相同的设计，芯片内部门极电阻与芯片尺寸呈反比例，芯片尺寸越小，门极电阻越大。SiC MOSFET 的芯片尺寸比Si 器件小，虽然结电容更小，但是同时门极电阻也就更大。

  

  

**9\. 门极驱动电路**

  

SiC MOSFET 是一种易于驱动、驱动功率较少的常闭型、电压驱动型的开关器件。基本的驱动方法和IGBT 以及Si MOSFET一样。推荐的驱动门极电压，ON 侧时为+18V 左右，OFF 侧时为0V。在要求高抗干扰性和快速开关的情况下，也可以施加‐3～‐5V 左右的负电压。当驱动大电流器件和功率模块时，推荐采用缓冲电路。

  

**10\. 体二极管的 Vf 和逆向导通**

  

与Si MOSFET 一样，SiC MOSFET体内也存在因PN结而形成的体二极管（寄生二极管）。但是由于SiC的带隙是Si的3倍，所以SiC MOSFET的PN二极管的开启电压大概是3V左右，比较大，而且正向压降（Vf）也比较高。以往，当Si MOSFET外置回流用的快速二极管时，由于体二极管和外置二极管的Vf大小相等，为了防止朝向恢复慢的体二极管侧回流，必须在MOSFET上串联低电压阻断二极管，这样的话，既增加了器件数量，也使导通损耗进一步恶化。然而，SiC MOSFET的体二极管的Vf 比回流用的快速二极管的Vf还要高出很多，所以当逆向并联外置二极管时，不需要串联低压阻断二极管。

  

体二极管的Vf比较高，这一问题可以通过如同整流一样向门极输入导通信号使其逆向导通来降低。逆变驱动时，回流侧的臂上多数是在死区时间结束之后输入门极导通信号（请确认使用中的CPU的动作），体二极管的通电只在死区时间期间发生，之后基本上是经由沟道逆向流过。因此，即使在只由MOSFET（无逆向并联的SBD）构成的桥式电路中，体二极管的Vf较高也没有问题。

  

**11\. 体二极管的恢复特性**

  

SiC MOSFET的体二极管虽然是PN 二极管，但是少数载流子寿命较短，所以基本上没有出现少数载流子的积聚效果，与SBD 一样具有超快速恢复性能（几十ns）。因此Si MOSFET的体二极管与IGBT外置的FRD相比，其恢复损耗可以减少到IGBT外置的FRD的几分之一到几十分之一。体二极管的恢复时间与SBD相同，是恒定的，不受正向输入电流If的影响（dI/dt 恒定的情况下）。在逆变器应用中，即使只由MOSFET 构成桥式电路，也能够实现非常小的恢复损耗，同时还预期可以减少因恢复电流而产生的噪音，达到降噪。

  

从以上这些方面就能看出SiC MOSFET相对于Si IGBT和MOSFET的优势所在。

  

**二、碳化硅mos的技术难点**

  

综合各种报道，难题不在芯片的原理设计，特别是芯片结构设计解决好并不难。难在实现芯片结构的制作工艺。当然对于用户最直接的原因是，SiC MOSFET 的价格相对较高。

  

举例如下：

  

1\. 掺杂工艺有特殊要求。如用扩散方法进行惨杂，碳化硅扩散温度远高于硅，此时掩蔽用的SiO2层已失去了掩蔽作用，而且碳化硅本身在这样的高温下也不稳定，因此不宜采用扩散法掺杂，而要用离子注入掺杂。如果p型离子注入的杂质使用铝。由于铝原子比碳原子大得多，注入对晶格的损伤和杂质处于未激活状态的情况都比较严重，往往要在相当高的衬底温度下进行，并在更高的温度下退火。这样就带来了晶片表面碳化硅分解、硅原子升华的问题。目前，p型离子注入的问题还比较多，从杂质选择到退火温度的一系列工艺参数都还需要优化。

  

2\. 欧姆接触的制作。欧姆接触是器件电极引出十分重要的一项工艺。在碳化硅晶片上制造金属电极，要求接触电阻低于10- 5Ωcm2，电极材料用Ni和Al可以达到，但在100℃ 以上时热稳定性较差。采用Al/Ni/W/Au复合电极可以把热稳定性提高到600℃、100h ，不过其接触比电阻高达10- 3Ωcm2 。所以要形成好的碳化硅的欧姆接触比较难。

  

3\. 配套材料的耐温。碳化硅芯片可在600℃温度下工作，但与其配套的材料就不见得能耐此高温。例如，电极材料、焊料、外壳、绝缘材料等都限制了工作温度的提高。

以上仅举数例，不是全部。还有一些工艺问题还没有理想的解决办法，如碳化硅半导体表面挖槽工艺、终端钝化工艺、栅氧层的界面态对碳化硅MOSFET器件的长期稳定性影响方面，行业中还有没有达成一致的结论等，影响了碳化硅功率器件的快速发展。

**三. SiC应对挑战**

  

幸运的是，SiC提供了一条通向更高能效以及提高相关性能的途径。在结构和性能上，SiCMOSFET与主流的纯硅MOSFET有何不同？简而言之，SiCMOSFET是在SiC n +衬底上加一个SiC n掺杂外延层（又称漂移层），如图2所示。关键参数导通电阻RDS(ON)在很大程度上取决于源极/基极和漂移层之间的沟道电阻RDrift。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/qgtBObnhjqoGIYpA0M4Pu6CjJBGXZia438QKPpicXmgdafuYnibpKoKrBKTTom1SGLoq0ZOaPuglr44pfWqDaWF9Q/640?wx_fmt=jpeg "点击进入看图评论")

图2：不同于纯硅MOSFET，SiC MOSFET在n +型SiC衬底上面制作一个碳化硅外延（漂移）层，源极和栅极置于SiC漂移层顶部。

  

当RDrift值给定，结温是25?C时，SiC晶体管裸片实际面积是硅超结晶体管裸片面积的几分之一，如果使两个管子的芯片面积相同，那么SiC晶体管的性能要高出很多。另一个比较SiC和硅的方法是用大家熟悉的品质因数(FOM)，即RDS(ON)×芯片面积（品质因数越低越好）。在1200V阻断电压下，的SiC MOSFET的FOM值很小，约为市面上最好的高压硅MOSFET（900V超结管）的十分之一。

  

与牵引逆变器常用的硅基IGBT相比，SiC MOSFET主要有以下优点：

  

■ 开关损耗更低，在中小功率时，导通损耗更低；

  

■ 没有IGBT那样的PN结电压降；

  

■ SiC器件具有坚固、快速的本征二极管，无需外部二极管；该本征二极管的恢复电荷极小，几乎可以忽略不计；

  

■ 工作温度更高(200?C)，从而降低了冷却要求和散热要求，同时提高了可靠性；

  

■ 在能效相同的条件下，开关频率是IGBT的4倍，由于无源器件和外部元件少，重量、尺寸和成本更低。

  

**四. 驱动器**

  

经验丰富的工程师知道，功率器件只是整个系统的众多重要组件之一。要想使设计变得可靠、高效，有成本效益，还需要给MOSFET选择适合的驱动器。适合的驱动器是根据目标MOSFET及其负载特有的电流变化率、电压值和时序限制而专门设计的驱动器。由于硅基MOSFET技术已经成熟，市面上有很多品牌的标准驱动器，保证驱动器/ MOSFET组合正常工作。

  

因此，人们关心SiC MOSFET驱动的难易程度，更关心驱动器在市场上是否有售，这是很正常的事情。令人兴奋的是，驱动SiCMOSFET几乎与驱动硅基MOSFET一样容易，驱动一个80mΩ器件，只需要20V栅-源电压、最大约2A的驱动电流。因此，在许多情况下都可以使用简单标准的栅极驱动器。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnlnOoicp9OfiasnGSdUiaianpicHTxnQNhAv5S0YvtaWGy2KiamQpCp6JYJcQAyrviaSYmQ0vBmuOib5fggQ/640?wx_fmt=png)

  

  

制造工艺的进步有时并不能保证新技术一定会产业化和大规模应用，而SiCMOSFET却是一个例外。目前，SiCMOSFET已经大批量生产，并被混动汽车和电动汽车采用，在能效、性能和工作条件方面取得切实的成效，并传导到电路级和系统级。

  

用混动汽车和电动汽车的80kW牵引电机逆变器电源模块做了一个SIC MOSFET与硅IGBT的对比测试，结果显示，在许多关键参数方面，650V SIC MOSFET远胜硅IGBT。这个三相逆变器模块采用双极性PWM控制拓扑，具有同步整流模式。两种器件都是按照结温小于绝对最大额定结温80％确定器件尺寸。硅 IGBT方案使用4个并联的650V/200A IGBT和额定值相同的相关续流硅二极管；基于SIC MOSFET的方案设计采用7个并联的650V/100A SiC MOSFET，未使用任何外部二极管（只用本征二极管）；额定峰值功率480Arms（10秒），正常负载230Arms。其它工作条件是：

  

■ 直流电路电压：400Vdc

  

■ 开关频率：16kHz

  

■ SiCVgs电压 +20V/-5V，IGBT Vge电压 ±15V

  

■ 冷却液温度：85℃

  

■ RthJ-C(IGBT-die)=0.4℃/W; RthJ-C(SiC-die)=1.25℃/W

  

■ 在任何条件下，Tj ≤ 80% ×Tjmax℃

  

下表列出了在额定峰值功率下的典型功率损耗：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/qgtBObnhjqoGIYpA0M4Pu6CjJBGXZia43NPz9MjpAfibePFJr17wKibOFCxSGPN26us1sm4OnaU7ibVyWoM0cOB0yA/640?wx_fmt=jpeg "点击进入看图评论")

  

注意到，SiC MOSFET与硅基IGBT对比，几乎所有功率损耗参数都有明显改善。当并联MOSFET时，所产生的RDS(ON)导通电阻除以MOSFET的个数，致使导通损耗接近零，因此，SiC MOSFET的导通损耗低于IGBT。相反，当并联IGBT时，所产生的VCE(SAT)电压不会线性下降，并且最小导通电压降是限制在大约0.8至1 V范围内。

不难看出，在整个负载范围内，基于SiC的MOSFET解决方案的功率损耗低很多。由于导通电压降较低，这些MOSFET在100％负载时的导通损耗也从125 W降低到55 W，如图3a和3b所示。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/qgtBObnhjqoGIYpA0M4Pu6CjJBGXZia43A58gsPUfkL255j6ibujwNb3libBUobib18bNeOD08sJF0JrvL3OILmkag/640?wx_fmt=jpeg "点击进入看图评论")

图4：a）在整个负载范围内，基于SiC的设计（红线）的功耗比硅基IGBT(蓝线)低很多（左图）。b）SiC系统（红线）的能效明显高于纯硅方案（蓝线），在较低的负载比时尤为显着。

  

在低负载时，SiC器件的能效比硅IGBT高达3％；在整个负载范围内，总能效高至少 1％。尽管1％看起来似乎不高，但对于这个功率等级，1％代表了很高的功耗、耗散功率和散热量。工程师知道，高温是持久性能和可靠性的大敌。此外，高能效还能延长电动汽车续航里程，这是汽车制造商和消费者比较看重的价值主张。在16 kHz开关频率下，比较SiC与IGBT的结温，从低负载到满负载，显然SiC是赢家，两者的冷却液温度均为85?C，如图4所示。数据表明，因为损耗高，IGBT冷却系统的效率必须更高。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/qgtBObnhjqoGIYpA0M4Pu6CjJBGXZia43GrhS1ceOBa32xFjVQTHg7V9LuquaXUbvaaT9uKELliagA9Wao2iaLSuw/640?wx_fmt=jpeg "点击进入看图评论")

图5：结温决定开关频率高低、可靠性以及其它性能；在可靠性方面，SiC解决方案（红线）优于硅解决方案（蓝线），直到100％负载仍然保持较低的Δ(Tj-Tfluid)温差。

  

SiC器件结温几乎在整个开关频率范围内都处于较低的水平，如图5所示，甚至开关频率低至8 kHz时，温度也比IGBT低，硅基IGBT在46 kHz时已超出额定结温范围。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/qgtBObnhjqoGIYpA0M4Pu6CjJBGXZia43Yksx8RuffUrqjYNeM9uyDKw1J2K7tGRFGWdLRuA5ztN8M5Ce8Iy1jg/640?wx_fmt=jpeg "点击进入看图评论")

图6：在整个开关频率范围内，结温低也是SiC器件的主要优势；这两个方案在8 kHz时结温大致相同，但之后SiC（红线）逐渐优于Si（蓝线），后者随着开关频率的提高而大幅增加。

  

在峰值功率脉冲条件下，SiC MOSFET导通损耗高于IGBT，为使结温保持在最高结温以下（通常为200?C的Tjmax的80％），我们限定SiC MOSFET的尺寸，这时SiC MOSFET具有以下优势：

  

■ 芯片面积小，适合更紧凑的方案；

  

■ 中低负载功率损耗低很多；

  

■ 电池续航时间更长，延长汽车续航里程；

  

■ 满载时损耗更低，适用于更小的冷却方案；

  

■ 在整个负载范围内，结温Tj和冷却液温度Tfluid的温差小，可提高可靠性。

  

这些特性和优点为用户带来了切实的好处，例如，能效提高至少1％（损耗降低75％）；逆变器侧冷却系统更小、更轻（减少约80％）；电源模块更小、更轻（减少50％）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnlnOoicp9OfiasnGSdUiaianpicdfJic66gaaxOX6apQ6UiccJicJsAkpFVibQm4ARfzEx2mqZ8WTSZl5Yatw/640?wx_fmt=jpeg)

  

  

**五. 成本考量**

  

当讨论技术进步及其带来的好处时，不考虑成本因素的讨论都是片面的。目前，SiCMOSFET的成本是硅IGBT的4-5倍，不过，SiCMOSFET在物料清单、冷却系统和能耗方面的节省，降低了系统总成本，通常可以抵消掉这些基础组件的成本差距。在未来2-5年，随着行业转向大直径晶圆，已经开始转型，这一价差应该会降至3倍甚至2.5倍，品质因数RDSON × 面积也将得到改善，产量将会提高。从长远看，未来5-10年，随着这些参数改进，成本将会继续降低。

  

SiC功率开关带来了改进性能的希望，同时也将这些希望变成了现实，在应用和安装中几乎不存在设计折衷问题。随着汽车厂商加紧研发混动汽车、电动汽车和许多相关电源模块，以及其它以大功率电机为中心的应用，SiC功率开关可以在成功设计中发挥重要作用，即使改进步伐很小，也会为系统级带来巨大的进步。

注：以上资料转载网络，仅供参考。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnlnOoicp9OfiasnGSdUiaianpiclVz9ibDuCcx36ppmsK13ShK8l1SVAGsw9naeLyjnSVaaYYNjJIsOAKg/640?wx_fmt=jpeg)

       **深圳爱仕特科技有限公司专注于第三代半导体碳化硅（SiC） MOS 芯片设计、功率模块的生产制造及其基于 SiC 器件在新能源领域 的应用系统开发方案，由武岳峰资本及国内多家知名投资机构投资数 亿元，中国科学院及清华大学博士领军，数十位半导体行业资深人士 共同组建的高科技技术创新性企业。公司拥有全自主知识产权，已申请 25 项专利技术，采用 6 英寸技术已量产 20 余款 650V~3300V 全系列 SiC MOSFET 产品，并建立起车规级的 SiC MOS 模块工厂，可为客户提供整套应用解决方案。产品已大量出口欧美客户。**

      **深圳爱仕特科技，产品已通过IATF16949和ISO9001质量体系双重认证。产品已得到：美国通用 ，厦门金龙， 吉利，长安，BYD等车企的认可和支持，碳化硅MOSFET和模块的国产化，迈向新的征程。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnlnOoicp9OfiasnGSdUiaianpicdlbn3xIG9bkmia3wws6Ph5qsWYuhSeguoia3M8YYZqNTM8rWsNVKbMlg/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnNNjsLUL91gYPM0MD6aQl4HvfsjglK8EHDp02iaXibUiabYdZ2qicIFRzpocppypRIp7j4sf13yBdtWA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnNNjsLUL91gYPM0MD6aQl4qAohKyDCy4TnOUI6icQib6cYnic5BvkwkYbvQaboHiaWjDpW4WiaBASbTyg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnNNjsLUL91gYPM0MD6aQl4DK1fqWXpED1WhMDicwNviab32fDsQzFq8l0EhrLAhIAMDJWqhryHWduw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnNNjsLUL91gYPM0MD6aQl4EEqfbFCSiaq91m05nPdYvSpBSXkAzduFia0LzCdxJ8W0ND8LUNGFoQzg/640?wx_fmt=png)