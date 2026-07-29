# MOS管防反接电路设计

原创 硬件笔记本 2024-02-03 11:32 四川

> 原文地址: [https://mp.weixin.qq.com/s/t874CKyKfSOknr01WLYBSw](https://mp.weixin.qq.com/s/t874CKyKfSOknr01WLYBSw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

电子元件大都是使用直流工作，电源线反接就有可能就会烧坏，那电路如何防反接？首当其冲我们想到的就是二极管了，运用其单向导通特性可有效防止电源反接而损坏电路，但是随之而来的问题是二极管存在PN节电压，通常在0.7V左右，低电流是影响不明显，但流过大电流时，如流过1A电流其会产生0.7W的功耗，0.7W的功耗发热对元件本身及周边元件的可靠性是个非常大的考验。

可见二极管防反接最大问题是管压降，越低损耗就越小。在晶体管中导通压降最低的就属场效应管了，就是我们平常叫的MOS管，那如何运用MOS管这一优良特性设计防反接电路？如下图所示：

![](MOS管防反接电路设计_images/img_002_84fccafea816.png)

**NMOS防反接电路**  

当输入上正下负时，下图黄色线条所示电流路径，经过R1、R2，MOS寄生二极管到地,R1与R2分压后其GS极电压大于MOS导通电压Vgs，MOS导通，红色线条所示的整个电路回路接通。

![](MOS管防反接电路设计_images/img_003_d347aec6a1b1.png)

**正向导通时电流路径**  

当输入上负下正时，下图黄色线条所示电流路径，电流路径被MOS寄生二极管反向截止，MOS管因GS极没有电压而截止，整个电路回路断开，有效保护了系统电路。

![](MOS管防反接电路设计_images/img_004_1ccc1f14c9a3.png)

**反向截止电流路径**  

上面介绍了NMOS防反接，PMOS防反接电路如下，其防反接原理与NMOS一致，不再赘述。

![](MOS管防反接电路设计_images/img_005_f941831eb6ec.png)

**PMOS防反接电路**

通常电路系统是共地的就用POMS防反接，共源就用NMOS防反接。

硬件工程师及从业者都在关注我们

![](MOS管防反接电路设计_images/img_006_58147eba07eb.gif) ![](MOS管防反接电路设计_images/img_007_9b53a964efd5.gif) ![](MOS管防反接电路设计_images/img_008_75db8c1036fb.gif) ![](MOS管防反接电路设计_images/img_009_0b6ae33611dc.gif) ![](MOS管防反接电路设计_images/img_010_365c6cd9f8bb.gif) ![](MOS管防反接电路设计_images/img_011_2da1ccbac0ae.gif) ![](MOS管防反接电路设计_images/img_012_7446ffe5e3b8.gif) ![](MOS管防反接电路设计_images/img_013_d246b538f592.gif)

![](MOS管防反接电路设计_images/img_014_3352ab08e99b.gif) ![](MOS管防反接电路设计_images/img_015_0f89804cd7eb.gif) ![](MOS管防反接电路设计_images/img_016_f506b795c6ac.gif) ![](MOS管防反接电路设计_images/img_017_97df29bd0f50.gif) ![](MOS管防反接电路设计_images/img_018_d7c6fe8cd645.gif) ![](MOS管防反接电路设计_images/img_019_19e2f7b6262a.gif) ![](MOS管防反接电路设计_images/img_020_08d092bef8a0.gif) ![](MOS管防反接电路设计_images/img_021_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。