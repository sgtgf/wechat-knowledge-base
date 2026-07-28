# 翻遍全网电源资料，发现还是ADI大厂的这份《电源培训基础》最系统、最良心！

原创 王工 硬件笔记本 2025-11-20 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/-PJBpMzlFX-wyDGotjFh7w](https://mp.weixin.qq.com/s/-PJBpMzlFX-wyDGotjFh7w)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

大家好，今天分享一份来自 ADI 官方的优质资料——《电源培训基础》。这份文档超过一百页，内容系统全面，直击电源设计中的常见痛点与盲区。

资料最大的优点是通俗易懂、图文并茂，配有大量示意图，便于理解。基础章节覆盖全面，部分内容我在公众号中也曾写过，非常适合入门学习。整体讲解简洁明了，建议初学者仔细阅读每一段文字，并结合图片加深理解。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutJyHNtibEsVN6LH5fKxyNVNXKPPfibkiavgGbkEra1rbicsPg7TWCKWFiaQA/640?wx_fmt=png&from=appmsg)

接下来，我将为大家梳理这份资料的精华内容，并附上一些个人见解。

文末提供《电源培训基础》完整版 PDF 的下载方式，欢迎获取。

  

01

懂点测试

资料的第一讲开门见山，直接切入电源系统的基础原理和最重要的环节：测试。一个优秀的电源工程师，首先得是学会测试。你不会测试，不会排查，电路图设计得再好，也只是纸上谈兵。

-   **效率与静态电流**  
    效率测试，公式很简单，Pout/Pin，但做好却不简单。资料里提到了冷机效率和热机效率，这一点王工觉得非常关键。我们很多时候在实验室测出一个漂亮的效率值，但机器跑起来发热后，效率可能会明显下降，所以一个稳定的电源，必须在热稳态下依然表现良好。
    

关于静态电流的测试，资料点出了一个非常实际的问题：如何用普通的三位半万用表测量几微安的电流？这确实是新手常遇到的问题。

**普通三位半万用表无法直接测量**‌，测量uA级电流一般需通过**串联电阻间接测量。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7Outoyw17Ibs5HpjgERjMaicZQJzCvTNAoQvh9fraVPtfmyTZWrsyhRDoqg/640?wx_fmt=png&from=appmsg)

**具体步骤如下：**

### 1、串联电阻法

-   选择10kΩ电阻：将10kΩ电阻串入待测电路中，电阻两端并联二极管（用于短路保护）。
    
-   稳定电压：接通电源后等待输出电压稳定，随后移除二极管。
    
-   测量电压：用万用表mV档测量电阻两端电压（如1.5mV）。
    

### 2、计算电流

-   公式：电流（μA）= 电压（mV）÷ 电阻（kΩ）。
    
-   示例：1.5mV ÷ 10kΩ = 0.15μA。
    

### 通过以上方法就可以测出uA级的电流，注意需使用高精度10kΩ电阻（误差≤1%）。

###   

-   **纹波测量**  
    

纹波的大小反应了**反映电源的性能和稳定性。资料简明扼要地指出了纹波的产生（电感电流施加在电容的ESR和ESL上）和测量的关键技巧——减小地线环！**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7Out0ibq3BFUoJze8FDaepvObSnQjDJSvlg0ibficjg0NdLp4z2TUWDibibQYOQ/640?wx_fmt=png&from=appmsg)

王工我必须为这句话点个赞！多少人在纹波测量上栽过跟头？用示波器探头上的那个长接地夹，测出来的纹波比实际大好几倍，全是噪声。正确的方法应该是使用探头的接地弹簧，或者直接去掉探针帽，用最短的路径连接被测点。这个细节，看似微不足道，却是区分新手和老鸟的重要标志。纹波的大小直接关系到后续系统（比如模拟电路、射频电路）的稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutjHogFSlUhzSBYoRjib6gfQwj92ZGQ18OAwM9pG0DroTgtDibda4ox3eA/640?wx_fmt=png&from=appmsg)

  

02

懂点元器件选型

第二、三讲花了大量篇幅介绍基础元器件，王工认为这是这份资料比较好的地方之一。电路设计，本质上就是和各种元器件打交道。你不了解它们的参数特点，就没法让它们在电路中好好工作。

-   **电容：电源的蓄水池**  
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutK6icMgoF6CBEuSpgO077e8lBfDOggxuImpKV7FYbySJEstlwAR3Sz7Q/640?wx_fmt=png&from=appmsg)

资料对铝电解、钽电容、陶瓷电容的优缺点和失效模式都进行了分析。

-   **铝电解**：便宜量大，但ESR高，寿命短（怕热），而且有极性，反接或者过压很可能冒烟，王工我就亲眼见过电容顶部防爆阀被冲开，现场一片狼藉。所以一般用在输入级的大容量缓冲和低频滤波。
    
-   **钽电容**：容量体积比好，ESR适中，但非常娇气！资料里说失效模式很恐怖，王工我深有体会——它失效时容易短路，甚至起火。所以**降额使用是铁律**，资料建议耐压按2倍选择，王工我觉得在电流纹波大的场合，甚至需要更保守一些。
    
-   **陶瓷电容**：ESR极低，高频特性好，是抑制高频噪声的利器。但它有直流偏压效应和微音效应。资料提到了温度特性不稳定，王工我再补充一点，它的容量会随着两端直流电压的升高而急剧下降！比如你用一个标称10uF，额定电压16V的X5R材质陶瓷电容，在12V直流偏压下，它的有效容量可能只剩下3-4uF！不注意这一点，你的环路稳定性可能会出大问题。
    

资料中，不同电容在同一电路中滤波效果对比实验这个图，相信一定非常直观和有说服力。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutTva2H8FicN66VO3mIZdp8TS9F3gR0N4sU2KcvBpQAypGRTRuTddsYAw/640?wx_fmt=png&from=appmsg)

  

-   **MOS管**  
    资料清晰地对比了NMOS和PMOS的驱动差异，以及关键参数。
    

-   **Rds(on)和Qg的权衡**：这是MOS选型的核心矛盾。Rds(on)小，导通损耗低；但通常Qg（栅极电荷）大，开关速度慢，开关损耗大。在高频应用中，开关损耗往往占主导。所以，**不是导通电阻越小越好**，必须根据开关频率来折中考虑。王工我早期就犯过只追求低Rds(on)，结果驱动不足，MOS管发热严重的错误。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutbXrliaVLqOo0QIiaFhkPhFwoRZdaHY9eI5dtB3KWDpz0fcedLZtmaJ7A/640?wx_fmt=png&from=appmsg)

-   **体二极管**：这个寄生二极管常常被忽略。在BUCK电路中，同步整流的体二极管在死区时间导通，其反向恢复特性会影响效率和EMI。
    

  

03

LDO与开关电源

第四讲和第五讲，分别讲解了线性稳压器（LDO）和开关电源拓扑，这是直流电源转换的两大核心技术。

-   **LDO**  
    

LDO的原理简单，噪声低，响应快，但效率是它的硬伤。资料里用7805举例非常经典，当输入12V输出5V时，效率只有5V/12V≈41%，多余的功率全都转化成热量了。所以，**LDO适用于压差小、电流小、对噪声极其敏感的场合**，比如给PLL、VCO等模拟电路供电。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutDa2eJ9g4kITDv8hiaozOiaZN5BibxUC2X2L1BlsLaRFNHbfK8G6oaXWEQ/640?wx_fmt=png&from=appmsg)

  
资料里提到了LDO的压降（VDO）、热问题以及输入输出电容对稳定性的影响，这些都是实际设计中必须考虑的。

对于LDO的新发展，新的架构采用非常简单的并联可以获得更大的输出电流和用户自定义的电流限制。其应用场景正在拓宽，比如物联网设备的低功耗电源管理。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutW4OyP65tJsmYPAeYksa18s4Burfv7cYfqwoehCP4KGsuEXGssDWC1A/640?wx_fmt=png&from=appmsg)

-   **开关电源**  
    

这一部分的资料图解比较直观，包括BUCK、BOOST、BUCK-BOOST等电源常见的非隔离拓扑。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutzkcFVJf7xgODl9X53iaVjQh0yS7se7M85iczOb5cmmiayrHcM7ibA5m8lg/640?wx_fmt=png&from=appmsg)

  

-   **同步 vs. 非同步**：同步整流用MOS管代替二极管，大大降低了导通损耗，是提升效率的利器，尤其是在低输出电压、大电流输出场合。但成本和控制复杂度会增加。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7Out3uds1ooxDtD3uJqKE7BfrjibeZKXwC1hicHkz6Bm8Y3VSrvlusibBswFQ/640?wx_fmt=png&from=appmsg)

  

-   **电感的选择**：资料点出了电感的铜损和铁损，这是理解电感损耗的根本。选择电感，不仅要看电感量和饱和电流，DCR（直流电阻）和在不同频率下的损耗特性同样重要。一个电感在特定频率下可能因为磁芯损耗而严重发热，即使远未达到饱和电流。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutKGzlW9icxf70f42OJeQY3gnfL58Jibtk4loYVKY9Pb0kr5UoYngEhDSA/640?wx_fmt=png&from=appmsg)

-   **开关频率的权衡**：高频可以减小电感、电容的体积，实现小型化，但会带来开关损耗增加和EMI问题加剧。低频则相反。资料提到汽车应用为了避开AM广播频段而选择400kHz或2MHz以上。王工我的看法是，开关频率的选择没有绝对最优，只有最适合当前项目需求（尺寸、效率、成本、EMC）的平衡点。
    

  

04

锂电池与USB供电管理

第六讲和第七讲进入了两个非常贴近我们生活的应用场景。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutvibkpqY11ICpNf8Tt3QeGRkDsvcBXM825y92z9BlnLCnfw17Hp4R6jw/640?wx_fmt=png&from=appmsg)

-   **锂电池**  
    

资料对锂电池的原理、安全问题和使用误区的讲解，王工认为具有极高的科普价值。

-   **安全第一**：穿刺、过充、过放是锂电池的三大主要安全隐患。内部的隔膜一旦损坏，正负极短路，瞬间就会导致热失控，后果不堪设想。所以所有的锂电池应用都必须有保护板（BMS）来严格监控电压和电流。
    
-   **破除误区**：资料彻底澄清了“前三次充电12小时”和“电量用光再充”这两个流传甚广的谬误。对于锂离子电池，**浅充浅放才是延长寿命的王道**。随时充电，尽量不要让电量低于20%再充。王工我自己的习惯就是，有机会就插上充电，从不把手机用到自动关机。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutLuLyB3d1NqFzA1C6CBmMJxKg8H5ux1OJSrKIYdoorDbibJDOI3pJCHQ/640?wx_fmt=png&from=appmsg)

  

-   **USB供电与路径管理**  
    

第七讲讲的电源路径管理，是单电池设备（如手机、平板、蓝牙耳机）设计等的主要应用。资料用两张图清晰地展示了有无路径管理的区别。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutxRSxJ3vDRTzc9hajPZcLqwlPibPviacsGqC1GFUdbcF1XpsgUMkb0iaLA/640?wx_fmt=png&from=appmsg)

  
没有路径管理，系统电压总是等于电池电压，一个过放的电池会让你插上充电器也无法开机。充电电流被系统负载分走，可能导致电池永远充不满。  

而有了路径管理，系统供电和电池充电是两路独立的路径。插上充电器的瞬间，系统直接由适配器供电，立刻开机，用户体验无缝衔接。同时，充电器可以全力为电池充电，不受系统负载波动的影响。王工我认为，这是一个非常体现用户体验至上的设计思路，在如今的便携式电子产品中，这几乎是标配。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7Outib4ibick3ZV5n7mhichbVEhrNL11HaNgcuvMhqCWAmSWqM5heicB3w644bw/640?wx_fmt=png&from=appmsg)

  

05

资料获取

总的来说，ADI的这份《电源培训基础》资料，王工我的评价是：图文并茂，通俗易懂。它没有太多高深莫测的理论推导，而是把咱们工程师在日常工作中最常用、最需要掌握的知识点和设计技巧，用图文的方式呈现出来。

以上就是王工对这份《ADI电源培训基础》资料的解读和思考，希望能对大家有所帮助。

**如何下****载《ADI电源培训基础****》，更好****的学习硬件电路基础知识**

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|**ADI电源培训基础**

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh89RicqicRTJfbccK5Gc7OutuIRlteiaPQsq1LJJ0rJVcZkMkWxiagoz0vvJYdxLicRXSr6s5PvriaNQYQ/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaLdfnRN7micHROKY3kNxtFCqbzPboycgHRTnGK90QrBHDfoCfnBDAf6icWBaURpoONpgD4AhfveNHA/640?wx_fmt=jpeg&from=appmsg)

注：为支持知识产权，建议通过正规渠道购买正版书籍。此处提及的PDF仅用于个人学习交流，请勿用于商业用途。获取方式通常可通过技术社区、图书馆资源或在线学术平台查询。