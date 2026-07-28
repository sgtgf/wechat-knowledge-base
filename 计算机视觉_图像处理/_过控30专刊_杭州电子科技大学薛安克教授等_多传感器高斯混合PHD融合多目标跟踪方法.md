# 【过控30专刊】杭州电子科技大学薛安克教授等：多传感器高斯混合PHD融合多目标跟踪方法

原创 自动化学报 2017-08-28 16:28 北京

> 原文地址: [https://mp.weixin.qq.com/s/P8Oj1Y7IrW8kOa5DUIPuLA](https://mp.weixin.qq.com/s/P8Oj1Y7IrW8kOa5DUIPuLA)

  

电影《异形：契约》（Alien：Covenant）中，主人公丹尼尔斯等一行人和生化人沃尔特乘坐着“契约号”飞船前往遥远的星系寻找殖民地，途中丹尼尔斯和沃尔特等人与 “普罗米修斯号（Prometheus）”号生还者之一大卫作战时，能实时跟踪到正在飞行的生化兽，并准确无误的打到生化兽。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLfQoIN8QEWo4pialjuZ0ne7c99TK6D1InebmibQSjFHy10DNJ6oSZTLVQ/0?wx_fmt=png)

同样，在现实中的导航、制导、监测和交通等诸多应用中，多目标跟踪是一类重要的问题，通常指如何利用传感器量测对观测空间中未知目标的数量和状态做出正确、连续的估计。多目标跟踪的相关技术得到了广泛且持续的研究。

面对更复杂的跟踪场景，单传感器技术的跟踪结果就遇到退化的风险。为了提高跟踪效果，我们在空间上采取多个传感器融合跟踪。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfL18r9N1iaHUppvo1O3hIG40aicxO5xQ1dyqUt6QlsTsiaibUrGj9p46lFwg/0?wx_fmt=png)

如图1所示，本文把反馈式多传感器PHD融合分成四个阶段，其一是由各传感器基于历史估计信息和本地观测对当前监测空域的PHD做出后验估计； 其二是融合中心收到并融合来自各传感器上传的局部后验PHD，形成全局后验PHD估计； 其三是融合中心基于全局PHD实现这一时刻多目标点迹和航迹估计结果； 其四是融合中心将下一时刻的全局PHD预测反馈给各传感器作为下一时刻的历史估计信息。针对文中提出的三种融合方法设置了四个场景，并对四个场景的实验结果进行了汇总。

引用格式

申屠晗, 薛安克, 周治利. 多传感器高斯混合PHD融合多目标跟踪方法. 自动化学报, 2017, 43(6): 1028-1037

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLkjicibkr9AhHVjfo4lYDpl8En5KchaZibxDzrvOpicCKFFx9bH6rw3GWKg/0?wx_fmt=jpeg)

申屠晗 杭州电子科技大学自动化学院讲师。主要研究方向为目标跟踪、反馈融合、信息融合。本文通信作者。

E-mail：hanshentu@hdu.edu.cn 

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLoLxl2F9aRUGYYarArvL1W2p1Q6P1rlCV3AWPpkLbLas2eWW3Jpfdxg/0?wx_fmt=jpeg)

薛安克 杭州电子科技大学教授。主要研究方向为信息融合、鲁棒控制、优化调度。

E-mail：akxue@hdu.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLqPWTe2FibzFNibgG4HTXXw5iaI53TLiboq0TjME2LLCdu5EuPkmgVRTwMg/0?wx_fmt=jpeg)

周治利 杭州电子科技大学自动化学院硕士研究生。主要研究方向为信息融合。

E-mail：zhouzhili517@163.com 

相关文章

[【过控30专刊】上海交大李少远教授等：切换非线性系统全局优化运行的经济预测控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063410&idx=1&sn=91db3500ed9b89799906d3b5ae2e33fb&chksm=8131ce3fb64647297627932ecce4bee035999b4034b0edb095aa0bd3efa19ba1cc107b6f7d3e&scene=21#wechat_redirect)

[【过控30专刊】沈自所于海斌研究员等：基于Bitmap的油水井采注优化实时推理引擎](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063400&idx=1&sn=4ff5ab8144b4d9503e46239bf1abf40f&chksm=8131ce25b646473345dd100430272a495ad8055f5809a73c93fc9a338a7a7b0120dda230374d&scene=21#wechat_redirect)

[【过控30专刊】浙江大学苏宏业教授等：不确定系统的鲁棒与随机模型预测控制算法比较研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063395&idx=1&sn=e27452a4e7d373d2a3bf00fd1ee829a2&chksm=8131ce2eb64647384fe3ba2de0ebe03f7dae940a9fc39a824d0bbf3f84d40a8ee9ad9f2614a5&scene=21#wechat_redirect)

[【过控30专刊】北交侯忠生等：间歇过程最优迭代学习控制的发展：从基于模型到数据驱动](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063373&idx=1&sn=1ce73721fe5aa1e45d242f30f8762b3f&chksm=8131ce00b646471602b78520a88623e154047fcb2847492a2b478291f4a797c1ead58acff3cd&scene=21#wechat_redirect)

[【过控30专刊】清华大学黄德先等：炼油工业过程控制的研究现状、问题与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063372&idx=1&sn=c0c62e23438d060bff5c889570e08373&chksm=8131ce01b6464717235952119d9b1b0478f3a51dbb2a1ad932357e49be1d7dea42e252265cca&scene=21#wechat_redirect)

[【过控30专刊】大连理工王伟等：基于数据的流程工业生产过程指标预测方法综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063371&idx=1&sn=4a42fb1026de1faa081b9edd7a388329&chksm=8131ce06b6464710d0ae27d1bbf9b657e51e1e5d8430f42fd068791a7bde48ee4921b003dfe7&scene=21#wechat_redirect)

[【过控30专刊】钱锋院士等：石油和化工行业智能优化制造若干问题及挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063353&idx=1&sn=5d3fdc2f3aa7085b28fc5dd4a971cdba&chksm=8131ce74b64647627f8f3c871d9bb9dad292ddf7dc21179e775a2355f9d07a445da0ada5b9f4&scene=21#wechat_redirect)

[【过控30专刊】有色冶金净化过程建模与优化控制问题探讨](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063347&idx=1&sn=9097bea0295181b288a33cf22fd4ea28&chksm=8131ce7eb6464768602f91c4679f19c15f2dc2caa1a434b73d49456a36094dacdd466b925be7&scene=21#wechat_redirect)

[中国过程控制会议30周年专刊序言](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063344&idx=1&sn=b477dfa31868e777660fa9b9bee8fd06&chksm=8131ce7db646476b2cdb21f959b240ffacb9e1a3f350790f4d44303713045d3b03e06fba704e&scene=21#wechat_redirect)  

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLNPQlL947JpPmlryCQicG1nVHhVREEMibkGslKxeibrVyyDB0VH2It2IlA/0?wx_fmt=gif)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfL0LHUFDtnicjdWQs09NIicMY7bd8bHZKAm9ZSSmySvO2tqdh1ibrjkowew/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLfcsRNKvCILDScvxgIX3Ixahl7vW7bpnWlBbqCsKHvATVic1VAHUFQkA/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfL0LHUFDtnicjdWQs09NIicMY7bd8bHZKAm9ZSSmySvO2tqdh1ibrjkowew/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLCHUFbG9xQq8gicgkqBmKlCoAicBK5P8LCfnfHAWHIibSh1uUpTY1s2MmA/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfL0LHUFDtnicjdWQs09NIicMY7bd8bHZKAm9ZSSmySvO2tqdh1ibrjkowew/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLUxvFgJgmX6JFVT8yHFA0DMfRREfr3OCEgC6yPbTdOE8IwzR0npiaOtA/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH449PVia3DrQdLPbNEvcBnjfLajwibWxbF9V3b6nakhQdagslZ4nJ2DHGRdtwHAia9xI11fJIiajaqtuWg/0?wx_fmt=png)

点击下方“阅读原文”查看更多