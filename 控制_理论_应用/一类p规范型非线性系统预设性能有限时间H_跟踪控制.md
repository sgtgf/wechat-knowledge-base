# 一类p规范型非线性系统预设性能有限时间H∞跟踪控制

原创 自动化学报 自动化学报 2022-05-24 16:48 北京

> 原文地址: [https://mp.weixin.qq.com/s/uP-4cATP75pYI9vmDrmOAA](https://mp.weixin.qq.com/s/uP-4cATP75pYI9vmDrmOAA)

**点击蓝字|关注我们**

  

**引用本文**

  

李小华, 胡利耀. 一类p规范型非线性系统预设性能有限时间H∞跟踪控制. 自动化学报, 2021, 47(12): 2870−2880 doi: 10.16383/j.aas.c190116

Li Xiao-Hua, Hu Li-Yao. Prescribed performance finite-time H∞ tracking control for a class of p-normal form nonlinear systems. Acta Automatica Sinica, 2021, 47(12): 2870−2880 doi: 10.16383/j.aas.c190116

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190116?viewType=HTML

  

**文章简介**

  

**关键词**

  

p规范型非线性系统, 预设性能, 有限时间性能函数, H∞跟踪控制, 神经网络自适应技术

  

**摘   要**

  

针对一类带有外部扰动的非严格反馈p规范型非线性系统, 在一种新的预设性能控制思想的基础上, 结合加幂积分技术、H∞控制理论及神经自适应技术, 提出了一种自适应神经预设性能有限时间H∞跟踪控制器的设计方法. 所设计的控制器能够保证系统的跟踪误差被有限时间性能函数约束, 并在任意给定的停息时间内收敛到平衡点的一个预先给定的邻域内, 且能够抑制外部扰动对系统的影响. 特别地, 该停息时间与系统初始状态无关. 两个仿真例子验证了所设计控制器的有效性和优越性.

  

**引   言**

  

近几年, 凭借快速的收敛性和较强的鲁棒性, 有限时间控制方法已经成为控制理论研究的热点, 并且已经获得了许多的研究成果. 其中, 有一类文献针对有限时间跟踪控制问题进行了研究. 文献\[6\]针对一个五阶移动机器人系统采用Backstepping技术设计了系统的有限时间跟踪控制器, 使得系统的跟踪误差在有限时间内收敛到平衡点; 文献\[7\]利用加幂积分技术, 研究了空间飞行器的有限时间跟踪控制问题; 在文献\[8\]中, 作者利用齐次域方法, 解决了四旋翼飞行器的有限时间跟踪控制问题. 但是对于p规范型非线性系统, 很少有文章研究其有限时间跟踪控制问题. 经查找仅有文献\[9\]结合加幂积分技术和凸组合方法, 针对一类切换p规范型非线性系统设计了一个状态反馈跟踪控制器, 该跟踪控制器能够保证系统的跟踪误差在有限时间内收敛到平衡点的小的邻域内. 但是上述方法均不能保证系统跟踪误差的整个暂态过程被限制在一个给定的范围内, 而跟踪误差波动太大对实际系统而有一定风险的. 并且, 大多数文献中的系统停息时间均与初始状态有关.

  

因为预设性能控制方法能够同时兼顾到系统的暂态和稳态性能, 所以国内外许多专家学者对此进行了大量的研究. 然而, 目前大多数关于预设性能的控制方法均存在一个共性问题, 即在对系统进行误差转换时已设定了该误差的有界性, 然后再去证明它的有界性, 这是不合理的. 而文献\[14\]提出一种新的误差转换函数, 在解决预设性能控制问题时不需要提前设定误差的有界性, 从而避免了该共性问题. 但该方法只能保证系统在t→∞时系统状态误差收敛到平衡点的一个小的邻域内, 对于解决一类对收敛时间要求较高的控制问题时不太理想. 为此, 文献\[15\]将预设性能控制方法和有限时间控制方法相结合, 提出了一种有限时间性能函数, 并利用所提出的性能函数, 设计了一类非严格反馈非线性系统的有限时间跟踪控制器, 该控制器能够保证系统的跟踪误差在任意给定的时间内收敛到平衡点的一个预先给定的邻域内, 并且停息时间与系统的初始状态无关. 然而, 该设计方法仍然存在预设性能的共性问题. 并且文献\[14-15\]只考虑了系统的幂p = 1的情况. 而我们知道, 许多实际的系统是p规范型形式的非线性系统, 其系统的幂p ≠ 1, 例如欠驱动弱耦合的机械系统等, 文献\[14-15\]给出的方法不能直接用于这类p规范型系统中, 且它们也没有考虑外部扰动对系统的影响.

  

对于系统的外部扰动可以采用H∞控制方法来抑制其影响. 该方面的成果已有许多. 其中有一些成果是针对于非线性系统的H∞控制问题. 特别有文献\[22\]对一类严格反馈非线性系统设计了有限时间H∞控制器, 但该H∞控制器是在系统为渐近稳定的前提下得到的, 对于只能满足有界稳定的系统, 该设计方法是失效的. 应该说明的是, 目前还没有关于p规范型非线性系统的H∞控制的研究报道.

  

本文基于预设性能控制方法, 结合加幂积分技术、H∞控制方法以及神经网络自适应技术, 针对于一类带有外部扰动的非严格反馈pp规范型非线性系统设计了一个自适应神经预设性能有限时间H∞控制器, 该控制器能够保证被控系统的跟踪误差在任意给定的停息时间内收敛到平衡点的一个预先给定的邻域内, 系统是实际有限时间稳定的, 并且跟踪误差始终在有限时间性能函数约束的范围内, 同时外部扰动对系统的影响能够被抑制.

  

本文的主要贡献为: 

  

1)首次考虑了一类带有外部扰动的非严格反馈p规范型非线性系统的预设性能有限时间H∞控制问题, 并且首次将有限时间性能函数和加幂积分器技术相结合; 

  

2)由于外部扰动及系统的高次幂的影响, 文献\[14\]中所提出的预设性能方法并不能直接应用. 为了避免预设性能控制方法存在的共性问题, 本文基于文献\[14\]中的思想, 提出一种新的预设性能控制器的设计方法. 该方法亦避免了该共性问题; 

  

3)不同于文献\[22\], 本文解决了非线性系统为有界稳定时设计H∞控制器的困难; 

  

4)与文献\[14-15\]相比, 系统的幂p被放宽到奇整数之比的形式; 并且考虑了系统带有外部扰动的情况.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH474Rsrt4ql6hLy844miam5OjgqMWk4kIjARfQyOt4adjicBWDrvvQIju7kNxtK3MoCmd2Td0ohia0qXw/640?wx_fmt=jpeg)

图 3  无外部扰动时状态x\_1

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH474Rsrt4ql6hLy844miam5OjOHkIRdbaT3ZCibmNyFZthYtr44clOfucWeqic1Ws6qGblpJLVQIGaL9A/640?wx_fmt=jpeg)

图 6  存在外部扰动时状态x\_1

  

请点击左下角“**阅读原文**”了解更多！

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH474Rsrt4ql6hLy844miam5Ojdymfft7VzpiafmRn4TYibHzHG98UeCBicDlyE0Mh5YUyaicSp6CwRVnuug/640?wx_fmt=jpeg)

**李小华**

辽宁科技大学电子与信息工程学院教授. 主要研究方向为复杂系统结构与控制, 非线性控制理论与应用, 工业过程建模与控制. 本文通信作者.

E-mail: lixiaohua6412@163.com

**胡利耀**

辽宁科技大学电子与信息工程学院硕士研究生. 主要研究方向为非线性系统控制, 有限时间控制.

E-mail: huliyao1995@163.com

  

**相关文章**

**（请向上滑动阅读）**

  

\[1\]  耿志勇. 基于庞特里亚金极小值原理的多运载体有限时间编队控制. 自动化学报, 2017, 43(1): 40-59. doi: 10.16383/j.aas.2017.c150537

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c150537?viewType=HTML

  

\[2\]  陆国平, 郑毓蕃. 一类非线性不确定系统的鲁棒H∞控制. 自动化学报, 1999, 25(3): 388-392

http://www.aas.net.cn/article/id/16694?viewType=HTML

  

\[3\]  柴琳, 费树岷, 辛云冰. 一类带未知输入时滞的多时滞非线性系统的对时滞参数的自适应H∞控制. 自动化学报, 2006, 32(2): 237-245

http://www.aas.net.cn/article/id/15800?viewType=HTML

  

\[4\]  陈正升, 程玉虎, 王雪松. 考虑输出约束的冗余驱动绳索并联机器人预设性能控制. 自动化学报. doi: 10.16383/j.aas.c210949

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210949?viewType=HTML

  

\[5\]  王璐, 郭毓, 吴益飞. SGCMGs驱动的挠性航天器有限时间自适应鲁棒控制. 自动化学报, 2021, 47(3): 641-651. doi: 10.16383/j.aas.c180446

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c180446?viewType=HTML

  

\[6\]  戈萌, 宋琦, 胡鑫睿. 高速列车非线性系统的分数阶有限时间控制器设计. 自动化学报, 2021, 47(7): 1672-1678. doi: 10.16383/j.aas.c190208

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c190208?viewType=HTML

  

\[7\]  王桐, 邱剑彬, 高会军. 随机非线性系统基于事件触发机制的自适应神经网络控制. 自动化学报, 2019, 45(1): 226-233. doi: 10.16383/j.aas.2018.c180404

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180404?viewType=HTML

  

\[8\]  张国庆, 黄晨峰, 吴晓雪, 张显库. 考虑伺服系统增益不确定的船舶动力定位自适应有限时间控制. 自动化学报, 2018, 44(10): 1907-1912. doi: 10.16383/j.aas.2017.c170111

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2017.c170111?viewType=HTML

  

\[9\]  杨晨, 程盈盈, 都海波, 王金平, 何怡刚. Buck型变换器自适应有限时间降压控制算法研究. 自动化学报, 2016, 42(2): 315-320. doi: 10.16383/j.aas.2016.c150446

http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2016.c150446?viewType=HTML

  

\[10\]  齐丽强, 孙明轩, 管海娃. 非参数不确定系统的有限时间迭代学习控制. 自动化学报, 2014, 40(7): 1320-1327. doi: 10.3724/SP.J.1004.2014.01320

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.01320?viewType=HTML

  

\[11\]  耿宝亮, 胡云安, 李静, 赵永涛. 控制增益为未知函数的不确定系统预设性能反演控制. 自动化学报, 2014, 40(11): 2521-2529. doi: 10.3724/SP.J.1004.2014.02521

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2014.02521?viewType=HTML

  

\[12\]  吴泽伟, 吴晓锋. 基于有限时间系统同步的自治水下航行器回收控制. 自动化学报, 2013, 39(12): 2164-2169. doi: 10.3724/SP.J.1004.2013.02164

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2013.02164?viewType=HTML

  

\[13\]  王宏霞, 张焕水. 有限时间域的H∞预演控制. 自动化学报, 2010, 36(2): 327-331. doi: 10.3724/SP.J.1004.2010.00327

http://www.aas.net.cn/cn/article/doi/10.3724/SP.J.1004.2010.00327?viewType=HTML

  

\[14\]  石宇静, 柴天佑. 基于神经网络与多模型的非线性自适应广义预测控制. 自动化学报, 2007, 33(5): 540-545. doi: 10.1360/aas-007-0540

http://www.aas.net.cn/cn/article/doi/10.1360/aas-007-0540?viewType=HTML

  

\[15\]  陈为胜, 李俊民. 未知输出反馈非线性时滞系统自适应神经网络跟踪控制. 自动化学报, 2005, 31(5): 799-803.

http://www.aas.net.cn/cn/article/id/15959?viewType=HTML

  

\[16\]  黎明, 张化光, 王成红. 基于T-S模糊性能评估器的非线性系统跟踪控制器设计. 自动化学报, 2004, 30(4): 578-582.

http://www.aas.net.cn/cn/article/id/16287?viewType=HTML

  

\[17\]  张天平. 基本积分型李亚普诺夫函数的直接自适应神经网络控制. 自动化学报, 2003, 29(6): 996-1001.

http://www.aas.net.cn/cn/article/id/16336?viewType=HTML

  

\[18\]  孙富春, 孙增圻, 慕春棣. 采样非线性系统的动态神经网络稳定自适应控制. 自动化学报, 2000, 26(6): 721-728.

http://www.aas.net.cn/cn/article/id/16588?viewType=HTML

  

\[19\]  佟绍成, 李庆国, 柴天佑. 基于神经网络的一类非线性系统自适应输出跟踪. 自动化学报, 2000, 26(3): 296-302.

http://www.aas.net.cn/cn/article/id/14737?viewType=HTML

  

\[20\]  戴宪华. 基于神经网络模型的最小预测误差非线性自适应控制器. 自动化学报, 1999, 25(4): 504-508.

http://www.aas.net.cn/cn/article/id/16666?viewType=HTML

  

\[21\]  戴宪华. 基于信息几何的统计回馈神经网络非线性自适应预测控制. 自动化学报, 1999, 25(5): 640-646.

http://www.aas.net.cn/cn/article/id/16642?viewType=HTML

  

\[22\]  孙富春, 孙增圻, 张戎军. 采样非线性系统的神经网络稳定自适应控制. 自动化学报, 1996, 22(6): 648-656.

http://www.aas.net.cn/cn/article/id/17099?viewType=HTML

  

\[23\]  王正志. 用于非线性动力系统控制问题的自组织神经网络自适应方法. 自动化学报, 1993, 19(6): 678-683.

http://www.aas.net.cn/cn/article/id/14171?viewType=HTML

  

**近期文章**

  

[基于自注意力模态融合网络的跨模态行人再识别方法研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077831&idx=1&sn=6a76db27f4c8f0f1b96e5b8c6771abeb&chksm=8131f68ab6467f9cd2a0f82cc7756e0501991992475ef16d1eadb77b3fb27ff72ec26342d4ae&scene=21#wechat_redirect)

[基于多相关HMT模型的DT CWT域数字水印算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077831&idx=2&sn=2c167c0a7155779ce961509e8dbedc79&chksm=8131f68ab6467f9cedcba9c6fce9d8d2fd00a89ec6f06c26b258aec8e9d98086ebd5d4d4ab14&scene=21#wechat_redirect)

[基于多阶运动参量的四旋翼无人机识别方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=1&sn=587115a6ffee6f33a5113a392bafd18e&chksm=8131f6cab6467fdc113dfc124638e9f0c73bfc2cc606025b4bc5c630bd6c5569b8948c3a2bad&scene=21#wechat_redirect)

[通信延时环境下异质网联车辆队列非线性纵向控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077767&idx=2&sn=d497bd4b45545cdc7584e9c9568ef4e0&chksm=8131f6cab6467fdc01f675bd4ea8b4823af1ff46862041b55d3b58ce8903265b6efd60bbc281&scene=21#wechat_redirect)

[图像异常检测研究现状综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=1&sn=2535d4c0961f79a4e6e28fcec08d2fed&chksm=8131f675b6467f63e42dec407492be9cccdbf245e71dd2cd84b1d4af8072250b8b9f0f01329c&scene=21#wechat_redirect)

[一种面向散乱点云语义分割的深度残差−特征金字塔网络框架](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077688&idx=2&sn=215768980627e71df84a39bb85729db9&chksm=8131f675b6467f63c4393a4fce391e67237c29928058a3e2dfd5971800e636c3baa090fb4dba&scene=21#wechat_redirect)

[迭代学习模型预测控制研究现状与挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077623&idx=1&sn=1d8a9d2a39cab773fd8b49e8e73c55fd&chksm=8131f1bab64678ac33f4512961aa95fe90d40e9dbd6c4e13cad77295f4940b6aef050700caac&scene=21#wechat_redirect)

[《自动化学报》2022年48卷5期目录分享](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077579&idx=1&sn=d2cf8dfd19e4104f5958b4ad6356239d&chksm=8131f186b6467890faae7fb5e1bdb23ca54b21a631ce9c32c47dc615ff926149628b9bf9b64b&scene=21#wechat_redirect)

[基于多节点拓扑重叠测度高阶MRF模型的图像分割](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077552&idx=1&sn=c40ec0d4fa5686c5221844003ead45de&chksm=8131f1fdb64678eb229154ac8f5cf5166c6a0bac57e1f50b65d7eba7e99778e2f7d80fb7547b&scene=21#wechat_redirect)

[基于分布式有限感知网络的多伯努利目标跟踪](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077514&idx=1&sn=ca1172c74ab9e32db9bca7c66082fee8&chksm=8131f1c7b64678d1129b3d8832fe3670fdde3ed267c0f98f178110b649b4042c8c903b2f673f&scene=21#wechat_redirect)

[一类非线性系统模糊自适应固定时间量化反馈控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077514&idx=2&sn=eb7906d16b1727ef482e6bf319f0a7e1&chksm=8131f1c7b64678d1c5a98c4614c347fee33b2d2498c76d1e5c950fce2cc304317670650273ee&scene=21#wechat_redirect)

[基于凸近似的避障原理及无人驾驶车辆路径规划模型预测算法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077442&idx=1&sn=432dd266dbf5c99ca845248bb09df5c1&chksm=8131f10fb646781977984ae605369c8004b7c57f61747a28c49813698802554d4a11047abea0&scene=21#wechat_redirect)

[多级注意力传播驱动的生成式图像修复方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077391&idx=1&sn=0e34736530d8ef540b4abaa08362a0bf&chksm=8131f142b6467854f8396d0ea54b34946bbe5fb78f29a281271dab33867ae129a5b401c36277&scene=21#wechat_redirect)

[一种噪声容错弱监督矩阵补全的生存分析方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077391&idx=2&sn=b84c8750f960526618606c0b97e56d06&chksm=8131f142b6467854d25b0873e4bcb1b30dd5c1ee99db58bbd7b6d5ea5109e868878d7ee1689d&scene=21#wechat_redirect)

[通信受限的多智能体系统二分实用一致性](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651077321&idx=1&sn=02d81030a428cbb4275f4ff076068f08&chksm=8131f084b646799235c36b924d470f26f4e4da762c08d57e951613e4f74a57febdc8c03777c9&scene=21#wechat_redirect)

  

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

  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH474Rsrt4ql6hLy844miam5OjQojcRM2yTFk2oc0HKkVEnFeeRCAayIJDVE4Tf6hZYCFHYVdQoozocg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH474Rsrt4ql6hLy844miam5OjFFx8fVsWw9VBak6tfl2hZoBEzibrARZibJicJQHywhoVxJibicuDEMRZxkg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH474Rsrt4ql6hLy844miam5Ojq0NbknH2SvwGfF0ib2jbK023rpdkQnyMMicmmTT5kUqe8fxPf9025YmQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH474Rsrt4ql6hLy844miam5OjB4wuJ9b0CR9jS4RRO9vEicyhG0xhNYzUvXw01sqqXYm44mricEmf17xg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH474Rsrt4ql6hLy844miam5Ojib47JbFZ6ibhtVRHoteiaMqq770R6wAeRv7SQOGt8DxSq0P2avVgTTgYw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH474Rsrt4ql6hLy844miam5Oj0aibsAI6zzJteAib0HiabtcIn0LXjz6gLA3vbqLvUODM09auSQVRhqGsw/640?wx_fmt=gif)

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