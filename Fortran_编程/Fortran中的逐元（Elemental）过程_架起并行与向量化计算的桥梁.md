# Fortran中的逐元（Elemental）过程：架起并行与向量化计算的桥梁


> 原文地址: [https://mp.weixin.qq.com/s/mg2ingL4hys8va3PlLhpYQ](https://mp.weixin.qq.com/s/mg2ingL4hys8va3PlLhpYQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVruhRvEcoiav20xXPnOkatCaZMib2It580Mibiav8X0RIOa1ibSAjKWDAIH1qiau0MvldzGd3UE91xJXgQ/640?wx_fmt=png&from=appmsg)

在科学计算领域，Fortran作为一种历史悠久的编程语言，凭借着其对高性能计算的强大支持，至今仍保持着不可替代的地位。随着计算技术的发展，尤其是并行计算和向量化计算的兴起，Fortran也不断进化，引入了诸多现代特性以适应新的计算需求。其中，“逐元”（Elemental）过程便是Fortran现代特性之一，它极大地简化了向量、矩阵以及更高维度数组的操作，为编写高效、可读性强的并行代码提供了优雅的途径。

## 什么是逐元过程？

在Fortran中，一个“过程”可以是子程序（Subroutine）或函数（Function）。传统的过程一次只能处理单个数据项，而“逐元”过程则允许该过程同时应用于数组的每个元素，甚至是多个数组对应位置的元素，无需显式地使用循环结构。这不仅使得代码更加简洁明了，而且为编译器提供了优化的空间，特别是在向量化和并行执行方面。

逐元过程的关键在于使用`elemental`关键字进行声明。当一个函数或子程序被标记为`elemental`时，Fortran编译器会自动将其应用到数组的每一个元素上，只要这些操作在数学上是有意义的。这意味着，对于数组运算，逐元过程能够隐式地实现循环展开、向量化以及潜在的并行化，从而提升代码的运行效率。

## 逐元过程的优势

-   ### 简化代码
    

逐元过程最直观的好处是代码的简化。传统上，要对数组执行相同的操作，程序员需要手动编写循环结构来迭代数组的每个元素。而使用逐元过程，则可以直接将该过程应用于整个数组，减少了代码量，提高了可读性。

-   ### 自动优化
    

Fortran编译器能够识别出逐元过程，并对其进行优化。这包括但不限于循环展开、向量化指令生成等。向量化是指编译器能够将数组操作转换为单条或多条针对向量处理器（如SIMD单元）的指令，显著加速计算过程。由于逐元过程的特性，这种优化通常是透明且高效的。

-   ### 并行执行的便利
    

逐元过程天然适合于并行计算环境。当处理大规模数组时，编译器或运行时系统可以根据硬件支持情况，自动将逐元过程的操作分布到多个处理器核心上并行执行，而无需程序员显式地管理线程或进程。这对于高性能计算应用尤为重要，能有效利用现代多核CPU和GPU的计算能力。

## 实现与应用示例

-   ### 基本示例
    

考虑一个简单的逐元函数，用于计算一个数的平方：

`module funcs   contains     elemental real function square(x)       real, intent(in) :: x       square = x * x     end function square   end module funcs   `

通过`elemental`声明，该函数不仅能处理单个实数，还能直接作用于整个实数数组，例如：

`program main     use funcs     real, dimension(10) :: array     ! array = [1.0, 2.0, 3.0, ..., 10.0]     array = [(i, i=1,10)]     array = square(array) ! 对数组每个元素求平方     print*, array   end program main   `

-   ### 复合操作
    

更复杂的逐元过程可以涉及数组间的运算。例如，定义一个逐元函数来计算两个向量的点乘：

`elemental real function dot_product(v1, v2)     real, intent(in) :: v1, v2     dot_product = v1 * v2   end function dot_product   `

这个函数可以被直接用于两个向量数组间的所有对应元素对，实现批量计算。

-   ### 高维数组处理
    

逐元过程同样适用于高维数组。例如，一个用于计算三维数组各元素绝对值的函数：

`elemental real function abs_all(a)     real, intent(in) :: a     abs_all = abs(a)   end function abs_all      real, dimension(3,3,3) :: cube   cube = reshape([(i, i=1,27)], [3,3,3])   cube = abs_all(cube) ! 对三维数组每个元素取绝对值   `

## 注意事项

尽管逐元过程强大且高效，但在使用时也有几点需要注意：

-   「接口声明」：如果要使用逐元函数，需要写出显式接口(使用MODULE或INTERFACE)。
    
-   「参数限制」：所有的形式参数和函数的返回值都必须是标量，且不能带有指针属性。除非作为某种内置函数的参数，形式参数不能用在类型声明语句中。这种限制阻止了自动数组在逐元函数中的使用。
    
-   「运算约束」：逐元过程要求操作满足一定的数学性质，如加法和乘法的交换律和结合律，以确保对数组应用时结果的正确性。
    
-   「类型匹配」：所有输入数组的尺寸必须相匹配，且数据类型需兼容。
    
-   「性能考量」：虽然逐元过程便于编译器优化，但过度使用或不恰当使用也可能导致性能损失，尤其是在小数组操作时，直接循环可能更高效。
    
-   「编译器支持」：不同Fortran编译器对逐元过程的支持程度和优化能力可能有差异，开发者应参考具体编译器文档。
    

## 结语

Fortran的逐元过程是通往高效、现代科学计算的一把钥匙。它不仅简化了数组操作的代码，还为编译器开启了自动优化和并行执行的大门，使得开发者能够更加专注于算法本身而非底层实现细节。随着高性能计算和并行计算技术的不断发展，掌握并合理运用逐元过程，将成为科学计算领域程序员的一项重要技能。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。