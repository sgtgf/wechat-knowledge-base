# 高频SiC MOSFET单相逆变器调制策略研究


> 原文地址: [https://mp.weixin.qq.com/s/ZVjbO409eLZgcOQA8bhO2w](https://mp.weixin.qq.com/s/ZVjbO409eLZgcOQA8bhO2w)

文章来源：电力电子技术

作者：杨勇，郭小强，张纯江

摘 要：逆变器高频运行时，开关损耗和死区影响问题更加突出。如何减小高频开关损耗，同时消除死区的影响是逆变器高频运行需要解决的关键问题。本文以高频SiC单相逆变器为研究对象，针对传统双极性调制存在的问题，设计了一种改进调制策略，利用SiC开关器件并联二极管的续流特性，在半个工频周期内将2个开关一直处于关闭状态，不仅减小了高频开关损耗，而且避免了桥臂直通的风险，无需加入死区，消除了死区引起的负面影响，最后搭建了高频SiC逆变器进行了实验研究，结果验证了设计方案的有效性。

关键词：单相逆变器; 调制策略；高频开关；碳化硅器件

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5E0DjO5YusOj7lALDFqxibhFmAmpO0jfkdCnRToPic3g1mMyttyKYKTzw/640?wx_fmt=jpeg&from=appmsg)

1、引言

随着宽禁带半导体技术的飞速发展，高频电力电子功率变换技术得到了国内外工业界和学术界的广泛关注，应用前景广阔。对于单相逆变器而言，系统高频运行时，开关损耗和死区影响问题更加突出。如何减小高频开关损耗，同时消除死区的影响是逆变器高频运行需要解决的关键问题。实际应用中，开关器件开通或者关断都需要一定的时间。为了避免桥臂开关器件同时导通造成短路过流，必须加入死区时间。然而加入死区会产生死区效应，导致输出电压出现低次谐波畸变，直流电压利用率降低等问题。文献\[3\]通过调节扰动观测器得出扰动电压来获得死区补偿时间。文献\[4\]提出基于模糊控制零电流钳位逆变器死区补偿方法。值得注意的是，上述方法未只考虑了减小死区的影响，而对于高频SiC逆变器而言，不仅要减小死区影响，而且要减小开关损耗。为了解决该问题，本文设计了一种改进的控制方法，在减小开关损耗的同时避免了死区引起的负面影响，最后进行了验证。

2．系统工作原理

图1为单相逆变器原理图，其中SiCMOSFET型号为C2M0080120D，系统输出采用LC滤波结构。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5icsBJF8O0N9u6aGRdSSeRoBgZkt3usvZ7wAmHaJ4bvdx1d82HDAErSQ/640?wx_fmt=jpeg&from=appmsg)

图1 单相逆变器原理图

Fig.1 Schematic ofsingle-phase inverter

系统调制策略如图2所示，调制波与载波进行比较，产生双极性PWM驱动四个SiC开关，S1和S2互补导通，S3和S4互补导通。根据图2可知，当电路工作模式改变一次，开关器件切换4次，开关损耗较大，不利于效率的提升。由于开关器件高频切换，为了避免直通，通常在同一桥臂的驱动信号中加入死区时间，导致输出电压中含有低次谐波，造成输出电压和电流畸变等问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5M7Aqa9pOYibEzvvqcHBY2333wuYuibjruic5ZSvR1GjvZc3x7IJraMKag/640?wx_fmt=jpeg&from=appmsg)

图2 传统调制方案

Fig. 2Conventional modulation solution

以图3和图4中蓝色虚线框所示的桥臂为例，由于死区的加入，开关管S1和S2在死区时间内同时关断，此时，由于电感电感电流不能突变，仍会保持上一时刻的状态，当电感电流IL>0, 如图3所示，输出电流由S2的反并联二极管续流，桥臂A点电压被管钳位至0 ,其小于实际的电压，进而会造成输出电压UAB小于理论值。当电感电流IL <0时，如图4所示，此时输出电流经S1的体二极管续流，桥臂A点电压被管钳位至直流母线电压Vdc，其大于实际的电压，进而会造成输出电压UAB大于理论值。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5KS4ibj1S2rddB8UDAOL11rCnQicIpfCna3M5lcvZJ5kW7UsUKbu84ZkQ/640?wx_fmt=jpeg&from=appmsg)

图3 加入死区后的工作状态(IL >0)

Fig. 3 Operation state considering dead time (IL >0)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5xWdxCJibY9rgdwyuYMibicyicurDhs4fkuvOebRVuokN3kyv7ocTavUFDw/640?wx_fmt=jpeg&from=appmsg)

图4 加入死区后的工作状态(IL <0)

Fig. 4 Operation state considering dead time (IL<0)

值得注意的是，开关器件存在等效并联寄生电容，电容两端电压不能突变，当IL <0时，此时若S2关断，开关S2的并联等效电容C2将通过电感电流IL充电，开关S1的并联等效电容C1通过电感电流放电。类似地，当IL>0时，S1关断，C2通过电感电流放电。该过程持续时间相对于整个开关周期来说很短，可近似认为充放电电流保持恒定，设i1和i2分别为输出电压上升和下降时的电感电流值，桥臂输出电压的自然上升时间t1和下降时间t2分别为:

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5OZhJeicbwncNIRRic32wETHPJiatGJuMJkcAcf9JE6Ljtaq6viceOY0QfA/640?wx_fmt=jpeg&from=appmsg)(1)

以电压上升过程为例，当上升时间t小于死区时间td，即当上升过程完成时，开关器件仍未导通，此时，桥臂电压自然地上升至直流母线电压Vdc，如果上升时间大于死区时间，死区时间结束之后开关S1立刻导通，输出电压将会被拉高到直流母线电压。所以桥臂输出电压的波形会受到死区时间的影响。

为了解决上述问题，本文设计了一种改进的方案，如图5所示。和图2调制方案不同，当电路工作模式改变时，开关器件切换次数由4次减小为2次，减小了开关损耗。同时不存在桥臂直通的风险，无需加入死区，消除了死区引起的负面影响。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5TiaOW7AibPU5WmScxIzgibxvhfjdS06iaTKtlh5dfjwu7U08icyibwM31tpw/640?wx_fmt=jpeg&from=appmsg)

图5 改进调制方案

Fig.5 Improved modulation solution

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5IWuoC2xuibGdVzfexU5r3jquCZxlBMMZ7acrAAWpfpCCSdkjO4icUOTQ/640?wx_fmt=jpeg&from=appmsg)

图6 上半周期工作模式

Fig.6 Operation mode during half positivecycle

下面对工作原理进行分析，上半周期，开关S1和S4高频切换，S2和S3始终关断。有两种电路运行模式，模式一，S1和S4导通，S2和S3关断，电流路径如图6(a)所示，此时，输出电压为Vdc。模式二，S1、S2、S3和S4全部关断，电路通过S2和S3的反并联二极管 D2 和 D3续流，电流路径如图6(b)所示，此时，输出电压为Vdc。

下半周期，开关S1和S4始终关断，S2和S3高频切换。当S1和S4关断且S2和S3导通时，电流路径如图7(a)所示，此时输出电压为Vdc。当S1、S2 、S3和S4全部关断，此时电流通过S1和S4反并联二极管D1和D4续流，电流路径如图7(b)所示，此时输出电压为Vdc。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5RPmEVLQ5VXokErtXUlPFkKLzxpTf7x7usgDvO1GwlACSCiaiapejPqgA/640?wx_fmt=jpeg&from=appmsg)

(a) 模式三

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5NRXh9r1SNHamS2bw6wbgDw0kSmUnRMIYfGmDnPE1icGre0o71ZddxuQ/640?wx_fmt=jpeg&from=appmsg)

(b) 模式四

图7 下半周期工作模式

Fig.7 Operation mode during half negativecycle

综上，不同工作模式下开关状态如表1所示。

本方法具有以下优点：

(1)相对比传统双极性调制，开关器件切换次数少，开关损耗低，有利于提高效率。

(2)不存在桥臂直通的风险，无需加入死区，输出电压谐波含量小。

(3)方案原理简单，易于实现。

表1工作模式与开关状态关系

Table I. Relationship of operation modes and switchingstates

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5Q8LG7aGiamo2YKVoIALXInsAmBa6LfeWk9NagKWJDgLyQlThxrasAow/640?wx_fmt=jpeg&from=appmsg)

表中：UAB为桥臂输出电压，P为正半周期，N为负半周期

3．实验结果

为了验证本文提出方案的有效性，搭建了SiC逆变器系统实验平台，SiC开关型号为C2M0080120D，SiC二极管型号为C4D20120D，实验参数如下：直流母线电压200V，开关频率100kHz，输出滤波电感0.5mH，滤波电容9.4μF，调制度m0.8。图8为传统方案的实验结果，其中(a)为驱动波形，(b)为放大后的驱动波形，由图8(b)可以看出，工作模式每改变一次，开关管切换次数为4次，以t时刻为例，电路输出从Vdc改变为Vdc，此时开关S1和S4由导通切换为关断状态，S2和S3经过死区时间延时后，由关断切换为开通状态。图8(c)为四个开关器件所承受的电压波形，由于死区的影响，开关管在开通或者关断时，其两端电压存在明显畸变。在死区时间内，若输出的电感电流正向流动时，则桥臂输出电压小于理论输出电压，如图8(c)蓝圈所示。当电感电流小于0时，桥臂输出电压大于理论值，如图8(c)红圈所示，这导致了输出电压波形畸变，如图8(e)所示。此外，由于死区时间的影响，传统方案输出电压较低。图8 (d)和图8 (e)分别为滤波前和滤波后逆变器输出电压的波形及FFT分析，可以看出，由于死区的影响，输出电压含有大量低次谐波，严重影响输出电压波形质量。而且，传统方案中开关切换次数较多，系统开关损耗较大。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5c2zeMyWgSicWCZI8Vf2aWyQRgKa6BfXsRDbPKT1xqUqRKD3TK7oiavBA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5XEsTbia6DSXoDaMuesrAp0jb2IibgsrQj4bNe372mDJIaPU0tCuzty9g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5K4JyiaTLgRtarStbBvmK7Sicuua1uOYOTX3WB4GrUGTnbbic0YMqYl87Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5ZgJYFWRMwaSoJxf4WsNich0cNzXbItGOXF07nd7GN9YBBiannkOccuRQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmWHys8XYXcgiaSDBYU6D2Q5w5eLAT1mbP1ZxCWuC3nrZY2wlqWzyNIfovtuP6PKzSdR4ZibAXDUr0w/640?wx_fmt=jpeg&from=appmsg)

图9为改进的方案实验结果，根据图9 (a)和(b)图可知，无论是正半周期还是负半周期，同一桥臂的两个开关器件不存在直通的风险，无需加入死区，避免了死区带来的负面影响。从图9 (b)可以看出，当电路工作状态改变时，只有两个开关管状态发生改变，以t时刻为例，输出电压由Vdc向Vdc切换，此时，开关S1和S4由开通向关断状态切换，S2和S3在模式切换前后保持关断状态。此时电感电流通过二极管续流，相比于传统方案，开关切换次数减少一半，损耗减小。另一方面，开关无需加入死区时间，开关在开通或者关断时，两端电压V1~V4波形无畸变，如图9 (c)所示。同时，输出电压电流波形正弦，与传统方法相比，输出电压低次谐波含量明显减小，验证了方案的有效性。

4．结论

本文针对高频SiC逆变器调制策略进行了分析和实验研究，得出以下结论：

(1)传统双极性调制方案模式切换时开关次数较多，开关损耗较大，同时死区的存在导致输出电压波形畸变。

(2)改进型双极性调制方案模式切换时开关次数少，开关损耗小，同时无需加入死区，输出电压波形质量高。此外，改进的调制方案原理简单、易于实现，具有一定实际应用价值。

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)