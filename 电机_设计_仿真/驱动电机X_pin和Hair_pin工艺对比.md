# 驱动电机X-pin和Hair-pin工艺对比

原创 电机新视界 2025-04-19 12:10 上海

> 原文地址: [https://mp.weixin.qq.com/s/OkBt1ursNTjcQhCN9Aublg](https://mp.weixin.qq.com/s/OkBt1ursNTjcQhCN9Aublg)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0vVzniaJLlic39Dz12BCFAZj7AWkWzuNibGJdicvKpp96atY6HXBudPQPnwHaLIUMU8bzYtnGzHWGjibIg/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzU4MDY1Mzk2Nw==&mid=2247696859&idx=1&sn=9eb96c0e080b2c91b5969ca0495891d2&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0sGaiavWQDOVENcCsibmWmaQGzk3OXovmMVEL37OmORheybicVl0VGU62HlgibGJtUBhDtpkkbyiapw1LA/640?wx_fmt=jpeg&from=appmsg)


来源：汇智易学

  

广汽埃安夸克电驱、星驱800V电驱系统都宣称采用X-Pin扁线电机，电驱供应商及更上游的设备企业也陆续发布了X-Pin开发背后的一些思考、产能布局。

  

  

**0****1**

  

  

**为什么推X-pin？**

  

  

  

联合电子决定降低I-Pin端部直线段高度，从根本上解决I-Pin电机的核心问题，即开发X-Pin电机技术。X-Pin电机技术是在I-Pin技术上进一步升级开发而来，X-Pin工艺的目标重点便是在保证高槽满率的前提下，降低I-Pin技术端部直线段高度，进而降低电机整体长度尺寸，节省铜线用量，提升电机效率的同时实现小型化，从而最大化实现I-Pin技术的优势。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7Ft9Vbx4gQfay0uSiaZibftXIHIxUaecqDHvZLz2EW5y8ZvXIJmy2qnM48QHxABNlAdOrTBMxib2LO9L9w/640?wx_fmt=png&wxfrom=10005&tp=wxpic&wx_lazy=1&wx_co=1)

不同绕组技术的端部高度，来源：联合电子

  

以联合电子SMG220平台为例，在相同的电磁方案下，X-Pin绕组相比I-Pin绕组可缩短43%，相比U-Pin( Hair-Pin)绕组可缩短25%，相比W-Pin(Wave-Pin，也就是S winding)绕组也可缩短8%，从而彻底改善I-Pin端部尺寸过大的劣势。博格华纳在原有Hair-Pin基础上将产品升级为X-Pin工艺。与Hair-Pin工艺相比，X-Pin插线端部尺寸没有变化，焊接端部尺寸能够降低5-10mm，进一步降低电机铜损损耗、提升电机效率。博格华纳做了性能上的对比：同样是270电机，采用X-Pin工艺的话，电阻大概在25 mΩ左右，采用Hair-Pin大概在27 mΩ左右，从这里可以看到，电阻可减少大概7%，铜损也有相应降低。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7Ft9Vbx4gQfay0uSiaZibftXIHIARld0EicOTRLb11dkJkuKXVMCRnrPtHvNk3mDegxjsPpBU2cjM50U0Q/640?wx_fmt=jpeg&wxfrom=10005&wx_lazy=1&wx_co=1&tp=wxpic)

博格华纳HVH270 X-pin电机定子 拍摄于上海车展

  

  

**0****2**

  

  

**X-pin和Hair-pin的工艺有哪些区别？**

  

  

  

**线成型**

  

线成型工艺与传统Hairpin成型差别不大，需重点关注成型精度，因为X-pin无切平工艺，成型后pin角一致性要求较高，因去漆长度仅需5mm左右，如机械去漆会导致断面无法完全贴合，焊接漏激光，所以只能采用激光去漆方式。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7Ft9Vbx4gQfay0uSiaZibftXIHIV9H7bE9rFj2gOkRgFicPM9Zickib7HNxnEkQDNibqsAGJcJWWGkFBgaxiaQ/640?wx_fmt=jpeg&wxfrom=10005&wx_lazy=1&wx_co=1&tp=wxpic)

  

劣势：X-pin相对Hairpin精度要求高，对于设备是送线精度要求高，实现难度大。

  

优势：X-pin相对Hairpin节省铜损20mm以上，双面去漆即可。

  

**扭头方式**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7Ft9Vbx4gQfay0uSiaZibftXIHITxiakbuBibiaKdicsxibRZ6iaTNRRUD2yevOZ3HNicqd0YPENlvicKlnUCb1ow/640?wx_fmt=jpeg&wxfrom=10005&wx_lazy=1&wx_co=1&tp=wxpic)

  

X-pin相对Hairpin扭头最大的变化点是取消了直线段，无法实现入桶扭转方式，并且因为无切平工艺，端部不是平面，如何实现扭转且扭转后的切面保持一致性是扭转的关键。

  

需要用全新的扭头工艺来保证扭头后的切面一致性，以及扭转回弹量的控制需要极高的设备精度以及算法补偿。

  

**焊接方式**

  

Hair-pin和X-pin的焊接方式有所不同。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7Ft9Vbx4gQfay0uSiaZibftXIHIeehaC1HiaIIY4kpUg8wXtFh84CEZmNseIFcicjiae6gRGNtwEvNDasljA/640?wx_fmt=jpeg&wxfrom=10005&wx_lazy=1&wx_co=1&tp=wxpic)

  

Hair-pin采用热熔焊，端部形成焊球，热影响区域较大，一般在8-10mm²左右，熔接面积为110%截面积作用，拉拔力一般800-1000N左右。

  

X-pin采用低温焊，端部不再形成焊球，需向下穿透，热影响区域要求小，熔接面积为80%截面积作用，拉拔力一般600-800N左右。

  

**绝缘处理**

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7Ft9Vbx4gQfay0uSiaZibftXIHIdZBmXCouxcVRBmW7kUBCZPOaOcmuJell7E6F5VL8xianvVH0UoFtAOA/640?wx_fmt=jpeg&wxfrom=10005&wx_lazy=1&wx_co=1&tp=wxpic)

Hair-pin采用浸渍漆+涂敷工艺即可保证绝缘性能及强度。

  

X-pin亦可采用浸渍漆+涂敷工艺，但X-pin的熔接面积及拉拔力相对于Hair-pin较低，所以绝缘处理方式建议采用强度更高的端部灌封工艺。这种工艺可以提高电机的绝缘性能和强度，同时也可以提高电机的可靠性。结语最后，X-pin电机相比Hair-pin电机具有更高的功率密度，生产工艺也相对简单，提高了电机的效率。

  

同时，因为生产工艺的减少，导致X-pin电机制造设备的难度增加，X-pin电机设备需要更高的精度控制和更严格的工艺要求。

  

  

**0****3**

  

  

**总结**

  

  

  

最后，X-pin电机相比Hair-pin电机具有更高的功率密度，生产工艺也相对简单，提高了电机的效率。

  

同时，因为生产工艺的减少，导致X-pin电机制造设备的难度增加，X-pin电机设备需要更高的精度控制和更严格的工艺要求。

  

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)  

  

# [高压电机 能效标准GB 30254-2024已发布 9月1日正式实施](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247574347&idx=1&sn=324e60a45f9ce388894db215c8ad9534&scene=21#wechat_redirect)

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

# [华为都“活不下去了”！电机中小企业未来三年要怎么过](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247575025&idx=1&sn=800a15fe2572766ef1632371ee7475f2&chksm=cedfe435f9a86d23f050893e070245640fbc59fce832cb6264e6ecf8b6c43c0fe9a0c6565a38&scene=21#wechat_redirect)？


[![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vAFjNjgs25tqibVUnHhKtqEDibUPDEujzIicS3PhXH2y8OJz6cAQY2noeyldbvNbT7ibRjE3iccc4KyLw/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzkzMjc2MDYzMg==&mid=2247498858&idx=1&sn=cbdd1df5338cc64e8c770d5972e4b69e&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88ic1cyT6sT4Eb9gB9NyuTGgwBM45cpIiayzA9KliaEhiasA8MFU1dzKPcjg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88HJkEmpYqlKiaC4tFrnTia7L7pjBnCvUZtV9MV1HRf7nRn8kPs7bKsmQQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88ULU9yWwiclQtG6BjIghiafsrrnPXJxjrGQfbnkeibicOsWjPXsyjwG4zdg/640?wx_fmt=jpeg&from=appmsg)

扫码报名了解变压器会议

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uKdXjFpsB1RDrRBMYRO6OxT5YrmvxSnbaaDeXF4bqovY9IfrC6SxJMBQtp4dnM1tPnlKziaSEUguw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uKdXjFpsB1RDrRBMYRO6Ox2gll6RtjpK3FFYmgTBOGo4FeTnVZtkL7ZlKEclXqTtZ7vtFY28R0ew/640?wx_fmt=jpeg&from=appmsg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0t1sNKPl7b3fvXjBZ5n0zqWv9bKebxXm1TmYGTjkrJbvI0JtF4TibavniaFHiavc18KnuUoQMicVG09yw/640?wx_fmt=png&from=appmsg)