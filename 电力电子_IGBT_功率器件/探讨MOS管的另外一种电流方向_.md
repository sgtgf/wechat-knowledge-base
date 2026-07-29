# 探讨MOS管的另外一种电流方向？

原创 电路一点通 2024-04-12 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/S2IumCvy18NdPzntNxa4zg](https://mp.weixin.qq.com/s/S2IumCvy18NdPzntNxa4zg)

**MOS管的电流方向只有一个吗？**

之前小编发表过一篇文章：《MOSFET的导通条件与电流方向》，其中简单提到了MOS管其实有两个电流方向，但是没有细说。那么，今天小编就这个问题和大家讨论下MOS管的另外一种电流方向。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\探讨MOS管的另外一种电流方向__images\img_000_2715148bc4cd.other)

进入圈子，回复 ：交流

我们在常规使用中，NMOS和PMOS的电流一般朝着一个方向流动，如下：

NMOS：D—S

PMOS：S—D

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\探讨MOS管的另外一种电流方向__images\img_001_3cf4d9d7fb53.jpg)

实际上，BJT的电流与MOS管有很大区别。**BJT的电流方向是固定的，但MOS管并非唯一。**我们知道，寄生二极管，即体二极管，MOS管的电流方向与其极性是相反的。

也就是说，当MOS管在进行开关使用时，导通电路只会通过MOS管的主体流过。体二极管在此不会有额外的电流通过。

当MOS管关闭时，MOS管会处于**完全关闭**的状态（因为没有电流流过）。

如下图：MOS管的体二极管为图中的Di

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\探讨MOS管的另外一种电流方向__images\img_002_43cb3caff158.png)

那么，如果电流方向反过来呢?是否也是这种情况？

我们看下面这张图：MOS管的体二极管为图中的Di：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\探讨MOS管的另外一种电流方向__images\img_003_2b8ea4450041.png)

与上面那张相反。当MOS管的电流方向为：

NMOS：S—D

PMOS：D—S

我们会看到，其电流方向与各自的体二极管的极性是**相同的**。

当MOS管进行开关使用时，导通时电流从MOS管的主体流过，也会有额外的电流流过同极性的体二极管（但只有少量）。

当MOS管处于关闭状态时，MOS管不会完全关闭，并且会有较大的电流从体二极管通过。

这与我们之前讲过的类似：当VGS满足于驱动条件时，漏极电位高于源极，电流从D—S,源极电位高于漏极，电流从S—D。这主要看的是漏极与源极之间的电位。

**那么，为什么在开关使用场景中，我们经常看到的是图一的电流流向呢？**

拿NMOS作另外的电流流向S—D来举例子。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\探讨MOS管的另外一种电流方向__images\img_004_8df9ff140603.png)

当NMOS以电流为S—D的使用方式，用于开关使用时，当NMOS关断时，会有较大的电流在体二极管处通过，即图中的Di。这在实际应用中达不到开关的效果。

这也是为什么我们通常将NMOS以D—S来进行开关操作。

那么，S—D就没有实际使用意义了吗？

还是那句话嘛，存在即合理。

在防反接电路中，它就能发挥特别的作用了。

在这里我们暂不进入深入研究，简单说下工作原理即可。

拿一个N-MOSFET来做一个防反接电路：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\探讨MOS管的另外一种电流方向__images\img_005_17a7891cb162.jpg)

当电源正极，经过后级负载电路接到体二极管，体二极管会导通，此时S极的电压大概为0.7V（体二极管导通电压）。

与此同时G极（栅极）接的是电源正极，这时Vgs=Vcc-0.7V>Vgsth，NMOS管就会导通。

当NMOS管导通后，导通压降基本为0，那么Vgs等于Vcc，MOS管保持导通状态。

**\-->精选好看<---**

-   [MOS管的判别与导通条件](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520228&idx=1&sn=5996780179fbf01f66b5db0c71622ac3&chksm=fcef6c86cb98e590e3d3734ee27797bdded17b6b648b3b0d3b1599e8a4496a1fa4e457be6516&scene=21#wechat_redirect)
    
-   [在MOS管栅极前加100Ω电阻，究竟有啥妙用？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520502&idx=1&sn=600b7167e4a7a1cae254017e5b330ecc&chksm=fcef7394cb98fa827330e1eebc5dd1a1c6e09c401ca9fe0257f29898b1750586f5761ae8be97&scene=21#wechat_redirect)
    
-   [MOS管开关电路实例、功耗计算](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247518278&idx=1&sn=f25b08d3ef5b563b5d187dd66a086b33&chksm=fcef6b24cb98e232c20cd1e8bb5d76ee95a7393ca1cdbce8d14bc088437344aa0be9309fd206&scene=21#wechat_redirect)
    
-   [双N沟道MOS管驱动电路方案](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247517499&idx=2&sn=23f6347891897fd5adea7d25a541a4af&chksm=fcef6659cb98ef4f0a195972fd14f8fda1e847c40e1adfed55170ef205ddb12d7a014688022a&scene=21#wechat_redirect)
    

因此，整体电源通路就是通的，电源给后级负载供上了电，后级电路正常工作。