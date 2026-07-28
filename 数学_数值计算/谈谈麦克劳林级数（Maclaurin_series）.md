# 谈谈麦克劳林级数（Maclaurin series）


> 原文地址: [https://mp.weixin.qq.com/s/t\_CVBP-LO-6eQ2sxN9UoCQ](https://mp.weixin.qq.com/s/t_CVBP-LO-6eQ2sxN9UoCQ)

## 1）麦克劳林级数到底是什么？     

麦克劳林级数（Maclaurin series）其实是泰勒级数的一个特殊版本。记得我们之前聊的泰勒公式吗？它是在任意点 a 附近展开函数，而麦克劳林级数就是把 a 设置为 0 的情况。简单说，它用多项式来近似函数在 x=0 附近的形状，就像用直线、抛物线一步步逼近曲线，但起点固定在原点。

为什么叫麦克劳林？因为它是由苏格兰数学家科林·麦克劳林在18世纪推广的，但其实牛顿和泰勒早就有类似想法。它特别适合那些在0点附近“对称”或容易计算导数的函数，比如三角函数、指数函数。

公式长这样： 

![$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots + \frac{f^{(n)}(0)}{n!}x^n + \cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkIZZLhvjU7VGUz6mEjMf1l3mE9FeMAhebOH3fKeoMTwriaBOicWNZCL5g/640?wx_fmt=png&from=appmsg)

这里的![f^{(n)}(0)](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkBfH87ib06zB1Nd36SswybTwDCHanpMFI7C6YCctGiaBxLNtlJWSKTAyQ/640?wx_fmt=png&from=appmsg) 是函数在0点的 n 阶导数，! 是阶乘（比如 3! = 6）。

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
    
-   ![\frac{d}{dx}(x^3)=3x^2](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkB57xanh7Mc3GJ46twSdsxB9CUZ9PfzXAqNdJzFCHuF3Lr95SErkFcQ/640?wx_fmt=png&from=appmsg)
    
-     
    
-   ![\frac{d^2}{dx^2}(x^3)=3\cdot 2 x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkAfHWrfMAiaAicYTgz0pWPPvGxntc9SdoqnT0lkT8VeeicG04aPj42R4Pg/640?wx_fmt=png&from=appmsg)
    
-     
    
-   ![\frac{d^3}{dx^3}(x^3)=3\cdot 2\cdot 1=3](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk53MfWib6SMJicyKwBM1r9jngS9nbdHaxkRWe3RCnWnG2adIYBpT0hnTQ/640?wx_fmt=png&from=appmsg)
    

所以为了让“第 n 阶导数在 0 点”刚好对齐，就必须用 ![\frac{1}{n!}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkEx9dUJhPibmDicZObe2YGTPtJdgHL6XQmQibRL3cVGQxkTTz2GjibK2H6A/640?wx_fmt=png&from=appmsg) 来抵消这种阶乘增长。

![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkDiatcoQgrRJyzs121wibSXMRTUq3diaaX1UVPVBmyZRz6YmpVm1E7Eo0Q/640?wx_fmt=png&from=appmsg)  
编辑

## 3）图里每一行在说什么？

### (1) ![$e^x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkHQp8jk8AwCiasKOSnBANNbcbZTlEibNIgkfNciciagvPpbQMnHlPLdO0DA/640?wx_fmt=png&from=appmsg) 

![$e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkP0X6JfzvhU1KluJgRNS4pEeHkIcU6FVNiaKc31BjaTV776RO6pUJsBg/640?wx_fmt=png&from=appmsg)

直觉：![$e^x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkHQp8jk8AwCiasKOSnBANNbcbZTlEibNIgkfNciciagvPpbQMnHlPLdO0DA/640?wx_fmt=png&from=appmsg) 的所有阶导数都还是 ![$e^x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkHQp8jk8AwCiasKOSnBANNbcbZTlEibNIgkfNciciagvPpbQMnHlPLdO0DA/640?wx_fmt=png&from=appmsg)，所以在 0 点：

![$e^0=1,\quad (e^x)'|_{0}=1,\quad (e^x)''|_{0}=1,\ldots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkODcGmed30N2EM2nOuD9p3ibF4SoT1hRUV44ibNRX8LEq2ibaRXzrfibIXQ/640?wx_fmt=png&from=appmsg)

于是每一项系数都很“整齐”。

* * *

### (2) sin⁡x

![$\sin x=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k+1}}{(2k+1)!} =x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkZSib7CuX7qxoKEzIjcHECKiaJvcIsUheoibcMC91lbAibmLE4ictdNic9Odw/640?wx_fmt=png&from=appmsg)

特点：

-   只有**奇次幂**（因为 sin⁡ 是奇函数）
    
-   正负号交替（对应 sin⁡,cos⁡,−sin⁡,−cos⁡ 的导数循环）
    

* * *

### (3) cos⁡x

![$\cos x=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k}}{(2k)!} =1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkKBibyyiahQ0eItsrlQIFnc4s0gMkxezq8ldJO5k0syX1ib2eDkybYS1Dg/640?wx_fmt=png&from=appmsg)

特点：

-   只有**偶次幂**（因为 cos⁡ 是偶函数）
    
-   正负号交替
    

* * *

### (4) ![\frac{1}{1-x}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkLD7GSnRfrNmibbjynVHeKrPXI8lcBEpLEiclfiaatfFSgENQpmqPCyahw/640?wx_fmt=png&from=appmsg)（几何级数）

![$\frac{1}{1-x}=\sum_{k=0}^{\infty}x^k=1+x+x^2+x^3+\cdots \quad (\text{if }-1<x<1)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkp5TCZVWnPJcRkYJDln57yga8gVtDn2LBJz4mUVQ4neCnHibBIhLagkg/640?wx_fmt=png&from=appmsg)

这行非常重要：它告诉你**不是所有“无穷展开”对所有 xxx 都成立**。  
这里必须 ∣x∣<1，否则右边发散（越加越大）。

* * *

### (5) ln⁡(1+x)

![$\ln(1+x)=\sum_{k=1}^{\infty}(-1)^{k+1}\frac{x^k}{k} =x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots \quad (\text{if }-1<x\le 1)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkfR2BxwYJktIlZoGV1A1NU38Ky6wdea9iaiaaBrlN78ziadR7pibMx4m3gg/640?wx_fmt=png&from=appmsg)

特点：

-   幂次从 ![x^1](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkNUQdgic7Gt1GNbjZw3bnTHf3vBGRRic0Fm2rkdrY1lbdEnPKAQ6EJnfA/640?wx_fmt=png&from=appmsg) 开始（因为 ln⁡(1+0)=0）
    
-   系数是 ![1,\frac12,\frac13,\frac14,\ldots](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkpDdxCys0dhr2ibb2LqYOoTut9rWPPOdTCaW6J039MYic4DqyYVYda1gw/640?wx_fmt=png&from=appmsg)（很有辨识度）
    
-   收敛区间写在图右侧：−1<x≤1
    

* * *

## 4）它有什么用？（最直观的用法）

**用前几项就能近似计算**（在 x=0 附近尤其好用）：

-   sin⁡x≈x（当 x 很小时）
    
-   ![\cos x \approx 1-\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkOgianltsTzfibNNRic7mxcEsDXqQicVWRhvTP3YAmAS7iaN7WKc9WibMKMDw/640?wx_fmt=png&from=appmsg)
    
-   ![e^x \approx 1+x+\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkX2qS96QubUqwOh6BlrUib1B3adqOyicsf0flKGRlksHK4x26LJc4Mmbg/640?wx_fmt=png&from=appmsg)
    
-   ![\ln(1+x)\approx x-\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk1yoXEVaOe03b751O7kheLiaVSfwUfXB38P2j7DhLeVicrMl2iatwhycbA/640?wx_fmt=png&from=appmsg)
    

所以很多“近似公式”“物理里的小角度近似”“算法里的快速估计”本质上都在用麦克劳林级数截断后的多项式。

* * *

## 5）一个很关键的提醒：它只在“合适的范围”靠谱

-   麦克劳林级数是**在 0 附近**逼近函数：离 0 越近，通常越准（当然也看函数性质）。
    
-   像 ![\frac{1}{1-x}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkLD7GSnRfrNmibbjynVHeKrPXI8lcBEpLEiclfiaatfFSgENQpmqPCyahw/640?wx_fmt=png&from=appmsg)、![\ln(1+x)](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkf0ibAHK1MXT9TGTFKsfnHzft7icZkC1eAImRia45huJ3N2hdwGOHMjKyA/640?wx_fmt=png&from=appmsg) 这种，**还有严格的收敛区间**（图里已经标出来了）。
    

### sin(x) 的麦克劳林级数推导详解

我们来一步一步慢慢拆解推导过程。咱们从基础开始，不跳步，用通俗语言解释。麦克劳林级数本质上是“用导数信息从原点重建函数”。对于 sin(x)，它特别简单，因为导数有周期性（sin → cos → -sin → -cos → sin...），值在 x=0 时容易算。

#### 第一步：回忆麦克劳林级数的通用公式

**麦克劳林级数是泰勒级数在点 a=0 的特殊形式**。基本想法：任何“光滑”（无限可导）的函数 f(x) 都可以用无限多项式表示： 

![$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkptdqqzOo3YReCeDt3U2iaMia3ggLibzFtaz74LCh1hqmaG0aCwTcExB5g/640?wx_fmt=png&from=appmsg)

这里：

-   ![$f^{(n)}(0)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkBfH87ib06zB1Nd36SswybTwDCHanpMFI7C6YCctGiaBxLNtlJWSKTAyQ/640?wx_fmt=png&from=appmsg)
    
     是 f(x) 的 n 阶导数在 x=0 的值。
    
-   n! 是 n 的阶乘（0! = 1, 1! = 1, 2! = 2, 3! = 6, 等）。
    
-   ∑ 表示从 n=0 到无穷的求和。
    

为什么这样？因为每个项捕捉了函数在原点的“变化层级”：0阶是高度，1阶是斜率，2阶是曲率，等等。这基于泰勒定理（证明涉及积分余项，但我们先不深挖）。

现在，f(x) = sin(x)，咱们来计算每个 ![$f^{(n)}(0)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkBfH87ib06zB1Nd36SswybTwDCHanpMFI7C6YCctGiaBxLNtlJWSKTAyQ/640?wx_fmt=png&from=appmsg)，然后代入。

#### 第二步：计算 sin(x) 的各阶导数

sin(x) 的导数有规律，像个循环：每4阶重复一次，但符号翻转。我们一步步求：

**0阶导数**（就是函数本身）：

![$f(x) = \sin(x)\Rightarrow f(0) = \sin(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkoQeMMPNibI2olpwMmsiaEJicsKqiaHsmzNycqjLVVzZrrcz0LIibV4r2dCQ/640?wx_fmt=png&from=appmsg)

**1阶导数**： 

![$f'(x) = \cos(x)\Rightarrow f'(0) = \cos(0) = 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkLJibPnrht8htVziapQJtibOf7mOgickSXkfceibnyWEyo0fCic4icAwhZKuBw/640?wx_fmt=png&from=appmsg)

**2阶导数**：

 ![$f''(x) = -\sin(x)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkzt9vA6t74icc5u9msoEVw7AZ58MLhQNh8pJ098TLUxIQJAUS4icdYmibQ/640?wx_fmt=png&from=appmsg) （因为 cos(x) 的导数是 -sin(x)）

![$f''(0) = -\sin(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkCuTaN1YrnjcxyxwoaFicsbfBibPy5fGvpCnh8iaOjS5wvOQgKmlaOHUeA/640?wx_fmt=png&from=appmsg)

**3阶导数**： 

 ![$f'''(x) = -\cos(x)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkTrianlTDZmicOJQhcgbE6QLU94Lakput4tQdIqSpRVB8bG2NyicScaovQ/640?wx_fmt=png&from=appmsg) （-sin(x) 的导数是 -cos(x)）

![$f'''(0) = -\cos(0) = -1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk5PCKYcQCyx9ZVLiaRRuRLrh9MHYZaDTcZB5trULffjlpLHB2nceqvQw/640?wx_fmt=png&from=appmsg)

**4阶导数**：

 ![$f^{(4)}(x) = \sin(x)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkYzndk7E4qgVNLxHDNotxia8Ogh154KnBzUtqbmic6iblJVsv5WSSttzIg/640?wx_fmt=png&from=appmsg) （-cos(x) 的导数是 sin(x)）

 ![$f^{(4)}(0) = \sin(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk9JibjmC9siaHbFQN7NMfe4bfA2l6P6DFQqRUdGmHlnzv5tYX7e5kzFow/640?wx_fmt=png&from=appmsg) （注意，这里回到了 sin(x)，循环开始了）

**5阶导数**：

![$f^{(5)}(x) = \cos(x)\Rightarrow f^{(5)}(0) = 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkgkaOYWRDViaxQWEMKtbOcGbubUkf8aiaAaRdjYdH6JjV7tGO5WlDG1GQ/640?wx_fmt=png&from=appmsg)

**6阶导数**：

![$f^{(6)}(x) = -\sin(x)\Rightarrow f^{(6)}(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkHNBIXbohluogZBhQcfQJTkDBUDxLTA2NKSQb2XvdVs6N13eHb8uMnQ/640?wx_fmt=png&from=appmsg)

**7阶导数**：

![$f^{(7)}(x) = -\cos(x)\Rightarrow f^{(7)}(0) = -1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkAKXwgzHJInVwKyIYC7Fz7iaS8QuSCdzc5UA4hrx52tYLGrUqzv0Egibg/640?wx_fmt=png&from=appmsg)

你看出来模式了吗？导数值在 x=0 只在奇数阶（n=1,3,5,7,...）非零：1, -1, 1, -1,... 交替符号。偶数阶（n=0,2,4,6,...）全为0。

更精确地说，对于 n = 2k (偶数)， ![$f^{(2k)}(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkfhSUYoEA1CFYurB4VVmrVywlpmWjnOVoe6k6SBHr100RDXRMOC8Fibw/640?wx_fmt=png&from=appmsg) 

对于 n = 2k+1 (奇数)， ![$f^{(2k+1)}(0) = (-1)^k$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkVUA0VPnoaF4umW4T1yQAVXd1HZPU0pficXwThWwoBg0K9OVC9eMfzCA/640?wx_fmt=png&from=appmsg) （k从0开始：1, -1, 1, -1...）

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

现在，把这些值塞进公式。每项是 ![\frac{f^{(n)}(0)}{n!} x^n](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkicSe3nkuibdmyGHo9FSm78a8YXAfGEEjbDfBKiauQAhF0ibZKY0Tr9HOOQ/640?wx_fmt=png&from=appmsg) 

-   n=0: ![\frac{0}{0!} x^0 = 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkWxYeIhJCb3k9n1WrnG3kRJk1NLWt4HD3YTIY4mOT5TewJtA7Cic2eXA/640?wx_fmt=png&from=appmsg) （忽略）
    
-   n=1: ![\frac{1}{1!} x^1 = x](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk7wcDv9bUTW4aghZPvdsyDCIOslXk4FTNlVnVEm6nCTRNjbicKOlKlyw/640?wx_fmt=png&from=appmsg) 
    
-   n=2: ![\frac{0}{2!} x^2 = 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkBDBVibibfdlCrOLibLAdRSo7JG3S5W8biaywMfwgPkhMicZJwWibhLwlEtYg/640?wx_fmt=png&from=appmsg) 
    
-   n=3: ![\frac{-1}{3!} x^3 = -\frac{x^3}{6}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkMcQHHuSfnsUQJNecFotdnO7c5HCUAlW9vFZ0dyMbRbcHleycKk784Q/640?wx_fmt=png&from=appmsg) 
    
-   n=4: 0
    
-   n=5: ![\frac{1}{5!} x^5 = \frac{x^5}{120}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk1hL9TdLI63YgegcevZju1mqDRf2wibXcgznu9sjNYib0Wvmo5SdY0qicg/640?wx_fmt=png&from=appmsg) 
    
-   n=6: 0
    
-   n=7: ![\frac{-1}{7!} x^7 = -\frac{x^7}{5040}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkPztSGdbickyiaRlLvdoq1zfO5KOlia74b2XH3stLuctTCz8r1UnJFJeeg/640?wx_fmt=png&from=appmsg) 
    
-   以此类推...
    

所以，只剩奇数项：

![$\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \frac{x^9}{9!} - \cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkicUHYBRts9VAib3ic6djNkWSOep2Je4hPq9mNhDic2Vw5icMU8HtKyicPURQ/640?wx_fmt=png&from=appmsg)

通用形式：

![$\sin(x) = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkSsDu3qLianEm7jVJTq0QpscOYKLd2qXF57CM9Jc0IsWhWAy4N761W2g/640?wx_fmt=png&from=appmsg)

这里的 k 是计数器（k=0: x/1!, k=1: ![-\frac{x^3}{3!}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkia0R2u6ekWTfFEBHcRHWVdavdfm7KyKns8tQe3ARC7eOMzsCGr84yQw/640?wx_fmt=png&from=appmsg), k=2: ![+\frac{x^5}{5!}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkiakkgKLeK3Db1s59Tsu4M2O2dmlJVc7GC5S8nmLR1Bnp97KrRhrkPIg/640?wx_fmt=png&from=appmsg), 等）。

#### 第四步：为什么这样就对了？（验证和收敛）

这不是随意编的——它是精确的，因为 sin(x) 是“解析函数”，级数在所有实数 x 上收敛到 sin(x)。你可以用计算器验证：比如 x= π/6 ≈0.5236，sin(0.5236)≈0.5

-   只用第一项：x≈0.5236
    
-   加第三项：0.5236 - (0.5236)^3 /6 ≈0.5236 - 0.0238≈0.4998 （超准！） 更高项误差更小。
    

如果 x 很大，需更多项，但总是收敛。

### cos(x) 的麦克劳林级数推导详解

咱们继续用 sin(x) 那种一步一步的慢节奏方式，来推导 cos(x) 的麦克劳林级数。cos(x) 和 sin(x) 其实是“亲兄弟”，导数关系很紧密：cos(x) 的导数就是 -sin(x)，而 sin(x) 的导数是 cos(x)。所以推导过程会很相似，但符号和零项的位置不一样。

#### 第一步：麦克劳林级数通用公式（回顾）

![f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkqUqRmunsyJ9Ntr3jVNr89nWhNSyaOUtY9k3dlxtCCHIE24jYt81NMw/640?wx_fmt=png&from=appmsg)

f(x) = cos(x)，我们需要计算 cos(x) 在 x=0 处的每一阶导数。

#### 第二步：计算 cos(x) 的各阶导数

cos(x) 的导数也有周期性循环，每4阶重复一次，但符号变化。一步步来：

**0阶导数**（函数本身）： 

![$f(x) = \cos(x)\Rightarrow f(0) = \cos(0) = 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkB2v2PaMDUw5P3fPvicUWw5HhedhVYCAwemEogdtTneiaooDLkqXFUmicQ/640?wx_fmt=png&from=appmsg)

**1阶导数**：

![$f'(x) = -\sin(x)\Rightarrow f'(0) = -\sin(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkRCZaOG3KfIXvvay8pM9N0fIkFNCeu3OgfLr5lpkgTagkHcuZTzVKcg/640?wx_fmt=png&from=appmsg)

**2阶导数**：

![$f''(x) = -\cos(x)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk0kXcM7I2RVqSJPOS39uC7bP85eh6tgz5IBib353vTqQ9WzavB0lh57w/640?wx_fmt=png&from=appmsg)（-sin(x) 的导数是 -cos(x)）

![$f''(0) = -\cos(0) = -1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkIVKNVHWSdMibeeoqXfnVic52feGwL3YQ8N4N43mfDjtRs1aAicnA332hg/640?wx_fmt=png&from=appmsg)

**3阶导数**：

![$f'''(x) = \sin(x)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkq90eNcew30aRo8jtb66ricbTe9LTo935x5VoCoDohZU5YaQbwT03t6A/640?wx_fmt=png&from=appmsg)（-cos(x) 的导数是 sin(x)）

![$f'''(0) = \sin(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkCialnibWpwvgwfD4HlNa7bdFnHu7wwZV3ib1bmEvlul00vIwk4LukRicQA/640?wx_fmt=png&from=appmsg)

**4阶导数**：

 ![$f^{(4)}(x) = \cos(x)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkhKLyAMuh5Ea5sgGIEfEOVkpUm5S6MKGDiavfwjV1QZegfhSEhicXchtA/640?wx_fmt=png&from=appmsg) （sin(x) 的导数是 cos(x)）

![$f^{(4)}(0) = \cos(0) = 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkgicibEXaqAQVvSicZmtdXgLpt8vN2gwEEBX7SgaSNKasPfxm9cDnnlRibQ/640?wx_fmt=png&from=appmsg)

**5阶导数**：

![$f^{(5)}(x) = -\sin(x)\Rightarrow f^{(5)}(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkMJfr6IQB1StWvwpLek2kx1F57UJgpGUwL8gobib9iaiatbX9MicKFn66NA/640?wx_fmt=png&from=appmsg)

**6阶导数**：

![$f^{(6)}(x) = -\cos(x)\Rightarrow f^{(6)}(0) = -1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk8oB40QsjiaEFGeowpZaaPTR1GeTCKbSiaasCiau3mO1icRjM1bqWWgZzsg/640?wx_fmt=png&from=appmsg)

**7阶导数**：

![$f^{(7)}(x) = \sin(x)\Rightarrow f^{(7)}(0) = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkWHteptW2DL3AR0K0bC2DvtW1NFPibnWuVTyHic2cqGicRy2ib0SdqPibDEw/640?wx_fmt=png&from=appmsg)

你会发现：

  

-   **偶数阶**
    
    （n=0,2,4,6,...）非零：1, -1, 1, -1,... 交替符号。
    
      
    
-   **奇数阶**
    
    （n=1,3,5,7,...）全为0。
    

更精确地说，对于 n = 2k（偶数）：

 ![$f^{(2k)}(0) = (-1)^k$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkPVMuxSUz9d5ibcJlVic2w1dk60HQu7icticRdENSHkNtucDr2pezic2V7nQ/640?wx_fmt=png&from=appmsg) （k从0开始：1, -1, 1, -1...）

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

-   n=0: ![\frac{1}{0!} x^0 = 1](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkFJibBCew64oiajkvr9kePkmHibGyjVu9ibicRnnFuUoeK3zeibAn7xXWlKtg/640?wx_fmt=png&from=appmsg) 
    
-   n=1: ![\frac{0}{1!} x^1 = 0](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkMlGgGOU53z1EwhiaWaCicJ9KXcXDYuxyHicPVDTMDicZRcbeVyIiczkTbQw/640?wx_fmt=png&from=appmsg) 
    
-   n=2: ![\frac{-1}{2!} x^2 = -\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk0GIgHoNib1TNzRztDDEUuZxgtFOlkxION6xxzk6P6A9OeVShJ1icnCgQ/640?wx_fmt=png&from=appmsg) 
    
-   n=3: 0
    
-   n=4: ![\frac{1}{4!} x^4 = \frac{x^4}{24}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkibfcPkiaYqfMyCiahOMSnRh0ag8W2z2EUOG9TvKubkFrknxguQQp2X0uQ/640?wx_fmt=png&from=appmsg) 
    
-   n=5: 0
    
-   n=6: ![\frac{-1}{6!} x^6 = -\frac{x^6}{720}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkxj69EXO7ncLibHf6iccjRQejZvWziceILPFB77zcvpMoRBjJeyxGF7GKg/640?wx_fmt=png&from=appmsg) 
    
-   n=7: 0
    
-   以此类推...
    

所以，只剩**偶数项**： 

![$\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkrne6icczqvzfuiasK2TGz4FKIsB1SEOKjtBATtuFPHu4QcaesBcDeVEQ/640?wx_fmt=png&from=appmsg)

通用形式： 

![$\cos(x) = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk5wt4M1wnMkgh1rQeFgIFPkaYrzCY96It48kzGibdQx2fBysqe6jTl5Q/640?wx_fmt=png&from=appmsg)

（k=0: 1, k=1: ![-\frac{x^2}{2!}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk3sama9wl6bIibUJpRnca42Io3c6UicpUI9dHibO2Uawz4mNkzerxzBxxA/640?wx_fmt=png&from=appmsg), k=2: ![+\frac{x^4}{4!}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk8jj470jrs0ZTzbJMarYicfvZiauv0uFzexDBKEibFNvFaplPpdUycqWXw/640?wx_fmt=png&from=appmsg), 等）

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

![$\cos x = 1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkHibAX0K9GYjib7zpkYXsUMl0fU4qOh8GQHibKQUUt97prCIVvhJnw6S4Q/640?wx_fmt=png&from=appmsg)

先把幂次算出来（x=0.1）：

-   ![$x^2=0.01$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk8IibZ9ib1IjEW38XxbT32ovSnK0Gy9rEaQbWCD3sg2CbNIDw53STkp7Q/640?wx_fmt=png&from=appmsg)
    
-   ![$x^4=0.0001$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkvSotdTiapgF9jd8m4hINZoCbIONBxxbdMFTbgQbZpfVg3vmG8AL5JRA/640?wx_fmt=png&from=appmsg)
    
-   ![$x^6=0.000001=10^{-6}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkl4HxvItm4rYybLvyw88XmMYe3vVk55rzePicG9JQk3ENkp2cY3LptZQ/640?wx_fmt=png&from=appmsg)
    

阶乘：

-   2!=2
    
-   4!=24
    
-   6!=720
    

* * *

## 用前 2 项（到 ![$x^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkJOobxjFrpsxHUw0QsMh6vcqXYLPiaLp2Zu8Wy1F2Ogiarkr4iax7hdKHA/640?wx_fmt=png&from=appmsg)）

![$\cos(0.1)\approx 1-\frac{0.01}{2}=1-0.005=0.995$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkQRoDmibjzgRGEayUmp2KudbTrvDQiaKYnk4icI13XSI2SfscdCpw8Nk8A/640?wx_fmt=png&from=appmsg)

误差大概：![$-4.17\times 10^{-6}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkCxAaV1DTtqpbhFKJcpO8WDT5weNmbrlcGy8JNB2gice0MDXibIe2AzdA/640?wx_fmt=png&from=appmsg)（约少了 0.00000417）

* * *

## 用前 3 项（到 ![$x^4$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkNQrH6QVfOQxahGunOOwdXuLef1tfV8LaqG3WYRZDncOn9y5LNA7MQg/640?wx_fmt=png&from=appmsg)）

![$\cos(0.1)\approx 1-\frac{0.01}{2}+\frac{0.0001}{24} =0.995+\;0.0000041666667 =0.9950041666667$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjklcictQRWSV6EZA2zqjHia596P1jWx4blGWVdcFy9ibo8u5cyl9owyj22w/640?wx_fmt=png&from=appmsg)

误差大概：![$1.39\times 10^{-9}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjke6jBxJjh7A9vVINUpYIhMicojeTaQ5Bibgun8q6xicOHVNVU9YW5232pg/640?wx_fmt=png&from=appmsg)（已经非常小）

* * *

## 用前 4 项（到 ![$x^6$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk7bjRqdI4Bed5uEzoq4fNBJElUAfStLsfYR7QOmLsuUiazQLURwcPKTg/640?wx_fmt=png&from=appmsg)）

![$\cos(0.1)\approx 0.9950041666667-\frac{0.000001}{720} =0.9950041666667-0.0000000013888889 =0.9950041652778$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkYM2MJrCe59DLtGZ7oGsrRHDM3uiaWm3r6jGkZ9f3cFfu2c3A9zz9m0A/640?wx_fmt=png&from=appmsg)

误差大概：![$-2.48\times 10^{-13}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk3yuqjChFK4Vvtjib3AFjbULXboUv8tc0Yq695TtgdYxxs4N5vUgiadBA/640?wx_fmt=png&from=appmsg)（几乎等于精确值）

* * *

## 对比“真值”

计算器（高精度）：

![$\cos(0.1)=0.9950041652780258$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkpoclYuSSbH8R7XUOJ21tquluica6avNLfOicoKjwgEhAMFgoaoicrXYqg/640?wx_fmt=png&from=appmsg)

可以看到：**x=0.1 很小，cos⁡x 用到 ![$x^4$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkNQrH6QVfOQxahGunOOwdXuLef1tfV8LaqG3WYRZDncOn9y5LNA7MQg/640?wx_fmt=png&from=appmsg)就已经准到小数点后 9 位左右了**。

  

下面用 x=0.1（弧度）把“为什么常用 ![\cos x\approx 1-\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkOgianltsTzfibNNRic7mxcEsDXqQicVWRhvTP3YAmAS7iaN7WKc9WibMKMDw/640?wx_fmt=png&from=appmsg)”**和**误差怎么估讲透：

* * *

## 1）小角度近似从哪来？

![$\cos x = 1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkHibAX0K9GYjib7zpkYXsUMl0fU4qOh8GQHibKQUUt97prCIVvhJnw6S4Q/640?wx_fmt=png&from=appmsg)

当 x 很小时，![x^2, x^4, x^6](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjk59xWRWfoGlbkJpZ3FB2MsPYnsCf2BfhuP4OLafpAS7RX9tfp6RwDCg/640?wx_fmt=png&from=appmsg) 会迅速变小。  
所以最主要的变化先由前两项决定：

![\cos x \approx 1-\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkOgianltsTzfibNNRic7mxcEsDXqQicVWRhvTP3YAmAS7iaN7WKc9WibMKMDw/640?wx_fmt=png&from=appmsg)

这就是常见的“小角度近似”。

* * *

## 2）误差主要来自“下一项”

如果你只用到 ![1-\frac{x^2}{2}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkvhPm5Qvl2aBYBFtvjgYSszMHwupjVJ4UokwdvibB87DeYBAp3thWAiaA/640?wx_fmt=png&from=appmsg)，那么被你忽略的第一项就是：

![$+\frac{x^4}{24}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkibaMvib2Cmhc1WZG3RicPWibupyFb3ROe7xJqh6MTsxsSaoJibjHggwlyPw/640?wx_fmt=png&from=appmsg)

因此误差的量级大约就是 ![\frac{x^4}{24}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkVCTgxQ7CcEDwyiaQwsFYDianwTqMyqmjOBM6VNZeBI0bcRoQDclic3WDQ/640?wx_fmt=png&from=appmsg)（后面还有更小的项在微调）。

对 x=0.1：

-   ![x^4 = 0.0001](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkSvvLZMWmSGibp0S1MaGut3skJAAykWEzqXoNLhLf3bwhS2eMJ35TZwg/640?wx_fmt=png&from=appmsg)
    
-   ![\frac{x^4}{24}=\frac{0.0001}{24}=0.0000041666667](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkFDoRSmicFgCwJnyqeK3h5NXTvluMzBJkXLaRAoT62sjIxUulMbhYrjA/640?wx_fmt=png&from=appmsg)
    

也就是说：

cos⁡(0.1)≈0.995  但真实值会比它大约 0.00000417

我们之前算过：

-   二项近似：0.9950.9950.995
    
-   真值：0.995004165278...
    

差值：

![$0.995004165278 - 0.995 \approx 0.000004165278$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjknImrJeyrhRJdvzgLk1Pd362SbBm0sA3C4f8emJefibJHEK9dMENgCXw/640?wx_fmt=png&from=appmsg)

和 ![\frac{x^4}{24}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkVCTgxQ7CcEDwyiaQwsFYDianwTqMyqmjOBM6VNZeBI0bcRoQDclic3WDQ/640?wx_fmt=png&from=appmsg)几乎一模一样（因为下一项就是主要误差）。

* * *

## 3）“相对误差”大概多少？

绝对误差约 ![4.17\times 10^{-6}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkhfyvPtAOHpYRNHe4FBe11Nab3IjDaQJooVOdFfB9nPU03Y64qyiaBTw/640?wx_fmt=png&from=appmsg)。  
相对误差大概：

![$\frac{4.17\times 10^{-6}}{0.995}\approx 4.19\times 10^{-6} \approx 0.000419\%$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkiclTic4Z7AQkmGHwH4vuVabXUZMjrT1U4nfHM3eWa4ib5XicYWL2hFwQcw/640?wx_fmt=png&from=appmsg)

也就是 **百万分之 4** 级别，非常小。

* * *

## 4）一个实用记法（工程上常用）

-   用到 ![$x^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkJOobxjFrpsxHUw0QsMh6vcqXYLPiaLp2Zu8Wy1F2Ogiarkr4iax7hdKHA/640?wx_fmt=png&from=appmsg)：误差大概 ![\sim \frac{x^4}{24}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkCkCo5nX00dQPm1xKLGZTts1azN7TMACf0icTO9fu5ysibhyPgeLwpCCQ/640?wx_fmt=png&from=appmsg) 
    
-   用到 ![$x^4$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkNQrH6QVfOQxahGunOOwdXuLef1tfV8LaqG3WYRZDncOn9y5LNA7MQg/640?wx_fmt=png&from=appmsg)：误差大概 ![\sim \frac{x^6}{720}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkiaBkwOtcWKfP2TDayOCvYSx1icrL49IT5hguYmibo8Paw4xkaTHjtctww/640?wx_fmt=png&from=appmsg) 
    

对 x=0.1，![\frac{x^6}{720}=\frac{10^{-6}}{720}\approx 1.39\times 10^{-9}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkFUibGUSib1OSp4mqn4RGQ0icETwXbOrjib68B44Zh9seK3C6JUEBumILYw/640?wx_fmt=png&from=appmsg)，所以加上 ![$x^4$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trvuSWoff0XqOGEZGOlCTjkNQrH6QVfOQxahGunOOwdXuLef1tfV8LaqG3WYRZDncOn9y5LNA7MQg/640?wx_fmt=png&from=appmsg) 那一项后会立刻变得极准。