# 啥是IGBT？和三极管MOS管有何区别？

原创 硬件笔记本 2024-07-20 11:31 四川

> 原文地址: [https://mp.weixin.qq.com/s/a4S0RTB3ckvQUx03NLSLiA](https://mp.weixin.qq.com/s/a4S0RTB3ckvQUx03NLSLiA)

##### ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

> 本篇文章就来聊聊IGBT以及和三极管MOS管的区别

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhzrffBEOE9y5ntiahPK4qFVTuvgibRDGUz4BAicUhccYE4ibE78HbujAp1g/640?wx_fmt=jpeg&from=appmsg)

晶体管分类图

  

# 回顾

> 在介绍IGBT之前，让我们先来回顾一下三极管和MOS管的优缺点

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEh5myjn2FvB0AetXZGApvgxfxmWW4hLONV0JBQlfUM99zj7q1OaYaZEw/640?wx_fmt=jpeg&from=appmsg)

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

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhZKRQyVKXF5iatIYziaR3ZOhdHdWKViaCzlO0WjibbISHNmlX8lWiaibApQjQ/640?wx_fmt=jpeg&from=appmsg)

  

> 请带着问题，接着往下看，相信或许你会有所收获

-   先来看看IGBT的重要性
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhiau4m3fIg8Q3S5HvJxTtaBYNgTE4whbt5O43qnGIpfy9T7ukzdERqUA/640?wx_fmt=jpeg&from=appmsg)

  

-   IGBT的优势所在
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEh4QiadMTaibPPoRCg6I2icoSiclT5B6icSMl1vwGyibibYMaw11aZ7j0moOsHw/640?wx_fmt=jpeg&from=appmsg)

IGBT的特性

显然得益于IGBT的特性，能在高电压高电流情况下工作且频率也高，这无疑在大电流/电压环境下，是不二选择

根据IGBT的特性，就可以应用在汽车逆变器上面，将发电机的交流电和电池组的直流电互相转换

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhZSkSic90rPOdxK7ZsuRl2dh0YticT0P3V5D4r1gfn7dCPN95zicq8aibkg/640?wx_fmt=jpeg&from=appmsg)

IGBT的应用

  

# IGBT工作原理

-   先来看看IGBT的符号，是不是相当于MOS管和三极管的衍生版呀？
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhraZ8HEWAy6cpQ70FMjn3rDKME4IjhReq0hww8EIrxuTh9iaDW9uErPw/640?wx_fmt=jpeg&from=appmsg)

IGBT符号

举个电动汽车例子说明，如果电调（就理解成开关））开关频率越高，那产生的PWM波也就越高，体现的是电机的转速变化越平稳

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhbfUwWNo6bB206XgHIr4au3XFewU9ibQ5GR2we8W8RSKSuTxT1ux0nyw/640?wx_fmt=jpeg&from=appmsg)

  

> 为了实现这个想法，首先得选一个合适的晶体管来做开关，那选择哪个呢？
> 
> 选MOS管？肯定不行，MOS管虽然开关频率高，但是它不耐高电压/流
> 
> 选三极管？可以试试，毕竟三极管可以耐高压/流

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhRib3sEPKsibPicGwdTj2dFjIm2Mzcv4yR6VFRibUib9dxnma74BW9ENMf8g/640?wx_fmt=jpeg&from=appmsg)

三极管当做开关

> 现在假设通过CE的电流为100A，因为CE的电流为β倍B，一般β系数为100，那么可以算出通过基极B需要的电流要达到1A，而且如果要一直工作的话，基极B就需要持续提供1A的电流，这显然功耗是很大的；而且还有一个问题就是，拿什么东西来控制三极管的基极B呢？
> 
>   
> 
> 可能会想到用单片机来控制，但是单片机的IO口输出的最大电流也就20mA，对于三极管基极所需的电流微不足道，所以是行不通的

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhXnakEzREDVMKDWTfNYYCKZAjF1xEvCK5Wy0pibFxIWxHTwKHMsibCWcg/640?wx_fmt=jpeg&from=appmsg)

单片机控制三极管

既然单片机控制不了三极管，那控制MOS管总可以吧？然后MOS管再控制三极管

> 这样一来，MOS管的优点和三极管的优点集聚在一起（电压控制、耐高电压/流、频率高功耗小）

下面举个例子说明

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhk0qlxibArVx08dqhsaxns8picxODStgby8jXicZLdtM8DXpk5O3mO0hhA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEh25UQ0TpnTw2DbFaibyJ3Pmic9GxGUdoGOp1EeJXImSJt6dBqhUDKzTzw/640?wx_fmt=jpeg&from=appmsg)

  

> 当单片机输出高电平时，MOS管导通，三极管不导通；当单片机输出低电平时，MOS管导不导通，因为加了限流电阻，流向基极电流大于1A，三极管导通

仔细想想，如果按这样的想法来构建一个新的晶体管，是不是就有以下特性：

-   耐高压
    
-   功耗低
    
-   频率高
    

这不就是我们想要的结果吗？

> 现在，我们把上面的图片简化以下（去掉限流电阻，再把NPN三极管换成PNP三极管）可以得到这样的符号

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhbSFicyMetqeHsiclPn542TRF72bA0UjHWyn9e1t5b3ibfoa8ibvPibtLh4A/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhN9NBNib9vKBR72M0dtQ2owztxIlBGVZX8vtibqVV2DpticNrBIyq5UdgQ/640?wx_fmt=jpeg&from=appmsg)

  

所以，IGBT是集两者（MOS管和三极管）于一身

# 总结

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjA1AOBmUKKzt9ib5T53BjEhricOAVXZs6EcJt3E6z3Vf2yHNMnVl3MkQE3rVPmTODAYkPOIMAsC7TA/640?wx_fmt=jpeg&from=appmsg)

区别图

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源头条小张同学。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。