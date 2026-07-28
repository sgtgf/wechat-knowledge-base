# LLC原理讲解

原创 硬件笔记本 2022-08-12 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/Kgcj7CeOcmobkkDQFbBR3g](https://mp.weixin.qq.com/s/Kgcj7CeOcmobkkDQFbBR3g)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

与传统PWM（脉宽调节）变换器不同，LLC是一种通过控制开关频率（频率调节）来实现输出电压恒定的谐振电路。它的优点是：实现原边两个主MOS开关的零电压开通(ZVS)和副边整流二极管的零电流关断(ZCS)，通过软开关技术，可以降低电源的开关损耗，提高功率变换器的效率和功率密度。

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23UDBKGznDDbE1O2M0lAW09AVOh1l4ia73ibjTuPabWEHBTTDXVfFaagEw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学习并理解LLC，我们必须首先弄清楚以下两个基本问题：

**1.什么是软开关；**

**2.LLC电路是如何实现软开关的。**

由于普通的拓扑电路的开关管是硬开关的，在导通和关断时MOS管的Vds电压和电流会产生交叠，电压与电流交叠的区域即MOS管的导通损耗和关断损耗。如图所示：  

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23gyyB5s7w9hribFMicPqFNtjTSfy7F2iaBxN2Ky8yOU9zDDcgAbx7lzBsw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

为了降低开关管的开关损耗，提高电源的效率，有零电压开关(ZVS) 和零电流开关（ZCS)两种软开关办法。 

  

  

1

零电压开关 (ZVS)

开关管的电压在导通前降到零，在关断时保持为零。

  

2

零电流开关（ZCS)

使开关管的电流在导通时保持在零，在关断前使电流降到零。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23VCStichbhXrJwjicFAR7cH1LBuVzkCIpZbluDAGzQdOb5HJWSKPiaLCsg/640?wx_fmt=jpeg)

**由于开关损耗与流过开关管的电流和开关管上的电压的成绩（V\*I）有关，当采用零电压ZVS导通时，开关管上的电压几乎为零，所以导通损耗非常低。**

  

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz235eVtnd5iaDDVc0nKOMq3Gd3ibFNY509Uk6NfNiabvNPjF1E7T1XRlza6w/640?wx_fmt=jpeg)

►Vin为直流母线电压，S1，S2为主开关MOS管（其中Sc1和Sc2分别为MOS管S1和S2的结电容，并联在Vds上的二极管分别为MOS管S1和S2的体二极管），一起受控产生方波电压；  

  

►谐振电容Cr 、谐振电杆Lr 、 励磁电杆Lm一起构成谐振网络；  

  

►np，ns为理想变压器原副边线圈；  

  

►二极管D1, 二极管D2，输出电容Co一起构成输出整流滤波网络。

  

  

**那么LLC电路是怎么实现软开关的呢？**

  

要实现零电压开关，开关管的电流必须滞后于电压，使谐振槽路工作在感性状态。

  

LLC 开关管在导通前，电流先从开关MOS管的体二极管（S到D）内流过，开关MOS管D-S之间电压被箝位在接近0V（二极管压降），此时让开关MOS管导通，可以实现零电压导通；在关断前，由于D-S 间的电容电压为0V而且不能突变，因此也近似于零电压关断（实际也为硬关断）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23jppkicNCzGSbibJH9kSmuEjb4uETqticicklG6rSguzvE1dl7vDGFFNcag/640?wx_fmt=jpeg)

  

  

**那什么是谐振呢？**

  

我们不妨先看看电感和电容的基本特性：

与电阻不同，电感和电容都不是纯阻性线性器件，电感的感抗XL和电容的容抗Xc都与频率有关，当加在电感和电容上的频率发生变化时，它们的感抗XL和容抗Xc会发生变化。  

  

1、如下图RL电路，当输入源Vin的频率增加时，电感的感抗增大，输出电压减小，增益Gain=Vo/Vin随频率增加而减小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23boMrrcyUczqP2RjkoTIZNIm96Mdo6Juyu83oXkh91KKkd3T952NicyQ/640?wx_fmt=jpeg)

2、如下图RC电路，相反，当输入源Vin的频率增加时，电容的容抗减小，输出电压增大，增益Gain=Vo/Vin随频率增加而增加。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz236AiatiaEicIcgcyb3d07wIqanOc8zLgZz3rr6meGEFXIFa74oBibox963A/640?wx_fmt=jpeg)

  

**下面我们分析一下LLC谐振电路的特性**

  

如图，当我们将L和C都引入电路中发现，当输入电压源的频率从0开始向某一频率增加时，LC电路呈容性（容抗＞感抗），增益Gain=Vo/Vin随频率增加而增加，当从这一频率再向右边增加时，LC电路呈感性（感抗＞容抗），增益Gain=Vo/Vin随频率增加而降低。这一频率即为谐振频率（此时感抗=容抗，XL=Xc=ωL=1/ωC）,谐振时电路呈纯电阻性，增益最大。

  

谐振条件：感抗=容抗，XL=Xc=ωL=1/ωC

  

谐振频率：fo

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23XFWEWebj5jAuYz2ILwoticqyVnqbdfu5b3pqTPgVxChMuHHG3UWK5Og/640?wx_fmt=jpeg)

  

  

**那么谐振有什么作用呢？**

  

控制让谐振电路发生谐振，有三个参数可以调节。由于L和C的大小不方便调节，通过调节输入电压源的频率，可以使L、C的相位相同，整个电路呈现为纯电阻性，谐振时，电路的总阻抗达到或近似达到极值。利用谐振的特征控制电路工作在合适的工作点上，同时又要避免工作在不合适的点上而产生危害。

  

  

**LLC稳定输出电压原理  
**

  

将LLC电路等效分析，得到i如下简化电路。当交流等效负载Rac变化时，系统通过调整工作频率，改变Zr 和Zo的分压比，使得输出电压稳定，LLC就是这样稳定输出电压的。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23ABxfJlosfvQpCDCicMhiaOSkV8syxpa1QhMFChuQEQdt9xicZDfo3AjWw/640?wx_fmt=jpeg)

  

对LLC来说，有两个谐振频率，一个谐振频率fo是利用谐振电感Lr谐振电容Cr组成；  
另一个一个谐振频率fr1是利用谐振电感Lr，励磁电感Lm，谐振电容Cr一起组成；

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tN2efU0iaCjvLElwRaFORz23ec7Ksibb35ZibnjI1ctiaLv4qUxFKmYIYl3uPa28FdlJ7FxqkL3h6k8Og/640?wx_fmt=jpeg)

  

  

**▼再来看一份更为详细的LLC工作模态分析：**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrXq0oiadTRyHaclsRicwlNE7uHAlibXmO48WpoGAVBUp6l3VdGjokytlMg/640?wx_fmt=jpeg)

开关网络：S1、S2及其内部寄生二极管Ds1\\Ds2、寄生电容Cds1\\Cds2;

谐振网络：谐振电容Cr 、串联谐振电感Lr 、并联谐振电感 Lm;

中心抽头变压器（匝比为n:1:1），副边整流二极管 D1、D2；

输出滤波电容Co （忽略电容的ESR），负载 Ro。

  

**1.1 LLC变换器的模态分析**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrFibhh318GkyFXHItknLOSRE4NHIH4zDf0gxCmBg4GmPXxDDjXoAI31Q/640?wx_fmt=jpeg)

**对于LLC电路，存在两个谐振频率：**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrR2IxBsgGfztR9sOmuNayCjOlKiboC7FunicF4F0ZS3RBzdUibqCTmQPxw/640?wx_fmt=jpeg)

  

**1.1.1 工作区域2(fr2<f<fr1) 模态1**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrQlBMqZzlVxcc6ibvzJqug7QfNvg4LLRWsXAzIKibBxcX1PIdZY9x7ib9Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsr2ZrRbcGDMWpMia3PrJg6wdcNG86c28KibQBibgsicHCxU6uNun4HUczxmw/640?wx_fmt=jpeg)

  

**1.1.2 工作区域2(fr2<f<fr1) 模态2**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrhLrXkBib72QqG7K8KeuzgPykGmKzNmHzhcAnfL41266brGcancj2XfA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsr0Af23pbWIOALjkoeJQBo7YmiaWd57tCH9ibvUMwnibkewWkZrchtmywRw/640?wx_fmt=jpeg)

**1.1.3 工作区域2(fr2<f<fr1) 模态3**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsruImBsxUeryklQxsTAu3DM95IcDn7Dhgsp0eTXyic0ts70GODnIdTWIg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrvk1OnJGQgNexbbO3yTb3bh5aVoU0D4icNPXZGKwbzyVUQnED4KU1G9w/640?wx_fmt=jpeg)

**1.1.4 工作区域2(fr2<f<fr1) 模态4**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsricKHCORqTsZoxI13qV5xwYJtXPjpqicp8TgbGmKia3HZiby4eNemutJpsg/640?wx_fmt=jpeg)

**1.1.5 工作区域2(fr2<f<fr1) 模态5**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsr3U6nWptSQpgmKsE68IOxuAjxyE3qMOPtjPN5TYBHFybCmcVXBIicerg/640?wx_fmt=jpeg)

  

**1.2 f=fr1 情况下的波形图**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsr8NlKPTy8Xrcdo6ZkKJiaE82UvL82yvDM5ichpA4iajCD7HnUqveuBOKhg/640?wx_fmt=jpeg)

  

**1.3 f>fr1情况下的模态分析**

  

**1.3.1工作区域1（f>fr1） 模态1**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrgFuOoq6rZtfvoQGPw6Q6lt5ib6dcxUIPlyKuS6GXaAib8Eic47E4LJIvw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrT37M97Nln7OR6fPiaYYrCWcd4k5yNIqjPJrVqfZT9axSbrc8eKx1SSQ/640?wx_fmt=jpeg)

  

**1.3.2工作区域1（f>fr1） 模态2**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrIib93CQbibsnpYDYjgxfOia5w9yEuS8MNxmQ0KRhyXh8YMI7QwoFibWB8A/640?wx_fmt=jpeg)

  

**1.3.3工作区域1（f>fr1） 模态3**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsrWes6PhI8tDyibW5eO65b4pibOMmZXayRWRySBudwsuaKdicgVJlMRwTfA/640?wx_fmt=jpeg)

  

**1.3.4 工作区域1（f>fr1） 模态4**

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdIiawibWgBA4KSWA1frricUsro2rW94a6bamh0Hw9bDEXcKeBa29fibP9rKrAwgfot55eyQBQyJUTibVA/640?wx_fmt=jpeg)

  

**总结：**开关频率fr2<f<fr1时，且谐振网络工作在感性区域时，LLC变换器原边开关管实现ZVS，且流过输出整流二极管的电流工作在断续模式，整流二极管实现ZCS，消除了因二极管反向恢复所产生的损耗；

  

开关频率f=fr1时， LLC谐振变换器工作在完全谐振状态，原边开关管可以实现ZVS，整流二极管工作在临界电流模式，此时可以实现整流二极管的ZCS，消除了因二极管反向恢复所产生的损耗；

  

开关频率f>fr1时， LLC谐振变换器原边开关管在任何负载下都可以实现ZVS，但是变压器励磁电感由于始终被输出电压所钳位，因此，只有 Lr、Cr 发生串联谐振，而 Lm在整个开关过程中都不参与串联谐振，且此时输出整流二极管工作在电流连续模式，整流二极管不能实现ZCS，会产生反向恢复损耗。

  

后台回复“**加群**”，管理员拉你入技术交流群。