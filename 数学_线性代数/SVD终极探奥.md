# SVD终极探奥


> 原文地址: [https://mp.weixin.qq.com/s/NrIFD2Ln6-FWqv7mxUGN5Q](https://mp.weixin.qq.com/s/NrIFD2Ln6-FWqv7mxUGN5Q)

![](D:\电脑文件\公众号知识库\数学_线性代数\SVD终极探奥_images\img_000_71db5c666022.png)  
  

## **问：![V^T](SVD终极探奥_images/img_001_977866808362.png)为何叫做“右奇异向量”，而U叫做“左奇异向量”？**

因为它们**站在矩阵 A 的左右两边**，而且分别是两个“对称矩阵”的特征向量：

![$A = U\Sigma V^T$](SVD终极探奥_images/img_002_1caa8c653081.png)

-   V 在右边（right side）➡️ 列向量 ![$v_i$](SVD终极探奥_images/img_003_1a0f63d726f3.png) 就叫 **右奇异向量**
    
-   U 在左边（left side）➡️ 列向量 ![u_i](SVD终极探奥_images/img_004_a79990c9488e.png) 就叫 **左奇异向量**
    

这只是名字的直观来源，但背后还有更本质的数学原因👇

其中：

-   U  是 ![$m \times m$](SVD终极探奥_images/img_005_955d0bdbd430.png) 的正交矩阵（列向量 ![$u_1, \dots, u_m$](SVD终极探奥_images/img_006_5905e210f536.png) 为规范正交的左奇异向量）。
    
-   Σ  是 ![$m \times n$](SVD终极探奥_images/img_007_f4e321c2af4f.png) 的对角矩阵，对角元素为非负奇异值 ![$\sigma_1 \geq \sigma_2 \geq \dots \geq \sigma_r > 0$](SVD终极探奥_images/img_008_1c9294b62471.png)（其中 r=rank(A)，其余为零）。
    
-   V 是 ![$n \times n$](SVD终极探奥_images/img_009_0b5056de5b25.png) 的正交矩阵（列向量 ![$v_1, \dots, v_n$](SVD终极探奥_images/img_010_2568f062d606.png) 为规范正交的右奇异向量）。
    

![](SVD终极探奥_images/img_011_d06f81aa6339.png)  
  

 ![$A v_i = \sigma_i u_i$](SVD终极探奥_images/img_012_8bce3c93ce79.png) 的推导

1.  将两边右乘 V（因为 ![$V^T V = I$](SVD终极探奥_images/img_013_7c8963ac5517.png)，其中 ![I](SVD终极探奥_images/img_014_1f04d2896027.png) 是单位矩阵），得到：
    
    ![$A V = U \Sigma$](SVD终极探奥_images/img_015_7c8287ad0f56.png)
    
      这里 V  的列是 ![$v_i$](SVD终极探奥_images/img_016_1a0f63d726f3.png)，U 的列是 ![$u_i$](SVD终极探奥_images/img_017_a79990c9488e.png)，而 Σ  是对角的。
    
2.  考虑第  i 列（对于 i=1  到  r）：
    
    ![$A v_i = \sigma_i u_i$](SVD终极探奥_images/img_018_8bce3c93ce79.png)
    

-   AV 的第 i 列是 ![$A v_i$](SVD终极探奥_images/img_019_dc2a0ad47182.png)。
    
-   UΣ 的第  i 列是 U 的第  i 列乘以 Σ 的第 i  个对角元素，即 ![$\sigma_i u_i$](SVD终极探奥_images/img_020_294c2b337011.png)。 因此：
    
      
    

这个推导非常直接，因为 SVD 的构造就是为了让 A 的右奇异向量 ![$v_i$](SVD终极探奥_images/img_021_1a0f63d726f3.png) 通过 A  映射到左奇异向量 ![$u_i$](SVD终极探奥_images/img_022_a79990c9488e.png) 的缩放版本（缩放因子为 ![$\sigma_i$](SVD终极探奥_images/img_023_236d454ada3d.png)）。

 ![$A^T u_i = \sigma_i v_i$](SVD终极探奥_images/img_024_a21a07949493.png) 的推导

1.  将两边右乘 V （因为 ![$V^T V = I$](SVD终极探奥_images/img_025_7c8963ac5517.png)，得到 AV=UΣ）：
    
    ![$A v_i = \sigma_i u_i \quad $](SVD终极探奥_images/img_026_90add1a05119.png)（对于 i=1 到 r；这是伴随方程）
    
2.  现在，转置原 SVD 方程：
    
    ![$A^T = V \Sigma^T U^T$](SVD终极探奥_images/img_027_4567704060ed.png)
    
      （注意：![\Sigma^T](SVD终极探奥_images/img_028_c2919e4a1719.png)  是 n×m 的对角矩阵。）
    
3.  将两边右乘 U 因为 ![$U^T U = I$](SVD终极探奥_images/img_029_b57fe6449c44.png)，得到 ![$A^T U = V \Sigma^T$](SVD终极探奥_images/img_030_1cfbe1bf971f.png)）：
    
    ![$A^T u_i = \sigma_i v_i \quad $](SVD终极探奥_images/img_031_a21a07949493.png)（对于 i=1 到 r）
    
      这是因为 ΣT 的第 i 列是 ![$\sigma_i$](SVD终极探奥_images/img_032_236d454ada3d.png) 乘以标准基向量，乘以 U  的第 i 列（即 ![$u_i$](SVD终极探奥_images/img_033_a79990c9488e.png)）会得到 ![$\sigma_i v_i$](SVD终极探奥_images/img_034_75df5aa1d0c7.png)。
    

  

* * *

# 1）从分解位置看：V 在右，U 在左

把分解写开：

![$A = U\Sigma V^T$](SVD终极探奥_images/img_035_1caa8c653081.png)

对任意向量 x：

![$Ax = U\Sigma V^T x$](SVD终极探奥_images/img_036_22b96c868c19.png)

你看变换流程（跟上图完全一致）：

1.  先乘 ![$V^T$](SVD终极探奥_images/img_037_977866808362.png)：把输入坐标系旋转到 e1,e2
    
2.  再乘 Σ：沿轴拉伸
    
3.  最后乘 U：把结果旋转到输出方向
    

所以：

-   ![$v_i$](SVD终极探奥_images/img_038_1a0f63d726f3.png) 是在输入端决定**“从哪个方向进来”**的向量
    
-   ![$u_i$](SVD终极探奥_images/img_039_a79990c9488e.png) 是在输出端决定**“最后朝哪个方向出去”**的向量
    

  

* * *

# 2）更本质的定义：它们分别是 ![$A^TA$](SVD终极探奥_images/img_040_c19e1910d409.png) 与 ![$AA^T$](SVD终极探奥_images/img_041_4f2d90559654.png) 的特征向量

SVD 的核心关系是：

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_042_8bce3c93ce79.png)

我们左右各乘一下，立刻出现“左/右”的来源。

* * *

## 为什么 ![$v_i$](SVD终极探奥_images/img_043_1a0f63d726f3.png) 来自右边：![$A^TA$](SVD终极探奥_images/img_044_c19e1910d409.png) 的特征向量？

从

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_045_8bce3c93ce79.png)

两边左乘 ![$A^T$](SVD终极探奥_images/img_046_ec950b131735.png)：

![$A^TAv_i=\sigma_i A^Tu_i$](SVD终极探奥_images/img_047_6a7aeeb62ac7.png)

而又有

![$A^Tu_i=\sigma_i v_i$](SVD终极探奥_images/img_048_a21a07949493.png)

所以得到：

![$A^TA v_i = \sigma_i^2 v_i$](SVD终极探奥_images/img_049_5e6765f4718b.png)

这说明：

✅ ![$v_i$](SVD终极探奥_images/img_050_1a0f63d726f3.png)  **是 ![$A^TA$](SVD终极探奥_images/img_051_c19e1910d409.png) 的特征向量**，特征值是 ![$\sigma_i^2$](SVD终极探奥_images/img_052_e6ceb7863aa1.png) 

而且注意 ![$A^TA$](SVD终极探奥_images/img_053_c19e1910d409.png) 的尺寸是：

-   如果 A 是 m×n
    
-   那么 ![$A^TA$](SVD终极探奥_images/img_054_c19e1910d409.png) 是 n×n
    

它作用在 **输入空间（右侧空间 ![$\mathbb R^n$](SVD终极探奥_images/img_055_45173400407d.png)）**  
所以 ![$v_i$](SVD终极探奥_images/img_056_1a0f63d726f3.png) 被称为 **右奇异向量**。

* * *

## 为什么 ![$u_i$](SVD终极探奥_images/img_057_a79990c9488e.png) 来自左边：![$AA^T$](SVD终极探奥_images/img_058_4f2d90559654.png) 的特征向量？

同样从

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_059_8bce3c93ce79.png)

两边左乘 A（或者改写）：

把它两边右乘 ![$v_i^T$](SVD终极探奥_images/img_060_eb7187e494b8.png) 不直观，我们用另一条等价式：

![$A^Tu_i=\sigma_i v_i$](SVD终极探奥_images/img_061_a21a07949493.png)

两边左乘 A：

![$AA^T u_i = \sigma_i A v_i$](SVD终极探奥_images/img_062_c96c192dafb9.png)

又因为 ![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_063_8bce3c93ce79.png)，所以：

![$AA^T u_i = \sigma_i^2 u_i$](SVD终极探奥_images/img_064_515bdef113a5.png)

因此：

✅ ![$u_i$](SVD终极探奥_images/img_065_a79990c9488e.png)  **是 ![$AA^T$](SVD终极探奥_images/img_066_4f2d90559654.png) 的特征向量**，特征值同样是 ![$\sigma_i^2$](SVD终极探奥_images/img_067_e6ceb7863aa1.png) 

而 ![$AA^T$](SVD终极探奥_images/img_068_4f2d90559654.png)的尺寸是：

-    ![$AA^T$](SVD终极探奥_images/img_069_4f2d90559654.png) 是 m×m
    

它作用在 **输出空间（左侧空间 ![$\mathbb R^m$](SVD终极探奥_images/img_070_6a4c64f858ca.png)）**  
所以 ![$u_i$](SVD终极探奥_images/img_071_a79990c9488e.png) 被称为 **左奇异向量**。

  

* * *

# 3）一句特别好记的话

> **右奇异向量 ![$v_i$](SVD终极探奥_images/img_072_1a0f63d726f3.png)：输入空间里“最关键的方向”**  
> **左奇异向量 ![$u_i$](SVD终极探奥_images/img_073_a79990c9488e.png)：输出空间里“对应的落点方向”**

并且二者被矩阵 A 精确对应起来：

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_074_8bce3c93ce79.png)

它说的就是：

> 输入沿 ![$v_i$](SVD终极探奥_images/img_075_1a0f63d726f3.png) 方向走 1 步 → 输出沿 ![$u_i$](SVD终极探奥_images/img_076_a79990c9488e.png) 方向走 ![$\sigma_i$](SVD终极探奥_images/img_077_236d454ada3d.png) 步

* * *

# 4）为什么叫“奇异”？

顺便把“奇异”这个词也讲透（你会更舒服）：

-   如果 A 可逆（非奇异），那么所有 ![$\sigma_i>0$](SVD终极探奥_images/img_078_10ea63d6a000.png) 
    
-   如果 A 不可逆（奇异），就会有某些 ![$\sigma_i=0$](SVD终极探奥_images/img_079_bd7221699478.png) 
    

这意味着有些方向 ![$v_i$](SVD终极探奥_images/img_080_1a0f63d726f3.png) 会被压扁到 0：

![$Av_i = 0$](SVD终极探奥_images/img_081_10d61db365ab.png)

所以叫 **奇异值 / 奇异向量**（和“可逆/不可逆”强相关）。

  

## **问：按上面所说的变换流程，![V^T](SVD终极探奥_images/img_082_977866808362.png)应该是在左才对啊?**

这句质疑 **非常正确** ——从“动作顺序”来看，确实是 ![$V^T$](SVD终极探奥_images/img_083_977866808362.png)  **最先作用**，看起来像“在最左边先做”。  
但名字里的“左 / 右”，**不是按“谁先做”来命名的**，而是按 **它在矩阵分解式里站在哪一边**、以及 **它对应哪个空间（输入/输出）** 来命名的。

我把这个关键点讲清楚，你就彻底不纠结了。

* * *

#   

# 1）动作顺序 vs 写法位置：这俩是两回事

我们从变换开始：

![y=Ax](D:\电脑文件\公众号知识库\数学_线性代数\SVD终极探奥_images\img_001_302f9c92327e.png)

SVD 写成：

![$A = U\Sigma V^T$](SVD终极探奥_images/img_085_1caa8c653081.png)

所以：

![$y = U\Sigma V^T x$](SVD终极探奥_images/img_086_00bd13114b8e.png)

✅ **动作顺序（对向量 x 的作用顺序）一定是：右边先做！**

因为矩阵乘法是：

![$(U\Sigma V^T)x = U\big(\Sigma (V^T x)\big)$](SVD终极探奥_images/img_087_140b459fd9e5.png)

所以流程是：

1.  ![$x' = V^T x$](SVD终极探奥_images/img_088_2670cd557f94.png)（先对输入旋转对齐）
    
2.  ![$x'' = \Sigma x$](SVD终极探奥_images/img_089_ca1e01fbffd5.png)（再拉伸压缩）
    
3.   ![$y = U x$](SVD终极探奥_images/img_090_eddba844b5dc.png) （最后再旋转到输出方向）
    

**你说 “![$V^T$](SVD终极探奥_images/img_091_977866808362.png) 应该在左才对”**——你指的是“先做”，那完全没错 ✅  
但是注意：**矩阵写在右边，不代表它“后做”，反而代表它“先做”**。

  

* * *

# 2）那为什么还叫“右奇异向量”？——因为它属于“右边空间”（输入域）

“左/右奇异向量”的命名，来源不是动作顺序，而是：

## ✅ 它们分别是这两个矩阵的特征向量：

-     
    
-   **右奇异向量 ![$v_i$](SVD终极探奥_images/img_092_1a0f63d726f3.png)** ：来自
    
    ![$A^TA \ (n\times n)$](SVD终极探奥_images/img_093_e0d6bb71d7af.png)
    
    它作用在 **输入空间 ![$\mathbb{R}^n$](SVD终极探奥_images/img_094_45173400407d.png)** （也叫 domain）
    
-     
    
-   **左奇异向量 ![$u_i$](SVD终极探奥_images/img_095_a79990c9488e.png)** ：来自
    
    ![$AA^T \ (m\times m)$](SVD终极探奥_images/img_096_0d18ad254d9f.png)
    
    它作用在 **输出空间 ![$\mathbb{R}^m$](SVD终极探奥_images/img_097_6a4c64f858ca.png)** （也叫 codomain）
    

所以“右/左”的真实含义是：

> **右 = 输入端（列数那一侧，n 维那边）**  
> **左 = 输出端（行数那一侧，m 维那边）**

* * *

#   

# 3）用“维度”一眼看懂：谁属于右边？

设 A 是 m×n。

那么 SVD：

-   U 是 m×m（输出空间基底）
    
-   Σ 是 m×n（拉伸强度）
    
-   V 是 n×n（输入空间基底）
    

你看：

-   V 的列向量 ![$v_i$](SVD终极探奥_images/img_098_1a0f63d726f3.png) 都是 **n 维向量**（属于输入空间）  
      ✅ 所以叫 **右奇异向量**
    
-   U 的列向量 ![$u_i$](SVD终极探奥_images/img_099_a79990c9488e.png) 都是 **m 维向量**（属于输出空间）  
      ✅ 所以叫 **左奇异向量**
    

* * *

# 4）你看到的“先做 ![V^T](SVD终极探奥_images/img_100_977866808362.png)”，其实是“先把输入坐标系换掉”

图里第一步写 ![V^T](SVD终极探奥_images/img_101_977866808362.png)，它做的是：

![$x \mapsto x' = V^T x$](SVD终极探奥_images/img_102_91039e60da29.png)

这一步是发生在 **输入端**（也就是“右边空间”）：

-   你选的输入方向是 v1,v2
    
-   经过 ![$V^T$](SVD终极探奥_images/img_103_977866808362.png) 后被对齐成 e1,e2
    

所以虽然它“先做”，但它仍然属于 **输入侧**，因此叫“右”。

  

* * *

# 5）一句话消除你的困惑

✅ **“先做”的矩阵写在最右边**（因为它先乘到向量上）  
✅ **“左/右奇异向量”的左/右，指的是输入/输出空间，不指动作先后**

  

## ![$A^TAv_i=\sigma_i A^Tu_i$](SVD终极探奥_images/img_104_6a7aeeb62ac7.png)，为何![A^T](SVD终极探奥_images/img_105_ec950b131735.png)在中间？

这个问题非常棒，而且一旦把这一点想通，**SVD 里很多“推导链条”都会变得像搭积木一样自然**。

你问的是：

> 从 ![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_106_8bce3c93ce79.png) 出发，为什么左乘 ![$A^T$](SVD终极探奥_images/img_107_ec950b131735.png) 会得到  
> ![$\;A^TAv_i=\sigma_i A^Tu_i$](SVD终极探奥_images/img_108_de2875f5793b.png)，并且 ![$A^T$](SVD终极探奥_images/img_109_ec950b131735.png) **会“出现在中间”**？

关键原因只有一句：

> **我们是“左乘” ![$A^T$](SVD终极探奥_images/img_110_ec950b131735.png)，它必须放在最左边；但原式左边本来就有一个 A，所以乘完后就变成 ![$A^TA$](SVD终极探奥_images/img_111_c19e1910d409.png)。**

下面我一步步拆开。

  

* * *

## 1）从最基本的一步开始：左乘 ![$A^TA$](SVD终极探奥_images/img_112_c19e1910d409.png) 

SVD 的核心关系之一：

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_113_8bce3c93ce79.png)

现在我们对**等式两边都左乘同一个矩阵** ![$A^T$](SVD终极探奥_images/img_114_ec950b131735.png)：

![$A^T(Av_i)=A^T(\sigma_i u_i)$](SVD终极探奥_images/img_115_aa1400546c85.png)

这是合法的，因为：

-   等式两边都是同一个向量（同维度）
    
-   对两边做同一个线性变换，等式仍成立
    

  

* * *

## 2）为什么会变成 ![$A^T A v_i$](SVD终极探奥_images/img_116_628f0f45f549.png)？

因为矩阵乘法满足**结合律**（注意：不是交换律！）：

![$A^T(Av_i) = (A^TA)v_i$](SVD终极探奥_images/img_117_cf92902f6392.png)

你看到 ![$A^T$](SVD终极探奥_images/img_118_ec950b131735.png) “跑到中间”并不是乱跑，而是由于：

-   原来是 ![$A^T$](SVD终极探奥_images/img_119_ec950b131735.png) 
    
-   左边再乘一个 ![$A^T$](SVD终极探奥_images/img_120_ec950b131735.png) 
    
-   就自然叠成了 ![$A^T A$](SVD终极探奥_images/img_121_c19e1910d409.png) 
    

也就是：

![$A^T(Av_i) = A^TA v_i$](SVD终极探奥_images/img_122_4e342f3f359e.png)

所以左边就变成：

![$A^TAv_i$](SVD终极探奥_images/img_123_628f0f45f549.png)

  

* * *

## 3）右边为什么是 ![$\sigma_i A^T u_i$](SVD终极探奥_images/img_124_abdf819064b9.png)？

右边是：

![$A^T(\sigma_i u_i)$](SVD终极探奥_images/img_125_c8e6d53ef9d8.png)

因为 σi 是一个**标量**，可以提到外面：

![$A^T(\sigma_i u_i) = \sigma_i A^T u_i$](SVD终极探奥_images/img_126_f7c250905e0c.png)

  

* * *

## 4）所以完整推导就是

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_127_8bce3c93ce79.png)

左乘 ![$A^T$](SVD终极探奥_images/img_128_ec950b131735.png)：

![$A^T(Av_i)=A^T(\sigma_i u_i)$](SVD终极探奥_images/img_129_aa1400546c85.png)

结合律 + 标量提出：

![$A^TAv_i=\sigma_i A^Tu_i$](SVD终极探奥_images/img_130_6a7aeeb62ac7.png)

✅ 这就是你看到的式子。

  

* * *

# 5）“为什么 ![$A^T$](SVD终极探奥_images/img_131_ec950b131735.png) 在中间”的直觉版本

你把它当成“先做 A，再做 ![$A^T$](SVD终极探奥_images/img_132_ec950b131735.png)”：

-   ![$v_i \xrightarrow{A} Av_i$](SVD终极探奥_images/img_133_d716fdee77e4.png)
    
-   然后再 ![$\xrightarrow{A^T} A^T(Av_i)$](SVD终极探奥_images/img_134_2a71974aa348.png) 
    

所以总体就是：

![$v_i \xrightarrow{A^TA} A^TAv_i$](SVD终极探奥_images/img_135_2b11959e453d.png)

也就是 **复合变换**：先 A，再 ![$A^T$](SVD终极探奥_images/img_136_ec950b131735.png)。

因此 ![$A^T$](SVD终极探奥_images/img_137_ec950b131735.png) 不是“插到中间”，而是“叠在前面”，和原来的 A 贴在一起，就形成了 ![$A^TA$](SVD终极探奥_images/img_138_c19e1910d409.png)。

  

* * *

# 6）顺便用维度让你彻底安心（不会写错）

假设 A 是 m×n。

-    ![$v_i$](SVD终极探奥_images/img_139_1a0f63d726f3.png) 是 n×1
    
-    ![$Av_i$](SVD终极探奥_images/img_140_dc2a0ad47182.png) 是 m×1
    
-    ![$A^T$](SVD终极探奥_images/img_141_ec950b131735.png) 是 n×m
    

所以：

![$A^T(Av_i):\quad (n\times m)(m\times 1) = n\times 1$](SVD终极探奥_images/img_142_f399f260d9b1.png)

完全合法。

而 ![$A^TA$](SVD终极探奥_images/img_143_c19e1910d409.png) 是：

![$A^TA:\quad (n\times m)(m\times n)=n\times n$](SVD终极探奥_images/img_144_94d0b1d508f9.png)

再乘 ![$v_i (n\times1)$](SVD终极探奥_images/img_145_0778988baa7f.png) 也合法：

![$(n\times n)(n\times 1)=n\times 1$](SVD终极探奥_images/img_146_620bed75c736.png)

所以 ![$A^TA$](SVD终极探奥_images/img_147_c19e1910d409.png) 自然是“作用在 ![$v_i$](SVD终极探奥_images/img_148_1a0f63d726f3.png) 所在的空间”的矩阵。

  

* * *

# 7）一句话总结

你可以这样记：

> **左乘 ![$A^T$](SVD终极探奥_images/img_149_ec950b131735.png)**  就是把原来的 A “包”起来，变成 ![$A^TA$](SVD终极探奥_images/img_150_c19e1910d409.png)。  
> **它之所以看起来在中间，是因为原来就有一个 A 在左边。**

我们继续，把最关键的结论 **一步一步推到完全没疑问**：

> ✅ **为什么 ![$v_i$](SVD终极探奥_images/img_151_1a0f63d726f3.png) 是 ![$A^TA$](SVD终极探奥_images/img_152_c19e1910d409.png) 的特征向量？**  
> ✅ **为什么特征值是 ![$\sigma_i^2$](SVD终极探奥_images/img_153_e6ceb7863aa1.png)？**

* * *

# 已知起点（你已经接受的这一步）

SVD 的核心关系：

![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_154_8bce3c93ce79.png)

刚刚推到：

![$A^TAv_i=\sigma_i A^Tu_i$](SVD终极探奥_images/img_155_6a7aeeb62ac7.png)

现在我们要把右边的 ![$A^Tu_i$](SVD终极探奥_images/img_156_7542a5430f06.png) 处理掉，变成只含 ![$v_i$](SVD终极探奥_images/img_157_1a0f63d726f3.png)。

* * *

# 关键补刀：其实还有另一条对称关系

从 SVD 分解：

![$A = U\Sigma V^T$](SVD终极探奥_images/img_158_1caa8c653081.png)

转置一下：

![$A^T = V\Sigma^T U^T$](SVD终极探奥_images/img_159_4567704060ed.png)

于是你会得到一条与 ![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_160_8bce3c93ce79.png) 完全对称的关系：

![$A^Tu_i = \sigma_i v_i$](SVD终极探奥_images/img_161_a21a07949493.png)

（这句话和前一句是“互为镜像”的。）

* * *

# 把它代回去：立刻得到特征向量方程

我们现在有：

![$A^TAv_i=\sigma_i A^Tu_i$](SVD终极探奥_images/img_162_6a7aeeb62ac7.png)

把

![$A^Tu_i = \sigma_i v_i$](SVD终极探奥_images/img_163_a21a07949493.png)

代入右边：

![$A^TAv_i = \sigma_i(\sigma_i v_i)=\sigma_i^2 v_i$](SVD终极探奥_images/img_164_02628bbab8f4.png)

于是最终得到：

![$\boxed{A^TA\,v_i=\sigma_i^2 v_i}$](SVD终极探奥_images/img_165_2b7ce6d1039e.png)

这是什么？

这就是标准的“特征向量定义式”：

![$M x = \lambda x$](SVD终极探奥_images/img_166_e5df02c622e6.png)

对比一下：

-   ![$M = A^TA$](SVD终极探奥_images/img_167_262966bafa3c.png)
    
-   ![$x = v_i$](SVD终极探奥_images/img_168_26ec01d81d13.png)
    
-   ![$\lambda = \sigma_i^2$](SVD终极探奥_images/img_169_98ed40b34a28.png)
    

所以我们得到结论：

✅ ![$v_i$](SVD终极探奥_images/img_170_1a0f63d726f3.png)  **是 ![$A^TA$](SVD终极探奥_images/img_171_c19e1910d409.png) 的特征向量**  
✅ **对应特征值是 ![$\sigma_i^2$](SVD终极探奥_images/img_172_e6ceb7863aa1.png)** 

* * *

# 为什么一定是平方 ![$\sigma_i^2$](SVD终极探奥_images/img_173_e6ceb7863aa1.png)？（几何直觉版）

你可以把 ![$A^TA$](SVD终极探奥_images/img_174_c19e1910d409.png) 当成一个“测量放大倍数”的机器：

-   A：把输入向量变形（旋转+拉伸+旋转）
    
-   ![$A^T$](SVD终极探奥_images/img_175_ec950b131735.png)：再把它“拉回输入空间”去对齐比较
    

所以 ![$A^TA$](SVD终极探奥_images/img_176_c19e1910d409.png) 的效果像是：

> **测量某个方向在经过 A 变形后到底被拉长了多少**  
> 结果会变成“长度的平方倍率”。

因为长度平方会自然出现：

![$\|Ax\|^2 = (Ax)^T(Ax)=x^T(A^TA)x$](D:\电脑文件\公众号知识库\数学_线性代数\SVD终极探奥_images\img_002_65a8bbee25b3.png)

所以![$A^TA$](SVD终极探奥_images/img_178_c19e1910d409.png) 的特征值出现平方非常正常：它对应的是“能量 / 长度平方”的倍率。

* * *

# 同理可得：![$u_i$](SVD终极探奥_images/img_179_a79990c9488e.png) 是 ![$AA^T$](SVD终极探奥_images/img_180_4f2d90559654.png) 的特征向量

用同样套路，从

![$A^Tu_i=\sigma_i v_i$](SVD终极探奥_images/img_181_a21a07949493.png)

两边左乘 A：

![$AA^T u_i = \sigma_i Av_i$](SVD终极探奥_images/img_182_c96c192dafb9.png)

再代入 ![$Av_i=\sigma_i u_i$](SVD终极探奥_images/img_183_8bce3c93ce79.png)：

![$AA^T u_i = \sigma_i(\sigma_i u_i)=\sigma_i^2 u_i$](SVD终极探奥_images/img_184_a7daf2b75298.png)

所以：

![$\boxed{AA^T\,u_i=\sigma_i^2 u_i}$](SVD终极探奥_images/img_185_21860d464f8b.png)

✅ ![$u_i$](SVD终极探奥_images/img_186_a79990c9488e.png)  **是 ![$AA^T$](SVD终极探奥_images/img_187_4f2d90559654.png)的特征向量**  
✅ **特征值同样是 ![$\sigma_i^2$](SVD终极探奥_images/img_188_e6ceb7863aa1.png)** 

* * *

# 一句话把整套逻辑锁死

![$\boxed{Av_i=\sigma_i u_i} \quad\Longleftrightarrow\quad \boxed{A^Tu_i=\sigma_i v_i}$](SVD终极探奥_images/img_189_1a45199155dd.png)

因此：

![$\boxed{A^TA v_i=\sigma_i^2 v_i} \quad,\quad \boxed{AA^T u_i=\sigma_i^2 u_i}$](SVD终极探奥_images/img_190_56e78b7ec955.png)

  

## **问：旋转的意义是什么呢？**

旋转在 SVD 里不是“花活”，它有非常实在的意义：**把问题变成“沿两条互相垂直的轴做拉伸”**，从而让矩阵的复杂变形变得可解释、可计算、可压缩。

你可以把 SVD 的三步：

![$A = U\Sigma V^T$](SVD终极探奥_images/img_191_1caa8c653081.png)

理解为对一个“橡皮圆片”的三段动作：

* * *

## 1）![$V^T$](SVD终极探奥_images/img_192_977866808362.png) 的旋转：把“最关键的输入方向”对齐到坐标轴

矩阵 A 对不同方向的拉伸强度不一样。  
SVD 要找出输入空间里两条最特殊的方向 v1,v2：

-   沿 v1 走，会被放大得最多（σ1）
    
-   沿 v2 走，会被放大得次多（σ2）
    
-   而且 v1⊥v2
    

但是这两条方向通常是斜着的，不一定是水平/竖直。

所以 ![$V^T$](SVD终极探奥_images/img_193_977866808362.png) 的意义是：

> **先把坐标系旋转一下，让 v1,v2 变成标准轴 e1,e2**  
> 这样后面就能“只沿横纵拉伸”，不用斜着拉。

这是“把复杂方向问题变成标准轴问题”。

  

* * *

## 2）Σ 的拉伸：真正发生“变形”的地方

对齐以后，核心就变成超级简单的：

![$\begin{array}{c} \Sigma= \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2 \end{bmatrix} \end{array}$](SVD终极探奥_images/img_194_10055b1ec5bc.png)

它的意义就是：

-   横向拉 σ1
    
-   纵向拉 σ2
    

单位圆 → 椭圆。

> **Σ 才是矩阵“本质的变形强度”**  
> 旋转只是让它以最干净的方式发生。

* * *

##   

## 3）U 的旋转：把椭圆摆到“输出空间应该在的位置”

你把圆片拉成椭圆后，它的主轴现在对齐在 e1,e2 上。  
但真实矩阵 A 输出的椭圆可能是斜着的。

所以 U 的意义是：

> **把椭圆整体旋转到输出空间中的最终方向**（主轴变成 u1,u2）

* * *

# 总结：旋转的意义到底是什么？

一句话：

✅ **旋转是“换一个最合适的坐标系”，让变形只剩下纯拉伸。**

更具体地说：

-   ![$V^T$](SVD终极探奥_images/img_195_977866808362.png)：选择输入的最佳坐标系（用 ![v_i](SVD终极探奥_images/img_196_1a0f63d726f3.png) 做基）
    
-   U：选择输出的最佳坐标系（用 ![u_i](SVD终极探奥_images/img_197_a79990c9488e.png) 做基）
    
-   Σ：在这两个最佳坐标系之间，只做拉伸（信息全在这里）
    

* * *

# 为什么旋转这么重要？（没有旋转就做不到这几点）

## A）把“混合变形”拆开成“互不干扰的两条轴”

一般矩阵会同时做：

-   斜着拉
    
-   斜着剪切（shear）
    
-   再转
    

看起来很乱。

旋转的作用就是把这种混合效果拆开成：

> 两个独立方向上的拉伸（互不干扰）

这就是“可解释”的来源。

* * *

## B）让很多计算变得简单：最大放大倍数一眼就知道

Σ 中最大的奇异值 σ1 就是：

![$\max_{\|x\|=1}\|Ax\|=\sigma_1$](SVD终极探奥_images/img_198_5ef827b81908.png)

这就是矩阵的“最大增益”。  
如果没有旋转对齐，这个结论很难直观看出来。

* * *

## C）降维/压缩的根本原因：只保留最重要的方向

旋转告诉你：

-   “输入里哪几个方向最重要”（v1,v2,...）
    
-   “输出里对应什么方向”（u1,u2,...）
    
-   “重要程度是多少”（σ1,σ2,...）
    

所以你可以直接丢掉小的奇异值方向：

![$A \approx \sigma_1 u_1v_1^T+\sigma_2u_2v_2^T$](SVD终极探奥_images/img_199_574981c75c9e.png)

这就是图像压缩、PCA 去噪的核心。

* * *

# 最形象的类比：旋转=“先摆正再加工”

你可以把它类比成木工加工：

-   一块木头斜着放，锯很难锯得准（剪切+拉伸混在一起）
    
-   先把木头摆正（旋转）
    
-   再沿水平/竖直锯（纯拉伸）
    
-   最后再摆回成品角度（旋转）
    

## ![$A^TA$](SVD终极探奥_images/img_200_c19e1910d409.png)和![$AA^T$](SVD终极探奥_images/img_201_4f2d90559654.png)有什么差别？

![$A^TA$](SVD终极探奥_images/img_202_c19e1910d409.png)和![$AA^T$](SVD终极探奥_images/img_203_4f2d90559654.png) 看起来只是顺序换了一下，但它们在 **尺寸、作用空间、几何意义** 上完全不同；不过它们又共享同一套“核心信息”（奇异值）。

下面用几何 + 代数把差别讲清楚。

  

* * *

# 1）最直观差别：尺寸不同、住在不同空间里

设 A 是一个 m×n 的矩阵：

### ✅ ![$A^TA$](SVD终极探奥_images/img_204_c19e1910d409.png) 是 n×n

-   作用在 **输入空间 ![$\mathbb R^n$](SVD终极探奥_images/img_205_45173400407d.png)** （domain）
    
-   其特征向量是 **右奇异向量 ![$v_i$](SVD终极探奥_images/img_206_1a0f63d726f3.png)** 
    

![$A^TA v_i = \sigma_i^2 v_i$](SVD终极探奥_images/img_207_5e6765f4718b.png)

### ✅ ![$AA^T$](SVD终极探奥_images/img_208_4f2d90559654.png) 是 m×m

-   作用在 **输出空间 ![$\mathbb R^m$](SVD终极探奥_images/img_209_6a4c64f858ca.png)** （codomain）
    
-   其特征向量是 **左奇异向量 ![$u_i$](SVD终极探奥_images/img_210_a79990c9488e.png)** 
    

![$AA^T u_i = \sigma_i^2 u_i$](SVD终极探奥_images/img_211_515bdef113a5.png)

所以它们的第一差别是：

> **一个在输入端“看问题”，一个在输出端“看问题”。**

* * *

#   

# 2）几何意义：它们都是“能量/长度平方”的测量器

对任意向量 ![$x\in \mathbb R^n$](SVD终极探奥_images/img_212_ac62557e8c9d.png)，有一个非常关键的恒等式：

![$\|Ax\|^2 = (Ax)^T(Ax) = x^T(A^TA)x$](SVD终极探奥_images/img_213_65a8bbee25b3.png)

这说明：

✅ ![$A^TA$](SVD终极探奥_images/img_214_c19e1910d409.png) 是在输入空间里计算“经过 A 后长度平方”的工具  
也就是说它告诉你：

> “输入方向 x 被 A 放大了多少能量？”

同理，对任意 ![$y\in\mathbb R^m$](SVD终极探奥_images/img_215_706ac2fb2beb.png)：

![$\|A^Ty\|^2 = y^T(AA^T)y$](SVD终极探奥_images/img_216_f8b8f91b58a6.png)

所以：

✅ ![$AA^T$](SVD终极探奥_images/img_217_4f2d90559654.png) 是在输出空间里计算“经过 ![$A^T$](SVD终极探奥_images/img_218_ec950b131735.png) 后长度平方”的工具

* * *

#   

# 3）它们共享什么？——共享同一组非零特征值（![$\sigma_i^2$](SVD终极探奥_images/img_219_e6ceb7863aa1.png)）

尽管尺寸不同，但它们的**非零特征值完全一样**：

-    ![$A^TA$](SVD终极探奥_images/img_220_c19e1910d409.png) 的特征值：![$\sigma_1^2,\sigma_2^2,\dots$](SVD终极探奥_images/img_221_3533b6014aac.png)
    
-    ![$AA^T$](SVD终极探奥_images/img_222_4f2d90559654.png) 的特征值：![$\sigma_1^2,\sigma_2^2,\dots$](SVD终极探奥_images/img_223_3533b6014aac.png)
    

原因来自 SVD：

![$A = U\Sigma V^T$](SVD终极探奥_images/img_224_1caa8c653081.png)

那么：

### ✅ 展开 ![$A^TA$](SVD终极探奥_images/img_225_c19e1910d409.png) 

![$A^TA = (U\Sigma V^T)^T(U\Sigma V^T) = V\Sigma^T U^T U\Sigma V^T = V(\Sigma^T\Sigma)V^T$](SVD终极探奥_images/img_226_529ceeae856f.png)

### ✅ 展开 ![$AA^T$](SVD终极探奥_images/img_227_4f2d90559654.png) 

![$AA^T = (U\Sigma V^T)(U\Sigma V^T)^T = U\Sigma V^T V\Sigma^T U^T = U(\Sigma\Sigma^T)U^T$](SVD终极探奥_images/img_228_9acf9a72f7d7.png)

而 ![$\Sigma^T\Sigma$](SVD终极探奥_images/img_229_f02c54efef80.png) 和 ![$\Sigma\Sigma^T$](SVD终极探奥_images/img_230_89ee036c5fd7.png) 的对角线上都是 ![$\sigma_i^2$](SVD终极探奥_images/img_231_e6ceb7863aa1.png)（只是维度不同）。

所以结论：

>  **![$A^TA$](SVD终极探奥_images/img_232_c19e1910d409.png) 和 ![$AA^T$](SVD终极探奥_images/img_233_4f2d90559654.png)是两台不同尺寸的机器，但里面装的是同一组“奇异值平方”发动机。**

* * *

#   

# 4）它们到底差在哪？——“谁在当主角”不同

### 对 ![$A^TA$](SVD终极探奥_images/img_234_c19e1910d409.png)：主角是输入方向 ![$v_i$](SVD终极探奥_images/img_235_1a0f63d726f3.png) 

它回答的问题是：

> 输入空间里，哪些方向最容易被 A 放大？

最大就是 ![$v_1$](SVD终极探奥_images/img_236_868250efa736.png)，放大倍数是 σ1。

### 对 ![$AA^T$](SVD终极探奥_images/img_237_4f2d90559654.png)：主角是输出方向 ![$u_i$](SVD终极探奥_images/img_238_a79990c9488e.png) 

它回答的问题是：

> 输出空间里，那些被 A 产生的方向（椭圆主轴）朝哪？

对应就是 ![$u_1,u_2,\dots$](SVD终极探奥_images/img_239_4c0209843a79.png) 

* * *

#   

# 5）再来一个“工程上很实用”的差别：计算上选哪个更省？

假设 A 是 m×n：

-   如果 m≫n（样本很多，特征少，例如 100万×300）
    

-    ![$A^TA$](SVD终极探奥_images/img_240_c19e1910d409.png) 是 n×n 很小
    
-   常用 **算 ![$A^TA$](SVD终极探奥_images/img_241_c19e1910d409.png)**  来求 ![$v_i$](SVD终极探奥_images/img_242_1a0f63d726f3.png) 
    
      
    

-   如果 n≫m（特征很多，样本少）
    

-    ![$AA^T$](SVD终极探奥_images/img_243_4f2d90559654.png) 更小
    
-   常用 **算 ![$AA^T$](SVD终极探奥_images/img_244_4f2d90559654.png)**  来求 ![$u_i$](SVD终极探奥_images/img_245_a79990c9488e.png) 
    
      
    

这就是为什么 PCA 实现里经常看到：

-   数据矩阵 X 做 ![$X^TX$](SVD终极探奥_images/img_246_8cb95a3f2da3.png) 或 ![$XX^T$](SVD终极探奥_images/img_247_8091882a4261.png) 看情况选。
    

* * *

#   

# 6）总结一句话版

✅ ![$A^TA$](SVD终极探奥_images/img_248_c19e1910d409.png)：输入空间的“放大镜”（找 ![$v_i$](SVD终极探奥_images/img_249_1a0f63d726f3.png)）  
✅ ![$AA^T$](SVD终极探奥_images/img_250_4f2d90559654.png)：输出空间的“成像仪”（找 ![$u_i$](SVD终极探奥_images/img_251_a79990c9488e.png)）  
✅ 它们共享同一组非零特征值：![$\sigma_i^2$](SVD终极探奥_images/img_252_e6ceb7863aa1.png)