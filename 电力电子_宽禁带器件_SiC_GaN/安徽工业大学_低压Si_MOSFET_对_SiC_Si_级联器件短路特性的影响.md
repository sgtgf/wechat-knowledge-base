# 安徽工业大学：低压Si MOSFET 对 SiC/Si 级联器件短路特性的影响


> 原文地址: [https://mp.weixin.qq.com/s/LPbFpqxQpAiA4T1dACnKgg](https://mp.weixin.qq.com/s/LPbFpqxQpAiA4T1dACnKgg)

**文章来源：**电子科技大学学报

**作者：**周郁明\*，楚金坤，周伽慧（安徽工业大学 安徽省高校电力电子与运动控制重点实验室，马鞍山 243002）

**摘要：**由低压硅金属−氧化物−半导体场效应晶体管（Silicon  Metal-Oxide-Semiconductor  Field-Effect  Transistor,  Si MOSFET）和碳化硅结型场效应晶体管（Silicon  Carbon  Junction  Field-Effect  Transistor,  SiC  JFET）构成的 SiC/Si 级联（Cascode）器件，兼具了低压 Si MOSFET 易于驱动、SiC JFET 高耐压低损耗等优点。该文采用实验和数值模拟的方式研究了低压 Si MOSFET 对 SiC/Si 级联器件短路特性的影响，结果表明，在短路过程中 SiC/Si 级联器件中的 SiC JFET 最高温度比单独的 SiC JFET 短路时的最高温度低，SiC/Si 级联器件的短路失效时间得到了延长，并且随着 Si MOSFET 额定电压的增加，SiC/Si 级联器件短路失效延长的时间也在增加。

**关键词：**泄漏电流；SiC/Si 级联器件；SiC JFET；短路失效

基于碳化硅（SiC）宽禁带半导体材料的功率半导体器件具有高临界击穿场强、高电子迁移率、高热导率等特性，非常适合于电机驱动、电力牵引、分布式电源系统等高效率和高功率密度的应用场合。目前已经商业化的碳化硅功率半导体器件有肖特基二极管（Schottky Barrier Diode, SBD）、结型场效应晶体管（Junction Field-Effect Transistor,JFET） 、 金 属 −氧 化 物 −半 导 体 场 效 应 晶 体 管（Metal-Oxide-Semiconductor Field-Effect Transistor,MOSFET）。相较于SiC  MOSFET，SiC  JFET具有更多的优势，它没有栅极氧化层，制造工艺更简单，成本更低，也不存在 SiC/Si 界面可靠性的问题，并且具有更高的电子迁移率、更低的通态电阻和更小的结电容。然而，出于性能和成本的考虑，SiC JFET 经常被设计成耗尽型器件，这给习惯应用增强型器件的电路设计人员带来诸多不便。实际应用中，耗尽型 SiC JFET 可以通过串联一只增强型低压硅（Si）MOSFET 来实现增强型工作模式，这 一 组 合 称 为 SiC/Si 级 联 （Cascode） 器 件 。SiC/Si 级联器件采用低压 Si MOSFET 的驱动电路，并具有 SiC JFET 器件的优点，在高功率、高效率变换器中具有广阔的应用前景。

目前市场上已有 SiC/Si 级联器件产品，开关特性也得到了系统研究，结果表明，SiC JFET 串联低压 Si MOSFET 后，开关速度和开关损耗都得到了改善。与此同时，SiC/Si 级联器件的短路特性也到了研究。文献研究了 SiC/Si 级联器件在脉宽为 1.5 µs、偏置电压为击穿电压 85% 的条件时重复短路脉冲作用下的特性退化情况，经过200 个短路脉冲，SiC/Si 级联器件的通态电阻增加了 1.84%，但阈值电压基本没有变化；文献 采用实验和数值模拟方式研究了 SiC/Si 级联器件的短路特性和失效模式，器件的初始温度对 SiC/Si 级联器件的短路特性影响不大，数值模拟研究表明，短路过程中 SiC JFET 耗尽区因热而产生的载流子在JFET 的栅极形成了较大的泄漏电流，导致 SiC JFET“热奔”，而此时低压 Si MOSFET 还能正常关断，然而，该文仅分析了 SiC/Si 级联器件的短路失效，并没有与单独 SiC JFET 的短路失效作对比，无法评估 SiC JFET串联低压 Si MOSFET 后短路特性的变化。

SiC/Si 级联器件的特性主要由 SiC JFET 决定，尽管低压 Si MOSFET 在级联器件中只起到开关控制作用，然而，SiC/Si 级联器件在器件组合结构上毕竟不同单个的 SiC JFET，低压 Si MOSFET 对SiC/Si 级联器件短路特性的影响，以及低压 Si MOSFET 自身的额定电压对 SiC/Si 级联器件短路特性的影响，需要得到进一步的研究，以便进一步明确 SiC/Si 级联器件的短路失效机理。

本文通过实验和数值模拟的方式对比了 SiC/Si级联器件与 SiC  JFET 的短路失效，分析了 SiC JFET 和 SiC/Si 级联器件在短路失效时刻的温度分布，研究了 SiC/Si 级联器件中低压 Si MOSFET 对级联器件短路特性的影响，并讨论了不同额定电压的 Si MOSFET 对 SiC/Si 级联器件短路特性的影响。

**1. 短路实验**

SiC/Si 级联器件是将低压 Si MOSFET 的漏极（Drain, D）−源极（Source, S）并联在 SiC JFET的源极（Source, S）−栅极（Gate, G）之间，连接方式如图 1 所示，其中，图 1a 为级联器件的组成结构示意图，图 1b 为采用 TO247-3L 封装形式的级联器件的内部连线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtqsDjWzRd65Y9sZQ2QibrVxHP8VJIEYZUTkBVAsMXI90lStbYPtPu3wA/640?wx_fmt=png&from=appmsg)

一般而言，功率半导体器件的短路事件主要在两种故障状态下发生：1）硬开关故障（HSF）；2）负载故障（FUL）。前者是功率半导体器件已经被短路，然后功率半导体器件导通，后者是功率半导体器件已经处于导通状态时负载短路。本文采用第一种方式来研究低压 Si MOSFET 对 SiC/Si 级联器件短路特性的影响，短路测试电路原理图与实验现场图如图 2 所示，其中，图 2a 中 UDC 为直流电源，CDC 为储能电容，DUT 为被测功率半导体器件，UD 为驱动电压，RG 为驱动电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtUic5ZYlAldfUSXviaMSJnasccVVD2aIicG0B1HXSicMCmmIsC87pm6dzYQ/640?wx_fmt=png&from=appmsg)

图 1b 中采用 TO247-3L 封装的级联器件，短路测试时只能测到整个器件的电压和电流，这不利于深入分析低压 Si MOSFET 对 SiC/Si 级联器件短路特性的影响。本文短路测试的 DUT，除了TO247-3L 封装的 SiC/Si 级联器件，还有分立的SiC JFET、Si MOSFET 以及由分立的 SiC JFET 和Si  MOSFET 构 成 的 级 联 器 件 ， 其 中 ， 分 立 的SiC JFET 与 SiC/Si 级联器件来自于同一家厂商，Si MOSFET 为沟槽栅结构，与所选用的 SiC/Si 级联器件产品手册对其中的 Si MOSFET 的描述保持一致。表 1 列出了所选用的 SiC/Si 级联器件、分立的 SiC JFET 和 Si MOSFET 的型号、参数及其封装形式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtxnwMfUpW4LYqc3BQrvz1mfoGgxY03OGMb9pVMOhcuPichtOia1lRybrA/640?wx_fmt=png&from=appmsg)

图 3 展示了表 1 所示的器件在短路过程中的电压和电流，包括漏源电压 VDS、栅极电压 VGS、漏源电流 IDS、栅极电流 IGS，测试时图 3a−图 3c 的直流电源UDC 为400 V，图3d 为25 V。表2 总结了图3在 4 种测试情况时的短路饱和电流峰值和短路失效时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtabHKvPJdZBVAQ1pUK6gIC8qic4NfaNia6K00JC59MJejjpAkHpzrpkgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLto4f3WS38yvgmh2fW4S3sTeWwFlrXKk4FbUo9XCbdGBiaNtLl5Sn3MtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtXBEDDHXSicicReMzcNX3TyGSlTeJZNIS0nuibicwWcpOxn59OFOeIVxbVg/640?wx_fmt=png&from=appmsg)

**2. 数值模型的建立**

利用半导体器件计算机模拟软件（TCAD）建立了 SiC/Si 级联器件中 SiC JFET 和 Si MOSFET 的数值模型。表 1 所示额定电压为 650 V 的 SiC JFET，其理论击穿电压一般设计为 800  V，30 V 的 Si MOSFET 的理论击穿电压为 38 V，根据此规则，TCAD 中建立的 SiC JFET 和 Si MOSFET 的半幅二维数值模型如图 4 所示，包括 N 型衬底、N 型漂移区、P 型基区、N 型基区，N 型源区、P 型源区和相应的电极，其中，N 型漂移区和 P 型基区的掺杂浓度和厚度决定了半导体器件的击穿。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtVgKG8jJkY3ODLLaw60YJ4aoRKdnfxuMhZD3Aw126DzaqWTFSvswUFA/640?wx_fmt=png&from=appmsg)

数值模型在模拟短路特性时，考虑了高温下的带隙变窄效应、载流子复合效应、高载流子密度下的俄歇复合效应，引入了与温度相关的载流子迁移率模型，同时，为了进一步提高模型的精度，SiC JFET 采用了文献 中与温度相关的热容率。图 5展 示 了 图 4 所 示 的 SiC  JFET、 SiC  JFET 与 Si MOSFET 构成的分立级联器件在直流电压为 400V 时短路过程中的电压和电流，其中，描述功率半导体器件短路特征的两个关键参数—短路时的饱和电流峰值和短路失效时间，SiC JFET 分别为 206A 和 4.86 µs，SiC JFET 与 Si MOSFET 构成的分立级联器件分别为 132 A 和 5.8 µs，与表 2 所示的实验结果基本一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtUI9JoBDqg5vkoA4FUDwOicECcCAS0hB7DvUxqdVh5hiaePvS0Gd5iacQQ/640?wx_fmt=png&from=appmsg)

**3. 结果分析**

表 2 所示，由分立器件组成的级联器件和采用 TO247-3L 封装的级联器件它们的短路饱和电流峰值和短路失效时间相近，但与单独的 SiC JFET相差较大，同时也可以看到，SiC JFET 串联了低压 Si  MOSFET 后，短路失效时间延长了。SiC JFET 串联低压器件后短路失效时间得到了延长，这个能够从数值模型内的温度分布来分析。图 6 给出了单独的 SiC JFET 和 SiC/Si 级联器件在短路失效时刻器件内的温度分布，图 7 给出了在短路失效前器件内最高温度的变化。从图 6a 可以看出，SiC JFET 失效时，最高温度位于从漏极到源极的电流通道上的 N-漂移区，并向 SiC JFET 的上表面扩散，导致 SiC JFET 的栅极出现了泄漏电流，最终在失效时刻，SiC JFET 的栅极电流也出现了失控现象（见图 3b），不过栅极泄漏电流的形成最初是从靠近沟道中的温度最高点附近开始，之后才向左右两侧扩散，因而栅极泄漏电流上升较为缓慢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtA2MyImLHUjGrNveslaLmMDicpRFJAX9na93ophGRzjh53AbbtBVroaw/640?wx_fmt=png&from=appmsg)

当 SiC JFET 与 Si MOSFET 组成级联器件后，图 6b所示的 SiC JFET 的高温区位于源极附近区域，并向左右两侧的栅极区域延伸，因而 SiC JFET 的栅极也会出现泄漏电流，这个泄漏电流覆盖整个 SiC JFET 的栅极区域，因此在短路失效后级联器件中的 SiC JFET 栅极泄漏电流快速上升。同时，从图 7可以看出，在失效前，单独的 SiC JFET 在短路过程中的最高温度一直都比 SiC/Si 级联器件的最高温度高，温度高意味着器件的损耗高，器件发热严重，最终因为热击穿而失效。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtkOZDm1pTAlGEzUP1Yca6A48L0djIdVibyg02GVD19lW8S9DY6NiaGozw/640?wx_fmt=png&from=appmsg)

形成图 6 和图 7 两种器件内的温度分布差异，与 SiC/Si 级联器件的组成结构有关。导通后的低压 Si  MOSFET 等 效 为 一 个 小 电 阻 ， 相 当 于 在SiC/Si 级联器件的短路电流通道上增加了一个小电阻，这个小电阻在一定程度上能降低短路饱和电流的峰值，在一定程度上抑制了 SiC JFET 内的温升，同时器件内的热量也能够扩散到 SiC JFET 的源极表面，因而形成了图 6b 所示的 SiC JFET 源极表面附近的温度分布。

另外，从图 6b 可以看出，SiC/Si 级联器件失效时 Si MOSFET 内的温度远比 SiC JFET 低，这和图 2d 所示的 Si MOSFET 较强的短路耐受能力有关，因而级联器件短路时先失效的是 SiC JFET。

SiC JFET 串联低压 Si MOSFET 后短路失效时间得到了延长，这个延长时间还与低压 Si MOSFET自身的额定电压有关。图 8 展示了额定电压分别为 30 、40 、100 V 的 Si MOSFET 与同一型号的SiC JFET 构成的分立级联器件的短路失效时的实验波形，可以看出随着 Si MOSFET 额定电压的增加，分立级联器件的短路失效时间也相应增加。在这个实验中，由于用大电流钳测了 SiC JFET 的栅极电流，额外引入了一段导线，这带来了一定的寄生电感，与图 3c 中没有引入额外导线的分立级联器件相比，失效电流上升较为缓慢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk0HZibALNOeoVgU9f8QzCLtTDOuaMY5b3ygamwOcibO5ia41psBjM8K3GKJkJcQHMuBk0FTKnEGD3vg/640?wx_fmt=png&from=appmsg)

图 8 中 3 种额定电压的 Si MOSFET 来自于同一厂商、同一种封装，并且额定电流都为 30 A，可以判定随着额定电压的增加，Si MOSFET 的内阻也增加，所构成的分立级联器件的短路饱和电流峰值相应降低，进一步延长了短路失效时间。

图 8 中的 SiC JFET 栅极电流在级联器件失效时快速上升，达到峰值后又下降，之后又快速上升。第一个快速上升阶段，与前述的 SiC JFET 内温度分布有关，栅极泄漏电流覆盖整个 SiC JFET的栅极区域，之后主要受载流子速度饱和以及载流子迁移率负温系数等效应的影响，泄漏电流到达峰值后又下降，最终由于栅极区域的反偏 PN 结被击穿栅极电流也出现了失控，因而级联器件中 SiC JFET 的失效先是漏源极失效，之后是栅极失效。

**4 . 结束语**

本文利用实验和数值模拟的方式研究了低压 Si MOSFET 对 SiC/Si 级联器件短路特性的影响，结果表明，SiC JFET 串联低压 Si MOSFET 后短路失效时间得到了延长，数值模拟结果显示，短路过程中 SiC/Si 级联器件中 SiC JFET 内的最高温度比单独 SiC JFET 的最高温度低。最后讨论了不同额定电压的 Si MOSFET 对 SiC/Si 级联器件短路特性的影响，结果表明，随着低压 Si MOSFET 额定电压的增加，SiC/Si 级联器件的短路失效时间也增加。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)