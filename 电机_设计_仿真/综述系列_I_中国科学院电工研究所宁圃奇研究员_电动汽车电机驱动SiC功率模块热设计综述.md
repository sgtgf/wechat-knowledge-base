# 综述系列 I 中国科学院电工研究所宁圃奇研究员：电动汽车电机驱动SiC功率模块热设计综述

原创 CES TEMS编辑部 CES电机与系统学报 2024-10-17 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/8lFkPkqrEjFcnKY-4LGNjg](https://mp.weixin.qq.com/s/8lFkPkqrEjFcnKY-4LGNjg)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

**电动汽车电机驱动SiC功率模块热设计综述**

Puqi Ning1; Xiaoshuang Hui1; Dongrun Li1; Yuhui Kang1; Jiajun Yang1; Chaohui Liu2

1. University of Chinese Academy of Sciences, Beijing, China

2. National New Energy Vehicle Technology Innovation Center, Beijing, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/10702522)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10702522)

P. Ning, X. Hui, D. Li, Y. Kang, J. Yang and C. Liu, "Review of Thermal Design of SiC Power Module for Motor Drive in Electrical Vehicle Application," in CES Transactions on Electrical Machines and Systems, vol. 8, no. 3, pp. 332-346, September 2024, doi: 10.30941/CESTEMS.2024.00041.

**1**

**内容**

在当前的汽车电力推进系统中，功率模块的热设计严重依赖于经验知识，难以有效优化不规则排列的PinFin结构，从而限制了其性能。为了更好地发挥SiC器件的优势，本文对电机驱动系统中各种PinFin布局、热仿真方法以及与电容器和电机协同设计的优缺点进行了分类和综述。研究成果将为未来车辆高功率密度电机驱动的发展提供必要的支持。

**2**

**亮点**

  

**2.1 PinFin布局和设计方法**

（1）规则PinFin布局设计

pin设计的主要原则是通过增加可用于传热的表面积来提高散热效率。然而，在增加半径以增加散热面积的同时，也增加了冷却介质的流动阻力。

在实际应用中，冷却循环装置，如水泵，不能提供无限流体压力。密集的PinFin设计会大大降低流速，降低对流散热的有效性，在设计时需要平衡散热面积和冷却剂的压差。

（2）不规则PinFin布局设计

在大多数功率模块产品中，PinFin的排列是有规则的，而芯片的排列则相对不规则。SiC芯片的尺寸比硅芯片小。每个芯片下面的PinFin数可能变化很大。销片和模具的相对位置也不同。这将显著影响并行芯片的温度均匀性。

**2.2 热性能评价方法**

（1）计算流体动力学

目前，电机驱动系统的热设计主要基于计算流体动力学（Computational Fluid Dynamics, CFD），通过人工设计可以评估电机驱动系统的整体热性能。CFD模拟的主要优点是计算精度高，参数修改方便，适合人工设计。

CFD的主要缺点是模拟时间长，收敛问题频繁，难以应用自动优化算法。在手动设计迭代中可以比较的候选设计的数量通常是有限的。它通常不超过30个选项。在许多情况下，设计结果只能满足非常基本的要求，这使得实现全局优化具有挑战性。

（2）更快的评估方法

为了解决求解时间过长的问题，一些文献采用分析式和经验式来迎合遗传算法的需要。基于方程的计算速度很快(< 1us)，但误差较大(> 35%)。

（3）格子玻尔兹曼方法（Lattice Boltzmann Method, LBM）

直LBM是一种模拟复杂流体状态的数值方法，采用LBGK（Lattice Bhatnagar-Gross-Krook, LBGK）模型求解不可压缩的Navier-Stokes方程。该方法不直接求解矩阵，有利于并行计算。与CFD相比，它可以减少30-60%的模拟时间，并且具有较小的模拟误差(< 6%)。

**2.3 与母线电容、电机的联合仿真**

（1）与母线电容联合仿真

在典型的电机驱动系统中，有许多组件在空间上是独立的，但在电力、散热和力学方面是相互联系的。单个组件体积的减少并不直接等同于整个系统体积的减少。为了使电机驱动的空间效用最大化，部件之间的协同优化是必要的。

母线电容是电机控制器中体积第二大的元件，是近年来研究的热点。其产能利用率不断提高。随着工作频率的提高，提高总散热能力是非常重要的。

（2）与电机联合仿真

目前汽车电驱动系统中电机与控制器的主流集成方法包括上接、侧接和嵌入三种方式。在上接方式和侧接方式的情况下，通常有一个三相功率模块和一个集成的直流母线电容器。在嵌入式模式下，轴周围有多个小功率模块(> 2)和多个分布式电容器。

研究人员必须通过协同散热设计来精确控制电机和驱动器的温度分布。应满足各种操作条件的要求，并有可能提高材料的利用率。

**3**

**结论**

在本文中，为了更好地设计电动汽车应用中功率模块的热管理系统，需要建立针对不规则排列PinFin的优化方法。主要的瓶颈包括PinFin布局方案的定量表达和自动生成方法、高效的评估方法和协同散热设计。主要的设计目标是减少结壳的热阻，以及减少模块之间的温差。为了通过优化算法充分利用功率器件，需要建立简化的热模型，以保持相对较小的误差和较快的速度。

在功率模块的PinFin优化领域，成本效益和可制造性是关键的考虑因素，通常与公司的专业知识紧密相关。因为具体的成本参数和制造工艺是严格保密的商业秘密，很少在公开的技术文献中披露。

**4**

**团队介绍**

中国科学院电工研究所高功率密度电气驱动及电动汽车技术研究部成立于1997年，是中科院“电力电子与电气驱动重点实验室”的重要组成部分，主要研究方向为电力电子与电力传动，定位于高功率密度发电/驱动系统技术及其在电动汽车等电气化交通工具中的应用，涉及高功率密度发电、高功率密度电力电子集成、特种电机和功率模块封装技术。

研究部承担并完成了数十项国家、地方的电动汽车相关重要科技攻关任务，在我国新能源汽车电机驱动研究领域处于领先地位，在国内外具有重要影响。自“九五”以来，在国内率先开展了车用高功率密度电机驱动的基础理论和关键技术开发，主持研发了我国第一台电动轿车用数字化交流电机驱动系统、第一套燃料电池轻型客车用电-电混合能源动力系统，所研发的高性能永磁电机和驱动系统关键技术应用于2008年北京奥运示范、2010年上海世博会示范、“十城千辆”示范和新能源汽车推广，产生了良好的社会和经济效益，累计发表文章400余篇、申请专利71项，获得2012年度中国电工技术学会科学技术一等奖和中国电源学会技术发明奖一等奖等奖励。

研究部与新能源车行业同步成长，在电动汽车电驱动技术发展方面起到了引领作用。“十三五”期间，研究部带领国内一流大学、龙头企业等合作团队，获得国家重点研发计划支持，针对SiC器件及其在电动汽车的应用开展多学科联合攻关。代表性成果包括：建立了“高频场控功率器件及装置产品质量检验中心”，是目前国内首个可进行大功率半导体产品检测并获得CNAS认证的检测机构；成立了“电驱动系统大功率电力电子器件封装技术北京市工程实验室”，在2016年验收时获得“优秀”评价。经过十年努力研制出的飞轮发电机及控制器产品参加了国庆70周年庆祝活动。研发出国内功率密度最高的全SiC电机驱动控制器样机（37kW/L），在2019年世界新能源汽车大会上被评为全球新能源汽车十大前沿技术之一。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOu8wX9zkngO3zqUOmI6Iw0UG3s2icwJVo1lRmtWIO1eiahccLPKxctbMSA/640?wx_fmt=png&from=appmsg)

**5**

**作者介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOurQM2R0LQ38EuuichKjb6xxB5f7wXMFgpBFZYtHXslYxv5kw63JjKdIw/640?wx_fmt=gif&from=appmsg)

**宁圃奇**，男，博士生导师，中国科学院电工研究所研究员。2004年毕业于清华大学电机系获工学学士学位，2006年毕业于清华大学电机系获工学硕士学位，2010年获美国弗吉尼亚理工大学电气与计算机工程系工学博士学位。2010至2013年工作于美国橡树岭国家实验室，任副研究员。2013年加入中国科学院电工研究所，任研究员。主要从事高温碳化硅器件封装开发、高功率密度全碳化硅。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOuVZbuthS3opFWgpqiaJfBy2FHlqylhCCAvadXf2w6uMBxCrSnvsa0QIA/640?wx_fmt=gif&from=appmsg)

**回晓双**，男，中国科学院大学博士生。2021年至今于中国科学院电工研究所高功率密度电气驱动及电动汽车技术研究部攻读博士学位，专注于高功率密度碳化硅电机控制器的多物理场建模与集成优化研究。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOupyr1QRaFzfr2w6ibx2gxkkrXHYInicibIyuSruzFWp3TurnU9ythGGhmg/640?wx_fmt=gif&from=appmsg)

**康玉慧**，2015年毕业于中国石家庄铁道大学电气工程及自动化专业，获学士学位。于2019年获得中国科学院电工研究所硕士学位。主要研究方向为电力电子器件封装技术。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOu5diarLDC9mJPRvrTB83AADuOn0pqISsl4wR7h23CS2YY9TpHpcYOtLA/640?wx_fmt=gif&from=appmsg)

**李东润**，2022年于中国科学院大学电子电气与通信工程学院获学士学位，目前在中国科学院电工研究所攻读硕士学位。研究方向是电动汽车电机控制器自动优化。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOu3x20tbwYYaeR4uE5ibuIJ5AYtlI9VYTmRQrhqJkhxdMhGDtRyklLFsQ/640?wx_fmt=gif&from=appmsg)

**杨嘉俊**，2023年于长沙理工大学电气与信息工程学院获学士学位，2018年至2020年服役于东部战区空军某部队，目前在中国科学院电工研究所攻读硕士学位。研究方向是电动汽车电机控制器散热性能评估。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178pRiamA4YxXoSYicCg0YlbOugPjUPf1Hzic6KDvzR4f7gQLBbr3ZnRW9LBgPBzsE5vVuB9XvjiamxSXA/640?wx_fmt=gif&from=appmsg)

**刘朝晖**，2006年获得中国太原中北大学自动化专业学士学位，2011年获得中国北京航空航天大学机械工程专业硕士学位，2017年获得英国谢菲尔德大学电子与电气工程专业博士学位。2017年至2020年，于英国马姆斯伯里戴森技术有限公司的研究、设计和开发部工作，2017年担任高级工程师，2018年担任高级工程师。目前是中国北京国家新能源汽车技术创新中心的首席工程师和动力总成负责人。

  

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被ESCI、EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

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