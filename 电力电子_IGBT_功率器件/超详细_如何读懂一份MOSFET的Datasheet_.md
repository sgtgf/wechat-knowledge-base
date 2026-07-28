# 超详细！如何读懂一份MOSFET的Datasheet？

原创 英飞凌论坛 硬件笔记本 2024-01-01 12:17 四川

> 原文地址: [https://mp.weixin.qq.com/s/qY-OGdp6m2olNbfts6f4uA](https://mp.weixin.qq.com/s/qY-OGdp6m2olNbfts6f4uA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

作为电子工程师，相信大家都对MOSFET不会陌生。工程师们要选用某个型号的 MOSFET，首先要看的就是规格书-datasheet，拿到 MOSFET 的规格-datasheet 时，我们要怎么去理解那十几页到几十页的内容呢？我们就以英飞凌 IPP60R190C6 datasheet为例详细探讨一下。

**1、VDS**

Datasheet 上电气参数第一个就是 V(BR)DSS，即 DS 击穿电压，也就是我们关心的 MOSFET 的耐压

图中V(BR)DSS的最小值是600V，是不是表示设计中只要MOSFET上电压不超过600V MOSFET就能工作在安全状态?

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPnhbl6ZTQAvpqECWMYpibibicWw4CxJg7YcGyXwJdohmzvQIdTI9S166wBw/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic "1.1.png")

相信很多人的答案是“是!”，曾经我也是这么认为的，但这个正确答案是“不是!”

这个参数是有条件的，这个最小值600V是在Tj=25℃的值，也就是只有在Tj=25℃时，MOSFET上电压不超过600V才算是工作在安全状态。

从下图datasheet上V(BR)DSS与Tj的关系中可以清楚地看出，MOSFET V(BR)DSS与温度是正相关的。要是电源用在寒冷的地方，环境温度低到-40℃甚至更低的话，MOSFET V(BR)DSS值<560V，这时候600V就已经超过MOSFET耐压了。 

所以在MOSFET使用中，我们都会保留一定的VDS的电压裕量，其中一点就是为了考虑到低温时MOSFET V(BR)DSS值变小了，另外一点是为了应对各种恶例条件下开关机的VDS电压尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnv7G3gul6VWEt9QicxCXJf7djnO62G130g5G8xx9zTQn0qqF7UWWy9qw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "2.png")

**2、ID**   

相信大家都知道 MOSFET 最初都是按 **xA, xV 的命名方式**（比如 20N60~），慢慢的都转变成Rds(on)和电压的命名方式(比如 IPx60R190C6, 190 就是指 Rds(on)~).

其实从电流到 Rds(on)这种命名方式的转变就表明 **ID 和 Rds(on)是有着直接联系的**，那么它们之间有什么关系呢？

在说明 ID 和 Rds(on)的关系之前，先得跟大家聊聊**封装**和**结温**：

**1). 封装**：影响我们选择 MOSFET 的条件有哪些？

a) 功耗跟散热性能 -->比如：体积大的封装相比体积小的封装能够承受更大的损耗；铁封比塑封的散热性能更好.

b) 对于高压 MOSFET 还得考虑爬电距离 -->高压的 MOSFET 就没有 SO-8 封装的，因为G/D/S 间的爬电距离不够

c) 对于低压 MOSFET 还得考虑寄生参数 -->引脚会带来额外的寄生电感、电阻，寄生电感往往会影响到驱动信号，寄生电阻会影响到 Rds(on)的值

d) 空间/体积 -->对于一些对体积要求严格的电源，贴片 MOSFET 就显得有优势了

**2). 结温**：MOSFET 的最高结温 Tj\_max=150℃，超过此温度会损坏 MOSFET，实际使用中建议不要超过 70%~90% Tj\_max.

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPnMXtKh2GY1Qpb7BPTvibsKIJuo5uC8BuF1LVehR8BEtKwubQ6MMtBV1Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "3.1.png")

回到正题，MOSFET ID和Rds(on)的关系:

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPn8kvSAVqOdjX1pAWjDIK81MgetGz6AWta1Z2MSWS4kL04mXLcHTbHKA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "4.png")

(1) 封装能够承受的损耗和封装的散热性能(热阻)之间的关系

(2) MOSFET通过电流ID产生的损耗

(1), (2)联立，计算得到ID和Rds\_on的关系

  

3、Rds（on）

从下面MOSFET Rds(on)与Tj的图表中可以看到：Tj增加Rds(on)增大，Tj与Rds(on)是正相关，MOSFET的这一特性使得MOSFET易于并联使用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPnnfHMPGor8KrtPFJlCmDCcicCbpf0Xc7p4ysSzdzAmOLQ9OibAWBfmOlA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "5.png")

**4、Vgs(th)**

相信这个值大家都熟悉，但是Vgs(th)是负温度系数有多少人知道，你知道吗？(下图是IPP075N15N3 datasheet中Vgs与稳定的关系)。相信会有很多人没有注意到Vgs(th)的这一特性，这也是正常的，因为高压MOSFET的datasheet中压根就没有这个图，这一点可能是因为高压MOSFET的Vgs(th)值一般都是2.5V以上，高温时也就到2V左右。但对于低压MOSFET就有点不一样了，很多低压MOSFET的Vgs(th)在常温时就很低，比如BSC010NE2LS的Vgs(th)是1.2V~2V，高温时最低都要接近0.8V了，这样只要在Gate有一个很小的尖峰就可能误触发MOSFET开启从而引起整个电源系统异常。

所以，低压MOSFET使用时一定要留意Vgs(th)的这个负温度系数的特性！

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnyrQHm1Qjm8ffyXRJv2yNRLv64sYAk4FFHTJvZIsLXMhibQlGLSxLfCQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "6.png")

  

**5、Ciss, Coss, Crss**

MOSFET 带寄生电容的等效模型

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnS6zwdsfoiaVdUrEVAcIicRMhqchP32SvEEbo8EXgtFIHpGBGO2O8KLvg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "7.png")

Ciss=Cgd+Cgs, Coss=Cgd+Cds, Crss=Cgd

Ciss, Coss, Crss 的容值都是随着 VDS 电压改变而改变的。

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnejlP3X790EV9juqFbDIiapcJTCiaibwCtD7bXyIibPBxYahP73ynwYWLfQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "8.png")

在 LLC 拓扑中，减小死区时间可以提高效率，但过小的死区时间会导致无法实现 ZVS。因此选择在VDS 在低压时 Coss 较小的 MOSFET 可以让 LLC 更加容易实现 ZVS，死区时间也可以适当减小，从而提升效率。

  

**6、 Qg, Qgs, Qgd**

从下图中能够看出：

1\. Qg并不等于Qgs+Qgd！！

2\. Vgs高，Qg大，而Qg大，驱动损耗大

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnBN8QO0Fb8Eq0aspOqia41qPEA9Vy3vMuDFHhtTf6e1cd0KYqaHibJhiaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "9.png")

  

**7、SOA**

SOA曲线可以分为4个部分：

**1). Rds\_on的限制**，如下图红色线部分

当VDS=1V时，Y轴对应的ID为2A，Rds=VDS/ID=0.5R ==>Tj=150℃时，Rds(on)约为0.5R.当VDS=10V时，Y轴对应的ID为20A，Rds=VDS/ID=0.5R ==>Tj=150℃时，Rds(on)约为0.5R.所以，此部分曲线中，SOA表现为Tj\_max时RDS(on)的限制.

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPniaNATwGZyEsJN6uEzUuWmStb3tSpgeNdwSAUhQVcPgUEpqKPzEKxdqQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.1.png")

  

**2).最大脉冲电流限制**，如下图红线部分

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnWWXKLvBE1bxia7QBkSY0p1G2XfWTicM6OW31cWltLHjBeuTjn9YngOXw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.2.png")

此部分为MOSFET的最大脉冲电流限制，此最大电流对应ID\_pulse.

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPn8bWLdc2q7771hdia44t1RThAaHBO6k478hwX3tFgfyT4d24BdiaUGyAw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.22.png")

  

**3). VBR(DSS)击穿电压限制**，如下图红线部分

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnceKJicViaXtvMzeW5iaRddJDBGnbZu5agQbooibVzVazElBPZx0YOEoCsg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.3.png")

此部分为MOSFET VBR(DSS)的限制，最大电压不能超过VBR(DSS) ==>所以在雪崩时，SOA图是没有参考意义的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPnDAa1ibkyDHgABnL2FGwuMicgWPWiaXxibzLax3GlMibVBpUVUp8wmsgicKiaw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.33.png")

  

**4). 器件所能够承受的最大的损耗限制**

这里以图中红线的那条线（10us）来分析。

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnZkInz1QB6grdRmxPTNI8lf7wqo6MCIv70cKrzHKUkfH8EMyKqyhZgQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.4.png")

上图中，1处电压、电流分别为：88V, 59A，2处电压、电流分别为：600V, 8.5A。

MOSFET要工作在SOA，即要让MOSFET的结温不超过Tj\_max(150℃)，Tj\_max=Tc+PD\*ZthJC, ZthJC为瞬态热阻。

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnr1k0FKKZGwiaIsGpdYWJjum61z6ia46tYNLeoy0MNJvUU6wXjpQKjxlg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "10.44.png")

SOA图中，D=0，即为single pulse，红线附近的那条线上时间是10us即10^-5s，从瞬态热阻曲线上可以得到ZthJC=2.4\*10^-2

从以上得到的参数可以计算出：

1处的Tj约为：25+88\*59\*2.4\*10^-2=149.6℃

2处的Tj约为：25+600\*8.5\*2.4\*10^-2=147.4℃

MOSFET datasheet上往往只有Tc=25和80℃时的SOA，但实际应用中不会刚好就是在Tc=25或者80℃，这时候就得想办法把25℃或者80℃时的SOA转换成实际Tc时的曲线。

**把25℃时的SOA转换成100℃时的曲线：**

1). 在25℃的SOA上任意取一点，读出VDS, ID,时间等信息

如上图，1处电压、电流分别为：88V, 59A, tp=10us

计算出对应的功耗：PD=VDS\*ID=88\*59=5192                    （a）

PD=(Tj\_max-Tc)/ZthJC -->此图对应为Tc=25℃                   （b）

（a），（b）联立，可以求得ZthJC=(Tj\_max-25)/PD=0.024

2). 对于同样的tp的SOA线上，瞬态热阻ZthJC保持不变，Tc=100℃，ZthJC=0.024.

3). 上面图中点1处的电压为88V，Tc=100℃时，PD=(Tj\_max-100)/ZthJC=2083

从而可以算出此时最大电流为I=PD/VDS=2083/88=23.67A

4). 同样的方法可以算出电压为600V，Tc=100℃时的最大电流

5). 把电压电流的坐标在图上标出来，可以得到10us的SOA线，同样的方法可以得到其他tp对应的SOA（当然这里得到的SOA还需要结合Tc=100℃时的其他限制条件）

这里的重点就是ZthJC，瞬态热阻在同样tp和D的条件下是一样的，再结合功耗，得到不同电压条件下的电流

另外一个问题，**ZthJC/瞬态热阻计算：**

当占空比D不在ZthJC曲线中时：（其中，SthJC(t)是single pulse对应的瞬态热阻）

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPndEh7f2qRmoDKyXXV0SRDzRSqyApHiapsxvRF29cExxwmtSCBibnmmxaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "11.png")

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnF49TMgmJCU0UIRBveRIf0M4LFlqnGfZ0kcbTA9AUgllfR5atfI4D4g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "11.1.png")

2.当tp<10us时

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnxqp7Iv84xyPLkWo1ubthYeJfwrjqrculfq9alficu0seu31vmkDoYJw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "11.2.png")

  

**8、Avalanche**

**下图中，EAS：单次雪崩能量，EAR：重复雪崩能量，IAR：重复雪崩电流**

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPnSJWM2BZlW9CleCsTbgFET7Os6RSIEePYBbJRjgO8ETzL59jnK1IKmw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "12.png")

雪崩时VDS,ID典型波形与展开后的图像如下，可以发现MOSFET雪崩时，波形上一个显著的特点是VDS电压被钳位，即图中VDS有一个明显的平台。

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnFH6oDqnRrQJx80OUX3Dp57KhFMHgy5lMMtvNfXcIPKQ4pThVsW9bibQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "13.png")

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnGjxNXIe8gjI0NEDC4ttZLCpjwictFcmdXvWLjnEFibJlZJaSA3XkEliaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "13.1.png")

  

**MOSFET雪崩的产生**：

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnNSCVVNKQoDQ58WWnA3UZGBHExZQjA2pOq2bux73P6ZNwfS9DOF9nMw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "14.png")

在MOSFET的结构中，实际上是存在一个寄生三极管的，如上图。在MOSFET的设计中也会采取各种措施去让寄生三极管不起作用，如减小P+Body中的横向电阻RB。正常情况下，流过RB的电流很小，寄生三极管的VBE约等于0，三极管是处在关闭状态。雪崩发生时，如果流过RB的雪崩电流达到一定的大小，VBE大于三极管VBE的开启电压，寄生三极管开通，这样将会引起MOSFET不能正常关断，从而损坏MOSFET。

因此，MOSFET的雪崩能力主要体现在以下两个方面：

**1\. 最大雪崩电流 ==>IAR**

**2\. MOSFET的最大结温Tj\_max ==>EAS、EAR 雪崩能量引起发热导致的温升**

  

1）单次雪崩能量计算：

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnGjxNXIe8gjI0NEDC4ttZLCpjwictFcmdXvWLjnEFibJlZJaSA3XkEliaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "13.1.png")

  

上图是典型的单次雪崩VDS,ID波形，对应的单次雪崩能量为：

 ![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnkcLck44boiaex0Tv9icmbf4nSOEUXJu5bfpptmh8WbK0ndHpQ0qXD0Dw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "14.1.png")

  

其中，VBR=1.3BVDSS, L为提供雪崩能量的电感

雪崩能量的典型测试电路如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPn2wS6iaZ9wT11uYnd0mmczVa5a9YltD0xtpbvjnUPSf2A92JcTicXhmqA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "14.2.png")

计算出来EAS后，对比datasheet上的EAS值，若在datasheet的范围内，则可认为是安全的（当然前提是雪崩电流<IAR）同时，还得注意，EAS随结温的增加是减小的，如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnsxrWyh5boTdaSUct5D4mAIeuqS2rcjQHarbUicicy4kILwrc0ACQe7PQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "14.3.png")

  

2）重复雪崩能量 EAR：

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPn5Yzt80EKDsmYTbAepNptL6rXncsnr8ZZ4JgRSIaJ7Q94Q2hZiaI8h5A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "15.png")

上图为典型的重复雪崩波形，对应的重复雪崩能量为：

 ![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnKdFWcwPD9FDFbbicP2ceq0tg8vwpjzyOEico4gP8PcCdjyeibTnukE9hw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "15.1.png")

  

其中，VBR=1.3BVDSS.

计算出来EAR后，对比datasheet上的EAR值，若在datasheet的范围内，则可认为是安全的（此处默认重复雪崩电流<IAR），同时也得考虑结温的影响

**9、体内二极管参数**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/eXc5BkaCdM16nasoqssAZH00kWZic4HPn8PsVCGfibkicibBGhLM8ibWghGYG4X7fvH3TQbG3ibLV9OVia36TwBOBmCmQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "16.png")  

  

VSD，二极管正向压降 ==>这个参数不是关注的重点,trr，二极管反向回复时间 ==>越小越好，Qrr，反向恢复电荷 ==>Qrr大小关系到MOSFET的开关损耗，越小越好，trr越小此值也会小

![](https://mmbiz.qpic.cn/mmbiz_png/eXc5BkaCdM16nasoqssAZH00kWZic4HPnoLicG6Cq8ZXhTWfR6jX8UZMfG3iaTcK2n9eaQNv9ntjiaCmWrafO7HMtg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1 "16.1.png")

  

**10、不同拓扑 MOSFET 的选择**  

针对不同的拓扑，对MOSFET的参数有什么不同的要求呢？怎么选择适合的MOSFET？

**1). 反激：**

反激由于变压器漏感的存在，MOSFET会存在一定的尖峰，因此反激选择MOSFET时，我们要注意耐压值。通常对于全电压的输入，MOSFET耐压(BVDSS)得选600V以上，一般会选择650V。

若是QR反激，为了提高效率，我们会让MOSFET开通时的谷底电压尽量低，这时需要取稍大一些的反射电压，这样MOSFET的耐压值得选更高，通常会选择800V MOSFET。

**2). PFC、双管正激等硬开关：**

a) 对于PFC、双管正激等常见硬开关拓扑，MOSFET没有像反激那么高的VDS尖峰，通常MOSFET耐压可以选500V, 600V。

b) 硬开关拓扑MOSFET存在较大的开关损耗，为了降低开关损耗，我们可以选择开关更快的MOSFET。而Qg的大小直接影响到MOSFET的开关速度，选择较小Qg的MOSFET有利于减小硬开关拓扑的开关损耗  

**3). LLC谐振、移相全桥等软开关拓扑：**

LLC、移相全桥等软开关拓扑的软开关是通过谐振，在MOSFET开通前让MOSFET的体二极管提前开通实现的。由于二极管的提前导通，在MOSFET开通时二极管的电流存在一个反向恢复，若反向恢复的时间过长，会导致上下管出现直通，损坏MOSFET。因此在这一类拓扑中，我们需要选择trr，Qrr小，也就是选择带有快恢复特性的体二极管的MOSFET。

**4). 防反接，Oring MOSFET**

这类用法的作用是将MOSFET作为开关，正常工作时管子一直导通，工作中不会出现较高的频率开关，因此管子基本上无开关损耗，损耗主要是导通损耗。选择这类MOS时，我们应该主要考虑Rds(on)，而不去关心其他参数。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。