# HDMI接口的EMC设计

原创 硬件笔记本 2023-07-07 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/5MIUV-2UUKapWCxYCEbEsQ](https://mp.weixin.qq.com/s/5MIUV-2UUKapWCxYCEbEsQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

**HDMI接口介绍**

HDMI一般指高清视频接口，目前应用于机顶盒、电视、笔记本电脑、游戏主机、综合扩大机、数字音响等设备。HDMI是一种数字化视频及音频接口技术，可以同时传送音频和影像信号。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\HDMI接口的EMC设计_images\img_002_7f65a6d42140.png)

  

**EMC****设计要求**

HDMI接口的超高传输速率，接口体积小，对EMC设计要求非常高，HDMI接口EMC设计不合理可能会影响的EMC项目如下表：

电源口测试项目

项目介绍

基本试验等级

电路影响的EMC项目

备注

RE（辐射发射）

沿通讯线的辐射骚扰

CISPR 22 CLASS B

影响

各种应用环境都需要考虑

ESD（静电放电）

通讯口的防静电能力

接触+/-4kV 空气放电 +/-8kV

影响

各种环境应用都需要考虑

RS（辐射抗扰度）

  

3V/m

影响

  

EFT（快速瞬变脉冲群）

通讯口的脉冲群抗干扰能力

+/- 1000V

影响

走线较长，以及附近干扰源较多的环境需要考虑

**HDMI****接口原理设计**

典型的HDMI EMC设计电路（图1）

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\HDMI接口的EMC设计_images\img_003_ce06b137c773.png)

图1

1、L1~L4建议使用专业HDMI共模电感，建议值为90R(100M),因为普通共模电感寄生电容太大，会导致TMDS差分阻抗匹配测试失败。  

  

2、D1~D8为ESD防护器件也要求低电容效应，这样才能保证信号传输质量不受影响。

  

3、L5要求建议使用600R（100M）, 同时要注意规范要求在HDMI Tx 的测试中会接一个吸取55mA电流的负载，然后测试输出电压，要求电压在4.8V和5.3V之间。如果串接了一个10欧姆的电阻，结果造成输出电压为，5－10x0.055 = 4.45V< 4.8V，此项测试失败。C1，C2为电源滤波电容，C2也可起到稳定HDMI电压作用。

  

  

**HDMI接口PCB设计**

1、 在图中元器件布局要紧凑，元器件位置要按照信号流向进行布局，遵循先防护后滤波的原则，ESD防护器件靠近connect，其次为共模电感；

  

2、 每组差分信号走线要保证平行等长走线，周围用地线包地，并打过孔到下层地；尽量避免换层，不同层的阻抗和过孔等差别会降低差模传输效果而引入共模噪声；避免导致阻值不连续性的90度走线，可用圆弧或135度折线来代替。

  

3、在进行PCB铺铜设计时，注意防护器件以及共模电感正下方掏空处理；

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。