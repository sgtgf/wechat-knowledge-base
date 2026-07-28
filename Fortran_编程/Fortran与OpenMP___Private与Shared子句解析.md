###   


点击上方蓝字  关注我们


在高性能计算领域，Fortran凭借其对数值计算的强大支持和悠久历史，依然是科学计算和工程应用中的重要编程语言。随着多核处理器的普及，利用并行计算技术来加速计算密集型任务变得日益重要。OpenMP（Open Multi-Processing）作为一种广泛应用于共享内存架构上的并行编程模型，为Fortran程序员提供了一套简洁而强大的工具，用以实现代码的并行化。本文将深入探讨OpenMP的核心概念之一——数据环境，特别是`private`和`shared`子句的应用，通过具体示例帮助读者理解这些概念。

## 数据环境概述

OpenMP程序的一个显著特点是内存空间的共享，这意味着多个线程能够直接访问共享空间中的变量，从而实现线程间的数据通信。在此框架下，`private`和`shared`变量成为并行计算的基石，它们分别代表线程独有的私有副本和所有线程共用的共享资源。此外，`default`子句作为补充，为并行区域内的数据访问权限提供了默认配置。


## Private子句：线程间的隔离

`private`子句定义了在并行区域中，每个线程都将拥有特定变量的独立副本，这些副本彼此隔离。这意味着，当多个线程同时执行相同的代码块时，对这些变量的修改不会互相影响。这对于避免数据竞争和确保线程安全至关重要。

「示例」:

```
program example_private  use omp_lib  implicit none  integer :: tid = 10    print *, "Before parallel, tid = ", tid    !$omp parallel private(tid)    tid = omp_get_thread_num()    print *, "tid = ", tid  !$omp end parallel  print *, "After parallel, tid = ", tidend program example_private
```

「运行结果」：

```
> set OMP_NUM_THREADS=4> example_private.exe Before parallel, tid =           10 tid =            0 tid =            1 tid =            3 tid =            2 After parallel, tid =           10
```

在上述代码中，`tid`变量被声明为`private`，因此每个线程都会获得其独立的副本，打印出各自线程ID对应的`tid`值。并行结束后，主线程中的`tid`值不受并行区域的影响，依然保持初始值`10`，体现了私有变量的独立性。


## Shared子句：并行中的协作

与`private`相对，`shared`子句指定了那些在线程间共享的变量。这些变量拥有同一内存地址，任何线程对它们的修改都将影响其他线程。为了防止并发访问时的数据不一致性，对共享变量的写操作必须采取同步措施，比如使用`critical`区域（同一个时间只允许一个线程执行区域中的语句）。这是并行处理中实现数据通信和协作的关键机制。

「示例」:

```
program example_shared  use omp_lib  implicit none  integer :: tid, shared_var = 0  !$omp parallel shared(shared_var) private(tid)    tid = omp_get_thread_num()    print *, "tid = ", tid    !$omp critical      shared_var = shared_var + tid    !$omp end critical    print *, "Shared_var = ", shared_var  !$omp end parallel  print *, "After parallel Shared_var = ", shared_varend program example_shared
```

「运行结果」：

```
> set OMP_NUM_THREADS=4> example_shared.exe tid =            2 Shared_var =            2 tid =            0 Shared_var =            2 tid =            1 Shared_var =            3 tid =            3 Shared_var =            6 After parallel Shared_var =            6
```

这里，`shared_var`被多个线程累加其线程ID值，但由于使用了`critical`指令，确保了每次只有一个线程能访问并修改`shared_var`，从而避免了数据竞争。

如果不使用`critical`指令，当线程数量比较多的时候，最终的累计结果将会出现无规律的错误值。大家可自行进行测试，以加深对共享变量的理解。

## Default子句：简化数据属性设定

在复杂的并行程序中，显式地为每个变量指定`private`或`shared`可能会很繁琐。`default`子句允许程序员为并行区域内的所有未明确指定属性的变量设置默认的共享状态。

-   `default(none)`表示不自动分配共享或私有属性，需要显式指定；
    
-   `default(shared)`表示传入并行区域内的同名变量均是共享变量，各线程不会产生变量的私有副本；
    
-   `default(private)`表示传入并行区域内的同名变量均是私有变量，而不是共享变量，由各子线程产生各自的私有变量副本。
    

如果不加以说明，并行区域内变量都是默认公有的。但是只有一个例外，「循环指标变量」默认是私有变量，无需自己另外声明。

通常，为了清晰性和安全性，推荐使用`default(none)`并显式指定每个变量的属性。

## 小结

掌握OpenMP中的数据环境管理，特别是`private`, `shared`, 和 `default`子句的应用，对于编写高效、正确的并行Fortran程序至关重要。通过上述示例，我们不仅了解了这些关键字的基本用法，还深入探讨了它们在实际编程中的细微差别和最佳实践。记住，合理规划数据的访问权限是并行程序设计中的关键一环，它直接影响到程序的性能、正确性和可维护性。继续探索和实践，你会发现OpenMP为Fortran程序带来的并行计算世界充满无限可能。

# 往期精选