# 平行视觉: 基于ACP 的智能视觉计算方法

原创 自动化学报 2016-10-31 16:41 北京

> 原文地址: [https://mp.weixin.qq.com/s/tBsTzp\_086ITB62iGq2cXA](https://mp.weixin.qq.com/s/tBsTzp_086ITB62iGq2cXA)

在视觉计算研究中，对复杂环境的适应能力通常决定了算法能否实际应用，已经成为该领域的研究焦点之一。以交通环境为例，恶劣天气、强阴影、低照度等因素经常导致图像细节模糊，目标具有各种类型、外观和运动特征，并且目标之间可能存在遮挡，又进一步增加了视觉算法的设计难度。许多视觉算法没有经过充分测试，尽管在简单的受控环境下有效，但是在实际应用时面对复杂的开放环境，算法很容易失败。

由于实际环境的复杂性，为了建立有效的视觉计算模型，不但要求标记数据集规模足够大，还要求具有足够的多样性。ImageNet、PASCAL VOC等数据集尽管规模庞大，却并不满足多样性要求，不能覆盖复杂挑战的实际环境。这一状况来自两方面原因。1）在复杂环境下采集大规模多样性数据集需要耗费大量人力，目前ImageNet主要从Internet上搜集图像，但是网络空间与物理空间并不等价。2）对大规模多样性数据集进行标注需要耗费大量人力并且容易出错，尤其在恶劣天气、低照度等环境下，由于图像细节模糊，由人眼观察标注图像中的目标位置、姿态、运动轨迹都很困难。标记数据集的不足，降低了视觉模型的泛化能力，无法保证实际应用时的有效性。

为了解决大规模多样性数据集的采集和标注困难，一种可选方案是建立人工场景，模拟和替代复杂挑战的实际场景，生成人工场景数据集。近年来随着计算机图形学、虚拟现实等技术的发展，使构建色彩逼真的人工场景成为可能。利用人工场景，可以模拟实际场景中的各种要素，包括光照时段、天气、目标类型和子类等。并且可以灵活地设计各种场景类型、目标外观、目标行为、摄像机配置等。由此可以生成大规模多样性的视频图像数据集，并且可以自动得到详细且精确的标注信息。

本文利用实际场景与人工场景的虚实互动，提出一种基于ACP的智能视觉计算方法，我们称之为平行视觉。平行视觉是复杂系统建模与调控的ACP（Artificial societies, Computational experiments, and Parallel execution）理论在视觉计算领域的推广应用，目标是解决复杂环境“视觉计算方案”的科学难题。图1显示了平行视觉的基本框架和体系结构。平行视觉利用人工场景来模拟和表示复杂挑战的实际场景，使采集和标注大规模多样性数据集成为可能，通过计算实验（即学习与训练、实验与评估）进行视觉算法的设计与评估，最后借助平行执行来在线优化视觉系统。平行视觉的基本原则是：在物理和网络空间大数据的驱动下，结合计算机图形学、虚拟现实、机器学习、知识自动化等技术，利用人工场景、计算实验、平行执行等理论和方法，建立复杂环境下视觉感知与理解的理论和方法体系。

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcZgpZmjUSfFeDMYkMAxTk2vQOIdJDI4fDCa1hpzIsawzc1oM1FpWgwA/0?wx_fmt=jpeg)

图1  平行视觉的基本框架与体系结构

平行视觉相关研究已经引起国际同行的高度重视。在近几年召开的计算机视觉重要会议（例如ICCV、CVPR、ECCV等）上，将计算机图形学和虚拟现实技术用于解决复杂环境下的视觉计算问题，在论文数量和关注程度上呈现出上升趋势。随着虚拟现实技术的进一步发展，构建的人工场景会更加逼真，为平行视觉研究提供更可靠的基础支撑。我们相信，平行视觉将成为视觉计算领域一个重要的研究方向。尤其是，平行视觉与深度学习相结合，将推动越来越多的智能视觉系统发展成熟并走向应用。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcJ1uXkiaK40QPKqZYRa0KZqe1wcvicUx6nCic7QaXsnQ17pvenGtWwxJuw/0?wx_fmt=png)

引用格式

王坤峰, 苟超, 王飞跃. 平行视觉: 基于ACP 的智能视觉计算方法. 自动化学报, 2016, 42(10): 1490-1500

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcmgObVkRFF39SrSuNRxhF7JG0CxPEKqjJMZQnmGlDepSbfV1UoGCHSQ/0?wx_fmt=jpeg)

王坤峰 中国科学院自动化研究所复杂系统管理与控制国家重点实验室副研究员. 2008 年获得中国科学院研究生院博士学位. 主要研究方向为智能交通系统,智能视觉计算, 机器学习.

E-mail: kunfeng.wang@ia.ac.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcB6I3uPhOzXCVlsZpId3K96DyehSVZDQ6EBmOiaYNeQaV5P1wg2hhR7g/0?wx_fmt=jpeg)

苟超 中国科学院自动化研究所复杂系统管理与控制国家重点实验室博士研究生. 2012 年获得电子科技大学学士学位. 主要研究方向为智能交通系统, 图像处理, 模式识别.

E-mail: gouchao2012@ia.ac.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcG54sLlQiaVgmWkWSm1h7O5OicBbqfxjpib4Qic3gjHwZ0MKNVbibFEnPhZA/0?wx_fmt=jpeg)

王飞跃 中国科学院自动化研究所复杂系统管理与控制国家重点实验室研究员.国防科学技术大学军事计算实验与平行系统技术研究中心主任. 主要研究方向为智能系统和复杂系统的建模、分析与控制. 本文通信作者.

E-mail: feiyue.wang@ia.ac.cn

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcPlmHWt00jxGCcYskSKN38EBQ6hwSSQ8yRsx8I61XVXt3iaUjA4sZRQg/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcp6ZGqJU8JabBMkutTiajYEBAiaDwE4ghplppR3yibQmVVeic2ic8qAIibOYA/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45qxhNlCibibTwSjZlia1K9QUcyDGNX94gibjost0MlZMlfJf3xFPlXibrgRjlcSiapia5Q9EmdftaXwQ5kw/0?wx_fmt=jpeg)