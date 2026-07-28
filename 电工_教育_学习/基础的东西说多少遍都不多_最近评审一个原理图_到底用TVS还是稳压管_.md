# 基础的东西说多少遍都不多，最近评审一个原理图，到底用TVS还是稳压管？

原创 王工 硬件笔记本 2026-04-08 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/JWSvviLGwsfr-ik3AIIoSA](https://mp.weixin.qq.com/s/JWSvviLGwsfr-ik3AIIoSA)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

最近帮一个朋友评审原理图，他设计了一张板卡，电源入口是DC12V输入。我看他的原理图上，在电源入口位置放了一颗12V的TVS管，用来做输入过压保护，实际上他焊接的是12V的稳压二极管。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacAcwsAbs1x6BNB3gm8y5tnP6mAOiaCSv2yFoBoic7PmcP4ZA24VVk7xomVnRFcZR0UAX6ox8efibrKR69iaCPTVWsdv359VX52JTE/640?wx_fmt=png&from=appmsg)

这里其实是有问题的，很多人觉得TVS和稳压管都是二极管，都能钳位电压，那是不是可以随便换？今天咱们就借这个话题，把TVS管、稳压二极管和ESD静电管这三样东西好好捋一捋。

01

**先从稳压二极管说起**

稳压二极管，也叫齐纳二极管，它的设计初衷就是用来**稳压**的。什么叫稳压？就是你给它一个变化的输入电压，它能在一定范围内给你输出一个相对固定的电压。

咱们看一下它的工作方式。稳压二极管是工作在反向击穿区的。当你给它加反向电压，电压没到它的击穿值之前，它基本不导通，只有很小的漏电流。一旦电压超过那个击穿值，它就突然导通了，而且导通之后，两端的电压就基本稳定在那个击穿值附近，不再随电流增大而明显升高。这个稳定的电压就是它的稳压值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafOeaQoRWsuI3D16Jy7qvcPkatPHoYhOoesf67tCEmES0s1YAk88E3dkHVU1lPNtCFzFjuqkaUZhxzQEDlLsnNVDJzadMkIChU/640?wx_fmt=png&from=appmsg)

稳压二极管有一个很重要的特点，就是它可以**长时间**工作在击穿状态。比如说你用一个15V的稳压管，给它串联一个合适的限流电阻，然后接在24V的电源上，这个稳压管会一直导通，一直把电压稳定在15V附近，后级的电路就能得到一个稳定的15V电源。

但稳压二极管也有它不适合干的活儿。它的功率通常不大，一般的小封装也就几百毫瓦，大一点的SMA封装也就一两瓦。如果你让它长时间导通大电流，它会发热，发热之后稳压值会漂，温度系数这个参数说的就是这个。而且它不擅长扛瞬态的大能量冲击，比如雷击、开关浪涌这些东西，能量太大，它扛不住。

所以稳压二极管适合的场合，是那些需要**持续稳压**的地方，比如给一个芯片供电、给MOS管的栅极做电压钳位、做一个简单的电压基准，它不是用来扛浪涌的。

02

**再说TVS管**

TVS管，全称是瞬态电压抑制二极管，它的设计目标很明确，就是用来**扛浪涌**的。浪涌是什么？就是那种突然出现的、能量比较大的电压尖峰，比如雷击、大电机启动或关断、电源线上有感性负载开关的时候，都会产生浪涌。

TVS管的工作方式和稳压管有点类似，也是反向击穿后钳位电压。但它的设计侧重点完全不一样。TVS管的结面积做得比较大，这样它就能在瞬间通过很大的电流，把大能量的浪涌泄放掉。它的峰值脉冲功率可以做到几百瓦、几千瓦甚至上万瓦，稳压管根本比不了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacEYQGgc05uRsI7iacqNwIP9Eyqsg61WoiaaQVBSJbWk4SFXbyPGOJYtfYPoxcJzvHAWmb291819vqwu5jG66NMMKMvlLSFpl9Jg/640?wx_fmt=png&from=appmsg)

而且TVS管是专门为瞬态事件优化的。它的响应速度足够快，能跟上us级的浪涌波形；它的钳位电压比较平坦，在大电流下也能把电压控制在一个相对稳定的范围内；它还能通过IEC 61000-4-5雷击浪涌测试、IEC 61000-4-4电快速瞬变脉冲群测试这些标准测试。

但TVS管有个特点，它不擅长长时间工作。它是为瞬态设计的，浪涌来了，它瞬间导通，把能量泄掉，然后就恢复。如果你让它像稳压管那样长时间导通，它会过热损坏。所以TVS管不能代替稳压管来做持续稳压。

TVS管适合的场合，就是那些容易遭受浪涌冲击的地方，比如设备的电源入口、汽车电子、工业设备、户外设备。这些地方都需要TVS管来扛第一道冲击。

关于TVS二极管更多内容，请参见我之前的文章：[两起产品事故，让我对TVS产生了敬畏之心](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247558828&idx=1&sn=ddd6faa676fc7174938af0f62c468e0e&scene=21#wechat_redirect)

03

**最后说ESD静电管**

ESD静电管，它的设计目标是专门对付**静电**的。静电和浪涌不一样，静电的特点是电压极高，几千伏甚至上万伏，但能量很小，时间极短，就几个纳秒。这种高压对芯片来说是致命的，但能量小，所以不需要像TVS那样做很大面积的结。

ESD管最关键的参数之一是**电容**。因为它经常挂在高速数据线上，比如USB、HDMI、以太网这些接口，如果电容太大，高速信号就会被衰减、失真，导致通信出问题。所以ESD管的电容通常做到几皮法甚至更低，这样才能不影响信号质量。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafPSgcT4pHuswegS6zpCygwIpOJpW8LcfeIGQoq7U0GJCdWkemYOTC8iad9yl06AYcTGIX0BicUIOEWJ6TTQUibKLyCSicOn9icCSpA/640?wx_fmt=png&from=appmsg)

ESD管的另一个特点就是响应速度极快，纳秒级的静电脉冲它能跟得上。它也专门过IEC 61000-4-2静电测试标准，这个标准分接触放电和空气间隙放电两种方式，都是模拟真实环境里的静电事件。

ESD管不适合用在电源入口，因为它的功率太小，扛不住浪涌。它也不适合做稳压，因为它根本就不是为持续导通设计的。它最适合的地方，就是各种数据接口的保护，比如USB口、网口、CAN总线、音频接口这些地方。

04

**小结**

所以，回到开头的问题：电源入口12V输入，用TVS还是稳压管？相信大家心里已经有数了。

如果是TVS管放在这里，浪涌来的时候，TVS管会瞬间导通，把电压钳在12V左右，把浪涌电流泄放掉。TVS管的功率够大，能扛住这个能量，浪涌过去之后，TVS管恢复，不影响正常工作。

但如果换成稳压二极管，情况就不一样了。稳压二极管的功率通常只有几百毫瓦，扛不住浪涌的能量。浪涌一来，稳压管可能直接就烧了，要么短路要么开路。如果它短路了，输入电源就短路了，前面可能还会烧保险或者烧电源适配器。如果它开路了，那后级电路就没有任何保护了，浪涌直接打进去，后面的芯片也危险。

今天的分享就到这里，咱们下期再见。

推荐阅读（点击如下三个图片分别进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgyRgmc3IPVnQrsQDia5IzRk7ky0rmGqFEia7GEQxcrz1iaD0wFnN100POYsibiaKmsyrwicgBhvsvw30cQ/640?wx_fmt=png&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=10)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247563874&idx=1&sn=66f17e5f20e0bdd4fcf3b587e86fc8ac&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgyRgmc3IPVnQrsQDia5IzRkZf4O5uxJyzfAaeA4PJV31hrUezN9QcRJCibAaKmWHibdcUUkiajeRUVww/640?wx_fmt=png&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=11)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247563472&idx=1&sn=a1cb4ccfbd6d7f4441a418dd8aa3858e&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgyRgmc3IPVnQrsQDia5IzRkVicZrBywwLQNcpe1L7rQvyN9JWza8j9iaicHZXyknNy48wCXdPTHt3PTw/640?wx_fmt=png&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=12)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247562096&idx=1&sn=93c9f5326168fe09bd8030c06b808212&scene=21#wechat_redirect)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/0o3ohHN0niadXxuHsN9Hl1Dl62q3PlqJicXh6gJdkPpziaClWVgJZSteOjYcZNpvCiaeY0WiaOFjjxAThUficnibRXrJaaCseRn4BWVuSYQxxklUvA/640?wx_fmt=jpeg&from=appmsg)