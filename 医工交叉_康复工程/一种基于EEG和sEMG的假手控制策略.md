# 一种基于EEG和sEMG的假手控制策略

原创 自动化学报 2018-05-23 17:29 北京

> 原文地址: [https://mp.weixin.qq.com/s/d1kUwqZU01Ac5EPrdIXvdA](https://mp.weixin.qq.com/s/d1kUwqZU01Ac5EPrdIXvdA)

![](一种基于EEG和sEMG的假手控制策略_images/img_000_c76ff74fc829.gif)

点击蓝字关注我们

![](一种基于EEG和sEMG的假手控制策略_images/img_001_299bad042274.png)

**基于EEG 和sEMG 的假手控制策略**是指分别采用sEMG和EEG实现手部动作强度的估计和动作类型的编码，采用触觉反馈技术将当前假手的控制指令反馈给佩戴者，从而实现EEG 和sEMG 对多自由度假手的协同控制。

![](一种基于EEG和sEMG的假手控制策略_images/img_002_4b73fe55773c.png)

![](一种基于EEG和sEMG的假手控制策略_images/img_003_8b63d6894335.jpg)

假手是一类典型的人机交互设备，对于辅助手臂截肢患者恢复手部功能有着重要的作用。多自由度肌电假手的控制依赖于多通道的肌电信号，对于截肢后肌肉出现萎缩、截肢部位较高等情况的患者，他们手臂上残留的可以进行肌电信号测量的部位较少，无法采用多个传感器测量多路信号来进行动作模式的识别，给假手的使用带来困难。针对这一类患者的需求，提出了一种基于脑电信号(Electroencephalogram，EEG) 与表面肌电信号(Surface electromyogramsignal，sEMG) 结合的假手控制策略。

![](一种基于EEG和sEMG的假手控制策略_images/img_004_3c6ab2634cab.png)

实现基于基于EEG 和sEMG 的假手控制主要包括：基于EEG 的动作类型判别、基于sEMG 的动作强度估计和动作类型的触觉提示。

动作类型编码

采用便携式测量设备MindWave 进行脑电信号的测量，通过观察信号发现，眨眼动作的信号可以在MindWave 的测试信号中明显地体现出来，因此拟从测试者前额的EEG 信号中提取眨眼动作的信息，并将单位时间内检测到的眨眼信息用于假手动作的编码。动作编码分两个环节进行，第一环节为手爪动作和手腕动作的判别，第二环节为具体动作类型(手爪张开、合，手腕顺、逆旋转)的判别。

![](一种基于EEG和sEMG的假手控制策略_images/img_005_ed4ffb03f4a2.png)

动作强度估计

肌电信号存在很强的个体差异，不同测试者在手臂相同位置测量得到的肌电信号差异较大；测量部位不确定，同样会带来肌电信号的差异。为了消除肌电信号个体差异和传感器测量位置差异等因素给假手控制带来的不便，采用自适应方法进行假手开合速度/握力的估计。

![](一种基于EEG和sEMG的假手控制策略_images/img_006_44a473ae5127.png)

动作类型的触觉提示

设计振动袖带将其佩戴在测试者的上臂部位用于帮助测试者把握假手当前的状态。设计了6 种振动刺激编码用于向佩戴者反馈假手当前的工作状态，6 种振动刺激分别对应于手爪动作、手腕动作、手爪闭合、手爪张开、手腕顺时针旋转、手腕逆时针旋转。

![](一种基于EEG和sEMG的假手控制策略_images/img_007_c5edf5b44a7d.png)

设计EEG 和sEMG 协同控制流程。控制器首先进行手爪动作和手腕动作的判别，并给出相应的触觉提示，随后进行具体动作类型(手爪张开、合，手腕顺、逆旋转) 的判别。以手爪闭合动作为例，用户首先眨眼两次，触觉反馈系统会控制振动袖带中2 号和4 号振子振动,提示用户当前为手爪动作； 用户继续眨眼三次，触觉反馈系统会控制振动袖带中2 号振子振动，提示用户当前为手爪闭合动作； 随后控制器根据sEMG 信号对动作的期望强度进行估计，并控制假手动作的强度； 闭合动作完成后，用户只需再眨眼三次即可停止当前的动作。

![](一种基于EEG和sEMG的假手控制策略_images/img_008_5a00fe919033.png)

![](一种基于EEG和sEMG的假手控制策略_images/img_009_4b73fe55773c.png)

引用格式

![](一种基于EEG和sEMG的假手控制策略_images/img_010_299bad042274.png)

吴常铖, 熊鹏文, 曾洪, 徐宝国, 宋爱国. 一种基于EEG和sEMG的假手控制策略. 自动化学报, 2018, 44(4): 676-684.

![](一种基于EEG和sEMG的假手控制策略_images/img_011_4b73fe55773c.png)

作者简介

![](一种基于EEG和sEMG的假手控制策略_images/img_012_299bad042274.png)

![](一种基于EEG和sEMG的假手控制策略_images/img_013_9d6473a0aec3.jpg)

吴常铖 南京航空航天大学自动化学院讲师。2016 年获东南大学博士学位。主要研究方向为机器人传感与控制技术。

E-mail: changchengwu@nuaa.edu.cn

![](一种基于EEG和sEMG的假手控制策略_images/img_014_4471970d3ff8.jpg)

熊鹏文 南昌大学信息工程学院讲师。2015 年获东南大学博士学位。主要研究方向为机器人传感与控制和遥操作。

E-mail: steven.xpw@ncu.edu.cn

![](一种基于EEG和sEMG的假手控制策略_images/img_015_bdc3ab589338.jpg)

曾洪 东南大学仪器科学与工程学院副教授。主要研究方向为机器人传感与控制技术。

E-mail: hzeng@seu.edu.cn

![](一种基于EEG和sEMG的假手控制策略_images/img_016_58649f585087.jpg)

徐宝国 东南大学仪器科学与工程学院副教授。主要研究方向为机器人传感与控制技术。

E-mail: xubaoguo@seu.edu.cn

![](一种基于EEG和sEMG的假手控制策略_images/img_017_356cff88efb3.jpg)

宋爱国 东南大学教授。主要研究方向为机器人传感与控制技术，信号处理和遥操作技术。本文通信作者。

E-mail: a.g.song@seu.edu.cn

自动化

学报

往期回顾

[基于上臂关节角度和肌电信号的二自由度假肢控制方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063891&idx=1&sn=d562da3464bc790fdfcb7b86a3273127&chksm=8131cc1eb6464508efe2cd14814cabf97cf4f2553d9cf8bc9260fdaf622483cf647d4daab168&scene=21#wechat_redirect)  

[基于社交媒体大数据的交通感知分析系统](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063888&idx=1&sn=95c650b1b23d12de3acd9ed1d5fcea93&chksm=8131cc1db646450b057091e8693106c7fc2208fe2fa35d5ffb319d757d44aa93dc9bff44b577&scene=21#wechat_redirect)  

[基于中粒度模型的视频人体姿态估计](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063882&idx=1&sn=3db3e2f7cc594ddd1b19c521d2ad1bae&chksm=8131cc07b6464511fe2f66a255d0d455a20811884bbbf02a6dbc185e9579b1141b5754066d3a&scene=21#wechat_redirect)  

[多模式移动对象不确定性轨迹预测模型](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063876&idx=1&sn=49fa5090bd94f562db3a1eb08e88fa27&chksm=8131cc09b646451f5811b9029611299d37f0c189eb446af12bc9cab50d40054a5992911c4c6a&scene=21#wechat_redirect)  

[《自动化学报》“信息物理融合系统理论与应用”专刊征文通知](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063871&idx=1&sn=ebbafdd358852719709596399efc7152&chksm=8131cc72b6464564e3d6d427ebd9ee471120cdfa308c587fa1c60134e893db36ceebc420b75b&scene=21#wechat_redirect)  

[生成式对抗网络：从生成数据到创造智能](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063870&idx=1&sn=1e1d7562a4bbe4c31e2fdef4859c0bc4&chksm=8131cc73b6464565d9419524cd87b4bbe363384f0ba722017e91a49af4640d349403ea9a0ea6&scene=21#wechat_redirect)  

[数据驱动的可靠性评估与寿命预测研究进展:基于协变量的方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063866&idx=1&sn=53df70e82c92b0dbb87381ceee30decc&chksm=8131cc77b64645618bdf68e8e694481b8c6f4385fa665baeeb9e1030e7a93a26bd550d0b0821&scene=21#wechat_redirect)  

[《自动化学报》44卷4期网刊已经发布, 敬请关注](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063863&idx=1&sn=ddcdd52226155766a944df7960380e90&chksm=8131cc7ab646456c0f5d1efcaab1051afd6d6272394cc8e944eb0c9f9e270a00fd1bb4e67d02&scene=21#wechat_redirect)  

[《自动化学报》2017-2018综述摘要集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063859&idx=1&sn=8e1ffa7f059bc3b61ff7c6bebe015bf1&chksm=8131cc7eb646456845c621a707e5c67964ffc2531dedb5cd4516c4769a68acac2f0b68ba1ddb&scene=21#wechat_redirect)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](一种基于EEG和sEMG的假手控制策略_images/img_018_c6f4b84300ce.png)

![](一种基于EEG和sEMG的假手控制策略_images/img_019_4b673b190c7d.jpg)

JAS《自动化学报》（英文版）

![](一种基于EEG和sEMG的假手控制策略_images/img_020_c6f4b84300ce.png)

![](一种基于EEG和sEMG的假手控制策略_images/img_021_5c24df450d3d.jpg)

自动化学报服务号

![](一种基于EEG和sEMG的假手控制策略_images/img_022_c6f4b84300ce.png)

![](一种基于EEG和sEMG的假手控制策略_images/img_023_08911857dcc5.jpg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](一种基于EEG和sEMG的假手控制策略_images/img_024_638cba5f32cd.gif)

点“阅读原文”了解更多