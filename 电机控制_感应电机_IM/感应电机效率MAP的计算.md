# 感应电机效率MAP的计算

原创 电机新视界 2024-05-08 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/et08XXZRb-lDv1hU1COWWQ](https://mp.weixin.qq.com/s/et08XXZRb-lDv1hU1COWWQ)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tR6ibHibXQwRvAgf6ia352mOJAgKa3qV8nHpFhYYibslVUltyib6naMTdyzG46f4SEoMicmAfx0VbynC0A/640?wx_fmt=jpeg&from=appmsg)

  


  

来源：笛佼科技

**1. 电机效率MAP计算基本原理**

  

▫ 感应电机效率MAP计算即计算感应电机在给定电压范围、电流范围、转速范围和控制算法下的所有转速-转矩运行点的效率

  

▫ 转速、同步频率、滑差率(或者滑差频率)三者只有两个独立变量

  

▫ 因此，给定滑差率、转速、电压幅值三个量就可以决定感应电机的工作状态

  

▫ 在电机效率MAP的计算过程中，只需要对\[滑差率、转速、电压幅值\]进行参数扫描，计算感应电机的转矩输出、转速、铜损、铁损等性能，就可以进一步计算效率等电机性能

  

**2. 感应电机模型**

  

▫ 以一款6极的三相感应电机为例，一个工作点的瞬态仿真模型已经设置完好，检查模型、线圈设置、网格等等。

 - 6 极,36槽

 - Y型联接

 - 额定线电压有效值:350 V

 - 额定相电流有效值:500 A

 - 绕组相电阻:0.015Ω

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hBDA3CyJKrvNhliczMicPLJHMpG8g8dlic0dhxonHVjaibc4YkFIHlJjaGg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**3\. 感应电机设计的效率Maps结果**

  

**(1) 为了提高仿真速度，我们将使用周期TDM算法，但这需要锁死转子的运行**

对于感应电机，使用周期TDM或者半周期TDM，要求包括感应涡流在内的所有源都处于相同频率，这意味着周期TDM或半周期TDM只有在转子零转速时可以使用。

  

**(2) 转子堵转下的额定运行工况(感应电机)**

▫ 额定运行工况: 由于大的激励电感和小的转子电阻，转子时间常数较大,在核定转速情况转子电流需要非常长的仿真时间去达到稳定状况

  

▫ 参考频率: 同等效电路理论类似，在有限元分析中，转子电阻除以转差率，或者转子电导率乘以转差率

  

▫ 小的转子时间常数: 由于大的转子电阻

  

▫ 周期TDM: 定子和转子同频率可以调用周期或半周期TDM算法

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4h8Gj2eiaBN1RBYTKF9UKtdArQm9O0TibThSN5IQer9w8Np3VBNc8XvzXw/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

  

**4. 周期TDM的转子锁定设置参考**

  

▫ 我们引入对应堵转的等效电导率。去近似在原实际转速下的性能(lip)

  

▫ 对于这种等效处理方式，基本性能参数都能够准确建模，除转子损耗需要根据转差率进行缩放外，像转矩、电流、电压等性能参数都非常准确

  

▫ 在Toolkit中使用周期TDM算法前必须先完成以下步骤:

a. 添加一个名为$slip的工程变量

b. 由于参数扫描会重置这个变量数值，所以Value和Evaluated Value可以任意给定

c. 在工程名上右键，然后选择Project Variables → Add

  

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hBy3RNnId3G7fQiasv5Xh57ShlsibibqPXiajN6zQl5QjPjrFdA3Sxia9eJA/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

  

▫ 修改转子导条材料，将电导率从X改成X\*$slip

  

▫ 将端部联接导体电阻从X改成X/$slip

 (Exitations→Endconnectionl→Endresistance)

  

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hjztC8iafe8H6sssMu8QO4NzibEsogdfKMK5cbVKvFO21TI4KXnib5V79w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4h4Mj4mxdaMuwtDhTBGRpXBwvKsX0ykDU9wqbPAuO7zD4Y026ADFFZ0w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**5. 周期TDM算法的HPC设置**

  

在HPC设置方面，激活两个层级选项：Setup1>HPC and Analysis Options

  

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hJ3KFxFrMdKXyFzib8yRdAdUmgUicC9xlO2RsOZ9ex8H8wHlE463t35UA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**6. Machine Toolkit**

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hN8WAS5GMFmsMYPicKgUqzRNMoGLRuibf28e5cpOYUXGRXUhjOKB871tg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**7. 电机Toolkit**

  

**(1) 用户输入1**

▫ 从ACT Extensions中启动电机Toolkit工具

  

▫ 选择需要进行电机效率图计算的感应电机模型

  

▫ 检查参数设置情况

  

▫ 仿真的电机运行模式:Motor

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hrDAQA1FAwcUbEOZjoAdybQeGRj8eIrWe2HIEbADaRRzrPC0kca9qqA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**(2) 用户输入2**

▫ DOE设置

电压幅值点数 10个;转差率点数为0.001-0.2 10个，0.2-0.8 10个；转速点数为12个；总DOE点为10\*(10+10)\*12=2400个

  

▫ 转矩限制:675Nm

▫ 最大转速:7200rpm

▫ 最小转差率: 0.001

▫ 最大转差率: 0.8

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hZAiaib0y9d6NwopiceZqeGPMWnhWHgmuRGicarsiaezvSeSV8dTHVEw18pQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**(3)  用户输入3**

▫ A相电阻 =0.015 0hm

  

▫ 线圈端部电感=0mH

  

▫ 机械损耗：摩擦损耗 87.5W，风损 87.5W，参考转速 4000 rpm

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hunweXvCHJKBejYXakcW8FXb0nXnCfNKgLiamJDaQjBiayyUjwoC03w9w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**(4)  用户输入4**

▫ 在最后一个页面检查并根据需要更改设置

  

▫ 点击 Finish

  

▫ Toolkit将会自动创建新的仿真设计分析文件，求解参数列表方案，创建图示结果

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hjpDyTaHKibYBRY8snM9fFYJAEzdcAElGXt9HHYYUVSsfzvGWy8aoicuQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**8.  参数列表**

  

▫ 参数列表包含有2400个仿真设计点方案

  

▫ 线性扫描三个变量参数

$slip: 0.001-0.8

Speed TSC: 0-7200rpm

Vmax TSC:285.77V【极限的线电压有效值: 350V，单相峰值电压=350V\*sqrt(2/3)=285.77V】

  

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hYyyianp1ib5JcEZiasrdvFTMm8cO1DZ6snW4FlR8ac3qxL9efzGPPPcvQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**9. Maps结果输出**

  

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4h3cKVl7Yxqc0VsvNZcNvs9gS3s2zvtloPgDQcjHRwten6SSPqHS9Ktg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/l1rwDPAH441kmc3S8K3eqLiaj6Lgbet4hYWMD50u0XDiaPNJyQBygoMmKybK4iaWezCNfAAQjbunMwrLXnrD5LWqA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  


![](https://mmbiz.qpic.cn/mmbiz_gif/vibkgHlPVq0uibkIvkAHOPtHA9gym3XODEWrQGWXmjNHrmp8Mp3Mv8wdYjoiaNyL1EPibFpmHlcYK1m1wplSBia5vXg/640?wx_fmt=gif)![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)