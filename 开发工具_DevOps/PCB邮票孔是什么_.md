# PCB邮票孔是什么？

原创 硬件笔记本 2023-11-19 11:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/TjrXuqf3G6FSKS94dgffkA](https://mp.weixin.qq.com/s/TjrXuqf3G6FSKS94dgffkA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

今天给是关于：****PCB 邮票孔、PCB 邮票孔设计要求****

# **一、PCB 邮票孔是什么？**

**邮票孔**是****指主板面板上的孔，用于将组成阵列的小型 PCB连接在一起，可以轻松地从PCB上移除组件。****

邮票孔是穿孔的，当你向下推的时候，会折断，你可以在不损坏 PCB本身的情况下卸下组件。

![](PCB邮票孔是什么__images/img_002_6d11075763a0.jpg)

PCB 邮票孔

# **二、PCB 邮票孔的作用**

PCB上设计的邮票孔的原因有很多：

**1、可以将小 PCB板连接成一组**

当你有一堆需要连接的PCB，又太小不能使用连接器，你就可以利用邮票孔的将它们连接起来。穿孔将使电流流过 PCB，并且与附近的其他 PCB连接。

**2、可以在两个不同的 PCB /设备之间传输电力和数据**

如果你需要一个设备可以与另外一台设备进行通信，可以使用邮票孔。

# **三、PCB 邮票孔设计要求**

**1、PCB 邮票孔 孔数**

****邮票孔通常是5个一组****，用于将组件连接在一起，可能会因为PCB设计而异。

![](PCB邮票孔是什么__images/img_003_6e7416ceaa4f.jpg)

PCB 邮票孔 孔数

**2、PCB 邮票孔尺寸**

PCB邮票孔的****尺寸通常为0.020英寸或直径0.5毫米****，会根据 PCB设计的而变化。PCB 邮票孔的****尺寸由用于制造 PCB的材料厚度决定****。

![](PCB邮票孔是什么__images/img_004_a88d6928049f.jpg)

PCB 邮票孔尺寸

# **3、PCB 邮票孔孔间距**

****通常 PCB 邮票孔间距为0.030英寸或0.76毫米****，这样可以防止元件靠得太近而导致短路。

![](PCB邮票孔是什么__images/img_005_707fb6010ce7.jpg)

PCB邮票孔孔间距

# **四、4 个 PCB邮票孔设计技巧**

**1、足够的拉片来维持 PCB**

由于PCB邮票孔是一个开口，也就是说两者之间没有任何联系，如果是这样的话，PCB的两部分之间就会出现短路。

为了避免这种情况发布，****必要确保选项卡足够坚固，可以支撑上方组件的重量。****

**2、应该远离敏感元件**

**必须要远离敏感元件，因为拉片很容易损坏，容易导致电气短路。**

![](PCB邮票孔是什么__images/img_006_7ce22a8542e5.jpg)

应该远离敏感元件

**3、两个邮票孔之间的间距应该在 60mm-90mm之间**

如果两个邮票孔之间的空间太大，****不方便安装组件****。如果间距太小，焊料就容易流到其他地方，****造成短路****。

**4、与最近的组件之间至少有0.125ich 的间距**

最近的组件之间应至少保持0.125 英寸的间隙，尤其是对于高密度 PCB。距离组件越近，焊接固定就越困难。****距离太近，容易在焊盘/走线之间形成焊桥。****

# **五、PCB 邮票孔和 V型槽的区别**

**1、V 型槽**

****V 型槽是 PCB 组装最常见的方式****，V-CUT是指可以将几块板或同一块板组合拼接在一起，然后在PCB加工后用V-CUT机在板之间切出V形槽，可以在使用过程中或封装前折断。

采用双面V型槽时，V型槽的深度应控制在1/3（两侧槽的总和）左右，且槽尺寸准确，深度均匀。

![](PCB邮票孔是什么__images/img_007_d3a0f8b014db.jpg)

V 型槽

V型槽的优点：

-   成本低
    
-   更容易制造
    
-   品质会更好，不容易变形
    

![](PCB邮票孔是什么__images/img_008_26a3802a2a3e.jpg)

V型槽

**2、 PCB邮票孔**

在很多设计中，会用 PCB 邮票孔代替 V形槽。

![](PCB邮票孔是什么__images/img_009_4f0851309e90.png)

PCB邮票孔

邮票孔的优点：

1、强度更好，****可以直接折断****，不像丝锥需要铣床设备切割

![](PCB邮票孔是什么__images/img_010_543488a57f4e.jpg)

可以直接折断

**2、有更大的抓地力**

孔越大，粘合剂抓住的表面积就越大，这样****安装会比较容易，并且可以防止 PCB移动****。

![](PCB邮票孔是什么__images/img_011_1758b02fac0e.jpg)

有更大的抓地力

# **六、IPC-7351邮票孔标准**

**1、IPC-7351首选邮票孔**

按照这个标准，****走线必须距离 PCB边缘和邮票孔至少1mm。****

![](PCB邮票孔是什么__images/img_012_000df7567433.jpg)

  

**2、IPC-7351 可接受邮票孔**

****PCB 板边缘顶部的走线和邮票孔可以接受****，走线的布线方向正确，不存在布线不足的情况，根据 IPC-7351标准，邮票孔在公差范围内。

![](PCB邮票孔是什么__images/img_013_d03465167442.jpg)

IPC-7351 可接受邮票孔

**3、IPC-7351 不推荐邮票孔**

**不推荐与成品板边缘和鼠标咬合对齐的走线布线，可能会导致可焊性和可靠性问题。**

![](PCB邮票孔是什么__images/img_014_682c72d827e8.jpg)

IPC-7351 不推荐邮票孔

欢迎在评论区留言，大家一起讨论交流。

硬件工程师及从业者都在关注我们

![](PCB邮票孔是什么__images/img_015_2e84b7ba26c6.gif) ![](PCB邮票孔是什么__images/img_016_51d069a6484e.gif) ![](PCB邮票孔是什么__images/img_017_5fb296583be4.gif) ![](PCB邮票孔是什么__images/img_018_1f30148044c0.gif) ![](PCB邮票孔是什么__images/img_019_c5bc86d0867d.gif) ![](PCB邮票孔是什么__images/img_020_b38438d4de46.gif) ![](PCB邮票孔是什么__images/img_021_1d54e9fe0aef.gif) ![](PCB邮票孔是什么__images/img_022_9bb0105b1e46.gif)

![](PCB邮票孔是什么__images/img_023_de88c48250d0.gif) ![](PCB邮票孔是什么__images/img_024_3b83df2d253b.gif) ![](PCB邮票孔是什么__images/img_025_db521919e8d9.gif) ![](PCB邮票孔是什么__images/img_026_aea384ea417e.gif) ![](PCB邮票孔是什么__images/img_027_f4924e7a240a.gif) ![](PCB邮票孔是什么__images/img_028_a58db91dbb3b.gif) ![](PCB邮票孔是什么__images/img_029_f0edc68b0c53.gif) ![](PCB邮票孔是什么__images/img_030_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源头条张工谈DFM。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。