# SiC栅极驱动器基础知识

原创 硬件笔记本 2024-06-21 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/gAzXhkxGmb83rCpnlNcVjw](https://mp.weixin.qq.com/s/gAzXhkxGmb83rCpnlNcVjw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BLA9DAG6UyuVzmaIBoQv5jyV6nHYJj9as32E68Jia13pAJSK9xrvYCGw/640?wx_fmt=png&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BIrKSC4vgNAATn3gzibuoOIAzV2leYNzrPHzhttTAryjiaicd8kEwicZfiaQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BrSeu4G7BibNx8sw2U1AL4ykqM84kvN2UKEsIBsI8wJNgaDMibvC0hH8A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BSpYzlPgeUc9gm97UQ87TjdAvlyibEDuCJruynz1U7qxw2q82AALDPtQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BGKFsMXqlt9SXL2OMntOsB6qiakg6OdjLiaTWicndnOL1oy6KePSQEzDdQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BDd7qamlU5mdCw5Ve09dbic545bxzkRPfibT5zVVVLpZINmSC5NgFK6BQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6ByrtBZGdXGqiadsUhRKzk1ODIRf4psoWnibdaRMVEG3P5a6M1rkXndUcA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BGzFKr8feLO910ic9I2sworTHvjZpSDRu0uyb8yPvnInlV64QSyEkhGA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BkQchYHYiczkqWIePjB5qaBAu46Rm9gR8qKh6bgbpbhGCEwNsRSV4u7Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BM0iaZicxuyKia57hgxgJQGdtY3rQDRSK2SuBxsEG0fBXib62oJfJSwcs5A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BFiaP93Z5af1Mocl0fYPkOKzicTY7hCgAHxU9fHzDKT4xmenJzwNCL7Og/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BOXKDPUavb0lSByC3xYHvprMq38gJShtouHV7pqCkXfHBz6hlY2lUkA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BtxkP5at9gYxtUgKxx7G2HZyPwXNEXyqHPTwibnciaPkquG22IFQavHpg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6B5I8VZ36efP5wzZfibnMnTznTzMEOXpfOBmo0F1ECiaLszn1rWdAH7vMw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BdDPlFHjibqzq6yoJVAVXXU3ovAAiaSh9zUQ8uzbHqKyVXGnx8h9C7NwQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BkpiaeHHpuibhDgtKLPzEgcV9JZoEP7T9EmNzXqiaeVrh4vtEGsnaLoHcg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BM6jW5KZr4z0GuqNic49xhPUm1Ff8Ru9sXBS2DhYAoHSv0eBmCy74xcw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BHvnOJCTjyNKXfwXw7BOHuAxzEOibibwURtPtrFmpjyIW8S29shkZLjJg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BTqflWm95jZHLaaBNmWS9LjPea1ic8ffgLvVK0pxeJNKoFcZBEWHNaiaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BPtuuMR3wwof26NuuSJwsB7yTS3ibWZXUgLJzleppDib2xJ20sWqX4zQw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BBIQaqwAMaDu8gMqK3o1McOw6GR4eEsuwRBPiaHY9aBBfeBicvQoABFCQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BePvh3WbDBribBqbtXPQDWibSWNgcJkMxicZicQ6nokfgiaw1JfP2FAR4YTw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BniahpGRWLUhbttugtYiaShuM9j5Ufl2OYdW5Rb5ibyVkDIbI45QW3zeAw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BcsteibEUciaJSYe84htbmN3A68S1bhHSFkdaIvQuv6OrG6iaYqxVbh5VA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BIbGZYFG1xicYQzrFEnmoficU8cct2cwodSx1Z0K6ow0dpBCTZXOyPSlg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BEgjiaZMvHibw7WP7yJgOGmzibgmsIN9fKLlSOiaSUfjEhtAFJnXvLBorUg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BMCuSUpL5kwG4VBXVRqkuRKD2zpfjfTXMwBpOrGook0tXYDkgX3caNw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6B2OXWrz1OPhasSH6T050lbbqSyQLYcJW6jKfW4aQrCyE57UXLcAeVBw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6BKDeDbbYc00Aic7L5IlgBsJFdFk1t8XIWPZrmnibpmAib1YfOVHpG4TkeA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXv6tspE9E6WibHm7tOjnNq6B5zSnoSAx3yXdibjUHQkdkY0eQ4R8eFW4VIcIO4A5jKZd15OIHcK9pMg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源电力电子技术与新能源。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。