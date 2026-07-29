# 为何我的BJT在冒烟？常见BJT开关电路讲解

原创 电路一点通 2025-06-14 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_HDhMdBZJ5DWs1RUisxTYA](https://mp.weixin.qq.com/s/_HDhMdBZJ5DWs1RUisxTYA)

## NPN型开关电路

NPN型BJT的开关电路应用十分广泛，特别是在学校做课设或者参加比赛时，比如用单片机来控制蜂鸣器，单片机的引脚一般只能输出几个毫安的电流，而一般蜂鸣器至少也要几十个毫安，这时就需要一个驱动电路来控制，NPN型BJT的开关电路是首选。NPN型BJT开关电路十分经典的电路应用如图所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\为何我的BJT在冒烟_常见BJT开关电路讲解_images\img_000_5e67bf94048b.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\为何我的BJT在冒烟_常见BJT开关电路讲解_images\img_001_31adb3695680.png)

上面两个电路最大的区别就是有无集电极的限流电阻，先来说说其他电阻的作用。

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\为何我的BJT在冒烟_常见BJT开关电路讲解_images\img_002_de0f8e9c8594.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    
-   
    

### 电阻的作用

【1】R1的作用。  
电阻R1为基极限流电阻，顾名思义它就是限制基极的电流大小；BJT的两个PN结都会消耗功率，然后以热量的形式耗散，即就是其耗散功率Pc，对于Pc主要还是来源于集电极的PN结，但是也不可忽略发射结产生的热量，功率P=Ib·Vbe，一般将Ib的电流控制在几个毫安内，其耗散功率也就几个毫瓦，属于非常好的状态，所以R1不能太小。  
图中Ib≈（3.3V-0.7V）/1KΩ=2.6mA

  
【2】R2与R3的作用。  
电阻R2、R3的主要作用就是确保BJT能够可靠的关断。当基极为低电平时NPN型BJT会截止，但是如果有干扰（电平时间非常短），这两个电阻就是很好的通路能够滤掉干扰；另外我们的单片机引脚在初始化的过程中可能会出现高阻抗（输出电平不确定）的情况，这时下拉电阻能够很好的将电平拉低，确保三极管可靠截止。

  

### 何时加上集电极的限流电阻

这个得根据实际情况而定，比如上方的电路图中，左边负载是5V/1W的灯泡，也就是在额定电压5V下流过灯泡的电流为200mA，然而我们的VDD也才5V，Vce的电压很小可忽略不计，此时点炮恰好工作在最稳定的状态下，再者**200mA也没有超过Ic的最大电流**，所以不加限流电阻直接上；右边负载为2.1V@20mA的LED，也就是LED最大工作电流为20mA，此时压降为2.1V，VDD远高于了LED的工作电压，所以必须要加限流电阻（也就是分压）；还有一种情况就是即便VDD恰好等于2.1V，但为了考虑LED的使用寿命，我们希望电流小一点，那就得加限流电阻，即便限流电阻会分掉一小部分电压，其实LED可能在1.9V就导通了，选好合适的限流电阻并不会影响LED的正常工作。

### 为何不将负载接在发射极上

首先请注意本文是把BJT当做开关来使用，不是放大电路。  
![请添加图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\为何我的BJT在冒烟_常见BJT开关电路讲解_images\img_003_cce7e1b52dd1.jpg)  
如图BJT有①②两个回路，并且①回路控制②回路，两个回路的电流都会流向发射极。

  
【1】如果将负载接在发射极，负载波动将会影响两个回路，①回路受影响又会回过头影响②回路，所以稳定性不好。  
【2】发射极接负载之前，基极的电压只需略高于0.7V就能让发射结导通，在接了负载之后还需要加上负载正常工作的压降才能够使发射结导通，这样一来就增加了控制端口的电压，如果负载正常工作电压高一点，那基极的电压就可能必须要高于3.3V才能让其正常工作，这与主流的单片机输出电平不相符，如果需要单片机控制还需外加电路，增加了电路的复杂性。

  

## 为何我的BJT在冒烟

BJT由两个PN结组成，分别是集电结和发射结，这两个PN结在正常工作时都是会发热的，热量在可控范围内就相安无事，如果失控可能就会冒烟。  
BJT的基本参数中有个叫Pc（耗散功率），由于发射结上的电流（Ib）一般我们都给得很小（除非你不加限流电阻直接上），再加上Vbe也不大，其实它的耗散功率一般最大就几个毫瓦，对于BJT而言完完全全能接受，所以**Pc主要来源于集电结上的耗散功率**，集电结的耗散功率偏大一般有两种原因。  
  

【1】BJT导通了，但是并没有工作在深度饱和区，此时Vce可能就比较大，当Ic的电流急剧增大时Pc=Ic·Vce自然就非常大，超过了BJT的最大耗散功率（一般而言三百毫瓦）就会冒烟咯。

  
【2】BJT工作在深度饱和区，Vce的确很小了，但集电极的限流电阻没选好，导致集电极可能电流很大，这样也会冒烟咯。

  
其实BJT冒烟有很多原因，比如BJT选型不合适，比如负载短路等等，具体问题需要具体分析，这里只是老道遇见的比较常见的，并不能代表一切问题，我们在选择BJT之前一定要考虑好参数，要保证留有一定的裕度，同时一定确保BJT工作在深度饱和区。  
  

## 总结

【1】NPN典型的开关电路在应用时一定要确保其工作在深度饱和区；  
【2】负载尽量不要接在发射极；  
【3】Ib的电流尽可能的小（几个毫安就很大了），好控制发射结上的耗散功率保持在很小的范围；  
【4】在选择BJT的时候一定要注意Pc（耗散功率）参数，选择合适的集电极限流电阻（阻值、功率等）。  
【5】具体问题具体分析，具体应用具体分析，不要拿着人家的电路就直接用。

  

**备注：小白理解，不喜勿喷，欢迎大家批评指正**

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[汽车双离合变速器DCT构造图、原理示意图【高清】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521706&idx=1&sn=09948151d8ee20f9632c8e71de8a3bfe&scene=21#wechat_redirect)**
    
-   [汽车电工与电子技术基础-134页.ppt课件](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521325&idx=3&sn=e7646f5fbf9522b77a1610eb7da22c53&scene=21#wechat_redirect)
    
-     
    
-   [汽车底盘维修就这么简单-277页](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516274&idx=1&sn=44213b25db64ac1441d2d5cc97bbdc7f&scene=21#wechat_redirect)
    
-     
    
-   [比亚迪唐-高压电器系统:动力电池总成、BMS电池控制器、高压配电箱](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247512775&idx=1&sn=701e61a751329c81504be6b29d38b643&scene=21#wechat_redirect)
    
-     
    
-   [汽车CAN总线布置结构、器件应用pptx](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247508407&idx=2&sn=3822d7aa36c7fad034b8f1571edabbe0&scene=21#wechat_redirect)
    
-     
    
-   [汽车双离合变速器DCT构造图、原理示意图【高清】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521706&idx=1&sn=09948151d8ee20f9632c8e71de8a3bfe&scene=21#wechat_redirect)
    
-     
    
-   [汽车发动机冷却系统构造与维修.pptx（61页）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521705&idx=2&sn=ccfd1c23e0ba3d1685a2e31491a9181d&scene=21#wechat_redirect)
    
-     
    
-   [汽车电工与电子技术基础-134页.ppt课件](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521325&idx=3&sn=e7646f5fbf9522b77a1610eb7da22c53&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\为何我的BJT在冒烟_常见BJT开关电路讲解_images\img_004_983a9a8760e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️