# SiC MOSFET并联使用时的发振对策


> 原文地址: [https://mp.weixin.qq.com/s/l6pmChGvKSRru7GACNG2sA](https://mp.weixin.qq.com/s/l6pmChGvKSRru7GACNG2sA)

**文章来源：**罗姆（ROHM）半导体

**摘要：**近年来，工业设备或 xEV 等应用中，随着大电流化的需求，低价格的分立器件封装品进行并联使用的电路方式的使用方法日益广泛。由 MOSFET 的并联连接，单个器件流过的电流得以减少，使发热的分散成为可能。但是，由于单个器件的特性存在离散型，MOSFET 进行并联连接且同时驱动的时候，每个 MOSFET 完全进行统一时序的动作实现很困难。与单独使用器件的场合相比，驱动方法上有需要注意的事项。本 Application Note 的目的是，对关于 SiC MOSFET 的并联使用时振荡情况，基于实测结果的明确对策等，对包含驱动电路的线路板布线的注意点做出引导性的提示。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0DPJv0jnb36n9M71KzxwQI7VKgQRj4iaDS8RPDbRvW1XS479shicv6Dqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0Ulv1VH4ic4BxgqvnZOnQrXicQ4p67OicKGvOVD3B8Vk2MkDWrtNTRDWSw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0lnLbT0mMibibhiad4ctrEb19y0yUfyajYxaFtgtu4E5qluVzPMxTBX8JA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0fveJcEQSVCshBCSJmRwicvreJOcv2uvSZrvMBdcoDw4SKib9JnOQqsQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0m1jyMBlh3ankPEiaIzoLxKJbtcKiaMLUdiaW7exSswP7lreMtnulKicbQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0sh5RZkC0icRg8vLcFoYH9lRsuXib5XTSs5nibTQANia63Ihodt7q7EV4Cg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0D4qOl4pxsekrjzwDPl7kn9mKVHEbsDM7RIg2o0c7XcwW7nrW94MHNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0cfxwS3ib4iafcibDH36jB1kZcQmea0pcugC31hlibWeD3nEw2lSRia3Xm9Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0MlwSd9GtxicjQuUzX1kiaxeicpf99icbMw7A0iafs8YiaxwJ0tpV3PBBGNiaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic03C8ptG9MbVY0icRojknd7A0U6Tt2quuQA4fNwfV5WfCRWA7yb9zy99g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0auWITfqBCuXDtiaFTtKfLUWKjrsDUoczcFBTUMTEWw2RJUdKDGIttuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0EfzzMYT2gdObYoIry6Eic5xVYP4ibR0RT2jXrOjM70IXf42d7xZDTekA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0yyNEnyAhlsLhJuXSxg565xnxMugtOFrDicgiayarbCITYfrJKM9QZoyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsksQXK0fFxhTVYDy13aAjic0FDI652vvzPcPLcpJpUCq1zh2aqk9BhRBdbWTzgQyiaSmo8emyVAvrJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)