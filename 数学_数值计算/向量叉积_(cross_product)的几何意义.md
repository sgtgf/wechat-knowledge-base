# 向量叉积 (cross product)的几何意义


> 原文地址: [https://mp.weixin.qq.com/s/7B0GAcul5IQ1Yjt7Zo0TUg](https://mp.weixin.qq.com/s/7B0GAcul5IQ1Yjt7Zo0TUg)

向量叉积（Cross Product，记作 **A × B**）是三维空间中两个向量的“特殊乘法”。它不像点积那样得出一个数字，而是得出**一个全新的向量**，这个新向量同时携带了“大小”和“方向”两个重要的几何信息。下面我用最通俗的语言 + 清晰的图，一步步给你讲清楚，希望看完就懂！

### 1\. 叉积的大小 = 平行四边形的面积（超级直观！）

想象你用向量 **A** 和 **B** 当作两条邻边，撑开一个平行四边形。**A × B 的长度（模长）正好等于这个平行四边形的面积**！

公式：**|A × B| = |A| × |B| × sinθ**（θ 是 A 和 B 的夹角）

为什么是 sinθ？因为 |B| sinθ 就是 B 在垂直于 A 方向上的“高度”，底 × 高 = 面积。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvPW9SrCdx4GEOibTJBibTicgf0slEyialdQhjBdUhwgcah2OcHSaMxz3sYyKrKUSCInqwKyPwynLf5JheiaA320lxkriadtCDRv8ticI/640?wx_fmt=png&from=appmsg)

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

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocu3DE8uDprIZse5Ut2qE3OWdBN91ChiburZBuoZBUdXE5nS8e433YdKSXcIpxwyLmFKaedt9HZxpwdZ7G3qLpibEuGTtt3oGEoKI/640?wx_fmt=png&from=appmsg)

图2

-   左图直接把 a、b、a×b 标在手上，超清晰。
    
-   右图还对比了 A×B（大拇指向上）和 B×A（大拇指向下），说明叉积**不满足交换律**：**A × B = – (B × A)**（方向相反，大小一样）。
    

>   

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuod6k1qDtjXTRjaHaibyDMxWgkJvUX37LawRcp7dagb2F7JgpQaBQJrE6J1CTmcXziam7kpia5wGaXyUjzGLKxacFtUlfToFNgnk/640?wx_fmt=png&from=appmsg)

图3

向量叉积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5CLOqwrZjiajj337BjVBZKyFPp9EqIL3fsmGibaoW56eNaOmI658KoWiagicM3aK5k2iaOx6r7SKUP95c9Nic1Uia1M6kkNgx4OoWO0eg/640?wx_fmt=svg&from=appmsg) 的**几何意义**可以用图3那块“平行四边形面片”来一句话概括：

> **叉积把“由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqht737eH9zWzXLsDWOvzBukdAiaUX0jVP24oVdvxl1fozliaM5RSQGXbDmdKFUVpQia0TD9R1bxT9AaMtDBCdnf1QPjdvzhPiafQIg/640?wx_fmt=svg&from=appmsg) 张成的平面面片（带方向）”编码成一个“垂直于该平面的法向量”，其长度等于面片面积。**

下面拆开说清楚。

* * *

### 1) 长度：等于平行四边形的面积

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQxmn7J1mnEr0EkKtULdPmeX5M7hxIeEe2FQictQmNtNQGu3ZtUWGTpeMYln4nXK90oJ1YDbpAw6Sm5ZI70sxhTIMs2j9sTDU6qQ/640?wx_fmt=svg&from=appmsg)

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjT5aLp6qEF4aIZF5bu9uvrIgLj97hXoP7FdiaD1dEAasQ6DTIW6c6W9oibCPlbJJfiamfbgZQxZKyxW4mOkicibnqvcLRlHiaVg8EIcDg/640?wx_fmt=svg&from=appmsg)
    
     是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCsFicoicV3tyBeNfVzD0iagjd2V129ibAQxu85xG5H5ZIickYf9Gy2oYlxHatp6B8gibTcmvXL65HCNQicACUZn2Ecn50yxIUDJyMIgkQ/640?wx_fmt=svg&from=appmsg) 与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ5F6R17ibDHHYCbljAsXS63yb4r8s14ic8pf6cyRYLEAMkGbPNravt0AibhOrcVnnG55Ag7BkpoyiceROP06ibFsLCQLYw4ibxbo11Zw/640?wx_fmt=svg&from=appmsg) 的夹角（取 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpdKMxDiaIAAIaSibJJliciaD1RbErbElFnpd5lQg6RfvOfyHehEtqThtAsSCGtKsx36ALhic0HD3Df8ILxbiaMibSpWOfzp7PvnKia62dg/640?wx_fmt=svg&from=appmsg)）。
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCnoETy2EUbkpIbP7n8yKlR8ZjxfsnYK6XOMbHjAWKibGBh8ibIIjMuz169CR3MwVmN872LqbCXXcnzGMFBlLic3I3aDZZ1ibnH2nhA/640?wx_fmt=svg&from=appmsg)
    
     可以看成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK4IjWVSVmJib7HPRsT0tVEeaQW32QYnJqL8oOic2Mibjiaib3xrJ9BBpEXcyeDs2WFEibyUQ2PJV5w97c9eDRUWicHU3cDSUblQwa6Gyw/640?wx_fmt=svg&from=appmsg) 在“垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxEHZZmhY8wqENSjaP2UrAH7IWDYICRwOyeJfdpYhGkJwomfQG0Zibqo1PjDJ6ybeyrxBOzicESFOg6lJfshSDJ0l2DFLY0fRUxibKQ/640?wx_fmt=svg&from=appmsg)”方向上的**高度**。
    
-   所以面积 = 底 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4Rvv5tXNIQicgibMe5qgiavxdNenTmSic1cmqzj7HyR10F5gVhmHTdicK0TqEptVABmiaibjqRy8T8c23EVOhxv8xeOlHKIleyKcRicxNODg/640?wx_fmt=svg&from=appmsg) × 高 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQriayv23jwQ4T1MnM6znMsohfAOmnbMSjicLjLnlO5Uic1NK7ibYovPY8z9sHn7BbFHO3uqsQVQO7mkQqS0KELVHWDkTN8dKj8ehhg/640?wx_fmt=svg&from=appmsg)。
    

因此：

-   若 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt5UG34hqbbcessVf07Znr9bgAamIK4HjKKb6qQc8pu3uGDKcztedkzKF8CUn9esxvHwtnLicJa2zgbicYTsocN6uGk3dBkEt3ugA/640?wx_fmt=svg&from=appmsg)（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1jA6E1cStbfNTacicZ7sLGeCg6S4aFv9sqdRXjQcVeEAA4OsNAwmsicuVnW1D2iblB0LJYTUwrPibXuTskBH3NiaCnSCBKs4mho1Brg/640?wx_fmt=svg&from=appmsg) 或 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJIHBpmBNE4ShjSkPichqZpLGN8Upvvoic5Y9DqzUicxuuic3FQ26bBdWYgEW8qfkZyMF50b49G51JwEt412fOSBToylmAsoqhV5sdA/640?wx_fmt=svg&from=appmsg)），![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1P3wx3m8htaNXxAGoK0HLLvmoibcszldBxhfrB1fIPpFxzE5zWbHKMCqceF0ZBx0AA7HAorjeFVS40QcicWH1YN1icAib1LK8y2paQ/640?wx_fmt=svg&from=appmsg)，面积为 0，叉积为 0。
    
-   若 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6Jq3aZ6DDT9oE9NdmZhcKS82MPKeG5buzOkY0LFCPR5BPQwswgGSpoFDPJOSnVAiaiblsQy1DsjAJTSJDwyCtHN6MdPg4gx7E4icUg/640?wx_fmt=svg&from=appmsg)（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0iaguXGQjC1KLYZibNIqmDqosibtzibLAvOWE3xOn37yw0IMicYqoFNdZn92Tibwib7NjdCmoNtFAwgjdMJK7RibBLL7rTz3hibQT4cLBpw/640?wx_fmt=svg&from=appmsg)），![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKHzR5VW1Gbbo0CUr8Cj9XtcUlcwicLITAcyQLrnm6d9UY2jrkejiaM1LP2opZ0Uqab6rgBgx9ctDnicicAbAaVFbPnXvoA4jibJwFHyg/640?wx_fmt=svg&from=appmsg)，面积最大，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaAAhjFsmyZ5xs4tmC97g2APhPgEGkmyHGXSqGib04bZpu58UnRQdcwjibJrSwbCqqVic6btLXr5eLaJM7sicMBdKZMJ9VMoASPz1Pw/640?wx_fmt=svg&from=appmsg)。
    

另外，三角形面积就是它的一半：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm20icrtBRTvawLvsiaPGicZLic3TTBDwCJLSMnU49ib83DrWbJAo47lzecRu8RFa5BfT50fS9SJYrRVBhWnJUTxb7MEUEZGbibIFgtTLOQ/640?wx_fmt=svg&from=appmsg)

* * *

### 2) 方向：给出“法线”（垂直于那张平面）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iblhNyfsNwBcfdfrjojn9oWKuQiaCWjuzGehbicDhdYsD4x0eOEibrZ3KJ9HicBNWn2LbSIF4DxGYWoic4E1tea7JvkvPWUF9KAdvBb8GorkVa4uw/640?wx_fmt=svg&from=appmsg) 的方向满足：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKRZfcTMkB8KicupreO6cynlN0eBW7BCsAIZLGAXXWy9JtEc40tQnGoSAa3qW1qAfUQME1gCJLpKEdpH9vPTZHj2se5icWHyoMekg/640?wx_fmt=svg&from=appmsg)**同时垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxECuiaVO6ybAVUdZo6vvzG6PIuR9BMDS8EHPXxKwaurQkwMvticmUlWoJTV5QzwbN5PUOkEll4FGKjz5ibkDzgpwP35Q1Z1hB0KBJw/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovghyw3kcTia9zdrNHmIXR9IoaonxjKtRibqpDILJfa3KHmhe4O4tQBytMpab7DN3V6hFge7SVRxYBbeguuCoxdEGNia9MR8dHhIR0w/640?wx_fmt=svg&from=appmsg)** 
-   也就垂直于它们张成的平面（图中那块灰色平面）
    

这就是“[法向量](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect)”的来源：它是那张平面的一个法线方向。

* * *

### 3) 正负（朝上还是朝下）：右手定则 = “有向面积”

叉积不光给面积大小，还给**朝向**（orientation）：

-   用右手：四指从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPWDt9e9X384FEm9vDx3kGBENxTpC5sgRYfYUOhJpxR3mDdf1rxcxb3d1WwteVttkQ1L3nFJJ5RC09PnibAiaFWj51O0YapbhI5aQ/640?wx_fmt=svg&from=appmsg) 卷向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScEYTkQUs4licqUkWxhKAlouUOxX0ZtF6P2XibuYz9dmYSibBbRCibvUtn2ib8XUBVM8BTuY71zsYtBbgL7akadXtfKhqg1ykBqL8mGw/640?wx_fmt=svg&from=appmsg)（走最短夹角），大拇指指向就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJxteKx8rjSvPd56R76hF6wXnl4ibcYLgtt9GEZBZGORiaWHf6jvjPpskMniaRH2aHuk4u74GURp8Y2Hia7ZHlloh2ibdDc7tnNzt1Pg/640?wx_fmt=svg&from=appmsg) 的方向。
    
-   交换顺序会翻转方向：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d65iaQcjicvKjoIR4wRAEBP4RNvTPjibeMjr1pt21BC20Mj73iaibGHOKKax3MkyPxAkFUDgtcp3vOEKMBdHYGJIaU4j5a3sCJIxibXpg/640?wx_fmt=svg&from=appmsg)

所以叉积更准确地说是：**把平行四边形的“有向面积”编码为一个法向量**。  
（同一块面积，正面/反面朝你，就是符号相反。）

* * *

### 4) 一个最直观的小例子（整数）

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaW2ewbVujNE7OwuKE9ERu2FiaEVqgtLpJ1HZpQSrj33I6Lmu5mCjgzXdW3AC0y1BXaYcibnws2JmG7CYnFfmJFqFwiac51za17Nng/640?wx_fmt=svg&from=appmsg)

它们在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0In32OzjHC0DhVdecwnHJdawCOdhhKfzfribIb5kmab0ofOtKjq2uDhgNVstsSichBVmsTDetIpdwG7ov5IKfiahHptm5NFYUpyRA/640?wx_fmt=svg&from=appmsg) 平面上，张成一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp12e9xANOVsclG5A1YibCHuXsWLo9N0ZC4OMNtOmapHFLxvVZ0bGXL571vLVAqI3scUdmPd922hfkuhibWBqD7PHmH0okS2RbiaX9g/640?wx_fmt=svg&from=appmsg) 的矩形（也是平行四边形）：

-   面积 = ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDHwWHsBofdnAQYOSNBQr8hZubnQkFicSGpu5VXmd0R4b1jsHKFgsFkqusrg8X6v4LgJNJFpJibt0lA7MVkrHbAOah5ve7UTH7j0GQ/640?wx_fmt=svg&from=appmsg)
    
-   叉积：
    

### 4.1) 用“行列式公式”一步步算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7zmBEpRjw3xlLh3icwv2NJEDL2gBR3xrTgKF97bPmNF5oUSExg91SVKjmglYHoicXnnCxOonBc4N8bnQicnkUTTeP8lOfBROvL8AD8PNQPjC4Og/640?wx_fmt=svg&from=appmsg)

代入 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsnou831d165liaTcGm6YFVA2CHsLE9UrF3cgLe0r2Rtlic9e9CGm6cSySPVwpNFlWPiaJ5xic9EAOic3jWR5Hbqlhe2tQuZxqAbYMfEQ/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb77ickibSibPPnDujTCTLw7p9IEPmpNicky2GzhD61HvKBSCPm1v7C2JpgaYgOasFUDU61qxARcqEbaXItDnygMNGdvF4AW0AtzNlzKg/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzOSReLRaPMO5aNVn506cTFatLuHc8BPk2ia1wMFQ7TQdgWSlG194bRWUbRjZOAlxPIcVsPibOJ0ibAzib6FlyLTxTLqouqiaxDLC47w/640?wx_fmt=svg&from=appmsg)

按第一行展开（记住符号是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQoolGXNNgwwF15hqPKOyShYVSBj5NOtMC7Ps6ic4WCpxBCMWAf2J3Z8S4PhY0g1MgzNJwZo9szs5BKmPhU7QAlttzQV82Eric7RA/640?wx_fmt=svg&from=appmsg)）：

-   i 分量：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM70Rdb4ngSBiaxm639bVibCZticSsyOprPM7nhMPmADGwulk1ZBlicfQcXpbBLicgjKncSEOT4U1VDJhVBYPeEODnIfCeic8nEIyo1JKUWnlRM5o5jw/640?wx_fmt=svg&from=appmsg)

-   j 分量：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47KjVz0NHwBtfkAHNwY8GJVptDXBs0L6NibgglHIaFxUOxDf8nWFEwK6DCIEsJ38bvCzmfhZAs42IxIYzS8ZKt1eiceKwHriawxhPg/640?wx_fmt=svg&from=appmsg)

-   k 分量：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp14Oh62BYFa1laqR8lbC4vzXFZESmNlgEgs0aWccaUXrB3BUnz0HRkWiam9LA4oWcGcF2lDDRnzEq29zOxbpZcJphfn3uiaU5Yvsw/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49lJCxaHsUadOnH55dMOVrlvaibibiblvmk1etLboge2h44ibzPpGulDAvOtxIImVeEH7ibGIp07xnNcxTMbdGtbnAXNpdeVNwKXDaZbATibMZIQ4g/640?wx_fmt=svg&from=appmsg)

* * *

### 4.2) 用“更好记”的坐标公式

如果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkjzrvicYBdlwsEFAJdic2oy9sguaq6OGpaEw4P0ndWIceeEib2m0kKguKxfVyWVwOLh21H1c2bZoe5DzsPlL04Dv4I2A6sxlfnAFQ/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPdpO6dib0u8mM7gY34RsDjkeRZXIspEydW5icRvEG2ibpZov6wpdm9iabT1oqB7MONtHzOkbQY0ZILEWbcXXoIDTpRUQdsXFkfLRhw/640?wx_fmt=svg&from=appmsg)

代入同样得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59uXhfsorpcprZbwYicqDRZJl7ibbsZuXLvfmEqVDSfAXGJkjrVmo5etNTDd1tSfSctgtJQ0QabKKkZyTrL4HqDx6ZhFUP4Aichkm6YK8YyEIeA/640?wx_fmt=svg&from=appmsg)。

* * *

### 4.3) 几何直觉：为什么是 6、为什么在 z 方向？

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDH7hTIb9g9WkJM9SQ7tEIu1vFwcrk4TGMxKqGcSh4DFyjX26n4UfAiaX7ocvvmEnLFMagTlqMdvoJFeHh5Tyy8HEqkp8HPZRGUvA/640?wx_fmt=svg&from=appmsg)
    
     在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0armbBgaiciccf98aqCX4bf3whL9rqq9P0JG9ujw5fMgFiaY1A6iaW0YiaiaibsgVUKGmOCv7XAhTicc0AmIOaNSY7nQGibxrktWrfbelVg/640?wx_fmt=svg&from=appmsg) 轴方向，长度 2
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPRQkDiaNeMcXfEqN1Ztvsva1ib9z5oEmtcKRR0QK2yuXiagVA9upZtxJAD4j5JkxKJV1AVFE7kosuZg9jz5YghG6ibcsGVPmsNl5uA/640?wx_fmt=svg&from=appmsg)
    
     在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMAJjJXNjKdCicEM8gHgs5y4CdibhI0pGacsib5GrmyypdYBzVJicHucVjicpQmSeMVGA424R7zBiaWuw4lorBbOiaM1OW285UcZwibzXXA/640?wx_fmt=svg&from=appmsg) 轴方向，长度 3
    
-   它们垂直，所以平行四边形面积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYGEUMsceN9CtzqficABdcn9IE7e4cwk4cpfAG8n4wQpLgicokTfLGOdptynicHg3oeic3jfFrwslYro8Zy3VuqOhl3etjeq4qm8XiaA/640?wx_fmt=svg&from=appmsg)
    
-   法线垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Stq745daCfiaOt0iaOO1lR4ibkRE5WNKiaCFrBqwOqxTuTsYYAVj6I1vUBUEA8zD2tDDXf1gRmHkmqTkxTOqhbR2icAqeZ3S7da5jw75WIeFqjcg/640?wx_fmt=svg&from=appmsg) 平面，所以方向在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2X7CgcPyLTnn7HFHtLql84HVcx0WiaXovqiaWhx6ssb2hqibSRVZHTRLUIgqfrIqStvMCcmeN4692pplPA41XC5jPxiaguDuFGfGmLA/640?wx_fmt=svg&from=appmsg) 轴
    
-   右手定则：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpRDoazptNU43iaUuOq0o2nz2IicO34uvGrr3CLrP2VSwlXmVibkOCLSvWCNMTIbwAiaINfibVFmWbjqtNongZR3gAXoLyJuJQXGvxow/640?wx_fmt=svg&from=appmsg)（+x）转到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg2hQvq99373eEEOLya4lu9GxkVV21xLbYxT70F6nncyGeq0guaicz8Oc4hYDkiaWdU3L7WtgZWXic1sLtnMibYe9CDxoyLXmnnHfyA/640?wx_fmt=svg&from=appmsg)（+y），大拇指指向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSgtBXnU9TJMt7PXiabKPfIrmnvoBuAxkickI0K4dXwD3YiceDekj7mXITQ5BdM2Qibn6xtD6ibBybAuMz0pBpZ5XBFQJbnAhYILKgNSA/640?wx_fmt=svg&from=appmsg)
    

因此结果就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKUj88R4mppazSccHHIglYic10UrRXEeXicoJlGzMCicAGicNUZI4CgNYoIXKbicXIFVxIwYQgKOVa5YUyXJnX3ibWicVLmtCYAIj27pZw/640?wx_fmt=svg&from=appmsg)。

方向沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ohNs0aeRVMecKoWuwvAzoBZ6aCIBYQXCJdPsBicv1JQOiaX2MAjFsNsc8QExAibjIwHhiaA2DXEvMsp09og4H9YebSmZRafr1t8LrQ/640?wx_fmt=svg&from=appmsg)（“朝上”），长度 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAUZriacxdhYs50TSp8pEnd4QhmDmic1JXg9kN0BkmZhZk616TmdKCfxqYZwgnymQDhvBE25neicmJmQ0O16cpEZPWIhzuE0oVK82w/640?wx_fmt=svg&from=appmsg)，正好等于面积。

如果反过来：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbhperF0cKZAYJtHBAeV8D4XNkXQAgibwsNcQl0U6PUEI3iboRean2QOH2lA07qzlU9NE92SEQhqPnKvkN12M71cw1mGlmEFOIKhA/640?wx_fmt=svg&from=appmsg)

面积大小没变，但法线朝下。

* * *

### 5) 你可以把叉积当成“造法线 + 算面积”的工具

常见用法的几何直觉：

-   **给平面找法线**
    
    三维里一个面（由两条边 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OF4NnSxInO8Q0QJMQeb6gFVkWic7OmG8NIcyVu8UooqWANtFxibNDZk6bnc1QKFnAMQwLhogBicFbBYBo7u2icq4QCX7zEnSWLR4KcQ/640?wx_fmt=svg&from=appmsg) 定义）最自然的法向量就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rc0l5t7pRZnOzSBib5hq2xNkszu9MK7eSibdf4DhQibe5TeXB4qGT0E2N4hyekIfveE66W1kWicLkNEyVLnPQOhjNNJCyQ54W0icB44Q/640?wx_fmt=svg&from=appmsg)。
    
-   **测“转动趋势”**
    
    力矩 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dNeibBg1kqtufVEbNCn0jlICgic2e7YRrt73Tl3rRibGwK5Zf118tbo4azXVUd2ibk1D0UoFicxvib3f55icAo1OSMvJOh01NKC1ykxgA/640?wx_fmt=svg&from=appmsg) 的方向给出旋转轴，大小是“力 × 力臂垂直距离”。
    

* * *

下面按图的三维直觉来讲（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSghQRsKDeiaXqmQOmqlwYW0Q6zhnWWNLNR1jhlz9ibXWnsC1SA5Lg0BRZ7JTp9VD7OCOicBerkDKrxbQeiba4ibm3wn1LxCPJryv7HNQ/640?wx_fmt=svg&from=appmsg)、平行四边形面积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtRpDHH1wAcYicA7H4umibcJh8p32ic9dJAgKFxlgiaNeVp4Vu7EoaEZMqIBcPTkyXN5WBNjepw0CaIE1oXdoWnljyEcwE3x8SZT3xg/640?wx_fmt=svg&from=appmsg)、夹角 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPO7tq1qZunCbYM7c4ZdxMOLmkEEYgUEOznJf90CDQg89ibllPhJnce1A5ub3MicKfialJdH1zb0a0eYynFfgTxwj4HSicbxDN6icyoA/640?wx_fmt=svg&from=appmsg)），**点积 vs 叉积**可以非常直观地分工成：

> **点积 = “对齐计”（沿着对方方向有多少）**  
> **叉积 = “偏离计”（垂直于对方方向有多少）**

  

* * *

### 1) 先把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibD7fph1ic1eic6iaJjooSTvYGFjbXA8GumfqjZGGOFmQUeESxr4z9nJ1oOKIKKnwIN2hjd6CQ2MRJkF3Bia9ib78HkRx59sSjqpQqog/640?wx_fmt=svg&from=appmsg) 在三维里拆成两块：平行 + 垂直

在三维空间中，给定 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47AtXMTrgicWaUaWVCMtJMrIwqicpaTFNMzJ1ticZDlXqzNsReic8byHK4qWmJLXZ3NNk3l2g5tn4lgMGdvfZhvZ5EQfTD3xtVjVF3Q/640?wx_fmt=svg&from=appmsg)，任何 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpeRpK2dicG0xjpyNzB0nE2icBIDxNG1PdkdaiaZWpRUIow8Ricm9bianhibibb8MwaicFSDxqzPcO1vzEuCUTWf3lA4cG0egTCorlr9jbA/640?wx_fmt=svg&from=appmsg) 都能唯一分解为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1Q8UFlicneHPj3NCnD02CnkeXicHphFeHhRBTPfKJExibWvphq71lJ9yvqPd4oM1ZfaTrUfr6ib1lYVW2rhBX5gJBfKYoF5poJ4tvg/640?wx_fmt=svg&from=appmsg)

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpJfCV02QU4e08LP49xs1kr3k2MGxm0hka11tYnibLkqThVsGeI2G6XJIQsHQrBibZA5hPBw1wlB5FNTURR6N1t7tAnR2Jwe08h3Q/640?wx_fmt=svg&from=appmsg)
    
    **沿着 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0xibKYWmMKxLHfwnuXfRSGXDlNh0Lia2pLJGOib1dteiaRd6GNQ84riadJ4Ls4PhsOcJpVBKcXhdUURzl32VxdbpF7e5t9lQ7CibpK9Yw/640?wx_fmt=svg&from=appmsg)**  的分量（对齐部分）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1bicVmjfF981QZ8jLetuBFt815O8WGZyoSlCR34JB8NQWw2qgEichgb40NiaH58icAUbuSjC07icpDLoecsvnfBCibHKAbSQWONibHs7w/640?wx_fmt=svg&from=appmsg)
    
    **垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Y559V5uMGT6gk03uhFbORz8RVGiaE6Luu3ibbzjkk2lgjy8zXAhpeDkK8sBCQlN72vWvTSDoINPZWXnBESRIzM6Yj7cVZcZnJQkOFEoWw2dlQ/640?wx_fmt=svg&from=appmsg)**  的分量（偏离部分）
    

几何上：图里那块平行四边形，用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsnkaJyibzt7AxjsMLtsofucps3xDco7Djytmoyjqs6Mr3oyUp6SUWubZ5clsnRL5wHDIcFjwFOU8NnbFr5ibuLwT9BJOiasze0Er8A/640?wx_fmt=svg&from=appmsg) 做底边，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISfBGlHQdZWAQQkotrbtMY48Pib088ibDMBZg6VhG8nAzj4yZC5bzCPmWyqp6a5GVoXbUGmKehMmKMrVDD4eOrHBV6pBWHibkdvH4w/640?wx_fmt=svg&from=appmsg) 就是“高度方向”的那一段。

* * *

### 2) 点积：只关心“沿着 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZcVzOQiaibrgvXPVMicals68pXEMeATgAHNNUn8YhGtQRayxdcz7U5D7M9WzSKF9Hq5UFq6rics9v1BLCGo9AOwkIB6xPbo3z3NQXtPlJeM9cw/640?wx_fmt=svg&from=appmsg)”的那一块（对齐）

点积公式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4Rviaeu72kDJSvOC4cwcBTdbmGvFJtEdashv1qzWkngCtBcibf9hans988UibqCiaOsOOKzlsRfrKnfcTolyZzSQvJuIicXGvZfypZT7A/640?wx_fmt=svg&from=appmsg)

把它改写成“底 × 投影长度”的样子：

-   v 在 u 方向上的**投影长度**是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM55V7C7hCRTTiabZPb7fSPniawQkDhWs3cDKkUFb5vJ3yVnIQec13yKcZ3UJuTrVQSNBwUXQbrpDHibsjjjianRwlicjgUe70ajQ4LeMfSPRUxJ19Q/640?wx_fmt=svg&from=appmsg) 
-   所以
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LeFCXSWDFXsWNYj2J8NwPZI1g24pkjzPwJ73M2CeJunsID6R5iaumfIYZfoVrw4t2VibO0WDUykmgBZKDjSfApah36el0UNadNXw/640?wx_fmt=svg&from=appmsg)

更“几何可操作”的表达（[投影向量](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488995&idx=1&sn=2971f0cedf425478ae855802f798021b&scene=21#wechat_redirect)）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7mia3VETsYjiccKhWvia1nqTVucibJfZSSxTQ3jLy5wlGsEYEgFZ8vc2zibX9Uu34MfGSqWVTnkkRdalsZK3Zv2c52kBfD5FtW4cCUeAgicmSJWPKQ/640?wx_fmt=svg&from=appmsg)

**直觉总结（对齐计）：**

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHTXA3lJ6rmHiaFNo00ltUzBb4pvfbYMcibJVeYwSDgX5xb0pxen4d0t7BMZJJHOiaK4TIMcuH3gHq7Sr86OMhqmLje5frypgibQKJw/640?wx_fmt=svg&from=appmsg)
    
    大体同向（对齐）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpRjLoja0U6BCcqXTL5HdNSswicYiacHHNvx3h5XEP8DRgg7j86cJdKb9Z34LCFIAe762B9WEIzyWgKiaXRIRkxlPXc2dPPbTHcOfA/640?wx_fmt=svg&from=appmsg)
    
    完全不对齐（正交）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEGpLecvknycicpbs3QdTBl33CTtp5BC76DZ3fgRnBAgdq1wryRLicdtagE8ydqJZhw7K6iaJJwcZz8dNx578DxqpCF8CG9XXFPyRA/640?wx_fmt=svg&from=appmsg)
    
    大体反向（“对齐但朝反方向”）
    

点积输出是**标量**，因为它测的是“沿某方向有多少”。

* * *

### 3) 叉积：只关心“垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5s2ibCbNf8ibHiadK1za7uIQJm7jaU2YINUdnPWc0NlNMTG9L6ZTJrC0XksWPEpvLMNu8WLeHJIAg6PxfyF6KoLJx1Nyxy41Ytmfg/640?wx_fmt=svg&from=appmsg)”的那一块（偏离）

叉积的长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuJPDfG4c5icqqt1onicENAIcic3qU4k5dd2UGA8HlZGZ9AJrmvNrdDURxFm1slNoicyxCac91StDObuDt6C7lmOoibJQEeF8vT2hictA/640?wx_fmt=svg&from=appmsg)

同样改写成“底 × 高”的样子：

-   v 相对 u 的**垂直高度**就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRThw62xtmWwibft4uJHFaC0FiaKxKmBzibBWN3VymrZRUNaicPRJ9NkZM99c9jdMX0oibyJvgdBBhlPnJ9iaaNBbURB6JSTicrMdicROOQ/640?wx_fmt=svg&from=appmsg) 
-   所以
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPuPF5BgpMNhKicxe0n4yReYOmwkNKDVeoZQ2dAuvaRPnE99lZkLFz9vqZaSYLxsYGmEz7MQH6ib1ianZgnaT66qIrhQSQGMO52XZQ/640?wx_fmt=svg&from=appmsg)

这正是图中的：

-   以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbNsZXqqPxLHceU4ChIJUNXQCoC7jMUI0H4fOwWuvmxjaLoyDSlezHnBJ8CibGqSe4OAmodjpHvDPxQRn4JssoAV2308G837yzNQ/640?wx_fmt=svg&from=appmsg) 为边的平行四边形面积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YLJwtROX5CPF9mCz6DJ0pmDOeb03AjMTVG139REaEsZHlVyLiby5qVVCicaCDazN2h22CfwPP1GLGOKQD8ylGkyMfdMmxLnKL5HA/640?wx_fmt=svg&from=appmsg)
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4lr19uh3bBYXvc7VibMYcMoYd5cRUANA0aR2whhvw2bbPibHe0YAxnuWzwqPopiaNmduLsQL0dQJOt6YbiaQDOKlKLkRelc3Qa8GoA/640?wx_fmt=svg&from=appmsg)

**直觉总结（偏离计）：**

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSXWJE0tRuRveYQJQmiaicpZAVrclodSvcn61rWNr4XyNIicEnzFCJamm4HSTlotJpNtWL6zb0MWba0ZnN954ibJKTiaxWfeHyk1MP3w/640?wx_fmt=svg&from=appmsg)
    
    没有偏离（共线）
    
-   越大：偏离越明显（越“横着来”）
    

叉积输出是**向量**，因为它不仅给“偏离量”，还给“偏离发生在哪个平面、朝哪边”的信息：  
![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUIj1bTia2IHe9rQwiblXZ2d9GVgXyKt2ZbbPwyR8MZzswQ55TibRRI2Kas1GlkINFhgkJUFJgt7eAnYgpSGejNbaTibImBvICyKVqw/640?wx_fmt=svg&from=appmsg) 的方向就是该平面的法线（右手定则）。

* * *

### 4) 右手定则 = “偏离的方向标签”

在三维里，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn1xb4RPiaRVWnXMZVjA8Is8oqsZv1H2JmRZz6ibjyJI4Y7bGF8LE587r53Bo8NuJuERPPt9SD7dTy3xceKBlZ3rCauXOL8ZGr7wuw/640?wx_fmt=svg&from=appmsg) 到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn19PnSz3VQTgzZ0cM8dA5E7T9MCWlsO7UXZgSJINHwT66cv6XebrnA8JVibt75bnRIciaMpvu4bWB0k6NOzP6dWBicYW2caWuFA46w/640?wx_fmt=svg&from=appmsg) 围成一个平面。叉积把这张“面片”贴上方向标签：

-   四指从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VicZjGH2crGLXJ7cRiaMCIgK8N5TSF3yNQusiamwdjXViadfLiaaOUxibSzCh4ANLwglSVlaffQXVyUgic7BGEnqUmffYaU1ufuElWwiagEzreRad0A/640?wx_fmt=svg&from=appmsg) 卷向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjTibBW1Jz095PFmlriaE1wq4lZRGe2I6l6GmcrDzU9BLRoY2Tv5bymDxZQQa40cj0LicxRtWG0bhpCWGv08xNvyiaHCU0iascsQLwcCA/640?wx_fmt=svg&from=appmsg)
    
-   大拇指方向就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0xyia7g7EKxZ7UkvlOjmtWc5dKxOdsJzvUIvkaMw40lR8mibH9jArUAnA2pvCsjKmAmsBcDcmsQadGJIdvfkx3Pn6Lict3t1mOtZLA/640?wx_fmt=svg&from=appmsg)
    

所以交换顺序会翻面：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGC6HNdDpus6kdTYajgQpLmCJMEqWmjozrzzYo22Qz7RDX9m9oc3iazppOiao2T7j1ib5SDiapzLofmUyRzA197w5ssEibvAGUYnjWKQ/640?wx_fmt=svg&from=appmsg)

这就是“有向面积”的三维版本。

* * *

### 5) 一套最直观的“黄金搭档”分工表

给定 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzFzW1SMdvuWE7GVsjrGmUMRs3qWtFpmtKVbG61V2uU6Flo76EFZm1JmMesJr5s8ziaVolQjyz1AGiaOdWyTExbzq2Cm8XldSibfag/640?wx_fmt=svg&from=appmsg)：

-   \*\*对齐程度（沿向分量）\*\*看点积![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9bPBvoicaLWxH5A8oUK2gYv6uIkh0bIE0EDiaT0EJt8dwLQjo7icZ8kZH6EUc09pibyygO0pTbvfy1EBNOJ0ese8mEMeNZ1RbPYf7w/640?wx_fmt=svg&from=appmsg)
    
-   \*\*偏离程度（横向分量/面积）\*\*看叉积![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgk8k7GPLDfHE56Daa2VDb2e9EujmloxJx4ggO7ebbnxzdz8ibibygLibxlE4sHiaKI0nZVS2cWJbbVrEQKjZhiaJWK3myOYNgtpPcfA/640?wx_fmt=svg&from=appmsg)
    

极端情况一眼判：

-   同向：点积最大正，叉积为 0
    
-   正交：点积 0，叉积最大
    
-   反向：点积最大负，叉积为 0
    

* * *

### 6) 一个三维整数例子：同一对向量，同时“对齐”和“偏离”各是多少

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNaKCFQic9RBw5atRWOAp8FAaR5rQycuibNLIC4Jf19Hm25sibTHmicvuxroiaia22NvUFK5g0AGKJCwUz7Fqry5icGxtia521M3AlHOmtQ/640?wx_fmt=svg&from=appmsg)

-   点积（对齐）：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEAkQjbmZiasLrBL2YlaXh8R5zd7PeKohjrr5AGFy6IBZO5icT6RlhsSIIAYHeeEOSNChiagAiczEnO8cUZDEBXVwmgklAQ8RsIym4GQ/640?wx_fmt=svg&from=appmsg)

投影到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgmnc9bicnBMMqW7hhxl1lZxudibxmJmzk4IoWriaT3r4NeYic5ynWt9jFCn4JHl5xkA461n36hoIhhR4CjeoUmUawv1FKccRxeMAxA/640?wx_fmt=svg&from=appmsg) 的向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wjtXSqaicgyPHFsjHMT39Iq8wcAGNIgh5ZCkcNibPE1Ge6YNZtZ0J8VhIWvn9MX44X5nzY1sXn4ArbeomG3QNojfqibgtX7ibrmkro1EOicPwicIA/640?wx_fmt=svg&from=appmsg)

说明 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZAML9SLOiaDJSDLp6iaaTtIubdYZ7K5kBmzm6kGYXNwibKGThCVQ9uibhrAey6gmlSU5uMaCFDcqhtV6HpJibC9e6xJL6oQ3jzfPyzw/640?wx_fmt=svg&from=appmsg) 沿着 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yjwNFmzI2T6god5iaZkHHm8yVO3u5OO0iat8m8DwoRsdVqUCuaXd6u3ibB0fvLWQhPBOIVnEC4GdvybhwH6fujcvRljuJoh41Zlo3ibpYzCPWiaA/640?wx_fmt=svg&from=appmsg) 的“对齐部分”正好是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1WEdqibvUg4bTjdD4HXDJZwTSib8XoP9AF2JMcI9bw2icibgNxK5RIDpyfEC2tJjianhDdj9mOGrIx18qZyGBic923iaNdkth9qFnmndA/640?wx_fmt=svg&from=appmsg)。

-   叉积（偏离/面积）：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Y559V5uMGT2R6YCqp0sAntwgfic3F446gebF8Kk6n2ux0icMEX3Sr1iav4XljYtNNplkPM4dNcfo3zdX5WzrTDvgpfapNb6MgHQ3rz7d0yyH0g/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUDYfvGOqXdTlXxSRDbVdS5T3m7E0Y0xaLCwSggFHC8jRQEy4u084JYibRDicCLZ82Ccbia8WoauiamX9XqZwYcuZm9dH9PNeiaQtwgg/640?wx_fmt=svg&from=appmsg)

这就是以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7HcuHbicQm8QNOoAibfTAB94k0uqCoAY0RLia6QDpLJneia6F9Xv7AmheYicskGDmw9um7Tsq5fo2ViaicM2BUadP42R3ksabMmdochcg/640?wx_fmt=svg&from=appmsg) 为边的平行四边形面积，法线朝 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgkYaewA1TcxEs3QRBibWGeHE7nOjNsg9jWtxf9sdQDwicIEwsecBCcwdLgyv2ybvmpECPkAsInzfm9B7QrCnl2tY3jRiaWGKLxbPw/640?wx_fmt=svg&from=appmsg)。

你也能看到“底×高”：

-   底 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7FibFibNc3QYo97Mmk778SkGa0YbAqXaIgHQsOBYqR80cszpGp4hZgeARn1sziaAQr0FuPDJm60j3zqOiaZVm4oibJWr2IXcRYcuaqQ/640?wx_fmt=svg&from=appmsg)
    
-   高 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yjwNFmzI2TzqLPiaeyJtIcdWngSO1THz3O0Iia6Y6yCicNOwQdsbeE39s5bQFaxX6Rj1A7zKoKBI5gcTKDjwUmDpGmKOoRJ9ia2UkBtzyBu5ScA/640?wx_fmt=svg&from=appmsg)
    
-   面积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWKlQ4LL679Z1C3LeGadoAQFBPIJfJXvWibdMNECx4O0FAXEnzVgSEzxxogOu2SKpXTRQLljhicRgJurwiaw82oibQbew8UzqnW11zg/640?wx_fmt=svg&from=appmsg)
    

* * *

### 7) 最后一句把图里的三要素串起来

在那张图里：

-   平行四边形面积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfBMIBr0tfLGEUIaAWFxvHQn5rEGFgJ3mMQxEJiamgpiaOEtOKsnxfpmic7hOquARlZAficIhrjXR5WmWuweicnapSGmwwyBSzzeVj8g/640?wx_fmt=svg&from=appmsg)（偏离）
    
-   夹角  同时由
    

-   点积给 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ov2vWVk2QdPLXpDNfa0h8Pqsv1CuCvibHr8WNJKQgIvsI4Unj8tCrTxyriczXEhGuQzFzAZrY2MhRuibf0slfVVgqEMm1reRwVYWw/640?wx_fmt=svg&from=appmsg)（对齐）
    
-   叉积给 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZbTW8mQ9Qkmljq4lGJ9DaaKtW890fHofhbW5R79S0diaWxicwYv0n74JYWqrfs2Ml5MfvYgye3GpNABaLhIicaXR9LjElibYe26ia4AM42AFNxKQ/640?wx_fmt=svg&from=appmsg)（偏离）
    

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnKnrmxPT5bSbuy4GXk7nL54aXGkVrBg0SwI9UIYOb7ozNasZmGKHicsMibwYFGtC0gtjWatA2U6LgWcSfiaicPUmuKe4P8K8HvHzjw/640?wx_fmt=svg&from=appmsg)
    
     方向垂直于平面（“偏离发生的平面”的法线）
    

  

```
import numpy as np
```

运行后会生成 `gif`：

-   u 固定；![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Asvuw3hPEXVq4EL5kI9ciaBqmsQZx3mziaTaZulefZP6yvwJia0kmWmMKlXYSnw6s1yhrzhU4WCQTU7By6ysb4l0cflw7riasAyAfUTP6iaUGkiaQ/640?wx_fmt=svg&from=appmsg) 从 0 增长到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK2LlDhDjtp6wwMIVss9yVKUCHCh0JGh9tcCtXnibJ3uibRwPLaSX1Nwl07mtibFzEuSqkrXsHUqzYIJe5VQC0RTPYGX5QeJYErLug/640?wx_fmt=svg&from=appmsg) 
-   平行四边形面积（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R130D5NYWAiblHvX710dpvw0k4o3tPOjDAiaUE5ryMjZ480gB4g6MfJ64SFUrVzEk26J42Z0DMXbicEaIECrhz4Y0uey70ErYF2dWQ/640?wx_fmt=svg&from=appmsg)）同步增长
    
-   左上角实时显示点积（对齐）与叉积长度（偏离/面积）以及夹角。
    

  

![](https://mmbiz.qpic.cn/mmbiz_gif/sVzeakRoocvIk0s7dQwC0323qCT00gFLR3atGnTtrmia8288j7bIL9LicjehW6HyRD83FTqPUibnd5P4UiahoCKp5b9RDMFybKPA2mG88fCH7iaw/640?wx_fmt=gif&from=appmsg)

**GIF 上部**显示一个图例（Legend），并且用不同颜色区分：

-   **蓝色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm20zz3dZWiahznGb9diaLTKQc1Dpibv5gq07K9ArhQcLBIcoWCUy7lLjjFia5o0JRkYMMl9xq3TbAicdcjNgKumJevepIFDEqApNb0sUA/640?wx_fmt=svg&from=appmsg)**
-   **橙色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAD1l17iaDblQt0IwtHRv9RA9iblmt7NUEppoAz8o8Kt9ORhMzHk6ISOjCPzmuibRgnBT4UhaHUW7GComibANf5jsTARbgn3ZSyDEBQ/640?wx_fmt=svg&from=appmsg)**
-   **绿色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7FdtIfkV9HKic5qmEZmcvldYdTwbq9oSJNzWb8dibZ9YBrGfb4fQqDdrwEzrDvXVbvhdaWvXGTVW8pchTQpCDdfNSicgqaU6tzlFQ/640?wx_fmt=svg&from=appmsg)**
-   **红色弧线：夹角 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9YmpPL7yLGFMgYiboApzBjMIuMtBpfK3xpCGfVcUMHV7elISwRSJSpUCqzbRT77KeeUIxqFwpBmwOfp1oVayJ2ML5SDLvNlBnxw/640?wx_fmt=svg&from=appmsg)**