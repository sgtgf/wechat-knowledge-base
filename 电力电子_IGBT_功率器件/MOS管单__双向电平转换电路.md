# MOS管单 /双向电平转换电路

原创 电路一点通 2024-07-28 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/Rv6rJ7O8uqH4RTrtdxysCA](https://mp.weixin.qq.com/s/Rv6rJ7O8uqH4RTrtdxysCA)

当两个CPU供电电压不一致时，需进行电平转换以避免信号传输错误和芯片损坏。利用MOS管可实现单、双向电平转换。单向转换中，MOS管控制数据传输方向；双向转换中，MOS管根据输入电平状态导通或关闭，实现电平转换。上拉电阻用于提供IO口所需电压并限流。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_000_f76d26393f9a.png)

**什么是电平转换？**

现在有两个芯片，一个是5V，另一个是3.3V，要想在这两者之间进行通讯，建立连接关系，就需要进行电平转换。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_001_8ae9044581dd.jpg)

**为什么需要电平转换？**

当两个CPU供电电压不一致时，在电平不匹配的情况下，容易造成信号传输出错。如果两者电压相差太大的话，严重时会损坏芯片。

电平转换主要针对两个或者两个以上的CPU之间的通讯转换，可以分为单向转换和双向转换。

**那么，如何利用单个MOS管来进行单向转换和双向转换呢？**

下面电路一点通小编来分享两个在网上看到的电路。

**单向电平转换电路**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_002_d61cee36c026.jpg)

**1.数据传输方向：**TXD-2传到RXD-1

当TXD-2输出为低电平时，二极管D1导通，RXD-1被拉低；

当TXD-2输出为高电平5V时，二极管D1截止，RXD-1被拉高到3.3V高电平；

**2.数据传输方向**：TXD-1传到RXD-2

当TXD-1为低电平时，MOS管Q1导通，RXD-2被拉低；

当TXD-1为高电平3.3V时，MOS管Q1截止，RXD-2被拉高到5V高电平。

**双向电平转换电路**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_003_180d177784b8.jpg)

1\. 当SDA1输出高电平时，MOS管Q1的Vgs = 0，MOS管关闭，SDA2被电阻R3上拉到5V。

2\. 当SDA1输出低电平时：MOS管Q1的Vgs = 3.3V，大于导通电压，Q1管导通，SDA2通过Q1被拉到低电平

3、当SDA2输出高电平时：MOS管Q1的Vgs不变，Q1保持关闭，SDA1被电阻R2上拉到3.3V。

4、当SDA2输出低电平时：MOS管Q1不导通，但由于MOS管Q1的体二极管，将SDA1拉低到低电平，此时Vgs≈3.3V，MOS管Q1导通，进一步拉低了SDA1的电压。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_004_f697b175856d.png)

注意：

我们用了3.3V和5V来举例子，当换成其它电压值时，需要考虑到MOS管的Vgs开启导通电压 。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_005_0ad9973cf731.png)

此外，这里的高电平接近或者等于电源电压，因此3.3V器件的高电平会接近或等于高电平，5V电压则接近或等于5V。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_006_a79487bdf4af.png)

具体限定要看IC手册如何限定这个范围。

**上拉电阻作用**：将电压上拉给IO口使用，同时起到限流的作用。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_007_6a94fc74ba2e.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_008_c7dd1374052b.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管单__双向电平转换电路_images\img_009_7335cb42c5f6.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

\>①[模拟电子技术基础(完整课件)654页-各种放大电路性能比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=3&sn=329b28c7ac8bc14214172aa4b516238c&chksm=fcef8480cb980d96b5b17dbe82004e9c9e5f4957a26f47909c9a1338a1bc4dda8cf56ba929d3&scene=21#wechat_redirect) 

\>②[9天练会电子电路识图.pdf资料（302页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)

\>③[电子工程师必备：元器件应用宝典（696页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525322&idx=2&sn=0d3ec420b8acae441986bacc9659bac4&chksm=fcef80a8cb9809be16de2fa7664fd9301edb08ab1535cd5c697750dfd6287de2e40b87d1689a&scene=21#wechat_redirect)

\>④[硬件工程师开发手册-163页.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525090&idx=2&sn=f4fa30af30f11407e753739c1ebc95fa&chksm=fcef8180cb980896e634da41b9b2de7485e8f2e8d6af1833c7b374580d4b3eaade4455c459a0&scene=21#wechat_redirect)    

\>⑤[这4种防反接电路-正反极接反了会烧毁电子元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527038&idx=1&sn=981d151c23fcf91126261adf7d50230f&chksm=fcef891ccb98000a4f421374eb2d5e740090856f717e29212457d4ea2c8343836419d621e635&scene=21#wechat_redirect)