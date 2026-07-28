# 基于踪片Tracklet关联的视觉目标跟踪：现状与展望

原创 自动化学报 2018-01-15 17:08 北京

> 原文地址: [https://mp.weixin.qq.com/s/ffqkJaoJNC8mBGeWuNiiqw](https://mp.weixin.qq.com/s/ffqkJaoJNC8mBGeWuNiiqw)

视觉目标跟踪是指利用目标的颜色、纹理等视觉信息以及运动信息，确定视频数据中感兴趣目标并将相邻图像帧的相同目标进行关联，实现对目标的位置预测和持续追踪，以便完成更高级的任务。

近年来，由于计算机视觉技术的发展和计算机硬件性能的提高，基于视觉的目标跟踪方法得到了飞速的发展。其中，基于踪片(Tracklet)关联的目标跟踪方法因为具有对目标遮挡的强鲁棒性、算法运行的快速性等优点得到了广泛关注，本文对这类方法的最新研究进展进行了综述。

文章结构

1

首先，简明地介绍了视觉目标跟踪的基本知识、研究意义和研究现状。

2

然后，系统详尽地介绍了基于踪片关联的目标跟踪方法，分析了近年来提出的一些踪片关联方法的优缺点。

3

最后，本文指出了该研究问题的发展方向，一方面要提出更先进的目标跟踪模型，另一方面要采用平行视觉方法进行虚实互动的模型学习与评估。

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbwlMhLohQK1GntUQkIUknMcG244yQHeA9mFCuwbSYCuNFAsI5w7QWjUA/0?wx_fmt=jpeg)

图1基于踪片关联的视觉目标跟踪方法流程图

  

重要地，解决踪片跟踪问题的关键是对生成的踪片进行准确关联，从而形成可靠完整的轨迹。该过程也可视为踪片间的匹配问题，即如何进行踪片匹配使得关联后的轨迹具有更高的可靠性、稳定性以及鲁棒性。获得踪片之间相似性需要综合考虑时间关系、外观以及运动等特征，从而保证踪片关联的精度和完整度。本文将基于踪片关联的跟踪方法分为图论方法和其他方法，并具体介绍部分代表性成果，汇总其公开的实验结果进行比较。为了方便研究者进行目标跟踪实验以及评估实验结果，促进目标跟踪领域的发展，学术界建立了一些开放的公共数据集。这些数据集由不同的场景、光照、天气、视角采集而来，包含行人、车辆等各种要素以及不同要素相互遮挡、轨迹重叠、离开以及重回视野等复杂的运动模式。本文对常见跟踪数据集划分为实际数据集和虚拟数据集两种类型分别介绍。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw2YIKubKtbom7hiagPNO6Haic5cCics3VJjbOTiaibyPanKHAGibOntNI4tSw/0?wx_fmt=png)

图2 平行视觉的基本框架与体系结构

  

最后，本文讨论了基于踪片关联的跟踪方法存在的挑战，例如模型创新性不够、大规模多样性数据集还很缺乏。为了解决这些问题，本文认为需要引入社会学、人群动力学等学科知识，来增加跟踪模型对目标的区分度与减小优化搜索空间；另外可以采用虚实互动的平行视觉方法来进行研究。2016年，王坤峰等将复杂系统建模与调控的ACP理论推广到视觉计算领域，提出平行视觉的基本框架和关键技术，如图2所示。通过“人工场景”提供大规模多样性的标记数据集，通过“计算实验”全面设计和评价视觉计算模型，通过“平行执行”在线优化视觉系统，实现对复杂环境的智能感知与理解。这为视觉目标跟踪技术的研究及应用提供了一种新的思路。

引用格式

刘雅婷, 王坤峰, 王飞跃. 基于踪片Tracklet关联的视觉目标跟踪：现状与展望. 自动化学报, 2017, 43(11): 1869-1885

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbwqja4IHVxqOjn6tTicVib6auwtQJibbmDLfCxEDzha7Yn1gFGlsbQcxiaxw/0?wx_fmt=jpeg)

刘雅婷 中国科学院自动化研究所复杂系统管理与控制国家重点实验室博士研究生. 主要研究方向为视觉目标跟踪, 机器学习.

E-mail: liuyating2015@ia.ac.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbwOZTvhx4rjozVB7eohmftvC0YebxN5Kic2BYwzfBqx4bEy9icw0GFSAyA/0?wx_fmt=jpeg)

王坤峰 中国科学院自动化研究所复杂系统管理与控制国家重点实验室副研究员。主要研究方向为智能交通系统，智能视觉计算，机器学习。

E-mail: kunfeng.wang@ia.ac.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbwHxmYbG7k6vCiceG2my3ZLJ9q92ibCyYsG0Gcjn047MNtDYw96icMgNIRQ/0?wx_fmt=jpeg)

王飞跃 中国科学院自动化研究所复杂系统管理与控制国家重点实验室研究员。国防科技大学军事计算实验与平行系统技术研究中心主任。主要研究方向为智能系统和复杂系统的建模、分析与控制。本文通信作者。

E-mail: feiyue.wang@ia.ac.cn

  

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw8HU206YWD562nWickTTChZo4gcbSKibLoIicYYeiaPmUwBPKELNMDurDdw/0?wx_fmt=gif)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw9jpvjGQydkdiaSQWPtg7kLe6mVVgfr2ayl2Yd4KJPZnKCqHs01iaI59w/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw2kqibvdoQx70yX1tNmmepYxTnibAMAwPx6ibR1z8XuKnbH9NicctSufiabQ/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw9jpvjGQydkdiaSQWPtg7kLe6mVVgfr2ayl2Yd4KJPZnKCqHs01iaI59w/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw5AVxlon0b6XHfAjl7yw7cXJJ8OJuDgOBxa5PFyoaCSgUyVBF8DTjGQ/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbw9jpvjGQydkdiaSQWPtg7kLe6mVVgfr2ayl2Yd4KJPZnKCqHs01iaI59w/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbwia7qmj7WqIpfibsqicuicOO1NeBXnCic4YmiaZCqdLyGibOqhp7TgTXXUnQyQ/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH469zu1VXJtUlVVA5tN9iagbwA4Wde34pibibLLD378d9wn6UdN4DF43XhucUxmy8NtObXWbTVtqTTNZw/0?wx_fmt=gif)

  

点击阅读原文查看更多