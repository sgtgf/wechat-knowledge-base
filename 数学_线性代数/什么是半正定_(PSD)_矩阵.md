# 什么是半正定 (PSD) 矩阵


> 原文地址: [https://mp.weixin.qq.com/s/qfXXTSV9ZguH\_QPS\_1uxIg](https://mp.weixin.qq.com/s/qfXXTSV9ZguH_QPS_1uxIg)

 ![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5ticcUL2dwrOyWBQPfXcibrDNaD3QopVuxGJCw8AJQ7gzPRKEVRPUj9o6w/640?wx_fmt=png&from=appmsg)  
编辑

我来完整、通俗地讲解PSD是什么，为什么重要。

#### 1. **通俗定义：PSD矩阵像一个“非负能量泵”**

-   想象一个矩阵A像一个“机器”，你输入一个向量x（任何非零向量），它输出一个“能量值”⟨Ax, x⟩（这是![x^T A x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg)的简写，x的转置乘A乘x）。
    
-   如果这个能量值**总是 ≥ 0**（对于所有实向量x，包括零向量），那么A就是Positive Semi-Definite (PSD)。
    

-   “Positive”：能量非负。
    
-   “Semi-Definite”：可以等于0（不像严格Positive Definite，PD，要求 > 0 for x ≠ 0）。
    
      
    

-   比喻：像一个弹簧系统，不会“吸走”能量，只会保持或零（可能有“松弛”方向）。
    
-   关键：A必须是**对称矩阵**（![A = A^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tBH7tib4Z2iclBnAgwFnJM7ncv2iakxRbyog0EQNqpichRqicthMhfS4MuIQ/640?wx_fmt=png&from=appmsg)），因为内积形式要求对称（在实数域）。
    

图片里的公式正好是这个定义：∀x ∈ ℝⁿ ⟨Ax, x⟩ ≥ 0。其中⟨ , ⟩是内积，等于![x^T A x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg)。

  

 ![$\forall x \in \mathbb{R}^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tSstFZiboDibTGMsCZQZdTPdA43vkib6g21r44S0NSfdH7rjWoSbqCuQQw/640?wx_fmt=png&from=appmsg) 是数学符号，表示“对于所有（for all）属于（in）n维实数空间（![$\mathbb{R}^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5txLRmHIsUD8vNibqGpiaBQ6kuOwCR995GqDblK3XeNhkCf1icHHmCZPluQ/640?wx_fmt=png&from=appmsg)）的向量x”。

### 通俗拆解

-   ∀ ：读作“for all”或“任意”，表示“所有”或“每一个”。它像一个倒写的A（All的首字母）。
    
-   x ：一个变量，通常代表向量或点。这里是任意的。
    
-   ∈ ：读作“in”或“belongs to”，表示“属于”或“元素属于集合”。像一个变形的E（Element的首字母）。
    
-   ![$\mathbb{R}^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5txLRmHIsUD8vNibqGpiaBQ6kuOwCR995GqDblK3XeNhkCf1icHHmCZPluQ/640?wx_fmt=png&from=appmsg)：![$\mathbb{R}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t0PAG5ibPM2FXzZPaM3YxuOtgpA1qZI2CiahgUrQzIRpSgrlxTZ8x8elw/640?wx_fmt=png&from=appmsg) 是实数集（Real numbers，所有实数如1、π、-2.5），n 表示n维空间。比如：
    

-   n=1：![$\mathbb{R}^1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tpWiabQ2ySg5NPSFflqg0ibEAgdtc5TWuIPhg8KKiae1AqFSKyickH3S8uA/640?wx_fmt=png&from=appmsg)就是实数轴（所有实数）。
    
-   n=2：![$\mathbb{R}^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tiaEdUDex8zwwiclaxrAeFHnLwYU2VIHjbRR5pTZ3Sdw5d2zK3MLWp7JQ/640?wx_fmt=png&from=appmsg)是平面（坐标(x,y)）。
    
-   n=3：![$\mathbb{R}^3$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tuVvqY6jYufLfcEeYv92cNAKInvYrzRVsTCFpfXpTr9cp1vW9PXGkpw/640?wx_fmt=png&from=appmsg)是3D空间（x,y,z）。
    
-   一般n：高维向量空间（机器学习常见）。
    
      
    

整体：这个短语常用于定义或定理开头，意思是“这个陈述对n维实数空间里的每一个x都成立”。

  

#### 2. **数学拆解：如何判断一个矩阵是PSD？（步步推理）**

-   核心条件：对于n×n对称矩阵A，满足 ![x^T A x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg) ≥ 0 ∀x ∈ ℝⁿ。
    

-   如果严格 > 0 for x ≠ 0，则是Positive Definite (PD)。
    
      
    

-   等价判定方法
    
    （这些是数学上证明等价的，用于实际检查）：
    

1.  特征值法
    
    （最常见）：A的所有特征值 ![\lambda _i \geq 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tPdTwwicFIVqpuKrne6ZxfIjuOl4LibK2QB5K6XoFMAWd0jiaTR4ZB15dw/640?wx_fmt=png&from=appmsg)（对于PD，>0）。因为A可对角化（对称），![x^T A x = \sum \lambda _i (u_i · x)^2 \geq 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tu8KvcEOh9ib4ddjISIJsjQR4jk56bgG2Jn5Bo7QJibiamL2eBjH3W8R8A/640?wx_fmt=png&from=appmsg) （![u_i](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tEcbg7nMheRYqAaVic0Usx3xhDiadHAvyz9XcFpA3o6bWK4hc2JklP9VQ/640?wx_fmt=png&from=appmsg)是特征向量）。
    
2.  Cholesky分解：A可以分解为![L L^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tCibUKc3h9L4gGCHD6ngOOyK4euLPtu5HkArZMx21yRhsD99qTvu7iavw/640?wx_fmt=png&from=appmsg)，其中L是下三角矩阵（对于PD，L唯一且对角正）。
    
3.  主子式法（Sylvester准则）：所有主子矩阵的行列式 ≥ 0（对于PD，>0）。
    
4.  二次型：A定义的二次型  ![f(x) = x^T A x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tGNl5QS21e28rvervqVdm9VKF1qtzkUDpLUFrMje8KCRlFZIQTX9jYA/640?wx_fmt=png&from=appmsg) 是半正定的。
    
      
    

  

-   **推理步骤**
    
    （为什么这些等价？简单证明思路）：
    

-   从定义：假设A有负特征值λ < 0，对应特征向量v，则 ![v^T A v = \lambda ||v||^2 < 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t9wc7PFQkNicGFOuNVYia6M05oyaOdEKH1VpMt9I6J4dhjr4Ml8bYujdw/640?wx_fmt=png&from=appmsg)，违反定义。所以所有λ ≥ 0。
    
-   反之，如果所有λ ≥ 0，用谱分解 A = Q Λ Q^T（Q正交），则 ![x^T A x = y^T \Lambda y](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t6XkYTpZwbmhCMo2gsPBSMiajWfHYwr7X3PciaQIpOMrZlQ6RjadOoYOQ/640?wx_fmt=png&from=appmsg)（![y=Q^T x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tvmWkZsNORA47hVkNVf0j6QQakt4lSCmWf3NfdiaUSkhlnjRRdjOxk3w/640?wx_fmt=png&from=appmsg)），![\sum \lambda _i y_i^2 \geq 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t1gicYwIHuzSHX9u1ciaSlHv0SYWX4ZaoKW7aqEABPnvnYRC3Fy3o0npg/640?wx_fmt=png&from=appmsg)。
    
-   对于Gram矩阵：回想Gram ![G = V^T V](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t4dsjom7hs6Ch6RDn3SxiapILg5M3iaX0kHBXQcUicia8QMLaSCUF99EjIg/640?wx_fmt=png&from=appmsg)，所有特征值 ≥ 0，因为 ![x^T G x = ||V x||^2 \geq 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tsIQnHibQhkKcU6hP80vkc4Vb2sUmcZopUF6nhOEMXpCpGBic4ng30RFg/640?wx_fmt=png&from=appmsg)（范数平方非负）。
    
      
    

  

用表格比较：

矩阵类型

条件 (![x^T A x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg))

特征值

示例

是PSD?

PSD

≥0 ∀x

≥0

\[\[1,0\],\[0,0\]\] (零方向)

是

PD

\>0 for x≠0

\>0

\[\[1,0\],\[0,1\]\] (单位)

是（严格）

非PSD

存在<0

有<0

\[\[0,1\],\[1,0\]\] (旋转)

否

##   

## 1）先看一句话定义（最核心）

对一个 **实对称矩阵** A：

  

-   **PSD（半正定）**：
    
    ![$x^T A x \ge 0,\quad \forall x\in\mathbb{R}^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tk10WtkoTk9teNe78BQj2awlr25kTBibGFSrfu0uKOaNElpWHFyAHp4A/640?wx_fmt=png&from=appmsg)
    
      
    
-   **PD（正定）**：
    
    ![$x^T A x > 0,\quad \forall x\ne 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tr7QDK2upBibq9gB17Rqch5U3Pwpd3gdluJYn2YL2Qt7q9skpbLLFJBw/640?wx_fmt=png&from=appmsg)
    

区别只在一个符号：

-   PSD：允许“等于 0”
    
-   PD：除了 x=0，永远严格大于 0
    

* * *

##   

## 2）![$x^T A x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg) 到底是什么？（通俗理解）

它叫做 **二次型**。你可以把它理解成：

> 向量 x 经过矩阵 A 这个“变形规则”后，算出来的一种“能量 / 长度平方 / 代价”

所以：

-   PSD 的意思就是：这个“能量值”永远不会变成负数
    
-   “半”字表示：它可能为 0（不是永远严格为正）
    

* * *

##   

## 3）用特征值一句话判断（最常用）

对于 **实对称矩阵** A，它有实特征值 ![$\lambda_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tdXoqquPkCdWcSItKlsNiaTku4eVQCAXicCoiaMIfAD9ZPdGtibISAYNTEg/640?wx_fmt=png&from=appmsg)：

-   A 是 **PSD** ⟺ 所有特征值
    
      λi≥0
    
-   A 是 **PD** ⟺ 所有特征值
    
      λi>0
    

💡所以 PSD = “没有负特征值”。

* * *

##   

## 4）几何直觉：像一个“碗”，但可能是“扁碗”

把函数

![$f(x)=x^T A x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tcPcXsrDQDw2apyZgOmvTx8nnNLo41jicFxVooRQa0VI3VF1X2rh04zA/640?wx_fmt=png&from=appmsg)

想成一个曲面：

-   PD：像一个“圆润的碗”，中心最低点只有一个（严格往上）
    
-   PSD：像一个“碗，但某些方向是平的”  
      也就是你沿某些方向走，值可能一直是 0，不会上升也不下降
    

这就是为什么 PSD 允许 ![$x^TAx=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tj41lyLOyoIicDviaktTKgUSwcoubZvJicibH94RvjvzWPSakJpiaIiaFggJw/640?wx_fmt=png&from=appmsg)。

* * *

##   

## 5）一个最直观的例子（2×2）

### ✅ PSD 但不是 PD

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&0 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tPALiaQatRGVeNTFev7dibJGQHFJDjkrRXGefiarjtdLm0icqxTsYB0InZQ/640?wx_fmt=png&from=appmsg)

对任意 ![$\begin{array}{c} x=\begin{bmatrix}x_1\\x_2\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tGh2jcmtNpVRkDBad6qKyfQI0WCEC9pGV6Tqtgzicb7v89Ojg4xZxJQQ/640?wx_fmt=png&from=appmsg)：

![$x^TAx = x_1^2 \ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tQic0q489Wn7KNBTSXIDJKBzFTAWvtK9fZ7lXTvgcFtXgSkZibXic920qg/640?wx_fmt=png&from=appmsg)

-   永远不负 ✅（所以 PSD）
    
      
    
-   但如果你取 ![$\begin{array}{c} x=\begin{bmatrix}0\\1\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tO5Xkz90nu3AEkyC1WRZH1QuregNnx8MiapLKWKkTPcjBibuQicFI0qarw/640?wx_fmt=png&from=appmsg)，那么  
    ![$x^TAx=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tj41lyLOyoIicDviaktTKgUSwcoubZvJicibH94RvjvzWPSakJpiaIiaFggJw/640?wx_fmt=png&from=appmsg)  
      不是严格大于 0 ❌（所以不是 PD）
    

* * *

##   

## 6）PSD 的“分解式理解”更像人话

一个矩阵是 PSD，等价于它可以写成：

![$A = B^T B$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tslodySpjlED9KE0dvX3seVVMbNEALTPudF075VoX2hQyM1z1Q3mNaw/640?wx_fmt=png&from=appmsg)

或![$A = C C^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tVFys9TTSNT3maGGsUDGtQ1puQAfsWNbFg6w8uwltCbHOpjjWT0DhYA/640?wx_fmt=png&from=appmsg)

这非常有直觉：

-    ![$B^TB$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tNOK7eH8s42B8PiaauTM3Ilreia1rGZ0nMd9iblLFSicd7MQAIibibuVSmLaA/640?wx_fmt=png&from=appmsg) 这种结构“天生不会产生负能量”  
      因为
    

![$x^T(B^TB)x = (Bx)^T(Bx)=\|Bx\|^2\ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tMIxfibr1HGAPInrd8z6ibOfaVUyNLDjZZTzrY3B6reg73y6hfPeMOTDg/640?wx_fmt=png&from=appmsg)

✅ 所以 PSD 就是“某种平方形式”。

* * *

##   

## 7）为什么 Gram 矩阵一定是 PSD？

 Gram 矩阵（内积矩阵）：

![$G = X^T X$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5ttIT6Y60kFDrliagKdfk8Hg9yf7NscRskPh3WXaW4DKOAakMcXrnm8jg/640?wx_fmt=png&from=appmsg)

对任意 x：

![$x^T G x = x^T X^T X x = \|Xx\|^2 \ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tZOm97ot9hoicYdILRvU13wiavT6w2UTQj36Yy6EtKJA2L2atIsPtLujw/640?wx_fmt=png&from=appmsg)

所以 **Gram 矩阵天然 PSD**。

这也是机器学习里到处出现 PSD 的原因（核方法、协方差矩阵、最小二乘等）。

  

* * *

## 8）PSD 常见在哪些地方？

非常常见：

1.  协方差矩阵 Σ 一定 PSD  
      （方差不可能为负）
    
2.  最小二乘![$X^TX$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tia42gwhPQiaPefCV5Krp3ER8z5MFiavAfTNsbU1J9z0YxSMLGtjFIUBVg/640?wx_fmt=png&from=appmsg)是 PSD（很多优化问题依赖它）
    
3.  核矩阵 Kernel Matrix 必须 PSD  
      （否则不是真正的“内积”）
    
      
    

* * *

## 9）一句话总结（最精确+最通俗）

> **PSD（半正定）就是：对任何向量 x，二次型 ![$x^TAx$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg) 永远不为负；它允许某些方向的“能量”为 0，所以叫“半”。**

下面拿图里的公式

![$x^T A x \ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tyaca0xPxQs1viciagbbgHbjTpA8R32upphwIribLBeCQwr70T1FpeNH9w/640?wx_fmt=png&from=appmsg)

用一个具体数字矩阵 + 代入一个 x 的方式，带你“算出一次能量值”，让 PSD 的感觉更直观。

让你真正感受到：

> 为什么 ![$x^T A x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg) 永远不负  
> 以及“半”到底半在哪里。

# 1）先把 ![$x^T A x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg) 展开一次（最关键的算式）

令

![$\begin{array}{c} x=\begin{bmatrix}x_1\\x_2\end{bmatrix},\quad A=\begin{bmatrix}a&b\\b&c\end{bmatrix} \quad \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tqZE0bicoelfPHRjmjwQEH4YCEcxp51Mrwg8XQTjzdXpjFMYqwTVh5PA/640?wx_fmt=png&from=appmsg)(对称矩阵)

那么：

![$\begin{array}{c} x^TAx= \begin{bmatrix}x_1&x_2\end{bmatrix} \begin{bmatrix}a&b\\b&c\end{bmatrix} \begin{bmatrix}x_1\\x_2\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tCWAO4pPI1bWQujTibQqjczCUEOcbIL9pMR9mLsiaTa7IO2D3aibia8WeqQ/640?wx_fmt=png&from=appmsg)

先算 Ax：

![$\begin{array}{c} Ax= \begin{bmatrix} ax_1+bx_2\\ bx_1+cx_2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tBzurjLq1zFmXJZEfC1RxqUxfibuIAHs22ribQ1rUH87Kjs6s36scwvvQ/640?wx_fmt=png&from=appmsg)

再左乘 ![$x^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tvadpT1OSMGbSeUODibsWRrUNpjKbLENPNpicOTxxJNglDj1w9GFw5a8Q/640?wx_fmt=png&from=appmsg)：

![$x^TAx=x_1(ax_1+bx_2)+x_2(bx_1+cx_2)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tgINd7Bo8T1KOIs1iaH0gWq62fIh5t7IEL3nuIHMZibk1HCaKK0O1zDwQ/640?wx_fmt=png&from=appmsg)

整理：

![$x^TAx=ax_1^2+2bx_1x_2+cx_2^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tsBKrcY16au2RiaBVL9YwB9kt1UDxkias6tqD7GLvx7fZPEpOBEoYQyKA/640?wx_fmt=png&from=appmsg)

✅ 所以它本质就是一个二次函数（平方+交叉项）。

  

* * *

# 2）例子 1：最简单的 PSD（你一眼就能看懂）

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&0 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tPALiaQatRGVeNTFev7dibJGQHFJDjkrRXGefiarjtdLm0icqxTsYB0InZQ/640?wx_fmt=png&from=appmsg)

那么：

![$x^TAx = 1\cdot x_1^2 + 0 + 0\cdot x_2^2 = x_1^2\ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tibsZE3TY68vFmnrBMc7oDPyzKiasu1vArqX8ufibXxNcDnyMbEG6ljXGQ/640?wx_fmt=png&from=appmsg)

随便挑几个向量试试：

-   ![$\begin{array}{c} x=\begin{bmatrix}3\\5\end{bmatrix}\Rightarrow x^TAx=3^2=9 \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tqm5qQeHib4dJb2uQqIfdzIa6t4LQnXuRyp9kp1DuBxz0EkXSuKheUNw/640?wx_fmt=png&from=appmsg)
    
      
    
-   ![$\begin{array}{c} x=\begin{bmatrix}0\\7\end{bmatrix}\Rightarrow x^TAx=0^2=0 \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t43g3q5TZpTIfibhhOPurQIb5Unqz0AsNR4ovtmSoiaqORQszdCyYLNhA/640?wx_fmt=png&from=appmsg)
    

✅ 永远不会负数 → **PSD**

但注意第二个方向：

![$\begin{array}{c} x=\begin{bmatrix}0\\7\end{bmatrix}\Rightarrow x^TAx=0 \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tUtJ0PxFpw1odyXU3RWe0p8OLYFKribxcWM5iaRIjpLZQQlm9epAKXndw/640?wx_fmt=png&from=appmsg)

说明在“纯 x2 方向”上，它完全 **不抬升**。

这就是“半”的直观含义：

> 有些方向能量=0（平坦），但不会掉到负数。

* * *

#   

# 3）例子 2：PD（严格正定）是什么样？

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&1 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tjrDX4GvIPR16RZeVR8XsaNwPKVoVUbd5NmrlvUJemVfbuZoUcJ2zjA/640?wx_fmt=png&from=appmsg)

![$x^TAx=x_1^2+x_2^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tV92Fhd4Og5yOxxzFcLhg0ZoYgg0puib2LiaY4qNXWvqlkFCgcqUfnf4A/640?wx_fmt=png&from=appmsg)

你只要 x≠0，就必然：

![$x_1^2+x_2^2>0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5ttEAUpdhAjVzU2DltDzbDUrDZcNUqTee38blvS3NwyOwjJUEiaDic7wnA/640?wx_fmt=png&from=appmsg)

✅ 所以它是 **PD**（严格正）

* * *

#   

# 4）例子 3：带交叉项的 PSD（更像真实情况）

我们来个常见形式：

![$\begin{array}{c} A= \begin{bmatrix} 1&1\\ 1&1 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t9NvAvaiaakJ41ibgwXuzo6QxjmFA0f9SUiaQwYegTbPraCoteUz4fUbBg/640?wx_fmt=png&from=appmsg)

展开：

![$x^TAx=1\cdot x_1^2 +2\cdot 1\cdot x_1x_2 + 1\cdot x_2^2 = (x_1+x_2)^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tQEEQ1iaOZVWKQ7z6kH5JPLJnEj7ccCe21G5r1WOrfRe7mGsmTFI7F7g/640?wx_fmt=png&from=appmsg)

注意这非常漂亮：

![$(x_1+x_2)^2\ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5ttokWxeDM0WOSztkNEj0Os2O66R42dNSSwmEicUVKzn956eMfZlldeHQ/640?wx_fmt=png&from=appmsg)

✅ 永远不负，所以 PSD。

但它也会“半”：

如果取 ![$\begin{array}{c} x=\begin{bmatrix}1\\-1\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tZsmbojAojSYlPZNH3EInUuD5u6GTjUdPSuGZxCKvQCtXags82ZNSoQ/640?wx_fmt=png&from=appmsg) 

![$x^TAx=(1+(-1))^2=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tE3kUhEZ3wCDNdxDX38B0hicl1mUJRMYF5tSGVibBps4UV6XPdPvpWAwA/640?wx_fmt=png&from=appmsg)

也就是说：

> 沿着方向 (1,−1)（一正一负抵消），能量就是 0  
> 这条方向是“平的槽”。

* * *

#   

# 5）例子 4：不是 PSD（出现负数了）

![$\begin{array}{c} A= \begin{bmatrix} 1&0\\ 0&-1 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t39V3bRs5iaeDNb0Iqhx70jtLAc5wZ4iaullxsxSJABicHr2nLG8G7kBgQ/640?wx_fmt=png&from=appmsg)

展开：

![$x^TAx=x_1^2-x_2^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tkUOjobSl2TRHFqVySWN8yVhdgUibibRlLWlPqJctuiaWMlymah1FkM8Lw/640?wx_fmt=png&from=appmsg)

取 ![$\begin{array}{c} x=\begin{bmatrix}0\\1\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tO5Xkz90nu3AEkyC1WRZH1QuregNnx8MiapLKWKkTPcjBibuQicFI0qarw/640?wx_fmt=png&from=appmsg)：

![$x^TAx=0^2-1^2=-1<0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tnFCLsYHwa6v2E5EujGyt6ubVaY7yuxXibBP1ibSrE58HopeVtIm5icklQ/640?wx_fmt=png&from=appmsg)

❌ 出现负数 → **不是 PSD**

直觉：

> 有些方向往下掉（像马鞍形），所以不半正定。

* * *

#   

# 6）PSD 的“平方分解”直觉（超级重要）

你只要记住一句：

> **PSD = 某种平方**

例如：

![$\begin{array}{c} A= \begin{bmatrix} 1&1\\ 1&1 \end{bmatrix} = \underbrace{ \begin{bmatrix} 1\\ 1 \end{bmatrix}}_{C} \underbrace{ \begin{bmatrix} 1&1 \end{bmatrix}}_{C^T} =CC^T \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tic7baIj2bbvicibxk4XCjWBEGZNY65l5O7vN1Z1xfgq95JlCPDHMjMdKQ/640?wx_fmt=png&from=appmsg)

于是：

![$x^TAx = x^T(CC^T)x = (C^Tx)^T(C^Tx)=\|C^Tx\|^2\ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tZyPodY3MOTHIG3yBcQGjO7kTeMuXFgAvKFau43gJmhEsreHiaFYqEaw/640?wx_fmt=png&from=appmsg)

你看，“平方”一出现，永远不可能是负的。

* * *

#   

# 7）“半”的本质：为什么会出现 0？

如果 A 是 PSD，但不是 PD，那必然存在非零向量 x≠0，使得：

![$x^TAx=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tj41lyLOyoIicDviaktTKgUSwcoubZvJicibH94RvjvzWPSakJpiaIiaFggJw/640?wx_fmt=png&from=appmsg)

这说明：

> A 有“压扁掉”的方向  
> 也就是某些方向被压到 0 长度（信息丢失）

用特征值语言就是：

-   PSD：特征值 λ≥0
    
-   “半”：至少有一个特征值 λ=0
    

* * *

#   

# 8）一眼判断：2×2 PSD 的“快速条件”

对称矩阵：

![$\begin{array}{c} A= \begin{bmatrix} a&b\\ b&c \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tT0BdXWX9kDoiaVUu8yLyFQTWQGdCvbLZUUgCfIlYXg1EXIb5p9icEelg/640?wx_fmt=png&from=appmsg)

它是 PSD 的充要条件之一（很常用）：

1.  a≥0
    
2.  c≥0
    
3.  行列式 ![$\det(A)=ac-b^2 \ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tlXnib9jia40FmMpQ6dT6QPibBoexmDqbicvm2Dh4ibCnibvbCG9a23zJXAwg/640?wx_fmt=png&from=appmsg) 
    

为什么？

因为它保证二次型不会被交叉项拖成负数。

* * *

#   

# 9）机器学习里 PSD 为什么特别常见？

因为很多东西都是这种形态：

### ✅ Gram 矩阵

![$G=X^TX$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5ttIT6Y60kFDrliagKdfk8Hg9yf7NscRskPh3WXaW4DKOAakMcXrnm8jg/640?wx_fmt=png&from=appmsg)

一定 PSD。

### ✅ 协方差矩阵

![$\Sigma=\mathbb{E}[(x-\mu)(x-\mu)^T]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tx06P2K1ukiaHgYVOwslr0aibWDMaia7P1x1WBicXXbqHsSWlkVlr6epXRQ/640?wx_fmt=png&from=appmsg)

一定 PSD。

### ✅ 最小二乘的 Hessian

![$H=2X^TX$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tJ2h6NOH59g7fQJVqRbCQicEgOh0KDuR03sL7AicdJZslJ1qEsaMe6THg/640?wx_fmt=png&from=appmsg)

PSD（所以优化是“凸”的，不会乱凹下去）。

* * *

# 10）一句话收尾（你应该抓住的“感觉”）

✅ \*\*PSD（半正定）\*\*就是：

> 它把任意方向的向量 x，算出来的“能量” ![$x^TAx$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tz5kfuqtNRGtm1xUjo5rWjicXgW6o6ib6LwecS01vf3SQIUkWZTuzMwbg/640?wx_fmt=png&from=appmsg) 永远 ≥ 0  
> 但允许某些特殊方向能量 = 0（平坦、被压扁），所以叫“半”。