# 向量外积 (outer product)的几何意义


> 原文地址: [https://mp.weixin.qq.com/s/-K4p8okup5AeSKBZBTEiOA](https://mp.weixin.qq.com/s/-K4p8okup5AeSKBZBTEiOA)

     大家好！在[《矩阵的“内积”和“乘法”》](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487945&idx=1&sn=85c57557c98582b13dfcc90c85b1b62c&scene=21#wechat_redirect)一文中，介绍了向量的内积，今天来了解与之相反的另一个概念，向量外积。咱们用最通俗的方式，配上真实画图，来聊聊**向量外积**（也叫张量积、dyadic product，记作 **u vᵀ** 或 u ⊗ v）。

**注意**：中文里“外积”有时被人误以为是[叉积](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247494396&idx=1&sn=1bfe79390052c4e8f3c443ca7434a928&scene=21#wechat_redirect)（cross product，那结果是一个垂直的新向量），但题目括号里明确写了 **(outer product)**，所以我们说的是**两个向量相乘得到一个矩阵**的那个外积！它在机器学习、图形学、物理里到处都是。

### 1\. 先看它长什么样（简单例子）

拿两个二维向量：

-   **u**
    
     = \[3, 1\]（红色箭头，指向右上方）
    
-   **v**
    
     = \[1, 2\]（蓝色箭头，指向更陡的右上方）
    

外积 **u vᵀ** 就是一个 2×2 矩阵： 每个元素 = u 的分量 × v 的分量

  

```
[ 3×1  3×2 ]   =   [3  6][ 1×1  1×2 ]      [1  2]
```

  

```
数学上：
```

###   

### 2\. 最核心的几何意义（一句话记住）

对任意输入向量 **x**，外积变换的结果是：**M x = (v · x) × u**

**超级通俗的翻译**：

-   先让 **v** 当“评委”，给 x 打一个“相似分”——算点积 **v · x**（x 和 v 越对齐，分数越大；垂直就是 0；反向就是负数）。
    
-   然后用这个分数去**拉伸 u**，得到最终输出箭头。
    

**几何画面**： 不管你从哪个方向扔进来一个箭头 x，**输出永远躺在 u 那条直线上**！

-   和 v 垂直的箭头 → 直接被压成一个点（0）
    
-   平行于 v 的箭头 → 变成 u 的很长/很短版本 整个平面被**压扁成 u 所在的那根线**（从 2D 变成 1D）！
    

**生活比喻**： v 是你的“耳朵”，只听输入信号的“强度”； u 是你的“嘴巴”，不管你从哪个角度说话，它只按耳朵听到的音量，沿着嘴巴的方向喊出来。 世界被简化成一条线！

![](向量外积_(outer_product)的几何意义_images/img_000_8e31fee833f4.png)

向量外积（outer product）最核心的几何意义：**它把两个向量“拼”成一个秩 1 的线性变换（或一个秩 1 的矩阵）**——所有输出都落在同一条直线（由左边那个向量张成）上。

* * *

### 1) 外积是什么（先用一句话抓住本质）

给定列向量 ![](向量外积_(outer_product)的几何意义_images/img_001_d418a2d4182c.svg)、列向量 ![](向量外积_(outer_product)的几何意义_images/img_002_2459a9d304c8.svg)，外积定义为

![](向量外积_(outer_product)的几何意义_images/img_003_2d44ca1464d3.svg)

也就是“所有分量两两相乘”组成矩阵。

图里的例子：

![](向量外积_(outer_product)的几何意义_images/img_004_c8df992e0bee.svg)

* * *

### 2) 作为“线性变换”的几何意义：先投影成一个数，再拉到一条线

把外积矩阵 ![](向量外积_(outer_product)的几何意义_images/img_005_676e97f2a790.svg) 作用到任意向量 ![](向量外积_(outer_product)的几何意义_images/img_006_fdac13cb868a.svg)：

![](向量外积_(outer_product)的几何意义_images/img_007_fa9b5c0e7652.svg)

这句非常“几何”：

1.  **![](向量外积_(outer_product)的几何意义_images/img_008_f7cf1875b7ce.svg)**
    
     是一个标量：把 ![](向量外积_(outer_product)的几何意义_images/img_009_46a38e2b3e15.svg) 在 ![](向量外积_(outer_product)的几何意义_images/img_010_8cc330c81caf.svg) 方向上做“点积测量”（可以理解为“沿 ![](向量外积_(outer_product)的几何意义_images/img_011_754614465714.svg) 的对齐程度/带符号长度”）。
    
2.  **再乘上 ![](向量外积_(outer_product)的几何意义_images/img_012_a0a261c79816.svg)** 
    
    把这个标量当作系数，在 ![](向量外积_(outer_product)的几何意义_images/img_013_aa07440ae180.svg) 方向上拉伸/反向。
    

所以外积对应的变换可以一句话描述：

> **输入 ![](向量外积_(outer_product)的几何意义_images/img_014_1690f570bf10.svg) 先被 ![](向量外积_(outer_product)的几何意义_images/img_015_93943f8a6783.svg)“压缩”为一个数（点积），然后这个数把 ![](向量外积_(outer_product)的几何意义_images/img_016_e82edf012b72.svg) 缩放成输出。**

####   

#### 立刻得到的几何结论

-   **所有输出都在span(v) 上：也就是都落在由 ![](向量外积_(outer_product)的几何意义_images/img_017_91da4f4e78cd.svg) 张成的一条直线（或 1D 子空间）里。  
    ⇒ 这就是“秩 1”的几何含义：**把整个空间塌缩到一条线**（除非 ![](向量外积_(outer_product)的几何意义_images/img_018_78ebf4a3d4ad.svg) 或 ![](向量外积_(outer_product)的几何意义_images/img_019_a175c990aba2.svg)，那就全变成 0）。**

* * *

### 3) 从“列/行”的角度看：每一列都是 ![](向量外积_(outer_product)的几何意义_images/img_020_57c6e5f305a5.svg) 的缩放版

矩阵 ![](向量外积_(outer_product)的几何意义_images/img_021_b6b8c4abd4a0.svg) 的第 ![](向量外积_(outer_product)的几何意义_images/img_022_d80eaf66ccc0.svg) 列为：

![](向量外积_(outer_product)的几何意义_images/img_023_10b1ade6951e.svg)

也就是：**每一列都是同一个方向 ![](向量外积_(outer_product)的几何意义_images/img_024_7812654171b6.svg) 的不同倍率**。

例子里 ![](向量外积_(outer_product)的几何意义_images/img_025_35222d846d74.svg)：

-   第 1 列 ![](向量外积_(outer_product)的几何意义_images/img_026_8e0955fab334.svg)
    
-   第 2 列 ![](向量外积_(outer_product)的几何意义_images/img_027_a761cc9fcca9.svg)
    

所以你一眼就能看出：两列共线 ⇒ 这是一个把 2D 输入空间“压扁”到 3D 里一条线上的变换。

同理从行看：

![](向量外积_(outer_product)的几何意义_images/img_028_b157c9065337.svg)

每一行都是 ![](向量外积_(outer_product)的几何意义_images/img_029_b6157e7c3836.svg) 的缩放版。

* * *

### 4) “面积/体积”的直觉：它不是叉积那种“给你一个垂直方向”

很多人会把外积（outer product）和叉积（cross product）混淆：

-   **[叉积](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect) ![](向量外积_(outer_product)的几何意义_images/img_030_019598f1fd08.svg)** 
    
    （只在 3D）：输出是一个向量，方向垂直于 ![](向量外积_(outer_product)的几何意义_images/img_031_98ab3df05329.svg)，大小是平行四边形面积。
    
-   **外积 ![](向量外积_(outer_product)的几何意义_images/img_032_14ba150c66d9.svg)** 
    
    输出是一个矩阵（线性算子），它的几何意义是“**做一个方向测量（点积），再沿另一个方向输出**”。
    

  

它更像是“**制造一个方向性的‘投影-再伸展’机制**”，而不是“制造垂直方向”。

**叉积是否就是法线？**

不一定，但在 **3D** 里它和“法线”关系非常紧：

-   **叉积** 
    
     的结果是一个向量，**垂直于   
     和** （只要   
     不共线），所以它确实给出了一个**法线方向**。
    
-   但它是“法线向量”（normal vector）的一种，不是唯一的“法线”，而且它的**长度**和**方向符号**还有额外信息。
    

  

* * *

### 5) 一个很有用的“强几何事实”（和 SVD 直接连上）

外积矩阵 ![](向量外积_(outer_product)的几何意义_images/img_033_fa86efee9ca0.svg) 的非零奇异值只有一个，而且等于：

![](向量外积_(outer_product)的几何意义_images/img_034_ea0f207eabce.svg)

对应的左右奇异向量方向分别是 ![](向量外积_(outer_product)的几何意义_images/img_035_174271816627.svg)、![](向量外积_(outer_product)的几何意义_images/img_036_502c67c6e105.svg)。

几何翻译就是：

> 这个变换只在一个方向上起作用：沿 ![](向量外积_(outer_product)的几何意义_images/img_037_0dd79e7b09ce.svg) 的那条输入方向被测量出来，然后沿 ![](向量外积_(outer_product)的几何意义_images/img_038_90cccde27b90.svg) 输出，并且最大拉伸倍率就是 ![](向量外积_(outer_product)的几何意义_images/img_039_f0cc86d6bfce.svg)。

* * *

我们就用一个**2D→2D** 的最直观例子画一张图：把平面里的一堆点（比如一个正方形网格）经过 ![](向量外积_(outer_product)的几何意义_images/img_040_7a558d4d2dda.svg) 变换后，全部塌到 ![](向量外积_(outer_product)的几何意义_images/img_041_99ac738b3be8.svg) 这条线上，你会“一眼看懂”外积的几何作用。

### 1) 选一个最简单但不平凡的外积

取

![](向量外积_(outer_product)的几何意义_images/img_042_97a166a2433d.svg)

外积矩阵：

![](向量外积_(outer_product)的几何意义_images/img_043_fcf66de83a30.svg)

对任意点 ![](向量外积_(outer_product)的几何意义_images/img_044_63635f06d974.svg)：

![](向量外积_(outer_product)的几何意义_images/img_045_db584ec3aeaf.svg)

#### 立刻看见几何效果

![](向量外积_(outer_product)的几何意义_images/img_046_f94e278f0605.svg)

也就是说：**无论输入点在平面哪里，输出永远在 ![](向量外积_(outer_product)的几何意义_images/img_047_0d08a741ef04.svg) 这条直线上**，只是沿着这条线前后移动，移动距离由标量 ![](向量外积_(outer_product)的几何意义_images/img_048_3316229972f7.svg) 决定。

* * *

### 2) 看看它怎么作用在“基向量”上（超级直观）

标准基：

![](D:\电脑文件\公众号知识库\数学_线性代数\向量外积_(outer_product)的几何意义_images\img_000_f19b3e63b3fb.svg)

计算：

     ![](向量外积_(outer_product)的几何意义_images/img_050_fbfa45cd000c.svg)       ![](向量外积_(outer_product)的几何意义_images/img_051_5131f51799ed.svg) 

所以：

-   **x 方向的一步**
    
    被送到 ![](向量外积_(outer_product)的几何意义_images/img_052_624e928512d5.svg) 上的 **1 倍**
    
-   **y 方向的一步**
    
    被送到 ![](向量外积_(outer_product)的几何意义_images/img_053_9846a06a15a8.svg) 上的 **3 倍**
    

这就是“先用 ![](向量外积_(outer_product)的几何意义_images/img_054_fba6945bcc1d.svg) 测量，再沿 ![](向量外积_(outer_product)的几何意义_images/img_055_da32f028a73a.svg) 输出”：  
![](向量外积_(outer_product)的几何意义_images/img_056_27d58b1867ff.svg) 意味着你对输入的“打分”是 ![](向量外积_(outer_product)的几何意义_images/img_057_bae6d536eced.svg)，y 的权重更大。

* * *

### 3) 画图：把网格点全压到 ![](向量外积_(outer_product)的几何意义_images/img_058_020aff2256ec.svg) 这条线上

下面这段代码会画出：

-   浅蓝：原始网格点（平面上一片）
    
-   橘色：变换后的点（全部塌到一条线）
    
-   深蓝：这条线（span(v)）
    

  

```
import numpy as np
```

![](向量外积_(outer_product)的几何意义_images/img_059_732ed67a8d18.png)

运行后会非常“震撼”地看到：**整张平面上的点云，输出全部趴在同一条直线上**。

* * *

### 4) 再给一个“等值线”的直觉（更像物理测量）

因为输出只跟 ![](向量外积_(outer_product)的几何意义_images/img_060_8a2e9003b157.svg) 有关：

-   所有满足 ![](向量外积_(outer_product)的几何意义_images/img_061_acc0b14b9b47.svg) 的点（这是平面里的一族平行直线），**都会被送到同一个点**![](向量外积_(outer_product)的几何意义_images/img_062_173b09e178b2.svg)。
    
-   也就是说：外积把平面按“平行于 ![](向量外积_(outer_product)的几何意义_images/img_063_3fd37e8cb7d2.svg) 的等值线”一条条压扁，然后把每条线对应到 ![](向量外积_(outer_product)的几何意义_images/img_064_d47bc754cfcf.svg) 线上某个位置。
    

  

我在同一张图里再叠加画出几条 ![](向量外积_(outer_product)的几何意义_images/img_065_ab528d1a7141.svg) 的等值线，并标注它们分别压到 ![](向量外积_(outer_product)的几何意义_images/img_066_895d566a5bb5.svg) 线上哪里——这样你就能把“测量-输出”这件事一眼看穿。我们把“**一条等值线被压成 ![](向量外积_(outer_product)的几何意义_images/img_067_3bbdf76a2499.svg) 线上一个点**”这件事画得更“具象”。

* * *

### 1) 关键一句话（你马上就能对上图像）

对外积变换 ![](向量外积_(outer_product)的几何意义_images/img_068_6af132423c7c.svg)，有

![](向量外积_(outer_product)的几何意义_images/img_069_7696ba43003c.svg)

所以：

-   **同一条等值线**![](向量外积_(outer_product)的几何意义_images/img_070_00289599ed92.svg)
    
    （在 2D 里是一条直线）上的所有点 ![](向量外积_(outer_product)的几何意义_images/img_071_be19452b92d5.svg)，都有同一个输出：
    

![](向量外积_(outer_product)的几何意义_images/img_072_38c33c58cc39.svg)

-   也就是：**整条线**![](向量外积_(outer_product)的几何意义_images/img_073_a3df74f4273e.svg)**被“捏扁”成 ![](向量外积_(outer_product)的几何意义_images/img_074_83172e48d7f3.svg) 方向上的一个点**![](向量外积_(outer_product)的几何意义_images/img_075_722d36745fc9.svg)。
    

* * *

### 2) 继续用刚才同一组向量

![](向量外积_(outer_product)的几何意义_images/img_076_d3274f1b02cb.svg)

于是

![](向量外积_(outer_product)的几何意义_images/img_077_c67edff1bec9.svg)

等值线就是：

![](向量外积_(outer_product)的几何意义_images/img_078_3dc320bf1843.svg)

这是一些**互相平行**的直线。

* * *

### 3) 画图：左边画等值线（输入平面），右边画映射到 ![](向量外积_(outer_product)的几何意义_images/img_079_e13bb591edab.svg) 线上的点

下面代码会生成两张子图：

-   **左图：原始网格点 + 几条等值线 ![](向量外积_(outer_product)的几何意义_images/img_080_8bd04a691a2c.svg)** 
-   **右图：所有点变换后（塌到 ![](向量外积_(outer_product)的几何意义_images/img_081_2df0adbc102e.svg) 线上）+ 并用同样的 ![](向量外积_(outer_product)的几何意义_images/img_082_edc271515467.svg) 标出它们对应的点 ![](向量外积_(outer_product)的几何意义_images/img_083_45847da89efb.svg)** 

```

```

```
import numpy as np
```

![](向量外积_(outer_product)的几何意义_images/img_084_dc30991d46a4.png)

```

```

* * *

### 4) 跑完图后，应该“看到”这两件事

#### A. 左图（输入平面）

-   直线 ![](向量外积_(outer_product)的几何意义_images/img_085_f628c16f2c2e.svg) 是一排平行线。
    
-   **每一条线**
    
    代表“被 ![](向量外积_(outer_product)的几何意义_images/img_086_4c60b0da6f07.svg) 点积测量得到同一个值 ![](向量外积_(outer_product)的几何意义_images/img_087_82bdddd7a891.svg)”的所有点集合。
    

#### B. 右图（输出平面）

-   所有点都落在同一条直线 ![](向量外积_(outer_product)的几何意义_images/img_088_fd50d0fbb210.svg) 上。
    
-   而且左图的每条等值线 ![](向量外积_(outer_product)的几何意义_images/img_089_85cc6dd3301a.svg)，在右图**变成一个点**![](向量外积_(outer_product)的几何意义_images/img_090_b0cdfa261121.svg)。
    

* * *

### 5) 进一步一句“最几何”的总结

外积 ![](向量外积_(outer_product)的几何意义_images/img_091_c177df33002c.svg) 做的事情是：

> **用 ![](向量外积_(outer_product)的几何意义_images/img_092_ee7beed6dad7.svg) 给平面“分层”（等值线），然后把每一层压扁成一个点，并按这个层号 ![](向量外积_(outer_product)的几何意义_images/img_093_f9e5cd04c668.svg) 放到 ![](向量外积_(outer_product)的几何意义_images/img_094_196457846c6d.svg) 方向上。**

* * *

再更直观一点，我把左图的某一条等值线上的点用同一种颜色突出显示，并在右图把它们对应的“塌缩点”也用同色标出来（这样你甚至不需要读公式）。

我们把它做成“**同色追踪**”：左边挑几条等值线，每条线用一种颜色高亮；右边把这些线上的所有点映射后，你会看到——**同色的一整条线，全部塌成 ![](向量外积_(outer_product)的几何意义_images/img_095_e272508bc6db.svg) 线上同一个同色点**。

> 仍用同一例子：![](向量外积_(outer_product)的几何意义_images/img_096_89a5c149a020.svg)，所以等值线是 ![](向量外积_(outer_product)的几何意义_images/img_097_f37902598943.svg)。

* * *

### 1) 同色追踪版（可直接运行）

```
import numpy as np
```

![](向量外积_(outer_product)的几何意义_images/img_098_3eafc693742e.png)

```

```

* * *

### 2) 跑出来后，重点看这两幕

#### 左图

同色的一簇点几乎排成一条直线——它们满足 ![](向量外积_(outer_product)的几何意义_images/img_099_5be2c2921733.svg)（这里就是 ![](向量外积_(outer_product)的几何意义_images/img_100_959e5bac1800.svg)）。

#### 右图

同色的一簇点会**挤成一个小团**，而且落在 ![](向量外积_(outer_product)的几何意义_images/img_101_217c47db8e7d.svg) 那条线上；叉号标的是理论位置 ![](向量外积_(outer_product)的几何意义_images/img_102_d52c149d4f04.svg)。  
这就是“**整条等值线 ![](向量外积_(outer_product)的几何意义_images/img_103_6e80b4059329.svg) 一个点**”。

* * *

### 3) 再推进一步：把“塌缩”做成动画（可选）

如果你想看“从原始点云逐渐被压到 ![](向量外积_(outer_product)的几何意义_images/img_104_01c81ae13013.svg) 线上”的动态过程，下面是一段生成 GIF 的代码：用

![](D:\电脑文件\公众号知识库\数学_线性代数\向量外积_(outer_product)的几何意义_images\img_001_2848923eab7e.svg)

让点云从输入平面“流动”到输出直线。

下面给一段**可直接运行**的 Python 代码，用插值

![](向量外积_(outer_product)的几何意义_images/img_106_b5df4df32f54.svg)

把点云从“原平面”逐步**压缩到 ![](向量外积_(outer_product)的几何意义_images/img_107_84b00d7d7bbb.svg) 直线**上，并输出 GIF。

> 依然用同一个例子：![](向量外积_(outer_product)的几何意义_images/img_108_8a316a5c7973.svg)。

* * *

### 生成 outer product 动画 GIF（Matplotlib + Pillow）

```
import numpy as np
```

![](向量外积_(outer_product)的几何意义_images/img_109_9ccf5f013c82.gif)

```

```

* * *

#### 你会在 GIF 里看到什么

-   开始（![](向量外积_(outer_product)的几何意义_images/img_110_1c0381c4aba6.svg)）：一整片点云（平面）
    
-   过程中：点云像“被挤压/吸向”一条线
    
-   结束（![](向量外积_(outer_product)的几何意义_images/img_111_f0c35c15855a.svg)）：所有点都落在 ![](向量外积_(outer_product)的几何意义_images/img_112_819b26e40ee8.svg) 这条直线上  
    同时，满足 ![](向量外积_(outer_product)的几何意义_images/img_113_afc23eeb9452.svg) 的那几条“等值线点集”会塌成 ![](向量外积_(outer_product)的几何意义_images/img_114_abf3a6d13cc0.svg) 附近的一小团（理论上是同一点）
    

  

下面是**左右对照版**动画：**左边固定显示输入平面（原始点云 + 等值线）**，**右边显示点云从 ![](向量外积_(outer_product)的几何意义_images/img_115_dd67155c9246.svg) 逐步变到 ![](向量外积_(outer_product)的几何意义_images/img_116_64c74b5d0760.svg) 的塌缩过程**（最终全部落到 ![](向量外积_(outer_product)的几何意义_images/img_117_f3c693bd6fd3.svg) 上），并在右边用 “×” 标出理论塌缩点 ![](向量外积_(outer_product)的几何意义_images/img_118_ead7d822b0f2.svg)。

> 仍用：![](向量外积_(outer_product)的几何意义_images/img_119_cb88644bee28.svg)，等值线：![](向量外积_(outer_product)的几何意义_images/img_120_209c87123609.svg)。

* * *

#### ![](向量外积_(outer_product)的几何意义_images/img_121_33864ae5f6f4.gif)

#### 你会看到的“关键对照”

-   **左图**
    
    等值线 ![](向量外积_(outer_product)的几何意义_images/img_122_82fd0456bf8e.svg)（这里 ![](向量外积_(outer_product)的几何意义_images/img_123_3b82839115a9.svg)）是平行直线；同色点都在同一条线上。
    
-   **右图**
    
    同色点在动画末尾会塌到 ![](向量外积_(outer_product)的几何意义_images/img_124_be9de79f71d6.svg) 线上同一个位置附近（理论点是 ![](向量外积_(outer_product)的几何意义_images/img_125_b444eeeefb18.svg) 的 “×”）。