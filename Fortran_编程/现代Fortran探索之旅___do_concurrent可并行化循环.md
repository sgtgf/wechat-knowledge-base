# 现代Fortran探索之旅 | do concurrent可并行化循环


> 原文地址: [https://mp.weixin.qq.com/s/wcXZszoEJEgpEMrUqEml\_Q](https://mp.weixin.qq.com/s/wcXZszoEJEgpEMrUqEml_Q)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVV0Z1EwtEn9svQy6dNAOcDdXLtaaGiaL0xrianiblaSbiavmRgSmJJF4vBFxIgIrlqmxUg2dSn9wa4RwQ/640?wx_fmt=jpeg)

在高性能计算领域，Fortran语言因其对科学计算和工程应用的强大支持而久负盛名。随着多核处理器和大规模并行计算平台的普及，如何高效利用这些资源成为软件开发中的关键问题。Fortran 2008标准引入了`do concurrent`结构，为开发者提供了一种简洁而强大的方式来实现循环的并行执行，极大地提高了代码的执行效率。本文将深入探讨`do concurrent`的语法、工作原理，并通过具体示例展示其在实际编程中的应用。

## `do concurrent`简介

在Fortran中，传统的`do`循环用于迭代执行一系列相似的操作。然而，这些循环往往是串行执行的，即一次只处理一个循环迭代。随着计算任务规模的增长，这成为了性能瓶颈。为了克服这一限制，Fortran 2008标准引入了`do concurrent`结构，允许编译器根据硬件资源自动将循环内的计算分配到多个处理器上并行执行，从而显著提高程序运行速度。

### 「语法概览」

`do concurrent`的基本语法形式如下：

`do concurrent (index_specification)       ! 并行执行的代码块   end do   `

其中，`index_specification`定义了循环变量及其范围，与传统`do`循环的索引规范相似。重要的是，`do concurrent`循环体内的语句必须是独立的，即循环迭代之间不能有数据依赖关系，这是并行执行的前提。

### 「工作原理浅析」

`do concurrent`的核心在于它的可并行性分析能力。编译器会自动分析循环体内的代码，判断哪些部分可以安全地并行执行。这个过程涉及依赖性分析，以确保不会因并发执行而引发数据竞争或不一致性问题。如果循环体内的操作确实相互独立，编译器就会生成相应的并行代码，并利用OpenMP、MPI或其他并行编程模型在后台实现并行化。

## 实战示例

为了更好地理解`do concurrent`的用法，我们通过一个简单的矩阵加法示例来说明：

### 「问题描述」

给定两个相同维度的矩阵A和B，目标是计算它们的和矩阵C，即C\[i\]\[j\] = A\[i\]\[j\] + B\[i\]\[j\]。

### 「传统串行实现」

`program MatrixAddition     implicit none     integer, parameter :: N = 10000     real, dimension(N,N) :: A, B, C     integer :: i, j     real t0,t1          ! 初始化矩阵A和B...     A = 1.0     B = 2.0         !传统串行,按行相加     call CPU_TIME(t0)     do i = 1, N       do j = 1, N         C(i,j) = A(i,j) + B(i,j)       end do     end do     call CPU_TIME(t1)      print*, "do i,j    : TIME_COST=", t1-t0         !传统串行,按列相加      call CPU_TIME(t0)      do j = 1, N       do i = 1, N         C(i,j) = A(i,j) + B(i,j)       end do     end do     call CPU_TIME(t1)      print*, "do j,i    : TIME_COST=", t1-t0        !并行化循环     call CPU_TIME(t0)     do concurrent (i = 1:N, j = 1:N)       C(i,j) = A(i,j) + B(i,j)     end do      call CPU_TIME(t1)     print*, "concurrent: TIME_COST=", t1-t0      end program MatrixAddition   `

使用GFortran编译器编译上述代码，不添加任何优化选项。运行结果为

 `do i,j    : TIME_COST=   1.45312500    do j,i    : TIME_COST=  0.171875000    concurrent: TIME_COST=  0.156250000`

注意到在Fortran中，数组按列存储，即A(1,1)的后一个元素是A(2,1)。在编程实践中，我们经常需要仔细考虑下标顺序，使循环中相邻两次操作取连续地址。可以发现，按列相加，即内部循环变量取数组的第一个下标，有效地提高了计算效率。

而将双层循环替换为单个`do concurrent`结构，我们可以不用再为下标顺序的选择而纠结了。它直接指示编译器并行处理循环内的每个迭代，每个处理器可以独立计算矩阵的一个或多个元素，从而加速了计算过程。由于这里并未使用OpenMP等并行编程模型，所以效率提高并不明显，后续会进一步地进行测试。

## 注意事项

1.  「数据依赖性」：确保循环体内的操作没有隐式或显式的数据依赖。例如，如果某一行的计算依赖于前一行的结果，则不适用于`do concurrent`。
    
2.  「编译器支持」：虽然Fortran 2008标准定义了`do concurrent`，但具体实现和优化程度取决于编译器。确保使用支持此特性的现代Fortran编译器，如GNU Fortran、Intel Fortran或IBM XL Fortran等。
    
3.  「性能调优」：并行化并不总是自动带来最佳性能。开发者可能需要调整循环划分策略、考虑负载均衡问题，甚至直接使用更底层的并行编程接口（如OpenMP指令）来微调性能。
    
4.  「调试难度」：并行程序的调试通常比串行程序更为复杂，因为并行执行引入了额外的同步和数据竞争问题。使用适当的工具和技巧进行调试是必要的。
    

## 小结

`do concurrent`结构是Fortran语言向现代并行计算迈出的重要一步，它使得科学家和工程师能够更加便捷地利用多核及分布式计算资源，加速他们的计算密集型应用。尽管其设计意图是简化并行编程，开发者仍需深刻理解并行计算的基本原则和潜在挑战，才能充分发挥这一特性的作用。随着并行计算技术的不断进步和编译器优化技术的成熟，`do concurrent`在未来的高性能计算领域无疑将扮演更加重要的角色。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。