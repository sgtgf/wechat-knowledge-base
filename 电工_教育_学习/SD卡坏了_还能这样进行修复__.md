# SD卡坏了，还能这样进行修复 ？

原创 硬件笔记本 2023-09-30 19:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/G0lRtLs5BeO8I615UtqD2w](https://mp.weixin.qq.com/s/G0lRtLs5BeO8I615UtqD2w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

现在很多现代的NAND闪存设备都采用了一种新型的架构，将接口、控制器和存储芯片集成到一个普通的陶瓷层中。我们称之为一体结构封装。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh50IwoC4t0xX6mbR0DXIHzodgfm9NUwwdj1xfnUnyBnlqTNOOaFW9SpEoqfDZTGNxn9tLrB8D0wg/640?wx_fmt=png)

  

直到最近，所有的存储卡，如SD、索尼的MemoryStick、MMC等，都包含了一个非常简单的“经典”结构，其中包含了独立的部分——一个控制器、一个PCB和tsop48或LGA-52包中的NAND内存芯片。

  
在这种情况下，恢复的整个过程非常简单——我们只是解焊了内存芯片，用PC-3000 FLASH直接读取它，并与普通USB闪存驱动器做了同样的准备。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Axk5M2nNicrzlKxS6wKx5xhGaYMCiaTVbcnPhdBdHj0AaFk19eVDV5iaMlA/640?wx_fmt=png&wxfrom=13)

  

但是，如果我们的存储卡或UFD设备是基于一体封装架构的，我们该怎么办呢?如何访问NAND内存芯片并从中读取数据?

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh50IwoC4t0xX6mbR0DXIHzzLS3tQicOmaVoVVD2IwF574mc6NqAkF7Wqle5FB7gUG29VyaNxUB9UQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxVdv137rzpp1WhuxEFAV6H2025peVyMEibnlPRwUbCJhQXNn1Mhibh2fQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

基本上，在这种情况下，我们应该尝试通过擦除涂层的陶瓷层，在我们的一体封装装置的底部找到特殊的技术引脚。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxPKUHtyBD6nek1AjhrHlTh3w6fT0zM35xDZMKOqeas17Zm9W8D98WOw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

在开始处理一体FLASH数据恢复之前，我们应该警告你，一体FLASH器件焊接的整个过程很复杂，需要良好的焊接技能和特殊设备。 如果您之前从未尝试过焊接一体FLASH器件，那么最好在一些数据不重要的配件在设备上尝试您的技能。 例如，您可以购买其中的几个，以测试您的准备和焊接技能。

**您可以在下面找到必要设备清单：**

一个好的光学显微镜，x2, x4, x8变焦;

USB烙铁与非常薄的烙铁头，很尖的烙铁头;

双面胶带;

液体活性剂;

BGA助焊剂;

热风枪(例如- Lukey 702);

松香;

木制牙签;

酒精(75%以上纯度);

直径0.1毫米的铜线，漆包线;

首饰级砂纸(1000、2000、2500末(数值越大，沙子越小);

BGA锡球为0.3 mm的;

镊子;

锋利的手术刀;

图纸与引脚分配方案;

PC-3000 Flash 线路板适配器;

当所有的设备都准备好进行焊接时，我们就可以开始生产了。

首先，我们使用我们的一体FLASH设备。在我们的例子中，它是小的microSD卡。我们需要用双面胶把这张卡片固定在桌子上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxAtm9UnaibpcaRnkYmMeLZ3icibl4zhyV7NGepYehjzz0jNuoyynfBAibLw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

之后，我们开始从底部擦掉陶瓷层。 这个操作需要一些时间，所以你应该非常耐心和小心。 如果你损坏了引脚层，数据恢复将是不可能的！

我们从粗砂纸（最大尺寸的砂）开始 – 1000或1200。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Ax459mEMU4IvLu1grPzMXjQY6JDV5E8WOnXw8WtuSMAw9fcApZ9NCicpA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

当第一大部分涂层被去除时，有必要将砂纸更换为较小的砂粒尺寸 – 2000。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxQY1L2OuvM7jyqnXRIwJxSDy215gzLQtQUdB0QyfZyXaMGn4ZVwfROw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

最后，当触点铜层变得可见时，我们应该使用最小的砂粒尺寸 – 2500。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Axqy18ZHmLPsT1eI9UpMibaqCXL3ajTj0eZLMibsgSnrP5dqUCBPTYvAQQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

如果你正确地执行所有的操作，最后你会得到这样的东西：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxEQviaDPE3m764Wn9ermCnFUel4zlUjm9sV1ueia6PlOTVt8tNcibB0CqQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

下一步是在我们的全球解决方案中心搜索引脚。

要继续使用整块，我们需要焊接3组触点：

1.  数据I / O触点: **D0, D1, D2, D3, D4, D5, D6, D7**;
    
2.  指令触点: **ALE, RE, R/B, CE, CLE, WE;**
    
3.  电源触点: **VCC**, **GND.**
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxWZibDPxtvbmKuZHRM7vbgsZw12aicWHrk1WCiba3yyCOFuBImBicXFc3bQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

首先，您需要选择一体FLASH器件的类别（在我们的例子中为microSD卡），之后您必须选择兼容的引脚排列（在我们的例子中为2型）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxTSUEHTodiaQh01QOuia1KwSrZicyHEOrz1QuDfQbuTItO5XXHibjq5hlhA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

之后，我们应该将microSD卡固定在电路板适配器上，以便更方便地焊接。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Axt4A2H0KibfUJXYK6lQO879YVOS6a7lHSrs3Kqtv8ul6J3t5uuggv4jw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxxopM2TQQo60rJl1ibrmicbXIzNOCEVSBMicxSkh5pXfLXmSV1bB2Os2Fg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在焊接之前打印出一体FLASH器件的引脚排列方案是个好主意。 你可以把这个方案放在你的旁边，这样当你需要检查引脚数组时，它就在眼前。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxRPKRdoeib7wVJH4RSrrMHIO7KeXfIItbAenQbGiaPiaNLXiaqm4Vrehm9A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

我们准备开始焊接过程了！ 确保工作站有足够的光线！

在小刷子的帮助下，将一些液体活性助焊剂滴在microSD引脚触点上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxwQLXS4lCPiaqhxDqnFzsibiaeja8V5yYDpPDPQI4orberoibvyXkKTOeKQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxibBX74c35P9A2zrDTw1mnBKuFLuhAM6PmvDFll6EF1accMGdsSDzDXA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在湿齿镐的帮助下，我们应将所有BGA锡球放置在引脚排列方案上标记的铜引脚触点上。 最好使用尺寸为触点直径约75％的BGA锡球。 液体助焊剂将帮助我们将BGA球固定在microSD卡表面上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Axphyribt89H8xMP4EiaAL2YRUzW7ujYiaVZ29pLvibhxsoqoOdb5CNrMTRg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Ax08MczGuDzGQgyMWfKneqPKBKgsNcmFCbaTSA8RDAz314s7iacWIE9kg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

当所有的BGA锡球都放在引脚上时，我们应该使用烙铁来熔化锡。 小心！ 轻轻地执行所有动作！ 为了熔化，请用烙铁头轻轻触碰BGA锡球。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Ax8MV9ib8eoKUic6G7mgiciaia0opiahFjqGuvGbOjScZMsmJoWwyhvpFqh0sg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

当所有的BGA锡球都熔化后，你需要在触点上放一些BGA助焊剂。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxVrJGcDI0RPDCmtXGXqwUiaI1Oj4DnjDaAVQmpicIe79SwUfhFtqx3mqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

使用热风枪，我们应该加热+ 200C的温度我们的引脚。BGA助焊剂有助于在所有BGA触点之间分配热量并小心地熔化它们。 加热后，所有触点和BGA锡将采取半球形式。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Ax98IvMgaPzhuCttibUyibAd7HHtwsPUYeNuL3eAf1BLPWiaYGuZia90TRRw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

现在我们应该在酒精的帮助下去除所有的助焊剂痕迹。 您需要将它洒在microSD卡上，并用刷子清洁它。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxyPAw0TyicgZZJ0PQZW8OmpgBQ5QnqAg9zLvYXlwGnKDTjXbLicYqVIKA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxxzbhINyawkw8NwMA2Dba1SoqTlOe685YCeIop0j9icPYVcIiaVAUlqeQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

下一步是准备铜线。 它们的长度应相同（约5-7厘米）。 为了切割相同尺寸的电线，我们建议使用一张纸作为长度测量仪。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxAtiarN4RfEmugrdTwSkAxI0FbeClYahicjZrvhl6GsqCiauKMBD0M5Kdg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxfHcRpcJwl6krFDgWrbFL7Lhh9HaEbyicaV2hO9TcRgDibyg6Ee9Ww3XQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

之后，我们应该借助手术刀从电线上去除隔离漆。 从两侧稍微划伤它们。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxghT5lJgoNcs4EWibBOhVXeWAPWPyQq2LHW2ZOG8siadwG6aHGicUY2rag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxGsm3CDzu0EsFtjdyTCQ8fz9KOZtnq1vJyOIFKwHWicRymyVJfyJx2UQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

电线准备的最后一个阶段将是松香丝镀锡的过程，以便更好地进行焊接。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Axwvw85NSeIrcnheGGbs3yPSYibCicYqoE5EXBL01uKkqn2icbR3PNy3iaNw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxdVmV3L2v6wpDRgo81SpyYVcRicoreLib7DApCkGxIzFQYrszvOJYOibiag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

现在我们准备开始焊接电路到我们的电路板。 我们建议您从电路板的侧面开始焊接，然后在显微镜的帮助下，继续将电线的另一侧焊接到单片器件上。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxefySWfsb7uCLD9fuqbyHLMfNSqbaXXujGzcENdia5JFg0ZJEMjfBZsg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxAFaiaVvc1siaia7J8cJaTf7bnkZwicuDCr3MFRXlnHhYiaZ6NfCS6jmwOicQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

最后，所有电线都焊接到电路板上，我们准备开始使用显微镜将电线焊接到microSD卡上。  

这是最复杂的操作，需要很多耐心。 如果你觉得你很累 – 休息一下，吃一些甜的东西，喝一杯咖啡（血液中的糖会帮助你的手不要动摇）。 之后，开始焊接。

对于右撇子，我们建议右手拿烙铁，而左手拿镊子用铜线。

你的烙铁应该是干净的！ 不要忘记在焊接时不时清理它。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxIeTtXm5YUuIiaRLLvMKOxn7QDHR9eq1gDobfd85CvGrjAdZR6VZaKaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4Axe7UIWnDxmVA1G7EXc1YkBoYpQTrxkpWYaTF8e0zuvLnEfXTBMlydwg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxQKmzzzia6ENibvGUJvsibxu4e3H2IKTqnBDaVLHuvUJWibjtDMUZR4OB8A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

当所有触点都焊接完毕后，确保没有任何一个触点连接到GND层！ 所有的针脚必须非常紧固！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxEDsE9kvCIgqr2mVbTHDb5QCkuznxicZ3qkIeGn9VooxWiaQuJkYGyffg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

现在我们准备将我们的电路板连接到PC-3000FLASH，并开始读取过程！  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa78zN42SibthFaCcCpZsI4AxIVV3vicxYXLzg36So1WDyhN4icLZfoYagrqLyAdrnFPKXDWXufmCLd9g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

文章来源：PC3000 Flash如何恢复一体FLASH芯片封装(micro SD卡/TF卡)的数据恢复全过程 - 苏州盘首数据恢复|专注与SSD固态硬盘数据恢复！http://www.4f61.com/article/707.html

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群