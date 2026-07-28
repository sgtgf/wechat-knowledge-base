# RF devices-14：LNA


> 原文地址: [https://mp.weixin.qq.com/s/2wWRsQPVge7zFY8umhwGrA](https://mp.weixin.qq.com/s/2wWRsQPVge7zFY8umhwGrA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRplI9OrptvmUvGgoH22HYMB0KJaUve7BhicwpI9SMSEiaM4kmgickDzeyEwQ3nED2nZqlKqwA6HJqQg/640?wx_fmt=png&from=appmsg)

____**★★★**______LNA-1---低噪声放大器______**★★★**____

引言：LNA（Low Noise Amplifier，低噪声放大器）是一种重要的器件，一般其NF＜3dB，主要用于接收链路的第一级，射频低噪声放大器的功能是把天线接收到的微弱射频信号放大，在尽量减少噪声引入的基础上，让移动智能终端实现更好的信号、通话质量和更高的数据传输率。

LNA根据适用频率的不同，分为全球卫星定位系统射频低噪声放大器、移动通信信号射频低噪声放大器、电视信号射频低噪声放大器、调频信号射频低噪声放大器等。射频低噪声放大器产品多采用SiGe、RF CMOS、RF SOI、GaAs等材料及相应工艺，主要应用于移动智能终端。

____€1.LNA工作原理____

LNA利用晶体管的放大作用，对输入的微弱射频信号进行能量放大，常见的晶体管类型有硅双极型晶体管、砷化镓场效应管等。通过选择合适的晶体管和电路设计，实现低噪声、高增益的信号放大功能。射频低噪声放大器的工作原理如**_图14-1_**所示：输入的射频信号被输入匹配网络转化为电压，经过放大器对电压进行放大，同时在放大过程中最大程度降低自身噪声的引入，最后经过输出匹配网络转化为放大后功率信号输出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbcwTDnU55cxxLarpGibLokamFe7j0ibpy02vGCQichIkVicJDj2x7EgDGKBSDDNCmr676otm2stmYmw/640?wx_fmt=png&from=appmsg)

**_图14-1：LNA的基本结构_**  

____€2.LNA的特性指标____

____噪声系数  
____

衡量放大器本身噪声水平的指标，噪声系数越低，说明放大器对信号的噪声恶化程度越小。一般LNA的噪声系数在1~3dB左右，较低的噪声系数可以确保微弱信号在放大过程中不会被过多的噪声淹没。通常噪声系数与温度有关，温度越高，噪声系数越大。（[RF 术语与概念-2：噪声因子和噪声系数](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247495073&idx=1&sn=196666548450c51cdd7628727743f16c&scene=21#wechat_redirect)）

____增益  
____

LNA的增益是指对输入信号的放大倍数，较大的增益值可以有效地放大微弱信号，提高信号的强度。但增益值也不能过大，否则会使后级电路模块的线性度要求过高，导致信号饱和失真，单级LNA的典型增益通常在10~20dB之间。

____输入输出驻波比  
____

用于衡量部件之间的匹配程度，驻波比越大，反射功率越高，传输效率越低。良好的匹配可以减少信号的反射，提高传输效率和系统性能。（[RF 术语与概念-4：驻波比VSWR](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247495198&idx=1&sn=4ffed69046c9113fdf52b198772d1446&scene=21#wechat_redirect)）

____线性度  
____

主要通过1dB压缩点和三阶交调点来衡量，1dB压缩点是指当输入功率较低时，增益接近于线性增益，随着输入功率不断增大，输出功率相对于输入功率的增长速率开始下降，当输出功率比线性增益低1dB时的输入功率点。三阶交调点是当两个或多个频率的信号通过非线性电路时，会产生互调产物，其中三阶产物（如2f1-f2和2f2-f1）最接近载波信号，三阶交调点越高，说明放大器对非线性失真的抑制能力越强，线性度越好。

对于一个LNA来说，基本的电参数如图14-2所示，包括工作频率范围、增益、噪声系数、输入回损、输出回损，输出P1dB、输出IP3等等。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFBEiaILibBIaVysZkMfbeGPOyHiaSGK4WU0pBqDicu6IAUicib7xicViccYDBzVg/640?wx_fmt=png&from=appmsg)

**_图14-2：LNA电参数_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFBn7psrA4Gd03OO2nakP4pg4NTca6HJicW3yeGKB6ZgOKcj0NWQIic78oQ/640?wx_fmt=png&from=appmsg)

**_图14-3：LNA的宽频性能_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFBB9jZG8NS1OKf4ZlOzpzdia2ZsqekicWyaoCHP8Mrc4GeenbQicwH1vWtw/640?wx_fmt=png&from=appmsg)

**_图14-4：LNA的窄带性能_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFB6eIxG8NYUhQibdpkwjXF4ojB46VJBkOhh1B0PsdauzMbSqW5bWf42Gg/640?wx_fmt=png&from=appmsg)

**_图14-5：LNA的增益---频率---温度曲线_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFBIFmc6DH2b5H3nlibz6FdGIyN678DA6JQzK4EZ1Ht471meXiaG2NyibDJQ/640?wx_fmt=png&from=appmsg)

**_图14-6：LNA的噪声系数---频率---温度曲线_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFB1RkK9piaFpLicXYqbBiapZmuDpfIhH72I82j8YiboIsCPojbvXbyDXF2RA/640?wx_fmt=png&from=appmsg)

**_图14-7：LNA的输出功率---频率---P点曲线_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFBFVJT1FcfoKf6B8mywQDl8mZvZzKW1vnQPfDkuxMBbghWrd9vecicYicw/640?wx_fmt=png&from=appmsg)

**_图14-8：LNA的输出P1dB---频率---温度曲线_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibYlMwu8qXnMlanSHxazFBmOqvQuD9QSdQiaMmAZZDqc1UWT78ZxcnW8cVW4gsgGzKupMCSuia7mWA/640?wx_fmt=png&from=appmsg)

**_图14-9：LNA的输出IP3---频率---温度曲线_**  

____€3.LNA的选型使用____  

LNA使用在接收链路中，选型轴图如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWITfI5PPZK11E3pkcpFzadvPOuYy4IoBPrdVMT2v03zKCDZdCcm76VsnxT2oq0MWSFRYibhROXsg/640?wx_fmt=png&from=appmsg)

图14-10：LNA基本选型思路