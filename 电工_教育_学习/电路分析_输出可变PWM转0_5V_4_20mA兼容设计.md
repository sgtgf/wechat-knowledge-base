# 电路分析：输出可变PWM转0~5V、4~20mA兼容设计

原创 24c01 电路一点通 2025-07-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/61semxPbOVU14DFfx8-ekw](https://mp.weixin.qq.com/s/61semxPbOVU14DFfx8-ekw)

在网上看到的这个电路图挺有意思的，今天我们就一起来分析：

> 输出可变可控制PWM占空比 隔离型，0-20mA电流变送输出，包括0-10mA、4-20mA，还可以0-5V电压变送输出，精度可达0.5%温漂低，大批量生产过，电路稳定可靠。

  

**电路图如下：**

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_000_ca8c3873cb7b.png)

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_001_ab9d578b5ccf.png)

**电路解析：**

输入为最左边的PWM和GND还有3.3V，通过光耦进行隔离到隔离侧，**也就是通过光耦和431将PWM转化为隔离基准后的2.5V的PWM波，然后再经过二阶RC滤波转化为0~2.5V直流电压后给后级的运算放大器。**  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_002_aa47e81caba6.png)

基准后的PWM经过二阶RC滤波后，输出电压为Vref\*D（Vref为431基准电压，D为PWM占空比），**经过一个电压跟随器做阻抗变换**（减小输出阻抗），然后再接到后级电流源电路。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_003_55689dd0843b.png)

再往后是一个**howland电流源拓扑**，使用了一个**三极管进行扩流（运放输出电流有限，所以要加三极管扩流）**。我们先看电流输出模式，那么就是按照图示接法，将4-20mA的负载电阻接到Rload处。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_004_64e798dd0546.png)

**Howland电流源仿真:**

我们可以看到输出电流公式为：Iload = VIN/2\*50Ω。**当输入电压为1V时，输出电流为10mA左右。**

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_005_396bb8e62b16.png)

那么下面是推导过程：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_006_68375f8a7d61.png)

**0~5V输出：**  

电路中还有这么一句话：R212焊接时，输出4-20mA电流，不焊接时，输出0-5V电压。那么我们仿真中也去掉R212，可以看到，输出电压基本为3\*VIN（在负载电阻很大的情况下）。比如下图，输入电压1V，输出电压为3V：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_007_07604423a78b.png)

由**R211//R215很小，RLoad很大，所以推导过程均忽略掉了**，推导过程如下：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_008_6f4674c03515.png)

**总结：**可以用，精度要求不高的情况下还可以。这个0~5V，4~20mA的兼容设计挺好的，就是要注意0~5V输出时候的负载电阻不能太小（一般也不会很小）。

**[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_009_2d0fc008e7f0.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)👆查看更多目录👆**

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[电路图一看就懂，电路板一看就朦，这是怎么回事](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550031&idx=1&sn=9c560770a651eb5b97a1064a8e3a9345&scene=21#wechat_redirect)**
    
-   **[48V转换12V，用最少的元件？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536316&idx=1&sn=5bbbf0b3bc962a90c4ca533a8ef25a8f&scene=21#wechat_redirect)**
    
-   **[现代集团全系系车型一览【韩系汽车帝国】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523770&idx=1&sn=033df1dbc033514aab4e4b7ca21f036b&scene=21#wechat_redirect)**
    
-   **[比亚迪秦插电式混合动力系统全面检修-134页-PPT](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524045&idx=2&sn=a7a4ae0fe36c36a7feb921b020c7aa24&scene=21#wechat_redirect)**
    
-   **[维修电工技能训练PPT（569页）-基本、综合全能掌握](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260377&idx=1&sn=4c224bb217256937ab03871bee767e9e&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路分析_输出可变PWM转0_5V_4_20mA兼容设计_images\img_010_bbd7bd01e4fd.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️