# SiC MOSFET、Si Cool-MOS 和 IGBT 的特性对比及其在DAB变换器中的应用

原创 梁美 ，郑琼林 SiC碳化硅MOS管及功率模块的应用 2025-01-04 00:01 广东

> 原文地址: [https://mp.weixin.qq.com/s/VxBgSzLf6P1uAA095AHMeg](https://mp.weixin.qq.com/s/VxBgSzLf6P1uAA095AHMeg)

文章来源：电工技术学报

作者：梁 美 1 郑琼林 1 可 翀 2 李 艳 1 游小杰 1（1. 北京交通大学电气工程学院 北京 100044 2. 华北水利水电大学电力学院 郑州 450046）

摘要： 碳化硅（SiC）半导体器件由于其宽禁带材料的优良特性受到了广泛关注。SiC 半导体器件作为一种新型器件，对其与 Si 半导体器件的特性对比及评估越来越有必要。本文主要对比了SiC MOSFET、Si Cool-MOS 和 IGBT 的静态特性。并搭建了基于 Buck 变换器的测试平台，测试条件为输入电压为 400V，电流为 4～10A，对比了三种器件的开关波形、开关时间、开关损耗、dv/dt、di/dt 以及内部二极管的反向恢复特性。设计了一台 2kW 的双主动全桥（DAB）变换器的实验样机，对比了应用三种器件的 DAB 变换器的理论效率和实测效率。

关键词：SiC MOSFET CoolMOS IGBT 特性 DAB 变换器

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139AH0wjia62fIpIZK96jkAf4Q6MVfqlE0mEvnvSQuwJMXb21ibFe36JoGQ/640?wx_fmt=jpeg&from=appmsg)

1\. 引言

近些年，碳化硅（Silicon Carbide，SiC）半导体器件因其材料具有击穿电场高、载流子饱和漂移速度快、热稳定性好及热导率高等优势，可提高电力电子变换器的性能，引起了国内外学者的广泛关注。

目前，商用的 SiC 半导体器件有 SiC 肖特基二极管、SiC JFET 及 SiC MOSFET。由于 SiC 肖特基二极管的反向恢复特性好于 Si 二极管，将其应用于PFC 电路或逆变器中，效率得到明显提高。SiC JFET 是目前最成熟的 SiC 半导体器件，其开关速度和开关损耗均优于 Si MOSFET 和 IGBT 。但 JFET的主要缺点是常通型，必须通过负压关断器件，当驱动电源出现故障时，很可能出现短路现象。

自 2011年，CREE公司推出第一代 SiC MOSFET，较多研究人员对 SiC MOSFET 的特性进行深入研究。文献\[10-13\]指出 SiC MOSFET 的驱动电压较低时，其导通电阻为负温度系数；驱动电压升高之后，其导通电阻为正温度系数。文献\[14\]仿真对比了应用 SiC MOSFET 和 Si IGBT 的双向 Buck-Boost 电路的效率，但没有实际应用效率的对比。由于双有源全桥（Dual Active Bridge，DAB）变换器能自然实现 ZVS 软开关，结构简单，效率高，对 SiC MOSFET在 DAB 变换器中的应用研究也较多。文献\[15\]在 DAB 变换器中比较了 SiC MOSFET、Si Cool-MOS和 IGBT 的输出电容 CDS 大小以及其对 ZVS 软开关的影响，但没有对器件的其他特性进行对比分析。文献\[16-17\]实验对比了应用 SiC MOSFET 和 Si IGBT 的 DAB 变换器的效率，但没有对两种器件的具体特性进行对比分析。文献\[18-19\]设计了应用SiC MOSFET 的高频 DAB 变换器，但其主要介绍了高频磁性元件的设计。

为了具体了解 SiC MOSFET 的性能优势，及其与 Si Cool-MOS 和 IGBT 的特性差异，本文将 SiC MOSFET、Si Cool-MOS 和 IGBT 的特性进行对比。首先对比三种器件的静态特性，分析其对器件性能的影响。然后搭建基于 Buck 变换器的测试平台，对每种器件的开关特性进行测试。最后基于一台 2kW的 DAB 变换器，测试对比应用三种器件的效率。

2\.  静态特性对比

与 CMF20120D 击穿电压 VBR 相近的高压 Si MOSFET 的导通电阻 RDS(on)均较大，因此本着额定电流 ID 和导通电阻相近的原则，本文选取了IPW65R065C7 作为对比对象。IPW65R065C7 为Infineon 公司最新的一款 CoolMOS，其最大特点是开关速度快。而本着 Si IGBT 的击穿电压和额定电流相近的原则，本文选取了 IKW25N120T2 作为对比对象。IKW25N120T2 为 Infineon 公司应用广泛的一款 Si IGBT。表1 为 CMF20120D、IPW65R065C7和 IKW25N120T2 的器件参数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139UIvlcsiaYz76sKXfWmATial2tvOS6PZBwSLKCTzLLGV9cxPeqXcYadWQ/640?wx_fmt=png&from=appmsg)

图 1 为 CMF20120D、IPW65R065C7 和 IKW25- N120T2 不同栅电压（VGS 或 VGE）的 I-V 输出特性曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ZMk5jYzLq233xFlIiaE5MLUSzxPqiayvvMMdI6Ik6e7VDdwpYyzVUB8Q/640?wx_fmt=png&from=appmsg)

如图 1a 所示，CMF20120D 的 VGS 大于18V 之后特性曲线的斜率变化较小。如图 1b 所示，IPW65R065C7 的 VGS 大于 8V 之后特性曲线的斜率基本不变，VGS 为 10V 和 20V 的特性曲线重合。如图 1c 所示，IKW25N120T2 的 VGE 大于 13V 时特性曲线的斜率基本不变，VGE 为 17V 和 20V 的特性曲线重合。CMF20120D 的饱和区与线性区的拐点没有 IPW65R065C7 和 IKW25N120T2 清晰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139q33GIrwnicJx1z38IOg7GeKyJdwv43EsDwuKtgibXu52Ssex69e2nlMg/640?wx_fmt=png&from=appmsg)

上述现象源于三种器件的不同的跨导特性，如图 2 所示。CMF20120D 的跨导系数（gfs）最小，沟道迁移率最低，VGS 较高时才能获得低导通电阻。为了保证CMF20120D 具有低通态损耗，其驱动电压要高于18V，与 Si 半导体器件不同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ic8BOuAwDEqoibPdYLJeGO9aXGjQVzeXHwADP1jticDmXrZZ3oOH1LXdw/640?wx_fmt=png&from=appmsg)

图 3a、图 3b 和图 3c 分别给出了 CMF20120D、IPW65R065C7 和 IKW25N120T2 的 Ciss，Coss和 Crss随器件电压（VDS 或 VCE）变化的曲线。IKW25N120T2的 Ciss 最小，其 VGE 响应最快，驱动损耗最小。IPW- 65R065C7 的 Coss 最小，其关断时 Coss 存储能量最小（器件开通时，Coss 存储的能量转化为开通损耗）。IPW65R065C7 的 Crss 最小，其 VGS 的密勒平台时间最短，dv/dt 最大。

3\. 开关特性对比

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139sUOEQ5LDwnyc4HXuV1g1GNXPetF94ibcKcjIRYDjkhnP8GzwEQBT4jg/640?wx_fmt=png&from=appmsg)

图 4 为基于 Buck 变换器的测试平台，用于测试 CMF20120D、IPW65R065C7 和 IKW25N120T2的开关特性。二极管 VD 为 SiC 肖特基二极管C4D20120A，其器件参数见表 2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139iaYjZIQqYbA6ockSwg3OHoMr4MupTBZX12JmibMxQQy7xCsdOENaVdTQ/640?wx_fmt=png&from=appmsg)

SiC 肖特基二极管无反向恢复特性，用于限制被测器件（Device Under Test, DUT）开通时的电流尖峰。Buck 变换器的测试条件见表 3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1398m7BicabO8LqYcyyKrcO6t1N3582PPsGHIcibZIsyVK1k4QT9JPWVjkg/640?wx_fmt=png&from=appmsg)

驱动电路框图如图 5 所示，使用Avago 公司的 ACPL-4800 光耦隔离芯片和 IXYS 公司的 IXDN609SI 驱动芯片，驱动电路的负压通过三端稳压器 LM337 调节。根据器件的静态特性，设计CMF20120D 的驱动电压为+18/-3，IPW65R065C7和 IKW25N120T2 的驱动电压为+15/-3。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1392ZMCORgicy7lQuItCUPp6SdTWANQCgFHY7MXgUcv5VFQwgNp7fODtSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139g0VAoFey9iaPIS1CMl33epwibuZe2sRHMJz6zRVybnkiaribqf4eeS6fPw/640?wx_fmt=png&from=appmsg)

图 6 所示为 Buck 变换器的输出电流为 7A 时，CMF20120D、IPW65R065C7 和 IKW25N120T2 的开通和关断的波形。IKW25N120T2 的 VGE 响应速度最快。CMF20120D 的开通延迟时间和关断延迟时间最短。IPW65R065C7 的电压电流变化时间最短，但其开通电流尖峰和关断电压尖峰最大。IKW25N120T2关断拖尾现象严重。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ViaIrmKmorgJjF9InGamMCumwoVlT3GchoLths4vSZhHQUiaX77dfSjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139lsFETxM4BJpYibIef1ZYy0BB7SUjiaWB6ib9MbJ14IgsaeDKLK9lnq3vQ/640?wx_fmt=png&from=appmsg)

图 7 为 CMF20120D、IPW65R065C7 和 IKW25- N120T2 的开关时间随 RG 变化的曲线。td(on)为开通延时时间，ton 为产生开通损耗的时间，即器件开通时电压电流的交叠时间，td(off )为关断延时时间，toff为产生关断损耗的时间，即器件关断时电压电流的交叠时间。测试结果显示，RG 越大，开关时间越长。CMF20120D 的开通延时间和关断延时时间最短，IPW65R065C7 和 IKW25N120T2 的关断延迟现象比较严重。CMF20120D 产生开通损耗的时间最长，IPW65R065C7 最短。IPW65R065C7 产生关断损耗的时间最小，CMF20120D 与其相近。IKW25N120T2因其关断拖尾现象，产生关断损耗的时间最长。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139NIqBMKLCZ8uTUDOQAQatIkJ4KIzpdvq9lbYMIWpQWmK1L4D1vxnE8A/640?wx_fmt=png&from=appmsg)

图 8 为 Buck 变换器的输出电流不同时，CMF- 20120D、IPW65R065C7 和 IKW25N120T2 的开关损失能量。Eon 为开通损失能量，Eoff 为关断损失能量。测试结果显示，随着负载电流增加，开关损失能量增加。CMF20120D 开通损失能量最大，IPW65R065C7最小。IPW65R065C7 的关断损失能量最小，CMF- 20120D 与其相近。IKW25N120T2 的关断损失能量最大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139Lic4XCZdxOlGHxU7IiaY05JgnFIJIvTVGb3RrCQNOOnVaFcoxwIfdSPw/640?wx_fmt=png&from=appmsg)

图 9 为 Buck 变换器的输出电流不同时 CMF- 20120D、IPW65R065C7 和 IKW25N120T2 的开通di/dt 和关断 dv/dt。测试结果显示，IPW65R065C7的电压电流变化率最大，IKW25N120T2 最小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139vvCg1kPhxFZPb4422q6o3vN2FyHczSlLriapOkLvb6xGCmAmXoX9X1g/640?wx_fmt=png&from=appmsg)

表 4 为 CMF20120D、IPW65R065C7 和 IKW25- N120T2 内部二极管的静态参数。其中 IKW25N120T2的内部二极管为出厂前封装在内的 Si 快恢复二极管。图 10 为测试二极管反向恢复特性的电路图。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139nLicib8Y1qDZLOx2upnYeTrXRc9j6oM8UntvAG0OfIiaft12f4SpviaXvQ/640?wx_fmt=png&from=appmsg)

图11 为三种器件内部二极管及 SiC 二极管 C4D20120A的反向恢复电流测试结果，此处测试结果包含二极管结电容充电电流。测试结果显示，CMF20120D的内部二极管的反向恢复电流最小，反向恢复时间最短。而 IPW65R065C7 的内部二极管的反向恢复特性最差，其反向恢复电流峰值是 CMF20120D 内部二极管的 6 倍，反向恢复时间是 CMF20120D内部二极管的 3 倍。CMF20120D 的内部二极管与 C4D20120A 对比，其反向恢复电流略大于C4D20120A。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1395cWbJLmHPfvhpVoEzMcHQG8HQKicKgX5ybwSKqAicKbfNqofefGSlVvQ/640?wx_fmt=png&from=appmsg)

4\.  DAB 变换器的损耗模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139noW452AWeVJicDTuKhLXKrIBqjNby8SOsO3r1vtmh0iaKHKRMZ79qdLw/640?wx_fmt=png&from=appmsg)

DAB 变换器如图 12a 所示，由两个全桥单元通过一个电压比为 N 的变压器和辅助电感 L 连接构成。Q1～Q8 为开关管，VD1～VD8 为续流二极管，C1 和 C2 为滤波电容。考虑到 IPW65R065C7 和IKW25N120T2 内部二极管的反向恢复特性较差，续流二极管采用 SiC 肖特基二极管 C4D20120A。该变换器的主要工作波形如图 12b 所示，包含 Q1 的关断电压 vDS\_Q1 和通态电流 iD\_Q1，VD1 的通态电流 iF\_D1，Q5 的关断电压 vDS\_Q5 和通态电流 iD\_Q5，VD5 的通态电流 iF\_D5 以及辅助电感电流 i。半个周期内，辅助电感电流在 t0、t1、t2 和 t3 时刻的大小及其有效值

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139e8FnbT91IyBqeLQhx2S9QAicffcZoLpicADTuZJRfiaaGKdCy6tGHiaSicw/640?wx_fmt=png&from=appmsg)

表示为式中，TΦ为移相时间；Td 为死区时间；T 为开关周期。

基于 DAB 变换器的工作原理，建立 DAB 变换器的损耗模型。其主要包含：开关管的损耗模型、续流二极管的损耗模型以及变压器和辅助电感的损耗模型。

开关管的损耗包含通态损耗和开关损耗，DAB变换器的变压器两侧开关管损耗模型需要分别建立。当开关管为 MOSFET 时，V1 侧开关管的通态损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139IcX4Wg3KHld37riaoTic07r8yicPBaFzHMzAxOic8slAwiaDCBY4YztFo8g/640?wx_fmt=png&from=appmsg)

V2 侧开关管的通态损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ONiaOibZfVCGsx8uvibXL798pbGichMtRTUyBLicCn6R8VZho4A4GvrVZXg/640?wx_fmt=png&from=appmsg)

当开关管为 IGBT 时，V1 侧开关管的通态损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1396Wiama3GxIX5n1POLJQkfNYWwMeafa2iazqpcSUWZWFoY1phjlPY6FXw/640?wx_fmt=png&from=appmsg)

V2 侧开关管的通态损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139N9uSVbAicmeImWlayGr1ACcp7MUCcmDzEvpb3WposT5qpMOIBJT5hibw/640?wx_fmt=png&from=appmsg)

上述损耗模型均不考虑温度对 RDS(on) 和 VCE(sat)的影响。

DAB 变换器开关管处于 ZVS 开通，其开通损耗近乎为 0，因此开关管的开关损耗模型只考虑关断损耗。V1 侧开关管的关断损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139q6b42wcE5vpichxUd8p05sBiao5spoatbdXJzWRrecJaBVBR3pJGpqIg/640?wx_fmt=png&from=appmsg)

V2 侧开关管的关断损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139j46dpBShqKzmWt4vLWubonQObHxficy8oZHp7025g4CCE29DNnFGIpA/640?wx_fmt=png&from=appmsg)

式中，toff 为产生关断损耗的时间。

由于 SiC 二极管的反向恢复特性好，并且二极管的开关损耗较小，因此二极管的损耗模型只考虑通态损耗。V1 侧二极管的通态损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139RnXXEZppZrJaSM5X5TEXFbI0vuyevFRIdMcdiamSMSPicmBoYJxqPOGw/640?wx_fmt=png&from=appmsg)

V2 侧二极管的通态损耗模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139ooGt9xr847HLa0gDp1OKuibgFj53gSIV2vNCNppVdTicwSyibJ0icqwAiaQ/640?wx_fmt=png&from=appmsg)

变压器和辅助电感的损耗包含铜损和磁损。变压器和辅助电感的铜损模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139oYtQD4yBC1urfzppLPn5tW4ETPcF5CnRpyyvCHesryGNvcJQzibQKyA/640?wx_fmt=png&from=appmsg)

式中，RDC 为变压器或辅助电感的直流电阻。变压器和辅助电感的铁损模型为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS1396IA4Sfb7GoiaS3LicicYWwE6AbHUqROFvLORW6y5YAPGd32zcdm2g2Pbg/640?wx_fmt=png&from=appmsg)

式中，CFe 为铁心的损耗系数；f 为工作频率；Bm 为饱和磁通密度；Ve 为磁心体积；α、β 都为常数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139y384CLJzLwPxazFWOJoqicuKo6t9aQnlQiccp7bpib3xXugacFDFh5YcA/640?wx_fmt=png&from=appmsg)

根据上述损耗模型，表 5 给出了 CMF20120D、IPW65R065C7 和 IKW25N120T2 的通态损耗和关断损耗的理论计算结果。计算条件为：DAB 变换器的输出功率为 2kW，V1 为 320V~400V，V2 为 360V，变压器的电压比 N 为 1∶1，Q1～Q8 的驱动电阻 RG为 10Ω。开关管为 CMF20120D 和 IPW65R065C7 时，开关频率为 100kHz，死区时间 Td 为 0.15us，辅助电感 L 为 66uH；开关管为 IKW25N120T2 时，开关频率为 20kHz，死区时间 Td 为 1us，辅助电感 L为 330uH。表 5 中，随着 V1 升高，CMF20120D、IPW65R065C7 和 IKW25N120T2 的通态损耗和关断损耗均呈降低趋势。IPW65R065C7 的通态损耗和关断损耗最低，CMF20120D 的通态损耗和关断损耗略高于 IPW65R065C7。尽管 IKW25N120T2 的开关频率为 20kHz，但其通态损耗和关断损耗最高，关断损耗远大于CMF20120D、IPW65R065C7。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139aYbutyYrJxuxDx4gZn8KMFr7dhGpMjicoiaeOMUubRk6ibrWT30sdnwhA/640?wx_fmt=png&from=appmsg)

表 6 给出了开关频率分别为 20kHz 和 100kHz时，二极管 C4D20120A 的通态损耗以及变压器和辅助电感的铜损和磁损。变压器和辅助电感所选磁心型号如表 7 所示，环形 H100/50/20 为七星飞行公司的镍锌铁氧体磁心，EE55 为 TDK 公司的 PC40等级的锰锌铁氧体磁心。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139shCrXeug65H9mmHSOogo1SGZpRxvJ3h3PFaEYUIkaVXQBwCoplkejw/640?wx_fmt=png&from=appmsg)

根据以上损耗计算，图 13 给出了 DAB 变换器输出功率为 2kW 的理论效率。开关管为 CMF20120D时，DAB 变换器的最高效率为 94.9%；开关管为IPW65R065C7 时，DAB 变换器的最高效率为 95.5%；开关管为 IKW25N120T2 时，DAB 变换器的最高效率为 91.03%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139eGViaQC5icrn2icAGbXsGvPxNdkcvBh6MrWBoT1iaF0C52IvJWKVnkeMnA/640?wx_fmt=png&from=appmsg)

5\. 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139aj6fib6yI4Y9VjKKR3RiatzEHUOdRr1wrCicIfNPPboyyyslh1Vv8NhUg/640?wx_fmt=png&from=appmsg)

本文以 DSP 芯片 TMS320F28335 为主控芯片搭建了一台 2kW 的 DAB 变换器实验样机。图 14a、14b 和 14c 分别为输出功率为 2kW，V1 为 400V，开关管分别为 CMF20120D、 IPW65R065C7 和IKW25N120T2 时，DAB 变换器的 Q1、Q2 的关断电压波形 vDS\_Q1 和 vDS\_Q5。实验表明，IPW65R065C7电压尖峰最高，IKW25N120T2 关断电压尖峰最小，与在 Buck 变换器中的测试结果一致。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskgicYqvnoxzTFUnPD9WS139AP3iaGTtISqm63dXLP1uJgkHDu1pWiaHHVH8nAdrgQ7NQJABIjIuok0g/640?wx_fmt=png&from=appmsg)

图 15 为 2kW DAB 变换器的实测效率。开关管为 CMF20120D 时，最高效率为 93.6%；开关管为IPW65R065C7 时，最高效率为 94.3%；开关管为IKW25N120T2 时，最高效率为 90.6%。 IPW65- R065C7 和 CMF20120D 的实测效率与理论偏差较大，这是由于计算理论效率时未考虑开关电压电流尖峰以及温度导致 RDS(ON)增加引起的损耗。

6\.  结论

本文对比了 SiC MOSFET CMF20120D、Si Cool-MOS IPW65R065C7 以及 Si IGBT IKW25N120T2D的静态特性和开关特性，并将三种器件应用于 2kW DAB 变换器中，进行效率对比。对比结果表明：

（1）驱动特性。CMF20120D 的跨导系数 gfs 最小，沟道迁移率最低，因此栅电压相比 IPW65R065C7和 IKW25N120T2D 高，这样才能获得低导通电阻。

（2）开关特性。CMF20120D 的开通延迟时间和关断延迟时间最短。IPW65R065C7 产生开通和关断损耗的时间最小，其开通和关断损耗也最小，但其 dv/dt 和 di/dt 也最大。而 CMF20120D 产生开通损耗的时间最长，开通损耗也最大，但其产生关断损耗的时间和关断损耗与 IPW65R065C7 相近。IKW25N120T2D 由于其关断拖尾现象严重，导致其关断时间和关断损耗最大。

（3）内部二极管特性。CMF20120D 的内部二极管导通电压最高，但其反向恢复特性最好，与 SiC 肖特基二极管相近。IPW65R065C7 的内部二极管反向恢复特性最差，其反向恢复电流峰值是 CMF20120D内部二极管的 6 倍，反向恢复时间是 CMF20120D内部二极管的 3 倍。IKW25N120T2D 的内部二极管反向为快恢复二极管，其反向恢复特性仅好于IPW65R065C7 的内部二极管。

（4）效率。应用 CMF20120D 和 IPW65R065C7的 DAB 变换器的开关频率为 100kHz，理论最高效率分别为 94.9%和 95.5%，实测最高效率分别为94.3%和 93.6%。而应用 IKW25N120T2 的 DAB 变换器的开关频率为 20kHz，理论最高效率为 91.03%，实测最高效率为 90.6%。

综合以上内容，CMF20120D 的性能与 IPW65- R065C7 相近，均比 IKW25N120T2D 的性能优异，但 CMF20120D 耐压高于 IPW65R065C7，因此 SiC MOSFET 在高压、高频功率变换领域的应用将会越来越广泛。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)