# 基于PLS交叉积矩阵非相似度分析的MPC性能监控与诊断

原创 自动化学报 2017-03-29 09:58 北京

> 原文地址: [https://mp.weixin.qq.com/s/u1JjSMxi1mb53UTQc7KHkQ](https://mp.weixin.qq.com/s/u1JjSMxi1mb53UTQc7KHkQ)

模型预测控制(Model predictive control, MPC)作为最具代表性的先进控制策略,已经在复杂工业过程控制中取得了广泛应用.然而,在实际工业过程控制中,随着时间的推移,过程的外部干扰特性、模型失配程度、约束条件等工况也会发生变化,从而导致MPC控制系统性能会逐渐下降,最终影响产品质量甚至生产过程的安全.因此,在控制系统的性能监控与诊断研究中,对MPC系统的运行性能进行实时监控,及时发现性能恶化并诊断性能恶化源,已经成为该领域的研究热点之一.

控制系统性能监控方法

控制系统性能监控方法主要分为基于过程模型、基于用户自定义以及基于数据驱动的方法.

其中基于过程模型的方法,如最小方差性能基准、LQG性能基准等,需要建立过程的机理模型,而对于复杂的多变量工业过程,建模需要消耗大量的人力和时间,花费巨大的成本,同时基于模型的性能基准过于理想化,实际中的过程控制性能往往不可达.

基于用户自定义的性能基准根据用户对控制系统的性能要求设计具体的控制性能基准,相对于基于模型的性能基准更加适合于实际应用,但该类方法需要结合过程的模型知识和用户的经验知识,同样需要较多的先验知识,不适于广泛的推广应用.

在现代工业过程中,分布式系统和SCADA的广泛应用,实时采集和保存了大量过程数据,从而促进了基于数据驱动的性能基准方法在性能监控和诊断领域的应用和研究.该类方法不需要过程的机理模型,具有简单有效、非侵入等特点,从而受到研究人员的关注.

存在问题

经典的基于数据驱动的协方差性能监控方法很好的解决了多变量过程的性能监控与诊断问题,同时考虑了输出变量间的相关性,从而更加符合实际应用.然而,该方法仍存在以下问题,

1)没有考虑性能变化对过程变量与输出变量间相关性的影响,

2)只考虑了协方差所张成的超椭球体体积,而忽略了超椭球体中的方向信息.

因此该方法仍没有充分挖掘利用过程数据中的特征信息,易导致对微小性能恶化的漏报及性能恶化源的误诊断.

MPC控制系统

针对上述问题,本文提出一种基于偏最小二乘交叉积矩阵非相似度分析的性能监控与诊断方法,用于多变量MPC控制系统. 下图显示了MPC控制系统性能监控与诊断流程.首先,考虑MPC控制系统的控制结构,构造包含预测误差的增广过程变量与输出变量相关性的PLS交叉积矩阵,通过非相似度分析方法将交叉积矩阵的非相似度比较转化为转换矩阵特征值的比较.然后提取转换矩阵中表征最大非相似度的l个特征值构造实时性能指标,对MPC系统进行性能监控.检测到性能下降后,进一步利用转换矩阵的特征值诊断性能恶化源.Wood-Berry二元精馏塔上的仿真结果表明,所提方法能够有效地提高监控性能,并准确地定位性能恶化源.

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6GatBXNia1qnXpJB2JMibjD1UHemuyXFBOQ684CJ4OZAia4r1OWHYfMxCNwg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6GadZyPQQXpiaoiart2sL4lWdwxxPgBUD6biccvr6Sn5M4K6Eyia7tZ7G0duA/0?wx_fmt=png)

引用格式

尚林源, 田学民, 曹玉苹, 蔡连芳. 基于PLS交叉积矩阵非相似度分析的MPC性能监控与诊断. 自动化学报, 2017, 43(2): 271-279

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45lib5T4m8AgId68Kmpom6GaicwOyrNkibR1aNIQoWYlkSwhUmVLpuLcujbTkVF1Xdf5I3e2z87r4Tmg/0?wx_fmt=jpeg)

尚林源 中国石油大学 (华东) 信息与控制工程学院博士研究生. 主要研究方向为控制系统性能评价.

E-mail:

 shang ly2007@163.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45lib5T4m8AgId68Kmpom6GaciaVPK1vjkicusbialypNH0D3RgCjvfTgFOwpGpPGR3zvliaiaoEzJXGy4w/0?wx_fmt=jpeg)

田学民 中国石油大学 (华东) 信息与控制工程学院教授. 主要研究方向为过程建模, 先进控制与优化技术, 智能监控与故障诊断. 本文通信作者.

E-mail: tianxm@upc.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45lib5T4m8AgId68Kmpom6GajZxEUO5VjltUaYB5RCJkW2VFa3zEOM3aazGT9IrTAQwgkHSHLSlnxg/0?wx_fmt=jpeg)

曹玉苹 中国石油大学 (华东) 信息与控制工程学院讲师, 博士. 主要研究方向为过程故障诊断与预报.

E-mail: caoyp@upc.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45lib5T4m8AgId68Kmpom6GaoibPBylScfTxoDtknC9ojJU3UVxEuokw95qy2cdtQewSbiaW9vQnnG2A/0?wx_fmt=jpeg)

蔡连芳 中国石油大学 (华东) 信息与控制工程学院博士. 主要研究方向为工业过程故障检测与诊断.

E-mail: cailianfang@163.com

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6Ga8F3pMamdD15ibVGbV7jcJnXtXLzODaGcSEoKPMnByhmkryfmiaWRGNBg/0?wx_fmt=png)

微信服务号：自动化学报

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6Ga8F3pMamdD15ibVGbV7jcJnXtXLzODaGcSEoKPMnByhmkryfmiaWRGNBg/0?wx_fmt=png)

微信订阅号：aas1963

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6Gad5MtqRX0JyRfVOJV24azQlRiag04k3Pa6bjJG0anvibmGeOelxlbBGiaA/0?wx_fmt=png)

新浪微博：自动化学报

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6Gad5MtqRX0JyRfVOJV24azQlRiag04k3Pa6bjJG0anvibmGeOelxlbBGiaA/0?wx_fmt=png)

新浪博客：Automation\_2011

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6Ga6FunWAT9bh8DFRkyBt197vESQebuxibCSNLIGKJp0eH0PfGgzhxW8Ng/0?wx_fmt=png)

联系我们：

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45lib5T4m8AgId68Kmpom6Ga4yJqqCF9lwkXjsGmOICQdMiaKo4tGBeAibTMG9To4Udiauet9bygjJ5tg/0?wx_fmt=png)