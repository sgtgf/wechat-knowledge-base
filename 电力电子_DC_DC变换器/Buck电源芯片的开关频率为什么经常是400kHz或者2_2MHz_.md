# Buck电源芯片的开关频率为什么经常是400kHz或者2.2MHz？

原创 二火 硬件笔记本 2023-09-16 11:10 四川

> 原文地址: [https://mp.weixin.qq.com/s/7NgkQ2HnGRcgPXYV9hAsTw](https://mp.weixin.qq.com/s/7NgkQ2HnGRcgPXYV9hAsTw)

▼关注公众号：硬件笔记本▼

  

  

> 最近组里来了一个实习生，时不时地会问我几个问题。有的问题，不见得有多难，但还是挺有意思的，今天拎出来讨论一下。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_000_13a65524a02d.svg)

一道问题

  

  

  

照例，先抛出来一道问题：**Buck电源芯片的开关频率为什么经常是400kHz或者2.2MHz？**

  

这个问题，不晓得同学们有没有考虑过，我觉得有必要研究研究。当然分析这个问题的维度可能有多种，今天我们挑一个不一样的维度。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_001_13a65524a02d.svg)

开关频率-五花八门

  

  

  

随手捞起手头的一份规格书，还真是实习生说的那回事，Buck电源芯片的开关频率确实既有400kHz，也有2.2MHz，当然这里说的是一个大概范围，而不单纯是400kHz或2.2MHz频点。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_002_0c5dab722e7d.png)

  

再多找几份规格书看看，发现不止是这两个，还有其他范围。  

  

TI的LMR16006的开关频率，在700kHz和2.1MHz左右。  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_003_add201cf3457.png)

  

Richtek的RT6363的开关频率，在105kHz、500kHz和2.45MHz左右。  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_004_876be6b12601.png)

  

Silegry的SY8893的开关频率，在1.2MHz左右。

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_005_f1559f0c018d.png)

  

通过上述截图发现，开关频率好像没什么规律，从一两百kHz到几MHz，都有，范围跨度比较大。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_006_13a65524a02d.svg)

无线电频段和广播波段

  

  

  

有的同学可能会从**开关频率大小****、****效率高低、器件尺寸空间**的维度来看这个问题，今天我们换个视角，我们从**无线电频段的分布**角度来分析这个问题。  

  

根据无线电频谱的划分和命名，我们可以看到包括长波、中波、短波等在内的14个频段，每个频段对应一种波段名称及波长范围。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_007_54fdf64a5193.jpg)

  

我们再看下广播和电视所占用的频段（下图为部分，未完全列出），AM调幅广播，FM调频广播还有TV等。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_008_e06291620446.png)

  

上图中的“LW”表示Long Wave，长波，处于无线电频谱中的低频（LF）带内。同理，“MW”表示Medium Wave，中波，处于中频（MF）带内。“SW”表示Short Wave，短波，处于高频（HF）带内。咱们所收听的AM调幅广播（Amplitude Modulation）就是处于这些个频段内。

  

上图中的“FM”表示Frequency Modulation，调频，米波，处于甚高频（VHF）带内。我们常说的调频FM广播就指的的这个频段。

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_009_13a65524a02d.svg)

CISPR25标准

  

  

  

CISPR25，无线电干扰特别委员会针对汽车及零部件制定的辐射骚扰测试标准。我们再看下CISPR25中对不同频段的限值要求（部分标准要求）。  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_010_2d3677ac8b4d.png)

  

**有没有发现CISPR25中前面这几段限制幅值正好对应的是广播（调幅或调频）频段，为什么？**  

  

因为对于这些个广播频段，收音机等接收设备在接收广播信号时是照单全收。如果电子设备对外界有发射这个频段内的干扰信号，收音机等接收设备会收到并播放出来。如果干扰信号过大，会使得有效信号被覆盖或干扰，影响正常接收效果。  

  

上面表格的展示可能还不够直观，我们不妨把CISPR25的Class5中限制要求用图表来表示，如下图所示。  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_011_e1bb082d6d35.png)

（图片来自TI E2E论坛）  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_012_13a65524a02d.svg)

见缝插针

  

  

  

前面说了这么多，不知道你有没有发现一个现象：文章开头说的Buck电源芯片常用的开关频率400kHz、2.2MHz正好绕开了LW、AM和FM等频段，如下图所示，真可谓是“见缝插针”！  

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_013_0f1ab9db2c3f.png)

（图片来自TDK官网）

  

比如400kHz，如上图**黄色**区域，**正好位于LW和AM中间的缝隙频段**。而2.2MHz，如上图**红色**区域**，又巧妙地避开了AM频段，位于AM和SW之**间。

  

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_014_13a65524a02d.svg)

总  结

  

  

  

今天先聊到这里，讨论的内容比较基础，但是很有启发性。梳理下今天讨论的内容：

  

①了解无线电频段的分布；

②了解CISPR25标准在广播频段限制幅度的意义；

③从无电线频段分布的维度真正理解开关频率的选择。

  

硬件工程师都在关注我们

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_015_2e84b7ba26c6.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_016_51d069a6484e.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_017_5fb296583be4.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_018_1f30148044c0.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_019_c5bc86d0867d.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_020_b38438d4de46.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_021_1d54e9fe0aef.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_022_9bb0105b1e46.gif)

![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_023_de88c48250d0.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_024_3b83df2d253b.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_025_db521919e8d9.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_026_aea384ea417e.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_027_f4924e7a240a.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_028_a58db91dbb3b.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_029_f0edc68b0c53.gif) ![](Buck电源芯片的开关频率为什么经常是400kHz或者2_2MHz__images/img_030_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群