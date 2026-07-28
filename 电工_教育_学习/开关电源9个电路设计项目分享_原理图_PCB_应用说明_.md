# 开关电源9个电路设计项目分享，原理图，PCB，应用说明！

原创 硬件笔记本 2022-06-13 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/UkfaqrWR803PKiz4IMPZmw](https://mp.weixin.qq.com/s/UkfaqrWR803PKiz4IMPZmw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

  

  

**应用实例（1）**

  

一种简单的三段式铅酸电池充电器控制电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtgCNsapibA5srR4rn11Tv1XhzCvlHmvuNSXt0ocwBrjvZj4M3hwQI8bg/640?wx_fmt=jpeg)

一种简单的三段式铅酸电池充电器控制电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPttEPbd64L9pbzqPb9k7IyQlVmSxMMJPHQC47cwqT4bVoJYAK6Bh33EQ/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtSUZ5sXzFJPKFibrjXZic7Ud3MIE3vCMJ5iaN8KTT0pwgbExGFwicAsh2pA/640?wx_fmt=jpeg)

本PCB文件是由上图原理（没有继电器电路）设计的12V/4A简单的三段式充电器。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtg5Rxd9uOp49Co2oiaCUmn2iaV220oHKI6QwDmTNT3Caic5MyVkpiclHb2g/640?wx_fmt=jpeg)

  

**应用实例（2）**

  

简单的单颗TL431限流恒压控制方法：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtY7zVY7icmeJZj3ooh2UTQm8EN40YDa8CA22g84A8VXxGGMjv55qSoFA/640?wx_fmt=jpeg)

当电流增大时TL431-1的电位被太高，从而起到现在电流的功能，因为R3的存在对输出电压进行了补偿。所以基本上可以做到限流稳压功能为一体，具有相对的成本优势。

  

**应用实例（3）**

  

一种低压氙气灯电源启动电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtIwbicibQslEyBRclG9A4cRU7FXbhUgrByrF513JMDPE1mibB6jPDCCkdA/640?wx_fmt=jpeg)

此电路是一个限制输出功率的半桥电路，利用电容限制电流的方法。（调节VR2可以得到不同的启动电压值，调节VR1可以得到不同的输出电流来匹配不同的低压氙气灯的搭配）。

  

输出两个绕组，第一个是能够提供27V30A的主绕组，第二个是能够提供140V启动电压，经过串联在整流二极管前面的电容来限制启动机电流<0.5A电流的。当开机时输出电压根据辅助绕组的反馈电压，开环状态启动绕组电压被限制到140V左右，氙气灯在高达140V电压立即启动后，由于高压绕组的串联电容存在，这个电流无法高起来。而一旦氙气灯启动，此电压被迫同步拉低到主绕组电压27V左右，因为前端互感器电流采样使得输出功率受限制，所以27V的电压不会被抬高。

  

因为串联电容限制电流达到同步启动的方法使得电路必须工作在固定频率下，而输入电压范围也不能偏差太高。一般在5%范围内变化不会影响氙气灯的正常工作。

  

此电路的特点就是有效解决同步启动的问题，实现自然同步比软件控制更为可靠。

  

氙气灯的启动特点就是要求必须完全同步，如果电压低就无法启动。但一旦启动后电流就必须在电流上来的同时电压要降低到24V-28V，过高就会出现灯管爆炸的危险，电流低于25A就会熄灭。而熄灭后不能立即重新启动。应用这一方法得以有效且低成本的满足要求。

  

  

  

**应用实例（4）**

  

一种波形比较理想的变压器隔离驱动电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtj4Q92dzjJ7mrqkYDxeT9M0hbiaSq4zqGZdFBdibQPnVmndFfr3hl04LQ/640?wx_fmt=jpeg)

  

波形比较理想的变压器隔离驱动应用实例：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtMEyTq7R5R3R9MwmMrExtIbhzSAXKVsBWL7aSCRpvYWnjbz2r7oiaAlg/640?wx_fmt=jpeg)

  

**应用实例（5）**

  

偏小变压器反激开关电源设计之参考建议本案例是EC-2828变压器全电压输入，输出功率60W。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtxOjNgxYsJswLEficX3CRtQFlGvGjuYEnHib9MIWJGv5DRWI7ic3U1qYKw/640?wx_fmt=jpeg)

EC-2828变压器全电压输入，输出功率60W。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtfRbky1J3KibAOHxIrDx8rQVqFUytAyLxFskYM7U9Kyp5tbibkxicy1jZQ/640?wx_fmt=jpeg)

  

对于偏小磁芯变压器的设计：主要有磁芯Ae面积偏小的问题，将会带来初级圈数偏多的现象。可以适当提高工作频率，本案例工作频率在70KHz-75KHz。由于圈数偏多初次级的耦合将会更有利。所以VCC绕组电压在短路瞬间会上冲到比较高的状态，本案例原理图上有可控硅做过压保护功能。而后因为次级绕组的短路耦合到VCC绕组使其电压降低到IC不能启动这个过程是可以实现的。

  

要做到以上特性：VCC绕组线径必须要小，我个人一般取0.17mm以下，小于0.12会很容易断。这样小的线径谈不上节约铜材，但是可以利用铜线的阻抗来代替很多设计人员习惯在VCC整流二极管上串联小阻值电阻的功能，而且这个利用线圈本身的阻抗对交流的抑制能力在本案例当中更有效，可以防止瞬间冲击而损坏后级电路的功效。

  

初级与次级主绕组必须是最近相邻的绕组，这样耦合会更有利。

  

开关电源在MOSFET-D端点工作时候产生的干扰是最大的（也是RCD吸收端与变压器相连的端点），在变压器绕制时建议将他绕在变压器的第一个绕组，并作为起点端，让他藏在变压器最里层，这样后面绕组铜线的屏蔽是有较好抑制干扰效果的。

  

VCC绕组在计算其圈数时尽量的在IC最低工作电压乘以1.1倍作为误差值，不用考虑铜线的压降，因为启动前电流是非常小的，所以这个电阻并没有多少影响，几乎可以忽略不计。而在电路未启动之前，由于高压端启动电阻的充电，可以将VCC上电容上的电压充到IC启动的电压，一旦电路有问题一下启动不了VCC由于绕组电压的预设值偏低。电路也是不会启动的，一般表现为嗝状态。

  

为何要按照IC的工作电压低端取值？因为我们次级绕组是与初级绕组相邻绕制的，耦合效果相对而言是最好的。我们做短路试验也是做次级的输出短路，因为耦合效果好，次级短路时VCC在经过短暂的上冲后会快速降低，降到IC的关闭电压时电路得到最好的保护。需要注意这个电压需要高于MOSFET饱和导通1V以上，避免驱动不足。

  

还有利于降低IC本身的功耗，是否可以提高IC的寿命无法验证，但稳定性应该更高。

  

**应用实例（6）**

  

一种反激双路输出相对稳定的解决方案：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtuxG5oFShQJzgHOYx28lPsnfT87cKPKvVuBbKT9Nx5MibYuEjibn7LXOA/640?wx_fmt=jpeg)

具有相对稳定输出的双路反激输出电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtde6Kl0ft0dOAfqIwlg6G4oh22rVYD8gXLHAtmZngIkZUA9njJjXjuA/640?wx_fmt=jpeg)

这种电路一般应用于小功率电源。为了确保两个绕组的交叉调整率更好。我们需要注意一些问题。

  

在本实例中，一般我们设5V为采样反馈端，如果双路采样交叉调整率可能会更差，甚至不能单独空载和独立带载问题。此方法得以解决这一问题。此方法不太适合两组电压相差遥远的应用。会多占用变压器一脚。

  

反馈光耦供电用12V供电，且取样点在后级滤波电感前面更好。因为滤波电感前的波动更快的反映前端PWM的调制状态，就算TL431的开启程度是一定的，因为12V的波动可以让光耦上反馈到的电流有微小的差异，在反馈环路一定的情况下，这个光耦供电取样点的选择更有利于动态响应和调整率的平衡控制。

  

12V绕组应该放在更接近于初级绕组的地方。这样更有效的确保12V的电压变化比例更小，因为我们反馈采样的是5V端，所以难控制的是12V的绕组。综合这些将可以更好的控制这两个绕组的平衡度。虽然不能做到绝对的好，但是相对的来说是有一定参考价值的。

  

上页所述的样板基本可以控制到+/-5%范围的误差，属于可接受的范围，建议喜欢动手的朋友不妨试一下。

  

  

  

**应用实例（7）**

  

应用于功放的正负输出电源欠压式短路电压保护控制电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtNVpxrbnNuXvibUSfShbP3CMUNqaIib0dSv4iacDZ9Mej4BaoDBmlmmhYg/640?wx_fmt=jpeg)

说明：功放电源正负双输出电压保护

  

**1）由Q1构成正电压欠压式短路保护电路**

当正电压短路时，电压降低于稳压二极管加在Q1驱动分压电阻分压后让Q1导通，即可送出保护信号。

  

**2）由Q2构成负电压欠压式短路保护电路**

当负电压短路时，电压升高至串联于Q2基极上稳压二极管，使Q2截止时，Q2集电极上的电压信号经过D2即可送出保护信号。

  

**3）Q3是作为保护的指示灯驱动电路**

这个电路在实际应用中需要做到对供电的VCC在正负电压从开机到启动正常这段过程的延时，否则开机时就有保护信号，导致无法正常开机。如果需要锁死可以用输出保护信号驱动一个由三极管构成的可控硅锁死电路来实现。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtUo4m5YDLsmwoicPKfyibmRFPYX1BrHOeAGcBdXD6hjYLVD9vO5ShKuDg/640?wx_fmt=jpeg)

具有正负双输出电压保护的功放电源PCB：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtZo5VJURCtNhArsrSpqicib8dhhE8wPv6SubkPdt0AIMoq5L79yGmZhdA/640?wx_fmt=jpeg)

  

**应用实例（8）**

  

用LM358实现LED输出端限流稳压PWM调光控制：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtPOaw6Letj6licCAsOJEiamPhInss20fVnKNcQibVIR7sibia9vFWlR40jfQ/640?wx_fmt=jpeg)

此例应用是将PWM信号直接加在电流采样信号上，通过调节PWM的宽度来调制过电流保护信号的时间，而起到调节限制电流的功能的。

  

需要注意的事情是PWM需要倒相输入，就是说占空比越小的时候LED上施加的电流越大。占空比越大时LED电流越小。

  

**应用实例（9）**

  

一款带带功率因数补偿的50W LED驱动电路：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtbgkBeNjzL0fjbSXYsAcVTTHklMazDx6JdDCl65HwqjobHLeyOKMqgg/640?wx_fmt=jpeg)

带功率因数补偿的50W LED驱动PCB：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd39EicUJGb0qOtFgiabkEbPtOWEcTXMvcPjlBqC1tlYlV149fjtvH8RGDyehN9icpwO8yvR08MMSLTA/640?wx_fmt=jpeg)

  

文章来源网络，如有侵权，请联系删除。  

  

**后台回复“**加群**”，管理员拉你入技术交流群。**