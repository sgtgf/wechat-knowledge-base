# 中山大学赖剑煌教授等：RGB-D行为识别研究进展及展望

原创 自动化学报 2019-06-05 17:30 北京

> 原文地址: [https://mp.weixin.qq.com/s/LJpB3YMOrirkaaqBACcLog](https://mp.weixin.qq.com/s/LJpB3YMOrirkaaqBACcLog)

RGB-D行为识别是指：通过聚合RGB,深度,和骨架三种模态的数据,分析和理解人体行为。它是计算机视觉与模式识别领域的重要研究课题之一，在安全监控,机器人设计,无人驾驶和智能家庭设计等方面都有着非常重要的应用。

  

胡建芳, 王熊辉, 郑伟诗, 赖剑煌. RGB-D行为识别研究进展及展望. 自动化学报, 2019, 45(5): 829-840.

  

与传统的RGB数据相比,多模态的RGB-D数据可以给行为分析方面的研究带来不少便利.RGB图像数据容易受拍摄环境,光照和行为人衣着纹理等与行为无关的外界因素影响,直接从RGB视频图像中推断行为人的骨架姿势,轮廓信息和一些关键动作信息是件很困难的事情,从而导致很多视频分析和行为动作分析技术在实际生活中没有得到很好的应用.如图所示,在深度视频图像中,因行人与周围的拍摄场景通常具有很高的辨识度,且所获得的深度数据不容受衣着的影响,从中获得行人轮廓骨架信息简单方便准确很多；而RGB视频中的颜色信息能更细致地刻画物体表观纹理特征,这些在处理涉及到人与物体交互的行为时显得特别重要.

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_000_868a819f11cc.png)

RGB

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_001_dc4035885d0a.png)

骨架

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_002_ca49f5fe3c35.png)

深度

  

近几年随着深度学习的兴起,RGB-D行为识别领域有了很大的突破,通过神经网络技术以数据驱动方式自动学习到的特征逐渐代替了HOG,SIFT等手工设计特征,相关大规模行为数据集的出现进一步推动了基于深度学习的识别算法的发展.特别地, 基于循环神经网络(RNN)和卷积神经网络(CNN）的RGB-D行为识别模型在部分行为数据库上已经达到了相当高的识别率.然而仍存在着不少问题有待解决,本文主要从如下三点总结现有RGB-D行为识别方法：

  

首先,在RGB-D行为识别中,深度视频,RGB 视频以及骨架三种特征提取和网络训练都需要耗费大量的时间和计算资源,如何高效的进行多模态特征融合就显的尤为重要，基于多模态的行为识别仍有待进一步研究.

  

其次,实际测试中往往可能会遇到部分模态数据缺失或失效的情况,怎么调整多模态融合学习算法使得其能充分利用获取到的部分模态数据,也是一个重要的需要解决的研究内容.

  

最后,在数据库设计方面,现有的RGB-D 行为数据库都主要记录室内控制场景下的人体行为,行为样本缺少多样性,期待未来有更加复杂的大规模RGB-D行为数据库的出现.

  

**作者简介**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_003_36eea584ba77.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_004_7c143f533077.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_005_a01617ee7750.png)

胡建芳，中山大学副研究员.2016年获中山大学数学系博士学位.主要研究方向为计算机视觉与模式识别,其中包括行为识别,行为意图预测等.目前在国际权威刊物ICCV, CVPR,ECCV, IEEE TPAMI和IEEE TCSVT上发表多篇论文。

E-mail: hujf5@mail.sysu.edu.cn

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_006_b620a81c6a75.png)

王熊辉，中山大学模式识别与智能系统专业在读硕士研究生,2015年获中山大学智能科学与技术学士学位,主要研究方向为图像处理, 计算机视觉与模式识别.

E-mail: wxiongh@mail2.sysu.edu.cn 

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_007_9b1ba2e0c26b.png)

郑伟诗, 中山大学数据科学与计算机学院教授.他主要面向大规模智能视频监控,展开视频图像信息与信号的处理研究,并开展大规模机器学习的算法和理论研究.他目前的主要研究应用领域是:视频监控下的行人身份识别与行为信息理解.他已发表100余篇主要学术论文,其中70余篇发表在图像识别和模式分类领域IEEE TPAMI,IEEE TIP,IEEE TNNLS等国际主流权威期刊和ICCV,CVPR等计算机学会推荐A类国际学术会议.担任PatternRecognition等期刊的编委,担任AVSS2012,ICPR2018,BMVC2018AreaChair 等.获国家优秀青年科学基金,英国皇家学会牛顿高级学者基金等项目支持. 

E-mail: zhwshi@mail.sysu.edu.cn

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_008_60aaef732dca.png)

赖剑煌, 中山大学教授.1999年获中山大学数学系博士学位.主要研究方向为图像处理,计算机视觉,模式识别. 目前在IEEE TPAMI,IEEE TNNLS, IEEE TIP, IEEE TSMC-B, PR, ICCV, CVPR, and ICDM  等国际权威刊物发表论文200多篇.本文通信作者.

E-mail: stsljh@mail.sysu.edu.cn

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

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_009_430b495697c2.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_010_64f7f31f7389.jpg)

JAS《自动化学报》（英文版）

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_011_430b495697c2.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_012_35d881565d10.jpg)

自动化学报服务号

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_013_430b495697c2.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\中山大学赖剑煌教授等_RGB_D行为识别研究进展及展望_images\img_014_e19967ba7b6c.jpg)

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