# 玩转电机设计DFEMA


> 原文地址: [https://mp.weixin.qq.com/s/KaNthn9NDiUyn4be0w2Xew](https://mp.weixin.qq.com/s/KaNthn9NDiUyn4be0w2Xew)

## **1.概述** 

Potential Failure Mode and Effects Analysis

潜在失效模式和后果分析（FMEA）：是通过对可能发生的(和/或已经发生的)失效模式进行分析与判断其可能造成(和/或已经发生的)的后果而产生的风险程度的一种量化的定性分析计算方法，并根据风险的大小，采取有针对性的改进，从而了解产品(和/或制造过程)设计能力，达成一种事先预防并实施改进措施实施改进的方法工具。

FEMA既然一种工具，在所有产品的设计中都可以利用。现在电动汽车发展势头良好，电机作为电动汽车的核心部件自然是需要通过TS16949认证的，TS16949中对设计部分明确要求需要利用FEMA工具来辅助设计。所以研究怎样将FEMA应用于电机的设计，生成DFMEA表格就很有必要了，利用FEMA实质上提升产品的设计成功率、减少产品设计缺陷，而不只是形式上完成了一份FEMA表格。理解FEMA的神，而不是形。

## **2.理解FMEA**

### 2.1.  潜在

潜在意味着有可能。墨菲定律：所有可能出错的地方都将会出错！所以我们一定要在产品制造之前，将问题扼杀在摇篮之中。要有预防的概念。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEJ0icFTKibibDicQb2akxpia5sE23erQA6Cmm8MiagcV2n7e8m1t39JbgoDFQ/0?wx_fmt=png)

一个新产品可能的问题总数是一定，在前期阶段越是投入更多的精力，解决越多的问题，产品最终到客户端使用时，可能的问题就越少。

### 2.2.  失效

‍

什么是失效：在规定条件下(环境、操作、时间)不能完成既定功能；在规定条件下，产品参数值不能维持在规定的上下限之间；产品在工作范围内，导致零组件的破裂、断裂、卡死等损坏现象。

产品失效一般的表现形式如下：

硬件失效：产品非常明显表达一种功能停止现象，实体破坏

软式失效：产品机能因退化、老化、不稳定而不能满足原有设计要求标准、功能退化、功能不稳定等。

失效模式是指失效的具体表现形式。

### 2.3.  后果

FEMA可以在前期分析可能产生的后果，并用一定的形式表示出来。在结果产生后，也可以应用于结果产生的原因分析。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaE8gT1WcRox2oHQelBMIicqL4fW81ic4iaHDbesTuJUTEd3SKWcpa8gxI7Q/0?wx_fmt=png)

后果的分类：功能、性能方面；可靠性、维护性方面；安全性方面；经济性方面；操作性方面；修复性方面；环境方面；公共安全方面；废弃方面等

后果的类型很多，有些重要，有些可能不那么重要，但是有些表面上看起来不重要或者在一般情况下不重要的问题，在特殊的环境下时可能造成产品完全失效，或者引起上层系统失效。不要忽视任何一个可能的结果。

### 2.4.  作用

FEMA的作用可以是在设计阶段分析可能会发生的事情，通过分析了解原因，形成要做的事。也可以对已做的事分析是什么原因导致。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEdYJ4hovQXxoj2moUT1tibib2J2nfEv1n3RNfzicl7ibib3sdFI2YFWc0cjQ/0?wx_fmt=png)

利用FEMA可以有一下益处：

-   改进产品的质量、可靠性与安全性
    
-   改进公司的形象与竞争力
    
-   帮助增加客户的满意程度
    
-   降低产品开发时间与成本
    
-   书面规定并跟踪减少风险所采取的措施
    
    ### 2.4.  逻辑思路
    

FMEA解决问题的逻辑思路如下：

  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEp0LkbbdDB83IialkbjzEtp1wiaEFUFibHr8UP15LPqqwziaLIaeMxAiccWg/0?wx_fmt=png)

## **3.FEMA在电机设计中的应用**

### 3.1.  电机的失效模式

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaE5bgjVKtuQkrNcQwSD8wXxibfwuVRBudfbY1odzWVGzWDutZyXJtlboA/0?wx_fmt=png)

### 3.2.  电机失效的后果

**功能性：**

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEbTIlTp3jUGQ9WqNFHnZWEWtuzCKIB1sqibc328LsEXw5VYR1SGVDjTQ/0?wx_fmt=png)  

**性能：**

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaENjtT7GvwrSeEQr8Eu00bcNfxvxibweKn13xjMerTmQibJt9ubK549XuQ/0?wx_fmt=png)

**可靠性：**

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEvaXFvbmAyOXxwicChvocIykbvwqmib6eEoHURft8TqVj9esFoRdtQFgw/0?wx_fmt=png)

**安全性：**

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEgoqOISNtu31iaetQnoNwUgUeE8JibyoWUQZibiboeoodrfUleEjnz3xicbQ/0?wx_fmt=png)

### 3.3.  电机失效机理分析

利用思维导图做失效机理分析，先从整机性能失效机理分析，再细化至部件和零件：

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEuys80uQM8b4NezKTkaW4APeS6heBnNUdhwJCZhbHkiclFT5vocO1Xag/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaErgbXbNST24gNAr0hpp31j8SjqibLibWZeQxUSX33qsXiaYPxJwQEz0YDw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaES6Xo0V6dL7GFgdibzLiaCUQJoev3CSX16FZyJiaaczan5uhbNJkxqw4Qw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaErgRFNlV4tW6nOLicNh8Msoaw9tMANjs6K13mUUyyKwtIjlNXia8eSJicg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaE0bpmwLHicX5JGIr2oyeshY2eOIvOA0HwjlWwEuBktGPfrX6SLWRoEng/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEfUpibQn9fXmshogufQQTOA64AByibibibmXWicKFTqGo6rdhycxo2eZhaoQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEicNJC80GCibDDll8MSxMaIth2WeFaGncfOEqXuCtLdOVHP74KruJRibLw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEtu4LdYwaicFGRJibuNVD71w2nkZq511O0L9FMvEujJNcooRJMu8biasYg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEFAaicJVicGHMwEiaaUAdiaz4CfWxu9WzXeF7AEicG6AmBd66wP8JSNT2Ticw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEYKQBl9O8OaNIfSgDUCRTWFXoWy5VumECmnXsu9aGYwGTSo2AOJw9VA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEud3HRxvd5PxtjuyRnialJuVVuWnzKPjUUqxcjsI13pUYKPUDibibR3vKA/0?wx_fmt=png)

### 3.4.  电机DFEMA表格

最后一步是将前面分析出来的潜在失效模式、潜在失效后果、失效原因机理填入DFEMA表格，并列出当前设计的控制思想和探测方法，最后对严重程度、频度、探测度打分，将三项分值相乘得到风险序数RPN。当RPN值大于50时，由核心小组确定评估是否采取行动。不管RPN的结果如何，当严重度S＞8时，就应该特别关注。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEMjLxWDAZluvVaxjZ611tib3e3GVKBVXhSWe7chRFwROkRpvyYShlADQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwXBeeTXib4CBV8xwGNspiciaEpxIv5uvotS0ebz0BZgNhtsickTNuu0eUbZgwHJqCcOGLmic6WBWsgNRQ/0?wx_fmt=png)

## **4.总结与展望**

电机设计利用FMEA的**益处**：

-   将潜在问题扼杀在设计阶段
    
-   降低产品开发时间与成本
    
-   降低电机开发失败风险
    
    **展望**，要把电机FEMA做好，以下三方面需要重点关注：
    
-   积累失效模式
    
-   积累失效机理
    
-   共同参与
    

  

感谢你的阅读！欢迎**关注**本公众号，共同**探讨**电机设计，**分享**电机设计经验！

![](http://mmbiz.qpic.cn/mmbiz_jpg/Zlibib2pr1chxmjGLYKbMOeUZVXKOJANk1IyiaJLga9FwJfx9riaSvV5yyWU3gQMGfjnlJJKb7da2iaK7MbFmO7mk4Q/0?wx_fmt=jpeg)