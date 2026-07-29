# EMC噪声的本质

原创 ittbank 硬件笔记本 2023-12-16 10:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/5FG6Q-\_wlGxkXsXNyDDufQ](https://mp.weixin.qq.com/s/5FG6Q-_wlGxkXsXNyDDufQ)

  

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**01**

**频谱的含义**  

频谱是将电磁波分解为正弦波分量，并按波长顺序排列的波谱，就是将具有复杂组成的东西分解（频谱分析仪）为单纯成分，并把这些成分按其特征量的大小依序排列（部分不计），横轴作为频率，纵轴作为功率或电压。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_002_da0816b53a3c.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_003_9c2ac8a31461.png)

  

图1-1：频谱的定义

从图1-1可以看到，数字波形是由多种频率叠加而形成的，示波器和频谱仪分别从两个视角获得一个数字波形的不同信息，示波器获得bit信息，频谱仪获得频谱信息或者能量信息。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_004_26d0d0245ac0.png)

图1-2：示波器角度的数字波形

在图1-2表示开关信号的脉冲波形中，包括tw（脉冲宽度）和ts（上升/下降时间）。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_005_2d7c74051788.png)

图1-3：连续化的频谱图

图1-3是基于傅里叶变换的理论上的脉冲波形频谱，这是一个连续化频谱，振幅随着频率的升高而衰减，衰减斜率随着tw和ts而变化。蓝色线表示脉冲的ts变慢后的频谱变化，斜率变为-40dB/dec 时的1/𝜋ts频率降低（向左偏移），最终结果是其后的振幅减少，即当ts延迟时频谱的振幅衰减，频谱下降。

  

**02**

**影响频谱的因素**  

  

对于信号波形的变化，频谱将以怎样的趋势变化，使用实际的频谱分析仪数据来分析频率等其他参数变化时的频谱变化。这里将通过实际的DC-DC的开关相关的频谱来分析并解决EMC问题时所需要的理论知识。图1-4中的图形是初始条件下的数据：

振幅=10V，频率=400kHz，Duty=50%，tr/tf=10ns。

中间的图表示n次谐波和振幅（V）的关系，1倍的频率＝基波，400kHz的分量最大，以奇数倍的频率形成频谱。仅产生奇次谐波是Duty为50%（＝1：1）的频谱特征，各分量的大小为基波分量的1/次数，例如3次谐波分量为1/3，n次谐波分量为1/n。

最下面的图是振幅为dBµV的对数曲线图，dBμV是基于以1µV电压为基准的电压比的dB 值（1µV＝0dBµV）。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_006_ee10e2becc91.png)

图1-4：初始波形

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_007_86b5bdcf4681.png)

图1-5：将频率提高到2MHz

图1-5是将频率提高到2MHz时的频谱，从频率--振幅（dBµV）关系图可以明确看出，当基波频率增高时，整个频谱会向右（频率高的一侧）偏移。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_008_286acea48633.png)

图1-6：tr和tf的速度都减慢为100ns

图1-6是tr和tf的速度都减慢为100ns时的频谱，由于进入-40dB/dec衰减时的频率降低，因此高次谐波的频谱振幅衰减。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_009_98748494a9a4.png)

图1-7：将Duty从50%变为20%

图1-7是将Duty从50%变为20%时的频谱，由于Duty不是1:1，因此会产生偶次谐波，但峰值基本上没变化，随着脉冲宽度tw变窄，基波频谱的振幅衰减。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_010_a2f623a28505.png)

图1-8：仅将tr（上升时间）减慢

图1-8是仅将tr（上升时间）减慢时的频谱，tr相关的高次谐波分量因tr变慢而衰减。即仅上升速度减慢 ⇒ 上升分量相关的高次谐波衰减。总而言之，当基波频率较低且上升/下降较慢时，谐波频谱会衰减，从EMC的角度来看，也就是频谱的振幅较低时更有利。

**小结：**

高频化--->频谱整体增加

上升/下降速度减缓--->低频段衰减-40dB/dec

Duty变更--->发生偶数次高次谐波，但对频谱的峰值无影响，基波下降

仅上升速度减缓--->上升成分在低频段衰减

频率越低--->上升/下降越慢，频谱越低

  

**03**

**EMC概念定义**

  

EMC（Electromagnetic Compatibility），电磁兼容性，即不对其它设备产生电磁干扰，并且受到来自其它设备的电磁干扰时，系统运行不受影响，仍保持原有的性能。EMI（Electromagnetic Interference），电磁干扰，由于IC工作产生噪声EMI，给周边IC和系统带来干扰或者干扰性的电磁波，所以需要设计不产生EMI的电路。

EMS（Electromagnetic Susceptibility），电磁干扰敏感度或电磁敏感性，即使受到EMI影响也不会造成干扰的能力与耐受性，需要设计能承受EMI的可靠性电路。测试领域里面EMI分为两种，传导噪声（Conducted Emission）和辐射噪声（Radiated Emission）。

传导噪声是指经由线体或PCB板布线传导的噪声，辐射噪声是指排放（辐射）到环境中的噪声。对于这些噪声，EMS中分别都有耐受性要求，称为传导抵抗力（Conducted immunity）和辐射抵抗力（Radiated immunity）它们的关系如下：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_011_caa8fd3271c8.png)

图1-9：EMC分支

**04**

**辐射机理**

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_012_9df4dbb99a87.png)  

图1-10：交直流对比

处在直流状态的电信号，f=1/T，T足够长，可以理解其基频信号频率为0，那么它的各种奇次偶次谐波也是0，即没有高频信号，只会产生磁通。而处在交流状态的电信号，会产生不断变化的磁场，不断变化的磁场又会产生不断变化的电场，循环这一过程，引入位移电流的概念，就是辐射的核心机理。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_013_099be95c3d5e.png)

图1-11：数字波形高频含量辐射

从板级的角度考虑，频率越高的噪声，波长越短，所需的辐射天线越小，就越容易辐射到空气中，这也是高速信号需要屏蔽的根据之一。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_014_1ff948ece0cc.png)

图1-12：位移电流概念

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_015_f6e8829d5dcb.png)

图1-13：探测辐射的过程

对于辐射值的标准，各个领域，各个国家依据的标准都不一样，世界通用标准是CISPR，而日本：VCCI Class、美国：FCC、欧洲：EN，还有就是把CISPR作为基准来自定义设定规定值，各个标准依据电子产品的不同细分为各种子标准。

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_016_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_017_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_018_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_019_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_020_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_021_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_022_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_023_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_024_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_025_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_026_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_027_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_028_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_029_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_030_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC噪声的本质_images\img_031_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。