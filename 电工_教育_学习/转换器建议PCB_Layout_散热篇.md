# 转换器建议PCB Layout-散热篇

原创 电路一点通 2025-02-04 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/3kXkOgQTmj60mnieJ2vo9Q](https://mp.weixin.qq.com/s/3kXkOgQTmj60mnieJ2vo9Q)

印刷电路板(PCB)温度过热往往会导致电子电路效能失效，设备的可靠度也会降低。这就是为什么设计者需要优化印刷电路板来提高整体系统散热，而散热孔就是其中一个方法。本文说明通孔的功用以及建议如何配置通孔可达到更高的散热效果。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_000_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

**绪论**

现今碳化矽(SiC)和氮化镓(GaN)等宽带隙半导体的普及，让电源转换器能够实现更高工作温度和输出功率。因此，必须热管理将均匀分布产生的热能，以避免形成危险的热点。

应用文章「转换器建议的PCB Layout-散热篇I」提到透过印刷电路板的通孔，增加发热源散热面积，再利用铜箔层散热，达到高斜率散热曲线，**确保将每个元件保持在安全温度范围内，不应超过制造商数据表指定的限制温度**。但是一昧地随处增加通孔，可能不会有明显的散热效果的，因此使用者需要了解通孔位置的考量。

放置通孔是表面贴装封装上有效降低热阻的方式之一。热阻与热导率和铜箔覆盖面积成反比，由于PCB面积小型化已成一项基本要求故没办法无限加大覆盖面积，若顶层没足够的铜箔空间，只好利用通孔连接到底层铜箔。热导率越大的物质其导热效率也就越快，然而热导率与所选材料有关，下表表示不同材料的热导率

材料

热导率(W/mK)

铜

395

导线架

275

矽

146

铝

208

玻璃纤维板

0.3

PCB结构上通孔的用途为如果是单层板通孔代表PCB表层和底层的铜箔互相连接；如果是多层板通孔代表PCB连接指定层数的铜箔区域。通孔的功能是将同一层板的热能传递到另一层板，也就是将热能引导到其他层。下图显示两种PCB的散热孔例子。

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_001_7d2354e6c99d.png)

 **通孔的配置**

假设PCB上可以放置任意数量的通孔而不会产生额外制造成本和造成非理想效应的话，究竟放多少数量才能最大化散热效果；另外，通孔的尺寸的大小对于散热效果有什么影响呢?以下将一一说明  

**1\. 通孔孔径**

以常见的趋势来看，孔径越大，散热效果越好，但孔径大于一个限制值后，则散热效果未必继续等比例增加，而且孔径越大时，当回流焊制程中可能发生吸锡不正确的焊接问题，因此需要格外小心。由下图实验结果改变内径影响热阻的效果，如预期所说，通孔的内径越大，热阻就越低，但内径不断逐渐加大的话，热阻下降斜率逐渐变缓。为了最佳化散热孔的热导性，建议采用内径约0.3mm-0.4mm。

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_002_48967e9ecc63.png)

 **2.****各个通孔间距离**

玻璃纤维板的目的之一是增加支撑性，一旦通孔数量过多，外力施压造成结构容易倾斜，表面不平整的问题。建议通孔到通孔的间隔距离为1.0mm-1.2mm。

由上可知通孔的内径和数量对热阻有直接影响。更进一步地讨论通孔的位置，可以将通孔放置在尽可能靠近热源的位置，例如发热源的正下方或周围，可以加快散热速度来降低热阻。利用热平衡定律，通孔放在温差越大的地方，则热传导效果越显著。由图3看出，热源下方的通孔的顶层跟底层温差最大，且离热源越远，温差越小(ΔT1>ΔT2>ΔT3)。

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_003_de45055e8408.png)

 **实验**

本次实验于不同通孔位置对电源转换器的温度分布影响，再分别显示温度差异。选用的电源转换器规格如下

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_004_06c6cf61ba54.png)

-   无通孔的情况  
    

电源转换器只有藉由外壳和脚位焊点作为散热路径，所以明显看出PCB的高温区域很广，且量测温度为30.3°C。

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_005_8408558d29f3.png)

-   通孔位置于电源转换器周围远处  
    

将通孔（见图4中蓝点）放置于电源转换器输入输出脚位的铜箔区域，而非控制逻辑讯号走线，以减少温度差压力。量测温度为28.5°C。量测温度相较于无通孔例子，此温度大约降低5.9%。

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_006_f14de09abf36.png)

-   通孔位置于电源转换器周围近处  
    

新增相同数量的通孔于更接近电源转换器，量测温度为22.9°C。测得的温度比远通孔还要降低约19.6%。

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_007_8d83bcb3c735.png)

由此实验可得知，通孔位置离电源转换器越近，则散热效果越佳。  

**结论**

许多电子系统故障是因失控热量引起的，考虑将热量从PCB转移出去有不同方法，本篇说明设计电路板通孔的方法，遵循一些规则能更有效地降低热阻，包含增加通孔数量、通孔孔径以及通孔位置尽可能靠近热源，以上解决方案可以有效地散热并确保电子系统产品的性能和使用寿命。

直流转直流电源转换器

输入电压

48 Vdc

输出电压/电流

15 Vdc / 2.7A

操作温度

\-40~105°C

外壳温度

Max.110°C

风速

20LFM

  ****推荐**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_011_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_010_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_008_ead434f24ea4.png)**![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_012_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_009_ead434f24ea4.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\转换器建议PCB_Layout_散热篇_images\img_013_afb57874096e.jpg)