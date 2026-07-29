# 这几种MOS栅极驱动电路有点强

原创 硬件笔记本 2024-07-04 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/6H20Q2uHlkZrlH0XwXVnhw](https://mp.weixin.qq.com/s/6H20Q2uHlkZrlH0XwXVnhw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

**1、IC直接驱动型**  

这种电源IC的直接驱动是最常见、最简单的驱动方式。

![](D:\电脑文件\公众号知识库\电工_教育_学习\这几种MOS栅极驱动电路有点强_images\img_002_25a112c1772f.png)

图1 IC直接驱动MOS栅极

使用这种方法，我们应该注意几个参数及其影响。

首先查看电源IC手册，了解最大峰值驱动电流，因为不同的IC芯片具有不同的驱动能力。

其次，检查MOSFET的寄生电容，如图中的C1、C2和C3，如果容值较大，导通MOS管所需的能量也比较大。如果电源IC没有足够的峰值驱动电流，晶体管将以较慢的速度开启。

如果驱动能力不足，上升沿可能会出现高频振荡，即使减小图1中的Rg也无法解决问题！而IC驱动能力、MOSFET寄生电容、MOSFET开关速度等因素，也会影响驱动电阻的选择，所以Rg不能无限减小。

**2、图腾柱电路增强驱动**

该驱动电路的作用是增加电流供应能力，快速完成栅极电容输入的充电过程。

这种拓扑增加了开通所需要的时间，但减少了关断时间，开关管能够快速开通，避免上升沿的高频振荡。

![](D:\电脑文件\公众号知识库\电工_教育_学习\这几种MOS栅极驱动电路有点强_images\img_003_0ab6fb154bb5.png)

图2 图腾柱电路增强驱动

**3、驱动电路加速MOS管的关断**

在关断的瞬间，驱动电路可以提供尽可能低阻抗的通路，使MOSFET的栅极和源极之间的电容快速放电，保证开关管可以快速关断。

为了保证栅极源极间电容C2的快速放电，在Rg1上并联了一个Rg2和一个二极管D1。

其中D1通常采用快恢复二极管，缩短了关断时间并降低了关断损耗；Rg2的作用是防止电源IC在关断时因电流过大而烧坏。

![](D:\电脑文件\公众号知识库\电工_教育_学习\这几种MOS栅极驱动电路有点强_images\img_004_dbff41bc5410.png)

图3 加速MOS管关断电路

图腾柱电路也可以加速关断，当电源IC的驱动能力足够时，图2中的电路可以改进为下图这种形式。

![](D:\电脑文件\公众号知识库\电工_教育_学习\这几种MOS栅极驱动电路有点强_images\img_005_3101c2aa58c0.png)

图4 改善型加速MOS管关断电路

用三极管释放GS电容上的电是很常见的，如果Q1的发射极没有电阻，PNP晶体管导通时栅极与源极之间的电容会短路，可以在最短的时间内实现放电，最大限度地减小关断时的交叉损耗。

如图4，因为三极管的存在，栅极和源极之间电容电流不会直接通过电源IC放电，提高了电路可靠性。

**4、变压器驱动电路加速MOS管的关断**

为了满足驱动高边MOS管的要求，如图5所示，通常使用变压器驱动器，有时也用于安全隔离。

使用R1的目的是抑制PCB板上的寄生电感与C1形成LC振荡，其设计目的是隔离直流，通过交流，同时防止磁芯饱和。

![](D:\电脑文件\公众号知识库\电工_教育_学习\这几种MOS栅极驱动电路有点强_images\img_006_af162195d0cc.png)

图5 高边MOSFET驱动电路

![](D:\电脑文件\公众号知识库\电工_教育_学习\这几种MOS栅极驱动电路有点强_images\img_007_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。