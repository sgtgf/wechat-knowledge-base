# 约束能量最小化（CEM）


> 原文地址: [https://mp.weixin.qq.com/s/BLx2pGezm3Gdnx\_vjZp7ww](https://mp.weixin.qq.com/s/BLx2pGezm3Gdnx_vjZp7ww)

在[“从当红小生到瘫软在地：CEM带来的震撼”](https://mp.weixin.qq.com/s?__biz=Mzk4ODA1MDUyOQ==&mid=2247484005&idx=1&sn=6951213bd40440ca854993a65ad25da0&scene=21#wechat_redirect)一文中，CEM的目标检测结果让我震惊不已，这促使我开始深入研究其背后的原理与内涵。

约束能量最小化（Constrained Energy Minimization，CEM）算法由 Harsanyi 于1993 年提出。其设计思想源于数字信号处理领域的线性约束最小方差（Linearly Constrained Minimum Variance，LCMV）波束形成方法，核心目标是在保持目标信号响应不变的前提下，最小化滤波器输出的总能量，从而最大程度抑制背景干扰。

假设高光谱图像为![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaJOhZicjLbacuNnKdSg6BSV2BtAVvhI9BWibUBN11IONY7Jbvz0xn2A2A/640?wx_fmt=png)，其中![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Biaf5W5rVFTSQL80Sj2jVXicklIZbZSpBvsPGiaibxGzSyUOiaTiayWwoOZxxw/640?wx_fmt=png)是图像中的第_i_个像元；假设感兴趣目标光谱为**d**。CEM致力于寻求一个滤波向量**w**，使得目标经过该滤波器时输出为1，即![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Bia0mIbGVstqGbXIVibcQZHg0I9CQBluiaNzQByWcqmpVib3ckibDIZfLvCHg/640?wx_fmt=png)。而背景经过该滤波器的输出尽量小。

对于像元![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Biaf5W5rVFTSQL80Sj2jVXicklIZbZSpBvsPGiaibxGzSyUOiaTiayWwoOZxxw/640?wx_fmt=png)，假设其经过滤波器后的输出为![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaELCaZ6iakwibL3cxOxExv9cvyRNpIr6VAN9twLsUZPPYpxWFKWsiamY3g/640?wx_fmt=png)，即![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Bia2lcTQUe0gibRRZ8h5WBqSWRHHnEtZpia8cT8C40kkApeEPN6NBxAEM4Q/640?wx_fmt=png)，而像元![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Biaf5W5rVFTSQL80Sj2jVXicklIZbZSpBvsPGiaibxGzSyUOiaTiayWwoOZxxw/640?wx_fmt=png)的输出能量通常用![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaXVuCzOGoDrfPg3MRCr11iccR4Zl30dSzBTTAezDOiawVynlFKpe5oXdw/640?wx_fmt=png)表示。因此，对于滤波向量**w**，所有像元的平均输出能量为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaMUXeQQ4CeRtPTID9tl4QPK7aIgIiaPAM61j0oGd7I5pRuMyH4SGW19Q/640?wx_fmt=png)

记

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiahoghGWShyasBS7drriaZgQNPZ0Zia0Y1892MfWtyMyM71S7ZccM1lt7A/640?wx_fmt=png)

则CEM优化模型可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaFfy1tK5mHCLKVhAAcYhJXzTxdLJn4Rf0QpG5xibCMgPDr44k5vTGufA/640?wx_fmt=png)

模型（1）为等式约束的二次优化模型，可以用拉格朗日乘子法对其进行求解。

首先，建立优化模型的拉格朗日函数为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Bia9shDMLR3Ms632LkEpWCwLy9UUogPBDprZYJFkR0icIzRlRov2SvFNtw/640?wx_fmt=png)

上式两边对**w**求导，得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaVy1nZgxP8OocU0NiaufyyOICaelVbsAicY06cLianDhuEQNDFXguQAYwQ/640?wx_fmt=png)

模型（1）的最优解必然在偏导数等于零向量的地方达到，因此，令![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiapeSCcxfmib5FYib8S0Lmb9CE2FfslvdXR3qNzBkjGoAtUsdj0rOjiaicUQ/640?wx_fmt=png)，可得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaWAjb2GXuvAyWzsaHQKQCDjG0RzMCJxgWsabJlnN6SRTibFVmXXyMGMA/640?wx_fmt=png)

从（4）可以解得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaLNogWRKEUn4JHqV75Y8dY1RDIiayuibpqJ8oR9Vmd636ZVy7YW4u5j1Q/640?wx_fmt=png)

将上式代入约束条件![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Bia5m2qia8jk4UFO7C6adjWf7j82wdcwExzRNF84tPDJ84x5elw1AeqlEg/640?wx_fmt=png)，可得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mDHat77xqZZgFWYsR1wOiaaDOVFKUfyAeXHib8nyrniaWfo1SsoQkPEILLkGJdsTQRjCflZyD2k4SwGA/640?wx_fmt=png&from=appmsg)

将（6）代入（5），可得CEM的滤波向量解为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiabQ5X11Du9Rq4o1Ty5M70Z6405fDbIzbvUCjrp1yylFhPEvMMELbAibw/640?wx_fmt=png)

将**w**作用于原始数据**X**，即可得到感兴趣目标**d**的检测结果_Y_，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2Bia0YvAwtQKMAuVV2OTHM2qdxkJWdKQLOjGMREnhjhVwnMDj7aUZSEpOw/640?wx_fmt=png)

注意到，_Y_是一个_N_维行向量，将其变形为相应的矩阵，即为小目标在图像上的分布图。

从公式（7）与（8）可以看出，CEM 滤波器本质上是一个向量，目标检测的过程就是将该向量依次与图像中所有像元做内积运算。事实上，[“从当红小生到瘫软在地：CEM带来的震撼”](https://mp.weixin.qq.com/s?__biz=Mzk4ODA1MDUyOQ==&mid=2247484005&idx=1&sn=6951213bd40440ca854993a65ad25da0&scene=21#wechat_redirect)一文中的混合像元分析方法，其本质也是在寻找这样一个向量，而最终生成的目标丰度图，则可以理解为该向量与所有像元的内积。

以图1所示的三端元情形为例（注意，这里讨论的是光谱空间中的情形），假设端元A代表感兴趣目标，端元B和端元C均为背景像元的端元。显然，从点A到线段BC的垂线方向**u**，正是使感兴趣目标与背景之间区分度最大的方向。如果将所有像元往该方向进行投影，便能够得到针对感兴趣目标A的最优检测结果。

此处不妨插入一段历史往事：早年我曾提出一种解混方法，先提取端元，然后计算单形体各条“高”的方向，并将像元往这些方向上投影，从而分别获得各个端元的丰度图。这一思路当时得到了我的授业老恩师童庆禧院士的赞赏，他甚至专门组织了一次小组学术会议，为该方法命名。最终，有两个名称入选：端元向量法与端元投影向量法。童老师更倾向于前者，而我当时更偏爱后者，觉得后者更贴近方法的技术细节。但如今回望，感觉姜还是老的辣，老恩师的命名更加简洁、精炼，恰到好处。不过，令人遗憾的是，这项工作后来被某大学的一位S老师拿去，作为主要内容在国外发表了文章，并据此申请了国家自然科学基金。不巧的是，这份基金申请材料最终落入我手。记得当时我给出的评审意见为：建议该老师离开学术圈。遗憾的是，S老师并未采纳我的善意建议。不仅没有离开学术圈，反而一路灌水，如今已是教授、博导，桃李满园。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mC124TZhfSEejTETIbAR2BiaTWlacIHXgVU2gkjUH2JsrFS7TWiaTRKHCuicQ81tmBUk6ib3Fh83S0PicA/640?wx_fmt=png)

图1. 端元投影向量法。混合像元分解本质上也相当于各个像元在相应方向的投影

从上述讨论可以看出，混合像元分解方法与CEM算法在代数上具有高度一致性：二者的核心思想都是先确定一个投影向量，然后将所有像元在该向量方向上进行投影（或计算其与该向量的内积），以此作为对应感兴趣目标的检测结果。那么，这两个投影向量孰优孰劣呢？

我们知道，在线性混合模型的框架下，混合像元分解所对应的投影向量，应当是使感兴趣目标与背景之间区分度最大的最佳投影方向。以图1中的三端元场景为例，为了实现对目标与背景的最有效的区分，我们只把所有像元都投影到**u**方向即可。显然，这一方向几何意义明确，区分性最强，并且不存在比它更优的投影方向。

然而，令人困惑的是，在[“](https://mp.weixin.qq.com/s?__biz=Mzk4ODA1MDUyOQ==&mid=2247484005&idx=1&sn=6951213bd40440ca854993a65ad25da0&scene=21#wechat_redirect)[从当红小生到瘫软在地：CEM带来的震撼”](https://mp.weixin.qq.com/s?__biz=Mzk4ODA1MDUyOQ==&mid=2247484005&idx=1&sn=6951213bd40440ca854993a65ad25da0&scene=21#wechat_redirect)一文中我们却看到如下现象：基于CEM滤波器所构造的投影向量所产生的检测结果（该文图2）明显优于基于混合像元分解所得到的检测结果（该文图1）。那么，问题究竟出现在哪里呢？

我们将在下一篇推文中给出对此问题的进一步见解，也欢迎各位感兴趣的同学在留言区分享你们的看法。