# 8种开关电源MOS管的工作损耗计算

原创 硬件笔记本 2023-07-05 00:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/lEFCrZlsoAJMYDy6AKIqPQ](https://mp.weixin.qq.com/s/lEFCrZlsoAJMYDy6AKIqPQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

MOSFET 的工作损耗基本可分为如下几部分：

**1、导通损耗Pon**

  

导通损耗,指在 MOSFET 完全开启后负载电流（即漏源电流） IDS(on)(t) 在导通电阻 RDS(on) 上产生之压降造成的损耗。

  

导通损耗计算：

先通过计算得到 IDS(on)(t) 函数表达式并算出其有效值 IDS(on)rms ，再通过如下电阻损耗计算式计算：

Pon=IDS(on)rms2 × RDS(on) × K × Don

  

说明：

计算 IDS(on)rms 时使用的时期仅是导通时间 Ton ，而不是整个工作周期 Ts ；RDS(on)会随 IDS(on)(t) 值和器件结点温度不同而有所不同，此时的原则是根据规格书查找尽量靠近预计工作条件下的 RDS(on) 值（即乘以规格书提供的一个温度系数 K ）。

  

  

**2、截止损耗Poff**

  

截止损耗，指在 MOSFET 完全截止后在漏源电压 VDS(off) 应力下产生的漏电流 IDSS 造成的损耗。

  

截止损耗计算：

先通过计算得到 MOSFET 截止时所承受的漏源电压 VDS(off) ，在查找器件规格书提供之 IDSS ，再通过如下公式计算：

Poff=VDS(off) × IDSS ×（ 1-Don ）

  

说明：

IDSS 会依 VDS(off) 变化而变化，而规格书提供的此值是在一近似 V(BR)DSS 条件下的参数。如计算得到的漏源电压 VDS(off) 很大以至接近 V(BR)DSS 则可直接引用此值，如很小，则可取零值，即忽略此项。

  

  

**3、开启过程损耗**

  

开启过程损耗，指在 MOSFET 开启过程中逐渐下降的漏源电压 VDS(off\_on)(t) 与逐渐上升的负载电流（即漏源电流） IDS(off\_on)(t) 交叉重叠部分造成的损耗。

  

开启过程损耗计算：

开启过程 VDS(off\_on)(t) 与 IDS(off\_on)(t) 交叉波形如上图所示。首先须计算或预计得到开启时刻前之 VDS(off\_end) 、开启完成后的 IDS(on\_beginning) 即图示之 Ip1 ，以及 VDS(off\_on)(t) 与 IDS(off\_on)(t) 重叠时间 Tx 。然后再通过如下公式计算：

  

Poff\_on= fs ×∫ Tx VDS(off\_on)(t) × ID(off\_on)(t) × dt

实际计算中主要有两种假设 — 图 (A) 那种假设认为 VDS(off\_on)(t) 的开始下降与 ID(off\_on)(t) 的逐渐上升同时发生；图 (B) 那种假设认为 VDS(off\_on)(t) 的下降是从 ID(off\_on)(t) 上升到最大值后才开始。图 (C) 是 FLYBACK 架构路中一 MOSFET 实际测试到的波形，其更接近于 (A) 类假设。针对这两种假设延伸出两种计算公式：

  

(A) 类假设 Poff\_on=1/6 × VDS(off\_end) × Ip1 × tr × fs

(B) 类假设 Poff\_on=1/2 × VDS(off\_end) × Ip1 × (td(on)+tr) × fs

(B) 类假设可作为最恶劣模式的计算值。

  

说明：

图 (C) 的实际测试到波形可以看到开启完成后的 IDS(on\_beginning)>>Ip1 （电源使用中 Ip1 参数往往是激磁电流的 初始值）。叠加的电流波峰确切数值我们难以预计得到，其 跟电路架构和器件参数有关。例如 FLYBACK 中 实际电流应是 Itotal=Idp1+Ia+Ib (Ia 为次级端整流二极管的反向恢 复电流感应回初极的电流值 -- 即乘以匝比， Ib 为变压器 初级侧绕组层间寄生电容在 MOSFET 开关开通瞬间释放的 电流 ) 。这个难以预计的数值也是造成此部分计算误差的 主要原因之一。  

  

  

**4、关断过程损耗**

  

关断过程损耗。指在 MOSFET 关断过程中 逐渐上升的漏源电压 VDS(on\_off) (t) 与逐渐 下降的漏源电流 IDS(on\_off)(t) 的交叉重 叠部分造成的损耗。

  

关断过程损耗计算：

如上图所示，此部分损耗计算原理及方法跟 Poff\_on 类似。首先须计算或预计得到关断完成后之漏源电压 VDS(off\_beginning) 、关断时刻前的负载电流 IDS(on\_end) 即图示之 Ip2 以及 VDS(on\_off) (t) 与 IDS(on\_off)(t) 重叠时间 Tx 。

  

然后再通过 如下公式计算：

Poff\_on= fs ×∫ Tx VDS(on\_off) (t) × IDS(on\_off)(t) × dt

  

实际计算中，针对这两种假设延伸出两个计算公式：

(A) 类假设 Poff\_on=1/6 × VDS(off\_beginning) × Ip2 × tf × fs

(B) 类假设 Poff\_on=1/2 × VDS(off\_beginning) × Ip2 × (td(off)+tf) × fs

(B) 类假设可作为最恶劣模式的计算值。

  

说明：

IDS(on\_end) =Ip2 ，电源使用中这一参数往往是激磁电流 的末端值。因漏感等因素， MOSFET 在关断完成后之 VDS(off\_beginning) 往往都有一个很大的电压尖峰 Vspike 叠加其 上，此值可大致按经验估算。

  

**5、驱动损耗Pgs**

  

驱动损耗，指栅极接受驱动电源进行驱动造成之损耗

  

驱动损耗的计算：

确定驱动电源电压 Vgs 后，可通过如下公式进行计算：

Pgs= Vgs × Qg × fs

  

说明：

Qg 为总驱动电量，可通过器件规格书查找得到。

  

  

**6、Coss电容的泄放损耗Pds**

  

Coss电容的泄放损耗,指MOS输出电容 Coss 截止期间储蓄的电场能于导同期间在漏源极上的泄放损耗。

  

Coss电容的泄放损耗计算：

首先须计算或预计得到开启时刻前之 VDS ，再通过如下公式进行计算：

Pds=1/2 × VDS(off\_end)2 × Coss × fs

  

说明：

Coss 为 MOSFET 输出电容，一般可等于 Cds ，此值可通过器件规格书查找得到。

  

  

**7、体内寄生二极管正向导通损耗Pd\_f**

  

体内寄生二极管正向导通损耗,指MOS体内寄生二极管在承载正向电流时因正向压降造成的损耗。

  

体内寄生二极管正向导通损耗计算：

在一些利用体内寄生二极管进行载流的应用中（例如同步整流），需要对此部分之损耗进行计算。公式如下：

Pd\_f = IF × VDF × tx × fs

其中：IF 为二极管承载的电流量， VDF 为二极管正向导通压降， tx 为一周期内二极管承载电流的时间。

  

说明：

会因器件结温及承载的电流大小不同而不同。可根据实际应用环境在其规格书上查找到尽量接近之数值。

  

**8、体内寄生二极管反向恢复损耗Pd\_recover**

  

体内寄生二极管反向恢复损耗，指MOS体内寄生二极管在承载正向电流后因反向压致使的反向恢复造成的损耗。

  

体内寄生二极管反向恢复损耗计算：

这一损耗原理及计算方法与普通二极管的反向恢复损耗一样。公式如下：

Pd\_recover=VDR × Qrr × fs

其中：VDR 为二极管反向压降， Qrr 为二极管反向恢复电量，由器件提供之规格书中查找而得。

  

  

  

**MOS设计选型的几个基本原则**

  

建议初选之基本步骤：

  

1、电压应力

  

在电源电路应用中，往往首先考虑漏源电压 VDS 的选择。在此上的基本原则为 MOSFET 实际工作环境中的最大峰值漏源极间的电压不大于器件规格书中标称漏源击穿电压的 90% 。即：

VDS\_peak ≤ 90% \* V(BR)DSS

  

注：一般地， V(BR)DSS 具有正温度系数。故应取设备最低工作温度条件下之 V(BR)DSS值作为参考。

  

2、漏极电流

  

其次考虑漏极电流的选择。基本原则为 MOSFET 实际工作环境中的最大周期漏极电流不大于规格书中标称最大漏源电流的 90% ；漏极脉冲电流峰值不大于规格书中标称漏极脉冲电流峰值的 90% 即：

  

ID\_max ≤ 90% \* ID

ID\_pulse ≤ 90% \* IDP

  

注：一般地， ID\_max 及 ID\_pulse 具有负温度系数，故应取器件在最大结温条件下之 ID\_max 及 ID\_pulse 值作为参考。器件此参数的选择是极为不确定的—主要是受工作环境，散热技术，器件其它参数（如导通电阻，热阻等）等相互制约影响所致。最终的判定依据是结点温度（即如下第六条之“耗散功率约束”）。根据经验，在实际应用中规格书目中之 ID 会比实际最大工作电流大数倍，这是因为散耗功率及温升之限制约束。在初选计算时期还须根据下面第六条的散耗功率约束不断调整此参数。建议初选于 3~5 倍左右 ID = (3~5)\*ID\_max。

  

3、驱动要求

  

MOSFEF 的驱动要求由其栅极总充电电量（ Qg ）参数决定。在满足其它参数要求的情况下，尽量选择 Qg 小者以便驱动电路的设计。驱动电压选择在保证远离最大栅源电压（ VGSS ）前提下使 Ron 尽量小的电压值（一般使用器件规格书中的建议值）

  

4、损耗及散热

  

小的 Ron 值有利于减小导通期间损耗，小的 Rth 值可减小温度差（同样耗散功率条件下），故有利于散热。

  

5、损耗功率初算

  

MOSFET 损耗计算主要包含如下 8 个部分：

PD = Pon + Poff + Poff\_on + Pon\_off + Pds + Pgs+Pd\_f+Pd\_recover

详细计算公式应根据具体电路及工作条件而定。例如在同步整流的应用场合，还要考虑体内二极管正向导通期间的损耗和转向截止时的反向恢复损耗。损耗计算可参考下文的“MOS管损耗的8个组成部分”部分。

  

6、耗散功率约束

  

器件稳态损耗功率 PD,max 应以器件最大工作结温度限制作为考量依据。如能够预先知道器件工作环境温度，则可以按如下方法估算出最大的耗散功率：

PD,max ≤ （ Tj,max - Tamb ） / Rθj-a

  

其中 Rθj-a 是器件结点到其工作环境之间的总热阻 , 包括 Rθjuntion-case,Rθcase-sink,Rθsink-ambiance 等。如其间还有绝缘材料还须将其热阻考虑进去。

## 

**声明：**

  

声明：来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群