# 什么是规范正交基 (orthonormal basis)


> 原文地址: [https://mp.weixin.qq.com/s/HB30ia3\_QhP0txbkRATGFw](https://mp.weixin.qq.com/s/HB30ia3_QhP0txbkRATGFw)

嘿！规范正交基听起来像高深数学，其实就是**一套完美的“坐标箭头系统”**。想象你在地图上定位：用“向右走3步、向上走4步”就能精确找到任何位置。这种箭头互相垂直（不互相干扰）、每步长度正好1（标准刻度），还能覆盖整个平面——这就是规范正交基！

它在物理、图形学、机器学习、信号处理里到处都在用，因为计算坐标**超级简单**，像读地图一样直观。下面我一步步拆解，配上清晰教育图解，保准你一看就懂！

### 1\. 先拆解三个关键词（通俗版）

-   **基（Basis）**
    
    一组最小向量，能通过“加倍+相加”（线性组合）拼出空间里**任意**向量。2D平面需要2个，3D空间需要3个。
    
-   **正交（Orthogonal）**
    
    向量之间**完全垂直**。数学上，**点积（内积）=0**：![](什么是规范正交基_(orthonormal_basis)_images/img_000_852729ef7130.svg)（就像x轴和y轴成90°，一个方向移动完全不影响另一个）。
    
-   **规范（Normal）**
    
    每个向量**长度正好为1**（单位向量）。长度公式：![](什么是规范正交基_(orthonormal_basis)_images/img_001_6e38b4b68cf3.svg)
    

**规范正交基** = 同时满足上面三点！ 数学上超级简洁：一组向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_002_6d5f313be9c2.svg) 满足 ![](什么是规范正交基_(orthonormal_basis)_images/img_003_343a2419a97c.svg) （![](什么是规范正交基_(orthonormal_basis)_images/img_004_927f0fe30366.svg)是Kronecker delta：i=j时=1，否则=0）。

###   

### 2\. 最经典例子：2D平面标准规范正交基

标准基向量：

-   ![](什么是规范正交基_(orthonormal_basis)_images/img_005_3bdc2c67d7c4.svg)
    
    （水平向右）
    
-   ![](什么是规范正交基_(orthonormal_basis)_images/img_006_7b34172e2ffc.svg)
    
    （垂直向上）
    

它们垂直、长度1、能表示任何平面点！

**任意向量怎么表示？** 拿 ![](什么是规范正交基_(orthonormal_basis)_images/img_007_0cd10bdd0982.svg)，它就是： ![](什么是规范正交基_(orthonormal_basis)_images/img_008_8bc5d4fbb38b.svg) 坐标系数**直接就是点积**（投影长度）：

-   x坐标 = ![](什么是规范正交基_(orthonormal_basis)_images/img_009_44b0dee23889.svg)
    
-   y坐标 = ![](什么是规范正交基_(orthonormal_basis)_images/img_010_72139071a552.svg)
    

下面这张图完美展示标准规范正交基下向量的分解（水平和垂直投影）：

![](什么是规范正交基_(orthonormal_basis)_images/img_011_6f4207ddb639.png)

图1

规范正交基（orthonormal basis），可以拆成两半来看：

-   **orthogonal**
    
    彼此正交，夹角是 ![](什么是规范正交基_(orthonormal_basis)_images/img_012_dca451ea14c4.svg)
    
-   **normal**
    
    每个向量长度都是 ![](什么是规范正交基_(orthonormal_basis)_images/img_013_6d060f9552be.svg)
    

所以，**规范正交基 = 一组“互相垂直、而且每根都被标准化为单位长度”的基向量**。

![](什么是规范正交基_(orthonormal_basis)_images/img_014_3e70a9b117b7.png)

图2

### 1\. 先说“基”到底是什么

在一个向量空间里，所谓一组**基**，就是：

-   它们能把空间里任何向量都表示出来
    
-   而且这种表示是唯一的
    

比如二维平面里，最常见的基是

![](什么是规范正交基_(orthonormal_basis)_images/img_015_f39930b8d67b.svg)

任何向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_016_32d11f0d4392.svg) 都能写成

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是规范正交基_(orthonormal_basis)_images\img_000_56b3858a46b8.svg)

三维空间里最经典的基是

![](什么是规范正交基_(orthonormal_basis)_images/img_018_58d71c2b17fd.svg)

这就是我们熟悉的 ![](什么是规范正交基_(orthonormal_basis)_images/img_019_1cf0e376cb9d.svg) 三个坐标轴方向。

  

### 2\. 什么叫“正交基”

如果一组基里面，不同向量两两垂直，就叫**正交基**。

例如三维里：

![](什么是规范正交基_(orthonormal_basis)_images/img_020_edf443a2382d.svg)

它们彼此垂直，所以这是一个**正交基**。  
但它**不是规范正交基**，因为它们的长度不是 1：

![](什么是规范正交基_(orthonormal_basis)_images/img_021_7e98af1fbc68.svg)

  

### 3\. 什么叫“规范正交基”

如果除了彼此垂直以外，还满足每个向量都是单位向量：

![](什么是规范正交基_(orthonormal_basis)_images/img_022_f1e47278edf5.svg)

那么这组基就叫**规范正交基**。

数学上常写成：

![](什么是规范正交基_(orthonormal_basis)_images/img_023_4d2d0643f736.svg)

也可以简写为

![](什么是规范正交基_(orthonormal_basis)_images/img_024_dd3c65483e01.svg)

这里 ![](什么是规范正交基_(orthonormal_basis)_images/img_025_1bb20cf09ca8.svg) 是 Kronecker delta：同一个下标时为 1，不同下标时为 0。

  

### 4\. 结合图2里的意思来理解

图中蓝色的 ![](什么是规范正交基_(orthonormal_basis)_images/img_026_c99114ebd12b.svg) 是互相正交的，绿色的

![](什么是规范正交基_(orthonormal_basis)_images/img_027_6ef62131d5d2.svg)

是向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_028_9f368f4f1298.svg) 在平面 ![](什么是规范正交基_(orthonormal_basis)_images/img_029_c33295475dfe.svg) 上的投影。

如果 ![](什么是规范正交基_(orthonormal_basis)_images/img_030_0c465bcddb3d.svg) 不但正交，而且长度还都是 1，那么它们就是这个平面里的一组**规范正交基**。

这时有个特别漂亮的性质：

![](什么是规范正交基_(orthonormal_basis)_images/img_031_fd96f63ff2c1.svg)

于是投影可以直接写成

![](什么是规范正交基_(orthonormal_basis)_images/img_032_4b3f8b60fc71.svg)

这个公式之所以这么干净，就是因为 ![](什么是规范正交基_(orthonormal_basis)_images/img_033_d790523c78ad.svg) 是**规范正交**的。

  

### 5\. 为什么“规范正交基”特别好用

它最大的好处是：**坐标提取特别简单**。

一般情况下，若一组基不是规范正交的，要把向量分解到这组基上，往往要解方程组。  
但如果是规范正交基，坐标直接就是内积：

![](什么是规范正交基_(orthonormal_basis)_images/img_034_db15510d5e2d.svg)

这非常像“把影子投到每个轴上”。

也就是说：

-   ![](什么是规范正交基_(orthonormal_basis)_images/img_035_e0ad0ce8ee77.svg)
    
    就是 ![](什么是规范正交基_(orthonormal_basis)_images/img_036_37d5507d78e8.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_037_d8fa0940dfca.svg) 方向上的分量
    
-   ![](什么是规范正交基_(orthonormal_basis)_images/img_038_41817c797a24.svg)
    
    就是 ![](什么是规范正交基_(orthonormal_basis)_images/img_039_4bf2ff412cfb.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_040_34f266fd9508.svg) 方向上的分量
    
-   ![](什么是规范正交基_(orthonormal_basis)_images/img_041_6fde83c01e10.svg)
    
    就是 ![](什么是规范正交基_(orthonormal_basis)_images/img_042_ef72966dbe61.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_043_885090896072.svg) 方向上的分量
    

这就是为什么在欧氏空间里，规范正交基几乎是“最舒服”的坐标系。

  

### 6\. 一个二维直观例子

标准基

![](什么是规范正交基_(orthonormal_basis)_images/img_044_3b874c819930.svg)

就是一组规范正交基，因为：

![](什么是规范正交基_(orthonormal_basis)_images/img_045_e3902cb10662.svg)

给定向量

![](什么是规范正交基_(orthonormal_basis)_images/img_046_674560eb8d80.svg)

那么

![](什么是规范正交基_(orthonormal_basis)_images/img_047_ed39e34eaaf5.svg)

因为

![](什么是规范正交基_(orthonormal_basis)_images/img_048_bdf369b9ae23.svg)

所以

![](什么是规范正交基_(orthonormal_basis)_images/img_049_b640865884ae.svg)

这其实就是最普通的横坐标、纵坐标。

  

### 7\. 一个三维例子

设

![](什么是规范正交基_(orthonormal_basis)_images/img_050_736442255cae.svg)

先看它们是不是规范正交：

#### 长度

![](什么是规范正交基_(orthonormal_basis)_images/img_051_60f937f97db3.svg)

#### 两两点积

![](什么是规范正交基_(orthonormal_basis)_images/img_052_e50499327842.svg)

![](什么是规范正交基_(orthonormal_basis)_images/img_053_9591aa4fbbc6.svg)

所以这三根向量构成一组**规范正交基**。

现在给

![](什么是规范正交基_(orthonormal_basis)_images/img_054_f04e10912ad6.svg)

则它在这组基下的坐标就是：

![](什么是规范正交基_(orthonormal_basis)_images/img_055_9b931988626a.svg)

![](什么是规范正交基_(orthonormal_basis)_images/img_056_b7cd015d8588.svg)

![](什么是规范正交基_(orthonormal_basis)_images/img_057_a2692e35fa48.svg)

于是

![](什么是规范正交基_(orthonormal_basis)_images/img_058_8a119bc9e46e.svg)

这说明：即使基不是标准的 ![](什么是规范正交基_(orthonormal_basis)_images/img_059_ceafcbb3155c.svg) 方向，只要它是规范正交基，坐标照样很好算。

  

### 8\. 从矩阵角度看

如果把这组规范正交基向量作为列排成矩阵

![](什么是规范正交基_(orthonormal_basis)_images/img_060_3ce337216caf.svg)

那么就有

![](什么是规范正交基_(orthonormal_basis)_images/img_061_32ab98a76d86.svg)

这样的矩阵叫**正交矩阵**（实数情形）。

这意味着：

-   列向量彼此正交
    
-   每列长度为 1
    

也就是说，**矩阵的列构成规范正交基**。

这时：

![](什么是规范正交基_(orthonormal_basis)_images/img_062_47f16b3cc315.svg)

所以很多计算会变得特别简洁。

  

### 9\. 几何上怎么理解

你可以把规范正交基想成一组“理想坐标尺”：

-   每根尺子都和别的尺子垂直，不互相干扰
    
-   每根尺子的刻度长度都统一为 1
    

所以一个向量投到这些尺子上时：

-   不会“串台”
    
-   不会因为尺子长短不同而额外缩放
    
-   坐标值就是纯净的“投影长度”
    

这正是图里那种分解思想的最优版本。

  

### 10\. 和“普通基”相比，本质优势是什么

普通基也能表示向量，但可能会有这些麻烦：

-   基向量不垂直，分量之间互相牵扯
    
-   基向量长度不统一，坐标值不再等于真实投影长度
    
-   求系数时要解联立方程
    

而规范正交基把这些麻烦都消掉了：

![](什么是规范正交基_(orthonormal_basis)_images/img_063_a833dd1eeaa3.svg)

这是它最核心的美。

  

### 11\. 一句话总结

**规范正交基，就是一组既互相垂直、又都长度为 1 的基。**

它的最大价值在于：

-   分解向量最自然
    
-   投影公式最简洁
    
-   坐标系最稳定
    
-   矩阵计算最漂亮
    

图2本质上就在说明一件事：  
当 ![](什么是规范正交基_(orthonormal_basis)_images/img_064_c52ed4894908.svg) 是一组规范正交向量时，向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_065_fb0d92e7fac8.svg) 在它们张成平面上的投影，可以非常自然地分解为沿 ![](什么是规范正交基_(orthonormal_basis)_images/img_066_9f20e1d09f98.svg)、![](什么是规范正交基_(orthonormal_basis)_images/img_067_77ec78b1c205.svg) 两个方向的“独立分量”。

##   

## [Gram-Schmidt](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247495925&idx=1&sn=52bb8bcd6a1da71cb03d9ef558328884&scene=21#wechat_redirect) 如何把普通基变成规范正交基？

在上篇《[格拉姆-施密特（Gram-Schmidt） 正交化](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247495925&idx=1&sn=52bb8bcd6a1da71cb03d9ef558328884&scene=21#wechat_redirect)》，我们做了介绍，再度温习其中讲过的内容。Gram–Schmidt 的作用，就是把一组“普通基”一步步加工成一组**规范正交基**。

你可以把它理解成两步反复循环：

1.  **去掉前面方向的污染**
    
    ，让新向量和前面的都垂直
    
2.  **再单位化**
    
    ，把长度调成 1
    

所以它本质上是在做：

> “先正交化，再归一化”

##   

## 1\. 为什么需要 Gram–Schmidt

假设你手里有一组线性无关向量

![](什么是规范正交基_(orthonormal_basis)_images/img_068_7bc9513cbeed.svg)

它们能张成某个空间，但往往有两个问题：

-   不互相垂直
    
-   长度也不一定是 1
    

Gram–Schmidt 会把它们变成

![](什么是规范正交基_(orthonormal_basis)_images/img_069_67fbe26980b4.svg)

满足：

-   彼此正交
    
-   每个长度为 1
    
-   张成的空间和原来一样
    

也就是：

![](什么是规范正交基_(orthonormal_basis)_images/img_070_2357c46cacc4.svg)

对每一步都成立。

这点很重要：**它不是换了一个空间，而是给同一个空间换了一组更“干净”的坐标轴。**

## 2\. 先讲最直观的二维版本

假设平面里有两根不共线向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_071_3f1b75f2c924.svg)。

我们想把它们变成两根互相垂直、长度都为 1 的向量。

### 第一步：处理第一根

先把第一根变成单位长度：

![](什么是规范正交基_(orthonormal_basis)_images/img_072_4d7339d519da.svg)

这很简单，就是保留方向，只把长度缩成 1。

### 第二步：处理第二根

第二根 ![](什么是规范正交基_(orthonormal_basis)_images/img_073_e12568216d7a.svg) 往往不垂直于 ![](什么是规范正交基_(orthonormal_basis)_images/img_074_4c88915760ce.svg)。  
所以先把它在 ![](什么是规范正交基_(orthonormal_basis)_images/img_075_2625a24bf601.svg) 方向上的那部分去掉。

![](什么是规范正交基_(orthonormal_basis)_images/img_076_bbea1db7db9f.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_077_7051d42239b3.svg) 上的投影是：

![](什么是规范正交基_(orthonormal_basis)_images/img_078_6a48d98b13cd.svg)

于是定义

![](什么是规范正交基_(orthonormal_basis)_images/img_079_374fcdbc3eef.svg)

这一步的意思是：

-   ![](什么是规范正交基_(orthonormal_basis)_images/img_080_ced47827c93a.svg)
    
     原来斜着
    
-   减去它沿 ![](什么是规范正交基_(orthonormal_basis)_images/img_081_56c73af4f0a0.svg) 的分量
    
-   剩下来的 ![](D:\电脑文件\公众号知识库\数学_线性代数\什么是规范正交基_(orthonormal_basis)_images\img_001_e685684dce67.svg) 就只保留“垂直于 ![](什么是规范正交基_(orthonormal_basis)_images/img_083_dfe160a78ee4.svg)”的部分
    

所以此时

![](什么是规范正交基_(orthonormal_basis)_images/img_084_3e178e29b1f0.svg)

最后再单位化：

![](什么是规范正交基_(orthonormal_basis)_images/img_085_cfe96f6cfb0c.svg)

这样 ![](什么是规范正交基_(orthonormal_basis)_images/img_086_ccc1ab06ed44.svg) 就是一组规范正交基了。

  

## 3\. 几何直觉：它到底在干什么

可以把 Gram–Schmidt 想成“做直角坐标系”：

-   第一根向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_087_612b42b38393.svg)，直接拿来当第一条轴，再缩成单位长度
    
-   第二根向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_088_7c22746cd56a.svg)，不能直接用，因为它斜着掺了第一条轴的成分
    
-   所以先把“沿第一条轴的影子”减掉
    
-   剩下的纯垂直部分，拿来做第二条轴
    
-   然后再缩成单位长度
    

到了三维时：

-   第三根向量里，可能混着第一轴和第二轴的成分
    
-   就把这两部分投影都减掉
    
-   剩下来的，就是垂直于前两个方向的“纯新方向”
    
      
    

## 4\. 三维版本最重要

给定三根线性无关向量

![](什么是规范正交基_(orthonormal_basis)_images/img_089_bc9fd6b3bc26.svg)

我们构造：

### 第一步

![](什么是规范正交基_(orthonormal_basis)_images/img_090_4ca8ff4d8fb7.svg)

### 第二步

先去掉 ![](什么是规范正交基_(orthonormal_basis)_images/img_091_8384b681e80b.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_092_6069f9bfc0f5.svg) 方向上的分量：

![](什么是规范正交基_(orthonormal_basis)_images/img_093_002bd81b3396.svg)

再单位化：

![](什么是规范正交基_(orthonormal_basis)_images/img_094_d3d42e01375b.svg)

### 第三步

第三根要同时去掉在 ![](什么是规范正交基_(orthonormal_basis)_images/img_095_194eb12cd248.svg) 和 ![](什么是规范正交基_(orthonormal_basis)_images/img_096_169964dbf476.svg) 方向上的分量：

![](什么是规范正交基_(orthonormal_basis)_images/img_097_42487ab73781.svg)

再单位化：

![](什么是规范正交基_(orthonormal_basis)_images/img_098_c1beb2c840e1.svg)

这样就得到规范正交基

![](什么是规范正交基_(orthonormal_basis)_images/img_099_f7edec2b141d.svg)

## 5\. 一般公式

对第 ![](什么是规范正交基_(orthonormal_basis)_images/img_100_9ec2b2eebd22.svg) 个向量：

先定义正交化后的向量

![](什么是规范正交基_(orthonormal_basis)_images/img_101_701f80f44aeb.svg)

然后归一化：

![](什么是规范正交基_(orthonormal_basis)_images/img_102_32185ed49a6d.svg)

这就是 Gram–Schmidt 的标准公式。

含义非常明确：

-   ![](什么是规范正交基_(orthonormal_basis)_images/img_103_d7a7ee33800a.svg)
    
     是 ![](什么是规范正交基_(orthonormal_basis)_images/img_104_e203258ab103.svg) 在第 ![](什么是规范正交基_(orthonormal_basis)_images/img_105_7066067ef4ec.svg) 个已建好方向上的投影
    
-   把所有旧方向的投影都减掉
    
-   剩下的就是新方向
    
-   再把它变成单位长度
    
      
    

## 6\. 一个完整的 3D 整数例子

我们用一组很适合手算的向量：

![](什么是规范正交基_(orthonormal_basis)_images/img_106_ee44a996176b.svg)

来做 Gram–Schmidt。

### 第一步：构造 ![](什么是规范正交基_(orthonormal_basis)_images/img_107_69ac08659266.svg)

先取

![](什么是规范正交基_(orthonormal_basis)_images/img_108_4f1f43c4e983.svg)

长度：

![](什么是规范正交基_(orthonormal_basis)_images/img_109_bb08fa4ccdec.svg)

所以

![](什么是规范正交基_(orthonormal_basis)_images/img_110_2ecde1e567da.svg)

### 第二步：构造 ![](什么是规范正交基_(orthonormal_basis)_images/img_111_d3adcec15532.svg)

先算 ![](什么是规范正交基_(orthonormal_basis)_images/img_112_02edadf83397.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_113_174d01ff7f51.svg) 上的投影系数：

![](什么是规范正交基_(orthonormal_basis)_images/img_114_ddb4850b96c7.svg)

所以投影向量为：

![](什么是规范正交基_(orthonormal_basis)_images/img_115_4bf2f30a4d95.svg)

于是

![](什么是规范正交基_(orthonormal_basis)_images/img_116_d1113c6793f1.svg)

现在它已经与 ![](什么是规范正交基_(orthonormal_basis)_images/img_117_382bdcda4663.svg) 正交。

检查一下：

![](什么是规范正交基_(orthonormal_basis)_images/img_118_e5ad738deb99.svg)

长度：

![](什么是规范正交基_(orthonormal_basis)_images/img_119_4a3b3a5fa2f2.svg)

所以

![](什么是规范正交基_(orthonormal_basis)_images/img_120_edc04e23f327.svg)

更好看的形式是乘一下：

![](什么是规范正交基_(orthonormal_basis)_images/img_121_8c294e4f44ff.svg)

  

### 第三步：构造 ![](什么是规范正交基_(orthonormal_basis)_images/img_122_f59216cbf398.svg)

先算 ![](什么是规范正交基_(orthonormal_basis)_images/img_123_9449bc96ce36.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_124_936587dea290.svg) 上的投影系数：

![](什么是规范正交基_(orthonormal_basis)_images/img_125_2c2c9edbbe1c.svg)

所以对应投影是

![](什么是规范正交基_(orthonormal_basis)_images/img_126_66454cdaf3b8.svg)

再算 ![](什么是规范正交基_(orthonormal_basis)_images/img_127_9c62ced28597.svg) 在 ![](什么是规范正交基_(orthonormal_basis)_images/img_128_51526de7bb19.svg) 上的投影系数：

![](什么是规范正交基_(orthonormal_basis)_images/img_129_cf0df0404767.svg)

对应投影是：

![](什么是规范正交基_(orthonormal_basis)_images/img_130_3447303642b6.svg)

于是

![](什么是规范正交基_(orthonormal_basis)_images/img_131_4868eb655625.svg)

即

![](什么是规范正交基_(orthonormal_basis)_images/img_132_0a4dfc387569.svg)

先减前两个：

![](什么是规范正交基_(orthonormal_basis)_images/img_133_b2c95845c799.svg)

再减第三个：

![](什么是规范正交基_(orthonormal_basis)_images/img_134_1a82281f6fdc.svg)

可以提出来：

![](什么是规范正交基_(orthonormal_basis)_images/img_135_7b51a3801f37.svg)

长度：

![](什么是规范正交基_(orthonormal_basis)_images/img_136_9d83651e71b8.svg)

归一化后得到

![](什么是规范正交基_(orthonormal_basis)_images/img_137_e956d5621c24.svg)

##   

## 7\. 最终得到的规范正交基

所以由

![](什么是规范正交基_(orthonormal_basis)_images/img_138_64a0a0b94655.svg)

经过 Gram–Schmidt 得到：

![](什么是规范正交基_(orthonormal_basis)_images/img_139_a8e0d61c2b0e.svg)

![](什么是规范正交基_(orthonormal_basis)_images/img_140_a5f01b7a8683.svg)

![](什么是规范正交基_(orthonormal_basis)_images/img_141_8c65066672e0.svg)

它们满足：

![](什么是规范正交基_(orthonormal_basis)_images/img_142_e185a22acb52.svg)

所以这就是一组规范正交基。

  

## 8\. 为什么它一定能成功

前提是原向量组

![](什么是规范正交基_(orthonormal_basis)_images/img_143_5317493eb69a.svg)

必须**线性无关**。

因为如果某一步得到的

![](D:\电脑文件\公众号知识库\数学_线性代数\什么是规范正交基_(orthonormal_basis)_images\img_002_9cfbbe865f22.svg)

说明 ![](什么是规范正交基_(orthonormal_basis)_images/img_145_b31d6a33099d.svg) 完全落在前面那些向量张成的空间里，没有“新方向”了。  
这就意味着原来的向量组线性相关。

所以：

-   **线性无关**![](什么是规范正交基_(orthonormal_basis)_images/img_146_4eaa857b38b2.svg)
    
     每一步都能提取出新的正交方向
    
-   **线性相关**![](什么是规范正交基_(orthonormal_basis)_images/img_147_be8386211bdb.svg)
    
     某一步会卡住
    

##   

## 9\. Gram–Schmidt 的本质图像

它不是“凭空制造新向量”，而是这样：

-   第 1 根：直接拿来
    
-   第 2 根：去掉朝第 1 根的分量
    
-   第 3 根：去掉朝前 2 根的分量
    
-   第 4 根：去掉朝前 3 根的分量
    
-   ……
    

所以每一步都像在做：

> “把旧方向的影子全部扣掉，只保留真正新的那一部分”

最后再把每根都缩成长度 1。

##   

## 10\. 它和投影的关系特别紧

Gram–Schmidt 其实就是**投影思想的连续使用**。

因为每一步都在做：

![](什么是规范正交基_(orthonormal_basis)_images/img_148_551bee9d3fa8.svg)

例如第三步：

![](什么是规范正交基_(orthonormal_basis)_images/img_149_66433cb22b4b.svg)

而

![](什么是规范正交基_(orthonormal_basis)_images/img_150_5698a593e4f8.svg)

所以 Gram–Schmidt 可以看成：

> 反复从向量里“剥离掉”已经解释过的部分，只留下新的正交信息。

这在数值线性代数、最小二乘、QR 分解里都非常核心。

##   

## 11\. 和 QR 分解的关系

如果把原向量组作为矩阵 ![](什么是规范正交基_(orthonormal_basis)_images/img_151_c44f338a9eef.svg) 的列：

![](什么是规范正交基_(orthonormal_basis)_images/img_152_d931cb1251f5.svg)

Gram–Schmidt 最后得到一组规范正交列向量 ![](什么是规范正交基_(orthonormal_basis)_images/img_153_a2d6b2728a02.svg)：

![](什么是规范正交基_(orthonormal_basis)_images/img_154_4d8c096b6ab2.svg)

同时会出现一个上三角矩阵 ![](什么是规范正交基_(orthonormal_basis)_images/img_155_f9767210e1e8.svg)，使得

![](什么是规范正交基_(orthonormal_basis)_images/img_156_974efcdf6468.svg)

这就是 **QR 分解**。

其中：

-   ![](什么是规范正交基_(orthonormal_basis)_images/img_157_dfa71ec8203b.svg)
    
     的列是规范正交基
    
-   ![](什么是规范正交基_(orthonormal_basis)_images/img_158_0ed91f245c22.svg)
    
     记录“原向量如何由这些正交方向组合而成”
    

所以 Gram–Schmidt 不只是几何方法，也是矩阵分解算法。

##   

## 12\. 一句话抓住核心

Gram–Schmidt 的核心就是：

![](什么是规范正交基_(orthonormal_basis)_images/img_159_12dfe0d5a3f4.svg)**减投影，得正交；再归一，得规范**

也就是：

-   把旧方向成分减掉
    
-   留下新方向
    
-   再标准化成单位长度
    

##   

## 13\. 最后给你一个特别直观的口语版

假设你要在空间里立三根“互相垂直的标准杆”：

-   第一根杆子，随便拿第一根向量，削成单位长度
    
-   第二根杆子，把它斜着指向第一根的那部分锯掉，只保留垂直那部分，再削成单位长度
    
-   第三根杆子，把它朝前两根的成分都刮掉，只保留真正“跳出那个平面”的部分，再削成单位长度
    

这就是 Gram–Schmidt。