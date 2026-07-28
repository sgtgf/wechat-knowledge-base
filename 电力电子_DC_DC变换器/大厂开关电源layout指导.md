# 大厂开关电源layout指导

原创 王工 硬件笔记本 2025-05-08 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/sFPi5uIrGmxlDQ1ShPju5g](https://mp.weixin.qq.com/s/sFPi5uIrGmxlDQ1ShPju5g)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic "音符")

  

大家好，我是王工。

今天和大家分享一下Innoscience的GaN Layout设计指导手册中的关键要点。虽然手册主要针对GaN器件，但其中的设计思路和优化方法同样适用于我们常见的开关电源设计。  

在实际工程应用中，良好的PCB布局设计对系统性能至关重要。为了充分发挥功率器件的开关特性，同时避免各种干扰因素，我们需要特别关注layout设计，尤其是如何减小回路中的寄生效应。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgeKRicCiciakG9G8GfK5Tt1qgibgz9NbiahB6lHibWR0sgISJicx8DTUdWQayJibjq79wh1uOENjPibXKPTRQ/640?wx_fmt=png&from=appmsg)

在layout设计中，有三个关键因素会直接影响电源的工作性能：

1.  共源电感设计
    
2.  驱动回路优化
    
3.  功率回路布局
    

如何有效减小这三部分的寄生电感，是我们layout设计的重中之重。此外，还有一些容易被忽视但同样重要的细节需要关注：

-   PCB层间铜皮形成的寄生电容
    
-   开关器件漏极和源极铜皮产生的等效Coss
    
-   漏极和栅极铜皮形成的等效Crss
    
-   栅极和源极铜皮形成的等效Ciss
    

这些寄生参数不仅会增加额外的开关损耗，降低系统效率，在高压硬开关应用中还可能带来安全隐患。因此，在layout设计时，我们都应该尽可能减小甚至消除这些不利影响。

以下是InnoGaN Layout设计指导

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgF0u4xn1Phf2mxmm1goxiaGScDQZ1puJNoz3NHmZxXOwpLWD0kiaaXfKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgj2JH1NPgyDJfApAXe517Ae7v5tUULsyDRMpLCU1ibedWrYRw1wfF3nw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgjnuLicyjSQXkATY1Hib7JEfUPVBicLvWkbaerszFFBYY68uCrgqomiausA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgyvNTcPM0zniaiaBsUSwEY5z6CqB80m328jjwkyqmGsXdWqWRvIVBpNgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgpUugQG7kBYd9kk25n751ue4AXibibnflgdRkUOMfhAGxRg2c8YYVEiaIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgWEBp9NDBUx9ICxI8Z4hcWqaK7NXKV2dP8AEGqUyOqYzEv5kxkp8UrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgfSpXXAxZHGaXzH2iclcfdyIxs6T5VticB8KnnNgm8uMMqIxrjE5LZ3Bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgk4SqpsErWwsiaWCX7iasSfZvSjgFjIQFjFdfWDeUASMdry8Rsx8dLIpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgDgiaKVXluNmAEJvjoFC25icn9LffcwweiaaDmMibRJRpHZX9ibseC6VSU6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgub8jaO14eZc8wibouyK9pEkNBeWdx0DtsD6bIOib6XWiab7UVQPician7xQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgdsZlMicVdLhxkaEbfTTticVicsQShYAz04X89JT6LbNkINMibNsdiavjBOw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsggmzOP2ZZb7BvcGTt7pgs8oLdeQlDlk8BdbtgrRn0YZoib2uySAozIWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgAY8cXxAx2pcKAjibBjDW9GYvv3yefPCHtkOFbbMlhontLuy2KSpB2Eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgaasqchdAjRghKQdJrhcSGUvuUsXY6EAHGbTuWRK9zoRnNBQRj2scRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgoSAJ4TU6O1QGmiaibPe0LLyaeJEfw1fZHibl7uwF8zUYg34OxgIzoPd4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsggQXx1MxtEWpnPLNEd1NN42OQialQFEExRW1E07IQZJibCWO6XicVuAGzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsghJ5kKVyzPMQ8FDQGBu0iazeqdYp3g32Gfuk1OXgKoicU9xU6Ivh7uPtw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgBXXKn8j2f9LnuicuTX2ibkbibBx3aLJNJzDc0iadiazGBibA5LLsclUfib85w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsg9EEILKibpYN2EtPBGtibyKPVZIcyyqVXD6Em9ibu7HEJvZJk1icM3Hd1eA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgXYuXobt9aoHpGQxicW4hfE8MuP1SmOgicRI0yIicerTlPT9Q68kgEpaKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgEf82CPC9Au55B3B7gnwMX0X66Imlme7kHjPyMNTdvPdkDnuCEgekYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgTHVh5yH5HEuwVBicO1gTp9GGs9QUQU8NY0eWvICdDGsWcLCw9q9S4lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgU6ibktWajSuRMtkVcugXGHe7qiaqAyLhOwXqYicdfYAPBPDE4jo92PdeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgccsrSDSIMNLFjnuBFQM8vsp5cia0sgJDuQlrbtwyPuYIS7FpgcCjPaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgCk9r1vXGFmSEHnMdZicSXMIRBx0mLqSQPOUISDYYuytpYytRHX4J48Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsghibJJbyp4b3LYNnibkrOibVrPMzMu9d8FC6gRZPvZ9mKNVcncnXJEwYYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgApA92Qib4ax4y1SbqxqztSUk2iamgjaAnABWicX1NvxbiclicfbxdpyA2rQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgAFosicsUvaiatYQbLu7JUKEic5Ug35JbDJgOXZcy7KkZTNNic7O5WOrUpQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsg9yhU2PVSicmiceGnfjZ4gOUD3YqHjZRkCgoPKLHKUvg027sibwdKib4gew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgZRajWxMzctzv93HPGZkYHgT6DUial8DTMIeCgScdrLt8UZtlvDXVjjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhCV1p3BbWicJw2PabpeEgsgwQL2ho6eJRDnT9fuIDVfe4GLTMMTz3icgOlibm4F0qVbalEktiaL3hRSw/640?wx_fmt=png&from=appmsg)

PDF来源英诺赛科，感兴趣的朋友可以查看他们的官网。

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgzfuoN0611riacBaXWMz1bf4VhibuwTs50lL1Ciblge3EhmVfonwqsN2GezDxt6zkrUfQ910APuKiaxA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文字原创，PDF来源英诺赛科。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)