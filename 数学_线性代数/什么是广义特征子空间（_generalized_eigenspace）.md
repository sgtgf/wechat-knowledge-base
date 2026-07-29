# 什么是广义特征子空间（ generalized eigenspace）


> 原文地址: [https://mp.weixin.qq.com/s/2nJLT\_CA-5NksaZLams\_IA](https://mp.weixin.qq.com/s/2nJLT_CA-5NksaZLams_IA)

我先做一个直观讲解，再配一张知识图，帮助你把 **eigenspace** 和 **generalized eigenspace** 的区别一眼看清。

可以把 **Generalized Eigenspace（广义特征子空间）** 理解成：

> 它不仅收集“真正的特征向量”，  
> 还把那些**虽然不是特征向量，但在反复作用 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_000_d022b7b25c84.svg) 之后最终会变成 0 的向量**，也一起收进来。

先给一句最核心的话：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_001_00e52868b382.svg)

这是普通的 **eigenspace（[特征子空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247521799&idx=1&sn=e4fd4be02d26a4159381117201ede152&scene=21#wechat_redirect)）**；

而

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_002_317dfec20111.svg)

这是 **generalized eigenspace（广义特征子空间）**，其中k取得足够大。

也就是说：

-   **特征子空间**
    
    一步就被  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_003_8e1958a3a8e8.svg) 消掉的向量
    
-   **广义特征子空间**
    
    可能不是一步，但经过若干步后会被  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_004_d5e2dc919489.svg) 消掉的向量
    

所以总有

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_005_48c1fdc7d379.svg)

* * *

### 1\. 为什么要引入 generalized eigenspace？

因为有些矩阵 **不够“好”**，它们的特征向量不够多，无法凑成一组基。

最经典的例子：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_006_737941422a56.svg)

它的特征值只有 λ = 2。

先算：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_007_1d819cdf5778.svg)

若要找普通特征向量，就是解

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_008_e89ce16d39db.svg)

设

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_009_31e14eb14ac8.svg)

则

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是广义特征子空间（_generalized_eigenspace）_images\img_000_f30c7baa47a6.svg)

所以 y=0，而 x 任意。

因此普通特征子空间是

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_011_6ad7c1f13307.svg)

它只有 1 维。

但这个矩阵明明是 2×2，只找到 1 个方向，不够把整个平面撑满。  
这时就要靠 **generalized eigenspace** 来补齐。

* * *

### 2\. generalized eigenvector 是什么？

如果某个非零向量 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_012_5bc7ddfa5425.svg) 满足

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_013_23d14c0cd173.svg)

但

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_014_dc0aaf58c9b8.svg)

那么 v 就叫做一个 **generalized eigenvector（广义特征向量）**。

它不是“立刻静止”的向量，而是“经过几步后归零”的向量。

这很像一条链：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_015_69470cb7db67.svg)

最后会掉进 0。

* * *

### 3\. 上面那个 [Jordan block](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491476&idx=1&sn=54d09c6534a825553384f80d15ee8f47&scene=21#wechat_redirect) 例子里发生了什么？

还是看

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_016_b83729c066aa.svg)

令

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_017_9f9d0ea6fe1e.svg)

再平方：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_018_a57bd763294f.svg)

所以

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_019_6b5efd5d4812.svg)

这意味着：**对任意向量 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_020_6bc4d6ff9708.svg)，![](什么是广义特征子空间（_generalized_eigenspace）_images/img_021_ebaf0687330c.svg)**

因此

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_022_85f4b974b462.svg)

也就是说：

-   普通特征子空间 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_023_e2fc4ae91563.svg) 只有一条线
    
-   广义特征子空间 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_024_68c00f02e4b0.svg) 却是整个平面
    

这就是 generalized eigenspace 最重要的作用：

> 当普通特征向量不够时，它把“缺失的方向”也收进来，使我们仍然能理解矩阵的内部结构。

* * *

### 4\. 几何直觉怎么理解？

#### 普通 eigenspace

其中的向量 v 满足

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_025_6290a2b7d114.svg)

也就是说，矩阵作用后，方向不变，只是拉伸或压缩了 λ 倍。

所以 eigenspace 里的向量，是真正的“稳定方向”。

* * *

#### 广义 eigenspace

其中有些向量并不满足 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_026_2f3c14536b89.svg)，也就是它们**不是稳定方向**。

但是它们在  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_027_79f0609e2101.svg) 的反复作用下，会一步步“滑向”真正的特征方向，最后归零。

所以 generalized eigenspace 的几何含义是：

> 它不只包含“稳稳站在特征方向上的向量”，  
> 还包含“最终会落入这个特征方向体系中的向量”。

* * *

### 5\. 它和 Jordan form 有什么关系？

这是 generalized eigenspace 最重要的背景。

当矩阵不能对角化时，不能只靠普通特征向量描述它。  
这时会出现 **Jordan block（若尔当块）**。

对于某个特征值 λ，其所有 Jordan block 合在一起，对应的整体空间就是：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_028_829ed2e29575.svg)

所以：

-   **eigenspace**
    
     对应 Jordan block 顶端真正的 eigenvectors
    
-   **generalized eigenspace**
    
     对应这个特征值的整个 Jordan block 结构
    

更进一步：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_029_4804c28e9381.svg)

如果把所有不同特征值的 generalized eigenspace 加在一起，就能分解整个向量空间。

这就是 Jordan 理论背后的核心框架。

* * *

### 6\. 一个链式理解法

设  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_030_0231aa949b5e.svg) 是真正特征向量：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_031_c809b4ce7ea1.svg)

再找一个向量 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_032_773810389e00.svg)，满足

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_033_a8e4bac7d335.svg)

那么  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_034_c5f38f49c5ad.svg) 不是普通特征向量，但它满足

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_035_232964a02e6b.svg)

所以  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_036_c376510fe8db.svg) 是 generalized eigenvector。

再往上还可以有

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_037_04679849d78b.svg)

于是

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_038_d7cea8461836.svg)

这样形成一条 **Jordan chain（若尔当链）**：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_039_4061c4efb767.svg)

这些向量全都属于 generalized eigenspace。

* * *

### 7\. 一句话总结普通 eigenspace 与 generalized eigenspace

可以这样记：

-   **Eigenspace**
    
    一步归零
    
-   **Generalized eigenspace**
    
    若干步归零
    

或者更形象一点：

-   **eigenspace**
    
     是“核心主干”
    
-   **generalized eigenspace**
    
     是“主干 + 所有依附在它上的 Jordan 链”
    

* * *

### 8\. 这东西有什么实际意义？

它的意义非常大：

#### 第一层：处理不可对角化矩阵

有些矩阵找不到足够多的 eigenvectors，没法直接对角化。  
但 generalized eigenspace 仍然能帮我们把矩阵拆解成 Jordan 结构。

#### 第二层：理解线性变换的“局部结构”

每个特征值λ不只对应一个简单方向，而可能对应一个“块状系统”，这些系统正是 generalized eigenspace 承载的。

#### 第三层：解微分方程、矩阵指数

在线性微分方程、控制理论、矩阵指数 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_040_5bbbb6d1fb84.svg) 里，若矩阵不可对角化，就必须用 generalized eigenvectors。

* * *

### 9\. 一个最直观的口语版定义

**Generalized eigenspace** 就是：

> 对于特征值 λ，所有“最终会被 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_041_5e240cf658a4.svg) 反复作用消灭掉”的向量，所组成的空间。

它比普通 eigenspace 更大，更完整，能够反映矩阵在该特征值附近的全部内部结构。

* * *

把前面所讲知识归纳为图1：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_042_42c927b3e62c.png)

图1

下一张是 **“Jordan chain / generalized eigenvector flow” 的更直观示意图**，把  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_043_4eb1aa8599cf.svg) 画出来，那样会更形象。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_044_4266a2b81d0c.png)

## 图2

* * *

## 图2更“动态”：把 **generalized eigenvector** 沿着 **Jordan chain** 一步步流向真正 eigenvector 的关系画出来。

这张更直观地展示了：

-    **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_045_9ca55bb673ab.svg) 是真正的 eigenvector**
-    **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_046_22aabe347e05.svg) 虽然不是普通 eigenvector，但属于 **generalized eigenvectors****
-   它们沿着 **Jordan chain** 在 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_047_25f928d8656b.svg) 的作用下逐步流向 0
    

  

接下来是一张 **“ordinary eigenspace vs generalized eigenspace in one plane”** 的对比图：左边一条线表示 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_048_a35466973465.svg)，右边整个平面/区域表示 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_049_7cb618531530.svg)，会更有“空间感”。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_050_9e3e31e4039a.png)

## 图3

* * *

## 图3是“空间感”更强的对比图：把 **ordinary eigenspace** 画成一条线，把 **generalized eigenspace** 画成整个平面区域，并配一个 Jordan block 例子。它把两者的“空间大小差别”直接画出来了：

-   左边：**ordinary eigenspace** 只有一条线
    
-   右边：**generalized eigenspace** 是更大的区域
    
-   中间明确标出：![](什么是广义特征子空间（_generalized_eigenspace）_images/img_051_07f0e9309ad6.svg)
    

  

下一张是 **“从矩阵 A 到 Jordan form，再到 generalized eigenspace 分解”** 的总览图，这样你会把这几个概念彻底串起来。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_052_72463faefe75.png)

## 图4

* * *

## 图4是一张总览图，把 **matrix A**、**Jordan form**、**Jordan blocks**、以及 **generalized eigenspace decomposition** 串成一条逻辑链：

-   从 **matrix A** 出发
    
-   到 **Jordan form J**
    
-   再到 **Jordan blocks**
    
-   最后落到 **generalized eigenspace decomposition**
    

  

图4特别适合你把下面这句话彻底记住：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_053_a1fbfa5215be.svg)

意思是：整个向量空间可以分解成各个特征值对应的 **generalized eigenspaces** 的直和。

下一张是更“教材风格”的一页图：  
**左边是定义，右边是 Jordan chain，中间是一个具体 2x2 或 3x3 整数矩阵例子**。这样你就能同时看“定义 + 几何 + 例子”。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_054_09a329e8702c.png)

## 图5

* * *

## 这张更像教材讲义的一页图：左边放定义，中间放具体矩阵例子，右边放 Jordan chain，这样“定义—计算—结构”能同时看到。

图5把三件事并排放在一起：

-   左边：**定义**
    
-   中间：**具体 Jordan block 例子**
    
-   右边：**Jordan chain 结构**
    

这样你会更容易把这句话真正吃透：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_055_b5483a632074.svg)

它表示的不是“立刻”被消掉的向量，而是“经过若干次作用后最终被消掉”的向量。

下一张是：**3×3 整数矩阵的 generalized eigenspace 完整例题图**  
比如选一个含 2×2 Jordan block 的 3×3 矩阵，把：

-   特征值
    
-   ordinary eigenspace
    
-   generalized eigenspace
    
-   Jordan chain
    

一次性全画出来。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_056_6b05e1cfd692.png)

## 图6

* * *

## 图6是“完整例题图”：选一个 **3×3 整数矩阵**，同时展示特征值、ordinary eigenspace、generalized eigenspace 和 Jordan chain。

图里你会同时看到：

-   具体矩阵![](什么是广义特征子空间（_generalized_eigenspace）_images/img_057_374a05e98c7b.svg)
    
-   普通特征子空间 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_058_6706b5e0c9ef.svg)
    
-   广义特征子空间 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_059_1ff24ca858ab.svg)
    
-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_060_172a15006d44.svg) 对应的一条 Jordan chain
-   整体分解![](什么是广义特征子空间（_generalized_eigenspace）_images/img_061_543db3f368bf.svg)
    

其中最关键的是：

-   对 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_062_172a15006d44.svg)，普通 eigenspace 只有 1 维
    
-   但 generalized eigenspace 是 2 维
    
-   这正好补上了 Jordan block 缺失的那个方向
    

  

下一张是 **“3D 几何版”**：把 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_063_6b2a0c2bcb1d.svg) 画成 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_064_1545a9d0c579.svg) 里的一个平面，把 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_065_141db7c4a37f.svg) 画成这个平面里的一条线，再把 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_066_d35193b50378.svg) 画成另一条轴线。这样会更有空间感。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_067_947d1fb28b94.png)

## 图7

* * *

图7画成立体版：在  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_068_1867410d5e15.svg) 里把  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_069_dcc528ab35ca.svg) 画成一个平面，把  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_070_c320ced86614.svg) 画成这个平面中的一条线，再把  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_071_c6666198e6d3.svg) 画成另一条轴向。

图7里：

-    **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_072_b3bdc1d592eb.svg) 被画成 xy\-plane**
-    **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_073_3f2cdd6d6a7f.svg) 是这个平面里的一条线**
-    **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_074_be4bf0dafcd0.svg) 是 z\-axis**
-   还额外画了一个向量 v，表示它属于 **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_075_9ca2842a0167.svg)，但不属于** **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_076_66351f6b9e9e.svg)**
    

这正是 generalized eigenspace 最核心的空间感：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_077_04f79e04753f.svg)

下一张是 **“3D 动态流向版”**：  
把一个平面内向量 v 在  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_078_9da6310b82f7.svg) 作用下如何流到 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_079_548802372752.svg)，再被消到 0，画成箭头流程图。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_080_32b1a7a2e486.png)

## 图8

* * *

## 图8把“流向”画出来：同一个 3D 场景里，展示平面内向量v 经过 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_081_be8b8581b28a.svg) 后落到 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_082_fe6936ef5e74.svg)，再经过一次作用变成 0。

图8表达的是：

-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_083_1c1c0a5a2c0b.svg) 是整个 xy-plane
-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_084_8f5642f588a1.svg) 是其中的 x\-axis
-   取一个  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_085_64e6aa5215ed.svg) 但 ![](D:\电脑文件\公众号知识库\数学_线性代数\什么是广义特征子空间（_generalized_eigenspace）_images\img_001_47a541d79eba.svg)
    
-   经过一次 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_087_42dba3b693f7.svg)：![](什么是广义特征子空间（_generalized_eigenspace）_images/img_088_2318c0ad2d35.svg)，它被推到  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_089_60a0d847a249.svg) 上
    
-   再经过一次：![](什么是广义特征子空间（_generalized_eigenspace）_images/img_090_4e2d557a179c.svg)
    

所以这张图把 generalized eigenvector 的核心直觉画出来了：

> 它一开始不一定就在真正的特征方向上，  
> 但反复作用 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_091_943c92a90b21.svg) 后，会先落到 eigenspace，再归零。

  

下一张是 **“3 帧分镜图”**：  
把 v、![](什么是广义特征子空间（_generalized_eigenspace）_images/img_092_a6d3fe1470eb.svg)、![](什么是广义特征子空间（_generalized_eigenspace）_images/img_093_1970bf18d27f.svg) 分成左中右三幅，更像教材里的步骤演示图。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_094_db3cf81659da.png)

## 图9

* * *

## 它更像教材分步演示的版本：左、中、右三帧分别显示 v、![](什么是广义特征子空间（_generalized_eigenspace）_images/img_095_59d3978d89b2.svg)、![](什么是广义特征子空间（_generalized_eigenspace）_images/img_096_7f4585be758b.svg)，并保持标题和注释。

图9把 generalized eigenvector 的过程拆成了三步：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_097_e636b5d4f988.svg)

对应的直觉就是：

-   第1帧：v 在 generalized eigenspace  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_098_fe0258ae1624.svg) 里，但不在 ordinary eigenspace  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_099_b3cfccfb186f.svg) 上
    
-   第 2 帧：一次作用后，被推到 eigen-line ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_100_7495ff58f176.svg)
    
-   第 3 帧：再作用一次，变成 0
    

这几乎就是 **generalized eigenspace** 最核心的一幕。

下一张继续深化，是 **“Jordan chain 的 4 帧版”**：  
从  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_101_8aba07a2dcc5.svg) 展示更长链条，这样你会把“高阶 generalized eigenvector”也彻底看懂。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_102_d48f804b4919.png)

## 图10

* * *

## 我继续往上扩成更完整的链：这次用**4帧Jordanchain**，展示 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_103_5ed885183bb9.svg)，对应“更深一层”的 generalized eigenvector。

图10把更高阶的 generalized eigenvector 讲清楚了：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_104_4d33d00b26e4.svg)

满足

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_105_4279e1106ef8.svg)

其中：

-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_106_65e0aa445268.svg) 是 **ordinary eigenvector**
-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_107_53c75114a90e.svg) 不是 ordinary eigenvectors
-   但  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_108_5050172c7168.svg) 都属于 **generalized eigenspace ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_109_0f0d8679748f.svg)** 
    

这正说明：

> generalized eigenspace 不只包含“最后那根真正的 eigenvector”，  
> 还包含整条 Jordan chain 上的所有向量。

  

接下来是把 **Jordan block matrix** 和这条链一一对应画出来：  
左边放一个 3x3 Jordan block，右边放 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_110_ce0234946f1a.svg) 的链，对应关系会非常直观。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_111_513da86f2d6a.png)

## 图11

* * *

## 图11把“矩阵形状”和“链条结构”直接并排对应起来：左边是 3x3 Jordan block，右边是 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_112_446d988e5f7d.svg)，中间用说明把两者一一连上。

图11强调的是：

-   左边一个 3x3 Jordan block
    
-   右边一条长度为 3 的 Jordan chain
    
-   两者是一一对应的
    

核心关系就是：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_113_c6f76dd28f95.svg)

其中

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_114_9b75cbee32bc.svg)

所以可以把它记成：

> **一个大小为 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_115_0ae08a54b9a4.svg) 的 Jordan block，对应一条长度为 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_116_2f308e537243.svg) 的 Jordan chain。**

  

下一张图是：**“多个Jordan blocks如何组成同一个generalized eigenspace”**  
也就是例如  ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_117_bf1f6d4975ed.svg) 对应两条链，但它们都属于同一个 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_118_6a61948aec2f.svg)。这样你会把“一个 block”和“整个 generalized eigenspace”的关系彻底分清。

* * *

## ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_119_9df50abfa772.png)

## 图12

* * *

## 图12把“一个块”和“整个 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_120_5cee51fb89c7.svg)”的关系画出来：这次用 **两个 Jordan blocks 对应两条链**，并把它们一起装进同一个 generalized eigenspace。

继续画好了，这张展示的是：

-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_121_a29ab65974d8.svg) 产生一条长度为 2 的 Jordan chain
-    ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_122_16980e73ca02.svg) 产生一条长度为 1 的 Jordan chain
-   这两条链虽然不同，但都属于同一个 **generalized eigenspace ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_123_a5a59508c6d3.svg)** 
    

这张图对应的核心结论是：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_124_7d7368d20719.svg)

也就是说：

> 一个 generalized eigenspace 不是只对应一条链，  
> 而是对应 **该特征值 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_125_8120be1161ca.svg)**  的所有 Jordan blocks、所有 Jordan chains 合起来的总空间。

  

下一张图是：“多个特征值  **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_126_8b0fc9c04e3c.svg) 的 generalized eigenspaces 如何[直和](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247516731&idx=1&sn=8eba6cc7b0cb4849e44d721165b70a07&scene=21#wechat_redirect)分解整个空间”**。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_127_e0e0e1f0d860.png)

## 图13

* * *

## 接着把最后这层关系补上：以**不同特征值的generalized eigenspaces** 如何分别对应不同“块群”，并且直和分解整个空间。

这张图主题是：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_128_d52114d98515.svg)

图13强调了三层关系：

-   **同一个特征值**
    
     的所有 Jordan blocks，合起来形成一个 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_129_01f4c8f33120.svg)
    
-   **不同特征值**
    
     分别形成不同的 generalized eigenspaces
    
-   这些 generalized eigenspaces 再 **直和** 组成整个向量空间 ![](什么是广义特征子空间（_generalized_eigenspace）_images/img_130_8c5a340fe813.svg)
    

也就是说：

> Jordan block 是最小结构单元，  
> Jordan chains 是它对应的向量链，  
> generalized eigenspace 是同一特征值下所有链的总和，  
> 而整个空间则是所有 generalized eigenspaces 的直和。

  

下一张是收尾图，是做成 **“总复习海报版”**：  
把你前面看到的  
**definition → eigenspace vs generalized eigenspace → Jordan chain → Jordan block → direct sum decomposition**  
全部合成一张总览图。

* * *

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_131_27e8a5484a1c.png)

## 图14

* * *

## 我把前面所有关键点压缩成一张总览海报：定义、包含关系、Jordan chain、Jordan block、以及直和分解都会放进去。

这张海报把整条知识链压成了一页：

-   **Definition**
-    **![](什么是广义特征子空间（_generalized_eigenspace）_images/img_132_419381c5a09c.svg) 的几何关系**
-   **2×2 Jordan block**
    
     例子
    
-   **Jordan chain**
-   **Jordan block ↔ Jordan chain**
-   **Whole-space decomposition**

最核心的一句也放进去了：

![](什么是广义特征子空间（_generalized_eigenspace）_images/img_133_e8e91ddbe3aa.svg)