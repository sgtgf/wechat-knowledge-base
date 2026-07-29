# 手搓一个16位RISC架构CPU

原创 硬件笔记本 2024-01-02 07:55 四川

> 原文地址: [https://mp.weixin.qq.com/s/-6IJ\_J2\_Ke4gZomkwke8EA](https://mp.weixin.qq.com/s/-6IJ_J2_Ke4gZomkwke8EA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

来源 | DF创客社区

版权所属 | spudfishScott

今天给大家分享一个耗时又有趣的项目：手搓一个16位RISC架构CPU。

项目的起因是，作者在学习了MITx的 "计算结构 "课程后，发现好像自己做一个CPU也没那么难。

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_002_fcadb6129966.png)

  

在掌握了电子学的初级知识和课程中介绍的概念之后，就开始设计想要做一个基于NMOS逻辑的RISC CPU。

课程中介绍的是Beta CPU——有一个负载存储，32位RISC架构。

为了节省空间、晶体管，少掉一点头发，作者决定把自己的这个CPU减少到16位。

注：MITx的"Computation Structures"官网中对这门课的描述是This course introduces architecture of digital systems, emphasizing structural principles common to a wide range of technologies.

相当于我们国内的数字电路以及计算机组成原理的课程。

B站有UP主做搬运，有兴趣的可以看一下：【MIT公开课】6.004 计算结构 · 2019年春（完结·中英字幕·机翻）\[1\]

课程原文链接：Computation Structures\[2\]

如果把它安装在墙上，它将占据一整面墙。

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_003_a123d9a6592e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_004_b9062718c19d.png)

  

  

为了让整个计算机看起来更复古，输入输出部分，作者专门搬出来自己壁橱里的一个旧的Apple II Plus来处理。

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_005_742134163e7c.png)

  

> 注：Apple II Plus 发布日期 1979年6月，已经是40多年前的事了……

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_006_81557aa10484.png)

  

作者用钉板、原型板、2N7000晶体管、电阻（主要是SIP和一些分立器件）、LED、一些HP-5082显示芯片、一些电致发光线和许多可爱的彩色跳线来构建这么一款CPU。

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_007_952c1e2f4710.png)

  

作者给整个计算机起名为——Spikeputer，目标是它能够执行简单的程序，并且能够让计算过程可视化。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_008_2e51a20e3cfb.gif)

下面是作者提供的一段介绍：

Spikeputor将会是一台功能齐全的计算机，它的CPU完全由NMOS逻辑制成，使用约5000个MOSFET（2N7000）、电阻和LED来显示逻辑。

HP-5082-7340 Hex显示芯片将被战略性地加入来显示主要CPU组件输出的数字内容，尽管如果你阅读二进制，LED将提供同样的信息。

利用电致发光线来可视化主要部件之间的逻辑路径。

CPU的时钟频率将可以从最大速度（预测为数万赫兹范围）下调至单步。(补充：GHz=千兆赫）

由于制作Spikeputor的主要驱动力是让它能够可视化计算过程，所以速度并不是最重要的，虽然还是会采取一些步骤（例如时钟树）来提高计算机的整体性能。

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_009_b016d09cb733.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_010_250f92cf7a27.png)

  

## **Spikeputor CPU的设计特点和主要部件**  

-   16位的地址空间
    
-   寄存器内存：七个16位寄存器，加上1个硬编码为0的寄存器。
    
-   多功能ALU
    

-   加法和减法，支持负数补码
    
-   比较（等于、小于、小于或等于）
    
-   布尔逻辑（AND, OR, XOR, Identity）
    
-   移位运算
    

-   用简单的逻辑门实现的控制逻辑（没有微代码或ROM）
    
-   用于程序计数器、指令、常数、CPU阶段和一些必要的状态标志的附加寄存器
    
-   单字操作码用于寄存器之间的操作
    
-   寄存器和16位常数之间操作的双字操作码
    

-   ALU功能（见上文）
    
-   内存功能：加载、相对于PC的加载和存储
    
-   有条件（BEQ, BNE）和无条件的分支，带分支点存储
    

-   IRQ和RESET处理（包括自动使用寄存器R6作为异常指针）
    
-   所有I/O的直接内存访问（DMA）。
    

### **内存**

为了能够执行更多琐碎的程序，Spikeputor CPU将与高速静态存储器RAM（2 x 32K AS6C62256）和ROM（2 x 32K AT27C256R）芯片连接。此外，还会创建一个镜像的只写 "屏幕存储器"，也是由（大约5000个）晶体管制成，提供一个48乘18的可寻址LED阵列。存储器地址将被限制在字的边界内。试图寻址奇数的存储器位置会返回相应的偶数的16位字。由于没有任何16K的SRAM和ROM芯片可用，我使用了32K的芯片，并会设计一个内存系统，从RAM和ROM中选择16K的库进行读取操作。完整的32K字（64kbytes）的RAM可以在任何时候被写入。

### **输入/输出**

I/O功能作者用1986年的Apple II Plus计算机上运行的定制软件和硬件来实现。作为项目的一部分，作者还设计了一个名为BIAS（连接苹果和Spikeputor的板卡）的自定义外设卡，以及苹果上的软件，来提供键盘输入、屏幕输出和长期数据存储和检索。I/O控制器将直接访问Spikeputor内存，并在所有读写操作中停止Spikeputor CPU。

还实现了16位通用输入和输出信号，镜像到固定的高内存位置。

  

### **结构**

整个Spikeputor被组装在一系列的无焊接面包板上。每个主要部件（ALU、寄存器存储器、控制逻辑/程序计数器/状态寄存器和屏幕存储器）被布置在一个10.16cm×5.08cm的钉板上。每个钉板可以包含一个9×6的阵列（54）的面包板，并根据需要为一些小的电路留出一些空间。四块挂板中的每一块都被安装在墙上，在安装的下方有空间放Apple II Plus的桌子。

  

### **电源**

电力需求在25w左右。Spikeputor使用+5V电源，由一组8端口的USB电源提供（每块钉板一个），非常方便。电致发光线的电源是单独的(额外5w)。

欣赏一下图片和视频：

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_011_ed90db556815.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_012_cc0a686c7427.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_013_8c30a41fbbd0.png)

简单的小游戏：  

斐波那契数列计算：

计算圆周率：

参考资料

\[1\]MIT公开课: 

https://www.bilibili.com/video/av86045726/

\[2\]Computation Structures: https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/

```
原文链接：https://hackaday.io/project/162814-the-spikeputor
```

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_014_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_015_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_016_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_017_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_018_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_019_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_020_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_021_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_022_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_023_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_024_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_025_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_026_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_027_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_028_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\手搓一个16位RISC架构CPU_images\img_029_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。