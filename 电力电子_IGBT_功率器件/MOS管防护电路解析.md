# MOS管防护电路解析

原创 硬件笔记本 2023-12-21 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/YZlX5vjhUdWaeSi3VgWLyg](https://mp.weixin.qq.com/s/YZlX5vjhUdWaeSi3VgWLyg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

功率MOS管自身拥有众多优点，但是MOS管具有较脆弱的承受短时过载能力，特别是在高频的应用场合，所以在应用功率MOS管对必须为其设计合理的保护电路来提高器件的可靠性。

![](MOS管防护电路解析_images/img_002_1bfd1af9864e.png)

  

功率MOS管保护电路主要有以下几个方面：

**1）防止栅极 di/dt过高：**

由于采用驱动芯片，其输出阻抗较低，直接驱动功率管会引起驱动的功率管快速的开通和关断，有可能造成功率管漏源极间的电压震荡，或者有可能造成功率管遭受过高的di/dt而引起误导通。

为避免上述现象的发生，通常在MOS驱动器的输出与MOS管的栅极之间串联一个电阻(R509)，电阻的大小一般选取几十欧姆。该电阻可以减缓Rds从无穷大到Rds(on)(一般0.1欧姆或者更低)。若不加R509电阻，高压情况下便会因为mos管开关速率过快而导致周围元器件被击穿。但R509电阻过大则会导致MOS管的开关速率变慢，Rds从无穷大到Rds（on）的需要经过一段时间，高压下Rds会消耗大量的功率，而导致mos管发热异常。该电阻上并联的二极管(D507)是在脉冲下降沿时起到对栅极放电的作用，使场效应管能快速截止，减少功耗。

**2）防止栅源极间过电压:**

由于栅极与源极的阻抗很高，漏极与源极间的电压突变会通过极间电容耦合到栅极而产生相当高的栅源尖峰电压，此电压会使很薄的栅源氧化层击穿，同时栅极很容易积累电荷也会使栅源氧化层击穿，所以要在MOS管栅源极并联稳压管(图中D903)以限制栅极电压在稳压管稳压值以下，保护MOS管不被击穿，MOS管栅源极并联电阻(图中R516)是为了释放栅极电荷，不让电荷积累，实测单独焊接该下拉电阻（R516）还是不足以快速释放g极电荷，会导致mos管误触发，可靠的放电电路还是需要依赖**MOS管g极->D507->驱动芯片地回路**来进行可靠的放电。

**3）防护漏源极之间过电压 :**

虽然漏源击穿电压VDS一般都很大，但如果漏源极不加保护电路，同样有可能因为器件开关瞬间电流的突变而产生漏极尖峰电压，进而损坏MOS管，功率管开关速度越快，产生的过电压也就越高。为了防止器件损坏，通常采用齐纳二极管钳位(图中D901)和RC缓冲电路(图中C916，R926)等保护措施，实测加上稳压管（D901）的效果要比加上RC电路的效果要好，推荐先用稳压管测试，但是此处绝对不能加tvs，加tvs会导致源极电压抬高，gs损坏。

当电流过大或者发生短路时，功率MOS管漏极与源极之间的电流会迅速增加并超过额定值，必须在过流极限值所规定的时间内关断功率MOS管,否则器件将被烧坏，因此在主回路增加电流采样保护电路，当电流到达一定值，通过保护电路关闭驱动电路来保护MOS管。

#### **4）电流采样保护电路**

将经过mos管的电流通过采样电阻采样出来，然后将信号放大，将放大获得的信号和mcu给出的驱动信号经过或门控制驱动芯片的使能，在驱动电流过大时禁止驱动芯片输出，从而保护mos管回路。

![](MOS管防护电路解析_images/img_003_46c00734d3a9.png)

**原文链接：**https://blog.csdn.net/zhuimeng\_ruili/article/details/108979413

硬件工程师及从业者都在关注我们

![](MOS管防护电路解析_images/img_004_2e84b7ba26c6.gif) ![](MOS管防护电路解析_images/img_005_51d069a6484e.gif) ![](MOS管防护电路解析_images/img_006_5fb296583be4.gif) ![](MOS管防护电路解析_images/img_007_1f30148044c0.gif) ![](MOS管防护电路解析_images/img_008_c5bc86d0867d.gif) ![](MOS管防护电路解析_images/img_009_b38438d4de46.gif) ![](MOS管防护电路解析_images/img_010_1d54e9fe0aef.gif) ![](MOS管防护电路解析_images/img_011_9bb0105b1e46.gif)

![](MOS管防护电路解析_images/img_012_de88c48250d0.gif) ![](MOS管防护电路解析_images/img_013_3b83df2d253b.gif) ![](MOS管防护电路解析_images/img_014_db521919e8d9.gif) ![](MOS管防护电路解析_images/img_015_aea384ea417e.gif) ![](MOS管防护电路解析_images/img_016_f4924e7a240a.gif) ![](MOS管防护电路解析_images/img_017_a58db91dbb3b.gif) ![](MOS管防护电路解析_images/img_018_f0edc68b0c53.gif) ![](MOS管防护电路解析_images/img_019_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。