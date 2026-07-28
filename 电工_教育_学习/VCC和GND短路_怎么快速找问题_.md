# VCC和GND短路，怎么快速找问题？

原创 蜗牛 硬件笔记本 2022-11-16 07:28 四川

> 原文地址: [https://mp.weixin.qq.com/s/7bV4yInIbnJOUqMLPbGWiA](https://mp.weixin.qq.com/s/7bV4yInIbnJOUqMLPbGWiA)

**![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")**

  

大家好，我是蜗牛兄。

做硬件的小伙伴应该都有这样的经历，都会遇到VCC和GND短路情况。今天就跟大家分享遇到这种情况时，我们一般都是怎么来找问题的。

为了更清晰的描述，我画了个简单的示意图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhibcSbcn7n5PWiaDb5eFlpTQdIztR98yqzl87HDP6ZNcbTlT43qzyLQv7sehF4wLWHI7edyb0SC5cQ/640?wx_fmt=png)

我们的主板一般都是输入直流电压Vin，然后经过DC/DC芯片转换成我们想要的电压，然后供给单片机，运放，CPU或者其他芯片。

如图，VCC同时给芯片IC1，IC2和IC3供电，如果发现VCC到地短路了，怎么办？

  

首先确认是不是真的短路？

有些电源的滤波电容比较大，断电后如果马上去测，VCC跟GND是通的，那是因为电容的电没有放完，并不是真的短路。

  

确认VCC跟GND短路后，我们一般有以下方法来找问题。

## 一、排除法

排除法就是把跟VCC相关的网络逐一排除，直到找到问题的根源。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhibcSbcn7n5PWiaDb5eFlpTQTOZcmL7ug6pCImTZzpzKgICC16TnGMz1AicOMibvSUOZG0uQ4Qud2ibgg/640?wx_fmt=png)

首先可以尝试先将图中的位置1断开，如果正常，后级电路引起的短路，则可以依次断开位置2，3，4。

如果还是短路，则是DC/DC芯片本身的问题，取下来就可以了。

但有时你会发现，就算按照上面的办法操作了，结果还是短路。我就遇到过一次这样的情况，后来发现是0.1uF的瓷片电容击穿，仔细查看才知道电容选型错误，耐压不够，造成大批板子返工。

所以跟VCC相关的滤波电容也要检查一下，不过一般情况下是不容易坏的。  

  

## 二、热成像仪法

这个方法就比较简单了，慢慢上电，用热成像仪观察，哪个元件最烫（迅速升温），那么它肯定就有问题，换下来就可以了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhibcSbcn7n5PWiaDb5eFlpTQ9kKibuJtxgnibia1gXcDakGS2V2voogHeG2Zmgkjy0MeoZXKuKO1CvxWw/640?wx_fmt=png)

一般公司都会有热成像仪，没有的赶紧向公司申请一个。  

  

## 三、松香法

这是跟我们公司一个老前辈学的。将5V网络连接的芯片周围同时抹一层助焊剂松香，比如上面的芯片IC1，IC2，IC3和DC/DC。

  

如果哪个芯片上的松香融化了，就说明是哪里短路了。

因为短路后电流很大，芯片的功耗很大，芯片本身就会产生很大的热量（之前测试芯片温升会＞100℃），松香受热融化。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhibcSbcn7n5PWiaDb5eFlpTQEcP1G2qDXDGs2Y3Zk58txdm4ryRcAEhadRMF0hanmkH1pf51Kgic1MA/640?wx_fmt=png)

最后，如果是打样的新板，最好先用眼睛扫视一下，如果有锡渣短路，或者漏插件一眼就看出来了。确保第一次上电正常，否则维修会浪费很多时间。  

  

今天的分享就到这里，希望对你有帮助。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。