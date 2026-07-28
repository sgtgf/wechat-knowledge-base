# Flyback原理分析（含电路图、波形、计算、PCB布局）

原创 硬件笔记本 2023-04-29 18:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/GjsbWDoy-3asvGisooiU1g](https://mp.weixin.qq.com/s/GjsbWDoy-3asvGisooiU1g)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

1、Flyback变换器工作模态分析；

2、Flyback关键波形分析；

3、RCD吸收电路设计及开关管应力；

4、从噪音回路看布线要点。

5、基于实际项目，原创反激开关电源视频教程曝光

  

  

  

  

**Flyback 变换器模态分析**

  

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOt7tMGy247qicnmhWGonZ18zcfwGQdFNWib4XYdSB4z01jERkxN3cO9SJw/640?wx_fmt=jpeg)

ON：开关管导通，变压器原边充电，二极管关断，负载由输出滤波电容供电。

OFF：开关管关断，二极管导通，变压器储存能量通过二极管向负载侧传送。

基本输入输出关系：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo723Hm7mPWMIlNVLibrC04sv77jtmWFyF163TQfr2ibWaSvoYmJTW5ibbNA/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

  

**理想情况下开关波形**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtrzux5Alw9BaJyL9TFGlBdBQYDXguEmJPlgNR9oJQZoM6o7k5QsoP9g/640?wx_fmt=jpeg)

  

  

  

**Flyback 变换器关键波形分析**

  

  

  

  

**DCM工作模式下MOS DS电压波形分析**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtHbv024BI9b3YJDsL2Xg0r6ibXNIN0ay1zALubq39eLblQYT0fw3brJQ/640?wx_fmt=jpeg)

**CCM工作模式下MOS DS电压波形分析**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOt56OIeVRf4UVBYpFRylrZbxyRwLOhmiaia9DcUYvxa5ucoUeTTUW8TJog/640?wx_fmt=jpeg)

**CCM工作模式下MOS DS电压波形分析**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtr2wromSUJsQPBk1ibHuCT7bnbyaDo4lAe21nnGppKyibdOA6DYFdfY8A/640?wx_fmt=jpeg)

**开关管上电流尖峰的波形分析**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOt0XSRKLsAg4sibHkHibEItGlCwxq1StNaTBAsOicbezU88Fgbicqdxou0GA/640?wx_fmt=jpeg)

**开关管上电流尖峰的波形分析（一）**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOt6Ixbpbf0j2HaEnNzbtPJ5OeebDI2Tia7FdNFXubqPPFoDnAYia2R3LdQ/640?wx_fmt=jpeg)

开关管关断后，变压器副边为输出电压Vo钳位，此时寄生电容Cp两端的电压为nVo,方向是上负下正；当开关管导通时，Cp电容放电，此时Cp与线路寄生电感及输入电压构成谐振回路，从而形成该尖峰电流（谐振电流）。

  

**开关管上电流尖峰的波形分析（二）**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtYice0aE2iaWk3xzufWR4uiaKOErcAnkBpeOwA4PderOxcWJ5WsRXbSKeg/640?wx_fmt=jpeg)

**开关管上电流尖峰的波形分析（三）**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOt1apialnBBtgO7LPiczu8wky63xFgicZlQdGaFSnia8aGSFZJvGq1TxILEA/640?wx_fmt=jpeg)

  

  

  

**RCD无源吸收电路的设计**

  

  

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtPJcWeibA2UQQQibw6ia60vWFiac8hYVn34LRFqrqDwcUry5RKKRxop77HQ/640?wx_fmt=jpeg)

  

  

  

**开关器件的应力分析**

  

  

  

  

**主开关管S1电压应力：**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7dnP4IgK3ZPyMBNWKNnJQgeBlaBXZ5pAicDH6tniaq9KR0Vetq9FYHibFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**整流二极管D1电压应力：**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo72tXgNfFXXcJUUdZGzB9ecCCcgklFMiaYXj8NUicFcHylBtF2Y8so03Rg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

  

  

  

**Flyback噪音回路及布板要求**

  

  

  

常见的反激式（Flyback）变换器拓扑  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtcoHU8JIhNuibeeUBUxYdUoVibib55BYSw2DqVLjTeuz6DcRKoJNdyySZw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtuCtEWeoic5lYkMiaSMKk2pSv9NB9yJOVYzLh8MblqKJvT11g5uLibvu0g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtLRY4ibJo6ZFUSFq4LtWWMalpUdPicVgiccXqyelSXvFicuIAJIRtSUmC6g/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOthycSFmYZreVPTwQ0aBnIhxGeIiaZvvF8g16LunjUv4pWyuom0dsA4LQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtsC0MtauGqTQaQEKAiacXEU5fmOMVEqpArQ7wEibApIamPLyrvW1EXurQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtIGOgKAR57caSPLj4Vry7Y8Ux3DnUmW1OXGxZlMPl7uQCVHnxslg9icA/640?wx_fmt=jpeg)

**反激是变换器中的噪声**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtjziaJOfXTTWrqYOQUxUJjcUSeiarB9GvOZbia4hpqTzibDlYYsnUB8NPtA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo70mNoQIWwQJJ74TvZmwmLeicQc8v67phRKy5sBMt8zPJEYuqAfzsibyiaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**单点接地，避免回路间耦合**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtnfJuReLtdRKAJfjOVzamL080QtQ51vxcxDe3ufhuC7BImKBibkJmibJg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7JZxW1vjvgfhz6icWcvtTERN7e1rVxwU7haXspLVibrSVZCMz7ia1BvXvA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**利用高频电容，减少回路面积**  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtqIDqAvbV9HblaOcNzLbficMLOHG1iczmZjfX2kaoBjH7me74wAaKrmQw/640?wx_fmt=png)

**通过布线，进一步减少高频噪声**  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOtfvGSRSP7mxep4MEDzK1bpea42bPIq1icNulHY9VPbnJbibKdzxXyFODQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiagfoVyA049Apsu8kHlJwOte2kWDdnH9EjXrQb5qYXTyBX1cZWDb8u05LPj5IlyG1V7q46FYoJ5nw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7xickvLwgz289M6K3feAe9eEc1lHVy41ldN4AEK2oicpArwIZAp1ibtrZQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**通过布线，进一步减少接地阻抗**

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7Yf2ydKxk4FgqoDHlibgUNS2IKI56d7SI6TPUgguO8TLl2fdicGI0DTUQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7bQhFOn8WdjoS4DKibhstdic3ZcriaWk3vHmZCXEN6mGehCeE0uFWZiaT5Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo79a06S8S1IOGBGPkdASYq7aFoSKEGIUb6a2yI4O5YzicKNV8L4CvUe8g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7pVVQxVOAicn6AGufzGFUNd4l4W0Vlu6uNRrjWn25kWjKFl4bZA6t4lw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7LDAORPiakPVqWia9QO63vVMtd3XH40vkyr4AY8IADicPTicRywibvyicbn7g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmdjjDb9ic3Qiakj3oQNZIkqo7wLa24yaSHVunWbDwiaVOMWCvaz3ndP0ibibwcfTgrv0kuSicV4WSIpK9Hw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。