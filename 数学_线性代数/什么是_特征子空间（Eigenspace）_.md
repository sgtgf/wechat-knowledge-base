# 什么是“特征子空间（Eigenspace）”


> 原文地址: [https://mp.weixin.qq.com/s/ZHXo6KHuF2fnRbmCwoVYGA](https://mp.weixin.qq.com/s/ZHXo6KHuF2fnRbmCwoVYGA)

  
  

![](什么是_特征子空间（Eigenspace）__images/img_000_ba260125a73d.png)

图1

“**特征子空间**（eigenspace）”可以理解成：

**所有被矩阵**![](什么是_特征子空间（Eigenspace）__images/img_001_778ea1102298.svg)**作用后，只会沿原方向伸缩（或反向伸缩）的一整片向量集合。**

更正式地说，对于某个特征值![](什么是_特征子空间（Eigenspace）__images/img_002_5ba3d5cfccd8.svg)，它对应的特征子空间定义为

![](什么是_特征子空间（Eigenspace）__images/img_003_4c9b9d6657d4.svg)

也常写成

![](什么是_特征子空间（Eigenspace）__images/img_004_b878640dbf44.svg)

这两种写法是完全等价的。

* * *

### 1\. 先说“特征向量”是什么

如果一个非零向量 ![](什么是_特征子空间（Eigenspace）__images/img_005_5dcc7aa2a113.svg) 满足

![](什么是_特征子空间（Eigenspace）__images/img_006_850106227873.svg)

那么 ![](什么是_特征子空间（Eigenspace）__images/img_007_11b11069eda1.svg) 就叫做矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_008_b3ddeed2a842.svg) 的**特征向量**，![](什么是_特征子空间（Eigenspace）__images/img_009_cc3441a2c546.svg) 叫它对应的**特征值**。

它的意思是：

-   经过线性变换 ![](什么是_特征子空间（Eigenspace）__images/img_010_a5c72bb3283c.svg) 后，
    
-   向量**方向没有乱跑到别的方向去**
    
-   只是被乘了一个倍数 ![](什么是_特征子空间（Eigenspace）__images/img_011_fd7e56b8269b.svg)
    

例如：

-   ![](什么是_特征子空间（Eigenspace）__images/img_012_df5950ca1699.svg)
    
    长度变成 2 倍，方向不变
    
-   ![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_特征子空间（Eigenspace）__images\img_000_37c3d3b75847.svg)
    
    缩短一半
    
-   ![](什么是_特征子空间（Eigenspace）__images/img_014_87f11d5608bc.svg)
    
    长度不变，但方向反过来
    
-   ![](什么是_特征子空间（Eigenspace）__images/img_015_1a96f0b55731.svg)
    
    被压到零向量
    

  

* * *

### 2\. 什么是“特征子空间”

一个特征向量只是**一根箭头**。

而**特征子空间**是：

对应同一个特征值![](什么是_特征子空间（Eigenspace）__images/img_016_baa8b9cb7192.svg)的**所有特征向量，再加上零向量**，组成的一个子空间。

所以它不是单个向量，而是一个“空间”：

-   可能是一条直线
-   可能是一个平面
-   也可能是更高维的子空间

* * *

### 3\. 为什么它叫“子空间”

因为它满足子空间的三个特征：

设![](什么是_特征子空间（Eigenspace）__images/img_017_aa0f0dc945e9.svg)，那么

![](什么是_特征子空间（Eigenspace）__images/img_018_8d45a92cd669.svg)

于是对任意标量![](什么是_特征子空间（Eigenspace）__images/img_019_0056df4f39f5.svg)，

![](什么是_特征子空间（Eigenspace）__images/img_020_0d41d954f496.svg)

![](什么是_特征子空间（Eigenspace）__images/img_021_3e5850f9a36e.svg)

所以：

-   和还在里面
-   数乘还在里面
-   零向量也在里面

因此它确实是一个**线性子空间**。

* * *

### 4\. 结合图1来理解

图里蓝色平面标着：

![](什么是_特征子空间（Eigenspace）__images/img_022_30940b0e9cd6.svg)

意思是：

-   这个蓝色平面上的每一个向量 ![](什么是_特征子空间（Eigenspace）__images/img_023_349f1e9cebae.svg)
    
-   在乘上矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_024_bf344657318a.svg) 后
    
-   都变成
    

![](什么是_特征子空间（Eigenspace）__images/img_025_8c4bf1053e9f.svg)

也就是：

-   方向不变
    
-   长度扩大 2 倍
    

  

所以图左到图右，蓝色箭头都还留在那个平面里，只是变长了。

这就是图下方那句话的意思：

![](什么是_特征子空间（Eigenspace）__images/img_026_526a2bac6bc7.svg)在这个特征子空间上表现为一次 dilation（伸缩）

也就是说，在这个平面里，![](什么是_特征子空间（Eigenspace）__images/img_027_e886b79b164e.svg)的作用特别简单：**纯放大 2 倍**。

* * *

### 5\. 最常见的几何情形

#### 情形 A：特征子空间是一条直线

例如在二维里，一个矩阵可能有某条直线上的向量都满足

![](什么是_特征子空间（Eigenspace）__images/img_028_b9d2c29290ab.svg)

那这条直线就是![](什么是_特征子空间（Eigenspace）__images/img_029_8c26bbcf2d7e.svg)的特征子空间。

#### 情形 B：特征子空间是一个平面

像图1里这样，在三维空间里，有一个平面上的所有向量都满足

![](什么是_特征子空间（Eigenspace）__images/img_030_9a232bd669f9.svg)

那么这个平面就是![](什么是_特征子空间（Eigenspace）__images/img_031_b78d6040a445.svg)的特征子空间。

* * *

### 6\. 一个最简单的例子

看这个矩阵

![](什么是_特征子空间（Eigenspace）__images/img_032_b50bc7b4c683.svg)

它对向量![](什么是_特征子空间（Eigenspace）__images/img_033_071666d67502.svg)的作用是

![](什么是_特征子空间（Eigenspace）__images/img_034_5ea327486e13.svg)

#### 对应 ![](什么是_特征子空间（Eigenspace）__images/img_035_c9d399c97f54.svg)

要求

![](什么是_特征子空间（Eigenspace）__images/img_036_76c00e3994b0.svg)

即

![](什么是_特征子空间（Eigenspace）__images/img_037_cb1c1942f12c.svg)

比较第三个分量得

![](什么是_特征子空间（Eigenspace）__images/img_038_85eb03978cfb.svg)

所以所有满足条件的向量是

![](什么是_特征子空间（Eigenspace）__images/img_039_cb4adcd995e2.svg)

这就是xy平面，因此

![](什么是_特征子空间（Eigenspace）__images/img_040_cf78fb4a5212.svg)

这是一个**二维平面特征子空间**。

#### 对应 ![](什么是_特征子空间（Eigenspace）__images/img_041_24f676775144.svg)

同理可得

![](什么是_特征子空间（Eigenspace）__images/img_042_33928d6e4984.svg)

这是一条![](什么是_特征子空间（Eigenspace）__images/img_043_05862b05cc51.svg)轴直线。

* * *

### 7\. 为什么要加上零向量

严格说，特征向量要求是**非零向量**，因为零向量满足

![](什么是_特征子空间（Eigenspace）__images/img_044_5863216f397f.svg)

对任何![](什么是_特征子空间（Eigenspace）__images/img_045_bed3273370d1.svg)都成立，没区分度。

但为了让“所有这类向量”构成一个真正的线性子空间，我们把零向量也加进去，于是得到**特征子空间**。

所以：

-   **特征向量**：非零
-   **特征子空间**：特征向量集合再加零向量

* * *

### 8\. 与 ![](什么是_特征子空间（Eigenspace）__images/img_046_0bb8f8a8851a.svg) 的关系

由

![](什么是_特征子空间（Eigenspace）__images/img_047_627954ab69ad.svg)

移项得

![](什么是_特征子空间（Eigenspace）__images/img_048_d17360a95ba4.svg)

![](什么是_特征子空间（Eigenspace）__images/img_049_fd5edef8be71.svg)

所以特征子空间其实就是矩阵![](什么是_特征子空间（Eigenspace）__images/img_050_1990c1bc3c9e.svg)的零空间：

![](什么是_特征子空间（Eigenspace）__images/img_051_f044f0737716.svg)

这点非常重要，因为求特征子空间时，实际做法通常就是：

1.  先求特征值 ![](什么是_特征子空间（Eigenspace）__images/img_052_bc43da0baf74.svg) 
2.  再解齐次方程组
    
    ![](什么是_特征子空间（Eigenspace）__images/img_053_7892b0107984.svg)
    
3.  解空间就是![](什么是_特征子空间（Eigenspace）__images/img_054_31d3eadc9a04.svg) 

* * *

### 9\. 直观总结一句话

可以把“特征子空间”记成：

**矩阵**![](什么是_特征子空间（Eigenspace）__images/img_055_c0253e89efdd.svg)**作用起来最“老实”的那一片空间。**

因为在这片空间里，![](什么是_特征子空间（Eigenspace）__images/img_056_9f69309e12ee.svg)不会把向量拧到别的方向去，只是统一按某个倍数![](什么是_特征子空间（Eigenspace）__images/img_057_f87ecaf8989f.svg)伸缩。

* * *

### 10\. 再和“特征值重数”联系一下

有时某个特征值重复出现，比如![](什么是_特征子空间（Eigenspace）__images/img_058_e0c0d62897de.svg)是二重根，但这并不一定意味着它的特征子空间一定是二维。

要区分：

-   **代数重数**：特征值在特征多项式里重复几次
-   **几何重数**：特征子空间的维数

总有

![](什么是_特征子空间（Eigenspace）__images/img_059_7321851a7a85.svg)

图1里的情况，就是![](什么是_特征子空间（Eigenspace）__images/img_060_82ccdfeb8ca9.svg)的特征子空间是一个**平面**，所以几何重数是 2。

* * *

### 11\. 最后用图像语言重新说一遍

图1中的蓝色平面表示：

-   这个平面内任意蓝色箭头，乘以 ![](什么是_特征子空间（Eigenspace）__images/img_061_3e536a21922e.svg) 后
    
-   仍然落在这个平面内
    
-   且方向不变，只是长度变为原来的 2 倍
    

所以那个平面就是

![](什么是_特征子空间（Eigenspace）__images/img_062_3a9785db257f.svg)

也就是特征值 ![](什么是_特征子空间（Eigenspace）__images/img_063_b0dc37e73676.svg) 的特征子空间。

* * *

下面我用一个**具体的**![](什么是_特征子空间（Eigenspace）__images/img_064_eb7fe50ea9fd.svg)**整数矩阵**，把

-   特征值
-   特征向量
-   特征子空间
-   几何意义

完整串起来。

* * *

## 1\. 选一个最适合看清“特征子空间”的矩阵

取

![](什么是_特征子空间（Eigenspace）__images/img_065_f676025d3473.svg)

这个矩阵非常好，因为它一眼就能看出：

-   在  ![](什么是_特征子空间（Eigenspace）__images/img_066_1be2d560e0b4.svg) 平面里，统一放大 2 倍
-   在  ![](什么是_特征子空间（Eigenspace）__images/img_067_e8c7d0276c86.svg) 轴方向，放大 3 倍

所以它会同时出现：

-   一个**二维特征子空间**
-   一个**一维特征子空间**

这正好适合解释概念。

* * *

## 2\. 先看它对一般向量做了什么

设

![](什么是_特征子空间（Eigenspace）__images/img_068_f47df845b6dc.svg)

那么

![](什么是_特征子空间（Eigenspace）__images/img_069_2ecd7300d8dd.svg)

意思是：

-   第一坐标乘 2
-   第二坐标乘 2
-   第三坐标乘 3

这不是“统一缩放整个空间”，因为不同方向倍率不同。

* * *

## 3\. 求特征值

特征值由方程

![](什么是_特征子空间（Eigenspace）__images/img_070_1c563879bc8a.svg)

给出。

先写出

![](什么是_特征子空间（Eigenspace）__images/img_071_e5e2544ca65b.svg)

所以由**[特征多项式](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247521396&idx=1&sn=fc7ae1826ead365aaf91512d833dd96a&scene=21#wechat_redirect)**

![](什么是_特征子空间（Eigenspace）__images/img_072_f707efb4aeb3.svg)

令它等于 0：

![](什么是_特征子空间（Eigenspace）__images/img_073_727d4f0459e8.svg)

得到两个特征值：

![](什么是_特征子空间（Eigenspace）__images/img_074_0b7ca4046aa5.svg)

其中

-    ![](什么是_特征子空间（Eigenspace）__images/img_075_670e2e6db75d.svg) 的代数重数是 2
-    ![](什么是_特征子空间（Eigenspace）__images/img_076_49d6ab94bb05.svg) 的代数重数是 1

* * *

## 4\. 求 ![](什么是_特征子空间（Eigenspace）__images/img_077_bb528ad23e12.svg) 的特征子空间

特征子空间定义为

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_特征子空间（Eigenspace）__images\img_001_f383fdeea3db.svg)

先算

![](什么是_特征子空间（Eigenspace）__images/img_079_341c99348968.svg)

我们需要先确定单位矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_080_9c8cbe2684b5.svg) 的形式，然后进行矩阵的数乘和减法运算。

以下是详细的计算步骤：

#### 4.1 确定单位矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_081_2056dc86f682.svg)

由于矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_082_e7de3e0cbddb.svg) 是一个 ![](什么是_特征子空间（Eigenspace）__images/img_083_9c07b3be348f.svg) 矩阵，对应的单位矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_084_c55d5195a37d.svg) 也必须是 ![](什么是_特征子空间（Eigenspace）__images/img_085_5605d1e4c53e.svg)：

![](什么是_特征子空间（Eigenspace）__images/img_086_3cd29b4e2343.svg)

#### 4.2 计算数乘矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_087_41e30cd0ff25.svg)

将常数 ![](什么是_特征子空间（Eigenspace）__images/img_088_8944c7c4e618.svg) 乘以单位矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_089_ee61d66f873d.svg) 中的每一个元素：

![](什么是_特征子空间（Eigenspace）__images/img_090_9804f24ee1cf.svg)

#### 4.3 执行矩阵减法 ![](什么是_特征子空间（Eigenspace）__images/img_091_c8fb5966051a.svg)

将矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_092_2a7376a6f9b7.svg) 与矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_093_a1aca696f677.svg) 对应位置的元素相减：

![](什么是_特征子空间（Eigenspace）__images/img_094_067ca835407f.png)

最终结果

![](什么是_特征子空间（Eigenspace）__images/img_095_92da8ee69baa.png)

要求

![](什么是_特征子空间（Eigenspace）__images/img_096_0e8ab2b424cf.svg)

即

![](什么是_特征子空间（Eigenspace）__images/img_097_01ee6b0ec11c.svg)

这只给出一个条件：

![](什么是_特征子空间（Eigenspace）__images/img_098_510842905d1f.svg)

而![](什么是_特征子空间（Eigenspace）__images/img_099_635268003a97.svg)都自由。

所以

![](什么是_特征子空间（Eigenspace）__images/img_100_43990765111b.svg)

也就是

![](什么是_特征子空间（Eigenspace）__images/img_101_e7217d0e85b5.svg)

这就是整个![](什么是_特征子空间（Eigenspace）__images/img_102_56c6245be6e5.svg)平面。

* * *

## 5\. 这说明了什么

对平面内任意向量

![](什么是_特征子空间（Eigenspace）__images/img_103_19d0428b8cc2.svg)

都有

![](什么是_特征子空间（Eigenspace）__images/img_104_22a39682817c.svg)

所以：

-   向量还留在原平面里
-   方向不变
-   长度放大 2 倍

因此这个平面就是**特征值**![](什么是_特征子空间（Eigenspace）__images/img_105_9dff3e1c9f46.svg)**的特征子空间**。

这正对应图1中的蓝色平面。

* * *

## 6\. 求 ![](什么是_特征子空间（Eigenspace）__images/img_106_67e882b8c0ff.svg) 的特征子空间

同理，

![](什么是_特征子空间（Eigenspace）__images/img_107_96b38dd53da5.svg)

先算（步骤同4）

![](什么是_特征子空间（Eigenspace）__images/img_108_f0a4bcc3e899.svg)

解

![](什么是_特征子空间（Eigenspace）__images/img_109_052231e9a476.svg)

即

![](什么是_特征子空间（Eigenspace）__images/img_110_4dd3acc296b5.svg)

得到

![](什么是_特征子空间（Eigenspace）__images/img_111_e1406680bdad.svg)

而![](什么是_特征子空间（Eigenspace）__images/img_112_f3169b55301e.svg)自由。

所以

![](什么是_特征子空间（Eigenspace）__images/img_113_4c4b26ee76c1.svg)

这是一条直线，也就是![](什么是_特征子空间（Eigenspace）__images/img_114_bcc03f06139e.svg)轴。

* * *

## 7\. 几何上怎么理解这两个特征子空间

这个矩阵把三维空间拆成两部分：

### 第一部分：![](什么是_特征子空间（Eigenspace）__images/img_115_0b8b1f7769aa.svg) 平面

这里所有向量都满足

![](什么是_特征子空间（Eigenspace）__images/img_116_676543b43a42.svg)

所以这一整片平面是![](什么是_特征子空间（Eigenspace）__images/img_117_27715363d627.svg)。

### 第二部分：![](什么是_特征子空间（Eigenspace）__images/img_118_43461507b355.svg) 轴

这里所有向量都满足

![](什么是_特征子空间（Eigenspace）__images/img_119_3a3fbf7c6a90.svg)

所以这一条轴是![](什么是_特征子空间（Eigenspace）__images/img_120_4ebbda729014.svg)。

也就是说，矩阵 A 在这两个特殊方向/特殊子空间上，动作极其简单：

-   在平面上：乘 2
-   在竖直轴上：乘 3

* * *

## 8\. 拿几个具体向量验证一下

### 向量 1：在 ![](什么是_特征子空间（Eigenspace）__images/img_121_21dc2b679521.svg) 中

![](什么是_特征子空间（Eigenspace）__images/img_122_a1ed021b7cb6.svg)

则

![](什么是_特征子空间（Eigenspace）__images/img_123_999b2519bb54.svg)

所以![](什么是_特征子空间（Eigenspace）__images/img_124_3890f2a85154.svg)是特征向量，对应![](什么是_特征子空间（Eigenspace）__images/img_125_8c32f32ffa77.svg)。

* * *

### 向量 2：也在 ![](什么是_特征子空间（Eigenspace）__images/img_126_90273123b7c8.svg) 中

![](什么是_特征子空间（Eigenspace）__images/img_127_546a1fc7427d.svg)

则

![](什么是_特征子空间（Eigenspace）__images/img_128_4477e00636cc.svg)

也还是![](什么是_特征子空间（Eigenspace）__images/img_129_1ab13b4639de.svg)的特征向量。

所以不是“只有一根箭头”是特征向量，而是平面里所有非零向量都是。

* * *

### 向量 3：在 ![](什么是_特征子空间（Eigenspace）__images/img_130_e59527bb95f2.svg) 中

![](什么是_特征子空间（Eigenspace）__images/img_131_6df20013134f.svg)

则

![](什么是_特征子空间（Eigenspace）__images/img_132_130241ef4e16.svg)

所以![](什么是_特征子空间（Eigenspace）__images/img_133_c9a1415d9571.svg)是![](什么是_特征子空间（Eigenspace）__images/img_134_b569eb3b9fd4.svg)的特征向量。

* * *

### 向量 4：不在任何特征子空间里

![](什么是_特征子空间（Eigenspace）__images/img_135_1b49e5068af6.svg)

则

![](什么是_特征子空间（Eigenspace）__images/img_136_a248c15122d7.svg)

这并不是某个数乘上原向量

![](什么是_特征子空间（Eigenspace）__images/img_137_36cf5adfee81.svg)

因为如果是![](什么是_特征子空间（Eigenspace）__images/img_138_35abd8d7e3ff.svg)，那三个分量比例必须一致，但这里是2，2，3，不一致。

所以这个向量不是特征向量。

这说明：

不是所有向量都会“保持方向”，只有特征子空间里的向量才会。

* * *

## 9\. 为什么说特征子空间是“整片空间”而不是“单根方向”

对于![](什么是_特征子空间（Eigenspace）__images/img_139_9773ddf37239.svg)，只要![](什么是_特征子空间（Eigenspace）__images/img_140_52514bc49540.svg)，就满足

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_特征子空间（Eigenspace）__images\img_002_057d07c9ed3c.svg)

因此不是某一根线，而是整个平面都可以。

这就是“特征值重复时，特征子空间可能变成二维”的最直观例子。

这里：

![](什么是_特征子空间（Eigenspace）__images/img_142_36dcedc0d5d9.svg)

所以![](什么是_特征子空间（Eigenspace）__images/img_143_fe3eba3095c8.svg)的几何重数是 2。

而

![](什么是_特征子空间（Eigenspace）__images/img_144_230652aada80.svg)

所以![](什么是_特征子空间（Eigenspace）__images/img_145_3c0f97dfd162.svg)的几何重数是 1。

* * *

## 10\. 用“子空间分解”的角度再看一遍

任意向量都能写成

![](什么是_特征子空间（Eigenspace）__images/img_146_69527ab92d03.svg)

也就是

![](什么是_特征子空间（Eigenspace）__images/img_147_db2fbce66537.svg)

其中

于是

![](什么是_特征子空间（Eigenspace）__images/img_148_1b1fb4179811.svg)

这很漂亮地说明：

矩阵![](什么是_特征子空间（Eigenspace）__images/img_149_9291445a7ffc.svg)对不同特征子空间分别按不同倍率作用。

这正是“对角矩阵为什么好理解”的本质。

* * *

## 11\. 这个例子里，特征子空间和基底怎么选

对![](什么是_特征子空间（Eigenspace）__images/img_150_58031015ca01.svg)，一个自然基底是

![](什么是_特征子空间（Eigenspace）__images/img_151_14c923c0d8cb.svg)

对![](什么是_特征子空间（Eigenspace）__images/img_152_93e0ffdbd22c.svg)，一个自然基底是

![](什么是_特征子空间（Eigenspace）__images/img_153_9cef323c9cb5.svg)

把它们放在一起，就是整个空间的一组特征向量基底：

![](什么是_特征子空间（Eigenspace）__images/img_154_1e7a85aafe55.svg)

在这组基底下，矩阵就是对角的：

![](什么是_特征子空间（Eigenspace）__images/img_155_2116bc0d79dc.svg)

* * *

## 12\. 一句话抓住本质

**特征子空间 = 对应某个特征值**![](什么是_特征子空间（Eigenspace）__images/img_156_7b9c49b83e18.svg)**的全部“只伸缩不转向”的向量集合。**

-   若是一条线：表示那条方向很特殊
-   若是一个平面：表示那整片平面都很特殊
-   在线性代数里，它就是
    
    ![](什么是_特征子空间（Eigenspace）__images/img_157_8840a8cd630d.svg)
    

* * *

## 13\. 再补一个容易混淆的点

“特征子空间”不是说这个空间中的向量都不动。

而是说它们都满足

![](什么是_特征子空间（Eigenspace）__images/img_158_6d291e1814b4.svg)

所以它们可能：

-   变长
-   变短
-   反向
-   甚至压到 0

只是**不会偏到别的方向去**。

* * *

## 14\. 和图1的对应

图1里那块蓝色平面标着：

![](什么是_特征子空间（Eigenspace）__images/img_159_add40bc0ce80.svg)

就是说这整片平面里的任何向量，经过![](什么是_特征子空间（Eigenspace）__images/img_160_c647b0f924e0.svg)后都变成原来的 2 倍。

所以图右边蓝色箭头仍然留在那片平面中，只是更长了。

这就是“![](什么是_特征子空间（Eigenspace）__images/img_161_4267067bd896.svg)在该特征子空间上表现为 dilation（伸缩）”。

* * *

下面我们看一个**不是对角矩阵**的3x3整数矩阵，但它仍然有一个**二维特征子空间**。

这会更说明问题：

**特征子空间不是“对角矩阵专属现象”**，而是线性变换本身的几何结构。

* * *

## 1\. 先给出矩阵

取

![](什么是_特征子空间（Eigenspace）__images/img_162_5c714d250229.svg)

它不是对角矩阵，因为右上角有个1。

这个矩阵的作用是

![](什么是_特征子空间（Eigenspace）__images/img_163_43ba480b839a.svg)

注意：

-   x 分量不仅受自己影响，还受 y 影响
-   所以它比对角矩阵“更拧一点”

但它仍然可能有特征子空间。

* * *

## 2\. 求特征值

先算

![](什么是_特征子空间（Eigenspace）__images/img_164_86251a9c2548.svg)

因为它是上三角矩阵，所以行列式等于对角线相乘：

![](什么是_特征子空间（Eigenspace）__images/img_165_275e2670aac7.svg)

于是特征值还是

![](什么是_特征子空间（Eigenspace）__images/img_166_5b3bf5aee0aa.svg)

其中![](什么是_特征子空间（Eigenspace）__images/img_167_a0d3360daa2b.svg)的代数重数仍然是 2。

但关键问题来了：

它的![](什么是_特征子空间（Eigenspace）__images/img_168_d5c067952182.svg)特征子空间，还是二维吗？

我们来算。

* * *

## 3\. 求 ![](什么是_特征子空间（Eigenspace）__images/img_169_db77c33576b9.svg) 的特征子空间

定义

![](什么是_特征子空间（Eigenspace）__images/img_170_93361dddb1f5.svg)

先算

![](什么是_特征子空间（Eigenspace）__images/img_171_4e4b9cdf2274.svg)

要求

![](什么是_特征子空间（Eigenspace）__images/img_172_4d1de2d48f31.svg)

即

![](什么是_特征子空间（Eigenspace）__images/img_173_5841b39c888b.svg)

所以条件是

![](什么是_特征子空间（Eigenspace）__images/img_174_0890d7967e09.svg)

只有![](什么是_特征子空间（Eigenspace）__images/img_175_88d175ddab22.svg)自由。

因此

![](什么是_特征子空间（Eigenspace）__images/img_176_1d03d14e424a.svg)

这说明：

![](什么是_特征子空间（Eigenspace）__images/img_177_180871c7cbb4.svg)

也就是说，虽然![](什么是_特征子空间（Eigenspace）__images/img_178_dc3405474565.svg)重复了两次，但它的特征子空间**只有一维**，不是二维。

* * *

## 4\. 这点非常关键

前一个对角矩阵例子里，

![](什么是_特征子空间（Eigenspace）__images/img_179_ec8b00f48cf4.svg)

对应的是整个![](什么是_特征子空间（Eigenspace）__images/img_180_308b39ffa3ac.svg)平面。

而现在这个非对角矩阵里，同样是![](什么是_特征子空间（Eigenspace）__images/img_181_e0fd8db8705c.svg)，却只剩下x-轴这一条线。

这说明：

**特征值重复出现，不等于特征子空间维数一定也重复那么多次。**

也就是：

-   代数重数 = 特征值作为根出现几次
-   几何重数 = 特征子空间的维数

这里只是

![](什么是_特征子空间（Eigenspace）__images/img_182_cc317b58b254.svg)

* * *

## 5\. 求 ![](什么是_特征子空间（Eigenspace）__images/img_183_4ef2a67129c0.svg) 的特征子空间

再算

![](什么是_特征子空间（Eigenspace）__images/img_184_00a9e2f4d648.svg)

先写出

![](什么是_特征子空间（Eigenspace）__images/img_185_3e817024cab9.svg)

解

![](什么是_特征子空间（Eigenspace）__images/img_186_eb0d2b55b601.svg)

即

![](什么是_特征子空间（Eigenspace）__images/img_187_fc63afdadb6f.svg)

从第二式得

![](什么是_特征子空间（Eigenspace）__images/img_188_4278ca238814.svg)

代回第一式得

![](什么是_特征子空间（Eigenspace）__images/img_189_6d6a11f6757c.svg)

所以 z 自由。

因此

![](什么是_特征子空间（Eigenspace）__images/img_190_bc7a6e2a68ef.svg)

这还是z\-轴。

* * *

## 6\. 几何上到底发生了什么

这个矩阵

![](什么是_特征子空间（Eigenspace）__images/img_191_36bc7b2fc1ca.svg)

有两种行为：

### 在 z\-轴方向

任何

![](什么是_特征子空间（Eigenspace）__images/img_192_c036c6412c61.svg)

都会变成

![](什么是_特征子空间（Eigenspace）__images/img_193_6744e03592d0.svg)

所以z\-轴仍然是一个特征子空间。

* * *

### 在 xy 平面内

任何

![](什么是_特征子空间（Eigenspace）__images/img_194_5005433dd919.svg)

都会变成

![](什么是_特征子空间（Eigenspace）__images/img_195_05b771583fae.svg)

它仍然留在 xy 平面里，但通常**不再与原向量共线**。

也就是说：

-   它不会飞出这个平面
-   但它会在平面内“歪掉”

所以：

-   xy 平面是一个**不变子空间**
-   但不是  ![](什么是_特征子空间（Eigenspace）__images/img_196_a6a85987ec27.svg) 的特征子空间

这是很多人第一次学时最容易混淆的点。

* * *

## 7\. “不变子空间” 和 “特征子空间” 的区别

这是一个非常重要的区分。

### 不变子空间（invariant subspace）

若子空间![](什么是_特征子空间（Eigenspace）__images/img_197_b2e261321827.svg)满足

![](什么是_特征子空间（Eigenspace）__images/img_198_3e61f0938d6e.svg)

就叫![](什么是_特征子空间（Eigenspace）__images/img_199_3146f9fc3b85.svg)的不变子空间。

意思是：向量进去后，还留在这个子空间里。

* * *

### 特征子空间（eigenspace）

若子空间里每个向量都满足

![](什么是_特征子空间（Eigenspace）__images/img_200_99ebcb2ae30d.svg)

那它不仅留在原空间里，而且还是**同方向伸缩**。

所以：

**特征子空间一定是不变子空间，但不变子空间不一定是特征子空间。**

在本例里：

-   xy 平面是不变子空间
-   但不是特征子空间
-   真正的  ![](什么是_特征子空间（Eigenspace）__images/img_201_449009813792.svg) 只有 x\-轴这一条线

* * *

## 8\. 用具体向量验证

* * *

### 向量 1：![](什么是_特征子空间（Eigenspace）__images/img_202_480a3daa0311.svg)

![](什么是_特征子空间（Eigenspace）__images/img_203_10c3a5db40c7.svg)

所以它是![](D:\电脑文件\公众号知识库\数学_线性代数\什么是_特征子空间（Eigenspace）__images\img_003_a6379c0ea917.svg)的特征向量。

* * *

### 向量 2：![](什么是_特征子空间（Eigenspace）__images/img_205_6c37c8406b56.svg)

![](什么是_特征子空间（Eigenspace）__images/img_206_1f0ea844b5da.svg)

这不是

![](什么是_特征子空间（Eigenspace）__images/img_207_7543846a30de.svg)

因为第一分量冒出了![](什么是_特征子空间（Eigenspace）__images/img_208_7f735e3da9e1.svg)。

所以![](什么是_特征子空间（Eigenspace）__images/img_209_df8683439ca8.svg)不是特征向量。

这恰恰说明：

虽然它还留在![](什么是_特征子空间（Eigenspace）__images/img_210_f86abe15a839.svg)平面里，但方向变了，所以不是特征向量。

* * *

### 向量 3：![](什么是_特征子空间（Eigenspace）__images/img_211_3c7709e482ed.svg)

![](什么是_特征子空间（Eigenspace）__images/img_212_1971535d9976.svg)

这也不是原向量的倍数，所以也不是特征向量。

* * *

### 向量 4：![](什么是_特征子空间（Eigenspace）__images/img_213_bfb21b2b73dc.svg)

![](什么是_特征子空间（Eigenspace）__images/img_214_184dfb958b5e.svg)

所以这是![](什么是_特征子空间（Eigenspace）__images/img_215_b0891a1c454a.svg)的特征向量。

* * *

## 9\. 这个例子告诉我们什么

它告诉我们三件很重要的事。

### 第一件：特征子空间不要求矩阵是对角矩阵

只要存在满足

![](什么是_特征子空间（Eigenspace）__images/img_216_a0e53137607e.svg)

的一批向量，它们就会组成特征子空间。

* * *

### 第二件：重复特征值不一定带来高维特征子空间

虽然![](什么是_特征子空间（Eigenspace）__images/img_217_90334568b4d1.svg)出现了两次，但这里的![](什么是_特征子空间（Eigenspace）__images/img_218_17ab1089e667.svg)只有一维。

* * *

### 第三件：要区分“平面不变”与“平面上每个向量都是特征向量”

本例中xy平面被映回自己，但并非纯缩放，而是“缩放 + 平面内剪切”。

* * *

## 10\. 一个真正具有二维特征子空间、但又不是对角矩阵的例子

上面那个例子虽然不是对角矩阵，但![](什么是_特征子空间（Eigenspace）__images/img_219_ae3ee9c169e8.svg)的特征子空间只有 1 维。

我们再往前走一步：给一个**非对角矩阵**，同时它真的有一个**二维特征子空间**。

取

![](什么是_特征子空间（Eigenspace）__images/img_220_2c0a327aad5a.svg)

它不是对角矩阵，但我们来求![](什么是_特征子空间（Eigenspace）__images/img_221_f9525915458c.svg)的特征子空间。

先算

![](什么是_特征子空间（Eigenspace）__images/img_222_a24d57265542.svg)

解

![](什么是_特征子空间（Eigenspace）__images/img_223_d7fb8625ed69.svg)

得到

![](什么是_特征子空间（Eigenspace）__images/img_224_e5890c9a646c.svg)

而![](什么是_特征子空间（Eigenspace）__images/img_225_467b0dbf4062.svg)自由。

所以

![](什么是_特征子空间（Eigenspace）__images/img_226_2ebde981ccd4.svg)

这就是整个![](什么是_特征子空间（Eigenspace）__images/img_227_b9bc6b08f3af.svg)平面。

也就是说：

-   B 不是对角矩阵
-   但它仍然有一个二维特征子空间![](什么是_特征子空间（Eigenspace）__images/img_228_d4e1102df399.svg) 

为什么？

因为对任意![](什么是_特征子空间（Eigenspace）__images/img_229_3795e21bcb95.svg)，都有

所以平面上每个向量都只是放大 2 倍。

* * *

## 11\. 这三个例子放在一起看，就特别清楚了

### 例 1：对角矩阵

![](什么是_特征子空间（Eigenspace）__images/img_230_8a36dd4ccbd7.svg)

有二维特征子空间 ![](什么是_特征子空间（Eigenspace）__images/img_231_399b8dfc3b1a.svg) 平面。

### 例 2：非对角矩阵，但只有一维 ![](什么是_特征子空间（Eigenspace）__images/img_232_502a4fb73037.svg)

![](什么是_特征子空间（Eigenspace）__images/img_233_901f68cada17.svg)

![](什么是_特征子空间（Eigenspace）__images/img_234_a8096fc2cdcb.svg) 平面不变，但不再是特征子空间；真正的 ![](什么是_特征子空间（Eigenspace）__images/img_235_d0937fa9763f.svg) 只有 ![](什么是_特征子空间（Eigenspace）__images/img_236_75c230c569a6.svg)\-轴。

### 例 3：非对角矩阵，仍有二维 ![](什么是_特征子空间（Eigenspace）__images/img_237_0176c8dcc6e9.svg)

![](什么是_特征子空间（Eigenspace）__images/img_238_5587605396e8.svg)

虽然不是对角矩阵，但 ![](什么是_特征子空间（Eigenspace）__images/img_239_d222b3a3019b.svg) 平面上的向量仍全部满足 ![](什么是_特征子空间（Eigenspace）__images/img_240_be26009e10e2.svg)，所以它仍是二维特征子空间。

* * *

## 12\. 一句话提炼本质

判断某个平面/直线是不是特征子空间，不是看矩阵长得像不像对角矩阵，而是看：

> **这个子空间里的每个向量，经过变换后，是否都等于同一个倍数 ![](什么是_特征子空间（Eigenspace）__images/img_241_1d2ecc22b8f8.svg) 乘原向量。**

也就是检验

![](什么是_特征子空间（Eigenspace）__images/img_242_05d6eb983de1.svg)

是否对该子空间中所有向量都成立。

* * *

## 13\. 最后给一个最实用的判断流程

当你看到一个矩阵 ![](什么是_特征子空间（Eigenspace）__images/img_243_89ac1807b86d.svg)，想找特征子空间时，就按下面做：

#### 第一步：求特征值

解

![](什么是_特征子空间（Eigenspace）__images/img_244_f28e13063adc.svg)

#### 第二步：对每个特征值 ![](什么是_特征子空间（Eigenspace）__images/img_245_cbdb5861fd7e.svg)，解

![](什么是_特征子空间（Eigenspace）__images/img_246_04cdb8063d12.svg)

#### 第三步：解空间就是特征子空间

![](什么是_特征子空间（Eigenspace）__images/img_247_c4a3b0af86e0.svg)

#### 第四步：看维数

-   维数 1：一条直线
    
-   维数 2：一个平面
    
-   更高维：更高维子空间