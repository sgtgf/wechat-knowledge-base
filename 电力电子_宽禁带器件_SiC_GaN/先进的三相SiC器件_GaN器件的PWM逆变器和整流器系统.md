# 先进的三相SiC器件/GaN器件的PWM逆变器和整流器系统

原创 J.W. Kolar, SiC碳化硅MOS管及功率模块的应用 2025-10-27 12:20 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_LxzNqDZAsGlNkM3JbKBFQ](https://mp.weixin.qq.com/s/_LxzNqDZAsGlNkM3JbKBFQ)

文章来源：苏黎世联邦理工院

作者：J.W. Kolar, M. Guacci, M. Antivachis, D. Bortis

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iag537N9b3d1OzK0micgCKhMj17icXqSS483T4za0Xge59KLAfZFtp1iaQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iao22DRocgSCOtbxBhM7hjh61b4Bicka7fK4M3Eib2Z2EOKiaKuuAZzvHQw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iacIUMtydChCw6Uibhcf2MLyIEtfbAEDUhzPJ1uTUQPib6SeoJoVmDN2AQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaj2WsIbcic3rYTaT7p2S3Cnj6ngGPQtrc73ibGUyJlxLsAg4tmeSz4bdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaYA4l5coXib4GeXOcr8crBMs3SI9Z7Eph2jXXvibvfkp281xHiaYcFWEJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iavgRgXviadH02oB8hm3g8MLBKxbvIBTpQm6iaXtK55Oeo0iawDenCXcFjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaqqXaTJFupJs60AiaUGWribumeym28D7x2YSvyz9UtAWjQiaavYbpc0xtg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia0FEg1kic9gHIfZqF5UapibJaWRHC196c424LkRdRbP3BKyg6VcdichHQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ialrKY3vSWBTDvibgpibJBUygDuLAISib9rwicicowMKEickgX5Cc1eT15fykA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia8Mss7ZQpphbjzgfBKibQjeibuLBvRSLGF73wbrLJvNhEtUGZfcOUYlvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaBQwicW5jMp4hE6C7yNLnZ3tWrlsNTFsOgR5zzpZfEDFamGQTVGXfXag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaRIY9YN2LZUGBEiaicu8zN5Y2fIYcOraDXgTZGs7o0AyP9J072p1OfKnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iadVj3Q16yWktibBoHVHG8ozXRkVHZHxibGctXLXTXCvLChM9TWVwdxcBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaCZPhchxZRK6gzTgJNdlmn7zyRg5Mp7vGGsuayCDwwJ71fPR4JJQuFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iapwePaiaYQusgPnIeZTmBzhfhx09Owoib3HS68wgj9yfCWiawOOE844fYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iab0xomn642ujmHe85tOfEs3eddmOE3d64KAyYia1ibiaKjkFA9icDjv0Mcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaCkqQR9VKS4xLRVrOPUzVUwtkWfBEpdDRzbFgDL4QonJfTK3oib7tAIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iacsiap9ficTecqSFsuibpZT6xvHPY8bN0aVx374zCxO6Drd7dHqNKtkDCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia12YNo7UTnHiaY6TTjq4PERa1M0SSozq6N5uWYNcfmcILicReyeicCZodQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia5vIqwmibg7KPOPKuTpvTZUjq34jiaRL4eaQYXRzkpOyY8DiaibmvmyMGzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia179bL0PAm5usnTZ3Mvhnb9iafrrHGSZKkVsW0Q74mNibRl4KAwicJBGcQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia8aMD18JvPwicoxibBuibxC08Abmcj2z1ib72Pe93ibFLOxDw53iaBberzrMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaPhQW3iaIk42MqvWqdzib7yqkNlTwBSClV85FMa5FZed97DqEDuzTEqtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaxGHT3zNoqpzF63UcXWibX6ZzWkXXUUSicxL43qXnKv8bG0LA9JUia3t8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iagJrQ0fpp8YRvlI3cfGMibr8yIHmQbV2SibZQicv4ibLSz7ftQEb5MVpUdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia5WJIunzxEUMll2Ayp98QVLOrrytHV5FZxsb6eEN9jzFzXKD4UYlUOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaNlXPHKHzME6a5WicRzcE5aUfER88lxibEwyEb0Tkuw49rr1ibguM1xlnw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia9j3KfTvZ4nBIwVUibZeib26P37Yd7EzYSFDAMmBaOWiabKf3sIdj5EDmg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iar1f2ibfz6jmia7khiakcJ8RJ8aTWzicBicRWRw8czDPmQOLoW638fCroZZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iagptzvWxw5WicSpGeZtOB1WpZBRQMHQicWRCGYphw2PiaWwhBOBWY9QVnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaKpkSVmYTsYM4tDM99ibRkk45lwFIFjxbia1D1ib2jBdp6GiccKkQTYRe5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaFjVZ1DolfmV5ualrvF8FPXC3Ze58W22xKzIQwE8K6HpDYyHFokLftw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iahrNZyVyjagA1Hxh4jonYAPr0KNcAQQ0xOmgmhGuFJqDXfTO3puD7yQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iauPhWicLibJFQWTxPZ9MTVfvotp2ukXOt6oFqAfEE5WVtNa9msll32o3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaJzhrVpo6djib4j404fDN2HGhUrTBpZia3snicfcJyj29eR3D5rBZq4HhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaiaITNCjAktBWROTQQgZGQTeuClySCC6lfnKZpwQib9UQdkC5JyJrUZdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iasDvGC5PYnveZQU3qHa5bM5biahSTfQ8jsToPuia9yTibI2ib4kicu7KSQ3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaYBuzMucvgHzd14ianJMxnHyXyl23qX8jRn5y50nvYOIeAp8HLo3JJ1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iahxjA82cLKNlcMB7PzgSIoxNLUWvNbFlVXK6giazwq7qunlleh77SHjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iam2mxGicGJk1Dvd11SRRZXCu2DXcvibWibpHF5eMdAfqej1uQECCMgm1fQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaHeBicTib2lBDEJ9LsLd9kfPe8CJIAZ7EFZNjBLkXCAFOBD74w3bj4Eibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaDuJ1IHMw7pGh9df3UqibfBLQI8iauNW46N8xkMG0pO1xXX7QErSYomqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaeNEEIsngVMGBXC9E061tVtqhNOq74Ubn75UjDKQJCSeoVMrgQwJ2yw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iajPicCSElNcAxibhqIibClvspzLx7zGfnibJbt8h2zvy0FJreicOIXwQxvBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaib3ceVCuiar1ohqOrlldPqR74vjau75tSHvBJPiaHCSKRGdDzyianFQ3Gw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaXHr8eibmNr4jFMzqElaLs2ydf0A6Hv8LK44kHX3jw96dRwQgub34VKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaeQGs3ph0aRGqDPTnHnhxFI77ibOKZmqPsK1iaibhbSrAHb1Uxfcc7Ztuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iavOibjmVY4UnTeibDJtsxoQIzHZG7YiaEpe4bicb1Hg40S2ricq1XNiaSwKrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ianicR9SKWwWtiaEqDCCuI5gFgSN8W56c1NoVhOdLiczcyWLTZNDsBgfYCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iayeIUibqJX1rCH58e3e1hDMo9nvXlyIEWaN17vHxkPGEKOibHmLGpLwVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaMlUSg0MKn5F3RfMGKzlA7K5iaDd96u3CvX4WMv1NicfCLBM3V5VKrszw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaiagJA4d0ic5D740TicVhVZRsNm0Svgdn673EMiaU83QKicMRH01HMIFR5hA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ias36Yfj0Vneu4NeFp40PoKuSYOIW3iaulICkiaoB82IcA0tb22gR2lnug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iavdv9icSygx2KWI5vLYWUWfvOqib0LRQkm8ND2rttsib75Fs5icApwzRiblw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaTr38VrphibGtqYibYibJqm6pDG6ibUK4TJSOKCFaB5VFpq6NPpeib7JBypA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ias7Tj7yeALylKh8pzWlZcfeh4bjzR3DqPZtMw1auZsPd4FAluFxz8MA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaPBib04eBuff0Ob2vuYWnx089mgeiaKlqpO1wULNVibBnqhwc65ndKlMdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaBJZUiaMMRalib4EouEHNEPo4bfiaWe2CHKlmoQf2jjbSRVnGVocHAqHWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaucgob9GLackRiao7icgw53jCt25ezR3q2OKPbicOiaUIbhabqc3wx2icyXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaFaSjpzEicqicaM5nz2Qnibic0eHzSqRAImL2JicWxwWM1wpnXFlmPtVmX6g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iahNicmrxrwRZANaiabSopYum1OiafZRgIHicPBgf73lVYicwK3XBITCRrhLA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaJYF2ztLj3Cgbica4kY0GEJ8rQINTnxib71nRCS6AMXsYOdNqmITYVUDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iacibnrBcmy6KGQ7Qc04HRn7VBibuoKn1SzLI8zlFAB8ZCmhoTJWBnQTbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaib46hqlqiaac6u0dQoVKlTx23DwuJmamibXxzde5y3DSHnyw7JaQCQaicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaWVONJboOYP1dKe6eq76h3LAEflhfYN7H6sOXu5XFztvibCH2TYicdAyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaTvo9qbibhAczWFMibibvqYib8sVkAIydzaliaYicuEicpUGib4C4aK1cor3dfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iauNWlMx9Af4NZfVXKO040ibjXQhB5Jm6C1DpKE5CiaBcSrqSHO0BiaicP1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia9Zvsdo9GoFU3F71B9B4rku2yccWnZbZFKlOmLMCPc82H0ShWVFKwicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaxSG7w5zl4hBK6KP1guDnU7sg5V0PeJCMNUsE68aqiafmILlGLZE6nIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaKIl8uhAtefYTQd4b7333GvamIHZmclGsFfHdm1pdvHmUNwWJgtGxPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaakDJMz4M2DT51ULRBq5sD7gkSibXqgKiaxgbUxokRNxpTCWGFEsrPj0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iapgZgJS417osHicQ61GHmuz9H8eEAxGb6y0uD303Tpib4ufOgd4NhAn3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iatsMkibOzDrIKyWN8UexWxnxQ3JxftysU9KP4rRFnBNTy6ic7OIoTichaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaJqjclhRI19xed8PvE4UU2JB0SOyjMKH7gRmgQomJJwLQZo1yPMWqGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaRTQPE3640FsLAVZQMWZjVt59vRoMJj6cNKsIzvEOJOIzvUK5vkBvvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iauwDf9e5yuOj3zF2M8OkPZsSMu3HERkwlcFeN3FaJOhy0ibpz6KC5B1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaIcqsbTNnNsicRRo01az3RzEuOwWzpJzHI79XIYYG8FYPt9rf8Hy7nkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaJAKDcXuRgskScbxibFFKqDv9U4ExEw9KfQHiaOOw0Mk0bX9C8Rn868kA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iah271pUsR6OWowjuicZKcKibveq5ENwMwXKmn95ibCGtLYvKF2ITH6fJbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaIePZYibQUjsYjsHT6LMfNlwDbST8s5SiciaPwbau4bY3kVZsXl0Ek9EfA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaXOGc4a9EFlPPbXINZgwaukQvm6W1T17G3T5wTXyFQV8rpRO5icmfBeQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaWocPMDMlc6APpdE216Ey5qjcKNn6QVibqZD3ibLvXZRuINUV4qYnkCPQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaiaJAQvKibVxJicd2nbEgzDNMibAsBuyewDf9AfiaRibVFuMI18FuESvKGSQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia3Gu19HBTeAKHqsIGg251XWf0wAuPpIUe3vvzicg20OQr0P1M5ibMrUWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaajvoBHwiaicd9HoRCDoe5gwbLhG5w29V8ACeIeYHicvicSNoiaWgxBQ3UMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaYicMfKicVEZR4wf9AJuSqoHTlKkLYLX6zAO9ic48qJ2UrxE75DTxwwicsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaAVNNxmHDJPvQfnicdWs6ppaiaYbLpfFCYYBDMHOovX5LnN6icvP7jlMVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iarJT1Ph8P7MOxFgOmapg3xEz6uI5X97iaAtIDKy6N2R3qDspIibN4jZJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaZFibmEf39odGAiaOUoqgGeyJM7rAszBDYB8PMkG2TXNAya5gOLF1uWIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iabyYDfOkSdlavVTU3jQezbUFtbkz0Q1AujbeiaUibcuZGEakmhnJrHZ4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaUBeE4NqCA1pz9fBF9nG7WoibHkOqV0vcoI84pz8mHZb651Rxc0VP6eQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia9cYibdws24NVmohicFy2UGcF7Mkicawxiaom1RxncAXickgbtSib2Xdbj4DA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iajUtpWO0y3BNNzCXWn2IJ3ygcfwZQHDLH08FENQFMialAWRMhXj8YBYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia2JPQ7QQaibxTl98D9wvZPnN1WogEdIMYMPuthmoZYicg7BszB0wAxt7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaFcaw0cTSFTKoSBQP5gbJ2iaVtOicAv1QxdiaZPZiarz7JlmRq8m1n5WUrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iat3KicrhR1fUI3YODaY2dQP0NKaZFWz7jc3ZqFtVrS54OTOUZ2mZYqNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iasqEcJxK4HHdSIv2874Lps7d9nBS6JPVySPXq76NB208hGYJDHAS3cw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia468Ih7GWdeHuboB0SL7fAibgDU20BvHG3QRlicYcNg9ttaicnuAL1APmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ianm4K2wrJZNrJb4Y1jemgvKONBaz6oabticcjm3M3cBH5OqJ9avC02GQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaUyJdDsZHibeJhyib6NpI8icfs7PiaGteibHuuXFV5icHHfHGiamiaic9qmnJXew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iafm7InXMcJrEMudLibAgGyJu3P16wRkcbDfc8WibBkWUIMJEe56batbDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaOQg7qxz9KSzHX2I9WXSFNdibuicxkOFVOBiaOGeoBTwgUCQXzw7D9VFibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaAKvNzPLFpnuyXweekWaribm8VaYw4pXNAjvpBAc40EvNDOCtj8Ak7ug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaOWhCqicZSqEABhVXKG0Bic0UsUVsdgazPf13Byl086JwjZI0LOGv3G4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iadoYfs9KOPhMfkdLcmqZOL7VelvWdx8XGewGmtZ5T5vAyQtoKZuGLwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaaz3Q6MxwLjwoiad1ibAn4auBVd2qNjpYG2TEkAHeBE5bSH4xaeQW4RIQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaTj7thPvfL56zTzuvX58F03Iu3XAicOYqTxdVraumKpBbuvHia7HgpGug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iazJQjtPMFufULpgYCp9dU0STUG5Ih8Mqm6bdmIp4M4q1JVkiapJZSlGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iao99jVKciahmaGnV5sANicPTre7hePN1EiaDZ7GKPSICia53p1XTulwzbuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iawHr7alL5kwXNcjiaubKgZGhrItfoTEawrk4qdqFyVngWTzZCpHJPpng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iabXQ7AECkCQnrLGY0goiaicIyGczk1qDquTjFYIvsSn43Mianmr3bWiab9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iajicg3OOkb7SAKYK8e693KiazhoEWwLibT1BLBk5kZRtjB0vC3PoFKQJzg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaqh1QK8uMdiaMTbTN0oc1nM0ic3xP4aBZptJ1gibGqWKvECXc51SGia4zFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iahJsHKRD34QDZUX7M32rNNhHqnX1zynficpC176ePibGfuHKKS3icH0IdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ias21ic6HrziawWlicBzkuoytS3C5j3kmkUVprvHicNhSyc11ZYrCPnRSxOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaF0eibFZZQB1NibFicjHpdzZZNibHc2IZoTMPxzZntK3J95wniaCibWIV1ycg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaIwrn0ibhYprtAOfBiaksvzUIanyg6lg5E3YPjW4UM9EWvK972L3nicaYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaMGZTJSsI1HdIsibxVqlXOcvMicZtqheEa59f3wQMr8KdDgWMiadbZu2jQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia8RsDU4gIo1L6qg1Q09ECVDg6R4L5icPvtEiaJQflrP0dMHflNHPHJPBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ianawIxO85mZ6Ugu357USpwXKWtgL8MRW1HfME67GK50YpDkezZnwlBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaeVg7ia2QhzOzo5Bn3EazoccD5tJwRvUs7UTN0tOfVF6zy6xTsxg8Ikg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia6GJtfkLyIfVPIdlEBQ9GYXV8tyZLbUmBQVfjib5cibqzf4fZ0V2O0c7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaFgicUlHUuRrUNlHdG5zO7qaLLKttpOyZYDDSDVIrZbsBVZy1qKN8VEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaxpa1IQicTtZquKujyc0uN9WRgvTXGO1pIbsM2GXpnSlzibhqwpJNwmgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaYtgTxazHNICGsPqP7oxmnxznGfCibpx4ukxmfY85copxUCDauhSx78A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaqyJrNo1ElyeiaBRSYSa2mJV5XicICu2UqaNB43nSBCL8ryGxTLibNricOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia25YmUFDopBlFmMnXPnXFO5MQ0aAmCxa0pFO1uguQMKMHSRRagOMHRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaqaU9o6MDBl8Fub6NicjcfZ41nya6kSffqH3qR9tTUFwfhoOvzT3bYgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ianWo7VU9HVG0ibCyn1I712BTAg0zrsYampjktMqSiaEdtBwWsJShOMhDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iagnYwjrIe9iaGnEnI5sabMibstfzKmMWLU4TAia1IZPyPEdU8qUR9dBY0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaQCT9icr5uRxiaBGgeGWsDDKiaxp9SfFpmphum17M2bRNrnRMOn3RbKalA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia0rcqHoPtszfZEgzpgCazxEdcG5tDlK0wjmicZYbZPduYTjPVKYqdRkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iahAtD7tt8iaeUMtexBvEibw8VZr1HIibM7QA4bflCiblQnqERFAIiawy921g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaxZrVnQlA9dCVUOibWSHtmarYWLrvvKdpp2XRywjQq34Zlv5Pg52VkRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaoNOibAxoQGyraSyYbrkFqYicoKOXJrXdcqCsovF0enx7q6kibA21icUlHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaUoUYdibfQE3Ax9It5gbqMh71jsBkpT95BgFhVgqxATzmPkZCibz0icSxg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaKFuKXibuZWCrM1S01WWgsTer3vDWXODLq46hQASvT5J7tCF3E4QJHMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaUlTOQLdND2xf5Wqu0ahn5ZEUp8sZbO368mPMacBKpJosoxyZg4OonQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaHV2IHQhOeaPhYk0s2VGJF4NUjGcdU3qldCGB8netiaJxsuFEa9nysibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaibEWIk6yTQNBZqrq8optQLCU3CT2ScNFuL2bQ8Wiav11nWzicvCTn2txg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaOxcdqjoOTUicmjNa1gRqNibEFibtOhWNyInF8ZXOicOASohS9icOSiaibZdLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia2RT6crkcibHtIlicKRLULsUN5ejUdF3ZzMYxVXhDiblWg2qdExeQiaNM8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaD4HPX1icUvk5A2ia4N6MEhFCy9WnqNKULtjaibnZrxx6degNEREhibrZpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaNU0eIicRJQk43nw6icMldnqFTGKPiau54ngqBRdb8DicbU6aClt71UxFEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia7MMMkQDQsZkPV2pWhibYM9picgJibDoAjVj2TMPk1EPVjyEkG99BxnvQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaQ427PRm2ZPaF26ibibLXlFd0u0HedeyVZegeVKc45qDQg8gZO27sTauA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaYgQnY3CWsSzW7sZBuf6qFxz3HwUBjN1icIh8rDhUMLr7lRtPH2Hxlgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iacZtwjetYA8bvftxZqWTaglogB4IVhOHEL4nzXCzAsrFjw8yfuLLNZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ialN7X5ANEkeazAwRSs1vz5SLBgXvciaQCibRzbHnN52SGvhaaPPf5oYFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ian5ZibzwibSyWd4icn3eibicmJoa3rvv1E2mNIHYb8qzKjKKWlr4OoID25zw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iarIrz6zPhZNsQ0rUk71SN8ls2JULNyMKbbSS2iaZIzhpUxiaVnww2LvdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaDJrgKa76TWQtCk1HnT76tOgKFB6utLFdcFJSiaUaUzBQzSRm42ugUmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iapP3XJ0076Vb7DvYrzy9neDO7AutrsKerv2C1HA5UCIM35vIMv9Fs0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iadSKKdVWKlxXia4VON5jruPtcCD0RNNQ8UAL5pKx1gOP8WwvLuNMsWSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaM43HoLjohCDa7Uv3V3BYmdKPoE0aW5hCiaZjpnCyQyXPAZXlicTd1S5A/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

### 概述：为什么是“先进”的？

传统的三相逆变器和整流器基于硅基器件（如IGBT和MOSFET）。而“先进”之处，核心在于使用了**宽禁带半导体材料**——碳化硅（SiC）和氮化镓（GaN）。这些材料带来了革命性的性能提升：

-   **更高的开关频率**：比硅器件快10-100倍。
    
-   **更低的开关损耗**：显著提高效率，尤其是在高频下。
    
-   **更高的工作温度**：可在200°C甚至更高温度下工作。
    
-   **更低的导通损耗**：减少发热，提高功率密度。
    
-   **更小的体积**：由于高频，无源元件（电感、电容）可以做得更小。
    

这些特性直接导致了系统在**效率、功率密度和温度性能**上的巨大飞跃。

* * *

### 1\. 核心组成部分

一个先进的三相SiC/GaN系统通常由以下几个关键部分构成：

#### 1.1 功率器件

-   **SiC MOSFETs**： 目前中高功率应用（如电动汽车驱动、工业电机、光伏逆变器）的主流选择。结合了高开关频率、高阻断电压和良好的导热性。电压等级通常在650V至1700V及以上。
    
-   **GaN HEMTs**： 在中低功率、超高频率应用（如服务器电源、数据中心、高端消费电子）中表现卓越。其开关速度通常比SiC更快，但电压等级目前多在650V以下，且封装和驱动挑战更大。
    

#### 1.2 栅极驱动器

这是系统成功的关键。SiC/GaN器件对驱动要求极为苛刻：

-   **驱动电压**： 需要精确、稳定且快速的驱动电压（通常SiC为+15/-3 to -5V；GaN为+6V左右）。
    
-   **驱动速度**： 必须提供极低的传输延迟和极高的dv/dt抗扰度，以充分发挥高频优势。
    
-   **隔离与保护**： 需要可靠的电气隔离，并集成去饱和检测、米勒钳位、过流保护等高级功能，防止器件损坏。
    

#### 1.3 控制与调制

-   **数字信号处理器**： 通常采用高性能的DSP或FPGA，用于实现复杂的控制算法（如磁场定向控制FOC）和高分辨率PWM生成。
    
-   **先进PWM技术**：
    

-   **空间矢量PWM**： 最常用的三相调制技术，直流母线电压利用率比正弦PWM高15%。
    
-   **不连续PWM**： 通过减少开关次数来进一步降低开关损耗。
    
-   **第三代半导体优化PWM**： 针对SiC/GaN的超快开关特性，优化死区时间、最小脉冲宽度等参数，避免串扰和桥臂直通。
    

#### 1.4 无源元件与散热

-   **直流链路电容**： 由于高频开关，需要极低ESL和ESR的薄膜电容或陶瓷电容来吸收高频电流纹波。
    
-   **磁性元件**： 滤波电感和高频变压器需要使用铁氧体、非晶/纳米晶等高频磁性材料。
    
-   **散热管理**： 高功率密度意味着高热流密度，需要高效的散热方案，如液冷、相变材料散热器或主动冷却。
    

#### 1.5 布局与电磁兼容性

-   **PCB布局**： **至关重要！** 必须采用紧凑、对称的布局，最小化功率回路和驱动回路的寄生电感，否则会引起严重的电压过冲和振荡。
    
-   **EMI/EMC**： 极高的dv/dt和di/dt会产生严重的电磁干扰。需要精心设计滤波电路、屏蔽和使用EMI优化型封装。
    

### 2\. 系统拓扑与工作模式

#### 2.1 三相PWM逆变器模式

-   **功能**： 将直流电（如电池、光伏板）转换为可调压、调频的三相交流电。
    
-   **应用**：
    

-   **电动汽车电驱**： 驱动永磁同步电机或感应电机。
    
-   **工业变频器**： 精确控制电机速度和转矩。
    
-   **不间断电源**： 提供纯净的交流电源。
    

#### 2.2 三相PWM整流器模式

-   **功能**： 将三相交流电（如电网）转换为可控的直流电，并能实现单位功率因数运行，谐波含量极低。
    
-   **拓扑**： 通常是电压源型PWM整流器，其拓扑与逆变器完全相同，体现了电力电子系统的“可逆性”。
    
-   **应用**：
    

-   **车载充电机**： 从电网为电动汽车电池充电。
    
-   **服务器电源**： 实现高效、高功率因数的AC-DC转换。
    
-   **可再生能源并网**： 作为风电或光伏系统的并网接口。
    

#### 2.3 双向系统

最先进的系统可以**无缝地在逆变和整流模式之间切换**。例如：

-   在电动汽车中，驱动时作为**逆变器**（V2G），制动能量回收时作为**整流器**。
    
-   在储能系统中，充电时作为**整流器**，放电时作为**逆变器**。
    

### 3\. SiC与GaN在系统中的选择考量

特性

SiC

GaN

**成熟度**

较高，已在大功率领域规模化应用

快速发展，在中功率领域势头强劲

**电压等级**

**优势**

，650V~10kV+

主要≤650V，1200V正在发展中

**开关频率**

非常高（100kHz - 500kHz+)

**极致**

（1MHz - 10MHz+)

**导通电阻**

良好，与电压等级正相关

在低电压下**极佳**

**导热性**

**极好**

，易于散热

一般，对封装和散热设计挑战大

**成本**

较高，但持续下降

较高，下降速度快

**驱动难度**

较难，负压关断

**非常难**

，对寄生参数极其敏感

**选择指南**：

-   **\>650V，高功率，高可靠性**： 首选**SiC**（如电动汽车主驱、光伏逆变器）。
    
-   **<650V，超高频率，极致功率密度**： 首选**GaN**（如数据中心服务器电源、高端笔记本电脑适配器）。
    
-   **650V临界点**： 两者竞争激烈，需根据具体效率、成本和散热要求进行权衡。
    

### 4\. 优势总结

1.  **超高效率**： 效率可达99%以上，显著降低能源损耗和运行成本。
    
2.  **高功率密度**： 体积和重量可减少50%以上，对空间敏感的应用（如电动汽车、航空航天）至关重要。
    
3.  **高频化**： 允许使用更小、更便宜的电感和电容，降低系统成本和无源元件占比。
    
4.  **高温工作能力**： 简化或减小冷却系统尺寸。
    
5.  **系统级成本优化**： 虽然器件本身更贵，但通过减小无源元件和散热器尺寸，可以降低整体系统成本。
    

### 5\. 挑战与未来趋势

-   **挑战**：
    

-   **成本**： 器件成本仍高于硅。
    
-   **驱动与保护**： 设计复杂，对工程师要求高。
    
-   **可靠性**： 需要长期现场数据来验证。
    
-   **EMC**： 高频开关带来的EMI问题需要精心处理。
    

-   **未来趋势**：
    

-   **集成化**： 将驱动器、保护电路甚至无源元件与功率芯片封装在一起，形成“智能功率模块”。
    
-   **新材料与新结构**： 如垂直型GaN、氧化镓等，以进一步提升性能。
    
-   **AI与数字控制**： 利用AI算法进行预测性维护、优化PWM策略和自适应控制。
    
-   **更广泛的应用**： 向更多领域渗透，如航空电气化、超快充电桩、智能制造等。
    

### 结论

先进的三相SiC/GaN PWM逆变器和整流器系统不仅仅是简单地更换功率器件，它是一个**从器件、驱动、控制到布局、散热和电磁兼容性的系统性工程革命**。它正成为实现全球“双碳”目标、推动电气化进程和提升能源利用效率的关键使能技术。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskQll3rpv1KibrCibnIfrozz2pvx2bZoXVeqhAA82LbuABZPauHaDr8oHwctcLtus0gk0WcUDibhxzXA/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=79)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskQll3rpv1KibrCibnIfrozz2mZVjFj2jpYMnrU4DNVfbkiaX1zc8JRqHB1F172z8iaIQcKLFDcNS8Z9A/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskQll3rpv1KibrCibnIfrozz2suvIEWkfdpWcWp5N4EAl6aGsxdq08uNNRMng722Onj138ZjzkNPhwg/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=81)