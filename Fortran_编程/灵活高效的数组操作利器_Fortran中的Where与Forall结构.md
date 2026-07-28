# 灵活高效的数组操作利器：Fortran中的Where与Forall结构


> 原文地址: [https://mp.weixin.qq.com/s/8z-zM09YuQVu3p5LZJwgDA](https://mp.weixin.qq.com/s/8z-zM09YuQVu3p5LZJwgDA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXUibmbzvSnbTBlZn4d6KSHHia4QCUeRTbj4wJOiamXqskS5GyVS9CCPy7WPIjhnMwNVL1icSOZmV1Kog/640?wx_fmt=png&from=appmsg)

在科学计算领域，Fortran作为一种历史悠久的编程语言，以其在数值计算、高性能计算方面的卓越表现，至今仍被广泛使用。随着语言的不断演进，Fortran引入了诸多现代特性，旨在提高代码的可读性、可维护性以及执行效率，其中`WHERE`和`FORALL`结构便是显著的例证。本文将深入探讨这两个结构的语法、特性和应用场景，展示它们如何成为现代Fortran编程中处理数组数据的强大工具。

## 引言

Fortran语言自诞生之初就与数值计算紧密相连，尤其是其对数组操作的支持，一直是其区别于其他语言的重要特性之一。然而，传统的循环结构在处理大规模数组时，不仅代码冗长，而且效率往往不尽人意。为了解决这些问题，现代Fortran引入了`WHERE`和`FORALL`结构，极大地提升了数组操作的灵活性和性能。

## Where结构

`WHERE`结构是Fortran 90引入的一个条件执行机制，它允许程序员基于数组元素满足特定条件来选择性地对数组元素进行操作。相比于使用循环和条件语句的传统方法，`WHERE`结构提供了更简洁、更易读的代码，并且通常能获得更好的编译器优化。

### 「语法与用法」

基本的`WHERE`结构由三个部分组成：`WHERE`或`ELSEWHERE`子句、条件表达式和对应的执行语句块。其一般形式如下：

`WHERE (condition1)       expression1   ELSEWHERE (condition2)       expression2   ELSEWHERE       expression3   END WHERE   `

这里的`condition`代表了一个数组逻辑表达式，它限定了哪些数组元素需要被操作；`expression`则指定了具体的操作内容。如果需要，可以有多个`ELSEWHERE`子句，每个对应不同的条件和更新操作。

例如，假设我们有一个数组`A`，想要将其中的所有正数元素都乘以2，其他元素都除以2，可以这样实现：

`REAL, DIMENSION(4) :: A = [1, -2, 3, -4]   WHERE (A > 0)      A = A*2   ELSEWHERE     A = A/2   END WHERE   `

如果使用传统的DO、IF结构，程序是这样写的：

`REAL, DIMENSION(4) :: A = [1, -2, 3, -4]   DO i=1, size(A)     IF (A(i) > 0) THEN        A(i)=A(i)*2     ELSE       A(i)=A(i)/2     END IF    END DO   `

对于这个例子来说， WHERE结构要比DO、IF结构简单很多。

### 「特性与优势」

-   「简洁性」：通过直接在数组级别上应用条件，避免了显式的循环结构，使得代码更加紧凑。
    
-   「可读性」：逻辑清晰，易于理解数组操作的目的。
    
-   「性能」：编译器能够针对`WHERE`结构进行优化，特别是在并行处理场景下，往往能获得更好的执行效率。
    

## Forall结构

`FORALL`结构也是Fortran 90引入的，旨在提供一种更高效的方式来同时对数组的多个部分执行相同或不同的运算，尤其适用于涉及数组切片或子集的运算。

`FORALL`结构允许将一系列操作用于数组中的部分元素，被操作的数组元素可以通过「下标索引」和「逻辑条件」来进行选择。只有那些满足条件的数组元素才会被操作。

### 「语法与用法」

`FORALL`的基本形式包括一个或多个索引表达式和逻辑条件，用来定义操作的范围，以及执行的语句块。其一般形式如下：

`FORALL (indexl=triplet1 [,... condition])      expression   END FORALL   `

例如：

`REAL, DIMENSION(10) :: A, B, C   FORALL (i = 1:10)      A(i) = B(i) + C(i)   END FORALL   `

此例中，`FORALL`循环遍历数组`A`、`B`和`C`的索引`i`，执行相应的加法操作。

`FORALL`还可以用于多维数组和复杂的索引模式，如：

`REAL, DIMENSION(10,10) :: MatrixA, MatrixB, MatrixC   FORALL (i = 1:10, j = 1:10)      MatrixC(i,j) = MatrixA(i,j) + MatrixB(i,j)   END FORALL   `

一个复杂一点的例子。假设需要求一个n×m 数组`A`的所有元素的倒数，同时要避免对任意一个为0的元素进行操作而导致的错误。我们可以使用`FORALL`结构来实现：

`FORALL (i=1:n,j=1:m,A(i,j)/=0.)     A(i,j)=1./A(i,j)   END FORALL   `

如果使用传统的DO、IF结构，上面程序是这样写的：

`DO i=1,n     DO j=1,m       IF(A(i,j)/=0.) THEN         A(i,j)=1./A(i,j)       END IF     END DO   END DO   `

一般说来，任何一个可以用FORALL结构表示的表达式，同样可以用包含有IF结构的嵌套DO结构来表示。那么为什么还要发明FORALL结构呢？这其中其实大有玄机。

Fortran语法规范给出的说明是：DO循环中的语句必须严格按照既定顺序执行，但FORALL结构却提供了一种更为灵活的执行方式。在FORALL结构中，**语句的****执行顺序可以随意调整**，这为处理器提供了选择执行顺序的自由度。这种自由度的引入，对于大型并行计算器的优化尤为关键。通过FORALL结构，可以将一组数据分配给不同的处理器独立处理，从而实现并行计算，大幅提升程序的运行效率。

### 「特性与优势」

-   「向量化」：`FORALL`鼓励编写能够自动向量化（即利用SIMD指令）的代码，这对于现代CPU架构尤为重要。
    
-   「并行性」：易于并行化，编译器能够识别并行执行的机会，尤其是在多核处理器上。
    
-   「灵活性」：支持复杂索引和多数组操作，提高了代码的灵活性和表达能力。
    

## 小结

`WHERE`和`FORALL`结构是Fortran语言现代性的体现，它们极大地增强了数组操作的能力，提升了代码的效率和可维护性。通过熟练掌握这两个结构，Fortran程序员能够更加高效地解决科学计算和高性能计算领域中的问题。随着Fortran标准的不断演进，预计未来还将有更多针对数组操作的高级特性出现，持续推动着科学计算的发展。

在实际应用中，开发者应根据具体需求灵活选择合适的结构，同时关注编译器的优化提示，以确保代码的最优执行效率。无论是处理大规模数据分析，还是开发高性能计算应用，`WHERE`与`FORALL`都是值得深入探索和利用的宝贵工具。

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。