# 为了防止BUCK电源对传导测试的影响，我加了π型滤波，但电感又开始了啸叫。。。

原创 蜗牛 硬件笔记本 2021-10-04 19:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/qckMkCnWYnA\_fUIsKAPu0w](https://mp.weixin.qq.com/s/qckMkCnWYnA_fUIsKAPu0w)

 ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")  

  

大家好，我是蜗牛。今天跟大家分享一个跟BUCK电路有关的设计实例。我们在电路设计和测试的过程中，遇到了一些问题，也花费了几天时间，我觉得有必要记录下来分享给大家，希望你在遇到这些问题时能少走弯路。

  

  

一、简要说明

  

如下示意图，AC-DC模块→π型滤波电路→BUCK电路

  

![](为了防止BUCK电源对传导测试的影响_我加了_型滤波_但电感又开始了啸叫____images/img_002_8663bae2a34a.png)

图1，电路示意图

  

AC-DC模块的作用是将交流电转换为直流电+12V，

BUCK电路的作用是将+12V转化为+5V或+3.3V以供电给其他芯片。

  

为什么要加π型滤波电路呢？π型滤波电路由滤波电感L1，滤波电容C1，C2，C3和C4组成。π型滤波前还有大电解电容没有画出。π型滤波器的作用主要是用来过滤BUCK电路产生的EMI，以阻止对电网产生的电磁干扰。

  

  

二、遇到的问题

  

1.BUCK芯片不能带重载。

  

2.随着负载的增加，电感L1会发生啸叫，而且负载越重，啸叫的声音越大。

  

  

三、分析解决

  

我们选用的是一款比较常用的BUCK芯片，按道理来说不应该出现带不了重载的情况。难道是π型滤波电路的问题？还是虚焊？外围电路参数设置不对？买到了假芯片？

  

我们进行了各种猜想，使用了排除法，并将L1直接短路。最后再参照规格书，发现PCB布板的地回路没有走好，将地回路飞线后，带重载完全没问题。（所以对没用过的芯片，一定要熟悉规格书）。

  

![](为了防止BUCK电源对传导测试的影响_我加了_型滤波_但电感又开始了啸叫____images/img_003_b3a524a5b47e.png)

图2，BUCK芯片走线示意图

  

找到了芯片带不起重载的原因，然后我们又将L1焊上再试。刚开始的时候一切正常，因为负载还不多。随着负载的增加，很明显听到刺耳的声音，最后才发现原来是电感L1发出的啸叫声，用手触摸也明显的感觉到电感本身发烫。

  

我就奇怪了，为什么会这样呢？感觉理论知识不够用了。于是我尝试将电感L1换成现用的另外一款，突然声音明显变小，而且也没有原来那么烫了。

  

**尝试分析原因，有两个发现：**

①两种电感的直流电阻DCR分别是330Ω，38Ω，差距比较明显，通常较大的DCR会引起热损，特别是在重载的情况下。  

  

②两种电感的封装不一样，封装较大的效果会更好。  

  

  

更换电感后，有改善，但问题始终没有得到解决。但可以看出问题就在这个π型滤波电路上。

  

我又想BUCK电路本身是一个开关电源，在开关的过程中可能对电路产生了影响。于是测试了L1到BUCK的波形，很明显纹波比较大，于是在C3，C4上并联了一个大电容，最后问题得到解决。

  

以上就是今天分享的内容，希望对你有帮助。

  

  

推荐阅读

  

  

  

-   [电路原理图设计，你不得不知道的英文缩写](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486121&idx=1&sn=58cbb4632012b5a2e12e9a406c490977&chksm=c309d47bf47e5d6d9b1093d9cc97f55285260fd5c441adb65d0e1dc0c35c7321216e6748ebb4&scene=21#wechat_redirect)  
    
-   [单片机外围电路设计需要注意的十个事项](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486118&idx=1&sn=dd2334aee5ef20fe927b34c2eaa68149&chksm=c309d474f47e5d6257a68692856c0073055e4bf8bc55606d92812fa32bf989e650d46d7c1d9f&scene=21#wechat_redirect)
    
-   [PCB为什么一定要弧形走线？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486111&idx=1&sn=6f54b1669564acf50501e4f9eb84efc5&chksm=c309d44df47e5d5bd140566931d2bd2dcf6f2f27e2fbe46fba9e666f27bb7bf3339ade9f1ff3&scene=21#wechat_redirect)
    
-   [2021第一次公众号文章全面梳理](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486104&idx=1&sn=6d7cf3cdaefb60b23acf0346acd62357&chksm=c309d44af47e5d5c806863a5d11aeefe9fa8d3ae6086e390e55d6d1c9572dd70514882f030c6&scene=21#wechat_redirect)
    
-   [干货|分享一个EMC实际案例及整改过程](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486099&idx=1&sn=2286f7203e784b48a5ea2efeaefedb38&chksm=c309d441f47e5d57c713bf0594bd7e431dac5f001dcc93a9f606f7c5aada66da95b019c2ea7f&scene=21#wechat_redirect)
    
-   [整改了七次，花了半个月时间，惨痛的EMC总结。](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486070&idx=1&sn=3605db57e6eba1dd74e0495d956a8ae9&chksm=c309d4a4f47e5db206c03d2d7a2a8592b0880b525b03741cb02c3ffb74c200ce77716dce29a8&scene=21#wechat_redirect)
    
-   [I2C总线为什么要接上拉电阻](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486088&idx=1&sn=58d810cc779bc9e0b7caf26c4aa529c5&chksm=c309d45af47e5d4c78296b6201411bbd89fe6d6685591b9b6b23941c0ed6f427bb23f9913a42&scene=21#wechat_redirect)
    
-   [Altium Designer常用快捷键](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486036&idx=1&sn=85df6dd04c35c3805fd1240259221afe&chksm=c309d486f47e5d9047e5f5b24573af9d6c4b33b82f06ec5e5e17851ebb118b823e9e909db51a&scene=21#wechat_redirect)
    
-   [我想成为一名硬件工程师，有没有什么比较好的方法？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486076&idx=1&sn=8ae019f32f0c94dab1b9007e91aeadc8&chksm=c309d4aef47e5db81fd104bff8da4d9b9d07120676779331592d42fe2b6d64f57f66bd9035c1&scene=21#wechat_redirect)
    
-   [为什么模拟地更容易被干扰？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486083&idx=1&sn=d6ad6965bec7f366cf193cf4554f66c3&chksm=c309d451f47e5d47dd644144ee088ed43996f6456024bcfda71645d87e16761fc045294b7669&scene=21#wechat_redirect)
    
-   [那些在LAN8720调试过程中踩过的坑，你是否遇到过？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486517&idx=1&sn=afad325b26f8e64223a326ed2662257a&chksm=c309d2e7f47e5bf1f6972992c395eacd77a3e4e91a48148bc7561ff84f756fb96d06b9311bd0&scene=21#wechat_redirect)