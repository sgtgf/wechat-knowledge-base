# 放大电路频率响应的Multisim仿真及分析

原创 电路一点通 2025-06-17 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/DZi0zq56WVAzhwlzH0hXLg](https://mp.weixin.qq.com/s/DZi0zq56WVAzhwlzH0hXLg)

先给大家说一下**放大电路的频率响应，**如下图所示。

频率响应就是指放大器的增益与频率的关系。通常讲一个好的放大器，不但要有足够的放大倍数，而且要有良好的保真性能，即：放大器的非线性失真要小，放大器的频率响应要好。

  

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_000_cbbab8ba0331.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

下面开始仿真，

![](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_001_9b043e760812.jpg)

仿真前

![](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_002_505373f0bb65.jpg)

仿真中

![](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_003_873e90df6536.jpg)

波特图

![](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_004_27166c1339d2.jpg)

f（L）=24Hz

![](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_005_a484c0480640.jpg)

f（H）=21MHz

波特图仪可以测量放大电路的频率响应分幅频特性和相频特性。双击波特图仪图标，按下述要求调节：Mode区，选择Magnitude；Horizontal区，选择Log，F值为100MHz，I值为1Hz；Vertical区，选择Log，F值为40dB，I值为-20dB。打开电源开关，就观察到完整的幅频特性曲线。拖动读数指针在曲线中间部位，测量出中频时的增益，再分别求出高、低端的-3db频率点。在本例中：f（H）=21MHz

， f（L）=24Hz。

在额定的频率范围内，输出电压幅度的最大值与最小值之比，以分贝数（dB）来表示其不均匀度。频率响应在电能质量概念中通常是指系统或计量传感器的阻抗随频率的变化。

由于放大电路中存在电抗元件C，因此它对不同频率呈现的阻抗不同，所以放大电路对不同频率成分的放大倍数和相位移不同。放大倍数与频率的关系称为幅频关系；相位与频率的关系称为相频关系。放大电路工作在中频区时，电压的放大倍数基本不随频率变化，保持一常数。

低频区：当放大倍数下降到中频区放大倍数的0.707倍时,我们称此时的频率为下限频率fl.放大器工作在此区时，所呈现的容抗增大，因此放大倍数下降，同时输出电压与输入电压之间产生附加相移。

高频区：高频区时的放大倍数也下降。因为放大器工作在高频区时，电路的容抗变小，频率上升时，使加至放大电路输入信号减小，从而使放大倍数下降。

![](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_006_1a6396fcd294.jpg)

  

**放大器具有频率响应，原因有两个**：一是实际放大的信号频率不是单一的；二是放大器具有电抗元件和电抗因素。由于放大电路中存在电抗元件（如管子的极间电容，电路的负载电容、分布电容、耦合电容、射极旁路电容等），使得放大器可能对不同频率信号分量的放大倍数和相移不同。如放大电路对不同频率信号的幅值放大不同，就会引起幅度失真。

如放大电路对不同频率信号产生的相移不同就会引起相位失真。幅度失真和相位失真总称为频率失真，由于此失真是由电路的线性电抗元件（电阻、电容、电感等）引起的，故不称为线性失真。为实现信号不失真放大所以要需研究放大器的频率响应。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[5V过电压保护回路电路分析，看简单却是很多复杂原理基础](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547869&idx=1&sn=93e3b433c9faa3c15bcb2b6e03e14b6f&scene=21#wechat_redirect)**
    
-   **[新能源汽车部件名称图解：高压电系统构成](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521997&idx=1&sn=302fb4e2daff4b395ee95324b5967d7f&scene=21#wechat_redirect)**
    
-   **[大众/奥迪汽车电路图识读](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521997&idx=2&sn=db73277b5364cc21165f54a958098786&scene=21#wechat_redirect)**
    
-   **[高压配电室常见故障与处理-PPT-39页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456258920&idx=1&sn=3769ddbd5d894c9df9846c3e9afb369f&scene=21#wechat_redirect)**
    
-   **[不会工地三相五线制电路布线？看这里详解.ppt](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484308&idx=1&sn=77ba8bdd1783f604d043796c8fbddac4&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\放大电路频率响应的Multisim仿真及分析_images\img_007_6602968ad7f6.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️