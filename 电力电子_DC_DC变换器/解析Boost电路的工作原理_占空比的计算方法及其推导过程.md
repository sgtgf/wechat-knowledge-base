# 解析Boost电路的工作原理、占空比的计算方法及其推导过程

原创 硬件那点事儿 电路一点通 2025-07-23 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/EyymRrXHtFNByzN-\_ukgew](https://mp.weixin.qq.com/s/EyymRrXHtFNByzN-_ukgew)

**Part 01**

**前言**

Boost电路也就是升压电路，用于将输入电压提升至更高的输出电压。其性能的关键在于开关器件的占空比（Duty Cycle），它直接影响输出电压和电路效率。接下来我们就详细解析Boost电路的工作原理、占空比的计算方法及其推导过程。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_000_3c02659ba9e7.png)

**Part 02**

**Boost电路基本原理**

Boost电路主要由电感L、开关器件Q、二极管D、电容C和负载R组成。工作过程分为两个阶段：

开关导通阶段：开关Q闭合，输入电压Vin通过电感L储能，电流线性增加，能量以磁场形式储存。二极管D截止，输出电容C为负载R供电。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_001_27fbb402c6ac.png)

开关关断阶段：开关Q断开，电感L释放能量，通过二极管D向输出电容C和负载R供电，输出电压Vout高于Vin。

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_002_e7f46cb600e8.png)

占空比D定义为开关导通时间Ton与周期T（T = Ton + Toff）的比值：

D = Ton / T

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_003_112aa4dded31.png)

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_004_742f196d2200.png)

**Part 03**

**占空比公式推导**

1.理想情况下的推导

在理想Boost电路中，忽略MOSFET压降，二极管压降。根据伏秒平衡原理，电感在导通和关断阶段的电压-时间积相等。

Vo：输出电压

Vd：二极管正向压降

Vin：输入电压

Vsw：开关损耗电压

导通阶段：开关Q闭合，电感电压VL = Vin，持续时间Ton。

关断阶段：开关Q断开，电感电压VL = Vin - Vout，持续时间Toff。

伏秒平衡方程为： Vin \* Ton =- (Vin - Vout) \* Toff

由于T = Ton + Toff，占空比D = Ton / T，1 - D = Toff / T，代入上式： Vin \* D \* T = -(Vin - Vout) \* (1 - D) \* T

两边消去T（T ≠ 0），得： Vin \* D =- (Vin - Vout) \* (1 - D)

展开并整理： 

D = 1 - Vin / Vout = (Vo - Vin) / Vo

2.考虑MOSFET压降，二极管压降的推导

关断阶段，电感电压VL =  (Vo + Vd) \- Vin

导通阶段VL = Vin - Vsw

伏秒平衡为： (Vin - Vsw) \* Ton = ((Vo + Vd) \- Vin) \* Toff 

展开并整理：

D = (Vo + Vd - Vin) / (Vo + Vd - Vsw)

**Part 04**

**总结**

1.快速计算我们可以用这个公式：D = (Vo - Vin) / Vo

2.精确计算我们可以用这个公式：D = (Vo + Vd - Vin) / (Vo + Vd - Vsw)

3.Vin越低或Vo越高，D越大。

4.Vd和Vsw增加会调整D。

5.上面的推导适用于连续导通模式CCM；不连续导通模式DCM不适用。

  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_005_83dd5bcb794f.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[MOS管导通和工作原理，这样讲解更全面](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550027&idx=1&sn=57d6ebc656eb23e66f46318cedb06414&scene=21#wechat_redirect)**
    
-   **[电路设计LDO线性稳压器要不要并联二极管？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549625&idx=1&sn=0a71180aab661ae4ff2dd38d96ac0096&scene=21#wechat_redirect)**
    
-   **[蔚来能源总部搬迁武汉，（附：内推岗位）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523881&idx=1&sn=b181ea7ffc6b6a7637310d05383305ae&scene=21#wechat_redirect)**
    
-   **[新能源纯电整车控制器上下电控制PPT](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247497083&idx=2&sn=39344af75adcf42b091d134eabe77c6a&scene=21#wechat_redirect)**
    
-   **[高压电机知识培训-PPT(常见故障及处理方法)](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260351&idx=1&sn=c71c631b8a3c0742dd8b87b6361ac43b&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\解析Boost电路的工作原理_占空比的计算方法及其推导过程_images\img_006_d97a53dd76b6.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️