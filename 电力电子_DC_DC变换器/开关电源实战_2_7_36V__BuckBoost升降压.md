# 开关电源实战：2.7-36V BuckBoost升降压


> 原文地址: [https://mp.weixin.qq.com/s/onwNdtEWfPlq01PFu2Qmgw](https://mp.weixin.qq.com/s/onwNdtEWfPlq01PFu2Qmgw)

## 芯片详解  

### 基本介绍

高效同降压-升压 控制器

4开关同步  
2.7-36V的输入

支持输入限流、输出限流和过温保护，确保在各种异常情况下的安全

32pin的QFN 4\*4，底部有大GND焊盘  
QFN（Quad Flat No-lead）4x4 是一种方形扁平无引脚封装，其尺寸为 4mm × 4mm

输出范围在2-36V  
内置10V，2A的栅极驱动器，驱动外置 MOS 管  
频率范围在200kHz-600kHz

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywNU9vd1TwEK9tkKwbibzDbUC6nvTHk5pysxicnqbztnKjqX3icgwJT9Cwf5PUVoJ9PuXspY9NtGgfVTUickdvIXhvCSQDXjzCmFgw/640?wx_fmt=png&from=appmsg)  
典型 电路图 ：  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyznDr22ABdjDEBIKwYHxXEsD70CZHoz8GCF2DIqCDPibGYRwfMn3TOcVHrMp46N3t0438NcV3IvibuV2Zb3MBhTL50VpTYckzzHk/640?wx_fmt=png&from=appmsg)

### 引脚功能

/CE ：芯片使能，低电平有效，内部下拉了，默认是有效的  
NC：浮空  
PWM：输入20k-100k的方波调整占空比，通过反馈电阻的预设值，实际输出=预设值 ×（1/6+5/6×D），D是占空比，当占空比为0的时候，输出电压只有预设值的1/6，占空比为100%，输出就是预设值，这个占空比是我们输入信号的占空比  
PG： 当VOUT在 90 % 至 110% × VOUT目标值范围内时，开漏输出、高电平。  
IPWM：IPWM引脚与ITUNE引脚一起用于调整ILIM1或ILIM2的电流限值。ITUNE引脚用于在ILIM1和ILIM2之间选择控制对象，IPWM信号用于调整限值。IPWM引脚接受20 kHz至100 kHz的PWM波形，电流限制值与其占空比成正比。就是用ILIM限制的电压×IPWM的占空比D  
ITURN：ITUNE引脚选择ILIM1和ILIM2之间的IPWM控制对象。如果需要控制ILIM1限流，则在ILIM1引脚和ITUNE引脚之间连接ILIM1电阻。如果要控制ILIM2限流，则在ILIM2引脚和ITUNE引脚之间连接ILIM2电阻。ITUNE引脚只能选择一个限流。如果不需要IPWM功能，则使ITUNE引脚和IPWM引脚悬空，并相应地将ILIMx电阻从ILIMx引脚连接到AGND。  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyzVr9e5RQHwRMwspsflqnlzJTxoLRfSq2zJVnrWTUlQdQclnNd6eF2QV0zdlicIF4SNYeaBL64YhmcsMuR5RaibH7LG2EkcnJGew/640?wx_fmt=png&from=appmsg)  
DT：死区时间设置，MOS管导通需要时间的，对地短路：20 ns; 68 k Ω：40 ns; 270 k Ω：60 ns;开路：80 ns  
FREQ：频率选择：对地短路：200 kHz; 68 k Ω：400 kHz;开路：600 kHz，这里还有疑问，频率越高，一般电感电容值可以选的小一些，那是不是越大越好，工作频率对电感的影响有没有  
ILIM1：通过电阻来设置输入限流，VREF为内部参考电压1.21V; RLIM1为ILIMT1到地或到ITUNE的电阻; RSNS1为电流检测电阻，推荐5 m Ω-20m Ω，典型10 m Ω; RSS1为连接到SNS1P、SNS1N的电阻，两个电阻必须相等，推荐值为1 k Ω。  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyw04gico6m8hEax9ghzZQ9Irde3ZsFPGZdzSLFX32u3nqyZWqeH11tGwyIBYHqBjgXcwzndArMNASFqxnl0GEqp3nCATsicB2fKE/640?wx_fmt=png&from=appmsg)  
AGND，模拟地，这里画PCB的时候注意一下，磁珠或者uh电感，感抗2πfL，保证低频过得去

COMP ：控制回路的补偿

FB：反馈引脚，参考点电压是1.22V

SNS2N:和SN2P组成电流检测  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyzY2icBfI828JibZ8yvnhSYoIDb1EptD8qbJHkumibQHdhxVE4PG4hsQhUBR1ITDYKEX7xZHFv37fHvrhs5fNtqDD4LQQgiajuq7PM/640?wx_fmt=png&from=appmsg)  
BT2：power引脚，在BT2引脚和SW2引脚之间连接一个电容，自举一个电压，为高端MOSFET栅极驱动器2提供偏置电压。  
HD2：高侧MOS管的栅极驱动输出，还有LD2、LD1、HD1  
VCC：内部稳压器的输出，为内部栅极驱动器的偏置电压提供10V电压，将1 µF陶瓷电容从VCC连接到PGND引脚  
PGND：电源地  
SW：这两个SW引脚就有些不明白了，感觉根本不需要，这是冗余设计吗，为了在其他电路中应用？  
Thermal Pad：散热焊盘，连接到GND就行  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyzibCCo35ZzHp7GURjf71iaqxAnBo8d0D8nIHJykEJcVqsbDh2YLbkK9HTn9Qwj3ic6RF6HF9MbkMDprGK7bBasv1RNY4LbvNvEJ8/640?wx_fmt=png&from=appmsg)

手册还给了输出出入电容最小要30uf  
电感在2.8-6.8uh  
工作结区温度在-40~125℃，

### 工作过程

反馈点电压为1.22V，还是在输出和GND之间接两个电阻分压

PG是输出电压状态的指示灯，如果VOUT电压保持在编程电压的90% ~ 110%之间，PG引脚变为高阻抗，由于输出上拉电阻，PG out变为“H”，表示输出电压良好。如果VOUT超出正常电压范围，PG out变为“L”。不要就浮空就行了

如果PWM输入的方波信号可以控制输出电压和设定值的关系，还挺线性

如果PWM引脚悬空，则由于PWM引脚处的IC内部下拉电路，VOUT电压变为编程电压的1/6。  
如果不需要实时输出电压控制，则将PWM引脚连接到VCC引脚。

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywzbLWAf2HMCZW8FbkuCkyRxxtrVokmbWtcupAzdJrJqV6gAibHHcn9jVOYoqtbRCH575HPSUF5TunWia4QJXgkO1fHZokcG43FU/640?wx_fmt=png&from=appmsg)  
1检测输入电流，2检测输出电流，CSS那个是滤波电容，47pf  
取样电阻 RSNS 1应置于MOSFET和输入电容之间。RSNS2可置于MOSFET和输出电容之间或输出电容之后。  
RSS1和RSS1 '应具有相同的值; RSS2和RSS2’也相同。通常使用1 k Ω电阻。  
如果RSNSx发生变化，则RSSX/RSSX’的值需要根据以下计算进行相应调整：RSSx RSNSx = 10 mΩ 1 kΩ例如，如果RSNSX为20 m Ω，则RSSX/RSSX’应为2 k Ω;如果RSNSX为5 m Ω，则RSSX/RSSX’应为500Ω。

如果不需要输入/输出电流限值，则将ILIM 1/ILIM 2引脚连接至GND。  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luywv99cHwndAvydXDKeqmoJqickhjSrIiam0fxrzSR0B5T0BLibmWLoUapH3he9ZjUaZ2jRgwDIj1JJNgehF5vJbywqk8AAE40Jmng/640?wx_fmt=png&from=appmsg)  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyyfLDnl0xaXVEGXIl8gicjomvWr0e9CcIKopWpIS97OdylYdcDGW8CsIrLeIotA3ibgXgsibpIbjGYlKFibVAHibHGMS8qX3guJaxlg/640?wx_fmt=png&from=appmsg)

IPWM信号应在20 kHz ~ 100 kHz范围内，输入/输出电流与其占空比成正比：ILIMx=ILIMx\_SET×D其中：ILIMx\_SET = ILIMX输入或输出电流限值（x=1：输入，x=2：输出）; D = IPWM占空比; ILIMx =输入/输出电流的目标电流限值。

ITUNE引脚选择由IPWM控制的目标。如果需要控制输入电流，则应将ILIM 1处的电阻连接在ILIM 1和ITUNE引脚之间;如果需要控制输出电流，则应将ILIM 2处的电阻连接在ILIM 2和ITUNE引脚之间。通过ITUNE引脚只能选择一个目标。

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxtjMQ0ujWxCaf0PCImgRgnHYch66oWHekKr35pNWtibfCYx7JcaAic5rGrHJAIyLVINtJBpmOBicd8ibFz1wfdJ8ibhq59QHxVW8JY/640?wx_fmt=png&from=appmsg)

对于受IPWM信号控制的ILIMX引脚，其滤波电容仍应接地。如果IPWM频率较低，则应使用更高的电容。例如，对于20 kHz频率，建议使用22 nF电容。  
如果不需要实时电流控制，则将ILIMX电阻连接到GND，并使IPWM和ITUNE引脚悬空。  
如果ITUNE引脚连接到一个ILIMx电阻，则不要让IPWM引脚悬空;否则，SC 8701无法正常工作

死区时间设置，允许电阻采用±10%的 精度 ，DT不支持实时更改，新的电阻值更改将在下次开启时应用。

当驱动具有高CISS值的大功率MOSFET时，或在LDx或HDx处添加驱动电阻以调整MOSFET的导通/关断时间时，建议检查并改变死区时间，以防止MOSFET击穿。

反馈补偿（COMP）反馈环路可以通过调整COMP引脚的外部元件进行补偿。通常，使用图4中的值。如果需要更快的环路响应，用户可以将电阻增加到10 kOhm或20 kOhm。更改补偿后，检查并确保环路在应用工作条件下稳定。  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuywAmZUe1WVJuBg4GPwN8JK16Oed38wibenpdVoTDaNJhSCFTlRBPJhlaVaze0g2pUxqOCicRYQibpK9ic9lC77UYDfVzkXo2xDfRNU/640?wx_fmt=png&from=appmsg)

内部产生驱动电压VCC，VCC在VIN和VOUT之间选择较高的电压，如果高于10 V，则箝位到10 V。

驱动低端MOSFET（Q2和Q3）的驱动信号LDx直接由VCC提供;驱动高端MOSFET（Q1和Q4）的驱动信号HDx由VCC至BTx引脚之间的二极管提供，后者由BTx和SWx之间带有自举电容的自举电路产生。

#### 自举电路

自举电路很好理解，就是应用电容上的电压不能突变，但能对电容一端的电位进行改变，这样另一端电位也会变化

充电阶段（下管导通时）：  
当低边开关管（下管）导通时，SW节点电压被拉低至GND附近。电源VCC通过二极管向Cboot充电，电容两端电压接近VCC（减去二极管压降），储存能量

升压阶段（下管关断时）：  
下管关断后，SW节点电压迅速升至输入电压VIN（上管导通时）。由于电容两端电压不能突变，Boot引脚电压被抬升至 VIN + VCC - Vf（Vf为二极管压降），从而为上管 驱动电路 提供高于VIN的驱动电压，确保高边NMOS可靠导通

##### 电容耐压选择

一般SPEC上会给出BOOT to SW的 最大值 ，如下图是6.5V，所以一般选10V/16V耐压值的电容即可。  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuywBDXBGolDEB5NeBoVneOiaUdbWF3XLPws0k98PChxQdHrKnDa6Xl3ibFDXCejBmwk0mo7B6bIgO0ic1icR9A1VibWLnnjBgiamDN7PU/640?wx_fmt=png&from=appmsg)

##### 自举电阻

加入了BOOT电阻，和BOOT电容就构成了RC充电电路，电阻的大小决定了高边MOSFET的开关速度。一般BOOT电阻越大，高边MOSFET开的就越慢，这个时候SW上的尖峰就越小，EMI特性就好。BOOT电阻越小，MOSFET开的快，SW上的尖峰就越大，所以有的时候会在SW上预留RC对地吸收。

电路图就直接在电容上串个电阻

###### 为啥DCDC不用PMOS，都用的NMOS

在电路中，NMOS经常用作下管，S极接地，用G极来控制管子的导通截止，很方便。NMOS用作上管时，因为S极电平不确定，即G极电平也不好确定，很不方便。  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyxlYetwAvvsianfribDYY7TMz6crjiaBZUqN4x3mJd16ViaSLeI8CTZicMGnyUiagyONOLVm1XpWFbhIZOYK69dX9FbPzyVSr8XiaADP0/640?wx_fmt=png&from=appmsg)  
PMOS经常用作上管，S极接固定的VCC，用G极来控制管子的导通截止。  
用作下管时，因为S极电源不确定，无法确定G极电压来控制管子的导通截止。  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyydowmK7cE9xdFHyhz3WKBp6iczMiaicZg2n4arqx16zYbuVBBTLqWAcqg0Q0ic45ONG8RoJE8fNfwicf1aUHibicibNWPShaia4nv3qaww/640?wx_fmt=png&from=appmsg)  
上管用NMOS，还要用到自举电容，麻烦还增加成本。最主要原因是PMOS的Rds(on)比较大，意味着DC-DC的损耗大，效率低，综合下来，DC-DC上管还是用NMOS的多。

在rohm的产品目录中，可看出内阻差别，NMOS都是几个毫欧，PMOS一般是几十毫欧。

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxxLxHrcibSnXYspH51VpibAf0qc4jPI37uz5q9WzhstXZVYkibjAtSjxpsZ234mc6nMfbUsV3IKV9EhDtOFt2QiaNYCPIyvkuRjHw/640?wx_fmt=png&from=appmsg)  
ROHM罗姆半导体是一家公司  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyxl2L7cbia03CEuKD1icH6ZKdjJFSzI4VFIy9huYPgo9ltJtPRzqniav2oU8P0PBiaCnZw1BM60qf5EKy5jIhZlvBwxaqg5RMd2UHc/640?wx_fmt=png&from=appmsg)  
实际上，NMOS的种类也比PMO多  
对于PMOS，ID为空穴电流，NMOS的ID为电子电流，空穴的移动比电子难，这也是PMOS导通内阻大的原因。  
形成空穴沟道比电子沟道更难，所以一般PMOS的导通电压也会比NMOS的导通电压高一些。

#### 电容选择

高容量电解电容和钽电容可用于稳定的输入和输出，但电容额定电压应高于最高工作电压。当使用钽电容时，至少要并联1μF陶瓷电容。如果使用电解电容，则需要更多的陶瓷电容。例如，如果使用47μF电解电容，陶瓷电容器的电容量允许降低到30µF ~ 40µF。如果使用更高容量的电解电容器，则至少需要20µF的陶瓷电容器。

输入电容要有一定的耐压裕度，选X5R/X7R的陶瓷电容

#### 电感选择

高电感（4.7µH ~ 6.8µH）用于 输入输出 电压差较大的系统，如5V Vin和20 V Vdd或开关频率较低;低电感（2.2µH）适用于输入输出电压差较小但要求大电流的系统。通常推荐使用3.3µH电感。

电感的直流电阻值（DCR）影响开关稳压器的导通损耗，所以建议首选10 m Ω DCR左右，如果功率比较小，可以选择高DCR的电感，但是如果开关电流比较大，比如10A左右，那么尽量选择DCR最低的电感，因为10 m Ω DCR也会造成1 W的功率损耗。

#### 电流检测电阻

电流检测电阻RSNS 1和RSNS 2是电流检测电阻，推荐使用5 m Ω ~ 20 m Ω电阻值。  
电阻值越高，电流限制精度越高，但在大电流应用中使用电阻值越高，导通损耗越高。通常，建议使用10 m Ω。  
还应考虑电阻器额定功率和温度系数。功耗大致计算为P= I2 R，I是流过电阻的最大电流，电阻的额定功率应高于粗略计算的功耗，电阻值可随温度升高而变化其变化量由温度系数沿着温度的变化决定，如果对限流精度要求较高，应尽量选用温度系数较低的电阻。

### 重点MOSFET选择

MOSFET的VDS应高于最高工作电压并有足够的裕量（建议高出10V以上）。例如，如果最高工作电压为20V，则至少应选择额定电压为30V的VDS MOSFET;如果最高工作电压为24V，则应选择额定电压为40V的VDS MOSFET。

如果输入和输出电压高于10V，驱动电路电压可以达到10V，MOSFET的VGS额定电压应选择高于± 10V。考虑到工作时的PCB寄生参数，由于瞬态过冲，驱动器电压可能高于VCC，建议使用± 20V VGS以确保足够的裕度。

MOSFET电流ID应高于最高输入和输出电流，并有足够的裕量。

TA=70℃或TC=100℃的电流值：TA（环境温度）和TC（壳温）是评估器件散热能力的核心参数。高温会显著降低器件的电流承载能力，因此手册中通常提供不同温度下的电流降额曲线。例如，某MOSFET在25℃时可承载30A电流，但在TC=100℃时可能只能承载15A ，所以还要考虑这个

PD的定义：PD是器件允许的最大功率损耗，通常与封装热阻（如ΘJA或ΘJC）和温度条件相关。例如，某芯片在TA=70℃时PD=2W，但若散热条件差，实际PD需进一步降低 ，一定不能超过PD  
PD与功耗的关系：MOSFET的总功耗包括传导损耗（与RDS(on)相关）和开关损耗（与频率相关）。需确保实际功耗（P\_total = I²×RDS(on) + 开关损耗）≤ PD  
设计要点：选择PD较高的器件，并通过优化散热（如加装散热片或改善PCB铜箔面积）提升实际PD值。

要看参数：热阻，升温的情况，RDS，随温度的变化，会影响发热，温度影响开关时间，增加损耗

MOSFET的RDS（ON）和输入电容CISS直接影响功率效率。通常，RDS（ON）越低的MOSFET具有越高的CISS。RDS（ON）与传导损耗有关。较高的RDS（ON）导致较高的传导损耗，从而降低效率和较高的散热; CISS与MOSFET接通/关断时间有关，开关时间越长，开关损耗越大，效率越低，应在RDS（ON）和CISS之间进行权衡，选择合适的MOSEFT。

通常情况下，如果输出功率在20 W ~ 30 W左右，RDS（ON）在10 m Ω左右，建议CISS为1000pF。如果输出功率增加，建议使用RDS（ON）较低且CISS在2000pF以下的MOSFET。最高CISS建议不超过3000pF。如果选择高CISS MOSFET，则开关时间变长，则应使用DT引脚调整死区时间，以避免高端和低端MOSFET同时导通。

MOS管的 CISS（Input Capacitance，输入电容） 是描述其动态特性的关键参数之一，直接影响器件的开关速度和驱动需求。CISS越大，栅极驱动电路需要为电容充电的电荷量（Qg）越多，导致开关延迟时间（Td）增加，开关损耗（尤其是高频应用）增大  
开启延迟：需对CGS和CGD充电至阈值电压（VGS(th)）以上才能导通  
关断延迟：需对CISS放电至一定电压以下才能关断  
CISS对温度变化不敏感，其值几乎不随温度波动，因此开关特性受温度影响较小，所以就是根据电容的放电公式来算

驱动电阻和SWx缓冲电路为了方便调整MOSFET开关时间和EMI调试时的瞬态过冲，建议在驱动器引脚之间添加0603系列电阻（LD1、LD2、HD1、HD2）和MOSFET栅极引脚，并在SW1和SW2处增加RC缓冲器（0603）电路，驱动电阻应靠近MOSFET栅极引脚放置。首先，增加0Ω，并在10Ω内适当调整电阻值。增加驱动电阻值后，应监视高端和低端MOSFET的导通时间。如果死区时间不足，则相应调整死区时间。  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyxibXP5V9lWfJMxSt81fnicDDTxkQ3ccaqiaGHSdnc6sJ68ZK1atjrT7E62BibFCBm5iaONw7nmKpuUkc5EQN1wVNnRxgsOtlDmicxzI/640?wx_fmt=png&from=appmsg)  
当需要抑制SWx处的过冲时，需要RC缓冲电路。第一次将RC缓冲电路保留为NC

## 同步非同步介绍

区别在于非同步使用二极管作为续流二极管，同步架构使用的是MOS管。

重点：这是我没想过的，但是同步多了一个MOS管的控制  
非同步的效率低，同步的效率高，原因是同步使用的是MOS管，MOS管的Rds(on)小，在通过大电流时，导通压降小，损耗小，效率高，而二极管的正向压降一般大于MOS管。

同步架构的成本更高一点，MOS管比二极管贵；因为是MOS管，还需要外加控制电路；

同步的可靠性比同步高，MOS管不是理想的开关，是有开通时间和关断时间的，如果上下两个MOS管的死区时间没有控制好，使上管关断时间和下管开通时间有重叠，造成有直通现象，那么MOS管可能因电流过大而损坏。所以我们经常看到MOS管的内部框图中，上管和下管之间会有一个二极管，就是为了防止直通短路。但这样岂不是效率又降了，干脆非同步算了

## 打板测试

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyzkj2CkibUCIExPARNWoyssb8DMfWhEItlbeIvIANJ6vW3cibBn1WCrfZhxiayklLFu7kjdQHTicN2SpevdAJamcmiaD6A0E8NnP6ew/640?wx_fmt=png&from=appmsg)  
在栅极电阻上并联反向的1N4148W，加速MOS的关断过程  
在关断阶段，驱动电路需快速拉低栅极电压。1N4148二极管反向并联在栅极电阻两端，为Cgs的放电提供低阻抗路径。其正向压降（约0.7V）允许更大电流流过，显著缩短关断延迟时间，降低开关损耗 。例如，当驱动电压拉低时，二极管导通，绕过高阻值栅极电阻直接放电，加快关断速度。

![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luyylqibic1eUEHNMNFwAab05PBLL0Jqr3Vic9mNt4s7xC3GichN443OXz8kgnJ1KkicU6IgKf8gaJiaquz8aqn4Y9cNKvibSd8uicNaIrrU/640?wx_fmt=png&from=appmsg)  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxTDiazLeGanGUXgKicTxY5bn7rfrZwOw7RX1sHXhA2T7pQAVIqyWfo7v3wB1Fv2PqTzz5mfUAmpH2hjWM9I58EyIrGqwnYibC2wo/640?wx_fmt=png&from=appmsg)  
![请添加图片描述](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuywD2mnjJUoutkzF2uATuJ16IeMSxZ2lP5kV9NVOAJVYUJm39TwzD01hDG5vg737Y7MicEAksSoCbZss6vumAlA9ibqAdyrnOhfAM/640?wx_fmt=jpeg&from=appmsg)  
可以正常使用

来自：博主@贾saisai 

文章http://blog.csdn.net/zerokingwang/article/details/146505195