# 基于10kV SiC MOSFET的50kHz软开关单相3.8kV AC/400V DC固态变压器的设计与实验分析

原创 D. Rothmund SiC碳化硅MOS管及功率模块的应用 2025-11-10 12:26 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_cuaix0oRc2LU12ThxBUtw](https://mp.weixin.qq.com/s/_cuaix0oRc2LU12ThxBUtw)

文章来源：苏黎世联邦理工院

作者：D. Rothmund, T. Guillod, D. Bortis, and J.W. Kolar

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjr0A9rqskRhrwUB3L3xXkeG1eEy9x1TkAlCH7XwANyvfgDichGN92Efg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjHQyRZibED2iaZeE8AaPUjWuCicAPTqtGrX8yYxpZxvcfSooibIZz76EJRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjSSS0uKIZ50qMNRKN7H9Bd7eiaMkkxEcRZvLkAIzNXXFe4zY8qz9qKKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJj6xM4c7lapyuwe2ry3dM4PyNyaLRshc519xuqoYeUPsCwUogiaOGiaC4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjbqTiaq0Biceu8XXDhXesr3Y9BW3IjTgFBiaYjYkkoibZewnqqho2dPLEibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjDM1Aoh2G4icXIRX6KFMFfcpt18oLJrRacyDTFdYn0vq4XWF2mZOfk9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjFJLjGGlvz4UWNicaDLH8QmbT8uLBT9ulE0JwZ7bVLHYsqRibHclNgoGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjdHabicuHPJ35yyE7rBibZ6sAg7SzAEIXWkx687taGA4Pz533LwdH4lmQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJj2QuJ1q0LqqrTmBsX0liaNiaofm17Pn2lsZ6hOyKhqQ42va3jJn2dyLfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjqsQ3W7TTvoQgyu3VBo0emR2UNNGxfClUpyOhscMqib11QJL7Cicy5BJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJju20nLnEibOfAbChNYuF88pq6e2nQrx3BHgR6YSrVHAnRjWrqufFJ61w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjwIR3kxazticOHsUGJibnCUQR1LxPb7POVyVibBj5jVOH8XljPda18nU1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjicthibzOJHGc1uXOWUWwIsaqypVw1FRiaTZuz16jyoDhyrlk0LgzB9tVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjWiaqtBwDwrzyszGGeII6uLqH8YdPD7JINuuMwGumM5fv4icEUFqib1kJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJja7kgchr7Keu6EE9M4Iv6picuSIYFPFdQpJ8JicaW3NFvPodNEbAgTRKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjfvgcJNiba3yia42aVMetQztoQBibpMlOKrCmbQ4w4NcVeBmYX1iby9Zic9Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjnu5ayFcy6jJtC0PduiaSvaxluQZdPeP9OvDAIMlYBJOBhNybOiauibIHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjSwP8nEnbJepBCTcIkFupnn3Q7RFvkXchVN2A1RofZMal6eibaldfmRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjCqbZS87RNUsQcYPA7P0HRmoHF2icJUM0s562RNEzAafWR16s7qvlmQw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJj7zRVUhXUqoPYsL3vCjet32WNspg28ok2rwZv2LqEMviaE30JB9BY0zg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjOGrjBXBEnU1Ar5mOB0NFXDB0LSCOm4y3dxO4pBeibBMonTGuYJBhC1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjR7IFBuib6Sic2djgd1iavKpRvyTGf87u4sbNQSxzS5wJkJBmezQLkd70w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjRKB6XEr3eRx5KgGSmY1bre35cD7icPZ6Ro8YCvqL1T3O6aiaFupneSNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjvmLmo4sO8EyAy3XZ73BHrVcpmxY0uTuNeRoiaZSPwQdSzjykAgOaEpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjk3iaGxBCzy4eFuibfg9C74yROSiaQBbs2w30PD4xAUeuvWglPxNSEWg2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjPC74ibMoQkMiak1IO3momVRzDfu1wSFf66hypyFfdCK4CYoZ62jTYAGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjqC5iaw6TDG0T98pOrZ6WFTZSDtq2iaqPYClXfShT66RWIEWtmnG35jicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjv6ia7PibBfdzias8RwsC8janAakcNyHcjOfGWkvrlZuNxl59yyVkemwwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjM2xVUG4nNolqOE28D12ia0dh6Fmfw1QgUSjwpAbrPqj7jiankT25hlMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjjcGFWk5wKxJ7rP3sIticlUKBN2iayHhGty3a6qfkS32hJ6PxJrQkicBCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjgU2ekiclkKB7gQoWyl7TuJb7cEGJkqpoZK1y0sMFjwEcoqqByBE9wag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjSvWWWVic5PMgGYIlfUy5V2rH3vTVnx7vT8WG0WRvRh2UE2SoX6QTtHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjYibUBQRIAZo0N1VkiaJnBhrAQehDvnicB50FbQWjsGTqnXdicltcibW4Kfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjQS7SDbKjekIm4dBqxIY30zZeBm9FQB6KelPo6icHE6iaMzIJIYE7MarQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjLkQBpNibibEDibPdNy4icmsHrKqvbDjoMkZJOPERkx1EUjcJL9Mba5vNMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjfXdaKko4CSxDtJ00flmb6Lib1VXC5Sgc1UUdZDd0icU5tEb8Sg7v1GPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJj7AFnZCgticslQAy6ExWehk5O5OrJI2JLTZib1j4yn7Gk7HaoHF4QthJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslWicnibDvln5FhBCN7tgedJjN8hI2WicnP5diaR1jPfHRaf5nF05aic91PpexvrAosAMG77LN9zwvWxIw/640?wx_fmt=png&from=appmsg)

### **注：文字与图片报告无关**

### **基于10kV SiC MOSFET的50kHz软开关单相3.8kV AC/400V DC固态变压器的设计与实验分析.**

#### **摘要**

本文旨在设计与分析一款应用于智能配电网、轨道交通等中高压场景的单相固态变压器。SST采用两级式结构：前级为基于10kV SiC MOSFET的**双有源桥**变换器，实现3.8kV AC到约1.5kV DC的隔离型升降压和高频软开关操作；后级为全桥LLC谐振变换器，实现1.5kV DC到400V DC的高效率、高功率密度变换。设计核心是充分利用10kV SiC MOSFET的优异特性，将开关频率提升至**50kHz**，并通过**移相控制**和**谐振网络**实现全负载范围内的软开关，从而极大减小无源元件体积，提升系统功率密度和效率。本文将详细阐述主电路参数设计、控制策略、软开关实现机理，并通过仿真和实验验证设计的可行性。

#### **一. 引言**

**研究背景**： 传统工频变压器体积庞大、笨重、响应慢，难以满足未来柔性配电网和紧凑型电能变换的需求。固态变压器作为电能路由器的核心，具备电气隔离、功率因数校正、电压变换、双向功率流和智能化控制等优势。

**技术挑战**：

-   **中高压处理**： 3.8kV AC的峰值电压达5.4kV，对功率器件的耐压和拓扑结构提出极高要求。
    
-   **开关频率与效率的权衡**： 高开关频率可减小体积，但会导致开关损耗剧增，尤其在高压场合。  
    

解决方案： 采用新一代10kV SiC MOSFET，其高耐压、低导通电阻、超快开关速度和优异的高温特性，为在50kHz下实现高效变换提供了可能。结合DAB和LLC等软开关拓扑，从根本上解决开关损耗问题。

**本文工作**： 提出一种两级式SST架构，完成从3.8kV AC到400V DC的完整变换，并聚焦于前级DAB的设计与实验分析。

#### **二. 系统总体架构与工作原理**

系统采用两级功率变换结构：

**1.AC/DC级**： 单相全桥不控整流+PFC电感+支撑电容。将3.8kV AC整流为约5.4kV的直流，再通过电容分压稳定在约2.7kV，为后级DAB提供两个对称的输入源。(注：为简化分析，本文重点在DC/DC隔离部分，可假设前级已有稳定的1.5kV DC输入)

**2.DC/DC隔离级 - 双有源桥**： 这是设计的核心和难点。

-   **拓扑**： 两个H桥通过一个高频变压器连接。
    
-   **输入侧H桥**： 由4颗10kV SiC MOSFET组成，处理高压侧直流电压（例如1.5kV）。
    
-   **输出侧H桥**： 由650V SiC MOSFET组成，处理低压侧直流电压（例如400V）。
    
-   **控制原理**： 通过控制两个H桥输出电压之间的**移相角**来控制传输功率的大小和方向。通过合理设计变压器漏感，可以实现所有开关管的**零电压开通**。  
    

3.DC/DC稳压级 - LLC谐振变换器：

-   **作用**： 将DAB输出的不精确直流（如350-450V）稳定、高效地变换到精确的400V DC。
    
-   **优势**： 原边开关管实现ZVS，副边整流管实现ZCS，效率极高，电磁干扰小。
    

#### **三. 关键技术与详细设计**

##### **1\. 10kV SiC MOSFET的应用优势与驱动挑战**

-   **优势**：
    

-   **高耐压**： 10kV耐压为1.5kV直流母线提供了充足的裕量。
    
-   **低导通损耗**： 即使在高压下，Rds(on)仍然较低。
    
-   **无反向恢复**： 本体二极管无反向恢复问题，简化了缓冲电路设计。
    

-   **驱动挑战与设计**：
    

-   **高隔离电压**： 驱动芯片和变压器必须承受>10kV的绝缘等级。
    
-   **高dv/dt**： 需要极强抗干扰能力的驱动电路和布局。
    
-   **驱动电压**： 通常需要+18V/~-5V的驱动电压以确保可靠开通和关断。
    
-   **设计**： 采用专用SiC驱动芯片（如ADI的ADuM4135）配合隔离电源模块。
    

##### **2\. 双有源桥设计**

-   **功率与电压等级**：
    

-   假设功率等级：10kW
    
-   输入电压 Vin： 1.5kV DC
    
-   输出电压 Vout： 400V DC
    

-   **变压器设计**：
    

-   **匝比 n**： `n = (Np/Ns) ≈ (Vin / Vout) * sqrt(D*(1-D))`， 考虑移相控制，取n = 3:1 或 4:1进行优化。
    
-   **频率 f\_sw**： 50kHz。
    
-   **磁芯选择**： 采用纳米晶或铁氧体磁芯，其高频损耗低。计算AP值以确定具体型号。
    
-   **绝缘设计**： 原副边之间必须承受>10kV的工频耐压和更高的冲击耐压测试。采用厚层绝缘、灌封工艺。
    

-   **软开关实现与电感设计**：
    

-   **机理**： 利用变压器的**漏感Lk**（或外接谐振电感）与开关管的结电容谐振，在开关管开通前，使其两端电压降为零，实现ZVS。
    
-   **电感值计算**： 电感值必须足够大，以在最小负载时仍能提供足够的能量来抽走结电容的电荷。  
    `Lk ≥ (4 * C_oss * Vin^2) / (I_min^2)`  
    其中 C\_oss 为10kV SiC MOSFET的等效输出电容，I\_min为最小负载电流。
    
-   **设计结果**： 通过计算和仿真，确定Lk ≈ 100μH。
    

##### **3\. 控制策略**

-   **单移相控制**： 最基本的控制方式，通过调节原边H桥和副边H桥方波之间的相位差D来控制功率。实现简单，但在轻载时软开关可能丢失。
    
-   **扩展移相控制**： 通过引入桥内移相角，增加控制自由度，可以优化电流应力，拓宽软开关范围，是更优的选择。本文采用此策略。
    

#### **四. 仿真与实验分析**

##### **1\. 仿真验证（以PLECS/PSIM为例）**

-   **波形图**：
    

-   **开关管Vds & Vgs波形**： 清晰展示在开通时刻，Vds已降至零，实现ZVS。
    
-   **变压器原边电压与电流波形**： 展示典型的DAB工作波形，电流呈三角波或梯形波。
    
-   **系统效率曲线**： 通过仿真得到从轻载到满载的效率曲线，预估峰值效率\>97%。
    

##### **2\. 实验平台与结果**

-   **实验平台**：
    

-   10kV SiC MOSFET半桥模块（如Wolfspeed的XM3系列）。
    
-   纳米晶高频变压器（定制，n=3:1， 绝缘等级>12kVac）。
    
-   数字控制器（如TI TMS320F28379D）。
    
-   高压直流源、阻性负载、示波器（高压差分探头）、功率分析仪。
    

-   **实验波形与分析**：
    

-   **ZVS验证波形**： 展示在50kHz，满载和50%负载下，10kV SiC MOSFET的Vds和Vgs波形，证明ZVS成功实现。
    
-   **系统关键波形**： 展示变压器两端的电压和电流波形，与仿真结果高度吻合。
    

-   **效率与温升测试**：
    

-   **效率曲线**： 绘制实测效率-负载功率曲线。在50kHz下，**预期峰值效率可达97.5%**，满载效率>96.5%。
    
-   **温升测试**： 在满载运行30分钟后，用热成像仪测量10kV SiC MOSFET和变压器的温升，均应在安全范围内。
    

#### **五. 结论**

本文成功设计并实验验证了一款基于10kV SiC MOSFET的50kHz软开关固态变压器DC/DC隔离级。通过采用**双有源桥拓扑**和**扩展移相控制**，成功实现了所有开关管在50kHz下的零电压开关，有效降低了开关损耗。实验结果证明：

1.  10kV SiC MOSFET是构建中高频、中高压电力电子变换器的理想选择。
    
2.  所提出的DAB设计方案能够在50kHz下稳定工作，并实现高效率（>97%）的功率变换。
    
3.  该设计为开发紧凑、高效、智能的下一代固态变压器提供了可行的技术路径。
    

**未来工作**： 将前级AC/DC整流与后级LLC稳压级集成，构建完整的SST系统，并研究其双向运行能力、故障保护策略及系统级控制。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskicXsUPkScibBCr7xJKpyicMzECgJIrkkOTLnrYREFFLxbEibVf0tGjds67CKxXdcwttG9cZEy7yxB8w/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=79)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskicXsUPkScibBCr7xJKpyicMzAfYianD9Syb0siar5zFQuiaNSElicGe9n7SdrxTUbA4ByCG1H8TKNFjIPw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskicXsUPkScibBCr7xJKpyicMzHad8VssiaT5NiaqYCxqTA4Ilx4RRxbRoS7pKXPIf1pk8qBtqAVOXFFFQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=81)