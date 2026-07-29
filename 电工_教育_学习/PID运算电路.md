# PID运算电路

原创 硬件笔记本 2024-04-12 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/BTqhoZqJPBWWxQNG0qsjUA](https://mp.weixin.qq.com/s/BTqhoZqJPBWWxQNG0qsjUA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

PID算法是一种十分经典的控制器算法，在绝大多数自动控制系统中都会用到，其数学表达式：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_002_8ffe6266c2e6.png)

  

使用运算放大器可以搭建出很多有意思的电路，今天这里介绍我们在自动控制系统中的PID运算电路，在此之前，先介绍几个使用运放搭建的基础电路：

1、比例运算

如图1所示，该电路是反相比例运算放大电路，其公式为：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_003_8496eff5054e.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_004_f1e320e2f314.jpg)

图1

  

2、积分运算

如图2所示，该电路是积分运算电路，其公式为：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_005_e78a225862d8.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_006_5109c0e0b3f1.jpg)

图2

  

3、微分运算

微分运算与积分运算互为逆运算。如图3所示，该电路是微分运算电路，其公式为：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_007_abce67b19a3d.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_008_368db965fed9.jpg)

图3

  

4、PID运算

重写PID数学表达式：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_009_a336e9261f6d.jpg)

  

从该式可知，PID由比例、积分和微分三种运算之和。据此，可以将上面提到的三种电路整合在一块就可得到PID调节器，如图4所示，从中可推出公式：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_010_d3d2f4a946d2.jpg)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_011_cf8d1e35b87c.jpg)

图4

  

这个PID调节器电路在模拟电源的环路中经常用到，其实在实际项目中，更常用到的是PI调节器，这时只需要将C1移除即可。如果要想使用PD调节器，只需将R1移除。

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_012_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_013_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_014_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_015_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_016_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_017_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_018_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_019_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_020_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_021_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_022_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_023_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_024_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_025_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_026_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\PID运算电路_images\img_027_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。