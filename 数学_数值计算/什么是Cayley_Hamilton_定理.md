# 什么是Cayley–Hamilton 定理


> 原文地址: [https://mp.weixin.qq.com/s/0MbAu6AM1XTB4xnRpYgzUg](https://mp.weixin.qq.com/s/0MbAu6AM1XTB4xnRpYgzUg)

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvCicHvOuRYheZzHpdiaA4OOel62ibs1S3LRg2TaNWHABoiassibrEnX0vULhnIhR448uYWsz71xicZBF8I2CMbrhraaxTzJx4oicmWf8/640?wx_fmt=png&from=appmsg)

图1

Cayley–Hamilton 定理（凯莱–哈密顿定理）说的是一句非常漂亮的话：

**每个方阵都“满足它自己的特征多项式”。**

* * *

### 1\. 先把定理本身说清楚

设![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0NjWXwaBvNDXMmdgkXUZR9u0Va5Y7fp9UMpKWxjgD3wLDTrp80ZByPPibeha52o9UyX8XictKiaV09YiagoduertxibfLck8bCjdHLQ/640?wx_fmt=svg&from=appmsg)是一个![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBs20wrUuExXZoibRWnhH1AvUnjwxicNPGuafgrdbZHuFAzACyQRO7RBpAPHxicaOGr597IBkZOEfd8n0GwAsMmfOuM6b0qzz58BEw/640?wx_fmt=svg&from=appmsg)方阵。  
它的**特征多项式**定义为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dK8lCYTRia35x5tRSeulQ50qa9HicfqACrMWGq8uu0gK0hcbfC2pFKBg5pRdppvVwIqWjCHzvdfR1HwMPEhy9lp14MBFq1CMAiaoA/640?wx_fmt=svg&from=appmsg)

它一定是一个![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEJLmGQgROlVP5cic46G6yPJib73BoyNXHqrVTpia2ibPLr53atNvibnfsBj6CPCchwgpjc08bY1Piax0uBMh0icaibGK0pPLbmrRblcI8w/640?wx_fmt=svg&from=appmsg)次多项式，可写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYJ7FhXLia774FB8j5SLlhMpicunwJ1ktBco5YZyDW2vZbJUIIJtxJicaOicXoXBH5bKuia3t7aXtPHNmRduf51G5qqIbj4G5v02hZSg/640?wx_fmt=svg&from=appmsg)

那么 Cayley-Hamilton 定理说：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3JqLyCVlhYhpaD3zL3aB5h8hrob1PUW81UWFvIIPwF7CK2sAfgQUTYrcLubz4PZyzQfic9fyKUbgzCvtrVX0iaDTyuVBLBLQRVPA/640?wx_fmt=svg&from=appmsg)

这里右边的![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThgHQIHQ0d4Eu8vMguhvUPYH2kgYhoV8KPHZYxj2Yabelic74rc1HkV39zPVeiaoyZdfHdz1SL6iaTSZgPyGnTg7FbgDa7Pdpbiaiczw/640?wx_fmt=svg&from=appmsg)不是数字 0，而是**零矩阵**。

* * *

### 2\. “满足自己的特征多项式”是什么意思？

本来![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV5DTKvKAgrDSYfDnxxLlUicz1f0ibef34jvJR6yhCkJiavZAIe8iap9kHkUwiae7FdbLMylOib6Yoc6qbc7fklBsvb4ROsTeBjqxgsEg/640?wx_fmt=svg&from=appmsg)是关于标量![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgost3xR4Pf4lnGicoTQB9epWxOhibM2phwgImNJLEtVpucXrJzSRCIp659oW0cGjOZUTItKKhLny4iauHTmUAqJ2NC0pUxLA5iakRlA/640?wx_fmt=svg&from=appmsg)的多项式。  
现在把里面的![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5k6tDe8yptlmicuHvV5jeNDlqibfmhXJ90c7Y6h2OdwJ5icADmuJalvU3ARCrUI049cGlzLqeKOz6vEPcFeFtKypy8ltsIkzfGiccA/640?wx_fmt=svg&from=appmsg)换成矩阵![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyWpwjJQKPl3oficQVPY8h7elAjKlNpV0rOzTVystD9SFkalLs2YYMPzicXokt64jEcxtvRfnV6Blq6ibEuXT9SqsdalU1fR0vvxMg/640?wx_fmt=svg&from=appmsg)，并把常数项换成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppbmFRWY406DVPDoGsn3ic2UricaFmaypkAl1lf94lVGSMx3abZBWAvibZGAM6PXvnZiaWoEFjtaOZLkuHFLNnrT2tJcHZhyc5GoMKg/640?wx_fmt=svg&from=appmsg)，就得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZFSUesdUYpIBvJSdUOfI77eT2JvyAxf8V4VocpgmQ2cm3HNYUKZn2AKWniaRQug2qfzzOgoHBianPjJgY8dNDUogBpzK8MEkFI6Q/640?wx_fmt=svg&from=appmsg)

Cayley-Hamilton 定理说，这个结果恰好就是零矩阵。

也就是说：

-   对数来说，可能有![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb77xibUx9iauTEKv13ibyibfnH2ezt9HvibfJ8icUKs2osPic1egOz3rGUjTKBNHAiaXKe12Jv7kNIo6sibDZFIpZkmnLISfia3RYkQJnA7EBQ/640?wx_fmt=svg&from=appmsg)
    
-   对矩阵来说，特征多项式 p 在 A 这个“输入”上取值时，也变成 0
    

* * *

### 3\. 为什么它重要？

它重要在于：**高次[矩阵幂](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491598&idx=1&sn=a2bea4ddd7b52aa256debde77155f8c0&scene=21#wechat_redirect)可以降阶**。

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57nAgJzRzdv2uibPFY5CgGYAN2uf4Kh7vIfj3pbnAeibOE8gqMn6GadImhjluJHACgAdHhdx5mUnVlWmUqy2efFg01Z7VXr3BQXIS8xLRiaticdg/640?wx_fmt=svg&from=appmsg)

所以任何![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt6oy0ozySFDMiaYRPXYHPUBvfHqBnFFPvFUrdg6ZLIiaKYkWsXBMF5WaG3OK4wAyAJNX9oh6y0B8nEdliaQdLvbib8zHb7D5IqPibPA/640?wx_fmt=svg&from=appmsg)都能改写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ7XABSxSDCfwPohgwZcz4DSpsIvc6HYcujKhjZDt1uBmmdLeYTyRTttkvOiaibVNGwbdO1ib4jYCR7KJqSwKCd9dmhaREN2qVrh6A/640?wx_fmt=svg&from=appmsg)

的线性组合。

这有很多用途：

#### (1) 简化高次幂计算

比如算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznl2ozdDWWnuuWvqI6y2qoj62yRcic0bmUC67HZUAZr4n0b5IswUh3uRGnTcUcxibYGlRMkiaiajPFKweHZMaKOibiakYYYdG2ibpM24Lg/640?wx_fmt=svg&from=appmsg)，不必真的乘 100 次，可以不断降阶。

#### (2) 求矩阵函数

如![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7g6O3ibDtVkIWlSB6Oib3htSuoyAhxEy11obqz8sFOInO1u7Ihf9nLzzrfqabm9SibXTGGWyuhFbkU1PkbYoHTg0TS3ONow3rlxDjvHXxXSVMwQ/640?wx_fmt=svg&from=appmsg)，最后都能化成有限阶矩阵幂组合。

#### (3) 推导[逆矩阵](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488467&idx=1&sn=d2dda45bec1834ee54e778a4f0ddbf25&scene=21#wechat_redirect)公式

若![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5k6krWQW0ranOzgFQdAWacfrTAEYWrtyPuhwic2covNS6TpUnibnFFzyiaXU8Wt5gmCW8FkSU6ibuXlsgUSibicpUZNiaJlDkd1x2SxhA/640?wx_fmt=svg&from=appmsg)，则特征多项式常数项![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VjKJSqCLh6yd8ZowBNkykhy7yN7Hp15icmswekiazYia3W7zfdliaTeazhFL20TibWzBJQe2e3IUknZDzejkic95yylt1lPMNGaCo7t5rnckWUvVg/640?wx_fmt=svg&from=appmsg)，可从

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4DmwiczfCxfgFKKsMicuYYzKWRhq9Wna65C23f5oHDicoaibVWRBVDZtqIEatExIxQIVOdDt5NmGS85BLnDic6ZcYyGAEtawwlBPtUA/640?wx_fmt=svg&from=appmsg)

整理出![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49UGeW1q7sCB5jmAl0v6L3fvaGtRMEYUVK8MtulI9s205wyzOXlibkECp7H8MXLRmaEm0ibSgSdwQkaf3TicOicgck8dqZckBrgHEIaP6uEwsqZw/640?wx_fmt=svg&from=appmsg)是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprBRNnoTSMjQichpG0rlv6CoGU184JbsQCXibKicWEPKYl3p8Oe9goqERF5VotkAwuB6sxQ25X3fZaX5ZNYx7J7FQXG9LA37vnbS2Q/640?wx_fmt=svg&from=appmsg)的线性组合。

* * *

### 4\. 先看一个最简单的![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbAx8zcktcc8humv1DDtBwsMgK3BjhqG3ECKMIuQIX6sOG8nk4BZ9mSIcFgoXT89gtLIJsAOJ0pf8AzuxZUCe1kwSqeU97oqMBQ/640?wx_fmt=svg&from=appmsg)例子

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7mia3VETsYjicdHYBXZ4wpbL0ZgQXY9QRPnW7WPO5VMdPh10x2NhictmOoa95XGE2ubdqRomZujot1OlPCAyCN2OmHCGWeaasibHGMYNCzWOLKGw/640?wx_fmt=svg&from=appmsg)

它的特征多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4BSaz4PfZwEIDOibFeWTibmwAMosmIvyCyVGxQtTXDpDib3mYMP8AfosPotzMNXicv5Vz2ZibUibfQAb8cXxasiahPlMdUKYKpGIRibnzQ/640?wx_fmt=svg&from=appmsg)

展开得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSS5rrtbkr9MmT85PDiaic5xJFr3tnmQjRw9OoBzavibmu8eRC5qTZHy9QTibiaqvxYMM4sianU2HxUrBH8QibphFI5aEbloVL2cd1pC2g/640?wx_fmt=svg&from=appmsg)

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwrZ4Gf8EquE6Sp889ADQHZXgJ5Mnjdtr8RYnzpj1pnNqOibooG73mPHlB2XVyw3ndAuEdS10KfjOtSHnQInO53QSTcFzYtrO87A/640?wx_fmt=svg&from=appmsg)

因此 Cayley-Hamilton 定理说

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp1x54pKcF9AtCtgG47rRDicrWbUmSxsia329zC8VotvpHzViavUjS7s6uA1g7EFMxCzT1xghXEWpeqjRc7IWYuQtsia7iatOmNaHcz4g/640?wx_fmt=svg&from=appmsg)

下面我把这个过程拆开讲透。

## 4.1 先看“多项式代入矩阵”是什么意思

如果有一个普通多项式

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHyZFSwIysLR9H3axicibshjciavtZfEzmlVdzBjJrwLrBTYm08ibtiavbY201neS53S4AdkMA7dsADqqgp5mMF8n97vzhdod4hk9VgIg/640?wx_fmt=svg&from=appmsg)

那么把一个矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIVsZRQbRicAoxVxxichZpAC30t1xl5gFoLJSv8XxqX9JcaFdbwaGoK2VLHn1RpicxxHVbVHonuibGDVktqOpaqo48IInib48g5hRpLQ/640?wx_fmt=svg&from=appmsg) 代进去，定义为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQ5VGcUlXqH313M9MOXgPIudC2G7WY0je8icSIUAM6eZLNYOGehOx1CqHUV1MaiaBia8N6NGRrJibBFz1Wmgkicvx4oOtYuZjicSb46kg/640?wx_fmt=svg&from=appmsg)

注意这里：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2m3xxX4yGNSyVWmhc7tU0vt4M0MFVMDXnPSTicl5lauLW4w4kjmXD9wZrgM0IkCbicguBsIeObA5qc4iccgYEvZY7EeLJnO5eNBrw/640?wx_fmt=svg&from=appmsg) 变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EsjF1J9mGjcLrSxCYPhia0K49Phjiavxia0WlRNlxIvyz1rgFFarwicrc7x1vCTNDmFpCSjRIGUVS9Jt0CecqSXQgopzPhPOCTSia9DbAibZaPFAQ/640?wx_fmt=svg&from=appmsg) 
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6SwO5SbRiaqcM6FH8GyPlndIbibDGKQdyibGZHibSUl7HgM2roIafGADKk7hO8v5628xXWtaKnnlsvJEjic7pWKHtQNmlaKbZLS5s3BQ/640?wx_fmt=svg&from=appmsg) 变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmff54DnzUr6KtMicJOcoQXicGFW2R18Rf6bUslnWtia63FoHxpUwTAB9TmwSmq7pic9NtEukBiaJRDlx8HEjvovSD96HuMIULKHKM8g/640?wx_fmt=svg&from=appmsg) 
-   常数 6 不能直接写成“6”，因为矩阵加法要求维度一致，所以要写成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAGjib3GicewibWOfQECdR74WW9aDZeFTJ7pHv6wlqr1bjnt1yrOmBcg5uB2ZPcRuV1iahp7c6JNz7VhVmtkXfymCWwbW7TFyICicVsA/640?wx_fmt=svg&from=appmsg)
    

因此一般地，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgkwwhVrz6oI9vtJTTq73olWWMGuD0Pv5FNar9Tb5IGEicUR54dJgAbydUB9tMlSo6bhdIrZiaGh9hlibfcXIUIC1IWj5CKBSXNsuw/640?wx_fmt=svg&from=appmsg)

代入矩阵后就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK5OSuRDTs4zKZhvOicFstib6WyichOKib7ctmMufzvpmDStR1ZtGezDrFjcvB95yzvuQeccj6libuHiakKeQsST1DkTndnGv652lclyw/640?wx_fmt=svg&from=appmsg)

* * *

## 4.2 把这个规则用到特征多项式上

对于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lelJxu6icj696Ryhn8qzb41pHZouH02RfkyNU7mBQ5wcrx2WFbsXGPpWHR0ehicgtNUqQlAXrOkDpnBNdhCX0TnoEX1GoYXUqQMvUSEZZ52Hg/640?wx_fmt=svg&from=appmsg) 矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPsuLWfpcVp2j0FyAbbdp8K5jftJBwFcfYr2Wzd04bsxHCEQN0YbZpiaKZXATpfgTLK1KENV5ELwD7kLq51Jj9YW1k7UzpeC2kZQ/640?wx_fmt=svg&from=appmsg)，特征多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dEFvu9BRGibpsMAo91ZEqnmrFjElNFAkTWYpjrzPoy8WGIkcvBHsw31UC5rVfy01Hqg7xnKYLksIqQZAyZwakrlicQdcZNQ7fBwA/640?wx_fmt=svg&from=appmsg)

现在按“多项式代入矩阵”的规则，把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1cNIGxib6v91v5bKwmuZia2gF04Fok5GvQVkItSAokLmPmYVBBona5CgPicocJycwc3eGA12HXUnxnemDW4jXfeXEKRLfWme8MmIQ/640?wx_fmt=svg&from=appmsg) 换成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGFXHryPKEEGYh1ewFn3sicKmEf2peu3OfkW9HmmHyibpxyrylXVicuVmIJLMTWKz2aGOHked8u7GBv08AO2yApavBUTsFKHXCLq7g/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47JZ4U9dEj93icEGCic58nBnfzUDCHS03m2tJiadWQDFHumrOSibIn7CSwGpFrVhzm7saXYWSpapPTAAsb44EFQjkD2pRSmfL7Gv2pw/640?wx_fmt=svg&from=appmsg)

然后由 Cayley–Hamilton 定理：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90N02zFquricUXf0gAkzVicMeDYMurEoic1lyNv7S3qgXWGGwR1Jqs0kxOngAK8Z49mPQnNC2jJLFszJpiaVnVkSUOf5UuahRZDjclQ/640?wx_fmt=svg&from=appmsg)

所以立刻得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpZfMZEQcvicOb5J0wmkQcP3USvPu6voJL98ylUqA9OD011YEhQOAY80K0iaWoGicL6PqlicTnzWVcBc7Qe0QXcicWgUJLK01o8KGY2Q/640?wx_fmt=svg&from=appmsg)

这就是来源。

* * *

### 5\. 用一个具体整数矩阵验算

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7g6O3ibDtVkIefyzgnUYxicvbzY5Md41sr3pn9CflYcwB6BDoH2IpzogY7NBYkHhW4GDnGHAyW6Uic1DMhyFPxAfvOLA36SxyatGjoicrB2T5lFw/640?wx_fmt=svg&from=appmsg)

#### 第一步：求特征多项式

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GeOUEcWzfDUSUpNuHTayqqR5bZ8ljG9noLUa0DHdibeGentOBXLcicRTF68VhkDBqXWHUTdKCvCic9Q9G9jibMXyQDJKVLvicgjNbyA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtD3gccbASbV0Y477ibJSujGiat0KF2LzKLTfMPBsFUOf8v4nxIq9OPKzdj1UHeaD8dXx3YWH5p0nX9a846LSr0glqnRqSMIUHnlkA/640?wx_fmt=svg&from=appmsg)

所以定理预言：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90J0WGPS9UsOFVguV8kDqusRib50c2lVjfSLqGYJXuuPHm1VjVtpsQQvv9c0nWMxVqbY9JeVG80dyfKPaTekrs6ibMk8b8cT4TzvA/640?wx_fmt=svg&from=appmsg)

#### 第二步：直接算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SLteL05jHE4t8fDTNATib5JU56s3QL3h8YicMPgJEScqxkNHrpAY3hZenwbwbVhEeLL03C02eapvZNozzHq06mMF3aYI20RHxIk1oyiaSh9Jhw/640?wx_fmt=svg&from=appmsg)

####   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9lMjcQibGtbpFiaelicPIBktTyWNLPSJ0MK6UnKp1zRiby62Nzke6E6ibFybLcoYkFziaR67UuKbicTgictDicmxuyYKydEe8RosnVWxA7w/640?wx_fmt=svg&from=appmsg)

#### 第三步：算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5NSv7UaTqFQibicnNWW3AMj8E3RN5iaia2aExAO3sice0FIUUtvM1koic3oKRVcZ7vBwZjD0pTSriajpD3VeAVzu6TWVrdZhqibZlic5Nbg/640?wx_fmt=svg&from=appmsg)

####   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkvaPI66eUqbw5oPQjFxoVMOpD3cQ6vez5LOFo5GuHbatf9pm3EJNm5CO3d7ASH0ptlFztSFcdRalrb7QibHTmw5xm1icOPDPX0Tw/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vf4O3sdIf7uUVVuYjHyaXG7pHhjicdG0auXZ9kvy94j2MLYFMRXLWia1ebB4rmlb3jTKNnVTkDYF2OVXIMia5cJuBdhwYMZZo464L9vibHAVoSw/640?wx_fmt=svg&from=appmsg)

这正好等于![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqoT3pk395aBKntvSkqejibT8iaW9gMdOboXF107kiaXEACkqn1hbF4ic0PmOcHgCG1IIEyA9Vkv8iaeQsbibu3BDyxvFcXaHOw0hpzCA/640?wx_fmt=svg&from=appmsg)。因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznlZqI64crefiaMv2CDAggxzoN2rYklnMNvY8Spz7P6haHZxv7RQADYvf4MtMVSJgTMoXAJvicXQSxdsOBj76p51UnVEYFKu3akQA/640?wx_fmt=svg&from=appmsg)

验证成立。

* * *

### 6\. 几何上怎么理解？

矩阵 A 是一个线性变换。  
Cayley-Hamilton 定理说：

> 这个变换反复作用到足够高次以后，不会产生“全新的独立行为”，  
> 它最终一定能由较低次的作用组合出来。

换句话说：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6u7n409AC4icd3GU0gSGnjLQA7TiczpBeykDqbcFT3AEqKx1icTW7Rpuhiaclozu3lA89AyCaq1ljPG8yrcoUwe2k5BUJsYBet7vsKnXicc60r05A/640?wx_fmt=svg&from=appmsg)：不变
-   A：作用一次
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmfialYicCkicNZIcQ0nJnkgCnHK3cFUqbaAgNOLib58iaR9XvKaeRBZQzC3ZWtkxKNGSPfsCyZNicpKg1S0ibPrJUVLIKBCecBAcaWFwA/640?wx_fmt=svg&from=appmsg)：作用两次
-   …
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtDvBrjnKdgY2Wwbx4iaPdpNib5apclxjMLiaVYr90FJHZCWklIt2eVsO6ic1fnUqvfyW79Agne0KWNL8pr6tZRhK6vkMTSQ1bTjUicA/640?wx_fmt=svg&from=appmsg)：作用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4Ilbiav7KsP9qaCCAEnXlGwTn2XMEibQOpYuW5FwDGe9VMydxzfNOicfzBK6aL5EF3D6SXrnrt6s1o83YYYExlDvdZVtiaHufXEFBAJwGw/640?wx_fmt=svg&from=appmsg) 次

到了![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LabIC2AWUSXIoSkm7OmYeLiaYmLibYH26a4BWbRxY5l7Ep356eo4FyqTW8A5dZOKK8BNic82rpMXkTnwvYPwPHV6Liau0ibu0k2oE9w/640?wx_fmt=svg&from=appmsg)，它已经不再“独立”，而是前面这些的线性组合。

这和有限维空间的本质是一致的：  
**在 n 维空间中，不可能无限产生彼此独立的新方向。**

* * *

### 7\. 它和特征值有什么关系？

如果![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzDx5Zc6ib6QDlF9Rz4t1yxVGxttXs7hLo3ABz0VaCYnglUMKXLgvnb65qXeMxbxTRic24x9T8Ewk4amatfKHy81kc6QIWN6ibZt2w/640?wx_fmt=svg&from=appmsg)是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpJEsJVKxevxYN5EatL31tFekHf7NgXO2zG4mgB5Nq3mnicMibXsibiao7mh22CFP16dr6SV6av1D5TI6txA3MZQUZyxrOf6q9MEj1Q/640?wx_fmt=svg&from=appmsg)的特征值，那么它满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsnl9vvvlqUuDXotVneafI7mT9G40raXvBmQYPPm61bJuDNoL64MHkIFrUfqluLibcw66JjwqVHD4UeSpug9RBmfN9JnMAHQsgDdQ/640?wx_fmt=svg&from=appmsg)

而 Cayley-Hamilton 更强，它不是只对每个特征值成立，而是直接对**整个矩阵**成立：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNd1db4x1icHmbOSDWlia9goV8OvJwEClZ1CljtN6vibibPjJXa0EgvI5UQRI5MqQGn0M71K3j0t3L3Y9ezFQyEwQxggOxln1LIj2yg/640?wx_fmt=svg&from=appmsg)

所以可以理解为：

-   特征值是让标量多项式![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPQqGmL0IjymicHdia7b9nw48bVH5HFXFTOysNzibsJZ0FsOOl0Qd0CXh8L7zUPyiblsUNufP1CBiazzMUAv1EY4ZUCFVQFRFlzLATdA/640?wx_fmt=svg&from=appmsg)为零的数；
    
-   矩阵 A 本身也让“矩阵版的同一个多项式”变成零矩阵。
    

* * *

### 8\. 和最小多项式的关系

还有一个比它更“精细”的对象叫**最小多项式**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibEibhFbzPriaVvqoht9eoRmD0sgBBzz58AciaCwOn71eY6SKRianbGYvLmxkA929CeTIGS0ibmqKXCZGdzINqsefmwxw3M8YbCqOrOpg/640?wx_fmt=svg&from=appmsg)：

它是次数最低的首一多项式，使得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxH3WzhULicH2QKbrhIRHLRwsYaygetKMwrcRv69ekndLBdmY1RVKfXFtcDGqCsWIUvzXxOtKZ5uicD04adKJGibVAxiahQx25u4kLCQ/640?wx_fmt=svg&from=appmsg)

那么：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tibzk2qjSY0EUxI7kjicXAGVIjbucic8EpK7V79TibO7ibL2FYD60bBvkKjdjxkm299rC8OIcpRqF7oQJhfc5BZdRFoMXjE2VPMibd3Xw/640?wx_fmt=svg&from=appmsg)

也就是说：

-   Cayley-Hamilton 告诉你，特征多项式一定能把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1I4hBgOM1iaAAGgPx6jiaklrAUzv9eLxAncItNnjJXibes52icBufiax2fnrSwzb4rEv9xwZZIq0kLThyibkASc9S3zb4m2YvAibZ1OdQ/640?wx_fmt=svg&from=appmsg)消掉；
    
-   但真正“最省”的那个多项式，可能次数更低，那就是最小多项式。
    

所以从实用角度看：

-   **特征多项式**
    
    一定成立，通用
    
-   **最小多项式**
    
    更短、更高效
    

* * *

### 9\. 一个常见应用：表示逆矩阵

若![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1PgH31ia7PBAhtJwBVeJ0erpJrPU6icm4YBNd0afHT8kvahic2V6J0Mo4GTUicuMLPqzTRH4gyMZAhJZhWiagGZNcOToZb28JVSLBuQ/640?wx_fmt=svg&from=appmsg)可逆，则对

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau5zNrjkorqubJ7xEKkVBNrAObfX66ONAn7KVk2c8byiaWdCPj6deIicEGhNl2atIIlhPjkTibaB9eATweScE6ehKELjEkHvNHJTGQ/640?wx_fmt=svg&from=appmsg)

两边乘以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAnicGAeh7BF6l3RTz0dSGCvkZTFcDUTFAxXic6pQdsCBKA2YJzricPq2y9CnJc2YdyaVmEysujibG3YaRgQObSxyulshvEZEFmscEQ/640?wx_fmt=svg&from=appmsg)，得：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJwKXgEcIkV5cN9XasM3fQEHkEtV7FvzibnZgN6BIYb0CtRx23AY8tc3dsVuMwKECBfvibaLgW1DQiaqx4hOtEianSzsIOpqicNiaPRlg/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbm06M3Lnyy9gK5VYTh2HmmH9syT3Ndwn5oib4Bxdlj5prFiatnvic8oMvWKSvczScQ1USfDQWneFGoEydKp9O77NTwzKaItCWyang/640?wx_fmt=svg&from=appmsg)

这说明：

> 可逆矩阵的逆矩阵，可以写成它自身低次幂的多项式。

这很漂亮，也很有用。

* * *

### 10\. 图1里的那句话怎么理解？

图中大意是：

若矩阵的特征多项式写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf0SWPCpUYYt7shgFdDHU46swiacybJlnPGknYTarlk74mqmicMYf6fEk1uhZiaNF6S2tskeicYeBibA33lssD87BqMqILW9xj6aROzQ/640?wx_fmt=svg&from=appmsg)

那么把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ6If90gsZeDS9tq7v3zYB9wb2rnA3ZbBeJuNUzwrRw2g4CGmwIlcIy3TicMYEoxaOnU5niakwiaJM4du0K8CyzjUAftwqianKaUtEg/640?wx_fmt=svg&from=appmsg)换成矩阵![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EsjF1J9mGjeqfdo385HicdzsQFlKFnBUg85jRDxVjVicUIcvIYQoZKibJ0WDZOZuzOiabfmYkr4I3ugTFDc5lb5dupLZdRWPEDy3nNmbtrAiaXoA/640?wx_fmt=svg&from=appmsg)，就得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0bIs2yxQicYFlkib4lE5euMAiahK3YPyERTN6wFlSwJ0aia5YACKXZKo1e2rylhCfqcKr2MSEkoia7Ta11B6XOWiaeMt2R8ibra990yRg/640?wx_fmt=svg&from=appmsg)

这正是 Cayley-Hamilton 定理的标准表述。

* * *

### 11\. 一句话总结

Cayley-Hamilton 定理的核心就是：

> **方阵自己的特征多项式，代入这个矩阵本身后，结果一定是零矩阵。**

它的本质意义是：

-   有限维线性变换的高次行为最终会“回落”到低次行为的组合；
    
-   因而高次矩阵幂、矩阵函数、逆矩阵等问题都能系统地化简。
    

* * *

我们用一个具体的3x3 整数矩阵，把 Cayley–Hamilton 定理完整算一遍。

选一个算起来比较顺、又能看清结构的矩阵：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAWNDibDxzZKajvSRcsl2FVMDCkia13ptRmhUpwaKuuSYuaJQXyiacS19QfCYSBHGy6GxZBrUYtsmEbKHR9pibkLzDUPlLOs2xSPviaQ/640?wx_fmt=svg&from=appmsg)

这是一个**[上三角矩阵](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247495118&idx=1&sn=453d58c3373cbc240ccbdc25412f1cb5&scene=21#wechat_redirect)**，所以它的特征多项式比较容易求。

* * *

## 1\. 第一步：求特征多项式

先写

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7DPuulib7AVJXYRcYnPQGao20zdSlnvBytsuR1JLzYKy506BoHA4E04JxWrh2Jqa9OicqD37M0M6eNjSB3qz2cHDtkg9I7GUsBWg/640?wx_fmt=svg&from=appmsg)

因为这是上三角矩阵，所以行列式就是对角线相乘：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yjwNFmzI2T4juvK9e10TOefibqVMeAJ9t2Qwc1WUkM54yDz4AeNjyicKvpWUNrKia7G0ibYQlr3DddqyUdN1TV1xFzewZUgDRibjocUmR5fudZvA/640?wx_fmt=svg&from=appmsg)

先展开前两个：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgqaicL1ic04lgNRib7wicL0Dowic1dUDbJyy5MaghW9PcU4wqDWgMQHfBgzfq7q423zwCiaO4TcEby3S8gGrk9DXILicNpCn2MicMZp27A/640?wx_fmt=svg&from=appmsg)

再乘上![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0m286nWO5SbVyJvQiahlg7ERBLHCTfPJjXolcsPHmsTweDQUCnzPCKQXibLNicQpBkOCBAWVpn9NJBYVQIrTw294nwQiaIq3CLI6tQ/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmfe1cibk8druLib2S1VvYgRtuL0YyeDA0e1vaX0cSs6D3JuIulTB6AFZwRiaafNNib2v8LQIKNDzBvmuPhLVytYOm6SkmLeFWd138Q/640?wx_fmt=svg&from=appmsg)

展开：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SLteL05jHE8GHxCVXiaibWNmwcB7dI5AqCJmapX9uicszLcg7gPqnnEnc2eSkYXzPaY5fXqPzYMvveolln1Ik9C5RQK8CApKEY3Bbo20N8AXkA/640?wx_fmt=svg&from=appmsg)

所以 Cayley–Hamilton 定理预言：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ACSVSTxskVVgUlt90CuYPEib950T7jUkvm6ZMxA5Rmo9OzKZlfLvDRbOO0JfrrEwlBdd2wf7T2qJiat9cwomxML8gXia4y5OqKwhBYlO7Ss6rw/640?wx_fmt=svg&from=appmsg)

下面我们直接验算。

* * *

## 2\. 第二步：先算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPQibQHiby7C9qgLTC6E80AxOkrgv44B7zs08ROXcmmv4NOvsicrffcQttXhibn4hEyZyiaVPnk59tA4FJ7IVKd40Z5Cibl2APiciafkIHg/640?wx_fmt=svg&from=appmsg)

##   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib4166e1DvX1Hg0M0rGYlQwAF4BKXzMgibAGqeOXKq6g7Ghuc2usa2kVYk7LJibvt1R5Xh4ibbvhqVic6a6TjYTLp6qz0lcYd7iaIXU2w/640?wx_fmt=svg&from=appmsg)

按前行乘后列的规则逐项来算。

### 第一行

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooct8b4KJ3Ix4GicQvRiahE8tq7yUcaKTPeZJdd0ia6lWQfE2lsP9BSwVUfQ5u4ozHyibEibicZ9BBEUrpjCU2OialdfNdibJH7zYrt1ZVa0/640?wx_fmt=png&from=appmsg)

### 第一行乘第一列：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSgvianRGia79mibJYvCqIxNglISDHcA0x3BBRFRt5rbqSlHmAVBLU0M9ybast4mrppt1sZomDOBNHpQyAqibAAWVzKWU5fNC7hE5uUg/640?wx_fmt=svg&from=appmsg)

第一行乘第二列：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvTolpPGYV7tLgH0dotcpvcYZaao4l3QBd0Yq7fa1ibshp4pgej9wkELdaJEW5rOicWp6EMkiabJ8e5ydJGT9S31fUoBqRicpxyKIXg/640?wx_fmt=svg&from=appmsg)

第一行乘第三列：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2XyOnMqv7o2GUDjqhVVZg2DaIK8RcEbKEicAuzC0dsU8Gv9zs4JEuGdZ7j3eTicKG3RNOLI7RA0lIHwHs4KKhRYNKw02Uab0DqWAQ/640?wx_fmt=svg&from=appmsg)

### 第二行

得：0，4，5

### 第三行

得：0，0，9

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43Tnbr9M5g81Tz6gDTAia9nsUCMsC6nvuDcpl0tKrmd5fhAGWLzJfeRdrymQmR4loelciaddVkOZBicjydNs1Etr31eclAyR7TSiaxCx6w/640?wx_fmt=svg&from=appmsg)

* * *

## 3\. 第三步：再算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mqibiamibsxbpmaS7n9WsOdXgqpN5n9qTJ7f31LObc6Ssx89E8YPiajHzlHWbYPMcgFNKpMYEU17MP6twATYeBwrlI9oAcPk7ia2FXA/640?wx_fmt=svg&from=appmsg)

##   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnWiaTps6W4UFvgUsQU8V1aMp2gzxG4NbEBJ7szrZm5nuWUXPbZTNPoWX1WAcqT0U57GmzxosN6ll9zw0ADZtj3zqW6DlXv8H1Zw/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwgNoa1h4BhC7bpfycbrdY0ExrgtuUWFTM3c4xWzjhMSdq7IoFuibOjDSichnl8RTVE5RMbHWxWRibdSP9jTXAOh4cGjqmn16STahQ/640?wx_fmt=svg&from=appmsg)

同样按前行乘后列的规则逐项算。

### 第一行

得：1，7，6

### 第二行

得：0，8，19

### 第三行

得：0，0，27

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmZt95TO2nCCobEyJUUsoTAibl0aA9ViaXiaUuBvzuyTAdxficXLkYZib03liauyRibW8gosjddVTLIlzENp65ojDtj60bEvGADqT21CXQ/640?wx_fmt=svg&from=appmsg)

* * *

## 4\. 第四步：计算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5WDF26gRGMWRRVibqLZRbaP5vCQ5iazPmHflzPOgaXmibP6snzNszCrRTnUmAQS5Lcb4H4qbkiaYv99Tu8dicHsPHrd9UcOuib3VNLtv4n1zFnJmEA/640?wx_fmt=svg&from=appmsg)

我们分块做。

### 先算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1GmQqZGwn3bD8Kiao1YoIoJyEamJS6edUTSLxPVIP8nHVUEaFza1rTYgmmibhcyLv6Taz0WKhejibXNZ5pPVhiaibLGj28guJlufKVg/640?wx_fmt=svg&from=appmsg)

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7l1DtiapIyeBBatK3L0ep22JE4Mpp2yX2a25RxYsdVpXkvvy2QDTItBRwq8Cu3ZNzqpkhhmEC4c4zBbSHP4nMbRickpTY5gficf83NYVFL6gHZA/640?wx_fmt=svg&from=appmsg)

### 再算 11A  

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59uXhfsorpchDFLGMdV8lQviaWgPnibEiaXOHu8Cbt7ibJTECJdYw3CE5Dm8hrt5urdSVtJu4Zl2c5WZ51Sso24ibHKdlsiaXWd7piaWkJOnXH6Ic9g/640?wx_fmt=svg&from=appmsg)

### 再算![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibLglibhUYKKwcKn9I5ZR2q7lQWRaiaI5XuPEQPOcwVN87sBAdqOZy9ltVJ4VicU8oVr0JIichs7Iy2jrtb2KXVyJbkIsRiaN0AEHVvw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMHjdb99xcic48ZiaGvc4F8497ltbmGKeGBAklNZ7MjsiaHmPgd9aJibVqnV9NOVc6VcNuzckPLIOcibiaVUHdXzUJibewhot4EbuibECHA/640?wx_fmt=svg&from=appmsg)

* * *

## 5\. 第五步：把四项加起来

先算

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dMAIkJOvVFAdVEO6cOD4rvYWx8k8mfOc0hdvt1ibDZrViaMHZKHe0Yr6mQKs9fhuR8wuyUkbUevIcRkXe3tz1VhUjd8siayseC6Qg/640?wx_fmt=svg&from=appmsg)

再加11A：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5OrKCf3UjnEfbxtCGiavCWxXGmMHFPtS1FVdtBFNkMARe48nVupeKb2VDfaShPhaQ8t3kEJ2iaz6bhfiaR5FuELibomJtgLjZAwVDib2GAabDYMlw/640?wx_fmt=svg&from=appmsg)

最后再加![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvUHhFGlqIutQplmf7kBe01KY7H2NmLZCeTiaBHSvSqfAQybET8tlRkRvNSBMg0JbDhsr5gbPmM9FGXrhrMJU65jNb9T3hy9Xxhg/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoX48yjiaTQxiaGsEcRqXepVwick4ictPUTUichX2OfLZTCXp8f6OojIXLz7gUAPxaltsiadoQwbiboXG2VeaEXNu1CP5Kpm0pIP7L6lQA/640?wx_fmt=svg&from=appmsg)

所以确实有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7Lt4qe2JKfGicANDgWa9LMHict4NbgeRhJyibJeJ6ibFooic53Smzz93MrlUVmcV7CPWLicjUMMG1VGhu6tCjANs3icC03npbRLfdcGAg/640?wx_fmt=svg&from=appmsg)

这就完整验证了 Cayley–Hamilton 定理。

* * *

## 6\. 这个例子告诉了我们什么？

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScKh7m6MmrAW19fbTJ6gTnFXvTGAHV5LkqcjPIyCu5EfMLyePu8DS3poMtyvBIwC8NIgKSgfeP0TGkdxqUibFfcrUntPdG0nB8Cg/640?wx_fmt=svg&from=appmsg)

所以可以改写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAflvTtg8ozAiatgic2gwnQicalnK8mBRM8u1VAgdG1FHibj3wvL4l7icEUxic2InUf0iccbdW3XQCjhVhpsLqbyVJIIGV2YFibnL95VPPHHQ/640?wx_fmt=svg&from=appmsg)

这句话很有用。它表示：

**三次幂 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtfKQib8PiczPCG1YHN1ACoQ0mwhibib3vYmia8wqNmcxb9ejelSzrO7IKZ7sU4p9w7oQZ5KuA4FibW6US6mZow6dqdbtsH87Q5ZmibhGg/640?wx_fmt=svg&from=appmsg) 并不“新”，它可以由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Y559V5uMGT00cCzZGekLibxREABRvpicYIf7uhaZVjXea4VVoEg0LBW5iaISKI8LL18MyiaUzenh2QhQwgfl6LBjIqvEPSRI0m2HF71h1q81evw/640?wx_fmt=svg&from=appmsg) 组合出来。**

进一步地，所有更高次幂也都能继续降下来。

比如

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965QLicfaBlNqfiaZqwl3uvjj3rm5F2nQOZ6WDfMSbzgOLg5ibt76ctRY8X9ibsxm4bX6SISFX2314tpt8BmcicWNeMYw2StqdoJKxY3A/640?wx_fmt=svg&from=appmsg)

再把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZANHScicYDkXzyYdcQ4FBJoYDyLP0qJxQlfnW4Riav4aOtbbLibtPEAQkhS8HyicajouBm9VuuK6Hch4zHUXwnMy8hYXAUxBj7YaiaxA/640?wx_fmt=svg&from=appmsg)用上面的式子代回去，就能把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibMV9xdHYoibd8Iwq6KC3DzY3Ga9PZOtQ52hprfu0eP2j5JZ4JKiao2GV9kRUCnyOOkZ3IQ5g7TibbOKup6auaBRaicSt3jIOWaYQ0w/640?wx_fmt=svg&from=appmsg)也写成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpTz0C1rShYwwXT0ZzML8xdbgNqohDaOLl66QDDociccURCK8bXU225JRl0qPWSoeT6RRBalzVktUke1I6fkfktkz27f5ktvBhWzw/640?wx_fmt=svg&from=appmsg)的线性组合。

所以从![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibEysosUVPYWtero66Pd9bzcFIupE5SmJ7CvmfgZoIAQs8ggazbndR5NaXVCxTbsFwXMseDibM5Flibcq5oWqMIJV2J72OFTx7lyA/640?wx_fmt=svg&from=appmsg)方阵开始，所有高次幂最后都能压缩到：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFWBX9TdTHz9UuEWyTcib6t86ZEuq0cNpPTONssvc4iauQ6DfhdmNNv7CCrrwdKhY12AiaGAILTGJqM2VM9yibWrckL8riadH1fRgPJg/640?wx_fmt=svg&from=appmsg)

这就是 Cayley–Hamilton 定理最实用的地方之一。

* * *

## 7\. 为什么我特意选上三角矩阵？

因为这个例子还有一个附带好处：

上三角矩阵的特征值，就是对角线元素：1，2，3

于是特征多项式自然就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibB56ERwgdQNRQ9q5MiazdXrOSgTND26oRgsdXv4FGMOEHBEuvOJicVrPSuTkRYrEmPMw0QrDHicR7orDO7POWWA13RiajRXt3tAWkw/640?wx_fmt=svg&from=appmsg)

你会更容易看到：

-   特征值决定特征多项式；
    
-   特征多项式再反过来“消掉”矩阵本身。
    

* * *

## 8\. 再给你一个更本质的理解

这个定理不是偶然凑出来的。

因为3x3矩阵作用在三维空间里，线性变换再怎么反复叠加，也不可能无限制造全新的独立方向。  
所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EsjF1J9mGja2WmEWg8Kzh8PjGKAlK67LAkgQz2Lr9qiajaLcdhJZQUCefruyUcLqYGsye07UpDTibibNib7RvTWgkqxIcMCTYe3Qejyh846TXVQ/640?wx_fmt=svg&from=appmsg)这些矩阵之间，迟早会出现线性关系。

而 Cayley–Hamilton 定理告诉你，一个非常自然、非常标准的线性关系就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbNpbib85NAsqxAkicDBhoRbSmQmvegRmLBCy5gnVlM0icbg8THLYhbK2IhHsVhN1icribmlx0EanfNTmB3Qfb4nxTdicdDDLVLeRvXLA/640?wx_fmt=svg&from=appmsg)

其中p正是它自己的特征多项式。

* * *

## 9\. 一句收束

对于这个具体例子，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbticRhB1KwMmibQjo5MU05ojBB0yASXiatDxD0MFOx9BeUgLmO1lNicZVhHumI8xGeLZx1yXMe9ubA12nyZKOdBCIB7a1ch7XZKgtg/640?wx_fmt=svg&from=appmsg)

它的特征多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgot3t881qjfVPFZzgu1zVF4QM7fwyZb2aib4oWTGpfpcgYIVFQ7ib7cSicjmRhicIGbibnhaD9ToN9Zhg49Cu6UjgHBRFicThlL9w9Tfg/640?wx_fmt=svg&from=appmsg)

而 Cayley–Hamilton 定理说

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rc9G8Ev5a6KibFqAuBicU82LW5966OBnG7W05bogLtDqqTxMrgibFqicPBCW1ThfmOmQtXHdicuMcUKgBoLpod5KX6svCB0Stq3WwwpA/640?wx_fmt=svg&from=appmsg)

我们已经逐项算出并验证成立。

* * *

我们接着讲：

## Cayley–Hamilton 定理和“最小多项式”是什么关系？

这两个概念关系非常紧密，但层次不同：

-   **特征多项式**
    
    一定能把矩阵“消掉”
    
-   **最小多项式**
    
    在所有能把矩阵“消掉”的多项式里，次数最小的那个
    

可以把它们理解成：

-   特征多项式是“**一定有效的通用大锤**”
    
-   最小多项式是“**刚刚好够用的最短公式**”
    

* * *

## 1\. 先回顾：什么叫“把矩阵消掉”？

如果一个多项式![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNR1ZiaXxKvn4hkj05Ralgx1vuq0NJBt5saStO9WtxjeXibP9Ifwf2n91LtUXkJToTqO8K6k3Int3icQcOJficSqxiayReJ28V14GL6Q/640?wx_fmt=svg&from=appmsg)满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWEKJOwvwo4icialmrhLTIbokhN1LeY2EvEpvjdQbf36FYccQWBjjDeOZ0P9vv3V6swsicyfJkmg1aKOibsDEo166mhBTBpXOj1pAJQ/640?wx_fmt=svg&from=appmsg)

这里的![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57nAgJzRzdv9IvHwjMkiax9kne9KkpkADcibUqQibibhPG2iciav0CHaUmyyMGN6TANy9s2Wr60QibhyBwS76mt2QQ2ZiaVawGKEMmMwkiaHI5rVFpOEg/640?wx_fmt=svg&from=appmsg)是零矩阵，  
那我们就说：**这个多项式把矩阵 A 消掉了**。

例如前面的例子

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRWibacpHNc1jnHltVvpOQS86l7s04oyALvSlYw7cFhMElicY1KPwShMibd1Il3VkIueLFG0UUfWQeOvEryYNiaVzYLk1y5uvmSh3EA/640?wx_fmt=svg&from=appmsg)

它的特征多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM598fbtext8cA5ZgENHOc32D52BrECKt5w2Bm8ug5vKKKM2ialp9GOwzsDgfjTK1QyqcWMh2nJ77kwb1NmOjdyFiaOxQ046OKWTs4Y5qlKtqiarw/640?wx_fmt=svg&from=appmsg)

根据 Cayley–Hamilton 定理，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49lJCxaHsUaYM5F9ahPFMQj32YeUVrl0h8O44wqf89JibIhy3ichIuo1pdozrDONOEIFbhKjhDl6Ihiaiaw1cGEcO0t0EL9X0TBKC9be4mcicXH8Q/640?wx_fmt=svg&from=appmsg)

所以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoRJJGgM88wTpWhQrjZPgUlFd7qX1FdEHic6jY5ibomXxhY01x4uhUxpbqlx4UdGnexa4hZjc4DWJw8IaiaDcQUeubwYXJEmG2S4NA/640?wx_fmt=svg&from=appmsg)就是一个能把A消掉的多项式。

但问题来了：

> 有没有次数更低的多项式，也能把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPQwkhK20iaJRrwgAxrKFNyXHkIyicc1zxPicGuMZMfyEh9QInV07jYwIJryxlu1iaUz0Y0cT77n5NPf4vgGDbbx7sBYArtVNtiaUBOQ/640?wx_fmt=svg&from=appmsg)消掉？

这就引出了最小多项式。

* * *

## 2\. 最小多项式的定义

矩阵 A 的**最小多项式**，记作![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkojT2XH0Qsdu21XibBfqm24LMG7PrkBZyX09WrIcibkmeqnGwYIiafOv0wjnEHclo8UUJeB7DwU0cHJGFoHopbcJCrcByIaES93mg/640?wx_fmt=svg&from=appmsg)，定义为：

> 在所有满足![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6JpwiaeUEpiaBbqbe4FNQykA9p86BZur0ER5U8wkJFrGAHbsPMCtwFd6giaqr3UicUXO7ehw77TZO9zbkPZbW9W3oRV33K93nuicZibjA/640?wx_fmt=svg&from=appmsg)的首一多项式中，次数最小的那个。

这里“首一”就是最高次项系数为 1。

所以：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJzFaZU2ickntOCz18Y2z61x7rQo2LsqfZOpq7yM9xTgB4iccMMqamsMqzu1NDUMkgp2rzH5vHZMuJ8JroDfKibCQ0bDiarLMZuvpZg/640?wx_fmt=svg&from=appmsg)

而且它是“最短”的那个。

* * *

## 3\. 它和 Cayley–Hamilton 的直接关系

Cayley–Hamilton 告诉我们：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YIsBgByNySllE9icUHXXHKmDkR39laQ2o8ylJ466LcJXicRvp9JibRmpL5JsTtOIwOZZP57tCyap5ibvGibktd3TrTfGfEH9ibyE021g/640?wx_fmt=svg&from=appmsg)

因此至少说明一件事：

> “能把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScGuknJ37GqWeYVmOQZNncZ0QdC3a0VFmOAGO9u6dvAQDJuX6hCvWicaDSTB9Hjns97IrnkbhDbzzgryvnljKCYzdqflhyNKCicDg/640?wx_fmt=svg&from=appmsg)消掉的多项式”一定存在。

所以最小多项式![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LUH4NArT2omoh16duxtKpdC2eiaP3FTAYMXXCeoBkmu9YyW0eN8CYCOfxHs7f6ic3ibCicK4RmCZMicUTYSNkcQ4S60vCBEia1hC7BkQ/640?wx_fmt=svg&from=appmsg)一定存在。

而它和特征多项式![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhma08bzPMhu0YCcicq3Hs41Npia9fmP3Sn9YFTZM171OFBmXX9zzKFYbkylVUibjAB85fmG5SqhibbIEuRs7yhuicfxMXyaAhc6Drt2w/640?wx_fmt=svg&from=appmsg)的核心关系是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm201Mnu9xsiaNNafP80l2kKpLspGqBKOvA7vaglydiczzux8ia3cqRyX9veZh7NPTZcC3icxPRBs1MicqEzyseibew4Sxlaw9gqea1VVWw/640?wx_fmt=svg&from=appmsg)

意思是：

> **最小多项式一定整除特征多项式。**

也就是说，特征多项式是一个“能用”的式子，  
而最小多项式是其中真正“不可再缩短”的核心部分。

* * *

## 4\. 为什么一定整除？

这个结论非常重要。

理由直观上是这样：

假设![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tib4HCzMtnxAlEibVKnSial3svL7nPKfny1NzTZzpNgTAY9rN72HjAzyvUGmwsVNkvsaiciblbedbE32ljSaEhZ6kFRHbLTQnLuibEicHw/640?wx_fmt=svg&from=appmsg)是特征多项式，且![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQtxQYjRZ1y3lcGtU3PL5NicYq70VFLvCyUVgNzF2eYhkrFvTbM7HGgnyI0klPRzUPI6zQqohjNcNXIG2p5Q3bmLH6SIgs4IdFmQ/640?wx_fmt=svg&from=appmsg)。  
把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHQDLYMwB2CZ40UDDDx4y6OtfbxLbBg0AgnrT5JelnWShowaJsv5RMicYnhLEcrJmEFFWgd4vseAH6vkIrxiaVAEwI3UibbC8wdvww/640?wx_fmt=svg&from=appmsg)除以![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pSQhcJTRibyYVIRWrEYO4ibczDYYTmenQbcY6ueLibZ1UvbWgkIHmzsCfMFKk1D22JLGCnghP5JHqfDZRu7m9GO5hC7kgeicPmduDw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAq9ibnbSyaQ3ic5zvZH7KkaLjSL7mKnGQP8aga0IFoCnPAB7hYEHic4ndQWnsPZZ4Z8zeKoVV7OKQrbBvXMRDUZOTHD85YZiavic75Q/640?wx_fmt=svg&from=appmsg)

其中余式![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg3mc00V0IqgahTeNzEDLNcW7kXl4mUKClGydY1ibd9Y3x7KQzwA7nFibqPTqw65zxQS5mWZKFX3yaObwep22gHDfF0ANmSr0TGdg/640?wx_fmt=svg&from=appmsg)的次数比![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGPa1cFjOKtbkpQdianJLiao1DUuW7P2E5tpMF8LqokeJsEjIfVLacP42gNUZGRgQzor6rwUd7sjS4kLZEXeqmzPOgZ8zFlIwicOlw/640?wx_fmt=svg&from=appmsg)低。

把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHyReFKthHERXrx0gcfoIUFV9smCXgB7FAsM7CvQynLqvUyibgDghbnFcANFbEnACCDpfUs0cjnPngCPpNUTKFYbmhfLpnTVtDaQg/640?wx_fmt=svg&from=appmsg)换成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK95KRqHWujx5AicCvGAVa6YtnI0pqgTIxLg4SJEy0judLZOyan2ia4hG4v6zkHiashZtVOibEwGrQy81ibAvj2tnM3z5eGicRZmIPhcQ/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68TIFib2hP6NWHkibNnQvgGg3oZlo9MMdUHao4Q6cDqia8ug3xol0c66LLBkq76LtIib2uQN7s4czuXCJJTClibtniawCUrNhibqzqumtOS7wAia4WIw/640?wx_fmt=svg&from=appmsg)

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmd5icfFfQHGibkSwJS7OfaCwzKlkzW6XalwAKW8bD9uWunj1LqTgf5LWTK1JC2fIkZ6YNXKfJTO1GMWibGLibgKOsVM0iavKhG4U7sA/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScJjV8ZD5zqU5kicOSoVJ1O4FDSQ4R51Q27aiaic2IxDxLSuRz8Nf8A2Cj6OBYyHpfYpS2qEMYiaAxdnI58H6G5vKVN8JFueSzqrBuQ/640?wx_fmt=svg&from=appmsg)

但![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPubo8LvoEIAGMHiaTjaDcx73B4THMLsFKvlumfzcXhp3thBcuAnVqGoFtjJvaAcDbicoDhvicRJ0UiaiafKvET6YHbJdhy2Q75Rja7vQ/640?wx_fmt=svg&from=appmsg)的次数比最小多项式还低，却也能把![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPvibe43wbPKVd6XBicqticotgicDNP5Gz1Qp8sJdwF0uIwqC3RCpAodBQ23w6YwP7mP7l99uDox8BZPNokePwEpvRmjKfgRWl1SBAw/640?wx_fmt=svg&from=appmsg)消掉。  
这和“最小”矛盾。

所以只能有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtTR1P9pZrLuqw4uWUz7nh5ia15vic2OchMF9zDLZuAuW6Lb82XTJIh1vBjw2XLDTqicC6cic7z7hM8kPXv0HNdDCxE6bibkCK2LIjlw/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R1iboNDfF6vZeaibsCI4tpjOCDkicm9WHH3K5ZyPIUxqyibRf6ajAZIln7bOIrMQ3SpjUPichjNLIuMpD19geU8icqfXXqw4Q5Elx9Bww/640?wx_fmt=svg&from=appmsg)

* * *

## 5\. 先看一个“二者相同”的例子

还是前面那个矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260muLsR870ia89lpjnV2m6yFsenFWnlakm5T5go6DduzwNO6Pia39PjzkkRfL5yThbL6oUPZlp5yfJ1OiciaKr1G7qOVZQ7icctUjvgaQ/640?wx_fmt=svg&from=appmsg)

特征多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJNzYR0UYOx20q4hhCx0TP3xKXKDT441m2vsr9DORLhxOaVYD3hMUQBibfK3TA3kQRFUic7EtX0TAtcgGO1iafLGzjWFb6dOqdydMmA/640?wx_fmt=svg&from=appmsg)

因为它有 3 个不同特征值![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJegxibr0odtIGudmU1AmOicML2EF1vheymN4uBMmXsTZDT1LDuJBt2WVKoQcsYXz0he66G9qHBT4S2K8yiaQYFIxdBRZeQy4ibibEhQ/640?wx_fmt=svg&from=appmsg)，通常最小多项式就会是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VicZjGH2crGLDJd3TPyNhMLnOyib2cxVR8kET6Cz9STicIlbvHBibQn2EqMaO0O9ywh3SuaqKJDsYvZB6XGUSPO6AiadNtOB9pCX7l5EIKZRkiaaA/640?wx_fmt=svg&from=appmsg)

也就是说：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfULibgaf3nHwY7RaX22ryfiaIBt3Q64siaAto5qjrPevqmNicdPt1An3FYbMMHFEziaGZkzdUThStZj9h33z5pCicGNOjDxWpuLWwtGsg/640?wx_fmt=svg&from=appmsg)

这里二者完全一样。

为什么？

因为如果你少掉任意一个因子，比如只用

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7s4wD43nQbbvKj4faFpwh7PiaTCSKERUyqtfC12EgAIk6YJEPgJG0QaibtfQ9UzjsyeSUdx3wZ1EKPkbyAxs4QAmvmspRmd0TmkicMbkBqDMLzw/640?wx_fmt=svg&from=appmsg)

那么这多项式在特征值 3 处不为 0，通常不能消掉整个矩阵。

对于具有互不相同特征值的可对角化矩阵，常常有：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGFOyIWdyAQricbicQyKksjY2NSnAEe20iaOZjnkApUuf9YIjxSCVjyWDnjx93QwSqWxcyVADkC1XWGBx6bROr1KpZrwRS3P5wBdCA/640?wx_fmt=svg&from=appmsg)

而特征多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxENzT72vkgDlYZ6BR5JS0uPnT0BkoS6s49r4eVWoVicE15D39oictvhWtbOEf1CMuZLFcERBWfkDXNY6jYOzQELlX7iczup7C5pQkA/640?wx_fmt=svg&from=appmsg)

当每个特征值只出现一次时，两者就相同。

* * *

## 6\. 再看一个“二者不同”的经典例子

取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEAqAZXTa9QNib4n7B9l5zjRNZyxja51BEXOcI8cybjOR3Javt2ViblDNS4Mn9YbhYexsNgu4vmIK8cqPBYBg44Cs5mcFEuKeu5ucQ/640?wx_fmt=svg&from=appmsg)

这是最简单的例子。

### 特征多项式

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Y559V5uMGT5ibH9rHLx4EiaJscmB0eMJHlmJl0ehZukXZPB3HFKmhuqB1fb0y8pDLRmfX7yB7Kg4yDeS2wUfvDtbjbOgYW2LYtVyfibaBeEcCw/640?wx_fmt=svg&from=appmsg)

### 但最小多项式呢？

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUEP0BmmI4tjQVqzddtjxFEHEINiatfSTJjia542dhfw6HLfoDFqfHVLE1ElSrHbdgM3iaGGgd9G7zMAHzTJy4GU1mLdMcia8KrJjFQ/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQScyibh1cM0Qznb5UMQicRibCLmhq6U5eO05C6KeMIlCeO8Tk8M8zAyOiazR3rqpibIqpPPZejM9e5icqxXuVQaN7UjKLzbQOuqdhibjoQ/640?wx_fmt=svg&from=appmsg)

注意：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL6MSIHZSMpha9Y4tWHSkd5Oz0UbibVmTo8cPW0SaYI54CicGBmKibYd8e8vofMty7ZwJO8ZXLNJKItEJibHb1wUpyAqmbV9zKzcCwA/640?wx_fmt=svg&from=appmsg)

这说明：

-   特征多项式有重复因子
    
-   但最小多项式只保留真正必要的部分
    

所以最小多项式比特征多项式“短”。

* * *

## 7\. 再看一个更有代表性的 [Jordan 块](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491476&idx=1&sn=54d09c6534a825553384f80d15ee8f47&scene=21#wechat_redirect)例子

考虑

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7iaaQxyJyAFunU0c9xRblQZuTOQQy2YcVfD4kXUMb3ZgicIqvTbp3s4piaty1B9TBdjMlnjzbfboZIEG0zJnp2ia8jm0LzfsWynNdibrmRKicKsaLw/640?wx_fmt=svg&from=appmsg)

这是一个上三角矩阵，特征值只有2。

### 特征多项式

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wjtXSqaicgyCBc2Hd4ibphKQpMic3VzYiaH1MtLNIjVkck0Uplbspdn1A1q6olsrvYfUDlicOn3ia1WG16rYBUQbLn8nFCfMwglZnvlHZIjJZtxqw/640?wx_fmt=svg&from=appmsg)

### 最小多项式是不是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyUYhXKYlIWTB29MwLbxUPewB0zuRRbK6PzrjVP9M2tE00yiaHoyYWTrhibBia2dTEn8XEB90nkKq3yHib8SQVqOpAqJwC9cD7OhLuw/640?wx_fmt=svg&from=appmsg)？

不是。

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpoh5vojoT08iaGGIzftukB9YvLksCpiawUgqib5e2tfia9oqcElGBrjjUQ4MZ5ho1IgC2SDkegicHYib58UCXic7SeN2ibiccy3yvYXW5mhw/640?wx_fmt=svg&from=appmsg)

所以x-2还不能消掉它。

再看平方：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRY7eUH3OT06iaJYwBUV98RJvwwNz4lLicCs1XicuUI6okxND6xbbL9l1VeN1HPg2Xt0Og5cDwxAvR0dzjny5mUgOjPxeaQvb1LgBsg/640?wx_fmt=svg&from=appmsg)

所以这时最小多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPPmeNGgicCKZ2k4TQeVhnnjUpjxatGRls1PQnialQPrcK3N7mOD8o0xAmH3SuuF2veNsxWrrRp891ribNzB1vhlwHciaiceGRPgF4qw/640?wx_fmt=svg&from=appmsg)

于是这个例子里：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPa1Js8xdqu1ZV3icnneOBFb1qLJNaeib6LrnYfRyVEvySURx9vIiasiaibeuRKko7DCQbic6dk2G1Pq3jGdbCiaIK5Fdf2GkE541rzb7w/640?wx_fmt=svg&from=appmsg)

虽然只有一个特征值，但因为 Jordan 块大小是 2，所以必须平方。

* * *

## 8\. 真正决定最小多项式的，不只是“有哪些特征值”

这是最关键的一点。

特征多项式告诉你：

-   特征值有哪些
    
-   每个特征值的**代数重数**是多少
    

但最小多项式告诉你更深一层：

-   每个特征值对应的 **Jordan 块最大尺寸** 是多少
    

更准确地说：

若矩阵的 Jordan 标准形中，特征值![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amaAFjtc9YhJOtIffIe6yibFcp7dicGQQTjpk5Ez9BSFqDsw5vCq9aktvJILfcNKLJ0t0xPx1VYSIJwZbmIInibEMBNVUoFQHjyglQ/640?wx_fmt=svg&from=appmsg)的最大 Jordan 块大小是s，  
那么最小多项式中就有因子

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ0kZfhicnumgh9HNSWia0Sia8xj4MviavrKR36ib1oA43xzrMcAlTlRyJ34W22cAuNtjn9Xvt6CcxS35Ho2v8Sem3h8ecCia1jYQdx3A/640?wx_fmt=svg&from=appmsg)

所以：

-   特征多项式看的是“总共出现几次”
    
-   最小多项式看的是“最大链条有多长”
    

* * *

## 9\. 一个总公式视角

设![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibI5SpibpT7H6Bx3j1GkgRic8HiboUgicicgWDeoSqnX9Tt6zOzuRKicFcTLYvaOqAibYd8a1Rkuc18ibYribmgGfzrxwicPvsBO1yj5dZc7g/640?wx_fmt=svg&from=appmsg)的不同特征值是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VjKJSqCLh67SPP9NTRzibPNlfKT749R0Yzya5Jl0BNcfmMM5YWO0s3GndSicGQicm3Y06L3uOQXWT4NPQ8OES67ia8BLK4NicPksYPVSu3ZH3wew/640?wx_fmt=svg&from=appmsg)。

那么特征多项式一般写作

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtpTXsdaZQHqHwN5jowp7QtmzUh1BA81LjVrR7AjqpPvKRF4AMqicXaaPjq4U6dL5xSm8x2EHVLgfiaIsGEZibdP0LkBYq48hPIv8A/640?wx_fmt=svg&from=appmsg)

其中![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEytyMIVeeIibTKd0kBUntuLbWhdBzCjyF4ZaW7KHM1B3ibs6qIDfib05Txj0JNrwsAfcLDd4uNKXaQCrjpbZzjibaicLzYsRqaxQmFiciaw/640?wx_fmt=svg&from=appmsg)是代数重数。

而最小多项式写作

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznvK8ttRJqFqP0M6pkMoRURHdfZAvt411dJ4NFHGmLJ5HGLPe1k5hdunTno6MqG2ZgouQOvIzEAyttJ7iceQMDIYibpqdcEzMoJ8A/640?wx_fmt=svg&from=appmsg)

其中![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4MCbaRg8LCGXPIbGwuibDMldnXUYe2BtvfabKobdvbib3nPmjzrK4HcMzQ9cEfeZ6xexO0C0y2xTOvu6ia6zBOhIiceK55icF2GO4vw/640?wx_fmt=svg&from=appmsg)，并且![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCra5kHySLHultiatiabhPN2Kge3pIYy2uGfpDRKibQIjjibEUL4ibv1XsYl5XoMRe4iaMFQoibVEYUAMTuUORN1wNgbic3FVdlFJ1Pn21ZDQ/640?wx_fmt=svg&from=appmsg)是该特征值对应最大 Jordan 块大小。

所以一定有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiafxzwnxBDWUzPPeiafM9qY1qTjoWHVkkoaBascMvRIXswsMmLZNVV4yibdiaFoQCO6AIdYpYic6kdK8pNEGV4ALnyPJdOcs1hKPYibQ/640?wx_fmt=svg&from=appmsg)

* * *

## 10\. 二者各自回答什么问题？

这是最实用的区分方式。

### 特征多项式回答：

**“矩阵有哪些特征值？”**

因为解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwlfwGyBJ9jSyEKTznrlRKmVXbAiblwC0z0EBgfSwm38WAvKIDcDUrZHuDYricpp0Nk0CjWibtn480EDWgWR6M9bNmwbBJoKWJ01FQ/640?wx_fmt=svg&from=appmsg)

就得到特征值。

* * *

### 最小多项式回答：

**“矩阵的幂次关系最短能压缩到什么程度？”**

比如若

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3Zl4kJouBCb3x3l7yKJDb9RLAdJXw5niado8oIrav9ZjqYl0dyfNBT9t5icFiajNSBtC24rdNOaL8lRiaQOibQiaEvlicfW8deRLicbxbqNw/640?wx_fmt=svg&from=appmsg)

那就说明

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVarQwRZx0phIOQhH9Pib32R4IsLggSuEVgwzFq8ZXKTTUaEfRPsSsUDamUOqJjrX1ibFkAADFWknrFGA1icCdOPsEf19iaxu9ArW2zg/640?wx_fmt=svg&from=appmsg)

于是所有更高次幂都能立刻降到![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb776YyibfmtD6UxMftfnATosYBcX7ojVrlujIl4UruuAIDb5kYtUJHViaUhPGh34Pz1mpJUe4nxsnqQBG4aTnicEvDpvuOaADiac2AzQ/640?wx_fmt=svg&from=appmsg)的线性组合。

所以在“降幂”“求矩阵函数”方面，最小多项式往往比特征多项式更直接、更高效。

* * *

## 11\. 一个非常重要的判别：可对角化

最小多项式还能判断矩阵是否可对角化。

结论是：

> **矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zuic30cZvxCGQhRNiaTpf3RpfJnF5IfibkvVOf3IewEmG4KEbnl4icmzFoozJibufibX2kuay5icjEsfP2wkxdSCQG7h4bI4D29ENdnjojDicspWMoA/640?wx_fmt=svg&from=appmsg) 可对角化，当且仅当它的最小多项式没有重根。**

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2uy1K5bZ2g33htviayClnic59cImmPg5BMllKicZzGzx78cTB3onnWxILRNoct6Qv8GzJj6Eamlf3bJxXPvJ5nd1M74OZLMQltVibg/640?wx_fmt=svg&from=appmsg)

每个因子都只出现一次。

例如：

### 可对角化例子

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4hCAAOiarqIz75gDYmRCjICpuITalJe4BwwGA3RYOtHsNJejOg8ud9PQgvUpXFRueRKsR4ZGVNALOTjLhaTtruDlmPU5Hjsw8pHM8qcYDgr7w/640?wx_fmt=svg&from=appmsg)

最小多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7IiaNHib7icO6nosJHK5uSqgke9cYS7qWiaIaJd8dEa5LMozgoiclkcwKW9TIZ3CReoNNUOUsPiaBUXavz8pVnygh2IGFyYVU0G1CuFQ/640?wx_fmt=svg&from=appmsg)

没有重根，所以可对角化。

### 不可对角化例子

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgiaQ8oDTA7TBTHohj8YfsClW7g5aNWic0XX9d98yJ8tRPtwhxz7EBuJC6LIjOuD5Xf1wibGY7lkHNsmibHjs83IfXK7BfOLq4dkIwg/640?wx_fmt=svg&from=appmsg)

最小多项式是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHySYLu0GLsT1oZbMqibeLBfkALX030pJOzxLicnppN6qm5XlMibIu7XaGVgib2QNXx0Yc2UBaiaVEnuSpPI9HweGAr0DeJich6JY6rAhg/640?wx_fmt=svg&from=appmsg)

有重根，所以不可对角化。

* * *

## 12\. 从“作用”的角度理解二者差别

你可以把矩阵看成一个线性变换。

-   **特征多项式**
    
    像是在统计：这个变换有哪些“固有拉伸倍率”（特征值）
    
-   **最小多项式**
    
    像是在揭示：这个变换内部最深的“耦合链”有多长
    

若一个矩阵已经完全能分解成互不干扰的特征方向，那么最小多项式往往没有重根。  
若某个方向上还带着“拖尾”“串联”的 Jordan 链，那么最小多项式就会出现更高次幂。

* * *

## 13\. 回到 Cayley–Hamilton：它在这里扮演什么角色？

Cayley–Hamilton 的作用是：

> 先保证“特征多项式一定能消掉矩阵”。

这像是给你一张“保底通行证”：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEDCHqmU8OcFico1yyCR5Jh9jrow34Qvz6YVsXdj9fH8CEuNO4l0sJ3d3745ygX0oOicHOaZjUds9icpibDWatXebnJbZNGNmSl9Qwg/640?wx_fmt=svg&from=appmsg)

然后最小多项式再进一步告诉你：

> 其实真正最精炼、最本质的那个关系，是![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDItx5MjW2vHHwPoEZlzibLXicm223UkJz6l6ClqadCNmGyPALqxV9UjsGknKOCicY5Wu8aY7552InqfxiakytqUoFicP9VweZDTMqTSw/640?wx_fmt=svg&from=appmsg)

所以逻辑顺序是：

1.  先由 Cayley–Hamilton 知道：至少有一个多项式能消掉A  
    
2.  再从所有这类多项式里，挑出次数最小的那个
    
3.  这个最小的，就是最小多项式
    

* * *

## 14\. 一张对照表

对象

记号

作用

特征多项式

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHLiaiawuVf82gABLvuicrJrdZl0xSnVEDYicKpvBZC954LgRPP3lKdpiagN5D3yyWlEPbtbe2nUYoUM3icC6AiaKa3DU0vOgUgv9dOSWg/640?wx_fmt=svg&from=appmsg)

给出特征值；由 Cayley–Hamilton 知![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSQdiatrxa9hTbNSjumkKibRRj5vc3NNXMtnMf7uoxCDZ8LMAjgK9ty2qz86cS5ptpPiatfRhFk2zHb0jl3mHEqnVfiay0fLcMEd4VA/640?wx_fmt=svg&from=appmsg)

最小多项式

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM63o99F99ufSMMqVhCxlCh1Xjwe2Qmls3nb5ibWFn9Jmf9MawIPDqFPIWsTQlCRS6QicuiaSoDoCt3h65pTMwZsGo2XzxgS29Hqf4eqiascqcicdSw/640?wx_fmt=svg&from=appmsg)

次数最小的消去多项式；控制降幂、Jordan 结构、可对角化

并且总有：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgocHOrL4HRFjfkqibfjJcjkQpI5IWTHvMib5YpaHYwWASdXFCHMa7X8AU2GMIF8TH8ob3NjuPib9YI2VtKaaDbOg0mM5BvlIGIrWg/640?wx_fmt=svg&from=appmsg)

* * *

## 15\. 最后一段，把核心吃透

你可以把它们记成这样：

-   **特征多项式：  
    “矩阵从频谱上看长什么样”**
-   **最小多项式：  
    “矩阵从代数约束上看，最短 obey 哪条关系”**
-   **Cayley–Hamilton 定理：  
    “特征多项式这条关系，一定成立”**

所以三者的关系是一条链：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpZgopFAUjv9ptBzokqRm9h7w3CHEZ2HF2YJOvt7TD9K6iaCVvSiaIKiak6ks7oicNKJlrQyfZhSLg3lrEicmbTUDNnibPQFWg17u3dhQ/640?wx_fmt=svg&from=appmsg)