# SiC MOSFET 在声呐发射机中的功耗计算分析


> 原文地址: [https://mp.weixin.qq.com/s/jggrEA41qg3HaM0kjW5vSQ](https://mp.weixin.qq.com/s/jggrEA41qg3HaM0kjW5vSQ)

文章来源：声学与电子工程

作者：张燚（海装上海局驻杭州地区军事代表室，杭州，310023）    

摘要：声呐发射机的损耗主要由功放逆变电路功率器件在开关过程中产生，降低功率器件损耗是提高声呐 发射机效率的一种重要技术方法。文章研究了SiC MOSFET 在声呐发射机功放逆变电路中的应用，首先进行了功率器件选型，其次推导出功放逆变电路的损耗计算表达式，在Matlab 中对Si IGBT和SiC MOSFET 的损耗进行计算分析。比对结果显示，SiC MOSFET 较Si IGBT 产生的损耗明显减小，功放电路效率显著提升。 文章计算过程和结果可为同类器件选型提供参考。  

关键词：声呐发射机；SiC 功率器件；损耗

主动声呐系统中，探测作用距离越大，声呐发射机的发射功率就越大，则电源需提供的功率要求也就越高，相应的体积和经济代价就越大。降低发射机的损耗，可降低电源的功率要求，进而减小体积和经济成本。因此，研究声呐发射机的损耗，寻找降低损耗、提升效率的技术方法具有重要意义。  

发射机的损耗主要来源于功放逆变电路功率器件产生的开关损耗和通态损耗，因此工程中应选择损耗低的功率器件。目前，应用最为广泛的是Si器件，而其应用已趋于性能极限。SiC器件可以突破传统Si器件的性能极值，是下一代高性能变换器的基础。SiC材料具有Si三倍的热导率，结温可达到300℃以上，因此可以使器件在高温下仍具备较优的工作特性。饱和电子漂移率大，使SiC器件可提供更优的高频开关特性。  

鉴于SiC功率器件具有导通电阻小、耐受温度高、高频特性好等优点，研究其在声呐发射机中的应用具有重要的意义。本文研究SiC MOSFET在声呐发射机功放逆变电路中的应用，器件选型并推导逆变电路损耗计算表达式，对损耗进行分析。  

1\. 功放逆变电路器件选型  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOevr0SnTpo8pK6diaUQze4wMfF8Iw434S0yv3NPJUMOcg3p6redEvkHrvqAhfrj8x49X4TU74xibp8VNkkribc7sKKWGvQ4E0icZQ/640?wx_fmt=png&from=appmsg)

发射机功放逆变电路等效结构如图1所示，功放逆变电路采用单相全桥拓扑，滤波器为LC带通滤波器，发射机负载等效为电阻R。

假定输出功率为P，则负载电流峰值Im为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOiaVP159o7qWuUaWXuYM92ScmIPw6C8JRLNDzXBHCe73hOFnMeQ9knxNvzia8zAiaEYWFSjUcsZVcfbGnEyTJGNjq6Q0eEia3Jyia8/640?wx_fmt=png&from=appmsg)

假定发射机输出功率P\=1 kW，负载R\=30 Ω，直流输入电压Vdc\=300 V，则所选功率开关器件的最小耐压和电流值需满足

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNx9ich6lLQvtQ7dyaRbaHF59qZrPKD7UBTrbDibXXzoDGOe8BlEUDqSaCFjiaQUPA5yr56gwhZ2icActouvQWNI2G9D4baoqD7Dto/640?wx_fmt=png&from=appmsg)

式中，VCE(min)为功率器件最小耐压值，ICE(min)为功 率器件最小电流值。  

考虑一定的可靠性，选择型号为C2M0080120D的SiC MOSFET和IKW15N120H3的Si IGBT作比对分析。前者在25℃和100℃最大漏源电流分别为31.6 A和20A；后者在25℃和100℃最大集电极发射极电流分别为30A 和15A。  

2\. 功放逆变电路损耗推导    

从理论上计算功放逆变电路的功率损耗，首先根据器件数据手册近似线性拟合得出器件的通态损耗和开关损耗。  

2.1 功率器件损耗    

2.1.1 器件通态损耗  

根据数据手册上典型伏安特性曲线近似线性拟合功率器件，其反并联二极管导通时的饱和电压Vt、VF-t和电流It、IF-t的关系表达式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOO41smZArZdTQHP0YERp5OPwFYyRBhtgeL9TRXibZSjg0VcJT4chIGicF6NbjUfTg9es1kY6Vc3Sdmr6ZIfwOXM2ibPSU2kLW594/640?wx_fmt=png&from=appmsg)

式中

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNab0xTjMdyswtvAxCE34XDicWYrgzeNTD5VOsUN1HygCFt3IKu27WN6n41DCMiaPX4Cp06nS3VyOIfJQpJ7lzCmvIA1aia3Gt4vM/640?wx_fmt=png&from=appmsg)

式中，VCE0 为初始饱和压降，VF0 为二极管门槛电压，VCE2、VCE1、I2、I1、VF2、VF1、I3、I4可从图2伏安特性曲线图中读取。 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMT1uqcpGEHUXx0GaeyAxXHgxOuCoIGTibX0cqTK98hJtXEH3Kq5P89pesvMwT8YN9Z2c8lsxdTg2rmG7WOD50rxAOnQlz58iaiaw/640?wx_fmt=png&from=appmsg)

  
VCE-Tj为设定结温下功率管管压降，VCE \-Tjmax为最大结温下功率管管压降，VF-Tj为设定结温下二极管管压降，VF\-Tjmax为最大结温下二极管管压降，可从数据手册参数表中读取。

由式（3）~（4）可计算出功率器件及其反并联二极管的通态损耗表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNE3UHzLEibfOx18CheIOelTepoYOricKKena6WuibGNSl5rcvjuTw0EN2nwWnXHfFsbxa673wq7O1vhjjqC3OicK1dd36YvjAv0gI/640?wx_fmt=png&from=appmsg)

式中，D为占空比函数，T为一个调制周期。  

2.1.2 器件开关损耗  

开关损耗包含开通和关断损耗，可根据数据手册上开关损耗曲线近似线性拟合得出其表达式。一 般开通能量损耗曲线中包含二极管反向恢复损耗。 进行线性拟合得出能量损耗表达式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO8ZWpoE490noGb3db3XABlI46syicIbnHhibPtoj0L5Ap67yaF4GyUjvcfX0sh3eZrg1icPSIytwu32v8uqjl1E7RAXyDg64jmgE/640?wx_fmt=png&from=appmsg)

式中

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNKxMZuibyrHXG8PrericegOsqTRKwrhTc2uSpoMv9E8ISRTenjXMumlh7Tc8fDYjHGmbrEuP5CWJ0NZo6EyFRS1hu715seIycY4/640?wx_fmt=png&from=appmsg)

Eon、Eoff从图3 中读取。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMxd3yzUgUpoYqWOaByjRh6BAknkd1uVK1ZMnibMvG9BTo6D5hpPgC6ibmialdcdFRtFeHBX7mS9e5Jydtny3aiclJwsD0ib7Ww9RzQ/640?wx_fmt=png&from=appmsg)

Eon-Tj为设定结温下功率管开通损耗，Eon-Tjmax为最大结温下功率管开通损 耗，Eoff-Tj为设定结温下功率管关断损耗，Eoff-Tjmax为最大结温下功率管关断损耗，可从数据手册参数表中读取。

当开关频率远大于调制频率时，一个调制周期内的开关损耗表达式可写成连续形式：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOTMAbibicLKShhd2LRRD7jMHiaRgCic5miaibAXVUrLT30DiaDRR8rSibsv7rvYPO3tyibqjQoIjuTXSJIarSj8Jrb4hmCUWHYU9DzEwtg/640?wx_fmt=png&from=appmsg)

式中，fsw为开关频率。  

2.2 逆变电路损耗  

声呐发射机功放电路为一个单相全桥电路，常见的调制方式为单极性SPWM、双极性SPWM、单极性倍频SPWM 等。本文仅分析双极性SPWM 调制时器件及电路拓扑的损耗。图4 为单相全桥电路一个桥臂和导通器件与输出电压电流的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNutAn1MZcr9qHvhy5KyV30HIfW9JkJ9AB87MlbZG8IXFXjFtFFcnnHjCUa5X4Z7TAv29YrL7pGmZlEM2XBY8fAkNpg1JibbXfE/640?wx_fmt=png&from=appmsg)

对电流通路进行分析，可得出不同状态下的器件损耗， 如表1 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpML545dnibIPQcK0L4gehZVfgWaQsqhXSYmBLohc3WnW0o0egEpGktibaf0R6YLnR6fmFVDBoEJLDEmhr7ymiclwBtYNCLEoxqHz0/640?wx_fmt=png&from=appmsg)

采用双极性SPWM 算法的调制函数表达式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNQgY8xssZwzkZO6tYMibQhezGoh9ttSibfySLqzgHywa5AoEOFB2x4vV9akfRlDOZCXGib4jNtnwdaNoDz3Zv9ujM2Gm4hq1B09k/640?wx_fmt=png&from=appmsg)

式中，m为调制度，θ为相位。  

根据文献\[3\]可推导出功率器件P状态时和N状态时占空比为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPibZ27GwRqktGHfPicHvoE5y4jNiaEcXTicgNvJdE1a0NAXjur48hToiaZRomwGum7m1QzAlbNKUjsLgzibqNodMhNicAwic5MG9vCSl4/640?wx_fmt=png&from=appmsg)

结合式（5）、（6）和式（11），可推导出采用双极性SPWM 算法时的器件通态损耗表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPK8ibGpPH6OicibfSDjFBiar8yqfwkedcuLMUIjKRso36bwo0NaUjYVXyRLVwibJIIQ4jLKp9Eic6tMjolZyLLnMRLql8Vbr2nwAcVc/640?wx_fmt=png&from=appmsg)

由上式可知，器件通态损耗仅与调制系数、电流幅值和功率因数角有关。  

从前文分析知，在i > 0 时只有V1 产生开关损耗（二极管反向恢复损耗计算时已包含在功率管开通损耗中）；在i < 0 时只有V2 产生开关损耗。由于结构对称，V2 产生的开关损耗与V1 相等。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMX90zr64g5LSsz4E6DiaK86D7xCCZU5tvXiaSbD9EhQvmq6XyODFhmugoEXfHcXKKwM0nTPicia0t4s6LqicciaPEarsv1owlSzTtibs/640?wx_fmt=png&from=appmsg)

从式（14）中可以看出，器件开关损耗仅与开关频率和电流幅值有关。  

由式（12）~（14）可推出功放逆变电路总损耗为 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNlsfEaKpb321HMqVrc8X7Hy5zg35z5vnwOF6Yfb4oYEmJOSCYuYiaVNXGW3b6p85XOricZ479koMWRPHHZYlXfK0dMeibydfrrlY/640?wx_fmt=png&from=appmsg)

3\. 功放逆变电路损耗计算分析  

查询功率器件IKW15N120H3和C2M0080120D数据手册上相应的特性曲线及参数表，根据前文式（3）、（4）、（7）、（8）计算相关系数，如表2、3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNIYlWYjdla6A0UMsZTCpNOP5gxCicr4iau8Mp6cZqpjw9JqjsfwQLSm0UU4s59CqpY0D3dBRXiaOO0f1QibWQ9Zhiavm5ibpOIfvnb0/640?wx_fmt=png&from=appmsg)

在Matlab中创建Si IGBT和SiC MOSFET的损耗表达式，代入拟合系数进行计算。由式（12）、（13）计算不同功率等级时V1管、D1管的通态损耗柱状图，如图5所示（m\=0.9、fsw\=50 kHz、φ\=0）。 从图中可以看出，在固定开关频率时，随着功率等级的提高（即电流幅值增加）功率器件及其反并联二极管通态损耗增加，相较于Si IGBT，采用SiC MOSFET器件可降低通态损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOYficAibk6wa2cNs4Yv6GWIe0RDoxEs44ibzMzOCgPoEPxH1Etu2pp2NIjzWXZdUUpjtqKHUMMQt055qqoxcxbFHNyTrDPwSUj7c/640?wx_fmt=png&from=appmsg)

由式（14）计算不同开关频率时V1 管的开关损耗柱状图，如图6 所示（m\=0.9、I\=8A、φ\=0）。 从图中可以看出，在相同功率等级时，功率器件开关损耗随着开关频率的增加而线性递增 ，SiC MOSFET 产生的开关损耗远小于Si IGBT 所产生的开关损耗，优势明显。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMoCiaHpdNTIVWLS3xtm7Mia1ibrmAz4IOoTyyT7XA84GVI7mj8icBDkPLvCnCRZj9MSrwV4uWjeS1NNia474gjphSUAepgfibTVztG0/640?wx_fmt=png&from=appmsg)

由式（15）可计算不同功率等级和开关频率下功放逆变电路的总损耗，如表4 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQUxeiaGbMNAKZ0WpCDNbAdIRonmoMrZPY1AkVSbqkhU243al5IahvqS2iaOKkpccSjcyWX38phlbdibzQk5gMWhucFSPTAyxE4c/640?wx_fmt=png&from=appmsg)

从表中可以看出， 相较于Si IGBT，用SiC MOSFET 时，随着功率等级和开关频率的提高，损耗减少量增大，功放逆变电路的效率显著提升。这进一步说明SiC MOSFET 更加适合用于高开关频率和大功率场合。  

4\. 实验验证  

发射机功放中功率管的损耗均转化为热量耗散在空气中，无法进行精确测量，因此，我们通过功放效率的方式进行试验对比。按图1 电路形式进行试验，除功率管外，其他条件保持一致，实验条件见表5。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUUY4JnwbItrhFkb3PXtiaAgdjSSYz7HlFXTzuMJT60iawTM2JjmTWiaqjrzTEVCwgm8ZpdCrLgF3rG5LXwibAvickhaPhGYk0c02w/640?wx_fmt=png&from=appmsg)

测量负载两端电压U，计算输出有效功率P0\=U²/R，测量发射期间输入直流电压Vdc和直流电流Idc，计算输入功率P\=Vdc×Idc，计算出效率η\= P0/P，实测参数及计算结果见表6。从表中可看出，相同实验条件下，采用SiC MOSFET 器件后，功放效率可提高，与理论分析结论一致。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPVnvJnMCa2LG1gxicOOuUUP4WDZCKiaJPP8DE2qGsbO0Omcl1W1s8zxevvgfrbL1FZhkma1nNVjdjtKOrOicPVSz9KS5Y0RJ4SN4/640?wx_fmt=png&from=appmsg)

5\. 结论  

在Matlab 中对Si IGBT 和SiC MOSFET 产生的损耗进行计算分析，可得出以下结论：  

（1）在相同工作条件下，SiC MOSFET 产生的开关损耗和通态损耗均小于Si IGBT的，具有明显优势；  

（2）采用SiC MOSFET 时，发射机功放逆变电路的总损耗有很大程度降低，且功率等级和开关频率越高，损耗降低幅度越大，效率提升越显著。  

综上，从降低损耗、提升效率维度，SiC MOSFET应用于声呐发射机中可完全取代Si IGBT。文中对全桥电路进行了研究，结论可推广应用于半桥和推挽等声呐发射机功放电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOyt9jKWsgHgdH38CpibSFV9oIObH525YDSUwNuxmTEtXgIddUJbEsphYQYicpcEs58PO8Urias7kmDSDxfPhdibgvfo3kn98gia3Qk/640?wx_fmt=png&from=appmsg)

图片来源：网络

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpP3J9wW3Qjy8ShWcWbyLq8GroWDkOkRCWZgqEjB34ehUWkhdbmyv2DQZWIOCffsCTUnHPTMic0UaExibh6EpUsry8JyOM5OLfA9w/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMtatXxJlK3Nb3NZaic7ia1cOAFPVVv5CXW0Wm6iboa4Niaw5UeD1tJiacoa6uUI6kbUlN3eqbIpPIxRQM8licQw0Hr07NDoyK3RLrcI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUBpI5jJM7H8ODM87DTz1icfia1ibrJFcbPnOMfiaNXqyns4eNx6icUj7Rhu1Ymvn5NBe7hxwBJicDiaPicdalw7ic5AaXcLKkImbxic4Kc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPV3cWiaWtJUiczsMibkr2ROhz6IfZia4YibqJHuDKIGHKiacbdHNHp9SN1er0TlybNNeJSkL1orZm35JRco9wBmOibDXBMvwXCQKg75w/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)