# EOS-2：TVS管的保护原理和选型要点


> 原文地址: [https://mp.weixin.qq.com/s/eMJ-V\_NB0P6k6RoVNzwe1g](https://mp.weixin.qq.com/s/eMJ-V_NB0P6k6RoVNzwe1g)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJyTao7F1sdZEv5WCRkdRGTv9mN95QnxokBBUMCFFseMZ2DAXTe5c0bA/640?wx_fmt=png)

____**★★★**______EOS-2---TVS______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：上节简述了两项常见的电应力测试，静电和浪涌，本节开始介绍应对这两项测试的无源保护器件TVS，有源器件保护器件请跳转查看防护器件系列（传送门：[Power Path-2：电源开关-1](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492927&idx=1&sn=6ca4f8c0e7b3a999497dac711b13481a&chksm=c336afa0f44126b6eed42c9a8bfd8f36ea869de5270935bc46743d3362386e46b4942e5ecf7a&scene=21#wechat_redirect)/[Power Path-3：电源开关-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493025&idx=1&sn=6367fb99e0b02b6fdfc87f9b535e06fc&chksm=c336af3ef4412628951af58d475453a1da3166b5f948e116feb7212f7051ce313fb650965393&scene=21#wechat_redirect)）。  

_______€1.___什么是TVS____

TVS（Transient Voltage Suppressor），即瞬态电压抑制器，TVS采用先进的半导体制程工艺制作，通过调节半导体PN结两端电压来启动保护，具有导通电压精准、启动速度快、一致性好无老化的优点，是专门设计用来抑制电路中的过压保护器件，它可以将几KV的静电电压和浪涌电压限制在一个非常安全的电压范围之内，从而保护电路中的敏感组件免受高压静电和浪涌的损坏。所以TVS管既可以用来防护ESD，也可以用来防护Surge，但是还有一个细分品类叫ESD防护二极管，它专业用来防护ESD，但不足以应对Surge，在选型TVS管时，要充分考虑其防护两种电应力的能力。（传送门：[EOS-1：EOS的含义与模型](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485635&idx=1&sn=cea695ae1cad14b52042468175fea9ca&chksm=c335425cf442cb4a42c839f0c4cb42f1b7e132e2449f1d0388b58353c5c5cf6ade2a0c8ea002&scene=21#wechat_redirect)）

_______€2.___Zener（齐纳）二极管____

**_图2-1_**显示了典型的齐纳二极管I-V曲线，曲线左侧显示反向偏压区域的Zener，只要测试或工作电压保持在VRWM以下（0V~|VRWM|），电流会非常小。VRWM是指关闭状态工作电压，低于该电压时，反向泄漏电流小于指定的IRM。当电压升高时，电流会突然增加，此时出现雪崩区，即达到击穿电压VBR。也就是说保护动作工作在雪崩区，瞬间的脉冲出现时，Zener快速反应进入雪崩区，吸收一部分能量，并将剩余能量导入GND。

采用电流驱动型测试设置，对Zener施加反向电压直到二极管流过1mA电流，此时的电压定义为可击穿电压VBR。曲线右侧显示正向偏压区域的Zener，如果电压超过VF，电流开始快速回升，可将负浪涌脉冲电压钳制到较低值(VF−0.7V)，Zener作为保护器件时是单向保护。（传送门：[Diode-2：二极管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493207&idx=1&sn=fa4be0a765e39f4c96b0d4168693198f&chksm=c336acc8f44125de02272bb218a924cae57c5c6fec6d6770e356540199ec1e02048e45018e84&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJPfT4Vkb0C28T9FnhvyNg9U1CmxpKrZd4JRhf5R8znNIpK34hzyNgGQ/640?wx_fmt=png)

**_图2-1：Zener的I-V曲线_**

Zener为接口提供单向保护，对于负浪涌事件，限制到相对较低的电压（高于VF），而对于正浪涌事件，根据VCL等式，钳制到钳位电压，钳位电压：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bDnYYCKJCvSGia5YKGbAbUI2JUcuQomaKicgWexdpcdG2NGB2w7icib77Sw/640?wx_fmt=png)

_______€3.___TVS（瞬态抑制）二极管____

如果串联连接两个方向相反的Zener，则形成双向ESD器件，此时整合起来就变成TVS管，如果这两个二极管相同，则I-V曲线对称，如**_图2-2_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJaLGFZsn0Zs4tKP9mC6KF8wibMAmB3WX2ajicEcC2wTeRkpGQ8HZw9Oxw/640?wx_fmt=png)

**_图2-2：TVS的I-V曲线_**

钳位电压的计算公式与单向ESD二极管的反向等式相同：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bDnYYCKJCvSGia5YKGbAbUI2JUcuQomaKicgWexdpcdG2NGB2w7icib77Sw/640?wx_fmt=png)

其中：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bUp55mNjmTdHqSGmr9Hu1qQpKSTQziaWdzLT7IC9CuMyw1icbxicrRv6eA/640?wx_fmt=png)

VBR由VF值和另一个二极管的反向击穿电压VBR1组成。支持正负工作电压范围的接口必须采用ESD保护，例如模拟音频信号，大多数只支持正工作电压的数字接口可通过单向解决方案获得保护，不过有许多工程师会采用双向ESD保护方案。对于负ESD放电，SOC会接触到更高的负钳位电压，应尽量避免这种情况，因为这会严重影响系统级稳健性。

如果必须按照IEC-61000-4-5标准保护系统芯片，使其免遭具有更高能量和更长脉冲持续时间的负浪涌事件影响，则尤其需要注意上述问题。如果浪涌保护只能根据IEC-61000-4-2处理ESD脉冲，那么使用双向拓扑便可为相对不敏感的芯片提供充分保护。设计低电容ESD保护组件时，选择这种两个ESD二极管串联的结构十分有用，因为其寄生电容比单向器件低，如下式所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2b7jiaF1X6ZibibbiaYhQHU6iaZt8afasficSoj2BdfXbGxpGZZwOUmYYHKjVw/640?wx_fmt=png)

_______€4.___TVS保护原理____

_保护和损坏机制_

当TVS二极管的两极受到反向瞬态高能量冲击时，它能以10的负12次方秒量级的速度，将其两极间的高阻抗变为低阻抗，吸收高达数千瓦的浪涌功率，使两极间的电压箝位于一个预定值，有效地保护电子线路中的精密元器件，免受各种浪涌脉冲的损坏。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJIfyBQoKyicbM53hf0rhCsUZzpRG2ibnKqibFwefuRTRJFwOwqyDbf4suw/640?wx_fmt=png)

**_图2-3：原始静电-绿色是被TVS保护后的安全电压_**

从**_图2-3_**来说，绿线部分的面积越小越好，那么就要求抑制电压越小越好，这样对后面电路的保护效果就越好。从被保护器件的角度考虑，主要有两种方式造成器件损坏：  

1#：过电压，由于抑制后的剩余电压部分过高，远超出被保护器件的额定电压，导致器件对地产生漏电流或者是电极与电极之间发生放电的现象，导致器件不能工作或者工作失常，通常情况下，从器件的表面观察不到异常情况。  

2#：过电流，在被保护器件引脚和引脚之间，引脚和GND之间产生过电流现象，表现为被保护器件失去应有的工作状态或对地短路。

所以较低的抑制电压（VCL）和残余电流意味着被保护器件或IC具有较低的发热，另外被保护器件的额定耐压指的是常态下的耐压（RMS），和瞬态的耐压不是一个概念。

_关键参数_

VRWM：器件最大反向工作电压

在线路没有受到电应力影响时，TVS管是要求不工作的，所以VRWM应该大于线路上最高的工作电压。这样才能保证TVS 在电路正常工作下不会影响电路工作（当工作电压大于VRWM时，反向漏电流会显著增大，从上述波形图来看虽然实际也能使用但是不建议）。但也不能选的太高，如果太高，钳位电压也会较高，所以在选择VRWM时，要综合考虑被保护电路的工作电压及后级电路的承受能力，通常选取VRWM为工作电压的1.1~1.2倍。

VBR：器件反向击穿电压  

器件反向击穿电压，通常在器件通过IR=1mA的电流情况下测试，代表器件击穿时的一种临界状态。

VCL：钳位电压

对器件施加规定波形的峰值脉冲电流Ipp时（或者对器件进行模拟ESD测试），TVS管反向电击穿后随着电压增加到一确定值后，TVS管两端测得的峰值电压保持不变，此电压就是TVS管的最大钳位电压。TVS 钳位电压应小于后级被保护器件最大可承受的瞬态安全电压，但要大于后级被保护器件的正常工作电压。

Ipp：器件最高可承受峰值脉冲电流，详细波形图见器件规格书。其实Ipp和VCL才是真正衡量TVS在电路保护中防护ESD和Surge脉冲电流和限制电压能力的参数，在相同Ipp下的VCL越小，表明TVS的钳位特性越好。

VF：器件的正向压降

RD：器件的动态电阻  

IR：漏电流，也叫待机电流，漏电流主要带来功率的损耗，比如在模拟信号中，会影响AD信号的采样值，所以TVS的漏电流越小越好。

Pppm：额定功率，TVS产品的额定瞬态功率应大于电路中可能出现的最大瞬态浪涌功率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bibu5oOUlCWH3fITFgcAbVUK7t1r0BN6IO9tRBicRLgEw9jWDke89iahQw/640?wx_fmt=png)

Cd：结电容

TVS管的结电容一般从几pF到nF级别，随着反向电压的增加，Cd呈下降规律，电容的大小会影响TVS器件的响应时间。在通讯线路上需要考虑TVS管的Cd值，过大的结电容会影响通讯线路的信号质量（增加信号的上升时间，改变线路的特性阻抗等）。  

_______€5.___TVS的选型要点____

从上面的分析中我们筛选出若干选型要点，并按照优先级排列如下：

1#：TVS的VRWM大于线路上的最大工作电压。

2#：TVS的VBR大于线路上的最大工作电压。

3#：被保护器件（线路）的正常工作电压＜TVS的VCL＜被保护器件（线路）最大可承受的瞬态安全电压。

4#：TVS选择符合测试要求的功率Pppm。

5#：TVS的Cd一定要满足适合被保护信号线的速率要求，建议参考如下关系，也可以参考时钟频率。

数据传输速率1.5Mbps（200KB/s），Cd≤30pF

数据传输速率12Mbps（1.5MB/s），Cd≤10pF

数据传输速率480Mbps（60MB/s），Cd≤4pF

数据传输速率5Gbps（640MB/s），Cd≤0.8pF

数据传输速率10Gbps（1280MB/s），Cd≤0.4pF