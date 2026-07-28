# TTL与CMOS，很基础但很多人不知道

原创 硬件笔记本 2023-03-16 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/kHjRXdkFEXxde5IhKvrQzg](https://mp.weixin.qq.com/s/kHjRXdkFEXxde5IhKvrQzg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

问题引入

在工作中，会遇到OC门与OD门的称谓。而感性的认识一般为：OD门是采用MOS管搭建的电路，压（电压）控元器件。

OC门是采用晶体管搭建的电路，流（电流）控元器件。而OD门的功率损耗一般是小于OC门，为什么？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgAqRHJAgLqy5KeFTKAehE2icayYV3x1RZV1C7LDVEdg9hibENlcEQgm09Y7ibdHLd2jszYzg8nlDV1w/640?wx_fmt=png)

  

## 电平

### TTL电平：

输出电平：高电平Uoh >=2.4v  低电平Uol <= 0.4v

输入电平：高电平Uih >= 2.0v  低电平 Uil <= 0.8v

### CMOS电平：

输出电平：高电平Uoh ≈ VCC  Uol ≈ GND

输入电平：高电平Uih >= 0.7\*VCC  Uil <= 0.2\*VCC

备注：VCC是电源电压 GND是数字地

CMOS电路是电压控制器件，由于是压控，元器件的输入电阻较大。

由此，元器件对于干扰信号比较敏感，因为输入电阻大，干扰信号会全部输入到元器件中。

由此，CMOS电路的输入端管脚，最好不要开路，给定状态，接地或者接到电压源上。

输出高低电平：TTL 输出电平容限：2.4v -0.4v= 2.0v

                           CMOS输出电平容限：VCC （3.3v or 5v）

输入高低电平：TTL输入电平容限：2.0v-0.8v = 1.2v

                           CMOS输入电平容限：（0.7-0.2）VCC≈（1.65v 0r 2.5v）

由此可见，CMOS电路的输入输出高低电平容限较宽。

  

  

## 压控与流控

TTL电路是流控电路，是依靠电流起控制作用的。通过控制基极电流来控制晶体管的工作情况（发射极 集电极电流的工作情况）。

CMOS电路是压控电路，依靠电压起控制作用。控制栅极与源极的电压，控制CMOS工作在关断区还是截止区。

由于TTL是流控器件，电流起作用，电路的响应速度较快，状态建立时间在在5-10ns，而CMOS电路是压控器件，状态建立时间25-50ns。

由建立时间可以知道，TTL电路的电流较大。由此其功耗较大。

而元器件功耗与另一因素有关。开关频率，开关频率越大，消耗的功率越大，表现为热。

  

  

## 注意事项：

### CMOS电路：

CMOS电路输入端，需要确定默认状态，不能悬空，因为输入管脚对于干扰信号的很敏感，一旦悬空，很容易引入干扰。

CMOS电路的输入电流不要超过1mA。不然，容易烧毁元器件。

输入端外界大电容，需要在输入端与电容间串接保护电阻，形成滤波电路，避免烧毁元器件。电阻选取原则R=V/1mA   

V：外界电容的电压。

  

  

### TTL电路

TTL电路输入端悬空相当于端接高电平。相当于输入端外界一个阻值无穷大的电阻。

TTL门电路的输入端串联电阻不能过大。如果过大，会引起控制逻辑混乱。即控制端是低电平。在三极管的基极被抬高为高电平。

TTL电路在截止状态下，OC门依然有电流，称为漏电流。而晶体管在截止状态下，控制电压存在，

而由于有漏电流，导致在截止状态下，依然有功率损耗。

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

[](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)

[后台回复“加群”，管理员拉你加入技术交流群。](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)