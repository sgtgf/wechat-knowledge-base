# 基于碳化硅的双向PCS设计

原创 陈奇, 张彬意 SiC碳化硅MOS管及功率模块的应用 2025-04-28 21:33 广东

> 原文地址: [https://mp.weixin.qq.com/s/mklbJHSs5-QNdzrTt\_R-XQ](https://mp.weixin.qq.com/s/mklbJHSs5-QNdzrTt_R-XQ)

文章来源：电器与能效管理技术

作者：陈奇, 张彬意, 毛行奎（福州大学 电气工程与自动化学院, 福建 福州 350108）

摘要：随着双向储能变流器(PCS)朝着高电压、高效率的趋势发展,SiC器件在双向PCS中开始应用。SiC的PCS主电路拓扑采用可以有效降低并网电流谐波的T型三电平逆变电路。针对SiC器件开关频率高,基于相电压采样的锁相控制比较容易受干扰,以及电网不平衡时容易影响系统稳定性,提出基于线电压采样的锁相环以及相应的并网电流正负序分离控制策略。最后,搭建了1台基于SiC的10 kW双向PCS实验样机,样机性能良好,运行稳定可靠,实验验证所设计方案和控制策略正确有效。

**关键词：** 双向储能变流器; T型三电平逆变电路; 碳化硅; 控制策略

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGsm4BMWBCZiaM1HVu3HWveRbYmbPHyfVh2ZPs2RPibt58vJr2a1l3qoPQ/640?wx_fmt=png&from=appmsg)

0.引言

随着国家经济的不断发展,用户对电能质量的要求以及用电需求日益增加,电网用电负荷也随之增长。同时,新能源发电如风力发电和光伏发电快速发展,但由于其发电具有随机波动性等缺点,容易引起电网不稳定。储能技术可以平滑新能源发电波动,能够为新能源发电友好并网提供解决方案,其正逐渐成为越来越多国家实现碳中和目标的主要技术之一。

目前,储能技术在电力系统、新能源等领域的运用越来越广泛,储能行业也在国家政策以及市场发展的双重驱动下快速发展。储能变流器(PCS)是储能系统的关键设备单元,作为储能系统与电网的接口,承担着外界与储能系统交换能量的重要任务。PCS可以提高电网的可靠性、效率和灵活性,对于推广清洁能源、建设智能电网、保障能源安全等方面具有重要意义,这对PCS的性能以及容量提出更高的要求。PCS运用较为广泛的是多电平电路,其中T型三电平逆变电路因相同频率下效率高、并网电流谐波含量低等优势,在储能领域成为研究和应用的热点。

市场的发展需求往往推动电力电子器件的发展。近年来,PCS也逐渐朝着高压、高效、高频化趋势发展。随着电压等级以及开关频率的提高,硅(Si)半导体器件受到材料自身的限制,不能很好适应这一发展趋势。用新型宽禁带半导体材料制造的电力电子器件比Si半导体器件具有更好的性能,其中宽禁带半导体器件中的碳化硅(SiC)器件具有更高的禁带宽度、可承受更高的电压等级、较低的导通电阻和更快的开关速度,快速获得工业应用。目前,市场上已经有商业化的成熟可靠SiC器件,而且在电路中应用SiC器件可以提升系统效率,减小体积和提高功率密度,在储能领域也获得应用。

本文研究采用宽禁带SiC的双向PCS,主电路拓扑为T型三电平逆变电路。本文给出基于SiC的双向PCS样机系统结构,并以A相为例简要分析其工作原理。介绍了双向PCS调制方法,针对目前采用相电压锁相控制的不足以及不平衡电网电压下并网稳定性问题,提出基于线电压采样的锁相环设计和并网电流正负序分离控制设计。最后,进行了实验验证。

1.双向PCS样机系统结构

基于SiC的双向PCS系统框图如图1所示。系统包括DSP主控单元、三相相电流采样、三相线电压采样、母线电压采样、驱动电路以及通信模块部分。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGtJ15icmGVYzx8tE5Aqiaibbjma444U6GtXDjicJpod22glKLXNZGCZnR7Q/640?wx_fmt=png&from=appmsg)

**图1   **基于SiC的双向PCS系统框图****  

主电路拓扑采用T型三电平逆变电路,母线侧电容采用上下母线电容_C_dc1、_C_dc2串联的结构,且Cdc1=Cdc2。上下母线电容电压理想情况下相等,表示为_U_dc1\=_U_dc2\=_U_dc/2,母线电压正极、负极以及中点电位分别表示为_P_、_N_、_O_点。T型三电平逆变电路每相包含4个开关管,以下以A相为例简要分析其工作原理。A相开关管由竖管(VTa1、VTa4)和横管(VTa2、VTa3)组成,其中VTa1与VTa4串联后中点为_A_;VTa2与VTa3串联后连接_A_、_O_两点。_A_点经逆变器侧滤波电感_L_ia、网侧滤波电感_L_ga连接电网,_u_a表示A相相电压。

通过组合控制VTa1、VTa2、VTa3、VTa4,可控制_A_点分别与母线的_P_、_O_、_N_三点相连,从而控制_A_点相对于_O_点的电位_UAO_有_U_dc/2、0、-_U_dc/2三种电位状态。若分别以_P_、_O_、_N_表示这三种电位状态,并以“1”表示开关管导通,以“0”表示开关管关断,则可得_A_点三种电位与开关管通断的关系。电位状态与开关管通断关系如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGNcqALllpHVicBFbsDh5WngCgAsxrRyovqa0YMVbtrsTtu5GsOCAbTDw/640?wx_fmt=png&from=appmsg)

2.双向PCS调制方法

目前,空间矢量脉宽调制(SVPWM)已经成为T型三电平逆变电路中常用的控制方法。SVPWM采用空间电压矢量理论,通过对电压矢量的控制来实现对交流电压的控制。其主要优点是可以实现较高的输出电压质量和效率,同时在多电平电路中可以实现较高的输出电压调制率。

### 2.1 空间电压矢量

T型三电平逆变电路中_A_、_B_、_C_三点均存在三种电位,因此三相组合后总共存在27种空间电压矢量。这些空间电压矢量可分为6个大扇区,每个大扇区又可细分为6个小扇区。T型三电平空间电压矢量图如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGkvxUu7YwnmrY25DcHmf6LC7LewJDMc8ZnvxaPzAI3QZ0xePJGhFXcA/640?wx_fmt=png&from=appmsg)

**图2   **T型三电平空间电压矢量图****  

按照矢量幅值大小分类,可将图2的空间电压矢量分为6个大矢量,6个中矢量、12个正负小矢量以及3个零矢量。以空间参考电压_U_ref分布在第I扇区中的1小扇区对七段式SVPWM生成脉冲宽度调制波的过程进行分析。第I扇区空间电压矢量图如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGwcFN6y5IGC69jyicRNHYUkqmoBjk7zeiaDdvv6gSEFfxgIuF1HohiaBlg/640?wx_fmt=png&from=appmsg)

**图3   **第I扇区空间电压矢量图****  

对于七段式SVPWM,电压矢量作用顺序以负小矢量作为起始点,且作用顺序关于中心对称。上一电压矢量到下一电压矢量中仅有一相电位发生变化,但电压矢量作用顺序不能存在P电位状态与N电位状态之间的突变,需经过O电位状态过渡。则根据最近三矢量原则,空间参考电压_U_ref位于第I扇区中的1小扇区时,实际参与合成的电压矢量由零矢量OOO、正小矢量POO以及负小矢量ONN、OON组成。

综上分析,设开关周期为_T_s,当未进行中点电位控制时冗余正负小矢量POO、ONN作用时间均为_T_1/2,负小矢量OON作用时间为_T_2,零矢量OOO作用时间为_T_3。七段式SVPWM电压矢量动作过程如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGSJL8icMeglo8Vy3A36C5foz3Ylahv5zPZ4Mgh13RwZjibHoDW6KCJp4g/640?wx_fmt=png&from=appmsg)

### **图4   **七段式SVPWM电压矢量动作过程****  

### 2.2 基于线电压采样的锁相环设计

目前锁相环技术主要有乘法鉴相器锁相环、同步坐标系锁相环、解耦双同步参考坐标系锁相环、双二阶广义积分器锁相环(DSOGI-PLL)等。其中DSOGI-PLL相较于其他锁相技术,稳定性好,锁相精度高。但以上的锁相技术均是基于相电压采样进行锁相控制,对于采用 SiC 器件的双向 PCS,开关频率高,相电压容易受影响,会导致锁相环的稳定性变差。且由于本设计的PCS采用三相三线制,系统结构简单,因此直接采用线电压进行锁相控制,既提高了锁相的稳定性,又简化了系统结构。

三相相电压与两相静止坐标系下_α_轴、_β_轴分量的关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGAtxXvBpW82gGlNeuhyibpzE32pibOMHiaY1HQ8riavSxg9fuS6PfhLibgibg/640?wx_fmt=png&from=appmsg)

式中: _U_a、_U_b、_U_c——三相相电压;

_Uα_、_Uβ_——_α_轴分量与_β_轴分量。

在三相电网中,线电压与相电压关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGAdB3Ne3cwpicnYh4ZmPGnTMKiaY5nEmgClr5ed7tCYUMtjwTO5cKegzg/640?wx_fmt=png&from=appmsg)

式中: _Uab_、_Ubc_、_Uca_——三相线电压。

将式(2)代入式(1)可得线电压与两相静止坐标系下分量的关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccG8c8OtxazjMBRwtK0ouibROpCVtndxXnT0kCyMGJsOKyfeXBDiclibreicg/640?wx_fmt=png&from=appmsg)

根据式(3),构造可逆矩阵进行反变换,可得到基于线电压的三相静止-两相静止(3s/2s)变换关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGCFcnDCMMq648VC44EhI11p9gSrzOI1myfJEAGOibxA62iaI8tAEJG4cw/640?wx_fmt=png&from=appmsg)

两相静止-两相旋转(2s/2r)变换将两相静止坐标系下_α_轴、_β_轴分量转化为两相旋转坐标系下_d_轴、_q_轴分量,2s/2r变换关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGIKzgRJvvhOiaSXmvPs5vgZan4hnicYcQZoYoUMOTB97rfZPTZA7W64tg/640?wx_fmt=png&from=appmsg)

式中: _θ_——_d_轴与_α_轴的夹角。

两相旋转-两相静止(2r/2s)变换也称为2s/2r反变换,由式(5)可得其变换关系式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGHpia6MOznxqEwJUxXk53ibiaTaCQxh5K4A99FYmpR58Lb8A2GJibZ7Y6KQ/640?wx_fmt=png&from=appmsg)

利用式(4)所提的基于线电压的3s/2s变换对线电压进行解耦,转化为两相静止坐标系下的分量。而DSOGI-PLL锁相环带有滤波作用,在三相电网电压不平衡的情况下,可以先对两相静止坐标系下_α_轴、_β_轴分量进行正负序分离,获取该坐标系下的正序分量,然后将该正序分量通过式(5)的2s/2r变换转化为两相旋转坐标系下_q_轴的正序分量,并利用该分量进行锁相环控制。因此,可将线电压的3s/2s变换与DSOGI-PLL相结合,进而完成基于线电压采样的锁相环设计。

基于二阶广义积分器DSOGI的正交信号发生器如图5所示。图5中,虚线部分表示二阶广义积分器,输入交流电压为_u_i,输出交流电压为_u_o、_qu_o,两者相位相差90°。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGtw9MAGwBx4OX9SHfkicTbEjPvb3V12afNld3ZmwX3DxVP7jcD0YOzdQ/640?wx_fmt=png&from=appmsg)

**图5   **基于二阶广义积分器DSOGI的正交信号发生器****  

该正交信号发生器的同相信号传递函数为该

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGwaCyky3eRg6z5y8dyI4qG4a5ZKSOIVHzLFZ1wJhXQQ8CR3lo2a0hKw/640?wx_fmt=png&from=appmsg)

正交信号发生器的同相信号传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGcaJ1gNyJB5I2k1bd4hSiaowQRfZO8mbF9A2zLibibVBHCc0RV2gNDuggg/640?wx_fmt=png&from=appmsg)

式中: _ω_o——电网的角频率。

三相电网电压不平衡时,根据瞬时对称分量法先对三相电压正负相序矢量进行分析:三相电压正相序矢量所对应的两相静止坐标系中_Uβ_超前_Uα_,三相电压负相序矢量所对应的两相静止坐标系中_Uα_超前_Uβ_,则两相静止坐标系下正负序分量可以用以下两个式子表示。

(1) 正序分量：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGgmV3upiaN8xXe2R8IZHxYpwe5hbwt9mb9GhlZAhZzZHc7bw5h2naRsQ/640?wx_fmt=png&from=appmsg)

  

(2) 负序分量:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGvYkfFmN3JIc9n4q4blR9v2zlebibpKrNrU5tEvckThGz6U9AYRN0DMw/640?wx_fmt=png&from=appmsg)

式中: _Uαp_、_Uβp_——两相静止坐标系下的正序分量;

_Uαn_、_Uβn_——静止坐标系下的负序分量;

_q_——矢量逆时针旋转90°。

由式(9)、式(10)可得,两相静止坐标系下正负序分量可以分别由同相信号与正交信号叠加运算而成。

根据基于二阶广义积分器DSOGI的正交信号发生器原理,结合线电压的3s/2s变换,可进行如下的锁相环控制设计。线电压先经过变换转化为两相静止坐标系下_Uα_、_Uβ_分量,利用双二阶广义积分器的正交信号发生器(DSOGI-QSG)对_Uα_、_Uβ_进行正负序分离,再利用PI控制器对两相旋转坐标系下_q_轴的正序分量进行锁相调节。基于线电压采样的锁相环控制框图如图6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGiceDfb8Qtgtfu1pzUiazeNfROMQEG5vXyzLiaozWH7AVhSb7YJSBKPyBA/640?wx_fmt=png&from=appmsg)

### **图6   **基于线电压采样的锁相环控制框图****  

### 2.3 并网电流正负序分离控制设计

当电网电压不平衡时,需要对并网电流进行正负序分离控制,以平衡三相电流。由于需要及时跟踪并网电流,因此电流正负序分离的软件带宽需要越宽越好,则采用高带宽的全通滤波器,构造出同相信号与正交信号,其正交信号的传递函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccG0Q3PUX7VnibnwicfCibd5OECtoZK1fcTzp5ZKMh7tmeV3zxEq761nEdDw/640?wx_fmt=png&from=appmsg)

其中,_ω_\=2π_f_。

式中: _f_——电网频率。

根据上述分析,利用式(11)构造同相信号与正交信号。基于全通滤波器正交信号发生器如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGm8sjsgR1nTyvibia8n5w7gFH1bGibhTIHANgl92NLfNIZBOCv9s54lKjA/640?wx_fmt=png&from=appmsg)

**图7   **基于全通滤波器正交信号发生器****  

图7中,输入交流电流信号为_i_i,输出交流电流信号为_i_o、_qi_o,两者相位相差90°。

同理,三相电流正负相序矢量对应的两相静止坐标系下正负序分量可用式(9)、式(10)表示。

综合上述分析,对并网电流进行正负序分离:先将三相相电流进行3s/2s变换,得到两相静止坐标系下的_iα_以及_iβ_分量,再利用式(11)输出同相与正交信号,最后通过式(9)和式(10)计算输出两相静止坐标系下的电流正负序分量。两相静止坐标系下的电流正负序分离如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGWoLnCK9w2jcpYbgYJ0cvgXKJ0iakYgmcianxNOHPPoJEc2PzhKcn8ZAA/640?wx_fmt=png&from=appmsg)

**图8   **两相静止坐标系下的电流正负序分离****  

通过图8可以获得两相静止坐标系下电流正负序分量,再经过2s/2r变换后即可得到两相旋转坐标系下的电流正负序分量,并对其进行分离控制。并网电流正负序分离控制策略如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccG1aDgrlLatZOdp2iaqkaoQ4xPaojfbhfwtiakPZc4bKk5iaUnqRQyYCCQA/640?wx_fmt=png&from=appmsg)

**图9   **并网电流正负序分离控制策略****  

上述控制策略先获取电网电压、电流在两相静止坐标系下的正负序分量,随后进行2s/2r变换,将其转化为在两相旋转坐标系下电网电压、电流正负序分量。然后,利用前馈解耦控制,分别对两相旋转坐标系下的正序、负序分量进行控制。最后,进行2r/2s变换,将两相旋转坐标系下控制结果转换回两相静止坐标系下的控制结果,并将其叠加后反馈给SVPWM。

### 2.4 控制程序流程

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGQuoCgfH05skicnX6Fhd9cVL7X7BE9TarZGiccHC7yF07rD6Ty8BEQ4IA/640?wx_fmt=png&from=appmsg)

图10   系统控制程序流程图

系统控制程序流程图如图10所示。左侧虚线方框为线电压锁相环程序流程:对三相线电压采样后先进行线电压的3s/2s变换,再结合图6进行离散化计算,后提取两相旋转坐标系下_q_轴的正序分量进行锁相控制。右侧虚线方框为并网电流正负序分离控制程序流程:锁相完成后等待并网条件满足,DSP判断并网条件满足后闭合继电器,采样三相相电流,结合图8进行离散化计算,后提取两相旋转坐标系下正负分量分别对其进行计算,并将结果赋值更新,DSP输出SVPWM。

3.实验

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGPcCGOC49DcHk5alRsKCcE2jWPictxHXjeYciaic3Paiap1YQKwVvNvy2Fw/640?wx_fmt=png&from=appmsg)

设计采用线电压锁相环的T型三电平双向PCS实验样机。T型三电平双向PCS关键参数如表2所示。功率开关管采用United SiC公司的SiC MOSFET,主控制芯片采用TI公司的TMS320F28377。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccG7E7dnIbFwHyuGtKFosZafSicwcK68AP7ibT4fZuZeFycHqlNQ0GptyBg/640?wx_fmt=png&from=appmsg)

**图11   **锁相环输出信号****  

采用所提线电压采样的锁相环,锁相环输出信号如图11所示。图11中,A相电压以及相角的控制器DSP的DAC输出波形,线电压经过3s/2s变换后再进行锁相环控制,可以很好地锁定相电压的相位和频率,验证了线电压3s/2s变换的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGHL2OnBwDeGzvzymsfzCgkdEicaqeZtklqTE2OaxiaPczfWFmCHic9HRhw/640?wx_fmt=png&from=appmsg)

**图12   **额定功率10 kW逆变并网条件下三相电流以及_Uab_线电压波形****  

采用设计的并网电流正负序分离控制,在双向PCS样机上进行了逆变并网、整流以及双向切换实验。额定功率10 kW逆变并网条件下三相电流以及_U_ab线电压波形如图12所示。此时相电流总谐波失真率(THD)为2.43%,功率因数为0.999。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccG1zuz1uOOTr6vxC8eUia2pAFE3JJGYrJI1NzuqUcLDh3DicgkuViaqC16w/640?wx_fmt=png&from=appmsg)

**图13   **10 kW整流实验条件下三相电流以及_U_ab线电压波形****

10 kW整流实验条件下三相电流以及_U_ab线电压波形如图13所示。此时相电流THD为2.38%,功率因数为0.998。  

10 kW功率下逆变向整流、整流向逆变切换时三相电流和_U_ab线电压波形分别如图14、图15所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccG3W8FpU48KjBZlNB1xvWyo0F516ibyjRnkicibqvXlXribo9TLSByEX4X1w/640?wx_fmt=png&from=appmsg)

**图14   **10 kW功率下逆变向整流切换时三相电流和_U_ab线电压波形****

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGoSOFfKX9EmuicfcrhPj2KUWmLUpdOEXeicQycOnO9vDRxokYB18urFew/640?wx_fmt=png&from=appmsg)

图15   10 kW功率下整流向逆变切换时三相电流和Uab线电压波形  

由图14、图15可见,实验样机在双向切换过程中实现了无缝切换,并且切换时间为100 ms。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmonqiaTX0tOEp5xHy9SaccGB6hBp1Jkre0WBLmn4lwv4VsOK8NMNnZPnX7ZP9NxpNFgBx1cBB9gGQ/640?wx_fmt=png&from=appmsg)

图16   ****实验样机效率曲线****  

实验样机效率曲线如图16所示。由图16可见,在逆变并网满载时效率为98.47%,整流满载时效率为98.56%。  

4.结语

本文设计了采用SiC器件的双向PCS,主电路采用效率高、并网电流谐波含量低的T型三电平逆变电路。针对SiC器件的开关频率高、开关速度快,采用相电压锁相控制容易受干扰以及不平衡电网电压下容易影响系统稳定性问题,提出了基于线电压采样的锁相环和并网电流正负序分离控制策略,分析了线电压的3 s/2 s变换以及并网电流正负序分离的方法。最后搭建了1台基于SiC的10 kW双向PCS实验样机,样机性能良好,运行稳定可靠,实验验证了所设计方案和控制策略正确有效。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)