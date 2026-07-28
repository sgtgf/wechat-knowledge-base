# TTL、RS232、RS485电平标准

原创 硬件笔记本 2024-08-28 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/5sCOmMPr92cwTsppigWVEQ](https://mp.weixin.qq.com/s/5sCOmMPr92cwTsppigWVEQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

# TTL，RS232，RS485都是一种逻辑电平的表示方式，是串口的三种不同的电平标准。

## TTL

TTL ：全双工 （5V系统，逻辑1: 2.4V–5V   逻辑0: 0V–0.5V）。TTL指双极型三极管逻辑电路，市面上很多“USB转TTL”模块，实际上是“USB转TTL电平的串口”模块。这种信号0对应0V，1对应3.3V或者5V，与单片机、SOC的IO电平兼容。我们进行串口通信的时候从单片机直接出来的基本上都是TTL电平。

## RS232

RS232：全双工（逻辑1：-15V–5V 逻辑0：+3V–+15V）。是电子工业协会制定的异步传输标准接口，同时对应着电平标准和通信协议（时序），其电平标准：+3V～+15V对应“0”，-3V～-15V对应“1”。RS232 的逻辑电平和TTL 不一样但是协议是一样的。

## RS485

RS485：半双工（逻辑1：+2V–+6V 逻辑0：-6V—2V）这里的电平指AB两线间的电压差。RS485是一种串口接口标准，为了长距离传输采用差分方式传输，传输的是差分信号，即通过AB两根线的电压差作为电平信号。差分信号能有效地抵御外界因素的干扰，因为干扰对两根线影响是一样的，两根线的电压差不变，信号传递也就不会受干扰。与TTL、RS232只能一对一连接不同，RS-485在总线上是允许连接多达128个收发器。![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaTWBxA0w0AmtwCqRUOzXGkEuba67W1NiaBsn1MgjzLKXShK6LRYNOt2icPBaOyicj3Jvo2Miciaa314ZA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。