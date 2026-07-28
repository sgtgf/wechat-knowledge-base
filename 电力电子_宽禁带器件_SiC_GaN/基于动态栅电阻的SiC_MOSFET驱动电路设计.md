# 基于动态栅电阻的SiC MOSFET驱动电路设计


> 原文地址: [https://mp.weixin.qq.com/s/vsC8vCTg6Zgh9QVTdHeLtg](https://mp.weixin.qq.com/s/vsC8vCTg6Zgh9QVTdHeLtg)

文章来源：电气传动

作者：吴磊，梁剑（西安中车永电电气有限公司，陕西 西安 710016）

摘要：SiC MOSFET 以其开关速度快、开关损耗小、热导率高等特点逐渐成为高功率密度电力电子应用场合的新宠，但是较快的开关速度导致器件开关应力以及振荡严重。提出了一种基于动态栅电阻的SiC MOSFET 驱动电路，其可以动态地通过调整栅极电阻来优化 SiC MOSFET 的开关特性，有效地解决了传统驱动电路不能兼顾损耗与开关应力的缺点。最后，利用1200V/300A SiC MOSFET（Cree）通过双脉冲实验证明了动态栅电阻驱动电路对优化开关特性具有明显优势。

关键词：碳化硅器件；驱动电路；关断过压；开关损耗

0\. 引言

电力电子应用的主要趋势是更高的功率密度、更高的效率和可靠性。因此，功率器件应该以较低损耗工作在较高的频率和温度下。而SiC作为新型半导体材料，其禁带宽度约为Si的3倍，且具有击穿电场强度高、热导率高和饱和电子漂移速度高等特点，一经诞生就引起了人们广泛的关注。碳化硅金属氧化物场效应晶体管（silicon carbide metal-oxide semiconductor field effect transistor，SiC MOSFET）作为一项成熟的产品，与同等级的硅绝缘栅双极型晶体管（silicon insulated gate bipolar transistor，Si IGBT）相比，其不存在拖尾电流，可以工作在更高的开关频率和环境温度，已被用于不同的应用领域，如开关电源、电动汽车、新能源发电和轨道交通等。

由于 SiC MOSFET 的开关特性好，对其进行研究成为电力电子行业的热点。但是随着 SiC MOSFET 开关速度的增加，开关损耗增加，同时也会出现由于较大的 di/dt 引起的电流与电压过冲现象。因此，为了更好地发挥 SiC MOSFET开关速度快的优势，有必要在设计驱动电路时克服传统驱动所存在的问题，以便后续进一步优化器件的性能和可靠性。

近几年，各公司均推出了商业化生产的 SiC MOSFET，很多学者对 SiC 器件的应用做了大量研究。一方面，可以通过优化印刷电路板布局来减小杂散电感。另一方面，也可以通过增加栅极电阻的大小解决上述提出的问题，但是开关效率会受到影响。加入缓冲电路也是解决方法之一，但附加的元件，例如电感或电容，会增加损耗并降低功率转换器的效率。此外，解决开关问题和提高SiC器件性能的方法都集中在栅极驱动器电路的设计上。

在此基础上，本文提出了一种动态栅电阻驱动电路，在 SiC MOSFET 开关的不同阶段，通过切换不同栅极电阻来优化其开关特性。动态栅电阻驱动克服了传统驱动不能兼顾开关速度和di/dt引起的电流与电压尖峰的缺点，从而优化了整个开关过程。

1\. SiC MOSFET开关过程分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvibfm4W71ics7PfY8CBrXzyUeaCk277VHbTbxUntjd9QiaibbwupeM46EXMg/640?wx_fmt=png&from=appmsg)

对于 SiC MOSFET 驱动电路设计，其开通与关断 2 个过程是设计关注的重点。以图 1 中的SiC MOSFET 典型的开关过程为例进行分析，其中开通和关断过程各自可以分为4个阶段。

1.1 开通过程

阶段 1（t0—t1）：在栅源极电压 Ugs上升到阈值电压 Uth之前，漏极电流 Id和漏源极电压 Uds均不发生变化，这段区间称为开通延迟时间阶段。

阶段2（t1—t2）：当Ugs＞Uth时，SiC MOSFET沟道被打开。漏极电流Id从零开始增大，t2时刻Id达到最大值。由于功率回路中寄生电感的存在，变化的电流会在寄生电感上产生压降，这使得 SiC MOSFET两端电压小于母线电压。在此阶段，电流斜率可以近似表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib3tZGBIfZ34U03GRiasHxbmu0SRqNkXHs2iaplxQhAElMZZH27SlvI1yw/640?wx_fmt=png&from=appmsg)

其中 Ciss\=Cgs+Cgd

式中：Ugs为施加在 SiC MOSFET 门\-源极间的电压；gfs为 SiC MOSFET 的跨导；Ugs（th）为 SiC MOSFET的开启阈值；Ciss为SiC MOSFET的输入电容；Cgd，Cgs分别为 SiC MOSFET 的门\-漏极电容、门-源极电容。

另一方面，栅极电流ig,on的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibYapwic5sjZX1qjRT1AtcOwDLf6pQCzNwribbBQUv4PmXFUSd3xH6lVuw/640?wx_fmt=png&from=appmsg)

式中：UMiller为SiC MOSFET的密勒电压；Rg，on为开通电阻。

阶段 3（t2—t3）：从 t2时刻开始，Uds开始下降，产生密勒电容效应，Ugs停止上升而出现平台，直到 Uds下降到通态压降时，该阶段结束。在此阶段，电压Uds的变化斜率为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibRU48ZT2IiaiaUhNppweO6TEhptiahb49cumDM9T67D7fXWm38wPB4JwXQ/640?wx_fmt=png&from=appmsg)

阶段 4（t3—t4）：该阶段为过驱动状态，SiC MOSFET 已经完全开通，Uds和 Id不再发生变化，栅源极电压 Ugs在 t4时刻升至给定正向驱动电压值Ug。

根据式（1）~ 式（3）可知，通过不同的驱动电阻Rg，on值控制电流与电压的变化斜率。

1.2 关断过程

SiC MOSFET的关断过程相比于开通是一个相反的过程。

阶段 5（t5—t6）：该阶段 Ugs下降，但是未降至UMiller，Id和Uds保持不变。

阶段 6（t6—t7）：当 Ugs下降到 UMiller时，此时 Ugs维持密勒平台电压 UMiller不变，Uds升高。由于 Ugs不变，因此 Uds变化速率不变。在此阶段，Uds斜率近似表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibibUl7U4ic3gZRNJZTmkfE4by9mEDsV3Vtauu12VsVfJ4Fu2sOHb1icDfA/640?wx_fmt=png&from=appmsg)

ig，off的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibZDoIZXsibBWzQdJH5XcDhvUeelLibF2xUthkN7mE5FjNOF6qUGvvaOWw/640?wx_fmt=png&from=appmsg)

式中：Rg，off为关断电阻。

阶段7（t7—t8）：该阶段随着Ugs由UMiller继续下降，Id也开始下降，由于电路中寄生电感的存在，变化的电流会在寄生电感上产生压降，引起 Uds继续上升，超出母线电压。该阶段与开通时阶段2 类似，当 Ugs下降至 Uth以下时，SiC MOSFET 完全关断，该阶段结束。在此阶段，Id斜率可近似为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib7PRH80twY4X7NyUvfsTC1MuicqVxFRdMVPPozUrpcCICXWODSY4Y3nQ/640?wx_fmt=png&from=appmsg)

阶段 8（t8—t9）：该阶段 Ugs由 SiC MOSFET 的阈值电压Uth逐渐降至负向关断电压。

根据式（4）~式（6）可知，通过不同的驱动电阻Rg，off控制关断时的电流与电压的变化斜率。

2. 驱动电路设计

鉴于传统驱动电路的不足以及对 SiC MOSFET开关过程的详细分析，本文提出了一种基于动态栅电阻的驱动电路，结构示意图如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib1uicefribctabje5q9rkicDZ98MlOGibxlIDBHYhJT0n7KaATX4olVlw9w/640?wx_fmt=png&from=appmsg)

本文提出的动态栅电阻驱动电路主要由1个控制器（FPGA）、2 个缓冲器单元、4 个 MOS 管及 4 个栅极电阻组成。其中设置 RG，on1＜RG，on2，RG，off1＜RG，off2。MOS 管在整个驱动电路中主要起开关作用，通过切换 MOS管来接入不同的栅极电阻；而缓冲器单元是来推动 MOS 管工作的。控制器FPGA则是为驱动电路提供控制逻辑的。

开通电压为+20 V，关断电压为\-5 V。在SiC MOSFET 开关过程中，通过控制 4 个不同的驱动电阻组合，进而实现优化的开关特性。

具体的方案如下：

在开通过程中，当开通的PWM信号到来时，Q1和Q2全部开通，RG，on1和RG，on2并联，相当于20 V通过一个极小的栅极电阻对 SiC MOSFET 的栅极电容充电，栅极电压迅速上升，这大大地缩短了门极充电延迟时间；在阶段 2时，控制 Q1开通，Q2关断，使 20 V 通过较大阻值的驱动电阻 RG，on2为 SiC MOSFET栅极继续充电，由式（1）可知，漏极电流斜率 dId/dt 将会减小，从而开通时刻的电流过冲现象可以被有效抑制。在阶段3时，FPGA控制Q1关断，Q2开通，较小阻值的电阻RG，on1被接入，根据式（2）可知，Uds快速下降，使得开通损耗相应减小。在阶段 4 中，Q1和 Q2再次全部开通，SiC MOSFET 栅极被快速冲至 20 V，开通过程完成。

同理，在关断时，当关断 PWM 信号到来时，FPGA 首先控制 Q3和 Q4全部开通，RG，off1和 RG，off2并联，相当于\-5 V 通过一个极小的栅极电阻对SiC MOSFET 的栅极电容放电，此过程大大地减小了栅极放电延迟时间；在阶段 6 中，控制 Q3开通，Q2关断，\-5 V通过 RG，off1对 SiC MOSFET栅极进行放电，进行 Uds以较快斜率上升，阶段 7 时，控制 Q3关断，Q2开通，较大阻值电阻 RG，off2接入导致电流关断速率变缓，从而关断过压现象得到抑制。

综上所述，本文提出的多等级动态栅驱动电路通过在不同的阶段使用不同的驱动电阻，能大大减小 SiC MOSFET 过冲尖峰，弥补了传统驱动电路不能兼顾开关速率与过冲尖峰的不足。

3. 驱动实验与分析

为了验证所设计的动态栅驱动电路的可行性，本节利用双脉冲测试平台进行双脉冲实验。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib9gIicwPFAzBgIUw7T4Z1eRCvqOIWnVK3TqvJuwE3sQLPH8hBZGY0xLg/640?wx_fmt=png&from=appmsg)

如图 3 所示，双脉冲实验平台由直流母线电压Udc，1200V/300A SiC MOSFET（Cree）以及负载电感 L 等组成。实验中上管只有续流二极管在起作用，因此上管施加负向关断电压。下管为测试的对象，因此对下管的栅极施加双脉冲信号，从而获取开关过程中 SiC MOSFET 的开关特性。

实验中，直流母线电压 UDC＝500 V，负载电感 L＝100 µH。 具 体 的 实 验 参 数 为 ：RG,on1\=10 Ω, RG,on2\=20 Ω, RG,off1\=5 Ω, RG,off1\=10 Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibDSh49xZKH0SQO97lr2YAzj7srojPhSyP15Sszuz2wyXX2ricLv1HYWQ/640?wx_fmt=png&from=appmsg)

图4为传统驱动电路与多等级动态栅电阻驱动电路测试下 SiC MOSFE 的开通波形。其中图4a与图4b分别为传统驱动电路下Rg\=10 Ω和Rg\=20 Ω的开通波形，图4c为多等级栅电阻驱动电路开通波形。在传统驱动电路中，随着栅极驱动电阻的增大，开通电流过冲减小而开通时间却被增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6CvibctOJWWG2XlRTuYGBt7vBicQYRiaNia9rSOSwYdb1jQy41ESeXgeM8ziatA/640?wx_fmt=png&from=appmsg)

图5给出了传统驱动电路与等级动态栅电阻驱动电路的开通波形参数对比，可以看出，多等级栅电阻驱动电路很好地兼顾了开通电流过冲和开通时间，有效抑制了电流尖峰，同时也缩短了开通时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvibsy5TibAIaRacvPDOPib477NZMA8sv0td19Tp8rqyk0ckCbdOYxx4BfRw/640?wx_fmt=png&from=appmsg)

图 6 为传统驱动电路与多等级动态栅电阻驱动电路测试下 SiC MOSFE 的关断波形。其中图 6a 与图 6b 为传统驱动电路下 Rg\=5 Ω 和 Rg\=10Ω 的关断波形，图 6c 为多等级栅电阻驱动电路关断波形。在传统驱动电路中，随着栅极驱动电阻的增大，关断过压减小而关断时间增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm9Vh6gbJ8MaibjkHTGU6Cvib0etCxWiadyldibVmlmfrHknuhg5Eyicb6jP2kyMc8CP8w9f7cbrAuJTibg/640?wx_fmt=png&from=appmsg)

图 7 给出了传统驱动电路与等级动态栅电阻驱动电路的关断波形参数对比，可以看出，多等级栅电阻驱动电路很好地兼顾了关断过压和关断时间，有效抑制了关断过压，同时也减小了关断时间。

4\.  结论

本文提出了一种基于动态栅电阻的SiC MOSFET 驱动电路，通过在开关不同阶段使用不同的栅极电阻控制 dI/dt 与 dUds/dt，进而优化SiC MOSFET 的开关特性。实验结果表明，新方法能够有效减小开关时间，降低电流与电压尖峰，证实了与传统驱动电路相比的可行性，为充分发挥 SiC MOSFET 的高频应用等特性提供了可靠保障。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)