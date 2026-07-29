# DCDC导致EMI辐射超标整改案例分享

原创 硬件笔记本 2023-06-13 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/cfw4sLx5hu4OhRTN0CYZ8Q](https://mp.weixin.qq.com/s/cfw4sLx5hu4OhRTN0CYZ8Q)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

分享一个EMI整改文档，对于EMC来说，接触的案例越多，整改的成功率就越高，整改的方法也越多，从案例中吸取教训，总结经验，避免设计中出现同样的问题。

  

注意：按照文档描述，从下面两张图片可以看出470MHz和940MHz(二次谐波)左右，这两个频点的功率非常高，可能该产品是一款无线产品，对于主频--有意辐射频率来说是有豁免权的，所以只需要注意200MHz之前的频段，由于频谱超标带宽较宽，可以肯定非时钟、晶振辐射超标引起，几乎肯定辐射源在电源了，不过最后的结果，电源部分虽然PASS了，但是后面又引起了其他的频点超标，不知道为什么也能够PASS，可能不关心200MHz之后的频点，这里不太清楚，大家主要看电源部分辐射超标的整改方法即可。个人观点，仅供参考！

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_002_d572792faed3.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_003_f1353e16dde6.png)

  

  

以下是文档部分截图。

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_004_15140f7207d8.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_005_3c2453f01029.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_006_4158bc2af404.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_007_5a38358a32d8.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_008_545a8228108c.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_009_7c5c1e9397f3.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_010_a141d8f6a0d5.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_011_17f2e4547753.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_012_b3459477aede.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_013_cfa06cdd20ad.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_014_dd66488bba7b.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_015_16ef1bc5fb06.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_016_2f95aed305b7.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_017_6230fd301ebc.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_018_321fd111ae14.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_019_3df37f5ef73b.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_020_09ada709ddb4.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_021_ddba6324ec26.png)

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\DCDC导致EMI辐射超标整改案例分享_images\img_022_0f9d05c1ae00.png)

  

文章来源：https://mp.weixin.qq.com/s/qb\_Vt\_EzlA6cF-Rl8nCvYg

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。