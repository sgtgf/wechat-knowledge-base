# PCB设计时别忽视，这11个细节！

原创 硬件笔记本 2024-11-13 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/FxzLpDrgayOnLDoI2aNmYA](https://mp.weixin.qq.com/s/FxzLpDrgayOnLDoI2aNmYA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

大家好，我是王工。

今天给大家分享PCB设计的11个细节。

  

**1、SMD元器件之间的间距大小**

**SMD元件之间有足够的间距**是PCB Layout工程师需要注意的第一件事情，太小的间距会增加焊膏的难度，并在焊盘之间产生焊点，下面是一些建议的间距，仅供参考：

   SMD元件的间距：

-   同质SMD元件：≥0.3MM
    
-   异质SMD元件：≥0.13\*H+0.3mm（H为相邻元件最大高度差）
    

   以上间距只是给大家提供一个参考，不同的制造商也会有不同的要求。

[![](PCB设计时别忽视_这11个细节__images/img_002_3847ffa7e45a.jpg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

## SMD元器件之间的间距大小

  

## **2、贴片元件与插件元件之间的间距尺寸**

如下图所示：**DIP和SMT元器件之间要有足够的间距**，建议间距为1-3mm。不过，现在大部分都会使用SMT工艺，DIP比较少了。

![](PCB设计时别忽视_这11个细节__images/img_003_5732c750c8da.png)

SMD-DIP

## **3、IC去耦电容的放置**

**去耦电容**是用来滤除电源信号中高频噪声的电容。

![](PCB设计时别忽视_这11个细节__images/img_004_a3c81eedb870.png)

去耦电容

**在 PCB 布局上尽可能靠近集成电路(IC)放置去耦电容**。IC有多个供电端口时，每个供电端口需要匹配一个去耦电容。

![](PCB设计时别忽视_这11个细节__images/img_005_b5d33c9cff0b.png)

  

**4、靠近边界的元件的方向和间距**

通常，PCB 制造商会首选 **PCB 拼板**，这样可以优化材料利用率，从而降低制造成本。此外还可以提高制造效率。关注公众号硬件笔记本

**PCB拼板布局必须要满足2个基本前提：**

-   **靠近PCB边界的元件必须与板轮廓平行** (这将导致元件承受来自拆板的均匀机械应力;例如，下图中左侧的元件可能会从焊盘上脱落，由于承受非均匀机械应力而导致的脱板）
    
-   将**元器件放置在靠近PCB板的区域**(以免拆板时损坏元器件)。
    

![](PCB设计时别忽视_这11个细节__images/img_006_393497e2e8ac.png)

PCB组件

## **5、蛇形路由设计**

例如一些**串行的SMD焊盘**需要相互连接，需要**通过蛇形路由设计**，而不是直接桥连，并且需要注意宽度。

![](PCB设计时别忽视_这11个细节__images/img_007_3fe074faa704.png)

蛇形路由设计

## **6、必须注意特定区域焊盘的散热**

 很显然，**散热越好**，元器件的工作性能就越好，因此PCB设计工程师需要注意如何设计和布局PCB，**防止热量在某些区域堆积**。

![](PCB设计时别忽视_这11个细节__images/img_008_339fc88058e4.png)

焊盘的热量耗散

  

**如果焊盘位于公众区域，可以参考上图，是比较好的选择**。如果使用上图左侧的图，可能会造成元器件维修或者拆装时出现一定的困难，因为拆焊时的温度会被大面积的铜接地带走，导致拆焊时变硬。

  

## **7、布局中的 PCB 泪滴**

 **泪滴**是额外的铜，具有某些特定形状，用于 PCB 布局，以**提供额外的强度，使通孔足够坚固以承受热应力和机械应力**。尤其是焊盘或过孔与迹线连接处的区域，或宽窄之间的迹线布线时。例如走线线宽的一部分从 10 密耳变为 4 密耳，则必须在过渡点添加泪珠以减少任何潜在的应力或细线裂纹。

![](PCB设计时别忽视_这11个细节__images/img_009_a3f170aaa0ad.png)

PCB泪珠

泪珠的优点：

-   避免突然变窄的过渡走线反射信号，保持走线与PAD连接处的平滑稳定
    
-   避免 PAD 和走线之间因冲击应力而产生细线和裂纹
    
-   促进PCB制造中的蚀刻过程
    

##   

## **8、焊盘之间走线宽度一致**

**连接到焊盘的的每条走线应具有相同的宽度尺寸**。如下图所示：

![](PCB设计时别忽视_这11个细节__images/img_010_ff8ed2d6a66f.png)

焊盘之间走线宽度一致

##   

## **9、未使用的焊盘需要连接到电气接地**

未使用的焊盘应保留在那里，并正确连接到电气接地。

例如上图芯片的两个引脚是非功能焊盘，但是存在于芯片上面，如果没有连接到电气接地，可能会导致信号干扰。

[![](PCB设计时别忽视_这11个细节__images/img_011_57c2572245d6.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

## 未使用的焊盘

  

  

## **10、走线或元器件与PCB板之间有足够的间距**

**保持走线或组件与 PCB 板之间的间距尽可能大**。尤其是单层PCB，纸质基材大，贴近基板的元器件或走线容易受到机械应力的影响。

![](PCB设计时别忽视_这11个细节__images/img_012_7dcd1e891d55.png)

走线到PCB边界

  

## **11、电解电容尽量远离一些可能的热源**

首先要**验证电解电容是否与电子设备的工作温度相匹配**，其次要使**电解电容尽量远离热源**，避免其内部电解液因热源的冲击而干涸。

  

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

  

[![](PCB设计时别忽视_这11个细节__images/img_013_c270758cd48d.jpg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](PCB设计时别忽视_这11个细节__images/img_014_a43ff79f2147.jpg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

\-END-

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](PCB设计时别忽视_这11个细节__images/img_015_854de1eb795d.jpg)![](PCB设计时别忽视_这11个细节__images/img_016_17c99fedbed1.jpg)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)