# BLDC电机控制中的同步整流技术

原创 傅存敬 电磁散人 2025-09-15 22:37 广东

> 原文地址: [https://mp.weixin.qq.com/s/DEaYpqOj\_DythlaSBM4Jcg](https://mp.weixin.qq.com/s/DEaYpqOj_DythlaSBM4Jcg)

上次讲解了BLDC电机中[不同的PWM方式对电机控制性能的影响](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483913&idx=1&sn=4da11a44d0628e7464cc99d31ed3003c&scene=21#wechat_redirect)，大家觉得似乎互补式PWM方式有害无益，在实际应用中是一种多余的技术，实则不然，这种控制方式合理运用的话有其独到的优点。今天咱们来聊聊一种既省电又聪明的技术——无刷直流电机的“同步整流”技术。我会用修水管、开闸门这些生活例子，结合文末给出的参考文档1和参考文档2的核心发现，带大家看懂这个高科技背后的巧妙设计。

* * *

一、问题起源：电都浪费在哪了？

想象一下，咱们的无刷直流电机就像个精密的水泵系统。每次开关阀门（MOSFET管）时，水流（电流）突然被截断会产生反冲。传统解决办法是在水管旁接个泄压池（体二极管），让多余水流流进去慢慢释放。但问题来了：

参考文档2中的图2清楚展示了传统模式的运作机理：当Q1阀门关闭，水流只能挤进旁边窄小的泄压池（二极管D2），这个池子入口有一个0.7V电压门槛——相当于水流要翻一座山才能进去！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4icpuricicAeUpLY8OAmuV7LH3UtTMylVhrqLficiaHic7ehOYxh7Adh7sqew/640?wx_fmt=png&from=appmsg)

计算能量浪费（参考文档2数据）：

若水流=10A，爬过0.7V门槛的能耗 = 10A × 0.7V = 7w

而如果水流直接通过MOS管的沟道（相当于宽阔水道），按10mΩ电阻算：能耗 = (10A)² × 0.01Ω = 1w

结论：近86%的电能被白白烧掉！

* * *

二、解决方案：给泄压池装个智能闸门

工程师们想到个妙招：在泄压池口加装可控闸门（MOS管）。当主阀门关闭时，智能系统立刻打开这个闸门，让水流平缓通过宽阔水道（MOS管沟道），避开窄小的二极管。这就是同步整流技术（参考文档2称为Active Freewheeling，即主动续流技术）。

参考文档2的图3展示了主动续流模式的工作机理：M1关闭瞬间，M2闸门经一段死区后开启，形成绿色通道！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4RM7iaVr1iaRHB2QzMGuP38icyqQFMTfiahv8dUs7TWCficqt43uyztqmFKQ/640?wx_fmt=png&from=appmsg)

关键技术：互补PWM+死区时间（参考文档2中的图4）

-   上下管像跷跷板：一个开，另一个必关（互补）；
    
-   但切换瞬间留个“安全空隙”（死区时间），防止两管同时开导致短路爆炸。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4Sh4trcAXnFD2of2sTeXfwz2dIwOz6CxtD6bicPvUWl9LLm1z8zialNiag/640?wx_fmt=png&from=appmsg)

* * *

三、新难题：如何知道每个水管的水流？（单电流传感器重构技术）

同步整流虽好，但在常规的单电阻电流采样的BLDC电机控制器中，又引出了新问题：只在总水管（母线）装流量计，如何知道各支管（相电流）的实时水流？ 这直接关系到电机力矩精准控制（参考文档1核心问题）。

参考文档1中发现关键的规律（第3章）：

电机运转时有 “两相导通” 和 “三相导通” 两种模式，像水管的不同组合方式：

1\. 两相导通模式（参考文档1图3）

此时只有两条水管通水（如A、B相），总水流（母线电流 is）和分管水流（ia, ib）有精确数学关系（尖括号表示对一个PWM周期求平均）： 

-   D(−⟨ia(t)⟩) = −⟨is(t)⟩
    
-   D⟨ib(t)⟩ \= −⟨is(t)⟩
    

翻译成人话：占空比D就像水闸开合比例，通过它和总流量 is可反推出分管流量！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4HzbLJHbhSxL0jXW1Ty5Phn4hniaR9Adib7XiaxibIMuIMpkKBOlPzvGqNA/640?wx_fmt=png&from=appmsg)

2\. 三相导通模式（换相瞬间，参考文档1图4）

此时水流路径复杂（参考文档1图6显示波形不对称），先说“这段时间里电流怎么走”：

在同步整流策略下，某些时刻三相都会导通，形成三相回路（论文把这类时段称为II、IV、VI类“三相导通状态”）；

这时三相电流满足电机的电流连续性关系：ia + ib + ic = 0。

直流侧与电机之间的能量交换主要发生在“PWM上管导通”的那一小段时间；当上管关断、进入自由续流状态时，电流更多在三相之间“打圈”（通过同步整流的低阻通道），与直流侧的交换显著减少。

由于母线电容把PWM高频脉动吸收/释放，论文采用“PWM周期平均”的近似（参考文档1中公式16、17）：is ≈ 〈is〉，ia ≈ 〈ia〉（尖括号表示对一个PWM周期求平均）。

在平均意义下，电源侧流入的电流与电容电流相反（即参考文档1中给出的公式13：icsf = −isf）。简单理解：你从电源那头看到的平均电流，就是电机通过母线跟直流侧“真正交换”的平均电流。

于是，平均到一个PWM周期，母线“看到”的平均电流〈is〉，等于“门打开时刻”的相电流乘上“开门比例D”，再考虑方向符号。用参考文献1的结论表达就是（式18）： D(−⟨ia(t)⟩) =  ⟨−is(t)⟩。

翻译成人话：想象一个水龙头（直流母线）只在占空比D的时间里“开门”与电机交换水量，其余时间（水门关）水都在三相管道里打圈（自由续流），因此直流母线电流和电机相电流之间有了一个近似的比例关系。负号只是电流方向的约定问题：再生制动时母线电流为负（回灌），而受控相电流按相位可能取正。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4SgDTHKYPjEQVIq3iaEbCKtugR4FniaB4xkS7aibo5IjqUs5K9pL7IVPwQ/640?wx_fmt=png&from=appmsg)

* * *

四、实际效果：省电+精准控制双赢

实验验证（参考文档1图11）：

用重构算法实现电流闭环控制，设定值-20A → 实测-20.5A，误差仅2.5%！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4c1QbmewVKGyx9XwFLFrCIGW1T5Yfous3f8NOvMRuKMx8zgrMM2Jr8Q/640?wx_fmt=png&from=appmsg)

整套系统如参考文档1中的图7所示：单电流传感器+重构算法+PI控制器，形成智能水流调度中枢！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFLmtRUxib3oXMwPX8FPCVib4KPZbSC67nHyGVdJMJSiaHG7fs0z1jMdT5DKJ7vo0z6jKcOwEPxRk3Pg/640?wx_fmt=png&from=appmsg)

* * *

终极总结

1.  同步整流 = 给电流修智能水道，避免挤二极管“窄门”，省电效果明显；
    
2.  死区时间是安全阀，防止水流对撞（上下管直通）；
    
3.  单电流传感器重构像“流量反推”：
    
        · 两相导通是数学题（公式11/12精准计算）
    
        · 三相导通是估算题（公式18估算）
    
4.  实际应用：电动汽车刹车时，能把能量高效回充电池（参考文档1的制动能量回收），同时精准控制刹车力度。
    

正如参考文档1结论所说：这项技术让电机“既跑得稳，又吃得少”，是电动交通工具的节能利器！

  

  

参考文献：

\[1\] Jiaqun X U , Juanjuan L I .Synchronous Rectification and Braking Control for Brushless DC Motor With Single Current Sensor\[J\].Journal of Beijing University of Technology, 2018.

获取链接：https://pan.baidu.com/s/1RYjZGPM51WnEXj9XTJVjyg?pwd=rdda 提取码: rdda

\[2\] AP08078, Using CCU6E for BLDC control with synchronous rectification(active freewheeling), Infineon Application Note, 2008.

获取链接：https://pan.baidu.com/s/1MGIYjUMaIqm9r2tSe7Ks5A?pwd=8jqt 提取码: 8jqt