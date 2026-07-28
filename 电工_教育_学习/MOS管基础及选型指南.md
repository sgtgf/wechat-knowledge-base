# MOS管基础及选型指南

原创 硬件笔记本 2023-01-31 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/oMZeVy45o5JarIjSiaaJaw](https://mp.weixin.qq.com/s/oMZeVy45o5JarIjSiaaJaw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

MOS管，即金属（Metal）—氧化物（Oxide）—半导体（Semiconductor）场效应晶体管，是一种应用场效应原理工作的半导体器件。

  

和普通双极型晶体管相比，MOS管具有输入**阻抗高、噪声低、动态范围大、功耗小、易于集成**等优势，在开关电源、镇流器、高频感应加热、高频逆变焊机、通信电源等高频电源领域得到了越来越普遍的应用。

  

******▉****** ******场效应管分类******

场效应管分为结型（JFET）和金属-氧化物-半导体型（MOSFET）两种类型。

JFET的英文全称是**Junction Field-Effect Transistor**，也分为N沟道和P沟道两种，在实际中几乎不用。

MOSFET英文全称是**Metal-Oxide-Semiconductor Field-Effect Transistor**，应用广泛，MOSFET一般称MOS管。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdaobUMs4ib8MAD9VjT3ywsHiagibcW9wnHeoFibWfsrVTYBj8V6s5Ik7ywAw/640?wx_fmt=png)

  

MOS管是FET的一种（另一种为JFET结型场效应管），主要有两种结构形式：**N沟道型和P沟道型**。

  

根据场效应原理的不同，分为耗尽型（当栅压为零时有较大漏极电流）和增强型（当栅压为零，漏极电流也为零，必须再加一定的栅压之后才有漏极电流）两种。

  

因此，MOS管可以被制构成**P沟道增强型、P沟道耗尽型、N沟道增强型、N沟道耗尽型**4种类型产品。

  

一般主板上使用最多的是增强型MOS管，NMOS最多，一般多用在信号控制上，其次是PMOS，多用在电源开关等方面，耗尽型几乎不用。

******▉ N和P区分******

每一个MOS管都提供有三个电极：Gate栅极（表示为“G”）、Source源极（表示为“S”）、Drain漏极（表示为“D”）。接线时，对于N沟道的电源输入为D，输出为S；P沟道的电源输入为S，输出为D；且增强型、耗尽型的接法基本一样。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdakFjo4LictOjYDTTAaFkwfVPDRf01MeTVVSzoSTpwO2OBqqlibLPBXOgA/640?wx_fmt=jpeg)

红色箭头指向G极的为NMOS，箭头背向G极的为PMOS

  

******▉ 寄生二极管******

由于生产工艺，一般的MOS管会有一个**寄生二极管**，有的也叫**体二极管**。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIda9MoQ9AlnwLtv4Z1mD11LknjI6wLEICgzkVahQ8Z56Dj9huORG5bWWQ/640?wx_fmt=jpeg)

红色标注的为体二极管

从上图可以看出NMOS和PMOS寄生二极管方向不一样，NMOS是由S极→D极，PMOS是由D极→S极。

  

寄生二极管和普通二极管一样，正接会导通，反接截止，对于NMOS，当S极接正，D极接负，寄生二极管会导通，反之截止；对于PMOS管，当D极接正，S极接负，寄生二极管导通，反之截止。

  

**某些应用场合，也会选择走体二极管，以降低DS之间的压降（体二极管的压降是比MOS的导通压降大很多的），同时也要关注体二极管的过电流能力。**

**当满足MOS管的导通条件时，MOS管的D极和S极会导通，这个时候体二极管是截止状态**，因为MOS管的导通内阻极小，一般mΩ级别，流过1A级别的电流，也才mV级别，所以D极和S极之间的导通压降很小，不足以使寄生二极管导通，这点需要特别注意。

  

**********▉ **MOS管工作原理（以**N沟道增强型为例**）************

N沟道增强型MOS管在P型半导体上生成一层SiO2薄膜绝缘层，然后用光刻工艺扩散两个高掺杂的N型区，从N型区引出电极（漏极D、源极S）；在源极和漏极之间的SiO2绝缘层上镀一层金属铝作为栅极G；P型半导体称为衬底，用符号B表示。由于栅极与其它电极之间是相互绝缘的，所以NMOS又被称为绝缘栅型场效应管。

  

当栅极G和源极S之间不加任何电压，即VGS=0时，由于漏极和源极两个N+型区之间隔有P型衬底，相当于两个背靠背连接的PN结，它们之间的电阻高达1012Ω，即D、S之间不具备导电的沟道，所以无论在漏、源极之间加何种极性的电压，都不会产生漏极电流ID。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdabOoXsRQul4gJdS8QWxuibnvGz2OblOhoQ6fIiaYIHplx1HMicuf7eWxSQ/640?wx_fmt=jpeg)  

N沟道增强型MOS管结构示意图

当将衬底B与源极S短接，在栅极G和源极S之间加正电压，即VGS＞0时，如上图所示，则在栅极与衬底之间产生一个由栅极指向衬底的电场。在这个电场的作用下，P衬底表面附近的空穴受到排斥将向下方运动，电子受电场的吸引向衬底表面运动，与衬底表面的空穴复合，形成了一层耗尽层。

  

如果进一步提高VGS电压，使VGS达到某一电压VT时，P衬底表面层中空穴全部被排斥和耗尽，而自由电子大量地被吸引到表面层，由量变到质变，使表面层变成了自由电子为多子的N型层，称为“反型层”，如下图所示。

  

反型层将漏极D和源极S两个N+型区相连通，构成了漏、源极之间的N型导电沟道。把开始形成导电沟道所需的VGS值称为阈值电压或开启电压，用VGS（th）表示。显然，只有VGS＞VGS（th）时才有沟道，而且VGS越大，沟道越厚，沟道的导通电阻越小，导电能力越强；“增强型”一词也由此得来。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdazVaQjun9W1I4hftCwPrqozicWicjbUjgBFYlpByIMBpib6x0H89yibU3ibg/640?wx_fmt=jpeg)

耗尽层与反型层产生的结构示意图

  

在VGS＞VGS（th）的条件下，如果在漏极D和源极S之间加上正电压VDS，导电沟道就会有电流流通。漏极电流由漏区流向源区，因为沟道有一定的电阻，所以沿着沟道产生电压降，使沟道各点的电位沿沟道由漏区到源区逐渐减小，靠近漏区一端的电压VGD最小，其值为VGD=VGS－VDS，相应的沟道最薄；靠近源区一端的电压最大，等于VGS，相应的沟道最厚。

  

这样就使得沟道厚度不再是均匀的，整个沟道呈倾斜状。随着VDS的增大，靠近漏区一端的沟道越来越薄。

  

当VDS增大到某一临界值，使VGD≤VGS（th）时，漏端的沟道消失，只剩下耗尽层，把这种情况称为沟道“预夹断”，如下图（a）所示。继续增大VDS\[即VDS＞VGS－VGS（th）\]，夹断点向源极方向移动，如下图（b）所示。

  

尽管夹断点在移动，但沟道区（源极S到夹断点）的电压降保持不变，仍等于VGS－VGS（th）。因此，VDS多余部分电压\[VDS－（VGS－VGS（th））\]全部降到夹断区上，在夹断区内形成较强的电场。这时电子沿沟道从源极流向夹断区，当电子到达夹断区边缘时，受夹断区强电场的作用，会很快的漂移到漏极。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdaosQCh2veqCxs5aE6tpbRXfY3WoicMExOJQOxzpYN9YkQyDVQbQ1JIxg/640?wx_fmt=jpeg)

预夹断及夹断区形成示意图

  

**********▉ 导通条件**********

MOS管是压控型，导通由G和S极之间压差决定。

  

**对NMOS来说，Vg-Vs>Vgs(th)**，即G极和S极的压差大于一定值，MOS管会导通，但是也不能大太多，否则烧坏MOS管，开启电压和其他参数可以看具体器件的SPEC。

  

**对PMOS来说，Vs-Vg>Vgs(th)**，即S极和G极的压差大于一定值，MOS管会导通，同样的，具体参数看器件的SPEC。

  

**********▉ 与三极管的区别**********

三极管是电流控制，MOS管是电压控制，主要有如下的区别：

  

1、只容许从信号源取少量电流的情况下，选用MOS管；在信号电压较低，有容许从信号源取较多电流的条件下，选用三极管。

2、MOS管是单极性器件（靠一种多数载流子导电），三极管是双极性器件（既有多数载流子，也要少数载流子导电）。

3、有些MOS管的源极和漏极可以互换运用，栅极也可正可负，灵活性比三极管好。

4、MOS管应用普遍，可以在很小电流和很低电压下工作。

5、MOS管输入阻抗大，低噪声，MOS管较贵，三极管的损耗大。

6、MOS管常用来作为电源开关，以及大电流开关电路、高频高速电路中，三极管常用来数字电路开关控制。  

  

**********▉ G和S极串联电阻的作用**********

MOS管的输入阻抗很大，容易受到外界信号的干扰，只要少量的静电，就能使G-S极间等效电容两端产生很高的电压，如果不及时把静电释放掉，两端的高压容易使MOS管产生误动作，甚至有可能击穿G-S极，**起到一个固定电平的作用**。

  

**************▉ G极串联电阻的作用**************

MOS管是压控型，有的情况下，为什么还需要在G极串联一个电阻呢？

1、减缓Rds从无穷大到Rds(on)。

2、防止震荡，一般单片机的I/O输出口都会带点杂散电感，在电压突变的情况下，可能与栅极电容形成LC震荡，串联电阻可以增大阻尼减小震荡效果。  

3、减小栅极充电峰值电流。

  

********▉ 选型要点********

**1、电压值**

关注Vds最大导通电压和Vgs最大耐压，实际使用中，不能超过这个值，否则MOS管会损坏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdafMLLDPiamb9JYQM1t5gnGepBqQPy4o7O78IO2EpFVSOgEz9WBUvt1yA/640?wx_fmt=jpeg)

  

关注导通电压Vgs(th)，一般MOS管都是用单片机进行控制，根据单片机GPIO的电平来选择合适导通阈值的MOS管，并且尽量留有一定的余量，以确保MOS可以正常开关。![](https://mmbiz.qpic.cn/mmbiz_jpg/bbnZlWbymyotxQSicexJfuTHWOVybZSjyehdTDFaZe5RIBlkAfyGxozYuSjnq7V2YxgI5jAtMgibJxo9SicSpibteA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**2、电流值**

关注ID电流，这个值代表了NMOS管的能流过多大电流，反应带负载的能力，超过这个值，MOS管也会损坏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIdavVhHbkiaaPYIuqLheFniaDchp3eBL9yjh2YBrxqBe8IV2vsXLkzLy6LQ/640?wx_fmt=jpeg)

  

**3、功率损耗**

功率损耗需要关注以下几个参数，包括热阻、温度。热阻指的是当有热量在物体上传输时，在物体两端温度差与热源的功率之间的比值，单位是℃/W或者是K/W，热阻的公式为ThetaJA = (Tj-Ta)/P，和功率和环境温度都有关系。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgicq8gAJTZtTKkAHkVOJIda6Rq5vwxdJ1KGgdhLdxMxmCNoF3wcIEwTDqg5FkPVvzSlFjdsVmD6LA/640?wx_fmt=jpeg)

  

**4、导通内阻**

导通内阻关注NMOS的Rds(on)参数，导通内阻越小，NMOS管的损耗越小，一般NMOS管的导通内阻都是在mΩ级别。

  

**5、开关时间**

MOS作为开关器件，就会有开关时间概念，在高速电路中，尽可能选择输入、输出电容Ciss&Coss小、开关时间Ton&Toff短的MOS管，以保证数据通信正常。

  

**6、封装**

根据PCB板的尺寸，选择合适的NMOS管尺寸，在板载面积有限的情况下，尽可能选择小封装；尽量选择常见封装，以备后续选择合适的替代料。

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。