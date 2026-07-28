# 8位MCU过时了吗？不，我们对他有误解

原创 硬件笔记本 2023-09-06 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/tdhGyXMPbr4vPSTQEJWGrw](https://mp.weixin.qq.com/s/tdhGyXMPbr4vPSTQEJWGrw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

近年来，随着工艺与IP的逐渐成熟，32位的MCU增长迅速，风头之劲乃至16位的MCU基本上被跳过了。现在说嵌入式MCU，要么就是8位，要么就是32位，16位的MCU产品型号屈指可数。

那么8位的MCU的情形又如何，很多嵌入式工程师都有一些误解，下面来简单分析下。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiajxtNRgxwNglRdKnzpSgRWbEBNWCeRtNRw9a1bD1Cb9wpny7icda0ibzvQXhxBYFR8icf9DyKuqlPPA/640?wx_fmt=png)

**一、8位MCU正在被淘汰**

这是最常见的误解，先说事实，根据最新的Gartner的市场报告，8位的市场营收额和增长额跟32位的相比都仅仅差几个百分点。考虑到8位的单个芯片比32位芯片要便宜很多的事实，8位的出货量其实远高于32位的。打个直观的比方，现在我们有了高铁，是不是所有传统的普快、特快火车都要立即淘汰呢?显然事实并非如此，至于原因就太多了。现实情况就是8位 MCU曾经的应用领域并不能立即用32位的MCU直接替代。

  

**二、8位处理器缺乏创新**

不少人会认为既然现在市场的宠儿是32位的MCU，厂商们是不是都没有投入研发资源在8位产品上了。这么想的人可能一想到8位的MCU，脑海中会浮现40DIP的“经典8051”的形象。事实上芯片厂商们并没有停止创新。比如CIP-51内核因为采用了一个时钟周期等同于一个指令周期的设计，瞬间将同频率的8051性能提高了12倍。国内的一些半导体厂商也有基于8051或其他8位内核的创新。

  

**三、8位处理器难以使用C/C++语言编程**

如果你了解Arduino的设计原理，这个误解就不攻自破。当然坦白讲，8位的MCU使用高级语言编程确实比32位的MCU要困难些，主要障碍就是内存地址的不统一。比如8051内核的内存地址就分为CODE、data、sfr、idata和xdata。如果涉及到banking就更复杂了。8位的PIC还有硬件Stack这样更加“非主流”的设计，但是这些障碍都可以通过工具的优化来缓解。

  

**四、8位处理器专为简单应用而生**

这个观点倒是有几分真实，但是嵌入式应用本身就是简单应用居多。嵌入式系统应用的本身特点决定了8位依然有很多用武之地。外设和编译器的进化将慢慢拓展8位处理器的应用范畴。

  

**五、8位处理器不能胜任IoT应用需求**

IoT应用不是一个单独的应用，而是一个复合应用。智能手表、智能音箱、主控制器、网关这种当然需要复杂的处理器来实现。但是IoT应用还包含大量的传感器节点、执行节点和转换节点。这种节点用低功耗的8位处理器来实现更加适合。

  

**六、8位处理器响应慢**

这个就是完全的误解了。典型的嵌入式应用中，响应速度主要跟中断响应和唤醒延迟相关。8位处理器有天然的优势(地址转换工作量小、IP单元实现门数少)，至少不输于32位的处理器。

  

**七、8位处理器的能效低于32位处理器**

曾经看过ARM公司的权威工程师写的一本书，书中观点是32位处理器的能效比高于8位的MCU，理由是32位处理器能快速处理完任务，休眠时间的比例更大，但是这个结论包含一个假设，就是任务有一定复杂度。

如果任务本身非常简单，唤醒过程的功耗也很大，那么这个假设不成立。针对不同应用场景，不能简单说8位、32位哪个能效比更高。至少在非常简单的应用中，8位的能效比要高。如果再加上单独响应，无需CPU干预的一些任务，8位的能效比甚至能高出很多。

  

**八、相同价格的32位处理器功能远强于8位处理器**

这个也有一定程度的可信度，但是不要忘记有相当大的一部分应用使用8位的MCU就已足够，在这种情况下，非要购买平均价格高一点的32位 MCU，成本就会上升。对于很多基本上标准化了的嵌入式产品来说，8位MCU还是具有一定的成本优势的。

  

**九、8位处理器设计的应用不能适应未来变化**

这是个思维角度问题，作为嵌入式程序员，更应该考虑当前的任务。不管是什么类型的MCU，如果产品形态变化了或者需求本身变化了，就要重新设计。未来谁都看不清，何必考虑那么多没有实际意义的前瞻。

  

**十、8位处理器开发工作更繁重且没有升级路径**

32位处理器的处理更加以软件为中心，可以做更多的代码复用。而8位处理器更多地利用硬件外设来完成任务。综合而言，没有绝对的差别。

只要是嵌入式处理器，升级路径都不大明确。如果你采用既有8位，又有32位的产品的厂家，你会发现很多外设都很相似。考虑到现在图形化配置外设的趋势，升级路径逐渐变得不那么重要，反正都是图形化或者脚本化来生成基础驱动代码。

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。