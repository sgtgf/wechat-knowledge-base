# 什么是向量单位化 (vector normalization)


> 原文地址: [https://mp.weixin.qq.com/s/9tS7Ix-h7B5LZEFeBkFsyA](https://mp.weixin.qq.com/s/9tS7Ix-h7B5LZEFeBkFsyA)

  

想象一下，向量就像一支**箭头**：它有**方向**（箭头指向哪里），也有**长度**（箭头有多长）。比如在2D平面里，一个向量可以表示“向右走3步，再向上走4步”，写成 (3, 4)。

  

这支箭头的长度（也叫“模”或“范数”）是多少呢？用勾股定理算：√(3² + 4²) = √(9 + 16) = √25 = 5。所以这个向量长度是5。

**向量单位化**（vector normalization）就是：把这支箭头“缩放”成**长度正好是1**的箭头，但**方向完全不变**。这样得到的向量叫“单位向量”（unit vector）。

怎么做呢？很简单：把原向量**每个分量都除以它的长度**。

公式超级简单： **单位向量 = 原向量 ÷ 原向量长度**

比如上面那个 (3, 4)： 单位向量 = (3/5, 4/5) = (0.6, 0.8) 长度？√(0.6² + 0.8²) = √(0.36 + 0.64) = √1 = 1。完美！

### 为什么要做单位化？

很多时候我们只关心**方向**，不在乎长度大小。比如：

-     
    
-   计算两个向量“方向有多像”（余弦相似度）：单位化后直接点积就行。
    
-     
    
-   游戏/图形学里计算光照方向、速度方向：只需要方向，不需要具体大小。
    
-     
    
-   机器学习里归一化数据：让不同特征在同一尺度，避免某个大数值主导结果。
    

![](什么是向量单位化_(vector_normalization)_images/img_000_8ab34c12ec45.png)  
编辑

这张图解释了为什么归一化有用：在神经网络训练中，不归一化会导致梯度更新不均匀（左图椭圆），归一化后变成圆（右图），更新更公平高效。

![](什么是向量单位化_(vector_normalization)_images/img_001_c64ea4e53288.png)  
编辑

（图片来自《线性代数不难》）

这张图讲的是**向量单位化（vector normalization）**：把一个非零向量“缩放”成**长度=1**、但**方向不变**的向量（单位向量）。

* * *

## 1）图里给出的核心公式：单位化 = 除以向量长度

对任意二维非零向量

![$\begin{array}{c} a=\begin{bmatrix}a_1\\ a_2\end{bmatrix} \end{array}$](什么是向量单位化_(vector_normalization)_images/img_002_614b4d005827.png)

它的单位向量（单位化后的结果）定义为

![$\hat a=\frac{a}{\|a\|}$](什么是向量单位化_(vector_normalization)_images/img_003_a0883d79c598.png)

这里的 ∥a∥ 是向量的长度（L2 范数）：

![$\|a\|=\sqrt{a_1^2+a_2^2}$](什么是向量单位化_(vector_normalization)_images/img_004_2e804ab49535.png)

所以把它写成分量形式就是图中那样：

![$\begin{array}{c} \hat a= \begin{bmatrix} \dfrac{a_1}{\sqrt{a_1^2+a_2^2}}\\[6pt] \dfrac{a_2}{\sqrt{a_1^2+a_2^2}} \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGNX6QOdW0s17YLybjk7YiaJiaiaJYOsqmpOPM9INlww4GicYhwEFBLLP0cYw/640?wx_fmt=png&from=appmsg)

**一句话理解：**

> “单位化”就是用一个正数 ∥a∥ 去除整个向量，让它整体缩短（或拉长）到长度 1。

* * *

## 2）图里的例子：![$a=[3,4]^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGN0gliaqeXhjuhJqVajCffYeDyKIjGmjPbpQlJKmY2TW5najtZlvNYuHw/640?wx_fmt=png&from=appmsg) 为什么变成 ![$[3/5,4/5]^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGNicAKUQLGfenljPRaKbDuGSmtfG552jSR6O9dcNVxMGP7K67bYJq2Q8g/640?wx_fmt=png&from=appmsg) 

给定

![$\begin{array}{c} a=\begin{bmatrix}3\\4\end{bmatrix} \end{array}$](什么是向量单位化_(vector_normalization)_images/img_005_73231a7c2dc8.png)

先算长度：

![$\|a\|=\sqrt{3^2+4^2}=\sqrt{9+16}=\sqrt{25}=5$](什么是向量单位化_(vector_normalization)_images/img_006_ad4e3fb76c00.png)

再除以长度：

![$\begin{array}{c} \hat a=\frac{1}{5}\begin{bmatrix}3\\4\end{bmatrix} =\begin{bmatrix}3/5\\4/5\end{bmatrix} \end{array}$](什么是向量单位化_(vector_normalization)_images/img_007_2c34fe07c3d8.png)

验证它确实长度为 1：

![$\|\hat a\|=\sqrt{(3/5)^2+(4/5)^2} =\sqrt{9/25+16/25} =\sqrt{25/25}=1$](什么是向量单位化_(vector_normalization)_images/img_008_709b87e5596c.png)

* * *

## 3）图中的几何意义：方向不变，长度变成 1

图里画了两根同方向的箭头：

-   蓝色是原向量 ![$a=[3,4]^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGN0gliaqeXhjuhJqVajCffYeDyKIjGmjPbpQlJKmY2TW5najtZlvNYuHw/640?wx_fmt=png&from=appmsg)，从原点指向某个点，长度是 5。
    
-   绿色是单位向量 ![$\hat a=[3/5,4/5]^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGNaJHjr76aNQ1JbLhGXuw9icuxC4Odw7u38RuL7FAT2pCTwwWFSpfb7Zg/640?wx_fmt=png&from=appmsg)，方向和蓝色完全一致，但更短。
    

  

并且图上用虚线画了**单位圆**（半径为 1 的圆）：

-   单位化后的向量一定落在单位圆上（因为它的长度是 1）。
    
-   本质上是把原向量沿着同一条射线“缩放”到单位圆边界。
    

> 所以图下面那句“单位化后，长度变为 1，方向不变”就是这件事。

* * *

## 4）为什么“方向不变”一定成立？

因为单位化只是乘了一个**正的标量**：

![$\hat a=\frac{1}{\|a\|}a$](什么是向量单位化_(vector_normalization)_images/img_009_b88c22e46cea.png)

乘以正数只会把向量**伸缩**，不会旋转；向量仍在同一条射线上。  
（如果乘的是负数，会反向；但单位化除以 ∥a∥ 永远是正的。）

* * *

## 5）注意：零向量不能单位化

如果 a=0，那么 ∥a∥=0，![\frac{a}{\|a\|}](什么是向量单位化_(vector_normalization)_images/img_010_2b270fe2e2cb.png) 就会除以 0，**无定义**。  
所以单位化前必须保证向量非零。

* * *

## 6）推广到 n 维 & 常见用途

**n 维**同理：

![$\hat a=\frac{a}{\sqrt{a_1^2+\cdots+a_n^2}}$](什么是向量单位化_(vector_normalization)_images/img_011_3b5f56c548ee.png)

常见用途（你以后会经常见到）：

-   把方向提取出来：用 ![$\hat a$](什么是向量单位化_(vector_normalization)_images/img_012_ce5cf060b816.png) 表示“纯方向”
    
-   计算夹角 / 相似度：如余弦相似度 ![$\cos\theta = \hat a^\top \hat b$](什么是向量单位化_(vector_normalization)_images/img_013_9ef4d141e693.png) 
    
-   数值稳定：让不同尺度的向量“可比较”
    

  

我们在这张图的基础上，把“单位化”再讲深一层：它不仅是“除以长度”，更像是在做一个**几何投影/重标定**，会直接引出**方向、角度、余弦相似度**这些你后面会反复遇到的概念。

* * *

## 1）单位化 = “只保留方向，丢掉长度信息”

任意非零向量都可以写成：

![$a=\|a\|\cdot \hat a$](什么是向量单位化_(vector_normalization)_images/img_014_ca87e3a72d79.png)

-   ∥a∥：告诉你“有多长”（大小/能量/强度）
    
-   ![$\hat a$](什么是向量单位化_(vector_normalization)_images/img_015_ce5cf060b816.png)：告诉你“朝哪个方向”（方向信息）
    

所以单位化其实是在做**解耦**：把“长度”和“方向”分开。

图里的 ![[3,4]^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGNTaat3QIakalK4KicHP9zZtLXtiaNP541CC2WBoxxx4sMfAFbMyleK91g/640?wx_fmt=png&from=appmsg) 就是

![$\begin{bmatrix}3\\4\end{bmatrix} =5\cdot \begin{bmatrix}3/5\\4/5\end{bmatrix}$](什么是向量单位化_(vector_normalization)_images/img_016_1828f0b7da10.png)

* * *

##   

## 2）几何上：单位化就是“沿射线缩放到单位圆”

图里蓝箭头从原点指向点 A(3,4)。

单位化后的点是：

![$\hat A=\left(\frac{3}{5},\frac{4}{5}\right)$](什么是向量单位化_(vector_normalization)_images/img_017_7b962c6376c1.png)

你会发现它满足：

![$\left(\frac{3}{5}\right)^2+\left(\frac{4}{5}\right)^2=1$](什么是向量单位化_(vector_normalization)_images/img_018_952ea4d7faae.png)

也就是说 ![$\hat A$](什么是向量单位化_(vector_normalization)_images/img_019_166a887ebf2f.png) 一定落在圆

![$x^2+y^2=1$](什么是向量单位化_(vector_normalization)_images/img_020_a5c314ebe023.png)

上——这就是图里那条虚线单位圆。

**一句话：**

> 单位化把“任意距离的点”沿着原点射线拉回到单位圆边界。

推广到 3D 就是单位球面 ![$x^2+y^2+z^2=1$](什么是向量单位化_(vector_normalization)_images/img_021_4fd4cec1b89e.png)，再推广到 n 维就是单位超球面。

* * *

##   

## 3）为什么单位化后能直接用点积表示“夹角”？

点积公式：

![$a^\top b = \|a\|\|b\|\cos\theta$](什么是向量单位化_(vector_normalization)_images/img_022_b61a9c0d4d42.png)

如果你把两个向量都单位化：

![$\hat a^\top \hat b = \frac{a^\top b}{\|a\|\|b\|} =\cos\theta$](D:\电脑文件\公众号知识库\数学_线性代数\什么是向量单位化_(vector_normalization)_images\img_000_39c973d71646.png)

这就是**余弦相似度**的来源：

-   值接近 1：方向几乎一致
    
-   值接近 0：接近垂直
    
-   值接近 -1：方向相反
    

所以单位化的一个超级重要用途是：

> 把“比较大小”变成“比较方向/角度”。

* * *

##   

## 4）用图中的例子做个“角度直觉”

向量 a=(3,4) 的方向角（相对 x 轴）是：

![$\theta=\arctan\left(\frac{4}{3}\right)\approx 53.13^\circ$](什么是向量单位化_(vector_normalization)_images/img_024_252c6d8c579e.png)∘

单位化后 ![$\hat a=(3/5,4/5)$](什么是向量单位化_(vector_normalization)_images/img_025_58c97e977d60.png) 的方向角：

![$\arctan\left(\frac{4/5}{3/5}\right)=\arctan\left(\frac{4}{3}\right)$](什么是向量单位化_(vector_normalization)_images/img_026_54d9173b2ce0.png)

完全一样。

**所以单位化不会改变角度，只改变长度。**

* * *

##   

## 5）机器学习里为什么经常要 normalization？

### A. 文本/向量检索（embedding）

不同句子向量的长度可能差很多，但你更关心“语义方向”  
→ 单位化后用 ![$\hat a^\top \hat b$](什么是向量单位化_(vector_normalization)_images/img_027_f6a883b8aeff.png)（余弦相似度）就很自然。

### B. 梯度/更新步长控制（优化里）

有时只想沿着梯度方向走，不想步长被梯度大小影响  
→ 用单位化的梯度做方向，再单独设置步长。

### C. 数据尺度统一

特征尺度差异大时，某些维度会“主导”距离或点积  
→ 做 normalization 能让比较更公平（当然更常见的是对每个特征做标准化，但向量级 normalization 也很常见）。

* * *

##   

## 6）常见坑

1.  零向量不能单位化：∥0∥= 会除以 0
    
2.  数值实现要加小量：工程里常用
    
    ![$\hat a=\frac{a}{\|a\|+\varepsilon}$](什么是向量单位化_(vector_normalization)_images/img_028_8ee820d71fb8.png)
    
    防止极小长度导致不稳定（ε 很小）
    
3.  单位化不等于标准化
    

-   单位化：让整个向量长度变 1
    
-   标准化（standardization）：每个特征做减均值除方差
    
      
    

* * *

总结：单位化就是“把向量压成长度1，只留方向”，超级实用的小技巧！

  

### 什么是余弦相似度？（通俗易懂版）

余弦相似度（Cosine Similarity）是一种超级常用的方法，用来衡量**两个向量（箭头）方向有多相似**。它不关心箭头的长度，只看它们之间的夹角——就像判断两个人是不是“志同道合”，不管谁的“步子”更大。

简单说：

-   如果两个箭头**完全同方向**，相似度 = 1（完全相似）
    
-   如果**垂直**（没关系），相似度 = 0
    
-   如果**完全反方向**，相似度 = -1（完全相反） 值在 -1 到 1 之间，越接近1越相似。
    

![](什么是向量单位化_(vector_normalization)_images/img_029_0965b7122891.png)  
编辑

我们就沿着这张图，把**余弦相似度**彻底讲透：它到底在“相似”什么、为什么要除以 ![$\|A\|\|B\|$](什么是向量单位化_(vector_normalization)_images/img_030_d602360b861d.png)、以及怎么算。

* * *

## 1）它到底在衡量什么？

**余弦相似度只衡量“方向像不像”，不衡量“长度像不像”。**

-   两个向量如果**方向几乎一致**（夹角 θ 很小），就认为“相似度高”
    
-   如果**方向差很多**（夹角接近 90°），就认为“不相似”
    
-   如果**方向相反**（夹角接近 180°），相似度为负，表示“相反/对立”
    

这就是为什么图里画了两根箭头 A（红）和 B（蓝），中间夹角是 θ。

* * *

##   

## 2）核心定义：cosine similarity = cos(θ)

**余弦相似度的定义：**

![$\text{cos\_sim}(A,B)=\frac{A^\top B}{\|A\|\|B\|}$](什么是向量单位化_(vector_normalization)_images/img_031_ce463630ca7e.png)

而几何上有一个非常关键的恒等式（点积公式）：

![$A^\top B=\|A\|\|B\|\cos\theta$](什么是向量单位化_(vector_normalization)_images/img_032_5dfd6755b5a7.png)

把它代回去：

![$\frac{A^\top B}{\|A\|\|B\|} = \frac{\|A\|\|B\|\cos\theta}{\|A\|\|B\|} =\cos\theta$](什么是向量单位化_(vector_normalization)_images/img_033_d53de529dad8.png)

所以你图右边写的那串，其实就是在表达：

> 余弦相似度 = 点积 ÷（两个向量的长度乘积） = cos⁡θ

* * *

##   

## 3）为什么一定要“除以 ![$\|A\|\|B\|$](什么是向量单位化_(vector_normalization)_images/img_034_d602360b861d.png)”？

因为**点积 ![$A^\top B$](什么是向量单位化_(vector_normalization)_images/img_035_1e626ddd8a3f.png)**  本身会被长度强烈影响：

-   向量变长一点，点积就可能变很大
    
-   即便方向没变，“数值也会被长度放大”
    

除以 ∥A∥∥B∥ 的作用就是：  
**把长度因素消掉，只留下角度（方向）**。

你可以把它理解成“把 A、B 先单位化再点积”：

![$\hat A=\frac{A}{\|A\|},\quad \hat B=\frac{B}{\|B\|}$](什么是向量单位化_(vector_normalization)_images/img_036_4f112c17607b.png)

那么：

![$\hat A^\top \hat B = \left(\frac{A}{\|A\|}\right)^\top \left(\frac{B}{\|B\|}\right) = \frac{A^\top B}{\|A\|\|B\|}$](什么是向量单位化_(vector_normalization)_images/img_037_87343cb75a88.png)

**结论：余弦相似度 = 单位向量的点积。**

* * *

##   

## 4）值域和直觉对应关系

因为 cos⁡θ 的范围是 \[−1,1\]，所以余弦相似度也在 \[−1,1\]。

-   1：完全同方向（![$\theta=0^\circ$](什么是向量单位化_(vector_normalization)_images/img_038_3f3fdd3bba37.png)）
    
-   0：垂直（![$\theta=90^\circ$](什么是向量单位化_(vector_normalization)_images/img_039_5bb2c340aa5b.png)）
    
-   \-1：完全反方向（![$\theta=180^\circ$](什么是向量单位化_(vector_normalization)_images/img_040_d7c983016409.png)）
    

很多时候我们说“越相似越大”，就是指越接近 1。

* * *

##   

## 5）手算一个具体例子（一步一步）

取

![$\begin{array}{c} A=\begin{bmatrix}1\\0\end{bmatrix},\quad B=\begin{bmatrix}1\\1\end{bmatrix} \end{array}$](什么是向量单位化_(vector_normalization)_images/img_041_41b9201e1c4a.png)

**第1步：算点积**

![$A^\top B = 1\cdot 1 + 0\cdot 1 = 1$](什么是向量单位化_(vector_normalization)_images/img_042_bf7fd8bd3e21.png)

**第2步：算长度**

![$\|A\|=\sqrt{1^2+0^2}=1,\quad \|B\|=\sqrt{1^2+1^2}=\sqrt2$](什么是向量单位化_(vector_normalization)_images/img_043_963708175e59.png)

**第3步：代公式**

![$\text{cos\_sim}(A,B)=\frac{1}{1\cdot \sqrt2}=\frac{1}{\sqrt2}\approx 0.707$](什么是向量单位化_(vector_normalization)_images/img_044_e7c120431dc9.png)

这对应夹角 ![$\theta=45^\circ$](什么是向量单位化_(vector_normalization)_images/img_045_0f8450eb6c51.png)，因为 ![$\cos45^\circ=0.707$](什么是向量单位化_(vector_normalization)_images/img_046_5b0afd1e1686.png)。

* * *

##   

## 6）一个“最容易误解”的点：长度不同也能相似度=1

比如

![$\begin{array}{c} A=\begin{bmatrix}1\\1\end{bmatrix},\quad B=\begin{bmatrix}10\\10\end{bmatrix} \end{array}$](什么是向量单位化_(vector_normalization)_images/img_047_ba33984e8431.png)

它们方向完全一样（B 只是 A 放大 10 倍）：

-   点积很大：![$A^\top B = 20$](什么是向量单位化_(vector_normalization)_images/img_048_21664b804df9.png)
    
-   但余弦相似度：
    

![$\frac{A^\top B}{\|A\|\|B\|} = \frac{20}{(\sqrt2)(10\sqrt2)}=\frac{20}{20}=1$](什么是向量单位化_(vector_normalization)_images/img_049_ec880cfe71a5.png)

这正说明：**余弦相似度不关心长度，只关心方向。**

* * *

##   

## 7）它为什么适合文本/embedding/检索？

在文本向量里：

-   句子长短、频次、模型内部缩放，都会让向量长度变化很大
    
-   但语义相似更接近“方向接近”
    

所以用余弦相似度能减少“长度噪声”，更稳定地比较语义。

  

* * *

## 8）常见坑

1.  零向量不能算（分母 ∥A∥∥B∥=0）
    
2.  余弦相似度不等于欧氏距离：一个看角度，一个看距离
    
3.  有时“长度”本身也有意义（置信度/强度），单位化会丢掉它——要看任务
    

##   

## 为什么单位化后点积=cosθ会让很多算法更稳定？

因为一旦把向量都单位化，点积就**只剩“方向/夹角”信息**，把很多会让算法“飘”的因素（尺度、能量、范数差异）都剥掉了；这样数值范围更可控、梯度更不容易爆或塌、相似度比较也更公平。

下面从“数学 + 直觉 + 工程”三层说明。

* * *

## 1）点积原本混了两种东西：长度 × 角度

对任意向量 a,b：

![$a^\top b=\|a\|\|b\|\cos\theta$](什么是向量单位化_(vector_normalization)_images/img_050_b61a9c0d4d42.png)

这里有两类信息：

-   尺度：∥a∥∥b∥（大小、能量）
    
-   方向：cos⁡θ（夹角）
    

如果你的任务本质上是“比相似/比语义/比方向”，那尺度其实是**噪声**：  
有的样本向量就是容易范数大（例如文本更长、图像更亮、embedding 训练漂移等），它会把点积“硬拉大”，导致排序或分类边界不稳定。

单位化后：

![$\hat a^\top \hat b = \cos\theta\in[-1,1]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tohDqacRLUd1aGZ6xdia0dGNuKf5XKJaq84fC7VUiaibTiaFiccdw1eicIEAezyR9a8S7AcfjqArV3p6gew/640?wx_fmt=png&from=appmsg)

尺度被消掉，只剩方向，输出范围也被**强行限制**在 \[−1,1\]。

  

* * *

## 2）数值稳定：把分数“锁”在固定范围，避免极端值

很多算法里，点积会进入：

-   softmax：exp⁡(logit)
    
-   sigmoid：σ(logit)
    
-   hinge / margin loss：基于 logit 的间隔
    

如果 logit 是原始点积 ![$a^\top b$](什么是向量单位化_(vector_normalization)_images/img_051_40d47d4cdde4.png)，它可能非常大或非常小（因为范数随训练变化、随样本变化），带来两类问题：

### A. 溢出/下溢（工程层面）

exp⁡(100) 很快就数值爆炸；exp⁡(−100) 直接变 0。  
单位化后 logit 变成 cos⁡θ∈\[−1,1\]（或再乘一个温度/尺度 s），数值更好控。

### B. 梯度饱和（优化层面）

以 sigmoid 为例：logit 过大时 σ≈1，梯度 σ(1−σ)≈0，学习变慢甚至停滞；logit 过小时同理。  
单位化让 logit 不会被范数无意义地推到极端，训练更平滑。

  

* * *

## 3）优化稳定：减少“范数漂移”带来的非本质自由度

在很多表示学习/对比学习/分类里，模型既可以：

-   通过**让角度更小**（方向更对）来提高相似度
    
-   也可以通过**让范数变大**（向量变长）来提高点积
    

后者常常是“投机取巧”：不一定让方向更好，但把数值做大就能让损失下降一点点。结果是：

-   向量范数在训练中不断膨胀（norm blow-up）
    
-   不同 batch/不同样本的 logit 尺度乱飘
    
-   学习率、正则、温度等超参数变得非常敏感
    

单位化等于**砍掉这条投机通道**：模型只能老老实实通过“方向对齐/分离”来优化，训练通常更稳、更可复现。

> 这也是为什么很多方法会用 “cosine classifier / normalized embeddings”。

* * *

##   

## 4）比较稳定：相似度排序不再被“长度”劫持

检索/匹配里经常要比较：

![$\arg\max_i \ a^\top b_i$](什么是向量单位化_(vector_normalization)_images/img_052_bc1715ecc757.png)

如果不单位化，范数大的 ![$b_i$](什么是向量单位化_(vector_normalization)_images/img_053_d417c34485d2.png) 会天然占优势，即使方向没那么像。  
单位化后比较的是：

![$\arg\max_i \ \cos\theta_i$](什么是向量单位化_(vector_normalization)_images/img_054_8b727eba47e4.png)

更接近“语义角度最近”的真实目标，排序更稳，对输入长度、亮度、对比度等外界因素更不敏感。

  

* * *

## 5）但也要知道：单位化不是“必然更好”

单位化会**丢掉长度信息**。如果长度本身有意义（比如置信度/强度/数量级），强行单位化可能损失性能。工程上常见折中是：

-   embedding 先单位化，**再乘一个可控尺度 s**（或温度 ![$1/\tau$](什么是向量单位化_(vector_normalization)_images/img_055_e77d61980494.png)）：
    
    ![$\text{logit}=s\cdot \hat a^\top \hat b$](什么是向量单位化_(vector_normalization)_images/img_056_cd81c7b42009.png)
    
    这样既保留角度几何，又能调节分类/对比学习的分离力度。