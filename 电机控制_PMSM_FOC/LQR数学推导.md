# LQR数学推导


> 原文地址: [https://mp.weixin.qq.com/s/fi4XNT9MWc2ZIzLLJ8kU2w](https://mp.weixin.qq.com/s/fi4XNT9MWc2ZIzLLJ8kU2w)

关于LQR的推导，之前写过一篇，[LQR系列05---原理推导及实例验证(史上最详细，了解LQR这篇就够了)](https://mp.weixin.qq.com/s?__biz=MzUyNjY0NTkxMQ==&mid=2247484624&idx=1&sn=52e5df553ae3034d67bf75a3d3123839&scene=21#wechat_redirect)，这里有些小错误，整个逻辑也不太清晰，现重新梳理了下。

假设离散形式的状态转移方程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1TTUWlOX7s5kHGHyKicANW6JG7bib1eRhCaA7JcL6erRXjKrL3SgUf8hw/640?wx_fmt=png&from=appmsg)

需要基于LQR的代价函数最小原则，以及全状态反馈，自动配置闭环极点，即

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1cZic1WhibnEMdOAvz7eoaBMewB18T9bXhqJCMflHyXf7ljMKhXgT7Gxg/640?wx_fmt=png&from=appmsg)

下面着重讨论怎样基于指定的输入权重与状态权重，得到反馈矩阵K(下面的推导用F表示，feedback的简写)。

基于状态转移方程可知：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz10DCSSyv697ibEKEoLQMaINYsKgW5RslticC5HCckx1j4qiacMXCib2TpeQ/640?wx_fmt=png&from=appmsg)

要保证第0步→第N步的代价最优，可采用逆向分级的思路：

-   step1：保证第N-1步→第N步最优；
    
-   step2：保证第N-2步→第N步最优，它又分为第N-2步→第N-1步、第N-1步→第N两个阶段，基于贝尔曼最优策略，要保证第N-2步→第N步最优，则其中包含的第N-1步→第N步必定最优；
    
    ...
    
-   stepN-1：保证第1步→第N步最优，它又分为第1步→第2步、第2步→第N两个阶段，其中包含的第2步→第N步必定最优；
    
-   stepN：保证第0步→第N步最优，它又分为第0步→第1步、第1步→第N两个阶段，其中包含的第1步→第N步必定最优；
    
      
    

假设第j步→第N步的代价函数为

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1SIBjHaibUicNthckEOBHKn8tkzl3S637jutC1Jwb1Lb8gZA20Jk4UYhA/640?wx_fmt=png&from=appmsg)

S为末态权重矩阵，Q为暂态权重矩阵，R为输入权重矩阵。

  

当j = N时，即最后时刻，此时木已成舟，改变不了什么，现有的就是最好的，即 

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1JoyMrW2bMdGHS4Y6rnpyqmcF8ow1O6xTiaHobjIlNfTKCq9tfhlwV9g/640?wx_fmt=png&from=appmsg)

  

当j = N-1时，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1fEzOsickZicqmsfgoN0DOVpp1ftHss19u0gYwBicRIMVV9n51YQKHzXBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz12N27c74Qbiaw8baBkcVArEptrmTG4Ax4E6L265mAWmVtDaeTYZGeK1Q/640?wx_fmt=png&from=appmsg)

  

当j = N-2时，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1CO4rlJ4ONb6FO8Zian5RAKm8k8p3IzVJ0zrO200TB9Cv1gQ8CqxlIUA/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1eJicMpBLZ3vBnX0nITqmzFKvWx2X40IE6zEibHDJzFk0ibnuE1puIwpYQ/640?wx_fmt=png&from=appmsg)

  

...

  

流程如下，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz1ydxxNNRoRWqzsyRGndqA4lQLj8lv8gL5PicS8NucsbZ2vniaEKFTV6Xw/640?wx_fmt=png&from=appmsg)

其中，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41bicJdNPmCgYGiaFdNOkkBz10T5OfGYibjJx2BOosIiaZ68iblV5KGSj4eic4537qT0b9Y3IruoDJSukicg/640?wx_fmt=png&from=appmsg)