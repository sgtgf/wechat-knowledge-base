# 什么是Cayley–Hamilton 定理


> 原文地址: [https://mp.weixin.qq.com/s/0MbAu6AM1XTB4xnRpYgzUg](https://mp.weixin.qq.com/s/0MbAu6AM1XTB4xnRpYgzUg)

![](什么是Cayley_Hamilton_定理_images/img_000_87935ae3f3b0.png)

图1

Cayley–Hamilton 定理（凯莱–哈密顿定理）说的是一句非常漂亮的话：

**每个方阵都“满足它自己的特征多项式”。**

* * *

### 1\. 先把定理本身说清楚

设![](什么是Cayley_Hamilton_定理_images/img_001_9548268a61ba.svg)是一个![](什么是Cayley_Hamilton_定理_images/img_002_68ce50ba5f43.svg)方阵。  
它的**特征多项式**定义为

![](什么是Cayley_Hamilton_定理_images/img_003_ce4c2c7781c7.svg)

它一定是一个![](什么是Cayley_Hamilton_定理_images/img_004_93042b9ceda8.svg)次多项式，可写成

![](什么是Cayley_Hamilton_定理_images/img_005_b6c49efe708d.svg)

那么 Cayley-Hamilton 定理说：

![](什么是Cayley_Hamilton_定理_images/img_006_94077ea24b88.svg)

这里右边的![](什么是Cayley_Hamilton_定理_images/img_007_f7c3eb24d190.svg)不是数字 0，而是**零矩阵**。

* * *

### 2\. “满足自己的特征多项式”是什么意思？

本来![](什么是Cayley_Hamilton_定理_images/img_008_5b7439f92b92.svg)是关于标量![](什么是Cayley_Hamilton_定理_images/img_009_ef3733d31565.svg)的多项式。  
现在把里面的![](什么是Cayley_Hamilton_定理_images/img_010_91819da1ee05.svg)换成矩阵![](什么是Cayley_Hamilton_定理_images/img_011_d2f5f9ca5bd7.svg)，并把常数项换成![](什么是Cayley_Hamilton_定理_images/img_012_5dc062a5779c.svg)，就得到

![](什么是Cayley_Hamilton_定理_images/img_013_c1512663259f.svg)

Cayley-Hamilton 定理说，这个结果恰好就是零矩阵。

也就是说：

-   对数来说，可能有![](什么是Cayley_Hamilton_定理_images/img_014_81c44a558347.svg)
    
-   对矩阵来说，特征多项式 p 在 A 这个“输入”上取值时，也变成 0
    

* * *

### 3\. 为什么它重要？

它重要在于：**高次[矩阵幂](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491598&idx=1&sn=a2bea4ddd7b52aa256debde77155f8c0&scene=21#wechat_redirect)可以降阶**。

因为

![](什么是Cayley_Hamilton_定理_images/img_015_04331eba645b.svg)

所以任何![](什么是Cayley_Hamilton_定理_images/img_016_f57e639a9428.svg)都能改写成

![](什么是Cayley_Hamilton_定理_images/img_017_8261fd016033.svg)

的线性组合。

这有很多用途：

#### (1) 简化高次幂计算

比如算![](什么是Cayley_Hamilton_定理_images/img_018_bed9817a3a9a.svg)，不必真的乘 100 次，可以不断降阶。

#### (2) 求矩阵函数

如![](什么是Cayley_Hamilton_定理_images/img_019_41778795469b.svg)，最后都能化成有限阶矩阵幂组合。

#### (3) 推导[逆矩阵](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488467&idx=1&sn=d2dda45bec1834ee54e778a4f0ddbf25&scene=21#wechat_redirect)公式

若![](什么是Cayley_Hamilton_定理_images/img_020_a89d53d26686.svg)，则特征多项式常数项![](什么是Cayley_Hamilton_定理_images/img_021_c7776b65a8a1.svg)，可从

![](什么是Cayley_Hamilton_定理_images/img_022_64ad3f0d4522.svg)

整理出![](什么是Cayley_Hamilton_定理_images/img_023_ab2f2a3ed096.svg)是![](什么是Cayley_Hamilton_定理_images/img_024_cb50479d2cd4.svg)的线性组合。

* * *

### 4\. 先看一个最简单的![](什么是Cayley_Hamilton_定理_images/img_025_8ecd86487ab5.svg)例子

设

![](什么是Cayley_Hamilton_定理_images/img_026_e5ccf65c9c46.svg)

它的特征多项式是

![](什么是Cayley_Hamilton_定理_images/img_027_dbdf8049b645.svg)

展开得

![](什么是Cayley_Hamilton_定理_images/img_028_f0f62ebb5b13.svg)

也就是

![](什么是Cayley_Hamilton_定理_images/img_029_c6e6ae2a305b.svg)

因此 Cayley-Hamilton 定理说

![](什么是Cayley_Hamilton_定理_images/img_030_97413ce7d830.svg)

下面我把这个过程拆开讲透。

## 4.1 先看“多项式代入矩阵”是什么意思

如果有一个普通多项式

![](什么是Cayley_Hamilton_定理_images/img_031_2cda772d41b1.svg)

那么把一个矩阵 ![](什么是Cayley_Hamilton_定理_images/img_032_f179b673de70.svg) 代进去，定义为

![](什么是Cayley_Hamilton_定理_images/img_033_f20c54d1d631.svg)

注意这里：

-    ![](什么是Cayley_Hamilton_定理_images/img_034_240cb43b6a07.svg) 变成 ![](什么是Cayley_Hamilton_定理_images/img_035_473c58d0efb4.svg) 
-    ![](什么是Cayley_Hamilton_定理_images/img_036_bb5d75f1ec9f.svg) 变成 ![](什么是Cayley_Hamilton_定理_images/img_037_0dd0d0d174b7.svg) 
-   常数 6 不能直接写成“6”，因为矩阵加法要求维度一致，所以要写成![](什么是Cayley_Hamilton_定理_images/img_038_e3d6fb4fbcdb.svg)
    

因此一般地，

![](什么是Cayley_Hamilton_定理_images/img_039_aa07556a68ad.svg)

代入矩阵后就是

![](什么是Cayley_Hamilton_定理_images/img_040_cc82463566cb.svg)

* * *

## 4.2 把这个规则用到特征多项式上

对于 ![](什么是Cayley_Hamilton_定理_images/img_041_bfa4d792dfa1.svg) 矩阵 ![](什么是Cayley_Hamilton_定理_images/img_042_c2db4e8e193b.svg)，特征多项式是

![](什么是Cayley_Hamilton_定理_images/img_043_64b05f1a8727.svg)

现在按“多项式代入矩阵”的规则，把 ![](什么是Cayley_Hamilton_定理_images/img_044_1966327acb6f.svg) 换成 ![](什么是Cayley_Hamilton_定理_images/img_045_b8c5d664cae4.svg)：

![](什么是Cayley_Hamilton_定理_images/img_046_4f17ad73b90a.svg)

然后由 Cayley–Hamilton 定理：

![](什么是Cayley_Hamilton_定理_images/img_047_04943268193b.svg)

所以立刻得到

![](什么是Cayley_Hamilton_定理_images/img_048_c12c50f6c9c1.svg)

这就是来源。

* * *

### 5\. 用一个具体整数矩阵验算

取

![](什么是Cayley_Hamilton_定理_images/img_049_8eea0070160d.svg)

#### 第一步：求特征多项式

![](什么是Cayley_Hamilton_定理_images/img_050_e9764befc298.svg)

![](什么是Cayley_Hamilton_定理_images/img_051_f69beeeb0f8a.svg)

所以定理预言：

![](什么是Cayley_Hamilton_定理_images/img_052_8115e80ad19c.svg)

#### 第二步：直接算![](什么是Cayley_Hamilton_定理_images/img_053_2cc58d7a0a0b.svg)

####   

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是Cayley_Hamilton_定理_images\img_000_496f4bbb9333.svg)

#### 第三步：算![](什么是Cayley_Hamilton_定理_images/img_055_1bf6dba0d363.svg)

####   

![](什么是Cayley_Hamilton_定理_images/img_056_efa21ae70456.svg)

所以

![](什么是Cayley_Hamilton_定理_images/img_057_8f1fc9a2bf53.svg)

这正好等于![](什么是Cayley_Hamilton_定理_images/img_058_57d44d36eb2e.svg)。因此

![](什么是Cayley_Hamilton_定理_images/img_059_5d21165aeb2f.svg)

验证成立。

* * *

### 6\. 几何上怎么理解？

矩阵 A 是一个线性变换。  
Cayley-Hamilton 定理说：

> 这个变换反复作用到足够高次以后，不会产生“全新的独立行为”，  
> 它最终一定能由较低次的作用组合出来。

换句话说：

-   ![](什么是Cayley_Hamilton_定理_images/img_060_3301ae87349a.svg)：不变
-   A：作用一次
-   ![](什么是Cayley_Hamilton_定理_images/img_061_0b8708c42d14.svg)：作用两次
-   …
    
-   ![](什么是Cayley_Hamilton_定理_images/img_062_beab942ad5ae.svg)：作用 ![](什么是Cayley_Hamilton_定理_images/img_063_de13532562aa.svg) 次

到了![](什么是Cayley_Hamilton_定理_images/img_064_7c8f861cd150.svg)，它已经不再“独立”，而是前面这些的线性组合。

这和有限维空间的本质是一致的：  
**在 n 维空间中，不可能无限产生彼此独立的新方向。**

* * *

### 7\. 它和特征值有什么关系？

如果![](什么是Cayley_Hamilton_定理_images/img_065_931b12d52d9f.svg)是![](什么是Cayley_Hamilton_定理_images/img_066_e303f1ec311b.svg)的特征值，那么它满足

![](什么是Cayley_Hamilton_定理_images/img_067_86ca870bb8d0.svg)

而 Cayley-Hamilton 更强，它不是只对每个特征值成立，而是直接对**整个矩阵**成立：

![](什么是Cayley_Hamilton_定理_images/img_068_3e2cbb0bf40e.svg)

所以可以理解为：

-   特征值是让标量多项式![](什么是Cayley_Hamilton_定理_images/img_069_6e8d50e62f31.svg)为零的数；
    
-   矩阵 A 本身也让“矩阵版的同一个多项式”变成零矩阵。
    

* * *

### 8\. 和最小多项式的关系

还有一个比它更“精细”的对象叫**最小多项式**![](什么是Cayley_Hamilton_定理_images/img_070_a91bcc5749bf.svg)：

它是次数最低的首一多项式，使得

![](什么是Cayley_Hamilton_定理_images/img_071_410ee2a6736e.svg)

那么：

![](什么是Cayley_Hamilton_定理_images/img_072_c0f8d81ab210.svg)

也就是说：

-   Cayley-Hamilton 告诉你，特征多项式一定能把![](什么是Cayley_Hamilton_定理_images/img_073_1dd6beacc389.svg)消掉；
    
-   但真正“最省”的那个多项式，可能次数更低，那就是最小多项式。
    

所以从实用角度看：

-   **特征多项式**
    
    一定成立，通用
    
-   **最小多项式**
    
    更短、更高效
    

* * *

### 9\. 一个常见应用：表示逆矩阵

若![](什么是Cayley_Hamilton_定理_images/img_074_9b26c5427899.svg)可逆，则对

![](什么是Cayley_Hamilton_定理_images/img_075_d8d0382711c2.svg)

两边乘以![](什么是Cayley_Hamilton_定理_images/img_076_a660375a67b6.svg)，得：

![](什么是Cayley_Hamilton_定理_images/img_077_acb6e0a44ee7.svg)

于是

![](什么是Cayley_Hamilton_定理_images/img_078_00f2b0f39934.svg)

这说明：

> 可逆矩阵的逆矩阵，可以写成它自身低次幂的多项式。

这很漂亮，也很有用。

* * *

### 10\. 图1里的那句话怎么理解？

图中大意是：

若矩阵的特征多项式写成

![](什么是Cayley_Hamilton_定理_images/img_079_b8b1d61e5236.svg)

那么把![](什么是Cayley_Hamilton_定理_images/img_080_a88811c14c1e.svg)换成矩阵![](什么是Cayley_Hamilton_定理_images/img_081_7fdc50a3b426.svg)，就得到

![](什么是Cayley_Hamilton_定理_images/img_082_8a76175156da.svg)

这正是 Cayley-Hamilton 定理的标准表述。

* * *

### 11\. 一句话总结

Cayley-Hamilton 定理的核心就是：

> **方阵自己的特征多项式，代入这个矩阵本身后，结果一定是零矩阵。**

它的本质意义是：

-   有限维线性变换的高次行为最终会“回落”到低次行为的组合；
    
-   因而高次矩阵幂、矩阵函数、逆矩阵等问题都能系统地化简。
    

* * *

我们用一个具体的3x3 整数矩阵，把 Cayley–Hamilton 定理完整算一遍。

选一个算起来比较顺、又能看清结构的矩阵：

![](什么是Cayley_Hamilton_定理_images/img_083_cf0fb158af75.svg)

这是一个**[上三角矩阵](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247495118&idx=1&sn=453d58c3373cbc240ccbdc25412f1cb5&scene=21#wechat_redirect)**，所以它的特征多项式比较容易求。

* * *

## 1\. 第一步：求特征多项式

先写

![](什么是Cayley_Hamilton_定理_images/img_084_1181cbcf5610.svg)

因为这是上三角矩阵，所以行列式就是对角线相乘：

![](什么是Cayley_Hamilton_定理_images/img_085_d941a7d253f7.svg)

先展开前两个：

![](什么是Cayley_Hamilton_定理_images/img_086_4a37ccb3fc1a.svg)

再乘上![](什么是Cayley_Hamilton_定理_images/img_087_3e01b89f83f6.svg)：

![](什么是Cayley_Hamilton_定理_images/img_088_cb24987892b2.svg)

展开：

![](什么是Cayley_Hamilton_定理_images/img_089_bb1e82a0a1ab.svg)

所以 Cayley–Hamilton 定理预言：

![](什么是Cayley_Hamilton_定理_images/img_090_a9fcc2972a87.svg)

下面我们直接验算。

* * *

## 2\. 第二步：先算![](什么是Cayley_Hamilton_定理_images/img_091_ab268e312c69.svg)

##   

![](什么是Cayley_Hamilton_定理_images/img_092_2c85c8d65d2c.svg)

按前行乘后列的规则逐项来算。

### 第一行

![](什么是Cayley_Hamilton_定理_images/img_093_6ee7aa14fc47.png)

### 第一行乘第一列：

![](什么是Cayley_Hamilton_定理_images/img_094_621e487ccbf4.svg)

第一行乘第二列：

![](什么是Cayley_Hamilton_定理_images/img_095_12bbbaa30c46.svg)

第一行乘第三列：

![](什么是Cayley_Hamilton_定理_images/img_096_8f55b95a5d4c.svg)

### 第二行

得：0，4，5

### 第三行

得：0，0，9

所以

![](什么是Cayley_Hamilton_定理_images/img_097_6bcbadc0b931.svg)

* * *

## 3\. 第三步：再算![](什么是Cayley_Hamilton_定理_images/img_098_c77cabfc3182.svg)

##   

![](什么是Cayley_Hamilton_定理_images/img_099_578a846dc6fa.svg)

即

![](什么是Cayley_Hamilton_定理_images/img_100_6011073463e7.svg)

同样按前行乘后列的规则逐项算。

### 第一行

得：1，7，6

### 第二行

得：0，8，19

### 第三行

得：0，0，27

所以

![](什么是Cayley_Hamilton_定理_images/img_101_74e587da7b9e.svg)

* * *

## 4\. 第四步：计算

![](什么是Cayley_Hamilton_定理_images/img_102_6a8dcc6974c0.svg)

我们分块做。

### 先算![](什么是Cayley_Hamilton_定理_images/img_103_2f7071117167.svg)

###   

![](什么是Cayley_Hamilton_定理_images/img_104_40f1708c806c.svg)

### 再算 11A  

###   

![](什么是Cayley_Hamilton_定理_images/img_105_d9d07ff2cb38.svg)

### 再算![](什么是Cayley_Hamilton_定理_images/img_106_099ec421338b.svg)

![](什么是Cayley_Hamilton_定理_images/img_107_54e3d048b508.svg)

* * *

## 5\. 第五步：把四项加起来

先算

![](什么是Cayley_Hamilton_定理_images/img_108_c33d77aa8d17.svg)

再加11A：

![](什么是Cayley_Hamilton_定理_images/img_109_403a31eb89ed.svg)

最后再加![](什么是Cayley_Hamilton_定理_images/img_110_25620ab80cd4.svg)：

![](什么是Cayley_Hamilton_定理_images/img_111_8af5780eeb9d.svg)

所以确实有

![](什么是Cayley_Hamilton_定理_images/img_112_dacde57f358a.svg)

这就完整验证了 Cayley–Hamilton 定理。

* * *

## 6\. 这个例子告诉了我们什么？

因为

![](什么是Cayley_Hamilton_定理_images/img_113_51d2f1c6eae6.svg)

所以可以改写成

![](什么是Cayley_Hamilton_定理_images/img_114_499d491d3720.svg)

这句话很有用。它表示：

**三次幂 ![](什么是Cayley_Hamilton_定理_images/img_115_514213b9b379.svg) 并不“新”，它可以由 ![](什么是Cayley_Hamilton_定理_images/img_116_69b88550b880.svg) 组合出来。**

进一步地，所有更高次幂也都能继续降下来。

比如

![](什么是Cayley_Hamilton_定理_images/img_117_c9c9cc04f4c2.svg)

再把![](什么是Cayley_Hamilton_定理_images/img_118_8902cd5248da.svg)用上面的式子代回去，就能把![](什么是Cayley_Hamilton_定理_images/img_119_3a88a1c26ea8.svg)也写成![](D:\电脑文件\公众号知识库\数学_线性代数\什么是Cayley_Hamilton_定理_images\img_001_cffe4179d537.svg)的线性组合。

所以从![](什么是Cayley_Hamilton_定理_images/img_121_4b3eac656d50.svg)方阵开始，所有高次幂最后都能压缩到：

![](什么是Cayley_Hamilton_定理_images/img_122_606f8ba8d1da.svg)

这就是 Cayley–Hamilton 定理最实用的地方之一。

* * *

## 7\. 为什么我特意选上三角矩阵？

因为这个例子还有一个附带好处：

上三角矩阵的特征值，就是对角线元素：1，2，3

于是特征多项式自然就是

![](什么是Cayley_Hamilton_定理_images/img_123_fb9ae8f17c56.svg)

你会更容易看到：

-   特征值决定特征多项式；
    
-   特征多项式再反过来“消掉”矩阵本身。
    

* * *

## 8\. 再给你一个更本质的理解

这个定理不是偶然凑出来的。

因为3x3矩阵作用在三维空间里，线性变换再怎么反复叠加，也不可能无限制造全新的独立方向。  
所以![](什么是Cayley_Hamilton_定理_images/img_124_270b0676aca2.svg)这些矩阵之间，迟早会出现线性关系。

而 Cayley–Hamilton 定理告诉你，一个非常自然、非常标准的线性关系就是：

![](什么是Cayley_Hamilton_定理_images/img_125_853102cdfc5b.svg)

其中p正是它自己的特征多项式。

* * *

## 9\. 一句收束

对于这个具体例子，

![](什么是Cayley_Hamilton_定理_images/img_126_5cfc9f044205.svg)

它的特征多项式是

![](什么是Cayley_Hamilton_定理_images/img_127_e5d99f49dcfe.svg)

而 Cayley–Hamilton 定理说

![](什么是Cayley_Hamilton_定理_images/img_128_70a43b19dd8d.svg)

我们已经逐项算出并验证成立。

* * *

我们接着讲：

## Cayley–Hamilton 定理和“最小多项式”是什么关系？

这两个概念关系非常紧密，但层次不同：

-   **特征多项式**
    
    一定能把矩阵“消掉”
    
-   **最小多项式**
    
    在所有能把矩阵“消掉”的多项式里，次数最小的那个
    

可以把它们理解成：

-   特征多项式是“**一定有效的通用大锤**”
    
-   最小多项式是“**刚刚好够用的最短公式**”
    

* * *

## 1\. 先回顾：什么叫“把矩阵消掉”？

如果一个多项式![](什么是Cayley_Hamilton_定理_images/img_129_f71b2b699882.svg)满足

![](什么是Cayley_Hamilton_定理_images/img_130_a3726587a902.svg)

这里的![](什么是Cayley_Hamilton_定理_images/img_131_dc8fc674d7d2.svg)是零矩阵，  
那我们就说：**这个多项式把矩阵 A 消掉了**。

例如前面的例子

![](什么是Cayley_Hamilton_定理_images/img_132_88424c9afdc7.svg)

它的特征多项式是

![](什么是Cayley_Hamilton_定理_images/img_133_7ed414c833ec.svg)

根据 Cayley–Hamilton 定理，

![](什么是Cayley_Hamilton_定理_images/img_134_35b7bf71fe48.svg)

所以![](什么是Cayley_Hamilton_定理_images/img_135_dd1e744c3b81.svg)就是一个能把A消掉的多项式。

但问题来了：

> 有没有次数更低的多项式，也能把![](什么是Cayley_Hamilton_定理_images/img_136_5a314d4eab97.svg)消掉？

这就引出了最小多项式。

* * *

## 2\. 最小多项式的定义

矩阵 A 的**最小多项式**，记作![](什么是Cayley_Hamilton_定理_images/img_137_4f79ab23b971.svg)，定义为：

> 在所有满足![](什么是Cayley_Hamilton_定理_images/img_138_ef2f43bb55c6.svg)的首一多项式中，次数最小的那个。

这里“首一”就是最高次项系数为 1。

所以：

![](什么是Cayley_Hamilton_定理_images/img_139_01b278743ea3.svg)

而且它是“最短”的那个。

* * *

## 3\. 它和 Cayley–Hamilton 的直接关系

Cayley–Hamilton 告诉我们：

![](什么是Cayley_Hamilton_定理_images/img_140_23f0706a002a.svg)

因此至少说明一件事：

> “能把![](什么是Cayley_Hamilton_定理_images/img_141_8a5ca9a55999.svg)消掉的多项式”一定存在。

所以最小多项式![](什么是Cayley_Hamilton_定理_images/img_142_a2ccde77aaf3.svg)一定存在。

而它和特征多项式![](什么是Cayley_Hamilton_定理_images/img_143_454c0a77cab2.svg)的核心关系是：

![](什么是Cayley_Hamilton_定理_images/img_144_c06cd4d81229.svg)

意思是：

> **最小多项式一定整除特征多项式。**

也就是说，特征多项式是一个“能用”的式子，  
而最小多项式是其中真正“不可再缩短”的核心部分。

* * *

## 4\. 为什么一定整除？

这个结论非常重要。

理由直观上是这样：

假设![](什么是Cayley_Hamilton_定理_images/img_145_6fee8721184b.svg)是特征多项式，且![](什么是Cayley_Hamilton_定理_images/img_146_a2190c9c2ddb.svg)。  
把![](什么是Cayley_Hamilton_定理_images/img_147_bc0b31b0cf46.svg)除以![](什么是Cayley_Hamilton_定理_images/img_148_720059454fdf.svg)：

![](什么是Cayley_Hamilton_定理_images/img_149_16b1837fb95f.svg)

其中余式![](什么是Cayley_Hamilton_定理_images/img_150_c92f95e67c4c.svg)的次数比![](什么是Cayley_Hamilton_定理_images/img_151_170db2606993.svg)低。

把![](什么是Cayley_Hamilton_定理_images/img_152_801e752be6db.svg)换成![](什么是Cayley_Hamilton_定理_images/img_153_856392866349.svg)：

![](什么是Cayley_Hamilton_定理_images/img_154_1d79805cade5.svg)

因为

![](什么是Cayley_Hamilton_定理_images/img_155_2b0cae3a2acc.svg)

所以

![](什么是Cayley_Hamilton_定理_images/img_156_4f99cc480e78.svg)

但![](什么是Cayley_Hamilton_定理_images/img_157_07f9e9c5def1.svg)的次数比最小多项式还低，却也能把![](什么是Cayley_Hamilton_定理_images/img_158_5457cb3c3096.svg)消掉。  
这和“最小”矛盾。

所以只能有

![](什么是Cayley_Hamilton_定理_images/img_159_78f5e1304b13.svg)

即

![](什么是Cayley_Hamilton_定理_images/img_160_141b665330b3.svg)

* * *

## 5\. 先看一个“二者相同”的例子

还是前面那个矩阵

![](什么是Cayley_Hamilton_定理_images/img_161_646e94c164e8.svg)

特征多项式是

![](什么是Cayley_Hamilton_定理_images/img_162_77b4f6f94411.svg)

因为它有 3 个不同特征值![](什么是Cayley_Hamilton_定理_images/img_163_164a0f7102cd.svg)，通常最小多项式就会是

![](什么是Cayley_Hamilton_定理_images/img_164_06de90e88a81.svg)

也就是说：

![](什么是Cayley_Hamilton_定理_images/img_165_de142b7249b0.svg)

这里二者完全一样。

为什么？

因为如果你少掉任意一个因子，比如只用

![](什么是Cayley_Hamilton_定理_images/img_166_cf061bb54cd8.svg)

那么这多项式在特征值 3 处不为 0，通常不能消掉整个矩阵。

对于具有互不相同特征值的可对角化矩阵，常常有：

![](什么是Cayley_Hamilton_定理_images/img_167_e590d8684c9d.svg)

而特征多项式是

![](什么是Cayley_Hamilton_定理_images/img_168_8dcd7380d56e.svg)

当每个特征值只出现一次时，两者就相同。

* * *

## 6\. 再看一个“二者不同”的经典例子

取

![](什么是Cayley_Hamilton_定理_images/img_169_a3633d07456e.svg)

这是最简单的例子。

### 特征多项式

![](什么是Cayley_Hamilton_定理_images/img_170_b0fa49e9056a.svg)

### 但最小多项式呢？

因为

![](什么是Cayley_Hamilton_定理_images/img_171_2e6106519e83.svg)

所以

![](什么是Cayley_Hamilton_定理_images/img_172_27d39a88a4dc.svg)

注意：

![](什么是Cayley_Hamilton_定理_images/img_173_7a5e14c5cc6d.svg)

这说明：

-   特征多项式有重复因子
    
-   但最小多项式只保留真正必要的部分
    

所以最小多项式比特征多项式“短”。

* * *

## 7\. 再看一个更有代表性的 [Jordan 块](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491476&idx=1&sn=54d09c6534a825553384f80d15ee8f47&scene=21#wechat_redirect)例子

考虑

![](什么是Cayley_Hamilton_定理_images/img_174_dc405293cfb2.svg)

这是一个上三角矩阵，特征值只有2。

### 特征多项式

![](什么是Cayley_Hamilton_定理_images/img_175_d1afe1796dbb.svg)

### 最小多项式是不是![](什么是Cayley_Hamilton_定理_images/img_176_1729c70630c6.svg)？

不是。

因为

![](什么是Cayley_Hamilton_定理_images/img_177_940c3fd94e3d.svg)

所以x-2还不能消掉它。

再看平方：

![](什么是Cayley_Hamilton_定理_images/img_178_44a21d8dde76.svg)

所以这时最小多项式是

![](什么是Cayley_Hamilton_定理_images/img_179_cf4db06b470d.svg)

于是这个例子里：

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是Cayley_Hamilton_定理_images\img_002_76aac0a69a8e.svg)

虽然只有一个特征值，但因为 Jordan 块大小是 2，所以必须平方。

* * *

## 8\. 真正决定最小多项式的，不只是“有哪些特征值”

这是最关键的一点。

特征多项式告诉你：

-   特征值有哪些
    
-   每个特征值的**代数重数**是多少
    

但最小多项式告诉你更深一层：

-   每个特征值对应的 **Jordan 块最大尺寸** 是多少
    

更准确地说：

若矩阵的 Jordan 标准形中，特征值![](什么是Cayley_Hamilton_定理_images/img_181_7bfaeeba0c4d.svg)的最大 Jordan 块大小是s，  
那么最小多项式中就有因子

![](什么是Cayley_Hamilton_定理_images/img_182_f7f7dbd791e4.svg)

所以：

-   特征多项式看的是“总共出现几次”
    
-   最小多项式看的是“最大链条有多长”
    

* * *

## 9\. 一个总公式视角

设![](什么是Cayley_Hamilton_定理_images/img_183_7f44eacdb53c.svg)的不同特征值是![](什么是Cayley_Hamilton_定理_images/img_184_80e6bac3eb2c.svg)。

那么特征多项式一般写作

![](什么是Cayley_Hamilton_定理_images/img_185_f28b8c3d2adc.svg)

其中![](什么是Cayley_Hamilton_定理_images/img_186_8df6500345b3.svg)是代数重数。

而最小多项式写作

![](什么是Cayley_Hamilton_定理_images/img_187_cb1c7c993168.svg)

其中![](什么是Cayley_Hamilton_定理_images/img_188_b710cc36a311.svg)，并且![](什么是Cayley_Hamilton_定理_images/img_189_f60f39057ead.svg)是该特征值对应最大 Jordan 块大小。

所以一定有

![](什么是Cayley_Hamilton_定理_images/img_190_6c3c706dc19e.svg)

* * *

## 10\. 二者各自回答什么问题？

这是最实用的区分方式。

### 特征多项式回答：

**“矩阵有哪些特征值？”**

因为解

![](什么是Cayley_Hamilton_定理_images/img_191_ce5be533b1f4.svg)

就得到特征值。

* * *

### 最小多项式回答：

**“矩阵的幂次关系最短能压缩到什么程度？”**

比如若

![](什么是Cayley_Hamilton_定理_images/img_192_aa7e32e49ccc.svg)

那就说明

![](什么是Cayley_Hamilton_定理_images/img_193_f1341f62a252.svg)

于是所有更高次幂都能立刻降到![](什么是Cayley_Hamilton_定理_images/img_194_9f84ab4e870a.svg)的线性组合。

所以在“降幂”“求矩阵函数”方面，最小多项式往往比特征多项式更直接、更高效。

* * *

## 11\. 一个非常重要的判别：可对角化

最小多项式还能判断矩阵是否可对角化。

结论是：

> **矩阵 ![](什么是Cayley_Hamilton_定理_images/img_195_c5010aaf8987.svg) 可对角化，当且仅当它的最小多项式没有重根。**

也就是

![](什么是Cayley_Hamilton_定理_images/img_196_3f8346c09270.svg)

每个因子都只出现一次。

例如：

### 可对角化例子

![](什么是Cayley_Hamilton_定理_images/img_197_0c109d01df67.svg)

最小多项式是

![](什么是Cayley_Hamilton_定理_images/img_198_fddd22b5eab5.svg)

没有重根，所以可对角化。

### 不可对角化例子

![](什么是Cayley_Hamilton_定理_images/img_199_c1a656f2b87b.svg)

最小多项式是

![](什么是Cayley_Hamilton_定理_images/img_200_f8f5855a2aa4.svg)

有重根，所以不可对角化。

* * *

## 12\. 从“作用”的角度理解二者差别

你可以把矩阵看成一个线性变换。

-   **特征多项式**
    
    像是在统计：这个变换有哪些“固有拉伸倍率”（特征值）
    
-   **最小多项式**
    
    像是在揭示：这个变换内部最深的“耦合链”有多长
    

若一个矩阵已经完全能分解成互不干扰的特征方向，那么最小多项式往往没有重根。  
若某个方向上还带着“拖尾”“串联”的 Jordan 链，那么最小多项式就会出现更高次幂。

* * *

## 13\. 回到 Cayley–Hamilton：它在这里扮演什么角色？

Cayley–Hamilton 的作用是：

> 先保证“特征多项式一定能消掉矩阵”。

这像是给你一张“保底通行证”：

![](什么是Cayley_Hamilton_定理_images/img_201_5cb49e01068c.svg)

然后最小多项式再进一步告诉你：

> 其实真正最精炼、最本质的那个关系，是![](什么是Cayley_Hamilton_定理_images/img_202_f38f1d7f970c.svg)

所以逻辑顺序是：

1.  先由 Cayley–Hamilton 知道：至少有一个多项式能消掉A  
    
2.  再从所有这类多项式里，挑出次数最小的那个
    
3.  这个最小的，就是最小多项式
    

* * *

## 14\. 一张对照表

对象

记号

作用

特征多项式

![](什么是Cayley_Hamilton_定理_images/img_203_58cda234673d.svg)

给出特征值；由 Cayley–Hamilton 知![](什么是Cayley_Hamilton_定理_images/img_204_59ff35450cb2.svg)

最小多项式

![](什么是Cayley_Hamilton_定理_images/img_205_f5f1b84f2e60.svg)

次数最小的消去多项式；控制降幂、Jordan 结构、可对角化

并且总有：

![](什么是Cayley_Hamilton_定理_images/img_206_5a700012e828.svg)

* * *

## 15\. 最后一段，把核心吃透

你可以把它们记成这样：

-   **特征多项式：  
    “矩阵从频谱上看长什么样”**
-   **最小多项式：  
    “矩阵从代数约束上看，最短 obey 哪条关系”**
-   **Cayley–Hamilton 定理：  
    “特征多项式这条关系，一定成立”**

所以三者的关系是一条链：

![](什么是Cayley_Hamilton_定理_images/img_207_75d0e11a5592.svg)