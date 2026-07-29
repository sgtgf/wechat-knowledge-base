# EMI、EMS、EMC怎么区分？

原创 硬件笔记本 2023-11-13 07:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/5VP\_y3kHbRK8M7s4\_B\_3rg](https://mp.weixin.qq.com/s/5VP_y3kHbRK8M7s4_B_3rg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

电子产品的电磁辐射问题越来越受到关注，相信大多数都对于EMC(电磁兼容性)这个名词也不陌生，因为要获得我国的3C认证就必须通过专业机构的EMC测试。但是，在各种媒体报道和产品宣传当中，与之类似的EMI、EMS等专业名词也常常出现在大家面前，它们似乎都与防辐射(电磁辐射)有关，让人不明就里。那么，它们究竟有什么异同呢？

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_002_96b2674eaa49.png)

  

**EMI**

**攻击力**

EMI(Electro Magnetic Interference)直译是“电磁干扰”，是指电子设备(干扰源)通过电磁波对其他电子设备产生干扰的现象。例如当我们看电视的时候，旁边有人使用电吹风或电剃须刀之类的家用电器，电视屏幕上会出现的雪花噪点；电饭锅煮不熟米饭；关闭了的空调会自行启动……这些都是常见的电磁干扰现象。

  

更为严重的是，如果电磁干扰信号妨碍了正在监视病情的医疗电子设备或正在飞行的飞机，则会造成不堪设想的后果。从这些例子来看，就好像是电子设备具有无形的“攻击力”，对其他电子设备的正常运行造成了扰乱和破坏。

  

电源的一二级EMI滤波电路，是为降低电源的电磁传导干扰而设计的。

  

从“攻击”方式上看，EMI主要有两种类型：传导干扰和辐射干扰。电磁传导干扰是指干扰源通过导电介质(例如电线)把自身电网络上的信号耦合(干扰)到另一个电网络。

最常见的例子是我们电脑中的电源会对家里的用电网络产生影响，在电脑开机的同时家里的电灯可能会变暗，这在使用杂牌劣质电源的电脑上表现得更为明显。而在当今电源的内部结构中，一二级EMI滤波电路是必不可少的，这里的“EMI”针对的就是电磁传导干扰，以防止电源工作时对外界产生太大的影响。

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_003_8f9db2535493.png)

  

机箱上的EMI触点，是为降低屏蔽机箱内部的电磁辐射干扰而设计的。

  

电磁辐射干扰往往被我们简称为电磁辐射，它是指干扰源通过空间把自身电网络上的信号耦合(干扰)到另一个电网络，就像是武侠小说中的“隔空打物”。由于人体生命活动包含一系列的生物电活动，这些生物电对环境的电磁波非常敏感，因此过量的电磁辐射可以对人体造成影响和损害。人们常常担忧的“辐射”也就是指这部分电磁辐射干扰。应用机箱上的种种防辐射设计，例如EMI弹片、EMI触点，这里“EMI”针对的就是电磁辐射干扰，以减小机箱内电磁波传播到外部的量。

  

  

**EMS**

**防御力**

有矛就有盾，有电磁干扰就有抗电磁干扰。下面请出我们的第二位主角EMS。EMS(Electro Magnetic Susceptibility)直译是“电磁敏感度”，是指由于电子设备受到外界的电磁能量，造成自身性能下降的容易程度。例如同样受到电吹风或电剃须刀的干扰，有些电视机的屏幕上出现了雪花噪点，有些电视机却安然无恙。这表明在受到电磁干扰“攻击”的情况下，前者的电磁敏感度较高，更易受伤，也就是“防御力”较低；而后者的电磁敏感度较低，不易受伤，即“防御力”较高。

电视画面雪花严重，受其它电子设备干扰是一大因素。

  

  

**EMC**

**综合攻防能力**

有了矛，也有了盾，最后就用它俩一起来武装我们的第三位主角EMC。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_004_48fb5fb95e32.png)

  

EMC测试中使用电磁兼容实验室，可进行电磁辐射干扰测试。

  

EMC(Electro Magnetic Compatibility)直译是“电磁兼容性”，是指电子设备所产生的电磁能量既不对其他电子设备产生干扰，也不受其他电子设备的电磁能量干扰的能力。因此，EMC包括EMI和EMS两个方面的要求：一方面要求电子设备在正常运行过程中对所在环境产生的电磁干扰不能超过一定的限值，即EMI；另一方面要求电子设备对所在环境中存在的电磁干扰具有一定程度的抗干扰能力，即EMS。

  

具体在对电子设备进行EMC测试时，相关标准规定了EMI的最大值，以及EMS的最小值，就犹如限制“攻击力”在较低水平、要求“防御力”在较高水平。这也很好理解，就像我们养一条看门狗，你不希望它主动跑出门去乱咬人，但你要求它在敌人来犯时要扛得住。

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_005_8b2f69b881b8.jpg)

（3C认证包含EMC标准）

  

现在大家知道了，好的电子设备应该是一个“低攻高防”的角色，既对外界产生的干扰小，又能很好地抵抗来自外界的干扰。

  

那么如何选购这样的产品呢？

  

其实国家法规已经为我们做好了准备。

  

自1996年开始，欧共体就对其统一市场作出了规定：任何没有“CE”认证标记的电气和电子设备不得进入欧共体市场。

  

我国政府也已作出规定，自2003年8月1日起，任何没有“CCC”(即3C)认证标志的电气和电子设备不得进入中国市场。而CE认证和3C认证均包含了对EMC的要求。

  

因此，大家在购买电子产品时，只要看它的外壳或包装上有没有“CE”和“CCC”标志，就可以知道它是否具有符合国家规定的低干扰(包括低辐射)、高抗干扰的特性。

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_006_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_007_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_008_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_009_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_010_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_011_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_012_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_013_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_014_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_015_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_016_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_017_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_018_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_019_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_020_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMI_EMS_EMC怎么区分__images\img_021_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。