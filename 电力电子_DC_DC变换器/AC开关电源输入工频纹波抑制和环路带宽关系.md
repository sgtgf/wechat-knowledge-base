# AC开关电源输入工频纹波抑制和环路带宽关系

原创 电路一点通 2025-01-20 12:14 广东

> 原文地址: [https://mp.weixin.qq.com/s/Z\_zgGSqrAnHx8pnQlpf9mw](https://mp.weixin.qq.com/s/Z_zgGSqrAnHx8pnQlpf9mw)

调试电源时，如输出的工频纹波大，如驱动大小波，如何优化设计，至少知道该那个参数才能修正，这块就需要我们思考，究竟其原理是什么？  

这块与环路设计强相关，环路设计是电源设计关键环节，我们教科书上利用磁件的伏秒平衡能量守恒或者电容安秒平衡，导到的直流传递函数函数，均是直流量，没有频率的因子，实际输入输出为直流加扰动的小信号分析，环路设计令很多同学望而却步，因为需要很多基础知识，如拉氏变换，传递函数，对数坐标波特图，自动控制原理稳定性等。需要慢慢消化吧。

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

回到我们题目 问题：开关电源输入纹波抑制和环路带宽的关系是什么？

是不是我的带宽越大，输入纹波噪声抑制越明显？答案是的，为什么呢？

1、环路设计目的：我们设计电源，希望其在输入电压和负载，温度变化时能够自动修正，处于输出电压或者电流闭环稳定状态，不至于风春草动就振荡无法工作了，至少抵御外界干扰是收敛稳定的；

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_001_7f0042e0af09.jpg)

稳准狠

另外希望带宽大，动作灵敏，有负载变化，立马做出反应，而不是很木；这就是快速；

还有一个是希望准确，从输出电压看，经过多个闭环过程调整，能够使得电压稳压精度达到基准电压，在基准电压基础上有个小的纹波；这里的纹波一个是LCR冲放电导致，这就是我们常说的闭环控制评价三要素：稳准狠

狠快，当让不是说有的都需要快，但是准和稳是必须要的，准是更高的直流增益，稳是相位大于30至少，增益至少有-10db以上衰减；狠快实际是有很高的带宽，而我们一般补偿后希望闭环GH有-1斜率低通滤波器的效果，所以带宽大和低频增益大是一个意思，所以还是希望狠准，狠稳；就是这么个意思；

2、输入的工频纹波，我们如何抑制工频纹波呢？

如PFC高压400V，有+/-10V波动，我如何设计LLC环路使得纹波得到有效的抑制呢？

那就要看闭环输入对输出的传递函数。

如图，我们研究环路，省去变压器变比，认为1:1的buck拓扑去看这个事情，相当于VO/Vin传递函数

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_002_51106097ba92.jpg)

buck 闭环

我们知道Vo/vin=D，这是直流表达，假如有小的vin波动，那就是频率的函数

开环Gs=D\*1/LC/（S^2+1/RC+1/LC），双重极点构成的低通滤波器

假如我反馈为1:1的反馈，也就是说VO=VC，D=VC/VRAMP

其Ga\*GS=Vramp/vin\*D\*1/LC/（S^2+1/RC+1/LC）HS=1

所以闭环传递函数为vo/vin=1/（1+Ga\*GS），由于GaGa>>1,所以VO衰减到了1/（Ga\*Gs）

如PFC母线电压，400V，+/-10V输入纹波，锯齿波为4V。没有补偿网络时，其经过前向D衰减和反馈占空比VC/vramp衰减，假如D=0.2，输出是80V，这是纹波衰减为1/5，也就是说经过第一次衰减为+/-2V，然后再经过一个闭环衰减4/400=1/100;+/-0.02V，也就是20mv，好像还行。纹波经过了500倍衰减；

而一般我们HS不可能是1的，我们会设计更大的低频积分Fp0，如我们补偿之后的穿越频率为Fcross,假如为10K,我们知道整个补偿后的GH低频增益会更大Fcross/100HZ=10倍

HS助力了10倍的衰减，由此可以看到穿越点越高，也就是低频增益越大，也就是我们的积分的RC越小，越远离原点，越获得的增益越大，对于纹波的抑制越明显

经过这次衰减后，纹波书案件5000倍，也就是2mv了；

3、所以我们希望工频干扰越小越好，怎么做呢？

一个是选择比较三角波小的控制器，一个是将积分环节右移使得补偿低频增益大，都可以抑制输入纹波向输出的传递；

很多同学可能听的云里雾里的，这块需要有环路基本知识，你只需要记住，

将积分环节的增益搞大，也就是fp0远离原点设计，就好用就好了，后续可以结合实际体会。

******进大家庭⭕圈探讨回复:****** ******交流******

******![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_003_dc9b39eaee8a.other)******

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_007_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_005_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_006_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_004_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC开关电源输入工频纹波抑制和环路带宽关系_images\img_008_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)