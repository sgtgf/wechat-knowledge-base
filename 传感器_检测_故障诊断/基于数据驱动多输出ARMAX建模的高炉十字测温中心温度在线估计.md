# 基于数据驱动多输出ARMAX建模的高炉十字测温中心温度在线估计

原创 自动化学报 2018-05-02 18:56 北京

> 原文地址: [https://mp.weixin.qq.com/s/tLHTCdIF-m8I-gMi63wuyw](https://mp.weixin.qq.com/s/tLHTCdIF-m8I-gMi63wuyw)

高炉生产中，炉顶煤气在高炉内的分布直接反映了煤气热能和化学能的利用情况，因而影着高炉能耗水平和生产成本。然而，高炉是一大型密闭反应器，且内部生产条件过于严酷，如高温高压，固、液、气三相混合和多场耦合交错，使得高炉操作人员无法直接观测炉内煤气流的分布及其状态变化。近年来，图1所示十字测温装置在无钟布料高炉得到了广泛应用，它能连续准确地测出炉喉径向的煤气流温度分布。由于温度高的地方煤气流旺盛，因而十字测温装置可有效监测高炉炉顶煤气流的分布状况。十字测温装置位于高炉炉喉位置，并在炉喉圆周面上的东北、西北、西南、东南方向安装四个测温臂，每个测温壁分布有不等的温度传感器(如热电偶)，一般共有17~21个测温传感器。这些测温点能够提供实时温度数据，可比较全面地反映煤气流在炉喉圆周方向上的分布，使操作者直观地观察到煤气的变化，为及时准确地进行高炉布料制度调节和热风与喷煤调节提供了可靠依据，同时还避免因煤气取样分析滞后和不全面给高炉操作带来的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMC4Dn4aPOpe3dNg2gEkJWkria6RFBKiaH9jezDaryN4CdmdYIhm9E4hyw/640?wx_fmt=gif)

图1 高炉炼铁过程与十字测温装置

从图1十字测温装置21个测温点实时温度分布图可以看出中心五点5、6、15、16、17温度相对较高，对传感器的耐高温性要求较高，因而寿命较短且容易损坏。另外，十字测温装置安装在密闭的高炉筒体顶部，其中高温高压和多相多场耦合并行，粉尘与高温煤气密布，运行环境极为恶劣。因此，十字测温装置传感器损坏时不能及时进行维护，必须等到大周期(一般半年一次)的高炉检修才能进行传感器的更换。显然，这给高炉操作人员判断煤气分布带来影响，并且将大大影响操作员基于十字测温装置的各种操作和决策。因此，建立十字测温中心温度点的估计模型可以有效解决由传感器损坏带来的各种不利影响。

我们从实际工程应用的角度出发，致力于建立一种模型结构简单、精度较高且易于工程实现的十字测温中心温度在线估计方法。从面向在线估计或软测量的建模角度来看，建立十字测温中心点温度估计模型需要解决如下几方面的问题：

**问题1**：如何从众多影响因素中选择有效、可靠且简洁的建模输入变量；

**问题2**：如何对高炉实际数据进行预处理，以得到高质量的建模数据；

**问题3**：如何采用有效并且易于实际工程实现的建模算法来进行温度估计模型的建立。

我们针对问题1，提出将数据降维因子分析和稳健Pearson相关分析的Filter特征选择方法相集成，综合选取模型输入变量。首先，采用因子分析方法预处理输出变量，提取最大主因子，然后分析主因子与高炉关键过程变量的相关关系，进而选出模型输入变量；针对问题2，从高炉实际数据出发，基于时间序列建模思想，用样本均值消去法去除高炉数据趋势项提取其随机分量并对随机分量建模；针对问题3，提出算法结构简单的多输出ARMAX建模算法，并用赤池信息准则(AIC)结合拟合优度指标函数选取模型最优阶次，之后运用收敛速度快的在线RLS算法辨识模型参数，同时采用残差分析方法评价所建模型性能。

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMkCjHf7YKdrFfu36J0SaBcvESIXUDicStCI2iaEZ9OuajKzibQGbt7lcVg/640?wx_fmt=jpeg)

图2 研制的十字测温中心温度估计软件系统

考虑到十字测温中心五点的温度不仅与输入变量有依存关系，还与其自身历史数据存在时序上的相关关系，同时考虑高炉内部随机干扰的存在，为此选用简单有效的ARMAX时间序列建模技术来建立十字测温中心五点的动态温度模型。由于温度模型输出为中心5点温度，并且炉喉中心5点温度输出变量之间也具有相关性，因此建模还需考虑输出变量之间的相关关系。为此，建立多输出ARMAX(M-ARMAX)十字测温中心五点温度模型。基于实际工业数据的实验和比较分析表明，相比于多输出支持向量机(M-SVM)算法、偏最小二乘回归(PLSR)算法、动态PLSR算法、BP神经网络算法，建立的基于M-ARMAX的十字测温中心温度模型简单有效，且具有较高的精度，可以很好地用于高炉实际生产，为高炉操作人员判断煤气流在炉喉分布和相关操作决策提供依据。所提方法已编制成软件系统应用于某钢铁厂2650m3高炉，如图2所示，可以方便、快捷地对十字测温装置中心温度进行在线估计，并且估计精度较高，能够满足日常生产与操作对十字测温监测的需求。

引用格式

周平, 刘记平. 基于数据驱动多输出ARMAX建模的高炉十字测温中心温度在线估计. 自动化学报, 2018, 44(3): 552-561.

作者简介

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMG5XAOlric4sCKBF5jFsFe4Xc7QEDXwxFVjvXaib1am1qXbTAy3eNoAMQ/640?wx_fmt=jpeg)

周平, 东北大学教授. 分别于2003 年、2006 年和2013 年获得东北大学学士、硕士和博士学位. 主要研究方向为工业过程运行反馈控制, 数据驱动建模与控制. 本文通信作者.

E-mail: zhouping@mail.neu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46EaicuyKC03XDIygaBcK6PM2f6fzr8jAqaOrg7zr42HxonlL356ZETNvVKS8E3MrSjQJiassBzStZg/640?wx_fmt=jpeg)

刘记平东北大学硕士研究生. 2015 年获得河南科技大学学士学位. 主要研究方向为数据驱动建模与控制, 机器学习算法. 

E-mail: m18842388402@163.com

自动化

学报

往期回顾

[李力、王飞跃丨地面交通控制的百年回顾和未来展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063851&idx=1&sn=ff9594bb4642f04f186496b3669a69f9&chksm=8131cc66b6464570fa0394005ed1890b718e908b593e2736c69f5d2ed9aee542aa825b1162b0&scene=21#wechat_redirect)  

[广义系统的有限频域故障估计器设计](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063846&idx=1&sn=1ff9c2859e07110af5be20bc520d11e6&chksm=8131cc6bb646457de4f4a4db8acdd39f67cb2a1d28056d5caf56bac11451dfe77ef8a8854e66&scene=21#wechat_redirect)  

[考虑多源不确定信息的路网交通拥堵状态辨识方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063838&idx=1&sn=ee2002b24210a7d3075b9ed93b9c88c8&chksm=8131cc53b6464545349f1ddd04a45c16838ad1260150fd63552db5054c901e8c38c6f120d316&scene=21#wechat_redirect)  

[基于超像素的均值-均方差暗通道单幅图像去雾方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063816&idx=1&sn=ac56f3b6a8167189edf006745ae52053&chksm=8131cc45b64645537e1fca68a9d7f97acdac2f36e6d79a432e9bad80c7b70ab2729fdcbc3a01&scene=21#wechat_redirect)  

[平行测量:复杂测量系统的一个新型理论框架及案例研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063809&idx=1&sn=8cf4b42640707f3c62512d6441bc49ea&chksm=8131cc4cb646455a43b7eefdca425959992845222d9260796e922b3dce8b7a2500e8c12f75b1&scene=21#wechat_redirect)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMVMdcKjnCcfJQsewFnLeNSgOodjoqqNyibBcylZAZVMRHRRRibGHhCr5Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMNiagpch37Qo377VnWboB8ib46vq34S9icLDWdFgVOpwWMABTvUPG2NSgg/640?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMVMdcKjnCcfJQsewFnLeNSgOodjoqqNyibBcylZAZVMRHRRRibGHhCr5Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46EaicuyKC03XDIygaBcK6PM9bibWbB3mVTkzB9uFiaHuqL3Lhc9FDZDcxRD22BJFG7lbpZlHBicvXzuA/640?wx_fmt=jpeg)

自动化学报服务号

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMVMdcKjnCcfJQsewFnLeNSgOodjoqqNyibBcylZAZVMRHRRRibGHhCr5Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46EaicuyKC03XDIygaBcK6PMFNwA2PYhTwsibiafCttlocAn0biaZHo72fCYqEeicQ1etNxrqNs7kjbXOw/640?wx_fmt=jpeg)

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