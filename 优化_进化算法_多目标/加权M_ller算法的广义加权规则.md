# 加权Möller算法的广义加权规则

原创 自动化学报 2020-04-20 17:30 北京

> 原文地址: [https://mp.weixin.qq.com/s/AUVqQ7ZuKBf4ZzK7KlKyqg](https://mp.weixin.qq.com/s/AUVqQ7ZuKBf4ZzK7KlKyqg)

  

**次成分**是指在输入信号的自相关矩阵中前r 个最小特征值对应的特征向量。

  

杜柏阳, 孔祥玉, 冯晓伟, 高迎彬, 曹泽豪. 加权Möller算法的广义加权规则. 自动化学报, 2020, 46(1): 193-199.

  

在信息处理领域，次成分分析广泛应用于总体最小二乘，波达方向估计，图像处理，频率估计，语音增强和目标跟踪等问题。通常，次成分是指在输入信号的自相关矩阵中前r 个最小特征值对应的特征向量。由这些特征向量张成的特征子空间被称为次子空间。

……

  

次成分并行提取算法能够很好地解决并行提取问题，比如利用主成分分析网络改进的自适应多次成分提取算法，但是该算法必须预先估计信号自相关矩阵的最小特征值。为避免预先估计，实现自适应地提取，需要采用直接设计次成分分析网络的方法。主要方式有两种，一种是通过设计转换机制将次子空间提取算法改造为次成分并行提取算法；另外一种就是通过设计加权信息准则，利用其梯度流，实现次成分的并行提取，或者直接通过加权对算法改进，得到次成分并行提取算法。其中第二种方法相比第一种方法，可减少一些计算过程，因此对其研究很有意义。作者团队前期已经对并行提取算法开展了研究工作。

  

![](加权M_ller算法的广义加权规则_images/img_000_cd7ce51206ac.svg)

![](加权M_ller算法的广义加权规则_images/img_001_e87b9f86c6aa.jpg)

![](加权M_ller算法的广义加权规则_images/img_002_ee4237504578.jpg)

![](加权M_ller算法的广义加权规则_images/img_003_cd7ce51206ac.svg)

语音增强与阵列麦克风

  

![](加权M_ller算法的广义加权规则_images/img_004_f2e4f8109b29.gif)

雷达探测未知飞行物

  

当前，采用不同加权方式对应的并行算法效果不尽相同，因而对一定加权规则下不同算法的性能研究就十分必要。当前对这个问题的研究还比较少。因此，在本文中，作者主要针对改进型Möller 算法为基础的并行提取算法，设计了一种广义加权规则。进而分析了在这种加权规则下，加权规则参数变化时的算法稳定性问题。广义加权规则在理论上更进一步探讨算法的“速度-稳定性”问题，加深对基于Hebbian规则次成分分析算法稳定性的理解；在方法上也可应用于对于其他的并行次成分提取算法的改进。

  

**广义加权规则探究了Möller 算法哪些性质？**

本文提出一套针对加权Möller 算法的广义加权规则，主要得出广义加权规则参数变化的情况下，算法的稳定性能呈现出变化的性质。同时，通过常微分方程解算的方法，结合其中关键函数性质的分析，找出参数的变化同稳定性程度变化的联系，可为选择最优的加权规则参数和学习因子取值范围提供参考。通过三个对比仿真实验验证了所提出的结论的有效性。加权规则表明，当前的并行MCA 算法的适用条件还存在一个比较大的下降空间，对于不同特点的信号类型可以使用不同的加权规则，从而提高算法的综合性能，改善提出次成分的效果。并且加权规则的研究还可以推广到其他的同类别的算法中(例如并行Chen 算法、并行Douglas MCA 算法以及并行Oja-Xu 算法等)，下一步还可以推广到更加具有一般意义的加权规则的形式，从而适用于更加广泛的并行算法改进方案中。

  

  

  

作者简介

![](加权M_ller算法的广义加权规则_images/img_005_e7c2c7707e3b.png)

杜柏阳, 西安高科技研究所博士研究生. 主要研究方向为信号特征提取. 

E-mail: duboyangepgc@163.com

![](加权M_ller算法的广义加权规则_images/img_006_3aafa3c7a8bb.png)

孔祥玉, 西安高科技研究所教授. 主要研究方向为多元信号分析, 信号处理. 本文通信作者.  

E-mail: xiangyukong01@163.com

![](加权M_ller算法的广义加权规则_images/img_007_fa24b147ad94.png)

冯晓伟, 西安高科技研究所讲师.主要研究方向为特征提取, 信号处理. 

E-mail: xiaowei121416@163.com

![](加权M_ller算法的广义加权规则_images/img_008_ce4a2099ebe6.png)

高迎彬, 中国石油大学(北京) 信息科学与工程学院讲师.主要研究方向为特征提取, 信号处理. 

E-mail: welcome8793@163.com

![](加权M_ller算法的广义加权规则_images/img_009_a96dd17e6182.png)

曹泽豪, 西安高科技研究所硕士研究生. 主要研究方向为多元信号分析. 

E-mail: czh17782759319@163.com

  

  

  

自动化

学报

**智能轨道交通系统专刊**

[智能轨道交通系统专刊序言](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064936&idx=1&sn=1e407f5ff8ed2e7d0a0cffb6b538f415&chksm=8131c025b6464933baffc61ee3a778ee8b997645cab22c0e0895bb9ff443387f5b4aab97c391&scene=21#wechat_redirect)  

[高速铁路运行控制与动态调度一体化的现状与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064943&idx=1&sn=a030442104371cea48c400f930dc4dff&chksm=8131c022b6464934bf41d64c1abd440d5864c9f0778be8eab8d8f83c521c9126e314f3aafcd6&scene=21#wechat_redirect)

[高速列车牵引传动系统故障测试与验证仿真平台研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064986&idx=1&sn=4afa131f6252ba91d4b5d5b21d2f9c8e&chksm=8131c0d7b64649c18d37dbc9e8357b8ea7d51dd40732591030ee8b82c1c4dde36ef387d9199d&scene=21#wechat_redirect)  

[基于动态建模与重构的列车轴承故障检测和定位](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064948&idx=1&sn=7de1be822136937d1ec5ae3e970cdb3d&chksm=8131c039b646492f8c76c65bb85531b703f4be67ae92106b75d0791797ab3dd9ad35f4415a74&scene=21#wechat_redirect)  

[数据驱动的高速铁路强风报警自适应解除策略](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064955&idx=1&sn=e907d9cafbb934f3852995df9339b1c2&chksm=8131c036b646492099b88b6e848c4d9d2d4b4ea7e4c6eaad52fd6eea65dd0fc28b7256232e6d&scene=21#wechat_redirect)

[列车动力学模型时变环境参数自适应辨识](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064959&idx=1&sn=5dd2d6388a376ef78259da68e2990612&chksm=8131c032b64649246828651684c45d8b065190d22dcd31d63e914f96fbf230f417e0c598b145&scene=21#wechat_redirect)  

[高速列车牵引整流器多类故障联合诊断方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064974&idx=1&sn=f9da660b91b95ace275a0c82a12d09fe&chksm=8131c0c3b64649d53bb308cd9d64eb21ee1a555dd738515af2e2fae7bd0fd851231975c40f92&scene=21#wechat_redirect)

[基于相关向量机的高速列车牵引系统剩余寿命预测](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064982&idx=1&sn=d5e517f9343a4b76b9eeb4697674add0&chksm=8131c0dbb64649cd029596189b56c7c04ff7dee6e0913948781b210583fa6d9a73f4abf50b17&scene=21#wechat_redirect)

[基于两阶段自适应Gauss配点重构伪谱法的电力机车优化操纵](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065005&idx=1&sn=a680946de8f08405b18824dea9214b2d&chksm=8131c0e0b64649f6890b71cf05eeb08b7c6666bec3a7b66dc01b1a388c44ace78b9b238ff6b9&scene=21#wechat_redirect)  

[磁浮交通轨排耦合自激振动分析及自适应控制方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065000&idx=1&sn=55068f420c0e0db6df05b22aec49b150&chksm=8131c0e5b64649f36bf77865cfc584aa28a9f78bab7f87c4664bef58512223c14d283ae19b06&scene=21#wechat_redirect)

[基于深度强化学习的有轨电车信号优先控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065009&idx=1&sn=22181e88ce32f9e50513210fb1a9fda5&chksm=8131c0fcb64649ea835cce79ba231aa4126e5d5e434399835fd94c4895fa8453f68fbd30c9d0&scene=21#wechat_redirect)

[燃料电池有轨电车能量管理Pareto多目标优化](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065013&idx=1&sn=2020164f917001cd36f2703c5cc5a93d&chksm=8131c0f8b64649ee2fbe904b2964c9e62e4fca19b97e533dc31fb668ee819dd2518db556bab5&scene=21#wechat_redirect)  

**信息物理融合系统理论与应用专刊**

[信息物理融合系统理论与应用专刊序言](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064291&idx=1&sn=4da1e829cb5a537b55dfb6cba8cb3c3d&chksm=8131cdaeb64644b878bf01b39d1a0ca987534b51b11ad7731cac3244dadbb3d36be3ec22cc0c&scene=21#wechat_redirect)

[工业网络系统的感知-传输-控制一体化:挑战和进展](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064296&idx=1&sn=af7524600c45518a394580467c4904e0&chksm=8131cda5b64644b3256cdab623b7659847c9762f3c726b3e23b53a07f5fe5ddbd946f3f9aef0&scene=21#wechat_redirect)  

[信息物理系统技术综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064319&idx=1&sn=b6a9e44bab786498fddb75b5f6bbe1eb&chksm=8131cdb2b64644a49e2329de3a8721e5eb860d058563e038876316151cbebe7b61904028b862&scene=21#wechat_redirect)  

[多时空尺度的风力发电预测方法综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064323&idx=1&sn=fd00093932e56ef5f4f2e38dbc0b29e2&chksm=8131c24eb6464b58d305023f3faa393cb94fb89b5e5aeccfd23f37697521e916069594b29b9a&scene=21#wechat_redirect)  

[面向电力信息物理系统的虚假数据注入攻击研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064332&idx=1&sn=69371ccf017fd66a309407e580c4470a&chksm=8131c241b6464b57e1f6aee6b1690e56ed93ed0bf7c80e912336976954922cabcd7f8f964a69&scene=21#wechat_redirect)  

[信息物理融合的智慧能源系统多级对等协同优化](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064339&idx=1&sn=00ba84e37be296a07f02ccec9ee7bda0&chksm=8131c25eb6464b48eb09906290aa2dd9488c8b72c3ab4ac14f84c783294e06a9ec762ccdb6b2&scene=21#wechat_redirect)  

[基于贝叶斯序贯博弈模型的智能电网信息物理安全分析](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064352&idx=1&sn=3ee773694ee5d8d7db714003997b4ce0&chksm=8131c26db6464b7b15122d1950b27cf4cba93996afff47290267250913c8f730bc8e2732b272&scene=21#wechat_redirect)  

[网络攻击下信息物理融合电力系统的弹性事件触发控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064381&idx=1&sn=cdfd94ee2f6962583c79fc39e328b7f9&chksm=8131c270b6464b66d903a73118f04dcb54bb263409f49635cfc306fba7e98af3b899a6f31255&scene=21#wechat_redirect)  

[拒绝服务攻击下基于UKF的智能电网动态状态估计研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064388&idx=1&sn=b64eb668c35b5237272102ba10afc028&chksm=8131c209b6464b1f97c38301a9ee3905b390267216f96792c0db3fbcb75d5103077c8c03f724&scene=21#wechat_redirect)  

[智能交通信息物理融合云控制系统](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064393&idx=1&sn=0039e3cb167520c5492cee3b17918184&chksm=8131c204b6464b12c92da88f7ea33b88a8c63fc37883f6d0d9a6b00a04c76e01f88a76920394&scene=21#wechat_redirect)  

[东北大学郭戈教授等：交通信息物理系统中的车辆协同运行优化调度](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064404&idx=1&sn=803628dc5b258cd6a76ac7ff6b94ecad&chksm=8131c219b6464b0f553affb02ef8b0cbb4a342946f8ead11e94f4e8489d02926c5401b9c1029&scene=21#wechat_redirect)  

[北交唐涛教授等：基于二维结构熵的CBTC系统信息安全风险评估方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064409&idx=1&sn=cd24c6fa49d24e4f082104eba0666e75&chksm=8131c214b6464b027ce79d3a8813760512098a3dea1ed80195cffbbbb787b475196ce4e56c44&scene=21#wechat_redirect)  

[东北大学孙秋野教授等：基于数据特征融合的管网信息物理异常诊断方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064414&idx=1&sn=517e101f507825ed0fcd9b7c9c70d148&chksm=8131c213b6464b05a7b06f2439e9281905c193352e34101dc207f63330ac642a7ff543abd586&scene=21#wechat_redirect)  

[重庆大学宋永端教授等：受攻击信息物理系统的分布式安全状态估计与控制——一种有限时间方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064429&idx=1&sn=e1a8f6699982fba0786487125b7624fd&chksm=8131c220b6464b36734290d9ab62cfdd3f4a996737439518c61487dc3d72682a05a76163cb92&scene=21#wechat_redirect)  

[大连理工夏浩教授等：基于博弈论的信息物理融合系统安全控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064438&idx=1&sn=33c2fd05cdfb6513bed429e1ccee0828&chksm=8131c23bb6464b2d6acede9f2c16374d58ac7e2967a5eb571a4a98635d4915b50f55b6276291&scene=21#wechat_redirect)  

[西安交通大学彭勤科教授等：假数据注入攻击下信息物理融合系统的稳定性研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651064449&idx=1&sn=cf19ea9877b91f31fa451345cf447cbe&chksm=8131c2ccb6464bda7865bcaee8a6d0a42961f3adc6c1e64cc30e6323854bbed6d266f565b3b7&scene=21#wechat_redirect)

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

![](加权M_ller算法的广义加权规则_images/img_010_ac20859cb13b.png)

![](加权M_ller算法的广义加权规则_images/img_011_358876cd6c03.jpg)

JAS《自动化学报》（英文版）

![](加权M_ller算法的广义加权规则_images/img_012_ac20859cb13b.png)

![](加权M_ller算法的广义加权规则_images/img_013_fa934c1816a8.jpg)

自动化学报服务号

![](加权M_ller算法的广义加权规则_images/img_014_ac20859cb13b.png)

![](加权M_ller算法的广义加权规则_images/img_015_5c2eb0ab4743.jpg)

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