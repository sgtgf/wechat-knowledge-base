# 一种基于改进AOD-Net的航拍图像去雾算法

原创 自动化学报 自动化学报 2022-05-31 15:40 北京

> 原文地址: [https://mp.weixin.qq.com/s/Z-rBKAEY5wwjpRHYDrBpiQ](https://mp.weixin.qq.com/s/Z-rBKAEY5wwjpRHYDrBpiQ)

**点击蓝字 关注我们**

✦

✦

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmWyA9CGagkt4KupwkibibvRacicQ6ic3bW1Oyn0FGEBD4DtAze35UstcTvg/640?wx_fmt=png)

  

**引用本文**

✦

✦

✦

✦

  

李永福, 崔恒奇, 朱浩, 张开碧. 一种基于改进AOD-Net的航拍图像去雾算法. 自动化学报, 2022, 48(6): 1543−1559 doi: 10.16383/j.aas.c210232

Li Yong-Fu, Cui Heng-Qi, Zhu Hao, Zhang Kai-Bi. A defogging algorithm for aerial image with improved AOD-Net. Acta Automatica Sinica, 2022, 48(6): 1543−1559 doi: 10.16383/j.aas.c210232

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210232?viewType=HTML

  

**文章简介**

✦

✦

✦

✦

  

✦

**关键词**

✦

  

航拍图像去雾, AOD-Net算法, 多尺度网络结构, 复合损失函数, 分段式训练

  

  

✦

**摘   要**

✦

  

针对航拍图像易受雾气影响, AOD-Net (All in one dehazing network)算法对图像去雾后容易出现细节模糊、对比度过高和图像偏暗等问题, 本文提出了一种基于改进AOD-Net的航拍图像去雾算法. 本文主要从网络结构、损失函数、训练方式三个方面对AOD-Net进行改良. 首先在AOD-Net的第二个特征融合层上添加了第一层的特征图, 用全逐点卷积替换了传统卷积方式, 并用多尺度结构提升了网络对细节的处理能力. 然后用包含有图像重构损失函数、SSIM (Structural similarity)损失函数以及TV (Total variation)损失函数的复合损失函数优化去雾图的对比度、亮度以及色彩饱和度. 最后采用分段式的训练方式进一步提升了去雾图的质量. 实验结果表明, 经该算法去雾后的图像拥有令人满意的去雾结果, 图像的饱和度和对比度相较于AOD-Net更自然. 与其它对比算法相比, 该算法在合成图像实验、真实航拍图像实验以及算法耗时测试的综合表现上更好, 更适用于航拍图像实时去雾.

  

✦

**引   言**

✦

  

随着无人机航拍技术的日益成熟, 无人机航拍技术逐渐被频繁地应用于复杂环境地图测绘, 辅助驾驶以及道路监控等领域. 然而, 由于航拍无人机与拍摄对象的距离通常较远, 因此航拍图像更容易受雾霾环境的影响. 在雾霾环境中, 地面拍摄的普通图像中近景受到雾霾的影响较小, 而航拍图像整体都会包含浓度较高的雾霾, 这极大地影响了航拍图像的成像质量. 此外, 航拍图像的比例尺较大, 这要求航拍图像具有极高的成像质量从而保证拍摄对象清晰可见, 而雾霾环境中采集的航拍图像的信息量会严重下降, 其实用价值也会大打折扣. 因此, 为了降低雾霾环境对航拍图像的影响, 需要对无人机采集的有雾航拍图像进行去雾处理, 同时需要增强去雾图的视觉效果, 强化图像中的特征信息以便于后续高级计算机视觉系统进行二次处理.

  

图像去雾算法可以分为基于传统数字图像处理与物理模型结合的方法和基于深度学习设计的去雾网络模型的方法. 基于传统数字图像处理与物理模型结合的方法一般以大气散射物理模型为基础, 在此基础上针对大气光值与透射矩阵设计求解算法以期获取准确的数值. 其中具有代表性的算法有如下三种：He等人提出了基于暗通道先验(Dark channel prior, DCP)的去雾方法, 该方法通过寻找图像中的暗通道图像来求解透射矩阵, 再结合估计的大气光值来消除图像中的雾气. Berman等人利用了一种边界约束和正则化(Boundary constraint and contextual regularization, BCCR)的方式来配合大气散射模型对图像进行去雾. Zhu的团队利用颜色衰减先验假设(Color attenuation prior, CAP)来获取透射图, 再结合大气散射模型进行图像去雾.

  

随着深度学习在图像领域的发展, 许多学者尝试通过设计合适的去雾神经网络来进行图像去雾. 基于深度学习设计的图像去雾模型能够被进一步细分为基于大气散射模型的间接参数求解型网络模型和直接图像生成型网络模型. 其中,基于大气散射模型的间接参数求解型网络模型一般是通过对大气光值或者传输矩阵进行网络设计, 通过构建高效的特征提取网络结构来准确获取二者的数值, 然后进而通过大气散射物理模型生成无雾图像. 其中近年来具有代表性的算法有: Cai等人提出了一种可以端到端进行训练的卷积神经网络模型DehazeNet, 该网络可以学习有雾图像于介质传输图之间的映射关系, 但是仅仅四层的单尺度直线型卷积网络的特征提取能力非常有限, 很容易造成传输图的估计出现错误. Ren等人提出了一种多尺度卷积神经网络(Multi-Scale Convolutional Neural Network, MSCNN)用于去雾, 该网络使用精细介质传输网络对粗糙介质传输网络进行传输特征的细化, 有效提升了去雾图的细节特征, 然而庞大的网络结构使得该网络并不能短时高效地去雾, 需要依赖强大的图形化硬件设备. Li等人提出了AOD-Net去雾算法, 该方法简化了去雾模型, 通过对大气散射模型进行变形使大气光值以及大气透射率合并为一个参数变量, 并设计了一种简单高效的特征融合型卷积神经网络来有效获取该变量的值. 但是该算法处理真实雾图的时候非常容易使图像的色调丢失并且损失较多色值. 而直接图像生成型去雾网络模型与间接参数求解型网络模型不同, 该网络能够直接学习到有雾图像与清晰图像之间的映射关系, 将这种关系以权重文件的形式保存起来, 每张图像在经过加载了该权重文件的神经网络后能够直接生成清晰图像, 无需依赖大气散射模型. 例如, Ren等人设计了一种门控融合网络(Gated Fusion Network, GFN), 该网络通过融合白平衡派生图、对比度增强派生图以及伽马增强派生图直接端到端生成无雾图像. Chen等人设计了一种门控聚合网络(Gated context aggregation network, GCANet), 该网络通过编码-解码的网络结构学习到原图和有雾图之间的残差, 通过将雾气的特征残差附加在雾图上即可获得去雾图像, 恢复的图像会出现区域色调失衡以及图像饱和度过低的现象. Qin等人设计了一种端到端的特征融合注意网络(Feature fusion attention network, FFANet)来获取雾气的残差特征, 去雾后的图像通常会出现颜色失真和对比度下降的问题. 虽然端到端图像生成型网络可以不依赖大气散射模型, 但是对雾气分布不均匀的图像进行去雾时非常容易出现去雾不彻底的问题, 并且容易出现大量的噪点.

  

由于AOD-Net的网络结构非常轻巧, 算法耗时极短, 因此该算法非常适用于无人机航拍图像实时去雾. 本文重点针对AOD-Net去雾图的细节信息丢失严重, 去雾图的对比度过强以及去雾图噪音过多的问题, 提出一种基于AOD-Net的多尺度航拍图像去雾算法. 本文的主要创新点如下：

  

1) 本文在AOD-Net的基础上学习FPC-Net对网络层的优化方式对AOD-Net的网络层进行了改良, 并将改良的AOD-Net嵌入到多尺度结构中. 改良后的网络结构能够有效提升神经网络对图像细节部分的处理能力, 并且能有效削减远景部分的雾气.

  

2) 与以往一些文献中仅仅关注图像重构的像素差异而设计的损失函数不同, 本文设计的损失函数在训练网络时不仅监视了生成图与标准清晰图之间的结构差异, 还关注了生成图的视觉主观感受以及图像的平滑度.

  

3) 与以往研究中采用唯一损失函数训练模型的方式不同, 本文训练所提网络模型时采用了分段训练的方法, 这种通过优化训练方式来提升网络的去雾性能的方式能够有效保留网络的模型复杂度, 并且能够极大程度地保证算法的实时性.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmbUC8aBOWaxtYmmxswrvcpljF0Ly3ibSRRea7y1Ga1AzOO2qO6Pziaibmw/640?wx_fmt=jpeg)

图 1  AOD-Net的网络结构

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmuxg3gOQmQqE1YJoIuia7GicmI19r4T68KuMRjia2F8chN4UZ8uiciaF4n5Q/640?wx_fmt=jpeg)

图 2  本文所提的网络结构

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmLg6GEdAQHj83eDsNib03PqezIWd8E3k1licRic2KicNA1tedVaZ2lwx6GQ/640?wx_fmt=jpeg)

图 10  不同去雾算法在真实航拍有雾图像上的客观评价结果 ((a) BIQME; (b) FADE; (c) VI;(d) RI; (e) CB; (f) VIF; (g) GB; (h) Entropy)

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

✦

✦

✦

✦

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmXL816y1Yp1BChhtjF0JzfYvkVebvzAsFl2WocMwXxuoZ9o71FfjaCw/640?wx_fmt=png)

**李永福**

博士, 重庆邮电大学自动化学院教授. 主要研究方向为智能网联汽车, 空地协同控制. 本文通信作者. 

E-mail: liyongfu@cqupt.deu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmKXXWmrKJlbmEDn8TsWtyUJreBNiaiaWV1I65LW3OzntDHOxWcPicCpMVg/640?wx_fmt=png)

**崔恒奇**

重庆邮电大学硕士研究生, 主要研究方向为航拍图像处理.

E-mail: cuihengqi2020@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmWyicMVMFuiclCYsc1tofibNfD5b6oZDwNicss3pD2VozkvZQLjzwXI98BQ/640?wx_fmt=png)

**朱   浩**

博士, 重庆邮电大学自动化学院教授. 主要研究方向为智能车环境感知与信息融合.

E-mail: zhuhao@cqupt.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmj7ncRZLSrIjvp8QhoyBfCQeicT1icuBcMnFNCudWdR04bsHsc8Ps5FmQ/640?wx_fmt=png)

**张开碧**

硕士, 重庆邮电大学自动化学院副教授. 主要研究方向为计算机应用与图像处理.

E-mail: zhangkb@cqupt.edu.cn

  

**相关文章**

✦

✦

✦

✦

  

**（请向上滑动阅读）**

  

\[1\]  周洁容, 李海洋, 凌军, 陈浩, 彭济根. 基于非凸复合函数的稀疏信号恢复算法. 自动化学报. doi: 10.16383/j.aas.c200666

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200666?viewType=HTML

  

\[2\]  孙超文, 陈晓. 基于多尺度特征融合反投影网络的图像超分辨率重建. 自动化学报, 2021, 47(7): 1689-1700. doi: 10.16383/j.aas.c200714

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200714?viewType=HTML

  

\[3\]  杨爱萍, 李晓晓, 张腾飞, 王朝臣, 王建. 基于误差回传机制的多尺度去雾网络. 自动化学报. doi: 10.16383/j.aas.c210264

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210264?viewType=HTML

  

\[4\]  陈清江, 张雪. 基于并联卷积神经网络的图像去雾. 自动化学报, 2021, 47(7): 1739-1748. doi: 10.16383/j.aas.c190156

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190156?viewType=HTML

  

\[5\]  乔俊飞, 丁海旭, 李文静. 基于WTFMC算法的递归模糊神经网络结构设计. 自动化学报, 2020, 46(11): 2367-2378. doi: 10.16383/j.aas.c180847

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180847?viewType=HTML

  

\[6\]  王海羽, 刘浩然, 张力悦, 张春兰, 刘彬. 基于节点块序列约束的局部贝叶斯网络结构搜索算法. 自动化学报, 2020, 46(6): 1210-1219. doi: 10.16383/j.aas.c180108

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180108?viewType=HTML

  

\[7\]  杨爱萍, 刘瑾, 邢金娜, 李晓晓, 何宇清. 基于内容特征和风格特征融合的单幅图像去雾网络. 自动化学报. doi: 10.16383/j.aas.c200217

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200217?viewType=HTML

  

\[8\]  练秋生, 富利鹏, 陈书贞, 石保顺. 基于多尺度残差网络的压缩感知重构算法. 自动化学报, 2019, 45(11): 2082-2091. doi: 10.16383/j.aas.c170546

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c170546?viewType=HTML

  

\[9\]  杨燕, 陈高科, 周杰. 基于高斯权重衰减的迭代优化去雾算法. 自动化学报, 2019, 45(4): 819-828. doi: 10.16383/j.aas.c170369

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c170369?viewType=HTML

  

\[10\]  韩敏, 闫阔, 秦国帅. 基于改进KAZE的无人机航拍图像拼接算法. 自动化学报, 2019, 45(2): 305-314. doi: 10.16383/j.aas.2018.c170521

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170521?viewType=HTML

  

\[11\]  陈书贞, 任占广, 练秋生. 基于改进暗通道和导向滤波的单幅图像去雾算法. 自动化学报, 2016, 42(3): 455-465. doi: 10.16383/j.aas.2016.c150212

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150212?viewType=HTML

  

\[12\]  南栋, 毕笃彦, 马时平, 凡遵林, 何林远. 基于分类学习的去雾后图像质量评价算法. 自动化学报, 2016, 42(2): 270-278. doi: 10.16383/j.aas.2016.c140854

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c140854?viewType=HTML

  

\[13\]  鞠铭烨, 张登银, 纪应天. 基于雾气浓度估计的图像去雾算法. 自动化学报, 2016, 42(9): 1367-1379. doi: 10.16383/j.aas.2016.c150525

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150525?viewType=HTML

  

\[14\]  吴迪, 朱青松. 图像去雾的最新研究进展. 自动化学报, 2015, 41(2): 221-239. doi: 10.16383/j.aas.2015.c131137

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2015.c131137?viewType=HTML

  

\[15\]  潘宗序, 禹晶, 肖创柏, 孙卫东. 基于多尺度非局部约束的单幅图像超分辨率算法. 自动化学报, 2014, 40(10): 2233-2244. doi: 10.3724/SP.J.1004.2014.02233

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02233?viewType=HTML

  

\[16\]  张小刚, 唐美玲, 陈华, 汤红忠. 一种结合双区域滤波和图像融合的单幅图像去雾算法. 自动化学报, 2014, 40(8): 1733-1739. doi: 10.3724/SP.J.1004.2014.01733

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01733?viewType=HTML

  

\[17\]  潘宗序, 禹晶, 胡少兴, 孙卫东. 基于多尺度结构自相似性的单幅图像超分辨率算法. 自动化学报, 2014, 40(4): 594-603. doi: 10.3724/SP.J.1004.2014.00594

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.00594?viewType=HTML

  

\[18\]  郭璠, 蔡自兴. 图像去雾算法清晰化效果客观评价方法. 自动化学报, 2012, 38(9): 1410-1419. doi: 10.3724/SP.J.1004.2012.01410

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2012.01410?viewType=HTML

  

\[19\]  王春桃, 倪江群, 卓华硕, 黄继武. 基于可变形多尺度变换的几何不变鲁棒图像水印算法. 自动化学报, 2011, 37(11): 1368-1380. doi: 10.3724/SP.J.1004.2011.01368

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.01368?viewType=HTML

  

\[20\]  禹晶, 李大鹏, 廖庆敏. 基于物理模型的快速单幅图像去雾方法. 自动化学报, 2011, 37(2): 143-149. doi: 10.3724/SP.J.1004.2011.00143

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2011.00143?viewType=HTML

  

  

**近期文章**

✦

✦

✦

✦

[一种针对德州扑克AI的对手建模与策略集成框架【视频】](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651078084&idx=1&sn=66f75170f77cdae1de9f7957ab6211be&chksm=8131f789b6467e9ff292811301f7aa59da264c1ebe9d3e805181b338cd4a41fe839759bf9d7b&scene=21#wechat_redirect)

[量子线性卷积及其在图像处理中的应用](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651078077&idx=1&sn=0f8e5cc62e1a4648057f27b196fb3de5&chksm=8131f7f0b6467ee681a9542faea153769e16a0ff1a0f59b513f32a8f3ca3f360b045ca89615d&scene=21#wechat_redirect)

[基于非线性干扰观测器的飞机全电刹车系统滑模控制设计](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651078038&idx=1&sn=e5b2617763076b22acf9042cd66265c6&chksm=8131f7dbb6467ecd0c2f64516f6ec7bf689fa3108d330d2f7c99144380c33c5a21dcf835f48c&scene=21#wechat_redirect)

[基于多源数据的电网一次调频能力平行计算研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651078038&idx=2&sn=045ef6ad8cbe1556d93b98b8d89b3c5f&chksm=8131f7dbb6467ecd07a70dd79508b11ee9328f05b029eccc17bf47bf9ae9ac8be75d3f0988e3&scene=21#wechat_redirect)

[作者识别研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077968&idx=1&sn=707a66d03d8fac053431dd0efb42ba5f&chksm=8131f71db6467e0b021bdcd1807f03d5cb334157f63461fedcc1bddf23947af1ca995f1987f3&scene=21#wechat_redirect)

[基于FPSO的电力巡检机器人的广义二型模糊逻辑控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077968&idx=2&sn=8f03d20c1eb55d908b0d625b5aee029f&chksm=8131f71db6467e0b9c1a043856fd0cd82d69fd878c95c2afe8fb14cda9ec4d2e06fa1cc4dd6c&scene=21#wechat_redirect)

[污水处理过程出水水质稀疏鲁棒建模](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077888&idx=1&sn=00ac4a402538e7d00e1e7728d3b91449&chksm=8131f74db6467e5bdc3b24d484092e79541739d5093d0913e2f430a0410d3305c80baf1059f7&scene=21#wechat_redirect)

[一类p规范型非线性系统预设性能有限时间H∞跟踪控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077888&idx=2&sn=86079f3d558330183997baa3fb6e40d8&chksm=8131f74db6467e5b532977ab27c179528aeebfe2c5956ae2ab2d3a291af9661c8b87f9dc2a1e&scene=21#wechat_redirect)

[基于自注意力模态融合网络的跨模态行人再识别方法研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077831&idx=1&sn=6a76db27f4c8f0f1b96e5b8c6771abeb&chksm=8131f68ab6467f9cd2a0f82cc7756e0501991992475ef16d1eadb77b3fb27ff72ec26342d4ae&scene=21#wechat_redirect)

[基于多相关HMT模型的DT CWT域数字水印算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077831&idx=2&sn=2c167c0a7155779ce961509e8dbedc79&chksm=8131f68ab6467f9cedcba9c6fce9d8d2fd00a89ec6f06c26b258aec8e9d98086ebd5d4d4ab14&scene=21#wechat_redirect)

[基于多阶运动参量的四旋翼无人机识别方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=1&sn=587115a6ffee6f33a5113a392bafd18e&chksm=8131f6cab6467fdc113dfc124638e9f0c73bfc2cc606025b4bc5c630bd6c5569b8948c3a2bad&scene=21#wechat_redirect)

[通信延时环境下异质网联车辆队列非线性纵向控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=2&sn=d497bd4b45545cdc7584e9c9568ef4e0&chksm=8131f6cab6467fdc01f675bd4ea8b4823af1ff46862041b55d3b58ce8903265b6efd60bbc281&scene=21#wechat_redirect)

[图像异常检测研究现状综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=1&sn=2535d4c0961f79a4e6e28fcec08d2fed&chksm=8131f675b6467f63e42dec407492be9cccdbf245e71dd2cd84b1d4af8072250b8b9f0f01329c&scene=21#wechat_redirect)

[一种面向散乱点云语义分割的深度残差−特征金字塔网络框架](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=2&sn=215768980627e71df84a39bb85729db9&chksm=8131f675b6467f63c4393a4fce391e67237c29928058a3e2dfd5971800e636c3baa090fb4dba&scene=21#wechat_redirect)

[迭代学习模型预测控制研究现状与挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077623&idx=1&sn=1d8a9d2a39cab773fd8b49e8e73c55fd&chksm=8131f1bab64678ac33f4512961aa95fe90d40e9dbd6c4e13cad77295f4940b6aef050700caac&scene=21#wechat_redirect)

[《自动化学报》2022年48卷5期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077579&idx=1&sn=d2cf8dfd19e4104f5958b4ad6356239d&chksm=8131f186b6467890faae7fb5e1bdb23ca54b21a631ce9c32c47dc615ff926149628b9bf9b64b&scene=21#wechat_redirect)

[基于多节点拓扑重叠测度高阶MRF模型的图像分割](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077552&idx=1&sn=c40ec0d4fa5686c5221844003ead45de&chksm=8131f1fdb64678eb229154ac8f5cf5166c6a0bac57e1f50b65d7eba7e99778e2f7d80fb7547b&scene=21#wechat_redirect)

  

**热点文章**

✦

✦

✦

✦

[通信延时环境下异质网联车辆队列非线性纵向控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=2&sn=d497bd4b45545cdc7584e9c9568ef4e0&chksm=8131f6cab6467fdc01f675bd4ea8b4823af1ff46862041b55d3b58ce8903265b6efd60bbc281&scene=21#wechat_redirect)

[图像异常检测研究现状综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=1&sn=2535d4c0961f79a4e6e28fcec08d2fed&chksm=8131f675b6467f63e42dec407492be9cccdbf245e71dd2cd84b1d4af8072250b8b9f0f01329c&scene=21#wechat_redirect)

[迭代学习模型预测控制研究现状与挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077623&idx=1&sn=1d8a9d2a39cab773fd8b49e8e73c55fd&chksm=8131f1bab64678ac33f4512961aa95fe90d40e9dbd6c4e13cad77295f4940b6aef050700caac&scene=21#wechat_redirect)

[2022年第05期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077579&idx=1&sn=d2cf8dfd19e4104f5958b4ad6356239d&chksm=8131f186b6467890faae7fb5e1bdb23ca54b21a631ce9c32c47dc615ff926149628b9bf9b64b&scene=21#wechat_redirect)

[基于凸近似的避障原理及无人驾驶车辆路径规划模型预测算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077442&idx=1&sn=432dd266dbf5c99ca845248bb09df5c1&chksm=8131f10fb646781977984ae605369c8004b7c57f61747a28c49813698802554d4a11047abea0&scene=21#wechat_redirect)

[通信受限的多智能体系统二分实用一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=1&sn=02d81030a428cbb4275f4ff076068f08&chksm=8131f084b646799235c36b924d470f26f4e4da762c08d57e951613e4f74a57febdc8c03777c9&scene=21#wechat_redirect)

[【热点专题】多目标优化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962438&idx=1&sn=83b21f7b6a63fc4e01c2f4718b2aae92&chksm=f2943387c5e3ba91ce32286c06f215a989233f55bbbd5c7d436a43c40615bb5ae208d0f0f228&scene=21#wechat_redirect)

[一种基于深度迁移学习的滚动轴承早期故障在线检测方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076931&idx=2&sn=128b1673843353529d8b130f372bb46f&chksm=8131f30eb6467a18e0f645b207ada16cd601b791297b32b1caccf72daa50b55063074ec4fdc3&scene=21#wechat_redirect)

[基于多智能体强化学习的乳腺癌致病基因预测](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076931&idx=1&sn=a62942cd056156ad5a885d6350e8b373&chksm=8131f30eb6467a18ffbee77b25fb9b0417b08918d3625d04c89a3a9bcb1490eece239c5fda25&scene=21#wechat_redirect)

[基于事件触发的离散MIMO系统自适应评判容错控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076863&idx=1&sn=aec9cf55a1b0b8eae741999601a8c6df&chksm=8131f2b2b6467ba4c20d388390d4ac191555e5d00d77f510f72af77359d18bdca5230ea52df0&scene=21#wechat_redirect)

[水下多机器人系统综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076668&idx=1&sn=b50e43710be8208fd711cd45943e95c0&chksm=8131f271b6467b675083610c925ce0d329e201ddab5c8e935eb266fbf41418395459fdd0618d&scene=21#wechat_redirect)

[基于事件触发二阶多智能体系统的固定时间比例一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=2&sn=fcf40a44a926c9034593207d6a614e95&chksm=8131f250b6467b46e70d4ef5f10226fbed60a0d12e327f83c793d86e7815ff00e4fcafcac295&scene=21#wechat_redirect)

[基于事件触发的分布式优化算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076142&idx=2&sn=b074793ec4be44ea08efb78617dcdcc0&chksm=8131fc63b6467575b7f6d698909e56be16089f8f56ca415294483ff6f40902c7546417f82531&scene=21#wechat_redirect)

  

**期刊动态**

✦

✦

✦

✦

[《自动化学报》多名作者入选爱思唯尔2021中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=1&sn=ee78f108cf0551024cb95c33241a5f1d&chksm=8131f250b6467b46c8d4af1bd63381328a80c65ade97a6daa97e3bb4538b39c6f761da238066&scene=21#wechat_redirect)

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

  

**期刊目录**

✦

✦

✦

✦

[2022年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962842&idx=1&sn=b91e3ab1206e29fdb9287ebbf7b07638&chksm=f2943d1bc5e3b40d9447d720203aca6ca2ae6662b85e3d9d5768c2da45df90cc31e49f895255&scene=21#wechat_redirect)

[2022年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962369&idx=1&sn=ae2c4584f8904be917b600e67005ae03&chksm=f29433c0c5e3bad6d78382b3c09015aadb09e040b8fc8c319c4f554fd592fe677797000340cd&scene=21#wechat_redirect)

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmR5mOOYurKSN6KgKIy4YEqxl4LqQmrbXGCtmMe4ic1Me5ButcTdaxx9w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBm9AOko7z2cTmSh0J1bppp1H5P4XUXHsBgLmTQJ3IQ3dmllNVJArzvEQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmw1zCvvEORuFd9qOt7SgjaWM2fdZUoApgGjpWTUAwRlfRQPKFMCtANA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmibTxXiaUiaUupaurj69OrI9qBzstUNdQAe7ORUXMDoeSzGic6viaYicwUV3g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmKdMPTnxMm4gvtXMBDOBVtUiaWgiaQ3HTWrxXxWLPBDWibFQI0MwpfjbqQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44ia39rhGcp5fRqXbBUAnQBmoRZMyRuw8NbF6ZOvweUWqQGTibGZnjZLuCaJqG4Ay5y9VUIViaR4wKog/640?wx_fmt=gif)

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

  

**↓ 点击下方 阅读原文 了解更多**