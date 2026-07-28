# 有限频域分析与设计的广义KYP 引理方法综述

原创 自动化学报 2016-12-06 15:58 北京

> 原文地址: [https://mp.weixin.qq.com/s/qhBB9JSk-3Yw487CLPuuqA](https://mp.weixin.qq.com/s/qhBB9JSk-3Yw487CLPuuqA)

从频域角度, 控制系统设计就是寻找控制器使闭环系统具有适当的频域响应. 实际系统(包括被控对象、执行器、传感器等)和信号(控制输入、外部扰动等)常常具有明显的有限频域特性. 比如, 地震波的大部分能量集中于0.3～8 Hz频率范围; 人体对外力最为敏感的频率范围为4～8 Hz. 因此, 控制系统设计的许多问题都可以归结为有限频域性能指标的分析和综合问题. 如何充分利用系统和信号具有的有限频域性质以提高控制系统性能的课题就显得尤为重要.

控制理论中研究有限频域分析与设计问题的主要方法包括: 经典控制理论方法、频率加权法(间接法)和广义性能指标法(直接法). 前两种方法是处理有限频域问题的传统手段, 其设计结果未能直接优化有限频域性能指标(见图1). 鉴于此, 基于广义性能指标的直接法在过去二十多年来受到了广泛地关注, 其基本思路是直接定义有限频域性能指标并研究其处理方法. 直接法主要包括两类结果: 有限频Gramian矩阵法和广义KYP引理法. 前者将标准Gramian矩阵的定义推广到有限频率积分区间, 后者直接研究定义在有限频率区间上的系统二次性能. 尽管有限频Gramian矩阵的概念在上世纪90年代左右就在模型降阶领域被提出来, 但是到目前还缺乏处理有限频Gramian矩阵的系统严格的计算工具, 导致绝大多数相关结果仍然局限在模型降阶问题. 与之相对, 完整的广义KYP引理于2005由Iwasaki教授等人提出之后, 由于克服了上述各种方法的缺点, 同时受到控制理论中广泛流行的线性矩阵不等式(Linear Matrix Inequality, LMI)方法推动, 很快就引起了研究人员的兴趣, 成为有限频域分析与设计研究中的热点. 

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46ibKXiby79kFoKym03xEz12jVDUkTdK754bQOc9Gvw0wp9I11sU5HpwHUKTtUWibWcMlQSWX3MhH6mg/0?wx_fmt=png)

图1 有限频域分析与设计的主要研究方法  

广义KYP引理的主体内容建立了频域不等式(Frequency Domain Inequality, FDI)和LMI之间的等价关系. 图2给出了针对H无穷性能时的KYP引理和广义KYP引理, 即著名的有界实引理(Bounded Real Lemma)及其有限频域情形. 标准有界实引理导出的LMI只有一个Lyapunov矩阵P, 有限频域有界实引理则含有两个Lyapunov矩阵, P和Q. 矩阵Q与考察的有限频域有关. 注意到当取矩阵Q = 0, 有限频域有界实引理便退化为标准有界实引理. 广义KYP引理不仅继承了标准KYP引理的优美形式, 还能处理更为一般的有限频域性能指标. 因而广义KYP引理在控制理论中具有与标准KYP引理一样的基础地位, 同时具有更广泛的应用范围. 自2005年奠基性论文(Iwasaki T, Hara S. Generalized KYP lemma: Unified frequency domain inequalities with design applications. IEEE Transactions on Automatic Control, 2005, 50(1): 41-59)发表之后, 近十年已有大量基于广义KYP引理的研究成果报道, 相关主要研究课题总结在图3中.  

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46ibKXiby79kFoKym03xEz12js0UbK54UOaGusibY7ccrz4OTxpBdQJ2sWFARhIeYpWN2MsYkSgqn0MQ/0?wx_fmt=png)

图2 标准有界实引理和有限频域有界实引理  

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46ibKXiby79kFoKym03xEz12j2uTbZqnMNNoEwRicGwITMQETLoMUrpxz9K6bria9beiaiaMNya20hhXZjQ/0?wx_fmt=png)

图3 广义KYP引理的研究现状总结  

在理解和应用广义KYP引理时, 以下几个要点值得注意: 1) 普遍存在的”水床效应” (Waterbed effect) 意味着, 控制系统在感兴趣频率范围内的性能得到提高的同时, 很可能伴随着感兴趣频率范围之外性能的退化. 因而, 实际的有限频域综合问题往往是多目标优化问题; 2) 较标准KYP引理, 广义KYP引理的强大和不同之处在其提供了一种非光滑(分段光滑)分析方法, 因而很多比较复杂的问题可以通过一系列简单的问题得以解决; 3) 基于广义KYP引理和基于标准KYP引理的控制综合条件有时并无直接关系, 因而不能保证前者设计结果的有限频域性能比后者好, 这点很容易被忽视. 在评估基于广义KYP引理的设计结果时, 有必要设置全频域方法的对照组, 以增强设计结果的说服力和可靠性.   

广义KYP 引理是近年来鲁棒控制领域最为重要和令人激动的发现之一. 尽管目前已经取得了很多重要进展, 但是现有结果仍有一些不足. 关键问题包括: 1) 如何更好地选择或优化松弛矩阵以降低控制综合结果的保守性; 2) 如何获得针对二维系统、时滞系统等复杂动态系统的有限频域性能指标的充要条件; 3) 如何 更好地解释广义KYP引理在非线性/时变系统中的物理意义以拓宽有限频域分析和综合方法在控制理论中的应用范围; 4) 如何扩展广义KYP引理的应用外延, 包括应用非光滑分析思想解决更复杂的理论问题和将实际工程问题转化有限频域分析和问题. 

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46ibKXiby79kFoKym03xEz12jqv3dhT2mmTqDpO6KHpiaROlS3QNHRsY49Nxkw3ZkIfFHLQULDxv9TeA/0?wx_fmt=png)

引用格式

李贤伟, 高会军. 有限频域分析与设计的广义KYP 引理方法综述. 自动化学报, 2016, 42(11): 1605—1619  

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46ibKXiby79kFoKym03xEz12jRpIibb7ab8Bnlva3bmnpibYFlA8Ikfvjbwu5qOiaYfqkSl9hfMzfhQiaoA/0?wx_fmt=jpeg)

李贤伟 新加坡南洋理工大学博士后. 2015年获得哈尔滨工业大学工学博士学位. 主要研究方向为多智能体系统, 鲁棒控制, 有限频域方法及其应用.

E-mail: lixianwei1985@gmail.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46ibKXiby79kFoKym03xEz12j0yCwxLIYmicqOWVWA7IBCKSXZyGibbBMoTcjAiblCsJP5sLUlxnJP7bSg/0?wx_fmt=jpeg)

高会军 哈尔滨工业大学教授, IEEE会士. 2005年获哈尔滨工业大学工学博士学位. 主要研究方向为网络化控制, 鲁棒控制与滤波, 时滞系统及其工程应用. 本文通信作者.

E-mail: hjgao@hit.edu.cn

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！  

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46ibKXiby79kFoKym03xEz12jLiawZicBCHxz3iciacOVVNE9eIDwWicmtJ8xukbFGt6l04JDdicBFXzIv25A/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46ibKXiby79kFoKym03xEz12jGCkEibFf8Exib653Rj8htyVw2jTdFxKqTxo0k0tSdribBeeibiaDeSkRPBA/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46ibKXiby79kFoKym03xEz12jv7OdEk76TMowH48U469xucOFo2p1L3KVnQQGSjoaVeMLric1gVC2dLQ/0?wx_fmt=jpeg)