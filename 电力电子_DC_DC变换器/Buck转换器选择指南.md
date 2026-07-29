# Buck转换器选择指南

原创 电路一点通 2024-12-04 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/UV1sOevJKFQ-dlkYucKAoA](https://mp.weixin.qq.com/s/UV1sOevJKFQ-dlkYucKAoA)

## **Buck转换器的定义**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_000_3b8cbbf96993.png)

Buck转换器是一种开关模式的降压型转换器，它能提供在高压降比 (VIN/VOUT) 和高负载电流下的高效率与高弹性。

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_001_a8b37a87b291.other)

多数Buck转换器 (Buck) 包含上桥MOSFET和同步整流MOSFET，根据占空比切换电路开关来产生稳定的平均输出电压。其切换波形再透过外部LC滤波器过滤。

### **Buck转换器的特性**

MOSFET是在轮流切换的模式下，所以功耗很低；而藉由控制MOSFET的责任周期，可达到高压降比 (VIN/VOUT)。内部MOSFET的导通电阻 (RDS(ON) ) 会决定Buck转换器的负载能力，而MOSFET的额定电压则决定其最大输入电压。MOSFET的额定电压决定其最大输出电压。切换频率及外部LC滤波器决定输出端的纹波电压。高切换频率的Buck转换器可搭配较小的滤波器，但切换所造成的耗损较高。有些Buck转换器具有脉冲省略模式（Pulse Skipping Mode, PSM），能在轻载时降低切换频率，故能提高轻载时的效率。这对于待机时有省电需求的应用非常重要。

立锜的DC-DC产品组合包含了广泛且不同控制架构的Buck转换器，有电流模式 (CM)、电流模式-恒定导通时间 (CMCOT)、和立锜专有之先进恒定导通时间 (ACOT) 控制架构等。不同的控制架构适用于不同的产品应用和需求。例如，立锜专有之先进恒定导通时间 (ACOT) 控制架构系列产品和CM和CMCOT架构相比，可提供极快速的瞬时响应，为DDR、Core SoC、FPGA和ASIC供电等设备之电源应用的理想选择。

### **Buck转换器架构比较表**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_002_bc5b1d7d6e18.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_003_3ac5773f5f91.png)

## **Buck转换器选择标准**

以下为选择适合您应用的Buck转换器所必须考虑的重点。  

#### 应用之输入电压

  

哪个输入电压范围最符合您的应用？

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_004_f16843c67832.png)

Buck转换器依输入电压范围分为3类，以满足不同的应用要求。LV Buck转换器适用于单节锂离子电池以及5V电源供电的应用。额定18V的HV Buck转换器通常用于从12V供电的应用。此外，我们还为工业电源或汽车应用提供高达36V输入范围的产品。

#### **应用电流之消耗**

如何计算功率损耗和最大应用峰值电流？

考虑Buck转换器的额定电流时，应用中所消耗的平均电流和最大电流都需要考虑。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_005_12ea09ee8e2c.png)

-   该应用的平均电流必须比转换器的额定电流低，如规格书中所提；二者之间的差异和转换器的功耗与该应用的散热条件有关。此平均电流会决定开关MOSFET的平均热能，其中包括了导通损耗与开关损耗。导通损耗也和内部MOSFET的导通电阻 (RDS(ON)) 有关：即I2 \* RDS(ON)。若高侧和低侧的 RDS(ON)不一样，在考虑该应用的降压比时，也须同时考虑高侧和低侧MOSFET的功耗。开关损耗则与电流、输入电压、和开关频率有关。在一般标准应用中，开关损耗大约是总损耗的30％；但在高输入电压或高频率的应用中，开关损耗则会大幅增加。该应用的总功率损耗可由规格书的效率曲线： ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_006_51234aa52327.png) 算出。
    
      
    
-   在检测应用的峰值负载电流时，必须考虑产品的最大额定电流和过电流保护值。负载电流和电感峰值或谷值电流之间的差异是电感纹波电流的1/2。因此，纹波电流值也会影响最大应用负载电流和过电流保护值的关系。
    

**何时选择 Force-PWM 模式或 PSM 模式?**

  

对于用于低功率待机模式的电源，最好能尽量提高Buck转换器在轻载时的效率。在全负载范围内，强制PWM型的Buck转换器之开关频率均为固定；也就是，若在轻载时使用高开关频率，则绝大部分的损耗都会是由开关损耗所引起。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_007_e43ec9d29a7a.png)  

**如何选择合适的开关频率？**

  

 开关频率较高就能使用较小的电感和电容，且步阶负载的响应较好；然而，会增加开关损耗，且使EMI辐射的频率范围变大。开关频率较高也会限制可实现的最大降压比：最小责任周期受限于转换器的最小导通时间和开关频率： ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_008_ff45b14e4eb0.png) , so   ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck转换器选择指南_images\img_009_8b222427e214.png)  
一般而言，较高输入电压的应用适合使用开关切换频率较低的产品。  
     

**如何降低BOM成本？**

  

选择正确的Buck控制架构，再加上最合适的IC封装，可为您同时节省被动组件和IC的成本。例如立锜科技的ACOT®控制架构可提供卓越的负载瞬态响应特性，让您在缩减了输出电容大小的情况下还能满足您在大负载脉冲下对电压跌落幅度的要求。使用芯片倒装技术的TSOT-23-6封装，由于无需使用接合线（bonding wires），具有极低的RDS(ON) 和极佳的热性能，而成本却维持在最低的水平上。

▼ **往期精彩回顾** ▼  

    
-   [硬件工程师入门基础元器件与电路原理](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534998&idx=1&sn=af9f184e13e9054d3b107fed3b46ccd4&token=1225092955&lang=zh_CN&scene=21#wechat_redirect)    
    
-   [STM32电路知识：一次全面的学习体验](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534979&idx=1&sn=4701d7932171c6a7e73dfb3e7b48fd76&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534979&idx=1&sn=4701d7932171c6a7e73dfb3e7b48fd76&scene=21#wechat_redirect)[开关电源典型拓扑—PFC应用意义及工作原理](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534977&idx=2&sn=9ae52cf74d5d3b01dc1aeb43e2e32c0d&scene=21#wechat_redirect)
    
-   [汽车“五大总成”及电气系统示意图（思维导图）  
    ](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486583&idx=1&sn=99e4d48f22775279ac160649bf032bdd&scene=21#wechat_redirect)
    
-   [汽车内外构造、示意图详解-一目了然看得明白！  
    ](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486748&idx=1&sn=dcb82a1a3f6419ba36818d8b03fe2b83&scene=21#wechat_redirect)
    
-   [电动汽车电池管理系统BMS-ppt](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486890&idx=1&sn=d0d0f36c15aabd00bd6caa578b001c6a&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分