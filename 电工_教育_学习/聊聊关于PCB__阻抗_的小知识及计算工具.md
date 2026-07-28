# 聊聊关于PCB "阻抗"的小知识及计算工具

原创 硬件笔记本 2022-01-11 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/Cjf1bff9RWb2DP27jej8Iw](https://mp.weixin.qq.com/s/Cjf1bff9RWb2DP27jej8Iw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")  

  

没有阻抗控制的话，将引发相当大的信号反射和信号失真，导致设计失败。常见的信号，如PCI总线、PCI-E总线、USB、以太网、DDR内存、LVDS信号等，均需要进行阻抗控制。阻抗控制最终需要通过PCB设计实现，对PCB板工艺也提出更高要求，经过与PCB厂的沟通，并结合EDA软件的使用，按照信号完整性要求去控制走线的阻抗。

  

不同的走线方式都是可以通过计算得到对应的阻抗值。

  

微带线（microstrip line）

  

它由一根带状导线与地平面构成，中间是电介质。如果电介质的介电常数、线的宽度、及其与地平面的距离是可控的，则它的特性阻抗也是可控的，其精确度将在±5％之内。  

  

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx0qADib7w84RzKibwJuCvZlHiaoWPbRa40RNcwJfibIBFxNia1eJYDqPYqCrw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx0YQlKibH6BbibaD5QyyGiaCk70E1icL9BUdsI5uV9UE68icSPPKgWic44VOqA/640?wx_fmt=jpeg)  

带状线（stripline）

  

带状线就是一条置于两层导电平面之间的电介质中间的铜带。如果线的厚度和宽度，介质的介电常数，以及两层接地平面的距离都是可控的，则线的特性阻抗也是可控的，且精度在10%之内。  

  

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx0vicZD22uoqhIuCicDqIq8pn0abvxEtS2YWH5cdOgkib6Ch2QZHZa5vQqA/640?wx_fmt=jpeg)  

  

多层板的结构

  

为了很好地对PCB进行阻抗控制，首先要了解PCB的结构：  

  

通常我们所说的多层板是由芯板和半固化片互相层叠压合而成的，芯板是一种硬质的、有特定厚度的、两面包铜的板材，是构成印制板的基础材料。而半固化片构成所谓的浸润层，起到粘合芯板的作用，虽然也有一定的初始厚度，但是在压制过程中其厚度会发生一些变化。

  

通常多层板最外面的两个介质层都是浸润层，在这两层的外面使用单独的铜箔层作为外层铜箔。外层铜箔和内层铜箔的原始厚度规格，一般有0.5OZ、1OZ、2OZ（1OZ约为35um或1.4mil）三种，但经过一系列表面处理后，外层铜箔的最终厚度一般会增加将近1OZ左右。内层铜箔即为芯板两面的包铜，其最终厚度与原始厚度相差很小，但由于蚀刻的原因，一般会减少几个um。

  

多层板的最外层是阻焊层，就是我们常说的“绿油”，当然它也可以是黄色或者其它颜色。阻焊层的厚度一般不太容易准确确定，在表面无铜箔的区域比有铜箔的区域要稍厚一些，但因为缺少了铜箔的厚度，所以铜箔还是显得更突出，当我们用手指触摸印制板表面时就能感觉到。

  

当制作某一特定厚度的印制板时，一方面要求合理地选择各种材料的参数，另一方面，半固化片最终成型厚度也会比初始厚度小一些。下面是一个典型的6层

板叠层结构

  

　　![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx0JMhsjk6J8BpFsycYaAcyTeLNSvfb1sOib1AdN6t0EHmn6xKVBH4PHuA/640?wx_fmt=jpeg)  

PCB的参数

  

不同的印制板厂，PCB的参数会有细微的差异，通过与电路板厂技术支持的沟通，得到该厂的一些参数数据：  

  

表层铜箔：可以使用的表层铜箔材料厚度有三种：12um、18um和35um。加工完成后的最终厚度大约是44um、50um和67um。

  

芯板：我们常用的板材是S1141A，标准的FR-4，两面包铜，可选用的规格可与厂家联系确定。

半固化片

  

规格(原始厚度)有7628(0.185mm)，2116(0.105mm)，1080(0.075mm)，3313(0.095mm )，实际压制完成后的厚度通常会比原始值小10-15um左右。同一个浸润层最多可以使用3个半固化片，而且3个半固化片的厚度不能都相同，最少可以只用一个半固化片，但有的厂家要求必须至少使用两个。如果半固化片的厚度不够，可以把芯板两面的铜箔蚀刻掉，再在两面用半固化片粘连，这样可以实现较厚的浸润层。  

  

阻焊层：铜箔上面的阻焊层厚度C2≈8-10um，表面无铜箔区域的阻焊层厚度C1根据表面铜厚的不同而不同，当表面铜厚为45um时C1≈13-15um，当表面铜厚为70um时C1≈17-18um。

  

导线横截面：我们会以为导线的横截面是一个矩形，但实际上却是一个梯形。以TOP层为例，当铜箔厚度为1OZ时，梯形的上底边比下底边短1MIL。比如线宽5MIL，那么其上底边约4MIL，下底边5MIL。上下底边的差异和铜厚有关，下表是不同情况下梯形上下底的关系。

  

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx0xl5UGqbNjzcgVoGOtcEbJsugswe7MiaCsYMWzm5oggjxmw4cY4BWgFA/640?wx_fmt=png)

  

介电常数：半固化片的介电常数与厚度有关，下表为不同型号的半固化片厚度和介电常数参数：

  

　　![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx0vwBBajJR7ibickZ5H3iba4Sa5oeVicqymV0opUYn9JXNhAS8qaq1z0ehKA/640?wx_fmt=png)

  

板材的介电常数与其所用的树脂材料有关，FR4板材其介电常数为4.2—4.7，并且随着频率的增加会减小。

  

介质损耗因数：电介质材料在交变电场作用下，由于发热而消耗的能量称之谓介质损耗，通常以介质损耗因数tanδ表示。S1141A的典型值为0.015。

能确保加工的最小线宽和线距：4mil/4mil。

  

**阻抗计算工具简介：**

当我们了解了多层板的结构并掌握了所需要的参数后，就可以通过EDA软件来计算阻抗。可以使用Allegro来计算，但这里向大家推荐另一个工具Polar SI9000，这是一个很好的计算特征阻抗的工具，现在很多印制板厂都在用这个软件。

  

无论是差分线还是单端线，当计算内层信号的特征阻抗时，你会发现Polar SI9000的计算结果与Allegro仅存在着微小的差距，这跟一些细节上的处理有关，比如说导线横截面的形状。但如果是计算表层信号的特征阻抗，我建议你选择Coated模型，而不是Surface模型，因为这类模型考虑了阻焊层的存在，所以结果会更准确。下图是用Polar SI9000计算在考虑阻焊层的情况下表层差分线阻抗的部分截图：

  

　　![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHNrxDInWkNWHjWiaHAqvUBx05ezKNEV7calwAOj0dLicuYuJQmyiaHD7ok8Xc4qKq2Uga0N3YoG4mBSw/640?wx_fmt=jpeg)

  

由于阻焊层的厚度不易控制，所以也可以根据板厂的建议，使用一个近似的办法：在Surface模型计算的结果上减去一个特定的值，建议差分阻抗减去8欧姆，单端阻抗减去2欧姆。

  

后台回复“**阻抗计算工具**”，即可获取如下软件安装包链接。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjeAGaeNiayUhdJHGpLNYia6D9uaGic64NiaXCSNwicYK6iav2VXkhBAXicoxxQGuyf5Za3uag0fsibclibL6g/640?wx_fmt=png)

  

差分对走线的PCB要求

  

（1）确定走线模式、参数及阻抗计算。差分对走线分外层微带线差分模式和内层带状线差分模式两种，通过合理设置参数，阻抗可利用相关阻抗计算软件(如POLAR-SI9000)计算也可利用阻抗计算公式计算。  

  

（2）走平行等距线。确定走线线宽及间距，在走线时要严格按照计算出的线宽和间距，两线间距要一直保持不变，也就是要保持平行。平行的方式有两种：一种为两条线走在同一线层(side-by-side)，另一种为两条线走在上下相两层(over-under)。一般尽量避免使用后者即层间差分信号， 因为在PCB板的实际加工过程中，由于层叠之间的层压对准精度大大低于同层蚀刻精度，以及层压过程中的介质流失，不能保证差分线的间距等于层间介质厚度， 会造成层间差分对的差分阻抗变化。困此建议尽量使用同层内的差分。

  

来源：网络整理。如涉及版权，请联系删除。

  

\-END\-

  

  

  

推荐阅读

  

  

  

-   [一文看懂光绘文件（文末附资料）](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486059&idx=1&sn=2b671014b8793fffb88f37aaab1f2467&chksm=c309d4b9f47e5dafd57e9ee84b2e146ad35e4befcdd6ac2019798b59a2bef23bd2200856355c&scene=21#wechat_redirect)
    
-   [PADS中常见敷铜问题解决](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486022&idx=1&sn=125af49bd11a6d278a146d0a103dcf49&chksm=c309d494f47e5d82889fc0030093fb989902b6d40071debfd3c1b405152e94705f8b93851ab2&scene=21#wechat_redirect)
    
-   [AD画板过程中的这些问题你遇到过吗？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486068&idx=1&sn=dd90c52d7cf1be55616e4c1fd8f558a7&chksm=c309d4a6f47e5db0a11a28dc3c753dffb0bfb42daec10f0b424821d65e7e77207ac560255ff0&scene=21#wechat_redirect)
    
-   [电路原理图设计，你不得不知道的英文缩写](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486121&idx=1&sn=58cbb4632012b5a2e12e9a406c490977&chksm=c309d47bf47e5d6d9b1093d9cc97f55285260fd5c441adb65d0e1dc0c35c7321216e6748ebb4&scene=21#wechat_redirect)