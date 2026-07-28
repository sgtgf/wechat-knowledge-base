# MOS-4：教你如何计算MOS管的开关电路-2


> 原文地址: [https://mp.weixin.qq.com/s/N5agHSwlUjMndqYFmhlFww](https://mp.weixin.qq.com/s/N5agHSwlUjMndqYFmhlFww)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRJr1ewP9Q5D9PSuFnA0MiamnIaQA6aeQTpDRoPGiaiaujltKjS7ibszJDM5grEGWnM1WzjY1FB5MRWjQ/640?wx_fmt=png)

____**★★★**___MOS-4---MOS管的开关电路___**★★★**____

引言：负载串联型开关相比于上节讲到的接地型和跟随型开关，使用更加广泛，无论是轻负载还是重负载，电路几乎没有额外电流损耗。

__€1.开路漏极型开关__

如下**_图4-1_**是NMOS和PMOS的开路漏极型开关，所谓开路漏极型，即负载Rload直接串联在MOS的漏极一侧。NMOS型Rload直接跨接在漏极和电源之间，PMOS型Rload直接跨接在漏极和GND之间，二者都位于MOS的主电流回路上。其中Rg是栅极限流电阻，RP是偏置电阻。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTMIgvDB0kBPVFe0Fhicgbpf6jRJIqhRxvicPrwvBRbPKwsUM9LhON75Z9T6FyyMEq8QbWYC1fgFltg/640?wx_fmt=png)

**_图4-1：NMOS和PMOS开路漏极型开关_**

对于NMOS开路漏极型开关，当Ctrl in输入高电平时，NMOS导通，VDD开始直接给负载Rload供电；当Ctrl in为低电平时，NMOS不导通，负载Rload不工作。

对于PMOS开路漏极型开关，当Ctrl in输入高电平（以VDD为基准，Vin-VDD＞Vthmax）时，PMOS不导通，负载Rload不工作；当Ctrl in输入低电平（Vin-VDD<Vthmin）时，PMOS导通，VDD开始直接给负载Rload供电。

根据上面描述的工作过程，开路漏极型开关又叫负载串联型开关。

关于负载Rload放置的位置，为什么对于NMOS和PMOS，Rload均放置在漏极，这一点在第二节已经讲过。（传送门：[MOS-2：一文告诉你如何驱动MOS管](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247489368&idx=1&sn=3959f9a450a812a293c0b0d26b278a1a&chksm=c3355dc7f442d4d1333275ee72e093add654198644704f71ae896a9a51b1cd54bd2fc8f7df8e&scene=21#wechat_redirect)）

__€2.开路漏极型开关设计实例__

MOS的负载串联型开关，MOS本身并不能像BJT一样控制干路电流的大小，因此是负载汲取多少，上游供给多少，MOS只做一个开关使用。因为负载串联型开关多半使用在一定功率场景，因此其设计需要考虑如下几个点：

#1.输入电压和输入电流  

#2.MOS的RDSON  

#3.MOS的驱动阈值

对于#1.这两个参数是选型MOS的核心参数，VDSS＞Vin，IDSS＞Iin；RDSON是评估性能的关键，RDSON越小，干路功率损耗越低，MOS发热越少；#3.MOS的驱动阈值则是根据我们的驱动电压匹配可以完全驱动的MOS，如果直接驱动不行，则需要用BJT或者另一个MOS进行G极驱动。下面我们以一个实际例子来进行选型：  

_设计背景：_Vin=12V，最大持续输入电流=2A，驱动阈值电平0/3.3V（MCU的GPIO驱动）

_设计分析：_由于2A的电流其实并不大，这里可以选择使用小信号MOS类别，根据上述参数，选择Nexperia的PMV28UNEA--NMOS，**_图4-2_**列出了其静态电气参数。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSsqnagJ6dzOOBzic1pLKMwXhUYsfxzRGCnsExVic12463bffFIvKfeom4G2dLVxmeU0LCQibZdV5wOg/640?wx_fmt=png)

**_图4-2：PMV28UNEA的静态参数_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSsqnagJ6dzOOBzic1pLKMwXszHRMOAMCwbXKzBCsFaGHTmdEQOK5AzlpkYzibEfNrLcMgiciawQU82Cg/640?wx_fmt=png)

**_图4-3：12V-2A，3.3V驱动的NMOS低边负载开关设计_**

_设计结果：_**_图4-3_**是成型设计，其中Rg可以不需要，也可以贴几Ω都可以，Rp的取值范围比较宽泛，尽量取值稍大。需要注意的是，上述NMOS开关是低边开关，使用场景不多，而一般使用的开关类型是高边开关。若用NMOS强行设计成高边开关，那么Ctrl in端的电压会很高以至于难以达成以低电压来控制的目的。所以推荐使用PMOS来设计负载串联型开关。（当然这里也不是完全不使用和否定低边开关，需要根据实际使用需求来定）

如果使用PMOS设计，根据PMOS的导通条件，驱动电压是0/3.3V，阈值比较基准是VDD=12V，实际采用GPIO是无法直接驱动的。那么有什么简单驱动设计吗？大家可以多多思考一下，我会在后续SCD系列的高边低边开关里面详细讲到。