# EOS-3：LIN接口的ESD防护


> 原文地址: [https://mp.weixin.qq.com/s/CLUlESZLtnJJRmW5A69TlQ](https://mp.weixin.qq.com/s/CLUlESZLtnJJRmW5A69TlQ)

____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRXMZPa0EXyzJrQqfDy6SLJ2srTIlr98rRXeHicWq7gTiclbPOXTCTUjz4k5MUqD245cNwUJXIbZvkQ/640?wx_fmt=png)**____

____**★★★**______EOS-3---LIN______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：ESD保护一直是电子设计的重要组成部分，随着集成水平的不断提高，工艺几何形状的不断缩小，ESD引起的损伤比以往任何时候都更具威胁性，再加上对便携式电子产品日益增长的需求，ESD保护已成为系统级的一个重要问题。隐藏在系统中的ESD问题，会增加现场故障的风险，缩短系统寿命，以及其他难以管理且解决成本高昂的质量相关问题，与现场维修和产品召回相关的售后成本可能会造成严重损失，质量问题还会严重损害品牌。

____€1.ESD防护导论____

在ESD冲击的情况下，ESD二极管将被击穿并产生低阻抗路径通过将电流转移到地来限制峰值电压和电流，从而保护IC。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSCLXKFwSoEsNInghaO1sCDkdib8ibYUPlnoYXuY5FBCW4LoUa51YFTI91BB01xf9lnibUNqnr2PjpVw/640?wx_fmt=png&from=appmsg)

**_图3-1：ESD/TVS管作用路径_**

**_图3-2_**将典型的无保护ESD冲击（红色）的峰值电压与具有ESD二极管保护的信号线上的相同ESD冲击（青色）进行比较。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSziaGlsHExXXCkprvMM0WyibXMicliauv72hzUpbLDU8RCibpdu0UicZNzrjJLp5YtGZAj0KOk6Tiaib0jfA/640?wx_fmt=png)

**_图3-2：静电前后波形_**

基于先进工艺的半导体器件仅提供器件级ESD规范，而测试使用的是充电器件模型（CDM）和人体模型（HBM）。器件级ESD规范不足以保护系统中的设备，系统级ESD冲击相关的能量远高于器件级ESD冲击，这意味着需要更稳健的设计来防止这种多余的能量。为系统添加全面的ESD保护不仅是智能工程，也是在产品生命周期后期预防问题的一种低成本、简单的方法，完善和稳健的ESD防护体系具备以下特征：

1#：更大的系统级抗扰度（IEC61000-4-2 4级及以上标准）。

2#：超低箝位电压，即使是SoC设备中最新、最小的几何形状也能得到保护。

3#：将对总线和接口信号完整性的影响降至最低。

4#：低漏电流，实现最大能效和模拟接口失真最小化。

5#：在单个设备中结合多线保护的阵列。

6#：简化PCB设计以优化布局的封装。

____€2.LIN基础____

LIN是面向低成本汽车和工业应用网络的通用接口支线，如果对CAN网络所具备的更高数据速率和通用性没有要求，则通常会使用该接口。该接口可将模块连接至与现有CAN网络连接的子总线，使用LIN的典型模块包括座椅、门锁、车镜，或者作为传感器的接口，例如降雨探测器。该接口使用单线串行通信协议，以低速运作，最大数据速率为20kbit/s，总线电压电平与电源电压大致相同，在12V板级系统电压中，通常为14.4V。

____€3.LIN的ESD防护分析____

LIN收发器建议在LIN总线连接上提供外部ESD保护，以便扩展模块可耐受的ESD电压电平，保护其免受组装或维护过程中引入的可能ESD事件的影响，以保持系统的鲁棒性。此外，应该选择能够耐受最大电池电压且不会受损的ESD保护二极管，以防LIN总线线路短接至电池线路。对于12V板节点，最大电池电压为16V，但通常也会考虑从24V卡车电池快速启动。相对于局部ECU接地，ECU的动作电压范围定义在8V至18V之间，根据该范围定义，VRWM应高于18V，双向ESD二极管通常用于击穿电压大于±27V的LIN总线应用，具体原因如下。

LIN总线使用单端传输，在EMC测试期间，电容耦合射频信号等的电压电平可能会超过二极管的击穿电压。如果电压超过ESD保护二极管的击穿电压，则通信信号被限制到二极管的钳位电压VCL。击穿电压越高，EMC测试电平开始产生影响（即干扰显性和隐性电压电平）的时间就越迟，整体系统对感应噪声和EMI具有更高的耐受性。如果二极管的VBR≥27V，则收发器模块可通过汽车行业所要求的典型EMC测试。为避免影响模块的EMC性能，可以说击穿电压越高越好。另一方面，对于ESD事件，必须实现足够的钳位性能。此外，二极管电容Cd必须低于100pF，这样才能在20kbit/s的最大数据速率下保持信号完整性，但是为了尽量减少二极管对系统的总影响，Cd应小于30pF（考虑还有线缆的寄生电容）。

如**_图3-3_**所示，D1保护一条汽车局域互联网络（LIN）总线免受ESD和其他瞬态造成的损坏，其不对称的内部二极管配置确保了受保护的LIN ECU的电磁抗干扰性得到优化。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSCLXKFwSoEsNInghaO1sCDzKEOSAugcicVg22DOafPsmvQJALgxViaOtXpJ5CfSXgo92Sdia4c9Kn4Q/640?wx_fmt=png&from=appmsg)

**_图3-3：具有单个设备的LIN系统架构，用于保护LIN节点_**

____€4.小结____

在更常见的12V电池汽车系统中，由于LIN总线的工作电压达到电池电压，因此需要具有24V工作电压二极管的ESD二极管。这是因为如果在电池充电情况下存在接线错误，则可能会产生双倍的电池电压。由于单通道类型在布局上具有灵活性，因此通常优选单通道类型，此外，最小化电容有助于增加总线信号完整性的鲁棒性。对于LIN总线，推荐**_表3-1_**的参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSCLXKFwSoEsNInghaO1sCDJTqOgFR5BwVlXBxFs8rR2CL7NcccD2P7xlhe75bVAjDRAIw3YHvBPA/640?wx_fmt=png&from=appmsg)

**_表3-1：LIN总线ESD/TVS diode选型参数参考_**