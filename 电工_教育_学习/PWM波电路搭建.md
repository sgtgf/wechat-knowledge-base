# PWM波电路搭建

原创 蜗牛 硬件笔记本 2020-03-22 08:00 undefined

> 原文地址: [https://mp.weixin.qq.com/s/H6dIA7FpOHiegJi76FIGUA](https://mp.weixin.qq.com/s/H6dIA7FpOHiegJi76FIGUA)

PWM波通常用来作为驱动信号，除了使用驱动芯片，自己也可搭建一个简单的电路产生PWM波。

  

大概思路是由三角波发生器和直流电平分别送入比较器两输入端进行比较。如下图

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKn0OpyeIibUZHeVsbM3lVNwZnG2QU53TvmoUEXuicCMYWCJ9Fc6OgE1dYloOOL8ia3V7U9EEzMk8olA/640?wx_fmt=jpeg)

  

首先做一个三角波发生器，基本原理就是电容的充放电。运用比较器LM339，R1和R2电阻分压给出一个参考电平，因为比较器内部电路是OC输出，所以输出端接一个上拉电阻R3。

  

当5脚＞4脚的电压，输出端为高，等效电路如箭头所指，R3、R5串联后与R1并联，再和R2串联分压，参考电压计算得出V1=9V。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKn0OpyeIibUZHeVsbM3lVNw5Jv3kH6C8gmvA7ujzcNiclTmLOhiadhwmXbk2yNlQen2sqyx58TKdicdA/640?wx_fmt=jpeg)

  

当5脚＜4脚的电压，输出2脚为低，等效电路如剪头所指，R2和R5并联后与R1串联分压，参考电压计算得出V2=5V。 

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKn0OpyeIibUZHeVsbM3lVNwgTFO2IrOBA7JZibJGFDaohhB8PDGBoRtz4At0soCiapJgGgGHpeiczTPw/640?wx_fmt=jpeg)

这样就实现了输入端随输出端变化而变化。

  

整个过程如何分析呢？

开始上电时，正输出端有一个直流电平，电容没有充电，所以没有电压，输出为高电平，此时5脚电压为9V。15V经过R3，R4给电容充电。当电容电压＞9V后，4脚＞5脚电压，输出电平由高变为低，此时正输入端的电平变为5V，电容经过R4放电。当电容上的电压＜5V后，输出电平变为高电平，进入下一个周期。

  

通过调整R4的阻值，可以改变电容的充放电时间，进而改变三角波的频率。

通过改变R1，R2，R5的阻值，可改变三角波的幅度。

所以可实现一个输出可调的三角波。

直流电平电路如下：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKn0OpyeIibUZHeVsbM3lVNwV7wACNe5hHIgNg3pRS7uPmN0QKD5AwI0WdWv0O4ady0aYB6AV6VINA/640?wx_fmt=jpeg)

电容充放电是非线性的，电阻本身是线性的，所以直流电平不能采用电阻分压的形式。

采用射极跟随器电路，发射极电压跟随基极电压变化而变化。当基极电压减小，三极管导通，C2经过Q1迅速放电。

把三角波送入比较器负端，直流电平送入比较器正端，比较器输出端便可产生PWM方波信号。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKn0OpyeIibUZHeVsbM3lVNwbjoQuX6SzaezQicg64otzXj0Otdn1P1RCzqqQeAUwYekFQR5zx7n8NA/640?wx_fmt=jpeg)