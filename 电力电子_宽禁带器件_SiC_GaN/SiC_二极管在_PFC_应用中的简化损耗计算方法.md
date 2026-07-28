# SiC 二极管在 PFC 应用中的简化损耗计算方法


> 原文地址: [https://mp.weixin.qq.com/s/crfZRR5GKC9Fj1ONMX0ifA](https://mp.weixin.qq.com/s/crfZRR5GKC9Fj1ONMX0ifA)

文章来源：电子元器件与信息技术

作者：朱紫阳，王会刚，周万里，梁叶（华润微电子研发中心，江苏　无锡　214000）

摘　要：更新的拓扑和更高效的功率器件应运而生，典型代表就是高压碳化硅肖特基二极管。根据《欧盟 EN61000-3-2 号标准》，功率超过75W的开关电源都必须强制安装 PFC 模块，因此碳化硅二极管的应用前景十分广泛， 准确地分析碳化硅二极管的损耗，对于设计更高效的开关电源，改善器件的制造工艺等方面都具有非常重要的意义。通过在 PFC 电源的不同工况下，对碳化硅二极管的损耗进行分析，实验结果验证了所提出方法的高效和准确性。

关键词：碳化硅（SiC）肖特基二极管；功率因数校正；损耗分析

0. 引言

碳化硅二极管由于其零反向恢复电荷特性，使得在 PFC 电源中可以明显减小功率器件带来的损耗， 极大的提高电源的整机效率，因而广泛的应用于各类 PFC 电源中。由于 PFC 电路的特点，每个开关周期内的电流和占空比都不相同，传统的损耗计算方法采用对整个工频周期内的二极管电压电流逐一进行积 分，计算量过于庞大。同时由于示波器采样深度的限制，记录整个工频周期的波形时，示波器采样率较低， 不能精确计算出二极管的损耗。本文通过对 PFC 工频周期内的功耗关系的分析，提出了一种新型的损耗计算方法，分析二极管在单个开关周期内的损耗与整个功率周期内损耗的关系，通过单个开关周期内的精确采样，推算整个工频周期内的器件损耗。

1. SiC 二极管在 PFC 应用中的优势

由于大部分电源的设计要考虑在宽电压输入范围内（85V～265Vac），且全功率范围内均能达到0.8以上的 PF 值，此时无源 PFC 已无法满足要求，因此有源 PFC 是必要的选择。有源 PFC 多采用升压式电路拓扑（Boost Topology）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFdhTsJzqnBCKI5pMYHg1RQEPfkBicAf1mlbM5KlQ3e1ROpULLKicDccUg/640?wx_fmt=png&from=appmsg)

从图1 可以看到，在开关管开启过程中，输出二极管承受反向输出电压。而开关管关断过程，输出二极管导通。在 PFC 输出电压390V，二极管正向电流分别为2.5A、10A、20A 时观察二极管的反向恢复情况可知，传统的硅二极管由于反向恢复电荷很大，使得器件自身损耗较大，同时大的反向恢复电流在开关 管开启过程中，流入开关管，导致开关管的开启损耗变大。而碳化硅二极管由于零反向恢复特性，同时减小了二极管自身的损耗和开关管的损耗，因而极大提升了系统的效率。

2. 传统的 PFC 电路中二极管损耗分析方法

通常在分析二极管损耗时，单个开关周期内，将二极管的损耗分为4 个部分，即开启损耗、导通损耗、 关断损耗和截止损耗（如图2）。由于碳化硅二极管 的截止漏电流很小（参考CREE C6D10065A，截止时漏电流为2～15μA，典型值），截止损耗与其他三部分损耗不在一个数量级上，因此本次计算忽略截止 损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vF7Ug3QDMibOo2cUfw49Z6v1WbiahWvbLyMiaibHNKQrVlzsDVoREBepLniaA/640?wx_fmt=png&from=appmsg)

而计算其他三部分损耗时，由于PFC 电路的特性， 强制让电流相位追随电压相位，因此在整个工频周期内，每一个开关周期内的电流和占空比均不相同，需 要对工频周期内的每一个开关周期内的电压电流波形进行采集，然后分别按开启、导通、关断三部分分别进行累加积分，计算量巨大。同时，示波器在同样的记录深度下抓取整个工频周期内的波形，势必要降低采样率（例如1Mpts 采样深度，采到4 个工频周期时， 采样率只能降低到25MS/s），这使得损耗计算的准确性大幅降低。

3. 改进的二极管损耗分析方法

为了提高损耗计算的效率，简化计算损耗的方法是十分必要的。为了避免进行庞大的数据运算，需要分析整个工频周期内的平均损耗与单个开关周期内的瞬时损耗之间的关系。 

选取工频周期内输入电压最高点Vin max的开关周期，由于 PFC 强制电流波形追随输入电压，因此这个开关周期内的电流平均值也为最大值IAVG max。则最大输入电压的开关周期内的平均二极管损耗为WAVG max， 则有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vF7A2wicSh3Ywac6FJTFiafceibPvyjQxyKkuOkrnGD1pRibED43icxARaOnQ/640?wx_fmt=png&from=appmsg)

式中：VF 为二极管的正向导通压降，ton为二极管的开通时间，Vout为 PFC 输出电压，Q RR为二极管反向恢复电荷，由于SiC二极管Q RR\=0，因此该项可忽略。根据 BOOST 电路的结构，根据电感的伏秒平衡特性，可以得到以下关系：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFuPY2yVvSQeMtZLianNoiaRib1pUeGdrIz14WzS8VsmpPibfn4g9Sxkw9EA/640?wx_fmt=png&from=appmsg)

式中：Doff为开关管的关断的占空比，而开关管的关断占空比既为输出二极管的开通占空比。因此有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFfJD85XGDNtvbX5aEMv4XdBKmThibx0j9tyBu3Je8QzgOYwEwMvUOGPA/640?wx_fmt=png&from=appmsg)

式中：T 为单个开关周期的时间，将（2）、（3）代入（1）可得工频周期内输入电压最高时的开关周期损耗为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFq9znmuicSx8K3NTvvvI2zmIwJJkvab94U9vrXQVgUNxNVeAfp3OTBIw/640?wx_fmt=png&from=appmsg)

而由于输入电压Vin为正弦半波（正弦波经过整流桥变成正弦半波），因此单个开关周期内的输入电压：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFl6phz5afG09587wYr0lVhKMRxMmINuIzdN3wZXl9XkH6o0f8AnVU9A/640?wx_fmt=png&from=appmsg)

而由于每个周期内的平均电流在 PFC 的作用下追随输入电压，因此单个开关周期内的平均电流：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vF0w1cFENAHZkAdiabJo1MvrglTyWlicHLDR1dcMhAKBoQzG7oNib0NoB3Q/640?wx_fmt=png&from=appmsg)

从而得到任意开关周期内的二极管平均损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFnb5RgAibIP0mJyzzUoejdaHEmtdf4XAHaUgD5TadUh3geicticia0gTo1A/640?wx_fmt=png&from=appmsg)

因此，对一个工频周期内的所有开关周期的二极管平均损耗进行积分，得到工频周期内的二极管平均损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFicFxcPkSq6duyYjqYN3sR7c6RTng0sMrgvXcySSdDmgKsiaSFfRFMjXA/640?wx_fmt=png&from=appmsg)

而工频周期内二极管的平均功耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFia0Cp0Pibj6zswaqn40feD9o3RsOHS015oL1yVauj6uXJiajxPicEPjeicA/640?wx_fmt=png&from=appmsg)

公式（9）表明，整个工频周期内，PFC 电源中输出 SiC 二极管的平均功耗数值上等于最高输入电压时 刻开关周期内二极管损耗的一半，如图3 所示（其中， 蓝色波形为二极管两端电压，红色波形为二极管流过的电流）。因此在功耗计算的过程中，仅需计算工频半波周期内输入电压最大时的开关周期内的功耗，即可根据上述结论推算出整个工频半波周期内的总功耗，相对于传统的功耗计算方法做出了明显的简化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFLDWV2445GN5goV6xibueMvtSjQgXF9pfNQuVbaUAaHg9hAcfAgb8Xicw/640?wx_fmt=png&from=appmsg)

注意，Si二极管因为有较大的反向恢复电荷QRR，其由于反向恢复特性带来的损耗部分不能忽略， 因此该结论不适用于普通的 Si 二极管。

4. 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFYqXUevKibXA9C0trZTibe3B4C9A1ndxPLRqkDCgstDELfGxibfWlribeXA/640?wx_fmt=png&from=appmsg)

为了验证上述结论，制作了一台1.5kW的升压式 PFC 电源样机，控制芯片基于 TI UCC28180，固定开关频率116kHz，输出电压390V。分别在110V，60Hz 交流输入，负载功率300W、400W、500W 条件下，和220V 交流输入，负载功率600W、800W、1kW 的情况下， 对输出 SiC 二极管损耗进行分析。样机实物图如图5所示，输出二极管采用 STPSC8065D-650V8A碳化硅肖特基二极管，功耗计算采取两种算法，算法一采用传统算法，通过对整个工频周期的二极管功耗进行逐一积分，计算出工频半波周期（100Hz）内碳化硅二极管的功耗。算法二则采用本文提出的改进型算法，计算工频周期电流最大的单个开关周期，通过PFC 单周期与工频周期功耗关系，计算出整个工频半周期内的总功耗。对比算法一和算法二的功耗计算结果如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsn33x1H5ytwWaUZiclZRg9vFKBAA9dj72lSoI5Tave4fN6FhFiasIeNiaaeRLa35bhWvIMQLJ6JlGtrA/640?wx_fmt=png&from=appmsg)

表1 的结果可以看出，考虑到探头的误差，除了110V 输入电压，300W负载时，其他工作条件下，两者的计算误差均小于10%。而300W负载时误差较大， 为12.6%，是由于本样机采用的主控芯片 UCC28180算法基于 CCM 模式，而在 300W 小负载条件下，PFC 会进入 DCM 工作模式，因而影响了电流采样，进而导致电流对输入电压的跟随不够精准。而随着负载功率的加大，PFC 进入 CCM 模式，误差大幅减小，采用两种算法计算出的功耗数据基本上一致，从而验证了本文算法的准确性。 

5. 结论

本文详细地分析了 PFC 电源中，输出二极管工作电压、电流波形关系。通过对升压式 PFC 电路的特点分析，得到了每个开关周期内输出 SiC 二极管的平均 功耗与整个工频半波周期内的总平均功耗间的关系。 从而可以通过精确计算最大输入电压时刻开关周期内的二极管功耗来推算整个工频半波周期内的二极管功耗。并自制了一台升压式 PFC 样机，对该方法进行验证，结果证明该方法的准确性。从而极大的减少了功耗计算过程中的计算量，使得功耗计算工作的效率大幅提升。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kI1xUdGHI4mr7IjjPseYSBu8vQfEg5Mlvn04OJau7EABPcOTRCayKSw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=t77ao96h&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4ktH42XJDAhPQHAEplDKjbyTu0O1BCmuiauFPlnseeU0SQTwh0Ju1CFdw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=mh06mxt7&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kBmUGdey8EUaYInibDZGLTGR3fzrhv6txBkpp2WSjaFWVfEJxXic0lUkA/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&randomid=zcsymlzn&tp=webp)