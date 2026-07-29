# USB/锂电-电源自动切换电路

原创 电路一点通 2025-10-07 11:52 广西

> 原文地址: [https://mp.weixin.qq.com/s/vxP56Lgz5VUNHq7R7exUmw](https://mp.weixin.qq.com/s/vxP56Lgz5VUNHq7R7exUmw)

很多电子产品中都用电池供电，通过USB充电。当插上USB的时候，如果设备仍然需要工作，我们希望通过USB供电同时切断电池的供电。下面就介绍如何通过一个二极管、一个电阻和一个PMOS管来实现。  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_000_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

设计该种电路时的原则：

1\. USB插入后，由USB供电，电池不供电。

2\. USB插入后，USB的线路不能直接向电池充电。

## 一、电路分析

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_001_8efe8e1fab9f.png)

图1 USB/锂电-电源自动切换电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_002_02a333eba420.png)

图2 图1的等效电路

USB电压为5V，电池选择锂电池，满电电压4.2V。当没有接USB的时候，PMOS的G极通过电阻接到了GND，所以G极的电压为0V。PMOS的D极通过内部的续流二极管通到了S极，S极的电压就是4.2V-0.7V=3.5V，所以Vgs(-3.5V)<Vgs(th)，PMOS管导通。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_003_9060a1b4c2ff.png)

图3 没接USB时的电路情况(PMOS管导通)

当接入USB电源后，通过二极管1N5819到VCC，电压大概为5-0.7=4.3V。而G极的电压变成了USB的电压5V，所以Vgs(0.7V)>Vgs(th）(-1V)，MOS管截止，D极和S极不导通。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_004_1f251895d936.png)

图4 接入USB时的电路情况(PMOS管截止)

理论上使用二极管也可以实现类似的功能，比如下图。当没有接USB的时候，二极管导通，由电池供电；当接入USB电源后，二极管截止，由USB供电。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_005_53a7c1579eb3.png)

 图5 二极管实现自动切换

在网上还有一些电路对调了MOS管的DS极，如下图所示。(说明一下，这个不推荐使用)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_006_9f6a7b31a761.png)

图6 错误的方案(PMOS管中二极管方向导致USB向电池充电)

通过前面类似的方式分析，这个电路可以实现类似的功能，但是有一个问题，当USB供电的时候，MOS管D极的电压高于S极，续流二极管会导通，电流会通过这个二极管倒灌回电池，给电池充电。这是很危险的，首先电压不匹配，其次没有充电管理，很容易过充，损坏电池甚至引发电池爆炸。网上这种图有不少，大家使用前一定要仔细分析分析，不要随便拿过来就用。

二、扩展：应用于其他类似情况

图为TP4056 双电源自动切换的参考应用，简单易实现。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_007_8a1cfac9f9fa.png)

图7 交流适配器和USB接口自动切换电路

**电路实际现象**：

-   只插入交流适配器，电路会自动切换为交流适配器供电。
    
-   只插入USB-5V电源，电路会自动切换为USB供电。
    
-   同时将交流适配器和USB-5V电源接入电路，由于交流适配器的输出电压一般为 5.5V以上，比USB电源的5V略高，电路会自动切换为交流适配器供电。
    

**电路原理：**

电路由 1个P-MOS（如AO3401）、1个二极管（推荐用肖特基，压降小）、1个适当阻值的下拉电阻 组成。

假设USB电源电压为5.0V，交流适配器的电压为5.5V，比USB的略高。

-   当交流适配器的 5.5V单独接入时，二极管导通，电路自动切换为交流适配器供电，此时用电端电压为 5.5 - 0.3 = 5.2V。
    
-   当USB-5V单独接入时，P-MOS的**DS寄生二极管（图7中未画出）**首先导通，S极电压为 5 - 0.7 = 4.3V，而此时的G极被下拉电阻拉低为0V，故 Vgs = 0 - 4.3 = -4.3V。-4.3V < P-MOS的GS最低导通门限电压，于是 P-MOS导通，之后用电端电压为 5 - I\*Ron。由于MOS的导通电压都比较低，约几十mΩ，且一般电路电流都不会超过2A，故P-MOS的导通压降几乎可以不计。可以非常高效的将5V输出至用电端。
    
-   当交流适配器5.5V与USB-5V同时接入时，肖特基D1导通，此时 P-MOS的G极电压为 5.5V，S极电压为 5.2V，Vgs = 5.5 - 5.2 = 0.3V，0.3V > P-MOS的GS最低导通门限电压，于是 P-MOS关断。电路便自动切换为由输入电压较高的交流适配器供电。
    

## **一点通推荐**

-   [8大造车幕后巨头（汽车核心零部件供应商）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247527523&idx=1&sn=13e3af26b17f862456b691d66923718e&scene=21#wechat_redirect)
-   [硬件一键开关机电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247553023&idx=1&sn=4e701a692647d6ec1421f619e5488258&scene=21#wechat_redirect)  
    
-   [各省汽车置换补贴一览（2025新能源汽车篇）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247527203&idx=1&sn=2a6a62c7309972c470b3591d1e608eb2&scene=21#wechat_redirect)  
    
-   [升压电路之——功率因素校正（PFC）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247552630&idx=1&sn=68619df43e9adf47aa64e2dba7f8afc5&scene=21#wechat_redirect)  
    
-   [8种汽车悬架形式（零部件构造图、示意图）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247527510&idx=1&sn=617b37f95385c7aac8549c1e69f6277d&scene=21#wechat_redirect)
-   [这六大星座的女神气质，藏在骨子里](https://mp.weixin.qq.com/s?__biz=MzkyNzc4Njk1Mg==&mid=2247483708&idx=1&sn=3706aba569c29852583036a781edddca&scene=21#wechat_redirect)
-   [天生富婆命的星座，财神偏爱！！](https://mp.weixin.qq.com/s?__biz=MzkyNzc4Njk1Mg==&mid=2247483691&idx=1&sn=e47c1a32858ed7129e58566bf375eb94&scene=21#wechat_redirect)
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\USB_锂电_电源自动切换电路_images\img_008_583ecf83b7f1.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️