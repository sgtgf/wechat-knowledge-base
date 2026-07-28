# RF术语与概念-13：扩频---直扩DSSS


> 原文地址: [https://mp.weixin.qq.com/s/IY3c\_Wtap3LBKkwx88YQlg](https://mp.weixin.qq.com/s/IY3c_Wtap3LBKkwx88YQlg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSuwKgRyvSozR5Yiarn6BSRMFCpTrOkm2wsLaKmfrBiclRP9kB6kNFK1wbO0T9B2HORuUre0n7qaRUA/640?wx_fmt=png&from=appmsg)

★★★__TCS-13---直扩____**★★★

引言：直接序列扩频（Direct Sequence Spread Spectrum，DSSS）作为扩频通信的重要分支，其原理清晰、实现相对简单且性能优越，在塑造现代无线通信方面发挥了关键作用，在Wi-Fi、蜂窝网络和其他无线技术领域，它能提供安全可靠的数据传输的能力。

**__

#### ___€1.___直序扩频(DSSS)

如图13-1所示，在发送端用一个扩频码来调制信号，将待传输的数据信号与比特率远高于原始数据速率的伪随机扩展序列（Pseudo - Random Noise Code，PRN码）进行相乘或模二加运算（相位偏移调制），这实际上提高了输出信号的速率，在时域信号速率的提高意味着频域信号带宽的展宽，即载波信号发生设备的发射频率充满了整个带宽（频谱），使原始信息数据的频谱被扩展到远宽于原始频谱的范围，由此产生的传输信号类似于带限白噪声，就像“静态”的录音一样，从而实现扩频 。  

这一串连续的伪随机码称为码片（chips），其每个码的持续时间远小于要调制的信息位，即每个信息位都被频率更高的码片所调制，因此，码片速率远大于信息位速率，这是DSSS实现频谱扩展的关键。DSSS通信架构中，发送端产生的码片在发送前已经被接收端所获知，在接收端，用相同的扩频码串行将信号解扩，把展宽的信号还原到原始状态，在一些IEEE 802.11标准中，就使用了DSSS技术来调制信号。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTD47fribv6Ck4yeSmvOZXTkoUK3L1UsiaMM9QfbCuACicZj3OF1rsRlegokA3P2EAsHFhqkvRtavyZw/640?wx_fmt=png&from=appmsg)

图13-1：扩频解扩示意

伪随机码直接加入载波调制器的数据上，因此调制器具有更高码率，用这样一个码序列调制射频载波的结果是产生一个中心在载波频率、频谱为((sin x)/x)²的直序调制扩展频谱，如图13-2所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS7DBiamfghcCNjx48BOlglCYGtvaHBQGZnCsDZKXZicwPQW04jzbFEdj7FROAgza3owub3Kj2staQg/640?wx_fmt=png&from=appmsg)

图13-2：直序调制扩展频谱

频谱主瓣（零点至零点）的带宽是调制码时钟速率的两倍，旁瓣带宽等于调制码时钟速率。图13-2是直序扩频信号的典型范例，直序扩频频谱形状上发生一些改变与实际采用的载波和数据调制方法有关。图13-3是一个二相相移键控（BPSK）信号，是直序扩频系统中常用的调制类型。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS7DBiamfghcCNjx48BOlglCxG6DwZzVZekXLrFK1Sqnp0gkPgsEdJFQnI3RrQyycxJAiciaPOtNIt7g/640?wx_fmt=png&from=appmsg)

图13-3：扩频示意

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TS94bI10jJj9lRec4aTYiczI8kqg2QXZPEfOxnz6qQynnFAM2fibMp7QhR6yHTnOZ80JWtr0K8noHNQ/640?wx_fmt=jpeg&from=appmsg)

图13-4：扩频示意

扩频因子SF：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRFTNAnG9yktuMx3mmtrqEJ5FhGciacN1I1Q9MZicxYlttOZKETUN8IGibFu71Fl0vgJscJ93eMe29nA/640?wx_fmt=png&from=appmsg)

处理增益（Processing Gain）定义：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS7DBiamfghcCNjx48BOlglCibmLYzHWjW1c7zvEKLxw6m48fYz1kW5QNUnVmlpOAlTn4U83cQLJeEw/640?wx_fmt=png&from=appmsg)

其中CR是Chip Rate，码片速率，BR是Bit Rate，即原始数据速率

__

虽然传输的DSSS信号占用的带宽比原始信号的简单调制所需的带宽要宽得多，但为了频谱经济性，传统的模拟带通滤波器可以对其频谱进行一定程度的限制，以提供以载波频率为中心的大致钟形包络。如果不需要的发射机在同一信道上传输，但具有不同的传播序列（或根本没有序列），则去扩散过程会降低该信号的功率。这种效应是DSSS码分多址（CDMA）属性的基础，它允许多个发射器共享同一信道。DS-CDMA（直接序列码分多址）是一种基于DSSS的多址方案，其工作原理是将信号从/传播到具有不同代码的不同用户，是使用最广泛的CDMA类型。

__

___€2.DSSS数学过程示意___

信号生成过程信息调制

首先，原始信息数据经过常规的调制方式，如二进制相移键控BPSK、正交相移键控QPSK等）进行调制，将信息加载到载波上，得到调制后的窄带信号s(t)。扩频处理将调制后的窄带信号s(t)与高速伪随机码c(t)进行相乘（或模二加，取决于调制方式）运算，假设原始信数调制后的信号为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ1vosxuD4x5fFialy0odAicoToTxsu0ibOkSYwyQkAD8Ho8FicmP9A3vibGGxlyrgWnpOZBiaa33bxLpnA/640?wx_fmt=png&from=appmsg)

伪随机码c(t)取值为±1，则扩频后的信号：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ1vosxuD4x5fFialy0odAicoK8LIbjMVPZPZYd6XZsLuqgo1ZvibmpmqO3UOdx9b44mLCIdnFWUxp9A/640?wx_fmt=png&from=appmsg)

由于伪随机码c(t)的码元速率远高于信息数据速率，使得扩频后信号Ds(t)的频谱被大大展宽。

调制与传输

扩频后的信号Ds(t)通过射频调制，将其频谱搬移到合适的射频频段，然后经天线发射到信道中进行传输。在传输过程中，信号不可避免地会受到噪声和干扰的影响，但对于非目标接收机，Ds(t)相当于噪声。

解扩与解调

解扩：在接收端，接收到的信号Ds(t)首先与发送端相同的伪随机码c(t)进行相关运算（相乘后积分）。由于发送端和接收端的伪随机码完全相同且同步，对于有用信号部分，经过相关运算后，扩频信号恢复为原始的窄带调制信号，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ1vosxuD4x5fFialy0odAico4Zsf1FbArNvgJVqu5gC3jz6oBXFSIrXWtF7w2TVuaZXIC7Rla4hIpA/640?wx_fmt=png&from=appmsg)

（因为c(t)平方\=1），而对于干扰信号和噪声，由于它们与伪随机码不相关，经过相关运算后，其频谱进一步被扩展，功率谱密度降低。  

1#：抗意外或预期干扰

2#：在多个用户之间共享单个频道

3#：降低信号/背景噪声水平阻碍拦截

4#：确定发射器和接收器之间的相对时序

DSSS用于多个GNSS系统，如GPS、Galileo和GLONASS。无绳电话使用DSSS，在900MHz、2.4GHz和5.8GHz频段运行。2.4GHz Wi-Fi（IEEE 802.11）和Zigbee、WirelessHART （IEEE 802.15.4） 协议使用DSSS，它还用于自动抄表和无线电控制模型、汽车、航空和船舶应用。

#### ___€3.___跳频扩频(FHSS)

FHSS中载波在一个很宽的频带上按照伪随机码的定义从一个频率跳变到另一个频率，跳变速率由原始信息的数据速率决定，我们能够识别出快速跳频（FFHSS）和慢速跳频（LFHSS）。后者（最通用）允许几个连续的数据位调制同一频率，FFHSS是在每个数字位内多次跳频。（传送门：[RF 术语与概念-11：扩频---跳频FHSS](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247496740&idx=1&sn=9661d1e29452b15f657bc7d88b9f90fd&scene=21#wechat_redirect)）

跳频信号的发射频谱同直序扩频有很大差别，如图13-6所示，跳频输出在整个频带上是平坦的，而不再是((sin x)/x)²包络。跳频信号的带宽是每个跳变信道的带宽的N倍，N是频率间隙数。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQAXdsnIkGlFqfzsrrLNy0dyB0h1WlnbsI5NbB7AngJT8wFoDp50zUpJndHh6e9RpvS5g31uJVnCQ/640?wx_fmt=png&from=appmsg)

图13-5：FHSS示意

在数据输出端，信息分散在f1-f5五个载频上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS7DBiamfghcCNjx48BOlglCT802GJ5nOjTIQKxibduBA4y8z9g9VwYMwD890icN9EMctulNBibqsDcQg/640?wx_fmt=png&from=appmsg)

图13-6：FHSS频谱示意

#### ___€4.___时间跳变扩频(THSS)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQAXdsnIkGlFqfzsrrLNy0dYzuiaib4skO4KD57E9fmcV91WwqSnSa8ZkDiaLnPM0P8gt9lWJGGSU7XA/640?wx_fmt=png&from=appmsg)

图13-7：THSS频谱示意

图13-7所示为时间跳变扩频技术THSS，其原理比较简单，利用伪随机序列控制PA的通/断，使用场景不多。

## ___€5.小___结

DSSS和FHSS最难以实现的是接收通道电路，特别是对DSSS的解扩，因为接收端必须做到实时同步才能够重新恢复原始信息，而码的识别，它是以数字域实现的，需要进行快速的、大量的二进制加法和乘法运算。接收机设计中最复杂的问题是同步问题，DSP提供高速的数学运算能力，在对扩频信号划分后进行分析、同步和去相关运算，借助于ASIC降低了系统成本，并通过创建基本模块架构使其适合于多种应用。