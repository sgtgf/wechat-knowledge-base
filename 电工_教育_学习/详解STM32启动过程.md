# 详解STM32启动过程

原创 硬件笔记本 2023-03-23 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/-YeXyo33EEYA-RC49u0C-A](https://mp.weixin.qq.com/s/-YeXyo33EEYA-RC49u0C-A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

本章教程主要跟大家讲STM32H7的启动过程，这里的启动过程是指从CPU上电复位执行第1条指令开始（汇编文件）到进入C程序main()函数入口之间的部分。  

启动过程相对来说还是比较重要的，理解了这个过程，对于以后分析程序还是有些帮助的，要不每次看到这个启动过程都会跳过，直接去看主程序了。

还有就是以后打算学习RTOS的话，对于这个过程必须有个了解，因为移植的时候涉及到中断向量表。

对初学者来说，看这个可能有些吃力，不过不要紧，随着自己做过一些简单的应用之后再来看这章，应该会有很多的帮助，由于我们的V7板子是基于STM32H7XXX，所以我们这里主要针对H7系列的启动过程做一下分析，对于F1，F4系列也是大致相同的。

1 初学者重要提示  

相比F1，F4的启动方式，H7的启动方式更灵活些，只需一个boot引脚即可。但是一个引脚只能区分出两个状态，为了解决这个问题，H7专门配套了两个option bytes选项字节来解决此问题。  

## 2 各个版本的启动文件介绍

这里各个版本的意思是指不同的编译器、不同的H7系列对应的启动文件。

### 2.1 不同编译器对应的启动文件

打开我们为本教程提供的工程文件，路径如下：

\\Libraries\\CMSIS\\Device\\ST\\STM32H7xx\\Source\\Templates 在这个文件里面有ST官方为各个编译器提供的启动文件。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_002_bd12e0ded20c.png) 

看了上面的截图，大家会问怎么没有KEIL MDK呢？其实已经被放在了文件夹arm里面，KEIL公司已经在2005年被ARM公司收购了。开发板大部分例程都是配套了MDK和IAR两个版本，这里重点给大家分析一下MDK的启动文件分析，IAR和MDK的大同小异。

### 2.2 不同H7系列对应的启动文件

先来看一下ARM文件夹里面的文件（2018-07-03，当前只有如下两个系列，后期ST会增加新的型号，相应的启动文件也会添加进来）：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_003_ebc8060b0fd3.png) 

如果是H743系列，就使用startup\_stm32h743xx.s文件，如果是H753系列，就使用startup\_stm32h753xx文件。当前H743和753系列对应的型号如下：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_004_31c8398ba860.png)

我们再来打开IAR文件夹里面的文件：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_005_6eeb8f6dba81.png) 

多了一个linker文件夹，用于IAR配置的ICF文件：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_006_58832e577da6.png) 

而启动文件跟MDK里面的一样，一个是用H743系列，另一个是用于H753系列。

## 3 启动文件分析

鉴于V7开发板使用的是STM32H743XI，下面我们详细的分析一下启动文件startup\_stm32h743xx.s。分析前，先掌握一个小技能，遇到不认识的指令或者关键词可以检索。

-    启动 MDK软件，在Help菜单点击 uVision Help
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_007_a4347f3bfc6e.png) 

-     点击后弹出如下文件
    

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_008_5fe1d11436ad.png)

在搜索栏输入你需要查询的单词进行查询，然后点击“列出主题”按钮，会将相关的知识点都罗列出来。此功能非常实用，建议熟练掌握。

下面先来看启动文件前面的介绍 （固件库版本：V1.2.0）

`   ``   ``;******************** (C) COPYRIGHT 2017 STMicroelectronics ********************``;* File Name          : startup_stm32h743xx.s``;* @author  MCD Application Team``;* version            : V1.2.0``;* Date               : 29-December-2017``;* Description        : STM32H7xx devices vector table for MDK-ARM toolchain.` `;*                      This module performs:``;*                      - Set the initial SP``;*                      - Set the initial PC == Reset_Handler``;*                      - Set the vector table entries with the exceptions ISR address``;*                      - Branches to __main in the C library (which eventually``;*                        calls main()).``;*                      After Reset the Cortex-M processor is in Thread mode,``;*                      priority is Privileged, and the Stack is set to Main.``;* <<< Use Configuration Wizard in Context Menu >>>`   `;*******************************************************************************``;` `; Licensed under MCD-ST Liberty SW License Agreement V2, (the "License");``; You may not use this file except in compliance with the License.``; You may obtain a copy of the License at:``;` `;        http://www.st.com/software_license_agreement_liberty_v2``;` `; Unless required by applicable law or agreed to in writing, software` `; distributed under the License is distributed on an "AS IS" BASIS,` `; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.``; See the License for the specific language governing permissions and``; limitations under the License.``;` `;*******************************************************************************`

启动文件是后缀为.s的汇编语言文本文件，每行前面的分号表示此行是注释行。

启动文件主要完成如下工作，即程序执行过程：

\-      设置堆栈指针SP = \_\_initial\_sp。

\-      设置PC指针 = Reset\_Handler。

\-      设置中断向量表。

\-      配置系统时钟。

\-      配置外部SRAM/SDRAM用于程序变量等数据存储（这是可选的）。

\-      跳转到C库中的 \_\_main ，最终会调用用户程序的main()函数。

Cortex-M内核处理器复位后，处于线程模式，指令权限是特权级别（最高级别），堆栈设置为使用主堆栈MSP。

### 3.1 复位序列

硬件复位之后，CPU 内的时序逻辑电路首先完成如下两个工作（程序代码下载到内部flash为例，flash首地址0x0800 0000）

-     将0x08000000位置存放的堆栈栈顶地址存放到SP中(MSP)。
    
-     将0x08000004 位置存放的向量地址装入 PC 程序计数器。
    

CPU 从 PC 寄存器指向的物理地址取出第 1 条指令开始执行程序，也就是开始执行复位中断服务程序 Reset\_Handler。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_009_38541c1d53df.png)

复位中断服务程序会调用SystemInit()函数来配置系统时钟、配置FMC总线上的外部SRAM/SDRAM，然后跳转到C 库中\_\_main 函数。由C库中的\_\_main 函数完成用户程序的初始化工作（比如：变量赋初值等），最后由\_\_main 函数调用用户写的 main()函数开始执行 C 程序。

### 13.3.2 代码分析

-     **第1部分代码分析**
    

下面的代码实现开辟栈(stack)空间，用于局部变量、函数调用、函数的参数等。

`; Amount of memory (in bytes) allocated for Stack``; Tailor this value to your application needs``; <h> Stack Configuration``;   <o> Stack Size (in Bytes) <0x0-0xFFFFFFFF:8>``; </h>``   ``Stack_Size      EQU     0x00000400``   `                `AREA    STACK, NOINIT, READWRITE, ALIGN=3``Stack_Mem       SPACE   Stack_Size``__initial_sp`

第7行：EQU 是表示宏定义的伪指令，类似于 C 语言中的#define。伪指令的意思是指这个“指令”并不会生成二进制程序代码，也不会引起变量空间分配。

0x00000400 表示栈大小，注意这里是以字节为单位。

第9行：开辟一段数据空间可读可写，段名 STACK，按照 8 字节对齐。ARER 伪指令表示下面将开始定义一个代码段或者数据段。此处是定义数据段。ARER 后面的关键字表示这个段的属性。

STACK ：表示这个段的名字，可以任意命名。

NOINIT：表示此数据段不需要填入初始数据。

READWRITE：表示此段可读可写。

ALIGN=3 ：表示首地址按照 2 的 3 次方对齐，也就是按照 8 字节对齐(地址对8求余数等于0)。

第10行：SPACE 这行指令告诉汇编器给 STACK 段分配 0x00000400 字节的连续内存空间。

第11行：\_\_initial\_sp 紧接着 SPACE 语句放置，表示了栈顶地址。\_\_initial\_sp 只是一个标号，标号主要用于表示一片内存空间的某个位置，等价于 C 语言中的“地址”概念。地址仅仅表示存储空间的一个位置，从 C 语言的角度来看，变量的地址，数组的地址或是函数的入口地址在本质上并无区别。

-   **第2部分代码分析**
    

下面的代码实现开辟堆(heap)空间，主要用于动态内存分配，也就是说用 malloc，calloc, realloc等函数分配的变量空间是在堆上。

`1.    ; <h> Heap Configuration``2.    ;   <o>  Heap Size (in Bytes) <0x0-0xFFFFFFFF:8>``3.    ; </h>``4.`    `5.    Heap_Size       EQU     0x00000200``6.`    `7.                    AREA    HEAP, NOINIT, READWRITE, ALIGN=3``8.    __heap_base``9.    Heap_Mem        SPACE   Heap_Size``10.    __heap_limit`

这几行语句和上面第1部分代码类似。分配一片连续的内存空间给名字叫 HEAP 的段，也就是分配堆空间。堆的大小为 0x00000200。

\_\_heap\_base 表示堆的开始地址。

\_\_heap\_limit 表示堆的结束地址。

-     **第3部分代码分析**
    

  

`1.                    PRESERVE8``2.                    THUMB``3.`    `4.`    `5.    ; Vector Table Mapped to Address 0 at Reset``6.                    AREA    RESET, DATA, READONLY``7.                    EXPORT  __Vectors``8.                    EXPORT  __Vectors_End``9.                    EXPORT  __Vectors_Size`

第1行：PRESERVE8 指定当前文件保持堆栈八字节对齐。

第2行：THUMB表示后面的指令是THUMB指令集 ，CM7采用的是THUMB - 2指令集。

第6行：AREA定义一块代码段，只读，段名字是 RESET。READONLY 表示只读，缺省就表示代码段了。

第7-9行：3 行EXPORT语句将 3 个标号申明为可被外部引用， 主要提供给链接器用于连接库文件或其他文件。

-     **第4部分代码分析**
    

  

`1.    __Vectors       DCD     __initial_sp                      ; Top of Stack``2.                    DCD     Reset_Handler                     ; Reset Handler``3.                    DCD     NMI_Handler                       ; NMI Handler``4.                    DCD     HardFault_Handler                 ; Hard Fault Handler``5.`                    `6.                    中间部分省略未写``7.`    `8.                    DCD     0                                 ; Reserved`                                    `9.                    DCD     WAKEUP_PIN_IRQHandler             ; Interrupt for all 6 wake-up pins` `10.`                    `11.`    `12.    __Vectors_End``13.`    `14.    __Vectors_Size  EQU  __Vectors_End - __Vectors`

上面的这段代码是建立中断向量表，中断向量表定位在代码段的最前面。具体的物理地址由链接器的配置参数（IROM1 的地址）决定。如果程序在 Flash 运行，则中断向量表的起始地址是 0x08000000。

以MDK为例，就是如下配置选项：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_010_ef6f0d50d875.png)

DCD 表示分配 1 个 4 字节的空间。每行 DCD 都会生成一个 4 字节的二进制代码。中断向量表存放的实际上是中断服务程序的入口地址。当异常（也即是中断事件）发生时，CPU 的中断系统会将相应的入口地址赋值给 PC 程序计数器，之后就开始执行中断服务程序。

-     **第5部分代码分析**
    

  

`1.                    AREA    |.text|, CODE, READONLY``2.`    `3.    ; Reset handler``4.    Reset_Handler    PROC``5.                     EXPORT  Reset_Handler                    [WEAK]``6.            IMPORT  SystemInit``7.            IMPORT  __main``8.`    `9.                     LDR     R0, =SystemInit``10.                     BLX     R0``11.                     LDR     R0, =__main``12.                     BX      R0``13.                     ENDP`

第1行：AREA 定义一块代码段，只读，段名字是 .text 。READONLY 表示只读。

第4行：利用 PROC、ENDP 这一对伪指令把程序段分为若干个过程，使程序的结构加清晰。

第5行：WEAK 声明其他的同名标号优先于该标号被引用,就是说如果外面声明了的话会调用外面的。这个声明很重要，它让我们可以在C文件中任意地方放置中断服务程序，只要保证C函数的名字和向量表中的名字一致即可。

第6行：IMPORT：伪指令用于通知编译器要使用的标号在其他的源文件中定义。但要在当前源文件中引用，而且无论当前源文件是否引用该标号，该标号均会被加入到当前源文件的符号表中。

第9行：SystemInit 函数在文件system\_stm32h7xx.c 里面，主要实现RCC相关寄存器复位和中断向量表位置设置。

第11行：\_\_main 标号表示C/C++标准实时库函数里的一个初始化子程序\_\_main 的入口地址。该程序的一个主要作用是初始化堆栈(跳转\_\_user\_initial\_stackheap 标号进行初始化堆栈的，下面会讲到这个标号)，并初始化映像文件，最后跳转到 C 程序中的 main函数。这就解释了为何所有的 C 程序必须有一个 main 函数作为程序的起点。因为这是由 C/C++标准实时库所规，并且不能更改。

-     **第6部分代码分析**
    

代码如下：

  

`1.    ; Dummy Exception Handlers (infinite loops which can be modified)``2.`    `3.    NMI_Handler     PROC``4.                    EXPORT  NMI_Handler                      [WEAK]``5.                    B       .`  `6.                    ENDP``7.    HardFault_Handler\``8.                    PROC``9.                    EXPORT  HardFault_Handler                [WEAK]``10.                    B       .``11.                    ENDP``12.`    `13.                    中间部分省略未写``14.    Default_Handler PROC`                                      `15.`    `16.                    EXPORT  WWDG_IRQHandler                   [WEAK]`                                       `17.                    EXPORT  PVD_AVD_IRQHandler                [WEAK]`                         `18.                    EXPORT  TAMP_STAMP_IRQHandler             [WEAK]``19.                    中间部分省略未写``20.    SAI4_IRQHandler`      `21.    WAKEUP_PIN_IRQHandler``22.`    `23.                    B       .``24.`    `25.                    ENDP``26.`    `27.                    ALIGN`

第5行：死循环，用户可以在此实现自己的中断服务程序。不过很少在这里实现中断服务程序，一般多是在其它的C文件里面重新写一个同样名字的中断服务程序，因为这里是WEEK弱定义的。如果没有在其它文件中写中断服务器程序，且使能了此中断，进入到这里后，会让程序卡在这个地方。

第14行：缺省中断服务程序（开始）

第23行：死循环，如果用户使能中断服务程序，而没有在C文件里面写中断服务程序的话，都会进入到这里。比如在程序里面使能了串口1中断，而没有写中断服务程序USART1\_IRQHandle，那么串口中断来了，会进入到这个死循环。

第25行：缺省中断服务程序（结束）。

-     **第7部分代码分析**
    

启动代码的最后一部分：

  

`1.    ;*******************************************************************************``2.    ; User Stack and Heap initialization``3.    ;*******************************************************************************``4.                     IF      :DEF:__MICROLIB``5.`                    `6.                     EXPORT  __initial_sp``7.                     EXPORT  __heap_base``8.                     EXPORT  __heap_limit``9.`                    `10.                     ELSE``11.`                    `12.                     IMPORT  __use_two_region_memory``13.                     EXPORT  __user_initial_stackheap``14.`                     `15.    __user_initial_stackheap``16.`    `17.                     LDR     R0, =  Heap_Mem``18.                     LDR     R1, =(Stack_Mem + Stack_Size)``19.                     LDR     R2, = (Heap_Mem +  Heap_Size)``20.                     LDR     R3, = Stack_Mem``21.                     BX      LR``22.`    `23.                     ALIGN``24.`    `25.                     ENDIF``26.`    `27.                     END`

第4行：简单的汇编语言实现IF…….ELSE…………语句。如果定义了MICROLIB，那么程序是不会执行ELSE分支的代码。\_\_MICROLIB可能大家并不陌生，就在MDK的Target Option里面设置。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_011_6e6d9101872e.png)

第5行：\_\_user\_initial\_stackheap将由\_\_main函数进行调用。

-    **MicroLib**
    

MicroLib是MDK里面带的微库，针对嵌入式应用，MicroLIB做了深度优化，比使用C标准库所需的RAM和FLASH空间都大大减小比如调用：

<math.h>，<stdlib.h>，<stdio.h>，<string.h>

更多相关知识可以地址：http://www.keil.com/arm/microlib.asp。另外注意microlib只有库，没有源文件。下图是标准库和微库生成代码的比较。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_012_0a4b7664d8df.png) 

## 4 BOOT启动模式

相比F1，F4的启动方式，H7的启动方式更灵活些，只需一个boot引脚即可。但是一个引脚只能区分出两个状态，为了解决这个问题，H7专门配套了两个option bytes选项字节配置，如此以来就可以方便设置各种存储器地址了。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_013_a999809f6784.png)

BOOT\_ADD0和BOOT\_ADD1对应32位地址到高16位，这点要特别注意。通过这两个选项字节，所有0x0000 0000到0x3FFF 0000的存储器地址都可以设置，包括：

-     所有Flash地址空间。
    
-     所有RAM地址空间，ITCM，DTCM和SRAM。
    

设置了选项字节后，掉电不会丢失，下次上电或者复位后，会根据BOOT引脚状态从BOOT\_ADD0，或BOOT\_ADD1所设置的地址进行启动。

使用BOOT功能，注意以下几个问题：

-     如果用户不慎，设置的地址范围不在有效的存储器地址，那么BOOT = 0时，会从Flash首地址0x0800 0000启动，BOOT = 1时，会从ITCM首地址0x0000 0000启动。
    
-     如果用户使能了Flash Level 2保护，那么只能从Flash地址空间进行启动。
    

-     **F1,F4的启动方式**
    

作为对比，这里补充F1，F4的启动方式，由BOOT0和BOOT1引脚共同决定。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解STM32启动过程_images\img_014_966d3fb51aa4.png)

## 5 总结

本章节讲解的启动过程分析还是比较重要的，忘初学者务必掌握。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。