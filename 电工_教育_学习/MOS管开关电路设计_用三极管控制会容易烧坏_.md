# MOS管开关电路设计，用三极管控制会容易烧坏？

原创 硬件笔记本 2023-06-23 10:07 四川

> 原文地址: [https://mp.weixin.qq.com/s/d\_cd1ybVudyM3glesmsCVQ](https://mp.weixin.qq.com/s/d_cd1ybVudyM3glesmsCVQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

三极管有NPN型和PNP型，同理MOS管也有N沟道和P沟道的，三极管的三个引脚分别是基极B、集电极C和发射极E，而MOS管的三个引脚分别是栅极G、漏极D和源极S。

对于MOS管，我们在电路设计中都会遇到，那么应该如何设计一个MOS管的开关电路呢？  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_002_b2dcf68a4501.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_003_b2dcf68a4501.png)

**MOS管开关电路**

  

# 我们一般会用一个三极管去控制，如下图！  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_004_c4216fa73845.png)

MOS管开关电路

  

但是这个电路的缺点也是显而易见，由于MOS管有一个寄生的二极管，如果CD5V的滤波电容过大，或者后端有别的电压串进来，会把前端给烧坏！

电流路径如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_005_f3aafafacddd.png)

后端电流路径

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_006_6f155b080461.gif)

# **如何改善这个问题呢？**

有两个方式，一种是在后端串联二极管。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_007_179ac52516f2.png)

防止后端电压电流串扰的电路

  

优点，电路简单，BOM成本低！

缺点，二极管动态负载电阻大，特别不适合后盾负载变化大的！

  

另外一种，便是后端串联一个同规格的MOS管！

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS管开关电路设计_用三极管控制会容易烧坏__images\img_008_18b4b7bdcfa0.png)

防止后端电压电流串扰的电路

  

优点，MOS管开通电阻极小，对于后端负载电流变化不敏感。

缺点，BOM成本高！

## 

**声明：**

  

声明：文章来源硬件十万个为什么。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群