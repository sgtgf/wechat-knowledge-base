# MOS管开关时，电压电流波形的探究

原创 硬件笔记本 2023-05-26 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/Jr3bcDA683mPN\_ga5SkwAQ](https://mp.weixin.qq.com/s/Jr3bcDA683mPN_ga5SkwAQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

如图，为什么在Vce下降前ic就开始上升了呢？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyZCdD3n4rx4Dx0Idu4XoNcngvGLlLHmDsibmwfjFCwgZuGlBVEqicGbAg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5Hynwsn7yMppcy5VMC3IKRSBFqEyZppoib6H5BKvHnAicgtmZQS7PVyCEdA/640?wx_fmt=png)

  

这里就用MOSFET代替BJT了,所以ids= ic , Vds=Vce , Coss也就是Cds代表输出电容。简单来说就是当MOS管一开始导通时输出电容Coss还保持Vds电压 ,随着Ids电流越来越大, Vds电压终于保持不住,开始下降。直到管子完全开启。比较详细的开启过程是由Miller Plateau造成的,这里借用了网上一些解释Miller Plateau的图。

  

阶段1, Vgs < Vth,管子是关断的,所以Ids = 0 , Vds=high , ig充电Cgs。

  

阶段2 , Vgs > Vth,管子开启, Ids从0增加到iL被外部电流源电感钳住, Coss(Cds)上电压不能突变，保持Vds。

  

阶段3 ,进入Miller plateau , Vgs > Vth ,管子仍然保持开启, Coss开始discharge , Vds电压开始下降,于此同时Cgd开始被ig充电。Vg保持不变。

  

阶段4 , Vd下降到接近0点, ig继续给ig充电Cgs和Cgd充电。

  

阶段5 , Vg到达gate driver预定的电压,管子开启过程完成。

关断过程和开启过程类似,也会有Millr plateau效应。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaqFoD2bzVtiaJicLcDrCoEut8RiaSFPrqMJgO1hrKibXA2tj2ia1HqU5QhrMcH4Picd97vLrkgqhAX6WgA/640?wx_fmt=png)

  

我们可以看到,如果MOS管开启时VDS上有原始电压,那么MOS开启过程中就会有Ids和Vds的重重,那么会带来Switching Loss。

  

由于Coss上的能量在极短时间内被释放,电容上能量会损失掉(换算为Loss为0.5\*Coss\*Vds^2\*fs) , 而且只要是非零电压开启( Non Zero Voltage Switching) , 会给PCB和MOS的寄生电感与电容形成的谐振腔( resonant tank )引入比较大的dv/dt或者di/dt激励,引起比较大的ringing ,甚至超过管子的额定电压,烧毁管子。

  

那么我们可以避免这种情况的发生吗?答案是可以的,也就是很多人提到的Zero Voltage Switching ,虽然会付出一定的代价。我们先看如何能实现软开关开启Zero Voltage Switching Turn on。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HySqYQsOLmiaDGpgV1XAhCPonOBMMKDAwxYl2V2LuXa9n7UlLWllBoGtQ/640?wx_fmt=png)

实现ZVS turn on很简单,只需要在我们开启管子前, Vds上的电压为零就好,这样Ids和Vds就没有重叠了, turn on switching loss为零,没有high di/dt, dv/dt问题,没有ringing !那么如何实现ZVS turn on呢?

  

  

分两种情况讨论: 1为PWM converter , 2为resonant converter (谐振变换器)。

  

一、对于PWM converter ,就拿最简单的两个管子的half bridge (其实也就是buck converter )做例子。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5Hy2DoZzxJQ39MfrnSOFs7YNM8K0Iucqh2PfLuNFfaP6OLTwzlfJeRyMw/640?wx_fmt=png)

对于half bridge实现ZVS turn on ,我们希望当上管Q1开启时电流是流进switching node (vsw)的，也就是图中电感电流为负值，当下管Q2开启时我们希望电流是流出switching node (vsw)的,也就是电感电流为正值。

  

为什么这样就可以实现ZVS turn on了呢?我们就看上管Q1开启过程。如果电感电流iL为负,这时候我们先关闭Q2 ,这时候Q1还未开启,在这个deadtime中il会chargeQ2的Coss ,使Vsw抬高到Vin ,当然不能超过Vin ,因为Q1的body diode会导通,钳位住Vsw到Vin ,这时候Q1的Vds就是Vin-Vsw=0 ,这时候我们开启Q1就实现ZVS了。

  

同理对于Q2开启时,如果电感电流为正,那么当首先关闭Q1管时, Vsw就会被电感电流拉低到0 ,因为iL>0, Q2的Coss会discharged到0 ,然后再开启Q2 ,就可以达到ZVS了。

  

这里有一张其他Topology的PWM converter的波形图,也和buck工作原理类似,大概可以看看基本原理,也就是电感电流为负时, Q1可以实现ZVS ,让Vsw的ringing比较小。而当电感电流为正时，实现不了ZVS , Vsw的ringing就比较大了。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HySMATJp5XCsIZ6mH8X3fD0GFFPHacGNiakHV5dkoMnk0kEyibABbVpvxQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5Hy0LfQApx3YkUia12ujWickhkIOWB5ONR3NwxMhuGQsGbicdRA4Jy27ib1EQ/640?wx_fmt=jpeg)

二、对于resonant converter ,其实道理类似,我们也希望在我们开启管子前, Vds上的电压为零。那么对于resonant converter的half bridge ,我们希望看到的impedance为inductive ,也就是感性的,这样switching node流出的电流I就会滞后于电压V ,现在ZVS turn on。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HyeicGH5uU16c0CrdiadSyBVCNmNNc5k1wgvMUQ2bia2PFicwPwCrhmiau8SA/640?wx_fmt=png)

这是因为如果电流I是滞后与电压V的,这样在Q1开启之前电流I为负值就会charge Q2的Coss ,同时discharge Q1的Coss ,让V到Vin ,这样Q1就实现ZVS turn on了。Q2开启之前,电流I为正，也会discharge Q2的Coss ,和charge Q1的Coss ,让V到0 ,这样Q2就实现ZVS了。

  

总结起来,要实现ZVS turn on,对于PWM ,需要电感电流为负,而且需要足够的deadtime ;对于resonant converter ,需要impedance为inductive ,而且也需要deadtime。

  

那么有人可能要问,对于PWM converter到底电感电流为多负? deadtime至少为多少可以保证ZVS ?对于resonant converter，impedance 到底为多少? deadtime为多少可以保证ZVS ?

  

要回答这个定量问题,其实是不那么简单的。对于PWM converter ,参考quasi-square-wave ZVS buck converters ,我们是可以画出state plane ,然后根据state plane图的几何关系定量分析出来的,但是非常繁琐,常常是七八个三角函数等式求解。所以在设计上,就让开关频率小点,电感值小点,让电感电流ripple足够大,能达到负值就差不多了。

  

对于resonant converter ,倒是可以简单地通过积分方法,算出i与的积分,让这个it积分大于Coss上的charge就行。比如已知impedance ,算出V与I的phase shift ,然后换算成时间td ,然后在td上对电感电流进行积分,只要这个积分大于等于Coss\*Vin就行了。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjglpeQ1Xf9ZFAzvmDiaTl5HymwzxIIia7hncpHgwzdic9YibCGM8xQSR0RUNnp17KWlFhicbaKwib7f5S1w/640?wx_fmt=jpeg)

  

  

  

  

  

说了soft switching, ZVS这么多好处,谈谈soft switching的弊端。  

  

对于PWM converter可以看到为了实现ZVS ,减小了电感值,让电感电流ripple变大,最终达到负值,实现了ZVS，但是付出的代价就是inductor current的RMS值变大,各个元器件的导通损耗( conduction loss )大,所以是牺牲了conduction loss换取switching loss和小ringing。

  

而且如果输出电流越大,我们需要实现ZVS的难度更大,需要进一步增大ripple ,造成RMS电流进一步增大,很有可能得不偿失,造成converter整体效率下降。

  

对于resonant converter ,在频率很高的情况下,有时候需要让impedance非常inductive ,也就是I滞后于V非常厉害才能有足够的charge q来实现ZVS ,这其实也是变相降低了有功功率的传输,因为V和I的phase lag比较大,造成了converter的circulating current比较大，RMS电流值增大,也是增大了conduction loss。

  

所以在设计或者考虑ZVS等soft switching时需要对系统有个整体loss的把握,在conduction loss和switching loss之间做好trade-off ,这样才能设计出效率最高,最棒的converter。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。