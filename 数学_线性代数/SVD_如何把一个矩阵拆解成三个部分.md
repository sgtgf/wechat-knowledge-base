# SVD：如何把一个矩阵拆解成三个部分


> 原文地址: [https://mp.weixin.qq.com/s/2q66NXsfhEJ3Btxlb3QEvA](https://mp.weixin.qq.com/s/2q66NXsfhEJ3Btxlb3QEvA)

![](SVD_如何把一个矩阵拆解成三个部分_images/img_000_98889f62b535.png)

  
  

      假设“M矩阵”指的是一个任意矩阵，奇异值分解（SVD）就是一种方法，能把这个矩阵“拆解”成三个更简单的矩阵：U、Σ（读作Sigma）和V^T。通俗地说，这就像把一张复杂照片拆成“框架”（U）、“重要程度列表”（Σ）和“图案模板”（V^T）。最终，你可以用这三个部分重新拼回原矩阵，但过程中能看到哪些部分是最关键的，能帮你压缩数据或找出隐藏模式。

为什么叫“拆解”？因为SVD不是随意切分，而是基于数学原理，让分解后的部分捕捉矩阵的“本质”。它适用于任何形状的矩阵（不一定是方形的），超级实用。比如，在图像处理中，它能帮你去除噪音；在推荐系统中，能找出用户偏好。

下面我用一个 **具体的数值例子**，把图里的

![$M = U S V^{H}$](SVD_如何把一个矩阵拆解成三个部分_images/img_001_01e8eed7a064.png)

完整拆出来（这里是实数矩阵，所以 ![$V^{H}=V^{T}$](SVD_如何把一个矩阵拆解成三个部分_images/img_002_4fcdaf89249c.png)）。

# 例子：M 是 3×2

取矩阵：

![$\begin{array}{c} M= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} \qquad (m=3,\ n=2) \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_003_ee2873b2f23b.png)

SVD 要把它拆成：

![$\boxed{M = U\,S\,V^{H}}$](SVD_如何把一个矩阵拆解成三个部分_images/img_004_016ff7aaf983.png)

其中尺寸对应为：

-   ![$U\in \mathbb{R}^{3\times 3}$](SVD_如何把一个矩阵拆解成三个部分_images/img_005_ea0c8df9abeb.png)
    
-   ![$S\in \mathbb{R}^{3\times 2}$](SVD_如何把一个矩阵拆解成三个部分_images/img_006_521a0063c315.png)
    
-   ![$V\in \mathbb{R}^{2\times 2}$](SVD_如何把一个矩阵拆解成三个部分_images/img_007_00dcc401a59d.png)，且 ![$V^{H}=V^{T}$](SVD_如何把一个矩阵拆解成三个部分_images/img_008_4fcdaf89249c.png) 
    

* * *

# 计算结果（数值版 SVD）

# 1) 奇异值矩阵 S

该矩阵的两个奇异值为：

![$\sigma_1 \approx 4.2755,\qquad \sigma_2 \approx 1.9287$](SVD_如何把一个矩阵拆解成三个部分_images/img_009_1be75fc60a81.png)

所以：

![$\begin{array}{c} S= \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \qquad (3\times 2) \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_010_aba09d9e0179.png)

* * *

##   

## 2) 右奇异向量矩阵 V 与 ![$V^T$](SVD_如何把一个矩阵拆解成三个部分_images/img_011_3e3dc8411447.png) 

![$\begin{array}{c} V= \begin{bmatrix} -0.7983 & -0.6022\\ \ \ 0.6022 & -0.7983 \end{bmatrix} \qquad (2\times 2) \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_012_0968452073f2.png)

因此

![$\begin{array}{c} V^{H}=V^T= \begin{bmatrix} -0.7983 & \ \ 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_013_0f44c5ca30cf.png)

* * *

##   

## 3) 左奇异向量矩阵 U

![$\begin{array}{c} U= \begin{bmatrix} -0.7010 & \ \ 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & \ \ 0.7276 \end{bmatrix} \qquad (3\times 3) \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_014_8ac850a2c9d5.png)

* * *

# 最终：完整的 LaTeX 拆解表达式

![$\begin{array}{c} { \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} = \begin{bmatrix} -0.7010 & 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & 0.7276 \end{bmatrix} \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \begin{bmatrix} -0.7983 & 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} } \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_015_61c631fd7da5.png)

* * *

# 补充：更常用的“经济型 SVD”（更贴合机器学习）

因为 M 是 3×2，其实只需要前 n=2 个方向：

![$M = \hat U\,\hat S\,V^T$](SVD_如何把一个矩阵拆解成三个部分_images/img_016_19c2b22b1102.png)

-   ![$\hat U\in \mathbb{R}^{3\times 2}$](SVD_如何把一个矩阵拆解成三个部分_images/img_017_de897bf0d72b.png)（取 U 的前两列）
    
-   ![$\hat S\in \mathbb{R}^{2\times 2}$](SVD_如何把一个矩阵拆解成三个部分_images/img_018_deba53486ca4.png)
    
-   ![$V^T\in \mathbb{R}^{2\times 2}$](SVD_如何把一个矩阵拆解成三个部分_images/img_019_6e77f079093f.png)
    

![$\begin{array}{c} \hat U= \begin{bmatrix} -0.7010 & 0.5228\\ -0.2817 & -0.8279\\ -0.6551 & -0.2034 \end{bmatrix}, \quad \hat S= \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_020_b4269e81c720.png)

![$\begin{array}{c} { M= \begin{bmatrix} -0.7010 & 0.5228\\ -0.2817 & -0.8279\\ -0.6551 & -0.2034 \end{bmatrix} \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287 \end{bmatrix} \begin{bmatrix} -0.7983 & 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} } \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_021_074dc94fc75a.png)

* * *

更“直观”的，还可以解释成一句话：

> **![$V^T$](SVD_如何把一个矩阵拆解成三个部分_images/img_022_3e3dc8411447.png)：把输入坐标系旋转到“最合适的方向” →  
> S：沿两个主方向拉伸（一个拉得大，一个拉得小） →  
> U：再把结果旋转到输出坐标系**

  

下面演示如何**从 ![$M^TM$](SVD_如何把一个矩阵拆解成三个部分_images/img_023_58b3eeadf463.png) 手算出 V 和奇异值 σ**（也就是 S 的对角线），一步一步写清楚 ✅  
 

# 例子矩阵

![$\begin{array}{c} M= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} \quad (3\times 2) \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_024_4b8a7393a603.png)

SVD：

![$M = U\,S\,V^T$](SVD_如何把一个矩阵拆解成三个部分_images/img_025_3776aafbdf6f.png)

* * *

# 第 1 步：先算 ![$M^T M$](SVD_如何把一个矩阵拆解成三个部分_images/img_026_58b3eeadf463.png) 

![$\begin{array}{c} M^T= \begin{bmatrix} 3 & 0 & 2\\ 1 & 2 & 2 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_027_fabee413f009.png)

![$\begin{array}{c} M^T M= \begin{bmatrix} 3 & 0 & 2\\ 1 & 2 & 2 \end{bmatrix} \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} = \begin{bmatrix} 13 & 7\\ 7 & 9 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_028_19b8a7e62a2e.png)

* * *

# 第 2 步：解特征值（得到 λ，再开方得 σ）

特征方程：

![$\det(M^TM-\lambda I)=0$](SVD_如何把一个矩阵拆解成三个部分_images/img_029_05566e8feff5.png)

展开：

![$\begin{array}{c} \det \begin{bmatrix} 13-\lambda & 7\\ 7 & 9-\lambda \end{bmatrix} =(13-\lambda)(9-\lambda)-49=0 \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_030_70df435e8080.png)

## (2.1）λ 是什么？

这里的 ![$I$](D:\电脑文件\公众号知识库\数学_线性代数\SVD_如何把一个矩阵拆解成三个部分_images\img_000_933d022fada7.png) 是 **单位矩阵**（跟 ![$M^TM$](SVD_如何把一个矩阵拆解成三个部分_images/img_032_58b3eeadf463.png) 同维度，都是 2×2）：

![$\begin{array}{c} I= \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_033_0fa01b786546.png)

所以

![$\begin{array}{c} \lambda I= \begin{bmatrix} \lambda & 0\\ 0 & \lambda \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_034_27fcb99b2af2.png)

* * *

##   

## (2.2）做矩阵相减：![$M^TM - \lambda I$](SVD_如何把一个矩阵拆解成三个部分_images/img_035_be8c80e89916.png)

![$\begin{array}{c} M^T M-\lambda I= \begin{bmatrix} 13 & 7\\ 7 & 9 \end{bmatrix} - \begin{bmatrix} \lambda & 0\\ 0 & \lambda \end{bmatrix} = \begin{bmatrix} 13-\lambda & 7-0\\ 7-0 & 9-\lambda \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_036_26aa21bff067.png)

所以就是：

![$\begin{array}{c} M^T M-\lambda I= \begin{bmatrix} 13-\lambda & 7\\ 7 & 9-\lambda \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_037_00647d71ce96.png)

* * *

##   

## (2.3）最后对它取行列式

因此：

![$\begin{array}{c} \det(M^TM-\lambda I) = \det \begin{bmatrix} 13-\lambda & 7\\ 7 & 9-\lambda \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_038_f47cb9f4c24a.png)

展开：

![$(13-\lambda)(9-\lambda)-49 =117-22\lambda+\lambda^2-49 =\lambda^2-22\lambda+68=0$](SVD_如何把一个矩阵拆解成三个部分_images/img_039_c4f339f9150e.png)

解这个二次方程：

![$\lambda=\frac{22\pm \sqrt{22^2-4\cdot 68}}{2} =\frac{22\pm \sqrt{484-272}}{2} =\frac{22\pm \sqrt{212}}{2} =11\pm\sqrt{53}$](SVD_如何把一个矩阵拆解成三个部分_images/img_040_a4a075688e1f.png)

所以两条特征值：

![$\lambda_1=11+\sqrt{53}\approx 18.2801,\qquad \lambda_2=11-\sqrt{53}\approx 3.7199$](SVD_如何把一个矩阵拆解成三个部分_images/img_041_2559ce5f6a56.png)

* * *

## ✅ 奇异值 = 特征值开平方

![$\sigma_1=\sqrt{\lambda_1}=\sqrt{11+\sqrt{53}}\approx 4.2755$](SVD_如何把一个矩阵拆解成三个部分_images/img_042_a6baf9859c89.png)

![$\sigma_2=\sqrt{\lambda_2}=\sqrt{11-\sqrt{53}}\approx 1.9287$](SVD_如何把一个矩阵拆解成三个部分_images/img_043_6c743e984961.png)

于是（注意 S 是 3×2）：

![$\begin{array}{c} S= \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2\\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_044_76b3b5b95d96.png)

* * *

# 第 3 步：解特征向量（得到 V）

我们对每个 λ，解：

![$(M^TM-\lambda I)v=0$](SVD_如何把一个矩阵拆解成三个部分_images/img_045_f7d06e8881a7.png)

* * *

## (3.1) 对 ![$\lambda_1=11+\sqrt{53}$](SVD_如何把一个矩阵拆解成三个部分_images/img_046_9f7badb0e418.png) 求 v1

![$\begin{bmatrix} 13-\lambda_1 & 7\\ 7 & 9-\lambda_1 \end{bmatrix} \begin{bmatrix}x\\y\end{bmatrix}=0$](SVD_如何把一个矩阵拆解成三个部分_images/img_047_92c818206567.png)

用第一行：

![$(13-\lambda_1)x+7y=0 \quad\Rightarrow\quad y=\frac{\lambda_1-13}{7}x$](SVD_如何把一个矩阵拆解成三个部分_images/img_048_8167627a50e0.png)

代入 ![$\lambda_1=11+\sqrt{53}$](SVD_如何把一个矩阵拆解成三个部分_images/img_049_9f7badb0e418.png) 

![$y=\frac{(11+\sqrt{53})-13}{7}x =\frac{\sqrt{53}-2}{7}x$](SVD_如何把一个矩阵拆解成三个部分_images/img_050_aa211005b9db.png)

  

# (3.2）关键点：这不是一个“唯一解”，而是一整条直线方向

因为它只是说：

![$y = kx \quad,\quad k=\frac{\sqrt{53}-2}{7}$](SVD_如何把一个矩阵拆解成三个部分_images/img_051_6efd85a3ecd3.png)

这说明所有满足条件的 (x,y) 都在同一条过原点的直线上：

![$(x,y)=(x,kx)=x(1,k)$](SVD_如何把一个矩阵拆解成三个部分_images/img_052_99ac46ab0fa7.png)

也就是说：

![$\begin{bmatrix}x\\y\end{bmatrix} = x \begin{bmatrix} 1\\ k \end{bmatrix}$](SVD_如何把一个矩阵拆解成三个部分_images/img_053_99a6d1c39c36.png)

* * *

#   

# (3.3）为什么可以直接令 x=1？

因为特征向量只关心“方向”，不关心长度。

如果 v 是特征向量，那么任意非零倍数 cv 仍然是特征向量：

![$(M^TM)v=\lambda v \Rightarrow (M^TM)(cv)=c\lambda v=\lambda(cv)$](SVD_如何把一个矩阵拆解成三个部分_images/img_054_06a01f6dcbd4.png)

所以我们可以选择一个最方便的尺度，比如令：

x=1

那么：

![$y=kx=k\cdot 1=k$](SVD_如何把一个矩阵拆解成三个部分_images/img_055_d2146f687537.png)

于是得到一个“代表方向”的向量：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ k \end{bmatrix} = \begin{bmatrix} 1\\ \frac{\sqrt{53}-2}{7} \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_056_bd5c520e1cd8.png)

这里的符号 ∝ 的意思是：

> **“成比例 / 同方向”**  
> （差一个任意非零倍数都算同一个特征向量方向）

* * *

#   

# (3.4）为什么会出现近似数值 0.7543？

我们把

![$\frac{\sqrt{53}-2}{7}$](SVD_如何把一个矩阵拆解成三个部分_images/img_057_cc236a0853fa.png)

算成小数：

![$\sqrt{53}\approx 7.2801$](SVD_如何把一个矩阵拆解成三个部分_images/img_058_944bba1cf34e.png)

![$\sqrt{53}-2\approx 5.2801$](SVD_如何把一个矩阵拆解成三个部分_images/img_059_4094de4eb7b3.png)

![$\frac{5.2801}{7}\approx 0.7543$](SVD_如何把一个矩阵拆解成三个部分_images/img_060_e77b13a96084.png)

所以：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_061_4af2a12b7fd2.png)

我们就把v1继续**一步步变成“单位特征向量”**（也就是 SVD 里真正用的那种 v1），并解释为什么变成了带负号的版本。

单位化（长度变成 1），可取：

![$\begin{array}{c} v_1= \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_062_f76724cf63b8.png)

  

# (3.5）“∝” 的意思：方向对了，但长度随便

意思是：真正的特征向量可以是它的任何非零倍数，比如

![$\begin{bmatrix} 2\\ 1.5086 \end{bmatrix},\; \begin{bmatrix} 10\\ 7.543 \end{bmatrix},\; \begin{bmatrix} -1\\ -0.7543 \end{bmatrix}$](SVD_如何把一个矩阵拆解成三个部分_images/img_063_f4edb0fa7238.png)

它们都在同一条直线上，方向一致。

  

* * *

# (3.6）为什么要“单位化”（归一化）？

在 SVD 里，V 要满足正交条件：

![$V^T V = I$](SVD_如何把一个矩阵拆解成三个部分_images/img_064_610793b32201.png)

所以它的列向量必须是**单位向量**：

![$\|v_1\| = 1$](SVD_如何把一个矩阵拆解成三个部分_images/img_065_74077cc55645.png)

因此我们要把向量缩放到长度 1。

  

* * *

# (3.7）计算长度 ∥v1∥

先记：

![$\begin{array}{c} \tilde v_1= \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_066_85115e3e3574.png)

它的长度是：

![$\|\tilde v_1\| = \sqrt{1^2 + 0.7543^2} = \sqrt{1 + 0.5690} = \sqrt{1.5690} \approx 1.2526$](SVD_如何把一个矩阵拆解成三个部分_images/img_067_7357923fc950.png)

* * *

#   

# (3.8）单位化：除以长度

单位向量定义：

![$v_1 = \frac{\tilde v_1}{\|\tilde v_1\|}$](SVD_如何把一个矩阵拆解成三个部分_images/img_068_2eaf75324472.png)

所以：

![$\begin{array}{c} v_1 = \frac{1}{1.2526} \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} = \begin{bmatrix} 0.7983\\ 0.6022 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_069_ecbf6ac79002.png)

✅ 这就是“标准的单位特征向量版本”。

  

* * *

# (3.9）为什么之前写的是负号版本？

我写的是：

![$\begin{array}{c} v_1= \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_070_f76724cf63b8.png)

原因只有一个：

## ✅ 特征向量整体乘 −1 仍然是特征向量

因为如果：

![$(M^TM)v_1=\lambda_1 v_1$](SVD_如何把一个矩阵拆解成三个部分_images/img_071_ac6b0e84239d.png)

那么两边同乘 −1：

![$(M^TM)(-v_1)=\lambda_1(-v_1)$](SVD_如何把一个矩阵拆解成三个部分_images/img_072_62f86558e35d.png)

依然成立。

所以：

![$\begin{bmatrix} 0.7983\\ 0.6022 \end{bmatrix} \quad\text{}\quad \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix}$](SVD_如何把一个矩阵拆解成三个部分_images/img_073_37a444d33f19.png)

**二者完全等价**，只是方向箭头反过来了（同一条直线）。

* * *

#   

# ✅ 总结一句话（最关键的直觉）

从 y=kx 推出向量方向

![$(x,y)\propto(1,k)$](SVD_如何把一个矩阵拆解成三个部分_images/img_074_4f300c6ffce9.png)

因为把 x 提出来：

![$(x,y)=(x,kx)=x(1,k)$](SVD_如何把一个矩阵拆解成三个部分_images/img_075_99ac46ab0fa7.png)

所以特征向量可以写成：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ k \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_076_7a3ee993fe3c.png)

所以特征向量方向为：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ \frac{\sqrt{53}-2}{7} \end{bmatrix} \approx \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_077_edc209996fe2.png)

##   

## (3.10) 对 ![$\lambda_2=11-\sqrt{53}$](SVD_如何把一个矩阵拆解成三个部分_images/img_078_5c77c6ecac76.png) 求 v2

同样：

![$y=\frac{\lambda_2-13}{7}x =\frac{(11-\sqrt{53})-13}{7}x =-\frac{\sqrt{53}+2}{7}x \approx -1.3257x$](SVD_如何把一个矩阵拆解成三个部分_images/img_079_39673500e95f.png)

所以：

![$\begin{array}{c} v_2\propto \begin{bmatrix} 1\\ -1.3257 \end{bmatrix} \Rightarrow v_2= \begin{bmatrix} 0.6022\\ -0.7983 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_080_ef062d54334c.png)

* * *

## ✅ 组成 V

把 v1,v2 作为列拼起来：

![$\begin{array}{c} V= \begin{bmatrix} -0.7983 & 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} \quad\Rightarrow\quad V^T= \begin{bmatrix} -0.7983 & -0.6022\\ 0.6022 & -0.7983 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_081_394a2acbe9d6.png)

* * *

# 第 4 步：用 ![u_i=\frac{Mv_i}{\sigma_i}](SVD_如何把一个矩阵拆解成三个部分_images/img_082_32bc722f9f87.png) 得到 U

这个很关键，因为它解释了“为什么 U 会出现”：

![$Mv_i=\sigma_i u_i \quad\Rightarrow\quad u_i=\frac{1}{\sigma_i}Mv_i$](SVD_如何把一个矩阵拆解成三个部分_images/img_083_2cd6446f9ef5.png)

计算得：

![$\begin{array}{c} u_1= \begin{bmatrix} -0.7010\\ -0.2817\\ -0.6551 \end{bmatrix}, \qquad u_2= \begin{bmatrix} 0.5228\\ -0.8279\\ -0.2034 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_084_b9b3f4ce43c1.png)

再补一个正交单位向量 u3，凑成 3×3 的正交矩阵：

![$\begin{array}{c} u_3= \begin{bmatrix} -0.4851\\ -0.4851\\ 0.7276 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_085_5655ee218110.png)

于是：

![$\begin{array}{c} U= \begin{bmatrix} -0.7010 & 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & 0.7276 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_086_47b30f346a99.png)

* * *

# ✅ 最终完整拆解

![$\begin{array}{c} { \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} = \begin{bmatrix} -0.7010 & 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & 0.7276 \end{bmatrix} \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \begin{bmatrix} -0.7983 & -0.6022\\ 0.6022 & -0.7983 \end{bmatrix} } \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_087_f60ddadb8322.png)

* * *

  

下面我把 ![Mv_1=\sigma_1 u_1](SVD_如何把一个矩阵拆解成三个部分_images/img_088_69b243f523a8.png) **逐项乘出来**，让你看到它真的就是“乘完正好等于 σu” 的那种一致性：

# 已知

![$\begin{array}{c} M= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} ,\quad v_1= \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_089_2747a8c621e6.png)

![$\begin{array}{c} \sigma_1=4.2755, \quad u_1= \begin{bmatrix} -0.7010\\ -0.2817\\ -0.6551 \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_090_c80ccafe905f.png)

* * *

# 1）左边：逐项算 ![$M v_1$](SVD_如何把一个矩阵拆解成三个部分_images/img_091_dcc8186114d0.png) 

![$\begin{array}{c} Mv_1= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} = \begin{bmatrix} 3(-0.7983)+1(-0.6022)\\ 0(-0.7983)+2(-0.6022)\\ 2(-0.7983)+2(-0.6022) \end{bmatrix} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_092_65eedec2f5bf.png)

现在每一行都算出来：

### 第 1 行

![$3(-0.7983)+1(-0.6022) = -2.3949-0.6022 = -2.9971$](SVD_如何把一个矩阵拆解成三个部分_images/img_093_34a3dcc53aff.png)

### 第 2 行

![$0(-0.7983)+2(-0.6022) = 0-1.2044 = -1.2044$](SVD_如何把一个矩阵拆解成三个部分_images/img_094_de71f32c0939.png)

### 第 3 行

![$2(-0.7983)+2(-0.6022) = -1.5966-1.2044 = -2.8010$](SVD_如何把一个矩阵拆解成三个部分_images/img_095_3370a99d96ea.png)

所以：

![$\begin{array}{c}{ Mv_1= \begin{bmatrix} -2.9971\\ -1.2044\\ -2.8010 \end{bmatrix}} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_096_9d71b687ca55.png)

* * *

#   

# 2）右边：逐项算 ![$\sigma_1 u_1$](SVD_如何把一个矩阵拆解成三个部分_images/img_097_12732d9d0067.png) 

![$\begin{array}{c} \sigma_1 u_1= 4.2755 \begin{bmatrix} -0.7010\\ -0.2817\\ -0.6551 \end{bmatrix} = \begin{bmatrix} 4.2755(-0.7010)\\ 4.2755(-0.2817)\\ 4.2755(-0.6551) \end{bmatrix} \end{array}$](D:\电脑文件\公众号知识库\数学_线性代数\SVD_如何把一个矩阵拆解成三个部分_images\img_001_e15865ab80ec.png)

逐项乘：

### 第 1 项

![$4.2755(-0.7010)=-2.9971$](SVD_如何把一个矩阵拆解成三个部分_images/img_099_2e8657a2b815.png)

### 第 2 项

![$4.2755(-0.2817)=-1.2044$](SVD_如何把一个矩阵拆解成三个部分_images/img_100_59af563808b5.png)

### 第 3 项

![$4.2755(-0.6551)=-2.8009\approx -2.8010$](SVD_如何把一个矩阵拆解成三个部分_images/img_101_46bfbbc1ffdf.png)

所以：

![$\begin{array}{c} { \sigma_1 u_1= \begin{bmatrix} -2.9971\\ -1.2044\\ -2.8010 \end{bmatrix}} \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_102_02a93e3a46d7.png)

* * *

# ✅ 对齐验证：两边完全相等（误差仅来自四舍五入）

![$\begin{array}{c} { Mv_1= \begin{bmatrix} -2.9971\\ -1.2044\\ -2.8010 \end{bmatrix} = \sigma_1 u_1 } \end{array}$](SVD_如何把一个矩阵拆解成三个部分_images/img_103_a4a2c5907b1b.png)

同样可逐项验算![$Mv_2=\sigma_2 u_2$](SVD_如何把一个矩阵拆解成三个部分_images/img_104_70ba701a0951.png)。