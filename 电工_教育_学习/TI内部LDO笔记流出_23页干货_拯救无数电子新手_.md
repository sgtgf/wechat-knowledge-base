# TI内部LDO笔记流出！23页干货，拯救无数电子新手！

原创 王工 硬件笔记本 2025-09-16 08:14 四川

> 原文地址: [https://mp.weixin.qq.com/s/95dQgt-2x2HpJsYFcpsm4w](https://mp.weixin.qq.com/s/95dQgt-2x2HpJsYFcpsm4w)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

在我们设计产品时，电源方案的选择尤为关键。开关电源和LDO是最常见的两种类型。相信大家已经知道一个基本原则：在低压差、对纹波要求高的场合，LDO往往是首选，用起来简单又省心。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfNb9XkEKXHAzklOshmMficuqk31n1MMqIvJTanl4dg0cqx7IQP1RKpxKw/640?wx_fmt=png&from=appmsg)

不过LDO的学问远不止这些。值得一提的是，TI的《LDO基础知识》文档，从压降概念到电容选型，从热管理到噪声抑制，涵盖了设计中的各项关键要点，非常适合工程师参考。无论是新手入门还是经验深化，都值得一读。

文末附23页完整PDF电子版获取方式。

  

011

LDO是怎么工作的？

想象一下，你正在给精密电路供电，输入电压可能波动，负载也在变化，但输出电压却稳如磐石——这背后，正是LDO在默默调节。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfN8oXr7aEuic32fdXnanqVTGlGtdibTl6P7RS1vZe6GI4Xbzo8ibwdib52WQ/640?wx_fmt=png&from=appmsg)

它的核心是三部分协作：

-   **误差放大器**：像是一位敏锐的观察者，时刻对比实际输出和理想电压值；
    
-   **调整管（常为MOS管）**：相当于一个可精细调节的阀门，根据指令改变开度；
    
-   **反馈电阻**：负责将输出电压的真实情况“报告”回误差放大器。
    

它们共同构成一个闭环控制系统，让电压稳定在目标值。

  

021

压降：先从最基础的概念讲起

压降（Dropout Voltage）可能是LDO最重要的参数之一。它指的是：输入电压必须比输出电压高多少，LDO才能正常稳压。

举个例子，你希望输出3.3V，LDO的压降是200mV，那么输入至少得在3.5V以上。如果输入电压掉到3.4V，输出就会不稳，随着输入一起下降——这时候LDO已经“撑不住”了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfN2pfaQaenKT8uibkSmpNsuzickpgVBMrUVNvUfG4Zz4uRN3aIP9qDEt0Q/640?wx_fmt=png&from=appmsg)

  

所以在选型时，一定要确保在最恶劣条件下（比如电池低压状态），输入电压仍然高于输出电压加上压降。

而压降值的大小，很大程度上是由LDO的内部架构决定的，比如是PMOS、NMOS，还是带偏置电压的架构。这些都直接影响它的适用场景。

  

031

输出电容：需考虑降额使用

很多工程师都知道LDO输出端要接电容，但常常忽略：电容上标的值，并不等于实际能用的值。

你买了一个标称10µF的电解电容，但由于：

-   **直流偏置效应**：电压加上去，电容值可能下降；
    
-   **温度影响**：高温环境下容量会降低；
    
-   **本身误差**：通常有±20%的偏差；  
      
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfNW3JZmGfdKTzXGNIM8vuia7P68NUe3iaHeib4twl3XaCLITLk0Z4RzTicYg/640?wx_fmt=png&from=appmsg)
    

最后实际可用容量肯定到不了10uF。如果没留够余量，系统稳定性可能会出问题。

所以输出电容的选择，一定要考虑直流偏置、温度和工作环境，谨慎降额使用。

  

041

发热：要尽可能降低

LDO的原理决定了它会发热，发热量由一个简单的公式决定：

**功耗 = (输入电压 - 输出电压) × 输出电流**

举个例子，如果压差3V，电流500mA，那么功耗高达1.5W——这足以让一个小小的LDO迅速升温。一旦芯片结温超过典型值125°C，就会触发过热保护，直接停止输出。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfN1p25DTbEHtnJnS7ibXc3B8A1nkR3EGe0FH3oAzdBFXvX3snBmeQrAwA/640?wx_fmt=png&from=appmsg)

改善散热的方式包括：

-   选用散热性能更好的封装；
    
-   在PCB上大面积铺铜帮助导热；
    
-   在输入前端串接电阻分担部分功耗；
    
-   布局时远离其他发热元件。
    

  

051

静态电流

你有没有遇到过这种情况：设备没怎么用，电池却很快没电了？问题可能出在LDO的静态电流（IQ）上。

静态电流指的是LDO在空载或待机状态下自身消耗的电流。对于智能手表、遥控器、IoT设备等长期待机的产品来说，这个参数至关重要。现在优秀的LDO静态电流可以做到1µA以下，搭配“使能关断”功能，能极大延长电池寿命。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfNOkTVLKVz2UED5n5PX2HjQHFSOF754KcAIqZ49DfKKqCmNI7jOFTic2g/640?wx_fmt=png&from=appmsg)

  

061

保护功能

一个好的LDO不应该只是稳压，还要能保护自己和系统。常见的保护包括：

-   **过流保护**：输出短路时限制电流，防止烧毁；
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfNzAImCI7V23cdguTBs1b2ibn8RzW4VM4tDjYiaI17dgNNFqWkTT5HxECQ/640?wx_fmt=png&from=appmsg)

  

-   **反向电流保护**：
    
    在多数LDO中，电流只能从输入流向输出。但如果输出电压意外高于输入，电流就可能反向流动，穿过内部体二极管，造成损坏。
    
    防止方法包括选用自带防反灌功能的LDO，或者在输出与输入之间跨接一个低压降的肖特基二极管。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfNRhgice9Zlc6sClSEYOB8yq6iaoO6C9IaENIvJWtmTdY0vjPCWmslWo3A/640?wx_fmt=png&from=appmsg)

-   **过热保护**：温度过高时自动关断。
    

这些都是系统可靠性的重要保障。

  

这份资料里面还讲到了电源抑制比（PSRR），PSRR越高，说明LDO对输入电源中的噪声抑制能力越强。如果你前端是开关电源，或者系统中有高频噪声源，就一定要关注PSRR这个参数。

LDO自身也会产生噪声，主要来自内部基准电压源。如果你用它为模拟电路、音频Codec或高精度传感器供电，就应选择低噪声型号，有时还可外接“前馈电容”进一步抑制噪声。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjKthZhKqLPgAUyibbaicjrfNSdicuKuLFs6q8IbatV3mB46VsbcX4Dq7fHJfW6zfa3LZnHGnTTfVicxg/640?wx_fmt=png&from=appmsg)

  

071

******PDF电子版获取方式******

LDO看似简单，却影响着系统的效率、稳定性和寿命。希望这次的分享能让你下次选型时更加从容。  

如何下载《LDO基础知识》，更好的学习LDO相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|LDO基础知识

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhKj4QyFFCdZPEtVvG617zbyKggL1um4DAY7pkjtSKqae8pzXdcBExxzxaWu4UJ10g6pykwsWWsPg/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhKj4QyFFCdZPEtVvG617zbgsGkK9Yt92ZiaiccgVfSlAric04UZnedibk2OicNEia4U9jkeDRInWq7gYuQ/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。