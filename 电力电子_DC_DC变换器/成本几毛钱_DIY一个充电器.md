# 成本几毛钱，DIY一个充电器

原创 硬件笔记本 2023-04-22 08:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/ET5G9A-rwwux7Ak8fdb0Og](https://mp.weixin.qq.com/s/ET5G9A-rwwux7Ak8fdb0Og)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

所有的元件都是从淘宝买的，淘宝特价版APP大家都知道，买这些小玩意很合适。  

东西都在这，电池盒和4056充电板都是实付几分钱，AD4056ES是很久以前单独买的，两毛几一个，0603的122电阻也是库存，单个成本连一分钱都没有，所有东西成本加在一起就几毛钱而已。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWc7ic47jp8hHf4ibZtPq0HfYpuI1p8rJAuZwkKemrfLUv4AfqQFuvic2a7A/640?wx_fmt=png)

带针脚的单槽18650电池槽

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcfAk7GmFrHKJ5qyJ5vSzodcJd5e8fpLYbUwadYBu7Ngg4clJLwNeeAw/640?wx_fmt=png)

外壳厚实耐用，弹片也够劲，保证和电池的接触良好

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcJicR6riaTXU5IYZyibmszMFJfcL2NS68ribOf5icH51hbcyIsZOstWtOicIQ/640?wx_fmt=png)

4056充电板，杂牌的IC

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcUwwfmxxCib2kseKTiaorJZibicUM5SpBzOJOMDIRZSImSsciaEHpcDJdaRQ/640?wx_fmt=png)

准备换成AD4056ES，优点两个，截止精准离散小、防反接不烧IC。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcxAQrWeb69tibkcVVwTNGibEUu9dY0tP0THH9HlrIiawsOwaIXB7mmB0YA/640?wx_fmt=png)

PTC加热台，准备换芯

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcjEHKPohau86gwO41p1lMyBJib1EC8icFWxzPic5qZcKOEiaTI4rXCCVChA/640?wx_fmt=png)

看不上原来的4056E，先换一个4056ES

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWc2yexEu5EuNc67nJZwStibjuBZvL3qbWAibiar2YYOeK5euDOALA1rx5xQ/640?wx_fmt=png)

第二个4056ES需要处理一下引脚，

2、6、7脚保持原样不动；

1、3、4、5、8往下掰下去，准备和前面的4056ES焊接在一起

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcZ9U3tclxsXa9pZ5wOXBCiac8wT157ia8tIJRoGMHXSKsZYYicF7sEDsXA/640?wx_fmt=png)

预涂一点硅脂有利于堆叠之后的散热

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcpsgL6ia5uxFSrN3sYWhgV6qhJ1QjDQ7cgkLvAKN21au80IHRvhOuZfw/640?wx_fmt=png)

焊锡用的0.3mm的，方便控制引脚上锡的锡量

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcad7DVTGg90FWbHyibD81f9e3cib4P4mddLo4pc70ia3KUk4GUOic8JHAtA/640?wx_fmt=png)

堆叠焊好了，每个引脚焊锡尽量多一点，有利于过流

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcuO9ib112L2XiabaznBW61CHvycw2T8jfS6Iup56SibmVhx4PwMV3OzI2A/640?wx_fmt=png)

另一面引脚的焊接

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcaqDy4FdmHxDxw5dRWbbroYooiavicKUqlRSnDN5OwYPxzJWuL7Qm2SHA/640?wx_fmt=png)

然后把122电阻焊接在2、3脚上，焊接是个细活，不能着急。122电阻是4056用于控制输出电流的大小，1A输出。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcrXvwCtd5JgmREictJV7vTNicbmDJNg3m2HlO1Fm51Qk1egt7Sqhp5mlA/640?wx_fmt=png)

电池槽引脚掰弯然后上锡备用

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcZ7tx7ekHBcLdtKlFqA0pUKHbL9hLM4PYdGBgsPNSajpHK3421gOJgQ/640?wx_fmt=png)

焊接导线

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcWTfwyWSX0fGibGtaI0yTJnoNic111LW5qn16lyjibfxBra3m1ficQ2Ozog/640?wx_fmt=png)

导线和4056焊接起来

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcxm0c5tZrVhbQE3hmkFzGUv3JIJqa9REwqyoajZqxuG9bkahyXCIUUw/640?wx_fmt=png)

套上热缩管做绝缘

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcgn89KIAOLUHWjhdk7kQ0HIY7UUAU8HfnbJpHiav0uaTtlOvCEU19KIg/640?wx_fmt=png)

热风枪收缩完成的样子

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcHU5W8BUoDg4UaTSXvnQTBCJf97fCCoG1LTxvCf7ibpKdR6IejQaDYgA/640?wx_fmt=png)

把4056板子和电池槽粘在一起，还是硅酮导热胶比较好，耐热且有韧性。AB胶、热熔胶、结构胶都不耐热，不合适用在这里。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcvJ0EktmKXgsQ5xoEmXGeXQqGA8xqawTAuNVzLAsCJ4jZRVe7HmNiatA/640?wx_fmt=png)

端面预涂一下

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcvpcTmKTo9Cb4bwb7hBqlWtbcxT2QkPmdHfPrO8O83WKMiauErxIcZKQ/640?wx_fmt=png)

然后燕尾夹夹住，等一天的时间

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcwYVh718BU8FeVWQXTnZlW6iamtSicq5GzZcmULeIYu3oPfpn4pQicickVA/640?wx_fmt=png)

然后，喀嚓一声，一天过去了，板子和电池槽结合良好

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcUuUjDLib2m4B2AxRmDbAjPiajSDINM98mNn71ntvMKQ1aSwCqyx8ZNjg/640?wx_fmt=png)

D超粘的双面泡沫胶带

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWc5b3icLGmlTkvuicUbDXgXG6T5Qvtm6tbx7Uhgn3yobhHbN8iawtK6XBWg/640?wx_fmt=png)

在电池槽底部做填充

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcRzZAMQvFRgXmWfhJa5IUkk6J4S39KuhvHdtzkaEE6jXjLzyk894icLQ/640?wx_fmt=png)

再找个硬纸卡，裁个底板

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcbFx0pF6xmnWHUn4ZzA48UWPum0MHNQctzTbk8QZSGT7WR2AIgjU6qQ/640?wx_fmt=png)

粘好底板，再用电工胶带做个围裙

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWc07Nrl0oZSka66jxyBziceeVszNh7wdMDiaiavRbicGqHz8L817SgY0XcBg/640?wx_fmt=png)

围裙做好了

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcOlT2Us9Dg0zF2YxANruibaUB5b7bSAOpMd9RXtdN1Dgz8Imw6qUB9vQ/640?wx_fmt=png)

用刻刀把4056上面的热缩管都慢慢切掉，以利于散热

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcwiaqgTwuqJkgJRHLCiap2Ka8iaxCTjEoBAibjJRE77cZL35nsjuUsm7Rug/640?wx_fmt=png)

准备充电，电池是2000mAh的18650

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWclLVQ5kTs9zOfVSJesibfhduwr5cGYLwNZU6atjUs5ULjBzn7ANGbZ6A/640?wx_fmt=png)

开始充电时，充电头输出的电流

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcJ2nxus1fOezgzQDJ5dLzjoyMdzibTKdF1KB6hlwYfRWsSgMQxjbJBlg/640?wx_fmt=png)

然后就是等

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcPkTmnywyB0SvuXSpKmnHqqjAN6DrfC55nTiaibbtoWg7kCFT4qIIX5gA/640?wx_fmt=png)

转灯了，这是充好了吗？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcqiaMpjtTqJCLCPoPeawOicTGh2Hibo2jia6maTWicahbf84U8rZAWDToBUw/640?wx_fmt=png)

实际并没有充好，两片4056ES当中有一片输出电流降低到阈值后会截止并触发led，另一片没达到阈值还是会继续给电池充电

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcZqfiaFIlHeNNFibfKTUEVrIxzefibMMBOazmZDxbgL0XW3gclspPWWEaw/640?wx_fmt=png)

两片4056ES都截止了，充电头才会真正的停下来。

充电过程中，电流从2A下降到1A，大概用了45分钟左右，然后从1A到双路都截止，大概用了75分钟，2000mAh的电池，整个充电过程耗时2小时左右

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaoSXC8F8icazLh86zY01xWcLabIH2lXuEpN3APphH2CC6vjgfXjMrzrDqjn3Vev9hVKVjI2BUcI6w/640?wx_fmt=png)

### 文末小结一下：

优点：取材容易，价格便宜，制作容易，好用

缺点：芯片堆叠确实热，好在4056内部有温度控制，极端过热的情况下会自动降低输出电流以保护芯片。

## 

**声明：**

  

声明：来源数码之家。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。