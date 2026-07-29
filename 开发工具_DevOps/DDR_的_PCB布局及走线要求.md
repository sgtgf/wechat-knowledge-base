# DDR 的 PCB布局及走线要求

原创 硬件笔记本 2024-01-31 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/pmXuEKRul0k7RrtnDa8lpQ](https://mp.weixin.qq.com/s/pmXuEKRul0k7RrtnDa8lpQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

**1\. 定义**

DDR：Double Date Rate 双倍速率同步动态随机存储器。

  

![](DDR_的_PCB布局及走线要求_images/img_002_de2aed393b80.png)

  

  

  

DDR、DDR2、DDR3常用规格：

  

![](DDR_的_PCB布局及走线要求_images/img_003_669f6662e937.png)

  

  

**2\. 阻抗控制要求**

单端走线控制 50 欧姆，差分走线控制 100 欧姆

  

  

**3\. DDR 布局要求**

通常，根据器件的摆放方式不同而选择相应的拓扑结构。

  

A、DDR\*1 片，一般采用点对点的布局方式，靠近主控，相对飞线 Bank 对称。间距可以按照是实际要求进行调整，推荐间距为 500-800mil。

  

![](DDR_的_PCB布局及走线要求_images/img_004_bcf7ded5626d.png)

  

  

B、DDR\*2 片，布局相对主控飞线 Bank 对称，常采用 T 型拓扑结构， 推荐间距如下：

![](DDR_的_PCB布局及走线要求_images/img_005_413cd18322c4.png)

  

等长要求 L1+L2=L1+L3

  

  

C、DDR\*4 片，以下列出了常用的 4 片 DDR 布局拓扑结构。

  

![](DDR_的_PCB布局及走线要求_images/img_006_56178b35259b.png)

  

针对于 DDR2，这些拓扑结构都是能适用的，只是有少许的差别。

  

  

若PCB布线空间允许，Address/Command、Control、CLK，应优先采用单纯的“T”型拓扑结构，并尽可能缩短分支线长度，如上面拓扑结构的B图所示。

  

![](DDR_的_PCB布局及走线要求_images/img_007_fc2dafe2d903.png)

  

等长要求 L1+L2+L6=L1+L2+L7=L1+L3+L4=L1+L3+L5

  

  

然而，菊花链式拓扑结构被证明在 SI 方面是具有优势的。对于 DDR3 的设计， 特别是在 1600 Mbps 时，则一般采用 D 所示菊花链拓扑结构进行设计。

  

![](DDR_的_PCB布局及走线要求_images/img_008_c1c8f75df8c2.png)

  

  

  

PCB 布线空间有限的，可以采用“T”型拓扑和菊莲拓扑混合的结构，如下图所示：

  

![](DDR_的_PCB布局及走线要求_images/img_009_eab1ef1685e5.png)

  

混合拓扑结构中“T”型拓扑的要求与两片DDR2/3 相同。

  

等长要求 L1+L3+L2=L1+L4+L5

  

  

**4\. 信号分组以及走线要求****（以下以4片DDR3设计进行说明）**

  

A、32条数据线（DATA0-DATA31）、4条DATAMASKS（DQM0-DQM3）, 4对DATASTROBES差分线（DQS0P/ DQS0M—DQS3P/DQS3M）

  

这36条线和4对差分线分为四组：

![](DDR_的_PCB布局及走线要求_images/img_010_aea7b80a8ba0.png)

  

  

再将剩下的信号线分为三类：

  

![](DDR_的_PCB布局及走线要求_images/img_011_22a9c21ea21a.png)

  

Address/Command 、Control与CLK归为一组，因为它们都是以CLK的下降沿由DDR控制器输出，DDR颗粒由CLK 的上升沿锁存Address/Command、Control 总线上的状态，所以需要严格控制CLK 与Address/Command、Control 之间的时序关系，确保DDR颗粒能够获得足够的、最佳的建立/保持时间。

  

  

B、误差控制，差分对对内误差尽量控制在5mil以内；数据线组内误差尽量控制在+-25mil以内，组间误差尽量控制在+-50mil以内。

  

Address/Command 、Control全部参照时钟进行等长，误差尽量控制在+-100mil 以内。

  

  

C、数据线之间间距要满足3W原则，控制线、地址线必要时可稍微放宽到2W~3W， 其他走线离时钟线20mil或至少3W以上的间距，以减小信号传输的串扰问题。

  

  

D、VERF电容需靠近管脚放置，VREF走线尽量短，且与任何数据线分开，保证其不受干扰（特别注意相邻上下层的串扰），推荐走线宽度>=15mil。

  

  

E、DDR设计区域，这个区域请保障完整的参考平面，如下方图片所示：

  

![](DDR_的_PCB布局及走线要求_images/img_012_ac8ea7f76c74.png)

![](DDR_的_PCB布局及走线要求_images/img_013_f542506f950f.png)

硬件工程师都在关注我们

![](DDR_的_PCB布局及走线要求_images/img_014_2e84b7ba26c6.gif) ![](DDR_的_PCB布局及走线要求_images/img_015_51d069a6484e.gif) ![](DDR_的_PCB布局及走线要求_images/img_016_5fb296583be4.gif) ![](DDR_的_PCB布局及走线要求_images/img_017_1f30148044c0.gif) ![](DDR_的_PCB布局及走线要求_images/img_018_c5bc86d0867d.gif) ![](DDR_的_PCB布局及走线要求_images/img_019_b38438d4de46.gif) ![](DDR_的_PCB布局及走线要求_images/img_020_1d54e9fe0aef.gif) ![](DDR_的_PCB布局及走线要求_images/img_021_9bb0105b1e46.gif)

![](DDR_的_PCB布局及走线要求_images/img_022_de88c48250d0.gif) ![](DDR_的_PCB布局及走线要求_images/img_023_3b83df2d253b.gif) ![](DDR_的_PCB布局及走线要求_images/img_024_db521919e8d9.gif) ![](DDR_的_PCB布局及走线要求_images/img_025_aea384ea417e.gif) ![](DDR_的_PCB布局及走线要求_images/img_026_f4924e7a240a.gif) ![](DDR_的_PCB布局及走线要求_images/img_027_a58db91dbb3b.gif) ![](DDR_的_PCB布局及走线要求_images/img_028_f0edc68b0c53.gif) ![](DDR_的_PCB布局及走线要求_images/img_029_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。