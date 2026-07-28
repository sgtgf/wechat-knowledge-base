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

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rrnMrhRq4nCx9b3q6Tggdoe6ibtWgGZK5Jf4giczoahRehXUPyy0nmlCw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rYKc8voCpjiaU8dtsGaFQ9E8N4xcLBNHuRv670yNsnKtloAnD7R1GF3g/640?wx_fmt=jpeg)

**MOSFET的一些主要参数**

■耐压：通常所说的VDS，或者说是击穿电压。那么一般MOS厂家是如何来定义这个参数的呢？

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLW0UFnqOPsSF3j2avwf5KUdsQorc7ibph2sicxeyMLQa4tpic1uMpL6kIjA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■上面这个例子显示，当驱动电压为0，Vds达到200V的时候，Id这个电流达到了250uA，这个时候认为已经达到击穿电压。

  

■不同的厂家对此定义略有不同，但是基本上来说，当电压超过击穿电压，MOS的漏电流就会急剧上升。

  

■导通电阻：

■MOSFET在导通之后，其特性可以近似认为是一个电阻

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWXXN5uB4U9ajQjZOHgGNzTvKHdcE1dQO5ByBAbic4B3Pia2Wvmtibw7Eibw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■上面这个例子表示，在驱动电压为10V的时候，导通电阻为0.18欧姆

■导通电阻的温度关系：

■MOS的导通电阻随温度上升而上升，下图显示该MOS的导通电阻在结温为140度的时候，为20度时候的2倍。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rxChONQrNQ7ibUTNaZRw8pI2ltibcIPLQ7wXnda3OoH1F364Kia6B88s9Q/640?wx_fmt=jpeg)

■导通阀值电压：就是当驱动电压到达该值之后，可认为MOS已经开通。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWfr2m0Ax9acedz69GVO6EawWInr8ibV8sKIkedtn9L4zgDaVCJnJAdlQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■上面这个例子，可以看到当Vgs达到2-4V的时候，MOS电流就上升到250uA。这时候可认为MOS已经开始开通。  

■驱动电压和导通电阻，最大导通电流之间的关系。

■从下图可以看到，驱动电压越高，实际上导通电阻越小，而且最大导通电流也越大

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rJYNJZiab7ibJZHYmOVNHFbETiaL8oflibyRef13gIB7pYIwK1sr1Q13CEQ/640?wx_fmt=jpeg)

■导通阀值电压随温度上升而下降  

■MOSFET的寄生二极管

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWUHgPoqIIvomtmbsm5Xia4RyNeduia6WSaibcpmcS8LGLC19aAibeXKAKkg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWfJLj20KSmqjGPMoR8j5ibYMXM4nMU6uibmtuGVicBfdnbHIRQvFeg7z1w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

■寄生二极管比较重要的特性，就是反向恢复特性。这个在ZVS，同步整流等应用中显得尤为重要。

■MOSFET的寄生电容

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWapUr5liaNne6SAXGLiae0AVJ90Uyf5WZ7eF0ea4UmGQn7kaRazFQl6WQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■这三个电容的定义如下：  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rIx34nKRjtMChkIXNpV1U8Rb5bgDJSgy1DTwwxsaewWY0ClPhH43HoA/640?wx_fmt=png)

■MOS的寄生电容都是非线性电容，其容值和加在上面的电压有关。所以一般的MOS厂家还会用另外一个参数来描述这个特性：  

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWicBn5Gs8icwDp9WWibqKvbyRFW3obyfnaeUib2SVDicLCAry4icaNl92ZD6A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■用电荷来描述

**MOSFET的驱动技术**

■MOS虽然是电压型驱动，但是由于寄生电容的存在，必须要求驱动电路提供一定的驱动电流。

■较小的驱动电流，会导致MOS的GS电压上升缓慢，降低了开关速度，提高了开关损耗。

■米勒电容Cgd

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLW3FMm1ibfmnGetwMlJf1hTH8cpdQGFQFH45N6V8kZgh3otfPxnNkpRvg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWl9jicSXB1FXe8cAQt1pQnzyVj2caoJR8fANjydVAePicwcmdZZbCkKFQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■米勒电容虽然看起来很小，但是对驱动的影响很大，特别在VDS比较高的场合。但是在ZVS和同步整流等应用中，由于VDS会在驱动上来之前，下降到零，就不存在这个问题。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWPfCA5oibNGuMElsZAFvcXl5nOPynwQPnhicSNOwcaRlS0RW5SgibpJaPA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■上面的例子定义驱动能力为峰值电流（在特定条件下）

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWibjaxB2ExDJb3VFcyicic0DB1Scz7aUicHPMXpeE398iatOReOB75mapSKw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■有些厂商就用内阻来定义驱动能力。

■当IC本身的驱动能力不足的时候，就需要外加驱动电路来增强驱动能力，以达到快速开关MOS的需求

■1.采用分立器件，比如图腾柱。

■2.采用集成的驱动IC.

■MOSFET的低端（low side）驱动：

■所谓低端驱动，就是驱动电路的参考地，就是MOS的S端。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rYrryVmQ3XLYibaSWMECPuPG9icpuz3xRp1Q9icwWibW9uBibW7GxiatQZKeQ/640?wx_fmt=jpeg)

■低端驱动，电路往往比较简单，除了驱动能力之外，还是需要注意一些细节。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rKoOaI1Q04cFktQV2M4nb6VqTGIKnTRUfuaicf9uPJAmSB9PwpRT419A/640?wx_fmt=png)

■MOSFET的高端（High Side)驱动

■很多情况下，MOSFET的S极并不是IC的参考地，比如BUCK开关管，桥式电路的上管……

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWoRyibR2cHwHfIystuW57tLPBibKQMsaduYo6Ud8She0tfjNFCLXnibIIg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWNC1h8S8LQiaZlLMH2Mib4SfVy7ZD8plecNWJsEuIldlYMIrfWWtTsrtg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■自举驱动，利用自举电路，自动抬升供电电压。自举的驱动芯片种类很多，但是需要注意其耐压。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rVruXSc73qwbNcXjqGF3cCYHUiaGgibiaEQQTatjViaqQYwY8vZ8TaibB7xA/640?wx_fmt=jpeg)

■对于二极管整流的buck，自举驱动需要注意的问题。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rP9Vbucu8sWg72DUoibp8rITVroj0XapdtRiaicVbjbhibOkokk91EiafvHw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rhibF5Py93cX4rwcLoH0WDeA9vLwL0fvJ9V2IdythekuGjZibMt9Mbqng/640?wx_fmt=jpeg)

■利用变压器隔离驱动：

■对于浮地的MOS，或者和IC隔离的MOS，通常可以采用变压器隔离驱动

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rWUzywPb2hjk1dGWYDOe2jWhiad9ibIVL2luicZep1GRIhazYpR3p3tllg/640?wx_fmt=png)

■变压器隔离驱动的关键：

■变压器隔离驱动关键考虑的问题，就是变压器的复位，比较常用是利用隔直电容来复位，但是需要注意的是，采用隔直电容之后，有可能变压器传递的电压幅度和占空比有关。需要考虑变压器的变比。

■对于跨初次级的驱动变压器，还需要考虑其耐压的问题。

■利用简单倍压电路来抬升驱动电压。

■下图的驱动电路，可以传递大占空比的驱动信号，而且可以让驱动电压不下降。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rFfBZHrzWaPH23337NLxYqVsicCv5qZtbe8EP5ibreYKFMFNjgBSl14ew/640?wx_fmt=jpeg)

■隔直电容带来的问题：

■由于隔直电容会储存能量，所以在驱动消失之后，隔直电容会和变压器产生谐振，导致驱动电路传递错误的驱动信号。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3r2vI4BibLU2eq3xx79fZ55oNyOD0MbzkV7uB5Gmibia3vf9NC1unPRbIdw/640?wx_fmt=png)

■为了降低这个问题的影响。可以利用这些电阻来阻尼这个震荡。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWX59AEgBeRPLmljwcWecyGPdsVUAK10XF1hoJaeHeGtibqrveUQ1zbhw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

■对具有隔直电容的驱动电路，有些IC会植入soft stop的功能：在关机时候，让驱动的占空比逐渐降低到0.

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLWZk7zI0esw2f5jMh8qDROibCzFibpZYWINbDHRjfU1iaQ4Z99MPYjQBe5g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■为了避免这个隔直电容带来的问题，可以采用无电容的变压器驱动电路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rstUrrKHfVhawKkdtLqv6Qa2ZqtUZUeehJQeicT7Tibx6QdeqeGBfWN2w/640?wx_fmt=png)

■如果用IC直接驱动变压器，那么需要注意：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rxGaBKWVlmE1JvjOCqjMicDopNJaPkibPRTHPS2iaYYYib3dIjbtAMb4OqQ/640?wx_fmt=png)

■同步整流驱动，需要注意逻辑的问题

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rXiboIkJylg5t14OkwooFJ9ticbbxiaDjUNWR3RDBs7DbmibgtNvegyOw7A/640?wx_fmt=png)

■同步整流2个管子的驱动关系为互补，但是当主管长时间关断的时候，整流管就会出现长时间导通的情况。

■所以在关机的时候，不能简单的把主管驱动信号置低，而要同时把整流管的驱动信号也置低。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmfFrRnBkDs3mZ9wVYibVWcLW4wQ84m86PqptXxPdbLCSKNFzLExWx36cjicrNwhROSKcia6bFgMVsYRg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

■MOS的并联驱动，并联驱动要尽量保证每个管子的驱动线对称。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhXicYEEic8G9IRILAB2nGJ3rzQZb5LrJDDZQCicNaJfmEb0uxvZIAgMkHBnTmFEjxKkpllgsylHfR6w/640?wx_fmt=png)

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