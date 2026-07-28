# 搞硬件这么久，烧过MOS，烧过运放，烧过板子，但烧电脑主机这是第一次

原创 王工 硬件笔记本 2024-07-15 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/KqrHjRwUWqT3NwKrcZWfCg](https://mp.weixin.qq.com/s/KqrHjRwUWqT3NwKrcZWfCg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

大家好，我是王工。

  

今天给大家分享一个工作中的小插曲，在调试一个刚投回来的板子时，不小心把电脑主机给烧了。为简单描述，咱就直接进入正题，讲重点，无关的就不说了。

  

客户要求主板电源输入两种接口：DC 12V和Type-C两种接口，其中Type-C可以5V供电输入，同时也可以跟TP通信，实现触摸功能。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiab6dMcJIVgGmibsP7V1ttYOjkIWTUvicic1ez7TrIibDzj7JHukhP4OPhcia6tDvBm1Vp3OPgDxkj9U6w/640?wx_fmt=png&from=appmsg)

  

**那么实际使用时，就有3种场景：**

1、只有DC 12V 输入；

2、只有Type-C 输入；

3、有DC 12V输入，同时也有Type-C 输入。

  

那么在设计电路时我们至少有两点要考虑：  

1、两个接口单独工作时，主板要正常工作；  

2、两个接口同时工作时，其中一路电源不能影响另一路。

  

  

我们设计的电路如下，咱们分三种情况来讲解：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiab6dMcJIVgGmibsP7V1ttYOa6xZ1Pcrzt5qZ9Eju4njhddxt9LXMKLQcLa7vfaXrjFhzSRHAX91xw/640?wx_fmt=png&from=appmsg)

  

  

**1、当只有DC 12V 输入时：**

  

输入的DC 12V把 MOS管Q1，Q2栅极拉高，MOS不通，12V只能沿着下图路径①向负载输出12V电压。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiab6dMcJIVgGmibsP7V1ttYOu7rGicUQSzlRxwj2GpON0No7tKk0jjE8FVgeibIMm7rZdLdndIFMRWNw/640?wx_fmt=png&from=appmsg)

  

  

**2、只有Type-C 输入时：**

  

只有Type-C 输入时，DC 12V是没有输入的。此时，MOS管Q1，Q2栅极被拉低，Vgs＜0，MOS导通，DC 5V沿着路径②进入DC/DC升压后，向负载输出12V电压。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiab6dMcJIVgGmibsP7V1ttYOt5tGYgOlJI9Ll8RyBUsppyXcYAC12ISDp48PA5Qot5ptakusezKhWA/640?wx_fmt=png&from=appmsg)

  

  

**3、有DC 12V输入，同时也有Type-C 输入时：**  

  

这种情况其实相当于我们第一种，即只有DC 12V 输入的情况。

  

此时MOS管Q1，Q2不通，由于Q1内部有体二极管，Type-C的5V电压无法输出，即5V无法影响12V。由于Q2内部有体二极管，12V也无法影响5V。即互不影响，电路最终输出DC 12V。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiab6dMcJIVgGmibsP7V1ttYOu7rGicUQSzlRxwj2GpON0No7tKk0jjE8FVgeibIMm7rZdLdndIFMRWNw/640?wx_fmt=png&from=appmsg)

  

分析完后，这个电路设计好像确实没有问题，那么它到底是怎么炸机的呢？有想了解或者对此电路有疑问的朋友，欢迎留言评论或添加微信探讨。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&tp=wxpic&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本文章为原创内容，转载请注明出处。本号对所有转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。