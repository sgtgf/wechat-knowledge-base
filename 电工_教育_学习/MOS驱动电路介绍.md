# MOS驱动电路介绍

原创 硬件笔记本 2022-12-17 11:50 四川

> 原文地址: [https://mp.weixin.qq.com/s/8F7Z3GRHmn5OiWe-TPs6lA](https://mp.weixin.qq.com/s/8F7Z3GRHmn5OiWe-TPs6lA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

MOS管因为其导通内阻低，开关速度快，因此被广泛应用在开关电源上。而用好一个MOS管，其驱动电路的设计就很关键。下面分享几种常用的驱动电路。

  

一、电源IC直接驱动

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS驱动电路介绍_images\img_002_79b18097a732.png)

电源IC直接驱动是最简单的驱动方式，应该注意几个参数以及这些参数的影响。  

  

①查看电源IC手册的最大驱动峰值电流，因为不同芯片，驱动能力很多时候是不一样的。

②了解MOS管的寄生电容，如图C1、C2的值，这个寄生电容越小越好。如果C1、C2的值比较大，MOS管导通的需要的能量就比较大，如果电源IC没有比较大的驱动峰值电流，那么管子导通的速度就比较慢，就达不到想要的效果。

  

二、推挽驱动

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS驱动电路介绍_images\img_003_2213a9dae3b5.png)

当电源IC驱动能力不足时，可用推挽驱动。

  

这种驱动电路好处是提升电流提供能力，迅速完成对于栅极输入电容电荷的充电过程。这种拓扑增加了导通所需要的时间，但是减少了关断时间，开关管能快速开通且避免上升沿的高频振荡。

  

三、加速关断驱动

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS驱动电路介绍_images\img_004_2ed5e09153fb.png)

MOS管一般都是慢开快关。在关断瞬间驱动电路能提供一个尽可能低阻抗的通路供MOSFET栅源极间电容电压快速泄放，保证开关管能快速关断。

为使栅源极间电容电压的快速泄放，常在驱动电阻上并联一个电阻和一个二极管，如上图所示，其中D1常用的是快恢复二极管。这使关断时间减小，同时减小关断时的损耗。Rg2是防止关断的时电流过大，把电源IC给烧掉。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS驱动电路介绍_images\img_005_9868b9e63c98.png)

如上图，是我之前用的一个电路，量产至少上万台，推荐使用。

用三极管来泄放栅源极间电容电压是比较常见的。如果Q1的发射极没有电阻，当PNP三极管导通时，栅源极间电容短接，达到最短时间内把电荷放完，最大限度减小关断时的交叉损耗。

  

还有一个好处，就是栅源极间电容上的电荷泄放时电流不经过电源IC，提高了可靠性。

  

四、隔离驱动

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS驱动电路介绍_images\img_006_b2816c385d8d.png)

为了满足高端MOS管的驱动，经常会采用变压器驱动。其中R1目的是抑制PCB板上寄生的电感与C1形成LC振荡，C1的目的是隔开直流，通过交流，同时也能防止磁芯饱和。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。