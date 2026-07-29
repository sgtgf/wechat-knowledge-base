# Nature：当AI学会控制核聚变反应堆

原创 机器之心 自动化学报 2022-02-17 16:30 北京

> 原文地址: [https://mp.weixin.qq.com/s/JP5owLe1zm00h-o5cAd17A](https://mp.weixin.qq.com/s/JP5owLe1zm00h-o5cAd17A)

点击蓝字

关注我们

  

过去三年，DeepMind 和瑞士洛桑联邦理工学院 EPFL 一直在进行一个神秘的项目：用强化学习控制核聚变反应堆内过热的等离子体，如今它已宣告成功。

  

![](Nature_当AI学会控制核聚变反应堆_images/img_000_bbf0d25dd043.jpg)

  

DeepMind 研究科学家 David Pfau 在论文发表后感叹道：「为了分享这个时刻我已经等了很久，这是第一次在核聚变研究设备上进行深度强化学习的演示！」

  

可控核聚变、强人工智能、脑机接口是人类科技发展的几个重要方向，有关它们何时可以实现，科学家们的说法永远是「还需几十年」——面临的挑战太多，手头的方法却很有限。

  

那么用人工智能去控制核聚变，是不是一个有前途的方向？这个问题可能需要由提出 AlphaGo 的 DeepMind 来回答了。

  

最近，EPFL 和 DeepMind 使用深度强化学习控制托卡马克装置等离子体的研究登上了《自然》杂志。

  

![](Nature_当AI学会控制核聚变反应堆_images/img_001_399d0c705963.jpg)

  

论文地址：https://www.nature.com/articles/s41586-021-04301-9

  

首先，我们来思考一个问题：为什么要用人工智能控制核聚变？

  

托卡马克是一种用于容纳核聚变反应的环形容器，其内部呈现出一种特殊的混乱状态。氢原子在极高的温度下被挤压在一起，产生比太阳表面还热的、旋转的、翻滚的等离子体。找到控制和限制等离子体的方法将是释放核聚变潜力的关键，而后者被认为是未来几十年清洁能源的源泉。

  

在这一点上，科学原理似乎是说得通的，剩下的就是工程挑战。参与该研究的瑞士等离子体中心（SPC）主任 Ambrogio Fasoli 表示：「我们需要能够加热这个装置，并保持足够长的时间，以便我们从中吸取能量。」

  

![](Nature_当AI学会控制核聚变反应堆_images/img_002_b76887705f99.jpg)

  

在同样由聚变驱动的恒星中，仅依靠引力质量就足以将氢原子拉到一起并克服它们的相反电荷。在地球上，科学家们改为使用强大的磁线圈来限制核聚变反应，将其推到所需的位置。这些线圈必须仔细控制，以防止等离子体接触容器本身：这会损坏容器壁并减慢聚变反应。

  

但每次研究人员想要改变等离子体的配置并尝试不同的形状，以产生更多的能量或更纯净的等离子体时，都需要大量的工程和设计工作。传统的系统是由计算机控制的，基于模型和模拟，但 Fasoli 表示传统方法「复杂且不一定能起到优化的作用」。

  

DeepMind 控制团队负责人 Martin Riedmiller 表示：「人工智能，特别是强化学习，特别适合解决托卡马克中控制等离子体的复杂问题。」DeepMind 在论文中详细介绍了所提的可以自主控制等离子体的 AI。

  

![](Nature_当AI学会控制核聚变反应堆_images/img_003_4280ef4a3877.gif)

  

**技术概览**

  

DeepMind 提出的模型架构如下图所示，该方法具有三个阶段：

  

第一阶段：设计者为实验指定目标，可能伴随着随时间变化的控制目标；

  

第二阶段：深度 RL 算法与托卡马克模拟器交互，以找到接近最优的控制策略来满足指定目标；

  

第三阶段：以神经网络表示的控制策略直接在托卡马克硬件上实时运行（零样本）。

  

![](Nature_当AI学会控制核聚变反应堆_images/img_004_7aa5645ee8af.jpg)

图 1：控制器设计架构（controller design architecture）的各组件示意图

  

在第一阶段，实验目标由一组目标指定，这些目标包含不同的期望特性。特性范围包括位置和等离子体电流的基本稳定，以及多个时变目标的复杂组合。然后，这些目标被组合成一个奖励函数，在每个时间步骤中为状态分配一个标量质量度量。该奖励函数还惩罚控制策略，让其不会达到终端状态。至关重要的是，精心设计的奖励函数将被最低限度地指定，从而为学习算法提供最大的灵活性以达到预期的结果。

  

在第二阶段，高性能 RL 算法通过与环境交互来收集数据并找到控制策略，如图 1a、b 所示。该研究使用的模拟器具有足够的物理保真度来描述等离子体形状和电流的演变，同时保持足够低的计算成本来学习。具体来说，该研究基于自由边界等离子体演化（free-boundary plasma-evolution ）模型，对等离子体状态在极向场线圈电压的影响下的演化进行建模。

  

RL 算法使用收集到的模拟器数据来找到关于指定奖励函数的最优策略。由于演化等离子体状态的计算要求，模拟器的数据速率明显低于典型 RL 环境的数据速率。该研究通过最大后验策略优化 ( MPO ) 来克服数据不足问题。MPO 支持跨分布式并行流的数据收集，并以高效的方式进行学习。

  

在第三阶段，控制策略与相关的实验控制目标绑定到一个可执行文件中，使用量身定制的编译器（10 kHz 实时控制），最大限度地减少依赖性并消除不必要的计算。这个可执行文件是由托卡马克配置变量（TCV）控制框架加载的（图 1d）。每个实验都从标准的等离子体形成程序（plasma-formation procedures）开始，其中传统控制器维持等离子体的位置和总电流。在预定时间里，称为「handover」，控制切换到控制策略，然后启动 19 个 TCV 控制线圈，将等离子体形状和电流转换为所需的目标。训练完成后将不会进一步调整网络权值，换句话说，从模拟到硬件实现了零样本迁移。

  

**基本功能演示**

  

该研究在 TCV 实验中展示了所提架构在控制目标上的能力。首先他们展示了对等离子体平衡基本质量的精确控制。控制策略性能如图 2 所示。所有任务都成功执行，跟踪精度低于期望的阈值。结果表明 RL 体系架构能够在放电实验的所有相关阶段进行精确的等离子体控制。

  

![](Nature_当AI学会控制核聚变反应堆_images/img_000_06b037121e09.jpg)

图 2：等离子体电流、垂直稳定性、位置与形状控制的演示

  

**控制演示**

  

接下来，该研究展示了所提架构为科学研究生成复杂配置的能力。结果如图 3 所示：

  

![](Nature_当AI学会控制核聚变反应堆_images/img_006_b4c346751dfa.png)

图 3：控制演示

  

**全新多域等离子体演示**  

  

最后展示了架构在探索全新等离子配置方面的强大功能。DeepMind 测试了「液滴」（droplets）的控制，这是一种在容器内部同时存在两个独立等离子体的配置。通过提出的方法，DeepMind 简单地调整了模拟切换状态，以考虑来自单轴等离子体的不同切换条件，并定义一个奖励函数以保持每个液滴组件的位置稳定，同时增加域等离子体电流。

  

![](Nature_当AI学会控制核聚变反应堆_images/img_007_5fb36b9543aa.jpg)

图 4：整个 200 毫米控制窗口内对 TCV 上两个独立液滴的持续控制演示

  

![](Nature_当AI学会控制核聚变反应堆_images/img_008_d4a97f8ec148.gif)

  

**未来展望**

  

总而言之，随着聚变反应堆变得越来越大，与 DeepMind 展开合作或许是最关键的。尽管物理学家已经很好地掌握了如何通过传统方法控制小型托卡马克中的等离子体，但随着科学家们尝试令核电站规模的版本可行，挑战只会更多。该领域正取得缓慢但稳定的进展。

  

上周，位于英国牛津郡的欧洲联合环状反应堆（JET）项目取得了突破，创造了从聚变实验中提取能量的新纪录，在 5 秒时间内产生了 59 兆焦耳的能量。与此同时，位于法国的国际热核聚变实验反应堆（ITER）国际合作项目正在建设当中，预计将于 2025 年启动并成为世界上最大的实验性聚变反应堆。

  

圣地亚哥能源研究中心的副研究科学家 Dmitri Orlov 表示，「托卡马克装置越复杂，性能越高，就越需要通过越来越高的可靠性和准确性来控制更多数量。」AI 控制的托卡马克装置可以通过优化，以控制热量从反应中转移到容器壁上，并防止破坏性的「等离子体不稳定性」。反应堆本身可以重新设计，以利用强化学习所提供的更严格控制。

  

最终，Ambrogio Fasoli 认为，与 DeepMind 的合作可以让研究人员突破界限，加速通往聚变能量的漫长旅程。人工智能将赋能我们探索人类无法探索的东西，因为我们可以使用自己不敢冒险的控制系统来达到目标。「如果我们确定自己有一个控制系统，让我们接近极限但不会超出极限，则实际上可以用来探索那些不存在的可能性。」

  

参考链接：

https://www.wired.com/story/deepmind-ai-nuclear-fusion/

  

新闻来源：机器之心

封面来源：pixabay.com

  

**免责声明**

本文来自网络媒体，不代表本刊的观点和立场。

  

  

**期刊动态**

[《自动化学报》编辑部防诈骗公告](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073517&idx=1&sn=c52de7c685e546af9faffc0cefab1c85&chksm=8131e1a0b64668b63ebaa68ea81cbaec3b94dc52ea8360821a0a49e67ae7e4b428a25d0f19c5&scene=21#wechat_redirect)

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961201&idx=1&sn=3142842d75c441ae860c1ecb313c7657&chksm=f29436b0c5e3bfa6c679210f60513eb1a7205dc20fe028f482bb593eac60427e4e56fba12493&scene=21#wechat_redirect)

[自动化学报多篇论文入选中国百篇最具影响国内论文和中国精品期刊顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961152&idx=1&sn=4a5e9e4b84879f4cde4e13a0ef97272c&chksm=f2943681c5e3bf97d7770c9623dac869b283b3ea83f3d320017974033e361d8b999134a8bdff&scene=21#wechat_redirect)

[自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960903&idx=1&sn=7da8b8a0167e16bcbaa1f00fbfb69782&chksm=f2943586c5e3bc9014f6d4fff7147b998ae42b4da452907e641e8029f296fd2413b4f17aef62&scene=21#wechat_redirect)

[《自动化学报》发表文章入选第六届中国科协优秀科技论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960313&idx=1&sn=01b5a9defe9664ba4a0b8d7322e115d0&chksm=f2942b38c5e3a22e2c57edaa8667a27368ccfb595e6a372dfa85ff2a61329788870d77957a2f&scene=21#wechat_redirect)

[自动化学报（英文版）首届青年编委招募](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959475&idx=1&sn=e28ce2b8fa27ee4fb6a5c0c17e25dd25&chksm=f2942872c5e3a16438dbf45fd8091b643cd2bf50f0bab7092a6c5103d06cd4a16ebceb4db40a&scene=21#wechat_redirect)

  

**热点文章**

[《自动化学报》2019年高关注论文](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651073450&idx=1&sn=6f57bd0df73f259aa416575f1f69bdfb&chksm=8131e1e7b64668f1344de4acdef6148e8dcfa60c80e4f48e6cb1270558c2beade5601e92d05c&scene=21#wechat_redirect)

[《自动化学报》2021年热点文章回顾](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072577&idx=1&sn=4e6be077d7371c7d29d9a371d8defe19&chksm=8131e20cb6466b1aec2f3b8b1063d3be11725ca9a0c15785c3b42a638170e732acd0d8d345e0&scene=21#wechat_redirect)

[国家自然科学基金论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960308&idx=1&sn=1634c999f22588333537f13393403f9c&chksm=f2942b35c5e3a2232e86b51c2b7c8f37a4d3d7f858d370d76d5afd00567d7da6e9543476d120&scene=21#wechat_redirect)  

[国家重点研发计划论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649960255&idx=1&sn=f48435928fd924134cb72014860b9d00&chksm=f2942b7ec5e3a26869da68a1419b3b40ca1e6cb98abf2e380d78a49ffb99c85991d76cc346b0&scene=21#wechat_redirect)

[中国科学院自动化研究所高层次人才招聘启事 | 长期有效](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649959451&idx=1&sn=657b7e4aeeaa88114d5189641c5409dc&chksm=f294285ac5e3a14cd230a2b9678c32ba9bf92e8ffc9d61d506c5ffea2df793456dd37c2c6fb1&scene=21#wechat_redirect)

  

**期刊目录**

[2022年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649961423&idx=1&sn=3b65958faa7c7f94c247f46dd72bd71e&chksm=f294378ec5e3be9825f860d132c36c97f3e877089449cb1fe85a6d1e7da9bd0e24795336bc54&scene=21#wechat_redirect)

[《自动化学报》2021年全年合集](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651072770&idx=1&sn=7c531f7fa3bc390558fab15b339ce86e&chksm=8131e34fb6466a59ed079448fddda0fc9f97066460bff8f6835288003a1fba2812de383813c1&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

  

![](Nature_当AI学会控制核聚变反应堆_images/img_009_1632fbf1d0e0.png)

![](Nature_当AI学会控制核聚变反应堆_images/img_010_f48ad6e2d261.png)

  

![](Nature_当AI学会控制核聚变反应堆_images/img_011_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_012_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_013_035f2a9d62a1.jpg)

![](Nature_当AI学会控制核聚变反应堆_images/img_014_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_015_83d520a1c2a7.gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](Nature_当AI学会控制核聚变反应堆_images/img_016_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_017_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_018_e08775e6e006.jpg)

![](Nature_当AI学会控制核聚变反应堆_images/img_019_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_020_83d520a1c2a7.gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](Nature_当AI学会控制核聚变反应堆_images/img_021_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_022_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_023_a585648929e2.jpg)

![](Nature_当AI学会控制核聚变反应堆_images/img_024_83d520a1c2a7.gif)

![](Nature_当AI学会控制核聚变反应堆_images/img_025_83d520a1c2a7.gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** 

http://www.aas.net.cn

http://www.ieee-jas.net

**投稿:** 

https://mc03.manuscriptcentral.com/aas-cn   

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）  

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**↓ 点击下方 阅读原文 了解更多**