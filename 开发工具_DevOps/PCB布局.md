# PCB布局

原创 硬件笔记本 2024-06-24 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/BMeUJ4YLakMjO7BViSwdUg](https://mp.weixin.qq.com/s/BMeUJ4YLakMjO7BViSwdUg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

分析好整个电路原理以后，就可以开始对整个电路进行布局布线，下面，给大家介绍一下布局的思路和原则。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqDQvDHe79KZ5khZFicjcQo7m3mGHibWEBtsXFGDglIwibmkCicqvcZPRAicQ/640?wx_fmt=jpeg&from=appmsg)

**1.**首先，我们会对结构有要求的器件进行摆放，摆放的时候根据导入的结构，连接器得注意1脚的摆放位置。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqdccIxKlwsQtSEwEzjNSKc38eVHvwib4hOhw66Upp2mJmeGxxQT9fpoA/640?wx_fmt=jpeg&from=appmsg)

**2.**布局时要注意结构中的限高要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqXWNxYWXnvz7m9Ql8ICRwiaHKyl75thibroAthdbD0j1TxSMH8Wb7DRLg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqGXe7ChAibnpZpVMWvy6oI5QuMOTNz0I0Uy8LHAo47ueuC6BbD2oGH8A/640?wx_fmt=jpeg&from=appmsg)

**3.**如果要布局美观，一般按元件外框或者中线坐标来定位(居中对齐)。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqicSzjNpasBoicML2ohy9nszdicvMB8SOWIbduj4VJD0jAccaqst3iaibs2w/640?wx_fmt=jpeg&from=appmsg)

**4.**整体布局要考虑散热。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqA5nky5bo9G1Vd2ejWLt1zrNnCbES7ZvNeDtFN6BNrOBbqnRhUnPg8Q/640?wx_fmt=jpeg&from=appmsg)

**5.**布局的时候需要考虑好布线通道评估、考虑好等长需要的空间。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqKdxztOuvtYjHzFGcpmPPBP2gpZJyVeCJ2xT0E9W40wxUWnHibHrVpxw/640?wx_fmt=jpeg&from=appmsg)

**6.**布局时需要考虑好电源流向，评估好电源通道。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqlUhlmTm7FZhUCjZJljpBgxZ96GCibvOhyZFTcx0GJibapHkLO1DzS6PQ/640?wx_fmt=jpeg&from=appmsg)

**7.**高速、中速、低速电路要分开。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7Eqh7BofUlNy6gI9vSC3hibVrLW5WiaM08NrBLaQbusYRTJUlQ4aETYOSkw/640?wx_fmt=jpeg&from=appmsg)

**8.**强电流、高电压、强辐射元器件远离弱电流、低电压、敏感元器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7Eqbibb63mbtcEL7WIU38dibic0uA7KlZNhjyIc8kwP5ic4qzMfBcVjQko6Cg/640?wx_fmt=jpeg&from=appmsg)

**9.**模拟、数字、电源、保护电路要分开。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7Eq4RNuxHZdAXDdkgAPKOtIT2rPnz0YUHVV0QGe8tY3R20S1LH3xet0icA/640?wx_fmt=jpeg&from=appmsg)

**10.**接口保护器件应尽量靠近接口放置。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EquibTOj4jXbx2iaugqdyQ820EEdVvLJ8poerUa7YxBwQWXxomicEicS8zug/640?wx_fmt=jpeg&from=appmsg)

**11.**接口保护器件摆放顺序要求：

-   一般电源防雷保护器件的顺序是：压敏电阻、保险丝、抑制二极管、EMI滤波器、电感或者共模电感，对于原理图 缺失上面任意器件顺延布局。
    
-   一般对接口信号的保护器件的顺序是：ESD(TVS管)、隔离变压器、共模电感、电容、电阻，对于原理图缺失上面任意器件顺延布局，严格按照原理图的顺序(要有判断原理图是否正确的能力)进行“一字型”布局。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqLMHUiaicicGFFPxg5RIxH2HAhh2GcdgAK8uCkAGKdLR8N8eZ0iaE91sFmw/640?wx_fmt=jpeg&from=appmsg)

**12.**电平变换芯片(如RS232)靠近连接器(如串口)放置。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqYcGRPzAHFbZWIPKs6luCT4C3C0KCJ9Lk6Cb2vHCQLQj9ibcxhnYWLYQ/640?wx_fmt=jpeg&from=appmsg)

**13.**易受ESD干扰的器件，如NMOS及CMOS等器件，尽量远离易受ESD干扰的区域(如单板的边缘区域)。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7Eq61jib6oQ6j6oRxyASyNibIvG9y6Jrbicz8JReU7o6JVSSKCw6x0kicz2zw/640?wx_fmt=jpeg&from=appmsg)

**14.**时钟器件布局：

-   晶体、晶振和时钟分配器与相关的IC器件要尽量靠近;
    
-   时钟电路的滤波器(尽量采用“∏”型滤波)要靠近时钟 电路的电源输入管脚;
    
-   晶振和时钟分配器的输出是否串接一个22欧姆的电阻;
    
-   时钟分配器没用的输出管脚是否通过电阻接地;
    
-   晶体、晶振和时钟分配器的布局要注意远离大功率的元器件、散热器等发热的器件;
    
-   晶振距离板边和接口器件是否大于1inch。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqeMGuGGC9uZtfzMmMT5m1wvLbAnFNtvYrgpR6YzxHqdT7YibicJO7R1uw/640?wx_fmt=jpeg&from=appmsg)

**15.**开关电源是否远离AD\\DA转换器、模拟器件、敏感器件、时钟器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqA0xm1AiaSn6XY7vd1vzNrAUkbjXfRX7oWZqNibH8kDgH5Vic5zLkCFiabA/640?wx_fmt=jpeg&from=appmsg)

**16.**开关电源布局要紧凑，输入\\输出要分开，严格按照原理图的要求进行布局，不要将开关电源的电容随意放置。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqLYlhY4PP65FukhGvNJcoaMOXCEnNjaYnaSVJ215icweRTHktqWqouDg/640?wx_fmt=jpeg&from=appmsg)

**17.**电容和滤波器件 ：

-   电容务必要靠近电源管脚放置，而且容值越小的电容要越靠近电源管脚;
    
-   EMI滤波器要靠近芯片电源的输入口;
    
-   原则上每个电源管脚一个0.1uf的小电容、一个集成电路一个或多个10uf大电容，可以根据具体情况进行增减。
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaWhlDFt5NBerco3lnvJ7EqevzOFfU4ceDAlBNVmS2BGK2VHS2Z6iaz9Ep4KTbk1hLcFMGwmibuhXGg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。