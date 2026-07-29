# 什么是QR分解


> 原文地址: [https://mp.weixin.qq.com/s/bMFhNbP3AoBazn4fmwVRVw](https://mp.weixin.qq.com/s/bMFhNbP3AoBazn4fmwVRVw)

想象一下你正在整理一个乱七八糟的书架。书架上的书东倒西歪（这就是一个普通的矩阵），而你想把它们整理得**整整齐齐、垂直向上**，并且按**一定的比例**摆放。

在数学中，**QR 分解**就是这种“整理术”。它把任何一个矩阵 ![](什么是QR分解_images/img_000_04aafac5b91c.svg) 拆解成两个更有序的矩阵 ![](什么是QR分解_images/img_001_8cfc73a94b9b.svg) 和 ![](什么是QR分解_images/img_002_3d09af817be8.svg) 的乘积。

#### 1\. 核心公式：![](什么是QR分解_images/img_003_cd81862f76ad.svg)

-   **![](什么是QR分解_images/img_004_80d13e051bb9.svg)（原始矩阵）：**
    
     你的原始数据，通常是一组“歪歪斜斜”的向量。
    
-   **![](什么是QR分解_images/img_005_4a12e6e1f42f.svg)（正交矩阵）：**
    
     这是“方向”。它的每一列都是长度为 1 的单位向量，且彼此之间成 90 度垂直（正交）。你可以把它想象成一个标准的坐标系。
    
-   **![](什么是QR分解_images/img_006_66c60529f5ad.svg)（上三角矩阵）：**
    
     这是“强度”和“组合方式”。它的左下角全是 0。它告诉我们，原始的向量是如何由这些标准的方向 ![](什么是QR分解_images/img_007_a1cc0cec8c8d.svg) 组合而成的。
    

  

#### 2\. 通俗的视觉理解

我们可以把矩阵 ![](什么是QR分解_images/img_008_99c775929866.svg) 的每一列看作是空间里的几根发散的木棒。

##### 第一步：找垂直（ orthogonalization ）

由于 ![](什么是QR分解_images/img_009_0ec7f8c71701.svg) 的木棒方向很乱，我们先取第一根木棒，把它作为基准。然后调整第二根木棒，**砍掉**它在第一根木棒方向上的投影，只留下垂直的部分。

> **结果：** 我们得到了一组彼此垂直的“支架”，这就是 ![](什么是QR分解_images/img_010_9660511f4ca8.svg) 的雏形。

##### 第二步：标准化（ normalization ）

把这些垂直的木棒全部缩放，使它们的长度都变成 1。

> **结果：** 这一套完美的垂直标准支架就是 **![](什么是QR分解_images/img_011_86da15f92257.svg)**。

##### 第三步：记录账本

我们需要一个“账本”来记录：原来的木棒是由这些标准支架怎么拼凑回来的？比如：“原木棒 1 = 3 倍的标准支架 1”。

> **结果：** 这个记录比例的账本就是 **![](什么是QR分解_images/img_012_148bc4cf2617.svg)**。因为它是有顺序地构建的，所以它呈现出漂亮的“上三角形”。

####   

#### 3\. QR 分解长什么样？

假设我们有一个 ![](什么是QR分解_images/img_013_895f58ddf025.svg) 的矩阵：

![](什么是QR分解_images/img_014_424465aad7d0.svg)

#### 4\. 为什么要费力做这个？

你可能会问：“好端端的矩阵，为什么要拆开？” 答案是：**化繁为简。**

1.  **解方程组：**
    
     直接解 ![](什么是QR分解_images/img_015_1a2444523706.svg) 很难。但如果变成 ![](什么是QR分解_images/img_016_96a7b22265ef.svg)，由于 ![](什么是QR分解_images/img_017_74195790cb76.svg) 的转置就是它的逆，而 ![](什么是QR分解_images/img_018_2f7348fb1724.svg) 是三角形，解起来就像剥洋葱一样简单，速度极快。
    
2.  **求特征值：**
    
     著名的 **QR 算法**是计算机计算矩阵特征值的最常用方法。通过不断迭代 QR 分解，矩阵会慢慢变成对角矩阵，特征值就“浮”出来了。
    
3.  **最小二乘法：**
    
     在做数据拟合（比如预测股价走势）时，QR 分解比传统的正规方程更稳定，不容易因为数值太小而产生计算误差。
    

  

#### 5\. 总结

-   **Q 是灵魂：它定义了最纯粹、最标准的方向。**
-   **R 是肉体：它定义了在这些方向上伸展的长度。**

**一句话总结：** QR 分解就是把一个“乱七八糟”的线性系统，翻译成了一套“标准坐标系”和一套“缩放比例”。

![](什么是QR分解_images/img_019_7c8c88201d0c.jpg)

图1

QR 分解，简单说就是：

把一个矩阵 ![](什么是QR分解_images/img_020_c638bf3d2dc5.svg) 拆成

![](什么是QR分解_images/img_021_0089f1a89df8.svg)

其中：

![](什么是QR分解_images/img_022_65065df7c601.svg)

1\. 先看图里的意思

图里写的是：

![](什么是QR分解_images/img_023_76eb6cc3f0c2.svg)

并把它画成两部分：

-   左边一堆“互相垂直的竖条”——表示 ![](什么是QR分解_images/img_024_3cef77412c2c.svg)
    
-   右边一个上三角形——表示 ![](什么是QR分解_images/img_025_00b7578bbac3.svg)
    

这是很形象的：

#### Q：正交部分

Q 的列向量两两正交，而且长度为 1。

也就是说，![](什么是QR分解_images/img_026_20d62dec783b.svg) 的列像一组“规范正交基（orthonormal basis）”。

它做的事情更像：

-   旋转
    
-   翻转
    
-   换一组彼此垂直的坐标轴
    

但**不负责歪斜混合**

R：上三角部分

R 是上三角矩阵，例如二维时：

![](什么是QR分解_images/img_027_9f784c925199.svg)

三维时：

![](什么是QR分解_images/img_028_ef55d35bd9dc.svg)

它表示一种“按顺序构造”的关系：

-   第 1 列只靠第 1 个正交方向
    
-   第 2 列可以由前两个正交方向组合
    
-   第 3 列可以由前三个正交方向组合
    

所以 ![](什么是QR分解_images/img_029_20648816bec5.svg) 的“上三角”结构，本质上是在说：

> 原矩阵的各列，可以逐步投影到一组正交基上来表达。

##   

## 2\. QR 分解到底在干什么？

设 ![](什么是QR分解_images/img_030_a630816ccfc3.svg) 的列向量是

![](什么是QR分解_images/img_031_b775b9f802de.svg)

QR 分解就是把这些“可能东倒西歪、不正交”的列向量：

![](什么是QR分解_images/img_032_f979245b4330.svg)

变成一组“互相垂直、长度规范”的新基底：

![](什么是QR分解_images/img_033_9f7f5274b84d.svg)

于是原来的每一列 ![](什么是QR分解_images/img_034_16c992712142.svg)，都能写成这些正交向量的线性组合：

![](什么是QR分解_images/img_035_f1a8fea76ac1.svg)

注意只到 ![](什么是QR分解_images/img_036_fb1e4b13602c.svg)，不会用到后面的 ![](什么是QR分解_images/img_037_4f56821457d2.svg)，所以才形成上三角结构。

把这些式子并在一起，就是：

![](什么是QR分解_images/img_038_f2db5c7cd5cc.svg)

其中

![](什么是QR分解_images/img_039_ebb0fc2de198.svg)

而 R 里装的就是这些组合系数。

3\. 为什么和 Gram–Schmidt 有关？

QR 分解最经典的来源，就是 **Gram–Schmidt 正交化**。

因为 Gram–Schmidt 做的事正是：

把普通基向量

![](什么是QR分解_images/img_040_0eae868389cf.svg)

一步步改造为正交归一基

![](什么是QR分解_images/img_041_7f117307673b.svg)

例如：

![](什么是QR分解_images/img_042_66b324e50298.svg)

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是QR分解_images\img_000_0af48a12940c.svg)

![](什么是QR分解_images/img_044_ce5cb910316d.svg)

……

在这个过程中，投影系数、长度系数正好组成 ![](什么是QR分解_images/img_045_d8342e4e3dc0.svg)。

所以可以把 QR 分解理解成：

> “Gram–Schmidt 的矩阵版结果”。

##   

## 4\. 一个最简单的二维例子

设

![](什么是QR分解_images/img_046_6a922e058124.svg)

把它的两列记为：

![](什么是QR分解_images/img_047_1a09572e6ab8.svg)

### 第一步：做第一个正交单位向量

###   

![](什么是QR分解_images/img_048_ca4e863338a5.svg)

所以

![](什么是QR分解_images/img_049_e516c59352c0.svg)

### 第二步：把 ![](什么是QR分解_images/img_050_42f68399d088.svg) 在 ![](什么是QR分解_images/img_051_7eca9608d440.svg) 上的投影去掉

先算投影系数：

![](什么是QR分解_images/img_052_4bf41e138e3a.svg)

去掉投影后：

![](什么是QR分解_images/img_053_cee4bbda3124.svg)

![](什么是QR分解_images/img_054_6171a1d9fd29.svg)

其长度为：

![](什么是QR分解_images/img_055_5a432e0088ae.svg)

归一化得到：

![](什么是QR分解_images/img_056_268ca8d6cfff.svg)

### 所以

![](什么是QR分解_images/img_057_7083b5c467a7.svg)

![](什么是QR分解_images/img_058_493537ad9a72.svg)

满足：

![](什么是QR分解_images/img_059_8a74f99c76c0.svg)

## 5\. 几何上怎么理解？

几何上，QR 分解可以理解成两层意思。

### 角度一：把“歪坐标系”拆成“正交坐标系 + 三角坐标表达”

原矩阵 ![](什么是QR分解_images/img_060_c02f89aec789.svg) 的列向量通常不是互相垂直的。

QR 分解做的就是：

1.  先找一组与它们张成同一子空间的正交单位基 ![](什么是QR分解_images/img_061_edfd30d92a7a.svg)
    
2.  再用 ![](什么是QR分解_images/img_062_223a954c6e2f.svg) 记录“原向量在这组正交基下的坐标”
    

也就是：

> 原来的斜斜的列向量组  
> ![](什么是QR分解_images/img_063_282ac282f717.svg)  
> 一组干净的正交基 ![](什么是QR分解_images/img_064_0cb5fb4bd5bb.svg)  
> ![](什么是QR分解_images/img_065_b9988b5a0e5f.svg)  
> 在这组基上的坐标系数 ![](什么是QR分解_images/img_066_762fea246d5c.svg)

###   

### 角度二：线性变换的分步看法

把 ![](什么是QR分解_images/img_067_838e619bdf9f.svg) 看成一个变换时：

![](什么是QR分解_images/img_068_6f9c6bd50e83.svg)

表示先做 ![](什么是QR分解_images/img_069_f5dc12cf75cb.svg)，再做 ![](什么是QR分解_images/img_070_a75eeec54ede.svg)。

因为矩阵乘法是从右往左作用的。

所以：

-   R：先在“标准坐标系”里做一种上三角变换
-   Q：再做旋转/翻转，把结果摆到正确方向

##   

## 6\. 为什么 R 一定是上三角？

因为在 Gram–Schmidt 过程中：

-    ![](什么是QR分解_images/img_071_0baaa2bfdd57.svg) 只会产生 ![](什么是QR分解_images/img_072_acc526d37bdd.svg) 
-    ![](什么是QR分解_images/img_073_00c46c9e5714.svg) 只会用到 ![](什么是QR分解_images/img_074_03efc5d87f49.svg) 
-    ![](什么是QR分解_images/img_075_217b39a31eea.svg) 只会用到 ![](什么是QR分解_images/img_076_facea31013ef.svg) 

所以第 ![](什么是QR分解_images/img_077_c33bc1a4782d.svg) 列 ![](什么是QR分解_images/img_078_657734288ac3.svg) 不会含有 ![](什么是QR分解_images/img_079_2921b8253849.svg) 之后的分量。

这意味着：

![](什么是QR分解_images/img_080_6aaa077e9be6.svg)

也就是下三角部分全为 0，于是 ![](什么是QR分解_images/img_081_98cc45204ad5.svg) 是上三角矩阵。

## 7\. QR 分解有什么用？

QR 分解特别重要，原因是它把“复杂矩阵”拆成了两个很好处理的部分。

### （1）解最小二乘问题

这是 QR 分解最经典的用途之一。

当方程

![](什么是QR分解_images/img_082_4f600f56546f.svg)

无精确解时，常求最小二乘解：

![](什么是QR分解_images/img_083_2de76d614d79.svg)

若 ![](什么是QR分解_images/img_084_963e696c3ab3.svg)，则

![](什么是QR分解_images/img_085_2dd7202ff165.svg)

因为 ![](什么是QR分解_images/img_086_d409ebcad0eb.svg) 保长度，问题会大大简化，最后常变成求解一个上三角方程：

![](什么是QR分解_images/img_087_44afe07c76c0.svg)

上三角方程很好解，直接回代即可。

### （2）求特征值

数值线性代数里有著名的 **QR 算法**。

它反复做 QR 分解，把矩阵一步步逼近上三角形式，从而读出特征值。

### （3）构造正交基

在数据分析、数值计算里，经常需要把一组相关向量“清洗”为正交基，QR 分解就是标准工具。

## 8\. 满秩时的“瘦 QR”与“完整 QR”

如果 ![](什么是QR分解_images/img_088_8695a2af1a59.svg) 是 ![](什么是QR分解_images/img_089_2a2250dfe758.svg) 矩阵，且 ![](什么是QR分解_images/img_090_784cac7e7eed.svg)，常见两种写法。

### 瘦 QR（reduced QR）

![](什么是QR分解_images/img_091_cd896a1afafa.svg)

其中：

-   Q 是 ![](什么是QR分解_images/img_092_792d0a200c56.svg)，列正交
-   R 是 ![](什么是QR分解_images/img_093_31c89635938c.svg) 上三角

这是最常用的。

### 完整 QR（full QR）

![](什么是QR分解_images/img_094_9ac97d360ff2.svg)

其中：

-   Q 是 ![](什么是QR分解_images/img_095_e89463224c54.svg) 正交矩阵
-   R 是 ![](什么是QR分解_images/img_096_edd317f29a71.svg)，上方是三角块，下面补零

##   

## 9\. 一句话抓本质

QR 分解的核心可以浓缩成一句话：

> 把矩阵的列向量组，拆成“一组规范正交基”与“在这组基下的上三角坐标系数”。

或者更通俗地说：

> 把“歪歪斜斜的一组列向量”，整理成“方向干净的正交骨架 ![](什么是QR分解_images/img_097_091b19e16c8e.svg)”和“每根向量在骨架上的配方 ![](什么是QR分解_images/img_098_93a8f96fa211.svg)”。

##   

## 10\. 你可以这样记

-   **Q = Quality of directions**  
    
    方向很干净，互相垂直，长度为 1
    
-   **R = Recipe / coefficients**  
    
    记录每个原向量如何由这些正交方向配出来
    

  

我们来做一个 **3×3 整数矩阵的 QR 分解完整手算**。

我选一个比较适合手算、而且结果整洁的例子：

![](什么是QR分解_images/img_099_e8f7670fb57c.svg)

它的三列分别是

![](什么是QR分解_images/img_100_ef5ec60949de.svg)

我们的目标是把它分解成

![](什么是QR分解_images/img_101_48ef89425687.svg)

其中：

-   Q 的列向量是规范正交的
-   R 是上三角矩阵

##   

## 1\. 第一步：处理第一列 ![](什么是QR分解_images/img_102_17972dc2cd82.svg)

先求它的长度：

![](什么是QR分解_images/img_103_936e16a90922.svg)

于是第一个单位正交向量：

![](什么是QR分解_images/img_104_94fce05a4baf.svg)

这同时给出

![](什么是QR分解_images/img_105_60ed51009a84.svg)

## 2\. 第二步：处理第二列 ![](什么是QR分解_images/img_106_cca3c0d586e7.svg)

现在要把 ![](什么是QR分解_images/img_107_0f3352d7348a.svg) 在 ![](什么是QR分解_images/img_108_d1bd3046f1de.svg) 方向上的分量去掉。

先算投影系数：

![](什么是QR分解_images/img_109_10e3410ff1bd.svg)

代入：

![](什么是QR分解_images/img_110_83f46b1919fe.svg)

所以，![](什么是QR分解_images/img_111_33027243e087.svg) 在 ![](什么是QR分解_images/img_112_d0081a74003c.svg) 上的投影是

![](什么是QR分解_images/img_113_74661135846b.svg)

把这部分减掉：

![](什么是QR分解_images/img_114_8e9f8b2d2023.svg)

### 2.1 求 ![](什么是QR分解_images/img_115_2621a8e7926b.svg) 的长度

###   

![](什么是QR分解_images/img_116_b52a38cacfa4.svg)

所以

![](什么是QR分解_images/img_117_192b957fdc35.svg)

再归一化得到

![](什么是QR分解_images/img_118_237a0b955ae8.svg)

为了写得更漂亮，把它化简一下：

![](什么是QR分解_images/img_119_efd9a4d8a19c.svg)

因此

![](什么是QR分解_images/img_120_a70aac986376.svg)

这个形式很常见，也更整齐。

## 3\. 第三步：处理第三列 ![](什么是QR分解_images/img_121_d8e6be9a6448.svg)

现在要从 ![](什么是QR分解_images/img_122_f07d671f376b.svg) 中减去它在 ![](什么是QR分解_images/img_123_49f2bdabf7ef.svg) 上的投影。

也就是：

![](什么是QR分解_images/img_124_223446f108f6.svg)

先分别算两个系数。

### 3.1 先算 ![](什么是QR分解_images/img_125_a4c8504bba60.svg)

###   

![](什么是QR分解_images/img_126_470e59b17001.svg)

### 3.2 再算 ![](什么是QR分解_images/img_127_780c60584308.svg)

###   

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是QR分解_images\img_001_789b78f1e7d9.svg)

逐项相乘：

![](什么是QR分解_images/img_129_0c7125f5a15f.svg)

所以

![](什么是QR分解_images/img_130_6302e957281b.svg)

### 3.3 求 ![](什么是QR分解_images/img_131_5c403251c6a4.svg)

先算两项投影。

#### 第一项：![](什么是QR分解_images/img_132_62bceb55e5f0.svg)

####   

![](什么是QR分解_images/img_133_05402520a794.svg)

#### 第二项：![](什么是QR分解_images/img_134_3de107b4c5b9.svg)

####   

![](什么是QR分解_images/img_135_abf300049634.svg)

因此

![](什么是QR分解_images/img_136_c5178d34523a.svg)

![](什么是QR分解_images/img_137_dfb58ad46a5d.svg)

先减前两项：

![](什么是QR分解_images/img_138_8da70aba2c33.svg)

再减第三项：

![](什么是QR分解_images/img_139_7f49ec631696.svg)

### 3.4 求 ![](什么是QR分解_images/img_140_e22048c8f9a7.svg) 的长度并归一化

###   

![](什么是QR分解_images/img_141_ca47be5207de.svg)

所以

![](什么是QR分解_images/img_142_e84ce63040df.svg)

归一化：

![](什么是QR分解_images/img_143_8c38e1c05bc5.svg)

这等于

![](什么是QR分解_images/img_144_3ea3a60b046b.svg)

## 4\. 于是得到 Q  

把 ![](什么是QR分解_images/img_145_addb7a15dfa2.svg) 作为列向量排起来：

![](什么是QR分解_images/img_146_256cb1b775d9.svg)

## 5\. 得到 R  

根据前面的系数：

![](什么是QR分解_images/img_147_23b477e09a7a.svg)

![](什么是QR分解_images/img_148_ebb83a20ba41.svg)

![](什么是QR分解_images/img_149_bdf852b88dde.svg)

所以

![](什么是QR分解_images/img_150_1beb43f899da.svg)

这就是 QR 分解结果。

## 6\. 最终答案

因此，

![](什么是QR分解_images/img_151_b48fb52f1328.svg)

其中

![](什么是QR分解_images/img_152_cfe3e0e921f9.svg)

![](什么是QR分解_images/img_153_506b631d8754.svg)

## 7\. 验证一下为什么这确实对

QR 分解里有个非常重要的关系：

![](什么是QR分解_images/img_154_9e1e6c0b8ee4.svg)

因为如果

![](什么是QR分解_images/img_155_9f2608338b6e.svg)

两边左乘 ![](什么是QR分解_images/img_156_dba2a733f75f.svg)，由于 ![](什么是QR分解_images/img_157_a4b00014ed40.svg)，得到

![](什么是QR分解_images/img_158_10fc0993e79b.svg)

而我们前面算出来的每个 ![](什么是QR分解_images/img_159_52dbfcdb6868.svg)，本质上就是

![](什么是QR分解_images/img_160_95f4fca1514d.svg)

所以这些数刚好组成 ![](什么是QR分解_images/img_161_5c87529d77f2.svg)。

## 8\. 这个例子的几何含义

原矩阵三列：

![](什么是QR分解_images/img_162_12c12fa4e19c.svg)

它们彼此并不正交。

Gram–Schmidt/QR 分解做的事就是：

-   先把第一列变成单位方向 ![](什么是QR分解_images/img_163_bbd262287dbb.svg)
    
-   再把第二列中沿 ![](什么是QR分解_images/img_164_ca93fe6def1f.svg) 的部分剔掉，得到与 ![](什么是QR分解_images/img_165_63ec3989199e.svg) 正交的 ![](什么是QR分解_images/img_166_9fee0bc90f66.svg)
    
-   再把第三列中沿 ![](什么是QR分解_images/img_167_f3deaf8c4a37.svg) 的部分都剔掉，得到与前两者都正交的 ![](什么是QR分解_images/img_168_93ef0cfb39c4.svg)
    

于是：

-   Q 给出一组“干净的正交骨架”
-   R 记录原来的列向量如何用这组骨架表示

比如第三列就可写成：

![](什么是QR分解_images/img_169_9fed1c42a09c.svg)

也就是

![](什么是QR分解_images/img_170_252a655aae61.svg)

这就是“上三角配方”。

## 9\. 一眼看懂这套手算流程

以后你看到任意列向量组

![](什么是QR分解_images/img_171_d663a8fd60d9.svg)

都可以按这个模板来：

### 第 1 列

![](什么是QR分解_images/img_172_26f288c1c06e.svg)

### 第 2 列

![](什么是QR分解_images/img_173_f328c7f65a50.svg)

![](什么是QR分解_images/img_174_80e90c3f8e12.svg)

![](什么是QR分解_images/img_175_bf416bb64668.svg)

### 第 3 列

![](什么是QR分解_images/img_176_b02e679fe6b5.svg)

![](什么是QR分解_images/img_177_9154bcc74216.svg)

![](什么是QR分解_images/img_178_95a6566d5dee.svg)

最后把 ![](什么是QR分解_images/img_179_427c44bb7c2a.svg) 拼成 ![](什么是QR分解_images/img_180_a87173006a3d.svg)，把所有 ![](什么是QR分解_images/img_181_9e096f8b6651.svg) 拼成 ![](什么是QR分解_images/img_182_3a3fe947afd1.svg)。

## 10\. 一个小提醒

QR 分解通常会约定 ![](什么是QR分解_images/img_183_23fab6761370.svg) 的对角线元素取正，即

![](什么是QR分解_images/img_184_cd3e96761555.svg)

这样分解会更“标准化”，避免符号来回变。

下面我用前面这个矩阵

![](什么是QR分解_images/img_185_f88abbc60ba8.svg)

来做一个**三维几何图**，把 QR 分解画直观。

它的三列向量是

![](什么是QR分解_images/img_186_0bcd44dd22d1.svg)

而我们手算得到的正交单位向量是

![](什么是QR分解_images/img_187_b53ef216ffeb.svg)

## 一、这张图应该想看什么

QR 分解的几何核心，不是“把矩阵拆成两块符号”，而是：

### 1\. 原来的列向量 ![](什么是QR分解_images/img_188_6b83964c2722.svg)

它们一般不是互相垂直的。

### 2\. Gram–Schmidt 把它们变成正交骨架 ![](什么是QR分解_images/img_189_1b0d8a22279d.svg)

这三个向量：

-   两两正交
    
-   长度都为 1
    
-   张成的空间与原来三列相同
    

###   

### 3\. 每一步都是“投影 + 去掉投影”

例如：

![](什么是QR分解_images/img_190_fabe2424ff6f.svg)

其中 ![](什么是QR分解_images/img_191_6047e47b5628.svg) 与 ![](什么是QR分解_images/img_192_fb09a9cfa905.svg) 垂直。

再如：

![](什么是QR分解_images/img_193_1599a1cbf053.svg)

其中 ![](什么是QR分解_images/img_194_3fe850ca5b83.svg) 同时垂直于 ![](什么是QR分解_images/img_195_74675ab5b14c.svg)。

然后把 ![](什么是QR分解_images/img_196_a3f244717e09.svg) 归一化，分别得到 ![](什么是QR分解_images/img_197_10d393b9a2f7.svg)。

## 二、图像应该怎么设计才最直观

图里画出 4 类对象：

### 第一类：原始向量

### 第二类：正交单位向量

### 第三类：投影分量

-    ![](什么是QR分解_images/img_198_9dda0db1fd28.svg) 在 ![](什么是QR分解_images/img_199_2cb546b1deac.svg) 上的投影
-    ![](什么是QR分解_images/img_200_9d93987c093f.svg) 在 ![](什么是QR分解_images/img_201_36dbe98b2ce8.svg) 和 ![](什么是QR分解_images/img_202_771e89491d47.svg) 上的投影

### 第四类：正交“剩余项”

这样你就能一眼看到：

-   a1 先定第一个方向
-   a2 去掉沿 ![](什么是QR分解_images/img_203_3b75a9ff5953.svg) 的部分后，露出一个新方向 ![](什么是QR分解_images/img_204_962e964a9d23.svg) 
-   a3 再去掉沿 ![](什么是QR分解_images/img_205_806dea7249a2.svg) 的部分后，露出最后一个方向 ![](什么是QR分解_images/img_206_54a78f3d2e08.svg) 

这就是 QR 分解的几何过程。

## 三、先给你一版静态图

一张 3D 图，清晰地画出：

-   原始向量 ![](什么是QR分解_images/img_207_2962337adc5a.svg)
    
-   正交基 ![](什么是QR分解_images/img_208_f71c006ad747.svg)
    
-    ![](什么是QR分解_images/img_209_97fe51a646e3.svg) 的投影和剩余项
-    ![](什么是QR分解_images/img_210_ec28a21fa9ac.svg) 的两段投影和剩余项

![](什么是QR分解_images/img_211_cd79900aff34.png)

## 图2

##   

## 四、图2你会看到什么

大致会看到下面这些几何关系。

### 1\. 蓝/橙/绿三根箭头：原始列向量

-   蓝色：![](D:\电脑文件\公众号知识库\数学_线性代数\什么是QR分解_images\img_002_e6a0f609d8e7.svg)
    
-   橙色：![](什么是QR分解_images/img_213_4689ea85d42e.svg)
    
-   绿色：![](什么是QR分解_images/img_214_13dc558471a6.svg)
    

它们都从原点出发，但并不彼此垂直。

### 2\. 红/紫/棕三根箭头：正交单位基

-   红色：![](什么是QR分解_images/img_215_e54267103da1.svg)
    
-   紫色：![](什么是QR分解_images/img_216_c3a38283fde4.svg)
    
-   棕色：![](什么是QR分解_images/img_217_7e6396f32ff8.svg)
    

这是 QR 分解中的 ![](什么是QR分解_images/img_218_95cf7a76ad50.svg) 的三列。

它们彼此垂直，长度都为 1。代码里把它们乘了一个 `scale_q=1.4`，只是为了画图更醒目，不影响方向。

### 3. ![](什么是QR分解_images/img_219_126cc79705cf.svg) 的分解

你会看到：

-   一根洋红色向量：![](什么是QR分解_images/img_220_a747219d6e78.svg)
    
-   从这个投影终点连到 ![](什么是QR分解_images/img_221_d4bb92dfcf55.svg) 终点的一段虚线：![](什么是QR分解_images/img_222_0e12df176be9.svg)
    

这正是在表达

![](什么是QR分解_images/img_223_25d6c24302ee.svg)

而且 ![](什么是QR分解_images/img_224_29e3677b17ac.svg)。

再把 ![](什么是QR分解_images/img_225_d3c7a82309ee.svg) 归一化，就得到 ![](什么是QR分解_images/img_226_612eda2cb833.svg)。

### 4. ![](什么是QR分解_images/img_227_1194896466fb.svg) 的分解

你会看到分三步：

第一步：

![](什么是QR分解_images/img_228_a104cdfabab0.svg)

第二步：在前一步基础上，再加上

![](什么是QR分解_images/img_229_ec1f2629432b.svg)

第三步：最后从这个点连到 ![](什么是QR分解_images/img_230_549f7800b875.svg) 终点的虚线，就是

![](什么是QR分解_images/img_231_2e6232e18adf.svg)

也就是：

![](什么是QR分解_images/img_232_48cbf8bfc572.svg)

其中 ![](什么是QR分解_images/img_233_f0f1a17d4cbe.svg) 同时垂直于 ![](什么是QR分解_images/img_234_af7d5a3a483a.svg)。

把 ![](什么是QR分解_images/img_235_1318db7324e6.svg) 归一化，就得到 ![](什么是QR分解_images/img_236_51611d1975c6.svg)。

## 五、把数值关系也对上

这个例子里，前面手算得到了：

![](什么是QR分解_images/img_237_6ed42e7be2f1.svg)

![](什么是QR分解_images/img_238_ba8f154cf0cc.svg)

![](什么是QR分解_images/img_239_74c7881b8525.svg)

而 ![](什么是QR分解_images/img_240_35a6a416d693.svg) 中的系数，就是这些投影长度：

![](什么是QR分解_images/img_241_16272d289b65.svg)

![](什么是QR分解_images/img_242_4149523a8088.svg)

![](什么是QR分解_images/img_243_3e741e703fbf.svg)

图里那些“投影段”的长度，本质上正是在可视化这些 ![](什么是QR分解_images/img_244_1f425780c860.svg)。

也就是说：

-   Q 决定方向骨架
    
-   R 决定在这些方向上分别走多远
    

##   

## 六、更直观的动画

静态图已经能看清结构，但 **QR 分解最适合动画**。因为它本质上就是一个“逐步剥离投影”的过程。

最适合做成 3 段动画：

### 第 1 段

显示 ![](什么是QR分解_images/img_245_387d98a52348.svg)

### 第 2 段

显示 ![](什么是QR分解_images/img_246_10689f5cb916.svg) 先投影到 ![](什么是QR分解_images/img_247_77da98e0c8a6.svg)，再减去投影得到 ![](什么是QR分解_images/img_248_6e3179ea0580.svg)，再归一化成 ![](什么是QR分解_images/img_249_d8ccf6b4c6bc.svg)

### 第 3 段

显示 ![](什么是QR分解_images/img_250_8f7633bfeef1.svg) 先去掉 ![](什么是QR分解_images/img_251_b8dd35d6085c.svg) 分量，再去掉 ![](什么是QR分解_images/img_252_cdd138077713.svg) 分量，最后得到 ![](什么是QR分解_images/img_253_bbc0402f731f.svg)，再归一化成 ![](什么是QR分解_images/img_254_ddd769489904.svg)

这样你会看到：

-   Q 是怎么一步步长出来的
-   R 的每个系数是怎么作为“投影长度”出现的

![](什么是QR分解_images/img_255_0c0d6c5fbce7.gif)

这个动画会分 3 个阶段：

1.  ![](什么是QR分解_images/img_256_fb1ff9d8bcbf.svg)
2.   ![](什么是QR分解_images/img_257_db0b0c06fd73.svg) 分解成![](什么是QR分解_images/img_258_d10b9f15ef5c.svg)再把 ![](什么是QR分解_images/img_259_34a570ee9547.svg) 归一化成 ![](什么是QR分解_images/img_260_b992a70a31a2.svg) 
3.   ![](什么是QR分解_images/img_261_5016d592072c.svg) 分解成![](什么是QR分解_images/img_262_a31fde56e976.svg)再把 ![](什么是QR分解_images/img_263_9288421b294c.svg) 归一化成 ![](什么是QR分解_images/img_264_187841d75765.svg) 

##   

## 七、这段动画代码会展示什么

你会看到：

### 1）先出现 ![](什么是QR分解_images/img_265_f8410856908e.svg)

第一根原始列向量先出来。

### 2）再出现 ![](什么是QR分解_images/img_266_749081bae030.svg)

把 ![](什么是QR分解_images/img_267_5a560607205e.svg) 归一化，得到第一根正交单位向量。

### 3）然后引入 ![](什么是QR分解_images/img_268_009b8423eed6.svg)

接着显示第二列 ![](什么是QR分解_images/img_269_4ad126bb6230.svg)。

### 4）把 ![](什么是QR分解_images/img_270_93f010752f1f.svg) 投影到 ![](什么是QR分解_images/img_271_04fa5252e881.svg)

你会看到一段投影向量：

![](什么是QR分解_images/img_272_eb2c44bda012.svg)

### 5）再显示剩余项 ![](什么是QR分解_images/img_273_c083ec8893d9.svg)

从投影终点到 ![](什么是QR分解_images/img_274_ba28fe1396e6.svg) 终点，会出现虚线段：

![](什么是QR分解_images/img_275_11528789257c.svg)

### 6）再归一化成 ![](什么是QR分解_images/img_276_0fd3e57abf20.svg)

于是第二根正交单位向量 ![](什么是QR分解_images/img_277_ffa4424fc500.svg) 出现。

### 7）最后处理 ![](什么是QR分解_images/img_278_7ed6dfc6a743.svg)

同样地：

先减掉它沿 ![](什么是QR分解_images/img_279_c105697048c9.svg) 的成分，再减掉它沿 ![](什么是QR分解_images/img_280_0fa9b6dcdf94.svg) 的成分，最后剩下 ![](什么是QR分解_images/img_281_5e594dc1e0ad.svg)。

再归一化，得到 ![](什么是QR分解_images/img_282_7963b59ffc5c.svg)。

## 八、这和 R 的关系

这个动画虽然主要画的是几何过程，但每个投影长度其实就是 ![](什么是QR分解_images/img_283_6e41dd708e7a.svg) 里的系数。

比如：

![](什么是QR分解_images/img_284_ec8e93ca66b6.svg)

![](什么是QR分解_images/img_285_e665f49d604d.svg)

其中：

![](什么是QR分解_images/img_286_54474780fedc.svg)

所以你看到的每一段“沿某个 ![](什么是QR分解_images/img_287_991e7001a64b.svg) 方向走多远”，本质上就是 ![](什么是QR分解_images/img_288_266bb5666b96.svg) 的元素。

## 九、这个例子的最终 QR 结果再对照一下

这个动画对应的就是前面那个例子：

![](什么是QR分解_images/img_289_2c7c61d95de6.svg)

得到

![](什么是QR分解_images/img_290_4cebac080ad5.svg)

![](什么是QR分解_images/img_291_a8146f60c2f3.svg)

动画就是把这个分解过程“活起来”。