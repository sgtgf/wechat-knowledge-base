# 看完这篇，请不要再说不懂MOS管

原创 硬件笔记本 2024-05-08 07:36 四川

> 原文地址: [https://mp.weixin.qq.com/s/XxS9Y6iGxMwY7w0642p3og](https://mp.weixin.qq.com/s/XxS9Y6iGxMwY7w0642p3og)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

概 述

功率半导体器件在工业 、消费 、军事等领域都有着广泛应用 ，具有很高的战略地位，下面我们从一张图看功率器件的全貌：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs1mv2hBG0zm4lBuvAjkBN2mY08Z95sLE56iaxmGMm2ojzEiaUDT6YRRwg/640?wx_fmt=jpeg&from=appmsg)

  

功率半导体器件又可根据对电路信号的控程度分为全型 、半控型及不可；或按驱动电路信号 性质分为电压驱动型 、电流驱动型等划分类别 电流驱动型等划分类别 电流驱动型等划分类别 。　　

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsjI8xWB0t6zwvjMWwU48UEsSSpzqtZghKQia4GR2a9jm0mczlibnWKsjw/640?wx_fmt=jpeg&from=appmsg)

  

不同功率半导体器件 ，其承受电压 、电流容量 、阻抗能力 、体积大小等特性也会不同 ，实际使用中 ， 需要根据不同领域 、不同需求来选用合适的器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs8iazlU9iavbziclk2pPZbDlGBK5pOCTcQsqy0c1ZVsGMCTLVnn1Z5ibkvQ/640?wx_fmt=jpeg&from=appmsg)

  

半导体行业从诞生至今 ，先后经历了三代材料的变更程 ，截至目前 ，功率半导体器件领域仍主要采 用以 Si 为代表的第一半导体材料 。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsibebQqJfgHTWgEUOIBBBw9aY3cdt0JaY3tuySYQLlU9eKicmzJYVXaaQ/640?wx_fmt=jpeg&from=appmsg)

  

汇总下半控型和全控型功率器件的特性　

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsOlMIcVqPt1YeLeK4WD4jsF5S8GPiaSSGLMJlMg5yjWY0wyL8yooicRbQ/640?wx_fmt=jpeg&from=appmsg)

  

认识MOSFET

MOS管具有输入阻抗高、噪声低、热稳定性好；制造工艺简单、辐射强，因而通常被用于放大电路或开关电路；　　

（1）主要选型参数：漏源电压VDS（耐压），ID 连续漏电流，RDS(on) 导通电阻，Ciss 输入电容（结电容），品质因数FOM=Ron \* Qg等。

（2）根据不同的工艺又分为　　

Trench MOS：沟槽型MOS，主要低压领域100V内；SGT (Split Gate)MOS：分裂栅MOS，主要中低压领域200V内；SJ MOS：超结MOS，主要在高压领域 600-800V；　　

在开关电源中，如漏极开路电路，漏极原封不动地接负载，叫开路漏极，开路漏极电路中不管负载接多高的电压，都能够接通和关断负载电流。是理想的模拟开关器件。这就是MOS管做开关器件的原理（详细请关注作者其他MOS详解）。

从 市场份额看，MOSFET几乎都集中在国际大厂手中，其中英飞凌2015年收购了IR（美国国际整流器公司）成为行业龙头，安森美也在2016年9月完成对仙童半导体的收购后，市占率跃升至第二，然后销售排名分别是瑞萨、东芝、万国、ST、威世、安世、美格纳等等；　　

与活跃于中国大陆的国际厂商相比，国产企业优势不明显，但这不能说国产没有机会，中国大陆是世界上产业链最齐全的经济活跃区，在功率半导体领域活跃着一批本土制造企业，目前已基本完成产业链布局，且处于快速发展中；特别是MOSFET领域，国产在中低压领域替换进口品牌潜力最大，且部分国产、如士兰、华润微（中航）、吉林华微等都在努力进入世界排名；　

  

主流MOS管品牌

MOS管分为几大系列：美系、日系、韩系、国产。

美系：英飞凌、IR，仙童，安森美，ST，TI ，PI，AOS美国万代半导体等；　　

日系：东芝，瑞萨，ROHM罗姆等；　　

韩系：美格纳，KEC，AUK，森名浩，信安，KIA　　

国产：吉林华微电子股份有限公司，扬州扬杰电子科技股份有限公司，杭州士兰微电子股份有限公司，华润微电子（重庆）有限公司，无锡新洁能，西安后裔，深圳锐俊半导体，无锡华润华晶微电子有限公司，江苏东晨电子科技有限公司（前身东光微），东微半导体，威兆半导体，苏州硅能，无锡市芯途半导体有限公司　　

国产台系：ANPEC，CET，友顺UTC

  

MOS管封装分类

按照安装在PCB板上的方式来划分，MOS管封装主要有两大类：插入式(Through Hole)和表面贴装式(Surface Mount)。　　

插入式就是MOSFET的管脚穿过PCB板的安装孔并焊接在PCB板上。常见的插入式封装有：双列直插式封装(DIP)、晶体管外形封装(TO)、插针网格阵列封装(PGA)三种样式。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsjoZcjEX5tJXDTPcJnfgVWibFYo3ubp3VepNVuHDQRjezyRXaAlUY31A/640?wx_fmt=jpeg&from=appmsg)

插入式封装　　

表面贴裝则是MOSFET的管脚及散热法兰焊接在PCB板表面的焊盘上。典型表面贴装式封装有：晶体管外形(D-PAK)、小外形晶体管(SOT)、小外形封装(SOP)、方形扁平式封装(QFP)、塑封有引线芯片载体(PLCC)等。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qst1fqnkccg5jlg7euToB6aADZIicg1ghytQaj4RDtp6N9BguyTfqIT9Q/640?wx_fmt=jpeg&from=appmsg)

表面贴装式封装　

随着技术的发展，目前主板、显卡等的PCB板采用直插式封装方式的越来越少，更多地选用了表面贴装式封装方式。

1、双列直插式封装(DIP)

DIP封装有两排引脚，需要插入到具有DIP结构的芯片插座上，其派生方式为SDIP(Shrink DIP)，即紧缩双入线封装，较DIP的针脚密度高6倍。

DIP封装结构形式有：多层陶瓷双列直插式DIP、单层陶瓷双列直插式DIP、引线框架式DIP(含玻璃陶瓷封接式、塑料包封结构式、陶瓷低熔玻璃封装式)等。DIP封装的特点是可以很方便地实现PCB板的穿孔焊接，和主板有很好的兼容性。

但由于其封装面积和厚度都比较大，而且引脚在插拔过程中很容易被损坏，可靠性较差;同时由于受工艺的影响，引脚一般都不超过100个，因此在电子产业高度集成化过程中，DIP封装逐渐退出了历史舞台。

2、晶体管外形封装(TO)　　

属于早期的封装规格，例如TO-3P、TO-247、TO-92、TO-92L、TO-220、TO-220F、TO-251等都是插入式封装设计。

TO-3P/247：是中高压、大电流MOS管常用的封装形式，产品具有耐压高、抗击穿能力强等特点。

TO-220/220F：TO-220F是全塑封装，装到散热器上时不必加绝缘垫;TO-220带金属片与中间脚相连，装散热器时要加绝缘垫。这两种封装样式的MOS管外观差不多，可以互换使用。

TO-251：该封装产品主要是为了降低成本和缩小产品体积，主要应用于中压大电流60A以下、高压7N以下环境中。

TO-92：该封装只有低压MOS管(电流10A以下、耐压值60V以下)和高压1N60/65在采用，目的是降低成本。

近年来，由于插入式封装工艺焊接成本高、散热性能也不如贴片式产品，使得表面贴装市场需求量不断增大，也使得TO封装发展到表面贴装式封装。TO-252(又称之为D-PAK)和TO-263(D2PAK)就是表面贴装封装。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsRkszeic4RibLfES7ylZR39UsXhcaXT6cIyA8rIwB1WwA4kdMVJzgRVRg/640?wx_fmt=jpeg&from=appmsg)

TO封装产品外观

TO252/D-PAK是一种塑封贴片封装，常用于功率晶体管、稳压芯片的封装，是目前主流封装之一。

采用该封装方式的MOSFET有3个电极，栅极(G)、漏极(D)、源极(S)。

其中漏极(D)的引脚被剪断不用，而是使用背面的散热板作漏极(D)，直接焊接在PCB上，一方面用于输出大电流，一方面通过PCB散热;所以PCB的D-PAK焊盘有三处，漏极(D)焊盘较大。其封装规范如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsA8e7YouljKn3Q9PadSCrAgLmP1TibvU8IFqzH3lqasrDnchMXblSApQ/640?wx_fmt=jpeg&from=appmsg)

TO-252/D-PAK封装尺寸规格

TO-263是TO-220的一个变种，主要是为了提高生产效率和散热而设计，支持极高的电流和电压，在150A以下、30V以上的中压大电流MOS管中较为多见。

除了D2PAK(TO-263AB)之外，还包括TO263-2、TO263-3、TO263-5、TO263-7等样式，与TO-263为从属关系，主要是引出脚数量和距离不同。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsWVGfnB5F4CicI6OXibCHI2KSL9qjH00iafZuTrRR2IdLISCh8FeWW5B9Q/640?wx_fmt=jpeg&from=appmsg)

TO-263/D2PAK封装尺寸规格

3、插针网格阵列封装(PGA)

PGA(Pin Grid Array Package)芯片内外有多个方阵形的插针，每个方阵形插针沿芯片的四周间隔一定距离排列，根据管脚数目的多少，可以围成2～5圈。安装时，将芯片插入专门的PGA插座即可，具有插拔方便且可靠性高的优势，能适应更高的频率。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qspakv2BteCaOtHpym6cJiceic42DRzxPmmWvz9gpAMNI5tSgSBAbgP4Ew/640?wx_fmt=jpeg&from=appmsg)

PGA封装样式

其芯片基板多数为陶瓷材质，也有部分采用特制的塑料树脂来做基板，在工艺上，引脚中心距通常为2.54mm，引脚数从64到447不等。

这种封装的特点是，封装面积(体积)越小，能够承受的功耗(性能)就越低，反之则越高。这种封装形式芯片在早期比较多见，且多用于CPU等大功耗产品的封装，如英特尔的80486、Pentium均采用此封装样式;不大为MOS管厂家所采纳。

4、小外形晶体管封装(SOT)　

SOT(Small Out-Line Transistor)是贴片型小功率晶体管封装，主要有SOT23、SOT89、SOT143、SOT25(即SOT23-5)等，又衍生出SOT323、SOT363/SOT26(即SOT23-6)等类型，体积比TO封装小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsEHTw8ySqb3rW9k2icB3WrjGbZFmWibrWRJUULd7y6UFuqZXjZpiaWNETg/640?wx_fmt=jpeg&from=appmsg)

SOT封装类型

SOT23是常用的三极管封装形式，有3条翼形引脚，分别为集电极、发射极和基极，分别列于元件长边两侧，其中，发射极和基极在同一侧，常见于小功率晶体管、场效应管和带电阻网络的复合晶体管，强度好，但可焊性差，外形如下图(a)所示。

SOT89具有3条短引脚，分布在晶体管的一侧，另外一侧为金属散热片，与基极相连，以增加散热能力，常见于硅功率表面组装晶体管，适用于较高功率的场合，外形如下图(b)所示。

SOT143具有4条翼形短引脚，从两侧引出，引脚中宽度偏大的一端为集电极，这类封装常见于高频晶体管，外形如下图(c)所示。

SOT252属于大功率晶体管，3条引脚从一侧引出，中间一条引脚较短，为集电极，与另一端较大的引脚相连，该引脚为散热作用的铜片，外形如下图(d)所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsLyyITcha2XxE4kZ8AyleSxh2wPrhIy3jAuQ7ZcvtctDcoTeegkn0jQ/640?wx_fmt=jpeg&from=appmsg)

常见SOT封装外形比较

  

主板上常用四端引脚的SOT-89 MOSFET。其规格尺寸如下：

SOT-89 MOSFET尺寸规格(单位：mm)

5、小外形封装(SOP)

SOP(Small Out-Line Package)是表面贴装型封装之一，也称之为SOL或DFP，引脚从封装两侧引出呈海鸥翼状(L字形)。材料有塑料和陶瓷两种。

SOP封装标准有SOP-8、SOP-16、SOP-20、SOP-28等，SOP后面的数字表示引脚数。MOSFET的SOP封装多数采用SOP-8规格，业界往往把“P”省略，简写为SO(Small Out-Line)。

SOP-8封装尺寸

SO-8为PHILIP公司率先开发，采用塑料封装，没有散热底板，散热不良，一般用于小功率MOSFET。

后逐渐派生出TSOP(薄小外形封装)、VSOP(甚小外形封装)、SSOP(缩小型SOP)、TSSOP(薄的缩小型SOP)等标准规格;其中TSOP和TSSOP常用于MOSFET封装。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QswxuQJImBBQiaEtmZfaiblGibIM2jGGGsiaibAfMttEUEpLqT7E6b8NriajwA/640?wx_fmt=jpeg&from=appmsg)

常用于MOS管的SOP派生规格

  

6、方形扁平式封装(QFP)

QFP(Plastic Quad Flat Package)封装的芯片引脚之间距离很小，管脚很细，一般在大规模或超大型集成电路中采用，其引脚数一般在100个以上。

用这种形式封装的芯片必须采用SMT表面安装技术将芯片与主板焊接起来。该封装方式具有四大特点：

①适用于SMD表面安装技术在PCB电路板上安装布线;

②适合高频使用;

③操作方便,可靠性高;

④芯片面积与封装面积之间的比值较小。

与PGA封装方式一样，该封装方式将芯片包裹在塑封体内，无法将芯片工作时产生的热量及时导出，制约了MOSFET性能的提升;而且塑封本身增加了器件尺寸，不符合半导体向轻、薄、短、小方向发展的要求;另外，此类封装方式是基于单颗芯片进行，存在生产效率低、封装成本高的问题。

因此，QFP更适于微处理器/门陈列等数字逻辑LSI电路采用，也适于VTR信号处理、音响信号处理等模拟LSI电路产品封装。

7、四边无引线扁平封装(QFN)

QFN(Quad Flat Non-leaded package)封装四边配置有电极接点，由于无引线，贴装表现出面积比QFP小、高度比QFP低的特点;其中陶瓷QFN也称为LCC(Leadless Chip Carriers)，采用玻璃环氧树脂印刷基板基材的低成本塑料QFN则称为塑料LCC、PCLC、P-LCC等。是一种焊盘尺寸小、体积小、以塑料作为密封材料的新兴表面贴装芯片封装技术。

QFN主要用于集成电路封装，MOSFET不会采用。不过因Intel提出整合驱动与MOSFET方案，而推出了采用QFN-56封装(“56”指芯片背面有56个连接Pin)的DrMOS。

需要说明的是，QFN封装与超薄小外形封装(TSSOP)具有相同的外引线配置，而其尺寸却比TSSOP的小62%。根据QFN建模数据，其热性能比TSSOP封装提高了55%，电性能(电感和电容)比TSSOP封装分别提高了60%和30%。最大的缺点则是返修难度高。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsIpx9Y8AhXic6DOeVe9ny3LlRJB1EEuibjFD9YM3MRkY7g6hF1dBUgSAA/640?wx_fmt=jpeg&from=appmsg)

采用QFN-56封装的DrMOS

  

传统的分立式DC/DC降压开关电源无法满足对更高功耗密度的要求，也不能解决高开关频率下的寄生参数影响问题。随着技术的革新与进步，把驱动器和MOSFET整合在一起，构建多芯片模块已经成为了现实，这种整合方式同时可以节省相当可观的空间从而提升功耗密度，通过对驱动器和MOS管的优化提高电能效率和优质DC电流，这就是整合驱动IC的DrMOS。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs65cIuz7azvK0Kkic7qSy6J0RZoKrXl7b1OLr3ic4IxOiciacL0JG70nveA/640?wx_fmt=jpeg&from=appmsg)

瑞萨第2代DrMOS

  

经过QFN-56无脚封装，让DrMOS热阻抗很低;借助内部引线键合以及铜夹带设计，可最大程度减少外部PCB布线，从而降低电感和电阻。另外，采用的深沟道硅(trench silicon)MOSFET工艺，还能显著降低传导、开关和栅极电荷损耗;并能兼容多种控制器，可实现不同的工作模式，支持主动相变换模式APS(Auto Phase Switching)。

除了QFN封装外，双边扁平无引脚封装(DFN)也是一种新的电子封装工艺，在安森美的各种元器件中得到了广泛采用，与QFN相比，DFN少了两边的引出电极。

8、塑封有引线芯片载体(PLCC)

PLCC(Plastic Quad Flat Package)外形呈正方形，尺寸比DIP封装小得多，有32个引脚，四周都有管脚，引脚从封装的四个侧面引出，呈丁字形，是塑料制品。其引脚中心距1.27mm，引脚数从18到84不等，J形引脚不易变形，比QFP容易操作，但焊接后的外观检查较为困难。PLCC封装适合用SMT表面安装技术在PCB上安装布线，具有外形尺寸小、可靠性高的优点。PLCC封装是比较常见，用于逻辑LSI、DLD(或程逻辑器件)等电路，主板BIOS常采用的这种封装形式，不过目前在MOS管中较少见。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs3iacqYMtibdqhfn3ricF4DiaJUZECMhAVmNiayRb1Md7RptbhOmGxzjYMXA/640?wx_fmt=jpeg&from=appmsg)

  

PLCC封装样式

  

主流企业的封装与改进

由于CPU的低电压、大电流的发展趋势，对MOSFET提出输出电流大，导通电阻低，发热量低散热快，体积小的要求。MOSFET厂商除了改进芯片生产技术和工艺外，也不断改进封装技术，在与标准外形规格兼容的基础上，提出新的封装外形，并为自己研发的新封装注册商标名称。

1、瑞萨(RENESAS)WPAK、LFPAK和LFPAK-I封装

WPAK是瑞萨开发的一种高热辐射封装，通过仿D-PAK封装那样把芯片散热板焊接在主板上，通过主板散热，使小形封装的WPAK也可以达到D-PAK的输出电流。WPAK-D2封装了高/低2颗MOSFET，减小布线电感。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsekaThm6cKzzn9W6KibvCO5mSFCWwzK1Zggs7xfCsVic6P6HwLcwJXHGQ/640?wx_fmt=jpeg&from=appmsg)

瑞萨WPAK封装尺寸

  

LFPAK和LFPAK-I是瑞萨开发的另外2种与SO-8兼容的小形封装。LFPAK类似D-PAK，但比D-PAK体积小。LFPAK-i是将散热板向上，通过散热片散热。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs7GurnLhnvOz82ibp1QickicT26QvokT6AkqI50zhOPe7TOl7GFQX4Fngg/640?wx_fmt=jpeg&from=appmsg)

瑞萨LFPAK和LFPAK-I封装

  

2、威世(Vishay)Power-PAK和Polar-PAK封装

Power-PAK是威世公司注册的MOSFET封装名称。Power-PAK包括有Power-PAK1212-8、Power-PAK SO-8两种规格。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs9vykpchjtOtwCtmRf3ogn1CJicgoJfm9maPOibUCMrIVCznVYOIFRXoQ/640?wx_fmt=jpeg&from=appmsg)

威世Power-PAK1212-8封装

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs6RLpoDkhNc5q2fQn9lRKDdR51Fm35xzqJqdKlRRMeLd99CUjryz1hQ/640?wx_fmt=jpeg&from=appmsg)

威世Power-PAK SO-8封装

  

Polar PAK是双面散热的小形封装，也是威世核心封装技术之一。Polar PAK与普通的so-8封装相同，其在封装的上、下两面均设计了散热点，封装内部不易蓄热，能够将工作电流的电流密度提高至SO-8的2倍。目前威世已向意法半导体公司提供Polar PAK技术授权。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsY7uBNUL1Qg0jhjo5ejLTfkxQ0xicSmBW7FjaQE2W1lrl5S5ELV1ZnrA/640?wx_fmt=jpeg&from=appmsg)

威世Polar PAK封装

  

3、安森美(Onsemi)SO-8和WDFN8扁平引脚(Flat Lead)封装

安美森半导体开发了2种扁平引脚的MOSFET，其中SO-8兼容的扁平引脚被很多板卡采用。安森美新近推出的NVMx和NVTx功率MOSFET就采用了紧凑型DFN5(SO-8FL)和WDFN8封装，可最大限度地降低导通损耗，另外还具有低QG和电容，可将驱动器损耗降到最低的特性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsoBdIIibokibkib4sib5lstJnsbeq4tuRkcstqtPacE6F11OveNV9iabQSXg/640?wx_fmt=jpeg&from=appmsg)

安森美SO-8扁平引脚封装

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qsk5EBIWbHI6nUsNzgPjonspdJqPE6DblO5ibTC5YC9ibvUHvu4L9Ut1NA/640?wx_fmt=jpeg&from=appmsg)

安森美WDFN8封装

  

4、恩智浦(NXP)LFPAK和QLPAK封装

恩智浦(原Philps)对SO-8封装技术改进为LFPAK和QLPAK。其中LFPAK被认为是世界上高度可靠的功率SO-8封装;而QLPAK具有体积小、散热效率更高的特点，与普通SO-8相比，QLPAK占用PCB板的面积为6\*5mm，同时热阻为1.5k/W。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qs1roYc1eCxcOBVVk8kPxlzSdTaTBKNumAP7S7rc5bcSU5f8yIXk1eyQ/640?wx_fmt=jpeg&from=appmsg)

恩智浦LFPAK封装

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsiahZ9RFZQNzsN4oZTmRrFMxfIicNyzRMicXved4F2UuMlhWibTmcx6nhicQ/640?wx_fmt=jpeg&from=appmsg)

恩智浦QLPAK封装

  

5、意法(ST)半导体PowerSO-8封装

意法半导体功率MOSFET芯片封装技术有SO-8、PowerSO-8、PowerFLAT、DirectFET、PolarPAK等，其中PowerSO-8正是SO-8的改进版，此外还有PowerSO-10、PowerSO-20、TO-220FP、H2PAK-2等封装。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qseq3TJd7khgpmw1q1iaJKxlakmAL8y5lug6UQicYGq0zVw0ZDUl82LIWA/640?wx_fmt=jpeg&from=appmsg)

意法半导体Power SO-8封装

  

6、飞兆(Fairchild)半导体Power 56封装

Power 56是Farichild的专用称呼，正式名称为DFN 5×6。其封装面积跟常用的TSOP-8不相上下，而薄型封装又节约元件净空高度，底部Thermal-Pad设计降低了热阻，因此很多功率器件厂商都部署了DFN 5×6。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsPXS9RNwX8UIG1avqA8tJN7UWwzyaS1f7qmIFkPgibblBU568DI5PaQw/640?wx_fmt=jpeg&from=appmsg)

Fairchild Power 56封装

  

7、国际整流器(IR)Direct FET封装

Direct FET能在SO-8或更小占位面积上，提供高效的上部散热，适用于计算机、笔记本电脑、电信和消费电子设备的AC-DC及DC-DC功率转换应用。与标准塑料分立封装相比，DirectFET的金属罐构造具有双面散热功能，因而可有效将高频DC-DC降压式转换器的电流处理能力增加一倍。

Direct FET封装属于反装型，漏极(D)的散热板朝上，并覆盖金属外壳，通过金属外壳散热。Direct FET封装极大地改善了散热，并且占用空间更小，散热良好。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QshEeT0DaNoiaKxLCxXmgjy5ibrngiaCB2LFymPTIDA9k7AiaCrM1ic6YumBg/640?wx_fmt=jpeg&from=appmsg)

国际整流器Direct FET封装

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qshpd1bB6cicQQJpf9Xciclw0GQX82Mq9Z1SvNia0YftHWPYSsqKicmv8Jxw/640?wx_fmt=jpeg&from=appmsg)

IR Direct FET封装系列部分产品规格

  

内部封装改进方向

除了外部封装，基于电子制造对MOS管的需求的变化，内部封装技术也在不断得到改进，这主要从三个方面进行：改进封装内部的互连技术、增加漏极散热板、改变散热的热传导方向。

1、封装内部的互连技术

TO、D-PAK、SOT、SOP等采用焊线式的内部互连封装技术，当CPU或GPU供电发展到低电压、大电流时代，焊线式的SO-8封装就受到了封装电阻、封装电感、PN结到PCB和外壳热阻等因素的限制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsHxN3NXweAxEGv4fC5N6qE60oOLmNz34W4XDNZKDV5Kkicf7GkEicDvMg/640?wx_fmt=jpeg&from=appmsg)

SO-8内部封装结构

  

这四种限制对其电学和热学性能有着极大的影响。随着电流密度的提高，MOSFET厂商在采用SO-8尺寸规格时，同步对焊线互连形式进行了改进，用金属带、或金属夹板代替焊线，以降低封装电阻、电感和热阻。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsYlQjqOcSEqbvSNr6LxjWDdXic0NNDicR7zRNVsx0QEr6TTdicTrAoMyicw/640?wx_fmt=jpeg&from=appmsg)

标准型SO-8与无导线SO-8封装对比

  

国际整流器(IR)的改进技术称之为Copper Strap;威世(Vishay)称之为Power Connect技术;飞兆半导体则叫做Wireless Package。新技术采用铜带取代焊线后，热阻降低了10-20%，源极至封装的电阻降低了61%。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qsa8coicIc1rUHq4deeR8icR2Fb0K1qpawqovDEffusv2vG9Kf6RSRaNJg/640?wx_fmt=jpeg&from=appmsg)

国际整流器的Copper Strap技术

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1Qsr9jVziaEz7CHwGNia02ObNoatpxUDIuqgJOVQdmsrQDJibvicVFE7iam4Fw/640?wx_fmt=jpeg&from=appmsg)

威世的Power Connect技术

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QslVtiaZgzvzDM1rKr1fxNeoouhicbYHSVhhIx9SpY1k7PHtvzqZCcGPUw/640?wx_fmt=jpeg&from=appmsg)

飞兆半导体的Wirless Package技术

  

2、增加漏极散热板

标准的SO-8封装采用塑料将芯片包围，低热阻的热传导通路只是芯片到PCB的引脚。而底部紧贴PCB的塑料外壳是热的不良导体，故而影响了漏极的散热。技术改进就是要除去引线框下方的塑封化合物，方法是让引线框金属结构直接或加一层金属板与PCB接触，并焊接到PCB焊盘上，这样就提供了更多的散热接触面积，把热量从芯片上带走;同时也可以制成更薄的器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsoMZ0Ooc7pntMy30jCIyeLUTSURFzicdmm4cwqRmkkOeC0gbLvhJJyaw/640?wx_fmt=jpeg&from=appmsg)

威世Power-PAK技术

  

威世的Power-PAK、法意半导体的Power SO-8、安美森半导体的SO-8 Flat Lead、瑞萨的WPAK/LFPAK、飞兆半导体的Power 56和Bottomless Package都采用了此散热技术。

3、改变散热的热传导方向

Power-PAK的封装虽然显著减小了芯片到PCB的热阻，但当电流需求继续增大时，PCB同时会出现热饱和现象。所以散热技术的进一步改进就是改变散热方向，让芯片的热量传导到散热器而不是PCB。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsTXT4d73MJXPxM3GiaEdy062VqLcvZEHrziafqhyqXl1lpZs5bSOJotEA/640?wx_fmt=jpeg&from=appmsg)

瑞萨LFPAK-i封装

  

瑞萨的LFPAK-I封装、国际整流器的Direct FET封装均是这种散热技术的典型代表。

  

总结　

未来，随着电子制造业继续朝着超薄、小型化、低电压、大电流方向的发展，MOS管的外形及内部封装结构也会随之改变，以更好适应制造业的发展需求。另外，为降低电子制造商的选用门槛，MOS管向模块化、系统级封装方向发展的趋势也将越来越明显，产品将从性能、成本等多维度协调发展。

  

而封装作为MOS管选型的重要参考因素之一，不同的电子产品有不同的电性要求，不同的安装环境也需要匹配的尺寸规格来满足。实际选用中，应在大原则下，根据实际需求情况来做抉择。

  

有些电子系统受制于PCB的尺寸和内部的高度，如通信系统的模块电源由于高度的限制通常采用DFN5\*6、DFN3\*3的封装;在有些ACDC的电源中，使用超薄设计或由于外壳的限制，适于装配TO220封装的功率MOS管，此时引脚可直接插到根部，而不适于使用TO247封装的产品;也有些超薄设计需要将器件管脚折弯平放，这会加大MOS管选用的复杂度。

  

如何选取MOSFET

一位工程师曾经对我讲，他从来不看MOSFET数据表的第一页，因为“实用”的信息只在第二页以后才出现。事实上，MOSFET数据表上的每一页都包含有对设计者非常有价值的信息。但人们不是总能搞得清楚该如何解读制造商提供的数据。本文概括了一些MOSFET的关键指标，这些指标在数据表上是如何表述的，以及你理解这些指标所要用到的清晰图片。像大多数电子器件一样，MOSFET也受到工作温度的影响。所以很重要的一点是了解测试条件，所提到的指标是在这些条件下应用的。还有很关键的一点是弄明白你在“产品简介”里看到的这些指标是“最大”或是“典型”值，因为有些数据表并没有说清楚。

  

电压等级

确定MOSFET的首要特性是其漏源电压VDS，或“漏源击穿电压”，这是在栅极短路到源极，漏极电流在250μA情况下，MOSFET所能承受的保证不损坏的最高电压。VDS也被称为“25℃下的绝对最高电压”，但是一定要记住，这个绝对电压与温度有关，而且数据表里通常有一个“VDS温度系数”。你还要明白，最高VDS是直流电压加上可能在电路里存在的任何电压尖峰和纹波。例如，如果你在电压30V并带有100mV、5ns尖峰的电源里使用30V器件，电压就会超过器件的绝对最高限值，器件可能会进入雪崩模式。在这种情况下，MOSFET的可靠性没法得到保证。

  

在高温下，温度系数会显著改变击穿电压。例如，一些600V电压等级的N沟道MOSFET的温度系数是正的，在接近最高结温时，温度系数会让这些MOSFET变得象650V MOSFET。很多MOSFET用户的设计规则要求10%～20%的降额因子。在一些设计里，考虑到实际的击穿电压比25℃下的额定数值要高5%~10%，会在实际设计中增加相应的有用设计裕量，对设计是很有利的。

  

对正确选择MOSFET同样重要的是理解在导通过程中栅源电压VGS的作用。这个电压是在给定的最大RDS(on)条件下，能够确保MOSFET完全导通的电压。这就是为什么导通电阻总是与VGS水平关联在一起的原因，而且也是只有在这个电压下才能保证器件导通。一个重要的设计结果是，你不能用比用于达到RDS(on)额定值的最低VGS还要低的电压，来使MOSFET完全导通。例如，用3.3V微控制器驱动MOSFET完全导通，你需要用在VGS= 2.5V或更低条件下能够导通的MOSFET。

  

导通电阻，栅极电荷，以及“优值系数”

MOSFET的导通电阻总是在一个或多个栅源电压条件下确定的。最大RDS(on)限值可以比典型数值高20%～50%。RDS(on)最大限值通常指的25℃结温下的数值，而在更高的温度下，RDS(on)可以增加30%～150%，如图1所示。由于RDS(on)随温度而变，而且不能保证最小的电阻值，根据RDS(on)来检测电流不是很准确的方法。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsYy5ib5Fx4TynFYIjk9txRS0YnTy3rLY0IvpEqUibhKAiahfINXt1vtE0g/640?wx_fmt=jpeg&from=appmsg)

图1 RDS(on)在最高工作温度的30%～150%这个范围内随温度增加而增加

  

导通电阻对N沟道和P沟道MOSFET都是十分重要的。在开关电源中，Qg是用在开关电源里的N沟道MOSFET的关键选择标准，因为Qg会影响开关损耗。这些损耗有两个方面影响：一个是影响MOSFET导通和关闭的转换时间；另一个是每次开关过程中对栅极电容充电所需的能量。要牢记的一点是，Qg取决于栅源电压，即使用更低的Vgs可以减少开关损耗。

  

作为一种快速比较准备用在开关应用里MOSFET的方式，设计者经常使用一个单数公式，公式包括表示传导损耗RDS(on)及表示开关损耗的Qg：RDS(on) xQg。这个“优值系数”(FOM)总结了器件的性能，可以用典型值或最大值来比较MOSFET。要保证在器件中进行准确的比较，你需要确定用于RDS(on) 和Qg的是相同的VGS，在公示里典型值和最大值没有碰巧混在一起。较低的FOM能让你在开关应用里获得更好的性能，但是不能保证这一点。只有在实际的电路里才能获得最好的比较结果，在某些情况下可能需要针对每个MOSFET对电路进行微调。

  

额定电流和功率耗散

基于不同的测试条件，大多数MOSFET在数据表里都有一个或多个的连续漏极电流。你要仔细看看数据表，搞清楚这个额定值是在指定的外壳温度下(比如TC = 25℃)，或是环境温度(比如TA = 25℃)。这些数值当中哪些是最相关将取决于器件的特性和应用(见图2)。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsPPCtvcqcQuDjFvFDiabpvKueU5ut74SGAE3nkay5x4ruMtMVDOYlFKQ/640?wx_fmt=jpeg&from=appmsg)

图2 全部绝对最大电流和功率数值都是真实的数据

对于用在手持设备里的小型表面贴装器件，关联度最高的电流等级可能是在70℃环境温度下的电流，对于有散热片和强制风冷的大型设备，在TA = 25℃下的电流等级可能更接近实际情况。对于某些器件来说，管芯在其最高结温下能够处理的电流要高于封装所限定的电流水平，在一些数据表，这种“管芯限定”的电流等级是对“封装限定”电流等级的额外补充信息，可以让你了解管芯的鲁棒性。

对于连续的功率耗散也要考虑类似的情况，功耗耗散不仅取决于温度，而且取决于导通时间。设想一个器件在TA= 70℃情况下，以PD=4W连续工作10秒钟。构成“连续”时间周期的因素会根据MOSFET封装而变化，所以你要使用数据表里的标准化热瞬态阻抗图，看经过10秒、100秒或10分钟后的功率耗散是什么样的。如图3所示，这个专用器件经过10秒脉冲后的热阻系数大约是0.33，这意味着经过大约10分钟后，一旦封装达到热饱和，器件的散热能力只有1.33W而不是4W，尽管在良好冷却的情况下器件的散热能力可以达到2W左右。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsZeutTDtkaA9Fe1ryMdR6BN7ttTNoh6Q2tFAMkaWt2MuDZ76qZtVa5w/640?wx_fmt=jpeg&from=appmsg)

图3 MOSFET在施加功率脉冲情况下的热阻

  

　　实际上，我们可以把MOSFET选型分成四个步骤。

第一步：选用N沟道还是P沟道　　

为设计选择正确器件的第一步是决定采用N沟道还是P沟道MOSFET。在典型的功率应用中，当一个MOSFET接地，而负载连接到干线电压上时，该MOSFET就构成了低压侧开关。在低压侧开关中，应采用N沟道MOSFET，这是出于对关闭或导通器件所需电压的考虑。当MOSFET连接到总线及负载接地时，就要用高压侧开关。通常会在这个拓扑中采用P沟道MOSFET，这也是出于对电压驱动的考虑。　　

　　要选择适合应用的器件，必须确定驱动器件所需的电压，以及在设计中最简易执行的方法。下一步是确定所需的额定电压，或者器件所能承受的最大电压。额定电压越大，器件的成本就越高。根据实践经验，额定电压应当大于干线电压或总线电压。这样才能提供足够的保护，使MOSFET不会失效。就选择MOSFET而言，必须确定漏极至源极间可能承受的最大电压，即最大VDS。知道MOSFET能承受的最大电压会随温度而变化这点十分重要。设计人员必须在整个工作温度范围内测试电压的变化范围。额定电压必须有足够的余量覆盖这个变化范围，确保电路不会失效。设计工程师需要考虑的其他安全因素包括由开关电子设备(如电机或变压器)诱发的电压瞬变。不同应用的额定电压也有所不同；通常，便携式设备为20V、FPGA电源为20～30V、85～220VAC应用为450～600V。

  

第二步：确定额定电流　　

第二步是选择MOSFET的额定电流。视电路结构而定，该额定电流应是负载在所有情况下能够承受的最大电流。与电压的情况相似，设计人员必须确保所选的MOSFET能承受这个额定电流，即使在系统产生尖峰电流时。两个考虑的电流情况是连续模式和脉冲尖峰。在连续导通模式下，MOSFET处于稳态，此时电流连续通过器件。脉冲尖峰是指有大量电涌(或尖峰电流)流过器件。一旦确定了这些条件下的最大电流，只需直接选择能承受这个最大电流的器件便可。

  

选好额定电流后，还必须计算导通损耗。在实际情况下，MOSFET并不是理想的器件，因为在导电过程中会有电能损耗，这称之为导通损耗。MOSFET在“导通”时就像一个可变电阻，由器件的RDS(ON)所确定，并随温度而显著变化。器件的功率耗损可由Iload2×RDS(ON)计算，由于导通电阻随温度变化，因此功率耗损也会随之按比例变化。对MOSFET施加的电压VGS越高，RDS(ON)就会越小；反之RDS(ON)就会越高。对系统设计人员来说，这就是取决于系统电压而需要折中权衡的地方。对便携式设计来说，采用较低的电压比较容易(较为普遍)，而对于工业设计，可采用较高的电压。注意RDS(ON)电阻会随着电流轻微上升。关于RDS(ON)电阻的各种电气参数变化可在制造商提供的技术资料表中查到。

  

技术对器件的特性有着重大影响，因为有些技术在提高最大VDS时往往会使RDS(ON)增大。对于这样的技术，如果打算降低VDS和RDS(ON)，那么就得增加晶片尺寸，从而增加与之配套的封装尺寸及相关的开发成本。业界现有好几种试图控制晶片尺寸增加的技术，其中最主要的是沟道和电荷平衡技术。

  

在沟道技术中，晶片中嵌入了一个深沟，通常是为低电压预留的，用于降低导通电阻RDS(ON)。为了减少最大VDS对RDS(ON)的影响，开发过程中采用了外延生长柱/蚀刻柱工艺。例如，飞兆半导体开发了称为SuperFET的技术，针对RDS(ON)的降低而增加了额外的制造步骤。

  

这种对RDS(ON)的关注十分重要，因为当标准MOSFET的击穿电压升高时，RDS(ON)会随之呈指数级增加，并且导致晶片尺寸增大。SuperFET工艺将RDS(ON)与晶片尺寸间的指数关系变成了线性关系。这样，SuperFET器件便可在小晶片尺寸，甚至在击穿电压达到600V的情况下，实现理想的低RDS(ON)。结果是晶片尺寸可减小达35%。而对于最终用户来说，这意味着封装尺寸的大幅减小。

  

第三步：确定热要求　　

选择MOSFET的下一步是计算系统的散热要求。设计人员必须考虑两种不同的情况，即最坏情况和真实情况。建议采用针对最坏情况的计算结果，因为这个结果提供更大的安全余量，能确保系统不会失效。在MOSFET的资料表上还有一些需要注意的测量数据；比如封装器件的半导体结与环境之间的热阻，以及最大的结温。

  

器件的结温等于最大环境温度加上热阻与功率耗散的乘积(结温=最大环境温度+\[热阻×功率耗散\])。根据这个方程可解出系统的最大功率耗散，即按定义相等于I2×RDS(ON)。由于设计人员已确定将要通过器件的最大电流，因此可以计算出不同温度下的RDS(ON)。值得注意的是，在处理简单热模型时，设计人员还必须考虑半导体结/器件外壳及外壳/环境的热容量；即要求印刷电路板和封装不会立即升温。

  

雪崩击穿是指半导体器件上的反向电压超过最大值，并形成强电场使器件内电流增加。该电流将耗散功率，使器件的温度升高，而且有可能损坏器件。半导体公司都会对器件进行雪崩测试，计算其雪崩电压，或对器件的稳健性进行测试。计算额定雪崩电压有两种方法；一是统计法，另一是热计算。而热计算因为较为实用而得到广泛采用。不少公司都有提供其器件测试的详情，如飞兆半导体提供了“Power MOSFET Avalanche Guidelines”（ Power MOSFET Avalanche Guidelines--可以到Fairchild网站去下载）。除计算外，技术对雪崩效应也有很大影响。例如，晶片尺寸的增加会提高抗雪崩能力，最终提高器件的稳健性。对最终用户而言，这意味着要在系统中采用更大的封装件。

  

第四步：决定开关性能　　

选择MOSFET的最后一步是决定MOSFET的开关性能。影响开关性能的参数有很多，但最重要的是栅极/漏极、栅极/ 源极及漏极/源极电容。这些电容会在器件中产生开关损耗，因为在每次开关时都要对它们充电。MOSFET的开关速度因此被降低，器件效率也下降。为计算开关过程中器件的总损耗，设计人员必须计算开通过程中的损耗(Eon)和关闭过程中的损耗(Eoff)。MOSFET开关的总功率可用如下方程表达：Psw=(Eon+Eoff)×开关频率。而栅极电荷(Qgd)对开关性能的影响最大。

  

基于开关性能的重要性，新的技术正在不断开发以解决这个开关问题。芯片尺寸的增加会加大栅极电荷；而这会使器件尺寸增大。为了减少开关损耗，新的技术如沟道厚底氧化已经应运而生，旨在减少栅极电荷。举例说，SuperFET这种新技术就可通过降低RDS(ON)和栅极电荷(Qg)，最大限度地减少传导损耗和提高开关性能。这样，MOSFET就能应对开关过程中的高速电压瞬变(dv/dt)和电流瞬变(di/dt)，甚至可在更高的开关频率下可靠地工作。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章整理网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。