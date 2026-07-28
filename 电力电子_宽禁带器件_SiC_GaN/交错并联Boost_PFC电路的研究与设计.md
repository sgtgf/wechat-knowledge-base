# 交错并联Boost PFC电路的研究与设计

原创 张 波 , 吕欣呈 SiC碳化硅MOS管及功率模块的应用 2026-04-30 10:59 广东

> 原文地址: [https://mp.weixin.qq.com/s/mAc4Y1miyfh4xLzwwm4Q3Q](https://mp.weixin.qq.com/s/mAc4Y1miyfh4xLzwwm4Q3Q)

文章来源：内蒙古科技与经济

作者：张波,吕欣呈,马文杰,王宁(苏州市职业大学智慧能源装备与电能变换协同创新中心,江苏苏州215104)  

摘要:交错并联 Boost不仅能提高 PFC电路功率等级,还能减小电路纹波,降低 EMI滤波器设计难度。文章针对传统的 Boost PFC电路的不足,用交错并联 Boost替代传统的 Boost电路来提高功率等级、提高效率。分析比较了 BoostPFC电路控制方式,优选平均电流控制模式,研制的交错并联Boost PFC电路,效率达98%以上,PF值达0.98以上。  

关键词:交错并联;SiC器件;平均电流控制;高效率

市电经二极管整流和电容滤波是很多电器和电子设备初步获得直流电的常用方式。但这种方式电流非正弦化,畸变严重,导致线路中产生大量谐波,电路功率因数下降很多,会给电网带来不少危害,必须进行功率因数校正(PFC)。无源 PFC笨重体积大,且对电流谐波抑制效果不够好,因此有源功率因数校正(APFC)技术得到了广泛的应用和研究。传统的 Boost电路实现 PFC有着不少优点,但也有一些不足。笔者从电路拓扑结构等方面入手,配合新颖的控制方式解决其不足之处。  

1.传统的 Boost PFC  

有别于采用电感、电容等无源器件进行功率因数校正,采用可控半导体器件这类有源器件进行功率数校正称为有源功率因数校正。有源功率因数校正是在二极管整流电路和负载间加入DC/DC变换器,采用相应的控制技术,强迫电流波形跟随正弦电压变化。有源功率因数校正极大地消除了电流畸变,从而获得很接近于1的功率因数,很大程度上减少了总谐波畸变(THD)。从理论上来说,任何一 种 DC/DC变换的拓扑如 Buck、Boost、Cuk、flyback等等都能用于PFC的主电路。Boost电路具有很多优点:输入电流连续;输入电感位于电流前端,输入电流易于控制,有助于功率因数提高和EMI滤波器的设计;升压变换,以在很宽的输入电压范围内工作;功率开关器件电压应力不超过输出电压,且易于驱动。因此常用 Boost电路实现电路的 PFC,如图1。PFC电路从系统结构来看,分为单级式 PFC电路和两级式 PFC电路。两级式 PFC电路前级的DC/DC电路主要实现 PFC,后级 DC/DC变换负责电路最终的输出电压、电流。单级式 PFC用一个DC/DC变换电路既实现 PFC,也负责控制最终输出的电压电流。单级式 PFC控制过于复杂,未达到人们预期,实际中用得很少。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMytuabTecrqHSI6Ofakh3UKDu8M2DKMIYMV3YQia3gw0anaXYFW0fh23aMz3xY7uATzHk0aXszeicryPEH1SQahibjcCqrMrDdiaI/640?wx_fmt=png&from=appmsg)

根据 Boost电路工作时电感电流是否连续,把Boost PFC电路分为连续导电模式(CCM)和不连续导电模式(DCM)两种。DCM方式会增加 EMI滤波器负担,电感和控制电路设计复杂,电压过零点时电流波形有较严重的畸变,只能在中小功率的情况下应用。CCM模式下,根据电流控制方式的不同,又分为峰值电流控制、滞环电流控制和平均电流控制3种。3种控制方式都是双闭环控制,外环电压控制使输出电压稳定,内环是电流控制实现PFC。以控制 Boost电路为例。3种控制方式前面部分的控制都一样。采样 Boost PFC电路的输出电压 Uout得到的电压信号与基准电压 Uref经误差放大信号得到 Vea,Vea与采样的二极管整流电压信号(正弦半波)相乘后得到电流基准信号iref。峰值电流控制采样开关管电流is,每个控制周期开始时开关管导通,is达到电流基准iref时开关管关断,电流峰值包络线为正弦波;滞环电流控制采样电感电流iL,电流基准iref与iL的差值ie达到设定的滞环下限时开关管导通,达到设定的滞环上限时开关管断开,电感电流峰谷包络线都是正弦波;平均电流控制也采样电感电流iL,电流误差放大器设计为 PI调节器,iref与iL通过此 PI调节器输出与频率固定的锯齿波比较得到控制开关管的 PWM信号。当iL\>iref时,反向积分,PI调节器输出电压变小,PWM信号占空比减少,反之占空比增加。开关动作时刻取决于积分(上一周期的)结果,所以称之为平均电流 控制。峰值电流控制时,峰值与平均值误差较多,THD较大,占空比变化较大,占空比\>0.5时会产生谐波振荡,须加入谐波补偿;滞环电流控制是变频控制,滤波器设计困难,滞环宽度对开关频率和系统性能影响大;平均电流控制效果好,是目前用得最多的 PFC控制方式。  

2.交错并联 Boost PFC电路  

单个 Boost电路功率不够高,用多个 Boost电 路并联的方式可提高其功率等级。常用的是两个Boost交错并联实现 PFC,如图2。电感 L1、开关管S1、二极管 D1、电容 C构成 Boost电路 1,电感L2、开关管 S2、二极管 D2、电容 C构成 Boost电路2,两 Boost电路共用1电容 C。两 Boost电路参数一致,工作情况一样,只是两开关管S1和S2开通时刻互差半个周期。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNO2Emb284F7O1Uq9G44ctVYicdfN1sHPOBic08MVhyQsN8QYJNrm4bicJjvcvz76O5tSQJuibibd2rVzEXQzcuORZJNH4SicSos9eAo/640?wx_fmt=png&from=appmsg)

如前所述,采用平均电流控制模式。电压采样、获得电流基准等都和传统的单通道 Boost PFC电路相同,交错并联Boost PFC电路的两路 Boost电路控制时共用一个电流基准iref,获取电流基准后各自控制是分别实现的。两 Boost电路控制部分都有各自的电流误差放大器、PWM信号比较器。两Boost电路使用相同的误差放大器和比较器。生成PWM信号时采用同幅值,同频率但初相位相差180°的锯齿波信号。Boost电路1采样电感L1的电流iL1,使用 Boost电路1的电流误 差放大器 和PWM信号比较器完成后续控制。Boost电路2采样电感 L2的电流iL2,使用 Boost电路2的电流误差放大器和 PWM信号比较器完成后续控制。控制框图如图3所示。由于锯齿波1和锯齿波2初相位相差180°,所以脉宽调制信号 PWM1和 PWM2形状相同,每个周期的起始位置相差180°。对称性的设计,两 Boost电路的电流都为输入电流的一半。电感的储能与电流的平方成正比,实现同样功率时,两路 Boost电路交错并联时单路电感体积是单独使用一个 Boost电路时电感体积的1/4。假设占空D\=0.5。并联交错的两 Boost电路一路开关管导通电感电流上升时另一路开关管断开电感电流下降,两电路参数一致时,理论上总输入电流 (iL1+iL2)纹波电流为0。占空比\>0.5时不会出现 S1和S2同时断开的情况,占空比<0.5时不会出现S1和S2同时导通的情况。占空比偏离0.5的绝对值越多电流纹波越大,但总有两路 Boost电感电流纹波抵消的部分,总输入电流纹波比单个 Boost电路减少很多。并联交错时总输出电流频率是每路 Boost变换器的2倍。因此,同样情况下,可采用更小的输出电容 C,同时也降低了对输入 EMI滤波器的要求。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPYPicXR7eY3VJkjoM9FMe8c3qoFDSwSQbuFBz8e699ibPJVbkAODDWSeuBTG8m96b5WEktaKxBYniaUWdticWwyEPNNia1IHVJ8jdk/640?wx_fmt=png&from=appmsg)

3.实验结果  

并联交错 Boost PFC电路设计指标为:输入电压85V~265V,总功率4kW,功率因数≥0.96,THD<5%,满载时本级效率≥98%。提高开关频率可减小电感电重量体积,但也会带来更大的开关损耗,设计时根据需要恰当取舍。此处开关频率设计为150kHz。功率半导体器件全都采用SiC器件。二极管采用耐压650V,额定电流16A的型号为DH16G65C6的二极管。SiC器件是新一代的宽禁带半导体器件,相比于Si器件有很多优点。MOS管选择导通电阻很小的型号为IMW65R027M1H的MOS管,其 电 压 定 额UDS\=650V,电流定额ID\=59A,通态漏源间等效电阻RDS(on)\=60mΩ,开启电压UGS(th)\=4.5V。相比于Si材料器件,SiC器件有着更高的工作频率,可实现更高的耐压和更低的功率损耗。SiC器件目前市场化的主要就是二极管和MOS管。SiCMOS管的优越性能必须要有相应的驱动电路与之配合,通常不能照搬Si材料MOS管的驱动电路,否则其优越的性能就发挥不出来。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOWGQRlkqyCZCfAZPib2PicQWWlf54IzDb3oXUxrRcQPFOKnG32RBICAAQCVPqZeCnXusHLX5fW1AwLM7KjM69P80ibOFia6gQINiaI/640?wx_fmt=png&from=appmsg)

Boost电路电感 L1(L2)和输出滤波电容 C可分别按式(1)和式(2)选取。Dmax是 Boost电路最大占空比,即输入电压最低时的占空比。iLmax是单相电感电流最大峰值,取电感的纹波调整率为0.2,fs是开关管工作频率,P0是电路总的输出功率,U0是输出电压。输入端掉电时输出电容能按原电压给负载供电的时间称为保持时间,记作thold,一般在15ms~50ms之间,这里thold取20ms。α是输出电压 保持系数,这里 α取 0.8。控制器以 DSP芯片TMS320F28035为核心。  

图4是占空比为0.5时两 MOS管漏源极上电压波形,两管子开通时刻相差半个周期。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO7nN9v1Ay8cB78S1GMj33PmgDeEG0iaRb28KsKlwuGjIq2UYcUCqeAricjItLFdIUeEwqhRKgicHvgFDicqFbquAN8QVTXcP0ugrA/640?wx_fmt=png&from=appmsg)

  
图5是占 空比为0.4时两电感上电流iL1和iL2波形,从图中可以看出两电感电流iL1和iL2的变化量ΔiL1与ΔiL2可相互抵消相当大一部分,两电感电流之和即总和 输入电流纹波减小很多,测试结果显示,满载时,输入电压在85V~265V范围内时均能实现功率因数校正,PF在0.973和0.987之间变化。输入电压为220V时,30%负载时PF值为9.961,PF值随着负载的增加而增加,满载时PF值为0.983。满载 时,Boost PFC电路本级变换效率为98.29%,10%负载时其效率为94.05%,负载越大效率越高。

4.结束语  

采用参数一致的 Boost电路交错并联工作,可极大地提高传统 PFC电路的功率等级,减少纹波,减少电重量体积,而且实现功率因数效果很好。交错并联 Boost PFC电路在功率较大的场合下有很高的应用和推广价值。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPQfibBNr0ib7ib0BRia8OzSE5Lo3gXmRYKcZrQo3F6goxh31xwW3uLScHicLXkPbAc3Et4oBr5SUhooUgHGnPqaJlrekYicWyryIuvg/640?wx_fmt=jpeg)

图片来源：网络

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOIicpBqjib3QQNavwGW7fKy1XI09M25QurGqiaTViaE7SILfXiabUCDejohGeH6N4xicAftCkrcR0H1ReY3DlyNZ2vuKKOxJLnynAI4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNI6plb3j7858xjxUshmPvhXnQFohadxN5ibAmJeCFOBvwl8qx40ibVEiaROFwTWygKLbibss2XTI4gCvz7uPx9c0u4e0FJy32ias20/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOShlumlLl4R9KfdOnic06pmbpoCjRjBIlTTaLicSiaz89R4PVqIpY4Z7NicA0vrQdxMic4tciaQv6oWGPAudibic5iacIyBGqTVFlESh8A/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNLK1SFXsPqeicysPYbPPTzoiaGWZHsZz5WhV9icm1WwXibphB2E7cpWdcrBHAmyiagNB6G72JiaRp8cSZaupiboS0ozc1XUIgh4onDf8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)