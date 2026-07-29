# 轻松搞懂MOS管datasheet

原创 硬件笔记本 2023-09-24 11:10 四川

> 原文地址: [https://mp.weixin.qq.com/s/lUhdGAQx1ERzoV8DCa3RPQ](https://mp.weixin.qq.com/s/lUhdGAQx1ERzoV8DCa3RPQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**极限参数**

公众号：硬件笔记本

极限参数也叫绝对最大额定参数，MOS管在使用过程当中，**任何情况下都不能超过下图的这些极限参数，否则MOS管有可能损坏。**

![](轻松搞懂MOS管datasheet_images/img_002_c70df068d47e.jpg)

**VDS** 表示漏极与源极之间所能施加的最大电压值。

**VGS** 表示栅极与源极之间所能施加的最大电压值。

**ID** 表示漏极可承受的持续电流值，如果流过的电流超过该值，会引起击穿的风险。

**IDM** 表示的是漏源之间可承受的单次脉冲电流强度，如果超过该值，会引起击穿的风险。

**EAS** 表示单脉冲雪崩击穿能量，如果电压过冲值(通常由于漏电流和杂散电感造成)未超过击穿电压，则器件不会发生雪崩击穿，因此也就不需要消散雪崩击穿的能力。EAS标定了器件可以安全吸收反向雪崩击穿能量的高低。

  

**PD** 表示最大耗散功率，是指MOS性能不变坏时所允许的最大漏源耗散功率，使用时要注意MOS的实际功耗应小于此参数并留有一定余量，此参数一般会随结温的上升而有所减额。（此参数靠不住）

  

**TJ, Tstg ，**这两个参数标定了器件工作和存储环境所允许的结温区间，应避免超过这个温度，并留有一定余量，如果确保器件工作在这个温度区间内，将极大地延长其工作寿命。

  

**dV/dt** 反映的是器件承受电压变化速率的能力，越大越好。对系统来说，过高的dv/dt必然会带来高的电压尖峰，较差的EMI特性，不过该变化速率通过系统电路可以进行修正。

  

  

  

**热阻**

公众号：硬件笔记本

![](轻松搞懂MOS管datasheet_images/img_003_9a3b48ccdf86.jpg)

热阻表示热传导的难易程度，热阻分为沟道-环境之间的热阻、沟道-封装之间的热阻，热阻越小，表示散热性能越好。

  

备注：元器件降额分析，计算MOS温升时，需要用到此参数

  

  

  

  

**技术参数**

公众号：硬件笔记本

**☀静态参数**

![](轻松搞懂MOS管datasheet_images/img_004_6a41c7eda2ab.jpg)

**△VDS/TJ** 表示的是漏源击穿电压的温度系数，正温度系数，其值越小，表明稳定性越好。

**VGS(th)** 表示的是MOS的开启电压(阈值电压)，对于NMOS，当外加栅极控制电压 VGS超过 VGS(th) 时，NMOS就会导通。

**IGSS** 表示栅极驱动漏电流，越小越好，对系统效率有较小程度的影响。

**IDSS** 表示漏源漏电流，栅极电压 VGS=0 、 VDS 为一定值时的漏源漏流，一般在微安级。

**RDS(ON)** 表示MOS的导通电阻，一般来说导通电阻越小越好，其决定MOS的导通损耗，导通电阻越大损耗越大，MOS温升也越高，在大功率电源中，导通损耗会占MOS整个损耗中较大的比例。

**gfs** 表示正向跨导，反映的是栅极电压对漏源电流控制的能力，gfs过小会导致MOSFET关断速度降低，关断能力减弱，过大会导致关断过快，EMI特性差，同时伴随关断时漏源会产生更大的关断电压尖峰。

  

**☀动态参数**

![](轻松搞懂MOS管datasheet_images/img_005_8c401184248c.jpg)

**Ciss** 表示输入电容，Ciss=Cgs+Cgd，该参数会影响MOS的开关时间，该值越大，同样驱动能力下，开通及关断时间就越慢，开关损耗也就越大。

**Coss** 表示输出电容，Coss=Cds+Cgd；Crss表示反向传输电容，Crss=Cgd(米勒电容)。这两项参数对MOSFET关断时间略有影响，其中Cgd会影响到漏极有异常高电压时，传输到MOSFET栅极电压能量的大小，会对雷击测试项目有一定影响。

**Qg、Qgs、Qgd、td(on)、tr、td(off）、tf** 这些参数都是与时间相互关联的参数。开关速度越快对应的优点是开关损耗越小，效率高，温升低，对应的缺点是EMI特性差，MOSFET关断尖峰过高。

  

**☀**漏源体二极管特性****

![](轻松搞懂MOS管datasheet_images/img_006_68d8c21e4fab.jpg)

**IS 、ISM** 这些参数如果过小，会有电流击穿风险。

**VSD、trr** 如果过大，在桥式或LCC系统中会导致系统损耗过大，温升过高。

**Qrr** 该参数与充电时间成正比，一般越小越好。

  

  

**特性曲线**

公众号：硬件笔记本

**☀**输出特性曲线****

输出特性曲线是用来描述MOS管电流和电压之间关系的曲线，特性曲线会受结温的影响，一般数据手册上会列出两种温度下的特性曲线。

![](轻松搞懂MOS管datasheet_images/img_007_014ef96922e7.png)

  

**☀**转移特性曲线****

根据MOS管的输出特性曲线，取Uds其中的一点，然后用作图的方法，可取得到相应的转移特性曲线。从转移特性曲线上可以看出当Uds为某值时，Id与Ugs之间的关系。

![](轻松搞懂MOS管datasheet_images/img_008_0f7cb4b39057.png)

  

**☀****导通电阻随温度变化的曲线******

MOS的导通电阻跟结温是呈现正温度系数变化的，也就是结温越高，导通电阻越大。MOS数据手册上一般会画出当VGS=10V时的导通电阻随温度变化的曲线。

![](轻松搞懂MOS管datasheet_images/img_009_a31053b43a6f.png)

**☀******电容与源漏极电压曲线********

电容容量值越小，栅极总充电电量QG越小，开关速度越快，开关损耗就越小，开关电源DC/DC变换器等应用，要求较小的QG值。

![](轻松搞懂MOS管datasheet_images/img_010_bd3c52b27d43.png)

![](轻松搞懂MOS管datasheet_images/img_011_3ce150e5800b.png)

**☀********正向导通电压曲线（指的是寄生二极管导通，而不是DS压降）**********

MOS管一般会有一个寄生二极管，寄生二极管对MOS管有保护的作用，它的特性跟普通的二极管是一样的，也具有正向导通的特性。

![](轻松搞懂MOS管datasheet_images/img_012_00d409b4f64c.png)

**☀**********最大安全工作区************

最大安全工作区是由一系列(电压，电流)坐标点形成的一个二维区域，MOS管工作时的电压和电流都不能超过该区域，如果超过这个区域就存在危险。

![](轻松搞懂MOS管datasheet_images/img_013_931ebac138f4.png)

硬件工程师及从业者都在关注我们

![](轻松搞懂MOS管datasheet_images/img_014_2e84b7ba26c6.gif) ![](轻松搞懂MOS管datasheet_images/img_015_51d069a6484e.gif) ![](轻松搞懂MOS管datasheet_images/img_016_5fb296583be4.gif) ![](轻松搞懂MOS管datasheet_images/img_017_1f30148044c0.gif) ![](轻松搞懂MOS管datasheet_images/img_018_c5bc86d0867d.gif) ![](轻松搞懂MOS管datasheet_images/img_019_b38438d4de46.gif) ![](轻松搞懂MOS管datasheet_images/img_020_1d54e9fe0aef.gif) ![](轻松搞懂MOS管datasheet_images/img_021_9bb0105b1e46.gif)

![](轻松搞懂MOS管datasheet_images/img_022_de88c48250d0.gif) ![](轻松搞懂MOS管datasheet_images/img_023_3b83df2d253b.gif) ![](轻松搞懂MOS管datasheet_images/img_024_db521919e8d9.gif) ![](轻松搞懂MOS管datasheet_images/img_025_aea384ea417e.gif) ![](轻松搞懂MOS管datasheet_images/img_026_f4924e7a240a.gif) ![](轻松搞懂MOS管datasheet_images/img_027_a58db91dbb3b.gif) ![](轻松搞懂MOS管datasheet_images/img_028_f0edc68b0c53.gif) ![](轻松搞懂MOS管datasheet_images/img_029_3c93e54afedf.gif)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群