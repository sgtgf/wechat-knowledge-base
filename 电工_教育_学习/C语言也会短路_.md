# C语言也会短路？

原创 硬件笔记本 2024-07-24 07:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/WPDMoKYJyS3So85ge3DCNg](https://mp.weixin.qq.com/s/WPDMoKYJyS3So85ge3DCNg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

C语言短路现象算是C语言的基础吧，不过有时候代码写得不规范也容易引入一些bug，所以这些操作在工程师实践中尽量少用。  

虽然下面找的例子比较简单，但如果后面是其他表达式，或许你并不会那么容易分辨。并且，你可能会斩钉截铁的说，我绝对不会这样编写我的代码，但你确定的同事不会这样？你的前同事不会？

好了，下面的案例来源于网络，仅供参考:

**避坑1**

**短路现象：**

```
 a && b && c
```

**举例：**

```
//求最终a、b、c、d的值：
```

  

**执行结果：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\C语言也会短路__images\img_002_cd770801b0fc.png)

  

# **避坑2**

**短路现象：**

```
a || b || c
```

  

## **举例:**

```
//求最终a、b、c、d的值：
```

  

**执行结果：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\C语言也会短路__images\img_003_75b45758bb18.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\C语言也会短路__images\img_004_8f8c22b4fa63.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\C语言也会短路__images\img_005_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。