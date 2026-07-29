# 自制H桥有刷电机驱动板，电感选择十分关键？

原创 电路一点通 2026-04-10 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/1c9Zu\_0CAGRy3WY4W9bL0g](https://mp.weixin.qq.com/s/1c9Zu_0CAGRy3WY4W9bL0g)

    一个简单的电机驱动板可以分为以下几部分：

1.电源转换 

2.H桥驱动 

3.STM32及外设接口 

4.电流检测。

    电源转换模块有两个，

一个是24V转5V，

一个是5V转3.3V。

24V转5V用的是JW5026芯片，这是一款DC-DC降压芯片，输入电压最大40V,输出电流最大1A。具有外部器件较少，需要的PCB布局较小的特点，也可以被同种的DC-DC芯片代替，因为大多数DC-DC转换芯片的原理和外围电路类似。5V转3.3V用的是TPS70933,这个属于线性LDO电压转换芯片，主要是输出纹波小，需要的外部器件少。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\自制H桥有刷电机驱动板_电感选择十分关键__images\img_000_5e17822ffdbe.jpg)

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\自制H桥有刷电机驱动板_电感选择十分关键__images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

   DC-DC降压芯片也叫“斩波芯片”，顾名思义，就是将输入的24V直流电压先斩成一段一段类似PWM波形式的脉冲电压，电压的最大值24V，平均值5V。SW就是输出脉冲电压的引脚，因此，当电源转换芯片出问题时可以用示波器打下SW端的电压，看是否输出了对应的脉冲波形。从芯片手册中可以看出这是SW端输出脉冲电压的频率是1.1MHZ,这已经属于高频信号，在PCB的布局中，此脚引出的信号线要尽可能的粗，短，推荐用一块短而宽的铜皮很快连入电感，减小功率信号的损失。斩出来的信号经电感整流过后就接近是直流电压了，当然还要配合后面的输出电容稳压，储能，滤波。

   电感的选择十分关键，还记得自己第一次设计的时候选了一个直插式的电感，结果当然烧芯片啦，直插式的电感引脚那么长，而且细，应该不适合这个芯片，到目前为止，还没看过哪个这种类型的DC-DC芯片用直插电感的（不过要是有兴趣可以试一下，说不定我是错的呢，也可能当时是其他的原因）。还要注意电感的饱和电流这个参数，最好大于你所需电流的25%，留点余量。电感的电感值大一点没关系，但不能小。

   ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\自制H桥有刷电机驱动板_电感选择十分关键__images\img_002_bb6dd99e3937.jpg)   5V转3.3V的芯片就比较好用了，简单易懂，输入和输出各加一个2.2uf的电容就行了，对布局没什么要求，一般就是说输入，输出电容尽可能靠近芯片引脚。

  

       ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\自制H桥有刷电机驱动板_电感选择十分关键__images\img_003_3a81c3fa026c.jpg)

         NMOS驱动芯片是IR2401S，供电电压24V可能有点高，看过一些其它的电路会多一个24V转18V的模块，18V给IR2401S供电，做成18V供电当然更好，但24V供电也可以用，有点极限。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\自制H桥有刷电机驱动板_电感选择十分关键__images\img_004_8ad64acaee16.jpg)

     电流检测用的是一款通用运放LMV321，电压放大倍数=（R26+R27）/R27，此处电压放大11倍。根据芯片手册上所说4.7pf的电容是防止电路铃振的。曾经我还用过INA240加REF2033（提供一个基准电压源）检测电流，但通过程序中示波器看出两者的电流波形相差不大，就采用了LMV321，简单实用。看过其他的板子也有采用霍尔芯片测电流的，有兴趣可以试一下。

  

    PCB板比较重要的布局模块是 24V转5V模块，H桥模块

  

    24V转5V电压转换芯片布局参考：

-       1.电压转换芯片尽可能靠近电源输入，输入电源线宽且短
    
-       2.输入电容尽可能靠近输入引脚
    
-       3.SW引出线要宽且短
    
-       4.反馈电压从输出电容采集，尽量远离SW端
    
      
    

   H桥电路布局参考：

   分清哪些是信号线，哪些线上要通过大电流，信号线可以用细线，大电流的线用fill或polygon连接，实在不好画宽，可以开窗后加锡，增加过流能力。

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\自制H桥有刷电机驱动板_电感选择十分关键__images\img_005_36aa378a35ff.jpg)

  

## **一精选推荐**

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)  

[敏捷研发项目滚动式计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567191&idx=2&sn=9a8fb8eefc74212bda6f0f07f00b8cd7&scene=21#wechat_redirect)  

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=21#wechat_redirect)

[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=21#wechat_redirect)

  

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️