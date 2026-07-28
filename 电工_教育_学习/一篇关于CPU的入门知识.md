# 一篇关于CPU的入门知识

原创 硬件笔记本 2024-06-09 11:18 四川

> 原文地址: [https://mp.weixin.qq.com/s/PVmqVqV-HqgKbHQDD5REow](https://mp.weixin.qq.com/s/PVmqVqV-HqgKbHQDD5REow)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

不管你玩硬件还是做软件，你的世界都少不了计算机最核心的 —— CPU。

01

CPU是什么？

CPU与计算机的关系就相当于大脑和人的关系，它是一种小型的计算机芯片，通常嵌入在电脑的主板上。

CPU的构建是通过在单个计算机芯片上放置数十亿个微型晶体管来实现。

这些晶体管使它能够执行运行存储在系统内存中的程序所需的计算，所以，也可以说CPU决定了你电脑的计算能力。

02

CPU实际做什么？

CPU的工作核心是从程序或应用程序中获取指令并且执行计算。

这个过程一共有三个关键阶段：提取，解码和执行。

CPU先从系统的RAM中提取指令，随后解码该指令的实际内容，最后再由CPU的相关部分执行该指令。

03

CPU的内部结构

刚才提到了很多CPU的重要性，那么CPU的内部结构是什么呢？又是由什么组成的呢？

下图展示了一般程序的运行流程（以C语言为例），一般来说，了解程序的运行流程是掌握程序运行机制的基础和前提。

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh6qI2qzmjymNib2obIy4PGtFY7UQZ9icoTLAGLRP6LyRF9N7DeLoiacm6Xg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

在这个流程中，CPU负责解释和运行最终转换成机器语言的内容，CPU主要由两部分构成：控制单元和算数逻辑单元（ALU）。

-   控制单元：从内存中提取指令并解码执行；
    
-   算数逻辑单元（ALU）：处理算数和逻辑运算。
    

CPU和内存都是由许多晶体管组成的电子部件，可以把它比作计算机的心脏和大脑。

它能够接收数据输入、执行指令并且处理相关信息，它与输入/输出（I/O）设备进行通信，这些设备向 CPU 发送数据和从 CPU 接收数据。

从功能上来看，CPU的内容是由寄存器、控制器、运算器和时钟四部分组成的，各个部分之间通电信号来连通。

接下来简单介绍一下内存，为什么说到CPU需要讲一下内存呢？

因为内存是与CPU进行沟通的桥梁，计算机中所有程序的运行都在内存中得到运行的。

内存一般又被称为主存，它的作用是存放CPU中的运算数据，以及与硬盘等外部存储设备交换的数据。

CPU会在计算机运转时，把需要运算的数据调到主存中进行运算。

在运算完成之后，CPU将结果传送出来，主存的运行也决定了计算机的稳定运行。

主存一般通过控制芯片与CPU相连，由可读写的元素构成，每个字节都有一个地址编号。

CPU通过地址从主存中读取数据和指令，也可以根据地址写入数据，注意一点：当计算机关机时，内存中的指令和数据也会被清除。

04

CPU是寄存器的集合体

在CPU的四个结构中，寄存器的重要性远远高于其余三个，为什么这么说？因为程序通常是把寄存器作为对象来进行描述的。

而说到寄存器，就不得不说到汇编语言，说到汇编语言，就不得不说到高级语言，说起高级语言也就不得不提及语言的概念。

05

计算机语言

人和人之间最古老和直接的沟通媒介是语言，但是和计算机沟通，就必须按照计算机指令来交换，其中就涉及到语言的问题。

最早，为了解决计算机和人类的交流的问题，出现了汇编语言。

但是汇编语言晦涩难懂，所以又出现了像是C、C++、Java的这种高级语言，因此计算机语言一般分为低级语言和高级语言。

使用高级语言编写的程序，经过编译转换成机器语言后才能运行，而汇编语言经过汇编器才能转换为机器语言。

06

汇编语言

我们先来看一段采用汇编语言表示的代码清单：

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh69BiaJOqGTOMsboVib26nHbOnFgEg7cib6mo4hsWJPCicQ9FINjzMoArcvA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

这是采用汇编语言编写程序的一部分，汇编语言采用助记符来编写程序，每个原本是电信号的机器语言指令会有一个与其对应的助记符。

比如，mov,add分别是数据的存储（move）和相加（addition）的简写。

汇编语言和机器语言一一对应，这点和高级语言不同，我们通常把汇编语言编写的程序转换为机器语言的这个过程，称之为汇编。

与之相反，将机器语言转化为汇编语言的过程称之为反汇编。

汇编语言可以帮助你理解计算机做了什么工作，机器语言级别的程序通过寄存器来处理，上面代码中的eax,ebp都是表示的寄存器，它们是CPU内部寄存器的名称。

因此，可以说 CPU 是一系列寄存器的集合体。

一般，在内存中的存储通过地址编号来表示，寄存器的种类是通过名字来区分。

那些不同类型的CPU，其内部寄存器的种类、数量以及寄存器存储的数值范围也都是不同的。

不过，根据功能的不同，我们可以将寄存器划分为下面几类：

![](https://mmbiz.qpic.cn/mmbiz_png/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh62ZibGrNtDBpwKdfzFvoLDLrWVicErIia6kicVao90CPcs0CfSEKh3HFSwg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

其中，程序计数器、标志寄存器、累加寄存器、指令寄存器和栈寄存器只有一个，其他寄存器一般有好几个。

07

程序计数器

程序计数器是用来存储下一条指令所在单元的地址。

程序在执行时，PC的初值作为程序第一条指令的地址，在顺序执行程序时，控制器先按照程序计数器所指出的指令地址，从内存中取出一条指令，随后分析和执行该指令，并同时将PC的值加1指向下一条要执行的指令。  

我们可以通过一个事例来仔细看一下程序计数器的执行过程：

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh6Bm81iaL4JH1584aIcYCmZvZrszR3382QyeXMoBWSiaicfvrNOtFEL3P2A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

这是一段进行相加的操作，程序启动，在经过编译解析后，会经由操作系统把硬盘中的程序复制到内存中。

以上示例程序，就是将123和456执行相加的操作，随后将结果输出到显示器上，因为使用机器语言很难描述，所以这些都是经过翻译后的结果。

事实上，每个指令和数据都有可能分布在不同的地址上，但是为了更好的说明，就把组成一条指令的内存和数据放在了一个内存地址上。

地址0100是程序运行的起始位置，Windows等操作系统把程序从硬盘复制到内存以后，就会将程序计数器作为设定为起始位置0100，然后再执行程序，每次执行一条指令后，程序计数器的数值就会增加1，或者是直接指向下一条指令的地址。

随后，CPU会根据程序计数器的数值，从内存中读取命令并且执行，换言之，程序计数器控制着程序的流程。

08

条件分支和循环机制

小伙伴们都学过高级语言，高级语言汇总的条件控制流程主要分为顺序执行、条件分支、循环判断三种。

-   顺序执行是按照地址的内容顺序的执行命令。
    
-   条件分支是根据条件执行任意地址的指令。
    
-   循环是重复执行同一地址的指令。
    

一般情况下，顺序执行的情况较简单，每次执行一条指令程序计数器的值就是+1。

条件和循环分支会使得程序计数器的值指向任意的地址，这样一来，程序就可以返回到上一个地址来重复执行同一个指令，或者跳转到其它任意指令。  

下面，我们就以条件分支举例来说明程序的执行过程：

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh6ictlaN9zmEXykwlVVuOykjGFkU5ibwJKjfoAwu9p6tsicY7AyoKGdcJ1A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

程序的开始过程和顺序流程是一样的，程序的顺序流程和开始过程相同。

CPU从0100处就开始执行命令，在0100和0101中都是顺序执行，PC的值顺序+1，执行到0102地址的指令时，判断0106寄存器的数值大于0，跳转到0104地址的指令，再将数值输到显示器中，随后结束程序，0103的指令就被跳过了。

这和我们程序中的if（）判断相同，在不满足条件的情况下，指令一般会直接跳过。

因此，PC的执行过程没有直接+1，而是下一条指令的地址。

09

标志寄存器

条件和循环分支会使用到 jump（跳转指令），会根据当前的指令来判断是否跳转，上面我们提到了标志寄存器，无论当前累加寄存器的运算结果是正数、负数还是零，标志寄存器都会将其保存。

CPU在进行运算时，标志寄存器的数值会根据当前运算的结果自动设定，运算结果的正、负和零三种状态由标志寄存器的三个位表示。

标志寄存器的第一个字节位、第二个字节位、第三个字节位各自的结果都为1时，分别代表着正数、零和负数。

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh6WomcAsfdiafXbWPxjfFsVX4LpsAhlFZ06AtaZEyPBa096N8libASfxlw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

CPU的执行机制比较有意思，假设累加寄存器中存储的XXX和通用寄存器中存储的YYY做比较，执行比较的背后，CPU的运算机制就会做减法运算。

而无论减法运算的结果是正数、零还是负数，都会保存到标志寄存器中。

结果为正表示 XXX 比 YYY 大，结果为零表示 XXX 和 YYY 相等，结果为负表示 XXX 比 YYY 小，程序比较的指令，实际上是在 CPU 内部做减法运算。

10

函数调用机制

函数的调用和条件分支，循环机制有所不同，单纯的跳转指令无法实现函数的调用。

函数的调用需要在函数内部处理后，处理流程在返回到函数调用点（函数调用指令的下一个地址）。

函数的调用处理是通过把程序计数器的值设定成函数的存储地址来实现的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh6t4Cb2VFrlYZ4sCic8FYiab4ow3uYiaibzXzDCnWAZVHyDhHn0NEL5M8zbA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh6InpOkpNsiafzv0drTCUq01pwqbrpkupe4XkXAs7XLTGffO4mj9g3tvg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

11

通过地址和索引实现数组

接下来是基址寄存器和变址寄存器，通过这两个寄存器，可以对主存上的特定区域进行划分，以此实现类似数组的操作。

首先，可以用十六进制数将计算机内存上的 00000000 - FFFFFFFF 的地址划分出来。

这样，凡是该范围的内存地址，只要有一个 32 位的寄存器，就可以查看全部地址。

但是，要是想像数组那样，分割特定的内存区域以达到连续查看的目的的话，使用两个寄存器会更方便一些，比如，我们用两个寄存器来表示内存的值。

![](https://mmbiz.qpic.cn/mmbiz_jpg/fUtBqibJmk4R2nqe4YttHlYtayBaK1nh685aQ24Nnmby1n6WFvqgJrZvIr65kh5o6XoVdaOZwpficGvQ6P29nFPA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

这种表示方式很像数组的构造，数组是指同样长度的数据，在内存中进行连续排列的数据构造。

用数组名表示数组全部的值，通过索引来区分数组的各个数据元素，例如: a\[0\] - a\[4\]，\[\]内的 0 - 4 就是数组的下标。  

12

CPU指令执行过程

那说了这么多，CPU到底是怎么一条条的执行指令的呢？几乎全部的冯·诺伊曼型计算机的CPU，工作都可以分为5个阶段：取指令、指令译码、执行指令、访存取数、结果写回。

取指令阶段就是将内存中的指令读取到CPU中寄存器的过程，程序寄存器用于存储下一条指令所在的地址；

-   在取指令完成后，立马进入指令译码阶段，在指令译码阶段，指令编码器按照预先的指令格式，对取回的指令进行拆分和解释，识别区分出不同的指令类别和各种获取操作数的方法；
    
-   执行指令阶段的任务是完成指令所规定的各种操作，具体实现指令的功能；
    
-   访问取数阶段的任务是：根据指令地址码，得到操作数在主存中的地址，并从主存中读取该操作数用于运算；
    
-   结果写回阶段作为最后一个阶段，把执行指令阶段的运行结果数据“写回”到某种存储形式：结果数据经常被写到CPU的内部寄存器中，以便被后续的指令快速地存取。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。