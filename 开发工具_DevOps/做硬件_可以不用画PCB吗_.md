# 做硬件，可以不用画PCB吗？

原创 王工 硬件笔记本 2024-10-09 11:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/K6g\_nqHsvYkUWAaGkWW4BA](https://mp.weixin.qq.com/s/K6g_nqHsvYkUWAaGkWW4BA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。

之前有同学问，做硬件可以不用画PCB吗？感觉PCB这个工作很无聊，一天从早到晚都是对着电脑，感觉眼睛都快废掉了，干了几个月快干不下去了。

其实啊，PCB layout是硬件的一部分。如果你是PCB工程师，但是想要转去做硬件，学更多技能，除了画好PCB，你可以多关注一下原理图为什么要这样设计，以及EMI注意事项，争取一板成功，缩短项目周期。

以下分享一些layout检查规则：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AcmHoAiapmia4CFmbzpskUJWom1ibsnnibHZ7GDERktzPWdV56Vdz11PByw/640?wx_fmt=png&from=appmsg&wxfrom=13)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AueicibSLrr2Jl5PzJPrPia2uxANcicjrUCtnmQ7WzG3hyQ8Oaicz6b4iawlg/640?wx_fmt=png&from=appmsg&wxfrom=13)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AdSRIfMJh7D54xe01PGh8ic4N1GX9qz2ibTtW1BnwSXvpKd4qtzUhOXBQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AVoYW2zRIyQtNice3H8eZOOD6rhic9E3jE8JnB8BX5ZWfmb2Eb60e49dw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AbOv32y93X4ic69wrcaXIDWxMHGa3uhpG5Owkg0EMYgbVnxkJY5rCm5w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AJUye9Chmng3XbAJBqDQCu9EQv8nlctTLcjcftgovDNgtrziacpw686g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AyvPtTtPtEXfAiaqQHGHK8p78H7GN06KIfmkicCZ0nWUl5kGE6I5QkChg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AEnUrdnsoDRLhkiaVaQ1PAib8zkLKdkicJQ2CiaV3ddnHOibBQI70zrLvk8Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9Aw7xjekGlJdewA9DMMJFk707iaSGxKdlQNZCQQq9mKmopicOKqiamlibnWQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AyT30doLMvM7f4MxGmlYqPgMFo5qFBRDqXlJsMP4ibFmCZDaYstFQKOQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AA2MRNItv7eHg1sIianPzrwxX2iavQhy9f3KcpwH4LrB1I1CtASuN51Iw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AXia4nXc5kqqFHcibVOFuMHDMlA7yjpsZIr4OyPkuouJAHH1V1sZmuQIA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AU79emUgHhLbKdR0xQJTh8qEU89LBnqhELTkoicRyaAic8ch34Q2jcgPA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9A3dPnKe4HtP887tfZiaw1PWF7O0prBdmDYz58LCqeZtcicB8M7Ulpxp7g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AqFXUXm64laEhOeiaoA4ZFzPVn9KfYDCe3NKnCV5R5u0VicvlrrtwtDkQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AbtQMLFiaERVoxNAX6ktQk90miaDq4KiaV5qb7DicUYFSno81FRDCwYkp1w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9Aib5lS3twkMibdA98MJBpgw7jFBlVDcqtDfFoaiaZ9zibk3Riaa8a5iasmtSg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AjrbZribwlTCEqWh2XolJQDEMozgBVAOyt9L81Ohbv7icrLqm72w4lFPQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9Aib6O5d37MibOrlCec7mmgwJB0BpQ3zBTfH3ZKWmvy9ibz1ia29W1U2yURw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AribrbodjnvWzYpJpDFDdp8BeHLWBL0kg52lCngGFmN7ToXenKPcY8kw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9ATfheUFV7kuqZtvfx9lT3BzHj0GKwwsNkABN7ib1ic7h3o9sWvoV0rvVg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AYz6bUhop2WeMtvnaA1oBdyugicv30YLkmLhKTlwTDJGdbg3Gguk15Ug/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9A2V03HM49UWwqQRxAD1smVjF0GpI3HBicWDXRR77ttibGnB9zMJ0ibVtVw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AneU56Qnu7o3QFAX12SkjZkzkaw9ddEq0RTa2F1iaLcnQZsmZpcFWrKA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9A9huZ7Y8mubqcx0yp9Sy0xRAV0doUBvRCc5U8c0a3rucGuWaEyOA3HQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AFk63CzMyXeyuLibJFwib5YOmsA5oPmGzia5iaNjpVIr0lhiaGKqlHytqLFQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AhCTg2zkGkFEqgK0Em3w01icicpueJExDgqEmr2437G65OkUM4N5IgWMw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AcVtORjo2CTfLCiawWCnaw7kprezHej1Q1r5bNFFPEUJiavBpaXamicPAA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AvMZs3SHYYdq4tKohzWjgE9ZVYwN3c4xwTPyTfa5srTaJSyG7tjgPEg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AjVojibj4sxCDgCKoYsnnB6pYMKKNeIr4QtHllXialDt2WgqqDNJL8Lkw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AhEYZTbXXLQm7x1oGtQ6VE78FIITChrMibKZ1yOsVZrdPrjWSibAK9Ktw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AO1jdCdwPZhq8hWkHicL2hibzV09SP8SYic8h77AUArdvfBKdhmTYMmBrg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AOiamdPiaTrP6oonGmpBqyQIzkSePicnd7eGbk6MtxgicxVPSZiaRmiacAA8A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AMaT8AXtGxPthUsfktZHhjRe9D867CT6O1x6HxWgmzd3GU5jT4WM3aA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AtKpUAVq8Cf5szWvSKRllQ1SRGffQbALzgtNlQm9Vkia1wAyCXzfvticw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9ALFmAaFTrHlGI0q3oicsYrB8jDHwu3kmlTY7axmVJkvuAIVmQojKCgzA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9A6sMarv4xyq0jaaDHNZp3BqYdazQlFMwdDwYFhWtjtEb06JOiaXgQ1hA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9A5ww1awXBRiaauhnmD4I4btv7x4wrQH4iaIbQwiccEgwsWRhHQToCg2icLg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9AeagcF1Kt9ZHjSRZbxupQkWMialPuuOeUemKXtnR1jlJ8GtJotsbh8tA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/P68U9dMw6edcyoVhq17RN6pibn3Y0fJ9A0WlmrmlyAsE7M3BtwlvQCQkXW1EnJpZw7GicuSDxj03BV8Zu9ReiczPQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。