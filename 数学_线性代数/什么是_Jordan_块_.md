# 什么是 Jordan 块？


> 原文地址: [https://mp.weixin.qq.com/s/0Rf\_5xSHKWkEWcGK\_XHC8g](https://mp.weixin.qq.com/s/0Rf_5xSHKWkEWcGK_XHC8g)

Jordan 块（Jordan block）是线性代数中一个重要的概念，它是用来描述矩阵的一种“简化形式”的基本构建单元。简单来说，当我们处理一个矩阵时，如果它不能完全对角化（比如因为特征向量不够多），我们就会用 Jordan 形式来表示它，而 Jordan 形式就是由几个 Jordan 块拼起来的对角块矩阵。

想象一下，矩阵就像一个“变换机器”，它把向量变来变去。Jordan 块帮助我们理解这个机器在某些“方向”上的行为，尤其是当有重复特征值时。

#### Jordan 块的结构

一个 Jordan 块是一个方阵，通常记作 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0pvpfczuGQZ34B2Ufa9RgbQXZYBWcKBUMpLZPeXJ8Xn4M3ZvYNk0tk1uUc8WjH1Fl6CNv8NSC5Z7DeLbhJpJwgwPPI7uPHWvbg/640?wx_fmt=svg&from=appmsg)，其中：

-   λ 是特征值（对角线上的数字）。
    
-   k 是块的大小（矩阵的阶数）。

它的样子是：对角线上全是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNH3nl4KxibnGiaH5IsWibbYgfAHjv6libRlHnbOGtxgoptcrQZ8ibRLiaRXcTEAEjuQVnHN9aibfOHV6ibbYECZh9ttmoP5yKwPd2hahRHw/640?wx_fmt=svg&from=appmsg)，对角线正上方（超对角线）全是 1，其他地方全是 0。

比如，一个 3x3 的 Jordan 块 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUKUaoLlsV1aO8XpZiboeWtZN3HAf3FSMV1NeiaERtFBHEEyLNgpjmGh9mSOlaPqiccAq0bN92wGWEibVKegBP3IKWfgrJyKKssYS8Q/640?wx_fmt=svg&from=appmsg) 长这样：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fUibIjZURvicINl46QtcsXmI7374DXYLbA6K4AFmDfwTn1QxYBObGaibAhNV11MR8lsEehydLDDWeaybfn2kDIbkRoPWP4jw3le9SucfZJdKfw/640?wx_fmt=svg&from=appmsg)

这就像一个“链条”：每个元素“连接”到下一个。

为什么需要 Jordan 块？

在理想情况下，矩阵可以对角化成全是对角线的形式。但如果特征值的几何重数小于代数重数（简单说，就是特征向量不够用），就需要用 Jordan 块来“补齐”。每个 Jordan 块对应一个特征值的“链式”广义特征向量。

举个例子：假如一个矩阵有特征值 3，重数 2，但只有一个特征向量。那么它的 Jordan 形式就是一个 2x2 的 Jordan 块：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7w5fehvkhDib3ZA4H9OPLkj59tzcgVZ0HfqaJj4uhYSbW1EPVmVwwFOoL1n9Mbq8Px9iaapv9ibss0DGSuk0SY9xU4JnfI8Oh2HRic2cwMuyGPIw/640?wx_fmt=svg&from=appmsg)

如果重数是 4，但有两个独立的链，一个长 3，一个长 1，那么 Jordan 形式是两个块拼起来：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnfyTGVorWLaRCqLxNg738wPiaeCiaada4XUic5jiaIBZp9JDWr1Rfwnn6FHngTKyP4vJ22BHVYhcALkiboBre84c3Ofic2uL7cneiab80w/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvd3icqFnwabIyYSfwc3wrznyO4MCrmtXQgaMHARaM74iaMXATiaM3n6D0H0TFbldaeSk6dNksl8zroCnf9jaLxjudLnOfapIrAcg/640?wx_fmt=png&from=appmsg)

图里展示的是 **Jordan Normal Form（Jordan 标准形）**：一个大矩阵被拆成若干个“虚线框住的小方块”，每个小方块就是一个 **Jordan 块（Jordan block）**。这个名字来自 Camille Jordan。

* * *

## 1) Jordan 块到底长什么样？

对某个特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4IlbiavzZceCkwR79ib7aL12lmEzDHIk7EWy8I06assKDhRjNJ1GbLngshEzy5gWiccnK1P5OguNO7XqmPHkrBMbicgwS0SaiaTB9EKdzNw/640?wx_fmt=svg&from=appmsg)，一个大小为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdQNqYwpAqvStbIPe7wJ7rTccmlCY9lfibBibgnGSGzx4fSxJhziagiaLr1AwnBhwUNA4QWT4Xclua8rwzoE8Kib3Pxc3pGXK8j4rPNw/640?wx_fmt=svg&from=appmsg) 的 Jordan 块写作 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9SYfV1aE9eic4q1uu85Y4P9KV5P6m0A775lAf8h1SKy0j6pdaeiciaxsTFFcV6OicBUHxM63aD1hX3ByN7IuAmvrXZfM3eXrepl1Ow/640?wx_fmt=svg&from=appmsg)，形状固定：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgqTJaVhia2C7F31R42ic7bupaTcbVFSuwo4YhaxHAUibJaU7JZ8LobL5BWuy9YRr6iaUVP9DbTZicRUWQLgDDPRZnJcMUkNX45hUyQw/640?wx_fmt=svg&from=appmsg)

**记住三点：**

-   主对角线全是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtlQdbZlUBZ2Lncd1AE8MOJyOibn7KIqYqZSgttnOzQpibDYVkKuSUticrE9vDyibT4EgmA6bFsv1ibHWLyMmC6ric03V2oXvl8xGbIyQ/640?wx_fmt=svg&from=appmsg)
    
-   紧贴主对角线上方（超对角线）是 1
    
-   其余位置是 0
    

* * *

## 2) 回到图片：它的 Jordan 块是什么？

图里有两个虚线框：

### (a) 左上角绿色框：一个 2x2 的 Jordan 块（特征值 2）

它对应

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4Ilbiaody8aqxQ4NwMxAzd5rWVicmTZqFeuD6YTwzib6dDyV2lN2YiaPqIWxRsWtDCaA7ueeGgUnFHMfKJeq9XRWlo8wlAxvNnUnicvZ1EQ/640?wx_fmt=svg&from=appmsg)

### (b) 右下角蓝绿色框：一个 3x3 的 Jordan 块（特征值 3）

它对应

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4ogicFPXI3AsmgicyXysNNnt90icucdSLWl00oa1Etd91FjmaRXWHpgfnB1BOUcnLUuiblGVCRD4USmicjrH1IFlwA9tU0CP4ymFmzWw/640?wx_fmt=svg&from=appmsg)

所以整张图表达的是一个 **分块对角矩阵**（Jordan 标准形就是把这些块放在对角线上）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyI58wmGwLsorM0fA9sBhCh7aTKNwbx5853XW7IkxSaCMN98ckOQrxeKFuqv8jovD9PU3hQasX1eQdCBKQM2DxbqMzhkPC7UcjA/640?wx_fmt=svg&from=appmsg)

也就是说：这个矩阵的特征值有 **2（代数重数 2）** 和 **3（代数重数 3）**，并且分别以块的形式出现。

* * *

## 3) 为什么需要 Jordan 块？它在表达什么信息？

如果一个矩阵 A [可对角化](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)，那它在某个基底下就是纯对角阵：对角线上是特征值，其他全 0。

但很多矩阵 **不可对角化**：某个特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAiaPYoG4kSvQUicoq5788jVuGq1AyQaicWQsAaELPfHCPL6fk0VXlVImbHApokoWXYicX07k9pM8AViagr2IMWndIFDJHzD6ug78X5A/640?wx_fmt=svg&from=appmsg) 的“特征向量数量不够”（几何重数 < 代数重数）。这时你没法把它变成纯对角阵，只能变成“几乎是对角阵”的样子——**对角线上仍是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JL86kk3eBJRZkic186tsyp7SLOVGL3DGCbuUbcRyejIJhPViafEGVsCJV2GXNsODZ4WeJfEgfVk85NzsrlFj0Jiaf2qvrW6v79bFLA/640?wx_fmt=svg&from=appmsg)，但不得不在超对角线留下 1**。这些 1 就是“缺的那部分结构”。

更直观一点：Jordan 块等于

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn1VHBiavUgeIQbhlCXzJxuDhJKBbS55C2kCibCQPpn47vstfIarjjJn3xjMRXnTfwiaRJ5500XMs2Chib4Qh0N2vKiavfJjNQUrmKjQ/640?wx_fmt=svg&from=appmsg)

其中 N 只有超对角线是 1，其余 0，并且 N 是**幂零矩阵**（例如 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0faYVSY5LAAhcSpYEMxGuiaMfOeB1ZNwpyiagvkhia5MuMqjohtia4984VVVK9SMBpLddgVyx5pLNIujrd8ria0z7Oia2iafokJfOAUwTw/640?wx_fmt=svg&from=appmsg)）。

-   λI：表示“按 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SLteL05jHE8cm3YlS6bG8osEOCiaFdjKBphWKPEJm6TcbdCoN2Zs8wfXFvfzOY8wmicY0UuF0nQUCMa75hiagILu2m4zWKF4feQeBNsUsGVHKg/640?wx_fmt=svg&from=appmsg) 缩放/旋转（复数情形）”
    
-   N：表示“在缩放的同时，沿着链条方向被**推一把**”（有点像剪切/串联传递）

* * *

## 4) 用最小的例子感受 Jordan 块的“那一个 1”在干嘛

看图里那个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJN9qaa3mzXZ4SfktMNtYkvgRN0jeUDuzTGJ1DkTulHdnSET0s4mjiaVcluicgGB055hm7KLZIx8UQ5nyJ9QtE2RAx6QnL5Lj2RLSg/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyTyT9xsMIt1FJG4l43iaR7sZn8UwicIAdjgkhaR7CETibcAX3icSm7QM14FakVWpeGj1yeStFpwVn4jhFkNFQb6M0DiabhFOsRm8WvQ/640?wx_fmt=svg&from=appmsg)

让 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7g6O3ibDtVkISwkQqnCcPa1eNZGbib5ezGNxmOftH9icia1OB6F1EgwlXA906IWDqnQoHq76ibuwibL8H9ZwZBbEdsw2yrgic5MUFSnnKe1g98CzHBg/640?wx_fmt=svg&from=appmsg)。计算一下它对基向量的作用：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90Cx1U4icgDmH0r6RG0AVxcvTnN8X8kl8bFKuJjvRVsL0icmRV6lu52v3cfTSiahmFZk44sZawCy2EAW0V5p3cULZeCFcTTxormSicA/640?wx_fmt=svg&from=appmsg)
    
    （很“特征向量”：只做倍增）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoP8bcsQAd5R4oKBMaqeedyUo35MRamuRoWAdPdhDDfPG8zHphTZOjp7icp7jTjuYFavTlkf4TvQkIB68bFuxl9tu4APL1392lRQ/640?wx_fmt=svg&from=appmsg)

  

关键就在第二句： **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmRTAs46Whialq1agicmVvs6ocKliaWvjn6GofMTFzuu8UKe3DEYibOD3EySInvo1DLKII9gibnGlA2hLt6P7IhbNCrQppK5W3lIadZw/640?wx_fmt=svg&from=appmsg) 不仅被乘 2，还会额外“漏出”一份到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNSNxBdLBGyq0awK44k8Bd2dntYNOSNsUwkAicVC2wsibwCgQ5LlA6A1tEvtXldkbZJ0px5NOVX7pKr5mSGnaS5mMhHs4LhTbruzQ/640?wx_fmt=svg&from=appmsg) 方向**。  
这份“漏出/推一把”，正是超对角线那个 **1** 的含义——它记录了“不可对角化时，向量之间必须串起来”的结构（广义特征向量链）。

我们就把 **Jordan 块 = “广义特征向量链（chain）”** 这件事讲透，并直接对应到图里的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dEBLk6oh9hDPjGdfUNmOdibib80wm9f9OduicxdZk2cLpcbgXaFfas0NL5hjoKduicBSzdWB8xg0aerbLtGyiadHzoWWWu9yEqFOg1w/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9Zf4XMzjj2FfXgZCW6JVNzdg7x5mhlHJt3QVyzsppL9OUAdGEsqrykBicLX2K9VjicaTQ1qPy9iazdNcN0sfpEuKwvkkCn0mg3PFlw/640?wx_fmt=svg&from=appmsg)。

* * *

## 5) 先记住一句话：Jordan 块就是“链条的矩阵版”

对特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6JkfRwaRSzG4K0IayHHqcuX04ZOSbMnHo3DxTWVPHiaBFXoD6gJBuJr0QmOd9FDpEuASFXyk7aWNgdmXzNhSZZJNxsKdR8I4pDRg/640?wx_fmt=svg&from=appmsg)，大小为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWNXxHVqyHnnkgsphHbz5m3uSTfq0ASOuVz1wn91OXAClHOuiacicMMNXeg0QPq6JgaTqWrAZCHtMpBZ7mwRYKaohibsK6Zt4aqGZg/640?wx_fmt=svg&from=appmsg) 的 Jordan 块 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sIjkibRfAAstEUWQ6ypVSCo3ngBvt43OuUib9ZOTQGv0s9bdvee5n01D4zEyMEUzQjjtDQe0NwRIVVOayibyjntrEd1viczpbEFblVkAnTZ8Ebg/640?wx_fmt=svg&from=appmsg) 对应一条长度为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiabyDIMI5SfiaOSlaiag2Bm6mwPlL7gricTBDvVRqZr5O8nCMbjrRhViadUWsju2BUMHgnlntPP75EcYlPQ8USRco3VwUCIphD9261zA/640?wx_fmt=svg&from=appmsg) 的向量链：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtVFssKuITGjdEOmIrh4nWZMv3tFHwmqmgMiaTFmxia7MMNFLaG0KMBZySliaEiaDviaH7Mxo4FZJGJ1POTPiae34KcSG1v9VWVia1Mhhw/640?wx_fmt=svg&from=appmsg)

满足下面这个“递推关系”：

-   第一个是普通特征向量：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79uP4ncW83Fy0Xt1whe0VK4NQt0zLZDKcI4IlpvuW5XfTRQBQRPksJKaziboT2eLibFxBX2vh2heqXoE47xwFqabFW1faiauhbdetmSpnR2NVpw/640?wx_fmt=svg&from=appmsg)

-   后面都是广义特征向量（一个推一个）：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sIjkibRfAAsl7eM9BFia5emliaWrMJc2FlRmvStic29Qj892SuqWFnu8AN78ntRgV80XuotVmZhXks9iauiaNGuga4X4mbVm18YIETsBGTAialyqIA/640?wx_fmt=svg&from=appmsg)

把它写成“箭头图”最直观：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqPyOwZP0PzxZYvQGiabhp0u6BwriaDHyatAc80lara30ic5St16wibAZrfAqPcpqic4z4IbAObXGl90KwiaMoQ1mc5yBOx6rTyzG9UCDg/640?wx_fmt=svg&from=appmsg)

这条链的存在，就是“不可对角化时缺的那部分结构”。

* * *

## 6) 为什么 Jordan 块里会有超对角线的 1？

先看最典型的 3x3 块：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL12LYE02W40A12gm4cfU0afHIFIBfyY8gVXPBSDT9aJaH4rMCxMJcISjQDw5d7BibGib6hIuYm6S8wrlByJzYfgklzKEYNGBDbXQ/640?wx_fmt=svg&from=appmsg)

这个 N 只负责“把右边一格推到左边一格”（也就是链条传递），而 λI 负责“每个分量都乘 λ”。

我们把“**把右边一格推到左边一格**”这句话，彻底变成**可以算、可以画、可以想象的动作**。

下面我只讲那个最关键的“推”的矩阵 N（Jordan 块里超对角线的 1 对应的部分）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhR1PmMAWFNKb3ia7aJWTFdrBVXWjvMaibu3Wz5saLqdqZ5crnW0GywmyGzMibU5yYX9X0yqT2MLoich78TC0T2SkWyNjc9hUIOhyA5A/640?wx_fmt=svg&from=appmsg)

* * *

## (6.1) 用“坐标槽位”来理解：它就是把坐标往左挪一格

把一个向量写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4AGPCoprsGeP8WdFZoZAia68ESADkNrKlljs5m6jYeLvg5lmehicFLtTkIr3HIFXIg03buGtgwgEcZnRnaS4EHd21vsCcQGXtAoA/640?wx_fmt=svg&from=appmsg)

做矩阵乘法 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic09ptaUj901HpVw2XARzpV0jRiaVQmDJ4e8DBDPc37laiaO6OstPaxUQvMcsIicy6EGGibgvNuwvL05onMwviaJsB6nnbhViaL9nMZwg/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyPjlYRwbmicdVYvgAxSLaAU99dpjKoTAl77eOkfgqDNEUfKK7ibs7zUoL5KC2qvLvFnMOrhtotToaFGU2sZNO2UobpML7fgZ711g/640?wx_fmt=svg&from=appmsg)

**这就是“推一格”的最具象版本：**

-   原来在第二格的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YMQiaf1sgzLRGCQcrgBmkJxQ9WuxpLmbq01uzE9pv1nWSmAVsZbWjvsvqyG7ia7aDtoqvjIXbamWrSL4K04bm7IR8F5OzWybT6Vw/640?wx_fmt=svg&from=appmsg)，被推到第一格
    
-   原来在第三格的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprP84KvJTZFFwTcfUGVOcqr4gq9Zv4nG2d206cW8JIOicGXSIKh7xxuhkXibLk7NyydVyW2LibtuwmrxdbgebAHaIvhQZvy433Os3Q/640?wx_fmt=svg&from=appmsg)，被推到第二格
    
-   第三格变成 0（因为没有更右的东西可以推过来）
    

用一句更直白的话：

> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJNicjM3DC6GKQj2eLoENCzsRHicfjHrjiclQ7GEX0T2R3YkRuGian0OMJGaat2YbZSmlDydFZFsGbsTHAxCHLxlzRiaU3VlpW1h4uahg/640?wx_fmt=svg&from=appmsg) 把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEArmO3ia7lwuJm2kcfdicw8E19v6lHtCT0dmydxHcBtnlgicJ7VcDIw2by2csNyV2iaZANWA1lB0Z4VNoEGxYg78PGXoO2k7SrGQDBQ/640?wx_fmt=svg&from=appmsg) 变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPudjz3icPSTRicdracib3rlGPZMOrRzA332bLCZTGQtqxxSw3JNibEuqUFemEp7SmMg05mWA5gNX0gZGBB349y6stMYFvLCKVqbWIibg/640?wx_fmt=svg&from=appmsg)。

* * *

## (6.2) 直接上数字：一眼看出“推”

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprFSskztY1vCYN2CxcEpPQIkDUwRRVbicKAsjA1tjUxLr1qmLLeJdzMcXqD7dEP3G6dArFQWYdnCcmtssaxDbusJjc9zVa8lowDQ/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SO9KJxTN5atQRicMPeiak9UQ34VMnk2Oux4pbELLnIlP0wUjwAIJqa7yMzcaCwthPsr5Ixl4icUuMibicTrrmV6M12zRum6f8wibqXn8a4SWGrURA/640?wx_fmt=svg&from=appmsg)

你看：**20 从“第二格”跑到“第一格”，30 从“第三格”跑到“第二格”。**

这就叫“把右边一格推到左边一格”。

* * *

## (6.3) 用“标准基向量”看得更像“搬运”

标准基：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47AVydqsEYwP7U9sEjc3CRiaa0fmDclgHCguyOia0ShsB6j36q898S5lhKnBHJkCKicXoWeyLMCsQZs2KPEUwmjHfMaO8OTUJ5ashA/640?wx_fmt=svg&from=appmsg)

分别乘 N：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBhd0ugCvKicNmjvGIK5lN8xKhzhnmBdkibWx76qon8L7HBh7kIykQt1Rr8ia7JyDYXFib7IhjpQIGXWtrccFXqNPwtAx6SZQnf1W3g/640?wx_fmt=svg&from=appmsg)
    
    （第一格左边没地方可推）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1WHqjtTuPvjBa1TzpKRw4VGEkNYol1iaKQxFQOJkbZXs6eIthJXzsv9D6aylMAx2fnGRs7EPP8PgSJ6LXe5263mznvzTJLIQotA/640?wx_fmt=svg&from=appmsg)
    
    （第二格的“1”被推到第一格）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPufbFNzZjWC16QU8nE8te7nAA4RO96L3amv56QHxSz5icibIcCxQlzfYGdlN1SJgq8jaS6CHe6DWVicor6oQxntxhib2hlT8CyNBvOA/640?wx_fmt=svg&from=appmsg)
    
    （第三格的“1”被推到第二格）
    

所以它就是一个“搬运工”：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGEY1hHagnjh31I4NHZxNF4qKGvAZ8hV7tf7oC1S0mFLorqicvHhYsicaicQc6ibdJWySFVc7xHiaDucMKcoMhVYGs6TlQ8mWHm2V43g/640?wx_fmt=svg&from=appmsg)

这条“搬运链”就是 Jordan 链的矩阵影子。

* * *

## (6.4) 图里的 Jordan 块其实是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbkyff8uT0MNsxIsE3LwIOtdxEv3vKibowyj5ibIDSyHumribxicw9Yld2DzRfVqO9vlatUQt7jnnqdIqe5VxKmRO0USAThX2m1exxg/640?wx_fmt=svg&from=appmsg)：推 + 乘 λ

以图里的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZbTW8mQ9QkiapjPKOGy3tDyFR353H9D2OkIQeE3ZM21URkrcu8eia69icfrbuZjKC4OSxf0jgwiaUoQdJ30IVIPVHRawtcafGKqAHITUVpmrF0A/640?wx_fmt=svg&from=appmsg) 为例：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sAz5OWdbfR6wHwTa4yAcwGSxpyll18nEeL7lO9hdvQvq9LXQ53HE9kC5K7ibsdvOibXHa55dK2ITibHSkAf8iat1yLhndj4poW92LM6TVAnlkrA/640?wx_fmt=svg&from=appmsg)

对任意 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68TIFib2hP6NZJM4uZAksdMlzlj4ib84iaQpibicxfV9SYCS7rvL0q1bH9UrdUUudu1H3EaRasaGA8fyzVmeDXEfAEBksxLmJa0YVst1C53fe9Jkw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rc1q2vbCVwq4Wlt257Xjp6qwDVH63MBKBqjqygSMaCIkxhpUekU6mFtib2rgibcIfN13k7eVgqz9g8kX0LEjaP1Lk80nrWdovg5Zw/640?wx_fmt=svg&from=appmsg)

**非常具象：**

-   每一格先“自己乘 3”
    
-   然后再“从右边借一点过来”：  
    第一格额外加上第二格的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIpPfSYaHTPgZtDcgD6YI4fsQWPcuZToytNQ4zXCMMqHYDiapAejcODy3fmeYLUwQT492bB1s7QurH5ll7RlP1a2rqexwprk1X0g/640?wx_fmt=svg&from=appmsg)，第二格额外加上第三格的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAvLIYFhJeHzjicjicA6BPSBMLgEw0BgGVxN8u2FRwwqn1Ag7z8YHfa4HibtQnJesmg8icz5dIpPh7KSDC5Ajicnb4E2hff9Tq95DI4Q/640?wx_fmt=svg&from=appmsg)
    

再用数字走一遍：

取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuaiaNVO6ViaqlcmxX4TyU3fAaGbW17NO5N49eRllOjhblibFtUaQXNbyRpic5hiasiae8htFGjVHtniawWTDM0wZ5Fp1h1oensrTeyQjg/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFW2SQaChpb8v5gWXliaZs9M5ed4yrv8p3ia74XQEGo6XAgT4WS62ERyFY6NjlqOaWW55hR3TmbQFfich7SEY4OAyovfHunLshT5gg/640?wx_fmt=svg&from=appmsg)

你可以把它想成：

-   先变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHybkdKvFzCCEAdmJlW5RCfkOsIHD0gLDPAn4dXJFDPia7S7r8rJW0iaeeP3uVrhM65O3Ifuf89b2SlyW8lnzqEX0h41ocvw9jlPDA/640?wx_fmt=svg&from=appmsg)
    
-   再把右边推过来的部分 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmWP3smg2C9UMsREmRdyUECAEA5wBkfVmvTzTU3nb43p97oKBSlLeOoXJ3TpFctFjkuibE3yib7GCQLhOAqRcBbJZjfAgldsHEDOQ/640?wx_fmt=svg&from=appmsg) 加上
    
-   得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmbB0a53WkqPPkLIH6JNou8A6uQtjZ9n8sdZnJjR0xOR34rjaN4qhw0lyZnjPtSmRJN96tEiafgw5kv5E3sBkaFQtyTpeGgGvbfA/640?wx_fmt=svg&from=appmsg)
    

* * *

## (6.5) 一个更形象的类比：传送带/接力棒

把三格 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4hCAAOiarqIzwBJgVoRJv6G6co4OnyCU9bykQmQ1icRhia3Bgy74rQTxfbdyDQiaUiaA7UqWL4pDbQOajauWLp6YdxRDgiaf3n5I6NVCqAdGT2rdlA/640?wx_fmt=svg&from=appmsg) 当成三个人手里的“数值接力棒”：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEt0d0wZfPe5X0zaDia3WL2zstDVCkkf4QezjSc60VoAh27FltWLIfUnqibSRkdy37vHRibTtdnQgHSXOsAX2Yn6WAPQOjg1YoeB4g/640?wx_fmt=svg&from=appmsg)
    
     的动作：右边的人把棒子递给左边的人  
    （第二给第一、第三给第二）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CodyKEmZEuHSicwDos3OIibUsQpV0jHEb4wUllVFDML0NxomSN0ib3und09X0HP1IM9xNyzWYeySq8talFl5yZiciaQxiaBbN74mP67yg/640?wx_fmt=svg&from=appmsg)
    
     的动作：每个人先把自己手里的棒子复制 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVVicxDwds7Zs9pf4lXQ8oYLdYbrzteResHbH5sv0XrR7WkKGzFVZb1sBKUR5dB168v2I87B58dialYUMGr8lE4LhMKfapMvIGmDPg/640?wx_fmt=svg&from=appmsg) 倍，然后还会收到右边递来的一份
    

这就解释了为什么 Jordan 形式会带来“链式影响”：右端的信息会一步步往左传。

如前所述，取标准基向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9qgOoB0dCED9r49bK5zWLZhKZQWV5KecKrbuEp06L8r7HRoMtUlU2hnYhc8WwibBH0leibWsUf0d4J3Nnft2gdWqmZFuyYFzPXEA/640?wx_fmt=svg&from=appmsg)，你会看到“推”的效果非常明确：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7w5fehvkhDib7WV7d5RMSWI8onWufjuXgibiblp8iamcSuHeu9cjia7o7IiavRstYn1tGUFz0wbX9BaNImejgVkDyl35IgL8vHfWWcye7fzDiaDIBOQ/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaJuLGwnUWxWJ1rOcicqd0Zt6K7JsCAtQu2QBZ1cKknzPiaibXxAbxpGhN4ZicDL8keicwq25Lr4fibG2zeWIlVmiaoticaXcyCIrr2ibezA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5FXwpk7oiajqOcRpM8tHWYK9gzvibzludEQUyEY2hUuwtYzZd6E6yQzls6DYuAwxvVe23YtwlPbWY0gWDXulzCnJHRUeZ2ahn5CtnxoGsEzEWQ/640?wx_fmt=svg&from=appmsg)

  

所以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7w5fehvkhDib6MCI7QtFkNSFqjsYHWrTqHkDqFvKMrdLbVKvr59E3VuARciaia8hrMxPtKEgYWWESEoOa7aqRHTvqBzmESWUSLBAv7YwM0P7JYg/640?wx_fmt=svg&from=appmsg) 就是“链条传递器”。而 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtfuibicNqY7MktUALkGOBcHoyqsOicicBD1jnoWzrvToOQTaKdzxmaIr4bArmEUh9u1ibJoj7wic6VF8buNqGZyAJPcGy5ElCmGJxfag/640?wx_fmt=svg&from=appmsg) 就是“先乘 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7kUibVsvrTSnnMcKGFPUdLdl5jD0tDQRgFwuFGCqyvdyGDtDRoPKV5Ficzhu0CWicYETPSNd0hpB34otU9HAuRFCVVIntKr9kEWhw/640?wx_fmt=svg&from=appmsg)，再额外传递一点点到前一节”。

* * *

## 7) 直接对应图里的两块：分别是什么链？

### (a) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHyZGd4PcOib1jGfkGj6bO9DAwnewsu2iaUUTEmX9icMNLkJYmUqmjPnIsic9f2AdoWEtTd7jEGAqW3pxic2O75OLxVvib9HU1eLlYiaia9g/640?wx_fmt=svg&from=appmsg)：长度 2 的链（特征值 2）

  

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKV7GrjMo7ibqE1oqicEwiax6LmI9lichiaPicgibYxQ9vGWAAyseSQle6eodeRkHb5l2LoOh30mXHABibkZ02W2SQVgmP5AaElEtWJqkPA/640?wx_fmt=svg&from=appmsg)

对应链：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau3af9tlurM6ibib7ZL0oXKVtLwGfBvzqelUpiacx7XZKeIkkMJfCMaQcSIS8QrsS4ibtYFre9GK5OMRVfn5Y5bqkxKlL0j5ltL5zvA/640?wx_fmt=svg&from=appmsg) 满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUBJsOqhWK6hibNgiasXOBdjBtrlgzzyNibam9oMicggJGicyrvRKTQtfJ1PB9fjbvhCsqQupOibP3BF5VhbqOBCbLS47fpyLOvRMcVTw/640?wx_fmt=svg&from=appmsg)

箭头图：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIZxaB3xoyVEiaVUrUAk8iaW74lNvLdnEWhQnBhA1iathgia1URI8GQKBRpPvicnraqFjaDSTE9qSzw800KW6Jm3n2SIicicCkPdj0p4sg/640?wx_fmt=svg&from=appmsg)

直观含义：**只有 1 个真正的特征向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAHoKiay7cc29E3iaf7H862FicQadpMjcX0e788LYMuB0VYgZASzkjUdSRs3bJwcJqSRwkCQoicia0oHZOVibn0Mrrzuy4NEdYLiablkUQ/640?wx_fmt=svg&from=appmsg)，但代数重数是 2，于是必须再补一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibEvnx4ian7ZHED5C128u6PEtT7cAkcEwwAZheicHd49hurdPibwYkvMH003H3kic6IuzDQsNibo6Beur5qT9gDUpRx7gAoch6IFlz9Q/640?wx_fmt=svg&from=appmsg) 来“串链”。**

* * *

### (b) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7OT4cGM5icTPntEn10xAfMRXiaDjkybcE7LnkKkOiac2pBJ3wiagrW3DeLSyQDv0YSzIr3UJ3s6RIBw5TPXgh0DAjy2u01Q7RF2vug/640?wx_fmt=svg&from=appmsg)：长度 3 的链（特征值 3）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4tdRia3dviaeWsEz3picEQQsdFgpxS8IwaekYwe4MbEgHfKCUmQsfqq4fCrRlulOb3iarkRibbuQUGk4BhwGkZJNafprfjrYib9ibmPSg/640?wx_fmt=svg&from=appmsg)

对应链：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47JAZhyibTgmgmicBr2icicN9DO3okZh68DDbdLeJFu8rNbScFJ8KvzpLIqP4jgF0gPIgufTAwk4vjekpQblwYEA2bDFAkGQ6QRibKibQ/640?wx_fmt=svg&from=appmsg) 满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dO42NtHodVIicY6vLIBd34Ivh46Vdh7qNqiaELUzxs2tWiancDJjgbjgaO4D8XErEW8ib0DgpIraSHLu4oV2tw6MWyjt70rFytVUdg/640?wx_fmt=svg&from=appmsg)

箭头图：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2m0DPxRNsBDZCUdaeGOEeyJwDlchwz8dcBNljo1r8kQr8PU3nh4v0hNo1h36zZ4oHZWjjD0T4pmbmlnuNkoRdhO4OuTZDXDkRQ/640?wx_fmt=svg&from=appmsg)

直观含义：**特征值 3 的代数重数是 3，但只凑不齐 3 个线性无关的特征向量，于是需要一条（或多条）链补齐维度。**

> 顺便：如果是“凑不齐”的另一种情况，也可能出现两个块，比如 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7g6O3ibDtVkIVXPWJtN514yQMcGicXVhtz5oeqPYgjDBLNXkOM6Qzuyq1esnoBJu2vt8LEN3wYyymiaTM5nsam6UkuIf66ExXcfQicDFLyz2yGug/640?wx_fmt=svg&from=appmsg)，那就表示有两条链：一条长度 2，一条长度 1（这时特征向量就有 2 个）。

* * *

## 8) Jordan 块和“能否对角化”一句话判定

-   **[可对角化](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)**
    
     ⇔ 每个特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKafsfHg99lm1yx1CTuCB2jseibXWt8CIqfsncwYfSE6ZAseocMwKy4nItsQkia0UQC75DZeekDk1QQOgWQ1LzS0rv5NaRlStbUNYg/640?wx_fmt=svg&from=appmsg) 的 Jordan 块全是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EsjF1J9mGjcJx594yicped7bXwTrQXgANpN7hhENj4g7V3sxK8PB0uRhm2gQLDH4IPLVnwrDmDTQOFMmebtiaHCQXrspMAxrbtI2cbzoRaibfg/640?wx_fmt=svg&from=appmsg)（没有任何超对角线的 1）
    
-   **不可对角化**
    
     ⇔ 至少有一个 Jordan 块大小 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAfltgvicOtpmRTCnCA5woknGib7xzj9m6icE9jjPuARsPUGu6Cia1DAU44t072ZibSqsr9Qic7eC7ZkuNXh95ibVUAZiaYM42f2ovr6xA23g/640?wx_fmt=svg&from=appmsg)（出现了那条超对角线的 1）
    

  

图里明显有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEPT34wRuxN5DLqf2jQbFkWbbLnux0SP7ShTenqp1bTLo1ia7JcEibe37OTg5MwRhLZOFuTib7OXzG4Ej13GyHiaSZzMrvFBg4yVJww/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp16LibziaEYicDW0XUB3AFo78XxqnCc5RFfvHia6ollk5GIoOo6fiaicC54uOhULSFJncSnjiavqlCXO5Ky7a1oLUH4LJQNFhWCIG7pH6w/640?wx_fmt=svg&from=appmsg) 块，所以对应的原矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7zmBEpRjw3xlRUkqO18H4veS0urkCqID4DibIXEia2JdEZ5NaKq21ibTKYiaXTJl5wFmdzEJCfcL2b2xrUt48OwHaFUbsZyVia1pBeL3m5oy0COcw/640?wx_fmt=svg&from=appmsg)（满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OFzG4XZtZDBogZrjwEyjyZ3YFZWLiajLRZqOaLHLIicPxxxVsxLG8vB1dOr7icHaUfGYtVHd0gZoicJWxlKxiaTySf4g7dWicUSloM2BQ/640?wx_fmt=svg&from=appmsg)）一定 **不可对角化**。

* * *

## 9) Jordan 块最实用的计算意义：算幂、算指数特别爽

因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvfr5Wkicib2Wp5EMibuibol8FZBDA729gIxFgFbpDUrD7b6a6aBOUGuIP700rNEygMSqlGibIa2DiaATbISdaibPS24H03pjpN5UgIuBw/640?wx_fmt=svg&from=appmsg)，且 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLQib6rm3TtRQc9Vbbl5vZHoIkAdib6xrZwgQXsMmzYuCd7Kj2tSbjDibGDImyck6PtATO6fHXlW2qAXV7gspe0dGEVbErggyBSdsQ/640?wx_fmt=svg&from=appmsg)，所以：

### (a) 幂次

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpogntTEbSLXRdZJG3ETAOUr0px5ToyQTn33Mu2v32TibPyVz1PwS1hyxiaDHmSY1d63xkJI1uUGKAayGVQspuicm2TJIL1iccdYt9jw/640?wx_fmt=svg&from=appmsg)

只会到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNH7UhmTzb3eMOKtXdj8hoB5hF1tYSVMojjd7ibHuYibfgXniaJo2PV4zU4wxbDmfkTOOug60xon12WIXickzwXa3pC6dTJic1nJeTia5Q/640?wx_fmt=svg&from=appmsg) 为止（更高次全为 0），所以公式是“有限项”。

举个超直观的：对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4oj1xTBJtkNX9zbZialaF12nHuFvhkZdmHOvf5E8jWjxnf9fKqNlC3bq6vxqZk268snrqGn9CSO4rFwy4RdWibqTO0wFEtiaXLkoKQ/640?wx_fmt=svg&from=appmsg)，因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib48ibmv1UxVvlkNicBHR6G8JEKy123ZqXlNAT3xrfNUfWC1aBRWgyGhdWWEKbG0P2r8hLMXJXFphf7QkDiaVMHyV68hHb9oJDj7icuw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV8icd9xzRK8buE99ZnHznK8ghFTsFKLJ5DV5BMVicoN9rlQdRwiarXmxGpvp7aYicric7hSRQUQaB0tat3nUC0eajIKicPT8Su7j7JvQ/640?wx_fmt=svg&from=appmsg)

那条“1”带来的影响，会线性地乘上 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WneL659IqqmBEwF7ORNkliciayG8Y6MFfnRHI7GcWFUyNpYEIBcRJ39Mk74ibAMcn4AjazYUSQmKWQcXQKYgs8QhqtuBT9Z2ibbgzLw/640?wx_fmt=svg&from=appmsg)。

### (b) 指数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1RdqHj8MXiaaDUXKMDfzbxg0BQ91yeMwsKG4y655doASp7yVS9v6Qh1PsS2Vs04nNpCaR7eib624rREAyKk2MH5KibWclwOaEPFvA/640?wx_fmt=svg&from=appmsg)（比如解微分方程）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYPmgpibv7unAaicEc16G0HJaxOGWSUvt43TLalVBTyPv9YtkEY4fRjhibIibAqZbAGjpibted4H0d2slF0XMGCwAP0RiccHm2nNxEafw/640?wx_fmt=svg&from=appmsg)

而

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S5NeKgL0N4yCRZaJbFNVtKJTlexP0pt91djhiaE7icbaHrzVrSPSPwUQ1BxFJ9necJtS8jSRdaZaxF3pZAPNyIXTs5PFiaKqhdaLA/640?wx_fmt=svg&from=appmsg)

仍然是有限项。

这就是 Jordan 形式在微分方程、线性动力系统里特别关键的原因：**除了指数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyYSqV4qewiaYIy3icBmB0ycaypeCgbrfrZkJJDVPqMcKI6kgdh238kGjUbKSiaHFszbF1R6ZKsPSn0occkqXuObhLEXGV4e8iajDjA/640?wx_fmt=svg&from=appmsg)，还会出现多项式因子 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISd8DoIoZsE1C3oZ7CBvXDrtGZo8KibxQwKcaxdsWhrbA8DNiccibIljm6RE1BQUmvb5VjDc8L0Fj3ANWoNEm4I2mhHfHtWkGTaibPg/640?wx_fmt=svg&from=appmsg)** （正是“链条效应”）。

我们做一个**完整的 3×3 Jordan 块算例**：从给出矩阵 A，一路算到它的 Jordan 标准形 J，并把“链条”（广义特征向量）构造出来。

* * *

## 例子：给一个不明显但很“干净”的不可对角化矩阵

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFUYpvc6ldHjUQD3juemcBPYZjDmREPykmbBAlPq8pqQicOfLTbl4LMLcoUHVL2FGJnGsgIDPkX6LBolUKtbj0yOBicoicicLzoxgCw/640?wx_fmt=svg&from=appmsg)

目标：找到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic3mqpYkJOlBdofmVMxfLeog4ibYgY4931JEqQjuyIr6YIFbwktmNZCUJSOJ8UTwwtWOhMUU2hSLA6rjpSzku8dn5P5zNOiacPV5Q/640?wx_fmt=svg&from=appmsg)，使得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoSiavRYdr8fTCOfJGvEFq73pfb6v3fbvUonIwdCWnZ9yQL58HVAE837ATUMibTW2dibhIpmW0a4sBUxicuwmlh1xd41SD1ZmfHnqDQ/640?wx_fmt=svg&from=appmsg)

其中 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpGcibXicnXHfv6lOWTD2zpfjDQicrmG7as9wqWy4rpAqScZib8eAIFibZOWr7up863hWyyBn2lKk22dpbsW5QIA4ktVUVkrlPxHmyBA/640?wx_fmt=svg&from=appmsg) 会是一个 **单个 3×3 的 Jordan 块**。

* * *

## 10）先求特征多项式（确定特征值与代数重数）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ACSVSTxskVbnDPwuq3G4dkiaNibFL3TQmo20mD7EkScvvTibLLTibCB5lxvrsUzp798oTNG3ne6FFZmqiaicNW3vQN0QiagogOsOlHmmqs26DzRncA/640?wx_fmt=svg&from=appmsg)

按第一行展开行列式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7McY1t09qvm2ObuZFpsY8ibq9DibYYVoA8t0Aek4gHmagIciaZJAOVCovQAAuFvfrYZwoib6rklzeNXP6cB24HN6yxrozsKELrWrbA/640?wx_fmt=svg&from=appmsg)

计算两个 2×2 行列式：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7l1DtiapIyeBJ6nJqpia3XmgoXOTZPVlBg4dhKLibibd7JoHS87SSgyqbRpEuzS4c9HTGP22IlQMLjVHQeyQCL88x5wOrBrHqtQob1PjfEUNgS9A/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAiaH0uUJ6ibI8rddaWryg9L7YTNicL06xVoqUdXsl4r0CCYAK8YhqGxXBIxgibphSlIzglyjNVyXj34aSBf41MfPKFia6rJ47993ofQ/640?wx_fmt=svg&from=appmsg)

代回去：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCtwrI2GWc4F9lmYTqiaaItS4iby0o0y61g8EibXdAx8YicErEGYwngUt95iaBo19C4X4anZ7pJfAsaoYECORd3ZxGFK0dvLHibunI3MQ/640?wx_fmt=svg&from=appmsg)

把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdU7l6Yt5pv8XJThUXXLucKFVyVFJUcfic1feucyOKDYmWSqcn6iaUic0JwRTEqBvf4riaWgc8rjWtxLs8mTtBCB6F2oBNibOcCQ5mbQ/640?wx_fmt=svg&from=appmsg)，再加 1 得 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSblbc25lgMrzNpO6a281JcQk9dhuNnCwRNgJY2IsnvnRcB6MbCSpRJTtAcorQeLroyhtMQpYicGY4Fh2tnH7dzic4qxcXh1SmhAyw/640?wx_fmt=svg&from=appmsg)，于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHySIPFfkfEq8OgiclVaT1nlcckKygm5vDZDHWbVbvl6biaD03uQ0bsQR9BXGjN2B0APEzc83dpg680HGzgGmokqRBJ5NcHbJ94FEA/640?wx_fmt=svg&from=appmsg)

展开：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIvYwLh8GYNfRavqIicKXLibpQtgZYshbtplsjsJdysD5QOXKcl5jOBaBSXkP3Nfdjfo0YOn0WpibCXMxpO4OUMhempl1h4GicWP1PA/640?wx_fmt=svg&from=appmsg)

再加 1：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZPibG1fUbEWKN0aOIaXXxdDS1rtEnPz19k37Kmtexh7iaGb14dJoMdPBqZhyT60b0GJz7cAC3iceib4GVdtPovFVEQibSiaClSlmtmwg/640?wx_fmt=svg&from=appmsg)

所以唯一特征值是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmfC139Q1KOgwU09fs50VFryKWIfSNrMsIiaIexgJGAbX8vViaibxibiccibd6D4bHVpm5CU7XLLMsjmCQ38H6rB88ia2zb8osibzhMucpQ/640?wx_fmt=svg&from=appmsg)

* * *

## 11）求特征向量（看几何重数够不够）

算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d6ibj1F70WDuRwAFodHCTT0n3LymKk9K8jn90ic6gGJhs92KbcVicyftSDL6zOSolICX3YDJ6s0SM5Kicqe8micHiaibhGNB30PuNXxPOw/640?wx_fmt=svg&from=appmsg)

解 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tg6EdJofI6TSQ1cY5rqtqiab39ErKM5lf7icT9tjHCIdsGjIb5YZIaw0piaus0rQ3Cx2eFtda1InosWaeM2JSeTmRaCtad1SpL4dC5VvKImx2w/640?wx_fmt=svg&from=appmsg)。设 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn20lUKcMPchPWN0JjMapPIYyBWksV79qs8aqd16du54SQcqfDIK4ssCHG7PqoiclqDXmN1Jb4ZOSauaT7IoEnBanMmXABjRjdUQ/640?wx_fmt=svg&from=appmsg)，方程组是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4goTIaTEEsiasVeSZYd6htRjn6ODJsmpmAPVfQV8OIRM5V6guAsiaSNibhDCUYZgtAhC1kQE84dUvnTBiaQE4oVmlEXN1QWGM1aCLQ/640?wx_fmt=svg&from=appmsg)

由第二式 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0jKCoiaFavdW10DBmDoibgaqyRzILwCWgtZt2ibaRxaKpLFl0burkJNpNt2mhd8LJbNibwMcSNdlDN9EibZPWNsvfRp53ZEJadFoSibA/640?wx_fmt=svg&from=appmsg)，第一式得 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41TibzZr4Bd6sJialcUlJGawofgN1yprxWVaqficm2FibDIXATv1C1GmKlk09CIs31L3bQT5YV7aetvXQG49N3ulBQPxyu78SWibYdic5cg/640?wx_fmt=svg&from=appmsg)，第三式自动满足。

所以特征向量空间是一维：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5AsCD3nxExgjkib19ZrZ5R6iawrSce5Ctfb66l2FEwaXJpX1R46dpD8MavFuCHhHqAciaFQ0XiblXey2ADsvssUCFrRcRicesP90IwA/640?wx_fmt=svg&from=appmsg)

**几何重数 = 1 < 代数重数 = 3**，因此 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hrzJEVrQHiaJYdPQgEQPb0C5eBzCRgDepicgkWrufHI7PyQtPpYQkxicwgssiaFPrbLricx0NF1lT4QELUX8xiaBJ6C1EhUibycygf98gQ/640?wx_fmt=svg&from=appmsg)**不可对角化**，必须出现 Jordan 块大小 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibMJCKQdbzyhblv1emc1Rw8zibRejiaCJJ4lG2QmicZdvZ7T82I04iaTVERrqDtRGBF6zeXUPAribJwTIBHYlsiabR0w8STdQasmqZ7Xw/640?wx_fmt=svg&from=appmsg)。而这里只有一个特征值 3，最终会是一个 **3×3 的 Jordan 块**。

* * *

## 12）构造“广义特征向量链”（Jordan 块的核心）

我们要找一条长度 3 的链 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoJ8iaFTIXhicJmwfrGb972Xia5jxqmFHIMbnmzje7lIceAWambgOn7ibicz00eGbRkfia0syatbR6oDLYsoKpwPlmAr8xfLfPa8JXdGQ/640?wx_fmt=svg&from=appmsg) 满足：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm200FHUuicU2KMW5gPtZNTSyAI0RnLF8fY4Epr9TRNdwz8aiaHpoyekMSpaeg8lzyqicUwpr36jymqEUEB9ROfI3JXRB1ARlcTSGqNw/640?wx_fmt=svg&from=appmsg)

### (a) 已有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSgu0GiaTsE6p8z3Djha8WhyYao6h2eSQQbbaib8SpYx1uLHjgXdeXMgFDaibrpEI19Ah36thEXzcgnTwJqaLwXtibgvWEy9lT0uw9GQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM63o99F99ufSHSw077F3ldfnYHYzWP6WaGmBWUFY8lh6ueQlBkaIpiaPu3p1dkVpx1jlFuHJW1CZLV7tPnL5ia8Dia799r38ia2Jv13LjuIwmoewg/640?wx_fmt=svg&from=appmsg)

### (b) 解 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90JUKHic1ZLvDsVndicxBQmAmVuKoPY0tWE3DtpnMQxMbGKUlsicd52HvlNW2PMtuFCsjm7lVhyExvK8w8eUvByLMRy4ibjjPFa7jog/640?wx_fmt=svg&from=appmsg)

令 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5qa4K0Igkt3zY0Iqt5nLwSSeoF2pficgUdMzJY2BMl9bMiaukcicp3ljGlftc0loibgq1On69MHoEcWLxZRmpRAv2Jv7ovgs3wHIBw/640?wx_fmt=svg&from=appmsg)，则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfCD9FQ6pVlS497nZdcfhqolIO10ZfTkACxFbe2icbgbhnicdK5pUAWazBgZ153A2cAWAcJEV6pD8ey0icVJsbMJHgRT0gFxibQKlbQ/640?wx_fmt=svg&from=appmsg)

得到方程组：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4RvpzuDe4tk4VoSnMFynImPwH38N1s9ibtiagbaw5tf1Necics8uEUZ1giaj29miabsYEM9G5XhWcD354XRzUMFH4LcBPrTR5W6vN8HFw/640?wx_fmt=svg&from=appmsg)

由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhR50kvWhDlzl3XSpFekuyEkQkb4PLCmREjSAlWQyDNA4ckHTfFTKAjpowRk8Ijo0AUc1VlPCp9tqRZcFale3Y1KmKCIqvJg2ydg/640?wx_fmt=svg&from=appmsg)，第三式给 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQkEq00b1gh3KwZuXa632E3FUHqVibzv9cbxJeicxJUs4vzDYLky96beJt7OvXEyB2VDRjiaFbULCzpajY1ta7lXlXEUia66ou5LhNg/640?wx_fmt=svg&from=appmsg)，代入第一式 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yjwNFmzI2TicsSsl0FVfyO4f2KXuDj9yVHSZZe7DbGcYVMOp4ibwWN1aAHz9V49RE4UD0xXy33tlViaceNop1WnNe2Fpf7bI4YpzRt6wmfTkSA/640?wx_fmt=svg&from=appmsg) 成立（恒等式），所以有无穷多解。

选一个最简单的：取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ6hukkEIOvZic1s2SPRBBuU7fu8RibTBpMkhFNNBta4ibDf0VQtD2RlOyAQtpGuuKzrjC5nEDiame8QAYfnWg2EHSIGaxLUXBdmfRg/640?wx_fmt=svg&from=appmsg)，则 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZbOZWyjiaVwicxicFfkjKfkgbgxh7NY9jrC38Q5BBbRZ9UrwollStasicFeRHiarYQibZ4h5cdSFI3ZuALxeVia7sicjqYolMwtAuAj2cg/640?wx_fmt=svg&from=appmsg)，得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1opKia4MPvhNRBoFRFWnuwrm7AsqUEe3WAbuIic5eImekP2xUk93YoTwglp5azSsemFR7OABbPbp7POOXSAhnTOo3N8A5JTAPZuA/640?wx_fmt=svg&from=appmsg)

### (c) 解 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK4Hd4nRuichYWmHRrIhOwZ8yUd0u9XwGnUmJ7tXEDFAwp6592a4qEibjcX7EztqksJbhC4aDbiclic6PSycUkrMicKKNoEj932jAFlQ/640?wx_fmt=svg&from=appmsg)

令 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vf4O3sdIf7osJARrmFQ57aPbvHR5HIsTDicWWeutNeRLJw6W3DrNKrUYPgDfUbPhc7Hnd6Ml499CWPNOlfXyouC3s595ibmbgXuxlojf6hmibA/640?wx_fmt=svg&from=appmsg)，则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JLxycPibFice5jQwY3ibiaX1xCyl9MRUibvqsmibiawC9zHAEYicJCmH0feWL9YicvV9eeugEbza6A2vicb43nhxIHZPOaph7etLfAMW4NXhQ/640?wx_fmt=svg&from=appmsg)

方程组：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SUCiamBy4miclQq2iashLEuJL5msTHsFe1xcuRakVYDJHibWBCtd9bjhuy4nEEyjyGUzW9sXR1OYlQiby0W04nibtva54pLYtD3YXUmcABaHsoAmg/640?wx_fmt=svg&from=appmsg)

由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSgjoz3pJVoiclakbLXMN4k5ysvOoJpicUmALNXibuCqrSV2fPzkKD3gyLoXMRGD5l7ELzawCVnq2LBP2lhdhP0s8NElmbNG16xU5vw/640?wx_fmt=svg&from=appmsg)，第三式变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4oq5b9RRg9eyZbZvnwz9QYMZLeice3v6oPqbx4UOVPPRIHvSD13jFrjnlsQfWOp8AxdbSQKy1XzgtGDfuTHmweibkq6nwqlKL4Ddg/640?wx_fmt=svg&from=appmsg)，与第一式等价（同一条约束）。

取最简单：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvcvKgShXVWIiaia0sicEbYNk0nsKoGJtUmr2ksHF8ibN4GQIBDQUrJRuSuXLWQuQMzfqcA9ic3iaeQs4PK0h51zwyzUdh9oTuw2mnmjA/640?wx_fmt=svg&from=appmsg)，得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAPwvLG3T8QaFA8NJbrLLDIfBHiaZqokDaxz2Jpr0TR20A164fEicSHBPAlkWP5ojdhoJ5Z4D80eCfJtbtGWdtQAV4rjhehMRS30w/640?wx_fmt=svg&from=appmsg)

* * *

## 13）组装 P 与 J，验证 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEAiaOR2kickGCkd5pOm4almhvTR7WBqkf2qyzvwQiaOBbZmav3APoYBtSFMicM1IiaeLXfFLzQUo71eRF7U0aK7xia3ZvYNTv47mxAM6Q/640?wx_fmt=svg&from=appmsg)

把链向量按顺序作为列拼成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyAyibicTjibEQmDLmXdKajO4EYJy1xRJrbMl4fpMicvfAfaxWjuja1Svryx4OVI0ic1NeeV0ttpHAvaeeLNVyGLuuEw24Cic1GNwyQicQ/640?wx_fmt=svg&from=appmsg)

对应的 Jordan 块（长度 3，特征值 3）是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sAz5OWdbfR58Od9K9ricNCbNf8CToBoXM9KbaXibNRhhQVRB9DwYn1Is1dWtggAxU09KYOCZMFOeVvspuIFrshojkmNnOQYVBeuOdAsiasmvPA/640?wx_fmt=svg&from=appmsg)

为什么这就对了？关键等式是链条关系等价于：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GTFx2XpjbVqj16PBT5HWwHDYPQ142QyEAkSflzG9xd2gQpX0EJBJOpcbJRibPpoIarzAvj5fTK0XSZfIRic0N2LBpsVMfvOV986g/640?wx_fmt=svg&from=appmsg)

把这三条并在一起就是矩阵形式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThhia0rAeJP4ia5jH3IeiaVS7TWvMU9Jib5MEk0Qqyb07Mw8icKdnolGmrNN5pyAzQHvqFac9iaQtFAdicnT8Cibhj73CY6JZK0iaRZwiaTQg/640?wx_fmt=svg&from=appmsg)

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUiazibst0urNayM6F7ctfwOibQYZYvAJhBvvC7p4gVPibBRUtDsBb3VPGBad4KtTgV4eum9R9VkbTibTiaTm1qzU69vWfbOOUef02urA/640?wx_fmt=svg&from=appmsg)

到这里，Jordan 分解完成：这个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6JlRRywQMxIpiaicrz2GVHNuVVgQUxAdaYjWsly4vlwlo88BXT7a3q5VSUWcE93ch0Niaqvc1gcH8PrY3oo3qtXM6jzYtC02B2wg6A/640?wx_fmt=svg&from=appmsg) 在基底 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHYJkrbCjz2fh3unE2z2rB5icdKen0GR8aVIENFZZ3xKibo7tk304tqZE7DZ7iaF14hQ8ykWnoyHMOgmKKsicnJiaOo8jAHP9QkUOoCw/640?wx_fmt=svg&from=appmsg) 下就是一个 **3×3 Jordan 块**。

#### 通俗比喻

把 Jordan 块想象成一个“滑梯链”：特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHAwfoNiahh9gRe9RZc04aSqKEYQ7dJreJ9GkkianqmSBTbs5BF7eEfPLKA0JPq7OACQZTckVjxAfS8O06jFOLLv9l6Gd1v4tBdBA/640?wx_fmt=svg&from=appmsg) 是滑梯的“高度”，1 是连接的“台阶”。向量在变换时，会沿着这个链“滑”下去，直到碰到零空间。这有助于理解动态系统，比如在微分方程中，矩阵的指数函数会变得简单。