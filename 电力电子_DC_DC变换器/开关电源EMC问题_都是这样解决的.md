# 开关电源EMC问题，都是这样解决的

原创 王工 硬件笔记本 2024-12-13 09:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/oiGb8cbAYU2YJaG1xS-Xdw](https://mp.weixin.qq.com/s/oiGb8cbAYU2YJaG1xS-Xdw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

大家好，我是王工。

我相信一句话：一个人可以走得很快，一群人才可以走得很远。感谢技术群里的小伙伴经常有技术交流，我也学到很多。

前段时间技术群里一个兄弟的开关电源EMC整改遇到点问题，大家献计献策，也分享了很多资料，其中一个小伙伴分享的开关电源EMC资料，令大家都不由得竖起大拇指。我简单看了一下，图文并茂，不得不感叹，资料还是大厂做的好。

通过该资料，再结合自己的经历得出：开关电源的EMC问题，最后都是这样解决的：

1、更改输入滤波X电容；  

2、更改输入滤波Y电容；  

3、更改输入共模电感；  

4、更改变压器，增加屏蔽绕组；  

5、更改电感材料。

6、更改MOS驱动参数。

7、改板（尽量不改，定位问题也挺麻烦的）

如有遗漏，欢迎补充！

  

再回到这份资料，它来自英诺赛科innoscience，这里简单介绍，顺便帮他们宣传一下：

英诺赛科（Innoscience），成立于2015年，旨在打造全球最大的采用全产业链模式，集设计、研发、生产和销售为一体氮化镓（GaN ）的生产基地。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOey3vxuxKKOcYfk9R18bMIp0OcNw3bwibZH58BM8GtMiaU8BZFlegzQzw/640?wx_fmt=png)

我下载了他们的源文件，共26页PDF，大家可以加我微信woniu26a（或扫文末二维码）获取。也可以直接在他们官网去下载。

以下是PDF文档的全部内容：![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOzANpvzDrKE0sxibp0PNLflgRrD7B6aVTGOZ5ndSK1CREpAYkibEroeYQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOiaz2y7JtdqdE4biaSrZqXAcsVMlNQoNHEPrU3uiaPpgBhEhHLHCZ0yib3g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOGxIAuKp7R4j566Ab3VlkWPKudPaFWmHg9GRqWdKNrD9YAn9znsvV0Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOTLSibaWLNeTStI0ibvvicR5eibs1Jj9Up7aXB3plUvt5HHnLGmUbLhfI1w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOR6NdRAXhiaU4Miam4mBDiauO9QicTccJqJxRHrrVW3GXBiaBiaavvKSehYwg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOvj8056x3mnnOsGJ9guWktWwJg32LL1y1MiaeViccaAD712IGxEeBuFZA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOHmiaoZMHE67yn2fAlia74MZ5PzicVG8Ne6nsgiaAyLQKbIzIUkBauicX8Ug/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOjlfAibvicDmSTNVwnwEwQlmL7I49wUwDIqU76FaYabMu5dxmUg63jXYQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibO0oYBJEibZNFefIJShY0HLJolE1DJIZ0FIVU8N5n2HoH302ceR7gLAcQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOaDNqj4UiaWGOq8eGv6A8cZszKAjzr8k2vBF0xNYHg5I4ohH2C533R9Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOWzcp9k6WBznJBNLg1WynQdWFU5806Cib8OJttwnr7hduamK9GiccnYjA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOBPIV1RDVtyGJ2jgJGvKxlOQzgJ4N3Tnt1ytF7m1NMOX3EXwWKF6RUQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibO7coOrFW5NfCLhiaFicyph6GIEsCO1WGs0MVUL9dIHpZ73LllM4Sjl8PA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibO7Pp2MaINfyYYiam3Fgn1uFia2DUQgu2UFhyX7avhYsEyia5icwYKmOjqfQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOw4IhmocpaSLNhN2j1cZ5OYsuRAcalrPRzTP3tEQLLOmZib0vSljGk1A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOh6qct88ibgRR4Ef7mO61cDDs6nH0E1W6hMTG16uCyjCgngKLc4ZiaLhg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOeicvpCYeNhWEA49BpiaZEquRTCdSXFPMs120Tq7rWesicXWeajoNlqH1g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOLGreb27I2khqiccicLEjahXhZ0kytnWgnJgqWYTPiblPsibMovzYtiaP6TQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibO0pQPjC0RiaW2bAbMwrQyQq1sgEfs3g9DibRx8SiaWshuCeheib4anQLtVg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibO7PZM7xMXbDoTy2vicDQQpRtByAm6jWpxPEt9Ig7I47g2tDeGRnDhxUg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOuLcHibceRwhmibwGWRIt2lkWwEHlDdeJnOMamhJpq8HS1Ky7UBS2UNbA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibO3yYGvDxicMYIYmvkR2qGEib9nDnT9P0gXicGYNg2Q8DAm6aibxohqBMqrg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjNVdebR5yx3daP7wzAXwibOrU007yTY26vmPVUB12iaOJuicKegqsmphhux8rSChGZXNAws3mEgV17w/640?wx_fmt=png)

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpQvHwjHHqyVg59KzponKUXpOg5ynXzOHs40lCXUaWtovFsNlZm4MgicA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjp9yy0z2QDvC7iaeHMB8Plb72fjzFv31icQfEKicFLricceMych76njNhNG0hjLDic7xB2vBr1mf0hTBA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)](https://mp.weixin.qq.com/s?__biz=MzkwMzI4MTA4NA==&mid=2247498828&idx=1&sn=e91fc5514f5fb14ed26a6ba65a0dd795&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文字原创，PDF来自英诺赛科。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)