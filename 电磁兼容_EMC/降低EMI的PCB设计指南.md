# 降低EMI的PCB设计指南

原创 电路一点通 2025-04-01 11:35 广东

> 原文地址: [https://mp.weixin.qq.com/s/ggUElovdbuE4R8OM1xTcIw](https://mp.weixin.qq.com/s/ggUElovdbuE4R8OM1xTcIw)

线缆和连接器

-   1 差模和共模噪声
    
-   2 串扰
    
-   3 返回路径数量
    
-   4 外部PCB -IO 布局建议
    
-   5 防止噪音和静电放电
    

  

tips：资料主要来自网络，仅供学习使用。

  

设计良好的两层板，和大多数四层板，有最小的辐射。系统级的问题是由于将PCB与任何板外支持功能、其他处理器或显示器和键盘PCB互连的电缆产生的辐射。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_000_0b968d7c9ea5.png)

-   [![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_001_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

因为通常在板之间只有一个地线，所以一个感应线必须返回由其他线携带到第二PCB上的所有RF能量。如果有任何阴抗在单一的地线射频能量的一部分不返回到微机的PCB通过地线，而是通过一个辐射路径。

  

能量辐射出第二板并耦合回第一块板，"但是，在此过程中，该辐射也会在系统中的其他位置添加噪声，以及成为在屏幕室测量的直接辐射。关键的纠正措施是确保回路的传导路径具有非常低的射频阻抗。

  

1 差模和共模噪声

共模噪声是电缆中的一个大问题，但故障不在于电缆，而在于电路板上的连接，信号和返回连接到电路板上，形成公共阻抗。共模噪声可以在源端通过减小公共节点的阻抗来校正，或者通过在整个电缆周围放置铁氧体磁珠来减小。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_002_1e6fa68e3d4a.png)

  

差模噪声(边缘过渡的有用噪声)应首先减少到最大(最慢)允许的上升和下降时间，并应只发生在所需的最低频率。辐射出的噪声是由于信号的环路及其回波引起的。通过尽可能多的返回，并通过扭曲每个信号和返回对，这个循环被最小化。后者在一定距离处引起场抵消，其方式与地面上的路由功率相同。![](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_003_77cdbac4b505.png)

  

2 串扰

电缆中的串扰与PCB中的串扰相同。噪声从源耦合到安静的受害者信号。因此，运行时钟或其他高速纹合导线各自独立返回。串扰在2米长的电缆中是一个问题，在短至6英寸的电缆中也是一个问题。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_004_8c5a90196d03.png)

3 返回路径数量

在计算机行业中，电缆或线束中每九条信号线至少有一条接地线是常见的做法。随着更高的速度，这一比例正在向1:!5的方向发展。这些更高的速度不仅限于数据速率，还包括谐波含量。在设计信号线和回传线时，请使用以下准则:

![在这里插入图片描述](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_005_57f8d806a995.png)

最好的做法是为电缆中的每个信号设置一个接地回线，作为双绞线。

即使是在完全密封的金属盒中连接到前面板显示器的跨接电缆，也不要每九条信号线少于一条接地回路。

如果电缆超过一英尺长，它应该有一个接地返回线的四个信号线。

如果可能的话，应该有一个坚固的金属支架，用作机械支撑，焊接在两个板之间，作为安装支架和坚固的RF接地回路。

  

4 外部PCB -IO 布局建议

  

PCB应该有一个大的接地面积，连接到外壳的屏蔽层，作为进入或离开外壳的每一条线上的旁路电容器的接地。这些电容器提供了微机噪声的最终过滤，但也旨在过滤屏蔽盒外的电缆上拾取的任何噪声。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_006_f52e8cbeebe7.png)

  

5 防止噪音和静电放电

  

电缆上的噪声和ESD事件将通过PCB上电缆上的旁路电容器并输出到屏蔽层(机箱)。因此，从电容器到屏蔽层的接地应该很宽(3:1)，并且最好用两个或更多的螺丝固定在屏蔽层上。旁路电容值应小于1000 pF，所以有效的串联电阻(ESR)是在50-500兆赫范围内最低。轴向器件的引线长度将是ESR的一个因素，因此表面贴装元件是首选。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_007_5982f6ad8720.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   **[过流与过压保护电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542661&idx=1&sn=ce99bc1e3ddd1d28c809e3e4c51d8513&scene=21#wechat_redirect)**
    
-   **[TL431恒流源电路对于电流有什么要求吗？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542624&idx=2&sn=6fcc146173952eb1286e5b6f222d8c01&scene=21#wechat_redirect)**
    
-   [汽车发动机外部结构原理图解：燃料、EFI、汽缸、三元催化等](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488626&idx=1&sn=15ce27b376060192c13a37b6cd0e5250&chksm=c33e6ccef449e5d8df6bcc0101bf42f6e8a610af75a684fa8dc9f8cf5b69bdda8a63d3b505e7&scene=21#wechat_redirect)
    
-   [汽车发动机放置方式和驱动形式示意图、构造图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488714&idx=1&sn=fa579c56a8cf5d11d535e3ebc33a261a&chksm=c33e6c76f449e56081172e4a370bfafd2c31a1c23ba7074707a90fa4c049a7ea68b01fcb5eec&scene=21#wechat_redirect)
    
-   [汽车构造：汽油柴油车底盘布置图、离合器分解图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488533&idx=2&sn=2dc0b5e551187a0c5a37ac5ab8e20732&chksm=c33e6ca9f449e5bff8160c69438eb3a5439313e87c2ed484877345539ce4a7bd52e075034939&scene=21#wechat_redirect)
    
-   [汽车常用缩略语-汽车构造与原理第4版（上册\_发动机）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488696&idx=2&sn=2401c3d6eb234b965fd07cf5c1a8dd27&chksm=c33e6c04f449e5128b6d5b35f1b67e3d802e4d3836eea1f47eb2bc6cb6c31f77e64c1c292f94&scene=21#wechat_redirect)  
    
-   [汽车发动机放置方式和驱动形式示意图、构造图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488714&idx=1&sn=fa579c56a8cf5d11d535e3ebc33a261a&chksm=c33e6c76f449e56081172e4a370bfafd2c31a1c23ba7074707a90fa4c049a7ea68b01fcb5eec&token=1056994762&lang=zh_CN&scene=21#wechat_redirect)
    
-   [电动汽车原理与构造（311页）.pdf](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247485997&idx=2&sn=04fb81d707532d545980ee81ea6a0c2c&chksm=c33e7291f449fb87342a737eb9563dca67c7968ba7c26e3a35cca93893668567a8c0883ed0e6&scene=21#wechat_redirect)
    
-   [汽车内外构造、示意图详解-一目了然看得明白！](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486748&idx=1&sn=dcb82a1a3f6419ba36818d8b03fe2b83&chksm=c33e75a0f449fcb675aa63f72253fb45c31cb743ae63f06919fee7977890f9b528cbad297136&scene=21#wechat_redirect)
    
-   [汽车不神秘 汽车构造透视图典（161页）.pdf-精选新款世界名车](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486473&idx=2&sn=f37d10c5b8327e146da745500c45d419&chksm=c33e74b5f449fda3c319b9fc0cbee63bfea75987b209dbf8e7659878679856d08e363845b3f1&scene=21#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\降低EMI的PCB设计指南_images\img_008_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**