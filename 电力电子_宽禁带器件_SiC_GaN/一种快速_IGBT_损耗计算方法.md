# 一种快速 IGBT 损耗计算方法

原创 张明元 ，沈建清 SiC碳化硅MOS管及功率模块的应用 2026-01-27 12:08 广东

> 原文地址: [https://mp.weixin.qq.com/s/1QHSor4WHADmltbZhp3aWQ](https://mp.weixin.qq.com/s/1QHSor4WHADmltbZhp3aWQ)

文章来源：船电技术

作者：张明元 1，沈建清 1，李卫超 1，耿士广 1，童正军 2（1 海军工程大学舰船综合电力技术国防科技重点实验室，湖北武汉 430033； 2 海军装备研究院舰船论证研究所，100161）

摘要：针对目前PWM 逆变器中广泛使用的IGBT，提出了一种快速损耗计算方法。该方法只需已知所使用的IGBT器件在额定状态下的特性参数，就可以快速估算各种条件下的功率损耗。该方法的计算结果与厂家提供的软件的计算结果误差在2%以内，满足工程需要。

关键词：IGBT； 损耗计算； PWM 逆变器；

1.引言

IGBT具有驱动功率低、工作频率高、输出电流大和通态电阻小等优点，已成为当前电力电子装置中的主导器件。由于IGBT 的器件级建模尚未解决，要对损耗进行精确计算相当困难。通过实验的方法进行测量，不但费时费力，不经济， 而且还有可能损坏器件，也是不可取的。根据厂家提供的IGBT 特性参数和特性曲线，采用工程近似计算的方法，具有简单、实用的优点，是当前解决IGBT 损耗计算问题的可行途径，它对于快速完成电力电子装置的系统设计、器件选型具有重要意义。

国内外关于IGBT 损耗发表的文章很多，但有的考虑的因素很多，计算并不方便；有的没有区分PWM 调制时单极性和双极性的区别，采用统一的公式计算误差较大。一个IGBT 模块包括一个IGBT和一个并联二极管，IGBT的损耗包括通态损耗和开关损耗，二极管的损耗包括通态损耗和关断损耗，本文分别对这四种损耗给出了计算公式并作了推导。

2.IGBT 本身损耗计算方法

2.1 单个IGBT通态损耗

因为单个IGBT 模块只负责正半周波（或负半周波）电流流过，所以单个IGBT 的通态损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAWCYztBSLsicxliayvqoJbibt34gBC76a6gFjIn9DAcickuyhL11YWXtqlA/640?wx_fmt=png&from=appmsg)

式中: vCE ——端电压，iC ——电流，τ (t) ——占空比。  

vCE 与iC 是非线性关系，这正是IGBT 损耗难以精确计算的根源之一。vCE 与iC 的典型曲线如图1 所示，将vCE 与iC 之间的关系用直线近似，则

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAMySnEpQbjSETJd9T3saPzFNfJTH72l3Ooyqfd9ErtL8f3a5ZRoUWWQ/640?wx_fmt=png&from=appmsg)

式中：VCE0——门槛电压； rCE——IGBT 通态等效电阻，可通过厂家提供的vCE 与iC 的曲线获得。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAewm77vMof277ibtF5FP6fL25xGhs6Ie2wNziaEMMaLVG1lDGrLgFmic6A/640?wx_fmt=png&from=appmsg)

采用不同的调制方式时，占空比是不一样的。当采用单极性PWM调制时，占空比如式（3）所示；当采用双极性PWM调制时，占空比如式（4）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAgOaDXz13BONOe54XjoUkzgIb6aYSPnng1qvuEtcdsqeUMxNCDPHCcg/640?wx_fmt=png&from=appmsg)

式中 M——调制比； φ——电压电流相位差。

下面仅以（4）式为例进行推导，（3）式的推导与此类似。设电流的时域表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAejMmMFrBodnanqJ3aJQjkmVwO5A3aoLWw5PtQQ5eDGNtGzkiamVRDIg/640?wx_fmt=png&from=appmsg)

则电压时域表达式可表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAa9cwNNv3vg7zb4uyNJV647d7tXoVVAbWpjEibjfVa5yfHZ66uFxQibbQ/640?wx_fmt=png&from=appmsg)

图2 是双极性调制方式原理示意图，图中仅画出了载波的一个周期。由图2 容易得到载波直线1 和直线2 的方程分别为：

直线1 方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkA8RWNOiaVSmYO9ib4pGqxzLctca75kGjr9rz7QTjL0R0j8LXRwQRgtib1g/640?wx_fmt=png&from=appmsg)

直线2 方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAoWrhp7SEc3ZiaWJ2n4VFQTPKpKRUqib3ibY4zWgjkoRb4IOPWicSJSS7Kw/640?wx_fmt=png&from=appmsg)

式中 T——载波周期,VT——载波幅值。

t1、t2 时刻满足（9）式所示的方程组，由此可导出占空比如（10）式所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAyUlIEFYhoJc247zYX9zfKbmTHlcBMQgScibPoAibkIph1BTp0DTyZguw/640?wx_fmt=png&from=appmsg)

不难验证（10）式在每个载波周期都是成立的，故（4）式成立。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkA8OuxPurxScD0PvqIyx3u3ibI3hdQfq2ibMnIaM3ReF4YzibQic6BoSkumA/640?wx_fmt=png&from=appmsg)

将（2）式和（3）式代入（1）式，积分后可得单极性PWM 调制时，单个IGBT 通态损耗公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAp6JkSfRGBaYKC5sJsSTNibNjmAHeggrK7019TGyasdJlLkiaJMIIB3ibQ/640?wx_fmt=png&from=appmsg)

将（2）式和（4）式代入（1）式，积分后可得双极性PWM 调制时，单个IGBT 通态损耗公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAszCUFqmWz7eqZdxHunp33f0FwEQ71yWZHo7SyjXOKxrrzSGFkdXkiag/640?wx_fmt=png&from=appmsg)

2.2 单个 IGBT 开关损耗

设开关频率为 fSW，则半个周期内单个IGBT模块要开通关断各 fSW 次，故单个IGBT模块的开关损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkA3K2wibJiaF4HDLEbjvcDSicgVklkFklibEBD6PAMoIYTpdCDFGhmnN80Wg/640?wx_fmt=png&from=appmsg)

式中 Esw（on）——IGBT开通一次损失的能量； 

Esw（off）——IGBT关断一次损失的能量。 

Esw（on）和Esw（off）随电流iC的变化规律是非线性的，很难用解析表达式准确定量描述。厂家一般提供额定电流电压或少数几种模态下的Esw（on）和Esw（off）曲线。经验表明，将Esw（on）和Esw（off）按线性化折算可以满足工程计算的需求，即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkABLENgNT6xuO2XVDdUic9AeiaDhFJWkdGpbp0QZzlYKqAjbj8kmeBOiatQ/640?wx_fmt=png&from=appmsg)

式中: Esw（on）P\*——额定电流ICN和额定电压VCEN时IGBT开通一次损失的能量； Esw（off）P ——额定电流ICN 和额定电压VCEN时IGBT关断一次损失的能量； 

Vdc——直流母线电压； 

ICN——额定工作电流； 

VCEN——额定工作电压。 

2.3 单个IGBT总损耗

单个IGBT 的总损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAZNkb9LWdpu0mePbdNbrkak8ZTkAmBhMFfxtjQr0FeqMsxLUZZ5Ww7g/640?wx_fmt=png&from=appmsg)

3.并联二极管损耗计算方法

3.1 单个二极管通态损耗

同IGBT的通态损耗计算公式推导方法一致，可得出二极管的通态损耗计算公式。 vF与iC的典型曲线与图1类似，故：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAkF11xAgVYdQutiaxsT16Oke74CHHq4taENQqjicPzuew5ZqpsuUlHNVQ/640?wx_fmt=png&from=appmsg)

式中：VF0——二极管门槛电压； rF——二极管通态等效电阻，可通过厂家提供的vF与iC的曲线获得。

当采用单极性PWM调制时，占空比如式（17） 所示，通态损耗计算公式如式（19）所示；当采用双极性PWM调制时，占空比如式（18）所示， 通态损耗计算公式如式（20）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkARntEWTRlb6wgOalJzzyck8WcicpLGgoXEM5pPP6WAuSAVniaG5kdhULw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkASPA04Vfeyftp9xxavHgX6ibnbEEcgN7sYiaCibFL2o5o5jxZDkdic4mUicw/640?wx_fmt=png&from=appmsg)

3.2 单个二极管关断损耗

二极管的开通损耗可以忽略不计，仅计算其关断损耗。与IGBT的开关损耗计算公式推导方法一样，可得出二极管的关断损耗计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkA7mOdawib70vEicbqKibW0KuKxeKEEFK5e7mJ4WVMSE019s7vibcphHOaTg/640?wx_fmt=png&from=appmsg)

式中：EDiode(off )P ——在额定电流 ICN 和额定电压VCEN 下二极管关断一次损失的能量。 

3.3 单个二极管的总损耗

单个IGBT 的总损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkArpicbT7SjY9oZDxPCXOCdzRZnHDfNCLiaqDib6Rro4kvVDZ7bdNx0h4CA/640?wx_fmt=png&from=appmsg)

4.实验与结论

在PWM 工作方式下，一个IGBT 模块的总损耗包括单个IGBT 及其并联二极管的损耗之和。即：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAhWp098n0lCs3Vu3nQGz4VHlCXZUkxjUP0x8yQEv0TiaOXVAp1rFAPlQ/640?wx_fmt=png&from=appmsg)

其中，PSW 见式（14），Prr 见式（21），当采用单极性PWM调制时，PSS 见式（11），PDC 见式（19），当采用双极性PWM调制时，PSS 见式 （12），PDC 见式（20）。

为了验证这种计算方法，针对eupec 的FZ1200R33KF2C型IGBT 进行了验证，结果如表1所示。表1中公式结果指的是用本文给出的公式计算结果，软件结果指的是用eupec 提供的IPOSIM6-2a软件计算结果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAxAibrDs2UNNDJR57bZacQogibVgz7Sc9VVtkVnMVbkPPAICvmDyqgKQA/640?wx_fmt=png&from=appmsg)

由表1 可见，本文给出的公式计算结果与eupec公司软件计算结果非常接近。按照本文的计算结果，进行了IGBT 的器件选型和散热设计，虽然没有做实验测量准确的损耗值，但最终的变频器装置运行情况良好，这说明本文给出的方法满足了工程需要。同时该方法还可以用于计算MOSFET以及BJT 的功率损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRNn8yZpQwqaPruBQhWVkAX1UqetAbibTb6B6xgDnXJg5WichuY7w2NPJialtiaJtTRSGBDPW3xGuRVQ/640?wx_fmt=png&from=appmsg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7y6takB9fSysibKQHosicr8oxe78kybBtoHNEIe9m37GrhWmgzRKTXB5g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7IdKzsVAfsonk8XrEsLYcotJErMx7GsGpRTzbWqgcNA1hyxohsEXI4Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G79QVc4mUv0mUB6iaCbnIkLunouMLTPpicMiaLYV3hbye0xa68FuUM0IJow/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnLvhOnfm67FPIj4RLV0G7ffbgpzt2NMsDcGiarMO5cibQGbgFyjCmOfBoeIn7JRUdsgXFHY7Fyialw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)