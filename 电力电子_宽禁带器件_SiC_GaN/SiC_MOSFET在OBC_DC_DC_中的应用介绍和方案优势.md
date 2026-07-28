# SiC MOSFET在OBC+DC/DC 中的应用介绍和方案优势


> 原文地址: [https://mp.weixin.qq.com/s/sffQjsNWKGvmtUEVGk4l1g](https://mp.weixin.qq.com/s/sffQjsNWKGvmtUEVGk4l1g)

新能源汽车动力域高压化、小型化、轻型化是大势所趋。更高的电池电压如800V系统要求功率器件具有更高的耐压小型化要求功率拓扑具有更高的开关频率。碳化硅（SiC）作为第三代半导体代表，具有高频率、高效率、小体积等优点，更适合车载充电机OBC、直流变换器 DC/DC、电机控制器等应用场景高频驱动和高压化的技术发展趋势。

**一. OBC DC/DC 中SiC MOSFET 应用场景**

**1. OBC DC/DC 常见功率级架构**

车载充电机OBC和高压直流变换器DC/DC组合为常见的动力总成组合形式，两者可以共享机械外壳和冷却系统，提高功率密度，优化成本。  

OBC通常分为PFC 和DC/DC两级。PFC级为并网的AC/DC变换器，将输入的单相或三相交流电变换为直流母线电压。受电网基础设置分布的影响，在中国单相交流电桩更为普遍，而在国外其它区域如欧洲，三相交流充电在逐渐成为主流。对于单相交流输入的PFC，其输出直流母线电压通常为400-600V，而对于三相输入的PFC，其输出直流母线电压通常为700-1000V。由于单级PFC输出的直流电流有比较大的低频波动，所以典型的OBC系统在PFC级后还有会DC/DC变换器级，其输出给车载高压动力电池供电。对于常见的400V或800V电池系统，OBC输出电压通常为230-450V与450-900V。  

由于车载用电设备大部分为低压供电，所以动力域还需直流DC/DC变换器将高压动力电池的能量变化为低压，为12V 负载系统及12V电池供电。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicn5HiaEn0ac7ibFAVQnibTtib1RBjD9T7dousCqqcjBZC2bjFL1pv8w9iaicQ/640?wx_fmt=jpeg&from=appmsg)

图1.    OBC DC/DC常见功率级架构

**2 . 400V 电压平台 OBC DC/DC 系统中SiC MOSFET应用场景**  

目前新能源汽车动力域高压化是大势所趋，但受电池成本高昂等因素影响，目前400V 依然是业界主流选择的动力电池电压等级。下面将分别介绍在400V电压平台下，单相和三相OBC系统中SiC MOSFET的使用场景。  

**2-1  400V 单相OBC 系统中SiC MOSFET应用场景**  

在400V 单相交流输入的OBC DC/DC 系统中，不论是PFC输出的直流母线电压还是OBC整体输出的电池电压，其波动范围都在Si硅基MOSEFT可以承受的电压范围之内。然而，随着对系统功率密度要求的逐步提升，传统二极管整流桥Boost PFC电路不能再满足效率和散热的要求，无桥PFC如图腾柱PFC在逐步成为业界主流。在图腾柱PFC拓扑中，可以利用碳化硅SiC MOSFET高频开关、反向恢复低和导通电阻小的优势，大大提升系统效率和功率密度，如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicibnxrtr5H5skGibJCjFJCC8nQB298o6kQqlDfD4UKlFWMWhgHsZTGrxw/640?wx_fmt=png&from=appmsg)

                图2.    400V系统单相图腾柱PFC拓扑中SiC MOSFET应用场景

图腾柱PFC通常由快桥臂和慢桥臂组成，快桥臂由SiC MOSFET构成，通常开关频率可高达100kHz。慢桥臂开关频率为工频，即45-65Hz。对于单向OBC而言，慢桥臂可使用二极管。对于双向OBC，即需要高压电池反向向电网或负载馈电的场景下，慢桥臂需要使用Si MOSFET或Si IGBT以支持能量的反向传输。为了进一步减小纹波和前级滤波器的体积，也可采用两相快桥臂交错并联的方式。图3和图4以双向OBC为例，示意了SiC MOSFET在图腾柱和交错并联图腾柱电路中的用法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicTkhB9sicpIaz2oQPW0wUqo6ZfUia0nccZHcm3I9XDdXwTicra1bUYiagYA/640?wx_fmt=png&from=appmsg)

                             图 3. 图腾柱PFC SiC MOSFET快管应用场景

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicIO7juQtzohARrH2zAL4GA40xrc1zZK8lcRAc1HEFibicNgia0esqyf74Q/640?wx_fmt=png&from=appmsg)

                           图4. 交错并联图腾柱PFC SiC MOSFET快管应用场景  

**2-2  400V 三相OBC系统中SiC MOSFET应用场景**

对于三相交流输入的OBC系统，其PFC输出的母线电压通常可能高达900V。在这种情况下，考虑到高耐压与高效率的要求，通常选用SiC MOSFET而非Si IGBT作为开关管。OBC的PFC及与DCDC级的原边侧都需使用SiC MOSFET，如图5所示。图6展示了以400V电压平台，11kW双向OBC为例的系统中SiC MOSFET的使用位置。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicDMVibfJFsPiaqkC4B4n9JhBxoR6s5JEyARl49BNgyS9DfpdjXTQK04RQ/640?wx_fmt=png&from=appmsg)

                图5. 400V 三相OBC DC/DC 系统中SiC MOSFET 应用场景  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicxpuzxicOg95dzmYzwvd3ndYfGnDumV8dHbUlhuJGXFiacsqXJkDXmQ4Q/640?wx_fmt=png&from=appmsg)  

                 图6. 400V 三相11kW双向OBC中SiC MOSFET应用场景  

3**.   800V 电压平台 OBC DC/DC 系统中SiC MOSFET应用场景**  

在相同充电电流情况下，电池电压从400V升级到800V后充电速率可以加倍。为了满足大功率快充，动力域也需要持续向高压化演进。当动力电池电压平台升级到800V，OBC及DC/DC电源产品都需要从400V等级提升到800V 电压等级平台。此时不论是单相或三相系统，OBC 的两级和高压转低压 DC/DC高压侧的开关管都需要使用更高耐压的SiC MOSFET器件以满足系统电压等级的要求下，如图7所示。图8以800V电压平台下三相OBC及移相全桥DC/DC拓扑为例，说明了系统中SiC MOSFET的使用位置。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicJk8tyib6M1zvlM6PScO5wcExiaeEEibpY0OUGdric9DMicRlFL13H5iaDa2g/640?wx_fmt=png&from=appmsg)

                            图7. 800V OBC DC/DC SiC MOSFET 应用场景  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicxQGaZGlMYxsVANAtIjFScyVehrwiaicQVOibKRcG50ziaTt3eUydjib7sIg/640?wx_fmt=png&from=appmsg)

              图 8. 800V 三相OBC 及移相全桥DCDC SiC MOSFET 应用位置  

**二. SiC MOSFET应用特点**  

**1.  SiC MOSFET应用特点**

SiC MOSFET在OBC DC/DC 系统中的应用场景多为高电压和高开关速率的场合，因而在开关时的dVds/dt比普通Si MOSFET显著增加。以桥式电路为例，在上管快速开通、下管关断时，下管的Vds会升高，此时电荷通过米勒电容Cgd转移至下管门极，会造成门级电压出现一个小的尖峰。根据厂家和沟道技术的不同，SiC MOSFET的阈值电压一般为2V至5V。如果在这一过程中串扰造成的电压抬升幅度超过了SiC MOSFET开通的阈值电压，可能会造成下桥臂的误开通，从而导致上下桥臂直通，造成系统短路损坏等严重后果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicunaFDfMY5QV4xBZRHBo7OpcuOoVhR9BF5wZicbGcMEcSOiaM1kUUDwPw/640?wx_fmt=png&from=appmsg)

                                  图9. 高dv/dt造成SiC MOSFET误开通

**2\. SiC MOSFET的优点**

碳化硅SiC因其独特的高临界电场、高电子漂移速度、高温和高导热性组合，而成为大功率OBC的首选器件，在晶体管级别上，SiC具备低导通电阻和低开关损耗，使其成为大电流高压应用的理想选择。

除了SiC，大功率设计中的有源器件还有另外两种选择，包括硅Si MOSFET和IGBT，对于图腾柱PFC中的高功率应用，Si MOSFET二极管的反向恢复，导致连续导通模式下高功率损耗，因此其使用仅限于非连续模式操作和低功率应用。

相比之下，SiC MOSFET允许图腾柱PFC在连续导通模式下运行，以实现高效率、低EMI和更高的功率密度。

**3.   SiC MOSFET驱动选型要点**  

**3-1 负压驱动**

为了规避开关过程中产生的桥臂直通风险，通常SiC MOSFET需要使用正负压驱动，即通过负压关断确保关断过程中即使出现小的电压尖峰，也不会超过阈值电压致使MOSFET开通，如下图10所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicbiandzRYL83De1uqSicTLEa7xBy06iadozmByUkdawkgXPdNgtpWQQWKQ/640?wx_fmt=png&from=appmsg)

                                    图10. SiC MOSFET负压驱动防止误开通  

**3-2 米勒钳位**

另一种常见的防止SiC MOSFET误开通的方式是搭建米勒钳位电路或使用具有米勒钳位功能的芯片，如TI的单通道隔离驱动芯片UCC5350-Q12等。

如图11所示，米勒钳位功能主要通过采样栅极的电压并与阈值电压相比较，当栅极电压低于阈值电压后比较器反转，使得内置的米勒钳位MOSFET导通，形成一条低导通阻抗的路径。这条低阻抗路径可以将SiC MOSFET栅极有力关断，从而避免误导通。

                ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcic2PyCR0uhhiawrQ70iaBNELBXxcUhH8sqvN7Das4EjkdNicxjrXzcxznVA/640?wx_fmt=png&from=appmsg)

                图11. 内置米勒钳位功能的驱动芯片防止MOSFET误开通

设计米勒钳位电路也需要注意驱动芯片需要尽量靠近开关管。如果布板不够优化，米勒钳位回路过大，可能会由于走线上寄生参数的影响，使得低阻抗路径不够有效，反而会增大栅极震荡。  

**3-3 欠压保护点UVLO**  

SiC MOSFET具有高功率密度的特性， 一般会使用较高的驱动电压以使得MOSFET完全开通，从而得到最小的导通电阻，最低的导通损耗和最大的电流输送能力。驱动芯片的欠压保护点UVLO决定了开关管可以正常工作时最小的驱动电压3。如上述2.2.1小节所属，为了防止SiC MOSFET的误开通，SiC MOSFET驱动一般会使用负电压供电。此时需要注意，对于大部分无单独COM脚的驱动芯片来说，芯片的UVLO通常参考的是芯片VEE/VSS 脚。

**4\. SiC MOSFET驱动供电方案**

**4-1    自举供电电路**

SiC MOSFET驱动芯片一般需要足够的正向驱动电压，以保证MOSFET完全开通，同时也需要负压进行有效关断，防止串扰。如果使用传统的自举通电的方式，由于自举供电电压建立需要时间，可能会存在前几个周期开通关断电压不足。

**4-2    基于双路低边驱动芯片的隔离供电方案  
**

为了避免此类问题，可采用隔离供电的方式给SiC MOSFET驱动供电， 常见的方式有全桥谐振电路等。业界主流方式为用双路低边驱动如TI 的UCC27524-Q17 的两路输出直接驱动变压器实现隔离供电，如下图12所示。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicXggCuwmPSLzzeQAlurBBGPA1IUjPlqMciaUxTFrqibl2HQQwBibjly63g/640?wx_fmt=png&from=appmsg)

                                  图12. 使用双路低边驱动构建隔离供电电路  

**四.  OBC+**DC/DC转换器模块**的方案和应用优势**  

电动汽车车载充电机（OBC）根据功率水平和功能采取多种形式，充电功率从微型电动汽车应用中的2KW，到高端电动汽车中的22KW不等。通常车载充电机是单向的，但近年来，双向充电越来越受关注，本文将讨论碳化硅（SiC）在中功率6.6KW和高功率11~22KW双向车载充电机中的优势。

随着纯电动汽车市场份额的不断增加，动力电池的装机容量也在增加，消费者还要求为大容量电池提供更快的充电时间，这种需求也促使电池的工作电压从400V增加到800V。拥有足够电池容量的电动汽车将有可能充当储能系统，实现各种车到其他用电设备的供电场景，比如车辆到家庭、车辆到电网和车辆到车辆充电等，因此OBC正在从单向拓扑向双向拓扑转变，电动汽车未来采用双向OBC是一种普遍趋势。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oECiaFBMoDhC6zKDvN8icY64lYJjv7nibpsW4SAzcCM4DMZicF4hytIRSQJQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

双向OBC使用案例

电动汽车车载充电机设计需要高功率密度和高转换效率，以充分利用有限可用的整车空间并最小化体积和重量。双向OBC前端是由一个双向AC-DC转换器组成，通常是一个功率因数校正PFC电路或有源前端AFE电路，后端则是一个隔离型的双向DC-DC转换器。

**1\. PFC或AFE模块**

在输入端，传统的PFC升压转换器是使用最广泛的单向拓扑，但它不支持双向操作，而图腾柱PFC不仅支持双向操作，还可以通过消除桥式整流器级来提高效率，将传导路径中的半导体器件数量从三个减少到两个。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oEtuPuwRNYvCjY4E5d3FAS3uicuzna6t19SicmtaPaRDLYHJAWoH3OldTA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

从传统升压拓扑(a)更改为图腾柱PFC(b)

图腾柱PFC包含两个以上不同频率工作的半桥，高频桥臂进行升压和整流，以提高频率切换，低频桥臂主要对输入电压进行整流，在50-60Hz的频率下切换。

**2\. DC/DC转换器模块**

单向车载充电机中的DC/DC转换器通常是LLC谐振转换器，但这是一种单向拓扑，在反向工作模式下，转换器的电压增益受到限制，从而降低了其性能。因此，图3中的双向CLLC谐振转换汽车更适合双向OBC的DC/DC级，它在充电和放电模式下都具备高效率和宽电压范围。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oEjicITS3JiaCc8m6Cf9cF2vP2jbPV9PSbDOsIkeiaoj3GBVxQMh0PqAegA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

双向CLLC DCDC转换器

在电动汽车车载充电机应用中，CLLC谐振转换器采用软开关来提高效率，初级侧采用零电压开通（ZVS），次级侧采用ZVS+ZCS相结合。

**3\. 中功率6.6KW双向OBC架构**  

  

中功率双向OBC通常采用单相120V或240V输入和400Vdc母线运行，拓扑前级是单相图腾柱PFC，后级是CLLC DC/DC转换器，如图4所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oEbl1LX7uEia6ibBRCRE8TLlWicaqN3EPO2HickyKEOUIiaQUJvqrahvuHVicQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  使用SiC和图腾柱PFC的高效OBC架构

对于6.6KW双向OBC，PFC中可采用两个60mΩ MOSFET并联或用一个25mΩ MOSFET，DCDC中可采用一个60mΩ或一个45mΩ MOSFET，下表总结了这种双向OBC设计的器件选择。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oE0oZKFMTTxbibWGtERtJ0geNzO2IwFibCm5jGrBggdjuzjtKice0Nia7ePA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

表1：3.3KW和6.6KW双向OBC的MOSFET选择

**4\. 高功率11KW或22KW双向OBC设计**

在11KW或22KW等更高功率水平下，电池电压可以是400V或800V，目前市场正朝着800V高压平台发展，图5显示了高功率三相双向OBC的系统框图，该设计可兼容400V或800V电池。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oEDkVNZaPZMPnj7soBcAfGFqxDrkibEJm6qZruNibeAMSZrRAWmUtcdQJA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

高功率三相双向OBC系统框图

11KW双向OBC设计可以将75mΩ 1200V MOSFET用于PFC和CLLC转换器的初级侧，在次级侧，800V电池应用使用与初级相同的75mΩ MOSFET，40mΩ 1200V MOSFET可用于高性能应用，对于400V电池应用，可以选择四个650V 25mΩ MOSFET作为次级侧。

22KW的设计与11KW双向OBC的设计相似，但更高的功率输出需要更低的RDS（on）器件，可用一个32mΩ 1200V MOSFET用于PFC和DCDC的初级侧，同样次级侧既可以将相同的初级侧器件用于800V母线应用。表2总结了三相大功率OBC设计的器件选择。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oEicNzTg07dY9MiaibjjLFzLXoRooDiakKtocznGI43lYqEnFF9YGSCaYpeg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

表2：11KW和22KW双向OBC的MOSFET选择

在许多欧洲家庭中，三相电源很容易获得，但典型的美国家庭、亚洲和南美家庭只有标准的单相240V，这种情况下，大功率22KW双向OBC需同时兼容单相和三相输入，设计人员可以对单相输入使用交错技术，把第四条桥臂添加到传统的三相PFC中。

下图显示了一个交错式图腾柱PFC，它具有三个高频桥臂和第四个低频桥臂，每个高频桥臂通过32mΩ 1200V SiC MOSFET提供6.6KW的功率，低频桥臂可以使用两个Si或IGBT来降低成本，当三相可用时，该电路可以自动重新配置为三相工作，使第四条桥臂悬空不用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/13fmc0Cqe9OqRA7Ro1GvM3v18nLyl8oExnvBqwuJicb7x9Xj25jHxrmtESLUg6VwgSQv8AjJV3Hz5iaQB5b9gWIA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

用于22KW单相OBC设计的交错式图腾柱PFC

在双向OBC中，基于SiC的解决方案在成本、尺寸、重量、功率密度和效率等相关方面，都优于基于Si的解决方案。

例如，22KW双向OBC基于SiC的解决方案需要14个功率器件和14个栅极驱动器，基于Si的设计需要22个功率器件和22个栅极驱动器。在比较性能时，SiC设计实现了97%的效率和3KW/L的功率密度，而Si设计效率为95%和2KW/L的功率密度。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/13fmc0Cqe9NFbxOjZIomgtibpNsL2cL7fE2BYZboKq4rdf46zmEDIev0NBhceHmQ6D4JerhKZJuzfZIYEcLucPQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

迪龙22KW双向OBC

车载充电机是电动汽车必要的装机部件，通过采用具有低导通电阻、低输出电容和低源极电感的SiC器件，完美融合了低开关损耗和低导通损耗，提高了OBC产品的功率密度和转换效率，拥有更高的开关频率，减少了组件数量，以及减少了电感、电容、滤波器和变压器等组件的尺寸，降低了OBC的成本。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcicv0KVe9rjyg4unrsJqjoqVZfVXia8OAwndX3Fd6S6KYUMxHiczazpFYKg/640?wx_fmt=png&from=appmsg)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnBjhBNgLsicia0xic9KGxorcic2yePUorC39PEJoyYdGGQial8nd1bmhRGjAbpssDL3pIFpvjLtrqVkWg/640?wx_fmt=png&from=appmsg)