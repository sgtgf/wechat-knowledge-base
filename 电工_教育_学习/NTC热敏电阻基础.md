# NTC热敏电阻基础

原创 硬件笔记本 2024-02-29 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/yS76DnWeTRrZA1t\_HqE7qg](https://mp.weixin.qq.com/s/yS76DnWeTRrZA1t_HqE7qg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

## 

01

什么是NTC热敏电阻、原理及作用

  

  

**什么是NTC热敏电阻？**

  

NTC热敏电阻是以Negative Temperature Coefficient的首字母缩写命名的热敏电阻。通常，“热敏电阻”一词指代的就是NTC热敏电阻。1833年，当时正在研究硫化银半导体的迈克尔·法拉第将其发现，塞缪尔·鲁本于20世纪30年代实现其商业化。NTC热敏电阻是一种由锰（Mn）、镍（Ni）和钴（Co）组成的氧化物半导体陶瓷。

它在我们的生活中随处可见。由于阻值随温度的升高而降低的特性，它不仅被用作温度计、空调中的温度感应装置，抑或是智能手机、热水壶及熨斗中的温度控制装置，还被用于电源设备中的电流控制。最近，随着车辆电动化程度的提高，热敏电阻也越来越多地被用于车载产品。

  

  

## 

**工作原理**

  

通常，金属的阻值随着温度的升高而增加。这是由于，热加剧了晶格振动，自由电子的平均移动速度随之降低。

与之相对，半导体中自由电子和空穴由于热的传导而增加，该部分的比例大于速度减小的部分的比例，故电阻值减小。

此外，由于半导体内能带间隙的存在，当被外部加热时，价带中的电子移动到导带上并进行导电。也就是说，电阻值会随着温度的升高而降低。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQAQLaQTXMdjw8aQc5Bl76hlEZ24Ba3uybEfP0nibhbOarYNtFUT6cP6A/640?wx_fmt=png&from=appmsg)

图1 : 半导体的导电性

  

## 

**用途**

  

负温度系数（NTC）热敏电阻随温度变化，电阻值会产生3～5%/°C的变化。它经常作为一般的温度传感器用于电子设备中。

例，智能手机。  
在使用智能手机时，您有“手机怎么变热了”这样的经历么?  
可以说薄且高功能的智能手机就是一台小型电脑。但由于手机没有安装电脑的散热风扇等，因此机身会变热。所以，对热很敏感的精密元件可能会有损坏的危险。

在此，负温度系数（NTC）热敏电阻登场！  
运用负温度系数（NTC）热敏电阻测量智能手机内部的温度，再使用这一温度信息对温度进行各种控制。

  

  

02

NTC热敏电阻基本特性

  

  

**电阻-温度特性（R-T特性）**  

  

NTC热敏电阻的电阻值是在有足够低的自热（由于施加的电流而产生的热）的电流下测量的。作为标准，建议使用最大工作电流。  
并且，电阻值需要与温度成对表示。

特性曲线由以下公式描述。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icKia8kBkJ8hd2WOuibCd5S6xbQHBQJARuZOwMIgEqaE102a3fNBZs2aAFDkWoI6Fk8iaxP9icklRpotRg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQMqfsRicUIgqn13g0qwOGg1egjXnyHMXgC9HDvy7FibgdRMqQUicSMgXuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQ3FN2Gt5a1pzpOTOe4ycAc1Rh6OSwhbw193IXIR1Ix6UgIZTgS6zYjQ/640?wx_fmt=png&from=appmsg)

图1 : NTC热敏电阻的R-T特性

  

  

## **B常数**

B常数是表征NTC热敏电阻的单个值。B常数的调节总是需要两点。B常数描述了两个点的斜率。  
如果选择的两点不同，B常数也会不同，所以比较时请注意。（见图2）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQH4MiaLqG6Hd0R1HrSeyG8sAXcgdwStMnF5TxhicUtZibKy1BnkDeiatbkg/640?wx_fmt=png&from=appmsg)

图2 : 2点选择的不同B常数

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icKia8kBkJ8hd2WOuibCd5S6xbyCA2ibUSdZu4pGgHcTtxsiaDmiaSG6TlYIVetL3ElEicfWXkVzlnenzESQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQhD2MtIBFYk7JIbn1zUSSl4uFVwtdHfeEn3WhpwWSRYEhIVQHmgFakA/640?wx_fmt=png&from=appmsg)

将上式（参考电阻 − 温度特性）变形后

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQLj4RYSP4VqAPTsZu3sMKRCZsNtftvXzxGPLib9YtkcOqH90ibVuCgq7A/640?wx_fmt=png&from=appmsg)

  

如图3所示，1/T（T为绝对温度）与阻值成对数比例关系。可以看出，该关系近似于直线。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQGBgqoTjJZiaVTwJBt0FDibT9zaFX1ejh5y9nXX7E6LA3xicKibab7N5yJQ/640?wx_fmt=png&from=appmsg)

图3 : 横轴为1/T的温度特性

**伏安特性（V-I特性）**

NTC热敏电阻的V-I特性如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQsDqxX7KtZPvXRam15MFRzqcXM1D4KOicicm5ZZRMMEH5KGaib2g268h0Q/640?wx_fmt=png&from=appmsg)

图4 : NTC热敏电阻的V-I特性

  

在电流较小的区域中，随着电流的逐渐上升，欧姆接触的电压也逐渐上升。通过从热敏电阻表面和其它部位散热，电流流经造成的自发热不会造成电阻温度的升高。  
然而，当发热量较大时，热敏电阻自身的温度上升，电阻值减小。在这样的区域中，电流与电压之间的比例关系不再成立。

通常，在自发热尽可能低的区域范围内使用热敏电阻。作为标准，建议工作电流保持在最大工作电流以下。

在超过电压顶点的区域中使用，可能会导致重复发热和电阻值降低等热失控反应，造成热敏电阻发红、破损，请避免在该范围使用。

  

**电阻温度系数（α）**

NTC热敏电阻在单位温度下的变化率为温度系数，由以下公式计算。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQsn0ZthuZ3M5TibxGTRjAChdkkPEbPwswFoBBmIy246o69zmvKWYBf1Q/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQnvsH2egx3iafYibjEBLxar1KrYBbFMBwiceoyC6cCMYsDIBK9HhAxCRBg/640?wx_fmt=png&from=appmsg)

Ex）靠近50°C，B常数为3380K时

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icKia8kBkJ8hd2WOuibCd5S6xb1GeibnCzLguYibXYesXmm8Pw74ZpLsATWfxdS554ibRVE4Mnz8gPMQ3NQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

由此，电阻温度系数由下所示。

![](https://mmbiz.qpic.cn/mmbiz_png/wOjke8xO2icKia8kBkJ8hd2WOuibCd5S6xbG7wZ2lyiaeSsja9H8Z51OaEZ01FF6LLMFKQz1jqHq5pbWzibaU47eSsw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQeBQyxw0b09hFsR9k7Z93ibHHQHXiaicXKt8qXHPtbzAwHKibMJLAG0yezw/640?wx_fmt=png&from=appmsg)

**热耗散常数（δ）**

环境温度为T1的情况下，当热敏电阻消耗电功率P（mw）后其温度变为T2，则以下的公式成立。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQ9vw9EicfjkwNDe0aAUufjA0iaQHZt1j6GRlxicFVib0P3810kuj2yBznjg/640?wx_fmt=png&from=appmsg)

热耗散常数δ是指在自发热条件下提高1°C温度所需的功率。  
热耗散常数δ由“功耗导致的自热”和“散热”之间的平衡来决定，因此根据热敏电阻工作环境的不同而变化显著。  
Murata定义了“单位元件的热耗散常数”这一概念。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQh3TfM9TaPJB4514XWgHyOiclhqTYUVNLXbuQn8cFX1WtRzjmnszvV6w/640?wx_fmt=png&from=appmsg)

图5 : 贴片NTC热敏电阻的散热状态**热时间常数（τ）**

  

当一个保持在温度T0的热敏电阻突然被改变到环境温度T1时，它改变到目标温度T1所需的时间被称为热时间常数（τ）。通常，该值是指达到T0和T1之间温差的63.2%所需的时间。

  

当保持在一个温度（T0）的热敏电阻暴露在另一个温度（T1）时，温度是呈指数变化的，经过时间（t）时的温度（T）表示如下。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQVTnCS3jlWNJPrqkWOX52kJHQRXNGwDvHQmZ7tCRefbGDBCWs2bRwTA/640?wx_fmt=png&from=appmsg)

  

这就是为什么τ被规定为达到63.2%温差的时间。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQoJcRPiaMyZq0apC6dX81FZfApOQWmdtgJrVDezaqLQlTUglYATBAD0w/640?wx_fmt=png&from=appmsg)

图6 : NTC热敏电阻的热时间常数  
  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQic0YcCwiagZZXSbpVrf5KueqVaZYohWcGu6VPEZdCKfCg63TnzLU4gbA/640?wx_fmt=png&from=appmsg)

  

**最大电压（Vmax）**

可直接施加到热敏电阻的最大电压。当施加的电压超过最大电压时会造成产品性能恶化甚至毁坏。  
此外，由于自发热，元件的温度上升。需要注意元件的温度不能超过工作温度范围。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQd3uRD4kofUDbV4bBqMr8U5dhOLyI9YICyJYrHSPdtDaErEzHZqKAtg/640?wx_fmt=png&from=appmsg)

图7 : NCU15型最大电压降额

## 

## 

## **最大工作电流（Iop）、最大工作电压（Vop）**

Murata将最大工作电流、最大工作电压定义为施加时自发热为0.1℃的电流和电压。参考该值，热敏电阻能够实现更准确的测温。

故施加电流 /电压超过最大工作电流 / 电压时并不会造成热敏电阻的性能退化。但请注意元件的自发热会带来检测上的误差。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQtvqEaaZSbuGAW8bZEeve7fknJQuT66Kwnh26DicicLhjm0KhUBj6FdXg/640?wx_fmt=png&from=appmsg)

图8 : 散热差异导致的最大工作电流 / 电压的变化

### 如何计算最大工作电流

-   计算最大工作电流时，需要使用单位元件定义的热耗散常数（1mW/°C）。热耗散常数表示散热的程度，但散热状态随工作环境的不同有较大的差异。
    
-   其中工作环境包括基板的材料，厚度，结构，焊接区域尺寸，热板接触，树脂封装等。单位元件定义的使用，排除了环境的干扰因素。
    
-   而根据经验来看，实际使用中的热耗散常数约为单位元件的3～4倍。假设，实际的热耗散常数为3.5倍，那么最大工作电流如图中蓝色曲线所示。与1mW/°C的情况相比，现在是1.9倍（√3.5倍）。
    

##   

##   

## **零负载电阻值**

在自发热可忽略不计的电流（电压）下测量的电阻值。作为标准，建议使用最大工作电流。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQMkB2mZLN7bgQGmXOj0yRuLuo3U75tujH2JcYLE76ic6Vwo9EZ36xBjw/640?wx_fmt=png&from=appmsg)

图9 : Murata的电阻值测量方法

#   

  

03

NTC热敏电阻测温回路

  

  

  

# **电路图**  

输出电压可能因NTC热敏电阻接线图而异。  
可在以下URL中进行模拟。

SimSurfing : NTC Thermistor Simulator（murata.co.jp）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQfDW6iaxFAiaASibs8BhrPYCveP7kbrAD8YPibqVaz9gkUQ9S3Evzk2ryRQ/640?wx_fmt=png&from=appmsg)

图1 : 电阻接地和热敏电阻接地电路的输出特性  

##   

## 

## **R1（分压电阻）、R2（并联电阻）、R3（串联电阻）的调整**

输出电压可根据线路图而变化。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQuTaOpjSe5qc38NrId2G276ibmAGvj0zneld05XSZkkNWEsqvYmvANLw/640?wx_fmt=png&from=appmsg)

  

图2 : R值的调整和输出特性的变化

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源Murata。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。