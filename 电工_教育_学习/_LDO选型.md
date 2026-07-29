# ​LDO选型

原创 硬件笔记本 2022-08-11 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/Gf40huCEOYcioRkNVWniYg](https://mp.weixin.qq.com/s/Gf40huCEOYcioRkNVWniYg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

**1.LDO基本原理**

  

LDO是Low Dropout Regulator的缩写，意思是低压差线性稳压器。

  

低压差 是指输入电压-输出电压的值比较低。传统的线性稳压器压差高达2V，而LDO的压差只有几百mV。

  

线性 是指PMOS基本处于线性工作状态（传统的线性稳压器是PNP原理，也工作在线性放大状态）。

  

稳压器 是指在正常的VIN范围内，输出VOUT都稳定在一个固定值，这个固定值就是我们想要的电压值。比如VIN是电池电压3~4.4V，VOUT始终保持2.7V输出。

  

**下图是一个简单的LDO原理框图：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_002_b0243b348d73.png)

  

LDO是一个负反馈系统，当VOUT增大，R2上电压增大，放大器输出电压增大，PMOS的VGS电压减小，这样PMOS输出电流减小，电压也减小。所有的LDO都是同样的负反馈原理。

  

我们经常拿LDO与DCDC做对比，两者的原理差别很大，特性也不一样：LDO简单，功率小，效率低，噪声非常低。DCDC复杂，功率大，效率高，噪声也很高。

  

重点说明一下，LDO有非常好的噪声隔离作用，具体指标是PSRR，它表示输出噪声对输入噪声的比值。在一些对噪声敏感的电路中，如ADC，DAC，Camera sensor模拟电压等，必须选择LDO，而且是高PSRR的LDO，而不是DCDC。下文解释一些LDO的关键技术指标。

  

  

**2.LDO关键参数的理解**

  

以TOSHIBA的TCR3DG系列LDO为例，解释一下LOD的各项参数指标。这个系列的LDO在手机行业应用非常多。

  

**2.1压差（Drop-out Voltage）**

压差是指保证VOUT输出电压、电流情况下，VIN与VOUT的最小电压差。这个压差可以理解为LDO输出电流在PMOS上的压降。PMOS有导通电阻，假设VIN=3.4V，VOUT=3.2V，输出电流300mA，则可以推算出PMOS的内阻是

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_003_42d2f93a9b39.png)

  

LDO工作必须满足压差要求，但压差不是一个固定值，它与IOUT大小有关。下图是一个VOUT=1V的LDO的输出电流与压差要求的关系曲线，可见输出电流越小，对压差要求也越小。压差越小，LDO的效率越高。所以尽量不要让LDO工作在接近极限的大电流状态，否则效率很低，LDO发热严重，容易烧毁。  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_004_5e9996964e62.png)

**2.2效率**

LDO效率定义如下：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_005_cd0c42c281fe.png)

  

其实IOUT和IIN基本是相等的，因为IIN就比IOUT多了个IGND，这个电流非常小，几乎可以忽略。所以效率公式简化如下。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_006_8628b7e394d4.png)

  

可以简单把LDO看做是一个稳压管，压差越小，LDO的效率越高。

  

**2.3静态电流（IQ）**

静态电流Quiescent Current是外部负载电流为0时，LDO内部电路供电所需的电流。内部电路包括带隙基准电压源、误差放大器、输出分压器以及过流和过温检测电路。这个电流经过从LDO的GND流出。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_007_de295ffd7973.png)

  

静态电流受温度和输入电压影响较大，高性能的ADI品牌LDO可能做到静态电流对温度电压不敏感。下面两幅图是一个普通的LDO静态电流随VIN和温度变化的曲线。常温下静态电流一般在uA和nA级别。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_008_1dd9d1322cab.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_009_9e93be58d710.png)

  

当输出电流增大时，这个时候的静态电流IQ，我们称期为IGND，某些大功率的LDO，IGND也到了mA的级别：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_010_41a7bdcc1566.png)

  

大部分LDO的IQ很小，它是衡量LDO在低负载情况下的自身消耗的一个重要指标，IQ越小越好。在消费类电子领域，低IQ有利于更长的续航时间，低IQ值显得尤为重要。

  

**2.4关断电流**

LDO的输出使能管脚ENn拉低后，VOUT=0V，此时VIN上消耗的电流就是关断电流IQ（OFF）。关断电流最高不会超过几个uA。

  

**2.5负载瞬态响应**

负载电流IOUT阶跃变化时，输出电压VOUT的变化率。它与输出端的电容值，电容的ESR，LDO控制环路的增益带宽以及负载电流变化的大小和速率有关。文章开头已经讲了，LDO是一个负反馈回路，其相位裕量越大，负载的瞬态响应越好。下图是ADP165和TCR3DG的瞬态响应对比。第一幅图VOUT电压变化了约5.7%，第二幅图VOUT变化了2.6%。东芝的LDO胜出。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_011_9465165b7702.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_012_924c48cc3bb7.png)

  

有些厂家用电流负载调整率来表示这个值，公式如下：

负载调整率=∆VOUT/∆IOUT

道理是一样的。

  

这个指标对输出纹波有影响，越小越好。

  

**2.6线路瞬态响应**

表示VIN阶跃变化，VOUT的变化情况，如下图。输出电压偏差显示了环路带宽和PSRR的特性，对于1.5us内的2V变化，输出电压变化约2mV，表明1KHz是PSRR约为60dB。当VIN缓慢变化时，可能只会看到一个凹陷，没有振铃。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_013_06efd66b405f.png)

  

有些规格书称这个指标为电压负载调整率，并给出了公式，电压负载调整率=∆VIN/∆VOUT。道理是一样的。

  

Line Transient Response 随负载电流增加而变差，因为LDO的总环路增益不断降低。此外，LDO的功耗也随着电压差的增大而增加，这会导致PMOS结温升高而使带隙电压和内部失调电压降低。

  

这个指标对输出纹波有影响，越小越好。

  

**2.7电源抑制比PSRR**

表示LDO对VIN上的噪声的抑制能力，公式如下：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_014_c04bc50a604f.png)

  

100K到1MHz内的PSRR非常重要，这个是DCDC的噪声频率范围，LDO经常作为DCDC的下一级，要有能力滤除来自DCDC的大量噪声。

  

在ADC，DAC，Camera的AVDD供电上，我们要选择PSRR大于80dB（@100Hz）的LDO。

  

LDO的环路控制往往是确定电源抑制性能的主要因素，同时大容量，低ESR的电容对电源一直也非常有用，建议选择陶瓷电容。

  

PSRR与频率有关，LDO的规格书一般会给出几个频点的PSRR值。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_015_150cf1c4e74d.png)

  

PSRR与IOUT有关，通常情况下，轻载的PSRR高于重载。PSRR与LDO的相位裕量也有关系，

  

**2.8输出噪声电压**

恒定输出电压电流，VIN上无纹波，给定范围内（10Hz~100KHz），VOUT上的噪声电压RMS。这部分噪声主要来自于LDO内部基准电压源和误差放大器。如下是某LDO的噪声水平，通常在uV级别。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_LDO选型_images\img_016_d538b9d498ac.png)

  

LDO输出噪声的另一种表示方式是噪声频谱密度。只有高精度，低噪声电路上才需要关注这个参数。

  

**2.9 自放电功能**

LDO关闭后，负载电容上仍然后电量。LDO在下次输出时，会因为这个电量，产生一个快速的Voltage Spike，虽然幅度不高，但对后级电路也会有破坏性。带自放电功能的LDO能在LDO关闭输出后，泄放输出电容上的点电量。

  

  

**3.LDO的输出稳定性要求**

  

LDO是一个负反馈系统，VIN和VOUT上的电容值，ESR都会影响这个系统的稳定性，最主要是ESR在影响稳定性。在LDO的规格书中，都会列出对输入电容CIN和输出电容COUT以及ESR的要求。一定要遵守这个要求。

  

TCR3DG规格书中要求COUT的ESR不得大于10Ω，位置靠近LDO，没有其他明确要求，但是推荐CIN和COUT都用1uF。

  

ADP165规格书中要求CIN和COUT最小值0.7uF，ESR在0.001~0.2Ω之间。

  

LP5907SNX-1.8的规格书要求CIN＞0.7uF；COUT=1uF-10uF，ESR=0.005~0.5Ω。

  

所以几乎每一家的LDO，CIN和COUT都要求1uF以上，ESR越低越好，最好小于100mΩ，但也不能太小，低于几个mΩ也可能使LDO工作不稳定。

  

  

**4.LDO选型参考**

  

确定输出电压VOUT，建议选择固定输出电压的，不要选有ADJ功能的，这样节省器件，降低干扰。

  

确定输出电流IOUT，至少留25%裕量。

  

确定压差是否合适，一定要查看规格书上，对应最大电流的最小压差要求。

确认封装，手机上一般用1x1 CSP的LDO

  

确认PSRR，如果用在低噪声场合，一定要选择高PSRR（80dB以上）的LDO，建议在80dB以上。

  

如果是电池供电，对续航要求很高，一定要选择IQ低的LDO。

  

注意LDO的CIN和COUT要求，千万不要错。

  

如果要快速响应，可以选择带偏置电压的LDO。

  

  

**5.PMU的LDO类型**

  

MT2503平台的PMU的11个LDO输出中，有给RF Amplifier供电的低噪声LDO，有在待机时不下电的低静态电流LDO。有在关机后仍然会工作的给RTC供电的超低静态电流LDO。

  

原文链接：https://blog.csdn.net/AirCity123/article/details/104213243

  

后台回复“**加群**”，管理员拉你入技术交流群。