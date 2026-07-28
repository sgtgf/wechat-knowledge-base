# 磁环选型攻略及EMC整改技巧

原创 蜗牛 硬件笔记本 2024-05-22 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/2wR2Dnj3a5cWnMe4TehBSQ](https://mp.weixin.qq.com/s/2wR2Dnj3a5cWnMe4TehBSQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是蜗牛兄。今天跟大家分享一下磁环选型及应用相关的知识，希望对你有帮助。

  

本文将从以下四个方面对磁环进行阐述。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9W5Z5UiaDnkphc4sZltjymxCbBBBl0DiaALYJd071YY9GMvyAQNWvuGyg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

  

## 一、磁环的应用场景

  

首先我们来看几张图片

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9IVL3iceoicQzCF4eDET1Ua13pAgpOGUuqYtyuvCI5aQ3yGv7fEE7VpzA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

图1 显示屏VGA线

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9EmoX4s7z8tVtn0vfkFgJXqPNZkrQj9EYCQGUUBOibIJ9R2t3IdWZ8MA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2 适配器连接线

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA99JR4CpI0jZDWicxZibnGc8gqnFgn7GDguzoDqZvnzeB4D0ickhl1GbMDg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图3 USB通信线

这三根线都是我们生活中常见的供电线或通信线，它们都有一个特点，就是连接线上都有很突出的一部分，这突出的部分是什么呢？毫无疑问这就是加的磁环。

磁环是电子产品中常用的抗干扰元件，对于高频噪声有很好的抑制作用。一般使用铁氧体材料（Mn-Zn）制成。

磁环在不同的频率下有不同的阻抗特性，一般在低频时阻抗很小，当信号频率升高时，磁环表现的阻抗急剧升高，在EMC工程设计中，磁环作用显著而被广泛适用。

  

## 二、磁环的工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSFG4613hbH5W35KISggZiaephnkhj625hULosIiaiblrl6OEDibj4n9ibKFA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图4 磁环等效电路

如图4，磁环在应用中的等效电路。L为等效电感，R为线缆的等效直流阻抗，C为绕线之间产生的分布电容，这个分布电容要特别注意，它会降低高频滤波性能。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSeKdClcgup3FTRKzTibqHaibbmEOHXNSIFlz9NdnFy90sxPADVhDAUVPA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图5 磁环的阻抗曲线

  

如图5，磁环在未饱和的情况下，信号频率越高，其对应的阻抗越高，当频率超过谐振点时，阻抗会呈现下降趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSkkW4eqq8z0liataLXgLJJ39lfZ2DgkFyW7ke5Gp80y1bGPZ6yPiaezlw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图6 EMC整改常用的扣式磁环

扣式磁环与铁氧体的最大区别在于它具有很大的损耗，用这种扣式磁环制作的电感，其特性更接近电阻。它是一个电阻值随着频率增加而增加的电阻，当高频信号通过铁氧体磁环时，电磁能量以热的形式耗散掉。

  

## 三、磁环的分类

**(1)铁氧体磁环**

一般锰锌环涂绿色。

铁氧体磁环主要包括镍锌铁氧体磁环和锰锌铁氧体磁环，按磁导率分类：

镍锌铁氧体磁导率在100-1000之间，被称为低导磁环。

锰锌铁氧体磁环材料的磁导率一般在1000以上，被称为高导磁环。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjCzvibeGvmFQbSJcu2lpsHSL50VPXn3FJerVyREibDEda0j6L6D9xOtpHwozNGryIIeItpmAdRHzsw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图7 锰锌铁氧体高导率磁环

  

镍锌铁氧体磁环一般用于各种线材，电路板端，电脑设备中抗干扰；

  

锰锌铁氧体磁环，磁导率很大，这种磁环，通常用来绕制共模电感，抑制电源接口低频共模传导干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9g8g2lGFrrb8hsVutf3PHOcbFl9wYFFyLN8p4SV6ib6A8p6ko9iaty2lg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图8 共模电感

一般共模电感抑制频段在500K-30M之间，滤波频段要比铁粉芯差模电感高。

通常情况下，材料磁导率越低，适用的频率范围越宽；材料磁导率越高，适用的频率范围越窄。

  

**(2)铁粉芯磁环**

铁粉芯环用两色来区分材质，常用有-2(红/透明)、-8(黄/红)、-18(绿/红)、-26(黄/白)及-52(绿/蓝)        

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXRLNnTAoMEfcAtzlV1RNUFia61rU52czQtAnxDxo5ZqXB0y3ZpaUI5X3vE1wfy3rToS2P8wSoo7A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图9 铁粉芯磁环

  

铁粉芯磁环是由碳基铁磁粉及树脂碳基铁磁粉构成，磁导率很低。磁粉和绝缘材料之间有气隙，一般磁导率在20-100之间。正因为铁粉芯磁环磁导率很低，在差模大电流情况下不容易饱和，所以，常使用铁粉芯磁环绕制差模电感。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9XHln6KtrlgtqCNcGg44S8viatdsYk8icLAHtpZbZcNVicvWDFQjoOQyvA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图10 差模电感

  

**铁粉芯差模电感，滤波频段很低，几十几百 KHz，抑制电源线传导差模干扰。**

铁粉芯主要应用于电器回路中解决电磁兼容性（EMC）问题。实际应用时，根据不同波段下对滤波要求不同会添加各种不同的其它物质。

  

**(3)铁硅铝磁环**

铁硅铝一般全黑。

铁硅铝磁环是使用率较高的磁环之一，简单来说，铁硅铝是由铝-硅-铁组成，拥有相当高的Bmax(Bmax是在磁芯截面积上的平均最大磁通密度。)，它的磁芯损耗远低于铁粉芯及高磁通，有低磁致伸缩（低噪音），是低成本的储能材料，无热老化，可以用于替代铁粉芯，在高温下性能非常稳定。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9yRLuBbcM7tH4vjjjkSY3KYiawlCicQSCIpMoRk1ibgGsx9VicQsuQr7urw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图11 铁硅铝磁环

  

铁硅铝最主要的特点是比起铁粉芯损耗低，具有良好的DC偏流特性。价格不是最高，也不是最低，相较于铁粉芯和铁镍钼之间。

铁硅铝磁粉芯具有优异的磁性能，功率损耗小，磁通密度高，在-55C~+125C温度范围内使用时，具有耐温、耐湿、抗振等高可靠性；

同时，60~160的宽磁导率范围可供选择。是开关电源输出扼流圈、PFC电感及谐振电感的最佳选择，具有较高的性价比。

  

**(4)非晶磁环**

非晶磁环是个新产品，目前逐渐在普及。

非晶磁环，一般白色和黑色居多。它有一个显著特征:外壳是塑料外壳。所以也很容易判断，因为非晶磁环是绕带的，必须用塑料外壳包裹保护，否则都成碎渣渣了。

相比锰锌铁氧体磁环，非晶磁环磁导率更高，通常10多K甚至几百K，磁导率非常大。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9BPicbsIf8G6RmaVSp48Bw0ibCDSqPlzWkL1z5zFcZqR0WyCwLH6yBmsg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图12 非晶磁环

非晶磁环通常用来绕制共模电感，抑制低频传导干扰，相比锰锌铁氧体，非晶磁环虽然贵，但是磁导率大，电感的个头就可以做的比较小，另外，滤波效果也要比锰锌好。

据说可以滤除到几十MHz，已经接近锰锌铁氧体磁环了。所以现在滤波器里面，也在使用非晶磁环做共模电感了！

  

## 四、EMC加磁环整改技巧

  

硬件笔记本  

  

  

  

  

  

1、外观选择“尽量长、尽量厚、内径尽量小”的磁环。即磁环越长越好,孔径和所穿过的电缆结合越紧密越好。但在有直流或交流偏置的情况下，还存在铁氧体饱和的问题，抑制元件的横截面积越大，越不易饱和。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9vne7rtWKLT4MuUYQriczc0kHYxUvq4PUjNxOicWQFjdFFWcWuAyneSgA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图13 不同内径大小的磁环**

  

硬件笔记本  

  

  

  

  

  

2、磁环对电磁波有条件反射的作用，从而减少了信号传送的失真。磁环套用的位置尽量靠近源头的一端（电缆线的进出口），会更加有效的抑制电磁辐射。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9CmG4xtVcqPeBRnLOUIJTJFFn4CmaKstfIgmcTzpSPRHuicFhR3m4hPA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图14 磁环套在源端**

  

硬件笔记本  

  

  

  

  

  

3、在抑制高频干扰时,宜选用镍锌铁氧体,抑制低频干扰时用锰锌铁氧体。因为锰锌铁氧体的磁导率在几千至上万,而镍锌铁氧体为几百至上千,磁环铁氧体的磁导率越高,其低频时的阻抗越大,高频时的阻抗越小。

  

硬件笔记本  

  

  

  

  

  

4、怎样避免磁环饱和？当穿过铁氧体的导线中流过较大的电流时，易造成饱和，降低元件的性能。要避免这样情况，可将电源的两根线（正负）同时穿过一个磁环。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9sibyTFF3Cdib0WmBEaJXiaBUNMnGMf89R7ibeSliboLBldicVCAHKuXG8Qkw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图15 电源的两根线（正负）同时穿过一个磁环**

硬件笔记本

  

  

  

  

  

5、低频干扰时，建议线缆绕2—3匝，一方面可提高穿过环的面积，增加等效吸收长度，另一方面充分利用磁环具有磁滞特点,改善低频特性。               高频干扰时，不能绕匝（因为实际磁环上存在寄生电容,这个寄生电容与电感并联,但遇到高频干扰信号时,这个寄生电容将磁环的电感短路失去作用。）这时可选用长一点的磁环。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9PEp0qsJiarHE8ZdlFjJHlKOmo4zCXicqpQ2f0WBEdBSa8RHjuN3U8f7Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图16 磁环绕匝**

  

硬件笔记本

  

  

  

  

  

6、匝数绕制小技巧：理论上匝数越多抑制低频干扰效果越好,但是由于寄生电容增加，抑制高频噪声作用较弱（盲目增加匝数来增加衰减量是一个常见的错误）。                                                  实际应用中，需要根据信号干扰频率来调整匝数。当干扰频率的频带较宽，可在电缆上套两个磁环,每个磁环绕不同的匝数,这样可以同时抑制高频干扰和低频干扰。也可同时套上镍锌和锰锌铁氧体，这样抑制的干扰频段较宽。

  

硬件笔记本

  

  

  

  

  

7、磁环易碎，因此在安装的过程中需要进行良好的固定，避免运输过程中的碰撞而导致磁环破裂，我们一般用扎带固定。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgj9YLyfIl7vGTckLiaUBYA9jeklNYUiazgFqbs9ibggEgcLEEmQ0EBv916JoC9FSkf5yDCstibibRWicNw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图17 扎带固定（然后将磁环固定在设备上）**

  

最后，磁环只是EMC整改中常用的元件，用来查找问题所在，在必要时才使用。尽量在设计时加电容电感，从源头将干扰消除。什么都不用加最好。

**给大家推荐一份经典的EMC资料，****《郑军琦EMC(电磁兼容)设计与测试案例分析》****，****后台回复‘EMC’,即可获取PDF****文****档下载链接。**

今天的分享就到这里，希望对你有帮助。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章为原创内容，转载请注明出处，谢谢。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。