# 【好文推荐】| 针对直线压缩机的一种新颖的基于MRAS的谐振频率跟踪控制方法

原创 CES TEMS CES电机与系统学报 2021-11-12 13:02 北京

> 原文地址: [https://mp.weixin.qq.com/s/ZGX5O8k6B1C04zwioeptjQ](https://mp.weixin.qq.com/s/ZGX5O8k6B1C04zwioeptjQ)

  

中国电工技术学会活动专区

  

CES Conference

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VDDKVFibXczCribVZcic35l3HBU5Ww2L6a2sibmbCpjdODlkCcWEyC5iaicJg/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VyeKyKiavTpc179QVI8JZbkYpVpkiahVEqIZiahTkCtTnr7LAyicPl2dDjg/640?wx_fmt=png)

  

**针对直线压缩机的一种新颖的基于MRAS的谐振频率跟踪控制方法**

# **A Novel Resonant Frequency Tracking Control for Linear Compressor** **Based on MRAS Method**

**作者：****徐伟; 王启哲; 李想; 刘毅; 朱建国** 

**DOI:** **10.30941/CESTEMS.2020.00028**

**https://ieeexplore.ieee.org/document/9211094**

  

01

**摘要**

  

 为了优化线性压缩机的效率，必须将其工作频率控制为等于系统谐振频率。传统的谐振频率跟踪控制算法基于系统的稳态特性，具有收敛速度慢、精度低、系统响应慢等特点。为了解决这些问题，本文提出了一种基于模型参考自适应系统(MRAS)的线性压缩机谐振频率跟踪控制方法，并利用波波夫的超稳定性理论推导出了参数自适应速率，从而通过参数自适应速率直接计算出系统的谐振频率。此外，传统的算法需要通过反电势积分来计算活塞位移信号，这也存在积分漂移的问题。本文提出的算法只需要速度信号，利用自适应带通滤波器(SABPF)可以保证速度计算的精度，从而大大提高了谐振频率计算的精度。

  

02

**创新点**

  

     首次将模型参考自适应(MRAS)的控制理论应用于直线振荡电机(LOM)中，根据直线振荡电机的模型的特殊性，合理的选择了可调模型中的可调参数，并完成了直线振荡电机的谐振频率跟踪，与传统算法相比运算精度及响应速度均有了显著的提升。

  

03

**主要内容**

1.     直线压缩机的电路与机械模型如图1、2所示，建立直线压缩机工作特性的数学模型如式1、2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VST5zRQfDesm6jlFwmiagNItmLNyqJpEib2HT84m2n42Wibgey8bVnw94A/640?wx_fmt=png)  

图1 直线压缩机电路模型

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VThQSM8yriaqrfXsa4GJjAvxAbO3kB3t8BAj4Mmjr2Vlff1R4GwwLQgg/640?wx_fmt=png)

  

图2 直线压缩机机械模型

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VgBoIibf8yWiaEnhVFaHKq3Mv2mINCFJ2KZ8ve5fI8tSVmto5wuvsW3Og/640?wx_fmt=png)

通过分析可知，当电机的工作效率最高时，其驱动频率应与系统的谐振频率相同，此时电流信号超前动子位移信号90°。传统的基于位移电流积平均值(ASCP)的频率跟踪算法正是以此为依据进行频率控制，其计算而该算法采用反电势积分法获得位移信号，如式3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VJK8VkUjsFic990NjD2Fxuky69XY2K0yB7oGA0OP4ejsTmJmQziaICb7Q/640?wx_fmt=png)

为避免纯积分环节的偏移问题，常用低通滤波器来替代式中的积分环节，而低通滤波器的使用则不可避免会使得到的位移信号产生相位偏移，从而影响频率控制的运算精度。

2.     模型参考自适应(MRAS)算法的结构如图3所示。在永磁电机中，转速变化速度远小于电流信号，因此常以转速作为可调参数构建可调模型。但与永磁电机不同，在直线振荡电机中速度信息是以正弦曲线变化的，且频率与电流相同，因此不能将速度作为可调参数。由前文分析可知，电机负载变化影响的参数主要是等效弹性系数k和等效阻尼系数c，因此将其作为可调系数，将式1作为参考模型，将式2作为可调模型，由参考模型得到的速度真实值与可调模型得到的速度观测值之差作为误差，并通过一定的参数自适应率来调节可调模型中的参数。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6Voia68dYX8ZhUUC98uzgYkyNyZo6OLdzibPLMSKgftGgAc7Ev33Ay4YLQ/640?wx_fmt=png)

图3 模型参考自适应结构

设计模型参考自适应系统的关键是选择合适的参数自适应速率。目前，最常用的设计方法是基于波波夫的超稳定性理论。将误差系统转换为由线性正向路径和非线性反馈路径组成的形式，如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VWdI9qXiaC4cXBJuaKUFf4UiaKdqI4ueD7E8l2H50SleZNFo5mOSK5ichQ/640?wx_fmt=png)图4 典型模型参考自适应系统的结构

  由波波夫超稳定性理论，如果非线性反馈路径的输入和输出满足Popov的积分不等式(4)，则整个系统渐进稳定的充要条件是线性正向路径的传递函数为严格的正实数。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6V1AIQy2BjJdQk7zjJRQbMt6P6y4DQOeACT1iaA4ZsJ9KIuQ8jHPPtVZQ/640?wx_fmt=png)

    为便于计算，设K = -k/m, C = -c/m，此时可等效将K和C作为可调模型中的可调参数，参数自适应率采用比例积分形式：

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6V96o35BmI3bv7bbn96H2G0TgCCxwtWgPQL64vcibyemdOmugGY7S3nBQ/640?wx_fmt=png)

  通过计算可分别证实系统反馈路径输入输出满足Popov积分不等式，且系统线性正向路径的传递函数的实部恒大于零，由此可证控制系统的稳定性。

在此基础上，由于参考模型的速度计算含微分环节，为抑制其带来的噪声干扰，采用如图5所示自适应带通滤波器(SABPF)对得到的速度信号进行处理，其输出信号v'与输入信号v之间的传递函数如式5所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6Vw3ibMfhcMYT3vxn8ZYQOp4KacPviaysv8chSrIibFfPlao4fTlqdlVib8w/640?wx_fmt=png)  

图5 自适应带通滤波器的结构图

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6Vu6dHAeVjAwKrYoAVoI7ZV7NrfiaU17j3QQQSq547tnCyia4DlNPia2xcA/640?wx_fmt=png)

  当输入信号的基频w等于滤波器中心频率w1时，输出信号v’与输入信号v没有相位和振幅偏移，并对其他频率的谐波进行滤波。将SABPF的中心频率设为系统工作频率，可在不影响计算速度信号的大小和相位的情况下对导数引起的谐波进行滤波。

  

04

**实验结果**

  在Matlab/Simulink中搭建如图6所示的控制系统。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VITHM6chQMt2JE4WPXg5MibFVVVn9ha2yVoJhjKNibYWOWLuumyY7wyqA/640?wx_fmt=png)

图6 线性压缩机控制系统结构图

  如图7所示为电机启动过程中可调参数K和C的收敛过程，图中虚线表示实际值。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6V0p8I2SGeT9cBZkJcsn132sBqLeIKgwaxpXPzibPA8loSiaiaBpksU4ZoQ/640?wx_fmt=png)

图7 可调参数K和C的收敛过程

由图可见，可调参数K和C从初始值快速收敛到实际值，K的±1%调节时间约为0.5s，C的±1%调节时间约为0.7s。

如图8所示为对负载变化的响应。在1.2s时，系统等效阻尼系数C从20增加到30，系统等效弹簧系数k从30000增加到35000，使可调参数C从21.51增加到32.26，参数K从32258增加到37634。

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VkW8Sg2FnKx6UuNfFDphwaCtNIa5zSGscbbFXQEaPKtykqybjJZkOPw/640?wx_fmt=png)

图8 参数K和C的响应

  由图可见，MRAS算法在步长负载变化后响应迅速，可调参数K和C快速收敛到新的实际值。K和C的±1%沉降时间分别约为0.17s和0.27s。

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VHkbDicSV31YtC3SsJFPmI837ljibbZicgg6Fzxh1TSUvZxjXxibBTCfKqw/640?wx_fmt=png)

图9 相同工况下MRAS算法和ASCP算法的比较

图9表明，MRAS算法比ASCP算法具有更快的收敛速度。ASCP算法收敛速度较慢的原因是该算法使用ASCP值作为频率调整的参考。当ASCP值较大时，认为工作频率和谐振频率差异较大，应提高频率调整率。相反，如果ASCP值较小，则认为此时的工作频率非常接近谐振频率，并应降低频率调整率。但ASCP值不仅与活塞冲程与电机电流之间的相位角有关，而且还与位移幅值与电流幅值的乘积有关。因此，当电机刚启动时，活塞位移和电机电流均未达到稳定状态，ASCP值很小。因此，采用了较低的频率调整速率，导致算法收敛缓慢。

  

05

**结论**

  本文提出并研究了一种基于MRAS的线性压缩机谐振跟踪控制策略。以电动力学方程为参考模型，以力学动力学方程为可调模型，用Popov的超稳定性理论证明了其参数的自适应速率和系统的稳定性。仿真结果验证了推导出的参数自适应速率的正确性。此外，与传统算法的比较仿真结果表明，该控制策略同时考虑了算法的收敛速度和系统的响应速度，使整个系统表现出更好的性能。

  

  

  

  

  

  

  

  

**引用本文**

  

  

  

  

  

  

  

W. Xu, Q. Wang, X. Li, Y. Liu and J. Zhu, "A novel resonant frequency tracking control for linear compressor based on MRAS method," in _CES Transactions on Electrical Machines and Systems_, vol. 4, no. 3, pp. 227-236, Sept. 2020, doi: 10.30941/CESTEMS.2020.00028.

  

  

  

  

  

  

  

**本文作者**

  

  

  

  

  

  

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VoicFazTsvcOEuUalJKrmia33Thc9HHbBrFetBwhPp6m9iat0y9YMnRgCQ/640?wx_fmt=png)

  

**徐伟**，教授、博导，主要从事直线电机及驱动系统研究。IET Fellow，IEEE高级会员，IEEE IES 武汉分部创任主席，国际直线电机委员会委员（ISC Member），IEEE TIE副编辑（Associate Editor），中国电工技术学会直线电机专委会委员等。2021年国际直线电机大会（LDIA）主席。2023年国际预测控制大会（PRECEDE）主席。2002年和2005年分获天津大学双学士和硕士学位，主持国家及省部级项目10余项，接受或发表业内权威期刊论文180余篇（IEEE期刊论文110余篇），出版中英文著作4部，授权发明专利80余项（已转让或应用10余项），Google Scholar引用率5600余次（H指数37）。相关成果获学术奖7次、期刊和会议最佳论文13次。

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6V3fAic631TDWpHuaca34SsqSWIsxaPrcT6dILTdrMTTOVsbTaKgqSJ1g/640?wx_fmt=jpeg)

  

**王启哲**，本硕就读于华中科技大学电气与电子工程学院，于2020年获得硕士学位，其研究方向主要包括直线振荡电机的无位置传感器谐振频率跟踪控制方法。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6Vk9vUryq5AzUibBvD6heeH01bsj9MGqDZtPAYV8kZAB1lBicPtE3wiaiamQ/640?wx_fmt=png)

  

**李想**，本科毕业于西北工业大学，硕博就读于华中科技大学电气与电子工程学院，并于2021年获得博士学位。研究方向包括设计和分析新型永磁无刷电机。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6V4AkexibnjVC8oBHiaz4A6LiaJgFsPf3DRtxKxE0myow7RKicLcJKgO3icBA/640?wx_fmt=jpeg)

  

**刘毅**，讲师，IEEE高级会员，IEEE IES 武汉分部副主席。2016年获得华中科技大学机械电子工程博士学位。研究方向为多端口电机驱动系统控制策略。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6Vsic1ibTXtue7In3ABVvSVgIibhKicZGUfavibwmyibwkBtm1S0hungibpw2BA/640?wx_fmt=png)

  

**朱建国**，教授，院长。1982年获江苏理工学院学士学位，1987年获上海科技大学硕士学位，1995年获悉尼科技大学博士学位。2004年悉尼科技大学教授，2017年悉尼科技大学杰出教授。1998-2017年担任悉尼科技大学电机及电气学院院长，2018年至今担任悉尼大学电气学院院长。研究方向包括材料磁性测量和建模、电机设计及控制、电力电子及智能微电网等。

  

****下载论文PDF版**，请点击左下角“阅读原文”，访问期刊网站。**

  

  

推荐阅读

[CES TEMS征稿|高效节能及智能化电机系统专题](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483803&idx=1&sn=e51dd22d637131821bcd9aa68620b52c&chksm=cea83062f9dfb97461abebb36cf3b71dfc3f735b1cb99eba7d3193f0935a380989b9461c315f&scene=21#wechat_redirect)  

[抢先看 | CES TEMS 2021年第3期目次及摘要](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247483939&idx=1&sn=26748c60ad76e700551d697d11c34a3f&chksm=cea833daf9dfbacc56b20eea779e8e3fc92e28c28112c23d0fce599b8a00e42edcb5d6c34e78&scene=21#wechat_redirect)  

[【好文推荐】| 磁通切换永磁电机两种拓扑结构的性能分析与比较](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484161&idx=1&sn=91d385afdf95a11c8d2ded4c90bbeae2&chksm=cea832f8f9dfbbee8e85c8b255f833315c9ce1b4b1a90060d5a3a8397f0d993cd4e85a52c485&scene=21#wechat_redirect)  

[清华大学何金良教授：面向分布式监测的电磁传感技术](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651234511&idx=1&sn=2aadf4d7e6c46ae391abeb707ed7a1c2&chksm=84708369b3070a7f047afd954fc40482e9120d8267633be9f80b530f8c4ec4cb872d930e4d8d&scene=21#wechat_redirect)  

[清华大学科研团队发表电力电子系统电磁干扰的研究新成果](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651234511&idx=2&sn=fb982cca455b71e6b56ed8679f015977&chksm=84708369b3070a7fef0be076c837eb8840f42427dfb9e9a1c608b215e5b6e6f75381150cc342&scene=21#wechat_redirect)  

[如何从电动汽车退役锂电池中快速筛选出工况良好的电池？](http://mp.weixin.qq.com/s?__biz=MzA4MzA0NTMyMg==&mid=2655502437&idx=1&sn=1aa04885ff93aa150530bb7f2bdb2afa&chksm=844f1ec0b33897d699dc1be6a667f9c881da2dc3a123e05644305f8f3ddf6f7a8e8df702a6f1&scene=21#wechat_redirect)  

  

  

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
> ![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ178bshX9EHBcNIFgWibDj4VlHRfWwcwD39zubP9HbOnLzgYwjkFzpVU7gFhkpcs6NsS7n9JdC9mdOicg/640?wx_fmt=jpeg)

  

**中国电工技术学会**

**新媒体平台**

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VGK6Z0C0CS8ftQ9yEwSKxFibLHLjZaINsichdBGdF65qNoTCmQY9BZKdw/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VaVO3KEVDibTKk7rK6XTXsPl3iaOJs0y9kzdjK4r1oWbXOfxVp90ialLiag/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VICiaianphvGmNwgXCjicicmzqz27pO6lAibW4VnvAmO7aELyNEFJGapJTxQ/640?wx_fmt=jpeg)

学会官方微信

电工技术学报

电气技术

![](https://mmbiz.qpic.cn/mmbiz_jpg/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VJ5Picu9pFLSu5pzDqKOyibgkuNjhweEGRBlRuuHGSWlbtm90S9ELejkQ/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VG4GyhJvqsvnf99ZNosNq53QP2nudU8oZuwQn14EbTuVZ5ABMFVmbicQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/jFLbUGmZ179qvWIQVzT1okqkY8uzYL6VwGGgia0r6ZiaMCFib8xPQ9ktxwV9xY6RCLMtqTSjd4gibgoDNVeEGibxS8g/640?wx_fmt=png)

学会官方B站

新浪微博

今日头条号