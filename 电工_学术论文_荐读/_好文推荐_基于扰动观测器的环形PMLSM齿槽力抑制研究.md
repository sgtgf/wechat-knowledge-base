# 【好文推荐】基于扰动观测器的环形PMLSM齿槽力抑制研究

原创 CES TEMS编辑部 CES电机与系统学报 2023-08-14 09:46 北京

> 原文地址: [https://mp.weixin.qq.com/s/2AJCUaPOnoDa8lJiwQbMfg](https://mp.weixin.qq.com/s/2AJCUaPOnoDa8lJiwQbMfg)

  

  

  

**基于扰动观测器的环形PMLSM齿槽力抑制研究**

**Research on Cogging Force Suppression for Toroidal PMLSM Based on Disturbance Observer**

**Authors****：****Rongtao Zeng, Jinghong Zhao, Sinian Yan, and Yinhao Mao**  

**DOI: 10.30941/CESTEMS.2023.00017**

[**https://ieeexplore.ieee.org/document/10032062**](https://ieeexplore.ieee.org/document/10032062)

  

  

01

**摘要**

 对于一种新型的环形永磁直线电机结构，针对电机恒加速度运行过程中存在的推力波动的问题，论文先从电机的本体结构出发，对环形直线电机的齿槽力特征进行提取，通过傅里叶分解得到其表达式。分别对考虑齿槽力和不考虑齿槽力的电机模型进行控制，在加入齿槽力后，电机运行过程中加速度波动明显增大。在此基础上引入扰动观测算法，通过对扰动模型的特征值进行提取来进行前馈补偿，结果显示，使用扰动观测器对电机齿槽力引起的推力波动有较大程度的抑制，能将电机加速度运行过程中推力波动的峰峰值降低85%以上。

02

**创新点**

论文主要针对直线电机存在齿槽力的问题，分析了齿槽力的特征，并据此设计了一种扰动补偿器，实现了对于不同扰动情况下较好的加速控制性能。

03

**主要内容**

  

论文所针对的对象是环形永磁直线同步电机，其三维模型结构如图1所示。电机为长初级短次级的结构，初级绕组沿圆周方向环绕一圈，次级为双永磁动子结构，通过中间梁连接在一起。

       ![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_000_a1cf4459bd4c.png)

**图1 电机三维模型示意图**

由于环形永磁直线同步电机齿槽的存在，不可避免的会存在齿槽力，直线电机的齿槽力是与动子位置相关的周期性函数，周期与定子槽数和转子极数有关。为了满足直线电机的运行工况，需要保证输出推力亦即电磁推力与负载阻力之差恒定，因此需要针对电机的齿槽力做加速度控制环的优化。

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_001_dac1e6aaca93.png)**图2  环形直线电机齿槽力**

论文通过对电机模型进行有限元仿真，得到电机内外环的齿槽力与位置的变化关系，如图2所示。通过对周期性的齿槽力进行傅里叶分解得到齿槽力基波与各次谐波含量，由此得到电机齿槽力的表达式。为了验证齿槽力对电机加速性能的影响，进行如下仿真分析。

**![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_002_1a4b2db461e6.png)**

**图3** **理想情况下电机电磁力与加速度曲线**

**![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_003_5e72cba0bbb2.png)**

**图4** **加入扰动后电机的****电磁****力和加速度**  

   理想情况下与加入齿槽扰动项之后电机的电磁力与加速度曲线分别如图3和图4所示。对比结果表明，齿槽力的存在会使环形直线电机在运动的过程中产生推力脉动，影响电机矢量控制系统的加速度跟踪性能。

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_004_a3789044b924.png)

**图5 扰动观测器原理图**

   为了抑制齿槽力对电机加速过程的影响，设计了一种扰动观察器，其原理图如图5所示，根据齿槽力的谐波特征选取合适的滤波器Q。

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_005_f294bad8a156.png)

**图6 加入扰动观测器后电机的电磁力和加速度**

  加入扰动观测器后电机的电磁力和加速度如图6所示，0.4s加入扰动观测器后，电机的加速度波动的峰峰值由1.42m/s2变为0.14m/s2，加速度的波动减小90.14%，加速阶段控制性能得到较大程度的改善。

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_006_9613b54a8e02.png)

**图7 改变扰动项后电机的电磁力与加速度**

改变扰动项后电机的电磁力与加速度如图7所示，电机的加速度波动值在0.4s时由0.49 m/s2变为0.06m/s2，与未加入扰动补偿相比，电机加速度的波动减小87%，这表明扰动观测器对不同幅值占比的扰动均能实现较好的加速控制性能。

04

**结论**

论文分析了齿槽力的存在对电机运行的影响，在低负载、低加速度运行阶段，电流波形会产生较大程度的畸变。针对环行永磁同步直线电机在恒加速度运行时存在推力波动大的问题，采用扰动观测器对加速阶段的控制性能进行优化，结果表明，扰动观测器的使用可以有效抑制齿槽力引起的推力波动，在不同齿槽力影响下，加速度波动可减小85%以上。

  

  

  

  

  

  

  

**引用本文**

  

  

  

  

  

  

R. Zeng, J. Zhao, S. Yan and Y. Mao, "Research on Cogging Force Suppression for Toroidal PMLSM Based on Disturbance Observer," in CES Transactions on Electrical Machines and Systems, vol. 7, no. 2, pp. 187-192, June 2023, doi: 10.30941/CESTEMS.2023.00017.

  

  

  

  

  

  

  

**本文作者**

  

  

  

  

  

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_007_6d82e425ca02.jpg)

**R****ongtao** **Zeng** was born in HuNan Province, 1998. He received the B.S. degree in electronic engineering from Wuhan University of Technology, Wuhan, Hubei, China in 2020. He is currently working towards his M.S. degree in electrical engineering from Naval University of Engineering, Wuhan, Hubei, China. His current research interests include permanent magnet motor control.

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_008_4c50feb3c430.jpg)

**J****inghong Z****hao** was born in 1975. He received the Ph.D. degree in electrical engineering from the Naval University of Engineering, Wuhan, China, in 2011. He is currently a professor of the electricity engineering school in the Naval University of Engineering. He has authored or coauthored over 50 papers. His current research interests include power electronics, electric machine design, and its control.

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_009_d85a2c5ca143.jpg)

**Sinian Yan** received the B. S. degree from Shandong University, Jinan, China, in 2014, and the Ph. D. degree from Huazhong University of Science and Technology, Wuhan, China, in 2020. Currently, she is a lecturer in electrical engineering from Naval University of Engineering, Wuhan, China. She has work on magnet design of motor.  

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_010_0d74afdeadaa.png)

**Yinhao Mao** received M.S. degree in electrical engineering from Naval University of Engineering, Wuhan, China, in 2022. He is currently pursuing the Ph.D. degree in electrical engineering in Naval University of Engineering, Wuhan China. His research interests include design and application for linear motors.

  

**点击左下角“阅读原文”，阅读原文。**

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_011_45954043f5a1.jpg)

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_012_6785c84258ed.jpg)

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_013_03f6676172aa.jpg)

学会官方微信

电工技术学报

CES电气

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_014_1fdb4557ed92.jpg)

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_015_5e8cc78d289e.jpg)

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_016_2a18059fedb1.png)

学会官方B站

CES TEMS

今日头条号

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_017_204335b09c0b.jpg)

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_018_1dc27cd5066a.png)

  

![](D:\电脑文件\公众号知识库\电工_学术论文_荐读\_好文推荐_基于扰动观测器的环形PMLSM齿槽力抑制研究_images\img_019_82453f1bd7b5.jpg)

学会科普微信

新浪微博

抖音号

  

> 联系我们

> ☎️ 《电工技术学报》：010-63256949/6981；邮箱：dgjsxb@vip.126.com
> 
> ☎️ 《电气技术》：010-63256943；邮箱：dianqijishu@126.com
> 
> ☎️ 《中国电工技术学会电机与系统学报（CES TEMS）》：电话：010-63256823；邮箱：cestems@126.com
> 
> ☎️ 编务：010-63256994
> 
> ☎️ 订阅：010-63256817
> 
> ☎️ 商务合作：010-63256867/6838