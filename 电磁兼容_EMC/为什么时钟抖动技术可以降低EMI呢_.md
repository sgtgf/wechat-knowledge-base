# 为什么时钟抖动技术可以降低EMI呢？

原创 硬件笔记本 2024-05-12 11:15 四川

> 原文地址: [https://mp.weixin.qq.com/s/OGRpjQkZOID1WYhrkQda2w](https://mp.weixin.qq.com/s/OGRpjQkZOID1WYhrkQda2w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

时钟抖动技术广泛适应各类周期性脉冲信号，如电学电子设备PWM电压及数字电路时钟信号等。此类周期性脉冲信号对电路设计构成强大干扰，故须慎重对待。

近期，时钟抖动技术作为有效减少周期性脉冲电路电磁干扰的手段备受关注。其运作机制源于傅立叶变换。

脉冲信号经傅里叶变换后，周期性信号呈现出离散谱线特征，其能量相对集中于该谱线上的对应频率；反之，无周期性脉冲的频谱为连续形式，能量均匀分散于全部频率之中。对于时钟抖动技术，这是一种对于时钟电路的运用，旨在让时钟频率产生微小变化，进而令时钟信号的谱线加宽且峰值减小，如图所示的结果示例。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_002_af22fa7c5ba6.png)图 理想时钟信号和抖动时钟信号

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_003_11e860d0c4a0.png)

图 时钟抖动的概念

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_004_37161947b310.png)

图 不同时钟抖动频率某一谐波频率附近的能量分布

时钟抖动可有效降低电子产品的EMI，其原理在于将高频谐波能量分散至更广泛的频段，产生更宽的时钟谱线。在对设备进行电磁兼容性检测，例如RE102测试时，频率宽度相对狭窄的测试接收机会有部分能量超出接收范围，令被测设备得以顺利通过电磁兼容试验。此项技术尤其适用于商用设备，因其通常缺乏完备的屏蔽与滤波措施。而军用设备需满足更为严苛的标准，因此扩谱时钟的效果并不明显，主要依赖于屏蔽与滤波。

扩谱时钟的理念不仅限于数字电路领域，还可应用于其他脉冲电路，如开关电源中的频率调制PWM脉冲信号，有助于降低干扰辐射。以开关电源中的BUCK电路为例，若驱动Q1通断的PWM信号采用扩谱时钟，则红色共模电压区域的电压波形亦会出现抖动现象，进而导致共模电压谐波能量谱线变宽，峰值降低，从而降低了开关电源各谐波频率下的EMI水平。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_005_efebf699e0c7.png)

图 开关电源BUCK电路

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_006_6fdee109cb42.jpg)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_007_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_008_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_009_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_010_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_011_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_012_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_013_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_014_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_015_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_016_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_017_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_018_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_019_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_020_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_021_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为什么时钟抖动技术可以降低EMI呢__images\img_022_50889e54acde.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。