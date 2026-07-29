# 锁相环（PLL）结构和原理（Simple PLL）

原创 电路一点通 2026-05-25 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/WcOLIZAb4n0cJBBKlHCa-A](https://mp.weixin.qq.com/s/WcOLIZAb4n0cJBBKlHCa-A)

## PLL（Phase-Locked Loop，锁相环）

如果要粗略的分割Serdes的结构，那么通常可以说Serdes Core 由 Tx 、Rx 以及PLL三个子模块组成，如图3.1所示。本文将详细介绍PLL的实现原理和内部结构，帮助读者理解。

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_000_fc802f662baf.png)

**PLL的用途：**

1）well-defined clock ——需要有明确定义的时钟供系统或者模块使用，用于同步。

2）分频或者倍频时钟，可以在系统内部进行时分复用。

3）Frequency Synthesizer 频率合成器，在多载波系统中快速跳频，例如蓝牙，WiFi通信中切换channel。只有PLL能够做到低相邻载波干扰。

4）CDR（clock data recover）时钟恢复。这个也是serdes里面重要应用。

5）频率调制，例如FM，FSK，QAM，OFDM等等。

6）SSC（Spread Spectrum Clocking，扩频时钟），串行协议中的时钟频率偏移，用于降低电磁干扰（EMI，Electromagnetic Interference）。

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_001_2fd2a433e1f0.png)

通过输入一个参考时钟，PLL可以输出你想要的时钟。

  

## 最简单的PLL结构，Simple PLL

假设有一个异或门，两个输入为V1，V2，输出为Vo:

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_002_e13d9dee4065.png)

他们之间的相位关系如上图所示，让输出Vo经过一个低通滤波器，那么滤波后的电压可以看成平均值，这个平均电压和V1、V2之间的相位差是线性关系，如下图所示：

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_003_556571a44cf7.png)

由这个输出电压来控制VCO（压控震荡器）：

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_004_a8affa868f2a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_005_eae92f7209a9.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_006_67a53d9fa363.png)

这就说明整个PLL的传递函数H(s)可以看成是一个二阶的低通滤波器。也就是说，如果输入信号频率（相位）突变，输出会缓慢跟随直至相等。具体是怎么恢复到稳态，与低通滤波器和VCO，PD属性有关，即过阻尼，欠阻尼，临界阻尼三种跟随方式。

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_007_1fe467308e59.png)

图中通过欠阻尼 (ζ<1 ) 和过阻尼 (ζ>1 ) 的响应曲线，揭示了 PLL 设计中的动态性能与稳定性的矛盾，总结如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_008_b15a42ed24ae.png)

  

## 总结异或门 + 低通滤波器的具体问题

-   ![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环（PLL）结构和原理（Simple_PLL）_images\img_009_74dee321d4ec.png)
    
-   **低通滤波器 (LPF)**：
    

-   LPF 滤除高频噪声，但若截止频率设计不当（太低），会进一步减慢响应；若太高，则无法有效抑制振荡。
    

这也说明了这种结构的Simple PLL存在着以下问题：

-   稳定时间和抖动之间的矛盾。
    
-   Phase 之间的关系不确定，随着温度电路改变。
    
-   存在稳定性问题，即欠阻尼下过冲震荡。
    
-   不知道锁定范围有多大，与回路带宽有关。
    

  

参考：**李致毅教授   ，B站视频：****鳌中堂讲电路**

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&scene=21#wechat_redirect)

[硬件研发项目绩效管理规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568647&idx=2&sn=7149635c7022ba5cfdfdb1c8e430b18c&scene=21#wechat_redirect)

[电源技术经理开发全流程管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568488&idx=2&sn=93907d8e1727aa66c04de69cc0787236&scene=21#wechat_redirect)

[电子工程师产品风险及可靠性分析手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568655&idx=2&sn=1a21518b71b9f1ea35e542830d1822de&scene=21#wechat_redirect)

[硬件研发项目绩效管理规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568647&idx=2&sn=7149635c7022ba5cfdfdb1c8e430b18c&scene=21#wechat_redirect)

[智能硬件全流程测试手册：构建高效测试体系](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568440&idx=2&sn=e97b55d6ae91af88403f9033a6e54e42&scene=21#wechat_redirect)

[硬件设计说明书编制规范手册（标准Word版）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568416&idx=2&sn=a6fbb11d722eb24bd0d67207d27e23c2&scene=21#wechat_redirect)

[硬件产品经理市场调研分析手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568392&idx=1&sn=53fba20d380e3c0eef53eac93860175b&payreadticket=HEfeLt-x_BTSXASkTFqLUQVhT2UVByzLeZQVQcVqbvbPGlBGAq5DY1HTpl_itCzChAspp_c&scene=21#wechat_redirect)  

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&payreadticket=HFdBQY7_cStRwxFyhiZc4F5sgsuqMGwHf_ZPJmxgWHlbGzXuB6iraKpTnhjLOLKrv9pfbzo&scene=21#wechat_redirect)

[硬件管理手册大全](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&subscene=159&subscene=&scenenote=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FWhqUq3T1lnbOmehPtZLAKw%3Fpayreadticket%3DHDnnxEhhFBpmokDMFuODBmtUAznQCLZ8hyEJPEF-Gc2ezwgNQEJu1Bd2u-7kt6dVTiStbNQ&nolastread=1#wechat_redirect)

  

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️