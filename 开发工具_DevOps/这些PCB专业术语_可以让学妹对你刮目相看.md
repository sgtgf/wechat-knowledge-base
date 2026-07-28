# 这些PCB专业术语，可以让学妹对你刮目相看

原创 硬件笔记本 2023-09-15 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/fhvAFfqKF2yqF9eoFwZJRA](https://mp.weixin.qq.com/s/fhvAFfqKF2yqF9eoFwZJRA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

文章将会详细解释PCB的构成，以及在PCB的领域里面常用的一些术语，简要的组装方法，以及简介PCB的设计过程。

  

01

PCB的诞生

在PCB出现之前，电路是通过点到点的接线组成的，这种方法的可靠性很低，因为随着电路的老化，线路的破裂会导致线路节点的断路或者短路。

绕线技术是电路技术的一个重大进步，这种方法通过将小口径线材绕在连接点的柱子上，提升了线路的耐久性以及可更换性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiahcAW57Vym3QfkROZp9eDrwJNYhcJ4Urgpm67iao5icNRaoM7SVSUlMWw/640?wx_fmt=jpeg)

  

当电子行业从真空管、继电器发展到硅半导体以及集成电路的时候，电子元器件的尺寸和价格也在下降。

电子产品越来越频繁的出现在了消费领域，促使厂商去寻找更小以及性价比更高的方案，于是，PCB诞生了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiab1QzdwO5AOfLIcBG6ZCYtgjJicHwsUhlB6TXphpNZFGRagW0dQoZGdQ/640?wx_fmt=jpeg)

  

02

PCB的组成

PCB看上去像多层蛋糕或者千层面--制作中将不同的材料的层，通过热量和粘合剂压制到一起。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaUWdIUQdFcbQIKPyb5mz1DaERiaTkCcQM4EiaAic6I0oyBFIgerPicmNZ2g/640?wx_fmt=png)

  

03

PCB的基材

PCB的基材一般都是玻璃纤维，大多数情况下，PCB的玻璃纤维基材一般就指FR4这种材料，FR4这种固体材料给予了PCB硬度和厚度。

除了FR4这种基材外，还有柔性高温塑料(聚酰亚胺或类似)上生产的柔性电路板等等。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaZ6zVD39nz8oVZ66qeYTTq40TBRlw9rnvrW2ABjbtRzOKWKANoDp7NQ/640?wx_fmt=jpeg)

廉价的PCB和洞洞板(见上图)是由环氧树脂或酚这样的材料制成，缺乏 FR4那种耐用性，但是却便宜很多，当在这种板子上焊接东西时，将会闻到很大的异味。  

这种类型的基材，常常被用在很低端的消费品里面，酚类物质具有较低的热分解温度，焊接时间过长会导致其分解碳化，并且散发出难闻的味道。

  

04

铜箔

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaw8DyDicCWrbun6wnyDZPRPmfgiaysYChqLsxcxmKFviceVfARmWqmVLxA/640?wx_fmt=jpeg)

接下来介绍是很薄的铜箔层，生产中通过热量以及黏合剂将其压制到基材上面，在双面板上，铜箔会压制到基材的正反两面。

在一些低成本的场合，可能只会在基材的一面压制铜箔，当我们提及到”双面板“或者”两层板“的时候，指的是我们的千层面上有两层铜箔。

当然，不同的PCB设计中，铜箔层的数量可能是1层这么少，或者比16层还多。  

铜层的厚度种类比较多，而且是用重量做单位的，一般采用铜均匀的覆盖一平方英尺的重量(盎司oz)来表示。

大部分PCB的铜厚是1oz，但是有一些大功率的PCB可能会用到2oz或者3oz的铜厚，将盎司(oz)每平方英尺换算一下，大概是 35um或者1.4mil的铜厚。

  

05

阻焊

在铜层上面的是阻焊层，这一层让PCB看起来是绿色的或者是SparkFun的红色。

阻焊层覆盖住铜层上面的走线，防止PCB上的走线和其他的金属、焊锡或者其它的导电物体接触导致短路。  

阻焊层的存在，使大家可以在正确的地方进行焊接 ，并且防止了焊锡搭桥。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaVExEMLY9IfnicnjAN6y8lExAhhpnWabkpIOcwE4DURLhrt0SNDAARmg/640?wx_fmt=jpeg)

如上图所示，我们可以看到阻焊覆盖了PCB的大部分，包括走线，但是露出了银色的孔环以及SMD焊盘以方便焊接，一般来说，阻焊都是绿色的，但几乎所有的颜色可以用来做阻焊。

  

06

丝印

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaGFWulBYezlENdQE6a1dxwT49oN7ic6dycBicYSsjlOWj2mVkOrv2V9sA/640?wx_fmt=jpeg)

在阻焊层上面，是白色的丝印层，在PCB的丝印层上印有字母、数字以及符号，这样可以方便组装以及指导大家更好地理解板卡的设计。

我们经常会用丝印层的符号标示某些管脚或者LED的功能等，丝印层是最最常见的颜色是白色，同样，丝印层几乎可以做成任何颜色。

黑色，灰色，红色甚至是黄色的丝印层并不少见，然而，很少见到单个板卡上有多种丝印层颜色。

  

07

术语

现在你知道了PCB的结构组成，下面我们来看一下PCB相关的术语吧。

**孔环：**PCB上的金属化孔上的铜环。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiarI4DXTzFLNjEJlhllEjdn4hQVvmcxU9HpwpQzU87CSsGf9j2m4bcxA/640?wx_fmt=jpeg)

**DRC：**设计规则检查，一个检查设计是否包含错误的程序，比如走线短路，走线太细，或者钻孔太小。

**钻孔命中：**用来表示，设计中要求的钻孔位置和实际的钻孔位置的偏差，钝钻头导致的不正确的钻孔中心是PCB制造里的普遍问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiacRBqwZmYFjTAibibh1icjWKicAYiciaN1aUcdcKN8fOMWlj62YibqPRFkhgRg/640?wx_fmt=jpeg)

如上图所示，就是不是太准确的drill hit示意图。

**金手指：**在板卡边上裸露的金属焊盘，一般用做连接两个电路板，比如计算机的扩展模块的边缘、内存条以及老的游戏卡。

**邮票孔：**除了V-Cut外，另一种可选择的分板设计方法，用一些连续的孔形成一个薄弱的连接点，就可以容易将板卡从拼版上分割出来。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiarm2lmdZATK0KVTZMrHd92YPgK80cy3WaKsntdzgsICaBKfC0ibuoRXg/640?wx_fmt=jpeg)

**焊盘：**在PCB表面裸露的一部分金属，用来焊接器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiakCIkDo204KZaVACdN3LAgfKfXR4gwLic3f50bAV27TL5zPGTMalf7VQ/640?wx_fmt=jpeg)

**拼板：**一个由很多可分割的小电路板组成的大电路板，自动化的电路板生产设备在生产小板卡的时候经常会出问题，将几个小板卡组合到一起，可以加快生产速度。

**钢网：**一个薄金属模板也可以是塑料，在组装的时候，将其放在PCB上让焊锡透过某些特定部位。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaaXta1DjGvJCpHZu0xlXKml2qgkQ1Pj1TP2lGfZ3sBySNx5rnnWiajbw/640?wx_fmt=jpeg)

**Pick-and-place：**将元器件放到线路板上的机器或者流程。  

**平面：**线路板上一段连续的铜皮，一般是由边界来定义而不是路径，也称作覆铜。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaxJSylIVXn4C7tQ3VL64LW1x0WupCiayWpOvkPejSHZ6hjDPLvMibQPKA/640?wx_fmt=jpeg)

**金属化过孔：**PCB上的一个孔，包含孔环以及电镀的孔壁，金属化过孔可能是一个插件的连接点，信号的换层处，或者是一个安装孔。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaFlBFvuY8Mzq5Cxq5n4TEJp3mKU4x9K02lEY9aKGhCCXoB4z9ff5sLg/640?wx_fmt=jpeg)

FABFM PCB上的一个插件电阻，电阻的两个腿已经穿过了PCB的过孔，电镀的孔壁可以使PCB正反两面的走线连接到一起。

**Pogo pin：**指的是一个弹簧支撑的临时接触点，一般用作测试或烧录程序。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOia6YdsZMn4Qtiavic3PMeKe3GfKLAJcxf7CHZsHEUtk0gIFtZK6vpUfkzQ/640?wx_fmt=jpeg)

**回流焊：**将焊锡融化，使焊盘(SMD)和器件管脚连接到一起。

**开槽：**指的是PCB上，任何不是圆形的洞，开槽可以电镀也可以不电镀，由于开槽需要额外的切割时间，有时会增加板卡的成本。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiaRORpxXGNvOOEKhEUbbviabygicRkeRTtuekb9N3zZwDFfcV5OGJ7WtLA/640?wx_fmt=jpeg)

注意: 由于开槽的刀具是圆形的，开槽的边缘不能完全做成直角。  

**锡膏层：**在往PCB上放置元器件之前，会通过钢网在表贴器件的焊盘上形成的一定厚度的锡膏层。

在回流焊过程中，锡膏融化，在焊盘和器件管脚间建立可靠的电气和机械连接。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOia5kqV0oCG1CWEjwCDFvb5Mg4b0pAeD8EOlRfScUDJVVXZ2uBibd66wUQ/640?wx_fmt=jpeg)

在放置元器件之前，PCB上短暂的锡膏层，记得去了解一下钢网的定义。  

**焊锡炉：**焊接插件的炉子，一般里面有少量的熔融的焊锡，板卡在上面迅速的通过，就可以将暴露的管脚上锡焊接好。  

**阻焊：**为了防止短路、腐蚀以及其它问题，铜上面会覆盖一层保护膜。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOia0yxlUtnP1AZ04r4JSqb1eTrBzTF93xJawOMZ11h3OBQyxknSicaNK1g/640?wx_fmt=png)

**连锡：**器件上的两个相连的管脚，被一小滴焊锡错误的连接到了一起。  

**表面贴装：**一种组装的方法，器件只需要简单的放在板卡上，不需要将器件管脚穿过板卡上的过孔。

**热焊盘：**指的是连接焊盘到平面间的一段短走线，如果焊盘没有做恰当的散热设计，焊接时很难将焊盘加热到足够的焊接温度，不恰当的散热焊盘设计，会感觉焊盘比较黏，并且回流焊的时间相对比较长。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiakuuytYU9uIGSWnOBBXt9DnO0TCllozRuoqrib7aunaTrEPauRDrHhxQ/640?wx_fmt=jpeg)

在左边，焊盘通过两个短走线(热焊盘)连接到地平面，在右边，过孔直接连接到地平面，没有采用热焊盘。  

**走线：**在电路板上，一般连续的铜的路径。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOia9qpstSiaDOHMdd5iaeUH12Iic0NTR5iatbknDRTFfDRZWEqo34kVWujX7w/640?wx_fmt=png)

一段连接复位点和板卡上其它地方的细走线，一个相对粗一点的走线连接了5V电源点。  

**V-score：**将板卡进行一条不完全的切割，可以将板卡通过这条直线折断。  

**过孔：**在板卡上的一个洞，一般用来将信号从一层切换到另外一层。

塞孔指的是在过孔上覆盖阻焊，以防被焊接，连接器或者器件管脚过孔，因为需要焊接，一般不会进行塞孔。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaHDP8St0RXBqWab1c4IBOiayuDu22UjA3lBSYkk27NyCEOK6azXv2gTjrSUSIUaFMTicvHz29d1USQ/640?wx_fmt=jpeg)

同一个PCB上塞孔的正反两面，这个过孔将正面的信号，通过在板卡上的钻孔，传输到了背面。  

**波峰焊：**一个焊接插件器件的方法，将板卡匀速的通过一个产生稳定波峰的熔融焊锡炉，焊锡的波峰会将器件管脚和暴露的焊盘焊接到一起。

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群