# SVD的几何方式解释


> 原文地址: [https://mp.weixin.qq.com/s/ZuLtDtv4kMXFKjFyVj2wuw](https://mp.weixin.qq.com/s/ZuLtDtv4kMXFKjFyVj2wuw)

 ![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyTmzp1LwfMXOcHvNT17oTcp8uRhHHCopGmV3tgSFemFMHj1YrWwEQfg/640?wx_fmt=png&from=appmsg)  
编辑

**这张图非常漂亮，它用几何的方式把 SVD（奇异值分解）的本质讲得很清楚。**

我们用这张图一步一步来拆解 SVD 的几何意义：

一个矩阵 A 对平面上的点做线性变换，本质上就是——

> **先旋转（或翻转） → 再拉伸（或压缩） → 再旋转（或翻转）**

也就是经典分解：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyUNJEicBbJicYa2ibQFZ8MicGPw4u6uqniarFGOlKFswdtO2dgY1h68k5YdQ/640?wx_fmt=png&from=appmsg)

图里把这个过程拆成了 3 段动作（从左到右）：

* * *

## 0）从“圆”开始：输入空间的单位圆

最左边那个蓝色圆表示：  
在原始坐标系里取所有满足 ![$\|x\|=1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyfaAWkDPwt7Jk5nxcc1dLDFmKuy34LaJ5riccrBNpehcibQmtcVvfXKBg/640?wx_fmt=png&from=appmsg) 的点，也就是单位圆。

同时图中标了两条特殊方向：

-   v1,v2：输入空间里的两条正交单位向量（右奇异向量）
    

你可以把它理解为：

> **SVD 会在“输入空间”里挑出两条最关键的方向 v1,v2**  
> 沿着它们做变换，会得到最纯粹、最干净的效果。

* * *

##   

## 1）第一步：![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg)——把 v1,v2 转成标准轴 e1,e2

图中第二个圆还是圆，但方向变了：  
箭头写着 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg)（蓝色）。

这一段做的是：

![$x \xrightarrow{V^T} x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyyYibSHeibAbR0icVCAAAHM2rrCn6LTeySMic18NL8VynahVia8rAldmzPSg/640?wx_fmt=png&from=appmsg)

几何意义：

-    ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 是**正交矩阵**（旋转/翻转）
    
-   它不会改变长度，也不会把圆变形
    
-   它只做一件事：**把坐标系对齐**
    

更具体点：

![$V^T v_1 = e_1,\quad V^T v_2 = e_2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy0awvN0EzyfSTL2QiaNQb0GCurpQNUA4J6Qbl2Sgic2G6ATFicB4Hh9hcQ/640?wx_fmt=png&from=appmsg)

也就是说：

>  **![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 把“输入的最佳方向” v1,v2 旋转到标准坐标轴上**  
> 让后面的拉伸变得特别简单：只需要沿 x 轴、y 轴拉就行。

所以你看到：圆还是圆，但现在方向变成了 e1,e2。

* * *

##   

## 2）第二步：Σ（图里写 Δ）——只沿坐标轴拉伸/压缩

第三幅图出现了椭圆（最关键！）。  
箭头写着 **Δ**（通常就是 Σ，对角矩阵）：

![$x' \xrightarrow{\Sigma} x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyPXlvmMvlSBDShLdmGevHgaNPNwqZF8DyGeX1IsLfsbBbk2JglCYibLw/640?wx_fmt=png&from=appmsg)

其中

![$\begin{array}{c} \Sigma = \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyDHQFWErsH1YjdbhM50UC49yS8f70Pibb9B5Zn8wkqDTGtFZHHmMl9QA/640?wx_fmt=png&from=appmsg)

几何意义超级直观：

-   沿 e1 方向拉伸 σ1 倍
    
-   沿 e2 方向拉伸 σ2 倍
    

所以单位圆变成椭圆，且椭圆的“半轴长度”就是：

-   长半轴：σ1
    
-   短半轴：σ2
    

图里写成了 ![$\delta_1 e_1,\ \delta_2 e_2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzymZU745PMmJ5d3aUm4vyEsQhfuE1X5bWPPlmFkeq9iaIAOW6mCu0IdWQ/640?wx_fmt=png&from=appmsg)（δ \\delta 就是奇异值的意思）。

**图里为什么看起来是“沿纵轴 y 拉伸”？**  
答案是：**不一定非得是 y 轴**——图里画成纵轴拉伸，只是为了表达清楚“有一个方向被拉得更长”。真正的规则是：

> **在 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 把方向对齐到 (e1,e2) 之后，Σ 会沿着 e1 和 e2 两个轴分别拉伸 σ1,σ2。  
> 哪个轴更长，取决于哪个奇异值更大。**

* * *

#   

# (2.1）Σ 的拉伸规则：只沿坐标轴拉

![$\begin{array}{c} \Sigma= \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyDHQFWErsH1YjdbhM50UC49yS8f70Pibb9B5Zn8wkqDTGtFZHHmMl9QA/640?wx_fmt=png&from=appmsg)

对任意点 (x,y)：

![$\begin{array}{c} \Sigma \begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix} \sigma_1 x\\ \sigma_2 y \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzynjqjSODkAyiciaib99hxtDdsH0LSgrabGGhp6pRULexIia3LcNzr4lKruQ/640?wx_fmt=png&from=appmsg)

所以它做的事情是：

-   \*\*横向（e1/x轴）\*\*放大 σ1 倍
    
-   \*\*纵向（e2/y轴）\*\*放大 σ2 倍
    

* * *

#   

# (2.2）那为什么图里“纵轴更长”？

如果图里椭圆纵向更长，说明它满足：

σ2>σ1

或者换句话说：**这个图把较大的奇异值画在了竖直方向上。**

但注意：在很多教材里通常约定

σ1≥σ2

这时\*\*长轴应该画在横向（e1方向）\*\*才更符合这个编号习惯。

  

* * *

# (2.3）所以：是不是画错了？

不一定错，更像是 **“编号习惯不同 / 画法为了直观”**。

因为你完全可以这样做：

-   让较大的奇异值对应 e2（竖直方向）
    
-   让较小的奇异值对应 e1（水平）
    

这只是在“叫法”上把 σ1,σ2 的标签互换一下而已。

而且还有个更深的点：

✅ **SVD 里奇异向量的顺序本来就可以交换（只要你同步交换 ![$\sigma_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzycVrPGnxZnXW0QoKhBSSwS7WBGyOP1y9FAypmmfxekgVsQic0WRPkOHg/640?wx_fmt=png&from=appmsg),![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyGRAiakFOl436zibAPo7Q627mqib6MoKNBNbm5hgDDSBZL2CpRgwria95WQ/640?wx_fmt=png&from=appmsg),![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyt2ibjJQ2amaVAib7ib5ycfQ9G9fRhz92SLibyUAXAhAbCZHk1UaNAk1tPg/640?wx_fmt=png&from=appmsg)）。**  
这不会改变矩阵 A 本身。

  

* * *

# (2.4）一句话总结你看到的“纵轴拉伸”

你看到“纵轴 y 被拉长”，真实含义是：

> **在 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 对齐后的坐标系里，某个轴（这里画成 y）对应的奇异值更大，所以椭圆在那个方向更长。**  
> 这不是 “y天生特殊”，只是作者把“更大奇异值”画到了竖直方向。

一句话总结这一步：

> **Σ 负责“变形”，而且是最纯粹的变形：只在两个正交方向上伸缩。**

* * *

##   

## 3）第三步：U ——把椭圆再旋转到最终位置（输出空间）

最后一幅图：椭圆又“转”到了某个斜着的方向。  
箭头写着 **U**：

![$x'' \xrightarrow{U} Ax$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzywA7VgxgI5oaJ5LeO3kBicvHejia7tDutSjSqvicLX9ChxBvQup6B7vSjw/640?wx_fmt=png&from=appmsg)

几何意义：

-   U 也是正交矩阵（旋转/翻转）
    
-   它不改变椭圆的形状与大小，只改变方向
    

并且

![$Ue_1 = u_1,\quad Ue_2 = u_2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzygCibreG1DoPDGuT4av9NdrggRrPIUXg82CoZ948BemfOmibW2RsH911A/640?wx_fmt=png&from=appmsg)

所以图里标：

-   δ1u1
    
-   δ2u2
    

这表示最终椭圆的两条主轴方向就是 u1,u2（左奇异向量），长度分别是 σ1,σ2。

一句话总结这一步：

> **U 决定“输出空间里椭圆朝哪儿摆”。**

* * *

# 这张图用一句“几何台词”讲完 SVD

把它当成一个三段式“机器”：

### ✅ 第一段：对齐输入方向（不变形）

### ![V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg): 把输入最关键方向 v1,v2旋到标准轴 e1,e2

### ✅ 第二段：只做纯拉伸（发生变形）

### Σ: 沿 e1,e2分别拉伸 σ1,σ2

### ✅ 第三段：对齐输出方向（不变形）

### U: 把椭圆旋到输出的方向 u1,u2

* * *

# 为什么说 SVD “抓住了矩阵的本质”？

因为它告诉你：矩阵 A 做的事情，本质只有两类：

1.  旋转/翻转（不改变长度）：![$U,V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyDgxv17CibhA1QQFxMxtuxX6V53Z90dYFHLLtsib0ctgVYv29OVb6PicXA/640?wx_fmt=png&from=appmsg)
    
2.  拉伸/压缩（改变长度）：Σ
    

而且这种分解非常“干净”：

-   输入端最重要的方向：v1,v2
    
-   输出端对应的方向：u1,u2
    
-   拉伸强度：σ1≥σ2≥0
    

* * *

# 你可以用“橡皮圆片”脑补整张图

想象你手里拿着一个橡皮做的圆片（单位圆）：

1.  先把圆片转一下，让它的“纹理方向”对齐（![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg)）
    
2.  再用两只手沿水平/竖直方向把它拉成椭圆（Σ）
    
3.  最后再把椭圆整体转到最终摆放角度（U）
    

我们就沿着这张图继续往下走，把 **SVD 最“神”的两个结论**用几何方式讲透（你会发现：它们几乎是“看一眼椭圆就懂”）。

  

* * *

## 结论 1：为什么 σ1 是矩阵的“最大放大倍数”？

你看图里：单位圆经过 A 变成椭圆。

-   单位圆上任意一点 x 都满足 ∥x∥=1
    
-   经过变换后变成 Ax
    
-   所有 Ax 的终点连起来，就是那个椭圆边界
    

所以：

![$\|Ax\|$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzye5UyhU3FGckfZKRKjWz9ceOoKQxrJxx4BZ5m4fBDsY4WZNuNBu8mXw/640?wx_fmt=png&from=appmsg)

表示“单位长度向量 x”被矩阵 A 变换后变成多长。

那么问题来了：

> 在所有单位向量 x 里，∥Ax∥ 最大能到多少？

### ✅ 答案就是椭圆的“最长半轴长度”

也就是图里那根最长的主轴：

![$\max_{\|x\|=1}\|Ax\| = \sigma_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyycu0ASylWsPNn9ibxWodOAfiaQ4ibPFCLfsWL9q427bicmBlbZ2cqicTmBg/640?wx_fmt=png&from=appmsg)

几何解释超级直观：

-   椭圆上离原点最远的点，就是长半轴端点
    
-   这个最远距离，就是椭圆长半轴长度 σ1
    

所以 σ1 就是：

> **单位圆经过 A 后，能被拉到的最大长度**

也就是矩阵的“最大增益/最大放大倍数”。

  

* * *

## 结论 2：为什么 v1 是“最容易被放大”的方向？

你看图的最左边：单位圆上画了两个方向 v1,v2。

它们不是随便选的，是 SVD 精挑细选出来的：

> **v1：让 ∥Ax∥ 最大的那个输入方向（最容易被放大）**  
> **v2：在与 v1 垂直的前提下，第二容易被放大的方向**

用数学写出来就是：

![$v_1 = \arg\max_{\|x\|=1}\|Ax\|$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyGeC2NqYCOVLHuEc7oHNzL4Qx7fl8TYH6zJ692U1JiarYl7qu1MsSKOg/640?wx_fmt=png&from=appmsg)

而这个最大值就是 σ1。

* * *

## 用“分解动作”把它推到一眼明白

因为：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyUNJEicBbJicYa2ibQFZ8MicGPw4u6uqniarFGOlKFswdtO2dgY1h68k5YdQ/640?wx_fmt=png&from=appmsg)

我们把单位向量 x 先用 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 旋转一下：

![$x' = V^T x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyeq98LXTDUcTFoILrXECcauFWrWU9sbUpwibtImPpJTOib06g82ZU0pAA/640?wx_fmt=png&from=appmsg)

由于 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 是正交矩阵（纯旋转/翻转）：

![$\|x'\| = \|x\| = 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyOORhzshqibpJ7QTiaXeEg6diaBicykor0eVhtykJIib5KMwdD1q4XQBGoGQ/640?wx_fmt=png&from=appmsg)

也就是说：**单位圆还是单位圆**。

然后进入真正变形的核心步骤：

![$\begin{array}{c} \Sigma x' = \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2 \end{bmatrix} \begin{bmatrix} x'_1\\ x'_2 \end{bmatrix} = \begin{bmatrix} \sigma_1 x'_1\\ \sigma_2 x'_2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyPjla5h85zNNavibQ3euOEm5yc97ibrLhaicrwA5rV5yiau5YlgMrtz2QLg/640?wx_fmt=png&from=appmsg)

它的长度平方是：

![$\|\Sigma x'\|^2 = (\sigma_1 x'_1)^2 + (\sigma_2 x'_2)^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzytg8L3DW53icQsZLblTic3NfZC9iakSiaaR3X9ucx1x8RH3g7P7jh6K9qLg/640?wx_fmt=png&from=appmsg)

因为 x′ 在单位圆上：

![$(x'_1)^2+(x'_2)^2=1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyv3XeyFuw94ichvakdugjmvbKNAnajS68UN0zCM2hibkDqrjw5Vp94wZQ/640?wx_fmt=png&from=appmsg)

现在你想让 ![$x' = e_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyicHkXwNRFWXyW3UHYiafo2F0PyRGsC8JcrqBohnwAFPRzAz6aWpmCaCg/640?wx_fmt=png&from=appmsg) 最大，应该怎么选 x′？

### ✅ 最聪明的策略：把全部“能量”压在 σ1 那个方向上

也就是令：

![$\begin{array}{c} x' = e_1 = \begin{bmatrix}1\\0\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy9Zx4Qw8xBNB6ib2mr5aOjFqzMWenpb5YqACTK0HEWY2nYJmeeV8h1Zw/640?wx_fmt=png&from=appmsg)

那么：

![$\begin{array}{c} \Sigma e_1 = \begin{bmatrix}\sigma_1\\0\end{bmatrix} \Rightarrow \|\Sigma e_1\|=\sigma_1 \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyg2nFFICFfxsJ1IncJ4DjBBexwRV35WByib3BZd8YTn3RVjzp5JVYNfA/640?wx_fmt=png&from=appmsg)

这就是最大值。

而 x′=e1 对应原始空间的向量是什么？

![$x = V e_1 = v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyibhaVNX0TBkwXXdHwDe4yAxO8LOL7qcOdSLVwohzkriblvOicubaQIXlg/640?wx_fmt=png&from=appmsg)

所以：

> **原空间里让 ∥Ax∥ 最大的方向，就是 v1**  
> 因为它被 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy1r5CKPsojn6NpZoEC7LFfkonG2Vu3bqanAkO9b79MJtCOyJb5608bA/640?wx_fmt=png&from=appmsg) 旋到 e1，然后被 Σ 用 σ1 狠狠拉伸。

* * *

##   

## 结论 3：为什么最大放大后的方向是 u1？

我们刚才找到：输入取 x=v1 最猛。

那输出是什么？

![$Av_1 = U\Sigma V^T v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyVnKbWHbGuBtzsnkejqFIbh9atqGOumCU17483eHu7NeOoPUiaVmJlyg/640?wx_fmt=png&from=appmsg)

但 ![$V^T v_1 = e_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyDtzUufoELia0cRwvKXAEoj3RibBXMjFYwpCic7NtND1vq0RGYmkIdWtOA/640?wx_fmt=png&from=appmsg)，所以：

![$\begin{array}{c} Av_1 = U\Sigma e_1 = U \begin{bmatrix}\sigma_1\\0\end{bmatrix} = \sigma_1 Ue_1 = \sigma_1 u_1 \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyhj7grOa8I8jVS3axs4u82Su8zmL2umSCl4szk2ud4W7vFxs1dlHtpw/640?wx_fmt=png&from=appmsg)

这句话非常关键，它直接对应图里的标注：

### ✅ 图里写的就是：

-   输入方向：v1
    
-   输出结果：σ1u1
    

翻译成人话：

> **你沿着 v1 推一下（单位长度），矩阵会把你推到 u1 方向，并且拉长到 σ1 倍。**

同理：

![$Av_2 = \sigma_2 u_2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyicp2DL3eoul7Us26q9V8yOia5VwQicvoKzOEFCtDwohDgibcc8FqPbGx0w/640?wx_fmt=png&from=appmsg)

* * *

# 这张图隐藏的“灵魂总结”

把最关键的两条箭头用一句话说完：

![$A v_i = \sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyvB1Z6lMCPsDyxn1LAGWdJ9cK5fvq09M7mEiaoOt0RnTzYTBhChLnaUA/640?wx_fmt=png&from=appmsg)

这就是 SVD 最核心的几何意义：

> **矩阵 A 会把某些特殊输入方向 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyt2ibjJQ2amaVAib7ib5ycfQ9G9fRhz92SLibyUAXAhAbCZHk1UaNAk1tPg/640?wx_fmt=png&from=appmsg)（右奇异向量）  
> 变换到某些特殊输出方向 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzyGRAiakFOl436zibAPo7Q627mqib6MoKNBNbm5hgDDSBZL2CpRgwria95WQ/640?wx_fmt=png&from=appmsg)（左奇异向量），  
> 并且缩放比例是 ![$\sigma_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzycVrPGnxZnXW0QoKhBSSwS7WBGyOP1y9FAypmmfxekgVsQic0WRPkOHg/640?wx_fmt=png&from=appmsg)（奇异值）。**

* * *

# 额外送你一个“肉眼看 rank”的结论（也和这图有关）

如果 σ2=0（短轴塌成 0）会怎样？

-   椭圆会退化成一条线段
    
-   意味着二维的单位圆被压扁到 1 维
    

这时矩阵的秩就是 1：

![$\text{rank}(A)=1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tricYYqbJbRulzXHEicI7LIzy8XOgzHpJIJb9QLkGIJJDoqh32r40UnsrKdibdGV8tmKqCGqIozOcib2Q/640?wx_fmt=png&from=appmsg)

如果只有一个奇异值非零，说明：

> 这个矩阵其实只“保留了一个方向的信息”，其余方向都被压没了。

### 用一句话总结整张图的几何意义：

“任意线性变换 A 可以分解为三步几何操作：

1.  先旋转（Vᵀ）
    
2.  再沿坐标轴方向做不同比例的拉伸/压缩（Σ）
    
3.  最后再旋转到想要的方向（U）”
    

### 对应关系对照表（很重要！）

图中位置

数学符号

几何意义

是否改变长度？

是否改变角度？

最左

v₁, v₂

右奇异向量（right singular vectors）

—

—

Vᵀ 之后

e₁, e₂

标准基底

否

旋转

Σ 之后

δ₁ e₁, δ₂ e₂

奇异值 × 标准基

**拉伸**

否

U 之后

δ₁ u₁, δ₂ u₂

左奇异向量 × 奇异值

—

旋转

最终椭圆长轴

u₁

左奇异向量（最大拉伸方向）

—

—

最终椭圆短轴

u₂

左奇异向量（次大拉伸方向）

—

—

### 最直观的几句话记忆法：

-   Vᵀ 决定“**输入空间里哪些方向最重要**”（哪些方向会被区别对待）
    
-   Σ 决定“**拉伸的强度**”（数据真正被放大的程度）
    
-   U 决定“**输出空间里这些被拉伸的方向最终指向哪里**”
    

这也是为什么我们常说：

**右奇异向量 V → 输入空间的主方向****左奇异向量 U → 输出空间的主方向****奇异值 Σ → 每个主方向的重要性/能量/信息量**