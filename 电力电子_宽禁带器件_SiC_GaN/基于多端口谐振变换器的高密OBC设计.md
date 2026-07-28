# 基于多端口谐振变换器的高密OBC设计


> 原文地址: [https://mp.weixin.qq.com/s/F-10IWK9NVwHZUXC4b625Q](https://mp.weixin.qq.com/s/F-10IWK9NVwHZUXC4b625Q)

**文章来源：**NE电气

**作者：**NEdianqi

电动汽车车载充电机（On Board Charger，OBC）可以根据功率水平和功能采取多种形式，充电功率从微型电动汽车应用中的2KW，到高端电动汽车中的22KW不等。 通常车载充电机是单向的，但近年来，双向充电越来越受关注，碳化硅（SiC）器件在中功率6.6KW和高功率11~22KW双向车载充电机中的优势。

动汽车将有可能充当储能系统，实现各种车到其他用电设备的供电场景，比如车辆到家庭、车辆到电网和车辆到车辆充电等，因此OBC正在从单向拓扑向双向拓扑转变，电动汽车未来采用双向OBC是一种普遍趋势。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhzuCySmJDSSOPfmIibHmHVbOS3nUaMibXPvz4WmA5d7Zaw9mjTfibRJriaiaIDMn8R4XbMZH90obSZhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnhzuCySmJDSSOPfmIibHmHVV7BWLr0jDZkqwnTiaz4Z88f97Tq1jRUkQCicOffaKAOyQNGQE5xiaa4ug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7TXoSxdnV5GiaTO0LGZdxicOT1Fl249gIJpabtTAI3ibGniawF9E9JQJMwQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN76DonsC78uZBOGNBE03dkczmJJa0xIGc0n60WVwVeXXUcN4fNBMNjXA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7xuDSPOADaJAMdnQiaHlU95OV1ia9zP4vcqADNaq3Z3iblmZJBEL38gpbA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7ibibW2GI1sSiaicPAOxVsXxk1dKbe5YvKLy0oBlib5TGsAGTCqH1eRVQicQA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7T2HIJAZUl5uhQnSlXJQPb4xAeEMWQOEPtQ9NNhHRyMbFHKgmCeoxIg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7RGEQNhGRN1IGZ9LXticibyUagtwlHnS9A8ibgqUV3PDaAluFyGR0MWNbA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7qyf9mVRyNNGtUicYHPxBn3MbaZebrPhLU2SPibD7VS3KoicNsGgrUch9A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN75PU1TMCd1YHycEIL1JyKCB6Wl4rYdMfgHF0YuwRkIw6lIW45XGH55A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7JQiaO9jOFkoLD53BLNs8QCCib76ia76nXZECFtcFGem2cTfVRZY6DLbDw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN74hJOshlJ0ZuL9lMRUSyL3lh2c7iauicwCH6vzWWtnPRGnWFWiayXaqgWg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7lBDAs2IKxS2wnfg8uIdfib6Ke1cZ5StZC3AWZyHlpQMASQzrPJiakFNw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7EiawdQAxapHWvpWVOltP205JTwiaol8qVes3ENYTCibMKcic6qo1ao1VHg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN70977nxiayfG8DAudEn43tccfcgG6Qo8AhtyAVdecRMFlrRiaHD1uxaeg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7wcAbAw72vTuLAHXjJV8gdaWkibYTYYGia2GtZwzD5NE2Kicg4fNj9Kk7Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7kibldG7XKIadhY5VRebZkM8WFgCDlCTBIx7ubusPoODBYhN2tm62e9Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7Qaj0eJ92QG6RZnOicckmsmtlwz82LSWicAKLvSicJqSTThAIpiavjUc34w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN715yQy5Gt5oiaiaDWcoTOwhhhLttCYXuZrKbkYFZr8S8cx3S1ia7MuH3aw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN77LxiaicUakiaOJL11emVdMPIAX0Zt5P3buKpqtBn5hqjOW8ZX7SpXTzVQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7XKHjm0ia8Gfvd3mzTsMTuibX2HhhcRxMYnjyT3ZMOMm23ibt72Zv1cEMQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7pfWmNsjndbBwn1PAWvI5EpapbOb0nCqJ8tgB0LNNpibzH1jnf3N66Hg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7TqqESibFPERaHPAI2CCC8VDuPq7ZOHmGbesNvkRePRlCXWRTrvPLSBA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7zic0m3K3qZ5PGZ80Cgg8y3V784TwefhIFVicIiceuGqh9nvvyJazpzpBw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7G7ondj82ib5meYiclicOk2a4tWtrOv0Rfba9hSJ4Q0jRcA3b1Wsp2mKXw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7WmdwvuWTdVDWicQETNL996erhK9HuvxXIbnIaSnn8OUWZyjxJfrtxhw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7pksgzcWPaibicC7cgDbN0LCCRN2ySRticdMvXwPC7urk2mjicicggkIbMpA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7SFW4OkxXXLGIx69KS25jMkxDkZibgrDHwSu51J8DCP2Uib4RicnSzIVvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7nj1eDoyavNIJVp5cCMNVy85RfqwjqMib0KVDpbo0qClQUoTicoxnTtCA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7jGibKNhDDCefCvjr74uTWjrRib8ibk2DSJGxflQKZgWIFJOrxG8YBhhMg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7POpiciclW6RKTBC8QmPPEpF59siaZbibvQSqibSZUcCKl21xGEgQyyH51cQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7552JcmaWB3JyNEYGcrbVr2icUGKDpaGVOv3N1PphZlVbZe6f4Bw6NRQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7yjWhPdy7pJqSpdc5erM76wuJxXELibicYSXun9ScCvqS9cwBAInbvtuQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7iaJT3VdJTRNG2l0w7hOsgbk4Kj0dmM54w9m1eSiaJIyLciabCHuhujOicQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7ojHVq1SWaZHKflklKskL5bxYNGVXMvXhcnez808WOZXYy6qXficw2TA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN79yBO2kB6Knib0sGcK426JYVqmLibvicYXriavcMyzOarR1L95sKvmicJDXg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7tS8uoK8GvhqBpevbdfKic7BW3XX7GvKVeMxvwrVYsdgOqDdYowHKdhQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7El1utUicSYmBsGbsaBNsUvGicIryMzcI0Sj9521n4wZLhImOVPJ4gCUw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/9bwhXZWoFDiaqYGqKIvLYbyVmasOylEN7ziajnYrF6dBxhjLSHNcxXcWZgFmMe8hiaoBWyhibRNopAyjeiaLBxee9qw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)