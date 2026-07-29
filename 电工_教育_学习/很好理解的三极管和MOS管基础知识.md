# 很好理解的三极管和MOS管基础知识

原创 硬件笔记本 2023-10-01 19:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/YWyKKG84iH-ftsFUcXSwGA](https://mp.weixin.qq.com/s/YWyKKG84iH-ftsFUcXSwGA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_002_051f586768a6.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_003_beac6699a637.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_004_a2c0d02a85db.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_005_d7297fab8296.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_006_a16fbcd3d162.png)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_007_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_008_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_009_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_010_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_011_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_012_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_013_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_014_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_015_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_016_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_017_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_018_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_019_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_020_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_021_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\很好理解的三极管和MOS管基础知识_images\img_022_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。