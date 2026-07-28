# SiC MOSFET器件在新能源电动压缩机中的应用


> 原文地址: [https://mp.weixin.qq.com/s/Gi9fSiDxsMWmO85n75zyaA](https://mp.weixin.qq.com/s/Gi9fSiDxsMWmO85n75zyaA)

新能源汽车的崛起带动了空调压缩机技术的转型。传统驱动轮被取消，取而代之的是驱动电机和独立控制模块的引入。车载空调压缩机普遍采用三相永磁同步电机，这种电机体积小、重量轻、效率高，是新能源汽车的理想选择。

随着新能源汽车从400V电压平台到800V、1000V电压平台升级，基于SiC MOSFET器件的方案在新能源汽车上优势明显。

**1.电动压缩机介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/G82XNUOiaHrdlOEZdejsVtTEL7TdPD6X37E45f0ynty9p06Dl6akJ0CZDiaju36CKlv6Z2RuWgTI443nrwCgmEuQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲电动汽车空调压缩机内部结构图

电动压缩机是汽车空调的一部分，它通过将制冷剂压缩成高温高压的气体，再流经冷凝器，节流阀和蒸发器换热，实现车内外的冷热交换。传统燃油车以发动机为动力，通过皮带带动压缩机转动。而新能源汽车脱离了发动机，以电池为动力，通过逆变电路驱动无刷直流电机，从而带动压缩机转动，实现空调的冷热交换功能。

电动压缩机是电动汽车热管理的核心部件，除了可以提高车厢内的环境舒适度（制冷，制热）以外，对电驱动系统的温度控制发挥着重要作用，对电池的使用寿命、充电速度和续航里程都至关重要。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1K1v3gibYATTFicNGhY7xK37GfNf7Xviawty7jiagoukv3lJ2HTDT0C1UjA/640?wx_fmt=png&from=appmsg)

▲电动压缩机是电动汽车热管理的核心部件

电动压缩机需要满足不断增加的需求，包括低成本、更小尺寸、更少振动和噪声、更高功率级别和更高能效。这些需求离不开压缩机驱动电路的设计和优秀器件的选型。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1icdibhMCylhlOq8xKULnLxur0gamwzkWROyWpyBgItqwGSXllTV9SY8Q/640?wx_fmt=jpeg)

▲电动空调压缩机示意图

电动压缩机是由逆变器、电机和压缩机构成。逆变器使通过高压电池的直流电转换成交流电（三相），输送到电机，驱动电机运转。压缩机为涡旋型，与电机直接连接，电机直接控制压缩机运转而逆变器和电机在运转时会产生高温，因此压缩机采用了通过吸入的冷媒进行冷却降温的构造。

**2\. SiC MOSFET器件的优势**

SiC MOSFET器件以其高频特性优化了空调压缩机的设计，使得外围器件得以小型化，减轻了系统重量。其卓越的高温稳定性，确保了空调压缩机在多变环境下的可靠性。特别在轻载状态下，SiC MOSFET器件的单极性导通特性和低反向恢复损耗显著降低了开关损耗，这一点对于频繁轻载运行的空调压缩机尤为重要。

  

通过采用SiC MOSFET，空调压缩机在提高轻载效率的同时，减少了能量损耗，增强了整体能效。这不仅提升了电动汽车的续航里程，还降低了运行成本，并显著提升了乘坐的舒适度。

  

（1）SiC MOSEFT材料的优势

@10倍于Si器件电介质击穿场强：更小的晶圆厚度和Rsp，更小的热阻  

@3倍以上的热导率：更小的热阻和更快的电子传输速度  

@2倍多的电子饱和速度：更快的开关速度  

@更好的热特性：更高的温度范围

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1XpQuoyF4q5zmEYb1FJeWEUY9vPn5WUucVt8bZZOvX3916WmmH58AXQ/640?wx_fmt=jpeg&from=appmsg)

（2）更小损耗及更高效率

以400V电压平台和800V电压平台，测试IGBT和SiC MOSFET器件做对比测试，SiC MOSFET器件的导通损耗和开关损耗优势显著。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/qo7HKGYbxCg0hTNCrTyXKgYYvx1qoHpVZxVPjsHKS8AiaibFs63H829232RiahibTiaUAEVLm8dVIAdFVN95kiaYnbiaQ/640?wx_fmt=png&from=appmsg&wxfrom=13)

▲400V电压平台IGBT方案和SiC MOSFET方案功率器件损耗对比

![](https://mmbiz.qpic.cn/sz_mmbiz_png/qo7HKGYbxCg0hTNCrTyXKgYYvx1qoHpVy6Uzuq7cic7VEjlquIjE42MSWR2hziccwrT3KzLuDjJRxq92SIMUdruA/640?wx_fmt=png&from=appmsg&wxfrom=13)

▲800V电压平台IGBT方案和SiC MOSFET方案功率器件损耗对比

使用相近电流规格的IGBT和SiC MOSEFT做了效率仿真，在最大功率下，SiC也可以有效提高系统效率，尤其在高频应用中更加明显。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrdlOEZdejsVtTEL7TdPD6X3AfbNbLQ4FrIh5LzUjLVheic4Qk7p48Mm8dXlqNFVxDibRhdMOo952JGQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲碳化硅基与硅基控制器效率对比

（3）适用于高频应用

SiC MOSEFT是单极性器件，没有拖尾电流，开关速度比IGBT快很多。这也是SiC MOSEFT比IGBT更适用于更高频率应用的原因。而更高的驱动频率（比如20kHz或以上），可以有效减小电机的噪音，提高电机系统的响应速度和动态抗干扰能力。另外，更高的频率也会减少输出电流的谐波失真，并能有效降低电机中线圈的损耗，进而提高压缩机的整体效率。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1tkEFmvpn8v8OnPficMFrWicicHsLr6wmVHq9VrjRgRBnXjmbWdv7wxWWg/640?wx_fmt=jpeg&from=appmsg)

（4）减少死区时间  

在电机应用中，为了使开关管工作可靠，避免由于关断延迟效应造成上下桥臂直通，需要设置死区时间tdead，也就是上下桥臂同时关断时间。由于SiC MOSEFT的开关时间短，实际应用中，可以使用更小的死区时间，以改善死区大，输出波形失真大，驱动器输出效率低的问题。

随着电动汽车技术的不断进步，SiC MOSFET预计将在车载空调系统中扮演更加关键的角色，为行业带来更高效、更可靠的解决方案。因此，在可预见的时间内，SiC MOSFET器件成本的持续降本空间极大，相对于IGBT也更加明显。

****3.电压压缩机SiC MOSFET应用案例****

2022年，美的工业技术旗下威灵汽车部件率先推出全球首款量产的800V碳化硅12000rpm高转速电动压缩机。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/mdOmUIXCgUwYb7A5LsAlkCsEpaDFiaIsmLZarGn7yNBHhTJ1W2leUibeDJW9dnACqrEcN1kcK8D0kpViaZbwsRnPA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

▲美的威灵汽车部件800V碳化硅12000rpm高转速电动压缩机

这款产品采用业内领先的超高绝缘耐压技术、交叠分块电机专利技术、电磁场优化及SiC碳化硅压缩机电控方案，具备高可靠、超强劲冷热、静音以及轻量化等优势。使整车充电效率更高、节省布置空间和电能消耗，这将使“里程焦虑”问题得到很大改善。

麦米电气旗下麦谷科技也推出“宽温域高效热泵电动压缩机”，涵盖34cc、47cc排量以及400V/800V电压平台。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/qo7HKGYbxCg0hTNCrTyXKgYYvx1qoHpV9NWykt3a87XzN0IhjMcm73UlzrhlAuvgDmp6BJJLo2wpBVcd9PBgFw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲麦谷科技宽温域高效热泵电动压缩机

海立新能源也推出800V超低温热泵电动压缩机。

![](https://mmbiz.qpic.cn/mmbiz_jpg/BQMnFTm9BbD79IHOOULlicNh5Sx54FOLc7iaHdibeA8WQLEFlm1Z0Mz2RGkwWOU3qmt68cZDbcIR2v6dMwLhbQiaNw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

▲ETH45 45cc电动压缩机

新款空调压缩机排量为45cc，产品最高电压可达到850V，完全适用于800V的使用需求。转速范围600-10000转，在限定负荷下最大转速可以达到12000转。

**3\. SiC MOSFET器件产品介绍**

SiC MOSFET器件在电动压缩机方案，有SiC MOSFET单管和三相全桥模块。以下是适用于800V平台电动压缩机的产品型号。

@SiC MOSFET单管

在电动压缩机上，选用电压1200V，内阻30毫欧-45毫欧-80毫欧的产品较多。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmq7KmsVDS5OCjT5mVxasZ1MDkkSFkhCzuYFBMyYreAMcmyZQiaHngEsJzlDC5yScXR7s0yMqX1FGQ/640?wx_fmt=png&from=appmsg)

▲SiC MOSFET产品表

@SiC MOSFET三相全桥模块

碳化硅功率模块在空调压缩机中的应用具有较小的反向传输电容Crss，带来较低的关断损耗Eoff，在车载空调压缩机方案中尤为突出。与传统硅基材料相比，SiC MOSFET在高电压平台下具有更低的导通和开关损耗，尤其适合800V及以上的高压应用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHreCDDL6x4Oia8UquMNEPwZY5ib93Fb5BUmVTRMjbzvncnbvg8oPYuX9yu1Sx16EeWLgT9Y9kpR1VVzg/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲耐压1200V、导通电阻80mΩ、可支持30A电流的D21系列碳化硅功率模块，产品型号为：ASC30N1200D21，尺寸为42\*23\*6mm

D21碳化硅模块模块利用其三相全桥拓扑结构，按照一定的规律轮流加上占空比脉冲调制控制电压，将直流高压电流高效地转换为三相正弦交流电流，为电机提供平稳的电流和足够的转矩，确保电机平稳运转的同时产生足够的转矩来驱动压缩机。  

功率模块优势：

**高性能封装技术**

**·** 采用高导热性AlN陶瓷基板，内置NTC，实现高效散热

**高开关速度**

**·** 碳化硅材料的高电子迁移率，提升系统响应速度和动态性能

**高功率密度**

**·** 搭载第三代自研碳化硅芯片，实现小尺寸下的大电流承受能力

**低寄生电感设计**

**·** 紧凑内部布局，降低功率回路中的寄生电感

  

**高抗干扰能力**

**·** 具有开尔文源极引脚，能够进一步降低器件的开关损耗，提高模块的抗干扰能力

  

**高温稳定性**

**·** 宽温度范围下（-55°C至175°C）的稳定运行，适应各种环境条件

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrdlOEZdejsVtTEL7TdPD6X3WzBkEsKEmrEK3luyslPbpxMiaIPicDxkc8YfLNCnZwqfefT5vYw4p0mw/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲1200V/80mΩ D21系列碳化硅功率模块参数

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrdlOEZdejsVtTEL7TdPD6X3oJlPdumgHzpILYFkX8sAejZUS9L2AROicbZ7xfb1ljibibr1fZPcy2k8w/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲1200V/80mΩ D21系列碳化硅功率模块电路拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/G82XNUOiaHrdlOEZdejsVtTEL7TdPD6X3WWHo1fCJTT7LaS6eMXp4x9a1hdyPiaZ32cSuA9ssADCtEjms4IK8FCw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

▲1200V/80mΩ D21系列碳化硅功率模块引脚图

D21系统碳化硅模块与IGBT的比较优势

**提升系统能效**

**·** 在800V电压平台上，利用高频优势，D21系列模块的轻载损耗远低于传统IGBT，提升系统效率

**拓宽运行边界**

**·** 强化低转速控制能力，提升压缩机的运行稳定性

**助力小型化**

**·** 小尺寸的模块设计，助力空调压缩机系统实现紧凑化

**适应极端工况**

**·** 高温和超低温环境下的稳定工作能力，确保电动汽车在极端气候中的性能稳定

**提高制冷效率**

**·** 降低控制器和电机损耗，提升空调系统制冷效率

**总结：**针对纯电动汽车，尤其是针对800V电压平台，电动空调压缩机控制器的首选方案将是SiC MOSFET方案，这也加快了电动汽车空调压缩机设计创新。具体来看，在全系800V高压平台下，电动压缩机部件采用SiC技术，可以更好地解决高压、高转速所带来的开关损耗瓶颈，进而减小压缩机体积和重量、降低压缩机的噪音、最大程度降低能耗。可见，电动压缩机的800V SiC时代，已然到来。

文章来源：爱仕特，芯TIP，安森美

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)