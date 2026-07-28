# 一种中压直流短路故障下不间断运行的MMC-SST拓扑及控制


> 原文地址: [https://mp.weixin.qq.com/s/coyC1JVtQ8Q2hXqSlKZitA](https://mp.weixin.qq.com/s/coyC1JVtQ8Q2hXqSlKZitA)

文章来源:中国电机工程学报

作者：章一新 1，张建文 1\*，施刚 1，周剑桥 1，蔡旭 1，王晗 1，黄华 2，赵乐 2(1．电力传输与功率变换控制教育部重点实验室(上海交通大学)，上海市闵行区 200240； 2．华东电力试验研究院有限公司，上海市虹口区 200437) 

摘要：多端口固态变压器是多电压形态多电压等级的交直流混合电网的核心设备，模块化多电平(modular multilevel  converter，MMC)型固态变压器(solid state transformer，SST)具有中压直流端口，可接入中压直流配电网，构成多区域交流配电网的柔性互联，提升区域网络间功率灵活调节能力。 而采用传统的MMC-SST 拓扑及控制，中压直流线路短路故障会引起低压端口供电中断。文中提出一种混合型MMC-SST的拓扑及控制，其具备中压交流、中压直流和低压交直流端口，通过控制使其具有中压直流短路故障耐受能力，同时故障期间保持中压交流和低压端口的不间断功率交互，从而提升低压用户供电可靠性。分析MMC-SST 在正常运行和中压直流故障不间断运行控制下内部能量平衡机理，提出中压直流短路故障下电容电压平衡及不间断运行控制策略，实现MMC-SST中压直流短路故障时不间断稳定运行。通过理论分析，仿真与物理动模实验，验证了所提拓扑及控制的可行性及有效性。  

关键词：模块化多电平变换；隔离型双向DC-DC 变换器； 固态变压器；中压直流短路故障；不间断供电  

0. 引言  

配电网作为经济社会发展的重要基础设施，对推动智能电网建设、解决能源危机有着重要作用。随着分布式电源的不断渗透，储能、电动汽车及可控负荷的大量接入，以分布式电源为核心的多元电力供应系统将改变配电网的现有形态。采用多电压等级多电压形态的交直流混合配电架构，可提升设备接入及系统控制的灵活性，是未来配电网的重要发展方向之一。  

模块化多电平(modular multilevel converter，MMC)型固态变压器(solid state transformer，SST)具有中压直流端口，可接入中压直流配电网，为中压直流柔性互联的交直流混合配电网架构的关键设备。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPJX92QWcp8yr58RcSuKCGOdE2FYfeZZLTPzJwicA5Gvibibn3QdG64QPicW5amhIrNYMic4Tpibe3qPHOXa4J3h0cI4tK9rwfNCwsmA/640?wx_fmt=png&from=appmsg)

MMC型SST 拓扑如图1 所示，由MMC换流器与多个隔离型DC-DC 变换器(isolated  bi-directional DC-DC converter，IBDC)构成，可以提供中压交流、中压直流、低压直流、低压交流 4类端口。其中，中压交流端口连接交流配电网， 进行有功无功功率交互，并为其提供支撑；中压直流端口可接入直流配电网，并与其他SST 的中压直流端口连接，实现区域电网之间的柔性互联，进行区域间功率灵活调配及配网层面新能源消纳；低压端口灵活挂接交直流微网，利于不同电压形态的低压负荷、储能及分布式能源等接入。采用MMC-SST 取代传统的工频变压器+变换器结构，可有效提升装置功率密度与效率，并提供更为灵活的组网方式。  

相比于传统配电网，基于中压直流柔性互联的交直流混合配电网大幅提高了交流故障应对能力，但也引入了中压直流线路故障问题。相比于交流故障，直流故障发展更快，范围更大，影响中压直流网络中所有换流器的正常工作。因此需要设计合适的直流故障保护方案，避免或者减少中压直流故障对区域供电的影响。目前，直流短路故障保护主要有3 种解决方案：  

1）交流断路器法；  

2）直流断路器法；  

3）换流器故障电流自清除法。 

交流断路器断开换流器与交流网络的连接，切断短路电流的供应，但是交流断路器响应速度慢，对换流器冲击较大，在故障隔离以后恢复时间长，导致较长时间的供电中断。直流断路器可以快速选择性地切除故障线路，保护效果好，但是其造价昂贵，且在断路器动作期间仍然引起低压侧短时间供电中断。换流器自清除法指具有直流短路故障耐受能力的换流器配合小容量直流断路器实现故障穿越，换流器负责清除短路电流，直流断路器隔离故障，对成本敏感的配电应用场合不失为合适的保护方案。  

针对MMC 型换流器故障电流自清除法，文献\[13\]采用具有直流故障自清除能力的全桥子模块(full bridge sub-module，FBSM)或钳位双子模块(clamp double sub-module，CDSM)等拓扑实现直流故障穿越，但在此期间需闭锁换流器，导致直流网失电。文献\[14\]提出一种基于全桥型MMC-HVDC的直流短路故障穿越控制保护策略，在直流短路故障时能与交流电网进行不间断无功功率交互；文献\[15\]提出了混合型MMC 拓扑结构，优化全桥子模块数量，降低了成本；文献\[16-17\]详细分析混合型MMC 的内部能量平衡机理，并提出相应控制策略。针对MMC型SST，文献\[4\]提出一种MMC-SST-I拓扑，MMC 与DC-DC 变换器共用中压直流母线，在中压直流故障下DC-DC 变换器输入侧电容短路放电，只能依赖直流断路器实现故障隔离。文献\[18\]在文献\[4\]基础上改变了DC-DC 变换器输入侧连接方式，避免了直流母线电容短路放电，配合全桥型MMC 实现短路电流的清除。  

但是采用上述直流故障电流自清除法，依然会 引起中压直流网络短时间失电，从而造成低压端口的供电中断，影响了低压用户的供电质量，此时需要增加昂贵的储能装置对低压网络进行支撑。文献\[19\]提出了MMC-SST-II 拓扑，将MMC 子模块与双向隔离型DC-DC 变换器直接连接，该结构利用MMC 拓扑的特性将DC-DC 变换器与中压直流母线隔离。本文在文献\[19\]所提拓扑的基础上，提出了一种中压直流短路故障下不间断运行的混合型MMC-SST 的拓扑及控制。该拓扑提供中压交流、中压直流和低压交直流等端口，通过控制实现中压直流短路电流自清除，并且在故障期间维持中压交流电网对低压端口的不间断供电，提高了低压用户供电的可靠性。文中首先分析了混合型MMC-SST结构及不同工况下的工作原理，提出了中压直流短 路故障下不间断运行控制策略，最后，通过仿真验证了所提拓扑及控制的可行性和有效性。

1. 拓扑结构及工作原理  

1.1 主电路拓扑结构

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPRmrFE4pfq3sBKQTMHYqf8WQmNM2JuianuzzeO0ARs9z4iaxgAFnFQZgFWVBUfBxzw52e36GRmdQzzFpoAC3gxR04NCPo5Vxqn0/640?wx_fmt=png&from=appmsg)

所提的混合型MMC-SST 拓扑如图2 所示。拓扑由基于半桥子模块(half bridge sub-module，HBSM)和全桥子模块(full bridge sub-module，FBSM)的混合型MMC换流器和隔离型双向DC-DC模块构成。混合型MMC 换流器提供中压直流和中压交流端口。IBDC 输入端与MMC 子模块连接，实现电压变换、功率传递和高频隔离功能； 输出端并联形成低压直流端口；低压直流端口通过三相PWM 逆变器提供低压交流端口。  

在中压直流短路故障时，混合型MMC 换流器通过半桥和全桥子模块的协调控制实现短路电流快速清除、子模块电容电压恒定、中压交流端口与交流配电网之间的正常有功无功交互，并且IBDC通过MMC 子模块与中压交流电网进行双向功率交互，进而维持低压端口不间断运行。  

图2 中，ua为A 相电网电压；ia为A 相电网电流；Za为电网阻抗；Larm为桥臂电感；uap、uan 分别为A 相上下桥臂子模块总输出电压的平均值；iap、ian分别为A相上下桥臂电流；UMVDC、IMVDC和ULVDC、ILVDC分别为中压、低压直流侧的电压、电流。  

1.2 正常工况下下工作原理分析  

依据文献\[14\]提供的混合型MMC子模块数量优化方法，选取全桥与半桥子模块数量之比为1：1， 假设单个桥臂半桥和全桥子模块总数量为N，半桥与全桥子模块额定电压均为UC。以 A 相为例，对混合型MMC-SST 工作原理进行分析，假定中压交流侧电压、电流为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP34wurUQ2BDRMretpoLY0nogmCT4K9wPUZyn6CUmicHSRTib8CibxOlVl79kIG1HQwRMwKCzSxHRAkWycIpzlhnUvHSzluhbSd7w/640?wx_fmt=png&from=appmsg)

式中：Um、Im 为A 相电网相电压、电流幅值；φ为功率因数角；ω为工频角频率。 

MMC 的A 相等效交流出口电压为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP0w2xw80cjHuWRkMcj7gpvtQWBgGpL5vosOicvm9AeI0TDT6OCiaQkJ4rQibqetIYoMqjuYiaeIZcbEtCxhNglDUdhjxEyN112kmA/640?wx_fmt=png&from=appmsg)

式中：Em为电压幅值；δ为MMC 等效交流出口电压相对于电网电压的相角差；m为MMC 交流调制系数；Ud 为MMC直流侧额定工作电压。则MMC-SST 的3 个端口的有功功率为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPNgbnctzT8KEpzicES54WvrX5ib9PmTdmftNYFX6DfqAUAz12lD2icoDUCkjfR82rnNqUMkoibafv95Hsrbm8hHqcVN6UhNQ3lXibc/640?wx_fmt=png&from=appmsg)

式中PMVAC、PMVDC、PLVDC分别为中压交流、中压直流和低压直流端口的有功功率。忽略内部损耗，则有：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMJ1EhlicCNHBXocnSfHw7n89YGjWI2XFv7Rzs2CqdIXMzescPD2UjS4dad8iaWQTj0hPEllxmwAlXwCHNDASn6uWjFnk6fbMAIM/640?wx_fmt=png&from=appmsg)

全桥子模块的负压输出能力使MMC-SST 具备降直流电压运行能力，定义直流调制度为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPXib48NMEKwqiconz9pzCwGvapiaZgzw2G6uUics9OAqH9TdbROjuylb609sxQsOQkWcXswBxGuZVMeluz9npk0ML8beep7qdfxsw/640?wx_fmt=png&from=appmsg)

根据文献\[20\]，A 相上下桥臂调制电压满足：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNic1Gicu4EaYOn3g3LyudPKc7wThaux34jKTh6dbIvtHPSpBSP3277rAGJxHxrIyhaz34KDwXsStViaJUsgjQzQqkTHAZKbvmBUU/640?wx_fmt=png&from=appmsg)

正常工况下，中压直流母线按额定电压运行， 即mdc=1，此时A 相上桥臂调制电压满足：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNM83WjicxdSsjOhuYgJEibcAutLlC80SBFcw7GX8umFkscUD1clUIicddicB0Mbic5VI8mps6LECwrtYLNjbiaR2PjR0Z5zT6yQbIkI/640?wx_fmt=png&from=appmsg)

A 相上桥臂调制电压由半桥和全桥子模块组共同构成，可假设：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNhm0Oy3cibicHolylrUN6o2DvVWmC7lR1EPCYwt7iag2DLNiakEyeAoAplm9qY2wvogmj90rSoYQuWUibXhUnvCnj3gicQ7SR7glNng/640?wx_fmt=png&from=appmsg)

式中：uapFB、uapHB 分别为A 相上桥臂全桥和半桥子模块组的调制电压参考值；xapFB、xapHB、yapFB、yapHB分别为全桥和半桥子模块调制电压参考值中直流、 交流分量系数。根据式(7)、(8)，可知：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNurvNQ42cCBGlNF2Kmsd0KGz53qAq6CYxwkDzlqjic1w8yDy5JpZqic6DDGXHDibibRM05RCg9K19t0RFuiaTuaTdiavTsJkBM2hiaiaI/640?wx_fmt=png&from=appmsg)

根据半桥与全桥子模块电压调制能力，可知所设系数的选择范围：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPW6UhaNyjDAq54CcHJS7zRJP2N6UOicUC8JBCiaQucUCWoicMUyaFk4sWqrk9DpjMibga6zO2jfgK7d5PZic4P72KdH7O8JzWITT24/640?wx_fmt=png&from=appmsg)

A 相上桥臂电流由直流与交流分量组成，为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNL8YDuJOdr2o5OcpZN7ocG2huw5Xjnicf0xUumhH6QfHCmTH0crUZYIZLshKf3XlWFZZHSO4W5IpTfn39sM7EczYO3606GbfA0/640?wx_fmt=png&from=appmsg)

MMC-SST桥臂功率由MMC 和IBDC 的输出功率共同决定，假设低压直流侧功率由各子模块均匀传输，A 相上桥臂半桥与全桥子模块组功率为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMsYJoL1hE2NX16aia9Oevw2bMHyjZ8hrKLg8eCySzWfMY6m9Jtvt8RZKCeASVPLmnVgcwpdn4q2fgkDoib4kfXTlLUHpy6gOIuU/640?wx_fmt=png&from=appmsg)

半桥与全桥子模块组在工频周期内的能量为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN4mKdib1fLib4cAyJwrmQSqSTX7ibJwOWhx1dppVuxGlpokBHQ1Qtl9UAQdhUXtjDvNAs0EItVZN5qhaowEXogPicU7YbWoz1uWrI/640?wx_fmt=png&from=appmsg)

为维持MMC-SST 装置内部能量平衡，需保证各子模块组在工频周期内的能量积累为零，即：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM5zo29f3YLgmoTxn6ytX0UTiaJXsNy0jL2xibR0kSmS3KTOguUr4NHS5XBg7HPrwQWNhs7ia08XxUcIic09K1gewMRGIBGo1UsjAc/640?wx_fmt=png&from=appmsg)

根据式(4)、(14)即可确定正常工况下交直流调制系数：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMo8OMFf4UxY9vlkbFGJpDxM6lF23uJMOVLNT67XDpTZfTPSayy1clzIzVOk9SnnQuTUEKp3WVv7DeQmcobLmbMgHjQMlMj4DI/640?wx_fmt=png&from=appmsg)

由上述分析可知，正常工况下，半桥与全桥子模块的工作方式一致，两者调制系数满足式(14)时， 即可实现三端口工频周期内能量守恒 ，则MMC-SST 内部能量保持平衡，达到稳定的运行。  

1.3 中压直流故障下不间断运行工作原理分析  

当发生中压直流短路故障时，为了避免中压直流侧短路故障对装置产生影响，需快速调整中压直流端口电压为零，从而清除短路电流，即取mdc=0。根据式(6)可得上下桥臂调制电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNM9DSBNzeexOuicCFX8uibNAq9h4TiciaQ7XNxOibeCnGllBSHo6FrBxRSnicXzWV37K0t8IyYFkjT0JrQ0VFRRl91p0JfvhfBqXJMQ/640?wx_fmt=png&from=appmsg)

此时上下桥臂需通过全桥子模块输出负直流电压分量，抵消半桥子模块的正直流电压分量。类似正常工况分析过程，取半桥和全桥子模块组的调制电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMx3KzxjW7KqGsDPX7UTRjbLw12Zha5BHP3iajwqY5LR8NEdxdsnUWLT1wfQia6N3l32w5ibhDzNa2o2uz9Mc6ThKFibH20ZibZwJ3Q/640?wx_fmt=png&from=appmsg)

根据式(16)、(17)，调制系数满足：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM3JEVJtntn1448EB9mcSJ5lZztAlHibhJibuxYLcr7rQABfzpd2YymObzdRTaNkDryGgdcln0Ot3gs1h3pmp0k1U7e2012PPnRg/640?wx_fmt=png&from=appmsg)

在故障稳态期间，中压直流线路短路电流被清除，桥臂电流中不含直流分量，A 相上桥臂电流为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNlQibXR1yI7wAUsntj8pemnfX4rp9CeXWBGwWJtm0z20EgStfetxKpDRnbQIhKOgDraKbkaYGs5tiaRNbCdSgOrm6hV2JwbicYfs/640?wx_fmt=png&from=appmsg)

则A 相上桥臂半桥与全桥子模块组的功率为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMAIucGzXj6tB3Ie2MqzvWWu0PvxtazO7ia6tiaK4ttlDfdplspagkPvyA2f0IEjQ99b5oRInx1AYGSIdyn1MI2b4dO4Lk6Pw9oU/640?wx_fmt=png&from=appmsg)

A 相上桥臂各子模块在工频周期内的能量为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNbOHtia4UFIYtZKJib64JEJQpIeYTfvXnpevrymn9Z5zKic5Us7JX8RaLxYOgAnATVqriceQopQ2w4sZsHiaZDhB2aSZZ76nn2QXZ8/640?wx_fmt=png&from=appmsg)

为保证A 相上桥臂各子模块电容电压恒定，需保证在工频周期内能量积累为零。即：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQ5pPSas7Jnl5c0rFwS2EBOF2VicD77icUKZBa4COzYbjNYkndH6MibOP7X3Aucf7ovaaq03dmWibkgzKPJ3IrJLjlF6IKnUGWHiaE/640?wx_fmt=png&from=appmsg)

故障稳态期间中压直流端口功率为零，故中压交流与低压端口功率满足：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMKzcfQ8rnKicSILoda6yYR66lAdpQ3sYkfk7Lw4yJeia1zg9mnicBefpDKkzDVY9ia2DCdNiaaUThDqCWt2nL7o0IjE6NVGsEwaGI8/640?wx_fmt=png&from=appmsg)

联立式(22)、(23)可得交流分量系数：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNNj56ibbFVlHCF2krmDE2cmMeeHRvgEDJtMG9cZrZNMIdIwqgNXloGtZcVHC6YYaXETJVyowJWpRL6BqdoB7WxDzWtlMy2wzvk/640?wx_fmt=png&from=appmsg)

代入式(10)，可得直流分量系数取值范围为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMzCgjWX8CzsaONr8MQJHmdB5gbRLYG4j3y33vxpayQS4x4MARvWM3O6Y6lKypaeNlxn7h5EicYHfFNMZPicOU1w1I7OnksIVW1w/640?wx_fmt=png&from=appmsg)

由于上下桥臂调制电压中还需实现环流抑制、 虚拟阻抗等控制，则以桥臂调制电压调节裕度最大为原则选取直流分量系数，选定：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNjGmSrfHN2FrHpvGRaSpmW1t1tQIdkLA3WXicH89878eJJyLf1JVlpwg91qZGjwIXHjcldtBJmfibicKhrGWWXtibjh4XSpVRF48g/640?wx_fmt=png&from=appmsg)

综上所述，中压直流故障稳态时，按照式(24)、(26)选择交直流电压调制系数，能保持MMC-SST能量平衡且可控。此过程中，中压交流与低压端口仍能自由的双向功率交互，维持低压侧不间断供电。  

2. 中压直流故障下不间断运行控制策略  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSGPsicD9ZXfslcn1PEvhEkxibmgWA6trhQ6FAqHkr2MBWIpibOIFWbjOhBibZkia38Hnq7fDQ56lD6fX6yowkG3knlFrye8aIibrJ8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM86dias01yIBTNhicRbOocD6pT4KEvORM37j04vnYoybiaiaEwFRjZq6O5MWd1ebS9DVaWA8z79fzib6picwlrjtehgY6KHeCuBt2nM/640?wx_fmt=png&from=appmsg)

混合型MMC-SST 控制策略如图3 所示，在正常工况下以及中压直流短路故障时，直流母线定电压和定功率控制外环、并网电流有功无功解耦控制内环(图3(a))、桥臂环流抑制(图3(d))、PLL 锁相环(图3(e))与常规的MMC 控制方法相同，具体可见文献\[21\]，控制参数设计可参考文献\[22\]。其中，图3(f)为IBDC控制框图，采用方波移相调制方式\[23\]及定低压直流母线电压控制，控制参数设计可参考文献\[24\]。而当MMC-SST 中压直流侧发生短路故障后，短路电流发展迅速，清除速度慢，易引发系统振荡。因此，在中压直流电流越限以后，采用基于虚拟电阻的短路电流快速清除策略，如图3(c)所示：通过在MMC 换流器直流侧桥臂电压指令值中引入直流电流负反馈，实现短路电流快速抑制。换流器各相桥臂电压输出指令为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMKsASxbA8ZTxX7mN7FL0H6OFto8raAicnEzslqIKZN24IIaWNoQK1h9l3ticWJfZxkicibKHeG2Q7OTiaJVxL4Vz3aUTY6GUMGJAKs/640?wx_fmt=png&from=appmsg)

此时直流短路回路可等效为二阶RLC 串联回路，当电路在过阻尼工况下，电流响应非震荡，可实现短路电流快速抑制。故式(27)中虚拟电阻阻值Rvir可参照经典二阶电路过阻尼状态下选取，即：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMc2PLtblYD8OuiaX0SaaadgZFduicWlLo7M6rBOza3obUJic72YcunUvibssqNxkaYLVVDR56iaPv7KdDoL75Q3iaGXtficziaS0a7rjc/640?wx_fmt=png&from=appmsg)

式中：Leq 为直流短路回路等效电感感值；Ceq 为直流短路回路等效电容容值。直流负反馈限幅受到装置交流调制度限制，因此：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNsDoSRa0Kbr8MxdsgCeibM06mRJOxicX56NPqSpUqEz7w5hVecotUN6c9Np9XN5SaOdFCOvpXBObeUTFdNYVvprUFnZZJGILkSk/640?wx_fmt=png&from=appmsg)

在常见的混合型MMC 的直流故障穿越控制中，仅由全桥子模块实现桥臂电压调制；而由于如图2 所示的MMC-SST 的拓扑结构，其所有子模块与IBDC互联，而为了实现低压侧全功率范围内不间断供电，在故障期间所有的半桥、全桥子模块需参与电容电压平衡及系统控制当中，如图3(b)所示。由前述平衡机理生成的交流调制量及环流抑制、短路电流清除补偿量生成相应的桥臂调制电 压，再根据式(8)分配分别得到各桥臂半桥与全桥子模块对应的调制电压。  

但是，在不间断运行期间，全桥与半桥子模块同一个时刻的充放电特性不一致，会导致半桥与全桥子模块组间电容电压出现较大偏差。因此，需要采用不间断运行控制下的子模块电容电压平衡策略，如图3(g)所示。所提策略通过调节各子模块调制波，从而调整其充放电时间，进而实现子模块电容电压平衡。该控制可分为2 个部分：组内电容电压平衡与组间电容电压平衡。组内电容电压平衡作用是使半桥子模块组和全桥子模块组内子模块电容电压跟踪其参考值，由各子模块电容电压与参考值之差经桥臂电流符号值与P 控制器后，得到相应的组内电容电压平衡控制调节量；组间电容电压平衡作用是保持半桥子模块组与全桥子模块组的平均电容电压一致，由半桥与全桥子模块组电容电压平均值之差经桥臂电流符号值与P 控制器后，得到相应的组间电容电压平衡控制调节量。将得到的两个电容电压平衡控制调节量叠加至由式(8)所得到的子模块调制电压上，形成最终的子模块调制波。 特别的，在设计组间电容电压平衡增益K2 时，需考虑不间断运行过程中半桥子模块与全桥子模块间电容电压差模分量，保证电容电压平衡控制输出量不越限。同时，加入上下桥臂电容电压和相间电容电压的平衡控制策略，与常规的MMC 控制方法相同，具体可见文献\[17\]。  

3. 仿真验证  

基于MATLAB/Simulink 搭建了2MVA  MMC-SST 仿真模型以验证所设计拓扑及控制策略的有效性，仿真系统主要参数如表1 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpORRpicBbsRwCCu5kV9xic9TXnaoToP33q5Vtk1fZX6ToibcuhPWjDTcnG1Qc16fHUZ3xrOKRHLIKo3FuzkbibXLd1iaZZYibqFcveeI/640?wx_fmt=png&from=appmsg)

在仿真模型中，MMC-SST 交流端口接入交流电网，中压直流侧接负载，低压直流侧接恒功率源。  

仿真工况及时序如下： 

1）t\=0s 时，MMC-SST 启动，中压直流端口为定电压控制，中压交流端口吸收2MW 功率，中压直流端口输出1MW 功率，低压直流提供1MW功率。 

2）t=0.398s 时，中压直流线路发生极间短路， 故障点阻抗为0.1Ω，短路电流快速上升。 

3）t\=0.4s 时，MMC-SST快速切换至不间断运行控制，故障电流在短路电流清除控制下快速下降，最终到达故障稳态零值。此时中压交流端口保持吸收1MW 有功功率，低压直流端口输出1MW功率，中压交流电网向低压直流端口持续供电。 

4）t\=0.8s 时，低压直流侧功率由输出1MW 逐 渐调节至输入1MW 有功功率，对故障期间中压交流、低压端口之间功率双向传输进行验证。  

仿真结果如图4 所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPn6qHzoH6iboKbdkuacicSZVVGlthvniaF6nv5GsFPfoiaJb7AbMdR7zqKyZmS5yvEYpe8qkdNEM2X57hnVP0cia3xWgmueLgdGnPM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOzjyWJkib2lw62h1b2fNMaxa5riatEO8BAoeSRHdicfqNZib7vkAdwwr6c5VKW9p2awFgvEaI8yBbumwJNmL3AcYouasNXq4MQhAk/640?wx_fmt=png&from=appmsg)

图4(a)、(b)为中压交流电压和电流波形，在切换至不间断运行控制后，交流侧电流经短时间暂态过程后恢复正常，冲击电流较小；0.8s 后，当低压直流功率反向时，中压交流电流波形保持良好。  

图4(c)为中压直流电压及电流波形。在故障发生2ms 内，故障电流迅速上升；系统切换至不间断运行控制，故障电流在10ms 内降至零附近，验证了所提短路电流快速清除策略的有效性。  

图4(d)为低压直流电压和电流波形，在故障发生前后，低压直流电压和电流始终保持稳定，低压直流端口不受中压直流故障影响；当低压直流功率反向时，直流电压保持稳定，表明所提控制具有功率双向运行能力。  

图4(e)是子模块电容电压波形图，故障发生后，子模块电容电压经约50ms 的暂态后能保持恒定， 暂态电容电压的超调约为额定电压的15%，为容许范围。整个运行过程中，子模块电容电压仍能维持稳定，验证了所提电容电压平衡控制的有效性。  

图4(f)是MMC 桥臂环流波形图，可见在不间断运行控制下，二倍频环流抑制控制仍然有效，桥臂环流被有效抑制，不影响SST 工作。  

由此可知，所提MMC-SST 拓扑及不间断运行控制可实现中压直流故障下中压交流与低压直流端口的不间断供电。  

4. 实验验证

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOS2LOqw3QtbyCbcgXaEZkY5iaJsFIOghlaNmzdZRd0ItFNF7c3LSL5h3Mf786r7WYNaBZZYYRiava0C8TyXmrJOXFecsBs6XXnA/640?wx_fmt=png&from=appmsg)

在仿真验证基础上，搭建了4.8kVA 的MMC-SST 实验平台进行物理动模实验验证，实验平台如图5 所示，电路参数如表2 所示。实验平台由5电平MMC 换流器和24 个全桥型DAB 模块构成，单个桥臂包含2 个半桥子模块和全桥子模块。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNWiaLkLE3MicmuEsH5mXzKRYeyYKPbe8SI9icmib4Z1qQWnpNoiatX2X2HiaABnohr6rBN1Gaqm3lSE8wz412BBL30fXH1HE3ogQYt4/640?wx_fmt=png&from=appmsg)

实验开始阶段，实验平台处于稳态运行工况， 直流电流约为15A；当中压直流侧发生双极短路故障后，中压直流侧短路电流快速上升。当控制器检测到中压直流电流到达40A 时，装置切换至不间断运行模式，实验结果如图6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN19GFDYveeSeNgstDQPvfcpmyFu2hXKOAlrOlFbZZ4WyrrC1EsQT04cuxGNORo6j7lONplyI5IT3xN5HIRE97KAf7V0ldzBVY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNtcrUzroiaibVLyIZz6ibL7NQnOxDZBr6m8ZO8afZZl2OGzribRnZ4icBhzoY7It8qPRsKFuyUKpm5n8iaFvd17uv7lFjBtvBIZcY3M/640?wx_fmt=png&from=appmsg)

图6(a)为中压交流A 相电压与电流波形，切换至不间断运行控制后，交流侧电流经短时间暂态调整后恢复正常工作，该实验结果验证了中压交流侧的不间断运行能力。  

图6(b)为中压直流侧电压和电流波形，中压直流侧故障后，短路电流迅速上升；当检测到短路电流到达40A 时，系统切换至不间断运行控制，短路电流迅速下降至零，该实验结果验证了所提短路电流清除策略的有效性。  

图6(c)为低压直流侧电压电流波形，可以看出，中压直流短路故障几乎不影响低压直流侧电压和电流，该实验结果验证了低压直流侧的不间断运行能力。  

图6(d)为A 相上桥臂子模块电容电压波形，切换至不间断运行控制后，电容电压波形经短时间暂态调整后趋于稳定，且半桥子模块与全桥子模块电容电压波动与理论分析一致。该实验结果验证了MMC不间断运行原理与子模块电容电压平衡策略。  

通过上述实验可知，所提MMC-SST 拓扑及不间断运行控制策略可以实现中压直流故障下中压交流与低压直流端口的不间断供电。  

5. 结论  

针对中压直流线路短路故障引起的低压用户供电可靠性问题，本文提出一种具有中压直流短路故障下低压端口不间断供电的固态变压器拓扑及其控制，详细分析了工作原理、电容电压平衡及系统控制策略。通过仿真验证了所提拓扑及控制的有效性，主要结论如下： 

1）正常工况下，所提固态变压器的拓扑可以提供中压交流、中压直流和低压等多个不同电压等级及电压形态的端口，端口之间自由能量交互。  

 2）在中压直流线路发生短路故障时，能快速清除直流故障电流，维持中压交流和低压端口之间的不间断双向运行，提高低压用户供电可靠性，并通过控制实现子模块的电容电压平衡，实现MMC-SST安全稳定工作。

具有故障不间断供电能力的多端口多电压等级的固态变压器不仅仅可以丰富配电网络以及区域网络之间的电能路由路径和不同电压形态的电气接口类型，还可以通过控制实现故障期间不间断供电，从而提升供电可靠性。未来研究工作将在多个固态变压器组网后的协同工作、优化故障处理性能等方面展开。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMUDnDPXEStdicllhKSJ6QkqJmfYneI1BeBViccpGO2oNuwosrMa9pfGxn2QgxibKsgsuwibZY5BwR8A6ibZlCoXI9K1tkudO1GLZfo/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM1GicmCRyialOqNQo1t8hsBCTkMkEkiaAA7NPjNGic1Vq9g9Rc5LibRAX13tF8foKhgnu9ia61qy5eo13cfcrDxKLswN1eJV2qVWVt8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkNlmWELs9Iyuf7XLgVEicYVqoS65KaZicqxq3eQbe658BsMuHjxDw0rgbssoA02GMswJRAPFh4jMNyTQhPaicjoHWic0J6A8icdRg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOmEaE7ekcPs6Uo88sItogawicUYO0uKQOuH9iaicquPgmz9PCC184Q1ibPg2iaicboYr9SEdzotrRmhiaN7lF3qvD3XK8zf44RF4JYTc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)