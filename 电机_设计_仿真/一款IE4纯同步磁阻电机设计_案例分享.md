# 一款IE4纯同步磁阻电机设计&案例分享

原创 Mr 晋 玩转电机设计 2022-11-21 08:17 浙江

> 原文地址: [https://mp.weixin.qq.com/s/d\_44WJJqug\_MEtQTXKUF4g](https://mp.weixin.qq.com/s/d_44WJJqug_MEtQTXKUF4g)

**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

-   BLDC一半的成本
    
-   BLDC一样的体积
    
-   BLDC一样的效率
    
-   IE4  
    
-   不用稀土，不用磁钢，不用担心退磁
    

* * *

就说吧，你心动了没有？  

是怎么做到的？

* * *

**纯同步磁阻电机SynRM**

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zHGy1D0BCQo9x6X1TibzHHsTUPAZULY2Oa8Ao5OS2ANVJGwrGX7icaibZA/640?wx_fmt=png)

转子没有永磁体、没有鼠笼条，定子为常规定子，只利用磁阻转矩。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1z48AJWashFZNl9eZo551PR4Sdrc9U5vetJex3yowpIKZMbcJXTmffkA/640?wx_fmt=png)

纯同步磁阻电机转子结构比较复杂，参数比较多。作者重点研究了5个参数：

1.  Kma=Lsteel/Lms，磁栅的宽度/磁障的宽度，磁栅为硅钢，磁障为空气；
    
2.  Kmb=Lmb/Lma, 磁桥宽度/磁障宽度，或者说侧边磁障宽度/中间磁障宽度；
    
3.  tweb,侧边磁障与极间轴线之间的距离；  
    
4.  Rsb，最内层的磁障和转轴之间的距离；
    
5.  %Xinner最内层磁障宽度的增加的百分比，它被设置为大于其他层，以提高输出扭矩的可能性。
    

作者分别研究了每个参数对电机性能的印象，每个设计参数都会影响其他设计参数，因此需要同时考虑所有设计参数，以寻找所设计的SynRM的最佳几何形状。作者基于一款空调鼓风机电机做了对比设计，获得最佳的设计方案：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zVGD2QT0KHOWrJ5Ns5utlicbBpXeXH260PWqqrN1FZwNDmbXficL70KHQ/640?wx_fmt=png)

其中几个重要参数如下：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zryGdYiaA2AiaAicKSjkbTeE23eHkmzzdFxhlxA6iaAYSzxpYO0EpavI9Yw/640?wx_fmt=png)

设计的纯同步磁阻电机和BLDC性能对比：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zRFfibdlvDewV6pibM4EALJ5oJa2YwgZNw9K6E0c8krq3YjMMNUKg5mGA/640?wx_fmt=png)

* * *

**模型复现：**

由于作者在文中列出了比较详细的模型数据，参照作者的数据在EasiMotor在线版online.easimotor.com中建立了模型进行计算。  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zrzC3CW7cpZ42fzViayXIxyugrCvlRLbeicrqbtAg6kiabdPacdZHKwnWQ/640?wx_fmt=png)

额定工况磁密场图

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1z4ObZYh3ye3cxcwDia9XNjpWTGZtMHRLPIxWwM7h2nyEWttGaslzBBng/640?wx_fmt=png)

电压源仿真的转矩：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zYe0KVaWhrzMn9pEsStrQxfqZyF9ticnRbGRZ013oR13JdF5AFU3WY9g/640?wx_fmt=png)

电压源仿真的电流：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zNvp3srnggNDLgtvqO5xnj0QypvyUFV74sf7ut7PL4ftZKCG0nvdUzw/640?wx_fmt=png)

电流源仿真的铁损：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zSVVoA7s7Jbeibyhs7yDGy2773XGbnKDkLWrTlUv5kIgquEcQ1y547Sg/640?wx_fmt=png)

电流源仿真的转矩：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zkdibBicicX1jOzmUicAj1Pic2Jiaauuf0qiaINtcScu9NibJosm2RpFBmfvnRA/640?wx_fmt=png)

效率MAP：  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zd7xP2gqQxwYKWHFu8gITrfvBg1e93CsTJgO51FwN1UH5sbSmic7HKQw/640?wx_fmt=png)

电流MAP：

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zfTV9aVa68n2iacficY7UDtiaSiaaGrDnQjIRTEpoX3Jt6YMxVvAe7c7srQ/640?wx_fmt=png)

仿真结果（电流、效率、铜重、槽满率等）与作者的设计数据非常吻合。

* * *

**需要本文案例的同学，以下3步：**

**1.在online.easimotor.com注册一个账号；  
**

**2.分享本文到朋友圈；**

**3.留言区留下你的online.easimotor账号。**

**你就可以在你的online.easimotor账号里查看这个案例模型了。**

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzDAN6pBGWPWz6yd9FibEz1zVnib7O5ibjV4qYsaicg5eAsvlwsLrianG6tuhPSorCryn05wVOQ0yGW93g/640?wx_fmt=png)  

* * *

_参考文献：_  

__"___Design of Synchronous Reluctance Motors with IE4_ _Energy Efficiency Standard Competitive to BLDC_ _Motors used for Blowers in Air Co__nditioners"  B. Kerdsup, N. Takorabet, B. Nahidmobarakeh_

* * *

**欢迎留言讨论！**  

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)