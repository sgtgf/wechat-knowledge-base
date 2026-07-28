# 电视机的按键功能是用什么电路实现的？经典ADC按键电路

原创 LR梁锐 硬件笔记本 2023-06-17 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/\_VOxgAsQhblUrenhkVsdFQ](https://mp.weixin.qq.com/s/_VOxgAsQhblUrenhkVsdFQ)

# ▼关注下方公众号了解更多▼

  

电视机的按键功能是用什么电路实现的呢？实践出真知，咱们先从电视机里把这个按键电路找出来。

拿这台海信电视机下手：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPL6G5Hzbh0UAL7KsmYsw5NRME9aJiacKUcjjxQjb6pAvs8rJmL1ibbQeA/640?wx_fmt=jpeg)

按键在背面，靠左边：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPBqFWduc8JzRMjV381fp1epG3EoruggTwicHyYicJCugoLmVGqUvnbFyA/640?wx_fmt=jpeg)

放大了看，共7个实体按键：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPcqwajn1mJsPb2DYW9Lfg8SLrkCLMbNCUYxbe900KYFZd23fQvyt7NQ/640?wx_fmt=jpeg)

拆开看内部的电路，放平电视，开拆：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPuTTv2XozPyx4D32oLvOf3pn0PrNkQz0ymtZHyQMNmgrWrf6Ujh5S6A/640?wx_fmt=jpeg)

打开后盖：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPjJE4QBeskWAYJjbk8CKQRawjgqa9mKgbWfsN5loOHPCMEMRjw0tK4g/640?wx_fmt=jpeg)

按键板从后壳拆了下来，发现按键板通过3根电线（图中用蓝紫色标出的线）连接到液晶电视控制板：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPovyav4O7UGFVTBsW0Ls8CkansqUaRzEJKDd9FKajibqtRCvFhPIEKPQ/640?wx_fmt=jpeg)

按键板确实是只接了3根线：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPltFHhGthvznDNFwfaLl3L8geDAg3z1HlZfSIoVPHZRiagbyqKgqmW0g/640?wx_fmt=jpeg)

还需要进一步拆开：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPKa2x1GYiap4ghiaSX81kO9YesLfgArlltoLjJhqBZOxBL4cDWGz4xYvw/640?wx_fmt=jpeg)

拆开，拿出绿色的按键板：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPUluDKiapt3iadqw34Z2BeCDl14WDpYUsa7CYdp4iafwBDQImb8Wf1YQhA/640?wx_fmt=jpeg)

按键板的背面：

![](https://mmbiz.qpic.cn/mmbiz_jpg/cGtViclN98GD8e4VEgCIauD7LEqM4RDicP4bCia4KxLEA17nr5NjbbDyiapvCmdLSsOeD6lXjricQWqQDNibNhnGq1zg/640?wx_fmt=jpeg)

现在算是把电路实物找出来了，只用了3根线就实现了7个按键。

  

一、电路原理

3根线实现7个按键，什么原理？

直接上电路原理图！不同电视厂家的设计会有一点差异，但基本都是这个原理：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPqWga7tWkspnR6eThHTE3sMSmTMXAZ3ALMic7seRowM8PjibDUWPxVLGg/640?wx_fmt=png)

原理图很简单，“液晶电视控制板”上的主控芯片有ADC功能，用ADC侦测电压的大小来判断。

1、当只按下开关SW1时，由于电阻R1和R3对3.3V进行分压，ADC侦测到的电压为0.073V：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicP7p1YccJ0nBRMdR1kDe5tVVyMnhMv2tn8wyicPDtL6FZnxrEdoxn04Yg/640?wx_fmt=png)

2、当只按下开关SW2时，ADC侦测到的电压为0.767V：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPv1pJH8kpcrf1mziaiazO0r5e3Jl59YpQcaPUXvG7X1ChvKP0Iz4Rrk6g/640?wx_fmt=png)

3、当只按下开关SW3时，ADC侦测到的电压为1.650V：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPa9mQuPsiaMzJ7DGCCtfq1vuoeMbuD2bH0CjdticHKibY3b0zucTcAHib5Q/640?wx_fmt=png)

4、当只按下开关SW4时，ADC侦测到的电压为2.222V：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPGly68RwlUlnCicv0kLqp4XSWDyEWYTsrjRrtKYaJibmPHkP7UNXSCyRA/640?wx_fmt=png)

基于上述原理，只需2根信号线就可以实现4个按键的功能，见下图：

①下图右侧的ADC信号线“MCU\_ADC1”；

②下图右侧的地线“GND"。

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPMId9iaD7WyLbSMUu3dDliawicYjyBibaOwpPGUCmwQfwBelQB0lS1FF8rA/640?wx_fmt=png)

再增加一个“MCU\_ADC2"，就可以3根线实现8个按键，比这台海信电视的7个按键还要多，见下图：

①ADC信号线“MCU\_ADC1”；

②地线“GND"；

③ADC信号线“MCU\_ADC2”。

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPKe9Rt1qlhr3wAuCVBveiauFa6PyBQGhIMjjgqzneHD0O4MHOXvAxmSg/640?wx_fmt=png)

二、电路优化

实际在工程应用中，没有这么简单，还需要加入一些防护措施，以一组4个按键为例来说明。

1、首先加入防静电措施。可以用TVS管来做静电防护，见下图的D1（图中实际使用的是比TVS管更便宜的压敏电阻，料号ICVL0518030FR）。静电会被D1导到地：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPVGRKRiciccubAmj0ibNB98Me82gf1oV6CribvEF9YtOCfWwZxQYSVSiaJDw/640?wx_fmt=png)

2、这还不够，再串接电阻R2，阻止静电传导到主控芯片：（由于ADC的输入阻抗很高，R2对ADC电压侦测的影响可以忽略不计）

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicP6ufHf17RPW63Wgv1yrw9p7SVP4d4h5DLWKweQ3WsVWKiaJwTJnicJiaSQ/640?wx_fmt=png)

3、最后加入小容量电容来消除按键的抖动，滤除高频干扰：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPgDQUXU7DAibJOnO4Fv5OomibcKJnibJtnCF8Sqd5FJqmOMvINlvupmp3Q/640?wx_fmt=png)

最终电路见下图，是经过量产验证的电路：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPSBEBtmQ3icPhJYicwTC1cViccTdEiaYU1BbZsMgFrfotibdwlLbbWCaWrlw/640?wx_fmt=png)

  

三、继续进阶  

以下的按键电路方案也是电视机上批量使用的方案，1个ADC搞定8个按键，参数可以照抄：

![](https://mmbiz.qpic.cn/mmbiz_png/cGtViclN98GD8e4VEgCIauD7LEqM4RDicPa2jUPe8licd0DWCzqsFWaAY0rTrnbRnaZ7Iq5liaddN9JfiaUXDxqny4w/640?wx_fmt=png)

这个电路的巧妙之处在于，按键具有优先级之分。假设按下了按键SW1，那么再按下SW2-SW8中的任何一个都是不起作用的，即SW1的优先级最高，SW2次之，以此类推。

经过前面的分析，这个电路相信大家一看就懂^-^

  

四、最后

分享的都是量产级别的电路，如果觉得写得还不错，点个赞鼓励一下哈，下次再见！

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。