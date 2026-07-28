# DC-DC升压电路，就是这么简单

原创 硬件笔记本 2023-05-09 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/\_AH4rguYSJhmX7bxl3LqhA](https://mp.weixin.qq.com/s/_AH4rguYSJhmX7bxl3LqhA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**一**

  

**什么是 DC-DC 转换器？**

  

  

DC-DC 转换器是一种电力电子电路，可有效地将直流电从一个电压转换为另一个电压。

  

DC-DC 转换器在现代电子产品中扮演着不可或缺的角色。这是因为与线性稳压器相比，它们具有多项优势。尤其是线性稳压器会散发大量热量，与 DC-DC 转换器中的开关稳压器相比，它们的效率非常低。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNv0uJbPMfIzPexYQicrzKQtdzpkSZAPYyuBPMrOzeM9rJCkiaGDicyg2IOg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

DC-DC 升压电路

  

在介绍 DC-DC 转换器 的工作原理之前，看一个示例，为什么 DC-DC 转换器这么有用？假设构建一个具有以下要求的电路：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvHkN5g4EL1BlhUJ8u2609dLqo5QFqkGw38sicqSksdb35RA1aW49FNNQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

  

-   2Ω 负载电阻
    
-   12V 直流电源
    
-   5V 负载电压
    

  

我们需要降低 12V 电池的电压，为负载提供 5V 电压。我们可以将一个2.8Ω的电阻与负载串联，以提供所需要的电压。

  

先计算电路的效率如下：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvbuX0w9ib0Ric6nicxMGNW0GXuVZScAhYjbDTicop2yttZibliasDK80Mbfkg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

  

从这些计算中，我们可以看到负载仅仅消耗了 12.5W 的输入功率，剩余部分 (30 – 12.5 = 17.5 W) 转化为热量。

  

照这么来看，其实是有点浪费的，如果触摸串联电阻，会有点热，这里需要结合机制来冷却电路，为了获得更优的解决方案，可以看下面的电路：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNv0uJbPMfIzPexYQicrzKQtdzpkSZAPYyuBPMrOzeM9rJCkiaGDicyg2IOg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

  

开关断开时，输入电压为 0V，控制在 ON 位置时，输入电压为 12V。下图分别显示了开关位置 ON 和 OFF 的等效电路。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNv17SdyqZibvO9d0KYia540H3icfFbBJUUyBr0KpmViaueYI1fryib905UKwA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路等效电路

  

如果我们如下图（a）所示控制开关，我们得到如下图（b）所示的电压图。T为切换周期，单位为毫秒或微秒。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvv9gpwxq97BTqMibFSn44kmJUnfW7l4LSYoQac2wR9OCOQajn7QzXYwA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

  

在这种情况下，这种开关行为的平均输出电压为 5V，因为：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvpzeBMybfbia902AlvaYUeJpfuAgSshaX1mje4fHkUEZWHWibXbiahlvUQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路

  

该电路的平均输出电压为5V，但我们可以通过使用RC滤波电路去除谐波来改善输出波形。

  

如果我们假设开关是理想的（理想开关是不消耗或耗散电源的开关），我们可以计算出该电路的效率为 100%。当开关处于 ON 位置时，流过电路的电流为 6A。

  

由于我们有一个理想的开关，耗散功率为 P\_diss = RI 2 = 0 \* 9 2 = 0W。当开关处于关闭位置时，没有电流流过开关，因此在这种情况下，耗散功率也为 0。

  

然而在实际应用中，找到一个理想的开关是比较困难的，这就意味着实际上会有一些功耗，虽然有功耗，但转换的效率仍旧很高。

  

**二**

  

**DC-DC 升压电路**

  

  

# DC-DC 升压电路主要是增加电源的电压，例如：升压转换器可以采用 5V 电源并将其升压至 25V。通常，你会在电池充电器或太阳能电池板中找到 DC-DC 升压转换器。它们还可用于从同一电池为具有不同工作电压的组件供电。

  

这种配置将直流电压升高到由电路中组件选择决定的水平。这是升压转换器的一般示意图。

  

**0****1**

  

  

**升压开关打开状态**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvOfDibiaAnJPBo5ISezOKM9SXtnPfiaR7wMxicBmqX3zrfxrFaDBxiaBJTyg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

升压开关 ON 状态

  

**0****2**

  

  

**升压开关关闭状态**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNviayLRSZIG5WiaPlb9T1NRlYia1Ka6iccXxJbrTkRpN9O4WGDNJnTg4UTpA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

升压开关关闭状态

  

基本配置包括直流电源（Vin）、电感（L）、二极管（D）、开关器件（SW）、平滑电容（C）和负载电阻（Load），Vout 是输出电压。

  

开关通常是功率电子器件，例如由 PWM 信号控制的 MOSFET或BJT 晶体管。该 PWM 信号通过非常快速地切换晶体管来工作，通常每秒数千次。

  

**三**

  

**DC-DC 升压电路工作原理**

  

  

假设当前的电压是 5V，需要将 5V 转换为更高的电压值，用 DC-DC 升压电路就可以实现，这里假设我们是管道工。

  

**0****1**

  

  

**涡轮加速**

首先我们需要加速涡轮。为此，节气门打开，水快速排放，将部分能量传递给涡轮机，结果涡轮机开始旋转。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNv4pII2TuhBPJBRJEYhgWw4erlOwvKYWUfvfGMEaWjwvk6Jfz11ww50A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

  

**0****2**

  

  

**填充压力储罐**

  

油门关闭，由旋转的涡轮飞轮半部推动的一部分水打开阀门并填充储水箱，另一部分水在储水箱提供的高压下流向消费者，同时阀门防止水倒流。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNv6Uo869ibVN8963UKoaCRVg657tAxIayygpicpC5iaDHBy6hib3oISVRt3Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

  

**0****3**

  

  

**从压力储罐发电并加速涡轮机**

  

涡轮的速度开始下降。水不能再推动阀门，储水箱仍有足够的能量积累。然后油门再次打开，水开始快速旋转涡轮。由于消费者从储罐接收能量，因此流向消费者的能量不会停止，然后循环重复。

  

现在工作原理已经很清楚了，我们将从管道设备切换到电子设备。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvbibNloNdcgOAUMNr9icV4RDmEW3ymDibia5rMndIpCRrVC5t76Sdhuic1fQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

  

我们用感应节流阀代替了涡轮机。晶体管用于代替控制水流的节流阀。二极管起阀门作用，用电代替储压罐。

  

下面就可以很好的理解，DC-DC 升压电路的工作原理。

  

**1**

电感累积电荷

开关已关闭，电感通过从源接收电流来积累能量。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNv6myOXjBq0rz1Uibes0icPgHS7hU01uz5wzFdoyIOawnfZaicbQ7NnW8nA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

**2**

将能量转移到电容

开关打开，线圈保持磁场中积累的能量。电流试图保持在同一水平，但来自电感的额外能量会提高电压，从而打开通过二极管的路径。一部分能量流向消费者，而剩余能量在电容器中积累。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvgsq3XbO4ibosmHTpsS1M556CTXgdPAxqK9Y3ASGn8M4s7HuRwRUo2Ng/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

**3**

在电感中积累能量并将电荷转移给消耗的电路

然后开关被锁定，线圈再次开始积累能量，同时，消耗的从电容接收能量。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7zDPuiaLN8wDXrRsJVBLBeNvJAEBGgb8Yq87yPEFh4sV2NEkMMQdjKibicFn9mtcYcPibe9qiczgTvOoMg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

DC-DC 升压电路工作原理

直接转载来源：今日头条李工谈元器件，如有侵权，请联系删除，谢谢！

转载链接：

https://www.toutiao.com/article/7137947444272235023/

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。