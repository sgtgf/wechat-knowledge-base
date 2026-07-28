# 实测 | Fortran 中常用的 4 种时间函数


> 原文地址: [https://mp.weixin.qq.com/s/wEjdz0WR0BmqxVkMjH9ABQ](https://mp.weixin.qq.com/s/wEjdz0WR0BmqxVkMjH9ABQ)

![](实测___Fortran_中常用的_4_种时间函数_images/img_000_8bcddb233e93.jpg)

在现代科学计算与工程应用领域中，Fortran 作为一种历史悠久且功能强大的编程语言，至今仍被广泛使用。为了帮助开发者更好地理解和控制程序的执行过程，Fortran 提供了一系列用于测量时间的功能。本文将详细介绍在 Fortran 中常用的 4 种时间函数：`seconds()`, `system_clock()`, `cpu_time()` 以及 `date_and_time()`，并提供相应的示例代码和解释。

## seconds

函数 `seconds(x)` 用于测量自某个参考时间以来所经过的时间（以秒为单位）。它的返回值是一个单精度实数，而参数 x 是参考时间，单位是秒。

它的基本格式为：

`seconds(time=参考时间)`

使用 `seconds()` 测量程序执行时间的基本步骤如下：

-   在要测量的处理执行之前调用`seconds()`，设置参考时间。
    
-   当要测量的处理结束时，再次调用`seconds()`，获取当前时间。
    
-   如果如果设置的参考时间为 `0.0`，则再次调用得到的当前时间即为程序的执行时间。
    

「示例代码」:

`program main     implicit none     real(kind=4) time_begin,time_end     time_begin = secnds(0.0)     call sleep(1)     time_end = secnds(time_begin)     print *,'Elapsed Time = ', time_end, ' sec'   end program main   `

这里使用了`sleep(秒数)`，会使程序的执行停止指定的秒数。

采用 Intel 和 gfortran 两种不同编译器的编译后，执行结果如下所示：

`Intel    Elapsed Time =         1.002469  sec      gfortran    Elapsed Time =    1.00000000      sec   `

测试过程中发现，对于gfortran编译器，「参数 x 只能是单精度实数」，否则会出现编译错误。而 Intel 编译器则没有此限制，使用双精度实数也是可以的。

## sytem\_clock

子程序 `system_clock()`可以获得从某个基准时间点开始的经过时间的计数（整数），还可以获取每秒的计数次数（整数）。基本格式为：

`system_clock([count=当前计数, count_rate=每秒计数, count_max=计数最大值])`

-   它以计数（整数）为单位获取从某个基准时间点开始的经过时间。
    
-   将整数类型变量传递给`count_rate`参数可获得每秒的计数次数。
    
-   `count_max`是计数的最大值，超过此值计数将返回为 0。
    

要使用`system_clock()`测量程序的执行时间，可以考虑以下步骤：

-   在要测量的处理执行之前调用`system_clock()`。此时，可同时获取每秒的计数次数。
    
-   当要测量的处理结束时，再次调用`system_clock()`。
    
-   计算结束后的计数与执行前的计数之差，并除以每秒的计数次数以转换为秒。
    

「示例代码」:

`program main     implicit none     integer(kind=4) :: time_begin, time_end, CountPerSec, CountMax     !integer(kind=8) :: time_begin, time_end, CountPerSec, CountMax          call system_clock(time_begin, CountPerSec, CountMax)     call sleep(1)     call system_clock(time_end)          print *,time_begin, time_end, CountPerSec, CountMax     print *,real(time_end - time_begin)/CountPerSec,"sec"   end program main   `

采用不同编译器的编译后，执行结果如下所示：

-   当整数类型 「kind=4」 时：
    

`Intel      842680600   842690610       10000  2147483647           1.001000 sec      gfortran      272449578   272450578        1000  2147483647      1.00000000     sec   `

-   当整数类型 「kind=8」 时：
    

`Intel         1724726191871000      1724726192871000               1000000   9223372036854775807           1.000000 sec      gfortran           2732513152371        2732523160760             10000000  9223372036854775807      1.00083888     sec   `

从上面的执行示例中可以看出，

-   不同编译器的基准时间点是不同的。
    
-   不同编译器的每秒计数次数也不相同。
    
-   随着整数参数类型的改变，同一编译器的返回值也会发生变化。
    
-   该子程序可以提供很高的测量精度：每秒计数次数为 1000 意味着计时周期是 1 毫秒，1000000 意味着计时周期是 1 微秒。
    

因此，我们需要明白，通过`system_clock()`可以获得高精度的时间测量结果，同时它提供的数值（基准时间点、每秒计数次数）随编译器变化很大，使用时务必要谨慎。

## cpu\_time

子程序`cpu_time()`可以以秒为单位获得从某个基准时间点开始的 CPU 时间。

基本格式为：

`cpu_time(time=经过秒数)`

与`system_time()`类似，使用`cpu_time()`按照以下步骤测量执行时间：

-   在要测量的处理执行之前调用`cpu_time()`。
    
-   当要测量的处理结束时，再次调用`cpu_time()`。
    
-   计算结束后的时间与执行前的时间之差。
    

「示例代码」:

`program main     implicit none          real(kind=4) :: time_begin,time_end          call cpu_time(time_begin)     call sleep(1)     call cpu_time(time_end)          print *,time_begin, time_end     print *,time_end - time_begin,"sec"   end program main   `

采用不同编译器的编译后，执行结果如下所示：

`Intel       0.000000E+00    0.000000E+00       0.000000E+00 sec      gfortran      0.00000000       0.00000000      0.00000000     sec   `

虽然不需要对获得的数值进行换算，但从执行结果来看，这也是一个麻烦的子程序。

`sleep()`前后的时间相等，结果执行时间为 0。`cpu_time()`正如其名，获取的是 CPU 时间。`sleep()`会停止进程运行，所以 CPU 时间没有增长。也就是说，使用`cpu_time()`测量执行时间时，获得的不是实际时间（时钟经过的时间），而是从实际时间中扣除 CPU 不工作的时间（如`sleep`或`read`导致的标准输入等待时间等）后的时间。

为了确认这一点，在调用`cpu_time()`之前放置一个耗时的处理：将矩阵的所有元素都用随机数确定，并计算这些矩阵的矩阵乘积。测试代码如下：

`program main     implicit none          real(kind=4) :: time_begin, time_end          integer,parameter :: N = 1000     real(kind=8),allocatable :: a(:,:), b(:,:), c(:,:)              allocate(a(N,N))     allocate(b(N,N))     allocate(c(N,N))          call random_number(a)     call random_number(b)     c = matmul(a,b)         call cpu_time(time_begin)          call random_number(a)     call random_number(b)     c = matmul(a,b)          call cpu_time(time_end)          print *,time_begin, time_end     print *,time_end - time_begin,"sec"          deallocate(a)     deallocate(b)     deallocate(c)   end program main   `

采用不同编译器的编译后，执行结果如下所示：

`Intel       1.406250E-01    2.812500E-01       1.406250E-01 sec      gfortran      4.68750000E-02   9.37500000E-02      4.68750000E-02 sec   `

我们发现，此时`time_begin` 和 `time_end` 的值确实发生了变化，由此即可计算出程序运行所经过的时间。

## date\_and\_time

子程序 `date_and_time()` 可以获得它被调用时的年、月、日和时间（时、分、秒、毫秒）。通过设置参数，可以灵活选择并获取所需的日期和时间信息。这对于记录事件发生的具体时间非常有用。它的基本格式为：

`date_and_time([date=年月日, time=时分秒毫秒, zone=时差, values=年-月-日-时差-时-分-秒-毫秒])`

-   `date`是 yyyymmdd 格式的「字符串」。
    
-   `time`是 hhmmss.fff 格式的「字符串」。
    
-   `zone`是 shhmm 格式的相对于标准时间的时差的「字符串」。
    
-   `value`是具有 8 个元素的整数类型数组，分别包含年、日、时、时差（分）、分、秒、毫秒。
    

首先，采用以下代码确认一下返回结果的具体格式：

`program main     implicit none          character(8)  :: date! yyyymmdd     character(10) :: time! hhmmss.fff     character(5)  :: zone! shhmm     integer :: value(8)  ! yyyy mm dd diff hh mm ss fff          call date_and_time(date, time, zone, value)     print *,date     print *,time     print *,zone     print *,value   end program main   `

采用不同编译器的编译后，执行结果如下所示：

`Intel    20240827    112921.132    +0800           2024           8          27         480          11          29          21         132      gfortran    20240827    112855.069    +0800           2024           8          27         480          11          28          55          69   `

需要注意，`date`和`time`看起来像数值，但它们是字符串。`zone`是相对于标准时间的时差，Intel 和 gfortran 编译器采用的都是世界标准时间。

要以数值形式获取个别值，可以将整数类型数组传递给`values`参数。在上面的执行结果中，可以看到数组`value(8)`的每个元素都获得了整数值。其中时差与`zone`不同，单位是分钟。在上面的执行结果中，可以看到 +0800 小时变为了 480。

如果要使用`values`参数，在`enum`中为索引赋予有意义的名称可以提高便利性。

`program main     implicit none          enum, bind(c)       enumerator :: Year = 1       enumerator :: Month       enumerator :: Day       enumerator :: TimeDifference_min       enumerator :: Hour       enumerator :: Minute       enumerator :: Second       enumerator :: Millisecond     end enum          integer :: value(8)          call date_and_time(values = value)     print '(I2,A,I2)',value(Hour),":",value(Minute)     !格式输出，例如：11:38   end program main   `

与`system_clock()`和`cpu_time()`一样，使用`date_and_time()`获取执行前后的时刻，然后就可以计算经过的时间。如果只是跨越一天左右，那没什么难度；但如果跨越一个月，那就需要考虑每个月的具体天数了，使用时务必要仔细研究。

## 小结

每种时间函数都有其特定的应用场景。在选择使用哪种时间函数时，最重要的是根据实际需求来决定。例如，如果程序需要运行几十秒钟，那么使用 `seconds()` 就足够了；如果需要更精确的计数器时间，则 `system_clock()` 更为合适；如果关注的是 CPU 使用情况，那么 `cpu_time()` 是最佳选择；最后，如果需要记录确切的日期和时间，则 `date_and_time()` 是必需的。希望本文能够帮助你更好地理解这些函数的工作原理，并在你的项目中发挥重要作用。

# 推荐阅读

![](实测___Fortran_中常用的_4_种时间函数_images/img_001_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。

![](实测___Fortran_中常用的_4_种时间函数_images/img_002_dae872c29c08.jpg)