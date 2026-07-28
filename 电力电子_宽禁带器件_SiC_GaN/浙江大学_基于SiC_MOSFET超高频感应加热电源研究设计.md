# 浙江大学：基于SiC MOSFET超高频感应加热电源研究设计


> 原文地址: [https://mp.weixin.qq.com/s/Y1YGhDQ5\_c6qbVRw6OIPNQ](https://mp.weixin.qq.com/s/Y1YGhDQ5_c6qbVRw6OIPNQ)

**作者：**孙俊彦（硕士学位论文）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUpATXv6tjhVlfELIAv4URia7hhsNrlCbq8xl2fVjMt5Fb4xbvAEgyYtg/640?wx_fmt=png&from=appmsg)

**摘要：**相对于传统电阻热效应加热或火焰加热的方式，感应加热是一种节能、高效、 安全、环保的先进加热技术。经过几十年来电力电子技术的进步和发展，大容量、 高工作频率、高可靠性的感应加热电源成为现今的研究热点。本文以兆赫兹级  LLC感应加热电源为研究对象，采用新型宽禁带半导体SiC MOSFET器件，研究比较分时控制和并行控制下SiC MOSFET的关断损耗，对实际的超高频感应 加热电源研究很有价值。同时锁相环技术在超高频感应加热电源中必不可少，本 文通过FPGA实现数字锁相功能，并改善了根据负载谐振频率变化动态分频的性 能，从而扩大数字锁相环的锁相范围。 

本文第一章对感应加热电源的背景、原理以及国内外在高频领域的研究现状、 发展趋势进行介绍，在介绍过相关高频感应加热电源拓扑的基础上，分析了本课题的研究内容和意义。 

第二章首先介绍了本文采用的电压型感应加热电源拓扑及其工作原理，比较分析了LC谐振负载和LLC谐振负载各自的负载特性及其优缺点，考虑到LLC 结构不需要外加负载匹配变压器以及易于提高系统功率的特点，最后决定采用 LLC谐振负载。然后介绍了分时控制和并行控制两种工作时序，通过两种理论方 法计算比较了分时控制和并行控制下功率器件的关断损耗，得出普适性结论。 

第三章首先介绍了基于FPGA内嵌数字锁相环芯片及传统数字锁相环结构， 针对传统锁相环锁相范围小的问题，本文对输入电压信号实时进行频率计数并定 时更新，使得锁相环系统根据负载谐振频率的改变实时调节动态分频值，达到扩大锁相范围的目的。此外，本章还介绍了锁相外围电路、驱动电路以及斩波控制电路中相应环节，分析了其工作原理和设计方案。 

第四章介绍了SiC超高频LLC感应加热电源样机系统中的主电路设计及关键元器件的参数和选型，最后搭建了兆赫兹级感应加热电源实验平台。 

第五章首先通过PSIM软件对并行控制和分时控制下的逆变电路仿真比较， 然后在搭建的实验平台进行兆赫兹级的感应加热电源试验，包括多个工作频率以 及两种控制方式等不同工况，最终研制了一台1kW/1MHz感应加热电源。 

第六章对本文的研究内容加以总结，并在此基础上提出后续展望。  

**关键词：**感应加热，超高频，LLC谐振，分时控制，数字锁相环，动态分频 

**第1章  绪论**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUWKjJuabRxukkiazSYxI3aqpkcsqeJwKMqIpxAEkNzZaH0PIsaHFhShw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUeomsw2hf71csGbkeSEtp26SCxOzCsVRMoPn2eT0icIzOyianeY7icCcYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUIuGSusiaAXAKvvhTRavETBDHBIKDibUYCpGUqK45ZUlWoJ6DWsuon8Ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUZzqGeD4x1ETic73P5sW3FYUpK40aFQMNR5EsAxLNChRBxdsgIn48KFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUCvIx8OoRunjicE8ImDLgYSqX1rjY4N9iaT7LIibCIjcIxicFrhQYUblDEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUlcgfl7SfvP08zcyTHBNcjSGkLejYbnClJBsmddQmic4NRgb02Epdc4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU5SHr7zMLQ40Z9ZAHsQ0iaqVH1gbThqksicFAeJsibDtwrrUmnzpXicT0wQ/640?wx_fmt=png&from=appmsg)

**第2章  感应加热电源拓扑及原理分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU0nJT2aHrBElFSfy6WEArZpd6ia0OBvpicXNCaKt1eX4xj7qa6wEf1fRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUjyCqnjrRf5b3oKC0nzCMwW7GH4ujqufphzeNiaA4JjmoIAhWq69ozLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUdnCXqyzkrxUrLRXaUdecNkNMiblg0adgBicJb694Q4SGced6YS751fhg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUYOibOwVTqEdZ36ATlNtuzEx08s3ibhgmhibqicesymDD8yNjGl7dEsHLDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU3ibwbzWvlQ1u9Vxudkrj4CYK7icp2QQzhicTia6D7Ot3FpDFiapJTJG9ibGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUibuFRkgtmJDibSLAX1Oe73AfD0xib2icSicYW7V2zaztpao4aO94WePibc2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUB6hJU7dQZQib9zibiaMTa9OQlQnMiaql6BScYUueX3ZicLPLqMKN2YgIxicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUOFWWKt1SqLEutWU634zicicfJe81pdmQuicib06G6c48NwrD7Qo1qxrpDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUoNth0cOSDtgGydfyyd2UJKmdEGr1Tu2bGg87WQEeK4psCwK9csVaWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUX9ZrjTAibELSt5xpmwloofT79AflqxDEharRV9TSBhqgsL6FWr5OiaMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUAIZlZY7Sib2q0kdMxRra6ZJloHsoH7QsNTBqibfSFTricpcFub8NBiaWYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUugicAASEkls0LR264os4VtZhX56niak8wYA2DFW3R8lIibLUPWiaXMyntg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUXoYanrlvwfUfJURyZtk1Xia0QnHZIlicRYiaZaiapEgYR1guqavL9BRh3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU05ClRLHAgBMTzuLa1lVfczDybSrBRb8cKhzyM4w7rYgvoznGfQRTUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUMBvadrEyw0zIr8eFewluhqUbDScf79t5CgCL6SJJibArXMgElAa27sg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUyMg56ZOZAdFKabkrv7ov6siaCFYdawhy39S5juwkU0ZjKwrPiaRBcnPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUmzkUMql3aArWiaOGXiaDgNFgrJMTzYHhgkUqLicK11G1DlVnqVjgff5Ag/640?wx_fmt=png&from=appmsg)

**第3章  控制电路设计**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUXKOtnO0nMibbVrDfEJOoVYP7jmvDW9pWicplOUHpRibXaNoxelmuUcibvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUkoubxhv0YjmghZP5BkKmLGI1Q0gMCicpFsEeGgibCeAO6SYJ5g2KY3ow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUJD0oCJ6GX12qYB70gcVKMLpmZRbChMRedwun1EKqbTUsUlJQ2703bw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUeaSAicyBFpAeTgLDaM9C56HdnB4jjtpQfHqNibJjJgGk7oWhm718VcRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUeWAq1PC9euJLtrajJWO1icKIdF4xB9XHbZjEZdPibqkgNe0eBicdrDA4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUfQQqib7tTkq2WMx1ib1Sic0vZXjg4je3nLI5czDoIQwuhficBjia4IRZTVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUTicYNxOdvGyWYEy75OGnx2umbRiaaZdpD9uSjaTJusJIfkPWBHLfSmFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU65txEWDKgQcUX0jb9Ask88Xg7VzmV1YM8jib17Wia9AWYM6oAXSXwZGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUfB8GjIqT0pmHsMR8ZGZf8NLTaZOWDZA8jeP6grJu73icKsGMWviaOc5g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUAksgrIvn0ibTeTvBYZibJiaab9EcX8sZsjAmGks2OiaibSqAdChHdAeicTAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUic2hs6ANOO7iciadlYf9tnQOIQW7FhhAWbrwZaFicpNoCZBkLlicjld7icFQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUEmFqJxTbsWXSibX1ibzXBsq0tNDnEpXiaEn64twHGKPgIvI3lZa1WiaCyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUzWqP7eWzVwmQyIg5MP3CYhKKlibpibXMKibMd67wkF4PiaibUEzIgMgDbqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAURruGApl2ZsuOXjPVztOzm3RRA8Gzlnur9uwicwkBZe3zG03rXoRbpKw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUoocIRU9FYib5jqe6426jMXDJiamF1QRibJBiaYia3bK2sgGYbiawkXW5ibibhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUKNg8fKTUQ1ibW0COl4hmDctwHlcl3EDibSol3PvTdcLiceFAAIUSV5bfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUZAibaCZmfu0oorPx1TwSib5bY54ibB2owv6l3HHzSiaZZ5bu5TF1Fd9icyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUaLjL8MghN0nCFhCWP9H2bRVoCDzzgcNpV495KtILAtTRgBVaKhQZ0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUt4TmUFDXfYvicj7fk48RjlZtVPCHfMIbjeJ7Uhc2C9vVibnknmN900Mw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUj5Yia52yt9fYeT6KTibvYNaWo2ZSyWE1Lo3BPDxMSiclxuTyaCDG6wrTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUxXquTKbWoCLJBQellQKT3E3eHj9FpEia3tybPQ8ww65zAhLQ1LTAQqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUtUW2YW4icZ5YIv46qhicLdeDiczttKyczrboliauhvLCgp5sPe4gp1aEGA/640?wx_fmt=png&from=appmsg)

**第4章  样机设计方案**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUPdVOpUs3KcIbRgngCq2rGRIIbibak7w3Q4YoyYYpbeUhKV9P6yCQZsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUV7wNT95pphibUicvpttkMCsGbKpraMTFtnJ4nqjZuRDk1AZPJ2V6XnUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUADxibGX6CDaZ3BYibhEIvLZiasWoWTFmg2cKzhxQKkia0a9tdD57fWQic4A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUeHJbA6jcMeibYzPagj65oP4A2x2z3ib3jbFVD8CXzomFycMEicnBVia1yw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUsia8zqiaJLibg5NLNCdlZWaibGuXZgRq6PCVh5nqN88FxQ3ibOfUCIBy8ibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUE8OjDf44iczdGicMyoFhQ8m4yVDqpF6WWwruibVtr3QnHibND2da5FSoDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUA9iaCG2Jk9AgX5hNRdOSRAyAJFbcDaZmxyBhm0kxyK1cfvIcjxUSSaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUgBZI2Zj5KPUicosulh6auLeViamdyRibF2RFAU0icspicSVzodPyJzbAJBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUy0q5klxSqRFRHl0QNkjqHVrZicubIwyZkmKBFU8ulbJ4nQo7v6ulmyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUMIgy5egMRxWPBI1N16oibWuiaO6xuNpCGH6Jc6a2CrVibpoCeZ8kiaqOLQ/640?wx_fmt=png&from=appmsg)

**第5章  仿真与实验验证** 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUVeoHC6EIKShxLdzMoByRFbJZMuyKjOiaXe6Q3L4icLvOibXa5qItbPEJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUOl8cwoyNB4fl8xlAaic6weOtjxsiauztibZKsGYTzViakYTp21c8WwlcxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUK5RHdokWkaXhrE1PHnkdia1cKIQia0gENsxpNwQBHottpA1fjCapSqUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUIObpymibt9ylANv2B7Z175LyFVIJvsCxcyDZScDh5VndODyGXYNItLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUDYqmNInhO9biaUeK8FxEvgHr3CsruOxbWRHhd2u1lgFTiatdApuaia4CA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUmKYJ96xSGI5GRiauDhn1dQ0t3zE4hFMxE6qkic9aYMqniaRIrYzHBeeEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUoiawO0PUTGZVTakwWnLUwAjSKFND7qibDeOW321sPA9ItU3t0hvOENrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUicDtt5kjUIfTUgD0nUQUoMkSPgU2ibYqeXr5aZQ2Fu58TvUDlsKUKtfA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUZCfDetb9ZTzBFXa2VMk7Eu7juqZEia1mMMqZicFdSmA8JN24u1FWDbHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUdbtxboLxlcZgXyty37dkLPaVm92k1j3HcrWnJiaiclIzfYIBjntw6SXw/640?wx_fmt=png&from=appmsg)

**第6章  总结与展望** 

**6.1  研究总结** 

随着第三代宽禁带电力电子器件的发展，大容量、高工作频率、高可靠性的电力电子技术成为了未来的发展方向。考虑到高精尖工艺需求，感应加热领域同样需要研发超高频的感应加热电源。本文以设计基于全数字锁相环的超高频LLC 感应加热电源为目标，设计并制作了一台1kW的样机，并对实验结果进行了分析讨论，本文完成的主要工作如下： 

1、对经典电压、电流型拓扑与E类谐振拓扑进行分析及仿真比较，综合各种方案的优势和不足，结合研究的创新性与技术指标，最终选定了本文逆变器主电路拓扑：经典电压型逆变电路；同时考虑到超高频的控制较为复杂，精确度、 可靠性要求高，选择了直流侧调功方式。 

2、分析现有感应加热电源中IGBT与Si MOSFET适用的工作频率区间，并将SiC MOSFET与前两者特性进行比较，总结宽禁带半导体器件的优势与不足， 以及在未来超高频前景下的发展空间；分析对比LC谐振负载和LLC谐振负载特性，综合比较后选择LLC谐振回路，并根据谐振点电容电压与逆变器输出电 压的相位特性作为锁相条件；分析了经典电压型感应加热电源的工作过程和工作波形，理想情况下电压型感应加热电源工作在感性区间，通过二极管导通换流到MOSFET导通实现功率管ZVS开通，从而基本上忽略了开通损耗；分析两种电源系统扩容方式——并行控制和分时控制的原理，通过两种理论方式——开关过程分析和数据手册查询——比较不同控制下系统功能、功率管损耗等差异与不同。 

3、介绍了FPGA技术及其开发环境、实现语言Verilog等，利用ALTERA 公司的Cyclone IV系列中内置的全数字锁相环74HCT297芯片，配置相应的时钟和外围电路，实现基础的数字锁相功能；考虑到基础数字锁相范围有限，通过对输入信号频率采样计数的方式实现系统动态分频，以代替原有的固定N分频的模式；通过理论计算锁相范围和实验验证两种方式来体现改进后的数字锁相环的性能指标上的进步；介绍了通过FPGA实现分时控制信号时序的两种方法，一 种直观简洁，逻辑时序易实现，但是容易产生“毛刺”信号，因此从另一种角度切入提出最终使用的分时控制信号产生方法。 

4、介绍了驱动芯片的选型，以及光纤隔离的实现方法；考虑到光纤隔离引起的占空比畸变问题，通过延时电路与门电路组合的方式进行占空比补偿；介绍 了直流侧调功的斩波电路控制部分，斩波控制电路中包含了电路信号采样、pi调 节环、限压环、保护电路、开机软启动、温度保护等一系列功能环节；介绍了样 机设计方案，包括斩波主电路原理图、逆变电路部分的功率管、母线高频电容和 谐振电容的器件选型方案。 

5、为了避免经典电压型逆变器桥臂直通，上下管之间必须设置死区时间， 在超高频工况下死区的设置与源漏端电容容值、关断电流、源漏极间电压以及LLC负载角度四者均有联系，因此介绍了在一定工作状况下设置的合理死区时间的方法；介绍了特定电路指标下LLC负载设计方法；介绍了电源整机结构设计，主要给出了两种结构设计方法，一种是通过连线的方式直接简洁的实现电路连接，另一种则是改进后直接用铜排将正负桥臂“背靠背”连接，最终采用第二种连接方式以减小电路中的寄生电感从而减小寄生参数引起的一系列电路震荡问题。 

6、利用PSIM对并行控制和分时控制下的逆变电路进行仿真分析，观察谐振点处电路特性，与理论分析进行比较；展示了样机的外观与布局，结合样机的关键波形和数据，详细分析了样机性能，验证了本文研究的正确性。

**6.2  未来展望** 

本文设计并制作了一台1kW/1MHz 感应加热电源。本作者在研究过程中， 对感应加热电路特性与参数设计有了更深的理解，对于超高频领域出现的震荡、 EMI问题也有所认识，积累了丰富的电路调试经验，但碍于经验不足与条件限制， 本设计仍有待改善： 

1、本设计在全工作范围都采用某一确定的死区时间，实际上考虑到器件输 出电容随着Vds的变化而变化这一特性，最好能采用变死区的方式，使得电路在全范围都工作在更加合适的状态下。 

2、本文在实验方面对分时控制和并行控制的比较并不完全，下一步可以在较大功率的应用场合下进行更加显著的性能比较。 

3、尽管经典电压型逆变电路仍能工作在1MHz频率，但如果频率更加高频 化，功率管的输出电容、系统的寄生参数带来的震荡问题还有死区的设置问题将 非常困扰电路的正常工作，因此如果想要往更加高频化的方向发展，还是要通过E类谐振电路拓扑实现功率器件的ZVS开通与关断，避免过高的dv/dt对电路的干扰问题。 

4、全数字锁相环的实现较为简单，下一步可以对数字锁相功能加以改进完 善，实现更好的频率跟踪效果。 

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)