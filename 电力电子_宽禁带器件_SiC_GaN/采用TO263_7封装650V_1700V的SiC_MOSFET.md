# 采用TO263-7封装650V～1700V的SiC MOSFET


> 原文地址: [https://mp.weixin.qq.com/s/XXrCje3w3wucjeKKv04yfQ](https://mp.weixin.qq.com/s/XXrCje3w3wucjeKKv04yfQ)

根据MOS管在PCB板上的安装方式，其封装方式可分为两大类：插入式和贴片式。

插入式封装是指MOSFET的管脚需穿过PCB板的安装孔，经过焊接与PCB板相连结。常见的**插入式封装类型有TO-247和TO-220F**。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snI1yyEG9TUbhmK5FGicvIT8smjWICzlx783kPGk38nOGdPVy0HRoz2e3g/640?wx_fmt=png&from=appmsg)

贴片是指MOSFET的管脚以及散热法兰通过焊接与PCB板表面的焊盘相连结。这种封装方式使得MOSFET能够以更小的尺寸、更高的密度以及更优的电气性能与PCB板进行连接。常见的贴片式封装类型TOLL、DFN、TO252（又称D-PAK）、TO263-7（又称D2PAK-7）等。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIC8oTYMWrjHmu5Zgyz9Cbn7k78nFEyaFQ4MBibf8rc7MlzU2ib9yJv17A/640?wx_fmt=png&from=appmsg)

TO263-7封装的SiC MOSFET在功率器件领域展现出显著的性能优势，其设计结合了SiC材料特性与封装技术创新，尤其在高频、高压和高功率密度场景中表现突出。

一、产品介绍

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIibdlIMufsNq8ymMenTibMZdG2oAuc6nXe1ZxvOKNW12Dzu1XsZnT6gGg/640?wx_fmt=png&from=appmsg)

1\. 高功率密度和紧凑设计，高开关速度；

2\. 高耐压，低导通电阻，高可靠性；

3\. 参数范围：

         VDS：650V/1200V/1700V

            ID：5~60A

    RDS(on)：38~750mΩ

4.应用领域：

电动汽车充电、逆变器、UPS、变频器、适配器、开关电源.....

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIR2RGPzz3Qo1zOibPt33XKibhzNfaq9VeBhjpno4Wuiczvx5rzkxPxKCdg/640?wx_fmt=png&from=appmsg)

二、技术特性与设计创新

1\. 多引脚并联与Kelvin源极结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIYy8trgT4icoZSZdEAbiaUVib4FtYUSMRAlsd6qh4Ws2dMx3uJsQfiaSQ6A/640?wx_fmt=png&from=appmsg)

TO263-7封装采用7引脚布局，其中源极（S）通常设计为 5 根引脚并联，显著降低阻抗并分流电流。同时，集成Kelvin源极引脚（Kelvin Source），将栅极驱动回路的寄生电感降至最低（典型值 < 1nH），有效抑制开关过程中的振荡和门极噪声，确保高频开关稳定性。

2\. 低寄生电感与高频开关能力

封装的整体寄生电感（包括源极、漏极和栅极路径）可控制在5nH以下，比传统TO247封装降低40%。这一特性使SiC MOSFET在硬开关拓扑中实现零电压开关（ZVS），开关损耗较硅基 IGBT 降低较大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIh1bQs2AxicAc5Eibf6b1q2IC6J4WCrgcEUd59SoYcHuuvMib02icvGWuicw/640?wx_fmt=png&from=appmsg)

TO-263-7L表贴封装及其寄生电感

漏极引脚和源极引脚的电感比TO-247-3\\4L封装小得多。由于漏极引脚的接合面积大，另外源极引脚可以由多根短引线并联连接组成，因此可以降低封装的电感（LD或LS）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIUgFkglyuaya0ombKLKRo5nvQeRbFsGUoFkLvaavSAwHGa2ySkRew0w/640?wx_fmt=png&from=appmsg)

采用两种不同封装的相同SiC MOSFET的开关动作比较

在大电流条件下，由于栅极环路不受dI/dt以及源极引脚电感导致的电压降的影响，因此采用表贴封装的产品导通损耗大大降低。封装电感的总体减小还使得SiC MOSFET的关断速度加快，显著降低了器件导通和关断时的开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmgdTibG6zhDNGZic2hFib7snIRWicICibVrXYLTBUXTShlTXfUapvaKnibMDxeJYD36Q1YgdJes56Rwo0A/640?wx_fmt=png&from=appmsg)

采用TO247-3/4L封装和TO263-7L封装的SiC MOSFET的开关损耗比较

三、典型应用与行业价值

1\. 电动汽车与充电设施

在车载充电器（OBC）中，TO263-7封装的SiC MOSFET支持双向功率流，实现22kW以上的充电功率，同时效率提升至96%。

2\. 工业电源与可再生能源

在太阳能逆变器中，TO263-7封装SiC MOSFET可将系统效率提升至98%，同时减少磁性元件体积50%。在数据中心电源中，12kW PSU方案通过该封装实现 97.5%的效率，年节能超2000kWh。

3\. 高频电机驱动与储能系统

在工业电机驱动中，TO263-7封装的SiC MOSFET支持1MHz以上的PWM频率，使逆变器体积减少60%，同时降低电磁干扰（EMI）。在储能系统中，其低损耗特性可将电池循环效率提升至98%以上。

总结

TO263-7封装的SiC MOSFET通过多引脚并联、Kelvin源极、高效散热和低寄生电感设计，重新定义了功率器件的性能边界。其在高功率密度、宽温范围、高频开关和可靠性方面的优势，使其成为电动汽车、工业电源和可再生能源领域的核心组件。随着材料与封装技术的持续创新，该封装形式将进一步推动能源系统向高效、小型化和智能化方向发展。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsma3gYlkvJAg9AoHvOCJZxhuAtTicfucwXP8evLAH00bt8n7slJu3kkPACkRtzicauvs0jB73K9KPnA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsma3gYlkvJAg9AoHvOCJZxhnxUNb7d43JkmicMichBEbpbtxibq5SxZeDVAyAx7icibKxsAwzmjp6dBZzg/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsma3gYlkvJAg9AoHvOCJZxhS4bIqQ8A8yj0UEGHrWXArn5BuZX6qRFUZKjh7Fm1eXEn7HgpC8DfSA/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)