# 拒绝服务攻击下基于UKF的智能电网动态状态估计研究

原创 自动化学报 2019-04-08 17:30 北京

> 原文地址: [https://mp.weixin.qq.com/s/fkKtcdNNh-C2FZaUmXgAXw](https://mp.weixin.qq.com/s/fkKtcdNNh-C2FZaUmXgAXw)

**网络攻击下智能电网动态状态估计：**在智能电网中，网络攻击通常导致量测数据不完备、数据异常等问题，必须进行状态估计(State Estimation, SE)以准确和有效地监控传输线路负载或母线电压大小等状态信息，从而为基于系统实时状态数据进行安全评估等提供支撑。

  

李雪, 李雯婷, 杜大军, 孙庆, 费敏锐. 拒绝服务攻击下基于UKF的智能电网动态状态估计研究. 自动化学报, 2019, 45(1): 120-131.

  

智能电网是一种典型的物理信息融合系统，它深度融合物理电网与信息网络，有效实现信息流与能量流的双向流动，通过信息化不断提高智能电网的自动化水平和运行效率。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCx9tg5pFbWjERqI1UOyb9euvib7RwSAxz9aSboPZwGrNC7iaeJ5U3wuZA/640?wx_fmt=png)

智能电网

  

传统电力系统长期运行在封闭的物理环境中，在状态估计时通常不考虑通信网络安全带来的问题。然而，在智能电网中，通信网络与传统电力网深度融合，使得其从“封闭”走向“开放”极易导致恶意网络攻击，其中拒绝服务(Denial of service, DoS)攻击是最典型的网络攻击之一。DoS攻击引起量测量数据丢失，无法进行正常的预测校正，导致对智能电网的安全性和经济性进行错误的分析和判断，从而威胁智能电网安全经济运行。

  

因此，解决由于网络攻击导致的智能电网量测信息丢失问题面临新的困难和挑战：1)DoS攻击导致的数据连续丢包破坏了量测数据的完整性，如何对丢失数据进行补偿并重构智能电网动态模型是一个挑战；2)传统基于完整性数据的无迹卡尔曼滤波(Unscented Kalman filter, UKF)算法不能简单直接地应用于DoS攻击下的智能电网状态估计，如何设计基于UKF的动态状态估计新方法是另一个挑战。

  

为了解决以上困难和挑战，本文基于霍尔特指数平滑和无迹卡尔曼滤波技术，提出了一种适用拒绝服务攻击的改进无迹卡尔曼滤波新方法，主要贡献如下：

1）从智能电网受到DoS攻击的角度研究UKF算法，运用伯努利分布描述了DoS攻击的量测数据丢失特性并设计了数据补偿策略，以重构智能电网动态模型；

2）采用Holt's双参数指数平滑方法刻画电力系统状态方程，构造了融合补偿信息的新状态估计方程，并进一步基于估计误差协方差矩阵推导了状态增益更新方法，得到了无迹卡尔曼滤波动态估计新方法。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXChHLiauHSeibhjtZIC6Qy7nOm06duNuibZuiasCPFvib78unt8Hu0ln93SHA/640?wx_fmt=png)

拒绝服务攻击下基于改进UKF动态状态估计流程图

  

仿真表明改进UKF算法在DoS攻击下进行智能电网动态状态估计是可行有效的，且其状态估计性能明显优于传统UKF算法。

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCpPYzvjrqyoya6vte0650BOq1ibbySkgNuXYt9evRaR7hbDf4XFBIxtA/640?wx_fmt=png)

**作者简介**

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCzbKZVCYNSClDq3wQReWUOUxadN9XQe9KRy5hgbrf8ysx8LQKaKq60g/640?wx_fmt=png)

李雪，上海大学机电工程与自动化学院副教授。主要研究方向为智能电网安全控制与性能评估。

E-mail: lixue@shu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXC5HAXp56mjBQnqfcmFaIVmnYF7DnfriadNw4fwhRWAzZBOR3iasz40VOg/640?wx_fmt=png)

李雯婷，上海大学机电工程与自动化学院硕士研究生。主要研究方向为网络攻击下智能电网状态估计及性能分析。

E-mail: lwting@shu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCOX1LL6rmtWGJSeme3icGAEWnJvibHLgam3XuFeDdVicWM3DKAPkPLmxmQ/640?wx_fmt=png)

杜大军，上海大学机电工程与自动化学院教授。主要研究方向为机器视觉和网络化系统安全控制。本文的通信作者。

E-mail: ddj@i.shu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXC7BIyDxVx4oCHBAssK7zdxRr4CKqU51TcMuyjE1zVsS7HtU4iagBTY8Q/640?wx_fmt=png)

孙庆，上海大学机电工程与自动化学院博士后。主要研究方向为混杂系统的状态估计及其应用。

E-mail: qingsun@shu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCnlWicBialXawXfRmsIsgRaMaib1eTic5RPZF59uZghac16lCeHsSNVpRGw/640?wx_fmt=png)

费敏锐，上海大学机电工程与自动化学院教授。主要研究方向为网络化控制系统及实现。

E-mail: mrfei@staff.shu.edu.cn

  

自动化

学报

**信息物理融合系统理论与应用专刊**

[信息物理融合系统理论与应用专刊序言](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064291&idx=1&sn=4da1e829cb5a537b55dfb6cba8cb3c3d&chksm=8131cdaeb64644b878bf01b39d1a0ca987534b51b11ad7731cac3244dadbb3d36be3ec22cc0c&scene=21#wechat_redirect)

[工业网络系统的感知-传输-控制一体化:挑战和进展](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064296&idx=1&sn=af7524600c45518a394580467c4904e0&chksm=8131cda5b64644b3256cdab623b7659847c9762f3c726b3e23b53a07f5fe5ddbd946f3f9aef0&scene=21#wechat_redirect)  

[信息物理系统技术综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064319&idx=1&sn=b6a9e44bab786498fddb75b5f6bbe1eb&chksm=8131cdb2b64644a49e2329de3a8721e5eb860d058563e038876316151cbebe7b61904028b862&scene=21#wechat_redirect)  

[多时空尺度的风力发电预测方法综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064323&idx=1&sn=fd00093932e56ef5f4f2e38dbc0b29e2&chksm=8131c24eb6464b58d305023f3faa393cb94fb89b5e5aeccfd23f37697521e916069594b29b9a&scene=21#wechat_redirect)  

[面向电力信息物理系统的虚假数据注入攻击研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064332&idx=1&sn=69371ccf017fd66a309407e580c4470a&chksm=8131c241b6464b57e1f6aee6b1690e56ed93ed0bf7c80e912336976954922cabcd7f8f964a69&scene=21#wechat_redirect)  

[信息物理融合的智慧能源系统多级对等协同优化](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064339&idx=1&sn=00ba84e37be296a07f02ccec9ee7bda0&chksm=8131c25eb6464b48eb09906290aa2dd9488c8b72c3ab4ac14f84c783294e06a9ec762ccdb6b2&scene=21#wechat_redirect)  

[基于贝叶斯序贯博弈模型的智能电网信息物理安全分析](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064352&idx=1&sn=3ee773694ee5d8d7db714003997b4ce0&chksm=8131c26db6464b7b15122d1950b27cf4cba93996afff47290267250913c8f730bc8e2732b272&scene=21#wechat_redirect)  

[网络攻击下信息物理融合电力系统的弹性事件触发控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064381&idx=1&sn=cdfd94ee2f6962583c79fc39e328b7f9&chksm=8131c270b6464b66d903a73118f04dcb54bb263409f49635cfc306fba7e98af3b899a6f31255&scene=21#wechat_redirect)  

  

**自动化科学与技术未来发展专刊**

[自动化科学与技术未来发展专刊](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064147&idx=1&sn=327b3991ea3e77cbcf4d980323c7f82a&chksm=8131cd1eb64644083d7138ddf86b40542952eed2bb5bc1422e1f36ec54d4603a1ccf231fc6ef&scene=21#wechat_redirect)  

[陈杰院士等：自动化科学与技术未来发展专刊序言](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064125&idx=1&sn=719f1a79512837b53e30b629a71cb13c&chksm=8131cd70b64644668547da0629266b323cc8eb363958689b74964fe4451f1c6d2033a6e0d8ba&scene=21#wechat_redirect)  

[柴天佑院士：自动化科学与技术发展方向](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064125&idx=2&sn=a21645cfef86f1fe6892ca9b69683865&chksm=8131cd70b6464466988712c4ac5ef9b7e4f8aee6414de2dc56a14f61f08fecbbe03ef048e4c5&scene=21#wechat_redirect)  

[东北大学丁进良教授等：复杂工业过程智能优化决策系统的现状与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064151&idx=1&sn=2c6b2ef1a6178d340d8b10083699c62c&chksm=8131cd1ab646440cb51478ad8d204a9dc6c1450a09340a10333eef2c55ae88e0163a6ea99c53&scene=21#wechat_redirect)  

[美国南加州大学秦泗钊教授等：数据驱动的工业过程运行监控与自优化研究展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064163&idx=1&sn=edd98909d12c4ebaae5222a64b79440e&chksm=8131cd2eb64644384d2d7d3fce1edf2debdd8328ac63262e2d698a3f0192a6c91c898ba28f49&scene=21#wechat_redirect)  

[桂卫华院士等：铝电解生产智能优化制造研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064156&idx=1&sn=657a5cfaca9a69ab7d630bd3f949ae4d&chksm=8131cd11b64644070005198101ade827f94912bd46c6a2b3d1d2ec50e42cfea45d2c7105b5ee&scene=21#wechat_redirect)  

[北工大乔俊飞教授等：城市污水处理过程异常工况识别和抑制研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064167&idx=1&sn=7acd6f8fddecb189d52dfced142b3758&chksm=8131cd2ab646443ce7791a9c38f40e5cebe15018442874148e216580934b32508f7cfab28b2f&scene=21#wechat_redirect)

[北理孙健教授、邓方教授和陈杰院士：陆用运动体控制系统发展现状与趋势](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064172&idx=1&sn=de6c39a807bc6cf3c86ed92691f2e74a&chksm=8131cd21b64644371c7382e9f44d84a777e616956035af1926bbf63d233dce4243d9d20096a2&scene=21#wechat_redirect)  

[中科院自动化所侯增广研究员等：康复辅助机器人及其物理人机交互方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064187&idx=1&sn=5d397da5ebb4c31840db0043b85580f8&chksm=8131cd36b64644203ab4079f881b673207b0896f587a22abdada7f3e64882b8cf44639631a0e&scene=21#wechat_redirect)

  

**生成式对抗网络GAN技术与应用专刊**

[生成式对抗网络：从生成数据到创造智能](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063870&idx=1&sn=1e1d7562a4bbe4c31e2fdef4859c0bc4&chksm=8131cc73b6464565d9419524cd87b4bbe363384f0ba722017e91a49af4640d349403ea9a0ea6&scene=21#wechat_redirect)  

[人工智能研究的新前线：生成式对抗网络](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063920&idx=1&sn=9094936d46b4bab696df49c408fa1656&chksm=8131cc3db646452b0cba9ebdee9672b9ae010166a941ef19d5972616235193048a3346cf54f0&scene=21#wechat_redirect)  

[一种能量函数意义下的生成式对抗网络](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063930&idx=1&sn=8fc4569fbc51adb78002a6c492a7b58f&chksm=8131cc37b646452180ad8b4be28b69e9e1767c94cf2bf8b712074d8b26e72fffd95146d9fac5&scene=21#wechat_redirect)  

[协作式生成对抗网络](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063937&idx=1&sn=b3bb0ca500fa6f1e5b2d4fdc476187ed&chksm=8131ccccb64645daca101424f49facb82039d857908b8467fc5033a3b254fc348376128fef89&scene=21#wechat_redirect)  

[融合对抗学习的因果关系抽取](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063950&idx=1&sn=073948b72538b1547399cd7d3ba0b847&chksm=8131ccc3b64645d5c3c82fb7baa62c0cd2644c19f626a6a0904b6223bf155b8e77045006815a&scene=21#wechat_redirect)  

[基于生成对抗网络的多视图学习与重构算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063957&idx=1&sn=19964ffc71d7cb689887517b5d1bec12&chksm=8131ccd8b64645cee6db75a3910ee76a1bf2dab99af617044cfc2210d106ebc8c5eb7c88f7ba&scene=21#wechat_redirect)  

[基于生成对抗网络的低秩图像生成方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063961&idx=1&sn=8d6567b1750f5aa499007f17bed8e92b&chksm=8131ccd4b64645c2a898492cbb2eb4ed8272b4234bd1a08da279f17d6eb9884e0d4ace8f062c&scene=21#wechat_redirect)  

[基于条件深度卷积生成对抗网络的图像识别方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063972&idx=1&sn=b8bf8ae85b62f83e74d50f086ff6bc04&chksm=8131cce9b64645ff1ce4a10e6482d74876c664917a3ee821c11a72693cee3af1360b88d6fffe&scene=21#wechat_redirect)  

[基于生成式对抗网络的鲁棒人脸表情识别](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063980&idx=1&sn=ee5a109bc89e6b59dcf0db6359438be1&chksm=8131cce1b64645f7d5c0153e2fc3703abc37bc4edb3fc668efc90fd7433599ef40dcaa94e238&scene=21#wechat_redirect)  

[基于对抗训练策略的语言模型数据增强技术](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063984&idx=1&sn=6092ba309457e2810275069f4dfcef80&chksm=8131ccfdb64645ebb732eccf9f0fb0a81615f92a321d233837e60534ffaca0a352e6d81c97e5&scene=21#wechat_redirect)

[基于GAN技术的自能源混合建模与参数辨识方法-自能源，一场“草根能源”的盛宴](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063988&idx=1&sn=7c506b7a5c161d7c7b302a17ea28a097&chksm=8131ccf9b64645ef252f6078efb02f067d99a4d4d3cf020dfe8d21f85fb512835931dc11fbd7&scene=21#wechat_redirect)

[基于位错理论的距离正则化水平集图像分割算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063994&idx=1&sn=6e6e13de682aecbea7fec4ebbd4e4316&chksm=8131ccf7b64645e1c36dce0c5ba1a70ffcbf2f2ea25cc920c7ee6315227610c205029b5e0f67&scene=21#wechat_redirect)

[异质依存网络衰退特征与关键节点辨识](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064002&idx=1&sn=6b560d52462a2c2958004fb2e701d2c1&chksm=8131cc8fb6464599f19c7d08ce7a86b1638ad2542c79c16e178db90bee226be9c182cfba21cb&scene=21#wechat_redirect)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCktrWt8r7dzb8BoJuPiaMRVVwJ7ia0ApUhfibBaic3E80AbOibw45rwUn8Ww/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCnicOYicU3rXkJB0X1iaL37meZ2ZdEMulmchI2lChnw24PeLuLZRXBlASg/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCktrWt8r7dzb8BoJuPiaMRVVwJ7ia0ApUhfibBaic3E80AbOibw45rwUn8Ww/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCEX4cvmpEm7q9CdjNU7UPSWnKWxbkmWenyiapSu1mS4yoYXvEUrbmDsg/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCktrWt8r7dzb8BoJuPiaMRVVwJ7ia0ApUhfibBaic3E80AbOibw45rwUn8Ww/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47sib9Fica5RkyzFo23lkauXCZHib0UQcchLELH3jao4RlXvoFusoI0GaOcwu4HYq3zWkvEcZSp3L2Sg/640?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

点

这里“阅读原文”，查看更多