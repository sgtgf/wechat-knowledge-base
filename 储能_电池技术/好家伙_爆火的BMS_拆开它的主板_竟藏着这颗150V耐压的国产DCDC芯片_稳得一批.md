# 好家伙！爆火的BMS，拆开它的主板，竟藏着这颗150V耐压的国产DCDC芯片，稳得一批

原创 王工 硬件笔记本 2026-04-15 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/s8OfoIXqsFLTfuNpaMnkcA](https://mp.weixin.qq.com/s/s8OfoIXqsFLTfuNpaMnkcA)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

这是一块BMS主板，相信做过类似产品的朋友看着一定不会陌生。这块板子上既有控制部分，也有功率部分。今天咱们先简单聊聊BMS，再重点看看板子上的一个关键角色——一颗神秘的国产DCDC芯片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niadjcJfciaicJByvDH5nYKzoEUQOpl0MyY8qbEia0OxVy4Wcv1ATteYM1GVuzWMAhCu9eS76wHdNkS4VHYiba8tXP1BcH7fDwMa4vbI/640?wx_fmt=jpeg)

咱们将主板放大，丝印上标着Hi9263，ESOP8封装，个头虽然不大，但在这块板子上作用可不小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niafBRlb5bbyCb5J6VOaPgdI3gurZTPL8wfIUQaIsEkmiavWtdel4OwB68IErZc87KfexJI79SM1cC3lmwuv2ZBsFNVkicS1NDFMAE/640?wx_fmt=jpeg)

01

**BMS简介**

BMS，咱们也叫电池管理系统，这几年一直是个挺火的领域。为啥火呢？主要还是新能源产业爆发式增长，大家对电池的安全、寿命、效率要求越来越高。再加上全球能源结构转型、电动化普及，储能需求也跟着猛涨，BMS作为电池系统的智慧大脑，自然就成了不可或缺的核心部件。

说到新能源，最近国际局势也挺有意思，油价从7块多蹭蹭涨到了差不多9块左右。高油价加上能源安全的焦虑，咱们国家推的新能源汽车，在这种大环境下，经济性、安全性和战略价值都越来越明显了。

那BMS到底是干啥的呢？简单说，BMS的工作就两件事：硬件负责感知和执行，主控盒、高压盒、低压管理系统加上各种传感器、继电器、熔断器，把电池的状态摸得清清楚楚。软件负责决策和沟通，盯着电压、电流、温度这些关键数据，跟整车控制器、充电机协调，把充放电控制得妥妥当当。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacKQGCmdXO4tnIJ2FibuLnqOp6iabp6OiasEzicRNuMmjvzF0HDsfN2xuB3uAlXOC1Z5BTFz5xry5HP9Wn6lAEOpPSiciasia1aLqFTcQ/640?wx_fmt=png&from=appmsg)

BMS框图，图源网络

好，问题来了——BMS自己也得用电吧，电从哪儿来？

现在很多电动两轮车、换电柜、还有低压储能系统，动力电池的总电压通常都在48V、60V、72V，高的能到100多伏。但BMS里面的MCU、AFE、通信模块这些芯片，用的都是5V、3.3V或者12V的低压电。这就需要一个降压转换的环节，把高压变成低压才能用。

所以BMS里用那种高输入电压的DCDC芯片，就是为了直接从高压动力电池取电，高效降压成低压，给这些电路供电。这么设计，系统架构简单了，不用先转给低压辅助电池再转一道，能量损耗也少了。而且，系统休眠或者低压电池亏电的时候，这颗DCDC还能保证BMS的基本监控和通信功能，可靠性更高。

所以说，这颗能扛100V以上输入电压的DCDC芯片，在BMS里头还真是个关键角色。

02

**Hi9263芯片介绍**

今天要聊的这颗Hi9263，就是专门干这个活的。

先看基本参数：输入电压范围6V到150V，输出电压可调，范围从1.2V到48V，输出电流3A（内置MOS版本）。这个电压范围意味着什么？意味着不管是48V的电动自行车、72V的两轮车，还是上百伏的电动汽车高压系统，它都能直接从电池取电，不用额外加一级变换。

这颗芯片有几个比较实用的特点：

**1、输入电压可持续150V**

150V的耐压给足了余量。实际应用中，高压母线会有尖峰、有波动，留够余量系统才稳。很多客户关心能不能超过140V，Hi9263的150V耐压设计就是奔着这个来的，实测冗余足够，用在BMS主控供电或者预驱供电上，心里踏实。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeuZ96BfPNb8Ut8aWwtPoH6VC5wxKqxkWpdxEAOWiaP9Lp7N3vqGKEKIlryl83JaFsq48x95BQmGqGu87BtjQhojicT6Un1PQrss/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niad6icddUKfjwO2ibNcPmgRLfSRgpuHLtQrE00vvskkqGFQSGR1Z0cVCmdsZ99Dg0FtojUFTibr1PAyK6VdPLfnQ2L18kydibbGOAlM/640?wx_fmt=png&from=appmsg)

**2、超快动态响应，低纹波**

这颗芯片用了专利算法控制，动态响应速度很快。实际好处是什么？就是负载突然变化的时候，输出电压不会忽高忽低、来回晃荡，能快速稳住。同时输出纹波也控制得比较低，这对给AFE、MCU这类对供电质量敏感的负载来说，很关键。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacMzAubpN2jxhN65B5tl9WmHE0fmoJuNezuYf5xaicgcLOcGdVrToicvJbZl9EhZJMG20vC2fjXuBrP9XibNC3DiafIkvSJj7t6d5A/640?wx_fmt=png&from=appmsg)

**3、内部集成随机序列编码抖频，优化EMI**

EMI问题在电源设计里一直比较头疼。Hi9263内部集成了随机序列编码抖频技术，简单说就是把开关频率的能量分散开，不会集中在某个频点上往外辐射。实际做产品的时候，过EMC测试能省不少事，不用在滤波电路上堆太多元件。

如下是EMI实测报告，最低余量在也有6dB以上，在40~45MHz频段之间。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niac06hbgc5CZfNicB6ShE21DLmCkJCtplxaaWjUF7gNOWwdjqqaZTd6SXy5yo6iay33hiaaibw5CnTJypg5cMJ8QITFMTeS4SJ1A0hs/640?wx_fmt=png&from=appmsg)

**4、多种保护，系统更可靠**

过温保护、输出短路保护、欠压保护、软启动这些功能都有。软启动电容外接，可以根据实际需求调节启动时间，避免上电瞬间冲击电流太大。使能脚也有，需要关断的时候直接拉低就行。

再说说封装。Hi9263是ESOP8封装，带底部散热焊盘，3A输出下散热压力不大。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafIIooMC4AZlVxeJVR5ePOKAicjI5LMS9UuFgLaoGZdniblUz2Dvxl56ibtBg07FVZibl1AO8TpuafDzPs9x7pYflibmzQRoViaxzVV0/640?wx_fmt=png&from=appmsg)

相比外置MOS的方案，内置MOS省了选型匹配的麻烦，PCB面积也小，对空间紧张的板子比较友好。

5、**超低功耗，待机不费电**

咱们来看看这颗芯片的低功耗表现。这里有两张曲线图，分别测了不同输入电压和输出电压下的情况。

先说待机：把EN脚拉低，芯片就进入待机模式，这时候功耗最高才1uA，基本上不费电。

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niadZqugDq9f9tXbGalfmG2bAXdUicOaXfib0kwhYrboTBARcZINoOGMNwTP51WaxbbCxrkqT03fWmaVO6yLMOg7PQXsfJnAAgZLDg/640?wx_fmt=jpeg)

再说空载：芯片正常工作、但不带负载的情况下，电流不到1mA，实测都在微安级别。

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niacjjibMicTM4seTbhePYU7lRn0vojefXMXPrO8q77PMlIicdgx55ciaP32rz1nURFv6STLMIjN3gpykic5XU5QkSDfAWdwVFwyNmicII/640?wx_fmt=jpeg)

总的来说功耗非常低，对做低功耗产品的朋友来说，这个表现相当能打。

03

**参考设计**

这是典型的应用电路，外围电路简单。VIN跟芯片的输入引脚直连，输入电压最高可以达到150V。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadh74awexkqURmh9bbVfUF0oiaTDZ7jL5jP26pQ2qy7XJueq0Q4LiabT3M9ws7QaGahwzzaovpCVomxfuysrsUed9RDKmk2MjgOE/640?wx_fmt=png&from=appmsg)

当输入电压超过120V时，原厂已经明确给出了建议：在SW引脚和BST引脚之间串联一个100Ω电阻。这个取值是经过严格测试的，因为电阻太大或太小都会影响电路性能。这里不得不夸一下原厂，在高压应用场景下直接把重点划了出来，省去了咱们工程师反复调试的麻烦，既可靠又省心。  

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niae1Ngibe0Kbth3vFlOl0zDaZg5xFOP9YCRuJ8r2Tvl7StIcJD7FRoXcfGFQHRKzSrleSKRgUbFIjcwZlQzWF6MmTtng1cEiayDQk/640?wx_fmt=png&from=appmsg)

这个电阻主要有两个作用：

1、减缓高侧MOS管的开启速度，抑制开关节点的电压尖峰；

2、限制自举电容首次上电时的浪涌充电电流，防止烧坏驱动芯片。

如果你想了解更多，可以参考我之前写的一篇文章[群友提问: DC–DC芯片的BOOT引脚是用来干什么的？怎么理解自举电容？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554984&idx=1&sn=2f9730df5b9a8d05c1b993215d10bd2a&scene=21#wechat_redirect)

1、输出电压设置

通过FB脚外接电阻分压来设定，FB参考电压是1.2V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacmLtNuASqP0sMqwrhYq61RDMF4zHppATibuIDnJqo0ytDdMSeORw1pjiaQfwheUhqEanzqx6ia2vz1uYefwqiaOpqyaE3Fn8Dqgqw/640?wx_fmt=png&from=appmsg)

计算公式如下，想调多少V，算一下电阻值就行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niad80lP67TIkRNic5veP5o1sbiaf3CWFpKHDr3u44x51XCiaN3qWxD93T2QR5qqsib4HrSQlYdK6IL0ceHnfict9HQLXRGCdTIPB2JFc/640?wx_fmt=png&from=appmsg)

2、电感选择

电感的计算公式手册里给了，大致思路是根据输入输出电压、开关频率、输出电流和纹波系数来算。纹波系数通常取0.2到0.4之间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacfXY0icsDOEI83dt1uV3FlPYNawHib8iaKaHGrAAbykQwc0INZs7pQwh7bmaicr2kDEwXPFOFQ2sAicr17mr1uJt6sRPn6ulMQOql8/640?wx_fmt=png&from=appmsg)

感兴趣的朋友可以深入研究一下，觉得麻烦的也可以直接引用参考设计。

3、输出电容

输出电容主要是稳住输出电压、把纹波压下来的。手册里也说了，建议用低ESR的陶瓷电容或者电解电容，纹波大小跟电容的ESR和容值都有关系。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niad3c0ZdsajSQxSicGz3fsJb82j05LtFS8cAH7xiap5TjmxYb0vazyBJ6K0pRRBV9cRgKDxBtdRVko4AbITDf0MToibAibrUoHPlMx0/640?wx_fmt=png&from=appmsg)

容值越大，效果肯定越好，但成本也跟着往上走。如果不想纠结这些，直接照着参考设计来就行，人家给的值都是验证过的，靠谱。

4、SS软启动电容

建议1uF，接在SS脚和地之间。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacia37V1bKaP75nxXGI4mrVzYmFowNqCbsvA19SwX5wNpABIxuImwf0B6co1dSfKD4d2kPPGnxrIpSRtoh1VAg56P9gosMrLGxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaezgCDHPaWeApia5xxeiaPROFfM1WLbcic5bVlEjTlCeDcl6LpIlEGqibMzpjTRiatkuZwODzuDufyibHbTTIlTOuKeTPeibphZMhhKQY/640?wx_fmt=png&from=appmsg)

**5、可调CS采样电阻基准，降低检测损耗**

电流检测这块，芯片的CS管脚可以设置过流点。通过调节外部电阻，能灵活配置过流保护阈值。而且采样基准设计得比较低，CS检测电阻上的损耗就小，对提高整体效率有帮助。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niafzIX6YxZwea945SmzfrVfRfOsBX3IibTaMVz2pk2S1icheEXp6flA3Jj3H2an3KUgJ5KGktR66zpqL9D3zDwsJbLYH7xvkXe4Rc/640?wx_fmt=jpeg)

还有一些其它电路设计要点，这里就不再一一列出，感兴趣的朋友可以咨询原厂获取设计资料。

04

**Demo板介绍与测试参数**

基于Hi9263做了Demo板，输入12V到120V，输出5V/1.5A。这个配置基本覆盖了常见应用场景。

下图是Demo板PCB和实物的顶层图片，有两个大的电解电容，一个是电压输入，一个是电压输出。大电解电容主要用于滤除脉动直流中的低频纹波，让电压更平稳。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaebcntjCk1Om4TicHTkg8OcouiapJ5LYIgzHARByINBjWDxAavjE0RKmw4AXq70NiaEBOEGSdcGWC8lCfuWAmIG117cTFHWIxmfXU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaf8FKRuPOPX2ow43icMAiaJeNsvOEUUy405dWUkAP4icWt7RNCawgYLG3xzpVceuIYI26k0l72BJcWFWNMFNIavfEPLDmUlUBSAibM/640?wx_fmt=png&from=appmsg)

下图是Demo板PCB和实物的底层图片，我们的DCDC控制芯片就在这一面，配合输出的大电感，还有相关阻容元件。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadDqibLfr2nesk4EWmiczn4yLsxOrA9u387UgpQBPuJdEkMO51m5ZOt8s38Ey5Jz2pibJFia6LRvR2ak6CusOI8LcBqgy9sluXLnibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niacFmjC4l6Ah2ardCwObbAWnzBgr7KQeACo2KZLFubRHhXibVq0kS89a6MF50810UQIlPDroa2ZCcQnWqG4crcO2C3vxqPSPU9HM/640?wx_fmt=jpeg)

原厂**实测表现：**

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf2rblKOfrC6ApeB8bVZqwibHia0OODfTdn2xzw8RIibmy31FgRyoIqeFmAXmQAsf5cTWuCJCWlPrgrX8eILxzfT2fUiao2tTTsgZk/640?wx_fmt=png&from=appmsg)

开关机软启动效果明显，无过冲。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niad6IUWOic4nT6Lvnic8mOul55ZVEUeL0bRibNHEKnol13oJFYl6jHEFH0dbdgialcMibxQFHgjia90xPf7l3F1bUAcibC5BHwFLWvthbU/640?wx_fmt=jpeg)

  

开关节点波形干净，无明显振铃。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadOEKKkVEDxTiahoVZURy92icr2MvRrDgicibRciaicuKfTwFfHyyU7gRQDKrzBCfIv5ZQW3pHHlRpLqiadNjyWBl3lNATUKgX4aKiaevg/640?wx_fmt=png&from=appmsg)

动态响应：负载从轻载到满载跳变，输出电压跌落幅度小，恢复时间快，没有震荡。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacbKsecaddrlK2NclibjtBPVc1m41kDB3icnia61jbwVgdO8icibFaeKXY1kp4xXAnN1H1kX7ZMoWxE0B7Fp4tQCvPnpoo0FJCZpBzk/640?wx_fmt=png&from=appmsg)

短路保护及时，能正常开启和关闭。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaceeQDVNhIHEeuo698dib5OUNk2uMMZku2PTlmhXzmjibRqzTtnGA9jYj1iaoXBGwEX7vHeb8SicHOfg9TQBv3bH1CJcHPuM2PVEKk/640?wx_fmt=png&from=appmsg)

温升测试通过，整体表现良好，即使输入130V，IC本身最高温度为86.3℃。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacgZtM1frPkpiclukwPibicwWusZm4yt3GToNpOopn7ovibVJt8jKibPIVFl5gPlibNu0WOLPNfRG29y7LDpvQjlTMiaiczRQwCIUOjr1E/640?wx_fmt=png&from=appmsg)

从测试结果来看，这颗芯片在高压输入、低压大电流输出的场景下，稳定性和可靠性都经得起推敲。

05

**小结**

Hi9263是一颗输入耐压150V、输出电流3A的异步降压DCDC控制器，内置MOS，封装小，外围电路简洁。它主要解决的是高压母线直接取电、降压给低压系统供电的问题，在BMS、电动自行车转换器、换电柜、工业控制、无人机这些领域，都能用得上。

如果你手头正好有这类项目，值得上手试试，也可以找原厂申请块demo板回来实测验证一下。

今天的内容就分享到这里，咱们下期再见！