# 做了多年EMC，才知道为什么横坐标不等距？

原创 蜗牛 硬件笔记本 2024-02-03 11:32 四川

> 原文地址: [https://mp.weixin.qq.com/s/CnFV6wl6wJlSV9gVylBg0Q](https://mp.weixin.qq.com/s/CnFV6wl6wJlSV9gVylBg0Q)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

如下图，是FCC认证中在30MHz~1GHz范围内RE辐射测试的一张图，为什么横坐标频率范围间隔不等距呢？我相信很多做过EMC的小伙伴可能都不太清楚。今天咱们来解释一下。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_002_dea8d2a88e26.png)

**我们先来看纵坐标:**

单位为dBuV/m，表示噪声强度，dB（分贝）是个比值  

dB和电压的关系  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_003_0039464d4964.png)

dB和功率的关系

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_004_9ce9c95de0ba.png)

以1uV为基准点，如果一个信号被放大后变成了10V，那么计算为：

10V=1000x1000x10x1uV，

计算起来非常麻烦，但用对数表示为140dBV，看起来就比较简单了。

  

**再看横坐标:**

在80MHz内以10MHz为间隔，而＞100MHz是以100MHz为间隔，但为什么相邻频率间隔越来越小呢？这是因为实际坐标距离是用对数来表示。

比如：40M相对于30M来说，40M的距离就是

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_005_99f4d9c55c7b.png)

40M的距离就是  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_006_1618aa1a9c25.png)

以此类推，70M，80M，100分别是：1.84，1.9，2，其余各点大家感兴趣可以自己算一下。可以看出每两个点之间的增量越来越小，但间距相差不大。

其中100MHz-200MHz间距最大为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_007_30094cdb1126.png)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_008_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_009_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_010_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_011_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_012_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_013_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_014_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_015_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_016_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_017_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_018_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_019_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_020_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_021_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_022_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\做了多年EMC_才知道为什么横坐标不等距__images\img_023_50889e54acde.gif)

## 

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。