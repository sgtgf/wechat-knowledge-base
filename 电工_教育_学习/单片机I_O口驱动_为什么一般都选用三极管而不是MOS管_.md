# 单片机I/O口驱动，为什么一般都选用三极管而不是MOS管？

原创 蜗牛 硬件笔记本 2021-11-08 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/vs\_hPXUV8yXT99\_wSjMPkQ](https://mp.weixin.qq.com/s/vs_hPXUV8yXT99_wSjMPkQ)

 **![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")**

**这里其实有两个问题：**

1.单片机为什么不直接驱动负载？  

2.单片机为什么一般选用三极管而不是MOS管？

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_002_fa6cf8c7a5c3.png)

图1

答：  

1.单片机的IO口，有一定的带负载能力。但电流很小，驱动能力有限，一般在10-20mA以内。所以一般不采用单片机直接驱动负载这种方式。

  

2.至于单片机为什么一般选用三极管而不是MOS管？需要了解三极管和MOS管的区别，如下：

  

①三极管是电流控制型，三极管基极驱动电压只要高于Ube（一般是0.7V）就能导通。

  

②MOS管是电压控制型，驱动电压必须高于阈值电压Vgs（TH）才能正常导通，不同MOS管的阈值电压是不一样的，一般为3-5V左右，饱和驱动电压可在6-8V。  

  

  

**我们再来看实际应用：**

  

处理器一般讲究低功耗，供电电压也越来越低，一般单片机供电为3.3V，所以它的I/O最高电压也就是3.3V。  

  

①直接驱动三极管  

3.3V电压肯定是大于Ube的，所以直接在基极串联一个合适的电阻，让三极管工作在饱和区就可以了。Ib=（VO-0.7V）/R2。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_003_c70b9c16dd63.png)

图2  驱动三极管示意图

  

②驱动MOS管

通过前面也了解到，MOS管的饱和电压>3.3V，如果用3.3V来驱动的话，很可能MOS管根本就打不开，或者处于半导通状态。

  

在半导通状态下，管子的内阻很大，驱动小电流负载可以这么用。但是大电流负载就不行了，内阻大，管子的功耗大，MOS管很容易就烧坏了。

  

所以，一般选择I/O口直接控制三极管，然后再控制MOS管。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_004_dae9eae81839.png)

图3  I/O口驱动三极管后再驱动MOS管

  

当I/O为高电平时，三极管导通，MOS管栅极被拉低，负载RL不工作。

当I/O为低电平时，三极管不导通，MOS管通过电阻R3，R4分压，为栅极提供合适的阈值电压，MOS管导通，负载RL正常工作。

  

  

为什么要这样操作呢？一定要用三极管来驱动MOS管吗？

  

那是因为三极管带负载的能力没有MOS管强，当负载电流有要求时，必须要用MOS管来驱动。

  

  

那可以用I/O口直接驱动MOS管吗？答案是可以的，但这种型号不好找，这里给大家推荐一个NMOS型号：DMN6140L-13（因为用的少，目前就知道这个型号，如果大家有知道的，可以在评论区告诉我，感谢）。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_005_d1f3ab3c0466.png)

图4  DMN6140L-13阈值电压

  

这个管子的阈值电压是1V，3.3V的时候可以完全导通，导通时的最大电流大约2.3A的样子。

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_006_99272cb3dceb.png)

图5  DMN6140L-13导通电流

  

我们再来看看，常用的NPN三极管LMBT2222ALT1G的带载能力，最大电流IC=600mA。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_007_08348e22f452.png)

图6  LMBT2222ALT1G导通电流

  

可见MOS管的驱动能力是三极管4倍，所以对负载电流有要求的都使用MOS管。  

  

  

那他们的价格相差多少呢？我在立创上搜了一下，MOS管的三极管的价格几乎是三极管的6倍。如下图：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_008_c00b081a42bc.png)

图7  DMN6140L-13价格

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_009_20027e8a068e.png)

图8  LMBT2222ALT1G价格

  

所以，在要求不高，成本低的应用场合，一般使用三极管作为开关管。  

  

今天的分享就到这里，希望对你有用。

  

  

  

  

推荐阅读

  

  

  

-   [我想成为一名硬件工程师，有没有什么比较好的方法？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486076&idx=1&sn=8ae019f32f0c94dab1b9007e91aeadc8&chksm=c309d4aef47e5db81fd104bff8da4d9b9d07120676779331592d42fe2b6d64f57f66bd9035c1&scene=21#wechat_redirect)
    
-   [原理图这样画，绝对错不了。](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486750&idx=1&sn=d14a3f626c99e4d03a1465057d295db5&chksm=c309d3ccf47e5ada4511cf89e641beaeecb699c477da97066ebc3eaf016cf87049a690792266&scene=21#wechat_redirect)
    
-   [单片机外围电路设计需要注意的十个事项](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486118&idx=1&sn=dd2334aee5ef20fe927b34c2eaa68149&chksm=c309d474f47e5d6257a68692856c0073055e4bf8bc55606d92812fa32bf989e650d46d7c1d9f&scene=21#wechat_redirect)
    
-   [硬件工程师想要的GPIO应用汇总在这里](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486478&idx=1&sn=c82c54f0282aaf7297e3162e0be10bbb&chksm=c309d2dcf47e5bcadf235b6e86971a29a4b81f2a10c4c9b23e6563724ce2ca3172087393c6f7&scene=21#wechat_redirect)  
    
      
    

  

**后台回复“****加群****”，管理员拉你入技术交流群。**

  

****觉得内容不错的话，欢迎分享，点赞，在看******![](D:\电脑文件\公众号知识库\电工_教育_学习\单片机I_O口驱动_为什么一般都选用三极管而不是MOS管__images\img_010_642a876b39bd.gif)**