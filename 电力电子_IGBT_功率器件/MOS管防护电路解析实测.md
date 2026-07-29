# MOS管防护电路解析实测

原创 电路一点通 2025-02-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/zxLHtXSdlxIIC2G4akCd6Q](https://mp.weixin.qq.com/s/zxLHtXSdlxIIC2G4akCd6Q)

目录

1）防止栅极 di/dt过高：

2）防止栅源极间过电压:

3）防护漏源极之间过电压 :

4）电流采样保护电路

* * *

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

功率MOS管自身拥有众多优点，但是MOS管具有较脆弱的承受短时过载能力，特别是在高频的应用场合，所以在应用功率MOS管对必须为其设计合理的保护电路来提高器件的可靠性。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_001_7bb22d535d3b.png)

功率MOS管保护电路主要有以下几个方面：

#### 1）防止栅极 di/dt过高：

由于采用驱动芯片，其输出阻抗较低，直接驱动功率管会引起驱动的功率管快速的开通和关断，有可能造成功率管漏源极间的电压震荡，或者有可能造成功率管遭受过高的di/dt而引起误导通。为避免上述现象的发生，通常在MOS驱动器的输出与MOS管的栅极之间串联一个电阻(R509)，电阻的大小一般选取几十欧姆。该电阻可以减缓Rds从无穷大到Rds(on)(一般0.1欧姆或者更低)。若不加R509电阻，高压情况下便会因为mos管开关速率过快而导致周围元器件被击穿。但R509电阻过大则会导致MOS管的开关速率变慢，Rds从无穷大到Rds（on）的需要经过一段时间，高压下Rds会消耗大量的功率，而导致mos管发热异常。该电阻上并联的二极管(D507)是在脉冲下降沿时起到对栅极放电的作用，使场效应管能快速截止，减少功耗。

#### 2）防止栅源极间过电压:

由于栅极与源极的阻抗很高，漏极与源极间的电压突变会通过极间电容耦合到栅极而产生相当高的栅源尖峰电压，此电压会使很薄的栅源氧化层击穿，同时栅极很容易积累电荷也会使栅源氧化层击穿，所以要在MOS管栅极并联稳压管(图中D903)以限制栅极电压在稳压管稳压值以下，保护MOS管不被击穿，MOS管栅极并联电阻(图中R516)是为了释放栅极电荷，不让电荷积累，实测单独焊接该下拉电阻（R516）还是不足以快速释放g极电荷，会导致mos管误触发，可靠的放电电路还是需要依赖mos管g极->D507->驱动芯片地回路来进行可靠的放电。

#### 3）防护漏源极之间过电压 :

虽然漏源击穿电压VDS一般都很大，但如果漏源极不加保护电路，同样有可能因为器件开关瞬间电流的突变而产生漏极尖峰电压，进而损坏MOS管，功率管开关速度越快，产生的过电压也就越高。为了防止器件损坏，通常采用齐纳二极管钳位(图中D901)和RC缓冲电路(图中C916，R926)等保护措施，实测加上稳压管（D901）的效果要比加上RC电路的效果要好，推荐先用稳压管测试，但是此处绝对不能加tvs，加tvs会导致源极电压抬高，gs损坏。

当电流过大或者发生短路时，功率MOS管漏极与源极之间的电流会迅速增加并超过额定值，必须在过流极限值所规定的时间内关断功率MOS管,否则器件将被烧坏，因此在主回路增加电流采样保护电路，当电流到达一定值，通过保护电路关闭驱动电路来保护MOS管。

#### 4）电流采样保护电路

将经过mos管的电流通过采样电阻采样出来，然后将信号放大，将放大获得的信号和mcu给出的驱动信号经过或门控制驱动芯片的使能，在驱动电流过大时禁止驱动芯片输出，从而保护mos管回路。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_002_976c767cc74e.png)

******推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_004_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_005_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_003_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_006_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_007_ead434f24ea4.png)******  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防护电路解析实测_images\img_008_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******