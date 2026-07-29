# MOS管加三个元件就组成BUCK电路，为何说难点在于电感？

原创 硬件笔记本 2023-09-23 11:15 四川

> 原文地址: [https://mp.weixin.qq.com/s/QMqRTIWHVRHmMcLNBz-ttg](https://mp.weixin.qq.com/s/QMqRTIWHVRHmMcLNBz-ttg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**BUCK电路中最重要的器件是电容，二极管还是电感？**

  

只要是电子产品就需要供电，就离不开电源，那什么是电源：小到手表中的电子，遥控器的电源，大到220V家庭用电，都可以看做是电源。然而在我们的电路设计中，会用到各种芯片，各种芯片所需要的电压值也不一样。

而有一颗芯片需要多个电压（比如：CPU就需要0.8V,1.0V,1.2V；DDR4颗粒需要2.5V,1.2V,0.6V；音频芯片需要3.3V等），而我们的电源输入电压，一般只有一种19V，12V，即使由多种输入也没办法满足这么多种类的电压值小的电压。

那有没有一个办法解决这个问题了？当然有，那就是BUCK能解决此类所有的问题，但今天和大家聊的重点不是BUCK电路， 而是想问问大家，你觉得BUCK电路中那个器件最重要，那个器件学习最难；

什么是BUCK电路？BUCK电路就是降压斩波电路,是基本的DC-DC电路，用于直流到直流的降压变换；与之相对的是BOOST电路（BOOST电路后面再给大家介绍）；

  

# **下面我们一起先来看看BUCK电路最基本的模型图一：**

![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_002_dd092b58f1d5.png)

在这个BUCK模型中，组成的最基本的几个器件是MOS管Q1，电感L1，电容C1和二极管D1；  

  

# **先来带大家了解这三个被动器件在平常电路设计的作用**

1，电容：电容又称“电容量”，是指在给定电位差的电荷储藏能量；它的作用是：旁路，去耦，滤波，储能；旁路电容是为本地器件提供能量的储能器件，它能使稳压器的输出均匀化,降低负载需求。去耦电容是满足驱动电路电流的变化,避免相互间的耦合干扰,减小电源与参考地之间的高频干扰阻抗。滤波就是充电、放电的过程。储能型电容器通过整流器收集电荷,并将存储的能量通过变换器引线传送至电源的输出端；在BUCK电路中电容的选型需要注意耐压值，以及容值，相对情况下选取容值大的滤波效果好。

  

2， 二极管的作用：二极管也是非常常见的器件，最大特性就是单向导通性，也就是电流只可以从二级管的一个方向流过；最常见的有整流，开关，限幅，续流，检波，变容，显示，稳压等作用；在BUCK电流中二极管的选型需要注意反向耐压值，以及过流值大小，

3，电感的作用:电感在电路中主要起滤波,振荡,延迟,陷波等作用,简单地说就是通直流,阻交流。电感符号:L,电感单位:享、毫享、微享、纳享。在BUCK电路中电感的选型需要计算电感的值，以及电感电流大小的选择，这又有两个参数，电感的饱和电流(Isat)与温升电流(Irms)；

  

# **下面我们来介绍下BUCK电流的工作过程：**

当开关管Q1开关管导通，储能电感L1被充磁，流经电感的电流线性增加，同时给电容C1充电，给负载R1提供能量。等效电路如图二

![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_003_e004cc283df2.jpg)

图二

当开关管Q1开关管关断，储能电感L1通过续流二极管放电，电感电流线性减少，输出电压靠输出滤波电容C1放电以及减小的电感电流维持（此电路中的二极管D1，起到的是续流作用）等效电路如图三

![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_004_f2730bdd56a1.png)

在BUCK电路中，电容和二级管的选取相对比较容易的，电感的两个参数，电感电流大小的选择也还好（实在不会，饱和电流和温升电流选二者小的电流能满足要求的即可），但电路中电感的感值选取和计算是我们经常所面临的一个难点；所以小编认为BUCK电路学习中，电感才是最重要的器件，大家怎么看？  

硬件工程师及从业者都在关注我们

![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_005_2e84b7ba26c6.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_006_51d069a6484e.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_007_5fb296583be4.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_008_1f30148044c0.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_009_c5bc86d0867d.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_010_b38438d4de46.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_011_1d54e9fe0aef.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_012_9bb0105b1e46.gif)

![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_013_de88c48250d0.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_014_3b83df2d253b.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_015_db521919e8d9.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_016_aea384ea417e.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_017_f4924e7a240a.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_018_a58db91dbb3b.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_019_f0edc68b0c53.gif) ![](MOS管加三个元件就组成BUCK电路_为何说难点在于电感__images/img_020_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源卧龙会IT技术。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群