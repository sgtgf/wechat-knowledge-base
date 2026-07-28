# 如何判定MOS管的带载能力，别告诉我看完这篇文章你还不懂！

原创 蜗牛 硬件笔记本 2020-03-21 07:59 undefined

> 原文地址: [https://mp.weixin.qq.com/s/bLajAW8mzyjkvelpnOYktg](https://mp.weixin.qq.com/s/bLajAW8mzyjkvelpnOYktg)

MOS管简单模型

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIBMT9N7Za9FMjxqebVsCgiaQGca1mVoG1FLJVeNlPUl2JXCf4RibHM3I90w6sGZMk8qOUhFtRFRTJg/640?wx_fmt=jpeg)

  

  

MOS管带载能力与漏源电流和内阻息息相关。漏源电流越大，内阻越小，带载能力越强。分析如下:

  

MOSFET在导通之后，其特性可以近似认为是一个电阻，VCC→RDS(on) →RL→GND形成回路。       

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIBMT9N7Za9FMjxqebVsCgiaNhfGrnlicDDOCCe932acRVOXsibr61gCXQKHtpJ8q7fM5WM6a30ULqnQ/640?wx_fmt=jpeg) 

按照电阻分压原理，串联电路中的分压与阻值成正比，电阻值越大分得的电压越多。所以内阻越小，它在同样的电源消耗条件下对于相同阻抗的负载来说所分走并消耗在自身上的电压越低，而负载上的电压越高，可以带起功率更大的负载来。

内阻越大，管子自身消耗的功率越多，管子越容易发热，寿命变短，甚至炸裂。

内阻越小，负载产生的分压越多，获得的能量就越大，说明带载能力越强，所以一般选用内阻较低的MOS管。

如下表

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIBMT9N7Za9FMjxqebVsCgiaNY5d1Nwaias5oQCMPM01rMBkl8NnN1Ew7AIoibic6bNCqFSx2yZBCib0dQ/640?wx_fmt=jpeg)

当驱动电压为10V，导通电阻为0.12Ω。

  

内阻RDS(on)跟什么有关呢？

1.MOS的导通电阻随温度上升而上升，下图显示该MOS的导通电阻在结温为130℃的时候，为20℃时候的2倍。 

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIBMT9N7Za9FMjxqebVsCgiaStuHzyR6icemq6rsJxVFnkqS7a0jqVicPNRhbGDSdC81BH43rSoRDWlg/640?wx_fmt=jpeg)

  

2.从下图可以看到，驱动电压越高，实际上导通电阻略大，而且最大导通电流也略大。根据经验，一般Vgs设为12V左右。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIBMT9N7Za9FMjxqebVsCgiakmb05IABTNe6JmibvCxP9dvpUF8qDeBqEibApbgcXTG86kGdFdpUMz4A/640?wx_fmt=jpeg)

  

如何增强管子的带载能力呢？除了选择本身漏源电流比较大MOS管外，还可以采用MOS管并联的方式。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIBMT9N7Za9FMjxqebVsCgiaqaxPsFW9jQRLVpnJaoOvYjXiasUGJibyXG8gGluUtbEFibZhyibaYuvXibg/640?wx_fmt=jpeg)

并联时自动均流，相当于把原来的电流平均分成两等分，分别加在两个MOS管上。也可以理解为并联后内阻减小为原来的一半，可以驱动更重的负载。

一般大功率的功放用MOSFET管，因为它的内阻更小。反过来说的话，如果负载内阻小了，那么如果放大器输出阻抗不变的话，放大器末级管子所分得的电压比例就会上升，所以现在的音响正是因为有了低内阻的MOS管，才得以向小阻抗的负载发展，以得到更好的动态效果。