# SVD与伪逆解析


> 原文地址: [https://mp.weixin.qq.com/s/VA6ArOBFIfkCV3q3dCezbg](https://mp.weixin.qq.com/s/VA6ArOBFIfkCV3q3dCezbg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/sVzeakRoocv2sib4fl8YRqyQ3LvczicDicZR9BSEmdCibibZqWBUfFNnia4vgkCdzMdvY4nGR7QUE1DBnafT0cOrFuVzibP4rUXZhPicpqicQER0a9k0/640?wx_fmt=jpeg&from=appmsg)

图1

这张图在讲：

**如何通过 [SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487099&idx=1&sn=3aac67defdec06bf100046c43f2fe4e8&scene=21#wechat_redirect)（奇异值分解）来构造矩阵的 Moore–Penrose 伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovgvictvTRviaajRUjtySGibvjL1GDMia63iacgrhRxtia8asOPibib6eWtW1uXxchUMCT1J6sdX4QeXMOibFvoLicDpSjhibh3TXGn1Be0FcxQ/640?wx_fmt=svg&from=appmsg)** 。

* * *

## 1\. 图中整体流程在说什么

左边是一个原矩阵：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ1DLCRxlJLkE5zbOic4OLHmeO14317AO8GoTaXAa7Jcia49IFVF1YPJsSttZwrZZDia9vQVP3EeomeibOnNPLeO2QViawlOiaGXiaEYRQ/640?wx_fmt=svg&from=appmsg)

图里用红绿色标了它的尺寸是 **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoWEd8UGetw3xghxv1JaB6gTSKka3XmZy2gcQ32drUEpgeznibvSlw9G16ZENcl3TvuI8Ta8EdG981ibkaJnic1uL2R6mics104bLvw/640?wx_fmt=svg&from=appmsg)**，意思就是：

-   A 有 m 行
-   n 列

然后把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpeDqNnC0pdqnicO3ZP5Og8GiaVrMgItgckfPfUCGu0qUy0Jg3wZQI7zNSDUnsFIuibkOqS867MPXRRt8FrVxIF78wbU249vqzY07w/640?wx_fmt=svg&from=appmsg) 做奇异值分解：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIhS4IITe8Pr5DzWzfiascNxVWc9MyM6DKEnstV0Io8S21YUPvenxnh4jyMvwz3lViasM1og7g3JwciclmgaP4jQqNZia9OEicAiadztw/640?wx_fmt=svg&from=appmsg)

图中右上角大框，实际上就是在表示这件事。

接着，由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThqN68LMPHf6SibBl9zqs3Y1HDeX9NkL5fZibywtwibe6yUs7spX5s8qeoUaCDVuDkciblPC67jIdyTPic9WrbSibgFPYHjyN58V8WAog/640?wx_fmt=svg&from=appmsg) 的 [SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487154&idx=1&sn=b028794219010a4b49700210bf93f951&scene=21#wechat_redirect)，可以直接写出伪逆：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPGro1GWUeruqgwjhICYmZ4wvTE4tFichJMoZwCCqjU7kKT7o3gEofk3R551XbMBjmF6iceeu7r6dyVX3HN2ib5W25BjicZTR3uQCnw/640?wx_fmt=svg&from=appmsg)

这就是图最下方那行公式，也是整张图最核心的结论。

* * *

## 2\. 图里每个符号分别是什么意思

* * *

### （1）原矩阵   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4D36m9W5Yk6IJEJhD5QuKe2dAfCLLEKPDxWfFrgM4UZKjfyzxRKkh5MZmqNvnjO7tA5qMRYSTGej90KDQkjbqPcejnERxTIHTA/640?wx_fmt=svg&from=appmsg)

这是我们想要求伪逆的矩阵。

它不要求必须是方阵，也不要求可逆。  
哪怕：

-   行数不等于列数
    
-   或者秩不满
    
-   或者本来没有通常意义下的逆矩阵
    

都仍然可以定义伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7zmBEpRjw3xsegEvtRhnvMiaesHcpuEtIUYNtSwzcAOuDnIwvXcq6e0aB0XicDHShC2L1IQLaRiadLI4Y3cTCCzvR0tEoSU0icWf9omhA6g9YZqg/640?wx_fmt=svg&from=appmsg)。

这正是伪逆的重要性。

* * *

### （2）[SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487629&idx=1&sn=d4f5d86e3152a876d6ed5a9faa1c0f06&scene=21#wechat_redirect) 分解：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaCldfQ5LEY4YmXSJU3xK8RjZm21P2jZvfQfIKPFCEVX4qEnQtUoT4s1XnVsnShSku1LfBa1fppbwQk0phnRFASmNH8HxBG2Zwg/640?wx_fmt=svg&from=appmsg)

图右上角的大框表示把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEyt7AbDr7pwqicYsJ0giattH7P4Ikv9PATOjMA05IRZTpNx7lPkqphTxxrrDD2M5qNNAsxQjn1ZeoIwVXbZ6FmqFlb9anK3KLK2BSg/640?wx_fmt=svg&from=appmsg) 分解成三个部分：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965fJ3Iw91QO4pVaYqGXjuxqicFmgG3iaYtkYdGTbsJ4JcpQkb0EicsV6xiamHkosEib0hEnUVpVRMtYptGvgg2HnibEfwIsQO4rKugcxw/640?wx_fmt=svg&from=appmsg)

其中：

#### ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7zmBEpRjw3xtJoibdxKdIAnANFicubnGrNpsVNeebzdWWAnRA8AST5O6AMDtymcwZ6ORj854rFIJKl1rQXT1wRk7lYbouoAgstybG4a1tBv5Yw/640?wx_fmt=svg&from=appmsg)

是一个正交矩阵。

它的列向量是 **左奇异向量**。  
几何上可以理解为：输出空间里的“标准正交方向”。

* * *

#### ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbpZibMShvjF40GtxbY7s6Jmib1mIjKwO5lB8I0Hicfumjgqswd2BtgLUoAOjohwUnFgNwdIDqKf4Vv0oZ2kW3E6ibPBJ7bTk4pUBibw/640?wx_fmt=svg&from=appmsg)

是一个“对角形矩阵”（rectangular diagonal matrix），长这样：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZbTW8mQ9QkgrAyDWibawNcEiczeZY7X2vNaHMOP6lEPicUDDSdouiaEcACLnwGUIZZp9GsOFGzu2uhGIiapO6LCJnYbyDjlXmCPcwrMl9RlFPEgg/640?wx_fmt=svg&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbvBxKQVlfjklZSarvZM6P4aHbiaLQjbLwZ6gpsFJIQs0ummdXES4sYja4ibUczzlfoLibpf618mzL7XWguXrIFbGMcAEBTcp9bCJQ/640?wx_fmt=svg&from=appmsg)

这些 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdRPpw8FAkEkx8ZDxnlQFqO9Zib6Lgzh73NNib0RexuIkI2HaX0DBicOciaWUwwP0ibc2bCRnjBiaGdmPTflGGhiawNIX4oA53QHhotB3g/640?wx_fmt=svg&from=appmsg) 叫做 **奇异值**。

图中在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7B8nVEBQSs9dOfCphicribfN7sVgUywtkNdsuoib5TxGmibQrMUqYU6EWa3wpt7ichgpmkhh8lHT1y1EfONptrz3fNztdpnmLNklCCNvp5zRcXblQ/640?wx_fmt=svg&from=appmsg) 的旁边标了：

-   上面黑色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4oiajibshD8LI6icew21GmDxyTic25qEaRWvl0J8fzMEqYD7L2XOHDwT0N1p8D589yqkgPvwGeboC3hD0MIZBhrjed61G2tfX724icfg/640?wx_fmt=svg&from=appmsg)
    
-   下面红色：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9Z15nnTQWwA5h0BQjySQPlNT4ZGy56NL2sUgRaJLztlAV7gicGYJiaibHsMXVaUMLoZkYfIcBLIAnu3204K0vgoicicYsja5bFYXpjQ/640?wx_fmt=svg&from=appmsg)
    

它想表达的是：

-   U 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxH4EeiaYw9EZx0mFJ2yS8j3KnmaXArEg3dPAxzcxSrxYuiaAAvicUd2zHGLyqXicFrviblW4os2VKibyRaDk5umPFJhpKg8LeziajbIlbA/640?wx_fmt=svg&from=appmsg) 
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLZvMibGBQffa2Zt039K8YWexjoiaF5xvdKgUDHyOVzY4U1hKQ6J3mlibkoZZX3VcCuFUuZZE5iaWtmAbyRjLd07uicqGicia85xTZE4FA/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPueG8NAFiayaCoXJwLsHdrFraA6xNpj6riawDHUoGsjPdYFaxSXeSszgM1hA4ibg2hgM1LobiaX4rh4yiaBBNtzDFhS6eibPuicYEdFibLQ/640?wx_fmt=svg&from=appmsg) 

  

* * *

#### ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7mia3VETsYjicWzoVgiaFxC8ECYurXI7jQjh1fQaKZS15yQQic7GYYSg8VKbJ3zJuLQgv3A54UhSUk0BaOj2YRZF9gfIPqpyO2yWeVcciajROHKiaQ/640?wx_fmt=svg&from=appmsg)

如果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnbZNQ40D7YibfkE1SRjsia9EvpYibW0BbfAIsJJY0cIiaYdlfVPb9X5nGta0dIoSQVtUicsdkMibFruxfIqMcVKOWf628eEW2CSzhjHw/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWDzeoeum9PJbj4P6xDlw9KuHAm0UzBc5JNVHcrWvGdv2lX3c3U8ib6kECmse1A3a3z3NrSfL43U6C0hLzjRIk8zGj7IartskULg/640?wx_fmt=svg&from=appmsg)

也是正交矩阵。

它的列向量（即 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSTxzWxWI0leic6tdXNokOER3WZ43Pa3qHf0zz63NAnm9nWygB7FFSEic62kAHpaPhtWXNbg1jWDgTFDUKqicT75KRUHrzsVE01Y8A/640?wx_fmt=svg&from=appmsg) 的列）是 **右奇异向量**。  
几何上可以看成：输入空间里的“标准正交方向”。

* * *

## 3\. 为什么伪逆公式是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtYJsTqice29eibBVUfJ55B7IhAKL5OUPIFzF3s2Hy1yuLItKnib9RyBPv0CJgibInKths6d4FfApeZCaoshNibUskEy87EyicT1TksYg/640?wx_fmt=svg&from=appmsg)

普通逆矩阵有个熟悉公式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lelJxu6icj6ic9hGQiagltXP3JeHc1rIRGs76ORllRZgz7LMbnfEUaxTkZ1Oqr9R0uYjEMSevobqicoYPNW0SpzPIxIahR1d4FX4dlV1tQYHeDQ/640?wx_fmt=svg&from=appmsg)

[SVD](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488029&idx=1&sn=97300fb3791661152de7edb0f981ccd0&scene=21#wechat_redirect) 虽然不一定每一部分都有普通逆，但它启发我们：

如果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage70GPYMm4GodCsF6JfBEia9iad44pibZ2GyIQXIkHESrA0J8oicHT0NY9ibk4icvw7QJ0SYHT20m740e7iawTMQu7wibCz2dpqicqcOvk2w/640?wx_fmt=svg&from=appmsg)

那么伪逆自然应该按“反过来”的顺序写：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1Z8HGnSELSibCPmBxW6rOT58RP5rxI8zBlyWRKdwibMia1iaJ2B5lUWsPIYI8PJ2ebxgUDnluKZm2kX67ULzFnJM3TB0fBFJ6CYqHw/640?wx_fmt=svg&from=appmsg)

因为：

-   正交矩阵的逆就是转置：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5O0wvqtIOSbuZDdKueKfKGcpxXPXcxTpEtrpYHkqWmg67BB07ibMFkLVhKFxqFMTTuxeT4bXUdJBh9cukVUPGK06bPmToFmVA3gibEUhXQ9s7w/640?wx_fmt=svg&from=appmsg)
    
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EsjF1J9mGjbluwWSdxOzicmxVkVmqxO4CaY3tvJBS6iaBCX0ib1SqAS5tXNOsib7Jb7Jz5iaM2K6XUfUjr0XQJmsE29iboibzvzUsbU6JDNsXCZbMw/640?wx_fmt=svg&from=appmsg) 不是方阵，也可能有 0，所以不能直接取通常逆
-   于是对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM70Rdb4ngSBia9CbKTIsXXE8TaGtBOYzhchn9KgruBNmRibGEmSy8htQvDo6XRsLgT0OJs8uZF42QWoMwicGetYcsS1Axow4X1wyBljdpC5hia9cQ/640?wx_fmt=svg&from=appmsg) 取 **伪逆**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoE4jB27iaeKzlN4YlBMbStfd31ic2TuKZQGmuDXO1y0qgA1dIlWxWW6tl8o2IvndgbbGSupIibIJicic7qRbegFSf8z90eDhVxWMI2A/640?wx_fmt=svg&from=appmsg)
    

所以得到：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKHxey6dTmqRkRwIbiaKVoUibnWxO67wVwuGVuJz6WnxYjNTjVBwg0Oej7h2naanrTesPicb6r7T95YGLkmGW75F08FLhwK79px78QQ/640?wx_fmt=svg&from=appmsg)

这就是图的核心。

* * *

## 4\. 图中 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLdTKCkTQamY2BqqGwVSPpjeh9wmctR0qcrIvlDx2tyh0oulePv06BAgrgjAjibFECAE3NnPJAFKR2OOtQJWJicZsaANzjyrl3nTg/640?wx_fmt=svg&from=appmsg) 是什么意思

图左下角那个符号是在说：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpdIiaaIBpEoO3HLbwCvNRTz5d8kbiajFcGZnlUOvQFTNAol9wH3qLZgCuaWBiaUhGvHkRiavVMztEIFzPhoB9CKcZIYoG3fokt97XA/640?wx_fmt=svg&from=appmsg)

虽然图写得有点简略，但本质意思是：

> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3Lrsz1vOIHKHI0T9aicLNYS6R00ughedYAI3cMlByZTVrwbV0CRFV3lwTeWLXP09VqAPlSGdmrU7WdhPBTjG4Kw4gJB4dD8kqnw/640?wx_fmt=svg&from=appmsg) 是把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Stq745daCfhbeoq6yVdibBiblGyPxnjic96yDvLQ6Hf2WYI5FIv1t7ddXIHoXwK3MtTqC1IA34sJasYB4Kld09Qle856xHdwLNxLUIAYPo1Itg/640?wx_fmt=svg&from=appmsg) 中每个非零奇异值取倒数，再把矩阵尺寸转置得到的。

如果

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OF68Bc1tpDmCLszAc1ghBicwtxNBRqUpvHqpTSSBIb433h1gSZYsZOFu8mbe9Hic1ialmXcKMn2llibZNmSBDLqWZgkVkqZ80JkdM2w/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d69DiaFtbzAJJmOicEGJyoF58KflZYEVlfDmWZumAWxQOFvWskcVvyygovnPXMq8rRQO9xBadB18NhrGWld1TjboqRyBmBeZLqOSg/640?wx_fmt=svg&from=appmsg)

这点和图右下角 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWr68Uwo3qGjkjfUB8Ve9VgfFlm0nGwIuD6Y2IF3obrZbe197R3VXNF2xp7ibfhjc2ZhaZwhF18EE9victibccJiab5YYPKCbb5xAcA/640?wx_fmt=svg&from=appmsg) 的尺寸标记是一致的：  
原来 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibE6SCcuPYcNXzXZTUuy5dxuSXTGSGHWXaWBj4j8svub02YtxWpnK9HaxMLickAYW89Ed6qeqxYUvtsSmPgcDOtia7scdEPKNQUxyg/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL2X4UrykG3EqK053EA900QAyMBMt9nMtXvwcOicuqHrZoxNria4tzdIAnNfGc5VBkL2IRUWKiaImCgjB8qIaq842ngibbJUGYZMvCw/640?wx_fmt=svg&from=appmsg)，伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1GqR4l9EM2cs1EOFDibo8BB9WXncA9wePnbwF9xbI2E5x3bzZg0tibffvT8h6icy6OH1rpqhkibDh1DZDyWdqHfOHibqJ71JXzkF4QA/640?wx_fmt=svg&from=appmsg) 就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4ECdbNw5TDyULTjfRicT6xic1yTe1ZDTTeyxahJONsxzQf4qekXVNcdd17ddD8lyP6ZEqjMDsGHicnYoxnNwY1FJpjyaibnpRxic2Vw/640?wx_fmt=svg&from=appmsg)。

* * *

### ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNSvdZOnMe43OM34SfSJhHaHC75UtNTA6seYq4GJuoiaNbnYWLB3Ch0RSEFbtYn5ntr414vnErnXPWtctaDkJCseSUaOr9xhiaoDg/640?wx_fmt=svg&from=appmsg) 的构造规则

若

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjT4pPewkoVuE8YeD1d2hYdcaEW26icvvaQBzPniciaBhDMeDibCGgXYkf0eYbcou5tHtdld9ADpOt0Crhj9yoDhVUlia1Cah4pCdC00w/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDHzf61mnWSictVnicxcsEYS5ibiaYLI9EMF9mhVuOkaObpicJiba9mqa37GU65GibR65WL05B0Nia6k9Ycb9rlKA0Tfr6qItCKedtmG1f3g/640?wx_fmt=svg&from=appmsg)

但有一个关键规则：

#### 只有非零奇异值才取倒数

如果某个奇异值为 0，那么对应位置仍然写 0，而不是取倒数。

也就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQuRXR491HQErv3B3HzlgbnkQhR4akKCjRibom53YyOm3CtKfibwutOQjo9pcTm01XWZTUGkOkg7lYApOJ9XCzyl22BHSgia282oEQ/640?wx_fmt=svg&from=appmsg)

* * *

## 5\. 这张图背后的几何意义

这张图不只是代数公式，它背后其实是一个非常漂亮的几何过程。

对任意输入向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKV0vczRL7xzwTtVicC10bdIuiaU7gX1crp2UiaicSyAVgckKpkvSvCGZgYCTgYFv3bHOlhYezoIPqjIDccLU2dM7m218SC4Ro1aSRQ/640?wx_fmt=svg&from=appmsg)，矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqP9bv4NVT6PwNQ49Uy1mc2ymI0ic0bu813r5L6Bm7xEJavom10JTBrdxpb9PB8RpicNKtpsjYo0ofIaDCzoUo3RC4zprQ0Mn83qxQ/640?wx_fmt=svg&from=appmsg) 的作用可以拆成三步：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49UGeW1q7sCDlAHsJnBAtwffOibFreJs4VAJM5JncGaGwicobPPmFA99gpR9cdlBJUT4H8e8fPzE54jPjApicaBLo4zQUtnTB2y2Wq6eKPwibOOA/640?wx_fmt=svg&from=appmsg)

也就是：

#### 第一步：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1NbY5djeCATBhfaBd0tK3SOWCKbbDJUZpz3WOkZiba0EJJcTEMnt7nZN4qqPfibM4JYQhCehQy5HHenkcpJv5lLfQmpKtHOcgt2Q/640?wx_fmt=svg&from=appmsg)

把输入坐标系旋转到“右奇异向量基底”里。

#### 第二步：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSV12r4Ej6B8o5icuuFvkLQaHYfxic1qLTIZEGkgSwlOiaA8ShicAobtibTgyPUibI7ePoiaHkU6LT5CeDvrhS5ufRtiadsgHbdojRfPp5A/640?wx_fmt=svg&from=appmsg)

沿若干互相正交的主方向拉伸/压缩。

-   拉伸倍数就是奇异值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks1UlPLL4iaLBJ9iayIz1sFoNicz1Qkl1oiadUz18YzoicSh0icWYhejX8b4zR1Dz3ZQfibTFBkLZDVq5CsKf7ZdgaIaoD2ULsH90ktLeQ/640?wx_fmt=svg&from=appmsg)
    
-   若某个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPar6tIry902ZHZbTC8PdTxibG9IyicEuGlekZjYzKaib8zZZSVtwEwxeK6COvIn2hNOnAaIqY2t82WWibFKDgBxQ79g1GMfI7ZOAoA/640?wx_fmt=svg&from=appmsg)，说明这个方向被压扁到 0
    

####   

#### 第三步：U  

再旋转到输出空间中的位置。

* * *

而伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFWMQPvun97icnicAJ6eAiayEMKBO2FooWRFb61s4avJdWmHDClVSjkbC5AEEmhVDbj6Chy3Dd7MqtJGcVb2iaohQAvksicLmQ55RA3A/640?wx_fmt=svg&from=appmsg) 做的是“尽可能逆回来”：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibOh00f53PLuUgWuBvjVXVfZkLUQ3ahMx0YCH667cENo9TCZMxSp026r0o1ukPS8oiaE3PuKIhzPbf3752t3Xnb1W0jNq9Pia5L7g/640?wx_fmt=svg&from=appmsg)

也分三步：

#### 第一步：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb774kiaB7iabGTCkFJdJiaTjPYdicibv5ECiaZsaR0dNYENKK7SbJmuxPNHt9DTJB4d85Tora5AJouc88TvQgLCibrLsLCJNbiacqwa8iciaXA/640?wx_fmt=svg&from=appmsg)

先把输出向量转回左奇异向量坐标系。

#### 第二步：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fUibIjZURvicHJ1cd0zsCCiapJ9lkDDfSOZadM6eOGlUvAQmHU3zSIgVHVNCffmpziajTdaCZ4Yib9LlYkTteMeic5WCSbF67dEFjWEkByZ8icYv7g/640?wx_fmt=svg&from=appmsg)

把被拉伸的方向按 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIgIFZOTk1mFUl02dIBCIJM59YoT5WXeFPTJrG29DZwUbXDGRT6Z2o6qWicFRcG5dNvrsd128SAOibxHZUNj2sY7durvdADkTBbsw/640?wx_fmt=svg&from=appmsg) 缩回去。

-   原来乘 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtnLJ6KiasLp04lmicS5FcCiaokHBicesiawFTz45w4rVPibphX1AQzFicFJka3jKnAMAl4glI1pBHDP4ibicDhsnvF7LXcmKMl9PBA3JZjA/640?wx_fmt=svg&from=appmsg)
    
-   现在乘 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNH5ibYyKexrZ1YSDDHybwXsaib70XYUnP58EvtWwlTdKmvwCoQ0dosShtuwTjsCXg3Jy3HgCic0kzsbwW3MxTexWNEAAByjPxtqfFA/640?wx_fmt=svg&from=appmsg)
    

####   

#### 第三步：V  

再转回原输入空间。

* * *

### 最重要的一点

对于那些原来被压成 0 的方向（即 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKVwLTrx3gxbibHVtBBicHSicYRz2ibwkbW9ehXF4GIHCrdnqrsTgG9WbDB3Skcfg7rGYVxvAqTatPRr5789CqrsImEichiazmiaHPVqAg/640?wx_fmt=svg&from=appmsg) 的方向），**信息已经丢失了**。  
所以伪逆不可能真正恢复它们。

因此伪逆不是“完全逆变换”，而是：

> 在能恢复的方向上尽量恢复；  
> 在已经丢失的方向上保持为 0。

这也是 Moore–Penrose 伪逆最本质的思想。

* * *

## 6\. 为什么伪逆特别适合“不可逆矩阵”

普通逆矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRY1xQYYo5nu4XiaEzkdsDJ1CHzPKwT50bpjkFt7aicj4HTFMGT8lXhzz1FBYDswKhw0GNy2yqlDHlpFWKpics612SiaLCaQC1DV3zaw/640?wx_fmt=svg&from=appmsg) 要求：

-   A 必须是方阵
-   且满秩
    

但现实中很多矩阵都不满足：

-   瘦高矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3KyujYCTpjCsXZ8GfCwLZG0krovFicEsYrc2rPRdDNrFqaMQZ06qS8sbMpSab0IhiaIRlKfYQGA5Aic8AMdn4CATpfoo1zoldwykw/640?wx_fmt=svg&from=appmsg)
    
-   矮宽矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib46aKN5WZZ0bgV6QCicA6u8RLibpaFtbIuA5ejlOE7vtibC6HicSmHC33jpiaLeib27wfr1knibQTL4ic7ibVwDYcHLVTTA43DIc8HUFYFCA/640?wx_fmt=svg&from=appmsg)
    
-   列相关 / 行相关
    
-   秩亏
    

这时普通逆不存在，但伪逆仍然存在。

所以伪逆常用于：

#### 最小二乘

解超定方程组：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKHzaV17YPEEhWwTcEBoowM01R74vZmREPFrYdrsVmuLbhARw0J2xJIuiackEhiauNhc1ibhWuia96AGWjDOF68XOzaAnpExrNDibsMBA/640?wx_fmt=svg&from=appmsg)

最优解是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAA4tNBplJ7OSMKJtXgahKssUOkJmG23tlvDHR9Q90IzXA31mBgox3lVsicGBDhFsTf76Ze9kVZjCSM2txXPnH1N8OaWYwn8Iib6A/640?wx_fmt=svg&from=appmsg)

* * *

#### 最小范数解

对欠定系统：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7GNn5jFF9HUCdticgUqCGJ5M0OagGlbKTBuHBT4n68W9ialfic4ptXovWNQUHtfGeytsubB7X9glvoHnryyzib0jib9KmI5bYGe3fKfz9kmic5vWOw/640?wx_fmt=svg&from=appmsg)

伪逆给出的是所有解中 **欧氏范数最小** 的那个。

* * *

#### 降维与重构

SVD/伪逆在 PCA、数据拟合、信号恢复里都很重要。

* * *

## 7\. 用一个小例子把图读透

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4hCAAOiarqIzib8KXKPGmyUFNYvheJMwpjRFE58ZwOULVCmQKM9PFiap6QehmXuv0K4fQZkNJlMdSZEibnSaFFxPlp8PfSzqiaF7Wlz0DHm8QDS2w/640?wx_fmt=svg&from=appmsg)

这是一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79uP4ncW83Fx4nJ0LIyBBQKxmU14vEWRa84ouhicsRBwZqLRsJkzLLUW8TkmIbb1FCSRHvrfPkk2Lzn4H4CW4oPFM91EJic7AuZftiaibEU6XkpQ/640?wx_fmt=svg&from=appmsg) 矩阵，但它不可逆，因为第二行第二列方向被压成 0 了。

它的 SVD 其实很简单：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvdlHNZw7zr0WQFXYAg8EL032QpH0xLjVHswDFT7oOmGMby9zv3uRkPr7hm4ibEHm1owGDBPQZGXaUOQGiawLVicUbabBgWnVWusnQ/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMFTyHbfFP8ONxzfna90UskWd6gKhkf7s4OwXqU8XlnvrIHyHKrSrLjV8fZ2sPjfXtnYz8KRjnZj8a06vTlo1IPnrwJA1wqS0og/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yUIXZdPicMfEPxMmJgYvbkdmUhAbb07kFeuc7OXqHwMMJP2WC9rShAglWsUOavKBRL0Ta7It8icrms7YrD4cWWZpr6UqBmiagZGHu6XItNtF5Q/640?wx_fmt=svg&from=appmsg)

这是什么意思？

-   在第一个方向上，原来乘了 3，现在除以 3，恢复回来
    
-   在第二个方向上，原来整个压扁成 0，信息没了，所以伪逆也恢复不了，只能保持 0
    

这就是图中“把奇异值取倒数，但 0 不动”的真正含义。

* * *

## 8\. 图中的尺寸关系也值得注意

图里特别标尺寸，是因为很多人第一次学伪逆时，会在“矩阵维度”上混乱。

* * *

### 原矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznl8RlcDYRZwEhDDgMXI0Zna4eK8QouS660mT3gdEqSuvM9zs8n3MRMDC7zwicVfEMafCDHjg8ow8Zwt9oLialcsFT2wRxe7vibZJA/640?wx_fmt=svg&from=appmsg)

* * *

### SVD 分解中的各部分

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbEicibNDic5ZQfvICwVxdibA9pen30l8DaKZhKf3ngLibtdjVHggrs3SlyFAkwPRjfPv9KPqb4qeymkMnBuKDFq0qnYtwv3aBicPYodA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4xF87cSzb77ymaN08Tr4DQEF4zdrlMbmaMrfLyiccXRHtHHhDJibtzrclDrRJHNoxP9gWicdyM2w2icDVdK7UOozpzQFUGtTx0xSqOcFiczlfKzzQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68TIFib2hP6NSoBIwIF8enkW5Cy06LzXdZqVKENBNEFuVcibDxz3FUMBtvUnvO8F5MGj6NkTVEl3qL8QfAwxJPgnprn0fcbC7XwnG6RZicPeJyA/640?wx_fmt=svg&from=appmsg)

所以：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgouqbPyGWWfCvwLnhrhjtCYHibcDZ9hOC71Ugia5ZgfeL3Y3Td0p6Qr9gOFhWFmpPJEedLUxmhOgDMDF1rjZH2XSQ278Dql1dzTqw/640?wx_fmt=svg&from=appmsg)

正好恢复成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3EJTIbgI2KjjtUKbp5hSr5aHpV3Ch5aBVgR8ZvMFia4k1AFRlPkOicnqEvr14yiauKanpINNteQmaiaMo2fzOmXvxKbpVWsE0Vc7cQ/640?wx_fmt=svg&from=appmsg)。

* * *

### 伪逆的尺寸

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhRyyJbNIKTdVCu1wRYyvNaX5JiaKOy4RbvwF7SNPyDjTXmXibichwzlibpQgCu5ibqM1ibpDdghjZkyslw6w1DCe1BS0qfvHM27bQLQZw/640?wx_fmt=svg&from=appmsg)

其中：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rcyZddQxiaX0T8fGacBXhp5r9sia3Vfrq9FvwbXKeEAQ7V3yK2TbJ5S047QEhLicIESdl4qC5Diawh3y7QB20Gmlpegn0182020ob2w/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47AhxfOtSrQHO7eHe81HTeNmaV7hjib83R2iaLBPvtetia9kCMibv7VnvQd2HUwP9ToQEicjPFV3bH6oribjD5OvGuOoGAGZYQRSocjRg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVakk1GDN8BLbZThJUgBB5z1PM3P8VVNtrW5tUKnCTozNwhLmWxCibKWIuPXApUM4lTthrlhqbib50L3FURzPOribBuzjwYts2q1oLQ/640?wx_fmt=svg&from=appmsg)

所以：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvporz9Gs5aiac4jDQO05iaFvDwfCA5hb8yyeXSjr7KwGGwCJ9KBHV2eEPRJt4WbCyThKTDpxXJCBCPS14TrQnicic9d8lTCsDb8D01aQ/640?wx_fmt=svg&from=appmsg)

因此：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzG4yAiazOYibLWxqibHGNhs1fkd0ArJyvL8A5BUia8Bkl3D02Q4SgynPPrgibEIE0icPYlqBhvsS7oYaoXfiag6STNZDE33rFCv8liby1A/640?wx_fmt=svg&from=appmsg)

这就是图右下角想强调的内容。

* * *

## 9\. 这张图可以浓缩成一句话

这张图的本质就是：

> 先把矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90LTXY2BFyqCLiavaX4DxYr6UHticxFa2SXnsYC8YcaiaUlOat3k4nW8iaO0ct7ZibDy0Kb7WHUWRyIHA0QcXG5KdF0LnEibTGLjRqjzQ/640?wx_fmt=svg&from=appmsg) 做 SVD：
> 
> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jejxu9p2v5sm3toS13HiahByI21SY79lIgsltrVW784wRzfZBoEbKb5apMKT56LADhvgA7bMwJPTT8CUt04fvNIgZw7GaOrYrvaxR1KRenjw/640?wx_fmt=svg&from=appmsg)
> 
> 再把非零奇异值取倒数，并交换左右正交基，就得到伪逆：
> 
> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaX0xFFaLlGd73TaegeEVK1nicNnn28UpSNXbjTJqJ6yfoDgQT9bbWLrySDlrC206qia6szOwME6c4rdxvDkSkm8VGMca0xtPXUnA/640?wx_fmt=svg&from=appmsg)

* * *

## 10\. 再用更通俗的话说一遍

你可以把 A 想成一个机器，它会：

1.  先转一下方向
    
2.  再沿几个主方向拉长/压短
    
3.  再转到另一个方向
    

而伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZQoWXdEZJfOzWncIIUWAHhotkU4dWAkbgEeN6n718QD420g1MLBAtftjPibZ244AsIvFWOJOvyYn8rDM8htvAJDEfXuXwDSibGcg/640?wx_fmt=svg&from=appmsg) 就是：

1.  先把最后那次旋转倒回来
    
2.  再把那些拉伸倍率取倒数
    
3.  再把最开始那次旋转倒回来
    

但注意：

-   能恢复的方向才恢复
    
-   被压成 0 的方向恢复不了
    

所以它叫“伪逆”，不是“真逆”。

* * *

图1其实已经把 **SVD → 伪逆** 的主线画出来了。  
下一步用一个具体的  **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppbN9Fc5iaWmX1j2gYrIicNgrTHdgWGeugSoueoXgpZicBL2VRdd2zfmicDtqf7STiamCzMh2PKRR4VSmyZTkGh1WgMhTJr4jqAD4pdw/640?wx_fmt=svg&from=appmsg) 整数矩阵，把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkt5m0HZIVVCzTRyEQA3W3dxMCT8Eak7dicicwXxV2g5leYQWb64vEd1C2EYsl0tfzqQiaEUSrlCoHXMWXW1A6x7sYZkJNPHuBJoQg/640?wx_fmt=svg&from=appmsg)、SVD、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFetyErEWLuiabm92ssiaQQp1gjiamQaXaGpo6bRyx5EMSCqw7TbbibNsySZoudwCdomTUC1S9NcVoCib3YSjUsIGE66VtOE1GMzh0Eiaag/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sAz5OWdbfRzFSMcc8libSGGRQiapaDBXmHgLnJWs8lmn9IHNtZtWhDwicyC7icFpu8JzUY1RbAIcX18TOoTbxAbN0QqmtCZWicdLrXhSCzA7V2pQ/640?wx_fmt=svg&from=appmsg) 全部手算一遍，把这张图真正“落地”。**

分三层来讲：

1.  **先把图中的公式再压缩成一个工作流程**
2.  **用一个具体矩阵完整算一遍**
3.  **解释伪逆到底在“帮你做什么”**

* * *

## 1\. 先把图里的流程重新整理一下

图中主线是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIhMQTXWfb4RmiafDng0NpCibHwdDnIHqE3JPfcLFvRMqnmceM2rLZQn3EvicG7pWSRO9iagBo6om55AVYBVBicaIFdMyZsGzDqpAC6Q/640?wx_fmt=svg&from=appmsg)

也就是：

### 第一步：把矩阵拆开

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK4eicib54CsrmqY0pwQF4WDE9EvHBZthmHhv7GeW2sia9B9B4P64Fvnaia01hHTGVRUibsGApQG4icMc51OZqiasHs3WjwVhYFR4U28uw/640?wx_fmt=svg&from=appmsg)

### 第二步：只对中间那个“缩放器” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1Y6KleRq2riaskTyypykTSMvQhiaHwvR8ayCOKfadm8D1QdpGTMAyicsf1dTpwW4tF1WrmYxYDGyAl9ArvTe5iaqSdgM60yCd543LQ/640?wx_fmt=svg&from=appmsg) 动手

把每个**非零奇异值**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGicichYheZfzT8SNnoJ6pttesfic4cmnm61GibC6V21FbEAq1KD7p1HvAQIwG6StXZ1fMJvA4DwhwB124eH1uhSgprFvSVAIMDMW97w/640?wx_fmt=svg&from=appmsg) 变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau5WvUqCdadvAkgoBBRtYichiaTKmdnEcLePPhc5tubdRz0Gcp54hjUBZgichTtwYfJBXNibuXRJiasYJFHCRlZ74lPibNtibUFibwIia2ag/640?wx_fmt=svg&from=appmsg)，得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6JlSNHT7GlAoITPIjRcxlL07lhGckSg3iaU0Fr7plRFlicuk0peabJBPmEkzty6Evqw3oGMY1b3pzQ3CfZ0RrvgS8rHlHHnh8lcdQ/640?wx_fmt=svg&from=appmsg)

### 第三步：把左右顺序反过来

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47Gnc4Gf9SkUfrAEkH6ZqhmKsxusKTopAbNIwyMm76cGwMqqTia0hXNLoyz6EuEZqEjmlVq4jHpQx4zB1lIHiaiccCEt6xkTrXmUqA/640?wx_fmt=svg&from=appmsg)

* * *

## 2\. 用一个最容易算清楚的例子

我们先不用太复杂的整数矩阵，而用一个**最能看懂本质**的例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm20znjhVwYt1tn0E092qAOEw2vmBibfHaGw2E5zBtThdEBHWJKNGM4PANsgsLmXcXloSIYo5iaSmlTJtHxiaLGaQgTXia2g6OvEB6Jgw/640?wx_fmt=svg&from=appmsg)

这是一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXhjp0kY5MWwGYbVReA0koia7dmbEqhD1Fib92A7UGKbO3DDTSN4pJu82wqeHYDbic5mmMgaIJrOPsJJAa4Hxloia98mdpsQNa4794Q/640?wx_fmt=svg&from=appmsg) 矩阵。

它表示：

-   输入空间是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9Rovvt6Ivib8so1aicYMo0mmnIwSMKicsmLrvLoXG65bOXInJ6RRvWwR7MTCO18iadUXVZEZmib40nZZS89TWBfwZlH86UPOm5ED3AZxLsg/640?wx_fmt=svg&from=appmsg)
    
-   输出空间是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlFH5qqiaD35xuu8Flms4HbuDs5L3GcdLAtgKbliawzZFNia4U2jhncmDSwM9xBR2J4tWjzriagNrpiczwhKTQQNE4tLbjyS1bPYXN2A/640?wx_fmt=svg&from=appmsg)
    

它把二维向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7KA6GMSeZpx3qywMOqtXBHa3ZiaD9dO5RcLohsuuunAibp17q0xJuPyHyhnGygkSuyHpshVuWyMOKenmdJ9HqwksgYj5xZibCkvIw/640?wx_fmt=svg&from=appmsg) 送到三维空间里：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7rtGrtUvOht0R6HnZDXhH3D6qUE3TiaYxrybP4uuodrJ2TLklU2Bvwu8iaayP8Sqp93GKvDBoTibGnRa39yofsuJT1icSPRxClCiadg/640?wx_fmt=svg&from=appmsg)

意思很直观：

-   第一个方向放大 3 倍
    
-   第二个方向放大 2 倍
    
-   结果永远落在平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZSS8tqFEKMXjf63ZOt3gIIDjJUeCdDjPqv14KEzqicDfvWF9mv5j4Ha61ZiaAGHVGRTOFuAdqS7XYhDvxlsiajX9vPrsxQZlVQcUQ/640?wx_fmt=svg&from=appmsg) 里
    

* * *

## 3\. 这个例子的 SVD 是什么

这个矩阵已经几乎就是 SVD 形状了。

我们可以直接取：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIgd6HhPu678WlE9QqYY8FuGSIgPIEhM2oRjWG77aHBGt6TV9VehLMA16MuCQq8uXp9ib5icRZibcQtLdGibjf6VJq7fbxCjov03IeA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3Zl6RH3RH04KtxOzKhU1w0kUfOkGDLOej7xmuCcoLjnJ7tkjy6KyR1f8kfiau36xub3DXIAw2rMcXbOd253yFhWXh7ZeibzICU1aPg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hrzUsNAQ2j7LxfTickxsQNKjzCac5HiaryFNRic3yTcaztG4icwQ7WMcKr4kuf7Cad9ico8Eib0DlVgibdpfqZiaYUNBWX8yzK4qGZiaSKMA/640?wx_fmt=svg&from=appmsg)

于是确实有：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7k2Dibrt3MPIe5aK6VMTicrBcDYlUibyYftWdkJhvuACglgIyERuo3gjoE8kVpdiaSu422vdibwWU4ZrNhdAnlSSicGfZEpy8kv2yRAibUfspc3jibiag/640?wx_fmt=svg&from=appmsg)

这里虽然太“整齐”，但非常适合入门理解。

* * *

## 4\. 现在构造 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1dmVmJIQE9vFDr2LOww4RlfKAgGflLDkNW9cpYoiajOpLJK3TykZxL0B0iaTibKLa8S7k7EEtqFhj3P33v9mvjVWiaBSPMyx2rHicGA/640?wx_fmt=svg&from=appmsg)

原来

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGYv8zlPvG4icUicuRWo1fmKxAPWGC73bT1ZMBOcCbicQ2cxJwPQER2jiapmKNeAgxa4EwG4Eb2LuibWfqG7gceebGOiatagFz8CiauCwQ/640?wx_fmt=svg&from=appmsg)

那么它的伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiabtkrkibOabhvdTnxqgnks6b9aZZGZZ3XnmJmjhsZMVWicpoa0iacUlzGnkFOjPjjCwIQg1FS4AJ49ekRlhlYicWtvBicKic49aRCuBw/640?wx_fmt=svg&from=appmsg) 要变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNXsL0kOVfWzeMQ99ibk525OzsRTBW9PRcuzSaKCMicR3AbJPoiaJA6Xick44BnX2CiaOt8bKNC7FdE6DzFPlib3vBa5tRS4thKlxIYXQ/640?wx_fmt=svg&from=appmsg)，并且把非零奇异值取倒数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV2GRumf7XB0dfUmRJoZrAM2JLJ9iawt48ug0lTHWwjaF2bAx5Uvdfo1M3MJWDjiaTtxEtpSqSeEBFzaPpfiaphsPEic5lZgLKR8N1g/640?wx_fmt=svg&from=appmsg)

注意两件事：

#### 第一件事：尺寸变了

原来是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7iaaQxyJyAFujhTTL0GDnqxN1PNR7iaOyZ9DkZ31pqBOalMhribUKxpPsd8kPRI8INyOEG7gJiaJgjdop3mOfcCgI8G28P2ZRBLhCUfl5cpzgLXA/640?wx_fmt=svg&from=appmsg)，现在变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpXib0chJcTGxxAjr4Fvvv7EBQdVtVDy4s4vp1olfHCpAbzpib6wzFpL04pgicBU69acnZwM7JN8WnKvCrF9gxZmZic27vbb44kaiapQ/640?wx_fmt=svg&from=appmsg)。

#### 第二件事：0 不取倒数

第三行对应“压扁掉的信息”，不能恢复，所以仍然是 0。

* * *

## 5\. 于是伪逆 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznmyblVibBukcRRiblDyDSHeibJ0EK3IygGmQh9m0NeicU7YMNr9FgAgNs4w2c111bcORsic99UPLlU4uoDRVDZjlzmS0PLE1JLSXVibA/640?wx_fmt=svg&from=appmsg) 立刻得到

因为这里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mribYkEGZXVTXoXap54V9Zu5XsPIxusRhW2Q4xjzW3RV6ml1T5gMs6cSL4kiaQWECQCh03IO3Nzjqs4pIxkXFmzeS6HIQR0Pibz5Q/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRY7ghO1zT5DzQuNF02cdbWoR02UhQjXW83a5UgCFYlRcCV5QKA4sfntup87TaWCUyiaSvcyzh1Sj4IgjJJLzoVpI3kb64aZbrfNQ/640?wx_fmt=svg&from=appmsg)，所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5FXwpk7oiajqKs08glZC7ic0YqM48hKauEPtuoA12PC0g7s76JCURZmpJzh0yKvWVmUoPRddf1H3ux7VIzGzCDX2aiahMVyblhBicicxibzTSvuEYw/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaUUaWp5P0Y5Iln60RdrmKmQV7ns4zzDktqRvPRu2XCZCPIW8x2wBE6uc8wbdX08kSZ5XQzic42hFw4PJXovth7t4PEwic9Ad1wrA/640?wx_fmt=svg&from=appmsg)

这就是原矩阵的伪逆。

* * *

## 6\. 检验一下：它到底做了什么

设输出空间里有一个向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNksy8ZFtyMc9MufFJjF8XGSwtSTeC53LCIkraNsO0XwQIlIXEYZQrsN4MIvjIlqbPw4P8IzNibQvibkpVqAvW3zE8D3v3NfpywQhYg/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GV3xHSowTWszNicg7rmcmCwu7TSfRFPO7FmzrPGlHqnPV1tn0rsrBpe4qjQHDibmySZIfnqCoZ8rthSCG1J34lk3Bic2F0P6icSMHg/640?wx_fmt=svg&from=appmsg)

这意味着：

-   它把第一个分量 6 “缩回”成 2
    
-   把第二个分量 8 “缩回”成 4
    
-   对第三个分量 5 **完全不理会**
    

  

为什么不理会？

因为原矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznu2oGfNTO8T9s4gsSDEqvGTv8wicUpTVrAP4EVX5gHia6T6XvN0Qzcazq6Tv4F7bXkCYKs7lib2NHLymmVXDsIBu8njiblDnibFmQGg/640?wx_fmt=svg&from=appmsg) 产生的结果一定长这样：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJNy5K16ibO0hTLppPoR3MpibNsSfusbRyniaXmibqTH9KJpzEyFGp3HB6kpeicZ6BsGRG3C4VJHibx1CnGuxhRGpncaQcq3n6ol8oqmRg/640?wx_fmt=svg&from=appmsg)

也就是说，**第三个方向本来就不是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5QUQFrXvtqPwkXwYclnkBUQyhSB90kHo0WaEGU7EuWCAemWcia8KcO2Gaicg6nZvo1JtUA1DicxBmlZ5jvL1F2jtlVH89S9nwq9GlicSweU1wgnQ/640?wx_fmt=svg&from=appmsg) 能产生出来的**。  
所以当你给伪逆一个带第三分量的向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAKP1HaLy51GLMr0nSB8ibf9dfVLG0Pts7gSGgauUlCIe7QicSFbQI3lNtpaiaTOczcW3wSfHU96bNWVSmyQkBzor252nkaSOn1fZQ/640?wx_fmt=svg&from=appmsg) 时，伪逆只能说：

> “前两个分量我尽量给你反推回去；第三个分量不是原来这个变换能解释的，我恢复不了。”

这正是伪逆的核心思想。

* * *

## 7\. 再看 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn1ysjYFBJgNsEFttBXxiabAGEUwna4eleLpOibvhFfAYXCZ9F6BoVUH4enP4Vv32pGoWHZaVc3qN2BSM8qKbicpBs45Xp5cDXruFJA/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVVxaa2vLC3UpibR2pVGYib8m1TYE1OfwlQLfhsvJtQvuWSHSfTJzqTUNfoGGjaaSztJ0aDlGicmPEvW6AUYAqibM1WgVOgzqeNXMHrA/640?wx_fmt=svg&from=appmsg)

这是理解伪逆最关键的地方之一。

* * *

### （1）先算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn3KDHAe1N4YIWMh7stWX6aywyamFKnvrTibaAnibTvq1QqM2lzH05b9ICtEvSNic7x3sDFSCJg5Fr2Xt6Dsz4O2eeMLFoJykNGxEw/640?wx_fmt=svg&from=appmsg)

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaYIeR5sFmOydhpxu9obshmkR583ian7JM5LkgrczccHJqAdibyTzyremBicSr0UTKGEnDTB6dFee8dSs3wbF6zAAGaQbiaQWOHicOQg/640?wx_fmt=svg&from=appmsg)

这个结果说明：

> 对输入空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPvNHIYCtoKRCiaIy7NHANYyKM7iahzyB5gGsgA2ia26g3ZRR8kEOH26D1k1n5IGklJYJ3Akq00P1zQGkdaMLYf0SqhjNtuz0eO95Q/640?wx_fmt=svg&from=appmsg) 里的向量，先用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7s4wD43nQbbmkUV7ib0XK4jd2E1wBDMJLuf8K6tfwHb0VIxiaHgMxKcf9ib1CYOeibCiaL6OGpPdlFl7tnFE324laLwvGoezhTkltagYVKK4tZH2Q/640?wx_fmt=svg&from=appmsg) 变出去，再用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicbafvcQHkUls1icmwUKvXEzXXuYAQfBNTaBEX3wdjLeK5jU9hHgg6vGPnRktQ98NVeCSWItDVXTKia4oFeo0n69vpzptqoUbBhEw/640?wx_fmt=svg&from=appmsg) 拉回来，能完全恢复。

因为这个例子里，A 的两列线性无关，输入信息没有丢。

* * *

### （2）再算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtZmcGlS80yVoLDSa0PVvp19LYYcbvp7GrJic96SgRfc6EphsxIjicHtp6uicF0dOjrDS1uZ5KClozcoTDg7icSHBS0I1aJzy9JGqZg/640?wx_fmt=svg&from=appmsg)

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrA1JZMfqKAbucfASaS2Q6xeU3mSUH4SmZXpQfOknjBeEc31TMjfiadlvCyK8YSs84FoffibpbLfMQETP5BmzewCMnm6YLEnvdSDZg/640?wx_fmt=svg&from=appmsg)

这个矩阵不是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPuWloYXNzyumITz0hQ2aXibMcibiabVUvj2clyla1PPHLkQWF7NBBicXyLJAmFObQtA4NNBVD99rlzDl1f7EmFL13K6ZMO4bGF8Bicw/640?wx_fmt=svg&from=appmsg)，而是一个**投影矩阵**。

它把任意三维向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965SJJTPXKficnU9Q212PRJnNLO9bAaUj26RLICMqL1Vc3Mlwltm5TA3uE3AicV9fQzBGT7NbeUfZyeu50aJz5WEibVAMwPrYl4v78w/640?wx_fmt=svg&from=appmsg)

投影到平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0Cofv2lns1kIy7pxwWPrYQLCpVzia6Yh9WmiaUuSibNLYEM7XiajQIia6xhJYwLMGncm8ex25pAfJdQ9K8HkrawCs0iabtvNFKxibIUOlyw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4IlbiamaTYNkEBmnmsCSZrrtHVPYuqyESQf0b5yAAtCIf67zGuHJMXVD6Bn6zfb7kadhkg6wry3Cpjfc2AGj0v97Mf7Mwj33bYlpl0w/640?wx_fmt=svg&from=appmsg)

也就是说：

> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5OrKCf3UjnEWCGkHRgib9k2qxDMZ5QBuBHFsib8I8Z7StkMlwibEog9tdvKoa51pCuGkUSW4IfQKNQ0kqq9p7tBtaib20YtXhgLjMd7iaUMZdp5kQ/640?wx_fmt=svg&from=appmsg) 是投影到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmTzoVEurFFiaugmC6sHeicxkzcLk9xDosauqNrKRucn7XGkhOnEddHUFgtz8XMf76rcriaK0fyDoyVkddIgzsj3jnOVzSRkD2d8rg/640?wx_fmt=svg&from=appmsg) 的列空间（column space）上的正交投影。

这个结论非常重要。

* * *

## 8\. 从[四个子空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247514383&idx=1&sn=58d31ac120e62f56ef863928aa5e3229&scene=21#wechat_redirect)角度看这件事

对这个矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57nAgJzRzdvyD3GEVtUcTONIET07p6pVWJ6mN20MLfGibcld156ibM0Ct85ujbvUPT9AC8VOWWw6P3nJh9wJPLBhPV6bjiablglQrOsba5yvGmQ/640?wx_fmt=svg&from=appmsg)

* * *

### 列空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GUxRJe4C5mO49HRVfjDwB7JmLKUJSgPFKNqhVPRwBnC6314A22caNs1HIbWjZdZtAmKcjjIQtEKSiaA5aqLmT0xPsDxQNqq6ZNA/640?wx_fmt=svg&from=appmsg)

由两列张成：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ovumGEXgFl1bjGO2mNZJ37XUkCWD6wSGG6OOtWcDdLVNy1eISs24SFLAibfQ6J945XZ2t9eic2YiaRYlY4hibgdI4giaFWje0FM0WeA/640?wx_fmt=svg&from=appmsg)

就是三维空间中的平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YDLJOWbgIaxbCadDegEkxKVm27Zlen4tdDgsTRHEO83vyF126YvuQmkYsLxEjXxic6EaFF2fHTO7zNJu5gtBcAV1xeXLOkbQcyw/640?wx_fmt=svg&from=appmsg)。

* * *

### [零空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247506786&idx=1&sn=2aa4d4f3207cb33e9c0931e37684187f&scene=21#wechat_redirect) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lVme00hgZUCK5SxssRaBHOpctbb1fHcqQNicYtT4TbGDspicPf07zO4ic6V9EMC3PAyZGD0SDd693UsLZ5OfDc4E7MZAmF4ibabvddu9q7lL6Sg/640?wx_fmt=svg&from=appmsg)

求解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtXwmWX67cZID1eZy3AwRws9icg5cUnb61mqMkmLVWpEPmicOib5aibHiaDcicFCANfWicG175j0lhs4jTDmboPLniaYYGAY6cia5lwtINfQ/640?wx_fmt=svg&from=appmsg)

得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM70Rdb4ngSBia3AbOINzGhXeAIwFHTYzjH4XlGEGNAMFicjpsFPMHQ7CiaP1iamX0bX5WXRfQMTkicicRuvvUwS77IdwcJic7dULsd12wVUXmof2YNiaw/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL80fd8zYr3TDkcQOADpAgODXsO404mJ93BeADejg7RY6jHIx14VxiaNy29bONJhZbYyNqzWCXQ0zDWIs06j7TUnps05Ro1tCKMw/640?wx_fmt=svg&from=appmsg)

说明输入没有被压扁掉。

* * *

### [左零空间](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247507028&idx=1&sn=afdc8b2099cd72d74a1089aa8fb1ef80&scene=21#wechat_redirect) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7FCQlxicWt2odtbMsc8rdocjTjcxewp8kP1SasicOUFnodicez8wuXXoQKyfuOnYEUCP7Vqm0rbI0GcY53bdNMjf0CicpnOaicuRDxQ/640?wx_fmt=svg&from=appmsg)

###   

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg89KwCiaIergmo3WtxeWBoDrwleibvMea0hu4vrYKhqjF0dl9t49AKZhXMnKVGxib4CLU7ZLiaEeDn0FFAmwGM5gsocXYvmtnxicJmg/640?wx_fmt=svg&from=appmsg)

求

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfNLpUlbicwJmHmPb5iaartUrIEkpQQibc5Chu3cY7TAV3y9PMiaNzSxXAC7Cia1jVFLgexiaoY4Vb0N4hSuY7ic1STPsYMJDovibG1n1nQ/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHwCB7pOQNyUv915QM4gEy1t2NfyW9rTNBWyyuoCkLxrSVQnpzDoc4S21SVOUjAlUdgAE7NpnZrF4PKW38RRN31z6JWMRP02JgQ/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoJXrPfTW2r5ibibEBJot177iaGL0uw2iabEKLqkD5hfrB92GVrCOHPuIhkOeI9na9Uw6js2RDZkmQbL2hKY3O8olDjm3uba00nUgsA/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZDkFjNZ15LajIt0ujYxBP6GTvsE4MyOjDXybQicbhR8aPtfjY8nxf22JU8TYrCic7ph3oIVs0bt2RtAvaXCPEQq40fGjyevO9wz7AL72XzGsQ/640?wx_fmt=svg&from=appmsg)

这就是垂直于列空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpTzDCOYznw8oGibo8pYmrsS7N7WFoltqhkbo2h2OLibPfoSJibfic6VQMCoshOicibeJ99p00thoxNZKPuOzZv1su6Z3ib0ianrAjyp9y2w/640?wx_fmt=svg&from=appmsg) 平面的方向。

* * *

### 这时 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpMXrykSsY0szRJhmY1nUwlUBOE9AS4JIwVuicR4AwEiamJ7cyQNQPJ9ialaMP92BMZ35tE0icE1yePDJ5q6XMsfsR7iany89IdTbpJw/640?wx_fmt=svg&from=appmsg) 的意义就更清楚了

任意向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNawQwMcCD464mcYuymAyYOSthHy8h95RxSZjXZ8ne76icDjN3MShARH4veW37TTDLkLCUSM0JKZQzrS8qyKNzCoTEXuYlTtvPXQ/640?wx_fmt=svg&from=appmsg) 可以分解成：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNcb9llsNGybvXUlGmHlMLbaibUrAkbQOKmWn6icVUFNUCLEghgyxFgLibiabaamlCnRQaAnKdK0gD4l9Gf2u6rHurbJJvcubgSuUrg/640?wx_fmt=svg&from=appmsg)

例如

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL71HlyJjYxeqdAtMUG7oejvNayuQs0OqWia091paS3RScdU4LDicuLKZ56uKEtO9qYLvuWMkt941uQW6ricCRfTQoCY8hYPXzb8gQ/640?wx_fmt=svg&from=appmsg)

其中：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bduqVAd0HyQk1yiaDPnPibkNQyQhaeuXdGYXYnicibicNw28XkCia8icTy9ib7wiasejSJhYFfhDcZTmEt1d6eLCctdjN7tRUYBloQMM9ibG3bdTMFHeA/640?wx_fmt=svg&from=appmsg)
    
     在列空间中
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznsWphyZUsicGdUXBxEA1FjqMZMhKLrqeHUVCmV5I93vaXcvlgR7iblIvFZDIu1TDUJVK0OaOicyQicrb8iadMYibIyZteuVIia958UZjA/640?wx_fmt=svg&from=appmsg)
    
     在左零空间中
    

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHaVGhkI5zKlRfseML1MRatKlHHqicTicbNLYuCtEibkZXRTwEGvG6FZLY49mkTalRLt0pj1mn0uZ1fx5qeevbHGG900m0kXXchXTg/640?wx_fmt=svg&from=appmsg)

就是把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amfRqk1ma1wUNg0iaDmqdmOng0rDGxHiaUtsTduUdpm74MjS8Q3gM49CkjwGuqMSkqfdwvz4mAV1pQic34eiaia6XcSBqsVbkNicia2lxw/640?wx_fmt=svg&from=appmsg) 正交投影到列空间。

* * *

## 9\. 所以伪逆和“[最小二乘](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247484824&idx=1&sn=6158f2e6bb26e5e597aee0c2934d745e&scene=21#wechat_redirect)”是什么关系

假设你想解

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScPGib1q787OmIfDB7hKkpwNvXQNDdADR9fjbhQ9KqX8rXg7icjLpT6yuPDbr0ndqq7z3iateLYxdZRmn0EWicpPJot2J7HzPLWI5wQ/640?wx_fmt=svg&from=appmsg)

但这个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjdYcXhnIqibqCzuRJDjiafWFPme0l26picJKVm5KkOtTYU8jbibZZLaawz2FmiabYEEfsAf3wBx9dNwdoJeoo7slpKrpDYNbKXuftriaw/640?wx_fmt=svg&from=appmsg) 未必真的在列空间中，所以方程可能**无解**。

例如刚才那个

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YiaWCIkkEytyBDBOTCIMF26VC34wgibOCiarnn7hsOyZf9K98ESpxIG8m65iaYRswvJiaKhDUaLdVFzI0rHABC24MXK1Iyh6D62MVkhprN5ia5rPg/640?wx_fmt=svg&from=appmsg)

因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7IhYWx3zuHwTXvdicJtlbAFh2roj3Ybe2U93L7piamNEHHSdQVGZdnAbJJic0NepHicrnNgF5TeLXD6G0Hic2oooPUePfJMxZxxu0hw/640?wx_fmt=svg&from=appmsg) 的第三个分量一定是 0，不可能等于 5。

所以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JXQSAEUXprEl9m9P48b3NMgOGm73wzVqvpChFIMU4sM0HccNV1Wp79dbFHGqLyBQuicLZlics6l6m9NCOwNxStws1eTX75UyOPHXR7g3o9Emw/640?wx_fmt=svg&from=appmsg) 无解。

但是伪逆会给出一个最好的近似解：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPc8sl22ybydGXz7UFxIuwX0liaynDNZM8USEyxV2JibHzqDwkx3myImNjSYVbmQVsJY5w0fER6sMAA1Xl6JRu4tZmPPts2Nex7qQ/640?wx_fmt=svg&from=appmsg)

我们已经算出：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SpQySsPpTNkwcIT9kztgTmaDrEmoPLrg67ibG0Z1nY1RDdtQs1RaKU3ucJxibPlWUPmABWesBiaYszVAAKMylG2KgWic0ILS3pbEicVX3rD6iaHQQ/640?wx_fmt=svg&from=appmsg)

代回去：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNH9NFfYrZqxXlJlb1IpR3axGLs7ibbrzR0lbjf3BLp94jtibibv0c9xibR1VvQyhdwmDajciaPibuCdFNfYeMxvAWrmvPHbPSPrpYkyJQ/640?wx_fmt=svg&from=appmsg)

这就是离 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1ZPCxZz7Zmxood0R1mpiczQ0CHmUtdrBiaTqDWnG0P0qqQLgR6URZ1laojFn2MNo7Ab1KU6l56xDqh11AFuHBs23iawv4EzlvRXFA/640?wx_fmt=svg&from=appmsg) 最近的可达点。

误差为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfXcyDVbRDzEfoictibsnhSbepWOiaZpr8r7Jib49r5ibsgyiaMPyyMkKhrAyibCuiaRElOWibMJojXs8IlmnicumcjM8TCvPjDKgDnT8fESA/640?wx_fmt=svg&from=appmsg)

也就是那个“无论如何都解释不了”的左零空间部分。

所以：

> 给出的就是最小二乘解。
> 
> ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfcSP1zRNFb2c5uOHBicPX6Lu5qfypPR2RldOExZzgAhRFEwA5wCovtDDNrO30GXAW9iawKPVHpwOa1tnicpqUB40Tic5icia4icicXoOibg/640?wx_fmt=svg&from=appmsg)

* * *

## 10\. 这张图中最值得记住的三句话

* * *

### 第一句：SVD 把矩阵拆成“[旋转](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491153&idx=1&sn=fb3db591aa0ac260ea404e9e79581add&scene=21#wechat_redirect) + [缩放](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247491229&idx=1&sn=ff4d57b39612251d752393c7efb3921d&scene=21#wechat_redirect) + 旋转”

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSd8DpwhjCeCbhVFGm2TCribOvHDjxgMd77RzgR2wKLXicoIbjGPqgv8iaQziaSc3RIs6FWpTlPhNAUwnBBG8DFxnXCuqiahiaUd7Tyag/640?wx_fmt=svg&from=appmsg)

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHSMExUqFkn6GTNm0iaLYIwozcIcnZoHjhib9oTguV2jmLpgpKbbfpVibxxX6faRPUgKH6q7RhicqnzuY8MnSTvuibul9ugWtV0tveow/640?wx_fmt=svg&from=appmsg)
    
    先转坐标
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZOQULnW7uwiaqSz2a9eBMbCH1n34JLaQMicCeCPTQ4SjXyzJTDVtMR1lERic9xzTxg7sTUQbMw4WWAOQib0C4nhJFeiaTdIticPFQicbg/640?wx_fmt=svg&from=appmsg)
    
    再沿主轴缩放
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4qfYABKdicCd8lwSI7b9hOtibs0dDDRVRzZoRFH7fiacFSJT6u44CwguIgXCZhN4ZEd23LSeaS90DPhup1IAZRORYAFZSKILSKjQ52Sr7M8WbIg/640?wx_fmt=svg&from=appmsg)
    
    最后再转一次
    

* * *

### 第二句：伪逆只需要把中间缩放器翻过来

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyLzMtauDRibD2iaOgurRq6icM1HRtjh7vPVkQDCUf9od277sxUp90T0Fck8Pw3kUq9X2volU2wGLULjzmmzJtfUwG4BMQMKx3aofQ/640?wx_fmt=svg&from=appmsg)

也就是：

-   左右顺序反过来
    
-   非零[奇异值](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247487913&idx=1&sn=78464a02b7bef5067590714667e39d68&scene=21#wechat_redirect)取倒数
    
-   零奇异值保持零
    

* * *

### 第三句：伪逆不是“真的完全逆回去”，而是“尽量逆回去”

能恢复的方向恢复；  
已经被压扁丢失的方向，恢复不了。

* * *

## 11\. 你可以把它理解成一个“压缩-解压”系统

把 A 想成一个机器：

-   有些方向被放大
    
-   有些方向被缩小
    
-   有些方向甚至被彻底压扁成 0
    

那 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyM2zgib2kjnn0EHPFcaTjTyKvhjQWruJqj9H75AribiaSMTAyibepTpqQjeZMBibLllkibb7Tt13JZQF2HhEDwia4dHJhCicHzpGXqNCSg/640?wx_fmt=svg&from=appmsg) 就像一个“尽力解压器”：

-   对没丢信息的方向，做逆操作
    
-   对已经丢失的信息，不瞎猜，只能置零
    

所以伪逆是**最理性、最保守**的逆。

* * *

## 12\. 再补一个更一般的结论

若

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1SVQ66WWvo6bZwLeF3l6aicxJTaBCDp6YdG7zkeTceF3EPauezwdoZed7IbNhZiaRtuogRvcDZpNIeia2fGgCyBOiaxVESNQkNAMJw/640?wx_fmt=svg&from=appmsg)

且秩为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9pklYvUqynX7UZjWsYrn0WNjSktTyIInqEap4rl50tKaJdicmpwWdibqCDm62U4af3SBKIcAZTib6p0gRxggEvTV6R70XwkvKG88A/640?wx_fmt=svg&from=appmsg)，奇异值为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FnVDO1zkoNakcD4kczBLU1SsibndY02EmoxS6RcXwUO4EzpHODYIW6ECW4xYgFmMPJm0xLaVzuNqlzKiasnL4qQk84OiabVAJiaT4KfA8icW4uDQ/640?wx_fmt=svg&from=appmsg)

那么：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pZCiaw2YmeZjITIpkuks0qicNkXDaTq9qyfkf81wCkDmic22XGbV4R0eukN6t8lKSnb6iakibvRBABnv654vGBiaoaIULDJQgrKXz9cQ/640?wx_fmt=svg&from=appmsg)

则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoYpDx3jlezehDM2ywqN62Gy2O9hIfSqN1FNtd9KiaAvt3iaTma7gVycl00lD8RxAibIbVJ4NEDOib4ly5Ciayzibw8yuIricztl5obuSA/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKevebibrKJBQWeZAg9ia1TEibunMv2Qia95YGpXjPA0nboAqyZlAgb2RYgtLqAlk6RDeFwYKQhOt2NKuLPQehCB2LyQ2dFCVzBSZkg/640?wx_fmt=svg&from=appmsg)

这条公式对任意矩阵都成立，不要求方阵，不要求可逆。