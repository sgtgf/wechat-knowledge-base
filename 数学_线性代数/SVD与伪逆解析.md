# SVD与伪逆解析


> 原文地址: [https://mp.weixin.qq.com/s/VA6ArOBFIfkCV3q3dCezbg](https://mp.weixin.qq.com/s/VA6ArOBFIfkCV3q3dCezbg)

![](SVD与伪逆解析_images/img_000_87d4ab4bad75.jpg)

图1

这张图在讲：

**如何通过 [SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487099&idx=1&sn=3aac67defdec06bf100046c43f2fe4e8&scene=21#wechat_redirect)（奇异值分解）来构造矩阵的 Moore–Penrose 伪逆 ![](SVD与伪逆解析_images/img_001_870ff1565b3a.svg)** 。

* * *

## 1\. 图中整体流程在说什么

左边是一个原矩阵：

![](SVD与伪逆解析_images/img_002_36ee4dd441bb.svg)

图里用红绿色标了它的尺寸是 **![](SVD与伪逆解析_images/img_003_7f30bf89095b.svg)**，意思就是：

-   A 有 m 行
-   n 列

然后把 ![](SVD与伪逆解析_images/img_004_4f4eafc9e3f1.svg) 做奇异值分解：

![](SVD与伪逆解析_images/img_005_200f4261d5e3.svg)

图中右上角大框，实际上就是在表示这件事。

接着，由 ![](SVD与伪逆解析_images/img_006_615da4e8c5a6.svg) 的 [SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487154&idx=1&sn=b028794219010a4b49700210bf93f951&scene=21#wechat_redirect)，可以直接写出伪逆：

![](SVD与伪逆解析_images/img_007_e39cb9607c14.svg)

这就是图最下方那行公式，也是整张图最核心的结论。

* * *

## 2\. 图里每个符号分别是什么意思

* * *

### （1）原矩阵   

![](SVD与伪逆解析_images/img_008_a1c88700d5e7.svg)

这是我们想要求伪逆的矩阵。

它不要求必须是方阵，也不要求可逆。  
哪怕：

-   行数不等于列数
    
-   或者秩不满
    
-   或者本来没有通常意义下的逆矩阵
    

都仍然可以定义伪逆 ![](SVD与伪逆解析_images/img_009_a5361670ed81.svg)。

这正是伪逆的重要性。

* * *

### （2）[SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487629&idx=1&sn=d4f5d86e3152a876d6ed5a9faa1c0f06&scene=21#wechat_redirect) 分解：![](SVD与伪逆解析_images/img_010_f35f32b34a11.svg)

图右上角的大框表示把 ![](SVD与伪逆解析_images/img_011_2e646b1fffd3.svg) 分解成三个部分：

![](SVD与伪逆解析_images/img_012_e9996f2f4cc5.svg)

其中：

#### ![](SVD与伪逆解析_images/img_013_0a4e7d3be002.svg)

是一个正交矩阵。

它的列向量是 **左奇异向量**。  
几何上可以理解为：输出空间里的“标准正交方向”。

* * *

#### ![](SVD与伪逆解析_images/img_014_f7e6aa254fb3.svg)

是一个“对角形矩阵”（rectangular diagonal matrix），长这样：

![](SVD与伪逆解析_images/img_015_6eeae967ab91.svg)

其中：

![](SVD与伪逆解析_images/img_016_24562611aab6.svg)

这些 ![](SVD与伪逆解析_images/img_017_abfda5b5b1a4.svg) 叫做 **奇异值**。

图中在 ![](SVD与伪逆解析_images/img_018_0ee33d20df25.svg) 的旁边标了：

-   上面黑色：![](SVD与伪逆解析_images/img_019_425bfbc6fecd.svg)
    
-   下面红色：![](SVD与伪逆解析_images/img_020_64201ea65dd3.svg)
    

它想表达的是：

-   U 是 ![](SVD与伪逆解析_images/img_021_dfa64d0796df.svg) 
-    ![](SVD与伪逆解析_images/img_022_4a33496a700a.svg) 是 ![](SVD与伪逆解析_images/img_023_b84f6034aa5e.svg) 

  

* * *

#### ![](SVD与伪逆解析_images/img_024_2691c3f174bc.svg)

如果

![](SVD与伪逆解析_images/img_025_e1ce5e69238d.svg)

那么

![](SVD与伪逆解析_images/img_026_73e3e55ab7bd.svg)

也是正交矩阵。

它的列向量（即 ![](SVD与伪逆解析_images/img_027_04398891cc18.svg) 的列）是 **右奇异向量**。  
几何上可以看成：输入空间里的“标准正交方向”。

* * *

## 3\. 为什么伪逆公式是 ![](SVD与伪逆解析_images/img_028_7ac72eaf8c05.svg)

普通逆矩阵有个熟悉公式：

![](SVD与伪逆解析_images/img_029_aa822d0799e9.svg)

[SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488029&idx=1&sn=97300fb3791661152de7edb0f981ccd0&scene=21#wechat_redirect) 虽然不一定每一部分都有普通逆，但它启发我们：

如果

![](SVD与伪逆解析_images/img_030_aa7c8927c610.svg)

那么伪逆自然应该按“反过来”的顺序写：

![](SVD与伪逆解析_images/img_031_0ae99abc2546.svg)

因为：

-   正交矩阵的逆就是转置：![](SVD与伪逆解析_images/img_032_385eee260b67.svg)
    
-    ![](SVD与伪逆解析_images/img_033_b22d3ef12e2f.svg) 不是方阵，也可能有 0，所以不能直接取通常逆
-   于是对 ![](SVD与伪逆解析_images/img_034_e1fceb7274d7.svg) 取 **伪逆**![](SVD与伪逆解析_images/img_035_d72c346a355c.svg)
    

所以得到：

![](SVD与伪逆解析_images/img_036_b8ce864d376d.svg)

这就是图的核心。

* * *

## 4\. 图中 ![](SVD与伪逆解析_images/img_037_6896fc75979d.svg) 是什么意思

图左下角那个符号是在说：

![](SVD与伪逆解析_images/img_038_2e831cd0485c.svg)

虽然图写得有点简略，但本质意思是：

> ![](SVD与伪逆解析_images/img_039_4859a2c6d8a3.svg) 是把 ![](SVD与伪逆解析_images/img_040_79d2946cc728.svg) 中每个非零奇异值取倒数，再把矩阵尺寸转置得到的。

如果

![](SVD与伪逆解析_images/img_041_5bd0ac7a842f.svg)

那么

![](SVD与伪逆解析_images/img_042_2f405a69f7dd.svg)

这点和图右下角 ![](SVD与伪逆解析_images/img_043_5de66d3808db.svg) 的尺寸标记是一致的：  
原来 ![](SVD与伪逆解析_images/img_044_bee9a43f9f15.svg) 是 ![](SVD与伪逆解析_images/img_045_c91bac477050.svg)，伪逆 ![](SVD与伪逆解析_images/img_046_1ccca953bd9b.svg) 就是 ![](SVD与伪逆解析_images/img_047_65b3817d77cd.svg)。

* * *

### ![](SVD与伪逆解析_images/img_048_4ab3f0d67269.svg) 的构造规则

若

![](SVD与伪逆解析_images/img_049_c73a923c5e8f.svg)

那么

![](SVD与伪逆解析_images/img_050_f92caa4d0943.svg)

但有一个关键规则：

#### 只有非零奇异值才取倒数

如果某个奇异值为 0，那么对应位置仍然写 0，而不是取倒数。

也就是：

![](SVD与伪逆解析_images/img_051_59fdeae216c7.svg)

* * *

## 5\. 这张图背后的几何意义

这张图不只是代数公式，它背后其实是一个非常漂亮的几何过程。

对任意输入向量 ![](SVD与伪逆解析_images/img_052_0e8445929745.svg)，矩阵 ![](SVD与伪逆解析_images/img_053_2099ababedc8.svg) 的作用可以拆成三步：

![](SVD与伪逆解析_images/img_054_c086ec065e94.svg)

也就是：

#### 第一步：![](D:\电脑文件\公众号知识库\数学_线性代数\SVD与伪逆解析_images\img_000_833a71daf33f.svg)

把输入坐标系旋转到“右奇异向量基底”里。

#### 第二步：![](SVD与伪逆解析_images/img_056_a7b1c0e63902.svg)

沿若干互相正交的主方向拉伸/压缩。

-   拉伸倍数就是奇异值 ![](SVD与伪逆解析_images/img_057_c7759011190a.svg)
    
-   若某个 ![](SVD与伪逆解析_images/img_058_12c4ef88003a.svg)，说明这个方向被压扁到 0
    

####   

#### 第三步：U  

再旋转到输出空间中的位置。

* * *

而伪逆 ![](SVD与伪逆解析_images/img_059_276f021cbe00.svg) 做的是“尽可能逆回来”：

![](SVD与伪逆解析_images/img_060_4c1bfbe97b34.svg)

也分三步：

#### 第一步：![](SVD与伪逆解析_images/img_061_b4a5f09fe735.svg)

先把输出向量转回左奇异向量坐标系。

#### 第二步：![](SVD与伪逆解析_images/img_062_2813a7c281d6.svg)

把被拉伸的方向按 ![](SVD与伪逆解析_images/img_063_179d6ab15a3e.svg) 缩回去。

-   原来乘 ![](SVD与伪逆解析_images/img_064_a7bbc362e9ef.svg)
    
-   现在乘 ![](SVD与伪逆解析_images/img_065_e1d4f337ad36.svg)
    

####   

#### 第三步：V  

再转回原输入空间。

* * *

### 最重要的一点

对于那些原来被压成 0 的方向（即 ![](SVD与伪逆解析_images/img_066_726f4f206fd5.svg) 的方向），**信息已经丢失了**。  
所以伪逆不可能真正恢复它们。

因此伪逆不是“完全逆变换”，而是：

> 在能恢复的方向上尽量恢复；  
> 在已经丢失的方向上保持为 0。

这也是 Moore–Penrose 伪逆最本质的思想。

* * *

## 6\. 为什么伪逆特别适合“不可逆矩阵”

普通逆矩阵 ![](SVD与伪逆解析_images/img_067_967238419dd6.svg) 要求：

-   A 必须是方阵
-   且满秩
    

但现实中很多矩阵都不满足：

-   瘦高矩阵 ![](SVD与伪逆解析_images/img_068_d1e789ad82a6.svg)
    
-   矮宽矩阵 ![](SVD与伪逆解析_images/img_069_87aa4ce48bd2.svg)
    
-   列相关 / 行相关
    
-   秩亏
    

这时普通逆不存在，但伪逆仍然存在。

所以伪逆常用于：

#### 最小二乘

解超定方程组：

![](SVD与伪逆解析_images/img_070_8aeacfef7ed0.svg)

最优解是

![](SVD与伪逆解析_images/img_071_b22ba7ac0b16.svg)

* * *

#### 最小范数解

对欠定系统：

![](SVD与伪逆解析_images/img_072_8c2dfedb1dc7.svg)

伪逆给出的是所有解中 **欧氏范数最小** 的那个。

* * *

#### 降维与重构

SVD/伪逆在 PCA、数据拟合、信号恢复里都很重要。

* * *

## 7\. 用一个小例子把图读透

设

![](SVD与伪逆解析_images/img_073_98e396f25cd7.svg)

这是一个 ![](SVD与伪逆解析_images/img_074_87fd8d951cfa.svg) 矩阵，但它不可逆，因为第二行第二列方向被压成 0 了。

它的 SVD 其实很简单：

![](SVD与伪逆解析_images/img_075_62795bce08fc.svg)

于是

![](SVD与伪逆解析_images/img_076_55e243364a1a.svg)

所以

![](SVD与伪逆解析_images/img_077_85d3564aaee0.svg)

这是什么意思？

-   在第一个方向上，原来乘了 3，现在除以 3，恢复回来
    
-   在第二个方向上，原来整个压扁成 0，信息没了，所以伪逆也恢复不了，只能保持 0
    

这就是图中“把奇异值取倒数，但 0 不动”的真正含义。

* * *

## 8\. 图中的尺寸关系也值得注意

图里特别标尺寸，是因为很多人第一次学伪逆时，会在“矩阵维度”上混乱。

* * *

### 原矩阵

![](SVD与伪逆解析_images/img_078_857668d061f8.svg)

* * *

### SVD 分解中的各部分

![](SVD与伪逆解析_images/img_079_8a3e7e88690e.svg)

![](SVD与伪逆解析_images/img_080_39d9c8b93488.svg)

![](SVD与伪逆解析_images/img_081_5361d16100dc.svg)

所以：

![](SVD与伪逆解析_images/img_082_863b058657d5.svg)

正好恢复成 ![](SVD与伪逆解析_images/img_083_762dad704d80.svg)。

* * *

### 伪逆的尺寸

![](SVD与伪逆解析_images/img_084_e82b277544bb.svg)

其中：

![](SVD与伪逆解析_images/img_085_eb54ef77b350.svg)

![](SVD与伪逆解析_images/img_086_1e19d99e443e.svg)

![](SVD与伪逆解析_images/img_087_751f53d13b92.svg)

所以：

![](SVD与伪逆解析_images/img_088_769d76102919.svg)

因此：

![](SVD与伪逆解析_images/img_089_ac1fcf443451.svg)

这就是图右下角想强调的内容。

* * *

## 9\. 这张图可以浓缩成一句话

这张图的本质就是：

> 先把矩阵 ![](SVD与伪逆解析_images/img_090_84472b1bedce.svg) 做 SVD：
> 
> ![](SVD与伪逆解析_images/img_091_c0e73e62edc3.svg)
> 
> 再把非零奇异值取倒数，并交换左右正交基，就得到伪逆：
> 
> ![](SVD与伪逆解析_images/img_092_ed4c54feba55.svg)

* * *

## 10\. 再用更通俗的话说一遍

你可以把 A 想成一个机器，它会：

1.  先转一下方向
    
2.  再沿几个主方向拉长/压短
    
3.  再转到另一个方向
    

而伪逆 ![](SVD与伪逆解析_images/img_093_f6dfb4552cc1.svg) 就是：

1.  先把最后那次旋转倒回来
    
2.  再把那些拉伸倍率取倒数
    
3.  再把最开始那次旋转倒回来
    

但注意：

-   能恢复的方向才恢复
    
-   被压成 0 的方向恢复不了
    

所以它叫“伪逆”，不是“真逆”。

* * *

图1其实已经把 **SVD → 伪逆** 的主线画出来了。  
下一步用一个具体的  **![](SVD与伪逆解析_images/img_094_55a1ea4f5c61.svg) 整数矩阵，把 ![](SVD与伪逆解析_images/img_095_cc4035229e3e.svg)、SVD、![](SVD与伪逆解析_images/img_096_9937ee4ed9d2.svg)、![](SVD与伪逆解析_images/img_097_02436719c0ab.svg) 全部手算一遍，把这张图真正“落地”。**

分三层来讲：

1.  **先把图中的公式再压缩成一个工作流程**
2.  **用一个具体矩阵完整算一遍**
3.  **解释伪逆到底在“帮你做什么”**

* * *

## 1\. 先把图里的流程重新整理一下

图中主线是：

![](SVD与伪逆解析_images/img_098_338c590db7a4.svg)

也就是：

### 第一步：把矩阵拆开

![](SVD与伪逆解析_images/img_099_20ee52c3b085.svg)

### 第二步：只对中间那个“缩放器” ![](SVD与伪逆解析_images/img_100_0a05cf3eefc4.svg) 动手

把每个**非零奇异值**![](SVD与伪逆解析_images/img_101_e364ae8ef245.svg) 变成 ![](SVD与伪逆解析_images/img_102_52cacf3adfc8.svg)，得到

![](SVD与伪逆解析_images/img_103_06bbbde16bda.svg)

### 第三步：把左右顺序反过来

![](SVD与伪逆解析_images/img_104_989eb90ff1d9.svg)

* * *

## 2\. 用一个最容易算清楚的例子

我们先不用太复杂的整数矩阵，而用一个**最能看懂本质**的例子：

![](SVD与伪逆解析_images/img_105_132c26b4140f.svg)

这是一个 ![](SVD与伪逆解析_images/img_106_56ef9f7cd5d9.svg) 矩阵。

它表示：

-   输入空间是 ![](SVD与伪逆解析_images/img_107_eaf35f9842f3.svg)
    
-   输出空间是 ![](SVD与伪逆解析_images/img_108_fd0300cfd2e8.svg)
    

它把二维向量 ![](SVD与伪逆解析_images/img_109_ff1e21473693.svg) 送到三维空间里：

![](SVD与伪逆解析_images/img_110_ae17841bba51.svg)

意思很直观：

-   第一个方向放大 3 倍
    
-   第二个方向放大 2 倍
    
-   结果永远落在平面 ![](SVD与伪逆解析_images/img_111_e0329cd01300.svg) 里
    

* * *

## 3\. 这个例子的 SVD 是什么

这个矩阵已经几乎就是 SVD 形状了。

我们可以直接取：

![](SVD与伪逆解析_images/img_112_a872062516f7.svg)

![](SVD与伪逆解析_images/img_113_4d05ab2cfa60.svg)

![](SVD与伪逆解析_images/img_114_8ab27fbba4cf.svg)

于是确实有：

![](SVD与伪逆解析_images/img_115_7c4e8815d8c1.svg)

这里虽然太“整齐”，但非常适合入门理解。

* * *

## 4\. 现在构造 ![](SVD与伪逆解析_images/img_116_8a6344cf760d.svg)

原来

![](D:\电脑文件\公众号知识库\数学_线性代数\SVD与伪逆解析_images\img_001_329943cbb006.svg)

那么它的伪逆 ![](SVD与伪逆解析_images/img_118_1b564bdce55e.svg) 要变成 ![](SVD与伪逆解析_images/img_119_b2e438a54bdc.svg)，并且把非零奇异值取倒数：

![](SVD与伪逆解析_images/img_120_d2a989a9bef7.svg)

注意两件事：

#### 第一件事：尺寸变了

原来是 ![](SVD与伪逆解析_images/img_121_87175937cbe9.svg)，现在变成 ![](SVD与伪逆解析_images/img_122_276080138c95.svg)。

#### 第二件事：0 不取倒数

第三行对应“压扁掉的信息”，不能恢复，所以仍然是 0。

* * *

## 5\. 于是伪逆 ![](SVD与伪逆解析_images/img_123_b1c45a7b9e03.svg) 立刻得到

因为这里 ![](SVD与伪逆解析_images/img_124_f65064ede576.svg)、![](SVD与伪逆解析_images/img_125_91a704ad3bdf.svg)，所以

![](SVD与伪逆解析_images/img_126_fb2fb2731e69.svg)

即

![](SVD与伪逆解析_images/img_127_ca9586d930f1.svg)

这就是原矩阵的伪逆。

* * *

## 6\. 检验一下：它到底做了什么

设输出空间里有一个向量

![](SVD与伪逆解析_images/img_128_fac0df83b449.svg)

那么

![](SVD与伪逆解析_images/img_129_dc0b8f9b2ea9.svg)

这意味着：

-   它把第一个分量 6 “缩回”成 2
    
-   把第二个分量 8 “缩回”成 4
    
-   对第三个分量 5 **完全不理会**
    

  

为什么不理会？

因为原矩阵 ![](SVD与伪逆解析_images/img_130_263994b0f4d7.svg) 产生的结果一定长这样：

![](SVD与伪逆解析_images/img_131_99255a2da59f.svg)

也就是说，**第三个方向本来就不是 ![](SVD与伪逆解析_images/img_132_22c8e8d71a87.svg) 能产生出来的**。  
所以当你给伪逆一个带第三分量的向量 ![](SVD与伪逆解析_images/img_133_21b534fb638a.svg) 时，伪逆只能说：

> “前两个分量我尽量给你反推回去；第三个分量不是原来这个变换能解释的，我恢复不了。”

这正是伪逆的核心思想。

* * *

## 7\. 再看 ![](SVD与伪逆解析_images/img_134_a1d2cd41bd66.svg) 和 ![](SVD与伪逆解析_images/img_135_5950f7df6174.svg)

这是理解伪逆最关键的地方之一。

* * *

### （1）先算 ![](SVD与伪逆解析_images/img_136_89c976d5bbb1.svg)

###   

![](SVD与伪逆解析_images/img_137_bb35279b3266.svg)

这个结果说明：

> 对输入空间 ![](SVD与伪逆解析_images/img_138_97a959e62f57.svg) 里的向量，先用 ![](SVD与伪逆解析_images/img_139_8996aedfd936.svg) 变出去，再用 ![](SVD与伪逆解析_images/img_140_314ea75ecb12.svg) 拉回来，能完全恢复。

因为这个例子里，A 的两列线性无关，输入信息没有丢。

* * *

### （2）再算 ![](SVD与伪逆解析_images/img_141_8a32bbd75803.svg)

###   

![](SVD与伪逆解析_images/img_142_56e4344d2111.svg)

这个矩阵不是 ![](SVD与伪逆解析_images/img_143_5c5bbd7ef376.svg)，而是一个**投影矩阵**。

它把任意三维向量

![](SVD与伪逆解析_images/img_144_9f6b4d2d2f07.svg)

投影到平面 ![](SVD与伪逆解析_images/img_145_f71bb8c61f70.svg)：

![](SVD与伪逆解析_images/img_146_b774769d832f.svg)

也就是说：

> ![](SVD与伪逆解析_images/img_147_a5519e6301f5.svg) 是投影到 ![](SVD与伪逆解析_images/img_148_f62945e76ba1.svg) 的列空间（column space）上的正交投影。

这个结论非常重要。

* * *

## 8\. 从[四个子空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247514383&idx=1&sn=58d31ac120e62f56ef863928aa5e3229&scene=21#wechat_redirect)角度看这件事

对这个矩阵

![](SVD与伪逆解析_images/img_149_b17f28928995.svg)

* * *

### 列空间 ![](SVD与伪逆解析_images/img_150_da3e7988d9d2.svg)

由两列张成：

![](SVD与伪逆解析_images/img_151_1edeca124c21.svg)

就是三维空间中的平面 ![](SVD与伪逆解析_images/img_152_57406751abe2.svg)。

* * *

### [零空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247506786&idx=1&sn=2aa4d4f3207cb33e9c0931e37684187f&scene=21#wechat_redirect) ![](SVD与伪逆解析_images/img_153_e3705c750a06.svg)

求解

![](SVD与伪逆解析_images/img_154_f3a2be346182.svg)

得到

![](SVD与伪逆解析_images/img_155_0bd224d68f1f.svg)

所以

![](SVD与伪逆解析_images/img_156_3291c45606c7.svg)

说明输入没有被压扁掉。

* * *

### [左零空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247507028&idx=1&sn=afdc8b2099cd72d74a1089aa8fb1ef80&scene=21#wechat_redirect) ![](SVD与伪逆解析_images/img_157_7a4264a3c1e2.svg)

###   

![](SVD与伪逆解析_images/img_158_1aa232538316.svg)

求

![](SVD与伪逆解析_images/img_159_1dcc5ec72491.svg)

即

![](SVD与伪逆解析_images/img_160_11a2555812c5.svg)

所以

![](SVD与伪逆解析_images/img_161_1e647982c5a3.svg)

即

![](SVD与伪逆解析_images/img_162_8fad5d44225c.svg)

这就是垂直于列空间 ![](SVD与伪逆解析_images/img_163_85f0e58bc14b.svg) 平面的方向。

* * *

### 这时 ![](SVD与伪逆解析_images/img_164_04511e7406ca.svg) 的意义就更清楚了

任意向量 ![](SVD与伪逆解析_images/img_165_73d2144644d4.svg) 可以分解成：

![](SVD与伪逆解析_images/img_166_7f1926dfd628.svg)

例如

![](SVD与伪逆解析_images/img_167_08913000d6a5.svg)

其中：

-   ![](SVD与伪逆解析_images/img_168_75c693ce4b16.svg)
    
     在列空间中
    
-   ![](SVD与伪逆解析_images/img_169_a12cff721a71.svg)
    
     在左零空间中
    

那么

![](SVD与伪逆解析_images/img_170_dadbbd6cc9cf.svg)

就是把 ![](SVD与伪逆解析_images/img_171_695d82e8a4f4.svg) 正交投影到列空间。

* * *

## 9\. 所以伪逆和“[最小二乘](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247484824&idx=1&sn=6158f2e6bb26e5e597aee0c2934d745e&scene=21#wechat_redirect)”是什么关系

假设你想解

![](SVD与伪逆解析_images/img_172_fa2a9a7d8c9a.svg)

但这个 ![](SVD与伪逆解析_images/img_173_8a1d6d9ff543.svg) 未必真的在列空间中，所以方程可能**无解**。

例如刚才那个

![](SVD与伪逆解析_images/img_174_293cd89b62e5.svg)

因为 ![](SVD与伪逆解析_images/img_175_5e08fddf8d7e.svg) 的第三个分量一定是 0，不可能等于 5。

所以 ![](SVD与伪逆解析_images/img_176_c4fb23a5f875.svg) 无解。

但是伪逆会给出一个最好的近似解：

![](SVD与伪逆解析_images/img_177_5f9badce5fed.svg)

我们已经算出：

![](SVD与伪逆解析_images/img_178_69f7360ca23e.svg)

代回去：

![](SVD与伪逆解析_images/img_179_b8b3201603c7.svg)

这就是离 ![](SVD与伪逆解析_images/img_180_98b4f599b0f8.svg) 最近的可达点。

误差为：

![](SVD与伪逆解析_images/img_181_2fa7aea443d5.svg)

也就是那个“无论如何都解释不了”的左零空间部分。

所以：

> 给出的就是最小二乘解。
> 
> ![](D:\电脑文件\公众号知识库\数学_线性代数\SVD与伪逆解析_images\img_002_643fed485b6b.svg)

* * *

## 10\. 这张图中最值得记住的三句话

* * *

### 第一句：SVD 把矩阵拆成“[旋转](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491153&idx=1&sn=fb3db591aa0ac260ea404e9e79581add&scene=21#wechat_redirect) + [缩放](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491229&idx=1&sn=ff4d57b39612251d752393c7efb3921d&scene=21#wechat_redirect) + 旋转”

![](SVD与伪逆解析_images/img_183_910ce8a17284.svg)

-   ![](SVD与伪逆解析_images/img_184_b76389323524.svg)
    
    先转坐标
    
-   ![](SVD与伪逆解析_images/img_185_16404587f54d.svg)
    
    再沿主轴缩放
    
-   ![](SVD与伪逆解析_images/img_186_0f0387508175.svg)
    
    最后再转一次
    

* * *

### 第二句：伪逆只需要把中间缩放器翻过来

![](SVD与伪逆解析_images/img_187_bdd1083f60d8.svg)

也就是：

-   左右顺序反过来
    
-   非零[奇异值](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487913&idx=1&sn=78464a02b7bef5067590714667e39d68&scene=21#wechat_redirect)取倒数
    
-   零奇异值保持零
    

* * *

### 第三句：伪逆不是“真的完全逆回去”，而是“尽量逆回去”

能恢复的方向恢复；  
已经被压扁丢失的方向，恢复不了。

* * *

## 11\. 你可以把它理解成一个“压缩-解压”系统

把 A 想成一个机器：

-   有些方向被放大
    
-   有些方向被缩小
    
-   有些方向甚至被彻底压扁成 0
    

那 ![](SVD与伪逆解析_images/img_188_a3542b37bd84.svg) 就像一个“尽力解压器”：

-   对没丢信息的方向，做逆操作
    
-   对已经丢失的信息，不瞎猜，只能置零
    

所以伪逆是**最理性、最保守**的逆。

* * *

## 12\. 再补一个更一般的结论

若

![](SVD与伪逆解析_images/img_189_81f61678f7a4.svg)

且秩为 ![](SVD与伪逆解析_images/img_190_e06012bf3912.svg)，奇异值为

![](SVD与伪逆解析_images/img_191_89417b41c2f8.svg)

那么：

![](SVD与伪逆解析_images/img_192_032800f1b8a8.svg)

则

![](SVD与伪逆解析_images/img_193_2222e2a00d25.svg)

于是

![](SVD与伪逆解析_images/img_194_55d393201ba4.svg)

这条公式对任意矩阵都成立，不要求方阵，不要求可逆。