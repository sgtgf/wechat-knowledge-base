# SiC MOSFET与SiC SBD的区别


> 原文地址: [https://mp.weixin.qq.com/s/Fnzt2TXk3uWtRkXdGlqqRQ](https://mp.weixin.qq.com/s/Fnzt2TXk3uWtRkXdGlqqRQ)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslNHvHo75DPTpCBcG1KGdZmptFOKaJot8ibdTEMWft82rDhT7Tzg25ZsKehkHC4jolSGTU2siauBK5Q/640?wx_fmt=png&from=appmsg)

SiC MOSFET（碳化硅金属氧化物半导体场效应晶体管）和SiC SBD（碳化硅肖特基势垒二极管）是两种基于碳化硅（SiC）材料的功率半导体器件，它们在电力电子领域具有广泛的应用。尽管它们都属于SiC功率器件，但在工作原理、特性、应用及优缺点等方面存在显著的差异。以下是对SiC MOSFET和SiC SBD之间区别的详细分析。

### 一、工作原理

#### SiC MOSFET

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmPjgO7E6E0bH0zZfxn3t69LkrPzxC0kUFjyWPcVOUa5EfOmxGpo9s0kcmZW9Wc6iaSHUruF93bMhw/640?wx_fmt=png&from=appmsg)

SiC MOSFET是一种场效应晶体管，其工作原理类似于传统的硅基MOSFET，但具有更高的性能。在SiC MOSFET中，栅极（Gate）用于控制器件的导通与关断。当栅极施加正电压时，栅极与通道之间形成电场，使得通道中的载流子（电子或空穴）移动，从而在源极（Source）和漏极（Drain）之间形成导电路径。通过调节栅极电压，可以控制通道中的载流子浓度，进而控制MOSFET的导通程度。

SiC SBD

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslNHvHo75DPTpCBcG1KGdZmVpOqJNXasnw6PyBvicH02MQtyCreX4L68QWiaFQDZiaMYndXEOojLNekA/640?wx_fmt=png&from=appmsg)

SiC SBD则是一种利用肖特基势垒效应的整流二极管。它的工作原理基于金属与碳化硅半导体之间形成的肖特基结。当施加正向偏压时，电子从半导体流向金属，形成正向电流；当施加反向偏压时，肖特基势垒阻止电子流动，形成反向截止状态。SiC SBD具有快速恢复特性和低反向漏电流，适用于高频和高效率的应用场景。

### 二、特性对比

#### 1\. 耐压能力

-   SiC MOSFET ：具有较高的击穿电压，能够在高电压环境下稳定工作。其耐压能力取决于漂移层的厚度和掺杂浓度，通常可达数千伏。
    
-   SiC SBD ：同样具有高耐压特性，但相对于SiC MOSFET来说，其耐压范围可能略小一些。不过，SiC SBD的耐压能力仍然远超过传统的硅基二极管。
    

#### 2\. 导通电阻

-   SiC MOSFET ：具有较低的导通电阻，这得益于SiC材料的高载流子迁移率和低电阻率。低导通电阻意味着在导通状态下，器件的功耗更低，效率更高。
    
-   SiC SBD ：虽然其导通压降也相对较低，但相比于SiC MOSFET来说，其导通电阻可能稍高一些。不过，在高频和高效率应用中，SiC SBD的导通电阻仍然是可以接受的。
    

#### 3\. 开关速度

-   SiC MOSFET ：具有快速的开关速度，能够在高频应用中实现快速切换。这得益于其低栅极电荷和电容特性，使得器件的开关过程更加迅速。
    
-   SiC SBD ：同样具有高速开关特性，其反向恢复时间极短，几乎为零反向恢复电流。这使得SiC SBD在高频和高效率应用中具有显著优势。
    

#### 4\. 温度稳定性

-   SiC MOSFET ：具有较好的温度稳定性，能够在高温环境下保持稳定的性能。这得益于SiC材料的高热导率和宽禁带特性。
    
-   SiC SBD ：同样具有良好的温度稳定性，其正向特性和反向特性受温度影响较小。这使得SiC SBD在高温应用中具有更好的可靠性和稳定性。
    

### 三、应用差异

#### SiC MOSFET

SiC MOSFET因其高耐压、低导通电阻和快速开关等特性，在多个领域得到了广泛应用。特别是在电动汽车、光伏发电、智能电网和轨道交通等领域中，SiC MOSFET作为核心功率器件，发挥着至关重要的作用。例如，在电动汽车中，SiC MOSFET被用于电机驱动系统中的逆变器中，以提高电机系统的效率和可靠性；在光伏发电中，SiC MOSFET则用于逆变器和光伏控制器等部件中，以提高系统的转换效率和稳定性。

#### SiC SBD

SiC SBD同样因其优异的性能特点在多个领域得到了应用。特别是在高频和高效率的应用场景中，如射频电路、高速开关电源和无线通信等领域中，SiC SBD因其快速恢复特性和低反向漏电流而备受青睐。此外，SiC SBD还因其良好的温度稳定性和高耐压特性而被用于高温和高压环境中，如航空航天和军事电子等领域。

### 四、优缺点对比

#### SiC MOSFET

优点 ：

-   高耐压：能够承受高电压环境下的稳定工作。
    
-   低导通电阻：在导通状态下功耗低，效率高。
    
-   快速开关：适用于高频应用中的快速切换。
    
-   温度稳定性好：在高温环境下性能稳定。
    

缺点 ：

-   成本相对较高：由于SiC材料的制备工艺复杂且成本较高，导致SiC MOSFET的售价也相对较高。
    
-   驱动电路复杂：需要专门的驱动电路来控制其导通与关断过程。
    

#### SiC SBD

优点 ：

-   高耐压：能够承受较高的反向电压。
    
-   快速恢复：反向恢复时间极短，几乎为零反向恢复电流。
    
-   温度稳定性好：正向特性和反向特性受温度影响较小。
    
-   结构简单：相比于SiC MOSFET来说，其结构更为简单且易于制造。
    

缺点 ：

-   导通压降稍高：虽然导通压降相对较低，但相比于SiC MOSFET来说可能稍高一些。
    
-   应用范围相对有限：主要应用于高频和高效率的应用场景中，如射频电路和高速开关电源等。
    

综上所述，SiC MOSFET和SiC SBD在工作原理、特性、应用及优缺点等方面存在显著差异。在实际应用中，应根据具体需求和场景选择合适的器件以发挥其最大优势。随着碳化硅技术的不断发展和应用领域的不断拓展，相信SiC MOSFET和SiC SBD将在更多领域发挥重要作用并推动整个行业的持续发展和进步。

  

文章来源：电子发烧友

  

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)