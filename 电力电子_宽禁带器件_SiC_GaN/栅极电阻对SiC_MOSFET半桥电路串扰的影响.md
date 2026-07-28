# 栅极电阻对SiC MOSFET半桥电路串扰的影响


> 原文地址: [https://mp.weixin.qq.com/s/DkJMeBwxo8u4ODj\_Ervrbg](https://mp.weixin.qq.com/s/DkJMeBwxo8u4ODj_Ervrbg)

文章来源：半导体技术

作者：杨斌1，丁峰1，沈成1’4，王孟沙1，杨胜蓝1，孙鹏2，赵志斌2(1．国网江苏省电力有限公司东台市供电分公司，江苏东台 224200；2．华北电力大学电气与电子工程学院，北京 102206)

摘要：SiC MOSFET广泛应用于高频领域，这使其在半桥电路中极易发生串扰现象。实际情况中，半桥电路上、下桥臂的栅极电阻通常保持一致。然而，现有的串扰研究仅在某一桥臂的栅极电阻为定值的条件下分析另一桥臂中栅极电阻的影响，难以获取实际电路中的串扰特性。研究了SiC MOSFET半桥电路串扰特性，分析了上、下桥臂栅极电阻单独变化与同步变化对串扰的影响规律，并探究了不同共源极电感情况下栅极电阻对串扰电压的影响，最后搭建了动态特性测试平台，实验验证了理论分析的正确性。结果表明，与只改变关断器件的栅极电阻相比，上、下桥臂同步变化时串扰电压的正峰值更小，栅极电阻的取值范围也更宽，为半桥电路中SiC MOSFET的低干扰驱动设计提供了理论参考。

关键词：串扰；栅极电阻；SiC MOSFET；半桥；安全运行；驱动设计

0\. 引言

SiC作为一种宽禁带材料，与si相比，具有更高的能带间隙、更大的击穿电场强度、更好的导热系数等优点。因此，SiC MOSFET在高频、高效、高功率密度应用中得到了越来越广泛的使用。然而，它们的快开关速度和寄生参数会引入电磁干扰，如在使用SiC MOSFET的半桥变换器中会出现更严重的串扰问题。

串扰是指由变化的电流和电压引起的上、下桥臂之间的耦合，耦合电压即串扰电压。如果串扰电压超过阈值电压，就会发生误导通；如果串扰电压低于负击穿电压，就会导致设备损坏。SiC MOSFET比Si MOSFET具有更快的开关速度和更低的阈值电压，因此，采用SiC MOSFET的半桥变换器更容易受到串扰的影响。为了充分发挥SiC MOSFET在半桥拓扑的优势，必须充分评估串扰问题。

近些年来，许多学者都对串扰的影响因素进行了研究。J．J．Wang等人认为，开关器件的栅极电阻影响较小。D．K．Yuan等人研究了被测器件的栅极电阻的影响，得出串扰电压随被测器件的栅极电阻的增大而增大的结论。Q．P．Xiong等人发现，被测器件的共源极电感先在开通瞬态引起串扰电压的下降，而共源极电感也会降低串扰电压。当共源极电感过大时，串扰电压的负尖峰将低于最小耐受栅极电压。全面研究两桥臂栅极电阻一致性对串扰的影响需要更复杂的实验设计和更多的数据收集与分析工作，为了简化问题，现有的研究主要关注当保持一个桥臂的栅极电阻不变时，另一个桥臂的栅极电阻对串扰的影响。但在实际应用中，上、下桥臂的栅极电阻必须保持一致，来减少因电阻不匹配带来的不平衡问题，进而降低串扰电压。因此，研究同步改变上、下桥臂的栅极电阻对串扰的影响至关重要。

本文首先对SiC MOSFET在半桥电路中的开关瞬态进行了分段研究，建立了表征不同开关瞬态阶段上、下桥臂器件的电压一电流特性的解析模型。其次，利用解析模型对比了上、下桥臂器件驱动电阻同步变化与分别变化时的串扰特性差异，并且分析了共源极电感对串扰电压的作用规律。最后，搭建了针对SiC MOSFET半桥电路的动态特性测试实验平台，通过实验验证了理论分析的有效性，为半桥电路中SiC MOSFET的低干扰驱动设计提供了理论参考。

1\.  串扰过程

SiC MOSFET的半桥式双脉冲测试(DPT)电路图如图1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMW6nCvApzIb6IL8qtK8IYjcjib8RB70ibxk4ZJl0G4JTwToX7kEcI3L9g/640?wx_fmt=png&from=appmsg)

图中：Q1和Q2分别代表上、下桥臂器件，Q1是栅电压为双脉冲的主动控制器件，Q2是栅电压为固定值的关断器件；Rg表示包含器件内部栅极电阻和外部栅极电阻的栅极电阻；CDD表示充电电容，Cgs、Cgd和Cds瓜分别表示器件的栅源寄生电容、栅漏寄生电容和漏源寄生电容；Lg表示栅极寄生电感，Ld表示漏极寄生电感，Lcs表示共源极电感，Lloop表示电源回路的寄生电感，Lload为感性负载；VDD表示母线电压，Vcoff表示栅极关断电压。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMsxy41fg9Fj9ibw95UN9CEDwoib6iaibeAib7DHCGpwXAGUzwqW9qdcu9vAA/640?wx_fmt=png&from=appmsg)

图2为Q1开启瞬态时Vgs1、Vgs2、Vds2和ids2的波形图，其中Vgs1和Vgs2分别表示上桥和下桥器件栅源电压，Vds2表示下桥器件漏源电压，ids2表示下桥器件漏极电流，开通过程主要分为开通延迟阶段、电流上升阶段和电压上升阶段。

1.1  开通延迟阶段(t0-t1)

在t0之前，Q1是关断的，Q2的体二极管和感性负载形成续流回路。在t0时，Q1的栅极电压由Vcoff变为Vcon，Vgs1开始增大。在此阶段，Q1上的Cgs1和Cgd1被充电，流过上桥驱动回路的电流等于Cgs1和Cgd1的充电电流之和。根据基尔霍夫电压定律，忽略Lg1和Lcs1，上桥驱动回路的方程为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMQMmoV6zBmQ2YzQYA1TbXboSicvTOg7jiaQzic7WlvfKkEyeRD2lr4GiaYg/640?wx_fmt=png&from=appmsg)

式中Vth为阈值电压。式(3)为电流上升阶段的初始条件。

1.2 电流上升阶段(t1-t2）

Vgs1在t1时上升到Vth，Q1的沟道开始导通。流过Q2体二极管的电流换流到Q1的沟道。沟道电流ich可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMn7w9AJffjRcCcib1BPYIUG1Po5qv99Z20CwgTrIiampqeOPurKt0ARLA/640?wx_fmt=png&from=appmsg)

实际上，r2比r1小得多，C2比C1小。因此，可以忽略式(7)中的第二项，则Vgs1可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMWdbwAqQuJRvOZuALia2AZm4WBNUWpHwMiaMHYXBiaZick2PYxVeskFbSAg/640?wx_fmt=png&from=appmsg)

在t2时刻，ich上升到负载电流Iload，Vgs1上升到米勒平台电压Vmiller。此时将Vgs2和dvgs2／dt的值分别记为V1和V2，作为下一阶段的初始条件。

1.3 电压上升阶段(t2-t3)

在此阶段，Q1和Q2的漏源电压开始发生变化，Vgs1=Vmiller，所以没有电流流过Cgs1，上桥驱动回路电流只是Cgd1的充电电流。上桥电流等于Iload与Cds2的充电电流之和。

事实上，在此阶段电流变化很小，所以可以忽略Lloop上的电压降，可以认为Vds1和Vds2的变化率是相同的。在此基础上，上桥驱动回路的方程可以表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMbYpb4335bkM6pKjzWzicxwQGcsILUvFZecBrufibN29fjAdianMoASLOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMVhqL4I3JrQFlHkOFbicmWkYAVZbslIicc1XkPLPKiaLM56aM6qic0SOoDg/640?wx_fmt=png&from=appmsg)

同时求解式(14)和(16)，可得此阶段Vgs2的表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMDX91KGfDuxZ4MmSLHXSsbyGNEUibUckp0KhY2RpEkECex9SohL4RV6g/640?wx_fmt=png&from=appmsg)

2.栅极电阻同步变化对串扰的影响

2.1  栅极电阻对串扰电压的影响

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnrsL4mCTxG1NA4ticPIcexMqqWecdapRsNKkDGwzGEHAfc2FDCQc1QntZXIicDZFIwFyGMeqdOyp6Q/640?wx_fmt=png&from=appmsg)

基于以上分析，可以实现Rg1和Rg2不同组合下的Vgs2。图3～图5显示了不同栅极电阻下的Vgs2，红色和黑色箭头分别表示Vgs2正、负峰值的趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQdLvYticWFOsmpD6ialIUvox7E25Co9wia4eBibL9NrjKiaUywommaKcsJNQ/640?wx_fmt=png&from=appmsg)

图3为Vgs2随Rg1的变化。Vgs2的正峰值随着Rg1的增大而减小，而负峰值随着Rg1的增大而增大。电压变化速率随着Rg1的增大而变小，因此Vgs2的正峰值减小。随着Rg1的增大，电流的上升速度变慢，因此电流的上升阶段更长，Vgs2的负峰值更小。然而，Vgs2的变化率也变小，这将使负峰值变大。在联合作用下，Vgs2的负峰值会随着Rg1的增大而增大。图4为Vgs2随Rg2的变化。Vgs2的正、负峰值均随Rg2的增大而增大。图5为Rg1和Rg2同步变化时Vgs2的变化。当Rg1和Rg2同步增大时，Vgs2的正峰值和负峰值均增大。增大Rg1或Rg2都会增大Vgs2负峰值，因此当Rg1和Rg2同步增大时，负峰值也会增大。对于正峰值，Rg1和Rg2的作用是相互矛盾的，而且Rg2的影响大于Rg1。因此可以发现，当Rg1和Rg2同步增大时，正峰值的总体变化趋势仍在增大，但由于Rg1的影响，增大的速率变小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQmgTiahcI2ZpQD9je0oXkoBIhoWqVJJZSOH6yhibsoDDaVLoficMjCezyQ/640?wx_fmt=png&from=appmsg)

为了确保串扰电压不超过阈值电压，应设置一个Rg2的上限。考虑到Rg1=Rg2，其上限更大。在实际应用中，应保持上、下桥臂的栅极电阻相同，如有交替导通器件的半桥模块，传统的只考虑一个变量的栅极电阻选择方法是不适用的。相反，必须考虑相同的上、下桥臂的栅极电阻。

2.2 不同共源极电感下栅极电阻对串扰电压的影响

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQVwGggTvZ8xejm2e4icMmTxP2oPLAoTqpobHbJOI5oO9YLtJreA7IXJQ/640?wx_fmt=png&from=appmsg)

串扰电压的正、负尖峰也受到Lcs2的影响，不同Lcs2下栅极电阻对串扰电压的影响也有所不同。图6显示了Rg1和Rg2同步变化时，不同Lcs2下计算出的Vgs2的正、负峰值。Vgs2的正、负峰值均随Lcs2的增大而减小，曲线斜率随Lcs2的增大而增大。也就是说，Lcs2较大时，同步改变Rg1和Rg2对串扰电压有更大的影响。

3\. 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQjpFXvdkk9gXSYSXGBGIcSibkcZVT4UlicSuIpiajE6Aic92XXAOxYebY3g/640?wx_fmt=png&from=appmsg)

图7是为验证理论分析而搭建的DPT平台。两个1200V／31A的SiC MOSFET串联，作为上桥臂和下桥臂。在下桥并联一个0.4mH的电感作为负载。母线电压设置为600 V，负载电流为30 A上桥器件的栅源与驱动板连接，保证其开关正常，而下桥器件的栅源由0 V恒定电压供电，以保持关闭状态。Vcon和Vcoff分别设置为18V和0V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQ78lg6TwrPPtzSyUibyysicw2hgiagB0cAdl4dibpsXsTHcxsm3MviaN8WPw/640?wx_fmt=png&from=appmsg)

印制电路板(PCB)在Lcs2位置的寄生电感约为8nH，1.5匝的空心电感约为11 nH，2.5匝的空心电感约为19nH。图8、图9、图10为在Lcs2位置不增加以及增加1.5匝和2.5匝空心电感时分别改变Rg1、Rg2和同步改变Rg1和Rg2的实验结果。可以发现，实验结果与第2节的分析结果一致。一般情况下，Vgs2正峰值随着Rg1的减小和Rg2的增大而增大。当Rg1和Rg2同步增大时，因为Rg2的作用效果更强，正峰值仍然增大。负峰值随着Rg1和Rg2的分别增大而增大。因此，当Rg1和Rg2同步增大时，负峰值也会增大。此外，Lcs2越大，曲线出现正峰值后的那部分就越密集。表明随着Lcs2的增大，栅极电阻对这个阶段串扰电压正尖峰的影响减弱。相反，Lcs2越大，电流上升阶段的曲线就越稀疏。表明通过增大Lcs2，栅极电阻对串扰电压负尖峰的影响会更大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQYaj1B0cjXiayIhbJiccNd2x8qCMsUKzldAQ2xgHRKHR8lgYunvucpRrw/640?wx_fmt=png&from=appmsg)

图11为不同条件下提取的Vgs2正、负峰值。从图11(a)中可以看出，同步改变Rg1和Rg2时提取的正峰值小于仅改变Rg2时的值。此外，从图11(b)中可以看出，正峰值的曲线斜率随着Lcs2的增大而减小，这说明栅极电阻对正峰值的影响较弱。相反，负峰值的曲线斜率随着Lcs2的增大而增大，这说明栅极电阻对负峰值的影响更强。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQyJuCicH92sIKcNE0f5nQgtfYKHmWnQZBZTibJz6WZERJFjNqsK7RgPicQ/640?wx_fmt=png&from=appmsg)

图12(a)为仅改变Rg2时的id2，图12(b)为Rg1和Rg2同步变化时的id2。当保持Rg1恒定时，Rg2达到15Ω，直通电流出现。然而，当同步改变Rg1和Rg2时，直到Rg2达到43Ω，直通电流才出现，并且在这种情况下直通电流值明显较小。也就是说，为了防止误导通，如果Rg1保持不变，则Rg2不应超过15Ω。但是，在Rg1和Rg2保持相同的条件下，实际的电阻值上限为43Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQfTEropwE4Eq4fs1ADTEE975P3rIMyefVljrPGenGgVQb2Sd2fFxV4w/640?wx_fmt=png&from=appmsg)

3\. 结论

本文研究了栅极电阻对SiC MOSFET串扰的影响。首先从理论上分析了栅极电阻对串扰的影响，然后搭建双脉冲测试平台对理论分析进行了验证。

主要结论如下：①串扰电压的正、负峰值均随上、下桥臂栅极电阻的同步增大而增大；②随着共源极电感的增大，串扰电压正尖峰的增大趋势减弱，而负尖峰的增大趋势增强；③当同时改变上、下桥臂栅极电阻时，串扰电压的正尖峰较小。因此，在如交替导通器件的半桥模块应用中，为确保上、下桥臂栅极电阻保持一致，且串扰电压不超过阈值电压，所需栅极电阻的取值范围相较于仅调整单一桥臂驱动电阻的情况会更大。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)