# 改善SiC MOSFET开关性能的变电压有源驱动电路研究


> 原文地址: [https://mp.weixin.qq.com/s/wI5MhjuptDs\_EK3cdRn3RQ](https://mp.weixin.qq.com/s/wI5MhjuptDs_EK3cdRn3RQ)

文章来源：太阳能学报

作者：李先允，卢 乙，倪喜军，王书征，张 宇，唐昕杰（南京工程学院电气工程学院，南京 211167）

摘 要：碳化硅（silicon carbide，SiC）金属氧化物半导体场效应管（metal oxide semiconductor field effect transistor，MOSFET）开关过程中存在电流、电压过冲和振荡问题，这会产生额外的损耗，甚至造成器件损坏。文章提出一种用于SiC MOSFET的变电压有源驱动电路，能在开通电流上升和关断电流下降阶段改变器件驱动电压，从而抑制器件开关过程中的电流、电压过冲和振荡，实验结果表明，与传统驱动电路相比，所提出的变电压有源驱动电路，能有效抑制器件开关过程中的电流、电压过冲和振荡，最后将其应用于光伏变压器中，验证其实用性。

关键词：碳化硅金属氧化物半导体场效应管（SiC MOSFET）；有源驱动；过冲；振荡；光伏变压器

0. 引 言

由于材料特性的限制，经过30年发展的Si器件已接近其物理极限，以碳化硅金属氧化物半导体场效应管（SiC MOSFET）为代表的第3代宽禁带器件，具有更低的导通电阻、更低的开关损耗和更高的开关速度，正逐渐替代Si MOSFET，被广泛应用于新能源发电、电动汽车和铁道交通的领域。但是，SiC MOSFET应用电路回路存在的寄生参数及其过快开关速度所产生的高dv/dt 和 di/dt，会使器件在开关过程中发生电流、电压过冲和振荡，这些过冲和振荡不仅会在电路回路中产生额外的损耗，甚至会超过器件的击穿电压和体二极管的最大恢复电流，直接造成器件损坏。

目前研究人员主要通过改进器件的驱动电路即使用有源驱动电路（active gate driver，AGD）来解决上述问题。文献［7］设计一种可调节驱动电阻的有源驱动电路，通过调节SiC MOSFET的驱动电阻阻值，来改变器件的导通和关断速度，可有效抑制电流、电压过冲和振荡，但该方法需电路回路中存在适量的寄生参数，且控制方法较为复杂；文献［8］设计了一款具有保护功能的变电阻有源驱动电路，不仅能抑制器件开关过程中电流、电压过冲和振荡，还同时具有短路保护功能，但电路中包含CPLD、温度传感器和光电传感器等元器件，增加了电路复杂程度和搭建成本，不适宜推广使用；文献［9］提出一种能在器件开关过程中向器件的栅极注入电流的有源驱动电路，实验结果表明，该文献所提出的电路能达到预期效果，但文献缺少对电路设计部分的介绍。

本文在对 SiC MOSFET 开关特性进行理论分析的基础上，针对器件电流、电压过冲和振荡的影响因素，设计一种变电压有源驱动电路，能在开通电流上升和关断电流下降阶段改变器件驱动电压，抑制电流、电压过冲和振荡，并搭建双脉冲测试平台进行实验验证，最后将其应用于光伏变压器中，验证其实用性。

1\. SiC MOSFET开关过程理论分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuic9vdA1ovWVgmnDEjsicibeKuvdgtsgCrOrOKPEqCW66fT5FYu06m6aNg/640?wx_fmt=png)

基于图1所示的测试电路对器件的开关特性进行研究，图中各参数含义如表1所示。为简化分析，定义器件的漏极寄生电感Ld\=Ld1+Ld2，源极寄生电感Ls\=Ls1+Ls2 ，输入电容Ciss\=Cgd+Cgs ，输出电容Coss \= Cgd+Cds。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcujvtzibmicuatg966axiaicDeuwD4F4gam4LkHqUzQ3Olw6UFeWfFTL3ic2A/640?wx_fmt=png)

1.1 开通过程理论分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuZYdLhmFLuWvib044POLJkIDnDiciapjwhja2jllZG47RVZcDupPiaGVR8g/640?wx_fmt=png)

图2为SiC MOSFET 开通过程波形图，开通过程共分为阶段 1~阶段 4 共 4 个阶段。

阶段 1［t0—t1］：t0时刻开始栅源极电压Vgs 缓慢上升至阈值电压Vth ，该阶段中，器件处于关断状态。

阶段2［t1—t2］：t1时刻，SiC MOSFET 开始导通，电感电流从续流二极管逐渐换流至SiC MOSFET，漏极电流 id 开始逐渐上升，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcutNjPWWaLDEjAF2mCxibfW4450ACibBfJDjvtqgUibGyfPCBSLQGjFrLyA/640?wx_fmt=png)

式中：gfs ——SiC MOSFET 的跨导。

当 id 上升至 iDD 时，续流二极管电流将反转极性并进入反向恢复过程，该过程持续时间 trr 如式（2）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuoqvicOuqn5K8XFHcCLLXUswxxzPYATjjoXIhTQicpkKHFsY5XVBnicjmg/640?wx_fmt=png)

式中：Qrr ——反向恢复电荷；S ——软度因子。

反向恢复电流尖峰 irr \- max 如式（3）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu559D9kljPGMfibFjjrge3Luv8dB01EPGAvVm2b4zRLeKKIKPavtcytg/640?wx_fmt=png)

式（3）中，did /dt 可表示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcurF16TjADnI74hqNTc7EKuV9OlugRVRnr4fYvM0cX97iaKDPFYNE71QA/640?wx_fmt=png)

该阶段内，id的变化会引起漏源极电压Vds的下降，由式（5）表达。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuQttFNVbYGCNcQqibeTBcyKCF8jpJFG19O5K0Yma52XZttPyloxsZFQg/640?wx_fmt=png)

阶段3［t2—t3］：器件进入米勒平台，Vgs保持为米勒电压Vmiller不变，Vds逐渐下降至零并保持不变。

阶段4［t3—t4］：Vds和id保持不变，Vgs持续上升至 t4 时刻上升至Vcc并保持不变。

1.2 关断过程理论分析

图3为 SiC MOSFET 关断过程示意图，由图 3 可看出，SiC MOSFET 关断过程可分为阶段 5~阶段 8 共 4 个阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuhFP36sqPicqaMvtXkgZzwE8ENK5FicxVrTpPcDp6hiaS9626O6MQBR93Q/640?wx_fmt=png)

阶段 5［t5—t6］：t5 时刻，VGG从Vcc阶跃至Vee，Vgs缓慢下降并通过 RG 为Ciss 放电。

阶段6［t6—t7］：Vds开始上升，并于 t7 时刻升至Vdc ，由式（5）近似表示，其余量均保持不变。

阶段 7［t7—t8］：该阶段内，Vgs和 ig持续下降，Vgs于t8时刻降至Vth ，t7时刻 id 持续下降直至 t8 时刻降为 0，id的下降会在寄生电感上引起压降，导致Vds发生过冲，由式（5）可知该电压过冲值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuIYqvEE7e5gOUjlDJzfEia5Q7TiazDiar4Bp2MV2tAZ7ptia4lIXfuvwLFQ/640?wx_fmt=png)

阶段8［t8—t9］：该阶段内，Vgs由 Vth逐渐降至Vee ，由于线路中杂散电阻Rstray 的存在，Vds的过冲会形成衰减振荡，如式（7）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuibrBqLlJopPaRhIymg3DYib1jS3kBRquicCvh2xfuUvsclr0IqTevnCKA/640?wx_fmt=png)

综上，在 SiC MOSFET 开通过程中，由于续流二极管反向恢复电流的存在，器件漏极电流 id 会发生过冲和振荡，根据式（3）可知，通过减缓 id 的变化速度，可抑制 id 的过冲峰值，由式（4）可知，id 变化速度与驱动电压 VGG 相关，可通过减小VGG 的值来减缓 id 的变化速度，从而抑制器件开通过程漏极电流 id 的过冲峰值。同理，在SiC MOSFET 开关过程中，可通过在特定阶段减小驱动电压VGG 来抑制电流、电压过冲和振荡。

2. 变电压有源驱动电路

根据上节分析，本文提出一种变电压 SiC MOSFET 有源驱动电路，能在SiC MOSFET开关过程的特定阶段（阶段2和阶段7），拉低或抬高器件驱动电压VGG，减缓器件漏极电流 id变化速度，从而抑制器件开关过程中电流、电压过冲和振荡。图 4 所示为本文提出的变电压有源驱动电路原理图，下面对其工作原理进行详细描述：

1）驱动电路：前级为图腾柱式结构，由开关管Q1和开关管Q2构成，用于产生SiC MOSFET开关所需的驱动电压，后级为驱动电阻R1 。

2）电压采样电路：包括 2 个分压电阻和一个电容，用于在SiC MOSFET开关过程中采样器件栅源极电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuAfGhnrvibs5T1ibX1S5HRWXDfvZHbiaWpAsh75amzhNiatdcibl9uk0x9Ww/640?wx_fmt=png)

3）脉冲产生电路：包括 2 个电压比较器和一个逻辑门，由于实验条件限制，开通关断实验分别采用“与”逻辑门和“与非”逻辑门，通过比较参考电压和采样电压，在器件开关的特定阶段内产生触发信号，控制后级电路。由上节分析可知，理想情况下，脉冲产生电路应在SiC MOSFET开关过程的阶段2和阶段7内发出触发信号。

4）源极电压电路：为图腾柱式结构，由开关管Q3和开关管Q4构成，与SiC MOSFET源极相连。以开通过程为例介绍其工作原理：理想情况下，脉冲产生电路在开通过程阶段 2内发出触发信号，此时开关管Q3开通，Q4关断，驱动电压拉低至+15V，其他阶段内开关管Q3关断，Q4开通，驱动电压为+20V，由式（3）、式（4）可知，当驱动电压由+20V 降至+15V时，did /dt 减小，能抑制器件漏极电流 id 过冲和振荡。

由上述分析可知，Vref1和Vref2分别为电压比较器的下限参考电压和上限参考电压，当采样电压值介于2者之间时，逻辑门输出触发信号，本文中，Vref1取0.6V和 Vref2取4.4V。

3. 实验验证

根据图 1 所示测试电路，搭建如图 5 所示实验平台。共进行 4 组对比实验，各组实验条件对比如表 2 所示，实验结果如图 6 和图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu3tQiaWLMkbPxxIuDRf355xLnA26xZDtQd4KkG9vmyic1TewxOSIAXw9Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu9JVJ7nAeSf3OFDD11pKttpJ6uPupo6YKGnFAzK4wRwmPCJ1pfnuHBA/640?wx_fmt=png)

从图 6a、图 6b，图 7a、图 7b 可得出，与传统驱动电路相比，所提出的AGD 可有效抑制SiC MOSFET开关过程中的电流、电压过冲和振荡，其中，开通电流过冲峰值由17.1降至15.7A，振荡时间由270缩短至60ns，关断电压过冲峰值由530降至 490V，振荡时间由240缩短至80ns。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu5OxpkdQaIGRl2xnDg8ySxpgZqdVoKibftqvFayoXR9qQ13JzgGuW28Q/640?wx_fmt=png)

从图 6a、图 6c，图 7a、图 7c 可得出，增加RCD吸收电路对电流过冲无任何抑制效果，但对开通电流振荡和关断电压过冲和振荡有所抑制，其中，开通电流振荡时间由270缩短至190ns，关断电压过冲峰值由530降至510V，振荡时间由210缩短至140ns，但是关断过程中漏极电流 id下降速度变慢，增加了器件的关断损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcu7xQxrX8fD8WmMVlXYlXprdHIt8Jlb5gIUfjugfhtwf0HSmmOG3vfFw/640?wx_fmt=png)

从图 6a、图 6d，图 7a、图 7d 可得出，当驱动电阻阻值从20Ω 升至100Ω 时，电流、电压过冲和振荡现象得到抑制，开通电流过冲峰值由17.1降至15.6A，振荡时间由270ns 缩短至210ns，关断电压过冲峰值由530V降至500V，振荡时间由210ns 缩短至170ns，但是，驱动电阻阻值的增加同时也带来器件开关时间的增加，尤其是器件的关断时间。

图 8 为 4 种实验条件下器件的开关损耗，从图 8 可得出，所提出的AGD能在牺牲少量开关损耗的基础上，同时抑制开关电流、电压过冲和振荡，增加RCD吸收电路能抑制开通过程电流振荡和关断过程电压过冲和振荡，但是无法抑制开通过程电流过冲且会牺牲较多的开关损耗，增加驱动电阻阻值虽然能抑制开关电流、电压过冲和振荡，但牺牲的开关损耗最多。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuMtxANT7NCJmRdNPD24Bp3zPG1BicWa2jYv2LjRWDNFNeuVGN1tHh9Mw/640?wx_fmt=png)

4\. AGD在光伏变压器中的应用

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuFXRzUeoJVQjzb4NGvLQc3CxN1alZtDiaHY0PWptjv00C63j5W7SSfHQ/640?wx_fmt=png)

如图 9 所示为文献［11］提出的一款用于光伏电站的电力电子变压器，分别使用传统驱动电路和本文提出的SiC MOSFET变电压有源驱动电路进行开关器件驱动，对不同驱动条件下变压器的原边输出电压和副边电容两端的电压进行对比，仿真条件如表 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuXoNlNZyic1SiaU0ficQUsc71rkTcXBLI7iczricPdKJDadicvw0ypu3MTWmQ/640?wx_fmt=png)

图 10 所示为不同驱动电路条件下，变压器原边的输出电压V1的波形，从图10可得出，与传统驱动电路相比，采用有源驱动电路可有效抑制变压器原边输出电压过冲，电压过冲由152降至126V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuesiaUmibFRbq2DH0hQKkFFpYQ3rfIQHZNMmK4icn751oBUamNMicsviaTOA/640?wx_fmt=png)

图 11 所示分别为传统驱动电路和有源驱动电路条件下，副边电容两端的电压波形，从图 10 中可得出与传统驱动电路相比，所提出的有源驱动电路可明显减小副边电容两端电压纹波。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcuVDEj0Gw6pcbL274MslKXeagbicVsYcgbPRV02GYyibuFCDcmPmp51qsw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskuqQdsSLOFWKFBe6uhwdcudPMqJup7oMJKEYvcl429kaeDuAXWLP23VPqdibC13BiajHic8bZE94DBA/640?wx_fmt=png)

通过上述对比分析可知，使用有源驱动电路进行开关器件驱动，可减小光伏电站电力电子变压器原边输出电压过冲和副边输出电压纹波，从而减小了光伏电站电力电子变压器的使用损耗并增加了其可靠性。

5\. 结 论

本文针对 SiC MOSFET 开关过程中出现的电流、电压过冲和振荡问题，首先对 SiC MOSFET 开关过程进行详细分析，得出电流、电压过冲和振荡的影响因素，在此基础上提出一种变电压有源驱动电路，能在开通电流上升和关断电流下降阶段改变器件驱动电压，抑制电流、电压过冲和振荡，同时详细分析了电路中关键参数的选取方法，并搭建实验平台验证了所提有源驱动电路的有效性。实验结果表明，相较于传统的增加 RCD 吸收电路和增加驱动电阻阻值的方法，所提出的变电压有源驱动电路能够更有效地抑制器件开关过程中存在的电流、电压过冲，同时增加的开关损耗更少。最后将该有源驱动电路应用于光伏变压器中，与传统驱动电路相比，使用本文提出的有源驱动电路能明显减小变压器原边输出电压过冲和副边输出电压纹波，减小了光伏变压器的使用损耗并增加了其可靠性。

**说明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)