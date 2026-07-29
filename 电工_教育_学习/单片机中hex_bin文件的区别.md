# 单片机中hex、bin文件的区别

原创 硬件笔记本 2024-04-20 10:52 四川

> 原文地址: [https://mp.weixin.qq.com/s/foqTASlnu6Q\_ece26kt4gA](https://mp.weixin.qq.com/s/foqTASlnu6Q_ece26kt4gA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

单片机程序编译之后，除了生成hex文件之外还生成了bin文件，实际它们都是单片机的下载文件，下文介绍它们的区别。

  

hex文件

hex文件包含地址信息。

  

在用ISP方式烧写程序时，有这样的经验：

-   选择单片机型号
    
-   选择串口号
    
-   设置波特率(或者默认)
    
-   选择下载的文件
    
-   点击下载按钮下载
    

  

经过这几步后，程序下载工作就完成了，在以上的步骤中我们并没有选择要把程序下载到单片机的哪块内存中，即不需要设置地址。因为HEX文件内部的信息已经包括了地址。

  

单片机一般是下载hex文件。

  

**bin文件**

bin文件格式只包括了数据本身，没有包含地址。烧写bin文件的时候，用户是一定需要指定地址信息的。  

  

所以在下载bin文件时需要选择内存的起始地址和终止地址，即要把bin文件下载到指定的内存空间。  

  

通常需要指定程序内存地址的芯片为ARM芯片和DSP芯片。

  

**文件大小**

对于bin文件，通过右键属性查看到的文件的大小就是数据的实际大小。

  

而对hex文件而言，你看到的文件大小并不是实际的数据的大小。一是因为hex文件是用ASCII来表示数据，二是因为HEX文件本身还包括别的附加信息。

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_002_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_003_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_004_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_005_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_006_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_007_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_008_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_009_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_010_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_011_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_012_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_013_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_014_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_015_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_016_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机中hex_bin文件的区别_images\img_017_50889e54acde.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。