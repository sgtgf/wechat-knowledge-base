# 为什么Y电容容量基本都不大于0.1uF？

原创 硬件笔记本 2024-05-04 11:08 四川

> 原文地址: [https://mp.weixin.qq.com/s/xh0z4F5uJaTowiJU\_ipXyw](https://mp.weixin.qq.com/s/xh0z4F5uJaTowiJU_ipXyw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_002_d6fe8febf8c4.png)

**Y电容**

Y电容是安规电容的一种，安规电容是指用于这样的场合：即电容器失效后，不会导致电击也不会不危及人身安全。

  

也就是因为这样安规电容与其他普通的电容有着不一样的地方，普通的电容在电源断开之后很长一段时间还会保留一定残留电压，一旦手触碰到就会发生电击，而安规电容却不会。

  

Y电容大多数为蓝色，但是也有黄色的，由于是安全电容，因此Y电容上面一般都会标有相关的认证，例如CQC、VDE、UL等认证，如图1。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_003_29f417f98376.jpg)

Y电容通常接于零线与地或者火线与地之间，如图2是I级EMI滤波电路，Y1和Y2是Y电容，通常两个串联一起。

  

根据耐高压分为Y1、Y2、Y4三个等级，其中：

-   Y1电容耐高压值＞8 kV；
    
-   5 kV＜Y2电容耐高压值＜小于8 kV；
    
-   2.5 kV＜Y4电容耐高压值＜小于5 kV。
    

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_004_eed09b437fef.jpg)

**漏电流**

  

对于开关电源，Y电容通常接于一次侧（初级）与二次侧（次级）之间，如图3，Y电容器可为一次侧耦合到二次侧的干扰电流提供回流路径。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_005_c7b18fc1043f.jpg)

  

**那么，Y电容容量为什么不能太大呢？**

  

我们知道Y电容对于EMC有很大的帮助，由于是共模电容，因此需要接地，那么就会有一个漏电流，还是以上面的EMI滤波电路为例：

  

**Y电容漏电流 I=2πfCU**

  

其中：

f 是市电频率，即50Hz；C为Y电容总容量4700pF+4700pF=9400pF；U对地端电压，这里取110V即可。

  

则可以计算得出漏电流有0.32mA之多。

  

并且会发现漏电流与容量成正比关系，也就是说容量越大漏电流也就越大。

  

对于220V/50Hz交流电网供电的用电器，很多国家都规定漏电流不得大于1mA；对于手持式以及移动设备等其他用电产品对漏电流也有不同的要求。

  

因此如果电源产品需要接Y电容，容量一般都不是很大，有时候甚至去掉Y电容，因此我们经常看到的Y电容容量基本上都是不大于0.1uF。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_006_d3d93945d839.jpg)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_007_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_008_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_009_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_010_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_011_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_012_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_013_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_014_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_015_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_016_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_017_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_018_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_019_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_020_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_021_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么Y电容容量基本都不大于0_1uF__images\img_022_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。