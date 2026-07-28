# 电源大师对PFC的理解

原创 硬件笔记本 2024-03-04 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/bgmmv0xHQR1xjx6ELi9qdQ](https://mp.weixin.qq.com/s/bgmmv0xHQR1xjx6ELi9qdQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**功率因数补偿：**在上世纪五十年代，已经针对具有感性负载的交流用电器具的电压和电流不同相（图1）从而引起的供电效率低下提出了改进方法（由于感性负载的电流滞后所加电压，由于电压和电流的相位不同使供电线路的负担加重导致供电线路效率下降，这就要求在感性用电器具上并联一个电容器用以调整其该用电器具的电压、电流相位特性，例如：当时要求所使用的40W日光灯必须并联一个4.75μF的电容器）。用电容器并连在感性负载，利用其电容上电流超前电压的特性用以补偿电感上电流滞后电压的特性来使总的特性接近于阻性，从而改善效率低下的方法叫功率因数补偿（交流电的功率因数可以用电源电压与负载电流两者相位角的余弦函数值cosφ表示）。

  

**图1**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgbBKbZ5XtbliatJYCCZabicpibDCSp0lHYTqlSGDLoNax6lOt14OqAxO47Sz6biaPwtibYuAyCtVcgwBQ/640?wx_fmt=png&from=appmsg)

**具有感性负载中供电线路中电压和电流的波形**

  

而在上世纪80年代起，用电器具大量的采用效率高的开关电源，由于开关电源都是在整流后用一个大容量的滤波电容，使该用电器具的负载特性呈现容性，这就造成了交流220V在对该用电器具供电时，由于滤波电容的充、放电作用，在其两端的直流电压出现略呈锯齿波的纹波。滤波电容上电压的最小值远非为零，与其最大值(纹波峰值)相差并不多。根据整流二极管的单向导电性，只有在AC线路电压瞬时值高于滤波电容上的电压时，整流二极管才会因正向偏置而导通，而当AC输入电压瞬时值低于滤波电容上的电压时，整流二极管因反向偏置而截止。也就是说，在AC线路电压的每个半周期内，只是在其峰值附近，二极管才会导通。虽然AC输入电压仍大体保持正弦波波形，但AC输入电流却呈高幅值的尖峰脉冲，如图2所示。这种严重失真的电流波形含有大量的谐波成份，引起线路功率因数严重下降。

在正半个周期内（180°），整流二极管的导通角大大的小于180°甚至只有30°-70°，由于要保证负载功率的要求，在极窄的导通角期间会产生极大的导通电流，使供电电路中的供电电流呈脉冲状态，它不仅降低了供电的效率，更为严重的是它在供电线路容量不足，或电路负载较大时会产生严重的交流电压的波形畸变（图3），并产生多次谐波，从而，干扰了其它用电器具的正常工作（这就是电磁干扰－EMI和电磁兼容－EMC问题）。

  

**图2**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfBq8dvoQkE2mhDCI5icZrv3W7MTty8jDVTmG5bZYdHd1NBgLic8Yss0gkibsdCykqMaaZWsOzKeVxOg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

自从用电器具从过去的感性负载（早期的电视机、收音机等的电源均采用电源变压器的感性器件）变成带整流及滤波电容器的容性负载后，其功率因素补偿的含义不仅是供电的电压和电流不同相位的问题，更为严重的是要解决因供电电流呈强脉冲状态而引起的电磁干扰（EMI）和电磁兼容（EMC）问题。

这就是在上世纪末发展起来的一项新技术（其背景源于开关电源的迅速发展和广泛应用）。其主要目的是解决因容性负载导致电流波形严重畸变而产生的电磁干扰(EMl)和电磁兼容(EMC)问题。所以现代的PFC技术完全不同于过去的功率因数补偿技术，它是针对非正弦电流波形畸变而采取的，迫使交流线路电流追踪电压波形瞬时变化轨迹，并使电流和电压保持同相位，使系统呈纯电阻性技术（线路电流波形校正技术），这就是PFC（功率因数校正）。

所以现代的PFC技术完成了电流波形的校正也解决了电压、电流的同相问题。

  

**图3**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfBq8dvoQkE2mhDCI5icZrv36jFX1SEzBzgkXZkTD8mib6OXZLicjBdia82wwd7ITrEd4P5nusKaWzgrA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

于以上原因，要求用电功率大于85W以上（有的资料显示大于75W）的容性负载用电器具，必须增加校正其负载特性的校正电路，使其负载特性接近于阻性（电压和电流波形同相且波形相近）。这就是现代的功率因数校正（PFC）电路。  

  

容性负载的危害

下面的图4是不用滤波电容的半波整流电路，图5是用了大容量滤波电容的半波整流电路。我们根据这两个电路来分析两电路中电流的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgbBKbZ5XtbliatJYCCZabicpn4NDIlNwKKvyNtKPd35jJT4iaxMzndiaUvSN9nuj0ic5KXgibLhGXHBgibA/640?wx_fmt=png&from=appmsg)

图4A中D是整流管，R是负载。图4B是该电路接入交流电时电路中电压、电流波形图

在(0°～180°)t0~t3时间：t0时间电压为零电流为零，在t1时间电压达到最大值电流也达到最大值，在t3时间电压为零电流为零。（二极管导通）

在（180°～360°）t3~t4:时间：二极管反偏无电压及电流。（二极管截止）在(360°～540°)t4～t6时间：t4时间电压为零电流为零，在t5时间电压达到最大值电流也达到最大值，在t6时间电压为零电流为零。（二极管导通180°）

结论：在无滤波电容的整流电路中，供电电路的电压和电流同相，二极管导通角为180°，对于供电线路来说，该电路呈现纯阻性的负载特性。

**图5**![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfBq8dvoQkE2mhDCI5icZrv3TLvlG5QvAwJJZCIlib2vWTsOZRibSJNS7Ao7upvf8uPOiamG6PAK9ej1Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

图5A中D是整流管，R是负载，C是滤波电容。图5B是该电路接入交流电时电路中电压、电流波形图。

在(0°～180°)t0～t3时间：t1时间电压为零电流为零，在t1时间电压达到最大值电流也达到最大值，因为此时对负载R供电的同时还要对电容C 进行充电，所以电流的幅度比较大。在t1时间由于对电容C进行充电，电容上电压Uc达到输入交流电的峰值，由于电容上电压不能突变，使在t1~t3期间，二极管右边电压为Uc，而左边电压在t2时间电压由峰值逐渐下降为零，t1~t3期间二极管反偏截止，此期间电流为零。（增加滤波电容C后第一个交流电的正半周，二极管的导通角为90°）

在(180°～360°)t3～t4时间：二极管反偏无电压及电流。（二极管截止）

在(360°～410°)t4～t5时间：由于在t3~t4时间二极管反偏，不对C充电，C上电压通过负载放电，电压逐渐下降（下降的幅度由C的容量及R的阻值大小决定，如果C的容量足够大，而且R的阻值也足够大，其Uc下降很缓慢。）在t4~t5期间尽管二极管左边电压在逐步上升，但是由于二极管右边的Uc放电缓慢右边的电压Uc仍旧大于左边，二极管仍旧反偏截止。

在(410°～540°)t5～t7时间：t5时间二极管左边电压上升到超过右边电压二极管导通对负载供电并对C充电，其流过二极管的电流较大，到了t6时间二极管左边电压又逐步下降，由于Uc又充电到最大值，二极管在t6~t7时间又进入反偏截止。

结论：在有滤波电容的整流电路中，供电电路的电压和电流波形完全不同，电流波形，在短时间内呈强脉冲状态，二级极管导通角小于180°（根据负载R和滤波电容C的时间常数而决定）。该电路对于供电线路来说，由于在强电流脉冲的极短期间线路上会产生较大的压降（对于内阻较大的供电线路尤为显著）使供电线路的电压波形产生畸变，强脉冲的高次谐波对其它的用电器具产生较强的干扰。

  

怎样进行功率因素校正：

功率因素校正（PFC）

我们目前用的电视机由于采用了高效的开关电源，而开关电源内部电源输入部分，无一例外的采用了二极管全波整流及滤波电路，如图6A，其电压和电流波形如图6B

**A(左) B（右）图6**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfBq8dvoQkE2mhDCI5icZrv3DSNARGTaHpPKcejogec2HTvxduZWx7I9pHkUYX0RObQXfCEcVSv3HQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

为了抑止电流波形的畸变及提高功率因数，现代的功率较大（大于85W）具有开关电源（容性负载）的用电器具，必须采用PFC措施，PFC有；有源PFC和无源PFC两种方式。

目前部分厂家不使用晶体管等有源器件组成的校正电路。一般由二极管、电阻、电容和电感等无源器件组成，向目前国内的电视机生产厂对过去设计的功率较大的电视机，在整流桥堆和滤波电容之间加一只电感（适当选取电感量），利用电感上电流不能突变的特性来平滑电容充电强脉冲的波动，改善供电线路电流波形的畸变，并且在电感上电压超前电流的特性也补偿滤波电容电流超前电压的特性，使功率因数、电磁兼容和电磁干扰得以改善，如图7。

**图7**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgbBKbZ5XtbliatJYCCZabicpXiaEicPwaibPRkE6OIe7st2GQibA6yJsbr9iaHiaAuXo5xHEC4Bt7rQWfaVA/640?wx_fmt=png&from=appmsg)

此电路虽然简单，可以在前期设计的无PFC功能的设备上，简单的增加一个合适的电感（适当的选取L和C的值），从而达到具有PFC的作用，但是这种简单的、低成本的无源PFC输出纹波较大，滤波电容两端的直流电压也较低，电流畸变的校正及功率因数补偿的能力都很差，而且L的绕制及铁芯的质量控制不好，会对图像及伴音产生严重的干扰，只能是对于前期无PFC设备使之能进入市场的临时措施。

  

有源PFC电路的原理

有源PFC则是有很好的效果，基本上可以完全的消除电流波形的畸变，而且电压和电流的相位可以控制保持一致，它可以基本上完全解决了功率因数、电磁兼容、电磁干扰的问题，但是电路非常的复杂，其基本思路是在220V整流桥堆后去掉滤波电容（以消除因电容的充电造成的电流波形畸变及相位的变化），去掉滤波电容后由一个“斩波”电路把脉动的直流变成高频（约100K）交流再经过整流滤波后，其直流电压再向常规的PWM开关稳压电源供电，其过程是；AC→DC→AC→DC。

  

有源PFC的基本原理是在开关电源的整流电路和滤波电容之间增加一个DC－DC的斩波电路图8（附加开关电源），对于供电线路来说该整流电路输出没有直接接滤波电容，所以其对于供电线路来说呈现的是纯阻性的负载，其电压和电流波形同相、相位相同。斩波电路的工作也类似于一个开关电源。所以说有源PFC开关电源就是一个双开关电源的开关电源电路，它是由斩波器（我们以后称它为：“PFC开关电源”）和稳压开关电源（我们以后称它为：“PWM开关电源”）组成的。

**图8**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgbBKbZ5XtbliatJYCCZabicpMfuJXaaYcSZXB1cuC6IyyooM0fqx0Ld4MibyAX3TwfbLwLtPicibk9Yow/640?wx_fmt=png&from=appmsg)

斩波器部分（PFC开关电源）

整流二极管整流以后不加滤波电容器，把未经滤波的脉动正半周电压作为斩波器的供电源，由于斩波器的一连串的做“开关”工作脉动的正电压被“斩”成图9的电流波形，其波形的特点是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/BY66ecdSEWuqU31GlrndmVssibXaqfWWs58ZfYrASfG2wsnSSv8UfqL1nuIecPgjRo1UpqfE4kleUpXaibcJmURg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

1、电流波形是断续的，其包络线和电压波形相同，并且包络线和电压波形相位同相。

  

2、由于斩波的作用，半波脉动的直流电变成高频（由斩波频率决定，约100KHz）“交流”电，该高频“交流”电要再次经过整流才能被后级PWM开关稳压电源使用。

  

3、从外供电总的看该用电系统做到了交流电压和交流电流同相并且电压波形和电流波形均符合正弦波形，既解决了功率因素补偿问题，也解决电磁兼容（EMC）和电磁干扰（EMI）问题。

  

该高频“交流”电在经过整流二极管整流并经过滤波变成直流电压（电源）向后级的PWM开关电源供电。该直流电压在某些资料上把它称为：B+PFC，在斩波器输出的B+PFC电压一般高于原220交流整流滤波后的+300V，其原因是选用高电压，其电感的线径小、线路压降小、滤波电容容量小，且滤波效果好，对后级PWM开关管要求低等等诸多好处。黑为电压波形 红色虚线为电流包络波形.  

**图9**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfBq8dvoQkE2mhDCI5icZrv3KBc3iblYNIibWCbyZvsWE4yfZbQNpbl4qQ8l8D8ZFRJcyOfNiaMesT7Dw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

目前PFC开关电源部分，起到开关作用的斩波管（K）有两种工作方式：  

  

1、 连续导通模式（CCM）：开关管的工作频率一定，而导通的占空比（系数）随被斩波电压的幅度变化而变化,如图10，图中T1 和 T2 的位置是：T1在被斩波电压（半个周期）的低电压区，T2在被斩波电压高电压区，T1（时间）＝T2（时间）从图中可以看到所有的开关周期时间都相等，这说明在被斩波电压的任何幅度时，斩波管的工作频率不变，从图10中可以看出；在高电压区和低电压区每个斩波周期内的占空比不同（T1和T2的时间相同，而上升脉冲的宽度不同），被斩波电压为零时（无电压），斩波频率仍然不变，所以称为连续导通模式（CCM）该种模式一般应用在250W～2000W的设备上。

**图10**

****![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfBq8dvoQkE2mhDCI5icZrv3J8j7Qib2M2Ct7FaiaNeoR5YnQJIC77OkCrSDmKjKM7Z0qIRbU31tzFFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)****

2、 不连续导通模式（DCM）：斩波开关管的工作频率随被斩波电压的大小变化（每一个开关周期内“开”“关”时间相等。如图11：T1和T2时间不同，也反映随着电压幅度的变化其斩波频率也相应变化。被斩波电压为“零”开关停止（振荡停止），所以称为不连续导通模式（DCM），即有输入电压斩波管工作，无输入电压斩波管不工作。他一般应用在250W以下的小功率设备上。

**图11**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgbBKbZ5XtbliatJYCCZabicpUf50YXVgICBaqM8UbM4jM4Zrjne0lCWhEWJOAjCFUxg1tQGzMMf6dw/640?wx_fmt=png&from=appmsg)

（3）临界导通模式（CRM）或过渡模式（TCM）：工作介于CCM和DCM之间，工作更接近DCM模式。在上一个导通周期结束后，下一个导通周期之前，电感电流将衰减为零，而且频率随着线路电压和负载的变化而变化。  

优点：廉价芯片、便于设计，没有开关的导通损耗，升压二极管的选择并非决定性的；

缺点：由于频率变化，存在潜在的EMI问题，需要一个设计精确的输入滤波器。

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