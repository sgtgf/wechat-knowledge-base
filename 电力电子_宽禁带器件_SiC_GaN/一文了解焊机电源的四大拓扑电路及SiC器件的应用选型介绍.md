# 一文了解焊机电源的四大拓扑电路及SiC器件的应用选型介绍


> 原文地址: [https://mp.weixin.qq.com/s/2cNWmfBi2TGmKp7we3KZwA](https://mp.weixin.qq.com/s/2cNWmfBi2TGmKp7we3KZwA)

SiC MOSFET器件及碳化硅功率模块在工业电源中的应用前景非常广阔，主要得益于其卓越的高频开关能力、高耐压与高可靠性、高效率与低损耗和高温特性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwENiaHgCfLjlUIc1fbkiaNmcF0KlOeLIBGQugUZibArzdHDeHWmyENwtpPA/640?wx_fmt=jpeg&from=appmsg)

SiC MOSFET器件及碳化硅功率模块在工业电源中的应用可以显著提升电源系统的性能和效率，降低损耗和成本（产品小型化）。

本期就重点介绍下SiC MOSFET器件及碳化硅功率模块在焊机电源中的四大拓扑电路及SiC器件的应用选型介绍。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFDE6WEjpF1bfTXpKZjYCic5wQOJ6iaiaPcjmSXxDGOiaQeexK7Dp93KNdYQ/640?wx_fmt=png&from=appmsg)

焊机电源中的功率器件对比

早期焊机电源中的功率器件以硅基（MOSFET/IGBT)器件为主,传统IGBT逆变焊机正面临能效瓶颈、体积笨重与高温可靠性不足的严峻挑战。碳化硅（SiC）功率器件，以其**高频、高效、高结温**的革新性优势，正成为推动焊机产业向**绿色、智能、轻量化**转型的核心引擎。

传统IGBT焊机电源（20kHz级）能效多被限制在二级（≤86%），而SiC器件方案（70kHz以上）可轻松实现**一级能效（≥90.47%）**，日趋严格的能效法规正加速技术迭代。

以500A气保焊机（NBC-500SIC）为例：每月可节省电费约614元，设备增加的初始投资回收期**仅需60天**，长期使用成本优势显著。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEyZqDa0oUpp2qFaVqib2OK6p5Kib0ArAdKCEYyiaM2etFtU1ma1RNKjeIA/640?wx_fmt=png&from=appmsg)

碳化硅焊机与IGBT焊机性能及经济性对比  

碳化硅器件在焊机电源中的技术优势

1.动态性能跃升：SiC器件的高开关频率允许使用更小的滤波电抗，极大减小了主电路时间常数，使电弧更稳定、控制更精准，完美契合自动化焊接的严苛要求。

2.效率大幅提升：SiC器件极低的开关损耗与近乎零的反向恢复损耗，助力整机效率突破93%，相比IGBT方案（85%-90%），能耗显著降低。

3.体积重量锐减：高频化使磁性元件（变压器、电感）体积重量锐减约50%，结合更小的散热系统，焊机设计得以更紧凑、更便携。

4.高温可靠性革命：SiC器件结温可稳定运行于175°C，较IGBT极限提升25℃。配合Si3N4陶瓷基板与AMB（活性金属钎焊）工艺，模块热阻显著降低，无惧造船、桥梁等户外高温恶劣工况。

碳化硅器件在焊机电源中的四在拓扑电路及器件选型推荐

1.全桥逆变电路：

**拓扑特点：**4开关管H桥结构，功率密度高、控制精度好，广泛用于MIG/MAG焊、手工电弧焊等中大功率场合。

  

SiC器件核心价值：降低开关损耗，提升频率至70kHz以上，从而缩小变压器体积，同时将系统效率推升至93%以上。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrflMQC3xa2Feux3Kbq81bWtSic1Y7roiaZRWsHcPFW0clrxwaUh25roVHaMk76bPvWENeibd5tnbLPrQ/640?wx_fmt=other&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

爱仕特SiC器件选型推荐

2.半桥逆变电路：

**拓扑特点：**由2个开关管和2个分压电容构成，结构简化，成本更具优势，常见于输出功率＜300A的中小功率焊机。

  

SiC器件核心价值：在成本敏感型应用中，实现效率与价格的完美平衡，帮助客户打造高性价比的“爆款”机型。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEKT0xqsPWl6jdwsVXz0eJvpz7eyClETxshlkdpX4A3RaA1DqRCib42vQ/640?wx_fmt=png&from=appmsg)

爱仕特SiC器件选型推荐

3.推挽逆变电路：

**拓扑特点：**2个开关管交替导通驱动中心抽头变压器，变压器利用率高，但开关管承受的电压应力较大（通常为2倍Vin），适用于中等功率场合。

  

SiC器件核心价值：SiC器件的高耐压（≥1200V）特性天然契合推挽拓扑的高压应力需求，同时其高频优势能充分发挥变压器效率。

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrflMQC3xa2Feux3Kbq81bWtlffs2eFO6yicoJpaZygY9FqEJ6Jcs07rgNviaCygvkq2hwQGSEic3cncQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=6)

爱仕特SiC器件选型推荐

4.双管正激逆变电路：

**拓扑特点：两开关管串联同步通断，开关管电压应力低，无需复杂的磁复位电路，适用于成本敏感且需高可靠性的中小功率焊机。**

  

SiC核心价值：利用SiC的低导通损耗和高速开关，进一步提升本就高效的正激拓扑的功率密度和轻载效率。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrflMQC3xa2Feux3Kbq81bWtVB4cpiaicP4roWBEutzWYeMLp1qZYHC65FVxfpVVkc8WtyJ96m1v9ypg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=7)

爱仕特SiC器件选型推荐

应用焊机电源的碳化硅器件产品介绍

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrflMQC3xa2Feux3Kbq81bWthWB25j5hQmNVq5oPkFfzLM4RfrdTibEKefFNKL81ZgynFjc7NQxTrsA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=8)

爱仕特SiC器件推荐方案汇总

1\. 1200V的SiC SBD产品线

1200V的SBD的电流20A-100A，主要推荐TO247-2封装，封装有多种选择，可以采购裸芯片自主封装。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEVtYLQVYxQuatnVIOLnTtoPNrkrWwWJtPqAfR6ol0zgzQibw0Z8XR3MQ/640?wx_fmt=png&from=appmsg)

SiC SBD产品TO247-2封装及拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEwVfe5M5GvOStQg1cH1uF195lvicmUrZ8XcQBzicI7qMibYiag0VJIViajtg/640?wx_fmt=other&from=appmsg)

SiC SBD产品参数表：1200V20A

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEdicWOcczzjtUDFnGGKMvf6a0LCpqsxPqPOVhfWby9PtpYuxdib8d2iaZg/640?wx_fmt=png&from=appmsg)

SiC SBD产品参数表：1200V30A

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEZbjbLiaAOA2Sh28EH7UIVXO2YL9byM9UOY81YwCOUXqKWz8Me3mUbHg/640?wx_fmt=png&from=appmsg)

SiC SBD产品参数表：1200V100A

  

2\. 1200V的SiC MOSFET产品线

1200V的SiC MOSFET的电流20A-250A，主要推荐TO247-4封装，封装有TO24-3、TOLL、TO263-7、SOT227、DFN8\*8等多种选择，可以采购裸芯片自主封装。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwE2DaNOuQBu8oVVYzdbZEhic2jQelbgmC30rWyHbADlhVZfxiavlLwibdnw/640?wx_fmt=png&from=appmsg)

SiC MOSFET产品TO247-4封装及拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEocOpTEUOq9okBcnyL4TYQMuLuu51f0eZjicOkcqZowYYib6nSnrGURgw/640?wx_fmt=png&from=appmsg)

SiC MOSFET产品参数表：1200V32A

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwE3iaKib32bZnRVRXLMF3bRg0ic15ibds1bpN9AhXjjFwsYVfhMsHkf1iarxw/640?wx_fmt=png&from=appmsg)

SiC MOSFET产品参数表：1200V60A

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJF4XybFMvtfea9pywOXeNOeL6csia9zrKnwCNxxbpgQSOD7HsHPITTaBw/640?wx_fmt=png&from=appmsg)

SiC MOSFET产品参数表：1200V75A，驱动电压+15V兼容+18V

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmYC8TdHYZco8xxgfSseRwEFr5lc45AnEXSTyJRlIfL3BDbSIhYr9TLTLKA8ViciaVA8J3hICib3U3VA/640?wx_fmt=png&from=appmsg)

SiC MOSFET产品参数表：1200V115A

3\. 1200V的SiC 功率模块产品线

ME2（34mm）封装模块

34mm工业标准封装产品，具有更多灵活性和可靠性，主要应用于工业焊机、电机传动、UPS电源、高频开关、大功率变流器及脉冲电源等工业领域。

模块特点：

1\. 采用全焊片工艺，Cu底板+低热值AlN绝缘陶瓷；

2\. 高功率密度，低寄生电感，低开关损耗；

3\. 适用高温、高频应用；

4\. 参数表现：

                VDS：650~1700V

                   ID：30~300A

         RDS(on) ：4~80mΩ

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFRBOXu8QdibII85tJW6ocibvW1w1ZsTQKia335Fz2T8re7U2ZkqSibF8eYQ/640?wx_fmt=png&from=appmsg)

ME2模块产品封装及拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJF0uUsGfBtVNQgM5eoMgIib6R4MibXObcYUH9GRWgZHdWzoJQpxUO1uHYw/640?wx_fmt=png&from=appmsg)

ME2模块：1200V,90℃电流82A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFLibp63bNoABam0Yj5KKGOSoEfCCAbEIGichnWq4sjDfrHsfgiby0YsLzA/640?wx_fmt=png&from=appmsg)

ME2模块：1200V,90℃电流110A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFWMr5xV7WtyI3rJs87Bzg7PiaFibDibe8Hg6ROCib1PibFytIcFUnfZj0bgw/640?wx_fmt=png&from=appmsg)

ME2模块：1200V,90℃电流130A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJF3qSVbC5PVfQucgAZSAhbkMreicnEt9IaCZ4DmEBZzUq4Uw2DgialAbcQ/640?wx_fmt=png&from=appmsg)

ME2模块：1200V,90℃电流160A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFiabg6LiaqrvSl3CiaM6icQwp8nQoRH1dI116seKpoh10IchWN8WAT10AqA/640?wx_fmt=png&from=appmsg)

ME2模块：1200V200A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFWEBL2WRFdbj9kyLoeunvr1UUaia1Fcox5v4iaVYw06poHJB8zficBtjkg/640?wx_fmt=png&from=appmsg)

ME2模块：1200V300A参数表

MEP（Easy-2B)封装模块

Easy-2B (EasyPACK™ 2B) 是Easy封装家族中的重要成员，专为1200V等级的功率模块设计。Easy-2B 是 Easy 系列的升级版，针对工业级高功率应用优化。

模块特点：

1. 高功率密度，低寄生电感，低开关损耗；

2\. 适用高温、高频应用；

3\. 集成NTC温度传感器，易于系统集成；

4. 参数范围：

                  **V****DS****：650~1700V**

                    **I****D****：30~300A**

             **R****DS(on)** **：3.3~80mΩ**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFSkjzqiaiaCsdlhNSic6kZicRickABcNZ6EibK29hIMF7PjWt04BUA4ibdrpRA/640?wx_fmt=png&from=appmsg)

MEP模块产品封装及拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFiaDlVvCAMF1An8uQTtblO8aVMb0NOapjAxEicRYiclIslR6yzheQic4Mmg/640?wx_fmt=png&from=appmsg)

MEP模块：1200V,100℃电流130A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJF1KcjcX6L233AnOlNsANw6iaEl5WgyofPU22Ub80wBVRI9PgNxjPiawsg/640?wx_fmt=png&from=appmsg)

MEP模块：1200V,100℃电流160A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFsMVBfBTsrgEic0Rv6pyQa1TEINjodQQPyy3TLOlZXpYnlCksOPJ82WQ/640?wx_fmt=png&from=appmsg)

MEP模块：1200V,90℃电流210A参数表

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFo2rib6uOBxyTgQg4yeQ7BPNFFPnwf0JxIQjL2Hw5yzpalljE0vYZ0YA/640?wx_fmt=png&from=appmsg)

MEP模块：1200V300A参数表

碳化硅器件焊机电源典型应用场景

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslIv1ibB5ja5Rr1Zk7iaeTUJFUWFauUvlgMpDPriclaYGIIBwZkTtbibdYeeCIHGUgTjXWc1wxtY3gOXg/640?wx_fmt=jpeg&from=appmsg)

高端工业制造：航空航天、轨道交通、船舶制造等对质量和效率要求极高的领域。

自动化焊接生产线： 机器人焊接系统 、汽车制造焊接线、 要求一致性的大规模生产 。

野外 / 移动作业： 建筑桥梁施工、 石油管道焊接、 电力设施维护 。

精密焊接： 医疗器械制造、 电子元件焊接、 对热变形敏感的材料加工。 

总结与展望

SiC MOSFET 和碳化硅功率模块正在引领焊接电源行业的 "高效化、小型化、智能化"\*革命，不仅解决了传统 IGBT 焊机的能效瓶颈和体积难题，还提升了焊接质量与可靠性，创造了显著的经济价值。 

选择 SiC 技术的时机已经成熟：随着产能提升和成本下降，SiC 焊机正从高端应用向普及型市场渗透。对追求高效、节能、稳定的现代焊接企业而言，SiC 技术已从 "可选项" 变为 "必选项"。  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ILnqiaiabsaGgdiaUxSazXzMI3qcrW6Wy7U4cZ7ibKDkiccZ1fvUicDz2N9RQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIvDuHqMqw4NzkBLww55AokZ79ddHOF2VV3K8L19g4mVAcYVyBqNrYJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIeJibUoHo0j34QnibONuR7PBvtN4bQKpbxC3Qz8GwYpdtMF3AU6zibghcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmsdJ1LI4oLFsEpmskhICDIPb5XNpOqLdKiaHtibOic2VBC3WV34acRiaVe8Je0EnHroDlNh0cEC9EM7g/640?wx_fmt=png&from=appmsg)