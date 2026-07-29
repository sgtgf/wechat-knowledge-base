# DC-DC导致EMI辐射超标案例分享

原创 硬件笔记本 2023-09-12 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/JwZgNPVBThsUTcU4JcZwrg](https://mp.weixin.qq.com/s/JwZgNPVBThsUTcU4JcZwrg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

分享一个EMI整改文档，对于EMC来说，接触的案例越多，整改的成功率就越高，整改的方法也越多，从案例中吸取教训，总结经验，避免设计中出现同样的问题。

  

  

注意：按照文档描述，从下面两张图片可以看出470MHz和940MHz(二次谐波)左右，这两个频点的功率非常高，可能该产品是一款无线产品，对于主频--有意辐射频率来说是有豁免权的，所以只需要注意200MHz之前的频段，由于频谱超标带宽较宽，可以肯定非时钟、晶振辐射超标引起，几乎肯定辐射源在电源了，不过最后的结果，电源部分虽然PASS了，但是后面又引起了其他的频点超标，不知道为什么也能够PASS，可能不关心200MHz之后的频点，这里不太清楚，大家主要看电源部分辐射超标的整改方法即可。个人观点，仅供参考！

  

![](DC_DC导致EMI辐射超标案例分享_images/img_002_d572792faed3.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_003_07bd8e871762.png)

  

  

以下是文档部分截图。

  

![](DC_DC导致EMI辐射超标案例分享_images/img_004_15140f7207d8.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_005_3c2453f01029.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_006_4158bc2af404.png)

![](DC_DC导致EMI辐射超标案例分享_images/img_007_5a38358a32d8.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_008_9013198c5a36.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_009_d75551bbbe10.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_010_a141d8f6a0d5.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_011_17f2e4547753.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_012_b3459477aede.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_013_cfa06cdd20ad.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_014_dd66488bba7b.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_015_16ef1bc5fb06.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_016_2f95aed305b7.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_017_6230fd301ebc.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_018_321fd111ae14.png)

![](DC_DC导致EMI辐射超标案例分享_images/img_019_3df37f5ef73b.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_020_09ada709ddb4.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_021_ddba6324ec26.png)

  

![](DC_DC导致EMI辐射超标案例分享_images/img_022_0f9d05c1ae00.png)

  

文章来源链接：https://mp.weixin.qq.com/s/1Qx6NEt3gZU7c96OoLnBiw

  

硬件工程师及从业者都在关注我们

![](DC_DC导致EMI辐射超标案例分享_images/img_023_2e84b7ba26c6.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_024_51d069a6484e.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_025_5fb296583be4.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_026_1f30148044c0.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_027_c5bc86d0867d.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_028_b38438d4de46.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_029_1d54e9fe0aef.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_030_9bb0105b1e46.gif)

![](DC_DC导致EMI辐射超标案例分享_images/img_031_de88c48250d0.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_032_3b83df2d253b.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_033_db521919e8d9.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_034_aea384ea417e.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_035_f4924e7a240a.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_036_a58db91dbb3b.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_037_f0edc68b0c53.gif) ![](DC_DC导致EMI辐射超标案例分享_images/img_038_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源面包板社区。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。