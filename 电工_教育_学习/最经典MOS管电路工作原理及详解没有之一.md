# 最经典MOS管电路工作原理及详解没有之一

原创 硬件笔记本 2021-07-25 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/Ymi0wmpyvYXT4Gl-LgwAWg](https://mp.weixin.qq.com/s/Ymi0wmpyvYXT4Gl-LgwAWg)

## 前两天在网上看到一篇很好的关于MOS管电路的文章，特别适合初学者或对MOS管不是特别理解的同学。在这里分享给大家，希望对你有用。

## 内容包括管脚的识别，极性的判断，再到常用功能，应用电路等都做了详细的说明，关键是还配了相关的图片，让人觉得比较容易理解。

文章较长，建议先收藏，文末附PDF文档领取方式。

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn550YHJwewrtaMQuH1w4JRjN2Gnjhic2ib3dRh99TuibrgY2Xy3LpWqPibg/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tMUcaNO1vCl5R9epjbeEp6BTh0DrXbRmMbDXqBK93HgbFibvz9iaHUAobZJjm3CJAmOwC9frAvOExOA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tMUcaNO1vCl5R9epjbeEp6BEq2icCFfRQd2ONI7j8lpfbia580WkWSQNeONF5Ruew17yVTKhpqjHnKA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tMUcaNO1vCl5R9epjbeEp6B5NKU6CmRFUGGIvNBr9I0PIUA1WYzibIVeW2dtHY6OiboA6oApBcTSZmA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tMUcaNO1vCl5R9epjbeEp6Bvonp9b2ewwAEktOWfbzYsrM57ZUZGmJK7pWSMHgR5qQOBx8O3oZjBQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tMUcaNO1vCl5R9epjbeEp6BBnfAvcVVg3yS8ZHMoFO5WjJQVxtj83ESCbkqkOS6kmyuO2Py20CGUw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZndmtvZ7hWYveP4mCH1DCMxTObibh6FSS8anKsaqTL1f2FPGXaV1wpicIA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnoXXvgzAKw8QPflpQSOV5VnPU1m2zURwWuspeETaHZ2lo0CTBndPBoA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnxfKCEwmp7nAziaawejBj6HUiaT7lcQlOmfGU4y6E9TXsktUPTyrfubjQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnN3xpLm8E74HZyqribFfV88VoSrnltibNxZyUsXibWvZTyDbtRm4RG7uxA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnEtD1arOhcT7FkiaOHn6KDgLl1r7QCyNibSyjzgVJmCqDcwwnVk9SXpSw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZntUOS2OwrATuqvia6ngOITpe1V8mr6E9U4A0D3HlIJYAfbvguvHaJT5w/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn7OQ6cl9qXt6oMsDE47s48ol0bw98Mib10ACXpyDpNuHNNxNkUvEicKTA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnqliaGZu9HqdhZZOvUFKEwvjUxbseVkfOxWLzRYU8t4z61FVGWibllN2Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnyMJiax6Yoq3ETAKo11noQQr8dH5dgp6aCd523vJI9nKqWgyVzyUx3dA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZncWcQxLANhtiaoOMIOLgLcfvlgwJqaXYPa9FK3KANhQia8ddIo0ypAYnw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnnF5FycIXcPdIWfc22JajU5dDX8Beb6GbtZlpcms8a5klJXNWRBStDA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnQF288hjJofUV9z8pu6kJqxSicyMG8FHvaG08MFiclspHWK9icCDvQQ44g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnSiajRYz6NMEIicMUFibkS9NPl7F6ju75nRvqrUda4vyKGvnxZPtWGDGsw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnwsYCqvvGSj91u0mFBLCicxlib1jy5anUM1MT60UM0CtyADRIZcbicPDAg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Znw8QhQqJbQ7gIO9AdKSibib6FzGojMjicBGiauQp8r3oW6Ih0EMkL2libcLQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnFnyLcfgKKUqvZ4x4GLNYZ7E0Fj8ysF1Frx19BbXATjXj3ic6vBYhTDA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnKlzia7SaP5ZBT8C0vDibQIiajrsjHlLgnjhs9QfxykfK7xOPaOJe1MHtA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnXffJRiaiba1iajZIZ0qm2GWhCyicQQ2Mv8hknVZ0hRwJhHM6wM021S7q4Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnsAxKmaH57aY06icnEDRrq9nPAothIGNwh3V8zwickJSNZrwYxP02aeDA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnmTFBUQgx7FRdjgPZJswflWzOiaLO03sOm35g75DukAvgKicuj72OGQGQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnXU6rGXZrC2WGd5pkcMJS5wic122iagIia24ScRibRGkvOPlN0vRaE98XfQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Znso5JaicboVDbUiaOj3DRI56TDv3gckGn0F7r6ULGUb3gZHhiaeGqo1VKw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnP72rEe3SZESpg8Dsfno8apjcNgwmAt2A7xwoCM99Etl59PicSZDwlnQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnI2z4JDb6lp4NGB4bDkzB4QveJvZIXZntuOyBQjnokS7UwWWspsUmjg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn15Ic2M5kp0qUK0zkibDpZFA692iaJGrlKaMibHibZLuFf6aM6ZicXqNanSA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn4ibPEwRJYeviaCvk7uT333KHtJq2ck7jmJlMnhHJfQtp1gVZxpwEMKTw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnVZXJyDDwjY0R2k3OM0ziazsnz7Tic9TyOV4NRqvUMicmPrTdMwqMZYPTw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnYpcnhlUPzdzuWuLOplLoiaWPrIAtiaOSNu6YoiaYnXL0ibCboicIByOuOTA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn6qqgWSv5GdWibomoZ9VaODLqfRVicpwDALKuSD8NXLNJZGsK3ibox6REw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn5JaibBTrsspgULC37YYMGtmHKxJ1AdqC8x7PuRd64MU40Mn7nYAPmpw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnV5Yu8ureB5miajmLNe9fhMU5rliat6pFlCpbdVoWnXm6RsyZW6iadEibEw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnaT14OvibOpLWQaXamfVicqGpXlbiaTJz2ibUC5a4laIOzQY3X03UtTP2cQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Znz8mU2aEia972D1fibSNCYmpJnScBGF4ZdWGBCeiaPHeBc1Umpx4Etz1Ug/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnrS6psJeia9osP3D2cGCUfdRGc63l4AhIdiaWIA9eerJaTnJtJ75zUicMw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn7dwWYXDicQ2fliaVibmUUBx665GcEuYPLkj0SiaSbOuAk7rkUibib7LVjOSQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnPo94rAJLkgyNfhXibOaz4fCnAltkWjZxBzhbyxibUQ3KjEkPCLql8Yyw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn2SibxePwEg99fAyHILtNAvkm7ibEmNzqOqjc830UwshlECqZ7CiaicXgog/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnlBvwLqa5XtByewgtWPJdhALvLftpQYDQMibHdqBKCDtTgaHusiaZlYFw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnVZibvkjqH9efRyqgibiaAZZeicLlibJfJGuglynoCA2wBt5VlrFuCicm3LxQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnQbMZuWFjKWkn3czn4zxl5xicJMdR0PD7F60r7MEfEoawhqbfo3CG2hg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Znn8MsSmLpEEZd0JqiaZQO4kYr4Vc5zezyZsczWicZZJuib6ibj4FgiaZTtPA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zns2g9hbm9txfdeYnm8uecVphhjskTjYQ8G0UE01icMoP8Rva5O5J0TicA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Zn3UQmE2glQiaeuqficMG13DYeibjj8ulJOHkfGicCbuh8hXibqmmheAHD9SQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnnuDp8VxiagYO72vRfrmM110H8fayjYenzEFZ8awXl13ibLeVPa4btv8g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnyGLePwnDY3cs30s0ROpZfeEgjXafcZTfGOuBjBVicIfLw4FCx6gQwVA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnqpBHiaQu7Lic4OibCm9st6xNlKrAC2QtsBf3IUxXzzib7YLC8zb5N2fy9g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8ZnbcvOGhENjK0D9SSkeIljibAa3KQja9PogsiaicmmM552bW2kZ2JkWhDog/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/Hlibq5A7Z6tNG0kgCW701mlcMgfOUw8Znnrp5eBsCicNFTaoBRWpxjkia6GYnZD7v7k8K0aM5oaiaTYxiasnBOLz6Iw/640?wx_fmt=jpeg)

  

  

**后台回复****"关键词"**（“MOS管资料”），即可领取PDF文档。

  

**#推荐阅读#**

-   [MOS管手册解读](http://mp.weixin.qq.com/s?__biz=MzAwMzMyODc5OQ==&mid=2247483763&idx=1&sn=f3fb2e29224b357a7946e5f8fa1eb64b&chksm=9b3d9f03ac4a16150973af26673471680dc4b466e10b620c2b0655c732ac4cc54b9c011d078a&scene=21#wechat_redirect)  
    
-   [搞懂MOS管，你不得不知道的米勒效应](http://mp.weixin.qq.com/s?__biz=MzAwMzMyODc5OQ==&mid=2247483897&idx=1&sn=86f8f77655f3485a8c563ef1ae259d2e&chksm=9b3d9f89ac4a169f73c18e72a840484d8906a42b4a588601f839293091f8f73bf4c980581397&scene=21#wechat_redirect)
    
-   [MOS管充放电原理](http://mp.weixin.qq.com/s?__biz=MzAwMzMyODc5OQ==&mid=2247483685&idx=1&sn=3ad087f1e3c697e86c5bb9e7b0a31eb2&chksm=9b3d9f55ac4a164357fcd6270d6a2540ce3ba9d1f862db019e062c4034fcd975983569c9f99b&scene=21#wechat_redirect)
    
-   [半桥电路之MOS管关键参数计算](http://mp.weixin.qq.com/s?__biz=MzAwMzMyODc5OQ==&mid=2247483666&idx=1&sn=affdd43bf51a0d82e8b8db0d2fe1fafd&chksm=9b3d9f62ac4a1674d97113c4d949f943b874c56eecf038da3bcafad5d236913cfe39550b2801&scene=21#wechat_redirect)  
    
      
    

[\---THE  END---](http://mp.weixin.qq.com/s?__biz=MzAwMzMyODc5OQ==&mid=2247483685&idx=1&sn=3ad087f1e3c697e86c5bb9e7b0a31eb2&chksm=9b3d9f55ac4a164357fcd6270d6a2540ce3ba9d1f862db019e062c4034fcd975983569c9f99b&scene=21#wechat_redirect)

加管理员微信，备注“加群”，拉你入技术交流群。  

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tKlGprYTDdia1K5UaMx7eljIcicdmyGic69qBtPgicEyVFHSYbf76sicHDZjzXzXmKBN6tNBx4AJ0xVziaQ/640?wx_fmt=png)