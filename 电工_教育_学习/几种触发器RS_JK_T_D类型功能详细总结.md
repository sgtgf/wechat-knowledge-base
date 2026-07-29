# 几种触发器RS、JK、T、D类型功能详细总结

原创 电路一点通 2025-03-10 11:33 广东

> 原文地址: [https://mp.weixin.qq.com/s/0-i492LW5Q60anvQjTHxjA](https://mp.weixin.qq.com/s/0-i492LW5Q60anvQjTHxjA)

在实际的数字系统中往往包含大量的存储单元，而且经常要求他们在同一时刻同步动作，为达到这个目的，在每个存储单元电路上引入一个时钟脉冲（CLK）作为控制信号，只有当CLK到来时电路才被“触发”而动作，并根据输入信号改变输出状态。把这种在时钟信号触发时才能动作的存储单元电路称为触发器，以区别没有时钟信号控制的锁存器。

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_000_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_003_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_004_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_001_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_002_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_005_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

根据逻辑功能的不同特点，把触发器分为RS、JK、T、D等几种类型。

①首先我们介绍RS触发器（与非门）

这种触发器可以实现的功能有三种：1、输出置零 2、输出置一 3、输出保持不变

下面附上电路图，这是两种画法：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_006_c7d5a641f03d.png)

下面是他的逻辑符号：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_007_ebf60ac9f989.png)

逻辑功能：R反和S反不可同时为零，R反与S反不像同时Q输出与S相同，此时再将R反与S反同时调到高电位时，电路保持不变。实现Q输出端的三种功能。

②RS触发器（或非门）

电路图的两种画法：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_008_b3fb35fbe02c.png)

逻辑符号以及真值表：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_009_5b6a042a9b07.png)

逻辑功能:首先输入R、S端不可同时为1，当RS端输入不相同时，Q端输出与S端相同，此时将R、S端都调到低电位时，输出保持不变。

③D触发器：

D触发器是一个具有记忆功能的，具有两个稳定状态的信息存储器件，是构成多种时序电路的最基本逻辑单元，也是数字逻辑电路中一种重要的单元电路。D触发器有集成触发器和门电路组成的触发器。触发方式有电平触发和边沿触发两种，前者在CP(时钟脉冲)=1时即可触发，后者多在CP的前沿（正跳变0→1）触发。D触发器的次态取决于触发前D端的状态，即次态=D。因此，它具有置0、置1两种功能。

附上门电路图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_010_ce094b49e8a6.png)

 这是一个门电路组成的触发器，当然使用时为了方便可以直接使用集成电路，这里为了方便理解。

逻辑符号：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_011_e5e003f70298.png)

实现功能：在CLK也就是cp端接收到由低电平变成高电平时输出端Q与输入端D保持一致。（这里用的是上升沿触发器符号为>，带有非好的为下降沿，使用时要看具体的边沿触发器类型）

④JK触发器

JK触发器是数字电路触发器中的一种基本电路单元。JK触发器具有置0、置1、保持和翻转功能。在各类集成触发器中，JK触发器的功能最为齐全。在实际应用中，它不仅有很强的通用性，而且能灵活地转换其他类型的触发器。由JK触发器可以构成D触发器和T触发器。

电路图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_012_2a08f296ed2a.png)

 逻辑符号：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_013_f201869142fb.png)

逻辑功能：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_014_cf0f1ed1dbad.png)

⑤T触发器

T触发器是在数字电路中，凡在CP时钟脉冲控制下，根据输入信号T取值的不同，具有保持和翻转功能的触发器，即当T=0时能保持状态不变，当T=1时一定翻转的电路。

电路图：![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_015_5b195c271380.png)

逻辑符号：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_016_b3a8e9f789f0.png)

逻辑功能：在时钟脉冲控制有效的控制下，T=1时具有反转的功能，T=0时具有保持的功能

⑥T'触发器

**T′触发器**又叫计数器，一个时钟周期到来，在上升沿到来实现对原状态的反转，那么每次上升沿到来都对原状态进行反转就可以实现计数。

电路图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_017_b653be53cba2.png)

逻辑符号：

![](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_018_2a02f600d782.png)

逻辑功能：随着时钟脉冲周期改变使输出的信号反转

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\几种触发器RS_JK_T_D类型功能详细总结_images\img_019_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**