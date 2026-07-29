# 覆铜是一把“双刃剑”，PCB实例讲解

原创 硬件笔记本 2023-10-22 10:53 四川

> 原文地址: [https://mp.weixin.qq.com/s/eFgDxOJqBiGWW0H1cZ\_BVA](https://mp.weixin.qq.com/s/eFgDxOJqBiGWW0H1cZ_BVA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

覆铜是PCB设计的一个重要环节。所谓覆铜，就是将PCB上闲置的空间作为基准面，然后用固体铜填充，这些铜区又称为灌铜。**覆铜的意义在于：减小地线阻抗，提高抗干扰能力；降低压降，提高电源效率；与地线相连，减小环路面积。**

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_002_bc3d228839f1.jpg)

**覆铜是一把“双刃剑”**

出于让PCB 焊接时尽可能不变形的目的，大部分PCB 生产厂家会要求PCB 设计者在PCB 的空旷区域填充铜皮或者网格状的地线。但需要注意的是，覆铜如果处理的不当，那将得不赏失。

我们知道，在高频情况下，印刷电路板上的布线的分布电容会起作用，当长度大于噪声频率相应波长的1/20 时，就会产生天线效应，噪声就会通过布线向外发射，如果在PCB 中存在不良接地的覆铜话，覆铜就成了传播噪音的工具，因此，在高频电路中，千万不要认为，把地线的某个地方接了地，这就是“地线”，一定要以小于λ/20 的间距，在布线上打过孔，与多层板的地平面“良好接地”。**如果把覆铜处理恰当了，覆铜不仅具有加大电流，还起了屏蔽干扰的双重作用。**

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_003_558f9d8e8850.jpg)

覆铜一般有两种基本方式，即大面积的覆铜和网格铜。那究竟是大面积覆铜好还是网格覆铜好呢？不好一概而论。

大面积覆铜，具备了加大电流和屏蔽双重作用，但是大面积覆铜，如果过波峰焊时，板子就可能会翘起来，甚至会起泡。因此大面积覆铜，一般也会开几个槽，缓解铜箔起泡。

单纯的网格覆铜主要是屏蔽作用，加大电流的作用被降低了，从散热的角度说，网格降低了铜的受热面，又起到了一定的电磁屏蔽的作用。但需要指出的是，网格是由交错方向的走线组成的，对于电路来说，走线的宽度对于电路板的工作频率是有其相应的“电长度“的（实际尺寸除以工作频率对应的数字频率可得），当工作频率不是很高的时候，或许网格线的作用不是很明显，一旦电长度和工作频率匹配时，就非常糟糕了，你会发现电路根本就不能正常工作，到处都在发射干扰系统工作的信号。

因此，**高频电路对抗干扰要求高的多用网格覆铜，低频电路有大电流的电路等常用完整的铺铜。**

了解了覆铜的“利弊”后，接下来，我们来了解下PCB覆铜的要点和规范。

  

**PCB覆铜要点和规范**

1、覆铜覆盖焊盘时，要完全覆盖，shape 和焊盘不能形成锐角的夹角。

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_004_b50ac3446ed4.jpg)

2、尽量用覆铜替代粗线。当使用粗线时，过孔通常最好为非通常走线过孔，增大过孔的孔径和焊盘。

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_005_34dd674608a2.jpg)

  

修改后：

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_006_b11fe7195e4b.jpg)

  

3、尽量用覆铜替换覆铜+走线的模式，后者常常产生一些小尖角和直角使用覆铜替换走线

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_007_9ddab92830ee.jpg)

  

修改后：

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_008_159f5ae69b31.jpg)

  

4、shape 不能跨越焊盘，进入器件内部，特别地，表层大范围覆铜。（sony规范)

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_009_149485d42e78.jpg)

  

5、插头的外壳地，以及和外壳地相连的电感、电阻另一端的GND，最好覆铜。

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_010_06edcd0f57d5.jpg)

  

6、插头的外壳地覆铜连接方式最好用8角的方式，而非Full Connect的方式。

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_011_dab138064669.jpg)

  

7、电容的GND端最好直接通过过孔进入内层地，不要通过铜皮连接，后者不利于焊接，且小区域的铜皮没有意义。

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_012_ba3550f50a7f.jpg)

  

8、PCB，即使有大量空白区域，如果信号线的间距足够大，无需表层覆铜铺地。表层局部覆铜会造成电路板的铜箔不均匀平衡。且如果覆铜距离走线过近，走线的阻抗又会受铜皮的影响。

硬件工程师及从业者都在关注我们

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_013_2e84b7ba26c6.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_014_51d069a6484e.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_015_5fb296583be4.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_016_1f30148044c0.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_017_c5bc86d0867d.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_018_b38438d4de46.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_019_1d54e9fe0aef.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_020_9bb0105b1e46.gif)

![](覆铜是一把_双刃剑__PCB实例讲解_images/img_021_de88c48250d0.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_022_3b83df2d253b.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_023_db521919e8d9.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_024_aea384ea417e.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_025_f4924e7a240a.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_026_a58db91dbb3b.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_027_f0edc68b0c53.gif) ![](覆铜是一把_双刃剑__PCB实例讲解_images/img_028_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。