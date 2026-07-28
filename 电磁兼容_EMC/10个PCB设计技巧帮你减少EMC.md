# 10个PCB设计技巧帮你减少EMC

原创 硬件笔记本 2023-08-01 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/WxN7iKMcPhjLSyTD45SP8w](https://mp.weixin.qq.com/s/WxN7iKMcPhjLSyTD45SP8w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

今天主要是关于：****EMC，PCB设计中如何降低EMC?****

# **一、EMC是什么？**

在PCB设计中，主要的EMC问题包括3种：**传导干扰**、**串扰干扰**、**辐射干扰。**

**1、传导干扰**

**传导干扰**通过****引线去耦和共模阻抗去耦影响其他电路****，例如：噪声通过电源电路进入系统，支持电路将受到噪声的影响。

下图显示了通过共模阻抗进行的噪声去耦。电路1和电路2通过同一根导线获得电源电压的和接地环路。如果其中一个电路的电压突然需要提高，另一个电路将降低，因为公共电源和两个回路之间的阻抗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArHEZa6RqOkaOubiacibg9Oj09PvW5mW0IkgJ1tF5tWZoLiaJMiboHzuvh6g/640?wx_fmt=png&wxfrom=13)

  

**2、串扰干扰**

**串扰干扰**是指**一根信号线对相邻信号线的干扰**，通常****发生在相邻的电路和导体上****，其特点是电路与导体之间存在互电容和互阻抗。例如：PCB上的带状线，信号电平较低，当平行线长度超过10cm时，串扰就会出现。

由于电场可以通过互电容引起串扰，磁场可以通过互阻抗引起串扰，因此**首先要确认哪个去耦起到主要作用，是电场（互电容）去耦还是磁场（互阻抗）去耦。**功率阻抗和接受器阻抗的乘积可以作为参考，取决于电路和频率之间的配置。

  

**3、辐射干扰**

**辐射干扰**是指由****自由电磁波释放的辐射引起的干扰****。PCB中的辐射干扰是****指电缆和内部线路之间的共模辐射干扰****。当电磁波照射在输电路线上时，会出现电场对线路的解耦问题，线路上分布的小电压源分为CM（共模）和DM（差模）。CM电流是指来自两根导联的电流几乎相等的幅度和相同的相位。而DM电流是指来自两根导联的电流具有相同的辐射和相反的相位。

  

  

# **二、如何减少EMC问题的产生？**

**1、低电感接地系统**

在PCB设计中最常用的就是****低电感接地系统****。**最大化PCB上的接地面积可以降低系统中的接地电感，这样可以减少电磁辐射和干扰**，可以使用不同的方法将信号接地。

在PCB设计中，最好的方法是将**PCB中其中一层接地，这样可以提供低阻抗，如果不能整层接地，就采用接地网**，在这种情况下，接地电感取决于网格之间的空间。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArGnxRicPiaUNZb8ciacND4XzySzvU7ojwFiaT0I2kVXFTibCFicQQ2Or1SMqQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

低电感接地系统

下图为各种地平面应用图，****高速电路靠近地放置、低速电路靠近电源层。铜填充区域始终接地。****否则，可能会充当天线并导致EMC问题。在电路中需要多个电源的情况下，将电源层和接地层分开可以防止电源彼此产生噪声。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvAr8KMsEoR9zRwel3JtyTxV2F4w0DmQate7dSmYIWsq3wlW7XGYHoxH5g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

各种地平面应用图

  

**2、元器件根据功能进行放置**

PCB上的组件应该根据功能进行分组。例如****模拟、数字、电源、低速电路、高速电路。每个组件的信号走线必须保持在定义的区域内。****当信号需要从一个子系统连接到另一个子系统的时候，可以使用滤波器。

下图说明了如何使用分段将四个不同的电路分开。地平面使用未金属化的护城河/通道有效地隔离了电路。电感和电容对每个电路进行滤波，电源层之间的耦合减少。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArHJIMbTIbyLvAGrQ8rnraVfue1qCFxyYzPWEXVTfFkpuWzQr73qMKOg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

元器件根据功能进行放置

**3、PCB层数排列**

****PCB 的 EMC 性能还取决于其层的排列。****在 **2 层 PCB** 的情况下，应将整个层用作接地层。如果不可能整层接地，则应放置接地网。对于 **4 层 PCB**，接地层以下的层应作为电源层 。**超过 4 层的 PCB** 应具有偶数层，并由交替的接地层和信号层组成，以避免出现 EMC 问题。

下图显示了围绕核心（层压板）构建的 FR4 1.6 毫米 4 层 PCB 的叠层。核心是两面都有铜层的厚介电片。核心的顶部和下方添加了薄的预浸料，即介电材料片。对于这种特定情况，中间层 1 和 2 分别代表接地层和电源层。顶层和底层用作信号平面，每侧可以焊接多个组件。****多层堆叠的配置在 EMC 应用中起着至关重要的作用。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArmk5WOPBybPndo3TCbwIMBMtqftWMrBiaCZseqRe8UxZYIwCHTVKvNPQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

PCB 层堆叠

  

**4、添加去耦电容**

当 IC 工作时，由于其内部结构，它们会以高频进行切换。这种情况会在 IC 连接轨道中产生开关噪声。如果不控制这种噪声，它将导致发射，从而导致 EMI 。通过****在 IC 附近放置一个去耦电容，可以减少 PCB 上开关噪声的传播并将噪声引导至地面。****

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArzztovgcC6D3siaxLklVmUqCGwEtl8ictb1Xia2eEo8ib2LYgWVcv9mXCyQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

去耦电容布局

  

**5、避免串扰**

**串扰**用于识别由 PCB 上的一条轨道到附近另一条轨道的电磁噪声引起的干扰。PCB 中的串扰通常发生在同一层中并排的轨道或相邻层中的一个轨道上。这种情况表现为噪声，如果振幅过大可能会导致故障 。

关于串扰的更多内容，欢迎阅读以下文章，更为详细：

串扰是什么意思？串扰的原因及解决办法？一文给你总结，减少串扰

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArQibWC8E1H8p5TeSrVX64hibIGUd5gR0zlZQ6alv4Wm7Hjx8yzV6r3mog/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArlqAwiapWc0WFFUFeKHpGtm2fxnca1VriaFmic12iaNZJrb91QhWBU0R9Mg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

串扰示例

  

**6、不要90°走线**

与过孔类似，不应实施直角 90° 轨道转弯，因为它会增加寄生电容，导致特性阻抗发生变化，从而导致反射。如图 所示，****所有正交走线都应采用 45° 弯曲，以限制耦合到附近走线的噪声。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvAr1Yo8fEqaNiaSMIyWhmLw2oxOpFUXQXMygD9SF4O5ueicGUsUtwfiaSt0Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

45°走线

45° 角迹线，其中 W 是迹线宽度

信号走线的宽度从源到负载应该是恒定的。改变迹线的宽度会产生阻抗变化（电阻、电感和电容），因此在高速信号和线路阻抗不平衡的情况下会引起反射。此外，应****尽量减少电源和接地平面中的分离孔径（即宽过孔或长孔），因为它们会在平面内产生不均匀区域。****这会导致屏蔽效能降低和总阻抗增加 。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArzRgBkib9OicvqUE7IclH7TlVic6cYRFhzmpRKmic0yfU1tqj86ickxse1Qg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

存根走线

短截线会产生反射，并有可能将波长可分天线添加到电路中。尽管短截线长度可能是系统中任何已知信号的非四分之一波长整数，但入射的辐射 EM 波可能会在短截线上产生共振。因此，在****布线时应避免带有承载高频或敏感信号的走线的存根 。****

**7、走线分离**

走线分离可****最大限度地减少相同或不同 PCB 层上相邻/平行迹线之间的串扰和电磁耦合。****一般规则规定走线之间的间隔（在中心到中心之间测量）应大于或等于 3 x 走线宽度。**间隔越大，串扰和耦合越低。**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5tvocQGfPV1hE1pvFgWvArmUxM9C9MLK70f9jGstxFLqrDt6KEhI6BugokjibibbeAFfgN4ch4bHQQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

走线分离

通常在同一层走线的所有走线都是微带线。那是放置在地平面顶部的平面传输线。它们可以传输从直流到高频的信号。****对于在 PCB 的同一层上需要更多并行迹线且间距最小的特定情况，可以使用共面波导 (CPW)。****例如，与微带线相比，接地的 CPW 通过将接地平面放置在电介质材料的底部和同一平面上来增加电路周围的接地量，确保接地平面在信号传输线的两侧连续延伸。它可以最大限度地减少 PCB 不同层上信号走线之间的串扰。

  

**8、过孔远离关键信号走线**

过孔在多层 PCB 中用于信号路由。如果设计不当，一些过孔会引入寄生电容和电感效应。应****避免此类过孔并将其放置在离关键走线尽可能远的地方****。由于过孔中的寄生电容和电感，过孔和迹线之间存在阻抗不匹配，从而产生反射。当无法避免过孔时，应确保接地过孔靠近信号过孔放置。这种布置减少了特性阻抗值的变化，从而减少了反射。

  

**9、走线附近放置一个参考平面**

更重要的是****在走线附近放置一个参考平面以防止辐射 EMI****。这适用于全数字系统和混合信号系统，两者都应使用参考平面层，并且不应在参考导体不连续或完全没有参考导体的区域上布线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics5tvocQGfPV1hE1pvFgWvAr5MktILUf0ZeML4vBnXsaGVlv3n2xWrsAYYiaST3YjPFqHIhuHTibqztQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

走线附近放置一个参考平面

PCB 叠层中的阻抗计算器可以计算出接地间隙。然而，高速信号应该在统一的平面上布线，以确保有清晰的返回路径。

对于阻抗控制系统，提供隔离的正确方法是****除了在 PCB 叠层中放置参考层之外，还使用共面布置的接地灌注****。通常，该过程是通过比较没有接地的迹线与同一叠层和层中的共面迹线的阻抗来查看附近的导体如何改变迹线的阻抗。如果接地点太近，分布寄生电容会与线路的分布自电容并联，因此阻抗会降低。

  

**10、模拟信号远离高速信号或者开关信号**

****承载模拟信号的轨道应远离高速或开关信号，并应始终受到接地信号的保护****。低通滤波器可用于避免模拟轨

文章来源：张工谈DFM

原文链接：https://www.toutiao.com/article/7229601324906889784/

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。