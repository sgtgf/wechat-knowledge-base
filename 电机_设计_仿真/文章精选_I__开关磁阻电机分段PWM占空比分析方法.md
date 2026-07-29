# 文章精选 I ​开关磁阻电机分段PWM占空比分析方法

原创 CES TEMS编辑部 CES电机与系统学报 2023-12-25 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/dqLD4uygUEN-2jm5kY1Ysg](https://mp.weixin.qq.com/s/dqLD4uygUEN-2jm5kY1Ysg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_000_4fecbf19a39d.gif)

****An Analytic Method of Segmented PWM Duty Cycle for Switched Reluctance Motor****

Chaozhi Huang; Yuliang Wu; Hongwei Yuan; 

Wensheng Cao; Yongmin Geng

Jiangxi University of Science and Technology, Ganzhou, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/10018853)    ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10018853)

C. Huang, Y. Wu, H. Yuan, W. Cao and Y. Geng, "An Analytic Method of Segmented PWM Duty Cycle for Switched Reluctance Motor," in CES Transactions on Electrical Machines and Systems, vol. 7, no. 2, pp. 163-170, June 2023, doi: 10.30941/CESTEMS.2023.00008.

**摘 要**

  

  

针对开关磁阻电机实际斩波控制中存在较大的电流峰值和转矩脉动问题，本文提出了一种基于电流斩波控制的开关磁阻电机分段PWM占空比分析方法。该方法通过PWM占空比在一个周期内调节绕组两端的平均电压，实现对绕组电流的控制。同时，根据电感线性模型，将导通相位划分为小电感区和电感上升区，分别推导了两个区域PWM占空比的解析公式。最后，通过MATLAB/SIMULINK仿真和电机平台实验，将电流斩波控制与本文的分段PWM占空比分析方法进行了比较。仿真和实验结果表明，分段PWM占空比分析方法能有效降低电流峰值和转矩脉动，具有较高的实际应用价值。  

  

**Abstract**

  

  

In view of the large current peak and torque ripple in the actual current chopping control of switched reluctance motor, a segmented PWM duty cycle analysis method of switched reluctance motor based on current chopping control is proposed in this paper. The method realizes the control of the winding current by adjusting the average voltage of the two ends of the winding in one cycle through the PWM duty cycle. At the same time, according to the inductance linear model, the conduction phase is divided into a small inductance region and an inductance rising region, and the analytical formulas of PWM duty cycle in the two regions are deduced respectively. Finally, through matlab/simulink simulation and motor platform experiment, the current chopping control is compared with the segmented PWM duty cycle analysis method in this paper. Simulation and experimental results show that the segmented PWM duty cycle analysis method can effectively reduce the current peak and torque ripple, and has high practical application value.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_001_2f45f46800fc.gif)

  

**作者信息**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_002_88f57de8cd04.gif)

**Chaozhi Huang** was born in 1978 and received the B.S. degree in 2001. He received the M.S. degrees in detection technology and automation from Jiangxi University of Science and Technology, Ganzhou, China, in 2004. Later, he received the Ph.D degrees in Power System and Automation from Hohai University. Since 1998, he has been with Jiangxi University of Science and Technology, where he is currently a professor in the School of Electrical Engineering and Automation. His research interests include motor structure design and drive control, robot control technology.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_003_c476b960d8a3.gif)

**Yuliang Wu** was born in Sichuan, China, in 1996. He received the B.S. degree in electrical engineering from Shanxi Agricultural University in 2019. He is currently working toward the M.S. degree in the electronic information from Jiangxi University of Science and Technology. His current research interests include motor drive and control.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_004_9486bf38b81c.gif)

**Hongwei Yuan** was born in Xinzhou, China, in 1995. He received the B.S. degree in electrical engineering from Jiangxi University of Science and Technology in 2018. He is currently working toward the M.S. degree in the electrical engineering from Jiangxi University of Science and Technology. His current research interests include switched reluctance motors and optimization algorithms.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_005_c2805b6b5c3a.gif)

**Wensheng Cao** was born in Shanxi, China, in 1997. He received the B.S. degree in automation department from Taiyuan Industry College in 2020. He is currently working toward the M.S. degree in the electronic information from Jiangxi University of Science and Technology since 2020. His research interests include the drive and control of switched reluctance motor.

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_006_45d6a79450ad.gif)

**Yongmin Geng** was born in Henan, China, in 1997. He received the B.S. degree in electrical engineering from Henan Institute of Science and Technology in 2019. He is currently working toward the M.S. degree in electrical engineering from Jiangxi University of Science and Technology since 2020. His research interests include optimal design of electrical machine structures.

  

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_007_654c2fde68d8.jpg)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_008_b8e655dc1030.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_009_7aacd76fe2de.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_010_b52600b73ce4.jpg)

学会官方微信

电工技术学报

CES电气

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_011_1b04838d13f1.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_012_b170ae512517.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_013_644d85f1cc17.png)

学会官方B站

CES TEMS

今日头条号

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_014_0209dc0f6451.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_015_1b8cfb18233b.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\文章精选_I__开关磁阻电机分段PWM占空比分析方法_images\img_016_c28b250481e7.jpg)

学会科普微信

新浪微博

抖音号