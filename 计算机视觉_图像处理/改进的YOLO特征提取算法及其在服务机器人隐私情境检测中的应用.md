# 改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用

原创 自动化学报 2019-01-15 09:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/nUNSVeVkpNrC3W8DoOd\_9w](https://mp.weixin.qq.com/s/nUNSVeVkpNrC3W8DoOd_9w)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_000_70ac88077611.png)

论文提出了改进的YOLO特征提取算法(FYOLO)，并将其应用到服务机器人隐私情境检测中，所提出的算法隐私情境检测准确率均值为94.48%，单张图片的识别时间分布在\[1.62ms~3.32ms\]，本文的研究成果将提高YOLO对小目标的识别能力，减小在特征提取过程信息丢失的问题；同时，将为人类研究服务机器人隐私保护提供理论借鉴和应用参考。

  

杨观赐, 杨静, 苏志东, 陈占杰. 改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用. 自动化学报, 2018, 44(12): 2238-2249

  

本文主要贡献如下：

**1）提高对YOLO对小目标的识别能力。**主要思想：设计一种改进的神经网络结构, 包含一个全连接层以及先池化再卷积的特征提取模式以减少特征信息的丢失.  

**2）减小了特征提取过程中信息丢失的问题。**主要思想：借鉴 R-FCN 方法采用一个全连接层以减少特征信息的丢失; 在输入图像后, 借鉴 RPN 方法设置了一个 2 × 2 的最大池化层以缩小图片尺寸的同时尽可能多的保存原始图片信息

**3）为从源头上解决服务机器人隐私保护提供了思路。**给出服务机器人情境检测的总体工作流程。设计家居环境下的六类情境, 建立训练数据集、验证数据集和4类测试数据集。

  

算法步骤：

基于上述分析，本文首先将目标检测方法DPM与R-FCN融入到YOLO网络中，设计了一种改进的神经网络结构，构建了小目标的识别机制；设计了基于RPN的滑动窗口合并算法，形成了基于改进YOLO的特征提取算法。主要步骤如下：

1）改进了YOLO网络结构，节约网络计算时间开销，减少过拟合现象。

2）为了检测情境中是否存在目标对象，提出了基于RPN的滑动窗口合并算法。

3）为了获得更加丰富的特征，提出了改进的YOLO特征提取算法。

4）建立了具有2580张图片的训练数据集、具有360张图片的验证数据集和4类涉及隐私内容的960个样本组成的测试数据集。

5）搭建的服务机器人情境检测平台，并给出了情境检测系统的总体工作流程，验证了算法的有效性和鲁棒性。

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_001_eca1c7c9abde.jpg)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_002_34743bd766cd.jpg)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_003_416b33b0cdb6.jpg)

  

为了验证本文算法的有效性，在所搭建的服务机器人平台上，对所采集的数据进行应用验证。针对测试数据集中的四类数据进行测试，系统情境识别准确率、类别估计值及时间开销统计结果分别是表1与表2，预测概率估计值统计盒图见图1。为了验证本文算法的优越性，与原YOLO算法进行对比，实验结果表明，本文算法的情境识别准确率、类别估计值及时间开销都要优于原YOLO算法，且单张图片的识别时间分布在\[1.62ms~3.32ms\]。

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_004_274abc330932.jpg)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_005_8a9b74f096f5.jpg)

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_006_4ffec2f3a4f0.jpg)

图1  预测概率估计值统计盒图

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_007_cbdfacbf11cb.png)

作者简介

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_008_83a245090c54.jpg)

杨观赐, 贵州大学现代制造技术教育部重点实验室教授.主要研究方向为智能与自主机器人，计算智能与智能系统。

E-mail: guanci\_yang@163.com.

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_009_14101e434a11.jpg)

杨静,贵州大学机现代制造技术教育部重点实验室硕士研究生.主要研究方向为智能视觉计算,智能与自主服务机器人.本文通讯作者.

E-mail: yang\_jing0903@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_010_d2f3fd9cbfb2.jpg)

苏志东，贵州大学现代制造技术教育部重点实验室硕士研究生.主要研究方向为自然语言处理,智能与自主服务机器人.

E-mail: suzhidong2016@163.com

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_011_4a7d4bf86172.jpg)

陈占杰，贵州大学现代制造技术教育部重点实验室硕士研究生.主要研究方向为机器人自动建图与导航技术,智能与自主服务机器人。

E-mail: chenzhanjie0320@163.com

  

自动化

学报

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

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_012_95628a614967.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_013_b4029494c79f.jpg)

JAS《自动化学报》（英文版）

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_014_95628a614967.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_015_d846b72b04fd.jpg)

自动化学报服务号

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_016_95628a614967.png)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\改进的YOLO特征提取算法及其在服务机器人隐私情境检测中的应用_images\img_017_cb3ee2e00f41.jpg)

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