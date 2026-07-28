# 【过控30专刊】沈自所于海斌研究员等：基于Bitmap的油水井采注优化实时推理引擎

原创 自动化学报 2017-08-14 17:25 北京

> 原文地址: [https://mp.weixin.qq.com/s/cKTEcTrkgIUC5Iu9Zqsb7w](https://mp.weixin.qq.com/s/cKTEcTrkgIUC5Iu9Zqsb7w)

石油开采是我国重点能源行业，实现安全稳定开采有利于国家建设与社会稳定。随着新一代信息技术的发展，推动了数字油田的建设，未来智慧油田将成为提升油田开发效率、降低成本、提升竞争力的重要发展方向。

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89icT6638XCeibMI3paTganKPCA8lBrEfntCEx1zianb8vvAiaPoKz1We2mA/0?wx_fmt=jpeg)

大量工业物联网终端以及大数据平台在油田的部署，对物联网数据事件的实时处理与分析优化成为提升成为油田开发效率的重要手段。鉴于产生式推理引擎对人类经验融入的接口比较友好，但是在大量规则集和外部事件时匹配效率低下的问题，本文以提升事件与规则的匹配效率为出发点，通过对事件和规则进行基于Bitmap的编码，提升大数据事件与规则的匹配效率，并针对规则匹配过程中无效数据事件对推理引擎资源的占用问题提出了无效时间分组与处理机制。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89ibU5KgPoS3KdvaUtpOiajTo49AryXDeFMFcWN2fn81ZBqjrf8GnOVx1g/0?wx_fmt=png)

图1 实时推理引擎架构

如图1所示为本文实时推理引擎架构，主要包含两部分内容：到达事件处理、推理条件过滤。到达事件处理模块完成对达到数据的事件处理以及编码功能，推理条件过滤模块完成对编码后事件的筛选与原子条件触发与推理执行功能。通过对某油田公司业务系统进行实验，结果表明本文方法在到达事件数和规则数增加时，均有良好的处理性能。

引用格式

刘阳, 张天石, 李世超, 佟星, 曾鹏, 于海斌. 基于Bitmap的油水井采注优化实时推理引擎. 自动化学报, 2017, 43(6): 1007-1016

作者简介

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89PlrsldfKgK6QQWD8iaocicsjDRB0JczgiaN38ic6b3onTNFS5ZUMVGdWCw/0?wx_fmt=png)

刘阳 中国科学院沈阳自动化研究所副研究员。主要研究方向为工业物联网数据处理、语义数据处理及智能制造。

E-mail: liuy@sia.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89Woq5nuAFQYYic4Lhb47uN4DmCFIibQzh7wpM4VnU6soOAA1gMbAZFBhQ/0?wx_fmt=jpeg)

张天石 中国科学院沈阳自动化研究所助理研究员. 2013 年获得北京邮电大学自动化学院硕士学位. 主要研究方向为智能优化算法以及工业物联网本体设计.

E-mail: zhangtianshi@sia.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic893duCSB2hTgSRNBIia5c1YcGalvWyjWIuKpquZibjC02d3IMH1b5Pp9tw/0?wx_fmt=jpeg)

李世超 中国科学院沈阳自动化研究所助理研究员. 2014 年获得东北大学信息学院硕士学位. 主要研究方向为油田优化开采以及智慧油田应用.

E-mail: lishichao@sia.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89cp68ibXdeJcoBJiaIz8nmR1R0syibMiaW66S2ZbYIvNibdwQGumwyC5v53Q/0?wx_fmt=jpeg)

佟星 中国科学院沈阳自动化研究所助理研究员. 2012 年获得哈尔滨工业大学计算机学院硕士学位. 主要研究方向为自然语言处理以及工业物联网本体设计. 

E-mail: tongxing@sia.cn

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89dT8Av6Lpc9hjUJdYn3rvGKzicJwMuALyLlk6CQ0Rp67Jl7hIIG1IaGw/0?wx_fmt=png)

曾鹏 中国科学院沈阳自动化研究所研究员。主要研究方向为工业无线网络、智能电网及需求响应、工业信息处理。本文通信作者。 

E-mail: zp@sia.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89aYEDGhsPdDnGMrkwtPRTelCvPalyrXeBmj6bwxMoqcVFE99q6KvwIg/0?wx_fmt=jpeg)

于海斌 中国科学院沈阳自动化研究所研究员. 1997 年获得东北大学控制理论与控制工程专业博士学位. 主要研究方向为自动化控制系统, 先进制造技术和智能电网的基础与应用研究.

E-mail: yhb@sia.cn

相关文章

[【过控30专刊】浙江大学苏宏业教授等：不确定系统的鲁棒与随机模型预测控制算法比较研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063395&idx=1&sn=e27452a4e7d373d2a3bf00fd1ee829a2&chksm=8131ce2eb64647384fe3ba2de0ebe03f7dae940a9fc39a824d0bbf3f84d40a8ee9ad9f2614a5&scene=21#wechat_redirect)

[【过控30专刊】北交侯忠生等：间歇过程最优迭代学习控制的发展：从基于模型到数据驱动](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063373&idx=1&sn=1ce73721fe5aa1e45d242f30f8762b3f&chksm=8131ce00b646471602b78520a88623e154047fcb2847492a2b478291f4a797c1ead58acff3cd&scene=21#wechat_redirect)

[【过控30专刊】清华大学黄德先等：炼油工业过程控制的研究现状、问题与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063372&idx=1&sn=c0c62e23438d060bff5c889570e08373&chksm=8131ce01b6464717235952119d9b1b0478f3a51dbb2a1ad932357e49be1d7dea42e252265cca&scene=21#wechat_redirect)

[【过控30专刊】大连理工王伟等：基于数据的流程工业生产过程指标预测方法综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063371&idx=1&sn=4a42fb1026de1faa081b9edd7a388329&chksm=8131ce06b6464710d0ae27d1bbf9b657e51e1e5d8430f42fd068791a7bde48ee4921b003dfe7&scene=21#wechat_redirect)

[【过控30专刊】钱锋院士等：石油和化工行业智能优化制造若干问题及挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063353&idx=1&sn=5d3fdc2f3aa7085b28fc5dd4a971cdba&chksm=8131ce74b64647627f8f3c871d9bb9dad292ddf7dc21179e775a2355f9d07a445da0ada5b9f4&scene=21#wechat_redirect)

[【过控30专刊】有色冶金净化过程建模与优化控制问题探讨](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063347&idx=1&sn=9097bea0295181b288a33cf22fd4ea28&chksm=8131ce7eb6464768602f91c4679f19c15f2dc2caa1a434b73d49456a36094dacdd466b925be7&scene=21#wechat_redirect)  

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89OpfhMbY6RZVibic25Rr48ZRaBiaT5O968JP91JDfNUFqrLM9iaGsVicuYmQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89JKdBXk57UypibwGg1H5XuQ8FWrQYicRNHfQiaG4ic1nAx61OvPVxl2YjSA/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89OpfhMbY6RZVibic25Rr48ZRaBiaT5O968JP91JDfNUFqrLM9iaGsVicuYmQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89L1H9iao2OibXeDUXwC8s9OKiaes3j2BBAdCzJeWfPVrXM1y6f84u6IgWg/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89OpfhMbY6RZVibic25Rr48ZRaBiaT5O968JP91JDfNUFqrLM9iaGsVicuYmQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89elA8cLlYc673B8l2SJLcr7icfXCI78Q759ZM6owvkkMTftePib2rSnaQ/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44wMARdjJQVEHbb8nDBmic89EEg9RUEByakQVXsB7SpicHw5JDBZicianGCJLRwyIzu8fS0libtibhqGdZw/0?wx_fmt=gif)

**▼点击阅读原文**