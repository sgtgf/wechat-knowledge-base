# NTC基础及应用

原创 硬件笔记本 2023-08-30 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/Ud08wPzT5uXlcQOvpSkqiQ](https://mp.weixin.qq.com/s/Ud08wPzT5uXlcQOvpSkqiQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

NTC热敏电阻是一种电阻值随温度上升而出现急剧下降的热敏电阻器件。利用这一性质，除了温度传感器以外，其还可以作为温度保护器件用来保护电路免受过热造成的影响。

  

TDK使用积累的材料技术及积层工艺，提供不同尺寸的贴片NTC热敏电阻。本文就温度检测与温度补偿等作为温度保护器件的应用示例进行介绍。

  

  

1、智能手机平板中的温度检测与温度补偿

  

智能手机或平板中使用有多个NTC热敏电阻用于温度检测以及温度补偿。

  

其基本电路是与NTC热敏电阻以及固定电阻进行串联的分压电路。CPU及功率模块等安装在发热部位附近的NTC热敏电阻的电阻值会随温度上升而下降，因此分压电路的输出电压会发生变化。该变化输送至微控制器后将会保护电路元件免受过热造成的影响，或进行温度补偿。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyibPmEd9jg93AgNBibIxFvZvKcwnibgzYdp7fvl4wDaKcWialMybebLIduw/640?wx_fmt=png)

  

  

2、移动设备电池充电中的温度检测

  

智能手机等移动设备的电池组中(锂离子电池)除了+端子与-端子之外，还有另外一个端子。那就是拥有T端子等名称的温度监测用端子，其内部搭载有NTC热敏电阻。在电池温度上升时，NTC热敏电阻温度也会随之上升，从而电阻值会下降，当超过上限充电温度时，充电控制IC将会停止充电。下图为基本电路示例。电池组内的保护IC会测量电池电压，从而防止过充电或过放电。

  

在快速充电等要求充电控制更为精准的情况时，将会使NTC热敏电阻与充电控制IC进行连接，从而用于测量环境温度。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5Hyh5h4VibZNu5EXsbSwOCImWB7UMjRtVen93HBAJElf8QNxwbv4AjyXCA/640?wx_fmt=png)

  

  

3、微控制器的温度检测

  

由于智能手机等微控制器需要确保工作可靠性，因此需要保护其免受过热所带来的影响。下图为组合了NTC热敏电阻与固定电阻的微控制器温度保护电路示例。

  

NTC热敏电阻由固定电阻RS与分压电路构成。若流过过度的电路，NTC热敏电阻温度将会上升，电阻值将会下降，从而将抑制微控制器的驱动电压。使用的电路元件为小型SMD贴片式的NTC热敏电阻以及电阻器，因此直接贴装于电路基板或发热部上即可起到有效的温度保护作用。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5Hyib2ADepNINDry2icocpkqrg9C7p3PpA9iaH18ktKyf93Fkp65bpTrHicqA/640?wx_fmt=png)

  

  

4、LED照明系统的温度检测

  

LED照明系统拥有耗电量低、寿命长等特点，但根据不同的使用方法，其会出现寿命缩短、发光效率降低等情况。

  

LED器件中作为发光层的半导体PN接合面会发热。该温度称为接合温度。流过LED的电流变大时亮度将会提高，发热量也会随之增加，从而接合温度将会变高，寿命将会缩短。此外，若接合温度过低时，发光效率将会下降，从而亮度将会降低。为此，为了发挥LED的最大效率，需要以最佳温度进行工作。

  

通过将NTC热敏电阻嵌入电路，并与LED进行热耦合后，便可作为简易温度保护电路进行工作。若与最佳工作温度存在偏差，则会以NTC热敏电阻的电阻变化形式表现出来，此时将会对流过LED的电流进行补偿。最终将会在降低LED电力损耗的同时实现长寿命化。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyibUbbUIWnA5UYnLZclJNHLbNrLqzPd4wbRKicYuJeyAKZsjheFKyicsuA/640?wx_fmt=png)

  

  

  

5、HDD的温度检测

  

用于电脑存储装置等的HDD是对于温度极为敏感的装置，当温度过高时出现错误或故障的可能性也会提高。为此，其会通过温度传感器对温度进行检测，当超过规定温度时，将会通过风扇进行送风冷却。虽然使用NTC热敏电阻与固定电阻的温度检测电路精度不及温度传感器IC，但优势在于成本极低。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyyEfrkAKTHKt44CB2EUKQVNCBZ7fdT0kc2zclzWbBkj9duCMItRO1jA/640?wx_fmt=png)

  

  

  

6、HDD磁头写入时的温度检测

  

将数据写入HDD时，是通过记录磁头产生的磁力，将其以磁性方式记录在盘片(磁盘)磁性膜上。写入过度时磁头会发热，从而会对磁头器件造成不良影响。为此，需要使用下图所示NTC热敏电阻，通过温度检测电路控制流过磁头的电流。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyyjocCELdVwTZEKagibAAictibQhKiaRicy06SKWlT95qibRCtayLhOqnKkIA/640?wx_fmt=png)

  

  

  

7、热敏打印机的温度检测

  

POS收银台的收据打印机、条形码/标签打印机等使用有用于打印热敏纸的热敏打印机。热敏打印机磁头温度与打印浓度呈相关关系，温度越高，浓度则越高，温度越低，浓度则越低。其根据检测的热敏磁头温度，通过改变输送至热敏磁头脉冲电流，并控制电压，从而使其保持一定的打印浓度。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyNoe19iaVCdNmFS86BsibyRsLTKfdrtbWJ28Msyp6NibfHnKr6bN9g4mrg/640?wx_fmt=png)

  

  

  

8、LCD(液晶显示器)的温度补偿

  

用于智能手机、平板等设备中的LCD(液晶显示器)液晶物质存在温度依赖性，其对比度会因环境温度而产生变化。因此需要根据环境温度调整驱动电压。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyiaOa02vvpVFcoicKOVSh3hibvm8wuAqojFahtw2JoVpNQQSiaRk5DeVzaw/640?wx_fmt=png)

  

  

  

9、晶体振荡器的温度补偿

  

在电脑等电子设备中，若要产生基准频率(时钟基准信号)，则需要使用利用晶振的晶体振荡器。晶振温度特性如下图图片曲线(红线：无温度补偿)所示，呈现以基准温度(通常为25℃)为拐点的3次曲线，振动频率偏差(纵轴)随温度发生大幅变化。而通过在低温范围与高温范围分别插入与晶振温度特性相反的补偿电路便可缩小振动频率偏差(蓝线：有温度补偿)。该补偿电路为模拟方式，低温范围与高温范围的补偿电路分别由NTC热敏电阻与电容器、电阻构成。内置温度补偿电路的晶体振荡器称为TCXO(温度补偿型晶体振荡器、Temperature Compensated Xtal Oscillator)。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyBohsU2qb7cc86G6YExy9Yl14j172gAyGn1NMvZQkEOkR1uKmBTCibyw/640?wx_fmt=png)

  

  

  

10、半导体压力传感器的温度补偿

  

家电设备、FA设备、车载设备等多使用通过MEMS(微机电系统)技术制造的压电电阻型半导体压力传感器。该传感器是对硅基板进行蚀刻加工，制作中空薄型压敏膜片，在通过压力产生应力的部分形成4个作为传感器器件的压电电阻部分(应变仪)，并将其连接成为电桥状。当膜片因气压或水压等受到应力作用时，传感器器件上将会出现电阻差，此时从电桥电路两端将其作为电气信号取出。

  

压电电阻型半导体压力传感器拥有小型、高灵敏度等特点，但传感器器件压力灵敏度会因温度而产生变化，因此需要补偿电路。下图为组合了NTC热敏电阻与固定电阻的补偿电路示例。利用热敏电阻电阻值随温度发生变化的特性，通过改变施加于半导体压力传感器上的电压实现温度补偿。除此以外还设计有其他各种补偿电路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyszlIPrBMvWldZVibTreYTMAxMVEYlduySSibzaDYXia0Ct9eYvFXHodyw/640?wx_fmt=png)

  

  

  

11、半导体热保护

  

半导体在工作过程中需要进行保护，以过高温度对其产生影响。NTC热敏电阻配置于功率模块内部基板上，以便于对安装有模块的散热板温度进行监测(图)。NTC热敏电阻端子连接在控制器的比较器上。NTC热敏电阻电阻低于设置值时，控制器会减少所有半导体的电力，从而降低封装件内的温度。

  

尤其在功率模块中使用宽带隙半导体(GaN或SiC)时，其工作温度比标准硅更高，因此有时需要变更构件的贴装方法。在标准硅的情况下，可适用焊锡及粘合剂。但在最近，由于需要在更高的温度下工作，因此，在烧结过程中需要将构件安装至DCB上(直接键合铜)，或为了进行相互连接的贴装工作而需要使用金、银或铝丝进行键合连接。

  

当达到接合部温度时需要关闭IGBT，避免因过高的高温导致其受损。该温度由包含在IGBT封装件中的NTC热敏电阻进行控制。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5Hy79UyU74MdPicR0krt69WNmW7JurRQprfibicxJveib5t9ym9z5wRjQNrxA/640?wx_fmt=png)

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源TDK官网。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。