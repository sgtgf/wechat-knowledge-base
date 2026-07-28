# 老实说，英飞凌这份MOS管笔记，比很多培训都管用

原创 王工 硬件笔记本 2026-03-13 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/SGcs2rtUj0odRJcbMEQ5Zw](https://mp.weixin.qq.com/s/SGcs2rtUj0odRJcbMEQ5Zw)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

偶然翻到一份英飞凌官网公开的应用笔记，讲的是MOSFET栅极驱动器的PCB布局。说实话，这种官方文档平时看着枯燥，但真正吃过layout亏的老司机都知道，这里头每一句话都是拿钱换来的经验。喜欢的朋友可以在文末查看文档下载方式哦。  

01

前言

MOS管对硬件电路设计有多重要，我之前文章里已经念叨过好多回了。原理图搞得再漂亮，一版打回来废了，十有八九是layout埋的雷。特别是搞栅极驱动器这玩意儿，开关速度快、瞬间电流猛，layout要是没处理好，什么震荡、炸机、EMI超标全给你凑齐了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaejbP7cGDtuOxG1uwE1N81HVLd6iaRRBD4RwiapDiaJY2TW2Qp2VsicaJqv1ibibhH7cCJba1Voiclx6WialdPcH4v17iaMW3zrd9MuNTIE/640?wx_fmt=png&from=appmsg)

英飞凌这份文档其实内容不多，但是图文并茂的把要点知识都给你整理出来了，拿一个真实的800W服务器电源做例子，以实际案例给你讲解。咱们今天一起来看看。

02

内容简介

先来看资料中的一些简单介绍，以一个具体示例来进行讲解。

先看这个800W服务器电源的框图，整个电源的架构一目了然。PFC级、LLC初级侧、同步整流、Oring电路，每个地方用到哪种驱动器，图上进行了标注。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadT1skobsssJayHMleoAtdm6lHibt1pCRop7aoSoMT7dFsdKeQb1eyX0oiaBkZR7P54XP3gAlURpAUADa37NnOtSvMxmzs33k1QE/640?wx_fmt=png&from=appmsg)

再看主板底视图，所有栅极驱动器的位置，包括SR和Oring的位置，都给你圈出，都能实地找到。这种3D特别友好，能直观看出人家是怎么摆件的。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafwc514oic1DOyjQN9NY7y3KmSkIKVSZG5PC7QicGnWibnWVEI7uDMXOqhu2rJhjsgx0OyFzXIfejSibZibbEiagllIONdlzbtcIcrkA/640?wx_fmt=png&from=appmsg)

中间这张原理图画了黄线，标出LLC初级侧和次级侧的隔离边界。驱动PFC和LLC低边MOSFET用的是2EDN7524F这颗芯片，图上走线怎么接、外围怎么配，都有现成的参考。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadZ0uMH1ic3zgZ4dGg0m6hsskCpmADP6ozepyvEpFhOWXOPRgxcU8bNbCfAFv1sibxyZNZ2g2aKJhWr5l5U0lXgQh10CMQyd5y4U/640?wx_fmt=png&from=appmsg)

到了PCB实际布局图，就能看到SOIC8封装的驱动器周围，电阻电容怎么摆、走线怎么拐、旁路电容搁哪儿，清清楚楚。这些实打实的例子比空谈理论有用得多。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafpyLA0RiaibxOnr0ngpd1TPe8j8zqlcLruhpv5hQ253whOOfHxThdBdqt1sbhSoBQa2CGWNznak5SR9UwX4YST6R6OYABVpuhGQ/640?wx_fmt=png&from=appmsg)

这份文档虽然不长，但里面干货不少，配图也很丰富，这里就不一一截图罗列了。简单把文档里的核心内容和我的个人理解梳理一下，给感兴趣的朋友做个参考：

1、地平面尽量完整且宽。这主要是为了给噪声留一条低阻抗的路径走，别让它在板子上乱窜，同时大片的铜皮也能带走一部分热量，一举两得。

2、旁路电容必须离芯片引脚越近越好，最好是贴着芯片的电源引脚放。道理很简单，任何走线都有电感，电容如果放得远了，这条走线的电感就会把高频响应给堵住，电容等于白放。

**3、****如果PWM信号线比较长，必须在紧贴驱动器输入引脚的位置增加RC滤波器**，用来滤除长线引入的高频干扰。这东西放的位置很重要，放在别处基本没用，拦不住噪声进芯片。这个方法对于其它驱动芯片也有参考价值。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf8bmt52aUhBRVKhXB7oiamRYzqJz2lS5PFMoexDCY6mHD3uSibjLRia6xPnm2PyUjxTFpcqJsvc5CfArRIpEWWRDdvslrHCP27UY/640?wx_fmt=png&from=appmsg)

  

**4、****驱动输出到MOS管栅极的走线，必须最短、最宽**。走线短是为了减小寄生电感，防止它和电容形成振荡把管子击穿；走线宽是为了降低阻抗。

5、在驱动器电源引脚处串联一个小电阻（4-10Ω）或高频磁珠，能有效隔离驱动器自身产生的高频噪声，防止其污染整板电源。

03

如何获取完整PDF？

以上内容只是精选了部分内容进行介绍，**详细内容和图片还需参看完整PDF文档**。

如何下载《MOSFET栅极驱动器的PCB布局》，更好的学习MOS驱动设计

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|MOSFET栅极驱动器的PCB布局

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafPSaENaqn0ohbagmnDofiaoMfTfLz1QNlMUzCJ68fQ5EoxoMkkrzSRpdLM49qouqklxP04Xj4mBwmVczEZFQSkNrCxnYeo7xzc/640?wx_fmt=png&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niaffic5EqmJibKrNlVgpmyNzguhXKT0XtVGkAIyYicIXHdkE5Sy0K0Zze3L425K0LKrARibbSWvrv1FxyhfUHMr8DsNoC5iaZLd1t5kk/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅供学习交流，请勿用于商业用途。