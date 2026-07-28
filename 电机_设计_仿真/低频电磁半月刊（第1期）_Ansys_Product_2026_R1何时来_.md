# 低频电磁半月刊（第1期）：Ansys Product 2026 R1何时来？


> 原文地址: [https://mp.weixin.qq.com/s/-gP-7mepyUh3m-KiA-1mcA](https://mp.weixin.qq.com/s/-gP-7mepyUh3m-KiA-1mcA)

## 低频电磁半月刊（第 1 期）：Ansys Product 2026 R1 何时来？

这里记录低频电磁仿真、算法、商软、开源库/软件方面值得分享的内容，半月发布一期。

本期刊开源，欢迎投稿。

## 封面图

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DQEbTGAoQhvAPQDSsdQ0et6ia7MIfbJ6rgIdsIcxnqlEyZQOKFnCqOCATF6KJX1LiaJ1vVVMrhPJxwg/640?wx_fmt=png&from=appmsg)

新思科技于 2025 年 7 月完成对 ANSYS 的收购，这一收购使得新思科技从“芯片设计”龙头，升级为覆盖“从芯片到系统级工程仿真”的全栈解决方案提供商。新思科技预计将在**2026 年上半年**推出首套集成化解决方案。那么问题来了，**还会有 Ansys 2026 R1 版本吗？**

往年这个时候，新版本的 Ansys 产品已经流出，而今年仍不见新版本进入大众视野。我无意间在 intel 官网看到了 **ISV**（独立软件供应商）\[1\]，这一认证是显卡厂商与专业软件开发商合作，通过一系列兼容性、稳定性和性能测试后获得的认证，能保障显卡硬件和对应驱动在专业软件中稳定高效运行。从中我们可以看到 **Ansys Discovery、EnSight、Fluent、Icepak、Mechanical 2026R1** 等核心产品，这说明 Ansys 2026 R1 相关产品应该已经**箭在弦上**，让我们期待一波。

## AI

##### AI 一手消息

最近开始高频次刷 X 以及 Youtube，获取有关 AI 的一手消息。目前来看 AI 相关的一些标准例如 MCP、Skill 等等都是**国外先提出来，国内跟进**。另一方面**国外消息传到国内到大范围铺开被媒体报道需要一定时间**，并且是二手甚至多手消息。每个人侧重点不同，理解不同，直接看原消息**不会使得思想跟随着别人走**，而是可以有自己的想法。

##### 什么是 MCP、Skill、Rule、Command

最近把大模型的一些概念恶补了一下：MCP、Skill、Rule、Command。其中 MCP 以及 Skill 这两个都是由 **Athropic** 提出，现在已经逐渐成为了标准。在国内，扣子 2.0 近期也对 Skill 进行了支持：

[扣子 2.0，让 Agent 更进一步](https://mp.weixin.qq.com/s?__biz=Mzk0MzY0MTMwNA==&mid=2247487790&idx=1&sn=6c1149f382be80e1cedbaaf587229366&scene=21#wechat_redirect)

Rule、Command 这些是 Agent Coding 这类工具重用来**结构化引导 AI 生成代码** 的一种提示词，在 Cursor、Trae 以及 Qoder 中我们可以对其进行配置。

无论是 Skill 还是 Rule、Command，其实它们**本质都是提示词——是对传统提示词的封装、标准化和场景化适配。**而**加载时机以及方式**的差异，则决定了它们各自的应用场景与核心用途。

##### AI 阅读工具推荐

推荐两个高频使用的 AI 工具**语鲸**和**Get 笔记**。语鲸是一款 RSS 订阅工具，亮点是可以将原**资讯总结**，这可节省了我一大把时间。原来一条资讯需要五六分钟甚至更长时间才能扫完一遍，然后再花五分钟去阅读自己感兴趣的部分。而现在只需要花一分钟左右便可以找到核心关注点，然后花五分钟去阅读感兴趣部分。Get 笔记是一款 AI 笔记工具，可以把**资讯推文、视频、图片进行总结**，我用它快速阅读 X 等平台上的长篇推文。最终核心内容我都记录在了 ima 当中进行沉淀，并输出到微信公众号等平台，这篇文章就是这样。

## 商业软件

##### 低频电磁方面：Ansys 与 Comsol 哪一个更好用？

这是一个争论不休的话题，但，**小孩子才做选择。**

我们从搜索引擎上检索 ansys 以及 comsol 官网：

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DQEbTGAoQhvAPQDSsdQ0et6icibgCPtR4EiblqkZK0PiculqKZibQYecoZx4uKHZ1UtXuEQW7PM6YhQuqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DQEbTGAoQhvAPQDSsdQ0et6ibpbN9hVhdYyjzYvuRxfTyfoLSefpDUqDJiaBHUE04xWy6aiaVZrD60ww/640?wx_fmt=png&from=appmsg)

我想不用我多解释，答案就呼之欲出。ansys 侧重**工程**，comsol 侧重**多物理场**。抛却其它因素，两者理念的不同决定了产品的主要受众不同，目前来看企业用 ansys 的居多，高校科研院所用 comsol 的居多。**只要能解决你的问题，用什么工具取决于你。**

## 开源库/软件

##### 第一届 Gmsh 用户会议

**第一届 Gmsh 用户会议**将于 2026 年 7 月 8 日至 9 日在**比利时列日**举行\[2\]。活动将汇集全球的研究人员、工程师和开发人员，共同**分享他们在 Gmsh 方面的经验，了解最新进展，并探讨开源网格生成和数值模拟的未来发展方向**。活动日程将包括特邀演讲、实践环节、技术教程，以及与 Gmsh 开发团队进行非正式交流的机会。注册详情和完整议程将于 2026 年初公布。

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DQEbTGAoQhvAPQDSsdQ0et6c9CA576PtcsFUiblWxlAic19SUyqPLht3CNvKRQ8yjQxwfbp9jkm9yrg/640?wx_fmt=jpeg&from=appmsg)

## 思维破壁机

**笨笨的坚持：**

ChatGPT 问世以及 AI Coding 的爆火，让不少人觉得任何一个人都顶的上一个小团队，仿佛**新手也可以一夜之间成为老师傅**，但**在专业领域上成为老师傅并没有捷径**，AI 工具的价值，不过是让我们原有的道路上走得更快、更高效。

对于编码领域来讲，在成为老师傅以前，要**利用 AI 工具提升自己的核心能力**，在成为一个老师傅以前，**不要把功夫都用在如何更好的使用工具上**，等你成为老师傅你就会发现这些东西会**手到擒来**。

举个例子：起初我以为，AI Coding 的出现让我们不必再亲自手写数据结构、不必掌握基础的算法 —— 这类工作本就是它的强项，我们只需能看懂即可。但随着 AI Coding 的不断发展，再加上自身的开发实践，我愈发意识到，**扎实掌握这些基础技能依旧十分必要**。唯有如此，才能给 AI 提供更精准的提示词。另一个不恰当的例子：让 AI 做一幅画，老师傅拥有深厚的绘画功底，他可以选择用 AI 协助甚至直接用 AI 生成画作，这无疑极大提高了效率。但相较于不懂绘画的人，老师傅会详细的描述这幅画作，如何构图、什么色调与风格、光影如何......这些没有扎实绘画基础的人根本做不到，又怎么指望 AI 创作出满意的画作。

所以有时候，我们需要一点“笨笨的坚持”，利用 AI 快速提升自己的基础能力，把该有的地基打扎实，**这一时期别奢望 AI 能提高太多效率。等我们成为一名老师傅之后，使用 AI 大幅提高自己的工作效率，那将是自然而然的事情。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DQEbTGAoQhvAPQDSsdQ0et667tNcShXynPbMCeYYBZrbT5FHcicPJWhbpicGJV5NJSoIbFDoh90Knhw/640?wx_fmt=jpeg&from=appmsg)

参考资料

\[1\] 

经 ISV 认证的显卡硬件和驱动程序: _https://www.intel.cn/content/www/cn/zh/support/topics/certified-graphics-hardware-and-drivers-by-isv.html?collection=ansys/mechanical-2026-r1_

\[2\] 

First Gmsh User Meeting: _https://gmsh.info/news/_

作者|斗沙片刻