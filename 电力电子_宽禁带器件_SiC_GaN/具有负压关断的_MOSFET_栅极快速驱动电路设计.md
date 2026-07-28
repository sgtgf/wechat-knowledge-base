# 具有负压关断的 MOSFET 栅极快速驱动电路设计

原创 殷亚昆 , 段章超 SiC碳化硅MOS管及功率模块的应用 2026-04-05 09:10 广东

> 原文地址: [https://mp.weixin.qq.com/s/x6nCoqN\_JjINcLq6i3IsNg](https://mp.weixin.qq.com/s/x6nCoqN_JjINcLq6i3IsNg)

文章来源：强激光与粒子束

作者:殷亚昆1,段章超2,王永刚1，姜松1,李孜1（1. 上海理工大学 机械工程学院，上海 200093；2. 国网新源控股有限公司潘家口蓄能电厂，河北 唐山 064309）   

摘 要:设计了一款用于全固态 Marx 发生器的半导体开关驱动电路。该驱动电路输出侧采用储能电容与 P-N 双MOSFET管结构，可完成对固态 Marx 脉冲发生器功率回路开关管快速同步的导通关断控制，并具有死区时间调节与负压关断功能。此外，该驱动电路配合串芯磁环二次侧反向接线方案，可实现用同一信号对功率回路充、放电两路开关管的控制。实验证明，采用该款驱动电路的半桥型全固态Marx 脉冲发生器可稳定输出幅值24kV的脉冲方波，输出脉宽可在300 ns～10 μs 之间自由调节，上升沿和下降沿均在 40 ns 以内。   

关 键 词 :固态 Marx 驱动电路；负压偏置；快速导通；纳秒脉冲

传统的 Marx 脉冲发生器采用气体开关作为受控开关，在放电工作状态下电极击穿气体形成放电回路使得气体开关导通。由于开关过程中存在电弧与热效应，气体开关电极容易损坏且无法稳定达到较高的开关频率。另外气体开关体积笨重，限制了 Marx 脉冲发生器的功率密度。全固态 Marx 脉冲发生器采用金属氧化物场效应管（MOSFET）或绝缘栅双极晶体管（IGBT）作为受控开关，与气体开关型 Marx 脉冲发生器相比在可靠程度、使用寿命、功率密度以及能效等方面都有显著的提升。由于 MOSFET的高频性能优于IGBT，产生高频脉冲的全固态Marx 脉冲发生器常以 MOSFET 作为受控开关。 

虽然全固态 Marx 脉冲发生器产生脉冲的功率回路拓扑结构基本固定，但如何尽可能提升其在输出功率、工 作频率以及输出脉冲波形质量等方面的表现仍是全固态 Marx 脉冲发生器的核心研究方向。高频全固态 Marx 脉冲发生器输出幅值、工作频率以及脉冲宽度主要受到 MOSFET 驱动模块的限制，驱动模块的电压隔离等级、驱动能力、响应速度、同步性能以及抗干扰能力，是决定全固态 Marx 脉冲发生器输出能力的重要指标。 

目前，主流的驱动方案分为两类：有源驱动和无源驱动。有源驱动方案中光隔离驱动最为常见，高压侧的高频高压脉冲产生的电磁干扰无法影响到光信号，这使得光隔离驱动方案具有极好的同步性与抗电磁干扰性。Zhang Xuan 等提出的碳化硅（SiC）MOSFET 栅极驱动器实现了高隔离电压（＞20 kV），并消除了耦合功率级和控制级的寄生电容，从而抑制了高压 SiC 器件开关瞬变中高 dv/dt引起的控制信号失真。但光隔离驱动方案中，每 一级 Marx 都需要光纤收发器、隔离电源模块以及驱动芯片，电路较为复杂，也增加了成本和体积。 

在无源驱动方案中，磁隔离方案最为常见。与光隔离驱动器相比，磁隔离驱动方案利用磁场耦合同时传输驱 动信号和能量，不需要额外的隔离供电模块，隔离电压由初级绕组和次级绕组的绝缘能力决定。因此磁隔离是近 年研究热点，学者提出了多种磁隔离驱动电路。由于磁芯伏秒积限制，隔离变压器输出的驱动脉冲宽度有限。Rao Junfeng等提出新型磁隔离驱动电路，对小型隔离变压器输出的窄脉冲整形之后再驱动半导体开关，使驱 动信号的最大脉冲宽度不再受磁芯饱和限制。然而，由于隔离变压器漏感的存在，驱动脉冲的上升/下降沿缓慢，导致固态 Marx 输出的高压脉冲上升时间变慢。Hyun-Bin Jo 等提出的驱动电路工作时，变压器输出的正脉冲 先对电容充电，经过一定延时后，电容对主开关的栅极充电。由于电容和栅极之间不存在漏感，因此驱动脉冲具有 快速上升时间。然而，该电路关断时驱动信号没有负压，Marx 工作时具有高 dv/dt和 di/dt，若 Marx 的结构为半桥或全桥，则可能导致开关直通短路损坏。 

本文提出一种新型磁隔离驱动电路，不仅驱动信号的最大脉冲宽度不受磁芯饱和限制，而且引入延迟导通电路，变压器的输出脉冲先对电容充电，再由电容向主开关栅极充电，从而加快驱动脉冲上升沿；还具有负压关断能力  ，提高了驱动电路对功率回路中高频高压脉冲引起的电磁干扰的抑制能力。  

1 .负压关断驱动电路工作原理  

1.1  全固态 Marx工作原理  

全固态 Marx 脉冲发生器的基本结构如图 1 所示。它由 n级组成，每级由储能电容Ci、二极管Di，充电开关管Sci、放电开关管Sdi组成。在充电工作模式下，充电开关管Sc0至Scn同时导通，放电开关管Sd1至Sdn保持断开状态，电容C1至Cn并联充电，如图 1 中绿线所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMRfRbIB7YtQgFeO4BsYa4HvlAQUTpES9eRicQ1UYzrpEZJpjkg3U4VFCwbMaPun6uqMImRf20lI1SvWRkeUjia4iafzp466LaXe4/640?wx_fmt=png&from=appmsg)

电容充电完成后，充电开关管Sc1至Scn 断开，经过较短死区时间后，脉冲发生器进入放电工作模式。在放电工作模式中，充电开关管Sc0 至Scn 保持关断状态，放电开关管Sd1 至Sdn 闭合，电容C1 至Cn 串联放电，如图 1 中橙色线所示。放电结束后放电开关管Sd1至Sdn关断，脉冲发生器进入下一个充电周期。此时，充电开关管Sc0至Scn 闭合，与负载之间形成截尾回路，负载上的电荷经过截尾回路进行快速泄放，从而获得陡峭的脉冲下降沿，如图 1 中蓝线所示。  

功率开关管采用磁隔离驱动，如图 1 所示。串芯磁环的 一次侧为单匝高压电缆，与全桥控制模块的输出端相连，磁环二次侧与本文提出的新型栅极驱动电路相连。on/off 控制信号脉冲由全桥控制模块产生后，通过串芯磁环隔离耦合至栅极驱动电路，经栅极驱动电路处理后控制Sci 与Sdi 的导通和关断。  

1.2   负压关断快速栅极驱动电路工作过程

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNYnCfEfoJYGfgxvQ1ztTgSYZoCEEshXU2FtAicVDaoiaLl2NybmBpTjlVPjbELibz6R7EId9G4two2OKzPib1OPszUU3eqibpibmvfc/640?wx_fmt=png&from=appmsg)

  
图 2 为栅极驱动电路的具体结构，同一级 Marx 的充电 开关管Sci 与放电开关管Sdi 由同一个磁环进行控制。 Sci和 Sdi的驱动信号极性相反，因此与Sci 和 Sdi驱动电路相连的两 个绕组同名端相反，以从同一磁环的原边获得两个极性相反的控制信号。因为充电开关管的驱动电路与放电开关管的驱动电路工作过程完全对称，故以放电开关管驱动电路的工作过程为例进行研究。 TX1接收由全桥控制模块产生的on/off 脉冲控制信号，on/off 脉冲对储能电容C3、C4进行充电，之后电容C3、C4经M1与M2两个 mosfet 管对功率开关管的栅源极输出正向导通电压与负向关断电压。其具体的工作过程分为 7 个阶段，如图 3 所示。  

（1）工作过程 1：on 脉冲给C3、C4充电：  

如图 3（a）所示，全桥电路产生正向脉冲，并耦合到磁环二次侧TX1 。电容C3 、C4经过由二极管D2 、D4以及电阻R3构成的回路，进行充电。Da3 、Da4分别为15V和10V的稳压管，可以将C3 、C4的充电电压钳位在稳压值。  

（2）工作过程 2：M1延时导通  

  
在工作过程 1 中，由于电流流过电阻R1 ，在R3 两端产生电压，该电压施加在三极管Q1 的基极，当超过Q1的导通阈值时，Q1导通。因此，在进行工作过程 1 的同时，正脉冲一方面经二极管D2 、D5、三极管Q1给电容C3 、C4充电，另一方面经二极管D2 、电阻 R2、三极管Q1 对电容C1 进行充电，如图 3（b）所示。  

（3）工作过程 3：栅极驱动电路正向输出 

电容C1经过程 2 充电至M1导通的阈值电压时，M1导通。电容C3经M1、以及C2和R5的并联支路对Sdi的栅源极正向充电，令开关管导通，如图 3（c）所示。同时，磁环二次侧的正向脉冲也对开关管的栅源极充电，因此可以获得更短的动作时间。  

（4）工作过程 4：off 脉冲给C3、C4充电  

  
如图 3（d）所示，TX1接收来自全桥信号发生模块的off 脉冲，off 脉冲经由二极管D1 、D3、D6对储能电容C3 、C4进行充电。  

（5）工作过程 5：M1快速关断，M2滞后导通  

在进行工作过程 4 的同时，由于二极管D3 导通，C1和M1栅源极电容上的电荷由回路①快速泄放，M1断开。同 时 off 脉冲经电阻R5 、稳压管Da1 、二极管D6 构成的回路对M2 的栅源极电容充电，使M2 导通，如图 3（e）所示。 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPSicHX5jDKia069AtokSgtJdWsXZFhQ7cWUcict0wtx3yeDNhuyXGnlwL3icbZRXwa4GIagXhmS7D9SyibxRYb6OJ2ZABzAqH36NZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSYRe3QcUibYKIcogicrEg6uGDepfIv0nZPokHa6NmMvFseExy46nMjeRD1pw4R1MW1QugicSGN9T6LSl5c2YnKQDIlIH52Bn6kM/640?wx_fmt=png&from=appmsg)

Da1为 5 V稳压管，可以抑制来自 on/off 控制信号的负压扰动，只有大于−5 V 的负压信号才可击穿Da1对M2 的栅极进行充电。 M2的典型导通阈值电压为 1.6V，则只有当负压信号大于−6.6V 时，M2才会导通。由此可见，Da1也可以延后M2 的导通时间，防止M1与M2同导通。Da2 为15V稳压管，用来限制M2 的栅源极电压。  

（6）工作过程 6：功率开关管栅极能量泄放，栅极驱动电路反向输出  
  

M2导通后，功率开关管的栅极电容经电容C2和电阻R5构成的并联支路，以及M2对储能电容C4放电，栅极电压迅速降为−10V，使得功率开关管快速关断。由于M2的栅极电荷不存在泄放回路，所以可以一直保持导通状态，C4能够一直对功率MOSFET的栅源极之间施加负向关断电压，如图 3（f）中的实线所示。  

（7）工作过程 7：M2快速关断  

当下个工作周期的 on 脉冲到来后，A 点电位为负，M2栅源极电荷可由图 3（g）中回路②快速泄放，M2快速断开。

2.提出的驱动电路实际设计考虑与优点  

2.1死区时间  

由以上分析可知，当 on 信号到来时，放电开关的驱动信号Vgs（Sdi）由负变为正，使放电开关导通；而当 off 信号到来时，Vgs（Sdi）由正变为负，使放电开关断开。由于充电开关的二次侧同名端与放电开关相反，因此当 on 信号到来时，充电开关的驱动信号Vgs（Sci）由正变负，使之断开；而当off pulse 到来时，Vgs（Sci）由负变正，使之导通。  
  

为防止充电管与放电管同时导通，必须设置死区时间。当全桥控制模块输出一个on信号后，由于三极管Q1与 电容C1的存在，M1要延时一段时间才导通，因此功率开关管的栅源极并不能立刻收到导通电压。而当 off 脉冲到来时，功率开关管的栅源极则会立刻收到一个负向关断信号。这种工作方式使得在相同初级绕组控制下的放电开关管栅极的导通信号会滞后充电开关管的栅极关断信号一定时间。同样的，放电开关管栅极的关断信号也会超前充电开关管的栅极导通信号一定时间。通过调节电阻R2 ，可以调节电容C1 的充电速度，进而调节死区时间。

2.2为驱动电路提供充足的能量  
  

为抑制静电干扰，需在功率开关管栅极并联电阻R5 ，其值通常为5～20kΩ。然而，R5会消耗C3和C4中的能量。C3和C4通过on/off 脉冲充电，若on/off 脉冲不能提供足够的能量，则会导致C3 和C4的电压下降。当C3的电压低于一定值时，会导致功率开关管无法导通；而当C4的电压较低时，则驱动电路的关断负压较小，抗干扰能力下降。  

  
由于磁芯伏秒积限制，on/off 脉冲的脉宽有限，因此要给C3 和C4 提供足够的能量，只有提高 on/off 脉冲的频率。若 on/off 脉冲的频率同时提高，则Sci 和Sdi 的开关频率也将提高。但全固态 Marx 发生器中的开关通常工作在硬开关状态，开关损耗较大，因此提高开关频率会使开关的温度上升，甚至使开关过热而损坏。另一种思路是on/off 的脉冲频率不同，on脉冲仅在输出高压脉冲时产生，以使放电开关管Sdi 导通。除了在高压脉冲尾部产生off 脉冲，使Sdi 断开以外，在漫长的充电过程中，每隔一段时间就产生一个off 脉冲，以给 C3和 C4充电，使其具有足够高的电压，并使Sci 保持导通状态，给储能电容Ci 充电，使Sdi 维持关断负压，以提高抗电磁干扰能力。采用这种on/off 脉冲时序，可使全固态 Marx 发生器工作在单次状态，也不用担心C3 和C4 没有足够的电压。  

2.3快速驱动能力  

功率开关管的开关速度受驱动电流影响，本文提出的磁隔离栅极驱动电路的输出电流不受漏感限制，因此可 以提高开关的导通/关断速度。当全桥控制模块产生 on 信号时，on 脉冲首先对 C3、C4进行充电，将全桥驱动模块输出的能量经过磁环变压器隔离后存储到功率开关管栅极驱动电路一侧的电容C3 、C4中。on 信号没有直接作用于功率开关管栅源极之间，而是通过C3 、C4对功率开关管栅源极进行放电，这种方式大大缩短了能量的传输距离。同时，由于磁环变压器存在一定漏感，在驱动电路中同样存在部分杂散电感，on 信号到来后，首先对储能电容C3 进行充电。当经过一段时间后Q1 导通，电容C3 与磁环变压器漏感以及线路杂散电感同时对功率开关管的栅源极进行充电，使得功率开关管的栅源极电压快速上升，从而提高功率开关管的导通速度，以获得更快的输出脉冲上升沿。  

3 .实验结果分析  

为验证提出的驱动电路的有效性，本文以图 1 所示拓扑为主电路，图 3 所示拓扑为驱动电路，研制了 32 级全固态Marx 发生器原理样机，如图 4 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNabDicJrZSptJzlU1CNmYicKhf6yxnAApTomICCqVIoXVecrWykgZ1WhRaH8sCet24pGnWbMassWicX8oicXf2UmSzrt5BRiaownf4/640?wx_fmt=png&from=appmsg)

  
3.1  驱动电路特性测试  

分别对 32 级充、放电开关管的栅极驱动电路输出波形进行测量，发现各级驱动电路工作正常，输出波形几乎相同。图 5 是其中一级的驱动波形。Von/off为全桥脉冲信号发生模块输出的on/off 控制波形，幅值为300V，由于磁 芯伏秒积限制，脉宽为300 ns，on/off 脉冲死区时间为150ns。为了向功率开关管栅极驱动电路提供足够的能量，本文利用全桥模块每隔15μs 产生一个负向off 脉冲为驱动电路的储能电容C3 、C4充电，保证栅极驱动电路拥有足够的能量维持功率开关管的导通或关断状态。在工作频率较低时，不会因没有足够的能量而导致C3 、C4电压过低，无法正常工作。  

  
将图 5 中绿色虚线框中波形放大为图 5，其中Vcgs为充电开关管的栅极驱动波形，正电压幅值可以维持在10V，负电压幅值约为−10V，保证充电开关的可靠导通和关断。Vdgs为放电开关管的栅极驱动波形，导通电压幅值约为15V，关断电压幅值可以维持至−10V。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMBSI4Vk8zaWhI7oQPlcB0ClMBlOPRF0k7VAc7XIbbm5zDice6rLxIXFyGQtUfkEPpXBpdmc2Ae5sYqUX4YA6ljB0Vibiamv5TCPQ/640?wx_fmt=png&from=appmsg)

由图 6 可以看出，充电管的关断驱动电压和放电管的导通驱动电压在约 0ns处相交，而放电管的关断驱动电压和充电管的导通驱动电压在约300ns处相交，相交处的电压都为-10V，保证了 充电管和放电管之间的死区时间，避免因开关直通而损坏。 

为获得快速上升/下降沿，要求驱动波形具有良好的同步性。因此本文对放电开关驱动的同步性进行了测试，对32 级放电开关管栅极驱动电路每隔 4 级进行了测试，即第 1、5、13、17、19、21、25、29、32 级，结果如图 7 所 示  。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKJY7y3DEFGXGm7g5EsaaG6yJUQRjwaPfcRdDV5DDEMV0DCfJGLvrYRHnq7YKicnibic5AibR6UId0ajZKFkv1jBGlLYg6gXrrLVw/640?wx_fmt=png&from=appmsg)

由图 7 可知，所提出的栅极驱动电路具有较好的同步性，各驱动信号上升沿的最大同步误差均在 5ns 以内。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPzaibHrPcHaeYXJuz4WU7tjNOvRo55YLB457AUA7YPIA8C5Rd5E1uDZz54oSmNELjg60RKHmM1wT0jNTPWqTPzc7bd74aT6myQ/640?wx_fmt=png&from=appmsg)

3.2  高压脉冲输出特性测试  

驱动电路具有负压关断能力可以显著提升全固态 Marx 发生器的稳定性。当无关断负压时，驱动信号容易受到干扰，导致输出脉冲出现严重的抖动变形。设置 FPGA 控制信号，并调节充电电压，使全固态 Marx 发生器在空载条件下输出幅值为 24kV、频率1kHz、脉宽300ns 的脉冲。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPp856kgPcF1iatpK4Ubkg2ABbC8DCJgI5cs8QoA23OWAVaXUpjJFBCYNov008ia6yJicqroUg0DZiceTtdhDmlmCt7amA7aU7B85A/640?wx_fmt=png&from=appmsg)

如图 8 所示，可以得到稳定的高压脉冲，其脉宽为300ns，且具有陡峭的下降沿，脉冲上升时间为30ns，下降时间为40ns。将示波器显示的时间范围增大到3ms，可 以观察到重复频率输出波形，如图 9 所示。在重频模式下，本文研制的固态 Marx 发生器输出脉冲的重复频率为 1kHz。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPm12ibdCC5uC6hq87pUkmW7ADo5n6gTz99bKWVEpuVlDd2qbqMfWws9ynibXT3HLJovEtBfibuMqtJ599jTpfSTeico21U44I6ia90/640?wx_fmt=png&from=appmsg)

该全固态 Marx 发生器的输出脉冲宽度和幅值都可以连续调节。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMdibnFWTrqWiadFHEniaK9DwhJBAZQCPMGAvw43fia6bic8tdyJpiaGyalyhHwsfy0aUrXsHcySmrABMyFqYApYicemBOnxFrAcfIQ6A/640?wx_fmt=png&from=appmsg)

  
图10是不同脉宽输出波形，脉宽由1.5μs逐渐增大到10.5μs。图 11 是不同幅值的输出波形，脉冲幅值由 4kV 逐渐增大到 24kV。图 10 和图 11 的测试条件均 为 空载。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP2iahTXr5kwORaJxq8U7nFY7L8yco140aZvhVYhWUNTX0w7ibgOSJdU5bYwJTMeB7xY47CALr7DnAkBehZia2Tr15VUibwr7YpOics/640?wx_fmt=png&from=appmsg)

  
4.结论  

本文提出了一种用于全固态Marx 脉冲发生器的新型栅极驱动电路，并得出以下结论：该款栅极驱动电路配合产生多个off 脉冲的全桥控制模块，能够使栅极驱动电路获得足够驱动能量，在低频的工作状态下稳定运行。另外，该栅极驱动电路具有负压偏置维持、死区时间调节功能，配合串芯磁环二次侧反向绕线隔离方案，可以由同一信号完成对充、放电开关管的控制。本文设计的基于新型栅极驱动电路的24kV、1kHz重频高压 Marx 发生器由32级组成，并具有截尾功能，通过全桥型on/off控制脉冲信号发生模块与功率开关管栅极驱动电路相配合实现对发生器进行控制，实现了24 kV、1kHz 的重复工作频率、300ns的最小脉宽、30ns 的上升时间和 40ns 的下降时间。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPvr8ZqR5US9ViaVWlWX78Of3DNjBMXTsLjzOYQLqj8Ee6iaRtxaDdhjsuGs4LafYJich22TPYbnK7WCeZJcvmkaPHkg53fiaLEek8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMb6q4H7J29q8EEovx1ibOtU1vvLTFYqxlqP6vQjRSxnhP4VFdice16LRjOiadkMgRjrumu2ERiaqVYDOibdDAyHsSTp10icz3OFv84E/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM7a1E47HWDsNpbW1NHxWlvHTbMgSAYjicL4BnNJmyO82GjOeJhjK1cUDuSZCNuZwcPjcVGPglkkLiaY07oicibG9ckBLwCkIbMpCQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOu6GBtA1iaq0SVlfe00undwLYn0GFID0TYasHVt4TXPe6qvg03m5DCUqbNwVqEYb5DWERNtqribE13weV1ZrpBHUydyVqTHuMSU/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)