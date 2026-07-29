# 实例分析ESD电磁兼容问题

原创 硬件笔记本 2023-11-13 07:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/oY9F-5BLCYU6Mvv-LNVSug](https://mp.weixin.qq.com/s/oY9F-5BLCYU6Mvv-LNVSug)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

ESD对于很多电子产品是一个致命硬伤，如何设计好产品的ESD，是需要花很多时间和精力来研究的。下面通过几个实例来和大家一起分享下。

  

**某智能手表在侧键附近打ESD后出现反复开关机现象**

根据反复重启的时间判断，类似于长按Power键。检查Power\_On信号，发现已经被持续拉低，Power\_On信号的原理图如下：  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_002_a1df80a3ae38.png)

为了降成本，位置1并没有贴TVS管，而是用一个电容代替，电容的耐压值是25V。失效的机器，这个电容已经短路，可以判断ESD进入壳体，直接打坏了位置1的电容。

  

如果把位置1的电容耐压提高到50V，能抗的ESD枪数量会增多，但最终还是会坏。这个项目不是防水的，密封性做得很差，所以才有问题。

**【解决方法】**

把位置1的电容换成TVS管，或者位置1不要贴任何东西，在位置2放一个1nF的电容。靠1K电阻+1nF电容来吸收ESD能量。

  

另外，在侧键的FPC附近，增加了GND露铜区域，引导ESD先进入GND。这也是一种低成本的解决方法，如果ESD能量足够大，实测几乎可以把1K电阻打坏。

  

**某智能手表在USB接口外壳打ESD造成黑屏死机问题**

充电口是Micro-B型USB接口，接触放电±10KV，会出现黑屏，死机，闪屏等现象。

  

抓死机Log，没有发现什么端倪。

  

将USB信号逐个引出，VBUS，D+，D-都没有出现问题，打ID管脚，会出现类似现象。打GND，会很低概率出现类似现象。遂将问题定位到ID管脚，和GND上。

  

仔细检查USB接口附件的Layout，问题如下：

**1、USB\_ID管脚是悬空的。**

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_003_914142975226.png)

**2、在L3和L6层，靠近USB接口，有与屏相关的敏感信号。**

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_004_47d0cf49c7bb.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_005_bd81fd1eb969.png)

悬空的ID管脚是知名威胁，静电积累到一定程度，肯定会对周围放电，二次放电的威力更大。

  

USB周围的有敏感信号，在打ESD时，附近的GND电平瞬间局部抬高，尤其是看到USB接口的屏蔽壳跟表层相连，周围没有非常多的过孔打到内层GND，这更加重了GND局部电平的提高，这会干扰到这些敏感信号，导致死机，黑屏，闪屏问题。

  

**【解决方法】**

USB的固定PIN以及GND PIN，只接主GND，不要每一层都接GND。MIPI，LCD\_TE，LCD\_RST远离USB接口。

  

**某智能手表屏幕朝下，打后壳会黑屏**

这是一个SPI接口的显示屏，问题比较简单，一个偶然的机会发现是SPI信号中，CS线被软件强制拉低，且一直处于低的状态，这样是不行的。  

  

实测将CS线的行为改成符合SPI协议，只在传输数据时拉低，这个黑屏的问题解决了。

  

  

**某智能手表在USB的GND PIN上注入接触-8KV静电，会概率关机**

  

首先抓取了Log分析，没有发现什么线索。

  

直接拆开整机，在主板的不同地方的GND，注入ESD，统计关机的次数，得出一个简单的规律，只有在靠近电池BTB的地方，才会大概率出现，初步判断是ESD干扰了电池周围的信号。

  

电池BTB周围的信号有D+，D-，VBUS，MIPI，BAT\_ID，BAT\_THERM等，逐个在这些信号上，注入小两级的ESD，比如±2KV，有些信号会导致PMU损坏，有些会导致死机。只有BAT\_ID信号会出现关机的现象。

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_006_480779dcb4c5.png)

关机有两种可能，一是内部软件流程关机，二是电池突然掉电。尤其是第二种，往往很容易忽略。因为某些情况下，ESD注入两枪，立即就出现了关机现象，这很像是电池掉电了。

电池掉电有两种可能，一是电池保护板保护机制生效，切断了供电。二是Vbat到PMU的通路被打断。排查了主板上的器件，Vbat的通路经过的都是一些模拟器件，可能性比较小。

  

我们直接从主板VBAT飞线，连接到程控电源上，再打ESD的时候，发现就不会关机了。这进一步说明，在注入ESD时，是电池本身没有输出了。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_007_cc30466b2bc2.png)

  

电池保护板的原理图如下：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_008_3f62166ffa45.png)

在图中GND上注入+8KV，没有问题，因为右边的TVS吸收了大部分能量，由于正向导通，钳位电压较低（小于4.4V），电池保护板没有触发保护机制。但是如果注入-8KV，TVS管开始反向钳位，瞬间的钳位电压较高（大于4.4V），超过电池起保护电压，电池触发保护机制，MOS管U2断开，导致关机。下图是TVS管的钳位特性，也能佐证这个结论。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_009_ba75d440aba7.png)

注意电池保护板的保护IC，是判断C1两端的电压，来决定是否起保护的。所以要解决这个问题，需要增大C1的容值。实测将C1增大到1uF，关机的概率明显降低了。

  

降低了，但没有彻底解决问题，肯定还有其他原因。这个原因是先猜出来，然后试验验证的。

  

上文提到只有BAT\_ID信号会出现关机的现象。所以猜测静电耦合到了ID管脚，进入PMU导致关机。

  

下面是这次电池保护板的走线，ID的走线与GND有较长的耦合长度，GND上的瞬间能量能很快耦合到这根线上，最终直接进入到PMU。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_010_bff2fefc7730.png)

  

虽然主板上ID走线也跟GND有很长的耦合距离，但是主板上的GND与Vbat之间有TVS钳位，GND的电压不至于跳变太厉害，也不会耦合很多能量到ID线上。反而是电池FPC上的GND电平跳动最大，ID线在FPC上耦合的能量更多。

  

FPC改版成如下样式，ID和GND基本没有重叠区域，能量也不会耦合到ID管脚上，再也没有出现过关机问题。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_011_14fbf6b21118.png)

  

**屏幕朝下，ESD接触放电后壳，TP失效**

经检查，确定是TP IC被打坏。没有仔细分析IC损坏的原因，因为发现TP FPC背后的双面导电胶太弱，根本没有粘到GND上。TP没有很好接地，导致了这个问题。  

  

只要TP接地良好，就肯定不会出现TO IC失效问题。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_012_dd7649a3e29f.png)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_013_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_014_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_015_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_016_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_017_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_018_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_019_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_020_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_021_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_022_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_023_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_024_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_025_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_026_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_027_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\实例分析ESD电磁兼容问题_images\img_028_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。