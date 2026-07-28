# Digital series-Storage-9：什么是UFS


> 原文地址: [https://mp.weixin.qq.com/s/IsSItnQsWvMRWxHgEe1bIw](https://mp.weixin.qq.com/s/IsSItnQsWvMRWxHgEe1bIw)

____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TS8WCjwpYqLLl7vfoAaEvjMTA9lIeSJ8C2ON4zaYLzibRbI893wJK9Bbhp6aIBRr975rdB6kfic2Diag/640?wx_fmt=png)**____

________★★★______Storage-9---UFS基础______★★★________

# 引言：Universal Flash Storage，即通用闪存存储器，简称UFS，是一种固态存储设备，将3D闪存和控制器集成在一个JEDEC标准包中，适用于在低功耗下需要高速性能的应用，目前在智能手机中广泛应用，UFS内存具有体积小、大存储密度、快速的传输速率和低功耗等等优势，已经逐渐延伸到其它领域，比如车载、安防和云计算。

____€1.UFS的特点____

UFS是eMMC的下一代、更高性能的嵌入式存储解决方案，带来了移动设备和相关应用所需的高速读写性能和低功耗。UFS规范从JEDEC发布的1.1版到最新的UFS 4.0，实现性能再一次提升，在保留2条差分通道的基础上，升级到M-PHY 5.0版规范UniPro 2.0版，因此单通道带宽提升到23.2Gbps，最大总带宽达到了46.4Gbps，理论上可以实现最高 4.6GB/s的传输速度，是上一代UFS 3.0/3.1标准的两倍性能。为了强化I/O性能，引入了多循环队列定义，加入了RPMB（Replay Protected Memory Block）技术，提升数据安全性，同时将供电电压从旧版的3.3V降低到2.5V，实现更佳的能效表现。

1#：更快的接口带来更高的读写性能，高速读取/写入

2#：更高密度的产品，覆盖32GB-1TB

3#：支持全双工，拥有更好的能效比

4#：增强的纠错、磨损均衡、逻辑到物理地址转换和坏块管理  

车载UFS额外的功能特性：

过热控制：如果设备温度超过105°C，设备会降低性能并通知主控进行处理；

高阶诊断功能：UFS控制器会监控各种项目，如擦写次数，当前温度等，并向主控报告设备状态；

数据刷新：UFS控制器可以刷新可靠性变差的数据，提高数据可靠性。

____€2.UFS和其它存储的比较____

_传输速度_

UFS一个关键性能优势是UFS规范支持串行接口速度，比嵌入式多媒体卡eMMC规范中支持的并行接口要快得多。当前的UFS v4.0规范支持高达每秒4.64Gb的接口速度，即传输速度高达4GB/s，比当前的eMMC v5.1规范的每秒400MB/s接口速度快11.5倍以上。连续（顺序）写入速度达到2800MB/s，随机读写速度可以达到400MB/s和500MB/s。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQsSXxA7ibkOicWdYR20uXT8ibSIZskhNs5HAuS8Eafkxon2GgnjUkEFmTTB4evZSyoYDg1NdkvecQ8w/640?wx_fmt=png)

**_图9-1：eMMC和UFS速率对比（连续读取）_**  

UFS体系结构使用独立的输入和输出数据通道，无论设备是配置为连续读写操作，还是在随机读写模式，读写操作都能够同时进行，而eMMC规范支持的数据总线被共享用于输入和输出，并且同一时刻只能启用读取或写入操作，不能同时启用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQsSXxA7ibkOicWdYR20uXT8ibqNibWB6byicslosRCcVKtqdEy8rsh2HCUFiamuh3YekBwed3PpY3icrJiag/640?wx_fmt=png)

**_图9-2：F**_ull duplex_** LVDS Serial Interface_**  

_启动时间_

得益于其高速顺序读取性能，最新的UFS v4.0规范的快速闪存接口速度提供了超快的设备启动和初始化速度，使诸如工业扫描仪、POS系统、车辆唤醒等等能够从睡眠模式下做出快速响应。对于需要大量启动数据（在系统运行之前会先加载启动程序，启动程序运行完毕才能开始运行整个系统）输出的系统，UFS的启动时间比其他存储设备更快，而这是车载应用中使用UFS的一大动力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQsSXxA7ibkOicWdYR20uXT8ib80cXlYk2gNBKU6HySJ1Ttxteq7uYUISMibN1DEiamyNgGKAmEXeBagiaA/640?wx_fmt=png)

**_图9-3：几种介质启动时间对比_**  

从**_图9-3_**可知，在64MB启动数据输出的情况下比较启动时间，相对于eMMC和Nor Flash，UFS实现了更快的boot速度。

____€3.UFS的使用场景____

UFS内存首先被引入智能手机，并已扩展到其他应用场景，如增强现实（AR）/虚拟现实（VR）、平板电脑和汽车系统。随着更高的性能和全双工体系结构的结合，对UFS内存的需求大大提高，UFS存储器已经进入了工业和物联网（IoT）应用程序，在托管型闪存的总需求中，UFS是eMMC的理想替代品，随着使用越来越广泛，UFS将逐渐成为主流。如下介绍两个应用场景，凸显了UFS的绝对优势。

_5G场景_

如**_图9-4_**是5G互连场景，5G FWA（移动和固定无线接入）所需丰富的功能和高性能要求和UFS内存非常契合。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQsSXxA7ibkOicWdYR20uXT8ibRy5mSCCF13jqg6mZic4VVdFubBAtK3V1mqtMVdAocGbO7Ik7mibBg29w/640?wx_fmt=png)

**_图9-4：5G FWA普适场景家庭有线，无线_**

最新的UFS v4.0规范拥有最多4.64GB/s的数据传输，这些速度可以实现更快的启动和设备初始化（包括配置和管理软件），以及无线OTA更新。增加的容量，再加上伪SLC（pSLC）NAND技术的灵活性，提供了可靠的高带宽缓冲功能，并为引导代码、固件和操作系统提供了大量的存储空间。

_安全摄像头_

**_图9-5_**的高端安全摄像头（企业级场景、机场大数据场景等等）提供了先进的功能，如面部和物体识别、热运动地图，以及从人工智能（AI）和机器学习（ML）算法中收集的各种分析数据。当大量视频信息存储加上AI和ML算法处理，以及处理的结果，就会消耗更多的数据。为了防止这种高级处理占用本地服务器或云资源，最佳的解决方案是在相机端记录、存储和处理它被捕获的数据（称为边缘计算）。“边缘”的计算和存储提供了更快的数据传输速率，保持了数据完整性（网络连接丢失或损坏），最重要的是降低了网络录像机（NVRs）遭受网络攻击的风险。

对于企业安全摄像头的应用，要求包括：

1#：由于这些设备的空间有限，需要较小的存储体积

2#：由于收集的数据丰富且需要在边缘处理的数据，需要的存储密度大

3#：收集和存储记录数据的传输速度要很快

4#：功耗低，因为一些摄像头使用电池，需要延长电池寿命，在不关闭或进入低功耗模式的情况下连续记录数据

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQsSXxA7ibkOicWdYR20uXT8ibcvaicfVhE1F2NTehBLGjvXwATIDLu11DwAicEicLDXkB1EluFD2ibU3LXQ/640?wx_fmt=png)

**_图9-5：边缘计算示例---AI摄像头_**

UFS内存是企业安全摄像头的一个很好的选择，可以存储高达1TB的数据，足以连续记录超过10天高分辨率视频，11.5x13毫米的小封装也非常适合这些空间受限的设备。UFS v4.0允许边缘计算以最小的延迟进行实时数据分析，而eMMC没有与**_图9-5_**中的UFS内存相匹配的带宽性能或存储密度。

________€4.____小结____

凭借高性能、低功耗和全双工架构，UFS已成为智能手机中的主要闪存，并继续被工业和车载等其他应用领域的应用所采用。虽然UFS内存的使用和需求占主导地位，但在可预见的未来，它不会完全取代eMMC内存，因为有一些应用场景需要eMMC内存提供更低的存储密度。

使用UFS的场景：  

1#：需要更高的密度（从32GB到1TB）

2#：需要增强性能（UFS提供高速读写性能和良好的功率性能）

3#：SoC支持UFS接口

使用eMMC的场景：  

1#：需要更低的密度（4GB、8GB和16GB)

2#：不需要超高的读写性能

选择UFS时，虽然UFS的性能Ver 4.0 > 3.1 >2.1，首先需要确定SOC需要哪个版本的UFS，JEDEC希望每个UFS版本与以前的版本向后兼容，但供电体系的变化需要通过评估电源电压和SoC来确认。