# 天天在用的ADC，内部原理你了解吗？

原创 硬件笔记本 2023-03-30 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/Nc45vOrO7pelTsXFLwS\_kw](https://mp.weixin.qq.com/s/Nc45vOrO7pelTsXFLwS_kw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

前言

用了这么久ADC,从没细看过ADC的内部原理和如何获得最佳精度，今天看到一篇ST的官方文档讲的不错，这里整理分享给大家。

  

SAR ADC内部结构

STM32微控制器中内置的ADC使用SAR（逐次逼近）原则，分多步执行转换。转换步骤数等 于ADC转换器中的位数。每个步骤均由ADC时钟驱动。每个ADC时钟从结果到输出产生一 位。ADC的内部设计基于切换电容技术。

  

下面的图介绍了ADC的工作原理。下面的示例仅显示了逼近的前面几步，但是该过程会持续到LSB为止

  

SAR切换电容ADC的基本原理（10位ADC示例）

  

带数字输出的ADC基本原理图

![](https://mmbiz.qpic.cn/mmbiz_png/kGhsmWeejanUr5uuH5kK4TXbf4Ql5uBibRQj7TQDxAJLlkUsPNxlO9ysCCVJTziaGLzObjXNWwCDD2tp49oYusrw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

采样状态

采样状态：电容充电至电压VIN。Sa切换至VIN，采样期间Sb开关闭合

![](https://mmbiz.qpic.cn/mmbiz_png/kGhsmWeejanUr5uuH5kK4TXbf4Ql5uBib2GM5hC48OkzYicjpMTL90EYxRf4hh9Ob1SFXZ0Oypd1OwEevXfZcPyw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

保持状态

保持状态：输入断开，电容保持输入电压。Sb开关打开，然后S1-S11切换至接地且Sa切换至VREF。

![](https://mmbiz.qpic.cn/mmbiz_png/kGhsmWeejanUr5uuH5kK4TXbf4Ql5uBibTricLZ2Sa63EhuvXgQib1nicUYIkeG9pHcoGEp6WHmPu1FpKLv0uN1C1A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

逐次逼近

1、第一个逼近步骤。S1切换至VREF。VIN与VREF/2比较

![](https://mmbiz.qpic.cn/mmbiz_png/kGhsmWeejanUr5uuH5kK4TXbf4Ql5uBibBDCRLN67vdGOv01gBeMeuGKCOhpy1v6KZfIYghnqs1oiacicMVJSpf4Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

2、如果MSB = 0，则与¼VREF进行比较，S1切换回接地。S2切换至VREF。

![](https://mmbiz.qpic.cn/mmbiz_png/kGhsmWeejanUr5uuH5kK4TXbf4Ql5uBibjIWaQnw7icBEMcF9AKQ8yyEkzuaibVicZGicRKIXChD04gXoSVeLovs1UA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

3、如果MSB = 1，则与¾VREF进行比较，S1保持接地。S2切换至VREF。

![](https://mmbiz.qpic.cn/mmbiz_png/kGhsmWeejanUr5uuH5kK4TXbf4Ql5uBib99492wZJn8Ekx1Ddhb78WjG4hr9S0Xa7e8dvLLVmOEyMnQYpEibt1Yw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

  

重复如上步骤，直到LSB为止。可以简单理解为二分法逐次进行输入电压与参考电压的比较。首次于VREF/2比较，下次比较根据上次比较结果决定，如果MSB=1则与¾VREF比较。如果MSB=0则与¼VREF比较。后面决定与1/8VREF 3/8VREF、 5/8VREF、 7/8VREF之一做比较。循环直到输出LSB为止。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。