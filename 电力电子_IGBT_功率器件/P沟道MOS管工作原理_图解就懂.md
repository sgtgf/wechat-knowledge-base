# P沟道MOS管工作原理，图解就懂

原创 电路一点通 2025-06-19 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/uunVuWuvYXkrQWXgsrWTbw](https://mp.weixin.qq.com/s/uunVuWuvYXkrQWXgsrWTbw)

> P沟道MOS管像个“反向”水龙头：栅极加负电压才能打开，空穴从源极流向漏极，电压越负电流越大。轻松理解电子开关的奥秘！

  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\P沟道MOS管工作原理_图解就懂_images\img_000_cbbab8ba0331.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

**P沟道MOS管，简单说，就是它的“门”——栅极（G）的电压，相对于它的“进水口”——源极（S）的电压，低到一定程度（比源极电压负很多），它就“打开”了，允许电流从源极（S）流向它的“出水口”——漏极（D）。电压控制电流，就像个电子开关。**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\P沟道MOS管工作原理_图解就懂_images\img_001_d54f1d1a9485.jpg)

嘿，哥们儿!想搞懂P沟道MOS管是怎么工作的?别怕，这玩意儿没那么玄乎。咱们把它想象成一个特殊的水龙头，就能轻松理解了。

🚰 **一个神奇的“反向”水龙头**

**水龙头主体** ：就是咱们的P沟道MOS管。

**进水口（Source，S极）** ：电流从这里进来，通常接电路的较高电位。

**出水口（Drain，D）** ：电流从这里出去，通常接电路的较低电位。

**阀门开关（Gate，G）** ：控制水流(电流)的关键!

**特殊之处** ：这个水龙头有点“反常”。你不是往下按(加正电压)打开它，而是要**使劲往上提（加负电压，或者说让G极电压远低于S极电压）** ，阀门才能打开。提的劲儿越大(G和S之间的负向电压差越大)，水流(电流)就越大(在一定范围内)。

**水管内部（沟道）** ：水流通过的路径。在P沟道MOS管里，这个“水”主要是带正电的“空穴”。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\P沟道MOS管工作原理_图解就懂_images\img_002_e3b077afbc5e.jpg)

🧱 **内部构造一探究竟（简化版）**

为了理解它是怎么被“负电压”打开的，咱们得稍微看看它里面长啥样：

**N型“地基”（衬底，Substrate）** ：想象一块N型半导体材料作为基础。N型材料里面，自由电子(带负电)比较多。

**两个P型“坑”（源极S 和 漏极D）** ：在这块N型地基上，挖了两个P型半导体区域，这就是源极S和漏极D。P型材料里面，空穴(可以看作带正电的“坑位”)比较多。

**绝缘的“大门”（栅极G 和 绝缘层）** ：在源极S和漏极D之间的N型衬底表面，覆盖了一层薄薄的绝缘层(通常是二氧化硅，SiO₂)，绝缘层上面才是金属的栅极G。栅极G就像一个指挥官，它不直接接触“士兵”(电流)，而是通过“喊话”(施加电场)来指挥。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\P沟道MOS管工作原理_图解就懂_images\img_003_b8484edb0fa9.jpg)

⚙️ **工作三部曲：从关断到导通**

**第一步：截止状态（水龙头关紧）—— Vgs 不够负** ⛔

**条件** ：当栅极G相对于源极S的电压 Vgs 不够负，或者甚至是正的时候(比如Vgs > Vth\_p，这里的Vth\_p是P管的开启电压，它本身是个负值，例如-2V。那么Vgs=-1V或0V或+1V都算不够负)。

**内部情况** ：栅极G下方的N型衬底区域，由于G极电压不够负，无法吸引足够的空穴来形成一个连接S极和D极的P型导电层(沟道)。S区和D区之间被N型衬底隔开，就像断了的桥，空穴过不去。

**结果** ：MOS管处于截止状态，S和D之间基本没有电流流过(Ids ≈ 0)。

**第二步：开启过程（水龙头阀门被“提”开）—— Vgs 足够负** ✅

：当栅极G相对于源极S的电压 Vgs **足够负** ，负到超过了那个特定的“门槛”(即 |Vgs| > |Vth\_p|，或者说 Vgs < Vth\_p，比如Vth\_p是-2V，那么Vgs达到-3V、-4V等)。

：

**排斥电子** ：G极强大的负电场会排斥其正下方N型衬底里的电子，把它们往衬底深处推。

**吸引空穴** ：同时，这个负电场会把N型衬底中极其微量的少数载流子——空穴，以及从P型源极S和P型漏极D区域“感应”过来的空穴，吸引并聚集到栅极G正下方的衬底表面。

**形成P沟道** ：当被吸引过来的空穴足够多，它们就在S区和D区之间形成了一个临时的、薄薄的**P型导电沟道（P-channel）** 。这座“桥”就搭起来了!

MOS管开始导通。

**第三步：电流流通（水哗哗地流）—— 形成漏极电流 Ids** 💧➡️💧

P沟道已经形成。此时，如果在源极S和漏极D之间施加一个电压差 Vds(通常P管的S极接高电位，D极接低电位，所以Vds是个负值)，并且S极电位高于D极。

空穴(正电荷)就会在电场力的作用下，从电位较高的源极S，通过已经形成的P沟道，流向电位较低的漏极D，形成漏极电流Ids。

**控制特性** ：Vgs越负(G极相对于S极的电压越低，其绝对值越大)，吸引到沟道的空穴就越多，沟道就越“宽”，导电能力越强，允许通过的Ids电流就越大(在饱和区之前)。

简单说：G极的负电压越“厉害”，S到D的“水管”就越粗，水流就越大。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\P沟道MOS管工作原理_图解就懂_images\img_004_cf88da87d772.jpg)

💡 **P沟道MOS管的关键记忆点** 💡

**“负”控开启** ：栅极G电压必须比源极S电压**低** 到一定程度(Vgs < Vth\_p，Vth\_p是负的)，才能开启。

**空穴导电** ：导电的主力是带正电的**空穴** 。

**电流方向** ：对于P沟道MOS管，习惯上源极S接高电位，漏极D接低电位。导通时，电流(空穴流)从**S流向D** 。

**与N沟道MOS管“反着来”** ：N沟道是栅极比源极电压高(正电压)才开，电子导电，电流从D流向S(常规定义)。P沟道正好相反。

搞定!P沟道MOS管的工作原理是不是清晰多了?记住那个“反向”水龙头和“负电压开门”的特点，下次再遇到它就不懵圈啦!👍

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\P沟道MOS管工作原理_图解就懂_images\img_005_6602968ad7f6.jpg)

******进大家庭⭕圈探讨回复:************交流******

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[嵌入式硬件杂谈：一文掌握ADC知识、工作原理、类型差异及其评价指标](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547956&idx=1&sn=561ac1d22071c363eadda46ee1c9cabf&scene=21#wechat_redirect)**
    
-   **[混合动力电动汽车系统组成构造和工作原理【电子书】](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522232&idx=1&sn=39207dba517e3d29ae5bf99ee4c56619&scene=21#wechat_redirect)**
    
-   **[电工技术零起步轻松学不是问题(第2版)-600页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259118&idx=1&sn=7b46de7ef129c765a3199506aef17811&scene=21#wechat_redirect)**
    

  

分享💬点赞👍在看❤️