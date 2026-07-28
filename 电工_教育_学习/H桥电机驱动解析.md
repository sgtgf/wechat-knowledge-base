# H桥电机驱动解析

原创 硬件笔记本 2022-12-29 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/f5teylX2OOElvJCrZar3jg](https://mp.weixin.qq.com/s/f5teylX2OOElvJCrZar3jg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

文章直接来源：硬件攻城狮  

**一、简介**

之前介绍过H桥电机驱动电路的基本原理，但是以集成的电机驱动芯片为示例。这些集成的芯片使用起来比较简单，但是只能适用于一些小电流电机，对于大电流的电机(比如：RS380和RS540电机），则不能使用这些集成的芯片（否则会导致芯片严重发热并烧毁）。

此时便需要自行用半桥/全桥驱动芯片和MOS管搭建合适的H桥电机驱动电路实现对大电流电机的驱动控制。

  

**二、示例原理图和PCB展示**

此原理图和PCB采用的是网上分享的电路设计（IR2104半桥驱动+LR7843MOS管），为了便于焊接，对其中的一些封装进行了修改，并重新布线。

该电机驱动板有两个H桥电路，可以同时控制双路电机。可通过相应的控制信号来控制电机的转速和正反转。

1.原理图

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicofkUeLSWThFLzWvga9ph3fM6jtRawk5oicvv2JavZOZEaC7rKibSZH7yw/640?wx_fmt=png)

  

2.PCB 3D图

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdico2G3Vh2OkuboLJgiarXwNTwzsTbdwEcByk5MK0wgNSOWvd4dKRdErGhg/640?wx_fmt=png)

**三、辅助电路部分讲解**

本驱动模块默认采用7.4V的锂电池组接入右侧的P1端子进行供电。

**1、BOOST升压电路**

★BOOST升压电路采用的是MC34063这款芯片。此模块主要是将7.4V的输入电压升到12V后为后面的IR2104S半桥驱动芯片供电（需要12V的原因将在下面介绍）。此芯片的工作原理在此不多做介绍，可自行下载数据手册进行学习。

注意事项：

(1).此BOOST电路模块是此驱动板中较为容易出问题的部分，因此焊接时需要先对其进行焊接调试，确认没有问题后再进行后续的焊接。

(2).此电路需要尤其注意0.22Ω的精密电流检测电阻，如果电阻质量不合格很容易出现问题，导致电路不能正常工作。

**2、降压稳压电路**

★降压稳压电路采用的是MIC5219这款LDO芯片。此电路模块将7.4V的输入电压降压稳压到3.3V给后面的74LVC245芯片供电。类似芯片较多，使用也较为简单。

**3、隔离电路部分**

在设计电机驱动板时，很多都会有一个用于隔离的电路模块。主要用于将控制器与H桥驱动电路隔离开，防止损坏控制器。

此电机驱动板采用了74lvc245这款三态输出的收发器芯片作为隔离芯片。也可以使用74HC125（三态四线非反相缓冲器）或74HC244（三态八线非反相缓冲器）。具体使用说明可参考相应的数据手册。

  

**四、搭建的****H桥驱动电路详解**

**1、简介**

在学习此部分之前，需要先掌握基础H桥驱动的工作原理，具体可参看此篇博客：电机驱动芯片（H桥、直流电机驱动方式）

自行搭建的H桥驱动电路一般都包括两个部分：半桥/全桥驱动芯片和MOS管。自行搭建的H桥驱动所能通过的电流几乎由MOS管的导通漏极电流所决定。因此，选择适当的MOS管，即可设计出驱动大电流电机的H桥驱动电路。

**2、NMOS管IRLR7843**

在选择MOS管搭建H桥时，主要需注意以下一些参数：

★1.漏极电流（Id）：该电流即限制了所能接入电机的最大电流（一般要选择大于电机堵转时的电流，否则可能在电机堵转时烧毁MOS管），LR7843的最大漏极电流为160A左右，完全可以满足绝大部分电机的需要。

★2.栅源阈值电压/开启电压（Vth）：该电压即MOS管打开所需的最小电压，也将决定后续半桥驱动芯片的选择和设计（即芯片栅极控制脚的输出电压）。LR7843的最大栅源阈值电压为2.3V。

★3.漏源导通电阻（Rds）：该电阻是MOS管导通时，漏极和源极之间的损耗内阻，将会决定电机转动时，MOS管上的发热量，因此一般越小越好。LR7843的漏源导通电阻为3.3mΩ。

★4.最大漏源电压（Vds）：该电压是MOS管漏源之间所能承受的最大电压，必须大于加在H桥上的电机驱动电压。LR7843的最大漏源电压为30V。满足7.4V的设计需要。

**3、半桥驱动芯片IR2104S**

在H桥驱动电路中，一共需要4个MOS管。而这四个MOS管的导通与截止则需要专门的芯片来进行控制，即要介绍的半桥/全桥驱动芯片。

★所谓半桥驱动芯片，便是一块驱动芯片只能用于控制H桥一侧的2个MOS管（1个高端MOS和1个低端MOS，在前述推荐的博客中有介绍）。因此采用半桥驱动芯片时，需要两块该芯片才能控制一个完整的H桥。

★相应的，全桥驱动芯片便是可以直接控制4个MOS管的导通与截止，一块该芯片便能完成一个完整H桥的控制。

这里使用的IR2104便是一款半桥驱动芯片，因此在原理图中可以看到每个H桥需要使用两块此芯片。

**1、典型电路设计（来源于数据手册）**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicoFicDpY3aQ1CPJzPIvHRcbGZkRZFH7b4ztbnfofZc5mSZbN77gDRj3Bg/640?wx_fmt=png)

**2、引脚功能（来源于数据手册）**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicod5xEuB9usFbhk2fJH8qibb6H5m389ZvS4ibQqaTJ2hhwzutuoia4E0DQQ/640?wx_fmt=png)

★VCC为芯片的电源输入，手册中给出的工作电压为10~20V。（这便是需要boost升压到12V的原因）

★IN和SD作为输入控制，可共同控制电机的转动状态（转向、转速和是否转动）。

★VB和VS主要用于形成自举电路。（后续将详细讲解）

★HO和LO接到MOS管栅极，分别用于控制高端和低端MOS的导通与截止。

★COM脚直接接地即可。

**3、****自举电路**

此部分是理解该芯片的难点，需要进行重点讲解。从上面的典型电路图和最初的设计原理图中均可发现：该芯片在Vcc和VB脚之间接了一个二极管，在VB和VS之间接了一个电容。这便构成了一个自举电路。

作用：在高端和低端MOS管中提到过，由于负载（电机）相对于高端和低端的位置不同，而MOS的开启条件为Vgs>Vth，这便会导致想要高端MOS导通，则其栅极对地所需的电压较大。

补充说明：因为低端MOS源极接地，想要导通只需要令其栅极电压大于开启电压Vth。而高端MOS源极接到负载，如果高端MOS导通，那么其源极电压将上升到H桥驱动电压，此时如果栅极对地电压不变，那么Vgs可能小于Vth，又关断。因此想要使高端MOS导通，必须想办法使其Vgs始终大于或一段时间内大于Vth（即栅极电压保持大于电源电压+Vth）。

首先看下IR2104S的内部原理框图（来源于数据手册）。此类芯片的内部原理基本类似，右侧两个栅极控制脚（HO和LO）均是通过一对PMOS和NMOS进行互补控制。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicoic5VSWZkK0Z1ia2Yy7OXFNGRHac5pJbQjDxB4HE3o6lj8MGicw3JGnKzA/640?wx_fmt=png)

**自举电路工作流程图：**

以下电路图均只画出半桥，另外一半工作原理相同因此省略。

假定Vcc=12V，VM=7.4V，MOS管的开启电压Vth=6V（不用LR7843的2.3V，原因后续说明）。

（1）.第一阶段：首先给IN和SD对应的控制信号，使HO和LO通过左侧的内部控制电路（使上下两对互补的PMOS和NMOS对应导通），分别输出低电平和高电平。此时，外部H桥的高端MOS截止，低端MOS导通，电机电流顺着②线流通。同时VCC通过自举二极管（①线）对自举电容充电，使电容两端的压差为Vcc=12V。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdico4wD5S93SlR1rQ2Hiby39AtmYepLQH8wNAlODupiaqiabDbIBmydErch0A/640?wx_fmt=png)

（2）.第二阶段：此阶段由芯片内部自动产生，即死区控制阶段（在H桥中介绍过，不能使上下两个MOS同时导通，否则VM直接通到GND，短路烧毁）。HO和LO输出均为低电平，高低端MOS截止，之前加在低端MOS栅极上的电压通过①线放电。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdico30oiaDFrPiaO5XlIcXIAtuPRmJVCIibHmabcVrmdxBvA9MTxsgicTv3PiaQ/640?wx_fmt=png)

（3）.第三阶段：通过IN和SD使左侧的内部MOS管如图所示导通。由于电容上的电压不能突变，此时自举电容上的电压（12V）便可以加到高端MOS的栅极和源极上，使得高端MOS也可以在一定时间内保持导通。此时高端MOS的源极对地电压≈VM=7.4V，栅极对地电压≈VM+Vcc=19.4V，电容两端电压=12V，因此高端MOS可以正常导通。

（此时，自举二极管两端的压差=VM，因此在选择二极管时，需要保证二极管的反向耐压值大于VM。）

注意：因为此时电容在持续放电，压差会逐渐减小。最后，电容正极对地电压（即高端MOS栅极对地电压）会降到Vcc，那么高端MOS的栅源电压便≈Vcc-VM=12V-7.6V=4.4V < Vth=6V，高端MOS仍然会关断。

补充总结：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicoueWjTDKicvaicQSJr37vEFakNEOJLQy16YgzHfVK5V0Zk2jKWIBocBzg/640?wx_fmt=png)

★因此想要使高端MOS连续导通，必须令自举电容不断充放电，即循环工作在上述的三个阶段（高低端MOS处于轮流导通的状态，控制信号输入PWM即可），才能保证高端MOS导通。自举二极管主要是用来当电容放电时，防止回流到VCC，损坏电路。

★但是，在对上面的驱动板进行实际测试时会发现，不需要令其高低端MOS轮流导通也可以正常工作，这是因为即使自举电容放电结束，即高端MOS的栅源电压下降到4.4V仍然大于LR7843的Vth=2.3V。

那么在上述驱动板中，自举电路就没有作用了吗?当然不是，由于MOS管的特性，自举电路在增加栅源电压的同时，还可令MOS管的导通电阻减小，从而减少发热损耗，因此仍然建议采用轮流导通的方式，用自举电容产生的大压差使MOS管导通工作。

4.控制逻辑

时序控制图：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicohp10YnOYvPqzj9vxc1amPDeuLgibvuLEbvpKjJ2YVeVoCgeC94mRHzw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicoPu5MU17BQ5RAzQXmyPDOFLFqbeu0AjY1MmJibUM40JXO7VVOCrGkibBw/640?wx_fmt=png)

简单看来，就是SD控制输出的开关（高电平有效），IN控制栅极输出脚的高低电平（即H桥MOS管的开关）。

在最上面的驱动板中，SD接到VCC，即处于输出常开状态。只需要对IN脚输入对应控制信号即可进行电机的驱动。

上面为半桥的驱动方式，驱动一个H桥要同时对两个IR2104进行控制。

**以上面设计的电机驱动板为例，驱动真值表：**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjFKrCyy8979jXfe10mPdicoUpWibpjYxelnb6fia5b0BtwbEuRRibz0kiajzRCAvb2ibUefKoj2qfx2WaQ/640?wx_fmt=png)

改变PWM的占空比，即可改变电机的转速。

**五、相关补充**

★1.自举二极管一般选用肖特基二极管（比如上述驱动板中的1N5819）。

在自举电容选择时，其耐压值需大于Vcc并留有一定余量（如上述驱动板中为16V的钽电容）。而自举电容的容值选择需要一定的计算。具体可自行查找或参看此链接：自举电容的选择。此驱动板中选用1uF的钽电容，经测试运行稳定。一般来说，PWM的输入频率越大（即电容充放电频率），电容所需容值越小。

★2.H桥MOS管栅极串联的电阻主要用于限流和抑制振荡。为了加快MOS管的关断还可以在栅源之间并联一个10K电阻或在栅极串联电阻上反向并联一个二极管。这部分内容网上可找到较多介绍。

版权声明：本文为CSDN博主「默默无闻小菜鸡」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/qq\_44897194/article/details/107397079

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。