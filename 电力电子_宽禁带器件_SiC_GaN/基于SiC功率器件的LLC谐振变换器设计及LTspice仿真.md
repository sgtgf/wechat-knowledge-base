# 基于SiC功率器件的LLC谐振变换器设计及LTspice仿真

原创 李春杰 李洪美 SiC碳化硅MOS管及功率模块的应用 2026-04-12 07:10 广东

> 原文地址: [https://mp.weixin.qq.com/s/vhICIreKPYDFof8KF7lOmg](https://mp.weixin.qq.com/s/vhICIreKPYDFof8KF7lOmg)

文章来源：中文科技期刊

作者：李春杰 李洪美 李飞 闫俊荣（江苏师范大学，江苏 徐州221116）

摘要：本文将SiC MOSFET、SiC 二极管应用于LLC全桥诺振变换器中，并对谐振网络进行了设计。最后，通过搭建LTspice仿真模型对LLC谐振变换器进行验证。所设计的基于SiC功率器件的LLC谐振变换器能够实现软开关技术，而且SiC功率器件能够实现低损耗与高效率。

关键调：LTspice仿真；SiC功率器件：LLC谐振变换器

功率开关管 MOSFET 因其动态性能好、导通电阻小被广泛应用于功率变换器中，但是由于通态电阻会随着耐压的上升而急剧增长，其耐压等级不超过900V。所以，在高压大电流的应用场合基本都是IGBT功率模块。受IGBT本身构造和特性的限制其开关频率很难做高，主流的产品都是20kHz左右，制造的大功率变换器在体积上都比较大。然而。SiC材料制造的开关管能够很好地解决这一问就。SiC材料的飞跃发展掀起了电力电子器件进一步发展的高潮，这也使SiC 器件得以在很多领域中广泛应用，如航天航空、直流微网储能、新能源汽车新兴领域等。目前量产的 SiC MOSFET产品己有1200V、1700V的电压等级，而其通态电阻和开关损耗却可以保持在很低的水平，这样SiC功率器件应用在大功率开关电源可以大大减小开关损耗和导通损耗，而且SiC 功率管耐高温特性也比Si 开关管要好得多。SiC MOSFET器件工作频率较高，可以实现磁性器件的体积小型化。因此，研究一种基于新型SiC功率器件的大功率变换器对电源的发展和可靠性研究有着巨大的前沿性作用。

为了验证SiC功率器件在变换器中的实际应用，本文采用了LTspice仿真软件，它可以直接调用CREE公司生产的实际功率器件模型，而非理想器件，搭建仿真模型，使得仿真结果更接近于实际应用

1.LLC谐振变换器设计

本文拟设计一款输出功率为8kW;输出额定电压250V;输入电压范围为580V~650V；额定输入电压600V，谐振频率fr为200kHz：最大工作频率fmax为250kHz。

1.1 LLC谐振变换器结构

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMPQd0cZsgC1AP5ufyrXD589ykLrAUopzWf1AxuUTgsHCvZmF3e0qX0dAEC1cBCjHsicNBTxg1F6cBibQFVmF3coLTBzz0mL6gcA/640?wx_fmt=png&from=appmsg)

本文采用了全桥LLC谐振变换器，拓扑结构如图1所示，其中功率器件均采用CREE公司生产的碳化硅SiC MOSFET、SiC二极管器件。

1.2 功率器件选取

由设计实例参数可得出，SiC MOSFET选用型号C2M0160120D，SiC二极管器件选用型号C3D08060A。

1.3 LLC谐振变换器谐振网络参数设计

图1 所示的全桥中心节点的寄生电容为Czvs=2•Coss+Cstray//(2•Coss)。其中 Coss 为 MOSFE漏源极之间的等效寄生电容；Cstray为与谐振电路并联的等效寄生电容。Coss 参数可通过查所选SiC MOSFET 管的芯片资料得到，Coss=47pF：Cstray取1pf~300pF之间为宜。本文取 Cstray=100pF，Czvs=476pF，驱动信号死区时间Tdead=0.2us。

谐振网络参数设计步骤如下；

（1）匝比

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNY5oo0sYWsZTj1qukJQz187HcPcB1ibw5LiagIfFSLLnL54Mt6kSXvu8WtXzh2TQ2a2Qs2tkQ0BGiaVJgichMKrF78QWr7xdvicibzI/640?wx_fmt=png&from=appmsg)

（2）最大增益、最小增益

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN7qUgSbMqTPFS4noolzictylLJY7cjnytLQiaJLnHiaxRgb49Yy9F4VicbgVKMcOgicmR3YBSzEWhE56y3YTuYCtichtZxXmuByMT50/640?wx_fmt=png&from=appmsg)

（3）最大归一化工作频率

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNHgzia5hIgEIEGUQ0HwjHp88piaXl1Ky7YRTHWPTsALicWcxahkqRdn7ibZkn6OHh6N2BGicVh1CN60MlrxyPdCUBsyvicPicVPjkN4w/640?wx_fmt=png&from=appmsg)

（4）计算等效负载阻抗（Rac）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOuWI8Keibbjn7onqEdVO9nTb0eI2jYmvHYadr82Xibjy4sm9xu7e9THECHZEA2o81sialvgicx5cZU7bR8RPfOZrRh4agBEFeWInI/640?wx_fmt=png&from=appmsg)

（5）计算电感比

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOADuSzia3xatlH0KiaQ2RBpkicq0pibG4Ddu0a8PLurcJWaoMFcJQANQyYiaoOqJVjuPicOScQsXDniaGFYhe4CObYXrichSiccZrXVG88/640?wx_fmt=png&from=appmsg)

（6）计算最低工作频率

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOhvdUwnTgJ9Jcs1S0vDIaLyOsPxrNiak4V6q87tOSVaWIcGkMvgnnMIQw2AaW67H2l4vNHu2GN9ImIUayeIupddVdg9Pibmpdp0/640?wx_fmt=png&from=appmsg)

（7）计算最小输入电压和满载情况下变换器工作在ZVS区的最大品质因数

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUfEmdOzk9ibD9MX4dcTYYaIcUlde6ebKMtKSpXPAr6cA5mibcEYuqFqxfIQ98pFviaVbMr9iciavfd4u9MC7IE9HX5OMeH0tbZ3u8/640?wx_fmt=png&from=appmsg)

（8）计算最大输入电压和空载情况下变换器工作在ZVS区的最大品质因数

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNAicfrR2GRSiayDGXc95riaB9uNIkRSkNRn6gkjhGKaHibFJqrf1ib9yPI2V74xCM4e4BIhq9sJaekCOj1AxZWUVCicibfiaxGW8ERoiaA/640?wx_fmt=png&from=appmsg)

（9）选择整个工作范围内的最大品质因数

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMM74JA4Qz3GnLwbMsFwlE90x5ianRH9heBzcvwvKM0xpezW9j2z4C5gibpklpEy57KBTOwmH2R8K5UQm61EpUa8H6QHKtcicUia5o/640?wx_fmt=png&from=appmsg)

（10）计算谐振电路的特性阻抗和谐振元件参数

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlWFBicEVZtoOfdSGBbqqjXpeU2rm1c4CE0hicYPWkXB8ib3fUsDhh4XHr1v3JfWj0jL0D3325T3AWntqNx9iamjYUDzLwtjv5gCo/640?wx_fmt=png&from=appmsg)

通过以上设计步爨，可以得到如下参数，如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN7P5KXrticufanAIWeqcB2Mf86w197ic8DE2655XrJNic9Hb93XbSxJgTRPDqUAN6vqAgkHmeicT9IY5MAKoFpXKbDhW0oAhjNp1o/640?wx_fmt=png&from=appmsg)

2.仿真分析

为了证明参数设计的正确性，利用电路仿真软件LTspice对所设计的参数进行仿真验证

2.1基于LTspice的LLC谐振变换器的仿真结果

利用LTspice搭建LLC谐振变换器的模型，模型中采用SiC MOSFET、SiC二极管作为变换器的主开关管与副边整流二极管。所用到的开关器件SiC MOSFET和 SiC二极管的模型均来自于CREE公司的LTspice模型。

由仿真模型得到的仿真结果如图2~图9所示。其中，图2~图7的工作频率为谐振频率时的波形。工作频率小于、大于谐振频率时的波形如图8、图9所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNAy3uzzUbSuBukbRHrkg10gjFZuhyjykErNKj0iciaaPI0jJJrbY2s59k20nEib0gqlJwhsQfudqTEVmYJxAlkHt2wDD3ePsZ1xE/640?wx_fmt=png&from=appmsg)

图2为H桥某一桥臂上下功率开关管SiC MOSFET 的驱动电压波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNMichIe1UJR1ENv6VvONnFlFa3DbKAb0LXibDytpaDUucibcUofYCGSYia3VrKTztUHgGKBAFCaepq5ILibP19wFJOXstzWMOsAk4Q/640?wx_fmt=png&from=appmsg)

图3为某个功率开关管SiC MOSFET的驱动电压与漏源极电压波形。从图中可以看到，开关器件在驱动电压到达的前一刻，漏源极电压就己减小为零，准确地说是减小为负值，这说明SiC MOSFET实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOuRr00uxibibWSCt3kxry9Xm0leMnJwJzhtWIiaT9icfSrSIUoIXmkTl76gsbrks76SwkPtwERNb1T4AbptYyk0s7YX53ibnPUrHEQ/640?wx_fmt=png&from=appmsg)

图4分别是谐振电流和流过输出SiC二极管的电流波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMl58AgfXE8n7xI7rIKf0kdHzjfVvxibUM5xFj1ch2hOFsswBJ1JcT5zF4bugicaFXN0oV1CrG0QGHtFo1b2XrkuNkAb1B9hUQNo/640?wx_fmt=png&from=appmsg)

图5为副边输出二极管两端承受的电压和电流波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNuy0nqHH0SHBVlibvr6iccmRWwMlWW9RFiaiaAo3hgVQqibQuhqazwbaWL6E0J4jSShBjqefR7Ll9k9XQOPejQgQdI0xfYlUZmewo0/640?wx_fmt=png&from=appmsg)

图6为原边电压和副边电压波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMicO9hwjUvpT9rnG4GOiaeBZhzpZh39icRV8KtTGtiajKAYVyFOGiaGalInVia3vws1hZV2soWuPGMO94vmFAVRvoqvvT9Qr3Jjypus/640?wx_fmt=png&from=appmsg)

图7为输出电压和输出电流波形。输出电压稳定在250V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOegI0pFY8l0Vlicl9HxGewxMozHnoicY0R9leeEN46VGeUZytJNarXdMSUUUiclcXOAUiag3zW13fC9uia2zibCYGia0FhRKJxNrC5QU/640?wx_fmt=png&from=appmsg)

图8为工作频率小于谐振频率为180kHz时的相关电压、电流波形。从图8(a)的副边二极管两端承受的电压和流过的电流波形可以看出，SiC二极管实现了ZCS。从图8(b)的SiC MOSFET 的驱动电压和漏源极电压波形可以看出，SiC MOSFHT实现了ZVS。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMCMIaoCVnXZKWNALz5v9YFf3aMDrMOWKqOZvXIaSWPwibNf4Ic4YK1mgLSx3TLP2iatvRAUHeYEdHK6akibxcP7Mt4RqibJGG68P0/640?wx_fmt=png&from=appmsg)

图9为工作频率大于谐振频率为210kHz，且空载运行时的电压波形。从图9波形可以看出，SiC MOSFET实现了软件开关。

图9工作频率大于谐振频率时，SiCMOSFET的驱动电压V(gI,Ha)和漏源极电压V（IN,Ha)波形。从LTspice仿真结果可以看出，变换器工作在不同开关频率下均能实现软开关，验证了变换器的设计是合理的。

2.2 损耗分析

由于仿真模型中采用了实际SiC功率器件模型，所以，LLC谐振变换器在工作状态下会产生一定的损耗。由于谐振网络中的电容电感损耗非常小，可忽略不计，以及忽略磁性元件损耗，仿真结果得到的效率为98.7%。SiC功率器件损耗分布如图10所示。相比于硅材料的功率器件，损耗较小。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOEicGyx5FGMZr49gJxIXHL7CaWURfDVUdBgpkFp92ZGExLiaXlYxXxds9ETicCLV8icc6twbwRoIJaYgblViaS6A3ac47ic1agmWgAc/640?wx_fmt=png&from=appmsg)

3.结束语

 本文采用了LTspice仿真软件对基于SiC功率器件的LLC谐振变换器进行建模和仿真，并给出了不同开关频率的工作电压和电流波形。从仿真测试结果中能够看出，LLC谐振变换器实现了软开关。将SiC功率器件应用于LLC谐振变换器，能够降低开关损耗，提高工作效率，从而验证了设计的合理性。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpP3J9wW3Qjy8ShWcWbyLq8GroWDkOkRCWZgqEjB34ehUWkhdbmyv2DQZWIOCffsCTUnHPTMic0UaExibh6EpUsry8JyOM5OLfA9w/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMtatXxJlK3Nb3NZaic7ia1cOAFPVVv5CXW0Wm6iboa4Niaw5UeD1tJiacoa6uUI6kbUlN3eqbIpPIxRQM8licQw0Hr07NDoyK3RLrcI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUBpI5jJM7H8ODM87DTz1icfia1ibrJFcbPnOMfiaNXqyns4eNx6icUj7Rhu1Ymvn5NBe7hxwBJicDiaPicdalw7ic5AaXcLKkImbxic4Kc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPV3cWiaWtJUiczsMibkr2ROhz6IfZia4YibqJHuDKIGHKiacbdHNHp9SN1er0TlybNNeJSkL1orZm35JRco9wBmOibDXBMvwXCQKg75w/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)