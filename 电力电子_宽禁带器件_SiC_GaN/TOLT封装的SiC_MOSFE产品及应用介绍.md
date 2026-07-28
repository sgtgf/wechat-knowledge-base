# TOLT封装的SiC MOSFE产品及应用介绍


> 原文地址: [https://mp.weixin.qq.com/s/dv8lLEMF6b11s4dylMs20g](https://mp.weixin.qq.com/s/dv8lLEMF6b11s4dylMs20g)

TOLT封装（TO-Leaded Top-side cooling package）是专为**SiC MOSFET**等宽禁带器件开发的一种**顶部散热表面贴装封装。**

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP6V7ibvCGb1hnibKFOgZOmfulU3ibVM8eLO9X2vxX3GtCOyJx43ziaazAYTzuoY1WZAiaicr1HWl5MVrfUHB1l4TiaYiaGfRQRJjibV8uk/640?wx_fmt=png&from=appmsg)

TOLT封装的MOSFET产品拓扑图

**它的核心设计理念是：让热量从封装****顶部**直接传导至散热器，而不是像传统封装（如D2PAK、TOLL）那样通过PCB传导。这种设计直接解决了SiC器件因芯片面积小、功率密度高而带来的严峻热管理挑战。

以下是针对你作为方案开发人员所关注的需求、应用场景与优势的详细分析。

## 📊 一、市场需求与产品介绍

## 1\. 需求驱动因素

**高功率密度需求**：AI服务器、数据中心电源、光伏逆变器、电动汽车等应用对功率密度要求持续提升。

  

**超薄设计趋势**：被称为"卡片式"或"披萨盒"的超薄电源（厚度<4mm）需要更薄的功率器件，TOLT厚度仅2.3mm，远低于传统TO-263的4.5mm。  

10

**自动化制造需求**：TOLT作为SMD器件，支持全自动PCB贴装，相比TO-247等通孔器件大幅降低人工成本。

  

2.产品介绍

  

依托成熟的SiC MOSFET 芯片平台，已量产多种贴片封装的SiC MOSFET,如TO263-7、TOLL、DFN8\*8、DFN5\*6等、产品电压涵盖650V、1200V、1700V,电流1A~150A。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOpNibXzEb4PEj4yUjlDwVLMmZQFt7N7WRnDg1AZC0rvleteHsbvtiajMTE7JmLAZtEZbGJZd9ET5xQcCNUicS77um0pPxiaic1j3Jg/640?wx_fmt=png&from=appmsg)

己量产1200V 30mΩ（1200V75A)和45mΩ(1200V60A）TOLT封装SiC MOSFET，与现有封装方案形成全场景互补，为客户提供高兼容、高可靠、低落地成本的顶散器件方案。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOqKWZIkuCPqu3BF71VKIoiborTTrJhp1KAccUsOjVYHOgJo9ZZquicWcOk85BaRFfbuyJX9dPLXr2m7wrbcMRoliciaWJnpWFKZSg/640?wx_fmt=png&from=appmsg)

1200V 30mΩ（1200V75A)的基本参数表，驱动兼容+18V/+15V

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOy2ZwhmdfUkNUYBsDHUficRz6z3ia3ucPCOeYdFZJJYnmuLPiaYYWajz7TSfyAoYnSd4LdAe5YC7gUGKghhhawIkl7DyJoUGncwA/640?wx_fmt=png&from=appmsg)

1200V 45mΩ（1200V60A)的基本参数表

🚀 二、技术应用优势（重点）

### 1\. 热性能优势

**核心优势**：TOLT封装通过顶部散热路径，完全绕过了PCB这个"热瓶颈"。

对比项

传统底部散热封装（D2PAK/TOLL）

TOLT顶部散热封装

**散热路径**

芯片 → 封装底部 → PCB → 散热器

芯片 → 封装顶部 → 散热器（直接）

**热阻**

较高（需经过PCB热过孔）

**结到散热器热阻降低约17%-19%**\-4

**散热能力**

受限

**散热性提升约39%10**

**芯片选型**

需更大电流、成本高的芯片

**可用小电流芯片实现相同性能，成本节省15%-20%**

**实际效果**：相同芯片条件下，TOLT封装允许更高的功率输出，或在相同功率下降低结温，提升可靠性。

芯片倒置设计，漏极金属层直出封装顶面，热量100% 绕过 PCB 直连散热器，彻底解决传统底部散热30%—50% 的系统热阻损耗，系统级热阻较TOLL 降低 35%，高温满负荷结温更稳定。

  

**工程师价值：**同散热器条件下，可提升功率输出上限，或缩小 30% 散热器体积，解决 PCB 空间不足的核心难题。

2\. 电气性能优势

**低寄生电感**：小型化设计缩短了内部互连长度，显著降低封装寄生电感，这对于SiC器件的高速开关特性至关重要。

**Kelvin源极引脚**：TOLT器件集成了Kelvin源极引脚，可优化栅极驱动性能，降低大电流下的导通损耗。

**开关波形更干净**：寄生电感降低后，电压过冲和振铃显著减少，开关损耗和EMI辐射水平同步降低。

  

独立 Kelvin 源极设计，驱动与功率回路完全分离，封装寄生电感低至 2-3nH（仅为传统TO-247的1/5），有效抑制开关尖峰与振荡；配合30mΩ 低导通电阻，助力整机峰值效率突破 98.8%。

工程师价值：开关波形更干净，大幅缩短 EMI 调试周期，同步缩小磁性元件体积，降低整机 BOM 成本。

3\. EMI优势（关键设计价值）

传统底部散热封装依赖**热过孔**散热，这些过孔会阻断地平面的完整回流路径，形成较大的电流环路，增加EMI辐射。。

**TOLT的解决方案**：将散热路径完全移出PCB，使电流回路可直接在器件下方闭合，**显著缩小高频电流环路面积**，从源头降低EMI，缩短产品EMC调试时间和成本。

### 4\. 机械与制造优势

**超薄尺寸**：厚度仅2.3mm，器件面积比传统封装减小约26%。  

8

**SMD贴装**：支持全自动化PCB组装，无需人工安装绝缘垫片和紧固螺丝，大幅提升制造效率。  

4

**双面PCB利用率**：由于散热路径在顶部，PCB背面可完全用于布线，提升布局灵活性。

  

鸥翼引脚可充分吸收热膨胀应力，板级热循环耐受超6000次，远超AEC-Q101 车规要求，完美适配户外、车载等大温差、强振动的严苛场景。

  

**工程师价值：**产品长期运行故障率更低，大幅减少售后返修与维护成本。

  

5.全兼容 TOLL 封装，零改板快速升级

  

引脚布局与行业主流 TOLL 封装完全兼容，现有TOLL 方案可直接替换升级，无需改板、无需调整产线工艺，大幅缩短研发周期与升级成本。

  

**工程师价值：**不用推翻原有设计，仅更换器件即可实现散热与效率双重跃升，大幅缩短产品上市周期。这也是 TOLT 封装相比其他顶散方案，最核心的落地优势 —— 无需额外投入开发资源，就能快速享受到顶部散热的性能红利。

  

## 🎯 三、主要应用场景

TOLT封装的SiC MOSFET主要面向**高功率密度、高效率、散热受限**的应用场景：：

### 1\. 汽车电子![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNAZXz1FsGzEQ8m5qHJsQIoH5Xbguicora333LYviaib5fRHaDgshqpmnuDTIC9jQhHTKwyeGpibHsEuhn9C3ibfW3O4oQm2zZoAcW0/640?wx_fmt=png&from=appmsg)

**电动汽车牵引逆变器；**

**车载充电机（OBC）；**

**高压DC-DC转换器；**

**48V轻混系统（MHEV）；**

**电动压缩机；**

### 2\. 数据中心与AI服务器![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNggrVhqRwz7XnMVCraib5WSKUmkGGmSm3KwPM3zLMkwUxK1goqtxNBa6oyO9TmRaqVVw8CssgiaVibmLgepSR7Rd4L9aicJd3nSc8/640?wx_fmt=png&from=appmsg)

**AI服务器电源**（特别是图腾柱PFC电路）——AI算力增长驱动单机架功率从3kW向20kW演进，TOLT封装是满足功率密度需求的关键。6

**数据中心PSU**（电源单元）。6

### 3\. 可再生能源![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOgodxB3iak5fUS06t6auaJY5ResmExu1VQsIRc50sFQibthibeXbMznCvcFxr1IHKLFjHwvM7T4pY9NqGcBpq1MnjBU5HGbuFvLc/640?wx_fmt=png&from=appmsg)

**光伏逆变器**（特别是组串式和小型化逆变器）；

**储能系统（ESS）；**

### 4\. 充电基础设施![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpO1ic4Q8z1NVlD1370ej8tKo2icCS5f4SE1WJ6LH0fia8s3lZp6YNobMqgoLGHFvLZRDw4cQ3iboA5OshibuscuJ9KicBwczRdtWcfxg/640?wx_fmt=jpeg&from=appmsg)

**公共超级充电桩**（40-60kW模块）；

**家用直流充电桩**（7-22kW）；

### 5\. 工业应用![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN4fR1cebZoEunYe55IuoMLMR1MibAFd6WWbmcj6SRBU5QUW6kOwQDQEnQQjNDLEcLAaiaXFeZicp13ojoAFnNQAbccFicbaGAaJ0w/640?wx_fmt=png&from=appmsg)

**工业电机驱动；**

**不间断电源（UPS）；**

**5G基站电源；**

## 📝 四、选型建议

### 1\. 电压等级选择

**650V**：适合400V母线系统（如OBC、服务器电源、光伏）；

1200V或更高电压：适合800V母线系统（如高压OBC、牵引逆变器）；

### 2\. 导通电阻选择

**12-30mΩ**：大功率主开关，如3kW以上图腾柱PFC；

**45~80mΩ**：中等功率应用，如1.5-3kW电源；

**80mΩ及以上**：辅助电源、小功率DC-DC；

### 3\. 配套方案

若电路拓扑需要SiC MOSFET与SiC SBD配合（如Vienna PFC、升压电路），建议选择同贴片**封装的SBD**，简化散热器机械布局和热设计。。

## ⚠️ 五、技术挑战与注意事项

**散热器绝缘处理**：由于封装顶部为金属散热面且与芯片电气连接（通常是漏极），安装时需要**绝缘垫片**或使用**绝缘散热器。**

**成本考量**：SiC材料成本仍高于Si，但TOLT封装允许使用更小芯片，已实现15%-20%的系统成本节省。

  

**可靠性验证**：高频、高温工况下的长期稳定性需在系统级进行充分验证。

  

总结

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpP5lD9ibEEZxMMVnZ3yichp5qJjXAyGkar6oDk2cC1abYKu9zCTbwx8yWSUOqkY0ib0PHut5EjCe9dVkaicDSkR0oedpibkvKGgkRt8/640?wx_fmt=jpeg)

TOLT封装SiC MOSFET是针对**高功率密度、薄型化设计、散热受限**场景的优选方案。其核心价值在于：**用更小的芯片实现更大功率，用更简单的EMC设计缩短上市时间，用SMD工艺降低制造成本**。对于固态变压器等高功率密度电力电子方案，TOLT封装在OBC级、DC-DC级以及辅助电源中都有明确的应用价值。

  

碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSmtiaWGcLWabxku5Slx136biau3uDZppzVTJKicTLEQgwO0Tn6BsVw9uZgErrOj17ibzXRTRddeN5MDt6niaQCYKTliayOqMENWowk/640?wx_fmt=png&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=7)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOXhvNIuzIaeQs5qxfbRPPoT9IKVWvuCHJNicvuAuaJq9APVveXAMEh7BBmm3CklicbGc0sAvnkru8NicuB6sAib8LTQe5Sc4QXdqg/640?wx_fmt=png&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=8)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOql3OZWt3F2FT1icbNiaUKWcjvVAHibLsaHKtic8C0HdFpI5CicPBIFF0YPIutib0SrUpdic09EXpWbqmFwgIIeeFZetdCxmaic4ZocLA/640?wx_fmt=png&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=9)

[10种封装的碳化硅MOSFET和11种封装的SiC功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247533514&idx=1&sn=5a094030fb5da795f6e432cf3bcc332c&scene=21#wechat_redirect)

  

[HPD封装的SiC功率模块的产品介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517124&idx=1&sn=35085cc392a067787930bf863a134590&scene=21#wechat_redirect)

  

[MD3系列的三相全桥碳化硅（SiC）功率模块的产品及应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247519655&idx=1&sn=079d26a795b2ff807b28e5736e8b06d9&scene=21#wechat_redirect)

  

[MEK6封装三相全桥碳化硅模块在载人小型飞机电调系统的突破性应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517193&idx=1&sn=684c24f1755b073b770c1c7ab9cc50ad&scene=21#wechat_redirect)

  

[62mm封装的SiC功率模块的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247515543&idx=1&sn=9b90b76843b8453c434ffd9ada6cbd7f&scene=21#wechat_redirect)

  

[DCM封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517694&idx=1&sn=1679554149297473be8c46272265d3a0&scene=21#wechat_redirect)

  

[Econodual封装1200V1000A的SiC功率模块产品介绍及仿真测试](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513868&idx=1&sn=0dc0d8b427d47c622018c5d97ffc080a&scene=21#wechat_redirect)

  

[34mm封装碳化硅MOSFET半桥模块，助力工业电源（焊机逆变、感应加热设备、高频逆变器、不间断电源）的高效化和小型化](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247507568&idx=1&sn=19b012f5ecd5e3f9bbcc07551f73f03e&scene=21#wechat_redirect)

  

[Easy封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517622&idx=1&sn=d7ae98ac554700ccdf005e03e189705e&scene=21#wechat_redirect)

  

[SM8贴片塑封SiC半桥模块，具有顶部散热层，集成了NTC温度传感器，适合紧凑、轻便、高效率的应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517087&idx=1&sn=2aa39b989036cb20954d564dd5ad19a8&scene=21#wechat_redirect)

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOaObPzCyx57ZChTG0qNgiaAB9HNUKjohjFeYcDkeC5vvBRhkExl27aelIhqN9UK2uxXa2WAdMTSk4R0WwS3jiaGIk8X4LbicNTsc/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOnicibBa3xeq0XFT2YiboWQFZIpMYvj24iaicSNa2fWTwyeCcWLjLLpyCkrwiao2u0qQQXsKeicYbV1EbSaJccNU0zWkibAQ4OO7qGRrw/640?wx_fmt=jpeg&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=31)

###   

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNou12I3qic3zsic8uflZW13kIFtPP1qFKwjPCkoNlfpKckSwXg1zrXq8ljicyoBUwzma3ugBlHKdOYDmY5rdibLySxfwlpYyGQicvc/640?wx_fmt=jpeg&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)