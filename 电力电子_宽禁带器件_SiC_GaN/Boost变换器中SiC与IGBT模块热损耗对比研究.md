# Boost变换器中SiC与IGBT模块热损耗对比研究


> 原文地址: [https://mp.weixin.qq.com/s/zWWXG-NYiKMLZeYQOavQmQ](https://mp.weixin.qq.com/s/zWWXG-NYiKMLZeYQOavQmQ)

**文章来源：**伍 丰1 ,2 ，张灵芝1 ,2 ，蒋逢灵1 ,2   (1.湖南铁路科技职业技术学院；2.湖南省高铁运行安全保障工程技术研究中心)

**摘 要：**针对Boost变换器中SiC(碳化硅)与IGBT模块热损耗问题，给出了Boost电路中功率模块热损耗的估算方法，并提供了具体的估算公式。以30kW DC/DC变换器为研究对象，对功率模块在不同工作频率下的损耗进行了理论计算、PLECS仿真和试验验证对比分析。PLECS仿真和试验验证的结果不仅证明了估算公式的正确性，还直观的体现了SiC和IGBT两类模块在不同开关频率下工作的热损耗趋势。从文中可以看出，使用SiC替 代IGBT可以显著地提高变换器的工作频率和功率密度。 

**关键词：**Boost变换器；SiC模块；IGBT模块；热损耗

**0  引言**

功率模块相对于小功率的分立器件,具有更大的体积和功率,因此常用于大功率电能变换器领域,在大功率DC/DC变换器行业,虽然Si IGBT模块仍然占据了统治地位,但随着碳化硅(SiC)模块技术和工艺的逐步成熟,SiC模块将会逐步替换原来的Si IGBT;原因在于 SiC模块具有宽禁带、耐高温、耐高压和低损耗的优点, 根据行业统计数据,SiC模块的关断损耗比Si IGBT减小88%,开通损害降低34%,单位面积的导通阻抗更小(硅IGBT的1/3~1/5),且具有更快开关速度(硅 IGBT的5~20倍),同时还具备高温工作能力(SiC器件 的电路可在500 ℃下稳定工作),SIC模块与其他主要类型功率器件参数对比表如表1所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIa0nMNXwgWLju4uCG90Y3tFIUB0oBWZt5cUtPMmlEIRRRl3NlK0FHhJQ/640?wx_fmt=png&from=appmsg)

从表1中的数据可以看出,SiC禁带宽度、击穿场强、热导率等性能都远强于Si IGBT。目前国际上大功率SiC模块生产厂家主要有科锐、罗姆、英飞凌、三菱 电机株式会社、意法半导体等,市场占有率最大的科锐 公司其量产模组中单管已经达到了1200 V/765 A。我 国也涌现出一批有实力的厂商,从芯片的设计、研发到制造和封装测试,正在形成一个完整的产业链,代表性的国产SiC功率器件生产厂家有：忱芯科技、中国中车、爱仕特、基本半导体有限公司等,其中忱芯科技最大功率SiC模组已经达到了1700 V/700 A,可以看出,目 前SiC单个模块的功率等级已经接近或者达到了IGBT 模块的功率等级,在大功率电能变换领域,SiC模块替 代IGBT模块成为了可能,因此对SiC与IGBT模块开展热损耗的对比研究很有现实意义。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVDzReCMyW2R2b731zTkho0uFn81Yl8TfQ3TJibDLHFJayJJiau1aknT6fGtFicy7icGvEicFzhLaHrAw/640?wx_fmt=png)针对SiC模块的应用研究,目前主要集中在动态性能、功率损耗计算和不同器件的对比分析,关于功率损耗计算方法的研究,文献给出了SiC的开关损耗模型和计算公式,但损耗的具体计算需要依赖器件的3D数据表,该数据表的获取存在难度；在SiC模块的性能参数对比研究方面,文献通过仿真的方式对 SiC与Si MOS进行了热损耗对比研究,但缺乏试验验证。本文在以上研究的基础上,对SiC和IGBT器件在 Boost变换器电路应用中的热损耗进行对比研究,力求提供具有实用价值的SiC和IGBT模块热损耗计算公式, 再将这两类模块的热损耗差异进行对比,直观的体现出 这两类模块的热损耗差异,最后进行仿真和试验验证。

**1  Boost变换器与热损耗估算**

**1.1 热损耗估算结果对比分析**

功率器件的热损耗主要分为导通损耗、开通损耗、 关断损耗和分布电容引起的附加损耗,其中主要损耗为 导通损耗、开通损耗、关断损耗和反向恢复损耗,以下 对这4种损耗的计算方法进行研究。

**1.2.1 导通损耗估算方法**

由于SiC和IGBT导通过程中存在压降,因此两种 器件均存在导通损耗,稳态时导通损耗可用式（1）计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIa5YDfhDnSrvjNmumZdGEJx9OPoynFQbLriaah0zhv4ZZOsOmTjCz6O7Q/640?wx_fmt=png&from=appmsg)

式中Econd代表导通过程中产生的热量；UccoT(vj)代 表结温为Tvj时功率器件的开启电压；rT(vj)代表结温为 Tvj时功率器件的等效电阻；IC为功率器件中的电流。Boost电路中,VT器件管和输出二极管VD均存在导通损耗。

根据Boost电路的工作规律,VT管在D∗T的时间 内导通,其中D为占空比,T为周期,VT管导通损耗功 率Econd.vt为： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIazPP2XWxHfVNQ6wmRWd9Riao6IY6eeUTjzj44IbBeGdZhdbXv9qtn09A/640?wx_fmt=png&from=appmsg)

**1.2.2 开通损耗估算方法**

开通损耗ton是指功率器件从关闭状态到导通的过渡过程中的电流上升到正常值的10%开始,到功率器件两端的电压下降到标称值的2%是结束,将这段持续的时间成为ton,在ton的持续时间内所消耗的能量为开通损耗功率Pon 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaBJcCElf8oibp9YfaNFmIaibxnlB0lzIPLicPTy02ab4WIPqg6wwXR66XA/640?wx_fmt=png&from=appmsg)

开通损耗平均功率Pon由下面的公式定义： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIa9D5bu9zOFDQTXnOMibY2NP2vPTNQats92SnG3V0Qia9hz2h331bZYMug/640?wx_fmt=png&from=appmsg)

由式（4）可知,Eon的大小与开关管中的电流和电压有 关,除此之外,还与功率器件的节温有关,在实际应用中,由于难以获得功率器件精确的数学模型,因此常用试验和估算的方法,根据器件手册提供的数据和曲线, 利用插值的方法,可以用式（5）估算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaHeJHEq5cgR9FAOLGkjW9sp3ia2pT83EVdzZeCRtSFKD1xzI66CMYZJQ/640?wx_fmt=png&from=appmsg)

（5）式中fsw为功率器件的开关频率,Eon (Inorm, Unorm,TVJ )为手册中在节温为TVJ时,在特定电流Inorm和电压Unorm下工作时给出的开通损耗,Iin和Uo为Boost电路的输入电流和输出电压,在Boost电路中,每个周期内VT存 在一次开通损耗。

**1.2.3 关断损耗估算方法**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaoHh9GWUEgNvOlsxYauT6s1a6fVVsuibkGpKJtxc2LQ8aGPO9XgljKFA/640?wx_fmt=png&from=appmsg)

关断损耗Poff是指功率器件从导通状态到关断的过渡过程中,功率器件两端电压上升到正常值的10%开始,到功率器件中的电流下降到标称值的2%时结束, 将这段时间成为toff,在toff的持续时间内所消耗的能量 可以用式（6）来计算。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaGWtiaKurXWxq7NyyhLiae2mAWJfhqpfz7blibdksEHkL5q0HAHtUmVN5g/640?wx_fmt=png&from=appmsg)

与开通损耗相类似,Eoff的大小与开关管中的电流、电压有关和节温有关,在实际应用中,同样难以获得功率器件精确的数学模型,因此常用采用试验和估算的方法,根据器件手册提供的数据和曲线,利用差值的方法, 可式（7）估算：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIafIW7S75kx7M4X2x72mXT9iaiaRfgffypAT6cDt3Rmiawk0D8HZOlyb1tA/640?wx_fmt=png&from=appmsg)

式中Eoff( Inorm ,Unorm,TVJ )为手册中在节温为TVJ时,在特定电流Inorm和电压U norm下工作时给出的通损耗,Iin和Uo为Boost电路的输入电流和输出电压,在Boost电路 中,每个周期内VT存在一次关断损耗。

**1.2.4 SIC和IGBT器件的总损耗估算结果对比**

如果不计分布电容、分布电感引起的附加损耗,则功率器件的总损耗功率为导通损耗Pcond、开通损耗Pon和关断损耗Poff三者之和。

 Pall=Pcond\=+Pon+Poff                          （8） 

通过器件手册可知,IGBT模块中二极管的开关损 耗主要为反向恢复损耗Prec,而SiC模块中的二极管损耗非常小,可以忽略不计。

为了便于计算和对方分析,以氢燃料汽车车中广泛使用30 kW DC\\DC变换器为研究对象,其主要参数如 表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIahRCzmcM1BiagJ8GAHJ67iaNLwGiaZIdhlz8VueWSpyUj8TfaNYPXLErNQ/640?wx_fmt=png&from=appmsg)

根据表2中的参数,功率器件使用IGBT作为功率模块时,选用英飞凌公司的FF200R12KE4器件,使用 SiC作为功率模块时,选用英飞凌的FF6MR12KM1功率器件,二者耐压等级均为1200V,FF200R12KE4最大连续直流电流为IC\=200A,FF6MR12KM1最大连 续直流电流为Id\=250 A；二者的最大节温均为175 ℃, 假定模块工作时实际节温为TVJ =125 ℃,使用功率模块的体二极管作为输出二极管,通过手册查出两种器件在节温125 ℃的参数如表3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaT5NUFkuVSDWCzLzYtVkvolZhz3DATW8EaA3canajPG3ulZlaTicMqiag/640?wx_fmt=png&from=appmsg)

通过Boost电路占空比计算公式可得额定点的占空比D≈0.5；为了直观的体现这两种器件热损耗的差异,编写Matlab脚本程序,计算DC\\DC变换器在fsw\=5kHz ~fsw\=50 kHz工作范围内,将上表中得数据带入相 应的计算公式,得到如下图所示的对比曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaagpefPicBT0USMyAWknprCOhFda0RHV2IVTBNxAXz1opwxiarl2WSVog/640?wx_fmt=png&from=appmsg)

**2  仿真结果对比分析**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIau0m4pNCiaycw91mNFgvE5iaiahCS73JV2e5icPL1QnkGFuCTBPdvEaqDBA/640?wx_fmt=png&from=appmsg)

以表2中DC\\DC工作参数为输入,建立以SiC(FF6MR12KM1)和IGBT(FF200R12KE4)模块为功率器件的两种仿真模型,通过PLECS软件对不同开关频率下功率器件的损耗和结温进行对比仿真, 从图4热损耗功率仿真对比图可以看出,频率在5 kHz及以下时,由于功率模块的损耗主要为导通损耗,因此SiC模块和IGBT模块的热损耗比较接近,但是工作开关随着频率的增加,IGBT模块的热损耗快速加大,SiC模块的热损耗缓慢增加,与此相对应,从图4的结温对比图可以看出, 随着频率的增加,IGBT模块的结温迅速增加,SiC模块的结温增长缓慢,说明这两类器件中,SiC器件替代IGBT模块,更有助于提供工作频率。

从图4的仿真值与理论计算值的对比图可以看出, 仿真值与计算值的计算结果比较接近,二者之间的差异在20%的范围以内,证明的了理论计算公式的正确性和准确性。

**3  试验验证**

**3.1 试验平台**

为了验证了前文热损耗估算和仿真结果的正确性, 分别使用SiC(FF6MR12KM1)和IGBT(FF200R12KE4) 两种模块在30 kW的试验平台上进行试验,试验平台有Boost升压变换器、直流可以电源、电阻负载四部分 组成。30 kW试验电源参数如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIasImsXJv5ukMhN8mho9D6kEPvL10yP93ibVyYmxts0pDhYzwcKoia5voQ/640?wx_fmt=png&from=appmsg)

**3.2 试验结果分析**

通道4为功率模块两端的电压,通道2为BOOST 变换器的输入电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIa7F83B6wLl7kmNeiaJfGJ1bRNp5NyFCfQtzp7kLpheUqoFPqBkaZn8Nw/640?wx_fmt=png&from=appmsg)

图6 工作波形图

通过测量功率模块的输入功率和输出功率计算模块在不同工作频率下的热损耗,当使用IGBT模块工作时, 分别测量工作频率为5、10和15 kHz时的热损耗,当使用SiC模块时,分别测量5、10、15、20和50 kHz 工作频率时的热损耗；将所测得的实际值连接成直线, 实际值、计算值和仿真值对比如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIanic9afciamTou6kWrwSBpo58IJ8N9libibhpLgSvK8PCoibsUTYX33IajDQ/640?wx_fmt=png&from=appmsg)

从图7可以看出,试验结果与仿真、理论估算的结果相吻合,工作频率较低时,试验值比估算值偏小,工作频率较高时,试验值比仿真偏大,造成这种现象的主要原因在于工作频率较低时,热损耗小,功率模块的节温低,随着频率的增加,热损耗逐渐增加,功率器件的 节温也不断升高,相同条件下,节温越高,损耗就越大, 而估算公式的计算没有考虑节温的变化。

**4  结束语**

本文首先介绍了SIC模块和IGBT两 种模块基本知识,在对Boost电路工作原理进行分析的基础上,进一步研究了 Boost电路中功率模块热损耗的计算方法, 并给出了具体的计算公式；以30 kW DC/ DC变换器为参数输入,对使用SIC和 IGBT两种模块作为功率器件,在不同工作频率下损耗进行理论计算、PLESE仿真和试验验证对比,理论计算、仿真和试验结果之间的差值在20%以内,证明了理论计算公式的正确性,通过两种模块在不同频率下的热损耗对比可以看出,SiC器件在高频下热损耗明显显著低于IGBT器件,从而可以大大提高DC\\DC变换器的功率效率和降低DC\\DC变换器的体积。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaibhpia73dc4OQp2NKoWV21kkw6YYCicibcC95Ut6xd04RtWQzBLicuBh2ww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslon6J3PovSdMm77GUMFUIaJgJ4VF7eB1yRibTcfYicdgBIqWGGb9zy8DgxbFUiaYotaTZOQfIt540mA/640?wx_fmt=png&from=appmsg)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmnY0snp6xiaCicPHktA3yrWbGYictwmIzgcp1kGaVmwCicNI8qJmp17tU7HlvMpNxFKYTvd2VtIibSCXA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)