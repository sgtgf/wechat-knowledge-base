# MOS管和IGBT管有什么区别

原创 电路一点通 2024-05-12 19:01 广东

> 原文地址: [https://mp.weixin.qq.com/s/iyn4P6SESQlm2KGQAKdw0A](https://mp.weixin.qq.com/s/iyn4P6SESQlm2KGQAKdw0A)

在电子电路中，MOS管和IGBT管会经常出现，它们都可以作为开关元件来使用，MOS管和IGBT管在外形及特性参数也比较相似，那为什么有些电路用MOS管？而有些电路用IGBT管？

进大家庭⭕圈探讨回复: 交流

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_000_f8a5d6df7cd2.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_001_cf30594d79af.png)

  

下面我们就来了解一下，MOS管和IGBT管到底有什么区别吧！

**什么是MOS管？**

场效应管主要有两种类型，分别是结型场效应管（JFET）和绝缘栅场效应管（MOS管）。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_002_1c4af68acda9.png)

  

MOS管即MOSFET，中文全称是金属-氧化物半导体场效应晶体管，由于这种场效应管的栅极被绝缘层隔离，所以又叫绝缘栅场效应管。

  

MOSFET又可分为N沟耗尽型和增强型；P沟耗尽型和增强型四大类。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_003_34d32d8e3dbe.png)

  

有的MOSFET内部会有个二极管，这是体二极管，或者叫寄生二极管、续流二极管。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_004_b007f4e110c8.png)

  

**关于寄生二极管的作用，有两种解释：**

1、MOSFET的寄生二极管，作用是防止VDD过压的情况下，烧坏MOS管，因为在过压对MOS管造成破坏之前，二极管先反向击穿，将大电流直接到地，从而避免MOS管被烧坏。

  

2、防止MOS管的源极和漏极反接时烧坏MOS管，也可以在电路有反向感生电压时，为反向感生电压提供通路，避免反向感生电压击穿MOS管。

  

MOSFET具有输入阻抗高、开关速度快、热稳定性好、电压控制电流等特性，在电路中，可以用作放大器、电子开关等用途。

  

**什么是IGBT？**

  

IGBT (Insulated Gate Bipolar Transistor)，绝缘栅双极型晶体管，是由晶体三极管和MOS管组成的复合型半导体器件。

  

IGBT作为新型电子半导体器件，具有输入阻抗高，电压控制功耗低，控制电路简单，耐高压，承受电流大等特性，在各种电子电路中获得极广泛的应用。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_005_ac8782a6650d.png)

  

IGBT的电路符号至今并未统一，画原理图时一般是借用三极管、MOS管的符号，这时可以从原理图上标注的型号来判断是IGBT还是MOS管。

  

同时还要注意IGBT有没有体二极管，图上没有标出并不表示一定没有，除非官方资料有特别说明，否则这个二极管都是存在的。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_006_27fcd7a16b50.png)

  

IGBT内部的体二极管并非寄生的，而是为了保护IGBT脆弱的反向耐压而特别设置的，又称为FWD（续流二极管）。

  

判断IGBT内部是否有体二极管也并不困难，可以用万用表测量IGBT的C极和E极，如果IGBT是好的，C、E两极测得电阻值无穷大，则说明IGBT没有体二极管。

  

IGBT非常适合应用于如交流电机、变频器、开关电源、照明电路、牵引传动等领域。

  

**MOS管和IGBT的结构特点**

  

MOS管和IGBT管的内部结构如下图所示。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_007_5ed9868c5cc8.png)

  

IGBT是通过在MOSFET的漏极上追加层而构成的。

  

IGBT的理想等效电路如下图所示，IGBT实际就是MOSFET和晶体管三极管的组合，MOSFET存在导通电阻高的缺点，但IGBT克服了这一缺点，在高压时IGBT仍具有较低的导通电阻。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_008_de28ec2ab963.png)

  

另外，相似功率容量的IGBT和MOSFET，IGBT的速度可能会慢于MOSFET，因为IGBT存在关断拖尾时间，由于IGBT关断拖尾时间长，死区时间也要加长，从而会影响开关频率。

  

选择MOS管还是IGBT？

  

在电路中，选用MOS管作为功率开关管还是选择IGBT管，这是工程师常遇到的问题，如果从系统的电压、电流、切换功率等因素作为考虑，可以总结出以下几点：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_009_96c941ee245f.png)

  

也可从下图看出两者使用的条件，阴影部分区域表示MOSFET和IGBT都可以选用，“？”表示当前工艺还无法达到的水平。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_010_5c888f00b5cc.png)

  

总的来说，MOSFET优点是高频特性好，可以工作频率可以达到几百kHz、上MHz，缺点是导通电阻大在高压大电流场合功耗较大；而IGBT在低频及较大功率场合下表现卓越，其导通电阻小，耐压高。

。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管和IGBT管有什么区别_images\img_011_72e6c604df0c.jpg)

  
**

**[仿"华为"电路？高压直流模块 DC DC 驱动电路方案对比](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522458&idx=1&sn=4d89ebb4fe737c284fb6bbda923ec59c&scene=21#wechat_redirect)  
**

**[电路识图从入门到精通-PDF（312页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&scene=21#wechat_redirect)**

MOSFET应用于开关电源、镇流器、高频感应加热、高频逆变焊机、通信电源等等高频电源领域；IGBT集中应用于焊机、逆变器、变频器、电镀电解电源、超音频感应加热等领域。