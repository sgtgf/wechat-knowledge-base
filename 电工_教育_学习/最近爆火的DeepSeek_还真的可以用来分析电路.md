# 最近爆火的DeepSeek，还真的可以用来分析电路

原创 王工 硬件笔记本 2025-01-07 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/xTb\_h50j4FhKGYmGCZBWTQ](https://mp.weixin.qq.com/s/xTb_h50j4FhKGYmGCZBWTQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。

最近网上爆火的一款AI工具DeepSeek，风头逼近chatgpt，我马上就来体验了一下，感觉很不错，还可以用来分析电路，附文末！  

AI工具现在好像也挺多的，像什么豆包，文小言，KIMI之类的，有点眼花缭乱的感觉，我也没有仔细研究过，但DeepSeek怎么就突然火了起来呢？  

**有几点优势不得不提**

**一、它是开源的。**意味着全球的开发者都可以免费使用和测试它，促进了行业的进步。开源的好处有以下几点：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhpYph1xo7IyGIjRnpPds11hTF8mT6qrkGbUoA3hzlmDjuwl1FQCazEB7AUVF42atnAZJTVGrvDAg/640?wx_fmt=png&from=appmsg)

**二、它是咱们国****产的。**在AI大模型领域，比较火的好像就是ChatGPT之类的，DeepSeek据说能与之抗衡，在逻辑推理等各个方面都碾压同行。

**三、性价比高。**被称为 “AI 界的拼多多”，促使其他科技巨头也纷纷开始降低其 AI 模型的价格。

  

再来说一下这家公司，公司位于浙江省杭州市，于2023年7月17日成立，到现在才一年多，可见其创业团队有多强大。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhpYph1xo7IyGIjRnpPds11NO7bMKdz1WVjNiaFf95EDZoaudYjqvbVPsRCrlmiaCWpeuibDaa2LH8Dg/640?wx_fmt=png&from=appmsg)

DeepSeek的创业团队主要由年轻且充满活力的应届生和在读生组成，特别是来自清华大学和北京大学的应届生。团队的核心成员包括梁文锋、高华佐、曾旺丁等，他们在模型架构和算法创新方面做出了重要贡献。

  

以下是我上传了一张电路图，让DeepSeek帮忙分析

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhpYph1xo7IyGIjRnpPds11aQRDeLMse0L2X2bqMib6j4UIYEFXuyqcM08qEibqxpkkYGDKmJia69zpw/640?wx_fmt=png&from=appmsg)

  

截图效果有点差，为了大家看得更清楚，所以我就直接复制了它的解答：  

* * *

### 元件分析：

1.  **VCCin 和** **VCCout：**
    

-   **VCCin**：输入电源正极。
    
-   **VCCout**：输出电源正极。
    

3.  **R1**：
    

-   电阻，用于限流或分压。
    

5.  **D1**：
    

-   二极管，可能是用于保护或整流。
    

7.  **S3**：
    

-   开关，用于控制电路的通断。
    

9.  **Q1 (IRFR024N)**：
    

-   N 沟道 MOSFET，用于开关或放大信号。
    

11.  **MMBZ5240BLT1G**：
     

-   稳压二极管（Zener 二极管），用于电压调节或保护。
    

13.  **GND**：
     

-   接地，电路的参考电位点。
    

* * *

###   

### 电路功能推测：

1.  **电源输入与输出**：
    

-   输入电源通过 VCCin 进入电路，经过处理后从 VCCout 输出。
    

3.  **MOSFET 控制**：
    

-   Q1 (IRFR024N) 可能用于控制电路的开关状态。当 S3 闭合时，MOSFET 导通，电路工作；当 S3 断开时，MOSFET 截止，电路停止工作。
    

5.  **稳压保护**：
    

-   MMBZ5240BLT1G 是稳压二极管，可能用于限制输出电压，防止过压损坏后续电路。
    

7.  **二极管作用**：
    

-   D1 可能是用于防止反向电流或提供反向电压保护。
    

9.  **电阻作用**：
    

-   R1 可能用于限流或与稳压二极管配合调节电压。
    

* * *

###   

### 电路工作流程：

1.  **输入电源**：VCCin 提供电源。
    
2.  **开关控制**：S3 控制 MOSFET Q1 的导通与截止。
    
3.  **稳压输出**：MMBZ5240BLT1G 确保输出电压稳定。
    
4.  **输出电源**：VCCout 提供稳定的电源给后续电路。
    

* * *

###   

### 注意事项：

-   **MOSFET 驱动**：确保 MOSFET 的栅极电压足够高以完全导通。
    
-   **稳压二极管选择**：根据需要的输出电压选择合适的稳压二极管。
    
-   **散热考虑**：如果电流较大，MOSFET 和稳压二极管可能需要散热措施。
    

  

看到它的分析后，可以说基本原理都差不太多，可能这个电路本身比较简单吧，对于一些刚入门，或者想提高工作效率的同学来说非常友好。  

**操作方法**  

登录官网 chat.deepseek.com 即可与最新版 V3 模型对话，在右下角直接上传电路图，然后输入请帮忙分析之类的话，就可以了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhpYph1xo7IyGIjRnpPds11o36t7w854gniaJdJwsI7UeibZr5iaAaupNdgDymiaLiblzFKJ3nLaZbb4JA/640?wx_fmt=png&from=appmsg)

文章参考来源：  

https://www.stcn.com/article/detail/1480935.html

https://news.sina.cn/ai/2024-12-27/detail-ineawxxr5737740.d.html?pagetag=1

https://baijiahao.baidu.com/s?id=1820416672677804227&wfr=spider&for=pc

  

**推荐阅读**（点击图片直接进入）

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

  

[![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjp9yy0z2QDvC7iaeHMB8Plb72fjzFv31icQfEKicFLricceMych76njNhNG0hjLDic7xB2vBr1mf0hTBA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=MzkwMzI4MTA4NA==&mid=2247498828&idx=1&sn=e91fc5514f5fb14ed26a6ba65a0dd795&scene=21#wechat_redirect)

  

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。