# 固态变压器（SST)的本质：基本原理、设计挑战、研发概况、对比评估、前景展望

原创 Johann W. Kolar SiC碳化硅MOS管及功率模块的应用 2026-02-03 11:59 广东

> 原文地址: [https://mp.weixin.qq.com/s/TbCg-HZZWVYUDTv0jMCIlA](https://mp.weixin.qq.com/s/TbCg-HZZWVYUDTv0jMCIlA)

文章来源：苏黎世联邦理工院

作者：Johann W. Kolar & Jonas Huber

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuQicvB9wrv2gWh2fchmGttcsZlmE9Xs5gIiamPOL5IPX13ZOBABgTWRCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuy1Yb4wbXhUTowYK7rOdQsibZJrCIWMU1darcuTo0ntE8dib7t9MeibOTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuTLnn6mjSm8j5mk3Z2CFsNkfSRNzSUFAa1nmAiazNibLCKb6906b8EoXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuiaAFEt5P7RQ96zywJLh8tT0zV98nReHPm25TSVypwN7DPmjgYMrCUhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMutq3LtSp0leX7ugq6unX9G79zy9ftQF1uy8ibd094tdKQWJxIia3VyMBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMupKViahXn6S2L1fsL0wzLdCASEgm8TeZPQCiaQeWTcmtJEK6ictDNYmVaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMulvVGB7ibFiaDXyyUQdiaDpbWptjSsFbibjmRzQZROKgr99YWhUtukj2wibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuzukOZs2qLnPrxud5MfUAiadsscVbhdC8fjnVROXojGonxWhbiaMN8IGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuia3IBTTA1qlZzydFlQ2T6yOjWEBhdudyn6zjGJP2Zmbr3x8T1Nloy8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFkAfx23iaLPIzyxfbxsCkyzIn5AQmzXa8xfxmzvl2RUIv6fMzDLJvkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuA7UDspiaGv9kzZZUrzpVibXoBMasOMIwicPt0JjUVGQyNwpTYonKRWfkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuGv4cITTgLOmXNY6MibTkvFKcc3YJLiaTLFIk2OE8CjeVW53zib2u648FQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqXibqrOHoq0pagoicgUVZJKAZXFaDDDdUHGKKmZpg3h1iaP8Zeh9TBN6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuEzdjmIiaJPLGBU7M2a901DBtIv8QUFutUAhEYLiahUicEfVibwibib0bEvlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMugvYuKQPYf0wTMOBPr4pEu7DjZne6xSDt2KiawQaWia5nN9c3RWtwNEGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuC41Q8hS32WMS4kicADDZiaPClBxvevJibnkYCbfk0cdYeyAKia7m0mUDkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuAMArndfSgULP8CqXxHnthkeziauLwwpWKMg697FjibnlQRpFjrxiagL6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuImWgGa9A4fsukqz0GybQqAdBibca0orz20wIEacUV0UViasljnIiaYAlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu2VxbWIibSg1aibUZAicNHmA329iaXz4MGasJNxNpCOLADahNu9YO7WgA0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu6B4TWQItqcFhvguEdwhibINgjT42icQdpUWlSXgzdqMKHW3xziaMsylsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumibzIsy9zdM3EQyCBFegVJfdS2cqApQtbtVZ9T9eGFDAekLxxUpTyMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuXKQYYtuPDzhpUPNqE338olz3Vog8ANGWfLCAVY7lGqGg6eShscvTnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu2fw3HWqcYFHyg53RgGCrg0c9vL7gBGTiaENbJjxdsicwbibwAxiaibUralw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuOicgFtsNYV31KMagrbmbLGY6SGCTBxf6KDT0kLIEiblTiakMbzIChEv9Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuhhibjCm5VlX0q0ia1icvoGHLMibMuhibg2YUmVzIbyQiaIs3NVwyickCQ8TXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuWNXZwu45efDjpKruib4NtVqAL7tN9ibuoFNEdUcpXicjnWs5XAsSw7Xiag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudVCoD8Wnk8k11oKElhWUzZdr0pPgF23H6ZeWcp4zkvWg4FHmhn8pyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuZicRRibWichylU4OeOztWD0icavoXbCobm0z9hlVoyG2QAlK09OgFq54DQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuQHoLGLcjKsOUS2NuwUFIEnv0yREibUMsREicY42Xuic6Paiaw5ZBwa6LGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMukpgUU0YWVMJSCIx0eqxy3eNILSz85q8xoopB7vBPZWnPbRXW1ibRXRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqbGILmaxdTeT4U4tk34RyibBzlmdYxne04T381LyiclRbxeqpIIdsL9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuUr1iaq1ZEOaqf5Z0g98N66VzJDOFJedNndeRVnmicMYFKHJVScWe6O5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufDRhEnA7xiclQTf519QZ3FDdX6K7Wzb78wiaDAYYdmPBSYo4JCU0gUibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuiaxZ4tde5RiaaBaiarDcl3ibiaE9UanicTdyxZic72pnqsq3fct4Cuc8OPvuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufTvayt5PFDRx3jAficfxPD5SGlKic68YJV7yWuGThDRuDichd4MhVUuEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuCPO2pibnY4gTKDKflqlBjCKSSuiax0ZBqiaNpXAvRZYib8UPhmeKwzJoxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqicgtfnFdnickeRejU4JTNJ5ZmUhfMQUiajU3fDribysAq5nFOumPukIicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuUG3xCMX9gAibbk459BSGX2JlhLEXE2F0ju6iaNHGjJY7mN3BYkoKicGoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuibEu7UUx63pOdKBEujsUhkpZtQRFSBXTdbG9hADgzS9hM6GzEfaUD5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMux3dhhBhZibMQxapiarjrzcJsyHb50Eibwfg2esqAiakH0iaN1xLfUSM2eXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMul4UlYbEysPLoe5e2aSFBMplJibwXouHXib3Vk9sTDyOgbfLwXWn9xU9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuTHhf3nrAA11mPlzN6q0Ix63Og1iaR2550oCKdnuKq64TCLZlbCQfpdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuibqickjLukderQiaWnv1mpItg2w4WlR6q57ibCJrQegwQXRfd3ZZIRcicHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu1E5fjibUWcniba0mnewfqXWLsziaKH3jcbwAmejlVBM64YDibjSPmKuaMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufnWGwOxsCWtF8tkpicqRENOjIavxVpON88Fqb2MOUJCfwpeooy9jQwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuorFCShCEj4nlib7ib9qFwYvhBr4ad4UL12K6rC1E88IZaFibar7QAITSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuyTId5oQjBicuZ9udQkWYDbSm18ZavuFX5SiceNhAV1tlDLt7OWtCDswg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuMn0fUX1kqNzrgy4rmYwgDMLaFHuRhQvKGYfBRsKyH6ZFWzSoS531Vg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuB2QoVrJ5fEiawqFUR3OGyozdnSjqibpkdGI7GA8UuG2icHicicmlnQoJJHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuYnkj0lzzHibxSzOOKvWD8YGyyTOoYqVET95G5gh6wI1Mtia3HXRaoTDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMulU63ONtgMqUTHWVsbrSkpaibw9bMfHeMSf0I3IqRVyL4m6uKEf8EmdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuBhTmQs7vg6cO1x0KnMc9NsBGUXKXmySYrCuKexFxXurhCacnlAgeTw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuwA9SEGiaic6Sb0FpseO64ax96VohTAUhwEas5B7LaNtOkznv3HzVAJew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuhuPYVJrK1WBicN5b1VFdWTKldtPARAQiapfQtqc1Qd1ZTN19gpwzre6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuibicSaN9C3ngVOJVk7CiaCpqTrial7v4pPicJ0Mn0xb8Seibp96XPJy4Dpgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMud5uwTW67nG2MPzCrUTbMZ4dzibuRD6XNA6UNY5vqeqWOqTosTgMUNgA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuMXY46V1MqffkMdhQIeKibyPYUcoCZ5LgOGEsJ0fWUeX9e7jdtpqQFNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuP4yzXUbsecJez85Cpu9zYDsicc7at9aK9Jhs9GuHicMalqjx87Fb4Wbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMukawkNYsM49VLpXlgIWgyGG54esSJ4pVzDSCZL5eCXNxwF7NRxS02xw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuBgQ5iaT7EBvgqJm8PhGiaIPuzyhK4bdRSUntL4DeFrnO3QjugTTcO3wQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuZtBOZbDUWTSNz3AVgKAwr3icgYLdfuacR4eFXcQxNyA2rCc0gXejAHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuac8cdfMnicALXW7yITE3EIFoRZMzgsm2fcH7hHn7roichuw9WDibdFicEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu5Y0pC2Np0agoXK4UZPIO4FEgHMZsBicjreDsfelq9G63mBIwzZicfUhg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMupuUS5VnZPyWbUU44QNkmiaL2E84Y6mIzzjqqTXPJF0W1R34t0OeeCgA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMukzdopRzmBMLW681SLuOuGC4h9mwqXibMcbuWUxctGafM2J54aYewewQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu2G65PjBOIF7dIXMOGPM3BZiby2kPeHBAicWBrWDe5iafjCWWvrBYI38jw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuicwKM7siciaylT3TuZUFYT67N6ibr90ib4uRvLtGX4WfmFSGd7gp0xcUXdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu41eqrLRtBuGWDnk0a5iaRJbOag3G6ib7tFeBGMlyjT5ly72v1L6VAicmQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMueb10HW2H7reUWicCv98rl9kT1R9gs2libjMMBia8pSWjLQlgeicbn7fkxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMugyHWnZtD2rMEfEynEkdE0Fh9TUNpL3P6SEzibhW5dT6heUqric4oOGYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu6vFmJGE9kOweYicmMOASiaF4U8przxRBp31gRNfrgLo4DDicR8UdqTnIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu4HAcYAQlKpVlekc6xVOic7C4QHbnkdbaPqe3AWlJicTicJFVDc3lx2Aww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuISkOhCiclUT6OCeeOseVhRUjTbSSXTFOz3aBjkicf2sVdkSzrRqv5UYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuNibCRxNr06fWHUK9npdaeqOrXtDUdweN9KNCbweDhg8pGcyF5ibcQoEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMul64Bv8XOND6maBbMNesBOrPWWWiawF2gMzPj2CicGI97SicrOEFylWnkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuzySiaRbGe4K4BoGsVzYRbWrITGicqkayQTWlaoUMUicIkR4cJO3wY8tmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuspzpxsSPHV7oD0wzO8Kjk8oib3f4aMvmUyP6pYhJiaWz9xdiagTuZIFsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuaSVeClGVib9vn0XEc9CVftQXPW3LzA9kI7J2qFapTeCicjPibetVdibpBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuRshlvcP9SSY9qbyb8U3Znhg11MmZPtvrdrEXtL0AciaTt6I4SLG5jow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu2Kuwg1NJSNKxb4UjUraZ7wMarRIQoehHol44zlQLkmK6seafWGwz0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuiacmicOFicnwCcXSgGR4k1CxSqPkTCAlqj6RYnMGun14BCqicSaDCldSpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuiaGDnfQabgPPoX7rnAhPxGwviaduuCeBgXA5wuk8P95L2blyfuKXvp8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFTgnNgU6TfDYCpiaqCSeHuvlib9cIV94SlNoBPkhkqJz7Yia3MFmjctlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSIIRs4rTicwcAXnz5pcWuVmrUD90DQSFlP4tR8ejkjGBXqlAWD3tZ5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMusibweCbMGpgn6icf6I8TUIzibhdaliaopu1ibgIoDMf13qZqLtGuQBEEia3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuEbjPd579icavdtEjUXOiavgmfjaWdvnWXP6LZeGCstIY7GhHKqqwQfYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuDZzSGVWWCnbP6sKRB22elgiaxI0UYPXia4P4jDFLN1aT9CWAcrkueMgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMujX5fubDkt2DTNDGiaP1LQQ1LuRSFKtNTE6EPSkmmBUUicILBUq3YyAicw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuefibBW21zVOBZg1XAKeDtR8BicvneArJx8sT3duempQXDqxHjA7kkk2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu0EdLXEDibsXoPnNJoXxA3OfwWia2KnzpiavgvbHf2oeNtzdPv1iaicfVthw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu2f5Uic9h3v1F1ctH3YshIHdB5pGSpRdbbhBGhGRIOCTpjLRJiaMxdy8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuR1o8gpFCC7KoDlvxjIwzA7x1PEicrqrMK4tPQOopc1cmqjic1YXTz5uw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuW0S2T0QffMkiau3FfLASwXF3aPIeAgQvPn6gEf0pITXdzIibUX3c3zew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuZNdxibcgJak1SBU75rdia8P5JpZj37HmwyfQia7FiaV28rjkoKs1VZC5UA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMulTBXickBKlIn5avxdIuPrtiblfxhMic9mHjhicGmum1Wq5swC8NPCpOLibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuianmDDn70NWLoN5TXsWGKjQllfIX41nnFqLliaX37icYG3siaOqG8Zm2bg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLicPAeKFaolMialoyjPg1TXrh8SC3S7cibbsv4n597UYL779yJBEV31xA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuxPzFKTm3vC2KKomS2tM4ja8BlKnLGYKF8aph45rBSib1JWzpkYgL5uQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSiatS9po9VGdKXQd55zC5u3icTRmA11QK0uc3XSBiaddNkMeY6IAphAZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuxMCQBiaUMprtXO14ZVxKPDa0iaLOFRjdSmKL0vSSQtdHtibmv7Sy64ia0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSVvaMzah4rKI3OeOib4G9Qwbo8zH7jrOr89glvpEOic8J3mGwXfvQIjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuHpLCFO6Y1l5YrmvibQhGUlXTmb5qyzZbrTjBImAVia940IDXEp3DUsVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMujgKgfR3Viav4Y5On8aibgHblo7ygiaeWIeTTbzB1ibpa0GVUluOKBHjt0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuGAG0TLKpz2qib8AqDq4kibDHEh0x5BsbkPoHw0FL8NPfkLA5me8fymCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufpoEDKj4LC7vQaianSOHqibcWKIPKKF0pxGicnHkYjcianQzQlG6wicZaEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumDQcCyn0EyI8BMJ8lxqauicLcU0yq6YC0hozLb26R4FgUqG5JOnibpWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMucrYkIUWnlumDlibCuHleuEQtiapEiaBvibMzpMVrzrmJnDoxlDashkwp4A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuiawl7nxnbGjcYaEeXRHbib6lfnz0iajanQjG5uOM9Bl3rUFEiaeyMExtpQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuhTLlf2z0UYCXvZjIygCic3NyHbdXsYLicwiciah6dDJxib0FeibukcZg6sKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu9ksKaXGTpGDczGa6Tibp9GJu6h5NFT3pvlZrssmh2JtFLuevbRicBDaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuzcPEiaGsOrpgBOIicojZ5G2r6rfkaBsEEg9sPm9iciblo5QozEkyX5dsgA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFoNiat2r9SlkkWFO8xAYOc85joTSYMibLo9U6khV9JZYib5X6W1xK3ibPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMubiaChib07TtD3op75VGRGZicaaaVCMUNsE4ibYnFl6O3ylK3KfpHRcVmEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuibmj3LUwWmyInLbxob5V0vcbOa2Uk69bjnxugTA45yoGbGPMAIrRRSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLFesechfqVElecxvD4PG4uXTsg27BFOPcNq9CHgeZwB8WnrBwD4lpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuHpYskLLFJMbDE1Ykr2Rd4jaX0icRyHgF1XH90VR6DvUJSiaYjOyId1OA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuBLQic6vBQicWFibenLn7k3wqXlQYU7g3CoG7KlEWediaOL8mUuO1edQicQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu10vIVOX9zTTO1ZkCqwRxmjgiaRHicay2jVxwlcRAHI6R4XMIj9A3YjHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu1eJ8NoIZxTe5AhELUscibibMqibFFc6NucBfMJNaicpicCT3hNfnBic13tSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuKyjFb36tTEc3o3tIyTlgYWcp3fGYWJdMiaMDag6Pw9LQSiadcx8tVNwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuoBM1NIlfticyNMlbdef3JnpWiaR6RcqBibYhplF3ngr8WgLu7ubcsqPcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuhg67gKQrkjZQj8GiajzjOic7SHLZeJibofDAVoZSzNibvL0bW2SWg519icA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuBgOsNgHjFaFsicTepN6TfYTVVslvv9ICsErTWqH3ulaudTmwXTHp63A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuDKpy4DIztsu7UtRu3lKO9QapOatYUVh2iaYicrIiahoIoXVTECEyKBicIA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuQnKbWpfP2bKqSPlQF8iczfvemOqKFibmcFfdBAtiaWGIJ6U7WpskUcdyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufhxARJ8GyUU9dR2UYEgicnRP2DsmmUWmc6DhsaTTh5QogebypEgcqjQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu9PHMYeTD2Iria0RnMdz98aIAQ6JSnKZiaqmZ27oDqFdnYy6BRw5agMew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuJBzEy2TNGMTU621jwiaALrnRTSIMvGu5WPicNh0Rz0KyZHYIBAichybcw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu4SIAHiasQ66H5CbibVAjw6xBT3VjadNwCuPUjTf3eicc42xrJ1R26cH1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuetVdXPlq1r94wfB49HGZQCl39BQNs8bABRIaKKBRPTABbPFUGdpM5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu4vaybyKWqCpZUtt6HmNcuWaTVaA95TVPqfZXyeATvzZsP6ugWtCjxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuq1Vx3mOAmtWjdkM0RpE0uv1aEMhup6jkfuEocXrZGzONSZxrwH5WXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuGVjNlx7ERLeiaO2brEyZTSfuPzQrwNHmmpNuQSN7ia5g9bpco59iakSXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumXdiaCEFrDKgCTMD8OW0PnicpiauEwXXOPK8uqqKD9HC1oI7d7wOOviaOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuOCnf0dHKlTn2gy2cHFUVpVbX9L11DX2GyJfGibPx1gL8HiadIUOEUEibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMulLmGMxW4UDKHSASiczAd38vqibymRjVtS2wJHCB3oXDK2GiajruH2sruQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuM9VNQwpicU9RmPug2hDzxSpoWyUGibtlGmXbSVp8xKBcktzWFjIEk4WA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuZk9WleoK8zAJA5ueib1wlZEudMFkYewmvYAz7uX9tag6m1LMrzGrsTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuuTdKoP9QenT2ogMwFmtjar7bgGVl0GlMnphaRLBcgib2U9icZ17VibWKw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuwHGn3IaZibhGmL0CgLibQfnSKPV0LiavePDEGwCiaLuVFODIBCaibyWvmzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMujGxFbLXmcqDzN4Ie88DIfFx6lKviaJ5obwlSUdYevBdcs4Mah0oDuKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqr2BD5wKLoOgLicEgj5193vVXdiceZ0EAgl25c57ictEh0Vp2wchPzZLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudpicKWGHCaGjA3KAn06xo7VZ7bE1jY5JdxQibvZGMHzZ4xyeXgFXxI8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMurv3wl7icwLhKECdn5cREkiccQFLhj4ibCibwiclKP2mw4jxGlLGT2A3Hp7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuUeYibfRNsTySyfoNGth5RgBzeaUWdHJ4JK6Oq9GPZ2FZYK6qHPyRVxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMubchCpPqkECKdA6aoLa7gbB2QbX4Oq6BznPkOGlnicOMvETvD5c31N2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuQrQsKQsg57LgzakIohictHESZiaMdF0uM0psTsxx7Qq0MAlFumPX7Ivw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMutWcOUjosggkPibGkcBIzicxM8pDCWzkslO1391iaNfR5ctEE6E0f0xOrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufMiayO2t1bYpUJtqoTY2Miad0tcKicO4VP2PvOKLqsDURF10Yz2Cgthqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuhuyFxRUFLib7cS8ibp8SdNbOJLp4BTw6FKIBuU24aUjd0oO75oVMuvzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuNEjlwvSzicSsEgKia38ibIcsGicEHyAcedzHibKzRjnmTZHRUfA6OlSBoUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuv72fziaSr5V6zWVbibJqiczR3SO7RrSjAgTpc6ZNyHM7lMfAia8s5QOAgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuto1jL7EyPSGzwOXVuNbwVNtib40jAAT1pxGRoKymjtReA45j7CH7rJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu8oSMrF8YCZkeSsriaeiayn5SZKNUjNozsaKbJborRpxdJgk2TU4bGfIQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudcT5BA5CNicKsbicmISiahGO8nR38EfNCgZ0dQic1Dw9fTCUAynSbZJahw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMujrFHBoc9RKpTurSw3SY0svEZEwlvorpoxh1CXsK1Tb7D5Ke8uVVrpQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuAZNLXodsdjzTPyM3UKoAHR0lo1ryv3JBeIVG2vnnuVOrIF8q5ibOicsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuIY2QiaIScgJMA2tjFsXlxZmXBKcFSsY1LdlSnpH0TgbUKASp7OVYpMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuyTsmL85NdibCvq7b6VQyZeBSE79IZy2HywNXW0I1PyFKWODllvPEJYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudibTOdhiaSZxibj3yUsZchxgRNOrFPSBj59ZNQMCEkGuXlibyw1zOyo6lg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMux3iciccNsa7W20Ic3Gf7AKxPY90DRMYDQlEdouc4wEDSTiblm7vBrJyyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu7Q2sVduzvJNqVmf3mjVs9piau0r9AD6icbN7CarPO4dFiamoYlZZ7SpSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMusRiatn0OCicnZgH1BgIiaODkBFDPSIZLS37npFtc8536B8EGIurgjeHzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu5k57QJI5oaxjviafV2D3ibAKTjiczxY4cWaibssYE4JYUhWlsRxb3bvH6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuUupDhpaIcZSlqicx4ItLRLVZ5d38Y4Ws2ATPfjaGCV0FuibSITgZFNjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuziad3I5J6LGL3RGOobSlK5jBPoGLR54fvqcKmVAap6685GdCE61lqlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMurhgslARU4icP2CDYcMqqVDzfXLhVDEsRQPjicSHyn2QNSrzbuiatpsVSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuiboxWGQjIXxcqE1HibBg5LWKUPu0NL5kHicZYCiaDhqjRicWXibztiaVlhAfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuBrC8tP9P06SGTiaSY8E7gW4fianZe34Tiaeiaann9mWPoC3yU9InGrWGwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuWHJiaN85ia7QmCicWYguQMycLIEKYkwyGM6PRq3PI1OB01iaI66dv57mFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu4Xu8ZFcMicxKLLTRNKWHnX1Tf0MyZyWnibcTl7qWLibDWWMN4oZmJLv4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuZianDqGfcibVVdvbULBY0TohiaqqIdYYZqpNextDrWQibJktJ796HZwr6g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuPQlGbajv1NzmYXtIHn2RsOHXFfPP4Yn0LBaN5qj7PVTKSwXnic9fJbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMucGibia749Y72lBpt2ia5IjZLj59EZOBJsbtYn9DCibhI6GjKC5LfEaMolQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuuvP8wibPPpYiaezpvg6bpbPYFKRMwpP8rZJqH9NQeW4eQyicicIiaHP2ibTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuXibAqBqapgqXtib0Y7Es6JK7OVx0KjhkYzS3E5sxkQtnK4DVSYV9iciceg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSlvow8faJYC86jZ2Mu52L7kKC0OJrNhdE8LyRr6fyaCjuX0BG8F8oA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu4wDZ8c9jaCTjcu4SIQ2YzQrNH4ExAele1ibgCJxXk0ibs896Y6hiaMvxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufRsianJuVBHhT4FngpfHr3TWB0nCQMHV9HtHzxFc2sMkUHWsp4zFKpA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuASVmsDdyakup5V7cvrzGv2oIu7qhmXEwG9o1kPg4grvN5x7g4UTkPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMugLibwTeboiapc8GnxWsxlBjaGCfnFjIEKTefocdAssKNjwh6n94xTHfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuwlF4J4FTuIzmlpBS9VDVzrrgmx5pt0UX7hScoOibMdaOHgymehX1Amg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuXUtCRMmia9GVicIIFVz8dP69TOWz9PXagbHrWpEzmBHTpiaaA3Do5nfPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuzhBQtTB40v878iaQouwqwRibIcKAicTOkwuN9Kmt05qhH7ywMicTBtzNVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuO2ib2KvSSdBu7fRlVZF8fRQpdqkqSicwyA2HQOFNq9WGDybq4iaG6G6Mw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMur5adcLsYoicCY9KJY9Od6HlqZr4WmDpm8HKFgTB8YYPjYhnzgETNI1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu3VCxFjyIKnhiaQo9jcqambgBgR1qIwqtwSsTajnSOegibibBtc2ibNYu6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMue2kyVuswdL8FxKJkvVNB0IHoYpvaAJWiblcia5icu3r8yYoo6mM16ibGJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuExll2XhfC0icCjFBukibswibtVicbicyPUBjwmjsBOMTUagOKIBCvx9zHsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuibykxJCe9kDt31k8mrPavvYMjoIqicco6MwNJfo7lRaia8DRKsZvvgrHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu8qzLsibQpIVykOYxhd92t7Aj7E8cLhrgia3QcHaFfkyACMuyeU3Y0Hibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMukJgOSubnSnatrGFibPMhW6eibZ5ugbCH2YEQhGygzGfw1AvUPsdJY7vQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuJIicF35vcAdFLJTADVicWPZ06dGQpENNmJsticezm7ib7Tb23BaYOcbsIQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMus06xibpn3rZpicnJJuXVjzVykU384iaHaKPr4ayL7iaWWZD2hE5F1vicflw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLuuRsIKnZGrf5RpbM79Y2lfTpiaE8YneYZINAZABrQAzGyxAGdyMUog/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuDM4voicTe4bOVhe4ErQJkMicNkubfiaIo09eX7ia7DIIhO93g4B7vlo4Jw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuIiaaoHNCh5XIaH56ZRdj4aDAsH3Z0rcm6gqecrUdoL2IqFSlFdlH9Pg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMua8o3p72KnQAZNBdP5GcExazJoVr6vJia6EtyDONibel2TYNdkjfOnib3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuIvibQWUkndbicZvo9SBjSULXt1B2OGVzIAZqAica2wpWowHXDiaxjNTVGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuthDsoiaQY7eQPaZzGqLLJXibThx4hWpsK3UjtLVptUzhu3jLldiaFIveg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumicyNicsLnev731iaAUECSYoD0m4EibsiaDUNDEOFe2f2ME2LdgqPSyqicrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuCibkyH7VnEBaw4EWNImWhfNsGxz3ttBw50cU6LkZlCaicRQJCW8UiaKLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuBlOVP67RDWGx4rrObewdKtePESic4LTXBCr4Np5xibviaPsvCKn9jWbkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuWxrU3BiaNOj4ZnWiaIlPHFTJuQERKQawQvPndX6noyoGWcicmaI32csFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMusudFalBzAWGYANUWWGBEbwPWtVoVv9R08qtKHN0AHuMicm27SZ7gFng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMunte6TK8ia0cR74ZcMic9YgGdSOer69qx9wI3CXL0wuqcNJMxMFibogOgA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSxUavkZynbbCUZhvNoahdL329u0cdR8RYxtSUU1Cezh6xEJJw8BUGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudIz2R3Dd8jGHhfnCfmGzVtKAPSb0IZKH6iaErg29icPcYF8R8ga93G0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuwmoNtYibbqFVKuRiblZpGSYM1tSURSjBLo2vicKDqJtfictiahL9wK61bbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuEfjaTnxIwd4xQqTZj9TJMPWKJIvmEMcr604zWQ9aq7c4rq2SH3ic3kQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuPiaZgco7smhjcDmKFs6dxj2BuIRQyoveWu9BMbp3Iib44qH2xNpGxGag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMul945KCGNicYmUqQNl58Lw9Zic28vkRicia7mEE8nJibEHJbJW906YNkyV6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuKwFoFRp2In2XT2VqWpyhg0SBoNUFloeB7Fe5uicUQk9byicIULDVickew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuDLhAOkiaPErcORIsKZdVMrYSVZiaf5hqaxMYf3QRaNq7VPtKgdvHkP7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumcEckzuRbpoQfIeYTPASv0PasbvQMpkks3Td9hvdYmQqdJcRBISriaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuJTicAmgWSA6SnWdxOod3Jo3Enic49A7HAVxibyadHiayu1MaepWr3D3m4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMujgE7eWgMpxXLRM3IicAz1PuRPlq9drVqmKLk0VXUCF4Y3kVicCicWwqaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuooWsgFxItfFFIAqr9bwMpkRqMNiazHFpVQAaWIklVZCliav5wfZzjAZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuRsdZ1xribfPftJiaOiajcjr3SFdmPIRBd0fzxTT7GQWVfCMUrkvq65vgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqSSnVJN3Tw3QY8eAHUf6Csavgn54v92sIbicL1sbtD2K63vLl6zialrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuPAclOPwicKQCicvHstk4sjI13sqQ6Q8TqiajVicD8yQqJ3ERP2ebuFSj2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuVGicibL9nQ1mbInkPNlfDRJcBic3vDGKxIiapxsUYiaV62SpKTOHkcdYANw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu7eAMO354ONaZn1aQbjPPKaUgibf9KAyV5aMwLRJVRfBAEIhBAU5vqiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMubeM0yiapL7wkticIestEUu2iauWWYvBZt03Z6HnW77UCXoOFOvbv18AaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuStxkLibyAbz0E6k2m7BXVBAELYC3sTqib5vCL3JWLdYWOKRsSgCtwSbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu4icyX46AZI1hvl8gkp097bscDnO0icXlZSmPANTicguvM9Xto68EGrMLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuO2ATMjmzNibYLKEZO7ADqToC196kZb672NeoQquBSzexUVB4Q8XkZgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuAd4MxS8Soic5G8Aniaic2yg2ePYzYQL43mniaC8OQQvsHpibxpTo1Zt5lSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuuYZvRA8dnt8YdxicxoQ9ZqzxruWNnaibOXwjnKsqhjtSTsMFFQZqLEkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumBssIpq0WOhniaBicMiar0wkS4Dn86Tm6PeOichK34Z16QLicAJnjYLPibZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLc03kjzffqQsTfYia080jRS2mHJ6Q8wBWRjJE0JicB9JBL9KhMW0YRKw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuDylKm95E29HAteuYZ4T0ev5YMW9cNxmSSX19rtSJua3SQJK1f0zjVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMufx4cf7Xt7G0AklicbJuLuic3Vsrp06lYqt01PjaPicicLQmeq12mDQB2mg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuJmL3licSZ0iaIibehWBZyYjQbHbIicaFbSW8fYVNvbplwPj7wpZyJsVzBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuTLPXPzOcqGG6j1ibgZH3yeibl63uECfovibFHaANDbv3COPeqMAf5DTjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMutng1MKTqbib4fDJk6B86uE9OoCfQKI8icnlSUKX0INZxhVU5U9ZYqTKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuRUnNuDVzLib7oen0NxBMdWUibHgaujibo3y4pAAYpFngB96ATPJFrfnyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuxFsYtquN8uhXgwrVynvQyjbayRyqiazD9TGKHNMKmIx60rMlvBSWibRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuP49cPYzTpL0mlHdEguMu3lSmtV2fdRz9NadUgXU0Jf2nCFC2s7qibdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLmGYs3A7Km7x1aVdbeicmDWpFUOmtC7dybfYFNm1qANOsFZG2mlQgSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuJWh5eq6icz1IIKzjVPa8UeibJT5EEUEvJqicUn2BaKK89SZhhEVROG7LA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuAY1rCT16ZHicQMJlNEWZxbh08ksziadkgfwEx6QXuHCLePnvDFU5iaBdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMumnerricWk9ficqbZpOk5uONCSLCkibdGsm0icIRZYiaASGhpMn05jiaOsPqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMutFLI0jnldDbetRR83eVpBPgv81MPla6guQYpgVzHpPH9Iv20IhRq6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuAKGdBOjLAZR0BiauXia1DKfIPPeSwzQHy0dIib8nibdPfGicV1iaGDA8Eq6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMujpJYqkxR6crrJgdiaAHM6tyjMCYOcUn00iaDDvunjtJaaicL65icHjjt9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuGv4I1vKgH6mjia4HDpR858kic69BNHkQZiaRVJj18ibYLwoiar0iayhIWickQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuXK0ZpbcstqPZttbaQJwCHexa5XvPXFCe2nFicKu8WcZNffl6DLIjEHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu0mVCiaP3bZiavbQxdyI3rAuZXGBhTMgajiadUxg5MKG8M9LiaeFcnvo0gg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuvMXvEcBAqG5amhryMG2ib7EzcImJxhDrjIMR0aAm46kWxqYAtA43cSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFVboTGicF2Kyg3Wq5eMTM2FLsBLjDNucXWJyOGjn08XWsPOiabs01EQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuZnwj9a7jmDsdmSL68HsUNjYEgjreD88eA8wTVjsQTmj3ZQw4kumzcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuKNAaYaTytHubEzumvcy6QbuoHLUVicqBArpmTzibu8HlnKibZZYzxgyng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuyVnpibvebxUnwo9RBbK4CTREcuiavlj5pLKuajyWwuOSkGic7YRliatXpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuOQbA21d9Lb1d2FA7ic1ic18rDctRngozwXSTWO7MgSlPaXnSFiadPaWgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuyoYA9zxOibQgF16bz0P3sY8Pv4CS51ia5iaicuE1loSAeU69dlq5qtEZYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSB3JOhbq3geibyibCojELhydcAk48WcDyutzllVjJ1Ku6Hj0c7QovicqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuHCwrFSxiaQvKKyNiaMNIAV9J0ibCZLFe3Hib6OpCpkfDjLiaTAhZ0hyOVGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuo8TS0uxDicaRZlh7wOj2pniaNyLbjHDFFHDeJ0OganVdd2KDU9CjUzEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMunaSyhGNpYibo8D6hxKnxxTib9g8CnDXiaXgWlibZm4N4EsSxAWSKicwKNRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuyYs7Q2ceETo81lQmOccDH5jyxXVKZBmxMumsibR2Oicl1Mw9bn3ibamjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuOmbOGqwepbGFTicT0tDqqgjp7YjGVapibg4BxBah8Ta5XLOL7r0TUPicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqbib1PgzHGUKBRvBoLKyzwC8p5ssbyib8OmTp8zcNcNASaicYmiaWyuZmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLo7hDtQmrOqM2JBUic3vMkKibDM5q5bHrKlVd9Qiat1JTIs4dT0W1GJqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuAiaKQKXP726WGbYSQZVahkzA6Kb2R7yBWxkg1KL6qcbvuIpkb8ByojA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuUuCBMJ5iaRuvT6gZC0Ope20nmYXl5cmoVFDwE4cW3PrNzoibXJkEOaMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuHgBMicBZiaentQg1ylL71KKhzzwTxt33g3D4bV6fvbic05ibUsFRCgZssQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuicsWp3oiafAUP1Y0XbQe5p9Wqicm59eWY2ocMicOlicDjJicvGZKVOKGtO5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMup8Ekz8jGjKLJibviaJeicKITSyjfKia0DBzkr3d2SxVhlVfDDGNQianrXsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuUAHLhOokkw41Y5sEGju6nuKTw656qGyax0I96tMVlCSCAd8xAiaDibbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuJoSxib5Wr8rxJV98tsHRLfxoVaANAkpzbaUFWI4dnUaHdibYlRWbtIhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuicGgTpiaqd8Xas8LNweocbkav5eVMYGiaFGhc8g5ftrrpgL9bNUURKlFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu5JDC7z8aQ2PxrBx9CXTuQDvTgWJLa1GeWvKTvsFnicochALicDD5nvFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqIkVUYF5LSvmJKHmNQSYYOjkkickzyZ3wiaYgW3kGTV8w1DVZmP2XK0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuG2sxuDGzjBvcOcfkveSUN0jfATqBf6pXud6uaPUh8RlvwZE7GYAvXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuXbKmBiapjEqD7NdXyaIpZEOt5TyVMwJ0PeZQWVQxB9TmLZUgBiaRTagw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuPwHIJq3JwicuEnPuFHtvCn6SzLh9s4deqYncibVd3XoiadiboFibm6ibehCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuqzf0gwgZm198pPKdQLlX2Kea981FErf8JCU0wvFrKpp8jezUUAvdKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuySzONN1sNsPtI6xahicW6u4DeyCQAbSicaNXmZ57G5ictSvNmZ0Fr3s0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuATojKqKpldd1d8HWmic5AWoLfcHCU2yN3y768ZZZTrdXkPaeGAwAqww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu69O6aXegVFmuib02DGUniaEednq41CXZXvArfRibawFDCqovEVGYicQScQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMurmKPdGpWMDXSgR3pibH3TTHgKzvN8HyBpvwiaJaTYyoFxSbjiaicZD5WBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuVoWoF6Uz57wC1sN213RYkzCGNmTJN7JjPA7JibsAXy2KQmdrjpwpoNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu7ZQZCAuJ3YMtEl5Y86v1mVY5hJT5VlWAMR7ibVpNcPWxuZ7giaq7hHBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuvkHFnGmUYGO8VPpdYib5MfqVaiaSicEAopibJ8iaq5g2rkR2IzYBYF6KKVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuicRAqUKuwlq2vEqqWeUlYUH3Lj4Vt7HX1MP4gqY9t5Tsk7Z6nzFAicgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu5VZEzWFibxuR6uoRMGn6TXsDDpMiaRib5LRKt2ImJbG5PeYECvCH0Xtpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMutN81Zjh429OYUt69t3D43EHuibCRHZibgxZCqwnQH88Ju0OvYQxI8sCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMud0BG97obExPDDGMuuXXM4f6NgPsj31ibLCyrhljpQcmre6ibWEeYmvDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu86bibib4GBsaZxeibWKTiaXT5UWQlllgVRwOpHgK6xJpaZIMwX6zqSnrvw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuhUp8sY6EaonMmWjlg2upyUkmodMms3JSRAYj2khZAkuuMmv6MLiaCEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuSOjKicJtbMz59N2avahseolCR7x1S0ozYxGupvCM76lCiaQM3dho7jlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu67PtiaLwia761ribbVnQ21iabwZfK2lUxnpgKM1ENVw7M0KPn7QHR2a3WQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuxNN81Ixib4wFibscpyj4CVdfiaIOWCvXOTW3t1m82lgElyWdQjsUSK2MQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuia4nLA4O6GkrAJA2T0bj2b6UUnvUiaDLpO4517hLsPuX4yBBaBCVxQqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuI1HPeA774cOsRcGs2bj0HYW9CT0MTdAFIpue4lSPtgYxKUYqMdic5Bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMudbYm2dhD6vFyoyhPiczy1eulcDnTy1K3CdGs2CHKJJlcRcMrbTNkAWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu3BeVbmtuRMS52k9ibxdB8EFPTn522gtoSMl5CQ0Z6szy1rwCduFnR8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu3sy9Scah3yK1b4PEVg5VXrc1wngx0I85U2HvLw7SELo0CZCMIhzl3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMubUeYAJ2JHb1OCicbvpucFiazicz96y22L4B4LaISdkgPhApqkaXcPZibiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuprEdqoQBTwXzqP83CoLbavx0vLSzJa5kO79SOQbP0dA9aHLvaWFNQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuLwJuy0eY8tXFJQV36g2uz9eHkhwiaicO2rgJgwEMwNgpJPBTuMGyceHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu0LYcDkrCXDWbicgTKPNgCJorQpg57mmZH5uR9BdgtiaAp4vrn616iah9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuseibH9Ln6hY68CQugvrvOBzy1Lbdc1GC9ribdLOPX2Oh8naiaibtlHOw1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuYfRDHTNjIcSH1vpu9jniaMOTBn3DxBMsZX3hm72RQumiaX7FW8R0Fmng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMulXej6Ezmxe1lic1wNs2lENHMzGzI9TmEFMomH7LnbUWVLlu5vlZcribw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuavobxcgCiaXTP0AYmwXbuZFT8v6ibSQiacDWHyEB6VyMicaJoxSzia9vklQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFBpz2sBDPKUotic9fDqCTufRkkTZjh2DU5Uf9YTaahZRDWobp8IhXlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMueC8xbXBAcuVJw3aeKOvNvX1XLcEtQX3T502kAuHkIMksL6KRe0PX7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuHkhqKiaP0O3uX6zsF0xO7jZan7xwPDyiahFiaIZKwxQnaAf2h2eaANPbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuIESxERWRFibvVFwUkaWYyWkNaRQ1Y93lRtiaPWw7LoK2GjzheibO6YT0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuFVqUxGkhXU2IuUc7uZT6WKaM3iaBWicRxjCYvLC8Q4emRiat4lEvKuKVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu5icicBY1aj6XyLbZAHPf4icSiceGyRE6RgJ0mp3nD2FuLE9gyWfthQ9bicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMush65wJV2viaTmY0GwTC5B2guJVqZTxH8Njo0FJEdKr6b7icxZw3mepibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuXxvwbias0HnoQvxFZd8qzpM3DWUUjLwb0lf4ibC6xiaR0hmK0I8Okd84g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMueibY1vy0ZcicVn9iaL9wk1QL7Fu43cj61ckdreSHxQKt8BJ5C0QauksPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu1yJHibMTd1ptjFNJCQGeCkhWCuNo3r4FPUWRPia9HAibxCrUhELYvYQZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuTcFR8Z290upP5QqOoKiaUIjRlBEyLdhAWnUP7uulHdJPdMwaW2iby3jg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMu2JeiaP79YoZWicNDibaibh0Zr8jIkNnE59zQjbanSGKpRhcd6p5PWXna0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslsrq1WXAYb8Va7M7TjibxMuVbH5mIrWAiap7abmDnKuqiae7qG1csH0WTzFPlH5R1csukicR7x40fOvA/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

《固态变压器的本质：基本原理、设计挑战、研发概况、对比评估、前景展望》报告，结合其中关于**SiC（碳化硅）功率半导体**的相关内容，以下是报告的重点总结及SiC在固态变压器（SST）中的应用优势分析：

* * *

## 一、报告核心重点概述

### 1. **固态变压器的核心优势**

-   **体积与重量显著减小**：通过中频隔离变压器（MFT）替代低频变压器，大幅提升功率密度。
    
-   **功能多样化**：支持直流电网、功率因数校正、谐波抑制、电压调节等智能电网功能。
    
-   **适用于高要求场景**：如轨道交通、电动汽车超快充、数据中心、可再生能源并网等。
    

### 2. **主要设计挑战**

-   **中频变压器设计与绝缘**：高频率下的绝缘材料选择、电场分布、散热与体积矛盾。
    
-   **功率半导体器件限制**：尤其是耐压能力与开关损耗。
    
-   **保护与可靠性**：过压、短路保护、冗余设计、故障穿越能力。
    
-   **标准化与测试**：符合IEC 62477-2等安全与EMC标准。
    

### 3. **关键拓扑结构**

-   **DAB（双有源桥）**：适用于功率可控传输，具备软开关能力。
    
-   **DCX（直流变压器）**：适用于固定电压比、高效率、无需控制的场景。
    
-   **多模块化结构**：如ISOP、IPOS等，提升电压等级与可靠性。
    

* * *

## 二、SiC器件性能优势概述（结合报告内容）

报告中多次强调SiC相较于传统Si（硅）器件的显著优势：

**1.更高的击穿电场强度**（约9倍于Si）：

-   允许更薄的漂移区，降低导通电阻，提升器件耐压能力。
    
-   报告中提到：“SiC的EC约为Si的9倍”。  
    

2.更高的工作频率：

-   SiC MOSFET可工作于数十kHz至MHz级别，适合中频SST应用。
    
-   降低变压器与滤波器体积，提升功率密度。  
    

3.更高的工作温度：

-   SiC器件可耐受更高温度，降低散热系统复杂度与体积。  
    

4.更低的开关损耗：

-   支持软开关与硬开关，提升系统效率。  
    

5.更优的导通特性：

-   导通电阻随温度变化小，适合高频大功率应用。
    

## 三、SiC在固态变压器中的具体应用优势

### 1. **提升系统效率**

-   报告中举例：SiC MOSFET在DAB中效率可达**99.2%**（Si IGBT为98.4%）。
    
-   适用于高频谐振转换（如LLC、CLLC），降低开关损耗。
    

### 2. **提高功率密度**

-   SiC器件支持高频化，减小中频变压器体积。
    
-   报告中展示的10 kV SiC PEBB（电力电子构建模块）功率密度达**15 kW/dm³**。
    

### 3. **增强系统可靠性**

-   SiC器件耐高温、耐高压，适合多模块串联结构。
    
-   支持更紧凑的绝缘设计，减少系统体积与故障点。
    

### 4. **支持更高电压等级**

-   单颗SiC MOSFET可达10–15 kV，减少串联器件数量，简化电路结构。
    
-   适用于中压直流电网（如MVDC、HVDC）接口。
    

### 5. **改善电磁兼容性（EMC）**

-   高频开关可减少滤波器体积，但需注意dv/dt控制与屏蔽设计。
    

## 四、典型案例（来自报告）

-   **10 kV SiC PEBB**：用于1 MW全桥结构，功率密度15 kW/dm³，适用于SST中的模块化设计。
    
-   **SiC在DAB中的应用**：在500 kW系统中，效率达99.2%，开关频率提升至4 kHz。
    
-   **SiC在DCX中的应用**：适用于固定电压比场景，效率>99%，适合电动汽车充电与数据中心电源。
    

## 五、结论与展望

### SiC在SST中的核心价值：

-   **推动SST向高频、高效、高密度方向发展**。
    
-   **支持直流电网、智能电网、电动交通等高增长领域**。
    
-   **仍面临成本、封装、驱动与保护等挑战**，但随着技术成熟与规模化生产，成本将持续下降。
    

### 建议研究方向（来自报告）：

-   SiC器件在中高压绝缘系统中的集成。
    
-   高频变压器与SiC器件的协同设计。
    
-   系统级保护与可靠性增强策略。
    

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHqLYt9ibRbPde96bctic524kcHhIwbibHIkveGkb8X2g0JybRzwwB8RtHQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXHAooERMJLeKvUWpGRhSjnCqV9LVib2pYxB96JYJIZbxWoO2WKCdsGIbw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH30tvo7E5nstXQNS723ypf3DsXZLkP4llkjt2STxBkF8e5W5YgV66Rg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl20uqhsFgicM9uMU8Sn6LXH2INlicia2HTxpJnZCf2akHpWdtIDcPvA9H17KicFkHx3mdBVMAZlyibfaw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)