# DSP复位电路

原创 硬件笔记本 2020-09-11 18:00 undefined

> 原文地址: [https://mp.weixin.qq.com/s/YEucmFYBzbS638hHUgA-1w](https://mp.weixin.qq.com/s/YEucmFYBzbS638hHUgA-1w)

复位电路的作用是初始化DSP，为DSP重新开始工作做好准备。上电后，DSP接通电源，需要进行一次复位，称为上电复位。  

  

为什么DSP需要上电复位？

DSP是一种微处理器数字电路芯片，它是需要时钟信号才能工作的，不管是芯片内部自带振荡器，还是外接晶振电路，上电到时钟电路正常起震是需要时间的。假设上电后，晶振需要500ms的时间，才能正常输出时钟信号。在这500ms内，时钟信号没有起震到正常输出信号，DSP就会运行不稳定，这段时间内运行就容易出现错误。所以需要在DSP上电瞬间给DSP复位引脚一个复位信号，让它在刚上电的一瞬间不工作。

  

复位电路 一，RST高有效

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tK9oeltWI3Kfs90mS9L19ddgqKY4Vhzxq3S1DTDiakjDRaWtQ6azFyKnrnDjt8yIDSW5flIbyaMG9w/640?wx_fmt=jpeg)

由于电容两端的电压不能突变，刚上电瞬间电容短路，RST为高电平，DSP复位。随着电容充电，RST引脚电压逐渐下降，当电容充电完成，电容相当于开路，RST被电阻下拉到地，为低电平，复位过程结束。  

  

复位电路 二，RST低有效

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tK9oeltWI3Kfs90mS9L19dde6pB86QLJoJSMZLLKJGTr2Sfg7EunLgeJ0F0fXYaCmP6rWM8hwAw7g/640?wx_fmt=jpeg)

由于电容两端的电压不能突变，刚上电瞬间电容短路，RST被下拉到地，为低电平，DSP复位。随着电容充电，\_RST引脚电压逐渐上升，当电容充电完成，电容相当于开路，\_RST被电阻上拉，为高电平，复位过程结束。