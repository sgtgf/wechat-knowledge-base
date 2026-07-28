# 固态变压器（SST）中的大功率高频变压器设计与优化

原创 孙凯、 易哲嫄 SiC碳化硅MOS管及功率模块的应用 2026-06-28 08:48 广东

> 原文地址: [https://mp.weixin.qq.com/s/WgMSIJ3WItlbZ\_U82J9hiw](https://mp.weixin.qq.com/s/WgMSIJ3WItlbZ_U82J9hiw)

文章来源：电气工程学报

作者：孙凯、易哲嫄（清华大学）

分享一篇来自清华大学孙凯（长聘副教授）及易哲嫄（博士生）有关《Design and Optimization of High-Power High-frequency Transformers for Solid-State Transformers》的报告，。

大功率高频变压器（High-Frequency Transformer, HFT）是电力电子变压器（Power Electronic Transformer, PET，又称固态变压器 SST）的核心磁隔离部件，替代传统工频变压器实现电气隔离、电压匹配、能量传输三大核心功能，部分拓扑中还兼具谐振电感、滤波电感的集成作用。其设计是磁学、电学、热学、材料学多学科交叉的系统工程，核心矛盾是高频化带来的体积优势与损耗上升、绝缘难度提升、散热压力增大之间的多目标权衡。

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVeLMCZAQIibaBtFokZq0XD5HQKpibHicdC8uqW0qKSFSVG6AbWPo9K0PvQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVrOdIlKTyMznVXT9tAiblpBrUEibk0BPHEXardia3gvwibPNxZquFzCZLWg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=2)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVAIqDjuBa70n9icythapa28yjfsh4uEMymGMo9Iib5iaGC7wIVmAwwXgdQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=3)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVibwhiatp2tmpYSLBFDmaBsBPu5z4K8pbyiblOvibwWkh6PFfctGJovTyCw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=4)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVcfW11X4A36V05ibPqu5wfm8iaBoBgYZlGcrZ1iac55DOxibBvBFOGEq7vw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=5)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVrlxXWCsZxiaKaXUs8y1HMXCpRQJ15JJURXKn5fS17uzgPLXv0T4kXlA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=6)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV7RC3QHtdvZ0FkFe2Z1mbX8Cic9WebfOWAibzE7Df6YfcjCcubUSRIO1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=7)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVnM783XrtcibOg85WCic97SFy5ib9jLsSBQNNLPIAfZDriaH5DcIJxnzh9g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=8)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVFkDdc0Q02icxkBbDwZru6E3iaLtPk1Oqdlw0WMEW5oYeJlj5I02YIzEA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=9)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVicia8LibrfApEibZEVMnR8tF44C1kE7hsLKib7R3tRibTo9XucIdUDGMdCRQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=10)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVcfBKb4KpPK1xaY8G0vjSNzxVs7CqV3yIjfmOaC05xmpEXicfsuU32BQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=11)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVgt0pRhlxUgm1VzAibVedc9Jl6WuLojWTrlicERX6u5I9N5SlKc0icicndg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=12)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVTGLY6q3HZ4GOBZf55kPhJWHLITIs3FZc9p4x8HrOSNOtva6wcQDjicQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=13)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVRZ7XqribibfkyxY69q96bzfgiciaabETwgnxg8uibCmiafS7K2cXClECXjYg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVmWOlqQDhKr1O1sHXA449bAjSsqqpdUoqJC0lAHo0gIT9n8RS5jvyoA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=15)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVZzgsh81hequf74F8jEclCvt2eWmAePMxHqsTzQMxygJPBZKE0tRfDw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=16)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV67LvNO2icGOkGXedrAkibDGOMVy1jaicGGmmSHmW6zW3ibNpsicV09icnebw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=17)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVLggg54xF7qMJKtN965ibjW209jgD2oVibwVTBYDVZrTZSrm2co4JqFIw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=18)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVkZyODgkPpicUQzeo44xAV0kDnurmq6NVsFNEWT9NSOgHH3AlsDVicNjA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=19)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV4myibIDs5RmAb9Ie52mqVmnQrs1kRQoATs8GTc40HzadVHD4ExtyB8Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=20)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVyKZEBjmzVBdUwV3ZhjSo2dqPxicFKRAoIaHicbOZvIJY8ofiaz9K4NV8A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=21)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVSpbNhWFqUNwReHYU4oZJMdr4E9XIqhDkG1VTJumEicheKzX6ppgdWZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=22)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVj9xN2xFeSdVUfib4WdW65z7oQSyiarPKiahqbOfmH5vMSqUtSCAllfcBQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=23)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVB0EhOu6wJ3EUtgD1fDqO2XQ2NPVibqIOicVrwAYItARDHOllv0FWnMMA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=24)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVSicy2lGFs5IUUDX4fu2BNrNribXwicjtvzpPPumVGqZ55J9svsmekBYFQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=25)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVv61ibebafB33rSN9uK0nYGl8ia0z6YKawBSqsphx0aAhCkjKyObnbZEA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=26)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV7XHI4Y6MfneJFNmlNb80ysY2RkZhxicAic2WoRCibAYD2NPREmjfMQESA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=27)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVxaPH3NWzcOBs9icwbx4dyu563dDxIncjiaNcIOgXgTw2ps68WBnZHPyQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=28)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVCUqPxhVwmTl9X9cd7fetsPL3lXdgeibKiaf8jkPs71OeibufhnFoLRYxw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=29)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVp6u4Vkm1OqbPT1y3H4OYZ6ynzfgUjcdEfMQXaJsTATgSZz8nnY8C7A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=30)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVicRRVLv3WvjgMnYeuWgV1z99T6IzepHXuxtP4fMB0dE3dFWshTzb7KQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=31)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVfNleLWMGrvibRrhNKEbIT8ficAxrEtttHZkV4x3canNEAAdFr4cxAVqg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVpKt5bWLmBC56mId8akMhvK9S1adhFjeNAZUhAprX4lpyj28dD7ZCtA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVHCxCbVajBFwMbJSWkLzMZP4nSPv6G3ONUZBotQ0uPNmVeWPiaoA7dicg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=34)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVlpC6SFhCjdkTTjwdE5s18Tp5chsCCKe5z7PskjDHcyhoCcibQMh4gxw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=35)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVicUqQzlVbFAQgThSXXn98kNFpKlcxGCDPZCmXPj1VfX2niaLctKCv5lg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=36)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVAhT0JY2XibYotznFh1x3CJHsypbf9QbKhP6eCqbzMR4SmibEZBc86XPw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=37)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVBUBg1HZrqHoofzQgcicYdpg8C3CoTMkrB3l8qBzjoTojaoG10UCnvNg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=38)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVcqRbkiciaA8GNibK5JB86CnsfbaBTgBv4U6DE3SXjjX8UuQLbN0SmS2AQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=39)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV5cRyxdQpOYfF9QMaLBOgcgasiauDrrEfaeiaZ9YhGxpHMUk2LM6stUSQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=40)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVme4HqXhX2UkuxyhnGMVDFI0h9Lbjl5vJjpialfeaEOpe0ibXmxkx4Kvg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=41)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVK7dtKFib3THyA0zFE2eZYHEknMETuicUWrviaZTy5ltYFdaL5abVuharg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=42)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVTPCOPHq59ZFRXF4OHSjA6BHo6ox2lcRSt16y1nXutP0S6icoyFzEFoQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=43)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVibmahFZvbMibSggF7Vic1Cm2c3W48x1lepG1kBnO4j3YSFVxYPKcdgmZA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=44)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVdLvCMWTAMfd34gsia3icrhoL0tbpXL5CoxicMP661GtQDhn45ZBA4vqhQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=45)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVv4wkIOibBE1mAlo6yoRnqawxXWHPWNZwickgf4lclxnJl49eTt6rPmNg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=46)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVTicg5F3ic6NfiaMcQmuRa0nZQWr2YicFSS7ADayrYlT5eFQGbOLwvmKQMA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=47)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV0e1xa4uoQ5MLByEwmdLX4L5AMdkVZkrXurZ30gkN3ziaPuQA3hibc8uQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=48)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV3InsickaiaicTpt8DGRTyiajjpRvRVnTRuMs9MkC1tSFNbHbkn8tT40NYQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=49)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVxzQ0ceF1BSiamgWNPT44zqWTlE4liaO7l5ricBJ2TGJuoQ7WIXicckicSGg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=50)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVp7OpjoaG3MlhOLicgTwvDzoZLxibha6uRcIAHOZticoLa404POHNnkvbg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=51)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVTENTCxlNGibS38FBIR3JlZwIIJ2UTrFHkZR3Sc38TtfuuFHWA92WuJQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=52)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVHU1YGTUtuHxicbt1gDLgZBay1151iaM0tNq590xGhibluIuRRw8Cibnviaw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=53)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV3StkYOeXxuwROicsb8hTBeCWMqpmoeyB8ngmvTYSE1ibqyJD34icaR5jw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=54)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVVqxtTUsL0CPE6bEp0ykE6BS8QK2wgVRhd8mF2rw1gVIT5J5nBrYd5w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=55)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVBdYBhop5lhv388UzhhSrFas1PNibgHnWviapEGZkMiajRPzCkicG11KhDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=56)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV2WAARG1b11bfsHNhE7d76JichiaIqeAJBf2C68r7SSbiaSgbqxl1RuB6A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=57)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVfvOUtLOQRuuHia1YFdvZL1gVXvnkCAdiaQQepdQWBrzDdwzLl6uBciauQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=58)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVqtQ6Ipbiaia6ZZ9HAdnVDJmP1icFsTDkn0O3bTKsSrhJbuIrg4S6fxU1A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=59)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVJ6CyQyvFWxkR9Y50ScTrfKOFjqASqvuyalZ8naIj6AWLmAvUoWXaZg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=60)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVPQT9mwGc9KOsHLv8o4pnQaHwYSfibVho0iceNRkgFd0ozmKgVA9yyoNw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=61)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVfT4iccibiaAiaDzK2uWibTgeWJofvcZzbnK9Fr3f0AFQqKouc1k9yia5oZNw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=62)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV8nSjB0aGhCyTK7qKibjf2ybNvmQJBia0xNa36yzaXbA4MCtQRr2OwzmQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=63)

![图片](https://mmbiz.qpic.cn/mmbiz_png/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FVmDcmD44UdZmJ10hj7JMCkUabhOayJTgcqDw32Ho6gLBUy0RvujVmoA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=64)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/7tTcVeESAyJS6VIcRnMTOUGfOLeiby3FV8YheLEA37MgQYKtohhQZbrIa9w2oYoPtOiaAyOetzGczrodsKH87RfQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=65)

**孙凯  长聘副教授**

  

  

孙凯，现任清华大学电机系主任助理、长聘副教授、博士生导师。分别于2000年和2006年在清华大学电机系获得工学学士和工学博士学位，后留校任教。2017年获中国电源学会科学技术奖青年奖，2019年当选IET Fellow，2021年当选IEEE电力电子学会（PELS）“杰出讲座学者”，入选爱思唯尔“中国高被引学者”。现任IEEE PELS亚太地区副主席、IEEE PELS中国区会员委员会主席、IEEE PELS北京分会主席、中国电源学会理事、中国电源学会国际交流工作委员会主任委员、中国工业节能与清洁生产协会综合能源系统专委会副主任委员兼秘书长，IEEE Trans. Power Electronics编委、IEEE Journal of Emerging and Selected Topics in Power Electronics编委、《电气工程学报》编委会副主任、Chinese Journal of Electrical Engineering编委，CPSS TPEA编委。

  

主要研究方向为新能源发电与微电网系统中的电力电子技术。研究成果获得教育部自然科学一等奖、江苏省科学技术一等奖、中国电工技术学会科学技术一等奖、日内瓦国际发明展特别金奖、IEEE Trans. Power Electronics论文奖等。 

  

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpO6LL2ibRcmyDTxkibHKWRwuZeRJ6cSwia1SZ1KTmKwLunNNyFeDbaNw17TibyagtM0wSAAaYQA7M5RUUVa5m0iaVXtbz3duV2jVDM8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPDdPqex8ra8VbYQOzhJ8us9s1r71fu0gnCgPqib3EOyAAysmG9LbEbcELSHCuwK62p0OiaR73balwDnwOSATnnheBtxogUYJxJo/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPKDXRYyGgatyIFrEia17SZH3YSelp67OJUuwW9S34tibs8DqRmiam0hFVNib0CKSedqZ7rZdpxNGLf5njfSWy5ia7xaN73RhdZpWQ4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZsfHPKxeDRar9kW20EBic0ulRBiaqF0PMUbISRrgibGG4TV6Obe0f0VdmOoMxJ0M1vVHuK2zGXd5TJK2YiaVWmfFFqRKeO0HicgNA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)