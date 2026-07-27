# Step by Step：在PSIM中搭建NMOS驱动IC及测试电路过程，以峰岹芯片FD2203S为例

原创 傅存敬 电磁散人 2025-09-24 22:13 广东

> 原文地址: [https://mp.weixin.qq.com/s/Otr\_etiDvv7lkp4KfqdLMw](https://mp.weixin.qq.com/s/Otr_etiDvv7lkp4KfqdLMw)

本文是一篇承上启下的文章，在前几篇文章中分析了BLDC电机控制器中自举电容电压泵升的原因、特别是[暂态过程](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484033&idx=1&sn=daef79f20987913c3121245dc42038f9&scene=21#wechat_redirect)以及[应对措施](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484026&idx=1&sn=e596b36d98e6b58a5b22e6ce4ecc32b5&scene=21#wechat_redirect)的基础上，通过阐述在PSIM中逐步搭建NMOS驱动IC的过程，为后续BLDC电机控制器的硬件设计基础做铺垫。

按照如下过程逐步操作，我们一起重新构建FD2203S这颗国产NMOS驱动芯片及其外围测试电路（芯片的datasheet可在官网下载到），并尝试通过更改外围测试电路的器件或控制参数，观察自举电容电压泵升的暂态过程及其影响因素。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nILKSmRcL95AKwXxB3JKE06sNcH5kgAhVaIxuyRwRnr1JNhOtfkNhsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nU3Ex0UlToKFBF9yAQiaeGkt2AueGoq5ZicZkyibHzFlibt2Lt4tcPWNibYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nm5WjmbPAPE1Hrft2icuicn7ratibSkmeeicak7Kxe6n1a3tKMtz5qfXqdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nxuZywZtdJzw2Q9UCO5dH36HPF1ojyVh4h2wXpSrSCYuSicicic91QMicug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nzra1chZ737vFqXUNxpia005NoRKerRgPvtuPbe2EnGuvYXYQuoLMTeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nH6cpZWATNW8ian8WB620ia3OHbjVHHDG6WBqDzH9obFNnSM58ks8qFeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nNPTBUTlymnpBSdMBfYycqIh06f5yqC0icDyBzl23CrMMbEB5vZLQ1jQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nOibN3SB1micCF5ERv2wOU8rwq7Z471fN8Oic9vAyfQjAtylKLXORFYbkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nNG9UjGLckNcIBqj9AgibbcIrpzH2iaRCdaZPOYCyhycp9vBLsNDibaRLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nydibLK5zqRNkb5HGVByDlMqbIn3hek8NaVXZnIHm04wylchsRXTdXTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nDhMstfoNufh57ibUhkG9n9TSXosa2NpjvJKribibJyLaQvZnHAVQLp79g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nt9yU1yYpEBibqLOMgCv2lg0g5e7htOKSGcFiclF5eAcSCQ5Ud6AQOxGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7niaVJPjRTRGk7ygKpAgauVWW2LOLiaBxem2OdPA8Q5AOJKYmNWSRR0PqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n8u9rMYRJshPO3svXv9LaNjcz4Ua1OYXzxicNibG3I2skicAwnymQHaHGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nicHcBsQNSXiaxibFpuQIuvAAI4ozjCtdxhofhK3nMjO9qsL2L5oVIv9gw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n0YxJsWZo1daicAHTPiald7bpiak8DDZIreLknJicCRp3zlaZaKoLlwlgNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n3hiaoiamhS0HdMueJv55ZoxVPDGYtHic8JicCHqN0mycbjakttPOV3cticQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7ns2b2ic4iaMMRBRO4bBHWCKFOia2L6ZIco3jmwibdicHPGUFkvF360icx0bBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nDJoGrVrL4UbaHHyQCHic4hmDqqTebNo3x35Gbn4yfnNlxHp1xIh4QDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n9MHCN4RlCVJtibiabJgdazNCaP9JWSSHkBQ86Q91XUmC2kQFwtypvf0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nfR8Sa8PoGSz9h7lQpF9iafl0dIIs2bvibHYo68LyCs4v7Z8qt7GrQFgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nvICNpliapCLbMJDcVpeaiccjUyk7K9kv4h6KZwE2GnVS8KfVeQrRXHVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nU1JicTF8e4icLaLW1vr3K2wGmicHyqKqliblnn8BqDTEjXxap4wFvXUtKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n1AThB0UDYd7z7lv9vs167a24ukINpQKiaN3t62nT8icqMEMbOJKtod4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nQkmUJAzfbO26Zr4TSe0qBdOKyHB5hNYD8QW1UdESsVsDgTGLHuOrZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nlRyQ0n94FibK5LqNianKvrNL35VJIqIIlF7iaUJd5S514LcfaVunkKCvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nPtKPKaayeR5RXpp0icrDOFFEjMhf1zmibWZC1XguBs5EPZicicPlynt4Lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nAej4mAr2GcFXIDYkw8d9Qut3cZn2vRWaaqIbVC4WW0CMz3auPWeCng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nVp0AKCeiaR0qzic5gTEc74jfut4srSMCTEAjRuggqJFmy7BC1k5VTiaBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nprGNJgLlQCMjkyMpDBUfZ02TkH7wEQQHUEcZ1Q64F6aXnksTOvIWwQ/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nxK9dCw5tTvAnVgksyt6RtrKEF5gNVU2IMfPpAibE031hKuqrTafo6Mw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n8uagk6REZM2dqMDQEVHvWMf3yVYvVNNSotsIYZ32CYkNq8ER5jswjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n6CeAhRk1gv0moYWicsIIoCCcDfuZv6Hhvee9GtLic3FlmRY484VOFw2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nLAEeTOrbaxrK9ibufasia9vm9K8PfYuic1remu5htriaic6y1mx4eCLNvFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7neHrcZe5BP2vMTBFoyJTEgibcuD9HCaCc3S6Wblr8X1OtD6IAhFeZ6NA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n9sUb9eicREq61VKV7OUiamnjkJNezUv8ibq0xSugKBXqaHnXjHt3SUAmg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nrKMWv7mLq1ayibIWqH9TaiaHmlBBZ9XMdhQWytUthCpCJVjXPz27DZuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nnqgXzAjkiaibwvmEaT2R98dLrr0ibIibme7kmicRNzY86pu70iay4rOyjcwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nvcx8iaTEZRRZ4ZeaaZmvhkPo3vOnsPOFZBLDQRoibKoEldiamQlJictkjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7npMRDVbbYibTyicIJxhib7sXggeZmlqsiaCK4GgvnfrhbnMO5XuXM9Wp8Lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nb0adZPZDc3PxszJnvoiaS3fc8NzOJoaHcjgzHsNadRVos45BicVgxyrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nlwpFGmVEbU40HJXZcTzVYkPMy5MmmwXcVIwylibcKFWpnSVAcVVcCXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nFNMMaXMPbSP6h65RIlsgdIKfwiaE1qvuwClj6wlIgzHswbcF34iaZ0kA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nm6fOdu0x14YmOjOM8dfr1e1o6F1RFrJdgjicwzRqdn4dIuw7TzGXIPQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7ncyrqciam7a8kZWUtIJKcPVBSwlcDyqbAbLbd1tib5iaeREKdhRsPCNLIQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7niceJnloXYNQM4rK9g3rEq4gujDQYqEWhOUQzVjichkq9LlUh4IxAvp0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7nTsv3RKJY3G0icfM6Vd0kvm2y16ibQD7IjTreGXZ5nvBk6WWibkJaEfHwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7ngmHQZvoy8PNicLibW1FvVIjEEJF3nK6a9daydZH0m4XmLk5hw9PwKCvw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7n2vBUvwIPM3urGiaX6qhCRwz8ujGoQibHIRevKEhwGLyhxw8hKjCt6ibWw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7ngXxM6uKW7IrhzkEguAslzqYuo886YCgzEVpvfDfTMGRuK6Cic7iajNxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGmjBKGLg83UpicBEyWBam7ngJ0xACyek6D9VDpZxhLu9dQ8cRAkCiaX5REQPvibw5FdBhrPzdz7HROg/640?wx_fmt=png&from=appmsg)

  

附记：

测试电路中选择level 2等级的NMOS模型，主要原因是该种模型既能考虑NMOS内部体二极管钳位电压、寄生电感、开关延迟的影响，又能提供较快的仿真速度。

且需注意PSIM中的MOSFET（3-state）的level 2模型，不是学术论文中常提到的SPICE level 2模型，而是“开关+寄生”的混合模型：

-   强导通时，主通道用ON Resistance决定电流；
    
-   近阈值区/反向导通时，由“Transconductance（跨导）+阈值”影响过渡过程；
    
-   自带体二极管与结/栅电容