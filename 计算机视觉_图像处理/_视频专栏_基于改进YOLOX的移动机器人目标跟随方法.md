# 【视频专栏】基于改进YOLOX的移动机器人目标跟随方法

原创 自动化学报 自动化学报 2023-05-24 11:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/sz4L0S8YmliPg40XH0M7Fg](https://mp.weixin.qq.com/s/sz4L0S8YmliPg40XH0M7Fg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_000_f76a7fe84cb4.png)

点击上方**蓝字**关注我们

  

万琴, 李智, 李伊康, 葛柱, 王耀南, 吴迪. [基于改进YOLOX的移动机器人目标跟随方法](http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c220344). 自动化学报, 2022, 45(x): 1-15. DOI: 10.16383/j.aas.c220344

1

摘要

      针对移动机器人在复杂场景中难以稳定跟随目标的问题, 提出基于改进YOLOX的移动机器人目标跟随方法, 主要包括目标检测、目标跟踪以及目标跟随三个部分. 首先, 以 YOLOX 网络为基础, 在其框架下将主干网络采用轻量化网络 MobileNetV2X, 提高复杂场景中目标检测的实时性. 然后, 通过改进的卡尔曼滤波器获取目标跟踪状态并采用数据关联进行目标匹配, 同时通过深度直方图判定目标发生遮挡后, 采用深度概率信息约束及最大后验概率进行匹配跟踪, 确保机器人在遮挡情况下稳定跟踪目标. 再采用基于视觉伺服控制的目标跟随算法, 当跟踪目标丢失时, 引入重识别特征主动搜寻目标实现目标跟随. 最后, 在公开数据集上与具有代表性的目标跟随方法进行了定性和定量实验, 同时在真实场景中完成了移动机器人目标跟随实验, 实验结果均验证了所提方法具有较好的鲁棒性和实时性.

  

2

引言

      移动机器人在安防、物流和医疗等领域有广泛应用\[1-2\], 其中机器人目标跟随算法引起了广泛关注, 但移动机器人目标跟随算法的鲁棒性和实时性仍是亟待解决的关键问题\[3-4\].

  

机器人目标跟随算法分为生成式模型方法和检测跟踪方法两大类\[5-6\]. 生成式模型主要通过构建目标模型实现跟随, 比如Yoshimi等\[7\]利用视觉传感器获取行人颜色和纹理特征, 机器人在视野范围内寻找与之相匹配的区域, 融合行人与位置速度信息构建模型, 采用基于生成式的目标跟踪算法跟随行人. 然而, 此类算法关注目标本身, 忽略背景信息, 经常出现跟踪丢失的情况.

  

为同时考虑目标与背景信息, 检测跟踪方法得到了越来越多的关注, 此方法通过构建分类器区分目标及背景, 其跟踪效果普遍优于生成式模型方法. 余铎等\[3\] 通过快速判别尺度空间切换相关滤波算法与卡尔曼滤波算法实现稳定跟踪. 另外, 移动机器人在跟随控制过程中常受到背景杂斑、光照变化、目标遮挡、尺度变化等干扰, 导致跟随目标丢失. 因此传统的检测跟踪方法不适用于移动机器人在复杂多变场景中的目标跟随\[2\].

  

基于深度学习的移动机器人目标跟随算法具有鲁棒性强等优势\[8\]. Zhang等\[9\] 通过基于目标轮廓带采样策略来提高移动机器人跟踪性能, 但未对遮挡、行人消失等情况进行处理. Pang等\[10\] 提出一种基于深度学习的目标检测器, 引入卡尔曼滤波来预测目标位置, 加入重识别模块处理遮挡问题, 但此类算法需先获取精度较高的目标检测结果. 鉴于上述问题, JDE (Jointly learns the detector and embedding model)检测模型可用来融合重识别与检测分支\[11\], 提高目标检测精度. YOLO (You only look once) 系列算法则是一类基于JDE检测模型的一阶段框下的目标检测算法, 具有高效、灵活和泛化性能好的优点.

  

YOLO算法包括了YOLOV1∼YOLOV7系列算法以及一系列基于改进YOLO的目标检测算法. Redmon等\[12\]提出YOLO算法进行目标检测, 直接采用回归的方法进行坐标框的检测以及分类, 使用一个端到端的简单网络实现坐标回归与分类, 能够极大地提升目标的检测速度. 此后,YOLO的网络结构不断优化, 已经成为目标检测领域主流的算法. Hsu等\[13\]引入比率感知机制, 动态调整YOLOV3的输入层长度和宽度超参数, 从而解决了长宽比差异较大的问题, 能够有效地提高平均跟踪精度. Huang等\[14\]引入改进的YOLOV3模型, 此模型把预测尺度从3个增加到4个, 并使用额外的特征图来提取更多的细节. YOLOV3的目标位置识别精度较差, 在目标分布密集、尺寸差异较大的复杂场景中, 检测效果较差. YOLOV4\[15\]开发了Darknet53目标检测模型, 此模型拥有更高的网络输入分辨率, 网络层参数多, 计算复杂度高, 对小目标检测效果较差. 对此, YOLO-Z\[16\]提出了一系列不同尺度的模型, 提高YOLOV5检测小目标的性能. Cheng等\[17\]提出一种单阶段SSD (Single shot multibox detector) 微小目标检测方法, 此方法可提高微小目标检测的实时性, 但其使用的两阶段式目标检测器使目标定位精度有所下降. YOLOV6\[18\]设计了更高效的主干网络和网络层. YOLOV7\[19\]扩展了高效长程注意力网络, 加入了基于级联的模型缩放方法, 均可一定程度提高检测精度和推理效率, 但由于未引入重识别分支,无法提取浅层特征用于后续跟踪. YOLOX\[20\]在YOLO系列的基础上做出了一系列改进, 相比于YOLO系列目标检测算法, 其最大的不同是采用了无锚框检测器. 而YOLOV1~YOLOV5采用有锚框的检测器, 由于可能会被多个锚框同时检测且与检测框中心存在误差, 并不适用于JDE检测模型. 因此, 采用无锚框的YOLOX目标检测算法更加适合于JDE检测模型.

  

移动机器人检测与跟踪跟随目标的核心问题是其在运动过程中, 复杂场景干扰影响其检测精度以及跟随性能. YOLOX以Darknet53网络结构为主干, 有较高的检测精度, 但模型较大、推理速度较慢, 不适用于移动机器人实时跟随. 在YOLOV5的网络模型中, 虽然网络的特征提取能力随着深度的增加而增强, 但下采样次数的增加会导致梯度的消失, 这极大影响了移动机器人的检测精度\[21\]. 为了提升移动机器人的检测精度, DeepSORT目标跟踪算法\[22\]采用卡尔曼滤波更新目标位置, 并与当前检测目标关联匹配, 但未解决因遮挡跟踪造成的目标丢失问题. Han等\[23\]提出PSR (Peak side-lobe rate) 目标跟踪算法, 引入深度信息来评估跟踪可信度, 并可主动检测跟踪丢失目标. 但其采用相关滤波法实现目标跟踪, 在复杂场景下的跟踪鲁棒性低. 可见, 改进网络结构的同时引入深度信息, 是提升移动机器人检测跟随性能的一种亟待探索的方法.

  

综上所述, 基于YOLO系列的移动机器人目标跟随算法的鲁棒性强且精度高, 但对于变化环境迁移和泛化能力弱, 且运行速率低. 传统移动机器人目标跟随算法速度快, 但是当目标发生形变、尺度变化和严重遮挡等情况时, 跟踪过程容易出现目标跟踪丢失. 因此, 为实现复杂场景下移动机器人稳定跟随目标, 本文提出改进YOLOX的移动机器人目标跟随方法(Improved YOLOX target-following algorithm, IYTFA). 主要工作如下:

  

1)为提高目标检测精度和速度, 提出基于YOLOX-MobileNetV2X网络 (YOLOX-M2X) 的目标检测算法, 使用交叉熵损失、回归损失以及重识别损失函数, 共同训练检测与重识别分支.

  

2)为提高目标预测与更新速率, 采用改进的卡尔曼滤波器获取目标跟踪状态. 同时加入基于深度直方图的遮挡检测机制, 并通过深度概率约束帧间目标匹配, 提高遮挡跟踪准确率.

  

3)在目标跟随过程中, 提出基于视觉伺服控制的主动搜寻策略, 并在目标消失时引入重识别特征进行跟踪跟随, 保证移动机器人稳定跟随目标.

  

本文内容安排如下: 第1节介绍IYTFA算法, 包括目标检测部分、目标跟踪部分和目标跟随控制部分; 第2节为实验验证, 简要说明移动机器人和深度学习平台, 定性、定量分析目标跟踪算法, 并进行移动机器人目标跟随实验; 第3节对本文工作进行总结与展望.

  

3

正文框架

1\. IYTFA算法  

  1.1 改进YOLOX的目标检测算法

  1.2 基于改进卡尔曼滤波的目标跟踪

  1.3 基于深度概率约束的遮挡目标跟踪

  1.4 基于视觉伺服控制的目标跟随

2\. 实验验证

  2.1 定性分析实验结果

  2.2 定量分析实验结果

  2.3 移动机器人目标跟随实验

3\. 结论

  

**部分文献**

  

\[1\] 王丽佳, 贾松敏, 李秀智, 王爽. 基于改进在线多示例学习算法的机器人目标跟踪. 自动化学报, 2014, 40(12): 2916-2925  

Wang Li-Jia, Jia Song-Min, Li Xiu-Zhi, Wang Shuang. Person following for mobile robot using improved multiple instance learning. Acta Automatica Sinica, 2014, 40(12): 2916-2925

  

\[2\] 曹风魁, 庄严, 闫飞, 杨奇峰, 王伟. 移动机器人长期自主环境适应研究进展和展望. 自动化学报, 2020, 46(2): 205-221 doi: 10.16383/j.aas.c180493

Cao Feng-Kui, Zhuang Yan, Yan Fei, Yang Qi-Feng, Wang Wei. Long-term autonomous environment adaptation of mobile robots: State-of-the-art methods and prospects. Acta Automatica Sinica, 2020, 46(2): 205-221 doi: 10.16383/j.aas.c180493

  

\[3\] 余铎, 王耀南, 毛建旭, 郑海华, 周显恩. 基于视觉的移动机器人目标跟踪方法. 仪器仪表学报, 2019, 40 (1): 227-235 doi: 10.19650/j.cnki.cjsi.J1804340

Yu Duo, Wang Yao-Nan, Mao Jian-Xu, Zheng Hai-Hua, Zhou Xian-En. Vision-based object tracking method of mobile robot. Chinese Journal of Scientific Instrument, 2019, 40(1): 227-235 doi: 10.19650/j.cnki.cjsi.J1804340

  

\[4\] 黄琰, 李岩, 俞建成, 封锡盛. AUV智能化现状与发展趋势. 机器人, 2020, 42(2): 215-231 doi: 10.13973/j.cnki.robot.190392

Huang Yan, Li Yan, Yu Jian-Cheng, Feng Xi-Sheng. State-of-theart and development trends of AUV intelligence. Robot, 2020, 42(2): 215-231 doi: 10.13973/j.cnki.robot.190392

  

\[5\] Marvasti-Zadeh S M, Cheng L, Ghanei-Yakhdan H, Kasaei S. Deep learning for visual tracking: A comprehensive survey. IEEE Transactions on Intelligent Transportation Systems, 2021, 23(5): 3943-3968

  

\[6\] Ciaparrone G, Sánchez F L, Tabik S, Troiano L, Tagliaferri R, Herrera F. Deep learning in video multi-object tracking: A survey. Neurocomputing, 2020, 381(14): 61-88

  

\[7\] Yoshimi T, Nishiyama M, Sonoura T, Nakamoto H, Tokura S, Sato H, et al. Development of a person following robot with vision based target detection. In: Proceedings of the 2006 IEEE/RSJ International Conference on Intelligent Robots and Systems. Beijing, China: IEEE, 2006. 5286−5291

  

\[8\] 蒋弘毅, 王永娟, 康锦煜. 目标检测模型及其优化方法综述. 自动化学报, 2021, 47(6): 1232-1255 doi: 10.16383/j.aas.c190756

Jiang Hong-Yi, Wang Yong-Juan, Kang Jin-Yu. A survey of object detection models and its optimization methods. Acta Automatica Sinica, 2021, 47(6): 1232-1255 doi: 10.16383/j.aas.c190756

  

\[9\] Zhang M Y, Liu X L, Xu D, Cao Z Q, Yu J Z. Vision-based target-following guider for mobile robot. IEEE Transactions on Industrial Electronics, 2019, 66(12): 9360-9371 doi: 10.1109/TIE.2019.2893829

  

\[10\] Pang L, Cao Z Q, Yu J Z, Guan P Y, Chen X C, Zhang W M. A robust visual person-following approach for mobile robots in disturbing environments. IEEE Systems Journal, 2019, 14(2): 2965-2968

  

\[11\] Zhang Y F, Wang C Y, Wang X G, Zeng W J, Liu W Y. Fairmot: On the fairness of detection and re-identification in multiple object tracking. International Journal of Computer Vision, 2021, 129(11): 3069-3087 doi: 10.1007/s11263-021-01513-4

  

\[12\] Redmon J, Divvala S, Girshick R, Farhadi A. You only look once: Unified, real-time object detection. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR). Las Vegas, USA: IEEE, 2016. 779−788

  

\[13\] Hsu W Y, Lin W Y. Ratio-and-scale-aware YOLO for pedestrian detection. IEEE Transactions on Image Processing, 2020, 3029: 934-947

  

\[14\] Huang J H, Zhang H Y, Wang L, Zhang Z L, Zhao C M. Improved YOLOv3 model for miniature camera detection. Optics & Laser Technology, 2021, 142: Aricle No.107133

  

\[15\] Bochkovskiy A, Wang C Y, Liao H Y M. Yolov4: Optimal speed and accuracy of object detection \[Online\], available: https://arxiv.org/abs/2004.10934, April 23, 2020

  

\[16\] Benjumea A, Teeti I, Cuzzolin F, Bradley A. YOLO-Z: Improving small object detection in YOLOv5 for autonomous vehicles \[Online\], available: https://arxiv.org/abs/2112.11798, December 22, 2021

  

\[17\] Cheng L, Liu W Z. An effective microscopic detection method for automated silicon-substrate ultra-microtome (ASUM). Neural Processing Letters, 2021, 53(3): 1723-1740 doi: 10.1007/s11063-019-10134-5

  

\[18\] Conley G, Zinn S C, Hanson T, McDonald K, Beck N, Wen H. Using a deep learning model to quantify trash accumulation for cleaner urban stormwater. Computers, Environment and Urban Systems, 2022, 93: Aricle No.101752

  

\[19\] Hussain M, Al-Aqrabi H, Munawar M, Hill R, Alsboui T. Domain feature mapping with YOLOv7 for automated edge-based pallet racking inspections. Sensors, 2022, 22(18): Aricle No.6927

  

\[20\] Ge Z, Liu S T, Wang F, Li Z M, Sun J. YOLOX: Exceeding YOLO series in 2021 \[Online\], available: https://arxiv.org/abs/2107.08430, July 18, 2021

  

\[21\] Yan F X, Xu Y X. Improved target detection algorithm based on YOLO. In: Proceedings of 2021 4th International Conference on Robotics, Control and Automation Engineering (RCAE). Wuhan, China: IEEE, 2021. 21−25

  

\[22\] Wojke N, Bewley A, Paulus D. Simple online and realtime tracking with a deep association metric. In: Proceedings of the 2017 IEEE International Conference on Image Processing (ICIP). Beijing, China: IEEE, 2017. 3645−3649

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_002_51820040135e.svg)

  

**作者简介**

  

  

**万琴**，湖南工程学院电气与信息工程学院教授.2010年获得湖南大学博士学位.主要研究方向为机器视觉, 模式识别. 本文通信作者. 

  

**李智**，湖南工程学院电气与信息工程学院硕士研究生.主要研究方向为目标跟踪, 目标跟随机器人. 

  

**李伊康**，湖南工程学院电气与信息工程学院硕士研究生.主要研究方向为微电网多目标成本优化模型构建. 

  

**葛柱**，湖南工程学院电气与信息工程学院硕士研究生.主要研究方向为目标检测, 机器人多目标跟踪.

  

**王耀南**，中国工程院院士, 湖南大学电气与信息工程学院教授. 1995年获得湖南大学博士学位.主要研究方向为机器人学, 智能控制和图像处理.

  

**吴迪**，湖南工程学院电气与信息工程学院副教授. 2014年获得兰州理工大学博士学位.主要研究方向为多模态融合行人再识别, 目标检测. 

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_001_51820040135e.svg)

  

**热**

**点**

**文**

**章**

[》【视频专栏】基于多尺度变形卷积的特征金字塔光流计算方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984913&idx=2&sn=310b86ad662f17d450f55e8e3c2dd178&chksm=f2948bd0c5e302c6776e8009e693fe270c838832527affe11131374642725528e2aa81df2d08&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984913&idx=1&sn=ef45062894b813512922b43b45ed2b20&chksm=f2948bd0c5e302c61318986d445ebdb7a69e680a278d113201b78f1470f5577cff0ccb1e5233&scene=21#wechat_redirect)[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984132&idx=2&sn=6f8188f47dbac43358135416ef84152a&chksm=f29488c5c5e301d3d85c95e28af2d658373c1457ae9ad2ee31583569b51adefdf231cc18c9c7&scene=21#wechat_redirect)自动化学报创刊60周年专刊| 柴天佑教授等：端边云协同的PID整定智能系统

[》【视频专栏】一种同伴知识互增强下的序列推荐方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984132&idx=2&sn=6f8188f47dbac43358135416ef84152a&chksm=f29488c5c5e301d3d85c95e28af2d658373c1457ae9ad2ee31583569b51adefdf231cc18c9c7&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 桂卫华教授等：复杂生产流程协同优化与智能控制](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984132&idx=1&sn=723478ec0cdb2b7ff3ce3cb8387f29fb&chksm=f29488c5c5e301d353838c24bb0bbb482b24f87c51996ac332562bf81d26c1ce5a4008673fef&scene=21#wechat_redirect)

[》【视频专栏】 基于跨模态实体信息融合的神经机器翻译方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983595&idx=2&sn=f7f6d953924bc87606e3cff241d67c91&chksm=f2948e2ac5e3073c2355b5e03047521a7950a58833fa5948dcc73f535bd1a31ef848311c99d5&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 王耀南教授等：机器人感知与控制关键技术及其智能制造应用](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983595&idx=2&sn=f7f6d953924bc87606e3cff241d67c91&chksm=f2948e2ac5e3073c2355b5e03047521a7950a58833fa5948dcc73f535bd1a31ef848311c99d5&scene=21#wechat_redirect)

[》【视频专栏】机器人运动轨迹的模仿学习综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983595&idx=2&sn=f7f6d953924bc87606e3cff241d67c91&chksm=f2948e2ac5e3073c2355b5e03047521a7950a58833fa5948dcc73f535bd1a31ef848311c99d5&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 于海斌研究员等：无线化工业控制系统: 架构、关键技术及应用](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983595&idx=1&sn=d9545fc8cbb247e17e7eceac9f845155&chksm=f2948e2ac5e3073c23286ffecec152f6d8ec13355c4be30424843aa598ed49b3e3ecbc6ff81c&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 王飞跃教授等：平行智能与CPSS: 三十年发展的回顾与展望](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983512&idx=2&sn=17e0d1102db102517c33e43c04240468&chksm=f2948e59c5e3074feb246baa49f6b07886445d6e01286cbf53ee3c38a7c2609ce610a57d3a1e&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 陈杰教授等：非线性系统的安全分析与控制: 障碍函数方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983132&idx=1&sn=32c7e4b6c4c3f6d48726380c7445c8d2&chksm=f2948cddc5e305cb68b9bb4021c3a257d311bfad9c0bbe34e791f1d9b244b4be2be7b7d9909e&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 乔俊飞教授等：城市固废焚烧过程数据驱动建模与自组织控制](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983104&idx=1&sn=c21c87bc60f9ba05b85ac2a4ddf04e73&chksm=f2948cc1c5e305d7f636c366f29577fbcd1e1f90b75a1dc3def06b373f518e2a871f5d59de1d&scene=21#wechat_redirect)

[》自动化学报创刊60周年专刊| 姜斌教授等：航天器位姿运动一体化直接自适应容错控制研究](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982959&idx=1&sn=983094e59a60ac865c78562fb006ba48&chksm=f29483aec5e30ab8055a14678943b2acd1e80ee7319467bbf56bf6940bdd9b91c12a3d5f7526&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983104&idx=2&sn=4e9ed9cff5c9acf2c85da060749b7fbe&chksm=f2948cc1c5e305d7ef1d929d3ff90ebbb6ea272e98d9edcb1289f5eece60e36e17afa3941489&scene=21#wechat_redirect)自动化学报创刊60周年专刊| 王龙教授等：多智能体博弈、学习与控制

[》自动化学报创刊60周年专刊| 刘成林研究员等：类别增量学习研究进展和性能评价](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982935&idx=1&sn=98725e6e1d7489129fe88c26d8f206f4&chksm=f2948396c5e30a80eb50116d01b1b3c734e45cc0bd28a3df2ef34ae93bb27c36982c6ea531fc&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982073&idx=1&sn=f2cd4f06b5dfafadef97023d83881df0&chksm=f2948038c5e3092e1142f77236b80ca92116d4aff95cd27410faa4edc34a442245c3720cc2ff&scene=21#wechat_redirect)《自动化学报》创刊60周年专刊｜杨孟飞研究员等：空间控制技术发展与展望

[》城市固废焚烧过程数据驱动建模与自组织控制](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982073&idx=1&sn=f2cd4f06b5dfafadef97023d83881df0&chksm=f2948038c5e3092e1142f77236b80ca92116d4aff95cd27410faa4edc34a442245c3720cc2ff&scene=21#wechat_redirect)

[》面向全量测点耦合结构分析与估计的工业过程监测方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982025&idx=1&sn=08dd0b6c4fed8f54c3fad7d3de8cf549&chksm=f2948008c5e3091e7ae5b7c84aa4ef8250af016eeb51d7f282edbe01204c2579c8bbf055689e&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981846&idx=1&sn=86441c435219fb06d694b38bb6830808&chksm=f29487d7c5e30ec1c344a96b9a468da56068a7d9d9d30b9b3818f9871bd9b90c32b4f63ae638&scene=21#wechat_redirect)《自动化学报》多篇论文入选高影响力论文

[》复杂网络能控性鲁棒性研究进展](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981410&idx=1&sn=7190b3cc7997c0fd301452b392038200&chksm=f29485a3c5e30cb52abfd31256cf92e70514ff745e41b1dd9e465358f3cadc655c69e5b6a516&scene=21#wechat_redirect)

[》解耦表征学习综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981295&idx=1&sn=088d7522994538e58bcec159d458a677&chksm=f294852ec5e30c388514c0260187dd67a5d3b7cd7e0d345c78c9f2207b887ba427a584c4c02e&scene=21#wechat_redirect)

[》考虑输出约束的冗余驱动绳索并联机器人预设性能控制](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981224&idx=1&sn=0eaa0755cb61a5490504cfe30a58cc7c&chksm=f2948569c5e30c7f4e4adb8c51567350fea6ba82dc2c83af0f5c16ecd06f224af8ce6ffbc3a0&scene=21#wechat_redirect) 

[》面向网络空间防御的对抗机器学习研究综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981144&idx=1&sn=203ba6c51c2636ad1c0d869d8bd29898&chksm=f2948499c5e30d8f160c4ea56caefedbc3cecdbf91778d8e65867511118262bed070a1d440b9&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649980896&idx=1&sn=96a589569dde33848f24d4b6b898bba3&chksm=f2947ba1c5e3f2b76fc068504a429182e39729a325d7cdc13444a2533ed8e1efb221e4cc91d1&scene=21#wechat_redirect)[【虚拟专题】机器人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649980896&idx=1&sn=96a589569dde33848f24d4b6b898bba3&chksm=f2947ba1c5e3f2b76fc068504a429182e39729a325d7cdc13444a2533ed8e1efb221e4cc91d1&scene=21#wechat_redirect)

[》基于事件相机的机器人感知与控制综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649980861&idx=1&sn=17c1137497fed04212b6fba799c325dc&chksm=f2947bfcc5e3f2ea78d7c503e629184728f201c86a3d81d96c4c0a2bfef9423ab4d10220284d&scene=21#wechat_redirect)

[》《自动化学报》广受关注论文合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649978459&idx=1&sn=a4a927aa601244a3538f3b3bba345777&chksm=f294721ac5e3fb0c3898167e2cfb2d2f4ab3a1019c8f54f161c1bc1aac824c8f2a861ff46333&scene=21#wechat_redirect)

》[2022年第01-07期综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649979984&idx=1&sn=96cee7e1cde441b5eca7d2429461ba07&chksm=f2947811c5e3f1070c07959eb1641b3741b2c4dc8bc70746c8e067eb57a90d86a715c086b3aa&scene=21#wechat_redirect)

[》【热点专题】多目标优化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962438&idx=1&sn=83b21f7b6a63fc4e01c2f4718b2aae92&chksm=f2943387c5e3ba91ce32286c06f215a989233f55bbbd5c7d436a43c40615bb5ae208d0f0f228&scene=21#wechat_redirect)

[》【热点专题】目标检测](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962259&idx=1&sn=97b0c31ec704211713ef8cba4bb51b01&chksm=f2943352c5e3ba44f2c7217cff60405765c6d67312beb6d07006155404bfc4b34268956697f5&scene=21#wechat_redirect)

[》异构集群系统分布式自适应输出时变编队跟踪控制](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962036&idx=1&sn=44dc00c1c10acbdb6d6cb3acfe5b7267&chksm=f2943275c5e3bb63bce70d691316c6550fc382fa94d7e26a26d8e03c57995a64e6e81459f28c&scene=21#wechat_redirect)

[》深海起重机系统的实时轨迹规划方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962005&idx=1&sn=1443936440305b04f14d0853582a3a76&chksm=f2943254c5e3bb428c14fd80afccb35c01e903d3824e9a4ed968f9f13b89b183ea9451904950&scene=21#wechat_redirect)

[》数据和知识驱动的城市污水处理过程多目标优化控制](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961967&idx=1&sn=6c6b15309ff2ce97793dda869f26c733&chksm=f29431aec5e3b8b85ccf87cae5e7cf192cf38ca1b4ed37e92d10898a0af9c460409b7e4e0b38&scene=21#wechat_redirect)

[》基于池的无监督线性回归主动学习](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961918&idx=1&sn=aa9324f774d1682d554c261df948235e&chksm=f29431ffc5e3b8e9f1683be3decf9a85e1862d34a78c274ea5cf8ef6e7c21e1e4b0a375e2f8f&scene=21#wechat_redirect)

[》基于非线性干扰观测器的飞机全电刹车系统滑模控制设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960721&idx=1&sn=c7dddb2e703769fe77724e44df7e3a6b&chksm=f2943550c5e3bc46f3a11280ab5d93acd995f24072883ecd380e47ff346c3a57651b1abfbd93&scene=21#wechat_redirect)

》[综合集成研讨厅体系](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959939&idx=1&sn=0e131e7dad92af73b0fb9680e9a2603c&chksm=f2942a42c5e3a35499fad6966ec3747438215c3de60e638d0be54a0c975e1f3224de85191682&scene=21#wechat_redirect)

[》传感器饱和的非线性网络化系统模糊H∞滤波](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651071175&idx=1&sn=e78285c311fde57d52c77b70d146610f&chksm=8131e88ab646619ca999f197a1aeb6c3f04a6837f2a6df0cd45fe4439799fba5f9612ccd237b&scene=21#wechat_redirect)

[》基于区块链的数字货币发展现状与展望](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958456&idx=1&sn=db1e69bbd69e864051158910b599e0a9&chksm=f2942c79c5e3a56f669395da520a1f215c6452cc8a0d40ca6e3b274b85e077c547bf4d85a8e5&scene=21#wechat_redirect)

[》比特驱动的瓦特变革—信息能源系统研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070474&idx=1&sn=bbfe03a0e9a8f97f46c87d75f466e7c2&chksm=8131ea47b646635104e90390e9a09f18947b3cd7d1bc9438dd4b4275f17db875abd2ab1a2849&scene=21#wechat_redirect)

**期**

**刊**

**动**

**态**

[》《自动化学报》创刊六十周年学术研讨会第二期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649984459&idx=1&sn=bade18d071fffdbd94a0062aa09e5821&chksm=f294898ac5e3009ca3e2a687b9e97fa8ef2274e6318b7b241ba9092d113839da69bf8337ebcc&scene=21#wechat_redirect)

[》《自动化学报》创刊六十周年学术研讨会第一期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983235&idx=1&sn=8632016cf5744a797ee7ae7cf07ab943&chksm=f2948d42c5e304545e4a472d6b88fdf4a9f922013348a8d4f2ae4db0f1c6a4081245695cf3e9&scene=21#wechat_redirect)

[》《自动化学报》致谢审稿人（2022年度）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982665&idx=1&sn=d61e7b604db75a9e71a15e8046ee05ac&chksm=f2948288c5e30b9e3d2569ce292bdecf7e5f79419f638002531e8fba91d3de5c111cce298fed&scene=21#wechat_redirect)

[》《自动化学报》13篇文章入选2022“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982409&idx=1&sn=d0d4e97a7ac4337ca8e699625ddb94e5&chksm=f2948188c5e3089e988782a341caabdae47e6929a8e649b14438829e37e279f816f19e0652de&scene=21#wechat_redirect)

[》自动化学报连续11年入选国际影响力TOP期刊榜单](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981948&idx=1&sn=6b850c9c095f2e9cbbb899c8b4a8149d&chksm=f29487bdc5e30eab3df0fb761e7f00b3c4945f7e0e971483a4c5f37434032e69f76d2f9f4160&scene=21#wechat_redirect)

[》《自动化学报》影响因子6.627，影响因子和影响力指数排名第1](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649978177&idx=1&sn=751e0861ae0aca7dda3e97d61d036b9b&chksm=f2947100c5e3f8164adef31ca955542569a2fa2f3b0bb712d0df51e5eadecd618010831521a5&scene=21#wechat_redirect)

[》JAS最新影响因子7.847，排名全球前10%](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649978177&idx=1&sn=751e0861ae0aca7dda3e97d61d036b9b&chksm=f2947100c5e3f8164adef31ca955542569a2fa2f3b0bb712d0df51e5eadecd618010831521a5&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649978148&idx=1&sn=279c2b1746c902b4dd71e8caef8edca4&chksm=f2947165c5e3f873100609f63b9358e6959232e72b83e44e828859065146391b62fd3c60dc39&scene=21#wechat_redirect)[《自动化学报》17篇文章入选2021“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649978148&idx=1&sn=279c2b1746c902b4dd71e8caef8edca4&chksm=f2947165c5e3f873100609f63b9358e6959232e72b83e44e828859065146391b62fd3c60dc39&scene=21#wechat_redirect)

[》自动化学报多名作者入选爱思唯尔2021中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962415&idx=1&sn=4e1ea44f0317684b6a6e7b780837d5be&chksm=f29433eec5e3baf81455b542b535bddc4f0b33e77534fe72ab2ab8312ef149bb5812844b3cec&scene=21#wechat_redirect)

[》自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961858&idx=1&sn=eaccb38a93a2b1f11e0f1b0f80476b12&chksm=f29431c3c5e3b8d5417d6e17aedae4c58f707822ee67c5f1d87a24308e56f888a31bff8ae332&scene=21#wechat_redirect)

[》自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[》JAS进入中科院分区工程技术和计算机科学类1区、Top期刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960846&idx=1&sn=a409dc43c027239f675181c7352dbce8&chksm=f29435cfc5e3bcd958c83f5bb4079dc5419efbb623ab9968f0d92fe45d844c4b0b4d4da4abd0&scene=21#wechat_redirect)

[》自动化学报蝉联百种中国杰出期刊称号，入选中国精品科技期刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957485&idx=1&sn=8af865466cb6f52b05a1e41af8549e71&chksm=f294202cc5e3a93a40b4850e6e0f0bccaf56c89591e049e9d98bfe9a598913f5d25e8ecfcf8d&scene=21#wechat_redirect)

[》《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21#wechat_redirect)

[》《自动化学报》多名作者入选科睿唯安2020年度高被引科学家](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957295&idx=1&sn=597189346218d96d9906447a50281084&chksm=f29427eec5e3aef8d0662def8a0afcde2d2f3f828ae8208a52b14fc72169cedc5d81c06185a9&scene=21#wechat_redirect)

[》自动化学报排名第一，被评定为中国中文权威期刊](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956509&idx=1&sn=1e39aaf65dc579606cf36258be8e1744&scene=21#wechat_redirect)

**期**

**刊**

**目**

**录**

[》《自动化学报》创刊60周年专刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649983512&idx=1&sn=b7b9d1242e60913fb1a9397b22565f41&chksm=f2948e59c5e3074fdf84f2fc97ceb6ee7012723dd40be24c5f6092247d1401facac5e27dd894&scene=21#wechat_redirect)

》[2023年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649982877&idx=1&sn=40c0819751e9813b919ca43bd480a3b7&chksm=f29483dcc5e30aca0bac885092719afb182ab673c60c851572e6fefcbc2396d59cd202e7928f&scene=21#wechat_redirect)

》[2022年第10期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981921&idx=1&sn=bfbb4b82af0b931c9b7feb78686bed67&chksm=f29487a0c5e30eb6d935ad0934a51875742c7ed4642b29503979b50992d81e4dd16de9a18fb5&scene=21#wechat_redirect)

[》2022年第09期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649981789&idx=1&sn=936cef364536902d5518e17a9f1a3393&chksm=f294871cc5e30e0adbb6c683341029f8e095720211efb4f1cd19545c05b0bf490bb146931318&scene=21#wechat_redirect)

[》](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649980759&idx=1&sn=15573de2967fe025c8d5d712fe48f720&chksm=f2947b16c5e3f200bc78941860bdeda439e66b063d07f5ba3f469cb521e221bf1a39d47650fb&scene=21#wechat_redirect)[2022年第08期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649980759&idx=1&sn=15573de2967fe025c8d5d712fe48f720&chksm=f2947b16c5e3f200bc78941860bdeda439e66b063d07f5ba3f469cb521e221bf1a39d47650fb&scene=21#wechat_redirect)

[》2022年第07期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649978424&idx=1&sn=54d1cc45c3d5562ddbff526d5e4c31a8&chksm=f2947279c5e3fb6f2f704e9eba27232a1feea370f916eb637684e4813619a4f923eb9f969abe&scene=21#wechat_redirect)

[》2022年第01-06期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649963066&idx=1&sn=6c7075122e7fd5c7e3a093827fdfc030&chksm=f2943e7bc5e3b76d44f376d73989e3d55e836e4834847c0fbf0feec3ee15b988517b5d53eb86&scene=21#wechat_redirect)

》[2021年第11期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960841&idx=1&sn=8ec7b4ca78c46b260113cfcd915605d3&chksm=f29435c8c5e3bcde9c366239407a93b36993dff64ed0e3109120c9dfe44a4a0cd0d5cf2f0098&scene=21#wechat_redirect)

[》2021年第10期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960588&idx=1&sn=9e58c5bf64a369da813c199faf7f387f&chksm=f29434cdc5e3bddbe04b9a5ffd5aafa334f03659ed3338a030c43c14f949a3bbd725315b4651&token=565938459&lang=zh_CN&scene=21#wechat_redirect)

[》2021年第09期](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960233&idx=1&sn=a1fcea45b06446be7ededa32a4e1bc32&chksm=f2942b68c5e3a27ea642bb4309323146a5370093d4d22415d5f1d391a40fc7e370df0135aa42&token=1971693790&lang=zh_CN&scene=21#wechat_redirect)

[》2021年第08期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959903&idx=1&sn=6eab97a89ffabbeffc0ff2ef715b2dd1&chksm=f294299ec5e3a0880a5a2c33475d4ebbddee6a1301e001975411aec2234ccf8f88edcadd0e5b&scene=21#wechat_redirect)

[》2021年第07期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959756&idx=1&sn=7e5985469c10d03031de1d44d2b2c258&chksm=f294290dc5e3a01b626b4300d9f444cb8de1bea7ba390f12e835b4d3373e49c1c23dd11c8959&scene=21#wechat_redirect)

[》2021年第06期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959156&idx=1&sn=5fbd7f8c73b2ec6e4c21136bff39e716&chksm=f2942eb5c5e3a7a3a94c8be799a10e43dd60f7255a10f8c850d62bd5bdada5bb7d1acc29e1a1&scene=21#wechat_redirect)

[》2021年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958886&idx=1&sn=ba599bc866e3eb23b0b8de0579956258&chksm=f2942da7c5e3a4b1fd1313e90d4f72354dd0de42cee19281f5c726978a841332622a0681d32c&scene=21#wechat_redirect)

[》2021年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958569&idx=1&sn=ae33a7dcd6e2d66cae59932a1e99ce5e&chksm=f2942ce8c5e3a5fe7d94f6d809ecc492e83ebe118243f871cc4d82420c403784a01db82a93cb&scene=21#wechat_redirect)

[》2021年第03期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958419&idx=1&sn=b5d00eb294aa8c61a6fe4a0da8b461b9&chksm=f2942c52c5e3a544ca32e37d63f8ca879a64018d3fa5b25abd6bde1aeb582914f16e1e11182a&scene=21#wechat_redirect)

[》2021年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958305&idx=1&sn=a701b9996478d2c09078a03f5b22d524&chksm=f29423e0c5e3aaf692be51b3905e1cbf4045c6df9664ce7d13459de3c0c61aa284b13eb502b9&scene=21#wechat_redirect)

[》2021年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958084&idx=1&sn=24c140a6a1957eb7f4164689ed2840a5&chksm=f2942285c5e3ab93c5ed6127ad93e76ded82ae657ca79f7ead390387fbe2a72cb6df0ec6dcd2&scene=21#wechat_redirect)

  

[![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_003_e43767cc2af0.jpg)](http://www.aas.net.cn/)

[![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_004_a4a0f559228e.jpg)](http://www.ieee-jas.net/)

  

  

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_005_8f4bfd69493c.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_008_8f4bfd69493c.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_007_29b9dc2aa864.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_009_8f4bfd69493c.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_006_8f4bfd69493c.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_010_8f4bfd69493c.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_011_8f4bfd69493c.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_012_6f0875e12d16.jpg)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_013_8f4bfd69493c.gif)

![](D:\电脑文件\公众号知识库\计算机视觉_图像处理\_视频专栏_基于改进YOLOX的移动机器人目标跟随方法_images\img_014_8f4bfd69493c.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

**联系我们**

**网站:** 

[http://www.aas.net.cn](http://www.aas.net.cn/)

[https://www.ieee-jas.net](https://www.ieee-jas.net/)

**投稿:** 

[https://mc03.manuscriptcentral.com/aas-cn](https://mc03.manuscriptcentral.com/aas-cn) 

[https://mc03.manuscriptcentral.com/ieee-jas](https://mc03.manuscriptcentral.com/ieee-jas) 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

[http://blog.sina.com.cn/aasedit](http://blog.sina.com.cn/aaseditor)

**点击****阅读原文** **了解更多**