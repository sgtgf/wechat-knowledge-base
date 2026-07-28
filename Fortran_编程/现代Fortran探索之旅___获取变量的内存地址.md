# 现代Fortran探索之旅 | 获取变量的内存地址


> 原文地址: [https://mp.weixin.qq.com/s/2Kt5HVjRpljGT52QXVBXLQ](https://mp.weixin.qq.com/s/2Kt5HVjRpljGT52QXVBXLQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVV0Z1EwtEn9svQy6dNAOcDdXLtaaGiaL0xrianiblaSbiavmRgSmJJF4vBFxIgIrlqmxUg2dSn9wa4RwQ/640?wx_fmt=jpeg)

  

在现代计算环境中，了解并操作数据在内存中的确切位置有时是必要的，尤其是在进行底层优化或跨语言交互时。Fortran，作为一种历史悠久且持续演进的编程语言，提供了多种途径来实现这一目的。本文将深入探讨如何在Fortran中获取变量的内存地址，并通过实例展示其应用，同时比较非标准方法与Fortran 2003规范引入的标准方法。

## 什么是地址？

计算机的内存可以视作一个由连续排列的位（bit）组成的线性空间。通常，这些位被打包成8位一组，称为字节（byte）。「内存地址」是这些字节的索引，它从0开始编号，为程序提供了一个访问特定数据存储位置的方式。

在Fortran程序中，通常我们通过声明变量，让编译器自动管理这些变量在内存中的分配，无需直接操作地址。但在一些特殊场景下，比如与C语言的互操作，需要显式地传递变量地址，为此Fortran提供了相应的功能。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVWnnI4iaic1mSYzOcyCmjw4TW91RSofeT3b9SiaeQFElQT8q4hGZsYRepa95H1LFJ9DTL5fngL4oWcnw/640?wx_fmt=jpeg&from=appmsg)

## 获取地址的函数

### 「非标准函数 `loc()`」

`loc()` 函数是一个非标准但广泛使用的内置函数，它能够返回任何变量或常数的内存地址，以整数值形式呈现。其使用非常直接，无需特殊准备即可调用。需要注意的是，返回的地址长度依赖于操作系统是32位还是64位，分别对应最大可表示的地址空间为4GB或更大的范围。

下面是一个显示变量 `x` 分配的地址的程序示例：

`program locExample     implicit none     real :: x = 1.2345     print *, 'Address of x is', loc(x)   end program locExample   `

编译并运行，得到

 `Address of x is      140697729314816`

执行该程序时，输出的地址值会随每次运行而变化。

### 「标准函数 `c_loc()`」

随着Fortran 2003对C语言互操作性的增强，`iso_c_binding`模块中的`c_loc()`函数成为获取变量地址的标准方式。

使用`c_loc()`时，变量必须具有`target`属性，并且函数返回的类型是`cptr`而非普通整数。为了方便显示这个地址，可以借助`transfer`函数配合`iso_fortran_env`模块中的`int32`或`int64`定义来转换类型。

下面是一个使用 `c_loc()` 显示变量 `x` 分配的地址的程序示例：

`program cLocExample     implicit none     real, target :: x     x = 1.2345          block       use, intrinsic :: iso_c_binding       use, intrinsic :: iso_fortran_env       ! 使用transfer函数将cptr类型的地址转换为整型       print *, 'address of x is', &                transfer(c_loc(x), 0_int64)      end block                  print *, 'address by loc ', loc(x)    end program cLocExample   `

编译并运行，得到

 `address of x is         680899115580    address by loc          680899115580`

此例中，`c_loc()`与`loc()`返回相同的地址值，展示了两种方法的一致性。

## 应用实例

理解变量地址的一个重要方面是它与不同性质的变量存储区域的关系，即静态变量（static variable）、栈变量（stack variable）和堆变量（heap variable）。

-   静态变量在编译和链接时静态分配，并在整个执行期间一直存在
    
-   栈变量随函数调用自动在栈上分配和释放
    
-   堆变量通常需在运行时由程序员明确地指定在堆上分配和释放
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVWnnI4iaic1mSYzOcyCmjw4TWgsv9XoymciaAHpiaemBt76ibNf9qeuVpBYWUX5x31LljLytdXo8fcu1yg/640?wx_fmt=jpeg)

下面的示例通过Fortran中典型的全局变量、局部变量和动态变量，展示了这三种存储类型的地址差异。

`program memoryLayoutExample     implicit none     real :: x_static = 1.234, y_static = 5.678          block       real :: x_stack, y_stack       real, allocatable :: x_heap, y_heap       x_stack = 111.111       y_stack = 222.222              allocate(x_heap, y_heap) ! 显式分配                  x_heap = 333.333       y_heap = 444.444              print *, 'static', loc(x_static), loc(y_static)       print *, 'stack ', loc(x_stack) , loc(y_stack)       print *, 'heap  ', loc(x_heap)  , loc(y_heap)              call move_alloc(x_heap, y_heap)           print *, 'after move_alloc'       print *, 'heap  ', loc(x_heap)  , loc(y_heap)          deallocate(y_heap) ! 显式释放 y_heap    ! x_heap已在move_alloc时自动释放     end block        end program memoryLayoutExample   `

编译并运行，得到

 `static      140698829336576      140698829336580    stack          545397930652         545397930648    heap          2326074720704        2326074720736    after move_alloc    heap                      0        2326074720704`

通过执行上述程序，我们可以观察到不同存储区域的变量地址差异显著，尤其是通过`move_alloc`内置子程序演示了堆变量地址的动态调整。

## 小结

本文介绍了在Fortran中获取变量地址的两种主要方法：非标准的`loc()`函数和符合Fortran 2003标准的`c_loc()`函数，并通过实例展示了它们的使用。进一步地，通过探索变量地址与存储区域的关系，我们得以窥见Fortran程序在内存管理上的灵活性和复杂性。尽管标准的`c_loc()`在互操作场景下更为正式，但非标准的`loc()`在日常快速获取地址需求中依然显得便捷。理解这些工具及其应用场景，对于编写高效、兼容性强的Fortran代码至关重要。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。