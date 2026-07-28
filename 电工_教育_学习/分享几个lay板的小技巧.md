# 分享几个lay板的小技巧

原创 硬件笔记本 2023-11-04 10:55 四川

> 原文地址: [https://mp.weixin.qq.com/s/rLIqRxd-2N1zTEQAC5oWyQ](https://mp.weixin.qq.com/s/rLIqRxd-2N1zTEQAC5oWyQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**1 布局原则**

1、遵照“先大后小，先难后易”的布置原则，即重要的单元电路、核心元器件应当优先布局。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7v6R8IU3eQicibQBu92HeO6IBP1SVUjQBJrQMRlcfg4xspAqPqZgXEMO4Q/640?wx_fmt=jpeg)

  

先大后小，先难后易

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vwEtnfvhmI6gqY2soa6DwoDrUbBoPbXGy0cfIGknM26qzT781zOfQHg/640?wx_fmt=jpeg)

上图中1是因为机械结构决定电源与接线柱在这里。

  

2、布局中应参考原理框图，根据单板的主信号流向规律安排主要元器件。布局应尽量满足以下要求：总的连线尽可能短，关键信号线最短；去耦电容的布局要尽量靠近IC的电源管脚，并使之与电源和地之间形成的回路最短 ；减少信号跑的冤枉路，防止在路上出意外。

  

如下图， C8到C11都是在VCC与GND之间的去耦电容，在原理图中并没有办法体现出它们的位置要求。但是PCB中们应当布局在芯片电源的输入引脚附件，例如31与32脚附近应有电容，18与19脚附近也应有电容。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vBhIyibZPVxSHIwKvkLuFkhs8A3C8GfolWvlibn1oicYebsldkkYJRCnaA/640?wx_fmt=jpeg)

  

错误示例，并排放置

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vKp5cDOQIRhwn1ZZSN3sQmeOPSEN9OjibR9s7yBCd2tNpO7diaN7Tnj3w/640?wx_fmt=png)

  

正确示例，靠近芯片电源输入脚

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7v4zMbial3sRqtyowWyib8qrzUrvOxFTA5IQxCTtUIu7jnnDNnysCb9Mbg/640?wx_fmt=jpeg)

  

3、元器件的排列要便于调试和维修，亦即小元件周围不能放置大元件、需调试的元器件周围要有足够的空间，弄得太挤局面往往会变得很尴尬。如下图R7与C7，如果先焊接周围的器件的话，R7与C7就很难焊接了。（这里也说明了焊接的顺序很重要）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vkLnRBuoIkyEY27WjeCG3P9Y1MMUyPFLD3bXbiaiaD2hmFT6XhB7TtdnA/640?wx_fmt=png)

  

4、 相同结构电路部分，尽可能采用“对称式”标准布局；按照均匀分布、重心平衡、版面美观的标准优化布局。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vmN8kLbF3xEWa4NxYtLkgzutptv6xMibL7FKpKibSnPVv5DOaFWsQumsQ/640?wx_fmt=jpeg)

  

均匀分布、重心平衡，布局要整齐

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vicgtSDoACyhA3Sfu09R1fTdziciblT9QWxczMjvjiatYibAGSIicpNs4f4Ug/640?wx_fmt=jpeg)

  

5、同类型插装元器件在X或Y方向上应朝一个方向放置。同一种类型的有极性分立元件也要力争在X或Y方向上保持一致，便于生产和检验。（如需要人工确认器件极性，可能要生产成本会上升）

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vsv7Ewyk1OeViaAorscfz7GGmv3lfFFPZJIp8dM3tOXDlQqLMLjWFAfA/640?wx_fmt=jpeg)

  

6、发热元件要一般应均匀分布，以利于单板和整机的散热，除温度检测元件以外的温度敏感器件应远离发热量大的元器件。除了温度传感器，三极管也属于对热敏感的器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7v6Ltnh6GIJbhmzN0Aa0pOLPic7iamdNsEh4icsTvmY7LMwrOLJKwJGIMHg/640?wx_fmt=jpeg)

  

7、高电压、大电流信号与小电流，低电压的弱信号完全分开；模拟信号与数字信号分开；高频信号与低频信号分开；高频元器件的间隔要充分。元件布局时，应适当考虑使用同一种电源的器件尽量放在一起，以便于将来的电源分隔。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vy9mWNOtQvSicQB21k96zktA2KTruG2pHtXy8MibMafibNKheqNSEMcXTw/640?wx_fmt=jpeg)

PCB布局示例

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vORnVqduDvSv9tZ3Hia1cCaxw6a9wGhjljbzGibfCYnFlQDgndPaO2acA/640?wx_fmt=png)

  

**2 布线原则**

以上即是关于“怎么摆”即布局的主要注意事项。而关于“怎么连”则相对要更复杂一些，大体来说就是：

-   关键信号线优先：摸拟小信号、高速信号、时钟信号和同步信号等关键信号优先布线 ；
    
-   密度优先原则：从单板上连接关系最复杂的器件着手布线。从单板上连线 最密集的区域开始布线 。
    

  

而布线的自助指南可以简单的总结为：

1、尽量为时钟信号、高频信号、敏感信号等关键信号提供专门的布线层，并保证其最小的回路面积。必要时应采取手工优先布线、屏蔽和加大安全间距等方法，保证信号质量。

2、电源层和地层之间的EMC环境较差，应避免布置对干扰敏感的信号。

3、有阻抗控制要求的网络应尽量按线长线宽要求布线。

3 根据原理图布局的示例

  

如果布局不合适，板子使用起来可能很不方便，布线难度很大。

布局时配合完成某一个功能的器件尽量挨得近一些，有操作技巧，接下来举例说明。

可以在原理图中先找到运放模块的器件，按住ctrl选中。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vfl51qcA1vM7TnmkSTsPTndJpiaxPLgRBQ5IRC48f5ianoaTIDk5icUzfQ/640?wx_fmt=jpeg)

  

则PCB中，这些器件也已经被选中

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vGnsQFF1zwSCXvjxksibGZoJJ4FO8Uo6CJgUzyAgUHj6or9dR76wwTlQ/640?wx_fmt=png)

  

然后观察原理图中的连接关系，比如C4接R3，R5，Q1。在PCB中找到这几个器件，放在一起。

观察预拉线的情况，已知每一个器件都有一个公共的网络叫做VB，可以按住ctrl选中网络属性为VB的一个焊盘，则VB高亮，例如

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vUSMmL8osLF7jVYoErpVXkyUzOziaXcAlMP59W9fSrIHUfwBcqrK8RXA/640?wx_fmt=jpeg)

  

调整后编程如下布局

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiapPWee1sNhepgredYE1L7v4jkSY9jOohTJv4mBXlDNRYNvClsOFgMmEKaccE8Vx9AIbloeGebiapQ/640?wx_fmt=png)

  

观察原理图中，Q1接R6，然后把R6也拖拽过来

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vTHMfxZlkjsxZYWEGbHS9EDyBLCE2a57WAByTNcGvsAhZp1Hrsia9ImA/640?wx_fmt=png)

  

其它器件以此类推

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vZic0YFWREUyseqkx9kSVcpYCBoOoSPEL6hibs95vqvibk3AXsicw6Va6BA/640?wx_fmt=jpeg)

  

然后布线就可以比较顺利

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7v5NdhgNotX1LQ0qF4Xml1P1m5L3ChofvMkFVLXtM82mOZTqVMd3hyPg/640?wx_fmt=jpeg)

  

**4、低频双面板布线示例**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7v0NWxVq0gUNMAricf4UUpmkdDgiamd9jxxLzHRrL1OLxufbMSm90UTFvA/640?wx_fmt=jpeg)

  

器件导入PCB以后，先按要求完成布局。

然后有信号线，不论是串口、485还是CAN，信号线都要尽可能短，少打过孔，有时还要匹配长度，如差分。另外有时钟线，如晶振，也要短，少打过孔。

1 先走信号、时钟线。

2 走电源线，两种电源，VCC与VCC3.3。可以专门为电源线设置一个宽度规则。电源类的线也应当少走过孔，若确实需要，可以多个过孔并联

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vicQcReqTjI6bsJL4tNC1sOE7juQ4LwfTODRIFNBX57xP59Eq9J02m5w/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7veFXiaLtxWiaLhtjicvw5y72JPREE1agbJxo2dMjHZx5re0u7nbia7fh5IQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vC4116nG9cmM03K4bT1Bq6ELQicJziajDSKypd6lPjC60BibicETHiaKhIcQ/640?wx_fmt=jpeg)

  

  

3 地线，可以根据情况决定。如大面积敷铜，可以考虑不走地线。如需要走地线，线宽应满足以下关系

地线>电源线>信号线

  

4 其它线，布线之前要观察尽可能在某个区域内，水平线与竖直线在不同的层。

水平线与竖直线走在不同的层

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vMRngT5Q2Jm6ZUgyWxcrTvGibzJmFjbUgvsKLwB9yQL4s7rScC21o0tQ/640?wx_fmt=jpeg)

可适当调整器件的方向来方便走线。

  

目的地相近的线要整齐。可以采用交互式多根线连接工具

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7voia8yvFzMjvHQyDBosostdbd9tmusbDeZft2KwHJ0ot87XU6L3Ffw7w/640?wx_fmt=jpeg)

  

如果线不可避免地要交叉，可以考虑绕大圈（当然要考虑线的属性）

如图飞线交叉了。可以绕圈。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vIAN9WrRMc27YuqtQWPyGE2icTnufCJaoFibEnxg70Su7GBFGSiaU1TOvA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiapPWee1sNhepgredYE1L7vWrBojv0NjpIFAM6ich16ibNZPdCNvtSicAMkZpK2h8pmbZZsykwuNiaUAg/640?wx_fmt=jpeg)

\-End-  

本文部分图文摘自周立功的微信公众号——ZLG致远电子

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。