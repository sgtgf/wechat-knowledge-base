# 从被无情碾压到得意地笑：CEM算法的隐藏缺陷


> 原文地址: [https://mp.weixin.qq.com/s/TCzP\_s9g-O49NTXh27lveg](https://mp.weixin.qq.com/s/TCzP_s9g-O49NTXh27lveg)

在[“从当红小生到瘫软在地：CEM带来的震撼”](https://mp.weixin.qq.com/s?__biz=Mzk4ODA1MDUyOQ==&mid=2247484005&idx=1&sn=6951213bd40440ca854993a65ad25da0&scene=21#wechat_redirect)一文中提到，CEM算法在处理感兴趣的小目标时，相比于混合像元分析方法展现出碾压式的检测效果。面对看似“完美”的事物，大多数人内心都会有一种微妙的倾向：第一反应往往不是全然叹服，而是下意识地寻找其中的瑕疵。CEM算法也不例外，尽管它在小目标检测中取得了近乎完美的效果，但它背后是否潜藏着一些不为人知的缺陷呢？ 

带着这个问题，我开始重新审视CEM模型。不久之后，我发现，CEM优化模型实际上等价于如下广义瑞利商问题：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpBCpSMvqiaNmayQTWthicek0JSJUKx9pvkwNYEmoL9TxCUae7eoibNgkZg/640?wx_fmt=png&from=appmsg)

下面对它们的等价性进行简要验证。根据瑞利商的相关理论，（1）的解可以归结为矩阵![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpCwL8gjmdRGzsFKznzYgTy6FNOrCiauQicbSKhxzhdm3ic6CzfRIQRL0pQ/640?wx_fmt=png&from=appmsg)的特征值特征向量问题：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEprg0jEzicTxlbXVsEunuricbSndKibgxzFQGic0v5VyXBmVBgFpHF4tdl8Q/640?wx_fmt=png&from=appmsg)

CEM算子

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpmiaG56PLHW8AmHjBgE9WTRA8bZiajemUorSK0YQib3HdNzVSrg4TneOCg/640?wx_fmt=jpeg)

显然是![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpCwL8gjmdRGzsFKznzYgTy6FNOrCiauQicbSKhxzhdm3ic6CzfRIQRL0pQ/640?wx_fmt=png&from=appmsg)的非零特征值对应的特征向量（将CEM算子带入（2）验证一下即可）。而![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpCwL8gjmdRGzsFKznzYgTy6FNOrCiauQicbSKhxzhdm3ic6CzfRIQRL0pQ/640?wx_fmt=png&from=appmsg)的秩为1，其非零特征值只有一个。因此可以得出结论：CEM优化模型与模型（1）等价。

在得到了上述等价性之后，我们可以基于（1），从广义瑞利商的角度重新分析CEM算子。不难发现，（1）中目标函数_f_(**w**)的分子![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEp280HyjOic2ucKAkLO7nn0QGPeibkdcywp2LmfRMKG4hsxAZurPo4pWcg/640?wx_fmt=png&from=appmsg)相当于感兴趣目标的输出能量，而分母![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpTIddjc8RQQbSlJ7A5ow7lwWsvuJOMbfZfNUF6K2s1fEiboRwZibSHZxw/640?wx_fmt=png&from=appmsg)则对应于图像所有像元的平均输出能量。优化模型（1）旨在寻找一个最优的滤波向量**w**，使得目标的输出能量尽量大，而背景的输出能量尽量小，从而达到压制背景和突显目标的效果。

需要注意的是，分母中的**R**为高光谱数据![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpWDoPoukgPMDMSSbibxzupdiagggCy0I4eGstesib3ibFbY2IIM2mpIqxng/640?wx_fmt=png&from=appmsg)的自相关矩阵，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpUOfGoLunMXiaqsbxibUmu9DXBDZVrT7fcxakhTGiaa9EId0Nicej2sdPhQ/640?wx_fmt=png&from=appmsg)

可以发现，自相关矩阵**R**包含了目标像元在内的图像中所有像元的贡献。因此，优化模型（1）在压制背景的同时，必然也会压制目标本身。

当目标在图像中的像元数较少时，其对_f_(**w**)的分母的影响或许可以忽略不计。但当目标在图像中占据较多像元时，情况可能会发生显著变化。首先，对于图像中的大概率分布目标，当其光谱变化较大时，仅仅依靠一个参考光谱**d**往往难以涵盖目标的所有统计特征。其次，优化模型（1）会把其他光谱上与参考光谱不同的目标像元全部视为背景压制。因此，对于那些光谱变化较大的大概率目标，CEM极有可能难以取得理想的检测效果！

想到这里，我迫不及待地寻找合适的数据进行验证。恰好，西安数据中包含了大量植被（图1中的红色部分），而植被的光谱变化较大，正是理想的“实验对象”。于是，我手工从图像中找了一个明显是植被的像元，将其视为参考光谱**d**，并用CEM算法对其进行检测，结果如图2所示。

![xian](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpppib1bicfzUeBudMSKBlFaBAylUcRBntibwdekYNBlLd1x74WKNvwyIUw/640?wx_fmt=jpeg&from=appmsg)

图1. 西安高光谱数据（假彩色合成图），其中红色区域为植被

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpef8xf8ibiaSwkUGXNysp3UX8LYLOYy3gr6kuXD1qZeM8ib5SQP8wdz81A/640?wx_fmt=jpeg&from=appmsg)

图2\. CEM植被检测结果

看到图2的结果，内心不禁得意地笑了起来。从图中可以看出，果然正如前面所预料的那样，CEM算子仅成功检测出了极少数植被像元，而图像中的绝大部分植被像元则被误判为背景，导致其能量输出被压制到较低的水平。

面对图2的结果，脑海中立即浮现一个新的问题：如何改造CEM算子，使其不仅能有效应对小目标，还能适用于大目标呢？ 

一个自然而然的想法就是，既然分母![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpTIddjc8RQQbSlJ7A5ow7lwWsvuJOMbfZfNUF6K2s1fEiboRwZibSHZxw/640?wx_fmt=png&from=appmsg)这项承担着被压制的角色，那么如果我们减小背景对自相关矩阵**R**的影响，是否就能有效缓解CEM在处理大目标时效果不佳的弊端呢？很自然地，加权自相关矩阵的思想就此诞生，即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEpnibmXib5tkKPzGwrBXKYhsPGnY2I2DgrAhahCoZMYr5iczlJrLDgvWghg/640?wx_fmt=png&from=appmsg)

其中，_g_(**x**_i_,**d**)是一个衡量像元**x**_i_与参考光谱**d**相似程度的非负函数。当**x**_i_与**d****的相似性较强时，**_g_(**x**_i_,**d**)取值较小；而当**x**_i_与**d**的相似性较弱时，_g_(**x**_i_,**d**)取值较大；当**x**_i_与**d****相同时**，_g_(**x**_i_,**d**)=0_。这样的话，那些与植被的参考光__谱_**d****相似**性较强的像元**x**_i_，由于相应的权值_g_(**x**_i_,**d**)较小，其对**R**\*的影响就被大大削弱了。

将加权自相关矩阵**R**\*取代（1）或者CEM算子中的**R**，即可得到一个新的CEM算子。将这个算子用于无锡数据的植被检测，得到了图3的检测结果。与图2相比，植被的整体检测率得到了明显的提升。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zgfThkqk9mAMu5I9kicFQjxfiad1vY6eEp6tfZhcC1sQ8iaD6O5qQ7K422XSe8gZGhnuvJTiapj1CK7On09UeunZ8Q/640?wx_fmt=jpeg&from=appmsg)

图3. 基于加权自相关矩阵的植被检测结果

事实上，上述加权策略不仅能够有效缓解CEM在大目标检测中的不足，而且还可以进一步提升其对小目标检测的效果。因此，从某种程度上来说，加权自相关矩阵的引入使得CEM算子具备了“大小通吃”的能力。

加权自相关矩阵思想的提出，受到了不少同行的赞赏和正面引用。然而，也有一些同行试图将其据为己有。例如，我曾收到过BH大学Y老师投稿《电子与信息学报》的稿件，内容与我博士论文中加权自相关矩阵的部分如出一辙，却未加任何引用。我当场秒拒，并在评审意见中严厉批评了这一行为。不过，后来这位Y老师一路攀升至教授、博导，桃李满园。