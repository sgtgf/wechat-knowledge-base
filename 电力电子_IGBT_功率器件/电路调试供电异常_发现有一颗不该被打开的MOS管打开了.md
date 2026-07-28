# 电路调试供电异常，发现有一颗不该被打开的MOS管打开了

原创 王工 硬件笔记本 2024-12-02 11:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/lpAUQ7k7IGF\_VE7GD9KqDg](https://mp.weixin.qq.com/s/lpAUQ7k7IGF_VE7GD9KqDg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

大家好，我是王工。

最近有个项目，板子回来调试时，电路供电异常，排查问题后才发现有个不该被打开的MOS管突然打开了。因为这个电路功能做了兼容，全部讲可能有点麻烦，也不是本文的重点，所以为了看起来更直观，我简化了电路图。

  

请看下图，问大家一个问题，大家觉得图中的MOS管能打开吗？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOcKkicq4cDJ4fxgcxSQ38X5sZGfRZW8CmuVjjSLruH4jgL83FbJ7msog/640?wx_fmt=png&from=appmsg)

我相信很多人都会回答，这管子肯定无法打开，因为二极管具有单向导电性，可实际上MOS管是打开的了，那它是怎么开的呢？  

  

我们先来看MOS管的规格书，可知MOS管的Vgs（th）=0.5V（min），也就是栅极提供0.5V的电压时，MOS管就会导通。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOJr0ZB499iaQA8ATGTcEWjicicAlxoEQXsialr96L3xfLBJUkCsJjYXUSVQ/640?wx_fmt=png&from=appmsg)

  

实测VGS电压有0.7V左右的样子，大于Vgs（th），所以管子确认是打开了的，跟设计需求冲突了，电路异常了。

  

那么MOS管是怎么开启的呢？电流只能通过A点进去，也就是电流通过二极管反向漏过去了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibONCicFQtF7SBMYdDTjfiaOib9kZ4cxfIictzqqPKkfqy3k1psdxkC96L8hg/640?wx_fmt=png&from=appmsg)

再看二极管漏电流参数，A点我们提供的是12V电压，图中VR=10V时，漏电流范围为20~80uA。二极管的漏电流在电阻R2上产生了0.7V左右的电压。

所以这个问题就出在了二极管的漏电流上，在设计时忽略了二极管的漏电流。可通过更换阈值电压更高的MOS管，或者更换漏电流更小的二极管，确保漏电流不足以开启该MOS管来解决。

大家可能会注意到二极管规格书左上角备注有25℃，也就是列表中的参数都是在环境温度为25℃的条件下测试的，如果环境温度升高，MOS管的漏电流将会变的更大。

  

尤其是肖特基二极管更要注意，虽然它的反向恢复时间更快，但漏电流比普通二极管都更大。因为肖特基二极管是基于金属与半导体之间的接触势垒，这种结构导致其漏电流相对较高，这是由于其金属-半导体结的特性决定的‌。在一些精密测量的场合需要格外注意，不能忽视。

  

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpQvHwjHHqyVg59KzponKUXpOg5ynXzOHs40lCXUaWtovFsNlZm4MgicA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

\-END-

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWnSKI4kn4UmCxsTKOu0z4z3urajxpwe0tUDqkpLrz1mPVkMVL3OpCU4nfwdbeQ5T9SbS4QT5cJA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)