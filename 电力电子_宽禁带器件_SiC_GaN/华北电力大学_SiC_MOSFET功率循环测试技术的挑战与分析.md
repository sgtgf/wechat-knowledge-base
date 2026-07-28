# 华北电力大学：SiC MOSFET功率循环测试技术的挑战与分析


> 原文地址: [https://mp.weixin.qq.com/s/6movTpieLZkGdB9eD3SvHw](https://mp.weixin.qq.com/s/6movTpieLZkGdB9eD3SvHw)

**文章来源：**NE电气

**摘要：**分享一篇来自华北电力大学-邓二平（博士）有关“SiC MOSFET功率循环测试技术的挑战与分析”文章。文章介绍了碳化硅器件的特性，重点介绍了功率循环测试原理-功率循环测试方法-功率循环寿命，这几方面的知识，大家参考和学习。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmkreib2pRiaulic6PFpPUaNgIW58ZXGUlbxjr88QV10oaRwXcKoCdoNBvuwqTTyXpsLPKaPBAxskG1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FEAX6QWmHLLlE4UcDsKFj8EXa802xlgck8o7yibKSDVGHEibHibzicWMrVA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FzO7mia0t6BtyJlTPQm4qYFSz8VIeBI1gnUWyN5L2JdnvUq2Klx2bd7A/640?wx_fmt=png&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FswUAJrMMFfHdIlbOLNnyALeeCApiamyDzozxUOAbn6iajAF65HEpgqgg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FOw3hyrLEWqrHjIBRibnayaFJgJHmEhQ2Go70kESqqzNLuY6hiax2k1uQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FpYQfgMCNQ2t3n3gaMfpicOZan3aZvb9rrOUVjdv5d6w9Ts55uKssYuQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5Fy6P3c3qw3a2ccaNdN5nVk3hgSicTETibCs5rsOSE2qEvGtEXiaCJJY6FQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5F2zusdynjxClCjEjvPcPrWB77xkib0ESJXcZGfIfklcSqDbSpyicVpktQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FjSfffC428OJYKf2G7kekgY49nlIQLAdPm8l9WLia9eYeRzwBg8WhnRA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FWDbyibeqR0jgGOFyHxzYSPQIkXneI3xI801gXIVk7TKic07ndpb1yIGw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FSM2DGZ1Z2PR6tFDv9jswAjppwhQt84f6EBpCys2wGEddv48Kbe8p0A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5Fr7roM0UMXic8g9Q8SSSloKylmz7DINZN3GkkYRXTLaUMvI4aibl5iaqGQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FlhIicvrfjR7awAjWf4wyKj6ESuqTVBMLe1mqK0KaAwOUEBUxdUJtsPw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FCCUIibBbdOkM0Q89LlQCkecDrdmoKfsoG2zUzmVNIiaMPr2DMBzQ0ENQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5Focn8FY1afeMSPys6GBiaPCFBalJHUAAicckaS8icrScWZwvhQfvU8WDww/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FGPLFsTfAGjgqfvctwubrDomrAAr8ibFQxiauLMWyvXbT8HbQ5YUFN8TA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FicHUDZ3ZMGXY4xwXcicgSyGUx34IowLYvb7EhWicn2IIarSb05YugZIkQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FtjyyQKw1Vkia3sic1JSNpahVXLWYSMqt53a3nRdZ0SokbDgmY18HhIvQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FAibd1XFUnIHwLPNgGbUQbop8WMvgqoKe87ibl60jHqb3LUeXvicqO7MXA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FEfCI9EtJePv4YDibUwRnvD3vBpo0phmfb4VgF9ftgAaOJgIg8GusyKg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FPuR8OSFVhFDicXvkW8OEMkn9ljZ9Z5QkTlBGcz88tZicPzcVrbQyvuyw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FprCxrF0x8ibnhOGxnTiaicf644MUHDNM1OVL2U6q8jqmThxafV8lgiahSw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FPDTdGW7MFqubsYdOJXTAVfI54wKWia5F4TtN2DlnjiavZibGwD1ukWJKw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FUxAKtAPQYADNddf3zqXVibmGfia7qice2SialgtAN9kQ3ThVwziaL25oa9g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FOq4W5XZKPPmMfhyeLmqUrPz8DUoBmVWIBuqETXXgYibahx8ClBlwaLg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FEd57ytLWqCeXqIlZJqNc3MPtVrt8SmoORLCFw2xLYBuQWnNibwYNjDg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FPibBZJAXsXzSvZ9PJhDjYst10RmGXfkuCXcny0T3LhGicq0dyCaIeEDQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5Fs8NSjBswaicBa7ZUicibhRUxwjecHy8R5854NaHj8KkY34oAibc3ibiaG1oQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FicDic4Yzp8ibZibIXY7iaxOpscibhMhHOH0P6hLhwE82vGWiaibMVd1JmGibicEg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FCTsFDJC2kymYcX0aWEicB7NahvlY0KzEOV9gxbmBu4lyySdibB0XQbFA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FEzJSiapnvWmvn0biakr3Al7nPXY4svA40r9axibIHZMxLgFm2u0yNYPSw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FfykfDLUysvDLaEAGgLtbfFfRAmOeMF7e7pzjtibF2lnHYJpia82YiagBA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/9bwhXZWoFDgbrM3Tpap9Ll1MNTPicpn5FlwHO1acuYPSPub7tornXUn1VyNgdZiczPjFB2gQhAaCFgzv7KWcpyjQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)