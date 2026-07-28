# 急死了 !!! EMC摸底测试通过，但认证时就是过不了

原创 王工 硬件笔记本 2024-12-24 10:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/wy1M0JdFaIkOKU-xZeJT4w](https://mp.weixin.qq.com/s/wy1M0JdFaIkOKU-xZeJT4w)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

  

大家好，我是王工。

  

EMC摸底测试通过，但认证时就是过不了，这是群里的兄弟最近讨论的话题，也是一个比较棘手的问题，我相信大部分人都有遇到过，让人很是头疼。

  

我们的产品在正式送到实验室认证之前，大多都会自己去公司附近的实验室摸底测试（这时候那些有暗室的土豪公司，就很让人羡慕）。然后正式认证的话，可能是在另一个地方，比如我在成都，但我们正式认证都会在广东深圳，东莞或其它地方，因为那边实验多，价格会相对便宜。

摸底看似花了更多时间，实则是在节约时间和金钱，也是为了快速取证。你想啊，样机做好直接送到实验，有问题就会很麻烦，这个我们自己也是吃了很多亏。

如果产品没有问题，直接寄到实验室也会放心一些。若是有问题，也可以就近解决。（顺便提一下，我们一般RE做的比较多，也最复杂，我这里所说的摸底指的是RE摸底）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaicggZpoibEEuYLQnOr54m0k85gkM24rTiausjDLHvNQ4s2STAfUePPC94YZraaB9o6IPCicNficH1hQ/640?wx_fmt=png&from=appmsg)

当我们RE摸底整改没有问题后，就会直接把样机寄到认证机构，以为认证机构也能一把过，但很多时候都被打脸了，这时候怎么办呢？

**情况1：****对比认证实验室波形和摸底测试波形，如果波形趋势差异不大，只是原来比较高的某个点或者某个频率区间的波形偏高，那么大概率是产品本身发出来的。**

这种情况，王工建议最好的解决办法就是在摸底的时候，尽可能多留些余量，一般**5dB左右**，因为不同的实验室测试本身都会有一些差异，如果在某个实验室刚好顶线或者余量很少，那么换个地方大概率就过不了。

**情况2：**如果跟摸底测试波形差异太大，大概率是其它原因，需要仔细查找。

2.1、RE不过可能跟陪测品有关，比如我们想测试某个主板，这个主板有HDMI、DP、RJ45、以太网、USB，WIFI，蓝牙等接口或信号，那么在测试时就需要其它陪测品配合进行测试。**这些陪测品都有可能是干扰源，包括连接线****。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgiaicggZpoibEEuYLQnOr54m0LqVDr1yUw7ghibiabqSfGTERzib359LBBMU7TYOAMXdYxNp6ibIibTPlNoQ/640?wx_fmt=png&from=appmsg)

记得有两次这样的情况，明明我们自己摸底OK，但实验室始终不对，最后发现是实验室提供的**适配器**和**HDMI线**有问题。

之前在实验室摸底的时候，我见过有一家公司，确实整改不过，公司也舍不得花钱请技术大咖或EMC整改实验室来解决，用了一个笨办法：准备了5台样机（假设哈，具体忘记了），挑出效果比较好的几台拿出去做认证，可能这也是没办法中的办法了吧。

我觉得最好的办法就是把测试通过的一整套设备，EUT+陪测设备全部寄给实验室，然后拍照，让实验室尽可能的复制摸底测试场景，这样的话，出问题的概率明显会降低很多。

关于EMC整改不对称问题，大家还有更好的办法吗？

**写在最后**

  

都说硬件工程师越老越吃香，这句话告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

  

[![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjp9yy0z2QDvC7iaeHMB8Plb72fjzFv31icQfEKicFLricceMych76njNhNG0hjLDic7xB2vBr1mf0hTBA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=MzkwMzI4MTA4NA==&mid=2247498828&idx=1&sn=e91fc5514f5fb14ed26a6ba65a0dd795&scene=21#wechat_redirect)

  

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)