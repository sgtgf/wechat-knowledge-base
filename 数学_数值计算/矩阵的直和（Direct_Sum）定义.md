# 矩阵的直和（Direct Sum）定义


> 原文地址: [https://mp.weixin.qq.com/s/ReFIv9Zkz-DdUDw4VeXkbw](https://mp.weixin.qq.com/s/ReFIv9Zkz-DdUDw4VeXkbw)

## 大家好！今天我们来聊聊线性代数里一个特别“友好”的概念——**矩阵的直和**（记作 A ⊕ B）。它不像普通矩阵加法那么挑剔（要求尺寸一样），而是像把两个独立的“小世界”拼成一个“大世界”，中间用“墙”隔开，谁也不干扰谁。

#### 1\. 最直白的定义

假如矩阵 **A** 是 **m × n** 大小，**B** 是 **p × q** 大小，那么它们的**直和**就是一个更大的 **(m+p) × (n+q)** 矩阵：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib42JWtjVaGImyWknJwURJBUXE7lyPMy1OqdQc4e3SFuzWOWbZkY9pn0SHUOwTrAEVDpHb7DAL0shRJh59BNH3opspY3YdeJibL6Q/640?wx_fmt=svg&from=appmsg)

-   **左上角**
    
    原封不动放 A
    
-   **右下角**
    
    原封不动放 B
    
-   **其他地方**
    
    全部填 **0**（零矩阵，尺寸自动匹配）
    

这叫**块[对角矩阵](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)**（block diagonal matrix）。本质就是“并联”两个独立系统！

#### 2\. 图文展示（看图秒懂！）

**块结构示意图**（像两个房间拼大房子）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctvBjSaaNPVib5YpCOfVr75ianiabNAlibuUv3Hn36Pia7uNjZENPaLYoEAVW2ZZw5L8Taawib21hojV0P4QalYLBhgGsuzHic6gEXpUw/640?wx_fmt=png&from=appmsg)

图1

看清楚了吗？

-   蓝色区域 = A 的地盘
    
-   绿色区域 = B 的地盘
    
-   灰色虚线区域 = “隔离墙”（全是0）
    
-   整体尺寸自动变大：行数 = m + p，列数 = n + q
    

**带数字的真实例子**（超级直观）

我们拿两个 2×2 矩阵举例：  
![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ0Abpwz7nctx1NjLRQv7a2Ub9rgkw7Mysop9USedslXicpRAEZiaibrTfFqzEib5Zicy66PtUQx59MdKPiaeHmPMEs5h5cT8V0wXZsFg/640?wx_fmt=svg&from=appmsg)  

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7FIe4FH20cxiaNRrXmcS4BVtHWzkhcZeRXDXp8UGIJogWeOOWAF7N4B8GRQIRzlYocfTuXCYD4AtLysSpicDSfodB6ovxvvibaQNg/640?wx_fmt=svg&from=appmsg)

直和后变成 4×4 大矩阵：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsxKdibf5kmbuaQE4sHjZwNgibwrcibyw8fjat9xVnOUPoib5MNzqH4c9l7wW3sn9SBTTyg7HTL7zmg5Mv2b4HHbQtkASHCTeWZwmc/640?wx_fmt=png&from=appmsg)

图2

你一眼就能看出：

-   左上 2×2 还是原来的 A（数字不变）
    
-   右下 2×2 还是原来的 B
    
-   其他位置安静地填 0，像两个小岛中间隔着海！
    

再来个不同尺寸的例子（更明显）：  
A（2×2） + B（1×1） = 3×3 矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4ooNoaN2D7Pu9lpTnG22p3muUQibumfDn0OLP7fEwqGAdZKSDRFLgucCCpOIMTFGbBo7NFgbB2shOeE4zaO6x7Flrq5ZSVDOCS2Q/640?wx_fmt=svg&from=appmsg)

#### 3\. 为什么这么设计？通俗理解

想象两个独立的“乐队”在不同舞台演出：

-   A 乐队只管自己的观众区
    
-   B 乐队只管自己的观众区
    

直和就是把两个舞台记录在一张大节目单上，中间画条线（0），谁也不串场！

这来自**向量空间的直和**：如果空间 V = U ⊕ W（U 和 W 只有零向量重叠），那么作用在 V 上的变换自然就是 A ⊕ B。

#### 4\. 超实用的性质（记住这几条就够了）

-   **乘法独立**
    
    (A ⊕ B) × (C ⊕ D) = (A×C) ⊕ (B×D) —— 两个系统各自算自己的！
    
-   **迹（对角元素和）**
    
    tr(A ⊕ B) = tr(A) + tr(B)
    
-   **行列式**
    
    （如果是方阵）：det(A ⊕ B) = det(A) × det(B)
    
-   **特征值**
    
    A 的特征值 + B 的特征值 = 大矩阵的全部特征值
    

计算大问题时，可以直接拆成小问题，超级省力！

#### 5\. 注意！别和“直积”搞混

很多人会把 **直和 ⊕** 和 **直积 ⊗**（Kronecker 积）弄混：

-   **直和**
    
    独立并存（块对角）
    
-   **直积**
    
    交叉混合（每个元素都乘整个矩阵，尺寸变成 mp × nq，像“复制放大”）
    

一个是“并联”，一个是“张量纠缠”，完全不同哦！

####   

一句话总结：**矩阵直和 = 把两个独立系统“友好合并”成一个大块对角矩阵**，中间零元素就是“互不打扰”的证明！

**向量空间的直和（Direct Sum）超级详解：图文并茂 + 与矩阵直和无缝衔接**

上面聊了**矩阵的直和 A ⊕ B**（块对角矩阵），接下来来聊它的“老大哥”——**向量空间的直和**。这俩概念其实是“一根绳上的蚂蚱”：矩阵直和就是向量空间直和在选定基底下的“数字表现形式”。

我们分**外部直和**和**内部直和**两大类来讲，配上清晰图示、例子和比喻，保证零基础也能秒懂！

#### 1\. 外部直和（External Direct Sum）：最直白的“拼装版”

**定义**（超级通俗）： 假如 U 和 W 是两个向量空间（同一个数域，比如实数），它们的**外部直和**就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnZtwPvt3RfFAbUSJC6dhV0FpMKez3ac9pGKtjvdDWUicmD5sUDFjKibXPhad595mpLecrDiaIJXu7LOQibIxB6XVd9icGwGwicicmia7uw/640?wx_fmt=svg&from=appmsg)

运算规则：

-   加法：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Asvuw3hPEXWNiacJiaMiaR2tVCnDKwuuQopBI4jjHok3oOsXV2PEgpefiaujHfpfQmgw30RPKROD21YZH9mXS4Wl9XJynjbmdsHhKOjP5UUVyCw/640?wx_fmt=svg&from=appmsg)
    
-   数乘：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznghibEE6f3lxLibOg5RAJicSCY1G28ZcZerUvwWkQQxq5MeWdnia3cTian9kCmANTNq5lIz8s22d1RlSxeRctvdDiaJBJpbxofqmQdzQ/640?wx_fmt=svg&from=appmsg)
    

**通俗比喻**：  
U 是一个“蓝色房间”，W 是一个“绿色房间”。直和就是把每个蓝色居民和绿色居民**配对**成一张“双人票”，新空间里的“人”都是 (蓝色人, 绿色人)。

维度公式（最实用）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZKZtsC34n1OKRSwzAt5HDbxGMtr34yaYDwBzRYjOFib8h7pgHuqzvaCBqjApw6HtNUIibicuaSAIUxOoF3rQnIpAiauTiaLlEC38XXw/640?wx_fmt=svg&from=appmsg)

（有限维时）—— 就像房间总面积 = 蓝房面积 + 绿房面积。

**例子**：  
U = ℝ¹（x轴），W = ℝ¹（y轴）  
U ⊕ W ≅ ℝ²  
元素：(3, 5) 就是新空间里的向量！

#### 2\. 内部直和（Internal Direct Sum）：同一个大空间里的“友好分割”

**定义**（当 U、W 已经是某个大空间 V 的子空间时）： V = U ⊕ W 当且仅当：

1.  V = U + W（任意 v ∈ V 都能写成 u + w）
    
2.  U ∩ W = {0}（两个子空间只在原点重叠）
    

**关键点**：每个向量 v **只有唯一一种** 分解方式 v = u + w！

**通俗比喻**：  
一个大房间（V），被隔成蓝色区（U）和绿色区（W），中间只在原点（0）相连。任何位置都能唯一地说“我在蓝色区走几步 + 绿色区走几步”到达。

**3\. 两种直和其实是一回事（同构）**

外部直和 U ⊕ W 和内部直和（在 U ⊕ W 里嵌入 U×{0} 和 {0}×W）完全等价。  
数学家通常直接写 U ⊕ W，指的就是这个结构。

#### 4\. 与矩阵直和的完美衔接

选定适应基底：

-   U 的基 {u₁, ..., uₘ}
    
-   W 的基 {w₁, ..., wₙ}
    

在新空间 U ⊕ W 的基就是 { (u₁,0), ..., (uₘ,0), (0,w₁), ..., (0,wₙ) }

这时：

-   如果 T 是 U ⊕ W 上的线性变换（T 分别作用在 U 和 W 上）
    
-   它的矩阵表示就是 **A ⊕ B**（块对角矩阵！）
    

#### 5\. 超实用性质（背这几条就够了）

-   **唯一分解**
    
    v = u + w 只有一种写法（内部）
    
-   **投影算子**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt5ebw8cBn2DdCMNHVjYUIF4ZXoMY9IXqFwP8MrcibmMKNCkKaO7khHX0xjXtoOAPaN492DS8kztRMvyZZGrdTOvaZ5AwOK0icGsQ/640?wx_fmt=svg&from=appmsg)
-   **迹与行列式**
    
    和矩阵一样，tr(T) = tr(A) + tr(B)，det = det(A)det(B)
    
-   **与直积区别**
    
    （别混！）：
    
-   ⊕（直和）：并联，维度相加
    
-   ⊗（张量积/直积）：交叉，维度相乘（量子纠缠用）
    

  

总结：

1.  **直和本质是一种“无交互的拼接”**
    
    两种定义方式最终等价。
    
2.  **直和对应矩阵的块对角化**
    
    这是将大问题分解为小问题的关键工具。
    

**向量空间直和 = 把两个独立（或互不重叠）的空间“友好合并”，每个向量都是唯一“蓝+绿”组合**。矩阵直和就是它在数字世界的投影！

我们用具体的例子来说明“直和”的两个核心思想。

#### 例子1：几何空间中的内部直和（最直观）

想象我们熟悉的 **XY平面（记为![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfe9kCFM0IPhyQqmZQPH3nlQVibIbwpwB4EMmdIDb0rXkb5AFnDnZhGWKUhiavqibwHtvQWelNNZrIlSLp37t7XibPVLk7EHficNXicyQ/640?wx_fmt=svg&from=appmsg)）**。

-   令 U 是 **X轴**，即所有形如![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp121BezWibRX9kfR1tTZCz7cM0RIU5xg3BuX9TZKAeBrF6GkPxSNplFJT3IwTs0LRCTeHk6QI5fXIaRYzNEuTT4TWia6IHuB9L3fg/640?wx_fmt=svg&from=appmsg)的向量构成的子空间。
    
-   令 W 是 **Y轴**，即所有形如![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpK7cqwOCbJbscFOeLMLpH6icmCuPicgVFqD1sx0aphu6Fibcib8TzQuuEEYBnxsH1BDcyjVKKvcicFAqwVWrUQvMr6XSTF7QcF1WkPw/640?wx_fmt=svg&from=appmsg)的向量构成的子空间。
    

**验证它们构成直和：**

1.  **交集为零**
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicSDXkhu8QAJ8DAQEWBZWR2x0hWzqZib72FOWee7u0z7tg0WxRricfrbu3icPLicI9WHuOTCtO7ublRN59eia3suDaL1dwCZ8NsRfVpg/640?wx_fmt=svg&from=appmsg)。因为一个向量要同时在X轴和Y轴上，只能是原点。
    
2.  **张成整个空间**
    
    平面上的**任何一点**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaoITJ89tQyGcgib8eAna1pC7LicSGBuNPbNYPOdvhmTXpluNZuicibI5jmYw8IpekMIdQ0b9JHibkZglQchbHQicx9cLRP1C5bkU3oOKmNttHfquA/640?wx_fmt=svg&from=appmsg)都可以**唯一地**写成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVaiaG5Jr0pT53WXJ4T59vHvLA5RRwjNOic5SQnARuve1WE3tsjLnTPibqsy0UDqLTegvsIrKXh5W2pETJcbOY0TvvrmnV4Yyq34w7w/640?wx_fmt=svg&from=appmsg)，前者属于U  
    ，后者属于W。
    

因此，我们说平面![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLR5KcMoGsAMt9SIH6JRHrV7lcfwuGIHibLSWcuTj39Mc1cDVLUc0UrFEF8hQ8pzWicfviadfxZMyu8XnZPESZZnzq1YAmNxquSkZw/640?wx_fmt=svg&from=appmsg)是X轴和Y轴的**内部直和**，记作![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprHJTG6UZQHJibhb2vOWd2OfVFJicdicwJdhuK1Wqoc52cIUjGMz9zuqicjEqdUrdDicnY2icJ3osltkA8yTuD0hibuM3togA9IYdURibRQ/640?wx_fmt=svg&from=appmsg)。

> **关键体会**：平面上的每个向量，都可以**毫无歧义、互不干扰**地分解为“横坐标部分”和“纵坐标部分”。这就是直和的精髓——**独立分解**。

* * *

#### 例子2：直和与块对角矩阵（核心应用）

接上例，我们定义平面上的一个线性变换![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0fRAtOicpuASrCiaj8iacYz6x7icVX1YbMrfw25tPO6VTiamPq712A6wzP9ibialHJaThvPjOboyX4MxPsU4py9bJ0ibibcP3du1nb7Icn4Q/640?wx_fmt=svg&from=appmsg)：“在X方向拉伸2倍，在Y方向拉伸3倍”。

-   用公式写就是：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgteYLEwMpDqoGu7bphINw4RJibG53z6ogSSTia2Bo5S9YfEqGVe6oaAxap9lYHhtbCB1wJj0OvGZ1VdZBdWyh7NrmgAD2TYspIrw/640?wx_fmt=svg&from=appmsg)。
    

**现在我们为直和空间![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90ORyZRSicN9s86GPIMnEAPRwlPsCwKHapv2wdsmiaOiam5aktUxKyOfh3K8vibR9u9GXzZ1BmTnd7ibsTnFia9Kz6OD8lK5tZDRgBpNw/640?wx_fmt=svg&from=appmsg)选取一组自然基**：

-   在U(X轴) 上选基![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Stq745daCfne82NA6WkULNTXMWhaGvtGmUhEZosLKvr0icTryiciamJUaVHQky20Ajaib2ETicsau2SvtbgurxFyytF8ok2Ho77aCXicSEMdIWSiaw/640?wx_fmt=svg&from=appmsg)。
    
-   在W(Y轴) 上选基![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNcwCvwTrIAEnq3TdjQHib9FM1eAGa5L9P6VKm3zvVKKAnlwOQAvOTruhsTWk0siaxetHDuJVf2nvjMAX94mfvVomRt0m8zPVuNzg/640?wx_fmt=svg&from=appmsg)。
    
-   那么整个空间的直和基就是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtlNwYmgauicQ8CyY4yP7DEAXU5IL5uc87pUhqe7v8NSTb2jnzoc6GEGzbvodPV5ibT6nQGRpPOW4FonZt1miaS94DZbicBx7jBC9UQ/640?wx_fmt=svg&from=appmsg)，这其实就是标准基。
    

**计算变换 T 在这组基下的矩阵：**

-   看 T 对 U 的作用：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf2jWkjTAwHFvq9k2jf7YBFELCFibVHpBE1ONsv1iaUrpvHWAuCrP6HbfnGrgX0a6MCzhNRh3202QAaymzjPONXgNhu2Zj97o4N2w/640?wx_fmt=svg&from=appmsg)。所以对应U 的系数是2。
    
-   看 T 对 W 的作用：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1S7SdPObyrcnQ6QkgVibPpfRTJvqRib0uaS9U4VYicowDNt11Mw9hNk2XW8l8zsib4Ka24Y0hWBpvMUb4oQom0TTDUFc2bfD3WWricw/640?wx_fmt=svg&from=appmsg)。所以对应W 的系数是3。
    
-   因此，T在这组基下的矩阵是：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHXOoUNItdzTeOnFBRwvSpJSZmtibzYYiaqcMCxWkGkCyW6fcbVhRQyjibv1argqXLTC2FxaTmt8My40ps5p2kzUtQKOx9ZjczdgDA/640?wx_fmt=svg&from=appmsg)

这里![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWv4nY4FWJDd2KFP9LoPlZnibv8cqvp9Fc0iaJCkajquIN8hqJicV76ID6tdDYhclEiavkLJ7YcB9ycyrFV20nNx3hqHqTxrkPR1uqw/640?wx_fmt=svg&from=appmsg)是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtEamrqh2vnmS69icjmQIf3ePyPWEc9KOZNSNzuplS5Hto5w4hnicM5pFofwS77L9SRr1PjVIY8VTD52lFs6UKNhbib9qqRAtHabjw/640?wx_fmt=svg&from=appmsg)在子空间![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLIjiaZqbhic6CREAGSq2hVZR8dmEZ3BheO4JG3dTG1DyQU0amJKn87r34mPlqKV0lSrVQXqR9nruEgwyoIdqHlnxjhGccHKokNicg/640?wx_fmt=svg&from=appmsg)上的变换矩阵（1x1），![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5GhsssEMjRXBiccJfXsseEgJicbicico7KWFRpsib5zlI4gMEKJkCHg7Ond9OySWGscUJwOI6Rktia6RQl54qsMOwicVDMOibHBhcZt5fibWzibwGicy8MA/640?wx_fmt=svg&from=appmsg)是 T 在子空间W上的变换矩阵（1x1）。这个矩阵就是典型的**块对角矩阵**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4Ilbiaq2UzbicEWWjujFdRaDhIadrra8dFHvbFmPDXgowCiaZicTZiaEkRuRox1dmGFjexK32mDV3CShwljKw90U16xOP1E4vI5USYrOzSA/640?wx_fmt=svg&from=appmsg)。

> **关键体会**：因为变换![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1LaB8o4D4OMribyE9KcYV2G3paKkaH3tRToyFiaGwNCUqpJjDKv401mfPjMsutbpicDniahBsE8bJBiaWul5uUtESiac9ZDNSuFpGq4w/640?wx_fmt=svg&from=appmsg)在X轴和Y轴上是**独立进行**的（不混合坐标），所以它的矩阵呈现出简洁的块对角形式。这让我们研究![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWrDibp42ko6tj9bTpCQibWJUxRBF1UyePblcNcxpVkaq6u6DxG07sZBjJMCVunOxclGKbAIWNicCkW0BT4icURYZ3aHQxYueA0Bzlw/640?wx_fmt=svg&from=appmsg)变得极其简单（其特征值就是2和3，特征向量就是坐标轴方向）。

* * *

#### 例子3：稍微抽象一点的例子（多项式空间）

考虑所有次数不超过2的多项式构成的空间![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57nAgJzRzdvyX5iat4AU5k3yQpC1FjQr2R6D5F5G4F1pb2nIIrgUQNowMxicvj2cXNsOVp8WBTnUneXXmSR8JoAicCCEx06MhtHtUHKzpLTfiaXg/640?wx_fmt=svg&from=appmsg)。

-   令U为**偶多项式**子空间：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5IMiaGkhTcLApmaWvB9X4qThUoqzXeUR7nlrAicELR16tfTuiawwPywA1m1a6paLwJG50cnZCE9iaZwUAibBq9lGwSKz62jF5C63Inw/640?wx_fmt=svg&from=appmsg)。
    
-   令W为**奇多项式**子空间：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5Bqica4KHE97CsU9k9DrfUnLk23ia9AtODNsd4ic0xicY0qqBsERibXIjEmfZvjfxWhHcbiasjxF5qkCt1fc9IqPvvHODXNZa8pHw8OPF3Q/640?wx_fmt=svg&from=appmsg)。
    

**验证直和：**

1.  **交集为零**
    
    一个多项式如果既是偶的又是奇的，那么它必须满足![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6u7n409AC4icUmbnTmVU2Jzwh7QEkAaOOiax9iadRpMv1iamnWCrA0HFpu6vLsBs95Rnc9T71rcoLOian47UczfoHS70Wvyd9wFMsrF1gbkMDcGaQ/640?wx_fmt=svg&from=appmsg)且![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGDF7e76Azc96aA6sicCgwVxgb0epicSLS6nPJzPZjMoKKO58Xsr9yxsCaK61XgSBgdHHEnn4G3A9tXHXUk3diaDRw6S988rIAGvHA/640?wx_fmt=svg&from=appmsg)，这迫使![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuLz9sdrYneIiaO1FIeaOoWlVGwLybKicm4ekmoOgTlTEFOAlzsq00xATcr2uKDq7VcwjNItA8tzhnEXJiavc36N7Zxt38DeycF6yQ/640?wx_fmt=svg&from=appmsg)。
    
2.  **张成整个空间**
    
    任意二次多项式![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb774donE4OM7ZPpdX0jeUYhrRp4k9nrt6g2heF4vyWKMUQdqP6qlPYTRI7QZicpFib2p8icm4hxn01PmIib0moT7PfBWS18dY0nPIHxg/640?wx_fmt=svg&from=appmsg)都可以**唯一**分解为：
    
      
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7FDTfN2wvKsm3JqIIwHSs6FwN5ZCLd3IA3XJbrCBaZlha34tUMWgw0QicxzDr2rmDa8X85cJOumWBYzEL5PibicByQtV6pdicCjzBg/640?wx_fmt=svg&from=appmsg)

所以，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGW1QjusDpJaSpn78zzwwGAxtFBzRnJfxgiaG7Iupn6kDsrs4Vl9PrrIzYDnJmaRIg3a8HaLJAzZEic62zvHBnrX3XoUm0xGI1yrw/640?wx_fmt=svg&from=appmsg)。

**如果有一个变换 D 是求导后再乘以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtD3xZnON1ZsUiagRTVJBxLHm3pm3GIm8Y7V58PUyNIQLbASJzB6TymLCMCUCrTNWWEcldyYbQh4ibcQLDsxbNz4ib5m3ntX4nsC5fA/640?wx_fmt=svg&from=appmsg)，即![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgnAK1iaDpWICMSSqgEgtngf4QyT7tlxLLVicEroALuuBUKlJXh8vzEGhSiakmnOYtCtOThkNre0Xedvia2u42Kp4LM2ibWFvFYAMmZQ/640?wx_fmt=svg&from=appmsg)**：

-   在 U 上：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3Zl8MGlVJia0AvulhSkxAYHruBG9dfQImgQaHzsecuDSfQE3WjuEBnnUjZoAtVgNvUgIp1MXpaUQDNicnSZNZ1b1uRM8jTxF8rxPyg/640?wx_fmt=svg&from=appmsg)，结果仍在 U 中。
    
-   在W上：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJYzSUVvZphuiccUiaiah98s9YfCubHpt0qu3OZJScib5eLRqBjgnUjm3xxcviafudgYaE0VR7qOjHRQZibo9YUnOyn8oPDiatsF24ib2UA/640?wx_fmt=svg&from=appmsg)，结果仍在W中。 因此，在直和基![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7w5fehvkhDibicicwnNadJy0hwfJKvXCFicGAicicxqhfnbhiake7k7f25Upx2nguvoKEyibfj5seicvjBUH7ASmw7IQYmcGULicQrFrViauZZqtK6bW3Qw/640?wx_fmt=svg&from=appmsg)下，D 的矩阵也会是块对角形式。
    

####   

通过例子，你可以看到：

1.  **直和是一种“干净”的分解**
    
    就像把物体拆成几个完全独立的部件（如X和Y坐标）。
    
2.  **直和带来巨大的计算简化**
    
    当线性变换尊重这种分解时，其矩阵就是块对角的，大问题瞬间变成几个可以**独立处理**的小问题。
    

希望这些例子能帮助你建立起直观的理解。

#### 向量空间直和 vs 矩阵直和

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocubFicKR68hN3890nnic2UYGibl2xfJEawgNhyM5rBhATJV56aiccCKyta1umzc9lb96AdzDCBGa6Q1u2Cwm69kdFgFVbTC3hauziac/640?wx_fmt=png&from=appmsg)

**图3**

图3讲的是：

**先有“向量空间的直和”**，再在“与该分解相适配的基”下，  
把线性变换写成一种特殊的**分块矩阵**；  
如果这个线性变换**不把两个子空间混在一起**，那它的矩阵就变成**矩阵直和（块对角）**。

所以：

-   **向量空间直和**
    
    是在说“空间怎么拆”
    
-   **矩阵直和**
    
    是在说“变换在这种拆法下怎么写”
    

这两个概念密切相关，但不是一回事。

* * *

## 1\. 什么是向量空间的直和

图3最上面写的是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1RwshPod4IgQ5obuiceftXwgYt7ScGQtjKlNZib8AeGTId2SUaOTk4LEJN8OsAkEQPmSInKAmJoOjFicq5Kz1n4TtXbOM7RHIUJqg/640?wx_fmt=svg&from=appmsg)

意思是：整个空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEytxruRicoCFwP1eFGM9KaAAg7v87tibj1AZPo5mwFOhXYQZf3fqTFZ3vIdsEBicS3ZgicXtNibuy0Iicy03QMJ4X0m26EM32CTr1iaGBfQ/640?wx_fmt=svg&from=appmsg) 可以由两个子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuKag9MHA11WH1SOa7SFd3s8vqcj2zN71SBLycg8iatEbcTaUj1J3dWLHTScPC8KgqYAicdlIBE0diaCQa76V2wC6MWVEZxsb2Tia3A/640?wx_fmt=svg&from=appmsg) 拼起来，而且**拼法唯一**。

更准确地说，满足两件事：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbpNCzsYdchH3avjjTbwHCrAwQKMuAYmkkzc5iaR1c9wsvsaNNcwJZv1jjuZbuM2WcdQkQLcRibUjPWed4y6cB482H60VH1biaVI0g/640?wx_fmt=svg&from=appmsg)

也就是任意 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThqiaNIfvakEI2WgAME5STW9hseF3WdruZ6RBWOMic6QYdvOdI6IoUkAoEoXib2VuPAgibbjE5ds9UyYz3hgvQ9u6FGQD7xhf2MDlPw/640?wx_fmt=svg&from=appmsg) 都能写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQ0LuVOibNuNy9ibclY6nnciaj61vLS1rhxtkMoPaL8gG0gLY1dCHibqHHNXKZHbVtRbKMliamCjKpZ0IPph6RmF2mls4l5bOnEbzGKQ/640?wx_fmt=svg&from=appmsg)

并且这个分解是**唯一的**。  
唯一性等价于：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyPyTPRq0q2AHhC1ickkPs9dkZFtBOwGqAherYISEqyxGbEdqzotVylccibwvaOA0DmEe57oIkK7r2IRWmLgb6ddfuWekbVesiapUA/640?wx_fmt=svg&from=appmsg)

也就是说，这两个子空间除了零向量，没有重叠。

* * *

### 几何直觉

你可以把它想成：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7mia3VETsYjicb354JdicGsicUEOHpkomLD2OU4ydTQib5g9ooLdYpP4iajcmPGBBY80bgORsWfFVicHMKyTwH3HqjxphanSQwv19LAklYM4af0xVjw/640?wx_fmt=svg&from=appmsg)
    
     提供一种“方向成分”
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXuibPYY9wM71QjypzZM76u3SHTM6VPoXAZQID6gtReNxY7F9UWCdJEDqmqhFq6Xkdxb0J7raxNnxPIdkrQtWG1ibEyMia1qd0mt6g/640?wx_fmt=svg&from=appmsg)
    
     提供另一种“方向成分”
    
-   整个空间里的任意向量，都能唯一拆成“![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUhDG33uyNwuMDu9Y69jicMIdibcJ9VLoueicHclx9Zbhz5Cicy9kDgwLuyUAwdGkVSJvJUvBdgXdfuZTl996PG1ry4prrwibsg2bfibQ/640?wx_fmt=svg&from=appmsg) 部分 + ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt5zhvRoI5gT8JZTyI4llEiaLsTnficotQIh34g3QTy61YxFY8RA2Ewicahkrfm0GgFMl2v6muzODoickog23na8ASZrYKFLPDZoHWw/640?wx_fmt=svg&from=appmsg) 部分”
    

最经典例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISR3PXbYkYvLIlX1uMcdNNyg5JzWGBriceE9icGCpCQ7eZYiaTaVUFsV5ShXxickvSpRho6ibkxzGXP7r0zaAAQ0wBFex0BV4Py9QXzg/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb770ptNGhwOTkerR6RL0Z7GBmIKo2FTGDU7hAN35NdQjuI3Db7ApPAyibxROlmfdgar3UAyWtFzVRctY2VsTq1jjiakNBScmEKwBTQ/640?wx_fmt=svg&from=appmsg)

任意 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Y559V5uMGTibdW20B6Hicaryy1EQvqqtTh8icF3z8tdruuYgXuER4J995vIauYaib9ayv9eND9fUbMiapzYxoYzTiaiaZHxEIYTF5OiapNf8jLnpCAg/640?wx_fmt=svg&from=appmsg) 都唯一写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpUHgyqicxapP78IN2zZiaoVLSjs7vDmwLvTAQyBBm3212CRYepewicFFFaiavKUDPniauClnkw7ia71sRDhT5YfqeWq7NGsw8VnHLicSg/640?wx_fmt=svg&from=appmsg)

* * *

## 2\. 什么是矩阵直和

矩阵直和写作

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgvibw9aQqZsFLTVh2rJXKP2uRXaCOic5xUib64krtlwb63YmYicNBmQNx5BEn8I8rb8HG8EcS4CnFgiaujFejicubpn69UTzeMQXh4qw/640?wx_fmt=svg&from=appmsg)

定义就是把两个矩阵放到一个更大的**块对角矩阵**里：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S3Nnicia8gweOdAYQE7buiaTwK9vaP2ZfTvdia3X9yePoulicxf8IqnbahgWkdBr3IduwBkULENHhucLzGakt06QicYRATPUqadPLcRg/640?wx_fmt=svg&from=appmsg)

比如：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ovTKiawkGHjZKYp8mr7U70gwVoEDPbS3n8iaEgViaDYNJULHbyoAjjZdNSMfVDfe0N6WdNrytc2nrBASu0ic5vlDaogibkSbcwkiaQaA/640?wx_fmt=svg&from=appmsg)

再比如：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUGcBVppVhXOwfMlicDDicFX7uZhUJXuibWSOt46UGa7gicrc2GVMeLyrE6oq485xG5kFZRIznF2L67FpicM9ebkQHRuP1iadx7NX1GPQ/640?wx_fmt=svg&from=appmsg)

所以矩阵直和本质上是在说：

> 这个大矩阵由两个“小系统”并排组成，它们互不干扰。

* * *

## 3\. 二者的根本区别

### 向量空间直和：对象是“空间”

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9V678QcICDXqTaZ5Bo0aia7MeQ4QicR1pw39TvSaicRHLIjvVHbulzXSJQRZicpcFw2F3RxNlBNmHTWLeIZkfS4DgtiaP0HqWzL7ZOA/640?wx_fmt=svg&from=appmsg)

说的是：  
**空间 U 被拆成两个互不重叠的子空间。**

这是“空间结构”的说法。

* * *

### 矩阵直和：对象是“线性变换的表示矩阵”

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smrlMa2vVCtibAFlCib9C12yPtUBqv0GWFz1sD4cXj8VxcVDghkCCdq1VJjsRRKviaQiaNXqxxs00D2fJTyYwVncNQFiayk97hr1esgA/640?wx_fmt=svg&from=appmsg)

说的是：  
在某组特殊基下，线性变换 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlBTtG4VKuTHP0DEbAiaowKBW81VVFrO6tIlqUJ1UDFzscDrPeAdjQ0OHurFrx5EV0t0RewfrcXSDXN6S6CmcAYmiaBCWCl4ia7hVA/640?wx_fmt=svg&from=appmsg) 的矩阵恰好是块对角的。

这是“算子/变换的坐标表示”的说法。

* * *

## 4\. 它们之间是怎么联系起来的

这是图3最核心的地方。

* * *

### 第一步：空间先直和分解

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmUMPhq2f6oia0v8xpyyu2L81TlpLQVkRUNQ7pLsS5oEAwr2r4iaxSnOhqwXmXRCbLyOw5I5glGDvRCgqo0ibq3aVHSKLr5yolbgZw/640?wx_fmt=svg&from=appmsg)

然后给 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYvCXp6cHqfMXIqEpkRDFqM1QSyCJia5KibRcIOTmFibny8pkM1icDkUUJkIibSxg9Z8GZ6J7vAKZbS65p54KkDZncczk145NFUnlXfA/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEIMPjDeqOWibScibK5HD6fZltKheC1gyPjDTWcx20gEFVvQHQD6JdjzZF733icHP7ArxLEVnNIe81VjSsshqOqiaVQQeD4tRIZcwCg/640?wx_fmt=svg&from=appmsg) 各自选基：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68TIFib2hP6NQvqKIAP2icbtOeekD0aVR5cEZCIbr5FxzrhspDVDgFKB3UkIsBROpKiaIVtpPTM6C1EtBDMxGXQSIcnC8AtFAC2hexKesWNB4Og/640?wx_fmt=svg&from=appmsg)

把它们拼起来，得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsnuFhOsiac8aeJccE8OBMEv93ZNgjqHy2EKhXY7pvAHWxBRKR8YbLKlSg8pb6QvILcCD2vHHoc54SrSicVjUWrWDdZcjO0Xmicddgw/640?wx_fmt=svg&from=appmsg) 的一组基：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGUM7jeyHicicVDSianINxP97BejMfEiaYz58cah7UrnAtQUUtELSthN1drtOueicCEz7hhHIrGmHcgMicXc4MucGgcDNSsoKWJYyTgew/640?wx_fmt=svg&from=appmsg)

这叫做**适配这一直和分解的基**。

* * *

### 第二步：在线性变换 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNRCib7d8Q8VBXoYrswuDk9JlqNicggibGfXNqa0Y4DCJjSRqPrsawicAz8r6cbQA8SFh4tZT8pbdmKzzkL125D2xwoJxwM9F5tpYXg/640?wx_fmt=svg&from=appmsg) 下写矩阵

这时 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUAyxvWTeGeGNjLE3oxRXIickuhicUb1kE45jgh0OiccVIrHYtI24NvfR7KYHaPcDyia0116O2zLXdSBibCibQLo0ayFavuqIVibnIy45Q/640?wx_fmt=svg&from=appmsg) 的矩阵一般写成分块形式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfMgKACXvI9ZmlSMUEu5tRiaiaiaJcgKApWicrmHDicutEEHI8e66bU38v7ZN8SRIpfGnHCrLzyp6JRNd4LUntOshQ29tKWOHBRKTlXQ/640?wx_fmt=svg&from=appmsg)

注意这四块不是随便来的，它们表示“从哪个子空间送到哪个子空间”。

图3右上角已经标出来了，但那里有一处方向标注其实容易让人混淆。更严谨地说，如果我们把坐标向量分成“上半部分对应 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmXEPSJb0kFfaeJp9IjPeK4raIU3OHp1ZKsWoqqZjaje2IuxvUkrUaNh9oXyjZu1PeAYSFibM6QGpZF6WINADRwBgIatFCFKp2fg/640?wx_fmt=svg&from=appmsg)，下半部分对应 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRYicvCzppCtqsSG8kGKTVTKeLrLLBsMF3MxkNO1BgAzaAU7nqACfryxwlfLgtUhKt45kib4Evc5fsHPNDc6AIRTOJ4m4nqAv8jHyg/640?wx_fmt=svg&from=appmsg)”：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4LvEfOtrIjpqwxyc7zRFqMGZ2hcbpaicJnjEEpQA0RrBg0RMyFwdp14Oc4awEr09BaibaxU4lRD7QUqzHYLX5lqmFGpRldLribQMQ/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdZlpj3YBydrCvphju35HTRpDwE0bw08y5GwaU36dGsgaoAicfBv2nev1iaMibaQPLibh8uSSQmyl9gMzOfH0oY1NFyYTQuNr5YbiaEw/640?wx_fmt=svg&from=appmsg)

所以：

这里的意思是：

-   A：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1dKwkFR01n7FlkesYaCABJhSlG1Yib1h4tt2EQAREVIUTicI6y2whhzyuwiaMM1VBlxc95Z9icp2fmVq8SfAEibatHNuputOLyaV92Q/640?wx_fmt=svg&from=appmsg) 内部怎么变
-   D：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90GEklflia1a74NIibP1ORy4PGJp2jAZ2RqmWhxEia6rqAOZOCibMpHibkvCSxMnx0JmxocEXic5haM5Sm02DZZd4dCiaqttZPUV3KLW1A/640?wx_fmt=svg&from=appmsg) 内部怎么变
-   B：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyWKcmiabTg6q6GDXyic9Em42JZQsCDrCDlyqc7ml4081H0iajz1sQ4LBK39FCCWOpIwJjdYNdpia3k4vpxzME0HiamCNEcAxrZTtSRA/640?wx_fmt=svg&from=appmsg) 的东西会不会“串到” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VicZjGH2crGDjaths9UVyl8FlXwGlaJgoRfmRcWjoicnvuiaC1WhqWh2vicUlaWG2NUuuMvIOpuIibEvkwfXyTKGjh8aw6dPpAgicNyXJJaOPw4NQ/640?wx_fmt=svg&from=appmsg) 
-   C：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGEVInINPs9OpjlvvZoa4BFrPkXDvwgzwMouCVek5ToTR8VkRodspJYOT9nibyia4MhungjHB8L0UV60QO5rCMThVIEz2CxKztLfA/640?wx_fmt=svg&from=appmsg) 的东西会不会“串到” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH35djJu7KjYoqw0CEs7KhACIxtBiaV2q0pukJG1C9HaWLPAtmRs9OD1WVsR05FWIfO5CB3N8Jq9XiaTgYbCC7jXu3BkqI2seJHcQ/640?wx_fmt=svg&from=appmsg) 

  

* * *

## 5\. 什么时候矩阵会变成“矩阵直和”

关键条件是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEuuYBRGbhuqcnTx63QOREbFP6ITg299ts1NWVATeHmibTXp1eHzlkQBx418SJcubSA6C3fWp3QE8P5bGRsRvKdOOYXyKemqQiaaA/640?wx_fmt=svg&from=appmsg)

这叫：

 **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic0H9QKJAAx0LRIZLKJ8wCiatSibcTdSyKsBvPJBDgQMh10aEshEkogKIrY9N1XK9jXmbX4Z9hxI9MBCyaRDgfx6pc0TqzeXjeqEg/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYKQQibCIdq9TY2bVZNA7VkCCfW6xGbPyUN8y8enus6YDbgczL0xZAicYFEA5ZEpWO1kluTiaUu3gZ9lUkfuuwKTnGQ0rhiauZXTwwg/640?wx_fmt=svg&from=appmsg) 都对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMN8qLPFepbY0K9QQAMGWLAaIoKMxwKIKFzOKoQvCViaOR8MZAV1M1lh1iat2IlBAiaYqLNTqlZGia3icEV7fcDqAPNjDZJyWgATeEXA/640?wx_fmt=svg&from=appmsg) 不变**，或说它们是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7aMPvEgfwW1BYj1NHRbTc2vAejO4NJ5QKbiaHoWy7YzW7cWrAibNVeKA40tibdYWNXhD8UNicbBD7OfPp8PAq5Tg7oRu9GdtmgMw3wIuiaW0frhSg/640?wx_fmt=svg&from=appmsg) 的不变子空间。

意思是：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7CxlIny0KvgOd3BEya3SHLvicbhXAtnA09u0U3222UWmppG8e4oNTuaTuCY5FHTcuUAdAeuZBCl8BicKl4VEtcbxkJhibKibtntRVg/640?wx_fmt=svg&from=appmsg) 里的向量，经 T 作用后，仍留在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau2ljdGVI6j9tU9X2exY85fFeyYELx3lul3pgMOf6CkCFibWI0d4tJ8Pc0hz4YGe9ibHWib4mCicZ9ibZKVVTSDvxYN284UUYlsQ8Gvw/640?wx_fmt=svg&from=appmsg) 
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpoiaUzogaWT5IZIHLw9eRBj3HxQVSqt5meYicevqLSPhhCicU9icFg0lwES3ADuEsIic1yQFGfKWoTwRk0MTsgv86BbpNHdWgPXUJuKg/640?wx_fmt=svg&from=appmsg) 里的向量，经 T 作用后，仍留在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtj46iaprw9Y425GHlqfo4RGoBO1XHD4e21Xf7HdYhxeazDuaibcM5bg7OxN3AoBAiaVcpdyEK3OWjuJ2hc8JyMYm07Je2RwEdKRfw/640?wx_fmt=svg&from=appmsg) 

于是“串门”现象消失：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZbUUJL12M3GJHKV4PVUNyBUe4qDLeXV7FJwowyZrF4pSXGdjmsdM3qEfQaHGkuO8jv95ibhe5huGhia9Xwq9w4yCibOu0DicPUMhAA/640?wx_fmt=svg&from=appmsg)

矩阵就变成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt3ibDV3FocEAvodWpiaYeqQUl3uawDpj4rggKzmW6rGxZvsQDr0uHhjibhSK3RbXBI6nOUDRibgMIMP6XZez3z7umvjmKHtO9ogApA/640?wx_fmt=svg&from=appmsg)

这就是**矩阵直和**。

* * *

## 6\. 一句话抓住本质

可以把这句话牢牢记住：

> **空间直和**是说：向量可以唯一拆成两部分。  
> **矩阵直和**是说：线性变换对这两部分分别独立作用，不发生混合。

* * *

## 7\. 一个最简单的二维例子

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ZBVeyG33Ens2Q1SkJ70HlOUlvefoXoKLCMVzhyr64XVibIPHrKpp90U9HGicqBBmFhAEPgDEOaedzBwo44bexFUtzrYKVMyfibLxDO32ufMY2g/640?wx_fmt=svg&from=appmsg)

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4IlbiamuOw8MAsbIia7KZKcwNaIvTXuVz5pgiaJK9tdSeeQxxRsicg1FicdiccickFcg411Aoicic6GQAoWAbZ3l7bJuPVNIhr4vdh1BrDRHia0g/640?wx_fmt=svg&from=appmsg)

显然

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7NFduWnYIotaZwS51U33asiaQHpcibLa8A5eC3d5nZyHjmw7H7latc88Dk5S5M8aYPOCLkG0093g1zCiaMlxc12mKBjghvVvgkKEw/640?wx_fmt=svg&from=appmsg)

现在定义线性变换

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hr03AszMKlC31QG1T1v9f2Sq4KCGwNaI36CzbryUvBlTyuzVkwticPycf7cwGaAItBALSibobUQVfmAybZOoEfkzCersFLOB3uFicA/640?wx_fmt=svg&from=appmsg)

那么：

-   x 方向只被乘 2
    
-   y 方向只被乘 3
    
-   两个方向互不混合
    

在标准基下矩阵是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAFxABc84wgG7F0GpTc1bnCItDO5pcicuKjyakFNUjxQwpB3kmhM6Xww0ibmVicOWf5fFImnCymVfibTjeMx4UPUSpdDxFj6JljvQMw/640?wx_fmt=svg&from=appmsg)

这里你就能看得很清楚：

-   **向量空间直和**
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIRbrVwTibAUKhRCicALUg1FaoCaoP6tbUUA6WBXEtYNTlyV7FcdNBYlicnZDZf0pxKRqAaibvVnLxcsMeDANXP0tV2TfuGCUp2IcYg/640?wx_fmt=svg&from=appmsg)
    
-   **矩阵直和**
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7lbq4WALWvx6UdzRbk6fiaaq6bLpll2BEFJiciccwNA7jO0LduoAHE5X4uqEmfUibpuYqIiciajzrVl7jTIcBHd0gDuiaDadapqUFyevg/640?wx_fmt=svg&from=appmsg) 在这两个子空间上分别做缩放 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaIHjfOLgiaicGWQ9e4E7sEMD5EOPvRVm4uX52Q2Pd7g2uRqibZcYdMDiaED82UucyOXvzOM3eUYzribwnGZ14ctvSYkLdEpsh7uwGicg/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYmibSPSaoVPRmzwibJGO2dRCLA6R2RE3TtibWib3Y8WaTfjgKcUVZR8IaE1N6VZNC3jNlvqiaRUtIUmicLIeRFAup6euWYcia5VrnJ0EQ/640?wx_fmt=svg&from=appmsg)
    

  

* * *

## 8\. 一个“有直和，但不是矩阵直和”的例子

还是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7zmBEpRjw3xk58kWjOh97A7pbVRogKZnxFACgYZpPm6ItmU5wXcS2EVm3sb7BzNqTgE2HtS4OM4UWXAPXPDLNZveZgOfhW0SrJTJfafPk4zg/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEBqicljyLBy0cuQJ3vxhavib3z5Duypoj40JKhpegpnhC0PZgznI2etJbPxvK3MdCOqLmDJCuok3O3sVFBVdqx0haWNXREUtQWvw/640?wx_fmt=svg&from=appmsg)

现在令

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smnX8oKH2kibncG0ZHdKQxHYu1plory2nSELDMzGdkpwxRWAtgET9N4c2JbR1egGcia7ic6xPv6J3OucMpiad4A8uM37U15XKy8d9LA/640?wx_fmt=svg&from=appmsg)

矩阵是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0rzLibnxxn97B0Mwm4m2I73ooCapoKibBXRiaOKxOWzOGQdJuuuqL8aKzicknr8Av9cL2LfTeCHFHv6sf47trzS67Qs2eticuXj3vbQ/640?wx_fmt=svg&from=appmsg)

它不是块对角的。

为什么？

因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHw8VF4v2z4In2IUYK7v6kgm2RLBzbMb4w1qCTAIPA1nnSuG3wcicAagrlrOYRnbzCTiczdfGSPNm9rqibj1SKbH5UMbIvj7KX8xNQ/640?wx_fmt=svg&from=appmsg) 中的向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9k6hm7oKW5WHXkTBzG2zZTwvBpTIfJ4V7fJLbBd6OzFXeTFmryS9pF3OH8lAFUaofr1s2ZcQMibjfLlTRDcbyHuQs2nerYVP0dA/640?wx_fmt=svg&from=appmsg) 经变换后变成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRklXcq38jAMNqjOz7lR6YibDJm4SQbiayZq0JGBaLw7L74IbQGHFykWOL2YZbVBd266iawysTtJVzuEX8gic5MzmmTJ0JNKVmY00nMQ/640?wx_fmt=svg&from=appmsg)

这不再待在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvXRnsnZ3o9Rc99ibbwrRndCMFx4uHerZia4vBK0pDtUQ6LHjGNwOWHr4OPZjq2ibfv4nXlxolEiax2RaWDO1cFBXiaOYiaEXuricLjXYA/640?wx_fmt=svg&from=appmsg) 里了，而是“跑到” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7GNn5jFF9HUNmC8LBcdlxicUnP4azaDJ7HgiaMqicYF7kuS9iaCVFgJJcSpiaPBIDu9Z9dubJKLU1KBSKk3yda0uIIZYf8XWpgicbskQrWTDSte8Bw/640?wx_fmt=svg&from=appmsg) 方向上去了一部分。  
也就是说 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicWfZxklAKvH61srb9Oxm3cFjyXLJiaiaW674ANZJlRyhQvFa3nAqZ8XFIUavxicNub4GWhMnTYLSvmmGlIlA8S2RvGDX8oZATc1lQ/640?wx_fmt=svg&from=appmsg) 不是不变子空间。

所以：

-   空间依然可以直和分解
    
-   但这个变换并没有尊重这份分解
    
-   因而矩阵不是直和形式
    

这点特别重要。

* * *

## 9\. 把“![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbmFFqfnbIKy3gicyFiaBJVaEbRSK9JWHXKMg8neSSqIP6l1AnozMTphwibZw5VAQuSKFY9v7fheI4cc5KgibRsohNaLc22R3xD6VKw/640?wx_fmt=svg&from=appmsg)”也讲清楚

图里左下写：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7iaaQxyJyAFuqatp6UseWV4bBWibICqC9vvKL1iaNMNObJialaem7zy8rEQwkOVhcsFflRxBXFv9oE1YB4NDzJMasx3sL2yPM2mrjGoCBMzOsJkg/640?wx_fmt=svg&from=appmsg)

这表示：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfNvuaSd17cnWuZ394lw9D9iblxZzia3CHbPj5l2klGhBbibbzM1IIxibz1mYGtKUrxJx7hBuwJEryI19ibpp5w3HKM6QbPlvBiaUutAQ/640?wx_fmt=svg&from=appmsg) 是 T 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9RibZolt1eicb5TeJ0751TMr6Q9xs63bSaPFjgCia8wnUFhcXcb4qn34BIAkr7ndr0dgahiagqlKm9wxSboswib1mYGW55LGHXALVPg/640?wx_fmt=svg&from=appmsg) 上的限制
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5qdF3GeAYibzVser0nQVgVQRm9rZicjLAwARiaRcf5VbgDZS6fIflG1ehhFCRJUexHUAPLeMGYibjEXFULAzL0VXoA3TezPTnO0Ipw/640?wx_fmt=svg&from=appmsg) 是 T 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smnWbw8CB7ToYBn5j7ssiaSL3mibFfNSxej2FOtfrHpSD1LgJwOVZcFaVrTeCqZYdib8e4qDxSh91FYILVUR6fHDJJDzsuca24x00Q/640?wx_fmt=svg&from=appmsg) 上的限制

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dBtDXMqKDTEwC7k3NUKDX41t1nbRq8bPoM7X2sEbveCnp7q0GicsDWCyTjpdCqoJmyaqLqYaZ7OtnrxSXdIN4zB25Aw3uZzO8Bg/640?wx_fmt=svg&from=appmsg)

对任意

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQjnQB8EAvEM4PUGEzMtJyVTP7WCtudJmIibSv6zP9rC6cwbxFSbY2mxVeYJDddjYPpSiaibx9UL1YdXfo0AFtibxY23hDBWalof0jA/640?wx_fmt=svg&from=appmsg)

有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVanQ2My3IppF9APJMQX6PNl1LO4jhAOHGgD7gR9ho1GwTOiarZnQMlcuajYH9h8gEsUL98YWAyvw1uP1VnJffia17I2WOhOsLnmgw/640?wx_fmt=svg&from=appmsg)

这里的含义就是：

> 整个大变换，等于在两个子空间上分别做各自的小变换，再拼起来。

这正是“直和”的算子版本。

* * *

## 10\. 为什么这种形式很有用

因为块对角矩阵会让很多问题一下子变简单。

例如如果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHDF80FgaTmje1vEdrjVy9DlicTj6HhO9TXLBBOZJMuUuPLfoJlPTsLQnw7ZmS8K1FcxgzJh44lA6lUqibJa2Nyf6AmwlT9dCIXjA/640?wx_fmt=svg&from=appmsg)

那么：

### 幂次容易算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfTt2njKWPctCYTOZhk1qIj4micZWLfqY5I7tbB4JtNR4TxWaMs5V1eda7GyezEAeam9kTibOyZ5ILg4fXQzia5ickM8nMuvJXLZSSw/640?wx_fmt=svg&from=appmsg)

### 指数容易算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9hax2He8ZurM1LibLyjTaOialTW16AQ4sSicaOohX0WAArKjRL5bmyru8DyXCFzgBjElQxibsvHPkVfszkcvicNxjWGmNVNlvguhvRQ/640?wx_fmt=svg&from=appmsg)

### 特征值容易看

大矩阵的特征值，就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjTib3oTYryVlA4hl6u08QWKU2SY6dLFauxNicZhicwyr3mBeEyDz4L0c4JBtvZ9p1ZibzS2ZCKyA2L6mDdNWZ36P3QJtkHuBufQCgxQ/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrA6GRLRClibK7ibiaq5B8ico3rmy8cJFB6RibiaEV3WtfcZhMEXxwYf2MbEo9ZX9RiaII0nlOiaNFTU8Cl1M5PO0nZKh2kKqSgP5kWKfuCA/640?wx_fmt=svg&from=appmsg) 的特征值并起来。

### 行列式容易算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgsbGV28SjicFdqUmBia5zicQicTydm2QQyyia39gt8bSKpRZsHVJxy7BoHjkpR3qDiacopncXGiaVvOJmTbwR9LFzvnTEE4HN4CtldibCA/640?wx_fmt=svg&from=appmsg)

### 迹容易算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6Gbe2offAW1RibDZaLgOyIrXqfHWOXicic9jcCkibLyibtrxia5RxbHUNPHnvjIn7LwRopZEdjjicZgcV87n5D33XViaQdFU01rLv6zT56w/640?wx_fmt=svg&from=appmsg)

所以图3右下说“简化特征值、幂、指数”等，正是这个意思。

* * *

## 11\. 最后给你一个“概念地图”

你可以按这个顺序理解：

### 第一层：空间分解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0cibpXdJoGrMiafZ7Tr3fsuCmMyWhviaQ8jUrF2l2MvP2iadEGXjZdI0NLfLpMgZsNnameuM6L8eQgbGMCGV7UW1dHPqQmWbWib8NkQ/640?wx_fmt=svg&from=appmsg)

表示整个空间被唯一拆分。

* * *

### 第二层：选适配基

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9bib2ErEyAYnqu8VmEPNLt6o8ibnPS21NDbWKahJx2iaOdGj8G5XRU0fmwRiaKTtt8dnT62RA3ZWMzic77aA0zynwYJAUsaWvywb63g/640?wx_fmt=svg&from=appmsg)

这样矩阵自然会呈现分块结构。

* * *

### 第三层：一般分块矩阵

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpWx43LG9ziaA4jQVjrcuxSL66kNWUU6hb1KNM6YcdAArEltr2DISONoWEYIE87JKic1JR2gNia2HYt2Il3aBQrwuzzWKzeiaDfFLPg/640?wx_fmt=svg&from=appmsg)

说明 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgoJZTewxIUtR6cdSxTDckrnI1ew7skHbPNPiafvVHEkltzWGdg80OANfZjQXmkxCGV5OH2HPAbwwwE8icp7Av3rrlPYNo0zNURQA/640?wx_fmt=svg&from=appmsg) 可能会把两个子空间互相混合。

* * *

### 第四层：若子空间都不变

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL4MlH5vglfLib8kmrMpZPibWF1WGSAy3LcSAWplpGsmFrwmxrcBrUnJIWNKTicial9nqj9GDgz5AmFzicVFhTmnic6saGUb07HyqliarA/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb77z14slyCJLDNlOw9AyLZ4BiaR3ghribuoBYjquUEZfFwelPgCyQ61Njk975QRVYfPGalzHPuRtnL2FNhgUfOVN83o0cV1PJL0T3Q/640?wx_fmt=svg&from=appmsg)

这时才真正得到“矩阵直和”。

* * *

## 12\. 最凝练的对比

**向量空间直和**

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgjib5lch9P1fgOiaJtzAC7m5bt5IpzfdzoNF0CY83JpALdhHuxJgOcicicQUqkmReZX4g0N2L1YMIPGOlzvhpEtUvFsQWHibULKwK8Q/640?wx_fmt=svg&from=appmsg)

说的是“向量怎么拆”。

**矩阵直和**

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK4pPib52ZXLnvbhicjxytAs0qN5sedZGKeorXCOicTNgQn7MVbJ4TSXWU4XAO3hLB2oYOpQJEQFjdUXohCyxtdWBSDC7HJjrQQXwg/640?wx_fmt=svg&from=appmsg)

说的是“变换怎么分块独立地作用”。

**二者关系**是：

> 当线性变换尊重这个空间直和分解时，在线性代数里它的矩阵表示就会变成矩阵直和。

* * *

下一步用个 **3×3 整数矩阵**，把“空间直和 → 不变子空间 → 块对角/矩阵直和”完整算一遍；

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprC8IxOia1Wiaef2ewVNkuk43FMvaicQlmUofvpibUTnlMTygBSrLibsTUTibLL8da9HVZI8LCaMUPktnqH7GIWrKZxiaZbYGg987pcEMA/640?wx_fmt=svg&from=appmsg)

* * *

## 1\. 先构造一个空间直和分解

取整个空间

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFydiczUXjosKugELrMB1ypsjAMXRa69Woj0NPm2oC4iaoKnxkbVI83FZAMxftX7URV6ZAhgWJdfjm4UgkzgRWW0EXXYdh30pzx4wA/640?wx_fmt=svg&from=appmsg)

定义两个子空间：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7GNn5jFF9HUBgRxNhqgRV8ocugavo9XibnCeSATCjB25a4ZHbbHyp68dgMMTQedOUY9Hn5qD4AA8jLfMLQP5KCcjL1gkibvPfWibem47fhfEbDw/640?wx_fmt=svg&from=appmsg)

这是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbowYbND8eIPibQtdfaTjWHBwjic4kYHv7VOkP5p0ia99Amyps5aKwgbtJHZuwP0w6Uo7CWbwCPUckmeoerKa3w1wEYGsQ9Su8E4ag/640?wx_fmt=svg&from=appmsg) 平面。

再取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhR9pbGWh51psYWAxWztDKHiawZ0m9T8NIYgdrBD5CjTWYUGXXiavSM7ZYqDfNAuo0Hf0o6icaa7tIC7lIN6agpUToYic3EMtrVViapew/640?wx_fmt=svg&from=appmsg)

这是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHxEw4Jiaiatsoiaiaicu62oBJv0BhK7ZPtJXribiaqia7XPHPmI8q7HS2iaYWgjMfTLqML4dq57FRDseEvmMUhSaKOIF8rb1ibd9rjsAzsLQ/640?wx_fmt=svg&from=appmsg) 轴。

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlJEqXrLOMTxGXqPOaMPOIhXhyrrFmoLXfYXXpkd9JEMopYdcIDZ0PxpTj9HxUYcAfzyWDkUDIgM75OGEC4kfA6aA1U1rQRBImA/640?wx_fmt=svg&from=appmsg)

为什么？

因为任意向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUD5vOUiboRl2mW4pRBvCfTibnYBa5zb4nq5AFVniaFxywlMkk7Fw6OPFN3myIZaC4icjxbeNCVIicDESNyPzMaDpNaK6Yc4KcBGBw7Q/640?wx_fmt=svg&from=appmsg)

其中

而且这种拆法是唯一的。  
并且

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1A5yNbxrFqtbeD3iaZ5snVenIcMGYsia3EKfJibrjZoOeArPp0aboFEvhWXNUtS1icoUMX75mVMoCF0JpVlQWgSIj2nY6g7icw9dl1Q/640?wx_fmt=svg&from=appmsg)

所以这确实是直和。

* * *

## 2\. 选一个线性变换，让它“尊重这份分解”

定义矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNSicK0aBGWmXialOcmNpyCfGsia2iav7Zk74Av7boj20cb2yVhH2WMVKUuOjkhoibafibunkHEd6LRXnRUWNVTOY34D1f1PGGicBTzyyQ/640?wx_fmt=svg&from=appmsg)

它对应的线性变换是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHTbInqcdZfHic4JNTWg8Pwok5bhhnHYl97gJyMtqrzia8ovy746fRI6AG2mUHNcickY1Wv7LcoJEicjiaU4fJOr3fKE7EZgM1mApVNg/640?wx_fmt=svg&from=appmsg)

现在来看它对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdaO1EA4ICzngib9CB7lpnUdqqkGUZWckgTfoqJ35hR5d7OaAGia4wtVFWdTV1bxRpnIia8KVrLxxpH8GQcGyXZujTOuIZ4wXUf3GQ/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage1YdFAspjFKvvwsaYlBXGksAtnIZ4AFNpwu2I0ATJDmvuq5WABMG1L8LSjkSWWFoNpj3XwzeWukowibibU6yUY60nxyp5rN0lMiag/640?wx_fmt=svg&from=appmsg) 的作用。

* * *

### 对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R12gBIN6OKVy7bo5e5hr3s4Gf30U7DlZmYNkKl2NOIIkeL6V5ru9yEXEIw1RZK2RF2dQZxVn1ffibTmmyZkgbWKafB3qibo5O1SKQ/640?wx_fmt=svg&from=appmsg) 的作用

任取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpopvbrOIXRoyHBNA9JeibLUicrqVxgbD2AaffdeFRKhteGsdbrFXoThjpwLYbPPPG9XvsR06nZp6orDLQV9McIlSybXNBKSoNgUAg/640?wx_fmt=svg&from=appmsg) 中向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SpQySsPpTNgMQSyYjHGkNleLJ19QP1LJAG6tNOthoQC5XmMPwgo3s6FicQhfKQGY9OrDzZDMJGVnHDRsephIEceU56y7G6EBicpriaOqiaEbhYQ/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISUmcHvickvRHbhxmtP7oiaNsxhxnvic4bG53RUvvl2mXwbnsTvJbT1szCftXWwxjXlhkvyp12zG2eCCbe8h7XxVnQOECBCwyJtQPA/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGKEscvEb8p978d2ibZ28XdrbhicEmZuZOOYPb1UghBm7RmC8oD5TcoZgHErawdhUIicP6mZblq9zShOZxZibxC8jdwQ5kKAgLh2Tuw/640?wx_fmt=svg&from=appmsg)

* * *

### 对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIedQV139z0YcQVX7aUKk9GTFIhmOicicnt3odjobwCqNXTT1eyIXBbHtmCJt1OF4Rbnpiaanfmx4Ak7xZIeNAViaccXbUQ3GhHiazUw/640?wx_fmt=svg&from=appmsg) 的作用

任取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5Chk6Lz1yPKdd8hVGuDT1eVric2da3gMJFWY1O1MamJexmn6qrJjcAnSGYqy5h8AEyoibojKSn7IxqmP11xYPFwvvQm2kyAh0bysbA/640?wx_fmt=svg&from=appmsg) 中向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyIF4Sm0mhzmuN8bkpHN2nJHDdr1ydYfFibLbxXNlbpZYM1J1JXxwZBqu6miaeKMDj06DQDibSpYsycUTIXQqoiblOnmBtAYDwnCamw/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsARebP6kyuiaHSBmMJh6NZBTAvDWugbj9DYbFN0mnJ89DRsCiaS8f3QvHXAMvB2lZkGqzjS0b35AS36Ovb3O53htZ5Fjic2gDoNbRA/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsENGaTVTYic20PXXWZ7YSeA4Y5TeMruAJ7LCRIs4fUicFLVjaRUfn7t9z61wfsUkXenn7VRxP5VNFXdxOwf6wLBzRbUxarvcdeLJg/640?wx_fmt=svg&from=appmsg)

* * *

### 结论

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRYxnnePmCic8IaGkyGwqd9JB44OW7zPTKrwnJ2kUSCpXBA6KxBsib4VtnnS0QDjNJ2AP71IWwr9pZfMjjfibSyUWvcUPutN4lARibiaA/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtTbAOAhv0suY632s8ClIe5zDR8ckTSS5kOibsVeoSd6Fj8ebed9EPUiasIUaJPL9hunGHOaMyRfibNfnRibicPQFs2YlVFQiaAaI6o7Q/640?wx_fmt=svg&from=appmsg) 都是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90FqdepIBicezaOv6oplnicbRkbLfk90UPMOiceeLFEPvCt9bDnQVnWiazffE5kqk0xwf2ESvdaUbfMh099XialjKqWPicmw47kNEFjLw/640?wx_fmt=svg&from=appmsg) 的**不变子空间**。

这意味着：

> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGS4bicPAXic0GZlfeY21d0njmVH5UNvgmTklUMiaXmhsvfJNwPnYibnKDThjtScA90pz3wMAa7YKHPKMU7IYHAzxLZb7bCTm94vTZg/640?wx_fmt=svg&from=appmsg) 不会把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6u7n409AC4icVBHTxwKKYBg2icwNzFMyxB4ViaQeN3sYu8MMa8JDNKFeL85RodtvBH6ic6PgcMvRFWSeTBfiafJfB4FTgd3qWch6qKYAAl0ibqEeibg/640?wx_fmt=svg&from=appmsg) 平面的分量甩到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43Tnbg8BNMf7JyoPgWAzq1QFXCGAyHJgmCHynl3mT06oCsalsM57kXdeCVOQXFsMmrdraIekNuRc8RjXqoyppM6qeg28aCric8YUZsg/640?wx_fmt=svg&from=appmsg) 轴上，也不会把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0x0iaZdOgiaK8lf8ZH96qBdP9BjzIqwgsjeIs5UCS4DM9SpbVtfAr60gAicl5AUgr42ldvduUb6naiam7a4ueE4rW6Wzwj3gn5euhXg/640?wx_fmt=svg&from=appmsg) 轴分量甩到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJN8vTib3MKqXupTZvrvhITqzcerM9jZoUETDJfia9ObzPGGa8CAib1gQDd7Z6k4iaLK5ay5mDv8niaW8vkv4iaeKmngC3OwUMiaOaN08NA/640?wx_fmt=svg&from=appmsg) 平面里。

虽然在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYqiaW0spJsvXS4oUgB9KKAKBiaVWYxLia0yEib7fFMj7X1vaiaa942HV0FEd9VJVC4EITVHgn5hOtxz8ZevibQVntR7QTZKW5oRxaGhA/640?wx_fmt=svg&from=appmsg) 内部，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrA0RQFtJ0q7ueGl8WjFOT9o6ssu4LGn8fjM4nN3kgOAAB5yx1uFgct5JZwVYMZMA8GeicCRdT9iadtpGZoTAeBQIUfK0NDl90Mib3w/640?wx_fmt=svg&from=appmsg) 与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsENbWmYOPfrQad8RgiaKavqVia5k9mb9tzuuWMSdoD5sOPErW1kU5pbsa1gEYXLybzWKyueXrhiaSSTQkfiamAiaEsocXCU5p36TxAgg/640?wx_fmt=svg&from=appmsg) 仍然会混合，但那是  **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0ELe5KEzlS3rXjPxfeYgWJfEJdcTv0LgwegY039f1OwMXNbbs8ydpla0jD5BjHoDziaPUmMD83xeu959bMJ2O2p99JiceQrJetSA/640?wx_fmt=svg&from=appmsg) 内部自己的事**，不影响它与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbNuae62rVM9psQmk9SC8KZkOa5FfsiaSofnsf9JhGGMhW2TSgxAqAJ5taXTRkajREuk5gXHZFHiahGVZuQVcCiaNficBBkeYTmPo4A/640?wx_fmt=svg&from=appmsg) 的独立性。

* * *

## 3\. 在适配基下写成分块矩阵

因为这里我们选的本来就是标准基

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL4EfHuoHrPAvRxncxqEK7M6mF2Vb6tEkM0Ay2zlnn8pEtXv0qIEtORPjvOIlVvOdicraYhT9MGl5sOLF7VCmJz2ATvOqOZOEBkA/640?wx_fmt=svg&from=appmsg)

其中

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPSXu0icKz6iaBPVicqNDI1honW9tLKEQkeicEAB0f54fyIEU0WJAR57icv1vSz8Y1aXtF7Szfhg1ZnBicaJJD3cEdosPtUV2eSBTZuoA/640?wx_fmt=svg&from=appmsg)
    
     是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0fQmr2QFsNoibrWSaj9ULDvHJcdl3OAfyfFAh6xUJxlsMibXibTPqKKGugp1Dia3vWwlibHtQJJsoibllSr8uib7oVreiby3P0jfibibpMwhQ/640?wx_fmt=svg&from=appmsg) 的基
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRks9qUx08Pib606M5kjb9mDVIdxhtt9CSswwCGaPMIpcjrYb2u7Hv0Tscvha569ceJRwS4yG77v6xIXy7DRsl9fXtum3crgzx9Ug/640?wx_fmt=svg&from=appmsg)
    
     是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibEyle3Q1c5Xsc9cVicX4PUUVwfyibzP2nm8Z366K3UbrOcmamFzviblFZ2Yw0WIQeOP2ooRibkYb4cdZ95LSNGib0ZSmnLxvMO4DzHNA/640?wx_fmt=svg&from=appmsg) 的基
    

所以这就是一个**适配直和分解的基**。

于是矩阵天然按

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZcVzOQiaibrvmL1cg8fZfjZcaAicT1YYicCqlw4ZAib80Pg0jicPjhc4fHhguz1Skic1lQzB41OmmjaBngXkCicicJR84xQyzFU3UuGBocC2zyS0hmw/640?wx_fmt=svg&from=appmsg)

分成块：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsL6WNy9ytwXw5RHmX5ibRTgLLrASNnfuia64PfaTTjq7YfYCaAzr7KKpUsI75PNFcfxXciaiaG3akVfQ3TSRQoXuFJYicW53iaMY00o/640?wx_fmt=png&from=appmsg)

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LbMBdfNGaYsaB8z10uS6nBWlmPgj9SbuHnuwA0hdIMmF3skJcKynkb19s2EYRt9fIg0beoUp09xv8gYslk4Cs3gUeCMN8IfIzw/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4pwxIicSd2RRmxORMDMKib1KONWOC2Ypy6qBzYlUjjG3xopoM9TtaBDEb8ia6ahBQribI8458Kat4nbe4Dnq2gOZPNd65qUEMvYC8g/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAEXMiaibhQeHZ7MpvzHAGT1BW3AibTp1NLFnjQxBmJ0FALzp6BiboAXCwzcrBlUfWd6Pk9AWOoS5RX1T9PUVzhEKxCwrDnNDibxb0CQ/640?wx_fmt=svg&from=appmsg)

这就是**矩阵直和**。

* * *

## 4\. 这里的 A 和 D 分别表示什么

##   

### A：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfNFzFtZXsqUK4LJO6ibQkhCYrYLAxychl5hhwrwgmDcXFPuEPbCGna2sicDvCaRjvjc0pSYkLSq6bbphuHnuoT1LKhu6m6P8BrMA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJN5nK2mHds5O0j2yTVicR5N73urkBYMoib8TSQWCZRIHxmUpmDM9Z6WPDa5mjslc2a6gfNemhb5miahQdz4xuZCiaEDK4eFibhSN1dpw/640?wx_fmt=svg&from=appmsg) 上的限制

因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5Chnmu92RlQ3PPTgia29IYKZUyISy0493hqxzHbw4gnDuBu9dYUFQ4EaCCsqQ3E6ZzwMickRQY6FiaHtoSib5uyWz085ibKxDlbZpW6pA/640?wx_fmt=svg&from=appmsg) 是二维平面，基取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OF1t9KwAb4kxmCxicIbpaicZNkIdlxhwfPwhtInzGnOyvJBD1m0Dd7scicCYvddeibH1nftXNicBxyNeDaMLMhCsOWZd151mpRUPo0XQ/640?wx_fmt=svg&from=appmsg)，  
所以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyHJ8FvdE8MH8HLxj95SjKLJBGib9pibCgKc1vsVX980X3FGJD4RVtu4NIO4dxhdtLud5pdYlo87JDgbm65OlIJG3Vb7A79J8XASA/640?wx_fmt=svg&from=appmsg) 的矩阵就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtD3935J3CZYdRMISp0mFics3Hr19gGicVSjF8l8tibUSiaYy455YvL8ojFNBYJDdrMKr70HlicqMeqLf1TlBcib4z4Y9ialwSCNticVMnng/640?wx_fmt=svg&from=appmsg)

它表示在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNdMGtZ6dof8ss9tpwZq0gSljd2lAsBmMWic0NatrWcGvtBr5VjichkEHibyHG5K4scoicgfLD9GRG39qcBEE6WA4NDvMfAUMtD7etQ/640?wx_fmt=svg&from=appmsg) 平面里：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEljic4SXziciaI0ItOicAl2H05qhEmSMa23DZUt5QicH0VLaNgcFHD7vOEmYK8KmKNPQVWzNNicMkmLUBwPphY5wvMiby7XXBctpgSnog/640?wx_fmt=svg&from=appmsg)

这说明 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sAz5OWdbfRyf7A1jPc4VRSdzcKfwbFkhrYqGUqbF6YpI5tf4etYicWnQxFfoibOsl85muXGnjwIrkJsyvoTibiadNmu2IicRbia5cNicz0urPKqnicw/640?wx_fmt=svg&from=appmsg) 内部发生了一个二维线性变换。

* * *

### D：T 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtHB4Uo0yctI82adjxoPKScgSbPywgiaYl4FcRFibwk6YkEp6Nxujg5zSGkGQv7t0H8DxDhQONQ21ic1tVUekPAHtu0cvu8MO6DqhQ/640?wx_fmt=svg&from=appmsg) 上的限制

因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWoYuicQANWXdDPQlAO75HafWZL23QdrickiaicSnInjC9TAibmYKQ1kmsH0uy23JAQr9kVeMdu8IcMXFsBkffrMnbP2zswibykpu7dMg/640?wx_fmt=svg&from=appmsg) 是一维的，基取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCrazjB3GLzQqZDwLJj10dZs3weW8rT2mlRkwOmJLdDKd9Fg45Ers55RIiaJydbGCcsajhLxUsiazPGcibDlhD2SKSZ5D80ibSxsPUWkQ/640?wx_fmt=svg&from=appmsg)，  
所以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIn90pS9CghN7wj2xv3sibqWSNyLVztZgHcialWOxk73X4DBpPyDu9EiaSOpokVHX3vFAkhicI6Az438LlVhja9XUQricfaibGfy0MGpw/640?wx_fmt=svg&from=appmsg) 的矩阵就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMFHJSZN1TdfWSyvuKaIdMeyu0bk6RTCcgJwsibbI2e4vGchIvbLytoGnT97JfPiatibq4hnD0FNJdPg1zQvgLKib42sFdUe2kAvwUw/640?wx_fmt=svg&from=appmsg)

它表示在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0fcCvcfkHFsyTL6acxYicgDqNPVf7nsAy0SKoibqF7y1wQ9RYZWMWjX2IRRZiclnRCKEImvnhQG0nxVq9e0ys1Ve2ksYnNGibnISDGw/640?wx_fmt=svg&from=appmsg) 轴上：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyCLdNU7TDEf1o6BRQVzmTYicqCCBWRn3hztPAa889cKHQAyWaZH5pQGcSzlEicH2xDbQEPqLo0fNIiarhgSSoPeF4rODOYt9M9d7Q/640?wx_fmt=svg&from=appmsg)

也就是单纯放大 4 倍。

* * *

## 5\. 从“向量拆分”角度看最直观

任意向量都能写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppVvwIlUgA2TEy1Fo7t3eB3zx8IIwpXnCibfJ1xIoJ174hharnQfRlibTjb6aw0Hyz2WHm78GnC3p8S6u8EGaNT66qEuUUQ5suSBg/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn4oIdovibJD9qomibSVcncuGan3VhTKYic4xDCJnKW7kyHX7cxBNPgZBnuvJSvLTNF57L2oGys3FsZF40Kwaicibt7xMvX6EBiaD3NNg/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ACSVSTxskVYVDePrT7FvnTrDeZ7Eqmiaz7ekBhrL6hFxtX7ZEwj09icePicwFFbvrE5hAKKPmZFdyutiaBxDROJmGicYm2Y6nuiaiaia7b8uVysXXlQ/640?wx_fmt=svg&from=appmsg)

由于两个子空间都不变，有：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjTxkzyROEnqDjWbbkStWmwDJJtLuqOQFmrhhZYqUaWZWER4yrO59nEG6WY9n39xhfKZ0jkNHgywaUxNv6vBTweCYF6WtWTp7cQQ/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHNb8nGS8nHUoCQbFyHfn6wtf84vZyODY4qvZeHAicVSl5E2qHW7pLrpcthicWMOUcIxygYWdIl3AA5MyIboQ9j3z6RhZj4J99J8Q/640?wx_fmt=svg&from=appmsg)

这正是“分别作用，再拼起来”。

也就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dC0Nusl8vVZeqryf42ADq6Tbv7hk1FTpaVWrM4yqYSdyUbuxODqvEic4m3FStxMWQ5C9FBdiaOaeuC0icicQzLiavMBrxbQ17xU9urw/640?wx_fmt=svg&from=appmsg)

其中

* * *

## 6\. 为什么这就是“矩阵直和”而不是普通分块

因为这里**右上块**和**左下块**都是 0：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1dpknuhK395rGNfNpud7hVIux6fh2R0yujicwyiagvHawEx2U003WJ07liarbVIgc2sScvYZewLAiarRgMLhdFiaXTSliahKaD0YN9Mg/640?wx_fmt=svg&from=appmsg)

这表示：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtNRJLBq3DibMOIAFqHPvAibhe3G0LRpgWFrdUTgfpTWVtAxxROXIEbR48TaRJ0JCak7Wd4RvptKISa5wAj4ORwHAKzDbaHu6bIgA/640?wx_fmt=svg&from=appmsg)
    
     的输入不会跑到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibNYbwia3HCr44MaStDzOL6GoTTcwsmmssUpeyEpz6JSFeyDYVONLBFo1F1NE1tr4f3VHl2OA5K9bIZVR0eKhwDrGd9YEBpKHxBQ/640?wx_fmt=svg&from=appmsg)
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXrw5yeY9Xcicibc1ot0iba7WBKy1p5tqoGv1sbdklk9WiaxyIV4W7o2AmXno0J8yPibWWvR3avzPiaOAnqMhiaQoochT1jomUHHGia3jZw/640?wx_fmt=svg&from=appmsg)
    
     的输入不会跑到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9npTXkML2gzOR7gvwLdmStNO2pfKPric50bShl5704icc2a9f33ibk3GkZRVdyqNvKMaDUicPgdAcguZEhzviaFYxSBtK2TWCuvGYZg/640?wx_fmt=svg&from=appmsg)
    

也就是两个子空间之间**没有混合**。

所以这不是一般分块矩阵，而是**块对角矩阵**，即矩阵直和。

* * *

## 7\. 用基向量再验算一遍

看三个基向量：

### 对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbNgBer7zCAkkpE9OspMzRUGG8M77uSfhLPSkNNI0QOMZiaDy0yEvwRZ58W6n2eic3c8x1UYyUPVQIHx9dbXj0Zwjibbynj8JRewPw/640?wx_fmt=svg&from=appmsg)

### ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIonA3QlPGX6GNaZCZJ4Xm8XaDcxYZgTpq4bFLIsNL8gsw3LEicV5jjEPTxHKLMveqK2ZCibHDECD0aU8s4iaOq7Knl0UkU7qQlLLg/640?wx_fmt=svg&from=appmsg)

### 对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfJ3codgb1UsWsmicnFCuMLB4zbQ29qwibqLmCqicde5lOWicSR79PZKSOB2fadoKwK9XkN3zW3W8BmPPZn82D0OrzWYgtw9dr1bPGw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vf4O3sdIf7sCqloEYlMO1eibNx4qErcPt4aOSBZG1jL7BhJ6ajGEy0gTbr0micyys9oiaFze5X1TmiaS5aJgpZnkQVTVbSmQaZQa88ODp6v9dsg/640?wx_fmt=svg&from=appmsg)

### 对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPiaXWbJmndkxjdQWsdbic1JtOiasJWkHvE8tRu6tVYTbqUXeW1vkf0e3fS7sATavEHy2XqUYkiaxz9JkFuiaCBnpypoEBiaEkiboczNicw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5L5ZYnB4cM6gicDib0hI82KtkgyrptlCKObibzJAQj2WJme7lXytmGmd9VH1wNF5gv4T1agN4Eyb2wPUibPbLVzllW5ZUA0GkEWCyA/640?wx_fmt=svg&from=appmsg)

看得很清楚：

-   前两个基向量属于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SUCiamBy4micnEl90CJaghgDibZNuCDiba6TCiaibWicA4bIRMg3V4c64Sn2xgzPCYyoE1uqr0mUQdKUib7WNqREKy2HBjZa5XD7gibWjRxOXEpH8bgQ/640?wx_fmt=svg&from=appmsg)，变换后还在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSQZkdckrcJ6lLBwSfUkHYyYlGW6LC6fnVDexc9Vswx3aESmI0705f4tHnLQSdXM11dkA78ObicTiaMsiaVECiaXiattMOp0snGQXSCQ/640?wx_fmt=svg&from=appmsg)
    
-   第三个基向量属于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPUDDiaxQ3NJpBick6QePN2icR7mTqhOdThQyzBCoos93tcicticbPoz6Yu45gyiawldRBNoajicyccMT8oSNSZ6sAoR3zvmFaWN7LoKUg/640?wx_fmt=svg&from=appmsg)，变换后还在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaKNS5sIq9pEwmb54vKm3CRXvuXUtxYAcBt3YCickuKecQ2QhGtnyAwZqI3yaFicq9Hge0YHWFpQnRmjaFy5qHXjJRJbBzUUNW1cA/640?wx_fmt=svg&from=appmsg)
    

所以矩阵必然是块对角。

* * *

## 8\. 这个例子里，空间直和和矩阵直和分别是什么

### 向量空间直和

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68TIFib2hP6NRhfUOKuxCoIQDwKl5pwM47Vq1m90jvR2v0UYia24ecUQld51CfRnjPGUzpEeabtS2icBFITVBOgBbIy8hib3fk7KXEe4icf5PObfA/640?wx_fmt=svg&from=appmsg)

它讲的是：

-   三维空间可唯一拆成“平面部分 + 轴向部分”
    

* * *

### 矩阵直和

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4RvvS4ODjXkIicGhxiahXKXMJd6gZ8dBg7qAB23icb9XuRfl8RiaWLd3TdeKRI52ptZfKu6Efon5iarnFQqBliagfj1TpLTGhfYjwnVmgw/640?wx_fmt=svg&from=appmsg)

它讲的是：

-   这个线性变换在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1em8kKOoXiaPemtql7p5pRZiaMiarztwsGXRicLjwVZUicY1Ayib4Ran9YNstS2cIRDqVgiaaFiaxTEbROxGzEeLdIl1hBoEPr5ZjNaiaDg/640?wx_fmt=svg&from=appmsg) 上按 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ZBVeyG33EnlPXXgHSvxqJDL7UHFqNL7GvyGoibca1Eicicf43LhYQKN3mXVQ2Cpc7ytEwPrxfHr8geKxoYiavIBFRpyZhEqYdSjXN7ick0Cb3fZw/640?wx_fmt=svg&from=appmsg) 作用
    
-   在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgrt1WeNnrd4JvTGCibWwXGXiapmJAvdBSjcAF7QXgXx4IjHKkoQfPJgSBXYBVNgE8NJLiaV6bq9h0NDXo491hjoibdZf3Q3k7GeKPw/640?wx_fmt=svg&from=appmsg) 上按 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSRJA8Y9Jc8PPvWhRNzhte0fbib5b70LT6vXLClGI2DLtoklIIUo84icLvCVmn0lphHJLsQ9uCFkOolooYS5e3nNAUicvTXL0LtkFQ/640?wx_fmt=svg&from=appmsg) 作用
    
-   两边互不串扰
    

* * *

## 9\. 顺手算一下特征值，你会更有感觉

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGCGpofh9u99SopO6aj38tib3WVh6niblUwInL3YVkTCbJgD2dDJTC8P6Y9aQXIWRvjPVp618nnTjD55oSpDP2bMQsm9xxic9mA9kw/640?wx_fmt=svg&from=appmsg)

所以特征值就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUPs7u76qzjJLzCGo5EPzKT1pYgSC1bgjXVeIOGcib6lGITldOjuYJuPuYDA0eFMJrHhO9A8G4PicJm0OWyeSR74OgaWG07uXrczA/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rcwAktldywTvLHZWO89XEo9nOKEMNTvVE1uq2lb2LgcoOW2WmbVk0QDcSdYZ4gMQun0A2fSKReZzRaI3Myk9SbhlS9icW0OB13icQ/640?wx_fmt=svg&from=appmsg) 的特征值合起来。

先看

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZATNV97hLICmmqibOAichyqPrveUueILITrIJ7FfN738k5YVVoexOSAiat1Piade828yicOofhnib0xkj5fWJ0t5gmzBXaKRbM2tBFJQ/640?wx_fmt=svg&from=appmsg)

它是上三角矩阵，特征值就是对角线：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibPUEcZZicQk8kK0vcmLnw5V2m78KGjHRVMZHxU831nNciaXpt2NnLmZgrXRRxn5mASV6yWC5Crib537YVXfbFPp0651DxeUcDB7vg/640?wx_fmt=svg&from=appmsg)

再看

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1Get74fibH0ibAP5fv9Nk422qobVaWJJd8oS5pv5ibL5Sic3nFlQDOCLhKIfb2qdea8abUoRGChRiaIj6KE8NUIKS1BibvWCZOITODzA/640?wx_fmt=svg&from=appmsg)

特征值就是 4

所以 T 的特征值就是2,3,4

这就是块对角形式的好处：很多计算直接拆开做。

* * *

## 10\. 再给你一个“对照例子”：有空间直和，但不是矩阵直和

还是同样的空间分解：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZcVzOQiaibrhAuWGbrlBDAT2JGy1oBictZA4YVfpPs7ibT5Kn1RVCLqmiaibcAljc5zcPSqWoNO4g3qvqd9HEvjJAPa1zKDN3gbQOr7snkJNQFcg/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SUCiamBy4micoauibicq0nrIqIN2xPjPZjIsEZxROnWrZg1lD8epRDCEhGplEztmblQ0RajhotdOpib3dM5JibRLqcuicEdPhDxK18O34MzVHdOarA/640?wx_fmt=svg&from=appmsg)

现在换一个矩阵：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqVpia543oAQ7snEJictV76eYZ8guKaV3uz52bic7RB5ulyZvA157QHJUrRYtfpIEGcLNC0TEVm6YspLXFHtBGadNThFZGDKkh2GEg/640?wx_fmt=svg&from=appmsg)

这个矩阵不是块对角，因为右上角那一列块不是 0。

看 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rcibV0RaiakXooMGK7UiboibWvGdenLTpYhOcRqpicPG51y1H0s9uo5u1Wke2JjDPow8kT0aQZLCKc2oy7vSlAOCneGRoBTxeViakNWDw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7B8nVEBQSs9RibvPQaQI1t3IBrjcKMYkricbkLVrWfHly1G4pkfg3RFNiaASpG7ad2PiaqaicrHia2P44MoYIFKFIjUlk3TF5AyMlsVTCxDkzyl71w/640?wx_fmt=svg&from=appmsg)

它不再属于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5GhsssEMjRXKPQFks0bpnQx7icjIW3xMdHTNha0urfREQfcR4ic6oANH1aF2LBAXhSLMqOwtiafn7uYicmNxOFD48JkMeUM42hW80mZImBenxx2A/640?wx_fmt=svg&from=appmsg)，因为前两项不为 0。  
这说明 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smjNn4BdB7P2WDsD6jQwO0VArkVp8ZeRLSyQRAYD5cR0yV7cERGX2Nzjp2Nd3rHnRgSfQqrAncWghWyQDicYvIKH1ddyqNPzwrWg/640?wx_fmt=svg&from=appmsg) 的向量被送进了 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyVZHzvHGnicF4mvyibEuTYH2nspTqJkR0qCLOKP4kFOSdBnJhgp3YVFzBX0BZI7XohgqGwFjQ1E26sAgWGT5ExhZObaMsp3ybQJg/640?wx_fmt=svg&from=appmsg) 部分。

也就是说：

-   空间依然有直和分解
    
-   但变换不尊重它
    
-   所以矩阵只有一般分块形式，不是矩阵直和
    

这点非常关键。

* * *

## 11\. 你可以把这个例子记成一句话

这个例子中：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhR2icXLtLliaz886D9Yuice55lWSjicKmZGEKgOCibVR8RmIAXoMSAOvsXzyIojPiaFhJudzgkib886hKL0aJClDRTkwZHlicP5ZPbJiaKYg/640?wx_fmt=svg&from=appmsg)

而

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEOKAgQJsZuEUHv5keIoPHD3pdglbXL62U55eNw99TO7Z6xvKDerCe3bicQXiaVhp9RibUxfMahTJpUm2v2w7Wmr9P0poGfNlGNFPA/640?wx_fmt=svg&from=appmsg)

含义就是：

-   空间先拆成二维平面和一维直线
    
-   变换分别在这两块上独立工作
    
-   所以矩阵表现为块对角，即矩阵直和
    

* * *

## 12\. 最后做个极简总结

### 向量空间直和

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGiczmwx8oa9qkYm1QyLib8PDqcbL6KsY0jJnAEJpamQ7QCgLeXw6BP1nE6CvPnbyDickiaCdQibxCxH7Ik0kGCxyw1B22eIeWm6XOTHw/640?wx_fmt=svg&from=appmsg)

说的是：**向量怎么唯一拆开**。

### 矩阵直和

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Stq745daCfpiaTkico8FSlibvnUlIeDaAkbianwPcJBJZ3HibIfsoia2MfYnMic7vdAV9kRib9svBYt1ClLAA1eUicwMf2yib0c3tW8JfulyX1ev9tlZw/640?wx_fmt=svg&from=appmsg)

说的是：**线性变换怎么在两块上独立作用**。

### 二者联系

当 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzOUBgC6RvZU4SiaqlVwt5icvKj2loEGQzIC26jHXqwXpriauaERetSqXoEMECILUc16rpYGQ80QAOdsssL028NuGfHlFTA8aWzCibg/640?wx_fmt=svg&from=appmsg) 且 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic1yXpaT2jQfY1eOKmiaRP8nDNH5fEnED14sMOGagB7aETN8FFmd8UPc9YPRyjzP8xaWiaL8lRibOgaLf34Khiac1VohICC6cSyL4MPS486gswQQ/640?wx_fmt=svg&from=appmsg) 都是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH5icpO9GS0oLhg0vtcVnTKe8lrnHN0fib7406iaQuFrWVJia8s5GgfulqWd6ALicF3KksrC4ibp49soDLjic5x7LG8PID2cwp4CFm9keg/640?wx_fmt=svg&from=appmsg) 的不变子空间时，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsngnk2jGPbngCHuSLYYtcgQwY9JLwCSP6tfnomEt3w0v30JjfndlWBEhbPFHfnVONGtDahCe9BhQevnXUVXwt4pUH2OEiaYDkzUw/640?wx_fmt=svg&from=appmsg)

* * *

下一步我把这个例子画成一个“几何示意图”，直观看到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb77yd6IUAA9URynjWoicWTXpUeAz0eNTev97JsRm67XwnSTxMKAEPZ2IDwvm2NkYgibfXm6HX1tutl4bpb4p7icXBXaOlXLWII352YQ/640?wx_fmt=svg&from=appmsg) 平面和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smsl1ibwlTsQ8JXm5zAxUmdYATt9ndNSMH7469kibOUyLzGPmLo85rUXhckn2LY1xeb7T8Er8epEzxyMekbvbljzu83EwoB7ffoJg/640?wx_fmt=svg&from=appmsg) 轴各自独立变化，画成一个三维几何示意图：

-   浅蓝色平面：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEAp1rU6abD0QgUoO0lM1LXO4BTEF03uZxoPmvLNibdWosxD3WZcPOzwEU5lKTVUkbBLTPLHBJIHvCGicQtTLpL1ZBMSc8eF4ZryoQ/640?wx_fmt=svg&from=appmsg)
    
-   绿色竖线：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKaaQGWgePzaapibbLGERPW9JichzyC1LzAWicUiaChpeN4GtTuGjyPz9iaDNq9s7Bk0RwbibhpRsMvsLl7CwKxPdAApicarRlDcQl4ZDQ/640?wx_fmt=svg&from=appmsg)
    
-   蓝色箭头：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmWVk6kFleCVQXByYkqN0X95w62wnKIgsTlgMiaT8GFGe5zZs1X5qWComHdibfiady3Q5RPFhtLjVhnjfUdGJdd2VcvwQV7C7DkWcQ/640?wx_fmt=svg&from=appmsg) 中的向量及其变换结果
    
-   绿色箭头：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9tHy7LXhf4uiazXs06uPmzRglib5qnaCeNh1WC0Yce9zicQVibHsWtiaPao7FNuhl1HVNiaheexottXvqzrQTAzGJiaVhalgQCgF1j93g/640?wx_fmt=svg&from=appmsg) 中的向量及其变换结果
    
-   图中会直观看到： **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUETaZSaNP9lTQQcebicRib5OCGD0XtE7q1Bk13Oczpfj7fuUdureuPra1XYB0PkuWqEOty2UyhbTibyUlRrSF1TGIlzWMDcAicrhAA/640?wx_fmt=svg&from=appmsg) 里的向量变换后仍在平面内，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ1qaoCcibnNQbpgTPDbMwmLf8uk05SuMEBicubicwGKmsL1I4rHOKGZNy7jpCStxicpH2OmPiaiatgkVgVLCibGVMMLRXS8wVFnlGWfaA/640?wx_fmt=svg&from=appmsg) 里的向量变换后仍在 z 轴上**
    

###   

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvM8CDjGlXZvqph0CHfEX4ZzlftUOtl7UXS0MP3h3ELNbrmTJ83ZIgDCmK2YBISKI96ibkQgTGVOzUoiaCcdsGRibKrZv3XFfqtCk/640?wx_fmt=png&from=appmsg)

### 

**图4**

### 图4表达什么

你重点看这几件事：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAuTiaJxmLgzFbOwicTm2eeicY1OIHHMJUDib2yn3RpqEDkNEKaLD9icAsuvvaXLzPrl2SiaKncOy72QRUd13kblznK2Sz3vPk6u7gzzg/640?wx_fmt=svg&from=appmsg)

它们都在浅蓝色平面里；经过 T 后，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXujoC2hH06XhtF9YqYDPfojxbB8c51PTlSficXx1pUKmsZ2ClQ9qYNCLCkU3RQiaMRaGKia0pZr5VGiaLVwGf3czgOtJdNjDCicZfYA/640?wx_fmt=svg&from=appmsg)

仍然还在这个平面里。

这说明：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0u9XpSIlXZtLHVTwBvGtexMDAl7BcsicwAk2wjib7g7XWWawibcVzZnIBTucH0kQkslclapxVZlCSswdQd5H954jqMC1dfeDTSfsg/640?wx_fmt=svg&from=appmsg)

同时，绿色竖直箭头 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCiaeS9KZv9XyMCESvggicibGHJupyDNfsd9svpYD0jrJHcODPP38Mpfadx3430vA9U2nPN8lUw26plbw1qBKCYOjDiayHPWvqAsic0w/640?wx_fmt=svg&from=appmsg) 在 z 轴上，变换后 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLTn0OsfBrxrGVtib6mKibF2LvyHET5tlgXOX9uxanpdcmIhq9uCribYy3YcVBGtKV6fqRhuPicdfYjB1CZHZAleUkXA8PicjtJ0TgHA/640?wx_fmt=svg&from=appmsg) 还是在 z 轴上，只是长度变成 4 倍：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQ0LAt3DFS87Ke4jgQdStLVof2LjgWEXs4Vc6iajn49l8AQDhUc2bLmLh9ocJzIVFyE9thdXYh9ePDKgAESGwDUHnHscXcouBlKg/640?wx_fmt=svg&from=appmsg)

所以这个变换不会把两个子空间混在一起，于是矩阵就是块对角：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJLaLCBLQHBibB0hLXksiad8icPFy1yxxiaDZLAIPxiaGldjlXjD73ctwyYD12hoxomanTXVtZvWrs4XibLJ7PcdhTfKiawSxU5eoFSzIw/640?wx_fmt=svg&from=appmsg)

* * *

几何含义

更清楚地表达：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4vPmPVrh6egRuzVox9O0ymic7djldGV9AAPKhgXBK7oSKK8WiaVuOv1BWHItnibSxqGTvcOqdLUn3uiaS3pqYVsHOvJAaBIdh2Y0SA/640?wx_fmt=svg&from=appmsg)
    
     是一个二维平面
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7JB5M6rG8f4zPiaGcicsI88icTIeWxwwXKlxza5r8GbzkWFWAA1Pc425zlic9jwDytobNweJpe5NCKcvyBGF6ibcfxibicj9n3icn0PIag/640?wx_fmt=svg&from=appmsg)
    
     是 z 轴
    
-   蓝色向量都在平面里，经过 T 后变成红色向量，**仍然留在平面里**
    
-   绿色向量在 z 轴上，经过 T 后变成紫色向量，**仍然留在 z 轴上**
    

这正对应：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smiabUiaKb7Zwib9lLmEeLoNaQprR3ZBmMD8iaBnDeMBl62jgMbT6xicG86SafTrCMza6vfecRcS4dGoeshs1E3sghmibPWJ3PrD1lcTg/640?wx_fmt=svg&from=appmsg)

所以：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHycVlKGVU4LSicVZiaXE8JoXDSVXQODeewDR6IbK0yRcIr73h1EKBhPxPU9V3XML2eJ8sRDcdFzvroz3xoSB6n9JqiaX4MqSSuFHyg/640?wx_fmt=svg&from=appmsg)

于是矩阵呈现块对角形式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHWkHfuwHSdTFd4NrOevxh08VHst9yoRYXSdjzbLagQs6fIdbqqBVoddXLHSZzkn7A7OAic4vTcZqlTibl8c0nc8rFhSlxia4EuVDg/640?wx_fmt=svg&from=appmsg)