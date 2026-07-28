# 碳化硅器件的封装介绍及SOT227封装的SiC MOSFET的应用


> 原文地址: [https://mp.weixin.qq.com/s/3UjbpNLkAEGLCWmOIWW-Sw](https://mp.weixin.qq.com/s/3UjbpNLkAEGLCWmOIWW-Sw)

随着国内SiC材料和器件技术的快速成熟，其应用已从高端领域向工业和消费类市场广泛渗透，而封装技术是实现其卓越性能的关键一环。

### 一.SiC MOSFET器件主要封装分类

封装不仅提供保护和连接，更直接影响器件的散热能力、寄生参数（影响开关速度和过冲）、系统功率密度，在装配工艺和成本之间取得最佳平衡。当前主流的封装类型可分为以下几类：

**1.分立器件封装介绍**：

  

①、 TO-247-3 / TO-247-4L — 工业级功率的标杆

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicK3umvFc2ojpfsyNT4ppbJaKQ2GSicvV3054VMMPJ2rrNExtdl6ibib7LA/640?wx_fmt=jpeg&from=appmsg)

特点：

**经典塑封、引脚式**封装，机械强度高，易于手工焊接和更换。

**TO-247-3**：标准三引脚（栅极G、漏极D、源极S）。

**TO-247-4L**：**关键进化**，在3引脚基础上增加了**开尔文源极引脚**。该引脚专为栅极驱动提供独立的低感回路，与功率主回路分离。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicRUSguh0c7INyvOgPZWdWE7C6fibMVVE4wq6WcbvLG1XAJAVeXhtsKhg/640?wx_fmt=jpeg&from=appmsg)

  

**性能优势**：

**TO-247-3:**通用性强，成本较低，散热能力优秀（依靠安装面和散热器）。

  

**TO-247-4L:****大幅降低开关回路寄生电感**。这能显著减少开关振铃、降低开关损耗、提升dv/dt能力，是充分发挥SiC高速开关优势的**首选分立封装**。同时支持更高的开关频率。

  

TO247-3i:内绝缘型TO-247封装使用特殊的封装工艺将承载芯片的框架与MOSFET背部散热片相互隔离，最终在MOSFET的漏极与其背部散热片之间实现电气隔离。

  

TO247-4S：该封装采用差异化引脚布局——两根粗引脚承载主功率电流，两根细引脚专用于传输驱动信号，在延续传统封装成熟度与易用性的基础上，为高压功率转换系统提供了更精准、更可控的解决方案。其关键创新在于实现了开尔文源极与功率源极的物理分离：通过两粗引脚（功率源极与漏极）和两细引脚（栅极、开尔文源极）的独立布局，有效解耦了驱动回路与功率回路，从而显著抑制了源极引线电感对栅极驱动的影响。这不仅有助于降低开关损耗、提升系统效率，也使得器件在安装焊接与驱动回路布局上更为简便，进一步优化了整体设计流程。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicNBBtRafykEDj2Y8BxT0U5ibDgINdw78jIZKkkHzEwE3XfyC41JXb8aA/640?wx_fmt=png&from=appmsg)

TO247-4S封装图

  

**典型应用**：光伏逆变器、UPS、工业电机驱动、充电桩模块等中高功率场景。TO-247-4L已成为高性能SiC MOSFET的标配。

### **②、 TO-263-7 (D²PAK-7L) — 表面贴装的中功率主力**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFich7MgWxRNTTMu5LOjteLAjXJ5k3cRDruBHloPpsDtpwgSzr7DECibuCQ/640?wx_fmt=png&from=appmsg)

### **特点**：

**表面贴装**封装，背部有大型金属暴露焊盘用于散热和焊接。

  

拥有**7个引脚**，通常包含1个栅极、多个源极和开尔文源极引脚。

**性能优势**：

**适合自动化回流焊生产**，提升生产效率。

  

多引脚和开尔文源极设计提供了**比TO-220更好的电气性能**和**更低的封装寄生电感**。

  

在PCB上散热路径短，通过PCB铜箔散热效果好。

  

**典型应用**：中大功率开关电源（服务器/通信电源）、车载DC-DC转换器、紧凑型工业电源等需要高生产效率和高功率密度的领域。

### **③、 TOLL — 新一代高性能表面贴装**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicactNgoh0VwgDXYR3SKqFPZmPtFLFYhfAtic2C3ibWGXs1TbDlpP1sAaQ/640?wx_fmt=png&from=appmsg)

**特点**：

**无引线表面贴装**封装，外形扁平，底部为大面积焊盘和多个小信号引脚。

  

**性能优势**：

**极低的封装寄生电感**，开关性能接近芯片本身，远超TO-247。

  

**出色的散热能力**：底部通过PCB散热，热阻极低。

  

**高功率密度**：占板面积与TO-247相当或更小，但性能更优。

  

**典型应用**：对开关频率和功率密度要求极高的场合，如高端服务器电源、电信整流器、高效能充电模块、高端音频功放。是取代TO-247用于下一代高频设计的理想选择。

### **④、 TO-220F — 经济型绝缘封装**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicMicrgzdoSKG1KCWmAH9lL0p4k5IM9BBLwR4o5E7kJMaa0peM1Ox6IxQ/640?wx_fmt=png&from=appmsg)

**特点**：

引脚式设计，在标准TO-220基础上，将金属背板替换为**全塑封结构**，实现**完全绝缘**。

  

**性能优势**：

**无需安装绝缘垫片**，简化了组装工序，降低了系统绝缘成本。

  

避免了因绝缘垫片老化或安装不当导致的散热问题。

  

**安全性更高**，防止安装面意外导电。

  

**典型应用**：对成本敏感且需要电气绝缘的中低功率应用，如家用电器、中小功率适配器、消费类电机驱动。

### **⑤、 SOT-227 — 平板式高可靠封装**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicAibD6TMOaAERRp9PVXVDSUKdwV2M0DqDVJorzPwA1VTGN8hN7icImQWQ/640?wx_fmt=png&from=appmsg)

**特点**：

**平板式、螺钉连接**的“迷你模块”型封装。采用金属底板直接安装到散热器。

功率端子为**螺钉压接**，栅极常用插拔端子。

**性能优势**：

**优异的散热能力**（极低的热阻），可承载**超大电流**。

  

**极高的连接可靠性**和机械强度。

  

**低且稳定的功率回路电感**。

  

易于维护，无需焊接大电流端子。

  

**典型应用**：高可靠性工业领域，如光伏/储能变流器、大功率工业电源、电焊机、牵引辅助系统等需要风冷或简单散热的中高功率场景。

### **⑥、 DFN8x8 / DFN5x6 — 极致功率密度的代表**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicRDZPaJNdz37iaGtP51DJXZuwScx3OqA8EQcHibll41glCJ7D38sm2cTg/640?wx_fmt=png&from=appmsg)

PDFN8\*8封装

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicNDHTEsljibozicyJ5dd3vRfHBM75lUgXJNNZ4jwCUgX791WFK02muCWg/640?wx_fmt=png&from=appmsg)

PDFN5\*6封装

### **特点**：

**无引线、方形扁平**的表面贴装封装，底部为大型中心散热焊盘和周边小引脚。

  

**芯片直接贴装**，封装体积极小，**无键合线**。

**性能优势**：

**极致的功率密度**：在极小体积内实现高电流输出。

  

**最低的寄生参数**：无引线、无键合线设计使寄生电感和电阻降至最低，开关性能最佳。

  

**双面散热**：热量可通过底部焊盘传导至PCB，部分型号顶部也有散热片。

  

**典型应用**：

**DFN8x8**：用于**超高开关频率**（MHz级）和**极限空间**的应用，如高端数据中心电源（图腾柱PFC）、高频LLC谐振转换器、激光驱动、航空航天电源。

  

**DFN5x6**：常用于**小功率、高密度**模块的集成，或作为辅助电源开关。

### **总结与对比选型指南**

封装类型

核心特点

性能优势

适用场景

**TO-247-4L**

引脚式，带开尔文源极

高性能、易用、散热好、性价比高

通用高性能中高功率首选

**TO-263-7**

表面贴装，多引脚

适合自动化生产，电气性能良好

自动化生产的中功率电源

**TOLL**

无引线表贴，可双面散热

**超低电感、超强散热、高密度**

下一代高频高密度电源

**TO-220F**

全塑封绝缘

安装简便，绝缘可靠，成本低

绝缘要求的中低功率消费/工业

**SOT-227**

平板螺钉连接

**超大电流、超高可靠、优异散热**

高可靠工业风冷大功率系统

**DFN8x8**

无引线芯片级

**极致密度、最低寄生、MHz开关**

尖端高频、空间受限的顶级电源

**选型关键考虑因素**：

目前，**国产SiC MOSFET在这些主流封装上均有成熟产品布局**，尤其在TO-247-4L、TO-263-7、TOLL、SOT-227等工业领域用量大的封装上已具备很强的竞争力。工程师可根据上述特点，结合具体的功率等级、频率预算、散热条件和生产方式来选择最合适的封装。

  

**2\. 功率模块封装**：

**标准车规级模块**：如 **HPD、DCM、DWC3** 、HP1、**EconoDUAL**等，将多个芯片（可能包含二极管(SBD)、IGBT/MOSFET）集成在一个模块内，实现半桥、三相全桥等拓扑，电流能力从几十安到上千安。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicoLdlLdIsTkrtBDwddUIaPGclPLMDltkWSmORPYFt1Ubv0YlZHx9UFQ/640?wx_fmt=png&from=appmsg)

HPD系列三相全桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicr3f5ibNzpFV1YNRKE9tZGQ97udCA6fqRLk9DSor9Qzawu6b8szbg7jw/640?wx_fmt=png&from=appmsg)

DCM系列半桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFiclC5bAPgTBEGl4UAS75dLMiaFDUMTMxOSPUzqlDJJubgT4XyxBh5K0pQ/640?wx_fmt=png&from=appmsg)

DWC3系列三相全桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicuUq4bb7FLic0kP5BH8gZicD3mudQibiaFPLicd0W3icJjxKggYUHibL6X4tTw/640?wx_fmt=png&from=appmsg)

HP1系列三相全桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicpMBh4FBveeLia5Am2uybH4BcYu3jOiaCGyIsPAS9TjzYTCzz5MU7terA/640?wx_fmt=png&from=appmsg)

EconoDUAL系列半桥模块

标准工业级模块：如 **62mm、34mm、 Easy、** Easy-2B、SM8等，将多个芯片（可能包含二极管、IGBT/MOSFET）集成在一个模块内，实现半桥、全桥等拓扑，电流能力从几十安到上千安。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFictzRNSDe12Hz2q2skhX1C4RbdpfiawAu8REh9fqemPO23qET5Nee1eWA/640?wx_fmt=png&from=appmsg)

62mm系列半桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicEaED7mjrCcW9TsSrnWA5pyicm9K99xgmFIE01WuRO7xUyJKZrv087ibg/640?wx_fmt=png&from=appmsg)

34mm系列半桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicq8ITxruBDUMATzBiaOnpQfccMDybP1G9sHmcr4juOdt436W0MIIicTPQ/640?wx_fmt=png&from=appmsg)

Easy系列半桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicJXZibTp7klIg2WWKDjGYHYQc8ewbwlZztSfSiaTU7Pfe12Ymmh1Z0raw/640?wx_fmt=png&from=appmsg)

Easy-2B系列三相全桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicyyItgjwZBwibMK6Ar8fKKLTYvGrzCialCNlp1v8H6JlIyRORmBvWFg8A/640?wx_fmt=png&from=appmsg)

Easy-2B系列H桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicdRxuE5EQnRAApKC2IK9nGnQPQrz0q8dLydYBwDjkO7ymjDQZ9GMqRQ/640?wx_fmt=png&from=appmsg)

Easy-2B系列半桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicdtXb2rF6l2E28R2NOT6BrcICSjsLWrFxO0az9ybSG2gtHpjcPMX5Rw/640?wx_fmt=png&from=appmsg)

SM8贴片系列半桥模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFickLAyMtttD2ibmV8OTqlibGeGHDKkAHdU2BlDd9KyVM1sS79Ap71g6Fyw/640?wx_fmt=png&from=appmsg)

MEK6系列三相全桥模块

**小封装模块**：这款模块采用**紧凑型顶部散热塑封结构**，以其**高效能、高功率密度和优秀的散热性能**，展现了碳化硅材料在高压、高频、低损耗方面的优势，为电动汽车空调压缩机、车载充电机及工业驱动系统等提供了创新解决方案，推动行业向更高效、更环保的方向迈进。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicrjJLticmhEgzzmK9LPibOJacFbRtSQRFsLwI8ZJBg6kmuhhHcEib17ICQ/640?wx_fmt=png&from=appmsg)

D21系列三相全桥模块

  

**定制化模块**：根据特定应用（如电动汽车主驱逆变器）进行优化设计，追求极致功率密度和散热。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicKZ29AQLQR4oiaXnWzjm6QnRCvtu7CWzOYDlUOZaewdnyyQwqicXKD1pA/640?wx_fmt=png&from=appmsg)

定制化模块：1200V1800A半桥模块拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicibywH7dUZLglpQG4XRBOPSvgbnCVIC4wZ3PfaTW9ysS1KHAnRJWbtoA/640?wx_fmt=png&from=appmsg)

定制化模块：1200V1800A半桥模块基本参数表

  

**二.重点介绍：SOT-227封装MOSFET**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFic8FCC9v3qtyk73LyMXssFYBic0er09ZZRdcy08eTNRygxUl52Ipm5ibGA/640?wx_fmt=jpeg)

在分立封装与模块之间，存在一种独特的“平板式”封装，**SOT-227**（也称为 **MF-220、ISOPLUS220**）便是其中的杰出代表，在国产SiC MOSFET中日益常见。

#### **产品结构与特点**

**①物理形态**：

-   它是一种**方形、平板式**的封装，通常带有一个大的金属底板（通常是铜）作为散热和机械安装面。
    
-   顶部有塑料外壳覆盖，并引出**螺钉端子或插拔式端子**（而非传统的细引脚），用于连接主功率电路（漏极、源极）和栅极。
    
-   外观坚固，更像一个“迷你模块”。
    
      
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFiciaQLHrU8ppBQoQGAAn1jAP4Xo45pa3u9NX1F5239H9EcHuyvjSLbaJg/640?wx_fmt=png&from=appmsg)
    
      
      
    

②安装方式：

-   **底板安装**：通过金属底板直接用螺钉固定在散热器上，这是**最主要的安装方式**。接触面积大，导热路径极短。
    
-   **电气连接**：功率端子通常采用**铜排或粗导线通过螺钉压接**，栅极端子可能采用插拔式连接器或螺钉连接。这种方式连接可靠，接触电阻低，易于大电流布线。  
    

③内部结构：

-   内部芯片（SiC MOSFET Die）通过高性能导热绝缘材料（如陶瓷衬底，常用Al2O3或AlN）与金属底板相连，实现优异的电气隔离和导热性能。
    

#### **性能优势**

**①卓越的散热能力**：

-   由于直接通过大面积金属底板接触散热器，**热阻（Rth<j-c>）极低**，通常远优于同功率等级的TO-247封装。这意味着在相同损耗下，芯片结温更低；或在相同结温下，能输出更大功率。  
    

②极高的功率密度和电流能力：

-   得益于出色的散热和低阻连接，单颗SOT-227封装的SiC MOSFET可承载**数十安培至上百安培**的连续电流，非常适合中等功率（几千瓦至几十千瓦）应用。
    
      
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicX4TvFQ0XDFvMOibyv4OyUqicwd5vxSS9Lgeic1xQZsQibibwOIJoF9fBtwQ/640?wx_fmt=png&from=appmsg)
    
    1200V250A,内阻7.5毫欧的基本参数表
    

  

③优异的寄生参数：

-   虽然开关回路电感可能略大于最优化的TO-247-4L，但其**功率回路寄生电感通常比传统TO-247更低且更稳定**，因为采用低感性的平板结构和螺钉连接，有利于降低开关电压过冲和振铃。  
    

④高可靠性与易用性：

-   机械结构牢固，抗震抗冲击能力强。
    
-   安装简便，无需焊接功率端子（可焊性要求低），便于维护和更换。
    
-   绝缘性能好，金属底板与芯片之间通常有高达2500V以上的绝缘耐压。  
    

⑤与SiC特性的完美匹配：

-   SiC器件允许在更高温度下工作（结温可达175°C甚至200°C），SOT-227出色的散热能力使得利用这一优势成为可能。
    
-   适合SiC带来的高频化趋势，其低热阻有助于耗散高频开关可能增加的损耗。
    

#### **应用领域**

SOT-227封装非常适合那些需要**高可靠性、中等功率、良好散热且对体积有一定要求**的工业应用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFic88ttngAGj7N2rhI7TfwwI1NIVzzhP0HiawuQ1GfHAmTToPwlPnGOib3w/640?wx_fmt=jpeg&from=appmsg)

**①新能源发电与储能**：

-   **光伏逆变器**（尤其是组串式逆变器的Boost电路或三电平模块）。
    
-   **储能变流器** 的DC/AC或DC/DC功率单元。  
    

②工业电源与电机驱动：

-   **大功率开关电源**、通信电源、服务器电源的PFC和DC/DC级。
    
-   **伺服驱动器**、**变频器** 中的逆变和制动单元。
    
-   电焊机、感应加热电源。  
    

③轨道交通与特种电源：

-   辅助电源系统、车载充电机等。  
    

④其他：

-   大功率UPS（不间断电源）。
    
-   测试设备、激光器等需要精密大功率控制的设备。
    

### 总结

**SOT-227封装在国产SiC MOSFET产品线中，定位为一个高性能、高可靠性的“功率工作马”**。它巧妙地在传统分立封装和大型功率模块之间找到了平衡点：

-   **相比于TO-247**：它在散热、电流能力、连接可靠性上具有明显优势，特别适合机柜内风冷或简单散热器冷却的工业环境。
    
-   **相比于大型模块**：它成本更低，使用更灵活，无需复杂的压接或焊接工艺，适合构成中等功率的系统。
    
      
    

三.产品介绍文章链接

  

1.SiC SBD产品介绍

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

[10种封装的碳化硅MOSFET和11种封装的SiC功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247533514&idx=1&sn=5a094030fb5da795f6e432cf3bcc332c&scene=21#wechat_redirect)

  

[HPD封装的SiC功率模块的产品介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517124&idx=1&sn=35085cc392a067787930bf863a134590&scene=21#wechat_redirect)

  

[MD3系列的三相全桥碳化硅（SiC）功率模块的产品及应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247519655&idx=1&sn=079d26a795b2ff807b28e5736e8b06d9&scene=21#wechat_redirect)

  

[MEK6封装三相全桥碳化硅模块在载人小型飞机电调系统的突破性应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517193&idx=1&sn=684c24f1755b073b770c1c7ab9cc50ad&scene=21#wechat_redirect)

  

[62mm封装的SiC功率模块的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247515543&idx=1&sn=9b90b76843b8453c434ffd9ada6cbd7f&scene=21#wechat_redirect)

  

[DCM封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517694&idx=1&sn=1679554149297473be8c46272265d3a0&scene=21#wechat_redirect)

  

[Econodual封装1200V1000A的SiC功率模块产品介绍及仿真测试](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513868&idx=1&sn=0dc0d8b427d47c622018c5d97ffc080a&scene=21#wechat_redirect)

  

[34mm封装碳化硅MOSFET半桥模块，助力工业电源（焊机逆变、感应加热设备、高频逆变器、不间断电源）的高效化和小型化](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247507568&idx=1&sn=19b012f5ecd5e3f9bbcc07551f73f03e&scene=21#wechat_redirect)

  

[Easy封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517622&idx=1&sn=d7ae98ac554700ccdf005e03e189705e&scene=21#wechat_redirect)

  

[SM8贴片塑封SiC半桥模块，具有顶部散热层，集成了NTC温度传感器，适合紧凑、轻便、高效率的应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517087&idx=1&sn=2aa39b989036cb20954d564dd5ad19a8&scene=21#wechat_redirect)

  

总结

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicd3Tlib2qmv4VkEYJjCnRmpewyny2vNf1yUvSNicam6iczSb4aHLJ3liaQw/640?wx_fmt=jpeg)

国产碳化硅器件的发展，正从 **“技术突破”** 走向 **“规模应用与生态构建”** 的新阶段。其核心驱动力不仅在于材料本身的优越性能，更在于**国家战略需求、庞大的国内市场应用牵引以及日趋完善的自主产业链**所形成的合力。

未来，随着技术持续进步、成本不断下探、应用生态日益繁荣，国产碳化硅器件将成为中国在高端电力电子领域实现**换道超车**、引领全球能源革命的重要引擎。对于系统设计者而言，现在正是深入研究、积极导入，以构建下一代高性能、高效率电力电子系统的黄金窗口期。

  

让我们携手，以先进的碳化硅“芯”科技，驱动电力电子迈向高效、高频、高可靠的崭新未来，共同为全球碳中和目标的实现贡献力量！

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmicD5BSOKdiafkh9a4V8ia4wJjfWERibJm7xlps3M5EML1odhWP4tIgFVVhD265b1RJ67ia5ZjBAL8DGw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicDjaP2RgJXxfuibQjjWS6jVQw71EkrOicASN4R5hovicVMwAzCDbcxPzKA/640?wx_fmt=jpeg&from=appmsg)

###   

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmicD5BSOKdiafkh9a4V8ia4wJOZ4p3C5ROXKH5z46nNMHRWtgodW0JLx4tWAbPSUeDDfbEeQibRwZs9g/640?wx_fmt=jpeg&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=61)