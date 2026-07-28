# 华为AI数据中心参考设计


> 原文地址: [https://mp.weixin.qq.com/s/G9jVk9I4y0BBfJw\_BgUtkg](https://mp.weixin.qq.com/s/G9jVk9I4y0BBfJw_BgUtkg)

文章来源：华为技术有限公司

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyMbicwf3mB3ovG44CWrUZIAIMBBVmibicFdt4eNgULFXBH1xTmBHqvtELA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyLmPBrPO4owYGZMe4dEbQgd4l3UyVbF76AUQIRRAokmTdUdSV8hRIbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyQBNagAlcs67KtGuibZdubn70yPynp7ZpgOqSPMny89NXbXh3WvODQXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyo4WahWpM3a9IKYqGyiaJ5mnyB0HHSEDov6tuaTD840ry8C0eK5t4SvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJypAaqgrzKMX8DoRL17cLugOHy36HmxD82bFGt9XCMC8rcjtAacwKwQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyCS14HCWyKpdcQTl7SggibNT4yNozmW6s86Gra3nfcgm3ybvF6lCLnFA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyhB5GPWQAWUQNjto1nlkhAwvZ3atHmB9hVd3h67YIZ8naqCjCtqKdKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyUUribcSROxBm5HdfEKexIUxR5qJ2rVBfnlhibiagM8w5YDVkAqr3RficYg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyM4YxrOHPIEZ2GdBbX5m4dRzF6PaybAUmibWt37chzawG0CicXx6McwAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJypWNIk3qm0r2lH76aB5aKaXeoFKovfaXicoexFrbCJbYYVbOb55d7ESA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJycyf4KXfyYEF020aKK011ZeGIjialtgdejmzNQicWo2K2FYcnTRGgdQvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyRcU7X1ibgyNl6ePyLoGUzJxU0gic4aRicIolkQqpiataCVc9sc6S656qug/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyqFWhfwtiaS7f0HJCsrduiaLtk6ySU3vIc0OVuq88bbFRG4hUU5fpjPicA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy8rbvNk2UMc8g0Iw9dy3tiaWEWrteH41HwjriaRQEkOxUe48tjE0ialfFw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy9JiaQDwmjaxTUYSsTtszcQI6Rvr8I8OOaUxPicnBEmGvvx2ibIhKynZoQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyHXSFZHWDf0NSqqyBH7UTYtZ2jEOsdTPSopSWg3ficFLwxMNPcV3tnbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyNNMYeU4szvUyshebxYdFdmHWqjDEattVc4dfbicfYias2fP5xicgticZFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyNbYDGsd3T2gZMuPMQEteqHGdxsiboGnNkf0ghZk374xaCTCEXlxBicMQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy3rs8vFpjFwQcaPmzPmfjZl3AUGC1Ncic1ovUDPFNOmicApDOGWwIHgvw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyWpotoYZlLeI5gGfJaDibbGS4iaZtzkzyPicF4zB2RibXSLL03hQCNjyToQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJygfTCia7abPvZyic35Ct1hGc2nht4raI1ia3IllLBicdKXEg4ZmjfaI3SQQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyqyzz2hQJibqE3WZPibjDcGu9Us7XU9uV3xlKB1gLrYUCvUNzVV5aPh6A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJymsD5wLCyqobtWLoVVwqXsNricdJ3s7t6jAM5ZaD73v6teCoJtRwjbEA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyldNJFPF4RXU3zenDpJKVzgxmnIhRiaee05XLJBwHEVxgfAYQTCOAojQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyJCXeNyljibibtLGBU0fibNiaGVaLaU1dG4UcibpyHhwWHT1ic39oFicXDQqAg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyPGm6F1av9jLruYNZ4rb2AaavCztJiauUWqqqaFp4IibIic3OvKF7J41iaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy0elNErJBusbwFQMpT3e7RJsO0hDrhURb79Sb1c1gK8wicXzf7E00P0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyDJfw9JOdaoH49icPETiaEp17J2lUWp20QlibibQ7kunN5z1lPYs9Qq8hQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyB5diaicrcgH8M86mXIPUNtMfFIssl8JRTZGzS0yMU61bdUlzGuZQy60Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy1cOtkU86r9D7kUAH7jIjQibkSzto2ObB0uqaW6MkNtRNtK3QFvGx30Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJybeAXk8SheTlV7QwV7jsf7VX07Ga0lu2YHSf3ZAZJJGz5rLuVAxIo3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyS3MW7e1W2icThb7O2BYszfwibnOfH4zibjUicJVj4oQcGeWnapEyJBR98w/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyNI8qETFbuCPd4v6dZKS1icOQNKnAJvuyulhEiczpPwAn5olHfQL0KuHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy8lZ7G6fwvibMLZd220Lc8WnqoDPVvn5m3ymLq9x0eTnUwCVj6hkwKSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyZFkRF3bcXk3SkxcGJYexs7whBqfQFjlicx73nNt3Rg7fYfbLuAqK3ZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJywlCb39EmZbvrKnQ0qjbQqcyzxnpXqnSTPfFkBq0uKG62I3BGJ2AHIA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyIKxHV0vc3ArPCgnGFjXSOXzA6j8VSL3w0kCQbfuVibQv2oD4w5h3tsQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyw8TyAcIa8HRmibetsf19zmMIlOvT4rgRlS9evYYmRVhP5RyImby0OIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy0xXODKRjOykywqpDeThu7wlUoiakciaogtBzaicl0NGoBkpkI9Cs59RQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyqvp6k4toibxZR5rGPdmPDNVEmthpNQTUv12HdtPWaIH5to8yQkrsoXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJygiaicpmDA7RDBXNI26rMrPLl5ZflAo6cxp6TEFYUwyGOxhqb8Z3ptjrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyluexlxUZaFKtCax68VDJicQicqevzMKLmuDfO4zBJACA6KicBLrjD20ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy1Fwb4E5ias4Df8bm4jAhnmB0ZMmEhvY4tzk6Y4EiabL1QnvyvibKyNs6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyJAr3BxPPTvh6unvJaK5MCoZRGjQNewrr1MLzFKuF1X90QuiaDj3H22A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyJ3w4vVbh6jQbyicjBtyn0z4TBhKvDcXxCE8F0cA4s7Z8vMwIDkCCMhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyLicrnm1dVh4he81ghvWduU51NbmJnnYpr12ZReblzfHMncnzL5GAZRg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy0PEiazvdYFibrSX1u4FbUs42icPlQ49rfXUmG9KEq8qibZ3jDJ8joqwX6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyrXmXxk7twCQ7ic0vGXtW8nK3HF95JjmRHDqibCj9QdVy2aVhlPbmxeLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyiaRpvMUbkEkjC689RZK9N5GxJGKTlA8UCz0TqLVibhflrhjQspjaNgOQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyW0DUz1Xzc1t8v4IRCf0fkXzpllXnjfNz7VMRsbvVsEA9gOcGDNwLZA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyg958AcR7QMcP1w19zGodNAEsDVjVyc6owxa2KMCXLhl2N83UfjVb8Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJynwSGjJWG0FDE17lMjtpGLv6uayJ2uCqXHVT7kbGxNJyrAfjjViaeicnw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyosSp25XgAJb8eu8LOjia8t8yyF8D3pJHLNdxnWiaRY2hQCOJETiaO7ictQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyqe1nt840WypwVUqZ1kBla29Zvh3CadYy6ic39CD37amWibmOeK8o2WXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy0lHvAS6wC2ZeBhn7icoGOcWvfRT1Ywk0XsDTD7OMIz4YJKzF4JgumJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJylBRTH8kiaWBudSdPFM1W9jVAelOic8vQtuCiaMxYOyibALSEBay9TbrJAg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJywbm7at83do8XL3C43aicvKnukum5K90s41pEp8QNUsiccomnBen3VkwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyC9y1hYxzzESE8ich8HEFUNefN6FMT7C53ibxp2159Dib3JdNDVmx9qZ7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyqpM5Sfj67BicR09qd5sOg9oUIeH5hCiaicqt04jzibHxZLxmArVRTjiaeYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJy8Fda95ZAmkYC6wJ5WgJXLDog8LNhU3o4v0W4A3HlxWsDicza0jicc5rA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslZck1DJtsUNwvOJZyZOoJyWRjwZiad1SKxRLWgJJ6F9OypF6yuncKYEqLmr6QLo7OkjMV2j27broQ/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

这份《华为AI数据中心参考设计》报告系统性地展示了华为面向AI智算场景的能源解决方案，涵盖从设计理念到具体产品配置的全方位内容。以下是报告的核心重点总结：

一、两大建设方案

1.预制模块化方案

特点：工厂预集成、现场快速拼装，支持“乐高式”部署。

优势：将建设周期从传统18个月大幅缩短至6个月。

适用场景：中小到中大规模，容量覆盖 1.74MW–7.15MW。

2.钢结构方案

特点：核心构件工厂预制，现场装配，支持灵活扩展。

优势：适合大规模部署，容量覆盖 15MW–50MW。

适用场景：超大规模数据中心，支持弹性化部署与高可靠架构。

二、三大功率密度场景

所有方案均围绕三种IT机柜功率密度展开设计：

50 kW/柜

70 kW/柜

132 kW/柜

每种密度下提供从单模块到多集群的完整参考设计（RD01–RD21），涵盖配电、温控、备电等系统配置。

三、核心设计理念与价值主张

快速交付：模块化设计大幅缩短建设周期。

高可靠性：分布式供配电与制冷，单点故障不扩散，支持Tier III等级。

高效节能：

极限PUE低至 1.13，采用液冷与风冷混合温控。

支持高水温运行与智能能效优化。

智能化运维：

全链路可视化管理。

支持AI预测性维护与健康度评估。

成本可控：基于华为生态的端到端解决方案，提供造价评估与PIP模板。

四、关键产品与系统

报告详细介绍了以下核心产品：

1.FusionPower9000 电力模块

室外部署，单箱容量达2.4MVA，集成供配电、UPS、锂电、温控、消防。

2.UPS5000-H 系列

模块化UPS，效率高达99%，支持智能在线模式与热插拔维护。

3.SmartLi 3.0 智能锂电

磷酸铁锂电芯，循环寿命长，支持新旧混用，节省占地70%。

4.FusionCol600-L450MA 热管理控制器（TMU）

用于液冷系统，支持双泵冗余、水质监测与快速应急启动。

5.FusionCol8000-C210H 风墙

房间级冷冻水制冷，水平送风，支持高水温与无架空地板部署。

五、设计参考覆盖全面

报告提供从1.74MW 到 50MW 的完整设计案例，包括：

用地面积、建筑面积、机柜数量、网络配置。

配电架构（2N、DR、BR等）、变压器、柴油发电机、PDU配置。

温控系统配置（风墙、TMU、冷却塔、冷水机组等）。

六、目标与愿景

华为旨在通过模块化、智能化、绿色化的数据中心解决方案，支撑AI算力快速增长的需求。

倡导“让每一瓦特电力都迸发出更澎湃的算力”，构建智能世界的坚实基座。

总结

该报告是华为在AI数据中心领域的技术白皮书与产品手册，核心价值在于提供了一套从设计到交付的标准化、模块化、高能效的全栈解决方案，适用于不同规模、不同功率密度的智算中心建设，尤其强调快速部署、高可靠、低PUE和智能化运维四大优势。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnW0W5rGLPDrhm090cHI1bQ33WZCZcOjyiavickVdt04DBBgSI1etFPSDwRv7cKss2ffJnRjBD9gicMw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnW0W5rGLPDrhm090cHI1bQ34EuYreXINYRj1QTOPe5MK1fo9zYe2IOUSnEkNVhoWg2vq7jtzIPTQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnW0W5rGLPDrhm090cHI1bQPjKfz19D6kiblTD34HrTWDJ4z6qm0ib9HzjY69picCn1YjsmX73GPxEiaw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnW0W5rGLPDrhm090cHI1bQHtem1wN3MrqVlIE8sNvjBeglYib41kibzKJ0jvHcWt9cgdgUOZ0sJWhQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)