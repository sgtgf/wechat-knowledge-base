# 6种常见的DC-DC升压电路

原创 硬件笔记本 2023-04-30 12:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/geMq-cJIJxCJRuIqnP4t8w](https://mp.weixin.qq.com/s/geMq-cJIJxCJRuIqnP4t8w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

万用表是从事电工、电子技术工作者的必备工具，它的高阻挡通常使用一块9V、15A或22.5V的叠层电池。这种电池不但价格较高，而且寿命短，经常更换很不经济。这里介绍几款适合万用表使用的小型直流升压器电路，这些电路结构简单、元件少，改装后可将电路板直接置于万用表中叠层电池的位置替代使用。

  

![](6种常见的DC_DC升压电路_images/img_002_aa11f6a8c079.gif)

**一、直流升压电路**

  

如图所示是一种输出电压可达22.5 V的直流升压器电路，可用来代替22.5 V的叠层电池。

它利用万用表中的一节1.5V电池供电，工作电流为25mA，输出电流约为0.5mA，用于万用表的高阻挡足够富裕。电路中VT1与VT2组成互补多谐振荡器，它的振荡频率约为2kHz。T是升压变压器，初级就是互补多谐振荡器的负载，次级为升压绕组，输出一个较高的脉冲电压。该电压经过二极管VD1和电容C2整流滤波后成为直流高压，再经过电阻R3与稳压管VD2稳压后可输出一个较稳定的高电压。  
  
电路中变压器T可用晶体管收音机用的502型音频输出变压器，次级作为升压变压器的初级，初级中间的抽头不用，两端抽头作为升压变压器的次级。如果找不到合适的变压器，也可以用收音机输人输出变压器的硅钢片自制，初级用直径为0.25mm的高强度漆包线绕110匝，次级用直径0.21mm的高强度漆包线绕520匝。初次级间要加一层绝缘纸，并注意初次级线圈的同名端。

![](6种常见的DC_DC升压电路_images/img_003_01464d69fc56.jpg)

  

![](6种常见的DC_DC升压电路_images/img_004_64f7f4cef01b.gif)

**二、小型直流升压器**

  

如图所示是一种构造很简单的小型直流升压器，可用来取代15V的叠层电池。电路的核心元件一变压器T使用的是袖珍验钞器的专用变压器。电路耗电约40mA，输出电压为15V。如果万用表15V电池的正极与1．5V电池的负极相接，只需将图7—70中VD1（C1、VDZ的极性调过来，这样将输出一个-15V电压） 　

![](6种常见的DC_DC升压电路_images/img_005_f68f0e265c9b.jpg)

  

![](6种常见的DC_DC升压电路_images/img_006_64f7f4cef01b.gif)

**三、稳压型直流升压电路**

  

如图所示是一种稳压型直流升压电路。该电路可将一节1．5V的电池升压至9V，用来取代9V叠层电池使用。电路空载输人电流低于1.2mA，转换效率高达60％。该电路由振荡电路和稳压电路构成，其中VT1、VT2、C2组成振荡器，色码电感L为储能电感，VD2为整流二极管，C3为输出滤波电容，VT3、VD1、VD3及R2为稳定输出电压的稳压电路。输出电压约等于VD3的稳压值。

![](6种常见的DC_DC升压电路_images/img_007_fd9d1cf60bab.jpg)

  

  

![](6种常见的DC_DC升压电路_images/img_008_64f7f4cef01b.gif)

**四、逆变电源电路（一）**

  

如图所示是一种利用1.2V、500mAh的镍镉电池做电源的逆变电源电路，输出直流电压为9V，可供数字式万用表使用。下图中变压器T利用15mm的磁环穿绕而成（元器件参数图中均已标注人名为数字万用表的电源开关。

![](6种常见的DC_DC升压电路_images/img_009_d3231a8eb195.jpg)

  

![](6种常见的DC_DC升压电路_images/img_010_64f7f4cef01b.gif)

**五、逆变电源电路（二）**

  

如图所示是自控式数字表逆变电源电路。它不需要单独设立电源开关或对表内开关进行改造。该电路具有耗电省、稳定可靠、不影响仪表精度等特点。电路中的变压器T是用E3型铁氧体磁芯、各折去一角后加工成口字形，L2在内,L1在外。整个逆变电源工作时，电池工作电流约为70mA。

![](6种常见的DC_DC升压电路_images/img_011_9bdaecc0a2cf.jpg)  

  

![](6种常见的DC_DC升压电路_images/img_012_64f7f4cef01b.gif)

**六、简易仿制电路**

  

下图为仿制电路：输入可低至0.8V，输出电流可达10mA。

输出开路，输入电流为零。  
  
T:E3日字型磁芯L1=18匝=125μH   L2=180匝=12mH

![](6种常见的DC_DC升压电路_images/img_013_dc2820fe6459.jpg)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。