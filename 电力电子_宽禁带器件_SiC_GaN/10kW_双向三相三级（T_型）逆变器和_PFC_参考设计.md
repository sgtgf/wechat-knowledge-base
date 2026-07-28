# 10kW 双向三相三级（T 型）逆变器和 PFC 参考设计


> 原文地址: [https://mp.weixin.qq.com/s/cX2wC3zq3G4Pwz2wN-NTqA](https://mp.weixin.qq.com/s/cX2wC3zq3G4Pwz2wN-NTqA)

**文章来源：**德州仪器（TI）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn4D36TZLiaOiaRcqAL1YVf5QNLpYc46dgNgWkl00yJMhne3fvekrricrVw/640?wx_fmt=png&from=appmsg)

**说明：**此参考设计概述了如何实现基于 SiC 的双向三级三相有源前端 (AFE) 逆变器和 PFC 级。此设计使用 50kHz开关频率和 LCL 输出滤波器来减小磁性元件的尺寸。峰值效率达到了 99%。此设计展示了如何在 DQ 域中实现完整的三相 AFE 控制。控制和软件在实际硬件上和“硬件在环”(HIL) 设置中经过了验证。

**资源：**

TIDA-01606 设计文件夹，TMS320F28379D 产品文件夹，TMS320F280039C 产品文件夹，C2000WARE-DIGITALPOWER-SDK 工具文件夹，UCC21710、UCC5320 产品文件夹，TMDSCNCD28379D 工具文件夹，TMDSCNCD280039C 工具文件夹，AMC1306M05、OPA4340 产品文件夹，LM76003、PTH08080W 产品文件夹，TLV1117LV、OPA350 产品文件夹，UCC14240 产品文件夹

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnXPfHVG5UQ4AxH4PYEXS8LdrsAtrELkdJjuj4xibfxksibPLL0BgXvDibg/640?wx_fmt=png&from=appmsg)

**特性：**

• 额定标称和最大输入电压为800V 和 1000V 直流电压，在 400V 交流 L-L 50Hz或 60Hz 下的最大功率为 10kW (10kVA)

• 紧凑型输出 LCL 滤波器，开关频率为 50kHz

• 满载时输出电流总谐波失真 (THD) 小于 2%

• 用于驱动高压 SiC MOSFET 并具有增强型隔离功能的隔离式驱动器 UCC21710，以及用于驱动中间SiC MOSFET 的 UCC5320S

• 使用 AMC1301 进行隔离式电流检测，从而实现负载电流控制和监测

• TMS320F28379D 和 TMS320F280039C 控制卡可执行数字控制，搭载了可使锁相环 (PLL) 计算加速的三角函数加速器 (TMU)、用于实现保护的比较器子系统以及可将控制环路卸载到协处理器的控制律加速器 (CLA)。

**应用：**

• 串式逆变器

• 中央逆变器

• 车载充电器 (OBC) 和无线充电器

• 直流充电（桩）站

• 便携式直流充电器

• 能量存储电源转换系统 (PCS)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnJG07KiavRsoab3wQWrke28JDF9fhyNVeXDfRQjVa6yFeA2HibNQLFfWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnvhEULYYkY7QdVqF8PAkfROXfJzicfHPH8nYCuXUPsoNAD2FshH8y1iaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnHlov7zaicIUEfDk1lWINgsundPcQ6IVNRpbFGoSSCTADBEmCXw9OFPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn1ocuib2xwcnOiae14yoYw8GcliciceibnWxAYrh7DpyL66hSs7LxT9DeOqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnIO75AV0ZTjx8uILhJo4geIia81IExbE4Y8csSRbLnNwtF7RZcvXqBzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnNIRQ9bHB1WnoNHhalhGiciaT5IJxcUU6g3LyvfUFJf4jYTFerCRa7diaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnibUsATicUdu5L1J5VKCHZTbgM0pZYG4KBtch5E83OJR66Pr8M8j9wMSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnChJmicWBqiapPaia9RsG7w80M4k1jGia14QBFR04wg3icXeKxZTueLtQBmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnpSMklxfxibBib4bt6YdvCy3I0CfGE4FoCS0wdq9fyz2XIOBwZutDXkhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnjeYX1rVicH1RDS3fbiaRNBAmEfC3nOv0Cbf5F1N99x5r7wNUmXvRdlWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnsvW8ACGdpC19ela1lfibeMmTt7b2Kaz9O95iahw3TkrXrw1ibc8AfHmkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXngETaQUAYicCvfdyoms4clkcOqXVibkZYJcBF5leRicfoFfh3icHP670N1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnP7fcrUJ276K1FzLXOlU6ABibKXPiatoK3xbiaJ1IqGPJjvjpxqTaoR9EA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnd1w8R9EJPc8BCiau0NJgFYia4LCVvzNNIVvjkDGFnJY2MTWoibm9Kc8Mw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn1PWz4ILZvjSa7oGt1HMFgYJ1ovnrRM2posdHVJQ2wMO8PBOfmPMIag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXntF6QvLuuNpGqh7xtSLYd3h1tyOx8kxAZSkLficRicicfhtGrYCqh9icH7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn4xeIUoVktsM5vg1P6QwIQ5EyjRQRSjfTqdiatwXIZ5WDbNQ609oMaLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnebgOwPia9R5qpWv7v2fguicVcJodXsWPJYHqXqiaOZLfabumic0MAEt01A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXno5iaffwdgL3rD7wdz0rPuScseiamDA8sE344l3zoFQs6UM4vNPBlIVdw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnkWv0e16723GBPfMDf5xMQLqXHdzciaT4R6qb0Jr6OeAfUCicU1mJBODg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnhH37Ah1BZsX8RfLcBJUzMtVTqmum1CpmY4Oxls51OmFPVfUpbIKUjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnZkfmnIr1kDOKVR4Sy4auibeIU6ctKkZTTezy09U3k8mdWmX9QQ7f6Fw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnia8GuyhN9AsLuxuY8JzbdMOHz5AogprqAjRw0T1BibgKRaiaicqvt4baTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnXfXSgezicE33anesBgkOJmKx2TEcPd8UxSicyN8LGQtywOtGZnOiaoNUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXntEsREF6o0eWLsicwa8jzQ1a0tysUIRARBGhpaJZBCFon9lgFRQ6Skdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn41ZGlHNSicO0G0xP8p4LqlQQcvnDXxQiaS8SOmwa8x1pnFgL4LMf8TibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnOI7HzrHXBb2EzMLcDAnzBJjw6LD0Dfb9ttLewkWavUusl7s78bfZTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn8tYzw9Ytw92j5ETRj4vDhZDOGbiaW9dXGFxjsIsnb1JIuQu8I3P6NGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn05Tx6YgWDovKOws5otw60tUjyEhruy9QR2G9y574YKcq74kMEdKfag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnLFSaRnHGiarO4Bdr6cxMjMrchHLl7E9ibicJcvuQ6ibHs9K8Z5gG7f5B9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnNO5venbAkZbXkJOQTlz7MGTMcfLJst7icfIfrUelZ2IflrqXiadKYoicw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn41JS7tk3iacPib5Dzs2FYiagvbnZ5Wr3KLSwgCewydr6e3D8NBY1DeZ7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXng5Y1Z1b33cEmFpKLT9acJ59tp2EyBrvVv6oKocOEasYFDkw19sFoUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXngWDxbmkvgdChyibbbrVe154fQe9Lib7DwBcEkUJKjDFkczibiawdW44G4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnoLuL1MVyicAzZB9cJOXj1RnQ5w3uxKkBPiaWreFAG5wo5fPNvygVQhRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnExia0ZuG54D7SRktow2du1DQOoiaTmVPLuZCbibFCDqGRrr06B1pYaUbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnOVhHbJeC72Qz5Sa63wDTSvwjXtJ5e6JAXfhZOhMErbm9UxWa58AoNQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn42libN286leHEBticgTukASvNkYeShHshpctwHRnicUicYqPCHmFVQJMDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnB1hk8ettGOqIe7zicMA1ftqDE0JgCXIDgyKzGSTvHHialBkB2k2rNdlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnTSLfTOmFvuTj7p4S3qgG4NDNbcqRhOnjnP7662ZllI7PCdKTsun5Vg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnmDL0fTtRuKpf3cw0M8SWzUm1JVCe2kyvRugPfb8TicmOWnzZMDIlkWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnOMyVC40ZPgEl9toqbgwG6Tkt8WunLDpvISYlYZaGnDooKPm41ibBL3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnmC1FqHpib8WmjAzxPlSgoOYdOsQkAz26yldqeusmeft0mdmawIsxaEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnYF3yzMGN8qQRav8SiaEQ4GoBiaNVgAH4IxypWcb4N3gb6GWcyUW8Qxqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn0zgic8PWv5iakVUe8Bwxm26MmswZC0cSUK1BUuYhgs8a8mSibwAySM0Bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnibHmfFfOhrHnNhDfJmZgBtA6ToRQic7H4rlfa67KibbYlMcZiaOTSKXh3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnXTicDlxlzRdR4tL2JGoRDibTibyD7VH3u838QOdDJAHfyaFzxcZibFMVBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXniauQjt7RuBrNU5ArMbHs2rnTxsjbTrpkIxEpMHiaACNIiaY0UPJxfwBzA/640?wx_fmt=png&from=appmsg)对于基于 SDFM 的电流检测，还为所有逆变器实验 添加了过流保护 (OCP)。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnUxuZUtTAULtGxuB5oq7mBtSwPa48uNLeicXra1I7gr5ABdw6qyekazw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnJNiahKiaGiag1iaKZQ5ITFX9Am4TXbhwD13Y7pmRyhuztDiat0NKCKJ1PPQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnOgrY3TyQ1uRKkicAEYpXKVYMCZykWNak5OscXymxDK01ftvJEDWxHUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnsh8L6Ns69ibom5X7SMCzSM9aJae2Claa5lddJ7DuAMNYia35icMh6dYAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnDIibm6Gr7Ivqf8Xofl5TbHTYaC9l4U95j9m9JFxUV2SDianaR8ovV1CQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn002ciaQp3ibo5L39buiaDdQ8PPZ6oRCnibdeUtad7ItGbtONGFVGkxSocQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnZicibUwxM3kvxXlhVz4ZANYSsynLK0yEicgLJxwiakJjIu50bkcRB2KGFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnSTMyUiaqp9425B4yWSRiaCicgBTqnwvibuMP3NaYWkaTavIMq8ShNrbHTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn44NLBZcSnDHfyQHY8PDWcFC3WErOplX3pObXbCAUIL8vEUAic7YuicoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnZlKgicO6eBrrlVQWrRXlo5dMA2cWSExT4SeIJV2DIAkQxibIicrAhIK0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnUp9T4Z7F6vHX6yic2G3BDB1R9Iicb3M7vA31AlXiaEHoC5wEv7umicwPtA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnXtcMXxSsUdOx1Q5L1GmYQU6NkU6qCY64Ymb7tKAvicynYKXFrqUdlsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn53CglDL0wBr90Y44jsa8lNjNYhwZQkZ8hFk5R0c218aOcnwfl4XpuA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn7UNC7mgGZ9crEjswRKcAteJqm2CwBicJLXRkmibPnth7U5IK5wEI8Kiaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnPEW6V1mTHTRPavvwdtnzBGNGs9uQpCUoG9lzeEhGAiaSqicUaIem5Utg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn35c6UalhoSwNKTeerdHHCmPQcISUWqGaibQ8icLcf6WmdMRfY05zmOsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnGDNHqdjlYDkMZOSdvkicNAPIvO7cIstDuNialBvnNVuBywdz4UCjFNyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn2lwAYcHo2o4uEtyw948WuMwPqYA0sJ5XrqpJyj5ia6ict6ibvjnI0oSpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnazOHYkDIU9ZExSbq2gEtG6KDQ7jwhCr0A4YyzT6CKB4YibB9cSjsDzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnNcDJuscEomXic2BX5WxPcfwhsIKORB3eSgVzuyIqrJD5Q2AKtZjZZXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnPrxK8U60jg446nE8TYicB8SvSztus0G3Vt1wmZeicsvNkOtiaibWdZEdBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn1eEgJQSxTrrkGg9T0JyxvNWe2OibutROUHvXOv1ibPaQ0RGQqQHn11KQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnL5GUYEwkOjzdzLuvB7o6fsib4B5Nc2wib9ytiawiaGCFRica0h84kvlibZGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnTfB0PzIeeiblwnZZTadtc1STKtO3vHDruU5VDjoIEP5jQSwGvGPTfOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnKlgLonvTEks1tyfEr2tZbk4PeLRy2too3U93qibUGw7FmOaBUiadoTWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnEtAIibwn1031QwgcsB374PasUb2pW4osWBOrnAp5sCiaCo3FCd9O9bsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnyrUKv4BRgZZcdo5EdUzJrwz03711GYuWkibeNxujpaCmOePMZo7b5jQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXniaO5hYFGWODAXReDjIibAqyvAJ2Pk1NxygIr7ib2WJaiadf2ZQFbcmLapA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn1PdtotweQh1QYKpXlaorlboWPlFmbqsxljQqwKdwrLzKTBn0icFjMKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnaXbPhJ5RLia6WInP0mUIv5GHAMOTyLjhxYbmCPTNTsS3ncOsTllZgeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnCAbFzDVfAEUmuk7GicUbl2yKjEefVUVvGesmfyB7AnpZUqXoW1hIKsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnTYJuOPLbEot7G4ZslqW6yrIwNGxTIMs0AiahW0f1jUsuCeTnEw74nsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn3wN31xt8wcX2mHbkmEYhq5xaA8mic6UreLoqAbNr5hmnu1iaVah7Dvaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXn3nFsKuU5NOpbyibDEBLiagCY41Pah3dUuVCor75GXUBuc8Z4Hibia9RdGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnQic9mT6wM6FicnAibM6VaoUMyTJpdcAb4qtib2OM4ibUCp2KAyVibUbVDQoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnRFEbLnBUF8jVibbS5spib9Azr2BPMXfD4E6bNWcbibW7mqQm0B7yQ8tdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnc2MPfGxAiaWvLWDo1cV0sOhYYG2s5fcZWqWg7GgdsQGTNwfGV2JhfCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnYgBYGnMUWjcRlzO7wNu6XnEJB29yz6ZvIvc2p1WFPbHH9fa35eBYoA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnJOUyz2rwa1w6KxPX8x1xuDic0BekQOECd9GibpeHeGmNQQbMD3Ses1ibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnPSusnnqdTkqw4EJVia6VtXTb5O5CA0Q5PNfCanQtribQZibSBcRMA0zUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXnTIDbsvwm3VVVo8FmFYHan8ljkDEZvRv0x6R3kj2icfwFzZnI5N7wWjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmezcjn1GuLicR2Pic0DF0WXntreDJfW33jFyt0By3vG8R3bAJIibBic0o645zICozW1huSAicmVoK6JyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)