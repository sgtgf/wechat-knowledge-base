# LVDS顺口溜：单八单六双八双六到底是啥？

原创 硬件笔记本 2024-02-19 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/jXRvsOzr8L4889xT1W2b3w](https://mp.weixin.qq.com/s/jXRvsOzr8L4889xT1W2b3w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

  

**1**

  

**接口定义**

  

LVDS是一种低压差分信号技术接口，低压差分信号传输：输出接口利用非常低的电压摆幅（约350mV）在两条PCB走线或一对平衡电缆上通过差分进行数据的传输，采用LVDS输出接口，可以使得信号在差分PCB线或平衡电缆上以几百Mbit/s的速率传输，由于采用低压和低电流驱动方式，因此，实现了低噪声和低功耗。

  

**2  
**

  

**接口类型**

  

**a.单6位LVDS输出接口。**

这种接口电路中，采用单路方式传输，每个基色信号采用6位数据，共18位RGB数据，因此，也称18位或18bit LVDS接口。

  

**b.双6位LVDS输出接口。**

这种接口电路中，采用双路方式传输，每个基色信号采用6位数据，其中奇路数据为18位，偶路数据为18位，共36位RGB数据，因此，也称36位或36bit LVDS接口。

  

**c.单8位LVDS输出接口。**

这种接口电路中，采用单路方式传输，每个基色信号采用8位数据，共24位RGB数据，因此，也称24位或24bit LVDS接口。

  

**d.双8位LVDS输出接口。**

这种接口电路中，采用双路方式传输，每个基色信号采用8位数据，其中奇路数据为24位，偶路数据为24位，共48位RGB数据，因此，也称48位或48bit LVDS接口。

  

单路和双路：单路就是只有一路 R、G、B 三色和HS、VS、DE控制信号；双路就是有两路 R、G、B 三色和HS、VS、DE控制信号。

  

**经常碰到什么单6,双6 单8双8.如何区分呢？**

  

主要看数带 “+ /-”的这种信号线一共有几对，有10对的减2对就是双8，有8对的减2对就是双6。有5对的减掉1对是单8，有4对的减掉1对是单6。

  

总结一点就是 数了是4对为单6、 5对为单8（标清屏） 、8对为双6、 10对为双8（高清屏）。

  

下图是单8输出接口：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_002_d14df7f85bd3.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_003_c8e29dc53b30.png)

  

**3  
**

  

**应用**

  

一般来说，在开发板上，LVDS的工作原理是有一颗专门的IC，把输入的TTL信号编码成LVDS信号，在屏的一边，也有一颗相同功能的解码IC，把LVDS信号变成TTL信号，屏最终用的还是TTL信号，因为LVDS信号电平为1V左右，而且-线和+线之间的干扰还能相互抵消。所以抗干扰能力非常强。很适合用在高分辨率所带来高码率的屏上。

  

**4  
**

  

**DE、HS、VS控制信号、CLK时钟信号、**

**RGB数据信号**

  

有效数据选通信号DE、行同步信号HS、场同步信号VS、像素时钟信号DCLK和数字RGB信号这五类信号中，DE、HS、VS属于同步信号，DCLK属于时钟信号，RGB属于数据信号，它们一般都是同时出现的，且DE、HS、VS、DCLK和数字RGB信号都与像素时钟信号DCLK保持同步。

  

DCLK（RGB像素时钟信号）的作用是指挥RGB信号按照顺序传输，各电路只有在像素时钟的下降沿（或上升沿）来到时才对RGB数据进行读取

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_004_b379a7384c0a.png)

  

DE（有效显示数据选通信号），仅使用DE同步信号液晶面板，不需要输入行同步信号HS和场同步信号VS，只需要输入DE作为同步信号使用就能正常工作。液晶面板的行同步信号输入端和场同步信号输入端一般都需要接低电平，否则不能正常工作。

  

同时使用DE／HS／VS同步信号的液晶面板，需要同时输入有效显示数据选通信号DE、行同步信号HS、场同步信号VS才能正常工作。

硬件工程师及从业者都在关注我们

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_005_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_006_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_007_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_008_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_009_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_010_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_011_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_012_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_013_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_014_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_015_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_016_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_017_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_018_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_019_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\LVDS顺口溜_单八单六双八双六到底是啥__images\img_020_50889e54acde.gif)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。