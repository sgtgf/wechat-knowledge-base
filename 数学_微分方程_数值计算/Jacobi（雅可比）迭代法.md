# Jacobi（雅可比）迭代法


> 原文地址: [https://mp.weixin.qq.com/s/Fox1ikBEwcnRr5ZCjMjjDQ](https://mp.weixin.qq.com/s/Fox1ikBEwcnRr5ZCjMjjDQ)

#  ![](Jacobi（雅可比）迭代法_images/img_000_2eb3bcef6581.png)  
编辑

我先根据图片把 Jacobi 线性迭代的“从 Ax=b 到迭代公式”的推导走一遍，再解释它为什么会收敛/何时会发散，并给一个小例子把公式落到实处。

这张图在讲 **Jacobi（雅可比）迭代法**：要解线性方程组

![](Jacobi（雅可比）迭代法_images/img_001_299194a503d1.png)

它属于“**线性迭代（stationary linear iteration）**”的一类：把求解 Ax=b 变成一个固定点迭代

![](Jacobi（雅可比）迭代法_images/img_002_6523d09cbf8f.png)

其中 B,c 由 A,b 构造出来。

  

* * *

## 1) 线性迭代的通用公式：矩阵分裂（splitting）

把 A 拆成

## A=M−N

其中 M 选得“容易求解”（比如对角矩阵或三角矩阵）。原方程

![](Jacobi（雅可比）迭代法_images/img_003_247ab78c0833.png)

移项得

![](Jacobi（雅可比）迭代法_images/img_004_9cb1aaec1f44.png)

  

## (1.1) 先做纯代数变形（没有 k）

前提：M **可逆**（否则 ![$M^{-1}$](Jacobi（雅可比）迭代法_images/img_005_c3b577bcd8e3.png) 不存在）。

对等式两边左乘 ![M^{-1}](Jacobi（雅可比）迭代法_images/img_006_57f8788daa06.png)：

![$M^{-1}(Mx) = M^{-1}(Nx + b)$](Jacobi（雅可比）迭代法_images/img_007_c503bb01598e.png)

左边 ![$M^{-1}M=I$](Jacobi（雅可比）迭代法_images/img_008_c29394d72157.png)，所以

![$x = M^{-1}N x + M^{-1}b$](Jacobi（雅可比）迭代法_images/img_009_cb08f27cf6b6.png)

把它写成“固定点”形式：

![$x = F(x),\quad \text{}F(x)=M^{-1}Nx + M^{-1}b$](Jacobi（雅可比）迭代法_images/img_010_bec90f3d9fe6.png)

到这里为止，还是同一个方程的等价写法，并没有“迭代”。

  

* * *

## (1.2) 再把固定点方程变成迭代（引入 k）

固定点方程 x=F(x) 的经典求解方式是：  
从一个初值 ![$x^{(0)}$](Jacobi（雅可比）迭代法_images/img_011_68211947130b.png) 出发，不断做

![$x^{(k+1)} = F\big(x^{(k)}\big)$](Jacobi（雅可比）迭代法_images/img_012_29f23913a456.png)

把上面的 F(x) 代进去：

![$x^{(k+1)} = M^{-1}N x^{(k)} + M^{-1}b$](Jacobi（雅可比）迭代法_images/img_013_19ee506524e9.png)

所以

![](Jacobi（雅可比）迭代法_images/img_014_ce4abbf56ea0.png)

这就是迭代公式。

  

* * *

## (1.3) 直觉：为什么可以这么做？

-   原式 Mx=Nx+b 的意思是：真解 ![$x^*$](Jacobi（雅可比）迭代法_images/img_015_a3ff3b1cdd21.png) 同时满足
    
    ![$x^* = M^{-1}N x^* + M^{-1}b$](Jacobi（雅可比）迭代法_images/img_016_f1b75c2ef4cf.png)
    
-   迭代的意思是：我先随便猜一个 ![$x^{(0)}$](Jacobi（雅可比）迭代法_images/img_017_3575f86f113f.png)，把它塞到右边算出一个新值 ![$x^{(1)}$](Jacobi（雅可比）迭代法_images/img_018_1bdabe3963f4.png)，再把 ![$x^{(1)}$](Jacobi（雅可比）迭代法_images/img_019_9f87ffd6d563.png) 塞进去算 ![$x^{(2)}$](Jacobi（雅可比）迭代法_images/img_020_50564caef680.png)…
    
-   如果这个映射 F 有“收缩”性质（本质上对应 ![$\rho(M^{-1}N)<1$](Jacobi（雅可比）迭代法_images/img_021_416bad75c86e.png)），就会越算越接近固定点 ![x^*](Jacobi（雅可比）迭代法_images/img_022_99808ce09644.png)。
    

  

* * *

## (1.4) 一句话总结

-   Mx=Nx+b **左乘**  ![$M^{-1}$](Jacobi（雅可比）迭代法_images/img_023_ba24c9350b09.png) 得到固定点形式 ![x=M^{-1}Nx+M^{-1}b](Jacobi（雅可比）迭代法_images/img_024_b325ed47d1e0.png)；
    
-   再用固定点迭代用旧的 ![$x^{(k)}$](Jacobi（雅可比）迭代法_images/img_025_19ecac3a08f0.png) 代入右边生成新的 ![x^{(k+1)}](Jacobi（雅可比）迭代法_images/img_026_67d6a0ecf866.png)：
    
    ![](Jacobi（雅可比）迭代法_images/img_027_448f26eb9415.png)
    

这就是“线性迭代及其公式”的核心：**选一个好解的 M，把难点挪到右边，用上一步的 ![](Jacobi（雅可比）迭代法_images/img_028_4a2cc80f4bb7.png) 去近似。**

* * *

## 2) Jacobi 迭代：用对角线当 M

把 A 分成对角 + 非对角：

## A=D+(L+U)

-   D：对角部分（只保留 ![](Jacobi（雅可比）迭代法_images/img_029_0be3301bec55.png)）
    
-   L：严格下三角
    
-   U：严格上三角
    

Jacobi 的选择是：

![](Jacobi（雅可比）迭代法_images/img_030_c04681f54ec9.png)

代入通用公式：

![](Jacobi（雅可比）迭代法_images/img_031_db4781173871.png)

也常写成

![](Jacobi（雅可比）迭代法_images/img_032_7d1b258058f5.png)

### 分量形式（最直观、也最像“按行更新”）

从第 i 行方程

![](Jacobi（雅可比）迭代法_images/img_033_4a1ba48056a6.png)

这个求和展开就是：

![$a_{i1}x_1+a_{i2}x_2+\cdots+a_{ii}x_i+\cdots+a_{in}x_n=b_i$](Jacobi（雅可比）迭代法_images/img_034_91e48b998f4a.png)

现在把**“中间那一项”** ![$a_{ii}x_i$](Jacobi（雅可比）迭代法_images/img_035_cb65c7c39c8b.png) 单独写出来，其它所有项仍然放在一起：

![$a_{ii}x_i+\Bigl(a_{i1}x_1+\cdots+a_{i,i-1}x_{i-1}+a_{i,i+1}x_{i+1}+\cdots+a_{in}x_n\Bigr)=b_i$](Jacobi（雅可比）迭代法_images/img_036_e39aedee1ff8.png)

括号里这一堆，正是“所有 j≠i 的项”。所以可写成：

![$a_{ii}x_i+\sum_{j\ne i} a_{ij}x_j=b_i$](Jacobi（雅可比）迭代法_images/img_037_22c13185c233.png)

> 关键等价关系：
> 
> ![$\sum_{j=1}^n a_{ij}x_j = a_{ii}x_i+\sum_{j\ne i} a_{ij}x_j$](Jacobi（雅可比）迭代法_images/img_038_efc93a6218dc.png)
> 
> 因为左边包含所有项，右边就是把其中一项（j=i）拆出来。

把 ![](Jacobi（雅可比）迭代法_images/img_039_9d1abc85341d.png)单独拎出来：

![](Jacobi（雅可比）迭代法_images/img_040_dba9ef253e67.png)

于是 Jacobi 的更新是

![](Jacobi（雅可比）迭代法_images/img_041_366075b2aef9.png)

注意：右边 **全部用旧迭代 k 的值**（这是 Jacobi 的特征）。

  

* * *

## 3) 为什么叫“迭代”？误差传播公式一眼看懂

设真解为 ![](Jacobi（雅可比）迭代法_images/img_042_4bc2eadef038.png)，误差 ![](Jacobi（雅可比）迭代法_images/img_043_990b1381ce57.png)。由

![](Jacobi（雅可比）迭代法_images/img_044_6560c4d51cd1.png)

相减得

![](Jacobi（雅可比）迭代法_images/img_045_4b69ea5abe3e.png)

再迭代：

![](Jacobi（雅可比）迭代法_images/img_046_0db9949213b0.png)

所以收敛（误差趋于 0）的关键就是：![](Jacobi（雅可比）迭代法_images/img_047_f61d0efe4441.png) **会不会趋于 0**。

#   

# 推导过程：

## (3.1) 定义“真解”和“误差”

-   设线性方程组 Ax=b 的真解是 ![x^*](Jacobi（雅可比）迭代法_images/img_048_d59d3936cfdb.png)（假设存在且唯一）。
    
-   定义第 k 步的误差：
    

![$e^{(k)} = x^{(k)} - x^*$](Jacobi（雅可比）迭代法_images/img_049_1fa8019f8f00.png)

  

* * *

## (3.2) 关键：真解 ![x^*](Jacobi（雅可比）迭代法_images/img_050_eb71b53f3f9e.png) 也满足同一个固定点方程

为什么？因为迭代式是从原方程推出来的固定点形式。

![$x = Bx + c$](Jacobi（雅可比）迭代法_images/img_051_bf0ee64232f4.png)

既然 ![x^*](Jacobi（雅可比）迭代法_images/img_052_41d94f18455e.png) 是原方程的解，它当然也满足这条等价关系：

![$x^* = Bx^* + c$](Jacobi（雅可比）迭代法_images/img_053_cd452befd346.png)

> 这一步特别重要：**“真解”是映射 F(x)=Bx+c 的固定点**。

* * *

##   

## (3.3) 两条式子相减：得到误差传播

现在我们有两条式子：

(1) 迭代一步：

![$x^{(k+1)} = Bx^{(k)} + c$](Jacobi（雅可比）迭代法_images/img_054_e712d96f7595.png)

(2) 真解固定点：

![$x^* = Bx^* + c$](Jacobi（雅可比）迭代法_images/img_055_6917969069de.png)

把 (2) 从 (1) 里减掉（左边减左边，右边减右边）：

![$x^{(k+1)} - x^* = \big(Bx^{(k)} + c\big) - \big(Bx^* + c\big)$](Jacobi（雅可比）迭代法_images/img_056_a513857fd86e.png)

右边 +c 和 −c 抵消：

![$x^{(k+1)} - x^* = Bx^{(k)} - Bx^*$](Jacobi（雅可比）迭代法_images/img_057_8f2b14b5d710.png)

把 B 提出来（线性性）：

![$x^{(k+1)} - x^* = B\big(x^{(k)} - x^*\big)$](D:\电脑文件\公众号知识库\数学_微分方程_数值计算\Jacobi（雅可比）迭代法_images\img_000_ce9d1e44908f.png)

根据误差定义 ![$e^{(k)}=x^{(k)}-x^*$](Jacobi（雅可比）迭代法_images/img_059_25c23c9495f0.png)，立刻得到：

![$e^{(k+1)} = B e^{(k)}$](Jacobi（雅可比）迭代法_images/img_060_9db4677762d6.png)

这就是误差传播公式。

  

* * *

## (3.4) 再迭代一次，就能看到“为什么看 ![$B^k$](Jacobi（雅可比）迭代法_images/img_061_85271bae8a46.png)”

由

![$e^{(k+1)} = Be^{(k)}$](Jacobi（雅可比）迭代法_images/img_062_7c6378b09c02.png)

继续往前推：

-   ![$e^{(1)} = Be^{(0)}$](Jacobi（雅可比）迭代法_images/img_063_8576ab09c7b9.png)
    
-   ![$e^{(2)} = Be^{(1)} = B(Be^{(0)}) = B^2 e^{(0)}$](Jacobi（雅可比）迭代法_images/img_064_0834ad998931.png)
    
-   ![$e^{(3)} = Be^{(2)} = B^3 e^{(0)}$](Jacobi（雅可比）迭代法_images/img_065_1d112502e71c.png)
    

归纳可得：

![$e^{(k)} = B^k e^{(0)}$](Jacobi（雅可比）迭代法_images/img_066_a4d003708472.png)

所以：

-   如果 ![$B^k\to 0$](Jacobi（雅可比）迭代法_images/img_067_7b06acbd9e27.png)，误差就 →0，迭代收敛；
    
-   如果 ![$B^k$](Jacobi（雅可比）迭代法_images/img_068_e0a120ba7012.png) 不趋于 0，误差不会消失，迭代不收敛。
    

* * *

##   

## 4) 收敛判据：谱半径（和 ρ(A)强相关）

 ![](Jacobi（雅可比）迭代法_images/img_069_3d9efb400cb5.png)

收敛到唯一固定点的经典条件是：ρ(B)<1， 其中

# ![](Jacobi（雅可比）迭代法_images/img_070_7bda5f1383c9.png)

直觉上：B 的“放大因子”最大也得小于 1，误差才能越乘越小。

对 Jacobi 来说就是

![](Jacobi（雅可比）迭代法_images/img_071_81072c034021.png)

### 常见的“足够条件”（好用但不是必要条件）

如果 A **严格对角占优**：

![](Jacobi（雅可比）迭代法_images/img_072_503228882311.png)

则 Jacobi 一定收敛（并且通常收敛挺稳）。

* * *

##   

## 5) 一个 2×2 小例子，把公式落地

解

![](Jacobi（雅可比）迭代法_images/img_073_ca5e14e5955a.png)

## (5.1) 先把矩阵乘法展开成两条方程（逐行）

第一行：

![$4x_1 + 1x_2 = 1$](Jacobi（雅可比）迭代法_images/img_074_c8f9d47cd8a9.png)

第二行：

![$2x_1 + 3x_2 = 2$](Jacobi（雅可比）迭代法_images/img_075_59332c561380.png)

  

## (5.2) 每一行把“对角项”对应的未知量解出来

### 第1行解 x1

![$x_1 = \frac{1-x_2}{4}$](Jacobi（雅可比）迭代法_images/img_076_8c29fa421cd2.png)

### 第2行解 x2

![$x_2 = \frac{2-2x_1}{3}$](Jacobi（雅可比）迭代法_images/img_077_c309dd3d44db.png)

##   

## (5.3) 变成 Jacobi 迭代：右边用旧值 k，左边生成新值 k+1

Jacobi 的规则：**第 k+1 步同时更新所有分量，但右边一律用第 k 步的旧值**。

所以把上面两条“解出来的形式”改写成：

![](Jacobi（雅可比）迭代法_images/img_078_373a2b6ed997.png)

取初值

![](Jacobi（雅可比）迭代法_images/img_079_4745b49dcd1e.png)：

-   k=0→1：![](Jacobi（雅可比）迭代法_images/img_080_43b09b1b456c.png)
    
-   k=1→2：![](Jacobi（雅可比）迭代法_images/img_081_4fa68ca8dd25.png)
    
-   k=2→3：![](Jacobi（雅可比）迭代法_images/img_082_f9e12c2da21f.png)
    

会在真解附近来回“拉近”，逐步收敛。

* * *

##   

## 6) 线性迭代法家族（ Jacobi 只是其中一个）

同样从 A=D+L+U 出发：

-   Jacobi：用旧值更新（并行友好）
    
    ![](Jacobi（雅可比）迭代法_images/img_083_29bbd8c2f589.png)
    
-   Gauss–Seidel：一更新就立刻用新值（通常更快）
    
    ![](Jacobi（雅可比）迭代法_images/img_084_be9607ee5507.png)
    
-   SOR（加松弛 ω\\omegaω）：在 GS 上再“加速/减速”
    
    ![](Jacobi（雅可比）迭代法_images/img_085_fd9fc07180e9.png)
    

  

它们本质都符合：  ![](Jacobi（雅可比）迭代法_images/img_086_51530e6cc603.png) 以及收敛判据 ρ(B)<1。

  

那我就用一个 **3×3 的具体数值例子**把 Jacobi 线性迭代的“矩阵分裂 → 迭代矩阵 B → 谱半径 ρ(B) → 实际迭代过程”完整走一遍。

* * *

## 例子：解 Ax=b

![](Jacobi（雅可比）迭代法_images/img_087_87a55faabfb9.png)

先看一个常用的收敛“足够条件”——**严格对角占优**：

-   第1行：∣4∣>∣1∣+∣1∣=2
    
-   第2行：∣7∣>∣2∣+∣1∣=3
    
-   第3行：∣12∣>∣1∣+∣−3∣=4
    

所以 Jacobi 通常会收敛（这不是必要条件，但很实用）。

  

* * *

## 1) 矩阵分裂：A=D+L+U

![](Jacobi（雅可比）迭代法_images/img_088_cc853a463e12.png)

* * *

##   

## 2) Jacobi 的迭代公式（矩阵形式）

Jacobi 取 M=D，于是

![](Jacobi（雅可比）迭代法_images/img_089_f7c55d5d2673.png)

写成标准“线性迭代”：

![](Jacobi（雅可比）迭代法_images/img_090_da61e4dde5b1.png)

其中

![](Jacobi（雅可比）迭代法_images/img_091_ae04cd31f38c.png)

```

```

```
Python代码：
```

```
import numpy as npA = np.array([[4, 1, 1],              [2, 7, 1],              [1, -3, 12]])b = np.array([[7], [-1], [10]])D = np.diag(np.diag(A))L_plus_U = A - DD_inv = np.linalg.inv(D)B_J = -D_inv @ L_plus_Uc_J = D_inv @ bprint("B_J =")print(B_J)print("\nc_J =")print(c_J)
```

  

运行此代码会产生以下输出：

  

![](Jacobi（雅可比）迭代法_images/img_092_9f57c7c29766.png)

  

* * *

##   

## 3) 收敛为什么看谱半径 ![](Jacobi（雅可比）迭代法_images/img_093_f8baa56f6f1e.png) 

误差 ![](Jacobi（雅可比）迭代法_images/img_094_7e58116858bb.png) 满足

![](Jacobi（雅可比）迭代法_images/img_095_6b09bd66af8f.png)

所以只要 ![](Jacobi（雅可比）迭代法_images/img_096_a7c13eeebcc8.png) 反复乘会“越来越小”，误差就会消失。这个“会不会越来越小”的核心指标就是：

![](Jacobi（雅可比）迭代法_images/img_097_46c3351f56c5.png)

本例中 ![](Jacobi（雅可比）迭代法_images/img_098_e3ca78b0d803.png) 的特征值约为

![](Jacobi（雅可比）迭代法_images/img_099_5afc52b975dd.png)

因此

![](Jacobi（雅可比）迭代法_images/img_100_31d10d6f84e6.png)

结论：**收敛**（而且因为谱半径不大，收敛会比较快）。

* * *

##   

## 4) 真正迭代几步看看（从 ![](Jacobi（雅可比）迭代法_images/img_101_71936136fcac.png) 开始）

Jacobi 分量公式就是（对应图片里的“按行解出每个 ![](Jacobi（雅可比）迭代法_images/img_102_612ce7c95c8d.png)”）：

![](Jacobi（雅可比）迭代法_images/img_103_4d374ce7f2cf.png)

迭代结果（四舍五入到 6 位）：

k

![](Jacobi（雅可比）迭代法_images/img_104_c41a173929db.png)

![](Jacobi（雅可比）迭代法_images/img_105_d258602280c2.png)

![](Jacobi（雅可比）迭代法_images/img_106_e0331f42bd12.png)

0

0.000000

0.000000

0.000000

1

1.750000

\-0.142857

0.833333

2

1.577381

\-0.761905

0.651786

3

1.777530

\-0.686650

0.511409

4

1.793810

\-0.723781

0.513543

5

1.802559

\-0.728738

0.502904

6

1.806458

\-0.729718

0.500936

而这个方程组的真解是：

![](Jacobi（雅可比）迭代法_images/img_107_346f527bba43.png)

你会看到数值很快贴近。

  

在上篇文章《什么是矩阵的谱半径》中，出现了一个公式：

![x_{k+1} = A x_{k} \quad \Rightarrow \quad x_{k} = A^{k} x_{0}](Jacobi（雅可比）迭代法_images/img_108_cc3f3636b0f0.png)

**它是线性迭代（或线性动力系统）中一个非常重要且基础的特例公式**。它与我们之前讨论的通用形式紧密相关，其核心在于描述了一个**齐次**（没有常数项）的线性迭代过程。

### 1\. 公式解析

-   变量含义：
    

-    ![x_k](Jacobi（雅可比）迭代法_images/img_109_6b0e2516dd1a.png) 和 ![x_{k+1}](Jacobi（雅可比）迭代法_images/img_110_e1b193727928.png) 是系统的**状态向量**，代表了在第 k 步和第 k+1 步时的状态。
    
-   A 是一个**方阵**，被称为**状态转移矩阵**或**系统矩阵**。它完全决定了系统如何从当前状态演化到下一步状态。
    
-   x0 是**初始状态向量**。
    
      
    

-   公式解释：
    

-   第一个等式 ![x_{k+1} = A x_k](Jacobi（雅可比）迭代法_images/img_111_aa921e99d58e.png) 是**迭代定义式**。它表示下一步的状态 ![x_{k+1}](Jacobi（雅可比）迭代法_images/img_112_917ce97665a6.png) 是由当前状态 ![x_{k}](Jacobi（雅可比）迭代法_images/img_113_e982d03b08a1.png) 左乘矩阵 A 得到的。
    
-   箭头推导出的第二个等式 ![x_k = A^k x_0](Jacobi（雅可比）迭代法_images/img_114_faa1d98c94b4.png) 是**解析解式**。它清晰地表明：\*\*经过 k 次迭代后的状态 ![x_k](Jacobi（雅可比）迭代法_images/img_115_e4ea2249f8aa.png)，等价于将转移矩阵 A 自乘 k 次（即 ![A^k](Jacobi（雅可比）迭代法_images/img_116_3aee5f1c26b3.png)）后，再作用于初始状态 x0。\*\* 这个公式将迭代过程“压缩”成了一个幂运算，是理论分析的关键。
    
      
    

### 2\. 与通用定义的关系

您之前看到的通用线性迭代公式为 ![\mathbf{x}^{(k+1)} = B \mathbf{x}^{(k)} + \mathbf{c}](Jacobi（雅可比）迭代法_images/img_117_6428a54f251c.png)。

-   图片中的公式是上述通用形式在 **c=0（即没有外加常数项）时的特例**。此时，迭代矩阵 B 就是图中的矩阵 A。
    
-   这种齐次形式描述的是一种“自生”的系统演化，每一步的变化完全由当前状态和固定的变换规则 A 决定，没有外部输入或偏移。
    

**总结来说，此公式是齐次线性动力系统的核心迭代关系。**它通过 ![x_k = A^k x_0](Jacobi（雅可比）迭代法_images/img_118_616bafc9f525.png) 这一简洁形式，将系统状态直接与初始状态和矩阵的幂联系起来。而利用特征分解，我们可以深刻洞察该系统在不同方向上是如何被放大、衰减或维持的，这是分析系统稳定性、收敛性和长期行为的最强大工具之一。