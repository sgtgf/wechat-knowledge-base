# MOS管GS电阻有什么作用？

原创 硬件笔记本 2023-12-12 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/bbdOc-8\_2Gt\_\_WL3GPOfpA](https://mp.weixin.qq.com/s/bbdOc-8_2Gt__WL3GPOfpA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

MOS管具有三个内在的寄生电容：Cgs、Cgd、Cds。这一点在MOS管的规格书中可以体现（规格书常用Ciss、Coss、Crss这三个参数代替）。MOS管之所以存在米勒效应，以及ＧＳ之间要并电阻，其源头都在于这三个寄生电容。

![](MOS管GS电阻有什么作用__images/img_002_d40dd0c33909.jpg)

MOS管内部寄生电容示意

  

![](MOS管GS电阻有什么作用__images/img_003_090f8a91f41e.png)

IRF3205寄生电容参数

  

# 1.MOS管的米勒效应

![](MOS管GS电阻有什么作用__images/img_004_1c7997e0f096.png)

MOS管驱动之理想与现实

理想的MOS管驱动波形应是方波，当Cgs达到门槛电压之后， MOS管就会进入饱和导通状态。而实际上在MOS管的栅极驱动过程中，会存在一个米勒平台。米勒平台实际上就是MOS管处于“放大区”的典型标志，所以导致开通损耗很大。由此可见，米勒效应是一个对电路不利的却又客观存在的现象，在设计电路时需要加以考虑。

  

米勒平台形成的详细过程：

![](MOS管GS电阻有什么作用__images/img_005_a30665bc14db.png)

MOS管开启过程

  

将MOS管开启时间分解：

t0→t1：当GS两端电压达到门限电压Vgs(th)的时候（可以理解为对Cgs进行充电），MOS管开始导通，这之前MOS管处于截止区；

t1→t2：随着Vgs继续增大，Id开始增大，Vds开始下降，此时MOS管工作在饱和区（如何判断是在饱和区？直接通过公式可知：Vds>Vgs-Vth，Vds-Id输出特性曲线反着分析一遍），Id主要由Vgs决定，这个过程中Vds会稍微有点降低，主要是△I导致G极端一些寄生感抗等形成压降；

t2→t3：Vgs增大到一定程度后，出现米勒效应，Id已经达到饱和，此时Vgs会持续一段时间不再增加，而Vds继续下降，给Cgd充电，也正是因为需要给Cgd充电，所以Cgs两端电压变化就比较小（MOS管开通时，Vd>Vg，Cdg先通过MOS管放电，而后再反向充电，夺取了给Cgs的充电电流，造成了Vgs的平台）；

t3→t4：Vgs继续上升，此时进入可变电阻区，DS导通，Vds降来下来（米勒平台由于限制了Vgs的增加，也就限制了导通电阻的降低，进而限制了Vds的降低，使得MOS管不能很快进入开关状态）。

  

# 2.MOS管G极与S极之间的电阻作用

![](MOS管GS电阻有什么作用__images/img_006_c1001cfbd8b3.png)

反激电源图：R3为GS电阻

用一个简单的实验证明GS间电阻的重要性：取一只mos管,让它的G极悬空,然后在DS上加电压,结果发现输入电压才三四十伏的时候,MOS管的DS就会直接导通，如果不限流则可能损坏。按说此时没有驱动，MOS管不应导通。但其实由于MOS管寄生电容的存在,当在DS之间加电压时，加在DS之间电压会通过Cdg给Cgs充电,这样G极的电压就会抬高直到mos管导通。（假如采用变压器驱动,变压器绕组可以起到放电作用,所以即使不加GS电阻,在驱动没有的情况下,管子也不会自己导通）

在GS之间并联一个电阻（阻值约为几K到几十K），可以有效保障MOS管正常工作。首先，门极悬空时DS之间电压不会导致MOS管导通损坏，同时在没有驱动时能将MOS管的门极钳在低位，不会误动作，能可靠通断。

硬件工程师及从业者都在关注我们

![](MOS管GS电阻有什么作用__images/img_007_2e84b7ba26c6.gif) ![](MOS管GS电阻有什么作用__images/img_008_51d069a6484e.gif) ![](MOS管GS电阻有什么作用__images/img_009_5fb296583be4.gif) ![](MOS管GS电阻有什么作用__images/img_010_1f30148044c0.gif) ![](MOS管GS电阻有什么作用__images/img_011_c5bc86d0867d.gif) ![](MOS管GS电阻有什么作用__images/img_012_b38438d4de46.gif) ![](MOS管GS电阻有什么作用__images/img_013_1d54e9fe0aef.gif) ![](MOS管GS电阻有什么作用__images/img_014_9bb0105b1e46.gif)

![](MOS管GS电阻有什么作用__images/img_015_de88c48250d0.gif) ![](MOS管GS电阻有什么作用__images/img_016_3b83df2d253b.gif) ![](MOS管GS电阻有什么作用__images/img_017_db521919e8d9.gif) ![](MOS管GS电阻有什么作用__images/img_018_aea384ea417e.gif) ![](MOS管GS电阻有什么作用__images/img_019_f4924e7a240a.gif) ![](MOS管GS电阻有什么作用__images/img_020_a58db91dbb3b.gif) ![](MOS管GS电阻有什么作用__images/img_021_f0edc68b0c53.gif) ![](MOS管GS电阻有什么作用__images/img_022_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源头条桃李电子。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。