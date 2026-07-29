# 在PMOS断开的时候，输出电压Vout出现回沟现象

原创 硬件笔记本 2024-07-30 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/n-E7JAg0PLV2z0z3xlIL9g](https://mp.weixin.qq.com/s/n-E7JAg0PLV2z0z3xlIL9g)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

电路现象：PMOS断开后，输出端Vout电压先降低，后上升，再下降，随即下电波形出现回沟。（由以下电路展开）

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_002_91d3ef3543a1.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_003_d173102405df.png)

以上为PMOS开关仿真电路，其将负载换成了一个开关电路，在改变负载以后，Vout的下电波形就不正常了，这是为什么呢？

PMOS从导通到关断时，PMOS的阻抗会从接近0（导通），再到电阻无穷大（断开），这里会有一段过程，而PMOS会存在一定的阻值，负载也非恒定电阻。

在Vout下电过程中，负载获得的电压会下降到一定程度，随后可能会因为欠压突然停止工作，所需要的电流会急剧减小。

即其等效电阻突然变大，导致它获得的分压变大，这时就会出现以上的情况，Vout电压就涨上去了。也就是说，Vout的电压等于Vin在PMOS和负载上面的分压，如果负载RL突然变大，那么就有可能出现Vout突然上涨的情况。

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_004_5bae549d3c1d.png)

因此，当PMOS从导通到关断切换期间，PMOS的Vgs电压等于其Vgsth，就出现了回沟。

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_005_66bd8d6c8116.png)

那要如何解决这个问题呢？有两个选择。

1、可以让PMOS更快的关闭，例如将PMOS的g和s跨接的电容从100nF调整到10nF，回沟就基本没有了。

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_006_75e6d9568897.png)

  

2.在输出端加一个滤波电容，避免负载等效RL突然变大。

这是因为增加一个滤波电容以后，等效负载会变成原本的RL和新增加电容阻抗的并联。尽管原本的RL突然变大，由于有电容阻抗的存在，负载阻抗就不会超过电容的阻抗。

PMOS关断的瞬间，过程是比较短暂的，信号可以当作交流，因此电容在这不可以看成是 开路，而是构成总的阻抗的一部分。

只要电容值合理，基本是可以解决电容回沟问题的。（如下图）

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_007_ca13a5b4af07.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_008_8f8c22b4fa63.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\在PMOS断开的时候_输出电压Vout出现回沟现象_images\img_009_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源电子工程师笔记。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。