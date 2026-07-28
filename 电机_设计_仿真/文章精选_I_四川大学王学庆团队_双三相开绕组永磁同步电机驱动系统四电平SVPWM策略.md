# 文章精选 I 四川大学王学庆团队：双三相开绕组永磁同步电机驱动系统四电平SVPWM策略

原创 CES TEMS编辑部 CES电机与系统学报 2025-10-23 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/tW17Rqp9uah6zwz1VwCIYA](https://mp.weixin.qq.com/s/tW17Rqp9uah6zwz1VwCIYA)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

****Four-Level SVPWM Strategy of Dual Three-Phase Open-Winding PMSM Drive****

  

Haowen Jiang1; Xueqing Wang1; Xinyu Yan1; Dianxun Xiao2,3; Xiaobao Yang1; Zheng Wang4  

1.Sichuan University, Chengdu, China

2.The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China

3.HKUST Shenzhen-Hong Kong Collaborative Innovation Research Institute, Shenzhen, China

4.Southeast University, Nanjing, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/11189080)   ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11189080)

H. Jiang, X. Wang, X. Yan, D. Xiao, X. Yang and Z. Wang, "Four-Level SVPWM Strategy of Dual Three-Phase Open-Winding PMSM Drive," in CES Transactions on Electrical Machines and Systems, Vol. 9, No. 3, pp. 257-267, September 2025, DOI: 10.30941/CESTEMS.2025.00023.

**摘 要**

  

  

为了实现电机驱动系统的高额定功率和低电流谐波，本文改进了一种直流母线电压比为2:1:1的双三相开绕组永磁同步电机驱动系统。基于该拓扑，本文提出了一种双三相四电平SVPWM策略。首先，构建并划分了两个相同的三相四电平空间矢量图。然后，在每个矢量图中选取与参考矢量最接近的三个相邻矢量进行矢量合成，以确保高调制精度和低开关频率。此外，为了避免电压偏差引起的调制误差，提出一种统一占空比补偿方法进一步优化了所提出的双三相四电平SVPWM策略。通过实验验证了所提策略的有效性。  

  

**Abstract**

  

  

To achieve high power rating and low current harmonics of motor drive, this paper develops a dual three-phase open-winding permanent magnet synchronous motor (DTP-OW-PMSM) drive with the DC-link voltage ratio of 2:1:1. Based on this topology, this paper proposes a DTP four-level space vector pulse width modulation (DTP-FL SVPWM) strategy. First, two identical three-phase four-level space vector diagrams are constructed and divided. Then, three adjacent vectors nearest to the reference vector in each diagram are selected for the vector synthesis to guarantee high modulation precision and low switching frequency. Furthermore, to avoid the modulation error caused by the voltage deviation, the proposed DTP-FL SVPWM strategy is further optimized through unified duty ratio compensation (UDRC). The effectiveness of the proposed strategy is verified through experiments.

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXK6ibuyicE1PNEo9ELoooc7cicZCTvwKFg7S91Be0NcCKFAfQIHO1HHXpQ/640?wx_fmt=png&from=appmsg)

图1 改进的双三相开绕组永磁同步电机驱动系统

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCX86z5YYZLmO8YtTDKYWc6aKLKxZ5ibJRBIso6bnk3NicLw2YCrw9ySJlg/640?wx_fmt=png&from=appmsg)

图2 双三相开绕组永磁同步电机驱动系统控制框架

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCX3Acd18yTWaoAE6Lf9rlOiaDkoZfN15XZoGXcdBkXINLVpwOzbwalDdg/640?wx_fmt=png&from=appmsg)

图3 50V:25V:25V稳态实验

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXd8IjI8LA4Xx5siafpNpb88j2NVD13tPTHcRem4ASwvHN0kiaZWiaAbEwg/640?wx_fmt=png&from=appmsg)

图4 电压偏差时引入UDRC方法前后的相电流

  

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXPqBKIZsrvZk4GiaVb0fwEYoQGgJjauIMmlKO4zSlKVLHq1H4vKIgSKg/640?wx_fmt=png&from=appmsg)

**姜皓文**，2023年毕业于哈尔滨理工大学电气工程及其自动化专业，获学士学位。他目前正在四川大学攻读电气工程硕士学位。他的研究方向包括多逆变器协同调制策略。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXIRxRHa7JgdJyFXlVTrGm4m1BGcKLzgQN8t9dOwj7opNBK6fOejANRQ/640?wx_fmt=png&from=appmsg)

**王学庆**，2014获天津科技大学电气工程及其自动化学士学位；2016年和2020年分别获得东南大学电气工程硕士和博士学位。2018年至2019年，他是加拿大麦克马斯特大学汽车资源中心的联合培养博士。现为四川大学电气工程学院副研究员，入选四川省天府峨眉计划、四川大学双百人才计划、全球前2%科学家榜单、IEEE Senior Member。主要研究方向包括：交流电机控制、高频电机驱动系统、多电平功率变换、故障诊断及容错控制等。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXGxj731ewSXIatKZ4ATCW15LTas4ibribXTbdaSxBP2vVza7TdZy4Q2UA/640?wx_fmt=png&from=appmsg)

**晏鑫宇**，2023年毕业于四川大学电气工程及其自动化专业，获学士学位。目前，他正在四川大学攻读电气工程硕士学位。他的研究方向包括开绕组永磁同步发电机调制策略。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXia4Y0uxP16nB3tTyuCb0RfDNHSQrZgy4U5h8MyThDX3pXljh8CPsPgQ/640?wx_fmt=png&from=appmsg)

**肖殿勋**，分别于2016年和2018年获得哈尔滨工业大学电气工程学士和硕士学位，并于2021年获得加拿大麦克马斯特大学电气与计算机工程博士学位。他目前是香港科技大学（广州）可持续能源与环境研究中心的助理教授。此前，他于2021年在加拿大麦克马斯特大学汽车资源中心担任博士后研究员。他的研究方向包括永磁同步电机控制、开关磁阻电机控制、大功率变换器以及交通电气化应用的电池管理系统。肖博士目前担任《IEEE Transactions on Transportation Electrification》的副主编。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXhSaKicib1ykrgvibYVzgbNyu7Ua9qgcTJA2NEqw5micQTQ3bt5Ls05EibJA/640?wx_fmt=jpeg)

**杨小宝**，分别于2012年、2014年和2020年在哈尔滨工业大学获得电气工程学士、硕士和博士学位。2021年至今，他一直任职于四川大学电气工程学院，现任副研究员。目前主要研究方向为永磁电机的设计与分析。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibTBpSEN5Keic3my0TQazqCXGXDq9j6AOntfccTwMjBjDqPCl90JnFugfbRxOpBKGKXBB9GWycxHng/640?wx_fmt=png&from=appmsg)

**王政**，分别于2000年和2003年在南京东南大学获得工学学士和硕士学位，并于2008年在香港大学获得博士学位，专业均为电气工程。2008年至2009年，他在加拿大安大略省多伦多瑞尔森大学担任博士后研究员。他目前是东南大学电气工程学院的全职教授。他的研究方向包括电机驱动、电力电子和分布式发电。他在这些领域撰写或合作发表了80多篇国际同行评审论文和四本书籍。王博士曾获得多项学术奖项，包括IEEE PES分会杰出工程师奖和国际电机与系统会议最佳论文奖。

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE 副主席 Don Tan 博士为国际主编。目前已被ESCI、EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

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