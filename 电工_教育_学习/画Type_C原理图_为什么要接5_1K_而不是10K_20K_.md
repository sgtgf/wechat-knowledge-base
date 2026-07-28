# 画Type-C原理图？为什么要接5.1K，而不是10K，20K？

原创 王工 硬件笔记本 2026-04-20 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/pU8yvh6p8pReDLMV1pKXHQ](https://mp.weixin.qq.com/s/pU8yvh6p8pReDLMV1pKXHQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

前段时间，咱们聊Type-C原理图设计时，提到了CC引脚上的那颗5.1k下拉电阻。[画Type-C原理图？先把这个5.1K电阻圈起来](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247567305&idx=1&sn=1c2945746cf70b8033992dc536a45bf2&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacG1UOz7gBdXEMHG7Z7gcDhJLx4wDVcjxs7taZdf2jEics1jyshxUicTNTTTD9fLNKQyyiaDiaE0HXfszjBn8Bse3nwJWwexaGyvGI/640?wx_fmt=png&from=appmsg)

当时只是简单交代了它的作用——配合内部上拉电阻实现设备角色识别、正反插检测和供电控制。文章发出来后，有朋友问：为什么非得是5.1k？换成10k或者20k行不行？  

这个问题问得很实在。在硬件设计里，一颗电阻的取值从来不是随手选的。今天咱们就把这个问题彻底搞清楚。

01

首先得认识CC引脚

要理解为什么是5.1k，得先明白Type-C接口是怎么通过电阻进行互相沟通的。

在Type-C接口里，CC引脚有三个作用：判断设备角色（你是供电方还是受电方）、判断正反插方向、控制VBUS供电。而这些功能，全靠电阻的阻值来传递信息。

供电方（比如充电头）的CC引脚上，有一个上拉电阻Rp。这个Rp不是固定值，而是有好几种规格，分别代表供电方愿意提供多大的电流。

受电方（比如你的设备）的CC引脚上，则需要一个下拉电阻Rd到地。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niafPiahdiafrI976w2GpDHqYpItnNQApibCnCWUOdwPCOTPeAAsX2rXhRiaHCQAm8blk5jwjgicDLFNWsCO1VBZZia0RX65s2semRHmaI/640?wx_fmt=jpeg&from=appmsg)

当Type-C线缆把供电方和受电方的CC引脚连在一起后，Rp和Rd就构成了一个分压电路。供电方通过检测CC引脚上的电压值，从而知道受电方是什么类型的设备。

这里有个细节值得注意：Type-C接口有CC1和CC2两个引脚，但在连接时只有其中一个会被用到。线缆内部其实只有一根CC线，正插时连接CC1，反插时连接CC2。供电方同时监测两个CC引脚的电压，哪个被拉低了，就知道当前是正插还是反插，然后把数据通道切换到对应的那组引脚上。这个检测过程在毫秒级完成，所以你插线的时候完全感觉不到延迟。

这就是Type-C接口最基本的握手过程——不需要复杂的协议，两颗电阻就能把意思表达清楚。

02

为什么是5.1k？

为什么在UFP这一端，也就是我们的设备端，这个下拉电阻非得是5.1kΩ，而不是更常见的10kΩ或20kΩ？

这是USB-IF制定的一套标准。

大家商量好了：当供电方检测到CC引脚上的电压落在一个特定范围内时，就判定对方是一个标准的Type-C设备。

那么，5.1kΩ这个值告诉对方什么信息？

**只告诉对方“我是一个符合规范的Type-C设备”，并不直接告诉对方“我要吃3A电流”。**

通过手册可以查到，不同输出模式下，上拉电阻或电流源的规格。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacgnRerqAw0VYWK8o9YV5icKAPszB4dFC9I1zetA3xIsJjdS0dH675L6GFQNqkN0OLTwia4MmZibY7vibvTXgMHJfAiaSnwCRvLeUnw/640?wx_fmt=png&from=appmsg)

你可能在网上见过类似的说法："5.1k代表3A，10k代表1.5A，22k代表500mA"。**这个说法在早期的Type-C规范草案中出现过，但在正式规范中被PD协议取代了。**

在现代Type-C设计中：

**5.1kΩ是**唯一的标准下拉电阻值。它只声明一件事："我是一个Type-C设备，咱们可以握手了。"

**10kΩ或20kΩ**：**不是标准的下拉电阻**。如果设备接了这些值，合规的充电器会无法识别，直接拒绝输出5V。

那设备的电流能力怎么告诉充电器？答案是：通过后续的PD通信。

03

CC线还能干更多事情

CC引脚的作用远不止于检测电阻。

当供电方和受电方通过5.1k电阻完成基础握手、VBUS开始输出5V后，CC线就进入下一个阶段，变成了一条电话线。这时候，双方开始通过CC线进行USB PD协议通信，协商更高的电压（9V、12V、15V、20V）和更大的电流。

问："我是手机，支持PD协议，给我9V/2A吧"

问："我是笔记本，需要20V/3.25A，能给吗？"

问："我是开发板，只吃5V/1A，别给我升压哦"

PD协议通信用的是BMC编码，通过CC引脚上的高低电平变化来传输数据。你可以把它理解成一种特殊的串口通信，只是物理层用了不同的编码方式。  

在这个过程中，5.1k电阻依然起着作用，它给CC引脚提供了一个确定的直流偏置，让通信能够在一个稳定的电平基础上进行。如果没有这颗电阻，通信信号就没有参考地，根本传不起来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacO4HRDPHciahBLLWia0y6U6zL9MMQOoXibGibdumkmoveBeZAXGK0z2408easEibmXUmw7ZnE8hNlTSD3nPQshTf9ribIIqhL8m2icJo/640?wx_fmt=png&from=appmsg)

所以，5.1kΩ的真正含义是：**"我是一个支持Type-C规范的设备，准备就绪，可以开始PD通信了。"**

**再多一句嘴，说说另一种特殊的电阻：Ra**

Type-C规范里还有一种电阻叫Ra，阻值范围800~1200Ω。它不是给普通设备用的，而是专门用来识别**主动式线缆**。

主动式线缆是什么？就是那些内部带了芯片的线缆，比如长距离高速数据线里面可能有信号放大器、支持5A大电流的线缆里面可能有E-Marker芯片识别电流。这些线缆内部的芯片需要供电才能工作，Ra就是触发供电的开关。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacOjFjcicUzlXJiaV9uqmCNEInyTx8ibYdrcQvFaPbRZOWhm3B5y0wGKG5D2m55MWbNMiaRNL3pBEGnz5Ef8HYw8WSy1YicAiapCdA4I/640?wx_fmt=png&from=appmsg)

当DFP检测到某个CC引脚接的是Ra而不是Rd时，就知道这根线缆内部有芯片需要供电，于是把这个CC引脚切换成VCONN模式，输出4.75~5.5V、最大1W的功率给线缆供电。

所以，在画Type-C原理图时，CC引脚上的这颗下拉电阻一定要仔细核对：**必须是5.1kΩ，精度1%最好**。这是让你的设备能正确握手、能正常充电、能进行快充协商的基础。

至于你的设备到底能吃多少电流——那是PD通信要谈的事情。

大家还有想了解的吗？欢迎在评论区留言

推荐阅读（点击如下三个图片分别进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgrpFGD2SeQkEs0NdmabDyNzF4TElQUMZelbcZVLsYOVXvVGd0oicACnXV3WxMJ0sEephsfnwQcRcg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&watermark=1#imgIndex=6)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247561335&idx=1&sn=0ef48120c22a90b202dbeb26e94eddfa&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgrpFGD2SeQkEs0NdmabDyN5zL5KOE8e7TKAGSXgwkhOQMRfMMCWnvNSqAOhibqiaibPWPU1SUOYcYBA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&watermark=1#imgIndex=7)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247561229&idx=1&sn=af2ba5b6c8ec328a7f2399de00d965c4&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgrpFGD2SeQkEs0NdmabDyNL9Hlx1UkOaiaN6rzDJoMf9txkSeU7ReJaGZgJ6nPOgK0XYEeGu7eafw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&watermark=1#imgIndex=8)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247561890&idx=1&sn=4fd14261f9dcadcedf7fc2454707818e&scene=21#wechat_redirect)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niadicXL6M10cqB3iaIso20FveqvV7Mh1CIlKQEhTI6wsppDBMBicxSmyfMiaOwRvAtBHKnBDGapobBK9w4IvJhoke8znEJoODYFaYLI/640?wx_fmt=jpeg&from=appmsg)