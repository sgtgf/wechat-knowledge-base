# 你手上的PCB怎么制作的？几张动图揭晓工厂生产流程

原创 硬件笔记本 2023-02-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/Qu1DRQn-7hisOIsKuxw5kg](https://mp.weixin.qq.com/s/Qu1DRQn-7hisOIsKuxw5kg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

在PCB出现之前，电路是通过点到点的接线组成的。这种方法的可靠性很低，因为随着电路的老化，线路的破裂会导致线路节点的断路或者短路。绕线技术是电路技术的一个重大进步，这种方法通过将小口径线材绕在连接点的柱子上，提升了线路的耐久性以及可更换性。

当电子行业从真空管、继电器发展到硅半导体以及集成电路的时候，电子元器件的尺寸和价格也在下降。电子产品越来越频繁的出现在了消费领域，促使厂商去寻找更小以及性价比更高的方案。于是，PCB诞生了。

  

**PCB制作工艺**

PCB的制作非常复杂，以四层印制板为例，其制作过程主要包括了PCB布局、芯板的制作、内层PCB布局转移、芯板打孔与检查、层压、钻孔、孔壁的铜化学沉淀、外层PCB布局转移、外层PCB蚀刻等步骤。

**1、PCB布局**

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xMY8ne6tBLdBNMY6rY2LQoTJAj2Hibx5E08j9C0iaomqlcP5Jqk7odIiag/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

PCB制作第一步是整理并检查PCB布局（Layout）。PCB制作工厂收到PCB设计公司的CAD文件，由于每个CAD软件都有自己独特的文件格式，所以PCB工厂会转化为一个统一的格式——Extended Gerber RS-274X 或者 Gerber X2。然后工厂的工程师会检查PCB布局是否符合制作工艺，有没有什么缺陷等问题。

  

**2、芯板的制作**

清洗覆铜板，如果有灰尘的话可能导致最后的电路短路或者断路。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xrxPMNStxP7D4MdxbcD0S0gY22baU5TM1QEic22LxWdJqhic7UVGGHRicw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

下图是一张8层PCB的图例，实际上是由3张覆铜板（芯板）加2张铜膜，然后用半固化片粘连起来的。制作顺序是从最中间的芯板（4、5层线路）开始，不断地叠加在一起，然后固定。4层PCB的制作也是类似的，只不过只用了1张芯板加2张铜膜。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xKw4xos4MAHWW7Y3ibyhaJbITWuSAeyjwxicaFpjAaUgTKKIKhN9RsaHQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**3、内层PCB布局转移**

先要制作最中间芯板（Core）的两层线路。覆铜板清洗干净后会在表面盖上一层感光膜。这种膜遇到光会固化，在覆铜板的铜箔上形成一层保护膜。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xCKTZMm1OuAnqpPTpZgBnvy3HJsIm5O0wIb1qPclBxJKypDFHpFjZlg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

将两层PCB布局胶片和双层覆铜板，最后插入上层的PCB布局胶片，保证上下两层PCB布局胶片层叠位置精准。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xEpQ6lwnUMXuUL3j117UMEibw9zUDzBzhX2L3GEyZsQ8mib1DbGCyJwJA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

感光机用UV灯对铜箔上的感光膜进行照射，透光的胶片下，感光膜被固化，不透光的胶片下还是没有固化的感光膜。固化感光膜底下覆盖的铜箔就是需要的PCB布局线路，相当于手工PCB的激光打印机墨的作用。

然后用碱液将没有固化的感光膜清洗掉，需要的铜箔线路将会被固化的感光膜所覆盖。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xdkOYatUictRK8v7HP3rBBtvPwNN29eWsHBNQ7EWMgCdfnxHNgcicGfFQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

然后再用强碱，比如NaOH将不需要的铜箔蚀刻掉。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xZnF4h5UEPY9ep9Ihnu6LXA9wFGlOjThjiaicbD9rj1FWqNvOnWlYUvyg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

将固化的感光膜撕掉，露出需要的PCB布局线路铜箔。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xzic13FW3UdZQelKHNCia93H7roZVRupfsc7YCvtmgHCSpswX914o8VPA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

**4、芯板打孔与检查**

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xNuNic31b4r3nnOyAtRkTia5UMKhfaqX3ySiasice5DStpASiarJribOPVMeQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

芯板已经制作成功。然后在芯板上打对位孔，方便接下来和其它原料对齐。芯板一旦和其它层的PCB压制在一起就无法进行修改了，所以检查非常重要。会由机器自动和PCB布局图纸进行比对，查看错误。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xN2GdCbmSRpTcU6hpABLkUzPqaNMxuia9TJ5IVlRgjKzbnFka6nw3FdA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

**5、层压**

这里需要一个新的原料叫做半固化片，是芯板与芯板（PCB层数>4），以及芯板与外层铜箔之间的粘合剂，同时也起到绝缘的作用。

下层的铜箔和两层半固化片已经提前通过对位孔和下层的铁板固定好位置，然后将制作好的芯板也放入对位孔中，最后依次将两层半固化片、一层铜箔和一层承压的铝板覆盖到芯板上。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8x64uXQyDiatv4qPVjSRCqGVc7QuJDNvgI2cDvqdKcwwCv9u6fTQguvHA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

将被铁板夹住的PCB板子们放置到支架上，然后送入真空热压机中进行层压。真空热压机里的高温可以融化半固化片里的环氧树脂，在压力下将芯板们和铜箔们固定在一起。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xribkqUKmCrdVhRsd4WpdDLDsEBEKkWCOgCwHDtYiaqE0v9iaKDcDEv0uQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

层压完成后，卸掉压制PCB的上层铁板。然后将承压的铝板拿走，铝板还起到了隔离不同PCB以及保证PCB外层铜箔光滑的责任。这时拿出来的PCB的两面都会被一层光滑的铜箔所覆盖。

  

**6、钻孔**

要将PCB里4层毫不接触的铜箔连接在一起，首先要钻出上下贯通的穿孔来打通PCB，然后把孔壁金属化来导电。

用X射线钻孔机机器对内层的芯板进行定位，机器会自动找到并且定位芯板上的孔位，然后给PCB打上定位孔，确保接下来钻孔时是从孔位的正中央穿过。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xCcC2ygnD1icYKoibrzyZDmqSAj1GiaLTibXSFNkpITicEYQiaJYQzJtic9mgA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

将一层铝板放在打孔机机床上，然后将PCB放在上面。为了提高效率，根据PCB的层数会将1~3个相同的PCB板叠在一起进行穿孔。最后在最上面的PCB上盖上一层铝板，上下两层的铝板是为了当钻头钻进和钻出的时候，不会撕裂PCB上的铜箔。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xAnQbicHfhHria20ueBwYAkm7X5MLW5tb4CM4VvmT99uBYaF1928gXhxw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

在之前的层压工序中，融化的环氧树脂被挤压到了PCB外面，所以需要进行切除。靠模铣床根据PCB正确的XY坐标对其外围进行切割。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xxY0orytECeafyAcMpJIDUnRcdSdibD94MegElVUkevhFNsMuOibt47xw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

**7、孔壁的铜化学沉淀**

由于几乎所有PCB设计都是用穿孔来进行连接的不同层的线路，一个好的连接需要25微米的铜膜在孔壁上。这种厚度的铜膜需要通过电镀来实现，但是孔壁是由不导电的环氧树脂和玻璃纤维板组成。

所以第一步就是先在孔壁上堆积一层导电物质，通过化学沉积的方式在整个PCB表面，也包括孔壁上形成1微米的铜膜。整个过程比如化学处理和清洗等都是由机器控制的。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8x5JZrBhHPo1fBxFsLOp9w5EwketqIqZXvZ1dVfcJ3stIxVXwTWN6DFg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

固定PCB

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xNeicicHUmb08XnE93sTmwuYJFTIsmyc4DpIS1paI5HzlB7xKQewZondw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

清洗PCB

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xUNyHlqWrcUXMkV2XlNXeJlwTSc1tU2FYWibqXCIuRdn8FVU2dNHMcdg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

运送PCB

  

**8、外层PCB布局转移**

接下来会将外层的PCB布局转移到铜箔上，过程和之前的内层芯板PCB布局转移原理差不多，都是利用影印的胶片和感光膜将PCB布局转移到铜箔上，唯一的不同是将会采用正片做板。

内层PCB布局转移采用的是减成法，采用的是负片做板。PCB上被固化感光膜覆盖的为线路，清洗掉没固化的感光膜，露出的铜箔被蚀刻后，PCB布局线路被固化的感光膜保护而留下。

外层PCB布局转移采用的是正常法，采用正片做板。PCB上被固化的感光膜覆盖的为非线路区。清洗掉没固化的感光膜后进行电镀。有膜处无法电镀，而没有膜处，先镀上铜后镀上锡。退膜后进行碱性蚀刻，最后再退锡。线路图形因为被锡的保护而留在板上。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xlUr1lFGjcSia7h9cUncwhiabw51J024fKLvm7Tn5GLJ0mibN4bRM6zomg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8x0NfpIhiblK6osNpGRAMrSkXIEIGytadLXMib9Z3fY0Tmrsl2dk4icdxDw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xOtkIXjUtHIgPmFmb3xQjArUtcC7kmRbqJ258b0nWZXXibMfl06BJ6kQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

将PCB用夹子夹住，将铜电镀上去。之前提到，为了保证孔位有足够好的导电性，孔壁上电镀的铜膜必须要有25微米的厚度，所以整套系统将会由电脑自动控制，保证其精确性。

  

**9、外层PCB蚀刻**

接下来由一条完整的自动化流水线完成蚀刻的工序。首先将PCB板上被固化的感光膜清洗掉。然后用强碱清洗掉被其覆盖的不需要的铜箔。再用退锡液将PCB布局铜箔上的锡镀层退除。清洗干净后4层PCB布局就完成了。

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xia9cm35ibCMEVMUUogNp5JtbvAzggMFiaiaDUicYz4NKof9TnQcmh34zSVw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xtgE85ducc1x3g5OnQYYTiaugt6ZWUKIC9ZzVcIDeaGglicgkIUwfc1iaA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/Hlibq5A7Z6tMgkictic1Du4kia58wPTY4x8xPRVmRjYeO69ibRDUaSPegLoiaibX9CPQ6qYDPicq9RC9wBmndmKHl0MGZg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。