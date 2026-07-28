# 英博尔电气：高压800V SiC MOS电控系统开发与应用


> 原文地址: [https://mp.weixin.qq.com/s/xKE-R-KoXWvfTCukGKjD\_Q](https://mp.weixin.qq.com/s/xKE-R-KoXWvfTCukGKjD_Q)

‌800V高压平台在电动汽车中的应用主要是为了提升充电速度、降低能耗、减少续航焦虑，并推动超快充技术的发展。‌

800V高压平台通过提高充电电压来实现超快充，这是解决电动车充电速度和续航焦虑的关键技术路径。在新能源汽车的普及过程中，续航和补能效率是两大挑战。通过提升电压，可以在保持电流不变的情况下，实现更高的充电功率，从而缩短充电时间。例如，通过将电压提升到800V，即使在非800V普通快充桩下，也能实现接近200kW的充电功率，相比400V平台，800V平台可以实现充电15分钟续航近400km的体验，大大缓解了续航焦虑‌。

此外，800V平台的应用还涉及到整车电子电器的承压水平。虽然800V平台中整车电子电器需要适应更高的电压，但这一技术趋势是必要的，因为它能够带来更快的充电速度和更高的能量转换效率。然而，这也意味着车辆的三电系统、车载充电器、高压配电盒等部件需要能够承受更高的电压，这对技术和材料提出了更高的要求‌。

在实现800V平台的过程中，存在不同的技术路径和解决方案。一种方案是采用纯800V高压平台，这意味着包括动力电池、电驱、电源、压缩机等所有高压部件都采用800V电压。这种方案的优点是能量转换效率高，但缺点是成本较高，因为需要使用更先进的材料和技术‌4。另一种方案是采用高性价比的半800V高压架构，即在一些关键部件如动力系统上采用800V电压，而保留其他部件如电空调、DCDC等采用400V电压。这种方案能够在保证一定充电速度的同时，降低制造成本‌。

总的来说，800V高压平台技术的应用是电动汽车技术发展的一个重要方向，它通过提升充电电压和优化车辆电子电器系统，实现了更快的充电速度和更高的能量转换效率，从而提升了电动汽车的使用便利性和竞争力‌。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXteGEW4aO03dHxVmNvOk53KgFozXrTibGBG2A7Am2ax39SEUVdm36pljQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXticlF6RtvN5XpCxsPqJZ3HtIAJHTYptJxzGIlPe7WdfhcEGzSnCBVjpQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtBdBmYfsCweCARYeRGHsrzcXCFXkiazJ2jTmtAgmibz2OVyJaCGYfOKsw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXt3sBk697CLmNwAQeiarzc7m9vwJrvmMonfSePXRxlO1K7IJ3xs6URIbA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtFib9qGVszNYlejSK5ZUp9qgReFSXywn6cXJXCNyNia7sfNDzw9OiaG7tg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXticptsicFmltib4FSOXtv3m8EFl3rP5icYTQsug95SG2GS6eykKGsMibyCdg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtn133ww3g1l34zoaVsQNTzlibjQol8Zd6y3ga7ZhzQoIDMMw2w5luv6A/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXt86BqrgWbsWO34zmt9d2u6zmSRshEYiam2RKEbQ9SlZ7uToGMYiaoLjDw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtV2pm7ysr8Gb3M8ukxjMES1RBOhhtOq5c1fKzNeFZTQXXicfIvzgxYrg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtQFJEjFMRJShujtqvPbqxicRw2dtT2o1zUXqn7uibLAlk6GWkfRxibKjNQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtO21sd037uTHXnTa27VRHl92WHuovqQwl4sMHdVhfdrfX4hyvEMibUmg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtdyOHaibY3dtkl301U8Jh7jXLpb1cHBCNUSwk4ALDssPfH5El8mWKJAA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtQqickSmnzwBial3xM92FNCOrFagEbWicT7odKtDPQDyHoLISTNfnaetjg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtX5PWlQk3XY6Yibic8gcDOeX6OuFTK4Jg2xywA5OicQn4808KfbKYXvadg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtGJPg0SvRvs7yqrAMKviavnibvRTNEND85AVIm7q2TfQlzEib0RzvZNTvQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtBA77mOibx57efeoFFYV6uWNqV31Y0sz4EryenfHmLS2YRnwA5UZn31Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtmHyOeEaNu24iaW3bWUXvtKC3GVUTveyzbvOCkBJzzjqA8icFQGMTKia7w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtzPLicfzu6kw2v84J435T0Zw1JdDc0NhHeXhDHJfmXDo5IfRlMWPqUNA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtNicmwNENLUS7Kf77RPY4Ywhs9HLYiag5jsCxRDbBibrZwTDYibicGxM136g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtyT5Pl6qXy8yRARGCod1eUU4ibLeywv1K5zmwYS9fCgQX5A6HFWE1ADA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXttLUxeJBL7fKkbNib8OK0oJoPL9dQgG9TJtu6LfbGictDlHG8HdX5o02g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtI8CXJ5zR7BQrkmpRWvSEZSzWckqqY5ia9kQrrdbN6jPq0nicfWIz9YZA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtdNF4mo2Ric8qJD59UW33zXf8SicuZxpOjTFJX7eVP4vAE0TJzXch2gHw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtfrd1asTF3Jic1uQUX3IEucgzfsDDOdqKy2PCZQQGiaj9OiaYPtjXTYkzg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtJ0tHIoxJUnS4jH3G7JIiblTMJlaOLUU0MeN6suB43MRZJ8VaT7R6KvA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXt7AKILcIxav3gYcpPYKFdEhCbIp34lMKTNSOm8dlaDyoHWR6icNpVfsw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtTb9VYvFy06FLCeibwzqAEQRtpgbicSuF3rKtdRtMLB4VibvJP1ibVHDl5Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtV9baibvgrBk9wbibwfFgJcicqagH5cZIMcL7iaYTXV1gM4Oe3wrrrwI8sg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXttN8iaXuIVkcibD1VEJFphK2fSxN3KLnJdeiavZsKNTib6fmTNrlibC4Vs4Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtxzTXABa0eqChcGicNxbJeg4SibVqbCMSFunGFvMxwoAR6JGauUsKico0Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtdt6r1fBQmoNlibP798KKwUF77PUaj1WicctaxGVJf4s9PJWCw40gkvkg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtQjrnFVZwBMuuULnYAZJITwWLNw3ib1TsqDiaU9WVHmDyCZ9B5KDgibEVA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXt0ibicDc45fHcciarO4H0Rt8c8EGpiag1NUxhA0iaTsZJM3zZ2icphn6kibhxw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtc7Jt4MIxe6jExFr9AMPO9ORvRpM9uRFUO8kNMP1XcG8TroxibxknSDA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtQxFoJqMI3QHCqBQKcXXDcNkY96TibjzdBC20E37Nzyy0n3YlfTuLqOw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtqcyO2ic9R7lx4pt3Xk3rAYBuZ8chJGnzTdpwsrHmo6AO8Cp0TENreqQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtNceYOCEtytdlLpxDsQp2VZDYU9lfPcxnOzrmHNRBZxSb6KnxHw6j9Q/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtedhwohf7oia7FxgamJJSnsb7grFCSxiccqmdO3ribI0fCbmeOYy0dm6eQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtkibqtkTOoCBOzsS6vCmBwM6pibzd2W0SVHjRBNYLjhO5TqNtldFlKAlQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtic4wa54ooBpbmhghAyGDSLG01JFAqd6W9v0zJvATyIrXJFibgWe7dmdA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtv28hAbs3xK4Boms8R4uCmIKPveUcqIkTDoCkfUyQ1QrkkjN9Nic4qAg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtmkABiaetpSUFSMsaPfyeDNiaZSk6ibOCAtVaAfHlEibeEN5mPVibHgNatng/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXt8y7EaY1jupUKfh6aO18lQn34LDr1pgzibicd1XqErpLe1PqSJ8jd2tibg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtSYfJyeeqiaNJmOxIIDPjicCX1fyUbqjWSLVcIgiaVguKMPiaWZJmYdRg4Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtXUD3nTPGT1wx2CI8PTrS0rl0SlfKGaPibaUrhpX6holAPtljSdEWybg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/IibNhTgZiczCgYqdJeYnpaPwCLjX785uXtozbYrgwXwhTGT4KvSTkuB3iciapFc86Z7Hk5nNUTWYektq9ttCvM4zlA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

文章来源:电动新视界

**‌SiC MOSFET器件在高压800V电控中的应用主要体现在提高系统效率、降低成本、减小体积和重量，以及提升系统可靠性。‌**

SiC MOSFET器件，作为一种第三代半导体功率器件，因其独特的物理特性，在高压电控系统中展现出显著的优势。首先，SiC MOSFET的单极性特性和较低的开关损耗，使得在电动汽车主驱逆变器中的应用能够为主机厂节省电池成本。这一点在光伏领域、车载电源领域以及燃料电池空气压缩机应用领域中同样得到了体现，通过提高效率、降低尺寸和冷却需求，实现了系统层级的成本降低。

在800V电压平台的应用中，SiC MOSFET的高频化特性使得整机尺寸和重量降低，同时还能节省电容、电感等无源储能器件的成本。这一点对于提高电动车的能效、减轻车辆重量、提升续航里程具有重要意义。此外，SiC MOSFET的高开关频率使得压缩机的超高速化成为可能，进而能够提高压缩机效率，进一步优化电动车的整体性能。

从技术和经济的角度来看，SiC MOSFET是800V高压系统功率半导体的较佳选择。采用SiC MOSFET的800V平台车型总体节能5%-10%，这对于提高车辆的经济性和环保性有着积极的影响。同时，SiC MOSFET的应用还意味着电动车的控制器体积更小、效率和耐温提高，以及在同样的电池电量下，车辆的续驶里程有所增加，整体加速性能及NVH也有明显改善。

综上所述，SiC MOSFET器件在高压800V电控中的应用不仅提高了系统的效率和可靠性，还降低了成本和体积，是未来电动车技术发展的重要方向之一。

文字来源：Ai

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)