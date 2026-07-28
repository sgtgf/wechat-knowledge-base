# 文章精选 I 天津工业大学张国政等：基于小波核卷积神经网络的NPC三电平逆变器开路故障诊断方法

原创 CES TEMS编辑部 CES电机与系统学报 2025-07-10 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/U1p\_24BbcrkGWBlHWkUgqg](https://mp.weixin.qq.com/s/U1p_24BbcrkGWBlHWkUgqg)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

****Fault Diagnosis Method for Open-Circuit Faults in NPC Three-Level Inverter Based on WKCNN****

Guozheng Zhang; Menghui Li; Xin Gu; Wei Chen  

Tiangong University, Tianjin, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/11014611)   ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11014611)

G. Zhang, M. Li, X. Gu and W. Chen, "Fault Diagnosis Method for Open-Circuit Faults in NPC Three-Level Inverter Based on WKCNN," in CES Transactions on Electrical Machines and Systems, vol. 9, no. 2, pp. 234-245, June 2025, doi: 10.30941/CESTEMS.2025.00012.

**摘 要**

  

  

随着电力电子系统对高可靠性和高可用性电力变换设备要求的日益提升，中性点钳位（NPC）三电平逆变器的故障诊断受到了广泛关注。为了应对故障特征提取的挑战，本文提出了一种基于小波核卷积神经网络（WKCNN）的端到端诊断方法，该方法能够从电流信号中提取多尺度特征，从而显著提高诊断准确性。该方法直接使用原始三相电流信号作为输入，应用小波核卷积自动捕捉频域故障特征，结合亚当算法优化的 Softmax 分类器，实现对 NPC 三电平逆变器的开路故障诊断。各种运行条件下的实验结果表明，该模型在多种故障工况下都具有较高的准确率，对比分析进一步证实了其在诊断效率和性能方面优于传统的机器学习和其他深度学习方法。  

  

**Abstract**

  

  

With the increasing demand for high reliability and availability in power conversion equipment within power electronics systems, the fault diagnosis of neutral-point-clamped (NPC) three-level inverters has garnered widespread attention. To address the challenges of fault feature extraction, this article proposes an end-to-end diagnostic approach based on a wavelet kernel convolutional neural network (WKCNN), capable of extracting multi-scale features from current signals to significantly enhance diagnostic accuracy. This method directly uses raw three-phase current signals as input, applying wavelet kernel convolution to automatically capture frequency-domain fault features, combined with a Softmax classifier optimized by the Adam algorithm to achieve fault diagnosis for NPC three-level inverters. Experimental results under various operating conditions demonstrate that this approach maintains robust diagnostic accuracy across multiple fault scenarios, with comparative analysis further confirming its advantages in diagnostic efficiency and performance over traditional machine learning and other deep learning methods.

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibdzYWdibD0ro2Pj7DftmKQMlgicy2zT0j06KicP68n4mCJB5C1picFCRV3BomdwDZbkpryicmqhibBHT6Q/640?wx_fmt=png&from=appmsg)

Structure of WKCNN.

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibdzYWdibD0ro2Pj7DftmKQMes3ssqGUsDXHnHkRATqEw1Libys2JI5odeSWLtaWfVKITMiauzqyq9Jg/640?wx_fmt=png&from=appmsg)

**张国政(Member, IEEE)**，1985年出生于中国大同。2008年在天津大学获得电气工程学士学位，2011年在天津科技大学获得电气工程硕士学位，2017年在天津大学获得电气工程博士学位。天津工业大学电气工程学院副教授，国家地方联合电气系统设计与制造工程研究中心的成员。研究方向包括电机、多电平逆变器及其控制系统。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibdzYWdibD0ro2Pj7DftmKQMJD3EEmLz78eroydibGf0xyt5AOfpF7ecg9pMKV72PT9T3Qm7DhCFjog/640?wx_fmt=png&from=appmsg)

**李孟晖**，于2021 年在曲阜师范大学获得电气工程专业的学士学位，目前，正在天津工业大学电气工程学院攻读电气工程硕士学位。研究方向包括多电平逆变器的故障诊断和机器学习。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibdzYWdibD0ro2Pj7DftmKQM4eXkq0ULsWRjBB3t8tG4grIP86wIyl8ZiaxloicA6ic1pwyiaS1zfs0QfQ/640?wx_fmt=png&from=appmsg)

**谷鑫(Member, IEEE)**，1980年出生于中国天津。分别于2003年、2006年和2010年获得天津大学电气工程学士学位、硕士学位和博士学位。目前是天津工业大学电气工程学院和国家电气系统设计与制造地方联合工程研究中心的教授，电机系统研究所副所长。主要研究方向为永磁同步电机、电力电子变换器及其控制系统。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17ibdzYWdibD0ro2Pj7DftmKQMicaf7KqVSt5e2w7x5YFtJaXolVZddot1qCx9gYsAfiav0qiajjZqSkoTA/640?wx_fmt=png&from=appmsg)

**陈炜(Member, IEEE)**，1977年生于中国山西。分别于2000年、2003年和2006年获得天津大学电气工程学士学位、硕士学位和博士学位。现任天津工业大学电气工程学院教授，中国电机系统设计与制造国家地方联合工程研究中心副主任。研究方向包括电机驱动，电力电子。

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