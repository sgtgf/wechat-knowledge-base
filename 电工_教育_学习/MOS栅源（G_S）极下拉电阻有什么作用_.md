# MOS栅源（G-S）极下拉电阻有什么作用？

原创 硬件笔记本 2022-10-30 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/w-FkEmMhv7wYrIyJzkh-yA](https://mp.weixin.qq.com/s/w-FkEmMhv7wYrIyJzkh-yA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

## 一、MOS管栅源下拉电阻的作用

MOS是电压驱动元件，对电压很敏感，悬空的G很容易接受外部干扰使MOS导通，外部干扰信号对G-S结电容充电，这个微小的电荷可以储存很长时间。

在试验中G悬空很危险，很多就因为这样爆管，G接个下拉电阻对地，旁路干扰信号就不会直通了，一般可以10~20K。这个电阻称为栅极电阻。

  

-   作用1：为场效应管提供偏置电压；
    
-   作用2：起到泻放电阻的作用(保护栅极G~源极S)；
    

  

第一个作用好理解，这里解释一下第二个作用的原理。保护栅极G~源极S，场效应管的G-S极间的电阻值是很大的，这样只要有少量的静电就能使他的G-S极间的等效电容两端产生很高的电压，如果不及时把这些少量的静电泻放掉，他两端的高压就有可能使场效应管产生误动作，甚至有可能击穿其G-S极。这时栅极与源极之间加的电阻就能把上述的静电泻放掉，从而起到了保护场效应管的作用。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅源（G_S）极下拉电阻有什么作用__images\img_002_508a3d7638c3.jpg)

## 二、MOS管被击穿的原因及解决方法

**第一：**MOS管本身的输入电阻很高，而栅源极间电容又非常小，所以极易受外界电磁场或静电的感应而带电，而少量电荷就可在极间电容上形成相当高的电压 (U=Q/C)，将管子损坏。

虽然MOS输入端有抗静电的保护措施，但仍需小心对待，在存储和运输中最好用金属容器或者导电材料包装，不要放在易产生静电高压的化工材料或化纤织物中。组装、调试时，工具、仪表、工作台等均应良好接地。要防止操作人员的静电干扰造成的损坏，如不宜穿尼龙、化纤衣服，手或工具在接触集成块前最好先接一下地。对器件引线矫直弯曲或人工焊接时，使用的设备必须良好接地。

**第二：**MOS电路输入端的保护二极管，其导通时电流容限一般为1mA，在可能出现过大瞬态输入电流(超过10mA)时，应串接输入保护电阻。因此应用时可选择一个内部有保护电阻的MOS管应。还有，由于保护电路吸收的瞬间能量有限，太大的瞬间信号和过高的静电电压将使保护电路失去作用。所以焊接时电烙铁必须可靠接地，以防漏电击穿器件的输入端，一般使用时，可断电后利用电烙铁的余热进行焊接，并先焊其接地管脚。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。