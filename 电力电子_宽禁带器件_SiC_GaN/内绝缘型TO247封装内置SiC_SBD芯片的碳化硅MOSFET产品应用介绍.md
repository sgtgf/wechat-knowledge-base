# 内绝缘型TO247封装内置SiC SBD芯片的碳化硅MOSFET产品应用介绍


> 原文地址: [https://mp.weixin.qq.com/s/ggyyEV556eLrNNLEB7JmGw](https://mp.weixin.qq.com/s/ggyyEV556eLrNNLEB7JmGw)

****内绝缘”通常指封装内部实现了电气绝缘，常见的是“绝缘基板”型封装（如LFPAK、SOT-227、模块类）或“全塑封”封装，其散热面（金属基板或外壳）与内部电路（漏极/源极/栅极）之间是电气隔离的**。**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNzboK6Y6XNewRLTjWaxNBDKreLrl0IpCrIPRN7oNdj8NzKUA6aNcgAd0ic4ZNNqNk8ldj9pZN90D0FrmMnO2Q8iaZ1tmnbsts2s/640?wx_fmt=jpeg)

**这与常规的“非绝缘”封装（如TO-247、TO-220、TO-263，其散热背板与漏极连通）形成对比。  
**

**一、封装定义：什么是内绝缘型TO-247**

**常规TO-247封装的金属背板（散热面）与内部芯片的漏极（Drain）是电气导通的；而内绝缘型TO-247封装的背板与内部电路是电气隔离的。** 这是两者最根本的差异。

## 1\. 结构与技术实现

内绝缘型TO-247封装（不同厂商命名略有差异，如ISO247、ISOPLUS247、TO-247-4 ISO等）在内部结构上与常规封装有本质不同：：

对比项

常规TO-247

内绝缘型TO-247

**背板电位**

与漏极（D）导通

与内部电路电气隔离

**内部基板**

铜框架（导电）

DBC/AMB陶瓷基板（绝缘导热）

**绝缘实现**

外部额外加绝缘垫片

封装内部集成陶瓷绝缘层

**引脚配置**

3-pin或4-pin（Kelvin源极）

相同，可直接替换

内绝缘型的核心技术是采用**DBC（直接覆铜）或AMB（活性金属钎焊）陶瓷基板**替代传统的铜框架。芯片焊接在陶瓷基板的顶层铜层上，底层铜层作为散热面，中间的高导热陶瓷层（如Al₂O₃、AlN或Si₃N₄）提供电气隔离。。

### 2\. 关键技术参数

根据多家厂商的产品资料，内绝缘型TO-247的关键参数包括：：

**绝缘耐压**：通常为2500VAC（1分钟）或3000VAC（1秒），满足安规隔离要求。

  

外形尺寸：与标准TO-247完全兼容（约40×15.9×5mm），可直接替换。

**引脚选项**：支持3-pin和带Kelvin源极的4-pin版本。

**工作温度**：\-55°C ~ +175°C（与常规SiC MOSFET一致）。

  

二、内绝缘SiC MOSFET产品介绍

  

1.内绝缘型TO247-4封装产品线

  

在2024年推出了2款内绝缘型TO247-4封装的SiC MOSFET产品线，电压1200V和1700V，内阻25mΩ和45mΩ，电流60A和100A。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPCMjDvFQAJVEyQspgkbI0EfHjvLfB00BXjGZFmaAwl3DjTvicyokpc0l033a89LwadSD4YK1CdqxgjfB7QtYjzrymcHEIc7dQs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNUkjs09ibHGwWpHfpIFVsCBr7CbSicYTG13x5hTAy0L51N5yf4yAJ4KjpQqmXnPtKDZsyJGNRurCq7VW92mPDymQOyre2NMbc5E/640?wx_fmt=png&from=appmsg)

内绝缘型TO-247-4封装SiC MOSFET产品列表

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPcYlOkmiafibYpCXSFAnrToSUWSgiaMy3tKuu5o8g5iaC0QPtUlLGhAicFPNdibqBp1wjhiarQ5wLEp19dIPqnPNXAcCvjgUZsoT9aCw/640?wx_fmt=png&from=appmsg)

常规TO-247-4封装结构示意图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtQ6LBVPXh8bgIRehQibLc5foOp4kicr9GLnQAaQMbSZib5yE8XaoZ9T16fZibV3TGzY5jsia1Y9t4xbhnlW6LPibJ3mbFbOtibWzKQs/640?wx_fmt=png&from=appmsg)

内绝缘型TO-247-4封装结构示意图

常规TO-247-4封装框架和漏极直接相连，非绝缘特性使得应用的时候必须外部安装绝缘片，将器件与散热器进行电气隔离。而内绝缘型TO-247-4封装使用特殊的封装工艺将承载芯片的框架与MOSFET背部散热片相互隔离，最终在MOSFET的漏极与其背部散热片之间实现电气隔离。

  

2.内绝缘型TO247-3封装产品线

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMoibwy308kqnOqfb3UK5iaiaS4MzXu76uep4DM2suwXdad6tu5867UC55icz5codW1picMWG9BjVXB2YRqu11G6scIE8pvE35u8kC4/640?wx_fmt=png&from=appmsg)

在2025年推出了2款内绝缘型TO247-3封装的SiC MOSFET产品线，内置SiC SBD芯片，电压650V和1200V，内阻12mΩ、16mΩ和45mΩ，电流150A、115A和60A。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM20LUL78XJicE9gN5I8wXdMl8KDZ8pKbXyNfqiaaHU9PbVWRnNFASicEIKffHp6GuDialGGsGWKlOt14cuN7oK9Fmib9ibOWINew28E/640?wx_fmt=png&from=appmsg)

内绝缘型TO247-3封装产品拓扑图

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO8DibiaViawPTfNaicy1A1dk6FRFYxFuVFiaxfmYibCnWbK34dVrdcUxXF36W1TDeOdzv8PEexPic8ibmHQGgVpJfFRic9uibBrjDxGDczM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMUYxgsdicsZsLTRZXn0QiabfJR7QD9EnBmGuHSzP6j6Rnicep0dicElIqedwWl134iceOs6BPy5vRldEFibU9FhQhhgtKktQLU8yGmM/640?wx_fmt=png&from=appmsg)

650V150A产品参数表

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMoZTqyOqrJbgnEfBAeMX1XxIdISTNx8MRL07RWfdoJxSToGwicibWrh1iaQImokQ4YcQibDyMgN4Wx9SGGdLgSJHGjib91N1d2IVNI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPcFiarCCR1IzfNuBHnvDcV80EmuqKghH3ibHYIHYLEHEsh3dwBzSnsFLfu2Ja8LLnKdIQIicsWLBqffOk2UAm12s8l4khSdgV99I/640?wx_fmt=png&from=appmsg)

1200V115A产品参数表 

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOX5n7gPArEf6XQrYxnnpUV9d7cxBV1axjWialu2c9AwfH7ibE6h9R6DDibTzBicjvBictR1W91d1r6LVEmQpOn3wwleRBsnELPMnia0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNfpWVEKGlTO8Mia6N2CGF7ZIELvELVH4jicxKe46LwHpBNk2V76k5KP7PYo5KuicYDhatEDM6ZicL5BaIlmuoaIibzvb8CpAEiaTFKc/640?wx_fmt=png&from=appmsg)

1200V60A产品参数表

  

三、应用中的优势分析

  

1\. 热性能优势

**核心结论：内绝缘型TO-247的结到散热器热阻比"常规TO-247+外部绝缘垫片"的方案更低。**

热阻对比数据如下：：

方案

结到散热器热阻 Rth(J-H)

同电流下结温

常规TO-247 + 普通绝缘垫片（1.8 W/mK）

基准值（100%）

基准值

常规TO-247 + 高性能绝缘垫片（6.5 W/mK）

约降低20~30%

约降低15~20°C

**内绝缘型TO-247（Si₃N₄陶瓷）**

**降低约64%**

**降低约60°C**

实测数据显示：在相同40A加热电流下，内绝缘型TO-247的结温比常规TO-247加绝缘垫片低约60°C，温度摆幅（ΔTJH）降低53%。。

**热阻更低的物理原因**：

常规方案需要**两层导热界面**（器件→导热硅脂→绝缘垫片→导热硅脂→散热器），每层都有热阻。

  

内绝缘型将陶瓷绝缘层集成在封装内部，**减少了一层导热硅脂和一层接触界面。**

### 2\. 安装与生产效率优势

对比项

常规TO-247

内绝缘型TO-247

需额外绝缘垫片

是

否

需绝缘垫圈/套

是（螺丝绝缘）

否

多管共用散热器

需考虑共电位问题

可直接共用

装配工序

复杂，需对齐垫片

简单，直接贴装

内绝缘型可直接将器件安装到散热器上，无需处理绝缘垫片的对齐、避免垫片破损风险，**简化生产流程，提高装配效率和良率。**。

### 3\. 系统成本优势

虽然内绝缘型单颗器件成本略高于常规TO-247，但从系统层面看可带来成本节约：：

**BOM成本节约**：无需采购绝缘垫片、绝缘套/垫圈。

**装配成本节约**：减少工序工时，降低工艺管控难度。

**潜在成本节约**：

因热性能更优，可用**更高Rds(on)的芯片**实现相同功率（芯片成本降低）。

  

可减少并联数量（相同功率需求下，单颗器件可承载更大电流）。

Littelfuse的评估数据显示，采用内绝缘型方案在系统层面可节省**高达50%的器件数量和PCB面积**，每安培成本（$/A）降低约50%。。

### 4\. 可靠性优势

可靠性维度

常规TO-247 + 外置绝缘垫片

内绝缘型TO-247

绝缘垫片老化/破损风险

存在（高温循环、安装应力）

无（内部陶瓷层集成）

CTE匹配

Si/铜框架/绝缘垫片差异大

Si/陶瓷AMB基板CTE匹配更好

功率循环耐受性

基准

显著提升

异常失效后绝缘

绝缘垫片可能破损失效

即使管体破裂，陶瓷绝缘层仍可能存在

内绝缘型封装的陶瓷基板与SiC芯片的热膨胀系数（CTE）更匹配，显著提高了功率循环耐受能力，从而延长器件寿命。。

### 5\. 电气性能优势

**降低共模EMI**：内绝缘型封装内部芯片到散热器的寄生电容更小且固定，减少了高频开关噪声耦合到散热器（通常接地）的路径，有利于EMI设计。

**满足安规爬电距离**：内绝缘型封装的安装孔与内部电路之间满足更大安全距离要求，在某些高压应用中可简化PCB布局。

## 四、选型建议与应用场景

### 优先选择内绝缘型TO-247的场景：

**多管并联共散热器**：电机驱动、光伏逆变器、OBC等需要多个功率管共用散热器的应用，内绝缘型可免去绝缘垫片和复杂的共电位处理。

  

**高功率密度设计**：空间受限、需要紧凑布局的场景，内绝缘型热阻更低，可在相同散热条件下输出更高功率。

  

**高可靠性要求**：车载应用、充电桩等对长期可靠性要求严格的场景，避免绝缘垫片老化风险。

  

**自动化大规模生产**：简化装配工序，提升生产效率和一致性。

  

**高频硬开关拓扑**：图腾柱PFC、DAB等共模EMI敏感的场景，内绝缘型有助于抑制干扰。

### 需权衡的因素

**单器件成本**：内绝缘型单颗成本高于常规封装。

  

**选型范围**：目前内绝缘型TO-247的电压/电流覆盖范围略小于常规封装（主流厂商正在扩展）。

  

**散热器表面要求**：内绝缘型仍需使用导热硅脂填充接触面，对散热器平整度有要求

## 五、总结对比表

特性

常规TO-247

内绝缘型TO-247

背板电位

漏极电位

电气隔离（悬浮）

外部绝缘垫片

必需

不需要

结到散热器热阻

较高（受垫片性能影响）

降低50~64%

同功率下结温

基准

降低约60°C@40A

功率处理能力@Tj=130°C

基准

提升约170%

装配复杂度

复杂（需垫片、绝缘套）

简单（直接贴装）

系统级成本

BOM成本低，但装配成本高

可能降低50%系统成本

可靠性（绝缘相关）

依赖外部垫片质量

内部集成，更可靠

与标准TO-247引脚兼容

\-

是

**内绝缘SiC MOSFET**并不是“替代”常规SiC MOSFET，而是针对**高集成度、高频、高可靠性、自动化生产**等场景的优化方案。在实际选型时，建议结合你的**拓扑结构、散热方案、EMI要求、生产工艺**来综合判断。

  

碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkAy1M8MxOvB4JCoicClRoib9DvjH8bwl064QibI9DortQn5ib63D2c9lPwsbUp7335sGLL0u0r7b2LXvmFAqCUEvVUwYJaEU0hN0/640?wx_fmt=png&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=7)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMSCJiaKfMouZBK05N93IiaHRQTYrEzLDIK2XZXMCCSUBAbxp6uTsMpevGibNial2gicdkzcY5WwZDIWicfwSPRdR4RyxCefh2ROBpSY/640?wx_fmt=png&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=8)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNHluWKG94eKbYEEgDwodK45INsgWhflrStLY2Ngh8ibVte18sgbnKJRx0iaasRA7Vthft9etO0ZgPNc4GHAsolliaCz5yEGwgwA4/640?wx_fmt=png&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=9)

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

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMMDib5nwmRmCwSFzlNFic5cGuiblIBlkNoLC4DoZt4mdp4dqqSkycfZGubgWAice2wed2Wbjp5iaZh4ribWqHKQMibIINh0SEcHTRtiaE/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPLS0cD76tVdLxq2kM5OhLf2OZuKKqtRLRow95oQpIT5iclYqRqT6sgTkib5Q66NQ06bo0fAbTHJOehAV4A6jpaulyiaWcQRd3eWY/640?wx_fmt=jpeg&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=31)

###   

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpO3gRzKibXQhQAWFiaaO7zUXzYYuJcicl1n9GEiazZQxsAibOPSG2n55dQWbse9P8lpzicia1BuR1tYGdPwZmMBnjx6n05Xgg7kZtZiauw/640?wx_fmt=jpeg&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)