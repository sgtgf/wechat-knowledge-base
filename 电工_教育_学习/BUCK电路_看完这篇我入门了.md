# BUCK电路，看完这篇我入门了

原创 硬件笔记本 2022-10-22 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/DVDgIt8jlGS2oEpk1sal8Q](https://mp.weixin.qq.com/s/DVDgIt8jlGS2oEpk1sal8Q)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")  

  

Buck、Boost、Buck-Boost作为直流开关电源中应用广泛的拓扑结构，属于非隔离的直流变换器。本文将对其中的Buck电路展开详细介绍。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeC0xKzczgLhzydV668Xpl8CrRtUH46LFBaYlgKnjC9zibYdBbHLuxbIA/640?wx_fmt=png)

\*Buck基础拓扑电路

降压式（Buck）变换器是一种输出电压≤输入电压的非隔离直流变换器。Buck变换器的主电路由开关管Q，二极管D，输出滤波电感L和输出滤波电容C构成。  

  

下面，就让我们先通过一个短视频了解Buck电路的工作原理吧！

看完这个视频，有没有对Buck电路拥有初步了解呢？

  

  

接下来将从以下三部分介绍

1\. 开关整流器基本原理 

2\. 传说中的“伏-秒平衡” 

3\. 同步整流死区时间等

  

**Part 1 开关整流器基本原理**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeVTqdibbzRAQGCEiaRd8BVib1eFdjWVE13Os32WGjicbaCbUmZGVKUSPXdQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTejISGny5WLbC9l4sfich5iaZaUUPUugZfkXF5RTgMhUdYgpPlgQ8FEhBQ/640?wx_fmt=png)

  

导通时间

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTevkJ9zG37ibUERyCKiavjley1DU4CLKvbWeITqLQzo6hAoKZQPEdag3gw/640?wx_fmt=png)

关断时间

在\[0,Ton\]期间，开关导通；

在\[Ton，Ts\]期间，Q截止。

  

设开关管开关周期为Ts，则开关频率fs=1/Ts。导通时间为Ton，关断时间为Toff，则Ts=Ton+Toff。设占空比为D，则D=Ton/Ts。改变占空比D，即改变了导通时间Ton的长短，这种控制方式成为脉冲宽度调制控制方式（Pulse Width Modulation, PWM）。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgczPQgzIiaiaflsz13iadq2bX0frJPy4YHjhCHBZaZ1SxZAdXIKsIb4wHdYgCg8rn8nuh6a7IRPYKicQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeXpicXRp10L2RxcXx30pHfrKzKAUp5l0F6RIteF2PxT3OicqSCUiaBTvVg/640?wx_fmt=png)

Buck电路特征

•  输出电压≤输入电压 

•  输入电流断续

•  输出电流连续 

•  需要输出滤波电感L和输出滤波电容C

  

**Part 2 传说中的“伏-秒平衡”**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTeO84icmmKNm1ppDIoQxXOP5wzIMjr5zzPyzmnQlFXW49hOM8udJS1Gog/640?wx_fmt=png)

  

伏秒原则，又称伏秒平衡，是指开关电源稳定工作状态下，加在电感两端的电压乘以导通时间等于关断时刻电感两端电压乘以关断时间，或指在稳态工作的开关电源中电感两端的正伏秒值等于负伏秒值。

  

在一个周期 T 内， 电感电压对时间的积分为 0，称为伏秒平衡原理。正如本文开头视频中指出，任何稳定拓扑中的电感都是传递能量而不消耗能量， 都会满足伏秒平衡原理。

  

**Part 3 同步整流死区时间**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTe5g6MkFSzIQckQM1kbwvNKh0remd5kDzEbLFY595NxB6HVz7IHLFopg/640?wx_fmt=png)

同步整流是采用极低导通电阻的的MOSFET来取代二极管以降低损耗的技术，大大提高了DCDC的效率。

  

物理特性的极限使二极管的正向电压难以低于0.3V。对MOSFET来说，可以通过选取导通电阻更小的MOSFET来降低导通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTelJYq6dCmyEdt64tMj52L2IfHehIhdeH9qDmvAZl4AR8D71iaFh7GjHQ/640?wx_fmt=png)

在开关电源系统中，死区时间（Dead Time）是指为了避免两个晶体管开关同时导通而引入的屏蔽时间。

连接的两个晶体管开关通过交互地闭合和关断来决定线圈中电流的增减。为避免两个晶体管同时导通造成不必要的电流浪涌，即需控制电路在开关动作引入死区特性。在死区时间内，需要完成对已导通晶体管的关断和另一晶体管的导通。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgVRqq08NxiaSVkUXzmW9JTecfef0s26DOia1zMxoujU6xXQgEpHzz54dSrFFc5j7Yw9wicVAkanEickQ/640?wx_fmt=png)

死区时间

•  设置必要的死区时间以防止短路。  

•  死区时间越小，体二极管传导越少。

•  死区时间越小，损耗越小，效率越高。

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。