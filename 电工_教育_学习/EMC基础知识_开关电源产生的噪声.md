# EMC基础知识：开关电源产生的噪声

原创 硬件笔记本 2024-08-15 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/dlg-Vv0y6eZLnl1g6BRe8w](https://mp.weixin.qq.com/s/dlg-Vv0y6eZLnl1g6BRe8w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

本文将探讨实际的开关电源产生的噪声。  

  

**开关电源产生的噪声**

  

首先，使用同步整流型降压DC/DC转换器的等效电路来了解一下开关电流的路径。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhflJuGt11fOIFZtJ9SY4rL3qNOXuEic59DG8smxMib8kYWV8rTYnPPASU7WtKfrnvsIYDX8yibaKLJQ/640?wx_fmt=png&from=appmsg)

  

SW1为高边开关，SW2为低边开关。SW1导通（SW2为OFF）时，电流路径是从输入电容器到SW1、再经由电感L到输出电容器。SW2导通（SW1为OFF）时，电流路径是从SW2经由L再到输出电容器。下图表示这些电流路径的差分，每当开关ON/OFF时，红色线路的电流都会急剧变化。该环路的电流变化非常剧烈，所以会因PCB板布线电感而在环路内会产生高频振铃。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhflJuGt11fOIFZtJ9SY4rLKS3iar0RFQzzbodmg4xjGIs6aUZMhicL1YsLMPYBkCs8r012klB7gMXg/640?wx_fmt=png&from=appmsg)

  

图中表示构成电源电路的外置部件、实装多层电路板的寄生分量及振铃的关系。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhflJuGt11fOIFZtJ9SY4rLUoVRvYjCUPqMM34MetohGXYD9PJPItNgoJIcYoqe8Jz7YDGznhqDZQ/640?wx_fmt=png&from=appmsg)

  

红色部分标出的是上图所表示的电流在急剧变化的环路中的寄生分量。布线中存在布线电感，通常每1mm有1nH左右的电感。另外，电容器中存在等效串联电感ESL，MOSFET的各引脚间存在寄生电容。因此，如红框内的图例所示，开关节点将产生100MHz～300MHz的振铃。所产生的电流及电压，可通过两个公式求得。

  

此振铃会作为高频开关噪声带来各种影响。虽然有采取相应的措施，但由于无法从电源IC处去除安装电路板的寄生分量，因此只能通过PCB板布局设计及采用去藕电容来解决。关于PCB板布局，在DC/DC转换器的“PCB板布局”部分有详细介绍，请参考。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhflJuGt11fOIFZtJ9SY4rLMIibcpEuianOSvEZo0ibQrmUIOf2nJD5Ccu00TUdzcBWHFJlxibsKrF1pA/640?wx_fmt=png&from=appmsg)

关于差模噪声和共模噪声，请点击这里了解详情；关于串扰，在这里有详细介绍。关于共模滤波器，将在后续章节进行介绍。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源来源：ROHM，作者：ROHM。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。