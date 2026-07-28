# 如何轻松拿捏EMC？

原创 硬件笔记本 2024-09-10 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/g-yFRIUB5iZu3qT-e-oW\_A](https://mp.weixin.qq.com/s/g-yFRIUB5iZu3qT-e-oW_A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

**01、EMC简介**

电磁兼容（Electro Magnetic Compatibility），在国际电工委员会标准IEC对电磁兼容的定义为：系统或设备在所处的电磁环境中能正常工作，同时不会对其他系统和设备造成干扰。

EMC包括EMI(电磁干扰)及EMS(电磁耐受性)两部分：

（1）EMI电磁干扰，乃为机器本身在执行应有功能的过程中所产生不利于其它系统的电磁噪声（如打呼噜太大，影响周围人睡觉）；

（2）EMS乃指机器在执行应有功能的过程中不受周围电磁环境影响的能力。

  

**02、电子产品为什么要考虑EMC？**

举个网上的案例：1967年，火箭飞行控制计算机，发射时需要考虑冷却方案，早期都是冷却液循环，冷却液在流动制冷时，会存在静电积累（液体流动摩擦），到一定程度没有泄放通路，遇到金属就会产生击穿放电。

设计时设计绝缘气隙距离假如是10cm，但火箭到26KM的高空，接近真空时，环境和气压不一样，绝缘气隙距离缩短，导致故障。

可见EMC问题关系着我们产品的可靠性，产品EMC设计，涉及生命安全的产品，需要高度重视。进一步总结产品MEC需要考虑：

（1）市场准入和国家法规的要求：技术的贸易壁垒；

（2）特殊行业的准入要求：军工、铁路、汽车等行业准入要求；

（3）零部件电磁兼容需求，产品本身EMC性能需求；

（4）可靠性要求，电磁兼容做好，为市场应用的可靠性做保障，需要考虑各种极端工况；

（5）特殊应用，如EMC的信息安全：无线电信息截取、433传统汽车无线钥匙干扰等；

  

**03、EMC三要素**

EMC问题，我们可以用电路模型来建立EMC问题模型和给出解决方案。首先介绍下EMC的三要求：干扰源、传播路径、敏感源，其中干扰路径是最不容易判断的，干扰源和敏感设备可以通过经验做一些识别。

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZfic9mkwcNBCrLht0UicHqAmnKBnh66h8X934iaDNz6wHsSLaO7Sd9C5FIFg/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247528928&idx=1&sn=aef741cf2b348ac3a1b74dc3d250ca43&chksm=c30aaf32f47d2624d78a29ebcf3f978f3a814cec704ea4d16fffd0966f28c4ab83ab1f890c9b&scene=21#wechat_redirect)

举个案例帮助我们更好的理解三要素：如电吹风使用时，电视机出现雪花屏

（1）电视机的EMS，可能比较差，测不过；

（2）电吹风的EMI，同时可能也没有做限制；

  

那案例中的三要素分析如下：

（1）干扰源：电池风里面的电源电路、电机转动产生的电源变化

（2）敏感设备：电视机显示屏

（3）耦合路径：可能是220V插排的供电口（共用插排），或者空间电磁波辐射干扰

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficHCmEO55vlJzrr9XGns16ia27ia7YDrldg68G2dM1zOM2efK6QYpCMDzA/640?wx_fmt=png&from=appmsg)

  

**04、干扰源**

电子产品干扰源在电磁环境下的干扰源各种各样，常见的如：

（1）无线发射（4G、5G、对讲机）：RS类干扰

（2）雷电：浪涌类的干扰

（3）人体：ESD类干扰

（4）电气开关的工作：EFT/CS类的干扰

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficjwlEVvU18LWPgdzYLZJyC28gy3E5NZyEYyPxicenjib0SEwRzLz8ezqA/640?wx_fmt=png&from=appmsg)

从常见的干扰源信号特征，我们可以总结出电磁干扰源的要素：即变化的电压（dv/dt）或者电流（di/dt）。进一步在EMC问题中，根据经验60%问题来源于DCDC干扰。

对于设备来说DCDC开关电源是最常见的噪声源，而通常又不易受干扰，所以DCDC的EMC问题主要就是EMI问题。

以Buck电源为例，DCDC芯片开关过程中产生电压和电流的变化，包含了较快的di/dt和dv/dt噪声分量，其开关噪声不仅包含开关次和倍频频率段的噪声，另外其开关速度越低，高频噪声分量衰减越大。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficaXicljB2vZ31vtCL5SZKickmU9YibawaUo9JgbKSPpyeMibcAfRPVL7AnA/640?wx_fmt=png&from=appmsg)

  

除DCDC电源外，常见还有高速时钟信号，在电磁兼容的辐射发射测试中，常见的就是时钟辐射超标（如下图所示）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficG3QnxGFplnYdhicLHLbXCIwQxn2mq93NI2uDNzLFltQGYvo95HU8sTw/640?wx_fmt=png&from=appmsg)

因为时域中周期性的信号对应频域中离散的频谱，所以时钟能量比较集中，这在频谱上的表现就是：时钟频点（时钟基频以及倍频）上能量很高，而非时钟频点几乎没有能量。

  

**05、耦合路径**

常见的耦合路径包括：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficKVDQwkJvTcI3DwFUAFoBywticicgHJc7aZ0ic6BASdLOSQ1UI0KszuhtQ/640?wx_fmt=png&from=appmsg)

（1）传导：

在干扰源和接收电路之间的耦合路径就是直接的接触，比如引线、电缆或者路径连接。常见的耦合如电阻性耦合，由两个回路经过公共阻抗耦合而产生，干扰量是电流i，或者di/dt。

举例：数字电路和模拟电路为啥要做地分割隔离，最怕存在共阻抗的时候，数字信号流过共阻抗时，在模拟电路上产生uA电流产生电压，模拟信号敏感电压将出现偏差。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficKnnGgibIeiaYHMxAFfd2iawOs2xWwbGrjeibIj5WC9lbowqxQ0xFV5nicfQ/640?wx_fmt=png&from=appmsg)

（2）空间耦合：

（2-1）互容耦合：在两个接近的导体或者引线之间存在各种电容场，如最典型的平行走线，噪声源和敏感源之间有分布电容C2，频率下等效于为阻抗，就类似电阻耦合的干扰案例。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficldamBAyibQBI16T4G0kl7YVG2pWiaYJdlhx9aERnwHSJnUrHLQRgA08A/640?wx_fmt=png&from=appmsg)

（2-2）电感耦合：在两个平行导体或者引线之间存在磁场，当间距小于电磁波波长的时候会在接收导体上引起电压的变化。磁通的方式相互影响，如无线充电，常见干扰如PCB上的平行布线。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZfick2K3huSsazBXJpve53J2ibKS7f4vhuQC76ClpRev3XQ21N4NR3NuGgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZfic3XErLgt8mmpNic71D9gDvBtx1ncpra8fHYVePrN2PWFOt0GejNXcQqg/640?wx_fmt=png&from=appmsg)

对于电感或者磁场耦合，干扰产生的主要原因是流过高频电流回路产生的磁通空间上串到接收回路中产生的，因此问题的改善，一般需要减小流过高频电流回路的面积或者接收回路的面积。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficNzjEMBAcnIcVmPk9Via3Fj7fdaibSt7UWs1Z4a9O4X92ThzJZCpgjaiaA/640?wx_fmt=png&from=appmsg)

（2-3）电磁辐射：当干扰源与接收电路之间的距离比较远，大于电磁波波长，发射与接收之间相当于无线电天线，电磁干扰从干扰源发送，辐射出的电磁波在空气中传播。

  

**06、敏感源**

电子产品敏感源，常见的如：复位电路、传感器采样电路，数据通信电路、音视频处理电路等均视为敏感电路。

举例如传感器和大功率用电设备如电机共地了，大功率电机工作的时候产生共模漏流，就会对传感器的采集产生影响，在设计时我们需要注意此类信号。

  

**07、时域与频域**

时域与频域是针对同一个事物，不同角度的分析结果，在做EMC分析时更多的是从频域的角度去分析问题。如在时域上，基带的时钟越接近完美的方波，但在频域上，射频的EMC可能是一个不好的波形（边沿越陡峭，高次谐波频谱能量越大）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficqbqjZ97F9GqDvicHp77UHXSXCMZMZAuxJkODNic4wJugicmcViaOs1y5Ng/640?wx_fmt=png&from=appmsg)

我们从最常见的DCDC开关信号和高频时钟信号在频域的角度进行展开。左图表示为脉冲波形，在时域上，其特征是tw（脉冲宽度）和ts（上升时间/下降时间）。中间的图形表示从傅里叶变换获得的理论脉冲波形的频谱。频域上，随着频率的升高，振幅衰减，衰减斜率随tw和ts而变化。

最右边的图表显示了当脉冲ts变慢（增加）时频谱的变化。当斜率变化到-40db/dec时，1/πts的频率点降低，最终结果是振幅减小。简单地说，当ts变慢时，频谱振幅衰减。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficVBj32KqpcficGtmYgFsKlWeaLpgcZ430YCeXEibRfwwgKbPXgCEibJlvg/640?wx_fmt=png&from=appmsg)

因此时域信号边沿越陡峭，频域高次谐波频谱能量越大。如上升沿的快速变化，产生的高次谐波能量，在EMC工程师眼里，都希望它尽快落到-40db衰减的范围。改变的方式为增加电阻或者电容（加大tr）。如时钟周期信号，增加RC，在满足时钟信号质量要求的前提下，尽可能减缓信号的上升沿的变化速度。

相应我们可以总结出经常遇到的EMC信号特点：

（1）ESD：上升沿tr波形一般会在0.5ns-1ns左右，达到GHz，高频能量丰富，干扰强。

（2）EFT：上升沿tr波形一般会在5ns左右，主要频谱都在几十MHz，更多的靠滤波解决。

（3）Surge：上升沿tr波形一般会是us级别，主要频谱能量在KHz，更多靠瞬态防护器件吸收，不是滤波。

  

**接下来再跟大家分享一些基础的解决方案**

**EMC主要是解决干扰问题，目前主要的手段有：屏蔽、滤波、接地等方案，本次主要分享的是滤波。**  

1 滤波器介绍

滤波 (Wave filtering)：**是将信号中特定波段频率滤除的操作，是抑制和防止干扰的一项重要措施。**如传导、辐射超标，是某个电缆的对外传导、辐射的，那就可以在敏感信号处进行滤波。

实际上，任何一个电子系统都具有自己的频带宽度（对信号最高频率的限制）。频率特性反映出了电子系统的这个基本特点。而滤波器，则是根据电路参数对电路频带宽度的影响而设计出来的工程应用电路。

滤波作用：**切断干扰沿信号线或电源线传播的路径，可与屏蔽共同构成完善的干扰防护。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficlicGxSVkiboHm71wT2D8CX0vB9Iic5ldfKQlahEPJvDcibvlpicqXoica66A/640?wx_fmt=png&from=appmsg)

2 滤波器重要指标-插入损耗

**插入损耗：**插入损耗是衡量滤波电路滤波效果的指标****，通常以分贝数或频率特性曲线来表示。它是指滤波电路接入电路前后，电源传给负载的功率比或端口电压比。

****IL=10lg Po/P2 (dB)或 L=20lg VO/V2 (dB)****

其中 Po、P2、 Vo、V2分别表示滤波电路接入前后负载端的功率和电压。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficpa0eKQFymLm9sVusu87Y8RQiagFcicYbwsvF1OicopjQkusHaxMyLcTFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6CR9uWlHJiabTia6EkKicwahIOseeE7UcrjaPicYBA0dChDxBnEZs66uA79cqOZKNBQ4IaSJa1Mk9OGzQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

式(1) 中，RL、和 RS，分别表示源阻抗和负载阻抗，a11、a12、a21、a22表示滤波器网络的A参数，更详细的计算方法可以参考文献《EMI电源滤波器的插入损耗分析》。

这里举个例子，如下图的差模滤波方案，**假设源端阻抗和负载阻抗均为50欧姆**，电源输入1V，滤波电容的阻抗 1 欧姆，则未加滤波器前，V0=0.5V，加入滤波器后，V2为滤波阻抗和负载阻抗并联后与源阻抗串联分压即V2=0.019V，**则插入损耗=20lg0.5/0.019=28.4db。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficVhl0vAaAGDeL7N6oictX99pZprQte0oxMBpGMibUcsXZUWbdp2AxKPCg/640?wx_fmt=png&from=appmsg)

**假设源端阻抗和负载阻抗均为 1 欧姆**，则未加滤波器前，V0=0.5V，加入滤波器后，V2为滤波阻抗和负载阻抗并联后与源阻抗串联分压即V2=0.33V，**则插入损耗=20lg0.5/0.33=3.6db。**

根据公式和示例，可以知道 **EMI 滤波器电路在不同的源与负载阻抗的情况下，滤波性能有很大的差异**。在一般的滤波器产品说明书中，提供的插入损耗值都是在源阻抗和负载阻抗均为50欧姆的情况下得到的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficfTbPm2U9zL0My48vy02iaJarhYUwibtfyNXKsKu4LqtUQqtvY6ozia96Q/640?wx_fmt=png&from=appmsg)

在实际使用中，滤波器的端阻抗随着工作环境的变化而变化，因而对滤波器插入损耗的影响也很大 ，滤波电路也是如此。**设计时要求滤波器的插入损耗越大越好，整改时可以根据超标频率选择合适的滤波器。**

3 滤波器类型和选型特征

滤波器根据滤波频段可以分为低通、高通、带通、带阻等**，在EMC问题中，最常用的为低通滤波器。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficXI1WZTZAiapvDp8FUGTp7mQaLY3XxaO0jpSZH4twpL3OcWRMJtytjHw/640?wx_fmt=png&from=appmsg)

低通滤波器常见的网络拓扑如下，**实际使用中推荐使用 PI 型或者 T 型滤波网络**。主要原因是根据插损的计算方法，**在电感靠近低阻，电容靠近高阻时滤波效果最佳。**而实际使用时往往不能准确识别源端和负载端的高低组状态，所以采用PI型或者T型都能做到最佳匹配。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficr85kdAxZf1UWrPBpXAIekAxkkX7qquSmDQqlIK8mMleCsogSBuzxicg/640?wx_fmt=png&from=appmsg)

举例如下，在没有经过CL滤波前，电压基本都在负载电阻上即1V，加入CL滤波后，负载电压为滤波电容上电压的一半为0.25V，**插损=20lg1/0.25=12db。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficHegc9wNib3Zxgwictygp3VczmQkia4MbxvficricspY55TWXEEqQkic78apw/640?wx_fmt=png&from=appmsg)

  

上例的基础上，调换CL的位置，如下图，在没有经过CL滤波前，电压基本都在负载电阻上即1V，加入滤波后，负载电压为滤波电容上电压，为0.001V，**插损=20lg1/0.001=60db。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficKqRcrxIYypvVCH0YJ4FhArHnT0CIHVABct8oDrdTDr0wh9HBCzwxKw/640?wx_fmt=png&from=appmsg)

元器件没有变，只是变换位置，滤波效果的差异很大，**原理即：电容靠近高阻，电感靠近低阻才更有效。**

实际应用选择：在不知道源端和负载的阻抗高低的情况下，比较合理的就是pi网络和T型网络。**针对低频，通常采用电容+电感+电容滤波方式，高频采用电容+磁珠+电容滤波方式。**如PI型，不管ZS、ZL是高还是低，并联电容后都是低，中间电感靠近低阻为有效状态。

4 滤波器案例：电源的EMC三要素分析

对于EMC问题，我们在原理图阶段就要进行滤波设计，其要点就是从EMC的三要素出发：

-   **干扰的源头：降低强度**
    
-   **敏感电路：提高抗干扰能力**
    
-   **干扰耦合路径：降低路径效率**
    

下面以开关电源为例，分析其滤波设计方案。开关电源以其效率高、体积小、输出稳定性好的优点而迅速发展起来。**由于开关电源工作过程中的高频率、高di/dt和高dv/dt使得电磁干扰问题非常突出。**如何降低甚至消除开关电源的 EMI 问题已经成为开关电源设计师以及电磁兼容(EMC)设计师非常关注的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficwoutYzuWr3icv1OYGHA1ibyicy3a0QMqRclIGiarUby3vvn6jmCpzE72Zw/640?wx_fmt=png&from=appmsg)

开关电源的干扰，既有共模干扰，也有差模干扰。

**对于差模干扰：**其存在于L-N线之间，电流从 L 进入，流过整流二极管正极，再流经负载，通过热地，到整流二极管，再回到N。**在这条通路上，有高速开关的大功率器件，有反向恢复时间极短的二极管，这些器件产生的高频干扰，都会从整条回路流过，从而被接收机检测到，导致传导超标。**

**对于共模干扰：**共模干扰是因为大地与设备电缆之间存在寄生电容，高频干扰噪声会通过该寄生电容，在大地与电缆之间产生共模电流，从而导致共模干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficibT1l1ZPZWlhLnNKyFrFNctA7htZhYVgBAwJCh0MXIQJITwMxN2fPaw/640?wx_fmt=png&from=appmsg)

根据干扰产生的原因和经验，低频如150kHz-1.5MHz，以差模为主，1.5MHz-5MHz，差模和共模共同起作用，5MHz 以后高频部分基本上是共模干扰为主。我们先以差模干扰为例展示干扰的源头、耦合路径和测试的敏感电路。

**从干扰源头看**，开关电源产生电磁干扰最根本的原因，就是其在工作过程中产生的高di/dt和高dv/dt，**它们产生的浪涌电流和尖峰电压形成了干扰源。**

**工频整流滤波使用的大电容充电放电、开关管高频工作时的电压切换、输出整流二极管的反向恢复电流都是这类干扰源。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficA3J4N7VEqHVX1cdFSTiaYTlBcXpaaIKV4xiaWibQwsibFib8fuuzddPOOIQ/640?wx_fmt=png&from=appmsg)

**从耦合路径看**，待测设备（EUT）的电源端口是干扰源，测试仪器为敏感电路，则从仪器的连接关系看，**电源端口的干扰经过AC头接入了LISN的采样电阻（50欧姆），再经过测试仪器内部的采样电阻50欧姆**，整个采样电阻接近100欧姆。当采样电阻上的电压超标，则传导的干扰超标。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficSu5E3dgcw0wXmPIXxFJibazMM2yFicIZUm94zdPDvuagXNwod8tBdsNw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZfickoo0N5lPcmQoaJPGK7YAV5KDZeFQDrWdrtQnwO1THSA37XvZCs1oAA/640?wx_fmt=png&from=appmsg)

  

进一步转化为如下电路模型，来看干扰的通路。噪声主要由 di/dt 引起，通过寄生电感，**在火线和零线之间的回路中传播，在两根线之间产生电流 ldm ，不与地线构成回路。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficqsGcaOoSlm45m8OmJt74lb3k58Ih9s4w54fgcpCYPwnfRicv3ouXKRQ/640?wx_fmt=png&from=appmsg)

由 Vdm 驱动的 Idm 导致输入 AC 端口差模干扰，LISN +仪器的采样阻抗为 100欧姆，开关电源的接口没有滤波时，则很容易传导测试超标，干扰都在敏感设备上（采样电阻为高阻，VDM的ZC+ESR为低阻）。

干扰电压幅度为：Vdm：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficTVLjAMlmzia2zoN3smnou89bF0CZ0vqk32ytU0LGdicDxYZyjwlC8EVA/640?wx_fmt=png&from=appmsg)

这种情况下，**针对电源口的EMC滤波就可以考虑电容方案，接口加差模滤波电容，C1通常为100nF~2.2uF的聚醋X2电容。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZfic99oAOMEoSw6pNKAh3YpDZGWACmiaBkh79K5QlW0USrp3anJicnoEHl5A/640?wx_fmt=png&from=appmsg)

**X电容**，常用做抑制电源电磁干扰，一般安装到电源火线与零线之间，而且起到的作用都是**差模滤波**。**X1电容耐电压更高**，在一些更高电压的电路中要使用X1安规电容，X1 >2.5kV ≤4.0kV ；X2 ≤2.5kV。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficJLIsQONy8OdZZMx0JUtqDOxZtYF46tS5pp2bjkfgltWKHYS3DEUA4Q/640?wx_fmt=png&from=appmsg)

  

电容容值选型原则：**根据电容的阻抗-频率特性曲线进行选型**，在需要滤波的频点上，让电容的阻抗尽可能小，即让干扰电流更多的流向大地，而不是流经测试仪器的采样电阻。因此根据差模干扰为低频**干扰，频段在 150kHz-1.5MHz，可选**100nF~2.2uF电容，再结合耐压确认电容型******号。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficf6tfwJbrLMdUF6tFXVBsicCVWtboZ6P9caN004u8xzqEIRYGHYia2czQ/640?wx_fmt=png&from=appmsg)

假设传导测试时，超标比较多，则考虑PI型滤波器。L1，L2，C1，C2 构成低通 PI 型滤波器，L1、L2通常为100 ~300uH铁粉芯电感，也可由共模电感的漏感形成，C1，C2通常为 100nF~ 2.2uF 的聚酯X2电容。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficNYCqmIFtITEcONiaa21Lpm69MUc07icjbSBDUib0GicianYI5ghZicmZzyqA/640?wx_fmt=png&from=appmsg)

4 结论

解决EMI问题从源头考虑进行滤波，效果更好，如开关电源，从端口进行传导滤波。设计滤波时，需要针对传导干扰的特性，有针对性进行滤波器件选择。并且遵循电容靠近高阻，电感靠近低阻的原则，才能获取较好的滤波效果。

通常在传导测试中，首先分析干扰性质，通常低频超标的滤波方案，主要电容和PI滤波电路，也可以考虑差模电感，在开关电源设计前需要增加差模滤波电路。

  

**下面介绍数字IC电源、时钟、接口相关的滤波设计**

1 数字电源滤波

本文的**数字电源**特指给**数字芯⽚**供电的电源，通常把较高的电压降低到1.8V/3.3V等电压。数字电源往往电压⽐较低，并且电源引脚较多，因此⼀般使⽤电容滤波。电容滤波**⼤/⼩容值配合**使⽤，⼤电容储电（uF级别），⼩电容⾼频滤波，每个电源管脚⼀个，容值由滤波频率决定（⼀般⾼频取1nF、100pF，低频0.1uF）。

储能电容与高频电容配合使用，下图中间波⾕是**反谐振点**，由电路寄生电容&电感谐振导致，此频率附近的滤波效果最差，如果造成了影响，就需要考虑增加该频率附近的电容。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficnskr6IUwFTz9V8NBWdNXLX6oSLn8y7R65kgM0jEHF9LDiaUpuBJ7ibAg/640?wx_fmt=png&from=appmsg)

在数字系统中，电源分配系统(PDS，Power Distribution System)的质量直接影响着信号的质量。电源噪声表现为**同步开关噪声(SSN)**、**地电弹噪声(GroundBounce)**和**回流噪声**等，它直接影响着系统的噪声容限和信号的时序。 

电源分配系统设计的关键是控制电源的**目标阻抗**。设计主要考虑的问题有：**PCB 叠层方案、滤波电容的选择和放置、电源分割、连接器的选择**等等。PCB 板上的电源分配系统由电源模块、电源地平面、各种电容组成。它们分别在不同的频率范围内作出响应： 

-   **电源模块**响应的频率范围大约是从直流到 **kHz**； 
    
-   大的**电解电容**提供电流并在 **kHz 到 MHz** 的范围内保持较低阻抗； 
    
-   **高频陶瓷电容**在 **MHz 到百 MHz** 的频率范围内保持较低阻抗； 
    
-   PCB 板上的**电源地平面对**则在 **100MHz 以上**发挥重要作用； 
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficbANJaGVLNJ3HDRicUyDJMGwlFauRh2JITqiaXmr3ruetb5xG5tibBochQ/640?wx_fmt=png&from=appmsg)

尺寸小的电容 (如 0603 封装)寄生电感较小，容值也小，因而其谐振频率较高，在高频情况下阻抗较低，常被用来减小 EMI 和回流噪声。尺寸较大的电容（如电解电容），可以提供比较大的电流，然而其谐振频率不高，这使得它的应用受到很多限制。 

为了得到比较大的电容和较高的谐振频率，可以把几个小电容并联在一起 (N 个电容并联后，其容值为 NxC，电感为 L/N，谐振频率不变，ESR 减小为 R/N)。 

  

**案例**：SDRAM电源滤波不⾜，EMI测试不通过。

某产品进行欧洲 CE 认证，EN55022 空间辐射项目测试超标，导致产品不能认证上市。分析频谱发现主要是240、360、480、600、720MHz超标，超标频率是**120M的倍频**。

-   **⼲扰源**：数字电路时钟（SDRAM 120MHz）。
    
-   **耦合路径**：外接线缆（主要通过电源或地耦合）、PCB⾛线环路。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficwEV38IOeCFzP76PicJJRTYXOfXBqLIuRl7nEMc6NkugTJVXQZSFibQ2g/640?wx_fmt=png&from=appmsg)

    解决问题的主要思路是**降低干扰源影响**，同时在接口**增加滤波电路**，减弱耦合途径的效率。 

-   **接口处理**：接口是主要耦合路径，因此信号端口需要进行滤波，主要是**磁珠 +电容**方式，磁珠选取 600R/100M，电容选择了 200PF。
    
-   **原理图改进**：SDRAM 时钟是**干扰源**，在匹配电阻后增加了对地滤波电容，取 10PF 左右（根据干扰频率决定）。同时增加电源管脚电容，容值取220pF。
    
-   **PCB 改进**：SDRAM 与 CPU 接口连接走线跨分割，地环路面积大，改进后的电容靠近电源引脚放置，IC下方地平面完整。
    

2 时钟滤波设计

时钟信号也是干扰常见的源头之一，下图分别是时钟信号对时域和频域产⽣的影响：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6AJwhOPN0ZYH5c0r4B4wtagcZciaiauB28CzPTz33u3fesEy7diaaJGGIkNiaU5pas2F2g13PH9EFYTvw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6AJwhOPN0ZYH5c0r4B4wtagb3UVOfcjnOaxEKnSmssVyR4Sxlmc4gx3icyDtydYkiawicbnQ8q1m7pTg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

周期信号的傅里叶级数展开式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6AJwhOPN0ZYH5c0r4B4wtagRZqA9omXYYQA64fGpghiap2ib0ruPkfZFA2VY1RkyYQa3icBLnKvI0t5w/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

从公式中可以看到周期信号会有基频的**奇次谐波分量**（如1 3 5 ...），这是因为偶次谐波刚好被0相乘了。

但我们有时候也会看到**偶次谐波****，**这往往是因为**信号的上升/下降时间不一致**，导致在频谱中看到偶次谐波，下图是利用LTspice完成的仿真对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6CP1Cr31pJSWhDSnY1JjVpXBkia0YkHYxRIgmRicHW7OkTuGn3EjNmIK4WYwS9qcb8jib3TZ1d108xtA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6CP1Cr31pJSWhDSnY1JjVpXf6slflbtW8ad5balH3CCCuQXib4vSPJNTaMBPZ3yKtZjU6qJhSAcRwg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

    下图是**有源晶振滤波电路**的一个简单例子：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficmwO1cWuN7NweSBeRKAeW3WPPNIxPEr6a5cggjUGECg74yiazuibjsxag/640?wx_fmt=png&from=appmsg)

晶振的供电使用了**磁珠+电容**的组合，输出时钟增加了**RC滤波**。电阻通常采取 22R/33R/47R，有些低频时钟可以用磁珠替代。电容根据时钟频率选取，频率越高，电容值越小，一般100M 时钟选取 5pf 电容滤波，50M 时钟可以选取 22pf 电容滤波。 

另外，建议设计时单板上 CLK 信号预留阻容滤波设计，最差情况是电容不焊接，电阻采取 0 欧姆替代。 

3 接口滤波设计

电子产品经常通过电缆对外通信，但电缆往往带来电磁兼容问题，主要原因是电缆可以传导电磁干扰，同时可以作为天线，接收和发射电磁干扰。 

电子产品的电缆长度从几十厘米到几公里不等，可以在特定的频率进行发射与接收电磁干扰信号。 当**天线的长度接近无线电信号波长的 1/4 时**，天线的发射和接收转换效率较高，受到的干扰也较大。 频率和波长的关系（λ=c/f）如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficgAFzLF60Aw4JkZl5bs67HfJ87ibo7rndfwYRLVoW7OPQVR2e001xCuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/XtVNIjgMl6AJwhOPN0ZYH5c0r4B4wtag7L9jP7SIkj6EURm87DI89HX1dgUAbhVkB3Bge4YmzmU1icWSZmaasAw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

**电缆干扰定位**： 

当遇到产品 RE 测试超标问题时，**直接拔掉电缆**的方式是最方便快捷的。如果发现确实是电缆导致超标，可以尝试在电缆上施加**屏蔽接地**等措施以外，另外在**接口处采取滤波措施**也是重要的手段。 

1）针对**内部干扰**，通过电容等方式形成干扰信号的低阻抗通路，阻止其跑到外部。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficrAs6icg1ulm94c1FwXiaRVjQWLOXUdvK4UzgOSKTjbzqFPia8GHtiaB8vg/640?wx_fmt=png&from=appmsg)

2）针对**外部干扰**，一边是使用磁珠形成高阻抗通路，一边是将外部干扰通过机壳泄放到地，阻止其进入内部，右图是最完整的方案。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficbFnibNic3B3DXVnic95otIbZN5YdJkCtL4iay6FTwkpq6FZRQ8o8HfQEuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjgduP0MjEcEtUnWUmrVZficXyzEXeYz4jEHAPYgRE7RSwORysaI8aQIRzmrhtGcIeSdjFn4RSRZSA/640?wx_fmt=png&from=appmsg)

  

通信接口一般分为**非差分接口**和**差分接口**：  

-   **非差分接口**通过公共地回流，比如**232、PS2、VGA**信号，通常使用**电容+磁珠+电容**的方式进行滤波（高速时使用串阻代替磁珠），通常不使用共模电感。
    

-   **差分传输**的特征是两根线束传输信号，两个信号振幅相同，相位相反，电流⽅向相反。典型的差分接⼝：**485、CAN、HDMI、USB、LVDS、以太⽹**等。通常采用**共模电感**滤波（例如USB、HDMI等都有专用的共模电感），中低速可以使用电容。
    

备注：

-   **磁珠**：确保对正常信号⼯作频率的阻抗<50R，滤波频率⼏⼗MHz〜1GHz，更⾼的频率就只能⽤电阻了，有些磁珠可以过⼤电流。
    
-   **电感**：滤波频率KHz〜100MHz，电感的额定电流通常会较⼤。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章整理于网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。