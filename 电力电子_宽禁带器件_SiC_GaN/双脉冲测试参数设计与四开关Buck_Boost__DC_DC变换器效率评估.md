# 双脉冲测试参数设计与四开关Buck-Boost DC-DC变换器效率评估


> 原文地址: [https://mp.weixin.qq.com/s/WDAiWRQmbInnuAFU\_zfCGw](https://mp.weixin.qq.com/s/WDAiWRQmbInnuAFU_zfCGw)

文章来源：电力与能源

作者：吴立，陶勇，张皓，唐啸，潘炼杰（国网上海市电力公司浦东供电公司，上海 200120）

摘 要：双脉冲测试作为功率半导体器件性能评估的主要手段，其试验参数的准确性直接影响着测试结果。 为了更准确地获得功率半导体器件的开关特性，以第三代宽禁带半导体器件 SiC MOSFET 为测试对象，详细介绍了双脉冲测试电路的工作原理，给出了双脉冲测试中脉冲宽度、脉冲间隔时间及电感电容等器件相关参数的选定方法。搭建了四开关 Buck\-Boost 硬件试验平台，根据所介绍的双脉冲参数选择方法，对 SiC MOSFET单管和双管并联两种不同工作模式进行了测试，根据所获得的开关损耗数值，估算了 Buck\-Boost变换器的功率损耗。通过不同输出功率下测试的转换效率，验证了双脉冲测试中参数设计的准确性。

关键词：SiC\-MOSFET；效率评估；双脉冲测试；开关特性；参数设计

在电力电子变换器设计过程中，高转换效率是主要目标之一。为了使所设计的变换器能够达到预期的效率目标，需要在系统设计前期对半导体器件的损耗进行估计，这主要包括开关损耗和导通损耗。通常情况下，设计人员会依据器件 厂家提供的数据手册中的开通和关断曲线进行开关损耗的估计，同时根据碳化硅金属氧化物半导体场效应晶体管（SiC MOSFET）的导通电阻进行导通损耗的估计。然而，数据手册中所提供的数据是基于一些特定测试电路得出的，与实际应用电路往往存在较大的差别。由于应用对象的不同以及印刷电路板（PCB）设计风格的差异，实际应用系统中的寄生参数与厂家提供数据时使用的硬件平台寄生参数差异较大。 

此外，驱动回路中的门极电阻也可能与 SiC MOSFET制造商测试时所用的门极电阻有所不同，这可能导致 SiC MOSFET 在实际应用中的动态特性与手册上的有所不同。这些因素会导致最终的效率估计不准确，甚至无法满足最终的目标要求。解决该问题的主要方法是设计一个与实际应用系统相似的硬件拓扑，并在该拓扑结构上加载与实际系统工作时相同的电压与电流参数， 对所用开关管进行双脉冲测试，通过分析测试得到的电压与电流曲线，便可以准确计算出开关管的功率损耗，从而完成变换器的效率估计。 

目前，已有众多文献对双脉冲测试进行了详细的分析和评估。文献［5\]研究了开通脉宽对功率半导体器件双脉冲测试的影响，发现绝缘栅双极型晶体管（IGBT）器件和MOSFET器件都存 在一个合理的开通脉宽范围，在此范围内器件的开关特性不受开通脉宽的影响。文献［6\-7\]分别提出了一种双脉冲测试方法，并对电感、电容等参数的取值进行了简单介绍。文献［8］阐述了双脉冲测试中可能会遇到的电压与电流源冲击问题及其避免方法 。 文 献［9］基 于电动汽车中使用的IGBT 模块进行测试，并分析了其关键特性。基于以上研究基础，文献［10］提出了一种基于样机平台的脉冲宽度调制（PWM）变流器现场双脉冲测试方法，大大降低了双脉冲测试中平台搭建的难度。文献［11\-12］设计了双脉冲测试电路，针对高压大功率三电平变流器，提出了一种四管动作的双脉冲测试方法，拓展了双脉冲测试的拓扑结构。 

双脉冲测试平台中需要设计的参数较多，不当的参数选择会导致开关管损耗评估不准确。现有文献虽然对拓扑结构、电感、电容等参数选择进行了介绍，但没有针对测试中脉冲宽度和脉冲间隔时间等参数进行详细设计，往往依赖于经验值进行测试。特别是在两次脉冲宽度和间隔时间的设定上，大多数测试人员均根据经验直接设置时间值，这严重影响了效率估计的准确性。 

针对这一问题 ，本文搭建基于双SiC MOSFET并联的四开关Buck\-Boost DC\-DC变换器硬件拓扑，旨在以效率估计为目标，设计双脉冲测试平台，给出脉冲宽度和间隔时间设置的数学模型，并分别以单管SiC MOSFET和双管并联SiC MOSFET为对象进行试验，获得不同工作模式下SiC MOSFET的功率损耗，构建开关损耗模型。最终通过测试四开关Buck\-Boost 变换器的转换效率，验证所提出的损耗模型和理论方法的准确性。

1.双脉冲测试原理

在实际应用中，开关管通常以互补的半桥电路形式出现在变换器中。因此，在开关管性能测试中以半桥电路为对象，已经发展出了一套完善的开关管开关特性评估方法，即双脉冲测试。双脉冲测试电路由母线电容CBus、被测开关管QL、陪测开关管QH、驱动电路和负载电感 L 组成，如图1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNTWQRgytq8B4y5pTOU2G6VGiaicCkBk7KFm36Kia6xRD8mQTgickicFAcG3Q/640?wx_fmt=png)

当 Q H 关断、QL 开通时，可以观察 QL 的开通特性，通过分析电压与电流波形，可以获得开通损耗。QL 导通后，其导通电流会迅速上升，当 QL 再次关断时，可以观察到电压尖峰大小和电流衰减过程，从而获得关断损耗。如果第二次开通 QL， 那么陪测开关管 QH 的体二极管就从导通状态切 换到截止状态，此时可以观察体二极管的反向恢复特性。根据实际需求，可以通过调整开关频率和占空比将电路调节到实际所需的电流条件下， 可以通过观察分析两个脉冲来SiC MOSFET的 开通、关断特性以及体二极管的导通、反向恢复特性等。

在测试中，向QL发送双脉冲驱动信号，就可以获得QL在指定电压Vset 和电流Iset下的开关特性，整个测试过程如图 2所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNfavyaib8Tqn132vkxcQw5MUOhZcM2bppcG99ibaG5lraEB4HUJUxL60A/640?wx_fmt=png)

在实际的双脉冲测试中，测试电压条件是通过设置母排电容的电压 UBus来实现的，而测试电流条件是通过合理设置负载电感的电感值L和开通脉宽（ton1 及ton2）来实现的。在 t0 时刻，驱动信号输出为逻辑高电平，SiC MOSFET开始导通，电 感电流和开关管导通电流也开始增加。此时，负 载电感L上的电压为电容电压UBus，电感产生一个线性电流 I。 

由于UBus与 L为外部参数，在系统设计之前即可确定，因此第一个脉宽的时间长度可以决定电流I的大小，其公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNygVupYaNRaCysGnGgx8aFkRS8NU2vtwWaJpWDxwPDUDnSgvZhj5N8A/640?wx_fmt=png)

在 t1 时刻 ，驱动器输出低电平 ，SiC MOSFET第一次关断，电感 L上的电流经过二极管续流并缓慢衰减 。 在该过程中观察SiC MOSFET的关断情况，可以获得关断过程中的尖峰电压，从而可以评估PCB的布局是否合理。 

在t2时刻 ，驱动器再次输出高电平 ，SiC MOSFET第二次开通。此时续流二极管产生反向恢复电流，在示波器上观察尖峰电流，可以获得被测管的反向恢复损耗情况。该开通过程是双脉冲测试中的重点关注对象，电流的形态直接影响 换流过程的许多重要指标。 

在t3 时刻 ，驱动器输出低电平 ，SiC MOSFET第二次关断。此时电流较大，由于主回路中母线杂散电感的存在，电压尖峰会产生关断。 实际系统的可靠性评估主要依据该过程中的电压与电流参数。

2.双脉冲测试参数的设定

双脉冲测试的目的是测试并评估器件在指定电压和电流条件下的开关特性。

2.1 脉宽时间

假设第一脉宽宽度为 τ1，被测开关管QL、储能电感L以及母线电容CBus 构成回路，负载电流 IL开始上升：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNan4sGhzPqmMib5SRmYuLxbH1fiaEF6p0r3ibn5XIibhtu7RaezPxWK5s6Q/640?wx_fmt=png)

式中Res ( L )——负载电感的等效串联电阻。 

在实际测试电路中，为了保证开关管两侧电压基本保持不变，在此假设CBus足够大，使得 VBus在测试的一个周期内恒等于Uset。同时，Res ( L ) 和SiC MOSFET的导通等效RDS 都很小 ，可将式（2）化简为式（3）：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNykDlAiaOWfrhiaBibWCVqVIYibjpcL7YfBN6fkUvrK0otL4p0fu1FsHUOg/640?wx_fmt=png)

其中，电压通过设置直流电压源输出电压给定，电流则通过第一个脉冲建立。为了较为准确地达到指定电流 Iset，第一脉冲宽度 τ1可以根据下式计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNWu50V1KY8zGDvcic5ibNG9Ex40Re9V0jiaz885B6M2zSiahFTEA0BnGyow/640?wx_fmt=png)

在t0 时刻，由于L的等效并联电容、陪测开关管内反向二极管的反向恢复以及结电容的影响，QL开通时会产生电流尖峰和振荡，需要等电流振荡结束后再关断QL，以免QL 在 t1 时刻关断造成影响。这是对 τ1时长下限的要求。在大多数实际测试中，该时长的经验值为 1～2 μs。需要注意的是，过长的 τ1会导致器件产生明显的升温，使得测试结果不能反映指定温度条件下器件的开关特性。这是对 τ1时长上限的要求。对于单管器件，τ1一般不超过10μs；对于大功率模块，τ1一般不超过50μs。具体参数设置需根据测试目标和外置环境结合式（4）确定。 

对于两个脉冲之间的间隔 τ2来说，当t1时刻QL关断后，需要关注QL的UGS从开始下降到UDS振荡结束的整个过程。这是对τ2 时长下限的要求，一般要求τ2只要大于1～2 μs 即可。另外，在脉冲间隔内，IL应按照式（5）缓慢下降，其中UF是陪测开关管QH体二极管的导通压降。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNIk5l3la84tWeia4Fjv5Jdic88ToL9A61M7zUsxkCEgqSD4varpxH6Ckg/640?wx_fmt=png)

但需注意，如果 IL下降幅度过大，与Iset 相差太大，则无法达到测试目的，也就无法满足QL在t2时刻开通的要求。这是对 τ2时长上限的要求。 该值与 τ1设计过程相似，具体值需要根据测试对象和电压、电流目标值进行设计。 

对于第二脉冲脉宽τ3，在t2时刻QL开通，在此过程中需要关注QL的UGS从开始上升到IDS 振荡结束的整个过程。这是对 τ3时长下限的要求，一 般 τ3时长只要大于1～2μs 即可。另外，在第二脉冲期间，IL按照式（3）上升，在 t3 时刻达到 IL（t3）。 当 IL（t2）与 I set相差不大时，IL（t3）为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNzFAOmw4gt0pzAp49ds2LQmOYIiampCZ3wribibdWBsPOQJVepicPqBFYyA/640?wx_fmt=png)

过高的IL（t3）会导致关断电压尖峰过高，当超过器件耐压时会导致器件损坏，或者不符合开关管实际应用的环境，这是对τ3上限的要求。为此， 可以要求τ3小于τ1的 0.1~0.2 倍，即 IL（t3）小于 Iset的1.5倍，并且越短越好。

2.2　负载电感

负载电感的主要限制为：在变换器中，负载电感需要足够大，远远大于主功率换流回路电感，以确保在开关过程中IL基本恒定，换流的高频电流通过主功率换流回路获得。在双脉冲测试中，负载电感也需要远远大于主功率换流回路的电感， 一般取值在几十微毫到几百微毫之间。 

第一脉宽τ1由式（4）确定，当Uset和 Iset 确定时，L 越大则τ1越大，L 越小则τ1越小，L的取值要满足τ1的上下限要求。 

在 t2 时刻，开通电流 IL（t2），其中 IL（t1）\=Iset， 脉冲间隔 IL 按照式（5）缓慢下降。双脉冲测试要求 IL（t2）与 Iset 相差不大，则在此前提下可由式（7） 计算负载电感最小值 Lmin，其中 Ki 为电流下降率， 一般取 0.5%～2.0%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvN6x8lY4YPcf3ISn6vhczwv7ehWleYlPlE9gaiazticZz3z3WmYVHxLoSw/640?wx_fmt=png)

为了避免关断电流过大，要求 IL（t3）小于等于Iset的 1.5倍，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvN3cTvQvE9y5kBDxzbM4KRU91iahx22lhfMEzOaSHriajoqhH4AkMAKwtA/640?wx_fmt=png)

2.3　母线电容

测试期间，需保持母线电压 UBus 恒等于Uset不变。由于第一脉冲期间直流电源响应速度较慢，IL由 CBus提供，导致 UBus会有一定程度的下降。 为了避免UBus 下降过多，CBus 需要满足式（2）所示要求 ，其中 Kv 为允许电压下降的比例 ，一般取0.5%～2.0%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNLf4Y7J7Z8kAtGQUibg81bAH9CicmTVbaJ3oM5GdNRWXgQr65WSVjDVlQ/640?wx_fmt=png)

由式（9）可知，负载电感的电感值 L 越大所需的母线电容的电容值 CBus也越大。然而，CBus过大会导致母线电容充放电时间延长，且在测试电路发生故障时可能产生的后果也更严重，故倾向选择更小的负载电感，以降低对 CBus的要求。

2.4　参数设定的方法

根据上述研究，脉宽时间、负载电感与母线电容之间是互相影响、互相制约的。例如，为了缩短 τ1、减小CBus，选择的L应越小越好，但为了确保IL（t2）贴近Iset，要求L不能过小。故在设计双脉冲测试参数时，需要通过仔细计算才能确定各个参数的取值范围。 

以下是一种确定这 3种参数的方法。 

第一步，设定 τ1，τ2，τ3的最小值，分别为 τ1，min，τ2，min，τ3，min，它们需满足下式条件：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNiaCQQzXQx0xHBpHZL2viaRpFV1apZNzCJK4ukztt3sqBR1EICEq9Eflw/640?wx_fmt=png)

第二步，预设τ1备选取值范围τ1，min~τ1，max，通过下式计算出对应的电感取值范围：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNjwgU9pyKbqtGbias2fArMFbEkhDHB71LUIDyOVv6WyYsGY528Y9lUwQ/640?wx_fmt=png)

根据L的范围计算确定电感等效串联电阻Res( L )的范围为Res ( L )，min~Res ( L )，max。  

第三步，预设τ2取值，将Res ( L )，min~Res ( L )，max代 入下式得到L的取值范围 Lτ2，min~Lτ2，max。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNLzt8jMZvDvtPrnCJe1Rg28doF2ZeDtFSHk0lGHmOZMs6sKX9lQibhsg/640?wx_fmt=png)

第四步，根据 Lτ1，min~Lτ1，max、Lτ2，min~Lτ2，max 与Res ( L )，min~Res ( L )，max 的对应关系确定L的取值范围，并选取最小值为 L。若 Lτ1，max < Lτ2，min，则返回第三步，减小τ2的预设值，直到确定L为止，若τ2减小到τ2，min还未确定L，则返回第二步增大τ1，max的预设值。 

第五步，根据下式确定 τ3 的值，最后按照式 （9）计算 CBus。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNo0L0aRIpwgYaWBwiaaeERlqOdrhe5pvZ9uayJW7Ue9BmNCKicUJg3K8w/640?wx_fmt=png)

3.试验验证

3.1　试验平台的搭建

Buck\-Boost 双向DC\-DC变换器硬件测试平 台如图 3 所示，右上角所示的DC\-DC变换器由两个Buck\-Boost并联而成。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNHE0fGla5KfEeZXYqibDFUTIdssdoBLeAiaL3ticU0ibHMhY90JmAHApCxA/640?wx_fmt=png)

为了测试SiC MOSFET 单管和双管并联的开关损耗，功率板上一个变换器中的开关管由一个SiC MOSFET构成，如图 3 中标注 3 的椭圆所示，另一变换器中的开关管由两个SiC MOSFET并联构成，如图 3 中标注 4 的椭圆所示。整个控制系统以TMS320F28335 为核心。图 3 右下角所示 电路为四开关Buck\-Boost 变换器拓扑结构，其两端完全对称，通过调整占空比可实现功率的双向 流动，详细控制方法见文献［13］，在此不再赘述。

3.2　参数设计与试验测试

通过前述公式，在指定电压Uset 为80V，指定电流Iset 为4 A，电流下降率 Ki 为1.5%，电压下降比例 Kv 为1%，负载电感的寄生电阻Res ( L )为 0.1~ 0.2 Ω 的条件下，计算出双脉冲测试参数应该为：τ1\=15 μs，τ 2\=4 μs，τ 3\=5 μs，L\=147 μH，CBus\= 21 μF。

在已搭建完成的双脉冲测试硬件试验平台的基础上，进行了单管双脉冲试验。SiC MOSFET单管双脉冲试验结果如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNkDm7FUMFs85mDMoyXG1iaEB1ZcLibbmdcjTVN9mV2gKbav3rIDpVEmfw/640?wx_fmt=png)

经过式（4），式（8），式（10）和式（14）的推导计算可知，以TMS320F28335 为核心的主控板输出 脉冲宽度分别为12μs和5μs、间隔时间为4μs 的脉冲信号。脉冲信号经过信号驱动板后传递给主功率板进行双脉冲测试。 

由试验波形可以看出，在t0时刻，DSP发出第一个脉冲信号，开关管饱和导通，电感电流线性上升；t1时刻，第一个脉冲信号结束，电感电流由上管的二极管续流，此电流非常小，几乎检测不到；t2时刻，第二个脉冲的上升沿到达，被测开关管再次导通，续流二极管进入反向恢复，反向恢复电流穿过开关管，电流探头上可以捕捉到这个电流；t3时刻， 开关管断开，由于母线杂散电感的存在，电压出现尖峰。经过计算，脉冲的冲击约占电压的80%， 在正常范围内。

SiC MOSFET双管双脉冲试验结果如图5所示。主控板输出的PWM信号经过信号驱动板后传递给主功率板，进行双管双脉冲测试。由图5可以看出：两个开关管的电流基本实现重合；随着脉冲时间的延长，电感电流偏差逐渐减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNkjDI4v3yzDzmmeNvteNuWXbx4NicK2cliay7Eakz4iaH4VkydGdI9OP4w/640?wx_fmt=png)

3.3　损耗计算

为了获得不同工作模式下SiC MOSFET的开关损耗，本文对单管和双管并联模式下SiC MOSFET的开关损耗进行了测试，结果见图 6。 图 6（a）和图 6（b）分别为单管SiC MOSFET在开通和关断情况下的电压电流波形与开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNXBHpVN7gQnDHXK6Ppxiadpj55VHg8GTibSABk2X0ugPHhDgCx5Htu1FQ/640?wx_fmt=png)

通过调节导通电流并记录不同电流下所测得 的损耗值，采用 Matlab 对其进行拟合，得到开关损耗与导通电流之间的关系，如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNBpKzNOT88eQXwiazGC4Sic7taHglLvXBcza8XibgMlKkgNHNVDiaNJia7WA/640?wx_fmt=png)

采用同样的方法对双管并联模式下的开关管进行损耗测试，所得损耗曲线与单管模式下的损耗曲线相似，相应的开通与关断损耗曲线如图 7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNpJOlAvdRQlO6eknZSLHibN896wniaCEbvGrVet9ibY0mojGHsNYQxRd7Q/640?wx_fmt=png)

同时，根据所选开关管的导通电阻，计算出开关的导通损耗 PCon\_Loss \= 0.086i²ds。因此系统总损耗 PLoss可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvNCia3Whic7B3Kfib1Ho2hAbVO9bOwRtBUCH3Hcp88pl1Ey1elFHPr7KPcg/640?wx_fmt=png)

根据式（16）可得2kW 工况下四开关 Buck-Boost变换器的传输效率如图8 所示。由图 8 可以看出，随着传输功率的增大，系统传输效率先增大后降低，最大转换效率为98.7%，估计值与实测值相近，表明所设计的双脉冲试验参数可用性较高。 微小的效率误差可能与系统主回路中的寄生电阻以及器件本身的非线性特性有关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslU346R2MgpI3n8tL2pgibvN2gLZJLQ0Aiaicnelu7KvnZlwLnic079EtkfCRJs4XWohnib9a5eibfOvWtw/640?wx_fmt=png)

4. 结语

（1）本文介绍了双脉冲测试在电力电子设备设计中的重要性，重点分析了脉冲间隔时间与两个脉冲宽度对测试结果的重要性，并给出了脉冲间隔和脉冲宽度设计的数学模型。同时搭建了基于SiC MOSFET的四开关Buck\-Boost变换器， 分别对单管和双管并联的工作模式进行了双脉冲测试，获得了其开关损耗模型。通过2kW测试平台对Buck\-Boost 变换器传输效率进行了测试，试验结果与理论估计曲线吻合较好，验证了所搭建 损耗模型的准确性。 

（2）本文设计的双脉冲参数选择数学模型可以为后续开关管性能测试奠定基础，具有较高的工程应用价值。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcIL9s9icLpA7sMkZl1yeAoJ70pnzOEicPx72xfic8DAlykF9ISV9UaWFibgtA/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILvxnibEN9LH8II05JCjJuHZ0eJDvLRlLLPec3gpN4R5gy7IAvkRDiatdw/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILQftGrb0sLqYcs0hr4mZSf1WbuCoQjtIcgLmencF3V61K3BE4h5A4Sw/640?wx_fmt=png)