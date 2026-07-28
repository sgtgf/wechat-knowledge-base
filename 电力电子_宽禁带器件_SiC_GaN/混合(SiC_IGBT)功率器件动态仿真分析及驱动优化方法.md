# 混合(SiC+IGBT)功率器件动态仿真分析及驱动优化方法


> 原文地址: [https://mp.weixin.qq.com/s/ahmYK1PHvu6mnzWwBTH-CA](https://mp.weixin.qq.com/s/ahmYK1PHvu6mnzWwBTH-CA)

文章来源：汽车电器

作者：谢冬华，金昶明（吉利汽车研究院 （宁波） 有限公司，浙江 宁波 315336）

【摘 要】 文章针对SiC及IGBT混合并联功率器件进行仿真分析，研究混合功率器件动态开关特性，通过优化SiC及IGBT的控制方式降低开关损耗，进一步在控制方式上进行优化，达到更理想的动态特性，并进行仿真验证。

【关键词】 SiC；IGBT；驱动控制技术

0\. 引言

当今工业、汽车、航空等各个领域的电力电子设备中，IGBT 作为电能转换核心关键器件发挥着举足轻重的作用，因其成熟的工艺及大电流、低功耗的特性，使其具备极佳的性价比。近年来，随着SiC 技术的成熟，因其宽禁带优势带来的高功率密度在各领域中得到了认可及应用，然而其成本始终高于 IGBT。

混合 SiC 及 IGBT 的功率器件是相较于全 IGBT、全 SiC 的折中方案，其通过 IGBT 与 SiC 的数量配比，降低 SiC 的使用量，通过灵活的控制策略来分别控制 IGBT 与 SiC，以优化性能及效率。

然而 IGBT 与 SiC 并联电路的设计较复杂，需要优化驱动和控制策略，以发挥混合功率器件的优势。本文通过仿真分析混合 SiC 及 IGBT 的功率器件动态特性，并在控制方式上进行优化，以达到更理想的动态控制效果。

1\. 混合功率器件特性

1.1 导通特性

IGBT 在高电流下呈现为双极性，具有几乎恒定的导通压降，大电流下损耗较低，在大电流应用中具备较高的可靠性，而 SiC 因其恒定导通内阻，在低电流下展现出低功耗特性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRG5eH4t7IImXhFgNVUJHiaM2agvSKTiahMI3CdLcmaVnWDcGPEFEFI4F8Q/640?wx_fmt=png&from=appmsg)

如图 1 所示，在低电流下混合器件主要呈现 SiC的低导通电阻特性，这意味着在轻载时，SiC 的导通损耗较低，因为其导通电阻远低于传统的 IGBT，这种特性使得混合器件在低电流应用中非常有效，能显著降低功率损耗，提升系统的整体效率。

当电流增加到一定程度时，由于 IGBT 的电导 调制效应，大部分电流从 IGBT 流过，使得混合器 件的导通特性接近于 IGBT，具有较低的导通压降； 在高电流应用中，混合器件的电导调制效应使其能 够保持较低的导通损耗，进一步提升了其在高功率 密度中的效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGbE71aOoygKCKgWQl9gmCnP64RfHFlTH5smWVBvHY1ryz3bqXFCm9oA/640?wx_fmt=png&from=appmsg)

 如图 2 所示，通过合理分配 IGBT 与 SiC 数量进 行并联可以发挥高电流 IGBT 恒压特性以及低电流 下 SiC 低导通阻抗特性，使得在宽功率范围中实现 较低的导通损耗；当前 IGBT 与 SiC 的比例较多存在于1∶1、2∶1、3∶1之间，此范围配比可以发挥混合器件在全负载电流范围内呈现正温度系数，提升整体效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGdrSTFia1icIfsqAicibEOfUjbPljO8sibo9qOcJoWebYpxZVqv6lQc3h24w/640?wx_fmt=png&from=appmsg)

如图 3 所示，可以将 IGBT 恒压点作为界限，分为模式 1 的 SiC 工作模式及模式 2 的 IGBT 工作模式，进行合理的驱动控制模式切换，发挥器件的最佳工作性能，以提高整体功率密度。

工作模式的切换可根据负载状态进行变换，通常通过检测负载侧扭矩和工作电流，确定当前的工况类别，包括重载工况、匀速额定工况、轻载工况和再生制动工况等。根据工况类别，确定混合功率器件的模式状态。

1.2 开关特性

IGBT 属于双极性器件，其在开通与关断过程中，因少子与多子的注入、存储及复合过程，使得其在开通过程中须经历电导调制进入导通状态，关断过程中须经历存储的少子与多子的复合过程，使得关断过程中出现拖尾电流。而 SiC 作为单极性器件，不具备以上 IGBT 开关过程，具备更快的开关速度。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGpFsI4vK2oFC7XUBhbNqdJnvMmzTPR16wuiaI5ZcGXA2gvVeyCbicia0UQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGh3cvrNFFk2ib0P5VorwuheFpnJLiaR7AiarW1etsyGQK4TgAtwLAEvGNA/640?wx_fmt=png&from=appmsg)

对比图 4、图 5 可知，SiC 相较于 IGBT 具有更快的开通速度及关断速度，但其开通关断过程中存在较高的 di/dt 与 dv/dt，需在控制回路中进行合理的参数配置，以降低电应力。

2\. 混合功率器件动态仿真

2.1 双脉冲仿真模型

双脉冲测试是一种用于评估功率器件 （如 IGBT和 SiC MOSFET） 动态电气特性的测试方法。通过发送两个脉冲信号并分析其响应，双脉冲测试能够提供器件的开关时间、开关损耗和电压尖峰等关键参数，对于器件的选型和优化至关重要。

2.1.1 脉冲信号的构成

双脉冲测试通过发送 2 个脉冲信号到待测器件，第 1 个脉冲用于使器件导通，第 2 个脉冲用于评估器件的关断特性。这 2 个脉冲之间有一个短暂的时间间隔，以便观察器件的响应。

2.1.2 响应信号的测量

在接收到第 1 个脉冲后，器件会产生一个响应信号。在时间间隔结束前，第 2 个脉冲信号到来，器件再次产生响应信号。通过比较这 2 个响应信号的差异，可以获得器件的时间响应特性、频率响应特性、线性和非线性特性等。

2.1.3 关键参数的测量

1） 开通时间和关断时间。双脉冲测试可以测量器件的开通时间 （上升时间） 和关断时间 （下降时间），这些参数对于评估器件的性能至关重要。

2） 开关损耗。通过分析器件在开关过程中的电流和电压波形，可以计算出开关损耗。开关损耗是评估器件能效的重要指标。

3） 电压尖峰。在器件关断过程中，由于回路杂散电感的影响，会产生电压尖峰。电压尖峰的高度和持续时间直接影响器件的安全性和可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGDLiaLIuUL2qA9LicxFWChuxX805g4uCGsEp5cwXGibPKmfiaHLFLoaK0dw/640?wx_fmt=png&from=appmsg)

为了验证 IGBT 与 SiC 混合并联动态特性，搭建如图 6 所示的双脉冲仿真模型，其中 IGBT选用英飞凌TO247单管 IKY75N120CH3， SiC 选 用 WolfSpeed TO247 单管 E3M0040120K。

2.1.4 双脉冲仿真的目的

1） 评估器件的动态电气特性。双脉冲仿真可以评估功率器件的动态电气特性，如开通时间、关断时间和开关损耗等。

2） 验证器件的安全工作区。通过仿真，可以验证器件是否超出安全工作区，确保其在实际应用中的可靠性。

2.1.5 电路设计优化

1） 优化驱动电路设计。双脉冲仿真可以帮助优化驱动电路的设计，包括驱动电阻的选择和吸收电路的设置，以提高系统的整体性能。

2） 减少实际应用中的风险。通过仿真分析，可以在实际应用中减少由于电路设计不当导致的器件损坏和系统失效的风险。

本仿真设定母线电压为 800V，针对半桥上管IGBT1 与 SiC1 施加负压使其关断，针对半桥下管IGBT2 与 SiC2 施加两次脉冲触发开通及关断，其中环路电感用以模拟系统整体的杂感参数，负载电感在半桥下管开通时产生线性电流，半桥下管关断时续流二极管维持负载电感电流。

2.2 混合功率器件控制方式

由于 IGBT 与 SiC 具有各自独特的动态特性，且各自在不同电流下的损耗各有差异，在实际应用中须综合考虑以上因素。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGKNGGUZfPFWutemy0nKpEQvkTfR0ia03KzXWiceO2Q4XNLjpGQzA3nvGw/640?wx_fmt=png&from=appmsg)

如图 7 所示，在 SiC 与 IGBT 的驱动波形之间设置延迟时间 Delay，具有三种状态。

1）状态1。Delay=0，代表SiC与IGBT同时导通。

2） 状态 2。Delay>0，代表 SiC 优先于 IGBT 导通，滞后于 IGBT 关断。

3） 状态 3。Delay<0，代表 SiC 滞后于 IGBT 导通，优先于 IGBT 关断。

状态 1 时，SiC 与 IGBT 同时导通，电流在两种器件上进行自然均衡。状态 2 时，SiC 优先开通并承受小电流，工作于模式 1，IGBT 处于 ZVS 开通，有效降低其导通损耗，并承受大电流；工作于模式2，关断时与开通情况相似不再赘述。状态 3 时，IGBT 优先于 SiC 开通，适用于大电流工况，避免SiC 在大电流状态下开通，导致过应力。关断时与开通情况相似不再赘述。

2.3 仿真结果分析

通常控制方式状态 2 可以充分发挥 SiC 与 IGBT各自的优势，小电流下发挥 SiC 低阻低功耗的特性。通过 IGBT 延迟导通与提前关断方式，使得 IGBT 实现了 ZVS 开通与关断，能有效降低 IGBT 的开通关断损耗。本文针对状态 2 进行仿真分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGQZq5UxTJceiaTeUgX0VwZAYHVEReiaeG0icpeUyS6k2UF8dZJn0f7DPeA/640?wx_fmt=png&from=appmsg)

如图 8 所示，在电流低于 30A 时，主要由 SiC进行输出，2.5μs 后 IGBT 逐步导通，5.5μs 后 IGBT电流输出占比越来越大。随着时间推移，后期大电流主要通过 IGBT 输出。如图 9 所示，混合功率器件在第 2 次脉冲到来时，因 SiC 优先于 IGBT 导通，且SiC 开关速度高于 IGBT，使得 SiC 瞬间通入大电流，导致很高的 di/dt。随着 IGBT 的导通，SiC 电流逐步降低，IGBT 输出电流逐渐增大，期间存在一段换流时间。换流时间内，SiC 承受较大的电流冲击，功耗增大，器件温升随之增大，由此会降低 SiC 的可靠性。可以通过换流时间的优化来降低 SiC 承受电流冲击时间，以此平衡器件的损耗及温升。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGQsibADIdntWa1ONEkXIk43lmPkzx6ztRwlFS5bSibicxBH8DwaPkhNmsA/640?wx_fmt=png&from=appmsg)

3\. 驱动优化方法及验证

3.1 混合功率器件控制方式优化

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGZmmLicHicUaRIcOdy6Qo2SPnoNAHM9AXJPRGDJlxcVJAztFUxm2TibZGA/640?wx_fmt=png&from=appmsg)

如图 10 所示，通过在换流期间对 SiC 增加一段shutdown 时间，此时间将短暂关闭 SiC，预期在这段时间内将大电流快速流入 IGBT，使得 IGBT 与 SiC 电流切换时间变短，以此可以降低SiC的功耗及热损。

基于图 9 可测得换流时间在 0.5μs，设定仿真模型中 shutdown 时间值为 0.25μs，并在换流时间内执行 SiC 的关断。

3.2 仿真结果分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGtvmqdGQoNVIHuPXZN2yzAiczAwGluItsRiaCt8UjHYglYYfiamib72WAKQ/640?wx_fmt=png&from=appmsg)

由 图 11 可 知 ， 在 shutdown 为 0.25μs 时 间 内 ，SiC 电流迅速跌落，IGBT 电流随之迅速增大，SiC与 IGBT 的换流时间大大降低，仅为 0.1μs，IGBT 在开启后的 0.1μs 时间内迅速通过大电流，发挥了其通流能力大、相对损耗低的特性。经过 shutdown 时间后，SiC 再次开启，SiC 电流逐步加大并逐步达到稳态值。

可见，通过此方式，可以加快器件换流，使得IGBT 与 SiC 迅速进入最佳工况，优化了动态损耗。

同样由图 11 可知，在 shutdown 期间，IGBT 与SiC 同时经历了一段高 di/dt 及 dv/dt，在实际应用中需要合理调配驱动回路参数以及环路杂感参数，来降低此阶段带来的大应力风险，降低器件之间的控制信号串扰及击穿风险。

4\. 结论

本文针对 IGBT 与 SiC 导通特性及开关特性进行分析，并基于实际物理器件模型搭建了混合功率器件双脉冲测试仿真模型。基于 IGBT 与 SiC 开关特性设计其驱动控制方式，并进行仿真分析，进一步优化控制方式，优化 IGBT 与 SiC 的换流时间，以此降低开关损耗，最大程度发挥IGBT与SiC的性能优势。

然而在混合功率器件的应用中尚存大量的驱动控制方法需要优化，如：通过负载状态检测来实时切换开关模式的方法、混合功率器件的过流保护机制、混合器件的热均衡控制方式等，随着混合功率器件的普遍应用会得到攻克，以此有效提升混合器件的驱动控制性能，确保其在各种工况下的稳定运行和高效能。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskmEcjVvTshzwzCZpMolnRGEGmvuSQFsRMmy4Rrj71ePbtqbfkhIeQdSssF8NtITAEc75r4jEoicvQ/640?wx_fmt=jpeg)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiahHY93hS9sVhQbJicB3yu1p2EzqNhSicic9KUP5bWDFuEs5HrgBq6GpncQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiadr1zvTneRoaXvksADMzkObY7DGndXehDddqmkZQmHSTCniaQHZicibE8A/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaeOqRtFcDArvPtSZx1wmqXjSQPvsD3ltVdA4KhKv12zXHlXklkw8ibqw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiajVfvepZuwVjmCc2woBhbQhiapibic1aE4gULukk0XDXBXfwrDwGeLichKQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)