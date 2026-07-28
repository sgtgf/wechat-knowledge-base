# 华为PCB的EMC设计指南

原创 硬件笔记本 2025-01-03 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/Blx6VvCIWs7Is7Ug8E6rKg](https://mp.weixin.qq.com/s/Blx6VvCIWs7Is7Ug8E6rKg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。

转载一篇华为《PCB的EMC设计指南》，合计94页PDF，对PCB的EMC设计从布局、布线、背板的EMC设计、射频PCB的EMC设计等方面做了系统的总结，供大家进行PCB的EMC设计参考。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuszuAYPOyZatYIibiaQm42Ruhhxb60hBgXFxmtBQyHNghkRicv37xmDGfTQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusmFAzro7pIH9xr9DantX95KJwdKtSsYkoIpN2DyXlrlNibQtfnoy2YMA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusiaqTDWcnEiapRaa4rNGJGujArILLI0GN3HJq6JTBvN4jQoKdmZibTWMJQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusP4CqQWvwRXsDKkq0kickOuyv8VRLmd7ZIs1F9iczSVeicscTlsh03eJoQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusOAzagXgAQia2wibDM7LYBYTiaAGxe3DaXZqjZSybkVOBn3ho9Ho6Oia5sA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusMZTSQUZcLLibn9icdAWS44JEtxmSjOcMjPbAhmpJEkgp9ZU1AYak6HKQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusOZr2rPoXmDmA6M7rtuibic4mLyvwgcMpqSohmVAgUTsp7YxVEes0DbLA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusaIUYUBRWiahRW9FntuSQ7ibP0juHniaKr4AongiclMfGjib82N8tc1gv8Ag/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusUW3WHjTMuyK3bGJHOOsEk3hsiclWVkOY9OcbNLx1icGYTZlfMNVFsKCQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusw9y3rnRYRU7WSxAphjxv3icDLYticLbYOxxPJ8wZBFKHI1RX0TUic7wcA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus0CCqwk6eYYmzK7oz7H1EasPT2te4lD3ia2ShXsItIyoDroq43fMlcZg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuso655icGOmbibDrjVtX5w4PYZB5AOr98W2GYthj5onBuw13YrQeOoEicVA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus4JfbQlMr1HKmntBRvmdStqPS2AXHxQibicdddIBDaIEGCTOQKnSnKorQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusQlQP2TAVeH0Ecb2icxNicmavqHblWkzD7SGU3CJs3O3TyQxGutP9Ewuw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusbKgsu6EMnWSDun3jK4PjyqUeN0K2O3Jw2A4KwRoIQhj4udLyhFfRQg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusOV4qiaHA9xvJ7dfvwlyfWiac9WCpfMXQmEKs6pBkojvbYDlXGZFQpb7Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuswREoG0AvMVFN4ic4ibDicYDOqlYo0pvtNJ1rgib55cjsicLSHBUSL3CxcVA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusELLZCZFNfE7a5bWmwptxuTXdPyuMLPLRfr9SGoC7JLia7KibjbL92VEw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuszekgribKrlggiaDvH9LFo6vynKDSUaT6REKAriaQAN0QMvhp8jFickdV8g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusXL6dxYMlkfYVOKvUxRZsIib0jJRHs7iaQTgnicSoD3sNT1icbdvUtRRlcQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSussyNdia6m5ibkicMs032FcaEr47sujYDv0HAwia8IOaiaqnquuUVLh0YMnnw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusNtJ5XI4F06WWCIWzQS1yEjV1IdeHE2aMHaMqGyZeLNJvF11WdoiboLw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusjIAFuDsX2VibBJZNj4d3AKCiaPK4IGia6fYsn80ZzribHAPDEZPr8Z2jYA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusjJoMS2jy5D3Bev3qoLEqsaSSicB9dSu50vGaKCmjplsmwO15bEoh5nQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusBRZIu3BAALSxgw7C3pCnLK72RSKtwwmNY8nFn8kUjTGxibuYD8fPILg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusZnouMSvib280oYOrbKuDIxtftzXraBjR03ZGNwJibiawZbickNwsZS9XfA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusIAxSltYTibM7SibDoXL5CCzG7Xrt5qYecMQ9zefou0ribltAnWI50UaTQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusFhKKSfql3YywickXP3KsBJRYFzGQ012t0zlvNPz1koMrkibsLIgEfn4Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusmRiaZHiaYnjDzHiaMjdrzPzOcV0N8xlvLO8buIYePF6QlMYB9slNpenrQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusdwkQuSxFGX0eySvlEJvP9mcdXoPd6j8u0E8LzsY7Idv3cialSD6DeBw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusDicK1XWeB5l9XZYefF7ADvBf1XZnvC89kHyficU6twWmmbapsAjC3JwQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusFUxMA1PAWOlrkJEtQpdu79zv1OCK9S5If0ogcXM7bGkZE6rkydxhibg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusTEoamJfskrEicoQ64QBHSRWic9O5bpSuz04V7U1FNVViax8cRmMvRF1nw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuswteTthAichhT5DaLJ8llJzQHicT4e4ut3efECT6ptnytAg7V1nvCCy6g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusiamqHUV1fNacj3eUrhGSVm96U5ss6TYJskV7gE23uxvKibHCBuzziaG3A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusXEff15AZcrmBbicDK5M6REQ4kvv4Kq6mjdWKBLYMv6KL7r7eXOGXUMQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSussTFBg6nVcqjyXxPZoa4GHQPy1baFGzicDt7wCE8TPicfrhB6GMTcvGpw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusDhCBlxGXszpLnWNXFkC1hPtMqSyya6yS2iaicocmnP71ynXC5toQ7kTQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusdlrdS4LkcXtRoQJBVchgOz7CZBH1sewTTz5A0SniaqF8bMIZzTsHPIg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusn7EuesounzILhLecMrbGu3PgxZ8FxJJEDPlbXoJtD18iaFuCDUuHCPQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusrqXSGhML3aic8T2Jcsk16dPX6MsZTMD7B35bIB9NVm1mvVEGOSMKfTA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusicUd6qsFLI6qQZ8OeKhfxua9biajTxpHwlF8YwKJOmV23o4n6hlIFSwg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusyzhWG9umLwhKjRlJIaaT4Ae8OXicm4jkleQumpTdn4IGj1C2aRUEtDg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus0kibibzAOr7PErFPRyFPJdmpHxTVlRichnVPqLtdJ1uNa6D8mq9UOtHTQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusSxB9e33MmsgOSG3vhl4QTTAbClwXrSlYibNM6J4X2dLW6qciayHal6zg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuspNOsW5ll9XKxdLqhRngywNicvQuOIGnfxIMID8YRCTvxLx7eWHBs9VQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusPA89ABkuSNcgDTiaiaW2CWJCzl6knxJwvzxdZ5bfgcRgzVbQIiczev2Tg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusXRBwGEXOzcLTMusTrVspia6JiaJZyibyticH4wcU6Js7Omhic9Tpxc4DiaBw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusTRgR7iau2pS5wSZNia6wGfWNvnV5HtxBPQezm8mpp4nAxgeVSCaYWENQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusr8EuEOrjdPCu5yL1nxgFCUicibqB8zPwqNibsZxDxLxN8LZQibA7pTTIPA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuspEMP2icmSSsoerxZrPZy6egoufy85VPBC5VNXoLKI47JibsKCD65iajvQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusP6dVj7lLwES3bhcHPJ7EGJT24PICyTbLknkLToS5sicWPk0S45t48xQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusr0kxiciaQhHx1Tuasmm5YcQicjdlGyAUjnOcoWeEtpPuDqdvz0TSRTPHQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuscMte7T4SEYnJuT7bmrXibYFCrSAicg76gbkuYIaYckJl06aVRB12EquA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusSqMvTkV4TVzX0Z1VMN4qIa0eyXDKRGJjsRFbFaiat93XGzyXB9ia0Oqg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusQkM3ufG3J5925tlIicN3TXcmnLG0AU9jkmSTz7eibrsGMY5VVs2ibzrJA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusHv5PibIRkNtMib8NrqoNpYRcLkP1iaxCsbEOmnehdpkgF9VqkiaGSvicXeA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusVNIQsh1ZaGQXwMdSJGXdbiagRGgMbyL0F6kvlibgEOksjNDBa8Rpeg7Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuszkY8gF0kCO0TC9HYrLRCk5gWEbpc9Xg4siaTunq8zzN8owy2jfohajQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusY74xJqpGPNjPMibhmLnTbvQ0ZRdrzYkoib7KaqVt0DLrnZWPGl8aiaGqw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusrscoVqiaEjMjnv1ypGhNAswico7EviaGIibYJCneOEhGe3gdoJDOHQI1SQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusAg0eAm9F9T140CjFUNpKX1ibpl0f1oSuyb3X8y0WQ8HLvcvh13icicEmA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus7kxodQ7ibXQ8DpA0ncqZZcynLak8syzEsaT5VhX7hXuoZVs73bC1fvA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusQVO5BqtKicwgjyReo4c5ibHSElEAzYR6dU6qh4GYMjqrhgF41EkqJUKA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusENWKuXJ7wfkzISFKof9kaiaHqicicHkvKrRk69ALdQyZC36vAdnsAFPeg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusToprBVbicYxGTaDNaiaSMcjePwyFK6cb5eTiaHZediay923XD8gtd3d4vQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSuskaHRLGJ9MEgdPaiaolXcKIofeQtKdEAP75Af00hD0XRnPYAtUlxdljw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusejPrqpTbJBHhTuk69sjRjQJ1AkLX6lAlnzff30DxOq8zGnv39lB8lQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusXibMPA5vC1vMicmAQkwyz57wlccaUYzcYTOIQ01uEVsfvvmEUVAdtlPQ/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusJr3cllymdfCia5oGmtYQChHTTaYnrDPrCkvnKPhW3ulez3EqsWBsD1A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSush2nrEPKCUE2MvXEu8ooVEcde87olxtR7oyAjXiadWjH8om7hNPn62oA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusw9r79r8EQyFibNlQL0SJBibs3srOJy6EggrjUYyhtDZbGvveJRdIQiaBg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusPJXaqdlIBibtrvGmoibLeujZ3APDqMhicFWxSGDzlrosN1mFvmvrE4icXw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusvTGzyddqMen8AFXUzX7GWbNfhBdyOiaCyfHxGgyATJr4ciafCQrY7j0w/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusZhSDiagEArarrcpicRl4VrOtr77eBaVu8yrp66sBxD8lRyIZpkvyKoXA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusYXRBzIqribMkwYScKHtzeJKJd7Epslibo147cWyUjzxMU7NeviaZJAaXA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusQYg1yPYRkZHpfsicYb118ICNVQia4yCBne0cjOxJMut7xh6OvwG519ng/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSustYrP6LOANI4Lp9ibtH8grY3mCK3ib9YdYVR6LNbaqhNUlibDHdHpfu72A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus6NfmsyuibmSu2c8icoicqRLvrSUNic0dqAWONaEJIUaQHhHUz5vKPhJ8Gg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus35p7s5tmicicHUJLJtQ3rSsUlQgbB7SzXWGsMUFoyRiby5X3xxYGJXdEQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusktYkalywf9b53MD4X1DczZN8jTyB3WYe6slr8A5BIRibEwpuhTia3CNA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusB0jYtvD6LEUe14k0TBLUsQgjc4cUgw5YroZicx7fVnoJ9K64fMyibWIw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSusbX4OKdMiblhv6ko7a7fpqIfcCn3SN12ylB50xLCvsDLiasHy6a08wLbw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg7qEBibAPiaw8QFXk1rcxSus5ZzibOGiaOwRZZz2h4UQogrNCP0gccxibueFJ9OnNicf7dPnOFK9HKZX4w/640?wx_fmt=jpeg&from=appmsg)

**扫文末二维码或加微信woniu26a，向王工索取文档。**

  

**写在最后**

  

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

  

[![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjp9yy0z2QDvC7iaeHMB8Plb72fjzFv31icQfEKicFLricceMych76njNhNG0hjLDic7xB2vBr1mf0hTBA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=MzkwMzI4MTA4NA==&mid=2247498828&idx=1&sn=e91fc5514f5fb14ed26a6ba65a0dd795&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源百度文库。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)