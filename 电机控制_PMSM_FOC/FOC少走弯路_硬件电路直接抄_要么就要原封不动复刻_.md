# FOC少走弯路:硬件电路直接抄，要么就要原封不动复刻？

原创 电路一点通 2025-04-17 11:37 广东

> 原文地址: [https://mp.weixin.qq.com/s/1rU2LZy-oKId5pIwegTqZw](https://mp.weixin.qq.com/s/1rU2LZy-oKId5pIwegTqZw)

记录一下驱动直流无刷电机走过的坑。我是和是室友一起在玩FOC，电路方面也是借鉴了他的。我俩共同的一个心得就是，电路这个东西直接抄要么你就要原封不动的复刻下来，要么你就要搞懂电路中的每个电阻电容都起到什么作用，然后在这个基础上改！！！ 不然 ，弯路必然是少不了的。![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_000_9f9a863b88fa.png)

-   [![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_001_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## 硬件电路整体展示

### 主控部分 

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_002_d83901975c62.png)

主控部分用的STM32F103C8T6，本来想用C6T6的，但是它不支持CAN通信，想到之后要做小车，还是带一个总线靠谱一点。我没有画晶振，用的内部晶振。值得注意的地方就是用于驱动半桥的PWM我这里其实是有问题的，因为STM32F103C8T6定时器1的通道4是不在ADC的触发事件里面的，因此是没办法进行准确的电流采样的或者说会影响一部分性能。所以需要修改。这是第一个坑！！！**切记，定时器的四个PWM通道中一定要有一个用于出发ADC采样，其他三个用于输出控制半桥的PWM**。I2C是用于读取AS5600的，测试了一下在I2C高速模式下，AS5600的速率大约是6Khz。

### 电源管理和USB

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_003_772119313005.png)

 这部分其实就没有什么坑了，电源管理是直接抄WD1305的手册，对于没有接触过电源管理的同学来说（正是本人），照抄就好了，封装什么的最好都一样，很多第一次做的同学会把10uH选错，这**也算是一个坑**吧，这个选择功率电感就行，因为本身用于5V的电流也很小，通常是几十毫安，你选择一个500ma的功率电感基本是足够的。

###  电机驱动

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_004_a9c78fb38965.png)

这部分是坑最大的一个部分，栅极驱动器用的是EG2133，自带死区控制。所以高侧和低侧刚好是反向的，所以直接共用一个PWM就可以。**又一个坑来了！！！**这个芯片的VCC和用于高侧的基电压一定要是一样的。其次是自举电路！！！我和室友在这上面坑了许久（因为不懂自举电路的作用），照抄就是了！！！不要图简化，省去二极管或者电容。

DMT3009LDT-7是双N沟道MOS管。栅极的电阻和二极管是用于降低MOS管的发热。

### 电流采样![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_005_c3f1dd490095.png)

 用的专用电流采样芯片，采样电阻要考虑一下最终输出的电流和功率，选择合适的采样电阻就可以。我这里用的10毫欧1W的电流采样电阻，能走10A电流。

## 总结

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_006_3ff91ddeb5a5.png)

1.   PWM用的定时器中，有一个通道要能触发ADC采样。
    
2.  自举电路二极管和电容不能少，电容不能太小。
    
3.  MOS管的电源和栅极驱动器的电源要分开，当然也可以用一个（限制了应用范围。
    

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[三极管驱动NMOS实现3.3V转24V电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544233&idx=1&sn=06790b765b2d25b49e94122665b81686&scene=21#wechat_redirect)**
    
-   **[2种余电快速泄放电路方案优缺点比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543870&idx=1&sn=984caffd4abc506ea774728f6b3391e3&scene=21#wechat_redirect)**
    
-   **[旁路，去耦，滤波，耦合电容大总结](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543474&idx=2&sn=14f693324eddf502f90e7f455bd1176d&scene=21#wechat_redirect)**
    
-   **[新能源汽车“三电”系统关键技术：电池、电控与电机](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516784&idx=2&sn=8db26a0a651e2b79374fd5b3def86aa5&scene=21#wechat_redirect)**
    
-   **[汽车发动机基本构造图、分解图、原理图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488446&idx=1&sn=74ca81cf0ef79f64a9fadec16a5e2419&chksm=c33e6b02f449e214ae0bce877ef5d99454aa817f98954178ea102c13033f8645730d83ae4413&scene=21#wechat_redirect)**
    
-   **[汽车常用传感器识别与检测PPT（全）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488068&idx=3&sn=f26a4688a7bc85e627e7881ebc0de671&chksm=c33e6af8f449e3ee8232723e9b35f5a82cd0abddcb2bb35812c0b84e8f7d9b90ff0e46dd58bd&scene=21#wechat_redirect)**
    
-   **[新能源汽车内部零部件构造透视图（名称标注，好记易懂）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487896&idx=1&sn=715b07b8a8f1eddafaab72e41b02d135&chksm=c33e6924f449e03282bbee83c3c9f11d8bcfafe72d741a3db063463f3b4f1b7a06dc684387a3&scene=21#wechat_redirect)**
    
-   **[汽车内饰主要系统结构部件图解、（产品、材料、成型工艺）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487516&idx=1&sn=c0837b67bb6735cdd544260ae8892cf8&chksm=c33e68a0f449e1b60e89cb57e0362df89d2a534ddb66ca858ca5136e6f86a3a564c892dac1ff&scene=21#wechat_redirect)**
    

**[![图片](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\FOC少走弯路_硬件电路直接抄_要么就要原封不动复刻__images\img_007_b46e8bcc08e0.jpg)](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**