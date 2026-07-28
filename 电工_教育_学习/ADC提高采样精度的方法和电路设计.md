# ADC提高采样精度的方法和电路设计

原创 硬件笔记本 2024-07-17 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/QtvKAtmUkhiPTMaCE6Kdgw](https://mp.weixin.qq.com/s/QtvKAtmUkhiPTMaCE6Kdgw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

**一、ADC介绍及性能指标**

①ADC简单介绍  

    ADC是模拟数字转换器的缩写，全称为Analog-to-Digital Converter。它的功能是将连续的模拟信号转换为离散的数字信号，以便数字系统进行处理和分析。单片机中采用的是**SAR（successive approximation register）ADC，逐次逼近型**模数转换模块。

    **ADC 转换包括采样、保持、量化、编码四个步骤**。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj0E4oc0hKoCTV2othIMolGacQPHOyHfdQlsuEicrUP4MyV0knglibeg5kLxmBjByHfv5Qbr1grZZtg/640?wx_fmt=png&from=appmsg)

    采样阶段，需要在规定的采样时间内将外部信号的电压完整无误的采样到 ADC 的采样电容上，即在采样开关 SW 关闭的过程中，外部输入信号通过外部的输入电阻 RAIN 和以及 ADC 采样电阻 RADC 对采样电容 CADC 充电。每次采样过程可以简化为外部信号通过输入阻抗以及采样电阻对采样电容的充电（即采样电容零状态的单位阶跃响应）。如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj0E4oc0hKoCTV2othIMolGIUfmFJ6cPWtL9tyALVpslpgyumAiazzcxjRgSxJNPvfIaqmRtqYphqg/640?wx_fmt=png&from=appmsg)

当采样时间结束后，采样误差表示为采样电容上的电压与信号源上的电压差值。在一次理想的采样过程中，这个电压差值应该保持在 0.5LSB 以内（LSB 为 SAR ADC 的最小的电压分辨率，0.5LSB 为 SAR ADC 的量化误差）。

量化阶段，将采样开关 SW 打开，然后由 ADC 时钟驱动，基于切换电容技术，将 ADC 采样电容上的电压逐次与不同权重的参考电压做比较，逐位确定 N 位数据每一位上的值（N 为 ADC的采样位数），然后编码输出数字码值。在量化过程中，参考电压 VREF+需要对切换电容网络进行充电。VREF+基准需要在量化过程中保持稳定。

**②ADC的性能指标**  

    **分辨率（**Resolution）：分辨率表示ADC能够将模拟信号离散化为多少个离散级别。一般以位数（bits）来表示，例如8位、10位、12位等。分辨率越高，表示ADC可以更准确地量化模拟信号。

    **采样率**（Sampling Rate）：采样率是指ADC每秒钟进行模拟信号采样的次数。采样率越高，可以更准确地还原原始模拟信号。

    **信噪比（Signal-to-Noise Ratio, SNR）：**信噪比代表了频谱中信号的有效值和噪声的有效值之间的比值。然后取对数，再乘以 20，从而得到 dB 形式的 SNR 的值。即表示ADC输出的数字信号与输入模拟信号之间的信噪比，即有效信号与噪声之间的比例。信噪比越高，表示ADC输出的数字信号质量越好。

    **SNDR**（信纳比）：信纳比代表了频谱中信号功率的有效值比上噪声加上所有谐波分量的功率之和。因此从定义上看，信纳比是必然会小于信噪比的。

    **有效位数**（Effective Number of Bits, ENOB）：在许多应用场合，使用有效位数来描述 ADC 的性能。ENOB 通常使用信纳比来计算。有效位数是指ADC输出数字信号中具有有效信息的位数。它反映了ADC的精度水平，一般小于等于分辨率。

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg1T3XtqqekIYzuM9LnAxZDkTQlpjcickpDIqyglIpictRxu5fow2dKdqUg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

    **器件精度**（Device Accuracy）：器件精度是指ADC输出数字信号与输入模拟信号之间的误差。它可以通过最大的非线性误差、增益误差和偏移误差等来表示。

    **THD（总**谐波系数）：总谐波系数表述基波信号的有效值与所有谐波的有效值之和的比值。

    **偏置误差(Offset error**) ：ADC 的偏置误差定义为第一个码字转换（从 0x00 到 0x01）所对应的实际电压偏离理想电压 位置的差值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iapXlcghssnUlWuSYLCAP0ce5qtDpSJAXET7wPMjPRhYyqXMUo1lFcqSRJ97iaQXZq7qoJRSJibGgGZ90bPYfoGcQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    **增益误差（Gain Error）**：ADC 的增益误差是指最后一次码字转换中实际转换与理想转换点电压之间（对于 12bit ADC来说，即从 0xFFE 到 0xFFF）的差值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iapXlcghssnUlWuSYLCAP0ce5qtDpSJAXHaArlnf86VVW7fHxe4iaQfkrduNQ6MdLNXCjqFtibpflfACMRqmIJpZQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    **微分非线性误差（DNL**）：微分非线性误差定义为实际量化台阶宽度与对应于 1LSB 的理想电压值之间的差异。指每一个码字宽度偏离理想的 1LSB 的程度。计算方法为每个码字模拟量的宽度减去一个 LSB 的值，当码字宽度大于一个 LSB 宽度时，DNL 为正值，反之，DNL 为负值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iapXlcghssnUlWuSYLCAP0ce5qtDpSJAXcpw4zLFg1qYIFh3DRqFxII9C3lh3xX6X81tibAgvwnYqONlRMU0ZP7A/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    **积分非线性误差（INL）**：积分非线性误差是指一个码字的实际输入点与传输函数线上理想输入之间的偏移。传输函数线可以定义为第一次实际转换与最后一次实际转换所连接的线，即 ADC 的偏置和增益误差点之间的一条直线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iapXlcghssnUlWuSYLCAP0ce5qtDpSJAXKa07WMIiaBAkLMk9zv1HEHd4vl2lzc4W4STCHy4jRnqwpZJl1jR2uxw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    在精密信号链系统中，对于 ADC 来说，往往关注的主要是 ADC 的静态特性参数。然而对于采样率达到 MSPS 的 SAR ADC 而言，有时也会用于采样频率较快的交流信号，因此对于交流输入信号的真实复现也尤为重要，在这种场景中，我们更关注信号中的频域特性。一些动态特性参数也需关注，通常需要借助对采样信号的 FFT 变换来分析频域特性。

    这些性能指标对于不同应用场景的ADC来说可能有所不同，选择合适的ADC需要根据具体的应用需求进行权衡。

    ADC 的精度不仅受自身设计与工艺因素的影响，也会受到多种外部因素的影响，想要在实际应用中达到标称的精度，需要在软件配置端与外围电路的设计上给予足够的重视。

**二、ADC提高采样精度的方法和电路设计**    

**①MCU供电电源**

    单片机中，有将 VREF+引脚单独引出的，也有 VREF+引脚未单独引出，而是在芯片内部与 VDDA 连接在一起。在内部有一个精准的内部参考源（典型电压 2.5V），可以用作 ADC 工作时的参考电压，该内部参考电压可以连接到 VREF 引脚上，但需要留意的是，该内部参考源带载能力不强，谨慎选择所带负载大小。

    由于在量化编码的过程中，VREF+需要对转化电容网络充电，在量化过程中，也会有对基准源抽取电荷的动作，因此，如果没有其他的去耦措施，**一个稳健且干净的 VREF+基准会显著影响 ADC量化的精度**，我们建议对于这两个电源**采用纹波噪声系数更小的 LDO** 来供电。对于 **VREF+基准源，我们建议靠近引脚并联一个 uF 级以及一个 nF 级的去耦电容**，一方面可以滤除来自外部低频与高频的电源噪声，另一方面，也可使ADC 在量化编码过程的基准源更加稳定。在 layout 过程中，相关电源线的走线上，我们推荐加宽电源迹线，以减小迹线的 ESR，在量化阶段，减小转化电容网络瞬间充电对输入基准源的影响。

    相同的情况，在一些场景中，VDD 与 VREF+来自同一颗 LDO，然后在 LDO 与 VREF+之间**串联一颗磁珠，**以屏蔽外部电源对于 VREF+的影响。这里需要注意选择磁珠时，需要关注**磁珠的 RDC（直流电阻）参数**，应当优先选取 **RDC 小的型号**，以减小在磁珠上造成的直流压降。直流电阻小，通常磁珠的高频处的阻抗也会小，因此这也是一个抗干扰与采样精度的权衡过程。另外，通常**不建议在此处将磁珠换成电感**，由于 VREF+在量化编码过程中，会存在高频的脉冲电流，如果靠近 VREF+引脚的去耦电容设置不合适，则比较容易引起 VREF+电压的震荡，影响 ADC 的精度。

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg17KkRHqE5JkI5aVvxRCfx2VD7lnWVticSSeMr6ic2MsJZ2TZkaDljHguQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

②引脚电容设置

    系统的硬件解耦对于采样精度提高尤为重要，在 MCU 端，对于**模拟电源引脚，建议就近放置一个 1uF 与一个 10nF 的陶瓷电容（ESR 较低）**。对于其他的**数字电源 VDD 引脚，就近放置一个 100nF 的陶瓷电容**。对于MCU 接地引脚，建议将**模拟地与数字地采用 0 欧姆电阻或者磁珠**连接，以屏蔽数字地对于模拟地的干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg1FXX14pj1zLtvjJgbEUtZEyicSXtMdU7LIxtJjtu7Ia1gGSF8pMY4B2A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

③ADC 参考电压设置的影响

    **ADC 输入信号幅值范围为 VSSA 到 VREF+**，对于部分小封装 MCU，VREF+与 VDDA 在芯片内部连接在一起。VREF+电压的设置需严格参考 datasheet 手册中的规定范围，**采样信号的幅值不应超出 VREF+的幅值**，**对于无 VREF+引脚的 MCU，采样信号的幅值不应超出 VDDA 的幅值**，否则可能会导致模拟电源漏电，严重影响 ADC 性能。此外，我们可以思考下如何根据 ADC 输入信号幅值范围设置合理的 VREF+，或者根据配置完毕的 VREF+设置合理的 ADC 信号输入范围。

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg1E6NSFic91FaZWk6nAiaTTKdDeXDPxD4CKp8ia5Xib9jX26ht9CFTIeYZrg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

④I/O 口引入超范围电压的影响

    任何模拟引脚（或相邻的数字输入引脚）上如果存在小于 GND 的负电压时（不大于-200 mV的负电压可以被认为是安全的），会引入从该 IO 口流出的负电流。这种情况下会显著影响 ADC的采样结果，为了更精确的采样结果，**需要确保相关 IO 口上在 ADC 工作期间不要有负电压的存在**。

    ADC 采样的 IO 口在非采样时间也**不要引入高于 VDDA 的电压**，可能会造成对 ADC 内核的漏电，引起采样精度的变差。

⑤信号源输入电阻的影响

    **SAR ADC 采样对于信号的输入电阻是有明确要求的**，对于一个具体的ADC，其采样电阻 RADC 与采样电容 CADC 已经不可更改，当 ADC 的采样时钟，采样周期等可配置参数配置完毕时，则外部信号的输入阻抗则是有一个最大值的要求，如下：

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg129ktgZ386sJmTjp2wyGibyK6QT0Env7oGoQXHTHwbhg3D5zia0UpOVIQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

    配置的不同的采样周期所对应的最大输入电阻，在对应 MCU 型号 datasheet 中会给出，用户也可根据公式与实际情况自行计算。

采取的思路如下：  

建议**添加一个运放跟随电路**，实现阻抗匹配；

如果对于采样率没有要求的情况下，我们可以**降低 ADC 的采样时钟**，变相提高采样时间来**使得采样电容充电到正确电位**；

    对于 SAR ADC 在采样时间内，**采样电容上的电压必须被充分充放电**，其被充电的电压值与外部输入电压之间的差值不应超过 0.5LSB，否则无论后级 ADC 性能如何卓越，都无法真实反映信号的幅值。对于极大输入阻抗，我们添加了一颗电容来限制单次采样时的电压跌落或上升毛刺的幅值，但是此种情形下，需要在**每两次采样之间添加足够的时延给内部采样电容充电**，以保证采样开关关闭时，采样电容上的电压与外部信号的电压差在量化误差范围一列。

    特别的，当 ADC 工作在连续采样或者扫描采样时，如果由于输入阻抗过大，且未被及时修正时，输入阻抗过大通道的采样结果会受前一个采样通道信号的影响，**通过增大采样时间以满足输入阻抗的影响会显著改善这个现象。**

⑥I/O 引脚串扰的影响

    由于引脚甚至包括芯片内部 bonding 线之间的电容耦合，I/O 之间的串扰会对 ADC 的采样精度产生显著影响，尤其是 ADC 当前的模拟采样通道邻近有持续数字 I/O 的电平翻转动作（典型情况如 PWM 输出）。

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg1r9qTdMOWg5c3SxInh6zzOLMeSSrjJGoHBqqYOPqcoSmtRX7GZlIiaCA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

    ADC 的采样通道紧邻在 PWM 输出时的信号波形情况，在 PWM 发生电平翻转的瞬间，在相邻的采样通道上会造成信号的波动，如果此时 ADC 完成了一次采样，则可能会造成采样结果出现较大的误差。

    有几种实践方法可以尝试来减弱 IO 之间串扰对 ADC 采样的影响，首先，在引脚规划上，就需要提前规划将那些需要持续翻转的数字 I/O 在物理位置上远离 ADC 采样通道；如果由于资源限制，频繁翻转的数字 I/O 无法远离模拟采样口，我们可以在后期 **layout** 上采取一些措施来弱影响，比如我们可以通过**在数字 I/O 与模拟通道之间加上一定面积的 GND 来隔离**。当然，由于包地屏蔽无法覆盖芯片内部，bonding 线之间的串扰仍会继续存在。此外，减慢数字信号的边沿也会减弱串扰的影响，如对数字信号添加电容值适当的电容，减慢 MCU 数字 IO 口的驱动速度，也能显著减慢这个数字信号边沿。软件层面，我们同样有一些尝试，比如在数字 I/O 口不翻转的时候进行一次 ADC 转换，当然前提是应用允许这么做。

![](https://mmbiz.qpic.cn/mmbiz_png/3jdHCvBlUO75Mfib0LLVE4AiaOQl40TSg1UXlHDlNfwVRh2PpE377XT5hSPojWD9OdZExJcJLHYDwichjxFyO1f0w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

⑦软件提高 ADC 的采样精度

    如果MCU 中具有 ADC 的片上**硬件过采样功能**，硬件过采样单元执行数据预处理以减轻 CPU 负担。它能够处理多个转换，并将多个转换的结果取平均，借此以提高 ADC 采样结果的精度。**它是以降低数据输出率为代价，换取较高的数据分辨率。**

    对于不具备片上硬件过采样单元的 MCU，**软件算法上亦可采用常用的一些滤波算法来降低输入信号采样值的波动**。例如最常见的平均算法，滤波过程中需要占用CPU的算力与一定的RAM空间。这种平均算法适用于输入信号变化慢，偶有脉冲型干扰的情形。如果信号变化频率已经大于这个平均滤波算法的执行频率，则会丢失信号变化的细节，平均后的采样结果不能重现信号的所有信息。

来源：https://www.gd32mcu.com/cn/download?kw=AN059&lan=cn

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。