# 【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密


> 原文地址: [https://mp.weixin.qq.com/s/uIfn-KBTrjosiW4LFRQdTg](https://mp.weixin.qq.com/s/uIfn-KBTrjosiW4LFRQdTg)

现实![](http://mmbiz.qpic.cn/mmbiz/TPRVzx6PFWOdLyXNbvYZugOs9mlSZAiahTib6aYwdC2GNlfSdpgyRbFnAxvPZIibBl45ZgwaLqXicP1S2shz8Y6UkA/0?wx_fmt=gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

原文：《EV and HEV motor development in TOSHIBA》——M. Arata etc.

  

摘要：本文主要介绍东芝的混动/电动汽车电机，重点介绍永磁磁阻电机(PRM)、电机噪音抑制技术、当前和未来高效电机的发展。  

* * *

**1.东芝电动/混动电机的发展**  

混合动力汽车的系统结构根据电动机和发动机的连接方式分成3种主要的结构形式：

串联混动系统，如图1所示，只有电机驱动系统。串联混动系统简单、成本低，发动机只负责为电池充电。  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJto8lzjNLPKiaaU6ufKgKtQWUavyE0ibsJ7KIEBZlI3HODQpbXgDMrtjw/0?wx_fmt=png)

并联混动系统，如图2所示，电机和发动机共同驱动。并联混动系统在低速和大转矩工况利用电机改进燃油经济性。可以预见具有系统成本低、燃油经济性的并联混动系统将来市场应用会越来越广。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJic4DExZYjRVukRsy9ByXyxPia6cibOCkQo44v5nhT4uEU1w4FVgm5WGxg/0?wx_fmt=png)

混联混动系统，如图3所示，是串联混动系统和并联混动系统的组合。  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJcvicnesp0VVzzDvCmBIKekP82vLWIuckIofh0H43aOS1BpficQ9zAdYA/0?wx_fmt=png)

东芝1991开始生产并联混动系统产品，扁平电机安装在发动机和变速器之间且不改变动力系统布局。东芝有超过20年混动汽车系列产品经验，如图4所示。2006年发布一款用于混动卡车的永磁电机。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJ4ibktFpficFfwPia2iasmALmyaT1lyGVNSR152DVWGPAv5Xg2GtSSaweng/0?wx_fmt=png)

* * *

**2.永磁磁阻电机**  

混动/电动汽车的电机驱动系统运行速度范围高至1:5，所以希望节能就需要在大的速度范围内总的效率都高。目前具有高功率和高效率的永磁电机（PM）应用在很多驱动系统。但是，永磁电机需要通过弱磁控制气隙磁链以保持电压恒定以能恒功率运行，因永磁电机的反电势和速度成正比。

然而，内置式永磁同步电机（IPM）也很难在超过1:3的速度范围内恒功率运行，如图5所示。高速区间增加的弱磁电流导致效率较低，并且当弱磁控制失效时过电压可能引起逆变器的电容和功率器件损坏。作者研发了PRM来解决IPM的缺点，通过改变永磁体的位置和磁路产生大的磁阻转矩。增加磁阻转矩的同时减少了永磁体的用量，减小反电势，最大运行速度范围超过1:5，高速区具备更小的弱磁电流和更高的效率。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJicg5mp8QR2rO6icaoTRPceufflkibfGs3bzUjUyj05uQqDhuoRf7UEic9g/0?wx_fmt=png)

图6展示了一个典型的PRM结构。转子内的空气孔控制磁通流向增加凸极比。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJibZD5ZAgHdYDn1kLd9wY2hk1bsEXcw0jj9gJXnnSicugPITb8hxlBIkg/0?wx_fmt=png)

* * *

**3.电机噪音抑制技术**

在混动乘用车电机的发展过程中，主要有3种噪音。产生原因是：1.电机高功率密度；2.小气隙；3.没有工业电机的成熟的定子支撑。

第一种噪音是电磁力空间分布和频率与结构固有频率吻合时产生。解决方法是改变转子极数和定子槽数的组合，因为受安装支撑的约束不能改变结构。改变频率和振型之后，噪音下降明显。

第二种噪音是次谐波频率，由电磁力引起的转子偏心运动和并联回路中的环流电流引起。如图7所示，模拟转子偏心的噪音测试。除了4倍基频外的部分次数噪音在图中由虚线椭圆标记。被标记部分谐波次数明显与8/16/24/32次不同，这些噪音的趋势和第一种噪音相同。  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJdZFKGg9xJrwB2zMkfTkWynp160hgZ6qibxpwa4ZJYibh4ycn0ELVq8Jg/0?wx_fmt=png)

一种跳极连接的绕组排布方案用来避免环流和转子偏心运动，如图8所示。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJHsCMrVOpRwNZCUZRkVYUMib98o5X83xiaHpxRoCFUxwSDrjfxsjhVfDg/0?wx_fmt=png)

图9展示具有偏心的跳极连接坎贝尔图，次谐波频率噪音基本上消失，这是一种非常有效针对第二种噪音的改进方法。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJ0AicKrXmWNVbDnJ4TxONOdtM138GqicVV03iaux3OL51xRLWfkcnQxTRA/0?wx_fmt=png)

第三种噪音是电机扭转共振，由齿槽转矩和电机扭转固有频率吻合而共振。当由斜极引起的齿槽转矩的轴向频率和电机的轴向固有频率吻合时产生共振。这种现象可以通过优化转子的斜极角度和组合来优化。如图10所示的4-step V斜极方案可以保持转矩波动补偿并且保证最大转矩。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJHxM1NITp1eiaDtc949oic2qJ8QpoG7zq3jIHEu0jX2cwHTSMkezEgAaQ/0?wx_fmt=png)

图11展示了4-step V斜极电机48阶噪音和速度的关系的FFT结果，3000~4000rpm的噪音案预期大部分被抑制。这种方法用于改变电磁力的轴向分布使之远离电机轴向扭振固有频率非常有效。

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJQ7SiaKCdN6u6r8Ody4ccpiaoKEbpQ7kRBTFDHC88y62I89UtvWkJ4Ticg/0?wx_fmt=png)

* * *

**4.下一代电机发展**

PRM在低速时使用磁阻转矩达到了大转矩和高效率，在高速段降低了电机的弱磁电流也达到了高效率。为了降低损耗，还需要在高速运行时能提供大转矩和高效率，但是PRM很难满足这两个需求，因为PRM是恒磁动势（magneto motive force）。

在PRM之后东芝已经开发了一种新的技术，根据载荷和速度控制永磁的磁动势。这个下一代电机是变磁动势记忆电机。图15展示了传统电机和记忆电机的转子。传统电机只采用用恒磁化能力的永磁体。记忆电机采用两种永磁体：恒恒磁化能力的永磁体和变磁化能力的永磁体。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJUZRPiavW21Uzv4uIJJHbIm64ia6nWcYtfCGLJFxCsQ7ndF8sR7T0iabjw/0?wx_fmt=png)

变磁化能力的永磁体被增加的d轴电流磁化，如图16所示。电枢绕组中的d轴电流产生一个定向磁场改变变化磁体的磁场，像图15中的浅黑色箭头。如果负的d轴电流增加，变化磁体磁极将反向，如图15中浅黑色箭头。这种情况下，恒磁化永磁体和变磁化永磁体形成的总永磁磁链将明显减小。然后，如果正的d轴电流增加，变磁化永磁体的极性将会相反，被磁化成初始磁化方向。记忆电机在更宽的速度范围内比传统电机达到更高的效率，如图17所示。因为记忆电机可以随着转速的升高降低总的永磁磁动势，在很宽的速度范围内降低了弱磁电流，减小铜耗和铁耗。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJkLbqgQTZYWuKFGRJ8X3UiavSMj6t3VHVSzAcLC47rial1Y6EkVP0xzEQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJouDISGZ70RKIticvXO2mMxmvJUWkkCtibNYCLOtAy9s7Udv27l8GbgYg/0?wx_fmt=png)

东芝制造并测试了一台原理样机。为了验证通过d轴电流改变磁链和转速的关系。在确认记忆电机的原理之后，按混动/电动的实际尺寸设计了记忆电机来评估使用变磁化的高速铁耗影响。8极、功率60kW、最大转速1.2W转。

评估结果展示在图18和图19。  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJYrMiacdSicxQrBYSOk8Dx67H85wsuActqHms1NibER0QTvedCfrXCTEIQ/0?wx_fmt=png)

  

  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwjaZWL1QbbmjOtPAGajntJvrNdOCTlcLheJiapRfG9cLNS8suNeDrrwUgLvZuQFibxAPr7svwCUHbA/0?wx_fmt=png)

图18展示绕组d轴磁化电流和感应电压的关系。100%感应电压代表磁动势最大。图18展示磁化电流影响下的磁动势。根据测试显示记忆电机可以降低全转速范围内的空载铁心损耗。

结束

* * *

  

译者总结：

原文中有一段讲绕组匝数和并绕根数对电机性能的影响，感觉是凑篇幅的内容，也没有什么新意，在译文中省略了。

目前电动汽车电机的研发还是集中在提高磁阻转矩比例（高磁阻转矩永磁电机），下一代电动汽车电机的方向可能是在变磁动势电机（记忆电机）。

噪音是电动汽车电机的重点关注对象，东芝提炼了3种主要的噪音并分别提供了一种解决方案，具备一定的参考价值。

memory motor，后期再做详解。简单理解，即是变永磁磁动势电机。

* * *

  

索取原文，请在留言区留下邮箱。

  

欢迎推荐优秀文献，国外电机最新咨询！

欢迎指导！欢迎讨论！

  

推荐链接：

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

[玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)  

[【电机英语翻译小组招人】](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=2&sn=6aacf17c473fac528180dddb3c18aa80&chksm=ea646182dd13e89456c95cb7717fbbbe030bd112c913d800c576805a9a7295e29d375bf35201&scene=21#wechat_redirect)  

  

长按图片，识别二维码，关注我哟

> ![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=png)