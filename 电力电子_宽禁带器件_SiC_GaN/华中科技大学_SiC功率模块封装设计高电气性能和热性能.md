# 华中科技大学：SiC功率模块封装设计高电气性能和热性能


> 原文地址: [https://mp.weixin.qq.com/s/7nDzk-dNnoMAGFA0khFV9w](https://mp.weixin.qq.com/s/7nDzk-dNnoMAGFA0khFV9w)

**前言：**

碳化硅-SiC为第三代半导体材料具有禁带宽度大、击穿电场高、热导率高、电子饱和速率高以及抗辐射能力强等优点。其中SiC功率器件及模块已经逐渐成为特高压柔性电网、5G移动通信基础设施、高速轨道交通、新能源汽车、航空航天装备、数据中心等“新基建”核心领域的“关键核芯”。  

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbzSWvjX3CmPHoRYW9kAoIibQo2Ap4N18XwTiaYMiaxo89NX6DQad6FMVeg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbwYibapsfGdDDnPJ1jicuQjewXZKTWK8n6yvAH8ZxeJvaIfORjs5DWbNQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbic8SAsNDpf83iaJBoekDRXIWWOS6WicW5qe4I7bgQDFPGMxQUkW5YOXHw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbYQYYNcwy9VMIU2ZRaQ1hF0WDlboSIW3BiczsxfrTkr2J7q9I88kPdcg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbYp0FADnyxmIGg8yzy9iapZ8ibD3m8UzX5XKJxGAyc9S6uTZm95WDWxTA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbmicjEwOBOBMgiaL30FPR59MoRrY2tM0FToMcrOxFC15Htp1DicduSxQqQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbdmQhZjX29NjWjPsh7ib2Ifiaj1dauJ2KOQEzic9RmFux5MkSSVVuyrEQw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbFOj9fr1T5RsINHIuqXs5AjoIXOU2fLbnM67NLZCnVoPT3tcKZIDC3w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbo2QCMPibPickybDYzOECxNZHd6kAB9Qvuicv5x36wB2PlTaIyJ6tdWITA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbpw8NSaKA0fBZHeVHYbiaTQ7IaJibWFhOGDicJyAJ14OEPVkx4oVOw1QDw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbgicMSE2Gx4taTF6UjB1cy8TR2QJFn7m1FR7ibdlGkC5pI11qxo9faUsw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbAeGWjEppFbXbArcJn8mPcr68Z53qUBtbAVVOxrlQW97mXe7gLTia5uw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbI0IGxXyHpkBV6NGCibCunVrOR2eI1Pk5MvC3vrSpvHTfjV7z793UZfQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbVFImECnbRGicLFZFw1rhy10icqTuM6JqzzMffibiaBwTWcV3FxAwpv0hTg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/87GtaTF2DXtL3h4iaxqmdu7A1JOk5TGjbXkibYmKsuobEpSmqbBy48V9QhFSTmz0ZCpHjFCkM1iaO2rULSP9PXCibQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)