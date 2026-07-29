# 基于RefineNet的端到端语音增强方法

原创 自动化学报 自动化学报 2022-03-23 15:26 北京

> 原文地址: [https://mp.weixin.qq.com/s/vjjLo5-Xq3RNm8Uj5sLcWw](https://mp.weixin.qq.com/s/vjjLo5-Xq3RNm8Uj5sLcWw)

**点击蓝字|关注我们**

  

**引用本文**

  

蓝天, 彭川, 李森, 钱宇欣, 陈聪, 刘峤. 基于RefineNet的端到端语音增强方法. 自动化学报, 2022, 48(2): 554−563 doi: 10.16383/j.aas.c190433

Lan Tian, Peng Chuan, Li Sen, Qian Yu-Xin, Chen Cong, Liu Qiao. RefineNet-based end-to-end speech enhancement. Acta Automatica Sinica, 2022, 48(2): 554−563 doi: 10.16383/j.aas.c190433

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190433?viewType=HTML

  

**文章简介**

  

**关键词**

  

语音增强, 端到端, RefineNet, 多目标联合优化, 深度神经网络

  

**摘   要**

  

为提高神经网络对语音信号时域波形的直接处理能力, 提出了一种基于RefineNet的端到端语音增强方法. 本文构建了一个时频分析神经网络, 模拟语音信号处理中的短时傅里叶变换, 利用RefineNet网络学习含噪语音到纯净语音的特征映射. 在模型训练阶段, 用多目标联合优化的训练策略将语音增强的评价指标短时客观可懂度(Short-time objective intelligibility, STOI)与信源失真比(Source to distortion ratio, SDR)融入到训练的损失函数. 在与具有代表性的传统方法和端到端的深度学习方法的对比实验中, 本文提出的算法在客观评价指标上均取得了最好的增强效果, 并且在未知噪声和低信噪比条件下表现出更好的抗噪性.

  

**引   言**

  

语音增强的主要目标是从含噪语音中提取原始纯净语音信号, 通过抑制或分离噪声来提升语音感知质量与可懂度, 在语音信号通信、助听器和自动语音识别等领域有着广泛的应用. 经过几十年的发展, 众多语音增强算法相继被提出, 经典的语音增强技术主要包括谱减法、维纳滤波法、基于统计模型的方法以及基于子空间的方法等, 这些方法往往基于噪声平稳或缓变的假设, 在高度非平稳的噪声情况下增强效果会急剧恶化. 深度学习\[3\]的兴起以及在声学建模领域的成功应用, 为解决复杂环境下的语音增强提供了思路. 根据网络学习的目标不同, 基于神经网络的语音增强主要分为基于时频掩蔽的方法与基于特征映射的方法. 基于时频掩蔽的方法将纯净语音与噪声之间的相互关系作为学习目标, 将得到的时频掩蔽估计作用于含噪语音上, 并经由逆变换技术合成增强语音的时域波形. Wang等将深度神经网络(Deep neural networks, DNN)引入语音分离与降噪领域, 通过前馈DNN估计理想二值掩蔽(Ideal binary mask, IBM); 随后, Narayanan等提出在梅尔谱域估计理想浮值掩蔽(Ideal ratio mask, IRM), 在一定程度上提高了语音识别的鲁棒性; Williamson等也提出复数理想浮值掩蔽(Complex ideal ratio mask, cIRM), 并使用DNN同时估计cIRM的实部和虚部, 显著提高了语音的可懂度. 基于特征映射的方法利用神经网络学习含噪语音和纯净语音之间的复杂映射关系. Xu等把深层神经网络视为一个回归模型, 使用带受限玻尔兹曼机(Restricted Boltzmann machine, RBM)预训练的DNN将含噪语音的对数功率谱映射到纯净语音的对数功率谱上; Park等提出冗余卷积编解码网络, 通过删去池化层、加入跳跃连接的方式优化训练过程, 将卷积神经网络(Convolutional neural network, CNN)应用于频谱映射. 这两类方法通常需要将时域波形变换到时频域处理信号的幅度谱或功率谱, 往往会忽略掉语音信号中的相位信息.

  

基于端到端的语音增强方法不依赖于频域表示, 可以有效地利用时域信号的相位信息, 避免了信号在时域和时频域之间来回切换, 简化处理流程. Qian等考虑到WaveNet对语音波形的强大建模能力, 提出将语音先验分布引入到WaveNet框架进行语音增强; Rethage等也在WaveNet的基础上开展语音增强研究, 通过非因果的(Non-causal)扩张卷积来预测目标, 在主观评价指标上取得了比维纳滤波更好的效果. Pascual等将生成对抗网络 (Generative adversarial nets, GAN)引入语音增强领域并提出SEGAN (Speech enhancement generative adversarial network), 并用其对时域波形信号直接处理, 取得了一定的增强效果, 但是在客观评价指标语音质量感知评价(Perceptual evaluation of speech quality, PESQ)上略低于维纳滤波. Fu等提出全卷积神经网络并将其作用于整句语音波形信号, 提升了语音增强的性能. 这些基于端到端的方法都是直接将一维时域波形映射到目标语音, 然而时域波形信号本身并不能表现出明显的特征结构信息, 直接对时域信号建模比较困难, 而且低信噪比环境下信号更复杂, 建模难度会进一步提高. 有学者考虑将神经网络作为前端短时傅立叶变换(Short-time Fourier transform, STFT)替代方案, 我们在其基础上修改扩展, 提出了一个时频分析网络来模拟STFT变换过程的基函数, 将一维时域信息映射到一个类似于时频表示的高维空间中以获取更多的信息; 相比于常见的神经网络方法中使用时频域幅度谱或功率谱值的方式, 时频分析网络能更充分地利用输入信号中的相位信息.

  

语音和噪声信号在时域相邻帧以及频域相邻频带间具有很强的相关性, 这种时频域的局部相关性与图像中的相邻像素间的相关性非常相似. 由于在语音增强领域使用卷积神经网络可以获得与深度神经网络和循环神经网络(Recurrent neural network, RNN)相当或更好的增强效果, 为进一步提高语音增强的性能, 本文考虑使用卷积神经网络中的一种重要网络 — RefineNet来进行端到端的语音增强. 它是一个通用的多路径优化网络, 通过显式利用下采样过程中的所有可用信息, 并使用较长范围的残差连接来实现高分辨率预测. 通过这种方式, 可以利用前期卷积的细粒度特性捕获更深层的高级特征; RefineNet的各个组件使用了带有Identity mappings的残差连接, 这样梯度就可以通过不同跨度的残差连接直接传播, 从而实现高效的端到端训练.

  

在语音增强领域的神经网络训练过程中, 通常将均方误差(Mean square error, MSE)作为损失函数, 而在客观评价中往往使用PESQ或STOI等评价指标, 这种损失函数与评价指标之间的差异性并不能保证训练后的模型在应用中能够提供最优的性能; Fu等和Zhao等将STOI评价指标融入到了损失函数中, 一定程度上提高了语音增强性能. 受此启发, 我们提出将STOI和SDR同时融入到损失函数中, 并且采用多目标联合优化策略, 利用神经网络根据不同目标之间的共性和差异性建模.

  

本文提出了基于RefineNet的端到端语音增强模型(RefineNet-based speech enhancement, RNSE), 首先利用时频分析网络模仿STFT, 学习时域波形在模拟的二维时频空间表示; 然后利用RefineNet整合不同大小特征图的能力, 对不同粒度的模拟时频空间特征进行综合分析; 最后通过时频分析网络逆处理得到增强语音的估计. 在训练阶段, 我们将STOI与SDR评价指标融入到损失函数中进行联合优化, 从而得到更好的增强效果.

  

![](基于RefineNet的端到端语音增强方法_images/img_000_466bcf546401.jpg)

图 1  RNSE模型结构图

  

![](基于RefineNet的端到端语音增强方法_images/img_001_8b400b07bfa8.jpg)

图 5  0dB的Babble噪声下的语音增强语谱图示例

  

**作者简介**

![](基于RefineNet的端到端语音增强方法_images/img_002_6d17199a19b1.jpg)

**蓝  天**

电子科技大学信息与软件工程学院副教授. 2008年获得电子科技大学计算机应用技术专业博士学位. 主要研究方向为语音识别, 语音增强, 自然语言处理, 医学图像分析.

E-mail: lantian1029@uestc.edu.cn

![](基于RefineNet的端到端语音增强方法_images/img_003_4628160823e0.jpg)

**彭   川**

电子科技大学信息与软件工程学院硕士研究生. 主要研究方向自然语言处理, 语音增强与语音识别.

E-mail: pengchuan@std.uestc.edu.cn

![](基于RefineNet的端到端语音增强方法_images/img_004_c642b0df354f.jpg)

**李   森**

电子科技大学信息与软件工程学院硕士研究生. 主要研究方向自然语言处理, 语音增强.

E-mail: sen@std.uestc.edu.cn

![](基于RefineNet的端到端语音增强方法_images/img_005_9636fa7207d3.jpg)

**钱宇欣**

电子科技大学信息与软件工程学院硕士研究生. 主要研究方向为语音增强, 语音分离.

E-mail: yxqian@std.uestc.edu.cn

![](基于RefineNet的端到端语音增强方法_images/img_006_db7745354533.jpg)

**陈   聪**

电子科技大学信息与软件工程学院硕士研究生. 主要研究方向为语音增强, 语音识别.

E-mail: chencong@std.uestc.edu.cn

![](基于RefineNet的端到端语音增强方法_images/img_007_0a5c9e632f45.jpg)

**刘   峤**

电子科技大学信息与软件工程学院教授. 2010年获得电子科技大学计算机应用技术专业博士学位. 主要研究方向为自然语言处理, 机器学习, 数据挖掘. 本文通信作者.

E-mail: qliu@uestc.edu.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  刘文举, 聂帅, 梁山, 张学良. 基于深度学习语音分离技术的研究现状与进展. 自动化学报, 2016, 42(6): 819-833. doi: 10.16383/j.aas.2016.c150734

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150734?viewType=HTML

  

\[2\]  董胤蓬, 苏航, 朱军. 面向对抗样本的深度神经网络可解释性分析. 自动化学报, 2022, 48(1): 75-86. doi: 10.16383/j.aas.c200317

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200317?viewType=HTML

  

\[3\]  张振宇, 杨健. 基于元学习的双目深度估计在线适应算法. 自动化学报. doi: 10.16383/j.aas.c200286

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200286?viewType=HTML

  

\[4\]  李凯文, 张涛, 王锐, 覃伟健, 贺惠晖, 黄鸿. 基于深度强化学习的组合优化研究进展. 自动化学报, 2021, 47(11): 2521-2537. doi: 10.16383/j.aas.c200551

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200551?viewType=HTML

  

\[5\]  姚红革, 张玮, 杨浩琪, 喻钧. 深度强化学习联合回归目标定位. 自动化学报. doi: 10.16383/j.aas.c200045

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200045?viewType=HTML

  

\[6\]  林景栋, 吴欣怡, 柴毅, 尹宏鹏. 卷积神经网络结构优化综述. 自动化学报, 2020, 46(1): 24-37. doi: 10.16383/j.aas.c180275

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180275?viewType=HTML

  

\[7\]  黄博南, 王勇, 李玉帅, 刘鑫蕊, 杨超. 基于分布式神经动态优化的综合能源系统多目标优化调度. 自动化学报. doi: 10.16383/j.aas.c200168

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200168?viewType=HTML

  

\[8\]  饶川, 陈靓影, 徐如意, 刘乐元. 一种基于动态量化编码的深度神经网络压缩方法. 自动化学报, 2019, 45(10): 1960-1968. doi: 10.16383/j.aas.c180554

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180554?viewType=HTML

  

\[9\]  袁文浩, 孙文珠, 夏斌, 欧世峰. 利用深度卷积神经网络提高未知噪声下的语音增强性能. 自动化学报, 2018, 44(4): 751-759. doi: 10.16383/j.aas.2018.c170001

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170001?viewType=HTML

  

\[10\]  孙旭, 李晓光, 李嘉锋, 卓力. 基于深度学习的图像超分辨率复原研究进展. 自动化学报, 2017, 43(5): 697-709. doi: 10.16383/j.aas.2017.c160629

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160629?viewType=HTML

  

\[11\]  韩伟, 张雄伟, 闵刚, 张启业. 基于感知掩蔽深度神经网络的单通道语音增强方法. 自动化学报, 2017, 43(2): 248-258. doi: 10.16383/j.aas.2017.c150719

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c150719?viewType=HTML

  

\[12\]  唐郅, 侯进. 基于深度神经网络的语音驱动发音器官的运动合成. 自动化学报, 2016, 42(6): 923-930. doi: 10.16383/j.aas.2016.c150726

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150726?viewType=HTML

  

\[13\]  乔俊飞, 韩红桂. RBF神经网络的结构动态优化设计. 自动化学报, 2010, 36(6): 865-872. doi: 10.3724/SP.J.1004.2010.00865

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00865?viewType=HTML

  

\[14\]  程宁, 刘文举. 基于多统计模型和人耳听觉特性的麦克风阵列后滤波语音增强算法. 自动化学报, 2010, 36(1): 74-86. doi: 10.3724/SP.J.1004.2010.00074

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00074?viewType=HTML

  

\[15\]  宋辉, 刘加. 基于微分麦克风阵列的自适应语音增强算法研究及DSP实现. 自动化学报, 2009, 35(9): 1240-1244. doi: 10.3724/SP.J.1004.2009.01240

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.01240?viewType=HTML

  

\[16\]  程宁, 刘文举. 基于听觉感知特性的信号子空间麦克风阵列语音增强算法. 自动化学报, 2009, 35(12): 1481-1487. doi: 10.3724/SP.J.1004.2009.01481

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2009.01481?viewType=HTML

  

\[17\]  叶健, 葛临东, 吴月娴. 一种优化的RBF神经网络在调制识别中的应用. 自动化学报, 2007, 33(6): 652-654. doi: 10.1360/aas-007-0652

http://www.aas.net.cn/cn/article/doi/10.1360/aas-007-0652?viewType=HTML

  

\[18\]  邢进生, 万百五, 冯祖仁. 神经网络输出两阶段优化及其应用. 自动化学报, 2002, 28(5): 845-847.

http://www.aas.net.cn/cn/article/id/15650?viewType=HTML

  

\[19\]  苗振江, 袁保宗. 非线性连续联想记忆神经网络的分析和优化设计. 自动化学报, 1995, 21(3): 333-340.

http://www.aas.net.cn/cn/article/id/13963?viewType=HTML

  

\[20\]  张嗣瀛. 轨綫两端均受限制时的最优控制问題. 自动化学报, 1964, 2(4): 181-190.

http://www.aas.net.cn/cn/article/id/17555?viewType=HTML

  

  

**近期文章**

  

[2022斯坦福AI指数报告出炉！点击获取完整报告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075236&idx=3&sn=1caed46e80f613c172a227ead8ddc1a3&chksm=8131f8e9b64671ffa8d6f7c8a36210fe1e262a66a42ab9a544e064d3c725b4a31274a4551750&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（上）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=2&sn=48b5232daaa7a51da96c3a7c87013e2d&chksm=8131fb97b6467281dc8e02749df8d0388f89d30e3b08f44d13c700169d1d7a22c4feef9f2dba&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（下）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=3&sn=21833bb312bb0d9826c64c9fce068aa5&chksm=8131fb97b646728147f2bff58a04230d708d5a4537eb824656c2d54580b11f6a47b0eb30ade6&scene=21#wechat_redirect)

[直播回放分享 | 陈关荣教授：探索最优同步网络的拓扑结构](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061608&idx=1&sn=1500a81260d8f5127b7cb7767c759fba&chksm=8f5a9ae4b82d13f201b714d8e96af9bbddf442bb7e10c97416fb925ab2170c05fa12010fb1d1&scene=21#wechat_redirect)

[人生跑马灯？人类首次同步测量大脑濒死状态](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651074149&idx=2&sn=60d48feaa01d160092c19a91e1314db7&chksm=8131e428b6466d3e1e8f835c506ae7faf61e8b66d94fc1dd027a089e075f82078ce5422a0a13&scene=21#wechat_redirect)

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[AI黑科技：马赛克加密被破解了！](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073824&idx=2&sn=0c15fef01cd893210bef1cceece5d49d&chksm=8131e76db6466e7b1c78884be8517733101cbe37b5a2fd95f4d4df6b569956c0dc5598435eb4&scene=21#wechat_redirect)

[Nature：当AI学会控制核聚变反应堆](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073629&idx=2&sn=b298f9f715cc9a6a38a54f36aea98171&chksm=8131e610b6466f06072ffe4dcfb213dde209f893bd3071cd4cbca8ba9a6484334028a3aae92a&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[中国科学院自动化研究所“海外优青”项目招聘启事](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073629&idx=3&sn=704a900c277b3224dfa9745d2ccc8c24&chksm=8131e610b6466f06329a900636c1bf894d6a890b89d114bbd9faf5f9a8132a73a228e7c3aeac&scene=21#wechat_redirect)

[“诺奖风向标”斯隆奖2022名单出炉！27位华人学者入选](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=2&sn=5ed3a30328a9f41bd43999c1592469b8&chksm=8131e1a0b64668b687601773f8d9d6960344a59a62e83dede480b768fad7375bc5329cfcebdc&scene=21#wechat_redirect)

[Nature封面：人类又输给了AI，赛车AI击败人类顶级车手！](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073362&idx=2&sn=e9a5d620fd2afa6af2c13d9c695e54a7&chksm=8131e11fb64668099fa52873d8df2f3a91c3244972da7d10cbf7c234c8b95b70954e1f2affab&scene=21#wechat_redirect)

  

**热点文章**

  

[《自动化学报》2019年高关注论文](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073450&idx=1&sn=6f57bd0df73f259aa416575f1f69bdfb&chksm=8131e1e7b64668f1344de4acdef6148e8dcfa60c80e4f48e6cb1270558c2beade5601e92d05c&scene=21#wechat_redirect)

[《自动化学报》2021年热点文章回顾](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072577&idx=1&sn=4e6be077d7371c7d29d9a371d8defe19&chksm=8131e20cb6466b1aec2f3b8b1063d3be11725ca9a0c15785c3b42a638170e732acd0d8d345e0&scene=21#wechat_redirect)

[国家自然科学基金论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960308&idx=1&sn=1634c999f22588333537f13393403f9c&chksm=f2942b35c5e3a2232e86b51c2b7c8f37a4d3d7f858d370d76d5afd00567d7da6e9543476d120&scene=21#wechat_redirect)  

[国家重点研发计划论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960255&idx=1&sn=f48435928fd924134cb72014860b9d00&chksm=f2942b7ec5e3a26869da68a1419b3b40ca1e6cb98abf2e380d78a49ffb99c85991d76cc346b0&scene=21#wechat_redirect)

[中国科学院自动化研究所高层次人才招聘启事 | 长期有效](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959451&idx=1&sn=657b7e4aeeaa88114d5189641c5409dc&chksm=f294285ac5e3a14cd230a2b9678c32ba9bf92e8ffc9d61d506c5ffea2df793456dd37c2c6fb1&scene=21#wechat_redirect)

  

**期刊动态**

  

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

[《自动化学报》发表文章入选第六届中国科协优秀科技论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960313&idx=1&sn=01b5a9defe9664ba4a0b8d7322e115d0&chksm=f2942b38c5e3a22e2c57edaa8667a27368ccfb595e6a372dfa85ff2a61329788870d77957a2f&scene=21#wechat_redirect)

[自动化学报（英文版）首届青年编委招募](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959475&idx=1&sn=e28ce2b8fa27ee4fb6a5c0c17e25dd25&chksm=f2942872c5e3a16438dbf45fd8091b643cd2bf50f0bab7092a6c5103d06cd4a16ebceb4db40a&scene=21#wechat_redirect)

  

**期刊目录**

  

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

  

![](基于RefineNet的端到端语音增强方法_images/img_008_09a781fbaad1.png)

![](基于RefineNet的端到端语音增强方法_images/img_009_cfe19e604b1b.png)

  

![](基于RefineNet的端到端语音增强方法_images/img_010_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_011_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_012_3101bca809fd.jpg)

![](基于RefineNet的端到端语音增强方法_images/img_013_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_014_1f2fe63c8714.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](基于RefineNet的端到端语音增强方法_images/img_015_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_016_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_017_1b9622e62b43.jpg)

![](基于RefineNet的端到端语音增强方法_images/img_018_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_019_1f2fe63c8714.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](基于RefineNet的端到端语音增强方法_images/img_020_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_021_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_022_40a27809871c.jpg)

![](基于RefineNet的端到端语音增强方法_images/img_023_1f2fe63c8714.gif)

![](基于RefineNet的端到端语音增强方法_images/img_024_1f2fe63c8714.gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** 

http://www.aas.net.cn

http://www.ieee-jas.net

**投稿:** 

https://mc03.manuscriptcentral.com/aas-cn   

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**

010-82544653（日常咨询和稿件处理）           

010-82544677（录用后稿件处理）

**邮箱:** 

aas@ia.ac.cn（日常咨询和稿件处理）

aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**点击****阅读原文** **了解更多**