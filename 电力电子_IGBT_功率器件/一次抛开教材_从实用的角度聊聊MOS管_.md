# 一次抛开教材，从实用的角度聊聊MOS管。

原创 硬件笔记本 2021-11-08 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/uVTC--LeR4GPcber4trg8Q](https://mp.weixin.qq.com/s/uVTC--LeR4GPcber4trg8Q)

**当说到MOS管的时候呢，你可能想到它就是一个开关管。**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaps1fw0aK2EGF0og6hTOtfafo9DW6TJEh3gWCoxjSIuTdgeoxfEiaIibQ/640?wx_fmt=png)

  

  

_DIAN CHAO_

在大部分的教材里都会告诉你长长的一段话：

MOS管全称金属氧化半导体场效应晶体管，英文名Metal-Oxide-Semiconductor Field-Effect Transistor，属于绝缘栅极场效晶体管，以硅片为秤体，利用扩散工艺制作.......有N沟道和P沟道两个型。不仅如此，它还有两个兄弟，分别是结型场效应管以及晶体场效应管.......

  

面对这么大一段话，我不知道你有没有搞明白，反正我大学里是完全没有搞明白，学了一个学期就学了个寂寞。

  

**那为什么这些教材要这么的反人类，他们难道就不能好好写说人话吗？**

  

我大概分析了一下，因为同一本教材他需要面对不同专业的学生，所以教材最重要的是严谨。和全面相比是不是通俗易懂就没有那么重要了。而且一般的教材也不会告诉你学了有什么用，这就导致了在学习中你很容易迷失在这些概念中，抓不到重点。

  

那本文呢，是根据自己的工作学习经历，抛开书本上这些教条的框架，从应用侧出发来给大家介绍一下MOS管里面最常见也是最容易使用的一种：增强型NMOS管，简称NMOS。当你熟悉了这个NMOS的使用之后呢，再回过头去看这个教材上的内容，我相信就会有不同的体会了。

  

**NMOS的用法**

首先来看这么一张简单的图（图1），我们可以用手去控制这个开关的开合，以此来控制这个灯光的亮灭。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaS49R51ibhI6LgY8Ylnia9eXvErV5jUM2b958CmI1v2I6cibx90VrYY5ag/640?wx_fmt=png)

图1

  

那如果我们想要用Arduino或者单片机去控制这个灯泡的话呢，就需要使用MOS管来替换掉这个开关了。为了更加符合我们工程的实际使用习惯呢，我们需要把这张图稍微转换一下，就像如图2这样子。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaeRD1MZpVAGnQs0Kw54yl6nfAiaqaWW0zF9yeMm4j3wEbF0q3H6VHzqA/640?wx_fmt=png)

图2  

  

那这两张图是完全等价的，我们可以看到MOS管是有三个端口，也就是有三个引脚，分别是gate，drain和source。至于为啥这么叫并不重要，只要记住他们分别简称g、d、s就可以。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaib9lp2DDO8O7sZbTRf0jRsrrvE8SfaLCkHHHicuN4KDeiafBYc48PRzJQ/640?wx_fmt=png)

图3

  

我们把单片机的一个IO口接到这个MOS管的gate端口，就可以控制这个灯泡的亮灭了。当然别忘了供电。当这个单片机的IO口输出为高的时候，NMOS就等效为这个被闭合的开关，指示灯光就会被打开；那输出为低的时候呢，这个NMOS就等效为这个开关被松开了，那此时这个灯光就被关闭，是不很简单。

  

那如果我们不停的切换这个开关，那灯光就会闪烁。如果切换的这个速度再快一点，因为人眼的视觉暂留效应，灯光就不闪烁了。此时我们还能通过调节这个开关的时间来调光，这就是所谓的PWM波调光，以上就是MOS管最经典的用法，它实现了单片机的IO口控制一个功率器件。当然你完全可以把灯泡替换成其他的器件。器件比如说像水泵、电机、电磁铁这样的东西。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaicZadadcxlpqY1eQqxqcpsdo1OdVY4N1kFMevUkW14YNMAwVnibyiabqA/640?wx_fmt=png)

图4  PWM波

  

**如何选择NMOS**

明白了NMOS的用法之后呢，我们来看一下要如何选择一个合适的NMOS，也就是NMOS是如何选型的。

  

那对于一个初学者来说，有四个比较重要的参数需要来关注一下。**第一个是封装，第二个是vgsth，第三个是Rdson上，第四个是Cgs。**

  

封装比较简单，它指的就是一个MOS管这个外形和尺寸的种类也有很多。一般来说封装越大，它能承受的电流也就越大。为了搞明白另外三个参数呢，我们先要来介绍一下NMOS的等效模型。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaWLWPYdSLX7s3TWAy3bz8thyghJYyFaVfyqFPFE1mB1ibBw0Cj9pe55Q/640?wx_fmt=png)

图5 NMOS等效模型

  

MOS其实可以看成是一个由电压控制的电阻。这个电压指的是g、s两端的电压差，电阻指的是d、s之间的电阻。这个电阻的大小呢，它会随着g、s电压的变化而产生变化。当然它们不是线性对应的关系，实际的关系差不多像这样的，横坐标是g、s电压差。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoias631mGazERCKRMMJkc22piaKAdibh6iciafRjmtjiamzwFJk9fK0m1wf3yg/640?wx_fmt=png)

图6 Rds与Vgs关系图

  

纵坐标是电阻的值，当g、s的电压小于一个特定值的时候呢，电阻基本上是无穷大的。然后这个电压值大于这个特定值的时候，电阻就接近于零，至于说等于这个值的时候会怎么样，我们先不用管这个临界的电压值，我们称之为vgsth，也就是打开MOS管需要的g、s电压，这是每一个MOS管的固有属性，我们可以在MOS管的数据手册里面找到它。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaIUqWmm5905uIcgeJgaEeZib4mYiaWBljzocGXUSSnI7C49w8p0aKkldA/640?wx_fmt=png)

图7 MOS管数据手册

  

显然vgsth一定要小于这个高电平的电压值，否则的话就没有办法被正常的打开。所以在你选择这个MOS管的时候，如果你的高电平是对应的5V，那么选3V左右的vgsth是比较合适的。太小的话会因为干扰而误触发，太大的话又打不开这个MOS管。

  

接下来我们再来看看NMOS的第二个重要参数Rdson，刚才有提到NMOS被完全打开的时候，它的电阻接近于零。但是无论多小，它总归是有一个电阻值的，这就是所谓的Rdson。它指的是NMOS被完全打开之后，d、s之间的电阻值。同样的你也可以在数据手册上找到它。这个电阻值当然是越小越好。越小的话呢，它分压分的少，而且发热也相对比较低。但实际情况一般Rdson越小，这个NMOS的价格就越高，而且一般对应的体积也会比较大。所以还是要量力而行，选择恰好合适。

  

最后说一下Cgs，这个是比较容易被忽视的一个参数，它指的是g跟s之间的寄生电容。所有的NMOS都有，这是一个制造工艺的问题，没有办法被避免。

  

那它会影响到NMOS打开速度，因为加载到gate端的电压，首先要给这个电容先充电，这就导致了g、s的电压并不能一下子到达给定的一个数值。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiadbsicObFyMeHG31ZMibWEoiaeEuE1VMhYzzoSiaEpXpuERPbojRHcDiarYKgjqBXLp1iclWO8NynNhElg/640?wx_fmt=png)

图8  

  

它有一个爬升的过程。当然因为Cgs比较小，所以一般情况下我们感觉不到它的存在。但是当我们把这个时间刻度放大的时候，我们就可以发现这个上升的过程了。对于这个高速的PWM波控制场景是致命的。当PWM波的周期接近于这个爬升时间时，这个波形就会失真。一般来说Cgs大小和Rdson是成反比的关系。Rdson越小，Cgs就越大。所以大家要注意平衡他们之间的关系。

  

**以上就是关于NMOS大家需要初步掌握的知识了。**

  

  

**文章来源网络，侵删。**

  

  

_**\-END-**_

  

  

  

  

推荐阅读

  

  

  

-   [开关电源设计之MOS管驱动电路](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486115&idx=1&sn=753c9464b0bc2009544e27fd19e43847&chksm=c309d471f47e5d671f04e636d6a07ea54929a53fc97be375cc0342cd38cdb8b386b2e88e4f25&scene=21#wechat_redirect)
    
-   [最经典MOS管电路工作原理及详解没有之一](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486113&idx=1&sn=a17a609cbc29d5cfcc863edd37f297be&chksm=c309d473f47e5d65f0dcc05df300842afca5a07ff4920c8ceb8fe3c3bd9df55a05c1ea8d2e8c&scene=21#wechat_redirect)
    
-   [MOS管手册解读](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486016&idx=1&sn=8cedf1c5777bceb28c65a854240ec9b0&chksm=c309d492f47e5d848318c260bb540079e3734d5bc98d84a7d4452ad41f3d61055fdab61c1256&scene=21#wechat_redirect)
    
-   [搞懂MOS管，你不得不知道的米勒效应](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486056&idx=1&sn=88fca5b6ad42955d7d14c8f561245a4e&chksm=c309d4baf47e5dac18b757b4ade96196daee6827e7446da3050edbcfbb867fa6328640d97fb7&scene=21#wechat_redirect)