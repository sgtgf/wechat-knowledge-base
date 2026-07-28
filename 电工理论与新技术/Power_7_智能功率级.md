# Power-7：智能功率级


> 原文地址: [https://mp.weixin.qq.com/s/3X7Y2yhDGcb3sCFcUhFs5g](https://mp.weixin.qq.com/s/3X7Y2yhDGcb3sCFcUhFs5g)

____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvnBIPibmduNQLhoTfaETtIgnRqwGXeyNKvHAcl5FbguYheHUPI0w4eUqdeCCrKGiattTicvUKqHLBw/640?wx_fmt=png)**____

____**★★★**______Power-7---智能功率级______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：传统的供电设计，是将开关MOS管、同步MOS管和驱动IC单独放置（外置电源开关），不仅占据PCB面积大，寄生效应也难以控制，降低了电流的整体转换效率，这对于对供电要求越来越高的处理器而言，成为一个必须解决的问题。所以为了解决外置电源开关的痛点，Smart Power Stage开始出现并广泛应用，智能功率级是比较专业的名称，各个厂商的同类型产品均叫智能功率级。

____________€1.结构组成____________

如**_图7-1_**所示，按照DC-DC的结构层级，智能功率级由2+3部分组成，即Driver+MOS，简称DrMOS。其芯片内部集成两个（或更多个并联的形式）高性能的MOS和驱动及控制单元，通过优化设计的内部结构和驱动控制，能够实现高效率、高功率密度以及良好的散热性能。严密的控制和保护逻辑使其能轻松兼容主流的前级控制器，适用于CPU，GPU以及POL的电源设计。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TR0qWkWQkTaj9YCnfyqAz26ibLjB7Es0aBW3JvMe8b7IazuAQzBcP1htDa3xFgKv4FZflV0jfjdH8g/640?wx_fmt=png)

**_图7-1：DrMOS结构_**

因为集成式DC-DC在大电流场景发热严重，散热性能也不够优秀，而单片DrMOS使电源系统能够大幅度提高功率密度、效率和散热性能，DrMOS模块以超快速度切换，与外置功率MOS相比，大大降低了SW节点走线长度和MOS间互联长度，最大程度减少寄生电感、电容影响，降低系统整体尺寸，同时降低了功率损耗和开关节点过冲，同时还提供过温保护OTP、过压保护、过流保护、故障报告等等，这也是智能功率级的智能所在。（传送门：[Power-1：外置开关同步降压控制器-单相单输出](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492237&idx=1&sn=773ba087c7cf0362fa0622513faf30a5&chksm=c336a812f441210493fc4842cb4aafc0a3114d29d1899384dcbf3caaa4d49da2a55eddf4bebd&scene=21#wechat_redirect)）  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAJSM3rXzqBpVL9j0bFWIVx8icx2Bl7tMRXp8ghicoMj5lorTVflMxoxiaw/640?wx_fmt=png)

**_图7-2：典型DrMOS的内部结构_**

如**_图7-2_**所示是DrMOS内部结构，红色框内是DrMOS独立供电模块，黄色框内是将输入PWM转换为上下Driver的控制信号，蓝色框内是驱动器，绿色框内是电流感测，从结构可以看出支持同时从主回路和续流回路检测，1部分是报警/指示逻辑，2部分是短路检测。

TMON引脚可以在过温，过流，HSS（高边短路）等状况时输出高电平，GL是低侧MOSFET驱动器引脚，可连接到测试点，以便观察波形。PHASE是开关节点，可以用于自举电容连接。PWM引脚是3.3V（也有5.0V）逻辑电平PWM输入，电平为高时控制MOSFET导通，三态时关闭两个MOSFET，低电平时使同步MOSFET导通，VDRV是给两个驱动器的供电。

____________€2.关键参数和特性____________

智能功率级也是一种普适型器件，需要和搭配各类型控制器，所以其输入信号兼容3.3V/5V电平，且支持三态信号以实现不同工作模式的控制。在死区时间，传输延迟和驱动边沿的调整使其可以高效安全运行。

____________€3.应用场景和选型要点____________

智能功率级产品主要用于12V输入和小于2V输出的应用，并且其内部功率器件（MOSFET）是不对称的，以匹配预期工作范围内的预期占空比，然后将内部驱动器与MOSFET匹配，以最大化效率（主要是尽量减少开关损耗）。

智能功率级主要应用场景集中在服务器、存储、数据通信、电信和消费者应用，为CPU/GPU/SoC/ASIC/内存的电源轨供电。针对高性能同步降压应用而优化的集成功率级解决方案，这些器件提供了出色的功率转换效率和热性能、高功率密度以及低寄生参数，智能功率级产品组合的峰值电流范围从20A到90A，可设计多种功率组合。精确的输出电流和温度遥测也有助于显著提高系统智能和处理器性能。从而实现了最佳的功率密度和快速保护功能，使终端系统在整个寿命期内实现可靠和稳健的工作。

选型要点主要集中在：

1#：电流承载

2#：功率损耗

3#：Min on和Min off

4#：PWM驱动逻辑

5#：智能功能需求