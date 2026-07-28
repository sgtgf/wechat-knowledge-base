# 基于MFD的城市区域过饱和交通信号优化控制

原创 自动化学报 2017-10-16 14:35 北京

> 原文地址: [https://mp.weixin.qq.com/s/Ql-hSv5UHyoZvufJY\_II0Q](https://mp.weixin.qq.com/s/Ql-hSv5UHyoZvufJY_II0Q)

请输入标题     bcdef

城市部分区域交通早晚高峰期间通行需求较大，而有限的道路资源条件短时间内无法满足所有的需求，如不进行有效的交通管控，将会逐步引起交通拥挤，甚至严重的堵塞，导致路网死锁现象的发生，致使区域交通通行能力和效率直线下降。

请输入标题     abcdefg

为了解决交通高峰时段城市区域路网过大的交通需求引起的路网通行效率下降，以及区域内部交通流分布的异质性产生的道路资源浪费等问题。本文提出了基于区域路网固有属性MFD(Macroscopic Fundamental Diagram)的过饱和区域控制优化模型，建立了边界控制信号和内部控制信号目标函数的双层规划优化，进一步设计了基于BP神经网络的ADP(Adaptive Dynamic Programming)模型对所建立的双层规划区域交通信号进行求解，实例仿真结果验证了本文方法的有效性。通过本文的研究分析，对城市区域交通的需求管控、拥堵政策制定等城市区域交通管理具有一定的指导意义。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKEVFICYdauVXjeA1rVgUabDmFRddDGMQvq5tJBWJW3V5usFAib1OeqAQ/0?wx_fmt=png)

图1 过饱和区域信号控制优化模型框架

基于闭环反馈控制系统迭代优化原则，设计过饱和区域信号控制优化模型框架如图1所示，其核心是MFD控制优化模型，该模型主要有三部分组成，即控制模块、优化模块和求解模块。其中，控制模块主要有两部分构成，一是区域边界需求控制，二是区域内部均衡控制；优化模块建立了双层规划优化目标，由以提升区域边界通行能力为控制目标的上层规划和以均衡区域内路段空间占有率为控制目标的下层规划构成，并包含路网交通实际运行条件的约束关系；求解模块以基于ADHDP结构的自适应动态规划(ADP)算法为基本求解方法，采用误差反传神经网络(BP神经网络)搭建其中的评价网络和执行网络部分。

过饱和区域信号控制优化模型的三个模块通过相互之间紧密的联合协作关系，不断对区域交通信号进行迭代优化，以逐步缓解交通拥堵现象，提升区域交通的通行效率。

引用格式

刘小明, 唐少虎, 朱凤华, 陈兆盟. 基于MFD的城市区域过饱和交通信号优化控制. 自动化学报, 2017, 43(7): 1220-1233

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKj3xjZVB3aEibnOydFdBgzKOG9GTTFnm8Mg5WPDKicgskfICQSJjVEVTQ/0?wx_fmt=jpeg)

刘小明 北方工业大学电气与控制工程学院教授. 主要研究方向为交通流理论和智能交通控制. 

E-mail: tslxm@sina.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKq9JkZGnnCsyXjNM6v5oFESicsXhK7ZPxIw0AeP8pQDriaCZicdOYibfX2Q/0?wx_fmt=jpeg)

唐少虎 北京城市系统工程研究中心助理研究员. 主要研究方向为城市韧性, 交通控制, 智能算法. 本文通信作者.

E-mail: tshaohu@163.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKg6w7v2M9AlV789Vz1E10hsktpTKWEuKaJPmulbswQib0d5cJj8eqtxg/0?wx_fmt=jpeg)

朱凤华 中国科学院自动化研究所副研究员. 主要研究方向为平行交通系统, 交通信号控制, 社会交通.

E-mail: fenghua.zhu@ia.ac.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRK902IbwOiayDCz7mM2QKcn1wrvJgMeUjCNIbnCSmlrzUMWlC4YjqYoUA/0?wx_fmt=jpeg)

陈兆盟 北方工业大学电气与控制工程学院助理研究员. 主要研究方向为交通信号控制, 智能交通信号控制器.

E-mail: chenzhaomeng@126.com

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKZLCafkb5oyFl7Kd840UicBMXN8IpDJW6dmmIpkWFRXWGVZAVCCNAMlg/0?wx_fmt=gif)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKE73pFTCIHR6cFgGFyyyg7bcnnjFtkzbYzecvT6qqicnnox8Zy9Bpw6Q/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKX8XR5FV0BTFlx0UDePt0oR49vPDYDiaEeO3q9EJDuzxvXgIMXqzdGvA/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKE73pFTCIHR6cFgGFyyyg7bcnnjFtkzbYzecvT6qqicnnox8Zy9Bpw6Q/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKI3nqbibGtvtcPIocqxnHPs4TwSV8wGJUTGGegqnlytDiawVN5r4VQGYw/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKE73pFTCIHR6cFgGFyyyg7bcnnjFtkzbYzecvT6qqicnnox8Zy9Bpw6Q/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46awFEOvDMAzBzwgfyh9FRKYtkzPzzwfRbWG50tDvxoOrxbAqefVKdgZZ04nKn4N18D1HeeLMicxOw/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

点

阅读原文了解更多