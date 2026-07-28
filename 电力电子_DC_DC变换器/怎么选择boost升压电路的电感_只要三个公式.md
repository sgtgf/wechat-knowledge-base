# 怎么选择boost升压电路的电感？只要三个公式

原创 工程师看海 硬件笔记本 2021-09-24 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/LlmN3aHTL1K4s0HAZpvkqA](https://mp.weixin.qq.com/s/LlmN3aHTL1K4s0HAZpvkqA)

BOOST电源架构是一种非常经典的升压电源方案，它是利用开关管开通和关断的时间比率，维持稳定输出的一种开关电源，它以小型、轻量和高效率的特点被广泛应用在各行业电子设备，是不可缺少的一种电源架构。  

以前介绍过BOOST电路的基本原理：

[BOOST升压电路原理详解](http://mp.weixin.qq.com/s?__biz=MzI0ODgxMTg4Mg==&mid=2247486916&idx=1&sn=4c5f4a6d09fa69983ce50f4a61e08570&chksm=e99a55c1deeddcd764e6d189e64cc4e938631413d682affdb826e80cfe459d27d2d4c71d5019&scene=21#wechat_redirect)  

加微信「chunhou0820」获取：boost仿真文件

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJrqf4Jp7ibYMzaBQgqzwibwLmlBpV8XMyDPY7c5J0lvmgCXBAr8Iwc59Q/640?wx_fmt=png)

今天介绍下怎么选择Boost升压电路的电感，看完这篇文章你就会选择电感了。

根据以前文章的推导，开关闭合时，充电路径见上图绿色回路，此时给电感充电，可以列出方程：

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJCszZicgcoVJJdCMfQL41ZPleLxpG0ZjWuvaa2VIGdibwy16R3VsY9Nkg/640?wx_fmt=png)

其中：

Vi：输入电压         L：电感量    △Ion：充电时电感电流纹波

D：开关的占空比    T：开关周期，是频率f的倒数

将上面公式稍微整理，可以得到：

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJjeU3bsJI7L3TnicBNz7WIibpRn1zaJibOjAicF9taOiczHVJqIeiayA5EkQQ/640?wx_fmt=png)

截止到此时，我们得到了流过电感的电流纹波，然后需要求出流经电感的平均电流：

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJhfkUQus9aWfFwXJhnq8JPrvuKCdcJoj03GEkohPbLVSU8XricnVK4cw/640?wx_fmt=png)

η是boost的效率，开关电源效率一般是比较高的，如果只是近似计算，效率可以取90%。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJJGiaFhN5GyDutic7kxibDJrSJ1sWGqREddEc3YN7BC7RQPD4KNSibZ5h4g/640?wx_fmt=png)

最后一个公式，电源的输出总电流，是直流电基础之上，叠加的交流电流，我们需要计算直流加交流时的最大电流：

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJySlUP6iaH9OdwpqFchbqYzmlzOo1wFQTof89rvvjKhFs3HtUjp9P2Uw/640?wx_fmt=png)

  

以上就是推导过程，重新整理3个公式：

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJEwpgzbtrgIeSnP0oibOicV0KafVzrQa9By0d4R0Gic1JNbD2SBzM4F2cw/640?wx_fmt=png)

从推导的公式可以看出，选择大电感时，产生的纹波也小，可以降低电感器的磁滞损耗和 EMI。但同样地，物极必反，负载瞬态响应时间增加。

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJPAvaI6opAsiaBRKxXooOWz8YmQu7ws3sIEhqRKaAuIAFkvsxhjicn6gQ/640?wx_fmt=png)

我们对上图中的boost进行仿真，分别对比470uH和100uH时的纹波，示波器中绿色的是输出电压，红色的是电感电流。

  

可以看出其仿真结果与计算基本一致，在Vi=10V，Vo=20V，f=20Khz，D=50%前提下：

电感选取为470uH时，△Ion=0.5A；

电感选取为100uH时，△Ion=2.5A；

（1mV=1mA）而输出电压基本不变

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJibOiajichqqC0AML4rRibKxSplT7yFry32mibG6o16ib9SDib0bmhYhIXftFg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2aJeN2dC5t4mibpH6q14WD9icPdI1YrhoJT9Ov4OXkqkkz3cwqKvHXun9fY9wKl7UarkpDAjrbuSkzJ5MdzLlaAQ/640?wx_fmt=png)

以上介绍的是计算流经电感的最大电流，下面介绍如何根据电流选择电感，知道了最大电流再选择电感，此过程和选择BUCK电感的过程接近，可以搜索下面文章：  

怎么选择BUCK降压电源的电感？

电感参数有哪些？怎么选择电感？

1\. 电感值  

电感值通常要留一定余量比如20%-30%，然后将具体数值落入实际的电感值内。

2. 饱和电流  

Isat要大于计算的最大电流，一般建议Isat要比Imax高大约20%-30%，否则可能使得电感烧毁。

3\. 自谐振频率

理想电感的阻抗随着频率增加而增加,而实际电感具有直流电阻和寄生电容，在低频处呈现感性,在高频处呈现容性。我们需要让电感的自谐振频率避开它的工作频率，一般可以以10倍频率作为参考，也就是说开关频率要低于谐振频率的10%。

4. 直流电阻DCR

大的DCR会引起热损，尤其是在重载情况下，对于DCR具体的选择一般没有特殊要求，尽量小一些。