# BMS-3：电池控制单元--->BCU


> 原文地址: [https://mp.weixin.qq.com/s/PZBhHHF5yWC-XQfRC-Z7ow](https://mp.weixin.qq.com/s/PZBhHHF5yWC-XQfRC-Z7ow)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TScRicFDBt1vuxbMzrk0MsuoRuKW4jCjCcoYusxCHsV2annum882yq8Ca30VAaufX3FJJtVJegiaibiaA/640?wx_fmt=png&from=appmsg)

____**____**____★★★____**____**__________BMS-3---BCU__________**____**____★★★____**____**____

______撰稿：Timothy  校稿：Timothy______

引言：BCU是BMS的大脑，包含一个MCU芯片负责计算电池健康状态（State of Heath，SOH）与荷电状态（State of Charge，SOC），利用CSC和BJB测量的电池精确数据做出判断与决定，以确保电池的安全性和提高性能，还可以协调BMS的电池均衡功能。

____________€1.什么是BCU____________

如**_图3-1_**所示，在低压系统中并没有BCU，低压系统一般将CSU，BCU，BDU合并在一起，在48V往上才有BCU的概念。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQIP6kEmZ1moRluK2L1EO5UqQkiaYIs68icAKwibJy5AR609kNiaFJjJV3JA87pQqIAA4k8ibp4lhiaRziaQ/640?wx_fmt=png&from=appmsg)

**_图3-1：低压BMS_**

**_图3-2_**显示了高压系统中典型的BCU方框图，BCU由通信芯片和MCU构成，MCU为主控，通信芯片是连接MCU与CSU和BJB的桥梁，可将来自CSU和BJB菊花链的信号转换为解码比特流发送到MCU，MCU芯片可以处理BMS AFE芯片采集的信息并计算荷电状态（SOC），同时MCU轮询CSU和BJB测量的所有信息，计算电池状态并对来自CSU和BJB的故障或诊断做出响应，BMS MCU芯片需要对SOC进行精确计算，而这需要积累大量的技术与经验。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR9QguNLib0GjbqyoOfuw0hSPLyH1CicDR7NfID5NgOnicMdjtGnU7M6uYo1Gs7b4OJ0alaad7h3IKibw/640?wx_fmt=png)

**_图3-2：典型BCU（BMU）方框图_**

在传统BJB中的BCU，不只是承担SOC/SOH的监测，还负责电流检测、绝缘检测、链路诊断、充放电继电器驱动控制等功能。而在智能BJB出现以后，如**_图3-3_**所示，之前BCU的诊断和控制相关的任务就转移到智能BJB的核心UIR芯片来进行处理，BCU开始较为纯粹地完成SOC和SOH工作。

**_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQNchy8wFepmt2ry7FA0PQiajAY1LBl5OE7AKkGJp5clZPqvd0gWfA7k7rOLLA59ibhwSgZWA2emwRA/640?wx_fmt=png&from=appmsg)_**

**_图3-3：带UIR的BCU简图_**

____________________________________€2.BCU的性能参数评估____________________________________

虽然BCU负责BMS的SOC和SOH，但这一部分和软件算法强相关，MCU主要是一个控制作用，没有很多的计算需求，所以MCU的选择比较灵活，但是一定要满足ASIL D安全等级，比如NXP的S32K3系列。以S32K3和TMS570LS0432为例，S32K3基础版本为单核M7，工作频率120MHz，高级版本到多核M7且带锁步功能，工作频率240MHz，TMS570LS0432双R4锁步核，工作频率80MHz，外围接口这里不再赘述，车用BCU的MCU的核心选择要点如下：

1#：满足ASIL D安全等级

2#：多核M4-M7，R4-R4F，优先带锁步核

________________________________________________€3.小结________________________________________________

鉴于车载的高标准和复杂工况，车载BCU必须支持内部的SOC和SOH算法可更新性，一般是通过CAN远程升级，并且在不同季节，不同环境温度时，执行不同的充放电、电芯平衡策略，尽可能保持电芯一致性，以此来放慢电池的衰减速度。