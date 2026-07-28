# DCDC导致EMI辐射超标整改案例分享

原创 硬件笔记本 2023-06-13 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/cfw4sLx5hu4OhRTN0CYZ8Q](https://mp.weixin.qq.com/s/cfw4sLx5hu4OhRTN0CYZ8Q)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

分享一个EMI整改文档，对于EMC来说，接触的案例越多，整改的成功率就越高，整改的方法也越多，从案例中吸取教训，总结经验，避免设计中出现同样的问题。

  

注意：按照文档描述，从下面两张图片可以看出470MHz和940MHz(二次谐波)左右，这两个频点的功率非常高，可能该产品是一款无线产品，对于主频--有意辐射频率来说是有豁免权的，所以只需要注意200MHz之前的频段，由于频谱超标带宽较宽，可以肯定非时钟、晶振辐射超标引起，几乎肯定辐射源在电源了，不过最后的结果，电源部分虽然PASS了，但是后面又引起了其他的频点超标，不知道为什么也能够PASS，可能不关心200MHz之后的频点，这里不太清楚，大家主要看电源部分辐射超标的整改方法即可。个人观点，仅供参考！

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbcDKlqpjgjseHd8ibjPqUTILicGTyMGgWle5N5ZOUkEQEQ3IPTX8RH83g/640?wx_fmt=png&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrboK0EGE5DDFL7F1chcxATuJtwSDhl81l8Z3CQyahN7k7Z1sFFsRicCHA/640?wx_fmt=png&tp=wxpic&wxfrom=13&wx_lazy=1&wx_co=1)

  

  

以下是文档部分截图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrb1ubGkgHQAGe81DAVjHTQJpjulVO1QuDBEmGCKBeWbiarvSASzwgHbyg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbIwQoSQYBBibHQp1JbmqJcrOdRerS9Zm2vWTfblvrKzqsUc5y09Neic0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrb9FwUrHxwXFeN4fekNn0j7IYD9ujqzeXV64iavMY7TdMGmFA4AJvygHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbJeZE1Gkb0kUxwzZkPicneZyKhibIAXicnTFpJoph7pJ95IeKJRQBjiaibBA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbfvkZMiaIfws9UugtNXlyia8vyqAonV8Sklb0mQbC4J9CQiczku0C4J6iaQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbWggJ6dgbEz2EEArREcZSqwcgPsyJdoIfsWOBHsY1BV3R6g2qUMOgfA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbNL0dMSR35NopWk9unBBQoe0oCCmfOHdBW6tOCsXjvx167cabMHjWUg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbZVcppL363kbhXRAKLtIBW9UzMeSOW3IVBOiagic3kicvFwibyIoHPxJOTA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbjpic36ACCDamHVgVLf56JfLyTicARQSNib5jy6Ypq9cI7ia29QJaacEL7w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbhBoE5u5LRne134UiaR5cBibB7CibNibDo8M2Jbl6D2VEOolUBibWaPgHgRQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbUibMXlPTVXL8G1GnrzITvBB76cyZxUMBLdkcLh2ia5SlJOOBKiavJSxyg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbjT4pPI9y2IFDfkKhMT2TEFz2x3ibwxbFniaZTmEIaN639YtlKv0xxOEQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbrEUeIOSpsFSUghO4ZGGh3QicJk1ibeLWGbT5lgTLzH7jeWHFdbQNnrZA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbtxzVWNj3ErH2UZkswYYLW1sWa6vUV7QsVeL5AlzhVabDGgqJ93OoMg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbzm1iaECkVu6o2fBmS9nrdia9AfjNFWtOG3rR4ia9EZxNEDt3oECxX3ibbg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbnXugPSO826t5rdB9Y7dGpUO9bApvWAmgDNNMc6eadoLJicl9lK70KqA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbAGS0Dph0jPVaBu6ZNoibdtzxLC0grtMNW4lP8uXxJhtxWs1sQ5E9Phg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrb6PbcyfRrDh38RMyVT8uy1ZcHfyAtwD00yiajVO8wxD1kQOdiaFJdiccibA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/laS1K1HgjuVWCm137hZEgQlsXsk0ryrbCEGkRjk8GfuzVkhKwWZTIGwib2FawGOLRltVnA14icKP663icSPfibC0og/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

文章来源：https://mp.weixin.qq.com/s/qb\_Vt\_EzlA6cF-Rl8nCvYg

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。