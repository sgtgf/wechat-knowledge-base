# STM32芯片引脚为什么有那么多组VDD？

原创 蜗牛 硬件笔记本 2022-11-30 07:28 四川

> 原文地址: [https://mp.weixin.qq.com/s/4B4JNegNROdpZrcGikn2fw](https://mp.weixin.qq.com/s/4B4JNegNROdpZrcGikn2fw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

大家好，我是蜗牛兄。

做过单片机产品的朋友都知道，STM32芯片有多组VDD和VSS，如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32芯片引脚为什么有那么多组VDD__images\img_002_b08f6d8daaec.png)

那么为什么有这么多引脚呢？少一点不好吗？引脚越少，PCB走线越容易。

  

其实芯片这样设计是有原因的。  

**1、增加电流供应能力**

单片机IO口输出电流的能力是有限的，传统单片机的IO口一般为10mA左右，现在单片机的IO口一般为20-25mA。

多个IO口加起来，相当于增加了很多供电通道，扩大了电流供应能力。相比单个引脚的VDD，增强了可靠性。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32芯片引脚为什么有那么多组VDD__images\img_003_a2c7bb6d324d.png)

如图，假如一个IO口流过的电流是20mA，三个IO口就是60mA。

  

**2、方便就近取电**

为了方便描述，我画了一个如下示意图。

假如只有一组VDD，从①处供电，当②处需要用电时，只能沿着箭头所示路径流动，可以看出距离较远。  

当负载增大时，VDD电流产生突变，路径距离越长，产生的压降越大，电源波动越明显，从而影响单片机的正常工作。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32芯片引脚为什么有那么多组VDD__images\img_004_ebf14b19590d.png)

如果此时，在单片机②处直接外接电源VDD，路径最短，电源最稳定。

## 

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。