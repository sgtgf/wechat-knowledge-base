# 车规级HPD封装三相全桥碳化硅模块在电机控制器中的应用优势


> 原文地址: [https://mp.weixin.qq.com/s/kBsZtXRQCFp-IkN1vooQBw](https://mp.weixin.qq.com/s/kBsZtXRQCFp-IkN1vooQBw)

# 随着新能源汽车三电系统的技术变革，碳化硅（SiC）功率器件凭借其耐高压、耐高温、高频低损耗等特性，正加速渗透至新能源汽车电控系统，推动电控制造效率实现质的飞跃。从主驱逆变器到车载充电机，从电机控制器到充电桩，碳化硅器件的规模化应用不仅提升了系统能效，更通过轻量化设计、集成化布局和成本优化，为新能源汽车产业的高质量发展注入强劲动力。

#   

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpMPSClez5SliaDUlKibo1FRxGqbdRXVRIWQ7S0doTUibsChNcJ1w5V3nOwppVG0QWvcSmNJglUic3Fdx0QH27eQ5LAglFc71Ul53uk/640?wx_fmt=jpeg&from=appmsg)

# SiC器件在新能源汽车中的应用优势  

#   

# 目前，车规级功率半导体模块封装正呈现出多元化的发展趋势。既有Infineon HybridPACK™系列代表的HPD封装，也有Direct Cooled Module (DCM) 为代表的直冷方案，还有Tesla的TPAK、致瞻等中国厂商的ZPAK、以及博世的PM6、Danfoss eMPACK，都在不同的场景中展示了独特的技术路径。此外，新兴的芯片内嵌PCB封装、混合芯片封装，则代表了未来高集成度与轻量化方向。其背后的思考远超越技术本身，更关乎整车的**平台化战略**、**供应链安全**与**终极成本控制**。

#   

# 一、碳化硅（SiC）HPD封装三相全桥模块的性能特点

#   

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPcCVcd2ko0mqoScvX4glXFpNKEf0UnbV5WNN1LDjL00svsFtgicasnUR4h0rabuAoHuadibIOuxG2k6An1MkK4O9VFTFw6YkytQ/640?wx_fmt=jpeg)

HPD（High Power Density，高功率密度）封装是专为高压、大电流功率器件设计的新型封装形式，搭配碳化硅材料的固有优势，使得HPD封装的三相全桥SiC模块，相比传统硅基（IGBT）模块、普通封装SiC模块，具备更优异的综合性能，尤其适配新能源电机控制器的高要求工况。

## 1.碳化硅材料的固有性能优势

##   

碳化硅作为第三代半导体材料，其禁带宽度为硅的3倍，导热系数为硅的3倍，临界击穿电场强度是硅的近9倍，相比传统硅基器件，具备三大核心性能优势：

一是耐高温，SiC器件结温可稳定工作在175℃甚至更高（部分型号可达200℃），远超硅基IGBT的150℃极限，适配电机控制器长期高负荷运行的高温工况；

二是低损耗，SiC MOSFET导通电阻极低，且无拖尾电流，开关损耗仅为硅基IGBT的1/10~1/5，大幅降低电能转换过程中的能量损耗；

三是高频特性优异，开关速度可达硅基器件的5~10倍，可实现更高的开关频率，为电机控制器的小型化、高效化设计提供基础，同时减少谐波干扰，提升控制精度。

## 2.HPD封装的结构性能优势

##   

HPD封装针对碳化硅器件的高频、高功率特性进行了结构优化，完美契合三相全桥拓扑结构的应用需求，其核心封装性能的优势体现在：

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpODSzs8s7bxsm8VqZJ8W26sJDOxv1K4mMDdVCSAq3brojk7tIUfRr3g2aEJ5R03v5YuBAPVT8QQPibAfBrI8FdHFia3lUaBMUBes/640?wx_fmt=jpeg&from=appmsg)

HPD模块芯片布局图

高功率密度：采用薄型化基板设计（基板厚度仅2.5mm，远低于传统模块的5mm），体积紧凑，功率密度较传统封装提升30%以上，可大幅缩小电机控制器的体积和重量，适配新能源设备（如车载电机控制器）“寸土寸金”的安装空间需求；同时模块集成度高，部分型号内置NTC温度传感器，可实时监测结温，支持精准热管理，简化外围电路设计。

低寄生参数：通过优化引脚布局（如短距离源极连接），大幅降低功率回路的寄生电感，部分HPD封装模块寄生电感可低至10nH以下（部分型号甚至可达5nH以下），有效抑制高频开关过程中的电压过冲，避免器件击穿失效，同时减少电磁干扰（EMI），降低电机控制器的EMC设计难度，契合高频化应用需求。

高可靠性：采用陶瓷基板（如Si₃N₄ AMB陶瓷基板）与椭圆PinFin散热结构，散热性能优异，可快速导出器件工作过程中产生的热量，进一步提升模块的耐高温能力和长期工作稳定性；同时封装结构的机械强度高，抗振动、抗热循环能力强，符合车规级、工业级可靠性标准（如AQG324、ISO16750-3），适配复杂工况下的长期运行需求，其功率循环与热循环能力通过先进银烧结和DTS工艺进一步提升，确保长期可靠性。

适配三相全桥拓扑：HPD封装的三相全桥SiC模块，内部集成多个SiC MOSFET（组成三相全桥的上下桥臂），无需额外拼接器件，可直接接入电机控制器的主电路，简化控制器的电路设计、组装流程，降低装配误差，同时减少器件间的连接损耗，提升系统整体效率，部分型号可轻松实现550A以上出流能力，适配800V高压母线电压需求。

二、HPD封装三相全桥模块的产品介绍及应用

HPD封装的SiC模块，搭载**自研第三代车规级碳化硅MOSFET芯片，封装此规格的MOSFET满足车规级**AEC-Q101** 标准，模块也做了 **AQG324** 的车规认证。模块参数（电压650V、1200V、1700V，电流400A、600A、800A、1000A），**全面适配**400V、800V及千伏系统的电压平台**，覆盖**80~350kW功率范围**，为高效高可靠的主驱电控系统提供核心技术支撑。

HPD模块特点 ：

1\. 最高工作结温175℃； 

  

2\. 第三代模块寄生电感低于10nH，降低开关损耗；

  

3\. 参数表现：    \- VDS：650V~1700V 

                           - ID：400~1000A 

                - RDS(on) ：1.3~6.5mΩ

  

HPD模块产品 ：

HPD封装的SiC模块，应客户需求，按功率端子做了长端子和短端子；按散热方式做了水冷散热（**PinFin）**和风冷散热（平底板）。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOlyCRiaY4rkNMs9ZsibxmzbOLxhiae0mZH7n76FhZwHOn2aHOjcIV7mic0RFsnEnvEZINrtCHYDrhoVNOM8TPg8Lr8aFDd9OEuzL4/640?wx_fmt=png&from=appmsg)

模块的拓扑图（常规端子）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN1UMwhicUibiaE271p3icnKvZfm5PBfEaibgMt9jITEzar1I2r2k5c9yXA1d1059MbY8YU8kWwoRv7dx2JIAp9byPHictNmArKPyW8I/640?wx_fmt=png&from=appmsg)

模块的拓扑图（长端子）

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpP4wTWyM4SwFPU7USJx5fs6Q6sNfeHX3e0Xhcnn2ia48bKE1icPxHWIksotae7HicjxNXic7BJhEDwdcQ4pHf5sS5kaJSAtMqYZO9k/640?wx_fmt=jpeg&from=appmsg)

模块的实物图（长端子）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNTJoIAViadwEQ9LLcuFtkexFLibziaT9gibNdImcTBKWf1tnPB8enlGZtjMPhCEJbaLql700OwJMexoQ3OxT4u7MTYiahqeTB2Tibx8/640?wx_fmt=jpeg&from=appmsg)

模块的实物图（水冷散热）

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPJQ0FNibOCOGt5ia32iaM50sQQUzq5ibhOPloUvB74Zblsw3RqrSdibnHMX6IrWcuTiaa48gulhxibqhlbYHGk1Jxric0vWJEJribFAiakM/640?wx_fmt=jpeg&from=appmsg)

模块的实物图（风冷散热）

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOxSbNyx5rg68Ox4VPWo9awVLrEflboKj1egFeia0cBtLps1WO2gzZBiavEHqwUXMr2zeicunP6jwjQ7vcfZ1E0sJBWL8JY87RRIc/640?wx_fmt=jpeg&from=appmsg)

HPD模块+驱动板（驱动板是自主开发，方便快速测试验证）

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOLDcBNxWpF1AmgHukHlmb2Jp1icxSge6GPpHQWmWrUa1v8Dgan7Y5bicpnA78czpdsI4b4Y2HFZFiaQ4aUywl49O4iaRIiatzKxyrA/640?wx_fmt=jpeg)

模块+驱动板的实物图

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMRQKwUYaAGDQBpYctnqS9l2kiax1mFT1zH5ejcCNpN9M9biauxBGLdMeNgYTuzS606bB14pWTf8qKWdhZuciaZcqkqCTMgoYR454/640?wx_fmt=jpeg)

## 第四代SiCMOSFET技术平台产品线

# 

  

HPD模块应用场景 ：

# HPD封装的碳化硅模块，主要用于新能源汽车主驱逆变器、工业控制器、新能源发电、光伏逆变等领域。

#   

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPpWFzxA5DCaxhTIKOic5rxmaKHYAwmeGYjP54CTgwBIic5e7ySpsibgM32iaRqdAhY4I3q2a7OMhGgZyn9ZjQ7QUZ2ABgTouJPBNo/640?wx_fmt=jpeg&from=appmsg)

# 总结

#   

新能源电机控制器是驱动系统的核心，功率模块则是控制器的“功率心脏”，其性能直接决定了控制器的效率、可靠性和体积。HPD封装的碳化硅三相全桥模块，凭借SiC材料的低损耗、耐高温、高频特性，以及HPD封装的高功率密度、低寄生电感、高可靠性优势，应用于电机控制器中，可实现效率提升、体积缩小、响应加快、可靠性增强等多重价值，完美适配新能源领域的发展需求，也是你设计电机控制器的优质选型。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMWZObHWnd6ibGxmvGhrQn1vPLp77gj7ldKYicxBDMPllYd3tWfXH7G2ZcWzVOJLjRUgy3aibdY3Anu0dHDkCdQd3KRSQNrSQydbs/640?wx_fmt=jpeg&from=appmsg)

未来，随着碳化硅技术、封装技术、控制技术的不断升级，碳化硅电机控制器将朝着高效化、小型化、集成化、智能化、低成本的方向发展，HPD封装作为适配高频、高功率场景的核心封装形式，将在其中发挥重要作用。

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