# 高速ADC基础

原创 硬件笔记本 2023-04-15 12:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/yN15NBgSeZNaJVkqxYebGg](https://mp.weixin.qq.com/s/yN15NBgSeZNaJVkqxYebGg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

本文的目的是介绍高速ADC相关的理论和知识，详细介绍了采样理论、数据手册指标、ADC选型准则和评估方法、时钟抖动和其它一些通用的系统级考虑。另外，一些用户希望通过交织、平均或抖动（dithering）技术进一步提升ADC的性能。

  

1\. 引言  
基本的ADC框图和术语如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSpvxIBibMMEQovTtS6BWEYkHXoS8RwzLyXhEoAAuxic3LdF5NkCcanspg/640?wx_fmt=png)

随着数字信号处理技术和数字电路工作速度的提高，以及对于系统灵敏度等要求的不断提高，对于高速、高精度的 ADC（Analog to Digital Converter）、DAC（Digital to Analog Converter）的指标都提出了很高的要求。比如在雷达和卫星通信中，所需要的信号带宽已经达到了 2 GHz 以上，而下一代的 5G 移动通信技术在使用毫米波频段时也可能会用到 2 GHz 以上的信号带宽。虽然有些场合（比如线性调频雷达）可能采用频段拼接的方式去实现高的带宽，但是毕竟拼接的方式比较复杂，而且对于通信或其它复杂调制信号的传输也有很多限制。

根据 Nyquist 采样定律，采样率至少要是信号带宽的 2 倍以上。同时为了支持灵活的制式、相控阵或大规模 MIMO 的波束赋形，现代的收发机模块越来越普遍采用数字中频直接采样，这其实进一步提高了对于高速 ADC/DAC 芯片的性能要求。下图是一个典型的全数字雷达收发信机模块的结构。高速数字化仪和多通道数据采集解决方案 | Keysight根据 Nyquist 采样定律，采样率至少要是信号带宽的 2 倍以上。同时为了支持灵活的制式、相控阵或大规模 MIMO 的波束赋形，现代的收发机模块越来越普遍采用数字中频直接采样，这其实进一步提高了对于高速 ADC/DAC 芯片的性能要求。下图是一个典型的全数字雷达收发信机模块的结构。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSOPlibSMWGdQibicFHVATa9c0N7b9TwlJnjnfbcmsGvU0qsvLYiaJE2bk2w/640?wx_fmt=jpeg)

  

高速 ADC/DAC 在现代全数字雷达中的应用

可以看到，ADC/DAC 芯片是模拟域和数字域的边界。一旦信号转换到数字域，所有的信号都可以通过软件算法进行处理和补偿，而且这个处理过程通常不会引起额外的噪声和信号失真，因此把 ADC/DAC 芯片前移、实现全数字化处理是现代通信、雷达技术的发展趋势。

在全数字化的发展过程中，ADC/DAC 芯片需要采样或者输出越来越高的频率、越来越高带宽的信号。而在模拟到数字或者数字到模拟的转换过程中造成的噪声和信号失真通常是很难补偿的，并且会对系统性能造成重大影响。所以，高速 ADC/DAC 芯片在采样或者产生高频信号时的性能对于系统指标至关重要。

目前在很多专用领域，使用的 ADC/DAC 的采样率可以达到非常高的程度。比如 Fujitsu 公司可以提供 110G~130GHz 的 IP 核，Keysight 公司在高精度示波器里用到了单片 40GHz 采样率、10bit 的 ADC 芯片，以及 Keysight 公司在高带宽任意波发生器里用到了 92GHz 采样率、8bit 的 DAC 芯片等。这些专用的芯片通常用于特殊应用，比如光通信或者高端仪表等，比较难以单独获得。

在商用领域，很多 ADC/DAC 芯片的采样率也都已经达到了 GHz 以上，比如 TI 公司的 ADC 12J4000 是 4 GHz 采样率、12bit 分辨率的高速 ADC 芯片；而 ADI 公司的 AD9129 是 5.6 GHz 采样率、14 bit 分辨率的高速 DAC 芯片。这一方面要求 ADC 有比较高的采样率以采集高带宽的输入信号，另一方面又要有比较高的位数以分辨细微的变化。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSwiat6t8QW0C1HAlhic7QWvrcVlZAKyYWszuy5HvGKsNSwl2sRTv5M5qQ/640?wx_fmt=jpeg)

随着 ADC/DAC 的采样率的提高，高速 ADC/DAC 的数字侧的接口技术也在发生着比较大的变化。

-   低速串行接口：很多低速的 ADC/DAC 芯片采用 I2C 或 SPI 等低速串行总线把多路并行的数字信号复用到几根串行线上进行传输。由于 I2C 或 SPI 总线的传输速度大部分在10Mbps 以下，所以这种接口主要适用于MHz 以下采样率的ADC/DAC 芯片。
    
-   并行 LVCMOS 或 LVDS 接口：对于几 MHz 甚至几百 MHz 采样率的芯片来说，由于信号复用后数据速率太高，所以基本上采用并行的数据传输方式，即每位分辨率对应 1 根数据线（比如 14 位的 ADC 芯片就采用 14 根数据线），然后这些数据线共用 1 根时钟线进行信号传输。这种方法的好处是接口时序比较简单， 但是由于每 1 位分辨率就要占用 1 根数据线，所以占用芯片管脚较多。
    
-   JESD204B 串行接口：对于更高速率的 ADC/DAC 芯片来说，由于采样时钟频率更高，时序裕量更小，采用并行 LVCMOS 或 LVDS 接口的布线难度很大，而且占用的布线空间较大。为了解决这个问题，目前更高速和小型化的ADC/DAC 芯片都开始采用串行的JESD204B 接口。JESD204B 接口是把多位要传输的数据合并到一对或几对差分线上，同时采用现在成熟的 Serdes（串行-解串行）技术用数据帧的方式进行信号传输，每对差分线都有独立的 8b/10b 编码和时钟恢复电路。采用这种方法有几个好处：首先数据传输速率更高，每对差分线按现在的标准最高可以实现 12.5 Gbps 的信号传输，可以用更少的线对实现高速数据传输；其次各对线不再共用采样时钟，这样对于各对差分线间等长的要求大大放宽；借用现代 Serdes 芯片的预加重和均衡技术可以实现更远距离的信号传输，甚至可以直接把数据直接调制到光上进行远距离传输；可以灵活更换芯片，通过调整JESD204B 接口里的帧格式，同一组数字接口可以支持不同采样率或分辨率的ADC 芯片，方便了系统更新升级。
    

ADC 的主要性能指标分为静态和动态两部分：

主要静态指标：

-   Differential Non-Linearity (DNL)
    
-   Integral Non-Linearity (INL)
    
-   Offset Error
    

主要动态指标：

-   Total harmonic distortion (THD)
    
-   Signal-to-noise plus distortion (SINAD)
    
-   Effective Number of Bits (ENOB)
    
-   Signal-to-noise ratio (SNR)
    
-   Spurious free dynamic range (SFDR)
    

要进行 ADC 这些众多指标的验证，可用的方法很多。最常用的方法是给 ADC 的输入端提供一个理想的正弦波信号，然后对 ADC 对这个信号采样后的数据进行采集和分析。因此，ADC 的性能测试需要多台仪器的配合并用软件对测试结果进行分析。下图是最常用的进行ADC 性能测试的方法。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSNiaXJpjkib5SgBj2icyjCWia3OXvzP4PO8JHYwYranXDNVW3b3LMcR9uFg/640?wx_fmt=jpeg)

在测试过程中，第 1 个信号发生器用于产生正弦波被测信号，第 2 个信号发生器用于产生采样时钟，采样后的数字信号经 FFT 处理进行频谱分析和计算得到动态指标，经过直方图统计得到静态指标。

静态指标是对正弦波的采样数据进行幅度分布的直方图统计，然后间接计算得到。如下图所示，理想正想波的幅度分布应该是左面的形状，由于非线性等的影响，分布可能会变成右边的形状，通过对实际直方图和理想直方图的对比计， 可以得出静态参数的指标。

以下是 DNL 和 INL 的计算公式：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSxdImdic1Y2FPhiavXkhrpic1sNib4jjMazDSmk1o6IwIFgicMZDjjibiaYYjA/640?wx_fmt=png)

动态指标是对正弦波的采样数据进行 FFT 频谱分析，然后计算频域的失真间接得到。一个理想的正弦波经 A/D 采样，再做后频谱分析可能会变成如下图的形状。除了主信号以外，由于ADC 芯片的噪声和失真，在频谱上还额外产生了很多噪声、谐波和杂散，通过对这些分量的运算，可以得到ADC 的动态参数。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSAPO42toRqNjCuibSazSTLMfNeG226IYTAlALHFZAd7NnV8NfmicOgpicQ/640?wx_fmt=png)

通过 FFT 频谱分析测试动态参数

下面是动态参数的计算公式：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSt6iciaXOCj84jxEicoC6eS5hQ0mvHZVYTIILFZMzGpLlEcBDbBKQHEXyQ/640?wx_fmt=jpeg)

对于产生被测信号和采样时钟的信号发生器来说，为了得到比较理想的测试效果， 要求其时间抖动（或者相位噪声）性能要足够小，因为采样时钟的抖动会造成采样 位置的偏差，而采样位置的偏差会带来采样幅度的偏差，从而带来额外的噪声，从 而制约信噪比的测量结果。下图是时钟或者信号抖动引起信噪比恶化的示意图，以 及根据信噪比要求及输入信号频率计算信号抖动要求的公式。

  
2\. 频谱性能术语  
SNR：信噪比，是指基频功率与除去直流及前5次谐波的噪底功率之比，有些数据手册可能是要除掉前9次谐波。基频也叫信号或者载波。SNR的单位是dBc（当用基频的绝对作参考时）；或者dBFS。  
SFDR：无杂散动态范围。SFDR是基频功率与最高的杂散功率之比。  
THD：总谐波失真。THD是基频功率与前5次谐波功率之比。THD在单位通常是dBc。与SNR类似，有的数据手册可能取前9次谐波来计算THD。  
SINAD：信号噪声与失真。SINAD的单位可能是dBc或者dBFS。  
ENOB：有效位数。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS8cdZ8QLyUx7YKN1mynBO2fKrobGbXbXm5CS4wAghwDChnuqHBntzUA/640?wx_fmt=png)

理想SNR=6.02\*n+1.76，当n=ENOB时，理想SNR=SNR。对于理想ADC而言，由于没有谐波，其SINAD=SNR。  
例如，设计师需要一个SINAD为75dB的ADC，则ENOB=(75-1.76)/6.02=12.2bits，那么至少要选14位甚至16位的ADC才能满足要求。

  
3\. 奈奎斯特、混叠、欠采样、过采样和带宽  
根据奈奎斯特采样定理，采样时钟频率至少是输入模拟信号频率的2倍。  
过采样：采样频率大于信号频率的2倍，即FIN<FS/2。FS/2即奈奎斯特频率。  
欠采样：信号频率大于奈奎斯特频率。此时，会导致混叠。  
混叠并非一无是处，它可以将高频信号混频到低频信号，可以省去额外的混频器，以减少系统功耗和成本，但前提是必须慎重考虑频率规划和ADC选型。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSmfuNbZAO3Xib8rN5NpWB1wk5DWJia7wzx0YDicjt13rjibkJNCKJJysQ3Q/640?wx_fmt=png)

从上图可知，在ADC选型时，需要考虑如下两点：  
A：ADC满足期望的频率规划  
B：输入模拟信号的带宽小于ADC的奈奎斯特频率  
另外，ADC的带宽还要满足输入模拟信号的频率需求。

  

4.ADC管脚接口

一般来说，ADC包括以下6种接口：

-   模拟输入
    
-   参考/共模模式
    
-   时钟输入
    
-   数字输出
    
-   电源
    
-   GND  
    4.1模拟输入  
    高速ADC通常采用差分输入，输入信号是180度反相的，使得信号是叠加的。与单端输入相比，由于消除了共模噪声，差分信号改善了ADC的噪声特性。此外，差分信号还降低了偶次谐波，这是由于信号被偏移了180度，对于偶次谐波，导致2x180,4X180,6X180度的相移，如下图所示
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS3I8frplM4mXOdxkb7lqDTdWKvZUrlvZPTlicYxL22VZgcU1UMBr79gQ/640?wx_fmt=png)

  
与单端信号相比，差分信号的幅度仅于等效单端信号的一半，从而差分信号具有更优的谐波性能。小信号使得ADC具有更宽的裕量。一般而言，更多的裕量可以使ADC工作在线性区域，减少产生谐波的非线性影响。如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSDdj4zaGGnkMg7TfJZXlM70rFrHXuibLKkBZmlEoGia9b7mTkCF2gHXgg/640?wx_fmt=png)

下图所示为双变压器ADC输入接口，变压器用于将单端信号转换成差分信号。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqStSEce3Trj1vymSZVuo9ibkC01pQzO6sDhVXTMZ5kpxKWfvt6wzYibs8Q/640?wx_fmt=png)

单变压器会有少量的不匹配，会产生偶次谐波。第二级变压器用于校正这种不匹配，以降低偶次谐波。在高频信号时，采用变压器可以获得较高的性能。但是，对于基带信号或者低频信号，通常采用运放驱动ADC输入。  
4.2参考/共模模式  
参考电压和共模电压在ADC中具有不同功能。在许多ADC中，参考电压和共模电压具有相同的电平，或者有时ADC管脚会复用参考电压和共模电压功能。因此，这些信号术语有时会导致误解。  
参考电压决定的ADC的动态范围。数据手册通常会提供参考电压和动态范围的关系。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS5I4yGLg4iaBHCXcNNiccF0sojsGH4Hvya4nm9G6bVpic8Vp7FkSP7xtcA/640?wx_fmt=png)

参考电压可以由ADC内部生成，或者外部提供。为了获得数据手册标注的性能，需要提供正确的参考电压。对于外部参考，应尽量降低外部参考电压的直流噪声。参考电压上的噪声会直接影响ADC的SNR。  
图11中，共模电压VCM是指输入到差分模拟输入信号的直流电平。VCM用于将将差分输入信号偏置在电源和GND的中间。  
VCM有以下几种应用方式：

-   有些ADC有VCM管脚，输出内部产生的VCM
    
-   有些ADC将VREF设置成与VCM相同的电平，因此，VREF可用于生成VCM
    
-   设计师可选择外部提供VCM
    

对于外部产生的VCM，必须保证其电平与数据手册要求一致，错误的VCM电平会降低ADC的SNR。  
4.3时钟输入/抖动  
高速ADC通常采用差分时钟输入。时钟抖动及斜率是影响ADC的SNR的重要因素。时钟抖动对SNR的影响如下所示：  
![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHNYlRRfx2u0BHsQ12yoBwjIO2ficzgsvMzqymaphlJicJLryWhBRunD1T5YSWMO7qPexLAYQDDS7u1Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSfjT7bSqtGVh4OyfIOOE2RYicNOrwPZkWTibcTDXSt91hjgPgTYibNvQTw/640?wx_fmt=png)

由上可知，对于理想ADC，时钟频率并不会影响SNR。若不考虑时钟抖动，时钟频率达到ADC设计极限（诸如建立、保持或模拟建立时间），从而最终导致SNR下降。  
抖动不变时，SNR随输入信号频率增加而降低。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSjQpMyXFfuKsjJxvfBkiaZDg75EUtWtpfOTlG2tkMU3Bq7DnYKVMKddQ/640?wx_fmt=png)

由上图所示，指定时钟抖动时，SNR随信号频率增加而降低。高频模拟输入信号对于时钟抖动有较大的误差。如果时钟信号上有随机噪声，会表现在频谱图上。如果时钟信号上有确定的误差信号，这个信号会与ADC的输入信号混合在一起，在频谱图上表现为杂散。  
设计师必须考虑时钟抖动的两个重要因素。其一是ADC的孔径延迟，其二是外部输入时钟的抖动。这两个因素共同产生的抖动影响ADC的采样误差。  
![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHNYlRRfx2u0BHsQ12yoBwjIYkUWJgWhjwQoBJYeZxW72gBTPib08hpfOXiaWzlk7XgThq9HyD8tibdPg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
设计实例：  
设计需求如下：  
SNR=75dB  
FIN=75MHz  
客户选定的ADC其孔径抖动=80fs  
为了满足客户的SNR需求，客户应用所能容忍的最大抖动是多少？  
A：用公式3求解抖动  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSnG3pQjjsPYkWea59uue17voTlmwIeaDevPrywLcicGOicicukYxibaeENA/640?wx_fmt=png)

B：用公式4求解外部时钟抖动  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS2fDShabjdAZ8Y5NA7RwE2Z4RRuIAWXNeK7ia8yW8m51cO9cETgFBWibw/640?wx_fmt=png)

因此，外部输入时钟抖动必须小于397fs。  
下图展示了慢时钟沿导致较大的孔径抖动的情形。对于正弦时钟，增大时钟幅度可以改善孔径抖动进而提高ADC的SNR。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSOAx8EG8lp6Yb1Yssl8gLFHg7ibn1T91bWMgZicj8BKPwIn1YQbiaDEUHw/640?wx_fmt=png)

正弦波幅度与SNR的关系如下图所示：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSpntickicjacI1UoQv8vkShWP85OTDcibs4KFlNkVkMQ2iaurLhPTgoDZsw/640?wx_fmt=png)

那么问题来了，如果关注时钟上升斜坡，那为什么不直接给ADC提供方波时钟信号？答案是：方波时钟确实是一个可行的ADC时钟选择。但是，设计者必须在正弦和方波之间做出一系列的折衷。  
其一是低抖动方波时钟与时钟频率范围间的折衷。对于大多数应用，通过窄带SAW或晶体滤波器以改进ADC时钟的close-in相位噪声（抖动）。滤波后，时钟变成低抖动正弦时钟，可以直接提供给ADC。这种方法的局限在于时钟频率范围受限于滤波器带宽。一些公司有时钟抖动清除及时钟分配芯片，这些芯片具有较好的相噪性能、方波输出和较宽的频率范围，其相噪特性足以满足系统需求，而不需要额外滤波器。  
其二是方波时钟与正弦时钟在信号完整性方面的折衷。与正弦信号相比，方波信号具有丰富的谐波，具有高频分量。由于信号反射及对其它信号的干扰，高频分量会对电路设计带来较大困难。不管采用哪种时钟信号，必须对电路设计着重考虑，以满足ADC的抖动需求。  

4.4实验评估  
ADC的实验评估主要包括软件和硬件两个方面。  
ADC实验评估的软件手段主要是FFT。由于其高速及准确性，FFT是时域到频域变换的卓越评估工具。  
要实现FFT，必须理解一致性、加窗和频谱泄漏等概念。  
下图显示了加窗和频谱泄漏。窗口选择不当会导致频谱泄漏。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSD8NNAfXJTfkicFes1uZfLxD4hqV8w3ibPpINzZs7RxXNeL2IJictlib6Aw/640?wx_fmt=png)

某些设计者需要非整数个周期。在这些特殊情况下，由于频谱泄漏，不能使用FFT，可以使用布莱克曼窗或者傅利叶分析。这种方法允许采集非整数个周期信号，但是需要更多计算时间并且会对噪底计算和频率响应引入少量误差。  
FFT一致性定义如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSDofl8V7HicKTApx20GpUtjbuMNEz6I00TqiaiaoOxHiaEZITduudngQ4Kg/640?wx_fmt=png)

上式中的参数需遵循以下规则：  
规则1：M是奇整数。M为整数是为了避免频谱泄漏，奇数的要求是由于规则3。  
规则2：N是2的幂。FFT的点数必须是2的幂，通常是4096,8192，16384,32768或65536。选择N时，需要在计算时间、测量重复性等因素之间做权衡。  
规则3：M和N是互质数。M和N互质是为了保证采集到非重复数的样本。由于FFT的特性，重复样本除了带来额外的计算量外，并不能提供更多的有用信息。由于N是2的幂，若限定M是奇整数，则可保证M和N互质。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSpLEe99WAulqBBHJjokd8NZMshDicuLDgpan4ZIkictY4r5Ee4yvwjzEg/640?wx_fmt=png)

规则4：FIN与FS的分辨率须大于输入源的最小分辨率要求。例如，模拟输入和时钟源的最小分辨率为10Hz，则它们不能被设置为小于10Hz的分辨率。在做FFT时，如果频率分辨率小于输入源的分辨率，会采集到非整数个周期，进而引起频谱泄漏。  
设计实例：  
需求如下：  
Fin=70MHz  
Fs=125Msps  
分辨率为1Hz  
求解M，N，Fin，Fs。  
（1）取N=8192，M=N_Fin/Fs=4587.52，取M=4587.  
（2）根据N重新计算Fs（保证分辨率为1Hz）  
X=Fs/N=125M/8192=15258.789  
X取整为Xnew=15258.  
新的Fs=Xnew_N=15258_8192=124.993536Msps  
（3）计算新的Fin  
Fin=Fs_M/N=124.993536Msps\*4587/8192=69.9988446MHz  
ADC实验评估的硬件包括：  
（1）时钟源：为达到所需的抖动要求，需通过BPF滤除close-in和宽带噪声  
（2）模拟输入源：为达到所需的噪声和谐波要求，需通过BPF滤除噪声和谐波  
（3）数据采集仪：保证采集仪具有足够的速度和存储容量用于FFT处理  
典型的ADC实验设置如下图所示：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSvGU9FdHHCwKuOuAkMYMZgHufic4FNwVopgoJIDtVwsqBLibqLKcwI3dQ/640?wx_fmt=png)

  

5.交织采样  
高端用户通常推动ADC SNR和采样速度的极限。如果当前最高端的ADC的SNR或者采样速度仍不能满足用户要求，那么交织采样是一个可行的解决方案。  
下图所示为ADC交织采样：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSXU9NOQHU12YnxtbU9MDTXYtXJyMAgYOHMF66MnWnpeicUseCMKPbazA/640?wx_fmt=png)

两个ADC的模拟输入并联连接，采样时钟相差180度，从而实现采样速度翻倍。采样速度翻倍有两个好处，其一是提高的采样信号带宽，其二是交织采样将噪底在更宽的带宽上进行扩展，可将噪底降低3dB，如下图所示：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSfjBGlCoiaypOmGJsW1gF3epRADibtOHfiatreibUq00ne0LwBeInB1laWw/640?wx_fmt=png)

单片ADC噪底计算公式如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSwHl1mQJeRwpWrrkCSolbK4mvSAnYVGH9kyHLC3KxgHmbl1XKQN9CHw/640?wx_fmt=png)

当多片ADC交织时，噪底计算公式如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSFQQfhRyu9EibnZjantsIS18An1kOrPE7t98icmI7Xy6L0ibaiaHicFMB1oA/640?wx_fmt=png)

两片或多片ADC交织也带来了另外的设计挑战。ADC之间的DC偏移的差异会在特定位置产生频谱分量。ADC之间的增益差异、INL差异和时钟相位误差会在时钟和模拟输入混频的位置产生频谱分量。  
![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSqV3iarjjrphc2a1icQDp5kDMibtzO137qqbOoSm1CCFpz0nXgIUpTqDYQ/640?wx_fmt=png)幸运的是，这些频谱分量的位置是已知的。但是，但是这些误差及误差幅度随温度漂移，导致频率规划非常困难。  
下图所示为2片、3片、4片和5片ADC交织的频谱图，假定选用的ADC为理想14bit ADC，且偏移误差<15LSB，增益误差<0.3%。  
![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqScCMsSrnGf4WGkw276RwUVLb9BETOLMCsSkv1bic6aPQJzuIFsagHiapg/640?wx_fmt=png)

由上图可知，尽管ADC的误差较小，但仍会造成较大的杂散响应。  
设计者需要设计相应的经温度补偿校正的模拟或数字滤波器，滤除这些杂散。  
  

6.ADC取平均  
提高单片ADC SNR性能的另一方法是对两片或多片ADC取平均。对两片ADC取平均，可以将SNR提高3dB。  
![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSHTUqoNVGMM6uxJuL7FKfibNzt8XMVlq8OdBTjh36tdib6ZIrJgEt0WJw/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS6LwzThRuUvLX9sqYiah8mHXT3ficjUicUuMNvVNSaMXUjg1TUDB0P0oSw/640?wx_fmt=png)

这种取平均技术降低了ADC之间的非相关噪声，包括热噪声、内部ADC参考噪声或非确定孔径时钟抖动。相反地，取平均技术并不会降低了ADC之间的相关噪声，包括ADC设计固有的失真、ADC外部时钟和模拟输入的通用误差（common error）。  
假定各片ADC的SNR相同，则4片取平均可将系统SNR提高6dB，而提高20dB需要100片ADC取平均，计算公式如下：  
![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSnKRAEicdwbQXTvicqPsRJWRibJ1YiaTf3GevmKov4ax1ooBZNZuoKRcfcA/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSNyOaAOqVSo1RBXMiakX8iaA1YCYnGT2SrmM7wz93sohqWk3bo9NBzD9w/640?wx_fmt=png)

如前所述，孔径时钟抖动是非相关噪声源。假定所有ADC具有相同且随机的孔径时钟抖动，下式可用于计算系统所能容忍的最大外部时钟抖动：  
![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSsI9OoySFwCd5nfOlPXO1iczJ8iaaVHtjpd4eer0MQj6P0hW6CIEFJiaVA/640?wx_fmt=png)

7.抖动（Dithering）  
ADC具有确定性和系统性的错误，且具有重复性。理论上， 可以通过添加一个低量级的随机噪声来最大限度地减少这些错误。添加低量级随机噪声，以改善 ADC 失真的过程称为抖动（Dithering）。  
![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSYjia3NFrHeZpLgWoSXvWpjNrRib9iaQf56r3iaznnSuAjl79U5SuWRga6g/640?wx_fmt=png)Dithering的要点如下：

-   Dithering可以降低谐波的水平，但是可能会有增加噪底的负面影响
    
-   谐波性能改善与信号的类型和幅度有关，在某些情况下，甚至不会有改善  
    为了将SNR恶化降到最低，某些Dithering技术在电路中需要随机化的部分添加噪声，后续又要消除这些噪声
    
-   Dithering可以ADC外部添加，某些ADC内置了Dithering选项
    
-   某些情况下，真实世界中已经包括了足够的表现为抖动的噪声
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSuqL14rXaiaohHYTmxgoXIl7AlxibUSdcTDWzwcxbKSYYibeXv8tdFtf3A/640?wx_fmt=png)设计师要决定是否有必要采用Dithering。Dithering是一项复杂的技术，在决定采用前必须深刻理解其内涵。

本文转载自

《TI高速ADC基础 SLAA510》 zkf0100007的博客-CSDN博客

《高速 ADC 技术的发展趋势及测试方法》是德科技

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。