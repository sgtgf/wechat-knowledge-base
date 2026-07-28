# 综述系列 I 江苏大学、南京工程学院、国家杰青赵文祥教授课题组：考虑运行品质的电机逆变器故障容错控制综述

原创 CES TEMS编辑部 CES电机与系统学报 2024-06-06 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/tAbn4cv3ZmCRSKAKvwE04g](https://mp.weixin.qq.com/s/tAbn4cv3ZmCRSKAKvwE04g)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

**考虑运行品质的电机逆变器故障容错控制综述**

Yuxuan Du1; Wenxiang Zhao1; Yihua Hu2; Jinghua Ji1; Tao Tao1

1. Jiangsu University, Zhenjiang, China

2. King’s College London, WC2R 2LS London, U.K.

**■**[在线阅读](https://ieeexplore.ieee.org/document/10545419)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10545419)

Y. Du, W. Zhao, Y. Hu, J. Ji and T. Tao, "Review of fault-tolerant control for motor inverter failure with operational quality considered," in CES Transactions on Electrical Machines and Systems, doi: 10.30941/CESTEMS.2024.00016.

**1**

**内容**

本文总结了近十年来电机驱动系统中各种逆变器故障的容错控制(Fault-Tolerant Control, FTC)策略，讨论了各种典型FTC策略的原理、优缺点以及研究进展。

**2**

**亮点**

根据逆变器故障发生后的控制策略和运行特性总结了三种故障场景下10种FTC策略模型。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17921LETv6N9kANuIvW8EicWNUWfXumDdEvWIzIn1fP7DAF1Yiau8Z2oR6LdTMsOAruUWibckjhj5wicLQ/640?wx_fmt=png&from=appmsg)

  

**1.****抢救型(Rescue)场景**

抢救型FTC策略旨在应对逆变器单个或多个开关管故障的情况，该策略能够保持电机驱动系统的基本运行。

故障：某一桥臂上单个开关管失效

措施：1.调整基准电压；2.零序电流注入；3.偏置电流直接注入相电流；4.向dq轴注入电流。

不足：牺牲一些性能参数，如效率和电气参数（电流畸变率等），不能长时间运行。

  

**2.补救型(Remedy)场景**

补救型FTC策略旨在应对多相电机绕组或逆变器桥臂故障的情况，通过调整控制策略完全隔离故障，保持电机驱动系统的整体性能，特别是转速和转矩的稳定性。

故障：多相电机绕组或逆变器桥臂失效。

措施：5.最小化转矩脉冲；6.给定最优电流；7.降阶动态解耦法。

不足：导致相电流应力增大，驱动器容量需要过设计，电机处于不对称运行状态，所以不能长时间运行。

  

**3.重建型(Reestablish)场景**

重建型FTC策略旨在通过迅速激活备用装置来重新配置驱动拓扑，从而保持系统稳定运行。可以长时间运行。

故障：驱动或者电机绕组故障。

措施：8.电机绕组重构法；9.中性点桥臂；10.母线电容中点连接。

不足：驱动系统重建后能够长时间的容错运行，但是需要配置准确的故障诊断算法以及备用装置，成本较高。

**3**

**结论**

（1）抢救型FTC策略通过调整电流以防止电流流过故障开关管。但是，输出扭矩因等效热功耗而降低，不对称的相电流会影响其他驱动系统部件的寿命。因此，这种方法不适合长期容错运行。

（2）补救型FTC策略根据原理方法对故障逆变器桥臂或电机绕组进行隔离，会使相电流应力增加，同时驱动器容量需要过设计，这种方法不适合长期容错运行。而且这种策略普遍用于多相电机驱动系统，因其具有多个控制自由度与冗余。

（3）重建型FTC策略需要备用装置来重新配置拓扑。可以使相电流、转矩和速度等参数保持高品质水平运行。因此，这种方法适合长期容错运行。但是附加的备用装置会增加成本，同时拓扑重建和切换策略需要额外的考虑。

**4**

**团队介绍**

江苏大学高效能电机系统研究团队隶属于江苏大学电气信息工程学院。研究团队一直从事高品质永磁电机系统的理论创新和工程应用研究。团队拥有国家杰青、国家百千万人才等国家级人才，承担军委科技重大专项、军委基础加强计划重点项目、国家自然科学基金重大项目课题等30余项省级以上科研项目。研究成果获国家技术发明二等奖2项、省部级科技成果一等奖4项。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17921LETv6N9kANuIvW8EicWNeicz45e4hic9e4cVSviapdxLqJzwT51lukX2cCk1hARp66MAQGfVchibAQ/640?wx_fmt=png&from=appmsg)

**5**

**作者介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17921LETv6N9kANuIvW8EicWNAxs9oCNZZSJibz9V2jylskhk3Gj7yo8W1gm7icTpwicn3ac2crIlkziarw/640?wx_fmt=png&from=appmsg)

**杜育轩**，2017年获江苏大学学士学位，目前正在江苏大学攻读电气工程博士学位。2023年至2024年期间，赴英国约克大学联合培养。主要研究方向包括开绕组电机拓扑、多相永磁电机控制和高性能电机驱动系统设计。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178fhcbMS3MOHNGrIlcjHR0sLabzEWiavqBcKiaddpwRLSIxs6NVPZfQtMias8IxwOFhpSwibiaoZib3zeVQ/640?wx_fmt=png&from=appmsg)

**赵文祥**，博士，教授、博士生导师，国家杰青。现任南京工程学院副校长、江苏大学高效能电机系统与智能控制研究院院长。1999年和2003年分别获得江苏大学电气工程学士和硕士学位，2010年获得东南大学电气工程博士学位。承担国家自然科学基金重大项目、国家科技重大专项等20余项国家级、省部级科研项目，第一/通讯作者发表SCI一区论文60余篇，获国家技术发明二等奖1项、省部级科技成果一等奖3项。曾赴香港大学、英国谢菲尔德大学交流访问。主要研究方向包括电机设计、建模、故障分析和智能控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178fhcbMS3MOHNGrIlcjHR0sTJz7643z6ug0N5MDpiaOcRmcD9icfg2JiaXoOUjPicgpqZ1xLp06gsibUVw/640?wx_fmt=png&from=appmsg)

**胡义华**，2003年和2011年分别获得中国矿业大学电气工程学士学位和电力电子与电力传动博士学位。2011年至2013年，在浙江大学电气工程学院担任博士后研究员。现任英国伦敦国王学院副教授(Reader)，曾任约克大学电气工程组组长。主要研究方向包括可再生能源发电、电力电子变流器和控制、电动汽车、更多电动船舶/飞机以及智能能源系统。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178fhcbMS3MOHNGrIlcjHR0sichhXkYNTVXicsnusDnbKc8DNS4BkeZibogBD8traHP77NFMVQJic1S48Q/640?wx_fmt=png&from=appmsg)

**吉敬华**，博士，教授、博士生导师。于2000年、2003年和2009年分别获得江苏大学电气工程学士、硕士和博士学位。自2000年以来，一直在江苏大学电气信息工程学院工作，现为该学院教授。2013年至2014年，在英国谢菲尔德大学电子与电气工程系担任访问学者。主要研究方向包括电机和电机驱动。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178fhcbMS3MOHNGrIlcjHR0s4aWnqBbETEqSP0HZic9USzlNiabKMWPicM560RvEuA6ibicOk9IyibMNiaic3w/640?wx_fmt=png&from=appmsg)

**陶涛**，2020年获江苏大学电气工程博士学位，江苏省优秀博士论文获得者。现任电气信息工程学院讲师，主持国家自然基金项目和173重点基础研究子课题，主要研究方向是多相永磁电机驱动控制。

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