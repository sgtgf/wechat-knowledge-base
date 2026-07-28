# 形影不离的好兄弟—X电容和Y电容

原创 硬件笔记本 2024-08-03 11:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/l9lZ4DlaPRf8RFcKxyUVVQ](https://mp.weixin.qq.com/s/l9lZ4DlaPRf8RFcKxyUVVQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

_**01**_

  

**前言**

  

只要是接有220V的电路板，一般都会看见安规电容的存在，黄色的是X电容，蓝色的是Y电容。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDeo107Fibu2URRJsGRTp4b0eZZ04us4wZuTUAib1WEIaMqWThqekSjvfA/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

X，Y电容一般在电路中用法如下  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2P0qE2tD7aN9ZeFMCyI8BkCRMowlVqibdqt5sqlu2FHTkRupqib0PBC8Eq5rzYpkT0gFyBt9TN2jw/640?wx_fmt=png&from=appmsg)

  

_**02**_

  

**什么是安规电容？**

  

逐字理解‘安规电容’（无非就是符合安全规定的电容）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDWG88kxwCHrjv7kK8am0cMvhdC8gic81eKS8g1v6dK4GWT4DEltqX6gw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

其中，安规电容可细分为X电容和Y电容

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDuP4rmwU1t8JMEJK92qmmBBWxkhdmI3UGLWqqMAZW0a7Fzae6CNPfkQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

电容有诸多种分类，X电容本质就是聚酯电容，Y电容本质就是瓷片电容

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDum3BxZpOB9Aib5TFvrEnguG5CCwbVAGv438lZicFYHbnEvLypDsjq7sA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

聚酯电容内部介质是聚酯

瓷片电容内部介质是瓷片

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFD2eLJKoKtkj0mgnYubKUibryOksTs6lJfrJgVIytic9gmaYk72q8Rbf8g/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

_**03**_

  

**安规电容有什么作用？**

  

安规电容的作用是滤除高频干扰（这些干扰可能来自雷电产生的干扰或插拔产生的干扰）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDMWDDPbNzO9zEm6OXQmgxbk9Aadex9TkM8A6hOcnX9zdBq4zhIvfZeg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

X电容是接在火线和零线之间

Y电容分别是接在火线和地线之间，零线和地线之间

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDfxz6Cic944lcf1E3Sf21shC6VOokWyTzNsMeWbLUHuPBqpicSAarV40A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

可以看出，X电容在电路中起到差模干扰的作用，而Y电容起到共模干扰的作用

先来看X电容，假如现在火线上出现了高频的干扰信号，此时的流向如图所示

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDYrSEibibOVBhZgFP01DUaGPuhhkW2nfc1icIWUdMHWg5Rg3GtkiaGqUPBA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

经过X电容之前，和之后的高频信号的幅度没变，但是相位相差180度

所谓‘差模’就是相位相差180度

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDFlrKoRJAYRudU1qs9qBvEuGFsaF36C468kKpjQGBw1fFPhgZmJOYEQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

再看Y电容，火线和零线上的高频信号的幅度和相位都是一样的（也就是同步）

所谓‘共模’就是幅度相位频率都一样

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDhibAeoadAccwVRWFdMdcfmYP9oEXetN1N3eEylTTOUibFDRzlW6f2ib0Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

由于火线和零线的干扰是一样的，此时X电容就不起作用

因为可以把地线看成零电位，又由于电势差的存在，所以可以在火线和地线之间连接电容，这样就可以把高频信号滤除掉，零线也是同样的

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDflrkKib6Eciayc1yNMq0RuH9ibWEd6bxV6uO7YXkic9LG34vweIuetf1cQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

_**04**_

  

**可以用其它电容代替安规电容吗？**

  

> 答案是不可以的，因为其它电容有正负之分，接反的话，可想而知，而安规电容没有正负之分

另外X电容不能替代Y电容，因为Y电容的耐压值比X电容大

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhxYrBwyYFIkaPibPHP6DnFDxoteswFAEeCwX0pQJGYETAtCiaxWgQ09n3lbFOhH9oHnX74pp5E2ylg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

_**05**_

  

**总结**

X电容用于滤除差模干扰

Y电容用于滤除共模干扰

X电容比Y电容容值大，但耐压值比Y电容小

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。