# 静电放电ESD保护设计方案

原创 电路一点通 2024-08-07 19:20 广东

> 原文地址: [https://mp.weixin.qq.com/s/UeWVZt9nb04r1ErfKFG\_NQ](https://mp.weixin.qq.com/s/UeWVZt9nb04r1ErfKFG_NQ)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_000_e2b0253435ca.png)

  
**ESD 保护方案**  
  
图 5- 2 所示的片上保护设计概念被用来避免来自几乎随机组合的引脚之间的HBM / MM ESD 应力损伤。对每一个输入或输出引脚， 在压焊点与 VDD 和 VSS 电源线之间采用 ESD 钳位器件， 用于泄放 I / O 引脚上的四种模式的 ESD 应力。为了克服引脚到引脚之间的 ESD 应力和 VDD 到 VSS 之间的 ESD 应力， 在 IC 的VDD 与 VSS 电源线之间必须放置电源轨 ESD 钳位电路\[4，5\] 。对大多数逻辑 IC，I / O 电路的电源引脚通常与核心电路的电源引脚分开， 以避免噪声耦合， 并且可以减小地弹。图 5- 3 所示为典型的采用独立电源引脚的整个芯片 ESD 保护方案。

  
图 5- 2 片上 ESD 保护设计的概念除了输入与输出端口的 ESD 钳位器件， 对 IC 中所有器件和电路防止 ESD 损伤（ 特别是针对引脚到引脚和 VDD 到 VSS 的 ESD 应力） ， 实现整个芯片保护的最重要的设计是合理排布电源线， 并且在不同的电源线之间采用电源轨 ESD 钳位电路。如图 5- 3 中虚线所示， ESD 电流泄放通路或在引脚对引脚 ESD 放电下的 IC，可以通过使用 I / O ESD 器件、 金属电源线和电源轨 ESD 钳位电路来建立。  
  
使用正确的整片 ESD 保护计划， 通过位于 I / O 端口的 ESD 钳位器件和位于电源轨之间的 ESD 钳位电路， 才能实现对核心电路的有效保护。

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_001_548540d73096.png)

图 5- 3 IC 中 I / O 电路和内部电路采用不同电源引脚的整片 ESD 保护方案  

大多数传统的 ESD 保护设计集中在针对 I / O 端口的 ESD 保护电路和器件，  
这可以给四种引脚组合模式的 I / O 端口提供针对 ESD 应力的保护。但是， 位于I / O 端口的 ESD 保护电路或器件不能针对引脚到引脚和 VDD 到 VSS 的 ESD 应力实现对内部电路足够的保护， 从而经常发生 ESD 应力引起内部电路失效， 但在I / O 端口的 ESD 器件并没有发生失效。对于采用多个独立电源的 IC 来说， 建议采用的整片 ESD 保护方案如图 5- 4 所示， 一个著名半导体生产线的设计规则中采用了这种设计。

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_002_1d0c4252aea0.png)

图 5- 4 针对拥有多个不同电源线的 IC 整片 ESD 保护方案

VDD ESD 总线与独立电源 （ VDD1， VDD2， VDD3 ） 之间的ESD 传导电路使用层叠二极管\[7\] 甚至是双向晶闸管 （ SCR） 整流器\[8，9\] 。对一个采用具有多个不同电平的复杂电源的 IC （ 例如片上系统 （ SoC） ） ， 采用多个 ESD 总线的整片 ESD 保护方案如图 5- 5 所示。在整片 ESD 保护方案中， 位于 I / O 端口和 电 源 轨 之 间 的 ESD 钳 位 器 件 仍 然 可 以 实 现 对 内 部 电 路 的 安 全保护。

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_003_76c4fcbc6747.png)

节选：纳米CMOS电路和物理设计-363页.pdf

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_004_2ce062824330.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_005_699d4384976f.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\静电放电ESD保护设计方案_images\img_006_211c83cab9c2.other)

## **一点通推荐**

[双N沟道_MOS管_驱动电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247517499&idx=2&sn=23f6347891897fd5adea7d25a541a4af&chksm=fcef6659cb98ef4f0a195972fd14f8fda1e847c40e1adfed55170ef205ddb12d7a014688022a&token=1779069982&lang=zh_CN&scene=21#wechat_redirect)

[_MOS管_双电源自动切换电路设计，能0压降实现？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247517240&idx=1&sn=821e45c518db801287717b570980e969&chksm=fcef675acb98ee4c0a616b3fd3bb352ec6fcb510188c306d511e3fb9a5fd57716af1f19ec858&scene=21#wechat_redirect)

[_MOS管_的判别与导通条件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520228&idx=1&sn=5996780179fbf01f66b5db0c71622ac3&chksm=fcef6c86cb98e590e3d3734ee27797bdded17b6b648b3b0d3b1599e8a4496a1fa4e457be6516&scene=21#wechat_redirect)    

[在_MOS管_栅极前加100Ω电阻，究竟有啥妙用？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520502&idx=1&sn=600b7167e4a7a1cae254017e5b330ecc&chksm=fcef7394cb98fa827330e1eebc5dd1a1c6e09c401ca9fe0257f29898b1750586f5761ae8be97&scene=21#wechat_redirect)    

[_MOS管_缓启动电路（实例讲解）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247521834&idx=1&sn=463230b82cb7bdc7d1686d701195339a&chksm=fcef7548cb98fc5ef2d39aa10b92c688ce245cf606359330bf5462fee71158e3ce2dc2231f3b&scene=21#wechat_redirect)