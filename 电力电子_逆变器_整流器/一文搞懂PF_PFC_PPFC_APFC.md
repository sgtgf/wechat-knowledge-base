# 一文搞懂PF、PFC、PPFC、APFC

原创 硬件笔记本 2023-01-28 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/euNj3hO7hYdqB3f\_GbT4qA](https://mp.weixin.qq.com/s/euNj3hO7hYdqB3f_GbT4qA)

  

  

  

**理解交流供电的特殊性**

**理解供电厂与用电设备模型**

●供电厂提供的为交流电，也就是说，供电厂提供的能量是呈现出正弦形式的波动的，而不是一直持续不变的功率。

●电厂到用电设备之间的传输线是有电阻的，这些电阻会消耗能量。

●用电设备有电阻性的，也有电容和电感性的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDHDPib4sjdGrInMmqX66jHeKqHNXg5bDiclhxs04zica4GicSH65QXLjoQw/640?wx_fmt=jpeg)

**各种负载类型的设备的等效电路**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YD1w2viadRbMQJic33HnBO4Azb1pMN8SudsA6dbicxkxW0CtHwJpKdq7g4g/640?wx_fmt=png)

**各种负载的情况**

●下图示出了4种类型负载的消耗能量的情况

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDUcStJQAfniahtwlcCboxa794GHnfFibEHFibvlfhibjSCibvE6eR9vub6hw/640?wx_fmt=jpeg)

**详细分析各种负载的情况（电阻V.S. 感容）**

●由前面的图可以看到，消耗的功率=U\*I，电阻消耗的总是正功，而电容和电感却不是，一会正功，一会负功，也就是说，电感和电容一会从供电厂吸取能量，一会向供电厂提供能量。

★这个现象的原因是，电感和电容属于储能设备，本身不消耗能量。

●在这个储能放能的过程中，能量都被消耗在了供电线上了，用电设备由于没有消耗能量，供电厂不能收取电费，但供电厂依然需要架设对应的供电设备，并且不停的提供能量。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8HEyDicxYDka6pzJFguF55xpvorMIBMk9ibS2DkfKxDjySP0wib2muuL7w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**详细分析各种负载的情况（二极管的情况）**

●二极管形成的整流电路，加上电容，用来产生直流输出，这是一种很常见的结构，只有在AC电压比电容电压高时，二极管才能导通，此时才有电流，为了提供整个周期的功率，在此范围内必须有很大的电流，也就是说，AC源必须在短短的时间内提供够用很长一端时间的能量给设备。

★由于供电厂只能产生正弦形式的功率输出，为了达到这个目的，供电厂必须建设远超出正常消耗的供电设备，以维持用电设备的用电。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8NO9wTibnfhaEo4uJQljU9HwOsWx1icow55liba2zVHZtJEFULW6y5KvcQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**理解PF和THD**

●为了描述这种电容电感导致的，电流和电压不同步的情况，引入功率因数的定义。

●用电流和电压的相位角之差的余弦值作为功率因数。

★PF大还是小比较好？

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8MdxgjQXqJ8XlzKPRaJ2WQa2eV9cIVicrL8jhpuMdSGkX35ZMg5kicnrQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**总谐波失真（THD）**

  

●非正弦的周期波形能够拆分成傅里叶级数，这样就得到了该周期波形的基波和各次谐波。

●用总谐波失真来表示各次谐波的大小，在供电领域，谐波的大小特指流的大小。

★THD大还是小比较好。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8oREfj5eu4sxHTQSoQMzqT6kUxnCa4sV9PSceIjPcQUPNmqGthtTqNA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

  

**谐波失真的危害**

  

●供电厂产生的电流波形是基波的正弦，而其他高次谐波的波形是供电厂无法产生的，因此供电厂必须使出额外的力气来产生所有的高次谐波，因此THD实际上描述了供电厂必须具备的额外供电能力，或者说做的无效功。

●谐波失真的其他危害还表现在产生了一些高频的信号，这些信号会干扰其他设备，这个干扰可以通过线路传导，也可以通过辐射传播，线路传导称为RFI，辐射传播称为EMI。

**总谐波失真的具体计算**  

  

●谐波失真描述的是一堆正弦信号，或者说交流信号，交流信号讲究的是有效值，因此必须使用方和根来计算，其公式如下：

★第一步，求出每一个高次谐波和基波的比值；

★第二步，比值求和，理论上H可以取到无穷大，但实际应用中，H不会取很大，一般几十就足够精确了；

★第三步，开方。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8knIHJLwmc6XOBu7mVQv02EjIGLjecsFHoyrFXTApC1cOmzLssFhtUQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

**谐波失真的图形表示**

●总谐波失真代表了供电能力的浪费，而高次谐波的幅度则代表了电磁干扰的强度，因此通常还会使用图标来表示谐波失真，这样可以比较形象的看出谐波失真的电磁干扰危害程度。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8Add8DkRSDNuujrIWExS1BzHpTKyT8l6DQX0GtegNyNDU9ib0gAyELLw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**偶次谐波和奇次谐波**

  

●仔细观察可以发现，电流谐波失真图上，偶次谐波的分量几乎为0。

●这个不是偶然，在电力领域，谈到谐波失真，都不需要考虑偶次谐波，只考虑奇次谐波，因为偶次谐波分量可以忽略。

●偶次谐波分量为0的原因在于电流波形总是呈现正负对称的形式，这种对称波形称为奇谐波形，其偶次分量为0，其分析如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDiaFVUGCHo9bDrUQ96HGeSX3icXdBLocKrzeauB77gT1F75ibywDcdwicDw/640?wx_fmt=jpeg)

  

**考虑THD后的PF**

●真实应用中，设备往往同时包含电容/电感和有源器件，因此电流波形既表现出和电压正弦的相位差，又表现出非正弦特性，如下图，此时，功率因素的定义为：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8f7ibf8icC2HpNzu7t6iaZh6Vwvyf02wia7qVr1IjxID4t5YdibKV32QXWog/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**小结**

  

●现在可以看到，对用电设备的友好性可以用PF来衡量，很多时候PF和THD是存在关系的，THD越大，PF越低，但THD小不意味着PF高，还要考虑电流相位的影响。

●THD既要小，同时还要在高频处的谐波分量尽量的小，以减少干扰。

  

**PPFC原理及实现思路**

●PF低的原因有2个，电容或电感引起的电流相位偏移，有源器件引起的波形失真。

●提高PF的电路称为PFC电路，PFC的思路也是分为2个：

★增加补偿电路，比如负载为电容，就在供电线路上加入电感，这种方法称为无源PFC，常用于只有相位偏移的场合；

★对于开关电源来说，主要的问题是波形失真，因此不能采用无源PFC，只能采用其他方法，这些方法统称为有源PFC。

\--有源PFC也分2种，一种是PPFC(被动式PFC)，另一种是APFC(主动式PFC)。

\--有时候，将无源PFC也归为被动式，这样PFC分P和A两类，P又包括无源和有源两种。

**PPFC电路**

  

●使用一种称为逐流电路的结构可以提高开关电源的PF值。

★注意逐流电路的连接，当VDC比2个电容电压加起来还高时，逐流电路充电，当VDC比2个电容电压并联的电压低时，逐流电路放电，当VDC介于两者之间时，逐流电路既不放电也不充电。

★两个电容完全相同，因此电容的电压总是会自动保持相等。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDwUohFroWFCRzBgJKMnuPtHN8U5KbltmvlvSafSbgL6SyBJricm6YByg/640?wx_fmt=png)

  

**逐流电路提高PF值的方法**

●假如没有逐流电路，当VAC<VDC时，二极管就会截止，只有VAC>VDC时，二极管才导通，加上逐流电路后，当VAC小于两个电容电压之和时，二极管依然导通，直到VAC小于电容电压，这无形中延长了二极管导通的时间。

★假设VAC为220V，VDC稳定在200V，那么无逐流电路时，只有VAC>200V，二极管才导通，有逐流电路时，VAC>100V，二极管就导通。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDokuOvhkoUQBBr7pArelU0gjDPpmibiaer9XDBAJyqh31DpaMIvlIgdRw/640?wx_fmt=png)

  

**逐流电路的叠加**

  

●从前面的分析可以看到，逐流电路是通过二极管环向，使得电容是串联充电，并联放电，串联时数量为2，因此充放电区间的电压落差为2倍。

●如果希望提高逐流电路的PFC效果，可以将电压落差加大，增加到3，甚至4。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDNngWoNrDFShaWm276R6U34UZTgc7RYHVrUYv1BPuRCkxEAvHLcwS1Q/640?wx_fmt=png)

  

**APFC原理及实现思路**

**APFC的原理**  

  

●开关电源的波形失真的罪魁祸首是整流桥后面的电容，使用逐流电路后可以缓解这个问题，但不能根除，而主动式PFC能够根除这个问题。

●主动式PFC的方法是直接将整流桥后面的电容直接去掉，让输入电流持续。

★光让电流持续还不够，还必须让整流桥后面的部分看起来像一个电阻，使得电流是随着输入电压的变化而变化的。

★因为开关电源在整流桥后面是一个电感负载，电感的电流电压关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8Q6c0cicib9OSdw0hfricuAhyI2Lca4jjCPwZ28MIBfpBic4EIde85L3lug/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

★所以开关电源需要控制t，来使得ʃvdt和V成正比。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC894VEFRrrJfMgKjpmMQxqVGyq0QsoDnKlyXN9lHYDXRBmco4KpZXOVQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**APFC的形式**

●开关电源是通过开关切换来间歇式的将能量传递过去，因此不可能使瞬时电流呈现出一个连续平滑的正弦波形，只能使平均电流波形呈现出正弦波形。

★一共有3种形式的电流波形，对应3种模式CCM，BCM(CRM)，DCM。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC81cgg9QlUFncofBiaQ4iaOr8AZ4CFNDEmeIpBlZCa5V1LEKCmPVTbAtYw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**电流平滑**

●开关电源只能制造锯齿形的电流，而PFC要求较平滑的电流，否则电流THD会很大，因此，需要在输入端加一个电流低通滤波电路。

★电流滤波使用电感和电容，电感对电流进行平滑，而电容储存能量，应付PFC过程中的电流突变。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YD2QSR6mqib4d3d88wwx9SJS9RTTicBiahfaZuvdqdJe38BFYCDPb687k1Q/640?wx_fmt=png)

**3种模式的对比**

  

●这三种模式，其本质上的区分是流过电感的电流。

★CCM，电感电流是连续的；

★BCM，电感电流不连续，但不会持续为0；

★DCM，电感电流有持续为0的时候。

●从电源功率来说：CCM > BCM > DCM。

★理论上来说，高功率的也可以用于低功率，但CCM的控制环路存在巨大缺陷，无法做到高切换频率，因此在小功率段通常是不使用CCM的。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8QVcJ6oBojNb1QYyicBgNPfZVD7AHSlLsGL681byXZspIhVJzibg7z67A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

**BCM的实现方法**

  

●要让BCM的平均电流为正弦，需要两个条件：

★流过电感的电流的峰值包络为正弦；

★输入平均电流和电感峰值成比例。

●对于第二个条件，除了boost外，其他拓扑都做不到，如下图所示：

★Boost拓扑在整个周期内都有输入电流，平均电流正好是包络电流的1/2，而对于其他拓扑，只有在TON时间内，输入电流才有，Toff时间内输入电流为0，这样就导致平均电流和峰值电流并不是一个固定的比例关系。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDALCy7VicL075AfMMAP2lTUXayFuNXhM1Vb9MicgXhoS6ngfq4ficpP2lg/640?wx_fmt=jpeg)

  

**Boost实现BCM的方法**

●电路需要得到2个时间点，当前周期的TON结束和当前周期的TOFF结束的时刻。

★当前周期的TON结束由电流峰值比较器来检测，而TOFF的结束由过零比较器来检测。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh5fuoZlegXxUjo9cryw5YDWUyTicWbFJx51h4garMTQPd4Hicw3IwlcQwqpGxE1glhPd16UyeiayiavQ/640?wx_fmt=jpeg)

  

**导通时间的问题**

●仔细观察BCM，可以看到导通时间貌似是恒定的，这个不是故意画得一样，而是有原因的

●电感上的电流可以用如下公式来表示：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8vJMicGPmvD8vNzAv5LAyXBNS0UoQFnbFxF4l3icnCUdCcpR1TdPYXLFQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

●这个公式可以看到，电感上的电流直线上升，上升斜率取决于输入电压，而上升的终点同样取决于输入电压，这样就导致导通时间最终和输入电压无关了。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8WnHMSlYndRoOuzEjupHAKnws0Qcias0qTibPwDcZOo7v55SW9Zo0DrsA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**PFC方法的改进-固定导通时间**

  

●又前面的分析可知，Boost实现PFC后，导通时间变成恒定了，那么反过来，一上来就将导通时间设成恒定，是不是也能实现PFC，答案是肯定的。

★改进后，就成了主动固定导通时间，因而省掉了峰值电流比较电路。

★固定导通时间是目前非常主流的PFC技术，适合用数字控制，计数器产生固定宽度的正脉冲，每次过零比较器检测到退磁点，便产生一个正脉冲。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8ibzzyoXuKQNAbSfpmKVckGzibWlp7bVsnPWHSscvEMeYbFzGzZrwicsuQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

  

**PFC电源调整输出电压的方法**

●很多电源都有稳压的需求，所谓稳压实际上就是调整电源传递的能量，对于固定导通时间来说，调整峰值电流的包络线就可以调整平均电流，也就调整了输入功率，进而调整了输出电压。

★因为输入电压为AC，总是不变的，因此电感上电流斜率是不变的，缩放包络线后，相当于改变了峰值电流比较器的阈值，电感上的电流三角波会变化，包络线越矮，平均电流越小，输出功率越低，TON时间越短，开关的切换频率越高。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8stpjhQKFlOUO74bLFiaqGYVVHU54xxg9HjxFAO4ZticbiaWXQxRyhHJibA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**输出稳压的方法**

●由前面的分析可知，要调整输出电压，只需要调整TON即可，因此将输出电压反馈回来，调整TON即可。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8uZK9uj90jTUKG6SZYR30YM14g68yuWxE9YWVGj4A043pbIenFVJU4A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**BCM的问题和解决**

  

●BCM的特点是输出功率越低，切换频率越高，如果电源本身需要在较大的输出功率内切换，比如调光，需要在1%-100%之内切换，开关管的切换频率也需要接近100倍的变化范围。

★这么大的变化范围是无法实现的，无论是MOS还是电感，都不可能在这么大的切换频率内始终保持最优工作状态。

●解决方法是在每个周期插入死区等待时间，使BCM变成DCM模式。

**加入死区等待的DCM**  

●如果需要降低输入电流，可以不调整TON ，但是在每个切换周期后面增加等待时间，输入电流降低越多，等待时间越长，在TON不变的情况下，输入电流越低，频率越低。

★如果调整范围不大的话，加入死区等待就足够了，如果调整范围大的话，可以结合死区等待和包络线调整，或者以一个为主，另一个为辅，比如以包络线为主，死区等待为辅，或者使用两个技术实现更精细的调整。

\--数字控制的方式，TON的最小调整粒度为1个TCLK ，而引入死区等待（补偿）后，最下调整粒度可以高于一个TCLK。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8v1wL9FbAqK5ssFObGcJXSrQqHdyxiabMV2oibp5LSV3Y9ZL9QARJMRgw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**结合死区等待后的稳压算法**

●同时使用调节TON和TDEAD后，控制算法会变得复杂，一种算法思路如下：  

★以TON为主来调节输出功率，通过TON调节包络线的高度，TDEAD存在完全是为了调节频率，这样就得到了2种方法：

\--先调TON ， TON调不动了后再调TDEAD ，或者先调TDEAD，再调TON；

\--先调TON ， TON调不动了后再调TDEAD ，或者先调TDEAD，再调TON；

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8uYvMDbcfs8FneRdgQcxfPESezWMRA1XFI9YqY3H3z8xfKdQj6P0I2Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**对比几种算法**

●从开发难度来说，一次调一个参数肯定比一次调多个参数要简单，但一次调多个参数可以实现更丰富的算法，比如对参数进加权，就可以实现不同的曲线效果，甚至可以做到自始至终切换频率不变。

★注意到两个参数的曲线总是不同趋势的， TON增加，切换频率降低，而TDEAD 减少，切换频率升高，因此理论上可以做到切换频率不变。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8Ny1RqyvGqmiaeIC9Nd2V59CSG3ILnOqq66BHvsEGPmmFSCSTWRChykQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**死区时间的多周期均衡关系**

●在BCM情况下，平均电流天然就是正弦，而引入死区等待后，变成DCM，平均电流不再能天然正弦，这个时候需要使用数字算法来均衡每个周期的TDEAD，使平均电流依然既能保持正弦形状。

★所谓均衡，就是指插入到各个周期内的TDEAD保持一定的关系。

●均衡算法的开发思路如下：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8oEwLUh28m9xoWje75vvEXKSnSehtoaDqdqJAaE0Y8kCDcntXFQAAeg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**扩展到其他拓扑**

●前面分析过，Boost相比其他拓扑的优势在于 TON和 TON都有输入电流，但引入死区时间后，TDEAD还是没有电流，此时Boost相比其他拓扑的优势实际上没有了，因此可以使用任何拓扑来实现PFC。

●假设依然使用固定导通时间，其他拓扑的TDEAD均衡算法开发思路如下：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8xAMUEM2YmhkibIfezj0W5VjE2fzL8FRGZaEzWEhzucQIESPiak9f8icgg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**PFC和恒流的冲突**

●前面都是通过调节输出电压来调整输出功率，但很多应用中是通过调节输出电流来调整输出功率的，这就给PFC带来了很大的一个难题。

★稳压和稳流最大的不同，在于稳压只需要保证很长一段时间内平均输出电压恒定即可，而目前的稳流技术则需要使得每个切换周期的电流都保持恒定。

\--为什么电压可以看一段时间平均电压，因为负载端都带有大电容，这个电容上的电压就是一段时间内的平均电压，将这个电压采样反馈到输入，就可以调节平均电压。

\--而电流则不行，目前没有方法能让每个周期电流都变化，而平均电流在一段时间内保持恒定，因为没有办法来采样一段时间内的平均电流。

●PFC要求电流为正弦状，也就是每个周期都不一样，而恒流要求电流每个周期都一样，这样就形成了一对不可调和的矛盾。

  

**解决PFC和恒流的冲突**

●目前没有看到有很好的方法能够简单的同时提高PF和恒流精度，已知的几种方法如下：

★采样2级方案，第一级为Boost，实现高PF，第二级实现恒流，这样就避开了两者的冲突，但缺点是成本高；

★采用切分周期的方法，将一个AC周期分成多个时间段，一些时间做PFC，另一些时间做恒流，如下图所示，这样可以单级实现，但效果相比2级就要差一些了。

●对于大功率，成本不敏感的场合来说，使用2级方案是很合适的，但对于成本敏感的场合，就需要下很大的功夫来进行优化了。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfhSYRyRL9xXCHW1eibSNPC8WDPfUibfHPaqFpAEADmU98dm4KEzicStpU2HvI6voZfjibBjhYQzswiaMA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

> **推荐阅读▼**
> 
> -   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
>     
> -   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
>     
> -   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
>     
> 
>   
> 
> 后台回复“加群”，管理员拉你加入同行技术交流群。