# 电路设计时，三极管和MOS管作为开关管区别在哪里？

原创 硬件笔记本 2023-08-31 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/OfEoeQsAXrLFGCzKDkpsiQ](https://mp.weixin.qq.com/s/OfEoeQsAXrLFGCzKDkpsiQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

三极管有NPN型和PNP型，同理MOS管也有N沟道和P沟道的，三极管的三个引脚分别是基极B、集电极C和发射极E，而MOS管的三个引脚分别是栅极G、漏极D和源极S。电路一点通以NPN三极管和N沟道MOS管为例，下图为三极管和MOS管控制原理。  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_002_3b09561c3b0c.png)

NPN三极管与N-MOS管当开关管原理

  
  

（1）控制方式不同，三极管是电流型控制元器件，而MOS管是电压控制元器件，三极管导通所需的控制端的输入电压要求较低，一般0.4V~0.6V以上就可以实现三极管导通，只需改变基极限流电阻即可改变基极电流。

  

而MOS管为电压控制，导通所需电压一般4V~10V左右，且达到饱和时所需电压一般6V~12V左右。在控制电压较低的场合一般使用三极管作为开关管，也可以先使用三极管作为缓冲控制MOS管，比如单片机、DSP、powerPC等处理器I/O口电压较低，只有3.3V或2.5V。  
  

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_003_8d9f06e73b25.png)

（2）输入阻抗不同，三极管的输入阻抗小，MOS管的输入阻抗大；结电容不一样，三极管的结电容要比MOS管大，动作相应上MOS管要比三极管快一些；稳定性方面MOS管更优，三极管的少子参与导电，比较容易受到温度的影响，噪声较高，而MOS管是多子导电，噪声小，热稳定性好。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_004_c77e0d40ca5e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_005_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_006_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_007_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_008_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_009_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_010_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_011_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_012_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_013_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_014_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_015_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_016_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_017_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_018_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_019_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计时_三极管和MOS管作为开关管区别在哪里__images\img_020_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。