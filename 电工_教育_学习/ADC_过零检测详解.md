# ADC-过零检测详解

原创 电路一点通 2025-07-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/aCt9D21V0m3s3Jz7o5ymBA](https://mp.weixin.qq.com/s/aCt9D21V0m3s3Jz7o5ymBA)

**1、反电动势波形的起源**

下图展示了内转子磁极的磁感应强度B的分布情况。定义磁感应强度方向向外为正

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_000_9d02df168174.png)

  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

**在0°的时候**，处于正反方向交界处，**磁感应强度为零**；

然后开始**线性增加**，在**A点**时达到最大

然后一直保持恒定值不变，直到**B点**开始下降，到**180°**的时候下降到零。

然后开始负向增长，在**C点**处达到负值最大，然后保持恒定负值不变

直到D点强度开始减弱，到0°时又回到零。

注：A点到底在几度的位置，不同的电机不一样。如果A非常接近0°的位置，上升和下降直线就会非常陡峭，“梯形波”就变成了“方波”。

根据右手定则E=BLV公式，在**匀速转动下**，各绕组切割磁场中的磁感线产生的**反电动势波形（和B的波形一致L和V都是定值）**呈**梯形波/方波（和磁感应强度波形类似）**。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_002_aa3d3b55abe7.png)

对于直流无刷电机的无感控制策略中，主要可以分为两类：（1）无感方波控制（2）无感FOC控制

先以无感方波的控制为例：

在无感方波的控制中，反电动势过零点检测的**目的**：**得到换相信号**

能够得到换相信号的**原理**：过零点的信号与换相信号在**相位上相差30°电角度，**即过零点后延迟30°即可进行换相的操作。

**采集**反电动势过零的信号的两种**方式**：（1）硬件比较器法；（2）软件ADC采样法。

**采集方式的原理**：都是将检测得到的**端电压的值**与**电机中心点电压进行比较**来得到反电动势过零点的信号。

**2、反电动势过零的基本原理**

在AB相通电时，第三相**C相会产生一个反电动势（可利用这个第三相的感应电动势来测算转子的位置）**；

在AB相通电期间，如果我们去测量线圈CC’上的电压，会发现**CC’上的电压**其间有一个**从正到负的变化过程**；

在AB相通电期间，不只是线圈CC’上产生感生电动势，其实**AA’和BB’也在切割磁力线，也都会产生感生电动势**，其电动势方向**与外加的12V电源相反**，所以叫**“反向感生电动势”（BEMF）**。其等效电路图见图1-25。

从图1-25可以看出，线圈绕组AA’和BB’上产生的**反电动势是很大的**，两个加起来几乎略小于12V。**VAA’+VBB’≈12V。**

因为线圈绕组本身的等效电阻很小（**RAA’\=RBB’≈0.1Ω**），**如果反电动势不大的话，端电压加载在线圈绕组等效电阻上，会产生巨大的电流，线圈非烧掉不可。**

**例：**假设在额定转速下**AA’和BB’各产生5.7V的反电动势**，那么它们串联起来就产生11.4V的反电动势，结合图1-25看，那么加载在等效电阻上的电压就为12-11.4=0.6V，最终通过绕组AB的电流就是0.6/(2X0.1)=3A，看来这个假设还是比较合理的。

同理，由于各绕组的结构是相同的，切割磁力线的速度也是相同的，所以线圈**CC’也应该会产生一个大小约为5.7V的感生电动势**；不同的是：**在AB相通电期间，CC’的感生电动势会整个换一个方向**，也即所谓的**“过零点”**。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_003_1d1ecc468418.png)

在图1-24的t0时刻（图1-26(a)的位置），为**AB相通电刚开始时**的情况，CC’产生的感生电动势的等效电路图如图1-26(a)所示；**（CC’上无电流）**

在图1-24的t1时刻（图1-26(b)的位置），为**AB相通电快结束时**的情况，CC’产生的感生电动势的等效电路图如图1-26(b)所示。**（CC’感应电动势方向改变）**

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_004_c008b9114bdd.png)

**2-1 换相时机**

由于中点电势值始终为6V，**CC’的线圈产生的感生电动势只能在以中点6V电势为基准点的基础上叠加；**

仍旧假设在额定转速下CC’上会产生5.7V的感生电动势

在t0时刻，如果我们去测量C点的电压，其值应为6+5.7=11.7V；

在t1时刻，C点的电压值应为6-5.7=0.3V

也就是说，**在AB相通电期间，只要一直监测电机的C引线的电压，一旦发现它低于6V，就说明转子已转过30°到达了t0和t1中间的位置，只要再等30°就可以换相了。**

**2-2 ADC采集过零信号**

如果电调的MCU足够快的话，可以采用连续AD采样的方式来测量C点电压，不过貌似有点浪费，因为大部分采到的AD值都是没用的，我们**只关心它什么时候低于6V。**

**2-3 CMP采集过零信号**

这时候模拟比较器的作用就来了。一旦C相输出电压低于6V，比较器马上可以感知并在输出端给出一个**下降沿**。同理，当电机处于AC相通电时，监测的是B相输出电压；当电机处于BC相通电时，监测的是A相输出电压。

继续往前，当电机开始进入BA相通电时，**C相输出电压一开始会处于一个较低的状态（0.3V），过零事件发生时，C相输出电压会超过6V，**也就是说，这时比较器会感知并输出一个**上升沿**。CA，CB相通电情况也类似。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_005_eccb2655e7eb.png)

这是15V的比较器，单片机自带的比较器一般只支持最高5V的比较。上面这个电路图只是为了方便说明问题，**在真正的实用中，会对C相输出电压和6V中点电压再加个分压电路，而且中点电压也不总是等于6V**

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[MOS 电平转换电路设计引发思考，可避免更多的坑](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549824&idx=1&sn=89921358e777cba2c9b2b05d3f9b353b&scene=21#wechat_redirect)**
    
-   **[1~5V电压信号转换为4~20mA电流输出电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549812&idx=1&sn=6233a2296c0a77cd4acd614618901746&scene=21#wechat_redirect)**
    
-   **[大浪淘沙！广汽集团好日子一去不返了吗？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523632&idx=1&sn=dcaf11b81dd4109a575c7fbfd0be4f06&scene=21#wechat_redirect)**
    
-   **[电工识图电工技能速成全图解-554页.pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260269&idx=1&sn=19c896b6ff7d37881214fe83de352960&scene=21#wechat_redirect)**
    
-   **[楼宇自控系统的主要监控对象及监控原理-PPT](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260270&idx=2&sn=2380b447b50547c352aa3649aebd8e77&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\ADC_过零检测详解_images\img_006_564a8a9dfb8b.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️