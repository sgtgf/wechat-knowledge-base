# DC-DC电感值计算

原创 硬件笔记本 2023-12-29 07:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/n\_iLAnV5n5Hn-9BWfQpv8w](https://mp.weixin.qq.com/s/n_iLAnV5n5Hn-9BWfQpv8w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

引言：DC-DC的电感值通常我们很少计算，会直接选择手册里面推荐的值，这在通常场景下快速展开设计和选型没有问题，但是当有特别的电源需求时，就需要自己手动计算电感并选型，才能满足我们的设计指标，本节以降压DC-DC为例讲解如何计算并选择电感。

**PART**

**0****1**

  

**降压DC-DC的运转环路**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygnMfribBQ3qBHVP9220xtBReaWBfVOIYfY7x8MiceiaB8FUiaKUBMHOzLdA/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

图15-1：Q1导通时的电流环路

  

如图15-1是在降压型DC-DC中，当开关器件Q1导通时，电流从Vin通过电感L给输出平滑电容Cout充电，并提供输出电流Iout。此时电感L上流过的电流会产生磁场，以此将电能变换成磁能并储存起来。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygUBhibyibvpNT6RaD4MLibBoYmRqoEhysBeVq0u42Z1nyWRvvib8hwTPpnw/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

图15-2：Q2关断时的电流环路

  

如图15-2，当开关器件Q1关断时，续流二极管Q2导通，电感L里储存的能量向输出侧释放。在Q1导通阶段Cout已经储满电量，Q刚进入关断时，电感L反向电动势维持输出电流Iout，而后电感能量减弱，Cout就会开始参与放电维持Iout，注意看电容蓝色电流虚线。

  

**PART**

**0****2**

  

**电感的电流波形**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJyg5nZ9fbzjJoUlZwRpMsiap1ttlpDqR0IGjQcOnBcpCaYhS0iaLUu8RV6Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygfuwDib2JzoyRKfkV0qFpbrww6S4n6EhkBHAMoKGvo1fJy7jokkBZFQA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygvTKRd4XkoJvIPvg6gAtHZPtQHxVsWiapujIz7Q4EscrrBwHaDO4qbRw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图15-3：流经电感L的电流波形

  

如图15-3是流经电感L的电流波形，Iout是电感电流的平均值。图15-1里开关器件Q1导通时电感L流过的电流，Q1导通ON的时间Ton，电感L上施加的电压VL(ON)用下式来表示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJyg2lzUZ3NRJfHrXUcB3RB05k7NYiaHfvVdNgVED3zqyFMiamL1jVNU9YLA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

其中VIN：输入电压；VSW：Q1导通时的压降；VOUT：输出电压

  

本身具有电感成分的电感L的电压VL和电流IL的关系用下式表示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygEXMUXJGV0icqgl6KnRddZstooHpB7Z6GV4fzEq94iav4ertWHjmn3pCg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式(2)可以判断出给电感施加一定的电压，电压和反向电流会按照V/L的斜率增加，ILT是开关器件Q1在导通之前瞬间的电流，ILP是开关器件Q1在关断之前瞬间的电流。Ton时间段中电感流过的电流变化量可以根据公式(1)和公式(2)表示为下面公式。

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJyg7hicYTm9lBNKDGW6ATLKBT2y4NpgDCSkG3pQ3gfSMHyv4X51yjTuZsA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

接着我们来求开关器件Q1在OFF时电感L流过的电流，Q1在OFF时，电感L上应加的电压VL(OFF)根据图15-2可以表示为下面公式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygwyxstGyXZaJpQGjSZSxk0AD4eoMI8MLaD56EaeupYUfwMRFcichaV1w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

其中VD：Q2的正向压降；VOUT：输出电压

  

通过公式(2)和公式(4)，可以计算OFF时器件电感L的电流变化量

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygFpb7w8Vl4javp1YIdOZaTC2ibB0nwGz5t9sNgG2n07Yibvrl76YPZoNQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

因为电感L流过电流的电荷量与输出电流的电荷量基本相等（伏秒定律），所以下面公式成立：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygPZukjy4LS4uVvM2y0pViaEcZl3DZa04CZXckocWrP52r2bVFJmFMhWg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

用公式(3)和公式(6)可以求出ON时器件的ILP：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygMesicibZpLXw9HoCs4qWFfdic2kxnAbJSEqtWYzklTmZy8WOnlAYh2gKA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

用公式(5)和公式(6)可以求出OFF时器件的ILP，下面公式成立：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygf3HnU4533dXMDkBPYEdz4VSUGjlYuXDtGdjH3pGg4tgOKWYksLjTtw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**PART**

**0****3**

  

**On duty的计算**

  

On Duty是相对于开关振荡周期Tsw，开关器件的导通时间的比率。用下面公式表示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygib0iatd79O7TDABwQ8jJjh7ibTc5dNFVrmRQyIdBP6ZORiap7j1dS5RJEw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

从公式(7)、(8)、(9)可以求出D，如下面公式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygpxsrs8nN7RGtZz8L4ZMMl7DhFnCByQjic5SWVvQLoqI2nhOWric163Fg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

对于公式(10)，如果忽略开关器件Q1的压降VSW和二极管Q2的压降，可以得到On Duty由输入电压和输出电压的比来决定：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylEd82ZEnBDiaKVIy73icpqJygtcnP17Mja606riaqGibdxnneAqaMwoGFiawP9pUyoERLzT0PEjOMXwy5w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**PART**

**0****4**

  

**线圈电流的最大值**

  

由公式(9)和公式(10)可以算出Ton如下式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4nAMTnILzCWVsZSFT2lp36L8qcxV994Hp4mmhDfzG5ynI9icWBstGiblQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

把公式(12)代入到公式(7)，可以得到电感L的电流最大值ILP如下式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4tefHdtlzf7Yjuxco7n3LZCHDcR5iaByU0u5VacqqXkOTicOFuv33earw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

把公式(13)代入到公式(6)，可以得到电感L的电流最小值ILT如下式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4JaV9YXt2esjb1EnIxEbCTkEQ0ct4JRgmm60rx2HcwdnXOwLkerXdbg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

电流的变化量 (ILP－ILT) 如下式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI45QUiayVomCSmYmKRdI4T4p9lFKr9YpgHXad3pPCQEPeoWl2sIxG6qfQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式(13)和公式(15)可以推出最大电流和电流变化量随着电感L的增大、开关频率提高，电流值会减小。

  

**PART**

**0****5**

  

**电感值的计算**

  

流过电感L电流的变化量 (ILP－ILT) 和输出电流Iout的比是电流纹波比R

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4QkslvokNGia8usIAseET4M9xDmticJ8EciagGFE1PzH1cAhehH8lZBVhg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

把公式(15)代入到公式(16)

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI44s1x0O79E5Y7dq125tJJ4UaWqMdicK7Nicx9uWwZuIKTiaKiaBEthj3Jpg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式(17)求出的电感L值的公式如下：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4MSutF5sYE9LEMEo14TqgiaPMznPwrUu8ZQSFzkyrNUdG1GXjMKNxKZA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

当输出电压VOUT很高的时候，公式可以简化如下：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI49IicytXtcdd2mm9N2rqpyibtzu0l6xV9YJRl7Yibv84TEOQNCZyDbibrlQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

要缩小R的话，增大电感，抑制ΔIL就可以了，但是电感器变大，变得不实用，所以降压型转换器通常设定在0.2～0.5的范围内。

  

**PART**

**0****6**

  

**线圈能流过的最大电流**

  

电感能流过的最大电流可以用下式求得：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4eKsWp4l5BSl9sul9dSgicrb6s9ibicsT3iaISGiccicSNFrpuh5OMCTN8ibIw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

电感流过的电流是输出电流+纹波电流。输出短路等故障发生时，负载过渡状态中，没有软启动功能的IC在电源上升时，有时电感电流会超过上述计算的最大电流。在过渡状态下，电感电流可能会增加到IC的开关电流限制值。因此，最安全的方法不是按照大于电感电流最大值选择电感，而是选择额定饱和电流大于开关电流限制值的电感。

  

**PART**

**0****7**

  

**线圈流过的有效电流**

  

三角波的有效值如下式表示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4JCSAUUJTPQgldzat4UI6jMI6uYospt1jgibbfhwPgapD1OaQenE28yw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

把公式(13)和公式(14)代入公式(20)可以得到下列公式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4q9rwEskhHwvmNmNVl2nNGALWIXd2LHKFf3fXicoL2icTQfwSHT41ictKw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**PART**

**0****8**

  

**电感计算实例**

  

首先列出降压型转换器的动作条件

  

\- 输入电压：VIN=12V

\- 输出电压：VOUT=3.3V

\- 输出电流：Iout=2A

\- 输出电流纹波比：R=0.3

\- 开关器件 Q1 导通时的压降：VSW=0.30

\- 续流二极管Q2的正向压降：VD=0.26，同步整流的时候，按照下管开关器件Q2在导通时的压降进行计算。

\- 开关频率：fsw=380kHz

  

代入公式(18-1)和公式(18-2)，求电感的感量，由公式(18-1)得：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4icvaYzQKUzFfXSnfSyTxiaMkv0VZbGfuO3WG1b6iakA6uIGHYh0wc2HVw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式(18-2)得：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4FiafibN6ficto6xx3nFZMiaWWrfFMjL8eq7iaeZlokF0Lib9YicAhaxAzodtA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式(19)计算电感的最大电流：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4xQUEkr4PNdqAaxviadwet6oDfU0RXLnCYPPpryd1rytdeicrqyATEAWA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式(20)计算电感的额定有效电流：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4LTuRUkXzwXmJtUWl0SPz6uicLqI1I56CTk3YytxjXicZNicQfAHMzaVtQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

在设计的时候，选择满足计算值的电感，选择最接近的标准值10µH。选择的电感值和计算值有差异的时候，用公式(17)计算电流纹波值R，把这个值代入公式（19），再次计算线圈的最大电流：

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4AK1ZvCObalqs4QtCcGpKBjBQ0EJe9KxQ7n8pof2MBSG5CEHZxvf1wg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/3ibbhhytvylHzP6EiamoVgHKGWCOmzmhI4WXb39F809jAyB06snEd0gLRnJzSbJSkssUVdn6eUic8n6HQ3icKIO46A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源电子工程师笔记。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。