# DC-DC-17：DC-DC的分压电阻为什么不能随便取值


> 原文地址: [https://mp.weixin.qq.com/s/uNoJKkl4DY-7NsOw62Sd\_w](https://mp.weixin.qq.com/s/uNoJKkl4DY-7NsOw62Sd_w)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLt3eH5iagW2xuPibkOgEK9OTK8XJ5hqoQic1xE2occZA4nttVqardpUL4Q/640?wx_fmt=png)

____**★★★**______DC-DC-17---FB分压电阻的设计______**★★★**____

引言：DC-DC的分压反馈调节环路是最为常见的环路网络，但是我们大都会简单的认为它是一种将电压调低至某个基准电压来实现输出电压的调节的电路。在计算得到分压比之后，如何选择合适的阻值是需要经过一定考量的，而不是随性取值。本节将简述DC-DC反馈环路中分压电阻的取值对转换器效率、输出电压精度和环路稳定性的影响。

___________€1.功耗和效率___________

如**_图17-1_**所示是典型的电阻分压式反馈拓扑，FB采集分压进入EA（误差放大器）和基准电压Vref比较，所以FB是运放端会汲取一定的电流。FB的分压电阻也是一个待机功耗设计点，分压电阻取值太小，系统损耗会有所增大。同样条件下，MΩ级别分压电阻输出空载时输入电流只有十几uA，而使用十几k的分压电阻输入电流却高达上百uA，两者在负载电流为1mA时，转换效率更是相差非常大。

在高负载电流下，负载功耗远远大于电阻反馈网络的功耗，但是在低负载电流下，不同反馈电阻的效率差异更加明显，因为分压电阻网络主导了负载电流，因此要想拥有更高的轻负载效率，一种比较好的设计方法就是使用大阻值反馈电阻，如果在某个特定设计中轻负载效率并不重要，则可以在对效率无明显影响下使用较小的电阻。

对低功耗DC-DC来说，典型的电阻式反馈设计一般要求上分压电阻R1+下分压电阻R2具有非常大的总电阻，经验式为R1+R2≈1MΩ，因为这样可以最小化流过反馈分压电阻的电流。

待机功耗，DC-DC待机时EA也是在工作的，只是此时没有Rload，如果器件经常处于待机状态，那么就需要考虑如何减小待机功耗，如果器件工作时间居多，待机功耗可以忽略不计。在含电池或者对能效有要求的设备中，我们可以适当增大FB分压电阻阻值来减小设备待机功耗。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR6HR3zl1AZWMEOr1AF80DptZibMrL6LFJM4uHYMAH8ajFvvwbv28JC4tJeDKl9QGZQNiadia3zL5ISQ/640?wx_fmt=png)

**_图17-1：典型的电阻分压式反馈拓扑_**

__________€2.输出电压精度__________

根据上面所说，R1+R2的取值应该越大越好，但实际情况是，选择的电阻过大会影响DC-DC的输出电压精度，因为存在进入DC-DC反馈引脚FB的漏电流。由**_图17-1_**所示电流分径有：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLxOClxsoacrYQ7mFdDPDZVmtUOaaw8SxOo8AUOO3dc8WRnPHqyju8xg/640?wx_fmt=png)

再根据基尔霍夫电流定律有：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR6HR3zl1AZWMEOr1AF80DpkCYVI2l6cDDSscFib241vsHaonPwEQ8N9kicGJ3qye8ibPt4YNeHRNib2g/640?wx_fmt=png)

当反馈电流IFB固定不变时，IR1随着R1和R2的值增加而减小，因此分压器电阻增加也意味着进入反馈引脚的IR1漏电流百分比更大，并且IR2降低，从而产生低于预期的反馈引脚电压VFB。我们将VFB同内部基准电压Vref比较以此来输出电压，反馈电压的任何一点误差都会导致输出电压不精确。但是IFB在实际系统中并非固定不变，不同的器件均不相同，并且也随工作状态而变化。要想估算出漏电流引起的输出电压极端变化情况，需要在计算中使用IFB的最大规定值。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLOto7TdWreBBkxFJVHd98XhyYo1vCDMyvph4HVUsQfh6A2VFWCRW3Vw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBL6xehicsB7uHoMdMPglqIzqOruicHMCdHr31ZPXwq05m2Am1aTs33EdHQ/640?wx_fmt=png)  

__________€3.补偿器增益__________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLRsWs5tNPPxdkYqKlPScBXmLSR2FwMib17jU0jvIKSRD2NbVQRv0fzfg/640?wx_fmt=png)

**_图17-2：电流型运放_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLmQnjMNNe11TdbYJBjxPUdiatgIqPVicwXVWWS8rb5RgM3kHMibQkhHXRw/640?wx_fmt=png)

如**_图17-2_**为电流型运放补偿网络，其中Gm为运放跨导系数，Zf(S)为RC补偿网络函数，电流型运放的Gea(S)与R1和R2的比值有关，但电流型运放补偿器增益与R1、R2取值并无直接关联。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLcNKq6J62QeSVBEvlSBc46UTBALThamOpP5186NUKMnp2dfu9ibBCaibg/640?wx_fmt=png)

**_图17-3：电压型运放_**  

如**_图17-3_**为电压型运放补偿网络，当反馈电阻只是单电阻的情况时，  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLMBwZH3yZSChXiazlSGzBn8IYT8xibUxkBKvic2lXiaXeQjtGI5gOia4oDGg/640?wx_fmt=png)

其中Zf(S)为RC补偿网络函数，当反馈网络只是单电阻情况时，电压型运放补偿器增益Gea(S)与上变压电阻R1有关。在动态负载对纹波有要求的场景，我们可以调整R1阻值做进一步优化，为了保证输出电压精度，FB分压电阻不能选择极大阻值，建议分压电压阻值满足：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLgA9iaGnpjs000xGJ9qwib8z6Y1dgiaEK5BAnYqFLEg70acmoATG5pI6PQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLPHic9q2QbHuwjUjpKUM7wNVC3lAzMKoicjJGXtBsHqDyickXprXO2REjw/640?wx_fmt=png)

**_图17-4：常更改下分压电阻_**  

如**_图17-4_**，无论哪种运放，对于不同输出电压场景，建议固定上分压电阻阻值，更改下分压电阻阻值来获得相近的环路特性。

__________€4.噪声敏感性__________  

电阻式分压器是DC-DC的一个噪声源，这种噪声等于4KBTR，其中KB为波尔玆曼常数，T为开式温度，而R为电阻。分压器使用大电阻时，这种噪声会增加。

此外大电阻也会使更多噪声耦合进入DC-DC中，产生这种噪声的源头有很多，包括AM和FM无线电波，手机信号和其它的DC-DC以及RF发射器等等。尤其是当PCB布局不当，DC-DC闭环增益会放大噪声从而出现在输出端。要想降低对其他噪声源的敏感性，可以使用更小的反馈电阻。

__________€5.布线注意点__________

如**_图17-5_**，FB是误差放大器的负输入端，这是个高阻抗脚位，因此容易耦合一些噪声。在实际应用中，常常会遇见分压电阻R1和R2放在输出电容端，导致FB走线较长。这条走线充当了天线，更加容易符合非真实反馈，进而引起输出电压变化或者不稳。在电路布线中，我们需要短FB走线，分压电阻尽可能靠近DC-DC本体。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLJWX0ArJ8fqm5MIvw1SXicED29aCKE2Ska9fM18Bdx5scgHegMibatzrw/640?wx_fmt=png)**_图17-5：长FB走线带来的天线耦合效应_**

R1和R2应靠近IC的FB拐角布置，而Vout是直流电平，抗干扰能力强可以长走线。一般在输出电流只有几A时，R2的地可以选择在芯片的地附近连接。但是如果输出电流大于10A，Vout线上会损失电压（Vdrop），导致实际的输出电压会比预设电压低。这种情况我们建议如**_图17-6_**所示，近端接地，远端采样。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBLiaA6WTlyeYrmkj9gliaydUWZOpxzgVDvGOdLpiarsa0uBgUuYeBB5A6yQ/640?wx_fmt=png)**_图17-6：大电流建议layout的样式_**

建议FB走线要尽可能短，尽可能不分层，且周围不要有干扰源，比如开关、电感以及不干净的GND。

__________€6.小结__________

反馈电阻的阻值根据使用DC-DC的不同分为两大类。其中一类DC-DC被设计为不需要节能工作或者面向大电流应用，使用几十kΩ的反馈电阻。因为反馈电阻是几十kΩ，如果使用几百kΩ以上电阻的话，其反馈电路的阻抗会变的很高，工作不稳定，有可能因为噪音发生误动作。同样如果使用几kΩ以下电阻的话，反馈电路会增加无效电流使得效率低下。

另一类DC-DC被设计成节能型，使用几百kΩ的反馈电阻。这样减少反馈电阻的无效电流、提高效率。此类DC-DC的反馈电阻被设定成几百kΩ也能够稳定工作。所使用IC的Datasheet 上会记载参考电阻，推荐使用差异并不是很大的电阻。

另外，以上这些DC-DC的分压电阻取值的讨论可以迁移到LDO的分压电阻取值上，相关结论LDO也同样适用。