# 综述系列 I 华北电力大学田新首副研究员：大规模可再生能源发电经混合直流输电系统的形态与暂态稳定研究综述

原创 CES TEMS编辑部 CES电机与系统学报 2024-07-15 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/Hbzmc3jIdNB9jH46m3PeVQ](https://mp.weixin.qq.com/s/Hbzmc3jIdNB9jH46m3PeVQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

**大规模可再生能源发电经混合直流输电系统的形态与暂态稳定研究综述**

Xinshou Tian1; Yongning Chi2; Longxue Li1; Hongzhi Liu2

1. North China Electric Power University, Beijing, China

2. China Electric Power Research Institute, Beijinz, China

  

**■**[在线阅读](https://ieeexplore.ieee.org/document/10579810)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10579810)

X. Tian, Y. Chi, L. Li and H. Liu, "Review of the Configuration and Transient Stability of Large-Scale Renewable Energy Generation Through Hybrid DC Transmission," in CES Transactions on Electrical Machines and Systems, vol. 8, no. 2, pp. 115-126, June 2024, doi: 10.30941/CESTEMS.2024.00027.

**1**

**内容**

混合直流输电系统在跨区大规模可再生能源传输和以新能源为主导的新型电力系统构建方面具有广阔的应用前景和发展潜力。本文分析了混合直流输电系统的形态和拓扑特征，讨论了换向换流器(Line Commutated Converter, LCC)和模块化多电平换流器(Modular Multilevel Converter, MMC)混合直流输电系统的组网特点、运行特性以及不同故障下的暂态特征和故障穿越控制策略。

**2**

**亮点**

  

**2.1 混合直流输电系统形态及拓扑特性**

混合直流输电系统可以发挥LCC和MMC的各自优势，弱化交直流相互影响，保障安全稳定运行构建协调配合的混合直流输电系统。根据LCC和MMC混合形式的不同，混合直流输电系统的拓扑结构可以分为换流器级混合直流输电系统和系统级混合直流输电系统两大类。

  

**2.2 LCC和MMC换流器级混合直流输电系统及其暂态稳定性**

（1）换流器级混合直流输电系统的运行特性

单端混合直流输电的特点：1)直流系统不需要具有直流逆流功能；2)逆变站不会出现换相故障；3)可在逆变站直流输出配置大功率二极管阀组，以排除直流线路故障。

多端混合直流输电的特点：1)扩展了直流输电的功能，可以将能量输送到弱交流系统、孤岛地区等；2)作为小规模分布式能源的接入网，有效解决了能源中心向交流输电系统的供电问题。

（2）换流器级混合直流输电系统的暂态稳定性

在换流器级混合输电系统中包含LCC换流站和MMC换流站，使得存在LCC故障过程的较大时间尺度且可控特征，以及MMC较小故障过程时间尺度且较强非线性特征，且故障特征更加复杂。

对于单端MMC柔性直流输电系统的故障研究，主要有三个方面：直流故障仿真分析、理论研究和影响因素；而对于多端混合直流输电系统的故障清除方法主要有：1)基于交流断路器的故障清除方案。2)基于直流断路器的故障清除方案。3)基于子模块转换器的故障清除方案。

  

**2.3 换流站内LCC/MMC串联混合直流输电系统及其暂态稳定性**

系统级混合直流输电系统可分为受端换流站采用LCC-MMC串联结构和送端换流站采用LCC-MMC串联结构。

（1）受端换流站LCC-MMC串联混合直流输电系统暂态稳定性

送端交流轻微故障情况下，受端高压阀组LCC的降压能力可以维持电力传输；当故障严重时，半桥子模块MMC缺乏降压能力，出现间歇性直流电流，导致电力传输中断。

交流故障时混合直流输电面临的主要挑战仍然是剩余电力，相应的控制方法主要有三种：1)从新能源汇集侧考虑，进行快速功率控制是有效手段，通过控制策略限制新能源向混合直流输电系统注入功率。2)从能量耗散的角度考虑。在输电系统发生故障时，通过交流或直流耗能装置将剩余功率耗散。3)使用储能型MMC。

（2）送端换流站LCC-MMC串联混合直流输电系统暂态稳定性

在风电、光伏等可再生能源占比较高的大型清洁能源基地，系统强度不足以支持LCC可靠的功率传输。由于MMC的成本和传输容量的限制，在送端使用MMC作为大规模的电力输出解决方案并不经济。因此，送端换流站LCC-MMC串联混合直流输电适合以大规模可再生能源为主的特高压输出场景。

在直流故障时，对于送端和受端均为串联结构的拓扑，受端MMC不需要闭锁，送端LCC强制移相，送端MMC需闭锁以阻断故障电流；当送端发生交流故障导致交流母线电压下降时，送端LCC的直流恒流控制通过减小发射角使直流电压和电流保持在额定值附近。

**3**

**结论**

LCC-MMC混合直流输电技术应用于双端或多端直流传输系统，通过不同的混合结构将LCC和MMC串联或并联，形成新型混合直流传输系统。由于独特的技术优势，在大规模可再生能源输电的经济和技术方面具有巨大潜力。结论如下：

1)混合直流输电系统以不同的MMC和LCC混合方式，形成不同的传输拓扑。根据LCC和MMC不同混合形式，将混合直流输电系统的拓扑结构分为换流器级混合直流输电系统和系统级混合直流输电系统两类。利用LCC和MMC各自的优势，减轻交直流相互作用，保证安全稳定运行，可以构建协调的混合直流输电系统。

2)混合级联直流输电系统中的LCC不仅可以降低建设与运行成本，也能利用强制移相能力与晶闸管的单向导通性提供直流故障处理能力，而MMC能够解耦控制无功以支撑交流电压，既能在整流侧为可再生能源场站提供稳定的交流电压源，也能抑制逆变侧LCC的换相失败。

3)混合直流输电系统的故障穿越实现方式有多种，故障期间主要是盈余功率问题，应对盈余功率控制方法主要有几种，第一种是从新能源孤岛快速功率控制着手，通过控制策略限制柔直送出系统故障期间新能源孤岛注入柔直送出系统的功率。第二种是从能量耗散角度出发，在送出系统故障期间，通过交直流耗能装置将盈余功率耗掉。第三种是从耗能装置和柔直系统主参数的配合着手，通过增大换流站的换流阀子模块电容，增强故障期间换流站的储能缓冲能力，同时配合少量的耗能装置消纳盈余功率。另外，采用储能型MMC也是有效手段之一。

**4**

**团队介绍**

研究团队依托于华北电力大学能源电力创新研究院。现有教授1人，研究员1人，副研究员2人，30余名在读博士、硕士研究生；获批国家重点研发计划项目1项、课题2项、国家自然科学基金2项、北京市自然科学基金1项。出版专著4本，发表SCI/EI论文100余篇，参编国际标准4项、国家标准1项、企业标准1项，参与编写专著2部；获得省部级一等奖4项；研究团队长期从事新能源交/直流并网稳定性与控制、交通能源融合发展等方面的研究。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178Vbd1RhZDxfNcVsjAG5P5oauRVxMhOWicHeL4LqVhdvwqp4KqWPavu0ktrHmRKXN4k7MribuhKqHfg/640?wx_fmt=png&from=appmsg)

**5**

**作者介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178Vbd1RhZDxfNcVsjAG5P5oWUxKwpM2Ru0bTH53hj8esD5YeibtoAWDuThibLhCW4DGlwmBDFqUZWsQ/640?wx_fmt=png&from=appmsg)

**田新首**，华北电力大学副研究员，硕士生导师，博士。主持/重点参与国家重点研发计划2项、国家自然科学基金5项。发表SCI/EI论文40余篇，授权国家发明专利6项。主要从事新能源交直流并网控制技术、能源交通融合系统等方面研究。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178Vbd1RhZDxfNcVsjAG5P5oXW1Ice1cgGxictcoDHLDydZgP3aTXcibTaHfD2KbR0jGK4XXqr9x48qQ/640?wx_fmt=png&from=appmsg)

**迟永宁**，中国电科院电力系统碳中和研究中心书记、副主任，教授级高工，博士生导师，国际电工委员会IEC SC 8A“可再生能源接入电网”技术分委会秘书。主要研究方向为新能源并网技术及电力系统稳定分析。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178Vbd1RhZDxfNcVsjAG5P5o5biaJowptys7cVEUV6oicnzflSZ435ETWwUrvqssbFC3ZicxLYj7gfvgg/640?wx_fmt=png&from=appmsg)

**李龙学**，华北电力大学硕士研究生，主要研究方向为新能源经混合直流输电系统暂态稳定性与控制技术。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178Vbd1RhZDxfNcVsjAG5P5o9ztRHTWNtQEsmb8ROIrRsDHqibocytf14Xn58ibwfrgArbicrNQhj9xzA/640?wx_fmt=png&from=appmsg)

**刘宏志**，中国电科院电力系统碳中和研究中心，高级工程师。主要研究方向为新能源并网技术及电力系统稳定分析。

  

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

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