# SiC MOSFET和Si MOSFET、IGBT的差异与应用


> 原文地址: [https://mp.weixin.qq.com/s/Cp24MIxLJ88gpRCNfb-52w](https://mp.weixin.qq.com/s/Cp24MIxLJ88gpRCNfb-52w)

       碳化硅（Sic）器件具有更宽的禁带宽度、更高的击穿电场、更高的热导率、更高的电子饱和速率、更高的抗辐射能力……特性。产品通过工业级、车规级可靠性测试，应用于太阳能逆变电源、新能源电动汽车及充电桩、智能电网、高频电焊、轨道交通、工业控制特种电源、国防军工等领域。其具有高速开关和低导通电阻的特性，即使在高温条件下也能体现优异的电气特性，大幅降低开关损耗，使元器件更小型化及轻量化，效能更高效，提高系统整体可靠性。可使电动汽车在续航里程提升10%，整车重量降低5%左右，并实现设计用充电桩的高温环境下安全、稳定运行。![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VD0ZYpvlK3Giav6LgBcQEWZwBPE9RriaJqmCiadONx7xgOrDWG9rO3cjdog/640?wx_fmt=png)

      **********一、**SiC-MOSFET的特征************

      通过与Si功率元器件的比较，来表示SiC-MOSFET的耐压范围。目前SiC-MOSFET有用的范围是耐压600V以上、特别是1kV以上。关于优势，现将1k以上的产品与当前主流的Si-IGBT来比较一下看看。相对于IGBT，SiC-MOSFET降低了开关关断时的损耗，实现了高频率工作，有助于应用的小型化。相对于同等耐压的SJ-MOSFET（超级结MOSFET），导通电阻较小，可减少相同导通电阻的芯片面积，并显著降低恢复损耗。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VD0KqfuzKYQibaX1QQYFbWL3hhqhzAmm0UBTKWn8nWHhu6k2UDJE8Uutg/640?wx_fmt=jpeg)下表是600V～2000V耐压的功率元器件的特征汇总。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDsibTQcoCvoHR1bdOhGicTToHNiaavXEfpzt0UeEwCeXribfPvVFuwCy1KQ/640?wx_fmt=jpeg)

雷达图的RonA为单位面积的导通电阻（表示传导时损耗的参数），BV为元器件耐压，Err为恢复损耗，Eoff为关断开关的损耗。SiC已经很完美，在目前情况的比较中绝非高估。

**********二、**功率晶体管的结构与特征比较************  

下图是各功率晶体管的结构、耐压、导通电阻、开关速度的比较。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDEq4G6qpaN6B3ocpgrzbZVZiaqQSbgKmdNwmHlHDRq6sMEAjgyKDwmDw/640?wx_fmt=jpeg)

使用的工艺技术不同结构也不同，因而电气特征也不同。DMOS是平面型的MOSFET，是常见的结构。Si的功率MOSFET，因其高耐压且可降低导通电阻，近年来超级结（Super Junction）结构的MOSFET（以下简称“SJ-MOSFET”）应用越来越广泛。

在特征方面，Si-DMOS存在导通电阻方面的问题，如前所述通过采用SJ-MOSFET结构来改善导通电阻。IGBT在导通电阻和耐压方面表现优异，但存在开关速度方面的问题。SiC-DMOS在耐压、导通电阻、开关速度方面表现都很优异，而且在高温条件下的工作也表现良好，可以说是具有极大优势的开关元件。

这张图是各晶体管标准化的导通电阻和耐压图表。从图中可以看出，理论上SiC-DMOS的耐压能力更高，可制作低导通电阻的晶体管。目前SiC-DMOS的特性现状是用椭圆围起来的范围。通过未来的发展，性能有望进一步提升。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDR2K7z9GrMqQJpPc57G7kYjqk01TBq98XEhraiatcZm5yL11OBVdFpxA/640?wx_fmt=jpeg)

************三、****SiC-MOSFET与Si-MOSFET的区别****************  

尚未使用过SiC-MOSFET的人，与其详细研究每个参数，不如先弄清楚驱动方法与Si-MOSFET的区别。

> **与Si-MOSFET的区别：驱动电压**

SiC-MOSFET与Si-MOSFET相比，由于漂移层电阻低，通道电阻高，因此具有驱动电压即栅极－源极间电压Vgs越高导通电阻越低的特性。下图表示SiC-MOSFET的导通电阻与Vgs的关系。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDkvqDfrsqJLwReLV091UO6ICxfRTJ1icicuW7IwdPPXiaqicSjwWLsBe2qQ/640?wx_fmt=jpeg)

导通电阻从Vgs为20V左右开始变化（下降）逐渐减少，接近最小值。一般的IGBT和Si-MOSFET的驱动电压为Vgs=10～15V，而SiC-MOSFET建议在Vgs=18V前后驱动，以充分获得低导通电阻。也就是说，两者的区别之一是驱动电压要比Si-MOSFET高。与Si-MOSFET进行替换时，还需要探讨栅极驱动器电路。

> **与Si-MOSFET的区别：内部栅极电阻**

SiC-MOSFET元件本身（芯片）的内部栅极电阻Rg依赖于栅电极材料的薄层电阻和芯片尺寸。如果是相同设计，则与芯片尺寸成反比，芯片越小栅极电阻越高。同等能力下，SiC-MOSFET的芯片尺寸比Si元器件的小，因此栅极电容小，但内部栅极电阻增大。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDu8X4VZc0vbXu97YurwkFgJ4CEngd6Kt6GXD9G6b3JVIdKubhvLJjgw/640?wx_fmt=jpeg)

这不仅局限于SiC-MOSFET，MOSFET的开关时间依赖于外置栅极电阻和上面介绍的内部栅极电阻合在一起的综合栅极电阻值。SiC-MOSFET的内部栅极电阻比Si-MOSFET大，因此要想实现高速开关，需要使外置栅极电阻尽量小，小到几Ω左右。

但是，外置栅极电阻还承担着对抗施加于栅极的浪涌的任务，因此必须注意与浪涌保护之间的良好平衡。

> **与IGBT的区别**

**与IGBT的区别：Vd-Id特性**

Vd-Id特性是晶体管最基本的特性之一。下面是25℃和150℃时的Vd-Id特性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDsYozYomJ6xxCxe00Yc84k2V8n9biblpiaqFgkWWjn6czjWHbzjI94icFg/640?wx_fmt=jpeg)

看25℃时的特性图表。SiC及Si MOSFET的Id相对Vd（Vds）呈线性增加，但由于IGBT有上升电压，因此在低电流范围MOSFET元器件的Vds更低（对于IGBT来说是集电极电流、集电极-发射极间电压）。不言而喻，Vd-Id特性也是导通电阻特性。根据欧姆定律，相对Id，Vd越低导通电阻越小，特性曲线的斜率越陡，导通电阻越低。

IGBT的低Vd（或低Id）范围（在本例中是Vd到1V左右的范围），在IGBT中是可忽略不计的范围。这在高电压大电流应用中不会构成问题，但当用电设备的电力需求从低功率到高功率范围较宽时，低功率范围的效率并不高。

相比之下，SiC MOSFET可在更宽的范围内保持低导通电阻。

此外，可以看到，与150℃时的Si MOSFET特性相比，SiC、Si-MOSFET的特性曲线斜率均放缓，因而导通电阻增加。但是，SiC-MOSFET在25℃时的变动很小，在25℃环境下特性相近的产品，差距变大，温度增高时SiC MOSFET的导通电阻变化较小。

**与IGBT的区别：关断损耗特性**

前面多次提到过，SiC功率元器件的开关特性优异，可处理大功率并高速开关。在此具体就与IGBT开关损耗特性的区别进行说明。

众所周知，当IGBT的开关OFF时，会流过元器件结构引起的尾（tail）电流，因此开关损耗增加是IGBT的基本特性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDpnznNprAyJA15c9pficpzCRDjEIdZpXibbhPYMgNbwT6RjtwcibJibBUBg/640?wx_fmt=jpeg)

比较开关OFF时的波形可以看到，SiC-MOSFET原理上不流过尾电流，因此相应的开关损耗非常小。在本例中，SiC-MOSFET＋SBD（肖特基势垒二极管）的组合与IGBT＋FRD（快速恢复二极管）的关断损耗Eoff相比，降低了88%。

还有重要的一点是IGBT的尾电流随温度升高而增加。顺便提一下，SiC-MOSFET的高速驱动需要适当调整外置的栅极电阻Rg。这在前文“与Si-MOSFET的区别”中也提到过。

**与IGBT的区别：导通损耗特性**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDYx6a88xJvZmNVp55lmBibcRPovDv1xLYU33O41cbTZ3c4DeWDAUz7QQ/640?wx_fmt=jpeg)

IGBT在开关导通时，流过Ic（蓝色曲线）用红色虚线圈起来部分的电流。这多半是二极管的恢复电流带来的，是开关导通时的一大损耗。请记住：在并联使用SiC-SBC时，加上恢复特性的快速性，MOSFET开关导通时的损耗减少；FRD成对时的开关导通损耗与IGBT的尾电流一样随温度升高而增加。

总之，关于开关损耗特性可以明确的是：SiC-MOSFET优于IGBT。

这里提供的数据是在ROHM试验环境下的结果。驱动电路等条件不同，结果也可能不同。

************四、****体二极管的特性****************

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDeK4ctYoBWFpzIDiaT9erEvsvtNxAsayibN5VibJrUVicLJFv4ZTZKnASIw/640?wx_fmt=jpeg)

如图所示，MOSFET（不局限于SiC-MOSFET）在漏极-源极间存在体二极管。从MOSFET的结构上讲，体二极管是由源极-漏极间的pn结形成的，也被称为“寄生二极管”或“内部二极管”。对于MOSFET来说，体二极管的性能是重要的参数之一，在应用中使用时，其性能发挥着至关重要的作用。

**********************五、******************SiC-MOSFET体二极管的正向特性********  

下图表示SiC-MOSFET的Vds-Id特性。在SiC-MOSFET中，以源极为基准向漏极施加负电压，体二极管为正向偏置状态。该图中Vgs＝0V的绿色曲线基本上表示体二极管的Vf特性。Vgs为0V即MOSFET在关断状态下，没有通道电流，因此该条件下的Vd-Id特性可以说是体二极管的Vf-If特性。

在给栅极-源极间施加18V电压、SiC-MOSFET导通的条件下，电阻更小的通道部分（而非体二极管部分）流过的电流占支配低位。为方便从结构角度理解各种状态，下面还给出了MOSFET的截面图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDOp1C253v53InZFK6PDRRot9Gs5m3j6tWjaicDUFqpvVk3Xx44Ubslww/640?wx_fmt=jpeg)

**********************六、****************SiC-MOSFET体二极管的反向恢复特性**************

MOSFET体二极管的另一个重要特性是反向恢复时间（trr）。trr是二极管开关特性相关的重要参数。MOSFET的体二极管是具有pn结的二极管，因而存在反向恢复现象，其特性表现为反向恢复时间（trr）。下面是1000V耐压的Si-MOSFET和SiC-MOSFET 的trr特性比较。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDAyD89v9uZp3QUB9IGXtnicrgrzljV7TVp9ahRicyLXib3pcGI6PmLtx6A/640?wx_fmt=jpeg)

如图所示，示例的Si-MOSFET的trr较慢，流过较大的Irr。而SiC-MOSFET 的体二极管速度则非常快。trr、Irr均为几乎可忽略的水平，恢复损耗Err已经大幅降低。

******************七、************SiC-MOSFET的应用实例**********

介绍部分SiC-MOSFET的应用实例。其中也包括一些以前的信息和原型级别的内容，总之希望通过这些介绍能帮助大家认识采用SiC-MOSFET的好处以及可实现的新功能。另外，除了SiC-MOSFET，还可以从这里了解SiC-SBD、全SiC模块的应用实例。

> **SiC-MOSFET应用实例1：移相DC/DC转换器**

下面是演示机，是与功率Power Assist Technology Ltd.联合制作的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDj035dFZa927ZBFqLbiawEKaqVXqFl6faxf5OTCeFlYeNVYhlKCnenvQ/640?wx_fmt=jpeg)

全桥式逆变器部分使用了3种晶体管（Si IGBT、第二代SiC-MOSFET、上一章介绍的第三代沟槽结构SiC-MOSFET），组成相同尺寸的移相DCDC转换器，就是用来比较各产品效率的演示机。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDZiby78QTzVEYJbUgyBicmtwdNaTKmuMYNyyyE0uBFNZY6LJqccv6UDCg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDXWkiaLq9bSK2I9VndTNrbVicFucNbzN7EsuOxiaQCWHOJHbOUCGqpQAzA/640?wx_fmt=jpeg)

首先，在SiC-MOSFET的组成中，发挥了开关性能的优势实现了Si IGBT很难实现的100kHz高频工作和功率提升。另外，第二代（2G）SiC-MOSFET中，由2个晶体管并联组成了1个开关，但由于第三代（3G）SiC-MOSFET导通电阻更低，晶体管数得以从8个减少到4个。关于效率，采用第三代（3G）SiC-MOSFET时的结果最理想，无论哪种SiC-MOSFET的效率均超过Si IGBT。

> **SiC-MOSFET应用实例2：脉冲电源**

脉冲电源是在短时间内瞬时供电的系统，应用例有气体激光器、加速器、X射线、等离子电源等。作为现有的解决方案有晶闸管等真空管和Si开关，但市场需要更高耐压更高速的开关。针对这种市场需求，利用SiC的高耐压和高速性能，实现了超高电压高速开关。从高速性的角度看这是Si IGBT很难实现的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VD0vxxdNAiaIfzyicjpQwNiapZVu6AdPkrsGIsvUxUemfodWBERx5iczQE9Q/640?wx_fmt=jpeg)

超高压脉冲电源：

特征:(1)超高耐压为N通道 SiC MOSFET;(2)低导通电阻（以往产品的1/100以下）;(3)高重复频率。

应用案例：(1)荷电粒子加速器；(2)医疗用设备电源；(3)等离子发生器。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDlP5UVvYIIica39XnXjKusFlHLdJsg3P27jx9XCRgbonjMm7VaichamnQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDuEdodxt9aS4jNz1qZT65X0z8VBk6UDhR9OFmUUEIzyemaGE7ibB8zeA/640?wx_fmt=jpeg)

1～10kV随机脉冲发生器：13.2kV SiC开关

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmibGDTkQSz6ajGeLLicot0VDAy71IT4hqqlGH8qV1XX1z0TTl68dGPehaqv41HriczcIyTaGRdnnYFw/640?wx_fmt=jpeg)

  

‌SiC MOSFET与Si MOSFET和IGBT的应用差异主要体现在耐压、导通电阻、开关速度、耐高温性能、工作频率等方面。‌

 ‌耐压和导通电阻‌：SiC MOSFET的耐压范围通常在600V以上，特别是1kV以上，具有较小的导通电阻，这有助于减少相同导通电阻的芯片面积，从而降低成本。相比之下，Si MOSFET和IGBT的耐压和导通电阻各有特点，但SiC MOSFET在耐压和导通电阻方面显示出明显优势‌。

 ‌开关速度‌：SiC MOSFET的开关速度远高于Si MOSFET和IGBT，这使得SiC MOSFET能够处理大功率并实现高速开关，有助于应用的小型化。此外，SiC MOSFET的开关损耗也比IGBT小得多，能够在更高的频率下运行‌。

 ‌耐高温性能‌：SiC MOSFET能够在更高的温度下稳定工作，其芯片结温可达300度，这使得它在高温环境下具有更高的可靠性和稳定性。相比之下，Si MOSFET和IGBT虽然也能在高温下工作，但SiC MOSFET的耐高温性能更为突出‌。

 ‌工作频率‌：SiC MOSFET的工作频率远高于传统的MOSFET和IGBT，这有助于减小电源系统中电容以及电感或变压器的体积，降低电源成本，实现电源的小型化和美观化。这一特性使得SiC MOSFET特别适用于高频应用场景‌。

综上所述，SiC MOSFET在耐压、导通电阻、开关速度、耐高温性能和工作频率方面相较于Si MOSFET和IGBT具有显著优势，这使得SiC MOSFET在需要高性能、高频率、高耐压和高温度稳定性的应用中成为优选‌。

‌**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)