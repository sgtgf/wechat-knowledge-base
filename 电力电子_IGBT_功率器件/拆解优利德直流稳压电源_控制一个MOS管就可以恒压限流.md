# 拆解优利德直流稳压电源，控制一个MOS管就可以恒压限流

原创 renshuang 硬件笔记本 2023-10-15 11:02 四川

> 原文地址: [https://mp.weixin.qq.com/s/U8254DvbP84XBxHuUrSZLQ](https://mp.weixin.qq.com/s/U8254DvbP84XBxHuUrSZLQ)

# ▼关注下方公众号了解更多▼

  

优利德UTP1306S，开关型直流稳压电源，最大输出电压32V，最大输出电流6A，电压分辨率10mV，电流分辨率1mA。支持存储三组预设电压电流，通过M1、M2、M3直接选择，可以设置过压过流保护阈值。电源输出可通过按钮控制输出关闭。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsVjC0jaVB4SR7U3Cm9mzmOJe8zhlbxCWDNoj8tKia5bCVR2FvUibBiaXeQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TszfR0XB0L6dK5mW5QdvrcZoePZd8Q0NW5iaGIZzQEaNCReicjpp1qyR1Q/640?wx_fmt=jpeg)  
  
拆开外壳6个螺丝，底下是功率板，两个变压器，小的是辅助电源的，大的是主电源输出的。一个3P插件是辅助电源给控制板供正负电压的。还有个4P是温度检测和控制信号，温度采集传感器是通过白胶粘在散热片上的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsD3SAENW6icu8I0bM2eDZExvJPZnelCQYFHicDHM3rnf24Trzk99mTEsQ/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TswFiblC7ROowiacpTibpqgqPdTIGmKfiabh8Ef2KvVerKtAL3rr0gKGLE8w/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tsr1eaSLceS0Vk1nuZrM4fEuzvDza6w4GA7dibXiamoShKicic5cEBHPOPXQ/640?wx_fmt=jpeg)  

功率板背面，只有一个主电源的Y电容，高压线路和主电源线路都有开窗上锡。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsbMiahpWWXRgLMD2sznC0fy6qS4CmRFaxOkUOqkZavM2TraMB0bhzEkQ/640?wx_fmt=jpeg)  

辅助电源芯片是DK112，芯片内置高压功率管和自供电线路，直接驱动初级绕组，不需要NMOS、不需要辅助绕组

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsDohUIvJKPuMVpAzuyOib5qwwyYqtMPU4NgEZ9VNvoianDUWgdrsY0x0g/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsgdicPuibSbsgPE0SaMvEfjyO6vYiaKkzmtr3ALwtxYviarM7FNP51mmBKQ/640?wx_fmt=jpeg)  

220V经过电源后面板的开关后进入控制板，经过X电容和共模滤波后分别接到主电源和辅助电源的两个整流桥上，主电源滤波电容为150uF/450V，辅助电源的电容小很多，10uF/400V。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsYbK7CEnkvYMcypGFWNDibDhFjeMic7PkMM9uYadF2jBFslbYHwXB9lvw/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsyW0gtWLic28gy2wzBphjR7iaoYiaiaXUZ1GA5iadyq3s3jAG4lUFE6o4ktQ/640?wx_fmt=jpeg)  

主电源芯片是EST.051，查不到资料，散热片一面固定了两个TO220封装的管子，主电源MOS为SVF12N65F，参数12A、650V。次级整流管为U1620G，16A快恢复整流管。散热片另外一面还有一个TO247封装的IRFP150M，100V 42A的NMOS管，是用来控制主电源输出的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsYf87H7DJ7xH4qc6vMRyC8jDeILBEdqtTg72FpSib24pG87YNCtuq3pw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tsficg2lSdluhEkGjjZCwXPv4HiaOsb7PL1GCjGMFnTchjY9TQFicY7rp2Q/640?wx_fmt=png)

主电源次级输出电容为1000uF/50V两个，还并了一个2.2k放电电阻，经过NMOS管之后又接了一个100uF/63V电解电容也并接了一个2.2k放电电阻

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts2VItEsiazav2m0n6zrHmYMgiao2hibPPAFqLC0XeBKE6YEjsJ3ibl4tzEA/640?wx_fmt=jpeg)  

控制板电源正极输出加了康铜丝做电流采样，电源正负极之间还有个电解电容470uF/50V，正负极对地加了Y电容CBB21。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsQrdDlPOGzyGdPrsZd0ic6TibxhSKFYicQKDDibohH1q12IMFDczgskvyUQ/640?wx_fmt=jpeg)  

拆下控制板，输出的接线柱是螺丝拧在控制板PCB上的，靠接线柱和控制板上得电源沉金焊盘接触导电，

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsktcvYR3icsPULXUQxibdpHrF8t2fribxicLw9GkaB25DjrcqVavgO3DpWQ/640?wx_fmt=jpeg)  

电流放大芯片是TI的OP07C，还有个运放是TI的TL084C，

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts70R1D2lIooEfEbLqlBGNtHytCr2aic1Z5ibib8kG3bLOwEOucAxj0xu3Q/640?wx_fmt=jpeg)  

一路DCDC芯片为XL1509-5.0，将辅助电源降至5V是用于对数码管驱动供电的

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts9QlVOoeuNNq7icibQCnR7mBRibSIA4tj0uRF86bea2xJASLeob8lQtyWQ/640?wx_fmt=jpeg)  

主控芯片是N76E003AT20，数码管驱动芯片TM1638，风扇驱动使用的D882三极管，单片机没有用DCDC输出的5V而是使用的7550线性稳压芯片的5V，是因为数码管驱动需要点亮很多LED，且快速的扫描显示，会有相对较大的电流波动，且DCDC本身的纹波电压相比线性稳压要大一些。所以需要电压电流采集的单片机要用线性稳压供电。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsAia9RFBNK51ibdRxdxBQ9r72Fy3hrp25bH9aBayY7py7rKQLHw24uqfQ/640?wx_fmt=jpeg)  

控制板前面，两个四位数码管，上面红色显示电压，下面绿色显示电流，三个LED，上面红色指示恒压状态CV，下面绿色只是恒流状态CC，中间的绿色指示锁定状态，六个按键中间都贴有LED，指示相应功能状态。两个编码器分别用于调节电压电流。焊盘是沉金的，增加与正负极接线柱导电性能。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsWEPrXwf0ZGFZoQjcZWux83XFAkYJM4jXHyAaMMJWcYwwRHs16NRmuA/640?wx_fmt=jpeg)  

功率板原理图，图中下半部分是辅助电源电路，一组次级线圈整流滤波后经过稳压管和三极管组成的线性稳压电源后为主电源的电源芯片供电，另外一组次级线圈是双电源的，正极电压通过稳压管控制光耦做反馈实现恒压输出。主电源是反激式的，电源芯片输出MOS管的驱动信号经过了一级图腾推挽提高驱动能力，栅极串入了电阻和二极管，慢开快关。次级输出整流滤波后接了一个MOS由主控板控制，这个MOS管前后的电压接到PNP三级管控制光耦反馈，当MOS管后电压低于MOS管前0.7V时三极管导通，光耦得电，控制芯片关管，导致MOS管前电压降低。所以主电源稳定状态是控制MOS管前后压差的稳定，主控板的供电地（C\_GND）是连接到主电源输出的正极（P\_VCC）的。也就是说主控板的参考地是主电源输出的正极，这样就能控制NMOS的导通。当控制控制信号电压变化时，就是NMOS管栅源极间的电压在变化， 当栅极电压变高，NMOS导通压降变小，使变压器输出电压变高，主电源输出变高，当栅极电压变低，主电源输出电压变低。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsTus8EZ1pdib5gRjjLhs7pJAGv6c811z3WBUwnCb5nUhSZPPw0GKOakw/640?wx_fmt=jpeg)  

主控板原理图，主电源输出电压是经过运放进行差分放大，放大倍数是0.142，其实是个缩小，因为单片机不能采集超过供电电压的值。经过缩小后的信号一方面使用RC低通滤波后进入单片机做采集显示处理，另一方面进入运放的反向端，运放同向端是单片机输出的PWM经过两个RC低通滤波后的电压信号，作为参考信号用于设定输出电压，当反馈的信号大于参考信号时运放输出低，当反馈信号小于参考信号时运放输出高，最终会在一个电压上，实现硬件上的闭环稳压输出控制。  

电流通过OP07进行差分放大，与电压反馈控制同理，但是运放的输出通过二极管接到NMOS驱动脚，也就是说只有在输出电流大于设定值时候，运放输出低才会关掉NMOS，实现限流功能，同时运放输出还控制一个三极管转换为5V电平，让单片机采集当前是否为限流状态，另外还有一个有单片机直接控制的三级管来拉低NMOS驱动信号，这个应该是用于面板上按钮控制输出开启关闭的，同时也作为过流保护过压保护关闭。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts9o1s5ic68HYV2Qemu96oF8FtI3EGnfK3skm883mS0gm8Z4NOFic37I5g/640?wx_fmt=jpeg)

  

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章转载面包板社区。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。