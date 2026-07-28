# MOS-5：MOS的电流方向是唯一的吗？


> 原文地址: [https://mp.weixin.qq.com/s/eHs9MyDmu4wS-Ui33\_BjAw](https://mp.weixin.qq.com/s/eHs9MyDmu4wS-Ui33_BjAw)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRHHof2sG4S5UNTjpHXIic1oQNfbp9s7iaLH2DARh6Ea3pAbUm0LicyZpM8BOm2fqI9DwicaicjfwxgVvA/640?wx_fmt=png)

____**★★★**_______MOS-5---MOS的电流方向探讨_______**★★★**____

引言：在常规使用中，似乎流经NMOS和PMOS的电流只朝一个方向流动，但实际情况是，MOS的电流流向和BJT不一样，BJT的电流流向已经固定，但是MOS并没有。本节不从物理结构上阐述其电流流向，主要探讨MOS的电流流向以及体二极管电流相关问题，为后续的电路设计夯实基础。  

____€1.MOS的电流流向____

_____![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQB6U5VvDk6M1CGqB0YlQSicuaVicic7jkBCicLfzzJL1SCfbcGWGX79pz4580OwiaJc53ia4VjVIwWibJibw/640?wx_fmt=png)_____

**_图5-1：使用建议MOS的电流流向_**

使用MOS时，常选择的电流流向如**_图5-1_**所示，NMOS从D极流向S极；PMOS从S极流向D极。然后我们发现他们的电流流向和各自寄生的体二极管Di极性是相反的。也就是说如果在开关使用场景，导通时电流只会通过MOS主体流过，Di是反极性不会有额外电流流过。关闭时MOS也处于完全关闭状态。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRHHof2sG4S5UNTjpHXIic1o2c8qERNjuqvZVDosaO108FrzgPxacXH7KFNtJiaob8dvS2bk9mGHn3A/640?wx_fmt=png)

**_图5-2：MOS另外的电流流向_**

而用**_图5-2_**所示这种方式使用MOS，NMOS从S极流向D极；PMOS从D极流向S极。然后我们发现他们的电流流向和各自寄生的体二极管Di极性是相同的。也就是说如果在开关使用场景，导通时电流不仅会通过MOS主体流过，Di是同极性也会有额外少许电流。关闭时MOS实际并不处于完全关闭状态，会有较大的电流从Di流过。  

MOS电流导通流向不是唯一的，在VGS满足驱动条件时，主要是看源极和漏极之间的电位，漏极电位高于源极，电流D到S。源极电位高于漏极，电流S到D。

_______€2.MOS的体二极管电流_______

如**_图5-3_**和**_图5-4_**，随意挑选了几款MOS，可以了解到其二极管流过的电流Is值，有些会标明二极管持续电流和脉冲电流。从值可以看出还是比较大的，并且每一个MOS管都会标注如**_图5-5_**的关断时寄生二极管电流值曲线，**_图5-5_**为一款NMOS。

当我们以**_图5-2_**中NMOS的使用方式作为开关，当NMOS关断时，仍会有比较大的电流经由Di从S流向N，实际上达不到开关的效果，这就是为什么开关场景仍以**_图5-1_**的设计方式而不是**_图5-2_**的方式。但这并不说明**_图5-2_**所示的使用方式完全没有使用的意义，在一些特别的场景，比如防反接，这样的使用方式就特别有用（后面会讲到）。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRHHof2sG4S5UNTjpHXIic1oquLNJKtYL7hsfKNfmmyt0ic6ykEavsfCjt2RD4V7UapoH3ayrDNW5tA/640?wx_fmt=png)

**_图5-3：某款功率NMOS寄生二极管过流和压降_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRHHof2sG4S5UNTjpHXIic1o21NmAnDhqIDNMt88icDfWMOWtt41d1gX9BeDNdPUXKJlvSzlzsgibZnA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRHHof2sG4S5UNTjpHXIic1o0BrGpyB5qP7su7YaRjQVKj6TptKfJLwytribcd7YlINEtKT9ho8cGBg/640?wx_fmt=png)

**_图5-4：某款小信号NMOS寄生二极管过流和压降_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRHHof2sG4S5UNTjpHXIic1oSFO0rAeMhjReQulZucMCaAyRWQuibUpWy4cESarQnJcjJKIafzNbGFg/640?wx_fmt=png)

**_图5-5：VGS=0V时，作为源极-漏极电压的函数的源极电流--典型值_**

____________€3.小结____________

两种电流流向的选择不仅影响G极驱动的方式，也影响着是选择高侧还是低侧开关，根据实际使用场景，合理选择电流流向和驱动方式，灵活使用。