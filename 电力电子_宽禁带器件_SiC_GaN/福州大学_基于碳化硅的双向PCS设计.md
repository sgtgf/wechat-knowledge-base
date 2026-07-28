# 福州大学：基于碳化硅的双向PCS设计


> 原文地址: [https://mp.weixin.qq.com/s/c5q9RzBt8HHwU\_XSa94Vgw](https://mp.weixin.qq.com/s/c5q9RzBt8HHwU_XSa94Vgw)

**文章来源**：电器设计与探讨

**作者**：陈奇，张彬意，毛行奎（福州大学电气工程与自动化学院）

**摘要**：随着双向储能变流器（PCS)朝着高电压、高效率的趋势发展，SiC 器件在双向PCS中开始应用。SiC的PCS主电路拓扑采用可以有效降低并网电流谐波的T型三电平逆变电路。针对SiC器件开关频率高，基于相电压采样的锁相控制比较容易受干扰，以及电网不平衡时容易影响系统稳定性，提出基于线电压采样的锁相环以及相应的并网电流正负序分离控制策略。最后，搭建了1台基于SiC的10kW双向PCS实验样机，样机性能良好，运行稳定可靠，实验验证所设计方案和控制策略正确有效。

**关键词**：双向储能变流器；T型三电平逆变电路；碳化硅；控制策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCX8epGnVXZbGFWVY6s98jzoMibJEG9zf3VEC1ZqedYa48zRJ6ZDh7u8w/640?wx_fmt=png&from=appmsg)

**0 引言**

随着国家经济的不断发展，用户对电能质量的要求以及用电需求日益增加，电网用电负荷也随之增长。同时,新能源发电如风力发电和光伏发电快速发展，但由于其发电具有随机波动性等缺点，容易引起电网不稳定。储能技术可以平滑新能源发电波动，能够为新能源发电友好并网提供解决方案，其正逐渐成为越来越多国家实现碳中和目标的主要技术之一。

目前,储能技术在电力系统、新能源等领域的运用越来越广泛,储能行业也在国家政策以及市场发展的双重驱动下快速发展。储能变流器(PCS)是储能系统的关键设备单元,作为储能系统与电网的接口，承担着外界与储能系统交换能量的重要任务。PCS可以提高电网的可靠性、效率和灵活性,对于推广清洁能源、建设智能电网、保障能源安全等方面具有重要意义,这对PCS的性能以及容量提出更高的要求。PCS运用较为广泛的是多电平电路,其中T型三电平逆变电路因相同频率下效率高、并网电流谐波含量低等优势,在储能领域成为研究和应用的热点。

市场的发展需求往往推动电力电子器件的发展。近年来,PCS也逐渐朝着高压、高效、高频化趋势发展。随着电压等级以及开关频率的提高，硅(Si)半导体器件受到材料自身的限制,不能很好适应这一发展趋势。用新型宽禁带半导体材料制造的电力电子器件比Si半导体器件具有更好的性能，其中宽禁带半导体器件中的碳化硅(SiC)器件具有更高的禁带宽度、可承受更高的电压等级、较低的导通电阻和更快的开关速度，快速获得工业应用。目前，市场上已经有商业化的成熟可靠 SiC器件，而且在电路中应用SiC器件可以提升系统效率，减小体积和提高功率密度,在储能领域也获得应用。

本文研究采用宽禁带SiC的双向PCS,主电路拓扑为T型三电平逆变电路。本文给出基于SiC 的双向PCS样机系统结构,并以A相为例简要分析其工作原理。介绍了双向PCS调制方法，针对目前采用相电压锁相控制的不足以及不平衡电网电压下并网稳定性问题，提出基于线电压采样的锁相环设计和并网电流正负序分离控制设计。最后,进行了实验验证。

**1  双向PCS 样机系统结构**

基于SiC 的双向 PCS 系统框图如图1 所示。系统包括DSP主控单元、三相相电流采样、三相线电压采样、母线电压采样、驱动电路以及通信模块部分。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCgfEy5YtpgZeps2VnhHdfxjH3OqWZbn4VMST7iay5nyZRgJAxRJwp8gQ/640?wx_fmt=png&from=appmsg)

主电路拓扑采用T型三电平逆变电路,母线侧电容采用上下母线电容Cdcl、Cdc2串联的结构，且Cdcl\=Cdc2。上下母线电容电压理想情况下相等，表示为Udcl=Udc2=Udc/2,母线电压正极、负极以及中点电位分别表示为P、N、O点。T型三电平逆变电路每相包含4个开关管，以下以A相为例简要分析其工作原理。A相开关管由竖管（VTal、VTa4）和横管（VTa2、VTa3）组成，其中VTal与VTa4串联后中点为A;VTa2与VTa3串联后连接A、O两点。A点经逆变器侧滤波电感度Lia、网侧滤波电感Lga连接电网，ua表示A相相电压。

通过组合控制VTal、VTa2、VTa3、VTa4, 可控制A点分别与母线的P、O、N三点相连，从而控制A点相对于0点的电位UAo有Udc/2、0、-Udc/2三种电位状态。若分别以P、O、N表示这三种电位状态，并以“1”表示开关管导通，以“0”表示开关管关断，则可得A点三种电位与开关管通断的关系。电位状态与开关管通断关系如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCZqklOzBiayxjPH8YBC4Eestgj5Kq85kzCTCDJ94p4HTAcZRJ3iccZRVg/640?wx_fmt=png&from=appmsg)

**2  双向PCS调制方法**

目前,空间矢量脉宽调制（SVPWM)已经成为T型三电平逆变电路中常用的控制方法。SVPWM采用空间电压矢量理论，通过对电压矢量的控制来实现对交流电压的控制。其主要优点是可以实现较高的输出电压质量和效率，同时在多电平电路中可以实现较高的输出电压调制率。

**2.1  空间电压矢量**

T型三电平逆变电路中A、B、C三点均存在三种电位,因此三相组合后总共存在27种空间电压矢量。这些空间电压矢量可分为6个大扇区，每个大扇区又可细分为6个小扇区。T型三电平空间电压矢量图如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCyJv6ecZ8xiakm5yVB560bmw9wGbbbibBQ6Cqf4pJdOWxsPfiazOgACMYA/640?wx_fmt=png&from=appmsg)

按照矢量幅值大小分类，可将图2的空间电压矢量分为6个大矢量，6个中矢量、12个正负小矢量以及3个零矢量。以空间参考电压Urer分布在第I扇区中的1小扇区对七段式SVPWM生成脉冲宽度调制波的过程进行分析。第I扇区空间电压矢量图如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSC4GJic22Bus8aKtWbVPLicAjBsnYM5oHRJaY7PX6ZueickqVvHMndYGm0A/640?wx_fmt=png&from=appmsg)

对于七段式SVPWM,电压矢量作用顺序以负小矢量作为起始点，且作用顺序关于中心对称。上一电压矢量到下一电压矢量中仅有一相电位发生变化,但电压矢量作用顺序不能存在P电位状态与N电位状态之间的突变,需经过O电位状态过渡。则根据最近三矢量原则，空间参考电压Uref位于第I扇区中的1小扇区时,实际参与合成的电压矢量由零矢量000、正小矢量P00以及负小矢量ONN、OON组成。

综上分析，设开关周期为Ts，当未进行中点电位控制时允余正负小矢量POO、ONN作用时间均为T1/2,负小矢量O0ON作用时间为T2,零矢量000作用时间为T3。七段式SVPWM电压矢量动作过程如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCT5pb46xd585mGlvDtjKKBlJJHwkZcBZrdTmRicmnanAg77qlQ8DgmRw/640?wx_fmt=png&from=appmsg)

**2.2  基于线电压采样的锁相环设计**

目前锁相环技术主要有乘法鉴相器锁相环、同步坐标系锁相环、解耦双同步参考坐标系锁相环、双二阶广义积分器锁相环（DSOGI-PLL）等。其中DSOCI-PLL相较于其他锁相技术，稳定性好,锁相精度高。但以上的锁相技术均是基于相电压采样进行锁相控制，对于采用 SiC 器件的双向 PCS,开关频率高,相电压容易受影响，会导致锁相环的稳定性变差。且由于本设计的PCS采用三相三线制,系统结构简单，因此直接采用线电压进行锁相控制，既提高了锁相的稳定性，又简化了系统结构。

三相相电压与两相静止坐标系下α轴、β轴分量的关系式为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCFxicXbCoxRXib6PGqW81ictyfoxvvtfqqTOjRVeqkBVeJKeneVFN4mrpQ/640?wx_fmt=png&from=appmsg)

根据式（3），构造可逆矩阵进行反变换，可得到基于线电压的三相静止-两相静止（3s/2s）变换关系式为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCjvE4NggpMicK3bqL5Via4dBkbGXSdyHrLro1Z0UkibN3FqkqMy0CicW2Pg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCIXLrU5XGRx7SyM5GQdqOHRzAL63ebciaLKV7NSG7HUD8Q50FSfOWTpA/640?wx_fmt=png&from=appmsg)

利用式(4)所提的基于线电压的3s/2s变换对线电压进行解耦,转化为两相静止坐标系下的分量。而DSOGI-PLL锁相环带有滤波作用,在三相电网电压不平衡的情况下，可以先对两相静止坐标系下α轴β轴分量进行正负序分离，获取该坐标系下的正序分量，然后将该正序分量通过式(5)的2s/2r变换转化为两相旋转坐标系下q轴的正序分量，并利用该分量进行锁相环控制。因此，可将线电压的3s/2s变换与DSOGI-PLL相结合，进而完成基于线电压采样的锁相环设计。

基于二阶广义积分器DSOGI的正交信号发生器如图5所示。图5中，虚线部分表示二阶广义积分器,输人交流电压为Ui，输出交流电压为u。,qu。, 两者相位相差90°。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCPKkEcz2YSeKTQMP45RhNdLa9d03vXL18MO9ysad9Y8KMnmJsCRQfZA/640?wx_fmt=png&from=appmsg)

该正交信号发生器的同相信号传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCagw2we9uguQEeyVvZywENibHCHEiaRnQ1C2JpFZrdrV3bqtyAFHEFSSw/640?wx_fmt=png&from=appmsg)

三相电网电压不平衡时，根据瞬时对称分量法先对三相电压正负相序矢量进行分析：三相电压正相序矢量所对应的两相静止坐标系中Uβ超前Ua，三相电压负相序矢量所对应的两相静止坐标系中Ua超前Uβ，则两相静止坐标系下正负序分量可以用以下两个式子表示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCwEicfcMBKRoq4GYtyeAFt6ib9DjGIuFSvQ2XBGyuIHfheSoDy9HOurCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCkEZ7MkFVyemZjhQzNWhQyu4NEsdOViaLPCBh6XqjRfrPxIfKZVJsXWQ/640?wx_fmt=png&from=appmsg)

由式（9）、式（10)可得,两相静止坐标系下正负序分量可以分别由同相信号与正交信号叠加运算而成。

根据基于二阶广义积分器DSOGI的正交信号发生器原理，结合线电压的3s/2s变换，可进行如下的锁相环控制设计。线电压先经过变换转化为两相静止坐标系下Ua、Uβ分量，利用双二阶广义积分器的正交信号发生器（DSOGI-QSG)对Ua、Uβ进行正负序分离,再利用PI控制器对两相旋转坐标系下q轴的正序分量进行锁相调节。基于线电压采样的锁相环控制框图如图6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCFibuhHbH5ticbHHcicJCZCtP8tIrQHzRfN02qACiabgFnCRnNPOZbHkwmg/640?wx_fmt=png&from=appmsg)

**2.3 并网电流正负序分离控制设计**

当电网电压不平衡时，需要对并网电流进行正负序分离控制，以平衡三相电流。由于需要及时跟踪并网电流，因此电流正负序分离的软件带宽需要越宽越好，则采用高带宽的全通滤波器，构造出同相信号与正交信号，其正交信号的传递函数为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCbFw9UT8Iy4a6cs37eZib132ZGfG1iatJBVgicl8cJibKgoBuP69bx3VsIg/640?wx_fmt=png&from=appmsg)

图7中，输人交流电流信号为Ii，输出交流电流信号为i。qi。，两者相位相差90°。

同理，三相电流正负相序矢量对应的两相静止坐标系下正负序分量可用式（9）、式（10）表示。

综合上述分析，对并网电流进行正负序分离：先将三相相电流进行3s/2s变换，得到两相静止坐标系下的ia以及iβ分量,再利用式(11)输出同相与正交信号,最后通过式（9）和式（10）计算输出两相静止坐标系下的电流正负序分量。两相静止坐标系下的电流正负序分离如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCDe82EUbmiavaUb1RkBQTuuh2rcMe9mIHiazfpz7DsVcC5E021ukEyD7w/640?wx_fmt=png&from=appmsg)

通过图8可以获得两相静止坐标系下电流正负序分量,再经过2s/2r变换后即可得到两相旋转坐标系下的电流正负序分量，并对其进行分离控制。并网电流正负序分离控制策略如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCwD1yDg24pfwicibqKjr4B5tyKZ1BOgZkdiayIkeYwmia2fcib8tPAR6RNiag/640?wx_fmt=png&from=appmsg)

上述控制策略先获取电网电压、电流在两相静止坐标系下的正负序分量，随后进行2s/2r变换，将其转化为在两相旋转坐标系下电网电压、电流正负序分量。然后，利用前馈解耦控制，分别对两相旋转坐标系下的正序、负序分量进行控制。最后,进行2r/2s变换,将两相旋转坐标系下控制结果转换回两相静止坐标系下的控制结果，并将其叠加后反馈给SVPWM。

**2.4 控制程序流程**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSC4XuWkPd4FRXC1ZG9Bmd4gQGAesMjNFlYDtibg4s97JQR4I5My13eLdA/640?wx_fmt=png&from=appmsg)

系统控制程序流程图如图10所示。左侧虚线方框为线电压锁相环程序流程：对三相线电压采样后先进行线电压的3s/2s变换，再结合图6进行离散化计算，后提取两相旋转坐标系下q轴的正序分量进行锁相控制。右侧虚线方框为并网电流正负序分离控制程序流程：锁相完成后等待并网条件满足,DSP判断并网条件满足后闭合继电器，采样三相相电流，结合图8进行离散化计算,后提取两相旋转坐标系下正负分量分别对其进行计算,并将结果赋值更新,DSP输出SVPWM。

**3 实验**

设计采用线电压锁相环的T型三电平双向PCS实验样机。T型三电平双向PCS关键参数如表2所示。功率开关管采用United SiC公司的SiCMOSFET，主控制芯片采用TI公司的TMS320F28377。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCtAUu6gT9tenQVPibHJJjUSPgrPicI2xjmsxlkEZMybbqDYD33n9KaWXQ/640?wx_fmt=png&from=appmsg)

采用所提线电压采样的锁相环，锁相环输出信号如图11所示。图11中，A相电压以及相角的控制器DSP的DAC输出波形，线电压经过3s/2s变换后再进行锁相环控制，可以很好地锁定相电压的相位和频率,验证了线电压3s/2s变换的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCJibM8UbCRyFGIRIaDROAWPh7RQAOQMQ6oe8eSibrrVVL4afDNSe7jR5w/640?wx_fmt=png&from=appmsg)

采用设计的并网电流正负序分离控制,在双向PCS样机上进行了逆变并网、整流以及双向切换实验。额定功率10kW逆变并网条件下三相电流以及U线电压波形如图12所示。此时相电流总谐波失真率(THD)为2.43%,功率因数为0.999。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSC62atbJgIrxYjsZRVqUtfoK5UFT172H12sBuXkwPgF64cRmzufM7bQA/640?wx_fmt=png&from=appmsg)

10kW整流实验条件下三相电流以及Ua线电压波形如图13所示。此时相电流THD为2.38%,功率因数为0.998。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCdXAsRXjJibZjF5t8RPQMAOC3mtcATbqY8sgCviaek5t9kibtCncNTMUQw/640?wx_fmt=png&from=appmsg)

10kW功率下逆变向整流、整流向逆变切换时三相电流和Uab线电压波形分别如图14、图15所示。由图14、图15可见，实验样机在双向切换过程中实现了无缝切换，并且切换时间为100 ms。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCD6wr3aibqaQ89kgq0QicUp1lFm99EZZEBWckmSqXnvEgGkHLjL5U3uJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSC8bouYPnFaYtiaSo3OricsmrmTbSfgbX9IzjGvlCgyuUtsvNn97t7LI5A/640?wx_fmt=png&from=appmsg)

实验样机效率曲线如图16所示。由图16可见,在逆变并网满载时效率为98.47%，整流满载时效率为98.56%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSC5KuDmLicTK8VSric9mDyk0DeQWsNmBUA8eDSkUNM3UGb6e0WjvXzNj3w/640?wx_fmt=png&from=appmsg)

**4 结语**

本文设计了采用SiC器件的双向PCS,主电路采用效率高、并网电流谐波含量低的T型三电平逆变电路。针对SiC器件的开关频率高、开关速度快,采用相电压锁相控制容易受干扰以及不平衡电网电压下容易影响系统稳定性问题，提出了基于线电压采样的锁相环和并网电流正负序分离控制策略,分析了线电压的3 s/2 s变换以及并网电流正负序分离的方法。最后搭建了1台基于SiC的10kW双向PCS实验样机，样机性能良好，运行稳定可靠，实验验证了所设计方案和控制策略正确有效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqb8Po3qdBDOEjHEmo3DibcFdSeQxPepq4CgmLpeSttlMicicb3ru8mu738A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)