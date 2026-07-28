# 东北大学王占山教授等：系统H∞范数计算：Lyapunov函数的直接优化方法

原创 自动化学报 2019-10-08 17:48 北京

> 原文地址: [https://mp.weixin.qq.com/s/mhLxRy6usaLWcxVH-frBbw](https://mp.weixin.qq.com/s/mhLxRy6usaLWcxVH-frBbw)

李雅普诺夫函数直接优化是指：针对系统H无穷范数问题，通过求解最优李雅普诺夫函数，给出系统H无穷范数的通用解析表达式，实现系统H无穷范数的直接和精确求解。

  

刘秀翀, 王占山. 系统H∞范数计算:Lyapunov函数的直接优化方法. 自动化学报, 2019, 45(8): 1606-1610.

  

H无穷控制理论主要是用来解决系统存在外部扰动情况下的优化控制问题。在H无穷控制理论研究范畴，无论是鲁棒控制还是鲁棒优化控制，最终影响系统性能的还是闭环系统的特征根或传递函数零极点的分布。因此，研究这一分布对系统性能的影响是H无穷控制理论的基础。在H无穷控制理论中，传递函数(或系统)的H无穷范数是一项重要的性能指标，用于度量扰动输入对系统输出的影响，反映了闭环系统的抗扰能力。在H无穷控制理论研究中，长期存在一个挑战性课题：能否基于系统参数，直接构造出系统H无穷范数的精确解析表达式。

  

H无穷控制理论最初是从频域入手进行研究，并在1989年转换到时域，进而开启了基于状态空间方程描述的系统的H无穷性能研究。目前，求解H无穷范数的主流方案是：将H无穷范数求解问题转化为时域状态空间的约束优化问题。典型的方法为：基于有界实引理给出的线性矩阵不等式(LMI)约束条件，近似寻优H无穷范数的解。这类LMI方法的优点在于能够得到较高精度的H无穷范数估计，其存在的不足表现为：

  

1）这类方法只能得到H无穷范数估计的数值解，而无法得到解析解；

2）这类方法无法揭示系统结构和参数对系统H无穷性能的影响，在一定程度上限制了控制器精细设计的研究。

  

为了克服上述不足，就要从改变求解H无穷范数的途径入手。事实上，LMI类方法求解H无穷范数的途径是：给定一个H无穷范数估计，并判断LMI约束条件中李雅普诺夫函数矩阵的存在性；通过不断减小该估计值近似寻优H无穷范数。因此，LMI类方法暗示了一个前提：难以(或无法)直接构造出一个与H无穷范数相对应的最优李雅普诺夫函数。如果这一前提能够突破，即基于系统参数能够直接构造出这样一个最优李雅普诺夫函数，则系统H无穷范数解析表达式的构造就具有可行性。这样求解H无穷范数的途径就可以改变，进而克服LMI类方法存在的不足。

  

鉴于二阶系统是控制系统中应用最广泛、最具代表性的系统之一，并且多数高阶系统在一定的条件下可以近似(或分解) 为二阶系统来研究，同时为有效展现最优李雅普诺夫函数与系统参数存在的内在关系，本文针对一类二阶线性系统的H无穷范数问题，尝试直接构造一个与H无穷范数相对应的最优李雅普诺夫函数，进而给出基于系统参数的H无穷范数精确解析表达式。

  

**如何构造一个最优李雅普诺夫函数？**尽管最优李雅普诺夫函数与系统参数存在内在关系，但这种关系是复杂和非显性的。因此，直接基于李雅普诺夫方程或参数化黎卡提不等式，难以找到这种内在关系并构造出适合的李雅普诺夫函数。这是早期研究结果存在保守性的根源。为解决这一问题，本文的工作如下：

  

1）采用状态空间转换技术，将原系统转换为H无穷范数等价的新系统（这一转换提取出系统特征参数，并使构造一个最优李雅普诺夫函数具有可行性）；

2）在新的状态空间研究系统，建立参数化黎卡提不等式；

3）构建含有待优化参数的通用李雅普诺夫函数；

4）基于该参数化黎卡提不等式，以H无穷范数估计最小为优化目标，优化李雅普诺夫函数中的参数，进而得到基于系统特征参数的李雅普诺夫函数，用于精确分析系统H无穷范数。

  

**如何构造系统H无穷范数的通用解析表达式？**应用新状态空间下的黎卡提不等式和所构造的李雅普诺夫函数，本文针对状态空间转换所得到的二阶系统

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZr3qXjQgfjiaspQm9h86LFxXpEeLIP4w4COw2nzPd6cyd1dia3bPJic5VA/640?wx_fmt=png)

构造出基于系统特征参数的H无穷范数精确解析表达式

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZujzde8xUVg2FGNUWibUx1ONfu336qmnSsFNakNILtlPh0nssxziaZwXg/640?wx_fmt=png)

其中f(•)是由系统参数确定的函数。

  

表1在不同系统特征参数条件下，给出了不同方法所得结果。表1表明，采用H无穷范数解析表达式给出的结果具有较高精度。

  

表1 H无穷范数分析（a=2）

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZoTqx5PCibuLWVEyGibmIVkIfdXmNibKU0ibESD2UGDdQ62w9VdTnOI6LHQ/640?wx_fmt=jpeg)

  

目前，关于李雅普诺夫函数最优化问题的研究尚处于萌芽阶段，相关的尝试和探索（尤其是针对高阶线性和非线性系统）还有待发展。本文针对系统H无穷范数求解问题，提出了一种李雅普诺夫函数的直接优化方法。通过直接优化黎卡提不等式中的李雅普诺夫函数，构造出基于系统特征参数的H无穷范数解析表达式。本文的研究展现了系统特征参数对系统H无穷性能的影响，避免了H无穷范数求解中复杂的数值优化过程，为H无穷控制理论的研究提供了一个新的思路。

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZ2Ca1E1OYdMmWQiahYDtRdm0JRkFGJwxicb6FzXuI198oz0PyVz8TmNSA/640?wx_fmt=png)

刘秀翀，东北大学信息科学与工程学院讲师. 主要研究方向为系统稳定性分析，运动控制，电力电子与功率变换，电机驱动. 本文通信作者. 

E-mail: liuxiuchong@mail.neu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZEtNe4T2NCK8dbYiblM0GjDERCIH0GrMFPb1Kr5oYRVHW5guvk3xISRw/640?wx_fmt=png)

王占山，东北大学信息科学与工程学院教授, 博士生导师. 主要研究方向为稳定性分析, 故障诊断, 容错控制, 非线性控制理论，智能自动化基础理论. 

E-mail: wangzhanshan@ise.neu.edu.cn

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

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZKeaSb8zR09icn1oZsaPOmnq2KaAAM8J4jg3ty4cuK2RkVhbbxNMeo9A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZ90oLbAtBjhwdicRPqNwjiaM7mHvYrEKqhib0fawBQ4cKgSn1AAezVOTYw/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZKeaSb8zR09icn1oZsaPOmnq2KaAAM8J4jg3ty4cuK2RkVhbbxNMeo9A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZFibom6F3XfJY65So4jb9TJlD2DficBZFnOrMXjGCTrCVYB8O2Y0cJBYw/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZKeaSb8zR09icn1oZsaPOmnq2KaAAM8J4jg3ty4cuK2RkVhbbxNMeo9A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46P7piadnI7FPU5GiatckSUcZycaGAIOMQIcP2icibapqyxNvSFKpmrkKcyJKaQw5yP4Qibicecaw8mDbHg/640?wx_fmt=jpeg)

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