# 不平衡电压条件下VSG-SST控制策略

原创 程 静 ，赵振民 SiC碳化硅MOS管及功率模块的应用 2026-05-21 11:51 广东

> 原文地址: [https://mp.weixin.qq.com/s/A5t8u8RCkiCiC3s0ykA0Ww](https://mp.weixin.qq.com/s/A5t8u8RCkiCiC3s0ykA0Ww)

文章来源：太阳能学报

作者：程 静1，2，赵振民1，3，张 陵3，南东亮1，3（1. 新疆大学电气工程学院，乌鲁木齐 830017；2. 新疆大学可再生能源发电与并网控制工程技术教育部工程研究中心，乌鲁木齐 830017；3. 国网新疆电力有限公司电力科学研究院，乌鲁木齐 830011）  

摘 要：当低压配电网电压不平衡时，产生的负序分量将引起传统VSG控制中SST输出级发生电流不平衡和功率振荡现象， 为此该文提出基于改进VSG的T型三电平输出级联合控制策略，以提高输出级电能质量。首先，对不平衡电压下VSG电流不平衡及功率振荡进行机理分析；其次，基于VSG控制算法和瞬时功率理论设计新型电流基准发生器，与正负序电流调节器实现级联控制，以此保障SST输出电流平衡及有功/无功功率恒定，实现不同运行工况的可靠切换；最后，对正负序分量分离方法和中点电位平衡算法进行分析研究，并对控制策略进行仿真验证。结果表明，所提联合控制策略有效可行，能保障电压三相不平 衡工况下SST输出级并网电流功率质量。  

关键词：电能质量；固态变压器；虚拟同步机；T型三电平；电网电压不平衡；控制策略

0.引 言  

近年来，新能源发电由集中式向分布式不断转变，分布式发电单元大规模无序接入低压配电网，其占比不断提高，加之日常生产生活中不对称负载大量接入，对低压配电网电能质量造成严重不利影响。固态变压器（solid state transformer，SST）是一种基于电力电子变换器的智能高频高压变压设备，除了可实现传统工频变压器的电气隔离、电能传递与转换之外，还具备灵活的电力电子接口、电气量实时采集和控制、故障隔离等能力，使得其在配电网中的应用越来越广泛。但 SST不具备传统同步发电机的阻尼和惯性以及 SST输出级交流接口无大电网惯性支撑，加上高渗透率分布式电源接入，在动态响应过程中仍难以保持低压配电网电压和频率稳定，影响电能质量。目前虚拟同步发电机 （virtual synchronous generator，VSG）技术可使 SST交流端口模拟同步发电机的外特性，使SST具备配电网电压和频率调节能力。文献［6］研究了以 VSG为核心的自主电力系统， 显现了 VSG技术实现分布式能源和柔性负荷统一接入智能电网的强大潜力；文献［7\-8］提出基于 VSG的 SST控制策略， 交直流端口通过虚拟电机控制，极大提高了多类型分布式电源接入适应性。在此基础上，文献［9］提出基于VSG的模块化多电平型 SST控制策略，可应用于高压大功率场合，及时响应电网电压/频率调节。 

以上文献均是在低压配电网电压平衡情况下对基于VSG的 SST进行研究。然而，低压配电网在实际运行中极易受不对称负载、非全相运行、过载等因素影响而造成低压配电网电压三相不平衡，致使传统 VSG控制的 SST输出级电流畸变和功率振荡，影响 SST向低压配电网输送的电流、功率质量。对于不平衡工况下的传统 SST控制，文献［10］研究了固态变压器与配电系统以控制方法实现低压侧电流平衡； 文献［11］提出零序电压参与调制，实现电流平衡，但谐波含量较大；文献［12］研究了基于滑模变结构的 SST控制策略， 在单相不对称情况下有效抑制功率波动和负序分量，保证了输出级并网电能质量。然而，基于 VSG控制的 SST输出级等效为电压源，当低压配电网电压或负荷三相不平衡时，传统SST输出级控制等效为电流源，二者控制机理有较大差别，不可将其直接用于基于 VSG的 SST输出级控制。 

为解决上述难点问题，本文以 T型三电平输出级 SST为 研究对象，提出一种在低压配电网不平衡电压工况下基于改进 VSG的 SST输出级联合控制策略。首先，对不平衡电压下VSG输出电流不平衡及功率振荡的原因进行分析；其次，基于VSG功率外环控制得到正序电流基准值，结合瞬时功率理论推算负序电流基准值，联合正负序电流调节器实现级联控制，并对正负序分离方法进行讨论；最后，针对T型三电平输出级拓扑结构直流侧中点电位不平衡的缺点，提出零序分量注入的中点电位平衡控制。在该控制框架下不仅能保留VSG控制的电压源特性，而且可实现电流平衡和抑制直流电压或无功功率波动，灵活满足不同运行条件要求，有效提高低压配电网电压不平衡工况下 SST运行性能，深入挖掘其改善电能质量的潜力。  

1.SST主拓扑结构  

本文固态变压器主电路拓扑结构如图 1所示，该结构由输入级、隔离级和输出级构成。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMqMnl8KFZH7CxIhBX9G4e6q0JOU9ppibz6glQAjteHvlwmLiaMemwduu7yzjNohQPLTrPKjR85oU6icoZpQ4Uo5bBRTE33wgglcM/640?wx_fmt=png&from=appmsg)

输入级以半桥型 MMC变流器连接中高压交流电网，通过对 MMC子模块数量增减，适应于不同电压等级，降低功率开关元件耐压要求，提高电能质量控制能力和功率密度，实现单位功率因数或定功率因数运行。 

隔离级采用双有源桥串联谐振转换器，使输入侧的输出直流电压通过单相全桥逆变电路调制为高频交流电压，经高频变压器耦合至二次侧，由单相全桥整流电路转换为直流，实现直流电压变换及输入输出级的电气隔离，允许功率双向 流通。其中，隔离级采用输入串联/输出并联的结构，实现输入分压和输出分流，其低压直流母线为新能源并网或负荷提供直流端口。 

输出级采用 T型三电平逆变器，是二极管 NPC型三电平拓扑结构的改进，主要功能是将桥臂输出电压通过反向串联的 IGBT实现中点钳位。输出级将隔离级输出的低压直流转变为稳定的三相工频电压，输入低压配电网向用户供电。 

本文固态变压器三级独立控制，在低压配电网电压不平衡工况下主要对 VSG控制的 SST输出级电能质量改善控制策略进行研究，因此对 SST输入级和隔离级控制策略不再赘述。  

2.T型三电平输出级及VSG建模  

2.1 T型三电平输出级数学模型

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPeeJklrUk7TgDYdXTEiawY5rJicKIehR6X133hX1nxzeOOE44EtxHZAhqZTZ9uAZIZG45Uic9ia3AJ6TjgmQ9BP3f8wFxiaDsOhz3o/640?wx_fmt=png&from=appmsg)

固态变压器输出级采用 T型三电平逆变器，相较于传统两电平具有较低的谐波含量和功率损耗的优点，等效电路如图 2所示。图 2中：C1、C2为容抗值相同的分压电容；UC1、UC2为两分压电容的电压；UdcL为低压直流母线电压实际 值；IC1和 IC2为流过两分压电容的电流；Inp为中点电流；Cf、Lf、R1、Lg分别为电路输出滤波电容、电感、电阻以及网侧电感，Ls\=Lf+Lg为逆变器到电网的总电感。

根据基尔霍夫定律，可得电路方程为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNyib7Opor2EkvG7ibmqS6laWCOJyBqZ08uUJV4speYk6rA10mVdZkvbILyfWD5goXU0Kxlia2PNiaeVhxnuE8rORKiaqcAV4TnicSkU/640?wx_fmt=png&from=appmsg)

式中：ugj(j\=A，B，C)——网侧电压；uik和 iik（ k\=A，B，C）——输出级输出电压和电流；ifk—— Lf电感电流。 

根据式（1），电流在 d、q旋转坐标轴下的微分方程为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOEkYic7DQEiaOKWwfL4D8e80tAzgV9a2TUflJBMLUkUnydy9ovWULyzMjj3I4oqFiblKuibBibH5wzxvxrsHEw6h1c9xOMtksUseM8/640?wx_fmt=png&from=appmsg)

式中：uid、uiq和 iid、iiq——输出级输出电压和电流的 d、q轴 分量；ugd、ugq——网侧电压 d、q轴分量；ifd、ifq—— ifk的d、q轴分量。  

2.2 VSG控制原理  

采用虚拟同步机控制策略使 T型三电平输出级模拟同步机的外特性，基于 VSG控制的 T型三电平输出级等效电路如图 3所示，其中，Tm、Te分别为虚拟机械转矩和虚拟电磁转矩。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNglDSPcabiaryvkBCxsedWFPyZjJ2TRibP4AuR5xJY77U5kP5fK4oXHgOqwFDrL6Pfkiau52Z6futs12jrjZPkra04qibibyxIakQc/640?wx_fmt=png&from=appmsg)

VSG控制框图如图 4所示。图 4中：U\*dc、UdcL为低压直流母线电压参考值；Pref、Qref分别为有功和无功功率的参考值 ；Pe、Qe分别为输出级输出瞬时有功和无功功率 ；Kq、D、J分别为积分增益系数、虚拟阻尼、惯性系数；ω\*为额定角速度或电网角速度；E、θ分别为 VSG输出电压基准 幅值和相角；电压基准 u\*kj可写为 E∠θ。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNOUUw9Hq0oeCv6BxyPhvZwa5TVcSFlKq4qgP9m54s0rRmXjqnj8MI8j7yvhCTSTNW2eHicfOfnbriceNcmBtD9BBq5icUfWGHUAw/640?wx_fmt=png&from=appmsg)

VSG控制通过有功和无功功率参考值与瞬时值的差值调节为输出级输出电压基准值，特性函数表示为 u\*\=f(Pref，Qref)，表明 VSG可等效为电压源。而传统变换器输出功率是通过电流来进行调节，特性函数为i∗\=f(Pref，Qref)，表明可等效为电流源。因此，VSG控制与传统控制有较大差别，若直接采用传统控制方法，VSG的电压源特性将被改变，使其无法适应高渗透率的弱电网场景，失去了VSG模拟同步机外特性的意义。  

3.SST输出级电能质量恶化原因  

当低压配电网发生电压不平衡时，产生的负序分量将导致 VSG控制输出级发生电流不平衡和功率振荡，影响 SST向低压配电网输送的电能质量。一般来说，在电压不平衡情况下，SST输出级输出瞬时功率为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNuArnOVmSibf35hibQVhs6ZYiaXU5RdmCaY7eeNnkYy3HZ1fQibRtQSAgLlHLiaqGjjcpqDCibyfcsxUgKdiaJWHcdWQSxTamJUAoicEQ/640?wx_fmt=png&from=appmsg)

式中：S——复数功率；上标“\-”——共轭；U+gdq、U-gdq——网侧电压在 d、q坐标轴下的正序分量和负序分量；I+idq、I\-idq——输 出级输出电流在 d、q坐标轴下的正序分量和负序分量。 

根据式（3），SST输出瞬时有功功率 P2和无功功率 Q2分别为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNvBpXSeNV2ICRPBBQS524jDxc0WVMaiaiazxibVMzWWzFYlxRMsPichMBtPSNTtvLicIw2K0vIwgIziaeYa7t0vJC4OKo1l3kXdw5CY/640?wx_fmt=png&from=appmsg)

式中：pˉ、qˉ——平均有功功率和平均无功功率；Pc2、Ps2、Qc2、Qs2——二倍频有功和无功功率波动分量。 

由式（4）可看出，SST输出级瞬时功率中产生二倍频波动分量，导致输出有功和无功双频振荡，可由正负序分量计算得出，如式（5）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNPGKibSNjIKBZI8QFAXGYmCfjZ9xmHGP5kb5rQsEibbqtrlwJ87mxfX5iaeibReS4JGRNGeHBnckhCKOlgrrDWTU2GUFPic9PeECnQ/640?wx_fmt=png&from=appmsg)

式中：u+g、u-g——电网电压 U+g和 U-g的瞬时值；i+i、i\-i——输出电流 I+i和 I\-i的瞬时值。

 通过式（5）可知，若要控制 SST输出级输出电流平衡，需控制负序电流分量为零，从而消除有功、无功中部分波动分量，而功率波动分量中仍存在负序电压和正序电流相互耦合，仍会发生功率振荡；若要控制 SST输出级消除功率振荡， 负序电压和负序电流都不可为零，从而导致输出电流不平衡。因此，在电压不平衡下基于 VSG的 SST输出级主要控制目标是使注入电网的电流平衡、减小有功或无功功率振荡。

4.改进VSG控制策略  

在不平衡电压下，根据图 4可知，传统 VSG控制策略中未考虑负序分量，将导致有功和无功功率振荡，通过 VSG控 制中有功环和无功环传递至输出电压基准值幅值和相角，引起 SST输出级输出电流不平衡。因此，本文提出一种基于改 进 VSG的输出级控制策略，通过增加控制环节 i\*\=f(u\*kj)，在不改变 VSG的电压源特性的前提下，能实现输出电流平衡、减小有功或无功功率波动。控制策略框架如图 5所示，主要由传统 VSG控制器、电流基准值发生器、基于 PI的正负序电流调节器、调制波发生器和中点电位平衡控制器组成。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPDo63mRvJYKRvQjgt0IvRrw4f1tU9rQA6xR3Fgp38vjR7Pno3Jl1uNX2KOy1EaqU5N6aSPE8wU9eMibicv5Cu1sMClLtlySHqMY/640?wx_fmt=png&from=appmsg)

电流基准值计算模块是该控制策略的核心，以 VSG主控制策略输出电压基准值求得正序电流基准值，由瞬时功率理论计算负序电流基准值，以实现不平衡电压下电流平衡控制、有功/无功恒定控制。 

本文采用基于双二阶广义积分器的正负序分离方法，其具有良好的滤波功能，提升电网电压和输出电流正负序分量的提取效果。二阶广义积分器传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMKOmVXDicFMjXdN2q8bHrv7oZ7aagbMCjjt7KUpz5ogtKFcSMk000JicRdyn9faSsMaVgSCtrzyfc7Cvw9icDiaTsrrKic0PccicicgA/640?wx_fmt=png&from=appmsg)

式中：D(s)、E(s)——带通和低通滤波器；ωr——谐振频率；k——阻尼系数。  

4.1电流平衡控制  

在电网电压不平衡工况下为获得高质量的并网电流，SST输出级注入电网的电流只允许包含正序分量。因此，需将负序电流基准值设定为零，正序电流基准值通过 VSG控制 模块产生的电压基准值和输出级正序电路方程计算得到，如 图 6所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNicg4TzaOF9OwqeT1e2hqvpjp75dzdq51atN6lGK6UY27ntAibQJibgwKBgt3EuictKnHw7PmjTfhOytJ7NfgqryVDRL08PthYuj8/640?wx_fmt=png&from=appmsg)

由于 SST输出级输出电压稳定值 uik与 VSG模块输出电压基准值 u\*kj近似相等，在不考虑电容影响的情况下，根据同步机定子电气方程，由式（2）可得 VSG控制模块电压基准值 与电网正序电压、电流分量基准值的关系，如式（7）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOT20hEkFtK5do3puxyXq3maFaCkeuY69o6nZabh2ocjYm0ThsCfHicGEMjunNmicPINrohFDxjDVF9Tz2ggRfC3KFd0gnficYlBk/640?wx_fmt=png&from=appmsg)

式中：u\*kd、u\*kq——VSG控制模块电压基准值在 d、q轴下的分量。将式（7）转换为正序电流基准值表达式并通过拉普拉斯变换至复频域，如式（8）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOBR8S6qMDeaa7clZn9ibMrLEqmbEATkq2dD6UafqWMQS3hVgH9Z72fxQZ9rkOBeKQ3mRTP4xCzE6kXlUrAGpvBBmG8O6ia2T328/640?wx_fmt=png&from=appmsg)

式中：s——微分算子；R——逆变器到电网的总电阻。 

根据拉普拉斯终值定理，式（8）可化简并转换至时域，如式（9）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMMRtkQIiaJ7wvfFWp5K1m4icqic13FhtOzvJcNdqCfkmctSt8Otj1HfpTfACyQKs2CWT5ryt2iaMdT2SpURU01cVEB8o8rNh45P14/640?wx_fmt=png&from=appmsg)

将负序电流基准值设定为零，根据式（5）和式（9）可得二倍频功率波动分量，如式（10）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNwBQ8eZzmBFSoENLr0Tcic4g5j9kTsPicxB9U5xm5ZBz3LZX7icQTLst3tUqn4DJ3Z4S3KuQy5NGnb6zicTt9uXYFUOIPq8v3tqOw/640?wx_fmt=png&from=appmsg)

比对式（5），式（10）二倍频功率波动分量未完全消除，但 大大减弱了功率振荡，因此实现电流平衡控制目标是以有功和无功功率振荡为代价的。  

4.2有功功率恒定控制  

当 SST作为光伏或储能系统并网接口时，需对有功功率进行恒定控制，根据式（5）使二倍频有功功率波动分量 Ps2和Pc2为零，只产生平均有功功率分量，如式（11）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPAzY8Rj3VH9lPZPm9Ja1Bwpxk2pLdwH5FKyu8F48C5DWZ8uLy8ooib0ZSUxu3AVrPTGwicUH4CpG0CQE18tQ5RRw39ac8gEAiaf0/640?wx_fmt=png&from=appmsg)

由式（11）可知，有功功率恒定控制的负序电流基准值和电流平衡控制的正序电流基准值相互关联，利用式（9）推算出负序电流基准值，如式（12）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMDaxQjzbh9cXiboanOy9RMAWtevpibjbJNxgvo84uEibVZoGj2O84DdpVbfyCF4Ox4U2rECnumHrHPZsEHby3rY9ibic7H3cibU6REE/640?wx_fmt=png&from=appmsg)

由于负序电流分量未消除，导致有功功率恒定控制比电流平衡控制中无功功率振荡大，且 SST输出级并网电流不平衡。  

4.3无功功率恒定控制  

当大容量发电设备通过 SST接入电网并提供稳定的无功功率支持时，主要是使二倍频无功功率波动分量 Qs2和 Qc2为零，只输出平均无功功率分量，如式（13）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMI2e5GSuny10fwfyhPaWibDoU0dwWKXFxbflAqlEDon5qudm7yicice5EgV4OUpN54dEqJB42zCC4MicH5aqJaVTBcpwqXh8Libpzw/640?wx_fmt=png&from=appmsg)

由式（13）可知，无功功率恒定控制的负序电流基准值和电流平衡控制的正序电流基准值相互关联，利用式（9）推算出负序电流基准值，如式（14）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNW3KYic2TMrouyicsu9cqFu3CaTUk3YpicicQUe6bQsXA6OZiaH0VeEbKUdB6jDIiajEymCZib7dVGvez5oJPssNJT8TRafVH8vzk4RU/640?wx_fmt=png&from=appmsg)

由于负序电流分量未消除，导致无功功率恒定控制比电流平衡控制中有功功率振荡大，且 SST输出级并网电流不平衡。 

由式（9）、式（11）、式（13）可知，电流平衡控制中的正序电流基准值与有功、无功功率恒定控制中的负序电流基准值相互关联，且式（12）与式（14）负序电流基准值互为相反数。因此设计电流基准发生器，引入灵活系数 H，在电网电 压不平衡工况下控制系数 H来选择控制目标以满足不同需求，如图 7所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMNjPOibTfkjVu93aCYsV3gbhOJVXxB6sia6m7s82Ep7GhdeFtJKleWjlO72tIf4LsajtmUE3pH20m6wHbmQe2DALX04mY6e7rFM/640?wx_fmt=png&from=appmsg)

当 H\=0时，实现电流平衡控制；当 H\=\-1时，实现有功恒定控制；当 H\=1时，实现无功恒定控制，如式（15）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQwbKPj0CtNXdJStGg9eTav08CVmfAWJHOdPucjB1ZeZDYibINxhFvIf83PdvDkVOic9h9W5A0uibicicggRibiaT79hUia5JccTzdceY/640?wx_fmt=png&from=appmsg)

为实现对输出电流的调节，进而快速跟踪正负序电流基准值，设计基于 PI的正负序电流调节模块，如式（16）所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNMCCphr5kJN58jKTmDG0qIsOoURQFNUCRh5au5GZKDOkTd3Q0JNokJZaeQ8jAwxK2aXWeEavV7J9QlW0KxwjgacWgYx4Dgic7A/640?wx_fmt=png&from=appmsg)

式中：e\*——调制电压；Kp、Ki——比例积分系数。 

采用三电平 SVPWM调制策略生成三相羊角调制波，可对中点电位起到一定的平衡作用。但由于电流从 T型三电平输出级直流侧两个分压电容中点流过，会使得电容电压发生波动或偏移，影响输出电能质量。因此，采用零序分量注入的中点电位平衡控制，注入零序分量参与调制，有效实现 T型三电平输出级两电容电压平衡，生成零序分量为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNynxHbx5m1AsHLXlCzH8S64v9faD1QIgtAc3rnyzOXsvPibQjibMpJeqP9ia02JzAHY5FvUU0ibiboh7X9MC3QJZNwQBbb1ZPqAJtI/640?wx_fmt=png&from=appmsg)

式中：v0——零序分量；C——分压电容容抗值；inpav——中 点电流；inp0——叠加零序分量后的中点电流；fs——载波频率。  

5.仿真验证及分析  

为验证以上控制策略在电压三相不平衡工况下的有效性， 按图 1拓扑结构，在 Matlab/Simulink软件平台搭建 SST系统仿真模型进行仿真分析。其中输入级电压有效值为10kV，高压直流母线电压为16kV，低压直流母线电压为 750V，输出级交流端口并网电压为 380V，SST输出级仿真参数设置如表 1所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO1HszpuNkOHMCFwqmlUY8l3TUo3rtQ0z774uL4OlzEicPCiaNFWjz5FicOxasRHv27kf6E1qibJmJ4omI2YZq1MibHrROnlsxk1Qy0/640?wx_fmt=png&from=appmsg)

5.1基于传统VSG的SST输出级控制  

如图 8所示，0~0.3s，电网电压三相平衡，SST输出级正常工作；0.3~0.9s，电网电压三相不平衡，A相电压升高 20%，B相电压保持不变，C相电压降低 20%；0.6s处加入中点电位平衡控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTZFnWGiasfh25cNoxC5K4SJPQUjeUGCVxfRNeiaboVwF3gTibiawpEOcV4FQrp5CoVxOkIicRT8bmRzVykWgzs96fQDkL6dKjQnUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSVfE0YsKl70ZjULowicDYKMrhHAJH5bh8iaL9ZxJp59QQ8O8I48BbbfOPcSQDkyictW8d5ogDIljYiaAITeNd6HtNUvY5oRJwJ4U/640?wx_fmt=png&from=appmsg)

由图 8可知，电网电压平衡时，SST输出级输出并网电流三相平衡，幅值为 34.8A，低压直流母线、输出有功及无功均保持稳定；电网电压不平衡时，SST输出级输出并网电流发生三相不平衡，最大峰值为 38.5A，谐波含量为 6.92%，低压直流母线、输出有功及无功发生二倍频波动，低压直流母线电 压波动幅值为 2.5V，有功功率波动幅值为5.2kW，无功功率波动幅值为 6.6kvar；0.6s前输出级直流侧分压电容电压 UC1和 UC2波动峰值分别为 385和 365V，0.6s加入中点电位平衡控制后，两分压电容电压均保持平衡在目标电位 375V。  

5.2基于改进VSG的SST输出级控制  

5.2.1电流平衡控制转无功恒定控制 

如图 9所示，0~0.3s，电网电压平衡；0.3~0.9s，电网电压三相不平衡；0.6s前以电流平衡为目标，0.6s后以无功功率恒定为目标。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMHscicknbL8Uh0pHmpvreAy9kqQyNmycSznkxd4qcBtJexPBlUgNnJicibSPfZhMJQLibYZKo7NX5iaahdmYnb6Y6Y86mU9y7J3yc0/640?wx_fmt=png&from=appmsg)

由图 9可知，当电网电压三相不平衡时，电流平衡 VSG控制下的 SST输出级电流保持三相平衡，幅值为 35A，谐波含量为 1.49%。输出有功及无功功率波动减小，但低压直流母线电压和输出有功/无功功率仍存在二倍频波动，三者波动 幅值分别为 1.5V、3.9kW、3.7kvar。在无功恒定 VSG控制下SST输出级输出无功功率波动幅值减小至 0.49kvar，但并网电流三相不平衡、低压直流母线电压和输出有功功率波动变大，并网电流波动峰值为38.5A，谐波含量为 0.58%，低压直流母线和有功功率波动幅值分别为 3.1V、7.6kW。以上结果表明，以电流平衡为目标的 VSG控制可保障输出并网电流平衡，谐波含量及输出有功/无功功率减小；以无功功率恒定为目标的 VSG控制可实现输出无功功率恒定，但导致电流不平 衡和有功功率波动变大。  

5.2.2电流平衡控制转有功恒定控制 

如图 10所示，0~0.3s，电网电压平衡；0.3~0.9s，电网电压三相不平衡；0.6s前以电流平衡为目标；0.6s后以有功功率恒定为目标。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpONDpfxGoibvOwI7HhpX1SBlEOJzveawU9LyWJk3XMWj9qpEWB30hjAj97B5vjqEbMNHpwEGPJIPibrGOJmBRGv7uPGjZA5FFQSo/640?wx_fmt=png&from=appmsg)

由图 10可知，当发生电压三相不平衡工况时，在有功恒定 VSG控制下，SST输出级输出有功功率波动幅值减小至0.5kW，低压直流母线电压波动幅值减小至 0.4V，但输出并网电流三相不平衡，波动峰值为37.5A，谐波含量为 0.65%， 输出无功功率波动变大，波动幅值为 7.54kvar。以上结果表明，以有功功率恒定为目标的 VSG控制可实现输出有功功率恒定，但导致电流不平衡和无功功率波动变大。  

5.2.3灵活系数切换控制目标 

如图 11所示，0~0.3s，电网电压平衡；0.3~0.9s，电网电压三相不平衡；0~0.5s，以电流平衡为目标；0.5~0.7s，以无功功率恒定为目标；0.7~0.9s，以有功功率恒定为目标。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPvBCmJnhgsibkgdJOzt1G5fu3dCtVgqsGTMT9RzzXYSliaWUswqlpFNyQ3fic9cslqYmkMhD9Cr3ic1Z7njXTKNEHvcPAViaVzBj6Y/640?wx_fmt=png&from=appmsg)

由图 11可知，在电网电压三相不平衡工况下，中点电位平衡算法有效控制分压电容电压 UC1和 UC2平衡；当 H\=0时， 实现以电流平衡为目标的 VSG控制，SST输出级输出并网电流三相平衡，幅值为 35A；当 H\=1时，实现以无功功率恒定为目标的 VSG控制，SST输出级输出无功功率波动幅值为0.49kvar；当 H\=\-1时，实现以有功功率恒定为目标的 VSG控制，SST输出级输出有功功率波动为 0.5kW。以上结果表明，基于改进 VSG的 SST输出级可实现不同控制目标的稳定运行，并改变灵活参数平滑切换 3种不同的控制目标。  

6.结 论  

针对在低压配电网电压三相不平衡工况下传统 VSG控 制中 SST输出级造成的电流不平衡、功率振荡及电流质量问题，本文提出基于改进 VSG的 T型三电平输出级联合控制策略，有效改善了 SST输出级输出并网电流及功率质量。经理论推导及仿真分析，得出以下结论：  

1）提出的改进 VSG控制策略保留了 VSG的电压源基本特性，通过 VSG控制中 SST输出级的正序电流方程推得正序电流基准值，结合瞬时功率理论推算不同控制目标的负序电流基准值，再级联正负序电流调节模块实现并网电流平衡、 减小有功/无功功率振荡以及并网电流谐波含量，通过引入灵活系数，实现 3种控制目标的可靠切换。  

2）提出的零序分量注入的中点电位平衡方法，联合改进VSG控制策略，适用于不平衡电压工况下较好地平衡T型三电平输出级分压电容电压，有效降低低次谐波的注入，提高输出级电能质量。  

3）在实现电流平衡 VSG控制或有功功率恒定 VSG控制时，有效抑制 SST低压直流母线电压二倍频波动，提高了直流微网接入适应性和直流负荷供电可靠性。 此外，此控制策略还可进一步改进，在电网电压暂降时以提高 SST的低电压穿越能力。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpO01GRuwwaCZ02Rw13UERTZyILW8eGhyXWVuOFp1klgHRdS8Z9dRsY2GVP5xTPyklhiaCDDfxupZRib0ZpIDMuQBWLgicv5bViceOc/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP5BkqkNw91BfvuqrzOVW9kibpTppicag2RL40sFKicuAuOb1YM96xw2TWvxrtBJuK6iaxLlDoC5sbOyic8SOw0pqMfBTiaNdPTkLWDM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOEialASgTianWn1aicvPNf8HxxBx8aCs1qejFZl3ETQf5bPZmaBeaUIeCl7meDfUF6A89MEKM7Q0OOSG78vJAQrmJ9e02m2yt67E/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMQvdfQrbbpW7aqbdrDNzJXFf4ib2ib3ndibhXibO5iaRhNtuicjZn4qZnpS3IVJK0l7PV57q9DqIvR1dvLcibxYOf1Vj6CwG5TvLwxibE/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)