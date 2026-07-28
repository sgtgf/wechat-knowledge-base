# RF devices-12：平衡器/巴伦器


> 原文地址: [https://mp.weixin.qq.com/s/Jk94chdlARpH8Nl4DipAxg](https://mp.weixin.qq.com/s/Jk94chdlARpH8Nl4DipAxg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTVl5ibq0dC5sBwiaIgia973hNBiarpl2FypHQFCJPgSNmLIwLucicLDiaQZHgyzryJxLVP2m4OoSD2ns2Q/640?wx_fmt=png&from=appmsg)

____**★★★**______Balun-1---巴伦______**★★★**____

引言：在天线领域，除了常用的单端天线，还有一类偶极天线，偶极天线属于平衡型天线，例如双极天线，偶极子，双锥，八木天线。天线的馈电线一般都是同轴电缆，属不平衡传输线（单端），为了实现传输线和平衡型天线的完美连接，就需要使用平衡器/巴伦器将射频单端信号转换为差分信号。

巴伦是平衡不平衡转换器（Balun）的音译，由Balanced和Unbalanced组成，其中Balanced代表差分结构，而Unbalanced代表是单端结构，所以巴伦电路可以在差分信号与单端信号之间互相转换，将不平衡信号(Unbalance)转换为平衡信号(Balance)，或进行逆向转换，同时还可对阻抗值进行转换。

___€1.平衡与不平衡___

平衡线路由电位幅度相等且相位相反的导体构成，如**_图12-1_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSPiaETvp6HUMng9ibSrxjicj2u89E1ktannrZlFDvFDmRpF5MWMsgSbRibFSP4xPpNLVO7YlyFCBbXKg/640?wx_fmt=png&from=appmsg)

**_图12-1：平衡线路传输_**

在_**图12-2**_同轴电缆内部，由于内导体与屏蔽层内侧的电流所产生的电场局限于此两者之间的空间内，因此该两电流幅度相等且相位相反。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSPiaETvp6HUMng9ibSrxjicj2yeL9ibIFHAWlicPH8lowZAjy6E3OxCXDQNRQTnVdDHqtENKJsnHpKQmg/640?wx_fmt=png&from=appmsg)

**_图12-2：不平衡线路传输_**

由于同轴电缆具有对称的物理结构，内部两导体上的电位幅度相等且相位相反，屏蔽    结构本身产生的辐射极小。趋肤效应使屏蔽层外侧产生另一电流，当该电流较大时，可使得作为馈电线的同轴电缆成为天线，向外辐射强度与电流大小成正比的电磁场。在一些情况下，例如直连平衡天线，可破坏其两导体内的电流平衡（即破坏“幅度相等，相位相反”这一状态），该馈电线内部也将如屏蔽层外侧的电流一样产生较大电磁辐射。这一不平衡现象将导致方向图扭曲，干扰以及损耗。

___€2.为什么不平衡需要转平衡___

偶极天线属平衡型天线，而同轴电缆属不平衡传输线，若将RF同轴电缆或者微带线直接连接平衡天线，则同轴电缆的外皮就有高频电流（同轴电缆传输原理，高频电流应在电缆内部流动，外皮是屏蔽层，是没有电流的）流过，外皮有高频电流流过势必有辐射分量，甚至影响天线的极化方向（水平偶极子天线，竖直的RF线外层有电流，会影响水平极化的纯度）。因此，就要在天线和电缆之间加入平衡不平衡转换器把流入电缆屏蔽层外部的电流Iz扼制掉，也就是说把从振子流过电缆屏蔽层外皮的高频电流截断。巴伦的设计目的正是在于解决此类不平衡线路导致的问题——巴伦可在电流以相反相位传输的平衡（或差分）传输线与返回电流经地下传输的不平衡（或单端）传输线之间转换。本质是将内部感生的差分信号适当导引出来，和芯线上的信号一起组成一对平衡信号输出。

1#：高频开路法，在电缆屏蔽层外皮四分之一波长处接一个四分之一波长的套筒（等于效四分之一波长的开路线），因四分之一波长开路线对该频率视为开路，达到截断高频电流的作用，这种方法工作带宽窄，频率低时四分之一波长套筒就显得很长，适合大功率高频率使用。

2#：抵消法，使流入的电流大小相等方向相反而互相抵消，应用较多的用磁环三线绕的平衡不平衡转换器就属这种，这种频带较宽，使用但大功率时受磁环磁饱和的限制，适合低频率小功率使用。

3#：抑制法，振子经过一高频扼流圈接电缆屏蔽层外皮，阻止高频电流流向电缆屏蔽层外皮，此法比较简单，就是把电缆绕十圈左右，绕在磁环上更好，空心也ok，一般是频率低绕多几圈，频率高小绕几圈，但抑制效果没有前述几种好，因此前面几种多用于专业应用，这种业余应用较多。

___€3.Balun的特性___

巴伦的两个最主要的特性即：

1#：平衡性，即两个平衡输出（一个为反相180°输出，另一个为非反相输出）与“功率水平相等，相位相差180°”这一理想状态的接近程度。两个输出之间的相位角度差与180°的偏离程度称为巴伦的相位不平衡度，理想巴伦的两个输出幅度相等，相位相反（差分or差动）：在频域中，两个输出之间具有180°的相位偏移，在时域中，一个平衡输出的电压为另一平衡输出的负值。此外，两条线路当中的一条的导体须明确接地。

2#：阻抗变换，巴伦的实质是传输线变压器，根据天线的输入阻抗，设计绕法，可实现n2:m2的阻抗变换，常见有1:4、1:9。

_LC Balun_

使用了低温共烧陶瓷LTCC的巴伦器拥有多样频率种类、形状尺寸、端子结构、规格值等，针对大功率场景，还有分立式的LC巴伦，如**_图12-3_**所示传输线变压器式：采用传输线绕在磁芯上的结构，通过控制传输线的长度、匝数和磁芯的特性，来实现平衡---不平衡转换和阻抗变换功能，具有宽带、大功率处理能力的特点。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTVl5ibq0dC5sBwiaIgia973hNgnTicGjNsjkfPcHbxL6UBt9qu8SM9HY2YN57yfpGTRC5FFic60qkmbJg/640?wx_fmt=png&from=appmsg)

**_图12-3：分立式SMT LC巴伦_**

LC巴伦设计本质上是一个电桥，称为格子形式巴伦，电路中包含两个电容两个电感，分别产生±90°相移，下面**_图12-4_**中是LC巴伦的电路示意图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQdTKESIFciavdyIDLGJBJFicGnle6nibwKUhIVicq9FXYfNoibDMSOMpy9Vo5lvdr4to76Sduslf1S5dQ/640?wx_fmt=png&from=appmsg)

**_图12-4：LC集总器件巴伦电路原理图_**

在工作频率时，满足：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQdTKESIFciavdyIDLGJBJFic1RmIbObjEtDPzrdYX4VDa8JPn8xe5PJFSBo2bOKxlK7Up5BTyGJKOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQdTKESIFciavdyIDLGJBJFicBc0t7dCmh9FRSPVCia6xmeRu4Rnb0vXSmpeE1G9pAFvhFfEWicD3vK7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQdTKESIFciavdyIDLGJBJFic04YRCvUm56E2ARfCZ8LsC3v4Lk7mNGWz97VmDTAiaIzWicuZWc0emHKA/640?wx_fmt=png&from=appmsg)

设计LC巴伦时要确保工作频率远远低于电容电感的自身谐振频率，并考虑贴片电容。上述电路主要用在推挽放大器的输出端，推挽功放提供平衡信号我们希望变成不平衡的信号输出，通常还用到螺旋绕线形式的巴伦，在**_图12-5_**中给出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6Bn4QFD2gdgqPa6VrGJHxy5C05kx8cqTeuTnsICZxRExECYeFdUn55ibg/640?wx_fmt=png&from=appmsg)

**_图12-5：用于推挽式输出端的绕线巴伦提供平衡不平衡转换_**

然而，用之前表述的集总器件巴伦实现芯片级的绕线巴伦更为方便，如**_图12-6_**所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6BIhWZiauCHbJXa2Z5CJkyg4qSIiaMbu5d8sbdm3DOevBwnOBiaOzxia1IYg/640?wx_fmt=png&from=appmsg)**_图12-6：集总器件代替绕线变压器实现平衡不平衡转换_**

_传输线Balun_

传输线巴伦可以通过λ/4传输线实现或者**_图12-7_**中所示的同轴线实现。

1#：1:1同轴巴伦

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQdTKESIFciavdyIDLGJBJFicuHice0uT2oqpeJepulYqt9miahicsXGfInnLiaVA7v8ic3dRk6hQRw8b0vg/640?wx_fmt=png&from=appmsg)

**_图12-7：四分之一波长同轴线实现的同轴巴伦，1:1阻抗传输_**

如**_图12-8_**四分之一波长短路棒巴伦，A点振子的左臂与同轴电缆外导体(屏蔽层)连接，B点振子右臂与同轴电缆内导体(芯线)、λ/4波长短路棒上端连接，λ/4波长短路棒下端则通过金属短路环和同轴电缆外导体(屏蔽层)连接。从图中可以看出，从A点到B点的距离为两个1/4波长，即λ/4+λ/4=λ/2，所以，同轴电缆芯线的信号从B点传到到A点，正好走了1/2波程，相位正好相差180度，就把同轴电缆的不对称变成对称。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6B64QbKt55Uum3NItiaUlr6Ricr9ykdlMKDTbO4j4XBGBoFcHCAytdDRWg/640?wx_fmt=png&from=appmsg)

**_图12-8：1/4波长金属短路棒巴伦实现巴伦效果_**

如果需要阻抗变换为1:4，可以用**_图12-9_**中所示巴伦形式。

2#：1:4同轴巴伦

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQdTKESIFciavdyIDLGJBJFicYQtlEh4NbQfbk87GMOF4A1embt9fqRVo0BULiaIyy8x2BAibCbjHVD2g/640?wx_fmt=png&from=appmsg)

**_图12-9：四分之一波长实现的同轴巴伦，实现1:4阻抗变换_**

_微带线Balun_

利用微带线的特殊布局和尺寸设计，在PCB上实现平衡---不平衡转换，具有体积小、易于集成的优点，适用于微波集成电路和小型化射频设备 。

1#：微带线

微带印刷巴伦有很多种形式，优势是价格低廉，可以印刷在PCB上或者微波集成电路介质板上。一方面微带巴伦尺寸相当大，尤其是在低频RF频段，小的耦合线常用在微波频段带宽可以达到10-20%。最简单的印刷式巴伦是耦合线巴伦，也称作平行线巴伦，如**_图12-10_**所示。用中心频率的四分之一波长微带线构成，带宽可以达到一个倍频，提供足够高的微带线之间的耦合，但实际中，**_图12-10_**的单边耦合巴伦并不常用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6BDVic5JXmagzFSKpRic8QgvPHkCpbibicdwZUzGSia5CvSD56XQeb9ZpEuWg/640?wx_fmt=png&from=appmsg)

**_图12-10：单一耦合线巴伦_**

更实际的情况是用**_图12-11_**中的多耦合微带线，或者**_图12-12_**中多层介质板以得到宽带耦合拓扑结构，宽带巴伦通常涉及到平行的平面巴伦。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6B0OzOGMXCCJbz8BEMdbQ6pVDVja445V8TxmS5Quz58iaTt7VNw6nH1vQ/640?wx_fmt=png&from=appmsg)

**_图12-11：多线耦合巴伦_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6Btc7IrNlzGXhJCB6ibFU710SjWOcrmsKAsjl3o6rQqRPjwIDX99mRhfA/640?wx_fmt=png&from=appmsg)

**_图12-12：宽带耦合结构耦合线巴伦_**

平行双线巴伦的一种改进版是印刷的“Marchand巴伦”，这种巴伦源于同轴巴伦，1944由Nathan Marchand提出，在**_图12-13_**中给出了印刷形式的Marchand巴伦最简单的形式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6BJOmsxHAFBT96BG2eINQ5C0OJibw0mBAAkvIj1KPak4flI2pB5LlB0FQ/640?wx_fmt=png&from=appmsg)

**_图12-13：印刷Marchand巴伦_**

最后，还可以用微带线技术实现LC形式的巴伦，如**_图12-14_**所示，将电容电感量用微带线来表示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSy0Kx7UsT0kbUlhdwLBf6B9ZlGQzmQETmzEpQLUTxm001yFGicicYne5sC0GQeJqL18n0tqaHSnFzw/640?wx_fmt=png&from=appmsg)

**_图12-14：用微带线等效电容电感的LC巴伦_**

___€4.Balun的性能评估___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTVl5ibq0dC5sBwiaIgia973hNjJLBN3ia6TwBSrZpicQEdHy0qLvmn0F9PB2DV6EbW3sno6eEKibTQ1sXg/640?wx_fmt=png&from=appmsg)___

**_图12-15：LC巴伦的性能参数实例_**

1#：宽带特性需求，为满足多种射频应用场景，常需要有较宽的工作带宽，以覆盖不同频率的信号传输要求，减少在不同频率下的性能波动。

2#：低插入损耗，在射频信号传输中，为保证信号强度和质量，要求插入损耗尽可能低，一般在几dB以下，以提高信号传输效率。

3#：高回波损耗，为实现良好的信号匹配，减少反射，回波损耗通常要求较高，一般在10dB以上，确保信号能有效传输到负载而不被反射回来。

4#：功率容量：是指巴伦器能够承受的最大输入功率，超过这个功率，巴伦器可能会出现性能下降甚至损坏。

5#：相位平衡度：表示巴伦器输出的平衡信号之间的相位差一致性，相位平衡度越高，信号的质量和稳定性越好。

___€5.Balun的应用___

### 1#：天线馈电系统：用于连接平衡天线（如偶极子天线）和不平衡的传输线（如同轴电缆），使天线能高效接收和发射射频信号，避免因不平衡连接导致的信号损失和辐射干扰。

### 2#：射频电路匹配：在射频放大器、滤波器等电路中，用于实现不同阻抗的电路元件之间的匹配，提高功率传输效率，降低信号反射，改善电路的性能和稳定性。

### 3#：测试测量设备：在射频信号发生器、频谱分析仪等测试仪器中，作为接口器件，用于连接不同类型的测试端口，确保测试信号的准确传输和测量的准确性。