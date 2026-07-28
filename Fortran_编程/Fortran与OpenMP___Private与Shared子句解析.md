# Fortran与OpenMP | Private与Shared子句解析


> 原文地址: [https://mp.weixin.qq.com/s/z9ZVVV2UQc3MJtVdugg5PA](https://mp.weixin.qq.com/s/z9ZVVV2UQc3MJtVdugg5PA)

###   

![](https://mmbiz.qpic.cn/mmbiz_gif/FYIoDNM5kDM1JN5ytib41Rxtf2icJHLeicngNfPvWLpgAPh6DEvfqAEXR9N0TeBb6C0PUODNd3bHJt006etyh2BAg/640?wx_fmt=gif&random=0.5207702098580795)

点击上方蓝字  关注我们

![](https://mmbiz.qpic.cn/mmbiz_png/FYIoDNM5kDM1JN5ytib41Rxtf2icJHLeicnl2rUicg56XjvOOBibzm5BDyUNep8QwqWNPuqRP2Ua3lQPMBcING28Sbg/640?wx_fmt=png&random=0.9816884813078028)

在高性能计算领域，Fortran凭借其对数值计算的强大支持和悠久历史，依然是科学计算和工程应用中的重要编程语言。随着多核处理器的普及，利用并行计算技术来加速计算密集型任务变得日益重要。OpenMP（Open Multi-Processing）作为一种广泛应用于共享内存架构上的并行编程模型，为Fortran程序员提供了一套简洁而强大的工具，用以实现代码的并行化。本文将深入探讨OpenMP的核心概念之一——数据环境，特别是`private`和`shared`子句的应用，通过具体示例帮助读者理解这些概念。

## 数据环境概述

OpenMP程序的一个显著特点是内存空间的共享，这意味着多个线程能够直接访问共享空间中的变量，从而实现线程间的数据通信。在此框架下，`private`和`shared`变量成为并行计算的基石，它们分别代表线程独有的私有副本和所有线程共用的共享资源。此外，`default`子句作为补充，为并行区域内的数据访问权限提供了默认配置。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVX5icIdxke0r1FbibMpRQchu0a18q7udTPXgpWWL5z8XpT1vRycQqqFOfRTtkqVVDBlTgOSHibWwwrvg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1&random=0.9618621530262874&random=0.9013066667831051&random=0.38866931453860354&random=0.2635083660104134)

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

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVVlacYAoNhz6bueZny018Cw0XJ0Ud3kCcIVVzouay1NJoTUQavibXfB7SccjOxelF5lniastVfQo8yw/640?wx_fmt=jpeg&random=0.9457221184860769&random=0.9113607789612483&random=0.8529454002052426&random=0.8875534890077537)

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

[](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486048&idx=1&sn=90d8b67d1e0cc5ac942cb1dea04c668c&chksm=c3379e1af440170c7e4cc8e5ddf2521cf483c5c51eec9687fa3e52256b750a9736f553077080&scene=21#wechat_redirect)

[\* Fortran与OpenMP | 简化并行难题，解锁多核力量](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486048&idx=1&sn=90d8b67d1e0cc5ac942cb1dea04c668c&chksm=c3379e1af440170c7e4cc8e5ddf2521cf483c5c51eec9687fa3e52256b750a9736f553077080&scene=21#wechat_redirect)  

[\* Fortran与OpenMP | 从"Hello World"启航](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247486155&idx=1&sn=b06fe984ba3261cfe833497c3016f69d&chksm=c3379eb1f44017a769325ef1dda174e2607b567bf1f2e6227f32a4192a31fa4006cb29219028&scene=21#wechat_redirect)

# 推荐阅读

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg&random=0.5525099211882534&random=0.9864757539671867&random=0.7575622890331561&random=0.6526959208642249&random=0.3992112753232937)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。