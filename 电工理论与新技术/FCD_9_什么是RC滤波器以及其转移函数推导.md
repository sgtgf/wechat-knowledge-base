# FCD-9：什么是RC滤波器以及其转移函数推导


> 原文地址: [https://mp.weixin.qq.com/s/7SBuXkx-\_EhlDPGcl0rVpA](https://mp.weixin.qq.com/s/7SBuXkx-_EhlDPGcl0rVpA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibC88tagSAJ24AYDU77159aPq7ZbribLxkrVfuK99huyhcEtBsW3xfeSdA/640?wx_fmt=png)

________**★★★**______________Filter-1---RC滤波器______________**★★★**________

_撰稿：Timothy  校稿：Timothy_

引言：感谢“八块腹肌饼干”的邀约，针对无源滤波器专门更新几期，先从RC开始吧。简单基本RC电路有一些非常有用的特性，既能提供相当精确可重复的定时功能，又能很好的执行基本的滤波功能，本节简述基本的RC滤波器特性。﻿

________________€1.低通滤波器________________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBang50xLbcmmbg04YU83ficxzoOciaYvKabP1cdf5iak7xzfiafg8wCzAm0A/640?wx_fmt=png)

**_图9-1：RC低通滤波器_**

如**_图9-1_**是一个基本的RC低通滤波器，求解这类电路时可以将它们看成分压电路：（传送门：[Capacitor-1：电容的模型和参数](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486273&idx=1&sn=3a31c818b2bbae0437617c9a183b102d&chksm=c33541def442c8c8843e885f57717d52d585e494d2edf3213082703f9e858ed06c168f3e6c9d&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBalnEMYmZSbk1csKqecbCDVnLCf8KRibvTia5gTE5ghVknwVUqj4XcPYSQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBa9ksJoZOsdDAdZafX10pnyPCCwR58F3pTibLiczd9SXrXhQCQzfdt1K0g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBargVBllP51Gp4dibnG7D5wEX888bAARQAwRuvTiafgkOmoxCc7jfH0dxw/640?wx_fmt=png)

然后得到输出输入增益比，若采用dB作为单位，就可以得到典型的增益-频率曲线。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBap072W8A7PVJGIuia1icvTuWtQl2mDey2fDIlvHEPop3splRjAml2hpJA/640?wx_fmt=png)

当某一频率信号通过滤波器转移后的功率衰减为0.5时，则称这个点为滤波器的截止频率点，通过滤波器转移的功率比通常是电压比的平方，因此在此频率处，功率转移比下降到1/2，电压降为1/√2，将1/√2代入上式即可求得截止频率fc，其中ω=2πf。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaT1w7eGCclyibt3BUGAMQcDQCYJwfmoXlTYXqcjGnLjzcicNDDuMQ0ajQ/640?wx_fmt=png)

________________€2.高通滤波器________________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBadVpBOM4xLDfia31PUsddFDXbDbh3Yra8nywT2WapmCHVW8uq8mBHLvw/640?wx_fmt=png)

**_图9-2：RC高通滤波器_**

如**_图9-2_**是一个基本的RC高通滤波器，按照如上方法同理可以得到如下的转移函数：

________________![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBagrEPmZO5Gic9sGztA26GPCLkLE1jFPbKJDEfyvuQnefcNwklSicrb3tA/640?wx_fmt=png)________________

它的曲线和低通转移函数平行对称，所以其截止频率也是

________________![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRjRUDeSiafK0cAdPRibCfSBaT1w7eGCclyibt3BUGAMQcDQCYJwfmoXlTYXqcjGnLjzcicNDDuMQ0ajQ/640?wx_fmt=png)________________

________________€3.多级滤波器________________

单级低通滤波器的电压转移函数在高频部分线性下降，下降率为每倍频程（1倍是频率的2倍）-6dB，如果需要下降/响应更快的滤波器，就可以将滤波器串联起来成为一个多级滤波器，上一级的输出输入给下一级的滤波器，获得更陡的下降曲线，在基本的滤波器基础上可以灵活组合得到滤波效果更优的滤波器。

多级滤波器有级和阶的概念，级是指有几组独立单元滤波器，阶指的是有几个感性或者容性器件，比如**_图9-3_**是二级二阶低通RC滤波器，**_图9-4_**是二级二阶带通RC滤波器。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibCvKCvBZId6YFqREB550aTtqvgvIBld3e9ZS21NxU7T3rvwia3vRQFQrA/640?wx_fmt=png)

**_图9-3：二级二阶低通RC滤波器_**

将**_图9-3_**中取R1=R2，C1=C2，则下降速率为-12dB/倍频程，但它是以两倍数量的串联电阻为代价，带来更高的线路功率损耗。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS6lnicyiaZeN9ibwGDFxFYxibCjaskSklakITibKrTBEWmJsKR2UXPMgIVk4T7Zg2jg4iark2N1CsKE0Jw/640?wx_fmt=png)

**_图9-4：二级二阶带通RC滤波器_**

在电路中将一个低通滤波器和一个高通滤波器串联在一起，如**_图9-4_**所示，就可以实现一个带通滤波器。R1、C1组合阻塞高频，允许低频通过进入下一级，R2、C2阻塞低频，允许高频通过，如果器件值取值不对则会出现如**_图9-5_**所示频点交叉的现象，导致带通变为带阻，与设计效果相反。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQwqNaulQQ3MJNJH11KvCKPicLllicRU16qOujKzibCZqbYGAHDXKl2ibWlqPttNF3Nj4RjgdbrYv5uyg/640?wx_fmt=png)

**_图9-5：带通--->带阻_**

多级滤波器的转移函数这里不再进行推导，方法和上面一样，大家可以自行计算，滤波器的仿真推荐大家使用MATLAB或者Pspice来验证实际设计，后面结合实际使用案例会专门针对滤波器出几期Pspice仿真。