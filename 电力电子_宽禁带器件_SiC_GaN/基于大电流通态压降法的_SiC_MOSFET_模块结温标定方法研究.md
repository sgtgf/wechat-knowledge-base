# 基于大电流通态压降法的 SiC MOSFET 模块结温标定方法研究


> 原文地址: [https://mp.weixin.qq.com/s/09lJFFtF4MJRUwsy0MnMxQ](https://mp.weixin.qq.com/s/09lJFFtF4MJRUwsy0MnMxQ)

**文章来源：**船电技术

**作者：**李玉生 1，曹瀚 2，李锐 2，吴浩伟 2，陈涛 2，彭年 2（1.海装广州局，广州 510310；2\. 武汉第二船舶设计研究所，武汉 430205）

**摘要：**本文提出了一种应用在大电流通态压降法测量 SiC MOSFET 模块结温中的低自热标定方法。针对标定过程中的模块电压漂移现象，采用 SiC MOSFET 模块热\-电耦合模型对其温升过程进行仿真并找出导致电压漂移的诱因。为了降低标定短脉冲下的通态压降不稳定和自发热导致的 SiC MOSFET 模块电压漂移现象，根据热\-电耦合模型的仿真结果设计了一种低自热标定方法，并设计实验进行验证。相比于传统的单脉冲标定方法，本文所提出的低自热标定方法自发热最大下降 34%，模块自发热导致的结温监测误差由最初的 26.9℃降低为 7.6℃。

**关键词：**SiC MOSFET ，结温监测，电压漂移，低自热标定方法

**0.   引言**

碳化硅（Silicon Carbide, SiC）功率模块是由第三代半导体材料制造而成的新型功率模块，相比于传统硅（Silicon, Si）模块，采用第三代半导体芯片制造而成的功率模块拥有更高的击穿电场、导热系数和饱和漂移速度，因此可以稳定运行在更高的温度和开关频率下。随着半导体封装技术的发展，SiC MOSFET 模块正在船用功率变换器领域逐步取代传统的 Si IGBT 模块。

功率半导体模块中的芯片结温过高是导致功率模块失效的主要诱因，功率模块结温实时、准确的监测是使其高效、稳定运行的基础。S. Yang将功率模块结温监测方法分类为：模型法、传感器法和温度敏感电参数（Temperature Sensitive Electrical Parameters, TSEPs）法。模型法通过建立功率模块热\-电耦合模型来进行结温预测，虽然可以准确的准确的预测结温，但是也只是一种离线预测方法，并不能对运行状态下的功率模块结温进行实时的监测。传感器法使用物理接触式传感器或者光学非接触式传感器测量功率模块结温，但是测量之前需要对功率模块进行开盖和溶胶处理，从而大大降低了模块的耐压能力，更为重要的是传感器法的响应速度相比于功率变换器 PWM 开关周期来说要慢很多，因此并不能实现功率模块结温的实时监测。

想要实时、准确的测量 SiC MOSFET 模块结温并且不对模块进行破坏性处理，TSEPs 法是唯一可行思路。不同于传统意义上的传感器法，TSEPs 将模块自身作为传感器，通过测量和温度有关的电参数变化情况来反映模块结温的变化情况。常用的 TSEPs 有：小电流通态压降 Vds\_L、开通阈值电压 VTH、关断延时时间 td\_off 和大电流通态压降 Vds\_H。从灵敏度、控制策略影响、硬件侵入性三个方面对上述常用 TSEPs 进行对比分析，其结果如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiard9vTn7oMCoQeZiaLxVyUouofTjkvQe6skNyPgzFGia4nHibMnc9EI9uw/640?wx_fmt=png&from=appmsg)

与功率模块温度相关的半导体参数有很多，但是可以作为 TSEPs 监测功率模块结温的却屈指可数。对于 SiC MOSFET，由于栅极氧化层SiC/SiO2 界面态存在缺陷，其阈值电压随温度变化会产生随机波动，因此 MOSFET 阈值电压和与阈值电压直接相关的关断延时时间作为 TSEP 监测 SiC MOSFET 模块结温的效果并不好。小电流通态压降法在测量时需要通过停止变流器的运行以注入测量电流，所以对控制策略的影响较大，并不适合功率模块结温在线监测。因此，大电流通态压降是唯一可以直接用于 SiC MOSFET 模块结温在线监测，并且对控制策略和电路拓扑结构没有侵入性影响的 TSEP。

标定是大电流通态压降法测量功率模块结温的中最重要的步骤，其目的是在离线状态下获得Vds\_H 与其他变量之间的关系，以便为最后由 Vds\_H反推结温提供依据。在标定过程中，功率模块的温度一般由恒温箱、介质浴或者加热炉等外部系统给定，然后在一定的栅极驱动条件和电流密度下，测量结温与大电流通态压降之间的关系。

目前对于大电流通态压降法标定主要采用单脉冲标定法，对于标定过程中的电压漂移现象对标定结果的影响鲜有研究。因此，本文首先介绍了大电流通态压降法测量 SiC MOSFET 模块结温原理；然后利用功率模块热\-电耦合模型对单脉冲标定过程中的标定电压漂移现象进行仿真；随后根据仿真结果设计了一种低自热标定方法；最后通过实验对标定结果进行验证。

**1.   大电流通态压降法原理**

SiC MOSFET 大电流通态压降表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaJQmUSicxF7ENqhkAMWKQVcQtDibK4NBDr3KM8b5TOdK7fjzAGoq9vtYA/640?wx_fmt=png&from=appmsg)

其中，p 为元胞节距，LCH 为沟道长度，ɛOX 为氧化硅介电常数，tOX 为栅极氧化层厚度，以上半导体结构参数为常数。μn 为 MOSFET 载流子迁移率，VTH 为栅极阈值电压，以上值只与结温有关。因此，对于同一 SiC MOSFET，在同样的电流面密度 JC 和栅极驱动电压 VG 下，其大电流通态压降 Vds\_H 只与结温相关。

为了得到这个关系，采用文献所建立的SiC MOSFET 模块热\-电耦合模型，对不同温度下的大电流通态压降进行仿真，其结果如图 2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaYWUSkF070ryAmGOyUpThiafE885eYeHITsIdKaUNECibjhPXfGiaBgaaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaib3czmprQNLjJ0zJhYqz2icDE4nPOY4ovvHKppOjTEFAoiatKDTGA3MCA/640?wx_fmt=png&from=appmsg)

假设结温每升高 20 ℃，对应的 SiC MOSFET模块通态压降增量为△Vi，则结温由 40 ℃上升至60 ℃时的电压增量为△V1，结温由 60 ℃上升至80 ℃时的电压增量为△V2…以此类推。那么在一定的栅极驱动条件下，其△V1 ~ △V5 随漏极电流的变化关系如图 3 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaPtDiakWLIhicNCVqeGJ894TqcyHA8cVcqAVEqSBoSpzeIiaBfU9ibhBe5g/640?wx_fmt=png&from=appmsg)

由上图可知，当结温变化增量相同时，相对应的电压增量也相同，这就意味着在一定的漏极电流下，SiC MOSFET 模块的大电流通态压降随着结温的上升而近似线性上升，并且随着漏极电流的增加，其上升斜率增大，监测温度的敏感度也会随之增大。因此，只要在离线状态下得到不同漏极电流下的通态压降和结温之间的线性关系，就可以在变流器的运行状态下反推实时结温。

**2.  单脉冲标定引发的模块电压漂移现象研究**

传统的单脉冲标定平台如图 4 所示，不同于双脉冲平台，单脉冲标定平台采用电阻负载，其目的是为了尽可能的保持 SiC MOSFET 模块漏极电流恒定。对图 5 所示的全自主封装 1200 V/40 ASiC MOSFET 单相半桥模块进行单脉冲测试，其结果如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaj4ud9JrpNavOCnhm7k6PbHNjibkIslqF9iaNvlotCwVdxkfcYyhLFQjA/640?wx_fmt=png&from=appmsg)

由于漏极电流是由直流母线电容板放电形成，即使是电阻负载，其电流值依然会出现衰减。以标定 40 A 时的通态压降曲线为例，在不同温度下找到漏极电流为 40 A 的时刻，记录此时的通态压降值即可完成标定。然而，随着漏极电流的变化，想要保持采样位置不变是十分困难的，理论上来说只要保持漏极电流恒定，40 A 时刻不管出现在单脉冲持续时间的任何位置，其通态压降值应该都保持不变，但是实际上并非如此。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaQKRurGouYnzFCauk18iauw9VyOvxdmvKPys5awkdkSgOfFXltf37G7w/640?wx_fmt=png&from=appmsg)

图 7 所示为 40 A 漏极电流出现在不同位置的时刻，以导通时刻为坐标原点，以导通时间作为x 轴建立一维坐标系，则 x 坐标值则代表出现给定电流的时刻，例如：当漏极电流为 40 A 时，x \=50 则代表漏极电流为 40 A 的时刻位于 50 μs。对于同一漏极电流，其出现在不同时刻时的 SiC MOSFET 模块通态压降值如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPia65o9XkXlInutNPXGBw0lzZlgfwa4L235iaicgn8VjKCgia9GIfeF83qRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiahk6C5UsiaHH8ZEVZdYgjqaz5aqLaj9TsQWjnTJHkR5OZArRMVbuWqag/640?wx_fmt=png&from=appmsg)

从理论上来说，SiC MOSFET 模块大电流通态压降值仅与结温和漏极电流有关，对于一定漏极电流，无论在何处出现，对应的通态压降值大小应该不变。而出现如图 7 所示通态压降漂移的原因主要有两个方面：

1)短脉冲下的通态压降值还没有稳定，会导致在测量初始时刻出现一些无效数据，为了避免这种情况的发生，需要尽可能的延长测量时间；

2)由于单脉冲标定导致的结温升高，从而引起的通态压降值上升，对于同一电流值，出现位置越靠后说明整个单脉冲周期内的平均电流越大，因此发热将会越严重，而对于这种情况则需要尽可能的缩短测量时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiahicdKiaqjia3EoyicbcIghFgNY8ujBibCPfmFeUyHtF4Onuv4zW9hxvpVnw/640?wx_fmt=png&from=appmsg)

为了权衡以上两种情况，对于 SiC MOSFET 模块单脉冲标定的脉冲持续时间则需要谨慎选择。采用热\-电耦合模型对SiC MOSFET 模块单脉冲温升进行仿真，其仿真原理如图 9 所示，对于不同的脉冲持续时间下的温升曲线如图 10 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiazLziaEft1h6P6lJ5qXborENJGNlfNX0UpWY7Ko9258ZvhdXCJo5ZWXg/640?wx_fmt=png&from=appmsg)

由上两组仿真数据可以看出，随着初始结温的升高，单脉冲造成的温升会上升。但是综合考虑的话，其影响最严重的时刻还是在标定初期，初始结温较低的时刻。为了减少自发热的影响，必须在短时间内使得其通态压降值稳定，同时必须要降低 SiC MOSFET 模块的损耗以降低自热。

**3.  低自热标定方法设计**

对于 SiC 基 MOSFET 模块来说，其开关损耗占主导地位，因此如何消除其影响是设计低自热标定电路的关键。当开关损耗是在 DUT 开关瞬态产生的，如果在功率回路中串联一个辅助开关来控制功率回路的开断则可以避免 DUT 动作从而产生开关损耗。基于此思路，本文设计了如图 11 所示的一款低自热标定电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaQz27jZj35b30mLW3wURbTvD7qMEKvZ15STnhIO6vAHhWrn68L014DA/640?wx_fmt=png&from=appmsg)

由其控制脉冲可以看出，整个全桥标定过程由四个部分组成：在第一阶段，被测器件 S1 在该阶段内保持常开状态，其目的主要是消除开关损耗和减少 Vds 稳定时间，在标定时刻通过开关 S3对功率回路进行切断；在第二阶段，刚才进行开关动作的 S3 为保持关断状态，从而进行自然冷却，S2 保持常开状态，并通过相应的开关 S4 来对整个功率回路进行切断；在第三阶段，被测器件S3 保持常开状态，通过开关 S1 对其功率回路进行切断；在第四阶段，被测器件 S4 保持常开状态，通过开关 S2 对其功率回路进行切断，从而完成对S1~S4 的低自热标定。

由于 DUT 在测量周期内始终处于导通状态，因此不存在开关损耗，并且由于长期处于导通状态，相比于单脉冲标定，其通态压降也更易稳定。

**4.  实验验证**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiaQIOsg389rtOWycMIdM1ErW894ynYKvjic2dfRvy68UDd4TE7ZzeEwUg/640?wx_fmt=png&from=appmsg)

为了验证上述分析，利用 SiC MOSFET 模块热\-电耦合模型建立了上述低自热标定电路的仿真电路，如图 12 所示。在不同的脉冲宽度下，采用该方法在 25 ℃下的结\-壳温升如图 13 (a)所示，相比于单脉冲标定，其自发热降低百分比如图 13(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiahDwMbhFwlLPJrzzdN1M7Hp9dOaQqYkdDyrzpZG8E2kSXpubZMnOPRQ/640?wx_fmt=png&from=appmsg)

图中实线为传统单脉冲标定在不同的脉冲下温升，虚线代表的是本文提出的低自热标定方法在不同标定脉冲下的温升，可以看到相比与传统方法，本文提出方法对于不同脉冲下的自发热抑制有很好的效果，自发热最大下降 34 %。采用低自热标定法重新对漏电流为 40 A 时的 SiC MOSFET 模块不同位置通态压降进行测量，其标定结果如图 14 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNibib3r7K2zWRiaFhn16jJPiad5Rf36oQ7wD9mIb6LFmwrgjlvPmB2UtNFa2qpGMicSTJMlaU9hSBn7A/640?wx_fmt=png&from=appmsg)

相比于传统的单脉冲标定，本文所提出的低自热全桥标定方法对于同一工况的 下 的MOSFET 大电流通态压降标定结果误差最大值由原来的 333 mV 减小为 94 mV。本文所使用的SiC MOSFET 模块漏极电流为 40 A 时，其大电流通态压降温度敏感度为 12.34 mV/℃，换算之后采用本文所提供的标定方法导致的结温监测误差由最初的 26.9℃降低为 7.6℃。

**5 .  结论**

本文提出了一种应用在大电流通态压降法测量 SiC MOSFET 模块结温中的低自热标定方法。首先通过 SiC MOSFET 模块热\-电耦合模型对大电流通态法结温监测机理进行仿真分析。然后，针对标定实验中出现的通态压降漂移现象，通过 SiC MOSFET 模块热\-电耦合模型分析了其产生机理，发现标定过程中的自发热现象会给传统的单脉冲标定法带来严重的误差。为了解决以上问题，本文提出了一种低自热同步标定方法并设计实验进行验证。相比于传统标定方法自发热最大下降 34%，模块自发热导致的结温监测误差由最初的 26.9℃降低为 7.6℃。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)