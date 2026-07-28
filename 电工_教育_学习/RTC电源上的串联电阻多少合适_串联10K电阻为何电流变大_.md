# RTC电源上的串联电阻多少合适？串联10K电阻为何电流变大？

原创 硬件笔记本 2024-07-12 07:58 四川

> 原文地址: [https://mp.weixin.qq.com/s/rNm-Y8gXirwWQU7xzAt\_Ig](https://mp.weixin.qq.com/s/rNm-Y8gXirwWQU7xzAt_Ig)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

之前分享了一位兄弟的RTC笔记，现在网上看到一个案例，有用到RTC的兄弟们可以一起看看 

  

一、 摘要 

现在几乎所有的电子产品都带RTC功能，因此RTC电池的寿命肯定是越长越好。 

二、 问题描述 

本案例是一个带RTC功能的工业产品，RTC部分的供电电路如下下图，产品发往市场半年以后，就提示更换RTC电池，远远低于设计寿命5年。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgBZ2bAeny5tdyLRHXicJB7p0Dm9Dt0rBonJBte24xI6CHbPbvMLY2E4aN5gZRk1EUXvtUUUnJyRXw/640?wx_fmt=png&from=appmsg)

图1-有问题的RTC电池供电电路

  

三、 原因分析

产品返回公司以后，我们更换上新的RTC电池，串联高精度万用表进去测量电流，发现RTC的工作电流高达100uA, 和我们设计的5uA有很大的差距。我们怀疑的点有：1、二极管D3漏电流太大，设备断电时，通过D3倒流到系统的电源上。

2、RTC芯片影响，原来的RTC芯片为NXP-PCF8563P，手册描述备用电源时功耗为0.25uA；中途有更换国产RTC；

3、RTC电源线路上有漏电路，例如电容的漏电流

4、电阻R71影响。

我们通过排除法，先排除D3，因为去除D3，电流只减小1uA左右；接着排除RTC电源上电容等漏电流，因为去除电容电流依然有100uA左右。

将RTC芯片更换为NXP-PCF8563P。电流正常，大约只有4uA。接着我们换回国产RTC，同时将电阻更换为100R，则电流也正常，只有4uA左右。

  

于是我们引出两个疑问:

（1）RTC电源上的串联电阻多少合适？

（2）为何串联10K的限流电阻会导致RTC芯片不仅没有变小，反而电流增大；

1\. RTC电源串联电阻阻值多少合适？

RTC电源上串联的电阻阻值在网络上的争论一直在，有人说0R，有人说1K、10K等各种阻值，但是能够理论讲清楚的基本没有。

首先我们 要明白这个电阻的目的：限流。参考各个厂商的一次性纽扣电池，以阳光动力的CR2025为例，其他品牌类似，厂家要求电池在任何情况下都不允许短路，否则有可能炸裂或者爆炸。因此，一旦发生后级短路时，限流电阻必须将电流限定在最大持续放电电流以内，运行产品工作不正常，但是不允许产品起火甚至爆炸。

因此该型号的限流电阻最小值为 R=V/I=3V/3mA=1KΩ；对于电池来说，电阻可以比该阻值大，但是不能比该阻值小。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgBZ2bAeny5tdyLRHXicJB7pIAtJ56ibOvYqYeQPMoJaicQeEFaTuWnXMhyJLvDb2cfTyvQ47lYASwvA/640?wx_fmt=png&from=appmsg)

图2-电池厂家的电池规格要求

  

2\. 串联10K电阻为何电流变大 ？

回答问题前，我们先了解一下RTC芯片的特性：

（1）、RTC芯片有两种工作模式，一种是正常工作模式，一种是备用电源工作模式，如下图，两者的供电电流可以相差200倍；

（2）、每一种模式下，RTC芯片都可以理解为一个恒流源，比如电池模式需要1uA左右，正常模式需要200uA左右；

（3）、RTC的芯片的电压范围非常广，可以在1.5V~5.5V之间都可以正常工作。

RTC芯片可以理解为一个电流源，串联一个10K的电阻，当流过电流为100uA时，在电阻上的压降将会达到1V，如果此时电池电压只有2.6V，则RTC芯片的工作电压只有1.6V，如果电池电压更小，RTC芯片获得的电压更低，由于RTC芯片工作电压范围很广，但是需要的电流是基本不变的，为了获得足够的电流，RTC芯片可以理解为进一步降低阻抗，导致电流进一步加大。\*\*\*可能在正常工作模式和备用电源模式之间的切换的逻辑不够清晰，导致使用电池的时候也进入正常工作模式。（此为猜测，没有从厂商的资料中找到根据）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgBZ2bAeny5tdyLRHXicJB7pVicicDZbFCDO8gTSMNWUqqhodF8f7Beic0bpcFzHbs2xku3NOC55ccf7A/640?wx_fmt=png&from=appmsg)

图3-RTC芯片的直流工作参数

  

四、 解决方案

经过上述分析可知，为了延长电池的寿命，主要降低RTC回路上的电流。回路上的损耗主要有：电阻、二极管、RTC芯片、电容。

1、RTC电池模式电流

目前大部分的厂家的RTC芯片在电池模式下可以做到几百nA到1uA左右，因此RTC电流可以按照1uA进行估算。

2、二极管的漏电流

二极管的主要损耗在于漏电流，因此需要选择漏电流尽可能小的二极管，下图是BAS70系列二极管的漏电流的曲线图，为例保守起见，也可以按照1uA进行估算。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgBZ2bAeny5tdyLRHXicJB7pHfYAdvMX39NVxYmGICbn1j5VrLklcXdnerq3IttpBk4U3LhaHAh7icQ/640?wx_fmt=png&from=appmsg)

图4-BAS70系列二极管漏电流 /温度/电压曲线

  

3、电容损耗

电容的损耗主要也是体现在漏电流，RTC电池对电源要求不高，因此使用100nF的电容滤波即可，漏电流可以评估约0.5uA。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgBZ2bAeny5tdyLRHXicJB7p7cYLmCOrRYlzpPQcgE0xfahfEkFr1np7iaXllf7WgvrwDqzWQsWFbSw/640?wx_fmt=png&from=appmsg)

图5- 常见陶瓷电容漏电流

  

4、电阻损耗

经过上述分析，总的电流=二极管漏电流+RTC芯片电流+电容漏电流=1uA+1uA+0.5uA=2.5uA。电阻一般可以选择1K。RTC芯片和电阻为串联关系。1K电阻1uA的压降 ：

V=IR=1K\*2.5uA=0.0025V

功率为

p1=U\*U/R=0.0025V\*0.0025V/1000=0.00625uW

RTC芯片的功率

P2=UI=（3V-0.2V-0.0025V）\*1uA=2.7975uW

电阻的损耗占比=P1/P2=0.089%，因此电阻的损耗基本可以忽略不计。

5、电池的寿命估算

以阳光动力电池CR2025为例，电池自放电损失约每年1%，标称容量为150mAH，上述案例的寿命评估

T=150mAh\*95%/（二极管漏电流1uA+RTC电流1uA+电容漏电流0.5uA）=57000H≈6.5年。

  

6、最终的解决方案

以阳光动力电池CR2025为例，二极管更换为更低漏电流1uA左右的BAS70系列，电阻只串联在电池上，只防电池短路，限制电流在3mA。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgBZ2bAeny5tdyLRHXicJB7pQ4bUHkZbWDHItHz9ibDden7ViaDYXg6tbC710xvm9LiakG6DD9zVq5vgw/640?wx_fmt=png&from=appmsg)

图6- 改善后的RTC供电电路

  

五、总结

本文回复了RTC的两个问题。

1、RTC电池要不要串联电阻，电阻阻值多少合适。

2、RTC 寿命的评估考虑因素

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。