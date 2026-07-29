# 部分桥臂并联的混合型MMC多端直流输电结构

原创 CES TEMS CES电机与系统学报 2021-08-20 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/h\_osEqlBOzrpQWGEUE73og](https://mp.weixin.qq.com/s/h_osEqlBOzrpQWGEUE73og)

  

  

中国电工技术学会活动专区

  

CES Conference

[![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_000_d867196c7be6.jpg)](https://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651228950&idx=1&sn=fa8e263d8d5a3d3cfbe4be0ff922a4eb&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_001_618eed4c1f5b.jpg)](https://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651228018&idx=1&sn=ee7e1b5d99de2ff1f9be8b0d364cdb91&scene=21#wechat_redirect)

  

**部分桥臂并联的混合型MMC多端直流输电结构**

**MMC-MTDC Transmission System with Partially Hybrid Branches**

**Author：****Yongyang Chen, Shangzhi Pan, Meng Huang, Zili Zhu, Yushuang Liu and Xiaoming Zha**

**DOI: 10.30941/CESTEMS.2021.00016**

**https://ieeexplore.ieee.org/document/9473191**

  

01

 **Abstract**

  

  This paper proposes a hybrid submodule modular multilevel converter (MMC) topology which is suitable for multi terminal direct current (MTDC) transmission systems. Each arm of the proposed MMC topology consists of a half-bridge submodule (HBSM) branch and two parallel full-bridge submodule (FBSM) branches. Comparing with the conventional MTDC transmission system, the proposed topology can selectively block the DC fault current and isolate the corresponding fault line without expensive DC circuit breakers (DCCBs). Thus, the influence range of the DC fault can be reduced and the reliability of the power supply can be improved as well. The corresponding modulation and voltage balancing strategies are developed for the proposed hybrid MMC topology. The feasibility of the proposed topology and control strategy is verified in the MATLAB/ Simulink simulation.  

  

02

 **Innovation**

  Firstly, a hybrid MMC topology is proposed for the MTDC transmission system. Secondly, the corresponding control strategies are developed for the proposed hybrid MMC topology. Thirdly, the comparison results of different topologies are given in this paper.  

  

03

 **Main content**

  The four terminal DC transmission system with the proposed hybrid MMC topology is shown in Fig.1. If a pole-to-pole fault occurs on the DC line, the MTDC system will feed current to the fault point. With the proposed MMC topology, the DC fault current can be blocked and the fault on the DC line 1 can be isolated selectively.

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_002_276b7b5d0bfb.png)  

Fig. 1. DC fault protection scheme for MTDC system with the proposed hybrid MMC topology.

  

 The proposed hybrid MMC topology is shown in Fig. 2. The parallel FBSM branches are connected to the DC line 1 and the DC line 2. The components of the FBSM branch 1 are indicated by subscript 1 and the components of the FBSM branch 2 are indicated by subscript 2.

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_003_78b8353ec314.png)

Fig. 2. The proposed MMC topology with partially hybrid branches.

  

   The results of the branch reference voltage can be calculated as follows.

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_004_0d3017065707.png)

  In the case study, the DC line 1 has a DC bipolar short-circuit, and the FBSM branches connected to the DC line 1 are completely blocked after 5 milliseconds. Fig. 3 shows the currents which flow through the branches. The currents flowing through the HBSM branches rise before the fault current is blocked. As the FBSMs connected to the DC line 1 are blocked, the currents flowing through those branches decrease to 0. And the currents flowing through the remained FBSMs can return to normal operation after a period of fluctuation.

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_005_c8b474d4e3ae.png)

(a)

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_006_2d3188b8ba7e.png)

(b)

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_007_953f9380625d.png)

(c)

Fig. 3. The upper arm current of each phase. (a) HBSM branch; (b) FBSM branch 1; (c) FBSM branch 2.

  

  The comparative results of different topologies are listed in Table I.

TABLE I

Topology Comparison

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_008_3b59e3655729.png)

  

04

**Conclusion**

  

  In this paper, a MMC topology with partially hybrid branches is proposed. The proposed MMC topology is suitable for the MTDC system, as it can reduce the influence range of the DC fault and improve the reliability of the power supply. In order to selectively block the fault current and isolate the fault line, corresponding control strategies are also proposed. With the branch reference calculation and group voltage balancing method, the parallel FBSM branches can operate in different conditions. The power flow of the proposed topology can be flexibly controlled, which improves the availability of the proposed topology. The proposed topology and control strategies are verified by simulation results.

  

  

  

  

  

  

  

  

**引用本文**

  

  

  

  

  

  

Y. Chen, S. Pan, M. Huang, Z. Zhu, Y. Liu and X. Zha, "MMC-MTDC transmission system with partially hybrid branches," in _CES Transactions on Electrical Machines and Systems_, vol. 5, no. 2, pp. 124-132, June 2021.

  

DOI: 10.30941/CESTEMS.2021.00016.

  

  

  

  

  

  

  

  

**本文作者**

  

  

  

  

  

  

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_009_8ca1905e6a54.png)

**Yongyang Chen** (S’19) was born in Hefei, Anhui Province, China, in 1996. He received B.Eng. Degree in electrical engineering from Wuhan University, Wuhan, China, in 2017, where he is currently working toward the Ph.D. degree. His main research interests include the modular multilevel converter and dynamic analysis of power converters.  

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_010_8ed25739715a.png)

  

**Shangzhi Pan** (M’08-SM’14) received his B.Sc. and M.Sc. in Electrical Engineering from Zhejiang University, China, in 1998 and 2001, respectively, and the Ph.D. from Queen’s University in 2008. He joined the College of Electrical Engineering, Wuhan University, China in 2018, where he currently is a professor. He is also an adjunct faculty at Queen’s Center of Energy and Power Electronics Applied Research Laboratory (ePOWER) since 2014. Previously he worked as the VP of research and development at SPARQ systems, a Queen’s Spun-off photovoltaic microinverter company since 2010. He was a senior research engineer at Queen’s University from 2008 to 2013. His research interests include digital control techniques for power converters, grid-connected inverters, voltage regulators for computing systems, power converters for renewable energy sources, and power converters for electric vehicles.

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_011_b52b258b6c83.png)

**Meng Huang** (S’11–M’13) received the BEng. And MEng. degrees from the Huazhong University of Science and Technology, Wuhan, China, in 2006 and 2008, respectively, and the Ph.D. degree from the Hong Kong Polytechnic University, Hong Kong, in 2013. He is currently an Associate Professor of the School of Electrical Engineering and Automation, Wuhan University, Wuhan, China.

  His research interests include nonlinear analysis of power converters and power electronics reliability. He received the best paper award of the IEEE Transactions on Power Electronics in 2016. He serves as the Guest Associate Editor of IEEE Journal of Emerging and Selected Topics of Power Electronics, IEEE Journal of Emerging and Selected Topics of Circuits and Systems, and the Associate Editor of IEEE Access.

  

  

****下载论文PDF版**，请点击左下角“阅读原文”，访问期刊网站。**

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_012_6e1d423fafc9.png)

**长按二维码注册参会**

**2021年第十六届中国电工技术学会学术年会**

中国电工技术学会成立40周年纪念大会

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_013_1670b8d4960c.png)

**长按二维码注册参会**

**第五届轨道交通电气与信息技术国际学术会议**

  

  

  

推荐阅读

[CES TEMS征稿|高效节能及智能化电机系统专题](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483803&idx=1&sn=e51dd22d637131821bcd9aa68620b52c&chksm=cea83062f9dfb97461abebb36cf3b71dfc3f735b1cb99eba7d3193f0935a380989b9461c315f&scene=21#wechat_redirect)  

[基于可控漏磁的反凸极永磁同步电机设计与优化](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483842&idx=1&sn=491613527373bba6ab1d660d08f303bd&chksm=cea8303bf9dfb92d3045bc5461e169bf6c8cdcab63d11173390bedec99834364222bab5374be&scene=21#wechat_redirect)  

[好文推荐|基于鲁棒二分法以及扰动观测器的并网逆变器模型预测控制](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483745&idx=1&sn=c74c7f021b6074311d759696c92aa66c&chksm=cea83098f9dfb98e619829e9e08f0929beae34600da3ed5c32e897c5f481a17eaee19684d2aa&scene=21#wechat_redirect)  

[抢先看 | CES TEMS 2021年第2期目次及摘要](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483685&idx=1&sn=5290f929c5817e370c73abf66c0337b4&chksm=cea830dcf9dfb9cac524841f7dd16cad1416d59cb37560513d5c1416707a1b04ab528785caba&scene=21#wechat_redirect)  

[EVS34大会报告：全钒液流电池建模与运行优化策略研究](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651231299&idx=1&sn=63fda00bbe1ae0361f689d286cd2036e&chksm=8470b7e5b3073ef3dc6940f7a4e782734438efb32ebc14486bcfbcf03d721a2b9412164f5a77&scene=21#wechat_redirect)  

[EVS34大会报告：氢能储运装备检验检测技术及应用](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651231298&idx=1&sn=6bcb2c01945c5a72f83e7b8d04e87fb5&chksm=8470b7e4b3073ef2403f263d412311238b093a1b3a2fb28297e4918b8399b0e25ada182dd771&scene=21#wechat_redirect)  

  

  

> 联系我们

> CES TEMS编辑部：010-63256823
> 
> 邮箱：cestems@126.com
> 
> 网址：http://www.cestems.org/
> 
> 投稿网址：https://mc03.manuscriptcentral.com/tems
> 
> 官方微信号：CESTEMS
> 
> ![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_014_4b990264d47f.jpg)

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_015_47128a87823f.jpg)

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_016_e1c2e52fd460.jpg)

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_017_57085905c7e9.jpg)

学会官方微信

电工技术学报

电气技术

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_018_40de848746c7.jpg)

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_019_c740ade3d1f7.png)

  

![](D:\电脑文件\公众号知识库\电力系统_输电_直流输电\部分桥臂并联的混合型MMC多端直流输电结构_images\img_020_c6c1ab223959.png)

学会官方B站

新浪微博

今日头条号