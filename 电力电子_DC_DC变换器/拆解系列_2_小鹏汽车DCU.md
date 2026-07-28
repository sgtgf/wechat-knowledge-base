# 拆解系列-2：小鹏汽车DCU


> 原文地址: [https://mp.weixin.qq.com/s/Y-LvZXBSjq8kr7EoF8Vqwg](https://mp.weixin.qq.com/s/Y-LvZXBSjq8kr7EoF8Vqwg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScRicFDBt1vuxbMzrk0Msuo75ddSI4lwoTFehgSRPwZKm5ytA8jy0IrGJ0GMM9LcebYzjSlBSMHiaw/640?wx_fmt=png&from=appmsg)  

____**____**____★★★____**____**__________DAS-2---DCU__________**____**____★★★____**____**____

______撰稿：Timothy  校稿：Timothy______

引言：本节继续进行拆解，拆解产品来自小鹏汽车搭载的智能驾驶域控制器DCU，整机结构紧凑，占据空间少。

____________€1.外观结构____________

如**_图2-1_**所示，整机为铸铁锌合金全金属结构件，四角延伸出四个宽大的紧固柱，其中右上角格外偏大。铸铁锌合金结构，整机强度更高，与DAS-1（传送门：[拆解系列-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247494103&idx=1&sn=a93085d62197b6085b71673aa38364b7&chksm=c336a348f4412a5e865d262a09a40a4386a04bc5d2c99ee4eefd532d462f369a527986ccefef&scene=21#wechat_redirect)）不同的是并未采用液冷散热结构，而是在上盖分布许多鳍片，以此来增加与空气的接触面积，提高散热性能。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqfq8H2K9UNTo3TcUxgBMZAQx4wZ7zocI4DfuA8ThnzboWEhJIyfRaicA/640?wx_fmt=jpeg&from=appmsg)

**_图2-1：整机正面_**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMq2dpb8icZsROlTHadicicCA5dRuFaplg5aqhhWZcdQ1cJlNK5SD6y0T9yg/640?wx_fmt=jpeg&from=appmsg)

**_图2-2：整机背面_**  

**_图2-3_**是主板下侧接口排列，从左往右依次是电源入口、CAN口、串行摄像头接口。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqnSvK3eG1pKHubXQ3LbW39xbjAYxTumELCiaAr1Vq2HBT3OBqxGiaibP9w/640?wx_fmt=jpeg&from=appmsg)

**_图2-3：整机下侧面接口_**

**_图2-4_**是主板右侧接口，左边是一个外置硬盘接口，右边是以太网接口  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMq3LZGI9sfmxaaGbCJ0g0biaKAV5S51FJu4dFr9gdHZu1JbcHpMJ7KOlg/640?wx_fmt=jpeg&from=appmsg)

**_图2-4：整机右侧面接口_**  

如**_图2-5_**所示，由于没有采用液冷散热，仅仅靠PCBA与上下盖的边缘接触不足以散去产生的热量，所以内部增加了许多凸台，还覆盖有导热硅脂，与PCBA正反面的热器件形成良好接触。在摄像头公座那一排，可以看到上盖的内嵌槽贴敷了一整条较厚的导电泡棉，接地更加良好，提升了信号的抗干扰能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqJrGXkVOW5k3Ad3VFicMX5T2xlVG79ZLiadCIKH7YlIcDlBic9leuwbFLw/640?wx_fmt=jpeg&from=appmsg)

**_图2-5：上下盖内部结构_**  

____________€2.主板全局____________

**_图2-6_**是主板PCBA正面全局图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqgWYbkVHicNnuHLCdtXGv8O48SHEo5JBdcWn3UZtm4DGS1czSvnMglzg/640?wx_fmt=jpeg)

**_图2-6：PCBA正面_**  

1#：红色框--->来自英伟达的TA890SA-A2处理器，红色箭头--->CAN通讯接口。  

2#：绿色框--->来自Marvell的车载以太网芯片88EA6321-TFJ2，绿色箭头--->黑白蓝Fakra公座均为串行摄像头接口，三个四孔，两个四芯。

3#：黄色框--->来自英飞凌的SAK-TC397XP-256 MCU，其相关参数可以自行查阅，黄色箭头--->电源入口和一些通讯接口。

4#：蓝色框--->来自美信（现ADI）的MAX96751FGTN/V，MAX96712GTB/V\*3串行/解串器，蓝色箭头--->车用以太网接口。

5#：白色框--->来自美信的MAX20024GGXC/V，DC-DC型PMIC

6#：灰色框--->8枚DrMOS，型号未知

主板右侧还留有白色卧式调试端口。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqqTtgOzznQeF1dQNxwpJCAmuM1HVZfN1IT9rqkWHn0zxFcb9aHNv5hg/640?wx_fmt=jpeg&from=appmsg)

**_图2-7：PCBA反面_**

**_图2-7_**是主板PCBA反面全局图：  

1#：红黄绿色框--->Marvell的以太网PHY Q2112-NYO2\*3。

2#：蓝色框--->多相控制器，型号未知，和正面的8枚DrMOS搭配使用。

Marvell的88Q2112是目前市场上推出的唯一一款汽车级1000 BASE⁃T1以太网 PHY收发器，支持IEEE 802.3bw和IEEE 802.3bp协议定义的100/1000 BASE⁃T1的以太网物理层部分，并能实现单对非屏蔽双绞线发送和接收数据。芯片支持GMII，RGMII和SGMII直接连接交换机的MAC端口。除了能满足汽车级严格的EMI要求外， 88Q2112还支持在车内传送未压缩的 720p30摄像头视频。

____________€3.其余芯片____________

SJA1105P/SJA1105QELY/R/S是一款支持IEEE Audio的5端口汽车以太网交换机芯片，支持视频桥接(AVB)和时间敏感网络(TSN)标准。五个端口中的每一个端口可以单独配置以10/100/1000Mbit/s的速度运行。这个灵活特性使得可以连接任何快速/千兆/光PHY或MCU/MPU的端口。外部物理接口的例子有TJA1100和TJA1102 IEEE 100BASE-T1，更新的MII/RMII/RGMII接口提供了扩展IO电压，如1V8和3V3RGMII。此外，在/R和/S变体上可用的SGMII接口扩展了交换机的连通性选项。SJA1105P/SJA1105QELY/R/S交换机系列是根据ISO 26262开发的标准，符合ASIL-A标准，降低了ECU的安全关键设计负荷，

1#：5端口存储和转发架构。

2#：每个端口可单独配置为10/100mbit /s时，作为MII/RMII和10/100/1000mbit /s，运行为RGMII或SGMII。

3#：独立的I/O电压域，可选1.8/2.5/3.3V操作的MII/RMII/RGMII，可选1.8/2.5/3.3V主机接口，1.2V核心电压域。

MAX20024GGXC/V，来自美信的五通道降压PMIC；20087ATPA/VY，四通道摄像头保护器；LM5143，3.5V至65V双路同步降压直流/直流控制器。

_____________€4.局部分布_____________

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuib0XqEslu1ZHOV2SCHZMicHIH1ZTX1ukgrE2dibibFZGul7AR17skLrZSdQ/640?wx_fmt=jpeg)

**_图2-8：主系统局部图_**

**_图2-8_**是主系统，系统部分由NVIDA TA890SA-A1 SOC，RAM为8片美光的LPDDR4，ROM是1片美光的UFS和1片串行Nor flash，型号未知。

在主板左上边是一颗Marvell的以太网交换机芯片88EA6321-TFJ2，也是特斯拉用在自动驾驶系统上那颗，实际上这颗芯片是为座舱系统设计的。Marvell第一代车载以太网交换机88EA6321，是7端口以太网千兆性能交换机，完全符合IEEE802.3车载标准，支持AVB（音频/视频桥接功能），并支持低能耗以太网，可降低功耗。该款7端口以太网交换机集成了2个IEEE 10/100/1000BASE-T/TX/T 端口、2个RGMII/xMII（这2个端口可配置成1个GMII）端口和1个SGMII/Serdes 端口。该交换机提供远程管理功能，可轻松连接和配置该设备。而88EA6321到了AEC-Q100 Grade 3级，即-40°C to +105°C。

**_图2-9_**是电源的局部图，主电源分为两个接插件入口进入，靠近连接器端布置有两枚6600W的高性能TVS管，来自东沃电子的SM8S26AT。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibIc05FoibcYhS13zibo1yBJzNHswgjM7O8amdR7mflCCTA0XzLnxuEqqg/640?wx_fmt=jpeg)

**_图2-9：电源局部图_**

经由大电流功率电感，主芯片核心供电为多相控制器+DrMOS，具体型号未知，R22电感旁边布置钽电容和高容MLCC。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibkGZQuhNuxIZjqQhOWtjJyBFn3BuwxgicW4yIskukUowFh57pH3cHCpg/640?wx_fmt=jpeg)

**_图2-10：背面局部图_**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuib0RvJIMGzQRrLsPZQ7CZ5E7qZRH0aTLgDrMjTrGwcx3ib9yd7Q4M4rRg/640?wx_fmt=jpeg)

**_图2-11：背面局部图_**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSXp7z1NGPRkId4srzoQuuibWJiabe0a2eGibaMVSrIWBvhpQDk9XkSyKJLH1HLLK9wKbFRoquy3uTXQ/640?wx_fmt=jpeg)

**_图2-12：背面局部图_**

____________€5.简略框图____________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ0WBdtSuFkh6acJTyMMpibSqdicum6gTicj1m0FEBPEXKQjShyTvKVsygsC0HPYR4oYIADmuWWfLjfQ/640?wx_fmt=png&from=appmsg)

**_图2-13：简略框图_**

______________€6.总结______________

从整机的拆解来看，如下是一些总结要点：  

1#：整机采用加厚金属结构，牢固，耐冲击，耐腐蚀。

2#：采用主动金属外壳散热，大量凸台可以覆盖到所有的发热器件，结合鳍片，散热效果不错。  

3#：PCBA正面反面均喷覆有透明三防漆，提高了整体的防水防尘防静电，防器件碰撞性能。

4#：整板固定孔位9个，虽然四周未加贴接地弹片，但是整板边缘露铜，露铜边和上下金属盖紧密贴合，满足了接地需求。

5#：整板布局美观匀称，测试点覆盖率目测达到80%，隐藏了器件丝印，提升了美观度和保密性。