# MOS管手册解读

原创 蜗牛 硬件笔记本 2020-06-10 19:16 undefined

> 原文地址: [https://mp.weixin.qq.com/s/8pxw4MS-RN8pX6H89CtL\_w](https://mp.weixin.qq.com/s/8pxw4MS-RN8pX6H89CtL_w)

工程师们在MOS管选型时，首先要看的就是MOS管手册，拿到手册时，我们怎样去理解那几页到十几页的内容呢？  

  

其实并不是每个参数都要特别关心，我们只需重点关注几个重要参数，下面分享一下我对MOS管手册的一些理解。

  

以IRFP460为例来进行说明：

打开规格书，首先看到的就是MOS管的引脚示意图、封装形式和三个重要参数。一般看到这个，心里对这个管子有初步的了解，知道适合在哪个功率等级使用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23n1FIxgic9AeNuFDL136xc6DOCya3a7Qk3ZHduYXjtxZrhtmjlzan3gA/640?wx_fmt=jpeg)

VDSS，ID和RDS(on)，是特别重要的参数，也是必须了解的参数。下面的表格会详细说明其中的意义。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23kljO152TibFPqB5Aue4UP9CwCuY5S1xLNiaAvC6eJzd5auOT78Vgo6vw/640?wx_fmt=jpeg)

1.VDSS漏极电压

这第一个电气参数，即DS击穿电压，也就是我们关心的MOS管耐压，最高不能超过500V，测试条件为25℃。

往下翻有个VDSS随温度变化的曲线，如图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS237ht7oib7O2eeZzLJk9kQl3REbWic8nEFW8TSxGPlrIESwDQoPSkCzG6Q/640?wx_fmt=jpeg)

可看出VDSS是正温度系数，只有在温度为25℃时，管子电压为500V是安全的。要是在寒冷的场合，比如-50℃，耐压低于500V，所以一般在电路设计时会保留至少10%的余量来保证正常工作。

2.Vgs栅源驱动电压

设定该值得目的是防止输入电压过高，导致MOS管损坏。电压一般设置为12-15V。

3.ID连续漏极电流

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23hHVxwOmHEdhAeTZ7XiaGEjFOI8Z6xWOXDsUAj50ZwQrYjqQdm8wAnvQ/640?wx_fmt=jpeg)

MOS管表面温度在25℃或更高温度下，可允许的最大连续直流电流。从测试条件可以看出，在同样条件下MOS管的温度越高，ID越小。原因是内阻随着温度的增高而增大，根据I=U/R可知，内阻跟电流成反比，内阻越大，通过的电流越小，带载能力越弱。

4\. IDM峰值漏电流

该参数反应了MOS管能通过的最大脉冲电流，它远大于连续通过的电流。如果长时间工作在此电流下，管子将会失效。因此，在实际工作中，需将电流设置在ID范围内。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23aMWefa9Q92ZGDiaJuORpo5rqZXGzsU3fq6uictM9aBejfcqAcDO1wbgA/640?wx_fmt=jpeg)

5\. RDS(on)导通内阻

内阻是个比较重要的参数，内阻越小，带载能力越强。温度对内阻的影响比较大，如图：  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23MFmNrR8JcJhn0K8d0VC6qbMBxmictOXqVkwyCwoao7Psiarf0nz38lwQ/640?wx_fmt=jpeg)

随着温度的升高，内阻增大，内阻越大，管子本身消耗的能量越大，管子发热就越严重，情况会越来越糟，所以一定要控制MOS管的温度，一般不超过105℃。

6.Vgs（TO）阈值电压

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23K5iaUwqspb7Nwtibug4zm3srgdaKImhLHz5wyYUOhDokAp6zIKW6hrCw/640?wx_fmt=jpeg)

注意Vgs（to）具有负温度系数特性，温度越高，开启电压越低，高温时接近1.5V管子就会开启。有些管子高温时约为零点几伏，这样只要在栅极有一个很小的尖峰就可能导致管子误开通，从而引起系统的不稳定。  

  

7.Qg，Qgs，Qgd栅电荷

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23iaxmibYoHjO2kmU5O6gicDiavSerFyNGbJMepk5UhpUqJ9DkVIxQwDsRAQ/640?wx_fmt=jpeg)

Qg栅电容的充电电荷。这个值跟驱动电路有很大关系。驱动电流的大小通常会参考Qg的值，然后估算出驱动电流值。

8.td（on）导通延时时间、tr上升时间、td（off）关断延时时间、tf下降时间、td（off）关断延时时间，示意图如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS236dlrVwo858eTR4LHnX4wOexyLudibKLLjBLG4RFyBhPoThzGXscKwWA/640?wx_fmt=jpeg)

在计算半桥电路死区时间时，常参考这几个参数值。

  

9.Ciss，Coss，Crss寄生电容

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS23z6PdE1dxfe9jrn1AaHKZmMg05u2k0oPPYtsicuwiaianNjZCnWhCDEKpg/640?wx_fmt=jpeg)

Ciss是输入电容，当输入电容充电至阈值电压时，MOS管才能开启，放电到一定程度才会关闭。Ciss对MOS管的开启和关断延时有直接影响。

  

Coss是输出电容，对于软开关来说这一参数非常重要，因为它可能引起电路的谐振。 

  

Crss，也就是Cgd，叫反向传输电容，也叫米勒电容。它影响着开关上升和下降时间。

寄生电容当然越小越好。

  

10.体二极管

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tICu8jeRn1aawwykp1icBS239FKF2zQaU9gW9vDAPM0UWGeDibgqSMzkBzylMnI6baSWEORRb0wKicicA/640?wx_fmt=jpeg)

VSD是二极管的正向导通压降为1.5V，这个参数不是重点。重点的是二极管的反向恢复时间trr，这个时间越小越好，时间过长，损耗越大。