# 关于BUCK/BOOST电路的内容，我整理了这些干货~

原创 硬件笔记本 2024-05-11 07:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/llXuM-gjY9XPx1i1cgT1aA](https://mp.weixin.qq.com/s/llXuM-gjY9XPx1i1cgT1aA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

  

  

名词解释：

BUCK电路：降压电路（就是输出电压小于输入电压）

  

BOOST电路：升压电路（输出电压大于输入电压）

  

CCM：电感电流连续工作模式

  

DCM：电感电流不连续工作模式

  

BCM：电感电流连续工作模式（周期结束时电感电流刚好降为0）

  

看电感电流是否连续可以从每个周期的电感电流是否从0开始来判断。

  

这两种电路本质解释就是电压发生变化的电路。但是官方名称又叫单管不隔离直流变化。

  

单管：续流二极管。作用：续流。

  

不隔离：不隔离的解释就是没有隔离开。最通俗的讲解就是输入输出在同一个闭环电路中，没有变压器元器件 将它们隔离开。只有一个电感，所以肯定就是有危险的。

  

  

  

直流变换：DC-DC

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lXic1P2Lqf5c4vNz0IKuuTQibuY1O4UAvestRKPlMTlkfZrgCMszuYHCw/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

这就是最基本的BUCK电路。

  

慢慢讲解，首先是晶体管Q，图中是一个NPN的三极管，目的起的开关的作用。所以这里不局限于是三级管，MOS管也可以的，或者一个单刀双掷开关也行，但是这个开关管受电路输出的驱动脉冲控制。当Q导通的时候，我们可以看到二极管的阳极是不是与输入的Vin的负极相连，大小也就是为0，阴极接到Vin的正极，二极管是大小肯定就是Us。所以这个时候二极管是截至的。所以这时候电流就要经过电感然后流向负载端电阻（R）。电感中的电流在线性增长的同时就会发生自感。自感就又会阻碍电流的上升。所以这个时候电感L就将电能转换为了磁能储存起来了。这时候要注意自感电势的方向时左正右负。

  

这个时候电路就变成了这个样子：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lFlMEqBfWiaaCc1hXG9wM065buI5E4cmgM5EicJXTcicmC2ZuYibc96CicdQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当开关管断开时电路图：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lY8VXPz9SgkBIFEFicrOJBykib7WwKibyCLNnP5Smibs6EjYa3aWuvZnpRg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

断开时，就没有电流流向电感了。但是电感不会一瞬间降为0，而是在慢慢的减少，所以这时候就产生了左负右正的自感电势。所以这时候二极管D就导通了。电流在减少的同时，L中之前存储的磁能就转化为电能释放出来给负载R。

  

这里电容时滤波电容，目的时降低输出电压Uo的脉动。

  

之后就是不断的导通关闭导通关闭。

  

为了后续的讲解，在这里先设计一下导通时间为Ton，截止时间为Toff，那么周期就是Ts=Ton+Toff。占空比d=Ton/Ts

  

首先是在CCM工作模式下，电感足够大。

  

首先是在导通期间，这时候的电感的电压大小是Uin-Uo，电感的电流会从最小值上升到最大值（这里的最小值一定是大于0），即ILmin->ILmax。所以在导通期间电感的增量就为

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lI2otCoNbNABicGNzPGEts2Rd3nkBFgLIxJFVVf00CnVMia0xBM3MFyKQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

（插入公式没找到而且很慢）。

  

当开关管变为关闭期间，这时候电感的电压大小为-Uo。电感电流就会用即ILma’x->ILmin。减少量就为

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lDPGLnlVqILibKicwlxXuBlG2WNgF6nnNNAP1bOapW7IJz84rFwvhN0OA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当我们这个BUCK电路是一个稳定电路的话，它就会保持稳定的开关，所以在开关管导通和关闭期间电感电流的增量和减少量是一定的

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lT5ymkwoDBrfmia40sB9GOVgsCXbiaGYLsmeSMugTVVRyIuLPIdtib13Ug/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

整理之后就可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7l4jrumwD7vtQG9T57fHQm7B7LXHia8Y3IicYlRm3PVI2UCfiaFYYHJsiaAw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

根据上面可以得到，我们这个输入的电压是输入电压在乘以占空比，即开关管打开的时间/周期。而且Ton≠Ts，所以输出电压的一定是小于输入的电压。这也就是BUCK电路的原理。而且输出电压的大小是可以操控，我们若使用PWM波来驱动开关管，那就可以通过修改PWM波的占空比来修改输出电压的值。

  

在DCM的工作模式下，此模式就是电感比较小，负载比较大，或者周期Ts比较长的情况。电感电流已经降为0了，但是新的周期还没开始。所以每个新的周期电感电流都是从0开始线性增加的。

  

根据上面可以得到，我们这个输入的电压是输入电压在乘以占空比，即开关管打开的时间/周期。而且Ton≠Ts，所以输出电压的一定是小于输入的电压。这也就是BUCK电路的原理。而且输出电压的大小是可以操控，我们若使用PWM波来驱动开关管，那就可以通过修改PWM波的占空比来修改输出电压的值。

  

在DCM的工作模式下，此模式就是电感比较小，负载比较大，或者周期Ts比较长的情况。电感电流已经降为0了，但是新的周期还没开始。所以每个新的周期电感电流都是从0开始线性增加的。

  

这种模式下，电感的电流是有三种状态的：线性增加、线性减少、闲置（IL=0）

  

用图分别表示一下就是：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lFc17DjNoJG9CNwxCU2APAkoP50w8cOlPHmcdstTKPnlveGfsggp9Bg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lvgibFHyjOKMicPbEprQNMvcpbQriaY4icvUt3tbrjk4olbiaNO6dAbauqgA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7l1MiaKkbcoeRHKO1XTJy4cmPoK7GY4e7icpib2b8IUNKicBlPicibzq9KN2qw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

首先是在导通期间，这时候的电感的电压大小是Uin-Uo，电感的电流会从最小值上升到最大值（这里的最小值=0），即0->ILmax。所以在导通期间电感的增量就为

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lI2otCoNbNABicGNzPGEts2Rd3nkBFgLIxJFVVf00CnVMia0xBM3MFyKQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当开关管变为关闭期间，这时候电感的电压大小为-Uo。电感电流就会用即ILma’x->0。减少量就为

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lDPGLnlVqILibKicwlxXuBlG2WNgF6nnNNAP1bOapW7IJz84rFwvhN0OA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当在闲置状态下，也就是IL=0的时候，就相当于开路状态。

  

当我们这个BUCK电路是一个稳定电路的话，它就会保持稳定的开关，所以在开关管导通和关闭期间电感电流的增量和减少量是一定的。

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lT5ymkwoDBrfmia40sB9GOVgsCXbiaGYLsmeSMugTVVRyIuLPIdtib13Ug/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

整理之后就可以得到

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7l4jrumwD7vtQG9T57fHQm7B7LXHia8Y3IicYlRm3PVI2UCfiaFYYHJsiaAw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

DCM工作模式下会使电路带载能力降低，稳压精度变差，纹波电压大。所以通常要求BUCK电路在CCM工作模式下工作。

  

当然，也存在一种临界条件，就是当一个周期刚好结束的时候，电感的电流也刚好减小为0.这种模式称为BCM。

  

电容阻碍电压变化，通高频，阻低频，通交流，阻直流；

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lDIh0lw4eKteYPCwX3ibgrNgN6v8rbN9apt3ia0NGvtNHCwia8wPvt8ibmg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

电感阻碍电流变化，通低频，阻高频，通直流，阻交流；

  

这是最简单的BOOST升压电路。

  

首先，若很长时间没有对开关管进行控制，所有元器件是属于理想状态的。所以Uo=Uin；

  

当开关管导通时：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lGQMBGJ44hjJNKCAUszGdgIfQX5BMSbUb4enUrrahtakmHNTIGCO6CA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

此时电路应该时这样的。二极管的作用是防止电容对地放电。

  

同理导通时，电感中的电流成线性增加，电感自感阻碍电流上升，电感将电能转为了磁能存储起来。

  

当开关管关闭时：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lIlLEObs2ia2zg1rzGxQSicq2CdkGs1uFwn4jB3pDrJ4U6GAa8ic0CG5Dw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

此时电感的电流又降开始慢慢减少。由于自感的作用阻碍电流的减小，电感两端是左负右正，所以输出端的电压就成了Vo=Vin+VL。输出电压大于输入电压。

  

加一个公式 Uo=(1/（1-D）)\*Uin

  

  

  

  

buck/boost converter 升降压转换器

顾名思义，上面分别讲了buck降压电路和boost升压电路

  

接下来要讲的buck/boost converter功能就是输出电压即可以大于输入电压，也可以小于输入电压。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7lKEX90WYYo1picuFgyYcScAicR9nhIxW7VFMFeT9UtPSK4gwxpPEFy3Mw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这就是buck/boost converter最简单的电路图。

  

刚接通时，输入电流从流过电感直接到地，右端输出的话主要由电容放电来维持。

  

Uon=Uin-Uq（通常情况下忽略Uq的压降）

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7l3Iee6pibgB3cGjSxgeo2y0G6icUxdpsiaLvKs4QLtqRKQ5TtAqLq8lgJg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当开关管关闭时：

  

电感电流从地流向负载R和电容C，在流经二极管后回到电感。其过程就是L释放能量和电容充电的一个过程。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHRvhOrzctnFQeF5DECQn7l7DwXh0TvQAbLhnibaDicKqSzn7G3VedwzwPolHYa9NfaAibxciauPdlXgw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

所以Uoff=Uo-Ud（二极管的压降一般也是忽略不计的）

  

这时候我们就想问了，如何计算出输出电压是降低还是升高呢。

  

首先同样D=Ton/Ts=Ton/（Ton+Toff）

  

UonTon=UoffToff（伏秒积公式）

  

Uo=（D/（1-D））\*Uin

  

所以控制开关挂的PWM波的占空比就起了很大的作用，如果占空比大于1/2，升压。反之降压。

  

总体来说呢，写的有点乱，因为我也是边学习边写，相当于是自己的一个笔记。接下来就稍微整理一下知识点！

  

  

  

  

  

1、BUCK：降压电路，输出电压与输入电压极性相同。

  

2、BOOST电路：升压电路，输出电压与输入电压极性相同。

  

3、BUCK/BOOST：升/降压电路，输出电压与输入电压极性相反。

  

4、开关管：一般使用功率三极管或功率MOS管，由PWM波型号来控制开关管告诉开关。

  

5、电感：储能作用。

  

6、二极管：限流作用。

  

7、电容：滤波作用。

  

8、电阻：负载。

  

9、伏秒积：在开关电源稳定的状态下，电感的充放电也属于一个稳定的状态，即开关管导通期间流入电感的电流等于开关管关闭期间流过电感的电流。

  

  

  

  

版权声明：本文为CSDN博主「\_LiuChunJiang刘春江」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/weixin\_42362528/article/details/123340912

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。