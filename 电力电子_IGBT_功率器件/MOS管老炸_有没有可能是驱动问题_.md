# MOS管老炸，有没有可能是驱动问题？

原创 硬件笔记本 2022-09-18 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/3V6f-rBmYzPg7NFQOhpBjw](https://mp.weixin.qq.com/s/3V6f-rBmYzPg7NFQOhpBjw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

咱们做电子的，几乎都会用到MOS管，也遇到过MOS管炸裂的情况。小功率MOS炸裂时，没什么感觉，大功率就不一样，震耳欲聋，感觉在以命相搏。

其实很多时候，炸管的原因就是驱动问题。下面就给大家分享一下MOS管的一些参数及驱动技术。

  

**MOSFET简介**    

■MOSFET的全称为：metal oxide semiconductor field-effect transistor，中文通常称之为，金属-氧化层-半导体-场效晶体管。

■MOSFET最早出现在大概上世纪60年代，首先出现在模拟电路的应用。

■功率MOSFET在上世纪80年代开始兴起，在如今电力电子功率器件中，无疑成为了最重要的主角器件。

**MOSFET的简单模型**

  

![](MOS管老炸_有没有可能是驱动问题__images/img_002_b4589f3d3227.png)

![](MOS管老炸_有没有可能是驱动问题__images/img_003_470c2826b3bd.jpg)

**MOSFET的一些主要参数**

■耐压：通常所说的VDS，或者说是击穿电压。那么一般MOS厂家是如何来定义这个参数的呢？

![](MOS管老炸_有没有可能是驱动问题__images/img_004_0fa7aded6b82.png)

■上面这个例子显示，当驱动电压为0，Vds达到200V的时候，Id这个电流达到了250uA，这个时候认为已经达到击穿电压。

  

■不同的厂家对此定义略有不同，但是基本上来说，当电压超过击穿电压，MOS的漏电流就会急剧上升。

  

■导通电阻：

■MOSFET在导通之后，其特性可以近似认为是一个电阻

![](MOS管老炸_有没有可能是驱动问题__images/img_005_541f0d70b1fc.png)

■上面这个例子表示，在驱动电压为10V的时候，导通电阻为0.18欧姆

■导通电阻的温度关系：

■MOS的导通电阻随温度上升而上升，下图显示该MOS的导通电阻在结温为140度的时候，为20度时候的2倍。

![](MOS管老炸_有没有可能是驱动问题__images/img_006_91de1a36522d.jpg)

■导通阀值电压：就是当驱动电压到达该值之后，可认为MOS已经开通。  

  

![](MOS管老炸_有没有可能是驱动问题__images/img_007_af740edbbfcd.png)

■上面这个例子，可以看到当Vgs达到2-4V的时候，MOS电流就上升到250uA。这时候可认为MOS已经开始开通。  

■驱动电压和导通电阻，最大导通电流之间的关系。

■从下图可以看到，驱动电压越高，实际上导通电阻越小，而且最大导通电流也越大

  

![](MOS管老炸_有没有可能是驱动问题__images/img_008_89b0958a5a30.jpg)

■导通阀值电压随温度上升而下降  

■MOSFET的寄生二极管

  

![](MOS管老炸_有没有可能是驱动问题__images/img_009_d8bfb21c4871.png)

  

![](MOS管老炸_有没有可能是驱动问题__images/img_010_7f9565ba7f78.jpg)

■寄生二极管比较重要的特性，就是反向恢复特性。这个在ZVS，同步整流等应用中显得尤为重要。

■MOSFET的寄生电容

  

![](MOS管老炸_有没有可能是驱动问题__images/img_011_dd6ef9215720.png)

■这三个电容的定义如下：  

  

![](MOS管老炸_有没有可能是驱动问题__images/img_012_dc34e51790e2.png)

■MOS的寄生电容都是非线性电容，其容值和加在上面的电压有关。所以一般的MOS厂家还会用另外一个参数来描述这个特性：  

  

![](MOS管老炸_有没有可能是驱动问题__images/img_013_caf4c6a09047.png)

■用电荷来描述

**MOSFET的驱动技术**

■MOS虽然是电压型驱动，但是由于寄生电容的存在，必须要求驱动电路提供一定的驱动电流。

■较小的驱动电流，会导致MOS的GS电压上升缓慢，降低了开关速度，提高了开关损耗。

■米勒电容Cgd

![](MOS管老炸_有没有可能是驱动问题__images/img_014_07a5b0517a7c.png)![](MOS管老炸_有没有可能是驱动问题__images/img_015_835c3858a618.png)

■米勒电容虽然看起来很小，但是对驱动的影响很大，特别在VDS比较高的场合。但是在ZVS和同步整流等应用中，由于VDS会在驱动上来之前，下降到零，就不存在这个问题。

![](MOS管老炸_有没有可能是驱动问题__images/img_016_149f1bca8f7b.png)

■上面的例子定义驱动能力为峰值电流（在特定条件下）

![](MOS管老炸_有没有可能是驱动问题__images/img_017_250d3f3d1678.png)

■有些厂商就用内阻来定义驱动能力。

■当IC本身的驱动能力不足的时候，就需要外加驱动电路来增强驱动能力，以达到快速开关MOS的需求

■1.采用分立器件，比如图腾柱。

■2.采用集成的驱动IC.

■MOSFET的低端（low side）驱动：

■所谓低端驱动，就是驱动电路的参考地，就是MOS的S端。

![](MOS管老炸_有没有可能是驱动问题__images/img_018_c98e115e78ca.jpg)

■低端驱动，电路往往比较简单，除了驱动能力之外，还是需要注意一些细节。

![](MOS管老炸_有没有可能是驱动问题__images/img_019_bbbe3bdd9014.png)

■MOSFET的高端（High Side)驱动

■很多情况下，MOSFET的S极并不是IC的参考地，比如BUCK开关管，桥式电路的上管……

![](MOS管老炸_有没有可能是驱动问题__images/img_020_56500f7bf3e1.png)![](MOS管老炸_有没有可能是驱动问题__images/img_021_0064eec0b9c1.png)

■自举驱动，利用自举电路，自动抬升供电电压。自举的驱动芯片种类很多，但是需要注意其耐压。

![](MOS管老炸_有没有可能是驱动问题__images/img_022_dd77bf8e54b6.jpg)

■对于二极管整流的buck，自举驱动需要注意的问题。

![](MOS管老炸_有没有可能是驱动问题__images/img_023_ad25ddfc9f05.jpg)

![](MOS管老炸_有没有可能是驱动问题__images/img_024_29a89f517ce3.jpg)

■利用变压器隔离驱动：

■对于浮地的MOS，或者和IC隔离的MOS，通常可以采用变压器隔离驱动

![](MOS管老炸_有没有可能是驱动问题__images/img_025_a10927d30028.png)

■变压器隔离驱动的关键：

■变压器隔离驱动关键考虑的问题，就是变压器的复位，比较常用是利用隔直电容来复位，但是需要注意的是，采用隔直电容之后，有可能变压器传递的电压幅度和占空比有关。需要考虑变压器的变比。

■对于跨初次级的驱动变压器，还需要考虑其耐压的问题。

■利用简单倍压电路来抬升驱动电压。

■下图的驱动电路，可以传递大占空比的驱动信号，而且可以让驱动电压不下降。

![](MOS管老炸_有没有可能是驱动问题__images/img_026_85e6a8006460.jpg)

■隔直电容带来的问题：

■由于隔直电容会储存能量，所以在驱动消失之后，隔直电容会和变压器产生谐振，导致驱动电路传递错误的驱动信号。

![](MOS管老炸_有没有可能是驱动问题__images/img_027_66ff51706a54.png)

■为了降低这个问题的影响。可以利用这些电阻来阻尼这个震荡。

![](MOS管老炸_有没有可能是驱动问题__images/img_028_998c5fa32a76.jpg)

■对具有隔直电容的驱动电路，有些IC会植入soft stop的功能：在关机时候，让驱动的占空比逐渐降低到0.

![](MOS管老炸_有没有可能是驱动问题__images/img_029_fcf7e6ce041e.png)

■为了避免这个隔直电容带来的问题，可以采用无电容的变压器驱动电路。

![](MOS管老炸_有没有可能是驱动问题__images/img_030_216e21876a1e.png)

■如果用IC直接驱动变压器，那么需要注意：

![](MOS管老炸_有没有可能是驱动问题__images/img_031_45217860377f.png)

■同步整流驱动，需要注意逻辑的问题

![](MOS管老炸_有没有可能是驱动问题__images/img_032_e51982368453.png)

■同步整流2个管子的驱动关系为互补，但是当主管长时间关断的时候，整流管就会出现长时间导通的情况。

■所以在关机的时候，不能简单的把主管驱动信号置低，而要同时把整流管的驱动信号也置低。

![](MOS管老炸_有没有可能是驱动问题__images/img_033_61ccf41762c6.png)

■MOS的并联驱动，并联驱动要尽量保证每个管子的驱动线对称。  

![](MOS管老炸_有没有可能是驱动问题__images/img_034_f0bc5da69895.png)

## 

**MOS驱动相关文章**

-   [开关电源设计之MOS管驱动电路](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486115&idx=1&sn=753c9464b0bc2009544e27fd19e43847&chksm=c309d471f47e5d671f04e636d6a07ea54929a53fc97be375cc0342cd38cdb8b386b2e88e4f25&scene=21#wechat_redirect)
    
-   [MOS管及其外围电路设计](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247488304&idx=1&sn=f6babbebc6b672abc37f8193a6925958&chksm=c309cde2f47e44f416d80ad2ab55f5c6a0be71311bd339a18648ecc8197988bd591a7a51cc1d&scene=21#wechat_redirect)
    

  

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你入技术交流群。