# Digital series-Storage-8：eMMC时序和电参数


> 原文地址: [https://mp.weixin.qq.com/s/rB7yvy-CzO\_hijgS\_7O-nw](https://mp.weixin.qq.com/s/rB7yvy-CzO_hijgS_7O-nw)

____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjMVJ7D6xcBbRDKFSDo7mJ9kgTr9F8ZJou3f7cVYcHtibCiaocb9EcXygZA/640?wx_fmt=png)**____

____**★★★**______Storage-8---eMMC时序和参数______**★★★**____

引言：因为MMC接口允许轻松地与任何微处理器与MMC主机集成，并且嵌入式MMC控制器将Nand技术与主机隔离，所以对Nand的任何修订或修改对主机来说都是不可见的，也不需要关注，所有这些都实现了更快的产品开发和更快的上市时间。但要想实现eMMC的高可靠性，需要严格测试eMMC的信号质量，并满足JEDEC发布的标准。

## ____€1.引脚____

数据总线宽度：1位（默认）、4位和8位

MMC I/F 时钟频率：0 ~ 200MHz

MMC I/F 启动频率：0 ~ 52MHz

CLK：时钟输入

Data Strobe：HS400模式的新配值引脚，数据选通从eMMC生成到主机。在HS400模式下，读取数据和CRC响应与数据选通同步

CMD：用于设备初始化和命令传输的双向信号，命令操作有两种模式，开漏进行初始化和推拉快速传输命令

DAT0-7：双向数据通道，它以推拉模式运行  

RST\_N：H/W复位信号引脚

VDDF(VCC)：提供闪存存储器的电源电压

VDD(VCCQ)：存储器控制器的电源电压

VDDI：内部功率节点，以稳定调节器输出到控制器的核心逻辑

VSS：接地连接

RFU：保留供将来使用，不要用作任何用途  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHictkMOymgDvOAtXic8vyXm9CClQlJtzBuFAmW7icF45Wft7YtmEJbkvGYw/640?wx_fmt=png)

**_图8-1：eMMC结构_**  

## ____€2.传输模式和HS400 MODE____

在时钟的每个周期都会指示传输：在命令线上每个时钟周期进行1位传输；在数据线上，SDR模式下所有数据线传输1位，DDR模式下所有数据线传输2位（分别在上升沿和下降沿），时钟频率可在最小和最大时钟频率之间变化（0-200MHZ）。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TT0QvaOL637iarZsZXXc5snNpXW1OeicET7FzHHfGdUcTjOqomewTmAASPVe7BjJwRjP9QyDueAXeQQ/640?wx_fmt=png)

**_图8-2：DDR状态下的4-data-wire模式_**

HS400模式提高顺序带宽，特别是顺序读取性能，支持DDR数据采样方法，CLK频率最高可达200MHz，但只有8位的总线宽度可用，信号电平1.8V，理论上，读取高达400MB/s，写入200MB/s。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQV7YAMGTSWSpf6kaguvfDeyFsicmq02Nrsn55uFLUL6zl8hEsEWTEsFicQoYT3leobbeZ1alia6aCicg/640?wx_fmt=png)

**_图8-3：eMMC的总线速度模式_**

**_图8-4_**表示I/O驱动程序强度类型（EXT\_CSD寄存器：DRIVER\_STRENGTH \[197\]）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHic9Ff8uLLEY0XrqDjltgqX2UDIKYicBAFXibricsPddtib6I3CFh7JIaH9vA/640?wx_fmt=png)

**_图8-4：eMMC的HS400模式五种驱动强度_**

1#：HS200和HS400设备必须支持0型驱动程序。

2#：当VCCQ=1.8 V时，标称阻抗由输出驱动器在0.9 V时的I-V特性定义。

3#：当VCCQ=1.2 V时，标称阻抗由0.6 V时输出驱动器的I-V特性定义。

0型驱动程序被定义为eMMC HS200和HS400设备的强制性驱动程序，另有四个驱动程序类型（1、2、3和4）被定义为可选，以允许支持更广泛的主机负载。主机可以选择设备的最合适的驱动器类型（如果支持）以实现最佳信号完整性性能。

注：1.8V信号电平和1.2V信号电平的驱动强度定义相同。

0型驱动器适用于传输线，基于50Ω标称线路的分布式系统阻抗，因此，它被定义为50Ω标称驱动器。

对于HS200，当使用CL=15pF驱动器进行测试时，0型驱动器应满足所有交流特性

对于HS400，当使用JESD84-B51中定义的参考负载、驱动器类型0或驱动器类型1或4型驱动器应满足所有交流特性和HS400设备输出。

如果设备支持可选的驱动程序类型，主机可以使用它们来优化其系统，因此主机设计者可以使用设备驱动程序模型来模拟其特定系统。主机可以选择最佳驱动程序类型，该类型可以以所需的操作频率驱动主机系统负载产生最小的噪声，这一点在优化信号质量和EMC方面特别有效。

Driver\_STRENGTH\[197\]中指出了设备支持的驱动程序类型级别扩展CSD寄存器的字段。主机通过将（通过CMD6）写入扩展CSD寄存器的HS\_TIMING\[185\]字节中的“选定驱动器强度”字段。

**_图8-5_**列举了eMMC5.1新功能：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicWibqU8nelUWt3uADwWAbAtuBL2JMvibLfuHbicQ0eqyVO7QCibib15Ruichg/640?wx_fmt=png)

**_图8-5：eMMC5.1功能_**

## ____€3.启动时长____

eMMC不仅支持引导模式，而且还支持替代引导模式，支持高速定时和双数据速率。eMMC启动时间轴回看：[Digital series-Storage-7：eMMC基础知识-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491986&idx=1&sn=cdffdd9ade99b647e7fbd27ae8298ec8&chksm=c336ab0df441221b4697a8bee7045c0dd073b7115f92aba0c1d75ff256f9c872e0aa57070006&scene=21#wechat_redirect)。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicyiaoLzKSDW8YlSs2gRaUt7ApqMdm1FfmkIkmXjp7VLic0sT18L0OmS5A/640?wx_fmt=png)

**_图8-6：启动程序、启动数据和初始化时间_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicZRrZjVBS6rDhicwh3zJicXfQlmw9k6ZX5LdRLqWTAtRCcK52qNAv6fZw/640?wx_fmt=png)

**_图8-7：eMMC的性能指标_**

**_图8-7_**是在测试条件：总线宽度x8，HS400，512KB数据包传输下实测的eMMC顺序读取和顺序写入的速度。

## ____€4.时序____

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQV7YAMGTSWSpf6kaguvfDeAfVd5Uiab7MnOekemapnzXMBDbrjFRqzPYib8oruGiatj7ia4CgwM4ZcNg/640?wx_fmt=png)

**_图8-8：总线SDR时序---数据必须始终在时钟的上升边缘进行采样_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQV7YAMGTSWSpf6kaguvfDeR0Ug2BkdZLo6licYGC00JHVO6Tkx3HwuRzqkSfb27a11q3srIVxKE7w/640?wx_fmt=png)

**_图8-9：总线SDR时序参数要求_**

在配置为双数据模式操作时的DAT\[7：0\]信号，DAT信号与CLK的上升边缘和下降边缘同步运行。CMD信号仍然与CLK的上升边缘同步运行，因此CMD信号没有定时变化。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQV7YAMGTSWSpf6kaguvfDezkn2H5X8jsIvbcARxkXSjdu6udTia9LT1d1vFMG0GmQmiaoq8xicNZ1vg/640?wx_fmt=png)

**_图8-10：总线DDR时序---DAT\[7：0\]行上的数据在时钟的两边进行采样_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQV7YAMGTSWSpf6kaguvfDeibLHJ5pE4oRDicXYssEAQIUNDRc9xMP0QONov1xO2ice13rf49XeX1Z0Q/640?wx_fmt=png)

**_图8-11：总线DDR时序参数要求_**

如上只是SDR/DDR时序，关于HS400等等模式下的总线定时规范，可以参阅eMMC v5.1的JEDEC官方权威文档JESD84-B51。

## ____€5.总线电平____

总线信号电平，部分器件总线供电支持3.3V或者1.8V，因此所有的信号电平都与电源电压有关。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicDAABCiaxEgCMPk0XQTBqwhnygRGflRgbFjjG8EPoib2tyAysSBJ7W8Wg/640?wx_fmt=png)

**_图8-12：总线信号电平上下阈值_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHic4apKEphI1oFnPrCfuUaSZ0yxxibnK9ZTkqcuCA6MOZ3MXejkbd2V8pA/640?wx_fmt=png)

**_图8-13：开漏模式总线信号电平_**

由于Voh取决于外部电阻值（包括软件包外部），因此此值不适用于设备规范。主机负责选择外部上拉和开漏电阻值，以满足Voh最小值。

eMMC输入和输出电压的允许电压范围应在以下规定范围内：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicefVX7yn1W4IPndIhllfsiaIQzEH2trp6tVEWm20s2ajkTUApJR0OyDw/640?wx_fmt=png)

**_图8-14：推拉信号电平-3.3V eMMC_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHiccxGOBouDP1MZJG5MrUpPW9ynPP0w0tolwkuibMAoUHHibT0bWLGTyRFA/640?wx_fmt=png)

**_图8-15：推拉信号电平-1.70-1.95 VCCQ电压范围_**

其中0.7×VCCQ，适用于MMC4.3及更旧版本，0.3×适用于MMC4.3及更旧版本的0.3×VCCQ。

## ____€6.功耗____

在配置系统电源树时，eMMC的功耗是一个需要考虑的点，在功率测量条件：总线配置=x8@200MHz DDR最大RMS电流的测量为100ms周期内的平均RMS电流消耗下，eMMC各种状态下的功耗如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicvQriabnCXMXBSD4O97bibVSlicNR3YHG0qJxACiaKr7UtAibNQfx4osCzDA/640?wx_fmt=png)

**_图8-16：不同容量eMMC运行期间的典型功耗_**

从**_图8-16_**可知，eMMC容量越大，运行功耗越高，一个32GB的eMMC，考虑3.3V供电，则功耗P=3.3×0.38=1.254W，那么就需要选择满足可以持续输出400mA的电源IC。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicicDAnR4K0T6sJicepY7w3ZTTUvdib43EbA45zKewr2tBWmS6yuSvlN6uQ/640?wx_fmt=png)

**_图8-17：不同容量eMMC待机状态下的典型功耗（巡检读取激活）_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicJxVgw9iakQIxH0aHUgiaoxHRbic47zLpicaq4mKGA91prU12BmcZtpMwMw/640?wx_fmt=png)

**_图8-18：不同容量eMMC待机状态下的典型功耗（巡检读取失能）_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicczvucXI2AjblHc5lEDHs234TC2Fs6ib1YpicHCFfdvrO4mRXRibEicKMLg/640?wx_fmt=png)

**_图8-19：不同容量eMMC睡眠状态下的睡眠功耗_**  

注意在睡眠模式下，Nand电源可以关闭，如果Nand电源被激活，则Nand电源与待机状态相同。

## ____€7.总线信号线负载____

eMMC总线的每条线路的总电容CL为总线主电容CHOST、总线电容CBUS本身和与该线路连接的eMMC的电容器件之和：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQJ9EVQHzic4NCiat52kOoyT7amII8vBgdU6RDnL4UXbIQPhAYaWfTIyJrX9B12H1Wcz7FCnOC6HStA/640?wx_fmt=png)

主机和总线电容之和应在20pF以下，这几个参数对eMMC的Layout有比较严格的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicby6I1urZkxksuFv9a8iaUVJgaLib0JtDLa6yw6cXR7ntkzmjJbWVngtQ/640?wx_fmt=png)

**_图8-20：eMMC关键R/C参数_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSuYpbwodqIKX5n6lTIxKHicPLL56ibTpxg7I7eGS3icdFWdU8a58tqqLxZYIvDnqmamhvwYmMOjl1Gg/640?wx_fmt=png)

**_图8-21：HS400模式下的电容和电阻  
_**

## ____€8._____如何在系统板上连接eMMC_

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQV7YAMGTSWSpf6kaguvfDenlcWgRmQgyHamvsibfYwOr1CvxGPHZYzwXjSFm85dDBfXVWJiazsOHZw/640?wx_fmt=png)

**_图8-22：eMMC互连示例_**

1#：利用去耦电容滤除VCC/VCCQ电源噪声  

2#：CMD和DATA\[7:0\]始终通过系统板上的电阻进行上拉，以防止总线浮动  

3#：如果总线使用H/W复位，RSTN也上拉  

4#：SR\_DS和SR\_CLK采用串联电阻稳定信号

（私信获取eMMC V5.1最新官方规范文档：JESD84-B51）