# 向量叉积 (cross product)的几何意义


> 原文地址: [https://mp.weixin.qq.com/s/7B0GAcul5IQ1Yjt7Zo0TUg](https://mp.weixin.qq.com/s/7B0GAcul5IQ1Yjt7Zo0TUg)

向量叉积（Cross Product，记作 **A × B**）是三维空间中两个向量的“特殊乘法”。它不像点积那样得出一个数字，而是得出**一个全新的向量**，这个新向量同时携带了“大小”和“方向”两个重要的几何信息。下面我用最通俗的语言 + 清晰的图，一步步给你讲清楚，希望看完就懂！

### 1\. 叉积的大小 = 平行四边形的面积（超级直观！）

想象你用向量 **A** 和 **B** 当作两条邻边，撑开一个平行四边形。**A × B 的长度（模长）正好等于这个平行四边形的面积**！

公式：**|A × B| = |A| × |B| × sinθ**（θ 是 A 和 B 的夹角）

为什么是 sinθ？因为 |B| sinθ 就是 B 在垂直于 A 方向上的“高度”，底 × 高 = 面积。

![](向量叉积_(cross_product)的几何意义_images/img_000_303b4a33c588.png)

图1

看上面图1：

-   左图直接画出了“高度 = |b| sinθ”，一目了然。
    
-   右图把平行四边形涂成黄色，更直观地告诉你叉积的长度就是这个黄色的面积。
    

**小技巧**：如果 A 和 B 平行（θ=0° 或 180°），sinθ=0，面积为 0，所以叉积结果是**零向量**（就像“压扁”了，没面积）。

### 2\. 叉积的方向 = 垂直于 A 和 B 所在的平面（右手定则）

新向量 **C = A × B** 永远**垂直**于 A 和 B 所在的平面（像一根钉子垂直戳出纸面）。

方向怎么判断？用**右手定则**（这是最经典、最好记的方法）：

1.  伸出右手，手掌摊开。
    
2.  四指（食指到小指）从向量 **A** 的方向弯向向量 **B** 的方向。
    
3.  大拇指竖起所指的方向，就是 **C** 的方向！
    

上面两张图就是标准右手定则演示：

![](向量叉积_(cross_product)的几何意义_images/img_001_e0dc7f546d8a.png)

图2

-   左图直接把 a、b、a×b 标在手上，超清晰。
    
-   右图还对比了 A×B（大拇指向上）和 B×A（大拇指向下），说明叉积**不满足交换律**：**A × B = – (B × A)**（方向相反，大小一样）。
    

>   

![](向量叉积_(cross_product)的几何意义_images/img_002_6105bd47c839.png)

图3

向量叉积 ![](向量叉积_(cross_product)的几何意义_images/img_003_ac9f9f0bb929.svg) 的**几何意义**可以用图3那块“平行四边形面片”来一句话概括：

> **叉积把“由 ![](向量叉积_(cross_product)的几何意义_images/img_004_bae9096b7b93.svg) 张成的平面面片（带方向）”编码成一个“垂直于该平面的法向量”，其长度等于面片面积。**

下面拆开说清楚。

* * *

### 1) 长度：等于平行四边形的面积

![](向量叉积_(cross_product)的几何意义_images/img_005_bfe4bbfd3644.svg)

-   ![](向量叉积_(cross_product)的几何意义_images/img_006_0c069cf0f37f.svg)
    
     是 ![](向量叉积_(cross_product)的几何意义_images/img_007_640f8066aff6.svg) 与 ![](向量叉积_(cross_product)的几何意义_images/img_008_b6bef5c9e23d.svg) 的夹角（取 ![](D:\电脑文件\公众号知识库\数学_线性代数\向量叉积_(cross_product)的几何意义_images\img_000_32472bfc792b.svg)）。
    
-   ![](向量叉积_(cross_product)的几何意义_images/img_010_b28f7f7c483a.svg)
    
     可以看成 ![](向量叉积_(cross_product)的几何意义_images/img_011_a8d2cfb3fd7a.svg) 在“垂直于 ![](向量叉积_(cross_product)的几何意义_images/img_012_0567288fa78f.svg)”方向上的**高度**。
    
-   所以面积 = 底 ![](向量叉积_(cross_product)的几何意义_images/img_013_b74b8e172b66.svg) × 高 ![](向量叉积_(cross_product)的几何意义_images/img_014_334ebf267271.svg)。
    

因此：

-   若 ![](向量叉积_(cross_product)的几何意义_images/img_015_f42b049cbb5a.svg)（![](向量叉积_(cross_product)的几何意义_images/img_016_66102bd143fa.svg) 或 ![](向量叉积_(cross_product)的几何意义_images/img_017_1bac9787888c.svg)），![](向量叉积_(cross_product)的几何意义_images/img_018_f80866183d6b.svg)，面积为 0，叉积为 0。
    
-   若 ![](向量叉积_(cross_product)的几何意义_images/img_019_18749a480a1f.svg)（![](向量叉积_(cross_product)的几何意义_images/img_020_00b6b821f7bd.svg)），![](向量叉积_(cross_product)的几何意义_images/img_021_a08b94eb2b20.svg)，面积最大，![](向量叉积_(cross_product)的几何意义_images/img_022_f426f3c9f64c.svg)。
    

另外，三角形面积就是它的一半：

![](向量叉积_(cross_product)的几何意义_images/img_023_f7810bdf414a.svg)

* * *

### 2) 方向：给出“法线”（垂直于那张平面）

![](向量叉积_(cross_product)的几何意义_images/img_024_508b9a917c39.svg) 的方向满足：

-   ![](向量叉积_(cross_product)的几何意义_images/img_025_5022a016560d.svg)**同时垂直于 ![](向量叉积_(cross_product)的几何意义_images/img_026_35c7e3413f56.svg) 和 ![](向量叉积_(cross_product)的几何意义_images/img_027_44f08b4f2847.svg)** 
-   也就垂直于它们张成的平面（图中那块灰色平面）
    

这就是“[法向量](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect)”的来源：它是那张平面的一个法线方向。

* * *

### 3) 正负（朝上还是朝下）：右手定则 = “有向面积”

叉积不光给面积大小，还给**朝向**（orientation）：

-   用右手：四指从 ![](向量叉积_(cross_product)的几何意义_images/img_028_127b32eb9902.svg) 卷向 ![](向量叉积_(cross_product)的几何意义_images/img_029_6d05249a42a3.svg)（走最短夹角），大拇指指向就是 ![](向量叉积_(cross_product)的几何意义_images/img_030_812924f08034.svg) 的方向。
    
-   交换顺序会翻转方向：
    

![](向量叉积_(cross_product)的几何意义_images/img_031_2c75b3d73cec.svg)

所以叉积更准确地说是：**把平行四边形的“有向面积”编码为一个法向量**。  
（同一块面积，正面/反面朝你，就是符号相反。）

* * *

### 4) 一个最直观的小例子（整数）

取

![](向量叉积_(cross_product)的几何意义_images/img_032_5657738c2e9b.svg)

它们在 ![](向量叉积_(cross_product)的几何意义_images/img_033_26b0c119637c.svg) 平面上，张成一个 ![](向量叉积_(cross_product)的几何意义_images/img_034_9d7e3d8e351d.svg) 的矩形（也是平行四边形）：

-   面积 = ![](向量叉积_(cross_product)的几何意义_images/img_035_13ec4c5f318f.svg)
    
-   叉积：
    

### 4.1) 用“行列式公式”一步步算

![](向量叉积_(cross_product)的几何意义_images/img_036_b46631f658a6.svg)

代入 ![](向量叉积_(cross_product)的几何意义_images/img_037_5048ad8df5a6.svg), ![](向量叉积_(cross_product)的几何意义_images/img_038_2a3c4bbed8d6.svg)：

![](向量叉积_(cross_product)的几何意义_images/img_039_7a916f9afe85.svg)

按第一行展开（记住符号是 ![](向量叉积_(cross_product)的几何意义_images/img_040_221727829707.svg)）：

-   i 分量：![](向量叉积_(cross_product)的几何意义_images/img_041_19be8e0bc990.svg)

-   j 分量：![](向量叉积_(cross_product)的几何意义_images/img_042_9f13b55935f2.svg)

-   k 分量：![](向量叉积_(cross_product)的几何意义_images/img_043_2ce12927c14b.svg)

所以

![](向量叉积_(cross_product)的几何意义_images/img_044_058495d36de3.svg)

* * *

### 4.2) 用“更好记”的坐标公式

如果

![](向量叉积_(cross_product)的几何意义_images/img_045_8a544a63b5ce.svg)

那么

![](向量叉积_(cross_product)的几何意义_images/img_046_272a221d2178.svg)

代入同样得到 ![](向量叉积_(cross_product)的几何意义_images/img_047_05edc36a56d8.svg)。

* * *

### 4.3) 几何直觉：为什么是 6、为什么在 z 方向？

-   ![](向量叉积_(cross_product)的几何意义_images/img_048_5f805a94043d.svg)
    
     在 ![](向量叉积_(cross_product)的几何意义_images/img_049_0340a055bfcb.svg) 轴方向，长度 2
    
-   ![](向量叉积_(cross_product)的几何意义_images/img_050_f83c647166ec.svg)
    
     在 ![](向量叉积_(cross_product)的几何意义_images/img_051_8fbbe2cdfb98.svg) 轴方向，长度 3
    
-   它们垂直，所以平行四边形面积 ![](向量叉积_(cross_product)的几何意义_images/img_052_b0c3fb12a2bf.svg)
    
-   法线垂直于 ![](向量叉积_(cross_product)的几何意义_images/img_053_862ca09961a4.svg) 平面，所以方向在 ![](向量叉积_(cross_product)的几何意义_images/img_054_b5450b8ce143.svg) 轴
    
-   右手定则：![](向量叉积_(cross_product)的几何意义_images/img_055_dd96a44381fa.svg)（+x）转到 ![](向量叉积_(cross_product)的几何意义_images/img_056_208dd0998c73.svg)（+y），大拇指指向 ![](向量叉积_(cross_product)的几何意义_images/img_057_9b879dcf651e.svg)
    

因此结果就是 ![](向量叉积_(cross_product)的几何意义_images/img_058_170e0ef7e243.svg)。

方向沿 ![](向量叉积_(cross_product)的几何意义_images/img_059_729e2b778d7f.svg)（“朝上”），长度 ![](向量叉积_(cross_product)的几何意义_images/img_060_391c3854da34.svg)，正好等于面积。

如果反过来：

![](向量叉积_(cross_product)的几何意义_images/img_061_f5673e77b8bb.svg)

面积大小没变，但法线朝下。

* * *

### 5) 你可以把叉积当成“造法线 + 算面积”的工具

常见用法的几何直觉：

-   **给平面找法线**
    
    三维里一个面（由两条边 ![](向量叉积_(cross_product)的几何意义_images/img_062_844a4b01cfe0.svg) 定义）最自然的法向量就是 ![](向量叉积_(cross_product)的几何意义_images/img_063_06562e10ca32.svg)。
    
-   **测“转动趋势”**
    
    力矩 ![](向量叉积_(cross_product)的几何意义_images/img_064_c8ace646a051.svg) 的方向给出旋转轴，大小是“力 × 力臂垂直距离”。
    

* * *

下面按图的三维直觉来讲（![](向量叉积_(cross_product)的几何意义_images/img_065_23b0a7fbe3b5.svg)、平行四边形面积 ![](向量叉积_(cross_product)的几何意义_images/img_066_fb43e8cb58e0.svg)、夹角 ![](向量叉积_(cross_product)的几何意义_images/img_067_ff49cc808329.svg)），**点积 vs 叉积**可以非常直观地分工成：

> **点积 = “对齐计”（沿着对方方向有多少）**  
> **叉积 = “偏离计”（垂直于对方方向有多少）**

  

* * *

### 1) 先把 ![](向量叉积_(cross_product)的几何意义_images/img_068_790af0b79cf4.svg) 在三维里拆成两块：平行 + 垂直

在三维空间中，给定 ![](向量叉积_(cross_product)的几何意义_images/img_069_2fffacea3cbf.svg)，任何 ![](向量叉积_(cross_product)的几何意义_images/img_070_1112d3698fb5.svg) 都能唯一分解为：

![](向量叉积_(cross_product)的几何意义_images/img_071_494f1e5d4749.svg)

-   ![](向量叉积_(cross_product)的几何意义_images/img_072_eee42a06b6e8.svg)
    
    **沿着 ![](向量叉积_(cross_product)的几何意义_images/img_073_c6373fa273e5.svg)**  的分量（对齐部分）
    
-   ![](向量叉积_(cross_product)的几何意义_images/img_074_2b4d6948927d.svg)
    
    **垂直于 ![](向量叉积_(cross_product)的几何意义_images/img_075_a6437eb5c89f.svg)**  的分量（偏离部分）
    

几何上：图里那块平行四边形，用 ![](向量叉积_(cross_product)的几何意义_images/img_076_8ca5141e2ef1.svg) 做底边，![](向量叉积_(cross_product)的几何意义_images/img_077_b6b24af09fbb.svg) 就是“高度方向”的那一段。

* * *

### 2) 点积：只关心“沿着 ![](向量叉积_(cross_product)的几何意义_images/img_078_a9ac0e7b5fff.svg)”的那一块（对齐）

点积公式：

![](向量叉积_(cross_product)的几何意义_images/img_079_e60d28ae9627.svg)

把它改写成“底 × 投影长度”的样子：

-   v 在 u 方向上的**投影长度**是 ![](向量叉积_(cross_product)的几何意义_images/img_080_8ef4bcfcd7c6.svg) 
-   所以
    

![](向量叉积_(cross_product)的几何意义_images/img_081_f5017ea9640d.svg)

更“几何可操作”的表达（[投影向量](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488995&idx=1&sn=2971f0cedf425478ae855802f798021b&scene=21#wechat_redirect)）：

![](向量叉积_(cross_product)的几何意义_images/img_082_631fd012bcfa.svg)

**直觉总结（对齐计）：**

-   ![](向量叉积_(cross_product)的几何意义_images/img_083_8bfa26d52e0f.svg)
    
    大体同向（对齐）
    
-   ![](向量叉积_(cross_product)的几何意义_images/img_084_0546c76944ca.svg)
    
    完全不对齐（正交）
    
-   ![](向量叉积_(cross_product)的几何意义_images/img_085_9af55b2f3029.svg)
    
    大体反向（“对齐但朝反方向”）
    

点积输出是**标量**，因为它测的是“沿某方向有多少”。

* * *

### 3) 叉积：只关心“垂直于 ![](向量叉积_(cross_product)的几何意义_images/img_086_cc02cfcf5e05.svg)”的那一块（偏离）

叉积的长度：

![](向量叉积_(cross_product)的几何意义_images/img_087_3c8f6be32ef0.svg)

同样改写成“底 × 高”的样子：

-   v 相对 u 的**垂直高度**就是 ![](向量叉积_(cross_product)的几何意义_images/img_088_d2d3bcf1718a.svg) 
-   所以
    

![](向量叉积_(cross_product)的几何意义_images/img_089_6e17981c3819.svg)

这正是图中的：

-   以 ![](向量叉积_(cross_product)的几何意义_images/img_090_8b10ef0d717d.svg) 为边的平行四边形面积 ![](向量叉积_(cross_product)的几何意义_images/img_091_3fe97a2a0dd1.svg)
    

![](向量叉积_(cross_product)的几何意义_images/img_092_e570ceef5bbd.svg)

**直觉总结（偏离计）：**

-   ![](向量叉积_(cross_product)的几何意义_images/img_093_fa2c6e4f0dad.svg)
    
    没有偏离（共线）
    
-   越大：偏离越明显（越“横着来”）
    

叉积输出是**向量**，因为它不仅给“偏离量”，还给“偏离发生在哪个平面、朝哪边”的信息：  
![](向量叉积_(cross_product)的几何意义_images/img_094_55a9a5a5a03a.svg) 的方向就是该平面的法线（右手定则）。

* * *

### 4) 右手定则 = “偏离的方向标签”

在三维里，![](向量叉积_(cross_product)的几何意义_images/img_095_8cbad343a739.svg) 到 ![](向量叉积_(cross_product)的几何意义_images/img_096_a36d2ce9d107.svg) 围成一个平面。叉积把这张“面片”贴上方向标签：

-   四指从 ![](向量叉积_(cross_product)的几何意义_images/img_097_f00fb994ff03.svg) 卷向 ![](D:\电脑文件\公众号知识库\数学_线性代数\向量叉积_(cross_product)的几何意义_images\img_001_5da0e9e9858d.svg)
    
-   大拇指方向就是 ![](向量叉积_(cross_product)的几何意义_images/img_099_0f983cf81d6b.svg)
    

所以交换顺序会翻面：

![](向量叉积_(cross_product)的几何意义_images/img_100_b705110a5197.svg)

这就是“有向面积”的三维版本。

* * *

### 5) 一套最直观的“黄金搭档”分工表

给定 ![](向量叉积_(cross_product)的几何意义_images/img_101_a406c04bfe68.svg)：

-   \*\*对齐程度（沿向分量）\*\*看点积![](向量叉积_(cross_product)的几何意义_images/img_102_1617dbdd2c5a.svg)
    
-   \*\*偏离程度（横向分量/面积）\*\*看叉积![](向量叉积_(cross_product)的几何意义_images/img_103_3e2edae8d085.svg)
    

极端情况一眼判：

-   同向：点积最大正，叉积为 0
    
-   正交：点积 0，叉积最大
    
-   反向：点积最大负，叉积为 0
    

* * *

### 6) 一个三维整数例子：同一对向量，同时“对齐”和“偏离”各是多少

取

![](向量叉积_(cross_product)的几何意义_images/img_104_2828215b9d51.svg)

-   点积（对齐）：
    

![](向量叉积_(cross_product)的几何意义_images/img_105_2d2eee1c2f57.svg)

投影到 ![](向量叉积_(cross_product)的几何意义_images/img_106_eb4a7a8f04c3.svg) 的向量：

![](向量叉积_(cross_product)的几何意义_images/img_107_0a44558d4538.svg)

说明 ![](向量叉积_(cross_product)的几何意义_images/img_108_8896dd8d1975.svg) 沿着 ![](向量叉积_(cross_product)的几何意义_images/img_109_8c4101273e73.svg) 的“对齐部分”正好是 ![](向量叉积_(cross_product)的几何意义_images/img_110_6d0e54c165d2.svg)。

-   叉积（偏离/面积）：
    

![](向量叉积_(cross_product)的几何意义_images/img_111_14cd3c6de2a3.svg)

![](向量叉积_(cross_product)的几何意义_images/img_112_f8f179198d0b.svg)

这就是以 ![](向量叉积_(cross_product)的几何意义_images/img_113_02bc7f0bfcf0.svg) 为边的平行四边形面积，法线朝 ![](向量叉积_(cross_product)的几何意义_images/img_114_f13d9af40685.svg)。

你也能看到“底×高”：

-   底 ![](向量叉积_(cross_product)的几何意义_images/img_115_b3072da70bff.svg)
    
-   高 ![](向量叉积_(cross_product)的几何意义_images/img_116_e8364b81402c.svg)
    
-   面积 ![](向量叉积_(cross_product)的几何意义_images/img_117_d746639efd5b.svg)
    

* * *

### 7) 最后一句把图里的三要素串起来

在那张图里：

-   平行四边形面积 ![](向量叉积_(cross_product)的几何意义_images/img_118_a9c3c6d2eabd.svg)（偏离）
    
-   夹角  同时由
    

-   点积给 ![](向量叉积_(cross_product)的几何意义_images/img_119_32b46da618af.svg)（对齐）
    
-   叉积给 ![](向量叉积_(cross_product)的几何意义_images/img_120_8e9814761730.svg)（偏离）
    

-   ![](向量叉积_(cross_product)的几何意义_images/img_121_1c446823e47e.svg)
    
     方向垂直于平面（“偏离发生的平面”的法线）
    

  

```
import numpy as np
```

运行后会生成 `gif`：

-   u 固定；![](向量叉积_(cross_product)的几何意义_images/img_122_c8ed41c80566.svg) 从 0 增长到 ![](向量叉积_(cross_product)的几何意义_images/img_123_cc038f2d371f.svg) 
-   平行四边形面积（![](向量叉积_(cross_product)的几何意义_images/img_124_e3dbf6d51cc6.svg)）同步增长
    
-   左上角实时显示点积（对齐）与叉积长度（偏离/面积）以及夹角。
    

  

![](向量叉积_(cross_product)的几何意义_images/img_125_7855577d79bd.gif)

**GIF 上部**显示一个图例（Legend），并且用不同颜色区分：

-   **蓝色：![](向量叉积_(cross_product)的几何意义_images/img_126_c5361667a6a2.svg)**
-   **橙色：![](向量叉积_(cross_product)的几何意义_images/img_127_817b08177270.svg)**
-   **绿色：![](向量叉积_(cross_product)的几何意义_images/img_128_2aef96155fd5.svg)**
-   **红色弧线：夹角 ![](向量叉积_(cross_product)的几何意义_images/img_129_8fc898d08230.svg)**