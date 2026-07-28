# SiC MOSFET方案：5kW 高效率无风扇逆变电路


> 原文地址: [https://mp.weixin.qq.com/s/G6uTd--ZCATWQ1EVpKuHEQ](https://mp.weixin.qq.com/s/G6uTd--ZCATWQ1EVpKuHEQ)

**文章来源：**罗姆（ROHM）半导体

**摘要：**采用了发挥碳化硅(SiC)MOSFET 高频特性的 Trans-link 交错型逆变电路(1)、实现了 5kW 时的功率转换效率达到 99%以上。在该电路拓扑中，平滑电抗器的电感量可以减小。由于电抗器的匝数减少、使铜损大幅度减少实现了高效率。在这份资料中，介绍这个全新的逆变器设计的例子。此外，这个全新的逆变电路是和 power-assist-tech 株式会社（https://www.power-assist-tech.co.jp/）共同开发。

与常规电路对比

图1是常规全桥型和本文档介绍的Trans-link交错型电路的比较，两个电路输出功率都是5kW。

尽管常规桥式并联2PCS IGBT(STGW60H65DGB)作为开关器件，5KW时的效率是97.4%(总损耗为133W),冷却风扇是必要的。交错式效率达到99%(一共损失51W)，因为抑制了发热、不使用冷却风扇的小型化散热器可以冷却。而且因为是交错型，显然开关频率可以倍增，平滑滤波器被小型化、尺寸和重量被减半。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvcHXibCHwvpFhdd0KnxwyAKYSDShiaoQD7ySVBVsN0GXgvzvD6egmWDYw/640?wx_fmt=png&from=appmsg)

电路组成

图2表示交错型电路的组成

逆变电路中有三个半桥，每个半桥包含两个晶体管(QHk和QLk、k= 1、2、3)。肖特基二极管作为续流二极管和晶体管并联。B2和B3以180°反转相位PWM模式动作。B1 的QH1と和QL1以 50 Hz 交替开关、作为低频率开关桥动作。B2和B3的输出通过耦合电抗器(LC)相互作用，电流流过LC后被相加。B2和B3的输出和B1的中心点连接输出电容(CO)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvelGyp1Xyo8ibJ71XzVCkDSQiciaXs7IK0Z60KTqNQstUNQA4l26GQKPnA/640?wx_fmt=png&from=appmsg)

耦合电抗器等效电路如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvviaS6zsM9oriaH56lDe4xT24Gic2AuBXgRHXBYZhiahmNuDCa2918RzqDqQ/640?wx_fmt=png&from=appmsg)

能够分为两个漏感(L1和L2)、励磁电感(Lm)、以及理想的反向变压器。如图3所示VL1、VL2、V1、以及V2是各个电感的自感应电动势、图3中iL1、iL2、i1、i2、以及im是被定义的电流。因为这是PWM电路，QH2开通时以占空比d动作。由于是逆变动作，d根据时间变化。 L1和L2的电感量相同，为了简单用L表示。在逆变过程中，除死区时间外、逆变电路中所有的半桥都按照同步整流的原理运行。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvS8rwpZXPv5X2Nv9WdUIUicIROd51tX19aJvdnfqPhOBBYHZ3yg2Kw0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvTyTRRg5SIE4EMEHS5rQInHzKt1awFVYArvtRx5Nu29aETnow0bCzVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvv0JKtSUfnSXlsey12B1rXjiaNqCqfJ2mLB05j0d8Kv9KtU6cp12N8bOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvv5qXP0icqJKob5cNEHibKMNmErMUic51Wqz5OicfGASiaialaVAC7McBpr5Xw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvDAfANw9nZZvflhHQMf3o7nAD0jnYyJF5W8FibrcHJmEbPaokQKuZ9ww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvKs6AagAlibdMSGs0hYgZj3dNiaKs7q059bsic8UPLria2aHQRceFw2aCqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvaLd5HzuRyG6Eicm6OU6PO5YClbjliaf6tQqWgQAwQEnJBHmzQS2HBNXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvV9EmkjETzBgHtJUC0qsOZa1JsiaZ1LticNERNAYVVXlBEZIu42qXf8UA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvmZ2pTcvNXTibcP9bYVvf3MKdygYMTibdwicIFkk20NAm1p89jiavnDictkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvhvcyh16fgxd4N6rqX2LrNoCPhnThh1sQ2gL2rzlsNFrxunJkXePERQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvJQoq7Mz514L1U4yYH2icoPAiceNAyFqsjUlMbNqfSkg75vcicUQmJQjCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvVk5iclgxiasocLsjaZb2YMg7OQTvuxjABL248Jt9klaWBlrtZCKFbmqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvzGh4PtmPJ6OtKw2Hib4BhawdL66P0vsicPCbs87emrbFGwW6rLnMibd4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvv7MwxwEeXWWXcINgx85TNm3vOdrKhsGkJVTOvpxX3OgZaOcLqA930HA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvKnZw4v7jicicqCCKwPW0ic1j2CO9Mib9ib8r8Fzzak91QkWa6esnFfYRuFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvvZxmbBEIhAyd6Hvq7IAZSMBny4D4NBO908GhmOsbe7q5qCGBEpm86lA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgab8VibG7t9umxbP3XGgvv2r80pSiabr6o6W7vxnf7USQBaMBTvgiaXLQAgMDm4Tu0yHmlZJGDULyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)