# 搭建降压电源-基于TL494设计BUCK电路

原创 开心的硬件小白 电路一点通 2025-08-04 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/9tD6RT0ekXgSV\_PF9IRwJQ](https://mp.weixin.qq.com/s/9tD6RT0ekXgSV_PF9IRwJQ)

TL494 是一颗脉宽调制控制的集成IC，TL494 在单个芯片上集成了构建脉宽调制 (PWM) 控制电路所需的所有功能。TL494 器件包含两个误差放大器、一个片上可调节振荡器、一个死区时间控制 (DTC) 比较器、一个 5V稳压基准源以及其他相关组件，TL494应用灵活，可以根据实际需求进行相关设置和调试。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_000_bd21d7ff2254.jpg)

本文设计了一款简易的BUCK电路，设计采用TL494为核心，配合PNP和NPN功率三极管、电感、二极管、电容等器件搭建了一个降压电源电路。电源参数如下：

1、 输入电压：10-36V

2、 输出电压：3V

3、 输出电流：0-3A

4、 电源纹波：≤100mV

5、 负载调整率：±200Mv

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_001_9f08ed891344.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

下图为BUCK电路基本结构，电源输入经过电容储能滤波后，经过功率开关器件，经过电感以及输出储能滤波电容输出，反向二极管在功率开关器件关闭时为后级提供导通环路，而TL494主要发挥了驱动功率开关器件的关键作用。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_002_ce8b1941234d.jpg)

典型BUCK电路

根据TL494手册可知，通过调节5脚和6脚的电容和电阻，可改变其内部震荡频率，手册提供了电容电阻值对应频率的曲线，本次设计选择1nF电容和50K电阻组成震荡电路，由曲线可知产生约20KHZ的震荡频率。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_003_40c1d781d06a.jpg)

震荡曲线图

由于本设计输出电压为3V，小于芯片内部的5V基准电压，因此采用高精度电阻分压为2.5V，输入误差放大器的＋作为电压基准，通过输出电压的分压电阻采样即可输出3V电压。下图为TI手册提供的5V输出参考，输出3V只需要将R9改为24K即可。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_004_0e29cf7559af.jpg)

输出电压反馈

对于过流保护电路，选用第二路误差放大器，先通过电阻分压将基准设置为一个较低电压，这样可以减小采样电阻的数值，降低电路损耗。本设计最大电流3A，留一定的余量，取R13  
为0.3欧。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_005_1dbd3e27ce32.jpg)

电流控制

  
为了减轻启动时开关晶体管上的应力，必须降低输出滤波电容器充电时出现的启动浪涌。由于可以进行死区时间控制，经过实测，该电路会影响带载启动，该电路设置不合理可能造成电路在带载时无法正常启动，具体数值的计算可以参考手册，有详细的计算介绍。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_006_920198b959f0.jpg)

软启动和死区控制

对于电感电容等计算这里就不再展开，手册都有很详细的描述，下一步进行原理图绘制，采用Altium Designer 16进行原理图和PCB设计，原理图和PCB如下图所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_007_47552f5433d8.jpg)

原理图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_008_a8e8646fdf09.jpg)

PCB图

通过打样焊接后得到实物，焊接调试后得到如下所示实物

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_009_db21dae19671.jpg)

焊接实物图

接下来进行相关调试测试。一款基于TL494设计的BUCK电源就设计完成了，针对性的对输出电压、电流、纹波进行了测试。由于带载3A时导线压降过大，实际测试输出口电压为2.91V，在设计要求范围内。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_010_4b69a2a326cf.jpg)

输出3V/1A

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_011_738dd863b3bb.jpg)

输出3V/3A

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_012_32041a86dbdc.jpg)

输出纹波

此外，该电路还要很多可以优化的细节，如效率，带载能力、瞬态响应等方面的优化，该电路主要帮助我们对BUCK模型电路的理解和学习，大家如果有好的建议和意见欢迎提出！！！！

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   [降压电路24V转12V，2个NPN三极管实现](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546287&idx=4&sn=aed1f8c4094552bcbdd5209801633b9e&scene=21#wechat_redirect)
    
-   [TL494 反相降压-升压转换器电路工作原理、电路设计、计算、测试](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544805&idx=1&sn=3c4b3a57e91c7d10a82e2ffee83fc504&scene=21#wechat_redirect)
    
-   [新能源纯电轿车能耗天梯图（车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524584&idx=1&sn=8853468ba35271b72d0ffa6729e1fb8f&token=507455025&lang=zh_CN&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\搭建降压电源_基于TL494设计BUCK电路_images\img_013_a0b60db42148.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️