# 三相储能 PCS 损耗计算分析

原创 王小平 ，陈延联 SiC碳化硅MOS管及功率模块的应用 2025-11-25 09:15 广东

> 原文地址: [https://mp.weixin.qq.com/s/rajWJcjZdvVYeW76Qjj5Fg](https://mp.weixin.qq.com/s/rajWJcjZdvVYeW76Qjj5Fg)

文章来源：电气开关

作者：王小平，陈延联，毛行奎( 福州大学电气工程与自动化学院，福建 福州 350108)

摘 要: 储能 PCS( Power Conversion System) 是储能系统关键设备，其损耗计算分析对于合理设计主电路参数，降低系统体积，提高系统的效率有着重大意义。由于电路在实际运行中，损耗影响因素复杂，提出一种适用于工程上的损耗及效率计算评估方法。首先通过 Mathcad 软件对来自器件手册里的数据进行线性拟合处理，其次针对一款磁芯所绕制的电感的铜耗与铁耗进行详细分析，计算出储能 PCS 工作于逆变状态各个功率点的总损耗。最后搭建了一台额定功率为 12kW 的样机，通过实验验证了所提损耗计算分析方法的正确性及有效性。

关键词: 储能 PCS; 参数设计; 损耗分析; 大功率

1. 引言

随着传统能源发展带来环境污染问题的日益突出，新能源作为一种广泛、清洁、取之不尽用之不竭的能源，具有很大的发展潜力。但由于其出力具有间歇性和波动性，大规模的风光电并网时，会对电网频率造成较大的影响，致使在可再生能源充足的地方出现了弃风弃水的现象。而储能技术有着平抑风光新能源的出力波动、提高电网对新能源消纳能力的特点，能够很好地解决这一问 题。储能 PCS 作为能量转换接口，其损耗的分析对于合理设计主电路参数以及散热有着重要的作用。文献［7］对比了不同开关频率下，软硬关断对于轻载与重载效率的影响。文献［8］在 MATLAB 中搭建损耗计算模型，针对 IGBT 与反并联二极管损耗进行分析与计算。

本文首先建立了双向 PCS 模型，通过前馈解耦得到 dq 各自控制框图，采用 Mathcad 软件对储能PCS 开关器件损耗进行线性拟合，针对电感铜耗与铁耗进行详细分析计算，从而得到在 25℃与125℃的效率，此法简单易行且能为储能 PCS 设计以及散热起到指导作用。

2. 系统模型与控制

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIjjlfymbLLKjUeqzUAJ3D6kLJc6NnoLwhlEHfoXW9I1cJKJkLFibfu0A/640?wx_fmt=png&from=appmsg)

图 1 为双向 PCS 主电路拓扑，通过交流侧为LCL滤波器与电网相连接，直流侧通过电容 C 与直流源相连。

根据基尔霍夫电压定律可得式( 1) 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIThDsM8hURqXYic8pgqYKqkBLq6HpicIgvYdQAq5f0DjO241iaRHp4CiabA/640?wx_fmt=png&from=appmsg)

其中，p 为微分算子，L 为 LCL 滤波电感，Ｒ 为电路中电感与开关管的等效电阻，Uk ( k \= a，b，c) 为储能 PCS 输出端电压，ek为电网电压，ik为逆变器侧电感电流，通过坐标变换可得 dq 轴下的数学模型。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIXGZ2FicR6icaHaTmHPic5eRAW4QThFGuJ2Yia4hlX0ZTmVS8btfE7wicibibQ/640?wx_fmt=png&from=appmsg)

dq 轴下的电流相互耦合同时还受到电网电压分量的影响，为了独立控制 dq 轴电流，采用图 2 所示的框图进行解耦。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI9IyvgVz4p8CPIibvspefpHYgOLwTUc5asZabXyUhR5w1TfOLzVufM9A/640?wx_fmt=png&from=appmsg)

3. 损耗计算

储能 PCS 的损耗主要由 IPM 开关管的损耗与滤波电感上的损耗组成。在实际运行中 IPM 的工作结温无法得知，但其工作范围在 25℃ 至 125℃ 之间，因此分别计算其在 25℃与 125℃时的损耗。

3\. 1 IPM 开关管损耗

IPM 的损耗主要是由 IGBT 开关管的损耗、反并联二极管的损耗构成。其中 IGBT 开关管的损耗又可分为通态损耗与开关损耗，而反并联二极管的损耗则主要由通态损耗与反向恢复损耗构成。

IGBT 的通态损耗是指 IGBT 在开通期间，由于其集电极与发射极间的饱和导通压降 Vce不为零，因此电流流过 IGBT 芯片时产生损耗。IGBT 的通态损耗主要与饱和导通压降 Vce、通态电流 Ic 与环境温度有关，而集电极电流 Ic 的大小会影响饱和导通压降 Vce。

为了更准确的计算 IGBT 的通态损耗，需要建立 IGBT 饱和导通压降与集电极电流的函数关系。以下根据 PM75CL1A120 数据手册中的典型测试数据，利用 Mathcad 软件的线性拟合函数 linterp( ) 拟合饱和导通压降随通态电流的曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIrjkK4JTdjyiaFc1JEUAXGJbnZBuS2AM8P22gC1dcTjRVtXj4lzU1olA/640?wx_fmt=png&from=appmsg)

IGBT 通态损耗为每个开关点处的通态电流与饱和导通压降的积在一个工频周期的积分，如式 ( 3) 所示，其中 D( t) 为一个工频周期内占空比的函数，Ts 为开关周期，Vce\_Tx是饱和导通压降在 x℃ 关于集电极电流 Ic 的拟合函数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI65zJRKlP67aK15udbXv56VI3QEkysRtX6llHzaQgH641bhmq7Q8oqQ/640?wx_fmt=png&from=appmsg)

IGBT 之所以存在开关损耗，是因为 IGBT 在开通和关断的过程中，其电压电流波形并非理想方波， 电压、电流有上升和下降的过程，因此电压与电流有 重叠，产生了损耗。IGBT 的开通损耗同样通过线性拟合数据手册中给出的开通能量损失 Eon ( J) 与集电极电流 Ic 的关系如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDImg9cIKbiaMwGvvjVSLYqonYnjU2XTI2gmdSvy8zia8uFjjgN59oXbHnw/640?wx_fmt=png&from=appmsg)

如式( 4) 在一个工频周期内对损耗能量进行累加，从而得到 IGBT 开通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIpEvLgpPKEP9EiaicYRUACh1QsA3VFibiaCRgn5qlaN8gqx86CPEbrdHWVg/640?wx_fmt=png&from=appmsg)

图 5 为 IGBT 关断能量损失与集电极电流关系曲线，随着集电极电流的增加，IGBT 关断能量损越大，且呈非线性增长。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIzzPibU6J4gsdibHeSthvbYfEez1iaicyqR2SmpQlxyqV2qvGphWAgADaJw/640?wx_fmt=png&from=appmsg)

在一个周期内对损耗能量进行积分，从而得到IGBT 关断损耗，考虑 20% 电感电流纹波，相应调整开通与关断时的电流如式( 5) 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDI9GY5pUTWOFv8ERrHtcbiaMfpt5U3M3Kiawez1HL3libIiaBjpU6nl36waw/640?wx_fmt=png&from=appmsg)

反并联二极管的通态损耗与二极管正向导通电 压 VF、流过的电流 IDiode有关，而二极管电流也会影响二极管的正向导通电压。图 6 为 Mathcad 的线性拟合所建立正向导通电压 Vf与二极管电流 IDiode的函数关系。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIzibhOjU7ZRyibKtWibY26YJHBHVQaMCzodrEJnpclAicgmSPibC0otCjuAg/640?wx_fmt=png&from=appmsg)

由二极管通态损耗与二极管电流的关系，对该函数关系进行的积分，得到反并联二极管的通态损耗在 x℃如式( 6) 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIlLnzhTIRNSY8jHZLicFOToPbzZiclgr8jjd4qaydpUQlcjRFrzObygXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDImy8Spl4iao9Cf4VzN4EMEXK4uAOj06N3uOIvR3OajpzWvURqAY9MnHQ/640?wx_fmt=png&from=appmsg)

反并联二极管的反向恢复损耗通过线性拟合数据手册中给出的反向恢复能量损失 Err( J) 与二极管电流 IDiode的关系如图 7 所示，可看出温度对其影响较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIOnVSgzlbVyxDqhll7AqKd9YvWmOOR8CKFvgtIbBVZbo3e6TZp6sVVw/640?wx_fmt=png&from=appmsg)

对损耗能量进行累加如式( 7) 所示，得反并联 二极管的反向恢复损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDILaibrecPSx6RbKL2EfqhVRhEDSeKPFCJ9M9IiataibcHdNBotwInLJrpw/640?wx_fmt=png&from=appmsg)

当储能 PCS 工作于逆变状态，调制方式为 SVPWM时，易得 D( t) 如图 8 所示。

其输出电流 Ic 如式( 8) 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIB3VhIea6dchCJvrzJ6JYpgyTgic3Licc1l38BBRLRUB2LIeOdLa138cA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIibfpOjHdRlJB3HeHHWHlVQ4K5f7VDBT3meTETl7GfAGA9UAibK0bGMmA/640?wx_fmt=png&from=appmsg)

综合上述分析依次计算在 0\. 25 载、0\. 5 载，0. 75 载，满载时 IPM 的总损耗。如图 9 所示 25℃与125℃的损耗随着负载加重而上升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIicTaiaw97A0ftHahNjKncFPj4f8qnhChicEt5jsECuWQ407Fa8CNqqfOQ/640?wx_fmt=png&from=appmsg)

3\. 2 电感损耗计算

电感的损耗主要由线圈铜损、磁芯铁损组成，其中线圈铜损是电感电流流经电感线圈发热造成的损耗，主要与流经电感线圈的电流、电感线圈等效电阻有关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIjGo9NlNTmC6E9bY0nGBMSydthDice5GNQibQCV6swA8Wy5bOvffic8lGw/640?wx_fmt=png&from=appmsg)

采用 EE 型磁芯，可按式( 9) 计算线圈长度，其中 Np为线圈匝数，如图 10 所示 F 为磁芯中柱长度，C为磁芯中柱宽度，K 为绕线系数，取 1\. 5。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIPZ1GA1uYPiciaCpibcnRJxAv0vZtibpNQuCgz2LFBfmsz3jiaTyiambBrDqg/640?wx_fmt=png&from=appmsg)

根据铜材料电阻率，可得电感直流电阻如式 ( 10) 所示，其中 ρ 为铜线电阻率，S 为导线截面积。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIOg1lwA83yXUKrmct8bjdY9GS8jpVCVGiccQ1gcPF7p4b0DubeHa4LyA/640?wx_fmt=png&from=appmsg)

根据式( 11) 可算得各个负载下的损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIIfUGLClLCbvI7hM75SGkNcdrauX9z6JNwN9K67aBj8BLWrFOia8YoGw/640?wx_fmt=png&from=appmsg)

电感的铁耗则主要由磁滞损耗与涡流损耗组成，由于 PCS 中采用的多为材料间绝缘阻抗较大的材料，如磁粉芯等，因此涡流损耗占比较小。电感铁耗是通过将电感电流分为高频电感电流 I10k与基波电流 Iac，计算其交流磁通纹波，根据交流磁通密度对应的损耗密度计算损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIfialyrnOnwspTUuZoqO00D0cJlqJ5aCuydicbrSYk7F1Jic4jcSDwFQSw/640?wx_fmt=png&from=appmsg)

将式( 12) 与( 13) 计算结果根据数据手册查询材料在指定频率、电流纹波下的损耗密度如图 11所示。磁芯损耗密度与磁芯体积相乘得到单个磁芯的磁芯损耗如式( 14) 、( 15) ，其中 PFe\_10kLoss为10kHz 交流磁通损耗，PFe\_50hzLoss为 50 Hz 基波交流磁通损耗，C10k与C50hz为该磁芯在 10kHz、50Hz 交流磁通下的损耗密度，Ve为磁芯体积。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIX7xeYRbzpwbnQOEzYEdZziaHwdibpvsibyjh87lVibN3DaFPiaxZnAPOJwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDInAmQl4JONWDwqBNqBzjmm95ibKLhQTB3lVqdgvAoHA37oe7kuzM4j7A/640?wx_fmt=png&from=appmsg)

易得在 0\. 25 载、0\. 5 载，0\. 75 载，满载时电感总损耗如图 12 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIibBzHWx2bHghyVs2YPUWwPicEDwH1vIeF9kKoic1jas0ZY8MBibxjlHz5Q/640?wx_fmt=png&from=appmsg)

综合上述分析，可计算 25℃ 与 125℃ 时储能PCS 总损耗以评估其效率。

图 13 可以看出当变流器工作温度为 25℃ 时的效率变化趋势与温度为 125℃ 时效率趋势一致，储能 PCS 效率在 0\. 75 载时达到效率最高点。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIcSqCfricpJvmTahSBGkmKicvAv6Jj9P1icZtTGW0EiaLlkJLd5hTjnY8gw/640?wx_fmt=png&from=appmsg)

4. 实验

为了验证本文所提损耗计算方案的有效性，基于 DSP 控制芯片 TMS320F28335 与前文损耗计算所用的 PM75CL1A120 智能功率模块搭建了一台双向PCS 样机，测试储能 PCS 在各个功率点的效率，下表 1 为 PCS 样机的参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIxKPuStc5icWhtcJvHicUuBiaznCicxD5fQAtmxmD7fcVdBlahBZuDicbgibA/640?wx_fmt=png&from=appmsg)

PCS 工作于离网运行状态，为了测试在逆变中的各个功率点效率，需要对直流侧电压与电流，交流侧输出三相电压与三相电流进行测量。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIFEl8A4SzzZG0eDg0SpCUxdtugjYT24ULSnyXKD1EMU2C84Cic7MQy7g/640?wx_fmt=png&from=appmsg)

图 14为储能 PCS 工作于逆变状态 1 /4 － 满载12kW 时所测得电压电流波形。

测得上述各个负载点的输入输出功率如图 15所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIgoDuiafwzlib3YBKP2PvTBFoLCwn73l7Vx0bNsia2UwJAZpVQv1lUBVGw/640?wx_fmt=png&from=appmsg)

图 16 为各个负载点效率曲线可看出 PCS 在整个工作范围效率由先上升后下降，在 0\. 75 载达到峰值效96. 25% ，与前文所得效率曲线趋势一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIvJnicK1srZibKxOmydCY6uMtIlZ96H3rQY3e8aoJLw5eWmViaq3DSALpw/640?wx_fmt=png&from=appmsg)

5\. 结论  

实验结果表明，本文通过 Mathcad 对 IPM 的各个参数进行线性拟合，得到储能 PCS 运行于 25℃ 与125℃的总损耗，通过实验测得效率曲线与预估效率曲线趋势具有一致性，验证了此线性拟合损耗分析方法的有效性与正确性，且在实际运用中具有较强的通用性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ILnqiaiabsaGgdiaUxSazXzMI3qcrW6Wy7U4cZ7ibKDkiccZ1fvUicDz2N9RQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIvDuHqMqw4NzkBLww55AokZ79ddHOF2VV3K8L19g4mVAcYVyBqNrYJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIeJibUoHo0j34QnibONuR7PBvtN4bQKpbxC3Qz8GwYpdtMF3AU6zibghcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIPb5XNpOqLdKiaHtibOic2VBC3WV34acRiaVe8Je0EnHroDlNh0cEC9EM7g/640?wx_fmt=png&from=appmsg)