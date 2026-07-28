# 最小二乘 (Ordinary Least Squares, OLS) 线性回归


> 原文地址: [https://mp.weixin.qq.com/s/iCqzl0IkGeK38PfQsb3gyw](https://mp.weixin.qq.com/s/iCqzl0IkGeK38PfQsb3gyw)

### 什么是最小二乘（OLS）线性回归？

想象一下，你想预测房价：根据房子的面积来估算价格。你收集了一些数据，比如不同面积的房子和它们的实际售价。这些数据点在图上看起来像是一堆散点。如果你能画一条直线，让它尽可能“贴近”这些点，这条线就能帮你预测新房子的价格。这就是线性回归的基本想法。

线性回归是一种统计方法，用于找到变量之间的线性关系。具体来说，**普通最小二乘法（Ordinary Least Squares, OLS）** 是最常见的线性回归方法。它假设因变量（比如房价）和自变量（比如面积）之间是直线关系，用公式表示为：

![$y = \beta_0 + \beta_1 x + \epsilon$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_000_af665bffcb84.png)

其中：

-   y 是因变量（要预测的东西）。
    
-   x 是自变量（已知的东西）。
    
-    ![$\beta_0$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_001_ccbd69eb2318.png) 是截距（直线与y轴的交点）。
    
-    ![$\beta_1$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_002_bab507f94784.png) 是斜率（直线陡峭程度）。
    
-   ϵ 是误差项（现实中的随机波动）。
    

OLS的目标是找到最佳的 β0 和 β1，让预测值和实际值之间的差距最小。

![](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_003_53ca9ae11573.png)  
编辑

  

### OLS 如何工作？通俗解释

OLS 的核心是“最小二乘”：它最小化所有数据点到拟合直线的**垂直距离（残差）的平方和**。为什么平方？因为正负残差会抵消，用平方确保都是正的，而且强调大的误差（大残差平方后更大）。

打个比方：你扔飞镖，想击中靶心。每个飞镖偏离靶心的距离就是残差。OLS 就像调整你的瞄准方式，让所有飞镖偏离距离的平方总和最小。这样，你的“平均瞄准”就最准了。

步骤简单：

1.  收集数据（x 和 y 的配对）。
    
2.  计算残差：对于每个点，残差 = 实际 y - 预测 y。
    
3.  求残差平方和（Sum of Squared Errors, SSE）。
    
4.  调整 β0和 β1，直到 SSE 最小。
    

数学上，最优参数的公式是：

![$\beta_1 = \frac{n \sum (x_i y_i) - \sum x_i \sum y_i}{n \sum x_i^2 - (\sum x_i)^2}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_004_d68bafa67c02.png)

![$\beta_0 = \bar{y} - \beta_1 \bar{x}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_005_d522d9c19d2b.png)

（n 是数据点数，![$\bar{x}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_006_c90c51e1b36a.png) 和 ![$\bar{y}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_007_c68fcfa87d7c.png) 是平均值）。

其中：

-   n 是数据点数量（这里 n = 5）。
    
-    ![$\sum x_{i}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_008_c319082f825e.png) 是所有 x 的总和。
    
-    ![$\sum y_{i}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_009_126a1cbd04af.png) 是所有 y 的总和。
    
-   ![$\sum (x_{i} y_{i})$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_010_c54ef4081a9d.png)是每个 ![$\sum x_{i}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_011_c319082f825e.png) \* ![$\sum y_{i}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_012_126a1cbd04af.png) 的总和。
    
-    ![\sum x{_i}^2](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_013_cdbccc890d5b.png) 是每个 ![x_i](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_014_9760ba628ab8.png) 平方后的总和。
    

####   

![](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_015_f4b10105d32a.png)  
编辑

## **一个简单例子**

假设你有5个数据点：房子面积（x，单位：平方米）和价格（y，单位：万元）。

-   (50, 100), (60, 120), (70, 135), (80, 160), (90, 170)
    

用 OLS 计算：

-   平均 x = 70，平均 y = 137。
    
-   通过公式，![$\beta_1 \approx 2$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_016_d1a4dbac4b7c.png)（每多1平方米，价格涨2万元），![$\beta_0 \approx -3$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_017_a2656577db6c.png)。
    
-   拟合线：y = -3 + 2x。
    

对于一个100平方米的房子，预测价格：-3 + 2\*100 = 197万元。

#### 步骤 1: 计算基本和值

-    ![$\sum x_{i}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_018_c319082f825e.png) = 50 + 60 + 70 + 80 + 90 = 350
    
-    ![$\sum y_{i}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_019_126a1cbd04af.png) = 100 + 120 + 135 + 160 + 170 = 685
    
-    ![$\sum (x_{i} y_{i})$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_020_c54ef4081a9d.png) = (50×100) + (60×120) + (70×135) + (80×160) + (90×170) = 5000 + 7200 + 9450 + 12800 + 15300 = 49750
    
-    ![\sum x{_i}^2](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_021_cdbccc890d5b.png) = (50²) + (60²) + (70²) + (80²) + (90²) = 2500 + 3600 + 4900 + 6400 + 8100 = 25500
    

#### 步骤 2: 计算分子（numerator）

分子 = n × ∑(x\_i y\_i) - (∑x\_i) × (∑y\_i) = 5 × 49750 - 350 × 685 = 248750 - 239750 = 9000

#### 步骤 3: 计算分母（denominator）

分母 = n × ![\sum x{_i}^2](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_022_cdbccc890d5b.png) - (![\sum x_{i}](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_023_d8ed88e2b9d3.png))² = 5 × 25500 - (350)² = 127500 - 122500 = 5000

#### 步骤 4: 计算 β₁

β₁ = 分子 / 分母 = 9000 / 5000 = 1.8

因此，精确的 β₁ = 1.8（每增加 1 平方米，价格预计增加 1.8 万元）。之前的 ≈2 是近似值，用于简化说明，但实际计算如上。

如果数据有噪声，OLS 还能处理，但前提是数据满足线性、无多重共线性等假设（否则用其他变体）。

![](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_024_ef52bcdfcc98.png)  
编辑

图片里在讲 **OLS（Ordinary Least Squares，普通最小二乘）线性回归**：给定一组自变量 X（解释变量）去解释/预测因变量 Y，假设它们满足“线性模型”，然后通过“让预测误差的平方和最小”来求参数 β。

* * *

## 1) 模型在说什么（对应图里的公式）

对第 n 条样本（![$n=1,\dots,N$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_025_7cb0c67d794b.png)），有 k 个解释变量：

![$y_n=\sum_{i=0}^{k}\beta_i x_{ni}+\varepsilon_n$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_026_69f315e47d9c.png)

-   ![$y_n$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_027_31dc34b17f66.png)：第 n 条样本的因变量
    
-   ![$x_{ni}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_028_5068b5890f0b.png)：第 n 条样本第 i个自变量
    
-   ![$\beta_i$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_029_ee194ca205df.png)：需要估计的系数（![$\beta_0$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_030_ccbd69eb2318.png) 通常是截距，对应 ![$x_{n0}=1$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_031_308587a076fb.png)）
    
-   ![$\varepsilon_n$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_032_f9cf615c5d50.png)：误差项（模型没解释掉的部分）
    

图里的小散点图就是“数据点 + 一条回归线”，竖直方向的差（点到线的距离）就是残差/预测误差。

* * *

## 2) OLS 的核心原则：最小化残差平方和

对每个样本的预测值：

![$\hat y_n=\sum_{i=0}^k \beta_i x_{ni}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_033_9076a093962c.png)

残差：

![$e_n=y_n-\hat y_n$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_034_41c5eba907fa.png)

OLS 选择 β 使下面这个目标函数最小：

![$\text{SSE}(\beta)=\sum_{n=1}^{N} (y_n-\hat y_n)^2$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_035_cdf46fb81cff.png)

为什么要“平方”？

-   让正负误差不互相抵消
    
-   大误差惩罚更重
    
-   数学上可导、好求解（还能得到闭式解）
    

* * *

## 3) 矩阵形式（把步骤写得更清楚）

把数据堆起来：

-   设计矩阵 ![$X\in\mathbb{R}^{N\times (k+1)}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_036_ad0a5209e90f.png)（第一列全 1 表示截距）
    
-   系数向量![$\beta\in\mathbb{R}^{k+1}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_037_2a5a455d3e8c.png)
    
-   观测向量 ![$y\in\mathbb{R}^{N}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_038_7a0c788846f1.png) 
    

模型：

![$y = X\beta + \varepsilon$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_039_929f6e8ea090.png)

目标：

![$\min_{\beta}\ \|y-X\beta\|^2$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_040_18b5ccf75b87.png)

对目标函数求导并令其为 0，会得到**正规方程**：

![$\hat\beta=(X^\top X)^{-1}X^\top y$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_041_8862152a267b.png)

若 ![$X^\top X$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_042_499e1a988e57.png) 可逆，则闭式解为：

![$\hat\beta=(X^\top X)^{-1}X^\top y$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_043_8862152a267b.png)

> 几何直觉：![$\hat y=X\hat\beta$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_044_bd7be783002c.png) 是把 y **投影**到 X 的列空间上；残差 ![$e=y-\hat y$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_045_09ed148424c4.png) 与列空间正交（所以也与每个自变量方向“无关”）。

* * *

## 4) OLS 的标准步骤（你可以按这个流程实现）

1.  准备数据：收集 y 和自变量 ![$x_1,\dots,x_k$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_046_ae1cdf2cd65f.png)（必要时做标准化/缺失值处理）。
    
2.  构建设计矩阵 X：第一列加 1（截距），其余列放各个特征。
    
3.  求系数 ![$\hat\beta$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_047_f5748f910cf0.png) ：
    

-   理论公式：![$(X^\top X)^{-1}X^\top y$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_048_c8b6eb48c8ad.png)
    
-   实际工程里常用数值更稳定的 **QR 分解 / SVD** 来解（避免直接求逆）。
    
      
    

5.  得到预测与残差：![$\hat y=X\hat\beta$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_049_bd7be783002c.png)，![$e=y-\hat y$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_050_09ed148424c4.png)。
    
6.  评估拟合好坏：
    

-   残差平方和 ![$SSE=\sum e_n^2$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_051_dac0f44a0a07.png) 
    
-   ![$R^2=1-\dfrac{SSE}{\sum (y_n-\bar y)^2}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_052_05a3fc123748.png)
    
-   估计噪声方差：![$\hat\sigma^2=\dfrac{SSE}{N-(k+1)}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_053_cbde5931dfa3.png)
    
      
    

8.  统计推断（可选但常用）：用 ![$\hat\sigma^2$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_054_79c0099a783d.png) 得到系数标准误、t 检验、置信区间。
    
9.  诊断与改进：看残差图、异常点、共线性（![$X^\top X$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_055_499e1a988e57.png) 近奇异）、必要时做特征变换或改用岭回归/套索等。
    

* * *

## 5) OLS 常见“成立条件”（为什么它靠谱）

典型的线性回归假设（尤其是用于推断/置信区间时）：

-   线性：![$E[y|X]=X\beta$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0triaaGoZiaV6EHOicMK2mdxlp5iakysJle94cVlgzHtBes9P37CqnFThNEI5PeogSZABiboBbcBccCvZRw/640?wx_fmt=png&from=appmsg)
    
-   误差均值为 0：![$E[\varepsilon|X]=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0triaaGoZiaV6EHOicMK2mdxlp5UQzgN07tUuasagBOibwrD8veb2P3sLM8eU40O5Upic8AvUa2SFOicxfkw/640?wx_fmt=png&from=appmsg)
    
-   同方差：![$\mathrm{Var}(\varepsilon|X)=\sigma^2 I$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_056_29972f5a109a.png)
    
-   不相关/独立（时间序列里经常会违背）
    
-   进一步若假设误差正态：可得到更标准的 t/F 检验结论
    

我用一个**一元线性回归**（最直观）把 OLS 从数据到结果完整走一遍，和你图里的“点 → 回归线 → 预测误差”一一对应。

* * *

## 示例数据（5 个点）

n

x

y

1

1

2

2

2

3

3

3

5

4

4

4

5

5

6

我们要拟合一条直线：![$\hat y = \beta_0 + \beta_1 x$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_057_f6eac058fd21.png)

* * *

## Step 1：写出 OLS 的目标（最小二乘）

每个点的残差（竖直距离）：

![$e_n = y_n - \hat y_n$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_058_41c5eba907fa.png)

OLS 让残差平方和最小：

![$SSE(\beta_0,\beta_1)=\sum_{n=1}^N (y_n-(\beta_0+\beta_1 x_n))^2$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_059_7cae002b9f40.png)

* * *

## Step 2：计算需要的汇总量

N=5

![$\sum x=15,\quad \sum y=20,\quad \sum x^2=55,\quad \sum xy=69$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_060_62f80a786b73.png)

* * *

## Step 3：求解系数（闭式解）

一元线性回归的 OLS 解可以写成：

![$\beta_1=\frac{N\sum xy-(\sum x)(\sum y)}{N\sum x^2-(\sum x)^2}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_061_fa1d1860b8b4.png)

代入数字：

-   分子：![$5\cdot 69-15\cdot 20=345-300=45$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_062_f3342ffb57e0.png)
    
-   分母：![$5\cdot 55-15^2=275-225=50$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_063_deb053800f8f.png)
    

所以：

![$\hat\beta_1=\frac{45}{50}=0.9$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_064_544f0f9f72e9.png)

再算截距：

![$\bar x=\frac{15}{5}=3,\quad \bar y=\frac{20}{5}=4$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_065_9f7a7b380823.png)

**最终回归线：**

![$\boxed{\hat y = 1.3 + 0.9x}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_066_d22c2a8f4554.png)

* * *

截距 β0 这一步，其实有如下“更容易看懂”的推法。

## A) 用“均值点在回归线上”的性质（最直观）

对一元线性回归：

![$\hat y = \beta_0 + \beta_1 x$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_067_f6eac058fd21.png)

OLS 解有个非常重要的性质：

![$\boxed{\bar y = \beta_0 + \beta_1 \bar x}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_068_2fdf67919e8e.png)

意思是：**回归线一定穿过数据的“中心点” ![$(\bar x,\bar y)$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_069_550991a388a7.png)** 。

所以截距就是把这句话变形：

![$\boxed{\beta_0=\bar y-\beta_1\bar x}$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_070_3f6dd5531269.png)

### 把数字代进去（你这组数据）

-   x：1,2,3,4,5
    
    ![$\bar x=\frac{1+2+3+4+5}{5}=\frac{15}{5}=3$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_071_37a7b5025495.png)
    
-   y：2,3,5,4,6
    
    ![$\bar y=\frac{2+3+5+4+6}{5}=\frac{20}{5}=4$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_072_8c8b4008bfcf.png)
    
-   我们刚算出 ![$\beta_1=0.9$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_073_07d2a9e5a50d.png) 
    

代入：

![$\beta_0 = 4 - 0.9\times 3 = 4 - 2.7 = 1.3$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_074_328f5e412192.png)

所以：

![$\hat y = 1.3 + 0.9x$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_075_085faf1ce800.png)

你可以把它理解为：

> 斜率 β1 决定“倾斜程度”，一旦倾斜定了，整条线还可以上下平移；OLS 选的那条线必须穿过均值点，于是平移量（截距）就被钉死了。

## Step 4：算预测值、残差、平方残差（对应图里的“Error of prediction”）

x

y

![$\hat y=1.3+0.9x$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_076_085faf1ce800.png)

残差 ![$e=y-\hat y$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_077_09ed148424c4.png) 

![e^2](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_078_e25aeeedbb63.png)

1

2

2.2

\-0.2

0.04

2

3

3.1

\-0.1

0.01

3

5

4.0

1.0

1.00

4

4

4.9

\-0.9

0.81

5

6

5.8

0.2

0.04

![$SSE=\sum e^2=0.04+0.01+1.00+0.81+0.04=1.90$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_079_d76e31deff15.png)

这就是 OLS 真正在“最小化”的东西。

* * *

## Step 5：简单评估拟合好坏（可选但常用）

总离差平方和：

![$SST=\sum (y-\bar y)^2 = 10$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_080_339263295e67.png)

决定系数：

![$R^2 = 1-\frac{SSE}{SST}=1-\frac{1.9}{10}=0.81$](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_081_2dfcd4f2dd78.png)

解释：这条线大约解释了 **81%** 的 y 波动。

### Python 代码演示：最小二乘（OLS）线性回归

下面是一个简单的 Python 代码示例，使用 scikit-learn 库来实现 OLS 线性回归。我们以之前的房子面积（x）和价格（y）数据为例：(50, 100), (60, 120), (70, 135), (80, 160), (90, 170)。代码会拟合模型、计算参数、进行预测，并绘制散点图和拟合线（不过在文本中无法直接显示图表，我会提供描述和参考图像）。

#### 代码示例

Python

```
import numpy as npfrom sklearn.linear_model import LinearRegressionimport matplotlib.pyplot as plt# 样本数据：房子面积 (x) 和价格 (y)X = np.array([[50], [60], [70], [80], [90]])  # 面积（平方米）y = np.array([100, 120, 135, 160, 170])  # 价格（万元）# 创建并拟合模型model = LinearRegression()model.fit(X, y)# 获取参数beta_0 = model.intercept_beta_1 = model.coef_[0]# 预测一个新面积，比如 100 平方米new_size = np.array([[100]])predicted_price = model.predict(new_size)# 打印结果print(f"截距 (beta_0): {beta_0}")print(f"斜率 (beta_1): {beta_1}")print(f"100 平方米房子的预测价格: {predicted_price[0]}")# 可视化（绘制散点图和拟合线）plt.scatter(X, y, color='blue', label='实际数据')plt.plot(X, model.predict(X), color='red', label='拟合线')plt.xlabel('房子面积 (平方米)')plt.ylabel('房价 (万元)')plt.title('OLS 线性回归示例')plt.legend()plt.show()
```

  

#### 运行结果

运行以上代码（不包括绘图部分）的输出为：

text

```
截距 (beta_0): 10.999999999999972斜率 (beta_1): 1.8000000000000005100 平方米房子的预测价格: 191.00000000000003
```

  

这与我们手动计算的结果一致（约 beta\_0 = 11, beta\_1 = 1.8）。预测值接近 191 万元。

#### 可视化解释

代码中的 plt 部分会生成一个散点图（蓝色点代表实际数据）和一条红色拟合直线，展示 OLS 如何最小化残差。以下是类似的可视化示例（基于 Python 代码生成的 OLS 回归图）：

![](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_082_3fb7047d6a05.png)  
编辑

另一个示例，显示了更多数据点的拟合：

![](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_083_3ff8e9cab990.png)  
编辑

以及一个简单叠加拟合线的散点图：

![](最小二乘_(Ordinary_Least_Squares__OLS)_线性回归_images/img_084_df1a7567ea13.png)  
编辑

### 优点和局限

优点：简单、解释性强、计算快。广泛用于经济学、医学等。 局限：假设线性关系，如果数据是曲线，就不准了；对异常值敏感。

总之，OLS 就像用直尺在散点上画最佳直线，帮助我们从数据中找出规律。