# 做硬件，必须要看懂MOS管手册

原创 硬件笔记本 2024-11-14 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/vdkYQJBu6FTf2lgN-KTTdA](https://mp.weixin.qq.com/s/vdkYQJBu6FTf2lgN-KTTdA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

MOS管数据手册上的相关参数有很多，以MOS管VBZM7N60为例，下面一起来看一看，MOS管的数据手册一般会包含哪些参数吧。

极限参数也叫绝对最大额定参数，MOS管在使用过程当中，**任何情况下都不能超过下图的这些极限参数，否则MOS管有可能损坏**。

[![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1JgXUicbXPpHk8TheVZeH9ia1bIT5vkxUZOPRJV2NSZZphC3RDQRic0zNEHDv8uxxq2HdBDIDiaggeVcQ/640?wx_fmt=png&wxfrom=13&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzg4MTYzMjUxOA==&mid=2247508784&idx=1&sn=55ab9f9925e6ff1b55e4f4f8414769e5&chksm=cf601759f8179e4f1ac42c0c7aedf6e3e74c27fd9d2faaf8f8ff5f685267afe40cf109d04157&scene=21#wechat_redirect)

  

**VDS**表示漏极与源极之间所能施加的最大电压值。

**VGS**表示栅极与源极之间所能施加的最大电压值。

**ID**表示漏极可承受的持续电流值，如果流过的电流超过该值，会引起击穿的风险。

**IDM**表示的是漏源之间可承受的单次脉冲电流强度，如果超过该值，会引起击穿的风险。关注公众号：硬件笔记本

  

**EAS**表示单脉冲雪崩击穿能量，如果电压过冲值(通常由于漏电流和杂散电感造成)未超过击穿电压，则器件不会发生雪崩击穿，因此也就不需要消散雪崩击穿的能力。EAS标定了器件可以安全吸收反向雪崩击穿能量的高低。

  

**PD**表示最大耗散功率，是指MOS性能不变坏时所允许的最大漏源耗散功率，使用时要注意MOS的实际功耗应小于此参数并留有一定余量，此参数一般会随结温的上升而有所减额。（此参数靠不住）

  

**TJ, Tstg**，这两个参数标定了器件工作和存储环境所允许的结温区间，应避免超过这个温度，并留有一定余量，如果确保器件工作在这个温度区间内，将极大地延长其工作寿命。

  

**dV/dt**反映的是器件承受电压变化速率的能力，越大越好。对系统来说，过高的dv/dt必然会带来高的电压尖峰，较差的EMI特性，不过该变化速率通过系统电路可以进行修正。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYlBDJichhrJVykFTff823AhcBkibKbRGUsbicib6pULmjCicWib5qhy3cCJrQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**热阻**表示热传导的难易程度，热阻分为沟道-环境之间的热阻、沟道-封装之间的热阻，**热阻越小，表示散热性能越好**。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYX9mqSEWfmQ5ScaL2Y1n1iaCicT4vaV7HgjnJbib9oHT93luLAVZ1J6I7g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**△VDS/TJ**表示的是漏源击穿电压的温度系数，正温度系数，其值越小，表明稳定性越好。

  

**VGS(th)**表示的是MOS的开启电压(阀值电压)，对于NMOS，当外加栅极控制电压 VGS超过 VGS(th) 时，NMOS就会导通。

  

**IGSS**表示栅极驱动漏电流，越小越好，对系统效率有较小程度的影响。

  

**IDSS**表示漏源漏电流，栅极电压 VGS\=0 、 VDS 为一定值时的漏源漏流，一般在微安级。

  

**RDS(ON)**表示MOS的导通电阻，一般来说导通电阻越小越好，其决定MOS的导通损耗，导通电阻越大损耗越大，MOS温升也越高，在大功率电源中，导通损耗会占MOS整个损耗中较大的比例。

  

**gfs**表示正向跨导，反映的是栅极电压对漏源电流控制的能力，gfs过小会导致MOSFET关断速度降低，关断能力减弱，过大会导致关断过快，EMI特性差，同时伴随关断时漏源会产生更大的关断电压尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYBe9memSBxJ1c4j68ibv7vBlhUruxdaHZ2wIrFrYPySbDITa1AW0YX7g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**Ciss**表示输入电容，Ciss\=Cgs+Cgd，该参数会影响MOS的开关时间，该值越大，同样驱动能力下，开通及关断时间就越慢，开关损耗也就越大。关注公众号：硬件笔记本

  

**Coss**表示输出电容，Coss\=Cds+Cgd；Crss表示反向传输电容，Crss\=Cgd(米勒电容)。这两项参数对MOSFET关断时间略有影响，其中Cgd会影响到漏极有异常高电压时，传输到MOSFET栅极电压能量的大小，会对雷击测试项目有一定影响。

  

**Qg、Qgs、Qgd、td(on)、tr、td(off）、tf**这些参数都是与时间相互关联的参数。开关速度越快对应的优点是开关损耗越小，效率高，温升低，对应的缺点是EMI特性差，MOSFET关断尖峰过高。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsY7HFv8ics9yGnTsc6v8PEcjdDCxPuo9T1OKzibgMtwNLGicaDhticUSdcDw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**IS 、ISM**这些参数如果过小，会有电流击穿风险。

**VSD、trr**如果过大，在桥式或LCC系统中会导致系统损耗过大，温升过高。

**Qrr**该参数与充电时间成正比，一般越小越好。

  

**输出特性曲线**是用来描述MOS管电流和电压之间关系的曲线，特性曲线会受结温的影响，一般数据手册上会列出两种温度下的特性曲线。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYHxXnKnTZp8eQh2yKke0xvGz0ibicjNGJM14dlhr4aMSJtv2T0ialpIa0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYTicpejw80RKjpcwkgiaQjIFAzullMHicJ7iaU93ianNmkbqXFrfptuTvttA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

根据MOS管的输出特性曲线，取Uds其中的一点，然后用作图的方法，可取得到相应的**转移特性曲线**。从转移特性曲线上可以看出当Uds为某值时，Id与Ugs之间的关系。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYzJtwtVL1dQlfbnUias2Uo7TpRAuZNpFnFPACQ6Dml7AibavnmY1icfb6w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

MOS的**导通电阻**跟结温是呈现正温度系数变化的，也就是结温越高，导通电阻越大。MOS数据手册上一般会画出当VGS=10V时的导通电阻随温度变化的曲线。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYnDjslD18Rq1ZA7H8xe1odfN4zGiaB747SeFafQDPO2u0wbgkqWKouSA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

电容容量值越小，栅极总充电电量QG越小，开关速度越快，开关损耗就越小，开关电源DC/DC变换器等应用，要求较小的QG值。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYwfFgdhsgz3hkokpBsHicp66o0YJaflsS3s0KKLmoClnxgyDwGsjTR0g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYbvicUibBqKgYkGWITeMunBFmvCopLTTyYlPqjIufFQMfia8VHWrKV2zag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

MOS管一般会有一个寄生二极管，寄生二极管对MOS管有保护的作用，它的特性跟普通的二极管是一样的，也具有正向导通的特性。

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYncHH6a12RMIS14iaBp8qpwicBUv4BlYibV9ltibmiaXJib08NdScicQCqOUNA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

最大安全工作区是由一系列(电压，电流)坐标点形成的一个二维区域，MOS管工作时的电压和电流都不能超过该区域，如果超过这个区域就存在危险。

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYHRGtKX9wJEGmehxJpxTV9oWrwRXbOpq8B0hDbu0Viba4Z7sBvrpFiaVw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYfSwxOaLGYPWqTibZ0sqstiaW7diaqwJw7vJDA777g9WHvXaafMEFfwJpA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsYGxQ5QegBmBU7fFHhVKevaicwgRmbwKg0y6hyMT8SL436YrEFh7dt3kg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/NMBmZoISq1Kc1kun0WVNGm0siaMvqKMsY4SlAhwiaaZeVMcIgoX1chaXYDJnB4Tm32RwjuFLFHjtDbibiapTVtneJA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

可以看到，MOS管的相关参数其实有很多，其实，在一般应用中，我们主要考虑漏源击穿电压VDS、持续漏极电流ID、导通电阻RDS(ON)、最大耗散功率PD、开启电压VGS(th)，开关时间，工作温度范围等参数就可以了。关注公众号：硬件笔记本

  

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpQvHwjHHqyVg59KzponKUXpOg5ynXzOHs40lCXUaWtovFsNlZm4MgicA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

\-END-

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)