# MOS管的三个极怎么判定？

原创 硬件笔记本 2023-01-07 12:03 四川

> 原文地址: [https://mp.weixin.qq.com/s/lYcqHUi3cEHv-XXgfS5lsg](https://mp.weixin.qq.com/s/lYcqHUi3cEHv-XXgfS5lsg)

  

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

相信很多工程师在使用电子测量仪器的时候大家都了解MOS管，下面一起看看MOS管究竟是什么。

  

  

1\. MOS的三个极怎么判定？

  

  

MOS管符号上的三个脚，辨认要抓住关键地方 ：

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4EJKNG2IfdZWSe0tJNqqsH5uKahtvqbkyiahCRfybqC1EniaCkPgAjicY1w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

G极，不用说比较好认。S极，不论是P沟道还是N沟道，两根线相交的就是。D极，不论是P沟道还是N沟道，是单独引线的那边。

  

  

2\. 是N沟道还是P沟道？

  

  

三个脚的极性判断完后，接下就该判断是P沟道还是N沟道了：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4ERLz9blbxIBqzouwgI4icKjloJV9b4xEYZnXl4LkPziaYVS8Amdo3ypHQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  
![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4EOw31WFIUyoXAicsHib1uEnXpDhOwRlPcsHUn6BP7kZWrOOcSpnyxicJ9w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

当然也可以先判断沟道类型，再判断三个脚极性。判断沟道之后，再判断三个脚极性。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4E17ohosXZBtEl7klazt2lcwPJuGnxsz214Hx4JSceHgVcgf0myzu8mA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

3\. 寄生二极管的方向如何判定？

  

  

接下来，是寄生二极管的方向判断：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4EX23IJBiazibLCwz1CWojp5yBhibJy8qpGpRvmqNNZ7dF7gERBCdIYia9qw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

它的判断规则就是：N沟道，由S极指向D极；P沟道，由D极指向S极。

  

  

4\. 简单的判断方法

  

  

上面方法不太好记，一个简单的识别方法是：  
（想像DS边的三节断续线是连通的）

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4EGSrhvIPK6yMHZicyFCnmvLlvzlJ4gM9E7xX2NTc5J9dbLDWlfgV3wyA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

不论N沟道还是P沟道MOS管，中间衬底箭头方向和寄生二极管的箭头方向总是一致的：要么都由S指向D，要么都由D指向S。

  

  

  

5\. MOS管的作用？

  

  

在我们天天面对的笔记本主板上，MOS管有一个很重要的作用：开关作用。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4Eib92ExZe9mfIEa0sTEoPDOm3lkQSlMxf3eFiaAic62atictpd0hTA2J6Pw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

以上MOS开关实现的是信号切换（高低电平切换）。再来看个MOS开关实现电压通断的例子。MOS开关实现电压通断的例子：由 1.5V\_SUS产生 1.5V电路

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/LjN0kIsMFYDgNYAyvfjWxoS839NK9C4EN2A9v8Y5ymJicaxicqnBDujicbgic41ibHvGbU1lf8j9MkicNlqY2MYHOGDw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

看过前面的例子，你能总结出“MOS管用做开关时在电路中的连接方法”吗？其实关键就是：确定哪一个极连接输入端；哪个极连接输出端。

  

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。