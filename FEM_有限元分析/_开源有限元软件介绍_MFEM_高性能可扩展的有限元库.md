# 【开源有限元软件介绍】MFEM：高性能可扩展的有限元库


> 原文地址: [https://mp.weixin.qq.com/s/WqqGkyZ1bdhJl9rydrC3Xg](https://mp.weixin.qq.com/s/WqqGkyZ1bdhJl9rydrC3Xg)

> 在科学计算领域，有限元方法（FEM）是处理偏微分方程（PDE）问题的常用数值工具。无论是结构力学、电磁场还是流体力学，FEM都能为复杂的物理问题提供高效的计算解决方案。本文将介绍一款广泛应用于各类高性能计算平台的开源库——**MFEM**。该库以其灵活、可扩展和高性能的特点，助力科研工作者和工程师在不同计算环境下开发先进的有限元算法。同时该开源求解器也得到了关注本号的部分网友的推荐🎈。
> 
> ![](https://mmbiz.qpic.cn/sz_mmbiz_png/114Mib4UdUMcQBAA9G9WIUV16tZtiahfmMmSsQ79t2lzlGWlGNqBkibauE9m9BwcO6jUEjJkuiaGfbhBr6wiadksKtQ/640?wx_fmt=png&from=appmsg)
> 
> MFEM官网，参考资料\[1\]
> 
>   
> 
>   

## 什么是MFEM？

MFEM，全称“Modular Finite Element Methods”，是由**LLNL**（劳伦斯利弗莫尔国家实验室）开发的一款轻量级、可扩展的C++库。它旨在帮助用户开发高效的有限元离散化算法，并能够从个人电脑扩展到GPU加速的超级计算机。MFEM不仅是一个开源库，还是有限元领域的“工具箱”，提供了丰富的构建模块来简化复杂有限元算法的开发，类似于MATLAB在线性代数方法中的作用。

## 主要功能亮点

1.  **高阶有限元空间**
    

-   MFEM 支持多种高阶有限元空间，包括 H1、H(div)、H(curl) 等。同时，它也支持不连续的 L2 空间、数值轨迹空间以及用于同构几何分析的 NURBS 空间，能满足各种复杂计算需求。
    

3.  **灵活的离散化方法**
    

-   混合有限元
    
-   不连续 Galerkin（DG）方法
    
-   同构几何分析
    
-   不连续 Petrov-Galerkin（DPG）方法
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/114Mib4UdUMcQBAA9G9WIUV16tZtiahfmMcicNFFRexUnaNwFeyRiamxhtCdH7Y2iadvH3EC1DwW01uW0QbEKJPhxzA/640?wx_fmt=png&from=appmsg)
    
    Discontinuous Petrov-Galerkin (DPG) method, 选自参考资料\[2\]
    
-   混合化和静态凝聚方法，用于高阶问题。
    
-   MFEM 允许快速原型化不同的有限元方法。
    

5.  **广泛的网格支持**
    

-   支持三角形、四边形、六面体等多种网格单元。MFEM 还能处理任意网格变换，提供局部网格优化、曲面嵌入以及高阶网格的优化功能。通过与 PUMI 分布式网格管理系统的集成，它还支持自动自适应分析和并行网格修改。
    

7.  **并行、可扩展及GPU支持**
    

-   MFEM的设计不仅支持传统的 MPI 并行计算，还兼容 GPU 加速（CUDA、HIP、RAJA等）。无论是数百个并行核心，还是GPU加速的超级计算机，MFEM 都能高效执行。
    

9.  **内置求解器**
    

-   MFEM 不仅是一个有限元到线性代数的“翻译器”，它还集成了丰富的求解器库，包括 Krylov 子空间法、AMG 预处理器、高效的稀疏矩阵求解器等。同时，MFEM 还与 hypre、PETSc、SLEPc 等高性能库无缝集成，支持不同类型的线性、非线性方程求解。
    

11.  **自动微分**(Automatic Differentiation, AD)  
     MFEM 集成了**自动微分**功能，允许用户通过 C++ 语言的 lambda 表达式或 functor 来实现函数导数的精确计算。自动微分不同于符号微分或数值近似，其提供的导数结果是完全精确的。MFEM 的 AD 实现支持前向模式和反向模式，并基于本地双数和外部库 CoDiPack。用户可以根据需求选择最优的自动微分引擎，这一功能特别适用于拓扑优化等应用场景。
     
12.  **丰富的示例代码**  
     对于初学者和高级用户，MFEM 提供了从简单到复杂的大量示例代码，涵盖了拉普拉斯问题、线性弹性、电磁场问题、不连续Galerkin法等各类有限元应用，帮助用户快速上手开发，部分示例代码如下图所示，相信你也能找到感兴趣的例子🍖：
     
     ![](https://mmbiz.qpic.cn/sz_mmbiz_png/114Mib4UdUMcQBAA9G9WIUV16tZtiahfmMyl6DNTVQh8qugH0YHNfpVHO1V0SF4nTYvVdPRbuXCFIkglfX99Ggvw/640?wx_fmt=png&from=appmsg)
     
     官方提供的大量示例代码，选自参考资料\[6\]
     

## 应用场景与实际案例

MFEM 已在多个知名科研项目中被广泛应用，例如：

-   **BLAST**：用于冲击波动力学模拟
    
-   **Cardioid**：心脏模拟项目
    
-   **Palace**：电磁模拟项目
    
-   **CEED**：Exascale 计算项目中的高效离散化研究中心
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/114Mib4UdUMcQBAA9G9WIUV16tZtiahfmMJyzkcutvEZOk6Ke1JNamTZte8lgPdPAvwFKCDiaPqFYbdBUerCvbuOg/640?wx_fmt=png&from=appmsg)
    
    非线性弹性力学问题的MFEM求解，选自参考资料\[2\]
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/114Mib4UdUMcQBAA9G9WIUV16tZtiahfmMenZxPLjQao9jAqjRLOQYuGdLnoficlgMX6C7anDEfspSxzZfcZQicH7A/640?wx_fmt=png&from=appmsg)
    
    基于MFEM，使用LLNL的LiDO项目对无人机机身进行拓扑优化，选自参考资料\[3,4\]
    

此外，MFEM 提供了多个迷你应用程序和物理问题代码，如电磁、流体动力学和网格优化问题，帮助用户直接应用于科研工作中。

## 可视化与扩展性

MFEM 兼容多个可视化工具，如 GLVis、VisIt 和 ParaView，能够准确地展示高阶网格和有限元函数。这些工具使用户能够轻松查看和分析仿真结果。此外，MFEM 采用模块化设计，代码量小，便于跨平台使用，并且具有高度的扩展性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/114Mib4UdUMcQBAA9G9WIUV16tZtiahfmMm81bGAPygYfwQe0icCsK8Q6CV7zPLJnfUX5op58kO1ZOr9XwqRc4Wcg/640?wx_fmt=png&from=appmsg)

MFEM平台下，通过并行计算两个磁球的静磁相互作用得到的磁场流线,并使用VTK进行可视化，选自参考资料\[4\]

## 结语

MFEM 通过集成丰富的特性和功能，包括自动微分和并行计算支持，提供了一个强大的有限元计算平台。其灵活的架构和高效的性能使其在科学计算和工程模拟领域得到了广泛应用，感兴趣的朋友可通过本文的参考资料进行了解。

## 参考资料

\[1\] https://mfem.org/  
\[2\] https://mfem.org/examples/  
\[3\] https://str.llnl.gov/past-issues/march-2018/leading-revolution-design  
\[4\] https://mfem.org/gallery/  
\[5\] https://github.com/mfem/mfem/  
\[6\] https://mfem.org/features/#extensive-examples