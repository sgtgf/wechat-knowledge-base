# 常微分方程的数值求解 | Adams线性多步法


> 原文地址: [https://mp.weixin.qq.com/s/9x4xu3Np5jI1TrUUBdhrJQ](https://mp.weixin.qq.com/s/9x4xu3Np5jI1TrUUBdhrJQ)

  

![](常微分方程的数值求解___Adams线性多步法_images/img_000_504b9a0acd89.png)

点击上方「蓝字」关注我们

![](常微分方程的数值求解___Adams线性多步法_images/img_001_92b2749bca28.png)

在自然科学的许多领域特别是科学与工程计算中，经常遇到常微分方程的求解问题。然而，只有非常少数且十分简单的微分方程可以用初等方法求得它们的解，多数情形只能利用近似方法求解，如幂级数解法、皮卡（Picard）逐步逼近法等。这些方法可以给出解的近似表达式，通常称为近似解析方法，主要是通过手算和符号计算软件如 Maple、Mathematica 实现。还有一类近似方法称为数值方法，这些方法可以给出解在一些离散点上的近似值，主要是利用计算机编写程序来处理。我们所要研究的正是这类方法。

前面介绍的方法都是单步法，就是在计算 时只用到前一步 的值。这些方法主要包括：

-   [欧拉方法](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247487085&idx=1&sn=714634ff23492300eae3e9f9c9b39613&chksm=c3379a17f44013019e1416252603c5a23ee1323c163a8a79d420127c996e775f64face5385de&scene=21#wechat_redirect)  
    
-   [梯形方法](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247487169&idx=1&sn=767ba4db8f66dc0b9f8e22f78065bee3&chksm=c3379abbf44013ad1257111b96ab54343465251a6798c75959d5eecfbd5fc017734ec2ba06cd&scene=21#wechat_redirect)  
    
-   [龙格-库塔法](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247487447&idx=1&sn=609a9e9cfe60e6a56ff02f0c1d3a2161&chksm=c3379badf44012bb0c2b6bc0f9db57e3fa7d2b2d7af1e8c444e656342449c79fe533ab48178b&scene=21#wechat_redirect)  
    

若要进一步提高精度，我们可以增加中间函数值的计算。事实上，在计算 时，前面的 ，，， 都已经算出来了，而且前面的很多数值算例都显示越早算出的值逼近效果越好。所以，如果只用离得最近的一项，而前面算出的相对效果较好的项却弃之不用，那是相当可惜的。本文将介绍利用前面已经算出来的 个值 ，， ，， 来求 的高精度方法——Adams 线性多步法。

## 基本思想

本文主要研究的对象为一阶常微分方程初值问题

其中， 为 的已知函数， 为给定的初始值，将上述问题的精确解记为 。

将常微分方程 两端在区间 上积分，可得其等价的积分方程

**Adams 方法**的基本思想是先用插值多项式逼近被积函数 ，再积分插值多项式以获得数值计算格式。

![](常微分方程的数值求解___Adams线性多步法_images/img_002_da646b6d0a51.png)

对给定的非负整数 ，如果选取的插值节点集为 ，则被插值点 位于包含所有插值节点的最小区间 的外部，这样的 Adams 插值方法称为 **Adams 外插方法**。如果选取的插值节点集为 ，则被插值点 位于包含所有插值节点的最小区间 的内部，这样的 Adams 插值方法称为 **Adams 内插方法**。

## Adams 外插方法

容易看出， 时，Adams 外插方法就退化成单步方法，实际上就是**向前 Euler 方法**。

下面考虑 情形，令 。利用插值节点 对 所作的线性插值多项式为

两端在 上积分，可得

记 ，则由上式可得二步 Adams 外插公式为

根据线性插值多项式的插值余项

其中 ，在假设 ， 的前提下，易得二步 Adams 外插公式的局部截断误差为

注意二步 Adams 外插公式的计算，首先要提供已求得的 和 ，其中 是初值，而 必须由其他单步方法给出。由于二步 Adams 外插方法具有二阶精度，因此计算 所采取的单步方法必须至少具有一阶精度，即满足

即可。这样可以保证二步 Adams 外插公式的整体截断误差为 。

类似地可以推导出三步 Adams 外插公式

和四步 Adams 外插公式

一般地，可以证明 步 Adams 外插公式可以写成

其局部截断误差具有形式

其中 。例如，三步、四步 Adams 外插公式的局部截断误差分别为 和 。

另外，为了开始 步 Adams 外插公式的计算过程，除了 为初值外，还必须用适当的单步方法给出另外的 个初始值 ，，， ，通常人们喜欢用 阶 Runge-Kutta 方法，以保证算法的整体精度。

## Adams 内插方法

与 Adams 外插方法类似， 时，Adams 内插方法就退化成单步方法，实际上就是**向后 Euler 方法**。

对于 情形。利用与二步 Adams 外插公式类似的推导，可知此时的 Adams 内插方法仍为单步方法，其计算公式为

此即为前面介绍过的梯形方法，具有二阶精度。类似地可以推导出二步 Adams 内插公式

和三步 Adams 内插公式

一般地，可以证明 步 Adams 内插公式可以写成

其具有 阶精度，局部截断误差具有形式

其中 。例如，二步、三步 Adams 内插公式的局部截断误差分别为 和 ，因此分别具有三阶、四阶精度。

同样，为了开始 步 Adams 内插公式的计算过程，除了 为初值外，还必须用适当的单步方法（如 阶 Runge-Kutta 方法）给出另外的 个初始值 ，，， ，以保证算法的整体精度。

## Adams 预估-校正系统

显然，Adams 外插方法均为显格式，Adams 内插方法均为隐格式。一般来说，隐格式比相应的显格式精度高，并有较好的稳定性。而稳定性是在实际选取计算格式时所考虑到的主要指标，因此，尽管隐格式的计算更复杂（每一步需要求解非线性方程），但人们在实际计算时，通常还会首选隐格式。

为了克服 Adams 内插方法在计算方面的困难，通常可以仿照改进的 Euler 方法那样，将具有同阶精度的 Adams 外插方法和内插方法结合起来使用，构造**预估-校正系统**。

例如，可以用四阶 Adams 外插方法和内插方法建立预估-校正系统：

**预估**

**校正**

注意到，除了初始值 已知外，多步法还需要把前几步的数值结果补全。为此可以利用 Runge-Kutta 方法求出 ，，。对于四阶的 Adams 格式，我们可以对应地采用四阶的 Runge-Kutta 方法，以使精度相匹配。

## 例题

用 Adams 预估-校正系统求解常微分方程初值问题，取步长为 ：

该方程为伯努利方程，存在精确解 。

### Fortran 实现

利用 Fortran 语言，我们可以高效地实现该问题的数值解法。为了便于比较数值算法的效果，我们同时给出原方程的精确解。具体方法参见以下的代码和注释：

`program main     implicit none          integer :: N, i     real(kind=8) :: a, b, h, y_predict, ye, err     real(kind=8) :: k1, k2, k3, k4     real(kind=8), allocatable, dimension(:) :: x, y          a = 0.0D0     b = 1.0D0     N = 10 !总的剖分数     h = (b - a) / dble(N) !步长          !动态分配长度为(N+1)的数组     !x存放节点坐标     !y存放对应节点的数值解     allocate(x(N+1), y(N+1))          !节点坐标     x = [(a + i * h, i = 0, N)]          y(1) = 1.0D0 !初值     err = 0.0D0          !打开存储文件     open(10, file="res.txt")     write(10,*) "#     x          y         yexact       err"     !保存初值     write(10,"(4e12.5)") x(1), y(1), yexact(x(1)), err        do i = 1, 3 !4阶龙格-库塔法       x(i+1) = x(i) + h        k1 = h*f(x(i), y(i))       k2 = h*f(x(i) + 0.5D0*h, y(i) + 0.5D0*k1)       k3 = h*f(x(i) + 0.5D0*h, y(i) + 0.5D0*k2)       k4 = h*f(x(i+1), y(i) + k3)       y(i+1) = y(i) + (k1 + 2D0 * k2 + 2D0 * k3 + k4) / 6.0D0       ye = yexact(x(i+1)) !计算精确解       err = abs(y(i+1) - ye)  !计算节点处的误差       !保存结果       write(10,"(4e12.5)") x(i+1), y(i+1), ye, err     end do     do i = 4, N       x(i+1) = x(i) + h        !Adams预估-校正格式       y_predict = y(i) + (55D0 * f(x(i), y(i)) &                   - 59D0 * f(x(i-1), y(i-1)) &                  + 37D0 * f(x(i-2), y(i-2)) &                  - 9D0 * f(x(i-3), y(i-3)))*h / 24D0;       y(i+1) = y(i) + (9D0 * f(x(i+1), y_predict) &                + 19D0 * f(x(i), y(i)) &                - 5D0 * f(x(i-1), y(i-1)) &                + f(x(i-2), y(i-2)))*h / 24D0;       ye = yexact(x(i+1)) !计算精确解       err = abs(y(i+1) - ye)  !计算节点处的误差       !保存结果       write(10,"(4e12.5)") x(i+1), y(i+1), ye, err     end do            close(10)        contains     !右端项函数     function f(x, y) result (res)       real(kind=8), intent(in) :: x, y       real(kind=8) :: res       res = y - 2.0D0 * x / y     end function f     !精确解y     function yexact(x) result (res)       real(kind=8), intent(in) :: x       real(kind=8) :: res       res = sqrt(1.0D0 + 2.0D0 * x)     end function yexact   end program main   `

编译并运行，得到的计算结果文件`res.txt`的内容如下。

![](常微分方程的数值求解___Adams线性多步法_images/img_003_57c73deab484.png)

观察发现，当以 0.1 为步长时，计算结果大概有 6~7 位的有效数字，可见四阶 Adams 多步法精度还是相当高的。

### Gnuplot 绘图

为了更好地展示计算结果，我们使用 Gnuplot 来读取 Fortran 程序的输出文件并绘图。在 Fortran 程序同一目录下，创建并运行以下 `plt` 脚本文件，就可以轻松得到 png 格式的图片文件。运行结果和对应的脚本代码如下：

![](常微分方程的数值求解___Adams线性多步法_images/img_004_65839f23f0da.png)

`set terminal png   set output "res.png"      set title "Adams Method"   set xlabel "x"   set ylabel "y"   set key center left spacing 2      plot "res.txt" using 1:2 title "Numerical", \   "res.txt" using 1:3 title "Analytical" \   with lines linewidth 2   `

## 结语

数值求解常微分方程是一项充满挑战的任务，它不仅要求我们对数学理论有深刻理解，还需要掌握适当的编程技巧。本文主要介绍了 Adams 线性多步法。它在计算 时，充分利用了已经算得的 ，，，，从而获得了具有较高的数值精度。希望本文能为你打开探索常微分方程数值求解世界的大门，激发你对该领域的兴趣与热情。

  

往期推荐

[

常微分方程的数值求解 | 龙格-库塔法



](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247487447&idx=1&sn=609a9e9cfe60e6a56ff02f0c1d3a2161&chksm=c3379badf44012bb0c2b6bc0f9db57e3fa7d2b2d7af1e8c444e656342449c79fe533ab48178b&scene=21#wechat_redirect)

[

常微分方程的数值求解 | 从欧拉方法启航



](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247487085&idx=1&sn=714634ff23492300eae3e9f9c9b39613&chksm=c3379a17f44013019e1416252603c5a23ee1323c163a8a79d420127c996e775f64face5385de&scene=21#wechat_redirect)

[

Gnuplot：数据可视化的理想工具



](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247485849&idx=1&sn=7cbb836c98c9629ca08809b6b12a9e29&chksm=c3379de3f44014f55bb73cc2c1d17e5b58b50b0bee7b787ebe8e7e6d4c5e705b97a1866f1716&scene=21#wechat_redirect)

  

  

## 推荐阅读

  

‍

![](常微分方程的数值求解___Adams线性多步法_images/img_005_d8aae6d6bc0e.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。

**喜欢****作者******，请点********赞********和在看******![](常微分方程的数值求解___Adams线性多步法_images/img_006_2ab55b5e37e9.gif)**

**![](常微分方程的数值求解___Adams线性多步法_images/img_007_0dc7b9b79564.gif)**