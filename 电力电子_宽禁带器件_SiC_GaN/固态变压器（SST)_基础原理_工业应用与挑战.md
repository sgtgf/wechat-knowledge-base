# 固态变压器（SST)：基础原理、工业应用与挑战

原创 Johann W. SiC碳化硅MOS管及功率模块的应用 2025-12-11 11:19 广东

> 原文地址: [https://mp.weixin.qq.com/s/6e3MWuehrT7NENsHHt4Pbg](https://mp.weixin.qq.com/s/6e3MWuehrT7NENsHHt4Pbg)

文章来源：ECCE2022

作者：Johann W. Kolar & Jonas Huber

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQd2cM5fbVuH1ON7gb1MyJjInA3ohjQ1uCxCSqhY1oYyYicS8tXzhjFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaFddJm18XJbbYFIZQb7Gfz5PiaTvhjPPKbnFYxibDGQ4hhXyeGceQn0Jg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia292VjCy2VAQgY9wnaImSg91YhnryukxnuJYwhoN23o1fD86YVVbRHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaialzgtiaDnIUpTOicngj1kNUXgxwQibL7JvDIgVPxstA6Qr6auRLDQLg2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaxP8ibbqy5muKX2z4m7fYdrNosI1O6D4icdktp2vy6XwSnvzD1Dd3qBqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaP4S4KvA74p2T1dHiaCaJ25ribxRB5Zja0Yhtew8gEagR4vwBwgNHW6wA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiag1bQsHpMxtvecmKIqeD3dK3ZiaqVYN2vEOjTMhZCYHgR9XmSZRftC4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaf4E5WqbcjOmYgIY0GaEkgz90R5gKJ4p4Hr4fMric9MQjy9MicGhvicaKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaIpLnUzpMYQaNmKPyZqFCweicWD9314P3UbGTRXzUHkkQdlxZO09ich0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiapiaLmLnKrszqTOicEGlQxFgqUrePQuYXtPwmib1Dnm2L3r6uBvcsNmXNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaPVdb0wxKFPPE9ib377SrjdNibAh2gxrkVAZHzGl0LunhjY3TqO2GrkRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaxf3S4ns0vg4BJXJVJD4qquPza6614YMyZUw8s3QzLTIS4IBsEmMaBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaqBa63HjYIxicsajKBpoXYeiaeGguftU58ViaENpZtjibn87L8KCkzO7IMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaO9ubAeykPvlwVG6j1BfAmd1kkvLerCTAMQx0HtfLdqtbOCbqDNTibHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZsP3voODM82MqTUj5HA7qNibl617JQYFicBOyBtmh8FMtDf7DbEx7XpA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMn9Ra4K7ce3qxdw0hHkHM1FEH9YfAtW7ts1LmUZmB2NzrWhnNSCQlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGT5cYvfO2oibvmKWItQL4VnhclQY7WgibvEiaF4qZicS6GSBmovnb8h55g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiamFwVibRRlg1OlpSiaT045eEuXxNhSdJfN4NrSlelKRQLoFibIdL4myHmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5vRZAMiaoKdNDzG1nLbAA5kIIZVVEZSQ79Vxut6s2vzYIQVRx2aYrJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJmEy1F0iatFNp7Omod9iapcqGsgC8icb97J20LNqHwfqnUOCzkBiaibO8Ow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiadPantBPFdyAm8Z1w7xw3ibfUfScbtCibfUDx0FLbGQ8E9pgdRciaDelsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaHAiaKicEFZq4iceT51t4qMuhRBTAjOMX66U4vP1PREHcemmUDUAUdaWdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4Zbbpc3yQcHno4xoDQKe9ZzjeoHEYXZO2f7k2icc4MXC4OG3O5iawVFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibdJ9AFm3iaIpSyG0pgjjb8vZnoG8xwIBAickhZH2VHGcziaiaVqbjcZp3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaNXrSB1bictCYGpcWicwPiaApk7yK8y7XYuFxcJo6jA8ibxzouLljVFnweQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaPYArhP3pvic7A1iahnUGDJQ7223voX1cuMqLmGP6YECfySlnPOSuia0MA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaeUuNMWDCIoTa7C2zggia2VaXJrWRCw93gPGR0GiblNrETCSjm4yUDscw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZhQxPp6LvibCxBJEJ5V0lHFF3ibd7vnlB1QyjOmZooYw0p2Zib8qUvibibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaFT8Xy7MPkzGLtgBqX9ZfOKHD4yDNZUKTjk458ArW8SNyicR0gtqicKdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaic2tvJPrd9f83hGJT8JfHoeibVWAB6WL5GBDB6RE8iaw1Ha82ibLzskDaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXianfjHH69jB34dozoQcPxffu6WWnFYOyJYnxee5NUYLztib0AUTmTRmsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia3iaDet1VmvtQeAgibRwiboYPIJ8QPiaz0RyQg0iaBZkyKp0iaIzOk7Fs1vJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJ8mL4VvKCpnKVMxGVs6G9utWKXLeZIhaNIsMJEj7V14SDoPnwBW5gQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaswTokh9iblay1oCib3fxoBDpq92rfsa5axHXV7B0yumZkibt0Cy1CCOBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia12u1YP6licV0ZD1CiadkLEkhfL64ia1PeHXWoiawVdx5a9CGn3CoMSdsHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia3nAK5ibF3Plq5iaoqXoPCOghUr0YN0napc0iaYT1ibojqqEM5NVO2uN5BQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaHcEvMPB7EUiaTfxn7tKkiaL0XMOVVQwx99HtibNbBrSrX4eDZHx3QUyyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaRicDcbaKlVR9plWcBVJiasNXyHNfvH4u0n2CG8vtGUGZpJlqsfxNlxkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZicDibOCBA1aImZzwibsV1SxjJHehRLDfMiaLPrxrTc2uzn1PIAsko7elQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaR7qZic6MNArEUENBjF3BYMtxA1kCUiaF9N2KV0Ulbpm94CE4GhKyGrfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaEvljA89qTmW5pSD4uElj20cDJnWjGBUVvStBKEVOaERxU0pRWXqVBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaT05iabC56hNJyjWAtahgfbPaQL5na6krwKlqVLGt8r44nvkykaI5EYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaLh4QNvqsWh4apYZuDicPPDUibueibnaZuh0laxMdjsrib3ZR8lqk4aOyuA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaXxPiaGoiaSqzibyJd0hFBNvY2WOzCn1lUbHm2ZcunemkjXHy8TfibDMufw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaEWzic5osl3OFvibOedicHKASIMXLiaFtEv0UKwcIg6vqHAmINia8lOgm7gw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiamguvicyr3tfLbnpbwicYr9uaCevcmz6rGuMYzpbZiawQoamicK2vO3Qficw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaugZDRCMib6JATYpxEAtOenjW0uxm1DApf6leNrHicBwPECBvIWBONKzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaF0Wv9rzdZV76tBw0e3icUtibWicrLjJlF6e4OZ0wFbKQ8cicvuIjDoKKXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGpsZVP9ziaURc29gtFdCJXdOY3IZa0EFYLLVC7YYiaEucOEXZeJQTu9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaauSVq4nSANqYDGsrjIibyhJ051rfljOvaOB9fREdp5sljFiabPxrtNXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiarV7Odo8Kia0HKxdpuex7D5lQj4uS23ibKCx0y4iaXzicGbKQydiar3JZCCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia8dMZw4F2HyGicx9pia1ZibgpZkJWGB4s5VYibV4KzvPBFnXtl6VpicAFYbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaviaHibbHMOOKtDxwf481OME1TVwJJ6xpVBTsKAhsdnVzdLZTnVo3R7xw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaE2VYIKicZPIkyKRzufQMozoNavW4WCKTSia5ZGNzDY4cAwVg2Ee793FA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiauJqZuSRiaCXlXVeXZznLaGEHWweMSpN5XmL5ibdtjNqhNxUNnq2TpjxA/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6BfgVIjakdOsHiaibX9X6thyUORiaxbBnO4b1L8LgSXrQj0iauQKks8O0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGHzd3WiaibMKia5cYSrxia84hJ5hJFteoZ5Cc3BKrlmBSAlek6og49EOdw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaL3UZCxXGibiajyWufPibG9yPTMic014MnnOaGwc4chHdmknGJhficSpQ32g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4ZmechglgibLd84nkKPK0TcpPtAOiajqxicBZPPeNdcbtWiadzPabd2qQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5uaGmGbhBlqQBDvaSeL6aFzQicseial2GhCDQ53tNklAh2EcoObf8Fug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaNuYEjNmjVLRwLwuyOPIMVB1tVIGW2gHibkXxSp17VtKkKs7UA6nwsZA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiajzYbD3N3ia42kfCHzyjLM6QXdDlibqWKoappKPVE805gP5Av3icL3U4cw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGjFxm1hSJrLrGtA02Y3XVUAhQDhue8axGeCsv23F1KvdVR4U6jbnDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiapJFnSM5rLzGzEgo2b0xEKdvElDph0LrlxPdxT1MUxVfDwWt13DB8AA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiahJKhOI5VWZT7gSYbkE9h16K9Hics6dO8HNLpoliaUQicbJZ4FO2WbHXkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJcj5WunV0eaqrYzkt10jCRbxMSiaiaFa4l78OO39MHkmZgC26jk27RMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4ZeibTgJOPtxQVE2iafFUJsYf000dXvJORXoJUY46At6B6r2ibrvrAYfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaPicLAvN5akLMpg7N7RNCGDIXGzDmM3uic2NibpzzjVQ0icbK6wbibjxaOEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiay9DTrQMosBoPf9aDndCwibyOFjicCr8Y1dp7xAUaNL4ubIa4CFEJjXYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXian6Ss9Pg4BNOTRvL6MhcuPlNMgzU7I7TQbYuicGCWkQeY1poP78FID4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaNk33sNia9vhdLibvfsNDibQQHGyBpdo0N6pEQaZAtUgKt7nZDFxia9vg3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaPl7AB2GPn0mLwWiaqOehalTR2olTtOZpoCGiciaGrSas7LpzYKBQ5Qtag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaxrnD962BQYUbWGkMopaqjaTU8QBiclj0Qum0FyPd947NxGznFlyJfTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaX7TKUnhMaqHpPOhW25ficH99q0yM0chQ6HSVlRFic5T7ZmibeS08bCmqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia3Fyiaia8oc1l2ZQfOop9sg6prtWa1OVcnlXCic9p9JU86Gp9VzibAKGGQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaId74zqq1gVEvzlM8CqbIeicKYDT9ZXV48Y2amBOHlVHiaeNyxLulSvXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGBspHD45LNdIBARe9ok4CIDywFiapKf37dwl5zh4oE7kDibJ9WZDZdTw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia1V5waWOic61ibKhzlrh6OBw4Sym3gjp4LYBDUypSR15zM17BsDWYDwxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQDBjibicuibicbo5G8K80ZndBsiaHehibA3XP9rhwyC2RlIDOxZbMvoPkjPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia54vmFMBkAzbsHvV5R9VZtibIqmKhMtgo6NUUlCwQGxhyuJ7eI3sLBVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaicCA11sUNelzSHW3HNUgaOw3aGEkJ1WMksjUTse8KuRic5HX1AX8r29g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaBiaaeiae0fOj08HMfpXicZEQkRGadMbfusRNxCJVicOr55Spt4NuN1oGlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5YS1hMbhqQFY6hyEiaDNUFejxRDiaP5icOEEa2qV8f5HY3XuKFrFWRicqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4bXFbRGsP4wI7j9jrE3XTEicGTn4g50jbpvtRXxXj5Fbc5bwG938ibqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQbn1ymnLPwNJHIutMrPB5zFGibWnibRMejpBmB85LBgRdiaQwicmZicNV9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaTJMASbWTZ4Cn2ku6vDofzXnyAF07GyBQE6DIbibMQhcDXTVNA8vMMkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia2NyY5tYtBB3985G0aGib1IXax1adOcAGf77XEzSxeapRTQxHEeUj5qg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiahDicDjoBlm0WXRHqlFrg6fcXOGCnw01pQJiayFiaiamlR83ea03sL3oibtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaAk04QjBDjMGKjcbPicaLHYBWSn9NA7w60EWFzPI799HzUN0NlVWClUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZL2iamXkttFSNERt9HT8lZU37YsAJmR0ko8gbpaZq5RgdDbq2xz7feA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia03ldM9FBsic3NxGzuDgs8QMo7F7yd2pAWgoUOk8baiaXuEGzVjW4lMoA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiatibmFmHzfiaUsEibmMEFncbKH9ZCZSdD8EeZkwjr5H85hgruBkkDgM7Vw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6kh3wN7zicDTslia2svvXnia7tgOHEe1jsWD2kazPsYDq98Nnlfekg02g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia2qaNNHDeiaB3MajdL9icnEE6AY4N0LkhoIog8SUDk5vT9wmj8jMmiaQ6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia9TicgiaDiaXdJ03JGLuh620BZwGD1srFvOfdrbOUmfCZVhN2SeTzfoMkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiahxGWEscUNu9lqvb4oQIYIGMiaVg1oyUsF6qicLYiaicibEu2JlKD9SMMaicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaVehdQFZwZ2cXcfjgcqqUahPcvMXUxWDuhh9jticaJsiaBj8yBuibNyn4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibiaPg4BAKjpPjDqDIP97mlKKRiayQEUImxAx04Zqffbia6HS2UgL8SsGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaj5wK7ljO8iazVtckq8BDuuez1PBtAp7tP9f5JicJGhO1a3bYhHicFXkhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaFoK2sVZ7VZgIlMxcSC3dbezaS9TZITykCkBLWgB78vlwPTTMiboItfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaecpo2KABRjcPqSQfH7XQOo4S4VErW2718ZkqNOuEVSFibeLMgfHVhaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiamElwRcsfawbW7rHSsCmq4ZXEhPqObVyxDCR3OTz4aSPQ97RicsxYcVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiavGlykeFFz2DtQZ4VVQLknjibvmPaicwzU1zCnicicic15hSkiaCuxibIjkEug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGjckwXL3ph2qYTHyia9v9pbUCTuFRuBAwdreS5XMV7iaac5bwhRk3cuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia157ic6LjK1iaa01lB0OtKzbYPBUibSrxeZliba3gDhWyEc1tgGSlZmw8Yw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJJvCHRUWaS1INEKvJUqEEdxN2bcGerJ27SUgicHv57w4oSGcUH7Fktg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiatylWprWLVfZk4Aic4zM2uZicFaRqO2c0dITibvaKp7WohmaRxcEIJsB3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaIgVU9YjIcgibJyTkWAlxe9eIWHsx76fze2mdBGdcCGmbPKkDlcMk2Aw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQ977KiatKreMGB2wibmYJibHGeKljSNicnmMuCCKGo3HFUpTa95F2X23eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia2IOG0nicnkTNU4qrlcrAhVLqicia1UelQzdU2Fcf7Q6YXtbM43LOfGcxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaBtcysEddJXc8sGsiaXksWl6LWKElGFucU553X2wzuzeOGRtfBnVY8ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGAOT94QByibrjtU6mWwd7gjaPM2YakTlwZVjhKZas9mo4ND2GpWHVOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJmUQ8wc9o4YGNdv3TK9GlrIlwenmDBviauz8RJs2MDaA5fmIia0COeYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaNzff3EZQR1JBUQnvgJaeA8mdPItO7u4PU566v66nBibuiciausZ1vAkqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMetKrrHCrSfR9LH0TL4jiadpxbL2ubWssZsfZElUUIyiaib2tr6DW1loQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaRo8vZroHmJ7dwUiaKpCy2q0eUw39d0eZqOiayjb5ibtsIAJ4017IhC4KQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaAuulibmR8gYURoDuV0Prw8XcuMJzP3GRiadGNFDfY8Ce1ia7T3ia3icYNKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaIR7vcJZibFdeujhNnzWgZPmNBPYvv03VX1vkRYicHUibzAUdpYtWow2ibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaegVz7IgNkO7xvaib6ooqRVC5jepgfibw58hyDmjp43BibgVGoLNcZQU4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibnhM1CFEIKdI7HyAxU07HFjBxnFK3gZLQ9GImsNI1wfBFjiaicA84ciaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaw28VgxjLia6KjfHSoVMjHwRv6zFibZ9EWdJwRibibdr871NqSClnAeaibkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGFLOOia4Qv8Ky72PMfMeXBz9aBiapJPSsA0pX7rxSsyB17O14CChXJjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiavavNMAaiceiaQ7eVxdAV1ppCXRqW8ykEQ8iaAfjHgoHFcHOexT3HLTu9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaCVQic6HmyicUt1swkBvj8sakZEIsXdKsJpFBZfnsmKCuOuSpMkZWHm5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaiaqWLmu4QZNhaSgDQRDtN9PUoEmxWViaxdd6OwPs0QyiaErt7BuUN7QxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaUS3tXYLTH5tVnGCLGEngKwkcbE1WCfWzHlmrOhJftriaDwFNwpIgicbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia8AJG7zbB9Gsd30c5QZVZTGHBOjVMoibdKQk5znMkicoabBZpUMXevW5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiav9pnh6OuUB5WVVq33G4G9A5MvpNjPEJxr0cyEQsDrjXOIPl1Bhib6qQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiay0AicEG0uyLZnmXxwFzVMenibKibdqCjBAicZbJYKspFdyWmxHq2M4zJzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6Ud6w5s520tU0wutiacLtYwBbhDAlanicTC8VL42DdydMrEicytxfs3YQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4iadZ0ytgrnic5GG6WVQ0k34fCkfxHkEHPHcQ9EW9uvibl4jVMZJKMhjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4AC10DJWUcqk7iaMCygiaV1vuEGWjYvsFH7iasEgoywL4YX0elH1pvv3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6JswJBaic74kb3SSicGWs6FUHO9iauaLhdae8Yd2DxJQZRicWAichIPeIjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiapUUPtdiasY0tV0sIy1cxYYLx89cN44gasu51pVHnQpK2UjgyoPjSuQw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiahUR3FyqwWt9zpmE2TXCxMzJR99LDsu5eGEyTtP6a9WQicraG5VF5p6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiazZgHTNT5tolqkqV09AqQ0dcY2KMCtCiaicEHB8mTHoVValsIFz3WgkzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiat1jsf9icYtSSDnLYRVXmG63VDzbb6WbyGBz0gpz3UichrZOxqBmapG8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaADD6gmM6bHriccWbYfdIibibcDiaXTiaFShc0Jfn2cowQkibXVsJlGic2GeWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia7s1asWORlicOtXm9ZZiagaF9xqssumaVrPGgf1gVnHv55Zm4hTs5f8RQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMswW19oCOuLBzlKtTt04Y0ibuvOXkh3Fn8xj8jhyueMNOrk5dQeicqsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiavfkGCoANPSKCceibGVtDTGuPnG23UIMicJo8e59lmH3SbMUMJSZ44Ecg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5Uu5GMoTrTCuoZfHGdWGSbkKQnbiaMOT9hAluVIku0J9RkaCkGN72Gw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaDBx9KONnxPyK3ZA7vllKyYiat2P3ibByvicT7supfkFQufHicRqqibubCZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia0S8j2iabt3lAtf698b5IbjPQnsKz8mrZuQJicbx7aR3mLFTUfTVEdN5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaWCt8kTlAy0AxRdEricoN3aiaibz1nB83qSByrgic7syetib41PwRc5Gbbng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaofqjqgI9SjDppSOT11ZGdsZsJ92Sae9mvRx2cLCdX76IbibLB3VxiaMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaOWX1uR7HLdGvgJJpIQFzoj3KVtzPHqRVmmUt7EOibSXtaqU47YXA4DQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMIVReppTKybzo1nib5VKrWD4N7c0eBibxb1hYaea7fF7lcfG2pktPPog/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiavDgcNM2rwyTVoNYNFf1KmKprOd5erDYm9kSG622eEOITLXSjuBIEFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia06F56QfCOOQO4ptB7jx2NtZBdHMyEKEZDfrKA50gia0M61Qf7iaDSF3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJSc3icaxLGKJrZOxu2SC98ICWhwPB6lyGakZ4BLpC6YMLJ8jrlO2Diaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaVDN1aibicKGt8UOeD1oFyVGtOYndCjJHQ1W3zrBcfyWibOYr4uetNqlRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiagobhEDPbmOciaKIMwyJicKSYLQK1ibPictfmTDOffaBkPUqdkKHnjfHjQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaOAwRKoQhn2Y8EIepJW2zW2hyOTxy5XuqNYB4HVaCe54krgNvFMpj7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiarLGsB8W9ibfn1zJ06J7Gk39STM5BymYsHDOlFTpzRASt5ONZ80KwcmQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaF3F6e97icnPWic5NlIFoV8WVL032m9sPl6xNVtDwQSZ9F9KN84ib7fjJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6Xxyc81Qhv2dbcIN0qHW03RYCtlNLPLVGD9zH3VgSGKgeBH0kYQp1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaLicIXMuuDmtCpPUeF1fs1j2whibuJrmaak37ibkdsfDlbPL45MSLvS5rA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiawiavRS1XztvRZAuK0icIR5lVmFWRG4iaoX9R1s38UzfgEuJjB3XQz5GIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaawqGvcEsax5bQfibB3jOyVeKry9qFicrcwU4ibHoJBq7eqCy9EjPv9RaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaib0soaKguBfmzhFYib7ianTrOmjc380SKNx8EasxibscrYFyVqjmDwSticQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXianEl4orXsSGSjAYxEVHzibviaV7TKKnZGRia7nkffWagXicve1Yiboibh5FKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZ2DmzVcrH7z5tU9zDZylzm8EJWffQyvic2fcoMHh9U2OnMkqAR6AYrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiakRo9g3ctLvtictsluvB0JEgb8LficoDpn3xW5UVnUPk3Ve0KBg3App9Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaCXpNEyevzrL8DqCPmmBDxLAR0Hm9CI8wKAj6NicK2EP9emHdJvY4kyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaeSgXbTc7ox3LbRxuUH0iceGvPanmshKFLvAzIwV7XwTl6Dc6EBlM5zw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaVN9HRxRO7f1BzkQ9LJkXvWAGNAcAkIAPaPAvU4JWndZpIiaHMx5PC7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiarCl2icMYgZR9fVSdSibAiaykRClpLPswry7Idypp0qgmCjH9MUgqZpKZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMgmYp0cpxC6LS1xShWpWTDzJfJ0lWqATSvwt94f3E6QEjFG5aeaJFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiad8RWB8b3RQgiaicBNcM48YdVOVehY5c24kYh2hR2UOk6TmSQ7O3DI13A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibkY59vD1X4LtInLjf7YmCbAbQtTEmK08Hh7dbRttqrB48tq6jc9x6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiarlmiaibpsbR4MD8piaPcia9U3NmB4MyT8uGaDF0ickac9kJcxwrgY1aibOaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiagcRDQF6IIm8SHLkB9n0erNauoL5SStz68EHYYqY2YMoOvYG2kRk4Qw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaLXNCMPNlVOPNvwBg9xnTibE5W4c7LAZ22kU8rCibxkgaMa93wbic8YtMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaAzryZnO7TrcbxiaicSPWLPqphkpOgL1tl5b9Yx8diaia8ibQoSHZ8W1zzUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiajxaRUmcvQ4ACrLq5JcIgSBtUACBHG3GcKsMRRBE7wQtp0503VepHPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaujD8GqiaOicDSKichLTqX4XNNHafqmgP3lkou0ygIiaNPom8SVEDjahfGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaqHyHjlr4Z0dOPh9cOoibBJstXfSzsdZhwial2jn71NSfTOQibmuN0gcqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia4eG0JSddKCdKb8diaiccXZM3xUl1etmtTbpvmibDbRBYrHkBbFy91vOOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia3WGVZJuRdH7rZxponTPib8lE11cncDChL89fAj37ibujZVibBRZujKr3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiawkIZRl20EVJuOjRvPZLTiaAesJBeJyAibYE5Xu7icnbsdrKiblKxXo3vyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiapy7qicG72PKrjgkd4gyhnIU40N6ppkvGgKc2bXlZpYHmMsxjGrNZpQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaxFPkS3DztySzhu2FO1l0bHOmiaiajXZWM3FGQCDU3wxkcUVK8m63zJYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQfD8JEPp4WIOibtbwof7rFPQDGfNY7NBtuiaricYASZobjNJWkTVGEl4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaxQtIgXENHq6KsOXTb1IyQpmv1YkektR0jHB4AND11o3lJSf6OgIuwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiareibLicFPhBjTlKsx5lKAhvFkRUpfzUKibSZs87KDb4QTzuN55yAiajfFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiao3R4utbOia9eMmlHUkciaQicACly0oeG0xz0U6Aflxu7TzcHq1BWDWwVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiapLhIZskVaqs5uQnhlv1LpGJicFwALFECxAic7dq1yfDCGc5icdlUM4YicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaBianJtJ2D9ZSicUTVvL2UtWgeUMHQvAy6fxyF4uRgzjNVrdxOibO7ka5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaAFyh7pYavFMKlWWiaOwBAZDpEAaw0Wicu9HnfBrUxabRz3SWU0z04ib7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiampiarT78DqEqUmRIdDDzG7wZzT0gGRexFtp67AY3mGu8Fsl1tutzxCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaPnFqEWib0oHA2WqMR0amITQtZR8Eia1zpWbtyBEic0tRVUk5njRicUULRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaqhaUr70oW6FDUOe5U1kcGhpD3U3YBytMOl40ntQoA6kVBWxdRoYEMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaPEibLjrpHhiawYRaGpLe0aMsmZgIyZzCSO17WHffogOJIwdLHW2OYUHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiadjU9eLGq0pSibnrg8RDuiasyql7Qnd3icpOKwNFLY0ISSUg5JC30iaa5uA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaC4OmwV33r87Ua788xncCutmEDsEndWkv6msXzP6qSu1O2wRaHxDxpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiatibO0mvibZLcQLZJsdibgyoq7kVDicxBWUhTQHRmIM1mdTuJnZiccDYnEWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiatH2OLNWgeibjFllTJnEVia47KduCxFlFEwllKuzQ3iaTLFibPsq3NeNic7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXialINPicoOm97223XUJQiaxbs6l4oF9byRjDel4s6y29RlbTcCB8ibHwBPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaTQYZZJlbMMKrrrLQ3KvsF2CnDMJVgc2lZVGMpQlOFYu2cJmh53Meog/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaD8r7WQ91qqTneILbPMc48xziaA03ZpqxhiaoCvyKiaGKFiaaHruog7lNcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5ywicWW0jl5a7nNZJmrKwiaHUBsKPoIuXYLxZLp2hng3sTzSia02zRaBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibKuGhqhF3sFosfAvUaAZqrdyaw2YPZkm1Gk4IHvX98Uia9fgjWBQKyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQtfZweoRbo0g5UJcEHicnM8zP70mQe75ob64H9FN2TdBusoGX3eI3xA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia57n4gEGCIiaAsrpmQDfZcOefPC7tw6uG1VMcmicoIGnK8u22UQym872w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMCyKj3OXRq1ibht4dogpL0Cib6NUg01GdFg7BfPcNibiawCVYsd7BzSswA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiadjXvuODMZGfWSQ3eWt4IqsqHOvw1ibUTLnNg8YicBic6woZOxnia93pwIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJHDZOnib4xibujUDJ9fDCMHURIqmrN4EZNRHwdORL9ByIHABe46XC1ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaFJxRDWv1vvzDsYOmFvZJTla6dCNXXXcibnWn3eb6hxoy7Kq9hb3Avow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaWKKYFfbe3goaDGrymEwRbybg7VfgygwOwrxAOz060JhZ7jXXw5N60Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaowoyLBcIMtG3C2Uml9lSSpChc46jOReGUia2QenmqialQXOPZj8Imlng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaD5jDrOia511ic17mib5Sp1UBfh2lnd28MrxhtiaIWIgvsSfLgZMYYY5DSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaFQgVeOmRXRqGt4kxbUC6uRvQicV5fO9M3OFJLngIDxuobBs6YJIhLSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiazNHWiaAwyeU05NaP3V1dCIaOneSMG8285uCJ4vo43rPNx0NPpavJcWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5ibFWMgZLqIImIricKhRXibpOmEht6PqRybStiaMQKibdGOHTHazlSWCXmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaIE62uCAxZ5G7CYcvpMvGQkJNGFE9vFUTx1pNj93DJOhiaZIDEK9guPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia5rhw0ZVIQYuCeAW6NEHEUR9Bvxxpagba7eIS5SFk5NqHUEXofyneVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMcbcepdFgXpdun6cAibAJtWmXMbr144YZB3eDy5VDGoRUDvk5n5LVuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiajQpiae5EZxv2OXKN81MPh4jh8CgwAaPrQiaL3UemY45uiaxhkH3AicGexg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaVVQqqaj6m1eyc4BrQKfFxAgY9rAqtVkDwFFndbo5B2PL3zIYsV3ATA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGhxSX4CzhmOSxgpCWEVAibDCl19psJbBNYuGoh0LlFXlDib5BKJUqT9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiadz7lo45EZ1k0Ffg6mFGPib1DjxnDGkNn4073QavYjmDiaI6nX07sMebQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiahJA1fuvqjcH7QnYSFcCPhkqNkOjSSWgeicGrmXENoTzOzAWMXibyO5hg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia2iakuvVYEImJDuIM6wGia3rdCoMHL0qqP1k7jCvlrE3NicHM6BInKXDKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXialuxftnicotAbMicLGpGXBeAydOaxootFINH4E13TragT1AQCbB3kGVug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6iahG7Via0SpLFDDrSWlvYGlILwRcubibx39mu6ykqvz3zjg8PQtf2iawA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZfZCmqkHuA6lia2qSFuSHfvFPelwqcLiapokcW8gk5PNMBp66R6icC3Yg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiavaaJzodTKBkALvm324HrUyialsmDC76QfAcgNndHW0E6FFjCxTonDLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaYTvibldnzlucscaZgic1OkMI3uSAbIkOUicWczEQvibpP9ALnAMVmooicVQ/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaZU7q6p2dQ2I56ibavicnlO0WhXVBlYdib86EA2jXAq3maVFfiaib5dg8ODA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJYUanW8ibOVZJAFwH8yRezFlQOOoqdJaQhVbl4KkDpiclfE0obxCL9oA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaTZCqXYWp7O8ao6fZKWhe4Xsv75IwH4uQtrUrn8akiccFTsyFianN9OTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia09F024vmuos27ycVmkf9XExoPZfeAaxnK6d2hic3BzcQNicibXrqwcV8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiawlwzibBxpCMH0wPvCrCbRd422nVR9ibT8jnViaDFbWTfichBtFVpQaR3hg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia58ho4lLT9fZBfV2ib82cwGCKsRaa5RibT8QmYLvUWqLa1fXnL5FdWboA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia2jiau20UsI7DHTeGquKtBKfOgxgJRNuv8Zdb0OnvkdVeQic51JUgUFAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiatibtHgqN4mxjc9RdRRDtZrXgokHDUjTTG4tYibW3cddmvk5NGRX5LLDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia6th1QkN9Mj1ZrPkXhF1WRzLK6LibglsX00MAl4owfRn3Dh9Wog9niaGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiakJJjEmuhSYxTlrtkYiccJTa4T6t2n9hlvlUibX8IoDfjfvbIicofCfZhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaEbkyNjg1ofgTHiasTq0swOd7FXN0D2FGS8aGrA09o7GKONwyM3PjKbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiam5cicbnwq96CYxgBEEIRSQxTtpMdAicQWZvCANrzWdxDDew6Sibzw9GVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXianzF1DgHlJc2hszMzhZ240kO62IGOByDcX4qGAuk3ncvq2LeEPA8n7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaic4lBcSmeA8rxyQYat1Iibpfkth3lXXdNpGqQkwj6l3GPibkNYNPuTSaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaYFFo2PqXfNJibw9WKVTRz0pKfIEPRDeqQocGO0HjtNXIJzPbXlaDpRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiapYBxibwSWZkVlY9Iw2SD3Q1gJuyIZLldCmPBqca4KMsGvBVURmAuAMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiamNrJhW8TxfRLZdnyHsn7bNyGecx5gMYZyjh5vRodGcBKlahbHtNfbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaINicxhnmpHCPEz6Nt2rytt5gOzoibCDKT5A7FeJ4KN8qcibJlvN3FfGTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia75eflnnEUDxl5SAJDODVwPfZQZdSfCZYuYP3V6UBrOvj1bS8z04wzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiawDYics5gI2m9bdC19bfjzyxF37gQQucOc6fj47KBd0Wupltyf0uZbJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia7wSlPOdtujk0MHDTpxHA76pPSCGicuM81G2QC7wLGR39hrwmucQEPAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaKwgAahiawm4iaMiclS2FIN5xiajlzuTWV2fIRGK0PnQ1Qc0lxTlTnc6o3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaLRNrLWwnL7YKUn4kfbx4H9ibtOBThGEuyHzsAkDjL8Uv8cfhX3ehuTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiadicjA09OdevUGbgS8LicbawVS2iak0WUiaFkKhJHeSJjjibXVNc6gg2RTwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiasAysIcaVFLOcUBk9iappHibqaCAgNEepN6SsaQbk2UKPO18VlWrATYlw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQCiaKPFRowWPKcbMRgWV7jbV5VHc2BfBLWOCDxoZWlQ0ml6rBAVbeSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaYLK6rCd24ibvDOYWRibdzHwWKWibdTNccg5a8Lo8ScFeE0VwZ12FNI7Dg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXialicMWqIsqYBxKvg5kzbmCoIkic9nfn7xPdJW06KKnc4bSBIPu5PglT6g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiak6MVSL4WCiaLgcnDpCOKMDH7L3cD2I19eJbicxXubTOtaTP8H2KOvHMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaXib0vNgZVrzYXWsKup48D7Xnl8SP1K4AUXWBDf5CIgnQhFTIJJtP4Iw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaWnj89miaict6Ion17lczb2OkbUianZ5FUGhMHAPibXI30T4goJUzibe6pZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaMY8JPzXewBeU6KaruSvaYgT0jQebh7aMoy1RxBwj2P7l1w4VQ8PKvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia07ucP5XO2ibYNibrqf0yujDvYt3JshPGCyRuBoQZ3F3E7HNpXBzMTIOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaLI7o3UovDAM4IutGOAkdqr6Vl1wroIib04XuIUpP6JGd0GgOFSQU8Cg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaCB2f02phwReWYTfP6PvFXE5StUpOP1zjiaQvVDibktUfW9A7kr7aKs1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaVh4nB8WB3VNAfycv0zic46gVorTBcADxvpDtuCv0Wd3PcWH5qs8057w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibqzIcUvZibLme4NriaPHnfX3ooHHUkd75xZXibY6bB0Sv0TLgSV3WJjqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaQgia2HB63T1cWBZ9ickut3aNUxRxYGrX4tF39vkC9icHT7Ay8DmoOicvww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaDUaB4PkGFgaCicqU4WX2ibG5WNqruC0fYQa5v0icG26OatwicIQBSarjhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaGdVI2qYmtOcIoRiburn3rWo7R6blMu6b0WZG5jBMX5vEY1qKCPc4deA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiacWp1iaYyibagX6JxEx2xMuOhSkEZ3icj6bA5ZCpmOIdJTHfTWqibgo29icw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiat7tkN5wHiaC3HShWjJcd2mrsJ8JHk346Tb7J7sbK2WTBJRYfianJ9mUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaBMJNwQdR8Ku4b92J2y6MTXBIzBc79PgWYIFX9rhx6ic1sx4CJWr3gBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaN7v8QzXGkMGPGtEkOApadnxY5rLhdsUWLTQxrztCn6AYhxZEqRbrZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaibCzyOGK6LyvCdDHWRCBBjmLOyV1JibHAeYX9WsFyrQWfGd1D1Fia7dNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia8OzdFvoRWnic3CWYFuiaL5vDRW3M3yPficvp69ZWJArqSJgk75F2XlQ9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiafsTThjx2DibhBU4LzFE3kpibHuI40dajXTE8kLs0ibKiaCMECMvwBNgiacA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia0zrvia9qoeCTum26gcHAtmrZIRUtsYuiaoicaGywkn8oib2iaicZC2RG5M5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXialCeQ347eKicia1FdldvcictTmnIboZA53mr8bbiaV0Uae5MtyvuVIib7DkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaf9xm4vIAydIndHGM6QZ9zLZA041sff74ZqpeM1VTTI6NRQcpS2lRsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia86CXs1LkRriaKSY44H11rmEMVT3TYCYC7quTNTfHyY56HpDZmRqyggg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaFp82oKAqYSs8O8QoRGg8MYmr6fUeAicUlqWc2sVX2S22bN9AQ8TbicUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia8YdKlGXD4JUuZRQ3f9u11k0TMG5Yp0kpDAJdOhfA9lFJTNbTBkPung/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXiaJTmIibgG6ict57kCyN1Xnclibib8DtZPXFV7pJszQOGnu6acuNialx9TYsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1OtiaWHIDHkyks2tyB7YXia8gxnhHkoFx2q62oecNqJQhuJ1MqVDL2N9aAlicickulIicaEFuLpibgAGg/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

### 一、基础原理：从“铁芯巨人”到“硅基芯片”

固态变压器（SST），或称电力电子变压器（PET），是一种**革命性的电能转换设备**。它的核心在于用**高频电力电子变换**替代了传统变压器的**工频电磁感应**。

#### 1. **核心技术路径**

-   **传统变压器**：50/60 Hz交流电 → 铁芯磁路耦合 → 电压变换（体积巨大，功能单一）。
    
-   **固态变压器**：50/60 Hz交流电 → **高频化（kHz-MHz）** → 半导体开关与微型高频磁元件 → 精准可控的电能变换。
    

#### 2. **典型三级式拓扑（主流架构）**

工频交流输入

      │

【输入整流级】  （AC/DC）

      │          实现功率因数校正、谐波抑制

      ↓

【隔离与高频变换级】 （DC/高频AC/DC）

      │          核心：通过高频变压器实现电气隔离与电压匹配

      ↓           体积仅为工频变压器的1/5-1/10

【输出逆变级】  （DC/AC或DC/DC）

      │          提供稳定、可编程的交流或直流输出

      ↓

可控电能输出

#### **3.** **超越传统的关键能力**

-   **双向功率流**：能量可灵活反向流动，支持能量回馈。
    
-   **多端口多功能**：可集成交流、直流多种端口，成为能量枢纽。
    
-   **实时智能调控**：内置控制器，可精准调节电压、频率、功率，实现故障穿越。
    
-   **深度数据交互**：作为电网信息物理系统的智能节点，实现状态感知与远程控制。
    

### 二、工业应用：驱动智能制造与绿色转型

SST在工业领域的应用正从概念验证走向规模化示范，其价值主要体现在解决电能质量、能效和柔性供电三大核心问题上。

#### 1. **高端精密制造业**

-   **应用场景**：半导体生产线、精密仪器加工、数据中心服务器集群。
    
-   **解决问题**：传统电网电压波动或暂降可能导致百万级生产损失。SST可提供“**数字式稳压**”，实现毫秒级电压支撑与波形重塑，保障连续生产。
    
-   **典型案例**：晶圆厂的关键光刻机供电，SST可替代传统的“变压器+UPS+稳压器”复杂组合，将供电系统效率从85%提升至96%以上，并减少占地面积30%。
    

#### 2. **工业园区与微电网**

-   **应用场景**：工业园区内部配电、光储充一体化微网。
    
-   **解决问题**：园区内分布式光伏（直流源）、储能电池（直流源）与交流负载并存，需复杂转换。SST可作为**天然的交直流混合接口**，简化结构，降低损耗（典型环节减少15-20%）。
    
-   **价值体现**：在浙江某“零碳园区”示范项目中，SST实现了光伏直接直流接入、储能系统高效调度，并平抑了冲击性负荷（如电弧炉）对上级电网的干扰。
    

#### 3. **轨道交通与港口**

-   **应用场景**：电气化铁路牵引变电站、港口岸电系统、全自动码头。
    
-   **解决问题**：大功率冲击性负荷（如机车启动）导致电网三相不平衡、谐波污染。SST可动态补偿无功、抑制谐波，并实现再生制动能量的高效回馈电网。
    
-   **实践案例**：在欧洲某货运铁路枢纽，采用SST的牵引变电站，将再生制动能量利用率从不足40%提升至85%以上，并显著降低了对公共电网的谐波注入。
    

#### 4. **传统产业升级**

-   **应用场景**：大型电机驱动（风机、水泵）、电解电镀等。
    
-   **解决问题**：老旧变压器效率低、无法调控。SST可实现对电机负载的**软启动与精确调速**，节能率达10-25%。在电解行业，SST能提供大容量、高精度的直流输出，提升产品一致性。
    

### 三、核心挑战：从实验室走向规模化应用的壁垒

尽管前景广阔，SST的大规模商业化仍面临三大维度的严峻挑战：

#### 1. **成本与可靠性挑战**

**挑战维度**

**具体表现**

**技术攻关方向**

**初期成本高昂**

当前SST造价是同等容量传统变压器的**3-5倍**，主要受制于大量IGBT/SiC器件和高频磁元件。

推进宽禁带半导体（SiC， GaN）规模化、降低磁性材料成本。

**可靠性要求严苛**

工业环境要求20年以上连续运行。SST包含成千上万个半导体器件，单个器件失效可能导致系统宕机。

研究**高冗余拓扑结构**（如模块化多电平）、先进的**状态监测与健康管理**（PHM）算法。

**散热管理复杂**

高功率密度带来高热流密度，散热设计直接影响寿命。

采用**液冷/蒸发冷却**等先进热管理技术，优化三维封装。

#### 2. **技术与标准挑战**

-   **电磁兼容（EMC）问题**：高频开关产生严重的电磁干扰（EMI），对自身及周边敏感设备构成威胁。需在电路设计、屏蔽与滤波上进行深度优化。
    
-   **控制复杂度极高**：多级变换、多目标控制（电压、功率、平衡等）需要强大的实时计算平台（如多核DSP+FPGA）和复杂算法（如模型预测控制）。
    
-   **标准与规范缺失**：现有IEEE、IEC标准体系基于传统电磁设备，对SST的**并网接口、保护协调、能效评估、测试方法**等缺乏统一规定，导致产品认证困难。
    

#### 3. **产业链与市场接受度挑战**

-   **产业链不成熟**：从核心芯片、高频磁材到专用控制器，尚未形成稳定、专业的供应链。维修维护体系也几乎是空白。
    
-   **用户认知与保守性**：工业用户对供电设备极端保守，“没有坏就不要换”。需要大量成功示范案例和全生命周期经济性分析，证明其长期价值。
    
-   **与现有系统的兼容性**：如何与已部署的大量继电保护装置、电能质量治理设备协同工作，需要系统级的解决方案。
    

### 结论与展望

固态变压器绝非传统变压器的简单替代品，而是**未来能源系统与工业配电的“智能核心”**。它在工业领域的应用将分三步走：

**1.近期（1-5年）**：在**对电能质量极度敏感或对效率、空间有严苛要求**的特定场景（如数据中心、半导体制造）率先实现商业化突破。

  

**2.中期（5-10年）**：随着成本下降和标准建立，在**新建的工业园区、轨道交通、港口**等项目中成为优选方案。

  

**3.长期（10年以上）**：与数字孪生、人工智能深度融合，成为构建**全域感知、柔性可控、高度韧性能源互联网**的基石设备。

克服挑战的关键在于**电力电子、材料科学、通信技术与电力系统的跨学科深度融合**。虽然前路仍有障碍，但SST所代表的技术方向，无疑是工业电气化迈向智能化、低碳化未来的必然选择。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslkOMBSb4GNk841xrAyibEZFpwwqAJvFRxndwFMjJnsF87GZzjyrC7AoIhsPu7LzkGhA2TYiaqQgbew/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkOMBSb4GNk841xrAyibEZF3Wbib3qpKXiaj7P5icn879pFedFCfw33gnN8rMUCrrTvoPmS6gmUBj3Cw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkOMBSb4GNk841xrAyibEZFggOwHxJ9TOkYLUXiaZhDicyqA2QVlI6It2IZ1ial8BqD15MA1WL1m2qtQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslkOMBSb4GNk841xrAyibEZFYrMnSz862XYtZcIa6CycdIZScjhkDiciaZcGLeiaxY8UhwTY2OxibE9slQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)