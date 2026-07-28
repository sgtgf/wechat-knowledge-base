# 【电源电路各个电阻的计算】：放电电阻、热敏电阻、压敏电阻、启动电阻、吸收电阻、VCC电阻、驱动电阻、反馈电阻....

原创 硬件笔记本 2023-09-01 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/NSVi-0EYqpg\_I2yLKvy7\_w](https://mp.weixin.qq.com/s/NSVi-0EYqpg_I2yLKvy7_w)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**引言**

电源里面用量很大的一个元器件，电阻。

  

根据个人的经验，大致的聊下电阻的相关内容，也希望同行提供些资料，一起学习，探讨一下，顺便给新人提供点参考。

  

  

**放电电阻**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamibFD4oRLicFO3DCu0sltuV4RXAGickaVDXt3AbUiaLsToFWonuliaGfGEug/640?wx_fmt=png)

  

R1,R2,R3,R4的放电电阻取值。

  

IEC60950，IEC60065都有规定放电时间对应放电电压的。

  

X电容超过0.1uF的话基本要加上这4个电阻了。

  

IEC60950规定1s内电压需下降至37%，IEC60065规定2S内电压需降至35V。

一般情况都是通过测试去判定，1S内plug端的电压(240VrmsX1.4.1=340Vpeak)下降到初始电压的37%(125.8Vpeak)就pass了。

  

至于采用4个组成2串2并，好像是有要求放电电阻有一个失效，也要能把X电容的电放掉。

  

附参考图：X电容为334/340V R1=R2=R3=R4=1.5M。

  

放电时间与放电电压波形如图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8Liams7uiac3r8jicOdTr4GrYE1aU0aicPIRvC5tmvJRzvkforgicGJLib7Zp5RQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamH29Mu5N4ibM2mjMqibnGnpUicpHzCZL6d2iavvZYCuibl2CLciaAHD86P2Ig/640?wx_fmt=png)

  

R1，R2，R3，R4一般采用0805的封装精度采用5%。如果输入是277的话，就要采用2并3串的方法了。（0805的耐压问题）

  

由于与待机功耗和PCB尺寸有关，所以很多公司都推出替代方案，取消X电容的泄放电阻，采用IC去放掉X电容的电。

  

也有小功率的干脆不用X电容，也可以省掉几个电阻，减小待机功耗，或者IC从这个位置取电，降低待机功耗。

  

**电阻的国际标准**

国标电阻数值E数列认读 

  

为了使工厂生产的电阻符合标准化的要求，同时也为了使电阻的规格不致太多，国家有关部门规定了一系列的阻值作为产品的标准，这一系列的阻值就叫做电阻的标称阻值。 

  

电阻的标称阻值分为E6、E12、E24、E48、E96、E192六大系列，分别适用于允许偏差为±20%、±10%、±5%、±2%、±1%和±0.5%的电阻器。其中

E24系列为常用系列，E24、E12和E6系列也适用于电位器和电容器，E48、E96、E192系列为高精密电阻系列。  

  

对各系列的电阻规定几个基本系数，这些系数再乘以10n(其中n为整数)，即为某一具体电阻器阻值。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamhAOfvX4yfcGfuicb5ZlrpXwDT5Z0KFuZ0kED8KmSsgELibiaLc78YrLlA/640?wx_fmt=png)

《实用开关电源设计》第三章 元器件的实用选择 第二节 电阻

  

之前只是有了解，这些是有国际标准的，实际应用的时候就是看自己公司的仓库里面常用哪些电阻了。

  

然后通过不同的电路设计时考虑下仓库的电阻阻值来设计。非仓库的常规阻值另外申请。

  

所以看别人做的板子，如有的控制板中就会看到同样的5.1k电阻有N个，其实也就是方便生产与所有非设计阶段的管控。

  

  

**放电测试**

放电测试，电源的状态是否一定得处于空载？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamnicFiaL8wSP2pJbdhbkwTbibCEhA5RPuSOb6hZRXOP2TRabjVuGeUCXwg/640?wx_fmt=png)

  

  

**NTC的选型**

NTC1，常用的是10D-9，5D-9，5D11，2.5D15等几种型号。

  

对应输入特性里面的INRUSH CURRENT (Typ.)  COLD START 45A（30A、60A等）

  

功率型NTC热敏电阻器在电路中抑制浪涌电流示意图：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8Liam6eEiaXv6ZDBsE3KPaKmGgYMia5StVz2rOtj2TRbUpypicAWYJLgghauHg/640?wx_fmt=png)

  

NTC有个B值，简单的话就是看下NTC在不同温度下对应的阻值。对于常用的 NTC 热敏电阻， B 值范围一般在 2000K ～ 6000K 之间。

  

复杂点的就是按照里面的公式，计算温度，一般按5%的误差计算（温度检测用）。功率型的NTC精度应该是20%左右的，B值很大，如5D-9,25℃的时候5Ω左右，高温的时候估计就不到1Ω了。所以碰到过情况，客户反馈说老化后一段时间后，冲击电流变大了，超标了，又要解释一番。

  

相同阻值，不同B值的NTC热敏电阻R-T特性曲线示意图

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamrY1puuI7bTTq6wDSYavzzqviaJV15NFC9EswFicpWkTj60kThAWLOWOA/640?wx_fmt=png)

  

NTC还有另外一个作用，雷击的时候，可以吸收部分的能量。保险丝的I2T会小些，保险丝不至于挂掉，桥堆相应的应力小点。

  

输入电容小也可以不要NTC的，或者NTC的阻值可以取小些。只要保险丝和桥堆能抗住冷启动瞬间的电流也没大问题。

  

NTC在选择时有个工作电流和工作温度范围，工作温度范围一般是-55-200℃。还有个参数是带多大的输出电容，有时候也要注意一下的。

  

NTC还对应了低温的问题，有的LED电源-40℃的时候90Vac起机闪灯。闪几下就好了，有部分原因是NTC的值太大，还有部分情况是电解电容在低温时的容值变小，ESR变化等原因。

  

大功率的电路（高输入电压、高输入电流）里面也会有NTC，或者是抑制冲击电流的功率电阻，直流应用中继电器有时候也可以用可控硅或者IGBT什么的，如图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamibEQQzM1BBSQbdlP19krZXtUdUZWDXiaztR0qMiaHYQ0JBKMn0OEia5u7A/640?wx_fmt=png)

  

**压敏电阻的选型**

RV1：压敏电阻

  

反激电源常用的就是LN之间14D471K，雷击差模1kV，共模2kV就够了。

  

单极PFC的反激电源LN之间14D471K，有的还需要加个电解4.7-10uF左右的电容串联二极管吸收掉雷击的能量，保护MOSFET。

  

差模2kV，共模4kV基本要加气体放电管的。600A,或者1kA，2kA。看实际情况增加。

  

14D471K的选择264\*1.414（峰值）\*1.2=447.96V，470\*0.9=423V，MOSFET=600V。

  

由于470V有±10%精度问题，加之压敏电阻雷击次数越多有个越打越薄的说法。

对于220V～240V交流电源防雷器，应选用压敏电压为470V～620V的压敏电阻较合适。

  

选用压敏电压高一点的压敏电阻，可以降低故障率，延长使用寿命，但残压略有增大。

  

压敏电阻的选型还是有点偏向于公司的传统使用方式。

  

一般对压敏电阻套上热缩管，主要是防爆和阻燃的作用。因为压敏电阻在失效的时候可能会炸裂，碎片会蹦到其他电子元件上，还有就是冒火焰。

  

有时打雷击，共模电感下有放电针会放电，或者增加1个GDT对雷击都有改善。如图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamPL8jdibQNUsMzo8sibxBSu6yfmwGLjOZriafUfmQhGu4yFwmb3d2XSbdQ/640?wx_fmt=png)

  

但是这个GDT在打初级次级耐压的时候需要取消掉再打，要不打耐压AC3000V的时候会过流报警。

  

**VCC启动电阻**

VCC启动电阻：一般采用2个0805/1206或者3个0603。有的IC有高压启动脚的，习惯性的也放2个电阻串在上面消耗功率。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamIoUu2ibEic5FyJW5mUDbvAqgfqLviaDWicicNb5ibP48vyaiae3fqXZGOsaDA/640?wx_fmt=png)

  

**贴片电阻的降额与寿命**

贴片电阻的耐压值如图，各个厂家的差异不大。

  

一般使用经验是0805耐压不超过100V，如图。实际应用用也只有启动电阻、RCD吸收、RC吸收的时候电阻电压可能超过100V。

  

电阻最大电压，无论你是否相信，实际电阻都有一个能承受的最大电压值。并且，这个值并不总是由功率消耗来限制决定的。电阻实际上可以被击穿（打火）。在使用表面贴片电阻的场合，由于端点之间的间隔比较近，电压限制问题尤其严重。处理电压问题时，比如说100V电压的电源，你会检查发现，任何连接到高电压的电阻都必须有耐压的要求

  

实用开关电源设计第一篇  第三章  第二节  电阻  里面有讲到超过100V需要考虑电阻耐压问题。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8Liam1vZRYNe8t9cbNMiakp2jnLQA6MaUL1nQrMboW2lwqXxCdfsb9Dw9V7Q/640?wx_fmt=png)

  

电阻规格书中体现的不同封装和系列对应的电压耐压表格。

  

贴片电阻的功率大部分设计的时候都不怎么考虑，信号部分处理基本是采用0603的电阻。

  

带吸收的部分采用0805或者1206的电阻，功率大点的情况一般采用插件电阻和水泥电阻。

  

由于电阻的工作温度范围一般是-55℃-125℃或者-55℃-155摄氏度，一般设计时，功率不超过该电阻功率档位的1/4。

  

（电阻温度很高运行的情况下超限值使用会加速电阻老化，然后阻值变大或者失效，时间大概是1-3年左右出现问题。）

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamykHCibhIPGu1TPmk6SM36Kbky23ClNxxJMmFia15ClHXX8Pd6SiaUYyaQ/640?wx_fmt=png)

温度对应电阻的功率曲线。温度越高，电阻能用到的功率越小。

  

所以一般工业类电源设计和LED电源设计里面要满足60℃以上的环境温度，电阻在功率部分留的余量更大。

  

**VCC绕组供电串联电阻的选型**

VCC绕组供电。

  

输出电压变化范围宽的情况下，需要增加VCC的辅助绕组供电。

  

或者IC的VCC供电范围比较窄，要满足轻载、重载以及起机的情况。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamOSarftKUG5hCcr5jYHuSBVplly1zLA0ILKnjJuuYseJQbvWjvqzKCA/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamicKDV6YPHlUeqjRh3lwXmby83AkNAnZibibO8ubsBXBfgfD1TUPKOcbhw/640?wx_fmt=png)

IC的VCC范围比较宽，直接采用VCC绕组整流后串联个电阻使用。

  

R7的用法一般有的用电阻，有的可以用磁珠。电压电流范围比较宽的话，R7用插件电阻，在大电流时和高压是能帮IC减小点电压。

  

R7还有个用处是在切载的时候能吸收掉VCC的尖峰，避免切载时IC的VCC过高保护。

  

R8的取值，ZD1是15V，Q1进来的电压是20V，直流放大增益按照40倍（hef一般是50-300,40是留余量的算法）来算。IC工作电流为10mA，R8=（20V-15V）/（10mA/40倍）=20kΩ。

  

**驱动电阻的选型**

MOSFET的驱动电阻、GS放电电阻、Isense电阻。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamOKYV7AvgfDeFY4tliaiaNM3qCMsgmAXVWx0fuO16Tb9rw8b35JmChH0A/640?wx_fmt=png)

  

整改EMC时调整R9，R13。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamnYweTqvftcNuPK6EiakkJlMhZrYV2ZHvw3BSP83goXibMzfF9lQPazMQ/640?wx_fmt=png)

  

R19，R13一般采用0805，MOSFET电流较大的话采用1206，并且取消掉D3。

  

R10，小功率的情况可以用几个0805或者1206并联，大功率情况下，如果电流很大，电阻上的电感对检测电路影响很大，容易出现批量问题，用绕线无感电阻比较靠谱。

  

电流再大的情况就要打算用电流传感器。驱动部分也要换专门的驱动芯片或者采用一对三极管来做驱动。

  

**原副边的吸收电阻**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamicGmqyoibhkO41EGYPEmlWpmF42Dyv5fCqmK490kQMNFAgiagGibFoTZfg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8LiamXAQlAmQTlnDJxhu5yzg66nHKNy6zmvf6MKdcosoPEwRtEQYVrT961g/640?wx_fmt=png)

  

RCD电路，里面的R选值，基本按照功率来选了，电源功率越大，R的功率相对越大。

  

RCD吸收电路里面的电压尖峰，这些尖峰基本上是开关管高dV/dt和dI/dt时候出现的。

  

反激里面会用到，大功率的全桥电路里面也会用到。

  

RCD在调整辐射的时候，电阻对辐射影响还是有点关系的。

  

关于取值的计算，没有相应的公式来计算，惭愧了，基本上都是拍脑袋后，通过极限值测试后再定的。

  

**431反馈部分的电阻**

431部分的电阻选择参考。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgddiaDv4flfraVFM2uZ8Liam4gHMS0e5icUFDQiag7yvBrs4Intubq7c0JiaXn4t2Y9YibaY0VHmQWAl6Q/640?wx_fmt=png)

  

R4一般需要保证D1能有10mA左右的电流。

  

R2一般保证有1mA左右的电流，用1k-5k左右的值，阻值太大，流经的电流小了，易被干扰，阻值太小，流经的电流大了，待机损耗又浪费了。

  

R3一般需要配合C1一起调试。习惯性的用10k+103。R6一般采用1k左右的电阻，提供D1的电流情况下，不怎么影响Q1。

  

R4一般需要保证D1能有10mA左右的电流，如何理解？

  

如Vout=12V，则R4可以选取820Ω电阻，R4上面的电压≈12-1V（光耦）-2.5（基准）=8.5V。

  

极限情况下：

当电压超过12V时，431两端的电压可以很小，如2.5V以下，则光耦上会有10mA电流，初级的FB被很快拉低，PWM占空比很快变小。

  

当电压低于12V时，431两端的电压可以很大，接近12V，则光耦上没有电流经过，初级FB电压未被拉低，则初级PWM的占空比会增加。

  

这个电阻可以调节输出电压过冲，和负载突变时的输出电压变化值。10mA为参考值，不同的电路需要调节R4的值。

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源：电源网。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群