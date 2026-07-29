# 形影不离的好兄弟—X电容和Y电容

原创 硬件笔记本 2024-08-03 11:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/l9lZ4DlaPRf8RFcKxyUVVQ](https://mp.weixin.qq.com/s/l9lZ4DlaPRf8RFcKxyUVVQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

_**01**_

  

**前言**

  

只要是接有220V的电路板，一般都会看见安规电容的存在，黄色的是X电容，蓝色的是Y电容。

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_002_2eec2530f16d.png)

X，Y电容一般在电路中用法如下  

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_003_1a4a47e75058.png)

  

_**02**_

  

**什么是安规电容？**

  

逐字理解‘安规电容’（无非就是符合安全规定的电容）

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_004_64743d0b0d57.png)

其中，安规电容可细分为X电容和Y电容

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_005_eb6aa81ba154.png)

电容有诸多种分类，X电容本质就是聚酯电容，Y电容本质就是瓷片电容

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_006_e3aa7509d93c.png)

聚酯电容内部介质是聚酯

瓷片电容内部介质是瓷片

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_007_d7f7ce1a8206.png)

  

_**03**_

  

**安规电容有什么作用？**

  

安规电容的作用是滤除高频干扰（这些干扰可能来自雷电产生的干扰或插拔产生的干扰）

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_008_82148ead8ef8.png)

X电容是接在火线和零线之间

Y电容分别是接在火线和地线之间，零线和地线之间

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_009_b5117f309032.png)

可以看出，X电容在电路中起到差模干扰的作用，而Y电容起到共模干扰的作用

先来看X电容，假如现在火线上出现了高频的干扰信号，此时的流向如图所示

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_010_22139f33f57d.png)

  

经过X电容之前，和之后的高频信号的幅度没变，但是相位相差180度

所谓‘差模’就是相位相差180度

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_011_372e466440ff.png)

再看Y电容，火线和零线上的高频信号的幅度和相位都是一样的（也就是同步）

所谓‘共模’就是幅度相位频率都一样

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_012_29264f575242.png)

由于火线和零线的干扰是一样的，此时X电容就不起作用

因为可以把地线看成零电位，又由于电势差的存在，所以可以在火线和地线之间连接电容，这样就可以把高频信号滤除掉，零线也是同样的

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_013_a643148f2d14.png)

  

_**04**_

  

**可以用其它电容代替安规电容吗？**

  

> 答案是不可以的，因为其它电容有正负之分，接反的话，可想而知，而安规电容没有正负之分

另外X电容不能替代Y电容，因为Y电容的耐压值比X电容大

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_014_bc1862935006.png)

  

_**05**_

  

**总结**

X电容用于滤除差模干扰

Y电容用于滤除共模干扰

X电容比Y电容容值大，但耐压值比Y电容小

![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_015_e119ccb9e5f3.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\形影不离的好兄弟_X电容和Y电容_images\img_016_4700b023e565.jpg)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。