# 遭了，我的CPU烧了！

原创 蜗牛 硬件笔记本 2024-01-22 07:51 四川

> 原文地址: [https://mp.weixin.qq.com/s/oebjeM60rjwBM8cOufwMAQ](https://mp.weixin.qq.com/s/oebjeM60rjwBM8cOufwMAQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是蜗牛兄。今天给大家分享一件工作中遇到的小事。

**事情的经过**  

公司单片机组的一个同事A，借用另一组同事B的一块主板，突然主板不工作了。他怕误操作再次伤了板子，也不敢再通电，于是先自查。先用万用表去测量，最后发现CPU核心电压1.1V对地短路，万用表蜂鸣档测量居然响了，对地阻抗只有几欧姆。

这时，他的第一反应就是遭了，我的CPU烧了！该怎么给别人还回去。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_002_1062b8664bc9.png)

最后同事B拿回去测量，发现板子又是好的，原因是同事A的连线端子松动，线没有插好，所以板子没有工作，闹了个乌龙。

  

**虽然是一件很小的事情，如果我们更深入的去想想，你会发现：**

1、同事A做了多年的单片机项目，没有接触了解过ARM或X86主板的一些基础知识。以至于1.1V对地短路就觉得是板子坏了。

2、对于工作几年的工程师，至少有点经验吧，连线没有接好，这样简单的错误不应该犯，也不应该检查不出来。  

最后咱们一起来看一下，为什么主板1.1V供电对地短路又能正常工作呢？

我们一般会外接一个AC220V转DC12V的适配器，然后再给我们的主板或者风机供电，然后12V电压会通过DC/DC转换为5V、3.3V或1.1V电压。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_003_2d03e8fd8c74.png)

+12V为适配器供电输入

+5V为USB接口供电

+3.3V为RTC，背光使能，emmc，USB HUB供电

+1.1V为CPU核心电压。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_004_360832294b1e.png)

电脑主板

大家都知道像ARM或X86之类的主板，本身是低电压，大电流。CPU芯片一般都会加散热器还有风机，因为有很庞大的数据要处理，所以芯片发热比较严重。核心电压一般都在2V以内，最大电流都是A级别的，就算1A，此时的阻抗R=U/I=2V/1A=2R，蜂鸣档肯定会响，这是正常现象。

![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_005_9aa53c3fcbd2.png)

单片机主板

像单片机这种，主要用于控制、监控和处理各种电子设备。没有大量的数据交互，所以本身功耗比较低，不通过大电流，所以供电引脚对地阻抗也比较大。

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_006_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_007_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_008_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_009_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_010_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_011_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_012_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_013_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_014_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_015_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_016_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_017_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_018_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_019_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_020_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\遭了_我的CPU烧了__images\img_021_50889e54acde.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。