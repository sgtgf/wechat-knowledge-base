# 格拉姆-施密特（Gram-Schmidt） 正交化


> 原文地址: [https://mp.weixin.qq.com/s/8VQVhXXFm7IGCBuGzEzusw](https://mp.weixin.qq.com/s/8VQVhXXFm7IGCBuGzEzusw)

在上篇《[Gram-Schmidt 正交化过程简介](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247489146&idx=1&sn=67ae8f9599bfe9690770c3c87520cd2f&scene=21#wechat_redirect)》中，我们做了简单介绍，本篇中，我们继续深入学习。

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_000_9c96837b1113.png)

图1

图片中的内容是**线性代数中 Gram-Schmidt 正交化过程（Gram-Schmidt orthonormalization）的第 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_001_d57313368b5c.svg) 步示意图**，用来从一组线性无关向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_002_35002fee5a61.svg) 逐步构造出一组**标准正交基**![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_003_67372763faac.svg)。

#### 几何意义（看图最直观的部分）

-   橘红色平面代表前 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_004_be07a7f730ef.svg) 个标准正交向量张成的子空间：  
    ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_005_6ff8d7a0b821.svg)
    
    意思是：前面已经构造好了 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_006_7333e8c1eb44.svg) 个单位正交向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_007_c8f72bb49102.svg)。  
    它们张成了一个“旧平面/旧空间” ![](D:\电脑文件\公众号知识库\数学_线性代数\格拉姆_施密特（Gram_Schmidt）_正交化_images\img_000_8f4695763bfe.svg)（图里那块粉色平面）。
    
-   蓝色向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_009_2c3ca42b4d23.svg) 是第 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_010_29b47c3a314a.svg) 个原始输入向量（可能不正交于前面的向量）。
    
-   绿色垂直箭头 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_011_acb98cad75ee.svg) 是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_012_2ed2170cc6be.svg) 在垂直于平面的方向上的“剩余部分”（即与 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_013_1778aa10d646.svg) 正交的分量）。
    
-   通过减去 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_014_08e873b1af01.svg) 在平面上的所有投影，就得到了这个垂直分量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_015_c57006dcd07d.svg)，再把它归一化（单位化）就得到新的标准正交向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_016_edee125e6bf1.svg)（绿色向上箭头）。
    

图中还用虚线方框和小箭头直观展示了“从 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_017_a0f6be5c9174.svg) 扣掉平面投影”的过程。

#### 公式详细解释

图1里一共有两个核心公式，对应 Gram-Schmidt 算法的标准第 n 步：

1.  **求正交分量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_018_578e48f1ddce.svg)（绿色框 + 蓝色框部分）：**

-    ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_019_54d402fa3995.svg) 是[内积](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488845&idx=1&sn=9d5057c3d5e922959ac0e0769fc4808e&scene=21#wechat_redirect)（点积），因为 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_020_3f86b3464c3b.svg) 已经是单位向量，所以这个内积就是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_021_762c78c72aff.svg) 在 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_022_c0a079d13186.svg) 方向上的**投影长度**。
-   乘以 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_023_62925c9b26a7.svg) 就得到 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_024_c3c095b66bf6.svg) 在 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_025_f63fb6840efc.svg) 方向上的**投影向量**。
    
-   把所有 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_026_fd5f7edc0bf1.svg) 到 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_027_3fe084efba5b.svg) 的投影向量全部加起来，就是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_028_f926a4de1519.svg) 在整个平面 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_029_e3bb9bac7c01.svg) 上的投影。
    
-   减去这个投影，就得到与平面完全正交的剩余向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_030_2e654ce82a28.svg)（绿色垂直箭头）。
    
-   结果：![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_031_aecdbe73a0bd.svg)（对所有 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_032_607946fb8308.svg)），即 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_033_b5c1b4af21c0.svg) 垂直于整个 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_034_905367758633.svg)。
    

2.  **单位化得到 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_035_5a0f298db66d.svg)（红色框）：
    
    ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_036_f9bd2733e930.svg)
    
    **

-    ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_037_523a1cb620f0.svg) 是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_038_c1c1c1d36023.svg) 的[欧几里得范数](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488284&idx=1&sn=c06172b28f65385bc2299f87ce36ccb3&scene=21#wechat_redirect)（长度）。
-    ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_039_e36e31099a69.svg) 已经垂直于旧子空间了，但它长度不一定是 1。
-   用 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_040_6742842bb7fe.svg) 除以自己的长度，就是把它缩放成**单位长度，**![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_041_ebda9ecd115b.svg) 就变成了**单位向量**（长度为 1），同时仍然保持与前面所有 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_042_ee4e12fdcec5.svg) 正交。因此 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_043_df2d63b465bf.svg) 是一个：
    
    -   长度为 1 的单位向量
        
    -   且与 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_044_74f282d8beae.svg) 都正交的新方向
        
-   这样 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_045_de90ff095e36.svg) 就构成了一个标准正交集（orthonormal set）。
    

##   

####   

#### 整个过程的意义

-   这是一个**迭代算法**：从 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_046_fe93564dfa14.svg) 开始（![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_047_e5fe36a2cc57.svg)），每一步都用前面的结果来“正交化”下一个向量。
    
-   最终得到的 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_048_d2b9e5135bc3.svg) 既**正交**（两两内积为 0），又**单位化**（每个长度为 1），在数值计算、QR 分解、最小二乘、信号处理等领域极其重要。
    
-   如果 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_049_8d3dca5e8f25.svg)（即 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_050_d78b07698b33.svg) 已经在 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_051_dfc15d549153.svg) 里），说明向量线性相关，算法会停止（说明原向量组不独立）。
    

  

## 一句话总结这两行公式

-   第一行：**“去掉旧方向”**（减去投影），得到垂直剩余 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_052_ef0bfc2887ec.svg)
    
-   第二行：**“单位化”**（归一化），得到新的正交单位基向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_053_7a71b6cd9032.svg)
    

  

一句话总结图片：  
**“把 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_054_44a014579b97.svg) 里面跟前面向量重叠的部分全部扣掉，剩下垂直的部分，再把它缩放到长度 1，就得到新的正交基向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_055_6301858a8704.svg)。”**

**“前面向量”** 在这句话里**特指**：已经构造好的**标准正交向量**![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_056_1f1bebbef9df.svg)，**而不是**原始输入向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_057_4e1a9ca6f754.svg)。

这是最容易混淆的一点，我来一步步说清楚：

### 1\. 通俗说法 vs 精确公式

你看到的那句“把 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_058_e92a18d4b80f.svg) 里面跟前面向量重叠的部分全部扣掉”，其实是**通俗概括**。 真正“扣掉”的东西，是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_059_eeecc4bd661a.svg) 在**前面已正交化好的向量**上的投影。

精确公式（图1里的蓝色框）：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_060_77d9a09b66cc.svg)

-   这里求和里出现的**只有 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_061_aa139ebb7594.svg)** （不是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_062_e7b7860e95aa.svg)！）
    
-   所以“前面向量” = ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_063_135ccc22211d.svg)
    
      
    

2.  为什么必须用 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_064_c9e1b28ccd13.svg)，而不是原始 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_065_2b0c15780a63.svg)?
    

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_066_2726e4a8ada2.svg) 到![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_067_6100bb1a7654.svg)可能互相不正交（有夹角），直接投影到它们上面会出错。 而 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_068_ab677ef5ca27.svg) 到![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_069_40d0ad0db910.svg) 已经是标准正交的（两两垂直 + 长度1），所以： 内积 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_070_84734b6b5ec3.svg) 直接就是投影长度 减去后 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_071_692dadd20400.svg) _自动与整个前面的平面_ ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_072_2b5f02d4fb2c.svg) 垂直

如果你错误地用原始 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_073_5e4618ac0f11.svg) 去减（古典版早期误区），结果就不正交了。

这就是 Gram-Schmidt 过程的核心几何与代数含义！

**三维 Gram-Schmidt 正交化例子**（完美对应图片）

我们用一个\*\*3 维（x,y,z）\*\*的具体数值例子，把图里的两条公式完整跑一遍（Gram–Schmidt 第 1、2、3 步）。

我选 3 个“原始向量”（它们一般不正交）：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_074_e78426fe6682.svg)

* * *

### 第 1 步：先做 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_075_aa9ad2cb2961.svg)

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_076_ade7717652ca.svg)

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_077_48e4af8cb8a5.svg)

* * *

### 第 2 步：用图中公式算 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_078_8f22731252ca.svg)，再归一化成 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_079_47756c974493.svg)

图中核心公式（这里 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_080_66301e978060.svg)）：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_081_d4ae7594e5e0.svg)

先算内积：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_082_0f3d93458ec1.svg)

投影项：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_083_482f830a4d2b.svg)

所以

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_084_7bee7119e825.svg)

归一化得到

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_085_eff13ced4065.svg)

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_086_a548f98996f1.svg)

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_087_34a7d5e1bc84.svg)

此时旧子空间就是图里的

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_088_d706b8c5c26e.svg)

* * *

### 第 3 步：用图中公式算 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_089_42d4f948ff22.svg)，再归一化成 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_090_5b26625663a0.svg)

图中公式（这里 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_091_4350b48461b6.svg)）：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_092_cce58f70db4c.svg)

先算 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_093_d208011dae90.svg)：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_094_54eca92a47b7.svg)

再算 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_095_05238b85435b.svg)：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_096_6483597c8481.svg)

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_097_32ae669dda24.svg)

于是

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_098_f307f9d653f1.svg)

归一化：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_099_a892bc5d528e.svg)

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_100_61920820222e.svg)

* * *

### 结果在“图像语言”里的意思

-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_101_8058ebe936d3.svg)
    
     是把 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_102_83a9f9269302.svg) 在 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_103_74276306ea8c.svg)（旧方向）上的投影扣掉后的“垂直剩余”，所以 **![](D:\电脑文件\公众号知识库\数学_线性代数\格拉姆_施密特（Gram_Schmidt）_正交化_images\img_001_085a886d9e3e.svg)**
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_105_570abf392920.svg)
    
     是把 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_106_d9e6035684f3.svg) 在旧平面 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_107_30c88f7c685b.svg) 里的投影全扣掉后的“垂直剩余”，所以  **![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_108_5506a5dd5204.svg) 且 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_109_fb131e92aacf.svg)** 
    
-   再把 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_110_cf6d78bbada5.svg) 除以长度，就得到单位向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_111_6fa183f290d5.svg)
    

  

下面是一个gif直观图：包含

-   原始向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_112_c8659d8fae71.svg)
    
-   正交单位向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_113_c8b38eff7912.svg)
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_114_757f2abbee1b.svg)
    
     在旧子空间 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_115_3a75a250ae84.svg) 上的投影 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_116_7c4e96378b40.svg)
    
-   正交“剩余” ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_117_4b04fe49cbc4.svg)
    
-   以及平面 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_118_86f5d68e287b.svg)（半透明）
    
-   每类箭头用**不同颜色**（原始向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_119_1e5660703daf.svg)、正交基 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_120_dfd922eb62e8.svg)、投影 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_121_0a1163ab5007.svg)、剩余 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_122_cfe55c29edb5.svg)）
    
-   做一个**旋转视角**（更直观）
    

* * *

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_123_c94c7e74ad6f.gif)

**图2**

**Gram-Schmidt 正交化过程的数学原理（严谨版）**

Gram-Schmidt 算法的**核心目标**：  
给定内积空间（通常是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_124_fb567ae9d05f.svg)）中一组**线性无关**向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_125_cd291908306f.svg)，构造一组**标准正交基**（orthonormal basis）![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_126_3e841b7bc686.svg)，满足：

-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_127_a89460a267d2.svg)
    
    （单位向量）
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_128_7b5bc10ba1cc.svg)
    
    （![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_129_dfe348a3ef88.svg) 时正交）
    
      
    

#### 1\. 算法递推公式（对应图1的核心）

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_130_54ab9fe1a757.svg)

#### 2\. 为什么这个公式能“扣掉所有投影”？

关键在于**正交投影定理**（Projection Theorem）：

对于任意向量 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_131_ca011049146c.svg) 和子空间 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_132_b46ee3c67713.svg)（前 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_133_0c6457db5327.svg) 个标准正交向量张成的空间），![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_134_cbd9fc500da5.svg) 可以唯一分解为：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_135_2a5915ecee56.svg)

其中正交投影的公式正是：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_136_8beab5343d26.svg)

（因为 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_137_e526843f3a2d.svg) 已经是标准正交的，所以系数直接就是内积）

因此：

![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_138_1763d71ef37b.svg)

即 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_139_b392ae2887dc.svg) 与前面所有 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_140_23120ec2143e.svg)（![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_141_2e59ced46b58.svg)）都正交。

再归一化就得到 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_142_68c5623f1738.svg)，整个集合保持正交性。

#### 3\. 数学证明（归纳法）

**命题**：算法输出的 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_143_a936cf730624.svg) 是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_144_1d60c98703eb.svg) 的标准正交基。

**基情（k=1）**：显然成立。

**归纳假设**：假设前 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_145_f05dee555891.svg) 步成立，即 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_146_70c33131da5a.svg) 是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_147_1fb333943b09.svg) 的标准正交基，且 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_148_7cc7bd1eb2c0.svg).

**归纳步骤（k步）**：

-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_149_6051b54ddfc9.svg)
    
    （![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_150_cedd3ab6e286.svg)）由投影公式直接得到。
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_151_baa0a88f0e4f.svg)
    
    （因为 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_152_78195cdb58c2.svg)，原向量组线性无关）。
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_153_17cf9bc2ec07.svg)
    
     单位化后仍与前面正交。
    
-   线性张成：  
    
    ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_154_0743ad06b484.svg)，
    
    所以
    

   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_155_f60e58f14624.svg).

归纳完成。

#### 4\. 几何直观（对应你看过的 3D 动画）

-   半透明平面 = ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_156_af2dbb3a2c91.svg)
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_157_40853e91abd4.svg)
    
     落在平面上的“影子” = 绿色投影向量
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_158_1109333b159f.svg)
    
     = 红色垂直箭头（与平面正交）
    
-   ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_159_27827fbe7a06.svg)
    
     = 红色单位向量（沿着 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_160_f58976c22041.svg) 方向）
    

这就是你 GIF 里“逐步出现”的过程：先有原始向量 → 显示投影 → 出现垂直分量 → 最终归一化。

#### 5\. 重要性质与推广

-   **QR 分解**
    
    Gram-Schmidt 本质就是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_161_44b2e2f02727.svg)（![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_162_836c878ab201.svg) 的列是 ![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_163_331b3e7c45ff.svg)，![](格拉姆_施密特（Gram_Schmidt）_正交化_images/img_164_4fd61750d1fe.svg) 是上三角矩阵，记录投影系数）。
    
-   **数值稳定性**
    
    经典版有舍入误差积累 → 改进版（Modified Gram-Schmidt）更稳定。
    
-   **推广**
    
    适用于任意内积空间（希尔伯特空间、函数空间、傅里叶级数等）。
    

  

一句话总结数学原理：  
**“通过逐次减去在已有正交基张成子空间上的正交投影，得到与子空间正交的新方向，再归一化”** —— 这正是线性代数中最优美的“正交化”构造方法。