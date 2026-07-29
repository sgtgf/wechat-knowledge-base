# 电机控制SVPWM七段式算法

原创 电机新视界 2024-08-25 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/SH4XBoRq5F81YHMVyIx\_Jg](https://mp.weixin.qq.com/s/SH4XBoRq5F81YHMVyIx_Jg)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0s1u4ztdWjDoyDhYIW9MOhDMGrAzeDVuvZ2dfZib765WVhdyXHexcxMPBNzR0QYNDlLNEbmuUSibq4w/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzg4NzgyMjIwNg==&mid=2247526151&idx=1&sn=f2ad16b6fe06f9d5bd954057834bb252&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0t8PE1jut6syNaXWztwMIKfloy7NO3ltUjCw33CwMdkozLu7wSA3UI6qibZLEn27wSRVUEjCYBfiaFA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzI0MDU0NDMyMQ==&mid=2247717560&idx=1&sn=e29e07e0eb7d394a5b7ff41eff76da7e&scene=21#wechat_redirect)


来源： CST电磁兼容性仿真 

  

一般控制三相电机的控制技术采用SVPWM（Space Vector Pulse Width Modulation）算法。它对于电机控制可以提供更高的效率和更低的噪声。SVPWM控制算法可以分为七段式和五段式两种。今天我们先介绍下七段式算法如何应用到电驱系统进行电磁兼容性仿真。七段式是一种更复杂的SVPWM控制技术，可以将三相电机的输出电压分解为七个矢量，分别为正向最大矢量，正向中等矢量，正向最小矢量，负向最小矢量，负向中等矢量，负向最大矢量和零矢量。这七个矢量可以通过控制脉冲宽度来控制三相电机的输出电压。

**SVPWM基本原理**

        要得到一个恒定大小的旋转磁场，可以先来得到一个恒定大小的旋转电压矢量。如下图：

![](https://mmbiz.qpic.cn/mmbiz_gif/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3ApGO8RJ2ujHW1icbiamk1upZ64uXzSOibe4gjM9qTjahqRCZ3BamK8rp1yg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

        从上图可知，我们可以通过互差120度，大小随着时间按正弦规律变化的3个分矢量来合成一个大小不变旋转的总矢量。于是问题又变成了：如何得到大小随着时间按正弦规律变化的3个分矢量呢？我们先回到电机上，其实这3个分矢量就对应了电机的3个绕组，3个绕组就是互差120度的，只要再控制绕组上的电压大小按照正弦规律变化，是不是就可以得到大小不变旋转的总矢量呢？看下面电机定子的坐标系图：

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3ApC2t86YcsU0CwWiaD9mjjzIg5Iv17WJxlTaN6pgV7a5ialgatojT7S1Jw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

        如果让绕组上的电压大小按照正弦规律变化呢？直接通交流电，就是正弦的呀，可不可以呢？驱动器的控制电路如下：

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3ApPzBMj25xjFfhckq008EibWvzQvbNicLz5NxBYPJngmicZzZK3fV48KqAA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

        我们只能控制6个管子的开关而已，看来直接通交流电是不行了。于是我们只能控制PWM的占空比来等效正弦：

        ![](https://mmbiz.qpic.cn/mmbiz_jpg/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3ApmU6essHVUjuruZTqWFCdar0Sks9xR2V92FnR4DOawnDOEUcrdTPHCw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

上图所示占空比越大，电压越大；占空比越小，电压越小。让占空比呈正弦变化，电压值自然也就呈正弦变化了。  

        我们用公式来表示一下：定义这三个电压空间矢量为UA(t)、UB(t)、UC(t)，他们方向始终在各自的轴线上，而大小随时间按正弦规律变化，时间相位上互差120度。假设Um为相电压的有效值（相电压呈正弦变化），f为电源频率，则有：

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3Apegstrpk9qvARia31PFxqQdQPiclk659owSY2FecYc3YLkx3ic6YI2ib3Vw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3ApGjQmKmM1Z1OAG0S6F69xjgDKeCkbiaFTk8ILLMwdXI8e70coSL1759A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

原理无需多讲网上一搜一大堆！！！

**SVPWM波**

SVPWM波是由三角波和马鞍波调制生成的，如图所示，马鞍波可以通过零序分量注入和六相叠加生成，也有同学通过正弦波和它的三次谐波叠加生成，也是勉强可以接受的。

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vJzOFGc39dz6DVZsrXU0HwEgVbCiaCSKeuDVer4K1lRCYGiaMicrc9vuRcp7oxI9kXjwQHRLzgd8NbZQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**CST内部的SVPWM波脚本**

  

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vJzOFGc39dz6DVZsrXU0HwEh1Lnfx9TAxQNFictM50EMHOHxFsPtvHtvSSm5ZDiaX2VOHe9TmeEE7RQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

CST Studio Suite 2023版增加了SVPWM的七段式算法，它采用的是零序分量注入的算法，可以在Macros里面找到脚本，如图，Modulation Schemes下拉菜单选择Space Vector，在输入仿真需要的各个参数就可以生成SVPWM波。

  

小编自己使用的六相叠加的算法，顾名思义就是程序上把六个相限的公式写出来最后叠加在一起，使用CST自带的VBA编辑器，方便又好用。VB的代码也比较容易上手。

  

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vJzOFGc39dz6DVZsrXU0HwEDm9ibNJNJACzP5QojYia2aSYRMvlJsJEUSSuNYWnCD2EhSzFBIdj06BA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

需要设置这么多参数：

（1）开关频率

（2）相电流频率，它等于电机转速X电机磁极对数/60，堵转的时候它等于0.

（3）信号总时间和时间步长，这个设置需要注意，生成的信号采样点数等于总时间/时间步长，如果采样点太多会影响到仿真计算时间。

（4）高低电压，高压电驱仿真的时候或出现低压为负压

（5）初始相位只有堵转的时候才会用到，窗口才会打开

（6）选择七段式还是五段式

设置完成所有参数后大功告成，我们来看一下六相叠加的七段式算法生成驱动信号波形图：  

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vJzOFGc39dz6DVZsrXU0HwElicia3cCxmdz8bpM12NcL1c50ot9DzFIxqMkhqUlLPGutM9TpNU6iaiakA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

下图中我们可以看到，在每一个扇区三相驱动信号的波形都会有七段。

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vKshewqD5BR4SPiaHrJEu3Ap1XspPfoKCPMev6nwvaeiaHVmBvLgYialHMCHz7DicmUEqImibgVjUnXMBw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

如图所示，七段式控制的无刷电机的开关模式有七种状态，所以我们在分析无刷电机的EMI问题时，理论上我们可以把电机运行状态分解成七种去分析，000表示三相桥上管mosfet全部关闭 。实际上只需要分析四种三相桥的开关状态。  

![](https://mmbiz.qpic.cn/mmbiz_png/5O5FGRrh3vL4e9QIibT067KtWTYGjWjMBjQbjib48NX8T7hnhwqPJlH1w8vkV5Miaq7fNkxQsDItGHtLQwibOFCibBg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  


![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0t8PE1jut6syNaXWztwMIKflTUnuEXWxPibLJDokYVjA047arWNC64WjZJstawXXntEkpuzS14LA6A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uvwUyrFWszpp9eIGyDibzTRGtuJD4wgepVTRmtwU9x1PP28X6vB0fFOzebt0zQtgfPhPbXpTZM8dg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s2cdPOwTWgsSfzkhVTn3PSF8TM2U217jHJaFWgRbGL5MrtpRXfTP9CtYJAR2n35XkklSk9EFIP4Q/640?wx_fmt=png&from=appmsg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)