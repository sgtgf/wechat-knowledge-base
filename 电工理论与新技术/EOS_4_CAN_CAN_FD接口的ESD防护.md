# EOS-4：CAN/CAN FD接口的ESD防护


> 原文地址: [https://mp.weixin.qq.com/s/v98JKCCOh8LCuuR5bIJ84A](https://mp.weixin.qq.com/s/v98JKCCOh8LCuuR5bIJ84A)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJSMXd94ND9uoEfaEwpZHpXZOOOEYpzC13BzJpQp8E2ziaECN7P3aVVIw/640?wx_fmt=png)

____**★★★**______EOS-4---CAN/CAN FD______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：ESD可能发生在任何有外露连接器的系统上，包括CAN总线接口，通常这些连接器在汽车装配和维护时外露。例如在装配一辆汽车时，需要将电缆布线与汽车中的控制模块相连，这样当它们穿过工厂时，这些模块上可能累积过量的电荷，在将这些电缆与装有CAN收发器的控制模块相连时，过量的电荷会从电缆流入模块，然后进入CAN收发器。根据工厂的环境条件和处理电缆布线的方式，这些放电可能高达30kV，并永久地损坏CAN收发器，导致车辆无法操作，只要在系统中处理电缆布线，就有发生ESD的风险。

_____________________€1.CAN/CAN FD基础_____________________

_CAN_

控制器局域网 (CAN) 是许多汽车应用中广泛使用的通信协议，它是一个双线差分通信接口，通常使用双线、双绞线电缆来传输和接收串行数据，其物理层根据ISO 11898-2标准定义。物理层包含CAN收发器和双绞线，CAN收发器在网络中的协议控制器和物理总线线路之间提供物理链路，双绞线将所有的CAN节点连接在一起。连接CAN收发器和电缆的两条线路被称为CANH和CANL，CANL是低CAN总线线路，在普通运行模式下，显性态的值约为1.4V，隐性态的值为5V。在低功率模式下，CANL的电压等于电池电压。CANH是高CAN总线线路，在典型运行模式下，显性态的值约为3.6V，隐性态的值以及低功率模式下的值为0V。另外，还建议用一个终端电阻来端接CANH和CANL线路，以避免信号反射和高频噪声。

高速CAN（ISO 11898的第2、5和6部分）指定传输速率最高为1Mbit/s，低速容错CAN（ISO 11898的第3部分）指定速率最高为500Kbit/s。容错通常意味着，在错误情况下，收发器可从差分接收和发送能力切换为单线发射器和/或接收器，这意味着最大单端（容错）总线电压为+12V，差分总线电压为−12V。

_CAN FD_

由于需要传输和接收更多数据，汽车网络中使用的ECU也越来越多，因此限制为1 Mbit/s的传统CAN网络不足以适应未来需求。CAN FD是CAN物理层的更新，主要区别在于灵活的数据速率，最高可达10Mbit/s，2Mbit/s是典型的数据传输速率限制，适用于不需要更高数据速率的许多应用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2b2fllnEIDZScJicsu0vPhoKeCfaP24InJOZJ0s9q3r520MpRdS6Lb8jA/640?wx_fmt=png)

**_图4-1：CAN系统架构，带有单个设备来保护CAN节点_**

如同任何其他外露连接器接口，CAN/CAN FD接口会发生如静电放电等高压瞬变事件，在CAN总线连接器上安装ESD保护二极管，外部钳位电路可应用于CANH和CANL线路，保护两条CAN总线线路免受ESD及其他瞬变现象造成的损坏，以扩展网络的ESD耐受性。不仅能够保护CAN收发器正常通信，还能够保护所有下游和相邻系统免受ESD耦合能量的影响。

Tips：

CAN协议可支持不同的速度，具体包括：

1#：低速 (LS CAN)：高达125kbps

2#：高速 (HS CAN)：高达1Mbps

3#：灵活数据速率 (CAN FD)：高达10Mbps

4#：具有信号改善功能的 CAN (CAN SIC)：高达8Mbps

5#：CAN XL：高达10-20Mbps（尚未发布）

_____________________€2.ESD保护要求_____________________

许多CAN收发器具有内置的ESD保护单元，但是为了减小芯片尺寸，它们大多数只能保护到8kV。根据不同环境，某些ESD冲击可能高达30kV，因此需要使用外部ESD保护二极管来提高系统级的ESD性能，以下是在选择正确的ESD保护二极管时需要考虑的主要事项和参数：

1#：工作电压 (Vrwm) 和极性

二极管的Vrwm 取决于使用它们的场景，在理想条件下，CAN总线电压电平在CANH的Vcc（5V或3.3V）和CANL的0V之间摆动，但是在车辆中有一种取决于电池电压的共模电压。小型车辆使用12V电池，大型车辆使用24V电池。除了共模电压外，如果汽车电池几乎没有电量，还会出现不正常的借电启动风险。要正确地借电启动车辆，需将另一辆车的电池与无电电池并连。不了解这点的人可能会将两个电池串连，将汽车的整体电压加倍。在12V电池的情况下，需要使用24V ESD二极管，以确保在这种串联借电启动的情况下，它不会烧掉。在使用由两块12V单元组成的24V电池时，需要使用一个36V二极管，因为这两个电池单元将分别充电，考虑到线路故障和误接线，所有二极管都需要是双向二极管。

此外，由于CAN网络可能短路接至电压源，例如汽车电池，因此CANL和CANH线路上的ESD保护器件必须能够耐受更高电压电平。在快速启动条件下，或者如果有两个12V电池串联，这意味着至少需要2×12V=24V的截止电压VRWM。

2#：IEC 61000-4-2等级

IEC 61000-4-2标准定义了模拟实际ESD冲击的波形，与模拟受控环境中ESD事件的人体放电模型(HBM) 和充电器件模型 (CDM) 等波形不同，某些环境因素（比如湿度和温度）会使ESD冲击更加剧烈，建议至少使用最小接触等级为15kV的ESD二极管。

3#：ISO 10605等级

ISO 10605标准定义了一种模拟汽车环境中实际ESD冲击的波形，此波形定义了许多不同的电容和电阻组合，与只需要150pF/330Ω的IEC 61000-4-2不同，这些组合的最大强度为330pF/330Ω，这比IEC61000-4-2波形更加剧烈。要在严酷的汽车环境中经受住ESD冲击，建议ESD二极管的最小接触等级为15kV。

4#：电容

ESD二极管应具有低电容，以尽可能减少信号衰减，二极管最大允许结电容可能因信号速度（LS CAN与CAN FD）、收发器电容、网络规模和CANH、CANL线路上的其他器件（如滤波电容器）而异，通常建议将二极管电容保持在15pF以下，以尽可能提高系统的总电容预算。

5#：钳位电压VCL

钳位电压要求可能因使用的CAN收发器而异，钳位电压VCL应当低于CANH和CANL引脚的绝对最大等级耐压值。

6#：封装

对于CAN应用，许多系统需要对其电路板进行自动光学检查，以确认所有器件都已正确焊接，考虑到这一点，建议对ESD二极管使用引线式封装，如SOT-23和SC70。

_____________________€3.ESD保护实例_____________________

将ESD2CAN24-Q1与TCAN1042V-Q1 CAN收发器配对使用，演示了其如何在12V汽车环境中提供系统级ESD抗扰能力。本实验中使用了两个电路板：一个电路板只有 TCAN1042V-Q1，另一个电路板同时装有ESD2CAN24-Q1和TCAN1042V-Q1。  

为测量信号完整性，两个电路板都采用5V电源，并在TXD引脚上施加500kHz (1Mbps) 的数字信号，来模拟HS CAN环境。将一个示波器连接到CANH（线路 1）、CANL（线路 2）、TXD（线路 3）和RXD（线路4），以观察结果。如**_图4-2_**和**_图 4-3_**中的结果所示，ESD2CAN24-Q1二极管根本不会劣化CANH和CANL信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSziaGlsHExXXCkprvMM0WyibbicCRB8UiaT4lQWTiawHegCzFRXNNZeKMibp9hyasFRs2WQrh5I0VPWl2w/640?wx_fmt=png)

**_图4-2：无二极管_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSRg2Ne8l25VKXUqwA6WjWc3dicEkOMdT5M6cNdew0KVKztALUjAXZFmIiacZDNJ7GmMflXlszTEIrw/640?wx_fmt=png)

**_图4-3：有ESD二极管_**

为测量系统级ESD抗扰能力，两个电路板的CANH和CANL引脚都受到了±30kV ISO 10605接触脉冲的冲击。因为TCAN1042V-Q1额定只能承受8kV ISO 10605脉冲，所以没有二极管的系统出现了故障，采用ESD2CAN24-Q1的系统则经受住了冲击，因为ESD2CAN24-Q1将脉冲限制在收发器可以承受的足够低的电压水平内。

_____________________€4.总结_____________________

为了确保稳健的系统级保护，满足汽车在各类环境中正常运行，CAN总线这种接口需要有非常强大的ESD保护解决方案，要确保系统不仅不会出现高压瞬变，而且要尽可能减少电容，以实现不受约束的信号传输，CAN和CAN FD推荐**_表4-1_**和**_表4-2_**参数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQOSc1aQ5LR7SxgURva20wfdkiczPVicNKYOEslsKknhlSia3CndRRll88LDLyjgBEgaU9anyfUAPhQg/640?wx_fmt=png)

**_表4-1：LIN总线ESD/TVS diode选型参数参考_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQOSc1aQ5LR7SxgURva20wfPnt4ia2sHIW6P9WskicXAicohmv9ibl4owOmaPQgdmiaGmIOxkg7dJBQJtA/640?wx_fmt=png)**_表4-2：LIN总线ESD/TVS diode选型参数参考_**

传送门：[EOS-1：EOS的含义与模型](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485635&idx=1&sn=cea695ae1cad14b52042468175fea9ca&chksm=c335425cf442cb4a42c839f0c4cb42f1b7e132e2449f1d0388b58353c5c5cf6ade2a0c8ea002&scene=21#wechat_redirect)

传送门：[EOS-2：TVS管的保护原理和选型要点](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493418&idx=1&sn=9ffa42af30d59afa9b30e1f3a524b66b&chksm=c336adb5f44124a356bb45c58753382c46d625fbe21efce75f6d407797ed0f565979e4f2f0af&scene=21#wechat_redirect)