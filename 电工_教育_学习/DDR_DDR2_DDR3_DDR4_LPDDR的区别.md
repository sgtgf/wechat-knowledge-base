# DDR、DDR2、DDR3、DDR4、LPDDR的区别

原创 硬件笔记本 2023-07-16 11:50 四川

> 原文地址: [https://mp.weixin.qq.com/s/QEGWUZG1COjTbuOUshpajQ](https://mp.weixin.qq.com/s/QEGWUZG1COjTbuOUshpajQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

文章来源：EDA365电子论坛

今天分享DDR相关知识。

  

**什么是DDR**

DDR是Double Data Rate的缩写，即“双倍速率同步动态随机存储器”。DDR是一种技术，**中国大陆工程师习惯用DDR称呼用了DDR技术的SDRAM，**而在中国台湾以及欧美，工程师习惯用DRAM来称呼。

  

DDR的核心要义是在一个时钟周期内，上升沿和下降沿都做一次数据采样，这样400MHz的主频可以实现800Mbps的数据传输速率。

  

**每一代DDR的基本区别**

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_002_fdbc0c6cb3d9.png)

（可点击图片放大查看）

  

**关键技术解释**

**1、VTT**

  

VTT为DDR的地址线，控制线等信号提供上拉电源，上拉电阻是50Ω左右。VTT=1/2VDDQ，并且VTT要跟随VDDQ，因此需要专用的电源同时提供VDDQ和VTT。例如芯片TPS51206DSQT，LP2996。用专门的电源芯片，还有一个重要的原因，在Fly-by的拓扑中，VTT提供电流，增强DDR信号线的驱动能力。

  

DDR的接收器是一个比较器，其中一端是VREF，另一端是信号，例如地址线A2在有VTT上拉的时候，A2的信号在0和1.8V间跳动，当A2电压高于VTT时，电流流向VTT。当A2低于VTT时，VTT流向DDR。因此VTT需要有提供电流和吸收电流的能力，一般的开关电源不能作为VTT的提供者。此外，VTT电源相当于DDR接收器信号输入端的直流偏执，且这个偏执等于VREF，因此VTT的噪声要越小越好，否则当A2的状态为高阻态时，DDR接收器的比较器容易产生误触发。

  

上文说过，VTT相当于DDR接收器的直流偏执，其实如果没有VTT，这个直流偏执也存在，它在芯片的内部，提供电流的能力很弱。如果只有1个或2个DDR芯片，走Fly-by拓扑，那么不需要外部的VTT上拉。如果有2个以上的DDR芯片，则一定需要VTT上拉。

  

**2、Prefetch**

  

Prefetch字面意思就是预存取，每一代的DDR预存取大小不同，详见第2章中表格。以DDR3为例，它的Prefetch=8n，相当于DDR的每一个IO都有一个宽度为8的buffer，从IO进来8个数据后，在第8个数据进来后，才把这8个数据一次性的写入DDR内部的存储单元。下图是一个形象的解释，同时我们关注一下几个速率。DDR3的时钟是800MHz，Data Rate是1600Mbps，由于这个Buffer的存在，DDR内部的时钟只需要200MHz就可以了（注意DDR内部不是双比特翻转采样）。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_003_dd011565b151.png)

  

  

我们来做一个频率对照表，如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_004_fbb6840fc71c.png)

DDR内部的最小存储单元（1bit）是一个晶体管+一个电容，电容会放电，需要不断的“刷新”（充电）才能保持正常的工作状态，由于电容充放电需要时间，DDR内部的频率受限于此，很难提高，目前技术一般在100~200MHz。因此需要用Prefetch技术来提内部数据高吞吐率（其实就是串并转换原理）。Prefetch位宽的提高，是DDR2,3,4非常显著的变化。

  

第一段提到，对于DDR3，在第8个数据进来后，FIFO满了，然后才把这8个数据一次性的写入DDR内部的存储单元，那么必须要求DDR的内部时钟和外部时钟有一定的约束关系，FIFO满的时候一定是以DQS下降沿采样结束的，数据手册中对DQS的下降沿与clk有一个建立时间和保持时间的约束要求的目的原来是这样。

  

  

**3、SSTL**

  

SSTL（Stub Series Terminated Logic）接口标准也是JEDEC所认可的标准之一。该标准专门针对高速内存(特别是SDRAM)接口。SSTL规定了开关特点和特殊的端接方案。

  

SSTL标准规定了IC供电，IO的DC和AC输入输出门限，差分信号门限，Vref电压等。SSTL\_3是3.3V标准，SSTL\_2是2.5V标准，SSTL\_18是1.8V标准，SSTL\_15是1.5V。

  

SSTL最大的特点是需要终端匹配电阻，也叫终端终结电阻，上拉到VTT（1/2VDDQ）。这个短接电阻最大的作用是为了信号完整性，特别是在1拖多的Fly-by走线拓扑下，还能增强驱动能力。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_005_60cd4a0704cc.png)

  

**4、Bank**

  

以下图为例，一个Bank中包含若干个Array，Array相当于一个表单，选中“行地址”和“列地址”后，表单中的一个单元格就被选中，这个单元格就是一个bit。Bank中的所有Array的行地址是连在一起的，列地址也是。那么选中“行地址”和“列地址”后，将一起选中所有Array的bit。有多少个array，就有多少个bit被选中。以DDR3为例，Data线宽度是32，prefetch是8，那么Array就有32x8=256.内部一次操作会选中256bit的数据。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_006_1ec2906fd135.png)

  

Bank数量越多，需要的Bank选择线越多，DDR3有8个bank，需要3个BA信号BA0~2。BA，行地址，列地址共同组成了存储单元的访问地址，缺一不可。

  

  

**5、DDR的容量计算**

  

下图是DDR3 1Gb的寻址配置，以其中128Mbx8为例说明，其中x8表示IO数据（DQ）位宽度。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_007_d9c1d418973e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_008_19a34ce3db04.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_009_ddeb8859f372.png)

  

我的理解是，这个page size更像是逻辑上的一个页，并不是一个bank中，一行的所有bit，因为一行的所有bit要考虑prefetch宽度。

  

上表是JESD-3D中的表格，Row Address和Column Address都是真实需要寻址的地址，其他用途的地址比如A10，A12或者A11等并没有计算在内。在计算时，不要因为有A13，就认为Column Address就是A0~A13。

  

  

**6、Burst**

  

Burst字面意思是突发，DDR的访问都是以突发的方式连续访问同一行的相邻几个单元。进行Brust时，需要有几个参数：

  

Burst Length：一次突发访问几个列地址。

Read/Write: 是读还是写

Starting Column：从哪一列开始Burst

Burst：突发的顺序。

  

下图是DDR3中突发类型和顺序，Burst是通过A12/BC#选择的。但对于DDR，DDR2和DDR4，不一定就是通过A12/BC#，详见PIN定义章节。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_010_31ab68ef7c74.png)

  

**7、DDR的tRDC，CL，tAC**

  

在实际工作中，Bank地址与相应的行地址是同时发出的，此时这个命令称之为“行激活”（Row Active）。在此之后，将发送列地址寻址命令与具体的操作命令（是读还是写），这两个命令也是同时发出的，所以一般都会以“读/写命令”来表示列寻址。

  

根据相关的标准，从行有效到读/写命令发出之间的间隔被定义为tRCD，即RAS to CAS Delay（RAS至CAS延迟，RAS就是行地址选通脉冲，CAS就是列地址选通脉冲），我们可以理解为行选通周期。tRCD是DDR的一个重要时序参数，广义的tRCD以时钟周期（tCK，Clock Time）数为单位，比如tRCD=3，就代表延迟周期为两个时钟周期，具体到确切的时间，则要根据时钟频率而定，DDR3-800，tRCD=3，代表30ns的延迟。

  

接下来，相关的列地址被选中之后，将会触发数据传输，但从存储单元中输出到真正出现在内存芯片的 I/O 接口之间还需要一定的时间（数据触发本身就有延迟，而且还需要进行信号放大），这段时间就是非常著名的 CL（CAS Latency，列地址脉冲选通潜伏期）。CL 的数值与 tRCD 一样，以时钟周期数表示。如 DDR3-800，时钟频率为 100MHz，时钟周期为 10ns，如果 CL=2 就意味着 20ns 的潜伏期。不过CL只是针对读取操作。

  

由于芯片体积的原因，存储单元中的电容容量很小，所以信号要经过放大来保证其有效的识别性，这个放大/驱动工作由S-AMP负责，一个存储体对应一个S- AMP通道。但它要有一个准备时间才能保证信号的发送强度（事前还要进行电压比较以进行逻辑电平的判断），因此从数据I/O总线上有数据输出之前的一个时钟上升沿开始，数据即已传向S-AMP，也就是说此时数据已经被触发，经过一定的驱动时间最终传向数据I/O总线进行输出，这段时间我们称之为 tAC（Access Time from CLK，时钟触发后的访问时间）。

  

目前内存的读写基本都是连续的，因为与CPU交换的数据量以一个Cache Line（即CPU内Cache的存储单位）的容量为准，一般为64字节。而现有的Rank位宽为8字节（64bit），那么就要一次连续传输8次，这就涉及到我们也经常能遇到的突发传输的概念。突发（Burst）是指在同一行中相邻的存储单元连续进行数据传输的方式，连续传输的周期数就是突发长度（Burst Lengths，简称BL）。

  

在进行突发传输时，只要指定起始列地址与突发长度，内存就会依次地自动对后面相应数量的存储单元进行读/写操作而不再需要控制器连续地提供列地址。这样，除了第一笔数据的传输需要若干个周期（主要是之前的延迟，一般的是tRCD+CL）外，其后每个数据只需一个周期的即可获得。

  

突发连续读取模式：只要指定起始列地址与突发长度，后续的寻址与数据的读取自动进行，而只要控制好两段突发读取命令的间隔周期（与BL相同）即可做到连续的突发传输。

  

谈到了突发长度时。如果BL=4，那么也就是说一次就传送4×64bit的数据。但是，如果其中的第二笔数据是不需要的，怎么办？还都传输吗？为了屏蔽不需要的数据，人们采用了数据掩码（Data I/O Mask，简称DQM）技术。通过DQM，内存可以控制I/O端口取消哪些输出或输入的数据。这里需要强调的是，在读取时，被屏蔽的数据仍然会从存储体传出，只是在“掩码逻辑单元”处被屏蔽。DQM由北桥控制，为了精确屏蔽一个P-Bank位宽中的每个字节，每个DIMM有8个DQM 信号线，每个信号针对一个字节。这样，对于4bit位宽芯片，两个芯片共用一个DQM信号线，对于8bit位宽芯片，一个芯片占用一个DQM信号，而对于 16bit位宽芯片，则需要两个DQM引脚。

  

在数据读取完之后，为了腾出读出放大器以供同一Bank内其他行的寻址并传输数据，内存芯片将进行预充电的操作来关闭当前工作行。还是以上面那个Bank示意图为例。当前寻址的存储单元是B1、R2、C6。如果接下来的寻址命令是B1、R2、C4，则不用预充电，因为读出放大器正在为这一行服务。但如果地址命令是B1、R4、C4，由于是同一Bank的不同行，那么就必须要先把R2关闭，才能对R4寻址。从开始关闭现有的工作行，到可以打开新的工作行之间的间隔就是tRP（Row Precharge command Period，行预充电有效周期），单位也是时钟周期数。

  

  

**8、ODT**

  

ODT是内建核心的终结电阻，它的功能是让一些信号在终结电阻处消耗完，防止这些信号在电路上形成反射。换句话说就是在片内设置合适的上下拉电阻，以获得更好的信号完整性。被ODT校准的信号包括：

  

DQ, DQS, DQS# and DM for x4 configuration

DQ, DQS, DQS#, DM, TDQS and TDQS# for X8 configuration

DQU, DQL, DQSU, DQSU#, DQSL, DQSL#, DMU and DML for X16 configuration

  

当一个CPU挂了很多个DDR芯片的时候，他们是共用控制线，地址线的，走线肯定要分叉，如果没有中端匹配电阻，肯定会产生信号完整性问题。那么如果只有一个DDR芯片的时候，需不需要呢？正常情况下，走线很短，有符合规则，是不需要的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_011_c09f5b56c3e5.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_012_bd14fbb35fd5.png)

  

下图是DDR中的IO上下拉电阻，RON是DDR的输出结构的上下拉电阻，RTT是DDR输入结构的上下拉电阻。这两个电阻的阻值都是可调的。

  

下图是RON的调节，注意这不是ODT的任务，调节是通过寄存器实现。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_013_6e45de25139d.png)

  

下图是RTT的调节，是ODT要做的事情，而且RTT的档位要多，也是通过寄存器调节的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_014_6b52dd9a65c1.png)

  

注意，DDR3的PIN定义上有一个引脚是ODT，如果ODT=0，DRAM Termination State功能关闭；ODT=1，DRAM Termination State的功能参考寄存器设置。如下是一个真值表。因为DRAM Termination State非常耗电，所以不用的时候最好不要打开。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_015_8e11ae6ec4d5.png)

  

**9、DDR3的ZQ**

  

ZQ信号在DDR3时代开始引入，要求在ZQ引脚放置一个240Ω±1%的高精度电阻到地，注意必须是高精度。而且这个电阻是必须的，不能省略的。进行ODT时，是以这个引脚上的阻值为参考来进行校准的。

  

校准需要调整内部电阻，以获得更好的信号完整性，但是内部电阻随着温度会有些细微的变化，为了将这个变化纠正回来，就需要一个外部的精确电阻作为参考。详细来讲，就是为RTT和RON提供参考电阻。

  

  

**10、OCD**

  

OCD 是在 DDR-II 开始加入的新功能，而且这个功能是可选的，有的资料上面又叫离线驱动调整。OCD的主要作用在于调整 I/O 接口端的电压，来补偿上拉与下拉电阻值， 从而调整DQS 与 DQ 之间的同步确保信号的完整与可靠性。调校期间，分别测试 DQS 高电平和 DQ高电平，以及 DQS 低电平和 DQ 高电平的同步情况。

  

如果不满足要求，则通过设定突发长度的地址线来传送上拉 / 下拉电阻等级（加一档或减一档），直到测试合格才退出OCD操作，通过OCD操作来减少 DQ 、 DQS的倾斜从而提高信号的完整性及控制电压来提高信号品质。由于在一般情况下对应用环境稳定程度要求并不太高，只要存在差分DQS时就基本可以保证同步的准确性， 而且OCD的调整对其他操作也有一定影响， 因此OCD功能在普通台式机上并没有什么作用，其优点主要体现在对数据完整性非常敏感的服务器等高端产品领域。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_016_ece92ee8c023.png)

**DDR3的PIN定义**

下面是三星K4B4G0446Q/K4B4G0846Q的PIN定义，每一个都有很详细的解释。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_017_37cc11eaae07.png)

  

以x8的配置为例，如下是其Ball Map。

![](D:\电脑文件\公众号知识库\电工_教育_学习\DDR_DDR2_DDR3_DDR4_LPDDR的区别_images\img_018_f71cd32caeda.png)

-   一对时钟线CK和CKn
    
-   数据线DQ0~DQ7共8位
    
-   一对差分对DQS和DQSn
    
-   地址线A0~A15，其中，A10和A12有特殊用途
    
-   行选中信号RASn
    
-   列选中信号CASn
    
-   写使能Wen
    
-   片选CSn
    
-   Bank选择BA0~2
    
-   一个Reset信号，是DDR3新增的一项重要功能，并为此专门准备了一个引脚。这一引脚将使DDR3的初始化处理变得简单。当Reset命令有效时，DDR3 内存将停止所有的操作，并切换至最少量活动的状态，以节约电力。在Reset期间，DDR3内存将关闭内在的大部分功能，所有数据接收与发送器都将关闭，且所有内部的程序装置将复位，DLL（延迟锁相环路）与时钟电路将停止工作，甚至不理睬数据总线上的任何动静。这样一来，该功能将使DDR3达到最节省电力的目的。
    

  

ZQ和ODT PIN上文已经说明。

  

**DDR的走线规则**

DDR的信号线需要分组：

  

-   数据线一组（DQ,DQS,DQM），误差控制在20mil以内；
    
-   控制线一组（Address，控制线，时钟），以时钟为中心，误差控制在100mil以内。
    

转载来源：https://mp.weixin.qq.com/s/oAlI6yOYmgaovi1DgVo6cw

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群