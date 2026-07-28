# SCD-17：多MOS并联使用的场景和要点


> 原文地址: [https://mp.weixin.qq.com/s/qMXeJA6M2MjrDj\_KRc4toA](https://mp.weixin.qq.com/s/qMXeJA6M2MjrDj_KRc4toA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7YsyIc67kt1ibEXNylpImPFic42ru1VHwZIZSNVCTQAS8BM9YKD0Mnqibw/640?wx_fmt=png)

____**____**★★★**____**___________________SCD-17---MOS的并联___________________**____**★★★**____**____

引言：双极晶体管由于是基极电流驱动，因此电流平衡容易被基极-发射极电压VBE的波动所破坏，使得并联连接均衡变得困难。而功率MOS是由电压驱动的，因此只需要向并联连接的每个场效应晶体管提供驱动电压就可以保持相当不错的均衡性，这使得并联连接相对容易，因此并联连接MOS比并联双极晶体管更容易。功率MOS具有优异的热稳定性，不会发生热失控，所以并联功率MOSFETS是一种减少传导损耗和分散功耗以限制最大结温的常用方法，本节主要介绍在各种应用场景中使用并联功率MOSFETS的要点和范例。

__€1.并行连接的考虑点__

_电路/Layout对称_

当在高速下控制高功率时，有必要仔细考虑设备的选择及其特性中可能变化的范围。在进行并行连接时，最重要的是避免电流集中，包括过电流，并确保在所有可能的负载条件下，良好平衡、均匀所有流过器件的电流。如**_图17-1_**所示，建议对称地布置电路，并有效隔离输入信号和输出信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTzLxzO9icx4WMRS8vkiaKNQ6Fn5iatZ457UCbXk0Bdfc5EhIj2RR4QjOTq2nfz7IdyTDltH2hE2PWqw/640?wx_fmt=png)

**_图17-1：两枚MOS并联_**

_开启关断阈值一致_

通常在通电和断电期间会出现电流不平衡，这是由于功率MOSFET的切换时间的差异造成的。众所周知，变化在开关时间在很大程度上取决于门-源阈值电压Vth的值。也就是说，Vth的值越小，通电时间就越快。相反，在断电期间，Vth的值越大，截止速度就越快。因此，当电流集中在一个具有较小Vth的功率MOS中时，在通电和断电过程中都会发生电流不平衡。这种电流不平衡会导致设备的功率损耗过大，并导致故障。对于并行连接，为了减少瞬态期间的变化，最好使用相近Vth值和开关时间的变化。在并联连接的每个电源MOSFET之间插入一个栅极电阻也很重要，以确保稳定运行和防止异常振荡。（**_图17-1_**)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTzLxzO9icx4WMRS8vkiaKNQ6icDBlg4wAbz36IInZ1giccNKtzJCfhuHdZaUQkFYialKaF9mCrRaIldRA/640?wx_fmt=png)

**_图17-2：不均匀开启阈值带来的影响_**

如**_图17-2_**是不平衡开启阈值带来的电流ID隐患，开启和关断更快的MOS在开启和关断时会产生两个尖峰电流脉冲，如果尖峰电流脉冲过高触及MOS的IDpeak，就会损坏MOS，发热也会不均衡。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTf4LHmvEcjv5RuFk8cWgQY0GDhaWT3oRsyfYgybtfek3zbVEMOOcuZicGPyNkfrlaE47DA4QovtLA/640?wx_fmt=png)

**_图17-3：功率MOSFET电阻VS温度_**

__€2.并行连接的静态/动态动作__

首先考虑两个MOS并联运行的静态操作，如**_图17-4_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTzLxzO9icx4WMRS8vkiaKNQ66x9OiaLbkepXwjPExkib6U2WNRtMXCXfJq65AnDdv8Nia54UhJFykI6Nw/640?wx_fmt=png)

**_图17-4：同时驱动两枚NMOS_**

_静态_

每个场效应晶体管中的电流与其接通电阻RDSo·n的倒数成正比。当然，RDSon最低的MOS将导通更多的电流。当它升温时，它的RDSon增加，将一些电流转移到其它MOS。热耦合良好的平行放置MOS的结温度大致相同。电流共享仍然取决于每个MOS的相对对地电阻，电阻值在MOSFET数据表中规定的RDSon公差范围内。

_动态_

在动态运行过程中，具有最低阈值电压VGSth的MOS首先打开，最后关闭。这种场效应晶体管占据了更多的开关损耗，并在开关转换过程中承担了更高的电应力。在一定程度上，热共享效应平衡了开关和传导损耗，MOS将在大致相同的温度下运行。

__€3.并行连接的Tips__

当并联使用MOS时，如下有一些注意点：

#1：每个场效应晶体管需要自己的栅极电阻，其值从几Ω到几十Ω。这有助于电流共享和防止门振荡。

#2：MOS需要良好的热耦合，以确保设备之间的电流和热平衡。它们可以安装在一个普通的散热器或铜平面上，以保持相同的温度。

#3：每个场效应晶体管的放置和布局应在合理的范围内，相同和对称，以平衡临界栅源和漏源回路中的寄生电感。

#4：确保栅极驱动电路可以驱动多个MOS的寄生电容（即栅极驱动电流要足够大），而不会变太热，寄生电容（电荷）要乘以平行的MOSFETS的数量。（传送门：[MOS-1：MOS的寄生模型](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485989&idx=1&sn=d411ff715d230f638b41e002adfdc1cf&chksm=c33540baf442c9ac894b1740e0c54265de5a22c419ddc0b3668e801566b906a8dc415734b0dc&scene=21#wechat_redirect)）

#5：避免在栅-源极（GS）或栅-漏极（GD）之间添加外部电容器。如有必要，可以调整栅极电阻器的值，以优化MOS的开关速度，关于如何优化MOS的开关速度，回顾上节（传送门：[SCD-16：MOS的减速加速电路设计](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491402&idx=1&sn=d49442b51f6269fe48ace41d29c54f3b&chksm=c33555d5f442dcc3f39e5832ae36f2efa00525115a4b6434e5abeb21b919bf21156ec9a22aa8&scene=21#wechat_redirect)）。

#6：如果需要齐纳二极管Zener来保护MOSFET驱动器，建议将它们放在栅极驱动器输出附近，并放在栅极电阻之前。

功率MOS数据表的绝对最大额定值表中规定了最大功耗。最大功耗是一个计算值，在现实中，它不是很有用，因为用于此类测试的标准PCB与实际的、真实的使用环境无关。以绝对最大额定值为参考基准，根据我们的PCB设计和环境条件，特定封装的热性能在实际使用中可能更好或更差。

__€4.并行连接的使用场景__

多MOS并联的使用场景一句话总结：在大电流通路场景平均分摊电流并减少发热量（Rdson越并越小）。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRzsUhYoPz16FKnt6iajBCS00icJgcDTichG4icSwfWgx0JianwB5ZEcsFt3AicVBJqfBOlHDOIE8yEbafg/640?wx_fmt=png)

**_图17-5：外置并联MOS双相输出同步降压DC-DC_**

如**_图17-5_**是一个并联使用MOS的场景，LTC3856是一个双相外置开关的降压DC-DC器件，总输出电流可以达到50A，平均到单相为25A。以上相为例，Q1和Q5并联作为一个高侧开关，Q2和Q6并联作为一个整体同步开关，这样某一时刻，单个MOS只需要承受12.5A即可。当然此类器件可以进行拓展，可以使用更多枚MOS并联，进一步提高输出的电流能力，前提是满足LTC3856的要求。