# 向量外积 (outer product)的几何意义


> 原文地址: [https://mp.weixin.qq.com/s/-K4p8okup5AeSKBZBTEiOA](https://mp.weixin.qq.com/s/-K4p8okup5AeSKBZBTEiOA)

     大家好！在[《矩阵的“内积”和“乘法”》](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487945&idx=1&sn=85c57557c98582b13dfcc90c85b1b62c&scene=21#wechat_redirect)一文中，介绍了向量的内积，今天来了解与之相反的另一个概念，向量外积。咱们用最通俗的方式，配上真实画图，来聊聊**向量外积**（也叫张量积、dyadic product，记作 **u vᵀ** 或 u ⊗ v）。

**注意**：中文里“外积”有时被人误以为是[叉积](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247494396&idx=1&sn=1bfe79390052c4e8f3c443ca7434a928&scene=21#wechat_redirect)（cross product，那结果是一个垂直的新向量），但题目括号里明确写了 **(outer product)**，所以我们说的是**两个向量相乘得到一个矩阵**的那个外积！它在机器学习、图形学、物理里到处都是。

### 1\. 先看它长什么样（简单例子）

拿两个二维向量：

-   **u**
    
     = \[3, 1\]（红色箭头，指向右上方）
    
-   **v**
    
     = \[1, 2\]（蓝色箭头，指向更陡的右上方）
    

外积 **u vᵀ** 就是一个 2×2 矩阵： 每个元素 = u 的分量 × v 的分量

  

```
[ 3×1  3×2 ]   =   [3  6][ 1×1  1×2 ]      [1  2]
```

  

```
数学上：
```

###   

### 2\. 最核心的几何意义（一句话记住）

对任意输入向量 **x**，外积变换的结果是：**M x = (v · x) × u**

**超级通俗的翻译**：

-   先让 **v** 当“评委”，给 x 打一个“相似分”——算点积 **v · x**（x 和 v 越对齐，分数越大；垂直就是 0；反向就是负数）。
    
-   然后用这个分数去**拉伸 u**，得到最终输出箭头。
    

**几何画面**： 不管你从哪个方向扔进来一个箭头 x，**输出永远躺在 u 那条直线上**！

-   和 v 垂直的箭头 → 直接被压成一个点（0）
    
-   平行于 v 的箭头 → 变成 u 的很长/很短版本 整个平面被**压扁成 u 所在的那根线**（从 2D 变成 1D）！
    

**生活比喻**： v 是你的“耳朵”，只听输入信号的“强度”； u 是你的“嘴巴”，不管你从哪个角度说话，它只按耳朵听到的音量，沿着嘴巴的方向喊出来。 世界被简化成一条线！

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooct0ebDcyW014ANmtmibKtgD5anQxRzks6Rib7kXOhlQEQib61hKYxALOdzHFy36ibjtrbkvOZAoAr6LAjMOr4PQfcTeKuRsbjpxdQg/640?wx_fmt=png&from=appmsg)

向量外积（outer product）最核心的几何意义：**它把两个向量“拼”成一个秩 1 的线性变换（或一个秩 1 的矩阵）**——所有输出都落在同一条直线（由左边那个向量张成）上。

* * *

### 1) 外积是什么（先用一句话抓住本质）

给定列向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZbIIOp8EfnNic2AoibuwabQsUnuiaZEKTzp4iadjQyQicsaMpcmgibxfYP9ibWgEF6cfJQVlOrslPEnm0moLzYsWUkqlLQsJASPxI6OAw/640?wx_fmt=svg&from=appmsg)、列向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4oia6icrTHibBicZUqf6eyGXp38f5FbTjhuqxx7yIHEJHN3mfccXDyGjxCq0SMQtQgKva3qia7jlsVED8TWrBf91KhYQ5Uia0PibvKEkZw/640?wx_fmt=svg&from=appmsg)，外积定义为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtTQX9jRicjItD0eDk7lJibxTS3nN6pshfTFEphVolnCopOn5IS5twwhsM9rSlX8nICV9GiaQUkksepMbeaiazoIn8e0C4SJMc3AKFA/640?wx_fmt=svg&from=appmsg)

也就是“所有分量两两相乘”组成矩阵。

图里的例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEIAVX6hBqvJzdlexN1ic7MXsw2neXv4n5A7DjdOzGXsVCkO19QIdHkorJqnvRAp1jlgPsnHDkmDsWmWp2A7E7Ws1dGoXQceoWMQ/640?wx_fmt=svg&from=appmsg)

* * *

### 2) 作为“线性变换”的几何意义：先投影成一个数，再拉到一条线

把外积矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7JTbC4DY3EzaaKIibctyXx27pq9WpUwWrbZgoXr5XdYPa4aqFK2A8ZKibcB6vzKSUxYMd175xeE9mFZtvurTX3FwKK76AyhyQ5Qg/640?wx_fmt=svg&from=appmsg) 作用到任意向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZEAAZLp5uQ8b1uiae9wickU9rdajxkFuCr68ZMt7s3eeJiahB3uf7yMSR5tRqqxUgBR974ju8N6VkS6jKa72LjicvA994OuuVfmlkA/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYIcLXiaCEMK4kPmKZRXhUJUvDoaWSFOC9oPdfrRFwttQLtlibbvKb6eHw9ORdcR9rgbYel8qNkWh3zSJAU1Yf3Z1icH8koYftxWCA/640?wx_fmt=svg&from=appmsg)

这句非常“几何”：

1.  **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic1yXpaT2jQYRAic9Zm64xOpibO8LJ1ib1IuaUP8omib6t60o9ljEBG7eFfeOB7DjokvXI8ICYb0ib3LXic5PnmPdqxUoDdGv7BTbMUOugemXSGQcA/640?wx_fmt=svg&from=appmsg)**
    
     是一个标量：把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5G64ujpmNjiceNIQkObzbMYRFfvUVG1NU7TT7187xS26reHCxwjXwQov3zCQ3nUZWfzXuaZcic3vezKfUZNiaaPBVn3mnfTaJ2e0gs8buK34XJQ/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUgkToJrB2n4TF6qQErYsoY2ia7vlbco5J5cck2uMzk0sNQc77LRdzrSCziaJl5S5iag27syxAzF0wrQgBadktXJoQXQAvEic3LG3jw/640?wx_fmt=svg&from=appmsg) 方向上做“点积测量”（可以理解为“沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuXEgczb0uxfAqQicwbFnTltSRphZxsmu3McVEaEyEBhsG2pqIKtbgUibuSlKFPiaL4bhjjRMZo9vicpBxSrJ3qQtxibEMYfbkDTu0Dg/640?wx_fmt=svg&from=appmsg) 的对齐程度/带符号长度”）。
    
2.  **再乘上 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5loibkoopBibHapeoLAYe2TdeRErFTbdRQ2yPtvy2RtJsn2RaZ6tRkJAvWkpU8X91lgEkljj8rUvnCtkevpowSicZQXibCEGzvR2bQ/640?wx_fmt=svg&from=appmsg)** 
    
    把这个标量当作系数，在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaIc5yY6DRZGpOUqPIansDKbtvRqib8f5WcfzbXbfDhicDN3SrNZF7TI0UruLhtuVLpv8eg6MJgCiaeUgbBBbibaO7zWtnfDOg4ibYZQ/640?wx_fmt=svg&from=appmsg) 方向上拉伸/反向。
    

所以外积对应的变换可以一句话描述：

> **输入 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5Mtpn051rPlnoYILkMg0Ro0mQT4icBfhvlccg6QGr3U8oQe6ltEuxks3ZsYWf7tqmWZwKStLR6gfNGGo2rPicgNmXZmUwicA6iaODg/640?wx_fmt=svg&from=appmsg) 先被 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4s052AIBFVmE2rhblY1h6pcPHJPspC7K0iaYBZ6y0g4hKhHKPJZiaiawPPYap0qYq9tplsiaThYXBgJEqicSiaFlnAnP9ticnESAMhxpQ/640?wx_fmt=svg&from=appmsg)“压缩”为一个数（点积），然后这个数把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUMnDykiaOdebghKGCP7NI9LyNQWdribZ2WWtFAGccSATkPQQK4Eqz362RtK7srNkZqxFibbLmZMyUlmXcnP1jTtZkzmBIjicJUW0MQ/640?wx_fmt=svg&from=appmsg) 缩放成输出。**

####   

#### 立刻得到的几何结论

-   **所有输出都在span(v) 上：也就是都落在由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdTU9ohOYhMyqT1qrmdKsv759ylXRZiaQpPFAb8dXR53ibn53h6HklEnE1iaQZJjAFcGGhiaN5ZciaIJA5YJURZDJlDWNgiaZs4yg2WTA/640?wx_fmt=svg&from=appmsg) 张成的一条直线（或 1D 子空间）里。  
    ⇒ 这就是“秩 1”的几何含义：**把整个空间塌缩到一条线**（除非 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0YgK2hVee0VNg4sIuGhkSkoKRibMpgyA3EAnibnV6vEicxa7u0IiaGm8bEkS08G9GrYFJja63NFI8NEAdxuTHwnNQuL7ZfVwMtpDbw/640?wx_fmt=svg&from=appmsg) 或 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAflnRsZXIGzKMBTC9iayHtrV7r8z08LIKCRaL9W0EuAFa9WGic3EJkKfOlRdTJribNOV0OiaSxxY6mbEte5ArtU2QrjO7Kz8Sm57dREQ/640?wx_fmt=svg&from=appmsg)，那就全变成 0）。**

* * *

### 3) 从“列/行”的角度看：每一列都是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqP2KVjNIhwAoA0wkWBMxpgAxic9DDS1OCcDwlQ7GLv3ibEBVoUL4Ayice9DZnVH7kbuul6I536YhB7WPn27DVbT7tq2eKv4270OUGw/640?wx_fmt=svg&from=appmsg) 的缩放版

矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1Tw4fXxjiaLGXW40txpibWCj1ntB4OGcHMcKaVYJSic9bdiaBQZ3ztMZhXeIp5qIGLicp51WYAaAQzRWeWSPPVKBhXdM3b4EO0ORrGg/640?wx_fmt=svg&from=appmsg) 的第 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpfya7Pzia2W5Vp0SCksQQV29FtHOeBRQAlJFJZibUPJ28KW8bOUQkOX4uiacVHl0vwaT7icFcvERU2SNy1u9iaSTtgGbjVJO9ZPBRQA/640?wx_fmt=svg&from=appmsg) 列为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRY2GOzPvqU0LtPnPC4F537sZIcPlictUtuvrLPmPHmyQj7jjjkXoy6ibItzlcKIKsskkHxRHHgjtUcKAGyEofz8cSEOZyyT4G1diaA/640?wx_fmt=svg&from=appmsg)

也就是：**每一列都是同一个方向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaoITJ89tQyPey51OGcRAiaGrTyS5duVB3PElUe5UbYBL6UibLibobp3HXYHweYgohdVtXk1GluXdzgUZriclqHl6kuJTfOKb77VPicxgrCMp0JQQ/640?wx_fmt=svg&from=appmsg) 的不同倍率**。

例子里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pV2WXayXwydNGftPOUeEEE3KoXfKMpZUhro9eoQEVgeiazZN6XGpmcUtwAPBZGLaaCYibxv7tEWicyxneqibpyyaXvFPLD02eM7icibg/640?wx_fmt=svg&from=appmsg)：

-   第 1 列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMPbh3XPWauySlLhQoB1xKAiatTEevkEiaYMbRgZtEFmmJ9Gticdmib1KAxmgvn16PiaVsb5zJ6zA1MRdWGr3UichhGIhrflA43y6H5OQ/640?wx_fmt=svg&from=appmsg)
    
-   第 2 列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7l1DtiapIyeBM0EnWx9DSibPCYcHk2eaGzfVZrnBAeGE1W7EAWEpgVeQQgzRn2BwpycT0n7WfTxD3VfdCN1xEAFGZnL8daJTibhSBkOpMyVFNtA/640?wx_fmt=svg&from=appmsg)
    

所以你一眼就能看出：两列共线 ⇒ 这是一个把 2D 输入空间“压扁”到 3D 里一条线上的变换。

同理从行看：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGZykN5cNPUlZT3AXs0pthiasJibTBqOACjcOllBYeqUEg2NFGRpPJ0fUMUHicKT2lc4sHjm4sf8X2TT6ic8Fgiash0xS6XGibaG1iaeyA/640?wx_fmt=svg&from=appmsg)

每一行都是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7B8nVEBQSs9WTyOBOsfUEfIiaLgG3gxFLeicN46LbZicqDxwap5aOiaicqZJNEkjRUnTVIicTgkZvLJ5ctAGBdMibgI6PicCk0JmX0o39HsBzicTrlLRg/640?wx_fmt=svg&from=appmsg) 的缩放版。

* * *

### 4) “面积/体积”的直觉：它不是叉积那种“给你一个垂直方向”

很多人会把外积（outer product）和叉积（cross product）混淆：

-   **[叉积](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaFMcPkuUZrPkjZCSH0lCTmtqRdHL4vK49QqAorOfJrsDZR7rrXpgjfqsofBvMhQ0nJiaPmicp4yN2O4azbCibIHSb43NWguWv07Gw/640?wx_fmt=svg&from=appmsg)** 
    
    （只在 3D）：输出是一个向量，方向垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLf02EoYvEicDNzaicfXkFmPNdO4QBGSQNicVzib0qGz39QA5zS4FyZDP9A3I9k2U8ho6JricFPSQiakIL8ZcHlFxfPksN4kIuVsTgibnQ/640?wx_fmt=svg&from=appmsg)，大小是平行四边形面积。
    
-   **外积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQAeRzNbibXN4tic3ibcpdQqRKaiaxk6NacXVFZHuvCnoricdUAbtF7ial4RADx41SjHtEkjN8cwMDfL6ZEwZNokicUafkODfQXZKn5JXA/640?wx_fmt=svg&from=appmsg)** 
    
    输出是一个矩阵（线性算子），它的几何意义是“**做一个方向测量（点积），再沿另一个方向输出**”。
    

  

它更像是“**制造一个方向性的‘投影-再伸展’机制**”，而不是“制造垂直方向”。

**叉积是否就是法线？**

不一定，但在 **3D** 里它和“法线”关系非常紧：

-   **叉积** 
    
     的结果是一个向量，**垂直于   
     和** （只要   
     不共线），所以它确实给出了一个**法线方向**。
    
-   但它是“法线向量”（normal vector）的一种，不是唯一的“法线”，而且它的**长度**和**方向符号**还有额外信息。
    

  

* * *

### 5) 一个很有用的“强几何事实”（和 SVD 直接连上）

外积矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPIOrbqmIryIY0H5aBeJSvSyFuibICBRraY75Axhcj1ySfwxZYCtXR14ZgS7g6I4lycDJ3Gtico1S9VCQp7CF6CRwXDCQET2ibsDiaA/640?wx_fmt=svg&from=appmsg) 的非零奇异值只有一个，而且等于：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0Coc1rdZGC4cfTOZprib2rCial6K0MA6Phia3HuGJibbNgp5w90q6jeq4tCIibJfqibuCibiab4AfFpYIAgyjzeYHf1BJmiamiayYzHXNhMDAQ/640?wx_fmt=svg&from=appmsg)

对应的左右奇异向量方向分别是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbt3hdO1KkYaSiaFsNNbXFRtqiawWbGrCPjCQxFLJnF6BSbpVmnpo0RfSSJtlFPo62Ql9535kSibxA7XuHuGr0ibGwP4TDwia4WuhRCg/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0fYHsQf0o8QqqgFk6wZibDbtwS5hunATjIUEOnfticq7XBKRbibibFBw1s76Z6g8TBDL6IEpslbLIvLTVJt36nTFK6G1Lxgow5ibqtvw/640?wx_fmt=svg&from=appmsg)。

几何翻译就是：

> 这个变换只在一个方向上起作用：沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJN7qhICEoYxkeza4aib9qMyqs9dZOsYJiaZXia2FDKsxicSI2bXHEiapskaNUn6jvP8hSibBgRlh6yekfuic9OR480YA3UxoiccDa6BCYA/640?wx_fmt=svg&from=appmsg) 的那条输入方向被测量出来，然后沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7w5fehvkhDibxrXIT2GwcuBdNXibEf1rjlbJOiaVR7tg0sCwBeyxFarXLicwA0icaQoGr6Pib7EoTpDtsC0YZ4O7ibcaF0vzBEpRCTFkwCeTbR1y20Q/640?wx_fmt=svg&from=appmsg) 输出，并且最大拉伸倍率就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFatnicVtXgK9GFtIZvic9ut313FNlf3sPoffGXAI2qKiblHX5KnTIxFYEdYDcuqYyFKCZd3O6YxckUasxyoLGIctlmSWBw6aw6G9A/640?wx_fmt=svg&from=appmsg)。

* * *

我们就用一个**2D→2D** 的最直观例子画一张图：把平面里的一堆点（比如一个正方形网格）经过 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrA6biaGW0B56PFmxF7mo5VibZ0cIpo3rKVKDTyad6ZcJTpP2GJzdwjmk04bFZrat7txRuURiaL39bmgMYNmeuj4J3iaNVvCV6tB0eDA/640?wx_fmt=svg&from=appmsg) 变换后，全部塌到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7B8nVEBQSs9T7siaIOMv3Vezd4E03iahO4ZfXJXSGO7iaKCXfClIaFuundlFaIdo05DednicCaF1ia0d7VgVa8zODIANvssoOAsQxDFzeDayVkiclQ/640?wx_fmt=svg&from=appmsg) 这条线上，你会“一眼看懂”外积的几何作用。

### 1) 选一个最简单但不平凡的外积

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiadbX8VMXiaLzIOEsEzlVVoJXeHRbhibaiaxlYb3rib80H35ia2MlRCfAjWQL5111IZy9ur2Ngp3D041hwh9iaPQLIkEocA4VPJoRW2bw/640?wx_fmt=svg&from=appmsg)

外积矩阵：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1YLp9pjToE0ia44DPU98XywCTX9zzpA1OxlsC4b4zcHXnM1ibkTab1CUxhn2BIspscmgoI32RCjN6jyurhMvqQicyjDk2vWVe9oXw/640?wx_fmt=svg&from=appmsg)

对任意点 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUgN8yPAX76cicljKxEbNGjibRnQGXdpjQXSclmicicYR9VE4znkmexvSFjWuhIxO73SWla62DMH8qk5efWA1m8MC3tvy0WichvmTmtQ/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBvmpicELvHp3L6DryLoA7ezA4XNIGNTPCUvsQZL7R4Zy4A59BYM7n3E4tdico4diaicLq9PhL5845gibvIib62kELpQG15exTf42BJSQ/640?wx_fmt=svg&from=appmsg)

#### 立刻看见几何效果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLMAK0fssdBqhW9nuEYtP2qRTZosHsY8E9McktjzGKQA14S6NxeLRNBCibsAiask2hm6URxoCNkUfjnAspbOTPyPrJYRZEzt0PLFw/640?wx_fmt=svg&from=appmsg)

也就是说：**无论输入点在平面哪里，输出永远在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wjtXSqaicgyP2iaufkEcicPQBuZE6zmqSbp8QFLsZOOAtXpTiarTZo7icosHfoic0DvIichNEByguPkGtXssI3iaHYFYRBKqKZuRuuufxZSHq3DwQSg/640?wx_fmt=svg&from=appmsg) 这条直线上**，只是沿着这条线前后移动，移动距离由标量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5GhsssEMjRXP6QhwnZQ8l32q8Gwib9bqZeuNibcKvRANSE92jxvM16hGmAmwgCJYiceHSB0qYADZLzp8NYbKCicy9EoodktfHcUzsTff6Km5kPjQ/640?wx_fmt=svg&from=appmsg) 决定。

* * *

### 2) 看看它怎么作用在“基向量”上（超级直观）

标准基：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZVicMU44H5icJ0ibk6zebHkLkpjeiae7icIwpzYRqQ8iad3LtgXf9hSdroS8tOVvhDicbTP3NtzLqLhkhWHUuKtVSamibZGRJeyZbJhDGw/640?wx_fmt=svg&from=appmsg)

计算：

     ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5G64ujpmNjicZYhEuLEicC56OibOggD68a8nianlD0NpfqGxrVIia9bGg2kZswWZcUM60YB4zrf9TPpDPP7x9LCc8EW4KZabAQUws8SDdcvT67AjQ/640?wx_fmt=svg&from=appmsg)       ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6JmR0zp1ezz29JQZx140Q8viawqJItZXxhWtg3HkWLA4Xk8Z6q2FIibPrMiaUOGE4sx1P4z2YKSvbjvU62Jiap14g584iaATyvWRLeOA/640?wx_fmt=svg&from=appmsg) 

所以：

-   **x 方向的一步**
    
    被送到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mqEXRhz8OzMb2oZSLqgIPQ1cG9gD3cuXF2iaWN43hn8nDib8qFlN00ulc8Fu9gs0WDyibAm3NuIvA0wSnF63X8Q0L549MBXKHNvlw/640?wx_fmt=svg&from=appmsg) 上的 **1 倍**
    
-   **y 方向的一步**
    
    被送到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVarCg6UNWZX68X6L9FhLKt2rSMjiczLiaBHk9nTRoN00G6xJeDK5vF66I3iaGue1jYJr2P1mK4QUhHvGVUd3P14X4yUGqHYhqJ1Sbw/640?wx_fmt=svg&from=appmsg) 上的 **3 倍**
    

这就是“先用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDH8N4tps3lSDIbmV8Q57Fo2BUPCiarGbzVzxUx1sXzAO1Aib7swHRZCEam3UOaibNYtdXyD0jB9yibOXK1TOojmq5SrG8ljMwQ0ta6g/640?wx_fmt=svg&from=appmsg) 测量，再沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicfXXOjVvXW9j1SMrYantdIFia8YDD1aDw8iaOJN4VoBia9d7ykEW5OvnIHFbPcTu8LTIr8ZamJBCYs0ItdTibEqM3RbJyudxGeUtow/640?wx_fmt=svg&from=appmsg) 输出”：  
![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ9YDSFWFGzGQRuKMHEleynyUYGicm96dY8wuqjVuGKib8rrqUrtaXqz6PM1nBagnCqczCbknSjnLWeQsfqVstiaYplqNHgejqIXpw/640?wx_fmt=svg&from=appmsg) 意味着你对输入的“打分”是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZdTjbnMib3d8FeNVkIeaC6pZP4ILOj04NmNSj5nN9VGQfjMOx4LpyLFuvorpChzIDPo90nrBl6ZFEjdjjXPXkRF5hhjVTXzhdng/640?wx_fmt=svg&from=appmsg)，y 的权重更大。

* * *

### 3) 画图：把网格点全压到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThia3hXR9icbuvAnMQvUrqauMWdVLuJDyfD6bdFUxibx86ECgpdnyXAecMwcnQxHqkkYnlGjwpbEnx66jD32tPL6QfZvzzJZ2VWsvA/640?wx_fmt=svg&from=appmsg) 这条线上

下面这段代码会画出：

-   浅蓝：原始网格点（平面上一片）
    
-   橘色：变换后的点（全部塌到一条线）
    
-   深蓝：这条线（span(v)）
    

  

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvm88bN0YnG9ria9eP7hlbLX7sDejTxjYWKiaNSNM7Ribh07SUia7EBTv14I6hnsJsAXhIjXHuTDJQwntZMyUEohNjGhocCSFEdgSk/640?wx_fmt=png&from=appmsg)

运行后会非常“震撼”地看到：**整张平面上的点云，输出全部趴在同一条直线上**。

* * *

### 4) 再给一个“等值线”的直觉（更像物理测量）

因为输出只跟 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnfibMfEd3vRiaK7sOGZ4OUEQgupicrqj2ugkCpNuzOMJeWKiaWHA5G3yibKUscYxxiceB7xK7cD4L68EwHNyhIf00rQVGNyxqcKmemObA/640?wx_fmt=svg&from=appmsg) 有关：

-   所有满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb778TjUH8XSQcOykbYE1UoLJb40y1UCJNibBDpia9mgpbMRO4Y710jOCyu4x1icNyjguqUl00wIqynWUPl5hpibaZUqhVLHVoUmHtPIw/640?wx_fmt=svg&from=appmsg) 的点（这是平面里的一族平行直线），**都会被送到同一个点**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDHx6ffoeMd4Yb7CWoKRkeoGLTsSgSAafUX57o1mk9rbtVT69OEV1TPOapebgia9SGy1EITrbQXNia8FKO5QggIIskWtQyLjNK86QQ/640?wx_fmt=svg&from=appmsg)。
    
-   也就是说：外积把平面按“平行于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtm7icTXCTT3JBeebPw1Nibhr5xLWq6xm0ZcP7hgWljAZYgEiaU5tgjoJ4iaL2qicCzxfosibZ4rZI29ic57JQImJ4zgBSGNNict5ZF4SaA/640?wx_fmt=svg&from=appmsg) 的等值线”一条条压扁，然后把每条线对应到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibEzyDruXibgHo20C2YON3icyOdEzkeh8oGBsux4MAp5pJ3IFeibgsDzg63ks9QEpsNJP6p6iajCMEvGNicXQMrH2OX9OSiczZC9SmuPDg/640?wx_fmt=svg&from=appmsg) 线上某个位置。
    

  

我在同一张图里再叠加画出几条 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2XibSSzpQEwicveYXG8SOed3adzJUEiaMYncbWOwqBVRnn1t7ruKvb2FvfQZoMQg3VB6yqPkb46hjmJlbWDfgXxgNkIZI0dJqsTFtw/640?wx_fmt=svg&from=appmsg) 的等值线，并标注它们分别压到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM70Rdb4ngSBiaxljqibptc7XtfXlmicjv1Ng3TO5XRFfqZtfCicgS9k1r3q8JsgBic1z4ricnhGnHRiauictnw3ZCPK72A7KfCPSTibCMfaCpxo0RYbLTQ/640?wx_fmt=svg&from=appmsg) 线上哪里——这样你就能把“测量-输出”这件事一眼看穿。我们把“**一条等值线被压成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3CQ0Ie7qtPgy6DXQrh9UIuTbQzNT4OfsRFpH5IP4DBhC7Tx8Bia1vMicNT9Iu3OW7FYayhCb6VaZvGia2bpW1kziaRznsiadtAAzeLQ/640?wx_fmt=svg&from=appmsg) 线上一个点**”这件事画得更“具象”。

* * *

### 1) 关键一句话（你马上就能对上图像）

对外积变换 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbttvCKugJYyLvtag6T0nqljrpicAHPuKXbUXU7pknwR0icl17ciaXLmnaZT7KAAialsg3icx5ePF9HpQEpoTiayXrVPOFmRPhWja7XDA/640?wx_fmt=svg&from=appmsg)，有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyTutvvBaW5zn5xIiamqWHfVKfibTl4EAOUSSmibjibYbick9qVADTyyffUibJrGgmbQkfXjNYibUOuFvshibK1jQ1ubt3GhlibKgHPUxUow/640?wx_fmt=svg&from=appmsg)

所以：

-   **同一条等值线**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJFERJG6FyVWkF5CMuSkEmeDEiaDChDQhJ4dfJBn2nzoJfoFnCafqQc2b3PgqXwnSpDK87icDTLJITiaudUT55VWJSwvBEo2ib18lFw/640?wx_fmt=svg&from=appmsg)
    
    （在 2D 里是一条直线）上的所有点 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEytzibTic3nrZwURhS0ib62hPmEoA2WjAh3xaOY7ViaW36pKSYzzZ73Gb0qLxWO8sTvEdpM6Ug3Sdf2xP84KJZ1mpYicicvgdImgNUbehA/640?wx_fmt=svg&from=appmsg)，都有同一个输出：
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tib2gb4pagXYIbteqPLwPZszyOvv8yosTic7rFG3pEib3ZScz0UwhFad5LianzUqDgU8pGkUceiaBGGqWXDbk8icY9NQABhRsENtdFLww/640?wx_fmt=svg&from=appmsg)

-   也就是：**整条线**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amaoZdibx4wTETyVXnXXfd3x5NETc6rrY0d8SsPhDUSxicCCc3FSMtmqNdwMgYVkWcw6ibRVI63x3bmgrkyGkoxHZlQibLHcOhX2ytw/640?wx_fmt=svg&from=appmsg)**被“捏扁”成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZCtIhPRswxiaicgviam2icKf4m25nmAiaBfoiaHEfevHial6dnv1BHgrPShJM9vY7THUiacBO6nj57Mgkpsbwy4CruGp7NZhxh2iaRc9T4Q/640?wx_fmt=svg&from=appmsg) 方向上的一个点**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4oho4AKEVDuFRNv8tjzloYCFY6OMMMPaPmkdjIIHhU3dRhKogRVKu1ZiblDqq04pyib3ibHzX9T5gaCq3vUrqyI4vEz3jwZblVmsJA/640?wx_fmt=svg&from=appmsg)。
    

* * *

### 2) 继续用刚才同一组向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gebuqhxYx27mDBicFppuu5rPHDibEvFVuGsibj467StAiacaTXzsIeaS0gYDibTSs3LkG7bxpru6rvCaS0yG5hibp8HicAIxp6cgAFgLpD6VGWyhmw/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAeCUn7tyCPXtiajh3MJ4bK2tzVfYdFSYGibcDTDRAJF8jaiciaruiagzS6YUs8z1uNZWFIeiaECcNtW8wfaMcvHricSYicvoI6cmHibFWcg/640?wx_fmt=svg&from=appmsg)

等值线就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwiaYFULUTpex1gonCDXLINgZWbO25IibB7ibKXfAV0SqqMve8xtZP3dhMbRib80Qlew7sp4zntswIx5Mceg3ibn6gHgERQYl9UNJib3w/640?wx_fmt=svg&from=appmsg)

这是一些**互相平行**的直线。

* * *

### 3) 画图：左边画等值线（输入平面），右边画映射到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpRiaICjNYkMxO8T6UAQk7NQsRibuGT9rsOU2ibUzNicLZ0S7hQyMSSRTTpr9UpjgZiatSRmEIcOEr0SOq66Wy4CnvMrwhfibUmmaWTfw/640?wx_fmt=svg&from=appmsg) 线上的点

下面代码会生成两张子图：

-   **左图：原始网格点 + 几条等值线 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYHk4Iicawx6OAdUJ9pc7L8bPj4xo39jgr0XwHbAHJJE5AORiahZg4YCDugeUlv7iapWhNlYpVs8AVuWyXyJ12mNRUic1NlLSwJcdGw/640?wx_fmt=svg&from=appmsg)** 
-   **右图：所有点变换后（塌到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppcaY8XMfrRrrKJYpUMHScN7snGV0kpQic7TkHGP3jgcCyvHlgBTgup0sQFoFibsCaeBSM6EdwcIGxfDwCInIVkTVY1glWHmuQmSA/640?wx_fmt=svg&from=appmsg) 线上）+ 并用同样的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKaQEQVendlvuRTjPG8GpZicU0wrMVv3EFrzfKkVnet6Bic5aBUy0n7sHAhHSUkkdicVSt1zBwY3NPhNlD8v8NDjPMRxiacsnquYslcQ/640?wx_fmt=svg&from=appmsg) 标出它们对应的点 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb775WXqkPonBIFMdtIJwXlnTbxuzDmfcaOujSt0gBHic7Yvm6g29Zk8RGs0xiavoh4VRm4hRD1ZzJich3xBWkYf134WJDbyCDW9ZnHg/640?wx_fmt=svg&from=appmsg)** 

```

```

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvLNYpiaE5A6v2YHRSWZINdwBWtB41c6cicTI8XqV3j1Te4CBnYMFJmjiahpkicxt7CULLkHqicia6vLiaNIg5kMEyiaFqt5TzYbLH9UTQ/640?wx_fmt=png&from=appmsg)

```

```

* * *

### 4) 跑完图后，应该“看到”这两件事

#### A. 左图（输入平面）

-   直线 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLf0t5d0RNicO8zyglKAL1sVoSibs1HpdVoK8wrIeD8yX9aic9l91K4L5eic8r5DsVuLXz1tO0ibsIPQ7ComQhHGWYjrdWC8z74zs3aw/640?wx_fmt=svg&from=appmsg) 是一排平行线。
    
-   **每一条线**
    
    代表“被 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLMSnWYWMricyddbve0Ug50Z7jXKSCAPmVWNe9773VN5XEPhjNQzYBLCibbr9gywFBDDDLZ0dQAiaiaDhfcDLUYalV7uA60LxOqTrTg/640?wx_fmt=svg&from=appmsg) 点积测量得到同一个值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9RovvtAAjmY47cHODBXiabIib12RkKqN55QtU9jsPHERO5spRL7e0mHE7NogfKlSzcSmhPQSeYvZjxhx7aEkfpjicvazNNDx668icYiaeTw/640?wx_fmt=svg&from=appmsg)”的所有点集合。
    

#### B. 右图（输出平面）

-   所有点都落在同一条直线 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibOiaPAkKSmtBdMDhYMTc928iarth1gY38W9CdbbApyEjhmFQSdm8InHelheGPakVlLf5RicpvpibGkTSYd8mWmKeTKWZiaIjaUFtNDQ/640?wx_fmt=svg&from=appmsg) 上。
    
-   而且左图的每条等值线 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV5xNaS7tAeCWIM8f5DrGaeCia3jNZMic0ZB97Jks7Ie4HRM1WVQ0MQ3U43pXYzerV0HpcevsmGib3vFfMiaoMdWNRfMCC18Vib3cDcA/640?wx_fmt=svg&from=appmsg)，在右图**变成一个点**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScFJ9Nr7fJ7kFibvLPgBicQlfr7HA89Oup3kbz5gxoyOnt52pm7GQ4mRMGpp3tN66XseBEw1emtXcaK85ox1iaOWpyZt97HaIuosvQ/640?wx_fmt=svg&from=appmsg)。
    

* * *

### 5) 进一步一句“最几何”的总结

外积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUKvWIQy5LUcBv3MwkdShcXKIKHu9UpFGiczDeVrqdcGckpn4DaicA5EKQ35Is7JO6HEJbWBfdm9xsTJTI7fCXVZwQwial4A43pMtg/640?wx_fmt=svg&from=appmsg) 做的事情是：

> **用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHxibxibgfJ0gO7bFoTZppWGGhmGbkFYHetAqIRqEpv8DkzcyKnW97tBFwNFAzuCsLOvum0IlObJneDlrqUHz7Vu9XGNTj2NRib6uQ/640?wx_fmt=svg&from=appmsg) 给平面“分层”（等值线），然后把每一层压扁成一个点，并按这个层号 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1E4nyDIaaKfV027HJg38rDRwEiby8RsicbGicX58XUO4AudjtBxicuF61MEiaGhXGGybGdsm3ZnTLYEbEov2aJICuxqTibhYzNb4lgfw/640?wx_fmt=svg&from=appmsg) 放到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvZ4dpBt1PqQncnssmZZJLyPZ2iaoMQTAPajmTqjgzjY8XMibPHmvEia93erC5mLqickd3V3pABbb5WtFknLIIlgXXQZq0nLqYbhKuw/640?wx_fmt=svg&from=appmsg) 方向上。**

* * *

再更直观一点，我把左图的某一条等值线上的点用同一种颜色突出显示，并在右图把它们对应的“塌缩点”也用同色标出来（这样你甚至不需要读公式）。

我们把它做成“**同色追踪**”：左边挑几条等值线，每条线用一种颜色高亮；右边把这些线上的所有点映射后，你会看到——**同色的一整条线，全部塌成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4omepwbF6vKBDLfia4ORjR8P1QtXDo27IULg8L9Tiahotx4QfI95rX6y90pkmFNXTxQhEEicUawnQeLtGxypLDpDZ2s6fpn3ic1T2lw/640?wx_fmt=svg&from=appmsg) 线上同一个同色点**。

> 仍用同一例子：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuD85Dg03S4wicPYUc9VOaPPjcInUrJNqkaPo4c83xKUiamHicjDVwXSCmpHJXSCibkK8OE88Dgu9HaAicJIPB3iaiatehURQ6wAnFosyA/640?wx_fmt=svg&from=appmsg)，所以等值线是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWCeIKia3oT0A6OxvkcQ86S3z42O1GLA1QLLia4pePNtrPrYK2oWia3BsDOdc6NrUhz6YOAlptoTPohsbfz6gGbkM5K8u37hIVjARQ/640?wx_fmt=svg&from=appmsg)。

* * *

### 1) 同色追踪版（可直接运行）

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctVdDcsCjuDANDlfCmzuDM3TtL6waCs0Xrj9bS87WgCJ5plX4UqOaxcTU3aSd1lET9O8RxDmiafBr6icZAyK8n0LaueWMB1QZpF4/640?wx_fmt=png&from=appmsg)

```

```

* * *

### 2) 跑出来后，重点看这两幕

#### 左图

同色的一簇点几乎排成一条直线——它们满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfAmeqVt0BLGS5nWaWUSjA7rxymbPtWDnvWPXIXTcE1jaATIUibKOzX0ZSkw9rWf7ZhAjJC85E635AsZm1ASiaicfqiaOq9Poyfa3GA/640?wx_fmt=svg&from=appmsg)（这里就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1FmWG0MM3WmDGOlngjEvuMoCdBWNickVpcLQC7UHlKNov3zY5TCjn1M7ZIZDnnRmRupicNKjU0wuVcPqhgicpib7fxTRskY1Ot8K9g/640?wx_fmt=svg&from=appmsg)）。

#### 右图

同色的一簇点会**挤成一个小团**，而且落在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXlB8cBo7AMgWCudMm6G4J6yojtqAvic30RxS38aUI21HfTAJMEq2wOZvojhkjjSDdficbabatt07GG5IBWqo7Fw4N4OaSotsOgog/640?wx_fmt=svg&from=appmsg) 那条线上；叉号标的是理论位置 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyaCic154cOc9BoPERaL219K3RicroGNYCNJxOBdCnNVq8oJqNkVySiarVZx2nkBoJA9fiaoibNdhXpUy8ibmxIa1y6enL6jBLkBDwIkw/640?wx_fmt=svg&from=appmsg)。  
这就是“**整条等值线 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibE9BTpGiay11HdA4N2RYdNbcXjvORUvX3UnFCJYG2PoSeC20xbCbtBDmlCVXd1F8hG8KOxHjxVSBkKGaqNT6X1sYGyqmrtlgcpoA/640?wx_fmt=svg&from=appmsg) 一个点**”。

* * *

### 3) 再推进一步：把“塌缩”做成动画（可选）

如果你想看“从原始点云逐渐被压到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg84IFxXV8lVrzD7AtpjWdJk4OhDIPThibP4ypbDRRPd5k1AHzswScc5JMA2nibz4Im5QeWtbBerckUH5ZQvn7ZfoAIDyNg5XsFng/640?wx_fmt=svg&from=appmsg) 线上”的动态过程，下面是一段生成 GIF 的代码：用

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7iaaQxyJyAFunXTDGYViady35cpZd54XXice92xf7zc2nHMEdtibtIyayWqjWls7OQ5GkvaTibyVrL6RjJ1qnyQ79NrOLmQNDzXaj64z3U4MicAHGg/640?wx_fmt=svg&from=appmsg)

让点云从输入平面“流动”到输出直线。

下面给一段**可直接运行**的 Python 代码，用插值

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEBJnxljRw3c9wwgqXcS3mhb5dBiaSLkB8fuw0uHbNVkorj8mHkYsdUTBB8N2kAiaqI5SRyKhicibwvMWIFiblcEmBQfj3bOy8Yeibcibw/640?wx_fmt=svg&from=appmsg)

把点云从“原平面”逐步**压缩到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCraibh34t7cic7ia093d8bOsGAOpMcsdpyaYJ4j2SmeEhBG7G7qicfIRFrSoLSRFIUh8SFib0epSR9aKw6cfiaYRyjHTxyNDhldC96ItEg/640?wx_fmt=svg&from=appmsg) 直线**上，并输出 GIF。

> 依然用同一个例子：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn17WgHlibicgUpACJKLZibmIgPdVxxvYWE0GJel5QTkkicBCtO3tWAdXNfiayibrT0QWYaaIvpxXrJia5yYdy8zT1S0Mn5PkZwVNqvgrDQ/640?wx_fmt=svg&from=appmsg)。

* * *

### 生成 outer product 动画 GIF（Matplotlib + Pillow）

```
import numpy as np
```

![](https://mmbiz.qpic.cn/mmbiz_gif/sVzeakRooctTZCIibEbsr0HUNUqorhvboUKfyN12JFic9HMia1ia9r4L8hYwbKmtbf5R0A2U7Hodn0Tozc2lJLITtC7BglhZap8ktHtKDauKeSI/640?wx_fmt=gif&from=appmsg)

```

```

* * *

#### 你会在 GIF 里看到什么

-   开始（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau85c2C1cIz5NtMGwZaVFOia8eqVYukIM1mWMKdIEsyZZCrxRh7RoSSefa3dSyMbamLRCAnKWXXzB2qcVXlLlzZEAEOoCN7F4zrA/640?wx_fmt=svg&from=appmsg)）：一整片点云（平面）
    
-   过程中：点云像“被挤压/吸向”一条线
    
-   结束（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6lKq7OgTLib6yia6fz245IDoKbtjibQQhSmVtpOed9M1tCzG1eD9kQDAloYNupKvFtnhkKMVUBKsUO3EXnyfLiaYjvCuFbk8ktwO7NBZ2bEjBH7Q/640?wx_fmt=svg&from=appmsg)）：所有点都落在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VicZjGH2crGDtLrB7kz1ANNibx0JtZosQl3qZWeO08fT1RiahsicSWqy6h8mUEJhea4MkxjaDicUa66OYWzTvKmn11oErNPiaibmF3X8HQlgIiatJeQ/640?wx_fmt=svg&from=appmsg) 这条直线上  
    同时，满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicStajfb4HBOyAKkiaaPLepZE41hm8DPI8vT98s9XoibGL3ybINicLMBd1MqVjap1oLOgzSj7KrU2vvRkdfyZQYx3pTKRRvnABLVZA/640?wx_fmt=svg&from=appmsg) 的那几条“等值线点集”会塌成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFSP3PQKibjMBvtGPc49OOOkdkicTqLqeFkf0Mz762bbwl5UOBicAIT5Q7ibWEWvReuTSPF0pP2uicMIqibFlbqbvh4t77NZ5OFrVmicbg/640?wx_fmt=svg&from=appmsg) 附近的一小团（理论上是同一点）
    

  

下面是**左右对照版**动画：**左边固定显示输入平面（原始点云 + 等值线）**，**右边显示点云从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH8NlnYLO7skoHH9lHmRHj1XKBCvusyDnICYT8ibGuGEiaktBH75jc73wxB2rvFsntTg4ib2UxhShD16PYFBAZUyS9VPib1AWUBicRKw/640?wx_fmt=svg&from=appmsg) 逐步变到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fUibIjZURvicIYsicDhgwD9Gdp4kdARNsNqZnzlxNFSxWHPsUvVkAic9BbC5EpktuqRqYZfxWUzoVxhaWmXswIxOjL6bAS27aucZX1OCjsDq4ibA/640?wx_fmt=svg&from=appmsg) 的塌缩过程**（最终全部落到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iblhNyfsNwBRtPTrOzt2qfib0iab9Uq2iaztE9HOWXQc9iasruWxoHibXe1kibcfWaEHiaMvkFK2KuLYs4mUWoHEugev2EuntE2G4Psay6a6IzHIocQ/640?wx_fmt=svg&from=appmsg) 上），并在右边用 “×” 标出理论塌缩点 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCra4jASSIbCesojjvHrDwypNtJFhUaRLFeayh2PBOtR2o7ABJpVw7peqh8iaQABRxj2OYAjYTOSUNlCL9ibWDVJdZyUjNicC2hIcLSw/640?wx_fmt=svg&from=appmsg)。

> 仍用：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaf1iaGhw1JZaWd0O5Xz7GaBflaKfEDiaq3Y2pTzPK8I6YgnATbbxiczhgnUTsrXTib7rOFWZiamyERolQdrHB6Y0WosQvrUuEGZsiaVw/640?wx_fmt=svg&from=appmsg)，等值线：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUHNM7yiae3HwkiacFoda9ViayRH5VO2tTzMStmvhtQ0u4v4gaURrBSteusSR2L3njXljEKibqm80KCIcU848crnPLyC8y7Oibp1c4hA/640?wx_fmt=svg&from=appmsg)。

* * *

#### ![](https://mmbiz.qpic.cn/sz_mmbiz_gif/sVzeakRoocuchcAu3uwN2YIY5HMjI5IjpIPuQhHbZnWvibevlrkzvPt2ibN9dyHhc4uFOIXQcQq31OC0gQVNg3icDk3Fvag5jiaVRFEpBiaWuVvE/640?wx_fmt=gif&from=appmsg)

#### 你会看到的“关键对照”

-   **左图**
    
    等值线 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWHRLeNQmNPuQ57YME3LB4hErZ9ewg5Zxic1rA7k1HjYGibw3icmrSaSFCJnBpMtbD7X1V2156HeKtzvjX0KBBLcRRHsccJoaw214g/640?wx_fmt=svg&from=appmsg)（这里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiabxJp1Ra5UezRSCAFtvzjAGgIpPegQqMPwRciaDcGsq6RV4zzZroRiaFzIEoKX5ibqA8v3mLE5bQ46hDhFRUPcfPwicHa21ExF3Sicg/640?wx_fmt=svg&from=appmsg)）是平行直线；同色点都在同一条线上。
    
-   **右图**
    
    同色点在动画末尾会塌到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5G64ujpmNjicXHEZWibwEGYTlUI5EEQezPGnrF7iaCe99mZX5WBge4LsMMvHbuicFrtGntGWkFEQ76Ee977o4tI4nGXiaGFdhjomhRQTjl80oaN9A/640?wx_fmt=svg&from=appmsg) 线上同一个位置附近（理论点是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPfXhYictia9xjTv1hvE5adPyd2V2Y9MbYQricUj1fPV5WNprc1dnkMyz1hY9uIFnuSnmTViaxhI5Y2Y2etfmBSYicc6EYSsqAdVYd5A/640?wx_fmt=svg&from=appmsg) 的 “×”）。