# DC/DC电路主要器件选型、BUCK电路PCB布局布线5个要点

原创 电路一点通 2025-01-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/p31hcmYUGix3slxK5I9smA](https://mp.weixin.qq.com/s/p31hcmYUGix3slxK5I9smA)

#### 总结了DC/DC的基本原理，包括BUCK、BOOST、BUCK-BOOST、Inverter电路；总结了主要器件的选型；总结了BUCK电路的布局布线的5个要点。

#### 文章目录

-   4.1 DC/DC电源拓扑
    
-   4.2 关键器件选型
    
-   BUCK电路(降压)
    
-   BOOST电路(升压)
    
-   BUCK-BOOST电路(升降压)
    
-   Inverter电路(反相升降压)
    
-   4.2.1 MOSFET
    
-   4.2.2 电感
    
-   4.2.3 反馈电阻
    
-   4 DC/DC设计要点
    
-   5 电源PCB设计要点(BUCK电路)
    
      
    

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

###   

### 4 DC/DC设计要点

 与LDO相比，DC/DC的优点是功耗低，效率高，支持升压、降压、反相等变换，支持大电流输出，能支持输入/输出端隔离；但同时也存在纹波较大，电路设计较复杂，成本较高，输入输出存在较大时延等缺点。

DC/DC调制方式：  
PWM(脉冲宽度调制)：开关脉冲的频率一定，通过改变脉冲输出宽度(占空比)，使输出电压达到稳定。  
特点：噪声低，效率高，对负载响应速度快，支持连续供电的工作模式，但在负载较轻的情况下，效率较差，工作不稳定。  
PFM(脉冲频率调制)：开关脉冲宽度一定，通过改变脉冲输出的频率，使输出电压达到稳定。  
特点：功耗相对较低，尤其是在轻负载时，输出端对负载变化的响应相对较慢，输出电压的纹波和噪声较大。  
 目前也有PWM/PFM混合调制模式的DC/DC电源芯片，在轻负载时采用PFM调制模式，重负载时调整到PWM模式，可以降低电源功耗。

#### 4.1 DC/DC电源拓扑

##### BUCK电路(降压)

 BUCK电路拓扑结构如图3所示，由开关管Q，续流二极管D，以及起储能滤波作用的电感L和电容COUT组成。DC/DC电源芯片通过PWM调制波形控制开关管Q的通断，在一个开关周期 t C Y C L E t\_{CYCLE} tCYCLE内，Q的导通和关断时间分别定义为 t O N t\_{ON} tON和 t O F F t\_{OFF} tOFF。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_001_a5697cbe06f1.png)

图3 BUCK拓扑结构图

 当Q导通时，电路电流由输入端顺时针流经开关管、电感L和电容COUT来为负载供电，在这一阶段，会给电容COUT充电，电感电流 I L I\_L IL逐渐增大。  
 当Q关断时，由于电感的自感效应，电流方向保持不变，仍为顺时针方向，但电路电流不再返回电源输入端负极，而是通过续流二极管D形成回路，在这一阶段，电容COUT存储的能量经D、L进行放电，电感电流 I L I\_L IL逐渐减小。

 对于BUCK电路，工作的占空比参数为： δ = t O N / t C Y C L E \\delta = t\_{ON}/t\_{CYCLE} δ\=tON/tCYCLE，其输出电压的计算可以表示为：  
V O U T = δ × V I N V\_{OUT} = \\delta \\times V\_{IN} VOUT\=δ×VIN  
 通过调整占空比，可以得到不同的输出电压 V O U T V\_{OUT} VOUT。由于 δ < 1 \\delta < 1 δ<1，且电路存在损耗，因此BUCK电路始终存在 V O U T < V I N V\_{OUT} < V\_{IN} VOUT<VIN。根据 δ = t O N / t C Y C L E \\delta = t\_{ON}/t\_{CYCLE} δ\=tON/tCYCLE，使 t C Y C L E t\_{CYCLE} tCYCLE不变，通过改变 t O N t\_{ON} tON调节占空比的方法称为PWM调制，而通过改变t\_{CYCLE}$来调整占空比的方法称为PFM调制。

BUCK电路一些参数计算：  
开关管的开关频率可表示为：  
f s = 1 / t C Y C L E f\_s=1/t\_{CYCLE} fs\=1/tCYCLE  
电路输出纹波电流可以表示为：  
Δ I L = V O U T × ( 1 − V O U T / V I N ) L × f s \\Delta I\_L=\\dfrac{V\_{OUT} \\times (1-V\_{OUT}/V\_{IN})}{L \\times f\_s} ΔIL\=L×fsVOUT×(1−VOUT/VIN)  
电路的输出纹波包括容性分量和阻性分量：  
V R I P P L E = Δ I L × ( E S R C O U T + 1 8 f s × C O U T ) V\_{RIPPLE} = \\Delta I\_L \\times (ESR\_{COUT}+\\dfrac{1}{8fs \\times C\_{OUT}}) VRIPPLE\=ΔIL×(ESRCOUT+8fs×COUT1)  
输入电容上的纹波电流可以表示为：( η \\eta η为电源效率)  
I C I N ( R M S ) = I O U T ( M A X ) η ( δ ( 1 − δ ) ) I\_{CIN(RMS)} = \\dfrac{I\_{OUT(MAX)}}{\\eta}(\\sqrt{\\delta(1-\\delta)}) ICIN(RMS)\=ηIOUT(MAX)(δ(1−δ) )

##### BOOST电路(升压)

 BOOST电路拓扑结构如图4所示，根BUCK电路一样，也是由开关管Q，续流二极管D，以及起储能滤波作用的电感L和电容COUT组成。DC/DC电源芯片通过PWM调制波形控制开关管Q的通断，在一个开关周期 t C Y C L E t\_{CYCLE} tCYCLE内，Q的导通和关断时间分别定义为 t O N t\_{ON} tON和 t O F F t\_{OFF} tOFF。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_002_9a10570c1214.png)

图4 BOOST拓扑结构图

  

当Q导通时：  
 电流由输入端经电感L，通过打开的开关管回到输入电源负极；在这一过程中，输出电容COUT维持了二极管负极电压，使续流二极管D反偏截止，输入电压 V I N V\_{IN} VIN全部施加在电感L两端，为L充电。  
 在这一过程中，电感L的电流变化量为：  
Δ I L 1 = V I N L × t O N \\Delta I\_{L1} = \\frac{V\_{IN}}{L} \\times t\_{ON} ΔIL1\=LVIN×tON  
当Q关断时：  
 电流方向不变，但不经过开关管，存储在电感L内的能量是通过二极管向负载供电，同时为输出电容COUT充电.  
 在这一过程中，电感L的电流变化量为：  
Δ I L 1 = V O U T − V I N L × t O F F \\Delta I\_{L1} = \\frac{V\_{OUT}-V\_{IN}}{L} \\times t\_{OFF} ΔIL1\=LVOUT−VIN×tOFF

 在DC/DC电源启动完成进入正常工作状态后，电感的充电量与放电量应该相等，即 Δ I L 1 = Δ I L 2 \\Delta I\_{L1}=\\Delta I\_{L2} ΔIL1\=ΔIL2，结合导通和关断时电感电流变化的公式，可得：  
V O U T = 1 1 − δ × V I N V\_{OUT} = \\frac{1}{1-\\delta} \\times V\_{IN} VOUT\=1−δ1×VIN

BOOST电路一些参数计算：  
电路输出纹波电流可以表示为：  
Δ I L = V I N × ( 1 − V I N / V O U T ) L × f s \\Delta I\_L=\\dfrac{V\_{IN} \\times (1-V\_{IN}/V\_{OUT})}{L \\times f\_s} ΔIL\=L×fsVIN×(1−VIN/VOUT)  
输出电容上的纹波电流可以表示为：  
I C O U T ( R M S ) = I O U T ( M A X ) × ( δ / ( 1 − δ ) ) I\_{COUT(RMS)} = I\_{OUT(MAX)} \\times (\\sqrt{\\delta/(1-\\delta)}) ICOUT(RMS)\=IOUT(MAX)×(δ/(1−δ) )

##### BUCK-BOOST电路(升降压)

 如图5所示，BUCK-BOOST升降压电路实际上是一个同步BUCK电路和一个同步BOOST电路的组合。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_003_e02d44f78514.png)

图5 BUCK-BOOST拓扑结构图

  

 同步电源，即把传统BUCK电路和BOOST电路中的续流二极管替换为MOS管。在同步电源中，使用导通电阻更小的MOS管代替恒定压降的二极管，在小电压或大电流的输出情况下，同步电源的这一部分损耗会小得多，有利于提高电源的效率。  
 但同步电源要注意，两个场效应管是处于交替开关状态的，为了确保两个场效应管不会同时打开，会故意让两个管子同时关闭一段时间，这个等待的时间称为死区时间。以图5为例，当工作于BUCK电路时，Q3一直关断Q4一直导通，在上管Q1已经关闭下管Q2还未打开的这段死区时间内，下管的体二极管能起到一个续流二极管的作用，计算损耗时需要考虑进去。同理BOOST电路时，需要考虑场效应管Q4的体二极管，在死区时间内的导通损耗。但场效应管的体二极管对电流的响应速度很慢，不利于电源纹波的抑制，因此，在一些高精度要求的DC/DC电源电路中，往往在场效应管体二极管的基础上再并联一个具有快速响应能力的肖特基二极管。

##### Inverter电路(反相升降压)

 Inverter反相升降压电路的拓扑如图6所示。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_004_fe342bbf67a0.png)

图6 Inverter拓扑结构图

  

#### 4.2 关键器件选型

##### 4.2.1 MOSFET

需要关注的参数：

漏源极间的导通电阻 R D S ( O N ) R\_{DS(ON)} RDS(ON)，导通电阻的大小决定了MOSFET的导通损耗，在DC/DC电源工作时，功率MOSFET的损耗主要来自这一参数。

导通时的栅源极间电压 V G S V\_{GS} VGS，对于N沟道增强型MOSFET而言，只有当栅源极间电压 V G S V\_{GS} VGS达到一定电平(导通的阈值电压 V G S ( t h ) V\_{GS(th)} VGS(th))后，MOSFET才开始导通。

额定导通电流 I D I\_D ID，MOSFET的导通电阻 R D S ( O N ) R\_{DS(ON)} RDS(ON)与导通额定电流 I D I\_D ID成反比，因此在MOSFET选型时，除保证电源最大工作电流电流小于额定导通电流外，在成本范围内选择额定导通电流大一些的MOSFET还有利于降低功耗。

响应速度，MOSFET的导通速度与输入电容(栅极电容)相关。栅极电容是MOSFET本身的寄生电容，包括栅源极之间的寄生电容 C i s s C\_{iss} Ciss和栅漏极之间的寄生电容 C r s s C\_{rss} Crss。为了导通MOSFET，首先需要对这两个栅极电容充电，使栅源极电压达到阈值后才会导通MOSFET，栅极电容的大小决定了MOSFET导通速度。在MOSFET的选型过程中， C i s s C\_{iss} Ciss和 C r s s C\_{rss} Crss参数往往不能直接反映栅极电容 C i n C\_{in} Cin的值，此时可利用栅极电荷 Q g Q\_g Qg。 Q g Q\_g Qg与 C i n C\_{in} Cin存下如下关系： Q g = C i n × V G S Q\_g = C\_{in} \\times V\_{GS} Qg\=Cin×VGS；在 V G S V\_{GS} VGS一定的条件下， Q g Q\_g Qg与 C i n C\_{in} Cin成正比，所以可选用 Q g Q\_g Qg值较小的MOSFET。

MOSFET的栅极充电波形，包括：1、给电容 C i s s C\_{iss} Ciss充电直到栅源极电压 V G S V\_{GS} VGS达到阈值电平 V G S ( t h ) V\_{GS(th)} VGS(th)，MOSFET开始导通；2、再到 C i s s C\_{iss} Ciss充电完成，漏极电流 I D I\_D ID达到最大值；3、再到漏极电流 I D I\_D ID和栅源极电压 V G S V\_{GS} VGS不变，漏源极电压 V D S V\_{DS} VDS开始减小，开始为电容 C r s s C\_{rss} Crss，当 C r s s C\_{rss} Crss充电完成后， V D S V\_{DS} VDS下降到最低电压( R D S ( O N ) × I D R\_{DS(ON)} \\times I\_D RDS(ON)×ID)；4、 I D I\_D ID和 V D S V\_{DS} VDS不再变化，栅极电平 V G S V\_{GS} VGS继续增大，直到达到驱动电路的电平值。

MOSFET寄生二极管，MOSFET的体二极管具有一定的通流能力，但对电流的响应速度较慢，并不能保证稳定工作，因此如果有反向电流要求，应在外部并联一个具有快速响应能力的肖特基二极管。

MOSFET降额使用，关注 最大漏源电压 V D S V\_{DS} VDS、最大栅源电压 V G S V\_{GS} VGS、连续导通电流 I D I\_D ID、峰值导通电流 I D M I\_{DM} IDM、最大功耗 P D P\_D PD 的极限参数.

##### 4.2.2 电感

电感的选择主要关注以下参数：  
尺寸、电感值、热额定电流、饱和电流、直流阻抗、自谐振频率

BUCK电路电感量的计算：  
L = V O U T × ( 1 − V O U T / V I N ) Δ I L × f s L = \\dfrac{V\_{OUT} \\times (1-V\_{OUT}/V\_{IN})}{\\Delta I\_L \\times f\_s} L=ΔIL×fsVOUT×(1−VOUT/VIN)

BOOST电路电感量的计算：  
L = V I N × ( 1 − V I N / V O U T ) Δ I L × f s L = \\dfrac{V\_{IN} \\times (1-V\_{IN}/V\_{OUT})}{\\Delta I\_L \\times f\_s} L=ΔIL×fsVIN×(1−VIN/VOUT)

Δ I L \\Delta I\_L ΔIL为电源的输出纹波电流，一般来说， Δ I L \\Delta I\_L ΔIL的确定原则为： Δ I L = 0.2 I O U T  to  0.4 I O U T \\Delta I\_L = 0.2I\_{OUT} \\text{ to } 0.4I\_{OUT} ΔIL\=0.2IOUT to 0.4IOUT。

BUCK电感饱和电流要求： I C S ≥ I L ( M A X ) = I O U T + 0.5 Δ I L I\_{CS} \\ge I\_{L(MAX)} = I\_{OUT} + 0.5\\Delta I\_L ICS≥IL(MAX)\=IOUT+0.5ΔIL

BOOST电感饱和电流要求： I C S ≥ I L ( M A X ) = I O U T × V O U T V I N + 0.5 Δ I L I\_{CS} \\ge I\_{L(MAX)} = I\_{OUT} \\times \\dfrac{V\_{OUT}}{V\_{IN}} + 0.5\\Delta I\_L ICS≥IL(MAX)\=IOUT×VINVOUT+0.5ΔIL

##### 4.2.3 反馈电阻

反馈电阻网络电阻太小会导致功耗增加，下端电阻 R 2 R\_2 R2太大会不满足反馈引脚最小电流的要求。  
上端电阻 R 1 R\_1 R1太小可能会造成环路不稳定：  
1、如果 R 1 R\_1 R1值太小，会使得通过反馈分压器的电流增大，增加反馈网络的噪声敏感性，从而可能引起不稳定。  
2、 R 1 R\_1 R1值过小会增加反馈回路的带宽。虽然较宽的带宽可以提高系统的响应速度，但如果带宽过宽，可能会导致反馈回路过于敏感，引起高频噪声进入反馈回路，导致相位裕度不足，从而引起系统不稳定。

  

### 5 电源PCB设计要点(BUCK电路)

在器件手册未提供参考布局时，降压型开关电源器件可参考以下要点进行布局(参考TPS6213X)：

1、进行输入电容的布局和布线  
 在布局开始时，应首先考虑输入电容器的位置，在制造规则的允许下，把输入电容器布设在尽可能靠近IC电源输入的地方，用尽量宽的走线连接电容器和电源IC，如图7所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_005_98fcb06836b1.png)

图7 输入电容的布局布线

  

2、进行电感器和SW节点滤波器的布局和布线  
 在需要安置和布线的组件中，重要性排在第二位的是电感和SW节点滤波器(通过添加在SW节点上的RC滤波器，可以通过缓解SW节点上的上升和下降时间来降低开关电源的电磁干扰，但会导致效率降低)。将电感尽可能进的放在靠近电源IC的位置，保持尽可能小的SW节点面积，如图8所示。因为连接SW的铜箔与电路的任一点都能形成寄生电容，该电容是一个噪声耦合路径，减小SW节点，可以减少耦合。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_006_cf04b1f809ef.png)

图8 SW节点的布局布线

  

3、进行输出电容和VOS引脚的布局和布线  
 输出电容布局是完成整个开关电源回路的最后一部分，它所选的位置应尽可能地缩短从电感经电容到电源接地的位置，确保整个电源回路面积最小，如图9所示。VOS(Voltage output sense)引脚，即输出电压检测引脚。这是一条非常重要的信号线，连接不当或存在噪声会引起不良的输出电压调节、开关抖动等。应使VOS走线简短并直达输出电容，走线不便时可使用过孔走至底层，如图9所示，该走线不能干扰甚至切断电源回路走线。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_007_a28b608e217b.png)

图9 输出电容和VOS引脚的布局和布线

  

4、进行小信号组件的布局和布线  
 小信号组件包括所有与电源转换没有直接关系的模拟和数字电路。诸如FB采样电阻、软启动电容器以及其他滤波去耦的电容器。对于模拟小信号电路(FB)，应采用简短、直接的走线把他们放置在靠近IC的位置，使其对噪声的敏感性保持在很低水平。对于数字信号(EN、PG、AVIN引脚电路)，这些在布局布线中重要性最低，因此放在最后进行。这些电路所需的器件一般可以沿着信号线随意放置，不一定要靠近电源IC，如图10所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_008_74d5669c17b2.png)

图10 小信号组件的布局和布线

  

5、设置一个单点接地，并接入系统地  
 将有噪声的功率组件(内部MSFET、输入电容、输出电容、电感、SW滤波器)设置一个单独的接地点，为其他小信号保留一个单独的接地点，然后，在单个点上连接这两个地，通常是IC下方的散热焊盘，最后再将电源地与系统的地连接在一起，可以通过过孔实现。具体图示可参考图11。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路主要器件选型_BUCK电路PCB布局布线5个要点_images\img_009_7d03738a8540.png)

图11 接地图示

  

原文链接：https://blog.csdn.net/qq\_43417647/article/details/130048250

  

▼ **往期精彩回顾** ▼

    
-   [👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [硬件面试题-反激式开关电源电路详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537159&idx=1&sn=84e355e70c57703239a3656504780f71&scene=21#wechat_redirect)
    
-   [防反接电路、防倒灌电路、过流保护和ESP保护](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536825&idx=1&sn=fedae5c74f2c7804d197982cc5b4a17f&scene=21#wechat_redirect)
    
-   [24V转12V~3V降压芯片和线性LDO选型](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537868&idx=1&sn=9840e1c394e7248faa70b5fc187711a6&scene=21#wechat_redirect)
    
-   [电路识图从入门到精通-PDF（312页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&scene=21#wechat_redirect)
    
-   [电子工程师必备-关键技能速成宝典（692页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&scene=21#wechat_redirect)