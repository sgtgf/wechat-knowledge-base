# 什么是 Jordan 块？


> 原文地址: [https://mp.weixin.qq.com/s/0Rf\_5xSHKWkEWcGK\_XHC8g](https://mp.weixin.qq.com/s/0Rf_5xSHKWkEWcGK_XHC8g)

Jordan 块（Jordan block）是线性代数中一个重要的概念，它是用来描述矩阵的一种“简化形式”的基本构建单元。简单来说，当我们处理一个矩阵时，如果它不能完全对角化（比如因为特征向量不够多），我们就会用 Jordan 形式来表示它，而 Jordan 形式就是由几个 Jordan 块拼起来的对角块矩阵。

想象一下，矩阵就像一个“变换机器”，它把向量变来变去。Jordan 块帮助我们理解这个机器在某些“方向”上的行为，尤其是当有重复特征值时。

#### Jordan 块的结构

一个 Jordan 块是一个方阵，通常记作 ![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_Jordan_块__images\img_000_3c9a829326b5.svg)，其中：

-   λ 是特征值（对角线上的数字）。
    
-   k 是块的大小（矩阵的阶数）。

它的样子是：对角线上全是 ![](什么是_Jordan_块__images/img_001_822387741ea9.svg)，对角线正上方（超对角线）全是 1，其他地方全是 0。

比如，一个 3x3 的 Jordan 块 ![](什么是_Jordan_块__images/img_002_d391580288f0.svg) 长这样：

![](什么是_Jordan_块__images/img_003_3c20d69b1315.svg)

这就像一个“链条”：每个元素“连接”到下一个。

为什么需要 Jordan 块？

在理想情况下，矩阵可以对角化成全是对角线的形式。但如果特征值的几何重数小于代数重数（简单说，就是特征向量不够用），就需要用 Jordan 块来“补齐”。每个 Jordan 块对应一个特征值的“链式”广义特征向量。

举个例子：假如一个矩阵有特征值 3，重数 2，但只有一个特征向量。那么它的 Jordan 形式就是一个 2x2 的 Jordan 块：

![](什么是_Jordan_块__images/img_004_091842f8af87.svg)

如果重数是 4，但有两个独立的链，一个长 3，一个长 1，那么 Jordan 形式是两个块拼起来：

![](什么是_Jordan_块__images/img_005_f5aaad6fc236.svg)

![](什么是_Jordan_块__images/img_006_367f27a73728.png)

图里展示的是 **Jordan Normal Form（Jordan 标准形）**：一个大矩阵被拆成若干个“虚线框住的小方块”，每个小方块就是一个 **Jordan 块（Jordan block）**。这个名字来自 Camille Jordan。

* * *

## 1) Jordan 块到底长什么样？

对某个特征值 ![](什么是_Jordan_块__images/img_007_630f42eec51a.svg)，一个大小为 ![](什么是_Jordan_块__images/img_008_df9ad59e11b3.svg) 的 Jordan 块写作 ![](什么是_Jordan_块__images/img_009_a75be2e8bc64.svg)，形状固定：

![](什么是_Jordan_块__images/img_010_1d48916525c5.svg)

**记住三点：**

-   主对角线全是 ![](什么是_Jordan_块__images/img_011_9fe6204e5e14.svg)
    
-   紧贴主对角线上方（超对角线）是 1
    
-   其余位置是 0
    

* * *

## 2) 回到图片：它的 Jordan 块是什么？

图里有两个虚线框：

### (a) 左上角绿色框：一个 2x2 的 Jordan 块（特征值 2）

它对应

![](什么是_Jordan_块__images/img_012_b0f48847d0a2.svg)

### (b) 右下角蓝绿色框：一个 3x3 的 Jordan 块（特征值 3）

它对应

![](什么是_Jordan_块__images/img_013_c6b8ba2d233f.svg)

所以整张图表达的是一个 **分块对角矩阵**（Jordan 标准形就是把这些块放在对角线上）：

![](什么是_Jordan_块__images/img_014_630af636ce35.svg)

也就是说：这个矩阵的特征值有 **2（代数重数 2）** 和 **3（代数重数 3）**，并且分别以块的形式出现。

* * *

## 3) 为什么需要 Jordan 块？它在表达什么信息？

如果一个矩阵 A [可对角化](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)，那它在某个基底下就是纯对角阵：对角线上是特征值，其他全 0。

但很多矩阵 **不可对角化**：某个特征值 ![](什么是_Jordan_块__images/img_015_28489fabbd52.svg) 的“特征向量数量不够”（几何重数 < 代数重数）。这时你没法把它变成纯对角阵，只能变成“几乎是对角阵”的样子——**对角线上仍是 ![](什么是_Jordan_块__images/img_016_4242d15dce06.svg)，但不得不在超对角线留下 1**。这些 1 就是“缺的那部分结构”。

更直观一点：Jordan 块等于

![](什么是_Jordan_块__images/img_017_8f488c19a77b.svg)

其中 N 只有超对角线是 1，其余 0，并且 N 是**幂零矩阵**（例如 ![](什么是_Jordan_块__images/img_018_4d797ef4f335.svg)）。

-   λI：表示“按 ![](什么是_Jordan_块__images/img_019_800ca7acd674.svg) 缩放/旋转（复数情形）”
    
-   N：表示“在缩放的同时，沿着链条方向被**推一把**”（有点像剪切/串联传递）

* * *

## 4) 用最小的例子感受 Jordan 块的“那一个 1”在干嘛

看图里那个 ![](什么是_Jordan_块__images/img_020_dfd878a3f74e.svg)：

![](什么是_Jordan_块__images/img_021_db15c1cd518d.svg)

让 ![](什么是_Jordan_块__images/img_022_ca87daca4731.svg)。计算一下它对基向量的作用：

-   ![](什么是_Jordan_块__images/img_023_694155471ecb.svg)
    
    （很“特征向量”：只做倍增）
    
-   ![](什么是_Jordan_块__images/img_024_574c61402b6d.svg)

  

关键就在第二句： **![](什么是_Jordan_块__images/img_025_546930a11e8d.svg) 不仅被乘 2，还会额外“漏出”一份到 ![](什么是_Jordan_块__images/img_026_6a7419384823.svg) 方向**。  
这份“漏出/推一把”，正是超对角线那个 **1** 的含义——它记录了“不可对角化时，向量之间必须串起来”的结构（广义特征向量链）。

我们就把 **Jordan 块 = “广义特征向量链（chain）”** 这件事讲透，并直接对应到图里的 ![](什么是_Jordan_块__images/img_027_492398756f58.svg) 和 ![](什么是_Jordan_块__images/img_028_d879761390ae.svg)。

* * *

## 5) 先记住一句话：Jordan 块就是“链条的矩阵版”

对特征值 ![](什么是_Jordan_块__images/img_029_7bf60bfcf145.svg)，大小为 ![](什么是_Jordan_块__images/img_030_80b064d04f51.svg) 的 Jordan 块 ![](什么是_Jordan_块__images/img_031_3cb257a1bf94.svg) 对应一条长度为 ![](什么是_Jordan_块__images/img_032_89dfa8cbc61d.svg) 的向量链：

![](什么是_Jordan_块__images/img_033_0354b864e873.svg)

满足下面这个“递推关系”：

-   第一个是普通特征向量：
    

![](什么是_Jordan_块__images/img_034_5562e2f0fefe.svg)

-   后面都是广义特征向量（一个推一个）：
    

![](什么是_Jordan_块__images/img_035_0533f64b151d.svg)

把它写成“箭头图”最直观：

![](什么是_Jordan_块__images/img_036_29e458d48570.svg)

这条链的存在，就是“不可对角化时缺的那部分结构”。

* * *

## 6) 为什么 Jordan 块里会有超对角线的 1？

先看最典型的 3x3 块：

![](什么是_Jordan_块__images/img_037_15289f15dc7d.svg)

这个 N 只负责“把右边一格推到左边一格”（也就是链条传递），而 λI 负责“每个分量都乘 λ”。

我们把“**把右边一格推到左边一格**”这句话，彻底变成**可以算、可以画、可以想象的动作**。

下面我只讲那个最关键的“推”的矩阵 N（Jordan 块里超对角线的 1 对应的部分）：

![](什么是_Jordan_块__images/img_038_5ccf109f449e.svg)

* * *

## (6.1) 用“坐标槽位”来理解：它就是把坐标往左挪一格

把一个向量写成

![](什么是_Jordan_块__images/img_039_8fe40185712c.svg)

做矩阵乘法 ![](什么是_Jordan_块__images/img_040_41abb96d5515.svg)：

![](什么是_Jordan_块__images/img_041_e433ff0fd446.svg)

**这就是“推一格”的最具象版本：**

-   原来在第二格的 ![](什么是_Jordan_块__images/img_042_c284736e0012.svg)，被推到第一格
    
-   原来在第三格的 ![](什么是_Jordan_块__images/img_043_0855e0851e7c.svg)，被推到第二格
    
-   第三格变成 0（因为没有更右的东西可以推过来）
    

用一句更直白的话：

> ![](什么是_Jordan_块__images/img_044_e68e4e18f91b.svg) 把 ![](什么是_Jordan_块__images/img_045_410d7c8a212b.svg) 变成 ![](什么是_Jordan_块__images/img_046_a4dddaa3f1fc.svg)。

* * *

## (6.2) 直接上数字：一眼看出“推”

取

![](什么是_Jordan_块__images/img_047_dce33a22b027.svg)

那么

![](什么是_Jordan_块__images/img_048_a1da01e9306c.svg)

你看：**20 从“第二格”跑到“第一格”，30 从“第三格”跑到“第二格”。**

这就叫“把右边一格推到左边一格”。

* * *

## (6.3) 用“标准基向量”看得更像“搬运”

标准基：

![](什么是_Jordan_块__images/img_049_7c50408acbe8.svg)

分别乘 N：

-   ![](什么是_Jordan_块__images/img_050_9d35f3f48912.svg)
    
    （第一格左边没地方可推）
    
-   ![](什么是_Jordan_块__images/img_051_0098276aede5.svg)
    
    （第二格的“1”被推到第一格）
    
-   ![](什么是_Jordan_块__images/img_052_2edca20b7883.svg)
    
    （第三格的“1”被推到第二格）
    

所以它就是一个“搬运工”：

![](什么是_Jordan_块__images/img_053_15a49bf941e8.svg)

这条“搬运链”就是 Jordan 链的矩阵影子。

* * *

## (6.4) 图里的 Jordan 块其实是 ![](什么是_Jordan_块__images/img_054_25e4a2dda323.svg)：推 + 乘 λ

以图里的 ![](什么是_Jordan_块__images/img_055_6acea0fc53e2.svg) 为例：

![](什么是_Jordan_块__images/img_056_1e3b10e8fbcb.svg)

对任意 ![](什么是_Jordan_块__images/img_057_9e7cbbacb559.svg)：

![](什么是_Jordan_块__images/img_058_0754681b1b25.svg)

**非常具象：**

-   每一格先“自己乘 3”
    
-   然后再“从右边借一点过来”：  
    第一格额外加上第二格的 ![](什么是_Jordan_块__images/img_059_8c9c7c2fc813.svg)，第二格额外加上第三格的 ![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_Jordan_块__images\img_001_1734ae15c6ab.svg)
    

再用数字走一遍：

取 ![](什么是_Jordan_块__images/img_061_6e3ae86f80f7.svg)：

![](什么是_Jordan_块__images/img_062_4c90e22252f8.svg)

你可以把它想成：

-   先变成 ![](什么是_Jordan_块__images/img_063_b0ab43bf84f7.svg)
    
-   再把右边推过来的部分 ![](什么是_Jordan_块__images/img_064_ebaf7d3bed7e.svg) 加上
    
-   得到 ![](什么是_Jordan_块__images/img_065_317db1a34c0c.svg)
    

* * *

## (6.5) 一个更形象的类比：传送带/接力棒

把三格 ![](什么是_Jordan_块__images/img_066_12802516915f.svg) 当成三个人手里的“数值接力棒”：

-   ![](什么是_Jordan_块__images/img_067_515f70c1e2be.svg)
    
     的动作：右边的人把棒子递给左边的人  
    （第二给第一、第三给第二）
    
-   ![](什么是_Jordan_块__images/img_068_ea517038a366.svg)
    
     的动作：每个人先把自己手里的棒子复制 ![](什么是_Jordan_块__images/img_069_9600ae583366.svg) 倍，然后还会收到右边递来的一份
    

这就解释了为什么 Jordan 形式会带来“链式影响”：右端的信息会一步步往左传。

如前所述，取标准基向量 ![](什么是_Jordan_块__images/img_070_f698da2bf817.svg)，你会看到“推”的效果非常明确：

-   ![](什么是_Jordan_块__images/img_071_7263209dd979.svg)
-   ![](什么是_Jordan_块__images/img_072_1dba6e397a26.svg)
-   ![](什么是_Jordan_块__images/img_073_71760195c12d.svg)

  

所以 ![](什么是_Jordan_块__images/img_074_dc3b645056b3.svg) 就是“链条传递器”。而 ![](什么是_Jordan_块__images/img_075_76a983a13f91.svg) 就是“先乘 ![](什么是_Jordan_块__images/img_076_26ccf76e3222.svg)，再额外传递一点点到前一节”。

* * *

## 7) 直接对应图里的两块：分别是什么链？

### (a) ![](什么是_Jordan_块__images/img_077_01775da7b010.svg)：长度 2 的链（特征值 2）

  

![](什么是_Jordan_块__images/img_078_25acc57e4ab1.svg)

对应链：![](什么是_Jordan_块__images/img_079_4e9013110031.svg) 满足

![](什么是_Jordan_块__images/img_080_510fd9f4d7b8.svg)

箭头图：

![](什么是_Jordan_块__images/img_081_486a751d16c6.svg)

直观含义：**只有 1 个真正的特征向量 ![](什么是_Jordan_块__images/img_082_4975ad3db458.svg)，但代数重数是 2，于是必须再补一个 ![](什么是_Jordan_块__images/img_083_57add7ccaa3a.svg) 来“串链”。**

* * *

### (b) ![](什么是_Jordan_块__images/img_084_e05d958c4849.svg)：长度 3 的链（特征值 3）

![](什么是_Jordan_块__images/img_085_22293149c27c.svg)

对应链：![](什么是_Jordan_块__images/img_086_c62e022e982b.svg) 满足

![](什么是_Jordan_块__images/img_087_a8483304c2de.svg)

箭头图：

![](什么是_Jordan_块__images/img_088_1151bda308f6.svg)

直观含义：**特征值 3 的代数重数是 3，但只凑不齐 3 个线性无关的特征向量，于是需要一条（或多条）链补齐维度。**

> 顺便：如果是“凑不齐”的另一种情况，也可能出现两个块，比如 ![](什么是_Jordan_块__images/img_089_9f04a883ebb3.svg)，那就表示有两条链：一条长度 2，一条长度 1（这时特征向量就有 2 个）。

* * *

## 8) Jordan 块和“能否对角化”一句话判定

-   **[可对角化](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)**
    
     ⇔ 每个特征值 ![](什么是_Jordan_块__images/img_090_d28f95730c32.svg) 的 Jordan 块全是 ![](什么是_Jordan_块__images/img_091_239e84439095.svg)（没有任何超对角线的 1）
    
-   **不可对角化**
    
     ⇔ 至少有一个 Jordan 块大小 ![](什么是_Jordan_块__images/img_092_6a49ef6e700e.svg)（出现了那条超对角线的 1）
    

  

图里明显有 ![](什么是_Jordan_块__images/img_093_ca7408617051.svg) 和 ![](什么是_Jordan_块__images/img_094_eafc500f80a9.svg) 块，所以对应的原矩阵 ![](什么是_Jordan_块__images/img_095_d82e3141d502.svg)（满足 ![](什么是_Jordan_块__images/img_096_eca7e1fa746b.svg)）一定 **不可对角化**。

* * *

## 9) Jordan 块最实用的计算意义：算幂、算指数特别爽

因为 ![](什么是_Jordan_块__images/img_097_7f120949341a.svg)，且 ![](什么是_Jordan_块__images/img_098_1b6cc9a7c284.svg)，所以：

### (a) 幂次

![](什么是_Jordan_块__images/img_099_953f9474339b.svg)

只会到 ![](什么是_Jordan_块__images/img_100_fb8d039a8a28.svg) 为止（更高次全为 0），所以公式是“有限项”。

举个超直观的：对 ![](什么是_Jordan_块__images/img_101_954d33c09bda.svg)，因为 ![](什么是_Jordan_块__images/img_102_cc38a4d339e7.svg)：

![](什么是_Jordan_块__images/img_103_8af9c132cca7.svg)

那条“1”带来的影响，会线性地乘上 ![](什么是_Jordan_块__images/img_104_20c3c9333e51.svg)。

### (b) 指数 ![](什么是_Jordan_块__images/img_105_5ecd070cf471.svg)（比如解微分方程）

![](什么是_Jordan_块__images/img_106_829497010f77.svg)

而

![](什么是_Jordan_块__images/img_107_c1d91b87a049.svg)

仍然是有限项。

这就是 Jordan 形式在微分方程、线性动力系统里特别关键的原因：**除了指数 ![](什么是_Jordan_块__images/img_108_91f9260027e0.svg)，还会出现多项式因子 ![](什么是_Jordan_块__images/img_109_354c17458968.svg)** （正是“链条效应”）。

我们做一个**完整的 3×3 Jordan 块算例**：从给出矩阵 A，一路算到它的 Jordan 标准形 J，并把“链条”（广义特征向量）构造出来。

* * *

## 例子：给一个不明显但很“干净”的不可对角化矩阵

取

![](什么是_Jordan_块__images/img_110_9f7af9ba38d8.svg)

目标：找到 ![](什么是_Jordan_块__images/img_111_f035743ed79e.svg)，使得

![](什么是_Jordan_块__images/img_112_002fe03a0e2a.svg)

其中 ![](什么是_Jordan_块__images/img_113_5e573095b0c1.svg) 会是一个 **单个 3×3 的 Jordan 块**。

* * *

## 10）先求特征多项式（确定特征值与代数重数）

![](什么是_Jordan_块__images/img_114_e4fadc681e32.svg)

按第一行展开行列式：

![](什么是_Jordan_块__images/img_115_812971a747d9.svg)

计算两个 2×2 行列式：

-   ![](什么是_Jordan_块__images/img_116_016eb4e33912.svg)
-   ![](什么是_Jordan_块__images/img_117_33502e440dbe.svg)

代回去：

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_Jordan_块__images\img_002_bcecdc505b22.svg)

把 ![](什么是_Jordan_块__images/img_119_1067dcfdf7f2.svg)，再加 1 得 ![](什么是_Jordan_块__images/img_120_5747ea865f45.svg)，于是

![](什么是_Jordan_块__images/img_121_0aeb6c0cf370.svg)

展开：

![](什么是_Jordan_块__images/img_122_d6ef059e2461.svg)

再加 1：

![](什么是_Jordan_块__images/img_123_204614cd08fe.svg)

所以唯一特征值是

![](什么是_Jordan_块__images/img_124_75a8a3fbb8ce.svg)

* * *

## 11）求特征向量（看几何重数够不够）

算

![](什么是_Jordan_块__images/img_125_40c581b80a75.svg)

解 ![](什么是_Jordan_块__images/img_126_36e7f30b8486.svg)。设 ![](什么是_Jordan_块__images/img_127_de6ad2b6b842.svg)，方程组是：

![](什么是_Jordan_块__images/img_128_a257be521fe7.svg)

由第二式 ![](什么是_Jordan_块__images/img_129_7d828d42fc5e.svg)，第一式得 ![](什么是_Jordan_块__images/img_130_602790f7ff8c.svg)，第三式自动满足。

所以特征向量空间是一维：

![](什么是_Jordan_块__images/img_131_927202574df6.svg)

**几何重数 = 1 < 代数重数 = 3**，因此 ![](什么是_Jordan_块__images/img_132_9de2a64d81aa.svg)**不可对角化**，必须出现 Jordan 块大小 ![](什么是_Jordan_块__images/img_133_d848748e2491.svg)。而这里只有一个特征值 3，最终会是一个 **3×3 的 Jordan 块**。

* * *

## 12）构造“广义特征向量链”（Jordan 块的核心）

我们要找一条长度 3 的链 ![](什么是_Jordan_块__images/img_134_9a5d6d5c0f33.svg) 满足：

![](什么是_Jordan_块__images/img_135_9aa430c1f869.svg)

### (a) 已有 ![](什么是_Jordan_块__images/img_136_de33c3a7c57e.svg)

![](什么是_Jordan_块__images/img_137_4768325d434a.svg)

### (b) 解 ![](什么是_Jordan_块__images/img_138_ba5c18b4b741.svg)

令 ![](什么是_Jordan_块__images/img_139_ce94604f664c.svg)，则

![](什么是_Jordan_块__images/img_140_2d5d9dc8da9c.svg)

得到方程组：

![](什么是_Jordan_块__images/img_141_2b5deb44c26f.svg)

由 ![](什么是_Jordan_块__images/img_142_433b20c0d8c2.svg)，第三式给 ![](什么是_Jordan_块__images/img_143_a63e3712dada.svg)，代入第一式 ![](什么是_Jordan_块__images/img_144_cbeda4d72cce.svg) 成立（恒等式），所以有无穷多解。

选一个最简单的：取 ![](什么是_Jordan_块__images/img_145_c2f94932419a.svg)，则 ![](什么是_Jordan_块__images/img_146_c1b2c5b7d4f3.svg)，得到

![](什么是_Jordan_块__images/img_147_83ef44d586b5.svg)

### (c) 解 ![](什么是_Jordan_块__images/img_148_0fb1f19a4b2f.svg)

令 ![](什么是_Jordan_块__images/img_149_7d2219a06b64.svg)，则

![](什么是_Jordan_块__images/img_150_454318810e19.svg)

方程组：

![](什么是_Jordan_块__images/img_151_cbe512caf121.svg)

由 ![](什么是_Jordan_块__images/img_152_257213a8ff11.svg)，第三式变成 ![](什么是_Jordan_块__images/img_153_97d5b8fadeea.svg)，与第一式等价（同一条约束）。

取最简单：![](什么是_Jordan_块__images/img_154_3f6df3fe2531.svg)，得

![](什么是_Jordan_块__images/img_155_54db87a68150.svg)

* * *

## 13）组装 P 与 J，验证 ![](什么是_Jordan_块__images/img_156_f67c486360a4.svg)

把链向量按顺序作为列拼成

![](什么是_Jordan_块__images/img_157_404cfc08c836.svg)

对应的 Jordan 块（长度 3，特征值 3）是

![](什么是_Jordan_块__images/img_158_699f7946c700.svg)

为什么这就对了？关键等式是链条关系等价于：

![](什么是_Jordan_块__images/img_159_514a5dd7885c.svg)

把这三条并在一起就是矩阵形式：

![](什么是_Jordan_块__images/img_160_994789e41727.svg)

也就是

![](什么是_Jordan_块__images/img_161_f340ffdc1b9b.svg)

到这里，Jordan 分解完成：这个 ![](什么是_Jordan_块__images/img_162_2a9f752de057.svg) 在基底 ![](什么是_Jordan_块__images/img_163_5b4264cecb85.svg) 下就是一个 **3×3 Jordan 块**。

#### 通俗比喻

把 Jordan 块想象成一个“滑梯链”：特征值 ![](什么是_Jordan_块__images/img_164_71e60be0a649.svg) 是滑梯的“高度”，1 是连接的“台阶”。向量在变换时，会沿着这个链“滑”下去，直到碰到零空间。这有助于理解动态系统，比如在微分方程中，矩阵的指数函数会变得简单。