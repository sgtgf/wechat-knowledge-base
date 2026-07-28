# EMC设计攻略 —时钟

原创 硬件笔记本 2021-10-11 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/YuNEpQd162zWSxr3hTqGQg](https://mp.weixin.qq.com/s/YuNEpQd162zWSxr3hTqGQg)

# 时钟晶体电路一般有两种：无源晶体电路和有源震荡器电路。时钟晶体电路一般是辐射发射的干扰源。

  

### 1 无源晶体

无源晶体标准电路如下：

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHM79wrjw3GUK6KvvfuMXgOfNiaSkh2Azx9GRia6MOZtrhf0lM6LULqQG22QKXEXb8aicacFLrXYYecsg/640?wx_fmt=jpeg)  

在实际设计时，R3电阻和C3电容为预留设计。R3电阻可帮助启震；C3电容可改善震荡信号质量。

  

### 2 有源震荡器

标准电路如下：

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHM79wrjw3GUK6KvvfuMXgOfpiaCcewFWSNYiaYbzMHeu7iazp2xBQJ3rjnK4jQtzTpVIcsgIhHpDWgaQ/640?wx_fmt=jpeg)  

实际设计时，C1是预留设计。C1电容可改善震荡器输出信号质量。

供电磁珠一般不可缺省，其作用时防止震荡器的高频信号通过电源污染外部电路。

时钟芯片电源管脚采用LC滤波电路或者PI滤波电路；晶体外壳要做接地设计；时钟信号分叉时在分叉后每路都设置匹配电阻，匹配电阻靠近时钟芯片；T型网络，或采用末端匹配。

  

  

  

  

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
    
-   [](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486018&idx=1&sn=91edd9cf022bd0f1ddf0fb4f2321e3b8&chksm=c309d490f47e5d86e999de5ddf30879ccd1226081cd432ace4574789135f1a0f7564ffd8a0ef&scene=21#wechat_redirect)[为什么在芯片电源入口VCC串一个小电阻？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486018&idx=1&sn=91edd9cf022bd0f1ddf0fb4f2321e3b8&chksm=c309d490f47e5d86e999de5ddf30879ccd1226081cd432ace4574789135f1a0f7564ffd8a0ef&scene=21#wechat_redirect)  
    

  

**后台回复“****加群****”，管理员拉你入技术交流群。**