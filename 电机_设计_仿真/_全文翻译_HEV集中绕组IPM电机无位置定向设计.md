# 【全文翻译】HEV集中绕组IPM电机无位置定向设计


> 原文地址: [https://mp.weixin.qq.com/s/-kWqCfRgVzwFqgHd1KAe0A](https://mp.weixin.qq.com/s/-kWqCfRgVzwFqgHd1KAe0A)

![](http://mmbiz.qpic.cn/mmbiz/TPRVzx6PFWOdLyXNbvYZugOs9mlSZAiahTib6aYwdC2GNlfSdpgyRbFnAxvPZIibBl45ZgwaLqXicP1S2shz8Y6UkA/0?wx_fmt=gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

原文：：《Sensorless-Oriented Design of Concentrated-Winding IPM Motors for HEV Drive Application》——Y.Kano, T.Kosaka

* * *

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjsEiazFNDS0b9X340ABu8FZkgekTkkfibPHoMtnyxYgswvEia2xE1ojLMQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjqq7Uv4jvAXomoQwBWniaIEBoG0nwTDibhdvia7EakYsiaZUfcJeD5QOWsw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjWZrl1icGic0ysQpmcTKqdAD1hFt04ibfZA5KeO30XCw8qibn35F1v7Uf4w/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjBM2Mt2pjCEnEjzVnicgAWCLOqCicZnQje6GicYHniaEH0r4x0uHXF56CFQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjXB75AhVk48icQfmc8GDwvfZlWHPZFhHfs4jsupSvnSHrnRiaX1aZAQFQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjqyaQCOGTSODRiapdWyu1dics5vOnnYcU3Gwnz62jQuiaydDTufSC6iat7A/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUj52nbjgbApuXMGibvibLakiaib46ZuhqIl27TibfVlOGrwicBm274Djmwhwjw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjw1qpsufuBBtll5CbrzqV3I3byawFwiavA467ZukNPicD9kjqJ8GDlBzg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjRicC6T7MeF77TlOEVdXKuRc6WmfjCbsO2DcRLTAfNG6Zib9rsibAj4BiaA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjbCspckjW8jsYYGUv6Mx8bmAdQP9LxPKcC1MBVTWRnKYKia4Vkibd08bA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjfdMx53gy5oHfDwibRaQlBE85fVGiaBu1PnyOtIONcIkjF1UASnAX5ymw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjoDCtLLlq8uOQ3icTLNUns8kbich432Qd4m4IFgBiazYR7lTQBhtiaQhlUg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUj1V2Ha6BZ7GFVm7icmKA8AeSk9De3y6NgrTL8glR2c2J89ktXFnha2CQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjPNd7CsfLK4JakcorNic0aoyxZDSD3vZapw9dIFBjJMCTJsfzAgIL8lg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjG9Gq0AQiaYgw48ehDMjoIGj6A7eBj6Jk8h7lxejNCPse9cyW3K7yESw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjbRE3J8WD1MiaTB87mEzicOkk3NefxyPCsgwzqytFqUd2BB46EQU6llibQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjsVJiaVibDzpo3crsY3tLq2XNgSuL9iagCT734AdM1wszVMvLic2CLWajfg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjMtmcwVz60PcA2qckqZtIFuKg4UjQsT6ibgY7HCiaSRnNNLR8uibZVd9LA/0?wx_fmt=png)

  

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjVFwCZ52WD017vbiajgYD0HRpr29WFJHCHzV2fcq5bn77HmWmnDoymfg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjgbtRSR4KRT5NFcD8e092ibBSicaoqzoIwkEqZlM78E5oZsIB9DSoQsSw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjcRmxsOwKMu7icWWen0MRNYz6Ls6wI85cTOHs8J1NmdqTzBp9y2WdcNg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUj8MpodBzoufRQgnQGnLjibxibtkS9UrT02iaHY2Y8dMzBux7tWwdtXZuJQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjN4ObY6u7685BUTFIjSj4TFHcBI7RIo1UM2HPKbTIukXXe7pIUmAymw/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjJFZ6PibPjmgMfDOMM5A8iah54ibf914k89icfe2PaFuiahc4u5wLVRgI4oQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjtN99GzUpVdXOYaDzjv4U8CL38Y3F27ooq807ajtzFSB7n3Sia28Nic8g/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUj4z2ALrTp1x2NQatic4mG9W63qDduTZJYnFOj4nIMGJQ23HG4xQg86nQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzjniaaxdzuvfSIlgwkwwdUjYGK1aiae0N0Q63uDZDqeJWSA1wp4s39MrI3yRwpJF7HW3GX0O2SPHIQ/0?wx_fmt=png)

* * *

感谢黄海林的翻译分享！

索取原文，请在留言区留下邮箱。

欢迎推荐优秀文献、国外电机最新咨询！

  

推荐链接：

[【电机内参】宝马工程师--分段斜极结构对同步电机振动噪音的影响研究](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484239&idx=1&sn=c4ffa79bffbc57fca9509b756f2ea1af&chksm=ea646055dd13e943f6e54b5b21da51bb3ee7cb9aabdf48c8ace0c3623ea665fc0d37c0a5cc55&scene=21#wechat_redirect)  

[【控制内参】低频信号注入的永磁同步电机无位置传感器的控制算法](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484206&idx=1&sn=d1a43a51c2a0ab0155d33e307ede43cb&chksm=ea646034dd13e9223d0b697c60982cac686c784e0dc72f7ea9d3b9f9fb66d042134a2342aabe&scene=21#wechat_redirect)  

[【电机内参】一种高绕组系数&高槽满率的电机方案](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484134&idx=1&sn=51cd2bd08b953f7334eacd9fc5088095&chksm=ea6461fcdd13e8eaa5b4c809fcf727f979ef1cd647b29619e0becd0c829a1ce63e1bc1382706&scene=21#wechat_redirect)

[【电机前沿】一种新颖的应用于混合动力汽车的磁场调制型双机械端口电机](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484111&idx=1&sn=cd7bf61262c4f1c1c4c337d0b333ad07&chksm=ea6461d5dd13e8c362236f82426829a18610659c08623e0c1bd11bbf4d501a26dc127c2dd061&scene=21#wechat_redirect)  

[【电机内参】永磁体新工艺对电机设计的挑战——晶界扩散技术(Grain-Boundary-Diffused Magnets)](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484088&idx=1&sn=2d1e138f1c826d5db98bf9024fc622db&chksm=ea6461a2dd13e8b4b3c2f03853845c81aea251848b2fe6187e8aad3e80c00b20329c1cd88d2b&scene=21#wechat_redirect)  

[【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484076&idx=1&sn=8d1d033fd276b5e819fe99291e802745&chksm=ea6461b6dd13e8a09a3b7a93bfb2f1b42ef92b48c011fd4ab01fd357da4a849bd3a383a81df5&scene=21#wechat_redirect)  

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

  [玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chzNcu6qMRl2WxjwggF06sYxn6hbRNY8he3vQqpBtASSjxRJiaibRibxuA9ga03FPBLBiaMo4jrbzPoOXg/640?wx_fmt=png)