# 利用Eigen进行高效矩阵计算


> 原文地址: [https://mp.weixin.qq.com/s/vYoBXJfdR5SX-a37mI6I1Q](https://mp.weixin.qq.com/s/vYoBXJfdR5SX-a37mI6I1Q)

  

**副标题：Eigen：C++强大开源库**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3tQkJ09ppkqkVwibcufrzjpibGlk9EJ06dt9oSrl1wghibzxl8ibOgFNRjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel30AKciczXQM8qnibDqHPP4zVnjTJgeicYG6nwViaPhQvr19U7ywPxIiadtibQ/640?wx_fmt=png&from=appmsg)

**01**

**概述**

Eigen 是一个高性能的 C++ 矩阵和线性代数库，广泛应用于科学计算、计算机视觉、机器人学、图形学等领域。它提供了一套简洁而强大的接口，使得用户能够方便地进行矩阵运算、向量操作、数值解算等任务。Eigen 的设计目标是既高效又易于使用，并且完全基于模板技术，因此可以无缝集成到各种 C++ 项目中。

特点

1.  高性能：通过使用表达式模板技术，Eigen 能够在编译时优化计算流程，从而实现接近于手写代码的速度。
    
2.  易用性：提供了直观且一致的 API 设计，使得即使是初学者也能快速上手。
    
3.  跨平台支持：Eigen 不依赖于外部库，仅需标准 C++ 库即可运行，在 Windows、Linux 和 macOS 等多种操作系统上都能良好工作。
    
4.  灵活的数据类型：支持多种数据类型（如 float, double, complex）以及自定义类型。
    
5.  丰富的功能集：除了基本的矩阵运算外，还包含了高级功能如特征值分解、奇异值分解等。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel30AKciczXQM8qnibDqHPP4zVnjTJgeicYG6nwViaPhQvr19U7ywPxIiadtibQ/640?wx_fmt=png&from=appmsg)

**02**

**安装与配置**

获取源码

-   可以从官方 GitHub 仓库下载最新版本的源代码：https://gitlab.com/libeigen/eigen
    
-   或者直接使用包管理器安装，例如在 Ubuntu 上可以通过 sudo apt-get install libeigen3-dev 命令来安装。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3BxhUxG61cxXx8cyBZu5lCrkUxTibMMIDR8DumRskcelrX3zibyEykg2g/640?wx_fmt=png&from=appmsg)

编译环境设置

Eigen 是一个头文件库，这意味着不需要单独编译步骤。只需将包含 Eigen 文件夹添加到项目的 include 路径即可开始使用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel30AKciczXQM8qnibDqHPP4zVnjTJgeicYG6nwViaPhQvr19U7ywPxIiadtibQ/640?wx_fmt=png&from=appmsg)

**03**

**来个简单示例**

实例代码

使用Eigen库的一个简单示例。这个例子将创建两个2x2的矩阵，然后进行相加，并打印结果。

```
#include <iostream>
```

  

编译执行

```
g++ -I /usr/include/eigen3/  matrix_addition.cpp -o matrix_addition
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3WQJjzWzaIhm9bUarIdKq5ia30nupcO3AvqPndaKXV0ciaiaUqicU9NOCiaA/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel30AKciczXQM8qnibDqHPP4zVnjTJgeicYG6nwViaPhQvr19U7ywPxIiadtibQ/640?wx_fmt=png&from=appmsg)

**04**

**主要模块介绍**

Eigen库分为一个核心模块和几个附加模块。每个模块都有一个对应的头文件，必须包含这些头文件才能使用相应的模块。Dense和Eigen头文件提供了便捷的方式，可以一次性访问多个模块。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel38YFbGaMOYiaJpK0tIUW3j7tQ2B3bRYxZhKyv8BVAgrnAqH2eic8PWQBQ/640?wx_fmt=png&from=appmsg)

  

```
一般为了省事，可以直接导入#include <Eigen/Dense> 或者#include <Eigen/Eigen>
```

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**1**

**Core**

```
#include <Eigen/Core> 
```

是 Eigen 库的核心头文件，它提供了许多基础的线性代数功能。通过这个头文件，你可以创建和操作矩阵、向量等数据结构。下面我将通过一系列的例子来帮助你理解如何使用这个库中的基本功能。

1\. 创建矩阵和向量

动态大小的矩阵

  

```
#include <Eigen/Dense> // 包含了Eigen/Core及其他一些常用模块
```

  

固定大小的矩阵

  

```
Eigen::Matrix3f a; // 3x3单精度浮点数矩阵
```

  

向量

  

```
Eigen::VectorXd v(3); // 动态大小的列向量
```

  

2\. 矩阵运算

加法：

```
Eigen::Matrix3d b;
```

  

乘法:

```
Eigen::Matrix3d d = a * b;
```

  

转置:

```
Eigen::Matrix3d e = a.transpose();
```

  

逆矩阵:

```
Eigen::Matrix3d f = a.inverse();
```

  

访问元素

    直接访问:

```
double value = a(0,0);
```

  

    块操作:

```
Eigen::Matrix2d sub = a.block<2,2>(0,0); // 获取前两行两列
```

以上示例展示了如何使用中的一些核心功能。Eigen 提供了非常丰富且高效的线性代数工具，适用于从简单的数学计算到复杂的科学研究等多种场景。希望这些例子能为你提供一个良好的起点！如果需要更深入地了解特定功能或有其他问题，请随时提问。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**2**

**Eigenvalues**

```
#include <Eigen/Eigenvalues>
```

是 Eigen 库中的一个头文件，它提供了计算矩阵特征值和特征向量的功能。Eigen 是一个高效的 C++ 模板库，用于线性代数运算，包括向量、矩阵以及相关的算法。

在 Eigen/Eigenvalues 头文件中，主要包含以下几种类：

1.  EigenSolver：用于计算实数或复数矩阵的特征值和特征向量。
    
2.  ComplexEigenSolver：用于计算复数矩阵的特征值和特征向量。
    
3.  SelfAdjointEigenSolver：用于计算自共轭矩阵（即对称矩阵）的特征值和特征向量。
    
4.  GeneralizedSelfAdjointEigenSolver：用于解决广义特征值问题，特别是当两个矩阵都是自共轭时。
    
5.  GeneralizedEigenSolver：用于解决广义特征值问题。
    

下面通过一些具体的例子来详细介绍这些类的使用方法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**1**

**EigenSolver**

EigenSolver 类可以用来求解任意方阵的特征值和特征向量。

```
#include <iostream>
```

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**2**

**ComplexEigenSolver**

ComplexEigenSolver 类专门处理复数矩阵的特征值问题。

```
#include <iostream>
```

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**3**

**SelfAdjointEigenSolver**

SelfAdjointEigenSolver 类适用于实对称矩阵或复共轭对称矩阵。

```
#include <iostream>
```

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**4**

**GeneralizedSelfAdjointEigenSolver**

GeneralizedSelfAdjointEigenSolver 类用于解决广义特征值问题 \\( Ax = \\lambda Bx \\)，其中 \\(A\\) 和 \\(B\\) 都是对称矩阵。

```
#include <iostream>
```

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel3QXpSuFujicUz8ia7IBjYYkWb9erxA5E6lY8FSoSfFiaJVsNGkLSFvCibVg/640?wx_fmt=png&from=appmsg)

**5**

**GeneralizedEigenSolver**

GeneralizedEigenSolver 类用于解决一般的广义特征值问题 \\( Ax = \\lambda Bx \\)。

```
#include <iostream>
```

  

上述展示了如何使用 Eigen/Eigenvalues 头文件中的不同类来计算各种类型的特征值和特征向量。通过这些例子，咱们可以更深入地理解和掌握这些类的用法。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaDiabnN4Yz6MiaBgRh3l1U1ciag1Ns0Gel30AKciczXQM8qnibDqHPP4zVnjTJgeicYG6nwViaPhQvr19U7ywPxIiadtibQ/640?wx_fmt=png&from=appmsg)

**05**

**结论**

Eigen 是一款非常适合用于需要大量数学计算场合的强大工具。无论是对于科研人员还是软件开发者来说，都能够从中受益匪浅。凭借其出色的性能表现及友好的编程接口，Eigen 已经成为许多重要项目中的关键组成部分之一。希望本文档能帮助更好地理解和运用这一优秀的开源库！