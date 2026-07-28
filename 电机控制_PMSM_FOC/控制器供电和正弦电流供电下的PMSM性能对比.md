# 控制器供电和正弦电流供电下的PMSM性能对比

原创 Mr 晋 玩转电机设计 2019-05-13 22:58 undefined

> 原文地址: [https://mp.weixin.qq.com/s/fsbvlAQUV54J2ckg-f4wng](https://mp.weixin.qq.com/s/fsbvlAQUV54J2ckg-f4wng)

![](https://mmbiz.qpic.cn/mmbiz/TPRVzx6PFWOdLyXNbvYZugOs9mlSZAiahTib6aYwdC2GNlfSdpgyRbFnAxvPZIibBl45ZgwaLqXicP1S2shz8Y6UkA/640?wx_fmt=gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

本文用联合仿真实现控制器供电，对比正弦供电下的仿真性能（电流、转矩波动、磁密、铜损、铁损、磁钢涡流损耗），最后用热仿真和测试验证方法的准确性。

**模型：**

**电机**，额定功率400W，额定转速3000rpm，表贴式转子，闭口槽。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqUn7Zx0bDqhuL1uyxXvPARs3ZeE1dzKAskUEVicC9mwc6a9iaIqtCmOlA/640?wx_fmt=png)

速度和电流双闭环矢量控制模型  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqFsaeEYOWqF60YaaO9z0anuvckc8iaCaX0ykr0hsiazlBg9jF1AEjjf4A/640?wx_fmt=png)

联合仿真模型  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqnazlBIibPsCibEszVdyySCE3icYIeK2pwSVkrGFMSJtibo4uF6yZUiaB41Q/640?wx_fmt=png)

* * *

**仿****真结****果**

**电流**有明显的纹波，谐波含量6.69%。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8Mqmwhj2QichcXHqAwkY05Xew8JflCBwaKuB9DVTibMyPXOnTcJFRZJgYpQ/640?wx_fmt=png)

**转矩波动**  

控制器供电的电磁转矩由于电流谐波的影响，转矩波动达到了15.17%，明显大于正弦供电的仿真结果。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8Mq5Q9jOsibrH1QOK7U5L9fX15QLpoleQSDGx86DwliaibzaxMlS2G3NXwxg/640?wx_fmt=png)

**磁密**

控制器供电的磁密3.04T略小于正弦供电的3.08T（最高磁密达到这么大，作者的硅钢片材料可能有一定的问题）。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqicCRdzmVBhxUBJIkchDByP4YTkVOMzxE4pT96lJXJvflUzMDu9DkKTQ/640?wx_fmt=png)

* * *

**损耗**  

铜损计算公式：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqmcsF6tIe2B6vyMABUPGWcK1FelEoDEuhbGk6gju0XbYz8ZFFPMWwmQ/640?wx_fmt=png)

其中Rk是谐波等效电阻，k是谐波阶次。

**铁损**

控制器供电的铁心损耗大于正弦电流供电。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8Mq5IBriaadBkwc1AIibPrBt1yEibvibhlQVFpg12Q2ibEbgdwicJe7Vysx73kw/640?wx_fmt=png)

**磁钢涡流损耗**

控制器供电的磁钢涡流损耗是理想电流的2.5倍。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqPrszjEBN39r2zX618asibXoPBt32IdtkK6Klcw1jY9NNYZbP3VXbAlg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqiaRjPjecRYYgzVt5ckn8bDFGwSrawJRLiabON5eMBoznn9bMSqX21vYg/640?wx_fmt=png)

* * *

**原型机验证**

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqAKeib7mAnUHnnnxqj40f4rtvLjTlYnBDgQM9PaQuZS9kSuqkAygnBicQ/640?wx_fmt=png)

**温度**测试结果

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chxxNFSvhmBb5QOdRennn8MqRpSw4f1byIDX9uicaomftFchicpnicDWsqoxxwVFCxIrl1f2vyQBTLeMg/640?wx_fmt=png)

通过温升仿真和原型机温升测试，验证了联合仿真计算的损耗更准确。

  

* * *

原文：《Characteristic Analysis and Temperature Rise Calculation of PMSM under Different Power Supply Modes》——Guangkun Lian, Huitao Li, Biao Chen, Fei Ban, and Jiahe Zhang

* * *

可到QQ群:364941038下载原文

欢迎推荐优秀文献、国外电机最新咨询！

  

长按图片，识别二维码，关注我哟

> ![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=png)