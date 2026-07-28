# SCD-20：如何设计和使用Snubber


> 原文地址: [https://mp.weixin.qq.com/s/DfAsiZpFHW\_2ACnsVwgvzg](https://mp.weixin.qq.com/s/DfAsiZpFHW_2ACnsVwgvzg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTrXm2ZARR57P73sf3H94yAo7z142goPA0xDBxhHeeouSeYnAT4drXhOSjIXcPN1Z7CDJxc8O1ZlA/640?wx_fmt=png)  

_____**★★★**______SCD-20---Snubber______**★★★**_____

______撰稿：Timothy  校稿：Timothy______

引言：一位朋友要求更一期Snubber的详细介绍，这个拖更好久了，今天就补上！切断电路中的电流时，电路中的杂散电感会导致电压急剧增加，缓冲器电路提供保护，以抑制这个浪涌电压，吸纳在关闭时发生的瞬态电压冲击，保护电源MOSFET及其附近的组件。一般来说，一个简单的RC缓冲器使用电阻R串联电容C，RC缓冲器与功率MOSFET并联连接。

开关电路中的关闭电流由于杂散电感和自电感导致电压急剧增加，因此缓冲器可以用于降低DC-DC转换器中电压峰值和振铃（传送门：[DC-DC-20：如何设计缓冲电路去除DC-DC的开关节点噪声](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490998&idx=1&sn=9f76e199f3dfccf004707ad41c665d73&chksm=c3355729f442de3f3314decb2b9683786a388d7730f193aaa86f27d38ed2e6c854bd1b37de56&scene=21#wechat_redirect)），为了降低电压的升高，最重要的是降低导线的杂散电感。

__€1.MOS的振荡效应__

功率MOSFET比双极晶体管更容易发生寄生振荡，因为MOSFET在高频域具有高增益的优点，从而导致寄生振荡。当栅漏耦合电容Crss和寄生线电容Cs引起输入端的负阻抗变化时，功率MOSFET进入寄生振荡，一般可采用几种措施防止寄生振荡：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMXSHIqZdxwmXxaia9LfQrUlibE7HGeFslxOoVTXLtjUCI8vRBbzFfick65Q/640?wx_fmt=png)

**_图20-1：MOS的开关振荡_**

1#：使用粗短线，或使用双绞线，以防止两根线之间的耦合。

2#：尽可能靠近闸门端插入铁氧体珠（现在这种设计比较少见，一个是MOS工艺进步，一个是成本考量，更多使用3#）

3#：在栅极插入一个串联电阻--->Rgate。

__€2.RC缓冲器__

RC缓冲器或者叫RC抑制器，可用于抑制由降压DC-DC转换器开关产生的电压尖峰和高频振铃，这里再回顾一下降压转换器的运行及电压尖峰和振铃产生的机理。**_图20-2_**显示了一个基本的降压转换器电路，其工作流程如下（传送门：[DC-DC-2：降压型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485606&idx=1&sn=f725f35be77cc8999ac79e37bbe24b3f&chksm=c3354239f442cb2f0333a6b7caf7036d62f1b8091d16ed9b87161a61263f7a7fa0306f86cad0&scene=21#wechat_redirect)）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI425WqiaA1JSSLFmgoM1b2cOWeHicrZD01viaPbGXgeXFCmoXdYpLko9oIYg/640?wx_fmt=png)

**_图20-2：降压DC-DC工作图_**

步骤1：Q1开启时，通过电感L给输出电容器Cout充电。

步骤2：当Q1关闭时，反向电动势产生的电流通过Q2的体二极管流过L--->Cout--->Q2。(这段时间是Q1和Q2都关闭的死区时间）

步骤3：Q2接通，电流流过L、Cout和Q2（从源极到漏极），此时Q2作为同步整流器运行。

步骤4：Q2关闭，反向电动势导致电流流过其体二极管。

步骤5：Q1接通，导致电流流向电感L，反向恢复电流流过Q2的本体二极管。

在通过Q2的体二极管的电流消失后，降压转换器再次通过步骤1到步骤5循环，降压转换器的输出电压Vout由其输入电压Vin和Q1的占空比决定。

_电压峰值和铃声_

在步骤5中，寄生电感和电容形成一个谐振电路，引起瞬态电压尖峰和振铃。当在步骤5中Q1过渡到打开状态，而Q2过渡到关闭状态时，Cin显示出非常大的电容，导致它们短路，而L也非常大，可以被认为是开路，此时**_图20-2_**中的降压转换器可以被建模为一个如**_图20-3_**所示的等效电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI426lnDlKXCcbicVW7UesK9BbyDiaGUIyPt5o97m8dND7OI52icxpnQAjUEA/640?wx_fmt=png)

**_图20-3：Q1开机后立即进行降压开关转换器的等效电路_**

寄生电容CP的主要来源是Q2的COSS，而寄生电感（L1、L2、LD和LS）的来源是导线、Q1和Q2。设这些电感的和为LP，然后CP、LP和Rs形成一个LCR系列谐振电路。Rs主要由Cin的等效串联电阻ESR和Q1的开启电阻组成，其值很小可以忽略不计。因此电压峰值和振铃可以定义为CP（Q2的COSS）和LP（导线电感）之间的谐振。

____€3.__使用RC缓冲器的电压峰值和振铃抑制__

如上描述，在开关MOS接通时，会在降压转换器中产生电压峰值和振铃，而使用缓冲器是用于保护瞬态电压的措施之一。缓冲器是一种保护电路，它抑制电流关闭时产生的瞬态电压，还抑制晶体管和二极管开关引起的电压峰值。缓冲器不仅可以保护开关设备，还可以保护其他电子部件，降低开关噪声。

**_图20-4_**和**_图20-5_**是一个带有缓冲器的降压转换器的简化图，当RC缓冲器抑制由开关产生的电压尖峰和振铃时，缓冲器电阻RSNB在缓冲器电容CSNB的充放电期间将尖峰和振铃转变为功率消耗掉，因此有必要在选择RSNB和CSNB时，考虑到它们的电压峰值和振铃抑制效应以及RSNB的功率损失之间的权衡。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSpKsxicLZHDF9iamkibMSQVY50peu1clT6WWXkNDqjItX4DkiarFRNQM2icY7rdvp6wG0gYClKUzwOoibg/640?wx_fmt=png)

**_图20-4：RC Snubber的充能路径_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSpKsxicLZHDF9iamkibMSQVY5J2IEWSNcNgwHZANB0shHhUVEnj4heicLibFskGPKzMSWVYMHx36bq8kA/640?wx_fmt=png)

**_图20-5：RC Snubber的释能路径_**

相关的实例计算可以回看：[DC-DC-20：如何设计缓冲电路去除DC-DC的开关节点噪声](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490998&idx=1&sn=9f76e199f3dfccf004707ad41c665d73&chksm=c3355729f442de3f3314decb2b9683786a388d7730f193aaa86f27d38ed2e6c854bd1b37de56&scene=21#wechat_redirect)，这里不再赘述。

____€4.__一般电源切断缓冲器__

浪涌电压是由一个电路的杂散电感产生的，缓冲器应与开关器件并联连接，以吸收浪涌电压。有两种类型的缓冲器：一种是在每个开关器件上添加，另一种是在电源总线上添加的集中式缓冲器。

_在每个开关器件添加缓冲器_

_A.RC缓冲电路_

1#：理想的斩波电路

2#：由于RC缓冲器电阻造成的功率损失非常大，所以RC缓冲器不适用于高频开关应用。

3#：用于高电容开关装置的RC缓冲器需要有一个小阻值的电阻器，这将导致在接通期间漏极电流增加。

缓冲电阻耗散的功率P计算如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1InqRbKBy6nicx1zAjaeHtibQBWwGtmVP1yup0ianh3wQJqDOaaLYylXUEg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMXh3kib8PmwUU0qpqbETSBtuC56szhicp8DUJlYObpAmZcR04YG6Veq86Q/640?wx_fmt=png)

**_图20-6：干路电源分立式开关使用RC缓冲器_**

**_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI42YjqhyDRhwHMNKux26qKHcs0DNavtOINjNicyImT5LVQMBHChEdjtb2A/640?wx_fmt=png)_**

**_图20-7：实际设计案例_**

**_图20-7_**是一个使用实例，来自于域控制器的24V输入电源入口路径处，C305和R797构成一组RC Snubber，其中R797同时兼具钳位作用。

_B.RDC充放电缓冲器_

1#：将二极管添加到RC缓冲器中，以增加缓冲器的阻力，这使得可以消除在导通期间由开关器件共享的电流。

2#：缓冲电阻器耗散的大功率使RDC缓冲电阻器不适合高频应用。

缓冲电阻耗散的功率计算如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1Iy6IiaNJZz9s9ErCL0ibwhW24eDnicIc6VmcQW9N6G4w4a3veT5YfQv1kw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMXQfqTFz1XYS6kfB5OWYicU6cJQ7e6swCtsm76ys1Vw41nzQnpYQtuT4Q/640?wx_fmt=png)

**_图20-8：RCD放电缓冲器_**

_C.放电抑制RCD缓冲器_

1#：抑制关闭时产生的关闭浪涌电压。

2#：较低的功耗非常适合理想的高频开关应用场景。

3#：被缓冲器所消耗的能量很小。

缓冲电阻耗散的功率P计算如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1ISejDVuibPYu2mKMGNZEpPdErdtjSXPQIQswU1WmYWuSZ8V9CRHCp9OQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMXvMxj4faH4CIbYTtSPx5GzW8iaJQ68rRibLv61BGQaGyeIB6P3D5ibam7A/640?wx_fmt=png)

**_图20-9：放电-抑制RCD缓冲器_**

因为直流电源电压Ed和浪涌电压之间的差异，在某些情况下，该电路可能无法提供足够的浪涌吸收性能，关键在于二极管的参数。（L：主电路的损耗电感；Io：设备关闭时的排放电流；Cs：缓冲电容的电容；Ed：直流电源电压；f：开关频率）

________€5.__电源干线集成缓冲器______

如**_图20-10_**也有简化的缓冲器设计。

_C型减振器_

虽然C型减振器是最简单的，但由于主电路杂散电感与阻电容之间的LC共振，导致它们容易发生电压振荡。

_RCD缓冲器_

RCD缓冲器需要注意选择缓冲二极管，因为它可能会在反向恢复过程中导致高电压尖峰和电压振荡。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMXD2uNZz3RiblpyiclDCLOIibVA5XAqibFLXtib9MxX7XPkGsTWgrQdBtYribA/640?wx_fmt=png)

**_图20-10：左--->C型缓冲器；右--->RDC缓冲器_**

________€6.__创建缓冲器设计（抑制放电的RCD缓冲器）______

**_图20-11_**显示了一个缓冲器电路，**_图20-12_**显示了其波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMXZud756ZpSIBXg1vTGgy53dwDqDKR6icXNqH0zibq00PptKWwI0ZUkpCg/640?wx_fmt=png)

**_图20-11：缓冲器电路_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSpKsxicLZHDF9iamkibMSQVY5kia9gyqeecSeBBFj0jN5Cdqp2xQGRvlVHw9PvbJK7nnsibWefEjbbr7A/640?wx_fmt=png)

**_图20-12：缓冲器波形_**

在波形中所示的电压和电路常数可以计算如下，其中Vdsp1是由缓冲器的电感Ls产生的电压，其计算方法如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1I2HHZ4HxCMtLJgBdVJTcsia3dIYHrT1ucjwQ6R0yQaeFvfZNgRojeNEg/640?wx_fmt=png)

尽量将二极管d的正向电压Vfr最小化，然后减少可能引起电压激增的Ls都可以有效降低Vdsp1。VCEP2是当主电路的杂散电感LM的能量过充时，缓冲电容Cs之间的峰值电压，由于存储在LM中的能量被转移到Cs中，所以它们的能量是相等的。因此以下公式成立：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI42syO1yJ0sjZNWfN22SVDGVeMAyt3Myglwk4UIjXJRIz1WP0AjuSSQHg/640?wx_fmt=png)

根据这个公式，C的值的计算方法如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI426IsIbkuXMMicLh3wsK95bzkQuObQ9ERquuVspHXOsZ43ialjVBrcEs8w/640?wx_fmt=png)

考虑到MOSFET的耐受电压，有必要确定Vdsp2的值。缓冲电阻Rs值的选择，缓冲电阻Rs的作用是在MOSFET开始其下一次开启操作之前，放电存储在缓冲电容器中的电荷。设放电时间常数为τ，则：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1IgfQibib3NHxyXPBwq2Yw2emr4CIWshL4FkoV6II3gLlCe6kmVWGIOicmg/640?wx_fmt=png)

其中，τ为电压降至存储电压的37%所需的时间（传送门：[SCD-19：RC时间常数的计算和使用要点](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492540&idx=1&sn=f33cd6438b0b008800a3f28d0c77ab75&chksm=c336a923f4412035252c1fdaddc7ea541a82e8625e5e970c194a6acea158f72e808854292a42&scene=21#wechat_redirect)），电压下降至10%（即电容器放电存储的90%的电荷）所需的时间为2.3τ，如**_图20-13_**所示：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQPEOWRgB4K2DFc25unytMX84CmCK9AfEU7OAjkO8tL6NsN8SiaDsfoZjCibqapibUrcPZAj9meYzeHA/640?wx_fmt=png)

**_图20-13：时间常量与放电量的对比关系_**

电容器必须在下一次关闭操作之前放电，因此必须满足下面的方程式，由这个方程可知，Rs可以计算出如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSbweqczic1pticzuBxBJSJ1IVWeQCkH8BFSaITiaAibXXY253klZxRPLhFfTCDXq2erJoEqZLricZmgeQ/640?wx_fmt=png)

如果缓冲器电阻值过低，缓冲器可能会出现电流振荡，因此必须使用一个阻值在合理范围内尽可能高的电阻器。