# 【学习笔记/PLL】锁相环PLL线性模型理论分析

原创 电路一点通 2025-04-16 11:45 广东

> 原文地址: [https://mp.weixin.qq.com/s/ZJz1eejF0Hvt7Dpa41R03Q](https://mp.weixin.qq.com/s/ZJz1eejF0Hvt7Dpa41R03Q)

锁相（phase locking）的概念是20世纪30年代提出的，距今已经100年左右了，尽管工艺在持续发展，振荡器的频率也越来越快，各种花样锁相环结构的文章层出不穷，但是发展至今，基本的锁相环结构几乎保持原样。这对于初学者了解锁相环的基本原理是很友好的。本文参考了Razavi、Sam Palermo等学者的教材、文章，简略的总结了PLL线性模型下的噪声传递函数，欢迎各位同学批评指正。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_000_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

目录

一、PLL功能及线性模型

二、PLL的噪声传递函数分析

2.1 PD（PFD+CP）

2.2 LPF

2.3 VCO

2.4 Divider

2.5 PLL的开环传递函数、环路增益、闭环传递函数

2.6 PLL各模块的噪声对PLL输出相位噪声的贡献

三、PLL环路稳定性分析

3.1 环路稳定性分析

3.2 PLL关键参数：环路带宽、阻尼系数、

* * *

  

### 一、PLL功能及线性模型

下图是锁相环（Phase Locked Loop，PLL）的框图，PLL的输入为参考时钟信号，与反馈时钟信号一同输入到鉴相器（Phase Detector，PD）中进行相位比较，输出电压信号。如果反馈信号相位落后，输出电压升高，会控制压控振荡器（Voltage Controlled Oscillator，VCO）的输出频率增大，以“追赶”参考时钟的相位；反之，VCO震荡减慢，等待参考时钟相位“追上来”，最终使得参考时钟相位和反馈时钟相位对齐，PLL锁定。可以看出，PLL实际上是一个负反馈系统。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_001_00ff0197cb6e.png)

电荷泵锁相环（Charge-pump PLL）是目前更为常用的锁相环结构（如下图），鉴频鉴相器（phase and frequency detector，PFD）和电荷泵（CP）合并看作鉴相器PD，其输出的电流信号对环路滤波器充电/放电，控制电压升高/降低，从而控制VCO的振荡频率。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_002_5099c7a4bd9b.png)

为了便于分析和建模，我们不考虑具体的电路结构，仅从信号与系统的角度进行分析。同时，为了简化计算，我们需要将整个PLL电路近似看作一个线性时不变系统，构造其线性模型，推导传递函数。

### 二、PLL的噪声传递函数分析

我们把PLL分成几个子模块，分别是PD（PFD+CP）、环路滤波器（Loop Filter，LPF）、VCO和分频器Divider。首先推导各子模块的传递函数。

#### 2.1 PD（PFD+CP）

PD的输入是参考时钟和反馈时钟的相位差，输出是CP的电流Icp。实际上，PLL的锁定过程中，PD并不是一个连续的模型，CP的电流仅在有相位差的时间段内会打开，因此它是一个离散的信号。但是为了简化计算，我们构建PLL线性模型中，把PD看作一个连续输出电流信号的模块。为了保证这个结论近似成立，必须要有一定的条件约束。这个条件就是：PLL环路的响应要远小于参考时钟的频率，也就是说环路带宽要小于1/10~1/15的参考时钟频率。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_003_a442f87a0c5d.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_004_8224232f9920.png)

#### 2.2 LPF

LPF是由电阻电容构成的，输入为CP的电流Icp，输出为控制VCO的电压Vctrl，传递函数Z(s)的推导比较容易。下图列出了一阶、二阶、三阶环路滤波器的电路图。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_005_4b3d16fe52f8.png)

由上图可知，一阶环路滤波器的传递函数为：

![Z(s)=\frac{1+R{C_{1}s}}{{C_{1}}s}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_006_1ada61940385.png)

二阶环路滤波器的传递函数为：

![Z(s)=\frac{s+\frac{1}{RC_{1}}}{C_{2}s(s+\frac{1}{R(C_{1}\parallel C_{2}))})}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_007_b27ced45ee4c.png)

三阶环路滤波器的传递函数为：

![Z(s)=\frac{\frac{1}{C_{3}s}}{\frac{1}{C_{3}s}+R_{3}}\times [(\frac{1}{C_{1}s}+R)\parallel \frac{1}{C_{2}s}\parallel (\frac{1}{C_{3}s}+R_{3})]](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ldlsyjd6xzdzdk2xQIT4FtMnXRicZSH3egtUicAhWBxo3YYWSNB4dbYIiaUS3q79EyBOUWPe3uEww80A/640?wx_fmt=png&from=appmsg)

#### 2.3 VCO

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_008_0bd53f00f454.png)

VCO是PLL的核心模块，主要分为Ring-VCO和LC-VCO两大类，有很多巧妙复杂的具体电路结构，但在PLL线性模型中，我们把它看成一个理想的积分器，其输出频率随输入电压线性变化，即：公众号@电路一点通

![\omega _{out}=\omega _{0}+K_{VCO}\cdot V_{ctrl}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_009_ca30729876ad.png)

其中斜率为Kvco。VCO的输入为LPF的输出电压Vctrl，输出为相位，上述公式两侧对时间进行积分（忽略![\omega _{0}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_010_92c9c8c04185.png)），即：

![\int \omega _{out} dt=K_{VCO}\cdot \int V_{ctrl} dt](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_011_a0ad20d9b91f.png)

频率对时间的积分为相位，整理可得其传递函数为：

![\frac{\phi _{out}}{V_{ctrl}}=\frac{K_{VCO}}{s}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_012_ac9f8cd19e66.png)

#### 2.4 Divider

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_013_9b7c6f95ba26.png)

分频器的模型比较简单，其输入为VCO的输出相位，输出为反馈时钟相位，传递函数为

![\frac{\phi _{div}}{\phi _{out}}=\frac{1}{N}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_014_9934d899a7a5.png)

#### 2.5 PLL的开环传递函数、环路增益、闭环传递函数

根据我们上述推导的PLL各模块的传递函数，我们可以很容易的写出PLL的开环传递函数、环路增益、闭环传递函数（LPF以二阶为例），分别是：

开环传递函数![H_{open}(s)](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_015_3f0e8ffb91a3.png)即前馈通路上PD、LPF和VCO传递函数的乘积：

![H_{open}(s)=K_{PD}\cdot Z(s)\cdot \frac{K_{VCO}}{s}=\frac{K_{PD}\cdot K_{VCO}\cdot (s+\frac{1}{RC_{1}})}{C_{2}s^{2}(s+\frac{1}{R(C_{1}\parallel C_{2}))})}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_016_1519ff5ea5c4.png)

环路增益![H_{loop}(s)](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_017_ebce24c32678.png)即环路上PD、LPF、VCO和Divider传递函数的乘积：

![H_{loop}(s)=\frac{K_{PD}\cdot Z(s)\cdot K_{VCO}}{N\cdot s}=\frac{K_{PD}\cdot K_{VCO}\cdot (s+\frac{1}{RC_{1}})}{N\cdot C_{2}s^{2}(s+\frac{1}{R(C_{1}\parallel C_{2}))})}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_018_fa271ba75326.png)

闭环传递函数![H_{close}(s)](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_019_235f2fb704f6.png)即：

![H_{close}(s)=\frac{H_{open}(s)}{1+H_{loop}(s)}=\frac{\frac{K_{PD}\cdot K_{VCO}}{C_{2}\cdot}\cdot (s+\frac{1}{RC_{1}})}{s^{3}+\frac{1}{R(C_{1}\parallel C_{2})}\cdot s^{2}+\frac{K_{PD}\cdot K_{VCO}}{N\cdot C_{2}}\cdot s+\frac{K_{PD}\cdot K_{VCO}}{N\cdot R\cdot C_{1}\cdot C_{2}}}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_020_256d91940235.png)

#### 2.6 PLL各模块的噪声对PLL输出相位噪声的贡献

输入参考时钟的输出噪声为相位噪声；PD的输出噪声为CP的电流噪声；LPF的输出噪声为Vctrl上的电压噪声；VCO的输出噪声为相位噪声；Divider的输出噪声为相位噪声。各模块的输出噪声到PLL输出端的传递函数，即各模块的输出端到PLL输出端的开环增益，除以1加环路增益，各模块的传递函数及其噪声到PLL输出端的传递函数总结如下表：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_021_80b377b09bc7.png)

可以看出输入参考时钟、PD和Divider的噪声为低通特性，LPF的噪声为带通特性，VCO的噪声为高通特性。Sam Palermo教授的课件如下，也证明了这一结果。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_022_6bebeab458e4.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_023_6600aa4e18c2.png)

值得注意的是，这里Sam Palermo为什么没有讨论PD的输出噪声对PLL的影响，我的理解是，因为在PLL锁定或者近似锁定的情况下，相位差占整个周期的比例很小，也就是说，每个周期内，只有很小比例的时间CP会开启并引入电流噪声，因此可以忽略。 

对于不同模块引入的噪声，除了在设计上降低其本身的噪声外，也可以通过PLL系统参数的调整来抑制噪声，如下图所示。减小PLL的环路带宽，可以抑制低通的带内噪声，如输入参考时钟的噪声、CP的噪声和Divider的噪声；增大PLL的环路带宽，可以抑制高通的带外噪声，即VCO的噪声。当然，通过减小（增大）带宽，来抑制带内（带外）噪声，势必也会导致带外（带内）的噪声贡献增大。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_024_fd7659fe12be.png)

这里有一个重要的结论：PLL的相位噪声，等于各模块输出噪声乘以其到PLL输出端的传递函数的平方加和。如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_025_712165638c31.png)

这里有一个有意思的点，如果CP的电流噪声较大，应该如何优化呢？正常来说电流噪声与电流值成正比，因此减小Icp可以降低CP本身的电流噪声，但是可以看到，其到PLL输出端的传递函数中，Kpd在分母上，并且是平方关系，一约分的话，还有一个Icp在分母上，也就是说，尽管减小Icp降低了CP本身的电流噪声，但是却导致对PLL输出端的噪声贡献增大。正确的方法应该是增大Icp。当然，考虑到实际情况Icp打开的时间占比很短，这个噪声的贡献实际应该很小。

## 三、PLL环路稳定性分析

#### 3.1 环路稳定性分析

我们可以通过PLL零极点和波特图，对PLL的环路稳定性进行分析。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_026_1b7a6087935e.png)

由上图可以看出，当LPF为一阶时，LPF提供一个左半平面零点![\omega _{Z}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_027_daafdfc2d769.png)和一个位于原点的极点![\omega _{p1}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_028_c0c0801f4085.png)，同时VCO也提供一个位于原点的极点![\omega _{p2}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_029_3ca2823e665a.png)。 当环路带宽![\omega _{c}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_030_e2cf01b519c1.png)位于合适的位置时，PLL系统有较大的相位裕度，保证稳定。但一般情况下，还需要一个滤波电容C2，使Vctrl更平滑。C2的引入会产生一个新的极点![\omega _{p3}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_036_372dae4c4a24.png)，合理安排![\omega _{p3}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_032_372dae4c4a24.png)的位置，可以使得PLL有较好的相位裕度。

从PLL的环路增益公式中，我们可以得知零极点的位置，分别为：

![\omega _{Z}=\frac{1}{RC_{1}}, \omega _{p1}=\omega _{p2}=0, \omega _{p3}=\frac{1}{R\cdot (C_{1}\parallel C_{2})}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_033_6af9f6b269fc.png)

显然，当环路带宽![\omega _{c}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_034_e2cf01b519c1.png)位于零点![\omega _{Z}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_035_daafdfc2d769.png)和第三极点![\omega _{p3}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_031_372dae4c4a24.png)中间（对数坐标）时，相位裕度PM有极大值，此时有关系式成立：

![\omega _{c}=\sqrt{\omega _{Z}\cdot \omega _{p3}}=\omega _{Z}\cdot \sqrt{\frac{C_{1}+C_{2}}{C_{2}}}=\omega _{p3}\div \sqrt{\frac{C_{1}+C_{2}}{C_{2}}}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_037_46578ffcdd3d.png)

令![b=\sqrt{\frac{C_{1}+C_{2}}{C_{2}}}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_038_346f31ec60f1.png)

我们看PLL的相位裕度与零极点的关系：

![PM=\phi _{Z}-\phi _{p3}=tan^{-1}(\frac{\omega _{c}}{\omega _{Z}})-tan^{-1}(\frac{\omega _{c}}{\omega _{p3}})=tan^{-1}(\sqrt{b})-tan^{-1}(\frac{1}{\sqrt{b}})](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_039_4da7313d782b.png)

带入b的值可得PM值，如下图：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_040_332d7969c2dd.png)

可以看出，b取值越大，即C2越小于C1，即![\omega _{p3}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_041_372dae4c4a24.png)的位置越靠近高频，PM越大，环路越稳定。当然，C2还起到平滑Vctrl的作用，所以取值不能太小，Sam Palermo的课件给出了C2的取值范围为

![\frac{C_{1}}{50}< C_{2}< \frac{C_{1}}{10}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_042_6b02131ff604.png)

#### 3.2 PLL关键参数：环路带宽、阻尼系数、固有频率

PLL的关键参数环路带宽、阻尼系数，一般是在设计之前就需要确定的。

对于环路带宽，一种求值方式为，令![H_{loop}(s)=1](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_043_8a5e0fb31a06.png)，求出对应的频率，通过化简，如下：

![\omega _{c}=\frac{I_{cp}\cdot R\cdot K_{VCO}}{N}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_044_e0950e96c300.png)

可以看出环路带宽与CP电流Icp、电阻R、VCO的Kvco和分频比N有关，对于PLL系统，一般输入输出频率是确定的，N也随之确定，Kvco一般随着VCO设计完后也不容易修改，电阻R调整也伴随着电容C需要调整以保证零极点位置，所以最容易改变的参数就是Icp，完全可以多做几路电流源来实现。

前面提到了环路带宽的选取依据，总结几点如下：

-   为保证线性模型近似成立，环路带宽要小于输入参考频率的1/10~1/15。
    
-   为保证环路快速锁定，环路带宽越大越好，锁定时间的经验公式![t_{lock}\approx \frac{4}{\omega _{c}}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_045_f3726d66e65a.png)。
    
-   通过增大/减小环路带宽，抑制带外/带内噪声。
    

通常采用二阶PLL模型计算阻尼系数和固有频率，即忽略LPF中的C2，闭环传递函数如下：

![H_{close}=\frac{K_{loop}\cdot (1+RC_{1}s)}{s^{2}+\frac{K_{loop}\cdot R\cdot C_{1}}{N}s+\frac{K_{loop}}{N}}, K_{loop}=\frac{K_{PD}\cdot K_{VCO}}{C_{1}}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_046_178997531f14.png)

标准二阶公式为：![s^{2}+2\xi \omega _{n}s+\omega _{n}^{2}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_047_ae3a30848499.png)

可得，![\omega _{n}=\sqrt{\frac{K_{loop}}{N}}, \xi =\frac{\omega _{n}}{2\cdot \omega _{Z}}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_048_ee47476ec599.png)

并且有，![\omega _{3dB}=\omega _{n}\cdot \sqrt{a+\sqrt{a^{2}+1}}, a=2\xi ^{2}+1-\frac{\omega _{n}\cdot N}{K_{PD}\cdot K_{VCO}}\cdot (4\xi -\frac{\omega _{n}\cdot N}{K_{PD}\cdot K_{VCO}})](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_049_5b28fad6b5ca.png)

![\omega _{3dB}](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_050_86eac56af22a.png)应该就是环路带宽。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_051_24fbafa48b86.png)

为保证环路的稳定和快速锁定，阻尼系数![\xi](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_052_d14975862aed.png)取值范围一般为~1，如上图，取值过大或者过小，都会在时域上引起震荡。

以上就是我对PLL线性模型的理论分析总结，学习时间不长，认识较浅，欢迎各位同学批评指正，共同进步！

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[12V 典型开关电源方案（有哪些品牌选择）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544143&idx=1&sn=ee2946ca6d12a4acafaee7112b6b8100&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[嵌入式硬件杂谈：推挽、开漏、高阻态、上拉电阻](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543740&idx=3&sn=a761df603da5ae3f743c6f6ca5a6ce8a&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[德系大众车EA211、EA111和EA888 三款发动机闭着眼睛买？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517443&idx=1&sn=59eba24507fb558c8f2291d50a683458&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517490&idx=1&sn=02b3442b9e016dcbb338bd6fae516845&scene=21#wechat_redirect)[电动汽车结构原理基础知识（核心部件、电池、电驱）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517490&idx=1&sn=02b3442b9e016dcbb338bd6fae516845&scene=21#wechat_redirect)**
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\_学习笔记_PLL_锁相环PLL线性模型理论分析_images\img_053_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**