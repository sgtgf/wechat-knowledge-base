# I2C上拉电阻如何取值？

原创 硬件笔记本 2023-01-11 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/ZvJJ0rPRd\_STULj8g1H81A](https://mp.weixin.qq.com/s/ZvJJ0rPRd_STULj8g1H81A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

文章直接来源：硬件攻城狮

I2C一般为开漏结构，需要在外部加上拉电阻，常见的阻值有1k、1.5k、2.2k、4.7k、5.1k、10k等。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXsYvXCPtUql7b4aabAjicJ7NEmlb39h1nMP3R4tIWKSKnJQN686R6Mh4Q/640?wx_fmt=png)

但是应该如何根据开发要求选择合适的阻值呢？  

  

假设SDA是低电平时，即MOS管导通。那么，就可以求出上拉电阻R的阻值。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXsUJLbuuytLFGGH5Ej7VoFk1seIIHZUnOFOjGwB7WQjK79QvcvkTtnew/640?wx_fmt=png)

上拉电阻计算公式：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXszOcBPmB4cicVyXSD0VFpMHwrkafpWL6xXIb8icl1GY7mwqAicR2906RMw/640?wx_fmt=png)

VOL定义为在漏极开路或集电极开路时，有3mA下拉电流时的低电平输出电压。IOL就是该端口的灌电流，即IOL=3mA。

  

由上式可得，当VDD不变， VOL取最大值时，上拉电阻有最小值。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXsYNFj0buqol68V7bc1beuz7BiakGKcdtfA2dptyBwP8GGiaP3dWr98nnw/640?wx_fmt=png)

根据I2C协议，端口输出低电平的最高允许电压是0.4V。

  

公式1可以改为：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXsNibdibWkyWhPU7dn10uhYmm5ibKUmSCQqdiakEic5QNaYPtNCn6JgmtBv2Q/640?wx_fmt=png)

由式2可以得出：电源电压决定了上拉电阻的最小值。因此，当VDD=5V时，最小上拉电阻约为1.5k；当VDD=3V3时，约为1k。

  

由于I2C总线端口的高电平是通过上拉电阻实现，线上的电平从低变高时，电源通过上拉电阻对线上负载电容CL充电，这需要一定的上升时间。

  

电容充电一般公式：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXskic1MmDYA4LGvSUBLMubTUjYaBe8M2ZaW5uVJMUZ8hRTMGy30sSImHA/640?wx_fmt=png)

整理可得：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjLCrnBuudG6zIhrkGiaPicXslhz0Y3g7gaiafMYUeqQ6HyZHQJlMBftOibFD7dbGUOc3WSibqBnk0CFlA/640?wx_fmt=png)

  

  

I2C规范将低于VIL或0.3VDD的电压定义为逻辑低电平，同样将高于VIH或0.7VDD的电压定义为逻辑高电平，由式4可以求得：

  

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgHRPXRydU2GoGcFiaFlKronSR5NyrHfNe6blnkpDmu1OJcFUJhy2N06CPicgpSNCicmv6rWMbXCXF5g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgHRPXRydU2GoGcFiaFlKronVgKdf46HoDdzNaqYBRxr9ytGB156PY7EBN1NuCBZTB6xP80ibO6cTtg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgHRPXRydU2GoGcFiaFlKronibSNALDd2uxFXwFiaHKArU5BtyUIFQkovOLoHQPmkTvUeWwdWpazelCg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgHRPXRydU2GoGcFiaFlKronSHOL6icdNKnwppu9vPPS7H3q6tuZKHVKL9lJxGiaAzxacg8gz32mRl6w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

由公式5可判断，当Tr取最大值，CL取最小值时，R有最大值。

  

由于不同模式下，上升沿的最大时间及总线负载最大容限要求不同，标准模式、快速模式、高速模式分别是：1000ns/400pF、300ns/400pF、120ns/550pF。

  

以快速模式下，负载电容50pF为例，则有：

  

![](https://mmbiz.qpic.cn/mmbiz_png/eSTNcxMia1TgHRPXRydU2GoGcFiaFlKronLWJo8MVzaW8onGMeZ3oCVzv1m2KH7yLHBRtBmUGTH9y5Iffd5f1zzw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**结论：电源电压决定上拉电阻的最小值，总线负载电容决定上拉电阻的最大值。**

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。