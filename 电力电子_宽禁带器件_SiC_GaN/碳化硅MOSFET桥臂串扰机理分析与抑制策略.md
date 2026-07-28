# 碳化硅MOSFET桥臂串扰机理分析与抑制策略

原创 何杰 ，刘钰山 SiC碳化硅MOS管及功率模块的应用 2026-06-20 08:16 广东

> 原文地址: [https://mp.weixin.qq.com/s/-wZEOJJkriUlowhqjsqS4Q](https://mp.weixin.qq.com/s/-wZEOJJkriUlowhqjsqS4Q)

文章来源：中国电机工程学报

作者：何杰 1，刘钰山 1，毕大强 2，李晓 1\*(1．北京航空航天大学自动化科学与电气工程学院，北京市海淀区 100083；2．电力系统及发电设备安全 控制和仿真国家重点实验室(清华大学电机工程与应用电子技术系)，北京市海淀区 100084) 

摘要：桥臂串扰指关断态开关管驱动端状态受到同一桥臂支路另一开关管开通或关断的干扰而产生扰动。相比于传统硅器件，碳化硅金属–氧化物半导体场效应晶体管(metal-oxide-semiconductor  field effect transistor，MOSFET)开关速度更高、驱动端可靠关断区间更小，因此，其桥臂串扰问题更加突出。为提高碳化硅MOSFET 可靠性，有必要分析碳化硅MOSFET桥臂串扰发生过程和特点并提出相应解决方案。为此，文中首先建立基于碳化硅MOSFET 桥臂串扰电路模型，并分析该模型暂态过程；其次，基于分析结果建立桥臂串扰电压极值简化模型，并提出基于桥臂串扰问题安全工作区模型，然后，由此提出并设计具有桥臂串扰抑制功能的栅极驱动电路；最后，通过实验验证所提桥臂串扰模型的可行性，以及所提栅极驱动电路的有效性。  

关键词：碳化硅MOSFET；暂态分析；桥臂串扰；栅极驱 动器；安全工作区；开尔文源极  

0 .引言  

相比于硅器件，以碳化硅金属–氧化物半导体场效应晶体管(metal-oxide-semiconductor field  effect transistor，MOSFET)为代表的宽禁带半导体 器件具有更高击穿电压、开关速度和温度容限，因此，在电力电子系统中的作用日益突显。然而，碳化硅MOSFET 在应用过程中也逐渐暴露一些问题，桥臂串扰即是一例。  

所谓桥臂串扰，即关断态开关管驱动端状态受到同一桥臂支路另一开关管开通或关断的干扰而产生扰动，扰动的栅–源电压和驱动回路电流分别被称为串扰电压和串扰电流，其中串扰电压对受扰开关管影响较大。桥臂串扰产生有2 个因素：其一，漏–源电压变化引起米勒电容充/放电，进而使驱动回路状态产生扰动；其二，变化的漏极电流在共源极端子寄生电感上产生压降，也使驱动回路状态产生扰动。相比于传统硅器件，碳化硅MOSFET桥臂串扰问题更严重。一方面，碳化硅MOSFET高开关速度使串扰电压幅值增大；另一方面，碳化硅MOSFET开启电压和最小可允许反偏栅–源电压绝对值较小，这使受扰碳化硅MOSFET 驱动端可靠偏置区间减小。因此，分析碳化硅MOSFET桥臂串扰发生过程，并提出相应解决方案，将有利于提高碳化硅MOSFET 工作可靠性。  

已有文献提出诸多模型来计算串扰电压。文献\[8\]建立串扰电压分阶段时域模型，该模型能够反映串扰电压变化趋势，但难以直观分析串扰电压受各因素影响程度。文献\[9\]忽略驱动回路寄生电感，并假设开关管漏–源电压变化率和米勒电容为恒定值，得到串扰电压极大值表达式，但对该模型缺乏必要理论推导和分析，该模型精确度尚不清楚。文献\[10-11\]将主动管等效为电压源，从而解出串扰电压传递函数，该模型精确度需要经实验进一步验证。此外，MOSFET 有无开尔文源极，其桥臂串扰现象不同，但相关文献对此差异分析不足。针对桥臂串扰问题，已有文献和主流厂商提出诸多解决方法，这些方法可大致分为3 类： 

1）被动改变驱动回路阻抗。  

其思路为利用二极管单向导通性，使关断时栅极外电阻小于开通时栅极外电阻，或在栅–源极间增加辅助电容，两者目的都是为米勒电流提供栅–源电容低阻抗旁路，从而降低栅–源电容充/放电速度，最终减小串扰电压极值(绝对值)。然而，关断时栅极外电阻小于开通时栅极外电阻，即栅–源电容充电旁路阻抗小于放电旁路阻抗，这导致只有正极性串扰得到抑制；而直接增加辅助电容会减缓开关管开关速度，这将导致碳化硅MOSFET高开关 速度性能降低。 

2）在驱动回路中增加有源钳位支路。  

有源钳位支路一般由辅助电容串联控制管构成，控制管在桥臂串扰产生前及时导通、在桥臂串扰结束后及时关断，从而既能使辅助电容对米勒电流分流并最终减小串扰电压极值(绝对值)，又能不影响开关管开关速度。该方法有2 点不足：其一，当栅极内电阻较大时，桥臂串扰抑制效果不明显； 其二，当开关管截止态驱动电平为0 时，其串扰电压正向阈值偏小。 

3）采用可变电平驱动电路。  

其基本思路为2 个驱动桥臂产生四电平驱动电压，在桥臂串扰产生前，驱动电路根据串扰电压极性及时调整驱动电平，进而使串扰电压不会超出可靠偏置范围。如果串扰电压出现振荡现象，在实际工程应用中，既难以准确预估串扰电压极性时变情况，又难以及时改变驱动电平，因此，该方法仅适用于单个串扰过程中串扰电压极性不变的情况。相比于常规驱动电路，四电平驱动电路加快漏–源电压和漏极电流变化速度，这会削弱桥臂串扰抑制效果。此外，为避免开关管驱动侧过压击穿，四电平驱动电路最高电平需要明显低于最大可允许正偏 栅–源电压，于是作为次高电平的饱和态驱动电压可能偏低，从而增大开关管通态损耗。  

针对上述问题，本文对碳化硅MOSFET 桥臂串扰做全面分析，并提出解决方案。首先，建立碳化硅MOSFET 桥臂串扰电路模型；其次，分析该电路模型全部暂态过程，以阐明桥臂串扰产生原因和具体现象；而后，建立桥臂串扰电压极值简化模型，并由此建立基于桥臂串扰的安全工作区模型；之后，分析各驱动参数对所提安全工作区影响，并由此提出具有桥臂串扰抑制功能的新型栅极驱动电路；最后通过仿真和实验，验证所提桥臂串扰模型的可行性，和所提新型栅极驱动电路的有效性。  

1. 碳化硅MOSFET桥臂串扰电路模型

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMBX2MzGAZG827iceVk66NF50icuUnmNSWRw1JQiaTVXicMbeUNjE1xsdLcSDnm6sm0c5bG4D3kVPNr0BS20L89zSIdyZia0EIms55M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMgkv6pX0jCBpK4GVh1IV8YyibJ01HNYiaWIEZI35xiaFmB2kC1FX81HZooVO64zsdlecTWdl16f9kpWc3VZqth60tHwibPws669jQ/640?wx_fmt=png&from=appmsg)

半桥拓扑为构成诸多功率变换电路的基本结构，可用来研究桥臂串扰特性。图1 给出一种半桥拓扑电路模型，用来研究上侧主动管US 对下侧受扰管LS 的串扰。图中：VDC为直流母线电压；IL为负载电感；RG(ex)为栅极外电阻；LG(ex)、LP(ex)分别为驱动回路和功率回路中除去开关管端子电感外的寄生电感总和；下标后缀“U”和“L”分别为上管和下管相应参数。为便于暂态分析，图1 还规定电路工作时主要电流的正方向。  

开关管模型按有无开尔文源极分为源极解耦和源极耦合2 种情况，分别如图1(a)、(b)所示(下文分别称这两者为源极解耦电路和源极耦合电路)。开关管模型考虑极间电容、体二极管和端子寄生参数等，以源极解耦开关管为例，LG(in)、LD(in)、LS1(in)、LS2(in)分别为由封装产生的各个端子寄生电感；Cgs、Cgd、Cds 分别为各极间寄生电容；RG(in)为栅极内电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOueNfUyfrOrFhlic8HGwxsLem0u9JlvOt9RnoFPbZn2EPraibgIoezpFhnNbYd12eIRkvqfiahm6trbItPa8lmaGDW2MFJv5JAQc/640?wx_fmt=png&from=appmsg)

  
表1 列出本文主要变量、常量及其简要说明， 部分变量和常量具体含义可由下列各式表示，其中m∈{U,L}(下同)。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPKwO2oGs9UkQgdIh6rpicDTbDDxsbViba5P6b6oj2E2Tadl9ThFpzE9ymv9OMAp9h8rVvuTdfHNsZyhTrPWz4BILH4aRdIEBnyY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtuN3qemJ4ec8xdwbTpW9urcm3rBicrSFzy1vnJl28DERf8FaUNemqsWFBUMG48aSVNMSR9ictzuKeOvxDicbJZ3dz3plqibJY70M/640?wx_fmt=png&from=appmsg)

式中Cr、Ci 和Co 大小与漏–源电压有关，但Ci 受漏–源电压影响较小，一般将其视为常量。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNDVutWxVQLh5c7UicJKvpiaNVntxfCQUUaNiaSr0keF9aVkvezTiajVgrj0DXtxEfA02OwVrpGDedfmxhOXvnWQyZUzkzcQAmblNE/640?wx_fmt=png&from=appmsg)

图2 为某型号碳化硅MOSFET 反向传输电容、输入电容和输出电容，随漏–源电压变化特性。该开关管具有开尔文源极，如果不采用开尔文源极，也能使其以源极耦合连接方式工作，本文以该开关管官方Pspice 模型为核心进行仿真。

2. 碳化硅MOSFET桥臂串扰分析  

2.1 串扰电压波形影响因素  

对于源极解耦电路和源极耦合电路驱动回路，由基尔霍夫电压定律分别可得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPO0PWG0p1Z7AGYMkO5KU5XWAF4a1ZVW0jTflOnOAkBMzibHZ5fibbDWeyibcu3RZ5BickicJ2HVKNvYMScicjhWDvKsynvOxQPV5A9I/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOgvgAA33uY3kcIP6wWNyQSb80L6qBXSUzEFEXcIcfUdhwQBia9VrkppMSdLyRcicyZqx1AoY0ICMTkcASxp4CxNqg53C4CuLqbM/640?wx_fmt=png&from=appmsg)

由基尔霍夫电流定律可得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNmzJJOjMvCia7jfhodqWFTRcByspLsmrpqcmCAR6wsKzZMKIPxpjyWSDwk51d3BRrT16Kq3wib52DkLG2BRJWYBhM6g75ibYTXTs/640?wx_fmt=png&from=appmsg)

取m=L，由式(1)、(9)与(11)，可得源极解耦电路串扰电压解析式：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNAKqkVll5fHUnMd4ias9eSxL0Ncl0ud1xNU6aIichL6MzeRqkvn5evw5OX05vquvL8iaVictTrd8jZlpicic8Kz1X1fciaHFVvCTPe48/640?wx_fmt=png&from=appmsg)

取m=L，结合式(1)、(10)与(11)，可得源极耦合电路串扰电压解析式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNqLfBSWuibVFzoOUhcpLXmyIwaLtzhxAS4QIFTgp4UvXB9yq435xUjQV9SZvD7Ch2ZicXz0mhJI5X1sWcg5ic0siaehwNnR6IPNdQ/640?wx_fmt=png&from=appmsg)

由此可知，源极解耦电路△vgs\_L由vds\_L唯一决定；而源极耦合电路△vgs\_L主要由vds\_L与vLS\_L共同决定。式(12)、(13)分别由图3(a)、(b)描述。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPDCCYpPbQQxUmzic6U3cE7iblib0nht7O9M4xww6AAowF8BnftDaUql6dhAuIrTsW9yoNsqGkSBvN7Uy3dmVr7UuX4aCtQBufH3I/640?wx_fmt=png&from=appmsg)

2.2 桥臂串扰电路暂态分析

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMdm2utOzXxsybc1mxkOegjwjx8ttrKp0Ky0GpTRcDbibmnhgIDic0svtUuCtia3VxVVahHdd7H4lrGyaJyKybk69awm6zWiaSibvrI/640?wx_fmt=png&from=appmsg)

桥臂串扰电路在上管开关过程的主要暂态波形如图4 所示，依据源极解耦(耦合)时上管暂态波形变化特点，标示出重要时间节点tj(t'j)，j∈{0,…,9,  a,b,c}，表2说明这些时间节点具体含义。由于vgs\_U暂态过程时间较长，t4(t'4)和t9(t'9)未在图4 中标出。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO6d5tXYyddbIfIcqgTncz4ppVUeicFSm7pic4TJsFIAL3hLgDJiackFricM6rrzvP6NqgLmQaklKn7oyC5eMZoOwj8SIDDeQYGicicM/640?wx_fmt=png&from=appmsg)

由基尔霍夫定律得到半桥拓扑电路在暂态过程的恒等式：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPo8hVD4uibssKYK6L9uFEA5IoZSJbib2ibIzmnvicnFQmNPVNm2JnwmQRico5roCkVrdAtLJdEnlRCAB2NeqNjibBqtWqjxKefnM3iag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPgewVHmMa8tE88yQam7QaiaAuHWBdI11ojAXFmiaNs4uvVwQq2bqVCk80HQC4dv9HZbvryBsWLGgPHbVwecs0lib1BfpaCfbhxp0/640?wx_fmt=png&from=appmsg)

其中，由式(14)可知，diD\_U/dt=diD\_L/dt，即iD\_L始终完全跟随iD\_U变化；由式(15)可知，若忽略LP，vds\_L将完全跟随vds\_U反向变化。  

此外，在式(11)中取m=U 可得：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNVkhl4zOwUvFT1Rt7YouFjMxGTkEE3zkx1Zj8CSwxUmwtaAyuMNtPOTTKGzWvrIZRGJAsgBdI8Ha8THlaBPIdRmISNIXKVhIU/640?wx_fmt=png&from=appmsg)

取m\=U，结合式(14)、(15)与(17)可得：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNmZvJ1yNRLickZJdRkGB3OP0mJn4wfMZvibeIt7C9ibyr1ibsrUs3icDxtve7nicr7JsxcMILqw4Dgc2XJuhsf6AEWPtdPjaFR1H66w/640?wx_fmt=png&from=appmsg)

下文以源极解耦电路为例分析主要暂态波形的变化。 

1）上管关断延时阶段(t0—t1)。  

此阶段上管处于可变电阻区。vgs\_U由于上管驱动器开始作用而减小，由此导致上管沟道电阻增大，而iD\_U 钳制在IL，于是由欧姆定律可知vds\_U将增大，但此阶段vds\_U增幅通常远小于VDC，可忽略不计。 

2）vds\_U波形上升阶段(t1—t2)。  

随着vgs\_U减小与vds\_U增大，上管进入恒流区。 恒流区特性为沟道电流仅受栅–源电压控制，两者关系可由一个二次函数模型近似表示，具体应用到此上管为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP4ibUYvpDKziaBSUGYLh94k6QiaIjYBicHHuW1WhtKc4KPvJwmhkqcMhg22kicOcwhX0ibc20icUibVQeDp0p4pXHQdgzMlgqn847UYc4/640?wx_fmt=png&from=appmsg)

式中β为取决于此开关管几何尺寸和结温的常量。 将式(16)代入(20)可得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOl1Oic7kqB2iccaiaw2pWTCbfc2YMzAAnOARZKbf5A5jrEjJT1RnphwI8Rpgnt7CqZGMS1QaGnib2j1mARicKEiaSOwaxVic4YryQnJE/640?wx_fmt=png&from=appmsg)

当iG\_U 给定后，此阶段vgs\_U、vds\_U、iD\_U 的暂态波形由式(18)、(19)、(21)确定。在t1—ta 期间， 较小vds\_U对应很大Cr\_U，由式(18)可知，即使驱动回路电流iG\_U全部来自Cr\_U放电电流，vds\_U增速也相对较低；同时，较大vds\_L对应很小Co\_L，进而由式(19)、(21)可知，iD\_U和vgs\_U基本维持不变。在ta—t2期间，Cr\_U因vds\_U增大而迅速减小，由式(18)可知，这导致vds\_U增速升高，进而由式(19)、(21)可知，iD\_U和vgs\_U有所下降，图4(a)显示在此期间iD\_U和vgs\_U下降现象非常明显。

由vds\_U 在此阶段变化特点可知，vds\_L 在t1—ta期间减小速度较小，在ta—t2 期间减小速度较大。 

3）iD\_U波形下降阶段后期(t2—t3)。  

vds\_L 减小至-VF 后，由于D\_L 正向导通而不再变化，若忽略LP，此时vds\_U 也将停止变化。进而由式(18)可知，此时iG\_U 全部用于Ci\_U 放电，vgs\_U和iD\_U 随之快速减小，直至vgs\_U 减小至VTH、iD\_U相应减小至0。实际上LP总是存在，因此，vds\_U波形存在一定程度上的过冲现象。 

4）上管可靠关断阶段(t3—t4)。  

驱动器一般采取反偏电压来实现开关管可靠关断，因此，上管驱动器在此阶段继续使Ci\_U放电，vgs\_U逐渐趋于VGN。 

5）上管开通延迟阶段(t5—t6)。  

上管驱动器开始给Ci\_U充电，vgs\_U开始增大但尚未达到VTH，因此，上管实质上仍处于关断状态，vds\_U、vds\_L、iD\_U、iD\_L皆未发生变化。 

6）iD\_U波形上升阶段(t6—t7)。  

在t6—tb 期间，iD\_L始终为负值，D\_L保持正向导通，vds\_L 钳制在-VF，若不考虑LP，由式(15)可知，vds\_U钳制在VDC+VF。又由于vgs\_U超过VTH并 继续增大，上管进入恒流区，式(21)再次成立。因此，iD\_U将随vgs\_U增大而增大。tb—t7为D\_L反向恢复过程前期，在此期间，iD\_L 为正值且逐渐增大，vds\_L略有增大。  

实际上，iD\_U和iD\_L增大将在LP上产生正极性压降，由式(15)可知，这导致vds\_U有所减小。 

7）vds\_U波形下降阶段后期(t7—t8)。  

t7—tc 为D\_L 反向恢复过程后期，iD\_U、iD\_L 同步减小，但仍大于IL，则由式(19)可知，vds\_U 波形快速下降。上管在该期间仍处于恒流区，进而由式(18)可知，iG\_U大部分用来给CgD\_U充电，导致vds\_U波形快速下降，而vgs\_U变化较小。在tc—t8期间，D\_L的反向恢复过程已经结束，iD\_U和iD\_L基本保持不变，进而由式(19)、(21)可知，vds\_U 和vgs\_U 也基本保持不变。  

不考虑LP 时，vds\_L 严格跟随vds\_U 反向变化，在t7—tc期间快速增大，在tc—t8 期间缓慢增大。实际上，在t7—tc 期间，iD\_U 和iD\_L 在LP 上产生负极 性压降，当此负极性电压足够大时，vds\_L波形将出现明显过冲现象。 

8）上管饱和导通阶段(t8—t9)。  

驱动器采取足够高正偏电压来实现开关管饱和导通，因此，上管驱动器在此阶段继续给Ci\_U 充电，于是vgs\_U趋于VGP，而vds\_U趋于VSAT。  

2.3 桥臂串扰电压波形变化趋势  

源极解耦电路△vgs\_L由vds\_L唯一确定。如图4所示，vds\_L 在上管关断过程先钳制在VDC—VSAT， 再快速减小，后钳制在-VF，这导致△vgs\_L 先钳制 在0，再逐渐减小，后又逐渐增大至0，即△vgs\_L发生负极性扰动并产生一个极小值△vgs(min)\_L；反之，vds\_L 在上管开通过程先钳制在-VF，再快速增大，后钳制在VDC—VSAT，这导致△vgs\_L先钳制在0，再逐渐增大，后逐渐减小至0，△vgs\_L发生正极性扰动并产生一个极大值△vgs(max)\_L。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPc66BCZNBQ0Dw9pGFmrbemYUZdWiaeFNjmynjiaribw7ibDopHpZ2FGwVE5UfUYPowrEv3dlGo6eYBg2kg0pvOgvkLSM9OytvNZaQ/640?wx_fmt=png&from=appmsg)

源极耦合电路△vgs\_L可分解为△vgs1\_L 与△vgs2\_L，如图5 所示。△vgs1\_L由变化的vds\_L产生，这与源极解耦电路△vgs\_L 相同，△vgs1\_L 在上管关断过程发生负极性扰动，在上管开通过程发生正极性扰动，△vgs1(min)\_L和△vgs1(max)\_L为相应极小值和极大值。△vgs2\_L由变化的vLS\_L 产生，下面分析△vgs2\_L变化趋势。  

在上管关断过程，iD\_L 变化趋势依次为钳制在0、减小、衰减振荡并渐趋于-IL；而vLS\_L 变化趋势依次为钳制在0、保持负极性、衰减振荡并渐趋于0。这导致△vgs2\_L先钳制在0，再逐渐增大，后又逐渐减小至0，即△vgs2\_L发生正极性扰动并产生一个极大值△vgs2(max)\_L。在上管开通过程，iD\_L变化趋势依次为钳制在-IL、增大、减小、衰减振荡并渐趋于0；而vLS\_L变化趋势依次为钳制在0、保持正极性、保持负极性、衰减振荡并渐趋于0。这导致△vgs2\_L先钳制在0、再逐渐减小、然后逐渐增大、最后衰减振荡并渐趋于0，即△vgs2\_L发生明显负极性扰动并产生一个极小值△vgs2(min)\_L。  

由上文可知，对于源极耦合电路，无论是在上管关断过程，还是在上管开通过程，△vgs1\_L和△vgs2\_L扰动极性都相反，因此，△vgs\_L波形波动特点由△vgs1\_L波形和△vgs2\_L波形的扰动幅度相对大小决定。  

3. 串扰电压建模及其分析  

3.1 源极解耦电路的串扰电压极值  

根据约束条件简化程度可得以下4 种串扰电压极值模型。 

1）模型1(仿真)。  

以t0 为初始时刻，在不考虑LG\_L的条件下，求解式(12)并代入相应初始条件可得：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN6rkHxzR1Bu61Y4nB8NN45l3THzBiaCqendochoTW68kBXQfxBlvxBmICnDXwZtzpkhNAqFWLugDibfGmZfecUaZHk7LCXXK08U/640?wx_fmt=png&from=appmsg)

式中：RG\_L可通过式(3)计算得到；Ci\_L近似为常数，可由开关管的数据表直接读出；Cr\_L 可通过开关管电容特性曲线拟合得到；变量vds\_L(t)难以直接得到，一般需要建立开关管模型并借助电路仿真才能得到。因此，虽然该模型能够得到任意时刻串扰电压值，但求解过程复杂，且求解精度很大程度依赖所建开关管模型的准确性。 

2）模型2。  

由于vds\_L 波形非线性部分主要发生在串扰过程始、末阶段，假设vds\_L波形在串扰过程线性下降或上升。在不考虑LP的条件下，vds\_L变化区间约为\[0,VDC\]，记λr 和λf 分别为vds\_L 波形在上升过程和下降过程平均变化率，将此约束条件代入式(22)，可解得△vgs\_L极大值和极小值分别为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpME1twhrC1icu9icQTLrk0ib8HOauBH0GlYLx7QrhibBV4iaMibEYlsJNPtIfSWC4lDRSiciawHHUxbNn4PYzqkAmCmRBDsvIicocrCGVKk/640?wx_fmt=png&from=appmsg)

3）模型3。  

在模型2 基础上，进一步取Cr\_L 为函数Cr\_L(vds\_L)在区间\[0,VDC\]上的平均值，即令：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOIbich3CGbJic56sWczvRbeicVXgc8ia2KtJsbguiccWibB3xxPrAMoUl94F2NzF4kLvprvalswQaWCFuL1AD2ZiavSv6uNGhp0FslyA/640?wx_fmt=png&from=appmsg)

则：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUGOe5ycZmok82cUQicsRQA3kia9h1wzYQ8zaeia99fdzibFQK5UicmiawiaficVSXiaU4BtuibEia3UQR1roadib9tzZetF8vK4cljunQpP0/640?wx_fmt=png&from=appmsg)

4）模型4。  

以t0 为初始时刻，在不考虑LG\_L的条件下，对式(12)两边关于时间求定积分可得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNuhiaZOKVHOJ1OtKXZs4CPRqqu31KgupuK2qdG7bwQic9TlibprblOcAIzrvYVWWXibR8VYoSagLSVw83vv1X7GnDpPTASyc8EhlA/640?wx_fmt=png&from=appmsg)

假设△vgs\_L在串扰过程线性变化，在不考虑LP的条件下，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPq7xsfVxicNm02TmLVia1cAUzcozmxXT4VU9EBnCgHDnubOAUgskcYTs1Xib6B4agoKVXuuey2ia82ibHrSuanyZ6djzxwdZbQMZvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOUt091DF217ciakaxb9NLgFZgK1jyHZu4VTm2SGUZXzOQPnURrmvL3jvzTgib9MbXDPGLT6P1MWKibdEjdp3lTQ37OtRMf8mKOJY/640?wx_fmt=png&from=appmsg)

图6 比较上述4 种模型求解结果。其中，RG\_U=RG\_L\=15.5Ω；IL=10A；LG\_U\=LG\_L\=LP\=0。由图可得，简化模型2—4串扰电压极值与电路仿真值符合程度较高，且各简化模型均能准确反映串扰电压极值随VDC变化趋势，这说明各简化模型的实用性。其中，模型2在总体上最符合模型1，这是因为模型2约束条件简化程度最小。  

3.2 源极耦合电路串扰电压极值  

1）模型5(仿真)。  

在不考虑式(13)中LG\_L\-2LS(in)\_L条件下，单独分析vLS\_L对△vgs\_L作用，可得：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMko2mPuvicBnzm8lOdkrwhcypy8jbnWrXgM54nibKP208t2IuZdmRkQgcDBjOfC5NS1iad3PB69lHJwZK9LP5TGFBDd5X2rOtXZ0/640?wx_fmt=png&from=appmsg)

以t0 为初始时刻，求解式(31)并代入相应初始条件可得：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOPjMUZQgfdicp2SrITmATFwmbSsG2QRVficJYwxaIkBlDejL95HbD9SmT7hbC3IAc9YJFkomzoufQzwZDx0IQYI93qHdmmd4nHQ/640?wx_fmt=png&from=appmsg)

2）模型6。  

变量iD\_L(t)需要借助电路仿真才能得到，为简化计算，可对其进行线性化处理。在不考虑LP的条件下，iD\_L在上管关断过程变化区间为\[-IL,0\]，记ξf为iD\_L 波形在下降过程的平均变化率；iD\_L 在上管开通过程变化区间为\[-IL,IR(max)\_L\]，记ξr为iD\_L波形在上升过程的平均变化率。IR(max)\_L为iD\_L 极大值，由体二极管D\_L反向恢复特性和电流iD\_L变化率决定，可近似为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN4LZa6AnWAdKwpD1xg6dMozvc0V4VHIhMhI0n7K8gJhG2FfV2BSPIJl4qKWhx9ichUdL6Xo4CgwK1ZNw0iamkjAODd1TD4dVLTg/640?wx_fmt=png&from=appmsg)

式中：QR为体二极管D\_L反向恢复电荷；SR为体二极管D\_L软化系数。将上述iD\_L线性化约束条件代入式(32)，可得△vgs2\_L极大值和极小值分别为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNibCicOgIV7Z7v1W4F3UvNaP4wq392eK1o9Bgvw4YW6ThpoFJHulBP3BJjvUdOmPn1NcecgBBX3fLcsxr6yC1zxzUx2M5wLvq3Y/640?wx_fmt=png&from=appmsg)

图7 显示模型6 在IL取值不同时的计算值。其中：RG\_U=RG\_L\=15.5Ω；VDC=500V；LG\_U\=LG\_L\=0；LS(in)\_L\=5nH。由图可见，△vgs2\_L极值(绝对值)随LG\_L增大而增大。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOPNl10BlymvuPoiblTDZlHicyF9YQJaQWM71Rx9wBgHMicXH9btmdvTqEguTniaK3ZImzXerpYS0E4VKic5t7ExqNMNKtdKwibRtAbc/640?wx_fmt=png&from=appmsg)

图7 给出相应电路仿真结果，可见模型6 △vgs2(min)\_L 与电路仿真值符合较好，而模型6  △vgs2(max)\_L 与电路仿真值符合较差，原因为iD\_L 波形在下降过程线性度比在上升过程线性度更差。  

△vgs\_L波形波动特点由△vgs1\_L波形和△vgs2\_L波形扰动幅度相对大小决定，由式(32)可知，△vgs2\_L与LS(in)\_L呈线性关系，LS(in)\_L增大将使△vgs2\_L波形扰动幅度增大，进而使△vgs\_L波形波动特点发生变化。图8 显示LS(in)\_L取值不同时△vgs\_L仿真波形。其中：RG\_U=RG\_L=15.5Ω；VDC=500V；IL\=10A。以上管关断过程为例，当LS(in)\_L较小(≤5nH)时，△vgs2\_L 正极性扰动也较小，△vgs\_L波形变化趋势主要由△vgs1\_L决定，△vgs\_L波形整体呈负极性扰动；与之相反，当LS(in)\_L较大(≥10nH)时，△vgs2\_L正极性扰动也较大，△vgs\_L波形变化趋势主要由△vgs2\_L决定，△vgs\_L波形整体呈正极性扰动。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN5TjasjJvHwnt2Hp0V3o0EtdNOeEIUa1S2hw5q7MpVZ5iaHbAxNssHADlQEHqJZYoxTwlTUtia8462xcYjp7IYwouAA6WicQf5Y0/640?wx_fmt=png&from=appmsg)

3.3 电路寄生电感影响  

半桥拓扑电路寄生电感会对串扰电压产生一定影响。以源极解耦电路为例，LG\_L的存在将改变驱动回路阻抗值，从而改变串扰电压波形；LP的存在将使vds\_L产生过冲，从而间接改变串扰电压极值。 

1）模型7。  

先分析LG\_L 对串扰电压影响。设Cr\_L为定值Cr(aver)\_L，vds\_L在串扰过程线性变化。记vds\_L单调递增区间为\[tp,tq\]，vds\_L变化率为λr，对式(12)求解得 在vds\_L增大过程串扰电压：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMLRopIrI07Ek8crxnx7j6xKal9iasluLhn45ChZaW33GicPdY1D3O0f8BotrmAwHaoA8BscN1ribVoZ5bQbtnNDicxT2nl0DcLN1M/640?wx_fmt=png&from=appmsg)

函数f(t)定义为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpON5aCHBkic6X0WypG5fTqf69zia3ibwGfTkHJmwhz5IrcsIpa6UG0ribdZFfRX5S442pvngdnOT5oVZjCxmpViaXmaS9xuNDIxIpTk/640?wx_fmt=png&from=appmsg)

图9 为LG\_L取值不同时串扰电压极值。其中：RG\_U=RG\_L\=15.5Ω；VDC\=500V；IL\=1A。由图可见，模型7 的串扰电压极值(绝对值)随LG\_L增大而增大，仿真结果也印证了这一变化趋势。同时可见，当LG\_L较小(＜2nH)时，串扰电压极值(绝对值)变化相对较小。通过改善电路设计，可充分减小驱动回路寄生电感，因此，通常可以不考虑其对串扰电压极值(绝对值)的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOL8zmfqQwOqYTPjJQ9tSKMSLIvpyro3cU3cIfHr9ZcEIuWLnHhAgZc0qAQR7hQ1slIStU9hVUt3uyWQxvuRMEpQl1n2FGlOVI/640?wx_fmt=png&from=appmsg)

2）模型8。

再分析LP对串扰电压的影响。vds\_L过冲现象发生在上管开通过程，过冲幅度可近似为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMXVgAiaokpFhc65LjxPqFe9f4KBbmvIibj9kbvR9t75VkzBaqKPCAZRRTmrWkh14Mn0G7txvGCuXP0gu2EOXibgwatPUDDTaL584/640?wx_fmt=png&from=appmsg)

在模型2 的基础上，考虑LP后，正极性串扰极值应修改为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOZ35ibm8iciaduD6ibKA6VWzvAVee3oMhyGeiaQll8UssA7RLyHiadEMkRxpc9d3T93fkSTdZn1Gakrn5Q7D9lPibWnWhBA8VNicHl2p0/640?wx_fmt=png&from=appmsg)

图10显示LP对串扰电压的影响。图10(a)—(c)依次是-(diD\_L/dt)|t=t'c、△vds(os)\_L和△vgs(max)\_L关于LP变化的曲线，可见随着LP增大，△vds(os)\_L和△vgs(max)\_L基本呈线性增大趋势。图10(c)比较式(41)的计算值和电路仿真值，可见两者变化趋势一致。图10(d)— (f)依次是部分LP 值下的iD\_L、vds\_L、△vgs\_L 仿真波 形，可见当LP足够大(>2nH)时，vds\_L波形出现明显 过冲和振荡，这进而导致△vgs\_L波形振荡。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNcdSpqMVBy1xohaLpiajx8jTGsM2wSpVlqyhK79G61OSdpozIFVoqhibnFkPFOjBOokxUVpeDZCSTmlZquC33gpL0RtAGxcSpwY/640?wx_fmt=png&from=appmsg)

3.4 λf、λr、ξf、ξr大小的影响因素  

λf、λr和ξf、ξr分别为衡量vds\_L和iD\_L平均变化速度的参数。vds\_L和iD\_L的快速变化主要发生在t1—t3(t'1—t'3)和t6—t8(t'6—t'8)期间，在此期间，当iG\_U 给定后，结合式(18)、(19)、(21)可求解iD\_U。 由式(14)可知，iD\_L始终完全跟随iD\_U变化，于是可以确定iD\_L，又由式(17)可进一步确定vds\_L。因此，vds\_L 和iD\_L 的变化过程，即λf、λr、ξf、ξr 的大小由式(14)、(17)—(19)、(21)的参数决定。对于给定开关管的半桥拓扑电路，当其驱动电压vG\_U、驱动电阻RG\_U、功率回路电感LP、和开关管结温确定后，λf、λr、ξf、ξr仅与VDC、IL有关。图11 显示了-λf、λr、-ξf、ξr与VDC、IL的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP9Wbehyib20bsThEyFXAcBD9AernibWXR1Ygtl7AZibEREQpmm2LcbkraUDdQGibhOpyD9IpZEPkPeiaWcDKBiacmRgewtI9H0o8SEo/640?wx_fmt=png&from=appmsg)

3.5 基于桥臂串扰的安全工作区  

若使半桥拓扑电路能够安全工作，受扰管应该保持可靠关断状态，这要求其栅–源电压既不能高于开启电压VTH，也不能低于最大反偏栅–源电压VGS(min)，否则将导致上下管同时导通或受扰管栅–源极间反向击穿。因此串扰电压应保持在区间\[VGS(min)-VGN,VTH-VGN\]，VTH\-VGN和 VGS(min)\-VGN分别是串扰电压的正向阈值和负向阈值。  

由本节前述分析结论可知，对于确定碳化硅MOSFET选型的半桥拓扑电路，影响串扰电压极值的主要因素为电路母线电压和负载电流、功率回路寄生电感、主动管驱动速度和受扰管驱动回路阻抗。电路板经过加工完成后，其功率回路寄生电感不会改变。此时，若上管和下管驱动条件也确定不变，则串扰电压仅与电路母线电压和负载电流有关。于是，对于源极解耦电路，综合考虑模型2 和8，则要求串扰电压极值满足式(42)。对于源极耦合电路，当LS(in)\_L较小时，可将△vgs(min)\_L缩小至△vgs1(min)\_L、△vgs(max)\_L放大至△vgs1(max)\_L，同样要求串扰电压极值满足式(42)；当LS(in)\_L 较大时，可将△vgs(min)\_L缩小至△vgs2(min)\_L 、 △vgs(max)\_L放大至△vgs2(max)\_L，由模型6 可得串扰电压极值需满足式(43)。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnKd0ZoN813RHFw4bPF0GfzUT3IMY25JXx7iaWyI9fM9fkcnpAukQ9AhPwljKC3GxLtFdr0IrKdhva7XHC5XS1qOAqibciaDmFQ4/640?wx_fmt=png&from=appmsg)

对于以半桥单元为基本结构的功率变换电路，其单个桥臂上管和下管通常交替互为主动管和受扰管，但考虑到其各开关管及相应驱动电路参数基本一致，因此，式(42)、(43)确定了其基于桥臂串扰的安全工作区，即母线电压和负载电流的安全工作区间。该安全工作区衡量桥臂串扰对功率变换电路工作可靠性的影响程度，该安全工作区越大，桥臂串扰影响越小，因此，扩大该安全工作区与抑制桥臂串扰在本质上是一致的。  

4. 改进栅极驱动设计  

除去降低驱动回路和功率回路寄生电感外，桥臂串扰有效抑制策略只能是改变栅极驱动条件。对于主动管，减小正偏驱动电平和增大反偏驱动电平、减少驱动电流、增大驱动回路电阻、在栅–源极间增加辅助电容等，都能减缓其驱动速度。由式(42)、(43)可知，这些措施将减缓受扰管的漏–源电压、漏极电流变化速度，并最终减小串扰电压极值(绝对值)。但是，减缓开关管开关速度会增大开关损耗，从而降低功率传输效率。因此，通过改变主动管驱动参数来抑制桥臂串扰不具有工程应用价值，必须针对受扰管进行驱动参数调整，这需要在一个驱动周期内分别多次调整上、下管驱动参数。  

对于源极解耦受扰管，串扰电压具有明确可预测的极性，其桥臂串扰抑制方案是通过改变其驱动电平来增大串扰电压阈值(绝对值)，或改变其驱动回路阻抗参数(栅极外电阻和外栅–源极间辅助电容)来减小串扰电压极值(绝对值)。对于源极耦合受扰管，其串扰电压波形与共源极寄生电感大小密切相关，串扰电压极性难以预测，驱动电平、驱动回路电阻和辅助电容对串扰电压的作用都与共源极寄生电感大小密切相关，也都是不确定的。因此，其桥臂串扰抑制方案是尽可能减小共源极寄生电感，使受扰管漏–源电压和耦合电感折合压降对串扰电压的作用充分抵消，从而抑制桥臂串扰；或使受扰管耦合电感折合压降对串扰电压的作用可忽略不计，然后采用源极解耦开关管桥臂串扰抑制方案。总之，除减小共源极寄生电感外，桥臂串扰抑制方案关键内容为，针对源极解耦开关管设计具有桥臂串扰功能的新型驱动电路。  

为克服传统四电平驱动电路和有源钳位驱动电路的不足，并结合它们的优点以增强桥臂串扰抑制能力，同时结合源极解耦开关管桥臂串扰抑制方案，本文提出如图12 所示的一种新型栅极驱动电路。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNClgwiavvkupCib32c0bp0Z0g3wdVDAOkoz3ZkK1s6uP9Lt8mDM6o7icregdESQKhWssBt1mKCFxzWsw9iaWdh4atNPywdKLnZBWA/640?wx_fmt=png&from=appmsg)

该电路具有三级驱动电平，分别为正偏驱动电平VGP、反偏驱动电平VGN和0电平，该电路还具有2个独立有源钳位支路。下文以下管为受扰管(对应模态6—8)对该电路做简要说明。  

将受扰管以略大于VGS(min)的反偏驱动电平VGN关断，可增大串扰电压正向阈值。然后，再立即将S2\_L设为高电平，从而通过辅助电容C1\_L对米勒电流分流作用来减小正极性串扰电压极值。正极性串扰由此得到很好地抑制。在受扰管负极性串扰来临之前，将S3\_L设为高电平，这将使反偏驱动电源与栅极之间断路，同时使外封装栅–源极间短路，于是Cgs\_L可通过RG(in)\_L放电并使vgs\_L增大至0。一方面，vgs\_L提前增大至0 减小了串扰电压正向阈值；另一方面，通过栅–源电容旁路对米勒电流分流作用能减小负极性串扰电压极值(绝对值)。负极性串扰由此也得到很好抑制。  

相较于传统四电平驱动电路和有源钳位电路，新型驱动电路有以下特点：  

1）新型驱动电路同时通过驱动电平和辅助电容2 个因素来抑制桥臂串扰，抑制效果比传统驱动电路更好；  

2）新型驱动电路避免了传统四电平驱动电路饱和态驱动电平偏低情况；  

3）新型驱动电路避免了传统有源钳位驱动电路抑制正极性串扰能力弱情况。  

5. 实验结果  

5.1 测量和实验设置  

如图13，vgs\_L的测量主要存在2 个主要问题：一为实际测试点不能设在开关管封装内部，端子寄生电感和栅极内电阻的存在，导致所测信号vGS\_L与期望信号vgs\_L不一致；二为由电压探头和示波器组成的测量系统会产生测量误差，如探头前端寄生电感Lpi+、Lpi-和探头输入电容Cpi 的谐振导致测得结果v'GS\_L与所测信号vGS\_L相比振幅增大。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPPLBoxF4HSBuicqdkFUvqYAxbMuMuGibz6aB5ibjVGVMu7g2dnKjrTyic5sSDvriaXekTNA96ewicuCwhibCqzjMic1IPqiaQAbOfiaqxIA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO78AAUiaN2wXoe9yvQcYJUP4mycL3Sbwl3cib5Bek4SawtqB8JF8iaX5ZEh70ovCOM4x9mPaFIoJ55yR0dqBd9N1NThyO0rwmAVc/640?wx_fmt=png&from=appmsg)

若选择合适的测量设备，尽量减小测量误差，可以将v'GS\_L近似为vGS\_L。同时由图9 可知，若改进电路设计，尽量减小驱动回路寄生电感，当驱动回路电阻足够大时，则可以不考虑其对串扰电压的影响。设串扰发生前图13 所示电路处于稳态，记△v'GS\_L=v'GS\_L-VGN，易得各子图△vgs\_L和△v'GS\_L之间近似关系式为式(44)。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO1PPL0cEdicjp9iamMF6xDdPt1qStOh4IYTu0AMY1o6nPsgVeq73mhsmJ3djic9wOPiaYVCfvOdOUFP4AjulfyV3aTgm7slEc9Y9M/640?wx_fmt=png&from=appmsg)

半桥拓扑电路实验平台如图14 所示，其中，采用碳化硅MOSFET为具有开尔文源极的C3M0075120K，RG(in)为10.5Ω；VTH为2.5V；VGS(min)为-8V；该电路负载电感值为1mH。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOOAgAgkiaYWN3I0WYqrzFnZ0V46Skqc99rqibpicMnvibY3Dc0ANy7H7iboxuRBUlicdjH33U2Mv3KXZ7sR9zMibNphgzDkEJelicdSEo/640?wx_fmt=png&from=appmsg)

表3 列出测量设备及其规格。此外，下文中示波器MATH 通道串扰电压信号均由式(44)间接得到。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPn1GfHcB4Hia49hS65Yn09X5FT689JfTLKtiac1iakS5W81dh40qYiazV0WIRNeXxIYsv0QDxibpLZEzUGcicWdYzIBOlVqyobcBbWw/640?wx_fmt=png&from=appmsg)

5.2 实验结果分析  

1）对比源极解耦、耦合工作方式。  

通过是、否短接开尔文源极和功率侧源极构成源极耦合、解耦工作方式。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMiaHUJRkNYIFrlqU8CaRhNicJ0p6WLrcHk9717pzTgSw1IhHOGiby3Ey6GQdpw7aKia5NAQvfygpqicqjph6hcTWGWl2J6tp3MZTia8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPvfiaB01FbSlQDZBibeyFXicDguiaLDqckIR1QjOCKVARtvF5Vsbytal0ab1CxXdtQAh4YfgNHicZOc5WNagdeGvGAETibjPr5zCjX0/640?wx_fmt=png&from=appmsg)

图15 实验条件为RG(ex)\_U=RG(ex)\_L=22.3Ω，VDC=10V，IL=2.5A，共源极电感为8nH。可见，当受扰管源极解耦时，在主动管开通过程，串扰电压先增大后减小，极性为正；在主动管关断过程，串扰电压先减小后增大，极性为负。  

当受扰管源极耦合时，主动管开通或关断过程串扰电压极性都发生了变化，这与图5 所示串扰电压仿真波形极性变化情况一致。在主动管开通过程，串扰电压波形负极性波动较小，主要呈正极性；而在主动管关断过程，串扰电压波形正极性波动较小，主要呈负极性。这说明当源极耦合受扰管共源极寄生电感充分小时，其与源极解耦受扰管桥臂串扰抑制方案一致，为简便计，下文实验中受扰管皆采取源极解耦工作方式。  

由此可见，无论受扰管源极是否耦合，在主动管开通过程后期，受扰管漏–源电压和功率回路电流均存在过冲和高频振荡现象，这导致对应串扰电压波形出现同频振荡；而在主动管关断过程后期， 受扰管漏–源电压和功率回路电流无下冲和振荡现象，因此，对应串扰电压波形无高频振荡情况。  

 2）桥臂串扰电压极值模型验证。

按照图15 的实验条件进行仿真，以上管关断过程为例，对比源极解耦受扰管实验波形和仿真波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtoXeacrYNIPPHVMQzrYcPbljWd241IYsvOwSU3wAIT2dshqyVVYUrHl3KpicIbC3ibYM5GP3cZQ3olp7rAwvKXJjeUc0AK6Dy4/640?wx_fmt=png&from=appmsg)

如图16 可见，实验波形与仿真波形走势相似，两者极值较为接近。实验测得串扰电压波形滞后于受扰管漏–源电压，是因为不同通道信号延迟时间不同。 

3）新型驱动电路桥臂串扰抑制效果。  

图17—19 比较传统驱动电路和新型驱动电路桥臂串扰抑制效果，表4 给出相关参数对比结果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTyCoeJzW9OaMssQaGkY4QRjbrceKiakljDRIbywHZicPgy24g9Q4jiaM0OA3uZVqsZOINZtX5hw8dpX5H0718t8zKZM5bZQiaTVo/640?wx_fmt=png&from=appmsg)

可见，相比于传统驱动电路，新型驱动电路既有效减小了串扰电压极值(绝对值)，又增大了串扰电压阈值(绝对值)，这使得基于桥臂串扰的安全工作区明显变大，即显著增强了桥臂串扰抑制能力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPne2Xnfd96P7ENpUXZP3JaGzgjwN2x24pyic0CrDsjSkMibWX9Qe1dTsJeJ8Yp7Dgwlnxk8zFOOe2UHgpIAiaiaX4hC2ibglnYAPbY/640?wx_fmt=png&from=appmsg)

值得注意的是，有源钳位支路有源器件存在约为2.5Ω的通态电阻，因此，在主动管开通过程，新型驱动电路外栅–源极间并非真正短路，这导致图19 的v'GS\_L存在波动。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNZPLeXBSfLwdIDjec1SEfl0FEJ1IRXRkMx7TcvPtN4GujjnUKTqGodREyOPkJ9MpbRXcLlTaDT74hXRbicTeicIibk54XTyPM0X0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNicxq9IoZGRTiazImyNkMhryuDHJhxia8s7ZKKlH35Ok32beRG24ndia6c8oesDicEJAF287HCyI6vBVKhY80KibKeQpBz61s6whvr8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOoMyOyicc9cnQibPsoAn8BY2fb2kzicvrSQFdlzDukBRxHCfdPL3ZLNe0SEqRKptdnbXFa3rdHuMgLWVcYPtZEG40G317haaopAM/640?wx_fmt=png&from=appmsg)

此外，有源钳位支路的使用减小了驱动回路电阻，从而减小了驱动回路阻尼作用，使得驱动回路寄生电感和辅助电容谐振加剧了串扰电压波形振荡，因此，图18(a)和图19(a)的v'GS\_L有相对明显震荡现象。因此，若要进一步抑制桥臂串扰，就必须减小新型驱动回路寄生电感。  

6 .结论  

本文通过研究基于碳化硅MOSFET 桥臂串扰问题，主要得出以下结果。 

1）明确受扰管源极耦合与否对桥臂串扰的影响。当受扰管源极解耦时，在单个串扰过程串扰电压波形呈单极性尖峰脉冲状；当受扰管源极耦合时，在单个串扰过程串扰电压波形出现振荡。  

 2）建立关于桥臂串扰电压极值的一系列简化模型，反映各驱动参数、碳化硅MOSFET 参数和电路寄生电感参数等对桥臂串扰电压极值的影响。

 3）建立基于桥臂串扰的安全工作区模型，综合考虑驱动电平和受扰管外栅–源极间辅助电容2个因素，由此设计具有桥臂串扰抑制功能的新型碳化硅MOSFET 驱动电路，比传统驱动电路有更强桥臂串扰抑制功能。

本文工作还有以下3 点有待进一步完善： 

1）本文提出基于桥臂串扰的安全工作区模型，用于衡量桥臂串扰对功率变换电路(以半桥单元为基本结构)工作可靠性的影响，而没有给出该模型实际应用方法，即该模型参数测算、算法求解和实验验证等具体设计和实现方法。因此，后期工作将据此展开，并考虑结合基于碳化硅MOSFET 桥臂串扰的安全工作区概念和IGBT 系统安全工作区概念，建立碳化硅MOSFET系统安全工作区，用 于指导碳化硅MOSFET 的科学、可靠应用。碳化硅MOSFET 系统安全工作区大小将不仅直接受开关器件特性参数、功率回路寄生参数、控制信号延迟等影响，还间接受桥臂串扰影响。 

2）本文为简化分析和建模过程，未考虑开关管结温因素和驱动芯片输出端寄生参数。前者主要影响开关管开启电压、最小反偏栅–源电压和寄生电容，并间接影响开关速度，从而影响串扰电压波形和阈值。后者一方面影响主动管驱动波形上升/下降时间，进而影响主动管驱动速度，另一方面改变受扰管驱动回路阻抗参数，最终都会影响到串扰电压波形。因此，后期工作考虑深入分析上述2 种影响因素，以期优化桥臂串扰电压极值模型和基于桥臂串扰的安全工作区模型。  

3）新型驱动电路需要3 个独立且高压隔离的驱动芯片，这使得传统控制程序不再适用。其次，新型驱动电路中各驱动芯片延迟时间难以做到完全一致，为保证图12 中各模态严格按照顺序切换，就必须适当延长模态1、4、5、8 的时长，而这无疑延长了死区时间，从而给主电路带来新问题。因此，后期工作考虑对此进行改进，使其能对输入单一驱动信号采用互锁、延迟等手段获取所需3 个具有严格时序的驱动信号。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPsg858tibXib82rJibcsXiaCicksobNZuDhkGNq5DVgMHN7kLRqt32vsTSHuLqQukbPDMg2ibjY3BV8X1eFftpBCcibkYjicW3kaqeHuU/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMpAmakQkbSgSnZlhMHhibibMnILtT4KtbADu1yib0NGrGYdhyibwvZAg6jxnrw86xbIlqyiaC7mF7ia6kd3Fg8lYElg7f41hPJxf3Hc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOyEUgKGS2ZLECAcWGQZWO6EcnDPWwVYEsVykHicsW0fxjVdPDFEnZovf25gmEIOy9ibUlCdVedXu7UGVjYtoMR95KrE637cGzHI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMb6k2nLBt1eemYOnsskiabmfnZgOWe7mgrJQwvvudjnrkxmeVEOjx4rAvGQibgeicsEdqV3seOzBbl0bYViaDsafuYWiaTibtahwuT4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)