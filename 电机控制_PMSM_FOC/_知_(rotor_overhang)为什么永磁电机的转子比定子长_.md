# 【知】(rotor overhang)为什么永磁电机的转子比定子长？

原创 Mr 晋 玩转电机设计 2023-01-03 08:17 四川

> 原文地址: [https://mp.weixin.qq.com/s/dUyMoxzLMH12yjjrGYnXLQ](https://mp.weixin.qq.com/s/dUyMoxzLMH12yjjrGYnXLQ)

**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jRgiat5Waewkk92P2EibbQhTOQKL3ibxAdOichR93cNp6XdfHGYnibdw87rA/640?wx_fmt=png)

**overhang**，英文单词，动词、名词，作动词时意为“悬垂，悬于……之上；（危险、邪恶等）逼近，威胁”，作名词时意为“突出部分，伸出物；外伸量，突出量；过剩（物），积压（物）”。  rotor overhang 转子长于定子。

* * *

**哪些电机常见转子比定子长？**

小功率永磁电机

表贴式磁钢转子  

铁氧体、橡胶磁、注塑磁、粘结磁等低成本、低剩磁磁钢

* * *

**转子比定子长有什么用？**  

在最小的空间和成本下获得最大的磁链（一般两端伸出定子长度相同）

作为霍尔的磁极（霍尔端磁铁伸出更长）  

* * *

**为什么转子比定子长？**  

定子加长，整机长度会变长  

转子加长，整机长度不会加长；

转子长的成本低于定子长；

转子长，利用端部绕组；  

转子长，弥补磁钢端部漏磁；

外转子的铁芯(磁轭)还会长于磁钢，降低铁芯饱和度；

* * *

**转子比定子长多少合适？**

一般转子磁钢overhang长度超过8倍气隙宽度后，基本就没有增加磁链的效果了。  

* * *

**怎么快速仿真？**

overhang结构的磁路不仅有径向磁路，还有轴向磁路，需要3D电磁场才能精确仿真，然而3D仿真非常耗时。如果要进行参数化设计或者优化设计，3D仿真基本不能接受，还是借助2D模型更效率。怎样精确的建立overhang结构的2D模型？  

* * *

**外转子overhang结构的等效建模**  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwqjXYialXAgq73nxT9D8LHlzTLJHIF625WDSKDiaO5jlgWPHgrSgYkLz83XEXg8LAbX2gFKRewibyIg/640?wx_fmt=png)

轴向长度:转子铁芯(磁轭)＞磁钢＞定子铁芯

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwqjXYialXAgq73nxT9D8LHlzOUtnJDUenrpWsoJuSSyQ1vQBuTUcP9PicswwTd6rPJ21gjcLzZY5ibQ/640?wx_fmt=png)

三维磁通矢量图

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwqjXYialXAgq73nxT9D8LHl90AbKQw5GA8tl5wKEx9jJVfBCGIFaia3Fq04Xmw2iaibw8onPXpCq4UCw/640?wx_fmt=png)

**体积等效  
**

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jUkJJXEYZGd5qj9ccXeyYl5YFd5pluYml7mvGflfknwGw88Qn4ZtmLw/640?wx_fmt=png)

方程(1)表示磁能。Wm和wm分别为磁能和磁能密度。**B**和**H**分别是磁通量密度和磁场强度的矢量。Bm和Hm分别为永磁体工作点的磁通密度和磁场强度。基于等式(1)进行等效。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jic8BuFOzwkpBgN32YtpDGibDIDib46ToMcD8wQF4SeFWFHibzRynRiaha6Q/640?wx_fmt=png)

2D模型长度ls为定子铁芯长度，体积相同，长度按定子铁芯长度，修正永磁体的截面积，可以得到永磁体的内径和外径。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jmC01IekqLhH4k4NkXrpk5tqMMHssn9yYnvW2F5iaLfeYDX4kZeS5Zibw/640?wx_fmt=png)

V是转子铁芯的体积，同样基于体积等效，计算长度为定子铁芯长度时的转子铁芯的内径(等于修正后的磁钢外径)、外径。修正后的尺寸如下：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jBqGEYQiafXCnMb2NdKer4HkLf3ptHa5huRgOoWZHuianwM36T13Bob0Q/640?wx_fmt=png)

修正前后的2D磁场对比：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwqjXYialXAgq73nxT9D8LHl0ficDL8LBibmcic0qoF9zkqdcgYweYqUX8QjngznxZbHjM6tYXFxZ93gQ/640?wx_fmt=png)

修正后的二维分析模型中转子铁芯不发生磁饱和，未修正模型的转子磁轭饱和严重。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwqjXYialXAgq73nxT9D8LHl2PISd1JOrPtkfb1HgJJqgj6T5Z00UUQM09WMWpMEu1ib8vU452Yxicug/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwqjXYialXAgq73nxT9D8LHlEVdVlJpwkRLq5oEhJo8ics946a6CbS991XJ4bgo5icxNNVhPkC83j8pg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jeMiav3Rg7fWhP4TlEHicVR3R3Aq4trODn6ybF50Iovucic5v10GbTmySQ/640?wx_fmt=png)

修正2D模型的仿真结果和3D仿真结果、台架测试结果的偏差都不大。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyVibT6lHHxY7CcOG9F6QM7jaQBW0VhDN41vnBeOScED9Vgzc10mJFt5ibmKC5OarHqZerwib3EksOEg/640?wx_fmt=png)

在精度可接受的情况下，2D模型的仿真计算时间是3D模型的1.5%。

* * *

**你是怎样等效overhang结构的？哪一种方式更准？**  

* * *

_参考文献：_

_“Experimental Verifification and 2D Equivalent Analysis Techniques of BLDC Motor With Permanent Magnet Overhang and Housing-Integrated Rotor Core__”_ _Hyo-Seob Shin, Kyung-Hun Shin, Gang-Hyeon Jang, Seong-Kook Cho, Kyung-Hun Jung,and Jang-Young Choi，_  

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)