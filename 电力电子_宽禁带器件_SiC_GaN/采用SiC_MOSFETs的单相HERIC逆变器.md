# 采用SiC MOSFETs的单相HERIC逆变器

原创 Kasra Khazraei SiC碳化硅MOS管及功率模块的应用 2025-08-07 18:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/wGAgCW0lTTG0mERuI4fQmQ](https://mp.weixin.qq.com/s/wGAgCW0lTTG0mERuI4fQmQ)

文章来源：APEC2025(Infineon)

作者：Kasra Khazraei, Isabel Alvarez

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQEsyk5N29mBia3dUco3be66Cp5ibbOdHX9iajUR3Fj38x7NDQJPBLNlTMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQibQPkH5BJLnCK8sNTckzT1e6Ap4no7qaP5dIZQFz3lRFF4URRo1BZMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQfM9Fr1dCOTvgCgNqIlElZJcCKNkzO0ubR10qCR86yttvdibfoq7TxzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQm0qzNaLroEDAcrfKhkkmsVjr7X8bqdHTEqhu4Gr75mUxIBicFdTl3LQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQibY7kcSa8LOtrkfcx2YMQcBcq5C4rARwbJSTmHcIxT5jO2UC2QAj5QA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQiczpgpMG9IaXgfhUue10Se43vmTmorVKhb73JWejtnibibSovT0LUgXDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQEHd2BZZQ78OzKwf40xXruxb5uyDW3HI87Ev1Vm7yA2ibSZnGFib9LUuA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQaTEjyJ7lOfZt2nAjWZF4uJambxuc5icAN1Ru5KwIUPWnTIy5sIkrOSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQ56wuJ9D5EBbQhGGuYtD8g3rmGT3fCfD9Ju6iaoGKFUMEl1Iib1jGvWGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQVdw0ibwoRibia0uv6yfcJVDpFEU6ctu5DgPRGpt2Hf4EAyKMM9Z4Hnnqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQCKA7LAdONVIa3WhueyOSvePvRibmq7AvxtrtvDhZ4ibibsKY3PRkrbxEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQdHtlUYN5eTaMgCLZSCiaF1vXyMsdiaHzJqLd2VBicQ4ErBXnMaUryyPYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQMY4VRZ9lz3Bl8PKhCQdk76oOkMXicV69bxtWA7VDkzgGp9QIzeGDEcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQeB7KIWPJunwyMXCWzUMlFqcZ5PrUGeabMiaUtKYMOLIduO8HLu0lxFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQWMx3lv93ZMklvHTjqepBR0t4nBFfDO2BPcFYibOWQXA6gp7KEO4pMcw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQUkibApJrr8ibXvP3GZkE4benqhg3lgmaT1ialWkHSQPew9x3h0UNeseRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQhdEM3qibjbTdemWsXUnnuTEC4DLIcwyEprNRqX1ho0YLla98P7vte8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQ9DELyhWq1RgxWEaYD5gicvbrpehVVnXILeD9UsGfJAAEhAxYHtiauwtw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQ0cfTtAic2XmAD6OiaViaEdhomDTOFd9l98YyM11E9mOZ3L2AfTMKbAuSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQMWzehlBia6mO62OWvficW4Tyv6TnFUOgYVDZYmkibA9vyMk3hem1GmqHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQpKPZR36UjOtBfnW4xicTquc0nhbyoERibadXh7CndIxoJvhqFh9Fyr8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQq07eg8K4GYFKDb3Kk7I5RsntZQjicnOM1ZkO5vhum2PscGrsxqdjgtw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQl215cS1WOBCMz6HbOW9GGj3Tib8XRf2mOfTsVvGjRBA3vDGYOm0IFWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQ88X3uop9DlQDZ6fWYwsqNMLr4rNXy4EJ6CSGD229BicJ4xtaMVib51qA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQ1UNj1Hw2JSEaoek7ic2vibM2sIsD9tD1vm20h6KRwTgQZIwqOaxJV9Sw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQoGnw4zm7W42J6RBXibBbEg4bKp4TGicSkYjQ5xL0hKiafj9SuGyGYzdwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsYUcJxn1XU2Yk0KKm4jPQianH5rcjfKDKy2sUfORibnVo3UJXsSLbFjBm9Q3eSd7LjY6LzxRGyHrQ/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

单相 HERIC 逆变器是一种高效可靠的光伏逆变器拓扑结构，采用 SiC MOSFETs（碳化硅金属氧化物半导体场效应晶体管）可以进一步提升其性能。以下是关于采用 SiC MOSFETs 的单相 HERIC 逆变器的介绍：

**HERIC 逆变器拓扑结构：HERIC（Highly Efficient and Reliable Inverter Concept）拓扑是在传统的 H 桥逆变器基础上，增加了两个反并联的辅助开关。这两个辅助开关可以在 H 桥逆变器输出电压为零的期间，让续流电流通过最短路径，从而降低损耗和噪声。该拓扑共有六个开关，其中 H 桥上的四个开关高频工作，两个外部的辅助开关以电网频率工作。**

**采用 SiC MOSFETs 的优势：**

**低导通损耗：SiC MOSFETs具有较低的导通电阻RDS (on)，可以有效降低逆变器在导通状态下的能量损耗，提高效率。**

**高开关频率：SiC MOSFETs 能够在更高的开关频率下工作，相比传统的硅基 IGBT，其开关速度更快。 SiC MOSFET 可以在 30kHz 以上工作，而 IGBT 通常只能在 20kHz 左右工作。高开关频率允许使用更小的电感和电容元件，从而减小逆变器的体积和重量。**

**零反向恢复特性：SiC MOSFETs 的体二极管具有零反向恢复特性，在开关过程中可以减少反向恢复损耗，进一步提高逆变器的效率。**

**宽禁带和高耐压：SiC 材料的宽禁带特性使得 SiC MOSFETs 能够承受更高的电压，单个器件就可以满足高压应用需求，简化了电路设计，提高了逆变器在高压下的可靠性。**

**耐高温性能好：SiC MOSFETs 可以在较高的温度下正常工作，如在 200°C 温度下仍能稳定运行，在一般应用中可以减少甚至不需要散热风扇，从而大幅度减小逆变器的体积和重量。**

**应用案例：某全SiC 碳化硅家用单相光伏逆变器设计方案，输入为光伏板直流输入（电压范围100- 450V DC，功率 5kW），输出为 220V AC/50Hz 单相交流电。逆变级采用全桥逆变拓扑，使用4个**SiC MOSFETs** 作为主开关器件，调制方式为正弦脉宽调制（SPWM），频率50Hz。该方案利用 SiC MOSFETs 的低 RDS (on) 和零反向恢复特性，结合合理的散热设计和保护功能，实现了高效率（目标≥99%）、高功率密度的家用单相光伏逆变器，适用于 5kW 级太阳能系统。**

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN6icyKvAwYyYJ19zlgAlrKQjE7OxtyuUSdXY7KkpnU5xIHeX0ziaNpFzlA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=1umdp7l6&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN6q3PIJ2Kkx7IOZFiatamsLyXyAgicDibibD5tcVVQ2XRhAnwpWiblSMjJicEw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=56ak8fax&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN63Aia0AzTL0HLoJUq6AHRCQ7pelRZdowqEFCpdr4dgU2LKm7zySgibXWw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&randomid=a0lpe1mu&tp=webp)