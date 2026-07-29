# 多层PCB设计基本概念

原创 电路一点通 2025-05-10 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/hMPNYHJ2pzrclGm-3tChQA](https://mp.weixin.qq.com/s/hMPNYHJ2pzrclGm-3tChQA)

## 介绍了多层PCB设计的基本概念，包括为何需要多层设计、其优势（如信号质量提升、成本效益和空间利用）以及如何判断所需的层数。还详细讲述了走线原则（3W原则和20H原则）、四层PCB的构成和叠层设置的方法。  

## PCB多层板设计

### 什么是多层板

> 顾名思义，名称上为了区别于两层板，工艺上采用多层叠压的形式  
>   
>   
> 仅以部分为例，具体须看具体的工艺要求

### ![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\多层PCB设计基本概念_images\img_000_f97fc444bcbb.png)

### ![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\多层PCB设计基本概念_images\img_001_21758ea0ddad.png)为什么要设计多层板

-   这就好比于我们在学校学习的时候，教科书的编排，是有个具体的框架的，知识也是先理论后案例的分析，案例之中也有先后，不断迭代，呈现出层层递进的一种关系和结构。多层板自然也有相比单层板和二层板的独特优势，一方面，不同的板子用不同的材料采取不同的工艺，预算方面会有所不同，适用领域和适用场景亦是如此
    

> **注重信号质量**，能用四层板就不用两层板，有些领域为了人的安全着想，能用八层板绝不用低层的板子的，作为大学生主要是在一些电子比赛或者DIY时需要用到一些高速板，保证信号的质量，方便对信号的测试等  
> **注重性价比**，用更少层的板子设计即可

-   ****多层板的优势****

> **成本比较高**，不过规定尺寸和工艺范围内的4层和6层我们都可以在嘉立创免费打样**回流路径短**，**有完整的地平面**，这些可以使得抗干扰性能得到提高 同样的电路，层数更多，**设计会变得更为简单**，可以更好的关注信号的走线以及质量  
> **追求小巧精致功能强大**，同样也可以用多层设计，选用更小封装的贴片代替插件和更大封装的贴片，同时可以设计拓展板和转接板，通过牺牲体积的方式避免更大的面积

### 如何判断板子的层数

知道了多层板的优劣势，那么如果自己想设计板子的时候，至少需要设计几层板呢？

1.  从走线密度判断
    

> 一般来说PCB先布局再来评估板子的层数，布局完后可以看到板子的信号流向，走线顺不顺，需要几个走线层，那么重点就是评估飞线最密集的区域啦，因为把最密集的区域走线理顺，其他稀松的区域就简单了

1.  从BGA芯片判断
    

> 当PCB上面有BGA的时候，重点评估在于BGA的深度，这个深度就是焊盘到中间焊盘的个数，那么BGA焊盘的间距在0.65毫米以上时，两个深度的焊盘将走一层信号线

1.  从信号方面判断
    

> 基于信号质量的考虑，都需要添加地层，进行电磁干扰屏蔽，增加回流路径

-   走线3W原则，以此减少两个走线之间的串扰
    

> 一般对于时钟信号、复位信号或一些关键信号都需要遵循3W原则，还有音频、视频，或者多个高速信号长距离走线时。当主板的空间非常紧张时，可以将主板上的时钟等信号做包地处理缩小信号线间距，增大板的利用率。

> 3w原则也是有条件的，它和走线与参考平面间的间距也有关系，比如4层板、6层板走线与参考平面的间距一般在5mil左右，走线遵守3w原则可以有效避免串扰，但是如果是两层板，走线与参考平面间距可能在50mil，为了有效减少串扰，走线间距可能要大于3w。

> 在对PCB走线串扰进行评估时，我们一般参考耦合系数这个参数，耦合系数越大表示PCB走线间越容易发生串扰，当然串扰还和走线间的耦合长度、信号的频率有关系。PCB走线耦合仿真时耦合系数5％是一个临界值，小于5％我们认为走线是OK的。大于5％可能就需要调整走线的间距啦。

-   20H原则是指要确保地平面面边缘比电源平面边缘多出20H（H时PCB板的层间间距）
    

> 由于地平面与电源平面之间的电场是变化的，在板的边缘会向外辐射电磁干扰，称为边沿效应。如果将电源平面内缩20H，则可以将70％的干扰限制在地平面层的边沿内，内缩100H则可以将98％的干扰限制在内，考虑实际使用，内缩20H比较合适，既不会占用太多位置，又有效的提高了EMC。

### 四层板是哪四层

> 多层PCB是电子信息技术向高速度多功能大容量小体积薄型化轻量化发展的产物，对于制作PCB板来讲，层数越多制作的程序就越多。

> 四层PCB板中的第一层和第四层都为信号层，两个中间层分别为电源层和底层，顶层一般都放置元器件，所以顶层也叫元件面，底层一般是焊接用的，所以底层也叫做焊接面

> 中间一层可以走少量线，但不要分割每个铺铜，中间第二层铺铜有多个电源的分别铺可以走少量线，但不要分隔每个铺

> 在四层板中一般是用通孔、埋孔、盲孔来连接彼此的层，比双层PCB板多了个埋孔和盲孔

### 如何进行叠层设置

**叠层考虑事项**

-   元件面、焊接面为完整的地平面（屏蔽）
    
-   尽可能的无相邻平行布线层
    
-   所有信号层尽可能与地平面相邻
    
-   关键信号与地层相邻，不跨分割区
    

**推荐叠层设置**

> signal1、gnd02、pwr03、signal4  
> 即一四层为信号层，第二层为底层，第三层为电源层  
> 这样可以满足叠层考虑事项，符合常规设计要求

**叠层设置方法**

以AD20为例，language设置为中文语言，按下系统默认组合快捷键**DK**启动**层叠管理器**，右键添加负片层（根据项目不同，有时也常用正片层的），做好命名，以及后面参数的设置，比如板厚（依照需求来），其中Pullback指的是内缩，内缩参照20H原则（看上面，更多规则看上一篇文章）

如果你已经改好了规则和项目所需要的参数设置，那么就可以进行铺铜和走线了。

原文：https://blog.csdn.net/2302\_76312199/article/details/132790074?spm=1001.2014.3001.5502

  注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\多层PCB设计基本概念_images\img_002_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[电源入口处防反接电路-汽车电子硬件电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546235&idx=1&sn=706b98e362ce40a3e9d73db097feff5a&scene=21#wechat_redirect)**
    
-   **[元器件选型：电阻、电容、电感、磁珠](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546178&idx=2&sn=8f0fc770f23174c5274911563b2a7762&scene=21#wechat_redirect)**
    
-   **[USB2.0/3.0电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544806&idx=1&sn=8da43e8f0ea8df32211420071b7b9f76&scene=21#wechat_redirect)**
    
-   **[硬件电路设计--CAN通信](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544244&idx=3&sn=ffdda939310d4665d09f73e76851aad2&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\多层PCB设计基本概念_images\img_003_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️