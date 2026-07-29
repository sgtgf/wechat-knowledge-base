# Buck风扇驱动电路

原创 硬件笔记本 2024-07-25 07:42 四川

> 原文地址: [https://mp.weixin.qq.com/s/ETdiZ7Dwm0GAyw137RqEhw](https://mp.weixin.qq.com/s/ETdiZ7Dwm0GAyw137RqEhw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

传统的风扇驱动电路采用三极管直接降压方式，将电压差直接损耗在三极管上，这种方式具有直流驱动、电压波动小等优点，但是效率低。如输出风扇电压为9V，输入VCC\_FAN为14.5V，则效率为9V/14.5V=62%，而Buck电路能够将效率提高到90%以上，FAN损耗大大降低，有助于提高模块的整机效率。

![](D:\电脑文件\公众号知识库\电工_教育_学习\Buck风扇驱动电路_images\img_002_ae9ddb604223.jpg)

图1 主电路原理图

很多人对上图中的Buck circuit电路很疑惑，为什么是这种形式呢？跟传统的Buck电路不一样啊？传统的Buck电路及两种模态的工作过程如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\Buck风扇驱动电路_images\img_003_911ba5f9df81.jpg)

传统的Buck电路

![](D:\电脑文件\公众号知识库\电工_教育_学习\Buck风扇驱动电路_images\img_004_c86ef75ae843.jpg)

传统的Buck电路两种模态的工作过程

相比于传统电路，我们的更改为：

① 开关管Q由正母线挪至负母线；

② 续流电感由正母线挪至负母线。

为什么要这样更改呢？首先，如果采用传统的Buck电路，则存在如下问题：

① 开关管由于在正母线，因此驱动需要采用浮驱技术，驱动电路更复杂；

② 在Buck工作过程中，电感始终处于充电、放电状态，因此，其两端的电压始终是变化的：开关管导通充电时，VL=Vin-Vo；开关管断开，电感开始续流时，VL=Vo。因此，电感两端的电压在一个周期始终处于两种电压状态切换中（CCM态下）。由此，输出电容两端的电压也会跟着相应的变化，尽管电容两端的电压差保持稳定，但这样带来了电压采样麻烦和电容输出电压纹波增加的风险，较大的纹波可能会对风扇的寿命产生极大的影响。

  

采用我们优化后的新电路，则可以轻松解决以上两个问题：

① 开关管对地驱动，驱动电路简单；

② Buck电感置于负母线，输出电容两端电压均是稳定电平（电容电压作为被控对象，电压稳定），便于采样和减小输出电压纹波；

③ 而且，其两种工作模态跟老Buck电路一样，电路功能一样，两种工作模态如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\Buck风扇驱动电路_images\img_005_64c067173d63.jpg)

由于输出风扇电压是浮地的，因此，采样电路需要浮采或差分采样。在我们的电路里，我们采用了对地差分采样，即电容两端的电压分别对AGND采样，然后再作差分，即可得电容电压。由于电容正电压为VCC\_FAN，而我们的VCC\_FAN作为辅助电源的被控电压，稳定的保持在14.5V，因此，不需要对该电压进行采样，只需要对电容负电压FANGND进行采样即可，最终通过后台软件计算出风扇电压Vfan=14.5V-FANGND即可。

![](D:\电脑文件\公众号知识库\电工_教育_学习\Buck风扇驱动电路_images\img_006_8f8c22b4fa63.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\Buck风扇驱动电路_images\img_007_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源艾伊电源。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。