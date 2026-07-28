# 基于改进YOLOv3算法的公路车道线检测方法

原创 自动化学报 自动化学报 2022-06-01 15:42 北京

> 原文地址: [https://mp.weixin.qq.com/s/q06FIEiprZAVx2GqkY3qyg](https://mp.weixin.qq.com/s/q06FIEiprZAVx2GqkY3qyg)

**点击蓝字|关注我们**

  

**引用本文**

  

崔文靓, 王玉静, 康守强, 谢金宝, 王庆岩, MIKULOVICH Vladimir Ivanovich. 基于改进YOLOv3算法的公路车道线检测方法. 自动化学报, 2022, 48(6): 1560−1568 doi: 10.16383/j.aas.c190178

Cui Wen-Liang, Wang Yu-Jing, Kang Shou-Qiang, Xie Jin-Bao, Wang Qin-Yan, Mikulovich Vladimir Ivanovich. Road lane line detection method based on improved YOLOv3 algorithm. Acta Automatica Sinica, 2022, 48(6): 1560−1568 doi: 10.16383/j.aas.c190178

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190178?viewType=HTML

  

**文章简介**

  

**关键词**

  

车道线检测, 深度学习, YOLOv3, K-means++, 计算机视觉

  

**摘   要**

  

针对YOLOv3算法在检测公路车道线时存在准确率低和漏检概率高的问题, 提出一种改进YOLOv3网络结构的公路车道线检测方法.该方法首先将图像划分为多个网格, 利用K-means++聚类算法, 根据公路车道线宽高固有特点, 确定目标先验框数量和对应宽高值; 其次根据聚类结果优化网络Anchor参数, 使训练网络在车道线检测方面具有一定的针对性; 最后将经过Darknet-53网络提取的特征进行拼接, 改进YOLOv3算法卷积层结构, 使用GPU进行多尺度训练得到最优的权重模型, 从而对图像中的车道线目标进行检测,并选取置信度最高的边界框进行标记.使用Caltech Lanes数据库中的图像信息进行对比试验, 实验结果表明, 改进的YOLOv3算法在公路车道线检测中平均准确率(Mean average precision, mAP)为95%, 检测速度可达50帧/s, 较YOLOv3原始算法mAP值提升了11%, 且明显高于其他车道线检测方法.

  

**引   言**

  

车道线检测是智能驾驶领域的关键技术之一, 广泛应用于汽车辅助驾驶系统、车道偏离预警系统以及车辆防碰撞系统中. 随着计算机科学、人工智能和目标检测技术的飞速发展, 研究端到端的智能化车道线检测方法是自动驾驶领域的一条全新途径. 因此, 研究基于深度学习的公路车道线检测方法对于提高公路交通安全具有重要意义.

  

对于车道线检测问题, 国内外学者已开展了相关研究, 取得了一定的研究成果. 基于传统方法的车道线检测实质是通过图像特征和车载传感器来感知车辆当前环境并进行建模. 存在检测速度慢、检测精度差、抗环境干扰能力差等问题. 文献\[11\]在常见的直线模型、多项式曲线模型、双曲线模型和样条曲线模型等二维模型的基础上, 提出了基于车道线特征的检测方法. 文献\[12\]在霍夫变换的基础上使用道路拟合算法精确标出道路俯视图中的车道线位置, 该方法可有效改善图像中其他车辆位置对检测效果的影响. 文献\[13\]提出了基于立体视觉的路缘边线检测方法, 该方法在真实路况条件下具有较强的稳定性. 文献\[14\]提出了基于车道线颜色和方向的几何特征结构化检测方法, 综合颜色和方向两个方面的信息对车道线进行拟合, 实现了车道线的检测. 文献\[15\]提出了基于视觉更具有鲁棒性的检测方法, 通过并行约束和多路模型拟合的方法提高了车道线检测的准确性.

  

近年来, 卷积神经网络(Convolutional neural network, CNN)在图像分类、目标检测、图像语意分割等领域取得了一系列突破性的研究成果. 基于深度学习方法的车道线检测常通过卷积神经网络对图像特征进行学习、分类和检测. 文献\[18-20\]先后提出了区域卷积神经网络、快速区域卷积神经网络和超快区域卷积神经网络, 将网络应用到目标检测问题中, 并在检测速度和准确率方面不断提高. 文献\[21\]将改进的CNN应用在公路车道线检测方面, 测试效果较霍夫变换和随机抽样一致算法大幅提升. 为了进一步提高目标检测的速度, 文献\[22\]又提出了一种端到端的目标检测算法YOLO (You only look once), 将目标检测问题转化为回归问题, 进而将目标和背景进行更好的区分. 文献\[23\]提出的YOLOv2算法在简化网络结构的同时提高了目标检测的准确率. 文献\[24\]将YOLOv2算法应用在无人机航拍定位领域并得到理想效果, 在一定程度上验证了算法的普适性. 文献\[25\]提出了一种端到端的可训练网络VPGNet (Vanishing point guide network), 通过对大量图片的训练得到图像中的车道线位置, 为车道线检测问题提供了一种全新的解决思路. 文献\[26\]提出的YOLOv3算法借鉴了残差神经网络的思想, 成为目标检测算法中集检测速度和准确率于一身的优秀方法, 但其较YOLOv2算法相比, 网络结构更为复杂, 卷积层数目大幅增加, 加大了小目标在深层卷积过程中特征消失的风险.

  

为提高算法在车道线检测方面的适用性和准确性, 本文在YOLOv3算法的基础上进行改进, 采用随机性更小的K-means++算法替代K-means算法对车道线标签进行聚类分析, 确定最优的聚类数目和相应的宽高值, 并据此修改YOLOv3算法中的Anchor参数. 针对车道线检测实时性和检测目标较小的特点, 改进YOLOv3算法卷积层结构, 在保证检测准确率的同时, 提高算法的检测速度, 从而实现对公路车道线的检测.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44uxkMgWricgHymOkpicTyFk35LNU5z7wyQjvwon6P6iaB120Rq7Ly3XIdQkqte1eZm6tLHdIYoqbDxg/640?wx_fmt=jpeg)

图 3  改进YOLOv3算法的网络结构

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44uxkMgWricgHymOkpicTyFk31qkPcQ7GIeE6MvibXpVMbu8nREEX2YBaRnxTJUlicvculceDloq6cGaw/640?wx_fmt=jpeg)

图 4  公路车道线检测框图

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3DTuSryngmwxcctqicQ6j0QvwgVicOL6SxJIWYC4baK4OqVTROS3XDNvw/640?wx_fmt=jpeg)

图 8  车道线测试效果

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3Y9u8iaIP0Uqq2Yr53721Njp2bgkuqTzCsOMNbbLsPBuw7NZwSKfysVg/640?wx_fmt=png)

**崔文靓**

哈尔滨理工大学电气与电子工程学院硕士研究生. 主要研究方向为目标检测与计算机视觉.

E-mail: cuiwliang@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3FKdFfIfhz2prhNKcK0esC5nzDkhnZN9XMYicgqibNL7wGX4jaTsnJJSw/640?wx_fmt=png)

**王玉静**

哈尔滨理工大学电气与电子工程学院副教授. 2015年获哈尔滨工业大学博士学位. 主要研究方向为非平稳信号处理, 故障诊断, 状态评估与预测技术, 模式识别.

E-mail: mirrorwyj@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3ocTHuBUra5u4ibfMUxOtROr2GtX6ficfZ5P0HiaCok82eNkTV6JAynEVg/640?wx_fmt=png)

**康守强**

哈尔滨理工大学电气与电子工程学院教授. 2011年获得白俄罗斯国立大学博士学位.主要研究方向为非平稳信号处理, 故障诊断, 状态评估与预测技术, 模式识别.

E-mail: kangshouqiang@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3pZ2L4uddu6H6ZQUibzCjI1jJb5TH1NxAulcwSnGLJwHQP86mdibchYpg/640?wx_fmt=png)

**谢金宝**

哈尔滨理工大学电气与电子工程学院副教授. 2012年获得白俄罗斯国立大学博士学位.主要研究方向为计算机视觉和自然语言处理.

E-mail: xjbpost@163.com

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3y0j5frGNMXGcJa8BBiaBemFpaUOEup29Ey7sqibhzBTn1bf8fXA5H7JQ/640?wx_fmt=png)

**王庆岩**

哈尔滨理工大学电气与电子工程学院讲师. 2018年获得哈尔滨工业大学工学博士学位.主要研究方向为图像处理与模式识别, 遥感图像处理. 本文通信作者.

E-mail: wangqy@hrbust.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk32c0ualW3IPxicFzEiaD7DfEcTKhic39Y9alMmTh53iaiaqRfRTSewBmp0cA/640?wx_fmt=png)

**MIKULOVICH Vladimir Ivanovich**

白俄罗斯国立大学教授. 1975年获白俄罗斯国立大学博士学位.主要研究方向为非平稳信号处理, 故障诊断、状态评估与预测技术, 模式识别.

E-mail: falcon@tut.by

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  田娟秀, 刘国才, 谷珊珊, 鞠忠建, 刘劲光, 顾冬冬. 医学图像分析深度学习方法研究与挑战. 自动化学报, 2018, 44(3): 401-424. doi: 10.16383/j.aas.2018.c170153

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170153?viewType=HTML

  

\[2\]  李文英, 曹斌, 曹春水, 黄永祯. 一种基于深度学习的青铜器铭文识别方法. 自动化学报, 2018, 44(11): 2023-2030. doi: 10.16383/j.aas.2018.c180152

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180152?viewType=HTML

  

\[3\]  吕承侃, 沈飞, 张正涛, 张峰. 图像异常检测研究现状综述. 自动化学报. doi: 10.16383/j.aas.c200956

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200956?viewType=HTML

  

\[4\]  刘小波, 刘鹏, 蔡之华, 乔禹霖, 王凌, 汪敏. 基于深度学习的光学遥感图像目标检测研究进展. 自动化学报, 2021, 47(9): 2078-2089. doi: 10.16383/j.aas.c190455

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190455?viewType=HTML

  

\[5\]  陈文帅, 任志刚, 吴宗泽, 付敏跃. 基于深度学习的极性电子元器件目标检测与方向识别方法. 自动化学报, 2021, 47(7): 1701-1709. doi: 10.16383/j.aas.c190037

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190037?viewType=HTML

  

\[6\]  陶显, 侯伟, 徐德. 基于深度学习的表面缺陷检测方法综述. 自动化学报, 2021, 47(5): 1017-1034. doi: 10.16383/j.aas.c190811

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190811?viewType=HTML

  

\[7\]  姚足, 龚勋, 陈锐, 卢奇, 罗彬. 面向行人重识别的局部特征研究进展、挑战与展望. 自动化学报, 2021, 47(12): 2742-2760. doi: 10.16383/j.aas.c190821

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190821?viewType=HTML

  

\[8\]  卫星, 李佳, 孙晓, 刘邵凡, 陆阳. 基于混合生成对抗网络的多视角图像生成算法. 自动化学报, 2021, 47(11): 2623-2636. doi: 10.16383/j.aas.c190743

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190743?viewType=HTML

  

\[9\]  李佳星, 赵勇先, 王京华. 基于深度学习的单幅图像超分辨率重建算法综述. 自动化学报, 2021, 47(10): 2341-2363. doi: 10.16383/j.aas.c190859

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190859?viewType=HTML

  

\[10\]  蒋方玲, 刘鹏程, 周祥东. 人脸活体检测综述. 自动化学报, 2021, 47(8): 1799-1821. doi: 10.16383/j.aas.c180829

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180829?viewType=HTML

  

\[11\]  许玉格, 钟铭, 吴宗泽, 任志刚, 刘伟生. 基于深度学习的纹理布匹瑕疵检测方法. 自动化学报. doi: 10.16383/j.aas.c200148

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c200148?viewType=HTML

  

\[12\]  陈小鼎, 盛常冲, 匡纲要, 刘丽. 唇读研究进展与展望. 自动化学报, 2020, 46(11): 2275-2301. doi: 10.16383/j.aas.c190531

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190531?viewType=HTML

  

\[13\]  李良福, 马卫飞, 李丽, 陆铖. 基于深度学习的桥梁裂缝检测算法研究. 自动化学报, 2019, 45(9): 1727-1742. doi: 10.16383/j.aas.2018.c170052

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c170052?viewType=HTML

  

\[14\]  陈加, 张玉麒, 宋鹏, 魏艳涛, 王煜. 深度学习在基于单幅图像的物体三维重建中的应用. 自动化学报, 2019, 45(4): 657-668. doi: 10.16383/j.aas.2018.c180236

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180236?viewType=HTML

  

\[15\]  罗浩, 姜伟, 范星, 张思朋. 基于深度学习的行人重识别研究进展. 自动化学报, 2019, 45(11): 2032-2049. doi: 10.16383/j.aas.c180154

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180154?viewType=HTML

  

\[16\]  刘丽, 赵凌君, 郭承玉, 王亮, 汤俊. 图像纹理分类方法研究进展和展望. 自动化学报, 2018, 44(4): 584-607. doi: 10.16383/j.aas.2018.c160452

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c160452?viewType=HTML

  

\[17\]  陈伟宏, 安吉尧, 李仁发, 李万里. 深度学习认知计算综述. 自动化学报, 2017, 43(11): 1886-1897. doi: 10.16383/j.aas.2017.c160690

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160690?viewType=HTML

  

\[18\]  罗建豪, 吴建鑫. 基于深度卷积特征的细粒度图像分类研究综述. 自动化学报, 2017, 43(8): 1306-1318. doi: 10.16383/j.aas.2017.c160425

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160425?viewType=HTML

  

\[19\]  张慧, 王坤峰, 王飞跃. 深度学习在目标视觉检测中的应用进展与展望. 自动化学报, 2017, 43(8): 1289-1305. doi: 10.16383/j.aas.2017.c160822

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c160822?viewType=HTML

  

\[20\]  尹宏鹏, 陈波, 柴毅, 刘兆栋. 基于视觉的目标检测与跟踪综述. 自动化学报, 2016, 42(10): 1466-1489. doi: 10.16383/j.aas.2016.c150823

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150823?viewType=HTML

  

\[21\]  邱茂林, 马颂德, 李毅. 计算机视觉中摄像机定标综述. 自动化学报, 2000, 26(1): 43-55.

http://www.aas.net.cn/cn/article/id/14697?viewType=HTML

  

\[22\]  徐文立. 计算机视觉的PNP问题的最优解. 自动化学报, 1992, 18(5): 522-531.

http://www.aas.net.cn/cn/article/id/14441?viewType=HTML

  

  

**近期文章**

[一种基于改进AOD-Net的航拍图像去雾算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651078165&idx=1&sn=092f00bc0dba34c5fd7c160e233ee480&chksm=8131f458b6467d4e9899392d597abb82989303551eae58bd4b9ef5580623abe046b273fbdbb3&scene=21#wechat_redirect)

[基于多级动态主元分析的电熔镁炉异常工况诊断](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651078165&idx=2&sn=8d9a1a97361f5aea0655ef0bad114d5d&chksm=8131f458b6467d4e7b8185944175b5670bf21736d9ace23f32c73febef9b17de59f87795ad2d&scene=21#wechat_redirect)

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

[《自动化学报》多名作者入选爱思唯尔2021中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651076637&idx=1&sn=ee78f108cf0551024cb95c33241a5f1d&chksm=8131f250b6467b46c8d4af1bd63381328a80c65ade97a6daa97e3bb4538b39c6f761da238066&scene=21#wechat_redirect)

[自动化学报（英文版）和自动化学报入选计算领域高质量科技期刊T1类](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073859&idx=2&sn=7a9192717637dcf6cddb39ed961e8c3b&chksm=8131e70eb6466e188a123c504bdeba80c75681de4762f8685b3bf584bc33eb12362c70613b4e&scene=21#wechat_redirect)

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

  

**期刊目录**

[2022年第05期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962842&idx=1&sn=b91e3ab1206e29fdb9287ebbf7b07638&chksm=f2943d1bc5e3b40d9447d720203aca6ca2ae6662b85e3d9d5768c2da45df90cc31e49f895255&scene=21#wechat_redirect)

[2022年第04期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649962369&idx=1&sn=ae2c4584f8904be917b600e67005ae03&chksm=f29433c0c5e3bad6d78382b3c09015aadb09e040b8fc8c319c4f554fd592fe677797000340cd&scene=21#wechat_redirect)

[2022年第03期](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651075527&idx=1&sn=bc020c5fd09080243f7527610b003507&chksm=8131f98ab646709c2f485852b526989a3b9af5cc93e8afb508d9239b78176f49caa9807d6a8d&scene=21#wechat_redirect)

[2022年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961838&idx=1&sn=29334896aa0f372b70312250c75b6b20&chksm=f294312fc5e3b8392ffd49100eaba435bf48fa9234c5019fe7b16ed1e4ebef70be58691f3fb3&scene=21#wechat_redirect)

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3T8UsezPy6AicZyDSfquZ9CJQ1KLyrjdFkAMxvPHxtlwEW4jYWtvenBg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3OwMpmiaO3RdcdXBlktMbWV8Gyr7cZkfZy0tXSnicx8xbehnPmVMw6evQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3d5Z6BbQQpuUMvKZ1M8gqo3cgCWzCZup5AoFNQ6LV3Btib5Wj2PcymRA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3nl2G37Y2vZfaictcxAgbRZsODZibuHQEBrlPAEB3quekDowyMRJMxK3Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3SvqRaE6dmu0ict67Kg0ibQy0EkRJ1XoIIQtZl20BFQdUicrmP2LChYRYQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44uxkMgWricgHymOkpicTyFk3j8x71LIdJAq0jbX0Oz1tYZRpGlQ81WXnNHacd55OLeI0GSkhc9kN5A/640?wx_fmt=gif)

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