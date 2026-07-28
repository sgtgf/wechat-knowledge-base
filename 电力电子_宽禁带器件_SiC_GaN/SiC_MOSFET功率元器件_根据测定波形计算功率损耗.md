# SiC MOSFET功率元器件,根据测定波形计算功率损耗


> 原文地址: [https://mp.weixin.qq.com/s/jeo4U3jyKmYELGO6epdYvg](https://mp.weixin.qq.com/s/jeo4U3jyKmYELGO6epdYvg)

**文章来源:**罗姆半导体（ROHM）

**摘要：**本应用笔记记载了 SiC MOSFET 方案的开关电路根据测得的开关波形计算 SiC MOSFET 的功率损耗的方法。![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmjWrIDjKjibxmq83cIcF0pe70YgMeEia5GdNVnfc65RSUicviatFakuhObo7rDMwW8NPsFNnDfjDhZAg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**开关波形的测定**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0WtJ9jS1Fn82MVJEnBfJvMMThf57Fsxu58SFrIyfdjdPiaOJCdicHhoYw/640?wx_fmt=png&from=appmsg)

Figure 1 所示的是开关电路和波形监视探头。MOSFET 的漏源级间电圧使用差动电圧探头来测定，漏极电流则使用电流探头来测定。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW03yuHHsEqUnC8HkQAsAsHicBjfPhibZ4yqf06NicYhjJC1XuwpeWpMFeLQ/640?wx_fmt=png&from=appmsg)

Figure 2 所示的是各部位波形和功率损耗(阴影部分)。ton 表示 Turn on 时间，toff 表示 Turn off 时间，这个区间中 VDS 和 ID 重合部分发生开关损耗。由于电路中的感性负载，Turn on 时 ID 会先开始变化，待电流变化结束后 VDS 才开始变化。Turn off 时与之相反，VDS 先开始变化，电圧变化结束后 ID 才开始变化。接下来 TON 是指 MOSFET 的 导通区间，ID 和 MOSFET 的导通电阻会引起导通损耗的产生。

最新的示波器有可以将阴影部分自动演算并显示功率损耗的功能，如果是没有该功能的型号，就需要根据测定波形来计算。

接下来说明测定时的注意点。首先是示波器的采样数。采样数较少的话，波形的详细部分会有所遗漏，于是导致测定结果有误差。需要将采样点表示出来来确认是否能正确追踪波形。第二个注意点，因为电圧探头和电流探头间的延迟时间特性不同， 测定波形中包含该延迟差所导致的误差。如不予以修正，电圧和电流间的时间轴方向会错位、Figure 2 的阴影部分面积就不正确了，会得出大于或小于实际的损耗值结果。为了去除这个 测定系统的延迟差，需要进行纠偏修正 (de-skew)。方法请参 考测量仪器操作手册或测定器厂商的技术资料。

**波形的近似计算** 

这里对测定波形用线性近似法来对各个时间范围进行分割从而计算功率损耗。首先是计算 Turn on 和 Turn off 时间所消耗的功率损耗 Pton,、Ptoff。功率损耗使用 Table 1 的近似算式来计算。根据波形的形状不同计算式也各自不同，因此需选择与测定波形相近的算式。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW06SyntlcSd0JlUK1FyeWq91DmJqFwJ9kOOcbOunfe1PFE6ywRVibgeFg/640?wx_fmt=png&from=appmsg)

Figure 3 所示的是波形的一个例子，Turn on 时波形分为 2 份，前半部份(ton1)使用 Table 1 的 Case2，其条件使用 ID1≔0 的式 子。后半部分(ton2)使用 Case3、VDS2≔0 的式子。Figure 3 中 VDS2(on)是 MOSFET 的导通电阻和 ID 引起的电圧差，若与 VDS 的 High 电圧相比很小的话可视为 0。作为结果，Turn on 时的 功率损耗可用下式来近似计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0uHb3KUMQgkFDLaFoL4URH8MPBxaImwZEKPqKSEIpnkt1DuzCjiaiaSww/640?wx_fmt=png&from=appmsg)

同样，也将 Turn off 时的波形分为 2 份，前半部分(toff1)使用 Case1、VDS1≔0 的式子。后半部分(toff2)使用 Case8、ID2≔0 的 式子。Figure 3 的 VDS1(off)也是前述相同的理由产生的电圧，若 与 VDS 的 High 电圧相比很小的话可视为 0。作为结果，Turn off 时的功率损耗可用下式来近似计算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW09qpDvUkDOAMb7xT9Z9o29XGF5VI3c0pjJqYZic6ooLO9OlzUHiakAACA/640?wx_fmt=png&from=appmsg)  

接下来计算的是导通时消耗的功率损耗。Figure 4 所示的是计算导通损耗的波形的一个例子。由于 TON 区间内 MOSFET 是导通状态，VDS 是 MOSFET 导通电阻与 ID 的乘积。导通电阻的 值请参考 datasheet。选择 Table 2 的波形的形状相近的算式， 用近似算式来计算功率损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0RIibmSVxahqVRfOLWlibZsk9icuGsYZGZMUTasXRg9Xhjq6uFboPicUm6A/640?wx_fmt=png&from=appmsg)

这个例子使用的是 Table 2 的 Case1。导通损耗可根据下式来计算：![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0Iibpc8KqJTQpFjoLictvbGsvezKiaYZiaT6TpxHCD452mrbXtvXRlxGSUQ/640?wx_fmt=png&from=appmsg)

接下来是 MOSFET 在 OFF 时的功率损耗。Figure 4 所示的是 TOFF 的区间，MOSFET 在 OFF 时 ID 十分小因此功率损耗视为 0。

MOSFET 的功率损耗以上计算出的功率损耗的总和。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0M9RAYlJME8HqYHYTvpK1xdCicZY7c1ngtdjV84hMdzU3I8icwGZRmAKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0UpxHPzu36jRKbbiaJgbfgFzP1C4vN1bXg8R93Wh9oAAQWu4XlRPHpiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW02r38YmqlaGCEQs2kD47V6VUDskgxcX63sIZwVOKPNFql2WFxHGr9lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0mngUictCZ3iaicGj45AGJpQuIxkGDr7Jwsq3Ssc3WZBnXHZrA6N8J5Dibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW01t4sb6nsl7efRCgdhoHtGCCyNX1lpcS6HALwlEnVxOVicVt4cz4jCjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW07OAxWgfW4O56hLjibjkoA37COTXpoCFsZnZG3JfYgaII9M38Z5w43yw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0uHdptUyzq1ZY8QbR2kA2TXYqhoiaUrqd8sa0nuLUzGtYlMzM931eqAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0zRkvWuOj59oXC5tguzn0KYwiahc5UtoKlKFgR4gSqmYib7eAVhxbErUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0o7b642sIHPOrN4dXCKINpdo7Dw0DZBUvLpIlVQbo7ibZdwqfkvOSiblg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0Gh3JqEoSriaVxrsvLNpvBFqpuwDQFJ3D0oxj6jkZibbDbBibxLJnkuhvw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0iblFSSeqwaBniaia5ibCBnmLflIsm1ualAuBLibpBC84LGUhiaB0siacYoc9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0hP0XwgdvubAfRPBNjjpUmOiaqmtWaLbBEyty7qv3I4FlwmccDnorTlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0xW8xxugPfWkKlQpk5IjYv3sQjG5H39SvLOIVwCLUTpFxYOhmUdCQZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0nTsWnn1fiamVicibsXJLvvTaic3cRZtvMaFoICZsZgyeT8WziaySjZxuZzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0MRan1YVV8p9rIVG8g2YLExmJ69tKnfu48KjM6Kk2SzBMHpbxtlCpyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0Ka09jejrCygCQLTp72R5WA56g8XkNFJa9wmsmPsDbx3lgInIodrCpA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0b6WXiaicA0JibqtCbhsurNsQM5BnS7J7QezYOGVTAPlibcIpicuAEqmDJhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0JTL6Rn3htdfZW2bb0DrPIia8v9I9chdNgqdyR9PEMH89RVVibQbhrTAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0NdReU37vaVEWSeU1IqibUlk0eFf6icCAgg6YezAY3U1woLe5wLjmK6QA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0nwuWOeOr8kn4IHMnXVfBgtsLHibicgH0sSRa9JeVzQACcAQKIzibricbLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0rhLYy4M4oRMdRfzLJhVBT6QOlVteXbv4cmm8BaPehturVdEKAAxeBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW02L0iczwqvAsNBtSKaZ0a9vJB8GcQnf6uEGPHiaDMQT109pBia84zQYdibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW04JkVdohAiar9lNoD6NPdict3lO9EKQJ0ccibwhXj8kiaxsIreLshmYIGCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0RU6TJ20r9CiaRCv1NgeJABicqcMclZdDx8jQ5LScOKJ8AsGqiaBwMDYww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0g3MGI5IRwfOqGh8IkCDNbmj5hDsibq6bEUnE5ibMS4OED1m2HUMPftOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0kvTu9B6H4ZtfY1xgrtwcG5xWyHOcHRTDSrnwhMq0xZjqve4AzvicT4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0LbUwtlNvHickwxUVexDzibfzwoUiaVTGPGAqOcwhgibJg3uWH7h0ZOb4sQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm1Rz7fwmAIv9F9bx3TdEW0nB9Yu0cuia3JpMCYMYuAic9ELWibGIlKR8ft54ibxs89H3DrtQ8fdFTW1g/640?wx_fmt=png&from=appmsg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)