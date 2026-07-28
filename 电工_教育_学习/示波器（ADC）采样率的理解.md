# 示波器（ADC）采样率的理解

原创 硬件笔记本 2022-09-14 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/Xqu\_Rq-b0ZFJu77fw-SxDA](https://mp.weixin.qq.com/s/Xqu_Rq-b0ZFJu77fw-SxDA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")  

  

示波器的原理简单来说就是一个ADC转换，然后根据采集的不同电压在屏幕上显示出来。

今天就是说说示波器采样率到底是怎么回事。

  

**举例描述采样率**

**1.存储深度**

想象一下一张照片要怎么样才能清晰？当然是像素点越多，照片包含的原始信息就越接近真实，自然看起来也就越清晰。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjoQicVUDbgo1JvNAwcCxHbQwOsaR0Q7brL1WvtlYjC9bNYI716ZUibGXqDx7pzKgbzcVRd9UtqPYTA/640?wx_fmt=jpeg)

我们从示波器上看到的波形其实也可以理解成一张照片，那么这张照片包含的点越多，自然也就越接近真实的样子。

**示波器的存储深度就是表达了示波器最多能存储多少个数据点。**比如28Mpts的存储深度，说明示波器最多可以存储两千八百万个采样点。

  

对于拍摄一张静止的照片，照相机拍照时间的快慢关系并不大，因为结果并不会改变。

  

**2.采样率**

但是由于信号是不断变化的，因此对示波器而言更像是在不停拍摄运动的照片，并且是超高速的运动，这个时候除了采样点数量以外，采样点采集的速度也就至关重要了。

  

示波器重建一个信号不仅仅取决于有多少个数据点，采集数据点的速度也很关键。示波器的采样率就是示波器每秒能采集多少个数据点的能力。**如果示波器的采样率不足，那么我们就无法准确地看到信号的真实样子。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjoQicVUDbgo1JvNAwcCxHbQM0yWiamqwDF7rfconDFEibkXrbyj8jCLCHc8k4hQahYmWvRxEWThxUdA/640?wx_fmt=jpeg)

  

输入示波器的信号在时间轴和电压轴上也都是连续变化的，由于计算机只能处理离散的数字信号，像这样的信号是无法用数字的方法进行描述和处理，因此还需要用高速ADC对信号进行采样和量化，也就是数字化的过程。**经过模数转换（ADC）后，在时间和电压上连续变化的波形就变为一个个连续变化的数字化的采样点。**

在进行采样或者进行数字量化的过程中，如果要尽可能真实地重建波形，最关键的问题就是在时间轴上的采样点是否足够密集以及在垂直方向的电压的量化级数。**水平方向采样点的间隔取决于示波器的ADC的采样率，而垂直方向的电压量化级数则取决于ADC的位数。**

  

**示波器的运作过程**

示波器的运作过程大概是这样的：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjoQicVUDbgo1JvNAwcCxHbQgycXZZ2KUDLNN7AM42Kvm3UYQezErNp1YADjichq42uT3tfia2sw3OfA/640?wx_fmt=jpeg)

我们通过探头给示波器输入一个信号，被测信号经过示波器前端的放大/衰减等信号调理电路后，然后高速ADC模数转换器进行信号采样和数字量化，**示波器的采样率就是对输入信号进行模数转换时采样时钟的频率，通俗的讲就是采样间隔，每个采样间隔采集一个采样点。**

比如1GSa/s的采样率，代表示波器具备每秒钟采集10亿个采样点的能力，此时其采样间隔就是1纳秒。

**对于实时示波器来说，目前普遍采用的是实时采样方式。**所谓实时采样，就是对被测的波形信号进行等间隔的一次连续的高速采样，然后根据这些连续采样的样点重构或恢复波形。在实时采样过程中，很关键的一点是要保证示波器的采样率要比被测信号的变化快很多。

  

那么究竟要快多少呢？可以参考数字信号处理中的奈奎斯特（Nyquist）定律。Nyquist定律说， 如果被测信号带宽是有限的，那么在对信号进行采样和量化时，**如果采样率是被测信号带宽的2倍以上，就可以完全重建或恢复出信号中承载的信息而不会产生混叠。**

如下图就是采样率不足导致的信号混叠，可以看到采集到的信号和原始信号相比，频率变小了很多。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjoQicVUDbgo1JvNAwcCxHbQOLiagxpdA9lO7PgUYfth6vtanpC3jzDzPMTlSTT5457nD7HP5gJdXYA/640?wx_fmt=jpeg)

  

**多种采样模式**

大多数示波器会提供几种采样模式供用户选择，常见的有**正常采样、平均采样、峰值采样和包络采样**。

  

正常采样模式下，示波器按相等的时间间隔对信号采样以重建波形。此模式可对大部分波形产生最佳显示效果。

  

在峰值采样模式中，当水平时基设置较低时，将保留最小采样值和最大采样值，以捕获罕见事件和窄事件（在扩大任何噪声的前提下）。该模式将显示至少与采样周期一样宽的所有脉冲。峰值采样模式可用于更方便地查看毛刺或窄脉冲。在峰值采样模式中，窄毛刺和跳变沿比“正常”采样模式中显示得更亮，使它们更容易被看到。应用峰值采样方式可以避免信号的混淆，但也会显示更多的实际噪声。

  

使用平均采样模式可平均多个采集结果，以减少所显示信号中的随机或无关噪声。平均多个采样结果需要稳定的触发。平均的数目可在平均采样模式后的选择框内进行设定，平均数目越高，显示的波形对波形变化的响应就越慢。必须在波形对变化的响应速度与信号上所显示噪声的降低程度之间进行折衷。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjoQicVUDbgo1JvNAwcCxHbQnuKCpOtGTARHGr0UvTiaer0wMNOV3LEqIgpQia3W4x5lehFu8sIb1qnA/640?wx_fmt=jpeg)

  

使用包络采样模式可以看到数次采样到的波形的叠加效果，在指定的N个采样数据中捕获一个信号的最大值和最小值，可设置波形叠加次数，如下图为一个包络采样模式下波形叠加次数为32的调幅信号。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjoQicVUDbgo1JvNAwcCxHbQQW6MBXCzyaMQy2buDBtrJoPXaldQQ590nNjdHmyfqy94UnfdHKLlZQ/640?wx_fmt=jpeg)

  

无论选择了哪种采样方式，都要记住保证采样率至少是被测信号带宽的2倍以上，事实上我们更建议是3-5倍以上，这样更容易捕获的波形的异常信息。  

  

最后一件事值得注意的是，示波器的采样率同示波器的带宽不同，**当你打开多通道的时候，采样率会被每个通道平均分配**。因此如果你打开了多个通道，一定要再次确认下采样率是否依然满足条件。

> 来源地址：
> 
> https://zhuanlan.zhihu.com/p/195535528
> 
>   

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你入技术交流群。