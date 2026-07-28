点击上方「蓝字」关注我们


在工程科学与应用数学中，常微分方程（ODEs）是描述物理现象的重要工具之一。其中，两点边值问题（BVPs），特别是 Dirichlet 边界条件下的问题，广泛存在于各种实际应用场景中，如热传导、流体力学、弹性力学等领域。本文旨在介绍如何利用差分法解决这类问题，并通过一个具体的例子来展示整个求解过程。

## 两点Dirichlet边值问题

对于一个二阶常微分方程的 Dirichlet 边值问题，其一般形式可以表示为：

这里表示关于的二阶导数，是已知函数，和分别是在区间端点和处给定的边界值。

为了讨论方便，这里只考虑如下的两点 Dirichlet 边值问题：

其中，和为已知函数。

## 差分法的基本原理

差分法是一种数值方法，它通过将连续的微分方程离散化为一系列代数方程组，从而使得原本难以直接求解的问题变得易于处理。

首先对求解区域等距剖分为份，得到个节点，，步长。然后将原方程弱化，使之仅在内部节点成立，即有

继续利用中心差分格式对二阶导数值进行精细处理，可得在节点处的离散方程：

其中，，。忽略上式中的高阶小项，并用数值解作为精确解的近似值，并结合边界条件，可得以下差分格式：

这是一个由个未知量、个方程构成的线性方程组，写成矩阵形式即为

其中

注意到为对称的三对角矩阵，因此，可以使用追赶法、高斯消元法或其他适当的算法求解该方程组，从而获得每个内部节点上的值。

## 例题

用差分法求解 Dirichlet 边值问题：

将计算区域剖分成 16 份，即取步长，计算出节点处的数值解，并给出与精确解的误差。

### Fortran 实现

利用 Fortran 语言，我们可以高效地实现该问题的数值解法。为了便于比较数值算法的效果，我们同时给出原方程的精确解。具体方法参见以下的代码和注释：

```
program main  implicit none  integer:: m, i  real(8),parameter::Pi=3.14159265359d0  real(8):: a, b, h, alpha, beta  real(8),allocatable:: matrix_a(:), matrix_b(:), rhs(:), ans(:)  real(8),allocatable:: x(:), y(:)  m =16!总的剖分数  a =0.0d0!边界左端点  b =Pi/2.0d0!边界右端点  h =(b - a)/dble(m)!步长  alpha =0.0d0!左端点值  beta =1.0d0!右端点值! 节点坐标  allocate(x(0:m))  x =[(a + i * h, i =0, m)]! 矩阵的右端项，含m-1个元素的数组rhs  allocate(rhs(m-1))  rhs =[(h*h*f(x(i)), i =1, m-1)]! 考虑边界条件  rhs(1)= rhs(1)- alpha  rhs(m-1)= rhs(m-1)- beta! 对称三对角矩阵，主、次对角线元素数组a、b，计算结果存储数组ans  allocate(matrix_a(m-1), matrix_b(m-1
```

编译并运行，得到的计算结果文件`res.txt`的内容如下。


观察发现，当以为步长时，计算结果大概有 3 位的有效数字。理论上，随着步长的减小，数值解将更加接近于精确解。由于中心差分格式是一个二阶格式，如果将步长减半，数值解的误差会缩小为原来的左右，感兴趣的读者可自行测试。

### Gnuplot 绘图

为了更好地展示计算结果，我们使用 Gnuplot 来读取 Fortran 程序的输出文件并绘图。在 Fortran 程序同一目录下，创建并运行以下`plt`脚本文件，就可以轻松得到 png 格式的图片文件。运行结果和对应的脚本代码如下：


`set terminal png   set output "res.png"      set title "Finite Difference Method"   set xlabel "x"   set ylabel "y"   set key top left spacing 2      plot "res.txt" using 1:2 title "Numerical", \   "res.txt" using 1:3 title "Analytical" \   with lines linewidth 2   `

## 结语

本文介绍了如何利用差分法解决常微分方程的两点 Dirichlet 边值问题，并通过一个具体例子展示了从理论到实践的全过程。差分法作为一种基本而有效的数值方法，在处理边界值问题时展现了强大的适用性和灵活性。

  

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