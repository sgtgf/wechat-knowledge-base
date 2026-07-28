# 仿"华为"电路？高压直流模块DC-DC驱动电路对比

原创 硬件笔记本 2024-05-03 12:09 四川

> 原文地址: [https://mp.weixin.qq.com/s/3IrM9dSrhsFmRh2vecJbnQ](https://mp.weixin.qq.com/s/3IrM9dSrhsFmRh2vecJbnQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

高压直流模块的DC-DC驱动设计要求：

（1） 开关频率：90kHZ-300kHZ；

（2） 所用功率器件：MOSFET，不能用IGBT；

（3） 占空比范围：PFM 50% duty，PWM 0-95% duty；

（4） 死区时间：200ns左右，依据所选MOSFET的关断延时决定，尽量小；

（5） 驱动电压：正平台电压大于10V；需要驱动负压，-2V或以下。驱动供电电源设计为15V左右。

（6） 采用副边控制，需要隔离驱动，隔离电压：3000kVrms；

（7） 需要MOSFET快速关断电路；

（8） 需要推挽电路增大驱动输出功率；

（9） 需要考虑MOSFET并联时的均流问题；

（10） 需要对之前模块的驱动相关问题进行排查，规避以往驱动电路的问题；

（11） 驱动芯片要求兼容CMOS电平，能直接从DSP侧作为输入；

# 已有驱动电路分析

当前已有的方案情况：

（1） 整个多路的DC-DC驱动电路只有一路电源供电。通过驱动变压器隔离，1拖2。驱动供电在驱动变压器原边。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4Ybicd8XCc9Mc10qDiat8eBbks3pibaFkKU24wysAgTibguP82Infy7DtAiaGSQ/640?wx_fmt=png&from=appmsg)

  

（2） 华为336驱动方案，控制侧一路，驱动侧2路，共需3路电源。实际驱动侧采用自举供电的方式，保证一路电源能同时给上下桥供电。驱动变压器为1拖2。实际驱动供电在驱动变压器副边，驱动变压器原边只负责控制和隔离。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4Ybic4mEUbHvfWTLlYZp1zGhXwSsyHOj2H31IGb9VF6TF3x7GP6vbsSKvvg/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbicYecIYNfOu3lFXfLQx6S1PhhdRcHoG9Q94W25K6QPTwibMb3rJG5Vxxw/640?wx_fmt=png&from=appmsg)

  

（3） 台达样机的驱动方案，需要更多路电源。具体是：控制侧一路电源，驱动侧每个桥臂都有一路单独的隔离电源。驱动变压器原边依旧只负责控制，驱动供电由副边完成。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4Ybic9ZVUNpNOCxqOvFDHfk5Hcwys7jicNsKhpAuKxYY11qibMhiaSd9y57n6A/640?wx_fmt=png&from=appmsg)

  

三种驱动电路对比：

  

已有的模块

华为336模块

台达模块

驱动变压器绕组数

3（1拖2）

3（1拖2）

3（1拖2）

驱动供电位置

驱动变压器原边

（驱动变压器负责控制和供电）

驱动变压器副边

（驱动变压器只负责控制，不负责供电）

驱动变压器副边

（驱动变压器只负责控制，不负责供电）

供电电源

全部驱动电路总共只有1个电源

每组上下桥臂共用1个，上桥采用浮驱的方式，共7组（三相LLC）

每个桥臂单独供电

是否有驱动快速关断电路

有

有

有

是否有驱动负压

有

无

未知

是否有驱动推挽电路

有

无（驱动芯片UCC27324的两路输出来同时驱动同一路MOSFT，每路最大4A输出电流，共8A驱动电流，驱动功率够，无需推挽）

有

是否有驱动信号电平转换电路

有，74HC08

无

有

驱动变压器原边是否串联电阻

无

有，1欧

无

G/S之间的跨接电阻

4.7k欧

10k欧

10k欧

驱动开通电阻值

15.1欧（规格书最小驱动电阻为3.3欧，SPW35N60CFD）

5.9欧（规格书最小驱动电阻1.8欧，IPW65R041CFD）

未知

  

假如将这三种类型的驱动电路分别应用到交错并联LLC的驱动电路上，对比如下：

  

我司15K模块的方案

华为336模块的方案

台达模块的方案

供电电源数

1路

1+4路

1+8路或1+6路（下桥臂可共用同一路电源）

驱动芯片数

4PCS（IXDN604）

4+8PCS（UCC27324）

4PCS（UCC27322）

推挽电路数

8

0

8

驱动变压器个数

4

4

4

DSP送出的驱动信号是否需要电平转换

不需

不需

需要，4个电平转换芯片

成本差异情况

基准

相对基准，多了8路驱动芯片和4路电源的成本，少了8个推挽电路的成本。

相对基准，多了2-4路驱动电源和4个驱动芯片的成本。

初步判断，在这三种驱动电路里面，已有模块的驱动电路方案成本最低。

# 已有模块的驱动电路存在的问题

已有模块驱动电路存在一个较大的问题，就是死区时间内，驱动不受控的问题。如下图：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbicvwWrXjr81FyO1epC7oicsX1KVgicvlmsEgutGLusmmUA5U0JvoXDicgEQ/640?wx_fmt=png&from=appmsg)

  

驱动变压器的每个副边都会输出三个电平，正电平，0电平和负电平。在刚从正电平进入0电平时，驱动的快速关断电路动作，MOSFET关断。随后由于驱动电压不断下降，Q30的1、2脚之间的电压也降低至0.7V以下，Q30关断，快速关断电路不起作用。由于驱动变压器原边无能量传递到变压器副边，MOSFET的驱动实际处于不受控状态，其G/S之间就只靠1个无源器件（4.7k的电阻）来将拉低。一般在PFM态下，0电平时间短，一般不会存在问题。但是在PWM态下，0电平时间会变长，驱动不受控时间变长。在有干扰的情况下，通过米勒电容，G/S之间的电容被充电使得驱动电压抬高，模块开通。最严酷的情况，甚至可能导致上下桥直通，模块炸机。

# 解决该驱动电路问题的方法

解决此驱动电路的这个问题，就是要让MOSFET的驱动侧一直受控。最初想到的可能解决方案有四个：

（1） 考虑其它的隔离方式，比如光耦隔离；

（2） 考虑选用开通门槛电压高的MOSFET或者IGBT；

（3） 驱动变压器改为1拖1的方式，同时保留驱动负压，可保证MOSFET G/S端受控；

（4） 驱动供电电源改为在驱动变压器副边供电，驱动变压器原边只负责控制，类似华为和台达模块的方式；

方案1可行性分析：

此方法理论上可行，但实际无优势。主要原因是：光耦副边同样需要电源供电，会多出N路电源；且光耦一般还存在可靠性、响应延时、隔离电压等级越高价格越贵等问题。采用此种方案无论是成本还是可靠性上都没有优势，因此放弃。

方案2可行性分析：

在我理解看来，已有模块的方案中，在G/S之间挂了一个4.7k电阻的情况下，死区时间内依旧容易出问题的其中一个原因，是因为MOSFET的门槛电压太低，经不起风吹草动。

下面是已有模块所用MOSFET的三家产品的门槛电压情况：

开通门槛电压

Min

Typ

Max

SPW35N60CFD（英飞凌）

3

4

5

IPX65R110CFD（英飞凌）

3.5

4

4.5

STW43NM60ND（ST）

3

4

5

另外，查了一下常用的富士和东芝MOSFET的开通门槛电压，如下：

富士MOSFET：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbicdUKSYtWjnwWHjqia8Lvj1YMrjbibKfbqyqhzwicaenOjzqWSopyIeGKfA/640?wx_fmt=png&from=appmsg)

东芝MOSFET：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbichdlNHUSTbwgrib3WcHYvpuGh9ypBPiaTLtMrc7ia6TwMnrUSdMuib6sMgw/640?wx_fmt=png&from=appmsg)

除了英飞凌的部分管子的门槛电压最低为3.5V以外，其它管子最低电压都是3V。需要查看一下15k以往的管子损坏数据，是否最低门槛电压为3.5V的IPX65R110CFD损坏较少。  

但是从驱动电路设计需要能兼容各家管子的角度来看，采用择管子的方式来规避这个问题，不合适。另外，由于开关频率在100K以上，无法用门槛电压高的IGBT。因此，此方案放弃。

方案3可行性分析：

若采用方案3，驱动变压器1拖1，基本的原理图如下：

驱动变压器原边：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbicqV2ro3C9WiaajQAndWAticEo0219qxzmmljyKqlY39sa7iavN4V8m7N7w/640?wx_fmt=png&from=appmsg)

  

驱动变压器副边：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbicOGogwDlovPJzvdv27wtaX0u6UCdghbYNxchsyibheas3JCPOnWs2zJA/640?wx_fmt=png&from=appmsg)

  

从原理图可见，驱动变压器1拖1，驱动变压器副边输出电平从3个改为了2个，电平稳定，不会出现上面的问题。

方案4可行性分析：

采用华为的驱动电路，也可以解决驱动电路的该问题。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4Ybiccrdmgia3TFyVv1EhIoCPlHSfUhYpVavXYU08kKJq0cvJsGiaDJDNvJPw/640?wx_fmt=png&from=appmsg)

华为模块具体解决该问题的方式，包含了下面几个部分：

（1） 驱动变压器只负责控制和隔离，不负责传递驱动能量；驱动能量从副边再引入电源提供；

（2） 采用上图红圈内的二极管，保证了1拖2时的驱动变压器副边负压在进入驱动芯片前消耗掉，送入驱动芯片的电压只有正驱动电压和0电平（UCC27324的电源电压供电范围为-0.3V到16V）。

（3） 采用上图红圈内的下拉电阻，保证了在死区时间内，能快速的驱动变压器副边杂生电感附带的能量消耗掉，死区时间内保持低电平。采用10k电阻就能搞定的原因，还是因为驱动变压器只传递控制信号而不传递驱动能量，驱动变压器副边杂生电感残存的能量少。

查看UCC27324的datasheet，如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg7nibp5I7prMgDys5lic4YbicibYUdrN7CkMK2c8Y3spEMbLwXjQoRW8st6iaA18fHkrzgxA4ibMQGicpmA/640?wx_fmt=png&from=appmsg)

低电平的上限为1V，可以满足使用要求。  

# 成本分析

将方案3和方案4所用器件情况：

  

方案3

价格（元）

方案4

价格（元）

价格差（方案3-方案4）（元）

驱动变压器个数

8

3.1\*0.7

4

3.1\*0.7

8.68

驱动芯片个数

4

1.4\*4

4+8

1.4\*12

\-11.2

推挽电路个数

8

（0.26+0.26）\*8

0

0

4.16

供电电源

1

按每一路0.5元算，0.5

1+4

按每一路0.5元算，0.5\*5

\-2

自举供电所需二极管和电容

0

按每一路0.2元算，0

4个二极管和4个电容

按每一路0.2元算，0.8

\-0.8

综合成本对比

  

27.62

  

28.78

\-1.16

从综合成本比对来看，方案3比方案4便宜1.16元，方案3较有优势。

但是，问题在于，方案3需要选用8个驱动变压器，由于驱动变压器为插件器件，需要占用PCB正面的位置。这对于当前非常有限的PCB空间而言，又是一个挑战。

对于方案4，仿照华为电路，总共用了12个驱动芯片，这是其成本最贵的地方。可能的原因，是华为采购27324的价格非常便宜。实际上，副边还采用27324，非常的浪费。

这里将华为模块的优点和台达模块的优点合在一起，即在驱动变压器副边，将27324修改为推挽电路，将每个桥臂单独供电改为华为模块的自举供电，变成方案5。成本对比如下：

  

方案3

价格（元）

方案5

价格（元）

价格差（方案3-方案5）（元）

驱动变压器个数

8

3.1\*0.7

4

3.1\*0.7

8.68

驱动芯片个数

4

1.4\*4

4

1.4\*4

0

推挽电路个数

8

（0.26+0.26）\*8

8

（0.26+0.26）\*8

0

供电电源

1

按每一路0.5元算，0.5

1+4

按每一路0.5元算，0.5\*5

\-2

自举供电所需二极管和电容

0

按每一路0.2元算，0

4个二极管和4个电容

按每一路0.2元算，0.8

\-0.8

综合成本对比

  

27.62

  

21.74

5.88

因此，推荐采用方案5。

# 推荐驱动电路

从成本和PCB正面空间占用情况考虑，推荐采用方案5，类似华为模块的驱动电路，但是将驱动变压器副边的UCC27324改为推挽电路。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源@艾伊电源。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。