# 浙江大学苏宏业教授团队：MPC优化控制问题的可行域研究

原创 自动化学报 2018-05-29 16:29 北京

> 原文地址: [https://mp.weixin.qq.com/s/1uXylg5LMlo2dyLAJezjUw](https://mp.weixin.qq.com/s/1uXylg5LMlo2dyLAJezjUw)

文章导读

   可行域在模型预测控制(Model predictive control, MPC)相关的优化控制问题中扮演着重要角色。可行域是指使得相关MPC优化控制问题有可行解的最大子状态空间，一旦系统状态运行到可行域以外，MPC控制器将得不到可行解从而导致系统故障。通常，较大的可行域表明相应的MPC算法具有较小的保守性，所以可行域常常用来从保守性方面评价MPC算法的优劣。同时，可行域也常被用来选择系统初始值，保证系统循环可行性等方面的设计。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrOef94h4PmgRHy1mVwlicelvWFXec3ubxia8KJwLsTTibJuVdAKoadp3ow/640?wx_fmt=png)

图1 模型预测控制中的可行域

  

      根据不同的MPC优化控制问题描述，可行域通常为椭圆体或多面体两种类型。由于椭圆体的大小与其加权矩阵的某种测度有关，这类可行域的大小是很容易求解的。多面体型的可行域的求解则要困难很多，现有的常规解法是利用正则投影，但这种方法的计算复杂度随着MPC优化问题参数的增加而急剧增加，往往参数达到几十时，计算量就庞大到无法完成（具体表现为电脑内存因中间计算变量的剧增耗光，导致求解终止）。       另外，正则投影法对MPC优化问题约束的描述有特定要求，当约束中存在正定式（如线性矩阵不等式）描述时，正则投影法则无法使用。求解多面体可行域还可以用多参数线性规划法和集合关联法，但多参数线性规划法会存在非唯一解的计算问题，集合关联法仅适用于没有松弛变量的MPC优化问题。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNr82icDVyqzBvQcCzl3yVwCd6QATleVIvEMJKaTyia9ONdcyXkLEXnQQ0g/640?wx_fmt=png)

图 2 多面体可行域和参数空间示例

  

        浙江大学苏宏业教授团队利用向量内积的几何意义，直接利用原MPC优化问题的约束条件构造求取可行域顶点的新优化问题，遍历地求解出可行域的所有顶点，从而求取出可行域。该方法更广泛地适用于MPC优化问题（包含线性矩阵不等式约束和线性不等式约束）可行域的求解，并且求解速度受变量数目的影响较小，且避免了多参数线性规划法中存在非唯一解的问题，特别是在低维度状态可行域求解中具有显著效果。

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrxmiabxZU7Nx88BPFSnoGWdqBFVQG4CibqCNEYqgOZaicz0V88dEMBmv2A/640?wx_fmt=png)

图3 不同参数数量下可行域计算时间对比

文章信息

L. T. Xie, L. Xie, H. Y. Su, and J. D. Wang, “Polyhedral feasible set computation of MPC-based optimal control problems,” IEEE/CAA J. of

Autom. Sinica, vol. 5, no. 4, pp. 765−770, July 2018.

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrNQBZSiaXtaKInNDjwJWQl2RFxkpxjXZicH6YbbKlSLFaa4nfmBVhDK7Q/640?wx_fmt=png)

长按识别以上二维码或点击文末“原文链接”，可阅读全文；如需PDF，可关注JAS后在微信后台留下邮箱，我们将发送给您

作者简介

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrhMvIETaB6LNjXA5DFicqQzrfkL0OicwMIeUtljAhGKT1icsCBv1IUDRiaA/640?wx_fmt=jpeg)

**Lantao Xie**，浙江大学博士研究生，主要研究方向为模型预测控制及机器学习。

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrTycjftxoH6C9agO9PPcPquqUkicBZtA3hyH6T0gzrdHJ0DRVQrbNo4Q/640?wx_fmt=jpeg)

**Lei Xie**，浙江大学教授，主要研究方向为控制系统性能评估，容错诊断，过程建模和先进控制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrcER0MDwmGXw5ib3HibomfQBM0qZk00vcK1nibWEIQtdD6h1jsZHBQ3RLQ/640?wx_fmt=jpeg)

**Hongye Su** (SM’10)，浙江大学教授，主要研究方向为鲁棒控制，时滞系统，先进过程控制理论与应用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrJQ0IWKodww2iauicAB23ggYyGfe2jfFF9hGPvTq8nU88W0uFJ2aa59fA/640?wx_fmt=jpeg)

**Jingdai Wang**，浙江大学教授，主要研究方向为多相流检测，信息处理等。

     IEEE/CAA Journal of Automatica Sinica（JAS，《自动化学报》英文版），于2014年创刊，由中国自动化学会、中国科学院自动化研究所主办，与IEEE合作出版。JAS发表自动控制、人工智能、智能控制、模式识别、信息处理、机器人等自动化领域热点和前沿方向的研究进展。创刊至今，JAS由业内优秀学者领衔组办专刊报导最新研究成果，已组织的专刊有：多智能体的协同控制、无人机自主控制、强化学习与自适应控制、物理信息系统、以人为中心的智能机器人、分数阶系统与控制、再生能源系统的控制与优化等。根据2017年Elsevier发布的期刊影响力榜单，JAS的2016年CiteScore分值为2.16，在控制与系统工程学科类别的211个学术出版物中排名第56，位于前26%。

  

      欢迎扫描二维码、长按图片识别关注自动化学报英文版微信公众号：报道自动化领域国内外最新研究成果，提供论文免费浏览下载，传递学术活动信息和期刊动态，即时出版咨询及稿件状态查询

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNruBicNoMJav6gEugUlfyfx7RaCebwliaBPQ0icwx4cbe1A1Mx3HMibYEEfA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNriafErq5DTqfK0bebX1ibsicsbndFoyCvA0QJJHdtQWNCSiaAexTsXkv1Ng/640?wx_fmt=png)

**网站**：

http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6570654

www.ieee-jas.org  

**微信**：JAS自动化学报英文版

**Blog**: http://blog.sciencenet.cn/?3291369

**Twitter**: IEEE/CAA Press

**Facebook**: Ieee/Caa Press

**投稿**：https://mc03.manuscriptcentral.com/ieee-jas

**Email:** jas@ia.ac.cn

**Tel:** 010-82544459, 010-82544746  

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47YvicCiad7YxialUYc4UrZoNrficaOPXDckh2VMpibsgAQWGCs9SpgcbgOl9Yfmdz1LKMpJ7bfvAFGyvw/640?wx_fmt=png)