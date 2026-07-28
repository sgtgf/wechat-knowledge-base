# 嵌入式基础之u-boot和bootloader

原创 硬件笔记本 2022-07-02 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/rStTmFTqzGRSdqYdOcz0bw](https://mp.weixin.qq.com/s/rStTmFTqzGRSdqYdOcz0bw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

嵌入式软件工程师听说过 u-boot 和 bootloader，但很多工程师依然不知道他们到底是啥。  

  

今天就来简单讲讲 u-boot 和 bootloader 的内容以及区别。

  

**Bootloader**

比Bootloader从字面上来看就是启动加载的意思。用过电脑的都知道，windows开机时会首先加载bios，然后是系统内核，最后启动完毕。那么bootloader就相当于手机的bios，它在手机启动的时候根据基带初始化硬件，然后引导系统内核，直到系统启动。

  

**Bootloader是嵌入式系统在加电后执行的第一段代码，通过这段小程序**，进行硬件初始化，获取内存大小信息等，调整手机到适配状态。在它完成CPU和相关硬件的初始化之后，再将操作系统映像或固化的嵌入式应用程序装在到内存中然后跳转到操作系统所在的空间，启动操作系统运行 。

  

**对于嵌入式系统，Bootloader是基于特定硬件平台来实现的**。因此，几乎不可能为所有的嵌入式系统建立一个通用的Bootloader，不同的处理器架构都有不同的Bootloader。Bootloader不但依赖于CPU的体系结构，而且依赖于嵌入式系统板级设备的配置。对于2块不同的嵌入式板而言，即使它们使用同一种处理器，要想让运行在一块板子上的Bootloader程序也能运行在另一块板子上，一般也都需要修改Bootloader的源程序 。

  

反过来，大部分Bootloader仍然具有很多共性，某些Bootloader也能够支持多种体系结构的嵌入式系统。例如，U-Boot就同时支持PowerPC、ARM、MIPS和X86等体系结构，支持的板子有上百种。通常，它们都能够自动从存储介质上启动，都能够引导操作系统启动，并且大部分都可以支持串口和以太网接口。

  

**uboot**

**1.硬件管理**

uboot要能够进行Soc级（Soc内部外设）和板级（Soc外部外设）硬件管理。

  

uboot中实现了一部分硬件的控制能力（uboot中初始化了一部分硬件），因为uboot为了完成一些任务必须让这些硬件工作。譬如uboot要实现刷机必须能驱动iNand，譬如uboot要在刷机时LCD上显示进度条就必须能驱动LCD，譬如uboot能够通过串口提供操作界面就必须驱动串口。譬如uboot要实现网络功能就必须驱动网卡芯片。

  

**2.能够完成镜像烧录（刷机）**

uboot要能够被借助完成刷机操作。参考下SD卡刷机的步骤：

  

**a.烧录uboot到SD卡中。**

有2种烧写方法：一种是在windows中用刷卡工具去制作启动SD卡；另一种是在linux中用dd命令。制作完SD后将SD卡插入开发板，然后开机就可以进入uboot界面。

  

**b.使用uboot的fastboot命令**，并借助PC中的fastboot软件完成包括uboot、kernel、rootfs等的镜像的烧录。

从上面就可以看出，刷机依靠的是uboot的fastboot命令，将镜像写到相应的FLASH中。

  

**3.uboot的“生命周期”**

uboot的入口就是开机自动启动，uboot的唯一出口就是启动内核。uboot还可以执行很多别的任务（譬如烧录系统），但是其他任务执行完后都可以回到uboot的命令行继续执行uboot命令，而启动内核命令一旦执行就回不来了。

  

**4.uboot要提供命令式shell界面**

shell是用户操作接口的意思。shell有命令行的shell，如windows下的cmd，如linux下的终端；也有GUI式的shell，比如常用的windows下的各种界面。shell是一种封装后留出来的接口，uboot也要有这样的一个接口。

  

shell的原理是：由消息接收、解析、执行构成的一个死循环。我之前用过3D打印机的固件（firmware）也是这样的模式。

  

uboot的shell使用的也是行缓冲的模式。也就是以回车键（换行键）作为一个命令输入的结束。对应的其他缓冲模式还有无缓冲和全缓冲：无缓冲就是输入一个字符就当做一个命令处理；全缓冲就是无论输入什么都缓冲起来知道缓冲区满了才做一次处理。

  

**bootloader 与 uboot的区别**

**BootLoader是嵌入式设备中用来启动操作系统内核的一段程序。**

  

uboot（universal bootloader）是一种可以用于多种嵌入式CPU的BootLoader程序，换言之，uboot是bootloader的一个子集。

  

**uboot的核心作用就是启动操作系统内核，uboot的本质就是一段裸机程序。**

  

文章转自网络，侵删！

  

后台回复“**加群**”，管理员拉你入技术交流群。