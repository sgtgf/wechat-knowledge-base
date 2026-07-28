# CPU、MPU、MCU和SOC还傻傻分不清楚 看这篇文章就够了

原创 硬件笔记本 2022-07-05 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/qsQmcXnAKrAkDy56IixkrQ](https://mp.weixin.qq.com/s/qsQmcXnAKrAkDy56IixkrQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

在嵌入式开发中，我们会经常看到或接触一些专业术语，例如CPU、MPU、MCU和SOC等，并且这些专业术语出现的频率也是非常之高，在面试中也常常会作为提问的知识点，下面我们就来看一下他们之间的特点和区别。

### CPU

CPU是Central Processing Unit的缩写，计算机的运算控制核心就是CPU。CPU是由运算器、控制器和寄存器及相应的总线构成。众所周知的三级流水线：取址、译码、执行的对象就是CPU，CPU从存储器或高速缓冲存储器中取出指令，放入指令寄存器，并对指令译码，然后执行指令。而计算机的可编程性其实就是指对CPU的编程。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSd4Dx2PbaiccqOF15XR5W0HL5Mvok4LuXjBwH9dQEDBb6w4NWicnURDzQ/640?wx_fmt=png)

### MPU

MPU是Micro Processor Unit的缩写，指微处理器（这里要注意不是微控制器，很多人会把微处理器和微控制器混淆），微处理器通常代表功能强大的CPU（可理解为增强型的CPU），这种芯片往往是计算机和高端系统的核心CPU。例如嵌入式开发者最熟悉的ARM的Cortex-A芯片，他们都属于MPU。

  

### MCU

MCU是Micro Control Unit的缩写，指微控制器。随着大规模集成电路的出现及发展，把计算机的CPU、RAM、ROM、定时器和输入输出I/O引脚集成在一个芯片上，比如51，STC、Cortex-M这些芯片，它们的内部除了CPU外还包含了RAM和ROM，可直接添加简单的器件（电阻，电容）等构成最小系统就可以运行代码了。而像ARM（Cortex-A系列）直接放代码是运行不了的，因为它本质上只是增强版的CPU，必须添加相应的RAM和ROM。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSajj006DTookJ4vmKVVEfHJcZPHCT3KaaXHKS1aianuRL2TpOANcr6CA/640?wx_fmt=png)

  

### SOC

SOC是System on Chip的缩写，指的是片上系统。可以这样对比来看：MCU只是芯片级的芯片，而SOC是系统级的芯片，它集成了MCU和MPU的优点，即拥有内置RAM和ROM的同时又像MPU那样强大，它可以存放并运行系统级别的代码，也就是说可以运行操作系统（以Linux OS为主）

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSicOwmUtXzjOmf4iarcfmHJrlicxlpEH52k4zALS6JTC9shuAviaoykFMfQ/640?wx_fmt=jpeg)

另外，SOPC也是一个值得了解的概念，与上述几项概念相比，SOPC的出现频率并不是那么高，但这并不影响它的重要性。SOPC是System On a Programmable Chip的缩写，即 可编程片上系统，SOPC与MCU、MPU、SOC最明显的区别在于：可更改硬件配置，也就是说自己构造芯片。

举个例子说明便于理解，单片机的硬件配置是固化好了的， 我们能够编程修改的就是软件配置，本来是串口通信功能，通过修改代码变成AD采样功能，也就是说硬件配置是固定了的，我们只能通过修改软件来选择其中的一项或多项功能；而SOPC可以修改硬件配置信息使其成为相应的芯片，可以是MCU，也可以是SOC。

  

### 结语

在嵌入式开发中，接触频率较多的一般是MCU和SOC，而现在STM32也几乎成为了MCU的代名词，SOC目前则以Cortex-A系列为主，开发难度也有所差异，对于嵌入式从业者来说，弄清楚这些专业概念是必备的。

  

  

来源：头条号-嵌入式在左C语言在右

链接：https://www.toutiao.com/i6841833288915485192/

  

后台回复“**加群**”，管理员拉你入技术交流群。