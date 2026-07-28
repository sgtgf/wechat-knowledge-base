# DCDC分压反馈电阻可以随便取值吗？

原创 硬件笔记本 2023-12-21 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/y2MOzSyDsMpjNQF28IPjtg](https://mp.weixin.qq.com/s/y2MOzSyDsMpjNQF28IPjtg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

相信每个硬件工程师应该都用过DC-DC，那么分压反馈电阻的取值有没有想过呢？

  

实际应用中大抵都是直接抄的手册中推荐的分压电阻阻值，就算没有正好对应输出电压的分压阻值，也一般是选择接近的电阻大小。

  

但是，总会有个别人可能想过：我想降低系统功耗，因此想让FB的分压电阻成倍增大，那到底有没有风险呢？

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nv9MCgs0WtmfFkAa0Eokiap4iau2jJrFmyFU5fNvlOmvYSe4FeaVyDbNA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

最近在自己电脑的文件夹看到有一个文档能回答这个问题，因此，我就直接复制粘贴过来了，感兴趣的兄弟们可以看看，分压电阻主要影响4个方面：

1、效率

2、输出电压精度

3、噪声敏感性

4、稳定性

  

文档全文如下：

  

引言

  

电阻式分压器是所有DC/DC转换器反馈系统中最为常见的网络。但是，人们常常错误地认为，它是一种简单地通过将电压调低至某个基准电压来实现输出电压调节的电路。在计算得到正确的分压器分压比以后，在选择实际电阻值时电源设计人员还必须沉思熟虑，因为它们会影响转换器的总体性能。

  

本文将讨论反馈系统中电阻式分压器的一些设计考虑以及这种分压器对转换器效率、输出电压精确度、噪声敏感性和稳定性的影响。

  

1、效率

  

开关式 DC / DC 转换器拥有相对较高的效率，因为它们通过一些低损耗组件（例如；电容、电感和开关）为负载提供电力输送。高效率带来更长的电池使用时间，从而延长便携式设备的工作时间。

  

对低功耗 DC / DC 转换器而言，典型的电阻式反馈设计均要求分压器电阻器（R1+R2）具有非常大的总电阻（高达1MΩ)。这样可以最小化反馈分压器的电流。该电流会加到负载上．因此如果反馈分压器电阻较小，则电池必需为相同负载提供更多的电流和功率。这样一来，效率也就更低。这种状况并不理想，特别是在一些需要长电池使用时间的便携式应用中。

  

设计实例1

  

图1表明，反馈电阻较低时，低负载的效率下降。本例中我们使用（ TI )TPS62060EVM，其中 VIN =5V. VouT =1.8V，并且启用节能模式。在高负载电流下，负载功耗远大于电阻式反馈网络的功耗。这就是不同R1和R2值的效率会集中在高负载电流的原因。但是，在低负载电流下，不同反馈电阻的效率差异更加明显。这是因为，分压器的电流主导了负载的电流。因此，要想拥有更高的轻负载效率，一种较好的设计方法是使用产品说明书单中建议的大反馈电阻值。如果在某个特定设计中轻负载效率并不重要，则可以在对效率无明显影响的情况下使用更小的电阻。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956ntunKm1U1n22MF3f5ibyrkictz2vFviaHZHTM7nvnTbklKlcPoX9ZJ3ZnQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

2、输出电压精确度

  

我们刚刚讨论了如何利用大反馈电阻来提高效率。然而，选择的电阻过大则会影响转换器的输出电压精确度。因为存在进入转换器反馈引脚的漏电流。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956n8C7CnZN2p3yWeWOMzJ7Iee1icqKSeJOyIPLqdMBKDuVFBXDiapNuGkfg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

图2显示了电阻式反馈分压器（R1和R2）的电流通路。反馈漏电流（IFB）固定不变时，R1的电流( lR1）随着R1和R2值增加而减小。因此，分压器电阻增加也就意味着进入反馈引脚的IR1漏电流百分比更大，并且R2的电流（1R2)降低，从而产生低于预期的反馈引脚电压（ VFB )。我们将 VFB 同一个内部基准电压比较，以此来设置输出电压，因此反馈电压的任何一点误差都会导致输出电压不精确。我们可以由基尔霍夫( Kirchhoff )电流定律推导出方程式1．其表明VFB为R1和R2的函数：

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nKbiaC3Sgcn4NNkgibULss91kyTOo2RtcVRjCyic4ImF8NJAkYxRAUu1eg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

请注意，IFB在实际系统中并非固定不变，会因器件不异，并随工作状态变化。要想估算出漏电流引起的输出电压极端变化情况，需在计算中使用IFB的最大规定值。

  

设计实例2

  

方程式1和TI的TPS62130降压转换器用于绘制反馈引脚电压及相应输出电压情况，其为反馈分压器电阻的函数（请参见图3)。该电压图基于理想电阻，其可产生一个3.3V的输出电压，并且反馈引脚电压为0.8V。需要考虑的唯一误差项是产品说明书中规定的100nA最大反馈漏电流。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956n9UmRuY1vnwe1EqHALTcuJhDLgkJq7jecoiagscOrWNHUibJq3icdrOfDQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

图3表明，反馈引脚电压随反馈分压器电阻增加而下降。由于反馈引脚电压得到补偿，转换器输出也得到补偿。低电阻时，没有反馈引脚电压的补偿，并且输出调节至设计规定的3.3V。

  

如果电阻器R2使用400kΩ的建议最大值（得到1650KΩ总分压电阻），则漏电流仅产生较小的输出电压下降。一般而言，产品说明书规定电阻器最大值是为了让输出电压维持在产品说明书规定精确度范围内。

  

3、噪声敏感性

  

电阻式分压器是转换器的一个噪声源。这种噪声也称作热噪声，分压器使用大电阻值时，这种噪声增加。

  

另外，大电阻会使更多噪声耦合进入转换器中。产生这种噪声的源头有很多，包括 AM 和 FM 无线电波、手机信号和 PCB 上的开关式转换器或者 RF 发射器。噪声甚至可以来自开关式DC/DC转换器本身，特别是 PCB 布局方法不当时。由于电阻式分压器连接反馈引脚，因此转换器闭环增益会放大噪声，从而出现在输出端。要想降低对其他噪声源的敏感性，设计人员可以使用更小的反馈电阻、更理想的电路板布局或者实施屏蔽。使用小反馈电阻的确可以降低噪声敏感性，但代价是效率稍有降低。

  

4、控制环路、瞬态响应和转换器稳定性

  

理想状态下，在使用网络分析仪测量时，一个稳定的转换器应有至少45°的相位裕量。这么大的相位裕量降低甚至消除了输出电压振铃，从而防止输入电压瞬态或者负载瞬态期间对电压敏感型负载的破坏。

  

根据不同的控制拓扑，产品说明书可能会要求或者建议电阻式反馈网络使用前馈电容（ CFF )。图4显示了这种装置。给电阻式分压器添加前馈电容可产生零点和极点，增加转换器的相位裕量和交叉频率，从而获得一个更高带宽、高稳定性的系统。

  

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nqicaROEdGad4cvQUMnbC07WnViayCZThEf5KN7eWMzaWOiajJttycAUPg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

由图4所示电路传输函数，分别利用方程式2和3计算出零点fz和极点fp：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nf784fePLMI2uxibF7sxJJZiaRsl9yuGXBHVQHWZPh6hySUt3jg55zicDQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nPS8gfamzNJTs8AwcaNkOlTnjwBZC2x3GW2arqTAic3PEKn5beCcSS3A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

很明显，零点和极点都与电阻分压器和前馈电容所使用的值有关。因此，增加或降低电阻值来优化效率、电压精度或者噪声，会改变系统的整体环路。要想保住稳定性，需要根据前面的零点或者是产品说明书建议的零点（哪个值可用，就用哪个值），用方程式4计算一个新的CFF值：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nfnkQBZOYfzs01aLWmdcicqfrOmvJvFC8YHzDpgqRulibSRSicyU4YPxMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

设计实例3

  

通过使用一个降压转换器，我们看到了电阻式分压器对转化器稳定性的影响。本例中，我们使用了TI TPS62240降压转换器，并且Vin=3.6V，Vout=1.8V，Lout=2.2uH，Cout=10uF，Iload=300mA。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nndMdWmCehibzv2T9gwiaPtPagGzyhWm0xpcFuEdwYD6WIJ0kwfnhX3fw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

 ![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nW4V9Vz9MAIA8ujl12YGbJRHOcWMicbOyM73vkuSPDOExn5L8BCuxQrA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图5和图6分别显示了三种不同电阻式分压器网络的闭环响应及其相应瞬态响应。每个网络都使用一个前馈电容，以描述分压器网络组件如何改变降压转换器稳定性。当使用分压器网络组件的产品说明书建议值时（R1=365 kΩ,，R2=182 kΩ和CFF =22pF)，转换器稳定，并且相位裕量为59°。它的瞬态响应对此进行了验证，其输出电压稍许下降，并且没有振荡。

  

当反馈分压器电阻按照比例降至R1=3.65kΩ，和R2=1.82 kΩ，但使用相同的前馈电容CFF=22pF时，反馈网络的零点和极点将发生变化。频率响应表面转换器不太稳定，相位裕量为40°。转换器的瞬态响应证明输出电压压降更大，且振铃更多。为了维持原始频率响应和稳定性，我们重新计算CFF值，用于新的反馈电阻值。

  

利用方程式4，使用更小电阻值，前馈电容为2200pF，可计算得到新值。这样得到的结果与第一种情况类似。相位裕量56°，转换器稳定，其瞬态响应得到验证，输出电压微降，并且没有振荡。

  

对于一个在其控制拓扑中使用前馈电容的转换器来说，改变电阻式分压器的值很容易让转换器稳定降低。但是这个例子仅仅表明，只要前馈电容调节适当，改变这些值便可维持相同的频率响应和瞬态响应。

  

特殊情况设计

  

如果设计人员必须使用前馈电容来提高稳定性，且一些转换器的内部补偿要求特定的CFF值。这种情况下，不应使用方程式4。设计人员应使用产品说明书的建议设计方程式。例如，TITPS61070便有高侧反馈电阻器（R1）的内部补偿。它的产品说明书建议使用下列设计方程式，用于添加一个与R1并联的电容：

![](https://mmbiz.qpic.cn/mmbiz_png/JiaP8iase0cPJUh7aZXiaPibWN8ZN5yN956nicceFSWl59pQn1uJ1Zko71K25rVcIAVpwqoleJ1ICRk3R1FIBb64zEw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

结论

  

电阻式反馈分压器或者网络会影响 DC / DC 转换器的效率、输出电压精确度、噪声敏感度和稳定性。要想获得具体产品说明书所列的性能，给反馈组件选择使用产品说明书建议值非常重要。另外，有些时候系统要求可能会背离这些建议，以达到其他一些设计目标。在理解这些不同参数之间的优缺点以后，设计人员才能正确地选择更大或者更小的电阻来满足其应用需求。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源硬件工程师炼成之路。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。