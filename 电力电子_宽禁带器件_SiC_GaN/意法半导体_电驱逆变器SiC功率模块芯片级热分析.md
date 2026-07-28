# 意法半导体：电驱逆变器SiC功率模块芯片级热分析


> 原文地址: [https://mp.weixin.qq.com/s/LHOe\_roxhb5ZPq9Y-dUBSA](https://mp.weixin.qq.com/s/LHOe_roxhb5ZPq9Y-dUBSA)

**文章来源：**意法半导体中国

**摘要：**本文提出一个用尺寸紧凑、高成本效益的DC/AC逆变器分析碳化硅功率模块内并联裸片之间的热失衡问题的解决方案，该分析方法是采用红外热像仪直接测量每颗裸片在连续工作时的温度，分析两个电驱逆变模块验证，该测温系统的验证方法是，根据栅源电压阈值选择每个模块内的裸片。我们将从实验数据中提取一个数学模型，根据Vth选择标准，预测当逆变器工作在电动汽车常用的电压和功率范围内时的热不平衡现象。此外，我们还能够延长测试时间，以便分析在电动汽车生命周期典型电流负荷下的芯片行为。测试结果表明，根据阈压为模块选择适合的裸片可以优化散热性能，减少热失衡现象。

**关键词：**电驱逆变器，碳化硅，电动汽车，大功率

**前言**

电驱逆变器是业界公认的混动车和电动车的核心部件，从最初的几十千瓦，到现在的数百千瓦，它们对额定功率的要求越来越高。中高功率逆变器要求功率模块的标称电流高达数百至数千安培。只能通过并联多个裸片，有时并联多个子模块（在同一个封装基板上集成多个裸片），甚至多个功率模块，才能达到如此高的电流。

  

在这种情况下，重量、尺寸和成本是制约功率模块设计的主要因素。最初使用IGBT设计的三相半桥逆变器解决方案已经非常普及，目前采用性能更高的碳化硅功率模块设计逆变器是一种新趋势。功率模块设计通常是热性能和电性能之间的权衡与折衷。设计良好的功率模块，能够在上下桥臂开关管之间以及开关管内部裸片之间均衡分配电流，前提是它们的静态参数差异不大。此外，良好的电路布局意味着，只有裸片之间互热效应合理，热应力才能分布均衡。

  

本文介绍一个电驱逆变器模块连续工作测温系统的开发步骤和过程，并分析了影响功率模块使用寿命的并联碳化硅裸片之间的热失衡现象。电路布局引起的寄生元件和静态参数（例如，通态电阻和阈值电压）是引起并联器件热失衡的主要因素。论文\[2\]中详细论述了电路布局的不对称性，它会影响栅极到源极环路，引起串联电感，并导致驱动环路不匹配，从而严重影响并联器件的动态性能。

  

论文\[3\]中描述了如何通过红外热像仪图像分析功率模块在稳态下的热失衡问题。虽然通态电阻分布范围是一个重要的静态参数，但是电阻与温度的关系将会补偿通态电阻的分布范围。事实上，芯片升温将会减轻漏源通态电阻自然分布范围引起的热失衡现象。

  

本文将重点讨论另一个关键参数：阈值电压（Vth），它对开关的导通和关断性能影响很大，从而影响功率开关的能量损耗。两个并联芯片之间的阈压Vth差会导致能耗失衡，最终影响整个功率模块的性能。论文\[4\]详细地描述了Vth对开关能耗的影响，证明当Vth升高500mV时，导通状态耗散功率升幅可能高达40%。

  

根据这个论据，我们认为有必要建立一个能够在正常工作条件下直接测量开关温度的测温系统，以评估和表征功率模块内不同裸片的散热性能。不仅在生产线上设法最大限度缩窄工艺的参数分布范围，包括阈压Vth的分布范围，还需要根据模块内距离最近的两个芯片之间的微小差异，在模块组装层面采取进一步的改善行动。我们利用这一概念组装了两个不同的功率模块：第一个模块叫做GAP1，内部裸片阈压Vth的最大分布范围是250mV（围绕平均值+/- 125mV），第二个模块叫做GAP2，Vth的最大变化范围是500mV（围绕平均值+/-250mV）。采用两个不同的开关频率进行测试：电驱逆变器的典型工作频率8kHz和12kHz。众所周知，耗散功率的增加与开关频率成正比。

  

**一.实验装置**

我们的主要目标是设计开发一个温度测量系统，使我们能够在更接近电驱逆变器的实际应用环境中测量功率芯片的温度。因此，必须从适合的机械部件以及液压、电气和电子组件开始，使所有组件都指向上述目标。下图是已实现的最终温度测试系统的框图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWh69mPkoUjBkn6zWDcjjXp3PQoMdIcIQnJZw5W3hEM2ibQSqRyYpnn6w/640?wx_fmt=png&from=appmsg)▲图1：完整的测温系统 – 框图

测温系统的液压部分是由冷水机、进水阀、出水阀组成，冷却液在液压管道内循环流动，为被测温装置散热。进水阀温度和流量以及水套（水箱）的外观尺寸是决定逆变器尺寸的重要参数，因为它们直接影响封装的RTH热阻率。冷却液是乙二醇和水的50%-50%混合物，这是变频冷却器回路中常见的冷却液配制方法。为了测量冷却液的流量，在被测温装置前面连接一个流量计，在我们的实验中，冷却液流量设为每分钟3.7升。采用温度计检测功率模块进水阀的冷却液温度何时达到65℃的参考温度。铝制散热器为功率模块散热，功率模块的栅极信号由专门的栅极驱动板提供。图2是测温实验设置。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXcwltLX6RibMd5P4H3bL9v5s47jByuicbnTWS65H3yNQdXPhQWKMVmjlA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)▲图2：实验装置

下面是设备清单

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWBnEQ4zXBIrQOicGChrl6xcJUErGOnbKuof2an6pr9owYVZ6nkHXP3Bg/640?wx_fmt=png&from=appmsg)

**二. 被测温设备和栅极驱动板设计**

我们在一个连续高频工作的碳化硅三相功率模块上进行热分析。特别是，把功率模块的中间桥臂断开，将桥臂U和桥臂W的交流端子连接1.2mH的电感负载，获得一个全桥拓扑（图3）**。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWyazhfyiaViaRhT7225unAoYpA0ic3w6OlGqCH3rvo5fwBCxmG9n5AOeZA/640?wx_fmt=png&from=appmsg)▲图3：半桥等效电路

如何通过多层结构实现驱动模块是在开发测温系统时需要重点考虑的一个因素。第一级（电源）利用DC-DC升压转换器提供+18V和5V电压，这是开关操作所需的电源。第二级（主板）包含驱动器和通断电阻，用于驱动电荷注入栅源极电容器，以免在开关过程中达到器件的击穿电压。下图是这些板的3D模型。

  

最后一级是由Nucleo STM32微控制器板实现的控制模块。该模块采用单极PWM控制方法，用相同信号驱动两个对角线上的开关。互补信号及所需的死区时间用于驱动第二对角线上的功率开关。根据负荷工况和实际工作条件，设置PWM信号的占空比，以获得峰值电流达到设计要求的正弦电流波形。图4所示是PWM互补信号和负载电流（460 A Imax）的相关波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXD7jF8Xr6AN3ict4u1ZtUibSdUgEbESSVS0XnDTbpT6OZHFicBPfeqVlKw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)▲图4：PWM驱动信号和负载电流

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSX7QhVlNTnBbPuIO993UYRLQ61v9qe141puduVmic9osJAEmDicZ1dKAGA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲图5：栅极驱动板 – 电源和主板

栅极驱动板安装在功率模块上面，如上图所示。两块板子是金字塔形状和互补结构，通过排针插接在一起，以最大限度地减少走线距离、驱动板上的寄生元件和信号传播延迟。

  

在下图中，可以看到所使用的测试工具以及直流母线和微控制器板。因为高频电流会流经汇流排，所以，在设计阶段应特别注意汇流排的正确尺寸。板上有两个开孔，方便我们直接观察被测芯片，并用红外热像仪测量结温（TJ）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXIhKHmP38ELN8vkOJrAU0n44ch0UD0AVWtDaZowENkfAHY7Iqp6FywA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲图6：电气系统概述

被测温SiC功率模块的特性如下：25℃时通态电阻典型值RdsON=1.9mΩ（每个开关），标称电流Iphase=340A，击穿电压Vb=1200V。图7所示是全桥转换器的一个桥臂：每个开关都是由八个并联的裸片组成。在下图中，我们可以看到被测温器件的内部电路布局，并确定组成上下桥臂开关的八个裸片的位置。![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXTIXgFC0U4A2VS7A9qdjdQjSibUqscic4ZyWRuFBTib2kKqQOiaIqfLG0RA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)▲图7：被测器件电路布局

**三. 并联芯片间的阈压差对温度不平衡的影响**

测试电压和电流分别是400V母线电压和200Hz 340 Arms正弦相电流，使用8kHz和12kHz两种开关频率测试在不同耗散功率时的热失衡现象\[3\]。

温度测量的目的是量化全桥32个芯片中温度最高和最低的芯片之间的温差，比较GAP 1模块和GAP 2模块在相同开关频率条件下的散热性能。  

值得一提的是，为了使实验装置的测量准确度达到要求，对FLIR E-76热像仪进行了预表征测量过程，涉及的主要参数包括安装位置角度，以及与表面材料和外部光线条件相关的发射系数。在50°C至175°C的稳态温度范围内，通过热板给功率模块加热来进行校准。最后，对照热板温度设定值检查NTC读数，确保二者一致。  

只有完成实验装置校准后，才开始拍摄热图像。图8和图9所示是GAP 1模块在开关频率12kHz时的红外热图像，同时给出了开关内每个芯片的结温测量值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXV7ic6DQM3ZDBNetm7qk42ksYhjXNicTScicDORm2JJqgUcibqPsTeUfEBQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)  

▲图8：桥臂U在8kHz时的红外热图像

  

下图是桥臂W在开关频率12 kHz时的红外热图像。

**![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXdte1QxIDIyibgTC2VL1XvcCnTpRS8QFhh55BELHeqsbibDuXOc7Xo53Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)**

▲图9：桥臂W在12kHz时的红外热图像

  

在GAP 2模块上做同样的测温实验。图中上面的八颗裸片属于上桥臂开关，而下面的八颗裸片属于下桥臂开关。在8kHz和12kHz开关频率条件下，分别对GAP 1模块和GAP 2模块进行了温度分析。下表汇总了测量分析结果，报告了每个步骤测得的最大温度和最小温度。

  

表二：测试结果

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MaEOiabcLyPFibMgeA5Wv70auUrHO22vSXkx2QPf9BFPTQibbkDzicxNvgQEJIbpoHo4UfD5fsOSDObwUH3cXB2mMQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)在GAP 1模块中，温度最高和最低芯片的温差，在8kHz时为4.4°C，在12kHz时为4.6°C。在根据选型标准选择Vth的GAP 2模块中，8kHz时的热增量为6.3°C，12kHz时为8.7°C。

  

**结论**

  

测试表明，减小并联碳化硅芯片的阈压差可以极大地降低芯片之间的温差。此外，随着开关频率提高，通过减小裸片阈压差的方式降低温差的方法变得更加有效，特别是，在测试中，温差在8kHz时降低了25%，在开关频率为12kHz时降低了近50%。引起开关耗散功率的因素包括Eon、Eoff和二极管反向恢复损耗，当然还有开关频率。

  

从实验结果来看，对于给定的选型标准，提高开关频率降低温差的方法无论如何不如降低阈压分布范围更有效。由于测量过程中存在许多技术问题，其中包括总线过热和电源电压纹波，因此，无法在上一代电动汽车的典型标称电池电压下执行测试。预计这将会扩大温差，因此，从选型标准或器件阈压范围开始，能够预测结温热不平衡的数学模型将非常有帮助。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

-   **声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**
    
-   ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)