# “读心术”进阶：如何利用电学参数“偷窥”MOSFET的真实体温？

原创 傅存敬 电磁散人 2025-12-03 07:07 广东

> 原文地址: [https://mp.weixin.qq.com/s/KRzoi3cBaAb9rfOrEsPlPw](https://mp.weixin.qq.com/s/KRzoi3cBaAb9rfOrEsPlPw)

经过上一篇文章的“[代码炼丹](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484810&idx=1&sn=909b308e0295006fb82112580ef041eb&scene=21#wechat_redirect)”，现在我们每个人的MCU里，都有一个不知疲倦的“虚拟温度计”在辛勤工作了。它看起来很美妙，不是吗？

但是，我们必须像一个严谨的科学家一样，时刻保持怀疑！在座的测试工程师们，你们的职业素养一定会让你们第一时间就跳出来问：“这个模型，**保真吗？**”

“你怎么证明你算出来的125.7°C，就真的是125.7°C，而不是105.7°C，或者已经飙到了145.7°C？”

这个问题，问到了根子上！一个未经**验证 (Verification)**和**校准 (Calibration)**的模型，比没有模型更可怕！因为它会给你一种“虚假的安全感”，让你在悬崖边上还以为自己在高速公路上愉快地奔跑。

今天，我们就要学习如何给我们的MOSFET热模型“体检”，甚至掌握一门“读心术”，在不“开膛破肚”的情况下，利用一些电学小技巧，去“偷窥”MOSFET真实的内心温度！

#### **1\. 信任危机：为什么Datasheet不可尽信？**

我们的模型建立在厂商给的RC参数之上，但Datasheet里的参数，通常都标注着两个词：“**Typical  Value(典型值)**”、“**Ta\=25°C**”。

这意味着什么？

-   **“典型值”不代表“你的值”**：半导体制造工艺有不可避免的离散性。你买到的这一批次的MOSFET，它的热特性可能就和“典型”的那一批有5%~10%的差异。
    
-   **装配工艺是最大的变量**：这一点，硬件工程师和产线工程师最有体会！
    

-   你涂的导热硅脂是厚了还是薄了？中间有没有气泡？
    
-   你锁散热器的螺丝，扭力是大了还是小了？压力是否均匀？
    
-   你的散热器和PCB之间，有没有其他的热源互相干扰？
    

这些因素会极大地影响`Rth_ch`(壳到散热器) 和`Rth_ha`(散热器到空气) 的值，甚至会影响到`Rth_jc`的表现。你辛辛苦苦建立的`Zth_jc`模型是精准的，但因为后续的热路变了，整个系统的热响应也就完全不同了。

**结论：**直接使用Datasheet参数建立的模型，可以作为一个很好的**起点**，但绝不能当作**终点**。我们必须对**我们自己这套系统**进行校准。

#### **2\. 模型验证与校准：给模型“量体温”**

最传统、最直接的验证方法，就是做**功率阶跃实验\[1\]\[2\]。**

**实验步骤**:

1.  **打点**: 在MOSFET的外壳(Case)上，靠近Die的位置，用热电偶或贴片式PT100传感器，精确地测量壳温`Tc`。
    
2.  **施加功率**: 让MOSFET工作在一个恒定的直流状态下（比如让它持续导通一个大电流），给它施加一个已知的、恒定的功率 `Pdc`。
    
3.  **记录曲线**: 记录从加电开始，壳温`Tc`和散热器温度`Theatsink`随时间变化的曲线，直到它们达到热稳态。
    
4.  **模型运行**: 同时，在你的MCU里，也把这个恒定的功率`Pdc`作为输入，运行我们的虚拟温度计模型，记录下模型计算出的`Tj_model(t)`和`Tc_model(t)`。（注意：模型输出的是`Tj`，需要减去`Pdc*Rth_jc`才能得到模型预测的`Tc`）
    
5.  **对比与修正**:
    

-   比较**稳态值**：当温度稳定后，`Tc_measured - Theatsink_measured`应该等于 `Pdc*(Rth_ch + Rth_ha)`。通过这个关系，你可以反推出你系统里**真实的**`**Rth_ch + Rth_ha**`是多少，用这个真实值来修正你模型里的参数。
    
-   比较**动态曲线**: 对比测量到的`Tc(t)`上升曲线和模型预测的`Tc_model(t)`上升曲线。如果两者形状不匹配，说明你从Datasheet里抄来的那套描述`Zth_jc`的RC网络参数，对于描述你整个系统的`**Zth_ja**`来说，也是不完全准确的，需要对模型里的`R/C`值进行微调，让两条曲线尽量重合。
    

这种方法是“金标准”，但缺点是需要外部精密仪器，而且只能在实验室里做，无法在线应用。那么，有没有更高级的玩法呢？

#### **3\. TSEP技术入门：“温度敏感电学参数”**

真正的“读心术”来了！我们知道，半导体的很多电学参数，都对温度非常敏感。这种参数，我们称之为**TSEP (Temperature-Sensitive Electrical Parameter)**。

如果我们能找到一个TSEP，并且能精确地测量出它，不就能反推出结温了吗？这就好比医生通过测量你血液里某个酶的含量，来判断你肝脏的健康状况一样。

对于MOSFET，常用的TSEP主要有两个\[3\]：

-   **Vgs(th) - 阈值电压**
    
-   **Rds(on) - 导通电阻** (或其等效的Vds压降)
    

#### **4\. 两大“探针”：在线“偷窥”结温**

##### **4.1 "探针一"：利用Vgs(th) (阈值电压)**

**原理**: `Vgs(th)`随着温度升高，会**线性地降低**。这个线性关系非常稳定，堪称完美的温度计\[4\]。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFlS6iaeM0pNP7yTq5Oib4RMfSJXCBl1IbyZh3eAf7eVLeKttPKuSyHzaiaicWkLNUKQB9SSjYDDBCxGA/640?wx_fmt=png&from=appmsg)

**怎么测**: 

1.  **离线标定**: 在实验室里，把一个MOSFET放在温控箱里，精确控制其温度。在每个温度点，给它注入一个非常小的、恒定的检测电流（比如1mA），然后缓慢增加Vgs，直到MOSFET刚刚开始导通（Vds有微小下降），记下此时的Vgs。这样就得到了一条精确的 `**Tj - Vgs(th)**` 关系曲线。把这条曲线存成表格数据，烧到MCU里。
    
2.  **在线测量**: 在每次PWM周期的死区时间内，通过一个特殊设计的注入电路，快速地给待测的MOSFET注入那个1mA的小电流，同时用高速ADC采样`Vgs`的值。
    
3.  **反推温度**: 用测到的`Vgs`值，去查刚才标定好的那张表，就能直接得到**当前的、真实的结温Tj**！
    

**优缺点**:

-   **优点**: 精度非常高！因为它直接测量的是和结温强相关的核心参数。
    
-   **缺点**: 需要额外的硬件注入和采样电路，设计复杂，成本高。而且会占用宝贵的死区时间，可能会影响控制性能。
    

##### **4.2 “探针二”：利用Rds(on)或Vds(导通压降)**

**原理**: 我们在[前期文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484781&idx=1&sn=b07cdb00d04a8cdd46c14b413a5eb288&scene=21#wechat_redirect)就介绍过，`Rds(on)`随温度升高而**显著增大**。在导通电流`Id`已知的情况下，测量此时MOSFET两端的压降`Vds`，根据`Rds(on)= Vds/Id`，就可以得到`Rds(on)`，进而反推出结温\[4\]。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFlS6iaeM0pNP7yTq5Oib4RMfDhbBydFKH6IUpBoRnD08WnIliaTe8Nvw6jOCandhscLIAjrMDCVB0rw/640?wx_fmt=png&from=appmsg)

怎么测:

1.  **离线标定**: 同样，在温控箱里，让MOSFET导通一个固定的电流，在不同温度下，测量其`Vds`，得到一条 `**Tj - Vds**` 的关系曲线。
    
2.  **在线测量**: 这次就简单多了。在MOSFET正常导通期间（PWM高电平中间），用一个高速、高精度的差分ADC，去采样MOSFET的漏源两端电压`Vds`。同时，我们也知道此时的相电流`Id`。
    
3.  **反推温度**: 通过`Vds`和`Id`，查表或计算，得到结温`Tj`。
    

**优缺点**:

-   **优点**: 不需要额外的注入电路，硬件改动小。
    
-   **缺点**: `Vds`非常小（毫伏级别），被埋没在几百伏的母线电压和高频开关噪声中，精确测量是巨大的挑战，对PCB布局和采样电路设计要求极高。电流`Id`的波动也会影响测量精度。
    

**小结：**

今天，我们从一个“自信的建模者”变成了一个“严谨的校验者”。我们学会了：

1.  **从认识到模型的局限性**：知道了Datasheet的“典型值”和实际装配工艺的差异，是我们模型误差的主要来源。
    
2.  **掌握了传统的校准方法**：通过功率阶跃实验，对比实际温升曲线和模型输出，来修正我们系统级的热阻参数。
    
3.  **学习了高级的“读心术”——TSEP技术**：了解了利用`Vgs(th)`和`Rds(on)`这些对温度敏感的电学参数，来在线、实时地“偷窥”真实结温的原理。
    

这些TSEP方法，就像是给我们的“虚拟温度计”配备了一个“**实时校准GPS**”。我们可以不一直开着它（因为测量有代价），但可以每隔一段时间（比如几秒钟）测量一次，用这个“真实”的温度值，来修正我们热模型中的状态变量，确保我们的模型不会因为累积误差而“跑偏”。

至此，一个能算、会跑、还带自我校准功能的、强大的结温估算系统，理论上已经在我们手中成型了！

那么，我们费了九牛二虎之力，造出这么个“神器”，到底要拿它来干嘛？仅仅是为了看个数字，图个心安吗？当然不是！下一篇文章，我们将进入**应用篇**，看看这个精准的“虚拟温度计”，将如何赋能我们的电机控制器，让它从一个“傻大黑粗”的执行者，变成一个懂得自我保护、自我调节的“智能体”！

好，今天的内容非常硬核，各位同仁先好好消化一下，我们下期再见。

  

参考文献：

\[1\] AN4783: Thermal effects and junction temperature evaluation of Power MOSFETs

\[2\] Semiconductor and IC Package Thermal Metrics

\[3\] Alauzet L , Tounsi P , Fradin J P ,et al.Sensorless Dual TSEP ( V th, R dson ) Implementation for Junction Temperature Measurement in Parallelized SiC MOSFETs\[J\].2024 30th International Workshop on Thermal Investigations of ICs and Systems (THERMINIC), 2024:1-4.DOI:10.1109/THERMINIC62015.2024.10732557.

\[4\] Ortizgonzalez J , Alatise O .Bias Temperature Instability and Junction Temperature Measurement Using Electrical Parameters in SiC Power MOSFETs\[J\].IEEE Transactions on Industry Applications, 2020, PP(99):1-1.DOI:10.1109/TIA.2020.3045120.

文档链接：

\[1\]https://pan.baidu.com/s/1-KVcICpKdTrwGp9\_tjvEPg?pwd=xkba 提取码: xkba

\[2\]https://pan.baidu.com/s/1Blz-XYMXAzNHbYtOhhy2pw?pwd=qbuq 提取码: qbuq

\[3\]https://pan.baidu.com/s/1T2iut42MM8nIwoa38hYLxg?pwd=e44x 提取码: e44x

\[4\]https://pan.baidu.com/s/19Dy\_dzwqHDLMM\_SmUzY\_8w?pwd=wy9r 提取码: wy9r