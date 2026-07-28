# SiC/GaN器件赋能AI服务器电源高效率、高功率密度


> 原文地址: [https://mp.weixin.qq.com/s/R8pIQql175fXQir58WOXrA](https://mp.weixin.qq.com/s/R8pIQql175fXQir58WOXrA)

AI服务器电源作为高性能计算和数据中心的基础设备，担负着为服务器集群提供稳定、高效电能供应的任务。目前，AI服务器电源产品已经具备高效率、低谐波、智能管理等特性。随着AI大模型的快速发展，算力需求快速提升，AI服务器作为算力承载的核心基础设施，其出货量有望快速增长。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ER7C9j2cqSVibvknUvMiciaKmcy8FsaLXZ0QiaeYTMlyZWibmhELicGRwFtq5g/640?wx_fmt=jpeg&from=appmsg)

AI服务器电源的作用是为计算芯片、内存、通信接口等模块提供稳定电压，同时满足高功率、高响应速度和精细化供电需求。其特点包括：

AI服务器电源作用

‌稳定供电‌：确保AI服务器内部核心组件（如GPU、CPU等）获得持续稳定的电力供应，避免因电压波动导致运算中断或数据丢失。 ‌

‌功率分配‌：根据不同负载单元的瞬态需求（如计算任务不均匀性），动态调整电压、电流参数，保障各模块高效运行。 ‌

安全保护‌：集成热插拔控制、过流保护、短路保护等功能，降低系统风险。 ‌

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERicJJcmH8lGhcEZXIWcqktibcHD9ShfgLWQaD5uxUDjia6454axOzC0ElQ/640?wx_fmt=png&from=appmsg)

数据中心电源架构

AI服务器电源特点

‌高功率密度‌：单机功率突破300kW以上，采用分布式板载电源模块设计，支持独立调控每条轨道的电压/电流参数。 ‌

‌智能化管理‌：通过数字电源技术（如DSP/MCU控制芯片）实时监测5项关键数据（电压、电流、功率等），结合AI算法优化能源分配。 ‌

高效率‌：转换效率可达97.5%-98%，相比传统电源提升约1%-2%，减少能源浪费。 ‌

‌架构优化‌：采用UPS、AC/DC、DC/DC三层架构，确保电路稳定性和适配性。 ‌

扩展性‌：支持模块化设计和小型化，适应分布式计算场景。 ‌

  

一、AI服务器电源发展史：三代技术演进

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ER9FsUskOTmPMLobwN7O0HX9co3Po82foibvbZMrCjnItBKSed1wgCssQ/640?wx_fmt=png&from=appmsg)

1\. 早期阶段（2018-2023） 

   功率水平：3-5.5 kW，输出电压12V（传统架构）。  

   技术局限：硅基MOSFET和IGBT为主，效率仅94%-96%，功率密度约20         W/in³。  

   痛点：GPU功耗增长导致电源裕量不足，散热挑战大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERUUdt3sHT2vZ9paiaTlickoiaWMTzduk2NdicvvMkQq08Rib8GNicBluhbeLA/640?wx_fmt=png&from=appmsg)

第一代 AI PSU 拓扑和设备技术示例。图片由 Bodo’s Power Systems 提供

2\. 第一代AI电源（2023-2024）  

   功率突破：5.5-8 kW，输出电压提升至54V（ORv3规范）。  

   技术升级：  

   PFC级：SiC MOSFET图腾柱拓扑（650V器件）。  

   DC-DC级：GaN全桥LLC，开关频率提升至100-500 kHz。  

   效率/密度：96%-97.5%，功率密度40 W/in³。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERbkqRDkZX0l9PiaoHJX55XzMhRiaLnBU5p1A1Qicev1yDTLcrLaXXWjQXA/640?wx_fmt=png&from=appmsg)

第二代 AI PSU 拓扑和设备技术示例。图片由 Bodo’s Power Systems 提供

3\. 第二代AI电源（2024-2025）  

   功率跃升：8-12 kW，输入电压升至347Vac（单相）。  

   关键技术：  

   三级飞电容图腾柱PFC（3-L FCTP），采用400V SiC MOSFET（开关损耗     降55%）。  

   三相LLC拓扑，输出电流纹波降低40%。  

  效率/密度：>97.5%，功率密度80 W/in³。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERK00x93gz4CKFxufjIciaWJqTE6v7z5v4XqfD9KAmuIslQs7TU45ib9kg/640?wx_fmt=png&from=appmsg)

第三代 AI PSU 拓扑和设备技术示例。图片由 Bodo’s Power Systems 提供

4\. 第三代AI电源（2025-至今）

   高压直驱：22 kW级，三相输入+400V输出（HVDC架构）。  

   架构革新：  

 Vienna PFC整流器（1200V SiC MOSFET）。  

   全GaN LLC转换器，支持零电压开关（ZVS）。  

   效率/密度：峰值效率>98%，功率密度120 W/in³。

  

二、第三代半导体（SiC/GaN）的核心优势

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERrAH1FWmgv69seDnHPibyBk5qRoMbChh37cRia7vW3ym0ODZVJZYNCcCg/640?wx_fmt=png&from=appmsg)

  

三、典型应用案例与技术突破

1\. 纳微半导体8.5kW电源（2024）

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERbEsT9lwQCsx5kkCPia58uksN9K45rVcOIxpicYfpPbBaMYStWdWfUicnQ/640?wx_fmt=jpeg&from=appmsg)

 技术方案：GaNSafe（650V GaN）+ GeneSiC（SiC MOSFET）混合设        计。  

 性能：效率>97.5%，纹波电流降低40%，器件数量减少25%。  

 适配场景：英伟达Blackwell GPU集群，解决传统数据中心供电不足问题。

2\. 英飞凌12KW高功率密度PSU技术（2025） 

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERmicecTqfeXT2BtqrlicyeRyPpxQ8BGxneK7RqOqdto6iauytppicUSFFlg/640?wx_fmt=jpeg&from=appmsg)

英飞凌推出的3KW-12KW服务器电源，均将混合使用硅、氮化镓、碳化硅三类晶体管开关，以实现 100 W / in³ 的高功率密度和 97.5% 的高转换效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERVM2upT5aibJGRicsDFlKVvNu9vYUsEE5wSs3Ney2m91O8vrEct8iacnibQ/640?wx_fmt=png&from=appmsg)

系统设计方法

效率标杆：100W/in³时高达 97.5%，包括所有/1U外形尺寸。

结合CoolSiC™、CoolGaN™、CoolMOS™、OptiMOS™ • 技术，旨在实现最高效率和功率密度。

模块化设计：2个6kW模块、多级拓扑结构、全新整体控制方案、全数字化控制

客户收益

完整的电源解决方案（PSU）：包括PFC + DC-DC、高效率、高功率密度

模块化设计：优异的轻载效率，易于制造

产品技术亮点

400V CoolSiC™ MOSFET、100V CoolGaN™晶体管、600V CoolMOS™ 8 SJ MOSFET、G5 650V CoolSiC™肖特基二极管、EiceDRIVER™ 1EDB、1EDN、2EDB、集成 800V CoolMOS™的CoolSET™ 反激式控制器、ISOFACE™数字隔离器、PSoC™和 XMC™微控制器

3\. 浙江大学智能供电芯片（2025） 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERA0hzpvP5AQ2EmZQ3WsFaAlCic5vkpK2XYmOPI15a5iaUqpia4REibuicJ0A/640?wx_fmt=png&from=appmsg)

   创新点：48V转12V GaN转换器，动态死区控制（纳秒级）。  

   性能：96.1%效率，电流检测误差±2.2%（-40℃~125℃）。  

   节能价值：大型数据中心年省数十亿美元电费。

  

四、器件选型关键考量

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5EReSgeVGCyq8SJHYCxQKDvW1WpZ5dKvtwoibKJogtrbHibyslFvcgoHH3w/640?wx_fmt=jpeg&from=appmsg)

1\. 功率层级匹配

   3-8kW：优选650V GaN搭配750V SiC二极管。  

   >10kW：需1200V SiC MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERnu6FjayKPxlEicANdJuuxicp4oOMmUqP8Lpt8fL7zyDicUicXou1hfNDFQ/640?wx_fmt=png&from=appmsg)

2\. 封装与热管理  

   高散热需求：TO-247-4。  

   空间受限：DFN8×8表贴（体积比TO-247小90%）。

3\. 驱动兼容性  

   选择阈值电压4V以上器件，避免噪声误触发。  

   栅极电压范围需兼容标准驱动（-4V~+18V）。

  

五、未来趋势

1\. 800V HVDC架构普及：2026年将成为AI数据中心标配，铜损降低30%。 

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERIX5RxFD7XxhK5MPR3nCN7WWvfK2aTTegxzFoBOvibaj6TVLbKXrycow/640?wx_fmt=jpeg&from=appmsg)

英伟达推动800V HVDC技术革新，引领数据中心电源架构变革 

2\. GaN/SiC复合模块：瑞萨推出“硅驱动兼容+双面散热”方案，支持22kW快充桩。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERtrGGTZtZgkxkj2zSGPwGgWQ9T4dhS7eCMg6bEssFKxBeIR81E6ACqw/640?wx_fmt=jpeg)

3\. 智能化集成：电流/温度传感内置（如浙大方案），提升故障响应精度。

  

💎 总结：

AI服务器电源从“提功率”向“高压直驱+智能控制”演进，SiC/GaN通过高频、低损、耐温特性成为核心引擎。选型需平衡功率需求、封装形式及系统兼容性，未来800V HVDC与第三代半导体深度融合将重塑数据中心能效标准。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl8xJQHe5HxouFf8icjva5ERSsQao80Bbg4ojicXCuBLEBqDLrESVicn02fSnX9wNXRq1q1rqHuv7zEw/640?wx_fmt=jpeg&from=appmsg)

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnw0Yktp4walxdzrTSATGk7lK5S9UY4J3yOFsTZ8h3tPDDibchiaKbgvzyX2Qv8iab66ibYBdLZzKYNKw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnw0Yktp4walxdzrTSATGk7QB9UgsuQgWLhmTa6mtKoQdKdMiaIsfOKXDAduJtCpkjCzOdKibBDhOyw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnw0Yktp4walxdzrTSATGk7exZXKdicB1zREdkaDTlzjRZEicewNaNDe060JrE4OCDkoreJPIxaCeFw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)