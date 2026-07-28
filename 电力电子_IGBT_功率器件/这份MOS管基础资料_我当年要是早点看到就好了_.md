# 这份MOS管基础资料，我当年要是早点看到就好了…

原创 王工 硬件笔记本 2025-06-06 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/8jzfgbBvVilAvVm4dGX0Mg](https://mp.weixin.qq.com/s/8jzfgbBvVilAvVm4dGX0Mg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。  

MOS管这颗元器件，说简单也简单，说难也难！虽然几年前就给大家分享过这份资料，但最近发现还是有不少同学在基础问题上踩坑——N沟道和P沟道傻傻分不清，寄生二极管方向搞反，开关接法有误。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdalcwH17Ae7cCbwLrnPtyoQ7RVj1Ja2r1yU34R6sUSgQujxgrwM9pDg/640?wx_fmt=png&from=appmsg)

今天，咱们就**再盘一盘这份经典MOS管详解PDF**，内容基础、实用，特别适合**刚入行的硬件工程师**，或者**想巩固基础的老鸟**！别嫌它简单——往往越是基础的东西，越容易在关键时刻坑你一把！

**这份资料能帮你解决啥问题？**  

-   三极识别：G、D、S极怎么快速判断？记住口诀：“两根线相交是S极，单独引线是D极”！  
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdHMbwEU5gw2uCVCrUA30EsjSdBfNBxkCBCZZpicWkUib7WIRib0Jqf9uew/640?wx_fmt=png&from=appmsg)

-   **沟道类型**：箭头指向G是N沟道，背向G是P沟道，寄生二极管方向跟着走，别搞反！  
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdYgwZr8Hze0vgyGUg3ENZI50VlydZH79o6OOicOMkuriakbLktUnA6xkg/640?wx_fmt=png&from=appmsg)

  

-   实战接法：NMOS的D接输入，PMOS的S接输入——接错了？MOS管直接变“导线”，开关功能报废！  
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdWxtlsTqm5HZuwoianFvj1I2RdJuzNc8TLaA9x0h4DicQia1fHp6PyGDeA/640?wx_fmt=png&from=appmsg)

  

-   **万用表测量**：用二极管档测DS，红黑表笔怎么搭？0.7V和1.2V背后藏着什么秘密？  
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdibjn0UrMsU7BKmxhXnQkhIX39pQ26AeEbuTKtJkd5pJpw6pr5CZ0UBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdapnCwHFe9PCwgeySASL5PXeEZpUibjaDTTHSrvXFVvpbUI6Pc1ZHZIw/640?wx_fmt=png&from=appmsg)

  

-   避坑指南：我们主板电路上的MOS管一般有哪些作用？
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdgsTY1vOCYibUXNyovyXrooFwatJCu7TlXqDelE7sgw9ZfpLBtOOia1IA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdhUhTh8iaXrbcFKYPLCGX1Cs0ia63tyErchgvFNXaHPg7DDibKNBSO4ZDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdsPBIibrFqd7YJuAibFz5k03eEzHKTMmiazaGkuxgwMCqNhmniaUmv0WeGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdVIPNkibsP27jp39dxTy71ianoOhshkbEmFZ0udalS2C5IkbXYg1PYnjQ/640?wx_fmt=png&from=appmsg)

  

-   MOS管是怎么实现隔离的？
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdjErSicqQvt9G6FIBia2iafL1hSZUkJxApj37gwbCTIxkeLx3ZkLxnI33A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjd362v8KlvOPEribRdzN6Dpm2Yyk4C6t90yFHUPLeAkAnoVvOLmYShmkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdMtyXAC6ict4MrqbHW3lRibwLZbav8e2wg9q1uDAHIDibVeSntg3j9k9Ew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdkfiahSQsfvyEic1xCEDDcRk3nCggvicuyIbodwqWvPyiaKPEDcwQ6xzvFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdtRRNSvk9zhlbrzypnxC0lXclaCJbbp8j16ibibObKG0KPlXAwsHLZcyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdowzUC7I4ibYgb1vzWAmMDRoY2KpPHqaSDqDddCmoNLuldAkYt1hLX2g/640?wx_fmt=png&from=appmsg)

  

-   文档最后还有“大家来找茬”环节，测测你的眼力！
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdsEqVzvqlRJMCVyMZsl2eu60mOiaxY1cicqic1RCp3X5UetFbPFmlxUlLA/640?wx_fmt=png&from=appmsg)

**为什么今天又推它？**  

因为最近发现很多兄弟在**电源设计、信号切换、隔离电路**上翻车，一查原因——**MOS管基础没吃透**！这份资料虽然老，但**经典永不过时**，搞硬件的，基础扎实才能走得更远！

**获取方式：**  
在微信公众号硬件笔记本，后台回复 **【****MOS****管资料****】** ，即可获取55页PDF文档下载链接。也可以在评论区聊聊你曾经因为MOS管踩过哪些坑？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia9KKROducOMTGUvUOVEWjdiayOBquNFVYODD8icpgE8jVKAGtU54NsszfouvCXRPicRfUAaJWfvot2w/640?wx_fmt=png&from=appmsg)

  

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgzfuoN0611riacBaXWMz1bf4VhibuwTs50lL1Ciblge3EhmVfonwqsN2GezDxt6zkrUfQ910APuKiaxA/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjlXjk6N5523uiag35OccaBaVvlib66Dxrz14E0HYrXUmQBiaouaibwgD3WrYod7djF56YrTj2cefy8Kw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjlXjk6N5523uiag35OccaBaxcfLwwFdbScDSCa65DSvlTMHBdhYkyV2TibBibZ3KETWiaGLa8Wmiaa9FQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)

## 

**声明：**

  

声明：文字原创，图片来源于PDF。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)