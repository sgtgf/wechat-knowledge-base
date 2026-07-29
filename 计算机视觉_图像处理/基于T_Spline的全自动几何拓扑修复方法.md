# 基于T-Spline的全自动几何拓扑修复方法

原创 自动化学报 2019-09-26 17:30 北京

> 原文地址: [https://mp.weixin.qq.com/s/Kdu-szD-aJUrT8zA\_nsZow](https://mp.weixin.qq.com/s/Kdu-szD-aJUrT8zA_nsZow)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_000_b729bc7e198b.png)

CAD 模型几何拓扑修复是指：在保证原有CAD模型不失真的前提下, 对CAD 模型中存在的几何瑕疵 (如短边、窄面、退化边、退化面、非连续光滑边界及尖锐特征等) 进行处理, 将存在的“错误”的“脏”几何转换为可满足 CAE 分析的“干净”几何。

  

池宝涛, 张见明, 鞠传明. 基于T-Spline的全自动几何拓扑修复方法. 自动化学报, 2019, 45(8): 1511-1526.

  

目前, 通用的商业计算机辅助工程 (Computer aided engineering, CAE) 软件计算仿真流程可分为前处理、中间求解计算、后处理三大模块。其中数值模拟的前处理模块主要用于导入专业计算机辅助设计 (Computer aided design, CAD) 软件构建的几何模型的标准数据文件或对已有的 CAE 几何模型进行简单操作或修改、网格生成、施加边界条件及定义物理属性和求解参数等。复杂问题数值模拟难以实现自动化的主要性能瓶颈在于前处理涉及大量的人工交互, 且其效率高低严重依赖于用户经验和知识水平。根据美国 Sandia 国家实验室提供的数据, 在数值模拟过程中, 前处理模块的用时占据了整个数值模拟过程用时的绝大部分, 其中对于 CAD 模型的处理用时占60 %, 网格生成用时占20%, 而真正用于数值计算的时间仅占整个数值模拟过程的4%左右, 因此, 实现前处理的自动化是提高全自动 CAE 分析效率和精度的关键。然而, 由于高质量的网格生成及高效可靠的CAE 分析对几何模型通常有特殊的要求, 而初始输入的几何模型由于其来源的多样化, 在进行 CAD几何模型设计时没有考虑或很难预见到这些特殊的要求, 因此在导入到 CAE 系统后的几何模型通常会引入几何“噪声”。

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_001_775837b3b613.png)

美国 Sandia 国家实验室数值模拟过程用时数据统计

  

CAD 模型的几何“噪声”种类难以尽数, 且其来源及其产生原因多种多样, 主要可归纳为以下几类: 

1)  CAD 模型在几何造型设计制造时存在缺陷。在传统的几何造型设计及产品研发过程中, 几何形状设计与物理分析方法完全分属不同的工程领域, 设计者主要关注 CAD 模型的构建, 而忽视不理想的几何特征对后续物理分析的影响。

2) 不同系统之间的数据传递造成的 CAD 模型几何数据及拓扑信息缺失。在常见的传统商业软件中, CAD 系统与 CAE系统两者相互独立, 两者之间无法进行交互。在进行产品设计或性能分析时, 需要将 CAD 模型导入到CAE 系统中, 在此数据传递过程中会造成原始几何数据及拓扑信息的丢失。

3) 在传统的工程分析计算中, CAE 分析模型的模型描述往往对原始 CAD几何模型进行修改或简化, 无法体现几何设计模型中包含的复杂且精确的几何信息, CAE 分析模型与CAD 几何模型不统一, 且两者之间存在巨大差异, 导致 CAE 分析自动化程度低。

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_002_29f16ac491c3.png)

钢架焊缝模型中常见的几何噪声

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_003_b05fa2f49d66.png)

汽车桥壳模型中常见的几何噪声

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_004_1a8471ca6c40.png)

CAD 模型中常见的非理想几何特征

  

**如何实现CAE与CAD真正的无缝连接，提高CAE技术的自动化水平？**从高质量曲面网格生成的需求出发, 本文提出了一种基于 T-Spline 的全自动几何拓扑修复方法。该方法创新性主要可归纳为: 

1) 对原有CAD 几何模型不进行任何修改保留其本真, 自动识别 CAD 几何模型中常见不必要的几何特征, 成功解决了 CAD 几何模型中存在的几何瑕疵, 如短边、窄面、退化边、退化面、非连续光滑边界及尖锐特征等, 利用新生成的“虚边”、“虚面”处理几何瑕疵, 同时通过虚拓扑重构 CAD 几何模型的 B-Rep; 

2) 开发了一套 CAD/CAE 集成系统, 统一了几何模型与计算分析模型, 实现CAE 与CAD 两者的无缝集成, 所有拓扑修复操作及后续 CAE 分析计算均在同一环境下进行, 避免了几何模型在 CAE 与 CAD 系统间进行转换时造成的数据丢失。实验表明, 在保证不失真的前提下, 该方法能够对复杂实体实现全自动几何拓扑修复及网格生成, 修复后的几何模型能够生成质量良好的网格且能降低网格的生成规模，可以满足工程实际分析的需要。

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_005_b848e154b87f.png)

完整实体 CAE 分析软件界面

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_006_99579eef1972.png)

钢架焊缝模型全自动几何拓扑修复

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_007_acbd893db258.png)

汽车桥壳模型全自动几何拓扑修复

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_008_b729bc7e198b.png)

**作者简介**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_009_3d4875536594.png)

池宝涛, 湖南大学机械与运载工程学院汽车车身先进设计制造国家重点实验室博士研究生。主要研究方向为计算机图形学, CAD/CAE 一体化, 全自动几何拓扑修复, 网格自动化生成。

E-mail: BaotaoChi@ hnu.edu.cn 

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_010_7e0ad2cbb053.png)

张见明, 湖南大学机械与运载工程学院汽车车身先进设计制造国家重点实验室教授。主要研究方向为汽车 CAE 技术, 完整实体 CAE 分析, 计算机图形算法与三维可视化, CAE 软件开发及其在车身设计中的应用, 数值计算方法 (有限元, 边界元, 无网格法, 快速算法, 多尺度分析)。

E-mail: zhangjm@hnu.edu.cn

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_011_928f8ce28c1d.png)

鞠传明, 湖南大学机械与运载工程学院汽车车身先进设计制造国家重点实验室博士研究生。主要研究方向为 CAD/CAE 一体化, 网格自动化生成。

E-mail: cmju@ hnu.edu.cn

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

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_014_92a230d316bc.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_013_b15ff5c959e9.jpg)

JAS《自动化学报》（英文版）

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_016_92a230d316bc.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_015_3135970dc11a.jpg)

自动化学报服务号

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_012_92a230d316bc.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\基于T_Spline的全自动几何拓扑修复方法_images\img_017_786de9abe880.jpg)

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