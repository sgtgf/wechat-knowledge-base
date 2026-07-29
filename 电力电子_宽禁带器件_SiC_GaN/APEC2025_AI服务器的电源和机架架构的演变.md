# APEC2025:AI服务器的电源和机架架构的演变

原创 Sam Abdel SiC碳化硅MOS管及功率模块的应用 2025-07-14 11:57 广东

> 原文地址: [https://mp.weixin.qq.com/s/ysRVBNmWD\_76ZyS\_es1wEw](https://mp.weixin.qq.com/s/ysRVBNmWD_76ZyS_es1wEw)

文章来源：APEC2025(Infineon)

作者：Sam Abdel-RahmanInfineon Technologies

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_000_e715ba461f55.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_001_859e8fc35c2e.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_002_8d9f7df1e0bf.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_003_511416ddb622.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_004_ed7a4e4a4c89.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_005_e17d7e754437.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_006_745474694d9c.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_007_af2b5f00ffc9.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_008_7c16f918c333.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_009_64d506fc1008.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_010_98d365652afe.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_011_76b4fed424d2.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_012_25db7b7e6370.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_013_ac6c75191b14.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_014_0fe8db90ebbc.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_015_844d07cee0bd.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_016_4abc58edffe0.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_017_571915190fe7.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_018_357f07a1e184.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_019_1d22e50a551a.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_020_a3766e4d0ede.png)

![](APEC2025_AI服务器的电源和机架架构的演变_images/img_021_66c7cfc952da.png)

注：文字与报告无关

英飞凌在 3kW 至 12kW 功率范围内的 AI 服务器电源方案，深度融合了硅（Si）、碳化硅（SiC）和氮化镓（GaN）器件的技术优势，推动了电源架构与机架设计的持续革新。以下从电源演变、机架架构升级及器件优势三个维度展开分析：

一、AI 服务器电源架构的演变与英飞凌方案

1\. 第一代 AI PSU（5.5-8kW）

技术特点：采用单相输入（240-277V AC），输出 50V DC，遵循 ORv3-HPR 标准。PFC 级采用交错图腾柱拓扑，快臂开关使用650V CoolSiC™ MOSFET，慢臂开关为600V CoolMOS™ SJ MOSFET；DC-DC级为全桥LLC，使用 650V CoolGaN™晶体管，次级整流器和ORing采用80V OptiMOS™ MOSFET。

英飞凌方案：3kW 级产品（如基于 XMC1400 的 3.3kW 方案）采用无桥图腾柱 PFC +半桥 LLC 拓扑，峰值效率达98.5%，开关频率100kHz，支持宽输入电压（110-265V AC），适用于高密度计算场景。

2\. 第二代 AI PSU（8-12kW）

技术突破：输入电压提升至240–347V AC，输出仍为50V DC。PFC级升级为三电平飞跨电容图腾柱（3-L FCTP PFC），采用400V CoolSiC™ MOSFET，其品质因数（FoM）优于650V器件，且RDS (on) 温度系数低（100°C 时仅增加 11%）。DC-DC级采用三相LLC拓扑，初级侧使用750V CoolSiC™ MOSFET，次级侧为80V OptiMOS™ ，提升功率密度并降低纹波。

英飞凌方案：12kW PSU效率达 97.5%，功率密度 100W/in³，支持 300kW +机架，通过混合SiC与GaN器件实现高效转换，同时减少冷却能耗 30%。

3\. 第三代 AI PSU（三相架构，最高 30kW）

架构革新：转向三相输入（415-600V AC），输出 400V DC，PFC 级采用 Vienna 整流器，使用 650V CoolSiC™ MOSFET 与 1200V CoolSiC™二极管；DC-DC 级为全桥 LLC，初级和次级均使用 650V CoolGaN™晶体管，两个 LLC 级串联 - 并联组合供电。

英飞凌优势：通过 CoolGaN™双向开关（BDS）替代分立器件，减少 40% 元件数量，提升芯片利用率，同时支持高频开关（>1MHz），动态响应能力显著增强。

二、机架架构的升级与电源适配

1\. 传统架构（单节点独立计算）

局限性：每个服务器节点独立供电，GPU 数量有限（≤8 个），机架功率通常低于 50kW，依赖以太网 / InfiniBand 横向扩展，无法满足 AI 算力需求。

2\. 机架规模架构（300kW+）

技术演进：高速互联：如Nvidia NVL72机架采用72个 Blackwell GPU，通过NVLink 5实现全互连，需高密度电源支持瞬时峰值功率。

配电优化：输出电压从 50V 提升至 400V，母线电流降低 80%，减少线缆损耗；三相输入架构降低配电电流，提升能效。

英飞凌适配：12kW PSU 支持 400V 输出，配合 OptiMOS™ TDM2454xx 四相模块（2A/mm² 电流密度），实现垂直供电（VPD），缩短电流路径，降低电阻损耗，适配 50kW+机架。

3\. 未来趋势

硅光子技术：若突破集成障碍，可替代电互联，提供更高带宽和更低延迟。

高基数开关：减少交换机数量，采用两层网络拓扑，提升可扩展性。

三、Si/SiC/GaN 器件的应用优势

1\. 碳化硅（SiC）

高压场景：650V/1200V CoolSiC™ MOSFET在PFC和DC-DC级替代硅器件，开关损耗降低40%，支持更高输入电压（如 3-L FCTP PFC 中的 400V 方案），且在高温下性能稳定（150°C 仍保持高效）。

成本优化：400V CoolSiC™ MOSFET的FoM优于650V器件，RDS (on) typ 提升 20%，降低BOM成本。

2\. 氮化镓（GaN）

高频优势：CoolGaN™晶体管在LLC拓扑中开关频率可达1MHz 以上，Qoss（输出电容电荷）极低，实现零电压开关（ZVS），动态响应速度提升50%，适用于GPU瞬时负载变化。

集成创新：CoolGaN™ G5 集成肖特基二极管，消除反向传导损耗，死区时间放宽 30%，简化设计并降低 EMI。

3\. 硅（Si）

基础支撑：OptiMOS™系列在次级整流和 ORing 中提供低导通电阻（如 80V OptiMOS™ 5的RDS (on) <10mΩ），成本效益显著；CoolMOS™ SJ MOSFET 在慢臂开关中平衡性能与成本。

混合架构：Si与SiC/GaN 结合（如 3kW 方案中的 CoolMOS+CoolSiC 组合），在效率与成本间取得最佳平衡。

四、技术价值与行业影响

能效提升：英飞凌12kW PSU 效率达97.5%，相比传统方案（85%-90%），每机架年节约能耗超 2000kWh，减少 CO₂排放 1 吨。

功率密度突破：第三代PSU功率密度达113W/in³，支持300kW +机架，体积缩小50%，适应数据中心空间密集需求。

可靠性增强：CoolSiC™器件通过100%雪崩测试，CoolGaN™ G5的 MTBF>50万小时，保障AI服务器7×24小时运行。

总结

英飞凌通过 Si/SiC/GaN 混合架构，在 3kW-12kW 功率段实现了 AI 电源的高效演进，从单相到三相、从 50V 到 400V 输出的升级，适配了机架规模计算的需求。SiC 在高压下的低损耗、GaN 在高频下的高性能，与硅器件的成本优势结合，推动了 AI 服务器电源向更高效率、更高密度、更低 TCO 的方向发展，为 300kW + 机架和 2kW GPU 时代奠定了基础。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](APEC2025_AI服务器的电源和机架架构的演变_images/img_022_e2f6dc3146fd.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](APEC2025_AI服务器的电源和机架架构的演变_images/img_023_66eb2d7219d9.jpg)

![图片](APEC2025_AI服务器的电源和机架架构的演变_images/img_024_3dbac4b24cea.png)