# EMC噪声的本质

原创 ittbank 硬件笔记本 2023-12-16 10:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/5FG6Q-\_wlGxkXsXNyDDufQ](https://mp.weixin.qq.com/s/5FG6Q-_wlGxkXsXNyDDufQ)

  

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**01**

**频谱的含义**  

频谱是将电磁波分解为正弦波分量，并按波长顺序排列的波谱，就是将具有复杂组成的东西分解（频谱分析仪）为单纯成分，并把这些成分按其特征量的大小依序排列（部分不计），横轴作为频率，纵轴作为功率或电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTMk7KibaNqZolu2YLianto5uE59Eia55dY0Nwia9LXFAUs5dEwiaYZjlgia2QrCxkBibXVt9CY8988o4N4A/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHzcfJrUxXrHdKc1SFCnbC64kiaR4xnOL3qV64Rric3JPbVpHB8PaACeNQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

图1-1：频谱的定义

从图1-1可以看到，数字波形是由多种频率叠加而形成的，示波器和频谱仪分别从两个视角获得一个数字波形的不同信息，示波器获得bit信息，频谱仪获得频谱信息或者能量信息。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHFe1oVfibRlLAxn6pjeWWzC3rHY9XWZeywSfM39sOzYdvLg9RaxfvmkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-2：示波器角度的数字波形

在图1-2表示开关信号的脉冲波形中，包括tw（脉冲宽度）和ts（上升/下降时间）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmH0OB6diazy8a2ALvhpJUb62JnicWIpEuNNeIIuFYoiaDGoREO3cYXCwPyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-3：连续化的频谱图

图1-3是基于傅里叶变换的理论上的脉冲波形频谱，这是一个连续化频谱，振幅随着频率的升高而衰减，衰减斜率随着tw和ts而变化。蓝色线表示脉冲的ts变慢后的频谱变化，斜率变为-40dB/dec 时的1/𝜋ts频率降低（向左偏移），最终结果是其后的振幅减少，即当ts延迟时频谱的振幅衰减，频谱下降。

  

**02**

**影响频谱的因素**  

  

对于信号波形的变化，频谱将以怎样的趋势变化，使用实际的频谱分析仪数据来分析频率等其他参数变化时的频谱变化。这里将通过实际的DC-DC的开关相关的频谱来分析并解决EMC问题时所需要的理论知识。图1-4中的图形是初始条件下的数据：

振幅=10V，频率=400kHz，Duty=50%，tr/tf=10ns。

中间的图表示n次谐波和振幅（V）的关系，1倍的频率＝基波，400kHz的分量最大，以奇数倍的频率形成频谱。仅产生奇次谐波是Duty为50%（＝1：1）的频谱特征，各分量的大小为基波分量的1/次数，例如3次谐波分量为1/3，n次谐波分量为1/n。

最下面的图是振幅为dBµV的对数曲线图，dBμV是基于以1µV电压为基准的电压比的dB 值（1µV＝0dBµV）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHB3jko9kOjpgicYnoagmCEvhucbAKsAXIwoDkeWcVK1rU7nELicqnwsRA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-4：初始波形

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHS0c5iaCSIaHJOcS21E4b3Cd2bltJL3Qz7icuPj0icJbiarLJ12Joniaz48Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-5：将频率提高到2MHz

图1-5是将频率提高到2MHz时的频谱，从频率--振幅（dBµV）关系图可以明确看出，当基波频率增高时，整个频谱会向右（频率高的一侧）偏移。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHiaia84dpgqC8cdZVmu8jibpFAMeVmtOgBfJrcaW543XBZExmia3sGwwxQQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-6：tr和tf的速度都减慢为100ns

图1-6是tr和tf的速度都减慢为100ns时的频谱，由于进入-40dB/dec衰减时的频率降低，因此高次谐波的频谱振幅衰减。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHibPkL8RlIDiaciaic9J9icwaRzdR0bnJCRXJtQSbDn3AECqoHuol5icBgPiaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-7：将Duty从50%变为20%

图1-7是将Duty从50%变为20%时的频谱，由于Duty不是1:1，因此会产生偶次谐波，但峰值基本上没变化，随着脉冲宽度tw变窄，基波频谱的振幅衰减。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHHWzBbsXTXGrsEdqUxDJC9dBAJb5DQdh0EveXpAbhhtNHSy5wtRsjcA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-8：仅将tr（上升时间）减慢

图1-8是仅将tr（上升时间）减慢时的频谱，tr相关的高次谐波分量因tr变慢而衰减。即仅上升速度减慢 ⇒ 上升分量相关的高次谐波衰减。总而言之，当基波频率较低且上升/下降较慢时，谐波频谱会衰减，从EMC的角度来看，也就是频谱的振幅较低时更有利。

**小结：**

高频化--->频谱整体增加

上升/下降速度减缓--->低频段衰减-40dB/dec

Duty变更--->发生偶数次高次谐波，但对频谱的峰值无影响，基波下降

仅上升速度减缓--->上升成分在低频段衰减

频率越低--->上升/下降越慢，频谱越低

  

**03**

**EMC概念定义**

  

EMC（Electromagnetic Compatibility），电磁兼容性，即不对其它设备产生电磁干扰，并且受到来自其它设备的电磁干扰时，系统运行不受影响，仍保持原有的性能。EMI（Electromagnetic Interference），电磁干扰，由于IC工作产生噪声EMI，给周边IC和系统带来干扰或者干扰性的电磁波，所以需要设计不产生EMI的电路。

EMS（Electromagnetic Susceptibility），电磁干扰敏感度或电磁敏感性，即使受到EMI影响也不会造成干扰的能力与耐受性，需要设计能承受EMI的可靠性电路。测试领域里面EMI分为两种，传导噪声（Conducted Emission）和辐射噪声（Radiated Emission）。

传导噪声是指经由线体或PCB板布线传导的噪声，辐射噪声是指排放（辐射）到环境中的噪声。对于这些噪声，EMS中分别都有耐受性要求，称为传导抵抗力（Conducted immunity）和辐射抵抗力（Radiated immunity）它们的关系如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHrEHwsI1regtTDJSgiaOttOrbrfaKibRiaZnDV2THENNOQUW2bNRWxwvdQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-9：EMC分支

**04**

**辐射机理**

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmH6T0475gl81bEFJt32iaoRgpzcqiaMhPMr8xT2adqvwUZmNzezDkd9Nicg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  

图1-10：交直流对比

处在直流状态的电信号，f=1/T，T足够长，可以理解其基频信号频率为0，那么它的各种奇次偶次谐波也是0，即没有高频信号，只会产生磁通。而处在交流状态的电信号，会产生不断变化的磁场，不断变化的磁场又会产生不断变化的电场，循环这一过程，引入位移电流的概念，就是辐射的核心机理。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHYlxOXyib0MdCOcLkZX9sbntkfcJ36e9L2V2c9uheE6sJvG7kxmwc7icQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-11：数字波形高频含量辐射

从板级的角度考虑，频率越高的噪声，波长越短，所需的辐射天线越小，就越容易辐射到空气中，这也是高速信号需要屏蔽的根据之一。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHe1cqd8yL62mhNALLibPR1g3BIref8pMnXp72uDuOSAfZcmHgCPEwouA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-12：位移电流概念

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa6b5QfktANCRQdMlpDwWxmHgicGJwJLhsSlHwVr7NFKdR0oEia1v72yBXZftQqK7HRltjvXGkcDAkxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图1-13：探测辐射的过程

对于辐射值的标准，各个领域，各个国家依据的标准都不一样，世界通用标准是CISPR，而日本：VCCI Class、美国：FCC、欧洲：EN，还有就是把CISPR作为基准来自定义设定规定值，各个标准依据电子产品的不同细分为各种子标准。

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