# 高压120V+控制DCDC，终于有颗国产芯片敢跟国外大厂掰手腕了。

原创 王工 硬件笔记本 2026-03-16 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/EA-cgWzzJS7D3gXjLBeIJQ](https://mp.weixin.qq.com/s/EA-cgWzzJS7D3gXjLBeIJQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

前段时间我写了一篇文章，聊了聊国产MCU那些事儿（点击标题查看：[如果不考虑STM32，你会推荐哪些国产单片机？](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247567733&idx=1&sn=8cf029d26bd811da88402bf149deb85b&scene=21#wechat_redirect)）今天换个方向，给大伙介绍一下高压DC-DC芯片。

咱们做硬件的，对DC-DC芯片肯定不陌生。但说到高压DC-DC芯片，如果你平时不接触工业电机驱动、IP摄像头这些行业，可能就不太熟悉了。今天这篇文章，我就带大家了解一下这个领域，顺便聊一颗国产的120V同步降压控制芯片——Hi9300E。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeQUdjMyuyQc2EFfiaJx3EM5vrGj1BknI4Dia7Z9Wot4S4n9YKmm5eC4Ur2MT0l6c0zv18yFgA7UM6iciaUn96yyhia6GHRfebHGHyk/640?wx_fmt=png&from=appmsg)

01

**高压DC-DC，为什么选择这么少？**

搞工业电源设计的朋友可能都有个体会：输入电压一高，芯片选择就变得特别尴尬。低压方案不敢用，高压方案可选择性又太少。

为什么会出现这种情况？咱们把电压段拆开看就清楚了。

**低压段**（4.5V-18V）是消费电子的主场，芯片最多，工艺最成熟，成本也压得最低。

**中压段**往上走到100V，情况就开始变了。100V算是一个分水岭，这个段的产品已经变少，但选择还算充足，工业控制、车载娱乐这些场景还能找到不少方案。

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niac9mvje2ZtK8RQH73OeibglBoD0pTQKgibkAXft7pKosDjiafiaQzLLaMqHEX0UicickhtqrOUXe8kjX7FpxfHOlq8dRGjSVD5w16nG4/640?wx_fmt=jpeg)

一旦到了100V以上，可选择性就真不多了。这个电压段对芯片工艺要求高，需要考虑更高的电压应力、绝缘性能和可靠性等因素。对研发要求更严格，能做同步降压的就更少了。很多所谓的高压芯片，其实是异步降压——只驱上管，下管用续流二极管，效率上不去，发热也大，在大电流场合根本不敢用。

市面上常见的，国外主要是TI和ADI在撑着。TI的LM5116，6-100V输入，经典型号，但100V是上限，你要做个输入110V的系统，它就用不了。ADI的LTC7810，4.5-140V输入，参数确实漂亮，但价格和交期，用过的人都懂。

02

**Hi9300E介绍**

国产在这个段能打的，确实不多。但今天要聊的这颗**Hi9300E**，是智芯半导体推出的同步降压DC-DC控制器，几个关键参数直接摆在台面上：

**1、输入电压8-120V，芯片耐压做到140V  
**

**Hi9300E第一个要解决的问题，就是高压段没芯片可用。它的输入电压8-120V，芯片耐压做到140V，在这个电压段，市面上能打的同步降压控制器，确实不多，而**Hi9300E的优势在于性价比高，长期稳定****供货****、还有一支能随时响应的技术支持团队。遇到问题直接找到原厂的人，沟通顺畅，解决起来快得多。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niacWOfYTrwXl5q5m1faPpA8iaWSRuXHmEdc0ibhliafxKOybGJdh5dZiaBIHGcDlvW6aW4LAr32M9h07sWTEiay1mQXGLObBMnKGSWB4/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacH9VmOJMkzaVzd5SoHueexZ2aHvUN36g2mI1dcZyoyt8HUpjxDhgiaK8m322ZLBq1nOcvTsB2ECzMMtQ7LXjpwbVbaYJKsaLkE/640?wx_fmt=png&from=appmsg)

### 2、专利算法控制，超快动态响应、超低纹波

很多传统DC-DC需要外围RC网络调环路，调不好就容易振荡。Hi9300E用的是智芯自己的专利算法，环路补偿直接做在芯片内部。负载跳变时响应速度快，输出电压纹波也压得住。实测动态响应波形显示，负载跳变时输出电压跌落幅度小、恢复时间快。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaet3L0yPuSLZNsFGKQeAB9KXm4icVksU1gSwuiaD9zYkVicm1bzo1PTUnOMINfT8HBEk7ibRR4TPZehfJJDJ6o3M5ZS5GS0rmGo0Q0/640?wx_fmt=png&from=appmsg)

### 3、内部集成随机序列编码抖频，优化EMI

高压大电流的DC-DC，EMI整改经常让人头疼。Hi9300E内部集成了随机序列编码抖频，开关频率不是固定的，而是在一定范围内随机变化。效果是把窄带干扰的能量分散到更宽的频段上，峰值降下来，过EMI测试会轻松不少。开关频率也可以通过外接电阻在70kHz到300kHz之间调整，想要小电感就往高了调，想要高效率就往低了调，灵活度够用。

### 4、无外置CS采样电阻，提高效率

传统方案过流保护需要外接采样电阻，电阻上会一直会有功率损耗，效率会往下掉。Hi9300E直接用下管MOS的Rds(on)做采样电阻，通过CS脚接SW，配合外部Rcs设定过流点。省掉一个功率采样电阻，效率能往上拉一拉。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaex74klqUU12TMp4149K8aNQApibJSUKBPxwa3bIELmQnI5DLdKbt0SP0pbNKGFAz8YYIH1poLfb7c4LQOLiaicAVstlC9GNBqlDo/640?wx_fmt=png&from=appmsg)

### 5、多种保护模式，系统更稳定可靠

Hi9300E给了几个实用的保护功能：

**A、LATCH脚可选保护模式**：接高或者悬空时，过流或短路保护进入**打嗝模式**，不断重启尝试，适合需要自动恢复的设备；接低时，保护后直接**锁定输出**，重新上电才恢复，适合故障时需要人工介入的场景。

**B、支持过温保护、欠压保护、输出短路保护、软启动功能等，性能安全可靠。**

如果你手头正在做工业电机驱动、电动自行车、非隔离POE供电，或者电信服务器电源，这颗芯片可以看看。

03

参考设计

这是常规的应用电路原理图，仅需一颗芯片、两颗MOS管，配合输出电感和外围阻容元件就能搭起来。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaerjDweOKfjMSLjNo74wkibJibf9sPPQbYH8mLLVFcUysr1qGuZmWuRdCfZUICvY0ibLshibz8WxOSfTjibfCpcBjGDW5Hg7RN2TBfQ/640?wx_fmt=png&from=appmsg)

对于VIN > 72V、VOUT < 24V的大功率应用场景，虽然会多几个元器件，但整体来看，外围器件依然不算多。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaenmyib5vwMu3pR3Odcguyic4w8xUdUje4WmMS6BeWSk7JDjMEY7Bnxsyq13tAAMlOubuVb7CVonicYxl5RNG2hR85YUNNsUWG5qc/640?wx_fmt=png&from=appmsg)

**1、输出电压设定**

**大多数DCDC输出电压几乎都是这样计算的，通过外部电阻分压器设定，反馈电压0.843V。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaerVTUkwrUdqIYRO4viaC05ZqAAjLPKdfKTsWr2rbOLW4KU5OAERVBjOJpOvJ6v9Dia1ibmVBOXoLibqk8DcKHWH6L2hzC9FZHo2IM/640?wx_fmt=png&from=appmsg)

****计算公式：![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadP9teoQmobxlmcaMeopa9FcsGkoviakqpCoJDEPe9c8xBleC58SlHiauRud9QIS88GUQlFia7Db7Z2bBmfxMSENRqaTfJjpSeHXc/640?wx_fmt=png&from=appmsg)****

2、过流点设置

芯片的CS管脚用于设置过流点，实现过流保护，共有两种接法。除了前面提到的利用下管MOS的Rds(on)内阻进行检测外，另一种是外接采样电阻。

如果下管Rds(on)温漂较大，或者你对检测精度要求比较高，可以采用传统的接法，通过外部电阻采样。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadI0IsJv8eJpC7mdRUsf7WjnUn9oUqibmFMjxfbp9blZVHM7Ytibqn6mUbeNtnA9XSwuibl6qHbribFMlKpft8nBw6Yl4ngicy5HCicU/640?wx_fmt=png&from=appmsg)

3、输出供电功能  

输出供电功能由 START 端口配合 VSENSE 端口电压来实现供电的切换：

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeMTePu9UFMAGticibicxBOwiabbQRSgO4CJgFCH8EnxZmwowEZ4oCBhqDpcFcFvyEicwEnicfwd6UHPtuJrCibkbr8n8KibRDNayqJzco/640?wx_fmt=png&from=appmsg)

当 VSENSE 电压低于 1.2V 时，START 端口钳位 12V，此时输入电压 VIN 给芯片供电； 

当 VSENSE 电压高于 1.2V 时，START 端口钳位 6V，此时输出电压 VOUT 给芯片供电；  

VSENSE 管脚往外输出 5uA 电流，因此 VRVL实际电压值为：

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niac11GN7rPmodoEl8bvM9KyEiaKbHVJL5T9ScibGkRxXWZyiaDqGRv2WORgianGwicz5QpcIIE6VXwoDgHu9UNYoZLibfGbE7ibibsWqqns/640?wx_fmt=png&from=appmsg)

还有一些其它电路设计要点，这里就不再一一列出，感兴趣的朋友可以咨询原厂获取设计资料。

4、PCB布局要点

原厂设计资料其实已经有比较详细的介绍，这里稍微总结一下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeiaS7PtVpXS6AkQtWHianTtRCltVTUUy1nIS9VpQu08KHlQ7ekdMtR2MnpWkPBj3taCMTGZFvCnMlabHLGezicOF8J8kOTDZbR4I/640?wx_fmt=png&from=appmsg)

1、功率回路：SW端、MOS管漏极、电感的走线覆铜尽可能短、宽；

2、CS检测：CS峰值检测电阻靠近CS脚和GND脚放置；

3、地线处理：VDD电容的GND端、芯片GND端与CS采样电阻GND端单点连接；

4、输入电容：尽可能靠近芯片布局。

更多详情，请参见原厂芯片设计规格书。

04

Demo板介绍与测试参数

为方便客户快速验证Hi9300E芯片的功能，智芯推出了对应的Demo板，设计上充分考虑了高压大电流应用的实际需求。板子采用典型的外置MOS配置，输入电容靠近芯片布局，功率回路走线短宽，CS采样电阻紧贴芯片管脚，确保在高压差大电流工况下依然能稳定运行。

这是Demo板正面图片，外置MOS配有两个大散热器，毕竟得抗住几十A的大电流，散热措施必须得做好。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeRFhGWaYzxNnwDRAc87ZicibdAZzcXhmq6DUwCTicbYewiaibZbnPuQz8Oic8bBTKPJ67MuuM02WfI3PM3xRAIIK7xia5185TD2G29Q8/640?wx_fmt=png&from=appmsg)

这是Demo板背面图片，铜皮上覆了一层厚厚的锡，以满足大电流的载流能力。  

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacvjEHZgLhL1RvVrQIW2S7ALbjpduLyjpTdsoF07X73yzcVDtgqL5M9Dcr8DVic9IuOXyLCTBQN3ibMbArAgSaqiatwr8vxusPbjs/640?wx_fmt=png&from=appmsg)

**测试条件准备，原厂**实测表现：****

**![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafAbNRtZOTkt7j4PReojB4wl5K9JyC2QeY1zIqTHc3RAxUrqJ6Rq6x9PR3VlF42JQmRk5Nhj4CMDehQ3NEvViaT0TNQUlZFxKBM/640?wx_fmt=png&from=appmsg)**

开机软启动效果明显，关机无过冲。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niad50OVqqYX3ZEyfwrkMYibLPedOicwOtPtGgLyRiae16iatVnURQOIKaibU7eiaak83EA3QsMrpCKUTYVDm1AFWpphw6dEibrRWNAk2ys/640?wx_fmt=png&from=appmsg)

开关节点波形干净，无明显振铃，输出电压平稳。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadWsST739egrdpibqmea4QuS4yn3ekK41GjFYdaxrT57khmSrz6icRURItm1yAvRzEvkqddSCtxfykpQC0Y1l3zA5FaWZbCwsb9k/640?wx_fmt=png&from=appmsg)

**输出短路保护**：根据LATCH脚设置，正确进入打嗝或锁定模式。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacjN2SRQTS3UVmhnl6ToA7oLehBrRCg6yYJFjAo15mZgRbkaWbMcfqibHFiaId7GxGasp8uKyqya5nXgMgakK9rE0XBJeCjloVm4/640?wx_fmt=png&from=appmsg)

温升测试通过，整体表现良好。但发现上管发热量偏大，驱动参数和散热方面还有优化空间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadvJxO5N5rncmxJnZbXOcd1cCSYVHic4V3Ak77TEJhiarvalj0MVPiaygPsru7AbfLaSiaYzdsL1Rbduicn9zYzfibueeyfpMTicPutM4/640?wx_fmt=png&from=appmsg)

05

小结

Hi9300E这颗芯片的核心亮点，我帮你划个重点：

突破120V高压，用的是专利算法，能做到超快动态响应、超低纹波；内置抖频优化EMI，不用外置CS采样电阻，降低损耗、提高效率；再加上多种保护模式，用起来更放心。

国产芯片还有一个实在的优势——供货稳、技术支持到位，综合竞争力上确实有底气。

如果你正在挑高压DC-DC方案，或者手头有工业电机驱动、电动自行车、PoE供电的项目，可以了解一下这款芯片。

今天的内容就分享到这里。如果你觉得有帮助，欢迎点赞、收藏、转发，咱们下期再见！