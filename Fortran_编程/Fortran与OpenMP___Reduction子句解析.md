在高性能计算领域，Fortran 语言以其强大的数值计算能力和广泛的应用基础，一直占据着重要的地位。随着多核处理器的普及，如何充分利用多核并行计算资源，提高程序的执行效率，成为了程序员们关注的焦点。OpenMP（Open Multi-Processing）作为一种广泛使用的并行编程模型，为 Fortran 程序员提供了一种简单而有效的方法来实现并行计算。

在 OpenMP 中，Reduction 子句是实现并行计算中数据归约操作的关键工具。本文将详细介绍 Reduction 子句的基本概念、语法结构及其在 Fortran 程序中的应用。

## Reduction子句简介

在科学计算中，经常会遇到**累加求和、累减求差、累乘求积、求最大值和求最小值**等运算操作。这些操作的特点是反复地将运算符（如加法或求最大值）作用在一个变量和一个值上，并将结果保存在原变量中。这类操作被称为「规约操作」。Reduction 子句的目的是对前后有依赖性的循环进行规约操作的并行化。

Reduction子句的基本思想是将一个或多个变量的值在多个线程中进行归约（Reduce）操作，最终得到一个单一的结果。这在处理大规模数据集时尤其有用，因为它可以「显著减少线程间的数据通信和同步开销」。

## 具体语法

Reduction 子句的语法格式如下：

`reduction(操作符：变量列表)   `

其中，操作符可以是算术运算符、逻辑运算符或函数运算符，变量列表中列出了需要进行归约操作的变量。这些变量在并行区域中被定义为「私有变量」，但它们「不能同时出现」在所在并行区域的 「Private 子句」中。

在 Fortran 中，Reduction 子句涉及的主要运算符及其建议的变量初始值如下表所示：

运算类别

运算符

初始值

算术运算

+

0

算术运算

\-

0

算术运算

\*

1

逻辑运算

.AND.

.TRUE.

逻辑运算

.OR.

.FALSE.

逻辑运算

.EQV.

.TRUE.

逻辑运算

.NEQV.

.FALSE.

函数运算

MIN

尽量大的正数

函数运算

MAX

尽量小的负数

二进制运算

IAND

所有位均为1

二进制运算

IOR

0

二进制运算

IEOR

0

## 执行过程

Reduction 子句的运行过程可以归纳为以下几个步骤：

1.  「初始化阶段」：在并行区域的开始处，将Reduction子句变量列表中的变量定义为私有变量。各子线程拥有这些变量的一个私有副本，并初始化这些副本。初始值的确定取决于指定的运算符，由用户根据具体需要指定。
    
2.  「并行计算阶段」：在并行过程中，各子线程通过指定的运算符进行规约计算，不断更新各自私有变量的副本。
    
3.  「归约阶段」：在并行区域的结束处，将各子线程的私有变量的副本通过指定的运算符进行规约计算，更新原始的变量列表。
    
4.  「结果传递阶段」：由主线程将Reduction子句变量列表中的变量带出并行区域。
    

## 应用示例

下面是一个使用Reduction子句进行累加求和、累乘求积以及求最大值的示例程序：

`program reduction_do     use omp_lib     implicit none     integer, parameter :: m = 4     integer :: tid, i     integer, dimension(:) :: a(m), b(m)     integer :: sum, pdt, abmax          call omp_set_num_threads(2)     !赋初值     a = [(i, i = 1, m)]     b = 100 + a     print *, "a = ", a     print *, "b = ", b          !求和     sum = 0     !$omp parallel do private(i, tid) shared(a) reduction(+: sum)     do i = 1, m       tid = omp_get_thread_num()       sum = sum + a(i)       print *, 'i, sum = ', i, sum, ' id = ', tid     end do     !$omp end parallel do     print *, 'sum = ', sum          !求积     pdt = 1     !$omp parallel do private(i, tid) shared(a) reduction(*: pdt)     do i = 1, m       tid = omp_get_thread_num()       pdt = pdt * a(i)       print *, 'i, pdt = ', i, pdt, ' id = ', tid     end do     !$omp end parallel do     print *, 'pdt = ', pdt          !求最大值     abmax = -10000     !$omp parallel do private(i, tid) shared(a, b) reduction(max: abmax)     do i = 1, m       tid = omp_get_thread_num()       abmax = max(abmax, a(i), b(i))       print *, 'i, abmax = ', i, abmax, ' id = ', tid     end do     !$omp end parallel do     print *, 'abmax = ', abmax   end program reduction_do   `

编译并运行，得到

 `a =            1           2           3           4    b =          101         102         103         104    i, sum =            1           1  id =            0    i, sum =            2           3  id =            0    i, sum =            3           3  id =            1    i, sum =            4           7  id =            1    sum =           10    i, pdt =            3           3  id =            1    i, pdt =            4          12  id =            1    i, pdt =            1           1  id =            0    i, pdt =            2           2  id =            0    pdt =           24    i, abmax =            3         103  id =            1    i, abmax =            4         104  id =            1    i, abmax =            1         101  id =            0    i, abmax =            2         102  id =            0    abmax =          104`

从程序和输出结果可以看出，上述程序具有如下特点：

-   由于对数组 a 和 b 只进行读操作，因此可将数组 a 和 b 定义为共享变量；由于对变量 sum、pdt 和 abmax 存在写操作，因此采用 Reduction 子句将变量 sum、pdt 和 abmax 定义成私有变量，并指定相应的运算符。这些私有变量不能再次出现在 Private 子句变量列表中，以避免重复定义。
    
-   在第一个 Reduction 并行区域开始处，将 Reduction 子句变量列表中的 sum 变量定义成私有变量，指定的运算符为 `+`。这样，各子线程均建立了各自的私有变量 sum 的副本，且它们的初始值为 0。如果指定的运算符为 `*`，则子线程私有变量 pdt 的副本的初始值为 1。如果指定的运算符为 `max`，则子线程私有变量 abmax 的副本的初始值为一个尽量小的负数，如在本例中的 -1000。
    
-   子线程 0 负责（i = 1, 2），利用指定的 `+` 运算符进行累加运算，不断更新私有变量 sum 的副本，最终子线程 0 的私有变量 sum 的副本的值为 1 + 2 = 3；同理，子线程 1 负责（i = 3, 4），累加结果为 3 + 4 = 7，此结果保存在子线程 1 的私有变量 sum 的副本中；在 do 循环结束处，将各子线程的私有变量 sum 的副本通过指定的运算符 `+` 进行运算，从而得到各子线程的私有变量 sum 的副本的和，即 3 + 7 = 10。最后更新 Reduction 子句变量列表中变量 sum＝10，并传递给下面串行区的同名原始变量 sum。
    
-   累乘求积和求最大值的并行计算步骤与累加求和类似，在此不再赘述。
    

## 注意事项

在使用 Reduction 子句的过程中，需要注意以下几点：

1.  「变量的不确定性」：当第一个子线程到达指定了 Reduction 子句的共享区域或循环末尾时，原来的归约变量的值将变为不确定，并保持这个不确定状态直到归约计算的完成。
    
2.  「归约顺序的未指定性」：各个子线程的私有副本的值被归约的顺序是未指定的。因此，对于同一段程序的一次串行执行和一次并行执行，甚至两次并行执行来说，都无法保证得到完全相同的结果。这就需要子线程的同步操作，它会在循环末尾自动执行。因此，在循环中使用了 Reduction 子句时，不建议与 Nowait 子句同时使用。
    

## 小结

Reduction 子句是 OpenMP 中实现数据归约操作的重要工具，它通过将多个线程的计算结果归约到一个单一的值，显著提高了并行计算的效率。然而，正确使用 Reduction 子句需要对并行计算的同步和数据一致性有深入的理解。希望本文能帮助 Fortran 程序员更好地理解和应用 Reduction 子句，从而在多核并行计算中取得更好的性能。

通过上述介绍，我们可以看到 Reduction 子句在并行计算中的强大功能和灵活性。它不仅简化了程序员的编程工作，还提高了程序的执行效率。对于需要进行大规模数据归约操作的科学计算任务，Reduction 子句无疑是一个宝贵的工具。

# 

  

往期推荐

[

Fortran与OpenMP | 简化并行难题，解锁多核力量


](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486048&idx=1&sn=90d8b67d1e0cc5ac942cb1dea04c668c&chksm=c3379e1af440170c7e4cc8e5ddf2521cf483c5c51eec9687fa3e52256b750a9736f553077080&scene=21#wechat_redirect)

[

Fortran与OpenMP | 从"Hello World"启航


](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486155&idx=1&sn=b06fe984ba3261cfe833497c3016f69d&chksm=c3379eb1f44017a769325ef1dda174e2607b567bf1f2e6227f32a4192a31fa4006cb29219028&scene=21#wechat_redirect)