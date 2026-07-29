# 啥是IGBT？和三极管MOS管有何区别？

原创 硬件笔记本 2024-07-20 11:31 四川

> 原文地址: [https://mp.weixin.qq.com/s/a4S0RTB3ckvQUx03NLSLiA](https://mp.weixin.qq.com/s/a4S0RTB3ckvQUx03NLSLiA)

##### ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

> 本篇文章就来聊聊IGBT以及和三极管MOS管的区别

![](啥是IGBT_和三极管MOS管有何区别__images/img_002_e28f1338124e.jpg)

晶体管分类图

  

# 回顾

> 在介绍IGBT之前，让我们先来回顾一下三极管和MOS管的优缺点

![](啥是IGBT_和三极管MOS管有何区别__images/img_003_f981f511a0f0.jpg)

优缺点对比图

我们知道了这两者的优缺点，就可以根据不同的场景来挑选这两个晶体管了

> 比如在要求小电流小电压且开关频率高的情况下，首选MOS管
> 
> 在要求大电流的情况下可以选择三极管

但是呢，这两者都有共同的缺点——功耗高

能不能将这两者优点都集聚在一起（电压控制、导通电阻小、功耗低）而且还能在大电流/电压环境下工作呢？

这就不得不介绍本文的主角了——IGBT

  

# 认识IGBT

学一个东西，带着疑惑去学，自然学的明白

![](啥是IGBT_和三极管MOS管有何区别__images/img_004_c21779fd432b.jpg)

  

> 请带着问题，接着往下看，相信或许你会有所收获

-   先来看看IGBT的重要性
    

![](啥是IGBT_和三极管MOS管有何区别__images/img_005_166b1ed77d07.jpg)

  

-   IGBT的优势所在
    

![](啥是IGBT_和三极管MOS管有何区别__images/img_006_44bbcf7e77e4.jpg)

IGBT的特性

显然得益于IGBT的特性，能在高电压高电流情况下工作且频率也高，这无疑在大电流/电压环境下，是不二选择

根据IGBT的特性，就可以应用在汽车逆变器上面，将发电机的交流电和电池组的直流电互相转换

![](啥是IGBT_和三极管MOS管有何区别__images/img_007_ab4f5f45c15b.jpg)

IGBT的应用

  

# IGBT工作原理

-   先来看看IGBT的符号，是不是相当于MOS管和三极管的衍生版呀？
    

![](啥是IGBT_和三极管MOS管有何区别__images/img_008_c2b8a97a803b.jpg)

IGBT符号

举个电动汽车例子说明，如果电调（就理解成开关））开关频率越高，那产生的PWM波也就越高，体现的是电机的转速变化越平稳

![](啥是IGBT_和三极管MOS管有何区别__images/img_009_c28f830bc611.jpg)

  

> 为了实现这个想法，首先得选一个合适的晶体管来做开关，那选择哪个呢？
> 
> 选MOS管？肯定不行，MOS管虽然开关频率高，但是它不耐高电压/流
> 
> 选三极管？可以试试，毕竟三极管可以耐高压/流

![](啥是IGBT_和三极管MOS管有何区别__images/img_010_44d3961bb64a.jpg)

三极管当做开关

> 现在假设通过CE的电流为100A，因为CE的电流为β倍B，一般β系数为100，那么可以算出通过基极B需要的电流要达到1A，而且如果要一直工作的话，基极B就需要持续提供1A的电流，这显然功耗是很大的；而且还有一个问题就是，拿什么东西来控制三极管的基极B呢？
> 
>   
> 
> 可能会想到用单片机来控制，但是单片机的IO口输出的最大电流也就20mA，对于三极管基极所需的电流微不足道，所以是行不通的

![](啥是IGBT_和三极管MOS管有何区别__images/img_011_416b26d42c78.jpg)

单片机控制三极管

既然单片机控制不了三极管，那控制MOS管总可以吧？然后MOS管再控制三极管

> 这样一来，MOS管的优点和三极管的优点集聚在一起（电压控制、耐高电压/流、频率高功耗小）

下面举个例子说明

![](啥是IGBT_和三极管MOS管有何区别__images/img_012_0d08bc0e074f.jpg)

  

![](啥是IGBT_和三极管MOS管有何区别__images/img_013_9f1ef6182ae8.jpg)

  

> 当单片机输出高电平时，MOS管导通，三极管不导通；当单片机输出低电平时，MOS管导不导通，因为加了限流电阻，流向基极电流大于1A，三极管导通

仔细想想，如果按这样的想法来构建一个新的晶体管，是不是就有以下特性：

-   耐高压
    
-   功耗低
    
-   频率高
    

这不就是我们想要的结果吗？

> 现在，我们把上面的图片简化以下（去掉限流电阻，再把NPN三极管换成PNP三极管）可以得到这样的符号

![](啥是IGBT_和三极管MOS管有何区别__images/img_014_3d806e44baf0.jpg)

  

![](啥是IGBT_和三极管MOS管有何区别__images/img_015_74aa4435917d.jpg)

  

所以，IGBT是集两者（MOS管和三极管）于一身

# 总结

![](啥是IGBT_和三极管MOS管有何区别__images/img_016_b5d317bec030.jpg)

区别图

![](啥是IGBT_和三极管MOS管有何区别__images/img_017_8f8c22b4fa63.jpg)![](啥是IGBT_和三极管MOS管有何区别__images/img_018_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源头条小张同学。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。