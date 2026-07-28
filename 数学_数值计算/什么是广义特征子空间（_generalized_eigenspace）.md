# 什么是广义特征子空间（ generalized eigenspace）


> 原文地址: [https://mp.weixin.qq.com/s/2nJLT\_CA-5NksaZLams\_IA](https://mp.weixin.qq.com/s/2nJLT_CA-5NksaZLams_IA)

我先做一个直观讲解，再配一张知识图，帮助你把 **eigenspace** 和 **generalized eigenspace** 的区别一眼看清。

可以把 **Generalized Eigenspace（广义特征子空间）** 理解成：

> 它不仅收集“真正的特征向量”，  
> 还把那些**虽然不是特征向量，但在反复作用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0h4nEIKDdicECibCKt710vXLNMfEckb9uZWibCVzqIaxRfI7t6n2WKzQPr24mX5SJaHU5ZdJANxicKytBUn7YDSEZg2j9icWLhayYdQ/640?wx_fmt=svg&from=appmsg) 之后最终会变成 0 的向量**，也一起收进来。

先给一句最核心的话：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqUibcQwb27nH7wk2IibxdSsRgYWQBLTv2iamyPsehzkps8OB6nlibpX8g1ibhiaKABOpHib9k1oiav0iarHxMD90T5rxA8d8P3ABnSQgKFA/640?wx_fmt=svg&from=appmsg)

这是普通的 **eigenspace（[特征子空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247521799&idx=1&sn=e4fd4be02d26a4159381117201ede152&scene=21#wechat_redirect)）**；

而

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6XqSJ2qS6rCWxw2jCfkU2xmI6NLy4Km62DJw3PNSlNghticbht9T3Ao9BFo9DJjoGSBNo9l3UA1LaGGoMeEfBR1WjNMcX7yjXm3sJiacK9ibB8w/640?wx_fmt=svg&from=appmsg)

这是 **generalized eigenspace（广义特征子空间）**，其中k取得足够大。

也就是说：

-   **特征子空间**
    
    一步就被  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibAv6rZRXGwpSaWzcYibia2jjSywLldL0xZhgB2icia1ZNUMGpptmEfuOytOLlhsyXJw7mQVFBlQNhJYia6ibB7nIwZcFo4qXG5rEB0aw/640?wx_fmt=svg&from=appmsg) 消掉的向量
    
-   **广义特征子空间**
    
    可能不是一步，但经过若干步后会被  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf9BySs3av685McnleWWTj3eZNH2AsbSJt8EsGpqMtW1Fe6txMC6W1a7yQjSn7tOCsevfKdZ7M8qJo8oicLTabe0VvuiaLpvJZglg/640?wx_fmt=svg&from=appmsg) 消掉的向量
    

所以总有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPKbJYTBQMamiaiaBBHjteO9W0YjDMO62k9kO4VQ28dv0wReegPMrc6zq3MyThwNUKib3LTicWUEpKerITrdPQdW8npA9FFuv5AUxQQ/640?wx_fmt=svg&from=appmsg)

* * *

### 1\. 为什么要引入 generalized eigenspace？

因为有些矩阵 **不够“好”**，它们的特征向量不够多，无法凑成一组基。

最经典的例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpT6djXfek4S3hibB3JSNQnj8ZbvlZMFESVe9oRfJicMaDeEypQibAzAkFpjjlic1s9JvbCEadrqRw8cLqSq7IX111oxialibuAMsRop4A/640?wx_fmt=svg&from=appmsg)

它的特征值只有 λ = 2。

先算：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtCdRhHXmET8fNrC85t3Eiawv4KliacIa5gmuQtDlnqEXNxj93mLVZeh0JugPl5ZOkutNSQZ2ibS7t3Hdpbib1qjtUNjiacFDtueMSVA/640?wx_fmt=svg&from=appmsg)

若要找普通特征向量，就是解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL2fjFjj2iatzvhKVMR2klGDVJUelMDhQ98RenD61Op3u8yLaE1EQ48aiaAw7Jp9PiaPILFt0zGHicnjMTKk4bOhbB1ITBiaW5WhhM3g/640?wx_fmt=svg&from=appmsg)

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtGgAiadyhQBFKvfGRFt1CkskUiaibRKUFUyEOTMRe8yteb7AicWzGPhLe0PybN4iaTvjhUkCLGZsV5k9mBzgbskDZrJN91gzS6micmgw/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFRBicmHhib7359momJPnyjLZlWNhKRArDmmjdysgTApuCfmdWfbicLYmGr2voqTicdYvIZyceyQcp0HzzcxJyQSpZCdL9iaw5ZJ5Jfg/640?wx_fmt=svg&from=appmsg)

所以 y=0，而 x 任意。

因此普通特征子空间是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2XyareX3UcRmVr7k9NS3hib5GAcbXPCaiazGuTDHpW3Bib82cKePGboiaC4DDO3DoVxysiaG0SxDzzNxvTTXcvyiciahP89IBkzZhw9j9A/640?wx_fmt=svg&from=appmsg)

它只有 1 维。

但这个矩阵明明是 2×2，只找到 1 个方向，不够把整个平面撑满。  
这时就要靠 **generalized eigenspace** 来补齐。

* * *

### 2\. generalized eigenvector 是什么？

如果某个非零向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2jvOhnnRvPLh3s4icE0JKegibnEUHLjBVic9XQFiag5PMWicUhUHM0KKicehNibnQaT98ZvOcmFySEFT89JkBPWy9hBkfZo31JRvF09Ig/640?wx_fmt=svg&from=appmsg) 满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pYgia2AU1nSPk2LsZWbBBVYY3WCNl73rydqicQBVtbVyXWXOdnibUGpE5TcrTaJOzUWJHIrc2U9V2yicBLDic6ibfxDkoM21Qicj5xZWg/640?wx_fmt=svg&from=appmsg)

但

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoChubaZDZN8xOfZqpLRPndFlibbxJNmry1BibklibFs1171KEb6XibdI6Jh5HavejzRMNqaBlUUV6DjDuZKG6iaR7nsNIvdjEWbaN7A/640?wx_fmt=svg&from=appmsg)

那么 v 就叫做一个 **generalized eigenvector（广义特征向量）**。

它不是“立刻静止”的向量，而是“经过几步后归零”的向量。

这很像一条链：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHwdpVPTD8iarw3fszZ5lIovOW9LoynKzfKExzA6hicQP2SXpibcIGMA4mzgycxHfuhTLnwwvTKQSQCwPneicVvjmZaXcoVuibg68k5A/640?wx_fmt=svg&from=appmsg)

最后会掉进 0。

* * *

### 3\. 上面那个 [Jordan block](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491476&idx=1&sn=54d09c6534a825553384f80d15ee8f47&scene=21#wechat_redirect) 例子里发生了什么？

还是看

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZYpQUTTmsx6GIlnNCsIlmSCe2fiaL8fc5cRqEd01oo74V4TGQmdIP23CEakUr6PXq7AnK2kbib0o4ula1fMFLGh8mJfK27rWj3icA/640?wx_fmt=svg&from=appmsg)

令

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYqVzbRZDjeVWvGqYTySFjibdOiaSRialCFAXqjx3yGibsFL1CCWSpsr9icu4Nj0HobU8rzataZN7zoT9ficESaA7unDhr16KeNt6MGDQ/640?wx_fmt=svg&from=appmsg)

再平方：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2Zaxk6nBREq9nRnsmgEekFTFWLhseZQysnYCXpPlFP1GwMxyDJ1VOEicrKwo6Bkibv3tuDRw7O7qtibCTw4wNg8icUXsN9VSgk09RXg/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHU9Ppaia1iak0tGb0I77GgibyKGqibLI00mXNPq9IPG6Eic5TI1rKIUuymodwFIOMHtDvxZah3z5qZrdgFzp2P9R6U9RRXfB3l9ZH8g/640?wx_fmt=svg&from=appmsg)

这意味着：**对任意向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vf4O3sdIf7qRpznicZzUSyZr8QCO6Rs2cmk70lVyZzgx6D50m2iau0cSYVyeEtx7RnwSEgVLsibM2YrBxtN8g8ic6N2zo2uwicicKsLRbTTTibAA1Q/640?wx_fmt=svg&from=appmsg)，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5WDF26gRGMWcF6ria95ekQLbMibWNZgib4iabE8Un1TqUlpoh2gUpIe81ibESnqdv4YZ7h48z4hyUiasjaHCe0ywicVKZ7QH1WmjQc8ib7rNKnT6IpbQ/640?wx_fmt=svg&from=appmsg)**

因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAHZyDNMib9hts0J3QmgpYF9ceCgH9YftqloFMZaVdPMv4Ac2NTLHKVo5Xfc8YnJp9DYBoHr42jfLIrWpZkQA7x9AghYqGTJuQZw/640?wx_fmt=svg&from=appmsg)

也就是说：

-   普通特征子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp1xqbx9KxgFP4Gp3u5HDxSUGXOzWxM7vEicTB7eAgDzbOB0wBGWUmm9A1KntTt4RRIP1oBdcqLOWrtQIraz4vvDib8OMLyzIKqqAQ/640?wx_fmt=svg&from=appmsg) 只有一条线
    
-   广义特征子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKbCyBCV01fOJNE5SxVbzQEF1kVMlHSxb2A1nwPQib075loAG3njBPdzTiacHBLj9YFOy6vv7EptVOIc2ScmxOGADC8YvCWyDQWEw/640?wx_fmt=svg&from=appmsg) 却是整个平面
    

这就是 generalized eigenspace 最重要的作用：

> 当普通特征向量不够时，它把“缺失的方向”也收进来，使我们仍然能理解矩阵的内部结构。

* * *

### 4\. 几何直觉怎么理解？

#### 普通 eigenspace

其中的向量 v 满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1A8gRA4gsPomSDHpdWEgePAZZW45ynlQAAcg43sLLhlOhqibYaY3DtOwNz1atWu7K8pDmyNyDKVlqdibAYzicVb6H9q2u5StzLS9A/640?wx_fmt=svg&from=appmsg)

也就是说，矩阵作用后，方向不变，只是拉伸或压缩了 λ 倍。

所以 eigenspace 里的向量，是真正的“稳定方向”。

* * *

#### 广义 eigenspace

其中有些向量并不满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL34c7fC5ApOg1Z9bGky8pvSubBGkrZOzzuB4tKHRO4CBIx3vyB8Qo1AJARER09RvaXricBeicZ7ibb7r2HDBxp1cJGy41ElDkVsfA/640?wx_fmt=svg&from=appmsg)，也就是它们**不是稳定方向**。

但是它们在  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnObN8rkAPZjCJaXtE6SG1rQ93PZsAo2eBBbaiaXbcLvrpRhic0sqY2aw7P8ZUSOQpnA493iaypcMEKGyA65pyXQylK0kj32JjibMVQ/640?wx_fmt=svg&from=appmsg) 的反复作用下，会一步步“滑向”真正的特征方向，最后归零。

所以 generalized eigenspace 的几何含义是：

> 它不只包含“稳稳站在特征方向上的向量”，  
> 还包含“最终会落入这个特征方向体系中的向量”。

* * *

### 5\. 它和 Jordan form 有什么关系？

这是 generalized eigenspace 最重要的背景。

当矩阵不能对角化时，不能只靠普通特征向量描述它。  
这时会出现 **Jordan block（若尔当块）**。

对于某个特征值 λ，其所有 Jordan block 合在一起，对应的整体空间就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6JtKkZ8qAelVU0nrJFibGJOVhCzcHo6VibNpEZHpn5Yp08VcbZ8aLjDuHvQ9MUDdHfPUr29AzotEpwTtxkLwMZpxc19aS13fSm26w/640?wx_fmt=svg&from=appmsg)

所以：

-   **eigenspace**
    
     对应 Jordan block 顶端真正的 eigenvectors
    
-   **generalized eigenspace**
    
     对应这个特征值的整个 Jordan block 结构
    

更进一步：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpBibPwLRAjwGCqDNicZcKc4kibRzFicnXdrv0v3Pbn994g9ESZhX5Eeia2ZNj2r93KOWtGbvCE8zes1nqab4O1kiaq0IpBdLVbltErXw/640?wx_fmt=svg&from=appmsg)

如果把所有不同特征值的 generalized eigenspace 加在一起，就能分解整个向量空间。

这就是 Jordan 理论背后的核心框架。

* * *

### 6\. 一个链式理解法

设  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNksxOAjWLVv6ibKmH0QUiay4EJAwzJialFMPM4fIic9KiawzcysciaV8mFf3exKbq71fqIicsM3IViaibhqpEJRKn70CZ5nfrW1sKjVW9wZibg/640?wx_fmt=svg&from=appmsg) 是真正特征向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNScLdhiaXz5jiaCicJUYdZ2QqPsSO9YibayD0C4c9C4tdLHvbdoFfTjl3O9hDuZpaOokBYYwEkuQeyHH0GibSOXkzBazDCqCgxzibsHlg/640?wx_fmt=svg&from=appmsg)

再找一个向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wjtXSqaicgyBUIyDcY9riaFb5x8fibibERNJHItHsXibDAvzKXVLwUA6h8Tmxe23ptKAeUkNqdoUHxKaPwP9MRrdnOphbm1C1icerbRicI97yK63HA/640?wx_fmt=svg&from=appmsg)，满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpW6nvQgUrIIFxHZV4YQxZP0S0lA2hLXaiaz7VPm04I1diczFFtia0IwzP22ntxrN3xfGLMo8JZayC2vvtS2pRNSiaib5viatSQcjyAkw/640?wx_fmt=svg&from=appmsg)

那么  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtKTNXeK8QudL7ag3VZicK1n75jfPCAflgicmwfFMHH2z8VhPibTViaqUeTObnJibZ3Cq7qLO77QB3gr61nGauOhGpAXUOZqRcCZ3hVg/640?wx_fmt=svg&from=appmsg) 不是普通特征向量，但它满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn23CGW1c4NSLnicib7iaUhaEjdkcJib3VqaXJCNluFN1hXjibEEicSJJSLNdNZ35TFM21RbUiaXibX819cZEtaeGBhibibAe0kX1rZ0oeQjA/640?wx_fmt=svg&from=appmsg)

所以  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0qKO1ArnMzbvhicOO8Rpia2kuv31WicBFZ0meicab1GAWdKxM97ovnIREibibOXe8rvNTmGYMDblYu37JyibrEXAia9iafeYiayd5g9qVNFA/640?wx_fmt=svg&from=appmsg) 是 generalized eigenvector。

再往上还可以有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQHYt8b7OxumXyUUDfFB1KroOnjC8Xlxr8cicQOs2YgGWj8qxPuqtP0S2baXicj8YolKRtFZHxibHkyZlL4ia0iaicXWKcB4QsDgmPiaAA/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCra0JiaUOef0F5uWhO51JFuBeibdXxkRiaGsZLcP2R2VbXk1dPxTslBClDeXibicrSOPI36CV6qxLEiamIeZIdfutInjOvDWgz9P05R2Ng/640?wx_fmt=svg&from=appmsg)

这样形成一条 **Jordan chain（若尔当链）**：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLXW7eVVvqmE4TUaKgz2T1ibotnYeCPPZdtQcI6ZVial00qDCiceTNmuasibkXL6iblXZI5AhBEKY7Mxhx3olSm8sxHo0JepmQpYSTibA/640?wx_fmt=svg&from=appmsg)

这些向量全都属于 generalized eigenspace。

* * *

### 7\. 一句话总结普通 eigenspace 与 generalized eigenspace

可以这样记：

-   **Eigenspace**
    
    一步归零
    
-   **Generalized eigenspace**
    
    若干步归零
    

或者更形象一点：

-   **eigenspace**
    
     是“核心主干”
    
-   **generalized eigenspace**
    
     是“主干 + 所有依附在它上的 Jordan 链”
    

* * *

### 8\. 这东西有什么实际意义？

它的意义非常大：

#### 第一层：处理不可对角化矩阵

有些矩阵找不到足够多的 eigenvectors，没法直接对角化。  
但 generalized eigenspace 仍然能帮我们把矩阵拆解成 Jordan 结构。

#### 第二层：理解线性变换的“局部结构”

每个特征值λ不只对应一个简单方向，而可能对应一个“块状系统”，这些系统正是 generalized eigenspace 承载的。

#### 第三层：解微分方程、矩阵指数

在线性微分方程、控制理论、矩阵指数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgg3MJvu6sP3YMD7IQAZ29icj1ib4zR5trZMOnuSD2OlMjr55bsobYoc7yklQnKEU0Tfqz57fMY3sJcfAbwFQBWiaguOKtTRpa8vVg/640?wx_fmt=svg&from=appmsg) 里，若矩阵不可对角化，就必须用 generalized eigenvectors。

* * *

### 9\. 一个最直观的口语版定义

**Generalized eigenspace** 就是：

> 对于特征值 λ，所有“最终会被 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScO1Yia9kwWjU4hJvzlUkonq1fT1MVstib2YxgntWAOFjGrlAF5iatzqJsaQCNvKdDPk0Csxluy8nZfNnZDn94t6adPTtEibZ8593MA/640?wx_fmt=svg&from=appmsg) 反复作用消灭掉”的向量，所组成的空间。

它比普通 eigenspace 更大，更完整，能够反映矩阵在该特征值附近的全部内部结构。

* * *

把前面所讲知识归纳为图1：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocu1OuTEfF6e2sv3K0ibQCMPGw0F8ewGctdzibpNVWvwV6JRWDueGXy54O05FNic68jHqrPagjQSavoRLW4MrdT3Jkey5swibWOgtBA/640?wx_fmt=png&from=appmsg)

图1

下一张是 **“Jordan chain / generalized eigenvector flow” 的更直观示意图**，把  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn199rR5ch4R1YZx9hibEUIAM8HFbJ5IfBew9EicFYKdu4EVWvPPAiajfdnibQiaF3gOXPRkB001tceUdsP9Itflsh1x0cx2bjS8oLSQw/640?wx_fmt=svg&from=appmsg) 画出来，那样会更形象。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvMBKN0KGoWl8RpNNehFvwb7hMOrBhab9ROMEjiaag6yicdhoOhAHdBVJrvGlODy8ibFfoaIVBqunPu33x6RgWibGibcmA6oXxib6BT0/640?wx_fmt=png&from=appmsg)

## 图2

* * *

## 图2更“动态”：把 **generalized eigenvector** 沿着 **Jordan chain** 一步步流向真正 eigenvector 的关系画出来。

这张更直观地展示了：

-    **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFveJX507xHzwibI2z2Sk05rkwWqyKuJFbUjZOdd5DicfFkj1M0WxXeGEoaiakjbIQbjMnx0o8UDeCSj0WV9WSGzIuaPFWsPkmPciaTQ/640?wx_fmt=svg&from=appmsg) 是真正的 eigenvector**
-    **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5uicAnaVk5qvViab8icVN2OEgZibHx7mpISWjSbxB6x1UXQSkW37ecSGHn8B2npACAUq4YXD3vUP2w6CRmayJtyZsIEBOCt35cYCjA/640?wx_fmt=svg&from=appmsg) 虽然不是普通 eigenvector，但属于 **generalized eigenvectors****
-   它们沿着 **Jordan chain** 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqrjL50bbKlzicRJFqn9rC7jXOPKrtoEUBCWpySrGbkZWZT9qibjj28bxGWDSNwsR59HmtzGNqx7RgYo8VQShQJhLwJLS21ZmvJyQ/640?wx_fmt=svg&from=appmsg) 的作用下逐步流向 0
    

  

接下来是一张 **“ordinary eigenspace vs generalized eigenspace in one plane”** 的对比图：左边一条线表示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5G64ujpmNjicfnYOXZYUbXaYqGicQ422ib8THzrFvMtoMeMXYaiaVb7QHowJ6iafnYe5VLvRGnMRq488NrNGGhvsoNIKT1enTuIn39kWAwYsPZR9Q/640?wx_fmt=svg&from=appmsg)，右边整个平面/区域表示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGPzBJdUianRICk3VUw1nflZDg9WXRHQicw057B6hDWJqBFaKRkXHMSJzbTticaBWTf0mf07APvDde4TAWFWsibBcF4k9wMVOlW8Yiaw/640?wx_fmt=svg&from=appmsg)，会更有“空间感”。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocu1GweXCxu5u65KibPWInia7tUiadCHEVTjba6eZ9vLBD3NPlqP0CxYIHBmibibDRnfVXoOhGLzOFPNjlphMInMX93a1ibgZPAoxVEWU/640?wx_fmt=png&from=appmsg)

## 图3

* * *

## 图3是“空间感”更强的对比图：把 **ordinary eigenspace** 画成一条线，把 **generalized eigenspace** 画成整个平面区域，并配一个 Jordan block 例子。它把两者的“空间大小差别”直接画出来了：

-   左边：**ordinary eigenspace** 只有一条线
    
-   右边：**generalized eigenspace** 是更大的区域
    
-   中间明确标出：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBucvWpRTpsdkCqkxhKfwMTttRicnic6Ax5icVnicA0uibnEyX7kViaFrzeh4BZmcGLNUoRn7ibMhN4f2gtDRq2m6XlyxI1tYPeEQ7icZlw/640?wx_fmt=svg&from=appmsg)
    

  

下一张是 **“从矩阵 A 到 Jordan form，再到 generalized eigenspace 分解”** 的总览图，这样你会把这几个概念彻底串起来。

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocs4KViatLVibQLFuMPPCCLJKjDsHpPMUTD5xBUl7O0cib9a79DnpXf1QGl8ozF3utDWtqe6eRV410iaMZ6mw1RFp1Q2L7iaC39E13xY/640?wx_fmt=png&from=appmsg)

## 图4

* * *

## 图4是一张总览图，把 **matrix A**、**Jordan form**、**Jordan blocks**、以及 **generalized eigenspace decomposition** 串成一条逻辑链：

-   从 **matrix A** 出发
    
-   到 **Jordan form J**
    
-   再到 **Jordan blocks**
    
-   最后落到 **generalized eigenspace decomposition**
    

  

图4特别适合你把下面这句话彻底记住：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wjtXSqaicgyNVH6ujtdXLAl9hR4kcXGRiay5Hzh0ffnrlSKTzIcppKadYCz1c92xBY14rAehbcjmjicrrT1h3MkYARpWl2ZQx5Wm1V8QvqbiadA/640?wx_fmt=svg&from=appmsg)

意思是：整个向量空间可以分解成各个特征值对应的 **generalized eigenspaces** 的直和。

下一张是更“教材风格”的一页图：  
**左边是定义，右边是 Jordan chain，中间是一个具体 2x2 或 3x3 整数矩阵例子**。这样你就能同时看“定义 + 几何 + 例子”。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocufzOnGJkUXPSbSDSo4soQjSyaDqCI30rx6S05TnQ4fAu4zfYIx3YB0I81ib9Rafaya9s1eu6fD3ddK5ibagRMzficToAgdI4gjV4/640?wx_fmt=png&from=appmsg)

## 图5

* * *

## 这张更像教材讲义的一页图：左边放定义，中间放具体矩阵例子，右边放 Jordan chain，这样“定义—计算—结构”能同时看到。

图5把三件事并排放在一起：

-   左边：**定义**
    
-   中间：**具体 Jordan block 例子**
    
-   右边：**Jordan chain 结构**
    

这样你会更容易把这句话真正吃透：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXjB79WFtJbRnlCHsDkZ6xKvicJxBucwibVblVKLTOicozPERc6IZpmsm9AlK3mibxOl8IthvbUhYjccO71TPJyCzcUwqLBDvOMulfQ/640?wx_fmt=svg&from=appmsg)

它表示的不是“立刻”被消掉的向量，而是“经过若干次作用后最终被消掉”的向量。

下一张是：**3×3 整数矩阵的 generalized eigenspace 完整例题图**  
比如选一个含 2×2 Jordan block 的 3×3 矩阵，把：

-   特征值
    
-   ordinary eigenspace
    
-   generalized eigenspace
    
-   Jordan chain
    

一次性全画出来。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuUny15uicmbcfibqs1CSZhaqh9YRP38f90fd1BEh5rL1r4IMkgJewvwNyiaoxicgvFxiaWarumhCZRmicic748sm01DxbibOz6fIu6iaz8/640?wx_fmt=png&from=appmsg)

## 图6

* * *

## 图6是“完整例题图”：选一个 **3×3 整数矩阵**，同时展示特征值、ordinary eigenspace、generalized eigenspace 和 Jordan chain。

图里你会同时看到：

-   具体矩阵![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4qdq8mrqlzzoLb5ibLXYHpSZTicMSXib2Y6yqmxog17NUkj1nbicwR2koUONRKIvm8J9qRicF501Ciaa9DibPtWPc8OxZ0d6923V5cCmA/640?wx_fmt=svg&from=appmsg)
    
-   普通特征子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau7PbjXHBjpKjJCrFIMYmk4a8ibyfuzJN6Gdib67TJfAMeWxrWIibGicbicUReHFuoOSKaibzAycaooWkic2Sc5nPiaHOnnS1lT5MWpDibCw/640?wx_fmt=svg&from=appmsg)
    
-   广义特征子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHR6Iy81vydAvCCCf31Jmaf3ibUp3aeyD10icHXicOoicZGceGrZaYdzRFaic19IJfjaLE1BJqhwYUziaQF6foXiawH7OHt73W1a5ViaHCA/640?wx_fmt=svg&from=appmsg)
    
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpT9K2ib53htbicxicYwrkk1UmmRGEYBce9f0NagFwfO7lvROBVTVlRywBQSWaQA1Wzmb4pWFSwca4WbLlianRWyMnCeXTR3AD7O9l7A/640?wx_fmt=svg&from=appmsg) 对应的一条 Jordan chain
-   整体分解![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg9ENicK9mPLKUs2E0mUWpaiaCvAxltKcb2HHOEMBII2cickQxI47PTpwgQBBE2ApHD4VBZubQGzFeRiaIweKclawuqemdtaDVfMIUg/640?wx_fmt=svg&from=appmsg)
    

其中最关键的是：

-   对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpT9K2ib53htbicxicYwrkk1UmmRGEYBce9f0NagFwfO7lvROBVTVlRywBQSWaQA1Wzmb4pWFSwca4WbLlianRWyMnCeXTR3AD7O9l7A/640?wx_fmt=svg&from=appmsg)，普通 eigenspace 只有 1 维
    
-   但 generalized eigenspace 是 2 维
    
-   这正好补上了 Jordan block 缺失的那个方向
    

  

下一张是 **“3D 几何版”**：把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaDXxVqzwicxVepDbAvV6CibCXnEWRU5aJSdzTRPzXzQIThh7wiaILMdCnibPzNwxW4GySeLXL9m0B9Biajne6CBPv5GT0DNlshVJZMg/640?wx_fmt=svg&from=appmsg) 画成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1U10sN1nAHaVdyQLiawEwKQV8k9XDJiayOQUwL2KPZQKXnvAicWjDL19pGnU03ibhiaVAiczQ0diczxCt6q6HPq19eOFNFatXT7h63fKw/640?wx_fmt=svg&from=appmsg) 里的一个平面，把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zuic30cZvxCBiaH9nGYvtYKiaNUeZzXxYrEasiawMFL8uUxyTlqTE2rktAWNywsLXSibEbqTdHZjKntQgvJxUKKmib0BXzPcS5EKDI9qvnBiczicohg/640?wx_fmt=svg&from=appmsg) 画成这个平面里的一条线，再把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISW9Qmk98HFr2wQ595uCjunW4l1vFeGciahQJMjYiasWrBc2aE99QAx5l9ibeXnT2BiaibBv0r96iaFTR4a1zHq4VgXnMraSYykq4Kh7w/640?wx_fmt=svg&from=appmsg) 画成另一条轴线。这样会更有空间感。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocv7DyDwRMwLcRd6uIfdfOnehW3JRA2jNUSwqstYicBE5rg20xmSsWIooOKC7npseGUxMsXCG4mFsoQY14BOLcX7BibPibjxkLp7BM/640?wx_fmt=png&from=appmsg)

## 图7

* * *

图7画成立体版：在  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoZoMDQ87kibCqEAK6KiaQSiaaGc5bwN9tH77K9VVXjCDJIwvIk7f5HJfXLxDGsmwia9mkBgkic37nWjrdvsNhaljYNaE5ghQZT3mZCw/640?wx_fmt=svg&from=appmsg) 里把  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAVknDgURsDPPCvBwQrfuSqbS3j3B7GmBXrkdq5EIT9IRSuicXabtHzefD5mnyqdiaeM4bFm0UIxib779V9Nn5RmbNOhiaACxhCGPPA/640?wx_fmt=svg&from=appmsg) 画成一个平面，把  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGWHL1Ij56gP9oWZjgt0QhdzSIEmFkyMHxPCDAZRWQZawQhxkVFzKQMgynUtDr4qkLy4Yjicay3QiaGavYxiahicYZICgBMhDOlPnow/640?wx_fmt=svg&from=appmsg) 画成这个平面中的一条线，再把  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZbjLrv4ulgDOlf6XTqxiaA0HML4SAtBm2VKOOEWGGucp8PXpsYZvHzTxK37u1CjHD9QIt5AH0bt0mK3NAbEBkCIQ6hZSjJ2Wh9g/640?wx_fmt=svg&from=appmsg) 画成另一条轴向。

图7里：

-    **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKYYtZ9mb8UmpyTexPVNkTgwdMNibJ7Yo521lGs3uBGFsk5Kgz2hUulB8QDlPEvVoKsWCYOklU8oYibFpyOppxcicQKvqCpH3BeaMg/640?wx_fmt=svg&from=appmsg) 被画成 xy\-plane**
-    **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxEMHtGMAiaSYCBJYO0yicPyBibfuhF0AatPhFrEugZx3QFSXicNFPIMIM86ohVjYRpT1HAHiagGHVHol0RxK04zo4iabgkiaHzVvXJcBdA/640?wx_fmt=svg&from=appmsg) 是这个平面里的一条线**
-    **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHyessicJkMm5ngoxoBRfeBl7ys3870eHVicSJKH2bKxZdVib1vlaDxX2YMh2Soib5ibI8HbMgJNdbV0FXuxkF6mL3w6cdHXicNZ1p9tw/640?wx_fmt=svg&from=appmsg) 是 z\-axis**
-   还额外画了一个向量 v，表示它属于 **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfVn2IPTYVLtOJlwj5GKulcKyic38GdzUTdqEHxqSjTJZVAj3PlFE1PLhvB0uXnDiaq0KhxULWyPK8zMBI6XGnz9qC9J1E8iacVotg/640?wx_fmt=svg&from=appmsg)，但不属于** **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5nIxiaZ30Wt2sN8xZNUBAghpFunqLkLmK8tFzKoW9ial4Ta9r22tCwQcWtGWf7DtjDQM4TWdPxNncWAUxy4LCDLZkeibq886kXOCA/640?wx_fmt=svg&from=appmsg)**
    

这正是 generalized eigenspace 最核心的空间感：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJVEQ6ar3z1YFwbiaMMvsqALC4bq3jN7lOZufj51HbLvNJaVVnDpW6KCicRibLpjzfw7H5UBhYTA2Xl5M1lgUJxnyiaWRqM1bl85eNQ/640?wx_fmt=svg&from=appmsg)

下一张是 **“3D 动态流向版”**：  
把一个平面内向量 v 在  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sAz5OWdbfR3NdOStNQibLZvCiakjjgjhok5uFicyfMrWx0kddonLqoQMawNbaAeBmr3watgaicMdv3iccxHQJDMYh8INR92HfSAREvC9oWvYX0pQ/640?wx_fmt=svg&from=appmsg) 作用下如何流到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5WDF26gRGMWZswqG4NjecZloMFw38IR31jUpmaX9xRXJhddx2PA4ianpMDMVKfBtPiagKHUS1wVZuqRuKZ8xrwnpqPZibt6mXTvgia9PU1jmOAhg/640?wx_fmt=svg&from=appmsg)，再被消到 0，画成箭头流程图。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocs89MYPMSJF3Rk7FgIdzuOPeyQNE5ibnuQfNhIq43StE7Ko8aDBS0UicfzCMxLODHCS41HQQYpeLjS6yvF5aWZIicshIib2yzh3aeE/640?wx_fmt=png&from=appmsg)

## 图8

* * *

## 图8把“流向”画出来：同一个 3D 场景里，展示平面内向量v 经过 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnaSS9E04HrIS7gf2H3SoLgfb44WZzz2YZdKBgf88n00YAebE1zVO4zEfDicowP6M59DVM55g1GbxZKzuoucm8wpyJhkRg8CxrJw/640?wx_fmt=svg&from=appmsg) 后落到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZAXuMByd3tmqerMuSFu8zkLGRJJbic7uZM51U9TXs6DET4lEYqKbYjJclS9FST3cVzksypouYNs5VtIibWFuBxnRMHOIWIzyd2Uw/640?wx_fmt=svg&from=appmsg)，再经过一次作用变成 0。

图8表达的是：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyY047Aa6iaJR95RibHHRWVgIbSuoPf9YcmsaupGchHHzsEWBfUqgMYHmTQJveiaaCe9arkNTT2jDELYIzwetAHGua2MyULHEAgibRg/640?wx_fmt=svg&from=appmsg) 是整个 xy-plane
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHznK7BBG0YVOEV2ciaEkc3niakHmpCbxluuY3UrC0GLLQLmBZhuagDjQmQHPoD2ddXfqPskIKbiaj2dVL8WkVL7HWG1oxsCDHY7PA/640?wx_fmt=svg&from=appmsg) 是其中的 x\-axis
-   取一个  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSdl9h4hoWa0SKtA4ziavJYzUHCoBIgnHJ0d5Ax8Xxjfzicelud2l8VRIeJk3icjp6fxVmn6emmsDAYTWAqQtsreHqFQLa5Ff1nQww/640?wx_fmt=svg&from=appmsg) 但 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm208d8NU4J1ic9XKH8EbmpHnRgEmoof3icYM95510P0RpQv3wyZPKPOp5ibKNpP9cPzqb3eCoiacJECQ9Hm4DeEqFEnRbLUoAM8IAH8Q/640?wx_fmt=svg&from=appmsg)
    
-   经过一次 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQOpH1AnpYNTibEJmb8fnNiaaRbPVRXkbptytYwBFT8ZAF2Mia2nQRU6LsGKPcibEV58ibicZaiaruicmaf9jOOP4qib51iaW6JPFX1V0eFLQ/640?wx_fmt=svg&from=appmsg)：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISdvMibZIZccibzY76vlMIfpibdAE2W61eXq0EfzvKZB2QdkcnicGmZDE1UxNyXXUCdRZC2IDq04PMicGxWREvd5LXDef8xNL7ACBQOA/640?wx_fmt=svg&from=appmsg)，它被推到  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXrrIZBksKxMhendBeiandDwRia8hjia9rTVV7c6icm5ZMDKF5GpD8PIlXa8aJ8wq7dic0kiaLPqXdDTbAfhcbyfNzZ90pWOyUQQJVHQg/640?wx_fmt=svg&from=appmsg) 上
    
-   再经过一次：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLPot9T4tXoYUHrosYg7YabBuUo8IKE3CjjYF4pFgxInu5J35k30eNicqJRPAgXR6jEI2ibx56wqfZ6ibaczhhic8ribfKqPF0AXVGxQ/640?wx_fmt=svg&from=appmsg)
    

所以这张图把 generalized eigenvector 的核心直觉画出来了：

> 它一开始不一定就在真正的特征方向上，  
> 但反复作用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pLxX4KjbqAIydToXKNZsiaITQiaUhhoFNRWgpbiaJMFYhfkaL0gDNdjbFYLnA7JQSsAly8Gk1VAL9eYbLP5LQtJferqichFIpgsQ1cQ/640?wx_fmt=svg&from=appmsg) 后，会先落到 eigenspace，再归零。

  

下一张是 **“3 帧分镜图”**：  
把 v、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyXQtbJVaAV4Bg9uibYCDQgDV5r9QEKTYUicDsw7bELz1HbezgKdzgOhNzSRnAKMs2z0NYlwb6sNnricBIRjiaQ0RrOdjiancZ8oPJ2A/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4mP4qRGX07fKVKCJ9Zv0AdoqE8aefs2BmHNSs0vmR2kUt6jRzlWBSsILQZEnHRETpg6hv3iaFDvMcgKEzDmqhZZwOjotHic4ibCvw/640?wx_fmt=svg&from=appmsg) 分成左中右三幅，更像教材里的步骤演示图。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuoBK7xM83OsCR4JicxiaCibJMSsLSfTLP82ULjDpjicdiaKu3KPic4NTicHfmiaKiaYehHYg6lPqD1j2fKQAYIRPurUwmhaDVkRwNIKby0/640?wx_fmt=png&from=appmsg)

## 图9

* * *

## 它更像教材分步演示的版本：左、中、右三帧分别显示 v、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKaa22jEiaibVs09qqC7BSaYB4d4A7WfuZy84icibe69Bwuib1Adj6nhibIS73f0NQQGg9Y2UNzj35jYIljG7QKSJRmXNUdHMVibe1Nmia0A/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEDMyhES7U7KbIwQYO4X4pGNHtkkzKlLtrcD7bNTcw4iaBrF8s26SZtLcPu3OttXX1VaYxp0aRLQvWiaBJibX2J9xPadQG75nVAHAA/640?wx_fmt=svg&from=appmsg)，并保持标题和注释。

图9把 generalized eigenvector 的过程拆成了三步：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQ1Hmooo1pMIWliaj9actEj5S1zgJjMDovF3rnktbjDrRaSsupmNC8XzJk2slGVOVrHAoYPfQdR3XPAroiciaiaBEwGJPCWg8OYChwA/640?wx_fmt=svg&from=appmsg)

对应的直觉就是：

-   第1帧：v 在 generalized eigenspace  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuJcEmUiaXKlUdy1zYSKbfAK6ia1kBYPt1bQnKicxeBMBhj8LzxhN9ibblDv01zHeWVxiaOr37Eic8IYtq6edRCdtOWQxzxiaTJO59LMnA/640?wx_fmt=svg&from=appmsg) 里，但不在 ordinary eigenspace  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuWPmXwbksibZyDlERhbjCr7ZOnukLyyfOicQNbYvlDxjWDl7cYDSWQwvmXtV6RQdQdDp3yx8pQjlRJ4u4qFxk7BRgia4IxSh4vib4Q/640?wx_fmt=svg&from=appmsg) 上
    
-   第 2 帧：一次作用后，被推到 eigen-line ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgohzmmMos3jP0T8nrcJ6BDsZLKfDOpD27pzbytjoSPnPuGhoeIxZSbtCIUbwvQvqomCIrL4lgTzhBtrzEe7Xn5OCl9VicO8xNJNA/640?wx_fmt=svg&from=appmsg)
    
-   第 3 帧：再作用一次，变成 0
    

这几乎就是 **generalized eigenspace** 最核心的一幕。

下一张继续深化，是 **“Jordan chain 的 4 帧版”**：  
从  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage5gicr79YiaNLkTFVDtX4IdSemiaLvSJNhkibdZv7diawheNSXiaG17xCQ2QpVAr74icLAnmvx4tZDYjyBoxtDN55UEW38CedibP3jRv5A/640?wx_fmt=svg&from=appmsg) 展示更长链条，这样你会把“高阶 generalized eigenvector”也彻底看懂。

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvf1Eqdh5A1qiaTqCicpxgUBoWic9BlHnTbPEictyDEkSgsUA91aSczKtcyia9qcLtOtFahD4DlRtTE6TL2OXJ7aL8Cg0pgo5KSLIDM/640?wx_fmt=png&from=appmsg)

## 图10

* * *

## 我继续往上扩成更完整的链：这次用**4帧Jordanchain**，展示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpU3pzFfEdXkxlEwTYica81e6rJyxEagEhWk7KibnXj3dwfSVb8RRt5AYdiaan4TPllfMw9O0jicibOXG44rX5iaeEq1w2ahweF2Sibxjg/640?wx_fmt=svg&from=appmsg)，对应“更深一层”的 generalized eigenvector。

图10把更高阶的 generalized eigenvector 讲清楚了：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH9xOv3Dia7CE4NN3YCPYvH8PpuudWCE0Riare7OvRWjLgSTAyMLnib7kIR7HHT4oqRXGw0vyBlv7cAd6nSpfwjnTkNSZmrPT4kM1g/640?wx_fmt=svg&from=appmsg)

满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFQrMGeY9wDCcJicANagJPlbyNcBichiaib7QO0zC8V5MiaZCUbEJaTGAWF2EvX0ia90mp5TKqA4EX7TiaNdI4xzRNnaUDZ9ZqJZiafokqg/640?wx_fmt=svg&from=appmsg)

其中：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgogTWFqiagQB8ONHQntjDLvL91liapk8qiblSzUMSUtPztozx2DDx5s52bN38snBJJGySJkoBfFDVCDmHnxmTV7iaTH2qwreNAiaoSHg/640?wx_fmt=svg&from=appmsg) 是 **ordinary eigenvector**
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5IBOngzh1pXt1Rna5pEt7APIc8xu3OXoz7OrB7MUJG62JViadu3RNSj8v7xoLuGwia2via6jDhzobWTYgNMGBKd4dwWzF7U6IFWCA/640?wx_fmt=svg&from=appmsg) 不是 ordinary eigenvectors
-   但  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic7RIUIZnBLPVhu8pJv27ckwOVVMiajp5OQhhOwHic5s7uGbVz4O7ED41NXWY0g4AJKkWLibBXHcCEiaLeQK73MqQUkwADRp0xA2lcA/640?wx_fmt=svg&from=appmsg) 都属于 **generalized eigenspace ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnecEib0Aica7jiatOQib7NMKCCSx14DwdcjlsGdhoVHhk1OZDiaWLiaq7ibVETLPW0Sp8WLQkqfANs3RLMhVRkcWZVSp6aic16icMIHEjDQ/640?wx_fmt=svg&from=appmsg)** 
    

这正说明：

> generalized eigenspace 不只包含“最后那根真正的 eigenvector”，  
> 还包含整条 Jordan chain 上的所有向量。

  

接下来是把 **Jordan block matrix** 和这条链一一对应画出来：  
左边放一个 3x3 Jordan block，右边放 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SpQySsPpTNgYUIYvBUD4icbE3iaHRibFE1jtbpHALU0BdHoPnWIRvzMPYNhy0mEGcGibiaaj3c6KewicUB58J8y91XqkPGtMrRQBssReaool01l0g/640?wx_fmt=svg&from=appmsg) 的链，对应关系会非常直观。

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctZ2yTKQ91bUpRAfqCFqlRMp2QRUfARyJj5evFHC98UWTj25GZiaRd42crnktjbqWvAEeLufe1SGGTMZyTibZZjsPUlOeWVqqbYI/640?wx_fmt=png&from=appmsg)

## 图11

* * *

## 图11把“矩阵形状”和“链条结构”直接并排对应起来：左边是 3x3 Jordan block，右边是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R10X0QZuDQorJL6iaxzG5lFkvyJrYXe9foUrqZNuYMvibOTVcxIiaPQkTzslqictjgnQ4nicPdc7wXlb3x69gUzAX9u8icSCp9JIuRTWA/640?wx_fmt=svg&from=appmsg)，中间用说明把两者一一连上。

图11强调的是：

-   左边一个 3x3 Jordan block
    
-   右边一条长度为 3 的 Jordan chain
    
-   两者是一一对应的
    

核心关系就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpXiaHyzLfkw4vSWdfZgIDbicI7o7ldYhqOF8FvicOHEDg3EN3CFcdSibmvcNTsLD9x8tNfLdA2hAtfPeyqGaBeKCghI8gTPgt9aicXw/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHwjicNyfv6icqSlL8OVNLLDibZBEVRRR2hGQdWW2g2TTVTr36C1pbCGZicsyXPZwTic8M7ynYtY9ZDhnVcHNicTuhHaCmeJkfibIYuwyg/640?wx_fmt=svg&from=appmsg)

所以可以把它记成：

> **一个大小为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d65AKiaSDI3e1eOqvzP6lgUScOfcJu7RfkkwPVnR7Ju2pZMian98IlFNqeqI4eOdn5wmWlG7ujhFcalbKiaxQ3VVaXHiaf5tZnp1icHw/640?wx_fmt=svg&from=appmsg) 的 Jordan block，对应一条长度为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49lJCxaHsUaRd2iaqvEo5ztc24r5BDrwKkmnE1icgk3mxAicvGMhtN4R9k0d8AmRBlXOWrCnK40Kqf85UvxwORxpE0K6242rUATINibqSNnS1Ozg/640?wx_fmt=svg&from=appmsg) 的 Jordan chain。**

  

下一张图是：**“多个Jordan blocks如何组成同一个generalized eigenspace”**  
也就是例如  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoB7BexyAaZ8us3KClk08MEC21jgPrhmTA0ibUQ8hDNpZmJTlbSObViaERNWKZuictoKudsN5jJ3nOcUPAJRwEwQMwiaHQlpibXlqeiaw/640?wx_fmt=svg&from=appmsg) 对应两条链，但它们都属于同一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiab64fP5Z4wYCe2oLnIhlRxSWd68NjLtXiasvOxTGQeWIxibicwp8JdiaNEShOgMd4Geo11s8ej1Lq7riaI9ibJ4HgAYMavjVNOPRev4icw/640?wx_fmt=svg&from=appmsg)。这样你会把“一个 block”和“整个 generalized eigenspace”的关系彻底分清。

* * *

## ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooct7xaBLco1Lwa2TibIdxlRNq8RLwKf3meXmpcgSJbxx0eJOqmcNicWf6iaA579VHcRFDnfqFtGmBg3APNotIfusIrFgDXdwkdANicM/640?wx_fmt=png&from=appmsg)

## 图12

* * *

## 图12把“一个块”和“整个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBkhrVMs1Z0zhWa6ORkeqGpXZSdKXtib9Qpo2x9iavl5j4Np8DQguNib7ZtkFfZg2fbvxB7YvewIicRfiaNPxySv0TwCo19P1tw3Hfsg/640?wx_fmt=svg&from=appmsg)”的关系画出来：这次用 **两个 Jordan blocks 对应两条链**，并把它们一起装进同一个 generalized eigenspace。

继续画好了，这张展示的是：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVapWOA8HvyUe0IKibqdwQPu1OzJqTp2wGglBp1Lr3nGngm1Ml2jbkrA4mTEYkPeH3jTpNu1IhjxP1fLxCmH4XzH23lqHypByBfbg/640?wx_fmt=svg&from=appmsg) 产生一条长度为 2 的 Jordan chain
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OF501ict7qROFHQMcqL70Vs61n9MT3MT5eHNqQb2IyicBqTaLuhkdLoGDhpKh8Ft3ibvg8nRwEk28qKGiax71WWJYjGGricvcmwrqqGw/640?wx_fmt=svg&from=appmsg) 产生一条长度为 1 的 Jordan chain
-   这两条链虽然不同，但都属于同一个 **generalized eigenspace ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7sEMrykGwKRWDiaYapIYDutddVV2LFlhG9ebAUO7xBGOY0iaA6bVuJwV5yibibomvqzqibhpKc1UPfl0rER0omVd4cPhNJhcicOVKyEQ/640?wx_fmt=svg&from=appmsg)** 
    

这张图对应的核心结论是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2r8oujfdB417oZ5NyNdoibkwAXDSejOrXqoqpibfv1I0VVSswHibhJ63fpMUTC2C9qTWbSc6Ab1zSf51hVMjLiaQnZRWCSRuoeh5gg/640?wx_fmt=svg&from=appmsg)

也就是说：

> 一个 generalized eigenspace 不是只对应一条链，  
> 而是对应 **该特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2XicFTKFu6NZC7OotOnZYHXO0bmnZt9IU69QsJhOELldJYUT5wHDliaRNwr2bfDKV9Nuza6zjPAMH0Mxw5Kg1ib4NAfmLd64FhMkGQ/640?wx_fmt=svg&from=appmsg)**  的所有 Jordan blocks、所有 Jordan chains 合起来的总空间。

  

下一张图是：“多个特征值  **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpT5z51l28kibfGbKliaZrPpJjkIEZO7ZCQJDGfNRn1aeu2gmUIMd8WoQdxREfWjhKcI7iahMv8ApAng52kM4dpslKgd6BEnGichva4g/640?wx_fmt=svg&from=appmsg) 的 generalized eigenspaces 如何[直和](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247516731&idx=1&sn=8eba6cc7b0cb4849e44d721165b70a07&scene=21#wechat_redirect)分解整个空间”**。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsN9oZCIxJFhO8Aue2cgibCkBSFibXTUUEoBqPLMdKBAB5AOa9GynN9xk5wibs9VDVEJVN1JaqAyyYsH1ahS9JibMSyF1kM6RWWtDI/640?wx_fmt=png&from=appmsg)

## 图13

* * *

## 接着把最后这层关系补上：以**不同特征值的generalized eigenspaces** 如何分别对应不同“块群”，并且直和分解整个空间。

这张图主题是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmYbR3gZ1weKg6vCdK1aF6WXMdFR6FUt0t3NIadbsVBtwXEoozzLibGKvFIjhgYrsIpbiaA5w1W24Sic6xFh2vDPujzTKVyX2nq8nA/640?wx_fmt=svg&from=appmsg)

图13强调了三层关系：

-   **同一个特征值**
    
     的所有 Jordan blocks，合起来形成一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2XykWm5DCgpY9SVq2CvcEE6iaoCewUc8A7gx48PhW6Oy4bR659CiaeYib2QySRTyet07GJ2tFjk8a7lt7NTeq1Ta1q7gqsjGYUjXTw/640?wx_fmt=svg&from=appmsg)
    
-   **不同特征值**
    
     分别形成不同的 generalized eigenspaces
    
-   这些 generalized eigenspaces 再 **直和** 组成整个向量空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqZDmUoVfr9cpByOdtoDaylBcVicPQgMJej90ia6WRuBK2eia0ekG9MowAV3uiaua0wHEPaGzptFWNaPmAjh6iaWO9f5u3aQRj6h1GpA/640?wx_fmt=svg&from=appmsg)
    

也就是说：

> Jordan block 是最小结构单元，  
> Jordan chains 是它对应的向量链，  
> generalized eigenspace 是同一特征值下所有链的总和，  
> 而整个空间则是所有 generalized eigenspaces 的直和。

  

下一张是收尾图，是做成 **“总复习海报版”**：  
把你前面看到的  
**definition → eigenspace vs generalized eigenspace → Jordan chain → Jordan block → direct sum decomposition**  
全部合成一张总览图。

* * *

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctS52IvPJsMJYnjXy0EF5VEicQibicjsHo4mWGvwmfBempdchql3odAdLaAG8VNqdQib8kFjzxqzdicQSTuYA2WicbrlS2hPWQ5FAbQU/640?wx_fmt=png&from=appmsg)

## 图14

* * *

## 我把前面所有关键点压缩成一张总览海报：定义、包含关系、Jordan chain、Jordan block、以及直和分解都会放进去。

这张海报把整条知识链压成了一页：

-   **Definition**
-    **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1Q8LWL47iaB8NTg2ls0JTTkicGIKceGRcf7rfTdZy52F2UUX8P12HYWFYrby6QRSom0wRxVPQTjThnYGzHs3ATwOZnuzDAicydOkg/640?wx_fmt=svg&from=appmsg) 的几何关系**
-   **2×2 Jordan block**
    
     例子
    
-   **Jordan chain**
-   **Jordan block ↔ Jordan chain**
-   **Whole-space decomposition**

最核心的一句也放进去了：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YF19pZaT5fzgtXGCCNfl2ibsDUicTfI3wMQnm1ropYUEbBJfbMQNgHwEJZcRl12ONzxf86tIQTia4zbznZicmlSxuCaUvEkGOa87gA/640?wx_fmt=svg&from=appmsg)