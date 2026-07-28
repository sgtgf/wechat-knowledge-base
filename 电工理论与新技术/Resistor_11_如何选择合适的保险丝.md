# Resistor-11：如何选择合适的保险丝


> 原文地址: [https://mp.weixin.qq.com/s/W2zvfzoft843tImvAw4RyA](https://mp.weixin.qq.com/s/W2zvfzoft843tImvAw4RyA)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSdWnrnnEHyFjk39wFYehiaurQc4aJ1vJECmV9qwDCOjWeueO8IEXEgIibQeVlG2cEzp4Lq3hiaH7I2w/640?wx_fmt=png)

_**_★★★_**_Resistor-11---保险丝_**_★★★_**_

引言：如果在电路中某处发生短路等异常情况而导致过电流流过时，主电源的保险丝的确烧断，则只需一根保险丝就足够了。但是，如果电路有多个分支，当电流容量小的末端发生异常时，在主电源部位可能检测不到。这难免会造成局部发热，从而导致冒烟、起火。因此在最近几年，为了保证安全，在每个电路分支中插入表面贴装型电流保险丝的例子越来越多。表面贴装型的电流保险丝根据熔断的保险丝元件，可以分成使用金属膜和使用金属线两种类型。元件使用金属膜的电流保险丝，其外形尺寸与矩形片式电阻器相同，因此可以与电阻器一起安装在电路基板上。元件为金属线制，以陶瓷为主体的元件，有些可以用于一次电路。必须根据所需的功能和特性选择适合该电路的保险丝。当前许多保险丝已经通过了国家安全标准，例如PSE和UL。

__€1._电流保险丝的功率降额/温度降额_

保险丝由于通过的电流和元件电阻所产生的焦耳热而发生熔断。假设电流为I(A)，元件的电阻为R(Ω)，时间为t(s)，则产生的热量Q(J)为：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoGsE5Fn2TE3QiaFegfXrnXKsDYb4ibu4Mg1ia9Y44uC1IiaWMVMgJWAdtJmA/640?wx_fmt=png)

这里的关键在于元件的电阻，元件使用金属，金属的电阻温度系数为3000～6000×10-6/K，随着温度升高，电阻值也逐渐增大。也就是说，温度升高后只需更短的时间或更小的电流，即可达到熔断热量。因此，如果使用温度范围高，在使用时需要根据减轻特性曲线（**_图11-1_**）对额定电流进行限制。 另外，根据脉冲、浪涌、冲击电流等电流波形的能量选择最适用的电流保险丝时，经常会使用焦耳热积分值(I2t)。 

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoGvtcoExGYN2Wm5ibwNDOtXYIbOa3TOVDSic8CeJ4TH2ibj3Wrxlv3kJOWQ/640?wx_fmt=png)

**_图11-1：额定功率-环境温度减轻曲线_**  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoGk8c0BHq8c1TbURg3FaX1DuQCeaWx1oYeCFSvOK0iao3pTkgBo3QkKxw/640?wx_fmt=png)

**_图11-2：降额曲线_**

___€2.__额定电流与熔断电流_

额定电流表示稳定施加时不发生熔断的电流值。使用中如果超过额定电流，可能会发生在不希望熔断时发生熔断的情况（回看[Resistor-9：正温度特性电阻（PTC）](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247487640&idx=1&sn=44bb834eb1e6cec2be10fba5d8274058&chksm=c3355a07f442d311f26ded3f84cbf0cd80af06595211f3927351e06a39eb87fabf43bf540e1b&scene=21#wechat_redirect)）。考虑到长期使用所造成的氧化、膨胀收缩等会使电阻值增大，有些元件的推荐使用电流为额定电流的约70%左右，这叫做稳态降额。所用电路的稳态电流可通过稳态降额系数和温度降额系数，用下式求出：

电路稳态电流≤额定电流值×稳态降额系数×温度降额系数

交流波形时，请使用峰值电流值作为稳态电流，而非电流波形的实效值。

熔断电流是指切断电路的电流。为了迅速切断电路内发生异常的电流，需设置为额定电流值的2倍以上。如果熔断时间在1秒以内，由贴装焊盘尺寸、基板材质等环境影响导致的熔断偏差较小，但是如果在1秒以上，受到的环境影响会很大，因此需要通过实际电路，事先进行确认。

使用超过额定电压会出现什么情况，额定电压是指在保险丝熔断后，即使施加在电极间也不通电的电压。使用中如果超过额定电压，会有熔断时的电弧放电造成再次通电、保险丝元件遭到破坏的危险，因此需在额定电压以下使用。

_€3.如何选择合适的保险丝_

选择保险丝的步骤有如下两个（**_图11-3_**和**_图11-4_**）：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoG7iaJVBc7NIhP47VURfvpClwlOcIXsVS1OA3WWsImWwCTT3t6O1ic16hg/640?wx_fmt=png)

**_图11-3：选型步骤1_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTOj0H682CslWSuBEEPZmoGZQ0yukFALNP76jv9Ed1OV8rtCH2Kl02A9shjsueaibfTMhXtAs2ficlg/640?wx_fmt=png)

**_图11-4：选型步骤2_**  

归纳为：

__1._确定电路的以下操作参数_  

正常工作电流Ihold

最大电路电压Vmax

最大中断电流Imax

正常工作温度（min℃/max℃）

_2.选择PPTC的因素_

表面安装装置

径向引线器件RLD  

表面安装装置

径向引线器件RLD

轴向引线装置ALD

DISC设备

其他自定义形状因子

_3.确认应用中设备周围的最高温度和最低温度在EVERFUSE@PTC的典型工作温度范围内，在大多数情况下，该温度将在-40℃至85℃之间。_  

_4.参考下面的温度降额_**_表11-1_**_，选择最接近工作温度的温度值，求出对正常Ihold施加的倍数，即可得到工作温度下的Ihold。_

比如：工作温度=50℃，Ihold=1A  

因此，Ihold(50℃)=Ihold×对应于50℃的倍数=1×0.80=0.8A  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTgEukcEq6H2CRgmUS1HScQDKebDXjoPhT7ODM4YxcID6QIIGh6KvFOxzUPZv532yYibhfPG6AKYVA/640?wx_fmt=png)

**_表11-1：参考环境温度和对应升额/降额倍数表_**

请查看每个器件各自的数据表，了解热降额效应下的详细Ihold。

_5.将PPTC器件的Vmax和I与实际电路的Vmax和I进行比较，确保电路的要求不超过器件额定值。_

_6.参考电气特性表中的最大跳闸时间，以确定设备的跳闸时间是否适合在预期故障级别保护组件。_  

跳闸时间是PPTC器件在故障状态发生时切换到高阻状态所需的时间，确定EVERFUSE PPTC的跳闸时间对达到预期的保护效果至关重要，如果选择的PPTC器件跳闸太快，可能会发生不希望的跳闸，如果设备跳闸过慢，被保护的组件可能在设备跳闸之前就被损坏并限制电流。

_7.__验证所选PPTC装置在应用中的性能和适用性。_