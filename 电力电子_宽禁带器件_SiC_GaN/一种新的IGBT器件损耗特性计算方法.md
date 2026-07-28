# 一种新的IGBT器件损耗特性计算方法

原创 贺敏霞 , 黄峰 SiC碳化硅MOS管及功率模块的应用 2026-03-20 08:27 湖北

> 原文地址: [https://mp.weixin.qq.com/s/p7Zr0mrSEhXxzohmJT5e7g](https://mp.weixin.qq.com/s/p7Zr0mrSEhXxzohmJT5e7g)

文章来源：湖南工程学院学报(自然科学版)

作者：贺敏霞,黄峰,彭游源,海鑫(湖南工程学院电气与信息工程学院,湘潭411104)  

摘要:绝缘栅双极型晶体管(IGBT)在新能源中广泛应用,其损耗特性对系统能效和寿命至关重要.传统单一损耗成分分析方法存在精度低、可靠性差等问题,难以应对新能源系统复杂工况.为此,本文提出了一种改进损耗计算方法,通过明确IGBT导通损耗和开关损耗的成分参数,结合温度、电流和电压等多变量,建立了全面的损耗计算模型.结果显示,该方法具有高准确性和可靠性,提高了损耗计算精度,为IGBT器件优化设计和系统能效提升提供了新思路.  

关键词:IGBT;损耗特性;损耗计算;高效能电力电子

0.引言  

随着电力电子技术的迅猛发展，绝缘栅双极型晶体管(insulated gate bipolar transistor，IGBT)成为电机驱动、可再生能源系统等关键领域的核心功率半导体器件.然而,IGBT在运行过程中不可避免地产生多种损耗，这些损耗限制了其性能的进一步提升，对器件的寿命和可靠性构成严重威胁，直接影响系统的能效表现.IGBT损耗特性研究十分重要.近年来，相关政策和文件明确指出提高电力电子器件能效、延长使用寿命的重要性，为IGBT损耗特性的研究提供了有力的政策支撑.  

文献［1］分析了IGBT的导通损耗，提出了一种具有内部阻断结和超结的IGBT;文献［2］和文献［3］提出了开关损耗的影响因素及计算方法.然而，这些研究往往侧重于单一损耗成分的分析，未全面考虑新能源系统在各种工况下的损耗机制，导致计算结果与实际情况存在较大偏差.文献［4］综合考虑多种损耗成分，但模型构建较为简单，忽略了温度、电流和电压等多种关键因素对损耗的影响，以满足新能源系统实际应用的需求.  

针对上述问题，本文提出了一种新的IGBT损耗计算方法.首先分析IGBT的工作原理和不同工作条件下的损耗机制，探讨导通损耗和开关损耗的计算方法，引人温度、电流和电压等多种影响因素，构建新的复合型损耗计算模型.  

1.IGBT基本结构和工作状态

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskOicsNgWjRQrqtn2UJunQcLLcmmO73OUJVEKNrwuuHmQgRyav0rlBtKLc4erichzUPE7QYHn2A1byg/640?wx_fmt=png&from=appmsg)

基本结构由栅极G、集电极C和发射极E组成，其中栅极通过绝缘层与衬底隔开，控制IGBT的导通和关断;发射极E连接到输出负载的电源端，集电极C则是电流流向负载的出口.此外，IGBT的N型衬底和P型区域形成PN结，实现电流的流动，使得IGBT在导通时能够承受髙电压，并具有较快的开关速度.工作特点包括低导通损耗和高效的开关能力，适用于各种电力电子应用，特别是在要求高效率和可靠性的场合.  

IGBT工作状态分为以下三个阶段.  

(1)开通阶段：栅极加正电压，绝缘栅电场使衬底N型区产生电子，PN结导通形成导电通道,IGBT从截止过渡到导通，电流从集电极流向发射极，此过程因电压电流变化产生开通损耗.  

(2)导通阶段：开通完成后进人此状态，电流持续从集电极流向发射极,IGBT导通电阻低，功率损耗小。  

(3)关断阶段：当栅极电压降低至阈值以下时，导电通道逐渐被关闭，电流也随之逐渐减小.IGBT的关断速度与栅极电压的变化速率、负载特性等因素密切相关.在关断过:程中，同样会因为电压和电流的变化而产生关断损耗。  

IGBT的损耗可以分为开关损耗和导通损耗，其中开关损耗又分为开通和关断两部分，工作波形如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskOicsNgWjRQrqtn2UJunQcLTE2SgNZX5HicHuHuUD2AOq1bM6VcFQCOwbeeq2E8XKZM3SBL9GvREfg/640?wx_fmt=png&from=appmsg)

2.IGBT损耗计算  

2.1 IGBT开通部分开关损耗

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskOicsNgWjRQrqtn2UJunQcLhkiaTUEpyy1dfordd2Uh1u7OWG8WOSOxqn2yiaJlWTjmInDTPZ5YzPtQ/640?wx_fmt=png&from=appmsg)

理想状态下，单个IGBT开通部分波形如图3所示.针对开通部分，电压电流波形为线性.

分别找到电流开关波形中的两个坐标(0,0)和(△t\_on，Ic)，那么电流线性方程为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOS0A3H6B1lTGrSRAicXRMeGaCP68em8Xg2WEPmNYtYmNxblYUr1RIlkPvicQGjEPiaxPfKWhBM6v1ZQl0VImichyiaZpOdjibhvec7Y/640?wx_fmt=png&from=appmsg)

同祥找到电压波形中的两个坐标(0,VCE),（△t\_on,0),那么电压线性方程为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNPzCfVIjfqJNw50WrmichxoMgNvicbmXFUWhdXI7zjxuvgrB4HO0z0Xl1GSNASYVngvB9bqMq10xwcHwOyO0OdTibQpgoDgpW7Bg/640?wx_fmt=png&from=appmsg)

根据损耗定义进行开通损耗Eon计算：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPsfgNmzqAu6UCia0dFGicxInQfxR9A9T7AFaGaOQZaqlkjmzyuX6AVKAS1YBFknUOyfrd65Mc24M9kRHtw5R0jDOsVoZibQwyNNE/640?wx_fmt=png&from=appmsg)

将式(1)和式(2)代人式(3)中，推导过程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM1Fgu7KTk2I6QicmkTqMd7IajHNvuKZtFqqTLU9tzwZhI0rZxbfPj45ST8T4icP9cmkrOkPyK5Hicm1QwDky8Yqo9CibEBHS10ZrU/640?wx_fmt=png&from=appmsg)

被积函数的积分变量为t，其余为常数，故t²的原函数为1/3t³，t的原函数为1/2t².

实际情况下，IGBT的开通波形并不是完全线性的，下面以实际储能系统为例，将波形分区间进行处理，把整个波形VCE的斜率分成几个部分来近似计算,对应时间分别是△t1,△t2,△t3,如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskOicsNgWjRQrqtn2UJunQcLWrL0o0ktXRrzzIQnWgphvuRYUOPbM13Z3iciaiax61T5ic7qQ9Jia9ltufQ/640?wx_fmt=png&from=appmsg)

针对△t1区间，找到电压和电流波形与△t1时间标注线的四个交点，以C点为原点建立坐标系，如图5所示，可得A(0,VCE1),B(△t1,VCE2),C(0,0)（△t1,Ic1）.

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskOicsNgWjRQrqtn2UJunQcL0xA3P5jDqjM8qJDtj4Bano7Xm7t6ZgRk6ic3CAWV0dL3eptkHJK8FIw/640?wx_fmt=png&from=appmsg)

△t1内的VCE表达式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMJJ0eg7hU9sZCvkTq2KTy6bzN3g6MvFyzojsx9mNaelv87rS7ydS5ibG4WibKzLzPveqCEnUBT1icGXw2GS78w1WhHRaIdh5PXrs/640?wx_fmt=png&from=appmsg)

△t1内的Ic表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPdKiaqrGOKWQ7z9RS3tTPsu0YsRqCSiasQhzfZibQ1SL1z8PM0ViaepdHMibgcJHlpOw7NkYNt17Qgx99icsaia6BkBahmllfaicDqVgQ/640?wx_fmt=png&from=appmsg)

△t1内的损耗表达式及推导式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkPbewMFibtxEloHsInZascRu75K2PicLiaFY0oQNmUGNdlgmicjS4icW0icQRO5sgzfLkMxRbT81brBmlepQmSCMRiaJUyI0W9IYsUw/640?wx_fmt=png&from=appmsg)

被积函数的积分变量为t,其余为常数，故t²的原函数的原函数为1/3t³,t的原函数为1/2t².  

由示波器可知：VCE1\=260V，VCE2\=220V，IC1\=20.3A,△t1\=70ns,代人公式(7)可以得到：E△t1\=0.165mJ.  

针对△t2区间，找到电压和电流波形与△t2时间标注线的四个交点，以EG两点连接所在直线为y轴建立坐标系，如图6所示，可得E(0,VCE2),F(△t1,VCE3),G(0,Ic1),H(△t2,Ic2).

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMqiaczpodP4EFOGI9BYv0lUheibOQxldq0CcH4rvM8DN2YibHuuPNicia5m1oaIwiaVfJ6l9xricEuyT2Wyye6xdkBl5BMC3Eq7Dcic7I/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP3MFHia29lL6bNRH2qtnP9243bU4M3P59jfOrAevnXoI98h2auarGTMGlZu5Y0WMIFMYgsvhicGfKkKHtia4PYEbcHYzkx90IicfQ/640?wx_fmt=png&from=appmsg)

由示波器可知:VCE3\=50V,VCE2\=220V,Ic1\=20.3A,IC2\=29.3A,△t2\=40ns,代人式(10)可以得到E△t2\=0.129mJ.  

针对△t3区间，找到电压和电流波形与△t3时间标注线的四个交点，以KI两点连接所在直线为y轴建立坐标系，如图7所示，可得I(0,VCE3),J(△t3,vce3),k(0,Ic2),L(△t3,Ic3).

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP5UATP4ENoJ6MapCJwzg9iazZ1CCdYpFkdptfHk9lNNxyCX6nj2IhNb6nicWO3fvmmVJu2K0vEicPoGHUsoic5zVw3rxJqIc4usUc/640?wx_fmt=png&from=appmsg)

△t3内的VCE可取常数（IJ连线可近似看为一条非坐标轴上的水平线，斜率为0），表达式如式（11）所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPxniaKFAG4VxwLmg3cdDoCicaicJWV3GSJBNBMljbvlw0cbZHyexR8zfkfBXKGG5QFaEEE6QoTvLcoBuGuibemWIfyG8noDj5QyYo/640?wx_fmt=png&from=appmsg)

从示波器中可以读出：VCE3\=40V,IC2\=29.3A,IC3\=19A,△t3\=30ns,代人式（13）可以得到E△t3\=0.029mJ.  

故实际情况下，单个IGBT开通的总损耗如式（14）所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTPxo9Ff8hOXGLpImmHqAHgruvMnzxk9Y7u5EsTnvW7PDecgoowxHfqhyjKjhHSVsSOj4NgYiagWk6H3oQskmd15xch1BFM81o/640?wx_fmt=png&from=appmsg)

2.2 IGBT导通部分损耗计算  

IGBT导通状态下处于饱和状态，故只需要对导通状态下的饱和电压VCE和电流IC乘积积分即可，损耗计算如式（15）所示:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMogg31hdcxqXAbZibZ6HiaCQkL3TLuD1KY03RUIJ24cgFS3P03gCzvHviapGLxm0tWe9mXmNwxU7J8ZqDMxz4kwvNWI6RdXuwJqs/640?wx_fmt=png&from=appmsg)

实际情况下，IGBT导通状态下的VCE和IC相关联，VCE随IC的变化而变化.  

实际波形如图8所示.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMxTeOtxgibPMicMggCjaoEFyLOXNWTTacS6cDTsrZdZc75B64wWAGzm6ktmqvwcUaibOia7cBOiaHp9ntr2YWIOjJWrAmqFmDickXsM/640?wx_fmt=png&from=appmsg)

从波形上看,IC在IGBT导通状态下线性上升,对应的VCE应该也是线性增加的，但是因为实际测试中VCE有高压状态，会选择高压差分探头测试.当IGBT导通时VCE只有1~2V，这时差分探头对低压部分的测试精度就成了问题，可以参考规格书中的VCE\-IC曲线，如图9所示.

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMIhfVR2GACBO34yZ0ibTtFjBTLKsGLjHzY7I6gQAz17C5yWtSXPJMMSeTHtSFcCRv7lsibMCHzG4oKCudz6X1jASna9JVEeyF5I/640?wx_fmt=png&from=appmsg)

实际测试波形电流在20A左右，把20A左右的曲线单独放大取出来，如图10所示.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOIW79BEKDRlDRxAAQPZZ6v1BmuBcNKFiaK1OUDQk5boibL23ic4MHzt3licwZlcHmp1gWZHglhpjKa4GzILK2guVcyMULibpf778e8/640?wx_fmt=png&from=appmsg)

导通部分VCE表达式如式（16）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNeUPYibSKvc3KYkTuRIFY8J458giciaeAY1jjeFEib3nxbvo4wEtkGYr5a3GZO8BVsMYUa9ZpNmkUAStxIafDbmjWTqCRCiaC7HEnU/640?wx_fmt=png&from=appmsg)

VCE曲线选取与测试波形电流有关，故VCE表达式会根据测试电流的大小有所改变.  

针对导通部分电流，首先在波形上取A（0,IC1）,B（△t,IC2）,导通时间△t,如图11所示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNf4I42XBlPlnOCEZkTRr4ZEXe85UoljKqlNZxkORHJibTdJ84dtMHPc0QicfrS8kzUw85PEP9nSRRibjd24tfjpcFO1EELAFLKics/640?wx_fmt=png&from=appmsg)

△t内的IC表达式如式（17）所示:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNz2OJqYyiaBtwofI4Y4O1cyLDlhpic851fHCIaFShWuzjCbsrNRSfF1Q8rhuHUgUqFAnwbFftASTNrP6jiaYs1WBNv5sibc17sw3Y/640?wx_fmt=png&from=appmsg)

△t内的导通损耗表达式及推导如式（18）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNuHj0v3cSV1qhOiaiaEg5xh1gm5a1v6hutvQ5RzkAZ5PMILbto4JrvT6GFjNayuKp5FJWpVsVfhzxTBBre3eS49zcFzaJWuA5FY/640?wx_fmt=png&from=appmsg)

被积函数的积分变量为t，其余为常数，故t²的原函数为1/3t³，t的原函数为1/2t²，1的原函数为t.  

从波形读出：IC1\=9.5A，IC2\=14A，△t\=14μs，代人式（18）可以得到Estatic\=0.166mJ.  

关于VCE-IC曲线，规格书中通常会提供常温（25℃）和髙温（150℃或者175℃)两种，为了考虑复合型计算贴近实际工作状态，建议选择高温曲线.  

2.3 IGBT关断部分开关损耗  

理想状态下，单个IGBT关断部分波形如图12所示.针对关断部分，电压电流波形为线性.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSdzfamtJXtmhuQShhnsb3zOhFo1MgqkDxyGF6PIZjyRy8rdsHoPH1SnFZteVgEz4XQ8ib2VsibJFcxzqC0V5HNpVPHNmX4picPA/640?wx_fmt=png&from=appmsg)

分别找到电流开关波形中的两个坐标（0，Ic）和（△t\_off，0），那么电流线性方程如式（19）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnwAWMOcqibu00yZufoKuHIqlcMxvtQAicMuGaXFbegDLA3DXvdaJ1VI5Nicf9tUaNGWXGXrXlof9CR5NDzpk7Fic8rDh4IwVZh2Y/640?wx_fmt=png&from=appmsg)

同样找到电压波形中的两个坐标（0,0），（△t\_off,VCE）,那么电压线性方程如式（20）所示：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNicZnOOxBT3uEHWOTrFOibdXicub173qOD5aGPEUwtbkBIFQEMMK3TXiaGZArGWJxULZrBLYdFAmXDEcXBF7h9BbUr6offkz7jEOg/640?wx_fmt=png&from=appmsg)

根据损耗计算的定义可得关断部分损耗如式（21）所示:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO8pxlVOkGZIe6TxreB6kFcia6MzOjMBSdrBYpaTIREuibMWP6cVj4jY1sHyrNMicvwBPNQnBMWWeUD33YHsdXiaI0g8ehbeXBsmXg/640?wx_fmt=png&from=appmsg)

被积函数的积分变量为t，其余为常数，故t²的原函数为1/3t³,t的原函数为1/2t².

实际情况下关断波形可以参考开通波形，计算方法同开通部分类似.

3.结论  

本研究对IGBT器件的损耗特性及其计算方法进行了深人探讨，详细分析了IGBT在不同工作条件下的导通损耗、关断损耗和开关损耗，揭示了影响这些损耗的主要因素.通过提出的改进损耗计算模型，实现了对IGBT在实际应用中更全面、准确的评估.  

在理想状态下,IGBT开通和关断部分的电压电流波形被假设为线性，通过具体的线性方程和积分计算方法，得到了开通损耗Eon和关断损耗Eoff的理论计算公式.然而，在实际应用中，IGBT的开关波形并非完全线性，因此本研究进一步将实际波形分区间处理，通过详细分析△t1、△t2和△t3时间段的电压和电流波形，得到了各区间的损耗表达式，并通过具体数据(如VCE1\=260V,VCE2\=220V，Ic1\=20.3A,△t1\=70ns等)进行了验证，准确计算出了实际开通损耗.  

在导通状态部分，虽然IGBT处于饱和状态，损耗计算相对简单，但考虑到实际应用中VCE与IC的关联性，本研究通过详细的电流波形分析和VCE-IC参考曲线，得出了导通损耗的具体表达式，并通过实际波形数据(如IC1\=9.5A,IC2\=14A,△t\=14μS)进行了精确计算.  

综合分析，本研究不仅提升了损耗计算的精度和可靠性，也为高效电力电子系统的优化设计提供了有力的理论支持与实践指导.通过与实际数据的紧密结合，本研究为后续实证研究和实际应用奠定了坚实基础，进一步验证了改进损耗计算方法在实际工程中的可行性与有效性.

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOvBtnjxuS2cPQYnRO6TT0jj2LLFiceamPticZVUDqVZQ6LZibQXJicYVveh4hUicyauS79S4YVYKOGnhKKq8hZhjviajpcEWiburgMJI/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOicH5fOibAOcMdpj2Xl5l6ylOcZNp4XnVzJdtTF4IIgO0e8frP8WbAibXZft9VX6WFMbvRGoiabV3P90aytZ4Ayyl9jibWhZ703D6s/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPNqcxicibQIxoHLPgddFP7vl8rLIfAVVAhRKSLicHk1kwybTeqQ5SWMYf1mtyqUhSrxW0aGD6JvjvBV1TuZHfeYLrHmqiaFOmMR00/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMRXiaC4Xsk2zpXSNc7VluAo0twAiaNXWjVF4POu84VpzIic5x6ibt1nz1p0CVU4IvX4wb1bV3U7FrxZcPDnn25kjYHxPWXkY7DUoY/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)