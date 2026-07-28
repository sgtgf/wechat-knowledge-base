# 输入输出压差大用DC/DC，压差小用LDO，但压差真的是越小越好吗？

原创 王工 硬件笔记本 2026-03-09 07:59 四川

> 原文地址: [https://mp.weixin.qq.com/s/g-WJ8l-1r1Pg4NZrRdMD9w](https://mp.weixin.qq.com/s/g-WJ8l-1r1Pg4NZrRdMD9w)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

大家都知道，咱们在电源设计中有个基本原则：当输入输出电压差较大时，通常选择DC/DC转换器，因为它的转换效率更高、发热更小；而当压差较小时，则倾向于使用LDO线性稳压器，虽然效率相对较低，但结构简单、噪声小。这一点想必大家都有所了解。

今天我们想深入探讨的是：当决定使用LDO时，输入输出压差到底可以小到什么程度？这个小是否存在一个明确的下限？背后的原因又是什么呢？这正是本次讨论想跟大家理清的一个问题。

  

01

了解基础参数：Dropout Voltage

咱们随意翻开任何一款LDO芯片的数据手册，你都会看到一个关键参数：Dropout Voltage。这个参数的定义很明确：**LDO能够维持目标输出电压Vout时，输入电压Vin和Vout之间的最小电压差**。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaea9OQVDia1EXNteicmI1GicrJibLcGzVZm6mPPSlicS8CFtZWqfXYiaw2jFkicHMKtPg9iaZP17qCPLvMx2RQibqWTnbqmd4uZuPlsem1k/640?wx_fmt=png&from=appmsg)

用公式表示就是：

当 Vin - Vout≥ Dropout Voltage 时，LDO正常稳压；

当 Vin - Vout < Dropout Voltage 时，LDO进入Dropout模式，输出电压开始下降，无法稳定在目标值。

为了让大家更清楚的了解它，咱们来看看手册。这个手册写的非常详细，不同的输出电压，对应Dropout Voltage范围是多少，这里都有很详细的备注说明，包括Dropout Voltage的典型值，最大值范围都给出来了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadMq0RoIhIFw4C7fODk7ShS9Lc7QPB63RsUMFhLLLEJL44vNfP7poWJDfs9E3c3pJUjWVTPpThUhP7X6MwYWvfkoYZV6Hxiaqzg/640?wx_fmt=png&from=appmsg)

我们再将这个图进行放大，如图红色圈出，当我们输出的电压范围在3.3V到5V之间，Dropout Voltage的电压范围典型值为300mV，最大值为425mV，当然我们在设计时，一般都会按照最大值去设计。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafHcfdP4Svufqh3hMrkr0JAdrjEZp0MGic1tic4NdAw3zf7WVJzoqSZicJG2C0CriaGCGKHk8ZbuxFXzXjVzlk6DMv5rU7Ca4Zlg5E/640?wx_fmt=png&from=appmsg)

通过这个表，咱们来举个更详细的例子，假如我们就用上面这款LDO，它的Dropout Voltage最大值为0.425V，假设输出电压设定为3.3V。那么：

-   Vin必须 ≥ 3.725V，LDO才能正常输出3.3V
    
-   如果Vin=3.5V，压差只有0.2V（小于0.425V），此时输出电压会小于3.3V，并且无法稳压
    

这个例子清晰地说明了为什么在LDO选型时，必须仔细阅读规格书，确保输入输出的压差大于Dropout Voltage。但问题来了：Dropout Voltage只是芯片手册上的一个数字吗？我们在实际设计中只需要满足这个数字就行了吗？答案是否定的。

  

02

Dropout Voltage怎么来的？

要真正理解Dropout Voltage，咱们得先从LDO到底怎么工作的说起。

LDO内部通常包含几个关键部分：误差放大器、基准电压源（Vref）、反馈电阻网络和一个功率晶体管（现在的LDO常用PMOS管）。

它是怎么稳压的呢？

误差放大器会不停比较两个信号：一个是基准电压Vref，另一个是从输出电压Vout通过电阻采样回来的反馈电压。只要两者有细微差别，误差放大器就会调整输出给功率MOS管栅极的电压，从而改变这个MOS管打开的程度——导通电阻一变，流过它的电流就变，最终把输出电压Vout拉回到设定值。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafhcoGg8rksRzaRCgIuwperibLmlXZosPY8ibQEgdyDtGOYumBUzIUFBedRjpic9ZolazDnXqBO4UGMcOmu1DPkr6TdDCZIE7gokA/640?wx_fmt=png&from=appmsg)

**这里有个关键区别：**

**和DC/DC电源那种开关模式工作不同，****LDO内部的功率管主要在‌线性区‌（也称可变电阻区）**。你可以理解为这个功率MOS管从来不会完全打开或完全关闭，而是一直处在开一点、开一半这种精细调节的状态。  

具体来说，功率管需要一定的Vds电压来工作在饱和区或线性区。如果Vin-Vout太小，功率管就会进入深线性区甚至截止区，失去调节能力。这就是Dropout Voltage的物理本质——它代表了维持功率管正常工作所需的最小源漏电压。

  

03

在硬件设计中，我们需要注意哪些？

了解Dropout Voltage的原理很重要，但我们也不用过于紧张，不要害怕它，实际工作中只要把握好下面几个关键点，就能避坑。

第一，注意PCB走线。

我们知道，PCB上的走线都有阻抗，线越细、越长，阻抗就越大。这个小小的电阻，在大电流下会吃掉你宝贵的电压。

举个例子：假设LDO输入是3.5V，要输出3.3V/500mA，LDO的Dropout电压是0.2V。看起来刚好：3.5V - 0.2V = 3.3V。

但实际上，LDO之前的芯片一般是通过DC/DC降压，从DC/DC到LDO输入端的走线，如果有100mΩ电阻，500mA电流流过就会产生50mV压降——LDO实际只有3.45V输入。同样，从LDO输出端到负载的走线，如果有100mΩ电阻，要让负载真正得到3.3V，LDO就必须输出3.35V才行。

这样算下来，留给LDO的实际压差只有：3.45V - 3.35V = 0.1V，根本不够0.2V的Dropout电压需求，稳压一定会失败。

所以，这就是我们平时要求电源走线要尽可能粗的原因，在布线能走通的前提下，尽可能加宽电源走线。  

  

第二，注意输入电源纹波

咱们通常在LDO的前级使用DC/DC开关电源。所有开关电源都有纹波，这意味着LDO的输入电压不是稳定的直流，而是在一定范围内波动的。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadPfFyEAkxjVlVKv7ObFS3q823lv0QtRiao3j9Xef0CianMn5CiaBogyXibe3fASSm0QTV9N6ADHjTCr0HIMWzhxyPft98IqU4okW4/640?wx_fmt=png&from=appmsg)

假设DC/DC标称输出为5V，纹波为±50mV，那么LDO的实际输入电压在4.95V到5.05V之间波动。如果我们按照5V来计算压差，当输入跌到4.95V时，可能就无法满足Dropout电压要求了。

虽然输出电容可以储存能量，在一定程度上平滑输入电压，但在负载瞬态变化或输入电压瞬态跌落时，仍可能出现问题。特别是当系统中有大功率负载（如电机、功放）突然启动时，可能会将前级电源电压瞬间拉低，导致LDO短暂进入Dropout状态。

所以建议输入电压考虑电源纹波，预留LDO输入电压的余量。

  

第三，负载越重，**Dropout越大**  

LDO的Dropout电压会随着负载电流增加而变大。手册上标注的“0.7V@1A”只代表特定条件下的值，不代表所有情况。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf0vZFRJtbRxkViao3oydD86B6FVr0X2cIaES8XvTncDBon0WMRAD3pYgPLMf2aHqdtsL8j9UNZHK9ybicn5L1gX3meQyibVbNquo/640?wx_fmt=png&from=appmsg)

如果你的系统最大负载电流是1A，那就必须按照1A条件下的Dropout电压来设计。很多手册会提供这个曲线图，如果没有，就需要向原厂要数据，或者在实际测试中验证。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadTAUK6ibWerhvauPJADwBHaMVzqU57AculfR0UQesoRKiaiaycaobOAzxfOyuc8rNt6qfqd7KNycqXEbbWPSHCgWonZojD4ib142Y/640?wx_fmt=png&from=appmsg)

  

不要用轻载时的参数去设计重载工况，这是新手常犯的错误。

第四，温度的影响

半导体器件的特性会随温度变化，功率管的导通电阻通常随温度升高而增加。这意味着在高温环境下，Dropout Voltage会变大。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacBGz9HokqZiaSqwJib4tTtnN1PBsEXTfsCbXmtstqB6TMSEwztgpGcrf5xpciauwehnNYQnBxCPSxyGCtUcH1MqIZw36Or9G2icxk/640?wx_fmt=png&from=appmsg)

一般来说，设计时需要为高温情况留出余量，通常建议在室温计算值的基础上增加10%到20%。如果系统工作在极端高温环境，这个余量需要更大。

  

04

小结

最后，回到我们最初的问题：“压差越小越好吗？”对于LDO来说，压差小确实意味着效率高、发热小，但这个小是有下限的——必须大于Dropout Voltage。我们的任务就是确保在各种最坏情况下，这个条件始终成立。

我知道刚才讲的那些考量点——走线阻抗、纹波影响、负载变化、温度效应——看起来有点多，在实际项目中可能很难做到面面俱到。

**最重要的是**：你要知道哪些参数是关键，哪些地方容易出问题。这样，当有一天产品真的出现异常——比如系统在某些情况下会莫名其妙复位，或者输出电压不稳——你至少有个排查的方向，知道该从哪里入手，而不是毫无头绪。

今天的分享就到这里，咱们下期再见。

推荐阅读（点击如下三个图片分别进入）

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiarY1QjAAXM4xYicMNcSBynZzRIkb0HcficMbJJkK7KF6WFiazic8l8XG8VaL4sribQqibM0h9tkibHh0f9w/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247566000&idx=1&sn=0988cf191ab52a936bbd1fb66b08302b&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiarY1QjAAXM4xYicMNcSBynZtP6LBrWrZBWmDvwYic8Y7wllJeXV2hjCS8076vdUk90Pc2PTm4qIfug/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247565665&idx=1&sn=f4515c102713e72b80a0f3b62211e1c6&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiarY1QjAAXM4xYicMNcSBynZMEYJThQJcN4rPKC5HIWVqwOZkUDl9tOeHWGEyc6VrDiaa0Kvtz3nCJA/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247565325&idx=1&sn=16b285f9d38d67db5b3c0deefcccb1f0&scene=21#wechat_redirect)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niadicXL6M10cqB3iaIso20FveqvV7Mh1CIlKQEhTI6wsppDBMBicxSmyfMiaOwRvAtBHKnBDGapobBK9w4IvJhoke8znEJoODYFaYLI/640?wx_fmt=jpeg&from=appmsg)