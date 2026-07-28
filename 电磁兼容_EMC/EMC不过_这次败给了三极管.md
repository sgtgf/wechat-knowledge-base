# EMC不过，这次败给了三极管

原创 硬件笔记本 2024-07-26 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/8\_cTQzLrYD10Ej\_jm5aA1g](https://mp.weixin.qq.com/s/8_cTQzLrYD10Ej_jm5aA1g)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

> 8050三极管在大约0.5V左右就开始从有Ic电流，在0.8V左右就基本可以工作在开关状态了

问题描述  

公司之前做过的一个产品。产品在做EMC认证过程中，经常会出现信号指示灯乱闪烁的情况。信号指示灯的连接原理图如下。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaItmhKeYyMMVI7Pr0IibqS2GJ3iazy8iapWTCMl1QVgUDYE6acNUmfMVYS2IC43Vq48be0mLBZYy8bw/640?wx_fmt=png&from=appmsg)

图 1:原设计中的指示灯原理图

# 原因分析

问题的原因定位比较明确，没有施加干扰的时候，信号指示灯是正常的，施加EMC干扰的时候，导致了乱闪，说明是由于我们在EMC防护上不到位。

经过分析，我们主要在三极管的驱动电路上出了问题，工程师在设计的时候，以为三极管工作在开关状态下，只要给给基极足够的驱动电流就可以了。

但是忽略了一个问题，三极管的导通所需的Vbe非常小，如下图2,8050三极管在大约0.5V左右就开始从有Ic电流，在0.8V左右就基本可以工作在开关状态了。

也就是说虽然主芯片没有对外输出高电平，但是由于周围的其他干扰，也是可以导致三极管非正常导通的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaItmhKeYyMMVI7Pr0IibqS2BzdKXJPic4uLUdyibnteFsZn9OEwD9SPoejKW2Pdc1c8nXh39dKhYPog/640?wx_fmt=png&from=appmsg)

图 2: 三极管Vbe与Ic的关系曲线图

# 四、解决方案

经过整改，我们主要采取以下的方案：将原来的R6修改为10K，增加一个下拉电阻3K，构成分压关系，当cpu输出为3.3V的时候，Vbe=0.76V，输出2V时，Vbe=0.46V准备开始导通，同时增加一个并联的0.1uF的电容，吸收部分干扰脉冲。

经过EMC的实测，问题可以得以解决。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaItmhKeYyMMVI7Pr0IibqS2uIXFuKTQxWtTkm8OI6DNxFz7w399hEYOOlsFAs3T4Oukk3OeuLlGkQ/640?wx_fmt=png&from=appmsg)

图3: 整改后的方案  

  

五、总结

三极管增加基极的下拉电阻有以下几个作用：

1、如果主芯片没有工作，可以给三极管一个确定的电平，保持在关断状态下；

2、提高三极管的导通电平，如果没有下拉电阻，三极管0.7V就可以导通，增加合适的下拉后，可以提高到2V甚至更高才能导通

3、防止三极管受噪声信号的影响而产生误动作，使晶体管截止更可靠！

4、防止输入电流过大，加个电阻可以分一部分电流，这样就不会让大电流直接流入三极管而损坏其。

5、增加下拉以后，可以提供放电通道，可以提高三极管的放电速度。当三极管开关作用时,ON和OFF时间越短越好,为了防止在OFF时,因晶体管中的残留电荷引起的时间滞后,在B,E之间加一个R起到放电作用

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。