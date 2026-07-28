# 基于改进YOLO的双网络桥梁表观病害快速检测算法

原创 自动化学报 自动化学报 2022-04-07 16:05 北京

> 原文地址: [https://mp.weixin.qq.com/s/xLKH0mD7FgItNSlBUiNOCw](https://mp.weixin.qq.com/s/xLKH0mD7FgItNSlBUiNOCw)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeE5HicTsXFyXY98yorqLgQS7tv2YJ3VSmEzhE5H9vZwgNykTnKv3oXLeg/640?wx_fmt=gif)

**点击蓝字 关注我们**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeE5HicTsXFyXY98yorqLgQS7tv2YJ3VSmEzhE5H9vZwgNykTnKv3oXLeg/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEZVpIOHeia8EicxWOBuQwaMHzuKxDz3hiaBNMfOjwGibomRcJAI6V04jicDw/640?wx_fmt=jpeg)

  

**引****用本文**

  

彭雨诺, 刘敏, 万智, 蒋文博, 何文轩, 王耀南. 基于改进YOLO的双网络桥梁表观病害快速检测算法. 自动化学报, 2022, 48(4): 1032−1047 doi: 10.16383/j.aas.c210807

Peng Yu-Nuo, Liu Min, Wan Zhi, Jiang Wen-Bo, He Wen-Xuan, Wang Yao-Nan. A dual deep network based on the improved YOLO for fast bridge surface defect detection. Acta Automatica Sinica, 2022, 48(4): 1032−1047 doi: 10.16383/j.aas.c210807

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210807?viewType=HTML

  

**文章简介**

  

**关键词**

  

桥梁表观病害检测, 深度卷积神经网络, 空间金字塔模块, 注意力机制

  

**摘   要**

  

桥梁表观病害检测是确保桥梁安全的关键步骤. 然而, 桥梁表观病害类型多样, 常见病害有蜂窝、漏筋、孔洞和裂缝等. 在实际应用中, 不同病害间外观差异显著且病害之间可能发生重叠, 现有算法无法实现快速且准确的桥梁多病害检测. 针对这一问题, 对YOLO (You only look once)进行了改进, 提出了YOLO-lump和YOLO-crack以提高网络检测多病害的能力, 进而形成基于双网络的桥梁表观病害快速检测算法. 一方面, YOLO-lump在较大的滑动窗口图像上实现块状病害(包括蜂窝、漏筋和孔洞病害)的检测. 在YOLO-lump中, 提出了混合空洞金字塔模块, 其结合了混合空洞卷积与空间金字塔池化, 用于提取稀疏表达的多尺度特征, 同时可以避免空洞卷积造成的局部信息丢失; 另一方面, YOLO-crack在较小的滑动窗口图像上实现裂缝病害的检测. 在YOLO-crack中, 提出了下采样注意力模块, 利用1×1卷积和3×3分组卷积分别解耦特征的通道相关性和空间相关性, 可以增强裂缝在下采样阶段的前景响应, 减少空间信息的损失. 实验结果表明, 该算法能够提高桥梁表观病害检测的精度, 同时可实现病害的实时检测, 检测一张高分辨率图像(5120×5120像素)仅花费0.995秒. 此外, 建立了一个桥梁表观图像数据库, 共包含169621张高分辨率图像.

  

**引   言**

  

我国桥梁数量位居世界首位, 大量的桥梁改善了交通状况, 同时, 为保障桥梁的安全运营, 需要对桥梁进行定期的检查和养护. 桥梁在建造以及使用的过程中, 受到施工材料、建筑工艺、极端天气、车辆超载等因素的影响, 不可避免地出现结构性或非结构性的损伤, 进而形成蜂窝、漏筋、孔洞、裂缝等表观病害. 若是能够及时地对桥梁进行检查并修复损伤, 将大大减少桥梁的维护成本, 延长桥梁的使用寿命. 到目前为止, 桥梁健康状况的评估大多仍是由人工目视进行, 工人在升降装置的协助下, 到达桥梁各个位置对病害进行测量和统计. 然而, 这种传统方法检测效率低下且结果受到工人主观经验的影响, 因此, 实现桥梁表观病害的自动化检测具有重要意义.

  

随着人工智能技术的发展, 近年来越来越多的机器人被用于桥梁的自动化检查中, 文献\[3-4\]利用无人机获取桥梁和钢索的高清图像并进行病害的检测, 文献\[5\]使用移动机器人对桥梁进行检查, 在文献\[6\]开发了一种水下机器人对桥墩的水下部分进行检测. 由湖南桥康智能科技有限公司研发的轻量化桥梁智能检测机器人BIR-X-LITE, 可海量地采集桥梁底部的高分辨率表观图像数据. 为了高效且准确地评估桥梁健康状况，需要利用桥梁表观病害检测算法对图像进行快速有效的分析. 过去许多传统病害检测算法中, 边缘检测器\[7\]和阈值检测方法被用于裂缝检测. 文献\[10\] 利用基于局部熵的阈值算法检测桥梁蜂窝病害. 如果病害具有高对比度以及良好的连续性, 传统算法可实现高精度的检测. 但在实际应用中, 受到光照强度变化、噪声、背景干扰等因素的影响, 部分病害图像特征不明显, 从而导致传统算法无法实现准确地病害检测.

  

近年来, 深度学习在计算机视觉等领域表现出了良好的性能, 利用该技术在复杂条件下对桥梁表观病害图像进行检测已成为现实. 在文献\[15\]利用卷积神经网络(Convolutional neural networks, CNN)对16×16像素的图像进行分类, 来判断该图像中是否存在裂缝病害. 而Kim等将区域卷积神经网络(Region-CNN, R-CNN)与形态学后处理相结合, 以检测和分割桥梁裂缝病害. 但是大部分深度学习方法只针对一种类型的病害进行检测, 不能对桥梁的健康状况进行全面地评估.

  

随着多尺度检测网络的发展, 桥梁多病害检测算法被相继提出. Zhang等利用YOLO (You only look once)网络实现了对桥梁裂缝、剥落、蜂窝和漏筋4种病害的检测. 该方法在YOLOv3的基础上, 引入了迁移学习方法和批量正则化等方法. Li等基于Dense-net网络和迁移学习方法, 提出了新的全卷积神经网络(Fully convolutional networks, FCN), 对裂缝、蜂窝、风化和孔洞4种病害进行检测和分割. 然而, 在上述网络训练所使用的数据集中, 各类病害从不相等的距离被拍摄, 从而缩小了不同病害间的大小差异.

  

在实际应用中, 如Yang等、Mundt等和Hüthwohla等指出, 不同类型的病害外观差异显著, 且病害之间可能发生重叠, 利用单个网络完成所有桥梁表观病害的检测或分类是一个巨大的挑战. 针对上述问题, 文献\[19\]通过引入距离加权系数对蜂窝和裂缝病害图像进行缩放对齐; 文献\[20\]在224×224像素步长的滑动窗口上对桥梁多病害进行分类, 但可能导致大型病害整体结构信息的丢失; 文献\[21\]提出了三阶段分类器, 可将不健康的桥梁区域分为特定病害类型, 以不同步长的滑动窗口对图像进行了多次的分类, 提高了分类的准确性.

  

不同类型的病害外观差异显著, 且病害之间可能发生重叠, 加上光照强度变化、噪声、背景干扰等影响, 现有的目标检测算法无法在固定步长的滑动窗口上实现桥梁多病害的快速鲁棒检测. 针对上述问题, 本文对YOLO进行了改进, 提出了YOLO-lump和YOLO-crack, 以提高网络检测多病害的能力, 进而形成基于双网络的桥梁表观病害快速检测算法. 1) YOLO-lump在1280×1280像素步长的滑动窗口上实现块状病害(包括蜂窝、漏筋和孔洞病害)的检测, 针对长宽比和大小多变的块状病害, 提出了混合空洞金字塔模块, 采用空间金字塔池化的并行采样结构, 并在不同的通道上利用混合空洞卷积提取不同尺度的特征. 该模块可用于提取稀疏的多尺度特征, 能在不显著增加计算复杂度的情况下扩展网络的感受野, 同时可以避免空洞卷积造成的局部信息丢失. 2) YOLO-crack在640×640像素步长的滑动窗口上实现裂缝病害的检测, 由于常规的下采样方法可能会导致裂缝像素损失, 受文献\[26-27\]启发, 提出了下采样注意力模块, 其在额外的下采样通道中, 利用1×1卷积和3×3分组卷积分别解耦特征的通道相关性和空间相关性, 以找到特征中重要的信息, 然后叠加到原始的下采样结果上. 该模块能够增强下采样过程中裂缝的前景响应, 有利于裂缝细节特征的保留. 为了提高网络的检测速度, 基于文献\[29-30\]对YOLO-crack进行了轻量化的调整. 此外, 为了进一步提升本文算法的性能, 条件生成式对抗网络被用于生成新的训练样本以提升病害检测的鲁棒性. 而focal loss损失函数被用于解决正负样本不平衡的问题以优化网络训练过程. 本文提出的算法可配合BIR-X-LITE机器人实现桥梁多病害的快速鲁棒检测, 算法整体流程如图1所示. 综上所述, 本文主要贡献如下:

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEpJT9Qfu9eFa7UiahH9m6hXXgROUYEKp62rJY24X1cDp4VXJI0hOBZvw/640?wx_fmt=jpeg)

图 1  双网络桥梁表观病害快速检测算法整体框架

  

1)建立了一个桥梁表观图像数据库, 共有169621张高分辨率图像, 包括蜂窝、漏筋、孔洞和裂缝4种常见病害类型.  

  

2)提出了混合空洞金字塔模块, 结合了混合空洞卷积和空间金字塔池化, 能有效扩展网络的感受野并保护特征连续性, 提高网络的多尺度检测性能.

  

3)提出了下采样注意力模块, 利用1×1卷积和3×3分组卷积分别解耦特征的通道相关性和空间相关性, 能加强下采样阶段病害的前景响应, 减少空间信息损失.

  

4)根据桥梁病害的实际情况, 提出了双网络桥梁表观病害快速检测算法, 其双网络分别为YOLO-lump和YOLO-crack网络, 配合BIR-X-LITE机器人可实现桥梁多病害的检测. 实验结果证明, 在本文数据集上, 该算法性能优于其他最新方法, 且检测一张5120×5120像素的图像仅花费0.995秒.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEn0lqxnwn7CMCPB8NMtgfSvS78SibFIQOFsXibXLLuoWTtutJKrFq6LVA/640?wx_fmt=jpeg)

图 2  GAN网络生成的桥梁表观病害图像  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEXib3O7I6MziaaeBo2YB1Geriaj5ILtP2Jl6kV5vjIGNjZ38iakrOiaMhrKQ/640?wx_fmt=jpeg)

图 5  BIR-X-LITE机器人数据采集过程  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeERaUz3icbzApNzU0DRz99BruC9Uibx1VRV3Qd8SPxKgfYyZMd8oo88oGA/640?wx_fmt=jpeg)

图 9  本文方法和其他方法在不同桥梁表观图像上的测试结果

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEneFMQHcbIuHjEomWpHpcxSPEujfoUXahHCQj6zicorqttvtVKYic7sbQ/640?wx_fmt=jpeg)

图 11  Grad-CAM++可视化结果

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEnDWEq4Fg2DnXQXC4Av3JDVjESXGRzAA1sO0a5eDfUWODZdKYrgvKmw/640?wx_fmt=png)

**彭雨诺**

湖南大学电气与信息工程学院硕士研究生. 2019年获得湖南大学学士学位. 主要研究方向为深度学习, 图像处理.

E-mail: pengyunuo@hnu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEgkUjRxsKyppDpFPyWaRv0e7u1mib0wK7VSjXaYOEibrDKxja0icv6EUng/640?wx_fmt=png)

**刘   敏**

湖南大学电气与信息工程学院教授. 2012年获美国加州大学河滨分校博士学位. 主要研究方向为模式识别和机器学习. 本文通信作者.

E-mail: liu\_min@hnu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEsvxfWVAx6TjibCSOficU0hK719Lsgln08guYibyaVyAgCSicZVQzAMaopQ/640?wx_fmt=jpeg)

**万   智**

湖南桥康智能科技有限公司总工程师. 1999年获湖南大学学士学位, 2010年获中南大学博士学位. 主要研究方向为公路交通和环保监测.

E-mail: xbh0n3@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeE1niaXSU94kpWpb7vuDTiaddQ0WSeA9oElLedYvHkkCEPFJGwggLFlruQ/640?wx_fmt=jpeg)

**蒋文博**

湖南大学电气与信息工程学院硕士研究生. 2018年获桂林电子科技大学学士学位. 主要研究方向为图像处理和模式识别.

E-mail: jiang\_wenbo@hnu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEsKyqjswQR432NT72yYeic8z3EK5HJN4sryiaOHTHqbsMpNUcJWcjVXNA/640?wx_fmt=jpeg)

**何文轩**

湖南大学电气与信息工程学院硕士研究生. 2020年获昆明理工大学学士学位. 主要研究方向为图像处理和模式识别.

E-mail: hwx@hnu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEgibrQ0ry0L3U0iajSlPF7PpBeDcFbRYrB5VLb9aoWcGVbcJvuUsy1YibA/640?wx_fmt=jpeg)

**王耀南**

中国工程院院士, 机器人技术与智能控制专家, 湖南大学电气与信息工程学院教授. 1995年获湖南大学博士学位. 主要研究方向为机器人学, 智能控制和图像处理.

E-mail: yaonan@hnu.edu.cn

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]   张琳, 陆耀, 卢丽华, 周天飞, 史青宣. 一种改进的视频分割网络及其全局信息优化方法. 自动化学报, 2022, 48(3): 787-796. doi: 10.16383/j.aas.c190292

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190292?viewType=HTML

  

\[2\]   王县县, 禹龙, 田生伟, 王瑞锦. 独立RNN和胶囊网络的维吾尔语事件缺失元素填充. 自动化学报, 2021, 47(4): 903-912. doi: 10.16383/j.aas.c180655

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180655?viewType=HTML

  

\[3\]   俞文武, 杨晓亚, 李海昌, 王瑞, 胡晓惠. 面向多智能体协作的注意力意图与交流学习方法. 自动化学报. doi: 10.16383/j.aas.c210430

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210430?viewType=HTML

  

\[4\]   杨启萌, 禹龙, 田生伟, 艾山·吾买尔. 基于多注意力机制的维吾尔语人称代词指代消解. 自动化学报, 2021, 47(6): 1412-1421. doi: 10.16383/j.aas.c180678

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180678?viewType=HTML

  

\[5\]   潘文雯, 赵洲, 俞俊, 吴飞. 基于文本引导的注意力图像转发预测排序网络. 自动化学报, 2021, 47(11): 2547-2556. doi: 10.16383/j.aas.c200629

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200629?viewType=HTML

  

\[6\]   宋燕, 王勇. 多阶段注意力胶囊网络的图像分类. 自动化学报. doi: 10.16383/j.aas.c210012

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210012?viewType=HTML

  

\[7\]   汤文兵, 任正云, 韩芳. 基于注意力机制的协同卷积动态推荐网络. 自动化学报, 2021, 47(10): 2438-2448. doi: 10.16383/j.aas.c190820

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190820?viewType=HTML

  

\[8\]   周勇, 王瀚正, 赵佳琦, 陈莹, 姚睿, 陈思霖. 基于可解释注意力部件模型的行人重识别方法. 自动化学报. doi: 10.16383/j.aas.c200493

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200493?viewType=HTML

  

\[9\]   李阳, 王璞, 刘扬, 刘国军, 王春宇, 刘晓燕, 郭茂祖. 基于显著图的弱监督实时目标检测. 自动化学报, 2020, 46(2): 242-255. doi: 10.16383/j.aas.c180789

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180789?viewType=HTML

  

\[10\]   王亚珅, 黄河燕, 冯冲, 周强. 基于注意力机制的概念化句嵌入研究. 自动化学报, 2020, 46(7): 1390-1400. doi: 10.16383/j.aas.2018.c170295

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170295?viewType=HTML

  

\[11\]   许玉格, 钟铭, 吴宗泽, 任志刚, 刘伟生. 基于深度学习的纹理布匹瑕疵检测方法. 自动化学报. doi: 10.16383/j.aas.c200148

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200148?viewType=HTML

  

\[12\]   陈一鸣, 周登文. 基于自适应级联的注意力网络的超分辨重建. 自动化学报. doi: 10.16383/j.aas.c200035

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200035?viewType=HTML

  

\[13\]   肖进胜, 申梦瑶, 江明俊, 雷俊峰, 包振宇. 融合包注意力机制的监控视频异常行为检测. 自动化学报. doi: 10.16383/j.aas.c190805

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190805?viewType=HTML

  

\[14\]  李策, 张栋, 杜少毅, 朱子重, 贾盛泽, 曲延云. 一种迁移学习和可变形卷积深度学习的蝴蝶检测算法. 自动化学报, 2019, 45(9): 1772-1782. doi: 10.16383/j.aas.c190104

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190104?viewType=HTML

  

\[15\]   金侠挺, 王耀南, 张辉, 刘理, 钟杭, 贺振东. 基于贝叶斯CNN和注意力网络的钢轨表面缺陷检测系统. 自动化学报, 2019, 45(12): 2312-2327. doi: 10.16383/j.aas.c190143

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190143?viewType=HTML

  

\[16\]   郑文博, 王坤峰, 王飞跃. 基于贝叶斯生成对抗网络的背景消减算法. 自动化学报, 2018, 44(5): 878-890. doi: 10.16383/j.aas.2018.c170562

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170562?viewType=HTML

  

\[17\]   李文英, 曹斌, 曹春水, 黄永祯. 一种基于深度学习的青铜器铭文识别方法. 自动化学报, 2018, 44(11): 2023-2030. doi: 10.16383/j.aas.2018.c180152

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180152?viewType=HTML

  

\[18\]   袁文浩, 孙文珠, 夏斌, 欧世峰. 利用深度卷积神经网络提高未知噪声下的语音增强性能. 自动化学报, 2018, 44(4): 751-759. doi: 10.16383/j.aas.2018.c170001

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170001?viewType=HTML

  

\[19\]   田渊栋. 阿法狗围棋系统的简要分析. 自动化学报, 2016, 42(5): 671-675. doi: 10.16383/j.aas.2016.y000001

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.y000001?viewType=HTML

  

\[20\]   王伟凝, 王励, 赵明权, 蔡成加, 师婷婷, 徐向民. 基于并行深度卷积神经网络的图像美感分类. 自动化学报, 2016, 42(6): 904-914. doi: 10.16383/j.aas.2016.c150718

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150718?viewType=HTML

  

  

**近期文章**

[《自动化学报》2022年第03期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022斯坦福AI指数报告出炉！点击获取完整报告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075236&idx=3&sn=1caed46e80f613c172a227ead8ddc1a3&chksm=8131f8e9b64671ffa8d6f7c8a36210fe1e262a66a42ab9a544e064d3c725b4a31274a4551750&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（上）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=2&sn=48b5232daaa7a51da96c3a7c87013e2d&chksm=8131fb97b6467281dc8e02749df8d0388f89d30e3b08f44d13c700169d1d7a22c4feef9f2dba&scene=21#wechat_redirect)

[CVPR 2022 | 自动化所新作速览！（下）](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075034&idx=3&sn=21833bb312bb0d9826c64c9fce068aa5&chksm=8131fb97b646728147f2bff58a04230d708d5a4537eb824656c2d54580b11f6a47b0eb30ade6&scene=21#wechat_redirect)

[直播回放分享 | 陈关荣教授：探索最优同步网络的拓扑结构](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061608&idx=1&sn=1500a81260d8f5127b7cb7767c759fba&chksm=8f5a9ae4b82d13f201b714d8e96af9bbddf442bb7e10c97416fb925ab2170c05fa12010fb1d1&scene=21#wechat_redirect)

  

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

  

**期刊目录**

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeENbzM2A2DJ45eovZ4f8Fa6zIWHaFGVE3tDf9SiaNicOib72XlNagEM96kg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEibyoLCLRIwjZiaXicC987jzptuP74jVCfHR5S7rWK3tN7N4wFDKoxYkwA/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeESqr4wF6rZoibKJv6aWsh9icN8gaLGMM040YOJHqPvAX2picG636Fx35vA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeE8gWiaOfdVgiceHg2EWMBboick5qzia1oy9yk5DA5Ca8vMq7suuL1RvVcsA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEy66qUdalbxFBeO85ju8Fzg7sU4WIHjdCD7GPnQLQP0OkrLuUTyAGoA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45Z969s5zE0Vicy2HgyHPibeEhib67iat8BXbHCnpAwu22qeVSuQxpicpmWEXDeq4p5ZNyNGgpWy1VPCicA/640?wx_fmt=gif)

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