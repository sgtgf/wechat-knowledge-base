# DC-DC-21：如何选择DC-DC的开关频率-1


> 原文地址: [https://mp.weixin.qq.com/s/mCsMF2YrctN87u4Sw9DvgQ](https://mp.weixin.qq.com/s/mCsMF2YrctN87u4Sw9DvgQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7wLibmCSElOv3TyxAUE4QLybjaYCjsOl00B2YwEYpuyedHw2pWLXoqJA/640?wx_fmt=png)

____**★★★**______DC-DC-21---开关频率的选择______**★★★**____

引言：经常使用DC-DC我们会发现，DC-DC常见的开关频率的选择会有500KHZ、800KHZ、2MHZ、2.2MHZ，不同的开关频率都对应着不同的使用场景，本节从原理上简述DC-DC的开关频率到底是什么以及如何影响DC-DC性能的。

______€1._____开关频率的定义_

_![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRXS7lZouMick3KJaqncf3ubjsiajicSzB9IhvWA9cAItZmhTw9p3a22HjlAugyQM7recJEOXaaeQmTg/640?wx_fmt=png)_

**_图21-1：降压拓扑_**

如**_图21-2_**所示，对于降压型DC-DC，上管导通下管关闭，电感储能，下管导通上管关闭，电感释能。电感的储能和释能的时间之和为一个周期TS，取其倒数，即开关管的开关频率f=1/TS，也就是说开关频率衡量的是开关元件的开启时间+关断时间之和的长短，频率越低，时间越长，频率越大，时间越短。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRXS7lZouMick3KJaqncf3ubmMLIBESUdX0EEjCPUFGpM2CDib0LUF3x9qI5UKOnQJoF5oskA3RYdEA/640?wx_fmt=png)

**_图21-2：开关频率定义_**

______€2._____开关频率和电感电容_

接下来我们分别选择500KHZ、1MHZ和2MHZ来进行分析。如**_图21-3_**所示，将同一款降压DC-DC，Vin=12V，Vout=6V，设定为三个工作频率，分别为f1=2MHZ，f2=1MHZ，f3=500KHZ。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTib9T3EPwTd2icLq7AxABib2dTJOuANE3ic2jicH8ZWA0N8xeOicPic2w9JeXx2nD2VcKnQZgK28Yj9dPrQ/640?wx_fmt=png)

**_图21-3：工作频率对比_**

因为Vout均为6V，所以根据占空比降压原理，SW1，SW2，SW3的占空比均为0.5。从这一点可以看出，工作频率的不同和输出电压大小没有关系。

工作频率越高，电感纹波电流和电感纹波电压频率也越高，但是幅值会下降，对输入输出电容的容值和ESR要求会降低。

工作频率越低，电感纹波电流和电感纹波电压频率也越低，但是幅值会上升，对输入输出电容的容值和ESR要求会提高，这里不再补充后续的电压/电流波形。（详细波形回看传送门：[DC-DC-2：降压型的工作原理](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247485606&idx=1&sn=f725f35be77cc8999ac79e37bbe24b3f&chksm=c3354239f442cb2f0333a6b7caf7036d62f1b8091d16ed9b87161a61263f7a7fa0306f86cad0&scene=21#wechat_redirect)）

SW开启，电感蓄能，SW关闭，电感放能，我们将电感的一蓄一放定义为电感的一个工作步长。电感的感值大小决定电感的工作步长上限，将电感从0到蓄满的时间定义为TX，从满值到释放至0定义为TF，那么电感的极限工作步长为TX+TF（实际肯定不会接近极限工作步长，即蓄能期间不会蓄满，释能期间不会放空）。电感的感值越小，其工作步长越短，电感的感值越大，其工作步长可以越长。  

根据上面所述，DC-DC的工作频率越小，开关元件的开启时间+关断时间越长，那么对电感的工作步长要求越长，相应的就要提高电感的感值，否则就会出现电感饱和。

DC-DC的工作频率越大，开关元件的开启时间+关断时间越短，那么对电感的工作步长就不需要那么大，相应的就可以降低电感的感值，减少电感成本和体积。

根据最基本的公式：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmTlzichUnWNt39LLneQ7NKmOiae6dZ45EoHs6Owl0qnLzMVQ3icAfGReFsg6IvbhuCbQYichbHFbwtQ/640?wx_fmt=png)

虽然可以通过提高电感的感值降低纹波电流幅值，但是电感L感值越大，其工作步长越长，响应速度变慢以致于整个DC-DC的环路动态响应速度变慢，所以电感的取值不能过小也不能过大，需要合理计算：（传送门：[DC-DC-15：一文教你如何计算DC-DC的电感值](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490704&idx=1&sn=2c5beaa652ad020817696302d36a519a&chksm=c335560ff442df19d8ba455bcb180f5f2a52832feffe307a7a2cae834c2dc4b840464208a94f&scene=21#wechat_redirect)）。

小结：  

1#：在相同的工作条件和电流、电压、纹波参数下，频率从小到达所需元件尺寸和器件

值为Cin(500KHZ)＞Cin(1MHZ)＞Cin(2MHZ)，Cout(500KHZ)＞Cout(1MHZ)＞Cout(2MHZ)，L(500KHZ)＞L(1MHZ)＞L(2MHZ)。

2#：开关损耗和芯片温升。虽然开关频率的提高可以减小外围器件的尺寸，但同时也会产生更大的开关损耗。还是看**_图21-3_**，f=500Khz时，一个周期SW开关2次，相同时间段内，f=1Mhz，SW开关4次，f=2Mhz，SW开关8次。开关次数越多，MOS热损耗越大，DC-DC整体效率越低，温升也会上升，此时如果叠加外部的环境高温，DC-DC很容易触发过温保护。

______€3._____开关频率和最小导通时间_

DC-DC的最小导通和最小关断时间就是指在极限占空比状态下触及到内部开关元件的导通关断极限。

12V电池系统的乘用车通常是9V-16V，而针对24V电池系统的商用车，其范围更宽至18V-32V。实际上一般情况下都不会触及最小导通时间和最小关断时间，因为常用的降压体系是12V--->5V，24V--->5V，只有当降压比越接近于1或者越接近于0，才会触及最小导通时间和最小关断时间。以下仅仅举两个极限示例：

_上管最小导通时间_

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7tKSRFfPDps6baJgXSDYRsmiaVibS35icur02JxmBkZAyhmPu4DtpUFszQ/640?wx_fmt=png)_

**_图21-4：占空比较小的情况_**

针对上管最小导通时间，其实更多的需要考虑应用中存在一些输入输出压差很大和高开关频率的情况。例如在商用车24V电池系统中，输入电压的稳态值会高至32V，若此时开关频率也高至2. 2MHZ，假设系统需要3.3V的供电，即存在32V转3.3V，此时最小导通时间：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBicN5EfJ9eDgJicfDBfeQ8g1SMFZvXT3Nxu16JXooy4HWmniaShOmjKlKaPxUzAbh2B4wVTAVAUvQw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7B2AsW0ubPSfjVjDahFDEpwrFrslYDic2ticw2icEibVZxiburMxAicbnBDmQ/640?wx_fmt=png)

得出上管的导通时间大约为51ns，此时需要注意选用的DC-DC上管最小导通时间是否满足这个参数。

______€4._____开关频率和最小关断时间_

DC-DC的最小导通和最小关断时间就是指在极限占空比状态下触及到内部开关元件的导通关断极限。

_上管最小关断时间_

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7v9palK1jA5vSa2cZ6Lo5fXVujYeWPeY70cv8RXbSQdNuF7cZjJiaS4Q/640?wx_fmt=png)

**_图21-5：占空比较大的情况_**

针对上管最小关断时间，要将输入和输出较接近的工况考虑在内。例如在环视控制器中，有些电子控制单元给到摄像头模组的电压会是8V，而12V的电子系统的输入电压范围是9V到16V，所以当输入是9V时，开关频率依旧假定为2MHZ，此时最小关断时间：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSBicN5EfJ9eDgJicfDBfeQ8gavUicm3vzcviaqqrMhV1ZUwQ8c0sQlzRL02NShib2xhvTQ9drQtHfG6uQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7ic7byEajgbpX1sdt5jkZKOxYRlessxAtwcZsA09y1zC90D8TYE4gc5Q/640?wx_fmt=png)

得出上管的关断时间大约是55. 6ns。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7LLhnBrClwSryLkGR6U1prcGmAiaBkShMw9iaREZp2DJx3DU1LzA2RGkQ/640?wx_fmt=png)

**_图21-6：数据手册的Min on/Min off参数_**

根据**_图21-6_**所示的芯片的数据信息，我们可以得到芯片的最小关断时间的上限是60ns，所以存在触及到最小关断时间的隐患。如果小于最小关断时间，芯片会自适应降低开关频率来满足最小关断时间的要求。所以，如果想使得开关频率一直稳定不变，保证电气特性和EMI特性不发生改变，可以根据占空比公式反推出最大工作频率。将开关频率设低，避开触发到最小关断时间的情况，此例可以将工作频率设在1. 6MHZ以下。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSjoRKCEakWucsHr3J1YibF7pzxZs5D487CvHyiaSFpo3TlOIKrUTN08sNCwk5dvK0leGSD6AE1QBSg/640?wx_fmt=png)