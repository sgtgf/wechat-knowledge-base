# 听我一句劝，PWM波你把握不住

原创 硬件笔记本 2023-04-07 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/ZI1q9P7eG312Ao-FLCkzSQ](https://mp.weixin.qq.com/s/ZI1q9P7eG312Ao-FLCkzSQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

PWM有着非常广泛的应用，比如直流电机的无极调速，开关电源、逆变器等等，个人认为，要充分理解或掌握模拟电路、且有所突破，很有必要吃透这三个知识点：  

-   PWM
    

-   电感
    

-   纹波  
    

PWM是一种技术手段，PWM波是在这种技术手段控制下的脉冲波，如果你不理解是把握不住PWM波的！  

 如下图所示，这种比喻很形象也很恰当，希望对学习的朋友有所帮助与启发。

![](听我一句劝_PWM波你把握不住_images/img_002_924b63747f64.jpg)

PWM全称Pulse Width Modulation：脉冲宽度调制（简称脉宽调制，通俗的讲就是调节脉冲的宽度），是电子电力应用中非常重要的一种控制技术，在理解TA之前我们先来了解几个概念 。

理解PWM可以参考这些文章👉[怎么把PWM信号转为模拟量](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247488746&idx=6&sn=c26568651e0c727f9540d1df7fead0eb&chksm=fad86a14cdafe30297967be15cae05054120203df6b8096276103aaa414e32273d8116a83cf5&scene=21#wechat_redirect)👉[浅析PWM控制电机转速的原理](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247486841&idx=1&sn=be9cff9d8c9484b55b92d5d78aa7337e&chksm=fad87387cdaffa914232c0b60bb2bbc68c1541aa415c0de8a2411edeab21fe2013fcaeac2251&scene=21#wechat_redirect)👉[PWM原理及其应用](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247486540&idx=1&sn=d7d69898a719270301a567558db1be5f&chksm=fad872b2cdaffba499685d62de235e63343f7698dbad4ae6589e57b91375b70a9ced1fdd8565&scene=21#wechat_redirect)

**脉冲波的基本信息如下图所示：**

![](听我一句劝_PWM波你把握不住_images/img_003_dc46fbeeb981.png)

-   **脉冲周期T：**单位是时间，比如纳秒ns、微妙μs、毫秒ms等；  
    
-   **脉冲频率f：**单位是赫兹Hz、千赫兹kHz等，与脉冲周期成倒数关系，即f=1/T；
    
-   **脉冲宽度W：**简称脉宽，是脉冲高电平持续的时间，单位是时间，比如纳秒ns、微妙μs、毫秒ms等；
    
-   **占空比D：**脉宽除以脉冲周期得到的值，百分数表示，比如50%，也常有小数或分数表示的，比如0.5或1/2。  
    

**以上之间的关系如下图所列的公式：**  

![](听我一句劝_PWM波你把握不住_images/img_004_72323d67532c.png)

工程应用中的PWM波是幅值、周期（或频率）不变，脉宽（或占空比）可调的脉冲波，接下来我们来认清该PWM波到底是什么，TA隐藏着什么思想？

当我们想要控制一个直流电机的转速，我们可以通过改变其两端电压即可，但是该种方法有很大的局限性，可调直流电源构造复杂、成本高昂，应用起来很不现实。

所以我们采用另外的控制方式：电压源→驱动器→直流电机，电压源提供直流电压，不同的驱动器控制不同的直流电机，应用非常灵活，其中驱动器对电机的调速控制就是利用PWM。

**可调直流电源控制与PWM控制都是能调速的，那么它们有什么相同之处呢？**

如下图，电机为某相同转速时，红色代表驱动器输出幅值不变的PWM波，蓝色代表可调直流电源输出的电压，两者都是直接作用到负载。

![](听我一句劝_PWM波你把握不住_images/img_005_73b84d8a1f2f.png)

![](听我一句劝_PWM波你把握不住_images/img_006_3a2f110eff48.png)

![](听我一句劝_PWM波你把握不住_images/img_007_018e6fa470f6.png)

**由以上得知：**

当PWM波的占空比越大时，所对应的直流电压与PWM波的幅值越接近；反之与0V越接近。

周期的红色PWM波脉宽下的矩形面积之和与蓝色直流电压的面积相等，即伏秒积相等：

**U红(幅值) × ton = U蓝 × T**

两端同时除以T，得到如下关系式：  

**U红(幅值) × 占空比 = U蓝**

例如当PWM波的幅值为24V，占空比为50%时，与直流电压12V作用到电机上所产生的效果是一模一样的，即速度相同，即24V×50%=12V。  

另外，既然满足这个关系，那PWM波的频率是不是可以随意了，答案当然不是，频率太低会导致电机运转不畅，振动大，噪音大；频率太高会导致驱动器开关损耗较大，甚至有电机会啸叫而不转的情况。

一般1k~30k的PWM频率较为普遍，几百Hz的也有，实际上还是根据电机功率在测试时确定合适的PWM频率范围为宜。  

如下图为实物测试，脉宽在变化，周期不变的PWM波。

![](听我一句劝_PWM波你把握不住_images/img_008_5a5457e5b2b8.gif)

所加负载如下图，为PWM控制电机调速实物测试，有刷直流电机的PWM无极调速，其中LED是并联在电机输入端的，其亮弱反映电机速度的变化。

![](听我一句劝_PWM波你把握不住_images/img_009_050d70aa1e08.gif)

**要点：**

-   PWM波其实就是一种脉宽可连续调节的矩形脉冲波；
    
-   占空比其实就是描述脉宽与脉冲周期的比值，是量化值，便于分析研究，当我们用占空比来表达时，对脉宽就不那么关心了；
    
-   占空比调节就是脉宽调节，表达不一样，但本质是一样的；
    
-   PWM波满足伏秒积计算：U红(幅值) × 占空比 = U蓝，作用效果与直流电压一样。
    

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。