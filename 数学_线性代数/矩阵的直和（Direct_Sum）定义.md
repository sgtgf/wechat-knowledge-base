# 矩阵的直和（Direct Sum）定义


> 原文地址: [https://mp.weixin.qq.com/s/ReFIv9Zkz-DdUDw4VeXkbw](https://mp.weixin.qq.com/s/ReFIv9Zkz-DdUDw4VeXkbw)

## 大家好！今天我们来聊聊线性代数里一个特别“友好”的概念——**矩阵的直和**（记作 A ⊕ B）。它不像普通矩阵加法那么挑剔（要求尺寸一样），而是像把两个独立的“小世界”拼成一个“大世界”，中间用“墙”隔开，谁也不干扰谁。

#### 1\. 最直白的定义

假如矩阵 **A** 是 **m × n** 大小，**B** 是 **p × q** 大小，那么它们的**直和**就是一个更大的 **(m+p) × (n+q)** 矩阵：

![](矩阵的直和（Direct_Sum）定义_images/img_000_f5ee1c2e7081.svg)

-   **左上角**
    
    原封不动放 A
    
-   **右下角**
    
    原封不动放 B
    
-   **其他地方**
    
    全部填 **0**（零矩阵，尺寸自动匹配）
    

这叫**块[对角矩阵](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)**（block diagonal matrix）。本质就是“并联”两个独立系统！

#### 2\. 图文展示（看图秒懂！）

**块结构示意图**（像两个房间拼大房子）

![](矩阵的直和（Direct_Sum）定义_images/img_001_c3b2da8eb051.png)

图1

看清楚了吗？

-   蓝色区域 = A 的地盘
    
-   绿色区域 = B 的地盘
    
-   灰色虚线区域 = “隔离墙”（全是0）
    
-   整体尺寸自动变大：行数 = m + p，列数 = n + q
    

**带数字的真实例子**（超级直观）

我们拿两个 2×2 矩阵举例：  
![](矩阵的直和（Direct_Sum）定义_images/img_002_0178daecd2bb.svg)  

![](矩阵的直和（Direct_Sum）定义_images/img_003_f9590f345158.svg)

直和后变成 4×4 大矩阵：

![](矩阵的直和（Direct_Sum）定义_images/img_004_5062080e889e.png)

图2

你一眼就能看出：

-   左上 2×2 还是原来的 A（数字不变）
    
-   右下 2×2 还是原来的 B
    
-   其他位置安静地填 0，像两个小岛中间隔着海！
    

再来个不同尺寸的例子（更明显）：  
A（2×2） + B（1×1） = 3×3 矩阵

![](矩阵的直和（Direct_Sum）定义_images/img_005_7f2e40212eb6.svg)

#### 3\. 为什么这么设计？通俗理解

想象两个独立的“乐队”在不同舞台演出：

-   A 乐队只管自己的观众区
    
-   B 乐队只管自己的观众区
    

直和就是把两个舞台记录在一张大节目单上，中间画条线（0），谁也不串场！

这来自**向量空间的直和**：如果空间 V = U ⊕ W（U 和 W 只有零向量重叠），那么作用在 V 上的变换自然就是 A ⊕ B。

#### 4\. 超实用的性质（记住这几条就够了）

-   **乘法独立**
    
    (A ⊕ B) × (C ⊕ D) = (A×C) ⊕ (B×D) —— 两个系统各自算自己的！
    
-   **迹（对角元素和）**
    
    tr(A ⊕ B) = tr(A) + tr(B)
    
-   **行列式**
    
    （如果是方阵）：det(A ⊕ B) = det(A) × det(B)
    
-   **特征值**
    
    A 的特征值 + B 的特征值 = 大矩阵的全部特征值
    

计算大问题时，可以直接拆成小问题，超级省力！

#### 5\. 注意！别和“直积”搞混

很多人会把 **直和 ⊕** 和 **直积 ⊗**（Kronecker 积）弄混：

-   **直和**
    
    独立并存（块对角）
    
-   **直积**
    
    交叉混合（每个元素都乘整个矩阵，尺寸变成 mp × nq，像“复制放大”）
    

一个是“并联”，一个是“张量纠缠”，完全不同哦！

####   

一句话总结：**矩阵直和 = 把两个独立系统“友好合并”成一个大块对角矩阵**，中间零元素就是“互不打扰”的证明！

**向量空间的直和（Direct Sum）超级详解：图文并茂 + 与矩阵直和无缝衔接**

上面聊了**矩阵的直和 A ⊕ B**（块对角矩阵），接下来来聊它的“老大哥”——**向量空间的直和**。这俩概念其实是“一根绳上的蚂蚱”：矩阵直和就是向量空间直和在选定基底下的“数字表现形式”。

我们分**外部直和**和**内部直和**两大类来讲，配上清晰图示、例子和比喻，保证零基础也能秒懂！

#### 1\. 外部直和（External Direct Sum）：最直白的“拼装版”

**定义**（超级通俗）： 假如 U 和 W 是两个向量空间（同一个数域，比如实数），它们的**外部直和**就是：

![](矩阵的直和（Direct_Sum）定义_images/img_006_0030fe98624a.svg)

运算规则：

-   加法：![](矩阵的直和（Direct_Sum）定义_images/img_007_b39d42c4fec6.svg)
    
-   数乘：![](矩阵的直和（Direct_Sum）定义_images/img_008_1b6e87f2ee92.svg)
    

**通俗比喻**：  
U 是一个“蓝色房间”，W 是一个“绿色房间”。直和就是把每个蓝色居民和绿色居民**配对**成一张“双人票”，新空间里的“人”都是 (蓝色人, 绿色人)。

维度公式（最实用）：

![](矩阵的直和（Direct_Sum）定义_images/img_009_5b0b11498f1e.svg)

（有限维时）—— 就像房间总面积 = 蓝房面积 + 绿房面积。

**例子**：  
U = ℝ¹（x轴），W = ℝ¹（y轴）  
U ⊕ W ≅ ℝ²  
元素：(3, 5) 就是新空间里的向量！

#### 2\. 内部直和（Internal Direct Sum）：同一个大空间里的“友好分割”

**定义**（当 U、W 已经是某个大空间 V 的子空间时）： V = U ⊕ W 当且仅当：

1.  V = U + W（任意 v ∈ V 都能写成 u + w）
    
2.  U ∩ W = {0}（两个子空间只在原点重叠）
    

**关键点**：每个向量 v **只有唯一一种** 分解方式 v = u + w！

**通俗比喻**：  
一个大房间（V），被隔成蓝色区（U）和绿色区（W），中间只在原点（0）相连。任何位置都能唯一地说“我在蓝色区走几步 + 绿色区走几步”到达。

**3\. 两种直和其实是一回事（同构）**

外部直和 U ⊕ W 和内部直和（在 U ⊕ W 里嵌入 U×{0} 和 {0}×W）完全等价。  
数学家通常直接写 U ⊕ W，指的就是这个结构。

#### 4\. 与矩阵直和的完美衔接

选定适应基底：

-   U 的基 {u₁, ..., uₘ}
    
-   W 的基 {w₁, ..., wₙ}
    

在新空间 U ⊕ W 的基就是 { (u₁,0), ..., (uₘ,0), (0,w₁), ..., (0,wₙ) }

这时：

-   如果 T 是 U ⊕ W 上的线性变换（T 分别作用在 U 和 W 上）
    
-   它的矩阵表示就是 **A ⊕ B**（块对角矩阵！）
    

#### 5\. 超实用性质（背这几条就够了）

-   **唯一分解**
    
    v = u + w 只有一种写法（内部）
    
-   **投影算子**![](矩阵的直和（Direct_Sum）定义_images/img_010_3086055b3170.svg)
-   **迹与行列式**
    
    和矩阵一样，tr(T) = tr(A) + tr(B)，det = det(A)det(B)
    
-   **与直积区别**
    
    （别混！）：
    
-   ⊕（直和）：并联，维度相加
    
-   ⊗（张量积/直积）：交叉，维度相乘（量子纠缠用）
    

  

总结：

1.  **直和本质是一种“无交互的拼接”**
    
    两种定义方式最终等价。
    
2.  **直和对应矩阵的块对角化**
    
    这是将大问题分解为小问题的关键工具。
    

**向量空间直和 = 把两个独立（或互不重叠）的空间“友好合并”，每个向量都是唯一“蓝+绿”组合**。矩阵直和就是它在数字世界的投影！

我们用具体的例子来说明“直和”的两个核心思想。

#### 例子1：几何空间中的内部直和（最直观）

想象我们熟悉的 **XY平面（记为![](矩阵的直和（Direct_Sum）定义_images/img_011_a0fd781f6c79.svg)）**。

-   令 U 是 **X轴**，即所有形如![](矩阵的直和（Direct_Sum）定义_images/img_012_1736f5dae3c9.svg)的向量构成的子空间。
    
-   令 W 是 **Y轴**，即所有形如![](矩阵的直和（Direct_Sum）定义_images/img_013_80d339eb53bc.svg)的向量构成的子空间。
    

**验证它们构成直和：**

1.  **交集为零**
    
    ![](矩阵的直和（Direct_Sum）定义_images/img_014_7a0c751e2301.svg)。因为一个向量要同时在X轴和Y轴上，只能是原点。
    
2.  **张成整个空间**
    
    平面上的**任何一点**![](矩阵的直和（Direct_Sum）定义_images/img_015_323e20585c01.svg)都可以**唯一地**写成![](矩阵的直和（Direct_Sum）定义_images/img_016_a147b2bef758.svg)，前者属于U  
    ，后者属于W。
    

因此，我们说平面![](矩阵的直和（Direct_Sum）定义_images/img_017_60ed7f032fe9.svg)是X轴和Y轴的**内部直和**，记作![](矩阵的直和（Direct_Sum）定义_images/img_018_113289734cb9.svg)。

> **关键体会**：平面上的每个向量，都可以**毫无歧义、互不干扰**地分解为“横坐标部分”和“纵坐标部分”。这就是直和的精髓——**独立分解**。

* * *

#### 例子2：直和与块对角矩阵（核心应用）

接上例，我们定义平面上的一个线性变换![](矩阵的直和（Direct_Sum）定义_images/img_019_1c9132ed36ef.svg)：“在X方向拉伸2倍，在Y方向拉伸3倍”。

-   用公式写就是：![](矩阵的直和（Direct_Sum）定义_images/img_020_8b10aa56bef6.svg)。
    

**现在我们为直和空间![](矩阵的直和（Direct_Sum）定义_images/img_021_f9f99c6b09f7.svg)选取一组自然基**：

-   在U(X轴) 上选基![](矩阵的直和（Direct_Sum）定义_images/img_022_01260a90d8d0.svg)。
    
-   在W(Y轴) 上选基![](矩阵的直和（Direct_Sum）定义_images/img_023_006333bdfd80.svg)。
    
-   那么整个空间的直和基就是![](矩阵的直和（Direct_Sum）定义_images/img_024_830d72acfdfb.svg)，这其实就是标准基。
    

**计算变换 T 在这组基下的矩阵：**

-   看 T 对 U 的作用：![](矩阵的直和（Direct_Sum）定义_images/img_025_7d71bafad97a.svg)。所以对应U 的系数是2。
    
-   看 T 对 W 的作用：![](矩阵的直和（Direct_Sum）定义_images/img_026_ccc77a751bfd.svg)。所以对应W 的系数是3。
    
-   因此，T在这组基下的矩阵是：
    

![](矩阵的直和（Direct_Sum）定义_images/img_027_66510c975891.svg)

这里![](矩阵的直和（Direct_Sum）定义_images/img_028_c61851e98311.svg)是![](矩阵的直和（Direct_Sum）定义_images/img_029_64ec919c14d2.svg)在子空间![](矩阵的直和（Direct_Sum）定义_images/img_030_4ed569798c61.svg)上的变换矩阵（1x1），![](矩阵的直和（Direct_Sum）定义_images/img_031_82827a7bada6.svg)是 T 在子空间W上的变换矩阵（1x1）。这个矩阵就是典型的**块对角矩阵**![](矩阵的直和（Direct_Sum）定义_images/img_032_024fce3c878f.svg)。

> **关键体会**：因为变换![](D:\电脑文件\公众号知识库\数学_线性代数\矩阵的直和（Direct_Sum）定义_images\img_000_25739e100327.svg)在X轴和Y轴上是**独立进行**的（不混合坐标），所以它的矩阵呈现出简洁的块对角形式。这让我们研究![](矩阵的直和（Direct_Sum）定义_images/img_034_16b20807784c.svg)变得极其简单（其特征值就是2和3，特征向量就是坐标轴方向）。

* * *

#### 例子3：稍微抽象一点的例子（多项式空间）

考虑所有次数不超过2的多项式构成的空间![](矩阵的直和（Direct_Sum）定义_images/img_035_261b08e720cc.svg)。

-   令U为**偶多项式**子空间：![](矩阵的直和（Direct_Sum）定义_images/img_036_a4f286368def.svg)。
    
-   令W为**奇多项式**子空间：![](矩阵的直和（Direct_Sum）定义_images/img_037_553aea8b2a45.svg)。
    

**验证直和：**

1.  **交集为零**
    
    一个多项式如果既是偶的又是奇的，那么它必须满足![](矩阵的直和（Direct_Sum）定义_images/img_038_a0c418ea7608.svg)且![](矩阵的直和（Direct_Sum）定义_images/img_039_814c6361a3bc.svg)，这迫使![](矩阵的直和（Direct_Sum）定义_images/img_040_33639043db23.svg)。
    
2.  **张成整个空间**
    
    任意二次多项式![](矩阵的直和（Direct_Sum）定义_images/img_041_5efe4cb3e822.svg)都可以**唯一**分解为：
    
      
    

![](矩阵的直和（Direct_Sum）定义_images/img_042_54cea8f3f8de.svg)

所以，![](矩阵的直和（Direct_Sum）定义_images/img_043_b6f2e4c46efa.svg)。

**如果有一个变换 D 是求导后再乘以![](矩阵的直和（Direct_Sum）定义_images/img_044_ce46532e61ad.svg)，即![](矩阵的直和（Direct_Sum）定义_images/img_045_eee95702cc36.svg)**：

-   在 U 上：![](矩阵的直和（Direct_Sum）定义_images/img_046_93979c668681.svg)，结果仍在 U 中。
    
-   在W上：![](矩阵的直和（Direct_Sum）定义_images/img_047_7f43af12cac3.svg)，结果仍在W中。 因此，在直和基![](矩阵的直和（Direct_Sum）定义_images/img_048_2b02b8c5b5c9.svg)下，D 的矩阵也会是块对角形式。
    

####   

通过例子，你可以看到：

1.  **直和是一种“干净”的分解**
    
    就像把物体拆成几个完全独立的部件（如X和Y坐标）。
    
2.  **直和带来巨大的计算简化**
    
    当线性变换尊重这种分解时，其矩阵就是块对角的，大问题瞬间变成几个可以**独立处理**的小问题。
    

希望这些例子能帮助你建立起直观的理解。

#### 向量空间直和 vs 矩阵直和

![](矩阵的直和（Direct_Sum）定义_images/img_049_3ddb521e213f.png)

**图3**

图3讲的是：

**先有“向量空间的直和”**，再在“与该分解相适配的基”下，  
把线性变换写成一种特殊的**分块矩阵**；  
如果这个线性变换**不把两个子空间混在一起**，那它的矩阵就变成**矩阵直和（块对角）**。

所以：

-   **向量空间直和**
    
    是在说“空间怎么拆”
    
-   **矩阵直和**
    
    是在说“变换在这种拆法下怎么写”
    

这两个概念密切相关，但不是一回事。

* * *

## 1\. 什么是向量空间的直和

图3最上面写的是：

![](矩阵的直和（Direct_Sum）定义_images/img_050_46347c7c3bdb.svg)

意思是：整个空间 ![](矩阵的直和（Direct_Sum）定义_images/img_051_876b91d1ce33.svg) 可以由两个子空间 ![](矩阵的直和（Direct_Sum）定义_images/img_052_efcf5d26196e.svg) 拼起来，而且**拼法唯一**。

更准确地说，满足两件事：

![](矩阵的直和（Direct_Sum）定义_images/img_053_fbad56924588.svg)

也就是任意 ![](矩阵的直和（Direct_Sum）定义_images/img_054_9d50270ad2a3.svg) 都能写成

![](矩阵的直和（Direct_Sum）定义_images/img_055_2f3ec3929837.svg)

并且这个分解是**唯一的**。  
唯一性等价于：

![](矩阵的直和（Direct_Sum）定义_images/img_056_9493f73f0122.svg)

也就是说，这两个子空间除了零向量，没有重叠。

* * *

### 几何直觉

你可以把它想成：

-   ![](矩阵的直和（Direct_Sum）定义_images/img_057_c8600311a29a.svg)
    
     提供一种“方向成分”
    
-   ![](矩阵的直和（Direct_Sum）定义_images/img_058_35827bc9bf90.svg)
    
     提供另一种“方向成分”
    
-   整个空间里的任意向量，都能唯一拆成“![](矩阵的直和（Direct_Sum）定义_images/img_059_52e931418c45.svg) 部分 + ![](矩阵的直和（Direct_Sum）定义_images/img_060_bc57016b03d2.svg) 部分”
    

最经典例子：

![](矩阵的直和（Direct_Sum）定义_images/img_061_14b8bd8afbfc.svg)

其中

![](矩阵的直和（Direct_Sum）定义_images/img_062_ee2afbfd633a.svg)

任意 ![](矩阵的直和（Direct_Sum）定义_images/img_063_245ed34f61a0.svg) 都唯一写成

![](矩阵的直和（Direct_Sum）定义_images/img_064_8d9ded7f174b.svg)

* * *

## 2\. 什么是矩阵直和

矩阵直和写作

![](矩阵的直和（Direct_Sum）定义_images/img_065_4c946c7e2572.svg)

定义就是把两个矩阵放到一个更大的**块对角矩阵**里：

![](矩阵的直和（Direct_Sum）定义_images/img_066_f3625db9539d.svg)

比如：

![](矩阵的直和（Direct_Sum）定义_images/img_067_212682ca7e4d.svg)

再比如：

![](矩阵的直和（Direct_Sum）定义_images/img_068_50e8ae9960f0.svg)

所以矩阵直和本质上是在说：

> 这个大矩阵由两个“小系统”并排组成，它们互不干扰。

* * *

## 3\. 二者的根本区别

### 向量空间直和：对象是“空间”

![](矩阵的直和（Direct_Sum）定义_images/img_069_06bdb1b5bf46.svg)

说的是：  
**空间 U 被拆成两个互不重叠的子空间。**

这是“空间结构”的说法。

* * *

### 矩阵直和：对象是“线性变换的表示矩阵”

###   

![](矩阵的直和（Direct_Sum）定义_images/img_070_08c8e37ee1f5.svg)

说的是：  
在某组特殊基下，线性变换 ![](矩阵的直和（Direct_Sum）定义_images/img_071_911a1f8efe83.svg) 的矩阵恰好是块对角的。

这是“算子/变换的坐标表示”的说法。

* * *

## 4\. 它们之间是怎么联系起来的

这是图3最核心的地方。

* * *

### 第一步：空间先直和分解

设

![](矩阵的直和（Direct_Sum）定义_images/img_072_d5d2481119d5.svg)

然后给 ![](矩阵的直和（Direct_Sum）定义_images/img_073_63f32f497188.svg)、![](矩阵的直和（Direct_Sum）定义_images/img_074_a3dec14250b4.svg) 各自选基：

![](矩阵的直和（Direct_Sum）定义_images/img_075_8da15e6b4db9.svg)

把它们拼起来，得到 ![](矩阵的直和（Direct_Sum）定义_images/img_076_ae92f44580aa.svg) 的一组基：

![](矩阵的直和（Direct_Sum）定义_images/img_077_c3712d0f6f27.svg)

这叫做**适配这一直和分解的基**。

* * *

### 第二步：在线性变换 ![](矩阵的直和（Direct_Sum）定义_images/img_078_2de30e4d7dfa.svg) 下写矩阵

这时 ![](矩阵的直和（Direct_Sum）定义_images/img_079_a7ab137613d0.svg) 的矩阵一般写成分块形式：

![](矩阵的直和（Direct_Sum）定义_images/img_080_79c65acebb65.svg)

注意这四块不是随便来的，它们表示“从哪个子空间送到哪个子空间”。

图3右上角已经标出来了，但那里有一处方向标注其实容易让人混淆。更严谨地说，如果我们把坐标向量分成“上半部分对应 ![](矩阵的直和（Direct_Sum）定义_images/img_081_91c77e1aed21.svg)，下半部分对应 ![](矩阵的直和（Direct_Sum）定义_images/img_082_6fc834a0bcf8.svg)”：

![](矩阵的直和（Direct_Sum）定义_images/img_083_6626e926d285.svg)

那么

![](矩阵的直和（Direct_Sum）定义_images/img_084_ec32da1a515a.svg)

所以：

这里的意思是：

-   A：![](矩阵的直和（Direct_Sum）定义_images/img_085_b0b0da99dbae.svg) 内部怎么变
-   D：![](矩阵的直和（Direct_Sum）定义_images/img_086_895eaee11959.svg) 内部怎么变
-   B：![](矩阵的直和（Direct_Sum）定义_images/img_087_578666131dcd.svg) 的东西会不会“串到” ![](矩阵的直和（Direct_Sum）定义_images/img_088_2b9dca0937b5.svg) 
-   C：![](矩阵的直和（Direct_Sum）定义_images/img_089_293964343297.svg) 的东西会不会“串到” ![](矩阵的直和（Direct_Sum）定义_images/img_090_db94363af644.svg) 

  

* * *

## 5\. 什么时候矩阵会变成“矩阵直和”

关键条件是：

![](矩阵的直和（Direct_Sum）定义_images/img_091_b38fb67c8172.svg)

这叫：

 **![](矩阵的直和（Direct_Sum）定义_images/img_092_b9353b5b255a.svg) 和 ![](矩阵的直和（Direct_Sum）定义_images/img_093_28a9e787dd7f.svg) 都对 ![](矩阵的直和（Direct_Sum）定义_images/img_094_06bccbb79939.svg) 不变**，或说它们是 ![](矩阵的直和（Direct_Sum）定义_images/img_095_cb7aa4610320.svg) 的不变子空间。

意思是：

-    ![](矩阵的直和（Direct_Sum）定义_images/img_096_2f36b9d0b51d.svg) 里的向量，经 T 作用后，仍留在 ![](矩阵的直和（Direct_Sum）定义_images/img_097_0b800bf9d894.svg) 
-    ![](矩阵的直和（Direct_Sum）定义_images/img_098_1a4ae54583a0.svg) 里的向量，经 T 作用后，仍留在 ![](矩阵的直和（Direct_Sum）定义_images/img_099_ff2f132afa83.svg) 

于是“串门”现象消失：

![](矩阵的直和（Direct_Sum）定义_images/img_100_6382c200cebe.svg)

矩阵就变成

![](矩阵的直和（Direct_Sum）定义_images/img_101_86705f44fdd3.svg)

这就是**矩阵直和**。

* * *

## 6\. 一句话抓住本质

可以把这句话牢牢记住：

> **空间直和**是说：向量可以唯一拆成两部分。  
> **矩阵直和**是说：线性变换对这两部分分别独立作用，不发生混合。

* * *

## 7\. 一个最简单的二维例子

设

![](矩阵的直和（Direct_Sum）定义_images/img_102_6620a358a876.svg)

取

![](D:\电脑文件\公众号知识库\数学_线性代数\矩阵的直和（Direct_Sum）定义_images\img_001_471ebf6f9772.svg)

显然

![](矩阵的直和（Direct_Sum）定义_images/img_104_a0b423434e9a.svg)

现在定义线性变换

![](矩阵的直和（Direct_Sum）定义_images/img_105_6067ae3cc0aa.svg)

那么：

-   x 方向只被乘 2
    
-   y 方向只被乘 3
    
-   两个方向互不混合
    

在标准基下矩阵是

![](矩阵的直和（Direct_Sum）定义_images/img_106_25bc67f7bf83.svg)

这里你就能看得很清楚：

-   **向量空间直和**
    
    ![](矩阵的直和（Direct_Sum）定义_images/img_107_5882b1b37067.svg)
    
-   **矩阵直和**
    
    ![](矩阵的直和（Direct_Sum）定义_images/img_108_ca4af281af59.svg) 在这两个子空间上分别做缩放 ![](矩阵的直和（Direct_Sum）定义_images/img_109_186843f080bf.svg) 和 ![](矩阵的直和（Direct_Sum）定义_images/img_110_35455dbdbe44.svg)
    

  

* * *

## 8\. 一个“有直和，但不是矩阵直和”的例子

还是

![](矩阵的直和（Direct_Sum）定义_images/img_111_4c679f330752.svg)

其中

![](矩阵的直和（Direct_Sum）定义_images/img_112_59a4f98516e4.svg)

现在令

![](矩阵的直和（Direct_Sum）定义_images/img_113_dbd920e5c0ae.svg)

矩阵是

![](矩阵的直和（Direct_Sum）定义_images/img_114_8619e2d397b2.svg)

它不是块对角的。

为什么？

因为 ![](矩阵的直和（Direct_Sum）定义_images/img_115_fc7f6409c5cf.svg) 中的向量 ![](矩阵的直和（Direct_Sum）定义_images/img_116_c56216c588e8.svg) 经变换后变成

![](矩阵的直和（Direct_Sum）定义_images/img_117_129d0a64717f.svg)

这不再待在 ![](矩阵的直和（Direct_Sum）定义_images/img_118_cceb515872ea.svg) 里了，而是“跑到” ![](矩阵的直和（Direct_Sum）定义_images/img_119_143f8cc91d41.svg) 方向上去了一部分。  
也就是说 ![](矩阵的直和（Direct_Sum）定义_images/img_120_0aa47248e416.svg) 不是不变子空间。

所以：

-   空间依然可以直和分解
    
-   但这个变换并没有尊重这份分解
    
-   因而矩阵不是直和形式
    

这点特别重要。

* * *

## 9\. 把“![](矩阵的直和（Direct_Sum）定义_images/img_121_353ccbbd8d18.svg)”也讲清楚

图里左下写：

![](矩阵的直和（Direct_Sum）定义_images/img_122_3d9c22e35ffa.svg)

这表示：

-    ![](矩阵的直和（Direct_Sum）定义_images/img_123_3393027d58c6.svg) 是 T 在 ![](矩阵的直和（Direct_Sum）定义_images/img_124_9e761abfece7.svg) 上的限制
-    ![](矩阵的直和（Direct_Sum）定义_images/img_125_42ce8c38af24.svg) 是 T 在 ![](矩阵的直和（Direct_Sum）定义_images/img_126_83ba70cb5756.svg) 上的限制

也就是

![](矩阵的直和（Direct_Sum）定义_images/img_127_832c25c67b10.svg)

对任意

![](矩阵的直和（Direct_Sum）定义_images/img_128_a6c21cac7f89.svg)

有

![](矩阵的直和（Direct_Sum）定义_images/img_129_41b9d16a7124.svg)

这里的含义就是：

> 整个大变换，等于在两个子空间上分别做各自的小变换，再拼起来。

这正是“直和”的算子版本。

* * *

## 10\. 为什么这种形式很有用

因为块对角矩阵会让很多问题一下子变简单。

例如如果

![](矩阵的直和（Direct_Sum）定义_images/img_130_39223f750337.svg)

那么：

### 幂次容易算

![](矩阵的直和（Direct_Sum）定义_images/img_131_9cdb8e3e430d.svg)

### 指数容易算

![](矩阵的直和（Direct_Sum）定义_images/img_132_1afb3af2b59b.svg)

### 特征值容易看

大矩阵的特征值，就是 ![](矩阵的直和（Direct_Sum）定义_images/img_133_a410188ee20b.svg) 和 ![](矩阵的直和（Direct_Sum）定义_images/img_134_4092f3ab5921.svg) 的特征值并起来。

### 行列式容易算

![](矩阵的直和（Direct_Sum）定义_images/img_135_98cccb73a801.svg)

### 迹容易算

![](矩阵的直和（Direct_Sum）定义_images/img_136_43fcf96bf793.svg)

所以图3右下说“简化特征值、幂、指数”等，正是这个意思。

* * *

## 11\. 最后给你一个“概念地图”

你可以按这个顺序理解：

### 第一层：空间分解

![](矩阵的直和（Direct_Sum）定义_images/img_137_4996233ee3ac.svg)

表示整个空间被唯一拆分。

* * *

### 第二层：选适配基

![](矩阵的直和（Direct_Sum）定义_images/img_138_b6d9843d28db.svg)

这样矩阵自然会呈现分块结构。

* * *

### 第三层：一般分块矩阵

###   

![](矩阵的直和（Direct_Sum）定义_images/img_139_5a74a2134940.svg)

说明 ![](矩阵的直和（Direct_Sum）定义_images/img_140_969b1f27259b.svg) 可能会把两个子空间互相混合。

* * *

### 第四层：若子空间都不变

![](矩阵的直和（Direct_Sum）定义_images/img_141_fa4c49156b8f.svg)

则

![](矩阵的直和（Direct_Sum）定义_images/img_142_11521ae96ede.svg)

这时才真正得到“矩阵直和”。

* * *

## 12\. 最凝练的对比

**向量空间直和**

![](矩阵的直和（Direct_Sum）定义_images/img_143_7c1664ba8bb9.svg)

说的是“向量怎么拆”。

**矩阵直和**

![](矩阵的直和（Direct_Sum）定义_images/img_144_7eda57502de0.svg)

说的是“变换怎么分块独立地作用”。

**二者关系**是：

> 当线性变换尊重这个空间直和分解时，在线性代数里它的矩阵表示就会变成矩阵直和。

* * *

下一步用个 **3×3 整数矩阵**，把“空间直和 → 不变子空间 → 块对角/矩阵直和”完整算一遍；

![](矩阵的直和（Direct_Sum）定义_images/img_145_96febcba5eb4.svg)

* * *

## 1\. 先构造一个空间直和分解

取整个空间

![](矩阵的直和（Direct_Sum）定义_images/img_146_94777fceac9e.svg)

定义两个子空间：

![](矩阵的直和（Direct_Sum）定义_images/img_147_5cb222272498.svg)

这是 ![](矩阵的直和（Direct_Sum）定义_images/img_148_fd64026b9a2d.svg) 平面。

再取

![](矩阵的直和（Direct_Sum）定义_images/img_149_f78e8e54987e.svg)

这是 ![](矩阵的直和（Direct_Sum）定义_images/img_150_56ba0908a14b.svg) 轴。

于是

![](矩阵的直和（Direct_Sum）定义_images/img_151_ba3bd372aecf.svg)

为什么？

因为任意向量

![](矩阵的直和（Direct_Sum）定义_images/img_152_9745223f0c8c.svg)

其中

而且这种拆法是唯一的。  
并且

![](矩阵的直和（Direct_Sum）定义_images/img_153_dbae23efe1e2.svg)

所以这确实是直和。

* * *

## 2\. 选一个线性变换，让它“尊重这份分解”

定义矩阵

![](矩阵的直和（Direct_Sum）定义_images/img_154_b14dff2f9856.svg)

它对应的线性变换是

![](矩阵的直和（Direct_Sum）定义_images/img_155_eb17fc3aec0a.svg)

现在来看它对 ![](矩阵的直和（Direct_Sum）定义_images/img_156_ae1545058fe5.svg) 和 ![](矩阵的直和（Direct_Sum）定义_images/img_157_d345e9ca44a8.svg) 的作用。

* * *

### 对 ![](矩阵的直和（Direct_Sum）定义_images/img_158_98ffac9c7773.svg) 的作用

任取 ![](矩阵的直和（Direct_Sum）定义_images/img_159_76fbb1b7cacc.svg) 中向量

![](矩阵的直和（Direct_Sum）定义_images/img_160_1bebc1d80c77.svg)

则

![](矩阵的直和（Direct_Sum）定义_images/img_161_b9aaaf3450ff.svg)

所以

![](矩阵的直和（Direct_Sum）定义_images/img_162_16f3e50306a2.svg)

* * *

### 对 ![](矩阵的直和（Direct_Sum）定义_images/img_163_79b8d0446760.svg) 的作用

任取 ![](矩阵的直和（Direct_Sum）定义_images/img_164_cf7b59e20ad8.svg) 中向量

![](矩阵的直和（Direct_Sum）定义_images/img_165_efba8df91407.svg)

则

![](矩阵的直和（Direct_Sum）定义_images/img_166_9f3991d1a514.svg)

所以

![](矩阵的直和（Direct_Sum）定义_images/img_167_5b2d8c643846.svg)

* * *

### 结论

![](矩阵的直和（Direct_Sum）定义_images/img_168_e5914478cde2.svg) 和 ![](D:\电脑文件\公众号知识库\数学_线性代数\矩阵的直和（Direct_Sum）定义_images\img_002_7d576f8e8bf0.svg) 都是 ![](矩阵的直和（Direct_Sum）定义_images/img_170_c5fff9dc1724.svg) 的**不变子空间**。

这意味着：

> ![](矩阵的直和（Direct_Sum）定义_images/img_171_be952334cda8.svg) 不会把 ![](矩阵的直和（Direct_Sum）定义_images/img_172_b524575e4902.svg) 平面的分量甩到 ![](矩阵的直和（Direct_Sum）定义_images/img_173_2946f6147794.svg) 轴上，也不会把 ![](矩阵的直和（Direct_Sum）定义_images/img_174_84ff877f51e4.svg) 轴分量甩到 ![](矩阵的直和（Direct_Sum）定义_images/img_175_3460a61843ed.svg) 平面里。

虽然在 ![](矩阵的直和（Direct_Sum）定义_images/img_176_d1f242b82a77.svg) 内部，![](矩阵的直和（Direct_Sum）定义_images/img_177_00337b29640a.svg) 与 ![](矩阵的直和（Direct_Sum）定义_images/img_178_85ebae49a4d4.svg) 仍然会混合，但那是  **![](矩阵的直和（Direct_Sum）定义_images/img_179_1831ac81b22d.svg) 内部自己的事**，不影响它与 ![](矩阵的直和（Direct_Sum）定义_images/img_180_a270a7d8dfaf.svg) 的独立性。

* * *

## 3\. 在适配基下写成分块矩阵

因为这里我们选的本来就是标准基

![](矩阵的直和（Direct_Sum）定义_images/img_181_0d3ee50869b7.svg)

其中

-   ![](矩阵的直和（Direct_Sum）定义_images/img_182_dabc1e535bf8.svg)
    
     是 ![](矩阵的直和（Direct_Sum）定义_images/img_183_694b9d21e222.svg) 的基
    
-   ![](矩阵的直和（Direct_Sum）定义_images/img_184_9b3120b0454f.svg)
    
     是 ![](矩阵的直和（Direct_Sum）定义_images/img_185_e225d63c00d4.svg) 的基
    

所以这就是一个**适配直和分解的基**。

于是矩阵天然按

![](矩阵的直和（Direct_Sum）定义_images/img_186_3dafa8c145a8.svg)

分成块：

![](矩阵的直和（Direct_Sum）定义_images/img_187_21d32a61c9c5.png)

也就是

![](矩阵的直和（Direct_Sum）定义_images/img_188_d5df8151bfc4.svg)

其中

![](矩阵的直和（Direct_Sum）定义_images/img_189_58039f0b53bf.svg)

所以

![](矩阵的直和（Direct_Sum）定义_images/img_190_eccfdf0dd42d.svg)

这就是**矩阵直和**。

* * *

## 4\. 这里的 A 和 D 分别表示什么

##   

### A：![](矩阵的直和（Direct_Sum）定义_images/img_191_d9737731d5c4.svg) 在 ![](矩阵的直和（Direct_Sum）定义_images/img_192_de26f8bd7bd0.svg) 上的限制

因为 ![](矩阵的直和（Direct_Sum）定义_images/img_193_3f8cb5ed6a90.svg) 是二维平面，基取 ![](矩阵的直和（Direct_Sum）定义_images/img_194_c0a76ce47156.svg)，  
所以 ![](矩阵的直和（Direct_Sum）定义_images/img_195_3cb29851a6a2.svg) 的矩阵就是

![](矩阵的直和（Direct_Sum）定义_images/img_196_6b6059b98423.svg)

它表示在 ![](矩阵的直和（Direct_Sum）定义_images/img_197_e6987826b330.svg) 平面里：

![](矩阵的直和（Direct_Sum）定义_images/img_198_a2f38dbda0f3.svg)

这说明 ![](矩阵的直和（Direct_Sum）定义_images/img_199_2a07b243f59d.svg) 内部发生了一个二维线性变换。

* * *

### D：T 在 ![](矩阵的直和（Direct_Sum）定义_images/img_200_0bae7c21b79c.svg) 上的限制

因为 ![](矩阵的直和（Direct_Sum）定义_images/img_201_27d2eae1b4f7.svg) 是一维的，基取 ![](矩阵的直和（Direct_Sum）定义_images/img_202_b4cd6b47eda7.svg)，  
所以 ![](矩阵的直和（Direct_Sum）定义_images/img_203_da10ee81bfcb.svg) 的矩阵就是

![](矩阵的直和（Direct_Sum）定义_images/img_204_595da5c991bb.svg)

它表示在 ![](矩阵的直和（Direct_Sum）定义_images/img_205_367899eb91e4.svg) 轴上：

![](矩阵的直和（Direct_Sum）定义_images/img_206_be570abf9271.svg)

也就是单纯放大 4 倍。

* * *

## 5\. 从“向量拆分”角度看最直观

任意向量都能写成

![](矩阵的直和（Direct_Sum）定义_images/img_207_7e73223cadad.svg)

其中

![](矩阵的直和（Direct_Sum）定义_images/img_208_752e78839fd0.svg)

那么

![](矩阵的直和（Direct_Sum）定义_images/img_209_321d3c265409.svg)

由于两个子空间都不变，有：

![](矩阵的直和（Direct_Sum）定义_images/img_210_da3caf9540c4.svg)

所以

![](矩阵的直和（Direct_Sum）定义_images/img_211_504b8579a907.svg)

这正是“分别作用，再拼起来”。

也就是：

![](矩阵的直和（Direct_Sum）定义_images/img_212_39ea5a9c31aa.svg)

其中

* * *

## 6\. 为什么这就是“矩阵直和”而不是普通分块

因为这里**右上块**和**左下块**都是 0：

![](矩阵的直和（Direct_Sum）定义_images/img_213_1608b6da7e4d.svg)

这表示：

-   ![](矩阵的直和（Direct_Sum）定义_images/img_214_05177abe0cbd.svg)
    
     的输入不会跑到 ![](矩阵的直和（Direct_Sum）定义_images/img_215_ad71ff193c83.svg)
    
-   ![](矩阵的直和（Direct_Sum）定义_images/img_216_8c74bd8e945d.svg)
    
     的输入不会跑到 ![](矩阵的直和（Direct_Sum）定义_images/img_217_145a1fb326f7.svg)
    

也就是两个子空间之间**没有混合**。

所以这不是一般分块矩阵，而是**块对角矩阵**，即矩阵直和。

* * *

## 7\. 用基向量再验算一遍

看三个基向量：

### 对 ![](矩阵的直和（Direct_Sum）定义_images/img_218_4a3334d9f4af.svg)

### ![](矩阵的直和（Direct_Sum）定义_images/img_219_d12fad13505c.svg)

### 对 ![](矩阵的直和（Direct_Sum）定义_images/img_220_091dffeae92b.svg)

![](矩阵的直和（Direct_Sum）定义_images/img_221_acb99a0bda73.svg)

### 对 ![](矩阵的直和（Direct_Sum）定义_images/img_222_889dcea409c7.svg)

![](矩阵的直和（Direct_Sum）定义_images/img_223_c7267ea569be.svg)

看得很清楚：

-   前两个基向量属于 ![](矩阵的直和（Direct_Sum）定义_images/img_224_7c76c29703b5.svg)，变换后还在 ![](矩阵的直和（Direct_Sum）定义_images/img_225_89be21d6fe4a.svg)
    
-   第三个基向量属于 ![](矩阵的直和（Direct_Sum）定义_images/img_226_50d57b837e98.svg)，变换后还在 ![](矩阵的直和（Direct_Sum）定义_images/img_227_9d2d4cfcec4e.svg)
    

所以矩阵必然是块对角。

* * *

## 8\. 这个例子里，空间直和和矩阵直和分别是什么

### 向量空间直和

![](矩阵的直和（Direct_Sum）定义_images/img_228_021db95d8420.svg)

它讲的是：

-   三维空间可唯一拆成“平面部分 + 轴向部分”
    

* * *

### 矩阵直和

###   

![](矩阵的直和（Direct_Sum）定义_images/img_229_36608f15253c.svg)

它讲的是：

-   这个线性变换在 ![](矩阵的直和（Direct_Sum）定义_images/img_230_672c99d7ffef.svg) 上按 ![](矩阵的直和（Direct_Sum）定义_images/img_231_d1a50d7231ff.svg) 作用
    
-   在 ![](矩阵的直和（Direct_Sum）定义_images/img_232_e921f53c8ee6.svg) 上按 ![](矩阵的直和（Direct_Sum）定义_images/img_233_3f74d9fc8b0e.svg) 作用
    
-   两边互不串扰
    

* * *

## 9\. 顺手算一下特征值，你会更有感觉

因为

![](矩阵的直和（Direct_Sum）定义_images/img_234_d7123c63a34d.svg)

所以特征值就是 ![](矩阵的直和（Direct_Sum）定义_images/img_235_977bdf57bed1.svg) 和 ![](矩阵的直和（Direct_Sum）定义_images/img_236_f8007c80fcff.svg) 的特征值合起来。

先看

![](矩阵的直和（Direct_Sum）定义_images/img_237_baffa932c053.svg)

它是上三角矩阵，特征值就是对角线：

![](矩阵的直和（Direct_Sum）定义_images/img_238_66eecd8cd64d.svg)

再看

![](矩阵的直和（Direct_Sum）定义_images/img_239_e6ff9cbddd8f.svg)

特征值就是 4

所以 T 的特征值就是2,3,4

这就是块对角形式的好处：很多计算直接拆开做。

* * *

## 10\. 再给你一个“对照例子”：有空间直和，但不是矩阵直和

还是同样的空间分解：

![](矩阵的直和（Direct_Sum）定义_images/img_240_242c23e646f1.svg)

其中

![](D:\电脑文件\公众号知识库\数学_线性代数\矩阵的直和（Direct_Sum）定义_images\img_003_c8f76845b52e.svg)

现在换一个矩阵：

![](矩阵的直和（Direct_Sum）定义_images/img_242_3a230186c3fc.svg)

这个矩阵不是块对角，因为右上角那一列块不是 0。

看 ![](矩阵的直和（Direct_Sum）定义_images/img_243_db694605552a.svg)：

![](矩阵的直和（Direct_Sum）定义_images/img_244_9f650d051a54.svg)

它不再属于 ![](矩阵的直和（Direct_Sum）定义_images/img_245_96292b34fc34.svg)，因为前两项不为 0。  
这说明 ![](矩阵的直和（Direct_Sum）定义_images/img_246_f58dd40f2295.svg) 的向量被送进了 ![](矩阵的直和（Direct_Sum）定义_images/img_247_62b69450fdef.svg) 部分。

也就是说：

-   空间依然有直和分解
    
-   但变换不尊重它
    
-   所以矩阵只有一般分块形式，不是矩阵直和
    

这点非常关键。

* * *

## 11\. 你可以把这个例子记成一句话

这个例子中：

![](矩阵的直和（Direct_Sum）定义_images/img_248_edfbc6972067.svg)

而

![](矩阵的直和（Direct_Sum）定义_images/img_249_d12d0efff073.svg)

含义就是：

-   空间先拆成二维平面和一维直线
    
-   变换分别在这两块上独立工作
    
-   所以矩阵表现为块对角，即矩阵直和
    

* * *

## 12\. 最后做个极简总结

### 向量空间直和

![](矩阵的直和（Direct_Sum）定义_images/img_250_697d4de72164.svg)

说的是：**向量怎么唯一拆开**。

### 矩阵直和

![](矩阵的直和（Direct_Sum）定义_images/img_251_e388b96ee2b1.svg)

说的是：**线性变换怎么在两块上独立作用**。

### 二者联系

当 ![](矩阵的直和（Direct_Sum）定义_images/img_252_ae2d819c276a.svg) 且 ![](矩阵的直和（Direct_Sum）定义_images/img_253_192e9614902b.svg) 都是 ![](矩阵的直和（Direct_Sum）定义_images/img_254_ea550dc22bf6.svg) 的不变子空间时，

![](矩阵的直和（Direct_Sum）定义_images/img_255_e7a2e382d336.svg)

* * *

下一步我把这个例子画成一个“几何示意图”，直观看到 ![](矩阵的直和（Direct_Sum）定义_images/img_256_7ed32c5829c8.svg) 平面和 ![](矩阵的直和（Direct_Sum）定义_images/img_257_69bdef00d405.svg) 轴各自独立变化，画成一个三维几何示意图：

-   浅蓝色平面：![](矩阵的直和（Direct_Sum）定义_images/img_258_9beb7c2f9a0a.svg)
    
-   绿色竖线：![](矩阵的直和（Direct_Sum）定义_images/img_259_170f1a2cba8c.svg)
    
-   蓝色箭头：![](矩阵的直和（Direct_Sum）定义_images/img_260_68ea49cbc1ce.svg) 中的向量及其变换结果
    
-   绿色箭头：![](矩阵的直和（Direct_Sum）定义_images/img_261_4396464cd849.svg) 中的向量及其变换结果
    
-   图中会直观看到： **![](矩阵的直和（Direct_Sum）定义_images/img_262_ebdd5d50ca9e.svg) 里的向量变换后仍在平面内，![](矩阵的直和（Direct_Sum）定义_images/img_263_6aa86567c21f.svg) 里的向量变换后仍在 z 轴上**
    

###   

![](矩阵的直和（Direct_Sum）定义_images/img_264_6910aeba8d21.png)

### 

**图4**

### 图4表达什么

你重点看这几件事：

![](矩阵的直和（Direct_Sum）定义_images/img_265_b89dc2e8ea73.svg)

它们都在浅蓝色平面里；经过 T 后，

![](矩阵的直和（Direct_Sum）定义_images/img_266_30c7fb74b1ca.svg)

仍然还在这个平面里。

这说明：

![](矩阵的直和（Direct_Sum）定义_images/img_267_6b173604f2d0.svg)

同时，绿色竖直箭头 ![](矩阵的直和（Direct_Sum）定义_images/img_268_f4156370f39d.svg) 在 z 轴上，变换后 ![](矩阵的直和（Direct_Sum）定义_images/img_269_87c1cc49dd69.svg) 还是在 z 轴上，只是长度变成 4 倍：

![](矩阵的直和（Direct_Sum）定义_images/img_270_c5f1c34a6e73.svg)

所以这个变换不会把两个子空间混在一起，于是矩阵就是块对角：

![](矩阵的直和（Direct_Sum）定义_images/img_271_8e02980f17bb.svg)

* * *

几何含义

更清楚地表达：

-   ![](矩阵的直和（Direct_Sum）定义_images/img_272_ab1168656c83.svg)
    
     是一个二维平面
    
-   ![](矩阵的直和（Direct_Sum）定义_images/img_273_05440b547d13.svg)
    
     是 z 轴
    
-   蓝色向量都在平面里，经过 T 后变成红色向量，**仍然留在平面里**
    
-   绿色向量在 z 轴上，经过 T 后变成紫色向量，**仍然留在 z 轴上**
    

这正对应：

![](矩阵的直和（Direct_Sum）定义_images/img_274_1b52d078effd.svg)

所以：

![](矩阵的直和（Direct_Sum）定义_images/img_275_e250fe821d0f.svg)

于是矩阵呈现块对角形式：

![](矩阵的直和（Direct_Sum）定义_images/img_276_879812037534.svg)