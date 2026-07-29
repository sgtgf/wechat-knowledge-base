# 什么是半正定 (PSD) 矩阵


> 原文地址: [https://mp.weixin.qq.com/s/qfXXTSV9ZguH\_QPS\_1uxIg](https://mp.weixin.qq.com/s/qfXXTSV9ZguH_QPS_1uxIg)

 ![](什么是半正定_(PSD)_矩阵_images/img_000_1f2bca29edd2.png)  
编辑

我来完整、通俗地讲解PSD是什么，为什么重要。

#### 1. **通俗定义：PSD矩阵像一个“非负能量泵”**

-   想象一个矩阵A像一个“机器”，你输入一个向量x（任何非零向量），它输出一个“能量值”⟨Ax, x⟩（这是![x^T A x](什么是半正定_(PSD)_矩阵_images/img_001_e084b34e2828.png)的简写，x的转置乘A乘x）。
    
-   如果这个能量值**总是 ≥ 0**（对于所有实向量x，包括零向量），那么A就是Positive Semi-Definite (PSD)。
    

-   “Positive”：能量非负。
    
-   “Semi-Definite”：可以等于0（不像严格Positive Definite，PD，要求 > 0 for x ≠ 0）。
    
      
    

-   比喻：像一个弹簧系统，不会“吸走”能量，只会保持或零（可能有“松弛”方向）。
    
-   关键：A必须是**对称矩阵**（![A = A^T](什么是半正定_(PSD)_矩阵_images/img_002_2fb6221170c3.png)），因为内积形式要求对称（在实数域）。
    

图片里的公式正好是这个定义：∀x ∈ ℝⁿ ⟨Ax, x⟩ ≥ 0。其中⟨ , ⟩是内积，等于![x^T A x](什么是半正定_(PSD)_矩阵_images/img_003_e084b34e2828.png)。

  

 ![$\forall x \in \mathbb{R}^n$](什么是半正定_(PSD)_矩阵_images/img_004_a8cb9252e37c.png) 是数学符号，表示“对于所有（for all）属于（in）n维实数空间（![$\mathbb{R}^n$](什么是半正定_(PSD)_矩阵_images/img_005_37c823c20d04.png)）的向量x”。

### 通俗拆解

-   ∀ ：读作“for all”或“任意”，表示“所有”或“每一个”。它像一个倒写的A（All的首字母）。
    
-   x ：一个变量，通常代表向量或点。这里是任意的。
    
-   ∈ ：读作“in”或“belongs to”，表示“属于”或“元素属于集合”。像一个变形的E（Element的首字母）。
    
-   ![$\mathbb{R}^n$](什么是半正定_(PSD)_矩阵_images/img_006_37c823c20d04.png)：![$\mathbb{R}$](什么是半正定_(PSD)_矩阵_images/img_007_7cbd8fcca432.png) 是实数集（Real numbers，所有实数如1、π、-2.5），n 表示n维空间。比如：
    

-   n=1：![$\mathbb{R}^1$](什么是半正定_(PSD)_矩阵_images/img_008_dec7a29ec5ca.png)就是实数轴（所有实数）。
    
-   n=2：![$\mathbb{R}^2$](什么是半正定_(PSD)_矩阵_images/img_009_673d0665a7d0.png)是平面（坐标(x,y)）。
    
-   n=3：![$\mathbb{R}^3$](什么是半正定_(PSD)_矩阵_images/img_010_6d3c69278ae2.png)是3D空间（x,y,z）。
    
-   一般n：高维向量空间（机器学习常见）。
    
      
    

整体：这个短语常用于定义或定理开头，意思是“这个陈述对n维实数空间里的每一个x都成立”。

  

#### 2. **数学拆解：如何判断一个矩阵是PSD？（步步推理）**

-   核心条件：对于n×n对称矩阵A，满足 ![x^T A x](什么是半正定_(PSD)_矩阵_images/img_011_e084b34e2828.png) ≥ 0 ∀x ∈ ℝⁿ。
    

-   如果严格 > 0 for x ≠ 0，则是Positive Definite (PD)。
    
      
    

-   等价判定方法
    
    （这些是数学上证明等价的，用于实际检查）：
    

1.  特征值法
    
    （最常见）：A的所有特征值 ![\lambda _i \geq 0](什么是半正定_(PSD)_矩阵_images/img_012_fb043a929453.png)（对于PD，>0）。因为A可对角化（对称），![x^T A x = \sum \lambda _i (u_i · x)^2 \geq 0](什么是半正定_(PSD)_矩阵_images/img_013_bc24bff9c173.png) （![u_i](什么是半正定_(PSD)_矩阵_images/img_014_2e12c4b3ffcb.png)是特征向量）。
    
2.  Cholesky分解：A可以分解为![L L^T](什么是半正定_(PSD)_矩阵_images/img_015_685efc144132.png)，其中L是下三角矩阵（对于PD，L唯一且对角正）。
    
3.  主子式法（Sylvester准则）：所有主子矩阵的行列式 ≥ 0（对于PD，>0）。
    
4.  二次型：A定义的二次型  ![f(x) = x^T A x](什么是半正定_(PSD)_矩阵_images/img_016_82823de73533.png) 是半正定的。
    
      
    

  

-   **推理步骤**
    
    （为什么这些等价？简单证明思路）：
    

-   从定义：假设A有负特征值λ < 0，对应特征向量v，则 ![v^T A v = \lambda ||v||^2 < 0](什么是半正定_(PSD)_矩阵_images/img_017_2b7b81c98a92.png)，违反定义。所以所有λ ≥ 0。
    
-   反之，如果所有λ ≥ 0，用谱分解 A = Q Λ Q^T（Q正交），则 ![x^T A x = y^T \Lambda y](什么是半正定_(PSD)_矩阵_images/img_018_152c7631b0d1.png)（![y=Q^T x](什么是半正定_(PSD)_矩阵_images/img_019_5c3f3c0fa4e2.png)），![\sum \lambda _i y_i^2 \geq 0](什么是半正定_(PSD)_矩阵_images/img_020_07db5ade855d.png)。
    
-   对于Gram矩阵：回想Gram ![G = V^T V](什么是半正定_(PSD)_矩阵_images/img_021_b5f1f0c6cb8e.png)，所有特征值 ≥ 0，因为 ![x^T G x = ||V x||^2 \geq 0](什么是半正定_(PSD)_矩阵_images/img_022_b603ef8ac644.png)（范数平方非负）。
    
      
    

  

用表格比较：

矩阵类型

条件 (![x^T A x](什么是半正定_(PSD)_矩阵_images/img_023_e084b34e2828.png))

特征值

示例

是PSD?

PSD

≥0 ∀x

≥0

\[\[1,0\],\[0,0\]\] (零方向)

是

PD

\>0 for x≠0

\>0

\[\[1,0\],\[0,1\]\] (单位)

是（严格）

非PSD

存在<0

有<0

\[\[0,1\],\[1,0\]\] (旋转)

否

##   

## 1）先看一句话定义（最核心）

对一个 **实对称矩阵** A：

  

-   **PSD（半正定）**：
    
    ![$x^T A x \ge 0,\quad \forall x\in\mathbb{R}^n$](什么是半正定_(PSD)_矩阵_images/img_024_f51bdc95f049.png)
    
      
    
-   **PD（正定）**：
    
    ![$x^T A x > 0,\quad \forall x\ne 0$](什么是半正定_(PSD)_矩阵_images/img_025_a88fcf611ad6.png)
    

区别只在一个符号：

-   PSD：允许“等于 0”
    
-   PD：除了 x=0，永远严格大于 0
    

* * *

##   

## 2）![$x^T A x$](什么是半正定_(PSD)_矩阵_images/img_026_e084b34e2828.png) 到底是什么？（通俗理解）

它叫做 **二次型**。你可以把它理解成：

> 向量 x 经过矩阵 A 这个“变形规则”后，算出来的一种“能量 / 长度平方 / 代价”

所以：

-   PSD 的意思就是：这个“能量值”永远不会变成负数
    
-   “半”字表示：它可能为 0（不是永远严格为正）
    

* * *

##   

## 3）用特征值一句话判断（最常用）

对于 **实对称矩阵** A，它有实特征值 ![$\lambda_i$](什么是半正定_(PSD)_矩阵_images/img_027_db8d60a4ef05.png)：

-   A 是 **PSD** ⟺ 所有特征值
    
      λi≥0
    
-   A 是 **PD** ⟺ 所有特征值
    
      λi>0
    

💡所以 PSD = “没有负特征值”。

* * *

##   

## 4）几何直觉：像一个“碗”，但可能是“扁碗”

把函数

![$f(x)=x^T A x$](什么是半正定_(PSD)_矩阵_images/img_028_856a1fcb78b7.png)

想成一个曲面：

-   PD：像一个“圆润的碗”，中心最低点只有一个（严格往上）
    
-   PSD：像一个“碗，但某些方向是平的”  
      也就是你沿某些方向走，值可能一直是 0，不会上升也不下降
    

这就是为什么 PSD 允许 ![$x^TAx=0$](什么是半正定_(PSD)_矩阵_images/img_029_937aacd666a7.png)。

* * *

##   

## 5）一个最直观的例子（2×2）

### ✅ PSD 但不是 PD

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&0 \end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_030_2a89d94f3973.png)

对任意 ![$\begin{array}{c} x=\begin{bmatrix}x_1\\x_2\end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_031_a6dcb9384694.png)：

![$x^TAx = x_1^2 \ge 0$](什么是半正定_(PSD)_矩阵_images/img_032_9d6feadca14d.png)

-   永远不负 ✅（所以 PSD）
    
      
    
-   但如果你取 ![$\begin{array}{c} x=\begin{bmatrix}0\\1\end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_033_fc68cba7bb5f.png)，那么  
    ![$x^TAx=0$](什么是半正定_(PSD)_矩阵_images/img_034_937aacd666a7.png)  
      不是严格大于 0 ❌（所以不是 PD）
    

* * *

##   

## 6）PSD 的“分解式理解”更像人话

一个矩阵是 PSD，等价于它可以写成：

![$A = B^T B$](什么是半正定_(PSD)_矩阵_images/img_035_010481c5a1ab.png)

或![$A = C C^T$](什么是半正定_(PSD)_矩阵_images/img_036_44b3a32e1d62.png)

这非常有直觉：

-    ![$B^TB$](什么是半正定_(PSD)_矩阵_images/img_037_8279085815c4.png) 这种结构“天生不会产生负能量”  
      因为
    

![$x^T(B^TB)x = (Bx)^T(Bx)=\|Bx\|^2\ge 0$](什么是半正定_(PSD)_矩阵_images/img_038_4408d9d3291f.png)

✅ 所以 PSD 就是“某种平方形式”。

* * *

##   

## 7）为什么 Gram 矩阵一定是 PSD？

 Gram 矩阵（内积矩阵）：

![$G = X^T X$](什么是半正定_(PSD)_矩阵_images/img_039_98dfb5747874.png)

对任意 x：

![$x^T G x = x^T X^T X x = \|Xx\|^2 \ge 0$](什么是半正定_(PSD)_矩阵_images/img_040_59f6372ed48d.png)

所以 **Gram 矩阵天然 PSD**。

这也是机器学习里到处出现 PSD 的原因（核方法、协方差矩阵、最小二乘等）。

  

* * *

## 8）PSD 常见在哪些地方？

非常常见：

1.  协方差矩阵 Σ 一定 PSD  
      （方差不可能为负）
    
2.  最小二乘![$X^TX$](什么是半正定_(PSD)_矩阵_images/img_041_bd714698ceaa.png)是 PSD（很多优化问题依赖它）
    
3.  核矩阵 Kernel Matrix 必须 PSD  
      （否则不是真正的“内积”）
    
      
    

* * *

## 9）一句话总结（最精确+最通俗）

> **PSD（半正定）就是：对任何向量 x，二次型 ![$x^TAx$](什么是半正定_(PSD)_矩阵_images/img_042_e084b34e2828.png) 永远不为负；它允许某些方向的“能量”为 0，所以叫“半”。**

下面拿图里的公式

![$x^T A x \ge 0$](什么是半正定_(PSD)_矩阵_images/img_043_6c700ad25612.png)

用一个具体数字矩阵 + 代入一个 x 的方式，带你“算出一次能量值”，让 PSD 的感觉更直观。

让你真正感受到：

> 为什么 ![$x^T A x$](什么是半正定_(PSD)_矩阵_images/img_044_e084b34e2828.png) 永远不负  
> 以及“半”到底半在哪里。

# 1）先把 ![$x^T A x$](什么是半正定_(PSD)_矩阵_images/img_045_e084b34e2828.png) 展开一次（最关键的算式）

令

![$\begin{array}{c} x=\begin{bmatrix}x_1\\x_2\end{bmatrix},\quad A=\begin{bmatrix}a&b\\b&c\end{bmatrix} \quad \end{array}$](什么是半正定_(PSD)_矩阵_images/img_046_43126ebf72c4.png)(对称矩阵)

那么：

![$\begin{array}{c} x^TAx= \begin{bmatrix}x_1&x_2\end{bmatrix} \begin{bmatrix}a&b\\b&c\end{bmatrix} \begin{bmatrix}x_1\\x_2\end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_047_0e8657c411f4.png)

先算 Ax：

![$\begin{array}{c} Ax= \begin{bmatrix} ax_1+bx_2\\ bx_1+cx_2 \end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_048_9ae488c5ca91.png)

再左乘 ![$x^T$](什么是半正定_(PSD)_矩阵_images/img_049_aed5d194df41.png)：

![$x^TAx=x_1(ax_1+bx_2)+x_2(bx_1+cx_2)$](什么是半正定_(PSD)_矩阵_images/img_050_1c201eebe17d.png)

整理：

![$x^TAx=ax_1^2+2bx_1x_2+cx_2^2$](什么是半正定_(PSD)_矩阵_images/img_051_4d83f855b5c2.png)

✅ 所以它本质就是一个二次函数（平方+交叉项）。

  

* * *

# 2）例子 1：最简单的 PSD（你一眼就能看懂）

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&0 \end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_052_2a89d94f3973.png)

那么：

![$x^TAx = 1\cdot x_1^2 + 0 + 0\cdot x_2^2 = x_1^2\ge 0$](什么是半正定_(PSD)_矩阵_images/img_053_b5f06c0bbe13.png)

随便挑几个向量试试：

-   ![$\begin{array}{c} x=\begin{bmatrix}3\\5\end{bmatrix}\Rightarrow x^TAx=3^2=9 \end{array}$](什么是半正定_(PSD)_矩阵_images/img_054_f2ff634f3eb8.png)
    
      
    
-   ![$\begin{array}{c} x=\begin{bmatrix}0\\7\end{bmatrix}\Rightarrow x^TAx=0^2=0 \end{array}$](什么是半正定_(PSD)_矩阵_images/img_055_e134a85511f9.png)
    

✅ 永远不会负数 → **PSD**

但注意第二个方向：

![$\begin{array}{c} x=\begin{bmatrix}0\\7\end{bmatrix}\Rightarrow x^TAx=0 \end{array}$](什么是半正定_(PSD)_矩阵_images/img_056_87ee71365661.png)

说明在“纯 x2 方向”上，它完全 **不抬升**。

这就是“半”的直观含义：

> 有些方向能量=0（平坦），但不会掉到负数。

* * *

#   

# 3）例子 2：PD（严格正定）是什么样？

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&1 \end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_057_6a892d8bec9f.png)

![$x^TAx=x_1^2+x_2^2$](什么是半正定_(PSD)_矩阵_images/img_058_f90d33742c59.png)

你只要 x≠0，就必然：

![$x_1^2+x_2^2>0$](什么是半正定_(PSD)_矩阵_images/img_059_3eb088aee5fb.png)

✅ 所以它是 **PD**（严格正）

* * *

#   

# 4）例子 3：带交叉项的 PSD（更像真实情况）

我们来个常见形式：

![$\begin{array}{c} A= \begin{bmatrix} 1&1\\ 1&1 \end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_060_6f182dc34b79.png)

展开：

![$x^TAx=1\cdot x_1^2 +2\cdot 1\cdot x_1x_2 + 1\cdot x_2^2 = (x_1+x_2)^2$](什么是半正定_(PSD)_矩阵_images/img_061_32cd2e7d6b8a.png)

注意这非常漂亮：

![$(x_1+x_2)^2\ge 0$](什么是半正定_(PSD)_矩阵_images/img_062_cb5204c3c0b5.png)

✅ 永远不负，所以 PSD。

但它也会“半”：

如果取 ![$\begin{array}{c} x=\begin{bmatrix}1\\-1\end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_063_aa869d877ddb.png) 

![$x^TAx=(1+(-1))^2=0$](什么是半正定_(PSD)_矩阵_images/img_064_7b485ca583ca.png)

也就是说：

> 沿着方向 (1,−1)（一正一负抵消），能量就是 0  
> 这条方向是“平的槽”。

* * *

#   

# 5）例子 4：不是 PSD（出现负数了）

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&-1 \end{bmatrix} \end{array}$](D:\电脑文件\公众号知识库\数学_线性代数\什么是半正定_(PSD)_矩阵_images\img_000_89802e4b4170.png)

展开：

![$x^TAx=x_1^2-x_2^2$](什么是半正定_(PSD)_矩阵_images/img_066_0bf17a5aa174.png)

取 ![$\begin{array}{c} x=\begin{bmatrix}0\\1\end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_067_fc68cba7bb5f.png)：

![$x^TAx=0^2-1^2=-1<0$](什么是半正定_(PSD)_矩阵_images/img_068_9b38697af26f.png)

❌ 出现负数 → **不是 PSD**

直觉：

> 有些方向往下掉（像马鞍形），所以不半正定。

* * *

#   

# 6）PSD 的“平方分解”直觉（超级重要）

你只要记住一句：

> **PSD = 某种平方**

例如：

![$\begin{array}{c} A= \begin{bmatrix} 1&1\\ 1&1 \end{bmatrix} = \underbrace{ \begin{bmatrix} 1\\ 1 \end{bmatrix}}_{C} \underbrace{ \begin{bmatrix} 1&1 \end{bmatrix}}_{C^T} =CC^T \end{array}$](什么是半正定_(PSD)_矩阵_images/img_069_28914d98ccf9.png)

于是：

![$x^TAx = x^T(CC^T)x = (C^Tx)^T(C^Tx)=\|C^Tx\|^2\ge 0$](什么是半正定_(PSD)_矩阵_images/img_070_d9f6e87cea0d.png)

你看，“平方”一出现，永远不可能是负的。

* * *

#   

# 7）“半”的本质：为什么会出现 0？

如果 A 是 PSD，但不是 PD，那必然存在非零向量 x≠0，使得：

![$x^TAx=0$](什么是半正定_(PSD)_矩阵_images/img_071_937aacd666a7.png)

这说明：

> A 有“压扁掉”的方向  
> 也就是某些方向被压到 0 长度（信息丢失）

用特征值语言就是：

-   PSD：特征值 λ≥0
    
-   “半”：至少有一个特征值 λ=0
    

* * *

#   

# 8）一眼判断：2×2 PSD 的“快速条件”

对称矩阵：

![$\begin{array}{c} A= \begin{bmatrix} a&b\\ b&c \end{bmatrix} \end{array}$](什么是半正定_(PSD)_矩阵_images/img_072_87ddb150b28c.png)

它是 PSD 的充要条件之一（很常用）：

1.  a≥0
    
2.  c≥0
    
3.  行列式 ![$\det(A)=ac-b^2 \ge 0$](什么是半正定_(PSD)_矩阵_images/img_073_4c4f9e302274.png) 
    

为什么？

因为它保证二次型不会被交叉项拖成负数。

* * *

#   

# 9）机器学习里 PSD 为什么特别常见？

因为很多东西都是这种形态：

### ✅ Gram 矩阵

![$G=X^TX$](什么是半正定_(PSD)_矩阵_images/img_074_98dfb5747874.png)

一定 PSD。

### ✅ 协方差矩阵

![$\Sigma=\mathbb{E}[(x-\mu)(x-\mu)^T]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tx06P2K1ukiaHgYVOwslr0aibWDMaia7P1x1WBicXXbqHsSWlkVlr6epXRQ/640?wx_fmt=png&from=appmsg)

一定 PSD。

### ✅ 最小二乘的 Hessian

![$H=2X^TX$](什么是半正定_(PSD)_矩阵_images/img_075_89314cb60cb1.png)

PSD（所以优化是“凸”的，不会乱凹下去）。

* * *

# 10）一句话收尾（你应该抓住的“感觉”）

✅ \*\*PSD（半正定）\*\*就是：

> 它把任意方向的向量 x，算出来的“能量” ![$x^TAx$](什么是半正定_(PSD)_矩阵_images/img_076_e084b34e2828.png) 永远 ≥ 0  
> 但允许某些特殊方向能量 = 0（平坦、被压扁），所以叫“半”。