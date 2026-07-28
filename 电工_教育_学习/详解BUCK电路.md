# 详解BUCK电路

原创 硬件笔记本 2023-05-23 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6s-m8PtBNcLZr\_ZTymqGpA](https://mp.weixin.qq.com/s/6s-m8PtBNcLZr_ZTymqGpA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

文章来源：硬件十万个为什么

**一、Buck电路原理图**

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqTMlrWlAjgDIicBYmT5wNrwK0AibRlibu6QK3ic2WOgjztBAfLHicMIYiaqiaQ/640?wx_fmt=png&wxfrom=13&tp=wxpic)

Buck电路，又称降压电路，其基本特征是DC-DC转换电路，输出电压低于输入电压。输入电流为脉动的，输出电流为连续的。

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqbps4ayn6rhtlyKGAS3eoA4bXGK2mMPdxRaN2LYLuxbzeBKKKZ6UZPg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqacL2yKibxToIyfoOt8w6KjAIZshYwEExIP7shfmYHTaMsnIy4Vy8lug/640?wx_fmt=png&wxfrom=13&tp=wxpic)

  

**二、Buck电路工作原理**

1、基本工作原理分析

当开关管Q1驱动为高电平时，开关管导通，储能电感L1被充磁，流经电感的电流线性增加，同时给电容C1充电，给负载R1提供能量。等效电路如图二

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqW2aB6Eko1Y3iavUHDFxVqEt40FcwUibUTDunZIQdjb7EWpWJicLtwDuYA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当开关管Q1驱动为低电平时，开关管关断，储能电感L1通过续流二极管放电，电感电流线性减少，输出电压靠输出滤波电容C1放电以及减小的电感电流维持，等效电路如图三

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqUc0RUW6oXtibUPxReN9ibBabxeic8D0CQTaW3AGsuQcthQGqndYqrWrmQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**三、Buck电路的三种工作模式：CCM，BCM，DCM**

1、CCM (ContinuousConduction Mode),连续导通模式：在一个开关周期内，电感电流从不会到0。或者说电感从不“复位”，意味着在开关周期内电感磁通从不回到0，功率管闭合时，线圈中还有电流流过。

2、DCM，(Discontinuous Conduction Mode)非连续导通模式：在开关周期内，电感电流总会会到0，意味着电感被适当地“复位”，即功率开关闭合时，电感电流为零。

3、BCM（Boundary Conduction Mode），边界或边界线导通模式：控制器监控电感电流，一旦检测到电流等于0，功率开关立即闭合。控制器总是等电感电流“复位”来激活开关。如果电感值电流高，而截至斜坡相当平，则开关周期延长，因此，BCM变化器是可变频率系统。BCM变换器可以称为临界导通模式或CRM（Critical Conduction Mode）。

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqBAvWpGs1ryoUsgVqvNM0ic5u2DcF3aLLjcqGG9qYKrbQRvfLy8BegmQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpq1maPVHxILoLQHG40pwwRl1TUB0rbZ8XItxqDrGXbDr5XlMXibbt4nCw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

BCM

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqHuf6nv0ChoXgdAnb5AiaxANCMm0neFvXfIbjcearFv2ZqQIKYXnDDBA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqKUTGIEnou8bHIOdt4hwibV3GCxwx4K7ibPnjo4US0MgSdbrjpI2PVRNQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqyskVNpJQs2Pibp9P6NuWbwM0hYdic76EovFU99XdNFI4zjVF34cqibMhg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqAvDTOPtR3T0rEVcDKfiaAbu6HpZu884jobsFicnLmibdg8ucDzNfQmXZA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

1、CCM Mode：关键点波形

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqiaOmSnmbibFk5T1iaAP1QQ1Wf2dG7JicKibsy9MuXMCOxbJib60xV6JAUPibg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqic86l9NqMPBfAvR0iaxnJqBfnqHIqmDfPVIs0KfmS8T32U2ACSTnXIsw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

负载电流IO与电感电流的关系，在一个周期内进行分析，负载电流即为在一个周期内电流的平均值。电流的平均值在数学上的表达式为：

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqZFBHVDpkxE6J3VpIryH9HFHu2wkaoug2RPhu3NqvnuICPOiaiaxhmEHA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

即在一个周期内电流函数曲线与时间轴所围成的面积除以周期，为电流的平均值。参照图四电感电流波形，一个周期内面积为

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqUdngVzqJzEf1S23zprt5NJ8M7Aoy4rGDAOHtMovpoBcJ3CQ1V6T9dw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

BCM  Mode：关键点波形

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqS9aoOHabxjJUk8BJaTN46VKy42M2yziadlPq1mAhR5azzP9rbt2Wticg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

可以得知电感最小电流逐渐减小到零时，工作模式也逐渐从CCM进入BCM。根据伏秒积平衡 ：

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqomJAv7EnHx8TCyHReHMKYM928zHJWfJ9NnOnynAuHfgNkCD9fM7icjA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

DCM  Mode：关键点波形

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqfgNVJpD4iahkfYIBLCcEU0HqXb7rWqKv8wN7b3hxicuFE5m70DuO0NVA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

电路系统工作在DCM模式下，需要满足两个条件，一、电感充磁开始以及消磁结束时流经电感的电流为零；二、电感消磁时间小于开关管关断时间。根据伏秒积平衡有：

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqwheGFUGByicDe5axdEZr9CUgODWRS2REibmGoRJvGcaOW8VXVcaPwSTQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

同样，在一个周期对电感电流进行分析：

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqib5WDlPv8dpb7JAsqPk9WrzibtBW8cIGZgcAygryjeOmp7AIiabujpDNg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**四、外围器件参数对系统工作模式的影响**

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqwc6WrCblicYL5xISx2eIib41azqr2jcbSoiatllMSkG1Hlut3iaJrS0WNQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqhW7Z2LOBu0qFyTFlV0ZibegEAzCboMcycb7NCnnkXAnGRRXdSiazalcQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**五、BUCK电路仿真验证**

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqyMgZK4z3sQLiaMib7J1FibYD8iaCbmowjbrtfzHJJ5ZkLnod19qPYzbQicg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqib0lSjyoCEGHIzYSjWTKIjcQkTRm0LvldwK9B6NkEnia4mBU1Huc9Q5w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqPfLfFcRU64OImrOtgLt5Ux6V5oqfiaaouEMAPQicDzozxnPYZDdwlicsQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

2、CCM模式仿真验证：在上述BCM分析的基础上，得出储能电感的电感量80uH为临界点，由系统工作在CCM的条件，可以将储能电感电感量设置为120uH,理论计算：

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqMNooYpibq2r2FmZBpBcDLT7NiaN1w8ssWGeQFK9XhB49OBvvvpX9SpVA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

参照图九，可以得出仿真结果，

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqr5TF7I7AcaO41WXFqHQbYfMx4hj3NU30crP8GZaicptxVAvQCOwDK0A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqVoHeicvMUuHJnrqYIwJdc4BC7zvuglxkP6vITm0zUjdMTo8mbydsYNA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqMKrIc8X7Szlon44EsmQ6YZFQb7DOmdkUBUY6QkVg4Ur9XFW5A9fDAw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHOqPOp6bhsZibiajDic75vcIpqVkdzV3I4sKcWnS96guZJcvCtibpezAY4rFQKwN6IbtPC3kSgvpYA6FA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。