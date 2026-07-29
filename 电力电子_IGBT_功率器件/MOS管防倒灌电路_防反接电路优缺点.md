# MOS管防倒灌电路,防反接电路优缺点

原创 电路一点通 2024-05-21 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/Dke449JHv9Oh2BIsIJOJOg](https://mp.weixin.qq.com/s/Dke449JHv9Oh2BIsIJOJOg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_000_9720861dec97.other)

**  
**进大家庭⭕圈探讨回复: 交流  
****

**  
典型电路**

**1、电路1**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_001_14da7d348870.png)

说明：

GND-IN　　为电源接口的负极

GND　　　 为内部电路的公共地

**原理分析**

正向接：

VCC-IN通过R1、R2、MOS体二极管，最后回到GND-IN;然后GS电压升高，紧接着SD沟道形成；沟道电阻很小，将MOS体二极管短路。

**反向接：**

MOS体二极管截至  
  

**2、电路2**

说明：

GND-A-24V　　为电源接口的负极

GND-A　　　 为内部电路的公共地

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_002_1a5d9861eef8.png)

**原理分析**

正向接：

VCC-IN通过R1、R2 ，最后回到GND-IN;然后GS电压升高，紧接着SD沟道形成，GND-A-24V便接在了GND-A上。

**反向接：**

虽然 MOS体二极管这时正向接，但是由于GND-A上端接的是我们的电路，电路的上端是VCC-A-24V-IN，所以还是无法通过；事实上GND-A-24V根本接不进我们的电路以形成回路。  
  

**二、优缺点**

1、优点

由于正向接导通时，MOS管Ron很小，压降非常小，基本保证了GND和GND-IN等电位。

而串联二极管会有一定的压降。

2、缺点  
电路复杂，价格也高。

  
  
**延申阅读****：****简单易懂的PMOS管放倒灌电路**

如下电路图所示，此种应用，由PMOS来进行电压的选择，当VIO9V电压存在时，此时电压全部由VIO9V提供，将PMOS关闭，VBAT4.2V不提供电压给VBAT\_OUT。而当VIO9V为低时，VBAT\_OUT由VBAT4.2V供电。注意R120的接地，该电阻能将栅极电压稳定地拉低，确保PMOS的正常开启。D1和D2的作用在于防止电压的倒灌，D2可以省略。这里要注意到实际上该电路的DS接反，这样由体二极管导通导致了开关管的功能不能达到，实际应用要注意。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_003_b5466197e18c.jpg)

下图这个电路，控制信号G\_CTRL控制VB4.2+是否给VCC\_OUT供电。此电路中，源漏两端没有接反，R2与R3存在的意义在于R2控制栅极电流不至于过大，R3控制栅极的常态，将R3上拉为高，截止PMOS。同时也可以看作是对控制信号的上拉，当MCU内部管脚并没有上拉时，即输出为开漏时，并不能驱动PMOS关闭，此时，就需要外部电压给予的上拉，所以电阻R3起到了两个作用。R2可以更小，到100欧姆也可。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_004_165d555e8b96.png)

如下放倒灌电路，也可以使用Pmos实现电路的防反接保护功能。当电源接反时,从而使得PMOS不导通，后级电路断开。电路如下图，加入稳压管是为了更好的保护MOS管，这里保护过程和NMOS管差不多。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_005_9db1ccd0d67c.png)

MOS管防倒灌电路设计如下图所示:在某些应用中,如电池充电电路中, B点是充电器接口, C点是电池接口，为了防止充电器拔掉时,电池电压出现在充电接口。

(Q1、Q2、Q3共同组成防倒灌电路)注意Q3的DS反向接于电路,这样做是防止MOS的体=极管对电路产生的影响(如果Q3按常规方式接在电路中, C点接电源则会在B点出现电压)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87le4NoSmJfDXxxBYBjXmHnia1uLnulaUfAPDAoXVR82mPeibvG1AuzA0ibJ8KuFiaj1TTCqEjczYDJMFCw/640?wx_fmt=jpeg&from=appmsg "MOS管防倒灌电路")

电源自动切换

MOS管防倒灌电路

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87le4NoSmJfDXxxBYBjXmHnia1h0YeTHGDLWOHnOaphumWNve5IKSUvQAW3qaKLls1mVNBTFweqfvfXg/640?wx_fmt=jpeg&from=appmsg "MOS管防倒灌电路")

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路_防反接电路优缺点_images\img_008_b0a8c1390773.other)