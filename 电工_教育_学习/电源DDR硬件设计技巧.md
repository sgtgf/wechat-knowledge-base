# 电源DDR硬件设计技巧

原创 硬件笔记本 2023-06-01 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6h4gNnGPgytg\_aimcSSP2Q](https://mp.weixin.qq.com/s/6h4gNnGPgytg_aimcSSP2Q)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**1、电源DDR的分类**  

  

  

A、  

主电源VDD和VDDQ

  

主电源的要求是VDDQ=VDD，VDDQ是给IO buffer供电的电源，VDD是给内核供电。但是一般的使用中都是把VDDQ和VDD合成一个电源使用。  

有的芯片还有专门的VDDL，是给DLL供电的，也和VDD使用同一电源即可。

电源设计时，需要考虑电压、电流是否满足要求。

电源的上电顺序和电源的上电时间，单调性等。

  

电源电压的要求一般在±5%以内。电流需要根据使用的不同芯片，及芯片个数等进行计算。由于DDR的电流一般都比较大，所以PCB设计时，如果有一个完整的电源平面铺到管脚上，是最理想的状态，并且在电源入口加大电容储能，每个管脚上加一个100nF~10nF的小电容滤波。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyMV5x52wPdibia7M7W4zicmqxicdjJzD3uNyg04lyy4OHArdK1CU9VSmXQw/640?wx_fmt=png)

  

  

B、

参考电源Vref

  

参考电源Vref要求跟随VDDQ，并且Vref=VDDQ/2，所以可以使用电源芯片提供，也可以采用电阻分压的方式得到。由于Vref一般电流较小，在几个mA~几十mA的数量级，所以用电阻分压的方式，即节约成本，又能在布局上比较灵活，放置的离Vref管脚比较近，紧密的跟随VDDQ电压，所以建议使用此种方式。需要注意分压用的电阻在100Ω~10kΩ均可，需要使用1%精度的电阻。Vref参考电压的每个管脚上需要加10nF的电容滤波，并且每个分压电阻上也并联一个电容较好。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyB97voFGenSicXxmPibSb7osVicuhMyAtEPobk8g9eXooyvujJFUUVutEQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86Iy35YhI6vm1MkEOL6kCNtoLGnQyXoiaPeoBgCuXtCX8zZnfzyjqYvF9cQ/640?wx_fmt=png)

  

  

C、  

用于匹配的电压VVT

  

VTT为匹配电阻上拉到的电源，VTT=VDDQ/2。DDR的设计中，根据拓扑结构的不同，有的设计使用不到VTT，如控制器带的DDR器件比较少的情况下。如果使用VTT，则VTT的电流要求是比较大的，所以需要走线使用铜皮铺过去。并且VTT要求电源即可以吸电流，又可以灌电流才可以。一般情况下可以使用专门为DDR设计的产生VTT的电源芯片来满足要求。

而且，每个拉到VTT的电阻旁一般放一个10nF~100nF的电容，整个VTT电路上需要有uF级大电容进行储能。  

一般情况下，DDR的数据线都是一驱一的拓扑结构，且DDR2和DDR3内部都有ODT做匹配，所以不需要拉到VTT做匹配即可得到较好的信号质量。DDR2的地址和控制信号线如果是多负载的情况下，会有一驱多，并且内部没有ODT，其拓扑结构为走T型的结构，所以常常需要使用VTT进行信号质量的匹配控制。

  
  
DDR3可以采用Fly-by方式走线：

一个DDR3设计案例，来分析对比采用高阻抗负载走线和采用主线和负载走线同阻抗两种情况的差异。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86Iy78bfE4k0ag5pOee2DicbxQehicNvKVicyKhOqWrYSXSicfTQInQG982BsQ/640?wx_fmt=png)

如上图，Case1采用的是从内层控制器到各个SDRAM均为50ohm的阻抗设计。Case2则采用了主线40ohm,负载线60ohm的设计。对此通过仿真工具进行对比分析。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasRz1ds0FZMic24ibSkc86IyJEl1Zh0YVBMcXg8hRsH7CmGt5DJkJDRlcXMrfVKw6Pc3PHsyr1gtKA/640?wx_fmt=png)

从以上仿真波形可以看出，使用较高阻抗负载走线的Case2在信号质量上明显优于分支主线都采用同一种阻抗的Case1设计。

而且对靠近驱动端的负载影响最大，远离驱动端的最末端的负载影响较小。这个正是前面所分析到的，负载的分布电容导致了负载线部分的阻抗降低，如果采用主线和负载线同阻抗设计，反而导致了阻抗不连续的发生。把负载走线设计为较高的阻抗，用于平衡负载引入的分布电容，从而可以达到整条走线阻抗平衡的目的。

通过提高负载走线阻抗来平衡负载电容的做法，其实在以往的菊花链设计中是经常用到的方法。DDR3称这种拓扑为fly-by，其实是有一定的含义的，意在强调负载stub走线足够的短。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。