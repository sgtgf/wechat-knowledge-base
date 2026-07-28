# EMC整改好难？理论+案例给你讲透了！

原创 硬件笔记本 2024-03-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/G6M5V5lIOOrfsJoEscCt\_w](https://mp.weixin.qq.com/s/G6M5V5lIOOrfsJoEscCt_w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

**前言**  

辐射这东西，看不见摸不着，整改还按小时算，一不小心几万块就没了。不得不说，EMC整改，真难。本文主要分享理论+实际案例，文章篇幅较长，建议先收藏再阅读。

  

## 1\. EMI源头是什么？

造成EMI问题的辐射源有两类：交变电场（高阻），交变磁场（低阻）。非隔离的DC/DC转换器具有阻抗很低的节点和环路（远低于自由空间的阻抗377Ω，此值为真空磁导率µ和真空中的光速C的乘积，也被称为自由空间的本质阻抗——译注），因而Buck架构DC/DC转换器中主要的辐射源通常是磁场。

磁场辐射是由小型电流环中的高频电流形成的。电流环所生成的高频磁场会在离开环路大约0.16λ以后逐渐转换为电磁场，由此形成的场强大约为 ：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHLyDHJLSEUDgZpI4LiaCBaK35ial9WKXAA6qHBzxM1VBmyNlDLQRFebjA/640?wx_fmt=png&wxfrom=13&tp=wxpic)其中，f是信号的频率，单位为Hz；A是电流环路的面积，单位为m²；I是电流环中的电流幅值，单位为A；R是测量点距离环路的距离，单位为m。

举例而言，一个1cm²的电流环，其中的电流为1mA，电流变化频率为100MHz，则距离此电流环3m处的场强为4.4µV/m，或说是12.9dBµV。

下图显示了一个流过1mA电流的1cm²电流环所形成的辐射强度与电流变化频率之间的关系，图中绿线是标准容许的3m距离上的辐射强度阈值。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0sFrlBkXgbHdV8I0zjdLsmdh6qGu8aeUvLKriaoLgg0YJ7Crm0aWtsiaw/640?wx_fmt=png&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

由图可见，由1mA电流在1cm²环路中所形成的辐射并不容易超出规格的限制。现实中造成辐射超标的原因常常是应该极小化的环路变成了大的环路，或者是附加在线路上的导线形成了多余的辐射。这些大回路或导线所形成的天线效应将在总的辐射中发挥主要的作用。

## 2\. BUCK电路的电流回路

Buck架构DC/DC转换器中存在两个电流发生剧烈变化的主回路 ：

当上桥MOSFET Q1导通的时候，电流从电源流出，经Q1和L1后进入输出电容和负载，再经地线回流至电源输入端。在此过程中，电流中的交变成分会流过输入电容和输出电容。这里所说的电流路径如图2中的红线所示，它被标注为I1。

当Q1截止以后，电感电流还会继续保持原方向流动，而同步整流开关MOSFET Q2将在此时导通，这时的电流经Q2、L1、输出电容流动并经地线回流至Q2，其回路如图2中蓝线所示，它被标注为I2。

电流I1和I2都是不连续的，这意味着它们在发生切换的时候都存在陡峭的上升沿和下降沿，这些陡峭的上升沿和下降沿具有极短的上升和下降时间，因而存在很高的电流变化速度dI/dt，其中就必然存在很多高频成分。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icIWnTzBC3mgVPictsoquam85wSPdGRzV6obyXndZgXwQTmMxMommzCKmN93EjKu4oPUgaFJmf4CEkA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

在上面所述的回路中，电流环I1和I2共同共享了自开关节点→电感→输出电容→地→Q2的源极这一段路径。I1和I2合成起来后就形成了一个相对平缓、连续的锯齿状波形，由于其中不存在电流变化率dI/dt极高的边沿，其包含的高频成分就要少一些。

从电磁辐射的角度来看，图3中存在阴影的A1区域是存在高电流变化率dI/dt的回路部分，这个回路将生成最多的高频成分，因而在Buck转换器的EMI设计中是需要被重点考虑的最关键部分。图中A2区域的电流变化率dI/dt就没有A1区域的高，因而生成的高频噪声也就比较少。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E04sqlQgWUUTcvzORE1V8SF7qxH34c3e1AbhoVMl24L8vYx09dnibDLpw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

当进行Buck转换器的PCB布局设计时，A1区域的面积就应当被设计得尽可能地小。关于这一点，可以参考第7章的PCB布局设计实战要点。

## 3\. 输入和输出的滤波处理

在理想状况下，输入、输出电容对于Buck转换器的开关电流来说都具有极低的阻抗。但在实际上，电容都存在ESR和ESL，它们都增加了电容的阻抗，并且导致上面出现额外的高频电压跌落。这种电压跌落将在电源供应线路上和负载连接电路上形成相应的电流变化，如下图。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icIWnTzBC3mgVPictsoquam85trpibaKVykpfkrtpmciauaTyY5DEAbdRwFjibEvlcSib9NTDEyaovdQIrw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

由于Buck转换器输入电流的不连续特性和实际为转换器供电的电源线通常都很长的缘故，输入回路A3所造成的辐射也可能是很可观的，并且可导致超出规格的传导辐射（在150kHz~30MHz频段），不能通过电磁兼容（EMC）的传导测试检验。

为了降低输入电容CIN造成的电压跌落，可在靠近Buck IC的地方放置多种不同尺寸的低ESR的MLCC电容，例如可将1206封装的2×10µF和0603或0402封装的22nF~100nF电容结合起来使用。为了降低输入回路的噪声，强烈建议在输入线上添加额外的LC滤波器。当使用纯电感作为L2时，就有必要添加电解电容C3以抑制电源输入端可能出现的振铃信号，确保输入电源的稳定。

为了对输出进行滤波，也要使用多种不同尺寸的MLCC电容作为输出电容Cout。小尺寸的0603或0402的22nF~100nF的电容可以很好地阻止源于开关切换节点的高频噪声经由电感L1的寄生电容耦合到输出端。额外增加的高频磁珠可防止输出回路变成有效的环形天线，但需要注意的是这方法可能使转换器的负载瞬态响应特性和负载调整特性变差。假如应用中的负载在这方面有严格要求，那就不要使用磁珠，可以直接将转换器尽可能地靠近负载，通过对铜箔的优化布置使环路的面积达到最小化。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icIWnTzBC3mgVPictsoquam856kZ8ibnVO3sw589tV2iaic8EyvdjPia55ScickXzGtia8aepgHPvSicic1sjNQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 4\. 降低转换器的开关切换速度

假如通过PCB布局和滤波设计的优化仍然不能让一个Buck转换电路的辐射水平低于需要的水平，那就只能在降低转换器的开关切换速度上想办法，这对降低其辐射水平是很有帮助的。

为了理解这能导致多大程度的改进，我们需要对不连续电流脉冲的高频成分进行一番探讨。图6左侧显示的是简化为梯形了的电流波形，其周期为TPERIOD，脉冲宽度为TW，脉冲上升/下降时间为TRISE。从频域来看此信号，其中含有基频成分和很多高次谐波成分，通过傅里叶分析可以知道这些高频成分的幅度和脉冲宽度、上升/下降时间之间的关系，这种关系被表现在下图的右侧。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0cy8Q7ialxP4t3EoWLDEeXicibTicJEO7dW8TnuavYKmfd0Z32BArO0uKlw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

上图中的频率值是基于一个具有800kHz频率的开关信号而得出的，该信号的脉冲宽度为320ns，具有10ns的上升/下降时间。

EMI辐射问题常常发生在50MHz~300MHz频段。通过增加上升和下降时间可将fR的位置向低频方向移动，而更高频率信号的强度将以40dB/dec的速度快速降低，从而改善其辐射状况。在低频段，较低的上升和下降速度所导致的改善是很有限的。

  

### 在自举电路上增加串联电阻

开关切换波形的上升时间取决于上桥MOSFET Q1的导通速度。Q1是受浮动驱动器驱动的，该驱动器的供电来自于自举电容Cboot。在集成化的Buck转换器中，Cboot由内部的稳压器进行供电，其电压通常为4V~5V。见下图左侧。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icIWnTzBC3mgVPictsoquam85duNPYInSL3ZVjJu1CicvYQgtYvRYywia1iaDEt38pibxC0YI1WKs0T69pA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

通过降低上桥MOSFET开关的导通速度可使Buck转换器开关波形和电流脉冲的上升时间增加，这可通过给Cboot增加一只串联电阻Rboot来实现，如上图所示。Rboot的取值与上桥MOSFET的尺寸有关，对于大多数应用来说，5~10Ω就足够了。对于较小的MOSFET，它们具有较高的Rdson，较大的Rboot值是容许的。在高占空比的应用中，太大的Rboot值可能导致Cboot充电不足，甚至可能导致电流检测电路的不稳定。另外，较低的MOSFET导通速度也将增加开关损耗，从而导致效率的下降。

在MOSFET外置的设计中，电阻可被串接到上桥MOSFET的栅极上，这就可以同时增加上桥的导通时间和截止时间。

当上桥MOSFET Q1被关断的时候，电感电流会对Q1的寄生输出电容进行充电，同时对Q2的寄生输出电容进行放电，直至开关切换节点电位变得低于地电位并使Q2的体二极管导通。因此，下降时间基本上是由电感峰值电流和开关节点上的总寄生电容所决定的。

下图显示出了一个常规设计中的Buck转换器IC中的寄生元件。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0Xoia2Gt6IPTDbUFsuLBEmWpUS8YFHpicqjud68qtoqdM2Fn5K7MKa60Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

这些寄生电容是由MOSFET的Coss和相对于基底之间的电容共同构成的，另外还有寄生电感存在于从IC引脚到晶圆内核之间的连接线上，这些寄生元件和PCB布局所导致的寄生电感与输入滤波电容上的ESL一起将导致开关切换波形上的高频振铃信号。当MOSFET Q1导通时，开关节点信号上升沿的振铃信号主要就由Q2的Coss和MOFET开关切换路径上的总寄生电感（LpVIN + LpGND+ LpLAYOUT + ESLCIN）导致。当MOFET Q1截止时，开关节点信号下降沿的振铃信号主要由Q1的Coss和下桥MOSFET源极到地之间的寄生电感（LpGND）导致。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E030Lia2bCRYxibFWk1QIshWTO7WDFoz5lwFApCb6Ba3b5ktAaCp356n7Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

上图显示了一个具有快速上升时间和下降时间的开关节点波形，其上升沿和下降沿都存在振铃信号。由于寄生电感中的储能等于½∙I2∙Lp，所以振铃信号的幅度将随负载电流的增加而增加。此信号的频率范围通常在200~400MHz之间，可导致高频EMI辐射。过度的振铃信号通常意味着较大的寄生电感，说明需要对PCB布局设计进行检查、修正，以便对环路较大或对VIN和/或地线路太窄的问题予以修正。元件的封装也会影响振铃状况，打线方式的封装会有比晶圆倒装方式的封装更大的寄生电感存在，因为邦定线的电感会大于焊点的电感，其表现就会更差一些。

  

### RC缓冲抑制电路

添加RC缓冲电路可有效地抑制振铃现象，同时会造成开关切换损耗的增加。

RC缓冲电路应当放置在紧靠开关节点和功率地处。在使用外部MOSFET开关的Buck转换器中，RC缓冲电路应当直接跨过下桥MOSFET的漏极和源极放置。下图示范了RC缓冲电路的放置位置。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icIWnTzBC3mgVPictsoquam85Ky7rla8csBgpaLsDFdZIl1vSaibpphBkIPqBiaibMgToEn7850lb69aTQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

缓冲电阻Rs的作用是对寄生LC振荡电路的振荡过程施加足够的抑制能力，其取值取决于意欲施加的抑制强度和L、C寄生元件的参数，可由下式予以确定 ：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHheHh5ibjPSzxkPS7EIeXM8kUV3f7dql4dVt4rnC1hH6TcfSqRj1WqDA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)其中，ξ是抑制因子。通常，ξ的取值在0.5（轻微抑制）到1（重度抑制）之间。寄生参数Lp和Cp的值通常是未知的，但可通过下述方法进行测量 ：

1.  在信号上升沿测量原始振铃信号的频率fRING。
    
2.  在开关节点和地之间增加一个小电容，这可让振铃信号的频率得到降低。持续增加电容，直至振铃信号的频率降低到原始振铃频率的50%。
    
3.  降低到50%的振铃信号频率意味着总谐振电容的大小是原始电容量的4倍。因此，原始电容Cp的值便是新增电容量的1/3。
    
4.  这样就能求得寄生电感Lp的值 ：
    

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHBxEVP48yCl2nzialS6cwSqyXNibgUkOHyzDYIclq8CTCgeKic3cCDcUwQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)RC缓冲电路中的串联电容Cs需要足够大，以便让抑制电阻能在电路谐振期间表现出稳定的谐振抑制效果。如果这个电容的值太大，它在每个开关周期中的充电和放电过程就会导致过大的功率消耗。所以，Cs的取值通常以电路寄生电容的值的3~4倍为宜。

除了可以对谐振产生抑制，RC平滑抑制电路还可以轻微地降低开关切换波形上升和下降的速度。除此以外，对平滑抑制电容的充电和放电过程还会导致开关状态变换期间出现额外的开关切换电流尖峰，这可在低频区域引起新的EMI问题。

当使用了RC平滑抑制电路以后，应当确保要对电路的总功率损失进行检查。转换器的效率是必然会下降的，这在开关切换工作频率很高和输入电压很高的时候表现尤甚。

  

### RL缓冲抑制电路

一种不容易想到的抑制开关回路振铃信号的方法是在谐振电路上增加一个串联的RL缓冲抑制电路，这种做法如下图所示。添加此电路的目的是要在谐振电路中引入少量的串联阻抗，但却足够提供部分抑制作用。基于开关切换电路的总阻抗总是很低的事实，抑制电阻Rs可以用得很小，大概是1Ω或是更小的量级。电感Ls的选择依据是能在比谐振频率低的频段提供很低的阻抗，实际上就是要在低频段上对抑制电阻提供短路作用。由于振铃信号的频率通常总是很高，需要使用的电感也就可以很小，大概就是几个nH的量级，甚至可用几个mm长的PCB铜箔路径代替，这样做并不会导致明显增加的环路面积。也有可能用很小的磁珠来替代这个电感，让它和Rs并联在一起。当这么做的时候，这个磁珠应在低于谐振频率的低频上具有很低的阻抗，同时还要具有足够的电流负载能力，以便能够承载输入端的有效电流。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0RKq4uT8gtjTD5ZJzYTJovQMjLiac3jeXB33Ze4YLCL9BibtAcia0LzajA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

RL缓冲抑制电路最好是被放置在紧靠功率级的输入节点上。RL抑制电路带来的一个不足是它会在高频区域为开关回路引入一个阻抗，当开关状态发生快速变换的时候，切换中的电流脉冲会在电阻Rs上形成一个短时的电压毛刺，从而在功率级的输入节点上也出现一个小小的毛刺。假如输入端的电压毛刺使电压变得太高或太低，功率级的开关切换或IC的工作就会受到影响。因此，当加入了RL缓冲抑制电路的时候，一定要在最大负载状态下对输入节点上的电压毛刺情况进行检查，避免由此可能带来的问题发生。

## 5\. 案例

本章将示范在Buck转换器的EMI设计中的不同方法所导致的影响。示范所使用的IC是RT7297CHZSP，一款800kHz工作频率、3A输出能力的电流模式Buck转换器，采用PSOP-8封装。测试中的电路工作在12V输入下，输出为3.3V/3A，测试所用电路显示在下图中。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0Fic9kvz6AWIwfYZgVibxo88V2HZiaLPl3ibOW1NCasYqzZiaZEzsuRZYPTA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

测试所用的板子有两个版本，一个具有完整的地铜箔层，一个没有。板上设置了多种可选配置，如LC输入滤波器，不同的输入电容放置位置，可选的Rboot、RC缓冲电路和输出端LC滤波器。具有这些不同选项的PCB设计显示在下图中。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E087SlsEX73AN16aweHgql1h3VCAbUbfcLfJvUf765DgsZaKqWDfDD0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

测试设备的配置如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0xxgolCLX9v5hOr4wwPkDNxPeMVOWrsPYPKJGkiaJYnlvMhcMVCp75iaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

当被测试对象被放在实验桌上时，其PCB上的电流回路和导线就会向周围环境辐射出高频能量，这些辐射信号又会自己找到路径返回到测试对象上，并以高频共模电流的形式出现在供电线上。这些供电线上的高频共模电流会和板上的电流结合在一起，可被用着辐射状况的指示信号。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0DHpA0l3kLgNO8ibZOb41F8eiaZ9xichPSojibgrFlibEVOdbPr87nImSWicg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

转换器的电源输入来自于三只串联的锂离子电池，电压大约为12V，这就使它们和实验室里的其他设备没有了直接联系。一只电解电容跨接在电池的引线上，这可消除电池电感可能导致的谐振问题。

转换器的负载是一只并联了10µF MLCC电容的1Ω电阻，这可为之提供3A的负载，同时对高频信号的阻抗又是极低的。

输入线靠电池一侧的接地端通过一只100Ω的电阻和实验台的地连接在一起，这就给整个电路提供了一个参考地，其阻抗很像EMC测试中的LISN网络。

  

  

### 输入电容的放置

实验1 ：将CIN放置在远离IC的地方。

下图中的PCB布局呈现了一种很差的输入电容放置方法，这将在切换回路中引入很大的寄生电感。（此布局中还有额外的间隙以增加回路的面积。）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0KZbuh0AEK7Y6HIRbsOQC8RWLPJCyMRvlKDMvFlUPFvQL7L99hnu8Dg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

我们首先通过测量输入线上的共模电流来对辐射噪声做一次常规的检查。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0KrQkPD2tY94PDGPMmCk3FbgKw3RV8GiayiamkIp3fFeYbuPlLpoTdUyQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

从上图右侧显示的波形可以看到，共模电流是出奇地大，而且在很宽的整个频段上都可看到。

  

我们可以用环形天线在PCB上方搜索辐射场以发现共模电流的源头所在。当环形天线移动到输入环路的上方时，示波器在低频至高达200MHz的频段上显示出巨大的辐射噪声，参见下图。

我们也同时看到开关切换波形上出现很高的过冲和振铃信号，这些信号实际上已经超过了IC的耐压规格。这些状况说明错误的输入电容放置位置可以导致很高的辐射和巨大的振铃信号。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTH5FaKKNeKj6dlv1ls1lkfH2QQo6PAicM5ooKNVKXX0LSq8wnK0iaskX9w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

假如将同样的测试在背面为地线层的板子上进行，我们将看到这种拥有地线层的大型CIN回路带来的辐射要远低于单面板上的结果，开关切换所带来的振铃信号也要低一些。参见下图。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHOOaiciaXYee1ic6tjGv9UnDld1ibnnBia3MZibAnLCjnQINZziaf35P4vdDrA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

大回路上的电流形成的高频磁场会在地线层里生成涡旋电流，由涡旋电流所形成的磁场与原磁场的方向是相反的，从而可以抵消一部分原磁场。地线层离回路越近，抵消的效果就越好。

  

  

实验2 ：将CIN靠近IC放置

我们继续使用单面PCB，并将CIN放置到靠近IC的地方，这样就形成了比较小的CIN回路。参见下图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0JJKXWIILaD7uNaaic4g7ePG7Dm7Bx2244sN2QDhymGq07lOcqydfpzw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

开关切换过程中的过冲和振铃信号的幅度都降低了大约50%，辐射的强度下降了大约10dB，频带宽度扩展到了300MHz。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHo7fgKr6dcZa8y2mXjNSTHiaLEmJs8ZNshWeKQtzuiapLYRez4sVejQ1g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

上述实验最重要的结论是确认了更好地放置CIN可以改善开关切换波形上的过冲和振铃信号的幅度，还能降低高频辐射。

  

在RT7297CHZSP中，芯片底部的散热焊盘是没有和晶圆内核连接在一起的，所以在PCB布局中将铜箔和散热焊盘连接在一起并不能缩短CIN回路。它的上桥MOSFET和下桥MOSFET通过多根邦定线连接到VIN和GND端子，因而可以通过这两个端子形成最短的回路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0cJ2oV7pjIww5SDSAQPY2ictziaQkuTu40ickIWPS4egXWo0BDvhqxpw4A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

实验3 ：直接在IC的VIN端子和GND端子之间增加额外的10nF小电容

下图显示出了电容的放置方法，现在的CIN回路就通过IC的引脚、内部的邦定线和0603规格的电容形成了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E09V4MGAVlR0qruMiaZdcqFXAeUoRf0fwL8obibGwUHUPtrNMWTibFOIvmg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

从实验结果来看，开关切换波形上的过冲实际上已经消失了，但还存在低频的振铃信号。

  

为了看清信号，测试天线也不得不再靠近PCB一些，其结果显示高频噪声已经消失，但在大约25MHz的地方出现了一个大的低频尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0LCVQiaUrgNfKtibUicUmjToGQIRdsmztWc43cep9q4YTshibI7sbx8uianQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

这种低频谐振常因不同谐振回路中的两只电容因并联而发生谐振所导致，这种问题常常发生在EMI问题解决过程中，其回路和谐振都需要被定位才能排除。在此案例中，谐振发生在10nF电容和4nH的寄生电感上（大约3mm的导体长度），它们形成了大约25MHz的谐振信号。此谐振回路由0603电容、IC引脚、邦定线和PCB铜箔路径构成，其长度大约为3mm。

解决这个问题的办法是在10nF小电容的旁边并联一个具有稍高ESR的22µF 1206电容。

采用经过优化了的CIN放置方法的PCB布局设计如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0OBRAzBXHiciagl5fOOniaLHmFjC6mgPmib15Pg4ZlHH6TN2icvIqcWmLiaGg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

采用了上述的方案以后，单面板上的开关切换波形上的过冲已经完全消失，经环形天线检测到的辐射噪声也很低，它在经过FFT运算后得到的波形几乎都在本底噪声水平上。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0ib3yfsKNN2NOGkja7vU3AejFKrhTWSsHf5ZmV0khqJdDwJ3nqTBwF9A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

假如我们在这个时候再用高频电流探头对输入线上的共模电流进行测量，我们将可看到共模噪声已经下降很多。与第一次测量的结果相比，某些频率上的差异多于30dB，说明整个板子的辐射水平已经很低了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0UdYtqBe6D6EnmAMvYH5aFJ2BuZKnP39v94K1iazd2aCFvmz47xAQzgA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

### 在电源输入线上滤波

电源输入线上的高频电流由差模电流和共模电流构成。对于共模电流，可以在PCB布局设计时将具有高电流变化率dI/dt的电流环最小化予以消减。而差模电流则有不同的来源，我们可以如图27那样将正、负两条线以不同方向穿过自制的电流探头的磁芯来进行测量。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0zbHneXkuD7Mk73Auw4hbRopPKlrvqXasuWBUiajiccJYm6tbfTFiccYqQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

我们要测量的差模电流是由Buck转换器的脉冲状输入电流在经过输入电容的时候由其ESR和PCB布局形成的ESL（假如存在的话）所导致的电压下沉出现在输入电容上而形成的，它最后呈现在电源输入线上成为差模电流。

通过增加输入电容可以降低差模电流，但更有效的做法是在输入线上加入一个小型的LC滤波器，如下图右侧所示的那样。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0iaqNibXuRqiahCM3KYWtjLQpgudxZHyu07ohWIFGfLmTicNYYjO8W1qvTg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0AmFItrMUaic1O0ezELVO8rQglsSGpyib5zBGQlPO7iacDZkImIvlicyQ5A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E01QsnLZlBm5nEbaNdic42tS5pibHAuVYTgqu5olQc88r3iaRgHNlCcq5IQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

正如从上图中看到的那样，添加磁珠 + 电容构成的滤波器可滤除除800kHz基波以外的所有高频成分，添加1µH电感 + 电容构成的滤波器可消除包含基波在内的所有差模噪声。

### 在输出线上滤波

当对输出端的差模信号进行测量时，我们能看到的高频成分会比较少，这是因为输出电流是连续的，电流变化率不高。然而，我们仍能在其中看到高达30MHz左右频率的低频噪声，这是由于转换器中电感上的电流纹波经过输出电容传递到了输出端成为输出端上的差模电流，毕竟这些电容也含有ESR和ESL嘛。通过在输出端添加额外的LC滤波器可以将大部分的差模信号滤除掉，这种滤波器可由磁珠和MLCC电容构成，其方法如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0YO31S0GAC0gs3QJtIib5U7D8FkWxqhqrRPFoReEtCIGgCiajxbaz18Pw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0Hjcx9rMRrDLqbwo8919sAibBwJ522sM2FVSAIKIhK9oNLA8hNia1gP7Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0fpqa32dkfLOArBBJf8nMTvxb0qwT9iaKcYn7HmEZHj0ShDXr1Iic2PPw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

经常发生的一件事情是某些电感的漏磁会耦合到输出端的回路上，这也会造成输出端差模电流的出现。

屏蔽电感的漏磁会比较低，其磁场信号不容易进入输出回路，但没有屏蔽或是半屏蔽的电感就完全不一样了。一旦遇到这样的状况，输出回路的面积就必须最小化以使其不容易将电感的漏磁耦合进去。

  

### 通过在自举电路中串联电阻和使用RC缓冲抑制电路消减振铃信号

在此实验中，我们使用双面PCB，输入电容的放置位置如上面的实验2一样，这样的配置可以在输入回路中引入比较明显的辐射。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0gW4RuBr2ia2QovLeCSibQkIoqaDjcQYykPib0uia0drQZSibBTR7JfCx1dg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

为了作为参照，首先在没有Rboot和RC缓冲抑制电路的情况下对输入线上的共模电流进行测试。

开关切换波形显示出5V的过冲，过冲信号的振荡频率为238MHz；输入线上的共模电流显示出明显的高频噪声。参考下图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0WS722yZs8bC3dcGVpNyqiaGfHtsa0T1Nibib74Rhib0SZ5SuCjrP3N47yQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

RT7297C使用了相对比较小的上桥MOSFET (110mΩ)，因而通过给自举电路串联小电阻的方法带来的影响也很小。实验发现，即使将Rboot加到20Ω也不能看到很明显的波形改变，下图所示的示波器图形将电阻为0Ω时的波形（灰色）和添加了33Ω串联电阻时的波形进行了对比，可以看出过冲信号幅度降到了3V。这种改变对共模电流的影响也很小，在这种简易的测量中几乎看不出来。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0ZkAnVhfVhtEr9cClFv7rcLDVIs8sxMC8P7GI6rsOVhmFD5MGAVPoXg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

下面确定RC缓冲抑制电路的值

振铃信号的原始频率fRING = 238MHz，添加220pF电容后，fRING变成114MHz，所以CP = 220pF/3 = 73pF。

LP可由公式算得，其结果为LP = 6.1nH。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHc0rwbfAgSbBUv2wvBZr1MzBY99wdurkmxK9iaia6SMgQibuqETIDREtRw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)RS可由公式进行计算。我们选择ξ = 0.5，于是RS = 9.1Ω，我们选择其为8.2Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdrbU1IibqGXPAYAp8vcEvTHJD7icHTVIkJ2PgRBCibJzZiavMNqicibG1NCl6cwILUER3GpdtMI0ibMyy1A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)CS应为4xCP，所以是330pF。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E005twJKI7nHECnVV4vBv3PqTM3Y2KlZhvAtRiaq16uicvrDPWm2NUIK1w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E05u37IInRJnzWKCyjppfnm1Tb0n5dRicSltawrAfRVWl70jVCoxQ3Wlg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

增加RC缓冲抑制电路在高频段可对共模电流带来下降5dB的影响。

上升沿干净无振铃

下降沿没有什么改变

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E02zuYhuAibbweFM6391TBvysjsbupkvUz5TuvNW3UXNfk74yibE3CD7CA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0iaG5f6yEp6WCNSShdQpFe5xwU4dm4EKZHfib1BP4luDKKhx4iaT8eYAzw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

由上图可见，Rboot对效率的影响比较小，但在负载很重的时候其影响会加大。

RC平滑抑制电路对效率的影响会比较大，特别是在轻载和中等负载的情况下，但最大也就1~2%，处于可以接受的范围。需要特别注意的是，当Buck转换器的工作频率很高和输入电压很高的时候，RC平滑抑制电路对效率的影响会很大。

## 6\. BUCK转换器PCB布局设计要点

做好Buck转换器PCB布局设计的关键是在一开始就要计划好关键元件的放置位置。

1.在噪声敏感的应用中，最好是选择小型封装的、电感很低的晶圆倒装芯片。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0hz0T5OYqaicJDiciaLd7vrLxZHy1ODf4ITEPBTH7hNKSc7z6LliaJFJqyw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

2.确定开关切换回路的VIN和GND节点位置，将不同尺寸的输入电容尽可能靠近这些节点，最小的电容靠节点的位置要最近。由于这个切换回路承载了很高的电流变化率dI/dt，因而需要尽可能地小。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0o8uNBZzb0lY3pzbUHsybzQADVeFy82pwR8DOibN6hGbzibCic0tStgUIw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

3.将输出电容地放在不与输入电容切换路径发生重叠的地方，避免高频噪声串入输出电压中。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0dsT7wQ2J5oVqgJWfz5HbtNoUibGtRKvCxGrPYslrd8JS70U9WnUjQWQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

开关切换节点和BOOT引脚含有很高的电压变化率dV/dt，可导致严重的电场辐射，因而其铜箔面积应当保持最小化，还要避开其它敏感电路。

4.转换器的小信号部分应当与大功率的开关切换部分分开，其地线应当位于干净无噪声的地方，千万不要将输入端的电流信号和输出端的纹波电流引入其中。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E07hBOlAtjLrUdFc7WVymsXIYnGZAicORzjZOhbR90TVgcvp6GwRA6S7g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

不要在关键回路上使用热阻焊盘，它们会引入多余的电感特性。

5.当使用地线层的时候，要尽力保持输入切换回路下面的地层的完整性。任何对这一区域地线层的切割都会降低地线层的有效性，即使是通过地线层的信号导通孔也会增加其阻抗。

6.导通孔可以被用于连接退藕电容和IC的地到地线层上，这可使回路最短化。但需要牢记的是导通孔的电感量大约在0.1~0.5nH之间，这会根据导通孔厚度和长度的不同而不同，它们可增加总的回路电感量。对于低阻抗的连接来说，使用多个导通孔是应该的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0woU7FySBzzu9YX0XhzMevuia4PE1bkADoCXlcQqZwLxuLBGsuiaWPftA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

在上面的例子中，通到地线层的附加导通孔对缩减CIN回路的长度没有帮助。但在另一个例子中，由于顶层的路径很长，通过导通孔来缩小回路面积就十分有效。

  

7.需要注意的是将地线层作为电流回流的路径会将大量噪声引入地线层，为此可将局部地线层独立出来，再通过一个噪声很低的点接入主地当中。

8.当地线层很靠近辐射回路的时候，其对回路的屏蔽效果会得到有效的加强。因此，在设计局多层PCB的时候，可将完整的地线层放在第二层，使其直接位于承载了大电流的顶层的下面。

9.非屏蔽电感会生成大量的漏磁，它们会进入其他回路和滤波元件之中。在噪声敏感的应用中应当使用半屏蔽或全屏蔽的电感，还要让敏感电路和回路远离电感。

## 7\. 你可以自制的简易EMI问题探测工具

测量电磁兼容性问题通常意味着你得拿着自己的产品原型跑到电磁兼容实验室去进行测试，那里通常有3m的无回声房间，还备有特别的使用天线和接收机的测量设备，测量的数据可显示出整个系统的最后结果，但在这样的地方并不总是能够容易地找到造成特定辐射问题的根本原因。

其实我们是有可能在实验室环境下对产品原型进行一些基本的EMI测试的，还可对系统的各个模块分别进行。这样的测试通常属于近场环境（测量距离 < 0.16λ），因而在测试电流回路的辐射状况时需要使用小型的环形天线来对高频磁场进行测量。你可以使用一段50Ω的同轴电缆自己制作小型的拥有电屏蔽的环形天线，这看起来并不是一件很难的事情，可参考下图的示意进行。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0CUEhyd27w1aPfJfSjURoGuQ27UacHqzcULppneyHYLFYVbzibv6V8xQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

这种环形天线可以被连接到频谱分析仪上，当你使它在PCB上方移动时，你就可以看到哪里会有比较强的高频磁场。你也可以把它连接到一台示波器上（使用50Ω的端子），示波器上就可以显示出相应区域的切换噪声水平。保持天线环和板子之间的相对位置和距离不变，对电路、PCB上的回路做出某些改变，你就可以知道噪声水平在增加或是减少。

由于电源线的辐射对EMI水平的影响很大，你也可以测量这些线上的高频电流。不是所有的电流探头都有足够的带宽可以凸显EMI问题，这可通过将几匝线圈穿过一个EMI铁芯以形成一个高频电流变压器的方法来解决。其做法与环型天线的做法差不多，但需要将环形线圈3次穿过铁芯。参见下图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0UcmN24WJWVDunltza2rO7NX2lNx611A5prAqAnck5a81Tic20zfuUaw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

现在将电缆穿过铁芯就可以对其中的高频电流进行测量了，电流变压器的输出可以接入频谱仪或是示波器（使用50Ω端口）。

为了将测试工具和测试对象隔离开，最好是在电缆上加一个共模线圈，这可通过将引入分析装置的电缆多次穿过一个扣合式的EMI铁芯来实现。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0RLcNDDFK1Kia4QxkI1B96YnUWOicXUXfYPLBboRLhWQWGGJg7kED4foQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

将电源线的正、负两条线以同一个方向穿过铁芯可测量其中的共模电流，颠倒其中一条线的方向则可测量差模电流。参见上图。

另外一种手持式的工具是电流探测器，这是一种使用开放式铁芯的小型化电流变压器，参见下图。这种工具可用于测量铜箔路径或元件引脚上的高频电流。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0cSDEezicPCJm77O9bemPe6ae62icJ3XQAMD6PcavQSMyogxx1Pgb9Haw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

这个工具在制作上会有一定的难度，你可以用一个有两个孔的铁氧体磁珠经过打磨以后得到开放式的铁芯，再加上4~5匝线圈，然后再将其连接到同轴电缆即可。最好是将此铁芯放在带有开口的屏蔽罩里。当使用此工具的时候，你应当知道它也会捡拾到一些电场信号。为了分辨你测得的结果是来自于磁场还是电场，你可以在路径的上方将工具转动90°。如果测量的结果来自于磁场，其结果就会变为0。如果信号来自于电场，其结果就不会有什么改变。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgMibY4fbmbaGFSjTwLuu6E0ztekcfOj0tKIFmnItRVKZKSHblGzSsnP6xRO8fqpQQlVoa00sFP0MA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

电流探测器可让你知道变化中的高频电流在板上和元件上是如何流动的，甚至可以显示出电流在铜箔上是如何流动的：你将发现高频电流在铜箔上总是从最短的路径上经过。实际上，即使是地线层上的涡流也可以被测量出来。

## 8\. 总结

解决EMI问题可能是一件很复杂的事情，尤其是在面对完整的系统，同时又不知道辐射源所在的时候。有了关于高频信号和开关切换式转换器中的电流回路的基础知识，再加上对元器件和PCB布局在高频情况下的表现的了解，结合某些简单自制工具的使用，要想找出辐射源和降低辐射的低成本解决方案，从而轻松的解决EMI问题是有可能的。

Buck转换器中的主要辐射源是转换器的输入切换回路，它是我们考虑问题的重点。采用不同封装的开关切换式转换器在获得最佳元件布局方案以得到EMI辐射最低的解决方案方面有可能扮演非常重要的角色。

降低转换器的开关切换速度可对降低EMI有帮助，但这通常不是最优的选择。通过地线层进行屏蔽是一种很有效的做法，它们应该尽可能地长大、完整，还要尽可能靠近有辐射的环路。对输入和输出线进行滤波可以很有效地降低传导辐射水平。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。