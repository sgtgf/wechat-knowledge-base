# 搞定ADC！除了个人经验，原厂资料是真香

原创 王工 硬件笔记本 2025-06-24 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/PkAMW8JcUvM9Hj14ANmDIA](https://mp.weixin.qq.com/s/PkAMW8JcUvM9Hj14ANmDIA)

**![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")**

**大家好**，我是王工。****

****咱们做硬件的谁还没被ADC坑过几回？采样数据跳来跳去、噪声大的要命、基准电压飘得离谱...今天咱们就来唠唠ADC那些事儿，让你少走弯路！****

****本次，咱们先上硬货！全是实打实的干货！建议先麻溜儿下载下来存着，有空慢慢啃。获取方式特简单，点击如下文字就可以进入下载界面。****

****MPS官方ADC课程，400+超高清PDF免费获取****

****如下是一些经验分享****

011

ADC选型必看参数，一个都不能少！

  

****1****、量程要对得上

单端输入虽然简单，信号源的一端连接到ADC的输入引脚，另一端接地，但容易受到噪声和外界的干扰。要做高精度应用（比如医疗，BMS），必须上差分输入。

电压输入范围一定要匹配，别让传感器输出超出ADC量程，否则会引起信号波形被削顶产生失真，或者导致ADC内部电路性能退化，增加噪声，降低可靠性，甚至击穿电路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeDfDcodo47wPqfQWgbzulreS9KU7nOhALQjuJATXwpKLVPukYTgMNF0g/640?wx_fmt=png&from=appmsg)

  

2、采样率不是越高越好

记住奈奎斯特定律（采样率≥2倍信号频率），但实际至少要2.5-4倍更合适一些。

在高速信号(比如视频处理)，Pipeline ADC是一个很好的选择，采样率可以达到10MPSPS到3GSPS。低速高精度（比如电子秤）认准Σ-Δ ADC准没错。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeD58KCWAS4Ux0Iibv321D3rG56XUt951JfsT1JlDx6icibUd02PLZZPwMLg/640?wx_fmt=png&from=appmsg)

  

3、分辨率很关键

分辨率指的是ADC芯片在量化时的指标。分辨率越高，量化就越精细，更能接近真实的模拟值。比如我们常说的8位，10位和12位ADC。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeDiaB7Dn3zdPmNFLohFxmFNcXvVETcpbmpybVL1Mh9m6cJicJaextDMSiaw/640?wx_fmt=png&from=appmsg)

  

4、通道数和接口类型要合适

这个就比较好理解了，项目中需要采集多少路信号，就需要选择对应通道数的ADC。

接口类型最为常见的就是SPI和I2C，也有并口的，但是占用资源太多，咱一般不会优先选择，SPI在速率上更有优势。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeDJyTxu6Lp2hWSPUtCQNOI3jiay9HcAeMWue47ia8RepOuzpbmpuWnOFKw/640?wx_fmt=png&from=appmsg)

  

021

ADC采样不准，有哪些可能的因素？

  

1、基准电压要稳如老狗

基准电压飘1%，你的ADC数据就会产生等比例误差，所以电压稳定性特别重要。我们可以使用外部基准源（成本灵敏可以选TL431），基准脚记得加滤波（0.1μF+10μF安排上）  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeDGhpWLz02biblG8WNg2zF5uNKCqIOy2SJQ7iacYQrsLDX2ib3aqhpAx4yA/640?wx_fmt=png&from=appmsg)

  

2、PCB布局是门玄学

数字信号和模拟信号放一起？等着收噪声大礼包吧！记住三字真言：地要分开（模拟/数字地单点连接）， 线要短（模拟走线能多短就多短），远离干扰源（高频信号走远点） 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeD26GcoDslibmuq611KPILPBNc2exd0R4YXpTQItCUxqNqy8Zc6wtLNJA/640?wx_fmt=png&from=appmsg)

  

3、采样时间不足

ADC采样需要时间对内部电容充电，若采样时间太短，电容没有充满电，就会导致电压不稳。可以通过配置延长采样周期，也可外部加个缓冲电路，调大采样时间来解决。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjelLWn9ewgBSGicr1r8IMeDbLEsAvNYOK4V1CiaBd7Zu9iaGNnLdiahbwD8nP86yskBTzicrmOqNTZCmA/640?wx_fmt=png&from=appmsg)

  

4、环境干扰太嚣张

如果外部环境有感性器件，干扰大，可能会耦合到模拟信号上。我们在PCB布局时要考虑远离干扰器件，使用RC滤波+屏蔽线，让干扰滚蛋。

  

031

学习秘籍：直接薅原厂羊毛！

当然，以上内容也只是ADC的皮毛，遇到问题在各平台网站找资料也很零散，原厂的资料才是真香！  

最近在MPS小程序发现ADC资料可以下载，完全免费！没有套路！从入门到精通，手把手教你，学习要高效，直接去原厂薅资料最靠谱，保证让你少加几次班，少掉几根头发！

  

以下是MPS 官方 ADC 培训课程

全文391页，官方高清PDF免费开放下载

**课程简介**

-   **深入研究模数转换器（ADC），包括数字系统中的关键组件。**
    
-   **详细分析ADC架构及其在不同领域的应用。**
    
-   **将理论概念与实际应用相结合，重点关注设计考量、误差分析和电源管理。**
    
-   **探讨ADC高级主题，如宽带通信中的高速ADC、精密测量中的高分辨率ADC以及未来发展趋势。**
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyHxytSibM9lR2fy36TleaZsXKyzjhMhqXUbV6RKVncIpYOzCubfh016ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyHKlur71EUvFbMDnmknE7F7PHSibekkG1zGqPuMPt5icjIbXKGncibbJzow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyH3iaYeQiaCZfCicxtFoQ7WJmlibFjxvk16jQ12OcbTtKAMre1wXMHHHoeCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyHWgCOkgkkNVhmp0PAfHkG01slVWo8Tn8XG7PsibiaxDXdIaR1B4ju6I1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyHXk5ljJDpktDUbxsecltt95vgM0MGXiaSrhfsdicEcyW2MxAs0czb8icicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyHdmDqmM0IAJ1p2icbhr60JgbgSwjQRTDXE42U2oOLRUG0ZpPl3jxUIXA/640?wx_fmt=png&from=appmsg)

全文太长，完整PDF可以直接在MPS小程序上下载，资料包里还有内容非常丰富，大家可以把资料下载下来，遇到问题的时候再慢慢研究。  

点击下方 ↓ ↓ ↓ 一键**免费**获取PDF 

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjdCTYRcvdm4JtibyOLH6TyH8GgHp3b7uWFTz7vIv6d9pfRVNBhnw8qjNkk2lk4ichAVYGCib88ZtLAg/640?wx_fmt=jpeg&from=appmsg)

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

  

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjlXjk6N5523uiag35OccaBa4kLQjG8lS2DUnnaNvKmu0cjpvXCH6tOIQ1yqcys5jqnITC8fuAyNRw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjlXjk6N5523uiag35OccaBavtviastib6IxfE1ympMNCSrricNxPsY130ymh6icx38mRicPtLYKLIxJXaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)