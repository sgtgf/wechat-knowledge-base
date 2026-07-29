# TTL电平与RS232电平的区别

原创 硬件笔记本 2024-03-13 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/KtAqTGSeiuc\_1100s2TFhQ](https://mp.weixin.qq.com/s/KtAqTGSeiuc_1100s2TFhQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

**TTL电平与RS232电平的区别**

什么是TTL电平、CMOS电平、RS232电平？它们有什么区别呢？一般说来，CMOS电平比TTL电平有着更高的噪声容限。

  

**（一）、TTL电平标准**

**输出 L：<0.8V ；H：>2.4V。**

**输入 L：<1.2V ；H：>2.0V**

TTL器件输出低电平要小于0.8V，高电平要大于2.4V。输入，低于1.2V就认为是0，高于2.0就认为是1。于是TTL电平的输入低电平的噪声容限就只有(0.8-0)/2=0.4V，高电平的噪声容限为(5-2.4)/2=1.3V。

  

**（二）、CMOS电平标准**

**输出 L：<0.1\*Vcc ；H：>0.9\*Vcc。**

**输入 L：<0.3\*Vcc ；H：>0.7\*Vcc.**

由于CMOS电源采用12V，则输入低于3.6V为低电平，噪声容限为1.8V，高于3.5V为高电平，噪声容限高为1.8V。比TTL有更高的噪声容限。

  

**（三）、RS232标准**

**逻辑1的电平为-3～-15V，逻辑0的电平为+3～+15V**，**注意电平的定义反相了一次。** 

TTL与CMOS电平使用起来有什么区别

1.电平的上限和下限定义不一样，CMOS具有更大的抗噪区域。同是5伏供电的话，ttl一般是1.7V和3.5V的样子，CMOS一般是2.2V,2.9V的样子，不准确，仅供参考。

2.电流驱动能力不一样，ttl一般提供25毫安的驱动能力，而CMOS一般在10毫安左右。

3.需要的电流输入大小也不一样，一般ttl需要2.5毫安左右，CMOS几乎不需要电流输入。

**4.很多器件都是兼容TTL和CMOS的，datasheet会有说明。如果不考虑速度和性能，一般器件可以互换。但是需要注意有时候负载效应可能引起电路工作不正常，因为有些ttl电路需要下一级的输入阻抗作为负载才能正常工作。**

1\. TTL电路和CMOS电路的逻辑电平

VOH: 逻辑电平 1 的输出电压

VOL: 逻辑电平 0 的输出电压

VIH : 逻辑电平 1 的输入电压

VIH : 逻辑电平 0 的输入电压

TTL电路临界值：

VOHmin = 2.4V VOLmax = 0.4V

VIHmin = 2.0V VILmax = 0.8V

CMOS电路临界值（电源电压为＋5V）

VOHmin = 4.99V VOLmax = 0.01V

VIHmin = 3.5V VILmax = 1.5V

![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_002_e9d5020b0d20.jpg)

**2\. TTL和CMOS的逻辑电平转换**

**CMOS电平能驱动TTL电平**

**TTL电平不能驱动CMOS电平，需加上拉电阻。**

3\. 常用逻辑芯片特点

74LS系列：TTL 输入: TTL 输出: TTL

74HC系列：CMOS 输入: CMOS 输出: CMOS

74HCT系列：CMOS 输入: TTL 输出: CMOS

CD4000系列：CMOS 输入: CMOS 输出: CMOS

————————————————————————

图：RS232和TTL/CMOS电平反相。

![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_003_5973fbe97c1d.png)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_004_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_005_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_006_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_007_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_008_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_009_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_010_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_011_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_012_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_013_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_014_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_015_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_016_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_017_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_018_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\TTL电平与RS232电平的区别_images\img_019_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。