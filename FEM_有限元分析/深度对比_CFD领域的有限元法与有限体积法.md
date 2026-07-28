# 深度对比：CFD领域的有限元法与有限体积法


> 原文地址: [https://mp.weixin.qq.com/s/Vdsk2VyD3Ag\_94bkal3\_7Q](https://mp.weixin.qq.com/s/Vdsk2VyD3Ag_94bkal3_7Q)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_gif/icVUVTFlBCVWW6ES7rREta1ia1wYm6LYKU7UEfrk6y2F99z1w1XJwuTee0aeiclpE8iaiagyJibrHdBXh2GYibmvuX15A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

# ![Mathematical modelling and computational fluid dynamics informing ...](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXnPAW0j5ao3vvZUkr8rl2KwQkw6wLTm5fX2odE9giamfF8xlScYusmh66sqiaNRkZsqr4secq9ODgg/640?wx_fmt=jpeg&from=appmsg)

在计算流体力学（CFD）领域，有限元法（FEM）和有限体积法（FVM）是两种关键的数值模拟技术。自20世纪中叶发展以来，这两种方法在流体流动、传热传质等领域扮演了重要角色。尽管两者均基于偏微分方程的离散化，但其数学基础、物理特性和工程应用存在显著差异。本文将从数学理论、数值实现、应用领域及优缺点等维度系统分析FEM与FVM的异同，并探讨其在现代CFD中的发展趋势。

## 数学模型与数值模型

为了更好地理解 FEM 和 FVM，首先需要了解一个通用的**数学模型**：

初始条件边界条件

其中， 表示微分算子， 表示因变量（解变量）， 表示源项， 是描述初始条件的函数， 是一个算子， 是边界上的函数。这里的空间坐标  表示所有三个方向（）。

这个数学模型可以描述流体流动等物理现象，用于表示空间中动量和质量的守恒。然而，解析求解这些方程通常非常困难或不可能。因此，我们需要建立接近数学模型的**数值模型**，并使用计算机程序来求解这些数值模型方程。

![网格剖分中不同尺寸设置的最佳方式 - 知乎](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXnPAW0j5ao3vvZUkr8rl2KQiadQFVmXmWvqs0ZngwHnWW5dcvdiasGXbwBAjeqSPdeXHzqDiaYAdBPA/640?wx_fmt=jpeg&from=appmsg)

对于微分方程，时间和空间的离散通常采用某种网格化格式来实现。上述定义的数学模型有如下数值模型：

初始条件边界条件

其中， 表示离散化参数，比如有限元法或有限体积法中的网格单元或单元大小。

> 请注意，网格中的构建块在有限元法中称为 element，在有限体积法中称为 cell。

数值计算的误差有多个来源，其中**截断误差**  可以帮助我们辨别数值模型与数学模型的近似程度：

数值模型的**精确度**揭示截断误差随着  的减小而减小的速度。这意味着单元大小越小，数值模型与数学模型之间的差异就应该越小。如果截断误差随  减小，则数值模型与数学模型是**一致的**。

解的离散化误差为模型方程的精确解与数值解之差：

如果数值解随着  减小而接近精确解，则可以认为数值方法收敛：

离散化的精确度  揭示数值解随着  减小收敛为精确解的速度：

 值越大，近似值收敛得越快。

那么，有限元法与有限体积法在精确度上有什么内在的区别吗？通过增加基函数的阶数，理论上我们可以用有限元法达到任意精确度（在实践中，还有其他限制因素）。最常见的有限元法是二阶至三阶精度，而有限体积法通常是一阶至二阶精度。

## FEM与FVM的数学基础

让我们来看一个通量平衡方程，它是流体流动数学模型的基础：

在这个方程中， 表示守恒物理量，如动量或质量， 表示该量的通量，比如单位面积和单位时间内流过控制面的动量。

有限元法首先建立一个积分方程，方程用试函数  加权，然后通过对模型域进行积分：

在继续之前，我们先对  应用散度定理，从而得出如下表达式：

其中， 表示域  的边界， 表示域边界的法向矢量。对上述方程左边部分求积分得出：

由此可以得到：

移项后得到如下表达式：

接下来，我们将上面的方程代入积分方程的第二项，这样做是为了在积分方程中自然地包含通量边界条件，这种做法在随后的数值实现过程中带来好处，即通量矢量不必是可微分的，进而得出有限元法中的基础方程：

这就是所谓的弱形式。左边的第三项对 、 在域  边界上的通量进行积分。

如果弱形式对大量的试函数  都成立，则它只与物理模型有关。常见的一种选择是使用多项式，但也可以是其他类型的函数。一个特例是常数试函数；例如，。上面最后一个方程变为：

这个关系式是有限体积法的基础。

至此，有限元法与有限体积法没有区别。如上所述，有限体积法的公式方程只是有限元法中使用的一般弱形式方程的特例。不同之处在于方程的离散化。

有限元法的依据是，选取有限数量的测试函数 ，并要求方程 1 对所有函数都成立。

有限体积法的依据是，选取有限数量的控制体积 ，并要求方程 2 对所有控制体积都成立。

如果我们使用三角剖分法作为这两种方法的基础，下面我们继续分析有限元和有限体积公式可能的离散形式。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXnPAW0j5ao3vvZUkr8rl2KBy33ITfEJV6a5KfficKSznt2tf4iaw6ib1DKVibdmo8W1yyHfPprR6KZtQ/640?wx_fmt=jpeg&from=appmsg)

对于有限元方法，试函数仅在节点（局部支持函数）附近是非零的，这意味着只需对这附近的 element（这里是三角形）计算积分。边界通量的贡献（方程 1 左边第三项）只需包含在边界上有面（三维）或边（二维）的 element 中，这是因为，element 间边界贡献抵消了连续基函数。对于图域中突出显示的节点，只有周围的灰色 element 对（ 域上）域积分有贡献。对于边界上突出显示的节点，只有两个相邻的浅蓝色 element 对  域上的积分有边界通量贡献。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXnPAW0j5ao3vvZUkr8rl2KQCZDhnZKUxGnQvC4iazW4jnzS1s0cbICeJstztrrDheclILK4PibenSg/640?wx_fmt=jpeg&from=appmsg)

观察常见的有限体积法，即 cell 中心法，会发现每个 cell（三角形）都被视为一个单独的域。通量的边界项（方程 2 左边第二项）对所有 cell（包括内部 cell 和边界上有面（三维）或边（二维）的 cell）进行积分。

那么我们如何用两种不同的方法来表达  和  呢？

有限元法通常采用与试函数相同的基函数来近似求解。只要解的近似值有一个次数大于零的多项式，并且一阶导数可以近似导出，就不需要特别处理对流和扩散产生的通量。通量矢量也是一个局部多项式函数。

相反，在有限体积法离散化中，边界上的解没有很好地定义。该方法仅为每个 cell 定义解的值，通常解释为 cell 中心的值。因此，有限体积法需要通过某种重建方法来完成。通常，在考虑相邻 cell 值的情况下，使用局部插值方法；见下图中的示例。为了得到解和通量的高阶插值，需要考虑更多的 cell 值，这不仅非常复杂，而且会阻碍方法的局部化。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXnPAW0j5ao3vvZUkr8rl2Kg4Jj229EFwiaCggXGC6ru9GOIQFPsAcYmLYLEahdOETLvUEavctF0LA/640?wx_fmt=jpeg&from=appmsg)

## FEM与FVM的核心差异

### 离散化策略

**FEM:**

-   **单元划分:** 将计算域划分为三角形/四面体等单元（Element），每个单元内使用多项式基函数近似解。
    
-   **基函数性质:** 基函数通常为连续函数（如线性基函数），且在节点处满足。
    
-   **积分范围:** 对单元内部及边界进行积分，通过矩阵组装形成全局方程组。
    

**FVM:**

-   **控制体划分:** 将计算域划分为控制体（Cell），通常采用六面体或四面体网格，每个控制体对应一个离散方程。
    
-   **守恒性:** 直接基于积分形式的守恒定律，确保每个控制体的通量平衡。
    
-   **通量计算:** 通过相邻控制体间的界面通量（Flux）传递信息，常采用逆风格式（Upwind）或高阶重构（如MUSCL）处理对流项。
    

### 精度与收敛性

-   **FEM**：
    

-   通过提高基函数的阶数（如从线性到二次、三次）可实现任意高阶精度。
    
-   收敛性依赖于网格细化（\-refinement）和基函数阶数提升（\-refinement）。
    
-   对光滑问题（如层流）表现优异，但对强间断问题（如激波）易产生非物理振荡。
    

-   **FVM**：
    

-   传统FVM通常为一阶或二阶精度，但可通过高阶通量重构（如WENO）提升至更高的精度。
    
-   收敛性依赖于网格细化，但局部守恒性使其在处理间断问题时更具鲁棒性。
    

### 守恒性与稳定性

-   **FVM**的天然优势在于**局部守恒性**：每个控制体的净通量严格平衡，这一特性对湍流、燃烧等强非线性问题至关重要。
    
-   **FEM**的全局守恒性较强，需通过特殊处理（如混合FEM或DG方法）恢复局部守恒。
    
-   对于对流主导问题（如高雷诺数流动），FEM易产生非物理振荡，需引入稳定化技术（如SUPG法）；而FVM通过逆风格式自然抑制振荡。
    

### FEM与FVM的优缺点总结

特性

有限元法（FEM）

有限体积法（FVM）

数学基础

基于变分原理，弱形式自然包含边界条件

基于守恒定律的积分形式，直接反映物理意义

精度

高阶基函数可实现任意精度，适合光滑问题

高阶通量重构需复杂算法，但局部守恒性更适配间断问题

守恒性

全局守恒性较强，局部守恒需特殊处理

天然局部守恒性，适合湍流、燃烧等非线性问题

网格适应性

适合复杂几何，非结构化网格灵活性高

对非结构化网格兼容性良好，但高阶重构增加计算成本

稳定性

对流占优问题易振荡，需稳定化技术（如SUPG）

逆风格式自然抑制振荡，稳定性更强

计算成本

高阶方法矩阵稀疏性差，求解时间较长

低阶方法计算效率高，但高阶重构需更多存储与算力

多物理场耦合

适合热-流-固耦合、电磁场等问题，基函数灵活性高

对多物理场耦合支持较弱，需依赖FEM处理复杂场变量

## FEM与FVM的融合趋势

### 间断伽辽金法（DG-FEM）

近年来，间断伽辽金法（Discontinuous Galerkin, DG）成为FEM与FVM的桥梁。其特点包括：

-   **局部守恒性:** 每个单元独立离散，边界通量自然满足守恒。
    
-   **高阶精度:** 通过多项式基函数提升精度，无需复杂通量重构。
    
-   **灵活性:** 适用于非结构化网格，且可结合显式/隐式时间积分。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXnPAW0j5ao3vvZUkr8rl2Ky1JG7RXnXVm7PGHGrAy6cbUGibC1cFQK03ZwTWmIgWX6gWLhjk556lg/640?wx_fmt=jpeg&from=appmsg)

DG方法已被应用于高超声速流动、可压缩湍流等复杂问题，其计算成本虽高于传统FVM，但精度与鲁棒性的平衡使其成为下一代CFD工具的核心方向。

### 混合FEM-FVM方法

在工程实践中，混合方法逐渐兴起。例如：

-   **压力-速度耦合:** 采用FVM求解速度场，FEM处理压力泊松方程，充分发挥两者优势。
    
-   **多尺度建模:** 在宏观尺度用FVM捕捉大涡结构，微观尺度用FEM解析边界层细节。
    

## 结语

FEM与FVM并非对立的技术，而是互补的工具。FEM凭借其数学灵活性与高阶精度，在结构力学、多物理场耦合中占据优势；FVM则以局部守恒性与鲁棒性，在湍流、燃烧等非线性问题中表现卓越。随着DG方法的成熟，两者将进一步融合，推动CFD向更高精度、更广适用性发展。对于工程技术人员而言，理解两种方法的本质差异，并根据具体问题选择合适的工具，将是实现高效、可靠仿真的关键。

  

往期推荐

_[有限](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484564&idx=1&sn=970f8e1b127642d6aa6916f5eef94c02&chksm=c33790eef44019f8782f37bd7314651a9a0ed382b590cf658b4b6181f3cae0564b3295c6d482&scene=21#wechat_redirect)_[元、](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484564&idx=1&sn=970f8e1b127642d6aa6916f5eef94c02&chksm=c33790eef44019f8782f37bd7314651a9a0ed382b590cf658b4b6181f3cae0564b3295c6d482&scene=21#wechat_redirect)_[有限](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484564&idx=1&sn=970f8e1b127642d6aa6916f5eef94c02&chksm=c33790eef44019f8782f37bd7314651a9a0ed382b590cf658b4b6181f3cae0564b3295c6d482&scene=21#wechat_redirect)_[差分 or](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484564&idx=1&sn=970f8e1b127642d6aa6916f5eef94c02&chksm=c33790eef44019f8782f37bd7314651a9a0ed382b590cf658b4b6181f3cae0564b3295c6d482&scene=21#wechat_redirect) _[有限体积](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484564&idx=1&sn=970f8e1b127642d6aa6916f5eef94c02&chksm=c33790eef44019f8782f37bd7314651a9a0ed382b590cf658b4b6181f3cae0564b3295c6d482&scene=21#wechat_redirect)_[？](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484564&idx=1&sn=970f8e1b127642d6aa6916f5eef94c02&chksm=c33790eef44019f8782f37bd7314651a9a0ed382b590cf658b4b6181f3cae0564b3295c6d482&scene=21#wechat_redirect)

[PyEFVL，](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247490129&idx=2&sn=df935c925b078519e18dd79e2aada4f7&chksm=c3378e2bf440073d0134763083ac746d405390cf17f4fd45ea3c5cd665e9f1b4fb0409e5dcbe&scene=21#wechat_redirect)_[有限体积](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247490129&idx=2&sn=df935c925b078519e18dd79e2aada4f7&chksm=c3378e2bf440073d0134763083ac746d405390cf17f4fd45ea3c5cd665e9f1b4fb0409e5dcbe&scene=21#wechat_redirect)_[超神的Python库!](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247490129&idx=2&sn=df935c925b078519e18dd79e2aada4f7&chksm=c3378e2bf440073d0134763083ac746d405390cf17f4fd45ea3c5cd665e9f1b4fb0409e5dcbe&scene=21#wechat_redirect)

[一维稳态扩散问题-](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247491129&idx=2&sn=34235cba356addbc10fa3d7a246137e8&chksm=c3378a43f44003558ee59601d3ecc7e6dc558e2e4edb7183f373569007d802599b642574e81c&scene=21#wechat_redirect)_[有限体积](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247491129&idx=2&sn=34235cba356addbc10fa3d7a246137e8&chksm=c3378a43f44003558ee59601d3ecc7e6dc558e2e4edb7183f373569007d802599b642574e81c&scene=21#wechat_redirect)_[法](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247491129&idx=2&sn=34235cba356addbc10fa3d7a246137e8&chksm=c3378a43f44003558ee59601d3ecc7e6dc558e2e4edb7183f373569007d802599b642574e81c&scene=21#wechat_redirect)

  

## 推荐阅读

  

  

  

  

‍

  

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg&random=0.2312854885901674)

**给我一组控制方程，还你一套专业软件。**我们长期从事多场耦合有限元算法和软件的研发工作，掌握全流程的 CAE 软件开发技能。如果您需要相关的技术服务，非常欢迎私信交流和扫码咨询。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVUiaBXZVo6l0B8M1jCa328awtQ1MFgKXLbF5QKRRbE8zuZqwdfFsLeoRtrCuPhTSQY0t2zictECdFmA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

**喜欢****作者******，请点********赞********和在看******![](https://mmbiz.qpic.cn/mmbiz_gif/6BxCiaoAkhCpmWx6ic8Sg6X6PXsnJWo7a3hOSHEicIvYJO3nOPdf6GiaqmlM1gXnia8Ppu76xY0hiaTBXSjQNRsr6Dkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6459285066781566&random=0.9039664113437702&random=0.10616299980642463&random=0.37943585876598473&random=0.7246305284075434&random=0.1820491079508062&random=0.3136645327514245&random=0.8290227030922905&tp=webp)**

**![](https://mmbiz.qpic.cn/mmbiz_gif/pn1AOBGTwDVWGtThsMX1L4lk0EffmPg1BKAYaooibsaRwoYMzqxhJ1seOlZialOpryLocgAFt7Yb97uwwseMCLxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.90499299240585&random=0.7427014598159356&random=0.6203706698189717&random=0.17266143983420013&random=0.4502076552242009&random=0.3348111146987862&random=0.5857982594073723&random=0.5924137199896844&tp=webp)**