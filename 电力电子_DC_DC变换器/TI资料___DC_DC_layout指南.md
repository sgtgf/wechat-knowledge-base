# TI资料 | DC/DC layout指南

原创 硬件笔记本 2024-08-05 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/EK4gNGS-55oKUfTJjGhgzw](https://mp.weixin.qq.com/s/EK4gNGS-55oKUfTJjGhgzw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6ibLe5gow156RUpkicpRFubZ634LTu58D8a269ZP8XK5bbdqT6JddY3WA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6VaxL9ZpaibqGsmbWdOrLCsDECp4cGBLS3Ye5XkDfrWonIpGKK4tOCNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6T83ic5IJB1cOP5icBU0GyYppgCPeAVho1OstjYL9SR0q09exyPGyuBqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK603flw8IgH31ew4EgCThv3G5ojyiatujiaZl8G53VS0w9GYQfsCG4v0dg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6yIJR9VrN92PcibYhxOWVicp5rNalnJC0eZbr8SCf6HboPDpD7ic9ZzBvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6uGQwreP4tEy3NZRzJbYA24lLKciaWnFgw85CxQIfbibcQpxiaVo8ibaZxg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6W6IyGCiaFhWwicwlPZ9kv0NL8dFuibt5iaXFiaRFqO2h5iclT55ewfLqJhBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6w6Yd5xicNCKq89E5j0pXpBfiaIqiaow01P8HOJIkp11tEX44SSuJ8MdIA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6ZW3SyE3wUl1LvTiaEyMOqdYrbEZGE6rcANu2kicbghdNsXbibdwXWFcew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6UZlLBPZvhudxQzgKnb4A9mcG7tNctNicvh4ue8Puice2x7IrZKkup4Sg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6tJ7iblrv7mN7DibIiaO1XJictUM2Om87nqKwbSfRicXeBwDMKoiciat6Wa9rg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6sBLxuq6oO61N3ia3JtutIIuibaF21BtXPtcI15bSNoiaWsAibs1KWp41iag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6MiczYR9YfnvobLwPbKic2bZw1UzOC4wibVrC6hicJwWfeHQGib4hNlngkkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6E8wVic93aGCjlV7ASbibfH0dv1liasib2iaoGNzJw7AcjJOgTmkNpV6S5bg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6wDxQd6rUD9rwJ0UpCcNO84CYJh9w5gUjewJNaL4p3P72PiaRWPFU66Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK60skwNsO4cB2zkUbN3XwrSBJDBhBEyen3eMaV0jiaCmfCAXnnNP8Y4KQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK695hefH24xAR8sRjTSwSVRPCDqFicYyxccNibjQD8W5mqbrmJemPZk8fA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK65hPSBPfyWFqKLxib9AgAZrs5rkgulzjd4nqiclbWm0ickYHvBX8KygZGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6kHks0bPcnWZVuVDP7F52Fp944pjuUick98CTbl5WnMxFVPv0eW1U7Sg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6U63Tpd1a9qQP1GRI4tTklHKrOnrb0fU2Qd0txafmUpAMMwF35ibQJ5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6UIXwiaLnLIlIsuIf9zqbw0icbIV1urT2sm37qiaVcd9TgTBR1oF6zrkuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6Fq6ZScRZSnicicrZD5OzRriatbxVUr2iafaABtBNTswTk8BvQP8FJ9cdUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6d2v1etB897dicBj8LK6XhefhKibmXsclbBUqia6EATEDTasc991ic6BoGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6EXibeY2sZ9xTX3IGtRI4eQlFpw4eguqPDZt4ibQMx6Mygia2rNQuUibGNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6n7FDaxgAMfYUZl4NBOvM4Qu8PqtCIPSW8RLfgAMfoXOicH5MRwOAjNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6ACdDzfDBCmQbHL0U6RFyCtw67Lb032tkFUDscRmDHYHbyO1USLCVoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6YLDjHUDRcDgYyWGqV81fe2diarujqPFQFjOVa96KqBh7rVeF0YFDypw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6Nma6eZWZ6dTVwwDLgwNJpwLuBeJQmgeEm6UG9nGlIZ6vR6sPsibHibEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6ATicA8tpLS8icn6I0weYpEQhFXubRlhqPmBru338NuzgibOcv0EicSJRXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6icctECpAePahVIBWVtOvpmicI6YmvFzLg6qFEReotiajxqMZtco6h1E7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK65UfLOA5ic27ggMeMpU24RcVS4oqibEuYlyZ9icdiciaDLxicVoibV8n0xEvYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6g7KfufmHRVDKqG9DluDeem3EwqdO3p5BzYcD8VuRYM0qUN3TNFuxGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6jf8iaXeU4EFmkKbWGnicma6vsibdlJQ4TUA2UTzxcCse5ibLmPWGgR3yPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiatb5YUibDhzPn7jExyftqK6ticpE5RibuxOH2tupF7jsicMB1rD7pqk6ANTshTgFic0YjYrTpXhQftrhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。