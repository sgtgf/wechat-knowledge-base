# NTC测温电路的精度和分辨率的深入分析

原创 硬件笔记本 2023-02-13 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/hWZX-ni00goPALYLYsBUUA](https://mp.weixin.qq.com/s/hWZX-ni00goPALYLYsBUUA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

之前设计过一个产品，采用NTC以及PIC单片机做环境检测。

**NTC测温电路如图**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02EDorAxJXaxKFFpocB0VxTlkywbicNx0Pr0JJxTWfP2LtgUjcP58J7Hw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

NTC测温电路

温度检测回路采用分压电路，由于热敏电阻TR1常温时（25℃）阻值为10K，所以R44取10K的精密电阻。

  

负温度系数电阻的性能参数在来料检验时针对关键参数做了详细的测试，如下表：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02suKJkWicoNjF9QOyicXUEdoVFKvn6CEEUDzGiaX3QM70bnHmymV61r3iaQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

样品检验数据

**可采用查表的方式进行温度检测。**

热敏电阻TR1的阻值计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02Qiaxv20H6b6Z2uP0bGkIInB5SMw9MncbjaEwz25ZO8VQMxPiahG0M5pQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

热敏电阻阻值计算公式

TR1的阻值与温度关系曲线如下图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02kbesEK97wYGIRfP1ax9FcQhdUFugEETiatoZ3BV0ItbFKXcKh6yEr0Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

热敏电阻的阻值与温度关系曲线图

当温度为-45+273=228K时，

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr021kqQIaXZqcCjTX3JnHYDSLcthXa9YyKrPZw9OC3XosXkdicMjJZvibkA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为-45度时的阻值

当温度85+273=358K时，

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02mPeV0VZvnww9ryR0hAw82Y5Y6NVIePPIKVKM3DzR22gQANibgFbrPLg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为85度时的阻值

由于A/D VAD电压为，

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02n1383kVaIFIs5wKI3euZPXDDzKX7ttw7upp4iazZk3ibIcnwRAxkhLnA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

TR1两端电压表达式

由于MCU自带的A/D为10bit，所以A/D值为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02nVLfE9ibsibn0RToxjUibX39iaGwVxj1BLDmhVqNXFlu2kdsT7ApKpH5vg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

A/D转换值

A/D值曲线如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr022UXdg9IPicJofA41quY7PWkHnpPWnFQRybYB8mT9u30XibRVCVZ00wJg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

A/D转值与温度的关系曲线

**由上图可知，在高温及低温区，此电路的分辨率将降低。**

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02JqdwduOWE0jPQf44zFY2KmGj9IAm5dNrROv8M6oNHMrjB8UPUeUC3g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

分辨率计算公式

当温度为-45℃时，ΔCAD=1对应的ΔT为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02GlYQaQuMS1Z3t61z79QjqbxYTZvXrlJ6eVHicIhibjbyeRALHHJ7MkjQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为-45度时的分辨率

当温度为-45℃时，电路分辨率为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02yPTuM8KY2ibpgIicSDg8BjlJG428bWodOWh0Q47Rrnicswrwv3HMqX02g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为-45度时的分辨率

当温度为85℃时，ΔCAD=1对应的ΔT为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02tZ0bcphxiaee9b8YaX39kZ9X3oLFP0cPoetfKQkh6w3bHH9xKj5JdGQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为85度时的分辨率

当温度为85℃时，电路分辨率为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02u7bWmhErgu2gMeQVSjuRbehecUvMsicTZ8Tv2eF4S2ozuVibBsYHUyrw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为85度时的分辨率

当温度为25℃时，ΔCAD=1对应的ΔT为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02Q2F2q9NQAiaQuyrYXvVasGN8icucLY4tIqRwUicgh8Z1f1613hJbxyb5w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为25度时的分辨率

当温度为25℃时，电路分辨率为：

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02k1W13w6whAibkB0DTDL7qJwC562fFnVrLpuX9hpKjYMfKHQibibLvjdgA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

温度为25度时的分辨率

α越低，分辨率越高。

当温度在高温区时，用此电路测试温度是T，那么实际温度应该是T±0.326℃

当温度在低温区时，用此电路测试温度是T，那么实际温度应该是T±0.519℃

当温度在常温区时，用此电路测试温度是T，那么实际温度应该是T±0.051℃

考虑温度、初始及老化公差， R44精度选为2%，R0精度选为2%。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr02UTWHxTMRZJAB5S0XheL7kHLGu04QpS13JwtiaaOY8CEr9HTeuzRhUZw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

测温精度计算

当温度为-45℃时，

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr028z63ywWA1iaftuEaNbObhjwqfm2RososWmaUwa9wVH9oZHgb6e5IqHg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

\-45度时的精度

**综合考虑电路分辨率及A/D值公差，在低温区时，测得温度如果为T，那么实际温度应该是T±1.15℃。**

当温度为85℃时，

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr025hzRRwIbEP6ib4Lqc4DCl8Y8EXFeZFARlG30r86jFic7kgzH3Opt19XA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

85度时的精度

**综合考虑电路分辨率及A/D值公差，在高温区时，测得温度如果为T，那么实际温度应该是T±0.794℃。**

当温度为25℃，

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FM0r0loexfTMmGKfkR8pr029OhaHRQylSmgPpWdjp7cQbEq6kSOicjibjm7d0rtWpOhKute7YZWxK1Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

25度时的精度

**综合考虑电路分辨率及A/D值公差，在常温区时，测得温度如果为T，那么实际温度应该是T±0.527℃。**

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。