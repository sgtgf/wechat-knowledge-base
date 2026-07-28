# MOS驱动好不好，波形一看就知道

原创 蜗牛 硬件笔记本 2022-12-26 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/5PwIzcC-RxiD\_NzMY3R09A](https://mp.weixin.qq.com/s/5PwIzcC-RxiD_NzMY3R09A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

大家好，我是蜗牛兄。  

如何从MOS管的驱动波形来判断驱动好不好，到底是哪里出了问题？本文分享几种常见的MOS管驱动波形。

  

**基础知识**  

一般认为三极管是电流驱动型，所以驱动三极管，要在基极提供一定的电流。

一般认为MOS管是电压驱动型，所以驱动MOS管，只需要提供一定的电压，不需要提供电流。  

  

实际是这样吗？  

由于MOS管的制作工艺，决定了本身GS之间有结电容以及GD之间有弥勒电容，DS也有寄生电容，这使得MOS管的驱动变得不那么简单。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgCxIiaLUpzygtnNMGpvbrPiaFWFaxMWp7FxmK3ZUwdFRnasrBBGvPqMia7ru4kib9nmXS4Eky7PdiaEug/640?wx_fmt=png)

  

  

备注：如下图为软件绘制，示意图仅供参考，便于理解。

1、MOS正常驱动波形

  

**描述**：MOS一般是慢开快关，上升沿相对下降沿较缓，整体看起来近似方波，比较完美。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgOzKQweXSnZJLE9xgRiapqGA1CAOibJUaunET1SF04KwOloibiagSgkwqFP7QgnnVELVNkrGPjBDO1Sg/640?wx_fmt=png)

  

  

2、MOS驱动波形略微震荡

  

**描述**：肉眼可见这也是方波，上升沿和下降沿都比较陡峭，开关速度比较快，管子损耗小，只是管子有略微的震荡。

**解决手段**：适度加大栅极驱动电阻。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgOzKQweXSnZJLE9xgRiapqGFpictEwXrbiaxdYhib5ibvZic6mMsQia7qTGKicp64we6svXY3wwjncOgGHaw/640?wx_fmt=png)

  

  

3、MOS驱动波形边沿缓慢

  

**描述**：波形的上升沿和下降沿非常缓慢，甚至可能近似三角波，可尝试将栅极驱动电阻减小，如果变化不大，很可能是驱动芯片的驱动能力不足引起。

  

**解决手段**：更换驱动能力较强的驱动芯片。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgOzKQweXSnZJLE9xgRiapqGAibE4JuBxictTAt657WKftnudF7GZC1icDiaHYbTxXAd3PyI9fIolUuhog/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgOzKQweXSnZJLE9xgRiapqGUvzWFWpdPIz7g8pUP5U7RRUw4MUPyzNyBazhNZ6BSEiaiaOmtkbA9kIA/640?wx_fmt=png)

  

  

4、MOS驱动高频振铃

  

**描述**：可以看出，管子震荡的非常厉害，有很大一部分时间都工作在线性区，损耗非常大。用红外测温仪查看，管子秒秒钟温升几十度，断电稍微慢一点，管子就被热死了。

  

**解决手段**：这种情况一般都是布板的问题，不用调参数，调了也没用，只能重新画板子。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgOzKQweXSnZJLE9xgRiapqGLlt1Awt2riaMJfnbO1XVicySPyiaTMwfWAowbWqkbaWnoMlkR5CfRcM4g/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgOzKQweXSnZJLE9xgRiapqGlRHATucypXGt4RTRshibpDLUjeVUmVuXV2iaktQO8nj5QLsxwEbSngtg/640?wx_fmt=png)

以上就是今天的分享，希望对你有帮助。

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。