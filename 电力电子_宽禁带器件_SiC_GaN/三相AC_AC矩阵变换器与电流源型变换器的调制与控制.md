# 三相AC/AC矩阵变换器与电流源型变换器的调制与控制

原创 Johann W. SiC碳化硅MOS管及功率模块的应用 2026-03-17 12:13 广东

> 原文地址: [https://mp.weixin.qq.com/s/cK4JYiAQH8jzt3Nmwm-sfA](https://mp.weixin.qq.com/s/cK4JYiAQH8jzt3Nmwm-sfA)

文章来源: 苏黎世联邦理工院

作者：Johann W. Kolar et al.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPaQ7icTCicmDicWb059a9WafVdSRKtL1WHqzvUmNc5x5OKA6RUqkJpde7HTibRcWooKfa6crgT8hialmeQaGvxO6aTCgvtEmEPReoM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNR1dQMC1e1QibopsuVzJ9UsETpuJZ6P1glWBicVqh2ebKc8TZZB4ron7uUszAmMGojJI4O4wuw7PjZkuO3libG7iawCfsF23m0u2U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP7cpY4O5lQyfMgkgwKk0ibZnbGJTZOSbIuv3I7I4NVSU22Zao2icKibZPcjkico8jibGb33iagZWfMfc25q7FdbAb8kw0icWEE7Mmj2Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPyyvSP9lHULk1VrjibibbXVOJ0sqNupzpzwNmicma07cpUk9DbIT7U2GMfsTc2F0jfR3gkyggbgCMmMUljsYzibNRferrXDBSfXEM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNl6QPKmU0r2Id4jSDdBfdYCwV0RPkZUQDqvadjpQ1Iys4icKYBvA7PDtv38fsHwpUnHRkltTqOEv621fKA8lK2Hibk9rIrBUia0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMWwDundAwvO7LzHg3bp7QZDwWs5KPVPpNoGxkgdhbjrOusGKwl8smlnric2tjclKWPrJlMJ5EKMFGo2BLSM6LBFqIpxibSFMic48/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPkP42JzI1qnv76w8RqiaVQ7ZWwu1wk6u2xoNaxQRH2UhOLxR9Le4PIfOhoInEYp547CfGGZia5yficTROicMspXmAuXicE57tKmdAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMaZ5BYpfNSWdoaZOOWP1MUib8qaVlyytb9l5lH0UwsC03W9m6MiaxafNcGFjPq3BADYpc4xSmphGOriaiaEcLGKtXWKuCYDian8JCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOp5v0EavtWldhPLEUu1LXr9zFwEeHKLc1K1F2gyCXMoUU7rYn6uls75SIdJEp5NyG7AOzbjXqpWiafcMwEA6mkRNw11Xm3qUhc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPREYLyQmKcXhJ6iacbHgs59bIEIciau3QMootRG4oWLmcZufSWbCfOzQPUM9FEtd58dRAe1rCYkbHRxgktm7qh3XyXiac19pKMLY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNIDzIrWGSs7C8TZYAnjKAWejM2ENPxAAKbalj8egmQNNkWrPvDa807icvGkEPBdG29agQQrxtJvs8lezXVNOS3ZlkuCRpslHI0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOibkInyic1icVSNXyXd21Hwzsypgfo0DXAVQFvUfyh8JbUXX8s83LISUgKk4R0bW8PZg9hEGTWAkOj1gQfaLKoxAuV1ztk4PmPia0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMTRMUY6KryorYQWyn8UFokas7XrNiatflsFiaeUVqJhSuaGSJq1OodLhv2fqOdZgNKap8uV45tCKkh9gibY6dFJL8NEYxDRBSdow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPHndOGepVU3qZr2xFgzm1lozmS68AHa9J0O2TsgR0LuHtHYQy5TOxrmeukHeja2YfY5vFXwaEVRibp2Cv3h4bzk8SYUicRdFicxM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPvyIbtSaBHicQTCz8ptlZ1gd7Kq6PKTlTXaUricvcRXOqA1tPj4VJx9z0uXOKwJrMfBfaKBL0cI9zwKZztm4vzJat3uqC0Wg4w0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNuib8SFcGn17Ng5ib2BR4DstZQAqxGYSODBNjObfHGibG2zQ56aw19iaycvk2y7cDGOFuLrg5081dtoS3WGKVfqEC8NGjEicp4aaME/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKts2vhB8PUibjBRAOUGQnu7Qic79jDuOb1WuVqBjMZtFK14hgVDJoE86PtiaiaJUK1hhHGRc8u8POFdQ4PFicpMZic1gy0EbkEeEWU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMZHlQlCEefibiaq13P5qiaYiawib58Qw2tLzBduJ9JXtIibcSuBjvNeNeic9WT9lhDR2Cl5s4YvRoDSaoH0BlTs8ylsBKvFzGRlPY4v0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMNC2JtMotuLGJuKHEzXghNUOEGu560DMX2trFY0otmukKfY3naLnaicPIZia1DxBb1FN4FS2pLlWkz4P2wNiaMVj9dKUp8icAfViaU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMFjhnw9OBTdWibkUBPuuhpL2CDtJZeEtmCBCBBDVibT6icjwvuFh4fm2rj5QwlVlF2aicY8G8ZQGPpWbMUU6OGySCT5aDd0TB14dY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPjhtYBjEn7WxohFsLSibw1IeZcPEiab2oTrdUdvOocMAUxMvVPKCTYd7VAX0IEZTLk8hpBKgYVqaTyvibfX2uD9ibbsL9mnfZQgj4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNjE0XqSgyI2AzrujRWR8rVzfOr9UtpJmZWDlkibcwhaVmdpFjbJowhD0iaHKH8MYia9gFTCzicWWcP0P8icHW4gy0oT8z4Q0v5AOmI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOUafSyZ2dfrQyBaJOQDQwWQrXkZdy33SicCKEalNunQUmPLiaqDc9J4frDq5zIDo7UUBy6GnHKuQVrWD8Lch0ibyo9cibYT3PfA1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOzWjX0RO5ppGfrE8jxT0uicOK8vkNp2HfHOlMlJr35twicSiaSNrya8lIY4TjNIGgURnH61z3q3U3m4wu5Yhg9SpeJOGI01PRSEM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNQdTJPibxjErPg5rg7ddgibE5yt0NRZPMjMKqibHvAyutmT6R9Rd7BicnvmmNiaZiciczMAp1khuzwONOUs62G75icInEZrW25rjJL84g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNAmJM0umibNpmByyviakORYXsPibfmIdEoZSzpDgu9kPWZOML4IQ6q6R9O8HGiaia6HCAQT5ERGWtSXwicJXRzj6iaNgH6yVC7wTmVQ4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOgaG7ZJ8ICtOcllx2hpVjGrRZZw1puYXaJakyPAqZN5FoKiaFf0ZlGwEYfGz4cQJyK9icFNBzZkbPlb1GGicc6bicMnNmXsVyR6gM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN0OpDPIfhQIEG753KNN13HP0T7rDqhgzX4oRg8oicLQu6J0Oq6ickmuQaHTJcnJhTNlYTC721kyFvKkIibRFF13g9VI4aias2kc4U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKhvRIGLHdrlmrllibdx5G0icpMJzVcaWMHCyoh5rL43EXGKq7VUm9Lcy2NvThLeWATVfnz5M2pMV8A7yDGXMQNPwkTIjm6rWNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOGsFOOm9fOD9suN76N34h104I2etcx7JT8AToTw7s6gxUfjyYBVZk9IfNJV5iaicrQeTTSIVc0U8LsrzBph66wxHF1eLHGXTWto/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRs3XzY4DD4HtvBEbkgcnibSHDmlpC4elPnML3H5jzqcicSVpOdqJ2gib3kibtHpgkPKl4xzIU1Xe0CyAYCSd0ldwEkN8XAsiaicmko/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOljEmv537siaIQhdB7vbcaKtwGUAVoyhLicnJVWh0IJU0icvuocPsoEqGPmuicQqUUaH8IU4PxBWricsbL0xIf1HNKZkFJsPRH0GkU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPEqFxyR1uvocCXxUCQAw2pyTvH7F4fVJiaoEvz2na1a0ibU3nC7WJg63ic1Z96iaK1HAL5lUVgribGZzsgLrtuRr8YOxyjUksnkGtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtuTJesLowCBDIt43Yib57xwYSt0OS8AZKc19PBiaSyarOszsPAvx7XduzHrqeuJ0ZzwG3cuFtt4l2c3w93nEz80eqcjmskzJV8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPag8lyBoQBDTK5f03iaR9KgVib2LHpKvuFBWjBYxPs6542XicIHtDNyMeNbgtk2nk25pkeEdO7MibjnNRMANbJRmU59UqSmbR43qg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMfwwd8x3A5DBk8fRWYiaXCYC74T1LVl2NnKqTvDUpk17rgXtXiawDo0kVQg2icGpY41piaFyfuNxZzEOPtS4b7YPvCeymBUmCEwXo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPIpSaticWuuDb7WTtelEvbcctSJIcD1KmibokMibTtZYE8viavFUtsPjjvHLTefWyGDLlh3xqmfwiaQAq37yI3AY5BuajIxQuI7F0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN0zicFGE1H4aSSwG6JeuyUOAZ1UnuZgaLSBhxnxG7EJQ3328lfasUzbjRLEHg8VGLtzXUCBkUndBNuWFDJO1npZSiaVhwU5PSSo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMlYHJyAMoTf8PWBiaBjhVRZsmsJ4YJoFqsGujRtj69D6CH4wqqe9krHldZtlSa2gc7knqoDM00975484ZG4KJE8tL3iaLKaKfag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM3wfibmmgMlEhSdaZf9tQoHUjrk1EjiaIHJ3B7yYrc7SYtDHGEnia1Niaias7QDo7BsnRPv9torIHpkCmwNd1qTTgc2EbNqX1xAeicU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOk8EujguwWpSDlIKU9ZUchkKn37BQGNeWic5siadVk5AJsxSxgBEUeiae54zj81skib2jZYZ6mEPFRP9Dgv3MG5O4epYvucQ4oKLE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPLI3cnwUYS9ot0DJUnTWpOOvkeyTORH7Hfia8aPJUibEtAnEaSVmW4ibnibSD23uoiaBKCNhqeJKLaOoEaMCYGmG6akocuIX7By5x8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMpkPPCiaE0jzVLFLpYjJibBQNiagrSiaGD8LyibWKVwlOfXGEMJiaBZfPVAf8wQJEzS6NNJ4ia4jg87mmDCuevZXn8CzqicKKhZV7DCNY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO9n2xKfRZQ381RJ7PKrrz4V4MD9Yjdqza2PVsmEicX1WOnTTsoenYusIrwtCo3y7K5e0rXXKviaHAzBUmepPibjNeYu6FdAGQRUk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN7Sr7VzT7XHd2ibtAdMDSCSNiaiaENd47Mw5lFMYUQrd1Pz556yGI5ibCIb1PxK86ic4L3NdPR3CuiaVk083PsQUSqbGbgvsvF0wzGM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNgT8Q6dvxEKVpNSicJicl0kUISzPWysCJcryFe92FkSsjaGkTgicmRxy1bDsqV0gcvqamcNKJMAqKoWNQN5EUXKbXr8b9ry7lntQ/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

这份报告是瑞士联邦理工学院（ETH Zürich）的Johann W. Kolar教授团队关于**三相AC/AC矩阵变换器与电流源型变换器的调制与控制**的教程讲义。报告深入探讨了从传统逆变器到未来基于双向开关（Bidirectional Switches）的功率变换拓扑的技术演进。

以下是为电力电子方案开发人员整理的**核心内容总结**：

### 1\. 背景与起点：传统AC/AC变换器

**应用场景**：全球约45%的电能用于驱动电机，因此变频驱动拓扑的效率与功率密度至关重要。

**传统方案**：

**电压源型逆变器**：经典的“PFC整流+逆变”两级结构，中间有直流母线电容。

**电流源型逆变器**：使用直流母线电感，具有固有的升/降压能力。

### 2\. 间接矩阵变换器

**拓扑由来**：由“无储能元件的电压型直流环节”演变而来，本质上是双向开关构成的PWM整流级与逆变级的级联。

**核心特点**：

**无大容量电解电容**：直流母线无储能元件，功率瞬时传递。

  

**必须正电压**：调制策略必须保证直流母线电压始终为正，因此需要协调控制输入级和输出级。

  

**换流优势**：可以实现**零电流换流**和**零电压换流**，相比直接矩阵变换器，换流逻辑更简单，可靠性更高。

  

**电压传输比限制**：最大输出电压受限于输入电压的√3/2（约0.866），类似晶闸管变换器，随输入功率因数角cosΦ1降低而减小。

**调制策略**：介绍了高低压调制模式：

**HVM**：高输出电压范围（0.5U1~0.866U1)

**LVM**：低输出电压范围(0~0.5U1)

不同调制模式对开关损耗、共模电压和电流纹波有显著影响。

  

**3\. 直接矩阵变换器**

**拓扑特点**：直接AC-AC变换，使用9个四象限开关。

**调制**：具有准三电平输出特性。

**核心挑战：多步换流**：

为了防止输入短路或负载电流断路，必须采用复杂的多步（通常是四步或两步）换流策略。

  

换流过程依赖于电压方向或电流方向的检测（如:uab的极性或输出电流i＞0的方向）。

**与IMC的等效性**：从控制角度看，直接矩阵变换器的开关状态可以“重编码”为间接矩阵变换器的形式。

### 4\. 关键技术进步：单芯片双向开关

**颠覆性器件**：报告特别强调了**基于GaN的单片集成双向开关**（Monolithic Bidirectional Switch， M-BDS）的出现。

**优势**：

**节省芯片面积**：相比两个分立器件反串联，可节省约4倍的芯片面积。

**简化驱动**：两个栅极控制可以实现灵活的四步换流。

**降低损耗**：导通电阻降低。

### 5\. 电流源型AC/AC变换器（基于M-BDS）

**与直接矩阵变换器的对比**：

**直接矩阵变换器**：9个开关，仅具备降压功能（Buck），控制复杂。

**电流源型AC/AC变换器**：12个开关，具备**升降压功能**，无大电感，滤波体积更小，更适合需要宽电压调节范围的应用。

  

**应用实例**：报告展示了一个用于**更多电动飞机**的压缩机驱动方案（10kW， 72kHz开关频率， 98%效率，功率密度 10KW/dm³)。

### 6\. 结论与设计权衡

报告最终对不同拓扑进行了比较评估：

**直接矩阵变换器**：

优点：全再生能量回馈，高功率密度，无直流母线电解电容。

  

缺点：输出电压受限（降压型），过压保护困难，换流逻辑复杂。

**电流源型拓扑（基于M-BDS）**：

优点：升降压能力，滤波体积小。

  

缺点：需要复杂的过压保护。

**传统电压型直流环节**：

优点：换流简单（标准桥臂），半导体应力明确，易于集成直流母线储能（功率缓冲）。

  

缺点：需要大容量电解电容，输入/输出滤波器体积较大，动态响应受限于电容。

### 对开发人员的参考要点

**如果追求极致的功率密度和高温可靠性**（去掉电解电容），矩阵变换器是值得考虑的方向。

**如果面临宽电压输入/输出需求**，可以关注**电流源型AC/AC变换器**。

**换流策略是设计难点**：无论是IMC的协调PWM还是DMC的四步换流，都是实现稳定运行的关键。

**器件选择**：密切关注**GaN单片双向开关**的进展，它将从根本上改变矩阵变换器的复杂度和性能。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNS7emqsaicOvzlGHC81zMrj8D0mZbXwwXb0icshPibqx1sAx8zmaeF49E6ewWXDxa1dSEeibcB2vVSyRBicEqO4rJMQxV9TDYXFjLw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPSEkTNSDMeaLIRQ0w5FotSLu5Upsgwa8PU9Sk7ia8xhNt5GLDupq0BE3GQU1CicL1XhFXR8KHY4FRz99VsEf2s2nu9Se26eJWkA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtGaaCfwIKOhqWZiaWVYYDVLkibSaIgoJbWRk8571lCyh4JbN2O3HP8Cpqode2TBTXqibybosTM8kDIIdj1VicKPUdAskOyDoHcJI/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOygImDkAiaYx2Ieygu2GgSxE8KnBUluqQlJehcG0cEFIlPiaFykpMx5ZwqY02JWGWH3AIiaW6TDxr0Y8I6VCEhYSQ5FLP83XGg6g/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)