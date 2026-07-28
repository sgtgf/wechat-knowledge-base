# 现代Fortran探索之旅 | 查询变量占用内存大小


> 原文地址: [https://mp.weixin.qq.com/s/ReMCXbHlOrGRmU65\_7uTNQ](https://mp.weixin.qq.com/s/ReMCXbHlOrGRmU65_7uTNQ)

![](现代Fortran探索之旅___查询变量占用内存大小_images/img_000_8bcddb233e93.jpg)

  

在计算机编程的世界里，了解数据结构的内存占用对于优化代码性能、避免溢出错误以及进行精确的系统资源管理至关重要。与C语言中通过`sizeof()`运算符轻松获取对象内存大小不同，Fortran语言虽然没有直接对应的运算符，但它提供了一系列标准库函数和编译器扩展来帮助程序员完成这一任务。本文将深入探讨Fortran中如何查询变量占用的内存大小，涵盖Fortran 2008标准引入的`STORAGE_SIZE`和`C_SIZEOF`函数，以及部分编译器特有的`SIZEOF`扩展。

## Fortran中的内存占用查询

### _Fortran 2008标准函数_

「STORAGE\_SIZE」

自从Fortran 2008标准发布以来，`STORAGE_SIZE`函数成为查询变量内存占用的重要工具。此函数以位（bits）为单位返回其参数的存储大小，适用于任何类型的标量或数组。其基本语法如下：

`RESULT = STORAGE_SIZE(A [, KIND])   `

其中，`A`可以是任意类型的标量或数组，而可选参数`KIND`是一个标量整型常量表达式，用于指定返回值的整型种类。值得注意的是，当`A`是数组时，`STORAGE_SIZE`返回的是数组单个元素所占的位数，而非整个数组的总位数。这在需要了解数组元素基础大小时非常有用，但在需要整体数组占用空间时需手动计算。

「C\_SIZEOF」

同样出自Fortran 2008标准，`C_SIZEOF`函数位于`ISO_C_BINDING`模块中，用于计算参数占用的存储空间，单位是字节（bytes）。它的用法与C语言的`sizeof`相似，但更适用于跨语言接口的情况。语法如下：

`RESULT = C_SIZEOF(X)   `

这里，`X`只能是_与C语言可互操作的数据实体_，即那些可以在Fortran和C之间传递的数据类型，包括基本类型、数组、指针等。`C_SIZE_OF`不仅考虑了数据的实际大小，还考虑了数据对齐因素，因此它返回的结果通常反映了实际内存布局，这对于与C语言交互尤其重要。

### _编译器扩展_

「SIZEOF」

除了上述标准函数外，GNU和Intel Fortran等编译器还提供了一个非标准的扩展`SIZEOF`，用于计算参数占用的存储字节数。尽管它不是Fortran标准的一部分，但在许多情况下提供了便捷的使用方式，特别是当需要快速查看变量大小时。其使用方法如下：

`RESULT = SIZEOF(X)   `

与`C_SIZE_OF`类似，`SIZEOF`也返回参数的字节数，但它假设数组是连续的，并且对于包含指针或可分配成员的派生类型，其返回值不包括这些成员指向的数据存储大小。此外，如果参数具有多态性，`SIZEOF`会根据动态类型返回大小。

## 实战演练

为了更好地理解这些函数的应用，我们可以通过一个简单的Fortran程序来演示它们的使用。以下示例中，我们定义了一个整型数组`a`和一个包含不同数据类型成员的自定义类型`my_type`，并分别使用`STORAGE_SIZE`、`SIZEOF`，以及`C_SIZE_OF`来查询它们的内存占用。

`program MemorySizeDemo     use iso_c_binding, only: c_sizeof     implicit none     integer :: a(10) ! 定义一个包含10个整数的数组     type :: my_type       integer :: i       real(8) :: d       character :: c     end type my_type     type(my_type) :: v ! 定义一个自定义类型变量        ! 查询变量a的内存占用     print *, "storage_size(a) =", &       storage_size(a)/8, "bytes"  ! 转换位为字节     print *, "sizeof(a) =", sizeof(a), "bytes"        print *, "c_sizeof(a) =", c_sizeof(a), "bytes"     ! 查询变量v的内存占用       print *, "storage_size(v) =", &       storage_size(v)/8, "bytes"     print *, "sizeof(v) =", sizeof(v), "bytes"     ! print *, "c_sizeof(v) =", c_sizeof(v), "bytes"     ! v不是与C语言可互操作的数据实体，所以不支持c_sizeof   end program MemorySizeDemo   `

在上述示例中，我们首先定义了一个简单的整数数组`a`和一个包含整数、双精度浮点数及字符的自定义类型`my_type`。然后，我们利用三个不同的函数查询了这两个变量的内存占用。

编译并执行，得到以下结果：

 `storage_size(a) =           4 bytes    sizeof(a) =                   40 bytes    c_sizeof(a) =                   40 bytes    storage_size(v) =          24 bytes    sizeof(v) =                   24 bytes`

执行结果揭示了一个关键点：整数数组`a`的每个元素占用4字节（32位整型），而自定义类型`v`由于数据对齐等因素，实际占用24（8+8+8）字节，而不是直观上4+8+1=13字节的简单相加。

## 小结

Fortran语言通过`STORAGE_SIZE`、`C_SIZE_OF`以及部分编译器提供的`SIZEOF`函数，为开发者提供了强大的工具来查询变量的内存占用。正确使用这些函数不仅能帮助程序员优化代码，确保内存使用的高效，还能在处理跨语言交互时避免潜在的兼容性问题。理解这些函数的细微差异和适用场景，是每一位致力于高性能计算和系统级编程的Fortran开发者不可或缺的知识点。

  

![](现代Fortran探索之旅___查询变量占用内存大小_images/img_001_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。