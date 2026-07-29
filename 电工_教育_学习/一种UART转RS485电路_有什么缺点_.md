# 一种UART转RS485电路，有什么缺点？

原创 蜗牛 硬件笔记本 2024-03-28 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/R4wZ9KIpzhXvZq81EW09Ew](https://mp.weixin.qq.com/s/R4wZ9KIpzhXvZq81EW09Ew)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

RS485芯片用的最多的就是SP485这类的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_002_a3afff1a7280.png)

功能框图  

**引脚介绍**

当RE#为低时，接收数据；

当RE#为高时，禁止接收；  

  

当DE为高时，发送数据；

当DE为低时，禁止发送。

  

RO为接收输出端，DI为发送输入端。

  

**网上推荐较多的自动收发电路**

![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_003_4be2d05774c4.png)

电路  

它把输入端DI接到地上，TX用三极管控制反向控制接在一起的RE#和DE，很多人表示看不懂，这真的能正常工作吗？咱们一起来分析一下：

  

原理分析：

1、当TX\_485为低电平0时，DE和RE为高电平1，RS-485处于发送状态，由于DI引脚是接地的，所以AB处于低电平0，即向其它节点发送低电平0信号；

**即输入为0时，输出也为0；**

  

2、当TX\_485为高电平1时，DE和RE变为低电平，RS-48收发器处于接收状态，此时AB引脚处于高阻状态，R11将B引脚拉至GND，R12将A引脚拉至3.3VCC，此时AB为高电平1，即向其它节点发送高电平1信号。

**即输入为1时，输出也为1。**

  

所以它是能正常工作的。

由于TX\_485为高电平1时，RS-485处于接收状态，因此只需将TX\_485保持为高电平1即可接收数据，即自动收发电路：发送高电平时同时也是接收状态。

  

那么大家想想这个电路有什么缺点呢？  

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_004_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_005_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_006_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_007_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_008_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_009_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_010_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_011_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_012_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_013_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_014_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_015_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_016_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_017_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_018_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一种UART转RS485电路_有什么缺点__images\img_019_50889e54acde.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。