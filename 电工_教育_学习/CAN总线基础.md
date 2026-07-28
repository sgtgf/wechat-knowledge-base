# CAN总线基础

原创 硬件笔记本 2022-08-09 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/vW0eEKHGWNCqa4sW-NIKvQ](https://mp.weixin.qq.com/s/vW0eEKHGWNCqa4sW-NIKvQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

# ![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9PtRHsAdtZ7M90yUbPiaa2BBUqTVUjT6JSgOFTSHNnlWqLyo65n5xz8w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9eVnZ68t5Qo5YyKyQkmicBYpd12B1kFSEI9RF3icw2LFqwouX8Io8TBNA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9y63CXV3QPzdpNM8J6SHnEubT7MDFssU3ogfibiaiamnr3geD5wspt0GOw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9ZzloooZGR0wY3hW3icD4cKt6STZmiaGXeEIwrpX8XGTOcqkF4Yjg0UFg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9icN7Irrn7jxtdFDiaI8jYQDRicqAxKmKMgBKcNd6po3MhbpXrnouAxRnA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9s6tZUz90UxZyw0W6fO1rg0j7x7H9B9dkmQc6vicjF02nkc8Mt5h08Tw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9QVAviaJ4gUxTFxsOVCiaiabqGluH5oQOsqickNdXrKohNlUJpsJddWpVdw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9h3j1adIgD4kHJ6Q3GfZ37goIMZCbH5QicicXr7YddhFglwLibN8lC9sYQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9Kkmtwmme9QvQSkYoA3NmtMcU62szvtMVxhxwriaM4MlXERyu4H2ZtFw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9dXsFflDHg7w1ujSMH3CzkZUice4N0ugDXAKIQ2kuuibImOqbUPUVG3ibg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9pVYAh99g5ccSTzQmpqJLudvmfr65Eib2QxnJBP0yRDWwEEsX2qRDf3A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9o55CXjZibf7fl0ZNubQ5Y8TdRYBs45ic9Wibm4Op3eQtmNMAkky5D5U2g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9hROPdJRyic7C6ojiaIhfNrIY5BzickIbTZnwqd7O5mibxjbnibh6fFjmd6Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9ia7YyrZrRn4PU5Zxy1Iv9UcJM14cVSKDd688h0neMsDrNcpBNT26uHQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9KCzeUzkthJbmK2Tib5DZGVBFpkoChyENyKlsW7n2BbMyia6dc1xFNF6A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9AyQuIdJjygSqlTicQvOWI2zQiaW1VdYHZ2Usib9uSj0VxVayfs4yANazA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9n8hicX0dZOOkP8YGRKqlyxb6v9pgL5tx6owgy66MsRHomHicP6s2vaKw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9b4erBrKSMOuKIaIYY7ymteiaibAibmlD3YU7Bj4hFDe18ulBUdOyxfFrw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9vu1lZxHr8LYkJzC6D0R6HrUpWPtXgttH31TLIqw24Uel3zGVkn38Bg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd94tsAC2naA2SFozfLj1jGj5zEt71HXNEqFy2NIsb1xfdORF1weyGxxQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9Fw3IQnpdB7QibNRtfI3EBMek52cp32SwwYbrZNE63iaE84mCgaY726RA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9pvXfnvuXL1TTj17ctHFEEm5lMkZoul1K15FpiaZA17Y3l78aIDlrIxQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9m4Ter8icLK1TBELkOkqgeaKkZiaQBlKoZlfjQ3wS5wLevVPBUL9DdMiag/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9DgnDicWBBJT1RibFyCR95X4gJTrbe0IfpG0IibLElRicYfxNJicaONibHZZg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9WX0sHibtwkJwicJhumZQ4hQvscOKwWyLswhibia5Y9peE1kSknFFwIiajIw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9S3P8hbibu2gP0AQ2eHHE7Dz9euop76icFnApZd7eWEkTZh3b1ecuEgpQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd985V444u8Q5GDzjBex2sN1VUm6ozUcNq5eUcarWFzBh4D1RBGZIRplg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9bb43HI0Xn6F97bEdmPWcHuegacB7tGMj6Rcl12O1RVx6krpPn8ulgA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9hKG3dFribRUd6OcdaASZqqS4Us13e21chBrQTbb3sAYoOCZiadq0O3AA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd92iapSjibo3PVuf8TatxCmpYoKhcABlDpVZnN7Kp79ibhqMA2hWmb0ubLw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9GqT7auWDKGqfcLwzrciabxicBeYIfVH8f64yqpRQLDn1H94sIPyaUmBg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9x9fdM0ER7hQHnE1OQibGTwLbb1VxYr826icszAO7VianUthsbCxsLgRyA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9hDvsULiaLcz53A9ia10zK9GCWlh8CicEV9FMRHYnicbkibunxES80guO1fQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9qia4dAg195wDf11u9RruSHfWjeGXyA7BmFrlThVibrI3zPgW0Q6Gak9A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9gcJRf89n5z0rfj0pJ6abHpqEaIEUK7ZwBicfamjctWUnhKjIUqrOMFA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9xvUTr81TSfb3lWcH4Qxubftq5ytLib9WdstichyR0s6XClQlrbeicQrfg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9CA2kejFxEREZKOfvXaoYO11GKufTX951AiaArLycZ0jBIppLK2G8FMQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9LHfAfX7wibmicS1PMIzkNJ8uXmYtPEayTHKwoHJaRjicBdnTmY5S7pbQw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9mia165Psy5ZOAzGJoVwADW0qJrrTMTJJicTJrCFuJ5icw7lJ6aQbibS53A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9KkL6S1DYt3OwV2Zib73JjCFKbiaz8D04h36g9WXa8nIJrSzHDTt4luiag/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9c8qibSE1Bzl1k0cjUgvHiaurXXHoqXdLkR54cibdSxgsJYCvKO65pn1XA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9r0Wud2KyudY9nBAjPEKX1vwFhvAfw1qvqShyNAsXDsibhVSwdOHHOCg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHTWbHPD8ibTHyPiamak2Fntd9ia7wYWr9vB8zeZvaLor87s5vbLHCtbzpbD3I8tkQQGaN7oYAlfEbl3g/640?wx_fmt=jpeg)

  

后台回复“**加群**”，管理员拉你入技术交流群。