# 矩阵的特征值分解（EVD）


> 原文地址: [https://mp.weixin.qq.com/s/SiYhUKErfPi3mstkQRZ7aA](https://mp.weixin.qq.com/s/SiYhUKErfPi3mstkQRZ7aA)

     下图展示的是矩阵的特征值分解（Eigenvalue Decomposition，简称 EVD）的标准形式。

![](矩阵的特征值分解（EVD）_images/img_000_720da97f7d54.png)  
编辑

###   

图片中的等式为：

![$\mathbf{A} = \mathbf{Q} \, \mathbf{\Lambda} \, \mathbf{Q}^{-1}$](矩阵的特征值分解（EVD）_images/img_001_f0f7ef9d61df.png)

-   左侧：矩阵 **A**（用 3×3 网格表示，暗示一个一般的方阵）。
    
-   中间部分：
    

-   Q：列向量由 **V₁, V₂, V₃** 组成，标注为 “Eigen vectors of A”（A 的特征向量）。
    
-   Λ（大写希腊字母 Lambda）：对角矩阵，对角元素为 **λ₁, λ₂, λ₃**，标注为 “Eigen values of A”（A 的特征值）。
    
      
    

-   右侧：**Q⁻¹**（Q 的逆矩阵），同样用 **V₁, V₂, V₃** 表示，并标注为 “Eigen vectors of A”。
    

注意：图片在 Q⁻¹ 部分重复使用了相同的特征向量符号 V₁, V₂, V₃，这在一般情况下是不准确的（逆矩阵的列通常不是特征向量），可能是一种简化画法，或者意在强调 Q 由特征向量构成。实际中 Q⁻¹ 的列是与 Q 相关的，但不一定是相同的特征向量。

### 特征值分解（EVD）详解

**定义** 对于一个 n×n 方阵 **A**，如果存在可逆矩阵 **Q** 和对角矩阵 **Λ**，使得

![$\mathbf{A} = \mathbf{Q} \, \mathbf{\Lambda} \, \mathbf{Q}^{-1}$](矩阵的特征值分解（EVD）_images/img_002_f0f7ef9d61df.png)

则称矩阵 **A** 可对角化（diagonalizable），这个过程称为**特征值分解**。

-   Λ 的对角元素 λ₁, λ₂, …, λₙ 是 **A** 的特征值。
    
-   Q 的列是对应特征值的特征向量。
    

  

**几何意义** 特征值分解把矩阵 **A** 表示为：先将坐标系旋转到特征向量构成的基底（通过 Q⁻¹），在该基底下只进行缩放（对角矩阵 Λ），再旋转回原坐标系（通过 Q）。因此，**A** 的线性变换本质上是沿着特征方向的独立缩放。

  

**存在条件** 并非所有方阵都可对角化。**A** 可对角化的充要条件是：

-   它有 n 个线性无关的特征向量（即特征空间的总维度为 n）。 等价于：
    
-   每个特征值的代数重数等于几何重数（几何重数 = 特征空间维度）。
    
-   或：最小多项式没有重复因子。
    

如果 **A** 是实对称矩阵（或更广的正规矩阵），则一定可对角化，且 **Q** 可取为正交矩阵，此时 Q⁻¹ = Qᵀ，分解形式变为 **A = Q Λ Qᵀ**（这也是谱分解）。

  

**计算步骤**

1.  求解特征多项式 det(A − λI) = 0，得到特征值 λᵢ。
    
2.  对每个特征值 λᵢ，求解 (A − λᵢI)v = 0，得到特征向量 vᵢ。
    
3.  若得到 n 个线性无关的特征向量，组成 Q = \[v₁ v₂ … vₙ\]。
    
4.  构造对角矩阵 Λ，计算 Q⁻¹，即完成分解。
    

  

**应用场景**

-   动力系统：Aᵏ = Q Λᵏ Q⁻¹，Λᵏ 只需对特征值取幂，计算高效。
    
-   主成分分析（PCA）：对协方差矩阵（对称）做 EVD，特征向量给出主方向。
    
-   稳定性分析：特征值实部决定系统稳定性。
    
-   量子力学：可观测量对应自伴算符，其谱分解给出测量结果的可能值（特征值）和本征态。
    

  

**与奇异值分解（SVD）的区别** EVD 只适用于方阵，且要求可对角化；SVD 适用于任意矩形矩阵，形式为 A = U Σ Vᵀ，始终存在，且 U、V 都是正交矩阵。

图里每一块含义如下（从左到右）：

## 1) A：原矩阵（线性变换）

左边的 A 你可以把它理解成一个“机器”：输入一个向量 x，输出 Ax。  
它会对空间做某种混合变换（旋转、拉伸、剪切等的组合）。

  

* * *

## 2) Q：由特征向量组成的矩阵（换坐标系）

图中 Q 的三列是 v1,v2,v3，并标注为 “Eigen vectors of A”。

![$Q = [\,v_1\; v_2\; v_3\,]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1GZzwkKYxz8bLEUaaV0ic6Rnicxicp6yy2UjoKe2zU94UiaNRmyL7W2GuL8r2jY2RaceWJnLc0QUmNA/640?wx_fmt=png&from=appmsg)

每个 ![$v_i$](矩阵的特征值分解（EVD）_images/img_003_4e7b373bf293.png) 满足特征方程：

![$A v_i = \lambda_i v_i$](矩阵的特征值分解（EVD）_images/img_004_58ec4039e823.png)

直觉：  
**特征向量是“被 A 作用后方向不变”的方向**（只会被拉伸/压缩，不会被转到别的方向）。

  

* * *

## 3) Λ：对角矩阵（特征值 = 各方向伸缩比例）

图中间的 Λ 是对角阵：

![$\Lambda=\mathrm{diag}(\lambda_1,\lambda_2,\lambda_3)$](矩阵的特征值分解（EVD）_images/img_005_78ec0cac82b8.png)

含义很直接：  
在特征向量坐标系里，A 这个复杂变换变成了“分别沿各轴缩放”：

-   沿 v1 方向缩放 λ1
    
-   沿 v2 方向缩放 λ2
    
-   沿 v3 方向缩放 λ3
    

  

* * *

## 4) ![$Q^{-1}$](矩阵的特征值分解（EVD）_images/img_006_02b2d2b01d65.png)：把向量变回原坐标系

右边是 ![$Q^{-1}$](矩阵的特征值分解（EVD）_images/img_007_02b2d2b01d65.png)（图里也写成“Eigen vectors of A”的逆）。

把整个乘法顺序当成“步骤”会更好懂：

![$Ax = Q\,\Lambda\,Q^{-1}x$](矩阵的特征值分解（EVD）_images/img_008_d23bd364698d.png)

也就是：

1.  先换基：![$x' = Q^{-1}x$](矩阵的特征值分解（EVD）_images/img_009_fbddb39c3f6f.png)（把 x 用特征向量当坐标轴来表示）
    
2.  再缩放：![$y'=\Lambda x$](矩阵的特征值分解（EVD）_images/img_010_0d6cc8345622.png)（在这个坐标系里只做轴向缩放）
    
3.  换回去：![$y = Qy'$](矩阵的特征值分解（EVD）_images/img_011_5cd2ac1b88d0.png)
    

这就是 EVD 的核心直觉：

> **用特征向量做坐标轴，A 在新坐标系里变成“对角的、互不干扰的缩放”。**

* * *

#   

# 什么时候能做 EVD？

并不是所有方阵都能写成 ![$A=Q\Lambda Q^{-1}$](矩阵的特征值分解（EVD）_images/img_012_0e8099e4e148.png)。需要 A **可对角化**（有足够多线性无关的特征向量）。

-   一般情况：要求 A 有 n 个线性无关特征向量（n×n）
    
-   特别重要的保证：若 A 是 **实对称矩阵**（![$A=A^T$](矩阵的特征值分解（EVD）_images/img_013_4de14eccf87a.png)），一定可对角化，而且还能更漂亮：
    

![$A = Q\,\Lambda\,Q^T$](矩阵的特征值分解（EVD）_images/img_014_325d819829d7.png)

因为这时 Q 的列向量可以选成**正交归一**的特征向量，所以 ![$Q^{-1}=Q^T$](矩阵的特征值分解（EVD）_images/img_015_d0f2a9b1fd24.png)。

* * *

# EVD 有什么用？

因为对角矩阵太好算了，EVD 会把很多难题变简单：

-   快速算幂：  ![$\;A^k = Q\Lambda^k Q^{-1}$](矩阵的特征值分解（EVD）_images/img_016_e639a13d7084.png)（![$\Lambda^k$](矩阵的特征值分解（EVD）_images/img_017_ca1f4ba480df.png) 只要对角元素各自 k 次方）
    
-   矩阵函数：![$\exp(A)=Q\exp(\Lambda)Q^{-1}$](矩阵的特征值分解（EVD）_images/img_018_a2b6febe70d4.png)（用于微分方程、稳定性分析）
    
-   PCA / 协方差分析：协方差矩阵是对称 PSD，EVD 给出主方向（特征向量）和方差大小（特征值）
    
-   图/网络：拉普拉斯矩阵特征值反映连通性、聚类结构
    

* * *

#   

# 跟 SVD 的关系（顺带点一下）

-   SVD：任何矩阵（甚至非方阵）都一定存在分解 ![$A=U\Sigma V^T$](矩阵的特征值分解（EVD）_images/img_019_e03ced5177ac.png) 
    
-   EVD：主要针对方阵且要“可对角化”
    
-   若 A 是对称 PSD（比如 ![$X^TX$](矩阵的特征值分解（EVD）_images/img_020_bca8bf7be8a5.png)），那它的 EVD 与 SVD 的结果紧密对应（特征值 = 奇异值平方）
    

  

举一个**不太“平凡”（非对角）但又特别好算**的 3×3 例子，完整走一遍 EVD：

![$\begin{array}{c} A=\begin{bmatrix} 2&1&0\\ 1&2&0\\ 0&0&4 \end{bmatrix} \end{array}$](D:\电脑文件\公众号知识库\数学_线性代数\矩阵的特征值分解（EVD）_images\img_000_d21c0eb48fbc.png)

* * *

## 1）先求特征值：解 det⁡(A−λI)=0

![$\begin{array}{c} A-\lambda I= \begin{bmatrix} 2-\lambda&1&0\\ 1&2-\lambda&0\\ 0&0&4-\lambda \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_022_0822197fbb7e.png)

行列式因为是“2×2块 + 1×1块”，很好算：

![$\begin{array}{c} \det(A-\lambda I)=(4-\lambda)\det \begin{bmatrix} 2-\lambda&1\\ 1&2-\lambda \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_023_e37c1c8738ce.png)

## 方法：按第 3 行展开（Laplace 展开）

第 3 行是 ![$[0,\ 0,\ 4-\lambda]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1GZzwkKYxz8bLEUaaV0ic6ynqicSL1M6bB5ibOrmSCPzCxWag2KqjvDdicN5j8fgyoq2I2rV0L60lQQ/640?wx_fmt=png&from=appmsg)。

行列式按第 3 行展开的公式是：

![$\det(M)=\sum_{j=1}^3 (-1)^{3+j}\,m_{3j}\,\det(M_{3j})$](矩阵的特征值分解（EVD）_images/img_024_cd5feb94ad3f.png)

这里 m31=0, m32=0，所以前两项直接为 0，只剩下 j=3 那一项：

![$\det(A-\lambda I)=(-1)^{3+3}(4-\lambda)\det(M_{33})$](矩阵的特征值分解（EVD）_images/img_025_b0914221b92f.png)

而 ![$(-1)^{6}=1$](矩阵的特征值分解（EVD）_images/img_026_9c609965007a.png)。

M33 是把原矩阵**删掉第 3 行、第 3 列**后剩下的 2×2 子矩阵：

![$\begin{array}{c} M_{33}= \begin{bmatrix} 2-\lambda&1\\ 1&2-\lambda \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_027_5df493fb9bc5.png)

所以：

![$\begin{array}{c} \det(A-\lambda I)=(4-\lambda)\det \begin{bmatrix} 2-\lambda&1\\ 1&2-\lambda \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_028_e37c1c8738ce.png)

* * *

## 一句话直觉

这个矩阵其实是“左上 2×2 块 + 右下 1×1 块”的**块对角矩阵**：

![$\begin{bmatrix} \boxed{\begin{matrix}2-\lambda&1\\1&2-\lambda\end{matrix}}&0\\ 0&\boxed{4-\lambda} \end{bmatrix}$](矩阵的特征值分解（EVD）_images/img_029_75b7e4aef454.png)

块对角矩阵的行列式 = 各块行列式的乘积  
所以自然就变成 (4−λ)×det⁡(左上 2×2)。

而

![$\begin{array}{c} \det\begin{bmatrix} 2-\lambda&1\\ 1&2-\lambda \end{bmatrix} =(2-\lambda)^2-1 =\lambda^2-4\lambda+3 =(\lambda-1)(\lambda-3) \end{array}$](矩阵的特征值分解（EVD）_images/img_030_09930e298645.png)

所以

![$\det(A-\lambda I)=(4-\lambda)(\lambda-1)(\lambda-3)=0$](矩阵的特征值分解（EVD）_images/img_031_7bc92a34dfd0.png)

得到三个特征值：

![$\lambda_1=3,\quad \lambda_2=1,\quad \lambda_3=4$](矩阵的特征值分解（EVD）_images/img_032_5720aa1310a4.png)

  

* * *

## 2）求特征向量：解 (A−λI)v=0

### (a) λ=3

![$\begin{array}{c} A-3I= \begin{bmatrix} -1&1&0\\ 1&-1&0\\ 0&0&1 \end{bmatrix} \Rightarrow \begin{cases} -x+y=0\\ x-y=0\\ z=0 \end{cases} \Rightarrow y=x,\ z=0 \end{array}$](矩阵的特征值分解（EVD）_images/img_033_9a5a8152c619.png)

取一个向量：

![$\begin{array}{c} v_1=\begin{bmatrix}1\\1\\0\end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_034_41501b75eb64.png)

### (b) λ=1

![$\begin{array}{c} A-I= \begin{bmatrix} 1&1&0\\ 1&1&0\\ 0&0&3 \end{bmatrix} \Rightarrow \begin{cases} x+y=0\\ z=0 \end{cases} \Rightarrow y=-x,\ z=0 \end{array}$](矩阵的特征值分解（EVD）_images/img_035_92adfe60e8d1.png)

取：

![$\begin{array}{c} v_2=\begin{bmatrix}1\\-1\\0\end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_036_4e862bddb090.png)

### (c) λ=4

![$\begin{array}{c} A-4I= \begin{bmatrix} -2&1&0\\ 1&-2&0\\ 0&0&0 \end{bmatrix} \Rightarrow \begin{cases} -2x+y=0\\ x-2y=0 \end{cases} \Rightarrow x=y=0,\ z\ \text{} \end{array}$](矩阵的特征值分解（EVD）_images/img_037_b911b43d1d95.png)

取：

![$\begin{array}{c} v_3=\begin{bmatrix}0\\0\\1\end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_038_65e0f96246fa.png)

* * *

##   

## 3）组装 Q,Λ，写出 EVD

因为这里 A 是**对称矩阵**，可以把特征向量单位化并令 Q 正交，于是 ![$Q^{-1}=Q^T$](矩阵的特征值分解（EVD）_images/img_039_d0f2a9b1fd24.png)。

单位化：

![$\begin{array}{c} u_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\\0\end{bmatrix},\quad u_2=\frac{1}{\sqrt2}\begin{bmatrix}1\\-1\\0\end{bmatrix},\quad u_3=\begin{bmatrix}0\\0\\1\end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_040_a3c8f0fc46ce.png)

于是特征分解为：

![$A=Q\Lambda Q^T$](矩阵的特征值分解（EVD）_images/img_041_5c8726cc3d35.png)

* * *

##   

## 4）验证一下确实等于原来的 A

用一个非常“稳”的方式验证：

![$A=\sum_{i=1}^3 \lambda_i\,u_i u_i^T$](矩阵的特征值分解（EVD）_images/img_042_85fe39e873d9.png)

先算外积：

![$\begin{array}{c} u_1u_1^T=\frac12 \begin{bmatrix} 1&1&0\\ 1&1&0\\ 0&0&0 \end{bmatrix},\quad u_2u_2^T=\frac12 \begin{bmatrix} 1&-1&0\\ -1&1&0\\ 0&0&0 \end{bmatrix},\quad u_3u_3^T= \begin{bmatrix} 0&0&0\\ 0&0&0\\ 0&0&1 \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_043_9d61434ebf04.png)

加权求和：

![$\begin{array}{c} 3u_1u_1^T+1u_2u_2^T = \frac12 \begin{bmatrix} 3+1&3-1&0\\ 3-1&3+1&0\\ 0&0&0 \end{bmatrix} = \begin{bmatrix} 2&1&0\\ 1&2&0\\ 0&0&0 \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_044_16eef72b484a.png)

再加上 ![$4u_3u_3^T$](矩阵的特征值分解（EVD）_images/img_045_cb121bad131d.png)：

![$\begin{array}{c} A= \begin{bmatrix} 2&1&0\\ 1&2&0\\ 0&0&0 \end{bmatrix} + \begin{bmatrix} 0&0&0\\ 0&0&0\\ 0&0&4 \end{bmatrix} = \begin{bmatrix} 2&1&0\\ 1&2&0\\ 0&0&4 \end{bmatrix} \end{array}$](矩阵的特征值分解（EVD）_images/img_046_bc3de62a73fe.png)

完全吻合 ✅