# 与时俱进的Fortran：可变大小数组与字符串


> 原文地址: [https://mp.weixin.qq.com/s/W2U347AYZcfznly8LVHDEA](https://mp.weixin.qq.com/s/W2U347AYZcfznly8LVHDEA)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVV0Z1EwtEn9svQy6dNAOcDdXLtaaGiaL0xrianiblaSbiavmRgSmJJF4vBFxIgIrlqmxUg2dSn9wa4RwQ/640?wx_fmt=jpeg)

在Fortran编程领域中，传统的数组和字符串往往需要预先设定固定的长度，这在处理不同长度的数据时带来了一定的局限性。不过，随着Fortran标准的进步，尤其是从Fortran 2003版开始引入的创新特性，程序员可以利用可变大小数组和可变长度字符串来更加便捷高效地处理各种动态数组和字符串。

## 可变大小数组

首先，我们关注可变大小数组这一核心特性。以前我们需要使用 `ALLOCATE` 和 `DEALLOCATE` 语句手动为动态数组分配和释放内存。但从Fortran 2003开始，只要简单地给动态数组赋值，就可以实现数组的自动分配和释放。这意味着数组的大小无需预先指定，而是在实际赋值时根据数据量自动调整。

具体来说，假如要将一个表达式赋给一个同样维数的动态数组，那么如果该数组没有分配，将自动为数组分配正确的结构，或者如果先前分配的结构和要求不一致，系统将会自动地释放空间，并重新分配给它一个正确的结构，不再需要`ALLOCATE` 和 `DEALLOCATE` 语句。

例如：

`program main     integer,allocatable::a(:)     ! 声明一个可变长度的整数数组     a=[1,2] ! 这里，数组将自动分配长度为2     print*, "a=", a     print*, "size=", size(a)     a=[1,2,3] ! 更改赋值后，数组将自动重新分配长度为3     print*, "a=", a     print*, "size=", size(a)     a=[a,4] !向数组中追加元素     print*, "a=", a      print*, "size=", size(a)   end program main   `

编译并执行，结果如下：

> a=           1           2  
> size=           2  
> a=           1           2           3  
> size=           3  
> a=           1           2           3           4  
> size=           4

这里，在程序中声明一个未指定长度的整数数组 `a(:)`，当我们将 `[1,2]` 赋值给它时，数组会自动变为长度为2；然后，若改为 `[1,2,3]`，数组就会智能地扩展至长度为3；甚至可以继续向数组末尾追加元素，如同Python中的列表**append**功能，整个过程中无需显式调用 `ALLOCATE` 和 `DEALLOCATE`。同时，可以使用 `size()` 函数查询数组当前大小。

另外，其他和动态数组相关的函数也是完全适用的，比如用`allocated()`函数来查询其分配情况，用`dellocate()`函数来释放空间。

注意，如果动态变量和将要赋值给它的表达式有相同的维数，才会自动进行分配和释放的操作。如果维数不同，赋值语句会产生编译错误。

不得不说，这种动态数组的可变大小的特点极大地提高了程序的灵活性，尤其适用于那些数组长度无法事先确定的情况。

## 可变长度字符串

接下来，我们探讨可变长度字符串（也叫递延长度字符串，deferred-length string）的使用。

在Fortran早期版本中，字符串长度是固定的，多余空格会被填充，长度不足则会导致内容截断或需反复使用 `trim()` 函数去尾部空格。而在Fortran 2003及之后版本中，引进了可变长度字符串的概念，允许字符串在程序运行期间根据需要动态改变长度，就像可变大小数组一样方便。

可变长度字符串必须拥有`allocatable`或者`pointer`属性，例如可以使用以下格式进行声明：

`character(len=:), allocatable :: myString   `

在上述代码中，`myString`被定义为一个可变长度字符串，其长度由冒号`:`表示。

稍后，可以直接对`myString`进行赋值，编译器会自动分配合适的内存空间。若后续需要增加字符串长度，如通过连接操作`myString// "..."`，编译器会自动扩展`myString`的长度以容纳新的内容。这样就不必担心字符串过短导致内容丢失或过长造成资源浪费的问题。例如：

`myString = "Welcome"    myString = "Welcome to"   myString = myString // "Fortran World"   print*, myString, len(myString)   `

## 效率考量

虽然可变大小数组和可变长度字符串极大提升了程序设计的灵活性，特别是在处理未知长度数据时表现突出，但这种灵活性并非免费午餐，它们相较于静态大小的数组和字符串通常会消耗更多资源。

下面是一个简单的测试，对比了可变大小数组赋值和传统的动态数组赋值方法的耗时情况：

`program main     real t0,t1     integer i     block       integer,allocatable::a(:)       call CPU_TIME(t0)       a=[1]       do i=2,100000         a=[a,i]       end do       ! print*, a(100000),size(a)       call CPU_TIME(t1)       print*, "TOTAL_TIME=", t1-t0     end block          block       integer,allocatable::a(:)       call CPU_TIME(t0)       allocate(a(100000))       do i=1,100000         a(i)=i       end do       ! print*, a(100000),size(a)       call CPU_TIME(t1)       print*, "TOTAL_TIME=", t1-t0     end block   end program main   `

编译并执行，结果如下：

 `TOTAL_TIME=   7.71875000    TOTAL_TIME=   0.00000000`

很明显，使用可变大小数组的赋值方式相比传统的动态数组赋值方式，前者所需的时间显著增长。可变长度字符串的情况也是类似的。因此，在Fortran编程的时候，我们还是要根据具体问题和自身需要，灵活选择是否使用可变大小的数组和字符串。

## 小结

综上所述，无论是可变大小数组还是可变长度字符串，它们均为Fortran提供的重要现代化工具，有助于简化内存管理、提高代码清晰度和可维护性。尤其在处理不确定长度数据的时候，这两种特性大大增强了Fortran语言的实用性。在编写Fortran程序时，合理利用这些特性，无疑会使代码更具弹性，提高编程体验和程序性能。不过，也要注意它们可能带来的效率问题，并根据实际情况做出最佳选择。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。