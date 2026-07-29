# Buck开关电源拓扑结构分析

原创 电路一点通 2025-08-28 11:49 广东

> 原文地址: [https://mp.weixin.qq.com/s/Rhjmse\_PRjcKdMzhAD1Qlg](https://mp.weixin.qq.com/s/Rhjmse_PRjcKdMzhAD1Qlg)

> 详细解析Buck开关电源的工作原理，包括ON状态中电感和电容的动态平衡，以及OFF状态下的反电动势影响。理解这两个阶段有助于掌握电源效率和稳定性关键.

#### 文章目录

-    Buck开关电源拓扑结构分析
    

-   1.1 ON状态从暂态到稳态分析
    
-   1.2 OFF状态从暂态到稳态分析
    
-   延伸阅读：二十种开关电源拓扑结构
    

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

## 1 Buck开关电源拓扑结构分析

先来看一下Buck开关电源的拓扑结构，如下图：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_001_b0d24f2b7e81.png)

### 1.1 ON状态从暂态到稳态分析

开关管导通时的等效电路如下（还需要考虑开关管0.3V的压降）：![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_002_00839987002d.png)  
  

开关管导通的瞬间，此时电感相当于短路，电容相当于短路，此时Vout为0。此后，流过电感的电流不断增加，此时电容也在不断充电。直至电感电流最大，电感相当于短路。由于后级接入了负载电阻RL，那么电容在不断充电也在不断放电，最后会达到动态平衡，我们可以知道电容最大电压为Vin，所以动态平衡后的电压Vout<Vin。

### 1.2 OFF状态从暂态到稳态分析

开关管断开时的等效电路如下图所示：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_003_48a7fd796f2e.png)  
  

我们需要知道开关管断开时，电感两端会产生反向电动势，最大大小为Vin，所以此时Vout=Vin-0.7，所以我们可以得出开关管断开时Vout < Vin - 0.7。

  

延伸阅读：

下面为大家整理汇总了开关电源20种基本拓扑，帮助系统掌握每种电路结构的工作原理与基本特性。

**一、20种开关电源拓扑对比**

**常见的基本拓扑结构：**

■ Buck 降压

■ Boost 升压

■ Buck-Boost 降压-升压

■ Flyback 反激

■ Forward 正激

■ Two-Transistor Forward 双晶体管正激

■ Push-Pull 推挽

■ Half Bridge 半桥

■ Full Bridge 全桥

■ SEPIC

■ C’uk

**二、基本的脉冲宽度调制波形**

这些拓扑结构都与开关式电路有关，基本的脉冲宽度调制波形定义如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_004_9e11f9febd65.jpg)

**三、Buck 降压**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_005_c83bffe7981c.jpg)

特点：

■ 把输入降至一个较低的电压

■ 可能是最简单的电路

■ 电感/电容滤波器滤平开关后的方波

■ 输出总是小于或等于输入

■ 输入电流不连续 (斩波)

■ 输出电流平滑

**四、Boost 升压**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_006_7d0bbf81b061.jpg)

特点：

■ 把输入升至一个较高的电压

■ 与降压一样，但重新安排了电感、开关和二极管

■ 输出总是比大于或等于输入(忽略二极管的正向压降)

■ 输入电流平滑

■ 输出电流不连续 (斩波)

**五、Buck-Boost 降压-升压**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_007_873c4d369995.jpg)

特点：

■ 电感、开关和二极管的另一种安排方法

■ 结合了降压和升压电路的缺点

■ 输入电流不连续 (斩波)

■ 输出电流也不连续 (斩波)

■ 输出总是与输入反向 (注意电容的极性)，但是幅度可以小于或大于输入

■ “反激”变换器实际是降压-升压电路隔离（变压器耦合）形式。

**六、Flyback 反激**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_008_53f568b46bc4.jpg)

特点：

■ 如降压-升压电路一样工作，但是电感有两个绕组，同时作为变压器和电感

■ 输出可以为正或为负，由线圈和二极管的极性决定。

■ 输出电压可以大于或小于输入电压，由变压器的匝数比决定。

■ 这是隔离拓扑结构中最简单的

■ 增加次级绕组和电路可以得到多个输出

**七、Forward 正激**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_009_c10b3ebff89a.jpg)

特点：

■ 降压电路的变压器耦合形式。

■ 不连续的输入电流，平滑的输出电流。

■ 因为采用变压器，输出可以大于或小于输入，可以是任何极性。

■ 增加次级绕组和电路可以获得多个输出。

■ 在每个开关周期中必须对变压器磁芯去磁。常用的做法是增加一个与初级绕组匝数相同的绕组。

■ 在开关接通阶段存储在初级电感中的能量，在开关断开阶段通过另外的绕组和二极管释放。

**八、Two-Transistor Forward双晶体管正激**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_010_df6906f79134.jpg)

特点：

■ 两个开关同时工作。

■ 开关断开时，存储在变压器中的能量使初级的极性反向，使二极管导通。

主要优点：

■ 每个开关上的电压永远不会超过输入电压。

■ 无需对绕组磁道复位。

**九、Push-Pull 推挽**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_011_a17317b00f0a.jpg)

特点：

■ 开关（FET）的驱动不同相，进行脉冲宽度调制（PWM）以调节输出电压。

■ 良好的变压器磁芯利用率---在两个半周期中都传输功率。

■ 全波拓扑结构,所以输出纹波频率是变压器频率的两倍。

■ 施加在FET上的电压是输入电压的两倍。

**十、Half-Bridge 半桥**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_012_2800dfb0b3c6.jpg)

特点：

■ 较高功率变换器极为常用的拓扑结构。

■ 开关（FET）的驱动不同相，进行脉冲宽度调制（PWM）以调节输出电压。

■ 良好的变压器磁芯利用率---在两个半周期中都传输功率。而且初级绕组的利用率优于推挽电路。

■ 全波拓扑结构,所以输出纹波频率是变压器频率的两倍。

■ 施加在FET上的电压与输入电压相等。

**十一、Full-Bridge 全桥**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_013_b76b9838de64.jpg)

特点：

■ 较高功率变换器最为常用的拓扑结构。

■ 开关（FET）以对角对的形式驱动，进行脉冲宽度调制（PWM）以调节输出电压。

■ 良好的变压器磁芯利用率---在两个半周期中都传输功率。

■ 全波拓扑结构，所以输出纹波频率是变压器频率的两倍。

■ 施加在FETs上的电压与输入电压相等。

■ 在给定的功率下，初级电流是半桥的一半。

**十二、SEPIC 单端初级电感变换器**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_014_a6b4b3f2db1a.jpg)

特点：

■ 输出电压可以大于或小于输入电压。

■ 与升压电路一样，输入电流平滑，但是输出电流不连续。

■ 能量通过电容从输入传输至输出。

■ 需要两个电感。

**十三、C'uk(Slobodan C'uk 的专利)**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_015_f7d3be5008cd.jpg)

特点：

■ 输出反相

■ 输出电压的幅度可以大于或小于输入。

■ 输入电流和输出电流都是平滑的。

■ 能量通过电容从输入传输至输出。

■ 需要两个电感。

■ 电感可以耦合获得零纹波电感电流。

**十四、电路工作的细节**

下面讲解几种拓扑结构的工作细节：

■ 降压调整器：连续导电、临界导电、不连续导电

■ 升压调整器 (连续导电)

■ 变压器工作

■ 反激变压器

■ 正激变压器

**十五、Buck-降压调整器-连续导电**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_016_4aa2e39791b6.jpg)

特点：

■ 电感电流连续。

■ Vout是其输入电压 (V1)的均值。

■ 输出电压为输入电压乘以开关的负荷比 (D)。

■ 接通时，电感电流从电池流出。

■ 开关断开时电流流过二极管。

■ 忽略开关和电感中的损耗, D 与负载电流无关。

■ 降压调整器和其派生电路的特征是：

输入电流不连续 (斩波), 输出电流连续 (平滑)。

**十六、Buck-降压调整器-临界导电**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_017_de8eff8c3b1c.jpg)

■ 电感电流仍然是连续的，只是当开关再次接通时 “达到”零，这被称为 “临界导电”。输出电压仍等于输入电压乘以 D。

**十七、Buck-降压调整器-不连续导电**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_018_00a44540d738.jpg)

■ 在这种情况下，电感中的电流在每个周期的一段时间中为零。

■ 输出电压仍然 (始终)是 v1 的平均值。

■ 输出电压不是输入电压乘以开关的负荷比 (D)。

■ 当负载电流低于临界值时,D 随着负载电流而变化(而 Vout 保持不变)。

**十八、Boost 升压调整器**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_019_1810b78c2f47.jpg)

■ 输出电压始终大于（或等于）输入电压。

■ 输入电流连续，输出电流不连续（与降压调整器相反）。

■ 输出电压与负荷比（D）之间的关系不如在降压调整器中那么简单。在连续导电的情况下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_020_a0f980e04e2c.jpg)

在本例中，Vin = 5,Vout = 15, and D = 2/3. Vout = 15，D = 2/3.

**十九、变压器工作（包括初级电感的作用）**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_021_0b5547b0572d.jpg)

■ 变压器看作理想变压器，它的初级（磁化）电感与初级并联。

**二十、反激变压器**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_022_4710a7a315fd.jpg)

■ 此处初级电感很低，用于确定峰值电流和存储的能量。当初级开关断开时，能量传送到次级。

**二十一、Forward 正激变换变压器**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_023_f57a511ea03d.jpg)

■ 初级电感很高，因为无需存储能量。

■ 磁化电流 (i1) 流入 “磁化电感”，使磁芯在初级开关断开后去磁 (电压反向)。

**二十二、总结**

■ 此处回顾了目前开关式电源转换中最常见的电路拓扑结构。

■ 还有许多拓扑结构，但大多是此处所述拓扑的组合或变形。

■ 每种拓扑结构包含独特的设计权衡：

1）施加在开关上的电压

2）斩波和平滑输入输出电流

3）绕组的利用率

■ 选择最佳的拓扑结构需要研究：

1）输入和输出电压范围

2）电流范围

3）成本和性能、大小和重量之比

  

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[5大半导体设备Vendor薪资，谁给钱狠...](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551479&idx=1&sn=fc265d95b5431884d8582cf39b321b98&scene=21#wechat_redirect)**
    
-   **[【嵌入式】快速入门，看得明明白白](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247551438&idx=1&sn=7ab86b6320e914751e10832462e1c999&scene=21#wechat_redirect)**
    
-   **[【汽车科普】全球知名汽车品牌简史](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247526033&idx=1&sn=91657ab33979d8dae0df45316f9b2e96&token=792100723&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[4款10W 新能源纯电家用轿车，选谁更合适](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247525687&idx=1&sn=48688fc3be74b6d36707e758d1d455a1&token=792100723&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[从家里灯到厂里机器的20个电路实例全记录](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456261626&idx=1&sn=7a32a27a43eb360f973df72ecd1f9dbc&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck开关电源拓扑结构分析_images\img_024_7cdaffa04025.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️