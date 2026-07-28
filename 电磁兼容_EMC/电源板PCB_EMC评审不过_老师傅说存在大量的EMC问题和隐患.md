# 电源板PCB EMC评审不过，老师傅说存在大量的EMC问题和隐患

原创 硬件笔记本 2024-08-17 10:35 四川

> 原文地址: [https://mp.weixin.qq.com/s/NeIIuO9cJlw3OwlmmsPWaQ](https://mp.weixin.qq.com/s/NeIIuO9cJlw3OwlmmsPWaQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

随着新能源智能网联技术的发展，汽车设计中不再是常规的12V系统，一方面380V等高压出现，另一方面在集成电路中1.3V等更低压出现。同时设计过程中电源芯片不再只使用LDO，Buck和Boost电源的使用增多。从而电源的EMC设计显得越来越重要，本文将一某电源PCB板为例，分析电源PCB板设计中常见问题，希望抛砖引玉，为各位解决电源模块的EMC问题提供一些思路。

设计问题：

某硬件工程师设计完成的电源板PCB，如下图所示。本板在进行EMC设计评审时发现存在大量的EMC问题和隐患，需要进行改版，否则将面临着极大的EMC风险。从这个Layout各位能看出哪些问题呢？不妨在留言中写出来。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyB0sJoGsxrDAw4AWH1qZFflptbfev2ufBsCajbvlRet3yaOmQ09EItA/640?wx_fmt=png&from=appmsg)

问题一 接口滤波器件离接口太远

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyuJXoicqEchT6YiaCeLmkWoYdEn6gWrfNlNaf9Kw3rmWJuRo2YTUOTB2g/640?wx_fmt=png&from=appmsg)

影响：如图所示，因为滤波电路离接口太远，经过滤波的电源信号可能受到PCB中其他信号的干扰，造成二次污染。另外一方面，外部进来的干扰因为没有经过端口的滤波，可能会直接影响PCB中的其他信号，产生抗干扰问题。

问题二 接口滤波器件未垂直成列布置

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvymZKG2W1aZYfcJ4ATOXsq6NicYjibUzS40oFMl1nU5S4g8zWNHdGlnpIw/640?wx_fmt=png&from=appmsg)

影响：如图所示，因为接口滤波电路未垂直成列布置，比如第一路的电源已经经过滤波了，到了接口处应该是很干净的信号了，但是如上图所示的Layout，很有可能第二路的干扰又耦合到第一路了。

问题三 电源滤波器件未布置在一起

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyeJI5s6CgPcbJ4g0QGSznZysapQdvw0KCjm0w2c75lNM9xksvUc1GMw/640?wx_fmt=png&from=appmsg)

影响：电源滤波是组合拳，不是单靠某一个器件来实现的。为了达到很好的滤波效果，原理图设计时需要模块化，Layout设计时也需要模块化。

问题四 开关电源输入输出回路太大

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyzHhFLiblFGJiaaQFZJemrbvWaZsQ5KeR8Opqq4Ns3vMprZHTUdY6yY5A/640?wx_fmt=png&from=appmsg)

影响：辐射干扰的产生一般是因为回路太大，电流无法快速的流回去，而通过辐射发射出去。在电源Layou设计时应尽量减小电源回路，较小对外干扰，同时回路小，也可以减小串扰的可能性。

设计思路：

对于开关电源板在PCB布线时，总的思路是控制好输入整流滤波环路、功率环路、输出整流环路、输出滤波环路的回路面积，环路要小，布线要短！

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyibmNJMYvS5KWVTcVibzGqrC8dpU7NzaiamvKkiauPJjqdyKASNBFficibOiaQ/640?wx_fmt=png&from=appmsg)

整改设计：

优化后重新设计的PCB如下图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyACTP6bwCEpkjLjXJXEm9IXnYIJ2q5AAaV56bS0jLmzI2FXR7fTrHNQ/640?wx_fmt=png&from=appmsg)

EMC Layout设计要点

1.  敏感信号远离大电流信号，特别是频率信号，且不要平行走线。
    
2.  电流回路走线尽量小。
    
3.  模拟地、功率地需要分开，可以通过过孔或者星型点连在一起。
    
4.  多路IC供电，可以并联单点接地，减少串扰。
    
5.  控制回路与功率回路分开。
    
6.  去耦电容需要靠近IC电源Pin放置。
    
7.  电源做好多阶滤波，较小电容靠近芯片Pin。
    
8.  防反、钳位保护的器件靠近连接器放置。
    
9.  做好高压地低压地的隔离设计。
    
10.  注意安规走线的间距。
     
11.  对于高速信号还需要考虑电源阻抗、谐振、直流压降的影响。
     

电源是EMC设计中的老大难问题，做好电源EMC设计非一朝一夕之功。只好在电路设计中做好滤波考虑，在Layout设计中处理好细节，才能做好EMC性能好的电源。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源头条造车侠Autopro。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。