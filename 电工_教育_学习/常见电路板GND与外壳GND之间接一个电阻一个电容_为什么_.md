# 常见电路板GND与外壳GND之间接一个电阻一个电容，为什么？

原创 硬件笔记本 2023-06-20 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/if8YTfQVwXsk5vSdT9JRZA](https://mp.weixin.qq.com/s/if8YTfQVwXsk5vSdT9JRZA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

![](https://mmbiz.qpic.cn/mmbiz_png/tGxRKz6VNHWBOkicSo7dv59KccSPmS7NdvmliclILQRp0rfbMnheWNibp2HUf0Qj8SEW6L67yVVwvFzPKNhEInr0A/640?wx_fmt=png&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

外壳是金属的，中间是一个螺丝孔，也就是跟大地连接起来了。这里通过一个1M的电阻跟一33个1nF的电容并联，跟电路板的地连接在一起，这样有什么好处呢？

  

-   外壳地如果不稳定或者有静电之类的，如果与电路板地直接连接，就会打坏电路板芯片，加入电容，就能把低频高压，静电之类的隔离起来，保护电路板。电路高频干扰之类的会被电容直接接外壳，起到了隔直通交的功能。
    

  

-   那为什么又加一个1M的电阻呢？这是因为，如果没有这个电阻，电路板内有静电的时候，与大地连接的0.1uF的电容是隔断了与外壳大地的连接，也就是悬空的。这些电荷积累到一定程度，就会出问题，必须要与大地连接才行，所以这里的电阻用于放电。  
    

  

-   1M的电阻这么大，如果外面有静电，高压之类的，也能有效降低电流，不会对电路内的芯片造成损坏。
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/tGxRKz6VNHUCNAVbDNOcf73YY3cAVoz93S9NXpaREvjGCkzuia5PB6NtUQmZL0YosPXxOdOaaztXeehJmeGm93g/640?wx_fmt=png&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。