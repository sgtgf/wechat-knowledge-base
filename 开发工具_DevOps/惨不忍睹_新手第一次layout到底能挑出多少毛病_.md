# 惨不忍睹！新手第一次layout到底能挑出多少毛病？

原创 硬件笔记本 2023-07-04 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/bcLBExlUEE74iLdjwK99jQ](https://mp.weixin.qq.com/s/bcLBExlUEE74iLdjwK99jQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

某新手在论坛上发了一篇帖子，把自己的处女PCB布线图贴出来。

  

另外还提出了自己的小见解：问一下，我觉得自动布线挺好用的啊，只要布局好了，规则设置好了，很快就能生成图。为什么都说自动布线不好。

  

猜测可能是还想求赞，结果被批得惨不忍睹

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjga69Bx3viaAU91S8TwSFibaJLzuWY3bwfAC9SwicOIDC5lN55tJUg82DiayicicsyWQdVriaTzhLblFv24Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjga69Bx3viaAU91S8TwSFibaJKkt9OHrP5FVJVVI4t2p8mSciaPoK6U1t1Y1u1WEZ0ViaNrDe1T0kp5lg/640?wx_fmt=png)

**网友A：**  
给你的建议：   
1.MCU的去耦电容必须放在芯片引脚附近，放远就没用了，不如不加。  
2.虽然是2层板子，但是也养成好习惯吧，打孔扇出在先，布线在后，不要布的走不了，在打孔，孔都是歪歪扭扭的躲线，=你画8层的时候就会受益了。   
3.晶振尽量靠近CPU引脚，且下面不要有走线，晶振引线包地。还有在晶振回路上尽量让一让，不要让他的电流回路多绕。对了，你还打过孔在晶振这...  
4.千万不要自动布线，惨不忍睹  
  
**网友B:**  
那usb反了吧  
  
**网友C：**  
关键是规则,你能给出个规则让我们大家看看吗  
  
**网友D：**  
从来没用过自动布线....  
  
**网友E：**  
花50打个板子出来就知道你应该什么改进了  
  
**网友F：**  
布局有待改进，元器件可以摆放整齐，板子还可以压缩空间，晶振应该靠近MCU，另外电源线的处理，不要用自动布线，  
  
**网友G：**  
同楼上说的，晶振放那么远干嘛？如果是低频的还可以，高频就肯定出问题了，而且这布局很不紧凑，中间的过孔多的吓人。  
  
**网友H：**  
你这个板子完全可以缩小一半吧  
  
**网友I：**  
感觉还是可以缩小~布局在简洁点，慎用自动布线  
  
**网友j：**  
对于用这款软件没几年经验的，看到自动布线的，，直接PASS，，不管布的多好，，，都是losser  
  
**网友K：**  
楼主， USB明显反了，你这样没办法插线滴。表示我一直手动布线，那线布出来叫整齐漂亮   
  
楼主被众多工程师吐槽得体无完肤，不过楼主的板子实在槽点很多。  
  
但话又说回来，哪个工程师都是从新手过来的，被批很正常，建议虚心接受，不经历风雨怎能见彩虹啊。

## 

**声明：**

  

声明：来源电子工程师笔记。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群