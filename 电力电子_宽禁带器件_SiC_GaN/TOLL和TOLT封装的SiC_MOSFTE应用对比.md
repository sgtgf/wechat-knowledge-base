# TOLL和TOLT封装的SiC MOSFTE应用对比


> 原文地址: [https://mp.weixin.qq.com/s/afGEl3TmuJci7SdUTDH7gA](https://mp.weixin.qq.com/s/afGEl3TmuJci7SdUTDH7gA)

碳化硅功率器件具有宽带隙、高击穿电场强度、高电流密度、快速开关速度、低导通电阻和抗辐射性能等独特特点，在电子器件领域有着广泛的应用。特别是在电力电子、高温电子、光伏逆变器和高频电子等领域，其性能优势能够提高器件的功率密度、效率和稳定性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOp2JkgRMr1xIhVo4sS15iciagyNaufVDDFXj6Qevc6caxFtG8wFbomWTcmWbxn8vFCbTzmEGRHY9k15O4DfMmc0d0ElTcSmEXAo/640?wx_fmt=jpeg&from=appmsg)

SiC MOSFET器件凭借其高频、高效、耐高温、耐高压等特性，可以实现节能降耗，小体积，重量低，高功率密度等特性，在新能源汽车、光伏储能、轨道交通、智能电网等工业电源领域具有明显优势，正在加速替代传统硅基器件‌。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMT9RPqc49vmc6jMfxc34WmNCvvPr81DcNoGicCiawj8DuHqSPUoWScIbW2WwPibmAdexXhBjKYZoia9DfEQtS3s8dJuzzJsEbQCeE/640?wx_fmt=jpeg&from=appmsg)

随着市场应用场景广泛，SiC MOSFET器件的封装也多样化。作为一名电力电子开发工程师，在选择碳化硅MOSFET的封装时，贴片封装的TOLL和TOLT确实是目前非常热门且具备高性能的选项。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOh9bYQJnPMAYOKsk3dLL9VKDPQ6670OV4tbQGcJ8ibv9MmBiciacf9ax20JoO0sPwibX35ODZ5H6d6cSmFqTyPB4XTFPesn4eQwqo/640?wx_fmt=png&from=appmsg)

下面为你详细介绍TOLL和TOLT封装形式的碳化硅MOSFET的性能优势、应用场景及选型要点。

### 一、核心区别：散热路径

在深入细节前，首先要明确两者最根本的区别：

TOLL封装：采用底部散热。器件产生的热量主要通过底部的焊盘传导至PCB，再通过PCB上的热过孔或额外的散热器散发出去。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM1FU73vP30ibGJ0HRTxjv2waMtia5tomfiaqR3xJItyLP87larDibichibCr3h3X01Y9FUWXkmoamROPV6e7wVgsaAkeXkvRbySPQ0c/640?wx_fmt=png&from=appmsg)

TOLL封装产品引脚图

TOLT封装：采用顶部散热。器件顶部有一块裸露的金属板，可以直接贴合外部散热器，将热量直接带走，完全绕过PCB。

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN1bYMicnoO54ibAHI9lqsz5KcP2kffKv7k8gKbxictT4Zy7zA53chChBsmtZwyg1FJicQYzo79xhD8Zicwd6GnMELyARicktdAicsFmw/640?wx_fmt=png&from=appmsg)

TOLT封装产品引脚图

这个核心区别决定了两者在不同应用场景下的优劣势。

比较维度

TOLL封装 + Cu-Clip技术

TOLT封装

**散热路径**

**底部散热，热量通过PCB传导。。**

**顶部散热，热量直接传导至外部散热器。。**

**核心性能优势**

**1\. 超高功率密度：超薄设计（典型值2.3mm），适合扁平化、空间受限的布局。。  
**2\. 低寄生参数**：多引脚（含Kelvin源极）设计，极大发挥SiC高频低损优势。。  
**3\. 高可靠性**：内部采用铜夹片（Cu-Clip）替代键合线，载流能力更强，抗热疲劳更优。。**

**1\. 极致散热：结到散热器的热阻极低，能充分释放SiC芯片的功率潜力，相同芯片可实现更大电流输出。。  
**2\. 优异的EMI表现**：散热路径不打断PCB地层，可优化电流回路，减小环路面积，降低EMI。。  
**3\. PCB热应力低**：大部分热量不经过PCB，降低了对PCB板材和厚度要求，提高了板级可靠性。。**

**典型应用场景**

**1\. 超薄电源：如服务器“卡片式”电源、适配器、电视电源。。  
**2\. 高密度板载电源**：通信电源模块、DC-DC转换器，需最大化主板利用率的场景。。  
**3\. 对高度敏感的应用**：如某些车载OBC、无人机等。**

**1\. 大功率工业与汽车应用：电动汽车牵引逆变器、光伏逆变器、车载充电机（OBC）、UPS。。  
**2\. 高功率密度模块**：AI服务器电源、5G基站电源，需要独立高效散热且布板密集的场景。。  
**3\. 对流冷却系统**：如微型逆变器，利用TOLT将热量直接引导至外壳或散热片。。**

**选型要点**

**1\. PCB热设计能力：需要精心设计PCB的散热过孔和铜箔，以确保散热效果。。  
**2\. 整体高度限制**：如果你的系统对元器件高度有严格要求，TOLL是理想选择。。  
**3\. 散热器配置**：如果必须使用散热器，通常需要定制特殊形状（如L型）来接触器件底部，增加成本。**

**1\. 散热器集成度：需要机械结构设计配合，确保器件顶部与散热器有良好的接触和均匀的压力。。  
**2\. 系统散热方案**：如果你的系统本身就有液冷板或大型风冷散热器，TOLT能轻松接入该热路。  
**3\. 布板空间**：虽然器件本身占板面积小，但需要为顶部的散热器预留结构空间。**

### 二、详细解读

#### 1\. TOLL封装：追求极致空间利用率的“薄”与“巧”

TOLL封装是一种无引线的表面贴装封装，外形非常小巧轻薄（产品厚度仅2.3mm）。它通过底部的散热焊盘将热量导入PCB。

**性能优势再强调**：

**超低热阻**：结合铜夹片（Cu-Clip）技术，可以做到极低的结壳热阻。芯片产生的热量能极快地传递到封装外壳。

  

**低寄生电感与高频开关**：优化的引脚布局和内部互联，使其寄生电感很低，能充分发挥SiC MOSFET的高速开关特性，降低开关损耗。  

。

**高载流能力**：铜夹片替代键合线，消除了传统键合线的瓶颈，使得器件能承载更大的电流。

  

**应用场景聚焦**：

**超薄/扁平化电源**：这是TOLL封装的主战场。如要求厚度<4mm的“卡片式”AI服务器电源、超薄适配器、TV电源等。。

**高密度板载设计**：在通信电源、5G基站电源中，需要尽可能压缩占板面积，TOLL封装能让电源器件在主板和子卡上的布局更紧凑。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMqq8Uq9nXbz6CicLMquBMER3w3TlexXbfbPDv1ENRn2ZXdMT9TZ9MEKCevwgx8HlTfbA9pic9fCRUjUGIoo4mZwUbmSDiaNplHlU/640?wx_fmt=jpeg&from=appmsg)

资料来源：充电头网（飞利浦200W充电器采用耐压1200V，导阻80mΩ，TOLL封装SiC MOSFET）

#### 2\. TOLT封装：为高性能散热而生的“通”与“劲”

TOLT封装专为顶部散热设计，其顶部的大面积金属板可以直接、高效地将热量传导至外部散热器。

**性能优势再强调**：

**绕开PCB热瓶颈**：传统PCB板材的导热系数差（远低于金属），TOLT通过顶部直连散热器，相当于开辟了一条热阻极低的“高速公路”。这使得器件能在更高功率下稳定运行，或者使用更小尺寸的SiC芯片达到相同性能，从而**降低成本。**。

**优化EMI特性**：由于散热路径不经过PCB，PCB的地平面可以保持完整，功率回路可以做到更紧凑，从而显著减小高频交流磁场的环路面积，降低EMI辐射。。

**集成开尔文源极**：TOLT封装通常也包含开尔文源极引脚，可以进一步优化栅极驱动性能，减少驱动回路与功率回路的共源电感，实现更干净的开关波形。。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNPwCf2oTqQXLHgOMD8PEF4ALRmcE4jnjCia2DtB7X2CIxibTE6nC0mZj71DZuoibjkZgPicLcYRiby0Nl5quvx6wib9Wq3TgkqUNkWY/640?wx_fmt=png&from=appmsg)

应用场景聚焦：

**大功率牵引与逆变**：电动汽车牵引逆变器、车载充电机（OBC）、光伏逆变器、储能系统（ESS）。这些应用通常已经有液冷或强风冷散热系统，TOLT器件可以直接安装在这些散热器上，实现高效的热管理。。

**高可靠性工业电源**：对于需要长期高负荷运行的不间断电源（UPS）和工业电机驱动，TOLT的优秀散热能力有助于降低结温，提升系统长期可靠性。。

### 三、总结与选型决策指南

作为工程师，你可以从以下几个维度进行决策选型：

**看散热终点**：

如果热量最终要**散到空气中**，且PCB空间有限（如超薄适配器），优先选 **TOLL**，利用PCB散热。

  

如果热量最终要传导至一个**独立的大散热器或外壳**（如电动汽车的液冷板、逆变器的外壳），优先选 **TOLT**。

**看空间限制**：

如果**高度是硬约束**（如设备厚度＜10mm），TOLL的超薄封装是巨大优势。

  

如果高度不是问题，但**板面积非常金贵**，TOLT能让你将散热器“叠”在器件上，节省板面空间。

**看热与电气性能优先级**：

如果需要**极致的散热性能**以最大化利用SiC芯片，或者饱受**EMI问题**困扰，TOLT是更优解，因为它能提供更低的热阻和更优的电流回路。。

  

如果设计目标是**在有限空间内实现标准化、高密度的板载电源**，TOLL是经过验证的优秀选择。

  

四.碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOE2ZAZibSnUDAic8Xc7OI8z2zWpDNQUFBIEy1cbdTVAFEovhTts72YNJgXk1IebExziasicRY2EE75TbIzh2KOpSVY7AT7KerS9xs/640?wx_fmt=png&from=appmsg)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPajKSG3sd5IMN9Rg8ephl97n2QT0e0ExRia1aicKxpusZXFaAnica2QPR1o6eqwjw58NfdsiaSQEAjjFgrbpe3N1FCTgwmuQPsblg/640?wx_fmt=png&from=appmsg)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMibaWJZyUFVvPza6tZW6Wr1vE3z4rLmaLSJ3eXJtwxO771qHrgreQvBK2hlUJX2bYIpABHxInib7RbiaXxnicVicSfvxLUBI1aZg5U/640?wx_fmt=png&from=appmsg)

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

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicV75jJicWhZquMhRd2ozp0WDxiatO73IiaAeEVuQwLN3XQmlUFJAtqpbibg/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicZejgkicIQudBicVuA3wrDnPfynvFOFYMgYm6U3p79IzDqrkLlUKp27Vw/640?wx_fmt=jpeg&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=31)

###   

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslAqnzicE90uUeYNBxn4SVFicEZbgXCW0bom11QxrtibSsOmLcRtAMSsyUvtGjqW0l3FBic4rr0DPeYhQ/640?wx_fmt=jpeg&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)