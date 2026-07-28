# 文章精选 I 基于深度神经网络的交流电力电子系统动态建模方法的系统评估

原创 CES TEMS编辑部 CES电机与系统学报 2023-12-14 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/syJKCtV5\_DOdrs\_71CYzzg](https://mp.weixin.qq.com/s/syJKCtV5_DOdrs_71CYzzg)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

****Systematic Evaluation of Deep Neural Network Based Dynamic Modeling Method for AC Power Electronic System****

 Yunlu Li1; Guiqing Ma1; Junyou Yang1; Yan Xu1

1. Shenyang University of Technology, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/10018856)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10018856)

Y. Li, G. Ma, J. Yang and Y. Xu, "Systematic Evaluation of Deep Neural Network Based Dynamic Modeling Method for AC Power Electronic System," in CES Transactions on Electrical Machines and Systems, vol. 7, no. 2, pp. 137-143, June 2023, doi: 10.30941/CESTEMS.2023.00011.

**摘 要**

  

  

由于可再生能源的高渗透使得交流电力电子系统(ACPES)的动态特性变得复杂，因此建立准确的动态模型以获得其动态行为是保证系统安全稳定运行的关键。然而，由于没有内部控制细节或内部控制细节有限，状态空间建模方法无法实现。它导致ACPES系统成为一个黑箱动态系统。基于深度神经网络的动态建模方法可以在不获取内部控制细节的情况下，利用端口数据模拟动态行为。然而，深度神经网络建模方法很少得到系统的评价。在实际中，神经网络的构建面临着海量数据和各种网络结构参数的选择。然而，样本分布的不同使得训练后的网络性能差异较大。不同的网络结构超参数也意味着不同的收敛时间。由于缺乏系统的评价和针对性的建议，在实际工程应用中无法快速方便地实现高精度、高训练速度的神经网络建模。为填补这一空白，本文从样本分布和结构超参数选择两个方面对深度神经网络进行了系统评价。详细分析了其对建模精度的影响，并提出了一些建模建议。多工作点下的仿真结果验证了所提方法的有效性。  

  

**Abstract**

  

  

Since the high penetration of renewable energy complicates the dynamic characteristics of the AC power electronic system (ACPES), it is essential to establish an accurate dynamic model to obtain its dynamic behavior for ensure the safe and stable operation of the system. However, due to the no or limited internal control details, the state-space modeling method cannot be realized. It leads to the ACPES system becoming a black-box dynamic system. The dynamic modeling method based on deep neural network can simulate the dynamic behavior using port data without obtaining internal control details. However, deep neural network modeling methods are rarely systematically evaluated. In practice, the construction of neural network faces the selection of massive data and various network structure parameters. However, different sample distributions make the trained network performance quite different. Different network structure hyperparameters also mean different convergence time. Due to the lack of systematic evaluation and targeted suggestions, neural network modeling with high precision and high training speed cannot be realized quickly and conveniently in practical engineering applications. To fill this gap, this paper systematically evaluates the deep neural network from sample distribution and structural hyperparameter selection. The influence on modeling accuracy is analyzed in detail, then some modeling suggestions are presented. Simulation results under multiple operating points verify the effectiveness of the proposed method.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibO8AUGmO2WGiat2vSxNWx5vkE2iaaxTsvv5OQHdibn0MQaLkGCticN8zd8gF6EAmkZZ8eic9PwDeecicyg/640?wx_fmt=gif&from=appmsg)

  

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibO8AUGmO2WGiat2vSxNWx5vFibv4iaKTq7xI4SRDhRHfwW15ibu9eyicRdu8T6wQB0crFE5TGK7oX6fgw/640?wx_fmt=gif&from=appmsg)

**Yunlu Li** received the B.S. in electronic information engineering from Shenyang University of Technology in 2009, the M.S. degree in control engineering in 2011 and Ph.D degree in power electronics and drives from Northeastern University in 2017, Shenyang, China. He is currently an associate professor in school of electrical engineering with Shenyang University of Technology, Shenyang, China. His research interests include data-driven based modeling technique for renewable energy system and nonlinear control theory for complex dynamic system.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibO8AUGmO2WGiat2vSxNWx5vVmeHgSddzxh7FS5xX3DR9UvyQykfyFeXONU6e6DCeuHVyWJu6jXRYg/640?wx_fmt=gif&from=appmsg)

**Guiqing Ma** was born in Nanyang, Henan Province, in 1997. He received the B.S. degree in electric automatization from Luoyang Institute of Science and Technology, Luoyang, China, in 2020. He is currently pursuing the M.S. degree in electric engineering at Shenyang University of Technology, Shenyang, China. His main research interests include microgrid modeling, distributed control, and simulation of power systems.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibO8AUGmO2WGiat2vSxNWx5vqafCg44pxdhJHA2lrEQTG7c1flj4BvrMFc2axxacicoLM36bibGhp5UA/640?wx_fmt=gif&from=appmsg)

**Junyou Yang** received the B.Eng. degree from the Jilin University of Technology, Jilin, China, the M.Sc. degree from the Shenyang University of Technology, Shenyang, China, and the Ph.D. degree from the Harbin Institute of Technology, Harbin, China. He was a Visiting Scholar with Department of Electrical Engineering and Computer Science, University of Toronto, Canada, from 1999 to 2020. He is currently the Head of the School of Electrical Engineering, Shenyang University of Technology. He is also a Distinguished Professor of Liaoning Province. His research interests include wind energy, special motor and its control.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ibO8AUGmO2WGiat2vSxNWx5vmNgRB0hic5DdIx5L80zic4MibBFGiaU1AXAOCBKhdiajzycZWBK3WMaumeg/640?wx_fmt=gif&from=appmsg)

**Yan Xu** was born in Linfen, Shanxi Province, in 1998. She received the B.Eng. degree in electrical engineering and automation from Shanxi Institute of Energy, Jinzhong, China, in 2020. She is currently pursuing the M.S. degree in electrical engineering at Shenyang University of Technology, Shenyang, China. Her research interests include microgrid modeling and simulation of power systems.

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KalkDdQtbbTvQNT5Z89ibvTeUaI5nU6me4w5ualicmNwEGzsebDicBujmicw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1k432BagqYBSpEricSKUWFXSlSfsmibVn6lrHGgF3bk2HNDKgMsmv0jzjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kFquwswRdMpgltNf0ofDboWBsO2VEWngicxMLCwAjKicUpA36bE18nqyQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kqvWm5WpOHLYBxwbAicSjcBbZ10gGc0OGXJry876QYUDbR6L4mnIeQTQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学会官方微信

电工技术学报

CES电气

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kxqBhgTkxhRWEW0XjEyERqib5lURct6qfw0hu5MicCFTEE3fUuRuMGwYQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kJUJKGasHWENobphbJ482N9gYfNsVC4r2IJslRgg6hDeDOaq7UjODicA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kI0fa9LY4e2piaNeSjLI4ybUTWNhecEM1ZeRicz1zy8qPmiab5ia11BtCcw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

学会官方B站

CES TEMS

今日头条号

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kiaDDmDY7734hLauYWibPJQW5ThU9SLI35icS2kke05zNibsXXKjfIpFyRQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kQBmbDzflDusd312Op55BibBmUtibVk1AjOfyWzWPwtLO0s5oz2EsSWVg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1ks1BJP50Lux134cYxqiao7iaI6HBoQgw1oRNAaN2lHDCcY0RzFBibR76qA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学会科普微信

新浪微博

抖音号