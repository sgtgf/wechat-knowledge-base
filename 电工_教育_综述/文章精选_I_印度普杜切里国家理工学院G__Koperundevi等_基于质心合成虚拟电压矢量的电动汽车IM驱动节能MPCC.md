# 文章精选 I 印度普杜切里国家理工学院G. Koperundevi等：基于质心合成虚拟电压矢量的电动汽车IM驱动节能MPCC

原创 CES TEMS编辑部 CES电机与系统学报 2025-11-06 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/C11RB6BKi5dipFtChs3o\_w](https://mp.weixin.qq.com/s/C11RB6BKi5dipFtChs3o_w)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

  

****Energy-Efficient MPCC Using Centroid-Synthesized Virtual Voltage Vectors for IM Drives in Electric Vehicles****

Rinki Roy Chowdhury; G. Koperundevi

National Institute of Technology Puducherry (NIT Puducherry), Karaikal, Puducherry, India

**■**[在线阅读](https://ieeexplore.ieee.org/document/11189077)   ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11189077)

R. R. Chowdhury and G. Koperundevi, "Energy-Efficient MPCC Using Centroid-Synthesized Virtual Voltage Vectors for IM Drives in Electric Vehicles," in CES Transactions on Electrical Machines and Systems, Vol. 9, No. 3, pp. 352-362, September 2025, DOI: 10.30941/CESTEMS.2025.00027.

**摘 要**

  

  

本文提出了一种基于质心虚拟电压矢量合成的改进型节能模型预测电流控制（MPCC）策略，适用于电动汽车（EV）应用中的三相逆变器供电异步电机驱动系统。与传统的有限集MPCC方法不同，后者依赖于对离散开关状态的成本函数评估，而本文提出的方法通过使用一组预定义的虚拟矢量，消除了对查找表的需求。这些基于质心的虚拟电压矢量是通过将两个相邻的有效矢量和两个方向相反且与扇区相邻的非零电压矢量相结合来合成的，取代了传统的开关集。它们在幅值和相位角上均近似于参考电压矢量，从而通过简化的成本函数减小了电流跟踪误差。候选矢量的数量得以减少，保持了计算效率。此外，该方案通过完全避免零电压矢量（ZVVs），确保了每个采样间隔的平均共模电压（CMV）为零。与传统方法相比，本文提出的方法将转矩脉动降低了17%，并将定子电流总谐波失真（THD）降低了37%，同时确保了逆变器桥臂间开关过渡的均匀分布。这减少了开关损耗，提高了驱动效率，在电动汽车应用中尤其具有优势。在高速市郊行驶循环（EUDC）和低速ECE-R15循环下的实验验证，包括转矩脉动和能耗分析，证实了该方法的有效性，整体效率达到83.3%。  

  

**Abstract**

  

  

This paper presents an improved, energy-efficient Model Predictive Current Control (MPCC) strategy based on centroid-based virtual voltage vector synthesis for three-phase inverter-fed induction motor drives in electric vehicle (EV) applications. Unlike conventional finite-set MPCC methods that rely on cost function evaluation over discrete switching states, the proposed approach eliminates the need for look-up tables by employing a pre-defined set of virtual vectors. These centroid-based virtual voltage vectors are synthesized by combining two adjacent active vectors and two nonzero voltage vectors in opposite directions adjacent to the sector replacing the traditional switching set. They approximate the reference voltage vector in both magnitude and phase angle, thereby reducing current tracking error through a simplified cost function. The number of candidate vectors is reduced, preserving computational efficiency. Furthermore, the scheme ensures zero average common-mode voltage (CMV) per sampling interval by completely avoiding zero-voltage vectors (ZVVs). The proposed method reduces torque ripple by up to 17% compared to the conventional approach and lowers stator current total harmonic distortion (THD) by 37%, while ensuring evenly distributed switching transitions among inverter legs. This results in reduced switching losses and enhanced drive efficiency-particularly advantageous in EV applications. Experimental validation under the high-speed extra urban driving cycle (EUDC) and low-speed ECE-R15 cycle, including torque ripple and energy consumption analysis, confirms the effectiveness of the approach, achieving an overall efficiency of 83.3%.

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178B7tRfU8SXDsF43UeAoRHwyMZZZDukNib4EvYb3C15fmOF2tYt2YSCIWLzArs6oCOljLF4p68nNPA/640?wx_fmt=gif&from=appmsg)

产生共模电压（CMV）的两电平逆变器

（a）电压矢量合成（b）方法一（c）方法二

（d）方法三（e）所提质心虚拟电压矢量多载波脉宽调制（MPCC）方法

  

**作者信息**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178B7tRfU8SXDsF43UeAoRHwaE4PqrMANfom0td0YRndmUsIOaOArTicgQC8qDERagrIhZicTKmrmd3w/640?wx_fmt=gif&from=appmsg)

**Rinki Roy Chowdhury(Graduate Student Member, IEEE)** ，于2018年在印度喀拉拉邦的喀拉拉大学获得电气与电子工程学士学位，并于2020年在印度喀拉拉邦的APJ Abdul Kalam科技大学获得电力、控制与驱动硕士学位。她目前正在印度卡拉伊卡尔的普杜切里国家理工学院攻读电气工程博士学位。她的研究方向包括电力电子、电机驱动和电动汽车应用。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ178B7tRfU8SXDsF43UeAoRHwP71ZdbEGIl0wXezJYGSia9qAHGiadE0Og2mibhYxvEp3SVzkY7BJk8MEg/640?wx_fmt=gif&from=appmsg)

**G. Koperundevi(Member, IEEE)**，分别于2001年和2004年在印度普杜切里的庞迪切里大学获得电气与电子工程专业的学士和硕士学位，并于2011年在印度钦奈的印度理工学院马德拉斯分校获得高压工程专业的博士学位。她目前是印度普杜切里国家理工学院电气与电子工程系的副教授。她的研究方向包括电力电子、电动汽车驱动以及高压工程。

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