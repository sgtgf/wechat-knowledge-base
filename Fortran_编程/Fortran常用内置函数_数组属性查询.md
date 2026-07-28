# Fortran常用内置函数：数组属性查询


> 原文地址: [https://mp.weixin.qq.com/s/eG39eS3ouciyAF0DQ5u\_9g](https://mp.weixin.qq.com/s/eG39eS3ouciyAF0DQ5u_9g)

![](Fortran常用内置函数_数组属性查询_images/img_000_8bcddb233e93.jpg)

在Fortran编程语言中，数组是处理数据集合的核心结构，而准确地获取和操作这些数组的属性对于高效编程至关重要。Fortran提供了一系列内置函数（intrinsics functions），帮助开发者查询和操作数组的各种属性，如分配状态、连续性、边界信息、维度数、形状以及大小等。本文将逐一介绍这些实用的数组查询函数，并通过简单示例演示它们的使用方法。

## 1\. ALLOCATED —— 检查数组的分配状态

`ALLOCATED`函数用于检查一个可分配数组是否已经被分配了存储空间。这对于动态管理内存非常有用。

### 「示例代码」

`program DemoAllocated     implicit none     real, allocatable :: vec(:)          allocate(vec(10))          if (allocated(vec)) then       print *, "Vector is allocated."     else       print *, "Vector is not allocated."     end if          deallocate(vec)          if (allocated(vec)) then       print *, "Vector is still allocated."     else       print *, "Vector has been deallocated."     end if   end program DemoAllocated   `

输出结果为：

> Vector is allocated.
> 
> Vector has been deallocated.

在这个例子中，首先通过`allocate`分配了一个长度为10的实数向量`vec`，然后使用`ALLOCATED`函数检查其分配状态。之后，通过`deallocate`释放内存，并再次检查分配状态。

## 2\. IS\_CONTIGUOUS —— 测试对象是否连续

`IS_CONTIGUOUS`函数用来判断一个数组对象的元素是否在内存中连续存储。这对于优化访问模式和理解数据布局很重要。

### 「示例代码」

`program DemoIsContiguous     implicit none     real, dimension(10),target:: contigArray     real, dimension(:), pointer :: nonContigArray     integer :: i          contigArray = [(i,i=1,10)]     nonContigArray => contigArray(1:10:2)         print *, "Contiguous array:", &       is_contiguous(contigArray)     print *, "Non-contiguous array:", &       is_contiguous(nonContigArray)      end program DemoIsContiguous   `

输出结果为：

> Contiguous array: T  
> Non-contiguous array: F

这里创建了一个连续的数组`contigArray`和一个非连续的数组`nonContigArray`（由指针间隔地关联数组元素而生成），并用`is_contiguous`函数测试它们的连续性。

## 3\. LBOUND & UBOUND —— 获取数组的下界与上界

`LBOUND`和`UBOUND`函数分别返回数组某一维或多维的下界和上界索引值，这对于循环遍历数组非常有用。

### 「示例代码」

`program DemoBoundaries     implicit none     integer, dimension(-1:2, 0:4) :: arr          print *, "Lower bound of arr:", lbound(arr)     print *, "Upper bound of arr:", ubound(arr)     print *, "Lower bound of first dimension:", lbound(arr, 1)     print *, "Upper bound of second dimension:", ubound(arr, 2)   end program DemoBoundaries   `

输出结果为：

> Lower bound of arr:          -1           0  
> Upper bound of arr:           2           4  
> Lower bound of first dimension:          -1  
> Upper bound of second dimension:           4

此例定义了一个二维数组`arr`，并通过`LBOUND`和`UBOUND`函数打印出其边界信息。

## 4\. RANK —— 查询数据对象的维度数

`RANK`函数用于确定一个数据对象的维度数量，即它是一个标量、向量、矩阵还是更高维度的数组。

### 「示例代码」

`program DemoRank     implicit none     integer :: scalar = 5     integer, dimension(3) :: vector     integer, dimension(3, 3) :: matrix          print *, "Rank of scalar:", rank(scalar)     print *, "Rank of vector:", rank(vector)     print *, "Rank of matrix:", rank(matrix)   end program DemoRank   `

输出结果为：

> Rank of scalar:           0  
> Rank of vector:           1  
> Rank of matrix:           2

这段代码展示了如何使用`RANK`函数查询不同数据类型的维度数。

## 5\. SHAPE—— 获取数组的形状信息

`SHAPE`函数在Fortran中用于返回数组的形状信息，即各个维度的大小。

`program DemoShape     implicit none     integer :: scalar     integer, dimension(3) :: vector     integer, dimension(3, 4) :: matrix          print *, "Shape of scalar:", shape(scalar)       print *, "Shape of vector:", shape(vector)     print *, "Shape of matrix:", shape(matrix)   end program DemoShape   `

输出结果为：

> Shape of scalar:  
> Shape of vector:           3  
> Shape of matrix:           3           4

这个例子定义了一个整数标量和一维、二维数组，并利用`shape`函数输出了它们的形状信息。

## 6\. SIZE —— 确定数组的大小或某一维度的元素数量

`SIZE`函数可以用来获取数组的总元素数量，或者指定维度上的元素数量，是处理数组时最常用的查询函数之一。

### 「示例代码」:

`program DemoSize     implicit none     integer, dimension(3, 4) :: arr          print *, "Total size of arr:", size(arr)     print *, "Size of first dimension:", size(arr, 1)     print *, "Size of second dimension:", size(arr, 2)   end program DemoSize   `

输出结果为：

> Total size of arr:          12  
> Size of first dimension:           3  
> Size of second dimension:           4

这个例子定义了一个二维数组`arr`，并利用`SIZE`函数输出了它的总大小及每一维的尺寸。

## 小结

通过上述示例，我们学习了如何使用Fortran的数组查询函数来获取有关数组的重要信息。无论是管理内存、优化性能，还是进行数组操作，掌握这些内置函数都是提高Fortran编程技能的关键步骤。

  

![](Fortran常用内置函数_数组属性查询_images/img_001_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。