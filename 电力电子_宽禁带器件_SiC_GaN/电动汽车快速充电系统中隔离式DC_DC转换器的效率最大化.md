# 电动汽车快速充电系统中隔离式DC/DC转换器的效率最大化

原创 Chris New SiC碳化硅MOS管及功率模块的应用 2025-07-26 07:25 广东

> 原文地址: [https://mp.weixin.qq.com/s/7Us6JcmOToLDF3GkELbORA](https://mp.weixin.qq.com/s/7Us6JcmOToLDF3GkELbORA)

文章来源：APEC2025(Wolfspeed)

作者：Chris New, Jonathan Hayes, Austin Curbow

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsEkZCWiafjybghDdaibcSmuhxmzZzyaZDMZaofhhoY30j6icNhzcQAYhTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9Qcvs1XUuxF7MESQwO0wPXQoicrxMspPy9aHGwNTlFFk660leXAIXbrBSFbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9Qcvs4k7p9WTD214BVbEkzZz0L22lkJicyOe91P7lSUBZEF4PRreqSc6EGMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsB7yYqT74GHc2swTI3GWYbAbGv6lZLzSJEtcSrYOaLYHROaNaebZSsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsPXMNaqP6ibCJKdWXgAAYBy1GakQMAJEVXI9icK925CK2wOEZd0Ipasmg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsDt0svdSibPmw5GliaYfn6HrQIbnPI3Ghe9OjvIibHpO5ANSicmibWVrItYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsFma7Ra7mvXl8owjTlPibtkzABzzWic96yTJ4ond1ZlC8nZflWCB475icw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvskVOzicwM1Zpzbtx0ibmIYkpXtUXicQiazVg2ERILs1NpxEhAeeRzE8fxfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsNmzQcmk3uqRBaQJdfx1GteHBThOlWic2GorolNSbgo0OicYQHGx1FLmg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvspSy0iaW55feX5P7WKpiahVrrjWyTxo4wibBZ3gs30MQdojphL7MPO9qyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9Qcvsg3ovdJ0f1vqssaJ1mYUpAiagxYvTGEV5vsDTeicTCDtGFHoYbAVXt1Aw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsrXoeMwjmSB3ZnZvoII1iaSTdAH3vL84FedlaktKAPQSsnt6npTicC9YA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvseKicrgDTkmHeWzULFvWjHrHk6adPPX5UueibG8pXicicN4hz4W3aibSI6Sg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsSvicRF6hNEthYNiaEiazmpmxdpPeTiaITB8P0iaMwXnpGeGZib0Izy35GdMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9Qcvs8oZOB8vRrOmMnwX1yIvTx483aDl0fDBuiaiaCGhTOs95M3QBgN5wYhtg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsWhHExj4fia5KOaGvZEVDrV3dDVr6pLdBNk50NGIhoeomTpNZs5dVVtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvswFeWZsdBB0AmWicBxxGDw9D8Bq2mIU93QpuibCQjDEMWX4g3rmqziajeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9Qcvs5icyjTs1H17IZl8Rpm5ibvHyE5mcpHozBhIlXEVyo8nWl92n6QSAKf2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsoRy8nNLvfiaIQOTC8mZLibS5rfkUAFONLllTza7NmK2yxI5qkTnW9wvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsIMe9kcfII0NPtz36j8z8WRrCyT6oE7xrsA7VV5bLrNGFhIaJI0OwHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsMT6PPfn7kOVo8EhibPxOCTibN0vo9dAd9ibwT29G2xrvRmHuaicbviagiayg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXYqgNeibzvxB2Tsfia9QcvsnlU8sv5kYIAs1t3gv47GrJC6RicTqm1gGTic82aj1mo4Bp6HjicP8UhUQ/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

在电动汽车快速充电系统中，隔离式 DC/DC 转换器采用 SiC 器件实现效率最大化，需从拓扑优化、器件选型、驱动设计、热管理及系统协同等多维度展开。以下是基于最新技术进展的深度分析：

### 一、拓扑结构与 SiC 特性的深度适配

###   

**LLC 谐振拓扑的效率突破**  
采用全桥LLC谐振拓扑结合SiC MOSFET，可在宽输入电压范围（如650-800V）实现零电压开关（ZVS），开关损耗降低70%以上。例如，Wolfspeed的CRD-22DD12N参考设计在800V电池电压下实现97% 的峰值效率。通过优化谐振腔参数（如 Lr=5μH、Cr=22nF），可使SiC MOSFET的Coss（输出电容）在ZVS过程中完全放电，避免硬开关损耗。英飞凌 CoolSiC™ Gen2 器件通过元胞结构优化，将Coss降低至传统SiC器件的 60%，进一步提升谐振效率。

**双向 DAB 拓扑的动态响应优化**  
双有源桥（DAB）拓扑在800V 高压平台中支持双向功率流动，动态响应速度较IGBT提升3倍。Qorvo的SiC FET采用共源共栅结构，在30kW DAB模块中实现ZVS范围扩展至负载的20%-100%，关断损耗较平面SiC MOSFET降低 74%。通过数字控制算法（如模型预测控制）动态调整移相角，可在电池电压波动（240-430V）时保持效率 > 96%。

### 二、器件选型与参数优化策略

###   

**SiC MOSFET 的关键参数匹配**

**低RDS (on) 与高可靠性平衡：选择RDS (on)≤15mΩ 的器件（如 Wolfspeed C3M0015120K），在150℃结温下RDS (on) 仅增加12%，满足长期高温运行需求**。英飞凌CoolSiC™ Gen2通过深沟槽栅技术，将单位面积导通电阻降至 7mΩ・cm²，同时短路耐受时间保持 2μs，保障系统可靠性。

**寄生参数抑制：采用TO-247-4引脚封装（如 ROHM 第4代SiC MOSFET），通过开尔文源极设计将寄生电感降低至 5nH 以下，减少开关振铃和 EMI**。

**SiC JBS 二极管的协同增效**  
输出整流采用SiC JBS二极管（如 ROHM SCS210KE2），反向恢复电荷 Qrr<10nC，较硅基快恢复二极管降低 90%。在 6kW DC/DC 转换器中，SiC JBS二极管使整流损耗从18W 降至3.2W，效率提升1.2%。其正温度系数特性（ΔVf/ΔT=+1.5mV/℃）还可实现并联均流，避免热失控风险。

### 三、驱动与热管理的系统级优化

###   

**栅极驱动的精准控制**

**动态栅极电阻调节：采用TI UCC21750 隔离驱动器，通过可编程栅极电阻（Rg=3.3Ω~10Ω）优化开关速度。在50kHz开关频率下，Rg=5Ω 时开关损耗较固定Rg降低15%**。

**负偏压保护：施加- 3V关断电压（Vgs\_off），可抑制米勒效应导致的寄生导通，尤其在母线电压突变时（dV/dt>100V/ns）仍能保持可靠关断**。

**高效散热与材料创新**

**氮化铝基板应用：采用热导率 320W/m・K 的氮化铝（AlN）AMB 基板，结壳热阻较氧化铝基板降低60%。特斯拉Model 3的SiC逆变器采用该技术后，芯片结温降低25℃，充放电效率提升8%**。

**微通道液冷集成：在30kW DC/DC 模块中，铜 - 氮化铝 - 铜微通道热沉将热阻降至0.15K/W，较传统翅片散热体积缩小40%，同时将器件结温波动控制在 ±2℃以内**。

### 四、动态负载与宽范围运行的效率保障

###   

**数字控制算法的动态适配**  
采用STM32G474微控制器实现全数字LLC控制，通过自适应频率调节（80kHz~270kHz）和占空比优化，在200V~1000V输出范围内保持效率 > 97.5%。在轻载（1kW）时，通过脉冲频率调制（PFM）将开关频率降至 30kHz，进一步降低驱动损耗。

**宽范围 ZVS 的实现**  
Qorvo的SiC FET通过共源共栅结构将Coss降低至15pF，配合缓冲器电路（R=10Ω，C=22nF），可在负载变化20%-100%时维持ZVS。在100A电流下，关断损耗仅为传统SiC MOSFET的26%，有效解决动态负载下的效率衰减问题。

### 五、成本与可靠性的平衡策略

###   

**系统级成本优化**

**模块化设计：Wolfspeed的22kW DC/DC模块通过SiC器件集成，使PCB面积减少70%，磁性元件体积缩小50%，整体BOM 成本较硅基方案降低18%**。

**国产器件替代：采用650V-1200V SiC MOSFET，在40mΩ规格下价格较进口产品低，同时动态Ron 退化 < 5%，满足充电桩等中端市场需求**。

**可靠性增强技术**

**短路保护机制：英飞凌CoolSiC™ Gen2通过退饱和检测（Vds>1.5V 时触发），在2μs内实现软关断，避免硬关断导致的电压尖峰（<1200V)**。

**长期耐久性验证：ROHM第4代SiC MOSFET通过1000次温度循环（-40℃~175℃）测试，焊点可靠性较传统焊接提升3倍，满足车规级10年寿命要求**。

### 六、典型应用与实测数据验证

###   

**800V 高压快充模块**  
采用Wolfspeed 1200V SiC MOSFET（C3M0032120K）的360kW充电站，在800V输入、500A输出时效率达98.2%。其模块化设计支持并联扩展至1.2MW，功率密度提升至 450W/in³。

**双向车载充电机（OBC）**  
英飞凌11kW SiC OBC方案采用全桥LLC+三相PFC拓扑，正向充电效率 96%，反向逆变效率94%。通过SiC 器件的高频化（200kHz），体积较硅基方案缩小 35%，同时支持 V2G 功能，提升电网互动灵活性9。

### 七、未来技术趋势与挑战

###   

**器件技术突破**

**超结SiC MOSFET：英飞凌研发的深沟槽超结结构可将RDS (on) 再降低 20%，预计2026年量产，适用于1500V 以上高压场景。**

**双面冷却封装：Qorvo的E1B模块采用银烧结技术，热导率提升至传统焊接的6倍，支持200℃结温长期运行**。

**系统协同创新**

**AI 驱动的动态优化：结合机器学习算法实时预测电池状态，动态调整开关频率和占空比，可在全工况下实现效率 - 损耗最优平衡。**

**碳化硅 - 氮化镓混合架构：在MHz级辅助电源中采用GaN实现高频整流，与 SiC主电路协同，进一步提升整体效率。**

  

**结论**：

SiC 器件在隔离式 DC/DC 转换器中的效率最大化需通过拓扑创新、参数精细匹配、数字控制及热管理的深度协同。随着国产SiC产业链成熟（如8英寸晶圆量产）和车规级可靠性验证完善，SiC方案已从高端市场向主流快充系统渗透。企业需以系统级思维整合技术资源，在效率、成本与可靠性间找到最优解，抢占新能源汽车功率电子变革的先机。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcIL9s9icLpA7sMkZl1yeAoJ70pnzOEicPx72xfic8DAlykF9ISV9UaWFibgtA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=t77ao96h&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILvxnibEN9LH8II05JCjJuHZ0eJDvLRlLLPec3gpN4R5gy7IAvkRDiatdw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=mh06mxt7&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILQftGrb0sLqYcs0hr4mZSf1WbuCoQjtIcgLmencF3V61K3BE4h5A4Sw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&randomid=zcsymlzn&tp=webp)