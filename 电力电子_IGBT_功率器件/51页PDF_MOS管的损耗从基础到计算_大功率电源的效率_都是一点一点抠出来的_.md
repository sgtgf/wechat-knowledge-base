# 51页PDF，MOS管的损耗从基础到计算，大功率电源的效率，都是一点一点抠出来的。

原创 王工 硬件笔记本 2026-04-16 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/eo-3xkjkjbpE5ZLVhJmnOg](https://mp.weixin.qq.com/s/eo-3xkjkjbpE5ZLVhJmnOg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

分享一篇来自咱们知识星球的硬件基础内容

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaecKLN8w7sIVSMricxoXQh48LPrY6YGp8RJ0Z1nQwOGibiafWEdia220UUt9UlWI0mj2ka2xjDEFNn463zFEvQCjRusx2Hicu2wtNXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeaFANYeTcgIY346xAFGIiaQBYHjbgVoXELQJzSUreugGEa66D3gJWqAmhSlLPZNPpb2zw4ARzgvuTtYWicXVq2SrosEkDARgYLM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacfB4wu9kK5q3iakhAJuiazGdibiawOYAcUibNTpDlDMmjvZE1GuaJgG4jz4KzUULuqkNoB0MP2lzaQzdfpOI1G4wgFKdXLknOht518/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaclf0dGcGGDKbHUFcJiarLe9CewMnlEXTCiaTPAiavQhE24Y5icFkakITwaRcGMzKTQ2tmtclXOAxdibZF8iaFqwHrgkvJicH1ILec08E/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaezficG5wv3BsxTVswHQTZRd93cGAHC545lCfK7gKEorD12fMHC7xWRIIJqJ2C6PF13W8h3n5VWfiaxN64OqEz1HB119fSqtROQ0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaexOydkuCNy0KbgCYwaN2z0ia6Ymp1Z60ic1hty5XuYiaWdAklWLCtt1u5lSCwt5HQfgkXfM6VlULbicSqNacRoIdH6Mfgt3qIxPEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadibDURbUTXTSzicibicsA9ZKkhqUj4UNXsd8Z0vcuhdgC3ELQYauia9SaUDZvR9XdibyGYpwF6P0b19ZCbEpc7EWhVUedq5LDibHUBCE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafRraQqWsE1SDMlVzt7Ojl0gl9h3GWiaJJlddjDD04uBtvfAiaSO9ticVBKQialvnxKhC1Gpn6Bp8bRgzooiaSXvpw2SDogZuTgTyh4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafFC21lVWosR0Jkadj3icYcKHtHFsKwWS6IAFwVqGZKPfcugsgiaS5FfIicBjc3RCVo7mIs6m2ibzjYeia1LbUZJKRX2ZLdPBzThMw0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafpwYOPGDWNr2McV4UjAzDtVDg12gACrNy9GHv7s09uIKyPzB8zlXgCdiahVItjQvjuWVuibAUWtDdhKDd4vTb78233KCSgXW2eo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeX99c9v7EibC2o4NILVpeJfqxgKL8RFAIxFic5o1IdxUibmo7ic2HLG2wFVq0cMTVYKum9Kd9qfNmvf52At3RenpuC5LPiaNpNwboo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacG3N7FFAvz9EwYfib965Nl5gxTTPL8hpQnBqZiaWqciaGdPVuyibLkFEWV2mxibys5l3ibHS7LiaItBk6gvRzQA2Pwfqo7PVUXicZ0z6Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niad5zjT7Zn6ZSn0Mad7GNSEjUVDvYtf5Pp07b32vwua8Zoa2lz0CORvhseiaZzvA1MgD867lkoq9myUpqJsyLXFAPyATAs2tMzUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeA7YnbPKezKaQxpMnlzJMGXfNPbKa6ickVk8W0Xib4LTmvJODvkpYqSs5AGhf3sBzjoJrXBxwkibpa50w2u6MUx1B2mAeH11c8Do/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niackaHibxPfSajfdRXhsiaFzBVv62YwGLlDvGek8XibOkVGLEy8VHGfspEEXITkrNMjaS8J5EtwQ16qln7HohxX2mfs1x2bXgBeMTM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaf8LShqhKXWFCqpH771X7HtSKS3JERGLxc2Xtl35aqfFvSoM0icyIiaFZEqhpM4w3kzmMM1f2Ehq6vUVozQpibo3tEv9ibydXic8hzE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadXIkktMgV0sDTtGneflHAjIt4Ncj1oJkic1e1RPx75z7iac8H32oHEIkST4tI4wA4u18n53E8PRoX24OmKljaMbiaXXRq0vaibiaEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafYEiaXv1gCxOBlwOGPxGk9SQ4vDPAIpP67KHFA7OWwVWo7wJW8xB3ibNa5jWxdOgXtiaVajOCaFCaddEV0LnPNZ5gpFBpYd5ibBQY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacMwG3OLDg4CicorzZA26f2IiamicUF783oWKDKF0P8f1SVjDtyk4tocXbjYYeNUZJtymSe2KR9y4k22naFayNEWZtlQOWnmBOeOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaclboSiaybibUQeSDT1DKPty9YBBIcWCxVqe8lc0PYacg0hAtLgjcuIb4hQ3JtcLILgq3GIEOQvwpVKM2IiaSL9VwOT01TVZlNkOk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaf4RUJwenIdHzFmqzyvQLR9rgjDMMuSDwSyJqCNnrrMx4TNkdNjYd6NSEpx8y4lHSb8QE6rvQWFMKEplCEFWJln1wmniczct1ibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafSAAzmwQrZw919Lovdn6pEiaogVW6icF7MdVNGPCzafKCmyScAJB3YAGjGMickFMf2iaOkjI8zZ78QdcCR98uTwgg6a7zaGw58OTo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacdqZDed3JGMLbcccbp3OAwypbWjcn3a6wKKjXuRj2a743ibwRt4UjLhicHb0Jf4c3JIfmD3ADIQEIpvlicSk2aaVcItzObEJgJlo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafYrOHqZqBMVK2JVVnAeVibWPt5oVbV5AsbCZp8DzRzLgDbdQzqmc8d4kUlQ4XCAwJVnneKW9vXZ8LlCpqYFyic34a1hgVQ5UVgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaekTG4jtvm1EGnicyib3H6CxW4aYW0ibbkTLCBV03YXiaD09OHvnOFEGolbSTia2OS5lzDU6r2UbNW2ChQBVFoBT1eKicNCymZ5bX2CA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafdicEuicpqGVGaJtibQYXBjLldHZwnxyHuh8YHpnjsYAqfcptoeSpzyuXdKXNWmNfDqrq2QvpxZq8dOiaHW9SWle7qVH7azraJ1fc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niad7Yv6OhZP8lYdd7EJFC0CgFUuNv1hAxol2Y2QHicECYGyYHMvGkOa7MeKYgiczkYicbFJicnn0FgQoQjEL36fia8PxBgvtHV4U9fX8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf5icicG0kP85icxBMTXHCgiberM3ZWLK1iaM2iag7B2ibMlbMH1PfO5gc2IgmpFs5FhxmOlMBOsEzguUg2YZ5PUjTrqLNKsst2qiaQS24/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeogT1zJ4dzkYibuUzGMJhmNKiaD6uG9WX6DkDgUn1CR62nUyzJYbHpglM4wd5RHJlNWmFiaIw0cMVg8UUXz3A3rt8GDwfu5kFPrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacm77u5sJv0vATd35M6RtIb2JrRUmyMqPJ4xp3biaM2r28HnFgJe5HkPpNLuOtPKf6IVhB87Oh7CWjLThZWwWg7G0Zefibkwy6x0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeBXqB5rEhATVjv9AbNXGqcKXfoZHRJxab4TfD87JiatFfbrYSibPsPe7xF0JLW4cIzEup5ibpicWfIWpVhBFmmo0bnLakHCSjts5M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacc0EeRIGqg7RO5PicdxZDnrgdxpODbTnn03DiaJnNibBAibewTPRBn6Zg656G75ial6QTeN6nbccIU4wibEMpBEPuJDrIbNuYCcMTmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacnCd8w3uljicuTw6FyKVak5icMlL7N2skJZIa8nVsuwjQhMJ0PH11iajUG7boLYibnJ2QyVoPF0k8ia2j1b2ggFGe9qicBb3zibMmSzo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacdP0nQQaLeVm4YCUwVVA7AabqsY3loLPywwJZicC1JKmDwgbQL4dfPas7WiaQZCqZeTE4RjOLUfoU2yf76UdLuWX3BZwzWMrpXs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafKibFRs6VAI7AxxB1bGCtiaLYJCiblrMhG0tdv3EoyAe86bmiaydlljRTB7Iicib6dbeSWMLHV1dRqUxiaQUIQBicichcyrAZPPNRtkseQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeFQRXlrATZljOZLvMhKkbBrZEWcVZlZUNf6S4FDvhRtibUXpL0TxWjPLEQEvdjo62ibVduzsY9I6Bf3IHfqvQXkwo1Udc4fzCrY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacH8ZOvK6KGlGw0Ybh1y29nWL22eMmeHUtOaicgX7qtcz6MibnKhssxiavNl6gSyt9PH1L5r0RKtMaBRngwicWlQYAiclyRUichVX2YM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafjL6JOOrRwPeXZZZgD8Un17NsWfRbnwhUibhz3EOGIsK6hicH0mlobB41mus0U6DqSJRmq2osicE6PeYvMoXSFTZfPt7QzG6USPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadgr2u28N5JTiahHqKiaaKkmBrkDtV4xC7SmB0d310V8MhicGgiasn3QwXNHQ2CFx2FGc1oI7ibrVamhwAMfxh6byCtlQxAaF8ZDk6M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeN7NT7fNIFHYFhicQq95nYhHOsUSTFNmjyNohH5ZUoUOBQATEial7SKe6FNrC4fSjGicXJ5nn2ibV1orPfYWfQXMvMZ8lI4J99yiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacjicHs9pn6pQoEt627CdJ3zbr3XDgiaJ3km4seH2SiaX7ZaDcwotZu1l6icIxicrkibhPicJOBWRUQtWJ8u3VRz9vOwCpAjuic3WicxB8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacia0PYsCWOADySVtPDpCME5DibibXN1VpdjvQL6yu42YPNvkpLkdBXX8YEzvc0iavJVs1xxmaic2C3cWaPia9uA1nZ1Nic6ettecTTzY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacsSO0cauqbvOKsHibZEXaibV5p43Dd4UoS8fz1GlDvujbJ3448jrGX7evCbpLXXDYTdjuKxScJZ1CQGLnhGTibMiaDHLY0iaQyC3ZU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niac4tz5qGOFTQwD2I5O4dYuR8OEjPcLrrmicJ551Sicyu0k0hTflmQEzcofQdmic1Hhk64pIoGDd1xZ7dmBWZJ21b7q05vgWd31esE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeRSgsMnBw0FZP8ia7lichDaHIuv2th5kia0SaJlcdK8a4uggza7MLELYojOvH8UiaMGavCf6G399l3micKQqrbdavXlC2XqTMPhNnI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafwpg6Il4yyAFSqaIKtBaGSu3OuZiaUqk304VFH5iadQMOKHtaFicYg0iaG3cnSWpiaENsrulS7sXebxBnQQDBYyeoYAyRtKcw0q49g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacGHruHYRBRyrofrq2Jvt86OUQibIGbcG0R0mYicEXoGMe19eT1rlx5icrWsbHKibUCNZbcd1Z3Umt5qJQzfFgwY0gkXAicTGjVCkmQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadfTB7icudzTjHetcCEOfkLSsc9dsQxesDbCshEfiaOmTJ65rOTVuKTLnlJLz2HaLUwXblZdiapmJ7XR529o45tibRqVzk6poC3Mao/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafCOzkFfhe6X9Kl7QwRibvWyDfbCZUewXKPf3oZ1oGEAFOWWtqWvnwhHQicmM38CicVjNKicIH49RRhnylicUhHr0xvAzJuRXMzsU7U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacibR3ssqNwdXUoibvbbAvZ9WDUO6BWlKaofn62Z0j2xqqnzib6zoh5HtyPTpVBbtaaBVl0x0140UY9yXGdL3kbVYMnmECia3dlWxM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf7s66ibkxWzXYUdowwhtWAD0ALjB0dxatialRXnpQQyJTlmAFwF93Ribiagx3JEfVqjS5mK5vk3M8klnMTibCzocH4l4eVvW6mq9u0/640?wx_fmt=png&from=appmsg)

说明：

1、文档为V1.0版本，如果后续有更新，将会在此版本基础上进行优化升级；

2、加入硬学社“知识星球”，就可以下载这份PDF源文件；

3、知识星球至少每两周更新一版**硬件基础知识****高清PDF文档；**

4、星球内**硬件行业小伙伴可以一起交流，资源共享；**

5、不定期行业问题解答。

知识星球二维码：

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niadDq5tricnZnI3bc2s17FVVnKcT9bRfY2SdMFmXib97AbInQgqaJOCDuCbFblwxJSYa6mibfUD2WR4LhfzJ8tnPk9dgw0EAW99OVs/640?wx_fmt=jpeg&from=appmsg)

欢迎大家加入！有任何问题，可以随时联系王工！王工微信：woniu26a

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niacleQ4GeIaVnepy9gQJPuBTOmLZHG8A1wlSHgKnW6R2cia4mADBT8gokq6oicX6zOccEGyzKWhYCkntSwGqaiaIcibTYsibQ508qb3E/640?wx_fmt=jpeg&from=appmsg)