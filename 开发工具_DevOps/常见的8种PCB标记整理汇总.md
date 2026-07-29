# 常见的8种PCB标记整理汇总

原创 硬件笔记本 2024-01-17 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/W2-FNxhG\_J0kJ9apPnl6Fg](https://mp.weixin.qq.com/s/W2-FNxhG_J0kJ9apPnl6Fg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天给大家分享的是：PCB板上常见的8种PCB标记。

从左到右：邮票孔 - 过孔类型 - 防焊焊盘- 基准标记

![](常见的8种PCB标记整理汇总_images/img_002_f845b4c42b8d.jpg)

从左到右：邮票孔 - 安装孔 - 防焊焊盘- 基准标记

从左到右：PCB 开槽、PCB 按钮、火花间隙和保险丝走线

![](常见的8种PCB标记整理汇总_images/img_003_ce1f5d0b447b.jpg)

从左到右：PCB 开槽、PCB 按钮、火花隙和保险丝走线

  

# 1、PCB 邮票孔

![](常见的8种PCB标记整理汇总_images/img_004_f08ec4f89526.jpg)

邮票孔

在进行拼板的时候，为了便于PCB板分开，在中间保留一个小的接触区域，该区域中有孔称为邮票孔。我个人觉得取名邮票孔的原因，是不是因为当PCB分开的时候像邮票一样留下那种边缘。

  

# 2、PCB过孔类型

![](常见的8种PCB标记整理汇总_images/img_005_513b4bc4c602.jpg)

PCB过孔类型

在很多情况下，你会看到安装孔被微小的过孔包围。这里主要有2种类型的安装孔：镀层和未镀层。可能会有2个原因使用周围的过孔：

-   1、当我们想要将孔与内层连接时（如多层PCB中的GND）
    
-   2、未镀孔的情况，当想连接上下焊盘的时
    

![](常见的8种PCB标记整理汇总_images/img_006_9f019b54ccbf.jpg)

  

# 3、防焊焊盘（焊料窃取）

波峰焊的缺陷之一在焊接SMD的过程中容易出现焊桥，作为解决方案，人们发现在原始引脚的末端使用额外的焊盘可以解决该问题。额外焊盘的宽度是普通焊盘的2-3倍。

也被称为焊料窃取，因为吸收了多余的焊料并防止了焊桥。

![](常见的8种PCB标记整理汇总_images/img_007_0fae74d5ebe1.png)

防焊焊盘

#   

# 4、基准标记（Mark点标记）

![](常见的8种PCB标记整理汇总_images/img_008_49506373aad3.jpg)

基准标记

一个更大的裸圆圈内有一个裸铜圆圈。该基准标记用作拾放 (PnP) 机器的参考点。基准标记位于三个位置：

-   1、在面板中。
    
-   2、除了QFN,TQFP等小间距零件。
    
-   3、PCB边角处。
    

关于基准标记的更详细内容，欢迎阅读以下文章：

mark点怎么制作？9个mark点定位原则，图文+案例，带你搞定mark点

#   

# 5、火花间隙

火花间隙用于 ESD、电流浪涌和过压保护。高压会使两个端子之间的空气电离，并且在损坏电路的其余部分之前会在它们之间形成火花。不建议使用这种保护方式，但总比没有好，主要缺点是性能会随时间变化。

击穿电压可通过以下公式计算：V=((3000×p×d)+1350)

其中“p”是大气压，“d”是以毫米为单位的距离。

![](常见的8种PCB标记整理汇总_images/img_009_4be8f4fc85af.jpg)

火花间隙

#   

# 6、PCB导电按键

![](常见的8种PCB标记整理汇总_images/img_010_7fafc2ffffc6.jpg)

PCB导电按键

如果你拆过遥控器或计算器，你就应该看到过这个标记。导电按键由2个交错的端子（但未连接）组成。当按下键盘上的橡胶按钮时，两个端子会连接，因为橡胶按钮的底部时导电的。

![](常见的8种PCB标记整理汇总_images/img_011_32de65b1b7b0.jpg)

PCB导电按键

#   

# 7、保险丝走线

类似于火花间隙，这是另一种使用 PCB 的廉价技术。保险丝走线是电源线上的缩颈走线，是一次性保险丝。相同的配置可以用作 PCB 跳线，通过简单地蚀刻颈缩迹线来移除特定连接（PCB 跳线可以在某些 Arduino UNO 板上的复位线上找到）。

![](常见的8种PCB标记整理汇总_images/img_012_d0602477a37c.jpg)

保险丝走线

#   

# 8、PCB 开槽

如果你查看电源等高压设备 PCB，可能会注意到某些走线之间存在气槽。

PCB 中反复出现的临时电弧会导致 PCB 碳化，从而导致短路。为此，可以在疑似区域添加布线槽，该区域仍会出现电弧，但不会碳化。

![](常见的8种PCB标记整理汇总_images/img_013_7cde530127c6.jpg)

PCB 插槽

以上就是关于 PCB上常见8种标记的介绍，希望大家多多支持。如果有什么错误或者建议，欢迎在评论区留言。

硬件工程师及从业者都在关注我们

![](常见的8种PCB标记整理汇总_images/img_014_58147eba07eb.gif) ![](常见的8种PCB标记整理汇总_images/img_015_9b53a964efd5.gif) ![](常见的8种PCB标记整理汇总_images/img_016_75db8c1036fb.gif) ![](常见的8种PCB标记整理汇总_images/img_017_0b6ae33611dc.gif) ![](常见的8种PCB标记整理汇总_images/img_018_365c6cd9f8bb.gif) ![](常见的8种PCB标记整理汇总_images/img_019_2da1ccbac0ae.gif) ![](常见的8种PCB标记整理汇总_images/img_020_7446ffe5e3b8.gif) ![](常见的8种PCB标记整理汇总_images/img_021_d246b538f592.gif)

![](常见的8种PCB标记整理汇总_images/img_022_3352ab08e99b.gif) ![](常见的8种PCB标记整理汇总_images/img_023_0f89804cd7eb.gif) ![](常见的8种PCB标记整理汇总_images/img_024_f506b795c6ac.gif) ![](常见的8种PCB标记整理汇总_images/img_025_97df29bd0f50.gif) ![](常见的8种PCB标记整理汇总_images/img_026_d7c6fe8cd645.gif) ![](常见的8种PCB标记整理汇总_images/img_027_19e2f7b6262a.gif) ![](常见的8种PCB标记整理汇总_images/img_028_08d092bef8a0.gif) ![](常见的8种PCB标记整理汇总_images/img_029_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源头条百芯说DFM。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。