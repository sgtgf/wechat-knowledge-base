# 固态变压器（SST）的本质：基础原理、设计难点、研发概况、对比评估、前景展望

原创 Johann W. Kolar SiC碳化硅MOS管及功率模块的应用 2026-06-09 06:57 广东

> 原文地址: [https://mp.weixin.qq.com/s/nZlCVk88cdwGlWvYHxkZwQ](https://mp.weixin.qq.com/s/nZlCVk88cdwGlWvYHxkZwQ)

文章来源：苏黎世联邦理工学院

作者：Johann W. Kolar & Jonas Huber

引言：固态变压器（SST，Solid State Transformer）又称电力电子变压器，核心本质是依托第三代半导体器件+高频磁性元件+智能控制算法，颠覆传统工频变压器的电磁感应被动变压模式，实现电能的高频化、可控化、多功能变换与隔离传输。其核心价值是将传统单一的电压变换设备，升级为集变压、交直流转换、电能质量治理、功率双向调控、故障智能保护于一体的电力智能终端，是新型电力系统、新能源并网、算力供电、智能交通领域的核心核心电力设备。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfsSh8gice3BEWnc82Y1dCDudwU0vcefZzS9rEiaQGd3Ol8AK85nAxZJ3Q/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfEuiah5ibBibCFQYZ1q9T8nHX2bGh6jNyK81RyjXubiaibLPwk10uuIVqlFA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfpKiaaQ0eiaRkqicG0hIjnQKUn3DQ2CgsuAWQxES7je1PAlxVVfFMghaEQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=2)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfYdeJadVKf5Q9y2a8JyDfPZnuDXqD7jwJUibI8icYTTAguHroM01TDQJw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=3)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfru6g48yyticEDia8HmwKAKSk5ibXvsraHljfiaaGmVpksicUgsT53NCf0hg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=4)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfqyiaGLEGsdGicKsMoJJ5Syic64qdWX5J2v5pia7Ap0R4rfrUZcic0VpB6VA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=5)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfib9FPIfCnTW5w3BL3uhjwIZicQf2UTVrx1iaoJrRibx233GnNlVaDPPWVQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=6)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf551kuoC5Gfv7bjmktdjJ24x8ib9kUibTh3Sk9B58nic34MRicxic2GJdR1w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=7)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf9ODM36eibRpSKYTSt7WgCgH8qj5rFbnEWUhm756jiaREWSLV1OoKalZw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=8)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfjEjWHYNIo7Y52uQdntSS44CChMlpEXKNKwfoGQNdR4fuctBAUL5MIQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=9)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf3l5rJ3FVia2rQ6ia80JeficBAgrtCQTDhMoE7btoFYDfb1cNianuGBhiacw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=10)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfsJ9Xzh3kONIO0taNkZKtfltUibs1RISCsovLoxYLicxMQAric1fClEoCg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=11)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfvUwykFfibYicOAMUibegjiadfYXwXZrvTtlwtibduNVNGEeyRSVZOWksicKA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=12)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfAuOZt0vL7kx9Ib3hJQDyPXtPY9za7buzm96v3Dabbvo8xQJ3ugqkmA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=13)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfibUj3ensuiawMREJlkIKzZx8BeJ81535jzZX1uuj52ouKVnicBnzd2gyw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfiaws4U8z2hObKTBVNrRhzt8lwxANibJzS7iaXsNvPG8SqtwpeV1ulia42g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=15)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfp6iareN3lwJdmiaOVJxdChicicfJe6jg1uVA6lZPcvZmoIicUh5ZxgcYjxQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=16)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkffgXicyjejq4Pd88TNuUW2voibtMP0ZJP0ic1KuMYrTSRWMhFxKQ3icvhwQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=17)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfkKFB9icMEMiayv2knicbqyicvQN5W1sJTsIfnYEHvoo5CDsPvj82licovew/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=18)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfHkvLoEcYtIgLJ8icIIENlTwGFtfSRSNsHaliaz5goXcnLibOqPVkKVpYQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=19)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfddAwfGFHaXYIqTjBzGHnv8O9ozElMrqypDPcIIRPsxrOOkPvvwwGXQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=20)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfwHv5TnLa9VR7ZCbhtiaRhz5H6qsBffspwIEKjemWkG5ABj9EBckobsA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=21)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfg5yWyEbvZdWtwd4v3388unUxhmjiap4mB3a35V4dJbmaehKt7UG9ictQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=22)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfjia7GRK1FH4dzFR5Zh8U26FBstD5AiaZfcuIFgzqK2grMUwJGrhg2Jog/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=23)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfUj4x5zkpCkzaB8RNTMHRiakPeIZ8up9bqrsyR89XxQbz7YCpWH9jtsQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=24)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfRlWeeVgrMVC9XU4oMcmHribJG2iaNU3HrvAgf04z6Mia4awcb9SXPqibYQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=25)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfHojypIUVfEjUBAbA5V2rCNWy45Oo87jsibRLWpHUtGYyL2OiaBr61yjQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=26)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfEUlCt2a902Phk9bPtW98N7qM8Ub9vIlmjZL0U61vrldBI6TgibsVn4A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=27)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfz3JY9qk0mcl28vR22DDkPWBoOwkV4zToTI9cycsbONTVwrku8uOOmg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=28)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfOOkLWxdD9FeBQY9GYOsn6KicYXJ7325jFVzQia9OTdF6VWEuD6ibVMDiaA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=29)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfkqjRaKicD4w0vIrPjEUz3yzAXicQlCUGWLAtVvkqibH96jvCWquM2zNRg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=30)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf6lAIDwibkqKe0ZFpcqyeJfjJo67Tbnic6AicsUic9iaVyZI8sT5x9afiaXzQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=31)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfDoXtC6EdKF8KQDtSvJ4KwzichY17tjhSAQXbcG6kiaVCCr5rib8Yxp3HQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfic20RsrxBCsiczIyickMrUficBBXeTkXYyOJDWURAbW7EGJD4UDiaHIh4Hg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfaLUM8uxhl75CZficFichic9zt6KksmvM7HsuicL9X6toO8fmG4VpYz4NkQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=34)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf43sS2d3qFUeLreL8pCxNjRMD5Szibss0JiaZtEXw6SIHg1WqSoulSzAw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=35)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfNrKuA3Z6icAfzqEvOPOtlZvFRWUbyQIz09Qold8eoWPvxP3QlgcEkWQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=36)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfhSI7EQtrXc9apDDF8KB5TTia5Zsj67SO7ia4wIWFRkPYpHXMMybb3YPw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=37)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfrAXgWzE36Kg9SpsaLcaAXey7Kj4aicbKq76fekeEdIsV6tTq5HQTYng/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=38)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfxz9D0qGg7fHouhqXVwXukE2po3dNc68vb27vicss5UCv6sVghH08v5g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=39)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfIfq6ibeTk3MBgVbC5t1USK706ZOHgibB5EuiaiacMsHjyHCQ7OHAUwOz3A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=40)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfGUvrHA0lIsicOnicKAicIuvsHNZnamUQaGbIg0n5GjkL85uZDwBAibTjKQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=41)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfHav6uF4hiaNCDxrzy9D1gf0AHuJasTxkW8jPRrlL8SAzQPaCds5kQqQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=42)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfibL9fTyh1vRoSGjGOctZ3UFJnR1IxOOayrUdle0kmQUjxRgkkT7ibfwQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=43)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfJv2RgYddekIECTCHs6oIcNdvyM5vbUlibojTOWljLoibzLOTNJnNCqibw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=44)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfL08p1icfUyDf5ia8wgY8zmKj1t9BUZGy7H7jRM21CwCesibqAVShZZcjA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=45)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfGjd3lLFiaWzQNWVJeba8zASQotqoIcEGGXjWPDcnn6USmZ1kzupiaiaXw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=46)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfn8hicQvbPovDPaIuibW22WAqobEJjEHyOTrnXbYS7wvK4s83Giaw0iczUA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=47)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfia608PtHH98y1MOZn9wJO7Ux7r4Xoag3fHVlNpJONXMuMCzmbxFx1xQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=48)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkff8hkQ21TPkibNKeg4Yxhn1lg5du8SibVdAf36JxHKdSGOYkEx6oexnWA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=49)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfpyCCU4oEiaZOpPJL4PEXng5EgOvLCM3iadlPl6j7tjZia0YZlJwcrKPBg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=50)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf3hKhXbkB4n2G9sFicHVUP9MhlvVxl0037kFTDoqHqXTzoGibUtqfOKFA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=51)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfavpqFVa1cfqiarUMgXJicGP7ADd3MiciaJ26aDGknr79gXc0gmZU8eGAoQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=52)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfYJGjuK8bV4BysdkCmV2Y4ahgHAdhEYia3ZFteP5rnsHYmVkzBjvbNQw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=53)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf1lflicBSPU3sy1dsqGS8y9SuRR5cgYUr0oX1TZAMEyAujRxbrAorttA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=54)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfngYXdibqp4KIEHmSwicgStiadzvic4QmXH581WwAYe4TGpJ7ibfDic8VibD5g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=55)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfROaakfSWdZOoNhV7vQuMauZWbvj7oFL0B4G3y1LQ5qp7Kg5RWbEoxw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=56)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfGagm0kRicKvXBmBno3sQZ38Full5urpKLjOKANEOFH7XQ7nZr8ldXvg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=57)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf1yLIib4a0bN3QrSSg34kdAmxfMtCODNypUS0UyicueZKf2Y7msv36mZw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=58)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfCS24Pb65owNFsicgzTRtqlt1OLWUg4Dk1rLNXbAibiaBmLoMzzr3L9Qibw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=59)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfh2R7b03gA8Tmaib0E31c4DtrcwHfDhTjWWX7qXicspjo7S8hL07s2aKw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=60)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfOoW822qnUZXdic1u6vRD1vP6ek9EVTWqGvoZ7vIYU3I8dcXNF7WSFkg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=61)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfg8rAFs25Qab0GKthUGHQtrbKibSLnEU29uXAp5KkuoIq41N99ATv8XA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=62)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfgKFAU6uwYOAEW7bbLL5ka8jFOe0eGHuo8ZmBHmE1nicmrf6wcfvFScA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=63)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkffiao0UAoaEvR8KibOuUhw4UM7ushH4dOJq2lgXsqAOot3VLLNj1eGicHA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=64)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf04YjnaW6D160D4Cibe65GJUe9dEN8LSOn3F2YFj4NW7kWlE40NORRibQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=65)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf1ElUG8Cj4GPJ8RsxM9zCCia1SZBHbNfAezEfmCKECWiaa83fY9hlm9uw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=66)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfVRtVw7nhte9K3icRiczT7aeXH3beR1tSHxcbDILcFPuEPIb2IyVBPV8A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=67)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfD2POZicibAOTQLqm1yl80ia0FgFZMLSt02YYGfUKMgoEcjIB7ujzotI3Q/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=68)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfMYCc4m7ZT5rxnwVwYIszOQTnnnEPX1XNzA49G73KHe0pYgQBuSb0Kg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=69)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfEjicvyicL0Q9sib6PFQyJORuR8S6AUkwTtJmiafKlle74Tjn15ax7lOCWg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=70)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfBsUsSo40WG59ShATMe57Y317S0TbUM5GRUfBsZxD7Mp4VWqQaJMnzg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=71)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfCyicAXxjnkNSavmSlfzeYLHRIFdE7PGibbhIhmXFyxs3q5aC06RBiaeicA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=72)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf4Q5PkCwpdhGbEMibOOy6CYUnWRh8YZ2Uc8XAMZWCnOGz5CC4nrDqeeA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=73)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfMEia6CgF7LprPuibz666oHTbWDqvCsZwYxiauYfOFNWoe6nwCNNRv2SCA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=74)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfZhL8szticnkpuYZA29ic7qL9y0MWnnYszbZLHp9R0IUZRoldEAicZE8eQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=75)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfj2Fy1ia31zXrjyDN75J4BCUpKV1EzUoUemQyNRrn7Micz2swjVTo4iaxg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=76)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkficbqicsOjXcpn6LH4KRVDK6tIc6tR4OdYgPGd6YEO7M50TdBJwBqKhkA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=77)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfddVicU7z7CYPLKmtJUEJI5FphAIp9Sx5wiaftLxJtqb4ibpYfqFMyibeMg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=78)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfhQvSkcAkVtqbfLkPyu6rH5goiatGFDzegkFsGYyN0RQBtvMxxs81Vow/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=79)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfjFQQibfHAzSuiawrnticc4zy4U9GmBOl72Me6XNwGSibwdAuoGCbMLpbzQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfaH6uQxfkYPjel3FibIiasrf9RDaDRLU9GzdKrxHE52xMFUmiagXyDWH4w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=81)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkflOG5eGQbqmsfk5vxyDAB3oThSlVfnW0hv7iaxdH0d3zljKroWtyiacMA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=82)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfQp5kO5iau5CF3g0t8DxqF5BFlc53Ozm7foDh2Ga6XrfbiblNrgLG9rmQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=83)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfhEIxaky3DT1FIddvR5FkV9tQhjCSAfJgyb3icPWY9qy1Jchd20MCA8g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=84)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfUdKth5icDplroPkA6NqdBrL177iaaxEqSO641pqeJAFbtjvia3FKmK3VQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=85)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf2G9pDibXvgib47Lk48bcyiaMxiavmugNd4YH8qBJBXUpj3wf2xVibF9JNicw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=86)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfzoa2B08mwRv167wrljTDKBN564N7CKu4SVVEkwCRAceuLPt2uZyxhg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=87)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfq9r2GqjAOG0OzBjoIkTpibtz1mqAnDT9DQ30LgBc6WO66XmA6rgjBlQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=88)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfO0DFTnzBrLIEeq8c3K2hOzPPOSH0uqpX7YzT2rapNwxtXtpe6BkTOw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=89)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfibZGj4p9sECVS0e3JgQ4YDIbXHibDic8dqAcavUxPeJlGoroa82zkh7ew/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=90)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfRfDQibAmHIu1DSzKkEkb1AhfPOeg1CmluibZtvXLy7f8KrFhMXPqVTdA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=91)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfqXpVVcsB5pgWwCOZPL5C2vXsMQldOZye0axL1Upygv0euA5aCqnq9A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=92)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfNk1NOsu2wb584dgvHltibsGAlalsXdlZuc8O6fZabGRiaAL9lp1QiaxlA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=93)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkffmSq88q8RFTrYLEJJeiaQbmgTPLibyFGfFs1BKias4W8v5gRNUqvqz8tw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=94)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfaIQyujoXWhOdDRheicribqbNticdDI9pJeSCcYwKLlVZCYH5wJhdaiaMjg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=95)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfxJ4krYszOUKibevGUHbnd3B2GHddmQXdkGmcnz5sldNfsIfn6OKqsMw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=96)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf96BJZZNghVKiaia3iaLSYRoyR9Sj2DUlVdofnXweJxwJrics0Toql7Xd7g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=97)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfIVqqYuajA6z6ppnSc456koODDlaoX7CxOVzgqpWDMeMzO9emPAicFEw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=98)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfnH46TmbCm57sZnQyuXvv2KP30LyYb36yZvyoiawIe8RLMNfIFUodqpA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=99)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfY0STGiaukHeSCokfQMgEUIsZl3xWY8eP0EAPV9953luY9JV0kAt4Bww/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=100)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfLe9o9hj9jXKS1H0MEjOdjQLPR3ficbHcCiboySCvnBqAXL8HQtoe03yA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=101)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfKHk9ibJ1y78UuH1eItzbBCxOyRtbKohcKmiadWMNP7lSFoldiaKE747cw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=102)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfaTBTDBY9GKHv1ysEpvyia7icVJ6DpV8bccVZm7ibULE63kuMDUQ1mIQiaw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=103)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfFGlv9ZeiaQUd6KaRuGmZxibyn9ULd4ia1MLSDvTfJHibqMzFY9mdCAgmOw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=104)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfrwtwgFhIPkvTqiay9qrsXDA8dLoxPsPFgoSjZ4ZiaUlUtoI9X1mIRMfQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=105)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfj1micOiantEj4GDWpGzf735Gp4Jjfic8XibZsJEUVWkjg8ric4HHr1RlOqA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=106)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfDn7YV25zHCFpHB8EKgaFg4mRv6sJySyUHKX3WnFmDxSwibr5GJpyDYQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=107)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfAPgNrWUTOoLYPet5aiaMMAxTu4ksXon1NDyovQGCKeKNrQB2p1WTdjw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=108)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf7r71rk6S3HHlNU22EKhHKpmicu4sibnmg2bv2RtHQ69VtpjmwpfqNsgw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=109)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfD1f1nv4icicy0fEeZpK3YJCTf6wRB9rpYbRzSUZLazHyV5Gqbia2g59XQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=110)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfH9laFWLT2bPQdQU7bribx2c2Hmu1Xibc9YYtvfwWibMgGYRXzaq6G8ibIA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=111)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfiakANWu8IO4yymFH5ux59RB8pGLB1U9MmjE8zyRb9KxxgvwmOu8wg8A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=112)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkflqYpJL4NnXK4Krt2H4ash7icl8K3HVuaWPPeKkEBWG0PS3NEbRw4ezA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=113)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf5xBt3GalwPfT3EM8PchNDqanw3grP9WKPMZHB9wR4t1oribBUgWQskQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=114)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf4J5icRdNuJKyquACtSkgkTol3UlSLctLl7ylUYO9VhICBv0F0ZGkCbQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=115)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfMVMrEX4jga13qYLCIjtKH91ORn5ujvwAykXahA5qiahSLoCrTC7O9Jg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=116)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfbNcBDaCia9TZG1Axia3iaxE7NA6Fe2hqfuLf7xTtdxpRbnl5ZH5ibky8YA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=117)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfsIUqqK5qBzGqN3tCCmmtIBfMSrH2DUsKicQ1282dmpqWaBibCUJzw9GA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=118)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfbUgLBYMvVA3NJrDNicvEEDppjcfzdC9bHnINYD4o4IScj58biciaONziag/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=119)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfQEJTTZ9A61IdZoPWjicCg292ibSjib679jKme12TkkLfPf229VtGLIhKg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=120)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfvgUlZJdJmjIFlibaWzOGw5mWUWPKgnRygcOTeOyyTicPcfyJOlsQ0MPA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=121)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfM2vvJTmprmTBFEqrxKpMvowRht3qM0Sh1s5Nw4NeIpowL8Cj5ticHdA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=122)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfNRVEH6HWUwj2cbqD6sEC5Tby0L1ibOYxDmiaawIgJE5pT2PZyFHthvKw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=123)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfekp6NNLMqL6d3jAuCqSgvEaLibQjufZnT7XOfYIICQOfd8yWCZunHVA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=124)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfREiaHWiaaRk2Nbf1VhuIXqVNnG6QfZ5d4MUTXCTbadnh4JruicYvLh1Nw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=125)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfBRRlSHia27YV2dic5TAoxVOLia27I44laaeFMQ2DM7IWj626lQWU8YlaQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=126)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfIuriax9eTwVIViaCticaaxIHbpwdbtjPV1RWwAicP4HbCpwwqqYaVUUTWA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=127)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfvBCrmYwOicf7yZsfgTjiciaLkmibtXd5HGdIGBu7EdvnEKaibib03en05bQQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=128)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfaftpGpjGKwYsWocMk5ZlqojddpicrmrWJUF3bacAOsU38kvsywny6LA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=129)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfzYO6oBzg4mcLJQwg9yiaoXBlbqWQb0z4AWDjssVUNhFWt6SeAeCoibPA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=130)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkficzb6uacZNLaEdItdjRkrWrZzc9wqkIJASrfiau65WnQDPiarxiaBvkstQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=131)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfATCkN2YMmmZdibAic5DKHjZeLd48FF4cDrnwVsRGr5kBajpllKLbaLdw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=132)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfKuznQN55VU6zWs1yCwrK6kibzofsABxuL1yicXJ7EKae8dibMibLzfaA3g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=133)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkflfskd35OpTXlejmb716b5DLicriaLBXXJBRyUWgK9YXtkfzRhvtsiamKw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=134)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf6vMKakAhMbvG4DaYHuv4f9GQUabhJja0mXPywjMJbo8eJYtCMWuPCA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=135)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfp7HZ1QRg1mtJOUwsfs4zKicIib1SNg2ebPeylD0Mwn4x7Bna6yEicic6pA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=136)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkffoibdyqianpmeMTPPnNicKTfczzicTpGJibAgZbtktdMkOkgI1SLa5HUic8A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=137)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfyBgI8WwHicUtFicpKdxsK4mLOV3QZwjZ7smWZGeyQFiagzteSZoorbaQg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=138)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfMgrzdoibjcRnFfZWooiaeialvq4ibjpBicqXxwe0FZA5vEeWtKprKY1LQcw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=139)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfwgFwDww0jnswL9tibicnkDPCFU65F8xwT3ZSdI3pH0Aa6BVVVgt0AZJQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=140)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfAVaicX1CIs2Y95vU6oGPHTm9Iy6BueTXMiavh1O6cTU7y8GG4Trfsoqg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=141)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf3f8hNDeW8cXgzbB3oxkjicJUbn81Ycs8j1sLZR2KK2GXdTzb3rySbRQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=142)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfqjcY4my6q5soiaZ3emPlFX02EaicNsqZdTkXN1ExgicSsib5FYxXtwBToA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=143)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfzK8G2Lsuubm60WWWXn7bbdD050ooOgvd8Ex1DIKVqfO1xv8ldiarBOw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=144)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfT1XcDwlWkKTic0UzPD2k8arvA2Vh8BmLiaMRTF7yHjNf2CCS68uaQicTg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=145)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfpCMnIbh6uGl69csiby5iblSQtnFNnmJ7eE99jiblgSBjBUHRrVljmz12Q/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=146)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfhZrEWfPicqXtDsx4QYicsIO6bpzECTQ8DSiavlsKrfDmboYz9FMlqlNZQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=147)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf6icGcZnvcHzqqRJZeAJva2xJgEZyFiacItJv7icoefGOPxiapwSGdPicwIg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=148)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfHb2CSmNS5EN3M6GKD9In1mpU14NEBYFhvHEC0p39ibRP8fWyxKvJXvA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=149)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfh89ZAr0Ok8KptibZnP3GaTUA2icmRFpvzUF1AamPLwicPG3t9syVnxJqQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=150)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfSl64EXT1cKowIvP9aThAveaEZFjzH4NKGAP7xnkz1oqxriavl1b5WiaQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=151)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfJWaQQLs4qAicQSFHicSdyfKyfSeicZvkjYjB3HzoYtDBKSax2kCPnwlibA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=152)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfUlo1OPU5tMmDmKD155kv8LMsTU8o3icg8dqtSHkvQkiaj00VlJH6eFrg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=153)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfIKVAJ94RoahdKfTpwUVyuaoJryURShsxXRNwHJiaYYvTXrT6NA7MVPA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=154)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfQL2ayia9NCAok9w2r1AuJOmA8hiaDCyw59IBYBBF22mGu3FIQ5tUmSicw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=155)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfEia45Sh8zNpft88aM8yNNOk3ZmNb8FBDGNoGibGQPqfSzfqPosBiap4Wg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=156)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfbOBJIicZEm5ib4kemgibD7xAvLo3Hp9jj7tW5XD268uXpeG3ibnDIHKpcg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=157)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf7Xe85dpM9icKiag1BRHFo0iatQkRmHEDKeXykVX4dvlNpcXWAveSxv6Kw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=158)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfUJpceq3gmVO7bvUcW6pOATwFOQpwdlzsmic8t2CdbBgxDx5bv6sS28w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=159)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfXILZoRX0OZsN8APOE29o768EgibtUcOkWWHRvq53rwLGm34rzwrqmfg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=160)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfcI9WTuibf8lciabfOZBQ4nNDgJCPQDicktOVpgHtqaR9mcBE7rFick2ZOA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=161)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfN1j6a9pIIibtLvfU7bYHQzj8tV1nibZDSGMhlSx1vRpEvLWF8c4ia2CcQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=162)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfIRgodicEtqEW8FBWYG1kVw33NQjGjG26vibPibP4oiclqviagoFT66Q1IVA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=163)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfK4ibHcOYFAgRAL6VnjaY0VHscaEaGPlhgICt5M2iapDfuMVoZdiahMPJg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=164)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfofMtwhhRSib8h4kliagCqRqVCKe9887jibtmqibHXHcbe2gw8GfpgsiaXng/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=165)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfEXn0YmeTJ4NHwj9xNSYJIHtxicyun3XGeZEgFszuelrAynicLZOmsx2w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=166)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfPmSLFicWobhGG8PZqDiaGfzIxKnn3Ac33pz4rDQZq4SO6NKn9Ce93w9g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=167)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfRAj1IR6LwvIibO88IRAibXzod7N6akaw7a1g1hgVlqlFbjmkWAIGUDjQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=168)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfxTpfVjJkbW6WMdo0sWmwcVibYPWXARicBHiavVy80vdFIpClcfAy4lMSQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=169)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfSqDwyTJkb3F0Lte9iclMvOvymjsRzZyJfSibnnYPuTibsyjB05OZPWxfg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=170)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfMAP2AlpQKg697kvNlWWhfwu7Nquh2icEaiaVXib8ZZsQWCpgPoibiby82EA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=171)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfOtVshZGiaP95Hyn0V8hv5E88QHLNgt5Y3icfUKaic7jSQDoyvLHA9ibB4A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=172)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfFGtQJjMUdJYnHMPRpAVcZiaEsMYVVDxqL8ia02qibN6Mfck7Ghv9cw0Iw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=173)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf1tMnYltGlj49lkWnZlLHDHlAzt4BbVCSYibM60gqN44rBFQBiaAZN4eA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=174)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfBKhtQDqxVHjt63oZL5E8fO1OMDiaehfEkfDctibnFv9rroqGFyTzs0Rw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=175)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfrenRXC4BwztO2fLKic78EBmdUQ8C7ZvyQdBFLaZqNopmIhfN7BH2P2w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=176)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf58gEC8zFXOia2sfl69LHzp6KdUd0d0QMAdeiaicp49bzz1cET15p7Rw1A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=177)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfLhpWJZf4yzQqIroUk6HUEv9VORCILVHU3UONN8KeB8Rs5bOxgo7F0w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=178)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf0WCCRnPxBDkoAYBxGclvGx9T3uPHgYJzQhGJQufxsUiaRsAIYE8cchA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=179)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfx6D6L0wBxLd0ic1UMtK9LXpUIjHNvpnA9dO0hvl3j87iaP6DPpkd1ADQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=180)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfjbzfE8ELwzNoSHjkCT9bfXytH4wibBicicCyCAicMbyibWV6gy3U60LhGCA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=181)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfhxaITkqhKWLicOibXsXCJ50GQhWAeRq6fN3iajfZiaYhyob4k6J0S0D5kA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=182)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfia4VGmKS1sMdxEuHdFactZibcPddiaiafftNXB7exPqy9AicgT1SUTATvBg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=183)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkflz2lwjMKCDxuteWx3B9zdJkHtzshgo5AokfTQrdjOC6hzdrXKP3UUA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=184)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfIiazIhD5JziaMhtvsScbZicgVWVOSdNeFVSEktDAR0Gqh1uriaEbZkibLbQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=185)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfUQicgiaicwxpJxROTJuLdLFibMGDQcBBPc8f2casIC2Z4uFZKZdgYOfJgA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=186)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfB1aeauOhJPiaQ5Ca8TKaDKHZ5rXEdasHBz1grZiawgibgdc7eYaqaF4kg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=187)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkff1uiaKUeeJ4Y0Gskmo2T0kg4yPHM0TeI4lWlWUmjq6sazEsFCsvBlZQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=188)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfzuzu1lDuLL4scldq3Mft064xibbOVOhvkSZoqOf9PibQYbvz0cnYvEbw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=189)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfEhxfhw9v23knEtSAyKd4rgHL0fsF2XRqjhImN1LjPlGOYD5YtaPRTQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=190)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfbmW9J30TaIoQsuNPns7W1iaJOV3uSy67EicXPtqWlrgP5f93hxiaZfHwQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=191)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfRkzh4zGIetCFn5UrJCFeeSKXqrjX2V7VAGBc3pYnpbRnFSz3dTQrmg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=192)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfDXuqnLzCpSzT2HPGcCj0PRhkaxargzTuU9SFv5e37FBeLWezQaWC1A/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=193)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfYJvO77KSF3ChebRzZo2XibBlY4grjiauyyUPgGLbrPQiamGS4A4HdXo1w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=194)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfDAggMaRwdTu7DlhLAARTunmL1NkeklRTzKgUSKS3Zw0LiaofrQD0zTg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=195)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfibeRZDOibOnqAwRMIFlwZzbYsG0ibpB6klBdpDFYEqJwy0I72l6ZuqGMg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=196)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfSwAWTB9haCyp418ev5esaR3NR3KkrhvKaKicq02uMTyl1icYmgvNN2ibg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=197)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfzfKETBYo9r6QStDyrzYjcmmbdNhQKkAozfLkQ1ORCcGoH74onDQtOA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=198)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfkIsIicscicFtbmKtt5RD0F6fPpcNLF6cZvPYrrDxsBbPtAiaX2LIGc9SA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=199)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfnSy5RbJD7agVyQvboF4hNewvQDFUDazicjEY6y46icLicN3ApfUgMG0Xw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=200)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfFrPPxxcLbXT1Jys99BvCPMchD6K4IPcESNibyaZZKZVmQn0KfzRmiaUw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=201)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfibIDtrvsytgZ7jQ898G9jwnOJiaXCSAOhNtCfDN6Zdv7ID7GT6ic2JdiaA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=202)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfNLt7dQchOZnhgpUEAxfqNMLVGTYyS7Sic0LjqSWaMAMYZnJ58otXPpg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=203)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfSicZMw9X3STKOFia6XzMHo7Eq4m2Tf0WZgazSgdmTSJmVKialeib9cVQfw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=204)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfNyvG3sLZseaiaea8pXicCZlbqUR6R7XiaWod2FEbJg6ZNbhmdXiabN1udQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=205)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfZ52eqRhVe8icPGKZxENyJhXsur7W21ficKFDulibyLVDSlMfLjUxllkzQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=206)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfZYgTmicDry2I7pHyS0bgaoVhQclRAibq93OLxZZOVCPE8WWYwadtDoBw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=207)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfZ7jiaibjnlicQzOWavQbpJl54xfx1PgIMkpry1mTLtm1BLwu7TibLNbtzg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=208)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkflRk4NEIdqnWySibq4RkmjicicTmKOkUW5icfGGj8mUcy7bGyGiaeronPkJQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=209)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfnB9YhDx5pT14ibqXRgplgD58qb2mo6MB8HYZzJo2dHSu8K9fUbX8aicQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=210)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfRBIzjpv6tb0XUGDSjMy8ouzE10fWfTyZuOC73TdJSzgbzB855VVvFw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=211)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfj1Z7CMjGD5MJP2Hxwf8jibeVhqSwKvcaUUDVDZYtKXMWm3aia1kMPhBg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=212)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfhzlQQrQdtuUMPiaXNOksXIw6oicRGhkuP4fCh24X3I7NY64VegWhANpQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=213)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfbog05FLvzobXicfCcADjiaVPW2sdGO6QyY2kqLkicyaQEGsOpm8mHiaCbg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=214)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfpatpSNibibwFBxSUGXGiaic5JlkxpKwAuYx2h1ota0e3NtgBWeibfEzC2Hw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=215)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfS2aXH9g86R3ZicRFloBytPQD6dWRMBuBImHjoFhkTzWO6aolzibFDHmg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=216)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfB3oh8QDJWcHENwSpbMScUSeRd7Yvqq2hah87LTAIJsIDDvGkzSr1Eg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=217)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfZWicEtnDvaIPw0qjgwJVQiaqetdTicQ2XIVVBWwFichrQyzDwVia6dCv1Uw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=218)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf5bkV5wYNHu7NXqdQduySaypa2vR8Vib2qu3JxRZfZGT80bfDZJEa0yw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=219)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfdpkq0NStm3ZEQaV5OmgpP3ztsH2diaNPQmfQ9w7JCq7cQVVFrxE2ia5g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=220)

注：文字与图片报告无关

下文结合电力电子开发视角，全方位拆解SST核心技术体系。

## 一、SST基础原理

SST彻底摒弃传统变压器“工频电磁耦合、被动电压匹配”的工作逻辑，核心原理是**高频电力电子变换+中频磁隔离**，通过多级功率拓扑实现电能形态、电压幅值、传输方向的精准可控调节，打破工频设备的物理局限。行业主流应用拓扑为**三级模块化级联架构**，适配10kV及以上中高压电网场景，各级功能独立且通过直流母线解耦，运行逻辑清晰分明。

### 1\. 前级整流级（AC-DC）

采用级联H桥、NPC三电平等拓扑，将电网中压工频交流电转换为高压直流电。该层级集成功率因数校正、谐波抑制、动态稳压功能，可主动抵消电网侧电压波动、谐波干扰，解决传统变压器无法治理电能质量的痛点，同时实现单位功率因数运行，降低电网无功损耗。

### 2\. 中间隔离级（DC-DC）

这是SST的核心核心变革环节。通过SiC/GaN宽禁带半导体器件搭建DAB双有源桥、CLLC谐振、DCX直流变压器等高频拓扑，将前级高压直流逆变为高频交流（10kHz~100kHz），再通过**中频高频变压器（MFT）**实现电气隔离与电压幅值变换，最后整流为低压直流。根据电磁感应公式E=4.44fNBS，工作频率大幅提升后，磁芯匝数、截面积可大幅缩减，实现设备极致小型化、轻量化，这也是SST体积重量远优于传统变压器的核心原理。同时该层级支持功率双向流动，适配新能源储能、微电网双向交互场景。

### 3\. 后级逆变/输出级（DC-AC/DC）

根据应用场景需求，将低压直流逆变为工频交流，或直接输出低压直流，适配算力中心800V直流供电、充电桩、工业用电、居民配电等多元负载场景。该层级可精准调控输出电压、频率、相位，具备动态负载适配能力。

相较于传统变压器“无源电磁转换”，SST的本质优势是**有源可控化**，全程通过电力电子算法实现电能精细化调控，而非依赖固定电磁参数匹配，彻底突破传统设备的功能与物理瓶颈。

## 二、SST核心设计难点

##   

SST是电力电子、材料科学、电磁兼容、自动控制、高压绝缘的交叉集成产品，高频、高压、大功率、模块化工况叠加，导致其工程设计难度远高于传统变压器和普通电力电子变流器，核心难点集中在五大维度，也是行业量产落地的核心壁垒。

### 1\. 高频高压绝缘与磁芯设计难点

###   

SST高频开关工况下，方波脉冲会产生极强的dv/dt冲击，引发电树枝化效应，对绝缘材料的破坏速率是传统工频工况的10倍以上，极易出现绝缘老化、击穿问题，直接影响设备20年电网使用寿命要求。同时高频工况无法使用传统硅钢片磁芯，必须采用纳米晶、非晶合金高频磁材，搭配利兹线工艺抑制趋肤效应与涡流损耗，但高频磁材存在磁饱和特性敏感、散热难度大的问题，需平衡磁芯体积、损耗、绝缘性能，国内具备成熟高频绝缘方案量产能力的企业不足5家。

### 2\. 宽禁带器件可靠性与适配难点

###   

中高压SST依赖10kV及以上SiC MOSFET器件，虽具备高频、低损耗优势，但在高压高频耦合工况下，器件开关应力大、结温波动频繁，易出现单管失效。同时器件驱动匹配、串均压、动态均流设计难度极高，单颗器件故障极易引发整级模块瘫痪，难以满足电网高可靠性运行要求。此外，国产高压SiC器件良率、长期稳定性仍有提升空间，器件成本占整机成本超60%，制约规模化应用。

### 3\. 模块化冗余控制与均压均流难点

###   

中高压大功率SST均采用ISOP、IPOS模块化级联架构，多模块并联串联运行时，存在参数不一致、动态负载不均、开关时序偏差等问题，易出现模块过压、过流失衡。行业必须采用N+X冗余设计，通过高精度实时控制算法实现故障模块毫秒级切除、自动旁路，保障系统不停机运行。但多物理场耦合下的协同控制、故障容错算法复杂度极高，是样机可实现、量产难落地的核心原因。

### 4\. 热管理与多损耗耦合难点

###   

SST集成半导体开关损耗、高频磁芯损耗、绕组损耗、绝缘介质损耗，多维度损耗叠加且集中在紧凑体积内，热密度远高于传统变压器。高频工况下局部热点集中，常规风冷、水冷方案难以适配，需针对性设计全域均热散热结构，同时兼顾散热效率与设备小型化，热管理设计不当会直接导致设备降容运行、寿命衰减。

### 5\. EMC电磁兼容与标准化缺失难点

###   

高频开关会产生大量高频谐波、电磁辐射与传导干扰，高压工况下电磁干扰耦合路径复杂，极易影响周边电力设备与控制系统。同时目前10kV高压SST热插拔、运维规范、测试标准尚未完全统一，缺乏成熟的行业适配标准，设备并网认证、长期可靠性验证难度大，制约工程批量落地。

## 三、SST研发概况

##   

SST技术历经实验室原理验证、样机迭代、示范应用、规模化商用四个阶段，当前全球已进入产业化落地关键期，形成欧美主导标准、国内追赶领跑、全产业链协同突破的格局，2026年成为行业规模化商用元年。

### 1\. 国外研发进展

###   

欧美是SST技术的发源地，苏黎世联邦理工学院、弗吉尼亚理工大学率先完成拓扑架构与核心算法的基础研究，奠定了现代SST三级拓扑体系。产业端，西门子牵头制定IEC 62800 SST国际标准，掌握全球行业规则话语权；ABB推出SST-PRO系列产品，开关频率达100kHz，功率密度为传统变压器的3倍，占据欧美数据中心70%以上高端市场；施耐德聚焦工业与轨道交通场景，深耕高压SiC直挂方案，主打设备高可靠性；英飞凌、特斯拉等企业联合研发兆瓦级SST，适配超充、算力供电场景，技术成熟度全球领先。

### 2\. 国内研发进展

###   

国内依托庞大的新能源、算力、电网改造需求，实现从跟跑到并跑、部分领域领跑的突破，产学研协同研发体系成熟。高校层面，西安交通大学、浙江大学、华北电力大学深耕SST拓扑优化、高频磁材、冗余控制核心技术，突破多项卡脖子难题。

产业端形成国家队与市场化企业协同格局：国家电网、南方电网搭建全球最大的SST示范应用场景，推动国内标准落地；中国西电、平高集团、许继电气等央企攻克高压大容量技术，2025年底中国西电发布全球首台10kV/6MW SST，功率等级全球领先；金盘科技、四方股份、为光能源等民营企业聚焦商用场景，推出2.4MW、4MW全SiC SST产品，适配AI智算中心、超充站场景，部分产品斩获海外批量订单。

供应链层面，2025年国产10kV SiC MOSFET实现批量供货，良率提升至85%以上，价格同比下降42%；国内非晶、纳米晶高频磁材占据全球35%市场份额，核心原材料实现自主可控，彻底打破海外垄断。2025年国内SST市场规模同比暴涨217%，产业产值突破180亿元。

## 四、SST与传统变压器对比评估

##   

从原理、性能、成本、运维、适配场景多维度，对SST与传统工频油变、干变进行全方位对比，可清晰看出SST的颠覆性优势与现阶段短板，适配不同工程应用场景。

对比维度

传统工频变压器

固态变压器（SST）

核心评估结论

工作原理

工频50Hz电磁感应被动变压，无源器件，无电能调控能力

高频电力电子变换+中频磁隔离，有源可控，电能智能调度

SST实现从“硬件设备”到“智能终端”的本质升级

体积重量

体积庞大、重量高，兆瓦级设备重量达20吨以上

极致小型化，同等功率下重量仅为传统设备1/40，体积缩减60%以上

SST适配空间受限的算力中心、城市核心场景

运行效率

满载效率94%-96%，轻载损耗大，谐波损耗无法抑制

全工况效率98.5%-99.2%，轻载损耗低，可主动治理谐波

SST全生命周期能效优势显著

功能特性

仅单一电压变换，无稳压、无功补偿、故障保护功能

集成变压、交直流转换、稳压、谐波抑制、无功补偿、双向功率传输

SST可精简后端设备，简化系统架构

动态响应

响应速度慢，无法适配瞬时功率冲击、高频负载波动

毫秒级动态响应，适配超充、算力集群的高频波动负载

SST适配新型高动态电力负荷

购置成本

成本低廉，技术成熟，供应链完善

当前购置成本为传统设备3.5倍左右，半导体器件占主要成本

SST初期投入高，但成本持续快速下降

运维与寿命

需定期巡检、换油，易老化、起火，运维成本高，寿命20年

无油化设计，免日常运维，故障智能自愈，寿命达标电网20年要求

SST运维成本大幅降低，安全性更高

适配场景

传统电网、工业配电、低频稳定负载场景

AI智算中心、兆瓦超充、新能源并网、轨道交通、微电网

二者场景互补，SST覆盖高端新型电力场景

整体评估：传统变压器在低成本、超稳定工频场景中仍具备不可替代性；但在**高功率密度、高电能质量、动态负载、直流适配、智能运维**的新型场景中，SST综合优势全面碾压传统设备，且随着成本下降，替代空间持续扩大。

## 五、SST前景展望

##   

SST作为新型电力系统、能源互联网、AI算力基建的核心底层装备，技术迭代与商业化进程持续加速，2026年正式进入规模化商用元年，未来十年将迎来高速发展期，产业前景广阔。

### 1\. 短期前景（2026-2028）：规模化商用落地，细分场景全面渗透

###   

随着SiC器件价格持续下行（预计2027年再降50%），SST购置成本将降至传统变压器2倍以内，成本拐点彻底到来。行业将聚焦两大核心刚需场景实现全面普及：一是AI智算中心，英伟达明确2026年起GB300算力集群标配SST，实现10kV交流直转800V直流，大幅降低机房PUE；二是新能源超充领域，特斯拉等企业全面采用SST搭建兆瓦级超充网络，解决瞬时功率冲击问题。同时，工商业储能、轨道交通、分布式光伏并网场景将快速渗透，国内SST量产规模持续爆发。

### 2\. 中期前景（2029-2030）：技术标准化，国产化全面替代

###   

随着国内外行业标准逐步完善，SST高频绝缘、热管理、冗余控制、并网运维技术趋于成熟，设备可靠性完全满足电网长期运行要求。国产高压SiC器件、高频磁材、控制芯片实现全链条自主可控，彻底打破海外技术垄断。市场层面，2030年全球SST市场规模将突破1200亿美元，中国市场占比超50%，成为全球最大的SST消费与生产国，在中高压SST领域实现全球技术领跑。

### 3\. 长期前景（2030年后）：升级为能源互联网核心枢纽

###   

SST将不再局限于单一变压设备功能，深度融合AI智能调控、虚拟电厂、区块链能源交易技术，成为源网荷储协同互动的核心智能节点。通过双向功率调控、全域电能质量治理、分布式能源聚合调度能力，支撑新型电力系统数字化、智能化升级，实现电网电能精细化调度、新能源高效消纳、用户侧能源灵活交易，成为能源互联网的“底层操作系统”。

### 4\. 技术迭代趋势

###   

未来SST将围绕**更高频率、更高耐压、更高效率、更低成本、全数字化控制**迭代升级：高频磁材与宽禁带器件协同优化，进一步提升功率密度；AI自适应控制算法落地，实现负载智能适配、故障预判自愈；模块化标准化设计普及，降低量产与运维成本；多端口集成拓扑迭代，适配多能源、多负载混合场景，持续拓宽技术应用边界。

**总结**：SST的核心价值是重构传统电力变换逻辑，实现电力设备从“被动硬件”到“智能终端”的革命性升级。虽然现阶段存在初期成本高、高压可靠性优化难度大、标准待完善等问题，但随着宽禁带半导体技术成熟、产业链国产化落地与规模化量产，其技术与经济优势将持续凸显，是电力电子领域换道超车的核心赛道，也是未来新型电力系统建设的核心刚需装备

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfNAdkm1uruOicASc1tTXiaKEY3trkzDeog7p2kTiak86GP3fLjClaib6iaoQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfMLLIOGxibtmdAEoYVzQuqLzdVaxENYbgLoPnuia13fO0wJic93wm4YCoQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkfyzYjcxGEBL9OBzLee27UBRsltAr6dvghHfRwcvvPZONIfic7skWUKeg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnJibZVckRwlFGVYnkp4libkf27bqrt2Z2hCQIO72Fo8PaaXXQDCliaHsxvz2iaIRqlv6WPOwTy81Cfxg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)