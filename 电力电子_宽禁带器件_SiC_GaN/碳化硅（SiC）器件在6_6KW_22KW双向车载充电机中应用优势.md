# 碳化硅（SiC）器件在6.6KW-22KW双向车载充电机中应用优势


> 原文地址: [https://mp.weixin.qq.com/s/Ttu2nWtfYrGHEKhjgLrLuw](https://mp.weixin.qq.com/s/Ttu2nWtfYrGHEKhjgLrLuw)

**摘要：**碳化硅器件在OBC车载充电机中的应用显著提升了充电效率和功率密度，‌对提升新能源汽车的续航里程和充电时间具有积极意义。‌

‌随着新能源汽车行业的发展与进步，‌提升新能源汽车续航里程成为了行业发展的主要任务之一。‌在动力电池能量密度不能持续增加的情况下，‌降低车用部件重量是提升续航里程的首选方案。‌碳化硅功率器件替代传统硅器件，‌对OBC功率密度提升和重量降低有着显著的效果。‌使用碳化硅功率器件的OBC相比使用传统硅基功率半导体的OBC，‌在效率和功率密度上已经达到瓶颈，‌继续使用硅基半导体已无法较大幅度提升OBC的效率和功率密度。‌而碳化硅功率器件具有高频高效的特点，‌在OBC上使用碳化硅功率器件对于提升OBC的效率和功率密度有较大帮助。‌

此外，‌碳化硅器件的应用还涉及到OBC的设计形式，‌包括双向OBC的设计。‌双向OBC的前端通常是由一个双向AC-DC转换器组成，‌后端则是一个隔离型的双向DC-DC转换器。‌在电动汽车车载充电机应用中，‌CLLC谐振转换器采用软开关来提高效率，‌初级侧采用零电压开通（‌ZVS）‌，‌次级侧采用ZVS+ZCS相结合，‌以适应充电和放电模式下的高效率和宽电压范围需求。‌

![](https://mmbiz.qpic.cn/mmbiz_png/9icc3uiciakaywaSsgWt8rHBAMO5LgT3ria1TTrQU4m8jKnVJP9h7Pjr7ArQrtw4ZWUYP7QicOCvlveVmbSicD6FUS4g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

综上所述，‌碳化硅器件在OBC车载充电机中的应用不仅提升了充电效率和功率密度，‌还推动了OBC向更高效、‌更轻便的方向发展，‌对提升新能源汽车的整体性能和用户体验具有重要意义。

![](https://mmbiz.qpic.cn/mmbiz_png/9icc3uiciakaywaSsgWt8rHBAMO5LgT3ria1keETLa3egKjKtUG9FvicU1OsNn1lIicyUDBHg0acQjJRwDexuZOOGibHQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

电动汽车车载充电机（On Board Charger，OBC）可以根据功率水平和功能采取多种形式，充电功率从微型电动汽车应用中的2KW，到高端电动汽车中的22KW不等。  

通常车载充电机是单向的，但近年来，双向充电越来越受关注，本文将讨论碳化硅（SiC）在中功率6.6KW和高功率11~22KW双向车载充电机中的优势。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRak5DgVFHbCElic585fMBqVS7GuES3ANQ95ouial270ibz8qgXnj4DMJYA/640?wx_fmt=jpeg&from=appmsg)

随着纯电动汽车市场份额的不断增加，动力电池的装机容量也在增加，消费者还要求为大容量电池提供更快的充电时间，这种需求也促使电池的工作电压从400V增加到800V。  

拥有足够电池容量的电动汽车将有可能充当储能系统，实现各种车到其他用电设备的供电场景，比如车辆到家庭、车辆到电网和车辆到车辆充电等，因此OBC正在从单向拓扑向双向拓扑转变，电动汽车未来采用双向OBC是一种普遍趋势。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNReRNAOxMvA5tcj2lEz9cAgbJTgiaSmmy1845rmhgn9UjXUtKF1bq68aA/640?wx_fmt=png&from=appmsg)图1：双向OBC使用案例

电动汽车车载充电机设计需要高功率密度和高转换效率，以充分利用有限可用的整车空间并最小化体积和重量。双向OBC前端是由一个双向AC-DC转换器组成，通常是一个功率因数校正PFC电路或有源前端AFE电路，后端则是一个隔离型的双向DC-DC转换器。

**01\. PFC或AFE模块**  

在输入端，传统的PFC升压转换器是使用最广泛的单向拓扑，但它不支持双向操作，而图腾柱PFC不仅支持双向操作，还可以通过消除桥式整流器级来提高效率，将传导路径中的半导体器件数量从三个减少到两个。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRuOibsjYxubObMaCKxpeorVt12qSK7EQ4KhxOxAQnxXYhFWgQl4fx5OQ/640?wx_fmt=png&from=appmsg)

图2：从升压拓扑(a)更改为图腾柱PFC(b)  

图腾柱PFC包含两个以上不同频率工作的半桥，高频桥臂进行升压和整流，以提高频率切换，低频桥臂主要对输入电压进行整流，在50-60Hz的频率下切换。

**02\. DC/DC转换器模块**  

单向车载充电机中的DC/DC转换器通常是LLC谐振转换器，但这是一种单向拓扑，在反向工作模式下，转换器的电压增益受到限制，从而降低了其性能。因此，图3中的双向CLLC谐振转换汽车更适合双向OBC的DC/DC级，它在充电和放电模式下都具备高效率和宽电压范围。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNR8HPBGrs0bpvI4jcvaKkCRRVbxqq7qcmLsB89QAiaDZicztgK6t4iaibIrA/640?wx_fmt=jpeg&from=appmsg)图3：双向CLLC DCDC转换器  

在电动汽车车载充电机应用中，CLLC谐振转换器采用软开关来提高效率，初级侧采用零电压开通（ZVS），次级侧采用ZVS+ZCS相结合。

**03\. SiC的优点**

碳化硅SiC因其独特的高临界电场、高电子漂移速度、高温和高导热性组合，而成为大功率OBC的首选器件，在晶体管级别上，SiC具备低导通电阻和低开关损耗，使其成为大电流高压应用的理想选择。  

除了SiC，大功率设计中的有源器件还有另外两种选择，包括硅Si MOSFET和IGBT，对于图腾柱PFC中的高功率应用，Si MOSFET二极管的反向恢复，导致连续导通模式下高功率损耗，因此其使用仅限于非连续模式操作和低功率应用。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRG8CdRDhPMCH5plzAtibzpvbb2uB3OILicJn9nXeval2icicEdmKTHalziaA/640?wx_fmt=png&from=appmsg)

相比之下，SiC MOSFET允许图腾柱PFC在连续导通模式下运行，以实现高效率、低EMI和更高的功率密度。  

**04\. 中功率6.6KW双向OBC架构**  

中功率双向OBC通常采用单相120V或240V输入和400Vdc母线运行，拓扑前级是单相图腾柱PFC，后级是CLLC DC/DC转换器，如图4所示。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRg43GuYDsbEyVyxTpMQmuib3XibLQYXdsRviby0OK7FWpHWqECmzcFUNibA/640?wx_fmt=png&from=appmsg)图4：使用SiC和图腾柱PFC的高效OBC架构

对于6.6KW双向OBC，PFC中可采用两个60mΩ MOSFET并联或用一个25mΩ MOSFET，DCDC中可采用一个60mΩ或一个45mΩ MOSFET，下表总结了这种双向OBC设计的器件选择。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRJ1vgDxEJ5pPmrCj6TrqTJuWuamnRibRGagmyzfNhPHxyk4BAPLeWQ4A/640?wx_fmt=jpeg&from=appmsg)表1：3.3KW和6.6KW双向OBC的MOSFET选择

**05\. 高功率11KW或22KW双向OBC设计**

在11KW或22KW等更高功率水平下，电池电压可以是400V或800V，目前市场正朝着800V高压平台发展，图5显示了高功率三相双向OBC的系统框图，该设计可兼容400V或800V电池。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNR26JY8S9GU3AZicbIhshsXuIh6CDJrwbBRpmImDjIrria2rSIppmHabCg/640?wx_fmt=png&from=appmsg)图5：高功率三相双向OBC系统框图

11KW双向OBC设计可以将75mΩ 1200V MOSFET用于PFC和CLLC转换器的初级侧，在次级侧，800V电池应用使用与初级相同的75mΩ MOSFET，40mΩ 1200V MOSFET可用于高性能应用，对于400V电池应用，可以选择四个650V 25mΩ MOSFET作为次级侧。

22KW的设计与11KW双向OBC的设计相似，但更高的功率输出需要更低的RDS（on）器件，可用一个32mΩ 1200V MOSFET用于PFC和DCDC的初级侧，同样次级侧既可以将相同的初级侧器件用于800V母线应用。表2总结了三相大功率OBC设计的器件选择。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRowicyT47djse2Lia8Wf3lHVoP6MCN27saiaJ0ugaibiasmBgccrkmJC6X9w/640?wx_fmt=jpeg&from=appmsg)表2：11KW和22KW双向OBC的MOSFET选择

在许多欧洲家庭中，三相电源很容易获得，但典型的美国家庭、亚洲和南美家庭只有标准的单相240V，这种情况下，大功率22KW双向OBC需同时兼容单相和三相输入，设计人员可以对单相输入使用交错技术，把第四条桥臂添加到传统的三相PFC中。

图6显示了一个交错式图腾柱PFC，它具有三个高频桥臂和第四个低频桥臂，每个高频桥臂通过32mΩ 1200V SiC MOSFET提供6.6KW的功率，低频桥臂可以使用两个Si或IGBT来降低成本，当三相可用时，该电路可以自动重新配置为三相工作，使第四条桥臂悬空不用。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRZNjcCJj1b12qs64YCEJCIevdyfzZlzJ8ZhB5SgqSDYagUyymXib0stw/640?wx_fmt=png&from=appmsg)图6:22KW单相OBC设计的交错式图腾柱PFC  

在双向OBC中，基于SiC的解决方案在成本、尺寸、重量、功率密度和效率等相关方面，都优于基于Si的解决方案。

例如，22KW双向OBC基于SiC的解决方案需要14个功率器件和14个栅极驱动器，基于Si的设计需要22个功率器件和22个栅极驱动器。在比较性能时，SiC设计实现了97%的效率和3KW/L的功率密度，而Si设计效率为95%和2KW/L的功率密度。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsllZj1MB4Fxc4dqcY7P5ibNRsO3fSxoMNyZXEZjzRQVE1pMV19qwUUChDwOkISjjkPS9afGrhjqNRw/640?wx_fmt=jpeg)

图7：迪龙22KW双向OBC

车载充电机是电动汽车必要的装机部件，迪龙新能源科技河北有限公司通过采用具有低导通电阻、低输出电容和低源极电感的SiC器件，完美融合了低开关损耗和低导通损耗，提高了公司OBC产品的功率密度和转换效率，拥有更高的开关频率，减少了组件数量，以及减少了电感、电容、滤波器和变压器等组件的尺寸，降低了OBC的成本。

文章来源：迪龙电源

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)