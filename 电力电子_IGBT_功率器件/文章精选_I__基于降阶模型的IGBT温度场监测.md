# 文章精选 I ​基于降阶模型的IGBT温度场监测

原创 CES TEMS编辑部 CES电机与系统学报 2023-12-11 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/w1ErXGBl\_dLYfEkg4bKuuA](https://mp.weixin.qq.com/s/w1ErXGBl_dLYfEkg4bKuuA)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

****IGBT Temperature Field Monitoring Based on Reduced-order Model****

Ziyu Zhou1; Yi Sui1; Xu Zhang1; Chengde Tong1; Ping Zheng1; Mingjun Zhu2

1. Harbin Institute of Technology, Harbin, China

2. Xi'an Flight Automatic Control Research Institute, Xi'an, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/10018850)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10018850)

Z. Zhou, Y. Sui, X. Zhang, C. Tong, P. Zheng and M. Zhu, "IGBT Temperature Field Monitoring Based on Reduced-order Model," in CES Transactions on Electrical Machines and Systems, vol. 7, no. 2, pp. 129-136, June 2023, doi: 10.30941/CESTEMS.2023.00005.

**摘 要**

  

  

随着世界经济的快速发展，IGBT在电机驱动和电能转换方面得到了广泛的应用。为了及时发现IGBT的疲劳损伤，需要对IGBT结温进行监测。为了实现IGBT结温的快速计算，本文提出了一种IGBT温度场缩减的有限元方法。首先介绍了IGBT温度场的有限元计算过程，推导了温度场有限元计算的线性方程组。通过有限元模拟得到不同工况的温度场数据，形成样本空间。然后构造样本空间的协方差矩阵，对其进行本征正交分解和模态提取。选取合理的基向量空间，完成样本空间内外温度向量的低维表达。最后得到了温度场有限元的降阶模型，并进行了求解。将降阶模型的计算结果与有限元法的计算结果进行了比较，并从精度和快速性两个方面对降阶模型的性能进行了评价。  

  

**Abstract**

  

  

With the rapid development of the world economy, IGBT has been widely used in motor drive and electric energy conversion. In order to timely detect the fatigue damage of IGBT, it is necessary to monitor the junction temperature of IGBT. In order to realize the fast calculation of IGBT junction temperature, a finite element method of IGBT temperature field reduction is proposed in this paper. Firstly, the finite element calculation process of IGBT temperature field is introduced and the linear equations of finite element calculation of temperature field are derived. Temperature field data of different working conditions are obtained by finite element simulation to form the sample space. Then the covariance matrix of the sample space is constructed, whose proper orthogonal decomposition and modal extraction are carried out. Reasonable basis vector space is selected to complete the low dimensional expression of temperature vector inside and outside the sample space. Finally, the reduced-order model of temperature field finite element is obtained and solved. The results of the reduced order model are compared with those of the finite element method, and the performance of the reduced-order model is evaluated from two aspects of accuracy and rapidity.

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTNr0YCJ9VWcgdktzoM8GAMM7WeEy4NGddqSGK3gPFpw660hlCPIErLA/640?wx_fmt=gif&from=appmsg)

  

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTBQGmiaVFYsIrXVUkq66ayaG3PNDqTCaNY217gbDwtBLT56mRL9cBO6A/640?wx_fmt=gif&from=appmsg)

**Ziyu Zhou** was born in China on April 1998. He received the B.E. and M.E. degree in electrical engineering from Harbin Institute of Technology, Harbin, China, in 2020 and 2022, respectively. He is currently working toward the Ph.D. degree in the School of electrical engineering from Harbin Institute of Technology, Harbin, China. His current research interests include design, control and analysis of permanent-magnet synchronous machines system.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTJhib1Dr7ErtL8lo8qXcOibibXKszkeUyUrqWGU5jKReicBjUT7jdY52rqg/640?wx_fmt=gif&from=appmsg)

**Yi Sui** (Member, IEEE) was born in Jilin, China, in 1987. He received the B.Sc., M.Sc., and Ph.D. degrees in electrical engineering from the Harbin Institute of Technology, Harbin, China, in 2009, 2011, and 2016, respectively. Since 2016, he has been with Harbin Institute of Technology, where he has been a Professor since 2021.His current research interests include fault-tolerant permanent-magnet synchronous machines and permanent-magnet linear machines.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTuJrsJGkANCNK6dDToYbDIUcN1E71TahibjdQ4Z6b16ibqZZs1aUbwXSQ/640?wx_fmt=gif&from=appmsg)

**Xu Zhang** was born in China on September 1997. She received the B.E. and M.E. degree in electrical engineering from Harbin Institute of Technology, Harbin, China, in 2019 and 2021, respectively. She is currently working as an engineer in Huawei Technologies Co., Ltd, Dongguan, China. Her current research interests include design and development of battery management system in energy storage applications.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTsseseOx77nbtT7b9sUoB7rUD9zT065TpwRbES3gRBicCNqWjfOLib0Og/640?wx_fmt=gif&from=appmsg)

**Chengde Tong** (Member, IEEE) received the B.Sc., M.Sc., and Ph.D. degrees in electrical engineering from the Harbin Institute of Technology, Harbin, China, in 2007, 2009, and 2013, respectively. He is currently a Professor with the Department of Electrical Engineering, Harbin Institute of Technology. He is the author or a coauthor of more than 60 published articles.His research interests include electric drives and energy management of hybrid electric vehicles, control of free-piston Stirling and internalcombustion engines, and permanent-magnet linear machines.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTic8Tjfudv463ia5O1icY45r64DwhvbGlZibwSQG7PMMcs3rOwoaIZm6Gdw/640?wx_fmt=gif&from=appmsg)

**Ping Zheng** (Senior Member, IEEE) received the B.Sc., M.Sc., and Ph.D. degrees from the Harbin Institute of Technology, Harbin, China, in 1992, 1995, and 1999, respectively, all in electrical engineering.Since 1995, she has been with Harbin Institute of Technology, where she has been a Professor since 2005. She is the author or coauthor of more than 270 published refereed technical papers and four books. She is the holder of 70 Chinese invention patents. Her current research interests include electric machines and control, hybrid electric vehicles, and the cloud computing of electric machine system.Dr. Zheng was a recipient of more than 30 technical awards, including the “China Youth Science and Technology Award” from the Organization Department of the Communist Party of China in 2009, the “National Science Foundation for Distinguished Young Scholars of China” from the National Natural Science Foundation of China in 2013, the “Chang Jiang Scholar Professor” from the Ministry of Education of China in 2014, and the “National High-Level Talent Special Support Program” from the Organization Department of the Communist Party of China in 2016.

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17ib4VnUZ3xOicaibzpHjnJp4cTLqoibqndYwwY66CHR04lLvxqraWpM1fKeWak9cmMiccqlhc9d9lN8OQw/640?wx_fmt=gif&from=appmsg)

**Mingjun Zhu** was born in China on May 1988. He received the B.E. and M.E. degree in electrical engineering from Northwestern Polytechnical University and Harbin Institute of Technology, China, in 2011 and 2013, respectively. Since 2013, he has been a Senior Engineer with Xi'an Flight Automatic Control Research Institute, Xi'an, China. His current research interests include control and analysis of permanent magnet synchronous machines system and EHA design.

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