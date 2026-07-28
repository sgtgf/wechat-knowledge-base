# 我为什么不担心AI取代硬件工程师

原创 王工 硬件笔记本 2026-03-06 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/zc5Z1Wj0jgkgLyHzvHW4mA](https://mp.weixin.qq.com/s/zc5Z1Wj0jgkgLyHzvHW4mA)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

前几天，咱们知识星球上有朋友提问，让我觉得特别有代表性。他说他们领导经常提2025是AI元年，让大家抓住机会。但他挺迷茫的——现在人人都会用AI读手册、分析问题、查专利，感觉这些成了基本功，根本没法靠这个突出自己。

他担心的两件事，我相信很多硬件人心里都犯过嘀咕：第一，AI这么能学，硬件工程师攒了这么多年的经验是不是要打折了？第二，到底往哪个方向钻，才能让自己不会被后浪拍在沙滩上？

今天就跟大家聊聊这个话题，不一定对，咱们就当交流探讨。

01

AI够不着的地方，还很多

先说个最简单的道理：不管AI多厉害，最后它得在硬件上跑。芯片要贴片，电源要设计，接口要接上，散热要搞定。只要这些东西还是物理存在的，就得有人对它负责。

咱们做一个产品，从立项到样机，到调试、生产、小批量、大批量，中间任何一个环节出问题，产品都出不来。就算出货了，到了客户手里，屏不亮了，你怎么排查？是供电问题，还是接口松了，或者电路设计有bug，还是软件逻辑不对，还是屏本身坏了？最后可能发现就是一根线松了——结论很简单，但难的是你查找问题的过程。

这个过程，你可能要拆机，要拿万用表、示波器、电烙铁，要靠经验去推测、去排除。这背后的主观能动性，和对整个系统的理解，目前来看AI还接不住。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafhflOdwI3ZqvKLcAwdP9qa2gZZC0dkmDV1NW3pFDJ0btWlDEZZgqjNs2tqmMOMUjpCH0Qo5SvVQy1x14VaOcCu7c6AOyLGTN4/640?wx_fmt=png&from=appmsg)

当然，有人会说，万一以后机器人也会拿示波器了呢？那确实，如果AI和机器人发展到能替掉硬件工程师的程度，那生产、工艺、测试、采购、layout基本也都保不住。真到那一天，可能就不是咱们一个岗位的事儿了。但我个人觉得，如果AI的诞生是为了取代人类，而不是帮人类干得更轻松，那这个方向本身就有问题。  

再往深了说，硬件的很多东西，AI现阶段根本摸不着。软件那边，AI可能自动生成代码，自己再修修改改，敲完就能跑。但硬件呢？电路板焊出来，纹波大了、辐射超标了、低温起不来了——这些问题AI怎么看？它连示波器探头往哪儿戳都不知道。咱们每天打交道的东西，是物理世界里的电压、电流、温度、干扰，这些东西不是靠查手册能解决的，得靠人去摸、去测、去试。

所以我觉得，AI目前还无法取代硬件工程师，这话说得保守了，应该说，离取代还差得远。

02

AI能帮你干活，但替不了你决策

想明白上面这点，我就不太焦虑了。但我也不反对用AI，恰恰相反，我觉得可以用得更聪明一点。

我举个简单的例子。比如调一个电源，纹波总是超标，你不知道是什么原因，可以问AI，然后尝试换电容、换电感，调频率，改PCB布局。顺着这几个方向查下去，总能找到了优化空间。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadU4VjnrtIBLiakfeuaCGnsXcykv90H0MS8lbpqeVTTWZH6CWHXU2cKRibSSqTalggDUHtEQItDwm56GFLRj8FHPCia5IFyDNWdia4/640?wx_fmt=png&from=appmsg)

这事儿AI替我们解决了吗？没有。示波器还是我们戳的，电容，电感还是我们换的。但它帮我们多提供了多个排查角度，让我们少走了一段弯路。

再比如，现在有些AI工具能帮你提PCB布局的参考意见；或者你做电源设计，它能根据你的输入输出要求，推荐几种拓扑结构，把优缺点、典型应用场景列出来。这些虽然不能直接替你干活，但能让你的决策更有依据。

说白了，AI在硬件这块儿，现在更像一个经验还不错的助手，不是能替你上手的老师傅。你问它一个具体问题，它能给你一些方向，但最后拍板的、动手的、背锅的，还是你。

那回到最开始的问题：到底往哪个方向钻，才不会被替代？

我的想法是，不用跟AI拼谁知道得多，而是要拼谁能用AI给的信息，做出更靠谱的决策。

比方说，AI给你推了三个电源方案，参数、成本、参考设计都列得清清楚楚。这时候你的活儿才开始。你得结合产品的使用场景、交付时间、供应链的稳定性、过去踩过的那些坑，来拍板定哪个。这个判断力，AI给不了，因为它没经历过你经历过的事。

03

小结

很多人问AI确实能得到答案，但得不到交流中的启发、经验碰撞和前人指路的顿悟。

这也是我做这个知识星球的初衷——硬件不能只靠闷头学，很多坑踩过才知道，经验聊过才记得住。在这里，工程师可以踏实交流，有问有答，有经验有困惑，大家一起聊。

所以回到开头：我不担心AI取代硬件工程师，因为那些你亲手调过的板子，亲手排过的故障，最后沉淀下来的判断力——这些东西，AI拿不走，也学不会。

推荐阅读（点击如下三个图片分别进入）

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadgz5Uib0QM8D1t82lhNZexQwnCLicxHxn6XzEXnBQyrAQUXzlT3QAQ31MeVbzQgDBtxBTVEriaI8R2XuZMRDN3aHk3YKbHlHOmxc/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247564533&idx=1&sn=92850623dc5c3d8699c1e8e9353ac3f7&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac3icNvgrdIj7Jt6tujfrDaYaa08Cf76Sfc75kAlkUjWWv4zvDqInicWAIiaAw8d9GlEXfkzoUOSw8dvibc7dXQ2VdiaUkIVbKhS4u0/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247563931&idx=1&sn=494fc25543fd98e80abbdcdc9c4d185c&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafGmDKD7N5kyjcXYaScicWgHlBhS2xh9FibtczSVC7eiaIeo85ORHiaxxuiaTJjXTOUZE3MP9vyiaMNa0ekzvBElnfm3OG6LXhCZ8DuI/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247561938&idx=1&sn=27ed46e1cad1149ba29c97fe13b12f6a&scene=21#wechat_redirect)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niactYpTtccxEI6K7Z5ibVx0unklic9MRgrbAniahvZCdKKdAzHMBib484wt8YLQ7k8wibc03DMUy53L5DGfrkvJRKPP18aPSxoSf647Y/640?wx_fmt=jpeg&from=appmsg)