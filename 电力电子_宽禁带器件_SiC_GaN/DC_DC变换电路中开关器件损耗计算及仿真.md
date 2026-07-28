# DC/DC变换电路中开关器件损耗计算及仿真


> 原文地址: [https://mp.weixin.qq.com/s/nzEEqq2qlO\_1zNVl0WLWWg](https://mp.weixin.qq.com/s/nzEEqq2qlO_1zNVl0WLWWg)

文章来源：电工技术

作者：宋素静１，王步根２（１．通达电磁能股份有限公司，湖南 长沙 410006；２．湖南湘电动力股份有限公司，湖南 湘潭 411100）

摘 要：根据开关器件的物理模型，分析并计算了开关器件在DC/DC变换电路 中的功率损耗。针对工程应用中开关器件损耗计算的实时性和精确性要求，利用功率开关器件手册提供的产品参数，分别计算了逆变部分的SiC MOSFET模块和整流部分的整流二极管的器件损耗。将计算值与PLECS仿真结果进行对 比，结果表明该计算方法可得到较为准确的计算损耗，进一步提高了工程应用中损耗计算的准确性。

关键词：DC/DC变换；损耗；碳化硅MOSFET；仿真

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbwsibvfjO4Fuk732LWvJUFHmkypJS41SuXdmQgFwjDmReDFJhla248TQ/640?wx_fmt=png)

  
０. 引言

近年来，随着大功率电力电子器件的快速发展，电能变换系统的容量及器件的开关频率在迅速提 高，开关管的损耗也在不断上升。SiC MOSFET模块具有低导通电阻、高开关频率、低损耗等优点。 同时， 由于器 件的开关损耗与开关频率成正比，因此随着开关频率的提高，开关损耗显著增加， 为系统的散热设计带来很大的困难。 文献［２］分析了Boost PWM电路中开关器件的损耗，但所建立的模型仅适用小功率的开关器件，大功率状态下的功率损耗计算结果误差较大。文献［３］对 MOSFET的物理模型进行损耗分析。而文献 ［４］仅对较大功率 Boost PFC整流电源的开关损耗进行研究，应用范围有限。

本文研究的DC/DC变换电路是以DC270V变换电路为例，前端采用碳化硅MOSFET模块组成单相全桥逆变，后端为整流二极管组成的不控整流电路。整个电路的散热设计基于SiC MOSFET模块与二极管的损耗。 最后对两种功率器件进行了损耗计算及仿真。

１. 损耗计算

电路的拓扑结构如图１所示。逆变部分拓扑为单相 Ｈ桥，主要由SiC MOSFET及与其反向并联的二极管组成。SiC MOSFET具有双向导通特性，即当栅源极 电压大于开启电压时，无论漏源极电压Ｖｄｓ是正值还是负值， 沟道均可导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGb8D76lKXX6mbHndNzRbVOJJvb93ibMcqttKuaHQjkr7ia2CNk8YbRAibtw/640?wx_fmt=png)

SiC MOSFET模块主要工作于开关状态，并周期性地经历各种动、静态过程。 每个过程都会产生一部分损 耗，这些损耗相加就是开关器件的总损耗。MOSFET 总损耗主要由导通损耗和开关损耗组成。对于整流部分的不控全桥整流，损耗主要是整流二极管产生的。二极管一个工作周期从开通到通态再到关断三个阶段造成的功率损耗，主要分为正向导通损耗、通态损耗及反向恢复损耗。

1.1 SiC MOSFET模块损耗理论计算

SiC MOSFET模块选用科瑞的CAS300M12BM2， 考虑实际应用时有过载工况的损耗。下面以额定工况下母线电压DC540V为例计算SiC MOSFET模块损耗。变压器容量为45KVA，输入电压为480Ｖ， 输出电压为300Ｖ，变比为8/５。调制比为0.88，功率因数取１。

（１）导通损耗。 额定工况下，SiC MOSFET模块的导通损耗与MOSFET的导通压降、导通电流及占空比有关。导通电阻ｒｄｓ＝7.5ｍΩ （结温150 ℃），逆变输出电流峰值Ｉｏ 为150.64Ａ，Vds０＝2.5Ｖ （MOSFET结温150 ℃开启电压），则MOSFET的导通损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbHgwhbGiasgAaN1z2cqUra4qhQkpOx5o3qQ2ounT2ubtIYoticPTstxrQ/640?wx_fmt=png)

（２）开关损耗。随着开关频率的提高， 开关损耗在整个器件损耗中的比例也变得比较大。开关损耗包括开通损耗和关断损耗两部分。在给定的环境条件下，器件导通或关断时的能量损耗可通过间接地将电流和电压相乘再对时间积分得到。单次脉冲开通损耗 Ｅｏｎ＿ｎｏｍ＝5.8ｍＪ，关断损耗 Ｅｏｆｆ＿ｎｏｍ＝6.1ｍＪ， 母线 电 压 Vdc 为540Ｖ， 则开关损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbC1oczkR0JWmib7kI7VIy43Sa3Pqq9JibXHURFagRm8MRhTKXh89ocmOw/640?wx_fmt=png)

（３）二极管导通损耗。二极管开启电压为VF0，二极管导通电阻rD为2.3×１０-³Ω，则二极管导通损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGb88T2Aa8tcSTibfl48gictfUoRj6hjbdxcLNk21kKFdT4QLvDgFHLh4Uw/640?wx_fmt=png)

（４）二极管开关损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbdpfMFH99RpoGQqiaQ0hnZzuPHlzSqTaYCGbTVjmicfXmeLZHJDOaZQKw/640?wx_fmt=png)

由于二极管开关损耗很小，因此 Ｅｒｅｃ＿ｎｏｍ取0.35ｍＪ。

（５）SiC功率MOSFET单管损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbzdyJFPmvkuyCB3RFibzOBhVFveOoyLxdibOEXgPh6cpecuD5AZEPI6oQ/640?wx_fmt=png)

整个直流模块中逆变部分总损耗为933.88Ｗ。 考虑不同过载工况下的MOSFET模块的损耗计算结果见表１。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbVQ4UPHwQuk0oQQjdZSw9bhR2T5dlrOyIDh1BtPe77iaACS3JA1MHDSA/640?wx_fmt=png)

1.2 整流二极管功率损耗计算

直流模块中整流二极管 ＭF600U12NK7反向重复峰值电压为1200Ｖ，正向平均电流为600Ａ。根据整流二极管数据手册可知， 正向恢复时间tfr约为 175ns， 峰值电压VFP约为1.65Ｖ，单相输出电流为150Ａ， 因此每个二极管通态输出电流iF为150Ａ，开关频率为20KHZ。

（１）正向导通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbuo3EcXgic90DbkKmpEsFMARkNfeJKhm3MjpjUrWsaKrwhEyJ9u0TSWg/640?wx_fmt=png)

（２）反向恢复损耗。

反向恢复时间为285ns， 关断时反向峰值电压 VRM为23Ｖ。由于整流二极管 是自然换流， 其反向电流并不明显，因此反向峰值电流IRM为30Ａ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbpwSbfgTnbIhH9ptgia5LZ6vfic2sl8QlwrXedC2lkVIiaSkOTqORbg48A/640?wx_fmt=png)

（３）通态损耗。

整流二极管在 25℃／25Ａ 时的通态压降ＶＦ＝0.3＋ｒＤｉＦ，导通时间为0.01×１０-³ｓ。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbZiciblibOLiaSVzQISy9AuDrUEsFTBszPAEUC1JMYRDicqDDEtNrNibwC0bw/640?wx_fmt=png)

综上可得，单个二极管总损耗PT＝72.04Ｗ。整个变换电路中整流 部分总损耗 为72.03×４＝288.12Ｗ， 见表２。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbsSbSz9XTiaz4rBHo3s1yKdyulu12NA6WyMAEFQA6a2dvQtH3yHCYg7Q/640?wx_fmt=png)

２. 模型损耗电气仿真

2.1 参数设置

单个DC/DC模块的主要电气参数见表１。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbIDzEqGBopNob2kAVpxu2RiaKnKfTLzjoh0Pwnno17QI9KsghAnJUzJw/640?wx_fmt=png)

由于变压器变比为8/5，且单相整流输出为DC270V，因此得到额定工况下变压器输出为AC300V，变压器输入为AC480V。考虑过载工况时输出电压不变。

2.2 PLECS模型

基于PLECS仿真软件，建立DC/DC模块主电路和移相调制模块的模型。根据ＣAS300M12BM2和 ＭF600U12NK7器件数据手册，建立MOSFET和整流二极管的热模型， 并将特性曲线导入热模型中，如图２和图 ３ 所 示。逆变器采用SPWM方式， 开关器件采用CAS300M12BM2  SiC MOSFET模块，开关频率设置为20KHZ。 为了验证算法的准确性，将仿真步长调 整为一个开关周期的1/100（500ns），在不同负载电流情况下进行ＰLECS仿真计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbibnxgjUvWsYOwmFbtdliavWicOABkp8c3DKElHdMlcRjNT2ph2qHkkhYg/640?wx_fmt=png)

2.3 仿真波形

额定工况下，左上桥臂MOSFET和整流二极管的电压、电流仿真波形分别如图４和图５所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbtJYLvic2GPiakm4YrWuB8q8MB6WLOnrj8Js5Whicwm0zRXyquTicc3FDRg/640?wx_fmt=png)

2.4 损耗计算结果

根据仿真波形，直流侧电压为DC540Ｖ，输出为 DC270Ｖ，滤波电感为0.02ｍＨ，滤波电容为0.2ｍＦ，得到的不同工况下的损耗见表３。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbibT37k7WLt3rGTCRpc8BbmxbZqx7rCickXhaHw6hgUOaic2QUTAQWMmoA/640?wx_fmt=png)

３. 对比分析

根据以上计算得到的MOSFET模块损耗对比见表４。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbwaBXfMC8agRibt2ic6V7ZsZ8rqs329mxfYpiaDTticGrq2G2hb9817LDVA/640?wx_fmt=png)

额定工况下MOSFET损耗仿真值为222.3Ｗ， 由于变压器是理想变压器，反向 二极管电流几乎为０， 因此损耗较 小， 忽略不计。 但在理论计算时MOSFET损耗为233.47 Ｗ，反向二极管损耗为9.35Ｗ。 总体来看理论 计算值比仿真值高11.17Ｗ。逆变部分总损耗 可 考虑 以仿 真值的1.2倍裕量作为散热设计依据。

整流二极管损耗对比见表５。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbUQVoh3CmhrnXwnIdoB0hicv96lgqmqETadOe6SRVzk0s1uunGgpUDYw/640?wx_fmt=png)

额定工况下整流二极管损耗的理论计算值 为72.04Ｗ，仿真值为69.7Ｗ。 计算值包含正向导通损耗、 通态损耗、反向恢复损耗。其中，正向 导通损耗值较 小；通态损耗与仿真值相差1～2Ｖ 左右；反向恢复损耗计算采用的是峰值电压与峰值电流，结温为125℃，相对仿真值有所增加。仿真值依据相应结温下的开通、关断损耗进行估算。整流部分总损耗考虑采用仿真值的1.2倍裕量作为散热设计依据。

４. 结语

本文对 SiC MOSFET 模块组成的DC/DC 直流变换电路损耗进行分析， 同时 采用 PLECS仿真软件对其进行了热仿真，得到了散热设计的参考值。 在实际 应用过程中，设计一台功率为 40KW 的直流变换器， 输出电压为270V，采用该方法得到的损耗值进行散热设计， 功率模块散热采用风冷形式， 基板厚度 为15ｍｍ， 翅片厚度为1.5ｍｍ，间距为３ｍｍ。通电测试，额定工况下稳定运行的散热器温升为16.5Ｋ，满足温升要求。测试结果表明该方法能较好地指导工程应用。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLctSOgkLp0wYGRh6ogEtprlrykhP7ZPaic178FjTRjurqZwUUI2516Pw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnPQECgic32HLcf6AmtktdKL1eCUWavTWkiaTBkTTMouZ2nYhgwYRfXD6HR9pIqED10dtKyCLokSYwA/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnPQECgic32HLcf6AmtktdKLBsdvAKfrlibOa3IymdDueNAdKnsdtKkAqp5tNib1XLEDc8PIvG4XgVSQ/640?wx_fmt=png)