# FCD-7：整流器的整流原理


> 原文地址: [https://mp.weixin.qq.com/s/UQdrISiZMH8KQCyGTK5OKQ](https://mp.weixin.qq.com/s/UQdrISiZMH8KQCyGTK5OKQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQcFTDmXySWjgRxAzPLWUNtJ8icpgdY7iaicibd2vTMFT9jcn1Zm91lcDM8I0hCRMBic5BQf7nQrzCickAQ/640?wx_fmt=png)

____**★★★**_____FCD-7---整流器的整流原理_____**★★★**____

引言：和上一节不同的逆变器（传送门：[FCD-6：逆变器](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490715&idx=1&sn=ff8908a91c8a12f167a18b6268bc03fc&chksm=c3355604f442df121c6b136c505ea25958e0616b67378de24d0afdf733fe6e95f924ea45d926&scene=21#wechat_redirect)）不同的是，本节简述的整流器是和逆变器相反的一个过程，即将交流电AC转换为直流电DC。小功率输入的可以由集成方案解决，功率稍大的都是采用分立方案，本节主要简述分立式整流器的整流原理，集成式同理。

_____€1.半波整流_____

如**_图7-1_**所示，半波整流是使用一个整流二极管来消除输入负电压成分后整流为直流电压（脉冲电压）。之后再利用储能电容器的充电和放电功能来平滑波形，从而转换为纯净的直流电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfB4icxu8uT5QYA7a7a5brHg5UUCkGt5MTmhL9EibmT8WJDw5hkU3sia7DmA/640?wx_fmt=png)

**_图7-1：半波整流简图_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBh4ZhINmsulPmFcpT9q6t5j42ibatagyYOYh14vYkyYPHdjEqwm8OKyg/640?wx_fmt=png)

**_图7-2：半波整流阶段波形_**

__________€2.全波整流__________

由于半波整流对于负电压完全没有利用起来，能量利用率（并非效率）比较低，并且要将正半波内的能量平滑到整个周期内，纹波电流、电压会比较大，对于储能电容的容量，ESR，纹波电流值都有更高的要求，因此在半波整流的基础上衍生出了全波整流。

全波整流是通过二极管桥式电路结构将输入电压的负电压成分转换为正电压后整流成直流电压（脉冲电压）。之后再利用储能电容器的充电和放电功能来平滑波形，从而转换为纯净的直流电压。与不利用输入负电压成分的半波整流相比，全波整流是更具能量利用效率的整流方法。此外，平滑后的纹波电压根据电容器容量和负载Load而变化。

全波整流和半波整流在相同的电容器容量和负载条件下，全波整流的纹波电压更小。纹波电压越小，稳定性越高、性能越优。现在基本都是使用NMOS搭建全波整流桥，MCU来驱动MOS的导通与关闭，开关频率适配AC频率，半波整流方式已经基本被淘汰。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSasyPMiaVguT0Nm4oHypkfBS1tgyibPB468WtJ7HicamMyyEdz2au6JqLoeXNj2V7mspBdugx5cyLicg/640?wx_fmt=png)

**_图7-3：全波整流拓扑_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQQ1q5SYUDt0IcDcd4aiaVazQFzEc88H3ia4amkWICjlwz7vfqqnsicRTsgAkmnW8BxZotRXOdsvw5GQ/640?wx_fmt=png)

**_图7-4：正半波电流流向_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQQ1q5SYUDt0IcDcd4aiaVazL2ibV0n6icyoicRVyWH5HicjUQxG5oAVbIAMzPOY6wKpsl70DbtSujFUrg/640?wx_fmt=png)

**_图7-5：负半波电流流向_**

从**_图7-4_**和**_图7-5_**的整流过程可以看出，整流桥将负半波电压纠正为正半波电压，然后再经过MOS的整流桥主动间歇导通与关断、Cout平滑为DC直流电压输出。波形形成如**_图7-6_**所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TT1NAU3ZwBfA1WIHhRVc3AZEtAtib5jO8GsCs34ZtvcGViaTOHU6iaBjp21GYJKLPNIicTWibvETqOvaGQ/640?wx_fmt=png)

**_图7-6：全波整流阶段波形_**

______________€3._____降压和平滑机制_________

通过开关方式降低高DC电压的机理，如下**_图7-7_**是PWM方式的示意图：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQzFk2AX0ibYM3jCFrpibxHJGxjiacriaxKbJ3icicc3L0OV7YMEp9u65Rbia0XyJHLIL2gA6tUxrQ9eXQdA/640?wx_fmt=png)

**_图7-7：PWM方式降低DC电压原理_**

_____________€4._____NMOS选型________

搭建一个分立式整流系统，NMOS的选型和逆变器一样，除了常规的VGSS、IDSS、RDSON，还需要关注其动态参数，包括导通关断延时、较低的开关损耗、基准开关性能（极低的Rdson×Qg和Rdson×Qgd）、高频率工作状态下良好的EMI表现（集成阻尼网络）。Gate charge characteristics参数越优秀，驱动损耗越低，驱动速度更快。