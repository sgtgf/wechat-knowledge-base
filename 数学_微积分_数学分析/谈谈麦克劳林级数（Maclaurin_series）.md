# 谈谈麦克劳林级数（Maclaurin series）


> 原文地址: [https://mp.weixin.qq.com/s/t\_CVBP-LO-6eQ2sxN9UoCQ](https://mp.weixin.qq.com/s/t_CVBP-LO-6eQ2sxN9UoCQ)

## 1）麦克劳林级数到底是什么？     

麦克劳林级数（Maclaurin series）其实是泰勒级数的一个特殊版本。记得我们之前聊的泰勒公式吗？它是在任意点 a 附近展开函数，而麦克劳林级数就是把 a 设置为 0 的情况。简单说，它用多项式来近似函数在 x=0 附近的形状，就像用直线、抛物线一步步逼近曲线，但起点固定在原点。

为什么叫麦克劳林？因为它是由苏格兰数学家科林·麦克劳林在18世纪推广的，但其实牛顿和泰勒早就有类似想法。它特别适合那些在0点附近“对称”或容易计算导数的函数，比如三角函数、指数函数。

公式长这样： 

![$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots + \frac{f^{(n)}(0)}{n!}x^n + \cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_000_7a2c397d7fc9.png)

这里的![f^{(n)}(0)](谈谈麦克劳林级数（Maclaurin_series）_images/img_001_797399c59abb.png) 是函数在0点的 n 阶导数，! 是阶乘（比如 3! = 6）。

通俗比喻：想象你站在原点（x=0），看一条路（函数）。第一项告诉你起点高度，第二项告诉你坡度（速度），第三项告诉你弯曲度（加速度），以此类推。加的项越多，路就画得越准。

**一句话：**  
麦克劳林级数就是**泰勒级数在 x=0 处的特例**——用“在 0 点的函数值、导数值”拼出一个多项式（再把次数无限加下去），去逼近原函数。

你可以把它想成：

> **在 x=0 附近，用一个越来越高次的多项式，去“复刻”函数的形状。**  
> 而“复刻”的标准是：在 0 点处 **值一样、斜率一样、弯曲程度一样、再往后的弯曲也一样……**（也就是各阶导数都匹配）。

* * *

## 2）为什么会出现 n!（阶乘）？

因为多项式的导数会带来“乘下来”的系数。比如：

-     
    
-   ![\frac{d}{dx}(x^3)=3x^2](谈谈麦克劳林级数（Maclaurin_series）_images/img_002_0d0812eb6260.png)
    
-     
    
-   ![\frac{d^2}{dx^2}(x^3)=3\cdot 2 x](谈谈麦克劳林级数（Maclaurin_series）_images/img_003_59e1d0509fcf.png)
    
-     
    
-   ![\frac{d^3}{dx^3}(x^3)=3\cdot 2\cdot 1=3](谈谈麦克劳林级数（Maclaurin_series）_images/img_004_6c7905d4f173.png)
    

所以为了让“第 n 阶导数在 0 点”刚好对齐，就必须用 ![\frac{1}{n!}](谈谈麦克劳林级数（Maclaurin_series）_images/img_005_cea5298c7ff6.png) 来抵消这种阶乘增长。

![](谈谈麦克劳林级数（Maclaurin_series）_images/img_006_a3a72260f1cd.png)  
编辑

## 3）图里每一行在说什么？

### (1) ![$e^x$](谈谈麦克劳林级数（Maclaurin_series）_images/img_007_3bf59763c37d.png) 

![$e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_008_4c84aa331e66.png)

直觉：![$e^x$](谈谈麦克劳林级数（Maclaurin_series）_images/img_009_3bf59763c37d.png) 的所有阶导数都还是 ![$e^x$](谈谈麦克劳林级数（Maclaurin_series）_images/img_010_3bf59763c37d.png)，所以在 0 点：

![$e^0=1,\quad (e^x)'|_{0}=1,\quad (e^x)''|_{0}=1,\ldots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_011_ad95acc67327.png)

于是每一项系数都很“整齐”。

* * *

### (2) sin⁡x

![$\sin x=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k+1}}{(2k+1)!} =x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_012_e4fb6d137c7f.png)

特点：

-   只有**奇次幂**（因为 sin⁡ 是奇函数）
    
-   正负号交替（对应 sin⁡,cos⁡,−sin⁡,−cos⁡ 的导数循环）
    

* * *

### (3) cos⁡x

![$\cos x=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k}}{(2k)!} =1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_013_704714eba9ed.png)

特点：

-   只有**偶次幂**（因为 cos⁡ 是偶函数）
    
-   正负号交替
    

* * *

### (4) ![\frac{1}{1-x}](谈谈麦克劳林级数（Maclaurin_series）_images/img_014_f74238fa8e40.png)（几何级数）

![$\frac{1}{1-x}=\sum_{k=0}^{\infty}x^k=1+x+x^2+x^3+\cdots \quad (\text{if }-1<x<1)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_015_4fb9b6330f2a.png)

这行非常重要：它告诉你**不是所有“无穷展开”对所有 xxx 都成立**。  
这里必须 ∣x∣<1，否则右边发散（越加越大）。

* * *

### (5) ln⁡(1+x)

![$\ln(1+x)=\sum_{k=1}^{\infty}(-1)^{k+1}\frac{x^k}{k} =x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots \quad (\text{if }-1<x\le 1)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_016_cab363662dbc.png)

特点：

-   幂次从 ![x^1](谈谈麦克劳林级数（Maclaurin_series）_images/img_017_ddfb7acde15a.png) 开始（因为 ln⁡(1+0)=0）
    
-   系数是 ![1,\frac12,\frac13,\frac14,\ldots](谈谈麦克劳林级数（Maclaurin_series）_images/img_018_b42b92021ca3.png)（很有辨识度）
    
-   收敛区间写在图右侧：−1<x≤1
    

* * *

## 4）它有什么用？（最直观的用法）

**用前几项就能近似计算**（在 x=0 附近尤其好用）：

-   sin⁡x≈x（当 x 很小时）
    
-   ![\cos x \approx 1-\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_019_719a8a510abb.png)
    
-   ![e^x \approx 1+x+\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_020_af107e4e5268.png)
    
-   ![\ln(1+x)\approx x-\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_021_aa938c922287.png)
    

所以很多“近似公式”“物理里的小角度近似”“算法里的快速估计”本质上都在用麦克劳林级数截断后的多项式。

* * *

## 5）一个很关键的提醒：它只在“合适的范围”靠谱

-   麦克劳林级数是**在 0 附近**逼近函数：离 0 越近，通常越准（当然也看函数性质）。
    
-   像 ![\frac{1}{1-x}](谈谈麦克劳林级数（Maclaurin_series）_images/img_022_f74238fa8e40.png)、![\ln(1+x)](谈谈麦克劳林级数（Maclaurin_series）_images/img_023_4ecfc897d135.png) 这种，**还有严格的收敛区间**（图里已经标出来了）。
    

### sin(x) 的麦克劳林级数推导详解

我们来一步一步慢慢拆解推导过程。咱们从基础开始，不跳步，用通俗语言解释。麦克劳林级数本质上是“用导数信息从原点重建函数”。对于 sin(x)，它特别简单，因为导数有周期性（sin → cos → -sin → -cos → sin...），值在 x=0 时容易算。

#### 第一步：回忆麦克劳林级数的通用公式

**麦克劳林级数是泰勒级数在点 a=0 的特殊形式**。基本想法：任何“光滑”（无限可导）的函数 f(x) 都可以用无限多项式表示： 

![$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$](谈谈麦克劳林级数（Maclaurin_series）_images/img_024_dae8a20b3444.png)

这里：

-   ![$f^{(n)}(0)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_025_797399c59abb.png)
    
     是 f(x) 的 n 阶导数在 x=0 的值。
    
-   n! 是 n 的阶乘（0! = 1, 1! = 1, 2! = 2, 3! = 6, 等）。
    
-   ∑ 表示从 n=0 到无穷的求和。
    

为什么这样？因为每个项捕捉了函数在原点的“变化层级”：0阶是高度，1阶是斜率，2阶是曲率，等等。这基于泰勒定理（证明涉及积分余项，但我们先不深挖）。

现在，f(x) = sin(x)，咱们来计算每个 ![$f^{(n)}(0)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_026_797399c59abb.png)，然后代入。

#### 第二步：计算 sin(x) 的各阶导数

sin(x) 的导数有规律，像个循环：每4阶重复一次，但符号翻转。我们一步步求：

**0阶导数**（就是函数本身）：

![$f(x) = \sin(x)\Rightarrow f(0) = \sin(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_027_4eed57621252.png)

**1阶导数**： 

![$f'(x) = \cos(x)\Rightarrow f'(0) = \cos(0) = 1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_028_28a671943b25.png)

**2阶导数**：

 ![$f''(x) = -\sin(x)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_029_a594ae982935.png) （因为 cos(x) 的导数是 -sin(x)）

![$f''(0) = -\sin(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_030_dbacf19a940d.png)

**3阶导数**： 

 ![$f'''(x) = -\cos(x)$](D:\电脑文件\公众号知识库\数学_微积分_数学分析\谈谈麦克劳林级数（Maclaurin_series）_images\img_000_cc93c8d433f0.png) （-sin(x) 的导数是 -cos(x)）

![$f'''(0) = -\cos(0) = -1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_032_ceaf6b2caaed.png)

**4阶导数**：

 ![$f^{(4)}(x) = \sin(x)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_033_9bad86edd972.png) （-cos(x) 的导数是 sin(x)）

 ![$f^{(4)}(0) = \sin(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_034_50fc72c60d39.png) （注意，这里回到了 sin(x)，循环开始了）

**5阶导数**：

![$f^{(5)}(x) = \cos(x)\Rightarrow f^{(5)}(0) = 1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_035_d58a892bafc9.png)

**6阶导数**：

![$f^{(6)}(x) = -\sin(x)\Rightarrow f^{(6)}(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_036_b86fc955a007.png)

**7阶导数**：

![$f^{(7)}(x) = -\cos(x)\Rightarrow f^{(7)}(0) = -1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_037_bff8e23fb664.png)

你看出来模式了吗？导数值在 x=0 只在奇数阶（n=1,3,5,7,...）非零：1, -1, 1, -1,... 交替符号。偶数阶（n=0,2,4,6,...）全为0。

更精确地说，对于 n = 2k (偶数)， ![$f^{(2k)}(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_038_2f468e2f685d.png) 

对于 n = 2k+1 (奇数)， ![$f^{(2k+1)}(0) = (-1)^k$](谈谈麦克劳林级数（Maclaurin_series）_images/img_039_0aa2e198e039.png) （k从0开始：1, -1, 1, -1...）

这里用表格总结前几阶，便于看：

n (阶数)

导数表达式

在 x=0 的值

0

sin(x)

0

1

cos(x)

1

2

\-sin(x)

0

3

\-cos(x)

\-1

4

sin(x)

0

5

cos(x)

1

6

\-sin(x)

0

7

\-cos(x)

\-1

...

...

...

#### 第三步：代入麦克劳林公式

现在，把这些值塞进公式。每项是 ![\frac{f^{(n)}(0)}{n!} x^n](谈谈麦克劳林级数（Maclaurin_series）_images/img_040_28606cc97dee.png) 

-   n=0: ![\frac{0}{0!} x^0 = 0](谈谈麦克劳林级数（Maclaurin_series）_images/img_041_f9aee9acd6f0.png) （忽略）
    
-   n=1: ![\frac{1}{1!} x^1 = x](谈谈麦克劳林级数（Maclaurin_series）_images/img_042_cb8d891fdf0c.png) 
    
-   n=2: ![\frac{0}{2!} x^2 = 0](谈谈麦克劳林级数（Maclaurin_series）_images/img_043_882bf6419041.png) 
    
-   n=3: ![\frac{-1}{3!} x^3 = -\frac{x^3}{6}](谈谈麦克劳林级数（Maclaurin_series）_images/img_044_2ac451e5b7f5.png) 
    
-   n=4: 0
    
-   n=5: ![\frac{1}{5!} x^5 = \frac{x^5}{120}](谈谈麦克劳林级数（Maclaurin_series）_images/img_045_adda27e686ef.png) 
    
-   n=6: 0
    
-   n=7: ![\frac{-1}{7!} x^7 = -\frac{x^7}{5040}](谈谈麦克劳林级数（Maclaurin_series）_images/img_046_12327593d824.png) 
    
-   以此类推...
    

所以，只剩奇数项：

![$\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \frac{x^9}{9!} - \cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_047_ff8034d1822c.png)

通用形式：

![$\sin(x) = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_048_d2f07a46bca7.png)

这里的 k 是计数器（k=0: x/1!, k=1: ![-\frac{x^3}{3!}](谈谈麦克劳林级数（Maclaurin_series）_images/img_049_15a90b39b7ef.png), k=2: ![+\frac{x^5}{5!}](谈谈麦克劳林级数（Maclaurin_series）_images/img_050_7ad74de5ac75.png), 等）。

#### 第四步：为什么这样就对了？（验证和收敛）

这不是随意编的——它是精确的，因为 sin(x) 是“解析函数”，级数在所有实数 x 上收敛到 sin(x)。你可以用计算器验证：比如 x= π/6 ≈0.5236，sin(0.5236)≈0.5

-   只用第一项：x≈0.5236
    
-   加第三项：0.5236 - (0.5236)^3 /6 ≈0.5236 - 0.0238≈0.4998 （超准！） 更高项误差更小。
    

如果 x 很大，需更多项，但总是收敛。

### cos(x) 的麦克劳林级数推导详解

咱们继续用 sin(x) 那种一步一步的慢节奏方式，来推导 cos(x) 的麦克劳林级数。cos(x) 和 sin(x) 其实是“亲兄弟”，导数关系很紧密：cos(x) 的导数就是 -sin(x)，而 sin(x) 的导数是 cos(x)。所以推导过程会很相似，但符号和零项的位置不一样。

#### 第一步：麦克劳林级数通用公式（回顾）

![f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n](谈谈麦克劳林级数（Maclaurin_series）_images/img_051_83992f73a232.png)

f(x) = cos(x)，我们需要计算 cos(x) 在 x=0 处的每一阶导数。

#### 第二步：计算 cos(x) 的各阶导数

cos(x) 的导数也有周期性循环，每4阶重复一次，但符号变化。一步步来：

**0阶导数**（函数本身）： 

![$f(x) = \cos(x)\Rightarrow f(0) = \cos(0) = 1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_052_78cfe563b553.png)

**1阶导数**：

![$f'(x) = -\sin(x)\Rightarrow f'(0) = -\sin(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_053_5dbe64dba8ec.png)

**2阶导数**：

![$f''(x) = -\cos(x)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_054_091d0794bdf6.png)（-sin(x) 的导数是 -cos(x)）

![$f''(0) = -\cos(0) = -1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_055_42a71be069f1.png)

**3阶导数**：

![$f'''(x) = \sin(x)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_056_8853db569ba4.png)（-cos(x) 的导数是 sin(x)）

![$f'''(0) = \sin(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_057_bcc522ae7963.png)

**4阶导数**：

 ![$f^{(4)}(x) = \cos(x)$](谈谈麦克劳林级数（Maclaurin_series）_images/img_058_c6c63370da9b.png) （sin(x) 的导数是 cos(x)）

![$f^{(4)}(0) = \cos(0) = 1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_059_2158137b4a59.png)

**5阶导数**：

![$f^{(5)}(x) = -\sin(x)\Rightarrow f^{(5)}(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_060_1b0f584ed359.png)

**6阶导数**：

![$f^{(6)}(x) = -\cos(x)\Rightarrow f^{(6)}(0) = -1$](谈谈麦克劳林级数（Maclaurin_series）_images/img_061_ff27e101dae0.png)

**7阶导数**：

![$f^{(7)}(x) = \sin(x)\Rightarrow f^{(7)}(0) = 0$](谈谈麦克劳林级数（Maclaurin_series）_images/img_062_9c5afac34deb.png)

你会发现：

  

-   **偶数阶**
    
    （n=0,2,4,6,...）非零：1, -1, 1, -1,... 交替符号。
    
      
    
-   **奇数阶**
    
    （n=1,3,5,7,...）全为0。
    

更精确地说，对于 n = 2k（偶数）：

 ![$f^{(2k)}(0) = (-1)^k$](谈谈麦克劳林级数（Maclaurin_series）_images/img_063_3b60550897b8.png) （k从0开始：1, -1, 1, -1...）

用表格总结前几阶：

n (阶数)

导数表达式

在 x=0 的值

0

cos(x)

1

1

\-sin(x)

0

2

\-cos(x)

\-1

3

sin(x)

0

4

cos(x)

1

5

\-sin(x)

0

6

\-cos(x)

\-1

7

sin(x)

0

...

...

...

#### 第三步：代入麦克劳林公式

现在，把这些值塞进公式：

-   n=0: ![\frac{1}{0!} x^0 = 1](谈谈麦克劳林级数（Maclaurin_series）_images/img_064_79356ef07a4b.png) 
    
-   n=1: ![\frac{0}{1!} x^1 = 0](谈谈麦克劳林级数（Maclaurin_series）_images/img_065_93d3341a92d6.png) 
    
-   n=2: ![\frac{-1}{2!} x^2 = -\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_066_d978e91af658.png) 
    
-   n=3: 0
    
-   n=4: ![\frac{1}{4!} x^4 = \frac{x^4}{24}](谈谈麦克劳林级数（Maclaurin_series）_images/img_067_9d373b77b85c.png) 
    
-   n=5: 0
    
-   n=6: ![\frac{-1}{6!} x^6 = -\frac{x^6}{720}](谈谈麦克劳林级数（Maclaurin_series）_images/img_068_395fe0aaedc9.png) 
    
-   n=7: 0
    
-   以此类推...
    

所以，只剩**偶数项**： 

![$\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_069_b1a09d24f1f0.png)

通用形式： 

![$\cos(x) = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_070_fb3d70035066.png)

（k=0: 1, k=1: ![-\frac{x^2}{2!}](谈谈麦克劳林级数（Maclaurin_series）_images/img_071_b2bc08de5b77.png), k=2: ![+\frac{x^4}{4!}](谈谈麦克劳林级数（Maclaurin_series）_images/img_072_000d30125179.png), 等）

#### 第四步：为什么这样就对了？（验证）

cos(x) 是偶函数（cos(-x)=cos(x)），所以级数只有偶次幂项，这和我们推导一致。

小验证：取 x = π/3 ≈1.047

cos(1.047) ≈ 0.5

-   0阶：1
    
-   加2阶：1 - (1.047)^2 / 2 ≈ 1 - 0.547 ≈ 0.453
    
-   加4阶：0.453 + (1.047)^4 / 24 ≈ 0.453 + 0.049 ≈ 0.502 （已经很准了！） 更高阶误差更小。
    

  

#### 第五步：和 sin(x) 的对比（快速总结）

-   sin(x)：奇函数，只有奇次项，起始项 x
    
-   cos(x)：偶函数，只有偶次项，起始项 1
    
-   它们互为导数：cos'(x) = -sin(x)，sin'(x) = cos(x)
    
-   所以很多人一起记：
    
-   sin(x) = x - x³/3! + x⁵/5! - ...
    
-   cos(x) = 1 - x²/2! + x⁴/4! - ...
    

#### 注意事项

-   这个级数在所有实数 x 上收敛到 cos(x)，没有收敛半径限制。
    
-   误差（余项）很小：截断到 n 阶后， （因为导数绝对值 ≤1）。
    

下面我们用 **麦克劳林展开**来近似算 cos⁡x。注意：这里的 x=0.1 是 **弧度**。

![$\cos x = 1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_073_3578ddc435e8.png)

先把幂次算出来（x=0.1）：

-   ![$x^2=0.01$](谈谈麦克劳林级数（Maclaurin_series）_images/img_074_a38840d6a73c.png)
    
-   ![$x^4=0.0001$](谈谈麦克劳林级数（Maclaurin_series）_images/img_075_2a39f1ced31d.png)
    
-   ![$x^6=0.000001=10^{-6}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_076_768ef3489aa0.png)
    

阶乘：

-   2!=2
    
-   4!=24
    
-   6!=720
    

* * *

## 用前 2 项（到 ![$x^2$](谈谈麦克劳林级数（Maclaurin_series）_images/img_077_59549a16f074.png)）

![$\cos(0.1)\approx 1-\frac{0.01}{2}=1-0.005=0.995$](谈谈麦克劳林级数（Maclaurin_series）_images/img_078_c07a35a6d471.png)

误差大概：![$-4.17\times 10^{-6}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_079_404f29dec429.png)（约少了 0.00000417）

* * *

## 用前 3 项（到 ![$x^4$](谈谈麦克劳林级数（Maclaurin_series）_images/img_080_628f0bb64e27.png)）

![$\cos(0.1)\approx 1-\frac{0.01}{2}+\frac{0.0001}{24} =0.995+\;0.0000041666667 =0.9950041666667$](谈谈麦克劳林级数（Maclaurin_series）_images/img_081_027a621765d9.png)

误差大概：![$1.39\times 10^{-9}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_082_63ba302ef7b4.png)（已经非常小）

* * *

## 用前 4 项（到 ![$x^6$](谈谈麦克劳林级数（Maclaurin_series）_images/img_083_01a1ee3be3c8.png)）

![$\cos(0.1)\approx 0.9950041666667-\frac{0.000001}{720} =0.9950041666667-0.0000000013888889 =0.9950041652778$](谈谈麦克劳林级数（Maclaurin_series）_images/img_084_0fcc4bf1232d.png)

误差大概：![$-2.48\times 10^{-13}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_085_3aaa97ba3c60.png)（几乎等于精确值）

* * *

## 对比“真值”

计算器（高精度）：

![$\cos(0.1)=0.9950041652780258$](谈谈麦克劳林级数（Maclaurin_series）_images/img_086_0d27765359c1.png)

可以看到：**x=0.1 很小，cos⁡x 用到 ![$x^4$](谈谈麦克劳林级数（Maclaurin_series）_images/img_087_628f0bb64e27.png)就已经准到小数点后 9 位左右了**。

  

下面用 x=0.1（弧度）把“为什么常用 ![\cos x\approx 1-\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_088_719a8a510abb.png)”**和**误差怎么估讲透：

* * *

## 1）小角度近似从哪来？

![$\cos x = 1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots$](谈谈麦克劳林级数（Maclaurin_series）_images/img_089_3578ddc435e8.png)

当 x 很小时，![x^2, x^4, x^6](谈谈麦克劳林级数（Maclaurin_series）_images/img_090_dadf1f8ea3c5.png) 会迅速变小。  
所以最主要的变化先由前两项决定：

![\cos x \approx 1-\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_091_719a8a510abb.png)

这就是常见的“小角度近似”。

* * *

## 2）误差主要来自“下一项”

如果你只用到 ![1-\frac{x^2}{2}](谈谈麦克劳林级数（Maclaurin_series）_images/img_092_da13d33d304f.png)，那么被你忽略的第一项就是：

![$+\frac{x^4}{24}$](谈谈麦克劳林级数（Maclaurin_series）_images/img_093_5c5889800773.png)

因此误差的量级大约就是 ![\frac{x^4}{24}](谈谈麦克劳林级数（Maclaurin_series）_images/img_094_f97c294d5b09.png)（后面还有更小的项在微调）。

对 x=0.1：

-   ![x^4 = 0.0001](谈谈麦克劳林级数（Maclaurin_series）_images/img_095_89332d0fec8c.png)
    
-   ![\frac{x^4}{24}=\frac{0.0001}{24}=0.0000041666667](谈谈麦克劳林级数（Maclaurin_series）_images/img_096_78018ebb1ee8.png)
    

也就是说：

cos⁡(0.1)≈0.995  但真实值会比它大约 0.00000417

我们之前算过：

-   二项近似：0.9950.9950.995
    
-   真值：0.995004165278...
    

差值：

![$0.995004165278 - 0.995 \approx 0.000004165278$](谈谈麦克劳林级数（Maclaurin_series）_images/img_097_0b340d93a217.png)

和 ![\frac{x^4}{24}](谈谈麦克劳林级数（Maclaurin_series）_images/img_098_f97c294d5b09.png)几乎一模一样（因为下一项就是主要误差）。

* * *

## 3）“相对误差”大概多少？

绝对误差约 ![4.17\times 10^{-6}](谈谈麦克劳林级数（Maclaurin_series）_images/img_099_870354ebd553.png)。  
相对误差大概：

![$\frac{4.17\times 10^{-6}}{0.995}\approx 4.19\times 10^{-6} \approx 0.000419\%$](谈谈麦克劳林级数（Maclaurin_series）_images/img_100_1d3ab870512a.png)

也就是 **百万分之 4** 级别，非常小。

* * *

## 4）一个实用记法（工程上常用）

-   用到 ![$x^2$](谈谈麦克劳林级数（Maclaurin_series）_images/img_101_59549a16f074.png)：误差大概 ![\sim \frac{x^4}{24}](谈谈麦克劳林级数（Maclaurin_series）_images/img_102_975a399553d2.png) 
    
-   用到 ![$x^4$](谈谈麦克劳林级数（Maclaurin_series）_images/img_103_628f0bb64e27.png)：误差大概 ![\sim \frac{x^6}{720}](谈谈麦克劳林级数（Maclaurin_series）_images/img_104_0310b68c495e.png) 
    

对 x=0.1，![\frac{x^6}{720}=\frac{10^{-6}}{720}\approx 1.39\times 10^{-9}](谈谈麦克劳林级数（Maclaurin_series）_images/img_105_ef1aedd7f69d.png)，所以加上 ![$x^4$](谈谈麦克劳林级数（Maclaurin_series）_images/img_106_628f0bb64e27.png) 那一项后会立刻变得极准。