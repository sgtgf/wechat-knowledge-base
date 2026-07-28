在高性能计算领域，并行编程技术是提高程序运行效率的关键手段之一。OpenMP（Open Multi-Processing）作为一款广泛应用于共享内存并行系统的编程接口，为开发者提供了简单而强大的工具来实现多线程并行计算。本文将重点介绍 OpenMP 中的 `do` 指令，通过具体示例帮助 Fortran 程序员理解如何利用这一指令实现代码的高效并行化。

## Do 指令概述

`do` 指令是 OpenMP 中最常用的并行构造之一，专门用于循环的并行化。当编译器遇到带有`!$omp do`注释的循环时，会自动将该循环体分配给多个线程执行，每个线程负责处理循环的一部分迭代。这样可以显著加速循环密集型任务的执行速度，尤其是在处理大规模数据集或进行复杂计算时效果尤为明显。

### 「基本语法」

在 Fortran 中，使用 `do` 指令的基本格式如下：

```
!$omp parallel!$omp do [clause...]do i = start, end, step   ! 循环体end do!$omp end do!$omp end parallel
```

其中，`[clause...]` 表示可以附加的子句，用于控制并行行为，如指定循环调度策略、设置私有变量等。

### 「关键子句」

-   `schedule`：定义了如何将工作分配给各个线程。常见的选项包括 `static`（静态分配）、`dynamic`（动态分配）、`guided`（指导式分配）和`runtime`（运行时决定）。
    
-   `private`：声明一个或多个变量为私有的，即每个线程都有自己的副本。
    
-   `shared`：声明一个或多个变量为共享的，所有线程访问同一个变量。
    
-   `reduction`：用于指定一个操作符（如+、\*等），以及一个或多个变量，以实现跨线程的结果聚合。
    

关于以上子句的详细介绍，感兴趣的读者可以参考我们的往期文章：

# [Fortran与OpenMP | Private与Shared子句解析](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486338&idx=1&sn=5c765c558f4443148723bf79643c92b0&chksm=c3379ff8f44016eeb0406fdc92abd7e4bec2802ca3a5df81d8c5419da78053425f467b21b379&scene=21#wechat_redirect)

# [Fortran与OpenMP | Reduction子句解析](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486571&idx=1&sn=41c6a2478fcd7140cdd11b362709c157&chksm=c3379811f44011075b087551864e8fef14d67602935e6640061248780e03e259433a0777ad1f&scene=21#wechat_redirect)


## 实践案例

如果循环中不存在循环依赖，那么可以采用 `do` 指令对此循环进行并行。下面举一个例子说明采用 `do` 指令来实现数组相加运算的并行。

```
program do_array_plususe omp_libimplicit noneinteger, parameter :: m=10integer :: nthreads,tid,iinteger, dimension(1:m) :: a,b,ccall omp_set_num_threads(3)do i=1,m   a(i)=10*i   b(i)=i   tid=omp_get_thread_num()    nthreads=omp_get_num_threads()   print '(a,4(i6))','nthreads,tid,i,a(i)=',nthreads,tid,i,a(i)end doprint '(a)','------before parallel'print *!$omp parallel private(i,tid,nthreads) default(shared)!$omp dodo i=1,m   tid=omp_get_thread_num()    nthreads=omp_get_num_threads()   c(i)=a(i)+b(i)   print '(a,4(i6))','nthreads,tid,i,c(i)=',nthreads,tid,i,c(i)end do!$omp end do!$omp end parallelprint *print '(a)','------after parallel'tid=omp_get_thread_num() nthreads=omp_get_num_threads()print '(a,2(i6))','nthreads,tid       =',nthreads,tidend program do_array_plus
```

编译并执行上述代码后，运行结果如下：

```
nthreads,tid,i,a(i)=     1     0     1    10nthreads,tid,i,a(i)=     1     0     2    20nthreads,tid,i,a(i)=     1     0     3    30nthreads,tid,i,a(i)=     1     0     4    40nthreads,tid,i,a(i)=     1     0     5    50nthreads,tid,i,a(i)=     1     0     6    60nthreads,tid,i,a(i)=     1     0     7    70nthreads,tid,i,a(i)=     1     0     8    80nthreads,tid,i,a(i)=     1     0     9    90nthreads,tid,i,a(i)=     1     0    10   100------before parallelnthreads,tid,i,c(i)=     3     0     1    11nthreads,tid,i,c(i)=     3     0     2    22nthreads,tid,i,c(i)=     3     0     3    33nthreads,tid,i,c(i)=     3     0     4    44nthreads,tid,i,c(i)=     3     2     8    88nthreads,tid,i,c(i)=     3     2     9    99nthreads,tid,i,c(i)=     3     2    10   110nthreads,tid,i,c(i)=     3     1     5    55nthreads,tid,i,c(i)=     3     1     6    66nthreads,tid,i,c(i)=     3     1     7    77------after parallelnthreads,tid       =     1     0
```

从程序和输出结果可以看出，上述程序具有如下特点:

(1) 在对数组 `a` 和 `b` 的赋值循环中，由于未使用 `!$omp do` 指令，因此赋值循环全部由主线程 0 执行，并没有实现并行。

(2) 下图给出了利用 `!$omp do` 指令实现循环并行的过程。实际过程如下：如果要实现将一个 `do` 循环的工作量 (例如：i=1~10) 分配给不同线程，那么 `do` 循环必须位于并行区域中且在 `do` 循环体前增加 `!$omp do` 指令。这样就能实现对循环工作量的划分和分配。上面例子中循环指标变量 (i=1~10) 的工作量基本均匀地分配给了 3 个线程：主线程 0 负责 (i=1~4)，子线程 1 负责 (i=5~7)，子线程 2 负责 (i=8~10)。当 3 个线程都完成了各自的工作后，程序才继续往下执行。


(3) 在对循环进行并行时，循环指标变量 `i` 被定义成私有变量，数组 `a`、`b` 和 `c` 被定义为共享变量。如果不加以声明，循环指标变量 `i` 通常被默认为私有变量。

(4) 在遇到 `!$omp end do` 语句后，并行结束，程序重新由主线程 0 串行执行。

## 注意事项

在 `do` 指令的使用过程中，应注意以下事项：

(1) 在 `do` 指令的后面必须是 `do` 循环体，并且此 `do` 循环体必须位于 `!$omp parallel` 初始化的并行区域。

(2) 在 `do` 循环结束后的指令 `!$omp end do` 是可选项。如果没有显式的 `!$omp end do` 指令，则说明并行执行在紧接着 `parallel do` 指令后的 `do` 循环末尾结束。为了方便理解程序，建议在做 `do` 循环并行处理时在 `do` 循环末尾处添加 `!$omp end do` 语句。

(3) `do while` 循环结构或者没有循环指标变量的循环不能采用 `do` 指令进行并行。

(4) 循环的指标变量必须是整型变量。

(5) 循环步长必须进行整数加运算或者整数减运算，且加减的数值必须是一个循环不变量。

(6) 循环必须是单入口、单出口。即循环内部不允许出现能够到达循环之外的跳转语句，也不允许有外部的跳转语句到达循环内部。这里，`stop` 语句是一个特例，因为它将中止整个程序的执行。

(7) 如果不特别声明，并行区域内变量都是默认公有的。但是只有一个例外，循环指标变量默认是私有的，无需另外声明。

(8) 对于嵌套循环，在不存在数据竞争的情况下，尽量对最外面的循环指标变量进行并行化处理。这是因为完成这样一个嵌套循环只需建立一次线程组，从而节省了线程调度的时间消耗。

(9) 由于 `do` 指令在大多数情况下与一个独立的 `parallel` 指令一起使用。因此，OpenMP 提供了一个复合指令 `parallel do` 来方便编程人员的编程。

(10) 并不是所有的循环都需要用 `!$omp do` 进行并行化。当循环的计算量非常小时，如果采用并行处理，线程的调度所需要的时间消耗甚至大于计算本身的时间消耗，得不偿失。

(11) 并不是所有的循环都可以用 `!$omp do` 进行并行化。在对循环进行并行化操作前，必须保证数据在两次循环之间不存在数据相关性(循环依赖性或数据竞争)。当两个线程同时对一个变量进行操作且其中一个操作是写操作时，这两个线程就存在数据竞争关系。此时，读出的数据不一定就是前一次写操作的数据，而写入的数据也可能不是程序所需要的。例如，在下面的循环体内就存在数据竞争情况。

```
do i=1,9  a(i)=a(i)+a(i+1)end do 
```

下图表示采用 3 个线程对数组元素 `a(i)` 的值进行更新的情形。


主线程 0 从内存读取数组 `a(1)~a(4)`，并对数组 `a(1)~a(3)` 进行写操作；子线程 1 从内存读取数组 `a(4)~a(7)`，并对数组 `a(4)~a(6)` 进行写操作；子线程 2 从内存读取数组 `a(7)~a(10)`，并对数组 `a(7)~a(9)` 进行写操作。换言之，子线程 0 对数组元素 `a(4)` 进行读操作，而子线程 1 对数组元素 `a(4)` 进行写操作。因此，子线程 0 和子线程 1 对数组元素 `a(4)` 存在数据竞争。同理，子线程 1 和子线程 2 对数组元素 `a(7)` 存在数据竞争。

## 小结

通过本文的介绍，希望读者能够对 OpenMP 中的 `do` 指令有初步的认识，并能够在实际开发中合理运用这一强大的工具来提升程序的性能。当然，除了 `do` 指令之外，OpenMP 还提供了许多其他有用的特性，如数据共享属性控制、同步机制等，这些都是构建高效并行应用不可或缺的部分。随着多核处理器的普及，掌握并行编程技术对于现代软件开发来说越来越重要。