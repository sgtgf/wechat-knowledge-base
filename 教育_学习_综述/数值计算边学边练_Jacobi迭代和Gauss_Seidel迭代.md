在科学计算和工程领域，线性代数问题无处不在。无论是求解物理系统的平衡状态，还是优化复杂的数学模型，线性方程组的求解都是核心任务之一。

考虑线性方程组

其中  为非奇异矩阵。

我们通常会考虑使用高斯消去法。然而，在处理大型稀疏矩阵时（  的阶数  较大，同时零元素较多），高斯消去法可能会变得不稳定且计算量较大。相比之下，迭代法则可以更好地利用这些矩阵的零元素特点，在内存和计算效率方面具有显著优势。

本文将介绍两种常用的迭代方法——Jacobi迭代法和Gauss-Seidel迭代法，并通过具体例子详细说明其原理和应用。

## 迭代法的基本概念

我们通过举例来说明迭代法的基本思想。

### 例 1

考虑以下线性方程组：

我们将其记为

其中

实际上，此方程组的精确解是

现将方程组改写如下

如果写成以下形式

则有

任取初始值，例如令  ，代人上式，得  的新解

它一般不是精确解。于是，再将  代人上式，得到  。反复利用这个程序，得到迭代公式

每次获得的  解为

将迭代公式简写为

其中， 表示迭代次数  。

经过计算，迭代到第 10 次时， ，误差 。

可见此例中，随着迭代次数的增加， 愈发趋向于精确解  。

## 迭代法的收敛性问题

由  任意变形得到的  迭代，是否都能逼近精确解  呢？回答是不一定。

_**定义**_

对于给定的线性方程组  ，设有唯一解  ，则有

又设  为初始解向量，按如下公式构造解向量序列

称为**一阶定常迭代法**。

如果  ）存在（无限接近于  ），则称此迭代法**收敛**，否则迭代法**发散**。

引进误差向量 

由式  减去式  得

以此类推

由于  是一个具有一定值的向量，则  的条件为  。

根据线性代数基本原理， 等价于矩阵  的谱半径  ，即矩阵  最大特征值的模小于 1。

### 例 2

对于例 1 中的线性方程组，考查其迭代公式的收敛性。

线性方程组为

迭代公式为

**解：**

求迭代矩阵  的特征根。由特征方程

可得

解得

由此可得

可见，  。因此，由上述迭代格式解例 1 的线性方程组是收敛的。

### 迭代终止判定

如果已经判定迭代公式是收敛的，那如何控制迭代过程的结束呢？即精确解通常是不知道的，计算何时可以终止呢？

通常在收敛情况下，随着计算次数的增加，  。由此，通常在计算开始之前，我们需要给出具体的精度要求  ，即直接给出条件：

以此来判断计算何时终止。

## Jacobi迭代法

Jacobi迭代法是众多迭代法中出现比较早且较简单的一种。例 1 中的线性方程组其实已经给出了Jacobi迭代法的情形。求  解的Jacobi法计算公式为

式中， 表示解向量个数；   表示迭代次数， 为行对角占优矩阵。

Jacobi迭代法保证收敛的条件是矩阵  为**严格的行对角占优矩阵**，即对于每一行，对角线上的元素之绝对值大于其余元素绝对值的和。需要说明的是：即使不满足此条件，Jacobi法有时仍可收敛。

## Gauss-Seidel迭代法

Gauss-Seidel迭代法与Jacobi迭代法类似，区别在于Jacobi迭代法每次迭代时只用前面一次的迭代值，而Gauss-Seidel迭代法能充分利用最新的迭代值。

即在Gauss-Seidel迭代法中，当进行第  次迭代计算解向量  中的元素  时，前面的  元素已经算出了第  次迭代值（即  ，  ），Gauss-Seidel迭代法要求接下来的  解向量元素直接使用已经算出的  ，   。

Gauss-Seidel迭代法公式为

其中，  表示解向量个数；  表示迭代次数。

需要指出的是，Gauss-Seidel法与Jacobi法收敛范围仅部分重合。另外，相对而言，Gauss-Seidel进行了超前迭代，收敛速度通常会加快。


## 实例分析

应用迭代法编程求解以下方程组：

要求以  为初值，并对比Jacobi迭代和Gauss-Seidel迭代求解收敛过程。

（1）Jacobi迭代：

（2）Gauss-Seidel迭代：

### Fortran 实现

利用 Fortran 语言，我们可以高效地实现Jacobi迭代和Gauss-Seidel迭代。具体参见以下的代码和注释：

`program main   implicit none   integer,parameter::N=3   real(8) ::A(N,N),b(N),x(N),x0(N)   x0=[0d0,0d0,0d0]   b=[7.2d0,8.3d0,4.2d0]   A=reshape([10,-1,-1,-1,10,-1,-2,-2,5],[3,3])   call jacobi_solve(A,b,x,x0,N)   write(*,*) 'Jacobi迭代法计算结果：'   write(*,101) x   call GS_solve(A,b,x,x0,N)   write(*,*) 'Gauss-Seidel迭代法计算结果：'   write(*,101) x   101 format(T5,'x(1)',T15,'x(2)',T25,'x(3)',/,3F10.7)      contains     subroutine jacobi_solve(A,b,x,x0,N)     implicit none     integer::N     integer::i,j,k     real(8)::A(N,N),b(N),x(N),x0(N)     real(8)::x1(N),x2(N),s,dx2     integer::IMAX=50!最大允许迭代次数     real(8)::tol=1d-7!误差容限     open(10,file='jacobi_res.txt')     x1=x0     write(10,*) 'Jacobi迭代法'     write(10,"(T3,'k',T9,'x(1)',T21,'x(2)',T33,'x(3)',T45,'error')")     write(10,"(I3,3F12.8,E12.4)")0,x1     do k=1,IMAX       do i=1,N         s=0         do j=1,N           if(j==i) cycle                      s=s+A(i,j)*x1(j)                      enddo         x2(i)=(b(i)-s)/A(i,i)         enddo       !计算误差       dx2=maxval(abs(x1-x2))       x1=x2       !记录迭代中间值       write(10,"(I3,3F12.8,E12.4)")k,x1,dx2       !判断精度，满足精度时退出循环         if(dx2<tol) exit     enddo     x=x2     close(10)     end subroutine jacobi_solve        subroutine GS_solve(A,b,x,x0,N)     implicit none     integer::N     integer::i,j,k     real(8)::A(N,N),b(N),x(N),x0(N)     real(8)::x1(N),x2(N),s,dx2     integer::IMAX=50!最大允许迭代次数     real(8)::tol=1d-7!误差容限     open(10,file='GS_res.txt')     x1=x0     write(10,*) 'Gauss-Seidel迭代法'     write(10,"(T3,'k',T9,'x(1)',T21,'x(2)',T33,'x(3)',T45,'error')")     write(10,"(I3,3F12.8,E12.4)")0,x1     !迭代之前两值都设为初值     x1=x0     x2=x1     do k=1,IMAX       do i=1,N         s=0         do j=1,N         if(j<i) then           s=s+A(i,j)*x2(j)         elseif(j>i) then           s=s+A(i,j)*x1(j)         endif         enddo         x2(i)=(b(i)-s)/A(i,i)         enddo       !计算误差        dx2=maxval(abs(x1-x2))       x1=x2       !记录迭代中间值       write(10,"(I3,3F12.8,E12.4)")k,x1,dx2       !判断精度，满足精度时退出循环         if(dx2<tol) exit     enddo     x=x2     close(10)   end subroutine GS_solve   end program main   `

编译并运行，得到

 `Jacobi迭代法计算结果：       x(1)      x(2)      x(3)    1.1000000 1.2000000 1.3000000    Gauss-Seidel迭代法计算结果：       x(1)      x(2)      x(3)    1.1000000 1.2000000 1.3000000`

Jacobi迭代收敛过程记录在`jacobi_res.txt`文件中：


Gauss-Seidel迭代收敛过程记录在`GS_res.txt`文件中：


实际上，该方程组的准确解为： ，，。对比发现，为了达到  的精度要求，Jacobi迭代使用了 16 次迭代，Gauss-Seidel迭代仅使用 10 次，可见此例中Gauss-Seidel迭代的收敛速度较快。

## 小结

Jacobi迭代法和Gauss-Seidel迭代法都是有效的数值计算工具，尤其适用于处理大规模稀疏矩阵。尽管两者在某些情况下可能表现出不同的收敛速度，但它们各自的优势使得在不同应用场景中都能找到合适的用武之地。需要指出的是，Jacobi迭代是一种同步迭代，未来的研究还可以进一步探索如何结合并行计算技术来提升Jacobi迭代法的性能，以及开发更高效的预处理技术以加速收敛过程。希望通过本文的介绍，读者能够对这两种迭代法有更深入的理解，并在实际工作中灵活运用。

  

往期推荐

[

数值计算边学边练：高斯消去法


](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247490964&idx=1&sn=e7e86f2c93c15142277059ae8bc07b88&chksm=c33789eef44000f882066dc938565e85acfb4042f4a4677309486ef698db7eeb6ba1df0f177b&scene=21#wechat_redirect)

[

数值线性代数：科学与工程计算的核心


](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247490796&idx=1&sn=85b715aed259b51c4d35ef2d1a5f3b06&chksm=c3378896f440018050c510c0128b281dfc2e4f208a3d6a1d511c99ff7dfaabe975915da2e3fe&scene=21#wechat_redirect)

[

科学计算中的编程语言：Fortran、C/C++、Python、Matlab 和 Julia


](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247489165&idx=2&sn=7e6885df845ce0b9e441e697be9d22a2&chksm=c33782f7f4400be143e3a1da686b44f7a099c79091dca5a92a00644dfdf47ccc288e1061364f&scene=21#wechat_redirect)