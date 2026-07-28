# LED驱动电源电路详解

原创 硬件笔记本 2022-11-29 07:28 四川

> 原文地址: [https://mp.weixin.qq.com/s/cfp\_OpY6OzTrGLSgZZkjcQ](https://mp.weixin.qq.com/s/cfp_OpY6OzTrGLSgZZkjcQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

  

LED电源有很多种类，各类电源的质量、价格差异非常大，这也是影响产品质量及价格的重要因素之一。LED驱动电源通常可以分为三大类，一是开关恒流源，二是线性IC电源，三是阻容降压电源。

  

  

**0****1**

**开关恒流源**

  

采用变压器将高压变为低压，并进行整流滤波，以便输出稳定的低压直流电。开关恒流源又分隔离式电源和非隔离式电源，隔离是指输出高低电压隔离，安全性非常高，所以对外壳绝缘性要求不高。非隔离安全性稍差，但成本也相对低，传统节能灯就是采用非隔离电源，采用绝缘塑料外壳防护。开关电源的安全性相对较高(一般是输出低压)，性能稳定，缺点是电路复杂、价格较高。开关电源技术成熟，性能稳定，是目前LED照明的主流电源。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlESq0aW8ys7TicVNCSyDicmNJnNELW8xVdogoTIYib3Xhcibwiaonv5Goiaxnw/640?wx_fmt=jpeg)

图1：开关恒流隔离式日光灯管电源

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlEx45HUtenaToFfYjUc527pMzibwF8ibTvuSKYLdWRuUicNma4As5ERwchg/640?wx_fmt=jpeg)

图2：开关恒流隔离电源原理图

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlEKErsPvLoA5fgibdthcCM5u85LMf6IZTG5xK4BABW5uJqngIja2U7j1Q/640?wx_fmt=jpeg)

图3：开关恒流源电源

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlEUTRFxwLnI9KTQywQeOO7Sun2vicQ31kDn2momCWMymbw3tMAWxd9MXA/640?wx_fmt=jpeg)

图4：开关恒流非隔离电源原理图

  

  

  

**0****2**

**线性IC电源**

  

采用一个IC或多个IC来分配电压，电子元器件种类少，功率因数、电源效率非常高，不需要电解电容，寿命长，成本低。缺点是输出高压非隔离，有频闪，要求外壳做好防触电隔离保护。市面上宣称无(去)电解电容，超长寿命的，均是采用线性IC电源。IC驱电源具有高可靠性，高效率低成本优势，是未来理想的LED驱动电源。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlEfeVTba0LMBFxxicW6wibcT0ffvibAEjIhUpchSyoYdjegl0yzqWhuwibWg/640?wx_fmt=jpeg)

图5：线性IC电源

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlEhIQPD0eIRLicNcvZHsBDMPYZalOWPyKwJvx6A3qR7hBicliaFhFlEeHcA/640?wx_fmt=jpeg)

图6：线性IC电源原理图

  

  

**0****3**

**阻容降压电源**

  

采用一个电容通过其充放电来提供驱动电流，电路简单，成本低，但性能差，稳定性差，在电网电压波动时及容易烧坏LED，同时输出高压非隔离，要求绝缘防护外壳。功率因数低，寿命短，一般只适于经济型小功率产品(5W以内)。功率高的产品，输出电流大，电容不能提供大电流，否则容易烧坏，另外国家对高功率灯具的功率因数有要求，即7W以上的功率因数要求大于0.7，但是阻容降压电源远远达不到(一般在0.2-0.3之间)，所以高功率产品不宜采用阻容降压电源。市场上，要求不高的低端型的产品，几乎全部是采用阻容降压电源，另外，一些高功率的便宜的低端产品，也是采用阻容降压电源。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlEXmnkgarnVibYMBDOfje5r6yYicPIaNLEJrMotzq1KX53qy1wzITdMFkA/640?wx_fmt=jpeg)

图7：阻容降压电源

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmdX8ckvA95Oo29XdZ5tkDlELOR0kKyWKkIibicv437c6FDvSUzKf4m8cmhbgxa0G5g8zePyYdPRY5JA/640?wx_fmt=jpeg)

图8：阻容降压电源原理图

  

  

  

**0****4**

**电源成本性能比较**

  

以3W小球泡和16W日光灯管为例，各种电源成本比较：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgyA3y8qRbs7DIE286GUsd08HHbRPMex770Gjgok8gZNcibRErLN9eST6zNOcCbmFuaJhILE7FSvjQ/640?wx_fmt=png)

可见，不同类别的电源，其成本差异是非常大的，其中过认证的开关隔离源最贵，阻容降压电源最便宜。

  

各类电源性能之比较：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgyA3y8qRbs7DIE286GUsd0RwY4FNYI5NibPGv06l9nneMMdphKEbgflU853d6uMO3Oceibz5suq8QQ/640?wx_fmt=png)

在中高端市场，开关恒流非隔离电源仍是市场的主流电源，厂家一般会在结构设计上进行防高压隔离。而在低端市场，大部份厂家是采用阻容降压电源，也有部分厂家采用线性IC电源(要求厂家有一定的设计能力)。

  

采用不同的电源，产品的性能及价格是不一样的，我们应该根据不同的市场选用不同的产品。

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。