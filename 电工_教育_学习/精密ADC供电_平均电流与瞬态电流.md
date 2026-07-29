# 精密ADC供电：平均电流与瞬态电流

原创 电路一点通 2025-09-10 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_bud0Gr-RmN1g7vlV6HH5w](https://mp.weixin.qq.com/s/_bud0Gr-RmN1g7vlV6HH5w)

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [稳压二极管的串联与并联](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551866&idx=1&sn=e2a316d07dbbee1b0f728a06086047cb&scene=21#wechat_redirect)
    
-   [电路设计：复位电路、时序、时钟电路、MCU模块](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550821&idx=1&sn=675ab7a68c647ca8fbe2a5b8c3357f70&token=1905853560&lang=zh_CN&scene=21#wechat_redirect)
    
-   [小鹏新P7汽车核心零部件供应商一览](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526538&idx=1&sn=bc3bc5debd1585722f392d2e30814e90&token=737071927&lang=zh_CN&scene=21#wechat_redirect)
    
-   [10-100W硬派越野，更爱这辆“东风猛士”](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526405&idx=1&sn=fb4bba6c4116d2f994e91513a9eab072&token=737071927&lang=zh_CN&scene=21#wechat_redirect)
    
-   [电工公式、 口诀、各种维修方案汇总](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456261417&idx=1&sn=30a37b5752ea174f1bc44c22c14f81c4&scene=21#wechat_redirect)
    

##   

## 1 简介

务必要了解ADC数据表中的电流消耗是在稳定工作条件下指定的平均值。因此，虽然ADC瞬态电流可能比指定的ADC电流大几个数量级，但这些测量的电流值并不能表征瞬态电流需求。在不同的ADC工作模式之间切换时，可能会出现瞬态电流，并且瞬态电流在最初为器件供电时最为显著。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_000_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

## 2 电源规格     

        ADC数据表中的电流消耗是在稳态工作条件下指定的平均值。具有多种不同工作条件的ADC需要指定多个电流值。这些条件可能包括ADC平均电源电流，该电流会相对于数据速率进行调节，或在启动可编程增益放大器或电压基准等内部功能时电流需求会增加。如下图所示：

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_001_36d967461617.png)

        由于数据表电源规格对器件或支持电路在正常运行器件所需的任何瞬态电流需求取平均值。但是，启动和开关期间的瞬态电流可能明显大于数据表中指定的值，可靠的系统设计必须能够应对平均和瞬态电流需求。

## 3 瞬态电流

        瞬态电流方面的一个挑战是，由于 ADC 的工作条件和周围电路不同，瞬态电流的幅度和持续时间可能会有很大差异。因此，ADC  数据表很少指定瞬态电流。然而，通过使用示波器探测与电源走线串联的小电阻，可以测量给定系统配置下的瞬态电流。然后，您可以使用欧姆定律来确定产生的电流。

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_002_0206423494b9.png)

        第一个瞬态电流测试是上电测试，其中在 AVDD 和接地端之间安装了推荐的 10μF (C23) 和 0.1μF (C24) 去耦电容器。

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_003_a7debd2d3659.png)

        绿色箭头指示为去耦电容器充电所需的第二个瞬态电流。在正常工作条件下，去耦电容器会存储补充电荷，以便在发生瞬变时提供额外电流。这种额外的电荷有助于保持稳定的电源电压，从而使  ADC 操作不受影响。但是，当系统上电时，电容器必须从未充电状态充电至电源电压。未加电的电容器在系统上电瞬间的行为类似于短路，从而会导致大浪涌电流。浪涌电流的幅度随着去耦电容器值的增加而增大。 

        为了仅测量 ADC 所需的瞬态电流，第二个瞬态电流测试移除了AVDD 与接地端之间推荐的 10μF 和 0.1μF 去耦电容器。

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_004_70d05ca76e5f.png)

        图中的 45mA 瞬态尖峰仅表示 ADC 因开关而需要的上电电流。正如预期的那样，与在安装去耦电容器的情况下会出现 250mA 尖峰相比，仅 ADC 时的瞬态电流会更小。不过，虽然这样会降低瞬态电流的幅度，但代价是 ADC 达到稳态电流所需的时间明显延长，因为电容器不再提供任何补充电荷。此外，这个 45mA 的瞬态电流仍是表 1 中所列最大 ADC 电流规格 (4.5mA) 的 10 倍。 

        执行了第三组测试，以验证不同的功能也会导致瞬态电流尖峰。启用VREF就是这种会产生尖峰的功能。下图显示了此瞬态电流的观察行为。

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_005_f052c3808cce.png)

        ADS1261 ADS1261 VREF的典型电流为 0.2mA。在PGA禁用 (2.7mA) 且内部 VREF启用的情况下运行 ADC 时，应该产生 2.9mA 的总电流。然而，上图中测得的瞬态电流为60mA，比预期值大 20 倍以上。此瞬态电流主要来源于为VREF输出引脚和接地端之间的滤波电容器充电所需的浪涌电流。 

## 4 电源电路选择

        瞬态电流可能导致压降等问题，进而可能导致ADC运行不稳定。因此，设计电源时务必要考虑平均和瞬态电流需求。下面将对比三种不同电源选项的优势和挑战：

低压降稳压器（LDO）：建议使用LDO为精密ADC供电，LDO有如下优势：出色的噪声性能、低电压纹波以及小而简单的实现方式，能够在瞬态期间可靠的保持输出电压，同时还提供低静态电流。

线性稳压器：较LDO成本低。线性稳压器可以在瞬态期间可靠地保持输出电压，同时还提供与 LDO 类似的低静态电流。使用线性稳压器时的挑战是压降电压明显更大，这可能需要特定的电压轨来为这些器件供电。线性稳压器还往往采用较大的封装，因为它们的效率较低并且要散发的热量较多。额外的热量会导致封闭式系统温度升高，从而可能导致精密系统出现漂移误差。

并联稳压器： 其中一种最具成本效益的电源选项。虽然该选项可以节省成本，但设计可靠电源电路的复杂性也会增加。例如，需要双极电源供电的精密ADC可以使用低电压可调节并联稳压器 TLV431来生成 ±2.5V的电压轨。您可以使用TLV431来实现此目的，因为它具有低VREF。然而，使用该稳压器时存在一个挑战，那就是它只能提供有限的电流。 TLV431数据表还要求阴极电流不小于 1mA。这两个限制因素限制了下图中所示标准设置的输出电流能力。

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_006_c44f5f092503.png)

         上图中显示了阴极电流和提供给 ADC 的电流都必须流经电阻器 R1。该配置将电源电流限制为  (VSUP–VREF)/R1，从而带来了两个设计挑战。首先，即使未施加负载，持续流经 R1 的电流也会消耗功率。尝试降低 R1  来增加可用电源电流也会成比例地增加静态功耗。其次，R1设置的最大电流通常无法支持 ADC  所需的数百毫安瞬态电流。如果无法提供必要的电流，会导致电源电压下降，并可能导致 ADC 运行不稳定。

## 5 低功耗系统 ：断电还是关机？ 

        低功耗 DAQ 系统通常通过使用多种不同的断电方法来实现省电。一些 ADC  的断电模式是在其未使用时置于低功耗状态，从而帮助降低系统功耗。ADC 数据表中指定了此模式下的电流消耗。另一种常用的节能技术是在 ADC  未使用时直接关闭电源，并在需要时重新打开电源。此方法在系统关闭时不产生功耗。  
        但是，后一种方法会受到本文所讨论的瞬态电流的影响，因为任何电容器都必须在每次上电下电时充电。您可以使用电荷 (Q) 和电流 (I) 的标准公式来估算电源关闭时的系统电流消耗，然后将此值与断电模式下的 ADC 数据表值进行比较。

        例如， ADS1261 数据表建议在 AVDD 和 AVSS 之间并联10μF 和 0.1μF 去耦电容器。该数据表还指定  AVDD 必须为 5V。根据方程式 2 和方程式 3 计算得出，如果电源每秒上电下电一次，则平均电流为 50.5μA：

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_007_074c713acafa.png)

        断电模式下的ADS1261 断电电流仅为 8μA（最大值）。比较这两个选项可以发现，使用 ADC断电模式所节省的功耗是关闭电源时所节省功耗的 6 倍以上。因此，必须考虑瞬态电流对总体功耗的影响。选择将 ADC 置于断电状态通常是更节能的解决方案。 

  
#电路一点通 诚邀您一起做公益！

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_008_1e7faab63247.png)

  

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\精密ADC供电_平均电流与瞬态电流_images\img_009_4e7f01e13b90.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️