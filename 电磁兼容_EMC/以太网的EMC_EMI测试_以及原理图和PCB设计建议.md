# 以太网的EMC、EMI测试，以及原理图和PCB设计建议

原创 TI 硬件笔记本 2025-07-09 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/qzJVCcOyXVESgaBwTTIW7Q](https://mp.weixin.qq.com/s/qzJVCcOyXVESgaBwTTIW7Q)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

分享一份TI的PDF文档，共41页。主要介绍以太网的EMC/EMI 测试、以及测试失败时，优化原理图和布局设计以提高 EMI/EMC 测试性能的指导。

下载方式见文末。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOWwpuzErvVoI8QSMQgH62ZQNA8N7gnn7btV68LexCuibOLh20qJ1GRzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOoc253biabI9gibmH6IfaDVkfqPS2mpwNoI40BcCJov0bVZKTOhokKOTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOQxAHhD3y5xEkEnT0Z3DCZuq2HCXkIRoAatOKkLaXH2l1emiaiccgicP4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOInDe9GN5rsH18bmC12jVqPyLibya0UYgtDFNQPD6wLqicnRWmyT3D02w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOmJvMMiaoKUhVzm8DTRFbdE28gwkQerwkxmT8gUFdiadudh55qpkeeKFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOD2aibibUMfgTcJM68ibLGkNGANia3n4oqrJyrUML6Zsxib1tz9VrF1ZO1YQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQO13Mo7xYakOZnKdyAalyIFhlbMhiaf2ZAzKkmEVrVR40PibTE3FeYzZ1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOqOibc1CkAjM6uRHm06PoGsXBV0nicbn6ib6lX7Gd84RpPq8Z3JBv7DQpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQO7ATtLFpqe2fq3ohodYjRkLich6FwUmuhuvPB8ePLO49OHicrcvyTdfLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQO1GkwUlkZJpnx1L93HyvGqlDtChnHFAvJXopg6rIIzqK4KfcWDegePA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOmwuWE6Eu2jRvSHzKJ1hSC0V61bxJfksVXKic0HibAEGuVqbiamboJAXgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOvduuiazlXDAjWrcnTgg44XoLcTrSlicdl05FtWoUW1mYRo2OmDtBf6tA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQORicB6s0T7rEWKqh2y2NzrRAlCmibHu4g5jAwf6iciaFMIn9GXhF1VZ9YTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOSucE5YfSEibFUQQq68kdYWEO0UvFthbqjT76jYRxcSWR2FBqReq5feA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOk5f5cibiajYfYSIeibuwER0nicjDbtJIEdicTyqD1jwJ5zODdfFHvtvPgSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOp98qVuLmiaDibItcev3pWvCmf71JUDRQ68hj9sib9U7mBkicia7x0uSACEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOCpVaP1UogRDTFjlEia10BiczME23IbzsG1FJMnd7Ea12BA3a2rKDcGGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOppYicVzeYzI8PicH5Mm9fNtWpJQHPXQ0vtxyskMVbla77VzA9sTBbsSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOfMe6ApFOCt0B0akzgrDI0R5wOT5Yc1v8sqiaM8GPkP6Y0icKofLib59xA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOibnExY441GWR5zibicMrzrOiaNb6DHS0uia8PqrhoEgDDQhibNLvC64XRpbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOodjicjIZMZlHjMVpEpnzfY6lzrWSLicSt5fjV0UL71KnVXgPpF8N0RzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOxTf1oZoLAQbBr1HxGv1l9S1icnG7dlWadInicpxme5K9oqY33TlXa2Rw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOyb1FZ0r04dXWPhBv8lo9QtYdO7plmLw8w9yzOj1bdmWYcc2Pdw9P1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOB6jHnH7CnsDmmjJoyMs38tCXW3qicHQib0QjXF2kan4OcNOPURaXjxsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOadLlJX3ibCRNecuT3wahXMoUkHzvjfm7DBlzlbPia0qls9pT4HpMQriag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOfak7pjohDLiczq0HGT7EwSUgTZYA3krr8VFsdyM7JicdMLFGR7RHQQGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQO5g99FPhwic1uJ5lz71ebj2odzlRGAnyl3oKV8GRLic3U61LtZtvZr5wg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQO8UibXX4uxLMKPRgz74wr2Kho9W1CDUuD7xwPsmso3cBuX06lGeKUp6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOFibBBiaPgvicpeRdrAe1QWab2arKlcPELayIMJrv10has8go2fMhVWmzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOpWnPSq4LgrHoKrm3AIdKgpRV8Q3j2WXWV4nBhDiamgVBd1qQQRHu3GA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQO0q4hFDd1eqepU9fnt4ibkJicoO2lUhWR09rZsBQSEXcvlkCBriaSKHzPQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOhFvkdAjZMw0GdMFA8dtHygZwWUgmGAwia419onibn29Lyh3A9H9y8t3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOrOltSkPQfHPVwE2UFoS96XBBQnEKtAuDuvGtrJaBmU2D8I7FJgDAaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOibHO0ybviaKaSfqD727tdyHjqHAPujVA6YEBwnacwHXfxLva7UkJXTgA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOSZicZcwlpfIqTW6T3sPbouxob6Uxt9hIiaX9icRWSBo3lbX1ejI1Uwic8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOyYneMbUkqIDR7eWHmib5lWqYdOibkcXO2sB7C5ZAsmdEBSlMomiasLSVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOTjOtT7ZYicIbKWhwMs5B3P4vzHSfaJuQuKRp3sFOSfC7bGYbRg78l9g/640?wx_fmt=png&from=appmsg)

  

大家可以在TI官网下载，也可以在公众号《硬件笔记本》后台回复“以太网”，会自动弹出下来链接。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhTMhenYDVBkE6HWm48wgQOONAmQqARNrlfwXGKgwaL261554icdDBT6ymwOCrpKTRLm4fC6rSEibEQ/640?wx_fmt=png&from=appmsg)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaXibb7JpvlIIySvnTFyhHPk6YnjEMXlliblrTia9QuvBSRgkbpDPt2kic3GdicUc5gqCicW9Eribt8icRYbQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaXibb7JpvlIIySvnTFyhHPk7YJIClaAvubMuWZN8YicqMLM0RZqmcoqyTBwvHQej9wVVs8jXEzoUcw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)

## 

**声明：**

  

声明：PDF来源TI。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。