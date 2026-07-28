# 看完这篇，4个步骤快速完成MOSFET选型

原创 硬件笔记本 2023-09-20 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/sz-cguLRapKNzWI3fgod7Q](https://mp.weixin.qq.com/s/sz-cguLRapKNzWI3fgod7Q)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

今天教你4个步骤选择一个合适的MOSFET。

**第一步：选用N沟道还是P沟道**　　

为设计选择正确器件的**第一步是决定采用N沟道还是P沟道**MOSFET。在典型的功率应用中，当一个MOSFET接地，而负载连接到干线电压上时，该MOSFET就构成了低压侧开关。在低压侧开关中，应采用N沟道MOSFET，这是出于对关闭或导通器件所需电压的考虑。当MOSFET连接到总线及负载接地时，就要用高压侧开关。通常会在这个拓扑中采用P沟道MOSFET，这也是出于对电压驱动的考虑。　

要选择适合应用的器件，必须确定驱动器件所需的电压，以及在设计中最简易执行的方法。**下一步是确定所需的额定电压，或者器件所能承受的最大电压。**额定电压越大，器件的成本就越高。根据实践经验，额定电压应当大于干线电压或总线电压。这样才能提供足够的保护，使MOSFET不会失效。就选择MOSFET而言，必须确定漏极至源极间可能承受的最大电压，即最大VDS。知道MOSFET能承受的最大电压会随温度而变化这点十分重要。设计人员必须在整个工作温度范围内测试电压的变化范围。额定电压必须有足够的余量覆盖这个变化范围，确保电路不会失效。设计工程师需要考虑的其他安全因素包括由开关电子设备(如电机或变压器)诱发的电压瞬变。

  

**第二步：确定额定电流**　　

**第二步是选择MOSFET的额定电流。**视电路结构而定，该额定电流应是负载在所有情况下能够承受的最大电流。与电压的情况相似，设计人员必须确保所选的MOSFET能承受这个额定电流，即使在系统产生尖峰电流时。两个考虑的电流情况是连续模式和脉冲尖峰。在连续导通模式下，MOSFET处于稳态，此时电流连续通过器件。脉冲尖峰是指有大量电涌(或尖峰电流)流过器件。一旦确定了这些条件下的最大电流，只需直接选择能承受这个最大电流的器件便可。

  

**选好额定电流后，还必须计算导通损耗。**在实际情况下，MOSFET并不是理想的器件，因为在导电过程中会有电能损耗，这称之为导通损耗。MOSFET在“导通”时就像一个可变电阻，由器件的RDS(ON)所确定，并随温度而显著变化。器件的功率耗损可由Iload2×RDS(ON)计算，由于导通电阻随温度变化，因此功率耗损也会随之按比例变化。对MOSFET施加的电压VGS越高，RDS(ON)就会越小；反之RDS(ON)就会越高。对系统设计人员来说，这就是取决于系统电压而需要折中权衡的地方。对便携式设计来说，采用较低的电压比较容易(较为普遍)，而对于工业设计，可采用较高的电压。注意RDS(ON)电阻会随着电流轻微上升。

  

**第三步：确定热要求**　　

**选择MOSFET的下一步是计算系统的散热要求。**设计人员必须考虑两种不同的情况，即最坏情况和真实情况。建议采用针对最坏情况的计算结果，因为这个结果提供更大的安全余量，能确保系统不会失效。在MOSFET的资料表上还有一些需要注意的测量数据；比如封装器件的半导体结与环境之间的热阻，以及最大的结温。

  

**器件的结温等于最大环境温度加上热阻与功率耗散的乘积(结温=最大环境温度+\[热阻×功率耗散\])。**根据这个方程可解出系统的最大功率耗散，即按定义相等于I2×RDS(ON)。由于设计人员已确定将要通过器件的最大电流，因此可以计算出不同温度下的RDS(ON)。值得注意的是，在处理简单热模型时，设计人员还必须考虑半导体结/器件外壳及外壳/环境的热容量；即要求印刷电路板和封装不会立即升温。

  

**第四步：决定开关性能**　　

**选择MOSFET的最后一步是决定MOSFET的开关性能。**影响开关性能的参数有很多，但最重要的是栅极/漏极、栅极/ 源极及漏极/源极电容。这些电容会在器件中产生开关损耗，因为在每次开关时都要对它们充电。MOSFET的开关速度因此被降低，器件效率也下降。为计算开关过程中器件的总损耗，设计人员必须计算开通过程中的损耗(Eon)和关闭过程中的损耗(Eoff)。MOSFET开关的总功率可用如下方程表达：Psw=(Eon+Eoff)×开关频率。而栅极电荷(Qgd)对开关性能的影响最大。

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
    

后台回复“加群”，管理员拉你加入同行技术交流群。