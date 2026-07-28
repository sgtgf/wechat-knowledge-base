# 文章精选 I 中国科学院电工研究所单开宇等：基于改进型级联降阶自抗扰控制器的混合磁轴承控制策略

原创 CES TEMS编辑部 CES电机与系统学报 2025-10-20 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/XuQDxyIyuqeh\_CGWMmsggw](https://mp.weixin.qq.com/s/XuQDxyIyuqeh_CGWMmsggw)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

****Control Strategy for Hybrid Magnetic Bearing Based on Improved Cascaded Reduced-Order Active Disturbance Rejection Controller****

Kaiyu Shan1,2; Ke Wang1,2; Wei Zhang1,2; Yuxiang Zhu1,2; Lu Zhao1,2; Jinquan Zhu1,2; Yaohua Li1,2  

1.Chinese Academy of Sciences, Beijing, China

2.University of Chinese Academy of Sciences, Beijing, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/11189078)   ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11189078)

K. Shan et al., "Control Strategy for Hybrid Magnetic Bearing Based on Improved Cascaded Reduced-Order Active Disturbance Rejection Controller," in CES Transactions on Electrical Machines and Systems, vol. 9, no. 3, pp. 340-351, September 2025, doi: 10.30941/CESTEMS.2025.00024.

**摘 要**

  

  

水轮发电机启动过程中混合磁轴承支撑系统存在位移波动的问题，而磁轴承的非线性与强耦合特性限制了建模的准确性，导致现有控制方法难以适应参数变化。为抑制启动扰动并实现低计算复杂度与高精度的控制策略，本文提出一种基于改进型级联降阶自抗扰控制器的五自由度混合磁轴承控制策略。前级降阶型扩张状态观测器降低了系统的计算复杂度，使系统在电机启动扰动时保持稳定，后级在降低计算复杂度的基础上进一步提高系统对扰动的估计精度。此外，通过频域分析和李雅普诺夫稳定性证明，验证了该控制策略的抗扰性能和噪声抑制能力。实验结果表明，该策略能够有效减小电机启动时磁浮轴承支撑系统的位移波动，显著提升系统的鲁棒性。  

  

**Abstract**

  

  

During the startup of the hydraulic turbine generators, the hybrid magnetic bearing support system exhibits displacement fluctuations, and the nonlinearity and strong coupling characteristics of the magnetic bearings limit the accuracy of rotor modeling, making traditional control methods difficult to adapt to parameter variations. To suppress startup disturbances and achieve a control strategy with low computational complexity and high precision, this paper proposes a five-degree-of-freedom hybrid magnetic bearing control strategy based on an improved cascaded reduced-order linear active disturbance rejection controller (CRLADRC). The front-stage reduced-order linear extended state observer (FRLESO) reduces the system’s computational complexity, enabling the system to maintain stability during motor startup disturbances. The second-stage reduced-order linear extended state observer (SRLESO) further enhances the system’s disturbance estimation accuracy while maintaining low computational complexity. Furthermore, the disturbance rejection and noise suppression capabilities are analyzed in the frequency domain and the stability of the proposed control method is proven using Lyapunov theory. Experimental results indicate that the proposed strategy effectively reduces displacement fluctuations in the hybrid magnetic bearing support system during motor startup, significantly enhancing the system’s robustness.

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3Khicqtc5YpnNhbUwMS7wiceiawdNpkEXic1ib1oje4iaoorHySLWnPJ3ETpguw/640?wx_fmt=png&from=appmsg)

总体控制框图

  

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3KhU8cVFYcUVdhfxHSB7tiaPGXSziaVje0kiaicIWicjWcK4QGRrKCJEicpGXOQ/640?wx_fmt=png&from=appmsg)

**单开宇**，2000年生于中国辽宁。2023年毕业于东北电力大学电气工程专业，获工学学士学位。现于中国科学院电工研究所、中国科学院大学攻读电气工程博士学位，主要研究方向为磁轴承控制与永磁同步电机控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3Khx9J1CrGRTPQy97lqqoTtgm5GxD0mt5CHcBeqlEQ91rPoa7Yh0Hg9qQ/640?wx_fmt=png&from=appmsg)

**王珂（Member，IEEE）**，1983年出生于中国河南。2004年毕业于北京交通大学电气工程专业，获学士学位；2009年于中国科学院电工研究所获电力电子与电力传动博士学位。同年入职中国科学院电工研究所工作至今，现任研究员。主要研究方向为直线电机与交流传动系统的分析与控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3KhN9tkusHQ5pjotb2zdtcxXBWagbEbMXX4MW0IPibYUG8lotjHZAOMIWg/640?wx_fmt=png&from=appmsg)

**张伟**，2024年毕业于北方工业大学电气工程专业，获学士学位。现于中国科学院电工研究所、中国科学院大学攻读电气工程博士学位，主要研究方向为无刷双馈电机控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3KhvqSYqYJLibicgia5hGZxXW71HCNTguTcashe7wOatyTaricdibJiao5l60Ow/640?wx_fmt=png&from=appmsg)

**朱宇翔**，2023年毕业于清华大学电气工程专业，获学士学位。现于中国科学院电工研究所、中国科学院大学攻读博士学位，主要研究方向为主动磁轴承控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3KhQWnC8Qpxm18ME86lgbIjvTS0RFiaBR2ia52EgZSibaZRDic12rgdKK33GA/640?wx_fmt=png&from=appmsg)

**赵鲁（Member，IEEE）**，2006年与2009年分别于南昌大学获电气工程专业学士与硕士学位，2013年于中国科学院电工研究所获电力电子与电力传动博士学位。同年入职中国科学院电工研究所工作至今，现任研究员。主要研究方向为仿真分析与电机控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178RL9dyBNsRvib0GSjYIt3Kht5LEA8ytcoXTcVr3Bic1uST4DGCzyyayyU9qSZZjekJ8vUJGaO8mSjA/640?wx_fmt=png&from=appmsg)

**朱进权**，2021年毕业于中国科学院大学，获电力电子与电力传动博士学位。现任副研究员，主要研究方向包括大功率变流器、直线电机控制及交流传动技术。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z0jgmKGhulteUDRcchHH8ibs54Y0duv7eESjQuM25mtglnsiaXrsTDawWKwxdoAKib2kFmaibQqt0wg/640?wx_fmt=gif&from=appmsg)

**李耀华（Member，IEEE）**，1966年出生于中国河南。1994年毕业于清华大学，获电力电子与电力传动博士学位。1995年至1997年，在柏林工业大学电机研究所从事博士后研究。1997年加入中国科学院电工研究所工作至今，现任电工所所长、教授。主要研究方向为电力电子与电机控制。

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