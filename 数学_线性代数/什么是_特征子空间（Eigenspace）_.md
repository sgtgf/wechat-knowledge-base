# 什么是“特征子空间（Eigenspace）”


> 原文地址: [https://mp.weixin.qq.com/s/ZHXo6KHuF2fnRbmCwoVYGA](https://mp.weixin.qq.com/s/ZHXo6KHuF2fnRbmCwoVYGA)

  
  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuNVNp1HCK1bYKYGictdQxsiaiccpD3uq5L76ZM75UbibEWulC8KOW8N08OsOOWx6TrG7kJtLbx6AcA7GsPSxLzHKnILyxoxHEsCqs/640?wx_fmt=png&from=appmsg)

图1

“**特征子空间**（eigenspace）”可以理解成：

**所有被矩阵**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7l1DtiapIyeBBXWMUIZbPjBBODpXOxgZcwapicQjXH3ic6NaHdd0iactgFanBiaNVVYyh7PtbibY7W71Mx1ENGspyTHZen9qLOGiaNUMJCn8roSlFxw/640?wx_fmt=svg&from=appmsg)**作用后，只会沿原方向伸缩（或反向伸缩）的一整片向量集合。**

更正式地说，对于某个特征值![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyWZ2q7y3QEwBMwVuiaiaia8jpKQK8N9FAThHBRZR2WdJlJanKkhrrdiaOyGqKvjjaVaibzgL4SP3YOZHwcshh8YpkVzUACKEnyib2HMA/640?wx_fmt=svg&from=appmsg)，它对应的特征子空间定义为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHyWiaTWKhSmqXvo1IGJ3yrYVr42gxBIictK8iavV0dHr0qbdWWhL7ne1cuCcDQkOAJmAlUcCI9TyR4DaC2urRgqianKhcxMV3CudynQ/640?wx_fmt=svg&from=appmsg)

也常写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppZugx3icKTrVLXkW6HYfYyIeHNTf93vQVfhhsdnmNGC6P4tJlPfNGicORLzWErRr8qIzUiaU5iaqb81w4KaibU67Nm4bH6rpbQnLMbw/640?wx_fmt=svg&from=appmsg)

这两种写法是完全等价的。

* * *

### 1\. 先说“特征向量”是什么

如果一个非零向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSSSBkBJtRlj590bY4lmZtD2cnGKJypDVORNLoAh7J3XEuXsvRgGYhjXmcwXCo449icU7ic4FojxfJFuk3LgS0GQjjldeg50YHBZg/640?wx_fmt=svg&from=appmsg) 满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpdIGyH2ECvKKRcezZ9fnAcz0NDUeUiaFJpfNiawwvAb7RnKfRojXsic0M0ZlfbDmJ0aiaIjmSjCHLS9HWhHiahwribvHM9BH2r0AYudA/640?wx_fmt=svg&from=appmsg)

那么 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaANTlIcnFcTrZNetphB8GboPot152HDhicTYWOMvP9ImtDBgXEFkth2iaiaAiaLAHGJZnqcQY9TxeicMLKEQkUTP7DibsYf6B3YCRq9Q/640?wx_fmt=svg&from=appmsg) 就叫做矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ8DWjzdj7Z9yrWwfTu7x2Sc8a2RNqibwj2WX1QtKspRyHibNTKG4vKicyIC7M3nTTGtiamI6tc1arHGwvQhbBAAibRTvdf9ZmjhZ23A/640?wx_fmt=svg&from=appmsg) 的**特征向量**，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smouKDyEkHeNVKVfoeicCntEaNAFEwxg1z7m0QhSHCvuTHQyOH556Ex4cJnScc2r9KWSE39icBuPQ4Ukf6ktpAg1fGriaW8WmAvOcQ/640?wx_fmt=svg&from=appmsg) 叫它对应的**特征值**。

它的意思是：

-   经过线性变换 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCra7MC6vurlKQIjt4C3Bc7CNFpkHhliasbFnJepZnNJyCIeczX7FayK3Bjlia9eNmv5tWnjccV6xjpEOQxkqzU5ibXTcREevVwc9nOA/640?wx_fmt=svg&from=appmsg) 后，
    
-   向量**方向没有乱跑到别的方向去**
    
-   只是被乘了一个倍数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwkwtrWo1TEMVrwXiava1zomSkx86icg6cpzGJrp11veU1GYQnRbP9Gkpe5e7z07w8RiadCWnu2YuicUGTBKiblZrzGC91ZuqQIEvvdA/640?wx_fmt=svg&from=appmsg)
    

例如：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4RvvTTuNgh2XZicqibUM6YtjhjZpqDBs9toiaEBibxHvqaf91ywiaGSEp2xicGicFpnBxia0IH4DlfXxRtzUHCQpSb3wB2EHX3n1gAnmickqg/640?wx_fmt=svg&from=appmsg)
    
    长度变成 2 倍，方向不变
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VjKJSqCLh674fXzujPg3VQq79YXWxsD6qvCc7gnrOGibXElFlrD0VbssSFPmV1rl4OUicLSgaN5QibOick5ozuB3TqVicVmEdzJQ981X4q7uAaeA/640?wx_fmt=svg&from=appmsg)
    
    缩短一半
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoENdDniclexlZYvtGbDGNmUI8eROvFyyMryBgv3HhJTib3aHicElpy1XE5jyYWMhesvHcr5r6h5IoWB4oImgZskVKQ7Zeeic5KJCicA/640?wx_fmt=svg&from=appmsg)
    
    长度不变，但方向反过来
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtKn3lUxaJbf2aAYS6eoKFOicYPicXactWJVmXeqPwhJhmLCia12k9Jz5mZsndfad4UgOmV1rzTXpsTMic9rVicdmdIGUxrOibRFTCrbA/640?wx_fmt=svg&from=appmsg)
    
    被压到零向量
    

  

* * *

### 2\. 什么是“特征子空间”

一个特征向量只是**一根箭头**。

而**特征子空间**是：

对应同一个特征值![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1PN5eDDtJUVDEiab3LexF9oxDfMicZ53D4nFEQIC8sxIWD2e72ict48sXAxC9qsu4rsRZsL5XY00z1WRicddFIcGrwdmLVwJq4PrnQ/640?wx_fmt=svg&from=appmsg)的**所有特征向量，再加上零向量**，组成的一个子空间。

所以它不是单个向量，而是一个“空间”：

-   可能是一条直线
-   可能是一个平面
-   也可能是更高维的子空间

* * *

### 3\. 为什么它叫“子空间”

因为它满足子空间的三个特征：

设![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsniaFPDVyxL04RrZS3PAOIpFEnxPyOEVjTruia7aib5tdGv1bsx4C4WhNjOVzibQiciaQMvVqFgy4ibE3eLn6ZtKGuq60XUI3UTx9pfknQ/640?wx_fmt=svg&from=appmsg)，那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1OqhVIq73MgpC3QXwicb8zk59CMIC7yc2gvNlrA28cf5E9rLVF5zcriaILVobzPVKbONC2DfsJTibpV8bNd11c0DBPy4Mevsxic3Qw/640?wx_fmt=svg&from=appmsg)

于是对任意标量![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3Zl9Y1KTJAcqrKZdeoCc0I4iaCQib3iczncBTyrOjPATyy9cxZ57CLYG230VfSWlBgpDuTDFygBYTrficocR6NSsaa59178ahyC8tb7Q/640?wx_fmt=svg&from=appmsg)，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tibx7WdJTHQAYxxTR12meW1vR98wX26lYgcGNLkNHTUbnBGmS7rgDPAIjoRwXGGxK9YQIPaIJVG7vQriapBqKu7JxcibydJdMtkZ7A/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjT9pibINCdRsw2XAfibyYYJ2WjhJhyMwHNqAviaxGlOAPIpAt9c0qeg4o8Fia7sdRPcZFXwYJ2QawTF1hlwBkOktUnvwvskIoNrZoUw/640?wx_fmt=svg&from=appmsg)

所以：

-   和还在里面
-   数乘还在里面
-   零向量也在里面

因此它确实是一个**线性子空间**。

* * *

### 4\. 结合图1来理解

图里蓝色平面标着：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R120EbOlcBZD2vFJeuLKVibiawPApDWp7Ma3CXKCfCdaU9D97ztnoM8icPN2zicwvibkHw9ZY9V02WT5ky9MYC2ZV9KwYqd1rDRmKjZQ/640?wx_fmt=svg&from=appmsg)

意思是：

-   这个蓝色平面上的每一个向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL4VdDvIJdFgEjKJSzn8T8ATSsDKNwfbEvRB5dL2Rdv9veo2uXMdUvsrxWWiaPjwC7DgplrwFHlianInEBSbnNLggiaribn6UWN8ibVw/640?wx_fmt=svg&from=appmsg)
    
-   在乘上矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznj1Tq7GEO1Yb80XkNTxdnHzUfnLdbyGMQxDBC2jJMMJYM0E6lHR6EyqZfd4lvYXZ1Cq3FL4pic6aCK161sicgJkpreHhU74MzGHg/640?wx_fmt=svg&from=appmsg) 后
    
-   都变成
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtZmzIWoMmBH4d6WX1KISzV08HpQOByoGCPkantFZt2CefnibpPUYVX2CPYoqYQGHSNPJ7orHE86bPEP2icqTEfpWblzO0iahMf23w/640?wx_fmt=svg&from=appmsg)

也就是：

-   方向不变
    
-   长度扩大 2 倍
    

  

所以图左到图右，蓝色箭头都还留在那个平面里，只是变长了。

这就是图下方那句话的意思：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1l4SMjRoNbzBSZlz4J0NMSiaQJsazcia30r05TBZ93zpficnZ2bS0ibVlZau60PXUzibgib0J7pH8fibS8icURr6GyGB53C7fUrMl2xKyQ/640?wx_fmt=svg&from=appmsg)在这个特征子空间上表现为一次 dilation（伸缩）

也就是说，在这个平面里，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57d2W6B2MFGMsN8ffOyyldibBFicvxuGTrUaTjpKxmhVeeVZiaUXwjNcgXxAicN8wo86wGSFLwxmgfFokh5icHlN2U7urnpIhjUtJuT6QWHFFXDDw/640?wx_fmt=svg&from=appmsg)的作用特别简单：**纯放大 2 倍**。

* * *

### 5\. 最常见的几何情形

#### 情形 A：特征子空间是一条直线

例如在二维里，一个矩阵可能有某条直线上的向量都满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tg6EdJofI6aMbQfSOPHh2cy5H6dCc5XyevpeTiadmT9Dh3I5QCeRaYCcuUkVm3m1Qwwhq9FraQpkhkhVOL7ylYicbFZ1GRHDyKAkErd8BHFibA/640?wx_fmt=svg&from=appmsg)

那这条直线就是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2pXUUZUgicQJicflFDFcAn7ic50r28TfKR3tXxGhtOY6EpLp50VZaiaHpJoUCBBDuJlwXIjIebCrRrawCaVZrYxt2xRneVsHcChEgg/640?wx_fmt=svg&from=appmsg)的特征子空间。

#### 情形 B：特征子空间是一个平面

像图1里这样，在三维空间里，有一个平面上的所有向量都满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OFwht4mRibVYlnhhnCsfIsVLQ1k9jwjibFPqAGy5ctP5nzG0enFUVqtCJm94qgGARBT8ibKhrXM0JMbwTicCicib8tSqYvrN8ib6jzsOag/640?wx_fmt=svg&from=appmsg)

那么这个平面就是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dPNbGXrxcnFAxv1Hbs4fXwR5CJGwIzg0YwW9pzgXLrdoU8icLr8qAk9sS93brpO5o31LtpTIES8rc4pBlc1U9KcicLdib3QjG3uwQ/640?wx_fmt=svg&from=appmsg)的特征子空间。

* * *

### 6\. 一个最简单的例子

看这个矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpDEyLfXltDxb6WTII2Mz4COJXCzmgwoMMA6tWsuPyyyMbYAjMy9sG60pywdymfBSn77KdkGDKszicSVtxkBHpiaSWbRicmzqwmPDg/640?wx_fmt=svg&from=appmsg)

它对向量![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHNcRibdTQPdPDBz8bE9qVOJFVmyELR97fKLHC5AK8s4icb8uia6L1OFJxdzRXwRq1LUUiaDy7yic2AEsttm1RbXWiag3CyBia2jEIiaJCw/640?wx_fmt=svg&from=appmsg)的作用是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqiceCIIGEJk7qtyASmPg8tXQ1JX3tFFNMXJTfalfKURyuiaoCOAPX8atppaJ1JY9ibK6kYnL2jQOMDskuib9Ohiam0wReLdvNiagx1Hbg/640?wx_fmt=svg&from=appmsg)

#### 对应 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM65miagKj3LRvUukAPibp4pW8QvQJrqEkEZOIKicxbq1cev0CQxA3JLtCia8BqA0M4cpLAYia2TFIsb7wZW8mNU58Fu6TxoSmrBcLwLiaYu3uqgibBrg/640?wx_fmt=svg&from=appmsg)

要求

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAO6uia4YflvDOTTibDv4G3iax5uj2eUJ8SOwic0a7CWodmNVicy2NiaZRH4icNibm4SFHYVz6ibyx2gjThtygDh1LUibnKaOzL4K8Qv7qvtg/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDH7cTqIg056aJuUibXXLq4El0ptdTBkmDjADHXWJ0ibbv4wO4f82yWVaQH2XGqvdCClE9yrt7YDtonuKXicblgnEBjgmV2Pj87Ew1A/640?wx_fmt=svg&from=appmsg)

比较第三个分量得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbGBdiajHYVSkHtSEqic1FicW8oMSR81ibepZvFIza7IOHaZUDGL77kUNsaD5ibAKv7LU2Xy0pWUiaJfFpCqduT8C19mCvQQsFKuFcAgg/640?wx_fmt=svg&from=appmsg)

所以所有满足条件的向量是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5WDF26gRGMWZ0ias87uWPopGKtUnrypibdx5YoAormV5PlLraAaKygyGm0cjGEkYbq9OeQF73EaDGpC2U3y7zxc4xCic23EY3ABMc16xyNuCocQ/640?wx_fmt=svg&from=appmsg)

这就是xy平面，因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsns19tNAHrJ210fItvyicnJkvm1x0B7sa5guTYyH9jsEian5iaTn6u9MoK742GJxuhIGTYSmJibYW4YNjMGOrVxQmNicYH8icZY9V2sGA/640?wx_fmt=svg&from=appmsg)

这是一个**二维平面特征子空间**。

#### 对应 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47JBXTB9niafJDnTKMeRqYeL7ohM3J87No0d1rNkQJ3Zf01OzCLAK6mzECW5MnlzEvtdSdy2Uib2nKrhzOYOngBgQhtiaZibFCCia2dw/640?wx_fmt=svg&from=appmsg)

同理可得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43TnbnmE0kzm1HARYomq7Rdib1EJaRAz9ibu9RhRkqpoibtHlHJnJCpjHqwGKcB8AUCx6oiayWvAlcibXaTmLFkJLLCGO1ecyWOzOaTytRg/640?wx_fmt=svg&from=appmsg)

这是一条![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0dlm1FLpnoQEibJQuAXb3biagKrakwrzxLztWgccsOb9fiacY6RQMAHuVstiacyQ28eQcFB1N8Xic1JdNLic3uGH6HFWao9dib6ppftCw/640?wx_fmt=svg&from=appmsg)轴直线。

* * *

### 7\. 为什么要加上零向量

严格说，特征向量要求是**非零向量**，因为零向量满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R1yDfXyMB4MxDOwsueVDcZribmicSjWMKCMOSaJDnrnO2dcliagQibtoOU1ic09bzd7iaWbloiaGWDLoibI5gOKk6uN6Xp1PVQxHyUvsGMQ/640?wx_fmt=svg&from=appmsg)

对任何![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lelJxu6icj62jbpxMIzgvem9icXctSNV6gCjvk8phRnoO8zWJUSroGfLyZ3VskcH9VpOeha2ia2hZZkribAdnRWYfQickt4tvibia4wCjjgoQZvhaw/640?wx_fmt=svg&from=appmsg)都成立，没区分度。

但为了让“所有这类向量”构成一个真正的线性子空间，我们把零向量也加进去，于是得到**特征子空间**。

所以：

-   **特征向量**：非零
-   **特征子空间**：特征向量集合再加零向量

* * *

### 8\. 与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJAKibSyOic9rYtM2ZEj3bql0bOAaGibNhbEUIibQRL3NgstpOyS6Ydo2piapwAShpv1gSdT7YSEDtq8YlbaU4OsjB0Q2H2n0VdWjWNA/640?wx_fmt=svg&from=appmsg) 的关系

由

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ohLSnwsmOgw3aL5SDFNkFnwQ6yewiaU7yeyFMbWxoPibZU4OrHiaFL9Ms99ArOKVu8sZfYHsUHvJbZkaG6IhOfClXYmtjmDwBYrpQ/640?wx_fmt=svg&from=appmsg)

移项得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAATncdzXfh9XPKguOS5rQLYPPr8V881iboSMOJYKlCuREIxaTx9JTd4VIgrFhzd0161m36XwdAEPiciaABxlnpebc7n88cdNBSdbQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK2ZeKgJF6CZhHlRVqduCavea7HJvcrtn7jUvpcUI02MUcJib0LxbTOvnt8yd2Sd2FR2D9Ojm0DFBjKQ0p66osy1psEyMmktm4jw/640?wx_fmt=svg&from=appmsg)

所以特征子空间其实就是矩阵![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49UGeW1q7sCNKXy7wsjryIDyianq1OHINgYtQKombia2PpJPVyNlYibjhPoMh1ySO5KeAzp6maHzLnHIibh8Yen2fMJr3ibrtAKnxwQ5wJcIYGKCw/640?wx_fmt=svg&from=appmsg)的零空间：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGGUbMZ78GVOibye0BGZV0H7YoibiaNYGNOjpmiay3x4Jm42xdQicjstSibEFeEOxcneSsWXiacOCTdEEsObm4BSRBRe9bN8KCpDeuGUnw/640?wx_fmt=svg&from=appmsg)

这点非常重要，因为求特征子空间时，实际做法通常就是：

1.  先求特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNR7z5dm9iczFeTpfbGzs9Fiaj04GDQSibkSZY04yOOqPnqN7c0nLv4417WicFMlSiapibfauoU2EubWibC52PRMibLibFRe8ttM73nOoLkg/640?wx_fmt=svg&from=appmsg) 
2.  再解齐次方程组
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JLwiae4KurFDxsksQbEibdfK0k8yhn3NpzFM2dqVzADtaBMpZeoJ8EecafDZYTf5GZrIy1hyJEJTZ7tO0AB7yVIDbuLzibJ8AZV8YQ/640?wx_fmt=svg&from=appmsg)
    
3.  解空间就是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0xzZVcpXQiatRPGPHdq4W7Yxbfiat9eCyibyf7h6ibexaklK2NynXwicPwg5LiaT4VSUMAhHeN1hZSNl8ib59y3iaP09PefKkVxlO8kmY8g/640?wx_fmt=svg&from=appmsg) 

* * *

### 9\. 直观总结一句话

可以把“特征子空间”记成：

**矩阵**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7aMPvEgfwW1OtHGMOwoNEK2briaQUhkdZQ3FiatOW6ufhJIFX20WOgEnumLEK2hIK4abdHKfbD7rOP4ut4VgPzsB1K7AkjMA0SLiaDTux0CoM1Q/640?wx_fmt=svg&from=appmsg)**作用起来最“老实”的那一片空间。**

因为在这片空间里，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SO9KJxTN5atqSxtibt57yY5p8IHSAjYibQ7ko6d7DgTicZTM2NtdzSBAmxx5MLcuIAKRe7qO9keicNic22Y36jVWX3QvvibNianZTyI0eFfV0P7TkA/640?wx_fmt=svg&from=appmsg)不会把向量拧到别的方向去，只是统一按某个倍数![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965U679iavV1AkNZ6iaZlJj2LAiaMLZt1dJicqB5TymL8pF649846Xwsvn5RVLTG7ZacGNUrluGibFS3lHpQJpYXDf9Gj6Ij2VsrFDVWw/640?wx_fmt=svg&from=appmsg)伸缩。

* * *

### 10\. 再和“特征值重数”联系一下

有时某个特征值重复出现，比如![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg55fibIFXiabJIrPaEFWozFVjrez19VfuOAqSkZMh9TzicdEOfWV0OlqjT2JRtibmQSxedo27wJB9kJe7y9wB6hSwI2GcKiaU14cZlg/640?wx_fmt=svg&from=appmsg)是二重根，但这并不一定意味着它的特征子空间一定是二维。

要区分：

-   **代数重数**：特征值在特征多项式里重复几次
-   **几何重数**：特征子空间的维数

总有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuAWT6FPbdGcrQaONNpicpDDvyBIPrJgkWzRuSEp8pDaiaXOEqqV4e6JZITnUZjcNR5UznKOoJSMy23FRKKsgxMldmUmen268h3lQ/640?wx_fmt=svg&from=appmsg)

图1里的情况，就是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6SwkGdJbiazqQ8nx9BhBPQbnPibWiaXGZ4UNshJf5f2A6ojP1EGNNibwgeDraz8JuILNF7mibL2Vc9nlhf01iapkcJy3ibWKiajooDnS2icQ/640?wx_fmt=svg&from=appmsg)的特征子空间是一个**平面**，所以几何重数是 2。

* * *

### 11\. 最后用图像语言重新说一遍

图1中的蓝色平面表示：

-   这个平面内任意蓝色箭头，乘以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH8ex2G1VI8xDn6h1wo6oEM0AicUslOVZ6KqHiaCibqF3h7yqNH0DtRxFicRyrm4rNNekibsb9eicv2PKr6bCRl9A3qtiaVUFclGvOzo4w/640?wx_fmt=svg&from=appmsg) 后
    
-   仍然落在这个平面内
    
-   且方向不变，只是长度变为原来的 2 倍
    

所以那个平面就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47P7C9UW8C2IEPfBpS7VMUicnwwmIZuu6b19CfxZD6X7JxfNjzzkGCcdvnLhIF8UonwF44n391QGykeuyA2bXYB9iafSicH4wEngfg/640?wx_fmt=svg&from=appmsg)

也就是特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmfNMsWGMBjxrKaGpd5Ur9fnfj1CKiaDWdibjKweWEp5wbv04AbW7pOwecDfclj0teyAPNrnjia7OI5z3leSmsLX0WTjt0OcbAL7bw/640?wx_fmt=svg&from=appmsg) 的特征子空间。

* * *

下面我用一个**具体的**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQ9AxnZRZXA1t2r9tBwexf6QiaOpqiakFN0NVOqN4hGXjRicsj9jTbArGKs5j87ZAnwkK8maZOGq7xClJibL7xwibwuBibzm9qbZQoIhg/640?wx_fmt=svg&from=appmsg)**整数矩阵**，把

-   特征值
-   特征向量
-   特征子空间
-   几何意义

完整串起来。

* * *

## 1\. 选一个最适合看清“特征子空间”的矩阵

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScKXpm0NE53E07rsg4QBj1k6k0RWFZiaCSiahiaFuQhfxtVQ6thOwHuBy23z2tgWZia0YibqDiafSvbGiagFaxk43xEexAndn5kuX4NK3Q/640?wx_fmt=svg&from=appmsg)

这个矩阵非常好，因为它一眼就能看出：

-   在  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwtF9HMJx5qY1WdxJZrplmMUpPI4esq1ibSDoT1s4gVWmc0EzIEE2vJGWQU2BF90SNjhZmtq8bfS4PdxQZZ8Yib6q22zhdd2c4CeA/640?wx_fmt=svg&from=appmsg) 平面里，统一放大 2 倍
-   在  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwvgoTT6hwXnzH1jsOXUDEK3mcr946UXibH0hPQt2uODNeX8rhVw2WzVxS7wiaxWeMBo1QbCfGbmeQQp6FCkR9G9PzrU7bnH6b4tw/640?wx_fmt=svg&from=appmsg) 轴方向，放大 3 倍

所以它会同时出现：

-   一个**二维特征子空间**
-   一个**一维特征子空间**

这正好适合解释概念。

* * *

## 2\. 先看它对一般向量做了什么

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJNwEZcRgXKyQmzy87hiaibcXXZ9IAOLN4VobDqpbp2SichVatUh7Fy117NGrGiclB5rKKciaLiaIE2RiaswtUbtHK4fskhYYTm1S2LWSnw/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZSWuuPaicnL20yZpSY2gHZ7XZYT4QBanib6WkEibby5HC4wkREBFV6UU8UiaGq82emyV37icDG1E0nINfoAc4GynAUgnH91Mt38EyZA/640?wx_fmt=svg&from=appmsg)

意思是：

-   第一坐标乘 2
-   第二坐标乘 2
-   第三坐标乘 3

这不是“统一缩放整个空间”，因为不同方向倍率不同。

* * *

## 3\. 求特征值

特征值由方程

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7iaaQxyJyAFusVhnJkj4YVpoSiaHY8fbhZ6X5Pe36ibQOcFv80ibRDB3Fgiajvvztib9OIFGY3v5h2khyt7jY3DIvNsCVlSWibZibvIxQsqXNc1cvL1w/640?wx_fmt=svg&from=appmsg)

给出。

先写出

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4ukyQRPmdx8pDia3Bb7yvuj0ujlSh5eN1ckPA3ibuOaFyYXLhOJ3uC9eW2YCGl2a9W9Qicoop2GjEajd59It1PkcoSdBRSx2dPcXg/640?wx_fmt=svg&from=appmsg)

所以由**[特征多项式](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247521396&idx=1&sn=fc7ae1826ead365aaf91512d833dd96a&scene=21#wechat_redirect)**

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGELy60XgxX9HicmLAfr7oia3cQ7s0DBEX35zlbRT6NIPuSDEiasibAY7GUibzcfJ7erDOmzBwSAicUCDIXg9fwrpGuWhvZ1ViaRF7V99Pw/640?wx_fmt=svg&from=appmsg)

令它等于 0：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCra8TQ2Lfztkaicv5FjBKV5GMjFZmCiauuicF4Mdb68DvpMJfcLImTYUPh2ZnE8V9t85VaHPGAwwezNTRF9nS8v2qDhkiaDrxkCibPjzg/640?wx_fmt=svg&from=appmsg)

得到两个特征值：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6lKq7OgTLib65cxCvhaONSxR6sjvCaem5NztyaWPaEiaEJpUMcdunxw25VXAiaYZqHRIib3vyB3sbKUOcu37zuCvnJnEAAmU2GPLGngzKMIfOuBA/640?wx_fmt=svg&from=appmsg)

其中

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7KAkqbbOoqWdH2g3sqXehl7RPY8lXD7nHaUI8dCxhiaWr5j6gr1FcnahPY5sCCicQQlb9sqBYUKIJDbZiacDUjYptiazuK60WwtvYA/640?wx_fmt=svg&from=appmsg) 的代数重数是 2
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCskssNMnzuib5AXiaJPKMRibzr1a7vayLuMp0nv5jPUEPTqaVghfK5P4RDv2uJF6del1D4I79wJAw7jpIC0OiamsEQicKhib0jHlNaMg/640?wx_fmt=svg&from=appmsg) 的代数重数是 1

* * *

## 4\. 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhR0gcnOKbdSq7M2nuJLAjOAXAmJibn2gfy6niawek97dic9osUHtSlRJdAGwvU2WsibAwqZ6p0O3WhibmS1aahrtdTNibl99y3SjOibdJg/640?wx_fmt=svg&from=appmsg) 的特征子空间

特征子空间定义为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM598fbtext8cDyFNwwUoqpldxFpxViaqicvjHDRwDmvOyKFiaYTiaNibG8iatmRFVYBka908qxTDR66kGyoraMPSeqt83pCGbaRWp1ibv1CecDVC7NIg/640?wx_fmt=svg&from=appmsg)

先算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtRTKwKGVqBT1JuWegNghRtkuPBibnQWBPfHE8ysmic108nrSLYsGDqn7zibibfMhzVvGzve5Oic5vvTzrsRMY8DBI66DBPY04lLtW2w/640?wx_fmt=svg&from=appmsg)

我们需要先确定单位矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic0IUCticJGgOUN3lPf7ibL76hgFh3fgcCKyWNiaXiaibklMN57cLVMtsw4Igr3dITBBNpGtNiaS5U3QvMkE9hurnyOF3iaqWXWwXpiaXGQ/640?wx_fmt=svg&from=appmsg) 的形式，然后进行矩阵的数乘和减法运算。

以下是详细的计算步骤：

#### 4.1 确定单位矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZZImRicAUGWjxTIu5DRBAZN6OIkLAjFyQSWN71ZmVnkj3qrNojeaknf7ukQBhB4HtnFOeZowocibjnQFib4ibjbgeoktOvQLA1cKrw/640?wx_fmt=svg&from=appmsg)

由于矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69gdJ0ktiaJZoqnbu0rozDazgyibkzYp3PEvnrrys5MRQQhU5ZPxzq5bsbIx6Z6ZQvYvRXfOialulZjxvKGQLdwiaEFH7GOnxnADHmeOpZ4PrmNA/640?wx_fmt=svg&from=appmsg) 是一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59uXhfsorpcsgQVQPkOMPB4DiapVhZGugyiaTZs5seHSZeb8cZia54KhBqibF2TaPhy8DKBzf11f78zGgn38W5A9PbTFuCAkIEBnBTEBs0iaVW6Fg/640?wx_fmt=svg&from=appmsg) 矩阵，对应的单位矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb775YibnfdxhFMcVleK4ibuBbicqfHteTCMEick4GwkXtQNwT6xD9U0nzTeibLcR08lccFws2eqviaW0jfn9J6hAo7r9dgD9lJ1RPT8rlA/640?wx_fmt=svg&from=appmsg) 也必须是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRaeA5KT8CHlNWdVhnLlz917c71IHJiaGmZnswOp55TwLnufibOwkia9aMc5QFmeYTYdDYibpvxicRZmznqIfkMhVIZXib8icZj7qytR6w/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHZmRfHxeaW3a01eJUcGbNk43x7G8IgQbmcibr9DQp863Lf24ttg6nTUVVygsmItboA4orxgO6vviaHiaXc9fPTm3HwocSKHcE9x4A/640?wx_fmt=svg&from=appmsg)

#### 4.2 计算数乘矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuAhaQTFbHhGkciczYP3ianbJAOjGbJbaHmbj63QnAUHXpFmOticFtcTMpzSc0zia06P0oZjkzl9Lku8yyjVn62DlVg5yIvqHmhx2lg/640?wx_fmt=svg&from=appmsg)

将常数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEhQyoXmvqaM2lvGUh3VVCNnsRicE5uPhkiaw3TAAxBovbHzwP3jQaWVUwPjgF5eIEHIic4RjyI6Gx4qP2Zdjxz7JqmVqWLQoPQjeg/640?wx_fmt=svg&from=appmsg) 乘以单位矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgtpib3VUq2sss6rQia8gyiccEwuicZB9wtsicJSJGZMxOoXjAiaNApan9xyiavXJby26iazIr0eMj5yWDS7ETrureOdXViaG0FrBMgpJVXw/640?wx_fmt=svg&from=appmsg) 中的每一个元素：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GXFkp3OibibKZbOYFuXI92dpazTYZC8vIZnkL20icjPfUdQyn0wQiaWTtgAaDkhBRbntMf79uuIk7zMGlOZjp0vx52ICFq5apFJnOg/640?wx_fmt=svg&from=appmsg)

#### 4.3 执行矩阵减法 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp19DGaDYVpkicyY3ITfCKeDyicicnZib1pPkrZT26t2ZKVNQnlNmia79y9uo9qTQhNiahCcWZ304x1uzPCO1BQdcBTEQicFZwQcWtYt7ibQ/640?wx_fmt=svg&from=appmsg)

将矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV0bs7FoeHOStvUXia0bWzlrF4EXymcBVOsh3M1f90h8YCum0zXWIjWz3kOGAd6TPfbFPaUf2e3XFLE21rCLHrSJPkNbzqDvTULQ/640?wx_fmt=svg&from=appmsg) 与矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM63o99F99ufSJBCOSDMn5jUDfUU48Ldm8YjJEa2FwibyqyC57K6SkTxWpLsKp6UbhFRDnUuiaYuzM4dserEy2lgKwmF9MFHV2VrGEOvPUP5Rh1Q/640?wx_fmt=svg&from=appmsg) 对应位置的元素相减：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctycVoUOkice4ia2GCuAvxXB6u8PnicSWuwlSwhZcHeodnRCbsWTUJzVZUVzIm2vz9qR5GyVNRTOBdxBQEG1JSdzfUzbib31OfPoFw/640?wx_fmt=png&from=appmsg)

最终结果

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvvQfKcuUAjWTHIYnb1JzSQbYRaBUQWmlollJ5iaoHPRicTibJ0ibPRt8zcSV5gkDBPJbNv7WoWesW99ic4Rrzf7nsdoljhy0bqYk24/640?wx_fmt=png&from=appmsg)

要求

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVVztfqiaKoK8vupWjOIfMsK0QxzuFPz7f5vsVg32EHtKCuOh0yBCvHJG9lOI1hyhxicqMFzKuuJCb2WkeVzvSsicibs1tE8Gic5ZPY9w/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1hWJIZ3rRibHiabhF7Eia6nSaa1iayrb6GRxBD6MdJU6VmDlgnvDhAceTfy7icM8W1U71ksb3nSrmibKjnGibCy12CjiceyHvDUPuPdoYQ/640?wx_fmt=svg&from=appmsg)

这只给出一个条件：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYJjlwZcx1jmNUD2YL1rJc2fT4KvDia7fHBbTSucDMHMYib1VHPeTj1icyWFKOD4FUaGcozN1IlxqUJHqQOo2h3gicOS0rXJElsiaIWQ/640?wx_fmt=svg&from=appmsg)

而![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXvJ32CiaPwVeJush70n70LnzavoLpQrmU75hvdlNEcw41w9xNlqVrKxVPP3OKgjeWXwxdaTnM9Bt6XsxE4BKTTqfyHhNSCrWMtQ/640?wx_fmt=svg&from=appmsg)都自由。

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7O8xicrJAo3R1pn8Nu8mKXvUOG6iaLxMoIhEM46DxjUFcE9gHA2Aciasj9qBtD6pcMI3hPLFgEvFGGSkwiajVmiaupMmMaHzRhEHgZg/640?wx_fmt=svg&from=appmsg)

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpVdZicga57ficyXj0jHiauI5xMIYoxOfyLEoWufd8gxvzOnE4eia2T7WRDSXiaDE7icWiaqEnUq2Yc3omvib6Z8ut521Qe90M13UTqkXiaw/640?wx_fmt=svg&from=appmsg)

这就是整个![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEkBciba271R1KBunFFeWgeZx7NQyUFejicofkibFOkIRs039agdnBXdSiaGga7xV8zKXxdllEEWMX8PTwOsDiclzukFXGGgV7lOsWEg/640?wx_fmt=svg&from=appmsg)平面。

* * *

## 5\. 这说明了什么

对平面内任意向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZJKpYKR77lPbZK3jd8kkGGHiaaSxmVLGGa9q24micQWSC2xqAGJgt4Uiaegic3AZPf1edxc56DPEwLkA93vpFsPtoOdnWAKUwCqEuQ/640?wx_fmt=svg&from=appmsg)

都有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau6lSZ5WAPGdpaReLbquE88rxGfJkt9Iv3ISSCGykovRIJibFeb03ra1JjE3lLnfFn8nFewpJEe8iaHnHjebXCmmJcDQUjZ5nicBNw/640?wx_fmt=svg&from=appmsg)

所以：

-   向量还留在原平面里
-   方向不变
-   长度放大 2 倍

因此这个平面就是**特征值**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJfibz14lC2G9d9wmtNia2NGFMLTviaDa0bgmxtv5E93BjvwmWWKODj8JqHGLBZHZuExiaqczstKiaWmI7G7oT5lBria1niaaew3zFHwkg/640?wx_fmt=svg&from=appmsg)**的特征子空间**。

这正对应图1中的蓝色平面。

* * *

## 6\. 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsnibmlkL5A9ugmmibfe8YNXvzw42QkknOovVKfwTbEMgWEiaNibnKVWI7L0NWyWyShPfAf4Xpj9L9CFCeozlz2uNupRf33uuD02s44A/640?wx_fmt=svg&from=appmsg) 的特征子空间

同理，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL1Kmiam3Q56w7rib6aGuvTzHXKZtfDkuqNnzLKaCnbdzyNDjm9Hia9AbiaXNRiaiaEfqpa4Rt6UugYUbSjggRh8cBNrHpQm1ALuYY0PA/640?wx_fmt=svg&from=appmsg)

先算（步骤同4）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNH4hWmFwweL3Nwa6zboS2ia4HUlPORYzJSQ8qFuygDPTQ0os6iayibiaibM0WnWWIENg0g5ZlyC4P48RbUDMK19mfZO3WrbVbvALpWcg/640?wx_fmt=svg&from=appmsg)

解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdRnmm59R3fF8FvN8EVwbj4lb8AKcSwpCfj3KKrkW3JNzn573AO87TvymeANHCZe8vXnVn1Ndwh04ibWdFg9XRGRwIeia80aMIxPA/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4RvvCZs7fic4vnvZVLxicFKAxjjjQoz6Nz3ucbbRibwpTGicUNDstEiaDzZcu2NHtx97xgJgVE1cXVL8Lsdy1wSd7wzsBERUvyM4CWrAA/640?wx_fmt=svg&from=appmsg)

得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjTwOxBicH4HsCH7gibkAq5Bjx7hXzx1RHEsqmkibjJDYHXUG0GSIydiaibMGeKsVYnEQQ0pziaXHERwN81swUll7SnVL46qjwGApAFmyw/640?wx_fmt=svg&from=appmsg)

而![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPcn1cNSKJQMZI6Elb1qOJO9jicBXRe8X6rLJafu39HgnPMiaCVsr570cfsJeibvManvXWHQOjNzCqiaJgNTThDjspNAiatflDGlhWsA/640?wx_fmt=svg&from=appmsg)自由。

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmX3icnuAyZNTRjSYjVwxlVpK7FHnTFMYaXAeQAratpLnOdjH87m1FKDiadpvsYWib0Lu04uzBTAv1lGW2I4qibow13Tt1kuR8pEZXA/640?wx_fmt=svg&from=appmsg)

这是一条直线，也就是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUiannxPlMjxI8pUyibSdltCNQhD6TeRUtibBGSscOM9TatvuKHUbUQTUohGFlicAY2tUwkVKrovTMMic9xOMueyu7ZglrpFBYFR0YTg/640?wx_fmt=svg&from=appmsg)轴。

* * *

## 7\. 几何上怎么理解这两个特征子空间

这个矩阵把三维空间拆成两部分：

### 第一部分：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaeTuNE4RavQFia7EdDbKevibZCYCyeKROd76WDQeha9jlV8T0KXRU0hGPoSF5ibN15eOL0KaJtCJjQmZP2DjgThWRa4y1wUicjZPYQ/640?wx_fmt=svg&from=appmsg) 平面

这里所有向量都满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH9vBxI8v7zwLoNCs4oHMADedGCVoolYteVonUTiceHtAkadiaTBAK8eCWn8HgK3aOVn2BzPjc7Q3mSTQ9MtMkh2Ltg2jabSWWSng/640?wx_fmt=svg&from=appmsg)

所以这一整片平面是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoB1ya3nJX518jEBBX41XYjgnia2tIAuGXfT0vhS3VjU2fRdg101laDQGTP0Eb5JMajB1uEOkjX06yVFgibBXgAbficZsplv3z1AWQ/640?wx_fmt=svg&from=appmsg)。

### 第二部分：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt5MyA5W3gBxrzEzqrX0jC52hIjxzf4vxxTn50ibFtBBJ3K0xJWwdvMoMFzwiaUNxB9TgrpoI3blxQgic3OEe2gqBMgSvvxmUlqHRg/640?wx_fmt=svg&from=appmsg) 轴

这里所有向量都满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaADvyNiaXH5iaASNDriccib8N0COnicEibFFaro9PMNia0rhmkhn3fqQibgVFsnj2ZqE2pHFjqPTmWSSdrVrzZ4lVAODOOvQlDKwKzaTxw/640?wx_fmt=svg&from=appmsg)

所以这一条轴是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt8d2ZSrsZclpQnxpcpczXiaicXjANMfwRb3IgPg61TPzQW9ELiciaHRicf6Bad3nlVZYLRLfTgSh5kEoQ9RANT91sx75jrsqTJFWw6w/640?wx_fmt=svg&from=appmsg)。

也就是说，矩阵 A 在这两个特殊方向/特殊子空间上，动作极其简单：

-   在平面上：乘 2
-   在竖直轴上：乘 3

* * *

## 8\. 拿几个具体向量验证一下

### 向量 1：在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAYBWJXAvr6W4rmJYrU1eYWWEm5GlCr5pEELfQte4l6bLtOXNWI1TNlY1H5OASVpXEXpcIRVgy7zRicgu1GseYjZtrGbkrvZu1pQ/640?wx_fmt=svg&from=appmsg) 中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM598fbtext8cMAOtFG0ABVKwUiaibLrsRWJTUhiah4UHLhgqraBubL2N9YX7Sh57JXcc8QhH0HGhNBAbnRYcsMVGSm230EQMIPwoOztOEwne6ZNw/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEAoiabhv3bsOkeL74fIPNy7QhbrGqXfastCiazw3506Eh5Bfnb1O6YGF0QbU15d15mibJWPgxlMCl06pGntHGjoNo4cpGx9zVLic7RA/640?wx_fmt=svg&from=appmsg)

所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Picu8BaOQzeeWgVcMdnxGG6deLBdysoIkP4u1hicK5c11QKhibk7PYyYIgIq1sJLkHccOGDBtPdZVzLGibfxHSq3Vwd6llUZN40X9VIBDKOicPUA/640?wx_fmt=svg&from=appmsg)是特征向量，对应![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7B8nVEBQSs9e7aMh8f7QvvpDHAplTiceeliabFg1Y48WLu40PBDlibRV0pNJ7dVtTibVvibia6A7QtTaKcrqXjSZc1Tgv9uPDyHBvLeg6dKjDaTz3g/640?wx_fmt=svg&from=appmsg)。

* * *

### 向量 2：也在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuIiaYh3I0mfxfA2c89iajCK13ruiblXcuajnLXGVEB5DHkDNHrytgJ6aaRz6M1X9scZEnxFWZowlA06lMdy80WWDue8Z8JSKuibNXw/640?wx_fmt=svg&from=appmsg) 中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHyexzZs2EkLtxxrIUW9FuAHOEozSseMDxia07ib50NCrbnn1ZYtiafSgC6nkYlMLIcg0JoRaaJWiaqbKRk2uRHnFFvghIdqoRicd5HYw/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JL0PCTgjph8W8oRUiahR7zOM3diczia94PyA9WmXpHCeTc0CwdXlWSPicngdia4P7CCFLsGHliar0U6icpydjiahQj9tyMQD3OojcWTdGOQ/640?wx_fmt=svg&from=appmsg)

也还是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79uP4ncW83FztfW7iaKTzrB5vIrWMHEAYQciaod92ClYv94HNWhYSK6fD8bcyUelHtA5rPx7nJianYEAaBBJ3O47F5VdoDBpVJ4eicKNvuVwt00g/640?wx_fmt=svg&from=appmsg)的特征向量。

所以不是“只有一根箭头”是特征向量，而是平面里所有非零向量都是。

* * *

### 向量 3：在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfOjjBLvhkDlH2tB7Xa6iaaE8ocWI4P9QodO04glCdq5UQTPxR0uq4SwCN9sZ1vqic9Vp1M6JSbiaLq7qjy9dgUP3crlbGWelEdznw/640?wx_fmt=svg&from=appmsg) 中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amW9qKa3o6etGiaZP2Uf8f83lm6f1PoTF6ZZRjaPtYtnlILenX7mWDfFjDE2PibRbwHMPtZmxhQvv3UGkTtGNdmkA5NTGz5G514ibA/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYNmjGX5ibMKSyItcboFaG44GyibbXPuzrIPgovJKdm0dRcMsyt2xVpibtXsJZdkanUeU6pWD5jGD0EdxXL4EVnxk4hzYbTn2nWdQA/640?wx_fmt=svg&from=appmsg)

所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPqYwnzke4JpANgN6ufU88HwlOmmZuvPRLFUsZibgS6HjR5X2QibnAw63cxib500NobVW2c3RkSnGoKVVdXHlNRcPee4sjoHp6fJcQ/640?wx_fmt=svg&from=appmsg)是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tg6EdJofI6cTUGw4xtp93ym8ia5VPYl65uG6MQvVI3XBomsiacial4gTZ59iasKao4dPh6KBBRUnGD3zPnl50XNdm38kTdVtDm8zboycm0olN6A/640?wx_fmt=svg&from=appmsg)的特征向量。

* * *

### 向量 4：不在任何特征子空间里

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaXOffF6v9y04AlEW5dSFGHW7vhpt2hZwWeicDajKfiaxGaNHZKb96ib0sTkQuJ5eYWJGsiaYP8CFWibfEAOkZ3xnSjTQ89LKRrKEbDQ/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM55V7C7hCRTTtOghTJ33sRY5mMsnyKaqsJqBna5Fv67bycyIVl4tcaKicKEdeuWrtta5ia1l6qFKbwjOUSQC7ibSx5XAEtu5Bpw9B7VaMcbkic1EA/640?wx_fmt=svg&from=appmsg)

这并不是某个数乘上原向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuCv286ThMAhiaQrvXL4E15iaEXqaBFVJVJtOTJQkILSqqj7g58EaPoHl1Sribh2dCjrAdZOvDvlemdDf9S1SbfFPLGAZ19GoNkgibw/640?wx_fmt=svg&from=appmsg)

因为如果是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKHxwUhXZ1SwckljlbFsAV4ns1lZNKibMrlU73pMxPpibUv2xNardllaNicCl4FsPa7OjNtEmb9kTKQmMEicXNYPNB4ouf0ZnS121MRQ/640?wx_fmt=svg&from=appmsg)，那三个分量比例必须一致，但这里是2，2，3，不一致。

所以这个向量不是特征向量。

这说明：

不是所有向量都会“保持方向”，只有特征子空间里的向量才会。

* * *

## 9\. 为什么说特征子空间是“整片空间”而不是“单根方向”

对于![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPubMY3eVUtt4cKHLicoXP0g2j0LMyfvryrw8nTvZHU7YbqDicV7icYuxE9SlKlEVQyBFvbYpjQuTiajl1deAbu3pQf4AtzZUqk6Tj6Q/640?wx_fmt=svg&from=appmsg)，只要![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUorvADK3Ye41o7xvU2ibHQLGZHrM1HK5JIRwNdcKeevpiau0tgspH1s9ImnsCUFlbr1MeGicQ5ylCkR1oUibp5icuDp8eLpGoMvxXZQ/640?wx_fmt=svg&from=appmsg)，就满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThhmvc1dPSm6owRs6Aj91VAMTibyYbAPicXQ7pXeHWSjPtFL1pWEyBwqmNne6IQ0dKwRACtqRE0vUpcpfAaYNqdjicAwiaTVhcHcoJw/640?wx_fmt=svg&from=appmsg)

因此不是某一根线，而是整个平面都可以。

这就是“特征值重复时，特征子空间可能变成二维”的最直观例子。

这里：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnPqejcwdl7O0q87ImVgP5CqG1MROG4jeoexrL5SO2Omx2w0CJLj65MhAs08ILXY0HKMgCfKzdKgHseamueHwyF406AgXY7u6jg/640?wx_fmt=svg&from=appmsg)

所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47Gx6T4YEB41XJKxiaB8qMpwuN3JmUjib0fOGxPrERic5Xt4utytLRNlnyiaBpBiacTvsOE6rVe51zb7LVShe0jmH0ub8yZwrZ80f5Rw/640?wx_fmt=svg&from=appmsg)的几何重数是 2。

而

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwn5chQlZ3zrwVjcpkStUCNNPDAERpgGZuDp1heN9vNgHQCE4nfo7V68pp36rSMrPIGBm4kV0UFE2yY3EzT0wImq10fOt3jXqSQ/640?wx_fmt=svg&from=appmsg)

所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPk9qatREErR4Nxvhz5BthwibSPMunna3yVWhwQ5CnwZo5kMnWuoBqstxjgYpp0sIT1FYQfhibhxMvne3ianyV1sMZpMeJiaicE0QfMQ/640?wx_fmt=svg&from=appmsg)的几何重数是 1。

* * *

## 10\. 用“子空间分解”的角度再看一遍

任意向量都能写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1OczNAwN4zTDENR8TZmBjoYDlFAkeiapCZvlGYZMEx03ibxXYtdGXR37YwZxWRMxLft2BicZFuQIhazqk17A6VggckSarFUXLM2XA/640?wx_fmt=svg&from=appmsg)

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fUibIjZURvicFXn5aVBpCV60jehSS1ytoOPD6cHIJEITV4oWNZTZBQtvcibEGKPRezlvwk5ygj1ibdWl5ibiaf4VEoX8xB1a7TdOcttqFIicL66ZVQ/640?wx_fmt=svg&from=appmsg)

其中

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLbC5vXxLJDRscU3tcLbmia39VRrwEQib2NaaHcuTX4BUD66rvMBJ39N9rEE0XsRT0JBnLsSiaD6rZh8DdLRARPqYrY0Gobnia0ZV2w/640?wx_fmt=svg&from=appmsg)

这很漂亮地说明：

矩阵![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZRUDdtFXxeicf8caia4tc0vkAGHpicVv59obE2vsyFR0874ibJz3JJOiasfGrWKxfy2HrrgCUKEI3gCyslHicSDXhoiarL44Y25P5icHJw/640?wx_fmt=svg&from=appmsg)对不同特征子空间分别按不同倍率作用。

这正是“对角矩阵为什么好理解”的本质。

* * *

## 11\. 这个例子里，特征子空间和基底怎么选

对![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7g6O3ibDtVkIaqJxEicGPibVnrP7bHZcte4pQq5SzkkCX6Siblic8cLORbBDvmvWXPdo1ic8rhPELL9MkGlwrWHzU3Um2QDH9MWX3edgEBcL79iaiapw/640?wx_fmt=svg&from=appmsg)，一个自然基底是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZXuiaA2P9C2sTgqj4JpFOcTicQ9rPPRXEAX0XphZicN6IQkxvVFUV44NKeEpV4cGDHOgfnPELaSUTibEDxR9ZWYGmAQfQYIzicibzhjg/640?wx_fmt=svg&from=appmsg)

对![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp14GM6FotE4EFcMpKG6ZxYOk4V8QOvErz5VuXoXEXriapibEhQAkvk2XdoB2GPNJA40mmbibRN7QjpMUkPNZSdLDfibxaCHV3vqj0icQ/640?wx_fmt=svg&from=appmsg)，一个自然基底是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQt0E2ozXDYd0rBSeFDOLURZiar0aPhwkO9uvYib6ggOkOTmiajLk7WpEOUbp3BCx0X55PHofkD4DleVqF2brve4a5AdiaQngJtMp1Q/640?wx_fmt=svg&from=appmsg)

把它们放在一起，就是整个空间的一组特征向量基底：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47EuuHouLQCuSWZicEYN5FubaxLhyqdOfh3Wl38R0V9WnrrZBhMLcHnq7eGic5mibZ6kibGGjgldM18PsibxH0YK4kMZpPubMxSJe1Dg/640?wx_fmt=svg&from=appmsg)

在这组基底下，矩阵就是对角的：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0tp0HvbOYxGCgLsgHbRYjwWrdnNMadoNCWXkXkcrcQBaJfSvtFPMOPLTWrCCApYf9nNpDv62FemXUsD5RpPpbtk1r2fdz3GZvg/640?wx_fmt=svg&from=appmsg)

* * *

## 12\. 一句话抓住本质

**特征子空间 = 对应某个特征值**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJN6nicjFYn4ic0tIOs0ibDo9DGZpqjaWjSN2qUPWSZANcZ68ibexqAZmibdXo27rd2ELAcJibexyc3pGgRiahf2ticnnrY14XPGRgYsYwgw/640?wx_fmt=svg&from=appmsg)**的全部“只伸缩不转向”的向量集合。**

-   若是一条线：表示那条方向很特殊
-   若是一个平面：表示那整片平面都很特殊
-   在线性代数里，它就是
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ07KV180C5luib9ZnkrQWiaSVL077ibXv3tSm6bdJtJicG9WQibBCTMnswyjgSjMyqU4l6qWslV96JLiaejKIxrg74oDib1l8tI9iaGRMA/640?wx_fmt=svg&from=appmsg)
    

* * *

## 13\. 再补一个容易混淆的点

“特征子空间”不是说这个空间中的向量都不动。

而是说它们都满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThnSMQEKEa7QKr9h9Fkxofichds1rzvxWicwQuoExwxjSia4E3hwPM1sXAibfZZHa6Ag5ibzqicUGYdWjZicLL0GNxkLCYEl6m0BHdxwIA/640?wx_fmt=svg&from=appmsg)

所以它们可能：

-   变长
-   变短
-   反向
-   甚至压到 0

只是**不会偏到别的方向去**。

* * *

## 14\. 和图1的对应

图1里那块蓝色平面标着：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSQ5MBDbEIgooBk8XicehgUFtHViac7rMa2fZ0De8JBZX9bf0m4BnjwfwKNkSEe2RGYyJx22An7iaywLicmnAVoJZMZvBBKn51zyibXQ/640?wx_fmt=svg&from=appmsg)

就是说这整片平面里的任何向量，经过![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7w5fehvkhDib218E8aibPEMgibBNIBusSwgGuMVbEqfXLCAxV4Yqc2ofK37JtAnvtVicz5bO76ic7yEvLEcMXA8pcqdLTAdtWhKlooRLQiaXkAMWJg/640?wx_fmt=svg&from=appmsg)后都变成原来的 2 倍。

所以图右边蓝色箭头仍然留在那片平面中，只是更长了。

这就是“![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHzt0hxAicQAzbUb5mfRFJqGmZNAk7wibcvmibDpXz65pEQ9HEqHLtFhRA0Kwd80nWSFWic6TTc1s7PibBXfb6BosxUlvpP5VhFkUUHw/640?wx_fmt=svg&from=appmsg)在该特征子空间上表现为 dilation（伸缩）”。

* * *

下面我们看一个**不是对角矩阵**的3x3整数矩阵，但它仍然有一个**二维特征子空间**。

这会更说明问题：

**特征子空间不是“对角矩阵专属现象”**，而是线性变换本身的几何结构。

* * *

## 1\. 先给出矩阵

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHye4jSyjaWFmfc6qUuEL1m1EbryF8yTDic8Q4LibJ81rAWJYXcUAgQdToibsVTjN0qTCcxElCaHO3dTr8uzkGb03XKeoLd4z5RESVQ/640?wx_fmt=svg&from=appmsg)

它不是对角矩阵，因为右上角有个1。

这个矩阵的作用是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gebuqhxYx2yJialwCTyUaMygYjW0hXR2p4eiblnas0x1dD0CEBPEfl9thU0lSSZwcP80NMRVv9ZKwibhOAhribb7VvaYGXJgj1eQrNHMDQp3KBg/640?wx_fmt=svg&from=appmsg)

注意：

-   x 分量不仅受自己影响，还受 y 影响
-   所以它比对角矩阵“更拧一点”

但它仍然可能有特征子空间。

* * *

## 2\. 求特征值

先算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtDwZIh8OhE7CVnU3Caoqic8ZcVricEyeT49QJDkApLqYGdrOWwyM5YOEoibuZjUCBScV45t3F0tSpZFNUbz1vGJEWQ7YRVqxLGicZ4A/640?wx_fmt=svg&from=appmsg)

因为它是上三角矩阵，所以行列式等于对角线相乘：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqP97m6ZbibB6SXib1zm8jjW8Aiaoxc4ibGZwWLRduk3E7uCjlFSLqLb9cJdy6SK7euLr2xFeicCyfVXrmIeYrw6ta1wGwibb2ASnrtQFQ/640?wx_fmt=svg&from=appmsg)

于是特征值还是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEJibLt55Ell8WjCvl0ls7PcTFFIju8XmFUEPGAujrXWggcZnLSZNkVYtRasGYLXTVC7QQ9Zo3v59SSAxDObunHpqe6EDiacnoZzw/640?wx_fmt=svg&from=appmsg)

其中![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJAAeIkSib8ox5VHVtc8NdE2WSVV5m7kib9VHXcfV47gy1ibCHDde5kCr4T30VJoUSXXIJtDuaZ5E3ZRwibswSPs7PhWRZvfkv7G1XQ/640?wx_fmt=svg&from=appmsg)的代数重数仍然是 2。

但关键问题来了：

它的![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0xicn9fZKicBzNmcHo6S89D8Bic3NTGB4yDP69fWKGpY5tJLcv5rmnuxCc6Fib80l76YjMYKrf9BUAaAUtadrpj2DeqLRQicfjDwWibibQ/640?wx_fmt=svg&from=appmsg)特征子空间，还是二维吗？

我们来算。

* * *

## 3\. 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKHyZNP5aky6JSEicjvSp5CVr3wKamFYPS4CkmyMZibsGu1wh6tGbfFZvW5YHXg9koYjkibGlSzu3L2Fjsrg1ZhCVPR18vHxsewKGHA/640?wx_fmt=svg&from=appmsg) 的特征子空间

定义

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tg6EdJofI6WOnw6icVexQ6ADQmO28m6zsA239ibDR556NxKh6wncFveibD8EG0Ujyic812myzEficbP9Xl18IRtDuMaBjZCreSJnFVWW5Mc5ia8CA/640?wx_fmt=svg&from=appmsg)

先算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEKCuV9H5ThRdTQ5nYCCwN4WW7NtW962wHMUbicdUEqyPxa0ICC50Jofql8yGWQYqSzR9iaKQUdT5YLrTia2EzWgVgtPnOcXpj8wvg/640?wx_fmt=svg&from=appmsg)

要求

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57nAgJzRzdvib8cuYB9bNxE04DFvmsghVpIh0zYrBiapQo0icnicp4ugq2f9p2kvWbVbDLJmBkaFYhYtQ2jib4dg7NluLEuBAO6KOCkRstvXJV6TQ/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuSDC4bppVic02WawE8P4PTOWdAwtUUEESk6DJicTiaUL1xsaOW2zPLibmJSXR4VmohibPribVfn46Ngn7y6qXIX9DUTc2REdBhbyQQYw/640?wx_fmt=svg&from=appmsg)

所以条件是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmUgE7YcsLo0veev639jyib4r9SBiblOiahpGYOovsCa2fyWgEZf3vU3KvuHdeicNvyz3AAZ4ZVzfibZ26rD9qriaJKZPrvpTeuvU7Hrw/640?wx_fmt=svg&from=appmsg)

只有![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJwIricQTaV2qj2iaMib31YODV2ESuhYK2swdfSw9NsdJ2EicPCRX7v9paSznXKDNUDlpq0VOxXGDBwH0icugvfOxtBiaZ95aZ4HCsZXQ/640?wx_fmt=svg&from=appmsg)自由。

因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGicicicqhE0YaAWCIgZ6R00esqODjbwnfS4k3SKh1SW2stibfjOwBbjQiax6C6EuQPdDYIyo7BZynhIibMf3S31ACYEUYcKQ2jtLpibjUw/640?wx_fmt=svg&from=appmsg)

这说明：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpELmEVxtyDYUqCQN0KcdJk9YqpTiaEXQibYBcibma46eboficGzkRyhYgricXBbojOm3QBgJFhTIuE5mt9UfvEpcDVAn9YxyhYsUiclg/640?wx_fmt=svg&from=appmsg)

也就是说，虽然![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0HuPu4icHXpvdRFG4ibI7LzvuwwQUBRVPjf6XwJGYOKhsgOzRXcUp0xmMReaXoKcgGuex85303ISgdsWUVJ4A5R30HlcPK6VDibQA/640?wx_fmt=svg&from=appmsg)重复了两次，但它的特征子空间**只有一维**，不是二维。

* * *

## 4\. 这点非常关键

前一个对角矩阵例子里，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfYElicRv2g7NyFteIK1uurJNe4BAbffgqntjibVozTkdpMvuNEkByuEJlicgglzNz1J6P7OyN3UPWbCwqR1gI59pgT3lAjOwqKLjA/640?wx_fmt=svg&from=appmsg)

对应的是整个![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1r8djRPe0XsFEgfGG6ebwWBnb4pj0RtTboCw2IImmX3eR7XJ6BEcflyeFLSF0UjgtSrREoG6ydcFaBkhJhckqcKtkUrTrTRoSQ/640?wx_fmt=svg&from=appmsg)平面。

而现在这个非对角矩阵里，同样是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7B8nVEBQSs9ZY9a7icGND8OmLQqfYQRqykuf7GVpzjibEllrYOYFGZib5OL5zHMw8NqnyN9LYc0u4vKFE4fkgLTrotDtazdp5gS9W10v48iblXaA/640?wx_fmt=svg&from=appmsg)，却只剩下x-轴这一条线。

这说明：

**特征值重复出现，不等于特征子空间维数一定也重复那么多次。**

也就是：

-   代数重数 = 特征值作为根出现几次
-   几何重数 = 特征子空间的维数

这里只是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNaglgKdibBmtLyu2Y9iaya7yknibMqaIzKXaOVficXLSy2Lb7ckHlaWOQVpuqKgUMv9v7AlvDTwQYJGKjibvbjg6yq6NHUbh3mUwWDA/640?wx_fmt=svg&from=appmsg)

* * *

## 5\. 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNd7QGqxC5hRI1znB8YyLIdTA4FsKJbMXSHzrPZwuHBJSsCJXWmSWDbVjpyW4dTzfyLjeDqpxgkwQxpPViap83Y3ZyDqtfJIn8mQ/640?wx_fmt=svg&from=appmsg) 的特征子空间

再算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqWWAuMnibicQasGMibWH3IBgxfibNRRHCFHyh6g87a9IFMSUia8f5hCgtQEXbIEXhLydHMX6u9miarFZTxVW4N5dPgr66ZteDsialpu2A/640?wx_fmt=svg&from=appmsg)

先写出

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6SwUMBgcSVckxInEzUHViaE90qvCzgOA14qzAVkLJvgS1Fvj7ibwToiazVyjibGYNzAdLFnkSWnsw6OZJPibTIqIKv7XxBCxfItZxMUQ/640?wx_fmt=svg&from=appmsg)

解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Picu8BaOQzeUkn5YX0dkc76embt5cIuDaiaJVsXfibqMkMZKQyLxTXqJjy1HYEVZ5c4aG67ib0VZTnicaVSok6pOUNL9rCQJIaib3NaoAzNTGUxUg/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tib3Tlv4RpIYS4Qmz5ibNrSj6ibobas7z2GB3xZAkMvBerXWqk52cnb06MO2p3uR43r94TZ2G1Ga1h5f94wDEV7K83Y5ag9GvDDDiag/640?wx_fmt=svg&from=appmsg)

从第二式得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57d2W6B2MFGM9wmyNEOicBcHQG0Z2dlGrS8EYCpibRFyib3Au3jduS3YIoX18VjK68b8bazfk8aEUIftYMvpya3pTynFibyaDpc2R7kRwk2oNlrQ/640?wx_fmt=svg&from=appmsg)

代回第一式得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHVELF5nia3sX7q1iarJPhSeaicIRcknfntDEGeqTWrhRcyRX0hStiben4dnfeb3IX8sQib19jL8xjEIeWL9iaBRMxdfuCWSXbVagX77w/640?wx_fmt=svg&from=appmsg)

所以 z 自由。

因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdYGibNfAYicRVltBaByqMicjyia0iaeXghrvEF7CmyFgmZWBicnENOrhLtpd8wy51fZzOrbDgvF7E4dML318HAax9KxkeuCxGrHuHibaA/640?wx_fmt=svg&from=appmsg)

这还是z\-轴。

* * *

## 6\. 几何上到底发生了什么

这个矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6u7n409AC4icRdtBQmia60GrXQ1B5XKjGBf0XIghAThasjMSsbkSwfvyBWM2tSpma7Au94TFtE5ZVjBh8GLHgYdOoTicAMQ1pZu8dNgRCvibfDJw/640?wx_fmt=svg&from=appmsg)

有两种行为：

### 在 z\-轴方向

任何

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0x9A60hwl4NzoUPicOWjGplKhcqGVnG78ZhjkQSse4ST3SZWJPNBiavOexRa9X4rYkUMQUuGgg6Wd4ncDzTjIYBeHUcOSZBQuSn2A/640?wx_fmt=svg&from=appmsg)

都会变成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicQwtsZNFPxDu7jicCicib5wKQRMaNDMsP9SaQYRJPhbQYOZVwYdTNeDBpmWFWVwkXvedF7RsbfOOXFgvTqQtFh5QU60q2IwENgLJw/640?wx_fmt=svg&from=appmsg)

所以z\-轴仍然是一个特征子空间。

* * *

### 在 xy 平面内

任何

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAvRu4NacjbNmPqjxdsZfuZT1umNnNLXDfKhAVgibpohxKRUVswrlu4flWlARkXaEia4RHyRyT0d3PBTLibNzsKTz0CQHW7pr9XFPw/640?wx_fmt=svg&from=appmsg)

都会变成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4mcKqAQNIMLcw5WGGnOyQMicriaNap77q2tibrrVaOrHj9jyrIelTbBUrCYtVqlB4AagmibfCczVPff0Mk6PE7ZmzoQa9DbRgF66ibg/640?wx_fmt=svg&from=appmsg)

它仍然留在 xy 平面里，但通常**不再与原向量共线**。

也就是说：

-   它不会飞出这个平面
-   但它会在平面内“歪掉”

所以：

-   xy 平面是一个**不变子空间**
-   但不是  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iagex3nDVuU0kMOHITYATE2nWXoaRmcdFxrf0HnANJPemB25TZsTpzsgXR1crvTdRkjtaNBCuhia4hQoQvEVqTfOg09Al0z40gmDtQ/640?wx_fmt=svg&from=appmsg) 的特征子空间

这是很多人第一次学时最容易混淆的点。

* * *

## 7\. “不变子空间” 和 “特征子空间” 的区别

这是一个非常重要的区分。

### 不变子空间（invariant subspace）

若子空间![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7AnGMqTW6XfeOTVNky4guvdExbrs4qqxBAvKvVEHD5icdFQ0zdFITzsuWXz6CwKPFia513gfR5f03rEXSpYicu6ia8ibo7P9icoJCygxnw4KDut82A/640?wx_fmt=svg&from=appmsg)满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7nBBDvxxgmeZ5mvpKfuAicKpL0TqGEV2icr7fao3joicLDCNnESQib8518UOkDcYPKbChicfgTkGuKwSMI8KuabI3scomwmmvNQHNPw/640?wx_fmt=svg&from=appmsg)

就叫![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7AnGMqTW6XffpKaSdINH7H0sa1cIthV8B51O9OmjponCCxuUyicZoJ4uqofNTebKyTIM89fibWaauXryfz9iauwXaSERC5gRamxP9gvicrBnU8Uw/640?wx_fmt=svg&from=appmsg)的不变子空间。

意思是：向量进去后，还留在这个子空间里。

* * *

### 特征子空间（eigenspace）

若子空间里每个向量都满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpVZkDA6eymMQHghIvRbelrYLSzicpe0w7AuM44N2wQm5d0Cl9EibYY5th3Xvv1k053ibF83T6aYFibojLadUgcRxkVRQEiaWyvRwFpQ/640?wx_fmt=svg&from=appmsg)

那它不仅留在原空间里，而且还是**同方向伸缩**。

所以：

**特征子空间一定是不变子空间，但不变子空间不一定是特征子空间。**

在本例里：

-   xy 平面是不变子空间
-   但不是特征子空间
-   真正的  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d6wPR7yHkictzdvE8jAKopGFbBaBGCpbeB0iajC47diaY16bDMHnRyW9zwqvUpHQE5PV4YdibTUObJhlujiaKrOkqG9UXLCHOIibpMnMA/640?wx_fmt=svg&from=appmsg) 只有 x\-轴这一条线

* * *

## 8\. 用具体向量验证

* * *

### 向量 1：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlGibbNjhq1WQQWyujuZDMd69E5gMFqwKGSNU2915elgxecPPjRAIrNVTAwKDbF42IicVr4CBqib6qwpeheeTP41iahXqpO9cWGM5zQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3Zlibrlna12HyvBictQwqXaO5A0EP1HEzFeyG6UyaWiaG49k4ypGndmffc3bgmlLDic7R13HJfib6jic0KLwqSWiacGmhJ19pEx823tc9Gw/640?wx_fmt=svg&from=appmsg)

所以它是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic6r5qPicP0Bccn3xPib1CaKvQQeZP0tlbHJp3VOfhO8SqoHsmAkfhy7M2yiajUElxsL6Bj6voJ3tK0ia0K4EQSbzKCLeDMoofuDLtA/640?wx_fmt=svg&from=appmsg)的特征向量。

* * *

### 向量 2：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic4ic7alyTJRXzibWmibRRrdvbtT0RkPeQnntAb4LFUMrDaXxsIBks5HtxlmaJLcyjic46gqvBVrC6U04EIMCdl0D3cD1JKpZJZAeCw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5GhsssEMjRXJfH7OmErCPeVMUVBbtY4tib5ibIDfM7MvLEgS1WrGrTbQFDjlo6oBLFzPO5SRMfTvxMbwzr1DQXGVfp7SedITX6fgfdxicy01OcA/640?wx_fmt=svg&from=appmsg)

这不是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVau0A9zXJPkZoiaaJUVt7AJUiagLtvZ8DlR1u3V5R5eWwoHKico1IKjmw0fIKAW1IPojrbnSsmyibNKm9qEHvpzhoTO1BIFQibpoKMVQ/640?wx_fmt=svg&from=appmsg)

因为第一分量冒出了![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ogPQu9zPMRbouW5Rm3XHDXmicnFLJCSXNfAe5zCoG2CHcjT7ekYLusOKXkzictyuFwXvarjicGW4ouRbtoQM5anRiakm73tRDib7CxQ/640?wx_fmt=svg&from=appmsg)。

所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgos9CwGofb5SsqErnhfWa713LJcW2VqI0cVj9y1RBnHBRkq3dKc1efBfnM0vZHicVXREOBkdbRdJhrUBiaWvribuFbgOTPQgf5ianXg/640?wx_fmt=svg&from=appmsg)不是特征向量。

这恰恰说明：

虽然它还留在![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2XzTpMBZJwHBbictp9YbCibVOQodSvE1xicKiacFqCBKdxmSBUicQH8GXiaoeQEBKYRnzKHib0ZxoTwLgqZL8wqghmfZsohp0D1Al7R48w/640?wx_fmt=svg&from=appmsg)平面里，但方向变了，所以不是特征向量。

* * *

### 向量 3：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM63o99F99ufSMjgjOXFeehDgFe4fKjHFfgKDSMVYLNrnoJABRxCNKIiaKQjVWjYEHCW1eUws2ylBZCHumZGib2Lp7yXD9IGl6YpKrSQ7uwxPNRA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4oqM9lAiaUagFBPZ5wLusjKWmU7nicMHYmT2vKGXqaicagqA5GTN14l5eqUk5ic1CW7fmzyHp7lI6JktDJglvvXGVAJYLMGtkkK8ctw/640?wx_fmt=svg&from=appmsg)

这也不是原向量的倍数，所以也不是特征向量。

* * *

### 向量 4：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4t1L9cia2ft1rKrNZxRHXKeHMLkw0xsldichnvtOQXYz20gaqGDASCcfpl8QZzLsB8gem071gVlvWiaKwj1FR2ekgv7giaEWx9YxXA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5FXwpk7oiajqKdoTFAjywWMNsIOia24KVRUJ25JPrMLYiakqPjwibos3LOgf04o2y8gbzJoGDCWice8qhhy3Rh29cRAmfXKrmpUutiax0zibZG7Ad6g/640?wx_fmt=svg&from=appmsg)

所以这是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLaAHSibmSuicuqOzJGsHHOiajicbkd7K0N1yhPtQMUJpaLQ5mwOdia7ulgprjJp9eTeGyGNib0Og2pqp44IMbKqmNrnsmkzddxMxhyQQ/640?wx_fmt=svg&from=appmsg)的特征向量。

* * *

## 9\. 这个例子告诉我们什么

它告诉我们三件很重要的事。

### 第一件：特征子空间不要求矩阵是对角矩阵

只要存在满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSYVIztaqNfFOVuDukyg5bibEXCdQJ5dBzPeODiaYxB0BgsiamoNYIat1CPg0yGG7pEtPu4b0BR2sJbuQvCOdbQtgUJLlAENYZhkgQ/640?wx_fmt=svg&from=appmsg)

的一批向量，它们就会组成特征子空间。

* * *

### 第二件：重复特征值不一定带来高维特征子空间

虽然![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0OLkicyyCZpYHyphror6U8RR5SbsO8JD1ILagJOJXUWKibV6KiaDx8GRx3uT4k0PaFQm4gwop7ER0QaWkSBz6paNEy7WPn8ay72kQ/640?wx_fmt=svg&from=appmsg)出现了两次，但这里的![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdeURibU6aUtljKtQhwapkR9NwicdFQ7oIA2pNBP1M0KYIFvibWgpqaFVc5fkXib5ThevedYzicOgmum4BTOr7iafibXdn5zksFE7ql8Ag/640?wx_fmt=svg&from=appmsg)只有一维。

* * *

### 第三件：要区分“平面不变”与“平面上每个向量都是特征向量”

本例中xy平面被映回自己，但并非纯缩放，而是“缩放 + 平面内剪切”。

* * *

## 10\. 一个真正具有二维特征子空间、但又不是对角矩阵的例子

上面那个例子虽然不是对角矩阵，但![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrAw45hgYlgj4pw5zKibpZgctOBzyYwRpuSakkvdHpU0YJWHeGrFkTkrmmR4CKswksx3gB9a16HZg2fT1TrgpTKpnPacFlcFUZxdQ/640?wx_fmt=svg&from=appmsg)的特征子空间只有 1 维。

我们再往前走一步：给一个**非对角矩阵**，同时它真的有一个**二维特征子空间**。

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0UENA0iciaEvAncbX2tp5SF062gdJvqULB1H6eYImE0CBqD8pTxWorElDWiapvbueozTMyF7c9JibWyQJkhF3MicdmGgia3KRxV4z4BA/640?wx_fmt=svg&from=appmsg)

它不是对角矩阵，但我们来求![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMJ0q3ebJT1vHuIacCSzMdZ1v7cDstrzUmcZSNwaS5AUtruCCdicwCnrrfrKBOXJZXvX5YjOMxbOFBWKuHNmdNY8PZIdYsFiabLZQ/640?wx_fmt=svg&from=appmsg)的特征子空间。

先算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM55V7C7hCRTTmuST1vWpGWwLEeeznqJvxBBria3iaBBmDdhl3QYMSlKqzxeqaTuvibDSCQISJrpr8A9p8ReFfP5ARUsGxB5fA0fRIw6SlCSAxLMQ/640?wx_fmt=svg&from=appmsg)

解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9RovvlF0XpNCZQAt9txSshOSoSCxHqa185T19FOxAjlX2eIkiaSppjIqk1uiaNpK3ZUpHC1BMxyLCW5Q0Jrob3Ayk2bsQS7FctC2Iz8A/640?wx_fmt=svg&from=appmsg)

得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkpW86d5ya5wSEUI03pbj8iad64orYUztSPCezHyib5NHOwsmkwOVPkP7A4iavSqzpDTXLeuCcH8MtuDlfpyXknWib3zdibxVpibDDNCw/640?wx_fmt=svg&from=appmsg)

而![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFet9O5qicdNF2ibdfTapwScHFIHeYGrfeubTR62WyCKf6b9VB4ibqE0q2aFDsIAkKnVRQ7hqhCYbPTqhxOgjAGt0nnSNq0QASJVfZwg/640?wx_fmt=svg&from=appmsg)自由。

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCtYpiconEZJUwGY46YficcNzZFepqVicT8xhGFe2UHIcAjgHtkIMAZEiaXlrzF8ricicCzUib6K0nTXQmouPbrnx9PpJTIBCarHnexlwQ/640?wx_fmt=svg&from=appmsg)

这就是整个![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIVmJVvmlvzpvvAYD3ETrrX8hNicVAEEFLo9iawTWbljwQyeLGHlDgGs2OdT98daZH9YvCFGSDicvGTpG3FdGOo8vVvwnqssRh7brA/640?wx_fmt=svg&from=appmsg)平面。

也就是说：

-   B 不是对角矩阵
-   但它仍然有一个二维特征子空间![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sIjkibRfAAsuXzVJKttOm6AKM9tKSaM4KM5AZBwMY22H64AY6aibjeGaCdIweBZEhd2UyzhLFKUwkbSIQTKng1rm3nvNMaTDQCA6miaX5mRUzg/640?wx_fmt=svg&from=appmsg) 

为什么？

因为对任意![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZQPguUK8C58vtzSWIwquxByIawBg2K6iaQYaIfSTrvLWCObRxrWabOMgK3IUARibWQ38YOsl2GxTHnCuJ2jc4S51NJkaHwGqKnRQ/640?wx_fmt=svg&from=appmsg)，都有

所以平面上每个向量都只是放大 2 倍。

* * *

## 11\. 这三个例子放在一起看，就特别清楚了

### 例 1：对角矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEytxlwb7oW1ia2htQiafIW5hR7VjzukeKhdria5nMibbdicI3qSibmppDmx3Yniczog45SicLIE8Xa1P6ZKVv0IcboLN1pwKA7VUmlsOCMwg/640?wx_fmt=svg&from=appmsg)

有二维特征子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicUPCzalJ4lfhTbBg6kW9jgtPlLZn5zTDzxxpnia0PR9ttVutka3JvTXJ1ZkGIXo1bHpIvyeKfeQwbiaUVVvCZDaTtvrxsV8J9NEw/640?wx_fmt=svg&from=appmsg) 平面。

### 例 2：非对角矩阵，但只有一维 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMOLSKZ2eQBftiaeic9fgqM30OrPibHxgle2Q7O9hnCtO11UibPIhuosOiaOs2Xne5E5FY6hncuzOEfprF47JI2X7XJk46gTgaliae0kw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWK44TCQgg1Qqiavz6Q8RNdKxFlRpsPTyMKyku3bjXibDGm3iadib9C354V00btNO21ibwf8JECUIFpT4zFibQkME4Ku8Zc0iaNQLOaHgg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEAXxkhibLYCnaXMWF5AAkeaF7Tgwqna0NpnKZPyjq4hEm2VhJxBP5ia5JicOPU0mrwoNkdBhVFN3XNhdOCBZ3UZxf1HDKwWCnnLvA/640?wx_fmt=svg&from=appmsg) 平面不变，但不再是特征子空间；真正的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQrMc3z9Pb9FgMUO7jUvuaxIIAF0poDOljKuUnZ4Sjkyibjp7GZ2ZBLp3KV4DWdw0VEUMEo4DlznTtHEYD7ib3gAkx1tD24wOvbYw/640?wx_fmt=svg&from=appmsg) 只有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuVhwDR5IzeFyq6NowqeqyaBjC9EauVXqhYVFf0HibzdnZmwJ0bPkcC0h51pbtV7wSrKgz5XicwzLjub7cvmjZaicsB5wIL5jHxiauQ/640?wx_fmt=svg&from=appmsg)\-轴。

### 例 3：非对角矩阵，仍有二维 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YNlvtSRrfib3lhx2Qo72Y4j2oJBiazLV5TmftOzYWt8JdWgq6Mn5X2uWHOsyw5ibRo3alkSPnFW9eurRprjlibGWvl8mKdV7VvddDw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsntr1xWpDQ4orsbQB8jU3qGGq9Z2sHWNJ9YAJ7EGzGz3HhfwEPETPL8yBAuOFXnjEhRLxV2kZfC8d3n9ic75I7Hno8D96qz571Ww/640?wx_fmt=svg&from=appmsg)

虽然不是对角矩阵，但 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amcDBNwndEALHorsFibYXZoROUqczqMAiaGqOicQmzhPUg29MuicicIdOcTX0PGoO7Z8oJGcgEeic3eW2q2FwxH55OXLO3uicET7tXBAZA/640?wx_fmt=svg&from=appmsg) 平面上的向量仍全部满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPa3zKJ77gKLmJicpv4J1OoF6RibTNkC5So0jgA5iayMVksgzKgNjRPokE4Orp83jqwPWXuUib4tK9xeCaPqjKpk4kTKZylicpiccA34Q/640?wx_fmt=svg&from=appmsg)，所以它仍是二维特征子空间。

* * *

## 12\. 一句话提炼本质

判断某个平面/直线是不是特征子空间，不是看矩阵长得像不像对角矩阵，而是看：

> **这个子空间里的每个向量，经过变换后，是否都等于同一个倍数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznlLz11DdCU35KCyFcXPjjbMyEAfm1Egphoic1zbQdeejjBxLKnSUe7wHpC4k5rnkD7LEQ45SQF0xDJt8y7Hsc4BrGkRyUrVXIMw/640?wx_fmt=svg&from=appmsg) 乘原向量。**

也就是检验

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9s7viaPVoOjDepF4ogiajQWKic9YyRXv2fkf1TACuLpdR4TuHOicicQ2iasOAMFiaICia27ia77LjVNZDWNT7baqSZMHBa4wzoTbIkpbleg/640?wx_fmt=svg&from=appmsg)

是否对该子空间中所有向量都成立。

* * *

## 13\. 最后给一个最实用的判断流程

当你看到一个矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtRG1xWib5e4IV0rYdicFaxbcUCeDD4q0k627VjehZM6U4sOE9VwF9C6ibJib7lw9vSCM20XWnb1Wy04GpDib31iaGgCU818Iic4xmiaIIw/640?wx_fmt=svg&from=appmsg)，想找特征子空间时，就按下面做：

#### 第一步：求特征值

解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSghTnag2AIeZZz0Y1d4GibawVHSxEiaO0ESicXBtaZAvuBaQPqjLKHvtDs4hpezs7Pf00EcibuXltF8zede9OM4vky1EwRhU6hqaQibw/640?wx_fmt=svg&from=appmsg)

#### 第二步：对每个特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5DImicJYcVbr8m7L7vv4cgmnibjschEwXqYkVGAkSd5RbUbQL31Lnnfia7UoaNDRaIEEfBmwayx9GBOibdXH2FHmiaOc4HjbDwRZXwA/640?wx_fmt=svg&from=appmsg)，解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6u7n409AC4icVo3pwiaGPJ6vsmh67Ex3krrNk8vRLSk27yfFlTwzhoJVbUeSYmSicL6X6FmJExMugGG59mSzlB6KX8ibwDdRyo6bBuKKRg9v4Ujg/640?wx_fmt=svg&from=appmsg)

#### 第三步：解空间就是特征子空间

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAflsXNtdJqeVUok8BPaic6QruWC3rib4sDP6pFDr1ibqdq4zLic2TIUibpw8kQdAdM1d7clyIjibafwNF505yr6TMBloboWp5gmqXB3FhQ/640?wx_fmt=svg&from=appmsg)

#### 第四步：看维数

-   维数 1：一条直线
    
-   维数 2：一个平面
    
-   更高维：更高维子空间