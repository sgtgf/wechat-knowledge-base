# TVS过压保护电路

原创 硬件笔记本 2024-05-20 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/oWyDIjVS1KhhYM9Syo3qRA](https://mp.weixin.qq.com/s/oWyDIjVS1KhhYM9Syo3qRA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

过压保护电路的作用是：若开关电源内部稳压环路出现故障或者由于用户操作不当引起输出电压超过设计阈值时，为保护后级用电设备防止损坏，将输出电压限定在安全值范围内。

本篇博文将从省钱省心的TVS管和可靠高效电路设计两个方法介绍如何快速设计过压保护电路。

**1、省钱省心TVS管**

TVS（Transient Voltage Suppressors），即瞬态电压抑制器，也被称为雪崩击穿二极管，是一种二极管形式的高效能保护器件。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMJvrsibLGau5mfOzjicdELiaJEYPgh7o4NRx8PEAlibTRZqiaQusVkHeviaSQ/640?wx_fmt=png&from=appmsg)

  

**1.1、TVS管特性**

TVS管有单向与双向之分，单向TVS管一般应用于直流供电电路，双向TVS管应用于电压交变的电路。

例如，单向TVS管应用于直流电路时，如下图所示。当电路正常工作时，TVS 处于截止状态（高阻态），不影响电路正常工作。当电路出现异常过电压并达到TVS（雪崩）击穿电压时，TVS 迅速由高电阻状态突变为低电阻状态，泄放由异常过电压导致的瞬时过电流到地，同时把异常过电压钳制在较低的水平，从而保护后级电路免遭异常过电压的损坏。当异常过电压消失后，TVS 阻值又恢复为高阻态。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMjVKrMUzjmicnzEPlbictFQv63hgKoUYF5BicLUs2uNzBAGoDYmz1ibWDIg/640?wx_fmt=png&from=appmsg)

TVS工作原理

选用TVS管有以下几点重要参数：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUM3O0hJmx5nXh6sVtuTM0IPMvMdQhTM7hibuT5WapGzw3lFYM3N0tmVibw/640?wx_fmt=png&from=appmsg)

选用TVS管关键指标

(1) Vrwm截止电压

TVS 的最高工作电压，可连续施加而不引起TVS劣化或损坏的最高工作峰值电压或直流峰值电压。对于交流电压，用最高工作电压有效值表示，在 Vrwm下，TVS 认为是不工作的，即是不导通的。电路设计时最高工作电压必须小于Vrwm，否则将会导致TVS动作导致电路异常。

(2) IR漏电流

漏电流，也称待机电流。在规定温度和最高工作电压条件下，流过 TVS 的最大电流。TVS的漏电流一般是在截止电压下测量，对于某一型号 TVS, IR 应在规定值范围内。对 TVS两端施加电压值为Vrwm，从电流表中读出的电流值即为TVS的漏电流IR 。对于同功率和同电压的 TVS，在Vrwm≤10V 时，双向TVS 漏电流是单向 TVS 漏电流的 2 倍。对于一些模拟端口，漏电流会影响AD的采样值，所以TVS的漏电流越小越好。

(3) VBR击穿电压

击穿电压，指在 V-I 特性曲线上，在规定的脉冲直流电流It或接近发生雪崩的电流条件下测得 TVS 两端的电压。测试的电流It一般选取10mA左右，施加的电流的时间不应超过400ms，以免损坏器件，VBR MIN 和 VBR MAX 是 TVS 击穿电压的一个偏差，一般 TVS 为±5%的偏差。测量时，VBR 落在VBR MIN和VBR MAX之间视为合格品。

(4) IPP峰值脉冲电流 ，VC钳位电压

峰值脉冲电流，给定脉冲电流波形的峰值。TVS一般选用 10/1000μs 电流波形。钳位电压，施加规定波形的峰值脉冲电流 I PP 时，TVS 两端测得的峰值电压。IPP及VC是衡量 TVS 在电路保护中抵抗浪涌脉冲电流及限制电压能力的参数，这两个参数是相互联系的。对于 TVS 在防雷保护电路中的钳位特性，可以参考VC这个参数。对于相同型号TVS，IPP越大，耐脉冲电流冲击能力越强，若在IPP相同下的VC越小，说明TVS的钳位特性越好。

(5) 结电容Cj

结电容是TVS中的寄生电容，在高速IO端口保护需要重点关注，过大的结电容可能会影响信号的质量。

1.2、TVS管选型

选用TVS管，有三个要点需要注意：

电压合适能保护后级电路；

引入的TVS的结电容不能影响电路；

TVS功率余量充足，满足测试标准，且不能比保险管先挂。

选型的过程可以按照以下的思路步骤进行：

选择TVS最高工作电压Vrmw；

选择TVS钳位电压VC；

选择TVS的功率；

评估漏电流Ir的影响；

评估结电容的影响。

具体说明如下所示：

(1) 选择TVS最高工作电压Vrmw

在电路正常工作情况下，TVS应该是不工作的，即处于截止状态，所以 TVS 的截止电压应大于被保护电路的最高工作电压。这样才能保证 TVS 在电路正常工作下不会影响电路工作。但是 TVS 的工作电压高低也决定了 TVS 钳位电压的高低，在截止电压大于线路正常工作电压的情况下，TVS 工作电压也不能选取的过高，如果太高，钳位电压也会较高，所以在选择 Vrwm 时，要综合考虑被保护电路的工作电压及后级电路的承受能力。要求Vrwm要大于工作电压，否则工作电压大于Vrwm会导致TVS反向漏电流增大，接近导通，或者雪崩击穿，影响正常电路工作。

Vrwm可以参考以下的公式：

Vrwm≈1.1~1.2\*VCC（其中VCC为电路的最高工作电压）

(2) 选择TVS钳位电压VC

TVS 钳位电压应小于后级被保护电路最大可承受的瞬态安全电压，VC与TVS的雪崩击穿电压及IPP都成正比。对于同一功率等级的 TVS，其击穿电压越高VC也越高，所选TVS的最大箝位电压VC不能大于被防护电路可以承受的最大电压。否则，当TVS钳在VC时会对电路造成损坏。

Vc可以参考以下的公式：

VC＜Vmax（其中Vmax为电路能承受的最高电压）

(3) 选择TVS的功率Pppm（或者Ipp）

TVS产品的额定瞬态功率应大于电路中可能出现的最大瞬态浪涌功率，理论上，TVS的功率越大越好，能够承受更多的冲击能量和次数，但是功率越高，TVS的封装越大，价钱也越高，所以，TVS的功率满足要求即可。对于不同功率等级的 TVS，相同电压规格的 TVS 其 V C 值是一样的，只是 I PP 不同。故 Pppm 与 Ippm成正比，Ippm 越大，Pppm 也越大。对于某一电路 ，有对应的测试要求，设实际电路中的最大测试电流为 Iactual ，则 Iactual 可估算为：

Iactual=Uactual/Ri（Uactual为测试电压，Ri为测试内阻）

TVS 要通过测试，故实际电路中要求 10/1000μs 波形下 TVS 的最小功率 P actual 为：-------其中di/dt为波形转换系数，如实际测试波形为其他波形，如 8/20μs波形，建议di/dt取，如测试波形为 10/1000μs，取，实际选型中，TVS 应留有一定的裕量，TVS 的功率PPMP 选择应遵循Pppm＞Pactual。

(4) 根据所选的TVS的结电容和漏电流评估影响

若TVS 用在高速IO端口防护、模拟信号采样、低功耗设备场合，就需要考虑结电容和漏电流的影响，两则的参数越小越好。

**选型举例**

例如：电路的正常工作电压VCC是24V，最高工作电压Vmax是26V，后级电路可承受的最高瞬态电压为50V，实验的测试波形为 8/20μs波形，测试电压500V，测试电源内阻及PPTC的静态电阻合计为2Ω。根据上述信息选择合适的TVS。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMQEKXskhU2DoXxIn5C9MprJTwxqVhBTQQTP5sROaDOc7x0gXkfeWORA/640?wx_fmt=png&from=appmsg)

(1) 选择TVS最高工作电压

Vrmw≈1.1~1.2\*VCC=26~28V

(2) 选择选择TVS钳位电压

VC＜Vmax=50V

(3) 计算实际测试波形功率：

Pact=50\*（500/3）\*1/2=4166W

根据计算结果，可以选用5.0SMDJ26A这个TVS，由于这个TVS用在电源端口，结电容和漏电流可根据具体实际电路选用。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUM6cDxwPHzL96c7bnmjoq5avvrNptgYbuWJr2jmaUPic1HDicldwdAFRUA/640?wx_fmt=png&from=appmsg)

5.0SMDJ26A TVS关键参数

1.3、实际电路应用

当设备的端口的工作电压超过了TVS的最高击穿电压（VBR MAX），TVS可以看成一个低阻抗的电阻，流过的电流非常大，电阻不断发热，如果没有其他措施，这个TVS很快就会挂掉，失效的TVS大概率变成了开路，后级的电路仍然处于没有保护之中。所以最好在TVS前面加一个保险管，在TVS挂掉前，保险管先失效断路，就可以保护TVS和后级电路，如果换成自恢复保险管，故障排除后就可以自行恢复正常工作。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMHpvwvUNFfNX7wwMHdqiaZRw5D7FBXs5Kfe25jNS3YkWiczput9mibqHpw/640?wx_fmt=png&from=appmsg)

TVS用于防止过压保护的工作原理

如下图所示是RS485的过压保护电路，RS485芯片的工作电压一般是5V，能够承受的极限电压一般是12V。通常设备的工作电压一般是12V或者24V，如果误将24V电源电压接到RS485A-B线上且没有过压保护，大概率RS485芯片会物理损坏。TVS管专门用于瞬间过压保护，无法应付长时间的过压，不到0.5STVS就会因过热烧毁，后级电路就会失去保护。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMaEkC7pY0zfJx4Lib6QSl6R8gCpgySU0iaEW9B0icot9v1ceW44PWzzJhg/640?wx_fmt=png&from=appmsg)

如果在TVS的前面增加自恢复PTC，且PTC的跳闸时间足够短，并且TVS的钳位电压Vc＜电路最高工作电压VCC，在TVS烧毁之前PTC跳闸，就可以实现后级电路的保护。 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUM8MicQ7AERVMcMUIvLo1z9yUzjyfUs6ZNa13GZcYp1wt37R81hOZ33gg/640?wx_fmt=png&from=appmsg)

TVS管和自恢复PPTC配合使用时的计算思路过程如下所示：

(1) 保护实现的前提条件

当外加电压达到TVS的击穿电压时，TVS开始导通，阻抗变低，流过的电流不断增大。随着电流的不断增大，PPTC的阻抗不断增大，不断发热，最终PPTC变成断路失效，整个后级电路得以保护。所以要实现电路保护，需要2个前提：

TVS的功率足够大，大到可以坚持到PPTC断路；

PPTC的动作时间要足够小，小到要在TVS失效前动作。

(2) PPTC选型

用于过压保护时，PPTC的选型需要满足以下几个条件：

持续电流Ihold＞电路最大工作电流 Iwork；

最大动作时间Trip越短越好，如 SMD1812B020TF，当通过 PPTC 的电流为 8A 时，PPTC 的动作时间应不大于 0.02s；

最大过载电流Imax，工作温度范围内 PPTC不能超过的电流值，超过PPTC很大概率会永久性损坏；

最大工作电压Vmax，工作温度范围内PPTC不能超过的最大工作电压值，超过PPTC很大概率会永久性损坏。

(3) TVS选型

TVS的选型要求如下：

参照：上述1.2、TVS管选型小节；

计算TVS可承受最大的热量Qtvs=P\*t=P/1000（规格书给出的一般是1000uS下的功率，除以1000是转换为单位S）。

计算所选的TVS实际的工作热量：

Qact=Vc\*Itrip\*Tptc（Vc：TVS的钳位电压；Itrip：PTC保险的跳闸电流；Tptc：跳闸电流下的跳闸时间。）

TVS的可承受热量实际选型Qtvs＞理论计算Qact；

**电路设计举例**

如下图所示，PTC和TVS配合用于RS485过压保护，设备的供电电压是24V，RS485芯片选用MAX488，正常工作电压5V，最高可承受12V，正常工作电流＜1mA，选择合适的PTC和TVS。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMJWIvic8eeJOqhPibZ2AaTkEbqicibqGBagNJPANtfUWMbyMEkicV11YMibPw/640?wx_fmt=png&from=appmsg)

PTC和TVS配合用于RS485保护

(1) PTC选型

由于RS485的工作电流非常小，PTC电流选择最小的即可，关键参数是跳闸时间Trip，Trip越小越好，越小跳闸时间越短，对TVS的功率要求越低，封装越小，成本越低。经过选型，SMD1812B020TF电流和电压满足要求，跳闸时间Trip是最短的，为0.02S。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMu4QcyGHptZ5lJOFOrXe8AlKibRx1xKG1bKK8RRTibzEzVkicZ78iaMchEg/640?wx_fmt=png&from=appmsg)

(2) TVS选型：

TVS电压选型

由于RS485的工作电压VCC为5V，极限电压为12V，因此TVS的工作电压Vrwm≥5V，钳位电压≤12V；可以预选SMBJ5.0A。Vrwm=5V，Vc=9.2V。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMelXiav3OZlQjuBXbXiccA6vNyjB7zFiaRqI8Gy2dF4ibWMHq9kYbE6UiaiaA/640?wx_fmt=png&from=appmsg)

TVS的功率选型

a. 估算实际TVS需要承受的热量

假设TVS工作在最大钳位电压，流过的电流为保险管的跳闸电流：

Qact=P\*t=U\*I\*t=Vc\*I trip\*Tptc=9.2V\*8\*0.02S=1.472J

b. 估算实际TVS的实际功率

由于厂家给出的TVS测试的功率都是在1us的脉冲宽度下测量的，因此需要将上述的估算的热量折算为1uS时对应的TVS的功率。

Ptvs＞Qact/1us=1.472J/1us=1472W

换算成峰值电流为：Ipp=P/Vc=1472W/9.2V=160A

因此，最终TVS选择Vc=9.2V，Ipp=163的SMCJ5.0A。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMbppPUldHn0jUYkVAKeVwtwBhU9xdHlicdmzIPJOWibwcOhZwkX1gXFHg/640?wx_fmt=png&from=appmsg)

有的朋友认为上述的计算过程没有降额，实际上上述的计算过程基本都是按照极端的情况，忽略了PTC随着温度升高的电阻指数型增加，PTC上的电阻会分担很大一部分电压，到后期PTC濒临断路，TVS的承受压降几乎为零。因此不但不用降额，甚至TVS的功率可以选择乘以实际计算的0.5~0.8系数。

1.4、总结

TVS用于过压保护存在两个局限性：小信号和低速。

(1) 小信号问题

小信号比较好理解，我们电路用的是正常电流0.2A的PTC，但是选用的是160A的TVS，比例接近800倍，不可想象，如果用一个2A的PTC电源端口，TVS的功率需要超过15KW，售价接近10元，这个成本几乎是没人能接受的。

由于PTC是自恢复，故障去除后又可以正常工作，避免了频繁更换的烦恼，但是PTC的跳闸时间较长，同等是0.2A的玻封保险管，电路达到8A的时候，几乎是10ms以内就可以跳闸，而PTC最短是200ms，这就导致了TVS的功率必须选得更大，以坚持到PTC跳闸（PTC要比TVS先失效才能起保护作用）。

(2) 低速的问题

一般的TVS的结电容为几十pF到数百pF，同功率等级，TVS电压越低，结电容越大，在小信号端口使用的功率TVS，除非是低电容的TVS，常规的功率TVS结电容都会在几十pF，因此小信号的速率不能过高，最好不要超过1Mbps。

(3) 精确度问题

上文提到的计算过程基本都是估算的，这是因为TVS和PTC属于电压和电流敏感型器件，失效模式都是热失效，细心的朋友会发现，厂家的TVS手册提供的电压、电流、温度等关系，都是给出一个大概的曲线图，都没有给出精确的计算公式。

本文计算时虽然使用了精确的公式，但是都是极端情况下的，实际选用的TVS可以比计算值乘以系数0.5~0.8问题都不大，具体以实物测试为准。例如上例计算选择160A的TVS，实测使用100A的也能满足要求。

2、可靠高效电路

简单的过压保护电路一般加个TVS可以实现，当外部有瞬间高能量冲击时候它能够把这股能量抑制下来，虽然功率高，上千W都可以，但是维持抑制的时间很短很短，万一器件损坏或者长时间工作电压高于正常工作电压的时候，就力不从心了。

所以最好的办法是设计一个智能电路了，如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjc3Xrq8icMu5YF3ZyoUbvUMGP0StBsyrAWbpWaDoVe7FFkcmWDsIHic2AV6kuakic9rLDzIXdiaHDdDw/640?wx_fmt=png&from=appmsg)

Vin正常输入电压时，稳压管没有反向击穿，R3，R4电流基本为0。PNP三极管的Vbe=0，即PNP三极管不导通。PMOS管Q4的Vgs由电阻R5，R6分压决定，PMOS管导通，即电源正常工作。

当Vin输入大于正常输入电压，此时Vin>Vbr，稳压管被击穿，其上电压为Vbr。PNP三极管Q1导通，VCE≈0，即PMOS管的Vgs≈0，PMOS管不导通，电路断路，即实现了过压保护。

若精度要求高，当然也可选用电压检测IC，实现电压监测。

原文链接：https://blog.csdn.net/m0\_38106923/article/details/109255843

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。