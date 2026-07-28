# 什么是QR分解


> 原文地址: [https://mp.weixin.qq.com/s/bMFhNbP3AoBazn4fmwVRVw](https://mp.weixin.qq.com/s/bMFhNbP3AoBazn4fmwVRVw)

想象一下你正在整理一个乱七八糟的书架。书架上的书东倒西歪（这就是一个普通的矩阵），而你想把它们整理得**整整齐齐、垂直向上**，并且按**一定的比例**摆放。

在数学中，**QR 分解**就是这种“整理术”。它把任何一个矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJMkf0T6gKdbibgmHBpfQcT7TDEyJicSse1Zhkqz71WDsqgmh2xZCNnKMuFNzRAHWibuKJfF0yNibia7ibFCnlicy85T0BntbE4SrwLWUA/640?wx_fmt=svg&from=appmsg) 拆解成两个更有序的矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaPl5JjXEiaQSWS0rZ4OWWdf8jutNFbBQPicZdaLrFFY4LZOEPWuOduXtDtfZ8Yiab7eOFhibtchV00gNVmc2EVd4icibYTpRia0ibNOQ6g/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7zmBEpRjw3xpGjibiaKVkHsUTk1j8lMicLL4O4psU91jWxPR0ibW8kdwSiaWzmG3T6sPOppmyr4eRY2uWb228PiaGmXDZuk4ibua4vyIiaUnzjSjyFfQ/640?wx_fmt=svg&from=appmsg) 的乘积。

#### 1\. 核心公式：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmTYsnHOgFRocMbAv8IeHgBtLFmSTywmyb1qMKttyLVe3eR4IBDANWicAZPXEGyYvRBU12m1s44bRjVX0osBmNQCHZWCEbG0IZibw/640?wx_fmt=svg&from=appmsg)

-   **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5ChqmkH9eN3EN7SuNzruNcBgyBhfGaTNZGVqpmiaatHIK7UvmIrXvkllib1ZnFjPnF85qCOgibNdf2zIya9Q97IrgVeYjjDriclMrxBQ/640?wx_fmt=svg&from=appmsg)（原始矩阵）：**
    
     你的原始数据，通常是一组“歪歪斜斜”的向量。
    
-   **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxEKJFBK2I1x80u5OpZJanMguVgQicoHK0ZT1BdMostZ15eibSiaeaCL7FWcbx4F87vUSMsl0FhAamaOvG8S4vClHfcg3u5iapYgZlwQ/640?wx_fmt=svg&from=appmsg)（正交矩阵）：**
    
     这是“方向”。它的每一列都是长度为 1 的单位向量，且彼此之间成 90 度垂直（正交）。你可以把它想象成一个标准的坐标系。
    
-   **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0TEyrQQudicBicne3fbT8UlDmWURt0B4iadsKrdjFu1YgVicwXP1pS40wOhkTGbq5IPqjDvkEqJZ8Z7ibLo0tzjWsnhpnyg9088YwGA/640?wx_fmt=svg&from=appmsg)（上三角矩阵）：**
    
     这是“强度”和“组合方式”。它的左下角全是 0。它告诉我们，原始的向量是如何由这些标准的方向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXlmyCQYXuVUH7asNVFmIibdYA06aIltWtPmUEoJbnkmCg4zKKAM111MxzScrUcGDlba1SRyqyHdNkwPCss5JGdRMic1QCj9miaPeA/640?wx_fmt=svg&from=appmsg) 组合而成的。
    

  

#### 2\. 通俗的视觉理解

我们可以把矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0x9Dtso40YUrlbHJN5icZab7jYNzJicDk4AAcvKl6TzEb7nG0JW2QzibiabQzJNYMcfc3ug18QTBchRBp5PuY6TF5q5vfhjojpRlCeg/640?wx_fmt=svg&from=appmsg) 的每一列看作是空间里的几根发散的木棒。

##### 第一步：找垂直（ orthogonalization ）

由于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMIAeg46TKMPUjvu9hRpPNKX87zwkVYutefIia2h2gYRvGtXZ7tlZrEtkSzfibR3sXPW88x0AllD7Qk0tA97XLJkd0pCsMwTFaS3g/640?wx_fmt=svg&from=appmsg) 的木棒方向很乱，我们先取第一根木棒，把它作为基准。然后调整第二根木棒，**砍掉**它在第一根木棒方向上的投影，只留下垂直的部分。

> **结果：** 我们得到了一组彼此垂直的“支架”，这就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm20xGadTTJpJOc9ZickV97yhchMWIg1wX67ts4Rn0cJMxk41vGEke3xLvpH5mdicBbTh1OM23TzKaEzRia5f89eib1h4icHc0yicHibTZZA/640?wx_fmt=svg&from=appmsg) 的雏形。

##### 第二步：标准化（ normalization ）

把这些垂直的木棒全部缩放，使它们的长度都变成 1。

> **结果：** 这一套完美的垂直标准支架就是 **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibPBBD59T4R9mdGX0iaq0iaqXK26Fu3qcZqHe0kFQItMnKVpXcFhVzWXicNBJcHKibdicqnNLXvdSib7qbYQjyHC0Dbk0pUf4Tx1O66bw/640?wx_fmt=svg&from=appmsg)**。

##### 第三步：记录账本

我们需要一个“账本”来记录：原来的木棒是由这些标准支架怎么拼凑回来的？比如：“原木棒 1 = 3 倍的标准支架 1”。

> **结果：** 这个记录比例的账本就是 **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNaWk0TOomSzHVicOoViaBb7DzOD0iaXwfEdjxXzzH8olAqjnY5a1oa9L7cFROxmpOSZicY1B98G5c0LH7KvfmAic9iaHiar3mbibkHgaQw/640?wx_fmt=svg&from=appmsg)**。因为它是有顺序地构建的，所以它呈现出漂亮的“上三角形”。

####   

#### 3\. QR 分解长什么样？

假设我们有一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKaefw6obfAJfXzTRnQfOickOYEFtQlAMUcoXvmqQPRAocm3Sqe3dicRYMib0utwfPrylicrMJfWJBWCiaTIw0jYdgF0BFe9AJqvOe2IA/640?wx_fmt=svg&from=appmsg) 的矩阵：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScFPafwdv36GNSibVaiamSeLYV4vO1rNzFe2D70Xic6H2w35icLHWtGnCrkYbW00TLthicfGljJCGzQWM2hNC5U5h5nPFcYOkHcrnYIw/640?wx_fmt=svg&from=appmsg)

#### 4\. 为什么要费力做这个？

你可能会问：“好端端的矩阵，为什么要拆开？” 答案是：**化繁为简。**

1.  **解方程组：**
    
     直接解 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965TvSlzpMpYURs2GJ8ibbRlVdAhlMgZ0FKkEaNpqNOeiayt7eUaMg7RzmC3sxUibPoHTmTu3GZ9ic5uVibfJjFOzeb5osQtKb86SHRgQ/640?wx_fmt=svg&from=appmsg) 很难。但如果变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJfBVU8VgyNDLk99hsmSz8HEK2Xc6O7InaJjR5rLld6SibUG99ZLIypXGPBY3icD8HiahnT3WVCPXqI1KN98dsibOGAg3WY1AqkJYxg/640?wx_fmt=svg&from=appmsg)，由于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LdVuhauzKk6HsibOLQSfhaAv5zpkianH762tv31uN4yjhrYY5mic8Q9aBs9rqFrXhACicIj1smo5oYz6cXJymjUWXCDIXTbdmJ6iauA/640?wx_fmt=svg&from=appmsg) 的转置就是它的逆，而 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM55V7C7hCRTTjMiaDDiaQKKaBqDy3WrRCkul7zEu9ye94nEd3doTbDcXEgvI9wbC8BRK3T7D65HP3m77WoicJAyb9GibW6tZvjYOJjwJiah8WRHWicQ/640?wx_fmt=svg&from=appmsg) 是三角形，解起来就像剥洋葱一样简单，速度极快。
    
2.  **求特征值：**
    
     著名的 **QR 算法**是计算机计算矩阵特征值的最常用方法。通过不断迭代 QR 分解，矩阵会慢慢变成对角矩阵，特征值就“浮”出来了。
    
3.  **最小二乘法：**
    
     在做数据拟合（比如预测股价走势）时，QR 分解比传统的正规方程更稳定，不容易因为数值太小而产生计算误差。
    

  

#### 5\. 总结

-   **Q 是灵魂：它定义了最纯粹、最标准的方向。**
-   **R 是肉体：它定义了在这些方向上伸展的长度。**

**一句话总结：** QR 分解就是把一个“乱七八糟”的线性系统，翻译成了一套“标准坐标系”和一套“缩放比例”。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/sVzeakRoocuVkRIY8EWvqCn61P2BewLJmiajgyYBp3xOEiasubKdXyDHZmXciaRano491viaIWu3MXwNmiaGfM0TRynrj6KHpBdlT5E4rA6sKHS8/640?wx_fmt=jpeg&from=appmsg)

图1

QR 分解，简单说就是：

把一个矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicahPI6ZicVOJsFWBvQvpbUaoLx8BnA4JKaWP8RNhwiac6hXsEbwMO6ZCiaVKYA9KaTyuJOwTB51HwhPDwFjc6oRgNWQaNMvduqtaw/640?wx_fmt=svg&from=appmsg) 拆成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKXe78vOse1IOcALngdeEWfZ16DSrhT7ZJPH7xZVHw0vdTKFSd1OGPQ4NWTlE1iaoJOQKcnJCgeK09g2rIVvTZ9bw99m1aKJ1bAg/640?wx_fmt=svg&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1Ucld5VewtGNgcheVmUO34NbZgYhFCRXIXicBpibAibRdUpMiaPFRuOUNOn7ZibeWSc9yyEf2nU7U1icQ0QJelDkNm6Ir8We1faLOrkw/640?wx_fmt=svg&from=appmsg)

1\. 先看图里的意思

图里写的是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGHntc4qapa15mlpzk1yiaUSn4WOyPmA7XZZg9VRicC9JfhMdqbj3PnhUTOYSjHTlNic3ibdnXwZmWp694kaTVHjC3BrmyV6SXXjShg/640?wx_fmt=svg&from=appmsg)

并把它画成两部分：

-   左边一堆“互相垂直的竖条”——表示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d68Mhav6gNTZFMAGquicdE6kTjVEHVNC0hvCQTUzoFVbSCdmSeU44vUbicVQk267769vzQTv211icWUyAUnpgH1PuDN5chCCEQj2iaw/640?wx_fmt=svg&from=appmsg)
    
-   右边一个上三角形——表示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ACSVSTxskVWshsfuKbicIN8mOWclvia1V0DibS7dlISuRjvV1bUBMGB6uTF69UvYCm3IbTvTAWJHdeXJjKGcUj6cLDFUmwLrAzr8SXIUY8C0Ug/640?wx_fmt=svg&from=appmsg)
    

这是很形象的：

#### Q：正交部分

Q 的列向量两两正交，而且长度为 1。

也就是说，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYv29mjuoxvDT1bxQ3Ya8EDGiaTYUJFpGhc5934icuIQvl3BtZlRbXpjJ2EGlXFUAWHNibVzfw6sOQklCPlx1Zd8jItQcEUYRn54VA/640?wx_fmt=svg&from=appmsg) 的列像一组“规范正交基（orthonormal basis）”。

它做的事情更像：

-   旋转
    
-   翻转
    
-   换一组彼此垂直的坐标轴
    

但**不负责歪斜混合**

R：上三角部分

R 是上三角矩阵，例如二维时：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH44czNX9L58FXKafY4WK03ibcicic5XbPSRxxlSJ3LEr6UqNGtQK6YJtcMib5ag0WPRl2Rov2HQjdibloFAUKFwhiaEZXX7WGaXHOEpQ/640?wx_fmt=svg&from=appmsg)

三维时：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfCEosuON5Kic8ITKZpkUv3icgt8KnHzttnWyrU6Km2mPjIuT2dTXPjUYPB5sO4Vg9PslO3ucUjguZpsLIVrl4VIRUWwur0sFiblHg/640?wx_fmt=svg&from=appmsg)

它表示一种“按顺序构造”的关系：

-   第 1 列只靠第 1 个正交方向
    
-   第 2 列可以由前两个正交方向组合
    
-   第 3 列可以由前三个正交方向组合
    

所以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdQ0yEZTS6FFPnUcNkzJkO5TSPSc95SH7RfS0dGZibxXvtgpg1FkfLcMru4LNMSm86VeZLiamg2UtmOxiaBvaDIJ8Lxo9icKrPCicvPw/640?wx_fmt=svg&from=appmsg) 的“上三角”结构，本质上是在说：

> 原矩阵的各列，可以逐步投影到一组正交基上来表达。

##   

## 2\. QR 分解到底在干什么？

设 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79uP4ncW83F1nIGLB2xeYIpqnVy5mXMcGplIEYeEUmsbLkxnx6o1fdoJhN5ONn8QSnSWgXNfX7bDG5BCXkC4FdrJujWMwYcmwB0gljScspBw/640?wx_fmt=svg&from=appmsg) 的列向量是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5G64ujpmNjicVB0iav7RauLG8lQwwVE3xq3ykYK32ohVnZptU3Cib3x68GfC7lL7Eem3aATqqFE0NyFnLYeCAiaV4SqkfTpRyNL4EH2wFA6jtxmQ/640?wx_fmt=svg&from=appmsg)

QR 分解就是把这些“可能东倒西歪、不正交”的列向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXry1KBbybR9wF6pHCE24ibqfia8RibbuhBJusEbwqPhdW2UjHVcW5Mt5DtEygXn28IlhFQ8Sy9ibVBXm060TGsgv06Sa3pgHDqibiciaQ/640?wx_fmt=svg&from=appmsg)

变成一组“互相垂直、长度规范”的新基底：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7EegNTn6FhRcPycPv7qI9G7dquibia0yVwueNeuVY0yEhN6zVo5HKCwAVylEr8kq6WFker8o6K4f98VQkthRFibUUq6ZKjALZpoAQ/640?wx_fmt=svg&from=appmsg)

于是原来的每一列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0ShIjVmMM7ZTwOvNGDDSPGJOztjbEBA4FlWlXG8J6f468sGicREe3BhBtHhU8rzec3qUfHrGibzon4ia0VMRT5jmP3xXAQyRG0EQA/640?wx_fmt=svg&from=appmsg)，都能写成这些正交向量的线性组合：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtTPwzrzXe3yr1CDl3HtibwsnuczRb54mGaXuad7hG0ITCyb81q0Gp00yxfGYZ55sujQOvYUOfWqgkcpYxh5nF8ic8wU9SicVEdzIw/640?wx_fmt=svg&from=appmsg)

注意只到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0xibf6lz323TH1P8UKZojFUJmuiblr2yOA80ZtbiaN9uxJTFogyf1v8Re8nnYyNvSaWl4eicq4C4o4EO66npsroibFgEzKYhsg2IxlfA/640?wx_fmt=svg&from=appmsg)，不会用到后面的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43Tnbtmfv1ibBqia0N2sOlIHIhl02Gsdr4vwMYAGEhx1WNZTjsYdCdsyz1IiafAAnjXibL63cPx6ebeKg8GvuvIhf77N9hyROXpzEOAjKw/640?wx_fmt=svg&from=appmsg)，所以才形成上三角结构。

把这些式子并在一起，就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkiaWWufiatqtiak6oQSbEzeMClHSMOdkAPlDRSR1Hxt8Lty2QKWccQFND74jY0OCJZsgML5iarv8MHokR0hCH2IEVCpwp4mVWyPBicg/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mh2m7hUVuPxoZiaxVOeqVKmEqoEic380SjXqmnWIEpK3MG1ibSBGPOZmuOHibhtaFx8qiaaZwLGLzeFk2dH9ylUMEIACxG7pUZibrYhQ/640?wx_fmt=svg&from=appmsg)

而 R 里装的就是这些组合系数。

3\. 为什么和 Gram–Schmidt 有关？

QR 分解最经典的来源，就是 **Gram–Schmidt 正交化**。

因为 Gram–Schmidt 做的事正是：

把普通基向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRQWA91OTH8gCS6uzqKJDafjSFicf8a4UibXWXpBxtXSC0SEcic98uehU8X4VeeQyEHu3KVRa4TtTgRXacQJ4CK7PqI8ibVCnXhLPwA/640?wx_fmt=svg&from=appmsg)

一步步改造为正交归一基

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEgBVibbJLcy9ibo4hhyib9Rrbw5ibbIHgFTypjZ8LKIPuTbcabic0etP3wQywNy1F3xScwLAXFny9icuUt5CKZaGxsDSHnf2V7WO2ib0Q/640?wx_fmt=svg&from=appmsg)

例如：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvTWBic0YP7OhXaxsHP6ic1osvzcp8rb7IYUNTqmmgic62P4PnqVL9c2uSqGjZqTbibJF1uYgW2hYrx1qRZwnhL5N2Nbtjft1ibkvloQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqP8cNFqF7zib3nsxpF2eb6HkCFvyX4QreuxENwicVGvmnSohmiaYsDcGsmnHkegibMBnia2ohsQ0GUGgWSic2xjsnDn2jAWaSvD2ug3Bg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sIjkibRfAAso2eOtxQpwMfMbibD9M49vNib5RlmPk9oZRSV7iaPTcicNIbqVKqKClGpN35uMP48BnF5TmLlgJbsoPIn1GCHyjXzn0xxOXXhdy8HA/640?wx_fmt=svg&from=appmsg)

……

在这个过程中，投影系数、长度系数正好组成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9RovvhnUQsmsKxXgSoTvPu2eFf2Mjy1wraMShibicnPls8Ck4sVP8ztB839DbN7JPFgmfHW6MW7utEhhMO7embV8PaDgz5182MXZVjlw/640?wx_fmt=svg&from=appmsg)。

所以可以把 QR 分解理解成：

> “Gram–Schmidt 的矩阵版结果”。

##   

## 4\. 一个最简单的二维例子

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK9Ndv630ZWj9QbTmpicCbtDnaIBkKdPTibr1vCKBS3dZ0mibTibGacH24rH69Zt2keFuE86fALYmJicPl4juGhLvuQOH23jHwAup3pA/640?wx_fmt=svg&from=appmsg)

把它的两列记为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHydqrMq1ILQDXj5ybZoOdJRFjtyYq660SEicTuIVX6NQ63ZUftRIwHByopxicuXnJl0afxPYkMic5yMLTkCswlIiaZczavyRyOHicmjw/640?wx_fmt=svg&from=appmsg)

### 第一步：做第一个正交单位向量

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5ChjiaJ4k3FjRibg1ZTSibpibEjQ8H9pYxg2hXAuDDIIf7ShdyBFicX6bJ7RianFiaEEIFXGKHXicjBVYhrqRbXnV373gaNSb5VhDjiabhgAQ/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibEibBLnvb3juzFZUk32d3LkeRx9scWjGdmh54aoeGvVVIyky3cso7HQseH7wyrAibiaeicSIIibVjbJ2HyTP3g7ic8Ticia5jXiafKicKOshA/640?wx_fmt=svg&from=appmsg)

### 第二步：把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznlWV7wy7raibjS4AZU2iaUvlNnQp6mPJRaDS2GrPsj8SoIcYudStcmP4zUg6oCcqAWqXs4MDPX5FU3QZzTqj6mUCvoFTHwnInXMA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKH9KmudacUenpCgS6dmqFpuiclFKXkOjtTicTMPBcbq4rGSUREOUgpXxD51BicO2I8AWYTQaIYBWnqpg9zXp5s2oJ986MqKM1JxWnA/640?wx_fmt=svg&from=appmsg) 上的投影去掉

先算投影系数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdUWJcQGLcoS6gYmKCwfQsr3DV7h9ANkoLT6sqQfiaeicCjXuGdXKOv8giatVPYpwQAjjq3Clicbsy8JbU51FLQlQNx4YJEgru5U92Q/640?wx_fmt=svg&from=appmsg)

去掉投影后：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqP4f7fD71l4J7Qia7SQjliczFQvUCOdhLeFo1r9Xx9IEjC1uamlTWEwQtn3ibnVWMqZLh0zjqibEJqbwkCxtTa2t2ad0GD0Wic2VRAzg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM598fbtext8cNe8oCVPiaqeibicQibczjxgeAogsQ933G16KbYN9dGLOVJN3UPazyqfwUDykkArnRzv5UqmRd4eOqCakafTEgibAkmjhQSHrMf1acw/640?wx_fmt=svg&from=appmsg)

其长度为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9ia6XibH0grTNSbcRjLeMibN5licu1UpZnxgYND22t7PUXVEXKqgk1c8tYK5wrDfPicNyYHkdKMYiabJbx7xZqG4vrFmhPSOElFqterA/640?wx_fmt=svg&from=appmsg)

归一化得到：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFet1h3zcmUicHLM72muEwr2YILZWrJuBWTes3HE4Hic7K20cS2gHMkKMSiaLofybUIrvgtwg5KF0tibImicwz11QIibZxf9I4begejSxGQ/640?wx_fmt=svg&from=appmsg)

### 所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7s4wD43nQbbp4USChgTgf8WNymWfCXWsNXia3VgicBgRhPMCdor9r1e3uePujO3F4ibUuf6Cvrduic88bjd8x5VyW38jh8hajmWghrxQGP3HRwvg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppcj6lPFfIqiaeLXTQYdKs1A6iaeibuUrnolKyibRAKxA7ZGbcbcuUJpDlOvoq3e7glAbkre3wPjia2JPHnG5KTeiaZHG2L9gtibYqBtow/640?wx_fmt=svg&from=appmsg)

满足：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5hDsBXqQkL5ricoJvVWyGXrmaC731L5xQ0UsicObqzavTsGC9Dklt6qFNxQ8oxqR9Rsdzz3liaXreDoNHThFqtLTgj3tsXtTV9DPg/640?wx_fmt=svg&from=appmsg)

## 5\. 几何上怎么理解？

几何上，QR 分解可以理解成两层意思。

### 角度一：把“歪坐标系”拆成“正交坐标系 + 三角坐标表达”

原矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0cMThmmxRpqfibD7DXEbOl2j9iatOcGAK6HMgzC5wKGicbFS0XTliahSAsqu1DqjZFteY4NmvoD5aoALanpJaZ4FWp6DMSqibATRv8A/640?wx_fmt=svg&from=appmsg) 的列向量通常不是互相垂直的。

QR 分解做的就是：

1.  先找一组与它们张成同一子空间的正交单位基 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6u7n409AC4iccZ5HGzQOK34ztbgfwh4aKguK8bYyAXJe6xiblZ2qa20jMON9Q7bGbibVbX3bicqYwlPy93P36TVnJQgWPNsFVS2B4xbDWyRjzKicg/640?wx_fmt=svg&from=appmsg)
    
2.  再用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAE4d1TTDzMjhCMRmc7O5nSyia3FHwEeCOdENdfd2YlPfWVW7cbofLZtD6R08vNSCk4eLRz8cbgGWexHV2X98IqHNLrqSsSYeYMQ/640?wx_fmt=svg&from=appmsg) 记录“原向量在这组正交基下的坐标”
    

也就是：

> 原来的斜斜的列向量组  
> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPUEdeZr1iaVJuoF0Gypn34KbEIU92ibvOKjqKhBLQF69y7tDMZF57XmpBq7JEYLvTNhecfgKFQj1VvfcgGK3aPWTtR64VOtfJkMw/640?wx_fmt=svg&from=appmsg)  
> 一组干净的正交基 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib4wPumeNVpZ2vyt44nWFeEs3JibXZgSwckwtuAOxmice8YOEnNR7cBZYb8X6MjdNibqibzD5EIiceIhwbDUicicy1gibJ24Y7ictFQPFd7vA/640?wx_fmt=svg&from=appmsg)  
> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9ambqSL8hWjn4KROkMb0eYy1sHIHESZFWsKiaevPrU8wmtmp1br1eIQrTNbNHCmeSxpVC1ToUV2Pja5knQWMvwngN6YRZLE0VOLdA/640?wx_fmt=svg&from=appmsg)  
> 在这组基上的坐标系数 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyG7CzRicQXibMjqWkicia1QU2gATVq4iboiaaTiagNT0zXHdE9s9gP2Ntgwu04Ja7ciaW8x27qbCv9JWjmSpxMbXgFhIpibkHL20UANbU4w/640?wx_fmt=svg&from=appmsg)

###   

### 角度二：线性变换的分步看法

把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0nmic7Nrrw1ruse6J8Bt3OdtvV3qFDLdgrD1WDGFdkricCc4kyicqGF2XP2VLDo7ey4bicW0TNq3ZZAJXmUEPmDkpSF8mbVCiahQyicw/640?wx_fmt=svg&from=appmsg) 看成一个变换时：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXnR46AkvpphbaYFCD9MwCBib3ryxibQhnBRtw8F7UZHvmgexV99qFW6F2yHMnYiaSpIhn7iaedrKlfNoyZhCQZ4qJQaX4gQ0bia7eNQ/640?wx_fmt=svg&from=appmsg)

表示先做 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1Oicib5syt2dTFibBkP50rvwMfFWDQlxzd77Xft2UiaD62LsJOAzPjbyP2FXknBm25kQQHbPUsfTQn2P05QDib6yB9PquTkUJbIC6Pw/640?wx_fmt=svg&from=appmsg)，再做 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnM5ajjM7sArkyh7m6UZweUsJPCLg0oNdibV6TMcszsOq7MPicXVHtRugnN2elyeeSaSQf2xwC9vicTyylUxZ3RvgIJ6yN2AIibewWw/640?wx_fmt=svg&from=appmsg)。

因为矩阵乘法是从右往左作用的。

所以：

-   R：先在“标准坐标系”里做一种上三角变换
-   Q：再做旋转/翻转，把结果摆到正确方向

##   

## 6\. 为什么 R 一定是上三角？

因为在 Gram–Schmidt 过程中：

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4RvrrJN1gTgj14CG2IIHxJdWbibN5ibXHb4q3Sw7gzMktW1dwwU7JiarEKeh1CYxbBia9KyyKJdSHyXOMicKUzZ9CicjAkIQ7HeEbV7elQ/640?wx_fmt=svg&from=appmsg) 只会产生 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuCg9mCgLc5M1ay4iaiaGG6kiallJP2Z90OKic8GoCD4B4TDsrWWHa2mYOPXnGkFw8ib72VxUgpAPcqxhlR9FznSkaD2gY1lcvOk8j0g/640?wx_fmt=svg&from=appmsg) 
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqTfc88Qe0UJgic5pJWRWVEGKpNpP7dXzuCRgboq0Dx4rtZicz41enp7rh7BCThuZkKVJK7ncgib2nyrlzf7alWGDxvia46aCA8NSibg/640?wx_fmt=svg&from=appmsg) 只会用到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdaG0EibNm9jJaAfOTYXgibsRBf3c2iaS5glRvVDenjzPo6nW1TWfa9WYSjdYfx4PVSxvOVFQj5rZVuq1ibFA5ibJ5YKypgsyNBWBs5w/640?wx_fmt=svg&from=appmsg) 
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCiaXwENPloAHTzOdnB3T3QzicMRfvYibicM5hJ9JHh7eUOtN0jIlPo2Xps6c31KwKXYbSM3LnJjSBMsNQ4eg6mufwpuEafpTUCqq1Q/640?wx_fmt=svg&from=appmsg) 只会用到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965QlHEgvXF8axBCP3rULibYnreY2ictVlZkK8dHXqzH2emoHRtPw1iarl50neAqsMGPRoqnN3ZWhqp18FjalD8ib1qicmlYD1Dvs76bA/640?wx_fmt=svg&from=appmsg) 

所以第 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuF4iagS7WFvhrv0GOmtLAVZU1dsibqErHRpmmuL7uyNAWRpW3WAZepppKMFez0PZvmfZfkshbEpK5ymMw5NCYwKKDKIa6BYwfGVQ/640?wx_fmt=svg&from=appmsg) 列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7OQzdgUMGuIYGic5wnQUmh02gqjZXTIseyY04sltRdYXLtaNcgBCX95NBjsItHk368UxdGlUV2YrfBhBIWbVicOUEjopJ3QjKcfw/640?wx_fmt=svg&from=appmsg) 不会含有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyNKK4o099IJxfDEdicpwic6Omiad6Ec5JOEl62R1hZmK2DO4iaSE7JiaHKhHUhic0MXIo0aXjuGaQT27xcl2c19mlvpK9cx6bcnSicVTQ/640?wx_fmt=svg&from=appmsg) 之后的分量。

这意味着：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9rVleIkwUZ8CXF77s3aGHF61GuUNtIjAHdGnyMSB3skUq0t5Xlol1XtkefTVTnic8S1W0gGLzfev27986ZJ1hicbvHQdAx8NnCWA/640?wx_fmt=svg&from=appmsg)

也就是下三角部分全为 0，于是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCrdPQCFZOuM6Mzu1ON6kzDngFQSNBun3MyICgsQ94kgTEVN7k1AhtwMJ9aDzlA4qIRqMTcklNRYu5KMGNUo81D6uDoAPcoc8Ww/640?wx_fmt=svg&from=appmsg) 是上三角矩阵。

## 7\. QR 分解有什么用？

QR 分解特别重要，原因是它把“复杂矩阵”拆成了两个很好处理的部分。

### （1）解最小二乘问题

这是 QR 分解最经典的用途之一。

当方程

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgiatJGwibr4oyah0v0gfDtAuX5ib9NgXTViaPKSfQUZbr0XoGqCAicd0XU7SSCaFVS5UibR56jnH3QtCzYhuKm05viciaD6WImPeWm0hZA/640?wx_fmt=svg&from=appmsg)

无精确解时，常求最小二乘解：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YBdp7cvMFlxNSU2E8IUk910picsDjcJibleHJL9kxNjZq4iagPicu6CuqpvUWSvylsY8H5PwRyo6Nq1dWy5eTHibQxLgXnpico7hw0Fg/640?wx_fmt=svg&from=appmsg)

若 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNWb0sjPwuCFqbo8BWx58BAiczL8jVF4FJYj6w8cyFlibAka4CqdXsq5JD6lWNploktHbFZTKzm0NrXoyXxl9hICgWjIoahnPZCgg/640?wx_fmt=svg&from=appmsg)，则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4ogUIWUStZrtgqUUkhMZibGu2yGvezVrb2ZVSAB6BQQWPp8OMS16SiaVicvricRWuj90RpOTEYGriaB8csHUCQf3YkrPOTXAW4icLlP3g/640?wx_fmt=svg&from=appmsg)

因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf99RhyrcibhR0cBxbKGd6rYkzkHicLGk2jEQRa3WphqSyWc1iblzibBk4kS3IiakkEWrrFsaEiamj2tgKwW89TbY8hDmOgNYFMHsVIXA/640?wx_fmt=svg&from=appmsg) 保长度，问题会大大简化，最后常变成求解一个上三角方程：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwkeOTdfL71mTqe0ib17bibgribib4mZyBgsYvoTHOHgnct1hWCibOmo6dibUXQRfx11wZBXOxLCUkNBYwtIE7dreJ1HB3NgibezeJ28LA/640?wx_fmt=svg&from=appmsg)

上三角方程很好解，直接回代即可。

### （2）求特征值

数值线性代数里有著名的 **QR 算法**。

它反复做 QR 分解，把矩阵一步步逼近上三角形式，从而读出特征值。

### （3）构造正交基

在数据分析、数值计算里，经常需要把一组相关向量“清洗”为正交基，QR 分解就是标准工具。

## 8\. 满秩时的“瘦 QR”与“完整 QR”

如果 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovguQg4x79OWFIzp2GQGeHUJnxY9ZWicsCdapyQ7CaAvCHCz9x7zibu5frae2u2rBneMRM5I5xTuicXgYBt2c2ITcgqzpMJd1T1JUUQ/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1Z7btH5mu5RK2RQ16TJhwx9uZs1ErPupMTXe8pYFOfEvjt4LxJLEO5nPemB8CdGhEEMUUoFLnsFMAv93ibibWyfD1icOGgXWJcTSw/640?wx_fmt=svg&from=appmsg) 矩阵，且 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThiaJEeibeQO6bllohQNNz1TlibJH0bQCxiayRJw7Ky1yJGnNR2qb9mtAqFC9ThgrHvRFDrRehVrlPog9icCViaBd7muUl4qD0lM0FpHw/640?wx_fmt=svg&from=appmsg)，常见两种写法。

### 瘦 QR（reduced QR）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnYtwMSNSLuyP3sHY0S3hn6qOHPicxdZ9dTWFQz3IAITnziaUG27YA1Pvs58ibicwdPa79EEGzlgiaebq5eahaGkKsBlnCiaqWXuG7tCw/640?wx_fmt=svg&from=appmsg)

其中：

-   Q 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7GNn5jFF9HUEiaGPxcgIN020XqZnwI9m9L0bnTI7fexfAtoJg0r0UXuB6icAssdl5ic7aouQak0eicEibZDNVsc1GYGvsWJSElc4iaJ1ICg1ic6acZQ/640?wx_fmt=svg&from=appmsg)，列正交
-   R 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfEqE1tPkkgGkRUEcOJecEfxbXhLv4nqic14TdODII7FZicETWdruicOiaYaTR2gT17pMwyP5cQNaEhzM18KicTVPmZhBzria0hLvnXGQ/640?wx_fmt=svg&from=appmsg) 上三角

这是最常用的。

### 完整 QR（full QR）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1KcpnsicgQBBDtA6MneiaNfVt24HiaFT2d7DhKBFjSeur88hT70js0kB27230yMKOIoCwsakkNia6pJX6uxP1AsFaqicKqeCpdTnN7Q/640?wx_fmt=svg&from=appmsg)

其中：

-   Q 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYpnun5aSoyHvuK5ntLeI0c77FTd9k0EfYpDnrlWO9DEjZH1kxh9UuKkCUKkFibTwwz4Hic3sduFD47TJsqy50UkeXgxUMhzVMiboA/640?wx_fmt=svg&from=appmsg) 正交矩阵
-   R 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQNY4aaibBcKBH8ZribgK2KW7LXJYH1akhxEEKysaic3aYX7BNEd0PCibxZYbk6nxgNJ7h9ibWdr4vu8dMfuLpFtCiaDlp0OY4aquXFLg/640?wx_fmt=svg&from=appmsg)，上方是三角块，下面补零

##   

## 9\. 一句话抓本质

QR 分解的核心可以浓缩成一句话：

> 把矩阵的列向量组，拆成“一组规范正交基”与“在这组基下的上三角坐标系数”。

或者更通俗地说：

> 把“歪歪斜斜的一组列向量”，整理成“方向干净的正交骨架 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ZBVeyG33EnpGXibPSvAcrfXEf78tb0c0OF4JqOhdLN4Hry5oYdTFwqiaA58Nqqh3ia1v6BCicP9gmT1m68S4wCywStDmEiadoyljuYIpS0I4E2zg/640?wx_fmt=svg&from=appmsg)”和“每根向量在骨架上的配方 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LVRzC4rolQ1Aw0BMeYnjnHffZicrb9wv2W6ZyiaMSGJfzV8y94ojZwASPMDlOmH9o3zgeicXwHZ4Qy4bFVkgcty9YUSAKyOEZ7m7Q/640?wx_fmt=svg&from=appmsg)”。

##   

## 10\. 你可以这样记

-   **Q = Quality of directions**  
    
    方向很干净，互相垂直，长度为 1
    
-   **R = Recipe / coefficients**  
    
    记录每个原向量如何由这些正交方向配出来
    

  

我们来做一个 **3×3 整数矩阵的 QR 分解完整手算**。

我选一个比较适合手算、而且结果整洁的例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb77x0g0jVT59ibEeibogYOzPemm6StibwbDwicvc8ianmkpHBUpeM0KU1jQaIFPNrNynbxI58eMq56U4jEFsPuhYm7J73Untp49eOTFsg/640?wx_fmt=svg&from=appmsg)

它的三列分别是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5ianQFsIp9PXuvpaHOotSUEc721Bb7pwaumRArMjfSrmuJvqZDjP4ZnNpaibYJMSazQe40SmAlCLuhpJwmOZQac6g8qx17xMYWbw/640?wx_fmt=svg&from=appmsg)

我们的目标是把它分解成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsASPjAbicBFXTgp4Q5UJKVQgMSmDQlAtxxFt4LicWrSaJ2LiamictlY1N9oYf3Ke9TaB9gpogSUkEvXgOsgtLdIPI3OibXUa9yZuia0Wg/640?wx_fmt=svg&from=appmsg)

其中：

-   Q 的列向量是规范正交的
-   R 是上三角矩阵

##   

## 1\. 第一步：处理第一列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlKKzvpPHo7Q8Jbbc0PBB558I0S0ItwAbBLPLnRlGaI65DpWbQTV3IbBum4XObVMOLQvKz1pbibzHK6LqXfgpX7gTFQftatbxAPg/640?wx_fmt=svg&from=appmsg)

先求它的长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49UGeW1q7sCHZAmIZPlZYuTsS2jJnHVhIH4ZMk1NRYyyXOn4UTHfklxEicDY7ib3ACwE2oxqCsiaUzOUleQoRe9hxB8cVoMRmxEV6o5ctPdYP1w/640?wx_fmt=svg&from=appmsg)

于是第一个单位正交向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibE5vpNGvdibuN7ib9w8C3D0iaV4CWTB1gPSzO1kO2UFrfgPrT6UJOB8R2icrJhTNdXfXJZrMYibwYRVCo24yqxYufepjzrib4Sjicuo3gw/640?wx_fmt=svg&from=appmsg)

这同时给出

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPDNjjZvRnGiaa1iaQeMRE9DXA0t4ibT0YGPq5JiaBLlMMQicgMeibamrNQXdYw2KM64JgibB8ykAUH7IS7vPEw4qEZZibsx7Ksj0We5OAg/640?wx_fmt=svg&from=appmsg)

## 2\. 第二步：处理第二列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyHdaDCM7evL8r2qt1fAiarw0e9EPibNATDlBbl1QAzSRDAvaHnibFJepqsF8utBbtlIEw8uXDBvjdwGtqnibjCwGcD4aXB9iatAx9JQ/640?wx_fmt=svg&from=appmsg)

现在要把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqP1QIia9yg8ictTzDw7BCbiaxfohyG08iaQHFnwmqspYzDicyeY5eiaPXE6SP0CPPnXo55bcNibvZMlEyvWxj4rrp3nfdw8doIamtYVP5w/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnLenXmxyPpakVGSuQQGJK2YJq3yvKBWwgNcV558eVcHibKgEpHUxry1GXOosZcoDlWDX6Um7sgW7NcmEibw5OT9t7XicPKiaRSr9dQ/640?wx_fmt=svg&from=appmsg) 方向上的分量去掉。

先算投影系数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib4168RyI1VPRI58cNNxI8RZn9BI0THzGViaw2M9UXQ9Et014j3YJv9X8B8yDJwLzuHfu9j2QqptrUZzoMxqb8vvSaY4vAVJw525Q/640?wx_fmt=svg&from=appmsg)

代入：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ibFj8r3gKkQ6Eok5hYTZrLCJCxxfNR2MibLLw7Mf9ImRrPibKL6wrq9BK9ib3LTeGg3BLiabq8bteXqgrXlRxictY8fO3Ey1wnH19sr6lgzeic3aIA/640?wx_fmt=svg&from=appmsg)

所以，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBppy0IPJ0Xxua2Qr4vtU6ZlVmC3PT8iartctDWNGOVfOvMdwr9ufIjozWiaticEdDUiap2Yiaj09licib5dbiceb1qzmxJfphth9xJzlBA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCqbO05Sek6Ztl2HVCnjeYbHiaPs03uhAklQ1WG3f5FKqML7yuxCichqkzGwc5YT1de9RHs4TGguURUfibp1YiaF432zIIpxhLSL7kg/640?wx_fmt=svg&from=appmsg) 上的投影是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7Oxwe9bGN0W9oC8NXlLZiaNzicd7y1mjlGfA5h7pNKGwdAOpbMC15yytr2Jy2Vvje4ibXhfEhSatw18rHOzIEbKOY1lJBMaZldqkw/640?wx_fmt=svg&from=appmsg)

把这部分减掉：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL3DcBayAP3Zr3JaJtlQeoE8epCBtsVg1FjASbMKccJiamRRacb51ljiaOpkZEU3XvdVib8v7TiblshrkC09gVnibORL9IPNwNuXAmNA/640?wx_fmt=svg&from=appmsg)

### 2.1 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnficD2qHaYH3XIg58uVibe82gUgiaDeRzFxCiakhwWR3b4qk2fIeia3z69DZcxwbIgrUVycj6lFM2X07gXIBax2xp0qVxiaCibibHaa2uEA/640?wx_fmt=svg&from=appmsg) 的长度

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic1yXpaT2jQS3mgLZHx7tbgYkoFDq6Fdz9VJmiaqXIz1AdvF9gM1vicuYicgpPAhaqiaVfTq5joH0qkf8rxBsSXBLZN8OFb7Y4XDJOU8kP1VWwdQ/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zuic30cZvxCE7dpYxSzE7dEvicKQ7ic2BycF1Nmt56ENXvZu4Sy7Ekl7SJfrE819J2Mic3rRB29WeUNzXibo4Gz3TkbFFEgJKr5PNQHgNspCDQpA/640?wx_fmt=svg&from=appmsg)

再归一化得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SUCiamBy4michibRzz91kglqHnpDPw8rIt10ywzib3FIlLyeVwlhPnj34MNGUMQWTvdcLrH3rqMz9IZajFJOvK9nK9sw3KKeqE9sKrgsUiaicukUw/640?wx_fmt=svg&from=appmsg)

为了写得更漂亮，把它化简一下：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9ameXvd2OPPGazRvVPWGsg44rI6xM2u5umnYeFDUmjFAtc0yAOE2y5byfYpzekQXrXU83gTibicOHdF72FGrSLblSXQJFqROIa59lg/640?wx_fmt=svg&from=appmsg)

因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90J2j1qnzRjDmaWjnXibJKMjWA9A2oa9jW6vibNhCibH1zIjwNjwPXgiaXkbTSwKVfsa4n3ZwibKGr8K3Fazk9SlZASUdT6kqxZqlRvA/640?wx_fmt=svg&from=appmsg)

这个形式很常见，也更整齐。

## 3\. 第三步：处理第三列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfMe0CibClkwW9paWic5SSibJyeeH8S08Ir9WNe0kl6an7DialciaDaWvtmkEOdLk6qtNbwbeOBrmiaA5G3mmZ2U9taUwicCtcDOgtm8KQ/640?wx_fmt=svg&from=appmsg)

现在要从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqvqrlG8aOibszrYnSy2qNq2RibRtmAJNcA3Uz8emGIeKCKHbmDcRRxnfttdVtXasok7yPHKV4QhrFCH7o8IUQy0WKuZvR5kxHUvA/640?wx_fmt=svg&from=appmsg) 中减去它在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0ffCEnvTGd2D0angTGPAEfQZ0v5h0l5HnONtA102ZX6uP7MoTtIhBIgFEu6fVYzLaYYMvba8OqpZOCwOlmfpjYAJlEd6ibiaYMtxQ/640?wx_fmt=svg&from=appmsg) 上的投影。

也就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R14OUibmTgxZWzicS4Icy57ia3g4ZF1ZjBzOO6BgcQes0YzhFTCI6pVYc7ibpJMEF9uSmkhZXFiayLoNGeogFe7fv0DPf28T1sgaGQpg/640?wx_fmt=svg&from=appmsg)

先分别算两个系数。

### 3.1 先算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9aMic14ibPHogQX63vUcBHexvRM6N4fmL9Qokg3GHgqHYRNaYiarYiaPiaHvTaLsiberXHkQwJOW8UW1yGAEyca21ib1JVUtzLPNTicxZQ/640?wx_fmt=svg&from=appmsg)

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSUB4R118nOvIOCPmO2PqDX9rb4iblEHoibTgelxTzs1EvtH2RBf474njZDJyiagbt4YNDQPnhO0bUESQicBzAiacqXMctibm6clH4rOA/640?wx_fmt=svg&from=appmsg)

### 3.2 再算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yjwNFmzI2T2iblJlxWmC6W6KRHjOzMJR6oFJ2GmRKeViaib6RbZ6212sXOS2eIAGTSRfGVECOjdgCLNxdSVrUxbAkSY5qL49vT8SMAOrYCZicaw/640?wx_fmt=svg&from=appmsg)

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYBP1BVOSfWsJicP9iaD1DW5LibbWO0fW1M1fjF85YiaetdEOm1hHdsONXkiaT9u60Jn9uibRg93Wu1aFDqibn4DhSCMyWk0rcvwYf5iaTQ/640?wx_fmt=svg&from=appmsg)

逐项相乘：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAF7YgF5ImjT4zp6AW46vMYicialpIpaAI24V3sd3fzuictsNUz0ldKqic6r2e5GJpaqYlqjcjOcVMxETE4EsdHuYSbuDZALGRnKuqw/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9ke5AFcpIUggIfWaIWrfmoDLJ5QAzggCoHqc6AAibgGXAsxicTZ6zs387Zw3OZ7cEz9h5EbA2ppaIhWqZI24icIRORKZraWOsoFVA/640?wx_fmt=svg&from=appmsg)

### 3.3 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprMibrLgqjibWyzpia9icDxhiaEgBFJJSDlxtTwqicb9k65KKL4siazB3bLxl9CB0Up6edzB2I9KVWkSibicKSKCZM0Fdok7DbVvYaJN0LoA/640?wx_fmt=svg&from=appmsg)

先算两项投影。

#### 第一项：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMEoadXjzyKpaibGicnIibzv6HnCKx21I1N9icPwyk8l9zdRosSedAZkXt1lLITia8aicvkicImZrP5ibBKmz92EAqCZMuLQJj9nt05jZ1w/640?wx_fmt=svg&from=appmsg)

####   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Mc3BhicicgISWiahEm4eJw1YhSHXOh13M0daNlngSeP3FYxgmjfKPygwX0icUd5b5KU1gxtFphIgjHSMq2swQtJmAgOhzBS56qRjr8D0Tq614KQ/640?wx_fmt=svg&from=appmsg)

#### 第二项：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GTdlE5iaLIfZKGRz1UYu2FqUCrWdq5xWuvB2Okb82XMkDNh9nVI3VlH3OzvSbs4GZ81SUHaK7DHeJ7VXrkAUibgYfdbP4qE5iaeYA/640?wx_fmt=svg&from=appmsg)

####   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM65miagKj3LRvYRSNVhyMAI0K8RN6Q1mO0Sb7g2mmUN0YugsHQ0X0oPmk6cRTSbV3B1iahVmUM63ALOZoVGibEWyXDQyuiauWIR4MUhEiaQeKe0QnQ/640?wx_fmt=svg&from=appmsg)

因此

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnYzn2iajAygaYXibicm4uqmfnTL2tDhNT9rvrHwbWsEjKbRaWbuPcaU8NqfewcoAjyoYt8dcjW9d1lpKEw7Wko2ku8mH6fm8drTicQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dGjtdkR3oeWl0t6wstFTsHEKxxC3OEGIpvwco5Lyl1rYdd2eqrrQrIuWHEKxNFeXbibym9IloY7dkgZXvkXvfCj14KOADYNrg9A/640?wx_fmt=svg&from=appmsg)

先减前两项：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1IvlO9kparJ12x8SQ77YOBqN3zlOktBSYhOosLB6YvpStAD1LxpibOQMiaCbq3icedASRib0C3XSGr1cHXCjoxR5RtA8xTOsg5bpTw/640?wx_fmt=svg&from=appmsg)

再减第三项：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRYicCviax2CDTXeCVkFLBJhne5uIjgP6p79YUgrw4Mr8IGv3Ks5a2sDwJejP3UShSmIKhVOGpKiac9HxotMtyWFicffCf3Olz3uCticA/640?wx_fmt=svg&from=appmsg)

### 3.4 求 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfPBqpqAq74YIo16LEXM5McLgQuo4friaoVK0XW9o2gNFW4cAA3UTq48w3KVm7mLgUYMqNapL9E4GubyIfCSa8Jmic7fj7vLqtYyg/640?wx_fmt=svg&from=appmsg) 的长度并归一化

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyIAdDVOKfAFlDlexKJLpvlNcz4ZxIdBvgqMneCDibtkeQAxNSMzOrRIW5j8wcQvaOXmm36fCrxeOvdicAOE3KB49s99mQyzgNKSg/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7aMPvEgfwW1LbTnlxA0VRhQmbiaGMBXKwYaCA4ibDqj3H4VqJSpLUIibAI1ZAp1IFKy9NPMQZUm1V0mwPLuvkjhqeN9YClOqYZM1HWeW5GzzraQ/640?wx_fmt=svg&from=appmsg)

归一化：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZarnrXjfGIQH9emwab8ws7YnQDFdwoKbIf2KaP3KXZjD39yGNlDHQicxtuDMibxrzZLMc27qZ72KN5aBVpWjalZNkG3ctfiaKFVVQ/640?wx_fmt=svg&from=appmsg)

这等于

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59uXhfsorpcuDUKcZn4CJJgC07K7ibEeIDGeaq8MDK3vxBhgKeOUwbsH2oae7bUpbVup1SibaN21YEPeKsicgEbWJxldWL5p1XXhK69mDmItIWg/640?wx_fmt=svg&from=appmsg)

## 4\. 于是得到 Q  

把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ6UQnicRpX8e8rMw7F6lcHgGkFZEjChM6fQBiaN32dib9Pnl7Me8PnibBjkcMKuiauMflK6QXGicsywHa4xiciazgnbrxJp5qo7ibZuialbQ/640?wx_fmt=svg&from=appmsg) 作为列向量排起来：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gebuqhxYx20Kefxrxib2uk1ic5l68I0I1LmghH5wltJCkdyanMpR8mcOKbKzWziczHermtfTCSibTnBSlh3uaEpmRwo7ibiawtZvXT6P8syUdNA1w/640?wx_fmt=svg&from=appmsg)

## 5\. 得到 R  

根据前面的系数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uKyzZmwE4kBHxpEm8ibac03hqEhYLLUI2WgrFjJzdxEAHnOX8lgXCKYbvSve2iaqCevc3IFGyavWZHdC14GpibiaE7QFk8LwujerbwA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKab0zTZ84XozsicMnU9vl86uC8vUlOAhuibicAaA4oLAeOPQvNduupjNxxbPFhtb13wPJu4vpcArj9rGNKOGcUDllhS57P6o7keoxA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbgygHZcy1HxNCmWyichanYwjp8mR17icvicZOmcODBN22D8vfjm46VVvGQLVFmAExTvGffXazicwlx2ojIGwM31DLJyHcH3XoQNPbg/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSY1AvYDFGUcibxxztiahjFRogh8wljJbICKufeeqQpWVtNruib9p7LhicAiaVsjSB2MfRMOBzLMfm1gpLowneab87wmzU99p8OgU0yw/640?wx_fmt=svg&from=appmsg)

这就是 QR 分解结果。

## 6\. 最终答案

因此，

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtD2iboQfShxNgMT7OzJN9b3UCODiaYj0NbJnJSR25HwwpTa81gK0QFoPnVtzjDia1ZROCicNPaibBo9vJpqwgtlic4gSXscOhk1ycB5Ww/640?wx_fmt=svg&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ohtYCgHibdibmRoV8MFiaeickpLGd19KORSicIUTRibgib3oNSibGEN6S9ZyXg28GVvtd9tKkoOe6pJNwicaxBuLIHkL7MNMLRJHXrORibpw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXqPXq04HVHZEFZZRicD5MtuicrLnEwhGeCDwibBEyFv5MsusY51XghOg8WnqSrAsHhBrL8FIDA6EI0Orpzfsu3gQjbxoOEXPUEDXw/640?wx_fmt=svg&from=appmsg)

## 7\. 验证一下为什么这确实对

QR 分解里有个非常重要的关系：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965SWhs2ia7tFXkicVMiayNEFOggyPaicrFjZ3DBAf8s5es5xXJf5YLLm7OOPNozhILQSVJekl9AzgnSg11nNXePwI6vvjo5gqz07nibQ/640?wx_fmt=svg&from=appmsg)

因为如果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgkdRKqCAlMevicnGVN29LIibzr9cAGda8HneIfKTxRnemsaOSicKK6aMxG19ZzEwaguNMAXyojh9pYaB7y6ewyhKG0V30nju2icA0A/640?wx_fmt=svg&from=appmsg)

两边左乘 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIuz1BL5e6MeiaiauqKIV8OkmWhLrKMywictibeh5XDOmttz4FVnZibRKkVGufhW6wgeOh31mkzdXictCmZ8z9D3RQUl0R1VlaUBXbYLw/640?wx_fmt=svg&from=appmsg)，由于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfKGTiaj2icictHZkHmhD6M2sfiaCjbXE8CJoibOVpmxIDrthf8g8ZmCm2O9hDQYVsgBRvdsAyRSJ6pxGnPCuIZ0SE7FWWsq7ljefDpw/640?wx_fmt=svg&from=appmsg)，得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvYQiamW9BJIZMUG5SqaQ1pwA4vrQJtzFv188WmCv8VY1cS2ubvvDEVg51ZMPNSGmG0BwbBKOH2sXhsNFtxTZZK3an8mSic2JEczw/640?wx_fmt=svg&from=appmsg)

而我们前面算出来的每个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GY9iarVxnf1c3vSDI0nQMLMJickHQZ5yQXIicRIbYaao7F3Xu0R77qwxjeVs0jc7TxpfcibRZznYqHfr4uSxtwIXekJs9EW88ZwGXw/640?wx_fmt=svg&from=appmsg)，本质上就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBpugBmOunqk1IcQDsGylm9y9bmj5PyKdibNn9GSZxemYib1MS3l5ooKRHddj7bBib7TerxNoqgzwyBJ4tZ67AHm1NLSDib60NHMajA/640?wx_fmt=svg&from=appmsg)

所以这些数刚好组成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaMBT3k3bEeibprgtaW11CRpJ1TVibjbz1S7DO3paiaEOe5Qw9hNgTDLBu3DPk93gHhVxiab2icKQR5S4t0kjEHzwzGygfJ2ibssNyUicQ/640?wx_fmt=svg&from=appmsg)。

## 8\. 这个例子的几何含义

原矩阵三列：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic1yXpaT2jQT7CFYeLUccFIdwj3profXTWibGLUMpWFTuDUXtndSu2BzRmzz2kNQcbR6diahg8kVzRttPCicnqOsBc3XNm4JoqPj3p1hXsnHXlw/640?wx_fmt=svg&from=appmsg)

它们彼此并不正交。

Gram–Schmidt/QR 分解做的事就是：

-   先把第一列变成单位方向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThrd6lqz5jtEPkI5r7V1TYemdMpJDgVptS4JEia9hEU1jwbxqomUEHuaiaJY3H0ibSdf0fcUzszA075eficSEsm9GtBiahuZ6qdqbyLw/640?wx_fmt=svg&from=appmsg)
    
-   再把第二列中沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoBNI9YyJOCOmCXpjG4oOCRIlHgDRG1bhVcqIONrcFSrgibEXzfEEzNphkmSejhP3yIEG5yicgU1VRuzibeicVzflLMmgKIjAfvdzXw/640?wx_fmt=svg&from=appmsg) 的部分剔掉，得到与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7GNn5jFF9HUGCuiaGyahynX7OfTq7n6qLon9ooqnDMQ6TvHS3lhq2qt6nRhJB2jANO64XyluQzzkml3DvcaqnM213voOibEFEWe6OlBSIXbIAg/640?wx_fmt=svg&from=appmsg) 正交的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zuic30cZvxCBb1rEzNCoU00aNQPCJ9XEWDF5d9yzXhPAiaxMwYvGttzRT7VJNwHydLRP6VRWUtp5lKZkXK4IQlAXDDBmT80xBIuHZIx4mO9OQ/640?wx_fmt=svg&from=appmsg)
    
-   再把第三列中沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smhlE3JnJ3IW8ibY3ibmuL1JI4XP8R1N2aSEE9j6MxJSwduRCOQ3oXZaibnouQ0E8WOqUqjNHh0KleI5Xyl8Xx33hRp428dPJk4AQw/640?wx_fmt=svg&from=appmsg) 的部分都剔掉，得到与前两者都正交的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpWEmxd9ya9TcHxsegbH5z6kbicnHBmhGhrvVpUVjvPqJgEgY3BthgTdNfJIvnvJQBtgJyEsRkW2ze7WMhibrHvHGK9smxmG3oB1g/640?wx_fmt=svg&from=appmsg)
    

于是：

-   Q 给出一组“干净的正交骨架”
-   R 记录原来的列向量如何用这组骨架表示

比如第三列就可写成：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNkswXSkH2aNCBeuO3hfIfMZ1SrXhmQ4c7vwcdfwH2nrQVp4Y9W9gycfdLrIgJf7EnuIgUmOr5VfiavsEuYvGtLibFsxzib4GmJ6RLFw/640?wx_fmt=svg&from=appmsg)

也就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZUdUK68D1CfBLVbxwuCdzJsKS4rz8l3G6IibeHgoNy2jBX7LicQ5R7iaByicf81OeaWetVCx31u8g52PgbhQN2eqnqqyItUlTFibk9A/640?wx_fmt=svg&from=appmsg)

这就是“上三角配方”。

## 9\. 一眼看懂这套手算流程

以后你看到任意列向量组

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau7YC1LaQqdnHQgjeCOcMyzxcntO9W4FAG5dRD1ibk6UZvUvzwGPsTchJRBXQHZxNhoyrB8totGZp1Od9NI5WVzc1wbaN0FibDxXA/640?wx_fmt=svg&from=appmsg)

都可以按这个模板来：

### 第 1 列

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1Hwry5tBlQMwvLQ9eRkopb1FQykRMlIQibLfkhFCVh2QibpQRfiadWJ5TTfTbQRDUY4p7G8CcMh4v7dXuEJOhXiaZrEKiaZKMvaK6Qw/640?wx_fmt=svg&from=appmsg)

### 第 2 列

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JL3RIjYnMzK4OTwTpGGoDRBPTmCSJBLZicibw1AQBSc2jSXnr3l6axdkv9ibBHIUWRDSwq2UbNibVDJvTmvwyibP0qZGfCMT0ibibUWlUA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpSzuhwib4icicmNVXvU7XXgFPwyhyRahYXTJpmjDWBjtib4ibmPbZaCvV3lo1TY6ABka8RWZfA3kSQyIUPeicJOpC82nELiaupjky6YzQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hrx7VvCgNgvniaZySe0gVLm2CeMZEviaXnqHPR5dXEGgYfyvNdbOHEEzqrMLC6iavK67V0iavGm7bOcKyFTSOwpdUhCicyApLaswZhfg/640?wx_fmt=svg&from=appmsg)

### 第 3 列

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznpHaBlMyAFJd4LVaFickcPvibd4eChAtqQmymTX97kt7SBXdJ9GN7A73qpOqwHDe9zp5DujdMia9ycA14bler5tuj21MqgHdATVUQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAflpsE6Z9OKRWG4tzb2YTjGXP6U7VICOAzib27BrcFenA2GibicbaE8m7KWxtNt2SJYjtZjJT0t5OflLAO6iaOkFjoL8SJo2GWkTNOBw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0ENhauMicoXexvD9E3XTXI3aDicZS1u7hQeRcW69l6yQibwtVlF6uZokksWLNoDUU6rSuRJYzia7YGeTLYpUMAk58DkT92mr7a254g/640?wx_fmt=svg&from=appmsg)

最后把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69gdJ0ktiaJZjLLIibGbnhtKBllGQcnYb2sN4nM1PW1spUGaLia7ljy6cEC8C5DC4Q1VZz0meOj3aGn8FqibgiaEjNp76VftfWsnbsN155BaRJLFQ/640?wx_fmt=svg&from=appmsg) 拼成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFZdYQA1JGXJdlwq0g8zzLYrjuZuyvkPfHebGX1ibbZIukVfy5ucU8VFj3DqA56gicWLXFls2HYm2Sc1A68vhozqn1JcGicbPHicsyA/640?wx_fmt=svg&from=appmsg)，把所有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRQdSu18Wt8kk7KQiaZEzje11NsUdCtzEwyYOEniaEiae5BzZMqDrwoCEDMv3SrFNeJkoZiaJ6lMSZZecsE5bp7r1nW1dZSht85uxjA/640?wx_fmt=svg&from=appmsg) 拼成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1pqdGyyl8boLrnI9KaMPOZGCqPzvz0hh8XPhRT2wOmibyD2BUbE8z71Qe9xjBOcKnJHE8FGuRVR54FLEZ1C71osgymWycXlxIiaw/640?wx_fmt=svg&from=appmsg)。

## 10\. 一个小提醒

QR 分解通常会约定 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAt5CKYkzqCBAzOjdGMBFu9L81eEVI5Y0npnrlbNGIrTQ1OIOSo3fQ2MXh3qSscMOMfK34xHm1mqCMb2dK07LhZAY3vOMV21mqQ/640?wx_fmt=svg&from=appmsg) 的对角线元素取正，即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyfIKoTf0QricrHyB4UU2NrKoibr3zLzKaNT67PwsfQkYBX4bTpiasZxx0dHyyUIpe2Qs7vJpwQ57NZStCiaIYr0dhKvRbFqjw92qlA/640?wx_fmt=svg&from=appmsg)

这样分解会更“标准化”，避免符号来回变。

下面我用前面这个矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJxtx0XVZUvlBWAt203nZfEMCT6KqlP5mtUbtYjtxDnSEMEaa6cCcKVDX6VKkuxl1RAEOjWb3N0u7xfQQQYpS8tnyI8jt69a3sQ/640?wx_fmt=svg&from=appmsg)

来做一个**三维几何图**，把 QR 分解画直观。

它的三列向量是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRZ6j3yL0OfxKviaCKLWW2mBlHRSZLWomIum73NN841CRrWibxNCbPiaibL48yXFkQk4BHBwFeiarDBIHGIich6m29ELqN961b7N8PgKA/640?wx_fmt=svg&from=appmsg)

而我们手算得到的正交单位向量是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKaVT1NlbH0mCKUjRHaPG3U1fEJiblic0emraC4RRxrianCL2J0cJJyZQRLNlSmibcmiarpXibWFktbE6wibfuo6bsEswribh4a2sdwWLpDg/640?wx_fmt=svg&from=appmsg)

## 一、这张图应该想看什么

QR 分解的几何核心，不是“把矩阵拆成两块符号”，而是：

### 1\. 原来的列向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks4Hy9BjrxXFw3fr1VaXqk6jtlvDfNVS29ib9rDvWibTm24Xia5s7SzdZVeWBmnAF1y3y49PriayqCiaegZwz9lyiafXJ4tbHggq1M5dw/640?wx_fmt=svg&from=appmsg)

它们一般不是互相垂直的。

### 2\. Gram–Schmidt 把它们变成正交骨架 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprH45ibHibbic3rZlVG3T82DgRCDcia3mZhgAdqoCicxQ1Ha3SDrYeKQhHq1o9MpWQCJbUI3aVtjh1iclMFbYKrnVc0sAPyo5DxBm9hCw/640?wx_fmt=svg&from=appmsg)

这三个向量：

-   两两正交
    
-   长度都为 1
    
-   张成的空间与原来三列相同
    

###   

### 3\. 每一步都是“投影 + 去掉投影”

例如：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpdJNHNMzjmblQ8jQqq7EDOnsuak9RVQndsLeTLa0icnxvY7zHtyKgCnpRXZCyLmYwEMrJ9R4icC5uNUCTeZ848vzsuXHZLhArhmg/640?wx_fmt=svg&from=appmsg)

其中 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtDzjvuIR3Ls8VAU7pH8p5t4CRQl3ibXl3Q81O5XicPicEpKrPmMSYB5ViaqIItqClNjkLiamaxfJPTuPX9wRxTVdPxMaVyhWUkG9cDUA/640?wx_fmt=svg&from=appmsg) 与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGImdLCjiae6f9hoeneW7icqaMr3nic8aYRIK4tkJoMYwglGSceFF6xgCWXPgPF5mgLjd8ia3TMjEUd8MOJuwXuYgh5QXoickWKfFYnPw/640?wx_fmt=svg&from=appmsg) 垂直。

再如：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBsluAumFScjCjbrSbSHjrNP7TK25ndPibN4QeHxMaVGoE0UUM5ibzYEiaiaGyU2r9vXTicic5OiaL78iaDpmTOuzlWqcTf9dvxTuy8s4eQ/640?wx_fmt=svg&from=appmsg)

其中 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2mq44HUaXCDvsD3hpYQfb9IH6UKRC5uXrPeDE6GDfnqXTFDZBGV2c1qol4wkoOJtH7MonD5qRuds9lxpjAoawmakmAxtUkkGcg/640?wx_fmt=svg&from=appmsg) 同时垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHbemERS9PvjnHyB6FdfpRvc4icSeHgPTLA8rwwwbPWXydfG9Zh42QGsNVJc8FUHWoKiaXNNVsxOIZfO2yPRHsyOlbuzWQ18q8oSw/640?wx_fmt=svg&from=appmsg)。

然后把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1SoMfDf7DF4zTFG4CY9gfJ3y6oqVpwWzPM0ia1jxTJMJwUN84foJamuyibptmMovf0uyYV6s7yOHBBd6Tnl2s0Qkibian959ciboGcA/640?wx_fmt=svg&from=appmsg) 归一化，分别得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvbzqw7cgXzibQpWHhjLL86I24TOWgwtbXrO02zWwfVJOLe2dELWDgicko9mTm8woVARKmkkC7PCcjiaRksibv0btjsAs3GEWsQdolA/640?wx_fmt=svg&from=appmsg)。

## 二、图像应该怎么设计才最直观

图里画出 4 类对象：

### 第一类：原始向量

### 第二类：正交单位向量

### 第三类：投影分量

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SO9KJxTN5amJHbiacAzIaUvYPia2Km0ICumErcBsLwAm9dw0baRwBLGkGTcibzicleEKUKIjShkvvsUA06KFrHPFvPwkZ19Sbuukv9jrBFPVBBw/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsENapEH89icZKNmg1r71UVlfsYSkIA9C6icGsEibX4OQuR3lzSP0TA0ANXMPIiaOHibjNj54c1ZiajFIcVYy8PjJF3VkIQFGt6xNRCmuw/640?wx_fmt=svg&from=appmsg) 上的投影
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqPwDpE1FAqg5vB92VGiaXgKGZSWFIhq6At65iaKicImS7flpuFVW84ITb5l73MCibh90s6V1LMKtFgn8181baGcwNeaicbW6omKd6QHw/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSYp2zkn2Wjp5ew2xzpH13yapQiaJT8OMeCURpro2NSrF1QSHxdyeibuqA79YkvaoVSFHhUNLvicKcWH8sul3j98ylcQxJ3TiamCwKA/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pXq2cvDz1tsichxjp9zQChBKRhgnWjJ1lnhLtkMll9PByTJznx4kVqrKMaGibLb4IicoA7prMZ4KFwZuQLJv8s8F1gn34CE05IoYA/640?wx_fmt=svg&from=appmsg) 上的投影

### 第四类：正交“剩余项”

这样你就能一眼看到：

-   a1 先定第一个方向
-   a2 去掉沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPFAIzHuZsdaqFv32mX9Exl7mmO31F4ickUn8DVibCf0m1tKiae8T71WV3GZxEEU5iay2FI2tpKrcT7dq28pErPJRoJqIj1I8esIiciaQ/640?wx_fmt=svg&from=appmsg) 的部分后，露出一个新方向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VjKJSqCLh697PEsXl3lgKXcfPsTVVNP0LLicWvw6CHQAicTk7dvIM1zIFb21HO0iacNfmiaiadkAxHQZ3WYsyibR8ULHEYppLvr8ial3PILfM2TFLQ/640?wx_fmt=svg&from=appmsg) 
-   a3 再去掉沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLWZv8uq2UTFF3L5Mhg5XLdxqZQSLPkXeICaX4MsyuV40eiaaQpPQvvKrdO3cdLmtbpNn87BX5eiaqcboRVzQshsE1dwy8dVYxLUQ/640?wx_fmt=svg&from=appmsg) 的部分后，露出最后一个方向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwuK1JqqV7Usp3TgzE7t9SKT2EzUIZ7onwNkLwO005Ej9dthYtcZYmEQcIR6OxLwH6T8lEIGo2Pe8ibtu3r6zQiaM8DLS0waMWzmw/640?wx_fmt=svg&from=appmsg) 

这就是 QR 分解的几何过程。

## 三、先给你一版静态图

一张 3D 图，清晰地画出：

-   原始向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaOKbuvgrMP0PBaCca9ibCbZjc24g4ruHHUBwMYVmLKDTTneqSqA1jT58NfjqeJL1KFKEVIcJx3AbrXYxHho6SXBOkYNCbhjicP4A/640?wx_fmt=svg&from=appmsg)
    
-   正交基 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt6Rs3jeYAaZye1zQTbtYRfibhib31QKstiaI4eBIJryvn1pguKjR1UUwN8Q5t2swoiaIRjZGicqeVEPTOG0ICibTkp9saZiaicc1GrHU5A/640?wx_fmt=svg&from=appmsg)
    
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZcsJpMaNnWAVvQoJYMtibpfkGZ9ym0CXfyDgdqpv5V3RonsOfvHib1YMbVjmgNZpx0TV5zHoXOibwYrw1HYIMHAeSfFtTDbryuL4Q/640?wx_fmt=svg&from=appmsg) 的投影和剩余项
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFetzHH2dRzFqAwcVlvXUkwPmBDVfG46HYs0Cksdt9XJIPuricIgDnxZRzQlHdEeVk3qLBdS1V9wV2pAFPYPcVhibL4lOial8icvsHFdQ/640?wx_fmt=svg&from=appmsg) 的两段投影和剩余项

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctCc4PtKpZqS0Da7dMMKUuIKF3UMTujcIPAufv3ID1t0fxzOAFI0Hj67jT2Z93uficyjLoyQXwU3QSDsCwQl44M1kYQsWYrt2iaA/640?wx_fmt=png&from=appmsg)

## 图2

##   

## 四、图2你会看到什么

大致会看到下面这些几何关系。

### 1\. 蓝/橙/绿三根箭头：原始列向量

-   蓝色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vf4O3sdIf7q2rIaznicHmD6bK9xReTaY98dQ8nuJA9azEjejDVPyjv4c9v5YyqsZrFWekcXNoExqwzzZhxh4aeoCXREygAra01T7KeDKX1jQ/640?wx_fmt=svg&from=appmsg)
    
-   橙色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkgxUJF8TH4mULooVUEoYVGfSGzm1JsPokYryUlzk0BWvHKfjsPKmg8IzGf6BiamDhbtT5Zt0AK7Kv5Go5ib9pgvYgOjlZjKUziaiaA/640?wx_fmt=svg&from=appmsg)
    
-   绿色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5FXwpk7oiajqNiaxlCiblHQFTwxPcxibDG0ZhUkACkL60NFbd0YOIAicGqPThCregWdsU1ggla5GyOoJyPerbEny4Ymhwck7YDTgCSVtP3EyFzNhA/640?wx_fmt=svg&from=appmsg)
    

它们都从原点出发，但并不彼此垂直。

### 2\. 红/紫/棕三根箭头：正交单位基

-   红色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM63o99F99ufSDE9IVVqaQJiakia99rfNrrNjXAMureibliaBk6GibdFdClRWsAPpsp4YMgbbw69icicwRyZDExmicmAhkKxLyzI2qHXqMAE0SaKILiamWw/640?wx_fmt=svg&from=appmsg)
    
-   紫色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiabE04oUHeWP4CTdWTN9UAvMeFU7e8g2P1VLS6VW7ZW7YAzCdTeGLmTVBINfEgkn7HvojjENeE36bCyEOG1xbmrKTPZlXgibaGtA/640?wx_fmt=svg&from=appmsg)
    
-   棕色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjddgx95mGaImUqSc3CpT7kfJLtoccHnhOHwouOfPbhwW7ehEKIW5PD9HLo0xATDH33bDP4zfJ0ABGZAL329Ntz2YiaQVWnxOibmSg/640?wx_fmt=svg&from=appmsg)
    

这是 QR 分解中的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7gL5LGicgEapMekIaPFsFKVQDxDq2H3wC3KkeOMicibQqXWArHFCkicvic8fRVL2goWAxC7U6ua5ycTvhmibXctlXnDpeoNiccSicGU9Xw/640?wx_fmt=svg&from=appmsg) 的三列。

它们彼此垂直，长度都为 1。代码里把它们乘了一个 `scale_q=1.4`，只是为了画图更醒目，不影响方向。

### 3. ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7mia3VETsYjicU0WIC9uibDlSngFsBepGBlw4BN4zWia0ZoiaMkrL36YoGgtTr7iclhv2X3PTY7x38NiaYOYVqyA3zja4rACh2n6hVibW5FFGicVRGZtg/640?wx_fmt=svg&from=appmsg) 的分解

你会看到：

-   一根洋红色向量：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppbespTGcByDcs9r13PiczEsByZlrvqw2T90vj5IStRhBxCgEIiaGP8icvhH7s7wcHB70xJLRUialglibHsN7PmyPHEHoUVjIcnOj3xg/640?wx_fmt=svg&from=appmsg)
    
-   从这个投影终点连到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9ox8uEib68wgXibAW1zRTuOricAiasiaq0ic356pib11kR3B6MF6FAkffvc9NF2mo1kFCdian2iaJtz26xGJgCz20zPfTuSpYW3EElfxvxQ/640?wx_fmt=svg&from=appmsg) 终点的一段虚线：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fUibIjZURvicO85RGg76NSSxRrnialnicPVM3pC9hlpIeuNRYFicF0FlvZkGAX3G86PkOBIgaNKMrgd3r64m4u4q8tmfEe5VribFTaGIy02LjHv1w/640?wx_fmt=svg&from=appmsg)
    

这正是在表达

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yjwNFmzI2T0UECyQgNtfLhAvpS4e9U9pKo2J7fNtPISicwGkBicTiaB22W9YeBVUeLfHSk6Tssj13Hyytadu02iciac7LJu0KpAXgSvqYOQVc3Kg/640?wx_fmt=svg&from=appmsg)

而且 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzFSX657YyzSoLGicXgxgF3iayaafIh5oH63Mm3nnYujvuRjSLQ9krfo0ibLLdE91EUYTrBo2YvaCzsr2D5pCsw9GwhAEJvib3pXMSg/640?wx_fmt=svg&from=appmsg)。

再把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S0DhFcz2fQRGxORj77vkUOdSz5sytia5NsCnWZ2xIUArNc9YDvmbMlk2efg8KWSxKDrVvyd4xFI0Jr3k8llhzpcOGJchpoxahWw/640?wx_fmt=svg&from=appmsg) 归一化，就得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZbTW8mQ9QkgicBCxl25sctmw9QCJsHk5FNtjr2Lt890qlF7cwusNiaaKfWFpZuic7nicDBxPyrkSIatlxmg8OKjBYhIMVbRrJJygodOeqTPdibuw/640?wx_fmt=svg&from=appmsg)。

### 4. ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7aMPvEgfwW1GM9Wf6hGXribHic9ZplZDxUFia1icBicC2jU0Yz25gtxxmgdR3qxxw7WUKnjibBFZ3oYXPciclpA4mKh29RNlqxkiblarT3HhxvNyt2fw/640?wx_fmt=svg&from=appmsg) 的分解

你会看到分三步：

第一步：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SpQySsPpTNmK2mnact3zOMkibkcTTdQVrdu4yH2Zj7zmsXteYbVoicviccibgBpIuOd9UlOfMMqaT6xO61H5vyAgYYOtXpvdBK7ZKicicIQOEDx1A/640?wx_fmt=svg&from=appmsg)

第二步：在前一步基础上，再加上

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1HIKPaXuros773eZvER9iaRw6fyLD1pbLfAu3ibM1RIJiclmR2S9JcjhaNMamUz8lm5NhTYFD4NdTzlAu2DKDEyEYSMAUj15Ser1w/640?wx_fmt=svg&from=appmsg)

第三步：最后从这个点连到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmc7Dkycc4Bm1A2RyfMNytKDeO58BlW2KBnTibDibYVpfBQ8KXlgqxfPkJI0rH9hDfyBQCmOmB7ibOzGYhftKibzSqb2Xhgk7vTVCUw/640?wx_fmt=svg&from=appmsg) 终点的虚线，就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPkj88eCbicA5d64qPkiatJr70VxaAHozqN72LGgYZrPEfFHFEpXjcnqfkdqFw5BLsDeiaeRhOV1osJway803taeriaCt7BOGr6dtFg/640?wx_fmt=svg&from=appmsg)

也就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYF3iczOMfOlhcicL22XENQDQGgPmBw8nANZT8GqN0AeusSvmflWddFBJJTxYJOkk7k3Jq29Ocx5LABCoj5icSZzbDQZ0hhL5D2lSw/640?wx_fmt=svg&from=appmsg)

其中 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6I07Jh69LtD7P2HyeQ2uiaqJK44kGs3ACN0jsqLFCd0lPXBMuQZzg8FaubWiaia4qlpbskOBQ71PSUtzXtlBKiccPvKYwKaoicIeL9Sal7pPhgBpQ/640?wx_fmt=svg&from=appmsg) 同时垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7AnGMqTW6XfTeDhg0ExjibZpeUoGUGFb9lo7UHDzOESziaibwXPibvaKTZiaWJ6eY2lVaXBibARjQWdE8pVh5Qco2b49Q1Qra4zOGjHWP8K4pcnl9A/640?wx_fmt=svg&from=appmsg)。

把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47KOWRL8icHIzfQvfJlfZYORByNzLAIhY1yZnOCvcbWyGXpmNDiayKabX1KYbjMujiarSkmgD5CP7EPWElGz7793b3TMllOREYrjJg/640?wx_fmt=svg&from=appmsg) 归一化，就得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4DxSUFPyX5Ku9TaQNVRptZibcOU0x4woc1zeibISOlAxPenibBtUVnO6ibic5wtfKuVyJdzKbxyweGvAzicgrWPWy43loLeD2DodFwLQ/640?wx_fmt=svg&from=appmsg)。

## 五、把数值关系也对上

这个例子里，前面手算得到了：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpOsdt7ZGn3KDNmiaUrPSGVZsiaV8b22xr535trN6OgiaVlQBIJwIicXWhrxQQRQV2S2JF4Issftic32ibeeMODNgibv0XlzhU0q5lxVoQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPCd3n9sS5pwkEuSJk8j8Iiab3ibfgpVdo1Uc65gLhRLIYONOhLWalGCVO0YVcNb6nW5LkPNV7ibIegx8glu9KVeZ4yVyPJHiaGeicgQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUqeuOvJTjoBFoksqiaAmiaFLVegD6iaoz9Ure0VAlUu1rpSyEiaMECrREXUWsic7N1ibw8NqSEeuIFILM2XmMU6xVbXSLa9OiaVkNgtyw/640?wx_fmt=svg&from=appmsg)

而 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCnnLSEUCRobFKQucRjK4np8uC0fCJEVbyoN3fViccwHBSJlSnZSFdmejKXhMuWD4W7CIibUickFUicrfDuicMKia4Ktszp0hS39CgTLw/640?wx_fmt=svg&from=appmsg) 中的系数，就是这些投影长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPubu2OjzOYH3KVSIuIqQj8Fq4Dyjrn6NPh1ubpZBeSDdIlHiaCMTiaWQlMOgWQyzDMFDFnjEWNXXcOPMOApYs4vDYh3KMumlu05Aw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf0hsoUuhxLXAjKYLZicXibhcJiaSicRqlajdiaYnJAtyvXWibW4V2pNQQ0LhicLI4YWmP8f4koqNQsmrTiaPPxReRvvvfpGibm7ezIMyPEA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJR6dRKE3ND52FMiaMtiafR3GvQo449dOKNzkWtE4hovD5gVLia8ibC3bxbMEhq4KeXsEoAHmotxMzRiaJWBTHqbyyblo4KPMiaCVZ3Mg/640?wx_fmt=svg&from=appmsg)

图里那些“投影段”的长度，本质上正是在可视化这些 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHM0ERMA582XeibicRdMjFnGdg5FPcMzpDXesorNQAibhkANMicrhtCSBtoGyyG3V6CmG22RDicTKuialh1QOmqvibUibt2T9ibFPyanumtg/640?wx_fmt=svg&from=appmsg)。

也就是说：

-   Q 决定方向骨架
    
-   R 决定在这些方向上分别走多远
    

##   

## 六、更直观的动画

静态图已经能看清结构，但 **QR 分解最适合动画**。因为它本质上就是一个“逐步剥离投影”的过程。

最适合做成 3 段动画：

### 第 1 段

显示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ACSVSTxskVfBtMlaov5KeDIjv5HA336N09AEC0XD7rEYHrWJH2k1fTzkPIsy11BjicyGrQqdoialqTvDeDSJiahVaibp05heGYticbsCj0iarh9xA/640?wx_fmt=svg&from=appmsg)

### 第 2 段

显示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47BZaMtxWw3RS59xhyICKZt4TboEQJsWAMUO3g6x7XHnkviapWYx7YFUJfD8eRfjFoDAgHicAsa1TJibZZHdYNUZ1OBQyb9Ov3HribA/640?wx_fmt=svg&from=appmsg) 先投影到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb776eaMzSuh5qeria8KedDFNusOiaPCJic63CwciaDAzJiaefaFUF775jdUqYK131ClgUn4eaz7f5BV1r236M9umOa8QAk669EGaLPI8A/640?wx_fmt=svg&from=appmsg)，再减去投影得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfJlhIibIl6704jRZziafUqv6PMA9PxFlibZdicMtrImenjZrMl2jgpbIfCfYOuI1TFibDlt5DhhIljH5kT7ia0wf2kxsvE5Pk9Lxzu8w/640?wx_fmt=svg&from=appmsg)，再归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf6HGSmAviarQvfBSvBc51b3FRAzdZlttUujPTCDY9gL5nYiaCdwhnx7kOke7uUEsP89GLOgYGVezGeLiaUqLibpcFf578KYU3AX58g/640?wx_fmt=svg&from=appmsg)

### 第 3 段

显示 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNa2ibaFFGUib6keSC1Xd1JZhJo5DEckNAIR6N4PLFZoIn1muDxZddImGStKpbyuFcIaNIfpONaYlatliaV229ibr7ajPINibclCJbJw/640?wx_fmt=svg&from=appmsg) 先去掉 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaVNY6BBk4QHKMWLp2VaUcVBfYWdOYxYkDsCaOVL9jzSGqStc2059WZ0UnQsv55avkHDqovicJY2BIpPqksQu0QKWG6HVDJTDYng/640?wx_fmt=svg&from=appmsg) 分量，再去掉 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2Zavic7AGR4NwCz8ZmAHia3WWwZdXroL79uia1bsOxMExAHeG0X4pXcXERg9ibicr9Xoqbr5Zfd9qkmMdc9PApSzxTXgSu6IPUSewsTg/640?wx_fmt=svg&from=appmsg) 分量，最后得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfW072j75oFClCmblhRe5kIjqYzsS61QpOMp6xZEPmk1jGTWrq1ybUnkqM3EvtuxIlMAOhUXibInNf6qjIJn4ibiaVl1zydcRoMWvg/640?wx_fmt=svg&from=appmsg)，再归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIVEWCfGOHqdFXaPocRcA2iabDKPytYZRxz8zybIAuPEIYl09urleoGVFCQJYLAbKeGfHmcfLaialwpYZVnicJDgz2juokRW1ApYIw/640?wx_fmt=svg&from=appmsg)

这样你会看到：

-   Q 是怎么一步步长出来的
-   R 的每个系数是怎么作为“投影长度”出现的

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/sVzeakRoocsd6zAGMT6VhCKiaE9cL3BcpGErfOKD2ZlCjhw3RxZQx7A7ibUXuQTYfHkj1FlumhO1fPJlLHOCPmfwH7ewupmB0RX5PQ7fKW3cg/640?wx_fmt=gif&from=appmsg)

这个动画会分 3 个阶段：

1.  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqttRicCOUqpszoeIKW7ib7kmrD6iceTJ4RCHPIWuJVCQToTj4VL4yP2cOl8Pddk70qTnCibicf83EE9GyKgksiaUBavfdZibZBnsO0Lkw/640?wx_fmt=svg&from=appmsg)
2.   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EsjF1J9mGjTxMLHnT2GkSHIflxoaQGhbkfOIf0tQLNOccFsqA90kq6QJtTmcIOT025YCVcRuicEQvZHwrMCKHXWgqnnqldlkFS36rrMrgppw/640?wx_fmt=svg&from=appmsg) 分解成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69gdJ0ktiaJZkibicS1XsYExSmibajvEwRfqesicTjB6VkpyxHlg2tsXtSictZlqq2dXx2S7qYTJyVX3rtEJzWTvU919BBfPf9Fic1ej5lgM5dJhP9w/640?wx_fmt=svg&from=appmsg)再把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5PdRxpWCNEAoxbrw1UPEPRc5jc5LEmCoSBdEsYSltial8bgiaaiaVvwUOMvIKpHicZAUNg6icIHtqEA7UEbdYonkeSjEDBpdWBOZGYzicwwmHTTlSQ/640?wx_fmt=svg&from=appmsg) 归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFQpU4YeeB3NafkuP4PC5JD1We2v9WibuMzyJaI2zP67WW4ic5rw8AObqEPeZosgF4qt2PgP9BrDhEIW6WiaNCqUeIzOOt29dvjB0w/640?wx_fmt=svg&from=appmsg) 
3.   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSblezM38Ety4yQ2t17rDmBVVP25RM2h2JCmOemxOfeWnol7WW7wEgntl06PB6M4qibFNvlHKh5VwQUZC8XZ143F07O23AqibrZQWg/640?wx_fmt=svg&from=appmsg) 分解成![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm201JQ2h8DvE4xmLXLibWBL0Q7CE238OfibHUJ5LMRyY9X6KnfxDq45hL1VZYiaDqTp3X29HOybQBbMdu3LC26AsxJwicYwvicpN3Kh6A/640?wx_fmt=svg&from=appmsg)再把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dMFXPicicvpTuQ09OgH0I42jJpMmVsPE8rUSxgiaSo2x5OuKMjYPTtpcZqeRsMekuITBHlrc2OgDiagTnKcSicKGich1GibFRnHjcRc2Q/640?wx_fmt=svg&from=appmsg) 归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLS3dK8S38ic7dZro4M6wj6soibFfUv8nY6BDB6XYhanovtJ8lzSQFFylsBXxDpDgkFBGF5doO5L6IXYWL9LFl0JJWhWAU4iaFCo1g/640?wx_fmt=svg&from=appmsg) 

##   

## 七、这段动画代码会展示什么

你会看到：

### 1）先出现 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5qSU5gtU71icSeXPxMv2jDHGTSfibAMpTGehPK6fqq3n6y3IyfCbQ5GxiaoL34bYatOefSZGyt9iaeuibeBkpW5Yr0QdfrM1K019qzA/640?wx_fmt=svg&from=appmsg)

第一根原始列向量先出来。

### 2）再出现 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5FXwpk7oiajqNAt2muapee5gDaLbOZicaeKKMuiaiaxicU5I8p0DczIYTia76jiaK3H4tvrsxbZQUm3ibEfRsqUhVZykcLPbdy6UZKENG5O4eZ28TZRw/640?wx_fmt=svg&from=appmsg)

把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThssF18ficRtic5w658iar1NgtPbDzo5v1XzR7zgGfxgTTzhneQaeibkHxfMPRib9KetgqWibuhgkaNGEbpCrzaicibUwDjrWMPYN1KMZ3A/640?wx_fmt=svg&from=appmsg) 归一化，得到第一根正交单位向量。

### 3）然后引入 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbrWsalrRtY33XTy9FoUsF1YeKqKyIS563qibtHDagkuib3RWIAs68VlRHv1yWwxhSaYGicaywmt9zdiaNIFTQmNCWXSxNiaMES4icw1Q/640?wx_fmt=svg&from=appmsg)

接着显示第二列 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoKibZ2GGoUPBicotQDXmEfdDH9rLwYXTaAMZ89PDmc0eK8ROSAgia9G6n1icyLmd7pHvmibpGVSYanguVcWbglictZVc1Jfx9icfUkczQ/640?wx_fmt=svg&from=appmsg)。

### 4）把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxENtwJmvHNBg8aVG8KwfF4eyv6ocg5w39e6rJTKTr8yia769riciauPptNUMP6q2NLTrmOf1ZIwolibDA5AuuNQo3o1T2BlJvMgianrg/640?wx_fmt=svg&from=appmsg) 投影到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfDYhN6cQOlqTEtXUibzGKpOCCoeMBIVA5ibL4Ao3dGvE9rxSf3G4TaCLdBRNFjjSiacNMXgZAy8wKupPLwvB0miaf5yzDHZVgpbAWQ/640?wx_fmt=svg&from=appmsg)

你会看到一段投影向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdaU9kNTnO6AKgiaTSEl7iaibTCfhuUeumMTeYv61k4Gd3CVDu751IQLIaibChiaBEuxKTZ5B1uzyNdnO2Ftnwth2ufDXIumlMZ2rrUg/640?wx_fmt=svg&from=appmsg)

### 5）再显示剩余项 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmQ1S0QibictMOUz6fm5sXl53qP0FKmTH6ItyAp3OwhuiavIujqUWIgW6TbektOM7Dtic370evia031n3YAicwHhz8uNC4suB2x2Q0tlw/640?wx_fmt=svg&from=appmsg)

从投影终点到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59uXhfsorpcticL6ZDbpQvm5woVI01Iy2cWaGhbFUn6NYKQMFLPib55SlkiceSF5onwfapA3LWQr6zvH2T855kWlNTA9N4PHpVxER7Zp6yRVSWQ/640?wx_fmt=svg&from=appmsg) 终点，会出现虚线段：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R16NQO2Yll66uuYJpVLzeAX2WialHOAbk9xhQeM3q5LYbaMItM7AvdlddY3HlJN6CBYgZQwD7atg6RKGnDszIcVjBJf3sEw0iaUXQ/640?wx_fmt=svg&from=appmsg)

### 6）再归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnESE6VOHzgw3lia1XtMibC8RctvibOc4Zn1AVCibkUBaNVM3s4OpicXHy1S99r0VRqIet84ujP6AsnfXZ01u8oYgCqGCoH5nN3Mwic7w/640?wx_fmt=svg&from=appmsg)

于是第二根正交单位向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyR4wfyZia0kSDWCPzR2WY7EAn8SCVSlKne5LchXvJSzKLlNFwq3Et4XibPVusIyyJniaEw7eL9qdC2DBt7ibpUSgegNoEw3mrWh71A/640?wx_fmt=svg&from=appmsg) 出现。

### 7）最后处理 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhRwczNOcaNct9lTR0V2xDmCAUibghiblEO5HxRgSuhs0ThicFribQHSfiaXzSAGOPtb4Do3kAPgYicfTicAZQibKyMmtymw0spibjqXN5ouA/640?wx_fmt=svg&from=appmsg)

同样地：

先减掉它沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXhpGgfyElYaCKkH73cefd8YD5z223Sa5uNHF6p5fTbjxiaomcqD6bnr9zrPBNx39pLKaE3We7YDEicwuotrfypMks4YbRh9LRraw/640?wx_fmt=svg&from=appmsg) 的成分，再减掉它沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmeYzZP7OBgtbxSpibUgMWlgoCVOxD5JwgtYu5sKyrXzvQothywD8ZnjvkEHiaJJT3YcJHyv9YGwkBib2fca8CMDAVlqfVwZiaiaxHlQ/640?wx_fmt=svg&from=appmsg) 的成分，最后剩下 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6SxMSQ3QZtZhpSgPrWN80QL5ty8kzSiboZY6Dzpj0Uc0ZmBiav0OjeOQibibUNfxiba0ibagICaLCEWUSBicEjM0HGIiayNfwAK3ichQm4Qw/640?wx_fmt=svg&from=appmsg)。

再归一化，得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgr7w5zaOlJ7TmPONUeZEq01z4KylFb2q2IrLpOgRkB1uwQqlwDmg2KeiabuiafbuWWxRjbiazPI93JsYNKyBQo94UZYF27PaqazUg/640?wx_fmt=svg&from=appmsg)。

## 八、这和 R 的关系

这个动画虽然主要画的是几何过程，但每个投影长度其实就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d65ic5nD0Hy3YtLy9fWRNB6IKlk7DRibamSOwEZDgarSTZmF80lSWnHsb5Uwjg4299icd2ojLRSficqlCLw5g5Wn41C2ibvDHNPLuSdw/640?wx_fmt=svg&from=appmsg) 里的系数。

比如：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWnYsv4BqEOy5D2wrXgap6vHsOYiavTdnL4QFo9ib5KZC8t8aNtOI8JMmgGhncic1ibXPd3csOGWD69xibzcDA5GC7ZI7h4vG68VRwrQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnbAyMwgEstkYU62HX0Cq5ZsEIjh4lEVia8Fwiaj8ic8fgicB63awmC8s7RfQDibQOetZM0IOEnwxf9icz4LxOzXqicgNNicQhMTB6aNDTg/640?wx_fmt=svg&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwrUFrxVtsqa4Uh3tzibEV6wGliaLicJgX6r4RdRb4Y9NCKAbntcYtOjJRSe52OTgsI3S2S6G4ZmAmiasgkkLxIyLjfPZQlW7VjEVmA/640?wx_fmt=svg&from=appmsg)

所以你看到的每一段“沿某个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9ambsSghpicuibfsB7pv4O7zkLSQzZskbUiaUHHPKayhlRtr1t0kicV0Q4MySQ8b4OXbVQs35EpH1K6oUc6AfQBsGZkYb2RuCLHVgMBQ/640?wx_fmt=svg&from=appmsg) 方向走多远”，本质上就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiabzQ6paK5hhJibGrvH5LaibPfQg5uB6UhTP5Aia7Zh4fOnBSXfV6icWmmGRyPz00RicLRfQMj1VGVVdyyB6MEgFKVyI9f6LRwomHaT5Q/640?wx_fmt=svg&from=appmsg) 的元素。

## 九、这个例子的最终 QR 结果再对照一下

这个动画对应的就是前面那个例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4VYm20nB3jJSveOndk8hZJbYggvS9L9N4AdjCiaArBdHzlyr6PB3wODnpEn3gQT8GfJfglgwYJibbJP1NEico7ibb1gZDjmDwicqdDFM9kQGaFe1w/640?wx_fmt=svg&from=appmsg)

得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKaaxdZVL1Qte07c7PWzTQUvo47hxwvV2bGqtLKM2ynS2YncyN7ibWYoJ72Lta1y1l1lXYOW0WPPibdUItUP1ATlVrQZ1UokMJicCLw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SpQySsPpTNtc024OHLUbhEoOarghSuV2spY4VXLHmicGZib8jjRz2ibC3YPpTibNibWnxaEvRc0YccmhTGd1MfRAq5e5k4gicwVicXYPt3lAfQfMdg/640?wx_fmt=svg&from=appmsg)

动画就是把这个分解过程“活起来”。