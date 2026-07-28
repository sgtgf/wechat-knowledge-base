# 基于D-S融合的混合专家知识系统故障诊断方法

原创 自动化学报 2017-12-27 17:08 北京

> 原文地址: [https://mp.weixin.qq.com/s/l0LGRwETMtGh1nNi6rxvBA](https://mp.weixin.qq.com/s/l0LGRwETMtGh1nNi6rxvBA)

流程工业过程往往具有工艺机理模糊、自动化水平低、关键变量不可测量或者测量不准的问题。这使得传统的基于机理模型和基于数据模型的方法都难以应用到包含大量不确定性的故障诊断中。专家知识和操作经验在机理模型难以获得、数据规律性不强的情况下可以发挥更大的作用。由于解决问题的思路更直观体现领域专家对过程工艺的了解，基于规则的专家系统和基于案例的专家系统应用最广。流程工业过程运行可能产生多类型信息，比如数据信息、声音图像信息和专家知识等，这些信息大多包含有不确定性因素，单纯使用一种信息来诊断过程运行状态并不可靠。根据这些过程信息和知识的特点，建立不同的专家知识系统，组成混合专家知识系统，可以提高信息使用效率，进而提高过程故障诊断准确率。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eTpicC4KeaKenXtzMeZhkibeHkAqL35alEicLccwTKWcMkPSwZ3nbm1R9g/0?wx_fmt=png)

本文

针对过程知识类型多样、运行数据不准确的复杂工业流程,提出一种基于D-S融合的混合知识系统故障诊断方法框架，如图。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eY8d3pibnHuhqic4YyKephib7VWicLZqnNf6ickiay96ibdLHujK1iacez4tTWg/0?wx_fmt=png)

混合故障诊断知识系统利用多类型知识对过程的运行情况进行诊断并给出诊断意见,根据采集数据的准确程度，使用自适应权重的D-S证据理论将多专家系统的结论进行融合。这种方法依靠专家知识经验和过程数据,实现了过程的智能故障诊断。该方法应用于湿法冶金浓密过程，取得了良好的诊断效果。

混合系统故障诊断准确性的提高主要是由多来源信息的使用以及结论融合实现的，相比于单一推理的专家知识系统，混合系统对故障进行了双重的故障诊断。虽然增加了计算量，但以目前的计算机计算能力不会造成明显的诊断时间滞后。

引用格式

袁杰, 王福利, 王姝, 赵露平. 基于D-S融合的混合专家知识系统故障诊断方法. 自动化学报, 2017, 43(9): 1580-1587

作者简介

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07ez1ibQZQH7QpvzyewoVE0OUN9NQxTUtRXTg5rRviaA56AZuv02R4RqiafQ/0?wx_fmt=jpeg)

袁杰，现为东北大学博士研究生，主要研究方向为复杂工业过程异常工况识别和自愈控制。本文通讯作者。

Email:yuanjie0413117@163.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eicjSn2JC3PpIJicx3g0Khick0WYA00Faicvtjia0FicdrsMQBic1kNobDD8lQ/0?wx_fmt=jpeg)

王福利，现为东北大学教授, 主要研究方向为复杂工业过程建模与优化、故障诊断等。

Email:flwang@mail.neu.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07e3jm3bDczBicBjwVQBeNDHqRR6QG4fibt0l3RMmWiciatpqGavdQ3WHeV6A/0?wx_fmt=jpeg)

王姝，现为东北大学副教授，主要研究方向为复杂工业过程故障诊断及故障预报。

E-mail:alicews5@163.com

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07elVpdaxhMBq9AL7Bia9HNhONVicvH7T5gaQ5oHzdyicICfUib3d7cKicwAHw/0?wx_fmt=jpeg)

赵露平，现为东北大学副教授，主要研究方向为间歇工业过程建模、监测与质量预测。

E-mail:zhaolp@ise.neu.edu.cn

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07e2Gm3qic64kWkvxuqxaTo7TaanS3icdCV96kYwWTZsFKa3beTzW4OVrDQ/0?wx_fmt=png)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eoVDN54IWTA39EOE1YFk7btgG9GCjtIfia0gA5uNiaGXt7t7AnHtkUMXw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07e25hcCnjuhMgZbeWibe9LTTa7P55InwnIsBLcuTauP7CkR5Y6MxcBicYw/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eoVDN54IWTA39EOE1YFk7btgG9GCjtIfia0gA5uNiaGXt7t7AnHtkUMXw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eG32IECibmeUMy7V09QquUUdaeIqdlv3C5rF6zGFqywCfUzWMoANvQFw/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eoVDN54IWTA39EOE1YFk7btgG9GCjtIfia0gA5uNiaGXt7t7AnHtkUMXw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eBEhjtib0mBboW7CoCeo1YibiazpBgH4zibHRibfYhkhU7Gp3URNhhP8m9Pw/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH44MhUTiaBnFGfavuXd0MU07eib3t1V9vGribr8Yck8EiahT5KMXt9sxLrL9fS0w7458Rcbeib2msK1Dgpw/0?wx_fmt=gif)

更多精彩内容，尽在阅读原文