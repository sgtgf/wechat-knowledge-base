# 【好文推荐】| 定子电流矢量定向下考虑电气损耗的柔性负载振动及PMSM转矩脉动多目标综合抑制方法

原创 CES TEMS CES电机与系统学报 2021-11-19 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/Ff1TUNpqMT29OubC\_Nu41A](https://mp.weixin.qq.com/s/Ff1TUNpqMT29OubC_Nu41A)

  

中国电工技术学会活动专区

  

CES Conference

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAhKUbtZPrBeLicsOR2WjEwvynQCExUsarckmQn1libLDeibtPdgdUX3DiaA/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAKFsL73aMd3GRsyd135eJMawJv6hUjp84qn2JlWE57PpZl6G98zNAicw/640?wx_fmt=png)

  

**定子电流矢量定向下考虑电气损耗的柔性负载振动及PMSM转矩脉动多目标综合抑制方法**

**A Stator Current Vector Orientation Based Multi-objective Integrative Suppressions of Flexible Load Vibration and Torque Ripple for PMSM Considering Electrical Loss**

**作者：****余洋，从乐瑶，田夏，米增强，李扬，樊帧** 

**DOI:** **10.30941/CESTEMS.2020.00021**

**https://ieeexplore.ieee.org/document/9211087**

  

01

**项目背景**

  

  可再生能源接入电网已成为现代电力系统的发展趋势，但是新能源的间歇性和不可控性将对传统电力系统发电侧与负荷侧间的瞬时功率平衡造成冲击，发展储能技术是保证系统功率平衡的重要措施。以涡簧为储能介质的机械弹性储能(Mechanical Elastic Energy Storage, MEES)技术是近年来提出的一种新型储能技术。本文以推进机械弹性储能技术的实用化为出发点，对机械弹性储能机组储能运行的全系统模型和控制策略进行了研究。仿真和实验证明，所提出的闭环I/f综合控制方法能够使状态变量快速、准确地跟踪各自的参考值，有效地抑制了转矩脉动和负载振动，提高了系统的运行效率。

  

02

**系统框架结构**

  

     本文主要对储能箱和电机进行联合建模并对储能过程的关键控制技术进行研究。永磁同步电机直驱涡簧储能的实现方式如图1所示，通过控制电机来收紧涡簧，从而将电网的电能以弹性势能的形式存储到涡簧中。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAhFq84uZlruOeUvvffibXia1DH43icrkHecRibJF9kXQmgK9R9G6cv6bUcw/640?wx_fmt=png)

图1. 永磁同步电机直驱涡簧储能示意图

  

03

**主要创新点**

  首先将电流矢量定向下PMSM最小损耗数学模型与永磁同步电机的振动模型相结合，推导出实现柔性涡簧振动、电机电气损耗和转矩脉动综合抑制的约束条件；

  然后，基于反推控制原理，在I/f控制框架下提出了一种考虑电气损耗的定子电流矢量定向下柔性负载振动及PMSM转矩脉动综合抑制方法(简称：闭环I/f综合控制方法)。

此外，为了准确获取速度信号，本文同时设计了一种基于最小二乘法的PMSM速度辨识算法。

  

04

**研究方案**

  

  整体控制方案如图2所示：

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAaF6GVxjqsMzpBY3j0IKiaezaJs91eSkGh6JWKOzAJLYSE3ptiaW8hdqg/640?wx_fmt=png)

图2.基于非线性反推的闭环I/f控制策略控制框图, BSF：带阻滤波器，BPF：带通滤波器

  

05

**实验结果**

  选取的PMSM各项参数为：定子电阻Rs\=2.875Ω，铁耗电阻Rc\=300Ω，定子电感Ls\=0.033H，极对数P\=50，永磁磁链Ψ\=0.3Wb。最小二乘算法中的遗传因子ξ\=0.98。控制器各参数取值为：kq = 185, kw = 50, ki = 320, kqk = 270, ki6 = 440.

  使用ANSYS软件中的Workbench模块对涡簧进行模态分析结果如图3：

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAlAqVNuH2licmKkuEmmibastDdBPg6aloItsfuibsDwhsfg9LbTHSpzmgA/640?wx_fmt=png)

图3.涡簧模态仿真结果

  为了验证所提算法的有效性，团队目前已研究出MEES系统的相关原理性样机及控制系统如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bADEDookRzALAlv56QydrsqhXVQOWV5UJtEeSehtSZicBPn124GWZF3TA/640?wx_fmt=png)

图4.MEES系统样机

  为进一步说明本章所提控制算法具有更好的控制性能，设计了2个算例进行仿真实施。

算例1 PMSM转速突然变化时闭环I/f综合优化控制器的控制性能测试及分析。

  q\*轴与d轴间的夹角qL、转子转速ωr、基波电流矢量幅值Is0、转矩脉动dT和损耗Ploss的实验结果如图5至图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAIt0T8cu5vV9icsuEJV6OcZup9K805xRtPhhGx7Ks5ZwwRW7hTicfwHPg/640?wx_fmt=png)

图5. 转速变化下的qL的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAMGkZHib995d5l9U9bStqF8LNCwAjggJmql5feabTfibY3ribGt6jqic8ZA/640?wx_fmt=png)  

图6. 转速变化下的wr的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAr7eU6cUfae0WCoIJ7ug00Xn8cYM0DiarwnY2JBS8F3bvmwfDWTB9lFg/640?wx_fmt=png)

图7. 转速变化下的is0的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAHvgW2YztbCHFKC8l4drVKJgp7fiaJn83nWaPiafpD3DMZoGcAz5FoTtg/640?wx_fmt=png)  

图8. 转速变化下的dT的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAA980910VfEfrj61szZicqDxREazOaN5Jy8SdIxVmULFOg2EIibRProJQ/640?wx_fmt=png)

图9. 转速变化下的Ploss的运行波形

  

  算例2 不同控制策略的控制性能测试与比较分析。

  实验结果如图10至图14所示。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAVAJaeRXk6YIVJjCp29uic8k89JicYwdnqlOqfYVdbxntiavAoUnvXibM3w/640?wx_fmt=png)  

图10. 不同控制策略下qL的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bA1c4sYiaQ0dyQ3R45FsoKjnHia6vnA2c2EOkiaQFUfbF0S4BwEfyLKzp0w/640?wx_fmt=png)

图11. 不同控制策略下wr的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAbHu18aico01WBJtExBO8YibSdUw3h9d4fCaQnOCzDIaT7FZoveM6Jibicg/640?wx_fmt=png)

图12. 不同控制策略下is0的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAl9TeIVia9XnmHaL0AHFckG4aSS777cbRnQhPyDweAOEJHiau9uTAEMsg/640?wx_fmt=png)

图13. 不同控制策略下dT的运行波形

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAhiaEcnZ3uzFdN2XbeJHF4Vq78Jg4W8GOZRCfa4po72KicpIbPicKKHiaRw/640?wx_fmt=png)

图14. 不同控制策略下Ploss的运行波形

06

**结论及成果**

  

(1)在闭环I/f综合优化控制方法的控制下，涡簧的振动和PMSM中转矩脉动均得到了很好地抑制，机组损耗被有效抑制，机械弹性储能机组保持稳定运行。

(2）在所提闭环I/f综合优化控制方法的控制下，机组各项运行参数均能快速收敛于参考值，转速输出平稳。

(3)提出的闭环I/f综合优化控制方法具有良好的动态性能。在转速发生突变时各项运行参数虽然会产生微小的波动但能够快速收敛并恢复稳定。

(4)所提基于最小二乘的转速辨识方法能在较宽速度范围内确辨识出电机转速。

  

  

  

  

  

  

  

  

**引用本文**

  

  

  

  

  

  

Y. Yu _et al_., "A stator current vector orientation based multi-objective integrative suppressions of flexible load vibration and torque ripple for PMSM considering electrical loss," in _CES Transactions on Electrical Machines and Systems_, vol. 4, no. 3, pp. 161-171, Sept. 2020, doi: 10.30941/CESTEMS.2020.00021.

  

  

  

  

  

  

  

**本文作者**

  

  

  

  

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAwnoIvdnEU20LHfUkx4am39aG5npWAXu3vjqZqf6uWNBsts2sKXYACA/640?wx_fmt=jpeg)

  

**余洋,** 博士，副教授，华北电力大学（保定）电气与工程学院硕士生导师，主要研究方向包括电能存储技术和柔性负载的优化调度。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bADGRlM9p9AEbjemf5DBPDibXYbbRVh42Fa0I4iaq4ekicERmplX04OZmQQ/640?wx_fmt=jpeg)

**从乐瑶**，硕士研究生，华北电力大学（保定）电气与工程学院，主要从事永磁同步电机运行控制方面的研究工作；

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bALTXBDYYWjZgFLIxibXuNTibYHtS0ic1lxq2tOiazPMuUOeGlwFLIvTJj2A/640?wx_fmt=jpeg)

**田夏**，硕士研究生，华北电力大学（保定）电气与工程学院，主要从事永磁同步电机运行控制方面的研究工作；

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bA0d22jy10L7usyoEhVtlAatkQSZOTO66GEnpWC55QALCSrlm4dYe9Lw/640?wx_fmt=jpeg)

  

**米增强，**教授，华北电力大学（保定）电气与工程学院博士生导师，主要研究方向包括包括电力系统运行与控制、电能存储技术和柔性负载的优化调度。

  

****下载论文PDF版**，请点击左下角“阅读原文”，访问期刊网站。**

  

  

推荐阅读

[CES TEMS征稿|高效节能及智能化电机系统专题](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483803&idx=1&sn=e51dd22d637131821bcd9aa68620b52c&chksm=cea83062f9dfb97461abebb36cf3b71dfc3f735b1cb99eba7d3193f0935a380989b9461c315f&scene=21#wechat_redirect)  

[【好文推荐】| 针对直线压缩机的一种新颖的基于MRAS的谐振频率跟踪控制方法](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484227&idx=1&sn=c4ecc03089c0c0b3c294d8d6cbf84367&chksm=cea832baf9dfbbac11aadd8f95bf1785308d19641acef3a3a05f9c1c27aa330c0d6ff3d00ab2&scene=21#wechat_redirect)  

[【好文推荐】| 磁通切换永磁电机两种拓扑结构的性能分析与比较](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484161&idx=1&sn=91d385afdf95a11c8d2ded4c90bbeae2&chksm=cea832f8f9dfbbee8e85c8b255f833315c9ce1b4b1a90060d5a3a8397f0d993cd4e85a52c485&scene=21#wechat_redirect)  

[电气工程专家王成山、饶宏当选中国工程院院士！](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651234970&idx=1&sn=8a1a439d265700fa474928c9aff99da9&chksm=8470813cb307082a2a09df2160182b23efcc4a68523a51fa8de56997834b3ec504dd5215e0d6&scene=21#wechat_redirect)  

[《电工技术学报》2019年优秀论文｜改进型偏差耦合多电机转速同步控制](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651234970&idx=2&sn=5bfa2eb48882ee9655cac7f66002e614&chksm=8470813cb307082a4b4b40b99cce886eb79c54f8e6b707a5c2c8f5e885c8b0824e51dd601264&scene=21#wechat_redirect)  

[北京能高公司金成日总经理：轨道交通与清洁能源融合潜力评估、应用模式与关键技术](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651234926&idx=1&sn=343c33ab06eac7b9fffd5e305898070d&chksm=847081c8b30708de33d8ed44ce03a074b6f63ab9fe570e4da74bdea3070901e04795e803a5eb&scene=21#wechat_redirect)  

  

  

> 联系我们

> CES TEMS编辑部：010-63256823
> 
> 邮箱：cestems@126.com
> 
> 网址：http://www.cestems.org/
> 
> 投稿网址：https://mc03.manuscriptcentral.com/tems
> 
> 官方微信号：CESTEMS
> 
> ![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ178bshX9EHBcNIFgWibDj4VlHRfWwcwD39zubP9HbOnLzgYwjkFzpVU7gFhkpcs6NsS7n9JdC9mdOicg/640?wx_fmt=jpeg)

  

**中国电工技术学会**

**新媒体平台**

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAX4j19rFGgA2ZdHfO1rbXhics5ENTsdmbicdJbV4BQTiaOWkdaQIXMZwDQ/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bA0xBoqq06oASuSyutKr4BDXsZtAp9Boa5xQxwibjKEfxhcjeiawcGwBVQ/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAXHEeJt7ttkLLCR8L90WEPsD3Lo0Jd6vXl4sp2CEyicFYcgWaZALlxWQ/640?wx_fmt=jpeg)

学会官方微信

电工技术学报

电气技术

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bApdRdZldFKj89YYwnFBvMvTe5Ox7yIzejZ4yXibdrAiaGqzfvKHe0J7ZA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAjHF2iaPzoJCzVz7yuNLFRvWiaZKw5UJrqHtAMpLXWyic1yWRl6W5keGUQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ17ib3S9FggEz5g2sZBc4gl9bAQiacXvsrZZS4LvHqzYc3nGTcpmX1v9esALtb7PbbzUMP1KTv9Vt5JrQ/640?wx_fmt=png)

学会官方B站

新浪微博

今日头条号