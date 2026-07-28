# 一篇搞定三种分立元件LDO（低成本+可调+精确输出）

原创 面向搜索 硬件笔记本 2023-11-07 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/WVpnwGswM96\_UEs3Or\_MFg](https://mp.weixin.qq.com/s/WVpnwGswM96_UEs3Or_MFg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

**前言**

LDO是大家最常见的电源芯片了吧，虽然存在效率不高的缺点，但相对于开关电源纹波更小、电路规模通常也更小，适用于低压差、小功率的应用场合。

在大多数场合我们都是用1117、7805这种IC来制作我们的电源。那我们可否在满足要求的情况下，使用分立元件来实现更低成本的LDO呢？

  

今天针对不同的应用场景，介绍三种使用分立元件搭建的LDO：

**1.低成本**

**2.输出电压可调**

**3.精确输出** 

  

原理不难，但若使电路可用，需认真设定每个元件的参数，Let’s do it

  

**仿真软件版本**

文章中的实验通过Multisim软件进行仿真，有需要的同学自取↓

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaDax09ibJviaFiazcTCarepXXAicLwGxbtZg4JvAUTqJsqPh01iaIGNJKtlw/640?wx_fmt=png)

**附上multisim 14.0 网盘链接，内附PJ方法**

https://pan.baidu.com/s/15NvcyeKIgk-COlvoDIfz0A

提取码: dsmf

  

**使用三种电路分别实现：**

1、相对于LDO芯片实现更低成本;  

2、输出电压可调；

3、随着负载加大依然可以保证精确输出。

  

**LDO电路基本原理**

在介绍电路之前，需要先说明一下LDO电路工作的基本原理**↓**

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaRzjJ5CDc4kuYkCXiaIXEiawtEQ0QVY970VNFjdWAHNVXcu44joujPhdw/640?wx_fmt=png)

电路三极管的CE承受不需要的电压，也就是Vin-Vout，将这些多余的能量以热能的形式挥发出去(**在使用LDO电路时保证封装符合散热要求**)。

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2Hbia6wcLGsmb2rMepnZyu59pdVm5Mn25cxK1jZRic6cLtcpicbOb1lZNH9Ag/640?wx_fmt=png)

利用稳压管，在三极管B与GND之间形成稳定电压，由三极管BE约0.6V的压降后形成输出电压。

  

**如何实现稳压？**

当负载存在波动，

**Vout过高，则Ube减小，三极管Uce增大，Vout减小；**

**Vout过低，Ube增大，则三极管Uce减少，Vout增高；**

如此实现稳压的目的。

  

LDO的基本原理我们知道后，下面介绍三种分立元件搭建的LDO电路！**在文章的最后我会说明各个元器件的作用与取值。**

  

**1.低成本的LDO电路**  

先贴出电路图和结果↓

**![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiangkicVbovqjlnMLVc19aiaJd1oTdc5Tia5s3zDXT997f4gA3xXyogQWkA/640?wx_fmt=png)**  

下图中 蓝色为输入15V（加入1V/50HZ 输入干扰），黄色为输出为12V。

**![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2Hbia26daaBcn4w2zQBqBG98qnbOQ5DgXtguzq6oPibbxO9a2qia7UbPRMwLg/640?wx_fmt=png)**

**通过实验我们可以看到输入的纹波经过LDO电路后被削弱了很多，这也就是LDO电路的优势！**

下面我们就来对比一下使用LDO芯片和分立元件所搭建的电路的成本↓

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2Hbiatofu06G4pKMPdpTlics1vVbQcBLS9aBHwVRacX2SZK4z6fWTx0nziaBw/640?wx_fmt=png)

输出端滤波电容C3、C2由于无论是L7805还是分立元件搭建，都要有，所以不在成本比较的范围内，L7805一枚的成本市场价在0.5-1元。

**使用分立元件搭建的LDO约0.22元，为更低成本的选择。**  

**2.输出电压可调的LDO电路**

在上文所介绍的低成本LDO电路可以满足固定输出电压条件下的应用需求，但是若我们要求输出电压可调的LDO又应该怎么实现呢？电路图如下↓

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiarBXSjlc5OQd2BRNP79BMt7jIOcHgo7lRMsFIDSlqJQudSiaHxrWSCRA/640?wx_fmt=png)

↑图中的电路即为输出电压可调的LDO电路，将稳压管替代为普通二极管IN4007（其他的普通二极管也可以），并增加了三级管Q2、电阻R3、R4用于输出电压的调节。

  

**输出电压的计算与调节原理：**

**输出电压通过R3、R4分压后，R4的对地电压等于三极管Q2基极的对地电压。 我们近似的认为Q2 BE的导通电压和D2的导通电压均为0.6V，那么R4的对地电压就固定为1.2V。**

**＝＞　Vout\*R4/（R4＋R3）＝**1.2V****　　

**＝＞　Vout＝1.2V \*（1+R3/R4）**

**下面再来看看什么决定了R３、R４的数量级。**

若输出Vout = 6V ，则Q1的基极电压Vq1b = 6.6V，则电阻R2流过的电流为（12-6.6）/ 1K = 5.4mA。

当输出电流Iout=100mA时，Q1的基极电流Iqb1 = 2mA,则由节点电流法可知Q2的C级以及E级电流为3.4mA,那么Q2基极电流应该为170uA左右，则反馈电阻R3、R4流过的电流应远远大于170uA，所以1-2mA比较合适。

则R4取值为1K。若要输出6V那么通过****Vout＝1.2V \*（1+R3／R4）****计算得知R3为4K，通过输出结果校正后当R4=1K、R3=3.65K时输出为6V，当需要调整输出端电压时通过调整R3即可。

  

**3.精确输出的LDO电路**

之前所介绍的1.低成本的LDO电路、2.输出电压可调的LDO电路都存在一个问题，那就是在负载增大时输出电压会出现下降，如下图所示↓

标准负载↓

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2Hbiax1Q8RIG9hSgwpiaQpCjeibU7HPW6DuZEn5m2ndBdgbGKQkQgyXwgFPCg/640?wx_fmt=png)

负载增大↓

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaJrNOAu848uS1oZicqXH80oml9kcNGM0iaMc3QGWYiaKic51uSXSib13icNPA/640?wx_fmt=png)

负载再增大↓  

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaWHVCvZdh4ibJG3ftRzAX1VJcKHt3Sg9ibDmj4wYPicKl7iavH6MBvYlHBQ/640?wx_fmt=png)

通过不断增加负载我们可以看到输出电压分别为**6.04V、6.00V、5.88V**，出现了一定的偏差，我们来分析一下原因↓

  

**当负载加大时LDO产生输出误差的原因**

当负载增大时，由于输出电流增大，那么三极管Q1的基极电流便会增大，则保证稳压的稳压管或者普通二极管流过的电流减小，流过不同的电流值就会导致稳压管级二极管两端的压降不同，由于参考电压产生了变化，输出产生误差则是必然！  

我们来看一下稳压管和普通二极管的工作曲线**↓**

**①稳压管工作曲线**

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2Hbia0sJmY0MZE7zIOoICs5OeXEwNfMtiber7XHiarTKSKQEW8CJlibdvBh94w/640?wx_fmt=png)

当流过稳压管的电流Iz变化时，稳压电压Uz会略微变化，这就会产生输出误差。

  

**②普通二极管工作曲线**

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaomJQdOM7S1AsNP1bT9Tn1n4dRygml1gd6jCnbibWWRXScFNvtDicgAEA/640?wx_fmt=png)

当流过二级管的正向电流变化时，正向导通电压U会变化，这也会产生输出误差。

  

**下面将介绍的****精确输出的LDO电路为了解决负载加大时的输出误差。**

使用运算放大器（射级跟随器）来作为参考源，使用运算放大器产生的参考电压误差会大大减小，精确的参考电压就保证了精确的输出电压。  

**我们先来看下效果↓**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaXLI7puicpAkvZJ1u2g4n4qibDiaV38RCxwJfxGMmqp2sM5huzG5Q3Zejg/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaLjJDU9Yu6LsqhIATEOdHFXn1E7s7GRKQTknvnaotjrxbDV6fILYW6Q/640?wx_fmt=jpeg)**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiaCXQlT0hiaQdkI4P4k67D0vXVwMxGGib6GJiaHFGRLg4jhwWPPDB5KFFmw/640?wx_fmt=jpeg)**

**在仿真中，负载变化，但是输出电压精准的保持在6V，相比于之前的LDO精度提高了很多。在仿真中如此，在实际的应用中也如此，使用此中的LDO输出精度会取得相当大的改善！**

  

**实际搭建电路时要注意的器件参数**

①首先是三极管的确定 

由于我们要求的输出电流是50mA，为留有余量，IC>=100mA；Uce max >= 15V。满足这一要求的NPN三极管有很多，我们选用multisim库中的2N2712。功率为P= 6\*0.03 = 0.18W,SOT23封装的功率为如下：

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiadrtCMMGoOQibdtibJ0EJmn3Z7E6NbY3xezTQhCwyokr9PNpzwPQNhaOA/640?wx_fmt=png)

  

**为保险起见，我们可以在实际制作时使用TO92封装三极管。**

三极管的其他参数也贴出来，符合本电路的应用要求↓

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiapAj6XfmIetyVHSyZicpJB3w3bO6ZhrFn4HSWJ6SUib8aNR4RGV1HohKQ/640?wx_fmt=png)

  

②稳压管的确定  

以本文第一个电路为例若我们要实现12V的输出，加上三极管BE电压0.6V，要求稳压管12.6V。但是没有12.6V的稳压管，那我们选13V的稳压管 1N4468。

1N4468的参数如下**↓**

![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2HbiarCib2mIz3TXUJ4QxX7RpmCibkfM0OibicCEG6LyWsGDdgukDMYmJ1rX4AQ/640?wx_fmt=png)

我们重点看IZK，也就是最小稳压电流，这里是1mA，只有在IZ大于1mA时 稳压二极管才能稳压，我们为保险起见，取2mA。   

**\=>那么原理图中的R1 = （15-13）/0.002 = 1K；**

**\=>稳压二极管的功耗 = 0.002\*13 = 0.026W;**

**\=>电阻的功耗 = (0.002+ib)\*2。ib 约为 ic/80，也就是0.6mA左右。**

**\=>则 电阻功耗= (0.003)\*2 = 0.006W;**

**功耗很小，稳压二极管的功耗和电阻封装都满足功耗要求。**

**③滤波电容的取值**  

**遵循公式↓**

**![](https://mmbiz.qpic.cn/mmbiz_png/3maxRDYwJOh02qiaN4sNeDQDrDqjm2Hbia3DvvE9bpHXicJwT33JLb7et2JphL8hiaMlz5k1RHODeJrAhW0rnD3K2g/640?wx_fmt=png)**

I 是放电电流， V 为纹波，f为频率（开关频率及负载工作频率）

这里的计算只是参考，实际搭电路的时候可以根据实际情况自行调整。

  

**④去耦电容的取值**

去耦电容C2一般取值为滤波电容的1/5-1/10，可根据实际效果进行调整。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源面向搜索。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。