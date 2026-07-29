# 锂电池边充边放和升压电路-(DIY全分立耳放供电9V~12V)

原创 电路一点通 2025-01-08 11:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/2-piXNofLVTqMtVg7\_vMkw](https://mp.weixin.qq.com/s/2-piXNofLVTqMtVg7_vMkw)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_000_303be6ba7de8.other)

极简全分立耳放的供电为直流 9V~12V，之前一直用淘宝上一家做 UPS 模块的厂家生产的板子供电，后来我决定自己来制作，才有了最近的几个关于锂电池的电路。可以先看一下，那个电路不建议作为边充边放使用，因为 TP4056 的充电电流为 1A，如果要边充边放，则最好设置在 500mA 左右，这样就空有 TP4056 的较大体积而没有很高的充电效率。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_001_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

TP4067 体积更小，充电电流约为 500mA，功能上缺少了温控部分，但是由于充电电流并不大，温控也不是不要的。TP4067 的应用电路与相同封装的同系列其它芯片是完全通用的，可以升级可以代换，最终选择 TP4067 主要是因为比较好买，价格也非常合适。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_002_ea4cfe03bd68.jpg)

以上是完整的电路，下面分部分简单讲一下（因为电路就非常的简单）：

1.  **MOS管防反接电路**
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_003_4116ab57f7d1.jpg)

这是基于 P-MOS 的防反接电路，这样的 MOS 管非常好选择，AO3401、SI2301 之类的都可以使用，而且导通阻抗非常低，压降非常小，价格也很便宜。当电源反接时，Q1 栅极为高电平，导通截止，当然你可以使用 N-MOS 的防反接电路，只是需要接在低位，原理上是一样的，性能上要优于 P-MOS 电路，我是因为不想再买多余的型号才这样设置的。

**2\. TP4067 充电电路**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_004_a9eb047f4d85.jpg)

这里比官方推荐电路多了两个 100nF 退耦电容，这部分在数据表最后的注意事项中有提到，一般情况加上要好一些。热散耗电阻 R3 最后买到的阻值是 0.4Ω，它的取值范围是 0.3~0.6Ω。LED 可以购买共阳极发光二极管，据我的经验是不太好买到合适的，我用了两个 0805 贴片LED，占位空间差距并不大。

**3\. 电池与外部电源自动切换**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_005_f624edb69e47.jpg)

接入外部电源时，Q2 截止。在【P48】中已经介绍过电路的原理，可以去看看，原来外部电源较为复杂的设计已经由一个肖特基二极管取代，因为 5V 即使经过压降，电压仍然高于电池充满的电压，所以它完全可行，而且更简单。

**4\. TLV61046A 升压电路（单路输出）**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_006_eba6cc2e04d3.jpg)

需要说一下，如果你要使用 EN 作为开关，那么下拉电阻 R6 就是必须的，如果直接用 R9 短接了 EN 功能，R6 则不需要。因为【P28】已经有了电源开关，所以实际使用的时候是直接用 R9 保持了 EN 常闭状态，如果你在需要使用 EN 控制的环境，务必不能安装 R9。

如果需要自己调整输出电压，可以重新计算一下 R7/R8 的取值。由于这个模块并没有为较大负载设计，电感也不需要更大的封装。

最终测试的结果是在使用 USB 外部供电时（充电器而非 PC 的 USB 接口），噪声可以非常小，如果要使用电脑的 USB 接口，多数情况下效果不会让人满意，毕竟电脑内部分干扰太强了。

虽然解决了电源的问题，但是后面却不想再继续制作了，主要是它太简单，我又不能卖很贵，不过它确实很好听，很有意思，如果你刚开始玩分立耳放 DIY，我非常建议你自己搞一个，如果工业设计方便做的不错，用上这个电源方案，它就非常完整了。

▼ **往期精彩回顾** ▼  

    
-   [👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [汽车底盘可变悬架解析：空气悬架、电磁悬架优缺点、区别](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247496760&idx=1&sn=6c5b6d12364421df8c5f7374d4199a3d&scene=21#wechat_redirect)    
    
-   [新能源纯电动汽车(EV)主要部件及工作原理和特点](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247496624&idx=1&sn=d82232ffea2703fc67b4525c16ce0f52&scene=21#wechat_redirect)
    
-   [新能源纯电动汽车整车控制策略ppt](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247496140&idx=2&sn=657734200341171606fdb2ec67186f00&scene=21#wechat_redirect)    
    
-   [简单画个电路原理图，复杂做个PCB设计  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537342&idx=1&sn=14db6038f19c354de5d75547471f372f&scene=21#wechat_redirect)
    
-   [硬件10年经验，如何年入100万  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537308&idx=1&sn=541be143989d4c6f5b1fb1fb40690503&scene=21#wechat_redirect)
    

  

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\锂电池边充边放和升压电路_(DIY全分立耳放供电9V_12V)_images\img_007_a8b37a87b291.other)

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！