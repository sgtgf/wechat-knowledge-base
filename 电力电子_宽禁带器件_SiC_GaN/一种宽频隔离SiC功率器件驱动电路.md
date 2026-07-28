# 一种宽频隔离SiC功率器件驱动电路


> 原文地址: [https://mp.weixin.qq.com/s/FSZSnxJUdnWze1I2VhvrNA](https://mp.weixin.qq.com/s/FSZSnxJUdnWze1I2VhvrNA)

**文章来源：**电气传动

**作者：**汪家荣1，戴光华2，胡亮3，高敬祥4（1.武昌首义学院 机电与自动化学院；2.空军预警学院 预警指挥系；3.空军预警学院 黄陂士官学校；4.空军预警学院 预警技术系）

**摘要：**提出了一种新型双边沿触发隔离驱动电路，该电路能够实现驱动信号的全隔离，抗干扰能力强；开关频率范围宽，能够实现 0 Hz～500 kHz信号传递；驱动能力强，可以很好满足 SiC 功率器件的应用需求。首先，详细介绍了电路结构和工作原理，阐述了边沿调制和解调技术。然后，论述了电路参数设计准则。最后，通过实验验证了电路理论分析和参数设计的正确性。

**关键词：**双边沿触发；宽开关频率范围；驱动电路

功率开关器件是电力电子装置的核心元件，目前广泛采用的是硅（silicon，Si）基功率器件。随着社会的发展和科技的进步，电力电子装置正向着高频化、智能化、高效率、高功率密度及高可靠性方向发展，硅基功率器件的特性难以满足电力电子装置的发展需求。而以碳化硅（silicon car⁃bide，SiC）为代表的第3代宽禁带半导体功率器件凭借自身的众多优良性能，如：拥有更高的耐压等级、更高的开关频率、更优良的温度特性和更低的导通损耗，可以显著提高变换器功率密度、运行效率以及整体可靠性，并大大缩小变换器的体积和重量，实现系统的小型化和轻量化，正逐步成为电力电子装置的理想开关器件，在电力系统、飞机舰船、高速铁路、新能源发电、电动汽车等军事和民用领域显示出了巨大的应用潜力。

在很多应用场景，功率开关器件都需采用隔离驱动的方式，隔离驱动一般有光隔离和磁隔离两种方式。而以 SiC 为代表的第 3代半导体功率器件的工作频率远高于传统硅基功率器件，采用脉冲频率调制（pulse frequency modulation，PFM）时，频率范围宽；采用脉冲宽度调制（pulse widthmodulation，PWM）时，脉冲宽度变化范围大。传统的光电隔离器件难以满足要求，而高速光耦价格贵；常规的脉冲变压器隔离难以满足宽频率范围要求。

针对上述问题，本文设计了一种宽频隔离 SiC 功率器件驱动电路，采用脉冲变压器隔离，频率范围宽，能够实现 0 Hz～500 kHz信号传递，驱动能力强，抗干扰能力强，电路简单，价格低廉。最后，通过实验验证了该驱动电路的可行性和有效性。

1 总体技术方案

驱动电路总体技术方案的系统框图如图1所示。驱动电路由两部分构成，即驱动信号处理电路和辅助电源。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLInATIq77ibrn6pNOac822Q0DXjtbcObT1tfyZtNWVgZq0VUa0llHzyibA/640?wx_fmt=png&from=appmsg)

驱动信号处理电路采用双边沿调制与解调技术，用脉冲变压器对驱动信号进行隔离。来自上一级控制电路的 PWM 信号，经过两个边沿识别调制电路，可以获取上升沿和下降沿，然后再对上升沿和下降沿进行处理，形成具有一定宽度的窄脉冲，通过高频脉冲变压器发送到次级。次级接收电路接收到边沿信号后送入解调电路，获取到高低电平信号，最后再经功率放大电路进行放大，使之具有足够的驱动能力。

为了保证 SiC 功率器件快速可靠地导通，驱动电路要提供足够高的正向驱动电压；为了增强SiC功率器件的抗干扰能力，避免误导通，驱动电路又要提供稳定的负向驱动电压。辅助电源为驱动信号处理电路的次级电路提供正、负双向电源，保证SiC功率器件稳定可靠地工作。辅助电源通常采用反激变换器，技术成熟，本文不做重点介绍。

2 双边沿调制与解调电路

2.1 电路结构和工作原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIoJiaVjd0lZnXlfX0FhhQ5OtLKj3Pz9L9ywQUeZvBNfHawVKiaYGDXMdw/640?wx_fmt=png&from=appmsg)

图 2 为双边沿调制与解调电路结构图。图中，vi为输入的 PWM信号，U1～U7为 7 个反相器，T1为脉冲变压器，U8为比较器，vo为输出到SiC 功率器件门极的驱动信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLISYHNWicfJMVqqqjCFWkaiaFzxaJTdBqxD0mH7U2vic2x5iaVTI0v0lnaUw/640?wx_fmt=png&from=appmsg)

图3为双边沿调制与解调电路波形。识别输入的 PWM 信号边沿的方法是在信号电平由低变高时，利用 RC 充放电过程来实现。为了提取下降沿信息，需要先把下降沿转变为上升沿，因此驱动信号的上升沿和下降沿是通过两个电路来完成的。在识别信号边沿之前，先将输入信号 vi分为两路信号，一路为其反相信号，通过一个反相器 U5实现；另一路信号为其同相信号，为了保证不对另一路反相信号产生干扰，此路信号通过两级反相器保持与输入信号的同相性。

首先分析输入信号上升沿的工作原理。假定初始时刻输入信号 vi为低电平，则 A1，A2和 A43 处均为低电平，A3处为高电平，电容 C1上无电压。t0时刻，上升沿来临，输入信号由低电平变为高电平，则 U2的输出 A1处也跳变为高电平，如图3 中所示。因为电容C1两端电压不能突变，所以A2处电压也跟随A1突变至高电平；A3处是A2的反相，因此电压突变至低电平；A4处电压又是 A3的反相，所以跟A2一样也是高电平。A2变为高电平后，R1上必然有电流流过，电容 C1上也有相同电流，该电流对C1进行充电，C1两端电压不断增加。因为A1处电压保持高电平不变，因此A2处电压逐渐降低。电容C1两端电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIlh9911rAsqauBf5mAh4yux7AIrwBukTW6ISlaV7fVFu3YRuBKoOxxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLImbCGq6GY1rZ7tiazSry7a3KDkjq82VE8Q4Qm5kic3Av1Js25TvqdjicHQ/640?wx_fmt=png&from=appmsg)

当A2处的电压下降到反相器的阈值电平以下时，A2处可认为由高电平变为了低电平，A3则由低电平变为了高电平，A4由高电平变为了低电平。这样，从输入信号的上升沿开始至A4从高电平变为低电平这段时间，A4处获得了一个窄脉冲，该脉冲为驱动信号上升沿的调制信号，包含了信号上升沿的时间信息。

A4处获得的代表上升沿的调制窄脉冲，作为高频脉冲变压器的初级输入信号，同步传递至脉冲变压器的次级。根据变压器同名端关系，上升沿窄脉冲经D3在A5处得到同步窄脉冲，因变压器次级匝数为初级的 n倍，因此 A5处窄脉冲电压幅值为A4的n倍。电压被放大的窄脉冲经R5送至比较器U8的同相输入端，使同相输入端电压高于反相输入端电压，则比较器U8输出为正向高电平。一旦比较器输出电平变高，则输出高电平会通过R7反馈回同相输入端，以保持同相输入端正向高电平。此后即使窄脉冲高电平结束，也能够依靠R7的正反馈作用，维持输出端为正电平，直至比较器反相输入端有高电平出现，比较器输出才会变为负电平。这样，A4处的调制窄脉冲就解调成了电平信号。

输入信号 vi的下降沿调制、整形以及传送到比较器反相输入端的过程与上升沿类似；A6～A10处的电压波形与A1～A5是相同的，只是对应的时间不同。具体分析过程不再重复。需要说明的是，vi的下降沿调制是通过其反相信号即 A6处的上升沿来完成的，因为A6的上升沿对应输入信号vi的下降沿，因此二者包含的时间信息是相同的。

通过以上过程，输入的PWM信号经过边沿识别、调制、发送、接收、解调和放大等处理过程，可得到隔离的满足SiC功率器件驱动要求的驱动信号。

2.2 电路主要参数设计

参数设计主要是 RC充放电回路中阻值和容值的设计、输出端比较器正反馈网络的设计以及高频变压器的设计。

2.2.1 RC充放电回路参数设计

对上升沿和下降沿的处理是相同的，因此 R1和 R2，C1和 C2的值分别相同。假定反相器集成芯片阈值电平为 1.4 V 左右，RC 充放电回路的时间常数τ在设计时需要做出权衡。为了提高驱动电路的工作频率，A4和A9处生成的上升沿和下降沿脉冲要足够窄，这要求前面的 RC 充放电速度要足够快，也即RC 充放电时间常数τ 要足够小，对于500 kHz工作频率，τ应满足：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIAMyxBSz1viaDeVACPfOpPUCeoUKzWF0g1piaqPWBEtwd55pZeMrswWqQ/640?wx_fmt=png&from=appmsg)

2.2.2 高频脉冲变压器设计

本驱动电路所用脉冲变压器主要功能是传递边沿信号，传递的能量非常小，绕组通过的电流非常小，因此对绕线的集肤深度、线径计算、与功率相关的计算等过程都可以忽略。脉冲变压器通过的脉冲窄，等效频率高，携带能量小，磁感应强度变化小，需要的磁芯尺寸很小。可选择市面上常见的铁硅铝磁环。

综合体积、尺寸和制作工艺难度，选择了T044-125A铁硅铝磁环，外直径约11 mm。具体参数为：有效磁路长度2.69 cm，有效截面积0.09 cm2，体积 0.243 mm3，窗口面积 0.273 cm2。铁硅铝磁环的外形尺寸如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIg4YZ1a2sWODoaZFNvqlRAU4X4WmbicfedG0aL8Tb3UqmxdHFicqHxy3A/640?wx_fmt=png&from=appmsg)

变压器匝比由初级脉冲电压和次级脉冲电压决定。变压器初级侧电路为 5 V 供电，次级侧比较器为15 V供电，为了保证次级脉冲有足够的电压，选择变压器匝比为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLINCjmvE10GDib6c1Jk8JTLMk5dTnTTm5A3grpqHs8zpGruibw7xicztjfQ/640?wx_fmt=png&from=appmsg)

2.2.3 比较器电阻网络设计

在图2中，脉冲信号的接收、比较器输出电压反馈是通过R3～R8这6个电阻实现的。脉冲信号通过R3和R4建立起比较器的输入电压信号。

为了保证比较器输出端电压被驱动信号上升沿或下降沿窄脉冲触发后能够通过正反馈锁定输出状态，要满足的条件是：当上升沿和下降沿脉冲都消失后，①在比较器U8输出电压为正电平时同相输入端电压要高于反相输入端电压；②在输出电压为负电平时反相输入端电压要高于同相输入端电压。比较器 U8输出电压为正电平+VDD时，比较器同相输入端电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIcibqwUc4fFbHODE9r5JOZw4H4RlcykSA4R4DQQytbzu7uOOxReStvaQ/640?wx_fmt=png&from=appmsg)

比较器输出电压反转的条件如下：

1）输出为负电平，某一时刻驱动脉冲上升沿脉冲到来，其通过 R3建立高电平，设经过 D3后其幅值为Vp，则合成后的同相输入端电压为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIxUa7pEOF9OYppwZiaS8OXVpDzO5JPXU4OvuwaeO39zmiceBiaAElQxuWw/640?wx_fmt=png&from=appmsg)

2.3实际电路原理图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIlcXQZQs2zXCLKUpumpAeNJVicWfiaRzc8eQqu1xOZScibJXibZ1xYtOxow/640?wx_fmt=png&from=appmsg)

实际电路原理图如图5所示。根据设计参数设计了实际电路，反相器选用集成芯片HEF4069，比较器选用集成芯片LM311，并加入必要的启动和保护电路。

需要注意的是，要使驱动电路正常工作，设计时要注意上升沿和下降沿窄脉冲不能有重叠部分，否则上升沿和下降沿会被上一个脉冲影响，导致频率和相位发生变化，进而影响功率开关器件的开关逻辑和时序。

3 实验验证

根据电路原理图，绘制印刷电路板（printedcircuit board，PCB）并进行调试，图 6 为研制成功的双边沿触发隔离驱动硬件电路板。该电路板中包含两路隔离驱动电路，方便驱动一个桥臂的SiC 功率开关器件。电路板为双面板，长宽高尺寸为75 mm×25 mm×8 mm，体积小，重量轻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIRTcuhZsA8G15En5uCGZ3nQNUqNesOXowibJOHL35yUgIforuktcPaKA/640?wx_fmt=png&from=appmsg)

图 7 为上升沿识别、调制及发送过程主要波形。图7a为A2点RC充放电电压波形；图7b为A3点对 A2点电压进行反相整形的波形；图 7c 为 A4点形成的上升沿窄脉冲，此时变压器初级是断开的，波形质量好；图7d为变压器初级连接、次级断开的输入信号和A4点上升沿窄脉冲，因受脉冲变压器和下降沿窄脉冲的影响，波形发生变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIGgTsPmiaLn8y5vQZCtxib5UiaTbZSbmpeTGT4TdibxcA2ZJEGGoLLe6AeA/640?wx_fmt=png&from=appmsg)

图8为100 kHz输入信号和边沿窄脉冲波形。其中，图8a为A4点上升沿窄脉冲波形；图8b为A9点下降沿窄脉冲波形。因为脉冲变压器的存在，脉冲顶端不是平的，但不影响驱动器的工作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLIJemwlSEjvuYXSD9MFJx6kyseUYMqcfqypEiaD5HyBdLSqUXC36MAPOA/640?wx_fmt=png&from=appmsg)

图 9 为输入信号频率在 1 Hz～300 kHz 时驱动电路输入和输出波形。其中，图9a为1 Hz时的波形；图9b为100 Hz时的波形；图9c为10 kHz时的波形；图 9d 为 100 kHz 时的波形；图 9e 为 300kHz时的波形。可以看出，当频率达到100 kHz以上时，输出驱动波形相对于输入信号有少许延时，这是因为电路工作过程中每一级信号传递都会有一些延时，但只要电路参数一样，延时是对称的，不影响所驱动电路的工作。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNA15EGAUJHxiaDsFSvCeLITdbydWfoKQOiad3KSicnP93EvTwE6ib0xvYAOvwGuJA9OVPibkNRca8J0A/640?wx_fmt=png&from=appmsg)

4 结论

本文采用双边沿调制与解调技术设计了一种宽频隔离 SiC 功率器件驱动电路，详细介绍了边沿调制与解调技术和驱动电路的工作原理，论述了电路参数设计准则，通过理论分析和实验验证，主要得出如下结论：

1）该驱动电路频率范围宽，能够实现0 kHz～500 kHz信号传递，传输的脉冲宽度范围大，脉冲宽度大于1 μs的信号均可被传输；

2）该驱动电路采用脉冲变压器隔离，只需传递边沿信号，传递的能量非常小，能耗小，体积、重量小，成本低，电路原理简单，容易制作；

3）实验证实了该驱动电路的可行性和有效性以及电路参数设计原则的正确性。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqb8Po3qdBDOEjHEmo3DibcFdSeQxPepq4CgmLpeSttlMicicb3ru8mu738A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)